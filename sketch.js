var start = 0, play = 1, end = 2, win = 4, begin = 5;
var gameState = start;
var obstacle = [];
var player;
var ground;
function setup()
{
  createCanvas(400, 400);
  player = createSprite(40,40,30,30);
  player.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png");
  ground = createSprite(10,390,400,10);
  ground.shapeColor = "red";
}

function draw()
{
  if(gameState === start)
  {
    background(255, 0, 0)
    var heading = createElement("h1");
    heading.html(" SPACE JUMPERS ");
    heading.position(75, 20);
    var startButton = createButton(" START ");
    startButton.position(165, 200);

    startButton.mousePressed(() =>
    {
      removeElements();
      frameCount = 0;
      player.destroy();
      setup();
      gameState = begin;
    })
  }


  if(gameState === begin)
  {
    background(0, 255, 0);
    var he = createElement('h2');
    he.html(" Choose A Level ");
    he.position(75, 50);

    var ll1 = createButton(" Level 1 ");
    ll1.position(120, 200);
    ll1.mousePressed(()=>
    {
      for(var i = 0; i<obstacle.length; i++){
      obstacle[i].destroy();
      }
      gameState = play;
      removeElements();
      player.destroy();
      setup(); 
    })

    var ll2 = createButton(" Level 2 ");
    ll2.position(120, 250);

    var ll3 = createButton(" Level 3 ");
    ll3.position(200, 200);

    var ll4 = createButton(" Level 4 ");
    ll4.position(200, 250);

  }
  if(gameState == play){
    ground.x = player.x;
    background("purple");
    player.velocityX = 4;
    player.velocityY = player.velocityY + 0.8
    player.collide(ground);
    camera.position.x = player.x;
    camera.position.y = player.y;
    drawSprites();
    if(frameCount % 100 == 0 ){
      obstacle.push(createSprite(player.x,350,40,40));
    }
    for(var i = 0; i < obstacle.length; i++){
      obstacle[i].collide(ground);
      obstacle[i].velocityX = -2;
      obstacle[i].velocityY = 0.8;
      obstacle[i].addAnimation("sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  }
}
    
}

function keyPressed(){
if(keyDown("space")){
  player.velocityY = -12;  

}  
}