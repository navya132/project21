var canvas;
var music;
var block1, block2, block3, block4;
var box;
var edge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

block1= createSprite(95,570,188,20);
block1.shapeColor="darkgreen";

block2= createSprite(295,570,188,20);
block2.shapeColor="blue";

block3= createSprite(500,570,188,20);
block3.shapeColor= "darkorange";

block4= createSprite(700,570,188,20);
block4.shapeColor= "darkred";

box= createSprite(30, 100, 30,30);
box.x=random(20,750);
box.velocityY=-4;
box.shapeColor= "white";

edge=createEdgeSprites();



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    text(mouseX+","+mouseY,10,45)

    if(box.isTouching(block1)){
        box.shapeColor="darkgreen"
    }

    if(box.isTouching(block2)){
        box.shapeColor= "blue"
    }

    if(box.isTouching(block3)){
        box.shapeColor= "darkorange"
    }

    if(box.isTouching(block4)){
        box.shapeColor="darkred"
    }
    
    
    
    //create edgeSprite
    box.bounceOff(edge[3])
    box.bounceOff(edge[2])
    box.bounceOff(block1);
    box.bounceOff(block2);
    box.bounceOff(block3);
    box.bounceOff(block4);

    
    



drawSprites();

    //add condition to check if box touching surface and make it box
}
