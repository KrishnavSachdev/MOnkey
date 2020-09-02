var score; 

var monkey, rock, backGround, bananna, ground; 

function preload(){
  
 monk= loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
 scene= loadImage("jungle.jpg")
  
 rocks= loadImage("stone.png"); 
  
 bons= loadImage("banana.png");
  
}


function setup() {
  createCanvas(400, 400);
  
  backGround= createSprite(200, 200, 400, 400);
  backGround.addAnimation("bg", scene); 
 
  monkey= createSprite(80, 320, 20, 20);
  
  monkey.addAnimation("mo", monk);
  monkey.scale = 0.15;
  
  bansGroup = new Group();
  rocksGroup = new Group();
  
  ground= createSprite(200, 370, 400, 20);
  
  ground.visible= false;
  
  score= 0;
}

function draw() {
  background(220);
  
  if(keyDown("space") && monkey.y>305){
    monkey.velocityY= -15;
  }
  
  monkey.collide(ground);
  monkey.velocityY= monkey.velocityY+0.8;
  
  if(backGround.x < 0){
    backGround.x = backGround.width/2;
  }
  
  if(monkey.isTouching(bansGroup)){
    bansGroup.destroyEach();        
    
    score= score+2;
  }
  
  if(monkey.isTouching(rocksGroup)){
    monkey.scale= 0.15;
    
    score= 0;
  }
  
  switch(score){
    case 10: monkey.scale= 0.17;
      break;
    case 20: monkey.scale= 0.19;
      break;
    case 30: monkey.scale= 0.21;
      break;
    case 40: monkey.scale= 0.23;
      break;
    case 50: monkey.scale= 0.25;
      break;
    default: break;
  } 
  
  backGround.velocityX= -4;
  
  rockies();
  
  bans();
  
  drawSprites();
  
  stroke("white");
  textSize("20");
  fill("white");
  text.depth= backGround.depth+1;
  text("Score: "+ score, 320, 50);
}

function rockies(){
 
  if (frameCount % 150 === 0) {
    var rock = createSprite(400,344,40,10);
    rock.addImage("ro", rocks);
    rock.scale = 0.1;
    rock.velocityX = -4;
    
    rock.depth= backGround.depth+1;
    rock.depth= monkey.depth-1;

     //assign lifetime to the variable
    rock.lifetime = 100;
    
    rocksGroup.add(rock);
    
  }
  
}

function bans(){
 
  if (frameCount % 100 === 0) {
    var banis = createSprite(400,344,40,10);
    banis.y = Math.round(random(200,300));
    banis.addImage("ba", bons);
    banis.scale = 0.1;
    banis.velocityX = -4;
    
    banis.depth= backGround.depth+1;
    banis.depth= monkey.depth-1;

     //assign lifetime to the variable
    banis.lifetime = 100;
    
    bansGroup.add(banis);
    
  }
  
}