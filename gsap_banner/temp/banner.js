var banner_width = document.getElementById("banner_width").value;
var banner_height = document.getElementById("banner_height").value;

var sprite = document.getElementById("sprite_holder").textContent;

var css_import = document.getElementById("sprite_css").value;

var sprite_itag = document.getElementById("sprite_itag").innerHTML;

var sprite_cssposs = document.getElementById("sprite_cssposs").innerHTML;

var gsap_int = document.getElementById("gsap_int_holder").innerHTML;

var gsapscript = document.getElementById("gsap_script").value;

var html1 = '<!doctype html><html><head><meta charset="utf-8"><title>banner HTML5</title><script src="https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_2.1.2_min.js"></script><script src="https://code.jquery.com/jquery-1.12.0.min.js"></script><style>body{margin:0;padding:0;background-color:#FFF;}#banner{width:' + banner_width + 'px;height:' + banner_height + 'px;overflow:hidden;	position:relative;background-color:#FFF;}#banner .sprite{position:absolute;}.sprite {background-image: url('+ sprite +');background-repeat: no-repeat;display: block;}' + css_import + sprite_cssposs + '</style>' + '</head><body><div id="banner">' + sprite_itag + '</div></body>';

var html2 = '<script type="text/javascript">' + gsap_int + 'var tl = new TimelineMax({onComplete: showReplay})' + gsapscript + 'function showReplay(){var loop = setTimeout(tlPlay, 5000);}function tlPlay(){tl.play(0);}' + '</script></html>';

replaceTemplate("dfp_custom_holder","/*chieu_rong*/",banner_width);
replaceTemplate("dfp_custom_holder","/*chieu_cao*/",banner_height);
replaceTemplate("dfp_custom_holder","/*css_import*/",css_import);
replaceTemplate("dfp_custom_holder","/*sprite_itag*/",sprite_itag);
replaceTemplate("dfp_custom_holder","/*gsap_int*/",gsap_int);
replaceTemplate("dfp_custom_holder","/*gsapscript*/",gsapscript);

var preview_html = html1 + html2;