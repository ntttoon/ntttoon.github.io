// Created and hosted at github
// ntttoon 05_06_2020
// create new Konva object
var stage = new Konva.Stage({
	container: 'container',
	width: 900,
	height: 900
});
var layer = new Konva.Layer();
stage.add(layer);

// create image 1 layer
var img1 = new Konva.Image({
	x: 0,
	y: 0,
	draggable: false,
	name: 'img',
});
layer.add(img1);

// create image 2 layer
var img2 = new Konva.Image({
	x: 85,
	y: 374,
	draggable: true,
	name: 'img',
});
layer.add(img2);

// create image 3 layer
var img3 = new Konva.Image({
	x: 5,
	y: 400,
	draggable: false,
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
imageObj1.src = 'images/face1.png';
// imageObj2 load image 2
var imageObj2 = new Image();
imageObj2.onload = function() {
	img2.image(imageObj2);
	layer.draw();
};
imageObj2.src = 'images/heart.png';
// imageObj2 load image 3
var imageObj3 = new Image();
imageObj3.onload = function() {
	img3.image(imageObj3);
	layer.draw();
};
imageObj3.src = 'images/hand1.png';

/* globalCompositeOperation :
  normal | multiply | screen | overlay | 
  darken | lighten | color-dodge | color-burn | hard-light | 
  soft-light | difference | exclusion | hue | saturation | 
  color | luminosity
*/
var blend2s = document.getElementById('blend2_sel').value;

function execBlend(){
	var blend2s = document.getElementById('blend2_sel').value;
	img2.globalCompositeOperation(blend2s);
	layer.draw();
}

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
	//tr.attachTo(e.target);
	tr.attachTo(img2);
	layer.draw();
})

function dataURLtoBlob(dataurl) {
	var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
	while(n--){
			u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {type:mime});
}

var downloadCanvas = function(ratio){
	var link = document.createElement("a");
	var quality = document.getElementById("ratioImage").value;
	stage.find('Transformer').destroy();
	var imgData = stage.toDataURL({ pixelRatio: quality });
	var strDataURI = imgData.substr(22, imgData.length);
	var blob = dataURLtoBlob(imgData);
	var objurl = URL.createObjectURL(blob);
		
	var filename = prompt("Đặt tên cho file", "banner.png");
	if (filename != null) {
		link.download = filename;
		link.href = objurl;
	}
	document.body.appendChild(link);
	link.click();
	link.remove();
} 

document.getElementById('save').addEventListener('click',downloadCanvas)
	

// Function upload to Layers
var fileUpload = document.getElementById('fileUpload');

function readImage() {
	var i = 2;
	var a = eval('imageObj' + i);
	var b = eval('img' + i);

    if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
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

function changeImage(path,i,x,y){
	var a = eval('imageObj' + i);
	var b = eval('img' + i);
	a.onload = function() {
		b.image(a);
		b.x(x);
		b.y(y);
		layer.draw();
	};
	a.src = path;
}

function hideImage(i){
	var a = eval('img' + i);
	a.visible(false);
	layer.draw();
}

function showImage(i){
	var a = eval('img' + i);
	a.visible(true);
	layer.draw();
}