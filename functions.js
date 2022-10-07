//ellipse to square
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  let d = 100;
  background(50);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(100, 100, d, d);
  convert(d);
}

function convert(d) {
  a = Math.sqrt(3.14*((d/2)*(d/2)))
  rect(500, 100, a, a);
}
