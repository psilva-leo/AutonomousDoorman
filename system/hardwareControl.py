import RPi.GPIO as GPIO
import time
from threading import Thread


class HardwareControl(Thread):
    def __init__(self):
        self.sensorPin = 17
        self.openPin = 27
        self.sensorStatus = 0
        self.setup()
        super(HardwareControl, self).__init__()

    def setup(self):
        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.openPin, GPIO.OUT)
        GPIO.setup(self.sensorPin, GPIO.IN)

        GPIO.output(self.openPin, 0)

    def open_door(self):
        print('opening door')
        GPIO.output(self.openPin, 1)
        time.sleep(1)
        GPIO.output(self.openPin, 0)

    def run(self):
        while True:
            self.sensorStatus = GPIO.input(self.sensorPin)
