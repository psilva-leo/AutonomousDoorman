import os
import time
from threading import Thread
from faceRecognition import FaceRecognition
from firebaseConn import FirebaseConn
from detectFace2 import DetectFace
from hardwareControl import HardwareControl
import numpy as np


# from movementDetection import MovementDetection


class AutonomousDoorman(Thread):
    def __init__(self, debug_flag=False):
        self.hardware_control = HardwareControl()
        self.detect = DetectFace(hardware_control=self.hardware_control, Autonomous=self)
        self.face = FaceRecognition()
        self.training = False
        self.save_pictures = True
        self.fire = FirebaseConn(Autonomous=self, hardware_control=self.hardware_control)
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
            if f.endswith(".jpg") and f != "adm.jpg":
                print('>>Predicting ' + f)
                person, confidence = self.face.predict(f)
                print('predicted person: {} | confidence: {}'.format(person, confidence))
                if confidence > 0.7:
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
            if f.endswith(".jpg") and f != "adm.jpg":
                os.remove(os.path.join("./", f))

    def run(self):
        if self.debug_flag:
            print('Updating system')

        if self.debug_flag:
            print('Starting movement sensor.')

        self.hardware_control.start()
        self.detect.start()

        if self.debug_flag:
            print('Starting camera and detecting faces.')
        self.save_pictures = True
        self.detect.save_pictures = True
        while True:
            # if self.sensor.getStatus() == 1:
            if self.hardware_control.sensorStatus == 1 and self.training is False:
                recognized_faces = self.recognize_faces()
                print(recognized_faces)

                liveness = self.detect.liveness_prediction
                print('liveness: {}'.format(liveness))

                in_time = False
                who = ""
                for face in recognized_faces:
                    time_allowed, in_time_groups = self.fire.get_in_time_allowance(face[0])
                    if time_allowed:
                        who = face[0]
                        in_time = True

                print('In time: {}'.format(in_time))

                if recognized_faces and in_time and liveness > 0.7:
                    print('ACCESS GRANTED!!')
                    self.hardware_control.open_door()
                    i = 0
                    for face in recognized_faces:
                        permission = "({}) Allowed by {}".format(who, in_time_groups)
                        self.fire.set_log(member=self.fire.get_member_by_id(face[0]), member_id=face[0],
                                          success=True, permission=permission,
                                          file_name='face' + str(i) + '.jpg')
                        i += 1
                else:
                    print('ACCESS DENIED!')

                    if recognized_faces:
                        i = 0
                        for face in recognized_faces:
                            permission = "Not allowed. Out of time"
                            self.fire.set_log(member=self.fire.get_member_by_id(face[0]), member_id=face[0],
                                              success=False, permission=permission,
                                              file_name='face' + str(i) + '.jpg')
                    else:
                        permission = "Not Registered."
                        files = os.listdir("./")
                        for f in files:
                            self.fire.set_log_no_match(success=False, permission=permission, file_name=f)

                self.detect.liveness_prediction = 0.0

                time.sleep(1)
            else:
                time.sleep(5)
