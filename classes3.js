let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (i = 0; i < 5; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let r = random(100, 300);
    bubbles[i] = new Circle(x, y, r);
  }
}

function draw() {
  for (bubble of bubbles){
      bubble.show();
    if (bubble.intersect(mouseX, mouseY)) {
      bubble.brightness = 255;
    } else bubble.brightness = 0;
  }
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

  intersect(px, py) {
    let d = dist(px, py, this.x, this.y)
    return d < this.r;
  }
}
