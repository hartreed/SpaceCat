/*SPACE CAT*******
*This sketch sends an 'H' to the serial port when a button is pressed, and an 'L' otherwise.
*The serial port is then read by a PHP script which checks the most recent input, and passes the value
*to the browser through JS.
***************************/

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
