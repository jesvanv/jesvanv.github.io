(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.red_sand = function() {
	this.initialize(img.red_sand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,450);// helper functions:

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


(lib.wheeltread = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(217,195,142,0.6)").ss(0.5,0,0,4).p("AAjAAIhFAA");
	this.shape.setTransform(3.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(55,53,53,0.6)").ss(0.5,0,0,4).p("AAjAAIhFAA");
	this.shape_1.setTransform(3.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheeltread, new cjs.Rectangle(-1,-1.4,9.1,2.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(2,0,0,4).p("AAA8VMAAAA4r");
	this.shape.setTransform(0,143.5,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,2,289), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(2,0,0,4).p("AcbAAMg42AAA");
	this.shape.setTransform(143.9,0,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,289.9,2), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABHIAAiN");
	this.shape.setTransform(10,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABHIAAiN");
	this.shape_1.setTransform(9.1,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABeIAAi7");
	this.shape_2.setTransform(8.2,9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABeIAAi7");
	this.shape_3.setTransform(7.3,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABeIAAi7");
	this.shape_4.setTransform(6.4,9.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABeIAAi7");
	this.shape_5.setTransform(5.5,9.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABeIAAi7");
	this.shape_6.setTransform(4.6,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABeIAAi7");
	this.shape_7.setTransform(3.7,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABeIAAi7");
	this.shape_8.setTransform(2.8,9.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABeIAAi7");
	this.shape_9.setTransform(1.9,11.4,1,0.779);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AAABHIAAiN");
	this.shape_10.setTransform(1,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_11.setTransform(5.5,17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_12.setTransform(5.5,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_13.setTransform(5.5,15.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_14.setTransform(5.5,15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_15.setTransform(5.5,14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_16.setTransform(5.5,13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_17.setTransform(5.5,12.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_18.setTransform(5.5,11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_19.setTransform(5.5,10.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_20.setTransform(5.5,9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_21.setTransform(5.5,8.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_22.setTransform(5.5,7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_23.setTransform(5.5,6.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_24.setTransform(5.5,6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("Ag2AAIBtAA");
	this.shape_25.setTransform(5.5,5.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AgfAAIA/AA");
	this.shape_26.setTransform(5.5,4.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AgfAAIA/AA");
	this.shape_27.setTransform(5.5,3.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AgfAAIA/AA");
	this.shape_28.setTransform(5.5,2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AgfAAIA/AA");
	this.shape_29.setTransform(5.5,1.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.1,0,0,4).p("AgfAAIA/AA");
	this.shape_30.setTransform(5.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(-1,-1,13,20.7), null);


(lib.redsand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.red_sand();
	this.instance.parent = this;
	this.instance.setTransform(0.6,898.6,1,1,180);

	this.instance_1 = new lib.red_sand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1199.1,898.6,1,1,180);

	this.instance_2 = new lib.red_sand();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,898.6,1,1,0,180,0);

	this.instance_3 = new lib.red_sand();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.6,1.9,1,1,180);

	this.instance_4 = new lib.red_sand();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.6,0,1,1,0,0,180);

	this.instance_5 = new lib.red_sand();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1199.1,1.9,1,1,180);

	this.instance_6 = new lib.red_sand();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.5,1.9,1,1,0,180,0);

	this.instance_7 = new lib.red_sand();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1199.1,0,1,1,0,0,180);

	this.instance_8 = new lib.red_sand();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.redsand, new cjs.Rectangle(-599.4,-448.1,1798.5,1346.7), null);


(lib.arrowwhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhxhhIDjAAIhyDEg");
	this.shape.setTransform(8.1,7,0.709,0.709,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAEvIAApd");
	this.shape_1.setTransform(7.5,43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowwhite, new cjs.Rectangle(0.1,0,16.1,74.8), null);


(lib.wheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		/* stop();*/
	}
	this.frame_159 = function() {
		/* gotoAndPlay(80);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(80).call(this.frame_159).wait(91));

	// Layer 19
	this.instance = new lib.wheeltread();
	this.instance.parent = this;
	this.instance.setTransform(3.7,11.5,1,1,0,0,0,3.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).wait(1).to({regY:-0.2,y:11.3},0).wait(2).to({y:11.2},0).wait(2).to({y:11.1},0).wait(2).to({y:11},0).wait(2).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.6},0).wait(2).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.7},0).wait(1).to({y:9.6},0).wait(1).to({y:9.4},0).wait(1).to({y:9.3},0).wait(1).to({y:9.2},0).wait(1).to({y:9},0).wait(1).to({y:8.9},0).wait(1).to({y:8.8},0).wait(1).to({y:8.6},0).wait(1).to({y:8.5},0).wait(1).to({y:8.3},0).wait(1).to({y:8.1},0).wait(1).to({y:8},0).wait(1).to({y:7.8},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({y:7.2},0).wait(1).to({y:7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.6},0).wait(1).to({y:6.4},0).wait(1).to({y:6.2},0).wait(1).to({y:6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.5},0).wait(1).to({y:5.2},0).wait(1).to({y:5},0).wait(1).to({y:4.9},0).wait(1).to({y:4.7},0).wait(1).to({y:4.5},0).wait(1).to({y:4.3},0).wait(1).to({y:4.2},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.6},0).wait(1).to({y:3.4},0).wait(1).to({y:3.3},0).wait(1).to({y:3.2},0).wait(1).to({y:3},0).wait(1).to({y:2.9},0).wait(1).to({y:2.8},0).wait(1).to({y:2.6},0).wait(1).to({y:2.5},0).wait(1).to({y:2.4},0).wait(1).to({y:2.3},0).wait(1).to({y:2.1},0).wait(1).to({y:2},0).wait(1).to({y:1.9},0).wait(1).to({y:1.8},0).wait(1).to({y:1.7},0).wait(1).to({y:1.6},0).wait(1).to({y:1.5},0).wait(1).to({y:1.3},0).wait(1).to({y:1.2},0).wait(1).to({y:1.1},0).wait(1).to({y:1},0).wait(1).to({y:0.9},0).wait(1).to({y:0.8},0).wait(1).to({y:0.7},0).wait(1).to({y:0.6},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.3},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(2).to({y:0},0).wait(1).to({y:-0.1},0).wait(2));

	// Layer 17
	this.instance_1 = new lib.wheeltread();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.7,11.5,1,1,0,0,0,3.5,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).wait(1).to({regY:-0.2,y:11.3},0).wait(2).to({y:11.2},0).wait(2).to({y:11.1},0).wait(2).to({y:11},0).wait(2).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.6},0).wait(2).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.7},0).wait(1).to({y:9.6},0).wait(1).to({y:9.4},0).wait(1).to({y:9.3},0).wait(1).to({y:9.2},0).wait(1).to({y:9},0).wait(1).to({y:8.9},0).wait(1).to({y:8.8},0).wait(1).to({y:8.6},0).wait(1).to({y:8.5},0).wait(1).to({y:8.3},0).wait(1).to({y:8.1},0).wait(1).to({y:8},0).wait(1).to({y:7.8},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({y:7.2},0).wait(1).to({y:7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.6},0).wait(1).to({y:6.4},0).wait(1).to({y:6.2},0).wait(1).to({y:6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.5},0).wait(1).to({y:5.2},0).wait(1).to({y:5},0).wait(1).to({y:4.9},0).wait(1).to({y:4.7},0).wait(1).to({y:4.5},0).wait(1).to({y:4.3},0).wait(1).to({y:4.2},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.6},0).wait(1).to({y:3.4},0).wait(1).to({y:3.3},0).wait(1).to({y:3.2},0).wait(1).to({y:3},0).wait(1).to({y:2.9},0).wait(1).to({y:2.8},0).wait(1).to({y:2.6},0).wait(1).to({y:2.5},0).wait(1).to({y:2.4},0).wait(1).to({y:2.3},0).wait(1).to({y:2.1},0).wait(1).to({y:2},0).wait(1).to({y:1.9},0).wait(1).to({y:1.8},0).wait(1).to({y:1.7},0).wait(1).to({y:1.6},0).wait(1).to({y:1.5},0).wait(1).to({y:1.3},0).wait(1).to({y:1.2},0).wait(1).to({y:1.1},0).wait(1).to({y:1},0).wait(1).to({y:0.9},0).wait(1).to({y:0.8},0).wait(1).to({y:0.7},0).wait(1).to({y:0.6},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.3},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(2).to({y:0},0).wait(1).to({y:-0.1},0).wait(1).to({_off:true},1).wait(20));

	// Layer 15
	this.instance_2 = new lib.wheeltread();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.7,11.5,1,1,0,0,0,3.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).wait(1).to({regY:-0.2,y:11.3},0).wait(2).to({y:11.2},0).wait(2).to({y:11.1},0).wait(2).to({y:11},0).wait(2).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.6},0).wait(2).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.7},0).wait(1).to({y:9.6},0).wait(1).to({y:9.4},0).wait(1).to({y:9.3},0).wait(1).to({y:9.2},0).wait(1).to({y:9},0).wait(1).to({y:8.9},0).wait(1).to({y:8.8},0).wait(1).to({y:8.6},0).wait(1).to({y:8.5},0).wait(1).to({y:8.3},0).wait(1).to({y:8.1},0).wait(1).to({y:8},0).wait(1).to({y:7.8},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({y:7.2},0).wait(1).to({y:7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.6},0).wait(1).to({y:6.4},0).wait(1).to({y:6.2},0).wait(1).to({y:6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.5},0).wait(1).to({y:5.2},0).wait(1).to({y:5},0).wait(1).to({y:4.9},0).wait(1).to({y:4.7},0).wait(1).to({y:4.5},0).wait(1).to({y:4.3},0).wait(1).to({y:4.2},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.6},0).wait(1).to({y:3.4},0).wait(1).to({y:3.3},0).wait(1).to({y:3.2},0).wait(1).to({y:3},0).wait(1).to({y:2.9},0).wait(1).to({y:2.8},0).wait(1).to({y:2.6},0).wait(1).to({y:2.5},0).wait(1).to({y:2.4},0).wait(1).to({y:2.3},0).wait(1).to({y:2.1},0).wait(1).to({y:2},0).wait(1).to({y:1.9},0).wait(1).to({y:1.8},0).wait(1).to({y:1.7},0).wait(1).to({y:1.6},0).wait(1).to({y:1.5},0).wait(1).to({y:1.3},0).wait(1).to({y:1.2},0).wait(1).to({y:1.1},0).wait(1).to({y:1},0).wait(1).to({y:0.9},0).wait(1).to({y:0.8},0).wait(1).to({y:0.7},0).wait(1).to({y:0.6},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.3},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(2).to({y:0},0).wait(1).to({y:-0.1},0).wait(1).to({_off:true},1).wait(40));

	// Layer 13
	this.instance_3 = new lib.wheeltread();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.7,11.5,1,1,0,0,0,3.5,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).wait(1).to({regY:-0.2,y:11.3},0).wait(2).to({y:11.2},0).wait(2).to({y:11.1},0).wait(2).to({y:11},0).wait(2).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.6},0).wait(2).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.7},0).wait(1).to({y:9.6},0).wait(1).to({y:9.4},0).wait(1).to({y:9.3},0).wait(1).to({y:9.2},0).wait(1).to({y:9},0).wait(1).to({y:8.9},0).wait(1).to({y:8.8},0).wait(1).to({y:8.6},0).wait(1).to({y:8.5},0).wait(1).to({y:8.3},0).wait(1).to({y:8.1},0).wait(1).to({y:8},0).wait(1).to({y:7.8},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({y:7.2},0).wait(1).to({y:7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.6},0).wait(1).to({y:6.4},0).wait(1).to({y:6.2},0).wait(1).to({y:6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.5},0).wait(1).to({y:5.2},0).wait(1).to({y:5},0).wait(1).to({y:4.9},0).wait(1).to({y:4.7},0).wait(1).to({y:4.5},0).wait(1).to({y:4.3},0).wait(1).to({y:4.2},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.6},0).wait(1).to({y:3.4},0).wait(1).to({y:3.3},0).wait(1).to({y:3.2},0).wait(1).to({y:3},0).wait(1).to({y:2.9},0).wait(1).to({y:2.8},0).wait(1).to({y:2.6},0).wait(1).to({y:2.5},0).wait(1).to({y:2.4},0).wait(1).to({y:2.3},0).wait(1).to({y:2.1},0).wait(1).to({y:2},0).wait(1).to({y:1.9},0).wait(1).to({y:1.8},0).wait(1).to({y:1.7},0).wait(1).to({y:1.6},0).wait(1).to({y:1.5},0).wait(1).to({y:1.3},0).wait(1).to({y:1.2},0).wait(1).to({y:1.1},0).wait(1).to({y:1},0).wait(1).to({y:0.9},0).wait(1).to({y:0.8},0).wait(1).to({y:0.7},0).wait(1).to({y:0.6},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.3},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(2).to({y:0},0).wait(1).to({y:-0.1},0).wait(1).to({_off:true},1).wait(60));

	// Layer 11
	this.instance_4 = new lib.wheeltread();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3.7,11.5,1,1,0,0,0,3.5,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).wait(1).to({regY:-0.2,y:11.3},0).wait(2).to({y:11.2},0).wait(2).to({y:11.1},0).wait(2).to({y:11},0).wait(2).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.6},0).wait(2).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.7},0).wait(1).to({y:9.6},0).wait(1).to({y:9.4},0).wait(1).to({y:9.3},0).wait(1).to({y:9.2},0).wait(1).to({y:9},0).wait(1).to({y:8.9},0).wait(1).to({y:8.8},0).wait(1).to({y:8.6},0).wait(1).to({y:8.5},0).wait(1).to({y:8.3},0).wait(1).to({y:8.1},0).wait(1).to({y:8},0).wait(1).to({y:7.8},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({y:7.2},0).wait(1).to({y:7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.6},0).wait(1).to({y:6.4},0).wait(1).to({y:6.2},0).wait(1).to({y:6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.5},0).wait(1).to({y:5.2},0).wait(1).to({y:5},0).wait(1).to({y:4.9},0).wait(1).to({y:4.7},0).wait(1).to({y:4.5},0).wait(1).to({y:4.3},0).wait(1).to({y:4.2},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.6},0).wait(1).to({y:3.4},0).wait(1).to({y:3.3},0).wait(1).to({y:3.2},0).wait(1).to({y:3},0).wait(1).to({y:2.9},0).wait(1).to({y:2.8},0).wait(1).to({y:2.6},0).wait(1).to({y:2.5},0).wait(1).to({y:2.4},0).wait(1).to({y:2.3},0).wait(1).to({y:2.1},0).wait(1).to({y:2},0).wait(1).to({y:1.9},0).wait(1).to({y:1.8},0).wait(1).to({y:1.7},0).wait(1).to({y:1.6},0).wait(1).to({y:1.5},0).wait(1).to({y:1.3},0).wait(1).to({y:1.2},0).wait(1).to({y:1.1},0).wait(1).to({y:1},0).wait(1).to({y:0.9},0).wait(1).to({y:0.8},0).wait(1).to({y:0.7},0).wait(1).to({y:0.6},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.3},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(2).to({y:0},0).wait(1).to({y:-0.1},0).wait(1).to({_off:true},1).wait(80));

	// Layer 9
	this.instance_5 = new lib.wheeltread();
	this.instance_5.parent = this;
	this.instance_5.setTransform(3.7,11.5,1,1,0,0,0,3.5,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).wait(1).to({regY:-0.2,y:11.3},0).wait(2).to({y:11.2},0).wait(2).to({y:11.1},0).wait(2).to({y:11},0).wait(2).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.6},0).wait(2).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.7},0).wait(1).to({y:9.6},0).wait(1).to({y:9.4},0).wait(1).to({y:9.3},0).wait(1).to({y:9.2},0).wait(1).to({y:9},0).wait(1).to({y:8.9},0).wait(1).to({y:8.8},0).wait(1).to({y:8.6},0).wait(1).to({y:8.5},0).wait(1).to({y:8.3},0).wait(1).to({y:8.1},0).wait(1).to({y:8},0).wait(1).to({y:7.8},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({y:7.2},0).wait(1).to({y:7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.6},0).wait(1).to({y:6.4},0).wait(1).to({y:6.2},0).wait(1).to({y:6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.5},0).wait(1).to({y:5.2},0).wait(1).to({y:5},0).wait(1).to({y:4.9},0).wait(1).to({y:4.7},0).wait(1).to({y:4.5},0).wait(1).to({y:4.3},0).wait(1).to({y:4.2},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.6},0).wait(1).to({y:3.4},0).wait(1).to({y:3.3},0).wait(1).to({y:3.2},0).wait(1).to({y:3},0).wait(1).to({y:2.9},0).wait(1).to({y:2.8},0).wait(1).to({y:2.6},0).wait(1).to({y:2.5},0).wait(1).to({y:2.4},0).wait(1).to({y:2.3},0).wait(1).to({y:2.1},0).wait(1).to({y:2},0).wait(1).to({y:1.9},0).wait(1).to({y:1.8},0).wait(1).to({y:1.7},0).wait(1).to({y:1.6},0).wait(1).to({y:1.5},0).wait(1).to({y:1.3},0).wait(1).to({y:1.2},0).wait(1).to({y:1.1},0).wait(1).to({y:1},0).wait(1).to({y:0.9},0).wait(1).to({y:0.8},0).wait(1).to({y:0.7},0).wait(1).to({y:0.6},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.3},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(2).to({y:0},0).wait(1).to({y:-0.1},0).wait(1).to({_off:true},1).wait(100));

	// Layer 7
	this.instance_6 = new lib.wheeltread();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.7,11.5,1,1,0,0,0,3.5,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).wait(1).to({regY:-0.2,y:11.3},0).wait(2).to({y:11.2},0).wait(2).to({y:11.1},0).wait(2).to({y:11},0).wait(2).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.6},0).wait(2).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.7},0).wait(1).to({y:9.6},0).wait(1).to({y:9.4},0).wait(1).to({y:9.3},0).wait(1).to({y:9.2},0).wait(1).to({y:9},0).wait(1).to({y:8.9},0).wait(1).to({y:8.8},0).wait(1).to({y:8.6},0).wait(1).to({y:8.5},0).wait(1).to({y:8.3},0).wait(1).to({y:8.1},0).wait(1).to({y:8},0).wait(1).to({y:7.8},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({y:7.2},0).wait(1).to({y:7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.6},0).wait(1).to({y:6.4},0).wait(1).to({y:6.2},0).wait(1).to({y:6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.5},0).wait(1).to({y:5.2},0).wait(1).to({y:5},0).wait(1).to({y:4.9},0).wait(1).to({y:4.7},0).wait(1).to({y:4.5},0).wait(1).to({y:4.3},0).wait(1).to({y:4.2},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.6},0).wait(1).to({y:3.4},0).wait(1).to({y:3.3},0).wait(1).to({y:3.2},0).wait(1).to({y:3},0).wait(1).to({y:2.9},0).wait(1).to({y:2.8},0).wait(1).to({y:2.6},0).wait(1).to({y:2.5},0).wait(1).to({y:2.4},0).wait(1).to({y:2.3},0).wait(1).to({y:2.1},0).wait(1).to({y:2},0).wait(1).to({y:1.9},0).wait(1).to({y:1.8},0).wait(1).to({y:1.7},0).wait(1).to({y:1.6},0).wait(1).to({y:1.5},0).wait(1).to({y:1.3},0).wait(1).to({y:1.2},0).wait(1).to({y:1.1},0).wait(1).to({y:1},0).wait(1).to({y:0.9},0).wait(1).to({y:0.8},0).wait(1).to({y:0.7},0).wait(1).to({y:0.6},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.3},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(2).to({y:0},0).wait(1).to({y:-0.1},0).wait(1).to({_off:true},1).wait(120));

	// Layer 5
	this.instance_7 = new lib.wheeltread();
	this.instance_7.parent = this;
	this.instance_7.setTransform(3.7,11.5,1,1,0,0,0,3.5,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).wait(1).to({regY:-0.2,y:11.3},0).wait(2).to({y:11.2},0).wait(2).to({y:11.1},0).wait(2).to({y:11},0).wait(2).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.6},0).wait(2).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.7},0).wait(1).to({y:9.6},0).wait(1).to({y:9.4},0).wait(1).to({y:9.3},0).wait(1).to({y:9.2},0).wait(1).to({y:9},0).wait(1).to({y:8.9},0).wait(1).to({y:8.8},0).wait(1).to({y:8.6},0).wait(1).to({y:8.5},0).wait(1).to({y:8.3},0).wait(1).to({y:8.1},0).wait(1).to({y:8},0).wait(1).to({y:7.8},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({y:7.2},0).wait(1).to({y:7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.6},0).wait(1).to({y:6.4},0).wait(1).to({y:6.2},0).wait(1).to({y:6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.5},0).wait(1).to({y:5.2},0).wait(1).to({y:5},0).wait(1).to({y:4.9},0).wait(1).to({y:4.7},0).wait(1).to({y:4.5},0).wait(1).to({y:4.3},0).wait(1).to({y:4.2},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.6},0).wait(1).to({y:3.4},0).wait(1).to({y:3.3},0).wait(1).to({y:3.2},0).wait(1).to({y:3},0).wait(1).to({y:2.9},0).wait(1).to({y:2.8},0).wait(1).to({y:2.6},0).wait(1).to({y:2.5},0).wait(1).to({y:2.4},0).wait(1).to({y:2.3},0).wait(1).to({y:2.1},0).wait(1).to({y:2},0).wait(1).to({y:1.9},0).wait(1).to({y:1.8},0).wait(1).to({y:1.7},0).wait(1).to({y:1.6},0).wait(1).to({y:1.5},0).wait(1).to({y:1.3},0).wait(1).to({y:1.2},0).wait(1).to({y:1.1},0).wait(1).to({y:1},0).wait(1).to({y:0.9},0).wait(1).to({y:0.8},0).wait(1).to({y:0.7},0).wait(1).to({y:0.6},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.3},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(2).to({y:0},0).wait(1).to({y:-0.1},0).wait(1).to({_off:true},1).wait(140));

	// Layer 2
	this.instance_8 = new lib.wheeltread();
	this.instance_8.parent = this;
	this.instance_8.setTransform(3.7,11.5,1,1,0,0,0,3.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:-0.2,y:11.3},0).wait(2).to({y:11.2},0).wait(2).to({y:11.1},0).wait(2).to({y:11},0).wait(2).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.6},0).wait(2).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.7},0).wait(1).to({y:9.6},0).wait(1).to({y:9.4},0).wait(1).to({y:9.3},0).wait(1).to({y:9.2},0).wait(1).to({y:9},0).wait(1).to({y:8.9},0).wait(1).to({y:8.8},0).wait(1).to({y:8.6},0).wait(1).to({y:8.5},0).wait(1).to({y:8.3},0).wait(1).to({y:8.1},0).wait(1).to({y:8},0).wait(1).to({y:7.8},0).wait(1).to({y:7.6},0).wait(1).to({y:7.4},0).wait(1).to({y:7.2},0).wait(1).to({y:7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.6},0).wait(1).to({y:6.4},0).wait(1).to({y:6.2},0).wait(1).to({y:6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.5},0).wait(1).to({y:5.2},0).wait(1).to({y:5},0).wait(1).to({y:4.9},0).wait(1).to({y:4.7},0).wait(1).to({y:4.5},0).wait(1).to({y:4.3},0).wait(1).to({y:4.2},0).wait(1).to({y:4},0).wait(1).to({y:3.9},0).wait(1).to({y:3.7},0).wait(1).to({y:3.6},0).wait(1).to({y:3.4},0).wait(1).to({y:3.3},0).wait(1).to({y:3.2},0).wait(1).to({y:3},0).wait(1).to({y:2.9},0).wait(1).to({y:2.8},0).wait(1).to({y:2.6},0).wait(1).to({y:2.5},0).wait(1).to({y:2.4},0).wait(1).to({y:2.3},0).wait(1).to({y:2.1},0).wait(1).to({y:2},0).wait(1).to({y:1.9},0).wait(1).to({y:1.8},0).wait(1).to({y:1.7},0).wait(1).to({y:1.6},0).wait(1).to({y:1.5},0).wait(1).to({y:1.3},0).wait(1).to({y:1.2},0).wait(1).to({y:1.1},0).wait(1).to({y:1},0).wait(1).to({y:0.9},0).wait(1).to({y:0.8},0).wait(1).to({y:0.7},0).wait(1).to({y:0.6},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.3},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(2).to({y:0},0).wait(1).to({y:-0.1},0).wait(1).to({_off:true},1).wait(159));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#373535","#978259","#C9AB6C","#978259","#373535"],[0,0.184,0.506,0.792,1],0,-5,0,5.4).s().p("AgiA6IAAhzIBFAAIAABzg");
	this.shape.setTransform(3.7,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,7.6,11.8);


(lib.rover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(1.6,-1.8,2.609,2.609,0,0,0,5.9,9.3);
	this.instance.alpha = 0.422;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BDC0C2").ss(0.5,0,0,4).p("AAigxIAAguIhDAAIAAAuIgWAAIAACRIBvAAIAAiRg");
	this.shape.setTransform(0.3,-1.9,2.609,2.61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#194257","#0079BA","#7AA4D2","#006CA4","#194257"],[0,0.31,0.557,0.804,1],3.9,-8.7,-2.2,8.8).s().p("Ag3BgIAAiRIAWAAIAAguIBDAAIAAAuIAWAAIAACRg");
	this.shape_1.setTransform(0.3,-1.9,2.609,2.61);

	this.wheel4 = new lib.wheel();
	this.wheel4.parent = this;
	this.wheel4.setTransform(12.8,19.9,1,1,0,0,0,3.6,5.8);

	this.wheel5 = new lib.wheel();
	this.wheel5.parent = this;
	this.wheel5.setTransform(12.8,0,1,1,0,0,0,3.6,5.8);

	this.wheel6 = new lib.wheel();
	this.wheel6.parent = this;
	this.wheel6.setTransform(12.8,-22.2,1,1,0,0,0,3.6,5.8);

	this.wheel1 = new lib.wheel();
	this.wheel1.parent = this;
	this.wheel1.setTransform(-12.2,20.2,1,1,0,0,0,3.6,5.8);

	this.wheel2 = new lib.wheel();
	this.wheel2.parent = this;
	this.wheel2.setTransform(-12.2,0.2,1,1,0,0,0,3.6,5.8);

	this.wheel3 = new lib.wheel();
	this.wheel3.parent = this;
	this.wheel3.setTransform(-12.2,-22.2,1,1,0,0,0,3.6,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wheel3},{t:this.wheel2},{t:this.wheel1},{t:this.wheel6},{t:this.wheel5},{t:this.wheel4},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rover, new cjs.Rectangle(-15.9,-28,32.6,54.2), null);


// stage content:
(lib.map_coordinates_canvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{beginning:72});

	// timeline functions:
	this.frame_0 = function() {
		playSound("maps_p01_titlewav");
	}
	this.frame_72 = function() {
		var rover = exportRoot.rover;
		
		function roverStartRoll() {
			rover.wheel1.gotoAndPlay(79);
			rover.wheel2.gotoAndPlay(79);
			rover.wheel3.gotoAndPlay(79);
			rover.wheel4.gotoAndPlay(79);
			rover.wheel5.gotoAndPlay(79);
			rover.wheel6.gotoAndPlay(79);
		}
		
		roverStartRoll();
	}
	this.frame_138 = function() {
		playSound("maps_p02_onTheSurfacewav");
	}
	this.frame_147 = function() {
		var rover = exportRoot.rover;
		
		roverBrakes();
		
		function roverBrakes() {
			rover.wheel1.stop();
			rover.wheel2.stop();
			rover.wheel3.stop();
			rover.wheel4.stop();
			rover.wheel5.stop();
			rover.wheel6.stop();
		}
	}
	this.frame_316 = function() {
		var rover = exportRoot.rover;
		
		roverKeepRoll();
		
		function roverKeepRoll() {
			rover.wheel1.play();
			rover.wheel2.play();
			rover.wheel3.play();
			rover.wheel4.play();
			rover.wheel5.play();
			rover.wheel6.play();
		}
	}
	this.frame_336 = function() {
		var rover = exportRoot.rover;
		
		roverBrakes();
		
		function roverBrakes() {
			rover.wheel1.stop();
			rover.wheel2.stop();
			rover.wheel3.stop();
			rover.wheel4.stop();
			rover.wheel5.stop();
			rover.wheel6.stop();
		}
	}
	this.frame_342 = function() {
		var rover = exportRoot.rover;
		
		roverKeepRoll();
		
		function roverKeepRoll() {
			rover.wheel1.play();
			rover.wheel2.play();
			rover.wheel3.play();
			rover.wheel4.play();
			rover.wheel5.play();
			rover.wheel6.play();
		}
	}
	this.frame_349 = function() {
		playSound("maps_p03_northwav");
	}
	this.frame_412 = function() {
		var rover = exportRoot.rover;
		
		roverBrakes();
		
		function roverBrakes() {
			rover.wheel1.stop();
			rover.wheel2.stop();
			rover.wheel3.stop();
			rover.wheel4.stop();
			rover.wheel5.stop();
			rover.wheel6.stop();
		}
	}
	this.frame_418 = function() {
		var rover = exportRoot.rover;
		
		roverKeepRoll();
		
		function roverKeepRoll() {
			rover.wheel1.play();
			rover.wheel2.play();
			rover.wheel3.play();
			rover.wheel4.play();
			rover.wheel5.play();
			rover.wheel6.play();
		}
	}
	this.frame_438 = function() {
		var rover = exportRoot.rover;
		
		roverBrakes();
		
		function roverBrakes() {
			rover.wheel1.stop();
			rover.wheel2.stop();
			rover.wheel3.stop();
			rover.wheel4.stop();
			rover.wheel5.stop();
			rover.wheel6.stop();
		}
	}
	this.frame_444 = function() {
		var rover = exportRoot.rover;
		
		roverKeepRoll();
		
		function roverKeepRoll() {
			rover.wheel1.play();
			rover.wheel2.play();
			rover.wheel3.play();
			rover.wheel4.play();
			rover.wheel5.play();
			rover.wheel6.play();
		}
	}
	this.frame_445 = function() {
		playSound("maps_p04_eastwav");
	}
	this.frame_508 = function() {
		var rover = exportRoot.rover;
		
		roverBrakes();
		
		function roverBrakes() {
			rover.wheel1.stop();
			rover.wheel2.stop();
			rover.wheel3.stop();
			rover.wheel4.stop();
			rover.wheel5.stop();
			rover.wheel6.stop();
		}
	}
	this.frame_520 = function() {
		var rover = exportRoot.rover;
		
		roverKeepRoll();
		
		function roverKeepRoll() {
			rover.wheel1.play();
			rover.wheel2.play();
			rover.wheel3.play();
			rover.wheel4.play();
			rover.wheel5.play();
			rover.wheel6.play();
		}
	}
	this.frame_547 = function() {
		playSound("maps_p05_southwav");
	}
	this.frame_609 = function() {
		var rover = exportRoot.rover;
		
		roverBrakes();
		
		function roverBrakes() {
			rover.wheel1.stop();
			rover.wheel2.stop();
			rover.wheel3.stop();
			rover.wheel4.stop();
			rover.wheel5.stop();
			rover.wheel6.stop();
		}
	}
	this.frame_616 = function() {
		var rover = exportRoot.rover;
		
		roverKeepRoll();
		
		function roverKeepRoll() {
			rover.wheel1.play();
			rover.wheel2.play();
			rover.wheel3.play();
			rover.wheel4.play();
			rover.wheel5.play();
			rover.wheel6.play();
		}
	}
	this.frame_636 = function() {
		var rover = exportRoot.rover;
		
		roverBrakes();
		
		function roverBrakes() {
			rover.wheel1.stop();
			rover.wheel2.stop();
			rover.wheel3.stop();
			rover.wheel4.stop();
			rover.wheel5.stop();
			rover.wheel6.stop();
		}
	}
	this.frame_642 = function() {
		var rover = exportRoot.rover;
		
		roverKeepRoll();
		
		function roverKeepRoll() {
			rover.wheel1.play();
			rover.wheel2.play();
			rover.wheel3.play();
			rover.wheel4.play();
			rover.wheel5.play();
			rover.wheel6.play();
		}
	}
	this.frame_646 = function() {
		playSound("maps_p06_westwav");
	}
	this.frame_701 = function() {
		playSound("maps_p07_anythingInBetweenwav");
	}
	this.frame_780 = function() {
		playSound("maps_p08_ifTheRoverwav");
	}
	this.frame_1016 = function() {
		playSound("maps_p09_theRoverWillMovewav");
	}
	this.frame_1150 = function() {
		var rover = exportRoot.rover;
		
		roverBrakes();
		
		function roverBrakes() {
			rover.wheel1.stop();
			rover.wheel2.stop();
			rover.wheel3.stop();
			rover.wheel4.stop();
			rover.wheel5.stop();
			rover.wheel6.stop();
		}
	}
	this.frame_1156 = function() {
		var rover = exportRoot.rover;
		
		roverKeepRoll();
		
		function roverKeepRoll() {
			rover.wheel1.play();
			rover.wheel2.play();
			rover.wheel3.play();
			rover.wheel4.play();
			rover.wheel5.play();
			rover.wheel6.play();
		}
	}
	this.frame_1208 = function() {
		var rover = exportRoot.rover;
		
		roverBrakes();
		
		function roverBrakes() {
			rover.wheel1.stop();
			rover.wheel2.stop();
			rover.wheel3.stop();
			rover.wheel4.stop();
			rover.wheel5.stop();
			rover.wheel6.stop();
		}
	}
	this.frame_1226 = function() {
		playSound("maps_p10_theSecondNumberwav");
	}
	this.frame_1364 = function() {
		playSound("maps_p11_theRoverWillMovewav");
	}
	this.frame_1471 = function() {
		var rover = exportRoot.rover;
		
		roverKeepRoll();
		
		function roverKeepRoll() {
			rover.wheel1.play();
			rover.wheel2.play();
			rover.wheel3.play();
			rover.wheel4.play();
			rover.wheel5.play();
			rover.wheel6.play();
		}
	}
	this.frame_1520 = function() {
		var rover = exportRoot.rover;
		
		roverBrakes();
		
		function roverBrakes() {
			rover.wheel1.stop();
			rover.wheel2.stop();
			rover.wheel3.stop();
			rover.wheel4.stop();
			rover.wheel5.stop();
			rover.wheel6.stop();
		}
	}
	this.frame_1531 = function() {
		playSound("maps_p12_aGraphUsingwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72).call(this.frame_72).wait(66).call(this.frame_138).wait(9).call(this.frame_147).wait(169).call(this.frame_316).wait(20).call(this.frame_336).wait(6).call(this.frame_342).wait(7).call(this.frame_349).wait(63).call(this.frame_412).wait(6).call(this.frame_418).wait(20).call(this.frame_438).wait(6).call(this.frame_444).wait(1).call(this.frame_445).wait(63).call(this.frame_508).wait(12).call(this.frame_520).wait(27).call(this.frame_547).wait(62).call(this.frame_609).wait(7).call(this.frame_616).wait(20).call(this.frame_636).wait(6).call(this.frame_642).wait(4).call(this.frame_646).wait(55).call(this.frame_701).wait(79).call(this.frame_780).wait(236).call(this.frame_1016).wait(134).call(this.frame_1150).wait(6).call(this.frame_1156).wait(52).call(this.frame_1208).wait(18).call(this.frame_1226).wait(138).call(this.frame_1364).wait(107).call(this.frame_1471).wait(49).call(this.frame_1520).wait(11).call(this.frame_1531).wait(290));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdBfQgQgEgMgHQgMgIgIgMQgIgNAAgSIAwAAQAAAIAEAGQADAGAGAEQAFAEAHABIAOACIALgBIALgEQAFgDADgEQADgFAAgHQAAgLgPgGQgQgGgagFIgWgGQgKgEgJgEQgIgGgFgIQgFgJAAgMQAAgSAHgMQAHgLAMgHQALgHAPgCQAOgDAPAAQAOAAAOADQAPADALAHQALAHAHALQAIALABARIgxAAQgBgOgKgFQgKgGgMAAIgKABIgJACIgHAFQgDAEAAAGQAAAGAFAFQAFAEAIADIASAFIAVAEIAWAGQALAEAIAGQAIAFAFAJQAFAIAAANQAAATgHAMQgIANgLAHQgMAIgQADQgPADgQAAQgPAAgPgDg");
	this.shape.setTransform(459.9,203.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBbQgSgHgMgNQgNgNgGgSQgHgSAAgWQAAgTAHgTQAHgSAMgNQANgNASgHQARgIAUAAQAYAAASAJQAIAFAIAGQAHAGAGAIQALAPAFAUQAFAUgBAVIiGAAQABAMADAJQADAJAGAGQALALAVAAQAPAAAMgIQALgIACgIIAtAAQgFAQgIAMQgJAMgLAIQgWAOggAAQgVAAgRgHgAgTg2QgIAEgFAGQgEAGgCAHIgDAMIBSAAQgDgTgJgKQgFgFgHgDQgHgCgJAAQgLAAgJAEg");
	this.shape_1.setTransform(439.9,203.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAIB4QgKgCgIgEQgIgFgFgIQgFgJAAgOIAAhtIgfAAIAAgiIAfAAIAAg4IAyAAIAAA4IAmAAIAAAiIgmAAIAABbQAAANAFAFQAEAEANAAIAIgBIAIgBIAAAoIgPACIgPAAg");
	this.shape_2.setTransform(423.1,201.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_3.setTransform(406.5,203.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkBfIAAhnIgCgVQgBgIgEgGQgEgFgGgDQgGgDgKgBQgTAAgKANQgFAHgCAKQgCAJAAAPIAABgIgzAAIAAi4IAwAAIAAAZIABAAQAKgQAQgHQAOgIAQAAQAVABANAFQANAGAIAJQAHALADANQADAPAAARIAABxg");
	this.shape_4.setTransform(385.6,203.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYCAIAAi4IAxAAIAAC4gAgYhWIAAgpIAxAAIAAApg");
	this.shape_5.setTransform(370.4,200.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgvB7QgQgIgKgOQgKgOgGgSQgFgSAAgTQAAgTAFgRQAGgRAKgNQAKgOAQgIQAHgEAJgCQAJgCALAAQAPAAAPAHQAPAHAJAOIABAAIAAheIAzAAIAAEAIgxAAIAAgXIgBAAQgJAPgOAGQgPAHgRAAQgVAAgQgIgAgTgUQgJAFgFAIQgFAHgCALQgDAKAAAMQAAALADALQACAKAGAJQAGAIAIAGQAJAFAKAAQANAAAIgFQAJgFAFgJQAFgIACgLQACgLAAgLQAAgMgCgKQgCgLgFgHQgFgIgJgFQgIgFgNAAQgLAAgJAFg");
	this.shape_6.setTransform(354.4,200.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag7BfIAAi4IAxAAIAAAiIAAAAQAEgIAGgIQAFgHAIgGQAIgFAJgDQAJgCAJgBIAMACIAAAvIgJgBIgJAAQgOAAgKAFQgKAEgGAIQgFAJgDAKQgCALAAAMIAABTg");
	this.shape_7.setTransform(338.4,203.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnBbQgRgHgNgNQgMgMgIgSQgHgSAAgXQAAgVAHgSQAIgSAMgNQANgNARgHQASgHAVAAQAOAAAZAHQATAHAMANQAMANAIASQAGAZABAOQgDAdgEAMQgIASgMAMQgMANgTAHQgRAHgWAAQgVAAgSgHgAgVg1QgJAFgFAIQgFAJgCAKQgCALAAAKQAAAMACAKQACALAFAIQAFAJAJAFQAJAFAMAAQANAAAIgFQAJgFAGgJQAFgIACgLQACgKAAgMQAAgKgCgLQgCgKgFgJQgGgIgJgFQgIgFgNAAQgMAAgJAFg");
	this.shape_8.setTransform(319.5,203.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnBbQgRgHgNgNQgMgMgIgSQgGgSgBgXQABgVAGgSQAIgSAMgNQANgNARgHQASgHAVAAQAPAAAYAHQATAHAMANQAMANAHASQAHAZABAOQgDAdgFAMQgHASgMAMQgMANgTAHQgSAHgVAAQgVAAgSgHgAgVg1QgJAFgFAIQgFAJgCAKQgCALAAAKQAAAMACAKQACALAFAIQAFAJAJAFQAJAFAMAAQAMAAAJgFQAKgFAEgJQAGgIACgLQACgKAAgMQAAgKgCgLQgCgKgGgJQgEgIgKgFQgJgFgMAAQgMAAgJAFg");
	this.shape_9.setTransform(297.5,203.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgtB8QgMgFgKgHQgKgHgIgJQgQgSgJgYQgJgZAAgcQAAgcAJgZQAEgMAHgKQAGgLAIgKQAIgIAKgIQAKgHAMgGQAXgKAdABQAVgBATAHQATAFAPANQAPALAJASQAKAQADAXIg3AAQgBgKgGgIQgFgIgHgGQgIgGgJgDQgKgEgKAAQgSAAgOAHQgNAHgIANQgJANgDAPQgEAQAAAQQAAAQAEAQQADAPAJAMQAIAMANAIQAOAHASAAQANAAAKgEQAKgEAHgIQAPgQADgaIA3AAQgFAfgGANQgJATgPAOQgPAOgUAHQgTAHgYABQgdAAgXgLg");
	this.shape_10.setTransform(273.2,200.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgvB7QgQgIgKgOQgKgOgGgSQgFgSAAgTQAAgTAFgRQAGgRAKgNQAKgOAQgIQAHgEAJgCQAJgCALAAQAPAAAPAHQAPAHAJAOIABAAIAAheIAzAAIAAEAIgxAAIAAgXIgBAAQgJAPgOAGQgPAHgRAAQgVAAgQgIgAgTgUQgJAFgFAIQgFAHgCALQgDAKAAAMQAAALADALQACAKAGAJQAGAIAIAGQAJAFAKAAQANAAAIgFQAJgFAFgJQAFgIACgLQACgLAAgLQAAgMgCgKQgCgLgFgHQgFgIgJgFQgIgFgNAAQgLAAgJAFg");
	this.shape_11.setTransform(238.5,200.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAkBfIAAhnIgCgVQgBgIgEgGQgEgFgGgDQgGgDgKgBQgTAAgKANQgFAHgCAKQgCAJAAAPIAABgIgzAAIAAi4IAwAAIAAAZIABAAQAKgQAQgHQAOgIAQAAQAVABANAFQANAGAIAJQAHALADANQADAPAAARIAABxg");
	this.shape_12.setTransform(217.3,203.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_13.setTransform(196.2,203.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdBfQgQgEgMgHQgMgIgIgMQgIgNAAgSIAwAAQAAAIAEAGQADAGAGAEQAFAEAHABIAOACIALgBIALgEQAFgDADgEQADgFAAgHQAAgLgPgGQgQgGgagFIgWgGQgKgEgJgEQgIgGgFgIQgFgJAAgMQAAgSAHgMQAHgLAMgHQALgHAPgCQAOgDAPAAQAOAAAOADQAPADALAHQALAHAHALQAIALABARIgxAAQgBgOgKgFQgKgGgMAAIgKABIgJACIgHAFQgDAEAAAGQAAAGAFAFQAFAEAIADIASAFIAVAEIAWAGQALAEAIAGQAIAFAFAJQAFAIAAANQAAATgHAMQgIANgLAHQgMAIgQADQgPADgQAAQgPAAgPgDg");
	this.shape_14.setTransform(166.3,203.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AheCAIAAj6IAxAAIAAAYIAAAAQAKgPAOgIQAPgGAQAAQAWAAAQAIQAQAJAKANQAKAOAFASQAGASAAAUQAAASgGARQgFARgKANQgKAOgPAIQgIADgJADIgTABQgQABgPgIQgPgGgJgOIgBAAIAABYgAgVhUQgJAGgFAIQgFAJgCAKQgDALAAALQAAALADAMQACAJAFAIQAGAJAIAEQAJAGAMgBQAMABAIgGQAJgEAFgJQAFgIACgJQACgMAAgLQAAgKgCgMQgCgLgGgIQgFgIgIgGQgJgEgLAAQgNAAgIAEg");
	this.shape_15.setTransform(146.1,206.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_16.setTransform(124.3,203.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABVCAIAAi1IAAAAIg/C1IgrAAIg/izIgBAAIAACzIg0AAIAAj/IBPAAIA7CvIABAAIA5ivIBPAAIAAD/g");
	this.shape_17.setTransform(97.7,200.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},57).wait(1764));

	// text - labels
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_18.setTransform(523.1,218.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_19.setTransform(517.6,217.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATAnIgTgdIgSAdIgRAAIAcgnIgbgmIASAAIARAbIASgbIAQAAIgbAmIAcAng");
	this.shape_20.setTransform(512.2,218.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAHgFALgCIAUgCQAEgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAGQgCACAAAHIgNAAQABgPAIgFQAKgHAMAAQAMABAJAFQAIAFAAALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgEABIgFAAQgHAAgDgEQgCgDAAgEQgEAFgHAEQgHAEgJgBQgLAAgHgGgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQAKgFABgMIAAgKIgHACg");
	this.shape_21.setTransform(504.5,218.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_22.setTransform(493.9,217.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_23.setTransform(488.2,218.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAPABQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_24.setTransform(480.2,218.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAQAnIgQg7IgPA7IgNAAIgXhNIAPAAIAOA9IAPg9IAPAAIAPA8IAQg8IANAAIgXBNg");
	this.shape_25.setTransform(470.7,218.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAHIAAgNIAkAAIAAANg");
	this.shape_26.setTransform(462.8,218.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_27.setTransform(458.2,217.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_28.setTransform(452.5,218.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAGgFALgCIAVgCQAFgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAGQgDACgBAHIgMAAQAAgPAKgFQAIgHAMAAQAOABAIAFQAJAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgFABIgEAAQgHAAgDgEQgBgDgBgEQgEAFgIAEQgGAEgJgBQgLAAgHgGgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQALgFAAgMIAAgKIgGACg");
	this.shape_29.setTransform(444.7,218.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmA2IAAhrIBMAAIAAANIg/AAIAAAhIA7AAIAAALIg7AAIAAAlIBAAAIAAANg");
	this.shape_30.setTransform(435.7,217.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQBGQAMgWADgLQAFgQgBgVQAAgUgEgRQgFgLgKgVIAJAAIANAWIAEAMQAEAJACAJIABARQAAAVgHARQgEALgNAVg");
	this.shape_31.setTransform(362.3,266.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbAmQgIgOAAgXQAAgRAFgNQAIgYAWAAQAUAAAJARQAHANAAAWQAAAVgGAOQgJAUgVAAQgSAAgJgQgAgPgeQgGALAAAUQAAAQAEAKQAFAPAMAAQAKAAAGgJQAGgJAAgYQAAgSgEgMQgFgLgMAAQgLAAgFALg");
	this.shape_32.setTransform(355.9,265.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHAMQAFgBACgGIAAgFIAAgBIAAgBIgHAAIAAgQIAPAAIAAAPQAAAHgEAHQgDAGgIACg");
	this.shape_33.setTransform(349.7,270.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgbAmQgIgOAAgXQAAgRAFgNQAIgYAWAAQAUAAAJARQAHANAAAWQAAAVgGAOQgJAUgVAAQgSAAgJgQgAgPgeQgGALAAAUQAAAQAEAKQAFAPAMAAQAKAAAGgJQAGgJAAgYQAAgSgEgMQgFgLgMAAQgLAAgFALg");
	this.shape_34.setTransform(343.4,265.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAIBGIgMgVIgGgNQgEgKgBgNIgBgMQAAgVAGgRQAFgKAMgWIAKAAQgLAXgEAKQgEAQgBAUQAAAVAGASQADALALAUg");
	this.shape_35.setTransform(337.2,266.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgCgEQgEgIgJABIgHABQgGABgEAFQgDAEAAAEIgBAMIAAAoIgOAAIAAhOIANAAIAAAMQAGgHAGgDQAFgDAIAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_36.setTransform(326.1,266.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAzQgJgFgBgNIAOAAQAAAFADAEQAFAEAJAAQAOAAAFgLIACgJIABgOQgEAHgGACQgFAEgJAAQgMgBgKgIQgJgKAAgUQAAgTAJgLQAKgMANABQAJgBAGAFIAIAHIAAgJIAMAAIAABGQAAAPgEAJQgIAPgWAAQgNABgIgGgAgRgeQgDAGAAAMQAAAMAGAHQAFAHAJAAQANAAAGgNQADgHAAgJQAAgPgGgGQgGgIgJAAQgNABgFANg");
	this.shape_37.setTransform(314.2,267.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_38.setTransform(308.7,264.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgSAoIAAhOIANAAIAAAOQABgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_39.setTransform(305,266.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_40.setTransform(296.3,264.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#373535").ss(1,0,0,4).p("Ai+iwIF9Fh");
	this.shape_41.setTransform(302.9,236.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgWAWQgJgJAAgNQAAgNAJgJQAKgJAMAAQANAAAKAJQAJAJAAANQAAANgJAJIAAAAQgKAKgNAAQgMAAgKgKg");
	this.shape_42.setTransform(281.5,217);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEALgCIATgDQAFAAACgDIABgGQgBgGgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQAAgOAKgGQAIgFANgBQAMAAAJAGQAJAFgBAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEACIgFAAQgHAAgDgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQAKgFABgNIAAgJIgHABg");
	this.shape_43.setTransform(310.7,60.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgCgEQgDgGgKAAQgIgBgGAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_44.setTransform(298.1,59.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQgBAGACAEQAEAHAJAAQANAAAEgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_45.setTransform(285.5,60.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_46.setTransform(277.2,60.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgSAHIAAgNIAkAAIAAANg");
	this.shape_47.setTransform(263.2,60.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgGgKAAQgHgBgHAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_48.setTransform(256.6,59.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAHAAAIIAAAsg");
	this.shape_49.setTransform(246.2,60.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_50.setTransform(239.1,60.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAaA2Ig1hWIAABWIgOAAIAAhrIARAAIA1BWIAAhWIANAAIAABrg");
	this.shape_51.setTransform(229.6,59.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:458.2,y:217.7}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:488.2,y:218.8}},{t:this.shape_22,p:{x:493.9,y:217.7}},{t:this.shape_21},{t:this.shape_20,p:{x:512.2,y:218.8}},{t:this.shape_19,p:{x:517.6,y:217.3}},{t:this.shape_18,p:{x:523.1,y:218.8}}]},812).to({state:[]},184).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_19,p:{x:320.3,y:264.8}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},20).to({state:[]},95).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_27,p:{x:250.2,y:59.7}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_23,p:{x:269.4,y:60.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_22,p:{x:291.7,y:59.7}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_20,p:{x:318.3,y:60.8}},{t:this.shape_19,p:{x:323.8,y:59.3}},{t:this.shape_18,p:{x:329.2,y:60.8}}]},130).to({state:[]},85).wait(495));

	// text - narration
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAOAAIAAAPg");
	this.shape_52.setTransform(380.4,49.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_53.setTransform(372.1,49.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGAIIAAgPIAOAAIAAAPg");
	this.shape_54.setTransform(363.8,49.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOABgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_55.setTransform(353.4,46.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQABQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHAAQgOABgJgLgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_56.setTransform(344.9,45.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQABAGABAEQAEAHAJAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgCAEgEADQgIAGgJAAQgRAAgGgLg");
	this.shape_57.setTransform(336.8,46.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_58.setTransform(331.1,45.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAeQgJgLAAgRQAAgUAKgLQAKgMAOAAQANAAAIAHQAJAGABAQIgMAAQgCgIgEgEQgEgFgJAAQgLAAgGANQgDAHgBALQAAAMAGAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgJAHQgKAIgNgBQgPABgIgMg");
	this.shape_59.setTransform(325.7,46.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AASAoIAAgwQAAgIgBgEQgEgIgJABIgHABQgFABgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhOIANAAIAAAMQAFgHAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_60.setTransform(317.8,46.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_61.setTransform(311.9,45.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_62.setTransform(302.4,46.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AATAoIAAgwQAAgIgCgEQgEgIgJABIgHABQgGABgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhOIANAAIAAAMQAFgHAHgDQAFgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_63.setTransform(294.5,46.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_64.setTransform(286.1,46.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_65.setTransform(280.4,45.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_66.setTransform(276.6,45.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgXAeQgKgLABgRQgBgUALgLQAKgMAOAAQANAAAIAHQAJAGABAQIgMAAQgBgIgFgEQgEgFgJAAQgLAAgGANQgEAHAAALQABAMAFAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgKAHQgJAIgNgBQgPABgIgMg");
	this.shape_67.setTransform(270.9,46.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOABgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_68.setTransform(262.9,46.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgSAoIAAhOIANAAIAAAOQABgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_69.setTransform(256.8,46.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_70.setTransform(252.2,45.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQABQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHAAQgOABgJgLgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_71.setTransform(246.1,45.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOABgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_72.setTransform(233.9,46.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_73.setTransform(228.2,45.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgOAzIgIgIIAAAKIgMAAIAAhrIANAAIAAAnQAEgGAHgDQAGgDAGAAQAOAAAJAKQAKAKAAATQAAATgJAMQgJAMgRAAQgHAAgHgEgAgPgIQgHAGAAAPQAAALADAHQAFANAOAAQAKAAAGgJQAFgIAAgOQAAgNgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_74.setTransform(222.5,45.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_75.setTransform(216.5,45.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_76.setTransform(211.2,46.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_77.setTransform(203.7,46.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_78.setTransform(195.7,46.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJALQAKAKAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAFQAFANANAAQAJAAAGgIQAGgIAAgOQAAgJgDgIQgFgNgNAAQgNABgFAOg");
	this.shape_79.setTransform(187.6,48.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOABgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_80.setTransform(174.9,46.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AATA2IAAgxQAAgIgCgEQgEgHgKABQgIgBgGAGQgHAFABAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgEAIgBQASABAGAMQADAGAAALIAAAyg");
	this.shape_81.setTransform(166.7,45.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgkAAIAAgNIBXAAIAAANIgkAAIAABeg");
	this.shape_82.setTransform(158,45.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_83.setTransform(456,34.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_84.setTransform(450.2,31.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgYA3IgEgBIAAgMIAFACIADAAIAGgBIACgDIADgGIADgIIgdhQIAPAAIAUA/IAVg/IAPAAIgNAiIgLAgQgMAegDAHQgGAGgLAAg");
	this.shape_85.setTransform(442.7,33.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgdAjQgHgHAAgKQAAgKAHgHQAHgEALgCIATgDQAGAAABgDIABgGQgBgGgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAFIgMAAQAAgOAKgGQAIgFAMAAQANgBAJAGQAJAFgBALIAAAtIACADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgEABIgFAAQgHAAgDgFQgBgDgBgFQgEAGgHAEQgHADgJABQgLgBgHgGgAAJABIgIACIgGABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAGgEQALgFAAgNIAAgJIgHABg");
	this.shape_86.setTransform(435,31.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAQAnIgQg7IgPA7IgNAAIgXhNIAPAAIAOA9IAPg9IAPAAIAPA8IAQg8IANAAIgXBNg");
	this.shape_87.setTransform(425.2,31.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_88.setTransform(415.6,31.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgNAQgBQAIAAAGAFQAEABAEAGIAAgoIANAAIAABrIgMAAIAAgKQgFAHgGADQgGAEgHgBQgOAAgJgLgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgOgGgIQgGgHgJAAQgIAAgHAIg");
	this.shape_89.setTransform(407.1,30.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_90.setTransform(401.6,30.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_91.setTransform(396.2,31.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_92.setTransform(384.1,31.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgVAzQgJgGgBgMIAOAAQAAAGADACQAFAFAJAAQAOAAAFgLIACgJIABgNQgEAGgGADQgFACgJAAQgMABgKgKQgJgJAAgTQAAgUAJgMQAKgKANgBQAJABAGAEIAIAHIAAgJIAMAAIAABGQAAAPgEAJQgIAQgWAAQgNAAgIgGgAgRgeQgDAGAAAMQAAAMAGAHQAFAGAJABQANAAAGgNQADgHAAgJQAAgOgGgIQgGgGgJgBQgNAAgFAOg");
	this.shape_93.setTransform(375.6,33.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgNAQgBQAIAAAGAFQAEABAEAGIAAgoIANAAIAABrIgMAAIAAgKQgFAHgGADQgGAEgHgBQgOAAgJgLgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgOgGgIQgGgHgJAAQgIAAgHAIg");
	this.shape_94.setTransform(363.1,30.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AASAoIAAgwQAAgHgBgFQgEgHgJAAIgHAAQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIANAAIAAAKQAFgGAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_95.setTransform(355.1,31.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgdAjQgHgHAAgKQAAgKAHgHQAGgEALgCIAUgDQAGAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAKgGQAJgFALAAQAOgBAIAGQAJAFAAALIAAAtIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgFABIgEAAQgGAAgEgFQgBgDgBgFQgEAGgIAEQgGADgJABQgLgBgHgGgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQAMgFgBgNIAAgJIgGABg");
	this.shape_96.setTransform(347,31.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AATAoIAAgwQgBgHgCgFQgDgHgJAAIgHAAQgGACgEAFQgCAEgBAEIgCAMIAAAoIgNAAIAAhNIAMAAIAAAKQAHgGAGgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_97.setTransform(334.4,31.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_98.setTransform(328.2,31.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQABAGABAEQAEAHAJAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgCAEgEADQgIAGgJAAQgRAAgGgLg");
	this.shape_99.setTransform(321,31.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_100.setTransform(314.8,30.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AATAoIAAgwQAAgHgCgFQgEgHgJAAIgHAAQgGACgEAFQgDAEAAAEIgBAMIAAAoIgOAAIAAhNIANAAIAAAKQAGgGAFgDQAGgDAIAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_101.setTransform(304.5,31.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgdAjQgHgHAAgKQAAgKAHgHQAHgEALgCIATgDQAGAAABgDIAAgGQAAgGgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAFIgMAAQAAgOAKgGQAIgFANAAQAMgBAJAGQAJAFgBALIAAAtIACADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgEABIgFAAQgHAAgDgFQgBgDgBgFQgEAGgHAEQgHADgJABQgLgBgHgGgAAJABIgIACIgGABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_102.setTransform(296.4,31.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgXAeQgJgLAAgRQAAgUAKgLQAJgMAPABQANAAAIAFQAJAHABAQIgMAAQgCgHgEgFQgEgFgJAAQgLAAgGAMQgDAJgBAKQAAAMAGAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgJAHQgKAIgNAAQgPAAgIgMg");
	this.shape_103.setTransform(288.4,31.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_104.setTransform(278.4,31.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_105.setTransform(271.2,31.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_106.setTransform(263.4,31.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_107.setTransform(255.4,31.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_108.setTransform(249.3,31.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgdAjQgHgHAAgKQAAgKAHgHQAHgEAKgCIAVgDQAFAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAJgGQAKgFALAAQANgBAJAGQAJAFAAALIAAAtIAAADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgFABIgEAAQgHAAgDgFQgCgDAAgFQgEAGgIAEQgGADgJABQgLgBgHgGgAAJABIgHACIgIABQgGABgEACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQALgFAAgNIAAgJIgGABg");
	this.shape_109.setTransform(238.3,31.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_110.setTransform(226.1,31.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_111.setTransform(220.3,31.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgdAjQgHgHAAgKQAAgKAHgHQAHgEALgCIATgDQAFAAACgDIABgGQgBgGgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQABgOAIgGQAKgFAMAAQAMgBAJAGQAIAFAAALIAAAtIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgEABIgFAAQgHAAgDgFQgCgDAAgFQgEAGgHAEQgHADgJABQgLgBgHgGgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAGgEQAKgFABgNIAAgJIgHABg");
	this.shape_112.setTransform(213.4,31.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAmA2IAAg/IAAgLIAAgQIgfBaIgNAAIgfhaIAAADIAAAMIAAAMIAAA/IgOAAIAAhrIAVAAIAeBaIAfhaIAVAAIAABrg");
	this.shape_113.setTransform(202.9,30.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgGA2IAAhCIgMAAIAAgLIAMAAIAAgMQAAgIACgEQAEgGANAAIACAAIAEAAIAAALIgEAAIgBAAQgGAAgCAEQgBACAAANIAOAAIAAALIgOAAIAABCg");
	this.shape_114.setTransform(190.4,30.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_115.setTransform(184.1,31.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_116.setTransform(171.6,31.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgYAeQgIgLgBgRQABgUAJgLQALgMAOABQANAAAJAFQAIAHACAQIgOAAQgBgHgDgFQgFgFgJAAQgMAAgFAMQgDAJAAAKQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgDAQgIAHQgJAIgOAAQgPAAgJgMg");
	this.shape_117.setTransform(163.9,31.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgdAjQgHgHAAgKQAAgKAHgHQAGgEAMgCIATgDQAFAAACgDIAAgGQAAgGgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAFIgMAAQAAgOAKgGQAIgFAMAAQANgBAJAGQAJAFAAALIAAAtIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgEABIgFAAQgGAAgEgFQgBgDgBgFQgEAGgHAEQgHADgJABQgLgBgHgGgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_118.setTransform(156.1,31.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgHA2IAAhCIgLAAIAAgLIALAAIAAgMQABgIADgEQADgGANAAIACAAIADAAIAAALIgDAAIgBAAQgGAAgBAEQgBACAAANIAMAAIAAALIgMAAIAABCg");
	this.shape_119.setTransform(149.7,30.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_120.setTransform(145.6,31.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQAAAGACAEQAEAHAJAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgCAEgEADQgIAGgJAAQgRAAgGgLg");
	this.shape_121.setTransform(138.4,31.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_122.setTransform(130.6,31.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_123.setTransform(118.5,31.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AATA2IAAgxQgBgIgCgEQgDgGgKAAQgHAAgHAFQgHAFAAAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAIABQARAAAHAMQADAGAAALIAAAyg");
	this.shape_124.setTransform(110.3,30.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_125.setTransform(103.9,30.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AASAoIAAgwQAAgHgBgFQgEgHgJAAIgHAAQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIANAAIAAAKQAFgGAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_126.setTransform(93.7,31.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_127.setTransform(83.7,30.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_128.setTransform(291.2,34.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AATA2IAAgxQgBgIgCgEQgDgGgKAAQgHAAgHAFQgHAFAAAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAIABQASAAAGAMQADAGAAALIAAAyg");
	this.shape_129.setTransform(280.8,30.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AASAoIAAgwQAAgHgBgFQgEgHgJAAIgHAAQgFACgFAFQgDAEAAAEIgBAMIAAAoIgOAAIAAhNIANAAIAAAKQAGgGAFgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_130.setTransform(255.1,31.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_131.setTransform(244.7,34.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_132.setTransform(231,34.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AASA2IAAgxQAAgIgBgEQgEgGgKAAQgHAAgHAFQgGAFAAAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAJABQAQAAAHAMQADAGAAALIAAAyg");
	this.shape_133.setTransform(282.1,30.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQAAAGABAEQADAHAKAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgDADQgIAGgJAAQgRAAgGgLg");
	this.shape_134.setTransform(269.6,31.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAPAnIgPg7IgPA7IgOAAIgWhNIAOAAIAPA9IAQg9IANAAIAQA8IAQg8IANAAIgWBNg");
	this.shape_135.setTransform(258,31.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgGAIIAAgPIAOAAIAAAPg");
	this.shape_136.setTransform(246.4,34.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAOAAIAAAPg");
	this.shape_137.setTransform(229.8,34.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AATAoIAAgwQAAgHgCgFQgEgHgJAAIgHAAQgGACgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhNIANAAIAAAKQAFgGAHgDQAFgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_138.setTransform(294.5,31.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AATAoIAAgwQgBgHgCgFQgDgHgJAAIgHAAQgGACgDAFQgDAEgBAEIgCAMIAAAoIgNAAIAAhNIAMAAIAAAKQAGgGAHgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_139.setTransform(270.5,31.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AATA2IAAgxQAAgIgDgEQgDgGgKAAQgHAAgHAFQgHAFABAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIABQARAAAHAMQADAGAAALIAAAyg");
	this.shape_140.setTransform(258.9,30.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgYA3IgEgBIAAgMIAFACIADAAIAFgBIADgDIADgGIADgIIgdhQIAPAAIAUA/IAVg/IAPAAIgNAiIgMAgQgLAegEAHQgEAGgMAAg");
	this.shape_141.setTransform(246.8,33.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AATAoIAAgwQgBgHgBgFQgEgHgJAAIgHAAQgFACgFAFQgDAEgBAEIAAAMIAAAoIgOAAIAAhNIANAAIAAAKQAGgGAFgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_142.setTransform(238.9,31.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgdAjQgHgHAAgKQAAgKAHgHQAGgEALgCIAUgDQAFAAACgDIAAgGQAAgGgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAFIgMAAQAAgOAKgGQAIgFAMAAQANgBAJAGQAJAFAAALIAAAtIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgEABIgFAAQgGAAgEgFQgBgDgBgFQgEAGgHAEQgHADgJABQgLgBgHgGgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_143.setTransform(230.8,31.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AASAoIAAgwQAAgHgCgFQgDgHgJAAIgHAAQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAAKQAGgGAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_144.setTransform(209.9,31.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgdAjQgHgHAAgKQAAgKAHgHQAGgEALgCIAVgDQAFAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAJgGQAKgFALAAQAOgBAIAGQAJAFAAALIAAAtIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgFABIgEAAQgHAAgDgFQgBgDgBgFQgEAGgIAEQgGADgJABQgLgBgHgGgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQALgFAAgNIAAgJIgGABg");
	this.shape_145.setTransform(201.7,31.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_146.setTransform(447.3,49.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_147.setTransform(441.5,46.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_148.setTransform(436.1,45.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AATAnIgTgdIgSAdIgRAAIAcgnIgbgmIASAAIARAbIASgbIAQAAIgbAmIAcAng");
	this.shape_149.setTransform(430.6,46.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgGQAHgEALgCIAUgCQAEgBACgEIABgEQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQABgOAIgFQAKgHAMAAQANABAIAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgEgFQgCgDAAgEQgEAFgIAEQgGADgJAAQgLABgHgHgAAJABIgIACIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQAMgFAAgMIAAgKIgHABg");
	this.shape_150.setTransform(423,46.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_151.setTransform(412.3,45.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_152.setTransform(406.6,46.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOABgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_153.setTransform(398.6,46.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAQAnIgQg7IgPA7IgNAAIgXhNIAPAAIAOA9IAQg9IAOAAIAPA8IAQg8IANAAIgXBNg");
	this.shape_154.setTransform(389.1,46.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgRAHIAAgNIAkAAIAAANg");
	this.shape_155.setTransform(381.3,46.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_156.setTransform(376.6,45.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_157.setTransform(370.9,46.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgGQAGgEALgCIAUgCQAGgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAKgFQAJgHALAAQAOABAIAFQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgEQgEAFgHAEQgHADgJAAQgLABgHgHgAAJABIgHACIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgMIAAgKIgGABg");
	this.shape_158.setTransform(363.2,46.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOABgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_159.setTransform(354.6,46.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOABgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_160.setTransform(342.2,46.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgHgKABQgHgBgHAGQgGAFAAAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgEAJgBQAQABAHAMQADAGAAALIAAAyg");
	this.shape_161.setTransform(334,45.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_162.setTransform(327.6,45.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgDgEQgDgIgJABIgHABQgGABgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhOIAMAAIAAAMQAGgHAHgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_163.setTransform(317.4,46.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_164.setTransform(309,46.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgBgEQgEgIgJABIgHABQgFABgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhOIANAAIAAAMQAFgHAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_165.setTransform(296.6,46.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_166.setTransform(288.2,46.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_167.setTransform(282.5,45.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_168.setTransform(278.7,45.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_169.setTransform(275,45.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_170.setTransform(269.7,46.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_171.setTransform(261.7,46.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJALQAKAKAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAFQAFANANAAQAJAAAGgIQAGgIAAgOQAAgJgDgIQgFgNgNAAQgNABgFAOg");
	this.shape_172.setTransform(253.6,48.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOABgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_173.setTransform(240.9,46.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgHgKABQgHgBgHAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgEAJgBQAQABAHAMQADAGAAALIAAAyg");
	this.shape_174.setTransform(232.7,45.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_175.setTransform(226.4,45.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_176.setTransform(216.5,46.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOABgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_177.setTransform(208.5,46.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_178.setTransform(200.7,46.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_179.setTransform(195.3,45.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgVAzQgJgFgBgNIAOAAQAAAFADAEQAFAEAJAAQAOAAAFgLIACgJIABgOQgEAHgGACQgFAEgJAAQgMgBgKgIQgJgKAAgUQAAgTAJgMQAKgLANABQAJgBAGAFIAIAHIAAgJIAMAAIAABGQAAAPgEAJQgIAPgWAAQgNABgIgGgAgRgeQgDAGAAAMQAAAMAGAHQAFAHAJAAQANAAAGgNQADgHAAgJQAAgPgGgGQgGgIgJAAQgNABgFANg");
	this.shape_180.setTransform(189.2,48.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgQBGQAMgWADgLQAFgQAAgVQgBgUgFgSQgDgKgLgVIAJAAIANAWIAEAMQAEAJACAJIABARQAAAVgHARQgEALgNAVg");
	this.shape_181.setTransform(178.5,46.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOABgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_182.setTransform(172,46.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_183.setTransform(165.8,45.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgGQAHgEALgCIATgCQAFgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQABgOAIgFQAKgHAMAAQAMABAJAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgCgDAAgEQgEAFgHAEQgHADgJAAQgLABgHgHgAAJABIgIACIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQAKgFABgMIAAgKIgHABg");
	this.shape_184.setTransform(159.8,46.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJABIgHABQgFABgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAGgHAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_185.setTransform(151.4,46.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_186.setTransform(145.5,45.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQABQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHAAQgOABgJgLgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_187.setTransform(139.5,45.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgSAoIAAhOIANAAIAAAOQABgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_188.setTransform(133.6,46.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_189.setTransform(126.4,46.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_190.setTransform(118.1,46.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgXAeQgKgLABgRQgBgUALgLQAKgMAOAAQANAAAIAHQAJAGABAQIgMAAQgBgIgFgEQgEgFgJAAQgLAAgGANQgEAHAAALQABAMAFAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgKAHQgJAIgNgBQgOABgJgMg");
	this.shape_191.setTransform(110.4,46.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_192.setTransform(479.4,31.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_193.setTransform(472.2,31.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAIBGIgMgVIgFgMQgFgMgBgMIgBgMQAAgUAHgSQAEgKANgWIAJAAQgLAWgEALQgFAQAAAUQABAWAEARQAEALALAUg");
	this.shape_194.setTransform(466,31.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_195.setTransform(457,31.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_196.setTransform(449.9,31.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgOAzIgIgIIAAAKIgMAAIAAhrIANAAIAAAnQAEgGAHgDQAGgDAGAAQAOAAAJAKQAKAKAAATQAAATgJAMQgJAMgRAAQgHAAgHgEgAgPgIQgHAGAAAPQAAALADAHQAFANAOAAQAKAAAGgJQAFgIAAgOQAAgNgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_197.setTransform(441.8,30.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAnAoIAAg2QAAgIgEgDQgEgCgFAAQgIAAgGAFQgFAFAAAMIAAAtIgNAAIAAgyQAAgIgBgEQgDgFgJAAQgHgBgGAHQgGAFAAAQIAAAoIgOAAIAAhNIANAAIAAAKIAJgIQAGgEAJAAQAJAAAGAEQACADADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAGAAALIAAAzg");
	this.shape_198.setTransform(431.3,31.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQABAGABAEQAEAHAJAAQANAAAEgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_199.setTransform(420.8,31.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AASAoIAAgwQAAgHgBgFQgEgHgJAAIgHAAQgFACgFAFQgDAEAAAEIgBAMIAAAoIgOAAIAAhNIANAAIAAAKQAGgGAFgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_200.setTransform(412.6,31.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_201.setTransform(402.1,30.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_202.setTransform(396.4,31.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_203.setTransform(390.6,31.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_204.setTransform(386,30.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgHA2IAAhCIgLAAIAAgLIALAAIAAgMQABgIADgEQADgGANAAIADAAIACAAIAAALIgCAAIgCAAQgGAAgCAEQAAACAAANIAMAAIAAALIgMAAIAABCg");
	this.shape_205.setTransform(382.3,30.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_206.setTransform(371.9,31.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgGgKAAQgHAAgHAFQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJABQAQAAAHAMQADAGAAALIAAAyg");
	this.shape_207.setTransform(363.7,30.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_208.setTransform(357.3,30.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgQBGQAMgXADgKQAFgPAAgWQgBgUgEgSQgEgKgLgVIAJAAIANAWIAEAMQAEAJACAJIABARQAAAVgHARQgEALgNAVg");
	this.shape_209.setTransform(348.5,31.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgjA0QABgNAFgKQAEgKAPgJIANgIQAJgEAEgEQAGgGAAgHQAAgKgGgGQgFgEgJAAQgNAAgFAKQgDAFAAAKIgNAAQAAgOAFgJQAIgPAVAAQASAAAIAKQAIAKAAAMQAAANgIAHQgGAGgNAHIgJAFQgHAFgEADQgHAHgCAHIA4AAIAAAMg");
	this.shape_210.setTransform(342,30.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgHAMQAFgBACgGIAAgFIAAgBIAAgBIgHAAIAAgQIAPAAIAAAPQAAAHgEAHQgDAGgIACg");
	this.shape_211.setTransform(331.7,35.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAJA0IAAgZIgtAAIAAgNIAvhCIALAAIAABEIAPAAIAAALIgPAAIAAAZgAgYAQIAgAAIAAgvg");
	this.shape_212.setTransform(325.5,30.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAIBGIgMgVIgGgMQgEgMgBgMIgBgMQAAgUAGgSQAFgKAMgWIAKAAQgLAWgEALQgEAQgBAUQAAAWAGARQADALALAUg");
	this.shape_213.setTransform(319.2,31.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_214.setTransform(308,31.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgOAzIgIgIIAAAKIgMAAIAAhrIANAAIAAAnQAEgGAHgDQAGgDAGAAQAOAAAJAKQAKAKAAATQAAATgJAMQgJAMgRAAQgHAAgHgEgAgPgIQgHAGAAAPQAAALADAHQAFANAOAAQAKAAAGgJQAFgIAAgOQAAgNgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_215.setTransform(300,30.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_216.setTransform(287.3,31.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_217.setTransform(281,30.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgNAQgBQAIAAAGAFQAEABAEAGIAAgoIANAAIAABrIgMAAIAAgKQgFAHgGADQgGAEgHgBQgOAAgJgLgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgOgGgIQgGgHgJAAQgIAAgHAIg");
	this.shape_218.setTransform(270.5,30.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_219.setTransform(262.4,31.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_220.setTransform(254.1,31.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AASAoIAAgwQAAgHgCgFQgDgHgJAAIgHAAQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAAKQAGgGAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_221.setTransform(245.9,31.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_222.setTransform(233.8,31.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_223.setTransform(225.8,31.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_224.setTransform(219.6,30.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgKAHgHQAHgEAKgCIAVgDQAEAAACgDIABgGQAAgGgFgDQgFgDgIAAQgKAAgEAFQgDAEAAAFIgNAAQABgOAIgGQAKgFAMAAQANgBAIAGQAIAFAAALIAAAtIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgFABIgEAAQgGAAgEgFQgCgDAAgFQgEAGgIAEQgGADgJABQgLgBgHgGgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQAMgFAAgNIAAgJIgHABg");
	this.shape_225.setTransform(213.6,31.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AATAoIAAgwQgBgHgBgFQgEgHgJAAIgHAAQgFACgFAFQgDAEgBAEIAAAMIAAAoIgOAAIAAhNIANAAIAAAKQAGgGAFgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_226.setTransform(205.2,31.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_227.setTransform(199.3,30.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgNAQgBQAIAAAGAFQAEABAEAGIAAgoIANAAIAABrIgMAAIAAgKQgFAHgGADQgGAEgHgBQgOAAgJgLgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgOgGgIQgGgHgJAAQgIAAgHAIg");
	this.shape_228.setTransform(193.3,30.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_229.setTransform(187.4,31.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_230.setTransform(180.2,31.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_231.setTransform(171.9,31.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgXAeQgJgLAAgRQAAgUAKgLQAKgMAOABQANAAAIAFQAJAHABAQIgMAAQgCgHgEgFQgEgFgJAAQgLAAgGAMQgDAJgBAKQAAAMAGAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgJAHQgKAIgNAAQgPAAgIgMg");
	this.shape_232.setTransform(164.2,31.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_233.setTransform(152.5,31.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgDAVIgDgpIANAAIgDApg");
	this.shape_234.setTransform(147.7,27);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_235.setTransform(143.8,31.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_236.setTransform(136.7,31.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_237.setTransform(128.8,31.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_238.setTransform(120.9,31.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_239.setTransform(114.8,31.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_240.setTransform(103.5,31.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgCgEQgEgGgKAAQgIAAgGAFQgGAFAAAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIABQASAAAGAMQADAGAAALIAAAyg");
	this.shape_241.setTransform(95.3,30.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_242.setTransform(88.9,30.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgHA2IAAhCIgLAAIAAgLIALAAIAAgMQABgIADgEQADgGANAAIADAAIACAAIAAALIgCAAIgCAAQgGAAgBAEQgBACAAANIAMAAIAAALIgMAAIAABCg");
	this.shape_243.setTransform(80.7,30.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgGA2IAAhrIAOAAIAABrg");
	this.shape_244.setTransform(76.7,30.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgDgEQgDgHgJAAIgHABQgGABgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhNIAMAAIAAALQAGgHAHgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_245.setTransform(408.3,21.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgVAzQgJgGgBgMIAOAAQAAAGADADQAFAEAJAAQAOAAAFgLIACgJIABgNQgEAFgGAEQgFADgJgBQgMABgKgKQgJgJAAgTQAAgUAJgMQAKgLANAAQAJABAGAEIAIAHIAAgJIAMAAIAABGQAAAPgEAJQgIAQgWAAQgNAAgIgGgAgRgeQgDAGAAAMQAAAMAGAHQAFAGAJABQANAAAGgNQADgHAAgJQAAgOgGgIQgGgGgJgBQgNAAgFAOg");
	this.shape_246.setTransform(396.4,23.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAHAAAIIAAAsg");
	this.shape_247.setTransform(387.2,21.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAEQAIAEAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_248.setTransform(367.6,21.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgCgEQgDgGgKAAQgIgBgGAGQgGAGgBAPIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQARAAAGANQADAGAAALIAAAyg");
	this.shape_249.setTransform(359.4,20.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgGA3IAAhDIgLAAIAAgLIALAAIAAgMQAAgIACgEQAEgGANAAIACAAIAEAAIAAALIgEAAIgBAAQgGAAgCADQgBAEAAAMIAOAAIAAALIgOAAIAABDg");
	this.shape_250.setTransform(344.8,20.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAVgDQAFAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAJgGQAJgFAMgBQAOAAAIAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFACIgEAAQgHAAgDgFQgBgDgBgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQALgFAAgNIAAgJIgGABg");
	this.shape_251.setTransform(314.7,21.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAEQAIAEAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_252.setTransform(306.1,21.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAnAoIAAg2QAAgHgEgEQgEgCgFAAQgIAAgGAFQgFAFAAAMIAAAtIgNAAIAAgyQAAgIgBgEQgDgGgJABQgHAAgGAFQgGAGAAAQIAAAoIgOAAIAAhNIANAAIAAALIAJgJQAGgEAJAAQAJAAAGAEQACADADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAHAAAKIAAAzg");
	this.shape_253.setTransform(291.7,21.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AAJA1IAAgaIgtAAIAAgNIAvhCIALAAIAABEIAPAAIAAALIgPAAIAAAagAgYAQIAgAAIAAgvg");
	this.shape_254.setTransform(277.1,20.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAEQAIAEAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_255.setTransform(264.6,21.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAnAoIAAg2QAAgHgEgEQgEgCgFAAQgIAAgGAFQgFAFAAAMIAAAtIgNAAIAAgyQAAgIgBgEQgDgGgJABQgHAAgGAFQgGAGAAAQIAAAoIgOAAIAAhNIANAAIAAALIAJgJQAGgEAJAAQAJAAAGAEQACADADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAHAAAKIAAAzg");
	this.shape_256.setTransform(238.5,21.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_257.setTransform(226.5,20.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_258.setTransform(223.2,20.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAQAnIgQg7IgPA7IgNAAIgXhNIAPAAIAOA9IAPg9IAPAAIAPA8IAQg8IANAAIgXBNg");
	this.shape_259.setTransform(212.8,21.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAHAAAIIAAAsg");
	this.shape_260.setTransform(201.3,21.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAEQAIAEAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_261.setTransform(194.1,21.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAHAAAIIAAAsg");
	this.shape_262.setTransform(172.2,21.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAEQAIAEAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_263.setTransform(160.9,21.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgCgEQgDgGgKAAQgIgBgGAGQgGAGgBAPIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_264.setTransform(152.7,20.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgGA2IAAheIgkAAIAAgNIBVAAIAAANIgkAAIAABeg");
	this.shape_265.setTransform(144,20.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgGAIIAAgPIAOAAIAAAPg");
	this.shape_266.setTransform(482.2,27.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgKAHgGQAHgGALgBIATgDQAFAAACgEIABgFQgBgGgEgDQgFgDgIAAQgKAAgFAGQgCACAAAHIgNAAQAAgPAKgGQAIgFANAAQAMgBAJAGQAJAFgBALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgHgBgDgEQgCgCAAgFQgEAFgHAEQgHADgJAAQgLAAgHgGgAAJACIgIABIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEADAGABQAHgBAGgDQAKgFABgNIAAgJIgHACg");
	this.shape_267.setTransform(457.8,24.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AASA2IAAgyQAAgHgBgEQgEgGgKgBQgIABgGAFQgGAGgBAOIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJABQAQgBAHAMQADAHAAAKIAAAzg");
	this.shape_268.setTransform(445.2,23.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQgBAGACAEQAEAHAJAAQANAAAEgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_269.setTransform(432.7,24.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgSAHIAAgNIAkAAIAAANg");
	this.shape_270.setTransform(410.3,24.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AASA2IAAgyQAAgHgBgEQgEgGgKgBQgHABgHAFQgGAGAAAOIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAJABQAQgBAHAMQADAHAAAKIAAAzg");
	this.shape_271.setTransform(403.7,23.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKAAgFAHQgFAHAAAIIAAAsg");
	this.shape_272.setTransform(393.4,24.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AATAoIAAgxQgBgGgCgFQgDgHgJgBIgHABQgGACgEAFQgCAEgBAEIgCAMIAAAoIgNAAIAAhOIAMAAIAAALQAGgGAHgDQAGgDAGAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_273.setTransform(378,24.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_274.setTransform(365.5,24.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AATA2IAAgyQgBgHgBgEQgEgGgKgBQgHABgHAFQgGAGAAAOIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAJABQAQgBAHAMQADAHAAAKIAAAzg");
	this.shape_275.setTransform(357.3,23.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AATAoIAAgxQgBgGgCgFQgDgHgJgBIgHABQgGACgEAFQgCAEgBAEIgCAMIAAAoIgNAAIAAhOIAMAAIAAALQAGgGAHgDQAGgDAGAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_276.setTransform(340.7,24.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AATAoIAAgxQgBgGgBgFQgEgHgJgBIgHABQgFACgFAFQgDAEgBAEIAAAMIAAAoIgOAAIAAhOIANAAIAAALQAGgGAFgDQAHgDAHAAQAQAAAGALQADAHAAALIAAAyg");
	this.shape_277.setTransform(319.9,24.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgiA4IAAhsIANAAIAAAKQAEgFAFgDQAHgFAIAAQANAAAJAKQAKAKAAAUQAAAYgOALQgIAHgMAAQgIAAgGgEQgDgCgEgGIAAApgAgSgeQgDAIAAALQAAAJADAGQAFAMANgBQAJAAAGgHQAGgIAAgOQAAgJgDgIQgFgMgNAAQgNAAgFANg");
	this.shape_278.setTransform(276.9,26.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_279.setTransform(264.2,24.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AATA2IAAgyQgBgHgBgEQgEgGgKgBQgHABgHAFQgGAGAAAOIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAJABQAQgBAHAMQADAHAAAKIAAAzg");
	this.shape_280.setTransform(256,23.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_281.setTransform(231.8,24.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgVAzQgJgGgBgMIAOAAQAAAFADADQAFAFAJAAQAOAAAFgLIACgIIABgPQgEAGgGAEQgFACgJAAQgMAAgKgJQgJgIAAgVQAAgTAJgLQAKgMANAAQAJAAAGAFIAIAIIAAgKIAMAAIAABGQAAAPgEAIQgIAQgWABQgNgBgIgFgAgRgfQgDAIAAAKQAAANAGAHQAFAGAJAAQANAAAGgMQADgGAAgKQAAgOgGgIQgGgGgJAAQgNAAgFAMg");
	this.shape_282.setTransform(212.5,26.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKAAgFAHQgFAHAAAIIAAAsg");
	this.shape_283.setTransform(202.5,24.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_284.setTransform(195.3,24.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAnAoIAAg1QAAgIgEgEQgEgCgFAAQgIAAgGAFQgFAFAAANIAAAsIgNAAIAAgyQAAgIgBgEQgDgFgJgBQgHAAgGAHQgGAFAAAPIAAApIgOAAIAAhOIANAAIAAALIAJgIQAGgEAJAAQAJAAAGAEQACADADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAHAAAKIAAAzg");
	this.shape_285.setTransform(176.7,24.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQgBAGACAEQAEAHAJAAQANAAAEgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_286.setTransform(166.3,24.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AATAoIAAgxQAAgGgDgFQgDgHgJgBIgHABQgGACgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhOIAMAAIAAALQAGgGAHgDQAGgDAGAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_287.setTransform(158.1,24.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgOAQAAQAIAAAGAFQAEACAEAFIAAgoIANAAIAABrIgMAAIAAgLQgFAIgGADQgGAEgHAAQgOAAgJgMgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgOgGgIQgGgHgJAAQgIAAgHAIg");
	this.shape_288.setTransform(145.3,23.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgBgFQgEgHgJgBIgHABQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhOIANAAIAAALQAFgGAGgDQAHgDAHAAQAQAAAGALQADAHAAALIAAAyg");
	this.shape_289.setTransform(137.3,24.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgXAeQgKgLABgRQgBgUAKgLQALgLAOAAQANAAAIAFQAJAHABAQIgMAAQgBgIgFgEQgEgFgJAAQgLAAgGAMQgEAIAAALQABAMAEAIQAFAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgKAHQgJAHgNAAQgOAAgJgLg");
	this.shape_290.setTransform(121.2,24.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_291.setTransform(113.1,24.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_292.setTransform(93.2,24.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AASA2IAAgyQAAgHgCgEQgDgGgKgBQgHABgHAFQgHAGAAAOIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAIABQASgBAGAMQADAHAAAKIAAAzg");
	this.shape_293.setTransform(85,23.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgGA2IAAheIgkAAIAAgNIBWAAIAAANIgkAAIAABeg");
	this.shape_294.setTransform(76.3,23.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgHAIIAAgPIAOAAIAAAPg");
	this.shape_295.setTransform(417.3,24.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgHgJAAIgHABQgFABgEAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAHgHAFgDQAGgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_296.setTransform(411.1,21.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgGgKAAQgHgBgHAGQgGAGAAAPIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_297.setTransform(362.2,20.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgHA3IAAhDIgLAAIAAgLIALAAIAAgMQABgIADgEQADgGANAAIACAAIADAAIAAALIgDAAIgBAAQgGAAgCADQAAAEAAAMIAMAAIAAALIgMAAIAABDg");
	this.shape_298.setTransform(347.7,20.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgGgKAAQgHgBgHAGQgGAGgBAPIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_299.setTransform(329,20.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AATAoIAAgwQgBgIgCgEQgDgHgJAAIgHABQgGABgEAFQgCAEgBAEIgCAMIAAAoIgNAAIAAhNIAMAAIAAALQAGgHAHgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_300.setTransform(303.3,21.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgjA1QABgOAFgKQAEgKAPgJIANgIQAJgEAEgEQAGgGAAgHQAAgKgGgGQgFgEgJAAQgNAAgFAKQgDAFAAAKIgNAAQAAgOAFgIQAIgPAVgBQASAAAIAKQAIAJAAANQAAANgIAHQgGAFgNAIIgJAFQgHAEgEAEQgHAGgCAIIA4AAIAAANg");
	this.shape_301.setTransform(274.2,20.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAPAnIgPg7IgPA7IgOAAIgWhNIAPAAIAOA9IAQg9IAOAAIAPA8IAQg8IANAAIgXBNg");
	this.shape_302.setTransform(209.9,21.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAHAAAIIAAAsg");
	this.shape_303.setTransform(169.3,21.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgGgKAAQgHgBgHAGQgGAGAAAPIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_304.setTransform(149.8,20.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgHA2IAAheIgkAAIAAgNIBWAAIAAANIgkAAIAABeg");
	this.shape_305.setTransform(141.1,20.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(1,1,1).p("AAaAZQgLALgPAAQgOAAgKgLQgLgKAAgPQAAgOALgLQAKgKAOAAQAPAAALAKQAKALAAAOQAAAPgKAKg");
	this.shape_306.setTransform(377.7,170.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FF0000").s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAQgOAAgKgLg");
	this.shape_307.setTransform(377.7,170.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(1,1,1).p("AhhgkIDDBJ");
	this.shape_308.setTransform(367.7,167);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgQBGQAMgXADgKQAFgPAAgWQgBgUgEgRQgEgMgLgUIAJAAIANAXIAEALQAEAJACAJIABARQAAAVgHARQgEALgNAVg");
	this.shape_309.setTransform(351.2,157.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgjA0QABgNAFgKQAEgKAPgIIANgIQAJgFAEgEQAGgGAAgIQAAgJgGgGQgFgEgJAAQgNgBgFAKQgDAGAAAKIgNAAQAAgOAFgJQAIgOAVAAQASgBAIAKQAIAKAAALQAAANgIAIQgGAFgNAIIgJAFIgLAIQgHAHgCAHIA4AAIAAAMg");
	this.shape_310.setTransform(344.7,156.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAJA0IAAgZIgtAAIAAgNIAvhBIALAAIAABCIAPAAIAAAMIgPAAIAAAZgAgYAPIAgAAIAAgug");
	this.shape_311.setTransform(328.2,156.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAIBGIgMgVIgGgMQgDgLgCgNIgBgMQAAgUAGgRQAFgMAMgVIAKAAQgLAWgEALQgEAQgBAUQAAAVAGASQADALALAUg");
	this.shape_312.setTransform(321.9,157.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_313.setTransform(416.8,45.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgQBGQAMgXADgKQAEgPAAgWQABgUgGgRQgEgMgKgUIAJAAIAMAXIAGALQADAJABAJIACARQAAAVgGARQgFALgMAVg");
	this.shape_314.setTransform(412,42.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgjA0QABgNAFgKQAEgKAPgIIANgIQAJgFAEgEQAGgGAAgIQAAgJgGgGQgFgEgJAAQgNgBgFALQgDAFAAAKIgNAAQAAgOAFgJQAIgOAVAAQASgBAIAKQAIAKAAALQAAANgIAIQgGAGgNAHIgJAFIgLAIQgHAGgCAIIA4AAIAAAMg");
	this.shape_315.setTransform(405.5,41.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgHAMQAFgBACgGIAAgFIAAgBIAAgBIgHAAIAAgQIAPAAIAAAPQAAAHgEAHQgDAGgIACg");
	this.shape_316.setTransform(395.2,46.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAJA0IAAgZIgtAAIAAgNIAvhBIALAAIAABCIAPAAIAAAMIgPAAIAAAZgAgYAPIAgAAIAAgug");
	this.shape_317.setTransform(389,41.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AAIBGIgMgVIgFgMQgFgLgCgNIAAgMQAAgUAHgRQAEgMAMgVIAKAAQgMAWgDALQgFAQABAUQAAAVAEASQAFALAKAUg");
	this.shape_318.setTransform(382.7,42.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKAAgFAHQgFAHAAAIIAAAsg");
	this.shape_319.setTransform(358.8,42.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKAAgFAHQgFAHAAAIIAAAsg");
	this.shape_320.setTransform(329.7,42.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKAAgFAHQgFAHAAAIIAAAsg");
	this.shape_321.setTransform(287.4,42.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AASA2IAAgyQAAgHgCgEQgDgGgKgBQgIABgGAFQgGAGgBAOIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJABQARgBAGAMQADAHAAAKIAAAzg");
	this.shape_322.setTransform(272.1,41.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AAPAnIgPg7IgPA7IgOAAIgWhNIAOAAIAPA9IAQg9IANAAIAQA8IAQg8IANAAIgWBNg");
	this.shape_323.setTransform(262.5,42.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAPAnIgPg7IgPA7IgOAAIgWhNIAOAAIAPA9IAQg9IANAAIAQA8IAQg8IANAAIgWBNg");
	this.shape_324.setTransform(247.5,42.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AATA2IAAgyQAAgHgCgEQgEgGgKgBQgIABgGAFQgHAGABAOIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIABQASgBAGAMQADAHAAAKIAAAzg");
	this.shape_325.setTransform(229.7,41.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgYA3IgEgBIAAgMIAFACIADAAIAGgBIACgDIADgGIADgIIgdhQIAPAAIAUA/IAVg/IAPAAIgNAiIgLAgQgMAegEAHQgEAGgMAAg");
	this.shape_326.setTransform(210.2,44.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgKAHgGQAGgGALgBIAUgDQAFAAACgEIAAgFQAAgGgEgDQgFgDgIAAQgKAAgFAGQgCACgBAHIgMAAQAAgPAKgGQAIgFAMAAQANgBAJAGQAJAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgFABIgEAAQgGgBgEgEQgBgCgBgFQgEAFgHAEQgHADgJAAQgLAAgHgGgAAJACIgHABIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEADAGABQAHgBAGgDQALgFgBgNIAAgJIgGACg");
	this.shape_327.setTransform(186.7,42.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKAAgFAHQgFAHAAAIIAAAsg");
	this.shape_328.setTransform(180.3,42.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQAAAGACAEQADAHAKAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgCAEgEADQgIAGgJAAQgRAAgGgLg");
	this.shape_329.setTransform(173.2,42.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgXAeQgJgLAAgRQAAgUAKgLQAJgLAPAAQANAAAJAFQAIAHABAQIgMAAQgCgIgEgEQgEgFgJAAQgMAAgFAMQgDAIgBALQAAAMAGAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgCAQgIAHQgKAHgNAAQgPAAgIgLg");
	this.shape_330.setTransform(165.4,42.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgYAeQgIgLgBgRQABgUAJgLQALgLAOAAQANAAAJAFQAIAHACAQIgOAAQgBgIgDgEQgFgFgJAAQgMAAgFAMQgEAIABALQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgCAQgKAHQgIAHgOAAQgOAAgKgLg");
	this.shape_331.setTransform(157.9,42.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgKAHgGQAHgGALgBIATgDQAGAAABgEIAAgFQAAgGgEgDQgFgDgIAAQgKAAgFAGQgCACAAAHIgNAAQAAgPAKgGQAIgFAMAAQANgBAJAGQAJAFgBALIAAAsIACAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgHgBgDgEQgBgCgBgFQgEAFgHAEQgHADgJAAQgLAAgHgGgAAJACIgIABIgGABQgIABgDACQgGADAAAIQAAAGAEADQAEADAGABQAHgBAGgDQALgFgBgNIAAgJIgGACg");
	this.shape_332.setTransform(150.1,42.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgCgFQgDgHgJgBIgHABQgFACgEAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAAKQAHgGAFgDQAGgDAHAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_333.setTransform(137.5,42.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgKAHgGQAHgGAKgBIAVgDQAFAAABgEIAAgFQABgGgFgDQgFgDgIAAQgKAAgEAGQgDACgBAHIgMAAQAAgPAJgGQAKgFALAAQANgBAJAGQAJAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgFABIgEAAQgHgBgDgEQgCgCAAgFQgEAFgIAEQgGADgJAAQgLAAgHgGgAAJACIgHABIgIABQgGABgEACQgGADAAAIQAAAGAEADQAEADAGABQAHgBAFgDQALgFAAgNIAAgJIgGACg");
	this.shape_334.setTransform(129.4,42.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgYAeQgJgLAAgRQAAgUAKgLQAKgLAPAAQANAAAIAFQAJAHACAQIgOAAQgBgIgDgEQgFgFgJAAQgLAAgGAMQgEAIABALQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgDAQgJAHQgIAHgOAAQgOAAgKgLg");
	this.shape_335.setTransform(121.4,42.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_336.setTransform(409.7,27.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAGgGAMgBIATgCQAFgBACgEIAAgEQAAgHgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAGIgMAAQAAgPAKgFQAIgHAMAAQANABAJAFQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgEABIgFAAQgGABgEgFQgBgDgBgEQgEAFgHAEQgHAEgJgBQgLABgHgHgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQALgFgBgMIAAgKIgGACg");
	this.shape_337.setTransform(394.1,27.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_338.setTransform(369.8,27.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAPAnIgPg7IgPA7IgOAAIgWhNIAOAAIAQA9IAOg9IAOAAIAQA8IAQg8IANAAIgWBNg");
	this.shape_339.setTransform(360.3,27.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgGALgBIAUgCQAEgBACgEIABgEQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCAEAAAGIgNAAQABgPAIgFQAKgHAMAAQANABAIAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgEABIgFAAQgGABgEgFQgCgDAAgEQgEAFgIAEQgGAEgJgBQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFAAgMIAAgKIgHACg");
	this.shape_340.setTransform(334.3,27.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_341.setTransform(325.8,27.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgMAQAAQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHABQgOgBgJgKgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_342.setTransform(313.1,26.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AATAoIAAgwQgBgIgCgEQgDgIgJAAIgHACQgGABgEAFQgCAEgBAEIgCAMIAAAoIgNAAIAAhOIAMAAIAAAMQAHgHAGgDQAGgDAGAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_343.setTransform(305.1,27.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgGALgBIAUgCQAEgBACgEIABgEQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCAEAAAGIgNAAQABgPAIgFQAKgHAMAAQANABAIAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgEABIgFAAQgGABgEgFQgCgDAAgEQgEAFgIAEQgGAEgJgBQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFAAgMIAAgKIgHACg");
	this.shape_344.setTransform(297,27.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgHgKAAQgHAAgHAGQgGAFAAAPIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgEAJgBQAQABAHALQADAHAAAKIAAAzg");
	this.shape_345.setTransform(284.4,26.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQAAAGABAEQADAHAKAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgDADQgIAGgJAAQgRAAgGgLg");
	this.shape_346.setTransform(271.8,27.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgSAHIAAgNIAkAAIAAANg");
	this.shape_347.setTransform(249.5,27.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgCgEQgEgHgKAAQgIAAgGAGQgGAFAAAPIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgEAIgBQASABAGALQADAHAAAKIAAAzg");
	this.shape_348.setTransform(242.9,26.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKgBgFAHQgFAGAAAJIAAAsg");
	this.shape_349.setTransform(232.5,27.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJAAIgHACQgFABgEAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAHgHAFgDQAGgDAIAAQAQAAAGALQADAHAAALIAAAyg");
	this.shape_350.setTransform(217.2,27.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgVAzQgJgFgBgNIAOAAQAAAGADADQAFAEAJAAQAOAAAFgLIACgIIABgPQgEAHgGACQgFAEgJAAQgMgBgKgIQgJgJAAgVQAAgTAJgLQAKgLANAAQAJgBAGAFIAIAHIAAgJIAMAAIAABGQAAAPgEAIQgIARgWgBQgNABgIgGgAgRgfQgDAIAAAKQAAANAGAHQAFAHAJgBQANAAAGgMQADgHAAgJQAAgPgGgGQgGgIgJAAQgNAAgFANg");
	this.shape_351.setTransform(204.4,29.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgCgEQgEgIgJAAIgHACQgFABgFAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhOIANAAIAAAMQAFgHAHgDQAFgDAHAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_352.setTransform(196.4,27.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQAAAGACAEQADAHAKAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgCAEgEADQgIAGgJAAQgRAAgGgLg");
	this.shape_353.setTransform(177.2,27.7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgCgEQgDgHgKAAQgIAAgGAGQgGAFgBAPIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgEAJgBQAQABAHALQADAHAAAKIAAAzg");
	this.shape_354.setTransform(164.9,26.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgiA4IAAhsIANAAIAAAKQAEgGAFgDQAHgEAIAAQANAAAJALQAKAKAAASQAAAZgOALQgIAHgMAAQgIAAgGgEQgDgCgEgFIAAAogAgSgeQgDAIAAALQAAAJADAFQAFANANAAQAJAAAGgIQAGgIAAgOQAAgJgDgIQgFgNgNABQgNgBgFAOg");
	this.shape_355.setTransform(156.7,29.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAGgGALgBIAUgCQAFgBACgEIAAgEQAAgHgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAGIgMAAQAAgPAKgFQAIgHAMAAQANABAJAFQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgFABIgEAAQgGABgEgFQgBgDgBgEQgEAFgHAEQgHAEgJgBQgLABgHgHgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQALgFgBgMIAAgKIgGACg");
	this.shape_356.setTransform(148.4,27.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKgBgFAHQgFAGAAAJIAAAsg");
	this.shape_357.setTransform(142.1,27.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgVAzQgJgFgBgNIAOAAQAAAGADADQAFAEAJAAQAOAAAFgLIACgIIABgPQgEAHgGACQgFAEgJAAQgMgBgKgIQgJgJAAgVQAAgTAJgLQAKgLANAAQAJgBAGAFIAIAHIAAgJIAMAAIAABGQAAAPgEAIQgIARgWgBQgNABgIgGgAgRgfQgDAIAAAKQAAANAGAHQAFAHAJgBQANAAAGgMQADgHAAgJQAAgPgGgGQgGgIgJAAQgNAAgFANg");
	this.shape_358.setTransform(134.7,29.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AAgA2IgLggIgqAAIgLAgIgPAAIAphrIAPAAIAnBrgAARAKIgRgvIgQAvIAhAAg");
	this.shape_359.setTransform(122.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{x:171.6}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112,p:{x:213.4}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:271.2}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:314.8}},{t:this.shape_99},{t:this.shape_98,p:{x:328.2}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:375.6}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{x:407.1}},{t:this.shape_88,p:{x:415.6}},{t:this.shape_87,p:{x:425.2}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:456}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74,p:{x:222.5,y:45.3}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:276.6,y:45.6}},{t:this.shape_65,p:{x:280.4,y:45.2}},{t:this.shape_64,p:{x:286.1,y:46.7}},{t:this.shape_63},{t:this.shape_62,p:{x:302.4,y:46.7}},{t:this.shape_61,p:{x:311.9,y:45.2}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:363.8,y:49.8}},{t:this.shape_53,p:{x:372.1,y:49.8}},{t:this.shape_52,p:{x:380.4,y:49.8}}]},138).to({state:[]},174).to({state:[{t:this.shape_83,p:{x:228.1}},{t:this.shape_52,p:{x:236.4,y:34.8}},{t:this.shape_131,p:{x:244.7}},{t:this.shape_130},{t:this.shape_64,p:{x:263.3,y:31.7}},{t:this.shape_98,p:{x:270.5}},{t:this.shape_66,p:{x:274.5,y:30.6}},{t:this.shape_129},{t:this.shape_128,p:{x:291.2}},{t:this.shape_54,p:{x:299.5,y:34.8}},{t:this.shape_53,p:{x:307.8,y:34.8}}]},37).to({state:[]},68).to({state:[{t:this.shape_132,p:{x:231}},{t:this.shape_131,p:{x:239.3}},{t:this.shape_128,p:{x:247.6}},{t:this.shape_88,p:{x:257.9}},{t:this.shape_112,p:{x:266.5}},{t:this.shape_62,p:{x:274.2,y:31.7}},{t:this.shape_66,p:{x:279.9,y:30.6}},{t:this.shape_83,p:{x:288.3}},{t:this.shape_53,p:{x:296.6,y:34.8}},{t:this.shape_52,p:{x:304.9,y:34.8}}]},28).to({state:[]},76).to({state:[{t:this.shape_132,p:{x:226.9}},{t:this.shape_52,p:{x:235.2,y:34.8}},{t:this.shape_131,p:{x:243.5}},{t:this.shape_62,p:{x:253.5,y:31.7}},{t:this.shape_64,p:{x:261.3,y:31.7}},{t:this.shape_134},{t:this.shape_66,p:{x:275.8,y:30.6}},{t:this.shape_133},{t:this.shape_83,p:{x:292.5}},{t:this.shape_53,p:{x:300.8,y:34.8}},{t:this.shape_128,p:{x:309.1}}]},26).to({state:[]},70).to({state:[{t:this.shape_137},{t:this.shape_128,p:{x:238.1}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_88,p:{x:267.5}},{t:this.shape_62,p:{x:275.5,y:31.7}},{t:this.shape_66,p:{x:281.2,y:30.6}},{t:this.shape_54,p:{x:289.6,y:34.8}},{t:this.shape_53,p:{x:297.9,y:34.8}},{t:this.shape_52,p:{x:306.2,y:34.8}}]},29).to({state:[{t:this.shape_83,p:{x:174.6}},{t:this.shape_52,p:{x:182.9,y:34.8}},{t:this.shape_128,p:{x:191.2}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_89,p:{x:217.9}},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_100,p:{x:252.5}},{t:this.shape_140},{t:this.shape_65,p:{x:264.6,y:30.2}},{t:this.shape_139},{t:this.shape_93,p:{x:278.5}},{t:this.shape_61,p:{x:288.7,y:30.2}},{t:this.shape_138},{t:this.shape_74,p:{x:307.1,y:30.3}},{t:this.shape_116,p:{x:315.2}},{t:this.shape_66,p:{x:321.4,y:30.6}},{t:this.shape_87,p:{x:328.9}},{t:this.shape_105,p:{x:338.4}},{t:this.shape_88,p:{x:346.7}},{t:this.shape_95},{t:this.shape_53,p:{x:361.3,y:34.8}}]},55).to({state:[]},48).to({state:[{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237,p:{x:128.8,y:31.6}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:233.8,y:31.7}},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211,p:{x:331.7,y:35.9}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202,p:{x:396.4,y:31.7}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197,p:{x:441.8,y:30.3}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193,p:{x:472.2,y:31.7}},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190,p:{x:118.1,y:46.7}},{t:this.shape_189,p:{x:126.4,y:46.7}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183,p:{x:165.8,y:45.6}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179,p:{x:195.3,y:45.2}},{t:this.shape_178,p:{x:200.7,y:46.6}},{t:this.shape_177},{t:this.shape_176,p:{x:216.5,y:46.7}},{t:this.shape_175,p:{x:226.4,y:45.6}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171,p:{x:261.7,y:46.7}},{t:this.shape_170,p:{x:269.7,y:46.7}},{t:this.shape_169,p:{x:275,y:45.2}},{t:this.shape_168,p:{x:278.7,y:45.6}},{t:this.shape_167,p:{x:282.5,y:45.2}},{t:this.shape_166,p:{x:288.2,y:46.7}},{t:this.shape_165},{t:this.shape_164,p:{x:309,y:46.7}},{t:this.shape_163},{t:this.shape_162,p:{x:327.6,y:45.6}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157,p:{x:370.9,y:46.7}},{t:this.shape_156,p:{x:376.6,y:45.6}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152,p:{x:406.6,y:46.7}},{t:this.shape_151,p:{x:412.3,y:45.6}},{t:this.shape_150},{t:this.shape_149,p:{x:430.6,y:46.6}},{t:this.shape_148,p:{x:436.1,y:45.2}},{t:this.shape_147,p:{x:441.5,y:46.7}},{t:this.shape_146,p:{x:447.3,y:49.8}}]},31).to({state:[]},216).to({state:[{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262,p:{x:172.2}},{t:this.shape_189,p:{x:178.3,y:21.7}},{t:this.shape_237,p:{x:186.3,y:21.6}},{t:this.shape_261,p:{x:194.1}},{t:this.shape_260,p:{x:201.3}},{t:this.shape_259},{t:this.shape_169,p:{x:219.9,y:20.2}},{t:this.shape_258,p:{x:223.2,y:20.2}},{t:this.shape_257,p:{x:226.5}},{t:this.shape_256,p:{x:238.5}},{t:this.shape_171,p:{x:248.8,y:21.7}},{t:this.shape_178,p:{x:256.8,y:21.6}},{t:this.shape_255,p:{x:264.6}},{t:this.shape_254},{t:this.shape_253,p:{x:291.7}},{t:this.shape_252,p:{x:306.1}},{t:this.shape_251},{t:this.shape_147,p:{x:322.4,y:21.7}},{t:this.shape_156,p:{x:328.1,y:20.6}},{t:this.shape_166,p:{x:338.5,y:21.7}},{t:this.shape_250},{t:this.shape_151,p:{x:353,y:20.6}},{t:this.shape_249},{t:this.shape_248,p:{x:367.6}},{t:this.shape_164,p:{x:380,y:21.7}},{t:this.shape_247,p:{x:387.2}},{t:this.shape_167,p:{x:390.8,y:20.2}},{t:this.shape_246,p:{x:396.4}},{t:this.shape_148,p:{x:402.4,y:20.2}},{t:this.shape_245},{t:this.shape_146,p:{x:414.5,y:24.8}}]},20).to({state:[]},95).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_176,p:{x:105.3,y:24.7}},{t:this.shape_291,p:{x:113.1,y:24.7}},{t:this.shape_290},{t:this.shape_193,p:{x:128.9,y:24.7}},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_197,p:{x:187.3,y:23.3}},{t:this.shape_284,p:{x:195.3,y:24.7}},{t:this.shape_283},{t:this.shape_282},{t:this.shape_179,p:{x:218.6,y:23.2}},{t:this.shape_178,p:{x:224,y:24.6}},{t:this.shape_281,p:{x:231.8,y:24.7}},{t:this.shape_170,p:{x:239.8,y:24.7}},{t:this.shape_175,p:{x:249.7,y:23.6}},{t:this.shape_280},{t:this.shape_279,p:{x:264.2,y:24.7}},{t:this.shape_278},{t:this.shape_190,p:{x:285,y:24.7}},{t:this.shape_157,p:{x:293,y:24.7}},{t:this.shape_169,p:{x:298.3,y:23.2}},{t:this.shape_168,p:{x:302,y:23.6}},{t:this.shape_167,p:{x:305.8,y:23.2}},{t:this.shape_189,p:{x:311.5,y:24.7}},{t:this.shape_277},{t:this.shape_171,p:{x:332.3,y:24.7}},{t:this.shape_276},{t:this.shape_162,p:{x:350.9,y:23.6}},{t:this.shape_275},{t:this.shape_274,p:{x:365.5,y:24.7}},{t:this.shape_273},{t:this.shape_166,p:{x:386.2,y:24.7}},{t:this.shape_272},{t:this.shape_156,p:{x:397.4,y:23.6}},{t:this.shape_271},{t:this.shape_270,p:{x:410.3,y:24.4}},{t:this.shape_152,p:{x:416.6,y:24.7}},{t:this.shape_164,p:{x:424.4,y:24.7}},{t:this.shape_269},{t:this.shape_151,p:{x:438.9,y:23.6}},{t:this.shape_268,p:{x:445.2,y:23.2}},{t:this.shape_267},{t:this.shape_149,p:{x:465.5,y:24.6}},{t:this.shape_148,p:{x:470.9,y:23.2}},{t:this.shape_147,p:{x:476.4,y:24.7}},{t:this.shape_266}]},115).to({state:[]},100).to({state:[{t:this.shape_305},{t:this.shape_304},{t:this.shape_261,p:{x:158}},{t:this.shape_303},{t:this.shape_190,p:{x:175.4,y:21.7}},{t:this.shape_237,p:{x:183.4,y:21.6}},{t:this.shape_255,p:{x:191.2}},{t:this.shape_260,p:{x:198.4}},{t:this.shape_302},{t:this.shape_169,p:{x:217,y:20.2}},{t:this.shape_258,p:{x:220.3,y:20.2}},{t:this.shape_257,p:{x:223.6}},{t:this.shape_256,p:{x:235.6}},{t:this.shape_189,p:{x:245.9,y:21.7}},{t:this.shape_178,p:{x:253.9,y:21.6}},{t:this.shape_252,p:{x:261.7}},{t:this.shape_301},{t:this.shape_253,p:{x:288.8}},{t:this.shape_300},{t:this.shape_171,p:{x:311.5,y:21.7}},{t:this.shape_262,p:{x:318.7}},{t:this.shape_156,p:{x:322.7,y:20.6}},{t:this.shape_299},{t:this.shape_166,p:{x:341.4,y:21.7}},{t:this.shape_298},{t:this.shape_151,p:{x:355.9,y:20.6}},{t:this.shape_297},{t:this.shape_248,p:{x:370.4}},{t:this.shape_164,p:{x:382.9,y:21.7}},{t:this.shape_247,p:{x:390}},{t:this.shape_167,p:{x:393.7,y:20.2}},{t:this.shape_246,p:{x:399.2}},{t:this.shape_148,p:{x:405.3,y:20.2}},{t:this.shape_296},{t:this.shape_295}]},38).to({state:[]},92).to({state:[{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_222,p:{x:185.2,y:27.7}},{t:this.shape_167,p:{x:190.6,y:26.2}},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_189,p:{x:225.4,y:27.7}},{t:this.shape_349},{t:this.shape_183,p:{x:236.5,y:26.6}},{t:this.shape_348},{t:this.shape_347},{t:this.shape_202,p:{x:255.7,y:27.7}},{t:this.shape_171,p:{x:263.5,y:27.7}},{t:this.shape_346},{t:this.shape_175,p:{x:278,y:26.6}},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_176,p:{x:342.1,y:27.7}},{t:this.shape_168,p:{x:347.8,y:26.6}},{t:this.shape_270,p:{x:352.4,y:27.4}},{t:this.shape_339},{t:this.shape_338},{t:this.shape_170,p:{x:377.8,y:27.7}},{t:this.shape_162,p:{x:383.5,y:26.6}},{t:this.shape_337},{t:this.shape_149,p:{x:401.8,y:27.6}},{t:this.shape_336},{t:this.shape_157,p:{x:417.7,y:27.7}},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_156,p:{x:192.6,y:41.6}},{t:this.shape_291,p:{x:198.9,y:42.7}},{t:this.shape_258,p:{x:204.8,y:41.2}},{t:this.shape_326},{t:this.shape_152,p:{x:221.8,y:42.7}},{t:this.shape_325},{t:this.shape_166,p:{x:237.9,y:42.7}},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_284,p:{x:280.3,y:42.7}},{t:this.shape_321},{t:this.shape_281,p:{x:293.5,y:42.7}},{t:this.shape_151,p:{x:303.9,y:41.6}},{t:this.shape_268,p:{x:310.2,y:41.2}},{t:this.shape_279,p:{x:318.4,y:42.7}},{t:this.shape_320},{t:this.shape_164,p:{x:335.8,y:42.7}},{t:this.shape_178,p:{x:343.8,y:42.6}},{t:this.shape_274,p:{x:351.6,y:42.7}},{t:this.shape_319},{t:this.shape_148,p:{x:366.6,y:41.2}},{t:this.shape_147,p:{x:372,y:42.7}},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_211,p:{x:334.4,y:162.1}},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306}]},75).wait(290));

	// rover
	this.rover = new lib.rover();
	this.rover.parent = this;
	this.rover.setTransform(-76.4,211,1.633,1.633,90);
	this.rover.shadow = new cjs.Shadow("rgba(0,0,0,1)",-5,1,3);
	this.rover._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rover).wait(72).to({_off:false},0).wait(1).to({regX:-2.1,regY:-1,x:-70,y:207.5},0).wait(1).to({x:-65.2},0).wait(1).to({x:-60.4},0).wait(1).to({x:-55.7},0).wait(1).to({x:-50.9},0).wait(1).to({x:-46.1},0).wait(1).to({x:-41.3},0).wait(1).to({x:-36.6},0).wait(1).to({x:-31.8},0).wait(1).to({x:-27},0).wait(1).to({x:-22.3},0).wait(1).to({x:-17.5},0).wait(1).to({x:-12.7},0).wait(1).to({x:-7.9},0).wait(1).to({x:-3.2},0).wait(1).to({x:1.6},0).wait(1).to({x:6.3},0).wait(1).to({x:11.1},0).wait(1).to({x:15.9},0).wait(1).to({x:20.7},0).wait(1).to({x:25.4},0).wait(1).to({x:30.2},0).wait(1).to({x:35},0).wait(1).to({x:39.7},0).wait(1).to({x:44.5},0).wait(1).to({x:49.3},0).wait(1).to({x:54.1},0).wait(1).to({x:58.8},0).wait(1).to({x:63.6},0).wait(1).to({x:68.4},0).wait(1).to({x:73.2},0).wait(1).to({x:77.9},0).wait(1).to({x:82.7},0).wait(1).to({x:87.5},0).wait(1).to({x:92.2},0).wait(1).to({x:97},0).wait(1).to({x:101.8},0).wait(1).to({x:106.6},0).wait(1).to({x:111.3},0).wait(1).to({x:116.1},0).wait(1).to({x:120.9},0).wait(1).to({x:125.7},0).wait(1).to({x:130.4},0).wait(1).to({x:135.2},0).wait(1).to({x:140},0).wait(1).to({x:144.7},0).wait(1).to({x:149.5},0).wait(1).to({x:154.3},0).wait(1).to({x:159.1},0).wait(1).to({x:163.8},0).wait(1).to({x:168.6},0).wait(1).to({x:173.4},0).wait(1).to({x:178.2},0).wait(1).to({x:182.9},0).wait(1).to({x:187.7},0).wait(1).to({x:192.5},0).wait(1).to({x:197.2},0).wait(1).to({x:202},0).wait(1).to({x:206.8},0).wait(1).to({x:211.6},0).wait(1).to({x:216.3},0).wait(1).to({x:221.1},0).wait(1).to({x:225.9},0).wait(1).to({x:230.7},0).wait(1).to({x:235.4},0).wait(1).to({x:240.2},0).wait(1).to({x:245},0).wait(1).to({x:249.7},0).wait(1).to({x:254.5},0).wait(1).to({x:259.3},0).wait(1).to({x:264.1},0).wait(1).to({x:268.8},0).wait(1).to({x:273.6},0).wait(1).to({x:278.4},0).wait(1).to({x:283.2},0).wait(170).to({rotation:85.5,x:282.9,y:207.4},0).wait(1).to({rotation:81,x:282.6,y:207.3},0).wait(1).to({rotation:76.5,x:282.3,y:207.2},0).wait(1).to({rotation:72,x:282},0).wait(1).to({rotation:67.5,x:281.7},0).wait(1).to({rotation:63,x:281.4},0).wait(1).to({rotation:58.5,x:281.1},0).wait(1).to({rotation:54,x:280.8,y:207.3},0).wait(1).to({rotation:49.5,x:280.5},0).wait(1).to({rotation:45,x:280.2,y:207.4},0).wait(1).to({rotation:40.5,x:280,y:207.5},0).wait(1).to({rotation:36,x:279.7,y:207.7},0).wait(1).to({rotation:31.5,x:279.5,y:207.8},0).wait(1).to({rotation:27,x:279.2,y:208},0).wait(1).to({rotation:22.5,x:279,y:208.2},0).wait(1).to({rotation:18,x:278.8,y:208.4},0).wait(1).to({rotation:13.5,x:278.6,y:208.6},0).wait(1).to({rotation:9,x:278.4,y:208.8},0).wait(1).to({rotation:4.5,x:278.3,y:209.1},0).wait(1).to({rotation:0,x:278.1,y:209.3},0).wait(83).to({rotation:4.5,x:278.3,y:209.1},0).wait(1).to({rotation:9,x:278.4,y:208.8},0).wait(1).to({rotation:13.5,x:278.6,y:208.6},0).wait(1).to({rotation:18,x:278.8,y:208.4},0).wait(1).to({rotation:22.5,x:279,y:208.2},0).wait(1).to({rotation:27,x:279.2,y:208},0).wait(1).to({rotation:31.5,x:279.5,y:207.8},0).wait(1).to({rotation:36,x:279.7,y:207.7},0).wait(1).to({rotation:40.5,x:280,y:207.5},0).wait(1).to({rotation:45,x:280.2,y:207.4},0).wait(1).to({rotation:49.5,x:280.5,y:207.3},0).wait(1).to({rotation:54,x:280.8},0).wait(1).to({rotation:58.5,x:281.1,y:207.2},0).wait(1).to({rotation:63,x:281.4},0).wait(1).to({rotation:67.5,x:281.7},0).wait(1).to({rotation:72,x:282},0).wait(1).to({rotation:76.5,x:282.3},0).wait(1).to({rotation:81,x:282.6,y:207.3},0).wait(1).to({rotation:85.5,x:282.9,y:207.4},0).wait(1).to({rotation:90,x:283.2,y:207.5},0).wait(83).to({rotation:94.5,x:283.4,y:207.7},0).wait(1).to({rotation:99,x:283.7,y:207.8},0).wait(1).to({rotation:103.5,x:283.9,y:208},0).wait(1).to({rotation:108,x:284.1,y:208.2},0).wait(1).to({rotation:112.5,x:284.3,y:208.5},0).wait(1).to({rotation:117,x:284.5,y:208.7},0).wait(1).to({rotation:121.5,x:284.7,y:208.9},0).wait(1).to({rotation:126,x:284.8,y:209.2},0).wait(1).to({rotation:130.5,x:285,y:209.4},0).wait(1).to({rotation:135,x:285.1,y:209.7},0).wait(1).to({rotation:139.5,x:285.2,y:210},0).wait(1).to({rotation:144,y:210.3},0).wait(1).to({rotation:148.5,x:285.3,y:210.6},0).wait(1).to({rotation:153,y:210.9},0).wait(1).to({rotation:157.5,y:211.2},0).wait(1).to({rotation:162,y:211.5},0).wait(1).to({rotation:166.5,y:211.8},0).wait(1).to({rotation:171,x:285.2,y:212},0).wait(1).to({rotation:175.5,x:285.1,y:212.4},0).wait(1).to({rotation:180,x:285,y:212.6},0).wait(77).to({rotation:184.5,x:284.8,y:212.9},0).wait(1).to({rotation:189,x:284.7,y:213.1},0).wait(1).to({rotation:193.5,x:284.5,y:213.4},0).wait(1).to({rotation:198,x:284.3,y:213.6},0).wait(1).to({rotation:202.5,x:284.1,y:213.8},0).wait(1).to({rotation:207,x:283.8,y:214},0).wait(1).to({rotation:211.5,x:283.6,y:214.2},0).wait(1).to({rotation:216,x:283.3,y:214.3},0).wait(1).to({rotation:220.5,x:283.1,y:214.5},0).wait(1).to({rotation:225,x:282.8,y:214.6},0).wait(1).to({rotation:229.5,x:282.5},0).wait(1).to({rotation:234,x:282.2,y:214.7},0).wait(1).to({rotation:238.5,x:281.9},0).wait(1).to({rotation:243,x:281.6,y:214.8},0).wait(1).to({rotation:247.5,x:281.3},0).wait(1).to({rotation:252,x:281,y:214.7},0).wait(1).to({rotation:256.5,x:280.7},0).wait(1).to({rotation:261,x:280.5,y:214.6},0).wait(1).to({rotation:265.5,x:280.1,y:214.5},0).wait(1).to({rotation:270,x:279.9,y:214.4},0).wait(113).to({regX:0,regY:0,x:281.5,y:211},0).wait(1).to({regX:-2.1,regY:-1,scaleX:1.6,scaleY:1.6,x:279.9,y:214.5},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:280,y:214.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,y:214.9},0).wait(1).to({scaleX:1.51,scaleY:1.51,y:215},0).wait(1).to({scaleX:1.48,scaleY:1.48,y:215.2},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:280.1,y:215.3},0).wait(1).to({scaleX:1.42,scaleY:1.42,y:215.5},0).wait(1).to({scaleX:1.39,scaleY:1.39,y:215.7},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:280.2,y:215.8},0).wait(1).to({scaleX:1.33,scaleY:1.33,y:216},0).wait(1).to({scaleX:1.31,scaleY:1.31,y:216.2},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:280.3,y:216.3},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:216.5},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:216.6},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:216.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:280.4,y:217},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:217.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:217.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:280.5,y:217.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:217.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:217.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:217.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:280.6,y:218.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:218.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:218.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:280.7,y:218.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:218.8},0).wait(339).to({rotation:265,x:280.9},0).wait(1).to({rotation:260,x:281,y:218.9},0).wait(1).to({rotation:255,x:281.2},0).wait(1).to({rotation:250,x:281.3,y:219},0).wait(1).to({rotation:245,x:281.5,y:218.9},0).wait(1).to({rotation:240,x:281.7},0).wait(1).to({rotation:235,x:281.8},0).wait(1).to({rotation:230,x:282},0).wait(1).to({rotation:225,x:282.2},0).wait(1).to({rotation:220,x:282.3,y:218.8},0).wait(1).to({rotation:215,x:282.5,y:218.7},0).wait(1).to({rotation:210,x:282.6,y:218.6},0).wait(1).to({rotation:205,x:282.7,y:218.5},0).wait(1).to({rotation:200,x:282.9,y:218.4},0).wait(1).to({rotation:195,x:283,y:218.3},0).wait(1).to({rotation:190,x:283.1,y:218.1},0).wait(1).to({rotation:185,x:283.2,y:218},0).wait(1).to({rotation:180,x:283.3,y:217.9},0).wait(1).to({rotation:175,y:217.7},0).wait(1).to({rotation:170,x:283.4,y:217.5},0).wait(1).to({rotation:165,y:217.4},0).wait(1).to({rotation:160,x:283.5,y:217.2},0).wait(1).to({rotation:155,x:283.4,y:217},0).wait(1).to({rotation:150,y:216.9},0).wait(1).to({rotation:145,y:216.7},0).wait(1).to({rotation:140,y:216.6},0).wait(1).to({rotation:135,y:216.4},0).wait(1).to({rotation:130,x:283.3,y:216.2},0).wait(1).to({rotation:125,x:283.2,y:216.1},0).wait(1).to({rotation:120,x:283.1,y:215.9},0).wait(1).to({rotation:115,x:283,y:215.8},0).wait(1).to({rotation:110,x:282.9,y:215.7},0).wait(1).to({rotation:105,x:282.8,y:215.5},0).wait(1).to({rotation:100,x:282.6},0).wait(1).to({rotation:95,x:282.5,y:215.3},0).wait(1).to({rotation:90,x:282.4},0).wait(7).to({x:284.2},0).wait(1).to({x:286.1},0).wait(1).to({x:287.9},0).wait(1).to({x:289.8},0).wait(1).to({x:291.7},0).wait(1).to({x:293.5},0).wait(1).to({x:295.4},0).wait(1).to({x:297.3},0).wait(1).to({x:299.1},0).wait(1).to({x:301},0).wait(1).to({x:302.9},0).wait(1).to({x:304.7},0).wait(1).to({x:306.6},0).wait(1).to({x:308.5},0).wait(1).to({x:310.3},0).wait(1).to({x:312.2},0).wait(1).to({x:314.1},0).wait(1).to({x:315.9},0).wait(1).to({x:317.8},0).wait(1).to({x:319.7},0).wait(1).to({x:321.5},0).wait(1).to({x:323.4},0).wait(1).to({x:325.3},0).wait(1).to({x:327.1},0).wait(1).to({x:329},0).wait(1).to({x:330.9},0).wait(1).to({x:332.7},0).wait(1).to({x:334.6},0).wait(1).to({x:336.4},0).wait(1).to({x:338.3},0).wait(1).to({x:340.2},0).wait(1).to({x:342},0).wait(1).to({x:343.9},0).wait(1).to({x:345.8},0).wait(1).to({x:347.6},0).wait(1).to({x:349.5},0).wait(1).to({x:351.4},0).wait(1).to({x:353.2},0).wait(1).to({x:355.1},0).wait(1).to({x:357},0).wait(1).to({x:358.8},0).wait(1).to({x:360.7},0).wait(1).to({x:362.6},0).wait(1).to({x:364.4},0).wait(1).to({x:366.3},0).wait(1).to({x:368.2},0).wait(1).to({x:370},0).wait(1).to({x:371.9},0).wait(1).to({x:373.8},0).wait(1).to({x:375.6},0).wait(1).to({x:377.5},0).wait(1).to({x:379.4},0).wait(264).to({rotation:84.7,x:379.2,y:215.2},0).wait(1).to({rotation:79.4,x:379},0).wait(1).to({rotation:74.1,x:378.9,y:215.1},0).wait(1).to({rotation:68.8,x:378.6},0).wait(1).to({rotation:63.5,x:378.5},0).wait(1).to({rotation:58.2,x:378.3},0).wait(1).to({rotation:52.9,x:378.1},0).wait(1).to({rotation:47.6,x:378,y:215.2},0).wait(1).to({rotation:42.4,x:377.8,y:215.3},0).wait(1).to({rotation:37.1,x:377.6},0).wait(1).to({rotation:31.8,x:377.5,y:215.4},0).wait(1).to({rotation:26.5,x:377.3,y:215.5},0).wait(1).to({rotation:21.2,x:377.2,y:215.6},0).wait(1).to({rotation:15.9,x:377.1,y:215.8},0).wait(1).to({rotation:10.6,x:377,y:215.9},0).wait(1).to({rotation:5.3,x:376.9,y:216.1},0).wait(1).to({rotation:0,x:376.8,y:216.2},0).wait(6).to({y:214.3},0).wait(1).to({y:212.4},0).wait(1).to({y:210.6},0).wait(1).to({y:208.7},0).wait(1).to({y:206.9},0).wait(1).to({y:205},0).wait(1).to({y:203.2},0).wait(1).to({y:201.3},0).wait(1).to({y:199.5},0).wait(1).to({y:197.6},0).wait(1).to({y:195.8},0).wait(1).to({y:193.9},0).wait(1).to({y:192.1},0).wait(1).to({y:190.2},0).wait(1).to({y:188.4},0).wait(1).to({y:186.5},0).wait(1).to({y:184.7},0).wait(1).to({y:182.8},0).wait(1).to({y:181},0).wait(1).to({y:179.1},0).wait(1).to({y:177.3},0).wait(1).to({y:175.4},0).wait(1).to({y:173.6},0).wait(1).to({y:171.7},0).wait(1).to({y:169.9},0).wait(1).to({y:168},0).wait(1).to({y:166.2},0).wait(301));

	// W arrow
	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AAFBGQgKgQgGgNQgJgUAAgUQAAgVAKgXQAGgMAEgHIAFgHIAQAAQgKARgEAMQgGASAAAWQAAAOACAMQAEATAJARIAEAIg");
	this.shape_360.setTransform(179,239.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgpAIIAAgPIBTAAIAAAPg");
	this.shape_361.setTransform(185.3,239.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgUBGIAFgIQAJgRAEgTQACgMAAgOQAAgWgGgSQgEgMgKgRIAQAAIAEAHQAFAHAGAMQAKAXAAAVQAAAUgJAUQgGANgKAQg");
	this.shape_362.setTransform(191.7,239.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AARA2IgNg+IgEgVIgDAVIgNA+IgVAAIgfhrIAYAAIAPA9IADARIADgRIAMg9IAXAAIANA9IADARIADgQIAPg+IAXAAIgfBrg");
	this.shape_363.setTransform(185,182.2);

	this.instance = new lib.arrowwhite();
	this.instance.parent = this;
	this.instance.setTransform(215.2,210.5,1,1,-90,0,0,8.1,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360}]},646).to({state:[]},55).wait(1120));

	// S arrow
	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgUBGQAKgRAEgMQAGgSAAgXQAAgNgCgMQgEgTgJgRIgEgIIAPAAQAKAQAGANQAJAUAAAUQAAAVgKAXQgGAMgFAHIgEAHg");
	this.shape_364.setTransform(317.7,304.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgpAIIAAgPIBTAAIAAAPg");
	this.shape_365.setTransform(311.4,304.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AAFBGIgFgHQgEgHgGgMQgKgXAAgVQAAgUAJgUQAGgNAKgQIAQAAIgFAIQgJARgEATQgCAMAAANQAAAXAGASQAEAMAKARg");
	this.shape_366.setTransform(305,304.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgfAvQgNgKAAgRIAWAAQABAIADADQAGAIAMgBQAIAAAFgBQAKgDAAgKQAAgFgFgDQgEgDgLgCIgKgDQgRgDgHgFQgLgHAAgQQAAgOALgJQALgKAUAAQAQAAANAJQAMAJAAARIgVAAQgBgKgIgDQgFgDgHAAQgJAAgGADQgFAEAAAGQAAAGAFACQAEADALACIASAFQAMACAGAFQAKAHAAAOQAAAPgMAKQgLAKgVAAQgUAAgMgKg");
	this.shape_367.setTransform(255.7,303.6);

	this.instance_1 = new lib.arrowwhite();
	this.instance_1.parent = this;
	this.instance_1.setTransform(282.6,274.8,1,1,180,0,0,8.1,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364}]},553).to({state:[]},64).wait(1204));

	// E arrow
	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgUBGQAKgRAEgMQAGgSAAgXQAAgNgCgMQgEgTgJgRIgEgIIAPAAQAKAQAGANQAJAUAAAUQAAAVgKAXQgGAMgFAHIgEAHg");
	this.shape_368.setTransform(383.8,238.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgJAoIAAgeIgdAAIAAgTIAdAAIAAgeIASAAIAAAeIAfAAIAAATIgfAAIAAAeg");
	this.shape_369.setTransform(377.4,238.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AAFBGIgFgHQgEgHgGgMQgKgXAAgVQAAgUAJgUQAGgNAKgQIAQAAIgFAIQgJARgEATQgCAMAAANQAAAXAGASQAEAMAKARg");
	this.shape_370.setTransform(370.6,238.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgoA2IAAhrIBOAAIAAATIg4AAIAAAXIA0AAIAAASIg0AAIAAAcIA7AAIAAATg");
	this.shape_371.setTransform(375.6,184.8);

	this.instance_2 = new lib.arrowwhite();
	this.instance_2.parent = this;
	this.instance_2.setTransform(347.4,210.7,1,1,90,0,0,8.1,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368}]},445).to({state:[]},76).wait(1300));

	// N arrow
	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgUBGQAKgRAEgMQAGgSAAgXQAAgNgCgMQgEgTgJgRIgEgIIAPAAQAKAQAGANQAJAUAAAUQAAAVgKAXQgGAMgFAHIgEAHg");
	this.shape_372.setTransform(266.4,129.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgJAoIAAgeIgdAAIAAgTIAdAAIAAgeIASAAIAAAeIAfAAIAAATIgfAAIAAAeg");
	this.shape_373.setTransform(259.9,129.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AAFBGIgFgHQgEgHgGgMQgKgXAAgVQAAgUAJgUQAGgNAKgQIAQAAIgFAIQgJARgEATQgCAMAAANQAAAXAGASQAEAMAKARg");
	this.shape_374.setTransform(253.2,129.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AAVA2IgrhLIAABLIgVAAIAAhrIAYAAIAqBKIAAhKIAVAAIAABrg");
	this.shape_375.setTransform(302.1,130.1);

	this.instance_3 = new lib.arrowwhite();
	this.instance_3.parent = this;
	this.instance_3.setTransform(281.8,159.4,1,1,0,0,0,8.1,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372}]},345).to({state:[]},74).wait(1402));

	// sand
	this.instance_4 = new lib.redsand();
	this.instance_4.parent = this;
	this.instance_4.setTransform(261,197.1,1,1,0,0,0,300,225);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).wait(272).to({regX:299.8,regY:225.2,x:260.8,y:202.8},0).wait(1).to({y:208.4},0).wait(1).to({y:213.9},0).wait(1).to({y:219.4},0).wait(1).to({y:225},0).wait(1).to({y:230.4},0).wait(1).to({y:236},0).wait(1).to({y:241.5},0).wait(1).to({y:247},0).wait(1).to({y:252.6},0).wait(1).to({y:258.1},0).wait(1).to({y:263.6},0).wait(1).to({y:269.2},0).wait(1).to({y:274.7},0).wait(1).to({y:280.2},0).wait(1).to({y:285.8},0).wait(1).to({y:291.3},0).wait(1).to({y:296.8},0).wait(1).to({y:302.4},0).wait(1).to({y:307.9},0).wait(1).to({y:313.4},0).wait(1).to({y:319},0).wait(1).to({y:324.5},0).wait(1).to({y:330},0).wait(1).to({y:335.6},0).wait(1).to({y:341.1},0).wait(1).to({y:346.6},0).wait(1).to({y:352.2},0).wait(1).to({y:357.7},0).wait(1).to({y:363.2},0).wait(1).to({y:368.8},0).wait(1).to({y:374.3},0).wait(1).to({y:379.8},0).wait(1).to({y:385.4},0).wait(1).to({y:390.9},0).wait(1).to({y:396.4},0).wait(1).to({y:402},0).wait(1).to({y:407.5},0).wait(1).to({y:413},0).wait(1).to({y:418.6},0).wait(1).to({y:424.1},0).wait(1).to({y:429.6},0).wait(1).to({y:435.2},0).wait(1).to({y:440.7},0).wait(1).to({y:446.2},0).wait(1).to({y:451.8},0).wait(1).to({y:457.3},0).wait(1).to({y:462.8},0).wait(1).to({y:468.4},0).wait(1).to({y:473.9},0).wait(1).to({y:479.4},0).wait(1).to({y:485},0).wait(1).to({y:490.5},0).wait(1).to({y:496},0).wait(1).to({y:501.6},0).wait(1).to({y:507.1},0).wait(1).to({y:512.6},0).wait(1).to({y:518.2},0).wait(1).to({y:523.7},0).wait(1).to({y:529.2},0).wait(1).to({y:534.8},0).wait(1).to({y:540.3},0).wait(1).to({y:545.8},0).wait(1).to({y:551.4},0).wait(39).to({x:253},0).wait(1).to({x:245.3},0).wait(1).to({x:237.5},0).wait(1).to({x:229.7},0).wait(1).to({x:222},0).wait(1).to({x:214.2},0).wait(1).to({x:206.4},0).wait(1).to({x:198.7},0).wait(1).to({x:190.9},0).wait(1).to({x:183.1},0).wait(1).to({x:175.4},0).wait(1).to({x:167.6},0).wait(1).to({x:159.8},0).wait(1).to({x:152.1},0).wait(1).to({x:144.3},0).wait(1).to({x:136.5},0).wait(1).to({x:128.8},0).wait(1).to({x:121,y:551.5},0).wait(1).to({x:113.2},0).wait(1).to({x:105.5},0).wait(1).to({x:97.7},0).wait(1).to({x:89.9},0).wait(1).to({x:82.2},0).wait(1).to({x:74.4},0).wait(1).to({x:66.6},0).wait(1).to({x:58.9},0).wait(1).to({x:51.1},0).wait(1).to({x:43.3},0).wait(1).to({x:35.6},0).wait(1).to({x:27.8},0).wait(1).to({x:20},0).wait(1).to({x:12.3},0).wait(1).to({x:4.5},0).wait(1).to({x:-3.3},0).wait(1).to({x:-11},0).wait(1).to({x:-18.8,y:551.6},0).wait(1).to({x:-26.6},0).wait(1).to({x:-34.3},0).wait(1).to({x:-42.1},0).wait(1).to({x:-49.9},0).wait(1).to({x:-57.6},0).wait(1).to({x:-65.4},0).wait(1).to({x:-73.2},0).wait(1).to({x:-80.9},0).wait(1).to({x:-88.7},0).wait(1).to({x:-96.5},0).wait(1).to({x:-104.2},0).wait(1).to({x:-112},0).wait(1).to({x:-119.8},0).wait(1).to({x:-127.5},0).wait(1).to({x:-135.3},0).wait(1).to({x:-143.1},0).wait(1).to({x:-150.8},0).wait(1).to({x:-158.6,y:551.7},0).wait(1).to({x:-166.4},0).wait(1).to({x:-174.1},0).wait(1).to({x:-181.9},0).wait(1).to({x:-189.7},0).wait(1).to({x:-197.4},0).wait(1).to({x:-205.2},0).wait(1).to({x:-213},0).wait(1).to({x:-220.8},0).wait(40).to({y:545.8},0).wait(1).to({y:539.9},0).wait(1).to({y:534},0).wait(1).to({y:528.1},0).wait(1).to({y:522.2},0).wait(1).to({x:-220.9,y:516.4},0).wait(1).to({y:510.5},0).wait(1).to({y:504.6},0).wait(1).to({y:498.7},0).wait(1).to({y:492.8},0).wait(1).to({x:-221,y:486.9},0).wait(1).to({y:481},0).wait(1).to({y:475.1},0).wait(1).to({y:469.2},0).wait(1).to({y:463.3},0).wait(1).to({y:457.4},0).wait(1).to({x:-221.1,y:451.6},0).wait(1).to({y:445.7},0).wait(1).to({y:439.8},0).wait(1).to({y:433.9},0).wait(1).to({y:428},0).wait(1).to({x:-221.2,y:422.1},0).wait(1).to({y:416.2},0).wait(1).to({y:410.3},0).wait(1).to({y:404.4},0).wait(1).to({y:398.5},0).wait(1).to({y:392.6},0).wait(1).to({x:-221.3,y:386.8},0).wait(1).to({y:380.9},0).wait(1).to({y:375},0).wait(1).to({y:369.1},0).wait(1).to({y:363.2},0).wait(1).to({x:-221.4,y:357.3},0).wait(1).to({y:351.4},0).wait(1).to({y:345.5},0).wait(1).to({y:339.6},0).wait(1).to({y:333.7},0).wait(1).to({y:327.8},0).wait(1).to({x:-221.5,y:322},0).wait(1).to({y:316.1},0).wait(1).to({y:310.2},0).wait(1).to({y:304.3},0).wait(1).to({y:298.4},0).wait(1).to({x:-221.6,y:292.5},0).wait(1).to({y:286.6},0).wait(1).to({y:280.7},0).wait(1).to({y:274.8},0).wait(1).to({y:268.9},0).wait(1).to({y:263},0).wait(1).to({x:-221.7,y:257.2},0).wait(1).to({y:251.3},0).wait(1).to({y:245.4},0).wait(1).to({y:239.5},0).wait(1).to({y:233.6},0).wait(1).to({x:-221.8,y:227.7},0).wait(1).to({y:221.9},0).wait(1).to({y:216},0).wait(1).to({y:210.1},0).wait(1).to({y:204.2},0).wait(1).to({x:-221.9,y:198.3},0).wait(38).to({x:-213.5},0).wait(1).to({x:-205.2},0).wait(1).to({x:-196.9,y:198.2},0).wait(1).to({x:-188.6},0).wait(1).to({x:-180.2},0).wait(1).to({x:-171.9},0).wait(1).to({x:-163.6},0).wait(1).to({x:-155.3},0).wait(1).to({x:-147,y:198.1},0).wait(1).to({x:-138.6},0).wait(1).to({x:-130.3},0).wait(1).to({x:-122},0).wait(1).to({x:-113.7},0).wait(1).to({x:-105.3},0).wait(1).to({x:-97,y:198},0).wait(1).to({x:-88.7},0).wait(1).to({x:-80.4},0).wait(1).to({x:-72.1},0).wait(1).to({x:-63.7},0).wait(1).to({x:-55.4},0).wait(1).to({x:-47.1,y:197.9},0).wait(1).to({x:-38.8},0).wait(1).to({x:-30.5},0).wait(1).to({x:-22.1},0).wait(1).to({x:-13.8},0).wait(1).to({x:-5.5},0).wait(1).to({x:2.8,y:197.8},0).wait(1).to({x:11.2},0).wait(1).to({x:19.5},0).wait(1).to({x:27.8},0).wait(1).to({x:36.1},0).wait(1).to({x:44.4,y:197.7},0).wait(1).to({x:52.8},0).wait(1).to({x:61.1},0).wait(1).to({x:69.4},0).wait(1).to({x:77.7},0).wait(1).to({x:86},0).wait(1).to({x:94.4,y:197.6},0).wait(1).to({x:102.7},0).wait(1).to({x:111},0).wait(1).to({x:119.3},0).wait(1).to({x:127.7},0).wait(1).to({x:136},0).wait(1).to({x:144.3,y:197.5},0).wait(1).to({x:152.6},0).wait(1).to({x:160.9},0).wait(1).to({x:169.3},0).wait(1).to({x:177.6},0).wait(1).to({x:185.9},0).wait(1).to({x:194.2,y:197.4},0).wait(1).to({x:202.5},0).wait(1).to({x:210.9},0).wait(1).to({x:219.2},0).wait(1).to({x:227.5},0).wait(1).to({x:235.8},0).wait(1).to({x:244.2,y:197.3},0).wait(1).to({x:252.5},0).wait(1).to({x:260.8},0).wait(49).to({scaleX:0.98,scaleY:0.98,x:261.5,y:198,alpha:0.963},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:262.2,y:198.8,alpha:0.926},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:262.9,y:199.4,alpha:0.889},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:263.6,y:200.2,alpha:0.852},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:264.4,y:200.9,alpha:0.815},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:265,y:201.6,alpha:0.778},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:265.7,y:202.2,alpha:0.741},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:266.4,y:203,alpha:0.704},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:267.1,y:203.7,alpha:0.667},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:267.8,y:204.4,alpha:0.63},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:268.6,y:205.1,alpha:0.593},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:269.3,y:205.8,alpha:0.556},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:270,y:206.5,alpha:0.519},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:270.7,y:207.3,alpha:0.481},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:271.4,y:208,alpha:0.444},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:272.1,y:208.7,alpha:0.407},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:272.8,y:209.4,alpha:0.37},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:273.5,y:210.1,alpha:0.333},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:274.2,y:210.8,alpha:0.296},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:274.9,y:211.5,alpha:0.259},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:275.6,y:212.2,alpha:0.222},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:276.4,y:213,alpha:0.185},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:277.1,y:213.7,alpha:0.148},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:277.8,y:214.4,alpha:0.111},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:278.5,y:215.1,alpha:0.074},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:279.2,y:215.8,alpha:0.037},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:279.9,y:216.5,alpha:0},0).to({_off:true},1).wait(1044));

	// n-s axis
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(282.5,218.4,1,1,0,0,0,0,143.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(749).to({_off:false},0).wait(1072));

	// e-w axis
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(280.1,217.9,1,1,0,0,0,143.9,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(749).to({_off:false},0).wait(1072));

	// graph
	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#373535").s().p("AAXA6IguhNIgBAAIAABNIgYAAIAAhzIAaAAIAvBNIAAAAIAAhNIAYAAIAABzg");
	this.shape_376.setTransform(190.4,298.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#373535").ss(2,0,0,4).p("AhwhwQAvgvBBAAQBDAAAuAvQAvAvAABBQAABCgvAvQguAvhDAAQhBAAgvgvQgvgvAAhCQAAhBAvgvg");
	this.shape_377.setTransform(190.7,297.8,0.791,0.791);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AhwBxQgvgvAAhCQAAhBAvgvQAugvBCAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAQhCAAgugvg");
	this.shape_378.setTransform(190.7,297.8,0.791,0.791);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#373535").s().p("AAAAVIglANQAWgZAPgqQAQAqAWAZg");
	this.shape_379.setTransform(190.2,269.5,1.54,1.54);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#373535").ss(2,0,0,4).p("AAAFQIAAqe");
	this.shape_380.setTransform(190.3,297.2,0.791,0.791);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#373535").s().p("AA5A2IAAhEQAAgYgVAAQgMAAgIAHQgHAIAAAMIAABBIgRAAIAAhEQAAgYgUAAQgOAAgHALQgHAIAAAIIAABBIgRAAIAAhpIAQAAIAAAQIABAAQALgSAXAAQAWAAAGASQALgSAXAAQAiAAAAAeIAABNg");
	this.shape_381.setTransform(408.9,378.1,0.791,0.791);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#373535").s().p("AgiA+QgNgMgBgSIASAAQABALAIAHQAIAIANAAQANAAAIgJQAJgJAAgRQAAgPgJgIQgJgJgOAAQgPAAgMANIgPgBIAOhLIBHAAIAAAPIg6AAIgIArIABAAQAJgLARABQAUgBANANQAOAMAAAYQAAAVgNANQgOAPgXAAQgUAAgNgLg");
	this.shape_382.setTransform(392.8,376.8,0.791,0.791);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#373535").s().p("AgpAxQgHgQAAghQAAggAHgQQAMgZAdAAQAeAAAMAZQAHAQAAAgQAAAhgHAQQgMAZgeAAQgdAAgMgZgAgZgkQgEAMAAAYQAAAZAEANQAGAVATAAQATAAAHgVQAEgMAAgaQAAgYgEgMQgHgWgTAAQgTAAgGAWg");
	this.shape_383.setTransform(281.5,376.7,0.791,0.791);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#373535").s().p("AA5A2IAAhEQAAgYgUAAQgNAAgIAHQgHAIAAAMIAABBIgRAAIAAhEQAAgYgUAAQgNAAgJALQgGAIAAAIIAABBIgRAAIAAhpIAQAAIAAAQQAMgSAWAAQAXAAAGASQALgSAWAAQAjAAAAAeIAABNg");
	this.shape_384.setTransform(171.9,378.1,0.791,0.791);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#373535").s().p("AgiA+QgNgMgBgSIASAAQABALAIAHQAIAIANAAQANAAAIgJQAJgJAAgRQAAgPgJgIQgJgJgOAAQgPAAgMANIgPgBIAOhLIBHAAIAAAPIg6AAIgIArIAAAAQAKgLAQABQAVgBANANQAOAMAAAYQAAAVgNANQgOAPgXAAQgUAAgNgLg");
	this.shape_385.setTransform(155.9,376.8,0.791,0.791);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#373535").s().p("AgyAIIAAgPIBlAAIAAAPg");
	this.shape_386.setTransform(147.3,377.8,0.791,0.791);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#373535").s().p("AAqArIAAg6QAAgIgEgDQgEgEgGABQgJgBgGAGQgGAGAAANIAAAwIgNAAIAAg2QAAgIgCgFQgEgFgJAAQgIAAgGAFQgHAHAAAQIAAAsIgOAAIAAhTIAOAAIAAAMQAFgHAEgCQAHgFAJgBQAKABAGAFQADADADAFQAFgHAGgDQAGgEAIAAQASAAAGANQADAHAAALIAAA3g");
	this.shape_387.setTransform(116.3,338.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#373535").s().p("AgaAxQgLgHgBgQIAPAAQABAMAKAFQAFACAHAAQAMAAAGgIQAGgJAAgJQAAgMgHgGQgIgGgJAAQgHAAgFADQgGACgEAEIgMAAIAJg8IA6AAIAAANIgwAAIgEAgIAHgFQAHgCAHAAQAPAAALAKQALAJAAAQQAAAQgKAMQgKAMgVAAQgNAAgLgIg");
	this.shape_388.setTransform(100.5,337.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#373535").s().p("AgtAGIAAgLIBbAAIAAALg");
	this.shape_389.setTransform(91.6,338.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#373535").s().p("AgeApQgIgPAAgZQAAgTAFgOQAJgZAYAAQAWAAAKASQAHAOAAAYQAAAWgHAQQgKAVgWAAQgUAAgKgRgAgRghQgGAMAAAWQAAASAEAKQAGAQANAAQALAAAGgKQAHgJAAgaQAAgUgFgMQgFgNgNAAQgMAAgGAMg");
	this.shape_390.setTransform(118.5,219.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#373535").s().p("AAqAsIAAg7QAAgIgEgDQgEgEgGAAQgJAAgGAGQgGAGAAANIAAAxIgNAAIAAg3QAAgJgCgEQgEgFgJgBQgIABgGAFQgHAHAAARIAAAsIgOAAIAAhVIAOAAIAAANQAFgHAEgCQAHgGAJABQAKgBAGAGQADADADAFQAFgHAGgDQAGgDAIAAQASgBAGANQADAGAAAMIAAA4g");
	this.shape_391.setTransform(116.3,102);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#373535").s().p("AgaAxQgLgHgBgRIAPAAQABANAKAEQAFADAHAAQAMAAAGgIQAGgJAAgJQAAgMgHgGQgIgGgJAAQgHAAgFACQgGADgEAEIgMAAIAJg9IA6AAIAAAPIgwAAIgEAfIAHgEQAHgDAHAAQAPAAALAKQALAJAAAPQAAARgKAMQgKAMgVABQgNAAgLgJg");
	this.shape_392.setTransform(100.5,100.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#373535").s().p("AgGAqIAAgjIgiAAIAAgNIAiAAIAAgjIANAAIAAAjIAiAAIAAANIgiAAIAAAjg");
	this.shape_393.setTransform(91.4,102.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#373535").ss(2,0,0,4).p("AcbAAMg42AAA");
	this.shape_394.setTransform(280.1,99,0.791,0.791);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#373535").ss(2,0,0,4).p("AcbAAMg42AAA");
	this.shape_395.setTransform(280.1,338.5,0.791,0.791);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#373535").ss(2,0,0,4).p("AAA8VMAAAA4r");
	this.shape_396.setTransform(402.5,218.4,0.791,0.791);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#373535").ss(2,0,0,4).p("AAA8VMAAAA4r");
	this.shape_397.setTransform(162.4,218.4,0.791,0.791);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_398.setTransform(280.3,99.1,0.791,0.791);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_399.setTransform(280.3,122.9,0.791,0.791);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_400.setTransform(280.3,146.8,0.791,0.791);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_401.setTransform(280.3,170.6,0.791,0.791);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_402.setTransform(280.3,194.5,0.791,0.791);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_403.setTransform(280.3,218.4,0.791,0.791);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_404.setTransform(280.3,242.2,0.791,0.791);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_405.setTransform(280.3,266.1,0.791,0.791);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_406.setTransform(280.3,289.9,0.791,0.791);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_407.setTransform(280.3,313.8,0.791,0.791);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("A8fAAMA4/AAA");
	this.shape_408.setTransform(280.3,337.6,0.791,0.791);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_409.setTransform(401,218.4,0.791,0.791);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_410.setTransform(377.2,218.4,0.791,0.791);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_411.setTransform(353.4,218.4,0.791,0.791);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_412.setTransform(329.5,218.4,0.791,0.791);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_413.setTransform(305.6,218.4,0.791,0.791);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_414.setTransform(281.8,218.4,0.791,0.791);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_415.setTransform(257.9,218.4,0.791,0.791);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_416.setTransform(234,218.4,0.791,0.791);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_417.setTransform(210.2,218.4,0.791,0.791);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_418.setTransform(186.3,218.4,0.791,0.791);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#9BCEEB").ss(0.5,0,0,4).p("AAA8VMAAAA4r");
	this.shape_419.setTransform(162.4,218.4,0.791,0.791);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#E9F1F9").s().p("A8acVMAAAg4pMA41AAAMAAAA4pg");
	this.shape_420.setTransform(280.3,218.8,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376}]},749).wait(1072));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(354.3,376,392.3,46.9);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/red_sand.jpg?1483634302977", id:"red_sand"},
		{src:"sounds/maps_p01_titlewav.mp3?1483634302977", id:"maps_p01_titlewav"},
		{src:"sounds/maps_p02_onTheSurfacewav.mp3?1483634302977", id:"maps_p02_onTheSurfacewav"},
		{src:"sounds/maps_p03_northwav.mp3?1483634302977", id:"maps_p03_northwav"},
		{src:"sounds/maps_p04_eastwav.mp3?1483634302977", id:"maps_p04_eastwav"},
		{src:"sounds/maps_p05_southwav.mp3?1483634302977", id:"maps_p05_southwav"},
		{src:"sounds/maps_p06_westwav.mp3?1483634302977", id:"maps_p06_westwav"},
		{src:"sounds/maps_p07_anythingInBetweenwav.mp3?1483634302977", id:"maps_p07_anythingInBetweenwav"},
		{src:"sounds/maps_p08_ifTheRoverwav.mp3?1483634302977", id:"maps_p08_ifTheRoverwav"},
		{src:"sounds/maps_p09_theRoverWillMovewav.mp3?1483634302977", id:"maps_p09_theRoverWillMovewav"},
		{src:"sounds/maps_p10_theSecondNumberwav.mp3?1483634302977", id:"maps_p10_theSecondNumberwav"},
		{src:"sounds/maps_p11_theRoverWillMovewav.mp3?1483634302977", id:"maps_p11_theRoverWillMovewav"},
		{src:"sounds/maps_p12_aGraphUsingwav.mp3?1483634302977", id:"maps_p12_aGraphUsingwav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;