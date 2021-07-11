var wall;
var bullet;
var bulletSpeed;
var bulletWeight;
var thickness
var damage;

function setup() {
  createCanvas(1000,400);
  bulletSpeed = random(223, 321)
  bulletWeight = random(30, 52);
  thickness = random(22, 83);
  wall = createSprite(775, 200, thickness, 200);
  bullet = createSprite(100, 200, 15, 7);
  damage = (0.5 * bulletWeight * bulletSpeed * bulletSpeed)/(thickness * thickness * thickness) ;
  bullet.velocityX = bulletSpeed/2;
}

function draw() {
  background(255,255,255);  
  
  if (damage <= 10 ) {
    wall.shapeColor = "green";
  }

  if (damage > 10 ) {
    wall.shapeColor = "red";
  }
  
  if (isTouching(bullet, wall)) {
  bullet.velocityX = 0;
  }

  drawSprites();

}