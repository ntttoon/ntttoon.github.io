// JavaScript Document
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
function nameColor(element) {
		switch(element)
		{
			case "Fire":
				return "#FF0000";
				break;
			case "Water":
				return "#0000FF";
				break;
			case "Thunder":
				return "#FFCC00";
				break;
			case "Earth":
				return "#00FF00";
				break;
			case "Dark":
				return "#660099";
				break;
			case "Light":
				return "#CCCCCC";
				break;
		}
}
function nameElement(element) {
		switch(element)
		{
			case "Fire":
				return "Element_Fire.png";
				break;
			case "Water":
				return "Element_Water.png";
				break;
			case "Thunder":
				return "Element_Thunder.png";
				break;
			case "Earth":
				return "Element_Earth.png";
				break;
			case "Dark":
				return "Element_Dark.png";
				break;
			case "Light":
				return "Element_Light.png";
				break;
		}
}