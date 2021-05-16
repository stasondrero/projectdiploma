int leds [3] = {13,12,11};

int x = 0;

void setup(){
  Serial.begin(9600);
  for(int i = 0; i < 3; i++){
   pinMode(leds[i], OUTPUT);
  }
}

void loop(){
  if(Serial.available() > 0){
    x = Serial.read() - '0';
    Serial.println(x);
  }
  if(x == 1){
    digitalWrite(leds[0], HIGH);
  }else if(x == 2){
    digitalWrite(leds[1], HIGH);
  }else if(x == 3){
    digitalWrite(leds[2], HIGH);
  }else if(x == 4){
    digitalWrite(leds[0], LOW);
  }else if(x == 5){
    digitalWrite(leds[1], LOW);
  }else if(x == 6){
    digitalWrite(leds[2], LOW);
  }else if(x == 9){
    digitalWrite(leds[0], HIGH);
    digitalWrite(leds[1], HIGH);
    digitalWrite(leds[2], HIGH);
  }else if(x == 0){
    digitalWrite(leds[0], LOW);
    digitalWrite(leds[1], LOW);
    digitalWrite(leds[2], LOW);
  }
  
}
