var ship;
var bullets=[];
var b;
var enemy=[];
var score=0;
var time=0;
var dataBase;
function setup(){
	ship=new Ship();
	//b=new Drop(width/2,height/2);
	for(var i=0;i<7;i++){
		enemy[i]=new Enemy(i*80+80,60);
	}
	createCanvas(600,400);
}

function draw(){
	time++;
	score+=0.1;
	background(51);
	
	ship.show();

	for(var i=0;i<bullets.length;i++){
		bullets[i].show();
		bullets[i].move();
		for(var j=0;j<enemy.length;j++){
			if(bullets[i].hits(enemy[j])){
				score+=1;
				bullets[i].destroy();
				enemy[j].weaken();
				console.log("hit");
			}
		}
	}	

	var edge=false;
	for(var i=0;i<enemy.length;i++){
		enemy[i].show();
		enemy[i].move();
		if(enemy[i].x>width || enemy[i].x<0){
			edge=true;
		}
	}
	if(edge){
		for(var i=0;i<enemy.length;i++){
			enemy[i].shiftDown();
		}
	}

	for(var i=bullets.length-1;i>=0;i--){
		if(bullets[i].toDelete){
			bullets.splice(i,1);
		}
	}
	for(var i=enemy.length-1;i>=0;i--){
		if(enemy[i].toDelete){
			enemy.splice(i,1);
		}
	}
	ship.move();
	if(time>1500){
		score=0;
	}
}

function keyPressed(){

	if(key===' '){
		b=new Bullets(ship.x,height-15);
		bullets.push(b);
	}

	if(keyCode===RIGHT_ARROW){
		ship.setDir(1);
	}else if(keyCode===LEFT_ARROW){
		ship.setDir(-1);
	}
}

function keyReleased(){
	if(key!=' '){
		ship.setDir(0);
	}
}