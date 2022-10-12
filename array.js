var words = ["Committed to the craft", "Working for the love of it", "Building spaces that sing", "Relationally driven"];

var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(0);
  textSize(32);
  text(words[index], 12, 200);
}

function mousePressed() {
  index = index + 1;

  if (index == words.length) {
    index = 0;
  }
}
