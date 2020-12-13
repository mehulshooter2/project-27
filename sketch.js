
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Roof(500,100,300,20);
	bob1 = new Bob(400,300,25)
	bob5 = new Bob(450,300,25) 
	bob4 = new Bob(500,300,25) 
	bob3 = new Bob(550,300,25) 
	bob2 = new Bob(600,300,25) 

	rope1 = new Rope(bob1.body,ground.body,-100,0);
	rope2 = new Rope(bob2.body,ground.body,100,0);
	rope3 = new Rope(bob3.body,ground.body,50,0);
	rope4 = new Rope(bob4.body,ground.body,2,0);
	rope5 = new Rope(bob5.body,ground.body,-50,0);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.09,y:-0.1});
  
	}
}
