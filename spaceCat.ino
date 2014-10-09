const int btn = 3; //Define the external push button pin

void setup() {
  pinMode(btn,INPUT);//Initialize it as an input
  Serial.begin(9600);
  //Serial.println("hello space world");
}

void loop() {
  if(digitalRead(btn)==HIGH) { //If the button is pressed, send a signal to the serial port
    Serial.println("H");
  }else{
    Serial.println("L");
  }
  delay(100);//Wait a bit
}
