const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg, person
var snow=[];
var SNOWING=100;

function preload(){
  bg=loadImage("snow1.jpg");
  personImg=loadImage("test.png");
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  



person=createSprite(150,450);
person.addImage(personImg)
person.scale = .6
if(frameCount % 280 === 0){
  for(var i=0; i<SNOWING; i++){
  snow.push(new Snow(random(0,1350), random(0,50)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine);

  for(var i = 0;i < SNOWING; i++){
    snow[i].display();
    snow[i].changePosition();
    }    
    
    if(keyDown("up")){
      person.y = person.y-3;
      }
      
      if(keyDown("down")){
      person.y = person.y+3;
      }
      
      if(keyDown("left")){
        person.x = person.x-3;
      }
      
      if(keyDown("right")){
        person.x = person.x+3;
      }

  
  drawSprites();

}
