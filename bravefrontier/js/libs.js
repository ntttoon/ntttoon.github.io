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
function buffsOut(string,type) {
	if(string.match(RegExp( /(ATK\+)/, 'gi'))){
		if(string.match(RegExp( /(DEF\+)/, 'gi'))){
			if(string.match(RegExp( /(REC\+)/, 'gi'))){
				if(string.match(RegExp( /(SELF)/, 'gi'))){
					if(type == 'es'){
						return "STATS+ (SELF)";
					}else{return string.trim().substr(0,4) + " STATS+ (SELF)";}
				}else{return string.trim().substr(0,4) + " STATS+";}
			}
		}if(string.match(RegExp( /(REC\+)/, 'gi'))){
			return string.trim().substr(0,4) + " ATK+/REC+";
		}
		if(string.match(RegExp( /(DEF\+)/, 'gi'))){
			if(string.match(RegExp( /(SELF)/, 'gi'))){
				return string.trim().substr(0,4) + " ATK+/DEF+ (SELF)";
			}else{return string.trim().substr(0,4) + " ATK+/DEF+";}
		}
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			if(type=='es'){
				return "ATK+ (SELF)";
			}else{return string.trim().substr(0,4) + " ATK+ (SELF)";}
		}
		if(string.match(RegExp( /(to)/, 'gi'))){
			return "ATK+ to Ele";
		}
		if(type=='es'){
			return "ATK+";
		}
		if(string.match(RegExp( /(Consecutive)/, 'gi'))){
			return "Consecutive SBB";
		}
		else{return string.trim().substr(0,4) + " ATK+";}
	}
	if(string.match(RegExp(/(DEF\+)/, 'gi'))){
		if(string.match(RegExp(/(REC\+)/, 'gi'))){
			return string.trim().substr(0,4) + " DEF+/REC+";
		}
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			if(type=='es'){
				return "DEF+ (SELF)";
			}
			else{return string.trim().substr(0,4) + " DEF+ (SELF)";}
		}
		else{return string.trim().substr(0,4) + " DEF+";}
	}
	if(string.match(RegExp(/(REC\+)/, 'gi'))){
		return string.trim().substr(0,4) + " REC+";
	}
	//
	if(string.match(RegExp( /(Enemy ATK)/, 'gi'))){
		if(string.match(RegExp( /(to ATK)/, 'gi'))){
			return "ATK DOWN to ATK";
		}
		else{
			return "ATK DOWN";
		}
	}
	if(string.match(RegExp( /(Enemy DEF)/, 'gi'))){
		if(string.match(RegExp( /(to ATK)/, 'gi'))){
			return "DEF DOWN to ATK";
		}
		else{
			return "DEF DOWN";
		}
	}
	if(string.match(RegExp( /(Fill when ATKed)/, 'gi'))){
		return "BB ATKed";
	}
	//Miti
	if(string.match(RegExp( /(Reduce DMG \(10\%\))/, 'gi'))){
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			return "Miti 10% Ele (SELF)";
		}else{return "Miti 10% Ele";}
	}
	if(string.match(RegExp( /(Reduce DMG \(15\%\))/, 'gi'))){
		return "Miti 15% Ele";
	}
	if(string.match(RegExp( /(Reduce DMG \(50\%\))/, 'gi'))){
		return "Miti 50%";
	}
	if(string.match(RegExp( /(Reduce DMG \(75\%\))/, 'gi'))){
		return "Miti 75%";
	}
	if(string.match(RegExp( /(Reduce DMG \(100\%\))/, 'gi'))){
		return "Miti 100%";
	}
	//Heal Hot
	if(string.match(RegExp( /(Gradual Heal)/, 'gi'))){
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			return "HoT (SELF)";
		}else{return "HoT";}
	}
	if(string.match(RegExp( /(Heal \(ALL\))/, 'gi'))){
		return "Heal";
	}
	if(string.match(RegExp( /(Chance Heal)/, 'gi'))){
		return "Heal when ATKed";
	}
	//
	if(string.match(RegExp( /(BB ATK\%\+)/, 'gi'))){
		if(type=='es'){
			return "BBATK%+";
		}else{return string.trim().substr(0,4) + " BBATK%+";}
	}
	if(string.match(RegExp( /(Cure Ails)/, 'gi'))){
		return "Cure";
	}
	if(string.match(RegExp( /(Null Ails)/, 'gi'))){
		return "Null";
	}
	if(string.match(RegExp( /(Nulls Ails)/, 'gi'))){
		return "Null (SELF)";
	}
	if(string.match(RegExp( /(Null STATS Debuff)/, 'gi'))){
		return "Null STATS";
	}
	if(string.match(RegExp( /(OverDrive)/, 'gi'))){
		if(string.match(RegExp( /(turn)/, 'gi'))){
			return string.trim().substr(0,3) + " OD rate";
		}
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			return string.trim().substr(0,3) + " OD rate (SELF)";
		}
		else{
			return string.trim().substr(0,3) + " OD";
		}
	}
	if(string.match(RegExp( /(Max HP\+)/, 'gi'))){
		return string.trim().substr(0,3) + " MAX HP";
	}
	//BB
	if(string.match(RegExp( /(BC Fill\+ \(ALL\))/, 'gi'))){
		return string.trim().substr(0,3) + " BB rate";
	}
	if(string.match(RegExp( /(BC Fill)/, 'gi'))){
		if(string.match(RegExp( /(Fill on Spark)/, 'gi'))){
			return "BB spark";
		}
		if(string.match(RegExp( /(1Turn)/, 'gi'))){
			return "BB fill";
		}
		if(string.match(RegExp( /(3Turns)/, 'gi'))){
			if(string.match(RegExp( /(SELF)/, 'gi'))){
				return "BB regen (SELF)";
			}else{return "BB regen";}
		}
		if(string.match(RegExp( /(BC Fill on ATK)/, 'gi'))){
			return "BB fill on atk";
		}
	}
	if(string.match(RegExp( /(100\% BB Fill)/, 'gi'))){
		return "USBB";
	}
	//
	if(string.match(RegExp( /(HP Barrier)/, 'gi'))){
		return "Barrier";
	}
	if(string.match(RegExp( /(Ignore DEF)/, 'gi'))){
		if(string.match(RegExp( /(Null)/, 'gi'))){
			return "Null Ignore (SELF)";
		}else{return "Ignore";}
	}
	if(string.match(RegExp( /(Normal HitCount)/, 'gi'))){
		return "Hit";
	}
	if(string.match(RegExp( /(DMG Each Turn)/, 'gi'))){
		return "DoT";
	}
	if(string.match(RegExp( /(Spark DMG\+)/, 'gi'))){
		if(string.match(RegExp( /(Enemy receives)/, 'gi'))){
			return "Spark DMG Debuff";
		}
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			return "Spark DMG (SELF)";
		}
		else{
			return "Spark DMG";
		}
	}
	if(string.match(RegExp( /(Fill when ATKed)/, 'gi'))){
		return "BB atked";
	}
	if(string.match(RegExp( /(CRIT\+)/, 'gi'))){
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			return "CRIT+ (SELF)";
		}
		else{return string.trim().substr(0,3) + " CRIT+";}
	}
	if(string.match(RegExp( /(CRIT DMG\+)/, 'gi'))){
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			if(type=='es'){
				return "CRIT DMG+ (SELF)";
			}else{return string.trim().substr(0,4) + " CRIT DMG+ (SELF)";}
		}else{return string.trim().substr(0,4) + " CRIT DMG+";}
	}
	//convert to ATK
	if(string.match(RegExp( /(HP to ATK)/, 'gi'))){
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			return string.trim().substr(8,3) + " HP to ATK (SELF)";
		}
		if(type=='ubb'){
			return string.trim().substr(8,4) + " HP to ATK";
		}
		else{return string.trim().substr(8,3) + " HP to ATK";}
	}
	if(string.match(RegExp( /(DEF to ATK)/, 'gi'))){
		if(type=='ubb'){
			return string.trim().substr(8,4) + " DEF to ATK";
		}else{return string.trim().substr(8,3) + " DEF to ATK";}
	}
	if(string.match(RegExp( /(REC to ATK)/, 'gi'))){
		if(type=='ubb'){
			return string.trim().substr(8,4) + " REC to ATK";
		}else{return string.trim().substr(8,3) + " REC to ATK";}
	}
	//convert to DEF
	if(string.match(RegExp( /(HP to DEF)/, 'gi'))){
		if(type=='es'){
			return string.trim().substr(12,4) + " HP to DEF";
		}
		if(type=='ubb'){
			return string.trim().substr(8,4) + " HP to DEF";
		}
		else{return string.trim().substr(8,3) + " HP to DEF";}
	}
	if(string.match(RegExp( /(ATK to DEF)/, 'gi')) || string.match(RegExp( /(attack to DEF)/, 'gi'))){
		if(type == 'es'){
			return string.trim().substr(12,3) + " ATK to DEF";
		}else{return string.trim().substr(8,3) + " ATK to DEF";}
	}
	if(string.match(RegExp( /(REC to DEF)/, 'gi'))){
		if(type=='ubb'){
			return string.trim().substr(8,4) + " REC to DEF";
		}else{return string.trim().substr(8,3) + " REC to DEF";}
	}
	//convert to REC
	if(string.match(RegExp( /(HP to REC)/, 'gi'))){
		if(type=='ubb'){
			return string.trim().substr(8,4) + " HP to REC";
		}else{return string.trim().substr(8,3) + " HP to REC";}
	}
	//
	if(string.match(RegExp( /(BC\+)/, 'gi'))){
		if(string.match(RegExp( /(HC\+)/, 'gi'))){
			if(type=='es'){
				return "BC+/HC+";
			}else{return string.trim().substr(0,3) + " BC+/HC+";}
		}
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			return "BC+ (SELF)";
		}else{return string.trim().substr(0,3) + " BC+";}
	}
	if(string.match(RegExp( /(HC\+)/, 'gi'))){
		return string.trim().substr(0,3) + " HC+";
	}
	//
	if(string.match(RegExp( /(Element Weakness DMG\+)/, 'gi'))){
		return "EW DMG+";
	}
	if(string.match(RegExp( /(Chance Revive)/, 'gi'))){
		return "Revive";
	}
	if(string.match(RegExp( /(Drain)/, 'gi'))){
		return "Drain HP";
	}
	if(string.match(RegExp( /(Angel Idol)/, 'gi'))){
		return "Angel Idol";
	}
	if(string.match(RegExp( /(Nulls CRIT)/, 'gi')) || string.match(RegExp( /(Null CRIT)/, 'gi'))){
		return "Null CRIT";
	}
	if(string.match(RegExp( /(DMG\+ to Ailed)/, 'gi'))){
		if(string.match(RegExp( /(SELF)/, 'gi'))){
			return "DMG+ to Ailed (SELF)";
		}
		else{return "DMG+ to Ailed";}
	}
	if(string.match(RegExp( /(CRIT on SPARK)/, 'gi'))){
		return "Crit Spark";
	}
	if(string.match(RegExp( /(Chance SPARKcrit)/, 'gi'))){
		return "Crit Spark";
	}
	if(string.match(RegExp( /(Heal on Spark)/, 'gi'))){
		return "Heal Spark";
	}
	if(string.match(RegExp( /(Shield)/, 'gi'))){
		return "Tridon Shield";
	}
	if(string.match(RegExp( /( AOE on Normal ATK)/, 'gi'))){
		return "AOE";
	}
	//Ails
	if(string.match(RegExp( /(Add )/, 'gi'))){
		if(string.match(RegExp( /(Injury)/, 'gi')) || string.match(RegExp( /(Weak)/, 'gi')) || string.match(RegExp( /(Sick)/, 'gi')) || string.match(RegExp( /(Poison)/, 'gi')) || string.match(RegExp( /(Para)/, 'gi')) || string.match(RegExp( /(Curse)/, 'gi'))){
			return "Add Ails to ATK";
		}
		if(string.match(RegExp( /(Fire)/, 'gi')) || string.match(RegExp( /(Water)/, 'gi')) || string.match(RegExp( /(Earth)/, 'gi')) || string.match(RegExp( /(Thunder)/, 'gi')) || string.match(RegExp( /(Light)/, 'gi')) || string.match(RegExp( /(Dark)/, 'gi'))){
			return "Add Eles to ATK";
		}
	}
	if(string.match(RegExp( /(Injury)/, 'gi')) || string.match(RegExp( /(Weak)/, 'gi')) || string.match(RegExp( /(Sick)/, 'gi')) || string.match(RegExp( /(Poison)/, 'gi')) || string.match(RegExp( /(Para)/, 'gi')) || string.match(RegExp( /(Curse)/, 'gi'))){
		if(string.match(RegExp( /(ATKed)/, 'gi'))){
			return "Inflict Ails on ATKed";
		}
		if(string.match(RegExp( /(Elemental)/, 'gi')) || string.match(RegExp( /(Element)/, 'gi'))){
			return "Null EW";
		}
		else{return "Ails ATK";}
	}
	//	
	else{return ""};
}