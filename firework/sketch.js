var fireworks = [];
var gravity;

function setup(){
    createCanvas(800,400);
    gravity = createVector(0,0.2);
    strokeWeight(4);
    colorMode(HSB);
    stroke(255);
}
function draw(){
    colorMode(RGB);
    background(0,20);
    if(random(1)<0.1){
        fireworks.push(new Firework());
    }
    for(var i=fireworks.length-1;i>=0;i--){
        fireworks[i].update();
        fireworks[i].show();
        if(fireworks[i].done()){
            fireworks.splice(i,1);
        }
    }
}