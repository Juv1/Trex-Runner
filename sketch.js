
var trex ,trex_running;
var edges;
var ground;
function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png');

}

function setup(){
  createCanvas(600,200)

  //create ground sprite
  ground = createSprite(200,180,400,20);
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation('running',trex_running);
  trex.scale=0.5;

  edges = createEdgeSprites();
 
}

function draw(){
  background(220)

  if(keyDown('space')){
    trex.velocityY=-10;
  }

  trex.velocityY=trex.velocityY+0.5;
  trex.collide(ground);
  
  drawSprites();
}
