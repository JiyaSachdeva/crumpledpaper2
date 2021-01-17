
var bin,binimg; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
binimg=loadImage("dustbin.png");
	
}

function setup() {
	createCanvas(800, 700);

  bin = createSprite(650,575,110,10);
  bin.addImage(binimg);
  bin.scale = 0.4;

  	engine = Engine.create();
    world = engine.world;
    
   
    paper = new Paper(35,0,70);
   

    ground = new Ground (800,650,10000, 20);
    dustbin1= new Dustbin (700,590,10,100);
    dustbin2 = new Dustbin (590,590,10,100);
    dustbin3 = new Dustbin (650,635,110,10);


	  Engine.run(engine);
  
}


function draw() {


  //rectMode(CENTER);
  Engine.update(engine);
  background("skyblue");
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  stroke ("white");
 
  stroke ("white");
  
  

  
  drawSprites();
 
}

function keyPressed (){

  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position, {x:200 ,y:-200});
  }
}



