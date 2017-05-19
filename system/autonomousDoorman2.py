import os
import time
from threading import Thread
from faceRecognition import FaceRecognition
from firebaseConn import FirebaseConn
from detectFace2 import DetectFace
import numpy as np


# from movementDetection import MovementDetection


class AutonomousDoorman(Thread):
    def __init__(self, debug_flag=False):
        # self.sensor = MovementDetection()
        self.sensor = 1
        self.detect = DetectFace(sensor=self.sensor)
        self.face = FaceRecognition()
        self.running_thread = False
        self.save_pictures = True
        self.fire = FirebaseConn()
        self.debug_flag = debug_flag
        super(AutonomousDoorman, self).__init__()

    """
        Tries to recognize faces in directory
    """

    def recognize_faces(self):
        recognized_faces = []

        self.detect.save_pictures = False
        files = os.listdir("./")
        for f in files:
            if f.endswith(".jpg"):
                print('>>Predicting ' + f)
                person, confidence = self.face.predict(f)
                if confidence > 0.8:
                    recognized_faces = [[person, confidence]] if not recognized_faces \
                        else np.vstack((recognized_faces, (person, confidence)))

        self.delete_images()
        self.detect.save_pictures = True

        return recognized_faces

    """
        Delete old pictures that were already classified.
    """

    def delete_images(self):
        if self.debug_flag:
            print('Deleting images')

        files = os.listdir("./")
        for f in files:
            if f.endswith(".jpg"):
                os.remove(os.path.join("./", f))

    def run(self):
        if self.debug_flag:
            print('Updating system')
        # self.face.delete_classifier()
        # self.fire.get_pictures()
        # self.face.train()

        # self.sensor.start()
        if self.debug_flag:
            print('Starting movement sensor.')

        self.detect.start()
        if self.debug_flag:
            print('Starting camera and detecting faces.')
        self.save_pictures = True
        self.detect.save_pictures = True
        while True:
            # if self.sensor.getStatus() == 1:
            if self.sensor == 1:
                recognized_faces = self.recognize_faces()
                print(recognized_faces)

                liveness = self.detect.liveness_prediction
                print('liveness: {}'.format(liveness))

                in_time = False
                for face in recognized_faces:
                    time_allowed, in_time_groups = self.fire.get_in_time_allowance(face[0])
                    if time_allowed:
                        in_time = True

                print('In time: {}'.format(in_time))

                if recognized_faces and in_time and liveness > 0.8:
                    print('ACCESS GRANTED!!')
                else:
                    print('ACCESS DENIED!')

                self.detect.liveness_prediction = 0.0

                time.sleep(1)
            else:
                time.sleep(5)
