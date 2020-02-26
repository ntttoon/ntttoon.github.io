var sprite = document.getElementById("sprite_holder").textContent;

var css_import = document.getElementById("sprite_css").value;

var sprite_itag = document.getElementById("sprite_itag").innerHTML;

var sprite_cssposs = document.getElementById("sprite_cssposs").innerHTML;

var gsap_int = document.getElementById("gsap_int_holder").innerHTML;

var gsapscript = document.getElementById("gsap_script").value;

var html1 = '<!doctype html><html><head><meta charset="utf-8"><title>banner HTML5</title><script src="https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_2.1.2_min.js"></script><script src="https://code.jquery.com/jquery-1.12.0.min.js"></script><style>body{margin:0;padding:0;background-color:#FFF;}#banner{width:336px;height:280px;overflow:hidden;	position:relative;background-color:#FFF;}#banner .sprite{position:absolute;}.sprite {background-image: url('+ sprite +');background-repeat: no-repeat;display: block;}' + css_import + '</style>' + '<style>' + sprite_cssposs + '</style>' + '</head><body><div id="banner">' + sprite_itag + '</div></body>';

var html2 = '<script type="text/javascript">' + gsap_int + 'var tl = new TimelineMax({onComplete: showReplay})' + gsapscript + 'function showReplay(){var loop = setTimeout(tlPlay, 5000);}function tlPlay(){tl.play(0)}' + '</script></html>';

var html = html1 + html2;
var result = html;

//var result2 = tidy_html5(alt_html, options);
