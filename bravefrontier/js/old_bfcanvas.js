//This script base on: https://github.com/lostdecade/simple_canvas_game
//Modify: ntttoon

// Create the canvas
//var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
//canvas.width = 500;
//canvas.height = 375;
//document.body.appendChild(canvas);

// Load image
var bgImage = new Image();
bgImage.src = "images/bg_fbnews.jpg";
//
var heroImage = new Image();
heroImage.src = "http://cdn.ios.brave.a-lim.jp/unit/img/unit_ills_full_10017.png";
heroImage.onload = function() {
	reset();
};
//
var messImage = new Image();
messImage.src = "images/mess_box.png";
// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

//
var reset = function () {
	hero.x = -((heroImage.width / 2) - 250);
	hero.y = -((heroImage.height / 2) - 187.5);
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}
	//
};

// Draw everything
var render = function () {
	ctx.drawImage(bgImage, 0, 0);
	ctx.drawImage(heroImage, hero.x, hero.y);
	ctx.drawImage(messImage, 0, 275);
	txtboldAppend(txt1.value,310);
	txtnorAppend(txt2.value,335);
	txtnorAppend(txt3.value,360);
	//
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
	
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
//
function saveimg(){
	 var dataURL = canvas.toDataURL();
     document.getElementById('canvasImg').src = dataURL;
}
function changeArt(path){
     heroImage.src = path;
	 document.getElementById('id01').style.display='none'
}
function changeBg(){
	 var path = document.getElementById('sel').value;
     bgImage.src = path;
	 document.getElementById('txt1').focus();
}
function txtboldAppend(text,y){
	var x = canvas.width / 2;
    //var y = canvas.height / 2;
	ctx.font = 'bold 24px Roboto';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'white';
	ctx.fillText(text, x, y);
}
function txtnorAppend(text,y){
	var x = canvas.width / 2;
    //var y = canvas.height / 2;
	ctx.font = '20px Roboto';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'white';
	ctx.fillText(text, x, y);
}
function artMove(direction){
	if(direction == 'up'){
		hero.y -= 10;
	}
	if(direction == 'down'){
		hero.y += 10;
	}
	if(direction == 'left'){
		hero.x -= 10;
	}
	if(direction == 'right'){
		hero.x += 10;
	}
}