let r=0,g=0,b=0;
let brain;
let w="w";
let counter=0;
let slider;
function setup(){
	createCanvas(800,400);
	brain=new NeuralNetwork(3,3,3);
	slider=createSlider(1,50,1);
}

function draw(){
	counter=0;
	for(let i=0;i<slider.value();i++){
		counter+=2;
		if(counter%10==0){
			pickColor();
		}
		background(r,g,b);

		textSize(50);
		stroke(255,0,0);
		strokeWeight(5);
		fill(0);
		textAlign(CENTER,CENTER);
		text("red",100,150);
		fill(0,255,0);
		text("green",420,150);
		fill(0,0,255);
		text("blue",670,150);

		w=cPredict();
		let c=colorPredictor();
		
		if(w==c){
			console.log("correct");
			fill(0);
			if(w=='r'){
				ellipse(100,300,30,30);	
			}else
			if(w=='g'){
				ellipse(420,300,30,30);
			}else
			if(w=='b'){
				ellipse(670,300,30,30);
			}
		}
		
		if(c!=w){
			console.log("wrong");
			fill(255);
			let inputs=[r/255,g/255,b/255];
			if(c=='r'){
				ellipse(100,300,70,60);
				target=[1,0,0];
				brain.train(inputs,target);
			}else
			if(c=='g'){
				ellipse(420,300,70,60);
				target=[0,1,0];
				brain.train(inputs,target);
			}else
			if(c=='b'){
				ellipse(670,300,70,60);
				target=[0,0,1];
				brain.train(inputs,target);
			}
		}
	}
}

function cPredict(){
	let inputs=[r/255,g/255,b/255];
	let outputs=brain.query(inputs);
	if(outputs[0]>outputs[1] && outputs[0]> outputs[2]){
		return "r";
	}else if(outputs[1]>outputs[2]){
		return "g";
	}else{
		return "b";
	}
}

function colorPredictor(){
	if(r>b && r> g){
		return "r";
	}else if(g>b){
		return "g";
	}else{
		return "b";
	}
}

function pickColor(){
	r=random(255);
	g=random(255);
	b=random(255);
}

function mousePressed(){
	pickColor();
}