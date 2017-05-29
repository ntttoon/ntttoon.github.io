// create new Konva object
var stage = new Konva.Stage({
	container: 'container',
	width: 300,
	height: 600
});
var layer = new Konva.Layer();

// Function Resize
function resizeCanvas(){
	var w = document.getElementById("w").value;
	var h = document.getElementById("h").value;
	var stage = new Konva.Stage({
		container: 'container',
		width: w,
		height: h
	});
	stage.add(layer);
	document.getElementById("widthContent").value = w;
}

// Function Rectange
function addImage(path,img,imgGroup,imgObj,imgDestroyBtn,imgDestroyId,zindex,currBtnId,thumb){
	//var d = new Date();
	//var n = d.getTime();
	var options = document.getElementsByName("alpha");
	if (options) {
		for (var i = 0; i < options.length; i++) {
			if (options[i].checked){
				 var alpha = options[i].value;
			}
		}
	}
	
	// create image layer
	var img = new Konva.Image({
		x: 0,
		y: 0,
		opacity: alpha
	});
	// create group
	var imgGroup = new Konva.Group({
        x: 0,
        y: 0,
        draggable: true,
    });
    layer.add(imgGroup);
    imgGroup.add(img);
	resizeCanvas();
	//
	//imgGroup.on("dblclick dbltap", function() {
		//this.destroy();
        //layer.draw();
    //});
	//
	// add the shape to the layer
	var imgObj = new Image();
    imgObj.onload = function() {
        img.image(imgObj);
        layer.draw();
    };
	imgObj.src = path;
	// add Anchor
	addAnchor(imgGroup, 0, 0, 'topLeft');
    addAnchor(imgGroup, imgObj.width, 0, 'topRight');
    addAnchor(imgGroup, imgObj.height, imgObj.width, 'bottomRight');
    addAnchor(imgGroup, 0, imgObj.width, 'bottomLeft');
	imgGroup.setZIndex(zindex - 1);
	layer.draw();
	// add layer
	document.getElementById(imgDestroyBtn).innerHTML = '<button id="' + imgDestroyId + '" class="w3-bar-item w3-button"><i class="fa fa-close"></i></button>';
	document.getElementById(thumb).innerHTML = '<img src="' + imgObj.src + '">';
	document.getElementById(currBtnId).disabled = true;
	document.getElementById(imgDestroyId).addEventListener('click', function() {
		imgGroup.destroy();
		layer.draw();
		document.getElementById(currBtnId).disabled = false;
		document.getElementById(imgDestroyBtn).innerHTML = "";
		document.getElementById(thumb).innerHTML = '<i class="fa fa-image"></i>';
    }, false);
}

function openTxtEditor(n){
	//document.getElementById("content").value = "";
	//document.getElementById("widthContent").value = 300;
	//document.getElementById("heightContent").value = 100;
	//document.getElementById("font").selectedIndex = 0;
	//document.getElementById("size").value = 20;
	//document.getElementById("style").selectedIndex = 0;
	//document.getElementById("align").selectedIndex = 0;
	panelOpen('txtEditor');
	var b = document.getElementById("textHolder" + n).innerHTML;
	document.getElementById("content").value = b;
	document.getElementById("execTxt").innerHTML = '<button class="w3-btn w3-teal" style="width:100%" onClick="addText(\'txt' + n + '\',\'btnTxt' + n + '\',\'destroyTxt' + n + '\',\'txtDestroyId' + n + '\',\'color' + n + '\',\'textHolder' + n + '\');panelClose(\'txtEditor\');">Thực hiện</button>';
}

function addText(id,currBtnId,destroyBtnId,txtDestroyId,color,textHolder){
	var txt = document.getElementById("content").value;
	var w = document.getElementById("widthContent").value;
	//var h = document.getElementById("heightContent").value;
	var font = document.getElementById("font").value;
	var size = document.getElementById("size").value;
	var style = document.getElementById("style").value;
	var alig = document.getElementById("align").value;
	var color = document.getElementById("color").value;

	var newText = new Konva.Text({
		x: 0,
		y: 0,
		width: w,
		//height: 'auto',
		text: txt,
		fontSize: size,
		fontStyle: style,
		fontFamily: font,
		align: alig,
		lineHeight: 1.1,
		fill: color,
		draggable: true,
		id: id,
	});
	layer.add(newText);
	resizeCanvas();
	layer.draw();
	
	document.getElementById(destroyBtnId).innerHTML = '<button id="' + txtDestroyId + '" class="w3-bar-item w3-button"><i class="fa fa-close"></i></button>';
	document.getElementById(currBtnId).disabled = true;
	document.getElementById(currBtnId).innerHTML = '<i class="fa fa-file-text"></i>';
	document.getElementById(txtDestroyId).addEventListener('click', function() {
		var a = layer.find('#' + id)[0];
		a.destroy(); 
		layer.draw();
		document.getElementById(currBtnId).disabled = false;
		document.getElementById(currBtnId).innerHTML = '<i class="fa fa-file-o"></i>';
		document.getElementById(destroyBtnId).innerHTML = "";
    }, false);
	document.getElementById(textHolder).innerHTML = txt ;
}

function hideAnchor(){
	var a = layer.find('.topLeft');
	var b = layer.find('.topRight');
	var c = layer.find('.bottomRight');
	var d = layer.find('.bottomLeft');
	a.hide();
	b.hide();
	c.hide();
	d.hide();
	layer.draw();
}

function showAnchor(){
	var a = layer.find('.topLeft');
	var b = layer.find('.topRight');
	var c = layer.find('.bottomRight');
	var d = layer.find('.bottomLeft');
	a.show();
	b.show();
	c.show();
	d.show();
	layer.draw();
}

///// Add anchor function /////
function update(activeAnchor) {
	var group = activeAnchor.getParent();
	var topLeft = group.get('.topLeft')[0];
	var topRight = group.get('.topRight')[0];
	var bottomRight = group.get('.bottomRight')[0];
	var bottomLeft = group.get('.bottomLeft')[0];
	var image = group.get('Image')[0];
	var anchorX = activeAnchor.getX();
	var anchorY = activeAnchor.getY();
	// update anchor positions
	switch (activeAnchor.getName()) {
		case 'topLeft':
			topRight.setY(anchorY);
			bottomLeft.setX(anchorX);
			break;
		case 'topRight':
			topLeft.setY(anchorY);
			bottomRight.setX(anchorX);
			break;
		case 'bottomRight':
			bottomLeft.setY(anchorY);
			topRight.setX(anchorX);
			break;
		case 'bottomLeft':
			bottomRight.setY(anchorY);
			topLeft.setX(anchorX);
			break;
	}
	image.position(topLeft.position());
	var width = topRight.getX() - topLeft.getX();
	var height = bottomLeft.getY() - topLeft.getY();
	if(width && height) {
		image.width(width);
		image.height(height);
	}
}
	
function addAnchor(group, x, y, name) {
	var stage = group.getStage();
	var layer = group.getLayer();
	var anchor = new Konva.Circle({
		x: x,
		y: y,
		stroke: '#666',
		fill: '#ddd',
		strokeWidth: 2,
		radius: 8,
		name: name,
		draggable: true,
		dragOnTop: false
	});
	anchor.on('dragmove', function() {
		update(this);
		layer.draw();
	});
	anchor.on('mousedown touchstart', function() {
		group.setDraggable(false);
		this.moveToTop();
	});
	anchor.on('dragend', function() {
		group.setDraggable(true);
		layer.draw();
	});
	// add hover styling
	anchor.on('mouseover', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'pointer';
		this.setStrokeWidth(4);
		layer.draw();
	});
	anchor.on('mouseout', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'default';
		this.setStrokeWidth(2);
		layer.draw();
	});
	group.add(anchor);
}
///// end of Add anchor function /////