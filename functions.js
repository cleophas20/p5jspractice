let y = 50;
let speed = 15;
let half = 2;

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(50)
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(50, y, 100, 100);

  if (y > windowHeight - 50 || y < 49) {
    speed = (speed * -1);
   }
  if (speed < 0 && y < (windowHeight/2)) {
    speed = speed * -1;
  };
  y = y + speed;



}
