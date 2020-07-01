const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var bin1, bin2, bin3;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	ball = new Ball(200, 200, 25);

	ground = new Box(600, 590, 1200, 10);

	bin1 = new Box(700, 580, 100, 10);
	bin2 = new Box(650, 505, 10, 150);
	bin3 = new Box(750, 505, 10, 150);

	Engine.run(engine);
}


function draw() {
	background(0);
	ball.display();
	ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(ball.body, {x: ball.body.position.x, y: ball.body.position.y}, {x: 20, y: -30});
	}
}