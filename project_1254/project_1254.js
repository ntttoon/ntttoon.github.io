(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"project_1254_atlas_P_", frames: [[0,0,360,320],[362,64,32,61],[362,0,32,62],[396,84,40,40],[362,169,40,40],[362,211,32,28],[362,241,32,27],[428,144,8,6],[395,318,27,14],[419,236,20,16],[395,296,21,20],[427,178,16,16],[428,126,16,16],[362,270,26,30],[362,302,31,24],[396,42,40,40],[396,0,40,40],[362,127,40,40],[404,178,21,24],[396,236,21,24],[390,270,27,24],[396,211,23,23],[404,126,22,24],[404,152,22,24]]}
];


// symbols:



(lib.bg01 = function() {
	this.initialize(img.bg01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,320);


(lib.bg_commandboard = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.clown1 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.clown2 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.icon_attack = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.icon_defend = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.megaman5_ride = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.megaman5_water_rider = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.megaman_bullet = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.megaman_cshoot1 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.megaman_cshoot2 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.megaman_cshoot3 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.megaman_hp1 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.megaman_hp2 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.megaman_jump = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.megaman_shoot = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.megaman_skill1 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.megaman_skill2 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.megaman_skill3 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.megaman_stand1 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.megaman_stand2 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.megaman_throw = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.protoman_shoot = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.protoman_stand1 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.protoman_stand2 = function() {
	this.spriteSheet = ss["project_1254_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.limit_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape.setTransform(0.5,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgMAUIAAgnIAZAAIAAAng");
	this.shape_1.setTransform(1.3,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgUAUIAAgnIApAAIAAAng");
	this.shape_2.setTransform(2.1,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgcAUIAAgnIA5AAIAAAng");
	this.shape_3.setTransform(2.9,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AglAUIAAgnIBKAAIAAAng");
	this.shape_4.setTransform(3.8,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgtAUIAAgnIBaAAIAAAng");
	this.shape_5.setTransform(4.6,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("Ag1AUIAAgnIBrAAIAAAng");
	this.shape_6.setTransform(5.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("Ag9AUIAAgnIB7AAIAAAng");
	this.shape_7.setTransform(6.2,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AhFAUIAAgnICLAAIAAAng");
	this.shape_8.setTransform(7,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AhNAUIAAgnICbAAIAAAng");
	this.shape_9.setTransform(7.8,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AhVAUIAAgnICrAAIAAAng");
	this.shape_10.setTransform(8.6,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AhdAUIAAgnIC7AAIAAAng");
	this.shape_11.setTransform(9.4,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AhlAUIAAgnIDLAAIAAAng");
	this.shape_12.setTransform(10.2,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AhuAUIAAgnIDdAAIAAAng");
	this.shape_13.setTransform(11.1,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("Ah2AUIAAgnIDsAAIAAAng");
	this.shape_14.setTransform(11.9,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("Ah+AUIAAgnID9AAIAAAng");
	this.shape_15.setTransform(12.7,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AiGAUIAAgnIENAAIAAAng");
	this.shape_16.setTransform(13.5,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AiOAUIAAgnIEdAAIAAAng");
	this.shape_17.setTransform(14.3,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AiWAUIAAgnIEtAAIAAAng");
	this.shape_18.setTransform(15.1,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AieAUIAAgnIE9AAIAAAng");
	this.shape_19.setTransform(15.9,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AimAUIAAgnIFNAAIAAAng");
	this.shape_20.setTransform(16.7,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF00").s().p("AiuAUIAAgnIFdAAIAAAng");
	this.shape_21.setTransform(17.5,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("Ai3AUIAAgnIFvAAIAAAng");
	this.shape_22.setTransform(18.4,2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF00").s().p("Ai/AUIAAgnIF/AAIAAAng");
	this.shape_23.setTransform(19.2,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AjHAUIAAgnIGPAAIAAAng");
	this.shape_24.setTransform(20,2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AjPAUIAAgnIGfAAIAAAng");
	this.shape_25.setTransform(20.8,2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AjXAUIAAgnIGvAAIAAAng");
	this.shape_26.setTransform(21.6,2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("AjfAUIAAgnIG/AAIAAAng");
	this.shape_27.setTransform(22.4,2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AjnAUIAAgnIHPAAIAAAng");
	this.shape_28.setTransform(23.2,2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AjvAUIAAgnIHfAAIAAAng");
	this.shape_29.setTransform(24,2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("Aj3AUIAAgnIHvAAIAAAng");
	this.shape_30.setTransform(24.8,2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AkAAUIAAgnIIAAAIAAAng");
	this.shape_31.setTransform(25.7,2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AkIAUIAAgnIIRAAIAAAng");
	this.shape_32.setTransform(26.5,2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AkQAUIAAgnIIhAAIAAAng");
	this.shape_33.setTransform(27.3,2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF00").s().p("AkYAUIAAgnIIxAAIAAAng");
	this.shape_34.setTransform(28.1,2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF00").s().p("AkgAUIAAgnIJBAAIAAAng");
	this.shape_35.setTransform(28.9,2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AkoAUIAAgnIJRAAIAAAng");
	this.shape_36.setTransform(29.7,2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF00").s().p("AkwAUIAAgnIJhAAIAAAng");
	this.shape_37.setTransform(30.5,2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF00").s().p("Ak4AUIAAgnIJxAAIAAAng");
	this.shape_38.setTransform(31.3,2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF00").s().p("AlBAUIAAgnIKCAAIAAAng");
	this.shape_39.setTransform(32.2,2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("AlJAUIAAgnIKSAAIAAAng");
	this.shape_40.setTransform(33,2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF00").s().p("AlRAUIAAgnIKjAAIAAAng");
	this.shape_41.setTransform(33.8,2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("AlZAUIAAgnIKzAAIAAAng");
	this.shape_42.setTransform(34.6,2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("AlhAUIAAgnILDAAIAAAng");
	this.shape_43.setTransform(35.4,2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF00").s().p("AlpAUIAAgnILTAAIAAAng");
	this.shape_44.setTransform(36.2,2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF00").s().p("AlxAUIAAgnILjAAIAAAng");
	this.shape_45.setTransform(37,2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFF00").s().p("Al5AUIAAgnILzAAIAAAng");
	this.shape_46.setTransform(37.8,2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF00").s().p("AmBAUIAAgnIMDAAIAAAng");
	this.shape_47.setTransform(38.6,2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AmKAUIAAgnIMVAAIAAAng");
	this.shape_48.setTransform(39.5,2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF00").s().p("AmSAUIAAgnIMkAAIAAAng");
	this.shape_49.setTransform(40.3,2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF00").s().p("AmaAUIAAgnIM0AAIAAAng");
	this.shape_50.setTransform(41.1,2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF00").s().p("AmiAUIAAgnINFAAIAAAng");
	this.shape_51.setTransform(41.9,2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF00").s().p("AmqAUIAAgnINVAAIAAAng");
	this.shape_52.setTransform(42.7,2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF00").s().p("AmyAUIAAgnINlAAIAAAng");
	this.shape_53.setTransform(43.5,2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("Am6AUIAAgnIN1AAIAAAng");
	this.shape_54.setTransform(44.3,2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF00").s().p("AnCAUIAAgnIOFAAIAAAng");
	this.shape_55.setTransform(45.1,2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF00").s().p("AnKAUIAAgnIOVAAIAAAng");
	this.shape_56.setTransform(45.9,2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF00").s().p("AnTAUIAAgnIOnAAIAAAng");
	this.shape_57.setTransform(46.8,2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFF00").s().p("AnbAUIAAgnIO3AAIAAAng");
	this.shape_58.setTransform(47.6,2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF00").s().p("AnjAUIAAgnIPGAAIAAAng");
	this.shape_59.setTransform(48.4,2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF00").s().p("AnrAUIAAgnIPXAAIAAAng");
	this.shape_60.setTransform(49.2,2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFF00").s().p("AnzAUIAAgnIPnAAIAAAng");
	this.shape_61.setTransform(50,2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF00").s().p("An7AUIAAgnIP3AAIAAAng");
	this.shape_62.setTransform(50.8,2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFF00").s().p("AoDAUIAAgnIQHAAIAAAng");
	this.shape_63.setTransform(51.6,2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFF00").s().p("AoLAUIAAgnIQXAAIAAAng");
	this.shape_64.setTransform(52.4,2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFF00").s().p("AoTAUIAAgnIQnAAIAAAng");
	this.shape_65.setTransform(53.2,2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFF00").s().p("AocAUIAAgnIQ4AAIAAAng");
	this.shape_66.setTransform(54.1,2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFF00").s().p("AokAUIAAgnIRJAAIAAAng");
	this.shape_67.setTransform(54.9,2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF00").s().p("AosAUIAAgnIRZAAIAAAng");
	this.shape_68.setTransform(55.7,2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF00").s().p("Ao0AUIAAgnIRpAAIAAAng");
	this.shape_69.setTransform(56.5,2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFF00").s().p("Ao8AUIAAgnIR5AAIAAAng");
	this.shape_70.setTransform(57.3,2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFF00").s().p("ApEAUIAAgnISJAAIAAAng");
	this.shape_71.setTransform(58.1,2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFF00").s().p("ApMAUIAAgnISZAAIAAAng");
	this.shape_72.setTransform(58.9,2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFF00").s().p("ApUAUIAAgnISpAAIAAAng");
	this.shape_73.setTransform(59.7,2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFF00").s().p("ApcAUIAAgnIS5AAIAAAng");
	this.shape_74.setTransform(60.5,2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFF00").s().p("AplAUIAAgnITKAAIAAAng");
	this.shape_75.setTransform(61.4,2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFF00").s().p("AptAUIAAgnITaAAIAAAng");
	this.shape_76.setTransform(62.2,2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFF00").s().p("Ap1AUIAAgnITrAAIAAAng");
	this.shape_77.setTransform(63,2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFF00").s().p("Ap9AUIAAgnIT7AAIAAAng");
	this.shape_78.setTransform(63.8,2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFF00").s().p("AqFAUIAAgnIULAAIAAAng");
	this.shape_79.setTransform(64.6,2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFF00").s().p("AqNAUIAAgnIUbAAIAAAng");
	this.shape_80.setTransform(65.4,2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFF00").s().p("AqVAUIAAgnIUrAAIAAAng");
	this.shape_81.setTransform(66.2,2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFF00").s().p("AqdAUIAAgnIU7AAIAAAng");
	this.shape_82.setTransform(67,2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFF00").s().p("AqlAUIAAgnIVLAAIAAAng");
	this.shape_83.setTransform(67.8,2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFF00").s().p("AquAUIAAgnIVdAAIAAAng");
	this.shape_84.setTransform(68.7,2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFF00").s().p("Aq2AUIAAgnIVsAAIAAAng");
	this.shape_85.setTransform(69.5,2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFF00").s().p("Aq+AUIAAgnIV9AAIAAAng");
	this.shape_86.setTransform(70.3,2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFF00").s().p("ArGAUIAAgnIWNAAIAAAng");
	this.shape_87.setTransform(71.1,2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFF00").s().p("ArOAUIAAgnIWdAAIAAAng");
	this.shape_88.setTransform(71.9,2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFF00").s().p("ArWAUIAAgnIWtAAIAAAng");
	this.shape_89.setTransform(72.7,2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFF00").s().p("AreAUIAAgnIW9AAIAAAng");
	this.shape_90.setTransform(73.5,2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFF00").s().p("ArmAUIAAgnIXNAAIAAAng");
	this.shape_91.setTransform(74.3,2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFF00").s().p("AruAUIAAgnIXdAAIAAAng");
	this.shape_92.setTransform(75.1,2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFF00").s().p("Ar3AUIAAgnIXvAAIAAAng");
	this.shape_93.setTransform(76,2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFF00").s().p("Ar/AUIAAgnIX/AAIAAAng");
	this.shape_94.setTransform(76.8,2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFF00").s().p("AsHAUIAAgnIYPAAIAAAng");
	this.shape_95.setTransform(77.6,2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFF00").s().p("AsPAUIAAgnIYfAAIAAAng");
	this.shape_96.setTransform(78.4,2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFF00").s().p("AsXAUIAAgnIYvAAIAAAng");
	this.shape_97.setTransform(79.2,2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFF00").s().p("AsfAUIAAgnIY/AAIAAAng");
	this.shape_98.setTransform(80,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.icon_dummy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_dummy, new cjs.Rectangle(0,0,40,40), null);


(lib.icon_defend_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icon_defend();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_defend_1, new cjs.Rectangle(0,0,40,40), null);


(lib.icon_attack_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icon_attack();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_attack_1, new cjs.Rectangle(0,0,40,40), null);


(lib.hp_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape.setTransform(0.5,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AgMAUIAAgnIAZAAIAAAng");
	this.shape_1.setTransform(1.3,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AgUAUIAAgnIApAAIAAAng");
	this.shape_2.setTransform(2.1,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AgcAUIAAgnIA5AAIAAAng");
	this.shape_3.setTransform(2.9,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AglAUIAAgnIBKAAIAAAng");
	this.shape_4.setTransform(3.8,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AgtAUIAAgnIBaAAIAAAng");
	this.shape_5.setTransform(4.6,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("Ag1AUIAAgnIBrAAIAAAng");
	this.shape_6.setTransform(5.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("Ag9AUIAAgnIB7AAIAAAng");
	this.shape_7.setTransform(6.2,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("AhFAUIAAgnICLAAIAAAng");
	this.shape_8.setTransform(7,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC00").s().p("AhNAUIAAgnICbAAIAAAng");
	this.shape_9.setTransform(7.8,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC00").s().p("AhVAUIAAgnICrAAIAAAng");
	this.shape_10.setTransform(8.6,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("AhdAUIAAgnIC7AAIAAAng");
	this.shape_11.setTransform(9.4,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CC00").s().p("AhlAUIAAgnIDLAAIAAAng");
	this.shape_12.setTransform(10.2,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC00").s().p("AhuAUIAAgnIDdAAIAAAng");
	this.shape_13.setTransform(11.1,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CC00").s().p("Ah2AUIAAgnIDsAAIAAAng");
	this.shape_14.setTransform(11.9,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CC00").s().p("Ah+AUIAAgnID9AAIAAAng");
	this.shape_15.setTransform(12.7,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CC00").s().p("AiGAUIAAgnIENAAIAAAng");
	this.shape_16.setTransform(13.5,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("AiOAUIAAgnIEdAAIAAAng");
	this.shape_17.setTransform(14.3,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CC00").s().p("AiWAUIAAgnIEtAAIAAAng");
	this.shape_18.setTransform(15.1,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00CC00").s().p("AieAUIAAgnIE9AAIAAAng");
	this.shape_19.setTransform(15.9,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CC00").s().p("AimAUIAAgnIFNAAIAAAng");
	this.shape_20.setTransform(16.7,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CC00").s().p("AiuAUIAAgnIFdAAIAAAng");
	this.shape_21.setTransform(17.5,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CC00").s().p("Ai3AUIAAgnIFvAAIAAAng");
	this.shape_22.setTransform(18.4,2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00CC00").s().p("Ai/AUIAAgnIF/AAIAAAng");
	this.shape_23.setTransform(19.2,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CC00").s().p("AjHAUIAAgnIGPAAIAAAng");
	this.shape_24.setTransform(20,2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CC00").s().p("AjPAUIAAgnIGfAAIAAAng");
	this.shape_25.setTransform(20.8,2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CC00").s().p("AjXAUIAAgnIGvAAIAAAng");
	this.shape_26.setTransform(21.6,2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CC00").s().p("AjfAUIAAgnIG/AAIAAAng");
	this.shape_27.setTransform(22.4,2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CC00").s().p("AjnAUIAAgnIHPAAIAAAng");
	this.shape_28.setTransform(23.2,2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CC00").s().p("AjvAUIAAgnIHfAAIAAAng");
	this.shape_29.setTransform(24,2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CC00").s().p("Aj3AUIAAgnIHvAAIAAAng");
	this.shape_30.setTransform(24.8,2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CC00").s().p("AkAAUIAAgnIIAAAIAAAng");
	this.shape_31.setTransform(25.7,2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CC00").s().p("AkIAUIAAgnIIRAAIAAAng");
	this.shape_32.setTransform(26.5,2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00CC00").s().p("AkQAUIAAgnIIhAAIAAAng");
	this.shape_33.setTransform(27.3,2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00CC00").s().p("AkYAUIAAgnIIxAAIAAAng");
	this.shape_34.setTransform(28.1,2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00CC00").s().p("AkgAUIAAgnIJBAAIAAAng");
	this.shape_35.setTransform(28.9,2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00CC00").s().p("AkoAUIAAgnIJRAAIAAAng");
	this.shape_36.setTransform(29.7,2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CC00").s().p("AkwAUIAAgnIJhAAIAAAng");
	this.shape_37.setTransform(30.5,2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00CC00").s().p("Ak4AUIAAgnIJxAAIAAAng");
	this.shape_38.setTransform(31.3,2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00CC00").s().p("AlBAUIAAgnIKCAAIAAAng");
	this.shape_39.setTransform(32.2,2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00CC00").s().p("AlJAUIAAgnIKSAAIAAAng");
	this.shape_40.setTransform(33,2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00CC00").s().p("AlRAUIAAgnIKjAAIAAAng");
	this.shape_41.setTransform(33.8,2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00CC00").s().p("AlZAUIAAgnIKzAAIAAAng");
	this.shape_42.setTransform(34.6,2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00CC00").s().p("AlhAUIAAgnILDAAIAAAng");
	this.shape_43.setTransform(35.4,2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00CC00").s().p("AlpAUIAAgnILTAAIAAAng");
	this.shape_44.setTransform(36.2,2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00CC00").s().p("AlxAUIAAgnILjAAIAAAng");
	this.shape_45.setTransform(37,2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00CC00").s().p("Al5AUIAAgnILzAAIAAAng");
	this.shape_46.setTransform(37.8,2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00CC00").s().p("AmBAUIAAgnIMDAAIAAAng");
	this.shape_47.setTransform(38.6,2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00CC00").s().p("AmKAUIAAgnIMVAAIAAAng");
	this.shape_48.setTransform(39.5,2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00CC00").s().p("AmSAUIAAgnIMkAAIAAAng");
	this.shape_49.setTransform(40.3,2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00CC00").s().p("AmaAUIAAgnIM0AAIAAAng");
	this.shape_50.setTransform(41.1,2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00CC00").s().p("AmiAUIAAgnINFAAIAAAng");
	this.shape_51.setTransform(41.9,2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00CC00").s().p("AmqAUIAAgnINVAAIAAAng");
	this.shape_52.setTransform(42.7,2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00CC00").s().p("AmyAUIAAgnINlAAIAAAng");
	this.shape_53.setTransform(43.5,2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00CC00").s().p("Am6AUIAAgnIN1AAIAAAng");
	this.shape_54.setTransform(44.3,2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00CC00").s().p("AnCAUIAAgnIOFAAIAAAng");
	this.shape_55.setTransform(45.1,2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00CC00").s().p("AnKAUIAAgnIOVAAIAAAng");
	this.shape_56.setTransform(45.9,2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00CC00").s().p("AnTAUIAAgnIOnAAIAAAng");
	this.shape_57.setTransform(46.8,2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00CC00").s().p("AnbAUIAAgnIO3AAIAAAng");
	this.shape_58.setTransform(47.6,2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00CC00").s().p("AnjAUIAAgnIPGAAIAAAng");
	this.shape_59.setTransform(48.4,2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00CC00").s().p("AnrAUIAAgnIPXAAIAAAng");
	this.shape_60.setTransform(49.2,2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00CC00").s().p("AnzAUIAAgnIPnAAIAAAng");
	this.shape_61.setTransform(50,2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00CC00").s().p("An7AUIAAgnIP3AAIAAAng");
	this.shape_62.setTransform(50.8,2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00CC00").s().p("AoDAUIAAgnIQHAAIAAAng");
	this.shape_63.setTransform(51.6,2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00CC00").s().p("AoLAUIAAgnIQXAAIAAAng");
	this.shape_64.setTransform(52.4,2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00CC00").s().p("AoTAUIAAgnIQnAAIAAAng");
	this.shape_65.setTransform(53.2,2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00CC00").s().p("AocAUIAAgnIQ4AAIAAAng");
	this.shape_66.setTransform(54.1,2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00CC00").s().p("AokAUIAAgnIRJAAIAAAng");
	this.shape_67.setTransform(54.9,2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00CC00").s().p("AosAUIAAgnIRZAAIAAAng");
	this.shape_68.setTransform(55.7,2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00CC00").s().p("Ao0AUIAAgnIRpAAIAAAng");
	this.shape_69.setTransform(56.5,2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00CC00").s().p("Ao8AUIAAgnIR5AAIAAAng");
	this.shape_70.setTransform(57.3,2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00CC00").s().p("ApEAUIAAgnISJAAIAAAng");
	this.shape_71.setTransform(58.1,2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00CC00").s().p("ApMAUIAAgnISZAAIAAAng");
	this.shape_72.setTransform(58.9,2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00CC00").s().p("ApUAUIAAgnISpAAIAAAng");
	this.shape_73.setTransform(59.7,2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00CC00").s().p("ApcAUIAAgnIS5AAIAAAng");
	this.shape_74.setTransform(60.5,2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00CC00").s().p("AplAUIAAgnITKAAIAAAng");
	this.shape_75.setTransform(61.4,2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00CC00").s().p("AptAUIAAgnITaAAIAAAng");
	this.shape_76.setTransform(62.2,2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00CC00").s().p("Ap1AUIAAgnITrAAIAAAng");
	this.shape_77.setTransform(63,2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00CC00").s().p("Ap9AUIAAgnIT7AAIAAAng");
	this.shape_78.setTransform(63.8,2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00CC00").s().p("AqFAUIAAgnIULAAIAAAng");
	this.shape_79.setTransform(64.6,2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00CC00").s().p("AqNAUIAAgnIUbAAIAAAng");
	this.shape_80.setTransform(65.4,2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00CC00").s().p("AqVAUIAAgnIUrAAIAAAng");
	this.shape_81.setTransform(66.2,2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00CC00").s().p("AqdAUIAAgnIU7AAIAAAng");
	this.shape_82.setTransform(67,2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00CC00").s().p("AqlAUIAAgnIVLAAIAAAng");
	this.shape_83.setTransform(67.8,2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00CC00").s().p("AquAUIAAgnIVdAAIAAAng");
	this.shape_84.setTransform(68.7,2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00CC00").s().p("Aq2AUIAAgnIVsAAIAAAng");
	this.shape_85.setTransform(69.5,2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00CC00").s().p("Aq+AUIAAgnIV9AAIAAAng");
	this.shape_86.setTransform(70.3,2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00CC00").s().p("ArGAUIAAgnIWNAAIAAAng");
	this.shape_87.setTransform(71.1,2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00CC00").s().p("ArOAUIAAgnIWdAAIAAAng");
	this.shape_88.setTransform(71.9,2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00CC00").s().p("ArWAUIAAgnIWtAAIAAAng");
	this.shape_89.setTransform(72.7,2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00CC00").s().p("AreAUIAAgnIW9AAIAAAng");
	this.shape_90.setTransform(73.5,2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00CC00").s().p("ArmAUIAAgnIXNAAIAAAng");
	this.shape_91.setTransform(74.3,2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00CC00").s().p("AruAUIAAgnIXdAAIAAAng");
	this.shape_92.setTransform(75.1,2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00CC00").s().p("Ar3AUIAAgnIXvAAIAAAng");
	this.shape_93.setTransform(76,2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00CC00").s().p("Ar/AUIAAgnIX/AAIAAAng");
	this.shape_94.setTransform(76.8,2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00CC00").s().p("AsHAUIAAgnIYPAAIAAAng");
	this.shape_95.setTransform(77.6,2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00CC00").s().p("AsPAUIAAgnIYfAAIAAAng");
	this.shape_96.setTransform(78.4,2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00CC00").s().p("AsXAUIAAgnIYvAAIAAAng");
	this.shape_97.setTransform(79.2,2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00CC00").s().p("AsfAUIAAgnIY/AAIAAAng");
	this.shape_98.setTransform(80,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.effect_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjAAIBj/PIBkfPIhkfQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.effect_line, new cjs.Rectangle(-10,-200,20,400), null);


(lib.effect_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlhFiQiSiTAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAQjOAAiTiSgAk9k9QiECDAAC6QAAC7CECEQCDCDC6AAQC7AACEiDQCDiEAAi7QAAi6iDiDQiEiEi7AAQi6AAiDCEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.effect_circle, new cjs.Rectangle(-50,-50,100,100), null);


(lib.megaman5_water_rider_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.megaman5_water_rider();
	this.instance.parent = this;
	this.instance.setTransform(-16,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.megaman5_water_rider_1, new cjs.Rectangle(-16,-13.5,32,27), null);


(lib.megaman5_ride_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.megaman5_ride();
	this.instance.parent = this;
	this.instance.setTransform(-16,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.megaman5_ride_1, new cjs.Rectangle(-16,-14,32,28), null);


(lib.megaman_jump_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.megaman_jump();
	this.instance.parent = this;
	this.instance.setTransform(-13,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.megaman_jump_1, new cjs.Rectangle(-13,-15,26,30), null);


(lib.megaman_hp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.megaman_hp1();
	this.instance.parent = this;
	this.instance.setTransform(-16,-16,2,2);

	this.instance_1 = new lib.megaman_hp2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,-16,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.megaman_cshoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.megaman_cshoot1();
	this.instance.parent = this;
	this.instance.setTransform(27,-7,1,1,0,0,180);

	this.instance_1 = new lib.megaman_cshoot2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20,-8,1,1,0,0,180);

	this.instance_2 = new lib.megaman_cshoot3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21,-10,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7,27,14);


(lib.megaman_bullet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.megaman_bullet();
	this.instance.parent = this;
	this.instance.setTransform(-8,-6,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.megaman_bullet_1, new cjs.Rectangle(-8,-6,16,12), null);


(lib.protoman_sprites = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,attack:8});

	// timeline functions:
	this.frame_7 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_29 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(22).call(this.frame_29).wait(1));

	// Layer_3
	this.instance = new lib.megaman_bullet_1();
	this.instance.parent = this;
	this.instance.setTransform(-34,5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:-200},8).to({_off:true},1).wait(12));

	// sprites
	this.instance_1 = new lib.protoman_stand1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-22,-24,2,2);

	this.instance_2 = new lib.protoman_stand2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-22,-24,2,2);

	this.instance_3 = new lib.protoman_shoot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26,-22,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-24,44,48);


(lib.megaman_sprites = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stand":0,"attack":30,skill1:50,skill2:70,skill3:90});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_39 = function() {
		exportRoot.enemyHurt();
	}
	this.frame_49 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		exportRoot.enemyHurt();
	}
	this.frame_69 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_89 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_107 = function() {
		exportRoot.enemyHurt();
	}
	this.frame_111 = function() {
		exportRoot.enemyHurt();
	}
	this.frame_115 = function() {
		exportRoot.enemyHurt();
	}
	this.frame_124 = function() {
		exportRoot.enemyHurt();
	}
	this.frame_149 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(20).call(this.frame_89).wait(18).call(this.frame_107).wait(4).call(this.frame_111).wait(4).call(this.frame_115).wait(9).call(this.frame_124).wait(25).call(this.frame_149).wait(1));

	// Layer_8
	this.instance = new lib.megaman_cshoot();
	this.instance.parent = this;
	this.instance.setTransform(-43,13,2,2,0,0,0,13.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107).to({_off:false},0).to({x:-200},8).to({_off:true},1).wait(34));

	// Layer_7
	this.instance_1 = new lib.megaman_cshoot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-43,13,2,2,0,0,0,13.5,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({_off:false},0).to({x:-200},8).to({_off:true},1).wait(38));

	// Layer_6
	this.instance_2 = new lib.megaman_cshoot();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-43,13,2,2,0,0,0,13.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({x:-200},8).to({_off:true},1).wait(42));

	// Layer_5
	this.instance_3 = new lib.megaman_hp();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-100);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({y:-120,alpha:1},4).to({y:0},9).to({_off:true},1).wait(65));

	// Layer_4
	this.instance_4 = new lib.megaman_cshoot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-68,-2,2,2,0,0,0,13.5,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({_off:false},0).to({x:-200},8).to({_off:true},1).wait(90));

	// Layer_3
	this.instance_5 = new lib.megaman_bullet_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-49,-2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({x:-200},8).to({_off:true},1).wait(110));

	// sprites
	this.instance_6 = new lib.megaman_stand1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-21,-24,2,2);

	this.instance_7 = new lib.megaman_stand2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-21,-24,2,2);

	this.instance_8 = new lib.megaman_shoot();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-41,-24,2,2);

	this.instance_9 = new lib.megaman_throw();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-33,-24,2,2);

	this.instance_10 = new lib.megaman5_ride_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(200,0,2,2);
	this.instance_10._off = true;

	this.instance_11 = new lib.megaman5_water_rider_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,1,2,2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},27).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},20).to({state:[{t:this.instance_9}]},20).to({state:[{t:this.instance_10}]},20).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_11}]},16).to({state:[{t:this.instance_11}]},9).to({state:[]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90).to({_off:false},0).to({x:0},9).to({_off:true},16).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(115).to({_off:false},0).to({x:-200},9).to({_off:true},1).wait(25));

	// Layer_9
	this.instance_12 = new lib.megaman_jump_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,1,2,2);
	this.instance_12._off = true;

	this.instance_13 = new lib.megaman_stand1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-21,-24,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},115).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(115).to({_off:false},0).to({y:-99},4).to({y:1},5).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-24,42,48);


(lib.hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.effect_line();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,-45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:0.5,scaleY:0.5},4).to({_off:true},1).wait(1));

	// Layer_10
	this.instance_1 = new lib.effect_line();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:0.5,scaleY:0.5},4).to({_off:true},1).wait(2));

	// Layer_9
	this.instance_2 = new lib.effect_line();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({scaleX:0.5,scaleY:0.5},4).to({_off:true},1).wait(3));

	// Layer_2
	this.instance_3 = new lib.effect_line();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({scaleX:0.5,scaleY:0.5},4).to({_off:true},1).wait(4));

	// Layer_1
	this.instance_4 = new lib.effect_circle();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1},6).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.enemy_clown_sprites = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stand":0,hurt:8});

	// timeline functions:
	this.frame_7 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_18 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(11).call(this.frame_18).wait(1));

	// Layer_3
	this.instance = new lib.hit();
	this.instance.parent = this;
	this.instance.setTransform(0,-20);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(11));

	// Layer_1
	this.instance_1 = new lib.clown1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32,-61,2,2);

	this.instance_2 = new lib.clown2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-32,-62,2,2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(4).to({y:-67},0).wait(2).to({y:-57},0).wait(2).to({x:-37,y:-62},0).wait(2).to({x:-27},0).wait(2).to({x:-32},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-61,64,122);


// stage content:
(lib.project_1254 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage);
		//
		var slot1 = "megaman";
		var slot1_skill1 = "megaman_skill1";
		var slot1_skill2 = "megaman_skill2";
		var slot1_skill3 = "megaman_skill3";
		
		var slot2 = "protoman";
		var enemy = "enemy_clown";
		//
		var megaman = new lib.megaman_sprites();
		var megaman_skill1 = new lib.megaman_skill1();
		var megaman_skill2 = new lib.megaman_skill2();
		var megaman_skill3 = new lib.megaman_skill3();
		var protoman = new lib.protoman_sprites();
		var enemy_clown = new lib.enemy_clown_sprites();
		//
		function addSpritesSlot(name,x,y){
			exportRoot.addChild(name);
			name.x = x;
			name.y = y;
		}
		addSpritesSlot(eval(slot1),300,80);
		addSpritesSlot(eval(slot2),300,150);
		addSpritesSlot(eval(enemy),80,160);
		//
		function addSkillsSlot(name,x,y){
			exportRoot.addChild(name);
			name.x = x;
			name.y = y;
		}
		addSkillsSlot(eval(slot1_skill1),190,350);
		addSkillsSlot(eval(slot1_skill2),250,350);
		addSkillsSlot(eval(slot1_skill3),310,350);
		//
		this.slot1_attack.addEventListener("click", function(event) { eval(slot1).gotoAndPlay("attack") });
		this.slot1_defend.addEventListener("click", function(event) { eval(slot1).gotoAndPlay("defend") });
		this.slot1_skill1.addEventListener("click", function(event) { eval(slot1).gotoAndPlay("skill1") });
		this.slot1_skill2.addEventListener("click", function(event) { eval(slot1).gotoAndPlay("skill2") });
		this.slot1_skill3.addEventListener("click", function(event) { eval(slot1).gotoAndPlay("skill3") });
		this.slot2_attack.addEventListener("click", function(event) { eval(slot2).gotoAndPlay("attack") });
		//
		this.enemyHurt = function() {
		    eval(enemy).gotoAndPlay("hurt");
		}
	}
	this.frame_1 = function() {
		this.stop();
		var slot1_hp = 100;
		var slot1_hp_temp = 75;
		function hpBar(name,hp,hp_temp) {
		    var a = (hp_temp/hp)*100;
			name.gotoAndStop(a);
		}
		hpBar(this.slot1_hp_bar,slot1_hp,slot1_hp_temp);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// bars
	this.slot1_limit_bar = new lib.limit_bar();
	this.slot1_limit_bar.name = "slot1_limit_bar";
	this.slot1_limit_bar.parent = this;
	this.slot1_limit_bar.setTransform(190,331);

	this.slot1_hp_bar = new lib.hp_bar();
	this.slot1_hp_bar.name = "slot1_hp_bar";
	this.slot1_hp_bar.parent = this;
	this.slot1_hp_bar.setTransform(190,325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot1_hp_bar},{t:this.slot1_limit_bar}]}).wait(2));

	// skills icons
	this.slot4_skill3 = new lib.icon_dummy();
	this.slot4_skill3.name = "slot4_skill3";
	this.slot4_skill3.parent = this;
	this.slot4_skill3.setTransform(310,590);

	this.slot4_skill2 = new lib.icon_dummy();
	this.slot4_skill2.name = "slot4_skill2";
	this.slot4_skill2.parent = this;
	this.slot4_skill2.setTransform(250,590);

	this.slot4_skill1 = new lib.icon_dummy();
	this.slot4_skill1.name = "slot4_skill1";
	this.slot4_skill1.parent = this;
	this.slot4_skill1.setTransform(190,590);

	this.slot3_skill3 = new lib.icon_dummy();
	this.slot3_skill3.name = "slot3_skill3";
	this.slot3_skill3.parent = this;
	this.slot3_skill3.setTransform(310,510);

	this.slot3_skill2 = new lib.icon_dummy();
	this.slot3_skill2.name = "slot3_skill2";
	this.slot3_skill2.parent = this;
	this.slot3_skill2.setTransform(250,510);

	this.slot3_skill1 = new lib.icon_dummy();
	this.slot3_skill1.name = "slot3_skill1";
	this.slot3_skill1.parent = this;
	this.slot3_skill1.setTransform(190,510);

	this.slot2_skill3 = new lib.icon_dummy();
	this.slot2_skill3.name = "slot2_skill3";
	this.slot2_skill3.parent = this;
	this.slot2_skill3.setTransform(310,430);

	this.slot2_skill2 = new lib.icon_dummy();
	this.slot2_skill2.name = "slot2_skill2";
	this.slot2_skill2.parent = this;
	this.slot2_skill2.setTransform(250,430);

	this.slot2_skill1 = new lib.icon_dummy();
	this.slot2_skill1.name = "slot2_skill1";
	this.slot2_skill1.parent = this;
	this.slot2_skill1.setTransform(190,430);

	this.slot1_skill3 = new lib.icon_dummy();
	this.slot1_skill3.name = "slot1_skill3";
	this.slot1_skill3.parent = this;
	this.slot1_skill3.setTransform(310,350);

	this.slot1_skill2 = new lib.icon_dummy();
	this.slot1_skill2.name = "slot1_skill2";
	this.slot1_skill2.parent = this;
	this.slot1_skill2.setTransform(250,350);

	this.slot1_skill1 = new lib.icon_dummy();
	this.slot1_skill1.name = "slot1_skill1";
	this.slot1_skill1.parent = this;
	this.slot1_skill1.setTransform(190,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot1_skill1},{t:this.slot1_skill2},{t:this.slot1_skill3},{t:this.slot2_skill1},{t:this.slot2_skill2},{t:this.slot2_skill3},{t:this.slot3_skill1},{t:this.slot3_skill2},{t:this.slot3_skill3},{t:this.slot4_skill1},{t:this.slot4_skill2},{t:this.slot4_skill3}]}).wait(2));

	// atk_def icons
	this.slot4_defend = new lib.icon_defend_1();
	this.slot4_defend.name = "slot4_defend";
	this.slot4_defend.parent = this;
	this.slot4_defend.setTransform(130,590);

	this.slot4_attack = new lib.icon_attack_1();
	this.slot4_attack.name = "slot4_attack";
	this.slot4_attack.parent = this;
	this.slot4_attack.setTransform(70,590);

	this.slot3_defend = new lib.icon_defend_1();
	this.slot3_defend.name = "slot3_defend";
	this.slot3_defend.parent = this;
	this.slot3_defend.setTransform(130,510);

	this.slot3_attack = new lib.icon_attack_1();
	this.slot3_attack.name = "slot3_attack";
	this.slot3_attack.parent = this;
	this.slot3_attack.setTransform(70,510);

	this.slot2_defend = new lib.icon_defend_1();
	this.slot2_defend.name = "slot2_defend";
	this.slot2_defend.parent = this;
	this.slot2_defend.setTransform(130,430);

	this.slot2_attack = new lib.icon_attack_1();
	this.slot2_attack.name = "slot2_attack";
	this.slot2_attack.parent = this;
	this.slot2_attack.setTransform(70,430);

	this.slot1_defend = new lib.icon_defend_1();
	this.slot1_defend.name = "slot1_defend";
	this.slot1_defend.parent = this;
	this.slot1_defend.setTransform(130,350);

	this.slot1_attack = new lib.icon_attack_1();
	this.slot1_attack.name = "slot1_attack";
	this.slot1_attack.parent = this;
	this.slot1_attack.setTransform(70,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot1_attack},{t:this.slot1_defend},{t:this.slot2_attack},{t:this.slot2_defend},{t:this.slot3_attack},{t:this.slot3_defend},{t:this.slot4_attack},{t:this.slot4_defend}]}).wait(2));

	// bg
	this.instance = new lib.bg01();
	this.instance.parent = this;

	this.instance_1 = new lib.bg_commandboard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(180,320,360,640);
// library properties:
lib.properties = {
	id: '074FE55DD656E14EB72B73884C19629F',
	width: 360,
	height: 640,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/bg01.jpg?1540745813071", id:"bg01"},
		{src:"images/project_1254_atlas_P_.png?1540745813015", id:"project_1254_atlas_P_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['074FE55DD656E14EB72B73884C19629F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;