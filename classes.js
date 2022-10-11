let pop;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pop1 = new Pop(100, 100, 100);
  pop2 = new Pop(500, 500, 200);
  pop3 = new Pop(700, 150, 400);
}

function draw() {
  background(0);
//  pop.move();
  pop1.show();
  pop2.show();
  pop3.show();
}

class Pop {
  constructor(startX, startY, size) {
    this.x = startX;
    this.y = startY;
    this.z = size

  }
  // move() {
  //   this.x = this.x + random(-5, 5);
  //   this.y = this.y + random(-5, 5);
//  }
  show() {
    stroke(255);
    strokeWeight(4);
    if (mouseX > this.x - (this.z/2) &&
    mouseX < this.x + (this.z/2) &&
    mouseY > this.y - (this.z/2) &&
    mouseY < this.y + (this.z/2)) {
      fill(255)
    } else noFill();
    ellipse(this.x, this.y, this.z, this.z);
  }


}
