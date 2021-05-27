const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = Engine.world;
    
 ground= new Ground(400,200,100,20)
 box1 =new Box(400,200,20,20)
 box2 = new Box(380,200,20,20)
 box3 = new Box(360,200,20,20)
 box4 = new Box(420,200,20,20)
 box5 = new Box(440,220,20,20)
 movingbox= new movingBox(200,20,20,20)
 slingshot = new SlingShot(movingbox.body,{x:200, y:50});

}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  movingbox1.display()
  slingshot.display()
}