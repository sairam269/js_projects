var x=0;
var y=0;
var rr,g,b;
function setup(){
    createCanvas(400,400);
    background(0);
}

function draw(){
    var r=random(1);
    rr=random(255);
    g=random(255);
    b=random(255);
    var a=random(255);
    stroke(rr,g,b,a);
    strokeWeight(3);
    if(r<0.5){
        line(x,y,x+10,y+10);
    }else if(r>0.5){
        line(x,y+10,x+10,y);
    }
    x+=10;
    if(x>width){
        x=0;
        if(y>height){
            y=0;
        }else{
            y+=10;
        }
    }
}