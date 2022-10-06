function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeweight(4);
  noFill():

  if (mouseX > 300) {
    fill(255, 0, 200);
  }
  ellipse(300, 200, 100, 100);
}
