const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var  Ball;
var Button1;
var Button2;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
 engine = Engine.create();
  world = engine.world;

  Button1=createButton("Quantum")
  Button1.position(200,200)
  Button1.mouseClicked(Changeling)
  Button2=createButton("WonderWoman")
  Button2.position(200,300)
  Button2.mouseClicked(justiceleague)
  
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  var ball_options={restitiution:0.5,}
ball=Bodies.circle(40,50,20,ball_options)
World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  
}

function Changeling(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function justiceleague(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}

