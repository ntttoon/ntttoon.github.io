var sprite = document.getElementById("sprite_holder").textContent;

var html1 = '<!doctype html><html><head><meta charset="utf-8"><title>banner HTML5</title><script src="https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_2.1.2_min.js"></script><script src="https://code.jquery.com/jquery-1.12.0.min.js"></script><style>body{margin:0;padding:0;background-color:#FFF;}#banner{width:300px;height:250px;overflow:hidden;	position:relative;background-color:#FFF;}#banner .sprite{position:absolute;}.sprite {background-image: url('+ sprite +');background-repeat: no-repeat;display: block;}.sprite-bg{    width:300px;height:250px;background-position: -5px -5px;}</style></head><body><div id="banner">';

var html2 ='<i class="sprite sprite-bg"></i>';

var html3 ='</div></body>';

var html = html1 + html2 + sprite + html3;
var result = html;

//var result2 = tidy_html5(alt_html, options);
