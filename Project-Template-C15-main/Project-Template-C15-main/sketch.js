var path,boy,soul,time,mind,power,space,reality,thanos;
var pathImg,boyImg,soulImg,timeImg,mindImg,powerImg,spaceImg,realityImg,thanosImg;
var superpower = 0;
var soulG,timeG,mindG,powerG,spaceG,realityG,thanosG;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  soulImg = loadImage("soul.png");
  timeImg = loadImage("time.png");
  mindImg = loadImage("mind.png");
  powerImg = loadImage("power.png");
  spaceImg = loadImage("space.png")
  realityImg = loadImage("reality.png")
  thanosImg = loadImage("thanos.png")
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
soulG=new Group();
timeG=new Group();
mindG=new Group();
powerG=new Group();
spaceG=new Group();
realityG=new Group();
thanosG=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  boy.debug=true


  //code to reset the background
  if(path.y > 400 ){
    path.y = height/3;
  }
  
    createSoul();
    createTime();
    createMind();
    createPower();
    createSpace();
    createReality();
    createThanos();

    if (soulG.isTouching(boy)) {
      soulG.destroyEach();
      superpower=superpower+25;
    }
    else if (timeG.isTouching(boy)) {
      timeG.destroyEach();
      superpower=superpower+125;
      
    }else if(mindG.isTouching(boy)) {
      mindG.destroyEach();
      superpower=superpower + 75;
      
    }else if(powerG.isTouching(boy)){
      powerG.destroyEach();
      superpower=superpower+150
      
    }else if(spaceG.isTouching(boy)){
      spaceG.destroyEach();
      superpower=superpower+50
    }else if(realityG.isTouching(boy)){
      realityG.destroyEach();
      superpower=superpower+100

    }else {
      if(thanosG.isTouching(boy)) {
        gameState=END;
         boy.addAnimation("SahilRunning",endImg);

    
       

        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
         soulG.destroyEach();
         timeG.destroyEach();
         mindG.destroyEach();
         powerG.destroyEach();
         spaceG.destroyEach();
         realityG.destroyEach();
         thanosG.destroyEach();
        
        soulG.setVelocityYEach(0);
        timeG.setVelocityYEach(0);
        mindG.setVelocityYEach(0);
        powerG.setVelocityYEach(0);
        spaceG.setVelocityYEach(0);
        realityG.setVelocityYEach(0);
        thanosG.setVelocityYEach(0);
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Power: "+ superpower,10,30);
  }
}


function createSoul() {
  if (World.frameCount % 80 == 0) {
  var soul = createSprite(Math.round(random(50, 350),40, 10, 10));
  soul.addImage(soulImg);
  soul.scale=0.2;
  soul.velocityY = 6;
  soul.lifetime = 150;
  soulG.add(soul);
  }
}

function createTime() {
  if (World.frameCount % 200 == 0) {
  var time = createSprite(Math.round(random(50, 350),40, 10, 10));
  time.addImage(timeImg);
  time.scale=0.2;
  time.velocityY = 6;
  time.lifetime = 150;
  timeG.add(time);
}
}

function createMind() {
  if (World.frameCount % 140 == 0) {
  var mind = createSprite(Math.round(random(50, 350),40, 10, 10));
  mind.addImage(mindImg);
  mind.scale=0.2;
  mind.velocityY = 6;
  mind.lifetime = 150;
  mindG.add(mind);
  }
}

function createPower(){
  if (World.frameCount % 220 == 0) {
  var power = createSprite(Math.round(random(50, 350),40, 10, 10));
  power.addImage(powerImg);
  power.scale=0.2;
  power.velocityY = 6;
  power.lifetime = 150;
  powerG.add(power);
  }
}

function createSpace(){
  if (World.frameCount % 110 == 0) {
  var space = createSprite(Math.round(random(50, 350),40, 10, 10));
  space.addImage(spaceImg);
  space.scale=0.;
  space.velocityY = 6;
  space.lifetime = 150;
  spaceG.add(space);
  }
}

function createReality(){
  if (World.frameCount % 170 == 0) {
  var reality = createSprite(Math.round(random(50, 350),40, 10, 10));
  reality.addImage(realityImg);
  reality.scale=0.2;
  reality.velocityY = 6;
  reality.lifetime = 150;
  realityG.add(reality);
  }
}

function createThanos(){
  if (World.frameCount % 80 == 0) {
  var thanos = createSprite(Math.round(random(50, 350),40, 10, 10));
  thanos.addImage(thanosImg);
  thanos.scale=0.2;
  thanos.velocityY = 6;
  thanos.lifetime = 150;
  thanosG.add(thanos);
  }
}