// create new Konva object
var stage = new Konva.Stage({
	container: 'container',
	width: 660,
	height: 660
});
var layer = new Konva.Layer();
stage.add(layer);

// create image 1 layer
var img1 = new Konva.Image({
	x: 0,
	y: 0,
	draggable: true,
	name: 'img',
});
layer.add(img1);

// create image 2 layer
var img2 = new Konva.Image({
	x: 0,
	y: 0,
	draggable: true,
	name: 'img',
});
layer.add(img2);

// create image 3 layer
var img3 = new Konva.Image({
	x: 0,
	y: 0,
	draggable: true,
	name: 'img',
});
layer.add(img3);

//// create obj and load image to obj
// imageObj1 load image 1
var imageObj1 = new Image();
imageObj1.onload = function() {
	img1.image(imageObj1);
	layer.draw();
};
imageObj1.src = 'images/blank.png';
// imageObj2 load image 2
var imageObj2 = new Image();
imageObj2.onload = function() {
	img2.image(imageObj2);
	layer.draw();
};
imageObj2.src = 'images/blank.png';
// imageObj2 load image 3
var imageObj3 = new Image();
imageObj3.onload = function() {
	img3.image(imageObj3);
	layer.draw();
};
imageObj3.src = 'images/blank.png';

//Stage check transform images
stage.on('click tap', function (e) {
	// if click on empty area - remove all transformers
	if (e.target === stage) {
	  stage.find('Transformer').destroy();
	  layer.draw();
	  return;
	}
	// do nothing if clicked NOT on our rectangles
	if (!e.target.hasName('img')) {
	  return;
	}
	// remove old transformers
	// TODO: we can skip it if current rect is already selected
	stage.find('Transformer').destroy();

	// create new transformer
	var tr = new Konva.Transformer({
		centeredScaling: true,
		//keepRatio: true,
      	//enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right']
	});
	layer.add(tr);
	tr.attachTo(e.target);
	layer.draw();
})


// create text layer

var textNode = new Konva.Text({
	text: 'Some text here',
	x: 20,
	y: 20,
	fontSize: 20,
	fontFamily: 'Lora',
	draggable: true,
	lineHeight: 1.5,
	width: '600',
	fill: 'black'
});
layer.add(textNode);

textNode.on('dblclick', () => {
	var tw = document.getElementById('txt_width').value;
	var ts = document.getElementById('txt_size').value;
	var ta = document.getElementById('txt_align').value;
	var tf = document.getElementById('txt_fonts').value;
	var tl = document.getElementById('txt_lineheight').value;
	var tc = '#' + document.getElementById('txt_color').value;
	// create textarea over canvas with absolute position

	// first we need to find its positon
	var textPosition = textNode.getAbsolutePosition();
	var stageBox = stage.getContainer().getBoundingClientRect();

	var areaPosition = {
		x: textPosition.x + stageBox.left,
		y: textPosition.y + stageBox.top
	};


	// create textarea and style it
	var textarea = document.createElement('textarea');
	document.body.appendChild(textarea);

	textarea.value = textNode.text();
	textarea.style.position = 'absolute';
	textarea.style.top = areaPosition.y + 'px';
	textarea.style.left = areaPosition.x + 'px';
	textarea.style.width = '620px';

	textarea.focus();

	textarea.addEventListener('keydown', function (e) {
		// hide on tab
		if (e.keyCode === 9) {
			//var regex=/[*|\":<>[\]{}`\\()';@&$]/;
    	//textarea.value=textarea.value.replace(regex ,"");
			textNode.text(textarea.value);
			textNode.fontSize(ts);
			textNode.width(tw);
			textNode.align(ta);
			textNode.fontFamily(tf);
			textNode.lineHeight(tl);
			textNode.fill(tc);
			layer.draw();
			document.body.removeChild(textarea);
		}
	});
})


// function from https://stackoverflow.com/a/15832662/512042
function downloadURI(uri, name) {
	var link = document.createElement('a');
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
  }

  document.getElementById('save').addEventListener('click',
	function() {
		stage.find('Transformer').destroy();
	  	var dataURL = stage.toDataURL({ pixelRatio: 2 });
	  	downloadURI(dataURL, 'stage.png');
	},
	false
  );

// Function upload to Layers
var fileUpload = document.getElementById('fileUpload');

function readImage() {
	var i = document.getElementById('curr_layer').value;
	var a = eval('imageObj' + i);
	var b = eval('img' + i);

    if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
			//var imageObj1 = new Image();
			a.onload = function() {
				b.image(a);
				layer.draw();
			};
			a.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
    }
}

fileUpload.onchange = readImage;

// Function open modal and set current number layer
function openGallery(i){
	document.getElementById('imgGallery').style.display='block';
	document.getElementById('curr_layer').value = i;
}

// Show hide layers/images
function layerOn(i){
	//var i = document.getElementById('curr_layer').value;
	var a = eval('img' + i);
	var b = 'eyeBtn' + i;
	a.visible(true);
	document.getElementById(b).innerHTML = '<button id="eyeBtn' + i + '" class="w3-button w3-teal" onclick="layerOff(' + i + ')" >Ẩn</button>';
	layer.draw();
}

function layerOff(i){
	//var i = document.getElementById('curr_layer').value;
	var a = eval('img' + i);
	var b = 'eyeBtn' + i;
	a.visible(false);
	document.getElementById(b).innerHTML = '<button id="eyeBtn' + i + '" class="w3-button w3-black" onclick="layerOn(' + i + ')" >Hiện</button>';
	layer.draw();
}

// function add image from gallery
function addImage(path){
	var i = document.getElementById('curr_layer').value;
	var a = eval('imageObj' + i);
	var b = eval('img' + i);
	a.onload = function() {
		b.image(a);
		layer.draw();
	};
	a.src = path;
}

slider1.onchange = function() {
    img1.opacity(slider1.value);
		layer.draw();
};

slider2.onchange = function() {
	img2.opacity(slider2.value);
	layer.draw();
};

slider3.onchange = function() {
	img3.opacity(slider3.value);
	layer.draw();
};