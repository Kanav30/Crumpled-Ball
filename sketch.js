const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var Papper;
var Ground;
var side1;
var l;

function setup() {
	createCanvas(1000, 300);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	Papper = new paper(50,150, 65);
	Ground = new ground(500,280,1000,20);
	side1 = new dustbin(900,225,200,100);
	l = new Launcher(Papper.body,{x:150,y:50})
}


function draw() {
rectMode(CENTER);
background(200);
Papper.display();
Ground.display() ;
side1.display();
l.display();

drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(Papper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    l.fly();
}

