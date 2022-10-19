let bgcolor;
let biggie;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  bgcolor = color(200);
  biggie = createButton("go go go go");
  biggie.mousePressed(changeColor);
}

function changeColor() {
  bgcolor = color(random(0,255));
}


function draw() {
  background(bgcolor);
  fill(255, 0, 0);
  rect(100, 50, 50);



}
