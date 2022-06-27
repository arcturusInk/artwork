let r1,  r2;

function tree(a, brightness, len){
  angleMode(DEGREES);

  push();
  colorMode(HSB);
  if (len > 7){
    strokeWeight(len/20);
    stroke(a+map(len, 0, width, r1, r2),90,brightness, len/30);
    line(0, 0, 0, -len);
    translate(0, -len);  
    rotate(random(20, 30));
    tree(a, brightness + random(-10, 10),len * random(0.7, 0.9));
    rotate(random(-50,-60));
    tree(a, brightness + random(-10, 10),len * random(0.7, 0.9));
  }
  pop();  
}

function createTree(){
  translate(windowWidth/4, windowHeight/1.3);
  let a = random(256);
  tree(a, 50, 110);  
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  r1 = random(255);
  r2 = random(255);

  //noLoop();
}

function draw() {

  background(10);

  createTree();
}
