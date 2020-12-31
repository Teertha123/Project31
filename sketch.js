const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var divisions=[];
var divisionHeight=300;
var plinko=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
  for(var x=0; x<=width;x=x+80){
    divisions.push(new Divisions(x,height-divisionHeight/2,10,divisionHeight))
  }
  for(var x=75; x<=width;x=x+50){
    plinko.push(new Plinko(x,75))
  }
  for(var x=50; x<=width-10;x=x+50){
    plinko.push(new Plinko(x,175))
  }
  for(var x=75; x<=width;x=x+50){
    plinko.push(new Plinko(x,275))
  }
  for(var x=50; x<=width-10;x=x+50){
    plinko.push(new Plinko(x,375))
  }
  
}

function draw() {
  background(0);
  
  Engine.update(engine);
  ground.display();
  for(var x=0;x<divisions.lenght; x++){
    divisions[x].display();
  }
  for(var x=0;x<plinko.lenght; x++){
    plinko[x].display();
  }
 
}