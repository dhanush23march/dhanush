const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var astronout
var backgroundimage,backgrounds;
var sleepimage;
var brushingimage;
var eatimage;
var gymimage;
var bathimage;
var drinkimage;
var moveimage;

function preload(){
backgroundimage = loadImage("images/Astronaut's daily routine/iss.png")
sleepimage = loadImage("images/Astronaut's daily routine/sleep.png")
brushingimage = loadAnimation("images/Astronaut's daily routine/brush.png")
eatimage = loadAnimation("images/Astronaut's daily routine/eat1.png")
gymimage = loadAnimation("images/Astronaut's daily routine/gym1.png","images/Astronaut's daily routine/gym2.png","images/Astronaut's daily routine/gym11.png","images/Astronaut's daily routine/gym12.png")
drinkimagee = loadAnimation("images/Astronaut's daily routine/drink1.png")
moveimage = loadAnimation("images/Astronaut's daily routine/move.png")
bathimage = loadAnimation("images/Astronaut's daily routine/bath1.png")
}


function setup() {
  createCanvas(800,400);




 astronout = createSprite(300,230);
 astronout.addImage(sleepimage);
 astronout.scale = 0.1
}

function draw() {
  background(backgroundimage); 
  if (keyDown("UP_ARROW")){
  astronout.addAnimation("brushing",brushingimage)
  astronout.changeAnimation("brushing")
  astronout.y = 350
  astronout.velocityX = 0;
  astronout.velocityY = 0;

  }

  if (keyDown("DOWN_ARROW")){
    astronout.addAnimation("gym",gymimage)
    astronout.changeAnimation("gym")
    astronout.y = 350
    astronout.velocityX = 0;
    astronout.velocityY = 0;
  
    }

    if (keyDown("LEFT_ARROW")){
      astronout.addAnimation("eating",eatimage)
      astronout.changeAnimation("eating")
      astronout.y = 350
      astronout.velocityX = 0;
      astronout.velocityY = 0;
    
      }

      if (keyDown("RIGHT_ARROW")){
        astronout.addAnimation("bathing",bathimage)
        astronout.changeAnimation("bathing")
        astronout.y = 350
        astronout.velocityX = 0;
        astronout.velocityY = 0;
      
        }   

        if (keyDown("m")){
          astronout.addAnimation("move",moveimage)
          astronout.changeAnimation("move")
          astronout.y = 350
          astronout.velocityX = 0;
          astronout.velocityY = 0;
        
          }

  drawSprites();
}