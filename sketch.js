let snow = [];

function tree(a, brightness, len){
  push();
    colorMode(HSB);
  if (len > 7){
    //strokeWeight: how heavy the line marks should be
    strokeWeight(len/20);
    //determines the color
    stroke(a ,90,brightness, len/30);
    //determines the location of the lines
    line(0, 0, 0, -len);
    translate(0, -len);  
    rotate(random(20, 30));
    tree(a, brightness + random(-10, 10),len * random(0.7, 0.9));
    rotate(random(-50,-60));
    tree(a, brightness + random(-10, 10),len * random(0.7, 0.9));
  }
  pop();  
}

function randomizeBGcolor(){
  //let bgColor = color(random(160,255),random(160,255),random(160,255));
  h = random([0,15, 165,180,195, 210,225, 345]);
  s = random(30,43);
  b = random(75,85);
  bgColor = color('hsb('+h+', '+s+'%, '+b+'%)');
  background(bgColor);
}

function positionEllipse() {
  //randomize circle color
  circleColor = color(random(200,255),random(200,255),random(200,255));
  fill(circleColor);
  noStroke();
  ellipse(windowWidth/2,windowHeight/2,400,400);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  noLoop();
}

function draw() {
  randomizeBGcolor();

  //background(0);
  for(let i = 0; i < 100; ++i){
     snow.push(new Snowflake());  
  }
  
  for(flake of snow){
    flake.render();
  }
  
  positionEllipse();


  translate(windowWidth/2, windowHeight);
  //green,blue, yellow, orange, teal
  let a = random(255);
  tree(a, 50, 100);  
}
