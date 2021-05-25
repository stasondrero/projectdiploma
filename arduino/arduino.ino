#define p1 3
#define p2 4
#define p3 5
#define p4 6
#define p5 7
#define p6 8

int incomingByte;
int pin;
int mode;
int pinCount;

void setup(){
  Serial.begin(9600);
  pinMode(p1, OUTPUT);
  pinMode(p2, OUTPUT);
  pinMode(p3, OUTPUT);
  pinMode(p4, OUTPUT);
  pinMode(p5, OUTPUT);
  pinMode(p6, OUTPUT);
  pinCount = 6;
}
void loop(){
  if(Serial.available() > 0){
    incomingByte = Serial.parseInt();
    pin = ((incomingByte - incomingByte % 10) / 10) + 2;
    mode = incomingByte % 10;

    if(mode != 0 && mode != 1){
      mode = 0;
    }
    if(pin <= pinCount + 2){
      Serial.println(pin);
      Serial.println(mode);
      digitalWrite(pin, mode);
    }
  }
}
