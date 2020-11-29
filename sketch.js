var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var student1, student2, student3
var students

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(46,139,87)
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
  
    clear();
    game.play();
  }
}
