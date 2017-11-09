var animCounter = 0;

var x = 400 - 32, y = 300 - 32;
var x_speed = 0, y_speed = 0, move_speed = 4;

var key = [false,false,false,false]; //  Up, down, left, right
var up = 0, down = 1, left = 2, right = 3;

// Updates whenever possible (to be fast)
function Update() {
	// Move with keypresses
	x_speed = (key[left] ? -move_speed : 0) + (key[right] ? move_speed  : 0);
	y_speed = (key[up] ? -move_speed : 0) + (key[down] ? move_speed  : 0);
	
	if(x + x_speed <= 0) {
		x = x_speed = 0;
	} else if(x + x_speed + 64 >= 800) {
		x = 800 - 64;
		x_speed = 0;
	}
	
	if(y + y_speed <= 0) {
		y = y_speed = 0;
	} else if(y + y_speed + 64 >= 600) {
		y = 600 - 64;
		y_speed = 0;
	}
	
	x += x_speed;
	y += y_speed;
}

// Updates every frame (60 fps)
function Render() {
	ctx.clearRect(0, 0, 800, 600);
	derp_face.draw(x, y, 64, 64, animCounter);
	bomb.draw(200 + 100 * Math.sin(animCounter/10), 10, 64, 128, animCounter/2);
	
	animCounter++; //  Update the animation for all sprites every frame
}

// Key pressed event
function OnKeyDown(event) {
	switch(event.keyCode) {
		case 38:
			key[up] = true;
			break;
		
		case 40:
			key[down] = true;
			break;
			
		case 37:
			key[left] = true;
			break;
			
		case 39:
			key[right] = true;
			break;
	}
}

// Key released event
function OnKeyUp(event) {
	switch(event.keyCode) {
		case 38:
			key[up] = false;
			break;
		
		case 40:
			key[down] = false;
			break;
			
		case 37:
			key[left] = false;
			break;
			
		case 39:
			key[right] = false;
			break;
	}
}
