function getRandomSize(){

	let r=pow(random(0,1),3);
	return constrain(r*32,2,32);
/*
	let r=randomGaussian()*2;
	//return abs(r*r);
	return constrain(abs(r*r),2,36);

	
	while(1){
		let r1=random(1);
		let r2=random(1);
		if(r2>r1){
			return r1*36;
		}
	}*/
}

class SnowFlake{

	constructor(sx,sy){
		this.x=sx;
		this.y=sy;
		this.pos=createVector(this.x,this.y);
		this.vel=createVector(0,5);
		this.acc=createVector();
		this.r=getRandomSize();
		this.img=random(textures);
		this.angle=random(1,360);
		this.dir=(random(1)>0.5)?1:-1;
		this.xOff=0;		
	}

	applyForce(g){
		this.f=g.copy();
		this.f.mult(this.r);
		this.acc.add(this.f);
	}

	offScreen(){
		if(this.pos.y>height+this.r){
			return 1;
		}else{
			return 0;
		}
	}

	randomize(){
		this.x=random(width);
		this.y=random(-100,-10);
		this.pos=createVector(this.x,this.y);
		this.vel=createVector(0,5);
		this.acc=createVector();
		this.r=getRandomSize();
		this.img=random(textures);
		this.angle=random(1,360);
		this.dir=(random(1)>0.5)?1:-1;
	}

	update(){
		this.xOff=sin(this.angle)*this.r;
		this.vel.add(this.acc);
		this.vel.limit(this.r*0.2);
		if(this.vel.mag()<1){
			this.vel.normalize();
		}
		this.pos.add(this.vel);
		this.acc.mult(0);
		if(this.offScreen()){
			this.randomize();
		}
		if(this.pos.x<-this.r){
			this.pos.x=this.r+width;
		}if(this.pos.x>this.r+width){
			this.pos.x=0-this.r;
		}
		this.angle+=this.dir*this.vel.mag()/150;
	}

	render(){

		push();
		translate(this.pos.x+this.xOff,this.pos.y);
		rotate(this.angle);
		imageMode(CENTER);
		image(this.img,0,0,this.r,this.r);
		pop();
		/*
		stroke(255);
		strokeWeight(this.r);
		point(this.pos.x,this.pos.y);*/
	}
}