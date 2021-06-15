
var cat, catImg, catImg2, mouse, mouseImg, mouseImg2;
var garden, gardenImg;
function preload() {
    //load the images here
    catImg = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    gardenImg = loadImage("images/garden.png");
}
 
function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    garden = createSprite(500,400);
    garden.scale = 1;
    garden.addImage(gardenImg);

    cat.setCollider(cat.x,cat.y,50,50);
    cat = createSprite(800,650);
   
    cat.debug = true;
    cat.scale = 0.1;
    cat.addImage(catImg);

    mouse = createSprite(200,650);
    mouse.debug = true;
    mouse.addImage(mouseImg);
    mouse.scale = 0.1;
}

function draw() {

    background(255);
  
        keyPressed();
    
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW) {
       cat.x = cat.x-3;
       mouse.addAnimation("mouseTeasing",mouseImg2)
       mouse.changeAnimation("mouseTeasing");
       cat.addAnimation("catwalking",catImg2);
       cat.changeAnimation("catwalking");
  }


}
