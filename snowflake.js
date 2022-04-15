function getRandomSize(){
	// let r = pow(random(0, 1),5);
	// return constrain(r * 20 , 2, 36);

	while (true){
		let r1 = random(1);
		let r2 = random(1);
		if(r2 > r1){
			return r1 * 36;
		}
	}

}

class Snowflake{

	constructor(design){
		let x = random(width);
		//this is above the screen, which I don't care about
		//let y = random(-100,-10);
		let y = random(height);
		this.img = design;
		this.pos = createVector(x,y);
		this.r = getRandomSize();
		//not needed, movement for my needs
		this.vel = createVector();
		this.acc = createVector();
	}

	applyForce(force){
		//"Parallax"
		let f = force.copy();
		f.mult(this.r);

		//takes a force, then applies to the object acc
		this.acc.add(force);
	}


	update(){
		//add the vel to this pos every frame
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		//clear out the acc in every frame. force accumulation
		this.acc.mult(0);
	}

	render(){
		// //determines color: white
		// stroke(255); 
		// //how big the snow flakes should be
		// strokeWeight(this.r);
		// point(this.pos.x, this.pos.y);

		imageMode(CENTER);
		image(this.img, this.pos.x, this.pos.y, this.r, this.r);
	} 
}