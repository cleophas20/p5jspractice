let bubbles = [];
//let pinky;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (i = 0; i < 5; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let r = random(50, 100);
    bubbles[i] = new Circle(x, y, r);
  }
//  pinky = new Circle(random(windowWidth), random(windowHeight), 50);
}

function draw() {
  for (bubble of bubbles){
    bubble.show();
    for (other of bubbles) {
      if (bubble !== other && bubble.intersect(other)) {
        bubble.changeColor(255);
      // } else {
      //     bubble.changeColor(0);
      // }
      }
    }
  }
//  pinky.show();
}


class Circle {
  constructor (startX, startY, rad) {
    this.x = startX;
    this.y = startY;
    this.r = rad;
    this.brightness = 0;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 200);
    ellipse(this.x, this.y, this.r * 2);
  }

  intersect(other) {
    let d = dist(this.x, this.y, other.x, other.y)
    return (d < this.r + other.r);
  }

  changeColor(bright) {
    this.brightness = bright
  }
}
