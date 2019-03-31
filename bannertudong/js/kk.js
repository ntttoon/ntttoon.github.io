// create new Konva object
var stage = new Konva.Stage({
	container: 'container',
	width: 660,
	height: 660
});
var layer = new Konva.Layer();
stage.add(layer);

/* globalCompositeOperation :
  normal | multiply | screen | overlay | 
  darken | lighten | color-dodge | color-burn | hard-light | 
  soft-light | difference | exclusion | hue | saturation | 
  color | luminosity
*/
var blend2s = document.getElementById('blend2_sel').value;
var blend3s = document.getElementById('blend3_sel').value;

function execBlend(){
	var blend2s = document.getElementById('blend2_sel').value;
	var blend3s = document.getElementById('blend3_sel').value;
	img2.globalCompositeOperation(blend2s);
	img3.globalCompositeOperation(blend3s);
	layer.draw();
}

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
	globalCompositeOperation: blend2s,
});
layer.add(img2);

// create image 3 layer
var img3 = new Konva.Image({
	x: 0,
	y: 0,
	draggable: true,
	name: 'img',
	globalCompositeOperation: blend3s,
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


// create text layer 1

var textNode = new Konva.Text({
	text: 'Lorem ipsum',
	x: 20,
	y: 20,
	fontSize: 30,
	fontFamily: 'Anton',
	draggable: true,
	lineHeight: 1.5,
	width: '620',
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
	textarea.style.width = tw + 'px';

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
			layer.batchDraw();
			document.body.removeChild(textarea);
		}
	});
})

// create text layer 2

var textNode2 = new Konva.Text({
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie ipsum. Curabitur imperdiet faucibus aliquam.',
	x: 20,
	y: 70,
	fontSize: 20,
	fontFamily: 'Lora',
	draggable: true,
	lineHeight: 1.5,
	width: '620',
	fill: 'white'
});
layer.add(textNode2);

textNode2.on('dblclick', () => {
	var tw = document.getElementById('txt2_width').value;
	var ts = document.getElementById('txt2_size').value;
	var ta = document.getElementById('txt2_align').value;
	var tf = document.getElementById('txt2_fonts').value;
	var tl = document.getElementById('txt2_lineheight').value;
	var tc = '#' + document.getElementById('txt2_color').value;
	// create textarea over canvas with absolute position

	// first we need to find its positon
	var textPosition = textNode2.getAbsolutePosition();
	var stageBox = stage.getContainer().getBoundingClientRect();

	var areaPosition = {
		x: textPosition.x + stageBox.left,
		y: textPosition.y + stageBox.top
	};


	// create textarea and style it
	var textarea2 = document.createElement('textarea');
	document.body.appendChild(textarea2);

	textarea2.value = textNode2.text();
	textarea2.style.position = 'absolute';
	textarea2.style.top = areaPosition.y + 'px';
	textarea2.style.left = areaPosition.x + 'px';
	textarea2.style.width = tw + 'px';

	textarea2.focus();

	textarea2.addEventListener('keydown', function (e) {
		// hide on tab
		if (e.keyCode === 9) {
			//var regex=/[*|\":<>[\]{}`\\()';@&$]/;
    	//textarea.value=textarea.value.replace(regex ,"");
			textNode2.text(textarea2.value);
			textNode2.fontSize(ts);
			textNode2.width(tw);
			textNode2.align(ta);
			textNode2.fontFamily(tf);
			textNode2.lineHeight(tl);
			textNode2.fill(tc);
			layer.batchDraw();
			document.body.removeChild(textarea2);
		}
	});
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
	offGallery()
}

fileUpload.onchange = readImage;

// Function open modal and set current number layer
function openGallery(i){
	document.getElementById('imgGallery').style.display='block';
	document.getElementById('curr_layer').value = i;
	document.getElementById('tab_upload').innerHTML = '<button class="w3-bar-item w3-button tablink" onclick="openTab(event,&#39;uplo&#39;)">Upload' + ' ảnh cho Layer ' + i + '</button>';
}

// Show hide layers/images
function layerOn(i){
	var a = eval('img' + i);
	var b = 'eyeBtn' + i;
	a.visible(true);
	document.getElementById(b).innerHTML = '<button id="eyeBtn' + i + '" class="w3-button w3-teal" onclick="layerOff(' + i + ')" ><i class="material-icons" style="font-size:14px;">visibility</i></button>';
	layer.draw();
}

function layerOff(i){
	var a = eval('img' + i);
	var b = 'eyeBtn' + i;
	a.visible(false);
	document.getElementById(b).innerHTML = '<button id="eyeBtn' + i + '" class="w3-button w3-black" onclick="layerOn(' + i + ')" ><i class="material-icons" style="font-size:14px;">visibility_off</i></button>';
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

// function change style layer 2
function changeStyle(path){
	var i = 2;
	var a = eval('imageObj' + i);
	var b = eval('img' + i);
	a.onload = function() {
		b.image(a);
		layer.draw();
	};
	a.src = path;
}

// function exec template
function execTemplate(image1_path,image1_x,image1_y,image1_scalex,image1_scaley,image1_alpha,image2_path,image2_x,image2_y,image2_scalex,image2_scaley,image2_alpha,image3_path,image3_x,image3_y,image3_scalex,image3_scaley,image3_alpha,txt_x,txt_y,txt_size,txt_lineheight,txt_width,txt_fill,txt_align,txt_font,txt2_x,txt2_y,txt2_size,txt2_lineheight,txt2_width,txt2_fill,txt2_align,txt2_font)
{
	// add image1
	if(image1_path!==""){
		imageObj1.onload = function() {
			img1.image(imageObj1);
			img1.x(image1_x);
			img1.y(image1_y);
			img1.scaleX(image1_scalex);
			img1.scaleY(image1_scaley);
			img1.opacity(image1_alpha);
			layer.draw();
		};
		imageObj1.src = image1_path;
	}
	// add image2
	if(image2_path!==""){
		imageObj2.onload = function() {
			img2.image(imageObj2);
			img2.x(image2_x);
			img2.y(image2_y);
			img2.scaleX(image2_scalex);
			img2.scaleY(image2_scaley);
			img2.opacity(image2_alpha);
			layer.draw();
		};
		imageObj2.src = image2_path;
	}
	// add image3
	if(image3_path!==""){
		imageObj3.onload = function() {
			img3.image(imageObj3);
			img3.x(image3_x);
			img3.y(image3_y);
			img3.scaleX(image3_scalex);
			img3.scaleY(image3_scaley);
			img3.opacity(image3_alpha);
			layer.draw();
		};
		imageObj3.src = image3_path;
	}
	// add text
	//textNode.text(txt_content);
	textNode.x(txt_x);
	textNode.y(txt_y);
	textNode.fontSize(txt_size);
	textNode.fontFamily(txt_font);
	textNode.width(txt_width);
	textNode.align(txt_align);
	textNode.lineHeight(txt_lineheight);
	textNode.fill('#'+txt_fill);
	layer.batchDraw();
	// set value
	document.getElementById("txt_width").value = txt_width;
	document.getElementById("txt_size").value = txt_size;
	document.getElementById("txt_color").value = txt_fill;
	document.getElementById("txt_color").style.background = '#' + txt_fill;
	document.getElementById("txt_fonts").value = txt_font;
	// add text 2
	textNode2.x(txt2_x);
	textNode2.y(txt2_y);
	textNode2.fontSize(txt2_size);
	textNode2.fontFamily(txt2_font);
	textNode2.width(txt2_width);
	textNode2.align(txt2_align);
	textNode2.lineHeight(txt2_lineheight);
	textNode2.fill('#'+txt2_fill);
	layer.batchDraw();
	// set value
	document.getElementById("txt2_width").value = txt2_width;
	document.getElementById("txt2_size").value = txt2_size;
	document.getElementById("txt2_color").value = txt2_fill;
	document.getElementById("txt2_color").style.background = '#' + txt2_fill;
	document.getElementById("txt2_fonts").value = txt2_font;
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

function resizeImage(i){
	var a = eval('img' + i);
	a.scaleX(0.5);
	a.scaleY(0.5);
	a.x(0);
	a.y(0);
	layer.draw();
}

function offGallery(){
	document.getElementById('imgGallery').style.display='none';
}

function hideCat(){
	for(i = 1; i < 9; i++){
		var a = eval('cat' + i + 'Style');
		a.classList.add("w3-hide");
	}
}

function showCat(i){
	if(i==null){
		hideCat();
	}else{
		hideCat();
		var a = eval('cat' + i + 'Style');
		a.classList.remove("w3-hide");
	}
}

function checkImageLayer(){
	var a = document.getElementById('openBtn1');
	var b = document.getElementById('openBtn2');
	var c = document.getElementById('openBtn3');
	//alert(n);
	var src1_str = imageObj1.src;
	var res1 = src1_str.substring(src1_str.length - 9, src1_str.length);
	var src2_str = imageObj2.src;
	var res2 = src2_str.substring(src2_str.length - 9, src2_str.length);
	var src3_str = imageObj3.src;
	var res3 = src3_str.substring(src3_str.length - 9, src3_str.length);
	document.getElementById('thumb01').src = imageObj1.src;
	document.getElementById('thumb02').src = imageObj2.src;
	document.getElementById('thumb03').src = imageObj3.src;
	if(res1==="blank.png"){
		a.classList.remove("w3-red");
		a.classList.add("w3-teal");
	}else{
		a.classList.remove("w3-teal");
		a.classList.add("w3-red");
	}
	if(res2==="blank.png"){
		b.classList.remove("w3-red");
		b.classList.add("w3-teal");
	}else{
		b.classList.remove("w3-teal");
		b.classList.add("w3-red");
	}
	if(res3==="blank.png"){
		c.classList.remove("w3-red");
		c.classList.add("w3-teal");
	}else{
		c.classList.remove("w3-teal");
		c.classList.add("w3-red");
	}
}

var myCIL = setInterval(checkImageLayer, 1000);