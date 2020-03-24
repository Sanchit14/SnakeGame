var square
function setup() {
    createCanvas(600,400)
    var square= createSprite(300,200);
    square.shapeColor="orange";
    
    }
function draw(){
    square.x=World.MouseX;
    square.y=World.MouseY;
    drawSprites();
}




























