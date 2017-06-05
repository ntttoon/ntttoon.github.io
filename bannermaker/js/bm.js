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
function addImage(path,img,imgObj,imgDestroyBtn,imgDestroyId,zindex,currBtnId,thumb){
	//var d = new Date();
	//var n = d.getTime();
	/*var options = document.getElementsByName("alpha");
	if (options) {
		for (var i = 0; i < options.length; i++) {
			if (options[i].checked){
				 var alpha = options[i].value;
			}
		}
	}*/
	
	// create image layer
	var img = new Konva.Image({
		x: 0,
		y: 0,
		draggable: true,
	});
    layer.add(img);
	resizeCanvas();
	//
	//img.on("dblclick dbltap", function() {
		//this.destroy();
        //layer.draw();
    //});
	//
	// add the shape to the layer
	var imgObj = new Image();
    imgObj.onload = function() {
        img.image(imgObj);
		img.setZIndex(zindex - 1);
        layer.draw();
    };
	imgObj.src = path;
	//
	var slider = document.getElementById('slider1_opacity'); 
      slider.onchange = function() {
        img.opacity(slider.value);
        layer.batchDraw();    
      };
	
	var slider2 = document.getElementById('slider1_scale'); 
      slider2.onchange = function() {
        img.scaleX(slider2.value);
		img.scaleY(slider2.value);
        layer.batchDraw();    
      };
	// add layer
	document.getElementById(imgDestroyBtn).innerHTML = '<button id="' + imgDestroyId + '" class="w3-bar-item w3-button"><i class="fa fa-close"></i></button>';
	document.getElementById(thumb).innerHTML = '<img src="' + imgObj.src + '">';
	document.getElementById(currBtnId).disabled = true;
	document.getElementById(imgDestroyId).addEventListener('click', function() {
		img.destroy();
		layer.draw();
		document.getElementById(currBtnId).disabled = false;
		document.getElementById(imgDestroyBtn).innerHTML = "";
		document.getElementById(thumb).innerHTML = '<i class="fa fa-image"></i>';
    }, false);
	
	var showLayer = 1;
	document.getElementById('layerToggle1').addEventListener('click', function() {
		if(showLayer == 1){
			img.hide();
			layer.draw();
			showLayer = 2;
		}else{
			img.show();
			layer.draw();
			showLayer = 1;
		}
		
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