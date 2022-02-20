var canvas, backgroundImage;
var tierra1,tierra2,tierra3,tierra4, tierra5,tierra6,tierra7,tierra8,tierra9,tierra10,tierra11,tierra12,tierra13,tierra14,tierra15,tierra16,tierra17,tierra18,tierra19,tierra20,tierra21;
var gameState = 0;
var playerCount;
var allPlayers;
var distanceX = 0;
var distanceY = 0;
var database;
var pared;

var form, player, game;


//Definir variable de los osos
var bears,bear1,bear2,bear3;

var forest, bear1_img, bear2_img, bear3_img;
//Definir variable de los cazadores
var cazador1, cazador2,cazador3;

var cazador1_img,cazador2_img, cazador3_img;

function preload(){
  forest = loadImage("images/background.png");
  bear1_img = loadImage("images/Bear1.png");
  bear2_img = loadImage("images/Bear2.png");
  bear3_img = loadImage("images/Bear3.png");

  cazador1_img = loadImage("images/Cazador1.png");
  cazador2_img = loadImage("images/Cazador2.png");
  cazador3_img = loadImage("images/Cazador3.png");
}


function setup() {
  canvas = createCanvas(displayWidth - 50, displayHeight-10);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

   tierra1 = createSprite(50,150,100,1500);
   tierra1.shapeColor = "red";

   tierra2 = createSprite(1200,700,70,70);
   tierra2.shapeColor = "blue";
    
   tierra3 = createSprite(660,28,760,50);
   tierra3.shapeColor = "black";
    
   tierra4 = createSprite(655,90,30,400);
   tierra4.shapeColor = "green";

   tierra5 = tierra5= createSprite(300,200,40,300);
   tierra5.shapeColor = "silver";

   tierra6= createSprite(1300,100,60,500);
   tierra6.shapeColor = "yellow";

   tierra7= createSprite(390,600,65,90);
   tierra7.shapeColor = "orange";

   tierra8= createSprite(630,700,60,90);
   tierra8.shapeColor = "grey";

   tierra9 = createSprite(600,570,600,30);
   tierra9.shapeColor = "hotpink";

   tierra10 = createSprite(1070,600,40,250);
   tierra10.shapeColor = "olive";

  tierra11 = createSprite(200,20,70,70);
   tierra11.shapeColor = "purple";

   tierra12 = createSprite(500,330,80,300);
   tierra12.shapeColor = "white";

   tierra13= createSprite(370,315,20,50);
   tierra13.shapeColor = "sky blue";

   tierra14= createSprite(340,450,600,50);
   tierra14.shapeColor = "lime";

   tierra15= createSprite(600,750,1000,50);
   tierra15.shapeColor = "violet";

   tierra16= createSprite(800,400,50,300);
   tierra16.shapeColor = "navy";

   tierra17= createSprite(820,600,60,90);
   tierra17.shapeColor = "ivory";

   tierra18= createSprite(1300,590,30,400);
   tierra18.shapeColor = "gold";

   tierra19= createSprite(1200,0,300,25);
   tierra19.shapeColor = "magenta";

   tierra20= createSprite(1050,25,30,300);
   tierra20.shapeColor = "cyan";

   tierra21= createSprite(1200,370,300,30);
   tierra21.shapeColor = "coral";
   

}

function draw() {
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  tierra1.display();
  tierra2.display();
  tierra3.display();
  tierra4.display();
  tierra5.display();
  tierra6.display();
  tierra7.display();
  tierra8.display();
  tierra9.display();
  tierra10.display();
  tierra11.display();
  tierra12.display();
  tierra13.display();
  tierra14.display();
  tierra15.display();
  tierra16.display();
  tierra17.display();
  tierra18.display();
  tierra19.display();
  tierra20.display();
  tierra21.display();

  drawSprites();
}
