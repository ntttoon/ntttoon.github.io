// create new Konva object
var stage = new Konva.Stage({
	container: 'container',
	width: 500,
	height: 750
});
var layer = new Konva.Layer();
stage.add(layer);

// create bg layer
var bgImg = new Konva.Image({
	x: 0,
	y: 0,
});
layer.add(bgImg);

// create unit layer
var unitImg = new Konva.Image({
	x: 0,
	y: 0,
	draggable: true,
});
layer.add(unitImg);

// create dialogue layer
var dialogueImg = new Konva.Image({
	x: 0,
	y: 335,
	width: 500,
	height: 415,
});
layer.add(dialogueImg);

//// create obj and load image to obj
// imageObj1 load bg layer
var imageObj1 = new Image();
imageObj1.onload = function() {
	bgImg.image(imageObj1);
	layer.draw();
};
imageObj1.src = 'images/main_bg2.jpg';

// imageObj2 load unit layer
var imageObj2 = new Image();
imageObj2.onload = function() {
	unitImg.image(imageObj2);
	unitImg.setOffset({
		x: (unitImg.getWidth() / 2) - 250,
		y: (unitImg.getHeight() / 2) - 187.5,
	});
	layer.draw();
};
imageObj2.src = 'http://cdn.ios.brave.a-lim.jp/unit/img/unit_ills_full_10017.png';

// imageObj3 load dialogue layer
var imageObj3 = new Image();
imageObj3.onload = function() {
	dialogueImg.image(imageObj3);
	layer.draw();
};
imageObj3.src = 'images/dialogue_img.png';

// create name txt
var nameText = new Konva.Text({
	x: 20,
	y: 345,
	width: 190,
	text: 'Vargas',
	fontSize: 20,
	fontStyle: 'bold',
	fontFamily: 'Roboto',
	fill: 'white',
	align: 'center',
	id: 'nametxt'
});
layer.add(nameText);

// create dialogue txt
var dialogueText = new Konva.Text({
	x: 10,
	y: 400,
	text: 'Hello, I am Vargas',
	fontSize: 36,
	fontFamily: 'Roboto',
	lineHeight: 1.1,
	fill: 'white',
	width: 480,
	align: 'left',
	id: 'dialoguetxt'
});
layer.add(dialogueText);

// function change unit
function changeUnit(path){
	document.getElementById('url').value = path;
	var imageObj2 = new Image();
	imageObj2.onload = function() {
		unitImg.image(imageObj2);
		layer.draw();
	};
	imageObj2.src = path;
	document.getElementById('id01').style.display='none'
}

// function change bg
function changeBg(path){
	var path = document.getElementById('sel').value;
	var imageObj1 = new Image();
	imageObj1.onload = function() {
		bgImg.image(imageObj1);
		layer.draw();
	};
	imageObj1.src = path;
}

// function change name
function changeName(txt){
	var a = stage.find('#nametxt')[0];
	a.destroy(); 
	
	var nameText = new Konva.Text({
		x: 20,
		y: 345,
		width: 190,
		text: txt,
		fontSize: 20,
		fontStyle: 'bold',
		fontFamily: 'Roboto',
		fill: 'white',
		align: 'center',
		id: 'nametxt'
	});
	layer.add(nameText);
	layer.draw();
}

// function change dialogue
function changeDialogue(txt){
	var b = stage.find('#dialoguetxt')[0];
	b.destroy(); 

	var dialogueText = new Konva.Text({
		x: 10,
		y: 400,
		text: txt,
		fontSize: 36,
		fontFamily: 'Roboto',
		lineHeight: 1.1,
		fill: 'white',
		width: 480,
		align: 'left',
		id: 'dialoguetxt'
	});
	layer.add(dialogueText);
	layer.draw();
}

//
function zoomOut(path){
	var path = document.getElementById("url").value;
	var sf = document.getElementById("zoom_factor").value;
	var a = Number(sf);
	//
	var imageObj2 = new Image();
	imageObj2.onload = function() {
		unitImg.image(imageObj2);
		if(a > 0.1){
			a -= 0.1;
			document.getElementById("zoom_factor").value = a.toPrecision(1);
			unitImg.scaleX(a);
			unitImg.scaleY(a);
		}
		layer.draw();
	};
	imageObj2.src = path;
}
//
function zoomIn(path){
	var path = document.getElementById("url").value;
	var sf = document.getElementById("zoom_factor").value;
	var a = Number(sf);
	//
	var imageObj2 = new Image();
	imageObj2.onload = function() {
		unitImg.image(imageObj2);
		if(a < 1){
			a += 0.1;
			document.getElementById("zoom_factor").value = a.toPrecision(1);
			unitImg.scaleX(a);
			unitImg.scaleY(a);
		}
		layer.draw();
	};
	imageObj2.src = path;
}
// add cursor styling
unitImg.on('mouseover', function() {
	document.body.style.cursor = 'pointer';
});
unitImg.on('mouseout', function() {
	document.body.style.cursor = 'default';
});