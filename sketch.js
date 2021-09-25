var bg,bridge;
var mc,boy;
var car1,car2,car3,c1,c2,c3;
var car;
var coinG;

function preload(){
  
  bg=loadImage("bridge.jpg");
  mc=loadAnimation("boy.gif");
  c1=loadImage("redc.png");
  c2=loadImage("blueC.png");
  c3=loadImage("greenC.png");
  coinG=loadAnimation("coin.gif");
  
  
}


function setup(){
  createCanvas(600,400);
  
  bridge = createSprite(400,65,1000,400);
  bridge.addImage("background",bg);
  bridge.scale=2;
  bridge.velocityX=-4;
  
  boy = createSprite(170,300,20,20);
  boy.addAnimation("Mc",mc);
  boy.scale=0.3;
  
  invisibleGround=createSprite(40,380,400,10);
  invisibleGround.visible=false;
  
  /*car2=createSprite(300,300,20,20);
  car2.addImage("red",c2);
  car2.scale=0.1;*/
}

function draw(){
  background("black");
  
  if(bridge.x<0){
    bridge.x=bridge.width/2;
    
  }
  
  if(keyDown("space")){
    boy.velocityY=-10;
  }
  
  boy.velocityY+=1;
  boy.collide(invisibleGround);
  
  Cars();
  
  drawSprites();
  
}

function Cars() {
  
  if(frameCount%250 === 0){
    car = createSprite(600,300,40,20);
    car.velocityX=-3;
    var rand=Math.round(random(1,3))
    if(rand===1){
      car.addImage(c1);      
    }
    else if(rand===2){
      car.addImage(c2);      
    }
    else 
    {car.addImage(c3)
    }
    
    car.scale=0.3;
    
  }
   
  
  
}