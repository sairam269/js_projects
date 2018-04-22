function Firework(){
    
    this.exists=true;
    this.hu=random(255);
    this.firework = new Particle(random(width),height,true,this.hu);
    this.particles=[];
    
    this.update=function(){
        if(this.exists){
            this.firework.update();
            this.firework.applyForce(gravity);
            if(this.firework.vel.y>=0){
                this.exists=false;
                this.explod();
            }
        }
        for(var i=this.particles.length-1;i>=0;i--){
                this.particles[i].applyForce(gravity);
                this.particles[i].update();
                if(this.particles[i].done()){
                    this.particles.splice(i,1);
                }
            }  
    }
    
    this.done=function(){
        if(!this.exists && this.particles.length === 0){
            return true;
        }else{
            return false;
        }
    }
    
    this.explod=function(){
        for(var i=0;i<100;i++){
            var p = new Particle(this.firework.pos.x,this.firework.pos.y,false,this.hu);
            this.particles.push(p);
        }
    }
    
    this.show=function(){
        if(this.exists){
            this.firework.show();
        }
       for(var i=this.particles.length-1;i>=0;i--){
           this.particles[i].show();
       }
    }
}