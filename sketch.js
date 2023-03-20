var Lobo, LoboImg, loboGameOver, loboGameOverImg;
//COMENTARIO DE LA PROFE:falta la variable para crear el sprite del gato con botas
//Recuerda que la variable en donde se crea el sprite es distinta a donde se carga la imagen en preload
//Asi que cree la variable GatoconBotasImg para cargar la imagen del gato con botas
var GatoconBotas, GatoconBotasImg, GatoconBotas_asustado;
var ground, groundImage,ivicibleGround;
var ennemy, ennemy1, ennemy2, ennemy3, ennemy4, ennemy5;
var bonus, bonus1, bonus2, bonus3; 
var bonus4, bonus5, bonus6, bonus7;
var rand
var play = 1;
var end = 0;
var gameState = play;
var score;
var enemiesGroup, bonusGroup;
var playScenary, playScenaryImg, restart, restartImg;
var gameOver, gameOverImg;
var backgroud;
var jumpSound, dieSound;

function preload(){
Lobo = loadImage("La Muerte sin Máscara.png");
loboGameOverImg = loadImage("Death_29.png")
GatoconBotasImg = loadImage("PussInBoots2022.png");

groundImage = loadImage("ground.png");

ennemy1 = loadImage("Troll.png");
ennemy2 = loadImage("Minotauro.png");
ennemy3 = loadImage("Dragón.png");
ennemy4 = loadImage("Enano.png");
ennemy5 = loadImage("Pirata 1.png");

bonus1 = loadImage("jwell.png");
bonus2 = loadImage("cash.png");
bonus3 = loadImage("Huevos.png");
bonus4 = loadImage("Tesoro 1.png");
bonus5 = loadImage("Tesoro 2.png");
bonus6 = loadImage("diamonds.png");
bonus7 = loadImage("lámpara.png");

backgroud = loadImage("Fondo.png")
gameOverImg = loadImage("Game Over.png");
restartImg = loadImage("reset.png");

jumpSound = loadSound("Jump sound.mp3")
dieSound = loadSound("DeadSound.mp3")
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 //create sprite Gato
 GatoconBotas = createSprite(500, height-150, 30, 50);
 //COMENTARIO DE LA PROFE; Añadi la imagen del gato con botas
 GatoconBotas.addImage(GatoconBotasImg)
 //COMENTARIO DE LA PROFE: setColler solo acepta figura circular, ovalada, rectangular
 GatoconBotas.setCollider("circle", 35, 35, 35);
 GatoconBotas.addAnimation("caught", GatoconBotas_asustado);
 GatoconBotas.debug = true;

 GatoconBotas.scale = 0.7;

 Lobo = createSprite(100, height-150, 80, 100);
 
 Lobo.addImage(LoboImg);

 //Suelo
 ground = createSprite(width/2, height-15, width, 15);
 ground.addImage("ground", groundImage);
 invicibleGround = createSprite(width/2, height-99, width, 15)
 invicibleGround.visible = false;

 ground.sacale = 0.7;
  

 enemiesGroup = new Group();
 bonusGroup = new Group();


 gameOver = createSprite(500, 500);
 gameOver.addImage(gameOverImg);
 gameOver.visible = false;

 restart = createSprite(500, 540);
 restart.addImage(restartImg);
 restart.visible = false;

 
 score = 0;
}

function draw() {

 background(backgroud);
 text("Puntuación " + score, 500, 15);


//COMENTARIO DE LA PROFE: La variable lobby no esta definido


 if (gameState == play){
    score = score + Math.round(frameCount/60);
    ground.velocityX = -2;
    console.log(ground.x)

    if(ground.x < 0){
        ground.x = ground.width/2;
 }

 if(touches.length > 0 || keyDown("space")&& GatoconBotas.y >= 100 ){
    GatoconBotas.velocityY = -10;
    jumpSound.play();
    touches = []
  
  

} 

  // COMENTARIO DE LA PROFE: No esta creada la funcion y por eso al
  //llamarla da error
  //aparecer enemigos
 spawnEnemmies()

 if(enemiesGroup.isTouching(GatoconBotas)){
  gameState = end;
  dieSound.play();
  
}

//LA FUNCION SPAWNBONUS NO ESTA CREADA POR ESO SE MARCA ERROR
//RECUERDA PRIMERO CREAR LA FUNCION Y LUEGO INVOCARLA
 spawnBonus()

 //COMENTARIO DE LA PROFE: Falta el drawSprite
 drawSprites()
} else if(gameState == end){
  ground.velocityX = 0;
  enemiesGroup.setVelocityXEach(0);
  bonusGroup.setVelocityXEach(0);
  gameOver.visible = true;
  restart.visible = true;
  GatoconBotas.changeAnimation("collided", GatoconBotas_asustado);
}


console.log(ground.x)



GatoconBotas.GatoconBotas = trex.velocityY + 0.8;

GatoconBotas.collide(ivicibleGround)

if(mousePressedOver(restart)){
  reset();
 }

drawSprites();

//COMENTARIO DE LA PROFE: faltaba la llave de cierre
}

//COMENTARIO DE LA PROFE: cree la funciom
function spawnEnemmies(){
  if(frameCount % 70 == 0){
    //crear enemigos 500, height-150, 30, 50
    ennemy = createSprite(500, height-150, 60, 100);
    
    ennemy.velocityX = -6;

    ennemy.scale = 0.8

    rand = Math.round(random(1, 7));

  switch(rand){
    case 1:
      ennemy.addImage(ennemy1)
      break
    case 2:
      ennemy.addImage(ennemy2)
    case 3:
      ennemy.addImage(ennemy3)
    case 4:
      ennemy.addImage(ennemy4)
    case 5:
      ennemy.addImage(ennemy5)
  }
  ennemy.lifeTime = 300;

  enemiesGroup.add(ennemy)
  }
}

function spawnBonus(){

  bonus = createSprite(500, height-158, 50, 50);

  bonus.velocityX = -6;

  bonus.scale = 0.6

  bonus = Math.round(random(1, 8));
  

  switch(rand){
    case 1:
      bonus.addImage(bonus1)
      break
    case 2:
      bonus.addImage(bonus2)
    case 3:
      bonus.addImage(bonus3)
    case 4:
      bonus.addImage(bonus4)
    case 5:
      bonus.addImage(bonus5)
  }
}

function reset(){

}