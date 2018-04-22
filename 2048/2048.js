var dataBase;
let grid;
let score=0;
let grid_new;
let gameover;
let gamewon;
function setup(){
	noLoop();
	grid=blankGrid();
	grid_new=blankGrid();
	createCanvas(400,400);
	addNum();
	addNum();
	console.table(grid);
	updateCanvas();
}

function gameWon(){
	for(let i=0;i<4;i++){
		for(let j=0;j<4;j++){
			if(grid[i][j]==2048){
				return true;
			}
		}
	}
	return false;
}

function isGameOver(){
	for(let i=0;i<4;i++){
		for(let j=0;j<4;j++){
			if(grid[i][j]==0){
				return false;
			}if(j!=3 && grid[i][j]==grid[i][j+1]){
				return false;
			}if(i!=3 && grid[i][j]==grid[i+1][j]){
				return false;
			}
		}
	}
	return true;
}

function updateCanvas(){
	background(255);
	makeGrid();
	select("#score").html("SCORE : "+score);
}

function blankGrid(){
	return [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
}

function flipGrid(grid){
	for(let i=0;i<4;i++){
		grid[i].reverse();
	}
}

function rotateGrid(grid){
	let newGrid=blankGrid();
	for(let i=0;i<4;i++){
		for(let j=0;j<4;j++){
			newGrid[i][j]=grid[j][i];
		}
	}
	return newGrid;
}

function compare(a,b){
	for(let i=0;i<4;i++){
		for(let j=0;j<4;j++){
			if(a[i][j]!==b[i][j]){
				return true;
			}
		}
	}
	return false;
}

function makeCopy(grid){
	let extra=blankGrid();
	for(let i=0;i<4;i++){
		for(let j=0;j<4;j++){
			extra[i][j]=grid[i][j];
		}
	}
	return extra;
}

function operate(row){
	row=slide(row);
	row=combine(row);
	row=slide(row);
	return row;
}

function keyPressed(){
	let flipped=false;
	let rotated=false;
	let p=false;
	if(keyCode===DOWN_ARROW){
		p=true;
	}else if(keyCode===UP_ARROW){
		flipGrid(grid);
		flipped=true;
		p=true;
	}else if(keyCode===RIGHT_ARROW){
		grid=rotateGrid(grid);
		rotated=true;
		p=true;
	}else if(keyCode==LEFT_ARROW){
		grid=rotateGrid(grid);
		flipGrid(grid);
		flipped=true;
		rotated=true;
		p=true;
	}

	if(p){
		let past=makeCopy(grid);
		for(let i=0;i<4;i++){
			grid[i]=operate(grid[i]);
		}
		let changed=compare(grid,past);

		if(flipped){
			flipGrid(grid)
		}

		if(rotated){
			grid=rotateGrid(grid);
			grid=rotateGrid(grid);	
			grid=rotateGrid(grid);
		}
		
		if(changed!=true){
			addNum();
		}
		updateCanvas();
		gameover=isGameOver();
		if(gameover){
			console.log("gameOver");
		}
		gamewon=gameWon();
		if(gamewon){
			console.log("you win");
		}
	}
}

let CnS={
	"2":{
		size:64,
		color:"#F35956"
	},
	"4":{
		size:64,
		color:"#F35956"
	},
	"8":{
		size:64,
		color:"#49BB6C"
	},
	"16":{
		size:64,
		color:"#49BB6C"
	},
	"32":{
		size:64,
		color:"#9659A7"
	},
	"64":{
		size:64,
		color:"#9658A7"
	},
	"128":{
		size:40,
		color:"#2494C1"
	},
	"256":{
		size:40,
		color:"#2494C1"
	},
	"512":{
		size:40,
		color:"#F1C500"
	},
	"1024":{
		size:20,
		color:"#F1C500"
	},
	"2048":{
		size:20,
		color:"#C5B358"
	}
}

function combine(row){
	for(let i=3;i>=0;i--){
		let a=row[i];
		let b=row[i-1];
		if(a==b){
			row[i]=a+b;
			score+=a+b
			row[i-1]=0;
		}
	}
	return row;
}

function slide(row){
	let arr=row.filter(val => val);
	let missing=4-arr.length;
	let zeros=Array(missing).fill(0);
	arr = zeros.concat(arr)
	return arr;
}

function makeGrid(){
	let w=100;
	for(let i=0;i<4;i++){
		for(let j=0;j<4;j++){
			noFill();
			strokeWeight(2);
			let val=grid[i][j];
			let s=val.toString();
			if(grid_new[i][j]==1){
				strokeWeight(10);
				stroke(200,0,200);
				grid_new[i][j]=0;
			}else{
				stroke(0);
				strokeWeight(4);
			}
			if(val!=0){
				fill(CnS[s].color);
			}else{
				noFill();
			}
			rect(i*w,j*w,w,w,30);
			if(val!==0){
				fill(0);
				textAlign(CENTER,CENTER);
				textSize(CnS[s].size);
				noStroke();
				text(val,i*w+w/2,j*w+w/2);
			}
		}
	}
}

function addNum(){
	let options=[];
	for(let i=0;i<4;i++){
		for(let j=0;j<4;j++){
			if(grid[i][j]===0){
				options.push({x:i,y:j});
			}
		}
	}
	if(options.length>0){
		let spot=random(options);
		let r=random(1);
		grid[spot.x][spot.y]=r>0.2?2:4;
		grid_new[spot.x][spot.y]=1;
	}
}