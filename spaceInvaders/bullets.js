function Bullets(x,y){
	this.x=x;
	this.y=y;
	this.r=8;
	this.toDelete=false;

	this.show=function(){
		fill(50,0,200);
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}

	this.move=function(dir){
		this.y-=4;
	}
	this.hits=function(pos){
		var d=dist(this.x,this.y,pos.x,pos.y);
		if(d<this.r+pos.r){
			return true;
		}else{
			return false;
		}
	}
	this.destroy=function(){
		this.toDelete=true;
	}
}