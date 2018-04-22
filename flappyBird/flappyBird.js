var dataBase;
var bird;
var pipes=[];
var frame=0;
var speed=5;
var score=0;
function setup(){
	createCanvas(800,600);
	bird=new Bird();
	pipes[0]=new Pipe();
}

function draw(){
	background(0);
	select("#score").html("SCORE : "+score);
	bird.show();
	bird.update();
	if(frameCount%50===0){
		frame+=1;
		pipes[frame]=new Pipe();
		score+=5;
	}

	for(let i=pipes.length;i>=0;i--){
		if(pipes[i]==null){
			continue;
		}
		pipes[i].show();
		pipes[i].update();

		if(pipes[i].hits(bird)){
			score=0;
		}

		if(pipes[i].offScreen()){
			pipes.splice(i,1);
		}
	}
}

function keyPressed(){
	if(key==' '){
		bird.up();
	}
}