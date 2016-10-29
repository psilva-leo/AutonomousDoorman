import detectface
import movementDetection

detect = detectface.DetectFace()
sensor = movementDetection.MovementDetection()
sensor.start()
detect.start()
