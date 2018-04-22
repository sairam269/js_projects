var population;
var lifespan = 300;
var lifeP;
var count = 0;
var target
var target2;
var maxforce = 0.5;

var rx;
var ry;
var rw;
var rh;

function setup() {
  createCanvas(600, 600);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);
  target2 = createVector(100,100);

 rx = 200;
 ry = height/2;
 rw = 300;
 rh = 10;

}

function draw() {
  background(0);
  population.run();
  lifeP.html(count);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
  }

  fill(255,0,0);
  stroke(255);
  strokeWeight(3);
  rect(rx, ry, rw, rh);
  //rect(target2.x,target2.y, 60, 10);

  fill(255,0,100);
  stroke(255,100);
  strokeWeight(5);
  ellipse(target.x, target.y, 16, 16);
}
