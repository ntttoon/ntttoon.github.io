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
bgImage.src = "images/main_bg2.jpg";
//
var heroImage = new Image();
heroImage.src = "http://cdn.ios.brave.a-lim.jp/unit/img/unit_ills_full_10017.png";
heroImage.onload = function() {
	reset();
};
//
var messImage = new Image();
messImage.src = "images/dialogue_img.png";
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
	var sf = document.getElementById("zoom_factor").value; 
	ctx.drawImage(heroImage, hero.x, hero.y,heroImage.width * sf,heroImage.height * sf);
	ctx.drawImage(messImage, 0, 335);
	txtboldAppend(txt1.value);
	wrapText(txt2.value, 10, 420, 480, 40);
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
	 document.getElementById('url').value = path;
     heroImage.src = path;
	 document.getElementById('id01').style.display='none'
}
function changeBg(){
	 var path = document.getElementById('sel').value;
     bgImage.src = path;
}
function txtboldAppend(text){
	var x = 110;
	var y = 362;
    //var y = canvas.height / 2;
	ctx.save();
	ctx.font = 'bold 20px Roboto';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'white';
	ctx.fillText(text, x, y);
	ctx.restore();
}
function wrapText(text, x, y, maxWidth, lineHeight) {
	var words = text.split(' ');
	var line = '';
	
	for(var n = 0; n < words.length; n++) {
	  var testLine = line + words[n] + ' ';
	  var metrics = ctx.measureText(testLine);
	  var testWidth = metrics.width;
	  if (testWidth > maxWidth && n > 0) {
		ctx.fillText(line, x, y);
		line = words[n] + ' ';
		y += lineHeight;
	  }
	  else {
		line = testLine;
	  }
	}
	ctx.font = '36px Roboto';
	ctx.textAlign = 'left';
	ctx.fillStyle = 'white';
	ctx.fillText(line, x, y);
}
function zoomFactor(type){
	var sf = document.getElementById("zoom_factor").value;
	var a = Number(sf);
	if(type=='in' && a > 0.1){
		a -= 0.1;
		document.getElementById("zoom_factor").value = a.toPrecision(1);
	}
	if(type=='out' && a < 1 ){
		a += 0.1;
		document.getElementById("zoom_factor").value = a.toPrecision(1);
	}
}