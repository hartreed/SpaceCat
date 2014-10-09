const int btn = 3;

void setup() {
  pinMode(btn,INPUT);
  pinMode(13,OUTPUT); 
  Serial.begin(9600);
  //Serial.println("hello space world");

}

void loop() {
  if(digitalRead(btn)==HIGH) {
    Serial.println("H");
  }else{
    Serial.println("L");
  }
   
  delay(100);
}
