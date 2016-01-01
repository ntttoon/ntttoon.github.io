// JavaScript Document
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
function nameColor(element) {
		switch(element)
		{
			case "Fire":
				return "#e74c3c";
				break;
			case "Water":
				return "#4aa3df";
				break;
			case "Thunder":
				return "#f39c12";
				break;
			case "Earth":
				return "#2ecc71";
				break;
			case "Dark":
				return "#9b59b6";
				break;
			case "Light":
				return "#95a5a6";
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