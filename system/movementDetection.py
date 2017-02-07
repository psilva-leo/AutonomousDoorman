import RPi.GPIO as GPIO
import time
from threading import Thread


class MovementDetection(Thread):

    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(3, GPIO.OUT)
    GPIO.setup(11, GPIO.IN)
    sensor = 0

    def run(self):
        count = 0
        while True:
            self.sensor = GPIO.input(11)
            count += 1
            print(count)
            if self.sensor == 0:
                print('No one at the door')
                GPIO.output(3, 0)
                time.sleep(1)

            elif self.sensor == 1:
                print('Some one at the door')
                GPIO.output(3, 1)
                time.sleep(1)

    def getStatus(self):
        return self.sensor
