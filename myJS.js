const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d');

class Circle{
	constructor(x,y,radius,dx,dy,color){
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.dx = dx;
		this.dy = dy;
		this.color = color;
	}

	draw(){
		c.beginPath();
		c.arc(this.x ,this.y ,this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'green';
		c.fillStyle = this.color;
		c.fill();
		c.stroke();

		this.update();
	}

	
	update(){
		if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
			this.dx = -this.dx
		}
		if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0){
			this.dy = -this.dy
		}
		this.x += this.dx;
		this.y += this.dy
	}

	
}

function randomInteger(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



const colorsArray = [

	'#e26a6a',
	'#d2527f',
	'#f22613',
	'#c8f7c5',
	'#a2ded0',
	'#e87e04',
	'#1f3a93',
	'#013243',
	'#336e7b',
	'#20B2AA',
	'#9370DB',
	'#FFA500',
	'#98FB98',
	

	 
];
const circlesArray = [];

for(let i = 0; i < 999; i++){
	let radius = 20;

	let x = Math.random() * (window.innerWidth - radius *2) + radius;
	let y = Math.random() * (window.innerHeight - radius *2)+ radius;

	let dx = (Math.random() - 0.5) * 2;
	let dy = (Math.random() - 0.5) * 2;
	
	const colorIndex = randomInteger(1, colorsArray.length -1);
	circlesArray.push(new Circle(x, y, radius, dx, dy, colorsArray[colorIndex]));
}

function animate(){
	requestAnimationFrame(animate);

	c.clearRect(0,0, window.innerWidth, window.	innerHeight);
	
	for(let i = 0; i < circlesArray.length; i++){
		circlesArray[i].draw();
	}

}
animate();