import numpy as np
import time
import cv2
from threading import Thread
from picamera.array import PiRGBArray
from picamera import PiCamera

class DetectFace(Thread):

    sensor = None

    """
        Class constructor. Receives a sensor (MovementDetection)
    """
    def __init__(self, sensor):
        self.sensor = sensor
        self.save_pictures = True
        super(DetectFace, self).__init__()

    """
        Run thread that detect faces. It detects faces when the sensor is 1 (up) which means there is some one at the
        door. Then it calls the RecognizeFace class and if the person at the door is authorized to enter it opens the
        door calling the Arduino.

    """
    def run(self):
        face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
        camera = PiCamera()
        camera.resolution = (640, 480)
        camera.framerate = 32
        camera.brightness = 70
        rawCapture = PiRGBArray(camera, size=(640, 480))

        time.sleep(0.1)

        for frame in camera.capture_continuous(rawCapture, format="bgr", use_video_port=True):
            if self.sensor == 1:
                img = frame.array

                gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
                faces = face_cascade.detectMultiScale(gray, 1.3, 5)

                count = 0
                for (x, y, w, h) in faces:
                    cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)
                    roi_gray = gray[y:y + h, x:x + w]
                    roi_color = img[y:y + h, x:x + h]
                    # print('DetectFace: '+str(self.save_pictures))
                    if self.save_pictures:
                        cv2.imwrite('fig' + str(count) + '.jpg', img[y:y + h, x: x + w])
                        count += 1

                cv2.imshow('img', img)
                k = cv2.waitKey(30) & 0xff
                rawCapture.truncate(0)
                if k == 27:
                    break
            else:
                time.sleep(1)

        cv2.destroyAllWindows()
