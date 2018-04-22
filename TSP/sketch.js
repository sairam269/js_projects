var c=[];
var total=20;
var min;
var best=[];

function setup(){
	createCanvas(400,300);
	for(var i=0;i<total;i++){
		var v=createVector(random(width),random(height));
		c[i]=v;
	}
	var d=calcDistance(c);
	min=d;
	for(var i=0;i<total;i++){
		best[i]=c[i];
	}
	console.log(min);
}

function draw(){
	background(0);
	fill(255);
	stroke(255);
	strokeWeight(2);
	for(var i=0;i<c.length;i++){
		ellipse(c[i].x,c[i].y,8,8);
	}

	stroke(255);
	strokeWeight(1);
	noFill();

	beginShape();
	for(var i=0;i<c.length;i++){
		vertex(c[i].x,c[i].y);
	}
	endShape();
	
	stroke(255,255,0);
	strokeWeight(4);
	noFill();
	
	beginShape();
	for(var i=0;i<best.length;i++){
		vertex(best[i].x,best[i].y);
	}
	endShape();
	
	var i=floor(random(c.length));
	var j=floor(random(c.length));
	swap(c,i,j);
	var d=calcDistance(c);
	if(d<min){
		min=d;
		console.log(min);
		for(var i=0;i<total;i++){
			best[i]=c[i];
		}
	}
}

function swap(a,i,j){
	var t=a[i];
	a[i]=a[j];
	a[j]=t;
}

function calcDistance(p){
	var sum=0;
	for(var i=0;i<p.length-1;i++){
		var d=dist(p[i].x,p[i].y,p[i+1].x,p[i+1].y);
		sum+=d;
	}
	return sum;
}