function Particle(x,y,fwp,hu){
    
    this.fwp=fwp;
    this.lifespan=255;
    if(this.fwp){
        this.vel=createVector(0,random(-10,-13));
    }else{
        this.vel=p5.Vector.random2D();
        this.vel.mult(random(2,8));
    }
    this.pos=createVector(x,y);
    this.acc=createVector(0,0);
    
    this.applyForce = function(force){
        this.acc.add(force);
    }
    
    this.update = function(){
        if(!this.fwp){
            this.vel.mult(0.9);
            this.lifespan-=4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    
    this.done=function(){
        if(this.lifespan>0){
            return false;
        }else{
            return true;
        }
    }
    
    this.show = function(){
        colorMode(HSB);
        if(!this.fwp){
            strokeWeight(2);
            stroke(hu,255,255,this.lifespan);
        }else{
            strokeWeight(4);
            stroke(hu,255,255);
        }
        point(this.pos.x,this.pos.y);
    }
    
}