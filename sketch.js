

//succesfully created sketch in instance mode
/*
let sketch = function (p) {
  p.a, p.brightness, p.len;

  p.iteration, p.step, p.r = 125;
  p.cX = [], p.cY = [];

  p.moon = function(){
    p.translate(p.width/p.random(2,7), p.height/4);
    p.beginShape();
      for (let i = 0; i < p.iteration; ++i) {
        p.rad = p.round(p.randomGaussian(10, p.iteration));
        p.vertex(p.cX[p.rad], p.cY[p.rad]);
        p.strokeCap(p.ROUND);
        p.strokeJoin(p.ROUND);
        p.strokeWeight(p.strokeWeightVal);
        p.stroke(p.random(256),p.random(256),p.random(256));
        p.noFill();
        p.push();
        p.pop();
      }
    p.endShape();
  }

  p.tree = function(a, brightness, len){
    p.angleMode(p.DEGREES);

    p.push();
    p.colorMode(p.HSB);
    if (len > 7){
      p.strokeWeight(len/20);
      p.stroke(a,90,brightness, len/30);
      p.line(0, 0, 0, -len);
      p.translate(0, -len);  
      p.rotate(p.random(20, 30));
      p.tree(a, brightness + p.random(-10, 10),len * p.random(0.7, 0.9));
      p.rotate(p.random(-50,-60));
      p.tree(a, brightness + p.random(-10, 10),len * p.random(0.7, 0.9));
    }
    p.pop();    
  }

  p.setup = function() {
    p.c = p.createCanvas(p.windowWidth, p.windowHeight);

    p.a = p.random(256);
    p.brightness = 50;
    p.len = 110;

    p.iteration = 1000;
    p.strokeWeightVal=0.3;
    p.pixelDensity()*2;
    p.step = p.TAU / p.iteration;
    for (let i = 0; i < p.iteration; i++) {
      p.cX.push(p.cos(p.step * i) * p.r);
      p.cY.push(p.sin(p.step * i) * p.r);
    }
    p.noLoop();
  }

  p.draw = function() {
    p.moon();

    p.translate(p.windowWidth/4, p.windowHeight/1.3);
    p.tree(p.a, p.brightness, p.len);  
  }
}
let foreground = new p5(sketch);
*/
//uncesful attempt to flow field in instance mode
/*
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
      //if(!p.onScreen(p.pt)) {
        //p.pt.x = p.random(p.width);
        //p.pt.y = p.random(p.height);
      //}
    }
  }

  p.onScreen = function(v){
    return v.x >= 0 && v.x <= p.width && v.y >= 0 && v.y <= p.height;
  }

}
let background = new p5(sketch);
*/