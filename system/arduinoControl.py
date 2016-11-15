from nampy import ArduinoApi, SerialManager
import time

ledPin = 7
buttonPin = 8
ledState = False
buttonState = 0

try:
    connection = SerialManager()
    a = ArduinoApi(connection=connection)
except:
    print('Failed to connect with Arduino')

# Seteup the PinMondes as Arduino IDE
a.pinMode(ledPin, a.OUTPUT)
a.pinMode(buttonPin, a.INPUT)

try:
    while True:
        buttonState = a.digitalRead(ButtonPin)
        print('Button state: {}'.format(buttonState))

        if buttonState:
            ledState:
                a.digitalWrite(ledPin, a.LOW)
                ledState = False
                ptint('LED OFF')
                time.sleep(1)
            else:
                a.digitalWrite(ledPin, a.HIGH)
                ledState = True
                print('LED ON')
                time.sleep(1)

except:
    a.digitalWrite(ledPin, a.LOW)
                
    
