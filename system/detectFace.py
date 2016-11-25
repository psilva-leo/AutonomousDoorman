import numpy as np
import time
import cv2
from threading import Thread
import thread
import os
# from movementDetection import MovementDetection
from faceRecognition import FaceRecognition
from firebaseConn import FirebaseConn

class DetectFace(Thread):

    sensor = None

    """
        Class constructor. Receives a sensor (MovementDetection)
    """
    def __init__(self):
        self.sensor = 1
        self.face = FaceRecognition()
        self.running_thread = False
        self.fire = FirebaseConn()
        super(DetectFace, self).__init__()

    """
        Delete old pictures that were already classified.
    """
    def deletePics(self):
        files = os.listdir("./")
        for file in files:
            if file.endswith(".jpg"):
                os.remove(os.path.join("./", file))

    """
        Tries to recognize faces in directory
    """
    def recognizeFace(self):
        if not self.running_thread:
            self.save = False
            self.running_thread = True
            self.times = None
            files = os.listdir("./")
            for f in files:
                if f.endswith(".jpg"):
                    print('Predicting '+f)
                    [predicted, precision] = self.face.predict(f)
                    if predicted is None:
                        print('No match\n')
                    else:
                        self.times = self.fire.get_time_by_name(predicted)
                        print(predicted + " with " + precision + " precision. Allowed to enter from "
                              + str(self.times[0].time()) + " to " + str(self.times[1].time()) + "\n")
            self.deletePics()
            self.save = True

            self.running_thread = False

    """
        Run thread that detect faces. It detects faces when the sensor is 1 (up) which means there is some one at the
        door. Then it calls the RecognizeFace class and if the person at the door is authorized to enter it opens the
        door calling the Arduino.

    """
    def run(self):
        self.save = True
        faceCascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
        cap = cv2.VideoCapture(0)

        while True:
            if self.sensor == 1:
                ret, img = cap.read()
                gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
                faces = faceCascade.detectMultiScale(gray, 1.3, 5)

                count = 0
                for (x, y, w, h) in faces:
                    cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)
                    roi_gray = gray[y:y + h, x:x + w]
                    roi_color = img[y:y + h, x:x + h]
                    if self.save:
                        cv2.imwrite('fig' + str(count) + '.jpg', img[y:y + h, x: x + w])
                    count += 1

                # recognize face
                thread.start_new_thread(self.recognizeFace, ())

                # Arduino

                cv2.imshow('img', img)
                k = cv2.waitKey(30) & 0xff
                if k == 27:
                    break
            else:
                time.sleep(1)

        cap.release()
        cv2.destroyAllWindows()

