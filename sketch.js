const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var box1,box2,box3,ballImg,dustbinImg;


function preload(){
ballImg=loadImage("sprites/paper.png")
dustbinImg=loadImage("sprites/dustbin.png")
}

function setup(){
	
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,580,800,20,ground_options);
    World.add(world,ground);

    var ball_options={
		restitution:0,
		density:1.2,
        friction:1,
        isStatic:false,  
    }
    
 

	ball=Bodies.circle(150,200,20,ball_options);
    World.add(world,ball);

boxBottom=Bodies.rectangle(500,500,250,20)  
World.add(world,boxBottom)  
    


}

function draw(){
    background(225);
    Engine.update(engine);
    rectMode(CENTER);
    fill("yellow");
    rect(ground.position.x,ground.position.y,800,20);
    fill ("green");
    image(ballImg,ball.position.x,ball.position.y-100,40);
    image (dustbinImg,boxBottom.position.x-50,boxBottom.position.y-80,100,100)


}
function keyPressed(){
    if(keyCode==UP_ARROW&&ball.position.x==150){
        Matter.Body.applyForce(ball,ball.position,{x:35,y:-65});
        
         }
}





