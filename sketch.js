let cluster = [];

let iteration, r = 125;
let cX = [], cY = [];
let step, moonColor;
let r1,  r2;

function randomizeBGcolor(){
  //let bgColor = color(random(160,255),random(160,255),random(160,255));
  h = random([0, 15, 180, 195, 210, 225, 240, 300, 345]);//random([0,15, 180,195, 210,225, 345]);//165
  console.log(h);
  s = random(30,43);
  b = random(0,25)//random(75,85);
  bgColor = color('hsb('+h+', '+s+'%, '+b+'%)');
  background(bgColor);
}

function moon() {
//translate(width/7, height/4);
//translate(width/2, height/4);
//translate(width/1.2, height/4);
  translate(width/random(2,7), height/4);

  beginShape();
  for (let i = 0; i < iteration; ++i) {

    let rad = round(randomGaussian(10, iteration));
    vertex(cX[rad], cY[rad]);

    //style for rendering line endings
    strokeCap(ROUND);
    //style of the joints which connect line segments
    strokeJoin(ROUND);
    console.log("strokeWeightVal:" + strokeWeightVal);
    strokeWeight(strokeWeightVal);
    //pale color
    let rc = map(cX[rad], 0, width, r1, r2);
    let gc = map(cY[rad], 0, height, g1, g1);
    let bc = map(cX[rad], 0, width, b1, b1);
    stroke(rc,gc,bc);
    noFill();
    
    
    push();
    pop();
  }
  endShape();
}

function tree(a, brightness, len){
  angleMode(DEGREES);

  push();
  colorMode(HSB);
  if (len > 7){
    //strokeWeight: how heavy the line marks should be
    strokeWeight(len/20);
    //determines the color
    //console.log("map: " + map(len, 0, width, r1, r2)); 
    stroke(a+map(len, 0, width, r1, r2),90,brightness, len/30);
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

function createTree(){
  let test = windowWidth/6;
  console.log("test: " + test);
  translate(windowWidth/4, windowHeight/1.3);
  //green,blue, yellow, orange, teal
  let a = random(256);
  tree(a, 50, 110);  
}

function starRender(){
  for(star of cluster){
    star.render();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  iteration = random(700, 2000);
  console.log("iteration: " + iteration);
  moonColor = color(random(200,255),random(200,255),random(200,255));
  strokeWeightVal=random(0.19,0.51);
  console.log("strokeWeightVal: " + strokeWeightVal)
  //so it glows... like the moon
  pixelDensity()*2;
  console.log("pixelDensity: " + pixelDensity()*2);

  step = TAU / iteration;

  for (let i = 0; i < iteration; i++) {
    //console.log("cos: " + cos(step * i) * r)
    //console.log("sin: " + sin(step * i) * r)
    cX.push(cos(step * i) * r)
    cY.push(sin(step * i) * r)
  }

  for(let i = 0; i < 200; ++i){
     cluster.push(new Star());  
  }

  noLoop();

  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);
}

function draw() {
  randomizeBGcolor();

  starRender();

  moon();

  createTree();
  // translate(windowWidth/2, windowHeight);
  // //green,blue, yellow, orange, teal
  // let a = random(256);
  // tree(a, 50, 100);  

}


//positioning the 'moon'
//function no longer being used
function positionEllipse() {
  //randomize circle color
  circleColor = color(random(200,255),random(200,255),random(200,255));
  fill(random(200,255),random(200,255),random(200,255));
  noStroke();
  ellipse(windowWidth/2,windowHeight/2,400,400);

}