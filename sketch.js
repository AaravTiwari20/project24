
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var crumpledpaper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  var option={
  isStatic:true
  }
  ground=Bodies.rectangle(400,500,850,10,option);
  World.add(world,ground);
  
  dustbin1 = new Dustbin(700,480,50,20);
  World.add(world,dustbin1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,850,10);
  
  dustbin1.display();
  

  drawSprites();
}



