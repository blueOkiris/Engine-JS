var resolutions = [1024, 1152, 1280, 1366, 1920];
var screenWidth = getClosestResolution(window.innerWidth * 10 / 12, resolutions); // Take the width of the window and add a little bit of breathing room
var screenHeight = screenWidth * 9 / 16; // Do wide screen

