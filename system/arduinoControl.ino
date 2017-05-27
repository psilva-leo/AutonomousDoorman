const int motorPin1 = 8;
const int motorPin2 = 9;
const int motorPin3 = 10;
const int motorPin4 = 11;
const int delayTime = 50;

const int buttonPin = 4;     // the number of the pushbutton pin
const int raspPin = 5;     // the number of the pushbutton pin
const int sensorPin =  12;      // the number of the PIR sensor pin
const int openPin =  13;      // the number of the LED pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status
int sensorState = 0;         // variable for reading the sensor
int raspState = 0;         // variable for reading the raspberry command

void setup() {
  Serial.begin(9600);      // open the serial port at 9600 bps:
  // initialize the LED pin as an output:
  pinMode(openPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
  pinMode(raspPin, INPUT);
  pinMode(sensorPin, INPUT);
  
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(motorPin3, OUTPUT);
  pinMode(motorPin4, OUTPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);
  sensorState = digitalRead(sensorPin);
  raspState = digitalRead(raspPin);
  
  Serial.print("Open Btn: ");
  Serial.print(buttonState);
  Serial.print(" | Motion sensor: ");
  Serial.print(sensorState);
  Serial.print(" | Raspberry: ");
  Serial.print(raspState);
  Serial.print("\n");

  // check if the pushbutton is pressed.
  // if it is, the buttonState is HIGH:
  if (buttonState == HIGH || raspState == HIGH) {
    digitalWrite(openPin, HIGH);
    open();
    delay(2000);
    close();
  }
  else {
    // turn LED off:
    digitalWrite(openPin, LOW);
  }
}


void open(){
  int count = 0;
  while(count < 13){
    digitalWrite(motorPin1, HIGH);
    digitalWrite(motorPin2, LOW);
    digitalWrite(motorPin3, LOW);
    digitalWrite(motorPin4, LOW);
    delay(delayTime);
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, HIGH);
    digitalWrite(motorPin3, LOW);
    digitalWrite(motorPin4, LOW);
    delay(delayTime);
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, LOW);
    digitalWrite(motorPin3, HIGH);
    digitalWrite(motorPin4, LOW);
    delay(delayTime);
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, LOW);
    digitalWrite(motorPin3, LOW);
    digitalWrite(motorPin4, HIGH);
    delay(delayTime);
    count ++;
  }
}

void close(){
  int count = 0;
  while(count < 13){
    digitalWrite(motorPin1, HIGH);
    digitalWrite(motorPin4, LOW);
    digitalWrite(motorPin3, LOW);
    digitalWrite(motorPin2, LOW);
    delay(delayTime);
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin4, HIGH);
    digitalWrite(motorPin3, LOW);
    digitalWrite(motorPin2, LOW);
    delay(delayTime);
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin4, LOW);
    digitalWrite(motorPin3, HIGH);
    digitalWrite(motorPin2, LOW);
    delay(delayTime);
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin4, LOW);
    digitalWrite(motorPin3, LOW);
    digitalWrite(motorPin2, HIGH);
    delay(delayTime);
    count ++;
  }
}

