var rect1,rect2,rect3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(30,90,40);

   var opt={
	 isStatic:true
 }
	ground = Bodies.rectangle(400, height, 800, 10, opt);
 	World.add(world, ground);
	
	
}


function draw() {
  background(0);
  Engine.update(engine)
  paper.display();
  rectMode(CENTER)
  rect(400,680,800,10)
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}
}

