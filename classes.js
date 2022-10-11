let bubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bubble = new Bubble();
}

function draw() {
  background(0);
  bubble.move();
  bubble.show();
}

class Bubble {
  constructor() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  move() {
    this.x
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}

// function show() {
//   stroke(255);
//   strokWeight(4);
//
// }
//
// function move() {
//
// }
