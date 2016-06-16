// by ntttoon 2016 04/07/2016
function effect(delay_start,duration,div,effect_in,effect_out,delay_mid,effect_mid,loop_mid){
	setTimeout(function(){
		$(div).removeAttr('class');
		$(div).css('visibility','visible');
		$(div).addClass('animated ' + effect_in);
		setTimeout(function(){
			$(div).removeAttr('class');
			$(div).addClass('animated ' + effect_mid);
			$(div).css('animation-iteration-count',loop_mid);
		}, delay_mid);
		setTimeout(function(){
			$(div).removeAttr('class');
			$(div).css('animation-iteration-count','1');
			$(div).addClass('animated ' + effect_out);
			//$(div).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(e){
				//$(this).removeAttr('class');
				//$(this).removeAttr('style');
				//$(this).off(e);
			 //});
		}, duration);
	}, delay_start);
}