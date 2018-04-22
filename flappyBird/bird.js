function Bird(){
	this.x=35;
	this.y=height/2;

	this.G=0.6;
	this.velocity=0;
	this.lift=-15;

	this.show=function(){
		fill(150,0,255);
		ellipse(this.x,this.y,20,20);
	}

	this.update=function(){
		this.velocity+=this.G;
		this.velocity*=0.9;
		this.y+=this.velocity;


		if(this.y>=height-1){
			this.y=height-1;
			this.velocity=0;
		}if(this.y<=1){
			this.y=1;
			this.velocity=0;
		}
	}

	this.up=function(){
		this.velocity+= this.lift;
	}

}