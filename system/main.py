import detectFace
# import movementDetection
from firebaseConn import FirebaseConn

detect = detectFace.DetectFace()
# sensor = movementDetection.MovementDetection()
# sensor.start()
detect.start()

