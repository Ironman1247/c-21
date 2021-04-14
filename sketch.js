var movingRect
var fixedRect
var r1
var o1
var o2
var o3
var o4

function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 50, 50);
  movingRect.shapeColor="red";

  fixedRect= createSprite(300,300,50,50);
  fixedRect.shapeColor="blue";

  r1= createSprite(200,300,50,50);
  r1.shapeColor="white";

  o1=createSprite(150,250,50,50);
  o1.shapeColor="orange";
  o1.velocityX=5

  o2=createSprite(700,250,50,50);
  o2.shapeColor="purple";
  o2.velocityX=-5

  o3=createSprite(600,350,50,50);
  o3.shapeColor="violet";
  o3.velocityY=-5

  o4=createSprite(600,50,50,50);
  o4.shapeColor="pink";
  o4.velocityY=5
}

function draw() {
  background(0);  

  movingRect.x=mouseX
  movingRect.y=mouseY

  if(isTouching(movingRect, r1)){
    movingRect.shapeColor="green";
    r1.shapeColor="yellow";
  }
    else{
      movingRect.shapeColor="red";
    r1.shapeColor="white";
    }
  
bounceOff(o1, o2)
bounceOff(o3, o4)

if(isTouching(movingRect, fixedRect))
  {

    movingRect.shapeColor="green";
    fixedRect.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="blue";
  }
  drawSprites();
}

