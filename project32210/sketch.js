/**Brenna Rowan Project 2**/


function setup() {
  // put setup code here
  createCanvas(1000,1000);
  noLoop();
}

function draw() {
  // put drawing code here
  background(0,255,255);
  let y = 1;
  let rany= random(-100,100);
  let ranR= random(0,255);
  let ranG= random(0,255);
  let ranB= random(0,255);
  for(x = 1;x <=1000;x+1){
	  rany= random(-100,100);
	  ranR= random(0,255);
	  ranG= random(0,255);
	  ranB= random(0,255);
	  fill(color(ranR,ranG,ranB));
	  stroke(5);
	  line(500,rany,50,rany);
  }
}