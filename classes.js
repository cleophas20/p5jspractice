let bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) {
    bubble[i] = new Bubble((i*100 + 100), (i*100 + 100), (i*100 + 100))
  }
  // pop[0] = new Pop(100, 100, 100);
  // pop2 = new Pop(500, 500, 200);
  // pop3 = new Pop(700, 150, 400);
}

function draw() {
  background(0);
//  pop.move();
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].rollover(mouseX, mouseY);
    bubble[i].show();
  }
}

class Bubble {
  constructor(startX, startY, size) {
    this.x = startX;
    this.y = startY;
    this.z = size

  }
  // move() {
  //   this.x = this.x + random(-5, 5);
  //   this.y = this.y + random(-5, 5);
//  }

  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.z/2) {
      this.brightness = 255;
    } else {
      this.brightness = 0;
    }
  }
  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.z);
  }


}
