
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var b1,b2,b3,b4,b5;
var c1,c2,c3,c4,c5;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 620);


	engine = Engine.create();
	world = engine.world;

	roof = new Ground(650,100,500,40);
	

	b1 = new Bob(460,350);
	b2 = new Bob(550,350);
	b3 = new Bob(630,350);
	b4 = new Bob(710,350);
	b5 = new Bob(790,350);
	c1 = new Chain(b1.body,roof.body,-100,0);
	c2 = new Chain(b2.body,roof.body,-50,0);
	c3 = new Chain(b3.body,roof.body,0,0);
	c4 = new Chain(b4.body,roof.body,50,0);
	c5 = new Chain(b5.body,roof.body,100,0);

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

 
  

 roof.display();

 c1.display();
 c2.display();
 c3.display();
 c4.display();
 c5.display();

 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();

 
  fill("white");
  textSize(20);
 text("u can drag the first bob",500,100);
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(b1.body,b1.body.position,{x:-100,y:-100}); } 
} 



	function mouseDragged(){
		
			Matter.Body.setPosition(b1.body, {x: mouseX , y: mouseY});
		
	}
	
	






