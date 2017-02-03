import os
import time
from threading import Thread
from faceRecognition import FaceRecognition
from firebaseConn import FirebaseConn
from detectFace import DetectFace
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
        self.times = None
        self.debug_flag = debug_flag
        super(AutonomousDoorman, self).__init__()

    """
        Tries to recognize faces in directory
    """
    def recognize_faces(self):
        recognized = False

        if not self.running_thread:
            self.detect.save_pictures = False
            self.running_thread = True
            self.times = None
            files = os.listdir("./")
            for f in files:
                if f.endswith(".jpg"):
                    print('Predicting ' + f)
                    [predicted, precision] = self.face.predict(f)
                    if predicted is None:
                        print('No match\n')
                        permission = "Not registered"
                        self.fire.set_log_no_match(success=False, permission=permission, file_name=f)
                    elif precision < 0.7:
                        print('No match\n')
                        permission = "No registered"
                        self.fire.set_log_no_match(success=False, permission=permission, file_name=f)
                    else:
                        predicted = int(predicted)
                        predicted_name = self.fire.get_name_by_id(predicted)
                        in_time, in_time_groups = self.fire.get_in_time_allowance(predicted)
                        if in_time:
                            permission = "Allowed by " + "".join(in_time_groups)
                            print(predicted_name + " with " + str(precision) + " precision. " + permission)
                            self.fire.set_log(member=self.fire.get_member_by_id(predicted), member_id=predicted, success=True, permission=permission, file_name=f)
                            recognized = True
                        else:
                            permission = "Not allowed to enter. Out of time"
                            print(predicted_name + " with " + str(precision) + " precision. " + permission)
                            self.fire.set_log(member=self.fire.get_member_by_id(predicted), member_id=predicted,
                                              success=False, permission=permission, file_name=f)
                            recognized = False

            self.delete_images()
            self.detect.save_pictures = True

            self.running_thread = False
            return recognized

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
                access = self.recognize_faces()

                if access:
                    print('AutonomousDoorman: Access granted!')
                    # Call arduino
                    time.sleep(5)

                time.sleep(0.3)
            else:
                time.sleep(5)
