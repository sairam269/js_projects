var angle=0;
function setup(){
    createCanvas(600,500,WEBGL);
}
function draw(){
    background(255);
    //rectMode(CENTER);
    //noFill();
    translate(0,0);
    //noStroke();
    var dx=mouseX;
    var dy=mouseY;
    pointLight(255,255,255,dx,dy,0);
    //fill(0,0,255);
    directionalLight(150,150,150,1,0,0);
    ambientLight(100,0,50);
    //noFill();
    rotateX(angle);
    rotateY(angle*0.2);
    rotateZ(angle*0.5);
    ambientMaterial(250,250,100);
    box(100,100,75);
    rotateX(angle*0.5);
    rotateY(angle*-1.2);
    rotateZ(angle*0.2);
    ambientMaterial(0,250,250);
    torus(120,20);
    angle+=0.07;
}