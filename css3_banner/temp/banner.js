var banner_width = document.getElementById("banner_width").value;
var banner_height = document.getElementById("banner_height").value;

var sprite = document.getElementById("sprite_holder").textContent;

var css_import = document.getElementById("sprite_css").value;

var sprite_itag = document.getElementById("sprite_itag").innerHTML;

var sprite_cssposs = document.getElementById("sprite_cssposs").innerHTML;

var css3_animation = document.getElementById("css3_animation").value;

var html1 = '<!doctype html><html><head><meta charset="utf-8"><title>banner HTML5</title><style>body{margin:0;padding:0;background-color:#FFF;}#banner{width:' + banner_width + 'px;height:' + banner_height + 'px;overflow:hidden;	position:relative;background-color:#FFF;}#banner .sprite{position:absolute;}.sprite {background-image: url('+ sprite +');background-repeat: no-repeat;display: block;}' + css_import + sprite_cssposs + css3_animation + '</style>' + '</head><body><div id="banner">' + sprite_itag + '</div>';

var html2 = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script><script type="text/javascript">$(document).ready(function() {$("#banner").addClass("animate");});</script></body></html>';

var preview_html = html1 + html2;