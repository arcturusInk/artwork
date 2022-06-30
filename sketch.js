let pg;
let hue, brightness = 50;

let iteration, step, r = 90;
let x = [], y = [];

let dotsArray = [];
let totalDots = 1000;
let r1, r2, b1, b2, g1, g2, strokeW, noiseMultiplier, direction, al;

function moon() {
  pg.translate(windowWidth/pg.random(1.3, 2), windowHeight/4);
  //pg.translate(windowWidth/1.3, windowHeight/4);
  pg.beginShape();
    for (let i = 0; i < iteration; ++i) {
      let rad = pg.round(pg.randomGaussian(10, iteration));
      pg.vertex(x[rad], y[rad]);
      pg.strokeCap(ROUND);
      pg.strokeJoin(ROUND);
      pg.strokeWeight(strokeWeightVal);
      pg.stroke(b2,r1,g2);
      pg.noFill();
      pg.push();
      pg.pop();
    }
  pg.endShape();
}

function tree(hue, brightness, len) {
  pg.angleMode(DEGREES);

  pg.push();
  pg.colorMode(HSB);
  if (len > 7){
    pg.strokeWeight(len/20);
    pg.stroke(hue+pg.map(len, 0, width, r1, r2),90,brightness, len/30);
    pg.line(0, 0, 0, -len);
    pg.translate(0, -len);  
    pg.rotate(pg.random(20, 30));
    tree(hue, brightness + pg.random(-10, 10),len * pg.random(0.7, 0.9));
    pg.rotate(pg.random(-50,-60));
    tree(hue, brightness + pg.random(-10, 10),len * pg.random(0.7, 0.9));
  }
  pg.pop();    
}

function turbulence(){
  for(speck of dotsArray) {
    strokeWeight(strokeW);
    let rc = map(speck.x, 0, width, r1, r2);
    let gc = map(speck.y, 0, height, g1, g2);
    let bc = map(speck.x, 0, width, b1, b2); 
    stroke(rc, gc, bc);
    point(speck.x, speck.y);
    let n = noise(speck.x * noiseMultiplier, speck.y * noiseMultiplier);
    let angle = TAU * n;
    speck.x += cos(angle) * direction;
    speck.y += sin(angle) ;
    if(!seenOnCanvas(speck)){
      speck.x = random(width);
      speck.y = random(height);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);

  hue = random(256);
  len = windowHeight/6.8;

  iteration = 500;
  strokeWeightVal=random(0.19,0.51);
  pg.pixelDensity()*2;
  step = TAU / iteration;
  for (let i = 0; i < iteration; i++) {
    x.push(pg.cos(step * i) * r);
    y.push(pg.sin(step * i) * r);
  }
  pg.noLoop();

  
  r1 = random(256); r2 = random(256);
  g1 = random(256); g2 = random(256);
  b1 = random(256); b2 = random(256);
  strokeW = random(.5,2);
  noiseMultiplier = random([0.0009,0.003,0.004,0.005,0.008,0.009, 0.011]);
  direction = random([1, 2, -1, -2]);
  al = random(5,10); 
  for(let i = 0; i < totalDots; i ++) {
    dotsArray.push(createVector(random(width), random(height)));
  }
}

function draw() {
  moon();

  pg.translate(windowWidth/-4, windowHeight/1.3);
  tree(hue, brightness, len); 

  //Draw the offscreen buffer to the screen with image()
  image(pg, 0, 0);

  background(0, al);
  turbulence();
}

function seenOnCanvas(speck) {
  return speck.x >= 0 && speck.x <= width && speck.y >= 0 && speck.y <= height;
}