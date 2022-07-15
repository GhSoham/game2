var backgrounds;
var player,playerImg1,playerImg2;
var bulletR,bulletL;
var bullets = [];
var dir = 1;
var score = 0;
var monster,mAnimation,mAnimation2;
var shootSound;

function preload() {
  backgrounds = loadImage("./assets/background.png");
  playerImg1 = loadImage("./assets/soldier.png");
  playerImg2 = loadImage("./assets/soldier2.png");
  bulletR = loadImage("./assets/bulletR.png");
  bulletL = loadImage("./assets/bulletL.png");
  mAnimation = loadAnimation("./assets/frame1.png","./assets/frame2.png","./assets/frame3.png");
  mAnimation2 = loadAnimation("./assets/frame1b.png","./assets/frame2b.png","./assets/frame3b.png");
}

function setup() {
  createCanvas(1200,800);
  
  player = createSprite(600,650)
  player.addImage("player1",playerImg1)
  player.addImage("player2",playerImg2)
}         
   
function draw() {
 background(backgrounds);
 
 textSize(20)
 fill("white")
 text("Score:"+score,80,100);

 if(keyDown(RIGHT_ARROW)){
  player.changeImage("player2")
  dir = 1
 }

 if(keyDown(LEFT_ARROW)){
  player.changeImage("player1")
 
  dir = 2
 }

 spawnMonsters()


 drawSprites();

}

function keyPressed(){

  //condition for key "A"
  if(keyCode === 65){
    player.position.x = player.position.x - 10

  }
   //condition for key "w"
  if(keyCode === 87){
    player.position.y = player.position.y -10

  }
   //condition for key "S"
  if(keyCode ===83){
    player.position.y = player.position.y +10

  }
   //condition for key "D"
  if(keyCode === 68){
    player.position.x = player.position.x +10
  }

  if(keyCode===32){
    var bullet = createSprite(500,600)
    bullet.addImage("bullet1",bulletR)
    bullet.addImage("bullet2",bulletL)
    bullet.scale = 0.3
    bullet.velocityX = 0
    bullet.visible = false
    bullets.push(bullet)
  }
}

function spawnMonsters(){
  if(frameCount % 80 ===0 ){
      var arr = [70, 1000]
      monster = createSprite(random(arr), random(350,700))
      monster.addAnimation("running",mAnimation)
      monster.addAnimation("running2",mAnimation2)
      monster.scale = 0.2;


      if(monster.position.x === 70 ){
        monster.setVelocity(3,0)
        monster.changeAnimation("running2");
       // monster.rotation = monster.rotation +180
      
      }
      
      if(monster.position.x === 1000){
        monster.setVelocity(-3,0)
        monster.changeAnimation("running");

      }
  }

}
function shoot(){
 //if(keyDown('space')){
   
   //}
}

function keyReleased(){
  if(keyCode===32){
    bullets[bullets.length-1].visible = true
    bullets[bullets.length-1].lifetime = 20 
  
    if(dir===2){
      console.log("hi")
      bullets[bullets.length-1].changeImage("bullet2")
      bullets[bullets.length-1].setVelocity(-10,0) ;  
       
    }
    else{
      bullets[bullets.length-1].changeImage("bullet1")
      bullets[bullets.length-1].setVelocity(10,0);
  
    }
  }
}