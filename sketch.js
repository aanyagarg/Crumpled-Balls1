
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var ground;
var bottomRect,leftRect,rightRect;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(10,200,20)
	

	ground =new Ground(400,height,800,50);
/*
	bottomRect=createSprite(600,height-35,200,20);
	bottomRect.shapeColor="red";

	leftRect=createSprite(510,610,20,100);
	leftRect.shapeColor="red";

	rightRect=createSprite(690,610,20,100);
	rightRect.shapeColor="red";
*/
	boxLeftBody = Bodies.rectangle(510,610,20,100,{isStatic:true})
	World.add(world,boxLeftBody);

	boxRightBody = Bodies.rectangle(690,610,20,100,{isStatic:true})
	World.add(world,boxRightBody);

	boxBottomBody = Bodies.rectangle(600,height-35,200,20,{isStatic:true})
	World.add(world,boxBottomBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper.display();
  ground.display();
  rect(boxLeftBody.position.x,boxLeftBody.position.y,20,100);
  rect(boxRightBody.position.x,boxRightBody.position.y,20,100);
  rect(boxBottomBody.position.x,boxBottomBody.position.y,200,20);
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		
	  }
}



