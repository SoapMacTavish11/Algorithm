var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="Yellow";
  fixedRect.velocityY=4;
  movingRect = createSprite(200, 400, 80, 50);
  movingRect.shapeColor="Yellow";
  movingRect.velocityY=-4;
}

function draw() {
  background(0);  
  drawSprites();
//  movingRect.x=World.mouseX;
//  movingRect.y=World.mouseY;
// if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
//  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
//   && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 
//    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
//    movingRect.shapeColor="red";
//    fixedRect.shapeColor="blue";
//  }
// else{
//  movingRect.shapeColor="Yellow";
//   fixedRect.shapeColor="Yellow";
// }



if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 ){
    fixedRect.velocityX=fixedRect.velocityX*(-1);
    movingRect.velocityX= movingRect.velocityX*(-1);

}

if (movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2) {
    fixedRect.velocityY=fixedRect.velocityY*(-1);
    movingRect.velocityY= movingRect.velocityY*(-1);
  }
}