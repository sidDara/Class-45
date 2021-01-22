const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bBall, ground, sling, hoop;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  bBall = new Ball(200, 200, 40, 40);
  ground = new Ground(400, 380, 800, 10);
  sling = new SlingShot(bBall.body,{x:150, y:250})
  hoop = new Hoop(660, 290, 200, 300)

  Engine.run(engine);
}

function draw() {
  background(0);  

  bBall.display();
  ground.display();
  sling.display();
  hoop.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bBall.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
   if(keyCode === 32)
	{
		Matter.Body.setPosition(bBall.body,{x:150, y:250})
		sling.attach(bBall.body);
  }
}