import numpy as np
import time
import cv2
from threading import Thread
#from picamera.array import PiRGBArray
#from picamera import PiCamera
import openface
from sklearn.externals import joblib
from livenessDetection import colbp, lpq
import threading


class DetectFace(Thread):

    sensor = None

    """
        Class constructor. Receives a sensor (MovementDetection)
    """
    def __init__(self, sensor, Autonomous):
        self.processing = False
        self.autonomous = Autonomous
        self.count = 1
        self.accuracy = 0.0
        self.predict = 0
        self.liveness_prediction = 0.0

        self.sensor = sensor
        self.save_pictures = True
        super(DetectFace, self).__init__()

    """
        Run thread that detect faces. It detects faces when the sensor is 1 (up) which means there is some one at the
        door. Then it calls the RecognizeFace class and if the person at the door is authorized to enter it opens the
        door calling the Arduino.

    """
    def run(self):
        def liveness_detection(frame):

            if not self.processing:
                start = time.time()
                threads = []
                self.processing = True
                # cv2.imwrite('frame'+str(count)+'.png', frame)
                frame_hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
                frame_ycrcb = cv2.cvtColor(frame, cv2.COLOR_BGR2YCrCb)

                #print('Worker')
                deltas = [1, 2, 4]
                ases = [2, 4, 8]

                lpq_res = lpq(frame_ycrcb[:, :, 0])
                lpq_res += lpq(frame_ycrcb[:, :, 1])
                lpq_res += lpq(frame_ycrcb[:, :, 2])

                lpq_res = np.append(lpq_res, colbp(frame_hsv[:, :, 0], 1, 2))
                lpq_res = np.append(lpq_res, colbp(frame_hsv[:, :, 1], 2, 4))
                lpq_res = np.append(lpq_res, colbp(frame_hsv[:, :, 2], 4, 8))

                predict = clf.predict([lpq_res])
                prediction = 'person' if predict[0] == 0.0 else 'fake'

                print('prediction: ' + prediction)
                self.accuracy += (predict[0] == 0)

                # accuracy /= 100.
                self.liveness_prediction = self.accuracy / (self.count * 1.0)
                #print(self.liveness_prediction)
               # print('accuracy {} | {}'.format(self.accuracy / self.count * 1.0, self.liveness_prediction))
                self.count += 1

                end = time.time()
                #print('Worker out {}'.format(end - start))
                self.processing = False

            return

        cap = cv2.VideoCapture(0)
        dLibFacePredictor = '/home/leo/openface/models/dlib/shape_predictor_68_face_landmarks.dat'
        align = openface.AlignDlib(dLibFacePredictor)
        m = n = imgDim = 96
        time.sleep(0.02)
        threads = []
        clf = joblib.load('svm.pkl')

        while (True):
            # Capture frame-by-frame
            ret, frame = cap.read(0)
            cv2.imshow('frame', frame)

            if not self.processing and self.autonomous.training is False:
                # buf = np.asarray(frame)
                # rgbFrame = np.zeros((480, 640, 3), dtype=np.uint8)
                # rgbFrame[:, :, 0] = buf[:, :, 2]
                # rgbFrame[:, :, 1] = buf[:, :, 1]
                # rgbFrame[:, :, 2] = buf[:, :, 0]
                rgbFrame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

                bbs = align.getAllFaceBoundingBoxes(rgbFrame)

                print('number of faces: %s' % len(bbs))

                face_number = 0
                for bb in bbs:
                    if bb.bottom() - bb.top() > m and bb.right() - bb.left() > n:
                        cropped_frame = frame[bb.top(): bb.bottom(), bb.left(): bb.right()].copy()

                        if self.save_pictures:
                            cv2.imshow('saved img', cropped_frame)
                            cv2.imwrite('face' + str(face_number) + '.jpg', cropped_frame)
                        cropped_frame = cv2.resize(cropped_frame, (imgDim, imgDim), interpolation=cv2.INTER_CUBIC)
                        face_number += 1

                        t = threading.Thread(target=liveness_detection, args=(cropped_frame,))
                        threads.append(t)
                        t.start()

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

        cap.release()
        cv2.destroyAllWindows()

