

let sketch = function (p) {
  p.particles = [];
  p.num = 1000;
  p.noiseScale = 0.01/2;
  

  p.setup = function() {
    p.createCanvas(400, 400);
    for(let i = 0; i < p.num; i ++) {
      p.v1 = p.createVector(p.random(p.width), p.random(p.height));
      p.particles.push(p.v1)
    }
    p.stroke('yellow');
  }

  p.draw = function() {
    p.background(0,10);
    for(p.i = 0; p.i < p.num; p.i++) {
      p.pt = p.particles[p.i];
      p.point(p.pt.x, p.pt.y);
      p.n = p.noise(p.pt.x * p.noiseScale, p.pt.y * p.noiseScale);
      p.a = p.TAU * p.n;
      p.x += p.cos(p.a);
      p.y += p.sin(p.a);
      /*
      if(!p.onScreen(p.pt)) {
        p.pt.x = p.random(p.width);
        p.pt.y = p.random(p.height);
      }
      */
    }
  }

  p.onScreen = function(v){
    return v.x >= 0 && v.x <= p.width && v.y >= 0 && v.y <= p.height;
  }

}

let background = new p5(sketch);



/*let r1,  r2;

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
*/