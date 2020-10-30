var moving, fixed;

function setup() {
  createCanvas(1200,600);
  
  moving = createSprite(400, 300, 50, 80);
  fixed = createSprite(600, 300, 80, 50);

  moving.debug = true;
  fixed.debug = true;

  moving.velocityX = 5;
  fixed.velocityX = -5;
}

function draw() {
  background(0);  

  //moving.x = mouseX;
  //moving.y = mouseY;

  //DETECTING COLLISION ALGORITHM
  if(fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2
    && fixed.y - moving.y <= moving.height/2 + fixed.height/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }

  //BOUNCING OFF ALGORITHM
  if(fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2){
      moving.velocityX=moving.velocityX*(-1);
      fixed.velocityX=fixed.velocityX*(-1);
  }
    
  if (fixed.y - moving.y <= moving.height/2 + fixed.height/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2){
      moving.velocityY=moving.velocityY*(-1);
      fixed.velocityY=fixed.velocityY*(-1);
  }
  
  drawSprites();
}


/*
ALGORITHMS
  Logic to solve a problem

Computer Algorithm - Giving instructions to the computer to solve a problem

Pre-Defined algorithms:
1. Detecting collision --> isTouching()
2. Bounce off two objects --> bounce()


*/