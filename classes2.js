let shapes = [];
let pinky;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    let x = random(0, windowWidth);
    let y = random(0, windowHeight);
    let r = random(20, 100);
    shapes[i] = new Circle(x, y, r);
  }
  pinky = new Circle(400, 200, 10)
}

function mousePressed() {
  shape.changeColor(255);
}

function draw() {
  background(0);

  pinky.x = mouseX;
  pinky.y = mouseY;
  pinky.show();

  for (shape of shapes) {
    shape.show();
    }
    if (pinky.intersect(shape)) {
      console.log('HELP!')
      shape.changeColor(255);
    } shape.changeColor(0);
}

class Circle {
    constructor (startX, startY, rad) {
    this.x = startX;
    this.y = startY;
    this.r = rad;
    this.brightness = 0;
  }

  intersect(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    return (distance < this.r + other.r)
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r);


  }

}
