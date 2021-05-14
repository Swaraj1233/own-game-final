var wall1,wall2,wall3,wall4,ball,goal1,goal2;

var player1,player2,player1score,player2score;
var player3,player4;



var gameState;

function preload(){
p1i = loadImage("blue.png");
p2i = loadImage("red.png");
balli = loadImage("football.png");
bg = loadImage("field.png")


}

function setup(){

  createCanvas(windowWidth,windowHeight);

  wall1 = createSprite(windowWidth/2, windowHeight-70,windowWidth,5);
wall1.shapeColor="white";

  wall2 = createSprite(windowWidth/2,60,windowWidth,5);
wall2.shapeColor="white";

  wall3 = createSprite(60, windowHeight/2,5,windowHeight);
wall3.shapeColor="white";

  wall4 = createSprite(windowWidth-55, windowHeight/2,5,windowHeight);
wall4.shapeColor="white";
rectMode(CENTER);
goal1 = createSprite(100,displayHeight/2-75,80,160);
  
goal2 = createSprite(displayWidth-160,displayHeight/2-75,80,160);
goal1.shapeColor="white";


goal2.shapeColor="white";
 
  ball = createSprite(displayWidth/2-40,displayHeight/2-80);
  ball.addImage(balli);
  ball.scale = 0.017;

  player1 = createSprite(300,windowHeight/2-100,30,30);
player1.addImage(p1i);
player1.scale = 0.07;

  player2 = createSprite(300,windowHeight/2+100,30,30);
  player2.addImage(p1i);
  player2.scale = 0.07;

player3 = createSprite(windowWidth-300,windowHeight/2-100,30,30);
player3.addImage(p2i);
player3.scale = 0.09;

  player4 = createSprite(windowWidth-300,windowHeight/2+100,30,30);
  player4.addImage(p2i);
  player4.scale = 0.09;

  gameState="serve";

  player1score=0;

  player2score=0;

}


function draw() {
  
  background(bg);
  
  
  
  
  textSize(20);
  text(player1score,25,250);
  
  textSize(20);
  text(player2score,25,150);
  
  
  createEdgeSprites();
  
  if (keyDown(UP_ARROW)) {
    player1.y=player1.y-7;
  
  }
  
  if (keyDown(DOWN_ARROW)) {
    player1.y=player1.y+7;
  
  }
  
  if (keyDown(LEFT_ARROW)) {
    player1.x=player1.x-7;
  
  }
  
  if (keyDown(RIGHT_ARROW)) {
    player1.x=player1.x+7;
  
  }
  
  
  
  if (keyDown("w")) {
    player2.y=player2.y-7;
  
  }
  
  if (keyDown("s")) {
    player2.y=player2.y+7;
  
  }
  
  if (keyDown("a")) {
    player2.x=player2.x-7;
  
  }
  
  if (keyDown("d")) {
    player2.x=player2.x+7;
  
  }
  
 if (ball.isTouching(goal1)) {
   
    player2score=player2score+1;
    reset();
    gameState="serve";
 }
 
if (ball.isTouching(goal2)) {
    
    player1score=player1score+1;
    reset();
    gameState="serve";
 }
  
  ball.bounceOff(player1);
  ball.bounceOff(player2);
  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  ball.bounceOff(wall4);
  
  player1.bounceOff(wall1);
  player1.bounceOff(wall2);
  player1.bounceOff(wall3);
  player1.bounceOff(wall4);
  
  
  player2.bounceOff(wall1);
  player2.bounceOff(wall2);
  player2.bounceOff(wall3);
  player2.bounceOff(wall4);

  
  
   
  if (gameState=== "serve") {
     textSize(50);
     fill("black")
     text("Press space to play",windowWidth/2-200,windowHeight/2-50);
   }
   
  
  
  if (keyDown("space") && gameState==="serve" ) {
    serve() ;
    gameState = "play";
    
    }
  
  
  if (ball.isTouching(wall1)||ball.isTouching(wall2)||ball.isTouching(wall3)||
    ball.isTouching(wall4)) {
   
    gameState="serve";
  }
  
   if (player1score===5||player2score===5) {
     
     gameState="end";
     textSize("20");
     text("Press R to Restart",windowWidth/2-200,windowHeight/2-50);
   }
   
   if (keyDown("r")&& gameState==="end") {
     
     gameState="serve";
     player1score=0;
     player2score=0;
   }
   
   
   
   
   
drawSprites();
}

 

function serve(){
    
    ball.velocityX=4;
    ball.velocityY=4;
}

function reset(){
  
    ball.x=displayWidth/2-40;
    ball.y=displayHeight/2-80;
    ball.velocityX=0;
    ball.velocityY=0;
    player1.x=300;
    player1.y=windowHeight/2+100;
    player2.x=300;
    player2.y=windowHeight/2-100;
    
}



 
