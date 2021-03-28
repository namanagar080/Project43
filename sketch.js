var hr,min,sec;
var scAngle,minAngle,hrAngle

function setup() {
  createCanvas(800,400);

angleMode(DEGREES);

}

function draw() {
  background(255,255,255); 
  translate(200,200);
  rotate(-90);
  hr=hour();
  min=minute();
  sec=second(); 
  scAngle=map(sec,0,60,0,360);
minAngle=map(min,0,60,0,360);
hrAngle=map(hr%12,0,60,0,360);
push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7)
line(0,0,100,0);

pop();

push();
rotate(minAngle);
stroke(0,255,0);
strokeWeight(7)
line(0,0,75,0);

pop();


//point(0,0);

push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7)
line(0,0,50,0);

pop();
noFill();
strokeWeight(7);
stroke(0,0,255);
arc(0,0,220,220,0,hrAngle);
stroke(255,0,0);
arc(0,0,300,300,0,scAngle);
stroke(0,255,0);
arc(0,0,260,260,0,minAngle);
  drawSprites();
}