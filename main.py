# import detectFace
# import movementDetection
from firebaseConn import FirebaseConn

# detect = detectFace.DetectFace()
# sensor = movementDetection.MovementDetection()
# sensor.start()
# detect.start()
fire = FirebaseConn()
fire.get_time_by_name('Joe')
