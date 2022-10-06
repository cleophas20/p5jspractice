//Code! Programming with p5.js
let circleX = 100;

function setup() {
  let buildingWidth = 50;
  let buildingHeight = 100;
  let skyline = windowWidth;
  let horizon = windowHeight/(random(1.1, 1.5));
  createCanvas(windowWidth, windowHeight);
  background(100, 100, 100);
  ellipse(random(50 - 350), random(20, horizon - 100), random(25, 100));
  fill(200, 190, 180);
  stroke(0);
  line(0, (horizon), (windowWidth), (horizon));
//  noStroke();
  while (skyline > 50) {
    buildingHeight = random(100, 300);
    buildingWidth = random(50, 200);
    skyline = skyline - buildingWidth;
    fill(200, 100, 234);
    rect(skyline, horizon - buildingHeight, buildingWidth, buildingHeight);
    for (let j = (skyline + 10); j < (skyline + buildingWidth - 10); j += 10) {
      fill(230, 200, 150);
      let spacing = 10;
      while (horizon - buildingHeight + spacing < horizon - 20) {
        rect(j, (horizon - buildingHeight + spacing), 5, 10);
        spacing = spacing + 20;
      }
    }
  }
}

function draw() {




  //rectMode(CENTER);
  //fill(255, 255, 255);
  //rect(200, 150, 100);
  //stroke(0);
  //line(0, 0, 250, 250);


}
