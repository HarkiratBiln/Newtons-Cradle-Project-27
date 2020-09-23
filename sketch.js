//Creating the Variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5; 


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Creating the Bobs
	bobDiameter = 40;
	 
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	bob1 = new Bob();
	bob2 = new Bob();
	bob3 = new Bob();
	bob4 = new Bob();
	bob5 = new Bob();


	//Creating the Roof
	roof = new Roof(400,100,350,45);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  
  //Displaying the Objects
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


}


function keyPressed() {
     if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45});
	 }


}


   
function drawLine(constraint) {

	bobBodyPosition = constraint.bodyA.position;
	roofBodyPosition = constraint.bodyB.position;

	roofBodyOffset = constraint.pointB;
	roofBodyX = roofBodyPosition.x + roofBodyOffset.y
	roofBodyY = roofBodyPosition.y + roofBodyOffset.y;
	
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);


}


