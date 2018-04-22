function Bird(brain){
	this.x=35;
	this.y=height/2;

	this.G=0.6;
	this.score=0;
	this.fitness=0;
	this.velocity=0;
	this.lift=-15;
	if(brain){
		this.brain=brain.copy();
	}else{
		this.brain=new NeuralNetwork(4,4,2);
	}
	this.show=function(){
		stroke(255);
		fill(150,0,255,100);
		ellipse(this.x,this.y,20,20);
	}
	this.copy = function() {
    return new Bird(this.brain);
  }

	this.think=function(pipes){
		
		let closest=null;
		let closestD=Infinity;
		for(let i=0;i<pipes.length;i++){
			let d=pipes[i].x-this.x;
			if(d<closestD && d>0){
				closest=pipes[i];
				closestD=d;
			}
		}


		let inputs=[];
		inputs[0]=this.y/height;
		inputs[1]=closest.top/height;
		inputs[2]=closest.bottom/height;
		inputs[3]=closest.x/width;
		let outputs=this.brain.query(inputs);
		if(outputs[0]>outputs[1]){
			this.up();
		}
	}

	this.mutate=function(){
		this.brain.mutate(0.1);
	}

	this.update=function(){
		this.score++;
		/*if(this.score>AllTimeHighScore){
			AllTimeHighScore=this.score;
			console.log("All Time High Score : "+AllTimeHighScore);
		}*/
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