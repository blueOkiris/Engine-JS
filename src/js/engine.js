var animCounter = 0;

var x = 400 - 32, y = 300 -32;
var x_speed = (Math.random() * 10) - 5, y_speed = (Math.random() * 10) - 5;

// Bounce a ball around
function Update() {
	if(x <= 0)
		x_speed = (Math.random() * 5);
	else if(x + 64 >= 800)
		x_speed = -(Math.random() * 5);
	if(y <= 0)
		y_speed = (Math.random() * 5);
	else if(y + 64 >= 600)
		y_speed = -(Math.random() * 5);
	if(x_speed == 0)
		x_speed += 2;
	if(y_speed == 0)
		y_speed += 2;
	
	x += x_speed;
	y += y_speed;
}

function Render() {
	ctx.clearRect(0, 0, 800, 600);
	derp_face.draw(x, y, 64, 64, animCounter);
	bomb.draw(200 + 100 * Math.sin(animCounter/10), 10, 64, 128, animCounter/2);
	
	animCounter++; //  Update the animation for all sprites every frame
}
