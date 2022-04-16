function getRandomSize(){
	while (true){
		let r1 = random(1);
		let r2 = random(1);
		if(r2 > r1){
			return r1 * 20;
		}
	}
}

class Snowflake{

	constructor(){
		let x = random(width);
		//this is above the screen, which I don't care about
		//let y = random(-100,-10);
		let y = random(height);
		this.pos = createVector(x,y);
		this.r = getRandomSize();
	}

	render(){
		//determines color: white
		//stroke(255); 
		stroke( 255, 255, 255, random(191,255));
		//how big the snow flakes should be
		strokeWeight(this.r);
		point(this.pos.x, this.pos.y);
	} 
}