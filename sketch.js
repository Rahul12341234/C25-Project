const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var bin, bin1, bin2;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	ball = new Ball(200, 200, 70);

	ground = new Ground(600, 590, 1200, 10);

	bin1 = new Bin(650, 505, 10, 150);
	bin2 = new Bin(750, 505, 10, 150);

	bin = new Binimage(700, 580, 100, 10);

	Engine.run(engine);
}


function draw() {
	background(255);
	ball.display();
	ground.display();
	bin.display();
	bin1.display();
	bin2.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(ball.body, {x: ball.body.position.x, y: ball.body.position.y}, {x: 75, y: -100});
	}
}