let snow=[];
let gravity;
let spritesheet;
let textures=[];
let zOff=0;
function setup(){
	createCanvas(windowWidth-40,windowHeight-40);
	gravity=createVector(0,0.05);
	background(0);
	for(let x=0;x<spritesheet.width;x+=32){
		for(let y=0;y<spritesheet.height;y+=32){
			let img=spritesheet.get(x,y,32,32);
			image(img,x,y);
			textures.push(img);
		}
	}
	for(let i=0;i<600;i++){
		let x=random(width);
		let y=random(height);
		snow.push(new SnowFlake(x,y));
	}
	
}

function preload(){
	spritesheet=loadImage('flakes32.png');
}

function draw(){
	
	background(0);
	//snow.push(new SnowFlake());
	//image(textures,0,0);
	
	zOff+=0.009;
	for(flake of snow){
		let xOff=flake.pos.x/width;
		let yOff=flake.pos.y/height;

		let wAngle=noise(xOff,yOff,zOff)*TWO_PI;
		let wind=p5.Vector.fromAngle(wAngle);
		wind.mult(0.009);
		flake.applyForce(wind);
		flake.applyForce(gravity);
		flake.update();
		flake.render();
	}

	
}