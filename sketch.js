//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var myObject;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var myOptions = {
      isStatic: true
    }
    myObject = Bodies.rectangle(100,150,50,70, myOptions);
    World.add(world, myObject);

    console.log(myObject);
    console.log(myObject.position.y);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    rectMode(CENTER);
    rect(myObject.position.x, myObject.position.y, 60, 70);
   
}