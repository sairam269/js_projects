var birds=[];
var pipes=[];
const total=400;
var frame=0;
var speed=5;
var counter=0;
var slider;
let savedBirds=[];
//let AllTimeHighScore=0;
function setup(){
	createCanvas(800,600);
	for(let i=0;i<total;i++){
		birds.push(new Bird());		
	}
	pipes.push(new Pipe());
	slider=createSlider(1,1000,1);
}

function draw(){
	for(n=0;n<slider.value();n++){
		if(counter%80==0){
			pipes.push(new Pipe());
		}
		counter++;
		for(let i=pipes.length;i>=0;i--){
			if(pipes[i]==null){
				continue;
			}
			pipes[i].update();
			for(let j=birds.length-1;j>=0;j--){
				if(pipes[i].hits(birds[j])){
					savedBirds.push(birds.splice(j,1)[0]);
				}
				}
			if(pipes[i].offScreen()){
				pipes.splice(i,1);
			}
		}
		for(let i=birds.length-1;i>=0;i--){
			birds[i].update();
			birds[i].think(pipes);
		}
		if(birds.length==0){
			counter=0;
			nextGen();
			pipes=[];
			//pipes.push(new Pipe());
		}
	}
	background(0);
	for(let i=birds.length-1;i>=0;i--){
		birds[i].show();
	}
	for(let i=pipes.length-1;i>=0;i--){
		pipes[i].show();
	}
	
}
