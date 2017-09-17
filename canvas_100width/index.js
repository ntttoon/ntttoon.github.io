(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[314,0,150,240],[0,0,160,230],[162,0,150,240]]}
];


// symbols:



(lib.c1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.c2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.c3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cloud_win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c1();
	this.instance.parent = this;
	this.instance.setTransform(0,-240);

	this.instance_1 = new lib.c3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-240,150,240);


(lib.cloud_walking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c1();
	this.instance.parent = this;
	this.instance.setTransform(0,-240);

	this.instance_1 = new lib.c2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-240,150,240);


(lib.cloud_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.cloud_win();
	this.instance.parent = this;
	this.instance.setTransform(125,240);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(90));

	// Layer 1
	this.instance_1 = new lib.cloud_walking();
	this.instance_1.parent = this;
	this.instance_1.setTransform(390,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:125},29).to({_off:true},1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390,0,150,240);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud
	this.instance = new lib.cloud_ani();
	this.instance.parent = this;
	this.instance.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A1E7F1").s().p("EgdSA6mMAAAh1LMA6lAAAMAAAB1Lg");
	this.shape.setTransform(187.5,375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.5,375,540,750);
// library properties:
lib.properties = {
	width: 375,
	height: 750,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"index_atlas_.png?1505659471515", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;