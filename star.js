function getRandomSize(){
	while (true){
		let r1 = random(1);
		let r2 = random(1);
		if(r2 > r1){
			return r1 * 5;
		}
	}
}

class Star{
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = getRandomSize();
	}
	
	render() {
		noStroke();
		ellipse(this.x, this.y, this.size);
	}

}