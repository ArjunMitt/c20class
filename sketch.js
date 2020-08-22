var movingrectangle,fixedrectangle
function setup() {
  createCanvas(800,400);
 movingrectangle=createSprite(400, 200, 50, 50);
 fixedrectangle=createSprite(600,200,50,50);
 movingrectangle.shapeColor=("red");
 fixedrectangle.shapeColor=("red");

}



function draw() {
  background(255,255,255);  
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2
    &&  fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2
    && movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2
    && fixedrectangle.y-movingrectangle.height/2+fixedrectangle.height/2
    ){
movingrectangle.shapeColor=("green");
fixedrectangle.shapeColor=("green");
  }
else{
   movingrectangle.shapeColor=("red");
fixedrectangle.shapeColor=("red");

}
  drawSprites();
}
