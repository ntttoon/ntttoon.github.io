// create new Konva object
var stage = new Konva.Stage({
	container: 'container',
	width: 420,
	height: 610
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

// create infoboard layer
var infoImg = new Konva.Image({
	x: 0,
	y: 388,
});
layer.add(infoImg);

// create title bar layer
var titleImg = new Konva.Image({
	x: 10,
	y: 20,
});
layer.add(titleImg);

// create copyright layer
var copyrightImg = new Konva.Image({
	x: 10,
	y: 586,
});
layer.add(copyrightImg);

// create border layer
var borderImg = new Konva.Image({
	x: 0,
	y: 0,
});
layer.add(borderImg);

// create ele layer
var eleImg = new Konva.Image({
	x: 28,
	y: 28,
	scaleX: .29,
	scaleY: .29,
});
layer.add(eleImg);

//// create obj and load image to obj
// imageObj1 load bg layer
var imageObj1 = new Image();
imageObj1.onload = function() {
	bgImg.image(imageObj1);
	layer.draw();
};
imageObj1.src = 'images/card_bg.jpg';

// imageObj2 load unit layer
var imageObj2 = new Image();
imageObj2.onload = function() {
	unitImg.image(imageObj2);
	unitImg.setOffset({
		x: (unitImg.getWidth() / 2) - 210,
		y: (unitImg.getHeight() / 2) - 305,
	});
	layer.draw();
};
imageObj2.src = 'http://cdn.ios.brave.a-lim.jp/unit/img/unit_ills_full_10017.png';

// imageObj3 load info bar layer
var imageObj3 = new Image();
imageObj3.onload = function() {
	infoImg.image(imageObj3);
	layer.draw();
};
imageObj3.src = 'images/card_infobg.png';

// imageObj4 load title bar layer
var imageObj4 = new Image();
imageObj4.onload = function() {
	titleImg.image(imageObj4);
	layer.draw();
};
imageObj4.src = 'images/card_titlebar.png';

// imageObj5 load copyright layer
var imageObj5 = new Image();
imageObj5.onload = function() {
	copyrightImg.image(imageObj5);
	layer.draw();
};
imageObj5.src = 'images/card_copyright.png';

// imageObj5 load border layer
var imageObj6 = new Image();
imageObj6.onload = function() {
	borderImg.image(imageObj6);
	layer.draw();
};
imageObj6.src = 'images/card_border.png';

// imageObj5 load element layer
var imageObj7 = new Image();
imageObj7.onload = function() {
	eleImg.image(imageObj7);
	layer.draw();
};
imageObj7.src = 'images/Element_Fire.png';

// create name txt
var nameText = new Konva.Text({
	x: 60,
	y: 34,
	width: 290,
	text: 'Ignis Halcyon Vargas',
	wrap: 'none',
	fontSize: 22,
	fontStyle: 'bold italic',
	fontFamily: 'Arial',
	shadowColor: 'black',
    shadowBlur: 0,
    shadowOffset: {x : 2, y : 2},
    shadowOpacity: 0.5,
	fill: 'white',
	align: 'right',
	id: 'nametxt'
});
layer.add(nameText);

// create title txt
var titleText = new Konva.Text({
	x: 30,
	y: 420,
	width: 360,
	text: '【 ' + 'MALE / NUKER' + ' 】',
	fontSize: 14,
	fontStyle: 'bold',
	fontFamily: 'Arial',
	fill: '#d2971c',
	align: 'left',
	id: 'titletxt'
});
layer.add(titleText);

// create info txt
var infoText = new Konva.Text({
	x: 30,
	y: 445,
	width: 360,
	text: 'Atk - Bb_mod - Atk_down - Ewd - Spark - Crit_dmg',
	fontSize: 18,
	fontFamily: 'Times New Roman',
	lineHeight:1.2,
	fill: 'white',
	align: 'left',
	id: 'infotxt'
});
layer.add(infoText);

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
function changeEle(path){
	var path = document.getElementById('sel').value;
	var imageObj7 = new Image();
	imageObj7.onload = function() {
		eleImg.image(imageObj7);
		layer.draw();
	};
	imageObj7.src = path;
}

// function change name
function changeName(txt){
	var a = stage.find('#nametxt')[0];
	a.destroy(); 
	
	var nameText = new Konva.Text({
		x: 60,
		y: 34,
		width: 290,
		text: txt,
		wrap: 'none',
		fontSize: 22,
		fontStyle: 'bold italic',
		fontFamily: 'Arial',
		shadowColor: 'black',
		shadowBlur: 0,
		shadowOffset: {x : 2, y : 2},
		shadowOpacity: 0.5,
		fill: 'white',
		align: 'right',
		id: 'nametxt'
	});
	layer.add(nameText);
	layer.draw();
}

// function change title
function changeTitle(txt){
	var b = stage.find('#titletxt')[0];
	b.destroy(); 

	var titleText = new Konva.Text({
		x: 30,
		y: 420,
		width: 360,
		text: '【 ' + txt + ' 】',
		fontSize: 14,
		fontStyle: 'bold',
		fontFamily: 'Arial',
		fill: '#d2971c',
		align: 'left',
		id: 'titletxt'
	});
	layer.add(titleText);
	layer.draw();
}

// function change info
function changeInfo(txt){
	var c = stage.find('#infotxt')[0];
	c.destroy(); 

	var infoText = new Konva.Text({
		x: 30,
		y: 445,
		width: 360,
		text: txt,
		fontSize: 18,
		fontFamily: 'Times New Roman',
		lineHeight:1.2,
		fill: 'white',
		align: 'left',
		id: 'infotxt'
	});
	layer.add(infoText);
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

function borderOff(){
	borderImg.visible(false);
	layer.draw();
}

function borderOn(){
	borderImg.visible(true);
	layer.draw();
}

function infoOff(){
	infoImg.visible(false);
	titleText.visible(false);
	infoText.visible(false);
	layer.draw();
}

function infoOn(){
	infoImg.visible(true);
	titleText.visible(true);
	infoText.visible(true);
	layer.draw();
}

// add cursor styling
unitImg.on('mouseover', function() {
	document.body.style.cursor = 'pointer';
});
unitImg.on('mouseout', function() {
	document.body.style.cursor = 'default';
});