class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   // background(46,139,87)
    student1 = createSprite(800,200);
    student2 = createSprite(800,400);
    student3 = createSprite(800,600);
   

    students=[student1,student2,student3];
  }


  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
        background(46,139,87)
      var index = 0;
      var x ;
      var y=0;

      for(var plr in allPlayers){
        index = index + 1;
     
        x = displayWidth - allPlayers[plr].distance;
        y = y + 200;
        //y=400
        students[index-1].x = x;
        students[index-1].y = y;
        

        if(index === player.index){
          students[index-1].shapeColor = "blue";
         
          camera.position.x = students[index-1].x-40;
          camera.position.y = displayHeight/2;
        }

      }
 
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=50
      player.update();
    }
    drawSprites();
  }
}
