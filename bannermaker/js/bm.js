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
}

// Function Rectange
function addImage(){
	var d = new Date();
	var n = d.getTime();
	// create image layer
	var img = new Konva.Image({
		x: 0,
		y: 0,
	});
	layer.add(img);
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
	imgGroup.on("dblclick dbltap", function() {
		this.destroy();
        layer.draw();
     });
	//
	// add the shape to the layer
	var imageObj = new Image();
    imageObj.onload = function() {
        img.image(imageObj);
        layer.draw();
    };
    imageObj.src = 'http://cdn.ios.brave.a-lim.jp/unit/img/unit_ills_full_10017.png';
	// add Anchor
	addAnchor(imgGroup, 0, 0, 'topLeft');
    addAnchor(imgGroup, imageObj.width, 0, 'topRight');
    addAnchor(imgGroup, imageObj.height, imageObj.width, 'bottomRight');
    addAnchor(imgGroup, 0, imageObj.width, 'bottomLeft');
	// add layer
	document.getElementById("layers").innerHTML += '<a href="#" onclick="sizePanelOpen(' + "'" + n + "'" + ' );" class="w3-bar-item w3-button"><i class="fa fa-image"></i></a>';
	document.getElementById("imgPanelHolder").innerHTML += '<div id="' + n + '" class="w3-container w3-card-2" style="position:absolute;right:64px;width:300px;display:none;background:#FFF"><span onclick="this.parentElement.style.display=' + "'" + "none" + "'" + '"' + ' class="w3-button w3-red w3-large w3-display-topright">&times;</span> <p>'+ 'Layer ' + n + '</p> <p> <label>Link ảnh</label> <input id="imgLink" class="w3-input w3-border" type="text" id="w"></p> <p> <button class="w3-btn w3-teal" onClick="">Thay đổi</button> <button class="w3-btn w3-red" onClick="">Xóa ảnh</button></p> </div>'
	
	document.getElementById('tBtn').addEventListener('click', function() {
      // or var shape = stage.findOne('#myRect');
	  imgGroup.destroy();
	  layer.draw();
    }, false);
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