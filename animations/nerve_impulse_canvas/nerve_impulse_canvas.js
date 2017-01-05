(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"nerve_impulse_canvas_atlas_", frames: [[0,1362,1353,536],[538,0,269,98],[0,0,536,1360]]}
];


// symbols:



(lib.Layer2 = function() {
	this.spriteSheet = ss["nerve_impulse_canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["nerve_impulse_canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nervecell = function() {
	this.spriteSheet = ss["nerve_impulse_canvas_atlas_"];
	this.gotoAndStop(2);
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


(lib.positivecircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("ABOAQIg+AAIAAA+IggAAIAAg+Ig9AAIAAggIA9AAIAAg9IAgAAIAAA9IA+AAg");
	this.shape.setTransform(13.7,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBOIAAg+Ig9AAIAAggIA9AAIAAg9IAgAAIAAA9IA+AAIAAAgIg+AAIAAA+g");
	this.shape_1.setTransform(13.7,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFCC00","#D9AE00","#CBA300","#836900"],[0.404,0.812,0.816,1],-0.9,-2.9,0,-0.9,-2.9,19.1).s().p("AhmBnQgqgrAAg8QAAg7AqgrQArgrA7AAQA9AAAqArQAqArAAA7QAAA8gqArQgqArg9AAQg7AAgrgrg");
	this.shape_2.setTransform(14.6,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.positivecircle, new cjs.Rectangle(0,0,29.1,29.1), null);


(lib.nervecell2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Layer2();
	this.instance.parent = this;
	this.instance.setTransform(7.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Layer3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-114.9,257);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.nervecell2, new cjs.Rectangle(-114.9,0,1475,536), null);


(lib.nervecell1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.nervecell();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,536,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nervecell1, new cjs.Rectangle(-0.2,0,1360,536), null);


(lib.cutout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#ABABAB","#E4E4E4","#E7DADA","#968F8F"],[0,0.365,0.671,1],0,12.4,0,-12.4).s().p("Egq9ACCIAAkDMBV7AAAIAAEDg");
	this.shape.setTransform(275,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cutout, new cjs.Rectangle(0,0,550,26), null);


(lib.bluepulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,255,0.91)").s().p("A4NKyQgmhJglh9QhLj9AAkMQAAkNBLjeQAlhvAmg6MAyxAAAQg0A8g0B4QhpDwAAErQAAEsBpDSQA0BpA0Atg");
	this.shape.setTransform(155,69);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,204,255,0.91)").s().p("A37KyIgSAAQgjhEgkh2IgDgMQhMj9AAkMQAAkNBMjeIADgMQAkhnAjg2IASAAMAyeAAAIgSAYQgqA6gqBiQhoDwAAErQAAErBoDTQAoBTApAtQALANAKAJg");
	this.shape_1.setTransform(155,69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,204,255,0.91)").s().p("A37KyIgRAAQgkhFgjh1IgEgMQhLj9AAkMQAAkNBLjeIAEgMQAjhmAkg2IAQgBMAyfAAAIgSAXQgqA7gpBiQhnDxAAEqQAAErBnDTQAoBTAoAtQALANAKAJg");
	this.shape_2.setTransform(154.9,69);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,204,255,0.91)").s().p("A36KyIgSAAQgjhFgkh1IgEgNQhLj8AAkMQAAkMBLjfIAEgLQAkhnAjg2IARgBMAyeAAAQgJALgJAMQgpA7gqBiQhlDxAAEqQAAEqBlDUQAoBTAoAtQAKANALAJg");
	this.shape_3.setTransform(154.9,69);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,204,255,0.91)").s().p("A36KyIgSAAQgjhFgjh1IgEgNQhLj8AAkMQAAkMBLjfIAEgLQAjhnAjg2IARgBMAydAAAIgRAXQgpA7gpBhQhkDyAAEpQAAErBkDUQAoBSAnAvQAKAMAKAJg");
	this.shape_4.setTransform(154.8,69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,204,255,0.91)").s().p("A36KyIgSAAQgjhGgjh0IgEgNQhLj8AAkMQAAkMBLjfIAEgLQAjhnAjg2IARgBMAydAAAIgRAXQgoA7gpBhQhkDyAAEpQAAErBkDUQAnBSAnAvQAKAMAKAJg");
	this.shape_5.setTransform(154.8,69);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,204,255,0.91)").s().p("A35KyIgSgBQgjhFgkh0IgDgNQhMj8AAkMQAAkMBMjfIADgLQAkhnAjg2IARgBMAycAAAIgRAWQgoA8goBhQhjDyAAEpQAAErBjDUQAnBSAmAvQAKAMAKAJg");
	this.shape_6.setTransform(154.8,69);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,204,255,0.91)").s().p("A35KyIgSgBQgjhEgjh2IgEgMQhLj9AAkLQAAkMBKjfIAFgLQAjhnAjg2IARgBMAybAAAIgQAWQgoA8goBhQhhDyAAEpQAAEqBhDVQAnBSAnAwIASAUg");
	this.shape_7.setTransform(154.7,69);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,204,255,0.91)").s().p("A35KyIgRgBQgkhEgjh2IgEgMQhLj9AAkLQAAkMBLjeIAEgMQAjhnAkg2IAQgBMAybAAAQgIAKgIAMQgnA8goBhQhhDyAAEpQAAEpBhDWQAmBSAmAwQAJALAJAJg");
	this.shape_8.setTransform(154.7,69);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,204,255,0.91)").s().p("A35KyIgRgBQgjhFgkh1IgDgMQhLj9AAkLQAAkMBKjeIAEgMQAkhmAjg3IAQgBMAyaAAAIgPAWQgnA9gnBgQhgDzAAEoQAAEpBgDWQAmBSAlAwQAJAMAJAIg");
	this.shape_9.setTransform(154.6,69);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,204,255,0.91)").s().p("A34KyIgRgBQgkhFgjh1IgEgMQhLj9AAkLQAAkMBLjeIAEgMQAjhmAjg2IARgCMAyZAAAIgPAWQgmA9gnBgQhfDzAAEoQAAEpBfDWQAlBSAmAwQAIAMAJAIg");
	this.shape_10.setTransform(154.6,69);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,204,255,0.91)").s().p("A34KyIgRgBQgkhFgjh1IgEgMQhKj9gBkLQABkMBKjeIAEgMQAjhmAkg2IAQgCMAyYAAAIgOAWQgmA8gmBhQheDzAAEoQAAEoBeDXQAkBSAlAwQAJAMAIAIg");
	this.shape_11.setTransform(154.6,69);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,204,255,0.91)").s().p("A34KyIgRgBQgjhGgjh0IgFgNQhKj8AAkLQAAkMBKjeIAFgLQAjhnAjg2IAQgCMAyYAAAIgOAWQgmA8glBhQhdD0gBEnQABEoBdDXQAkBSAlAxQAHAKAJAJg");
	this.shape_12.setTransform(154.5,69);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,204,255,0.91)").s().p("A33KyIgRgCQgkhFgjh0IgEgNQhKj8gBkLQABkLBKjfIAEgLQAjhnAkg2IAQgCMAyXAAAIgOAVQglA+gmBgQhcD0ABEnQgBEnBcDYQAlBSAkAxQAHAKAJAJg");
	this.shape_13.setTransform(154.5,69);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,204,255,0.91)").s().p("A34KyIgQgCQgkhFgjh0IgEgNQhKj8AAkLQAAkLBKjfIAEgLQAjhnAkg2IAQgCMAyWAAAIgNAVQglA+glBgQhbD0AAEnQAAEnBbDYQAkBSAkAxIAPATg");
	this.shape_14.setTransform(154.4,69);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,204,255,0.91)").s().p("A33KyIgRgCQgjhFgjh0IgEgNQhLj8AAkLQAAkLBLjfIAEgLQAjhnAjg2IAQgCMAyWAAAIgNAVQgkA9glBhQhaD0AAEnQAAEmBaDZQAjBSAkAxQAHALAIAIg");
	this.shape_15.setTransform(154.4,69);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,204,255,0.91)").s().p("A33KyIgQgCQgkhFgjh0IgEgNQhKj8gBkLQABkLBKjfIAEgLQAjhmAjg3IAQgCMAyWAAAIgNAVQgkA9glBhQhYD0gBEmQABEnBYDZQAjBSAjAxIAPATg");
	this.shape_16.setTransform(154.4,69);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(102,204,255,0.91)").s().p("A33KyIgQgCQgkhFgih0IgFgNQhKj8AAkLQAAkLBKjfIAFgLQAjhmAig3IAQgCMAyVAAAIgLAVQglA9gjBhQhZD0AAEmQAAEnBZDZQAiBSAjAyQAGAKAHAIg");
	this.shape_17.setTransform(154.3,69);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(102,204,255,0.91)").s().p("A32KyIgRgCQgjhGgjhzIgEgNQhKj8gBkLQABkLBKjeIAEgMQAjhmAjg2IAQgDMAyTAAAIgLAUQgjA/gkBfQhXD1AAEmQAAEmBXDaQAjBSAiAyQAHAKAGAIg");
	this.shape_18.setTransform(154.3,69);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(102,204,255,0.91)").s().p("A32KyIgRgCQgjhGgjhzIgEgNQhKj8AAkLQAAkLBKjeIAEgMQAjhlAjg3IAQgDMAyTAAAIgLAUQgjA/gjBfQhWD1AAEmQAAElBWDbQAiBRAiAzIANASg");
	this.shape_19.setTransform(154.2,69);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(102,204,255,0.91)").s().p("A32KyIgQgDQgjhEgjh1IgEgMQhLj8AAkLQAAkLBLjeIAEgMQAjhlAjg3IAPgDMAyTAAAIgLAUQgiA+gjBgQhWD2AAElQAAElBWDbQAhBRAiAzIAMASg");
	this.shape_20.setTransform(154.2,69);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(102,204,255,0.91)").s().p("A32KyIgQgDQgjhEgjh1IgEgNQhKj7AAkLQAAkLBKjeIAEgMQAjhlAjg3IAQgDMAyRAAAIgJAUQgjA/giBfQhVD2AAElQAAEkBVDcQAhBRAhAzIAMASg");
	this.shape_21.setTransform(154.1,69);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(102,204,255,0.91)").s().p("A32KyIgQgDQgihFgkh0IgEgNQhKj8AAkKQAAkLBKjeIAEgLQAjhnAjg2IAQgDMAyRAAAIgJATQgiBAgjBfQhTD3AAEkQAAEkBTDcQAhBRAhA0QAFAKAHAHg");
	this.shape_22.setTransform(154.1,69);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(102,204,255,0.91)").s().p("A31KyIgQgDQgjhFgkh0IgDgNQhKj8gBkKQAAkLBLjdIADgMQAkhmAjg3IAPgDMAyRAAAIgKATQghBAghBfQhUD3AAEkQAAEjBUDdQAgBRAgA0IALARg");
	this.shape_23.setTransform(154.1,69);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(102,204,255,0.91)").s().p("A31KyIgQgEQgjhEgjh0IgEgNQhKj8AAkKQAAkLBKjdIAEgMQAjhmAjg3IAQgDMAyPAAAIgJATQghBAghBfQhRD3AAEkQAAEjBRDdQAgBRAgA0IAKARg");
	this.shape_24.setTransform(154,69);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(102,204,255,0.91)").s().p("A31KyIgQgEQgjhFgjhzIgDgNQhLj8AAkKQAAkLBKjdIAEgMQAjhmAjg3IAPgDMAyQAAAIgJATQggBAghBfQhRD3AAEkQAAEiBRDeQAfBRAgA0IAKARg");
	this.shape_25.setTransform(154,69);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(102,204,255,0.91)").s().p("A31KyIgPgEQgjhFgjhzIgEgOQhKj6AAkLQAAkLBKjdIAEgMQAjhmAjg2IAPgEMAyOAAAIgHATQghBAggBfQhQD3AAEkQAAEiBQDeQAfBRAfA0IAKARg");
	this.shape_26.setTransform(153.9,69);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(102,204,255,0.91)").s().p("A30KyIgQgEQgjhFgjhzIgDgOQhLj6AAkLQAAkLBKjdIAEgMQAjhlAjg3IAPgEMAyOAAAIgHASQggBBggBfQhPD3AAEkQAAEiBPDeQAeBRAfA0IAJARg");
	this.shape_27.setTransform(153.9,69);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(102,204,255,0.91)").s().p("A30KyIgPgEQgjhFgkh0IgDgNQhLj6AAkKIAAgBQAAkLBLjdIADgMQAkhlAig3IAPgEMAyOAAAIgHASQggBBggBfQhOD4AAEiQAAEjBODeQAfBRAfA0QAEAKAEAHg");
	this.shape_28.setTransform(153.9,69);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(102,204,255,0.91)").s().p("A3zKyIgQgEQgjhFgjh0IgEgNQhKj6AAkKIAAgBQAAkLBKjdIAEgMQAjhlAig3IAQgEMAyMAAAIgHARQgfBCgfBfQhND4AAEiQAAEiBNDfQAfBRAeA1IAIAQg");
	this.shape_29.setTransform(153.8,69);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(102,204,255,0.91)").s().p("A30KyIgOgEQgjhFgkh0IgDgNQhLj7AAkJIAAgBQAAkKBLjeIADgMQAjhlAjg3IAPgEMAyLAAAIgFARQgfBCgfBfQhMD4AAEiQAAEiBMDfQAeBRAdA1IAIAQg");
	this.shape_30.setTransform(153.8,69);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(102,204,255,0.91)").s().p("A3zKyIgQgFQgihEgjh0IgEgNQhKj7AAkJIAAgBQAAkKBKjeIAEgMQAihlAjg3IAPgEMAyLAAAIgFARQgfBCgeBeQhLD5AAEiQAAEhBLDgQAdBRAdA1IAIAQg");
	this.shape_31.setTransform(153.7,69);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(102,204,255,0.91)").s().p("A3zKyIgPgFQgjhFgjhzIgEgNQhKj7AAkJIAAgBQAAkKBKjeIAEgLQAjhmAjg3IAOgEMAyLAAAIgFARQgeBCgfBeQhKD6AAEhQAAEhBKDgQAeBRAdA1IAGAQg");
	this.shape_32.setTransform(153.7,69);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(102,204,255,0.91)").s().p("A3zKyIgPgFQgjhFgihzIgEgNQhKj7AAkJIAAgBQAAkKBKjdIAEgMQAihlAjg4IAPgEMAyJAAAIgEARQgeBCgeBeQhJD6AAEhQAAEgBJDhQAdBQAdA2IAGAQg");
	this.shape_33.setTransform(153.6,69);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(102,204,255,0.91)").s().p("A3yKyIgQgFQgihFgjhzIgEgNQhKj7AAkJIAAgBQAAkKBKjdIAEgMQAjhmAig3IAPgEMAyJAAAIgEAQQgeBDgdBeQhID6AAEhQAAEfBIDiQAdBQAcA3IAFAPg");
	this.shape_34.setTransform(153.6,69);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(102,204,255,0.91)").s().p("A3yKyIgPgFQgjhFgjhzIgDgOQhLj6AAkJIAAgBQABkKBJjdIAEgMQAjhmAjg3IAOgEMAyJAAAIgEAQQgdBDgdBeQhID6AAEhQAAEfBIDiQAcBQAcA3IAFAPg");
	this.shape_35.setTransform(153.6,69);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(102,204,255,0.91)").s().p("A3yKyIgPgFQgihFgkh0IgDgNQhKj6AAkJIAAgBQAAkKBJjdIAEgMQAjhlAjg4IAPgEMAyHAAAIgDAQQgdBDgcBeQhHD6ABEhQgBEfBHDiQAcBQAbA3IAEAPg");
	this.shape_36.setTransform(153.5,69);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(102,204,255,0.91)").s().p("A3yKyIgOgFQgjhFgjh0IgEgNQhKj6AAkJIAAgBQAAkKBKjdIAEgMQAjhlAig4IAPgEMAyHAAAIgDAQQgcBDgdBeQhFD6AAEhQAAEeBFDjQAcBQAbA3IAEAPg");
	this.shape_37.setTransform(153.5,69);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(102,204,255,0.91)").s().p("A3xKyIgPgGQgjhEgjh0IgDgNQhKj6AAkJIAAgBQAAkKBJjdIAEgMQAjhlAjg3IAOgFMAyGAAAIgCAPQgcBEgcBeQhED6AAEhQAAEeBEDjQAbBQAbA3IAEAPg");
	this.shape_38.setTransform(153.4,69);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(102,204,255,0.91)").s().p("A3xKyIgPgGQgihEgjh0IgEgNQhKj6AAkJIAAgBQAAkKBKjdIAEgMQAihlAjg3IAOgFMAyGAAAIgCAPQgbBEgcBeQhDD6AAEhQAAEeBDDjQAbBQAaA4IADAOg");
	this.shape_39.setTransform(153.4,69);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(102,204,255,0.91)").s().p("A3xKyIgOgGQgjhEgjh0IgDgNQhLj6AAkJIAAgBQABkKBJjdIAEgMQAjhkAig4IAOgFMAyFAAAIgBAPQgbBEgbBeQhCD7AAEfQAAEeBCDkQAaBQAaA4IACAOg");
	this.shape_40.setTransform(153.4,69);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgPgGQgjhFgjhzIgDgNQhKj6AAkJIAAgBQAAkKBJjdIAEgLQAjhmAig3IAPgFMAyEAAAIgBAPQgbBFgaBdQhCD7AAEfQAAEdBCDlQAaBQAZA4IADAOg");
	this.shape_41.setTransform(153.3,69);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(102,204,255,0.91)").s().p("A3xKyIgOgGQgjhFgihzIgEgNQhKj6AAkJIAAgBQAAkKBKjdIAEgLQAihmAjg3IAOgFMAyEAAAIgBAPQgaBFgbBdQhAD7AAEfQAAEdBADlQAaBQAZA4IACAOg");
	this.shape_42.setTransform(153.3,69);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgOgGQgjhFgjhzIgDgNQhKj6AAkJIAAgBQAAkKBJjcIAEgMQAjhlAig4IAOgFMAyDAAAIAAAOQgaBFgaBeQg/D7AAEfQAAEdA/DlQAZBQAZA4IABAOg");
	this.shape_43.setTransform(153.2,69);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgOgGQgjhFgjhzIgDgOQhKj5AAkJIAAgBQAAkKBJjcIAEgMQAjhlAig4IAOgFMAyDAAAIAAAOQgaBFgZBeQg/D7AAEfQAAEcA/DmQAYBQAZA5IABANg");
	this.shape_44.setTransform(153.2,69);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgOgHQgjhEgih0IgEgNQhKj5AAkJIAAgBQAAkKBKjcIAEgMQAihlAjg4IANgFMAyCAAAIABAOQgZBFgaBdQg9D9AAEeQAAEcA9DmQAZBQAYA5IAAANg");
	this.shape_45.setTransform(153.2,69);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgOgHQgihEgjh0IgEgNQhJj5gBkJIAAgBQABkKBJjcIAEgLQAihmAjg3IANgGMAyCAAAIAAAOQgYBFgZBdQg8D9AAEeQAAEcA8DmQAYBQAYA5IAAANg");
	this.shape_46.setTransform(153.2,69);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgOgHQgihFgjhzIgEgNQhJj6AAkIIAAgBQAAkJBJjdIAEgLQAihmAjg3IANgGMAyBAAAIABAOQgYBFgYBdQg8D9AAEeQAAEbA8DnQAXBQAYA5IgBANg");
	this.shape_47.setTransform(153.1,69);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgOgHQgihFgjhzIgEgNQhJj6AAkIIAAgBQAAkJBJjdIAEgLQAjhmAig3IAOgGMAx/AAAIACAOQgYBFgYBdQg6D9AAEeQAAEaA6DoQAYBPAWA6IgBANg");
	this.shape_48.setTransform(153.1,69);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgOgHQgihFgjhzIgEgNQhJj6AAkIIAAgBQAAkJBJjdIAEgLQAihmAjg3IAOgGMAx+AAAIADAOQgYBGgYBcQg5D9AAEeQAAEaA5DoQAYBPAWA7IgBAMg");
	this.shape_49.setTransform(153.1,69);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgNgHQgjhFgjhzIgDgNQhKj6AAkIIAAgBQAAkJBJjdIAEgLQAjhlAig4IAOgGMAx+AAAIADANQgXBHgYBcQg5D+AAEdQAAEZA5DpQAXBPAWA7IgCAMg");
	this.shape_50.setTransform(153.1,69);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgNgHQgjhGgihyIgEgNQhJj6gBkIIAAgBQAAkJBJjdIAFgLQAihlAjg4IAMgGMAx+AAAIAEANQgXBHgXBcQg4D+AAEdQAAEZA4DpQAWBPAWA7IgDAMg");
	this.shape_51.setTransform(153.1,69);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgNgHQgjhGgihyIgEgNQhJj6AAkIIAAgBQAAkJBJjdIAEgLQAihlAig4IAOgGMAx9AAAIADANQgWBHgWBcQg3D+AAEcQAAEZA3DqQAVBPAWA8IgDALg");
	this.shape_52.setTransform(153,69);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgNgHQgjhFgih0IgEgNQhJj5AAkIIAAgBQAAkJBJjcIAEgMQAihlAig4IAOgGMAx8AAAIAEANQgWBHgWBcQg2D+AAEcQAAEZA2DqQAVBPAVA8IgDALg");
	this.shape_53.setTransform(153,69);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgNgHQgjhGgihzIgEgNQhJj5AAkIIAAgBQAAkJBJjcIAEgMQAihkAig4IANgHMAx9AAAIAEAMQgWBIgWBcQg1D+AAEcQAAEYA1DrQAVBPAWA8IgEALg");
	this.shape_54.setTransform(153,69);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgNgHQgihGgjhzIgDgNQhKj5AAkIIAAgBQAAkJBJjcIAEgLQAjhmAig3IANgHMAx7AAAIAFAMQgVBIgWBcQg0D/AAEbQAAEYA0DrQAVBPAUA8IgEALg");
	this.shape_55.setTransform(153,69);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgMgIQgjhFgihzIgEgNQhJj5gBkIIAAgBQAAkJBJjcIAFgLQAhhmAjg3IANgHMAx6AAAIAGAMQgVBIgVBcQgzD/gBEbQABEYAzDrQAUBOAUA9IgFALg");
	this.shape_56.setTransform(153,69);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgMgIQgjhGgihyIgEgNQhJj5AAkIIAAgBQAAkJBJjcIAEgLQAihlAig4IANgHMAx6AAAIAFAMQgUBIgUBcQgzD/AAEbQAAEXAzDsQATBOAUA+IgFAKg");
	this.shape_57.setTransform(152.9,69);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgMgIQgjhFgih0IgEgMQhJj5AAkIIAAgBQAAkJBJjcIAEgLQAihlAig4IANgHMAx5AAAIAGAMQgUBIgUBcQgyD/AAEbQAAEXAyDsQATBOAUA+IgGAKg");
	this.shape_58.setTransform(152.9,69);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgNgIQgihFgih0IgEgMQhJj5AAkIIAAgBQAAkJBJjcIAEgLQAihlAig4IANgHMAx4AAAIAHALQgUBJgTBbQgxEAAAEbQAAEWAxDtQASBOAUA+IgHAKg");
	this.shape_59.setTransform(152.9,69);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgMgIQgjhGgihzIgDgMQhKj5AAkIIAAgBQAAkJBJjcIAEgLQAihlAig4IANgHMAx4AAAIAHALQgUBJgTBbQgvEAAAEbQAAEWAvDtQATBOASA+IgGAKg");
	this.shape_60.setTransform(152.9,69);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgNgIQgjhGghhzIgEgMQhJj5gBkIIAAgBQAAkJBJjcIAFgLQAhhkAig4IANgIMAx3AAAIAHALQgSBJgTBbQgvEBAAEaQAAEVAvDuQASBOASA+IgHAKg");
	this.shape_61.setTransform(152.9,69);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgNgIQgjhGgihzIgDgNQhJj4gBkIIAAgBQABkJBIjcIAEgLQAjhkAhg4IANgIMAx2AAAIAIALQgSBJgTBbQguEBAAEaQAAEVAuDuQASBOASA/IgIAJg");
	this.shape_62.setTransform(152.9,69);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgMgJQgihFgjhzIgDgNQhJj4AAkIIAAgBQAAkJBIjcIAEgLQAjhkAig4IAMgIMAx2AAAIAIALQgSBJgSBbQgtECAAEZQAAEVAtDuQARBOASA/IgJAJg");
	this.shape_63.setTransform(152.8,69);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgMgJQgihGgjhyIgDgNQhJj5AAkHIAAgBQAAkIBJjdIADgLQAjhkAig4IAMgIMAx1AAAIAJAKQgSBLgRBaQgsECAAEZQAAEUAsDvQAQBOASA/IgJAJg");
	this.shape_64.setTransform(152.8,69);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgMgJQgjhGgihyIgEgNQhJj5AAkHIAAgBQAAkIBJjdIAEgKQAihlAig4IAMgIMAx0AAAIAKAKQgSBLgRBaQgrEBAAEaQAAETArDwQARBOARA/IgKAJg");
	this.shape_65.setTransform(152.8,69);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgNgJQghhFgjh0IgEgMQhJj5AAkHIAAgBQABkIBIjdIAEgKQAihlAig4IANgIMAxzAAAIAJAKQgQBLgSBaQgpECAAEZQAAETApDwQARBOAQA/IgJAJg");
	this.shape_66.setTransform(152.8,69);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgNgJQghhGgjhzIgEgMQhJj5AAkHIAAgBQABkIBIjdIAEgKQAihlAig4IAMgIMAxzAAAIAKAKQgQBLgRBaQgpECAAEZQAAETApDwQAQBOAQBAIgKAIg");
	this.shape_67.setTransform(152.8,69);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgMgJQgihGgjhzIgDgMQhJj5AAkHIAAgBQAAkIBIjcIAEgLQAihkAig5IAMgIMAxyAAAIALAJQgQBMgQBaQgoEDAAEYQAAESAoDxQAPBOAQBAIgLAIg");
	this.shape_68.setTransform(152.7,69);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(102,204,255,0.91)").s().p("A3wKyIgLgJQgihGgjhzIgDgMQhJj5AAkHIAAgBQAAkIBJjcIADgLQAihlAjg3IALgJMAxyAAAIALAJQgQBMgPBaQgnEDAAEYQAAESAnDxQAPBOAPBAIgMAIg");
	this.shape_69.setTransform(152.7,69);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgMgKQgihGgihyIgEgMQhJj5AAkHIAAgBQAAkIBJjcIAEgLQAihkAig4IALgJMAxxAAAIAMAIQgQBNgPBaQgmEDAAEYQAAERAmDyQAPBNAPBBIgMAIg");
	this.shape_70.setTransform(152.7,69);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgMgKQgihGgihyIgEgMQhJj5AAkHIAAgBQABkIBIjcIAEgLQAihkAhg4IANgJMAxwAAAIAMAIQgPBNgPBaQgmEDAAEXQAAESAmDyQAOBNAPBBIgNAIg");
	this.shape_71.setTransform(152.7,69);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgMgKQgihGgihyIgEgMQhJj6AAkGIAAgBQABkIBIjcIAEgLQAihkAhg4IANgJMAxvAAAIANAIQgPBNgPBaQgkEDAAEXQAAESAkDyQAOBNAPBCIgOAHg");
	this.shape_72.setTransform(152.7,69);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgMgKQgihGgihyIgDgMQhJj6AAkGIAAgBQAAkIBIjcIAEgLQAihkAig3IALgKMAxvAAAIANAIQgOBNgOBaQgkEEAAEWQAAERAkDzQANBNAOBCIgNAHg");
	this.shape_73.setTransform(152.6,69);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgLgKQgjhGgihyIgDgMQhJj6AAkGIAAgBQAAkIBJjcIADgLQAihjAig4IALgKMAxvAAAIANAIQgOBNgOBaQgiEEAAEWQAAERAiDzQAOBNANBCIgNAHg");
	this.shape_74.setTransform(152.6,69);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgLgKQgihGgihzIgEgLQhJj6AAkGIAAgBQAAkIBJjcIAEgKQAhhlAig3IAMgKMAxtAAAIAOAHQgOBNgNBbQghEEAAEWQAAEQAhD0QANBNANBCIgOAHg");
	this.shape_75.setTransform(152.6,69);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgLgKQgihGgjhzIgDgMQhJj5AAkGIAAgBQAAkIBIjcIAEgKQAihlAig3IAMgKMAxsAAAIAPAHQgOBOgNBaQggEEAAEWQAAEQAgD0QANBNANBCIgPAHg");
	this.shape_76.setTransform(152.6,69);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgLgLQgihFgihzIgEgMQhJj5AAkGIAAgBQAAkIBIjcIAFgKQAhhlAig3IAMgKMAxsAAAIAPAHQgNBOgNBaQggEEAAEWQAAEQAgD0QAMBNANBCIgPAHg");
	this.shape_77.setTransform(152.6,69);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgLgLQgihFgihzIgDgMQhJj5AAkGIAAgBQAAkIBIjbIAEgLQAihkAhg4IAMgKMAxrAAAIAPAHQgMBOgMBaQgfEEAAEWQAAEPAfD1QALBNAMBCIgPAHg");
	this.shape_78.setTransform(152.5,69);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgKgLQgjhGgihyIgDgMQhJj5AAkGIAAgBQAAkIBIjbIAEgLQAihkAig4IALgKMAxqAAAIAQAHQgMBOgMBaQgdEEgBEWQABEOAdD2QAMBNALBDIgQAGg");
	this.shape_79.setTransform(152.5,69);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgLgLQgihGgihyIgDgMQhJj5AAkGIAAgBQAAkIBIjbIAEgLQAihkAig4IALgKMAxqAAAIAQAGIgXCoQgdEGAAEVQAAEOAdD2QALBNALBDIgQAGg");
	this.shape_80.setTransform(152.5,69);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgLgLQgihGgihyIgDgMQhJj5AAkGIAAgBQAAkHBIjcIAEgLQAihjAig4IALgLMAxpAAAIARAGQgMBPgLBZQgbEGAAEVQAAENAbD3QALBNALBDIgRAGg");
	this.shape_81.setTransform(152.5,69);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgLgLQgihGghhyIgEgMQhJj5AAkGIAAgBQAAkHBIjcIAFgLQAhhjAig4IALgLMAxpAAAIAQAGQgKBPgLBZQgbEGAAEVQAAENAbD3QAKBNAKBDIgRAGg");
	this.shape_82.setTransform(152.5,69);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgKgLQgihHgihyIgEgLQhIj5AAkGIAAgBQAAkIBIjbIAEgLQAhhjAig4IALgLMAxoAAAIARAGIgVCoQgZEGAAEUQAAENAZD4IAVCQIgSAGg");
	this.shape_83.setTransform(152.4,69);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgKgMQgihFgihzIgDgLQhJj5AAkGIAAgBQAAkIBIjbIAEgLQAhhjAig4IALgLMAxoAAAIARAFIgUCpQgZEHABETQgBENAZD4IAUCRIgTAFg");
	this.shape_84.setTransform(152.4,69);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgKgMQgihFgihzIgDgMQhJj4AAkGIAAgBQAAkIBIjbIAEgLQAhhjAig4IALgLMAxnAAAIASAFQgKBQgJBZQgZEHAAETQAAENAZD4IASCRIgTAFg");
	this.shape_85.setTransform(152.4,69);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgKgMQgihGgihyIgDgMQhJj4AAkGIAAgBQAAkIBIjbIAEgLQAihjAhg4IALgLMAxmAAAIATAFIgTCpQgXEHAAETQAAEMAXD5IASCRIgTAFg");
	this.shape_86.setTransform(152.4,69);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgKgNQgihFghhyIgEgMQhIj4gBkGIAAgBQAAkIBIjbIAFgLQAhhjAhg4IALgLMAxlAAAIATAFIgSCpQgVEHAAETQAAEMAVD5IASCRIgUAFg");
	this.shape_87.setTransform(152.4,69);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgKgNQgihFghhyIgEgMQhIj4AAkGIAAgBQAAkHBIjbIAEgMQAhhjAig4IAKgLMAxlAAAIATAFIgRCpQgVEHAAETQAAELAVD6IARCRIgVAFg");
	this.shape_88.setTransform(152.3,69);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgKgNQgjhGghhxIgDgMQhJj4AAkGIAAgBQAAkHBIjbIAEgLQAhhkAig3IAKgMMAxkAAAIAUAEIgQCqQgUEHAAETQAAELAUD6IAQCSIgVAEg");
	this.shape_89.setTransform(152.3,69);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgKgNQgjhGgihxIgCgMQhJj5AAkFIAAgBQAAkHBIjbIADgLQAihkAig3IAKgMMAxjAAAIAVAEIgPCqQgUEHABETQgBEKAUD7IAPCSIgWAEg");
	this.shape_90.setTransform(152.3,69);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgJgNQgihGgihyIgDgLQhJj5AAkFIAAgBQAAkHBIjbIAEgLQAhhkAig3IAKgMMAxjAAAIAVAEIgPCqQgSEIAAESQAAEKASD7IAOCSIgWAEg");
	this.shape_91.setTransform(152.3,69);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgJgNQgihGgihyIgDgLQhIj5gBkFIAAgBQAAkHBIjbIAEgLQAihjAhg4IAKgMMAxjAAAIAVAEIgPCqQgQEIAAESQAAEJAQD8IAOCSIgXAEg");
	this.shape_92.setTransform(152.3,69);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgKgNQgihGgihyIgDgLQhIj5AAkFIAAgBQAAkHBHjbIAEgLQAihjAhg4IAKgMMAxiAAAIAVAEIgNCpQgQEJAAESQAAEJAQD8IANCSIgXAEg");
	this.shape_93.setTransform(152.2,69);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgJgNQgihGgihyIgDgMQhIj3AAkGIAAgBQAAkHBHjbIAEgLQAihjAhg4IAKgMMAxhAAAIAWAEIgMCpQgQEJAAESQAAEIAQD9IAMCTIgYADg");
	this.shape_94.setTransform(152.2,69);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgKgOQghhFgjhyIgCgMQhJj3AAkGIAAgBQAAkHBIjbIADgLQAihiAhg5IALgMMAxgAAAIAWAEIgMCpQgOEKAAEQQAAEKAOD8IALCTIgXADg");
	this.shape_95.setTransform(152.2,69);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgKgOQghhFgihyIgDgMQhJj3AAkGIAAgBQAAkHBIjbIAEgLQAhhiAhg5IAKgMMAxgAAAIAXADIgLCqQgNEKAAEQQAAEJAND9IAKCTIgYADg");
	this.shape_96.setTransform(152.2,69);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyIgJgOQghhFgihyIgDgMQhIj3gBkGIAAgBQAAkHBIjbIAEgLQAihiAgg4IAKgNMAxfAAAIAYADIgKCqQgNEKAAEQQAAEJAND9IAJCUIgZACg");
	this.shape_97.setTransform(152.2,69);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgJgOQgihFgihyIgDgMQhIj4AAkFIAAgBQAAkGBHjbIAEgMQAhhiAig4IAKgNMAxeAAAIAXADIgJCqQgLEKAAEQQAAEIALD+IAJCUIgZACg");
	this.shape_98.setTransform(152.1,69);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgJgOQgihGgihxIgDgMQhIj4AAkFIAAgBQAAkGBHjbIAEgLQAhhjAig4IAJgNMAxeAAAIAYADIgICqQgLELAAEPQAAEIALD+IAICUIgaACg");
	this.shape_99.setTransform(152.1,69);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgJgOQgihGgihxIgCgMQhJj4AAkFIAAgBQAAkGBIjbIADgLQAihjAhg4IAKgNMAxcAAAIAZACIgICrQgKEKAAEQQAAEHAKD/IAHCUIgaACg");
	this.shape_100.setTransform(152.1,69);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgJgOQgihGghhxIgEgMQhIj4AAkFIAAgBQAAkGBIjbIAEgLQAhhjAhg4IAKgNMAxcAAAIAZACIgHCrQgJEKAAEQQAAEGAJEAIAHCUIgbACg");
	this.shape_101.setTransform(152.1,69);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgJgPQghhGgihwIgEgMQhIj4AAkFIAAgBQAAkGBIjbIAEgLQAhhiAhg5IAJgNMAxcAAAIAaACIgGCrQgIELAAEPQAAEGAIEAIAGCVIgbABg");
	this.shape_102.setTransform(152.1,69);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgJgPQghhGgihwIgDgMQhIj4AAkFIAAgBQAAkGBHjbIAEgLQAhhiAhg5IAKgNMAxbAAAIAZACIgFCrQgHELAAEPQAAEGAHEAIAFCVIgbABg");
	this.shape_103.setTransform(152,69);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgJgPQghhFgihyIgDgMQhIj3AAkFIAAgBQAAkGBHjbIAEgLQAhhiAhg5IAKgNMAxaAAAIAaACIgFCrQgFELAAEPQAAEFAFEBIAFCVIgcABg");
	this.shape_104.setTransform(152,69);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgIgPQgihFgihyIgDgMQhIj3AAkFIAAgBQAAkGBHjbIAEgLQAhhiAig4IAJgOMAxZAAAIAbABIgECsQgEELgBEPQABEFAEEBIAECVIgdABg");
	this.shape_105.setTransform(152,69);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgIgPQgihGgihxIgDgMQhIj3AAkFIAAgBQAAkGBHjbIAEgLQAhhiAig4IAJgOMAxZAAAIAbABIgDCsQgEELAAEPQAAEFAEEBIADCVIgdABg");
	this.shape_106.setTransform(152,69);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgJgPQghhGghhxIgEgMQhIj3AAkFIAAgBQAAkGBHjbIAFgLQAhhiAgg4IAKgOMAxYAAAIAbABIgCCrQgCENAAENQAAEFACECIACCWIgdAAg");
	this.shape_107.setTransform(152,69);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyIgJgPQghhGghhxIgEgNQhIj2AAkFIAAgBQAAkGBHjaIAFgLQAhhjAgg4IAKgOMAxXAAAIAcABIgCCrQgBENAAENQAAEFABECIACCWIgeAAg");
	this.shape_108.setTransform(152,69);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(102,204,255,0.91)").s().p("AZnKyMgxVAAAIgIgQQgihGghhwIgDgNQhIj2AAkFIAAgBQAAkGBHjaIAEgLQAhhjAhg4IAJgOMAxXAAAIAcAAIgBCsIgBIaIABIHIABCWIgeAAg");
	this.shape_109.setTransform(151.9,69);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(102,204,255,0.91)").s().p("A3uKyQgmhJglh9QhLj9AAkMQAAkNBLjeQAlhvAmg6MAxzAAAIAAVjg");
	this.shape_110.setTransform(151.9,69);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(102,204,255,0.91)").s().p("A3vKyQglhJglh9QhLj9AAkMQAAkMBLjfQAlhvAlg6MAxzAAAIAADZIABIHIgBG0IAADPMgxzAAAg");
	this.shape_111.setTransform(152,69);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(102,204,255,0.91)").s().p("A3xKyQglhJglh9QhIj+gBkLQABkMBIjfQAlhvAlg6MAxzAAAIABDZQABEEAAEDIgBG0IgBDPMgxzAAAg");
	this.shape_112.setTransform(152.2,69);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(102,204,255,0.91)").s().p("A3yKyQgkhJglh+QhIj8AAkMQAAkLBIjgQAlhvAkg6MAxzAAAIACDZQABEEAAEDQAADZgBDbIgCDPMgxzAAAg");
	this.shape_113.setTransform(152.3,69);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(102,204,255,0.91)").s().p("A3zKyQgkhKgkh9QhIj8AAkMQAAkLBIjgQAkhuAkg7MAxyAAAIADDZQACEEAAEDQAADZgCDbIgDDPMgxyAAAg");
	this.shape_114.setTransform(152.5,69);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(102,204,255,0.91)").s().p("A30KyQgkhKgjh9QhIj8AAkMQAAkLBIjgQAjhuAkg7MAxyAAAIADDZQADEEAAEDQAADZgDDbIgDDPMgxyAAAg");
	this.shape_115.setTransform(152.6,69);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(102,204,255,0.91)").s().p("A32KyQgjhLgkh8QhGj9AAkLQAAkLBGjgQAkhuAjg7MAxyAAAIAEDZQAEEEAAEDQAADZgEDbIgEDPMgxyAAAg");
	this.shape_116.setTransform(152.8,69);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(102,204,255,0.91)").s().p("A33KyQgjhLgjh8QhGj9AAkLQAAkKBGjhQAjhuAjg7MAxyAAAIAEDZQAFEEAAEDQAADYgFDcIgEDPMgxyAAAg");
	this.shape_117.setTransform(152.9,69);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(102,204,255,0.91)").s().p("A35KyQgihLgjh8QhFj9ABkLQgBkKBFjhQAjhtAig8MAxyAAAIAGDZQAEEEAAEDQAADYgEDcIgGDPMgxyAAAg");
	this.shape_118.setTransform(153.1,69);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(102,204,255,0.91)").s().p("A36KyQgihLgih8QhEj9AAkLQAAkKBEjgQAihuAig8MAxyAAAIAGDYQAFEFAAEDQAADYgFDcIgGDPMgxyAAAg");
	this.shape_119.setTransform(153.2,69);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(102,204,255,0.91)").s().p("A38KyQghhLgih8QhDj+AAkKQAAkJBDjhQAihuAhg8MAxyAAAIAHDYQAGEEAAEEQAADYgGDcIgHDPMgxyAAAg");
	this.shape_120.setTransform(153.4,69);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(102,204,255,0.91)").s().p("A39KyQghhMghh7QhDj+AAkKQAAkJBDjhQAhhtAhg9MAxyAAAIAHDYQAHEEAAEEQAADXgHDdIgHDPMgxyAAAg");
	this.shape_121.setTransform(153.5,69);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(102,204,255,0.91)").s().p("A3+KyQghhMghh7QhCj+AAkKQAAkJBCjhQAhhsAhg+MAxyAAAIAHDYQAIEEAAEEQAADXgIDdIgHDPMgxyAAAg");
	this.shape_122.setTransform(153.6,69);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(102,204,255,0.91)").s().p("A3/KyQghhMggh7QhBj+AAkKQAAkJBBjhQAghsAhg+MAxxAAAIAIDYQAJEEgBEEQABDXgJDdIgIDPMgxxAAAg");
	this.shape_123.setTransform(153.8,69);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(102,204,255,0.91)").s().p("A4BKyQgghNggh7QhAj9AAkKQAAkIBAjiQAghsAgg+MAxyAAAIAIDXQAJEFAAEEQAADXgJDdIgIDPMgxyAAAg");
	this.shape_124.setTransform(153.9,69);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(102,204,255,0.91)").s().p("A4CKyQgghNggh7Qg/j9AAkKQAAkIA/jiQAghrAgg/MAxxAAAIAKDXQAJEFAAEEQAADWgJDeIgKDPMgxxAAAg");
	this.shape_125.setTransform(154.1,69);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(102,204,255,0.91)").s().p("A4DKyQgfhNggh7Qg/j9AAkKQAAkIA/jiQAghrAfg/MAxxAAAIAKDXQAKEFAAEEQAADWgKDeIgKDPMgxxAAAg");
	this.shape_126.setTransform(154.2,69);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(102,204,255,0.91)").s().p("A4EKyQgfhOgfh6Qg/j9AAkKQAAkIA/jiQAfhrAfg/MAxxAAAIAKDXQALEFAAEEQAADWgLDeIgKDPMgxxAAAg");
	this.shape_127.setTransform(154.3,69);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(102,204,255,0.91)").s().p("A4GKyQgfhOgeh6Qg+j+AAkJQAAkHA+jjQAehrAfg/MAxxAAAIALDXQALEFAAEEQAADWgLDeIgLDPMgxxAAAg");
	this.shape_128.setTransform(154.5,69);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(102,204,255,0.91)").s().p("A4HKyQgehOgfh6Qg8j9AAkKQAAkHA8jjQAfhqAehAMAxxAAAIAMDXQALEFAAEEQAADVgLDfIgMDPMgxxAAAg");
	this.shape_129.setTransform(154.6,69);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(102,204,255,0.91)").s().p("A4JKyQgdhPgeh5Qg8j9AAkKQAAkHA8jiQAehrAdhAMAxxAAAIANDXQAMEFAAEEQAADVgMDfIgNDPMgxxAAAg");
	this.shape_130.setTransform(154.8,69);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(102,204,255,0.91)").s().p("A4JKyQgehPgeh5Qg7j+AAkJQAAkGA7jjQAehrAehAMAxwAAAIANDXQANEFAAEEQAADVgNDfIgNDPMgxwAAAg");
	this.shape_131.setTransform(154.9,69);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(102,204,255,0.91)").s().p("A4LKyQgdhQgeh4Qg6j+AAkJQAAkGA6jjQAehqAdhBMAxwAAAIAODXQAOEFAAEEQAADVgODfIgODPMgxwAAAg");
	this.shape_132.setTransform(155.1,69);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(102,204,255,0.91)").s().p("A4MKyQgdhQgdh4Qg5j+gBkJQABkGA5jjQAdhqAdhBMAxwAAAIAODXQAOEFABEEQgBDUgODgIgODPMgxwAAAg");
	this.shape_133.setTransform(155.2,69);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(102,204,255,0.91)").s().p("A4OKyQgchQgdh5Qg4j9AAkJQAAkGA4jjQAdhqAchBMAxwAAAIAQDXQAPEEAAEFQAADUgPDgIgQDPMgxwAAAg");
	this.shape_134.setTransform(155.4,69);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(102,204,255,0.91)").s().p("A4PKyQgchRgch4Qg4j+AAkIQAAkGA4jiQAchqAchCMAxwAAAIAQDWQAPEFAAEEQAADUgPDiIgQDOMgxwAAAg");
	this.shape_135.setTransform(155.5,69);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(102,204,255,0.91)").s().p("A4RKyQgbhRgch4Qg3j+AAkIQAAkGA3jiQAchqAbhCMAxwAAAIAQDWQAREFAAEEQAADUgRDiIgQDOMgxwAAAg");
	this.shape_136.setTransform(155.7,69);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(102,204,255,0.91)").s().p("A4SKyQgbhRgbh4Qg3j+AAkIQAAkFA3jjQAbhqAbhCMAxwAAAIARDWQAREFAAEEQAADUgRDiIgRDOMgxwAAAg");
	this.shape_137.setTransform(155.8,69);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(102,204,255,0.91)").s().p("A4TKyQgbhSgbh3Qg2j+AAkIQAAkFA2jjQAbhpAbhDMAxwAAAQAJBjAIBzQASEFAAEEQAADUgSDiIgRDOMgxwAAAg");
	this.shape_138.setTransform(155.9,69);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(102,204,255,0.91)").s().p("A4VKyQgahSgbh4Qg0j9AAkIQAAkFA0jjQAbhpAahDMAxwAAAIASDWQATEFgBEEQABDTgTDjIgSDOMgxwAAAg");
	this.shape_139.setTransform(156.1,69);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(102,204,255,0.91)").s().p("A4WKyQgahSgah4Qg0j9AAkIQAAkEA0jkQAahpAahDMAxwAAAQAJBjAJBzQATEFAAEEQAADTgTDjQgJBsgJBiMgxwAAAg");
	this.shape_140.setTransform(156.2,69);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(102,204,255,0.91)").s().p("A4XKyQgahTgZh3Qg0j9AAkIQAAkEA0jkQAZhpAahDMAxvAAAIAUDWQATEFAAEEQAADTgTDjIgUDOMgxvAAAg");
	this.shape_141.setTransform(156.4,69);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(102,204,255,0.91)").s().p("A4YKyQgahTgZh3Qgzj9AAkIQAAkEAzjkQAZhpAahDMAxvAAAQAKBiAKB0QAUEFAAEEQAADTgUDjIgUDOMgxvAAAg");
	this.shape_142.setTransform(156.5,69);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(102,204,255,0.91)").s().p("A4aKyQgZhTgZh3Qgyj9AAkIQAAkEAyjkQAZhoAZhEMAxwAAAQAKBiAKB0QAVEFAAEEQAADTgVDjQgKBtgKBhMgxwAAAg");
	this.shape_143.setTransform(156.6,69);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(102,204,255,0.91)").s().p("A4bKyQgZhTgYh3Qgxj9AAkIQAAkDAxjlQAYhoAZhEMAxvAAAQALBiAKB0QAVEFAAEEQAADSgVDkIgVDOMgxvAAAg");
	this.shape_144.setTransform(156.8,69);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(102,204,255,0.91)").s().p("A4cKyQgZhTgYh3Qgwj9AAkIQAAkDAwjlQAYhoAZhEMAxvAAAQALBhAKB1QAWEFAAEEQAADSgWDkQgKBtgLBhMgxvAAAg");
	this.shape_145.setTransform(156.9,69);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(102,204,255,0.91)").s().p("A4eKyQgYhUgXh2Qgwj9AAkIQAAkCAwjlQAXhoAYhFMAxvAAAQAMBhALB0QAWEGAAEEQAADSgWDkQgLBugMBgMgxvAAAg");
	this.shape_146.setTransform(157.1,69);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(102,204,255,0.91)").s().p("A4fKyQgXhUgYh2Qgvj+AAkHQAAkCAvjlQAYhoAXhFMAxvAAAQALBhAMB0QAXEFAAEFQAADSgXDkQgMBugLBgMgxvAAAg");
	this.shape_147.setTransform(157.2,69);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(102,204,255,0.91)").s().p("A4hKyQgWhUgYh2Qgtj+gBkHQABkCAtjlQAYhoAWhFMAxvAAAQAMBhAMB0QAXEFAAEFQAADRgXDlQgMBugMBgMgxvAAAg");
	this.shape_148.setTransform(157.4,69);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(102,204,255,0.91)").s().p("A4iKyQgXhVgWh1Qgtj+AAkHQAAkBAtjmQAWhnAXhGMAxvAAAQAMBhAMB0QAZEFgBEFQABDRgZDlQgMBugMBgMgxvAAAg");
	this.shape_149.setTransform(157.5,69);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(102,204,255,0.91)").s().p("A4jKyQgWhVgXh2Qgsj9AAkHQAAkBAsjmQAXhnAWhGMAxvAAAQAMBgANB1QAYEFAAEFQAADRgYDlQgNBugMBgMgxvAAAg");
	this.shape_150.setTransform(157.6,69);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(102,204,255,0.91)").s().p("A4kKyQgWhVgWh2Qgsj9AAkHQAAkBAsjmQAWhnAWhGMAxuAAAQANBfANB2QAZEFAAEFQAADRgZDlQgNBvgNBfMgxuAAAg");
	this.shape_151.setTransform(157.8,69);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(102,204,255,0.91)").s().p("A4mKyQgVhWgWh1Qgrj9AAkHQAAkBArjmQAWhmAVhHMAxvAAAQANBfANB2QAaEFAAEFQAADQgaDmQgNBvgNBfMgxvAAAg");
	this.shape_152.setTransform(157.9,69);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(102,204,255,0.91)").s().p("A4nKyQgVhWgVh1Qgrj9AAkHQAAkBArjmQAVhmAVhHMAxuAAAQAOBfANB2QAbEFAAEFQAADQgbDmQgNBvgOBfMgxuAAAg");
	this.shape_153.setTransform(158.1,69);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(102,204,255,0.91)").s().p("A4oKyQgVhWgVh1Qgpj+AAkGQAAkBApjmQAVhlAVhIMAxuAAAQAOBeAOB3QAbEFAAEFQAADQgbDmQgOBvgOBfMgxuAAAg");
	this.shape_154.setTransform(158.2,69);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(102,204,255,0.91)").s().p("A4pKyQgVhXgVh0Qgpj+AAkGQAAkAApjnQAVhlAVhIMAxtAAAQAOBeAOB3QAcEFAAEFQAADQgcDmQgOBvgOBfMgxtAAAg");
	this.shape_155.setTransform(158.4,69);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(102,204,255,0.91)").s().p("A4rKyQgUhXgUh0Qgoj+AAkGQAAkAAojnQAUhlAUhIMAxuAAAQAOBeAPB3QAcEFAAEFQAADPgcDnQgPBwgOBeMgxuAAAg");
	this.shape_156.setTransform(158.5,69);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(102,204,255,0.91)").s().p("A4sKyQgUhYgUhzQgnj+AAkGQAAkAAnjmQAUhmAUhIMAxtAAAQAPBeAOB2QAeEFAAEGQAADPgeDnQgOBwgPBeMgxtAAAg");
	this.shape_157.setTransform(158.7,69);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(102,204,255,0.91)").s().p("A4tKyQgUhYgThzQgnj+AAkGQAAj/AnjnQAThlAUhJMAxtAAAQAPBdAPB3QAeEFAAEGQAADPgeDnQgPBwgPBeMgxtAAAg");
	this.shape_158.setTransform(158.8,69);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(102,204,255,0.91)").s().p("A4vKyQgThYgThzQgmj+AAkGQAAj/AmjnQAThlAThJMAxuAAAQAPBdAPB3QAfEFAAEGQAADPgfDnQgPBwgPBeMgxuAAAg");
	this.shape_159.setTransform(158.9,69);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(102,204,255,0.91)").s().p("A4wKyQgThYgSh0Qglj9AAkGQAAj/AljnQAShlAThJMAxtAAAQAQBdAPB3QAfEFAAEGQAADOgfDoQgPBwgQBeMgxtAAAg");
	this.shape_160.setTransform(159.1,69);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(102,204,255,0.91)").s().p("A4yKyQgShYgSh0Qgkj9AAkGQAAj/AkjnQAShlAShJMAxuAAAQAQBcAPB4QAgEFAAEGQAADOggDoQgPBxgQBdMgxuAAAg");
	this.shape_161.setTransform(159.2,69);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(102,204,255,0.91)").s().p("A4yKyQgThZgRhzQgkj+AAkFQAAj+AkjoQARhkAThKMAxsAAAQARBcAQB4QAgEFAAEGQAADOggDoQgQBxgRBdMgxsAAAg");
	this.shape_162.setTransform(159.4,69);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(102,204,255,0.91)").s().p("A40KyQgShZgRhzQgjj+AAkFQAAj+AjjoQARhjAShLMAxtAAAQAQBcARB4QAhEFAAEGQAADOghDoQgRBxgQBdMgxtAAAg");
	this.shape_163.setTransform(159.5,69);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(102,204,255,0.91)").s().p("A41KyQgShZgQhzQgjj+AAkFQAAj9AjjpQAQhjAShLMAxsAAAQARBcARB4QAiEFAAEGQAADNgiDpQgRBxgRBdMgxsAAAg");
	this.shape_164.setTransform(159.7,69);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(102,204,255,0.91)").s().p("A43KyQgRhagQhyQghj+AAkFQAAj9AhjpQAQhjARhLMAxtAAAQARBcARB4QAjEFgBEGQABDNgjDpQgRBxgRBdMgxtAAAg");
	this.shape_165.setTransform(159.8,69);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(102,204,255,0.91)").s().p("A44KyQgQhagRhyQggj+AAkFQAAj9AgjpQARhiAQhMMAxtAAAQARBbASB5QAiEFAAEGQAADMgiDqQgSBygRBcMgxtAAAg");
	this.shape_166.setTransform(159.9,69);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(102,204,255,0.91)").s().p("A45KyQgQhagQhyQggj+AAkFQAAj8AgjqQAQhiAQhMMAxsAAAQASBbASB5QAjEFAAEGQAADMgjDqQgSBygSBcMgxsAAAg");
	this.shape_167.setTransform(160.1,69);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(102,204,255,0.91)").s().p("A47KyQgPhbgQhxQgfj+AAkFQAAj8AfjpQAQhjAPhMMAxtAAAQASBbASB4QAkEFAAEHQAADMgkDqQgSBygSBcMgxtAAAg");
	this.shape_168.setTransform(160.2,69);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(102,204,255,0.91)").s().p("A48KyQgPhbgPhxQgfj+AAkFQAAj8AfjpQAPhiAPhNMAxsAAAQATBaASB5QAlEFAAEHQAADMglDqQgSBzgTBbMgxsAAAg");
	this.shape_169.setTransform(160.4,69);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(102,204,255,0.91)").s().p("A4+KyQgOhbgPhyQgdj+AAkEQAAj8AdjpQAPhiAOhNMAxtAAAQATBaATB5QAlEFAAEHQAADMglDqQgTBzgTBbMgxtAAAg");
	this.shape_170.setTransform(160.5,69);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(102,204,255,0.91)").s().p("A4+KyQgPhcgOhxQgej+AAkEQAAj7AejqQAOhiAPhNMAxrAAAQAUBaASB5QAnEFAAEHQAADMgnDqQgSBzgUBbMgxrAAAg");
	this.shape_171.setTransform(160.7,69);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(102,204,255,0.91)").s().p("A5AKyQgOhcgOhxQgcj+AAkEQAAj7AcjqQAOhiAOhNMAxsAAAQAUBZASB6QAnEFAAEHQAADLgnDrQgSBzgUBbMgxsAAAg");
	this.shape_172.setTransform(160.8,69);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(102,204,255,0.91)").s().p("A5BKyQgOhdgOhwQgbj+AAkEQAAj7AbjqQAOhhAOhOMAxrAAAQAUBZAUB6QAnEFAAEHQAADLgnDrQgUBzgUBbMgxrAAAg");
	this.shape_173.setTransform(161,69);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(102,204,255,0.91)").s().p("A5DKyQgNhdgNhwQgbj+AAkEQAAj6AbjrQANhhANhOMAxsAAAQAUBZAUB6QAoEFAAEHQAADKgoDsQgUBzgUBbMgxsAAAg");
	this.shape_174.setTransform(161.1,69);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(102,204,255,0.91)").s().p("A5EKyQgNhdgNhwQgaj+AAkEQAAj6AajrQANhhANhOMAxsAAAQAUBYAUB7QApEFAAEHQAADKgpDsQgUBzgUBbMgxsAAAg");
	this.shape_175.setTransform(161.2,69);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(102,204,255,0.91)").s().p("A5FKyQgNhegMhvQgZj+AAkEQAAj6AZjrQAMhgANhPMAxrAAAQAVBYAUB7QApEFAAEHQAADKgpDsQgUB0gVBaMgxrAAAg");
	this.shape_176.setTransform(161.4,69);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(102,204,255,0.91)").s().p("A5HKyQgMhegMhvQgYj/AAkDQAAj6AYjrQAMhgAMhPMAxsAAAQAVBXAUB8QAqEFAAEHQAADJgqDtQgUB0gVBaMgxsAAAg");
	this.shape_177.setTransform(161.5,69);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(102,204,255,0.91)").s().p("A5IKyIgYjNQgXj/AAkDQAAj5AXjsQAMhgAMhPMAxrAAAQAWBXAVB8QAqEFAAEHQAADJgqDtQgVB0gWBaMgxrAAAg");
	this.shape_178.setTransform(161.7,69);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(102,204,255,0.91)").s().p("A5JKyIgXjNQgXj/AAkDQAAj6AXjrQAMhfALhQMAxrAAAQAWBXAVB8QArEFAAEHQAADJgrDtQgVB1gWBZMgxrAAAg");
	this.shape_179.setTransform(161.8,69);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(102,204,255,0.91)").s().p("A5KKyQgMhfgLhuQgVj/gBkDQABj5AVjsQALhfAMhQMAxqAAAQAXBWAVB9QAsEFAAEHQAADJgsDtQgVB1gXBZMgxqAAAg");
	this.shape_180.setTransform(162,69);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(102,204,255,0.91)").s().p("A5MKyIgVjOQgVj+AAkDQAAj5AVjsIAVivMAxrAAAQAWBWAWB9QAsEFAAEHQAADIgsDuQgWB1gWBZMgxrAAAg");
	this.shape_181.setTransform(162.1,69);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(102,204,255,0.91)").s().p("A5NKyIgVjOQgUj+AAkDQAAj5AUjsIAVivMAxrAAAQAWBWAWB9QAtEFAAEHQAADIgtDuQgWB1gWBZMgxrAAAg");
	this.shape_182.setTransform(162.2,69);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(102,204,255,0.91)").s().p("A5OKyIgUjOQgUj+AAkDQAAj4AUjtIAUivMAxqAAAQAXBVAXB+QAtEFAAEHQAADIgtDuQgXB1gXBZMgxqAAAg");
	this.shape_183.setTransform(162.4,69);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(102,204,255,0.91)").s().p("A5QKyIgTjOQgTj+AAkDQAAj4ATjtIATivMAxrAAAQAXBVAXB+QAuEFAAEHQAADIguDuQgXB2gXBYMgxrAAAg");
	this.shape_184.setTransform(162.5,69);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(102,204,255,0.91)").s().p("A5RKyQgJhhgJhtQgSj/AAkCQAAj4ASjsQAJheAJhSMAxqAAAQAYBVAXB9QAuEGABEHQgBDIguDuQgXB2gYBYMgxqAAAg");
	this.shape_185.setTransform(162.7,69);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(102,204,255,0.91)").s().p("A5TKyQgIhggJhuQgRj/AAkCQAAj4ARjsQAJheAIhSMAxrAAAQAYBUAXB+QAwEFgBEIQABDIgwDuQgXB2gYBYMgxrAAAg");
	this.shape_186.setTransform(162.8,69);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(102,204,255,0.91)").s().p("A5UKyIgQjOQgRj/AAkCQAAj3ARjtQAIheAIhSMAxrAAAQAYBUAYB+QAvEFAAEIQAADHgvDvQgYB2gYBYMgxrAAAg");
	this.shape_187.setTransform(162.9,69);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(102,204,255,0.91)").s().p("A5WKyIgPjOQgQj/AAkCQAAj3AQjtIAPiwMAxrAAAQAYBUAYB+QAxEFAAEIQAADHgxDvQgYB3gYBXMgxrAAAg");
	this.shape_188.setTransform(163.1,69);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(102,204,255,0.91)").s().p("A5WKyIgQjOQgPj/AAkCQAAj3APjtIAQiwMAxqAAAQAYBUAZB+QAxEFAAEIQAADGgxDwQgZB3gYBXMgxqAAAg");
	this.shape_189.setTransform(163.2,69);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(102,204,255,0.91)").s().p("A5YKyIgOjOQgPj/AAkCQAAj2APjuIAOiwMAxqAAAQAZBTAZB/QAyEFAAEIQAADGgyDwQgZB3gZBXMgxqAAAg");
	this.shape_190.setTransform(163.4,69);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(102,204,255,0.91)").s().p("A5ZKyIgOjOQgOkAAAkBQAAj2AOjuIAOiwMAxqAAAQAZBTAZB/QAzEFAAEIQAADGgzDwQgZB3gZBXMgxqAAAg");
	this.shape_191.setTransform(163.5,69);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(102,204,255,0.91)").s().p("A5bKyIgNjOQgMkAAAkBQAAj1AMjvIANiwMAxqAAAQAaBTAZB/QAzEFAAEIQAADGgzDwQgZB3gaBXMgxqAAAg");
	this.shape_192.setTransform(163.7,69);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(102,204,255,0.91)").s().p("A5cKyIgMjOQgMkAAAkBQAAj1AMjvIAMiwMAxqAAAQAaBSAZCAQA0EEAAEJQAADGg0DwQgZB4gaBWMgxqAAAg");
	this.shape_193.setTransform(163.8,69);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(102,204,255,0.91)").s().p("A5dKyIgLjOQgMkAAAkBQAAj1AMjvIALiwMAxpAAAQAbBSAaCAQA0EEAAEJQAADGg0DwQgaB4gbBWMgxpAAAg");
	this.shape_194.setTransform(164,69);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(102,204,255,0.91)").s().p("A5eKyIgLjOQgLkAAAkBQAAj1ALjvIALiwMAxpAAAQAbBSAaCAQA1EEAAEJQAADFg1DxQgaB4gbBWMgxpAAAg");
	this.shape_195.setTransform(164.1,69);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(102,204,255,0.91)").s().p("A5gKyIgKjPQgJkAAAkAQAAj1AJjuIAKixMAxpAAAQAcBSAaB/QA2EGgBEIQABDFg2DxQgaB4gcBWMgxpAAAg");
	this.shape_196.setTransform(164.3,69);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(102,204,255,0.91)").s().p("A5hKyIgJjPQgJkAAAkAQAAj1AJjuIAJixMAxpAAAQAbBSAbB/QA2EGAAEIQAADFg2DxQgbB4gbBWMgxpAAAg");
	this.shape_197.setTransform(164.4,69);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(102,204,255,0.91)").s().p("A5iKyIgJjPQgIkAAAkAQAAj0AIjvIAJixMAxpAAAQAbBRAbCAQA3EGAAEIQAADFg3DxQgbB4gbBWMgxpAAAg");
	this.shape_198.setTransform(164.5,69);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(102,204,255,0.91)").s().p("A5kKyIgHjPQgIkAAAkAQAAj0AIjvIAHixMAxpAAAQAcBRAcCAQA3EGAAEIQAADEg3DyQgcB4gcBWMgxpAAAg");
	this.shape_199.setTransform(164.7,69);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(102,204,255,0.91)").s().p("A5lKyIgHjPQgHkAAAkAQAAj0AHjvIAHixMAxpAAAQAcBRAcCAQA4EFAAEJQAADEg4DyQgcB4gcBWMgxpAAAg");
	this.shape_200.setTransform(164.8,69);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(102,204,255,0.91)").s().p("A5nKyIgGjPQgFkAAAkAQAAjzAFjwIAGixMAxpAAAQAdBQAcCBQA4EFABEJQgBDDg4DzQgcB5gdBVMgxpAAAg");
	this.shape_201.setTransform(165,69);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(102,204,255,0.91)").s().p("A5oKyIgFjPQgGkAAAkAQAAjzAGjwIAFixMAxpAAAQAdBPAcCCQA5EFAAEJQAADDg5DzQgcB5gdBVMgxpAAAg");
	this.shape_202.setTransform(165.1,69);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(102,204,255,0.91)").s().p("A5pKyIgEjPQgFkAAAkAQAAjzAFjwIAEixMAxpAAAQAdBPAdCCQA5EFAAEJQAADDg5DzQgdB5gdBVMgxpAAAg");
	this.shape_203.setTransform(165.2,69);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(102,204,255,0.91)").s().p("A5qKyIgFjPQgDkBAAj/QAAjzADjwIAFixMAxoAAAQAdBPAdCCQA7EFAAEJQAADDg7DzQgdB5gdBVMgxoAAAg");
	this.shape_204.setTransform(165.4,69);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(102,204,255,0.91)").s().p("A5sKyIgDjPQgDkBAAj/QAAjyADjxIADixMAxpAAAQAdBPAeCCQA7EFAAEJQAADCg7D0QgeB5gdBVMgxpAAAg");
	this.shape_205.setTransform(165.5,69);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(102,204,255,0.91)").s().p("A5tKyIgCjPQgDkBAAj/QAAjyADjxIACixMAxoAAAQAeBPAeCCQA8EEAAEKQAADCg8D0QgeB6geBUMgxoAAAg");
	this.shape_206.setTransform(165.7,69);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(102,204,255,0.91)").s().p("A5uKyIgBjQQgDkAAAj/QAAjxADjxIABiyMAxoAAAQAeBOAeCCQA9EFgBEKQABDCg9D0QgeB6geBUMgxoAAAg");
	this.shape_207.setTransform(165.8,69);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(102,204,255,0.91)").s().p("A5wKyIgBjQIAAn/IAAniIABiyMAxoAAAQAfBOAeCCQA9EFAAEKQAADCg9D0QgeB7gfBTMgxoAAAg");
	this.shape_208.setTransform(166,69);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(102,204,255,0.91)").s().p("A5xKyIAA1jMAxoAAAQAfBNAfCDQA9EFAAEKQAADBg9D1QgfB7gfBTg");
	this.shape_209.setTransform(166.1,69);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(102,204,255,0.91)").s().p("A5CKyIguAAIAAiLIABojIgBoOIgBinMAxUAAAIAUAAQAcBIAcBzIAGAVQA6D6ADD+IAAAXQAAC4g4DlIgFAZQgaBogbBMIgJAag");
	this.shape_210.setTransform(166.1,69);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(102,204,255,0.91)").s().p("A5DKyIgtgBIABiKQACkRgBkSQABkJgCkGIgCimMAxVAAAIATABQAcBHAcB0IAGAVQA6D5ADD+IAAAXQAAC4g4DlIgFAZQgaBogbBMIgJAag");
	this.shape_211.setTransform(166.1,69);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(102,204,255,0.91)").s().p("A5DKyIgtgBIACiKQACkRAAkTQAAkIgCkGIgDimMAxVAAAIATABQAcBHAcB0IAGAVQA6D5ADD+IAAAYQAAC3g4DlIgFAaQgbBogaBMIgKAZg");
	this.shape_212.setTransform(166.1,69);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(102,204,255,0.91)").s().p("A5EKyIgsgCIACiKQAEkQABkUQgBkIgEkFIgDimMAxVAAAIAUABQAcBHAbB0IAGAVQA6D6ADD9IAAAYQAAC3g4DlIgGAaQgaBogaBMIgKAZg");
	this.shape_213.setTransform(166.1,69);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(102,204,255,0.91)").s().p("A5EKyIgrgCIACiKQAFkQAAkUQAAkJgFkEIgEimMAxVAAAIAUABQAcBHAcB0IAFAVQA6D6ADD+IAAAXQAAC4g4DlIgGAZQgaBogaBMIgKAZg");
	this.shape_214.setTransform(166.1,69);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(102,204,255,0.91)").s().p("A5FKyIgqgCIADiLQAGkPAAkUQAAkKgGkDIgFimMAxWAAAIATACQAcBHAcB0IAFAVQA6D5ADD+IAAAXQAAC4g4DlIgGAZQgaBpgaBLIgLAZg");
	this.shape_215.setTransform(166.1,69);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(102,204,255,0.91)").s().p("A5FKyIgqgDIAEiKQAHkOAAkWQAAkJgHkDIgGimMAxWAAAIATACQAcBHAcB0IAFAVQA6D5ADD+IAAAYQAAC4g4DkIgGAaQgaBogaBMIgLAYg");
	this.shape_216.setTransform(166.1,69);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(102,204,255,0.91)").s().p("A5GKyIgogEIAFiJQAGkPAAkVQAAkLgGkCIgIilMAxWAAAIATACQAcBHAcB1IAFAUQA6D5ADD+IAAAYQAAC4g4DlIgGAZQgaBpgbBLIgLAYg");
	this.shape_217.setTransform(166.1,69);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(102,204,255,0.91)").s().p("A5HKyIgngEIAGiKQAHkNABkXQgBkLgHkBIgJilMAxWAAAIATACQAcBIAcB0IAFAUQA6D6ADD+IAAAYQAAC3g4DlIgGAZQgbBpgaBLIgLAYg");
	this.shape_218.setTransform(166.1,69);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(102,204,255,0.91)").s().p("A5HKyIgngFIAGiJQAKkNAAkXQAAkMgKkAIgJilMAxWAAAIATACQAcBIAcB0IAFAVQA6D5ADD+IAAAYQAAC3g4DlIgHAaQgZBogbBMIgLAXg");
	this.shape_219.setTransform(166.1,69);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(102,204,255,0.91)").s().p("A5IKyIgmgFIAHiJQAKkOAAkWQAAkMgKkAIgKilMAxXAAAIASADQAcBHAcB0IAFAVQA6D6ADD9IAAAYQAAC3g4DlIgHAaQgZBpgbBLIgMAXg");
	this.shape_220.setTransform(166.1,69);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(102,204,255,0.91)").s().p("A5JKyIglgGIAIiIQALkNAAkXQAAkNgLkAIgLikMAxXAAAIASADQAcBIAcBzIAFAVQA6D6ADD9IAAAZQgBC3g4DlIgGAZQgZBpgbBLIgMAXg");
	this.shape_221.setTransform(166.1,69);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(102,204,255,0.91)").s().p("A5JKyIgkgGIAIiJQAMkMAAkXQAAkOgMj/IgMikMAxXAAAIASADQAcBHAcB1IAFAUQA6D6ADD9IAAAZQgBC3g4DlIgGAZQgZBpgbBMIgMAWg");
	this.shape_222.setTransform(166.1,69);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(102,204,255,0.91)").s().p("A5KKyIgjgHIAJiIQANkNAAkWQAAkPgNj+IgNikMAxXAAAIASADQAcBIAcB0IAGAUQA6D6ACD9IAAAZQgBC4g4DlIgGAZQgZBogbBMIgMAWg");
	this.shape_223.setTransform(166.1,69);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(102,204,255,0.91)").s().p("A5KKyIgjgHIAKiJQAOkLAAkYQAAkPgOj9IgOikMAxYAAAIARADQAcBIAcB0IAGAUQA6D7ACD9IAAAYQgBC4g4DlIgGAZQgaBpgaBLIgNAWg");
	this.shape_224.setTransform(166.1,69);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(102,204,255,0.91)").s().p("A5LKyIgigHIAKiJQAPkLAAkYQAAkQgPj9IgOijMAxYAAAIARAEQAcBIAcBzIAGAUQA6D7ACD9IAAAZQgBC3g4DlIgGAZQgaBpgaBLIgNAWg");
	this.shape_225.setTransform(166.1,69);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(102,204,255,0.91)").s().p("A5LKyIghgHIAKiJQAQkMAAkXQAAkQgQj9QgHhXgIhMMAxYAAAIASAEQAbBHAcB1IAGAUQA6D5ACD+IAAAZQgBC3g4DmIgGAZQgaBogaBMIgNAVg");
	this.shape_226.setTransform(166.1,69);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(102,204,255,0.91)").s().p("A5LKyIghgIIAMiJQAQkLAAkXQAAkSgQj7QgIhXgJhMMAxYAAAIASAEQAbBIAcB0IAGAUQA6D6ACD+IAAAYQgBC4g4DlIgGAZQgaBogbBMIgNAVg");
	this.shape_227.setTransform(166.1,69);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(102,204,255,0.91)").s().p("A5MKyIgggIIANiJQARkLAAkYQAAkRgRj7QgJhYgJhLMAxYAAAIASAEQAcBIAbB0IAGAUQA6D6ACD+IAAAYQgBC4g4DlIgGAaQgaBogbBMIgNAUg");
	this.shape_228.setTransform(166.1,69);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(102,204,255,0.91)").s().p("A5MKyIgfgJIANiJQARkJABkZQgBkSgRj7IgTiiMAxYAAAIASAEQAcBJAbBzIAGAUQA6D7ACD9IAAAZQgBC3g4DlIgGAaQgaBogbBMIgNAUg");
	this.shape_229.setTransform(166.1,69);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(102,204,255,0.91)").s().p("A5NKyIgegJIAOiJQASkJAAkZQAAkTgSj6IgUiiMAxYAAAIASAEQAcBIAbB1IAGAUQA6D6ACD9IAAAZQgBC4g4DlIgGAZQgaBpgbBLIgOAUg");
	this.shape_230.setTransform(166.1,69);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(102,204,255,0.91)").s().p("A5NKyIgegKIAOiIQAUkJAAkaQAAkTgUj6QgKhYgKhJMAxZAAAIARAEQAcBJAbB0IAGAUQA6D6ACD+IAAAYQgBC4g4DlIgGAZQgaBpgbBMIgOATg");
	this.shape_231.setTransform(166.1,69);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(102,204,255,0.91)").s().p("A5OKyIgdgKIAPiJQAVkIAAkaQAAkUgVj5QgKhYgKhIIgBgBMAxZAAAIARAFQAcBIAcB0IAFAUQA6D6ACD+IAAAZQgBC3g4DlIgHAaQgaBogbBMIgNATg");
	this.shape_232.setTransform(166.1,69);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(102,204,255,0.91)").s().p("A5OKyQgOgEgOgHIAPiJQAWkHAAkaQAAkVgWj4QgLhZgKhHIgBgBMAxZAAAIARAFQAcBIAcB0IAFAUQA6D6ACD+IAAAZQgBC4g4DlIgHAZQgaBpgbBLIgNATg");
	this.shape_233.setTransform(166.1,69);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(102,204,255,0.91)").s().p("A5PKyIgbgLIAQiJQAWkHABkbQgBkUgWj4QgLhZgLhHIgBgBMAxZAAAIARAFQAcBIAcB0IAFAUQA6D6ACD+IAAAZQgBC3g4DmIgHAZQgaBpgbBLIgNATg");
	this.shape_234.setTransform(166.1,69);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(102,204,255,0.91)").s().p("A5QKyQgMgFgNgHIAQiIQAYkHgBkbQABkVgYj4QgMhYgLhHIgBgBMAxaAAAIAQAFQAcBIAcB1IAFAUQA6D6ACD+IAAAYQgBC4g4DlIgHAaQgaBogbBMIgOASg");
	this.shape_235.setTransform(166.1,69);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(102,204,255,0.91)").s().p("A5QKyIgZgNIARiIQAZkGgBkcQABkVgZj3QgMhZgMhGIgBgBMAxaAAAIAQAFQAdBJAbB0IAFAUQA6D6ACD+IAAAYQgBC4g4DlIgHAaQgaBpgbBLIgOASg");
	this.shape_236.setTransform(166.1,69);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(102,204,255,0.91)").s().p("A5RKyQgMgGgMgHQAJhAAJhIQAZkGAAkcQAAkWgZj2QgNhagMhFIgBgBMAxaAAAIAQAGQAdBIAbB0IAFAUQA6D7ACD9IAAAYQgBC5g4DlIgHAZQgaBpgbBLIgOASg");
	this.shape_237.setTransform(166.1,69);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(102,204,255,0.91)").s().p("A5RKyQgMgGgLgHIASiJQAakFAAkdQAAkWgaj1QgNhagNhFIgBgBMAxaAAAIAQAGQAdBIAbB0IAFAUQA6D7ACD9IAAAZQgBC3g4DmIgHAZQgaBpgbBMIgOARg");
	this.shape_238.setTransform(166.1,69);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(102,204,255,0.91)").s().p("A5SKyIgWgOIATiIQAbkFAAkdQAAkXgbj1QgOhZgNhFIgBgBMAxaAAAIAQAGQAdBJAbBzIAFAVQA6D6ACD+IAAAYQgBC4g4DlIgHAaQgaBogbBMIgPARg");
	this.shape_239.setTransform(166.1,69);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(102,204,255,0.91)").s().p("A5SKyQgLgGgLgIIAUiIQAbkFAAkdQAAkYgbj0QgOhZgOhFIgBgBMAxbAAAIAPAGQAdBJAbBzIAFAVQA6D6ACD/IAAAXQgBC5g4DkIgHAaQgaBpgbBLIgPARg");
	this.shape_240.setTransform(166.1,69);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(102,204,255,0.91)").s().p("A5TKyQgKgGgLgJIAUiIQAdkEAAkeQAAkXgdj0QgOhagOhEIgBgBMAxbAAAIAPAHQAcBIAcB0IAGAUQA5D7ACD+IAAAXQgBC5g4DkIgHAaQgaBpgbBLIgPARg");
	this.shape_241.setTransform(166.1,69);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(102,204,255,0.91)").s().p("A5TKyQgKgHgKgIQAKg/AKhJQAekEAAkeQAAkYgejzQgPhagOhEIgBgBMAxbAAAIAPAHQAcBIAcB0IAGAUQA5D7ACD+IAAAYQgBC4g4DlIgHAZQgbBpgbBLIgPARg");
	this.shape_242.setTransform(166.1,69);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(102,204,255,0.91)").s().p("A5UKyQgJgGgKgKQALg+AKhJQAfkDAAkgQAAkZgfjyQgPhagPhDIgBgBMAxbAAAIAPAHQAdBIAbB0IAGAUQA5D7ACD+IAAAYQgBC4g5DlIgGAZQgbBqgbBLIgPAQg");
	this.shape_243.setTransform(166.1,69);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(102,204,255,0.91)").s().p("A5UKyIgTgQQALg+ALhKQAgkCAAkgQAAkZggjyQgQhbgPhCIgBgBMAxcAAAIAOAHQAdBJAbBzIAGAVQA5D6ACD/IAAAXQgBC4g5DlIgGAaQgbBogbBMIgPAQg");
	this.shape_244.setTransform(166.1,69);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(102,204,255,0.91)").s().p("A5VKyIgRgRIAWiHQAhkDAAkfQAAkaghjxQgQhbgQhCIgBgBMAxcAAAIAPAHQAcBJAbBzIAGAVQA5D7ACD+IAAAYQgBC3g5DlIgHAaQgaBpgbBLIgQAQg");
	this.shape_245.setTransform(166.1,69);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(102,204,255,0.91)").s().p("A5VKyQgJgHgIgKQALg+AMhJQAhkCAAkhQAAkaghjwQgRhcgQhBIgBgBMAxcAAAIAPAIQAcBIAbB0IAGAVQA5D6ACD+IAAAYQgBC4g5DlIgHAZQgaBqgbBKIgQAQg");
	this.shape_246.setTransform(166.1,69);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(102,204,255,0.91)").s().p("A5WKyQgIgHgIgKQAMg+AMhKQAjkBgBkhQABkbgjjwQgRhbgRhBIgBgBMAxcAAAIAPAIQAcBIAbB0IAGAVQA6D6ABD+IAAAYQgBC4g5DlIgHAaQgaBogbBMIgRAPg");
	this.shape_247.setTransform(166.1,69);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(102,204,255,0.91)").s().p("A5WKyQgIgHgIgLQAMg9ANhKQAkkCAAkgQAAkbgkjwQgShcgRhAIgBgBMAxcAAAIAPAIQAcBJAbBzIAGAVQA6D7ABD+IAAAXQgBC4g5DlIgHAaQgaBpgbBLIgRAPg");
	this.shape_248.setTransform(166.1,69);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(102,204,255,0.91)").s().p("A5XKyIgPgSQANg+ANhJQAkkCAAkhQAAkbgkjvQgThcgRhAIgBgBMAxdAAAIAOAIQAcBJAbBzIAGAVQA6D7ABD+IAAAYQgCC4g4DlIgHAZQgaBpgbBLIgRAPg");
	this.shape_249.setTransform(166.1,69);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(102,204,255,0.91)").s().p("A5XKyQgIgIgGgKQAMg9AOhLQAlkAAAkiQAAkdgljtQgThcgShAIgBgBMAxdAAAIAOAIQAcBJAcB0IAFAVQA6D5ABD/IAAAYQgCC4g4DlIgHAZQgaBpgbBMIgSAOg");
	this.shape_250.setTransform(166.1,69);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(102,204,255,0.91)").s().p("A5YKyQgGgIgHgLQANg9ANhKQAnkAAAkiQAAkegnjsQgShdgTg/IgBgBMAxeAAAIANAJQAcBIAcB0IAFAVQA6D6ABD+IAAAZQgCC3g4DlIgHAaQgaBpgbBLIgSAOg");
	this.shape_251.setTransform(166.1,69);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(102,204,255,0.91)").s().p("A5ZKyIgMgTQAOg9ANhKQAnkBAAkhQAAkegnjsQgThdgTg/IgBgBMAxeAAAIANAJQAcBJAcBzIAFAVQA6D7ABD+IAAAYQgCC3g4DlIgHAaQgaBpgcBLIgRAOg");
	this.shape_252.setTransform(166.1,69);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(102,204,255,0.91)").s().p("A5ZKyIgMgUQAOg8AOhLQApj/AAkjQAAkegpjsQgThdgUg+IgBgBMAxeAAAIANAKQAcBIAcBzIAFAVQA6D7ABD+IAAAYQgCC4g4DlIgHAZQgaBqgcBKIgRAOg");
	this.shape_253.setTransform(166.1,69);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(102,204,255,0.91)").s().p("A5aKyIgKgUQAOg9AOhKQApj/ABkjQgBkfgpjrQgUhdgUg+IgBgBMAxeAAAIANAKQAcBIAcB0IAFAVQA6D6ABD+IAAAZQgCC3g4DmIgHAZQgaBpgcBLIgSANg");
	this.shape_254.setTransform(166.1,69);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(102,204,255,0.91)").s().p("A5aKyQgFgJgFgMQAOg8APhLQAqj+AAkjQAAkggqjqQgVhegUg9IgBgBMAxeAAAIANAKQAcBIAcB0IAFAVQA6D6ABD+IAAAZQgCC3g4DmIgHAZQgaBpgcBLIgSANg");
	this.shape_255.setTransform(166.1,69);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(102,204,255,0.91)").s().p("A5bKyIgJgWQAPg7APhMQArj9AAkkQAAkggrjpQgWhegUg9IgBgBMAxfAAAIAMAKQAcBIAcB0IAFAVQA6D6ABD+IAAAZQgCC4g4DlIgHAZQgaBqgcBKIgSANg");
	this.shape_256.setTransform(166.1,69);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(102,204,255,0.91)").s().p("A5bKyIgIgWQAPg8APhLQArj9AAkkQAAkhgrjoQgWhfgVg8IgBgBMAxfAAAIAMAKQAcBJAcB0IAFAUQA6D7ABD+IAAAYQgCC4g4DlIgHAZQgbBpgbBMIgTAMg");
	this.shape_257.setTransform(166.1,69);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(102,204,255,0.91)").s().p("A5cKyIgHgXQAPg7AQhLQAtj9AAkkQAAkigtjoQgWhegWg8IgBgBMAxfAAAIANALQAcBIAbB0IAFAUQA6D7ABD+IAAAZQgCC3g5DmIgHAZQgaBpgbBLIgTAMg");
	this.shape_258.setTransform(166.1,69);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(102,204,255,0.91)").s().p("A5cKyQgDgJgEgOQAQg7AQhMQAuj8AAklQAAkhgujoQgXhfgWg7IgBgBMAxfAAAIANALQAcBJAbBzIAGAVQA5D6ABD+IAAAZQgCC3g5DmIgHAZQgaBqgbBLIgTALg");
	this.shape_259.setTransform(166.1,69);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(102,204,255,0.91)").s().p("A5dKyIgGgXQARg8AQhLQAuj8AAklQAAkjgujmQgYhegWg8IgBgBMAxgAAAIAMALQAcBJAbBzIAGAVQA5D6ABD+IAAAZQgCC4g5DlIgHAaQgaBogbBMIgUALg");
	this.shape_260.setTransform(166.1,69);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(102,204,255,0.91)").s().p("A5dKyIgFgYQAQg7AQhLQAwj8AAkmQAAkigwjmQgXhfgXg7IgBgBMAxgAAAIAMALQAcBJAbB0IAGAUQA5D7ABD+IAAAYQgCC4g5DlIgHAaQgaBpgbBLIgUALg");
	this.shape_261.setTransform(166.1,69);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(102,204,255,0.91)").s().p("A5dKyIgFgYQARg7AQhMQAxj7AAkmQAAkjgxjmQgXhfgYg6IgBgBMAxgAAAIAMALQAcBJAbB0IAGAUQA5D7ABD+IAAAZQgCC4g5DlIgHAZQgaBpgcBMIgTAKg");
	this.shape_262.setTransform(166.1,69);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(102,204,255,0.91)").s().p("A5eKyIgEgZQASg6AQhMQAyj7AAknQAAkjgyjlQgYhfgYg6IgBgBMAxgAAAIAMAMQAcBJAbBzIAGAUQA5D7ABD+IAAAZQgCC4g5DlIgHAaQgbBogbBMIgTAKg");
	this.shape_263.setTransform(166.1,69);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(102,204,255,0.91)").s().p("A5eKyIgDgZQARg7ARhMQAzj6AAknQAAkkgzjkQgZhfgYg6IgBgBMAxgAAAIAMAMQAcBJAbBzIAGAUQA5D8ABD9IAAAZQgCC4g5DlIgHAaQgaBpgcBLIgTAKg");
	this.shape_264.setTransform(166.1,69);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(102,204,255,0.91)").s().p("A5fKyIgCgaQARg6AShMQAzj6AAknQAAklgzjjQgZhggZg5IgBgBMAxhAAAIALAMQAcBJAbB0IAGAUQA5D6ABD/IAAAYQgCC5g5DlIgHAZQgaBpgcBLIgUAKg");
	this.shape_265.setTransform(166.1,69);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(102,204,255,0.91)").s().p("A5gKyIAAgaQARg6AShMQA0j6AAkoQAAkkg0jkQgZhfgag5IgBgBMAxhAAAIALAMQAcBJAbB0IAGAUQA5D6ABD/IAAAZQgCC4g5DlIgHAZQgaBpgcBMIgUAJg");
	this.shape_266.setTransform(166.1,69);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(102,204,255,0.91)").s().p("A5gKyIAAgaQASg6AShNQA1j4AAkpQAAklg1jjQgahggag4IgBgBMAxhAAAIALAMQAcBJAbB0IAGAUQA5D7ABD+IAAAZQgCC4g5DlIgHAaQgaBpgcBLIgUAJg");
	this.shape_267.setTransform(166.1,69);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(102,204,255,0.91)").s().p("A5hKyIABgbQASg5AThNQA2j5AAkpQAAkmg2jiQgbhggag3IgBgBMAxhAAAIALANQAcBIAcB0IAFAUQA5D7ABD+IAAAZQgCC4g5DlIgHAaQgaBpgcBLIgUAJg");
	this.shape_268.setTransform(166.1,69);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(102,204,255,0.91)").s().p("A5iKyIADgbQASg5AThNQA2j4ABkqQgBkmg2jiQgchggag3IgBgBMAxhAAAIALANQAcBJAcBzIAFAUQA5D8ABD+IAAAYQgCC5g5DkIgHAaQgbBpgbBMIgVAIg");
	this.shape_269.setTransform(166.1,69);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(102,204,255,0.91)").s().p("A5iKyIADgcQASg5AUhMQA4j4gBkqQABkng4jhQgchggbg3IgBgBMAxhAAAIALANQAcBJAcB0IAFAUQA5D7ABD+IAAAYQgCC5g5DlIgHAaQgbBogbBMIgVAIg");
	this.shape_270.setTransform(166.1,69);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(102,204,255,0.91)").s().p("A5jKyIAEgcQATg5AUhNQA4j4AAkqQAAkng4jgQgdhggbg3IgBgBMAxiAAAIALANQAcBJAbB0IAFAUQA5D7ABD+IAAAZQgDC4g4DlIgIAaQgaBpgbBLIgVAIg");
	this.shape_271.setTransform(166.1,69);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(102,204,255,0.91)").s().p("A5jKyIAEgcQAUg6AThMQA6j4AAkqQAAkog6jgQgchggcg2IgBgBMAxiAAAIALAOQAcBIAbB0IAFAUQA5D7ABD/IAAAYQgDC4g4DlIgIAaQgaBpgcBLIgVAIg");
	this.shape_272.setTransform(166.1,69);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(102,204,255,0.91)").s().p("A5kKyIAGgdQATg4AUhOQA7j2AAkrQAAkog7jgQgdhggcg2IgBgBMAxiAAAIALAOQAcBJAbBzIAFAUQA5D8ABD+IAAAYQgDC5g5DkIgHAaQgaBpgcBMIgVAHg");
	this.shape_273.setTransform(166.1,69);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(102,204,255,0.91)").s().p("A5kKyIAGgdQAUg5AUhNQA8j3AAkrQAAkpg8jeQgdhhgdg1IgBgBMAxiAAAIALAOQAcBJAbBzIAFAVQA5D7ABD/IAAAXQgDC5g5DlIgHAaQgaBpgcBLIgVAHg");
	this.shape_274.setTransform(166.1,69);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(102,204,255,0.91)").s().p("A5lKyIAHgeQAVg4AUhNQA9j3gBkrQABkqg9jdQgehigdg0IgBgBMAxiAAAIALAOQAcBJAbBzIAFAVQA5D7ABD/IAAAYQgDC4g5DlIgHAaQgaBpgcBLIgWAHg");
	this.shape_275.setTransform(166.1,69);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(102,204,255,0.91)").s().p("A5lKyIAIgfQAUg3AWhOQA8j1AAksQAAkqg8jeQgfhhgeg0IgBgBMAxjAAAIAKAOQAcBJAbB0IAFAUQA5D8ABD+IAAAYQgDC4g5DlIgHAaQgaBpgcBLIgWAHg");
	this.shape_276.setTransform(166.1,69);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(102,204,255,0.91)").s().p("A5mKyIAJgfQAVg4AWhNQA9j2ABkrQgBkrg9jdQgfhhgfg0IgBgBMAxjAAAIAKAOQAcBKAbBzIAGAUQA4D8ABD+IAAAYQgDC5g5DlIgHAZQgbBqgbBKIgXAHg");
	this.shape_277.setTransform(166.1,69);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(102,204,255,0.91)").s().p("A5mKyIAJggQAWg3AVhOQA/j0AAktQAAkrg/jcQgfhigfgzIgBgBMAxjAAAIAKAOQAcBKAbBzIAGAUQA4D8ABD/IAAAYQgDC4g5DlIgHAZQgbBqgbBLIgXAGg");
	this.shape_278.setTransform(166.1,69);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(102,204,255,0.91)").s().p("A5mKyQAEgOAFgSQAWg3AWhOQBAj1AAksQAAkshAjbQgfhjgggyIgBgBMAxjAAAIAKAPQAcBJAbBzIAGAVQA4D7ABD/IAAAYQgDC5g5DkIgHAaQgbBpgbBLIgXAGg");
	this.shape_279.setTransform(166.1,69);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(102,204,255,0.91)").s().p("A5nKyIAKghQAXg3AWhOQBBjzAAktQAAkthBjbQgghigggyIgBgBMAxkAAAIAJAPQAcBKAbByIAGAVQA4D8ABD+IAAAYQgDC4g5DlIgHAaQgbBpgbBLIgYAGg");
	this.shape_280.setTransform(166.1,69);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(102,204,255,0.91)").s().p("A5nKyIALghQAWg3AXhOQBBjzAAkuQAAkthBjaQghhigggyIgBgBMAxkAAAIAJAPQAcBJAbB0IAGAUQA4D7ABD/IAAAYQgDC5g5DlIgHAZQgbBqgbBLIgYAFg");
	this.shape_281.setTransform(166.1,69);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(102,204,255,0.91)").s().p("A5oKyQAGgOAGgUQAXg2AXhPQBDjyAAkuQAAkuhDjZQghhjghgxIgBgBMAxkAAAIAJAPQAcBKAbBzIAGAUQA4D8ABD/IAAAYQgDC4g5DlIgHAZQgbBqgbBLIgYAFg");
	this.shape_282.setTransform(166.1,69);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(102,204,255,0.91)").s().p("A5oKyQAGgOAGgUQAYg2AXhPQBEjyAAkuQAAkvhEjYQgihjghgxIgBgBMAxkAAAIAKAPQAbBKAbBzIAGAVQA4D7ABD/IAAAYQgDC4g5DlIgHAaQgbBqgbBKIgYAFg");
	this.shape_283.setTransform(166.1,69);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(102,204,255,0.91)").s().p("A5pKyQAHgPAGgTQAYg2AXhPQBFjyAAkvQAAkuhFjZQghhigigxIgBgBMAxkAAAIAKAQQAbBKAbByIAGAVQA4D7ABD/IAAAZQgDC3g5DlIgHAaQgbBqgbBKIgZAFg");
	this.shape_284.setTransform(166.1,69);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(102,204,255,0.91)").s().p("A5pKyIAOgiQAXg3AYhPQBGjxAAkvQAAkvhGjYQgihjgigwIgBgBMAxlAAAIAJAQQAbBJAbB0IAGAVQA4D6ABEAIAAAYQgDC4g5DlIgHAZQgbBqgbBLIgZAEg");
	this.shape_285.setTransform(166.1,69);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(102,204,255,0.91)").s().p("A5qKyQAIgPAHgUQAYg2AZhPQBFjxAAkwQAAkvhFjXQgjhjgjgwIgBgBMAxlAAAIAJAQQAcBKAbBzIAFAVQA5D7AAD/IAAAYQgDC5g5DlIgHAZQgbBpgbBLIgZAEg");
	this.shape_286.setTransform(166.1,69);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(102,204,255,0.91)").s().p("A5rKyQAJgPAHgUQAZg2AZhQQBHjwAAkwQAAkwhHjWQgkhkgjgvIgBgBMAxlAAAIAJAQQAcBKAbBzIAFAVQA5D7AAD/IAAAYQgDC5g5DlIgHAZQgcBqgbBKIgZAEg");
	this.shape_287.setTransform(166.1,69);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(102,204,255,0.91)").s().p("A5sKyQAJgPAJgVQAZg2AZhPQBHjwABkxQgBkwhHjVQglhlgjguIgBgBMAxlAAAIAJAQQAcBLAbByIAFAVQA5D7AAD/IAAAZQgDC4g6DlIgGAZQgcBqgbBLIgZADg");
	this.shape_288.setTransform(166.1,69);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(102,204,255,0.91)").s().p("A5sKyQAJgQAJgUQAZg2AahPQBIjwAAkxQAAkxhIjUQglhlgkguIgBgBMAxmAAAIAIARQAcBJAbBzIAFAVQA5D8AAD+IAAAZQgDC4g6DlIgGAZQgcBqgbBLIgZADg");
	this.shape_289.setTransform(166.1,69);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(102,204,255,0.91)").s().p("A5tKyQAKgPAJgWQAag1AZhQQBKjvAAkxQAAkyhKjUQgkhlglgtIgBgBMAxmAAAIAIARQAcBKAbBzIAFAVQA5D6AAD/IAAAZQgDC5g6DlIgHAZQgbBqgbBLIgZACg");
	this.shape_290.setTransform(166.1,69);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(102,204,255,0.91)").s().p("A5tKyQAKgQAJgVQAag2AahPQBLjvAAkyQAAkxhLjUQglhlglgtIgBgBMAxmAAAIAIARQAcBKAbBzIAFAVQA5D7AAD/IAAAZQgDC3g6DmIgHAZQgbBqgbBLIgZACg");
	this.shape_291.setTransform(166.1,69);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(102,204,255,0.91)").s().p("A5uKyQALgQAKgWQAag1AahPQBLjvABkyQgBkzhLjSQglhmgmgsIgBgBMAxnAAAIAHARQAcBLAbByIAFAVQA5D8AAD+IAAAZQgDC4g6DlIgHAaQgbBpgbBLIgaACg");
	this.shape_292.setTransform(166.1,69);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(102,204,255,0.91)").s().p("A5uKyQALgRAKgVQAag1AbhPQBMjvABkzQgBkyhMjSQgnhmglgsIgBgBMAxnAAAIAHARQAcBLAbByIAFAVQA5D8AAD+IAAAZQgDC5g6DlIgHAZQgbBpgbBMIgaABg");
	this.shape_293.setTransform(166.1,69);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("rgba(102,204,255,0.91)").s().p("A5uKyQALgRAKgVQAbg1AbhQQBOjtgBk0QABkzhOjSQgnhlgmgsIgBgBMAxnAAAIAHASQAcBKAbBzIAFAVQA5D6AAD/IAAAZQgEC5g5DlIgHAZQgbBqgbBLIgaABg");
	this.shape_294.setTransform(166.1,69);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("rgba(102,204,255,0.91)").s().p("A5vKyQALgQAMgXQAbg0AbhQQBOjtAAk0QAAk0hOjRQgohlgmgsIgBgBMAxnAAAIAHASQAcBKAcBzIAEAVQA5D7AAD/IAAAZQgEC4g5DlIgHAaQgbBqgbBKIgbABg");
	this.shape_295.setTransform(166.1,69);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("rgba(102,204,255,0.91)").s().p("A5vKyQAMgRALgXQAbgzAchRQBPjsAAk1QAAk0hPjQQgohmgngrIgBgBMAxoAAAIAHATQAcBJAbB0IAEAUQA5D7AAD/IAAAZQgEC4g5DlIgHAaQgbBqgbBKIgbABg");
	this.shape_296.setTransform(166.1,69);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("rgba(102,204,255,0.91)").s().p("A5wKyQAMgRANgXQAbg0AchQQBQjtAAk0QAAk1hQjPQgohngogqIgBgBMAxoAAAIAHATQAcBJAbB0IAEAUQA5D7AAD/IAAAZQgEC5g5DlIgHAZQgcBqgbBLIgaAAg");
	this.shape_297.setTransform(166.1,69);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(102,204,255,0.91)").s().p("A5wKyQAMgRANgYQAcgzAchQQBRjtAAk0QAAk2hRjPQgphmgogqIgBgBMAxoAAAIAHATQAcBKAbBzIAEAVQA5D7AAD+IAAAZQgEC5g5DlIgHAZQgcBqgbBLIgaAAg");
	this.shape_298.setTransform(166.1,69);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("rgba(102,204,255,0.91)").s().p("A5xKyQApg3Aqh2QBRjrAAk1QAAk3hRjOQgqhogpgpMAxoAAAQAfBNAfCDQA9EFAAEKQAADBg9D1QgfB7gfBTg");
	this.shape_299.setTransform(166.1,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,0,340,138);


(lib.blueflash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#5FCAF4","rgba(95,202,244,0)"],[0,0.584,1],0,0,0,0,0,20.2).s().p("AiOCOQg6g6AAhUQAAhTA6g7QA7g6BTAAQBUAAA6A6QA7A7AABTQAABUg7A6Qg6A7hUAAQhTAAg7g7g");
	this.shape.setTransform(20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blueflash, new cjs.Rectangle(0,0,40.2,40.2), null);


(lib.arc4shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgDAfIACgIIABgIIgKgzIADgBQASAZAAAPQAAASgKARQgEgCAAgFg");
	this.shape.setTransform(1.1,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arc4shape, new cjs.Rectangle(0,0,2.3,7.5), null);


(lib.arc3shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAHAaQgFgzgbgrIADAAQAFALAYAaQATAUAAARQAAAFgRA5QAAAAABABQAAAAgBAAQAAAAgBAAQgBAAgBAAQADgRgCgag");
	this.shape.setTransform(2.6,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arc3shape, new cjs.Rectangle(0,0,5.2,13.9), null);


(lib.arc2shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAQBDQgbgYgFgKQgEgIAAgYQAAgFAOgbQANgcALgIIgCAFIgBAFQAAAPgDAMIgIAeQgEAOALAaQAKAagBABg");
	this.shape.setTransform(-0.3,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arc2shape, new cjs.Rectangle(-2.4,0,4.1,13.5), null);


(lib.arc1shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgGARIAAgLQACgHAAgRQAJABACAEIAAAKQAAAEgCAIQgCAJgEAAg");
	this.shape.setTransform(0.7,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arc1shape, new cjs.Rectangle(0,0,1.4,3.7), null);


(lib.nervecloseup2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:303});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_302 = function() {
		this.stop();
	}
	this.frame_315 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(302).call(this.frame_302).wait(13).call(this.frame_315).wait(1));

	// red nerve mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglnAIpQgZgjgYhaQgxi1AAkYQAAjeAxirQAYhVAZgpMBLgAAAIANAeQAPAoANA1QAoCtAADzQAAEDgoCzQgVBagUAmg");
	mask.setTransform(240.8,55.3);

	// Layer 7
	this.instance = new lib.positivecircle();
	this.instance.parent = this;
	this.instance.setTransform(24,56.9,1,1,0,0,0,14.6,14.6);

	this.instance_1 = new lib.positivecircle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,56.9,1,1,0,0,0,14.6,14.6);

	this.instance_2 = new lib.positivecircle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24,56.9,1,1,0,0,0,14.6,14.6);

	this.instance_3 = new lib.positivecircle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,56.9,1,1,0,0,0,14.6,14.6);

	this.instance_4 = new lib.positivecircle();
	this.instance_4.parent = this;
	this.instance_4.setTransform(24,56.9,1,1,0,0,0,14.6,14.6);

	this.instance_5 = new lib.positivecircle();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24,56.9,1,1,0,0,0,14.6,14.6);

	this.instance_6 = new lib.positivecircle();
	this.instance_6.parent = this;
	this.instance_6.setTransform(24,56.9,1,1,0,0,0,14.6,14.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:24}}]},23).to({state:[{t:this.instance_1,p:{x:24}},{t:this.instance,p:{x:74.2}}]},17).to({state:[{t:this.instance_2,p:{x:24}},{t:this.instance_1,p:{x:74.2}},{t:this.instance,p:{x:128.3}}]},18).to({state:[{t:this.instance_3,p:{x:24}},{t:this.instance_2,p:{x:74.2}},{t:this.instance_1,p:{x:128.3}},{t:this.instance,p:{x:175.6}}]},17).to({state:[{t:this.instance_4,p:{x:24}},{t:this.instance_3,p:{x:74.2}},{t:this.instance_2,p:{x:128.3}},{t:this.instance_1,p:{x:175.6}},{t:this.instance,p:{x:222.9}}]},17).to({state:[{t:this.instance_5,p:{x:24}},{t:this.instance_4,p:{x:74.2}},{t:this.instance_3,p:{x:128.3}},{t:this.instance_2,p:{x:175.6}},{t:this.instance_1,p:{x:222.9}},{t:this.instance,p:{x:270.2}}]},17).to({state:[{t:this.instance_6,p:{x:24}},{t:this.instance_5,p:{x:74.2}},{t:this.instance_4,p:{x:128.3}},{t:this.instance_3,p:{x:175.6}},{t:this.instance_2,p:{x:222.9}},{t:this.instance_1,p:{x:270.2}},{t:this.instance,p:{x:317.5}}]},16).to({state:[{t:this.instance_6,p:{x:74.2}},{t:this.instance_5,p:{x:128.3}},{t:this.instance_4,p:{x:175.6}},{t:this.instance_3,p:{x:222.9}},{t:this.instance_2,p:{x:270.2}},{t:this.instance_1,p:{x:317.5}},{t:this.instance,p:{x:364.8}}]},17).to({state:[{t:this.instance_6,p:{x:128.3}},{t:this.instance_5,p:{x:175.6}},{t:this.instance_4,p:{x:222.9}},{t:this.instance_3,p:{x:270.2}},{t:this.instance_2,p:{x:317.5}},{t:this.instance_1,p:{x:364.8}},{t:this.instance,p:{x:412.1}}]},17).to({state:[{t:this.instance_6,p:{x:175.6}},{t:this.instance_5,p:{x:222.9}},{t:this.instance_4,p:{x:270.2}},{t:this.instance_3,p:{x:317.5}},{t:this.instance_2,p:{x:364.8}},{t:this.instance_1,p:{x:412.1}},{t:this.instance,p:{x:458.3}}]},16).to({state:[{t:this.instance_5,p:{x:222.9}},{t:this.instance_4,p:{x:270.2}},{t:this.instance_3,p:{x:317.5}},{t:this.instance_2,p:{x:364.8}},{t:this.instance_1,p:{x:412.1}},{t:this.instance,p:{x:458.3}}]},17).to({state:[{t:this.instance_4,p:{x:270.2}},{t:this.instance_3,p:{x:317.5}},{t:this.instance_2,p:{x:364.8}},{t:this.instance_1,p:{x:412.1}},{t:this.instance,p:{x:458.3}}]},15).to({state:[{t:this.instance_3,p:{x:317.5}},{t:this.instance_2,p:{x:364.8}},{t:this.instance_1,p:{x:412.1}},{t:this.instance,p:{x:458.3}}]},16).to({state:[{t:this.instance_2,p:{x:364.8}},{t:this.instance_1,p:{x:412.1}},{t:this.instance,p:{x:458.3}}]},15).to({state:[{t:this.instance_1,p:{x:412.1}},{t:this.instance,p:{x:458.3}}]},16).to({state:[{t:this.instance,p:{x:458.3}}]},15).to({state:[]},18).wait(29));

	// negatives
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah1AdIAAg5IDqAAIAAA5g");
	this.shape.setTransform(23.1,56);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah1AdIAAg5IDrAAIAAA5g");
	this.shape_1.setTransform(73.4,56);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah1AdIAAg5IDqAAIAAA5g");
	this.shape_2.setTransform(458.8,56);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah1AdIAAg5IDqAAIAAA5g");
	this.shape_3.setTransform(411.2,56);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah0AdIAAg5IDqAAIAAA5g");
	this.shape_4.setTransform(363.9,56);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah1AdIAAg5IDqAAIAAA5g");
	this.shape_5.setTransform(316.6,56);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah0AdIAAg5IDqAAIAAA5g");
	this.shape_6.setTransform(269.3,56);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah1AdIAAg5IDqAAIAAA5g");
	this.shape_7.setTransform(222,56);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah0AdIAAg5IDqAAIAAA5g");
	this.shape_8.setTransform(174.7,56);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah0AdIAAg5IDpAAIAAA5g");
	this.shape_9.setTransform(127.4,56);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah1AdIAAg5IDrAAIAAA5g");
	this.shape_10.setTransform(20.7,56);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah0AdIAAg5IDqAAIAAA5g");
	this.shape_11.setTransform(174.7,56);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8,p:{x:174.7}},{t:this.shape_7},{t:this.shape_6,p:{x:269.3}},{t:this.shape_5,p:{x:316.6}},{t:this.shape_4,p:{x:363.9}},{t:this.shape_3,p:{x:411.2}},{t:this.shape_2,p:{x:458.8}},{t:this.shape_1},{t:this.shape,p:{x:23.1}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{x:174.7}},{t:this.shape_5,p:{x:222}},{t:this.shape_6,p:{x:269.3}},{t:this.shape_3,p:{x:316.6}},{t:this.shape_4,p:{x:363.9}},{t:this.shape_2,p:{x:411.2}},{t:this.shape,p:{x:458.8}},{t:this.shape_1}]},22).to({state:[{t:this.shape_9},{t:this.shape_8,p:{x:174.7}},{t:this.shape_5,p:{x:222}},{t:this.shape_6,p:{x:269.3}},{t:this.shape_3,p:{x:316.6}},{t:this.shape_4,p:{x:363.9}},{t:this.shape_2,p:{x:411.2}},{t:this.shape,p:{x:458.8}}]},17).to({state:[{t:this.shape_8,p:{x:174.7}},{t:this.shape_5,p:{x:222}},{t:this.shape_6,p:{x:269.3}},{t:this.shape_3,p:{x:316.6}},{t:this.shape_4,p:{x:363.9}},{t:this.shape_2,p:{x:411.2}},{t:this.shape,p:{x:458.8}}]},18).to({state:[{t:this.shape_5,p:{x:222}},{t:this.shape_6,p:{x:269.3}},{t:this.shape_3,p:{x:316.6}},{t:this.shape_4,p:{x:363.9}},{t:this.shape_2,p:{x:411.2}},{t:this.shape,p:{x:458.8}}]},17).to({state:[{t:this.shape_6,p:{x:269.3}},{t:this.shape_3,p:{x:316.6}},{t:this.shape_4,p:{x:363.9}},{t:this.shape_2,p:{x:411.2}},{t:this.shape,p:{x:458.8}}]},17).to({state:[{t:this.shape_3,p:{x:316.6}},{t:this.shape_4,p:{x:363.9}},{t:this.shape_2,p:{x:411.2}},{t:this.shape,p:{x:458.8}}]},17).to({state:[{t:this.shape_4,p:{x:363.9}},{t:this.shape_2,p:{x:411.2}},{t:this.shape,p:{x:458.8}}]},16).to({state:[{t:this.shape_2,p:{x:411.2}},{t:this.shape,p:{x:458.8}},{t:this.shape_4,p:{x:22.5}}]},17).to({state:[{t:this.shape,p:{x:458.8}},{t:this.shape_4,p:{x:22.5}},{t:this.shape_1}]},17).to({state:[{t:this.shape,p:{x:458.8}},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},16).to({state:[{t:this.shape,p:{x:458.8}},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape_4,p:{x:174.7}}]},17).to({state:[{t:this.shape,p:{x:458.8}},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape_6,p:{x:174.7}},{t:this.shape_4,p:{x:219}}]},15).to({state:[{t:this.shape_2,p:{x:458.8}},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape_6,p:{x:174.7}},{t:this.shape_4,p:{x:219}},{t:this.shape,p:{x:266.1}}]},16).to({state:[{t:this.shape_2,p:{x:458.8}},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape_8,p:{x:174.7}},{t:this.shape_6,p:{x:219}},{t:this.shape,p:{x:266.1}},{t:this.shape_4,p:{x:312.3}}]},15).to({state:[{t:this.shape_2,p:{x:458.8}},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape_11},{t:this.shape_8,p:{x:219}},{t:this.shape,p:{x:266.1}},{t:this.shape_6,p:{x:312.3}},{t:this.shape_4,p:{x:359.4}}]},16).to({state:[{t:this.shape_3,p:{x:458.8}},{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape_11},{t:this.shape_8,p:{x:219}},{t:this.shape_2,p:{x:266.1}},{t:this.shape_6,p:{x:312.3}},{t:this.shape_4,p:{x:359.4}},{t:this.shape,p:{x:406.5}}]},15).to({state:[]},34).wait(13));

	// cutout
	this.instance_7 = new lib.cutout();
	this.instance_7.parent = this;
	this.instance_7.setTransform(248.4,55.9,1,1.673,0,0,0,274.9,13);
	this.instance_7.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,21);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(302).to({regY:13.1,y:56},0).wait(1).to({regX:275,regY:13,x:248.5,y:55.8,alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1));

	// blue pulse
	this.instance_8 = new lib.bluepulse("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-188.1,52.9,0.973,1,0,0,0,162.3,69);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:158.1,x:-189.3,startPosition:1},0).wait(1).to({x:-186.4,startPosition:2},0).wait(1).to({x:-183.6,startPosition:3},0).wait(1).to({x:-180.7,startPosition:4},0).wait(1).to({x:-177.9,startPosition:5},0).wait(1).to({x:-175,startPosition:6},0).wait(1).to({x:-172.2,startPosition:7},0).wait(1).to({x:-169.3,startPosition:8},0).wait(1).to({x:-166.5,startPosition:9},0).wait(1).to({x:-163.6,startPosition:10},0).wait(1).to({x:-160.8,startPosition:11},0).wait(1).to({x:-157.9,startPosition:12},0).wait(1).to({x:-155.1,startPosition:13},0).wait(1).to({x:-152.2,startPosition:14},0).wait(1).to({x:-149.4,startPosition:15},0).wait(1).to({x:-146.5,startPosition:16},0).wait(1).to({x:-143.7,startPosition:17},0).wait(1).to({x:-140.8,startPosition:18},0).wait(1).to({x:-138,startPosition:19},0).wait(1).to({x:-135.1,startPosition:20},0).wait(1).to({x:-132.3,startPosition:21},0).wait(1).to({x:-129.4,startPosition:22},0).wait(1).to({x:-126.6,startPosition:23},0).wait(1).to({x:-123.7,startPosition:24},0).wait(1).to({x:-120.9,startPosition:25},0).wait(1).to({x:-118,startPosition:26},0).wait(1).to({x:-115.2,startPosition:27},0).wait(1).to({x:-112.3,startPosition:28},0).wait(1).to({x:-109.5,startPosition:29},0).wait(1).to({x:-106.6,startPosition:30},0).wait(1).to({x:-103.8,startPosition:31},0).wait(1).to({x:-100.9,startPosition:32},0).wait(1).to({x:-98.1,startPosition:33},0).wait(1).to({x:-95.2,startPosition:34},0).wait(1).to({x:-92.4,startPosition:35},0).wait(1).to({x:-89.5,startPosition:36},0).wait(1).to({x:-86.7,startPosition:37},0).wait(1).to({x:-83.8,startPosition:38},0).wait(1).to({x:-80.9,startPosition:39},0).wait(1).to({x:-78.1,startPosition:40},0).wait(1).to({x:-75.2,startPosition:41},0).wait(1).to({x:-72.4,startPosition:42},0).wait(1).to({x:-69.5,startPosition:43},0).wait(1).to({x:-66.7,startPosition:44},0).wait(1).to({x:-63.8,startPosition:45},0).wait(1).to({x:-61,startPosition:46},0).wait(1).to({x:-58.1,startPosition:47},0).wait(1).to({x:-55.3,startPosition:48},0).wait(1).to({x:-52.4,startPosition:49},0).wait(1).to({x:-49.6,startPosition:50},0).wait(1).to({x:-46.7,startPosition:51},0).wait(1).to({x:-43.9,startPosition:52},0).wait(1).to({x:-41,startPosition:53},0).wait(1).to({x:-38.2,startPosition:54},0).wait(1).to({x:-35.3,startPosition:55},0).wait(1).to({x:-32.5,startPosition:56},0).wait(1).to({x:-29.6,startPosition:57},0).wait(1).to({x:-26.8,startPosition:58},0).wait(1).to({x:-23.9,startPosition:59},0).wait(1).to({x:-21.1,startPosition:60},0).wait(1).to({x:-18.2,startPosition:61},0).wait(1).to({x:-15.4,startPosition:62},0).wait(1).to({x:-12.5,startPosition:63},0).wait(1).to({x:-9.7,startPosition:64},0).wait(1).to({x:-6.8,startPosition:65},0).wait(1).to({x:-4,startPosition:66},0).wait(1).to({x:-1.1,startPosition:67},0).wait(1).to({x:1.7,startPosition:68},0).wait(1).to({x:4.6,startPosition:69},0).wait(1).to({x:7.4,startPosition:70},0).wait(1).to({x:10.3,startPosition:71},0).wait(1).to({x:13.1,startPosition:72},0).wait(1).to({x:16,startPosition:73},0).wait(1).to({x:18.8,startPosition:74},0).wait(1).to({x:21.7,startPosition:75},0).wait(1).to({x:24.6,startPosition:76},0).wait(1).to({x:27.4,startPosition:77},0).wait(1).to({x:30.3,startPosition:78},0).wait(1).to({x:33.1,startPosition:79},0).wait(1).to({x:36,startPosition:80},0).wait(1).to({x:38.8,startPosition:81},0).wait(1).to({x:41.7,startPosition:82},0).wait(1).to({x:44.5,startPosition:83},0).wait(1).to({x:47.4,startPosition:84},0).wait(1).to({x:50.2,startPosition:85},0).wait(1).to({x:53.1,startPosition:86},0).wait(1).to({x:55.9,startPosition:87},0).wait(1).to({x:58.8,startPosition:88},0).wait(1).to({x:61.6,startPosition:89},0).wait(1).to({x:64.5,startPosition:90},0).wait(1).to({x:67.3,startPosition:91},0).wait(1).to({x:70.2,startPosition:92},0).wait(1).to({x:73,startPosition:93},0).wait(1).to({x:75.9,startPosition:94},0).wait(1).to({x:78.7,startPosition:95},0).wait(1).to({x:81.6,startPosition:96},0).wait(1).to({x:84.4,startPosition:97},0).wait(1).to({x:87.3,startPosition:98},0).wait(1).to({x:90.1,startPosition:99},0).wait(1).to({x:93,startPosition:100},0).wait(1).to({x:95.8,startPosition:101},0).wait(1).to({x:98.7,startPosition:102},0).wait(1).to({x:101.5,startPosition:103},0).wait(1).to({x:104.4,startPosition:104},0).wait(1).to({x:107.2,startPosition:105},0).wait(1).to({x:110.1,startPosition:106},0).wait(1).to({x:112.9,startPosition:107},0).wait(1).to({x:115.8,startPosition:108},0).wait(1).to({x:118.6,startPosition:109},0).wait(1).to({x:121.5,startPosition:110},0).wait(1).to({x:124.3,startPosition:111},0).wait(1).to({x:127.2,startPosition:112},0).wait(1).to({x:130,startPosition:113},0).wait(1).to({x:132.9,startPosition:114},0).wait(1).to({x:135.7,startPosition:115},0).wait(1).to({x:138.6,startPosition:116},0).wait(1).to({x:141.5,startPosition:117},0).wait(1).to({x:144.3,startPosition:118},0).wait(1).to({x:147.2,startPosition:119},0).wait(1).to({x:150,startPosition:120},0).wait(1).to({x:152.9,startPosition:121},0).wait(1).to({x:155.7,startPosition:122},0).wait(1).to({x:158.5,startPosition:123},0).wait(1).to({x:161.4,startPosition:124},0).wait(1).to({x:164.2,startPosition:125},0).wait(1).to({x:167.1,startPosition:126},0).wait(1).to({x:169.9,startPosition:127},0).wait(1).to({x:172.8,startPosition:128},0).wait(1).to({x:175.6,startPosition:129},0).wait(1).to({x:178.5,startPosition:130},0).wait(1).to({x:181.3,startPosition:131},0).wait(1).to({x:184.2,startPosition:132},0).wait(1).to({x:187,startPosition:133},0).wait(1).to({x:189.9,startPosition:134},0).wait(1).to({x:192.7,startPosition:135},0).wait(1).to({x:195.6,startPosition:136},0).wait(1).to({x:198.4,startPosition:137},0).wait(1).to({x:201.3,startPosition:138},0).wait(1).to({x:204.1,startPosition:139},0).wait(1).to({x:207,startPosition:140},0).wait(1).to({x:209.8,startPosition:141},0).wait(1).to({x:212.7,startPosition:142},0).wait(1).to({x:215.5,startPosition:143},0).wait(1).to({x:218.4,startPosition:144},0).wait(1).to({x:221.2,startPosition:145},0).wait(1).to({x:224.1,startPosition:146},0).wait(1).to({x:226.9,startPosition:147},0).wait(1).to({x:229.8,startPosition:148},0).wait(1).to({x:232.6,startPosition:149},0).wait(1).to({x:235.5,startPosition:150},0).wait(1).to({x:238.3,startPosition:151},0).wait(1).to({x:241.2,startPosition:152},0).wait(1).to({x:244.1,startPosition:153},0).wait(1).to({x:246.9,startPosition:154},0).wait(1).to({x:249.8,startPosition:155},0).wait(1).to({x:252.6,startPosition:156},0).wait(1).to({x:255.5,startPosition:157},0).wait(1).to({x:258.3,startPosition:158},0).wait(1).to({x:261.2,startPosition:159},0).wait(1).to({x:264,startPosition:160},0).wait(1).to({x:266.9,startPosition:161},0).wait(1).to({x:269.7,startPosition:162},0).wait(1).to({x:272.6,startPosition:163},0).wait(1).to({x:275.4,startPosition:164},0).wait(1).to({x:278.3,startPosition:165},0).wait(1).to({x:281.1,startPosition:166},0).wait(1).to({x:284,startPosition:167},0).wait(1).to({x:286.8,startPosition:168},0).wait(1).to({x:289.7,startPosition:169},0).wait(1).to({x:292.5,startPosition:170},0).wait(1).to({x:295.4,startPosition:171},0).wait(1).to({x:298.2,startPosition:172},0).wait(1).to({x:301.1,startPosition:173},0).wait(1).to({x:303.9,startPosition:174},0).wait(1).to({x:306.8,startPosition:175},0).wait(1).to({x:309.6,startPosition:176},0).wait(1).to({x:312.5,startPosition:177},0).wait(1).to({x:315.3,startPosition:178},0).wait(1).to({x:318.2,startPosition:179},0).wait(1).to({x:321,startPosition:180},0).wait(1).to({x:323.9,startPosition:181},0).wait(1).to({x:326.7,startPosition:182},0).wait(1).to({x:329.6,startPosition:183},0).wait(1).to({x:332.4,startPosition:184},0).wait(1).to({x:335.3,startPosition:185},0).wait(1).to({x:338.1,startPosition:186},0).wait(1).to({x:341,startPosition:187},0).wait(1).to({x:343.8,startPosition:188},0).wait(1).to({x:346.7,startPosition:189},0).wait(1).to({x:349.6,startPosition:190},0).wait(1).to({x:352.4,startPosition:191},0).wait(1).to({x:355.3,startPosition:192},0).wait(1).to({x:358.1,startPosition:193},0).wait(1).to({x:361,startPosition:194},0).wait(1).to({x:363.8,startPosition:195},0).wait(1).to({x:366.7,startPosition:196},0).wait(1).to({x:369.5,startPosition:197},0).wait(1).to({x:372.4,startPosition:198},0).wait(1).to({x:375.2,startPosition:199},0).wait(1).to({x:378.1,startPosition:200},0).wait(1).to({x:380.9,startPosition:201},0).wait(1).to({x:383.8,startPosition:202},0).wait(1).to({x:386.6,startPosition:203},0).wait(1).to({x:389.5,startPosition:204},0).wait(1).to({x:392.3,startPosition:205},0).wait(1).to({x:395.2,startPosition:206},0).wait(1).to({x:398,startPosition:207},0).wait(1).to({x:400.9,startPosition:208},0).wait(1).to({x:403.7,startPosition:209},0).wait(1).to({x:406.6,startPosition:210},0).wait(1).to({x:409.4,startPosition:211},0).wait(1).to({x:412.3,startPosition:212},0).wait(1).to({x:415.1,startPosition:213},0).wait(1).to({x:418,startPosition:214},0).wait(1).to({x:420.8,startPosition:215},0).wait(1).to({x:423.7,startPosition:216},0).wait(1).to({x:426.5,startPosition:217},0).wait(1).to({x:429.4,startPosition:218},0).wait(1).to({x:432.2,startPosition:219},0).wait(1).to({x:435.1,startPosition:220},0).wait(1).to({x:437.9,startPosition:221},0).wait(1).to({x:440.8,startPosition:222},0).wait(1).to({x:443.6,startPosition:223},0).wait(1).to({x:446.5,startPosition:224},0).wait(1).to({x:449.3,startPosition:225},0).wait(1).to({x:452.2,startPosition:226},0).wait(1).to({x:455,startPosition:227},0).wait(1).to({x:457.9,startPosition:228},0).wait(1).to({x:460.8,startPosition:229},0).wait(1).to({x:463.6,startPosition:230},0).wait(1).to({x:466.5,startPosition:231},0).wait(1).to({x:469.3,startPosition:232},0).wait(1).to({x:472.2,startPosition:233},0).wait(1).to({x:475,startPosition:234},0).wait(1).to({x:477.9,startPosition:235},0).wait(1).to({x:480.7,startPosition:236},0).wait(1).to({x:483.6,startPosition:237},0).wait(1).to({x:486.4,startPosition:238},0).wait(1).to({x:489.3,startPosition:239},0).wait(1).to({x:492.1,startPosition:240},0).wait(1).to({x:495,startPosition:241},0).wait(1).to({x:497.8,startPosition:242},0).wait(1).to({x:500.7,startPosition:243},0).wait(1).to({x:503.5,startPosition:244},0).wait(1).to({x:506.4,startPosition:245},0).wait(1).to({x:509.2,startPosition:246},0).wait(1).to({x:512.1,startPosition:247},0).wait(1).to({x:514.9,startPosition:248},0).wait(1).to({x:517.8,startPosition:249},0).wait(1).to({x:520.6,startPosition:250},0).wait(1).to({x:523.5,startPosition:251},0).wait(1).to({x:526.3,startPosition:252},0).wait(1).to({x:529.2,startPosition:253},0).wait(1).to({x:532,startPosition:254},0).wait(1).to({x:534.9,startPosition:255},0).wait(1).to({x:537.7,startPosition:256},0).wait(1).to({x:540.6,startPosition:257},0).wait(1).to({x:543.4,startPosition:258},0).wait(1).to({x:546.3,startPosition:259},0).wait(1).to({x:549.1,startPosition:260},0).wait(1).to({x:552,startPosition:261},0).wait(1).to({x:554.8,startPosition:262},0).wait(1).to({x:557.7,startPosition:263},0).wait(1).to({x:560.5,startPosition:264},0).wait(1).to({x:563.4,startPosition:265},0).wait(1).to({x:566.3,startPosition:266},0).wait(1).to({x:569.1,startPosition:267},0).wait(1).to({x:572,startPosition:268},0).wait(1).to({x:574.8,startPosition:269},0).wait(1).to({x:577.7,startPosition:270},0).wait(1).to({x:580.5,startPosition:271},0).wait(1).to({x:583.4,startPosition:272},0).wait(1).to({x:586.2,startPosition:273},0).wait(1).to({x:589.1,startPosition:274},0).wait(1).to({x:591.9,startPosition:275},0).wait(1).to({x:594.8,startPosition:276},0).wait(1).to({x:597.6,startPosition:277},0).wait(1).to({x:600.5,startPosition:278},0).wait(1).to({x:603.3,startPosition:279},0).wait(1).to({x:606.2,startPosition:280},0).wait(1).to({x:609,startPosition:281},0).wait(1).to({x:611.9,startPosition:282},0).wait(1).to({x:614.7,startPosition:283},0).wait(1).to({x:617.6,startPosition:284},0).wait(1).to({x:620.4,startPosition:285},0).wait(1).to({x:623.3,startPosition:286},0).wait(1).to({x:626.1,startPosition:287},0).wait(1).to({x:629,startPosition:288},0).wait(1).to({x:631.8,startPosition:289},0).wait(1).to({x:634.7,startPosition:290},0).wait(1).to({x:637.5,startPosition:291},0).wait(1).to({x:640.4,startPosition:292},0).wait(1).to({x:643.2,startPosition:293},0).wait(1).to({x:646.1,startPosition:294},0).wait(1).to({x:648.9,startPosition:295},0).wait(1).to({x:651.8,startPosition:296},0).wait(1).to({x:654.6,startPosition:297},0).wait(1).to({x:657.5,startPosition:298},0).wait(1).to({x:660.3,startPosition:299},0).wait(1).to({x:663.2},0).wait(1).to({x:666},0).wait(1).to({x:668.9},0).wait(1).to({x:671.7},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:299},0).wait(1));

	// red nerve bg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#CC3300","#D86741","#CD3806"],[0,0.502,1],0.8,16.3,0.8,-55.3).s().p("EglnAIpQgZgjgYhaQgxi1AAkYQAAjeAxirQAYhVAZgpMBLgAAAIANAeQAPAoANA1QAoCtAADzQAAEDgoCzQgVBagUAmg");
	this.shape_12.setTransform(240.8,55.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(316));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,0,501.2,110.6);


(lib.flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blueflash();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.5,0.01,0.01,0,0,0,20,20);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:20.1,regY:20.1,scaleX:0.1,scaleY:0.1,alpha:0.091},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:0.4,alpha:0.182},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.273},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.364},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:0.3,alpha:0.455},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:0.2,alpha:0.545},0).wait(1).to({scaleX:0.64,scaleY:0.64,alpha:0.636},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:0.1,alpha:0.727},0).wait(1).to({scaleX:0.82,scaleY:0.82,alpha:0.818},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.909},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0.4,alpha:1},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:0.5,alpha:0.949},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:0.4,alpha:0.898},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:0.1,y:0.5,alpha:0.847},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.796},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:0.2,alpha:0.745},0).wait(1).to({scaleX:0.7,scaleY:0.7,alpha:0.694},0).wait(1).to({scaleX:0.65,scaleY:0.65,alpha:0.644},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:0.3,alpha:0.593},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.542},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.491},0).wait(1).to({scaleX:0.45,scaleY:0.45,alpha:0.44},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:0.4,alpha:0.389},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:0.6,alpha:0.338},0).wait(1).to({scaleX:0.29,scaleY:0.29,y:0.5,alpha:0.287},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:0.5,alpha:0.236},0).wait(1).to({scaleX:0.19,scaleY:0.19,y:0.6,alpha:0.185},0).wait(1).to({scaleX:0.14,scaleY:0.14,y:0.5,alpha:0.134},0).wait(1).to({scaleX:0.09,scaleY:0.09,alpha:0.083},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0.3,0.4,0.4);


(lib.arc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arc4shape();
	this.instance.parent = this;
	this.instance.setTransform(1.1,3.8,1,1,0,0,0,1.1,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:3.7,y:3.7,alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.3,7.5);


(lib.arc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arc3shape();
	this.instance.parent = this;
	this.instance.setTransform(1.9,7,1,1,0,0,0,1.9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:2.6,regY:6.9,x:2.6,y:6.9,alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.2,13.9);


(lib.arc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arc2shape();
	this.instance.parent = this;
	this.instance.setTransform(1,6.8,1,1,0,0,0,1,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.3,regY:6.7,x:-0.3,y:6.7,alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,0,4.1,13.5);


(lib.arc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arc1shape();
	this.instance.parent = this;
	this.instance.setTransform(0.7,1.9,1,1,0,0,0,0.7,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:1.8,y:1.8,alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,3.7);


(lib.zoomcircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// circle border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AEpEpQh7B7iuAAQitAAh7h7Qh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7g");
	this.shape.setTransform(42,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// cirle mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7g");
	mask.setTransform(42,42);

	// arcs
	this.instance = new lib.arc1();
	this.instance.parent = this;
	this.instance.setTransform(21.7,38,1,1,0,0,0,0.7,1.9);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-2,-2,5,8);

	this.instance_1 = new lib.arc2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.4,48.9,1,1,0,0,0,1,6.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-4,-2,8,18);

	this.instance_2 = new lib.arc3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51,44.3,1,1,0,0,0,1.9,7);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_2.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_2.cache(-2,-2,9,18);

	this.instance_3 = new lib.arc4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.8,36.6,1,1,0,0,0,1.1,3.8);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);
	this.instance_3.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_3.cache(-2,-2,6,12);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// nerve 1
	this.instance_4 = new lib.nervecell();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-575.2,165.1,0.478,0.478,-90);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// nerve 2
	this.instance_5 = new lib.nervecell2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(269.7,43.9,0.34,0.34,0,0,0,622.6,268.1);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg color
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#373535").p("AEpEpQh7B7iuAAQitAAh7h7Qh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7g");
	this.shape_1.setTransform(42,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#575F8F").s().p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7g");
	this.shape_2.setTransform(42,42);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoomcircle, new cjs.Rectangle(-1,-1,86,86), null);


// stage content:
(lib.nerve_impulse_canvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{beginning:68});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		function replay(e:MouseEvent):void {
			gotoAndPlay("beginning");
		}
		
		function keepGoing(e:MouseEvent):void {
			play();
		}
		*/
		playSound("nerve_p01_titlewav");
	}
	this.frame_68 = function() {
		playSound("nerve_p02_withdrawalReflexwav");
	}
	this.frame_555 = function() {
		playSound("nerve_p03_whenANueronwav");
	}
	this.frame_756 = function() {
		var nerveCloseUp = exportRoot.nerveCloseUp;
		
		nerveCloseUp.gotoAndPlay(1);
	}
	this.frame_762 = function() {
		playSound("nerve_p04_likeDominoeswav");
	}
	this.frame_1087 = function() {
		var nerveCloseUp = exportRoot.nerveCloseUp;
		
		nerveCloseUp.gotoAndPlay("end");
	}
	this.frame_1201 = function() {
		playSound("nerve_p05_whenTheImpulsewav");
	}
	this.frame_1438 = function() {
		playSound("nerve_p05_whenTheImpulsewav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(68).call(this.frame_68).wait(487).call(this.frame_555).wait(201).call(this.frame_756).wait(6).call(this.frame_762).wait(325).call(this.frame_1087).wait(114).call(this.frame_1201).wait(237).call(this.frame_1438).wait(237));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBbQgSgHgMgNQgNgNgGgSQgHgSAAgWQAAgTAHgTQAHgSAMgNQANgNASgHQARgIAUAAQAYAAASAJQAIAFAIAGQAHAGAGAIQALAPAFAUQAFAUgBAVIiGAAQABAMADAJQADAJAGAGQALALAVAAQAPAAAMgIQALgIACgIIAtAAQgFAQgIAMQgJAMgLAIQgWAOggAAQgVAAgRgHgAgTg2QgIAEgFAGQgEAGgCAHIgDAMIBSAAQgDgTgJgKQgFgFgHgDQgHgCgJAAQgLAAgJAEg");
	this.shape.setTransform(385.3,199.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdBfQgQgEgMgHQgMgIgIgMQgIgNAAgSIAwAAQAAAIAEAGQADAGAGAEQAFAEAHABIAOACIALgBIALgEQAFgDADgEQADgFAAgHQAAgLgPgGQgQgGgagFIgWgGQgKgEgJgEQgIgGgFgIQgFgJAAgMQAAgSAHgMQAHgLAMgHQALgHAPgCQAOgDAPAAQAOAAAOADQAPADALAHQALAHAHALQAIALABARIgxAAQgBgOgKgFQgKgGgMAAIgKABIgJACIgHAFQgDAEAAAGQAAAGAFAFQAFAEAIADIASAFIAVAEIAWAGQALAEAIAGQAIAFAFAJQAFAIAAANQAAATgHAMQgIANgLAHQgMAIgQADQgPADgQAAQgPAAgPgDg");
	this.shape_1.setTransform(365.3,199.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZCBIAAkBIAzAAIAAEBg");
	this.shape_2.setTransform(351.1,196.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0BaQgNgFgIgKQgHgKgDgOQgDgPAAgRIAAhxIAzAAIAABoIACAUQABAJAEAFQAHALATAAQAUAAAJgMQAJgMAAgdIAAhgIAzAAIAAC5IgwAAIAAgaIgBAAQgFAIgHAGQgGAGgIADQgOAHgQAAQgVAAgNgFg");
	this.shape_3.setTransform(335.8,200);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AheCAIAAj6IAxAAIAAAXIAAAAQAKgPAOgGQAPgHAQAAQAWAAAQAIQAQAJAKANQAKAOAFASQAGASAAAUQAAASgGARQgFARgKAOQgKANgPAIQgIADgJADIgTACQgQAAgPgHQgPgIgJgNIgBAAIAABYgAgVhTQgJAFgFAIQgFAJgCAKQgDALAAAMQAAALADAKQACAKAFAJQAGAIAIAEQAJAFAMABQAMgBAIgFQAJgEAFgIQAFgJACgKQACgKAAgLQAAgMgCgKQgCgLgGgJQgFgIgIgFQgJgFgLgBQgNABgIAFg");
	this.shape_4.setTransform(314.6,202.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABbBgIAAhpIgBgSQAAgIgEgGQgDgGgGgEQgHgDgKgBQgLAAgHAEQgGAFgEAHQgEAHgBAHIgCASIAABnIgyAAIAAhoIAAgRQAAgHgDgHQgDgHgGgFQgGgEgNAAIgJACQgGACgGAFQgFAEgEAIQgEAJAAAOIAABrIgzAAIAAi6IAwAAIAAAaIABAAQAKgPAOgIQAOgHASAAQASgBAPAHQANAHAIASQAIgNAOgJQAPgJATAAQAPAAAMADQANAEAJAHQAJAJAFAMQAFANAAASIAAB8g");
	this.shape_5.setTransform(286.9,199.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbCBIAAkBIA3AAIAAEBg");
	this.shape_6.setTransform(265.3,196.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkBbQgSgHgMgNQgNgNgGgSQgHgSAAgWQAAgTAHgTQAHgSAMgNQANgNASgHQARgIAUAAQAYAAASAJQAIAFAIAGQAHAGAGAIQALAPAFAUQAFAUgBAVIiGAAQABAMADAJQADAJAGAGQALALAVAAQAPAAAMgIQALgIACgIIAtAAQgFAQgIAMQgJAMgLAIQgWAOggAAQgVAAgRgHgAgTg2QgIAEgFAGQgEAGgCAHIgDAMIBSAAQgDgTgJgKQgFgFgHgDQgHgCgJAAQgLAAgJAEg");
	this.shape_7.setTransform(239.6,199.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbBdIhAi5IA2AAIAmB+IABAAIAnh+IAzAAIg/C5g");
	this.shape_8.setTransform(220,199.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag7BgIAAi6IAwAAIAAAjIABAAQAEgIAGgIQAFgIAIgEQAIgGAJgDQAJgCAKAAIALABIAAAvIgJAAIgJgBQgOAAgLAEQgJAFgGAJQgFAHgCAMQgDAKAAALIAABVg");
	this.shape_9.setTransform(204.6,199.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBbQgSgHgMgNQgNgNgGgSQgHgSAAgWQAAgTAHgTQAHgSAMgNQANgNASgHQARgIAUAAQAYAAASAJQAIAFAIAGQAHAGAGAIQALAPAFAUQAFAUgBAVIiGAAQABAMADAJQADAJAGAGQALALAVAAQAPAAAMgIQALgIACgIIAtAAQgFAQgIAMQgJAMgLAIQgWAOggAAQgVAAgRgHgAgTg2QgIAEgFAGQgEAGgCAHIgDAMIBSAAQgDgTgJgKQgFgFgHgDQgHgCgJAAQgLAAgJAEg");
	this.shape_10.setTransform(186.3,199.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA0CBIhqirIgBAAIAACrIg0AAIAAkBIA4AAIBqCsIABAAIAAisIA1AAIAAEBg");
	this.shape_11.setTransform(162.7,196.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},44).wait(1631));

	// text - narration
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_12.setTransform(481.8,79.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_13.setTransform(475.8,76.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_14.setTransform(469.2,75.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_15.setTransform(465.3,75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_16.setTransform(461.7,76.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_17.setTransform(454.1,75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_18.setTransform(445.7,76.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_19.setTransform(437.6,76.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_20.setTransform(428.9,75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgFgBgDgEQgEgCgCgEQgBgEAAgGQAAgGABgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQADgCAAgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgIAEgFQACgEAEgDQAFgEAGgBQAFgCAHABIAKAAQAFABAEACQAEADADAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAKACIgJABIgIABIgIACQgDABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgDQAFgBADgDQADgCACgEIABgFIAAgMQgDABgDABg");
	this.shape_21.setTransform(416.7,76.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_22.setTransform(406.2,74.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgFgCgIQgDgHAAgJQAAgHADgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAKAAAGADQAIADAEAFQAFAGACAIQADAHAAAHQAAAJgDAHQgCAIgFAFQgEAGgIADIgHACIgJABgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAGQAAAIACAFQACAGADADQADAEAEABQAFADAEAAQAFAAAFgDQAEgBADgEQADgDADgGQABgFAAgIQAAgGgBgFQgDgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_23.setTransform(399.6,76.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_24.setTransform(387.2,76.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_25.setTransform(379,76.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AATAmQgDgDABgGIgHAFIgGAEQgGACgIABIgKgBQgEgBgEgEQgEgCgCgEQgCgEAAgGQAAgGACgFQADgEAEgCIAIgEIAJgCIAKgBIAIgCIAGgDQACgCAAgDQgBgEgBgDIgEgEIgFgCIgGAAQgIAAgFADQgFADgBAJIgNAAQABgIADgFQACgEAFgDQAEgEAGgBQAGgCAGABIAJAAQAGABAEACQAEADADAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAJACIgIABIgIABIgIACQgDABgCAEQgCADAAAEIABAFIADAEIAFACIAGABQAGAAADgDQAFgBADgDQADgCACgEIABgFIAAgMQgDABgEABg");
	this.shape_26.setTransform(371,76.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_27.setTransform(364.8,76.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_28.setTransform(357.6,75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQgBgDgBgCQgCgDgDgBIgHgBQgFAAgFACIgGAFQgCADgCAEIgBAFIAAAwIgMAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACACAFQADAEAAAGIAAA4g");
	this.shape_29.setTransform(346.6,76.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_30.setTransform(336.3,76.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQAAgDgDgCQgBgDgDgBIgHgBQgGAAgEACIgGAFQgCADgCAEIAAAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAGgDQAGgEAJAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACACAFQACAEABAGIAAA4g");
	this.shape_31.setTransform(325.8,76.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_32.setTransform(313.6,75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_33.setTransform(310.3,75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_34.setTransform(304.7,76.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgIACgHQACgHAFgHQAEgFAHgDQAHgDAIAAQAHgBAGACIAKAFQAEADADAGQADAEABAIIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFADAFAAQAJgBAGgFQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGACgHAAQgIgBgHgCg");
	this.shape_35.setTransform(296.6,76.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_36.setTransform(284.5,76.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFAAgFABQgEACgDADQgDADgBAEQgBAEAAAFIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_37.setTransform(276.2,75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_38.setTransform(269.6,75.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_39.setTransform(259.1,76.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgFgCgIQgDgHABgJQgBgHADgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAJAAAIADQAGADAFAFQAFAGADAIQABAHAAAHQAAAJgBAHQgDAIgFAFQgFAGgGADIgIACIgJABgAgIgaQgFACgDADQgEAEgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADAEAFABQAEADAEAAQAFAAAFgDQAEgBADgEQAEgDABgGQACgFAAgIQAAgGgCgFQgBgGgEgEQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_40.setTransform(250.6,76.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_41.setTransform(238.2,76.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgIACgHQACgHAFgHQAEgFAHgDQAHgDAIAAQAHgBAGACIAKAFQAEADADAGQADAEABAIIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFADAFAAQAJgBAGgFQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGACgHAAQgIgBgHgCg");
	this.shape_42.setTransform(230.1,76.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGACgIABIgKgBQgFgBgDgEQgEgCgBgEQgDgEAAgGQAAgGADgFQACgEADgCIAJgEIAJgCIAKgBIAIgCIAGgDQABgCAAgDQABgEgCgDIgEgEIgFgCIgGAAQgHAAgGADQgFADgBAJIgMAAQAAgIACgFQADgEAFgDQAEgEAGgBQAFgCAHABIAJAAQAGABAEACQAFADACAEQADAEAAAHIAAAnIAAAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAEgBIAAAKQgDACgGAAQgFgBgCgCgAAJACIgIABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIADAEIAFACIAGABQAGAAAEgDQAEgBADgDQADgCABgEIABgFIAAgMQgCABgEABg");
	this.shape_43.setTransform(222.2,76.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_44.setTransform(216.4,75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkA3IAAhrIANAAIAAALIAEgFIAGgFQAHgCAHAAIAJAAIAHADQAGADAFAGQAEAGADAHQACAHAAAIQAAAIgCAHQgDAIgEAFQgEAGgHADQgHADgJAAIgFgBIgHgCIgGgEQgEgCgCgDIAAAogAgLgoQgEADgDAEQgDAFgBAEIgBALIABALQABAFADAEQADAEAFACQAEADAGAAQAHAAAEgDQAFgCACgEIAEgJIABgMQAAgFgBgFIgEgKQgDgDgFgDQgFgCgFAAQgGAAgFACg");
	this.shape_45.setTransform(210.5,77.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgEgBgEgEQgDgCgDgEQgBgEAAgGQAAgGABgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgCABgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgIADgFQADgEAEgDQAFgEAGgBQAFgCAHABIAKAAQAFABAEACQAFADACAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgCgCgAAKACIgJABIgIABIgIACQgDABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgDQAFgBADgDQADgCABgEIACgFIAAgMQgDABgDABg");
	this.shape_46.setTransform(197.9,76.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_47.setTransform(187,75.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgEgBgEgEQgEgCgCgEQgCgEABgGQgBgGACgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAGgDQACgCAAgDQgBgEgBgDIgEgEIgFgCIgFAAQgJAAgFADQgGADAAAJIgNAAQAAgIAEgFQACgEAEgDQAFgEAGgBQAGgCAGABIAJAAQAGABAEACQAEADADAEQADAEgBAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAJACIgIABIgIABIgIACQgDABgCAEQgCADAAAEIABAFIADAEIAFACIAGABQAGAAADgDQAFgBADgDQADgCACgEIABgFIAAgMQgDABgEABg");
	this.shape_48.setTransform(181,76.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_49.setTransform(168.7,76.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgGAAgHIANAAQAAAFACADQABACAEACIAGADIAGABIAHgBIAGgCQADgBABgCQACgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFACgFQADgEAEgCQAFgDAFgBQAFgCAFABQAFgBAGACQAFABAEACQAFADACAFQADAFAAAHIgMAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACADIAGADIAIADIAJACIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgGAEgFABIgMABIgLgBg");
	this.shape_50.setTransform(160.8,76.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_51.setTransform(155.4,75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgDQAFgBADgDQACgDACgFQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_52.setTransform(149.6,76.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgkA3IAAhrIANAAIAAALIAEgFIAGgFQAHgCAHAAIAJAAIAHADQAGADAFAGQAEAGADAHQACAHAAAIQAAAIgCAHQgDAIgEAFQgEAGgHADQgHADgJAAIgFgBIgHgCIgGgEQgEgCgCgDIAAAogAgLgoQgEADgDAEQgDAFgBAEIgBALIABALQABAFADAEQADAEAFACQAEADAGAAQAHAAAEgDQAFgCACgEIAEgJIABgMQAAgFgBgFIgEgKQgDgDgFgDQgFgCgFAAQgGAAgFACg");
	this.shape_53.setTransform(141.3,77.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFgBAJIAAAwIgMAAIAAgyIAAgHQgBgDgBgCQgCgDgDgBIgHgBQgGAAgEACIgGAFQgDADgBAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACADAFQACAEAAAGIAAA4g");
	this.shape_54.setTransform(130.3,76.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_55.setTransform(122.2,75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_56.setTransform(112.5,76.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgGAnIgchNIAOAAIAVBAIAAAAIAVhAIAOAAIgdBNg");
	this.shape_57.setTransform(104.6,76.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGgBAGIAAAjg");
	this.shape_58.setTransform(98.9,76.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_59.setTransform(92,76.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_60.setTransform(83.7,76.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGACgIABIgKgBQgFgBgDgEQgDgCgCgEQgCgEgBgGQABgGACgFQACgEADgCIAJgEIAJgCIAKgBIAIgCIAGgDQABgCAAgDQABgEgCgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAJIgMAAQAAgIACgFQADgEAFgDQAEgEAGgBQAFgCAHABIAKAAQAFABAEACQAEADADAEQADAEAAAHIAAAnIAAAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgCgCgAAKACIgJABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIADAEIAFACIAGABQAGAAAEgDQAEgBADgDQADgCABgEIABgFIAAgMQgCABgDABg");
	this.shape_61.setTransform(71.6,76.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACADQABAEADACIAHACIAHAAIAGAAIAGgCQADgBACgCQACgCAAgEQAAgFgFgDQgDgCgGgBIgLgEIgMgDQgFgBgEgFQgEgEAAgHQAAgGADgEQACgFAEgCQAEgDAFgBIAKgCQAHAAAFACQAGABAEACQAEADADAFQACAFAAAHIgMAAIgCgHIgEgEIgGgBIgFgBIgGABIgGABIgDADQgCACABADQAAADABACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgEACgGABIgMABIgMgBg");
	this.shape_62.setTransform(489.8,58.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgDgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQACgCgBgEQAAgFgBgCIgEgEIgFgBIgGgBQgHAAgGADQgGADAAAIIgMAAQAAgHADgFQACgEAFgEQAEgDAGgBQAGgCAGAAIAJACQAGAAAEADQAEACADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgDgCgAAJABIgIACIgIABIgHADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDACgDIAAgGIAAgMQgCABgEAAg");
	this.shape_63.setTransform(482.2,58.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACADQABAEADACIAHACIAHAAIAGAAIAGgCQADgBACgCQABgCAAgEQABgFgEgDQgEgCgFgBIgMgEIgMgDQgFgBgEgFQgEgEAAgHQAAgGADgEQACgFAEgCQAEgDAFgBIALgCQAFAAAGACQAGABADACQAFADADAFQACAFAAAHIgMAAIgCgHIgFgEIgFgBIgFgBIgGABIgGABIgDADQgCACABADQAAADABACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgFACgFABIgMABIgMgBg");
	this.shape_64.setTransform(470.1,58.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_65.setTransform(462.2,58.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_66.setTransform(456.4,57.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgFgDgEgEQgCgEAAgHIAMAAQABAEABADIAGADIAGADIAFAAQAHAAAEgCQAEgCADgEQADgEABgFQABgGABgGIAAgFIgBAAQgDAHgHADQgHADgGAAQgJAAgGgDQgGgCgFgGQgFgFgBgHQgDgGAAgIIACgPQACgHAEgGQAFgGAGgDQAHgEAJgBQAHAAAHAEQAGADAEAHIAAgLIALAAIAABGQAAAJgBAHQgDAHgEAFQgJAKgSAAIgKgCgAgJgpQgEADgDAEIgEAJIgBAKIABAKQABAFACAEQADAEAEADQAEADAGgBQAGABAEgDQAFgDACgEQADgEACgFIABgKIgBgKQgBgGgDgDQgDgFgEgCQgEgCgGAAQgFAAgFACg");
	this.shape_67.setTransform(450.3,60.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_68.setTransform(442.2,58.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_69.setTransform(433.9,57.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACADQABAEAEACIAGACIAGAAIAHAAIAGgCQADgBABgCQACgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgGgBgEgFQgDgEAAgHQAAgGACgEQADgFAEgCQAFgDAFgBIAKgCQAFAAAGACQAFABAEACQAFADACAFQADAFAAAHIgMAAIgCgHIgFgEIgFgBIgFgBIgGABIgFABIgEADQgBACgBADQAAADACACIAGAEIAIACIAJACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgGACgFABIgMABIgLgBg");
	this.shape_70.setTransform(421.4,58.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgEQACgDACgEQABgFAAgFIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgCg");
	this.shape_71.setTransform(413.5,59);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_72.setTransform(407.7,57.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgEQACgDACgEQABgFAAgFIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgCg");
	this.shape_73.setTransform(401.9,59);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgFACIgGAFQgDADgBAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAHAAQAGAAAFACQAFABADADQAEACACAFQACAEAAAGIAAA4g");
	this.shape_74.setTransform(391.4,58.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_75.setTransform(383.3,57.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_76.setTransform(379.2,57.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACADQABAEAEACIAGACIAGAAIAHAAIAGgCQADgBABgCQACgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgGgBgEgFQgDgEAAgHQAAgGADgEQACgFAEgCQAFgDAFgBIAKgCQAFAAAGACQAFABAEACQAFADACAFQADAFAAAHIgMAAIgCgHIgFgEIgFgBIgFgBIgGABIgFABIgEADQgBACgBADQAAADACACIAGAEIAIACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgGACgFABIgMABIgLgBg");
	this.shape_77.setTransform(373.2,58.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_78.setTransform(362.8,57.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGACgIAAIgKgBQgFgBgDgCQgEgDgBgEQgDgEAAgGQAAgGADgFQACgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQABgCAAgEQABgFgCgCIgEgEIgFgBIgGgBQgHAAgGADQgFADgBAIIgMAAQAAgHACgFQADgEAFgEQAEgDAGgBQAFgCAHAAIAJACQAGAAAEADQAEACADAEQADAEAAAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgCgCgAAJABIgIACIgHABIgIADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDABgDIABgGIAAgMQgCABgEAAg");
	this.shape_79.setTransform(356.8,58.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDAEQgDACgBAEQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_80.setTransform(348.4,57.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgGA2IAAhfIgkAAIAAgLIBVAAIAAALIgkAAIAABfg");
	this.shape_81.setTransform(340,57.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_82.setTransform(329.4,62);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYA2IgEgBIAAgMIAEACIADAAQAEAAADgCQADgCABgDIAFgNIgehMIAOAAIAWA+IAAAAIAWg+IAOAAIgjBXIgDAJIgFAHIgGADIgHABg");
	this.shape_83.setTransform(324.8,60.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_84.setTransform(316.4,57.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgDgHABgIQgBgIADgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAJAAAIAEQAGADAFAGQAFAFACAHQACAIAAAIQAAAIgCAHQgCAHgFAGQgFAFgGADIgIADIgJAAgAgJgaQgEACgDAEQgEAEgBAFQgCAFAAAHQAAAGACAGQABAFAEAEQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQADgEADgFQABgGAAgGQAAgHgBgFQgDgFgDgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_85.setTransform(307.9,58.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_86.setTransform(299.4,57.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_87.setTransform(286.6,58.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDAEQgDACgBAEQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_88.setTransform(278.4,57.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_89.setTransform(271.7,57.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_90.setTransform(261.4,58.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_91.setTransform(252.7,57.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_92.setTransform(246.8,57.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACADQABAEADACIAHACIAHAAIAGAAIAGgCQADgBACgCQACgCAAgEQAAgFgFgDQgDgCgGgBIgLgEIgMgDQgFgBgEgFQgEgEAAgHQAAgGADgEQACgFAEgCQAEgDAFgBIAKgCQAHAAAFACQAGABAEACQAEADADAFQACAFAAAHIgMAAIgCgHIgEgEIgGgBIgFgBIgGABIgGABIgDADQgCACABADQAAADABACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgEACgGABIgMABIgMgBg");
	this.shape_93.setTransform(241.4,58.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_94.setTransform(235.2,57.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgEQACgDACgEQABgFAAgFIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgCg");
	this.shape_95.setTransform(228.8,59);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgIQAAgIACgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAJAAAIAEQAGADAFAGQAFAFADAHQABAIAAAIQAAAIgBAHQgDAHgFAGQgFAFgGADIgIADIgJAAgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAHQAAAGACAGQABAFAEAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgGAAgGQAAgHgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_96.setTransform(220.4,58.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQgBgDgCgCQgBgDgDgBIgHgBQgGAAgEACIgGAFQgCADgBAEIgBAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAFgEQAHgEAIAAQAGAAAEACQAFABAEADQACACACAFQACAEAAAGIAAA4g");
	this.shape_97.setTransform(205.6,58.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgDgHAAgIQAAgIADgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAKAAAGAEQAIADAEAGQAFAFACAHQADAIAAAIQAAAIgDAHQgCAHgFAGQgEAFgIADIgHADIgJAAgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADADAEACQAFACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgGAAgGQAAgHgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_98.setTransform(194.9,58.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_99.setTransform(188.8,58.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_100.setTransform(183.8,57.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACADQABAEADACIAHACIAHAAIAGAAIAGgCQADgBACgCQABgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgFgBgEgFQgEgEAAgHQAAgGADgEQACgFAEgCQAEgDAFgBIALgCQAFAAAGACQAGABADACQAFADADAFQACAFAAAHIgMAAIgCgHIgFgEIgFgBIgFgBIgGABIgGABIgDADQgCACABADQAAADABACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgFACgFABIgMABIgMgBg");
	this.shape_101.setTransform(173.6,58.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgEQACgDACgEQABgFAAgFIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgCg");
	this.shape_102.setTransform(165.7,59);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_103.setTransform(159.9,57.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgEQACgDACgEQABgFAAgFIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgCg");
	this.shape_104.setTransform(154.1,59);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQAAgDgDgCQgBgDgDgBIgHgBQgGAAgEACIgGAFQgCADgCAEIAAAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAGgDQAGgEAJAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACACAFQACAEABAGIAAA4g");
	this.shape_105.setTransform(143.6,58.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_106.setTransform(135.5,57.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_107.setTransform(131.4,57.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACADQABAEADACIAHACIAHAAIAGAAIAGgCQADgBACgCQACgCgBgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgFgBgEgFQgEgEAAgHQAAgGADgEQACgFAEgCQAEgDAFgBIALgCQAFAAAGACQAGABADACQAFADADAFQACAFAAAHIgMAAIgCgHIgFgEIgFgBIgFgBIgGABIgGABIgDADQgCACABADQAAADABACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgFACgFABIgMABIgMgBg");
	this.shape_108.setTransform(125.4,58.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgDgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQABgCAAgEQAAgFgBgCIgEgEIgFgBIgGgBQgHAAgGADQgFADgBAIIgMAAQAAgHADgFQACgEAFgEQAEgDAGgBQAGgCAGAAIAJACQAGAAAEADQAEACADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgDgCgAAJABIgIACIgIABIgHADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDACgDIAAgGIAAgMQgCABgEAAg");
	this.shape_109.setTransform(113.7,58.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_110.setTransform(101.4,58.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAUBAIABAAIAVhAIANAAIgcBNg");
	this.shape_111.setTransform(93.5,58.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_112.setTransform(88.1,57.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_113.setTransform(82.5,58.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAEQADAFABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_114.setTransform(74.4,58.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_115.setTransform(66.4,58.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_116.setTransform(60.6,58.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_117.setTransform(468.2,41.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_118.setTransform(462.4,40);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AARA1IgZgoIgMALIAAAdIgNAAIAAhqIANAAIAAA/IAighIARAAIgeAbIAhAxg");
	this.shape_119.setTransform(457.4,40);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgDgFAAgIIANAAQAAAEACAEQABACADACIAHADIAHABIAGgBIAGgBQADgCACgCQACgDAAgDQAAgFgFgCQgDgDgGgCIgLgCIgMgEQgFgBgEgEQgEgFAAgIQAAgFACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADADAEQACAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACACIAGAEIAHADIAIACIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgEAEgGABIgMABIgMgBg");
	this.shape_120.setTransform(449.2,41.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFALAAIAAAOQgIAAgGACQgFACgDAEQgCAEgCAGQgCAGABAGIAAAjg");
	this.shape_121.setTransform(439.3,41.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgEQACgCACgFQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_122.setTransform(432.2,41.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgHAoIgIgCQgHgEgFgFQgFgGgCgHQgCgHAAgIQAAgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAIADQAGADAFAFQAFAGADAIQABAHABAIQgBAIgBAHQgDAHgFAGQgFAFgGAEIgIACIgJABgAgIgaQgFACgDADQgEAEgBAGQgCAFAAAHQAAAGACAGQABAGAEADQADADAFADQAEACAEAAQAFAAAFgCQAEgDADgDQADgDACgGQACgGAAgGQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_123.setTransform(423.8,41.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIADAAQAEAAADgCQADgCABgDIAGgNIgghMIAPAAIAVA+IABAAIAWg+IANAAIghBXIgEAJIgEAHIgHADIgHABg");
	this.shape_124.setTransform(415.7,43);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_125.setTransform(403.7,41.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_126.setTransform(397.9,40);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgLAoQgGgCgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAEACAEQACACACACIAHADIAHABIAGgBIAGgBQADgCACgCQABgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgGgBgDgEQgEgFAAgIQAAgFADgFQACgEAEgCQAEgDAGgBIAKgCQAFABAGABQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgBACgBADQABADABACIAHAEIAIADIAIACIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgFAEgFABIgMABIgLgBg");
	this.shape_127.setTransform(388.3,41.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIgBgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_128.setTransform(380.6,41.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUBAIABAAIAVhAIANAAIgcBNg");
	this.shape_129.setTransform(372.8,41.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_130.setTransform(367,41.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIgBgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_131.setTransform(360.1,41.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_132.setTransform(351.9,41.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgYA2IgEgBIAAgMIAEACIAEAAQAEAAACgCQADgCABgDIAFgNIgfhMIAPAAIAVA+IABAAIAWg+IANAAIgiBXIgDAJIgFAHIgFADIgIABg");
	this.shape_133.setTransform(339.8,43);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFAKAAIAAAOQgHAAgGACQgFACgDAEQgCAEgCAGQgCAGAAAGIAAAjg");
	this.shape_134.setTransform(334.1,41.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgHAoIgIgCQgHgEgFgFQgFgGgCgHQgDgHAAgIQAAgIADgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAKABAGADQAIADAEAFQAFAGADAIQACAHAAAIQAAAIgCAHQgDAHgFAGQgEAFgIAEIgHACIgJABgAgIgaQgFACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAGADADQADADAFADQAEACAEAAQAFAAAFgCQAEgDADgDQADgDACgGQACgGAAgGQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_135.setTransform(326.8,41.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAEACAEQABACAEACIAGADIAGABIAHgBIAGgBQADgCABgCQACgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFACgFQADgEAEgCQAFgDAFgBIAKgCQAFABAGABQAFABAEADQAFADACAEQADAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACACIAGAEIAJADIAIACIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgGAEgFABIgMABIgLgBg");
	this.shape_136.setTransform(318.8,41.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_137.setTransform(310.9,41.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIgBgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_138.setTransform(302.8,41.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAEACAEQABACAEACIAGADIAGABIAHgBIAGgBQADgCABgCQACgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFACgFQADgEAEgCQAFgDAFgBIAKgCQAFABAGABQAFABAEADQAFADACAEQADAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACACIAGAEIAJADIAHACIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgGAEgFABIgMABIgLgBg");
	this.shape_139.setTransform(294.9,41.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_140.setTransform(282.9,41.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIgBgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_141.setTransform(274.8,41.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAFIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_142.setTransform(266.5,40);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAQAnIgQg9IgPA9IgNAAIgZhNIAOAAIARA/IABAAIAPg/IANAAIARA/IARg/IANAAIgYBNg");
	this.shape_143.setTransform(256.7,41.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAEACAEQABACADACIAHADIAHABIAGgBIAGgBQADgCACgCQACgDAAgDQAAgFgFgCQgDgDgGgCIgLgCIgMgEQgFgBgEgEQgEgFAAgIQAAgFACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADADAEQACAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACACIAGAEIAHADIAIACIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgEAEgGABIgMABIgMgBg");
	this.shape_144.setTransform(243.1,41.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgDgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_145.setTransform(236.9,40.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_146.setTransform(232.7,41.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgFgBgDgEQgEgCgCgEQgBgEAAgGQAAgGABgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQADgCAAgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgIAEgEQACgGAEgCQAFgEAGgBQAFgBAHgBIAKABQAFABAEACQAEADADAEQADAEgBAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAIAEgBIAAAKQgEACgGAAQgFgBgDgCgAAKACIgJABIgIABIgIACQgDABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCACgEIABgFIAAgMQgDABgDABg");
	this.shape_147.setTransform(225.9,41.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgDgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_148.setTransform(219.2,40.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgMAoQgFgCgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAEACAEQACACADACIAGADIAGABIAHgBIAGgBQADgCABgCQACgDABgDQgBgFgEgCQgDgDgGgCIgLgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgCACAAADQABADACACIAFAEIAIADIAIACIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgFAEgGABIgMABIgMgBg");
	this.shape_149.setTransform(213.2,41.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgPAAIAdgoIgbglIAQAAIASAbIATgbIAPAAIgaAkIAdApg");
	this.shape_150.setTransform(201.5,41.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIgBgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_151.setTransform(193.6,41.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_152.setTransform(187.9,40);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_153.setTransform(184.1,39.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIgBgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_154.setTransform(177.9,41.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFALAAIAAAOQgIAAgGACQgFACgDAEQgCAEgCAGQgCAGABAGIAAAjg");
	this.shape_155.setTransform(172,41.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_156.setTransform(163.3,40);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIABIgKgBQgEgBgEgEQgDgCgDgEQgCgEAAgGQAAgGACgFQADgEADgCIAJgEIAJgCIAKgBIAIgCIAGgDQACgCAAgDQgBgEgBgDIgEgEIgFgCIgGAAQgHAAgGADQgGADAAAJIgMAAQAAgIADgEQACgGAFgCQAEgEAGgBQAGgBAGgBIAJABQAGABAEACQAEADADAEQACAEAAAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAJACIgIABIgIABIgHACQgEABgCAEQgCADAAAEIABAFIADAEIAFACIAGABQAGAAAEgCQAEgCADgDQADgCACgEIABgFIAAgMQgDABgEABg");
	this.shape_157.setTransform(157.8,41.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAQAnIgQg9IgPA9IgNAAIgZhNIAOAAIARA/IABAAIAPg/IANAAIARA/IARg/IANAAIgYBNg");
	this.shape_158.setTransform(147.9,41.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIABIgKgBQgEgBgEgEQgDgCgCgEQgCgEAAgGQAAgGACgFQACgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgCAAgDQAAgEgBgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgMAAQAAgIACgEQADgGAEgCQAFgEAGgBQAGgBAGgBIAKABQAFABAEACQAFADACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgCgCgAAKACIgJABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCABgEIABgFIAAgMQgCABgDABg");
	this.shape_159.setTransform(138.4,41.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGgBAGIAAAjg");
	this.shape_160.setTransform(132.2,41.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_161.setTransform(124.6,40);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAFIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_162.setTransform(116.2,40);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgDgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_163.setTransform(109.6,40.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_164.setTransform(105.7,40);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAQAnIgQg9IgPA9IgNAAIgZhNIAOAAIARA/IABAAIAPg/IANAAIARA/IARg/IANAAIgYBNg");
	this.shape_165.setTransform(98.4,41.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAiA1IgMgfIgsAAIgMAfIgPAAIAqhqIAPAAIAqBqgAgSAJIAkAAIgSgwg");
	this.shape_166.setTransform(83.7,40);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_167.setTransform(471.9,192.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQABAEADACIAHACIAHAAIAGAAIAGgBQADgBACgDQACgDAAgDQAAgFgFgCQgDgDgGgCIgLgDIgMgDQgFgCgEgEQgEgEAAgHQAAgGACgEQADgEAEgDQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADADAEQACAFABAHIgNAAIgCgHIgEgDIgGgCIgFgBIgGABIgGABIgDADQgBACAAADQAAADACACIAGAEIAHADIAIABIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFAEQgEADgGAAIgMABIgMgBg");
	this.shape_168.setTransform(451.9,192.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_169.setTransform(445.7,191.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgyIANAAIAAA0IABAGIADAGQAEADAHABQAFgBAEgBQAFgCADgEQACgDACgEQABgEAAgGIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHgBQgIAAgFgCg");
	this.shape_170.setTransform(439.3,192.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgFgCgIQgCgHAAgIQAAgIACgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAJABAIADQAGADAFAGQAFAFADAHQACAIAAAIQAAAIgCAHQgDAIgFAFQgFAGgGADIgIACIgJAAgAgIgaQgFACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAFADAEQADAEAFACQAEABAEAAQAFAAAFgBQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_171.setTransform(430.9,192.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_172.setTransform(418.5,192.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AATA2IAAg1IgBgFIgDgGIgFgDIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAEAAAGIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_173.setTransform(410.2,191.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_174.setTransform(403.6,191.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AATA2IAAg1IgBgFIgDgGIgFgDIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAEAAAGIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_175.setTransform(393.1,191.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_176.setTransform(386.4,191.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_177.setTransform(352.6,192.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIgBIgKgBQgEAAgEgDQgDgDgCgEQgCgEAAgGQAAgHACgEQACgEAEgCIAIgEIAKgCIAJgCIAIgBIAFgCQACgDAAgDQAAgEgBgDIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgMAAQgBgGADgFQADgGAEgCQAFgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFABgCgDgAAKACIgJABIgHABIgJACQgDACgCADQgCADAAAEIABAFIAEAEIAEACIAGAAQAGAAADgBQAFgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_178.setTransform(340,192.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgkA2IAAhqIANAAIAAALIAEgGIAGgDQAHgEAHAAIAJABIAHADQAGADAFAGQAEAGADAHQACAHAAAJQAAAHgCAHQgDAIgEAFQgEAGgHADQgHACgJAAIgFAAIgHgCIgGgDQgEgDgCgDIAAAngAgLgnQgEACgDAEQgDAEgBAGIgBAKIABALQABAFADADQADAEAFADQAEACAGABQAHgBAEgCQAFgDACgEIAEgIIABgLQAAgGgBgFIgEgKQgDgDgFgCQgFgDgFAAQgGAAgFADg");
	this.shape_179.setTransform(331.6,194.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQgBgDgCgCQgBgDgDgBIgHgBQgFAAgEACIgHAFQgDADAAAEIgBAFIAAAwIgOAAIAAhNIAMAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACABAFQACAEAAAGIAAA4g");
	this.shape_180.setTransform(320.6,192.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgCgHgBgIQABgIACgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAJABAHADQAIADAEAGQAFAFACAHQACAIAAAIQAAAIgCAHQgCAIgFAFQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgEACgFQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_181.setTransform(309.9,192.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgHACgIQACgIAFgFQAEgGAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKIAEAKQADAEAEACQAFACAFAAQAJABAGgGQAFgEABgJIANAAQgBAHgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIABgHgDg");
	this.shape_182.setTransform(301.6,192.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_183.setTransform(289.4,192.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_184.setTransform(272,191.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIgBIgKgBQgFAAgDgDQgDgDgCgEQgCgEgBgGQABgHACgEQACgEADgCIAJgEIAJgCIAKgCIAIgBIAFgCQACgDAAgDQABgEgCgDIgEgEIgGgBIgFgBQgHAAgGADQgFADgBAIIgMAAQAAgGACgFQADgGAFgCQAEgDAGgCQAFgBAHgBIAKABQAFABAEADQAEACADAEQADAEAAAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFABgCgDgAAKACIgJABIgHABIgIACQgEACgCADQgCADAAAEIABAFIADAEIAFACIAGAAQAGAAAEgBQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_185.setTransform(266,192.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgKA2QgGgBgFgDQgEgDgDgEQgEgEAAgGIANAAQABADACADIAEADIAGACIAGABQAGAAAFgCQAEgCADgEQADgEABgGQABgFAAgGIAAgFIAAAAQgDAHgHAEQgHACgGAAQgIAAgHgCQgGgDgFgGQgFgFgCgIQgBgGAAgHQgBgHACgIQACgHAEgGQAFgFAHgEQAGgFAJAAQAHABAHADQAGADADAHIAAgMIANAAIAABGQAAAKgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgIgpQgFACgDAEIgEAJIgBALIABALQABAEADAEQACAFAFACQAEACAFABQAGgBAEgCQAFgCADgFQACgEABgEIACgLIgCgLQAAgEgDgFQgDgDgEgCQgEgDgGAAQgFAAgEACg");
	this.shape_186.setTransform(257.3,194.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_187.setTransform(249.2,192.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIgBIgKgBQgEAAgEgDQgEgDgCgEQgCgEABgGQgBgHACgEQADgEAEgCIAIgEIAKgCIAJgCIAIgBIAGgCQACgDAAgDQgBgEgBgDIgEgEIgFgBIgFgBQgJAAgFADQgGADAAAIIgNAAQAAgGAEgFQACgGAEgCQAFgDAGgCQAGgBAGgBIAJABQAGABAEADQAEACADAEQADAEgBAHIAAAmIABAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFABgDgDgAAJACIgIABIgIABIgIACQgDACgCADQgCADAAAEIABAFIADAEIAFACIAGAAQAGAAADgBQAFgCADgDQADgCACgDIABgGIAAgMQgDABgEABg");
	this.shape_188.setTransform(214.7,192.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgHACgIQACgIAFgFQAEgGAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKIAEAKQADAEAEACQAFACAFAAQAJABAGgGQAFgEABgJIANAAQgBAHgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIABgHgDg");
	this.shape_189.setTransform(206.5,192.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_190.setTransform(191.7,191.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgHACgIQACgIAFgFQAEgGAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJABAGgGQAFgEABgJIANAAQgBAHgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIABgHgDg");
	this.shape_191.setTransform(185.5,192.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_192.setTransform(177.5,192.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_193.setTransform(171.8,191.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_194.setTransform(166.2,192.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACAEADACIAGACIAGAAIAHAAIAGgBQADgBABgDQACgDAAgDQAAgFgEgCQgDgDgFgCIgMgDIgMgDQgFgCgFgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAFgBIAJgCQAGABAGABQAFABAEADQAFADACAEQADAFABAHIgNAAIgCgHIgFgDIgFgCIgFgBIgGABIgFABIgEADQgCACAAADQAAADADACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgEAEQgFADgGAAIgMABIgLgBg");
	this.shape_195.setTransform(154.2,192.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_196.setTransform(139,192.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIgBIgKgBQgFAAgDgDQgEgDgBgEQgDgEAAgGQAAgHADgEQACgEADgCIAJgEIAJgCIAKgCIAIgBIAGgCQABgDAAgDQABgEgCgDIgEgEIgFgBIgGgBQgHAAgGADQgFADgBAIIgMAAQAAgGACgFQADgGAFgCQAEgDAGgCQAFgBAHgBIAJABQAGABAEADQAFACACAEQADAEAAAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFABgCgDgAAJACIgIABIgHABIgIACQgEACgCADQgCADAAAEIABAFIADAEIAFACIAGAAQAGAAAEgBQAEgCADgDQADgCABgDIABgGIAAgMQgCABgEABg");
	this.shape_197.setTransform(122.8,192.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_198.setTransform(88.1,192.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgFAFQgFAFgBAJIAAAwIgMAAIAAgyIAAgHQgBgDgBgCQgCgDgDgBIgHgBQgGAAgEACIgGAFQgDADgBAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABADADQADACADAFQACAEAAAGIAAA4g");
	this.shape_199.setTransform(77.6,192.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_200.setTransform(417.1,175.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgEAIABQAHgBAGACIAKAFQAEADADAFQADAFABAIIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFADAFAAQAJgBAGgFQAFgEABgKIANAAQgBAIgDAGQgCAFgFAEQgEADgGADQgGACgHAAQgIgBgHgCg");
	this.shape_201.setTransform(409,175.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_202.setTransform(396.8,175.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgFIgFgDIgGgBQgFAAgFABQgEACgDADQgDAEgBADQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_203.setTransform(388.6,173.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_204.setTransform(381.9,174.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgFgCgIQgDgHAAgJQAAgHADgHQACgIAFgGQAFgFAHgDQAHgEAIABQAKgBAGAEQAIADAEAFQAFAGADAIQACAHAAAHQAAAJgCAHQgDAIgFAFQgEAFgIADIgHADIgJABgAgIgaQgFACgDAEQgDADgCAGQgCAFAAAGQAAAIACAFQACAGADADQADADAFACQAEACAEABQAFgBAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgGgDgDQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_205.setTransform(366.9,175.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_206.setTransform(354.5,175.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgDgGAAgGIANAAQAAADACAEQABACADACIAHADIAHABIAGgBIAGgCQADAAACgDQACgDAAgDQAAgFgFgDQgDgCgGgCIgLgCIgMgEQgFgBgEgEQgEgFAAgIQAAgFACgFQADgDAEgDQAFgDAEgBIAKgBQAHgBAFACQAFABAFACQAEAEADAEQACAFABAHIgNAAIgCgGIgEgFIgGgCIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACADIAGADIAHACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgEADgGACIgMABIgMgBg");
	this.shape_207.setTransform(334.5,175.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_208.setTransform(311,175.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgFIgFgDIgGgBQgFAAgFABQgEACgDADQgDAEgBADQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_209.setTransform(302.8,173.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_210.setTransform(296.1,174.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgHAMIAEgDIADgEIAAgEIABgDIgIAAIAAgQIAPAAIAAAPIgBAHIgDAGQgDAHgIACg");
	this.shape_211.setTransform(287.7,179.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_212.setTransform(283.1,174.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgLAoQgGgCgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACAEQACACACACIAHADIAGABIAHgBIAGgCQADAAACgDQABgDAAgDQAAgFgDgDQgEgCgFgCIgMgCIgMgEQgGgBgDgEQgEgFAAgIQAAgFADgFQACgDAEgDQAEgDAGgBIAKgBQAFgBAGACQAGABADACQAFAEADAEQACAFAAAHIgMAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACADIAHADIAIACIAIADIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgFADgFACIgMABIgLgBg");
	this.shape_213.setTransform(277.2,175.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_214.setTransform(269.5,175.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_215.setTransform(263.6,175.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_216.setTransform(254,174.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGACgIABIgKgBQgFgCgDgDQgDgCgCgEQgCgEgBgGQABgHACgEQACgEADgDIAJgCIAJgDIAKgBIAIgCIAGgDQABgCAAgDQABgFgCgCIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAJIgMAAQAAgHACgGQADgEAFgEQAEgCAGgCQAFgCAHABIAKABQAFAAAEACQAEADADAEQADAEAAAHIAAAnIAAAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgCgCgAAKABIgJACIgHABIgIACQgEABgCADQgCADAAAFIABAGIADADIAFACIAGABQAGgBAEgCQAEgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_217.setTransform(248,175.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgCgGgBgGIANAAQAAADACAEQABACAEACIAGADIAGABIAHgBIAGgCQADAAABgDQACgDAAgDQAAgFgDgDQgEgCgFgCIgMgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFADgFQACgDAEgDQAEgDAGgBIAKgBQAFgBAGACQAFABAEACQAFAEACAEQADAFAAAHIgMAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACADIAGADIAJACIAIADIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgGADgFACIgMABIgLgBg");
	this.shape_218.setTransform(235.9,175.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgFgCgIQgDgHAAgJQAAgHADgHQACgIAFgGQAFgFAHgDQAHgEAIABQAKgBAGAEQAIADAEAFQAFAGADAIQACAHAAAHQAAAJgCAHQgDAIgFAFQgEAFgIADIgHADIgJABgAgIgaQgFACgDAEQgDADgCAGQgCAFAAAGQAAAIACAFQACAGADADQADADAFACQAEACAEABQAFgBAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgGgDgDQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_219.setTransform(212.1,175.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_220.setTransform(206,175.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgRAmQgFgDgDgDQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAEAHABQAFgBAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_221.setTransform(198.9,175.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_222.setTransform(190.8,175.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgFgCgDgDQgDgCgDgEQgBgEAAgGQAAgHABgEQADgEAEgDIAIgCIAKgDIAJgBIAIgCIAFgDQACgCABgDQAAgFgCgCIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgHADgGQADgEAEgEQAFgCAGgCQAGgCAGABIAKABQAFAAAEACQAFADACAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgDgCgAAKABIgJACIgIABIgIACQgDABgCADQgCADAAAFIABAGIAEADIAEACIAGABQAGgBADgCQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDAAg");
	this.shape_223.setTransform(170.4,175.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_224.setTransform(149.8,175.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgFIgFgDIgGgBQgFAAgFABQgEACgDADQgDAEgBADQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_225.setTransform(141.6,173.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AAYA1IgYhZIgYBZIgQAAIgbhqIAPAAIAVBYIAYhYIAOAAIAYBYIAWhYIAPAAIgdBqg");
	this.shape_226.setTransform(130.5,173.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgQBGIAKgRIAGgRIACgSIABgSQAAgRgEgSQgEgQgLgSIAKAAIAJARIAHARQADAIACAJQACAKAAAIQAAASgGASQgDAJgFAJIgJAQg");
	this.shape_227.setTransform(472,210.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACAEQABADADABIAHADIAHAAIAGAAIAGgCQADAAACgDQACgDAAgDQAAgFgFgDQgDgCgGgBIgLgDIgMgEQgFgCgEgEQgEgEAAgIQAAgFACgFQADgDAEgDQAFgDAEgBIAKgBQAHAAAFABQAFABAFACQAEADADAFQACAFABAHIgNAAIgCgGIgEgFIgGgCIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACADIAGADIAHACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAHgDAFQgDAEgFADQgEADgGACIgMABIgMgBg");
	this.shape_228.setTransform(466.8,210.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgCQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_229.setTransform(459.1,210.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgFgDgDgEQgCgEAAgHIAMAAQAAAEADACIAEAFIAHACIAFAAQAGAAAFgCQAFgCACgEQADgEABgFQACgFgBgHIAAgFIAAAAQgDAHgHADQgHADgGABQgIgBgHgDQgHgDgEgFQgEgFgCgHQgCgHAAgIIABgNQACgIAEgGQAEgGAIgEQAGgDAJAAQAIgBAGAEQAGADADAGIAAgKIAMAAIAABGQAAAJgCAHQgCAHgEAFQgJAJgSAAIgLgBgAgJgpQgEADgDAEIgEAJIgBAKIABAKQABAFADAEQACAEAEADQAFACAFAAQAGAAAFgCQAEgDACgEQAEgEABgFIABgLIgBgJQgCgFgCgEQgCgEgFgDQgEgCgGAAQgFAAgFACg");
	this.shape_230.setTransform(450.5,211.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgCAGAAAGIAAAjg");
	this.shape_231.setTransform(444.8,210.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGADgIAAIgKgBQgFgCgDgDQgDgCgCgEQgCgEAAgGQAAgHACgEQACgEADgDIAJgCIAJgDIAKgCIAIgBIAFgDQACgCAAgDQAAgEgBgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAJIgMAAQAAgHACgGQADgEAFgEQAEgDAGgBQAFgBAHAAIAKABQAFAAAEACQAFADACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEADgGAAQgFAAgCgDgAAKABIgJACIgHABIgIADQgEAAgCADQgCAEAAAEIABAGIAEADIAEACIAGAAQAGAAAEgCQAEgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_232.setTransform(438,210.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AATA1IAAg0IgBgGIgDgEIgFgDIgGgCQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgCIAGgEIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_233.setTransform(429.6,208.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgFgCgHQgCgHAAgJQAAgHACgIQACgIAFgGQAEgFAHgDQAHgEAIABQAHAAAGABIAKAFQAEADADAFQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgFABgKIANAAQgBAIgDAGQgCAFgFAEQgEAEgGABQgGADgHAAQgIAAgHgDg");
	this.shape_234.setTransform(421.5,210.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgCQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_235.setTransform(409.3,210.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUBAIABAAIAVhAIAOAAIgdBNg");
	this.shape_236.setTransform(401.5,210.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACAEQABADAEABIAGADIAGAAIAHAAIAGgCQADAAABgDQACgDAAgDQAAgFgDgDQgEgCgFgBIgMgDIgMgEQgGgCgEgEQgDgEAAgIQAAgFACgFQADgDAEgDQAFgDAFgBIAKgBQAFAAAGABQAFABAEACQAFADACAFQADAFAAAHIgMAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACADIAGADIAJACIAHADIAKACIAIADIAGAGQACAEAAAFQAAAHgDAFQgDAEgEADQgGADgFACIgMABIgLgBg");
	this.shape_237.setTransform(382.7,210.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_238.setTransform(374.6,210.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgGIAGgDQAHgDAHAAIAJABIAHACQAGADAFAGQAEAFADAIQACAHAAAIQAAAJgCAGQgDAHgEAGQgEAFgHADQgHAEgJAAIgFgBIgHgCIgGgDQgEgDgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAFIgBAKIABALQABAEADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgJIABgLQAAgFgBgFIgEgJQgDgEgFgDQgFgCgFAAQgGAAgFACg");
	this.shape_239.setTransform(366.1,211.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AAHBGIgJgRIgHgRIgFgSQgCgJAAgJIACgSIAEgRQAGgSALgQIAKAAIgKARIgGARQgDARAAASIABASIACASQAFARALARg");
	this.shape_240.setTransform(360,210.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgCgGgBgGIANAAQAAADACAEQABADAEABIAGADIAGAAIAHAAIAGgCQADAAABgDQACgDAAgDQAAgFgDgDQgEgCgFgBIgMgDIgMgEQgGgCgEgEQgDgEAAgIQAAgFADgFQACgDAEgDQAEgDAGgBIAKgBQAFAAAGABQAFABAEACQAFADADAFQACAFAAAHIgMAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACADIAHADIAIACIAIADIAJACIAIADIAGAGQACAEAAAFQAAAHgDAFQgDAEgEADQgGADgFACIgMABIgLgBg");
	this.shape_241.setTransform(349.7,210.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHgBgJQABgHACgIQACgHAFgGQAFgFAHgDQAHgEAIABQAKgBAGAEQAIADAEAFQAFAGACAHQACAIABAHQgBAJgCAHQgCAHgFAGQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_242.setTransform(333.4,210.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgDgHAAgJQAAgHADgIQACgHAFgGQAFgFAHgDQAHgEAIABQAKgBAGAEQAIADAEAFQAFAGADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgEAFgIADIgHADIgJABgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_243.setTransform(320.1,210.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgGIAGgDQAHgDAHAAIAJABIAHACQAGADAFAGQAEAFADAIQACAHAAAIQAAAJgCAGQgDAHgEAGQgEAFgHADQgHAEgJAAIgFgBIgHgCIgGgDQgEgDgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAFIgBAKIABALQABAEADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgJIABgLQAAgFgBgFIgEgJQgDgEgFgDQgFgCgFAAQgGAAgFACg");
	this.shape_244.setTransform(306.9,211.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgCQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_245.setTransform(294.1,210.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_246.setTransform(281,210.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgDgEAAgHIAMAAQAAAEACACIAGAFIAFACIAGAAQAHAAAEgCQAEgCADgEQADgEABgFQABgFABgHIAAgFIgBAAQgDAHgHADQgGADgHABQgJgBgGgDQgHgDgEgFQgEgFgDgHQgCgHAAgIIACgNQACgIAEgGQAFgGAGgEQAHgDAJAAQAHgBAHAEQAGADAEAGIAAgKIALAAIAABGQAAAJgBAHQgDAHgEAFQgJAJgSAAIgKgBgAgJgpQgEADgDAEIgEAJIgBAKIABAKQABAFACAEQADAEAEADQAEACAGAAQAGAAAEgCQAFgDACgEQADgEACgFIABgLIgBgJQgCgFgCgEQgDgEgEgDQgEgCgGAAQgGAAgEACg");
	this.shape_247.setTransform(255.3,211.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGADgIAAIgKgBQgFgCgDgDQgDgCgCgEQgCgEAAgGQAAgHACgEQACgEADgDIAJgCIAJgDIAKgCIAIgBIAFgDQACgCAAgDQAAgEgBgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAJIgMAAQAAgHACgGQADgEAEgEQAFgDAGgBQAGgBAGAAIAKABQAFAAAEACQAFADACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEADgGAAQgFAAgCgDgAAKABIgJACIgHABIgIADQgEAAgCADQgCAEAAAEIABAGIAEADIAEACIAGAAQAGAAAEgCQAEgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_248.setTransform(228.3,210.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AATA1IAAg0IgBgGIgDgEIgFgDIgGgCQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgCIAGgEIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_249.setTransform(219.9,208.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGADAHQABAIABAHQgBAJgBAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAGAEADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_250.setTransform(207.3,210.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgQBGIAKgRIAGgRIACgSIABgSQAAgRgEgSQgEgQgLgSIAKAAIAJARIAHARQADAIACAJQACAKAAAIQAAASgGASQgDAJgFAJIgJAQg");
	this.shape_251.setTransform(191.8,210.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACAEQACADADABIAGADIAGAAIAHAAIAGgCQADAAABgDQACgDAAgDQAAgFgEgDQgDgCgGgBIgLgDIgMgEQgFgCgFgEQgDgEAAgIQAAgFACgFQADgDAEgDQAFgDAFgBIAKgBQAFAAAGABQAFABAEACQAFADACAFQADAFABAHIgNAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgCACAAADQAAADADADIAFADIAIACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAHgDAFQgDAEgEADQgFADgGACIgMABIgLgBg");
	this.shape_252.setTransform(186.6,210.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgCQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_253.setTransform(178.9,210.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgDgEAAgHIAMAAQAAAEACACIAGAFIAFACIAGAAQAHAAAEgCQAEgCADgEQADgEABgFQABgFABgHIAAgFIgBAAQgDAHgHADQgGADgHABQgJgBgGgDQgHgDgEgFQgEgFgDgHQgCgHAAgIIACgNQACgIAEgGQAFgGAGgEQAHgDAJAAQAIgBAGAEQAGADAEAGIAAgKIALAAIAABGQAAAJgBAHQgDAHgEAFQgJAJgSAAIgKgBgAgJgpQgEADgDAEIgEAJIgBAKIABAKQABAFACAEQADAEAEADQAEACAGAAQAGAAAEgCQAFgDACgEQADgEACgFIABgLIgBgJQgCgFgCgEQgDgEgEgDQgEgCgGAAQgGAAgEACg");
	this.shape_254.setTransform(170.3,211.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGAAAGIAAAjg");
	this.shape_255.setTransform(164.6,210.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGADgIAAIgKgBQgEgCgEgDQgDgCgDgEQgCgEAAgGQAAgHACgEQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgDQACgCAAgDQgBgEgBgDIgEgEIgFgCIgGAAQgHAAgGADQgGADAAAJIgMAAQAAgHADgGQACgEAFgEQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDADgGAAQgFAAgDgDgAAJABIgIACIgIABIgHADQgEAAgCADQgCAEAAAEIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_256.setTransform(157.8,210.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AATA1IAAg0IgBgGIgDgEIgFgDIgGgCQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgCIAGgEIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_257.setTransform(149.4,208.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgFgCgHQgCgHAAgJQAAgHACgIQACgIAFgGQAEgFAHgDQAHgEAIABQAHAAAGABIAKAFQAEADADAFQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgFABgKIANAAQgBAIgDAGQgCAFgFAEQgEAEgGABQgGADgHAAQgIAAgHgDg");
	this.shape_258.setTransform(141.3,210.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgCQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_259.setTransform(129.1,210.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIAAIgKgBQgFgCgDgDQgEgCgBgEQgDgEAAgGQAAgHADgEQACgEADgDIAJgCIAJgDIAKgCIAIgBIAGgDQABgCAAgDQABgEgCgDIgEgEIgFgCIgGAAQgHAAgGADQgFADgBAJIgMAAQAAgHACgGQADgEAFgEQAEgDAGgBQAFgBAHAAIAJABQAGAAAEACQAFADACAEQADAEAAAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDADgGAAQgFAAgCgDgAAJABIgIACIgHABIgIADQgEAAgCADQgCAEAAAEIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDABgEIABgFIAAgMQgCABgEAAg");
	this.shape_260.setTransform(105.7,210.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgEgDgEgEQgDgEAAgHIANAAQABAEACACIAEAFIAGACIAGAAQAHAAAEgCQAFgCACgEQADgEABgFQABgFAAgHIAAgFIAAAAQgDAHgHADQgGADgHABQgJgBgGgDQgGgDgFgFQgEgFgDgHQgBgHAAgIIABgNQACgIAEgGQAEgGAIgEQAGgDAJAAQAHgBAHAEQAGADADAGIAAgKIANAAIAABGQAAAJgDAHQgCAHgEAFQgJAJgSAAIgLgBgAgIgpQgFADgDAEIgEAJIgBAKIABAKQABAFADAEQACAEAFADQAEACAFAAQAGAAAFgCQAEgDADgEQADgEAAgFIACgLIgCgJQgBgFgCgEQgCgEgFgDQgEgCgGAAQgFAAgEACg");
	this.shape_261.setTransform(97,211.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgCQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_262.setTransform(88.9,210.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAHBGIgJgRIgHgRIgFgSQgCgJAAgJIACgSIAEgRQAGgSALgQIAKAAIgKARIgGARQgDARAAASIABASIACASQAFARALARg");
	this.shape_263.setTransform(75,210.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgLAnQgGgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQACAEACACIAHACIAGAAIAHAAIAGgBQADgBACgDQABgDAAgDQAAgFgDgCQgEgDgFgCIgMgDIgMgDQgGgCgDgEQgEgEAAgHQAAgGADgEQACgEAEgDQAEgDAGgBIAKgCQAFABAGABQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgCIgFgBIgGABIgFABIgEADQgBACgBADQAAADACACIAHAEIAIADIAIABIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFAEQgFADgFAAIgMABIgLgBg");
	this.shape_264.setTransform(475.2,192.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgCgHgBgIQABgIACgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAJABAHADQAIADAEAGQAFAFACAHQACAIAAAIQAAAIgCAHQgCAIgFAFQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgEAEgBAGQgCAFAAAHQAAAGACAGQABAFAEAEQADAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgEACgFQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_265.setTransform(458.8,192.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_266.setTransform(403.7,192.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgFgCgIQgDgHAAgIQAAgIADgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAKABAGADQAIADAEAGQAFAFACAHQADAIAAAIQAAAIgDAHQgCAIgFAFQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFABAEAAQAFAAAFgBQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_267.setTransform(396.5,192.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgEgEAAgGIANAAQAAADACADIAGADIAFACIAGABQAGAAAFgCQAEgCADgEQADgEABgGQACgFAAgGIAAgFIgBAAQgDAHgHAEQgHACgGAAQgIAAgHgCQgGgDgFgGQgFgFgCgIQgCgGAAgHIACgPQACgHAEgGQAFgFAGgEQAHgFAJAAQAIABAGADQAGADAEAHIAAgMIAMAAIAABGQAAAKgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgIgpQgFACgDAEIgEAJIgBALIABALQABAEACAEQADAFAFACQADACAGABQAGgBAEgCQAFgCADgFQACgEABgEIACgLIgCgLQAAgEgDgFQgDgDgEgCQgEgDgGAAQgGAAgDACg");
	this.shape_268.setTransform(370.8,194.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgGAnIgchNIAOAAIAVBAIAAAAIAVhAIAOAAIgdBNg");
	this.shape_269.setTransform(351.3,192.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIgBIgKgBQgFAAgDgDQgEgDgBgEQgDgEAAgGQAAgHADgEQACgEADgCIAJgEIAJgCIAKgCIAIgBIAGgCQABgDAAgDQABgEgCgDIgEgEIgFgBIgGgBQgHAAgGADQgFADgBAIIgMAAQAAgGACgFQADgGAFgCQAEgDAGgCQAFgBAHgBIAJABQAGABAEADQAEACADAEQADAEAAAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAJQgDACgGAAQgFABgCgDgAAJACIgIABIgHABIgIACQgEACgCADQgCADAAAEIABAFIADAEIAFACIAGAAQAGAAAEgBQAEgCADgDQADgCABgDIABgGIAAgMQgCABgEABg");
	this.shape_270.setTransform(343.7,192.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgDgHABgIQgBgIADgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAJABAIADQAGADAFAGQAFAFADAHQABAIAAAIQAAAIgBAHQgDAIgFAFQgFAGgGADIgIACIgJAAgAgIgaQgFACgDADQgEAEgBAGQgCAFAAAHQAAAGACAGQABAFAEAEQADAEAFACQAEABAEAAQAFAAAEgBQAFgCADgEQAEgEABgFQACgGAAgGQAAgHgCgFQgBgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgEACg");
	this.shape_271.setTransform(310,192.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFALAAIAAAOQgIAAgFACQgGACgCAEQgEAEgBAGQgCAGABAGIAAAjg");
	this.shape_272.setTransform(304,192.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACAEADACIAGACIAGAAIAHAAIAGgBQADgBABgDQACgDAAgDQAAgFgDgCQgEgDgFgCIgMgDIgMgDQgFgCgFgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAFgBIAJgCQAGABAGABQAFABAEADQAFADACAEQADAFABAHIgNAAIgCgHIgFgDIgFgCIgFgBIgGABIgFABIgEADQgCACAAADQAAADADACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgEAEQgFADgGAAIgMABIgLgBg");
	this.shape_273.setTransform(288.7,192.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgHACgIQACgIAFgFQAEgGAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJABAGgGQAFgEABgJIANAAQgBAHgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIABgHgDg");
	this.shape_274.setTransform(264.6,192.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQABAEADACIAHACIAHAAIAGAAIAGgBQADgBACgDQACgDgBgDQAAgFgDgCQgEgDgFgCIgMgDIgMgDQgFgCgEgEQgEgEAAgHQAAgGADgEQACgEAEgDQAEgDAFgBIALgCQAFABAGABQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgEgDIgGgCIgFgBIgGABIgGABIgDADQgCACABADQAAADABACIAHAEIAIADIAIABIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFAEQgFADgFAAIgMABIgMgBg");
	this.shape_275.setTransform(237.5,192.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgDgHABgIQgBgIADgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAJABAIADQAGADAFAGQAFAFADAHQABAIAAAIQAAAIgBAHQgDAIgFAFQgFAGgGADIgIACIgJAAgAgIgaQgFACgDADQgEAEgBAGQgCAFAAAHQAAAGACAGQABAFAEAEQADAEAFACQAEABAEAAQAFAAAEgBQAFgCADgEQADgEADgFQABgGAAgGQAAgHgBgFQgDgGgDgEQgDgDgFgCQgEgCgFAAQgEAAgEACg");
	this.shape_276.setTransform(217,192.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AATA2IAAg1IgBgFIgDgGIgFgDIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAEAAAGIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_277.setTransform(167,191.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgCgHgBgIQABgIACgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAKABAGADQAIADAEAGQAFAFACAHQACAIABAIQgBAIgCAHQgCAIgFAFQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgEACgFQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_278.setTransform(145.3,192.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgMAnQgFgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACAEADACIAGACIAGAAIAHAAIAGgBQADgBABgDQACgDABgDQgBgFgEgCQgDgDgGgCIgLgDIgMgDQgGgCgEgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgCIgFgBIgGABIgGABIgDADQgCACAAADQABADACACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgEAEQgFADgGAAIgMABIgMgBg");
	this.shape_279.setTransform(112.9,192.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AATA2IAAg1IgBgFIgDgGIgFgDIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAEAAAGIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_280.setTransform(81.2,191.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgMAoQgFgCgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACAEQACACADACIAGADIAGABIAHgBIAGgCQADAAABgDQACgDABgDQgBgFgEgDQgDgCgGgCIgLgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFACgFQADgDAEgDQAFgDAEgBIAKgBQAHgBAFACQAFABAFACQAEAEACAEQADAFABAHIgNAAIgCgGIgEgFIgGgCIgFAAIgGAAIgGACIgDADQgCACAAADQABADACADIAFADIAIACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgGADgFACIgMABIgMgBg");
	this.shape_281.setTransform(485,175.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgFgCgDgDQgEgCgCgEQgBgEAAgGQAAgHABgEQADgEAEgDIAIgCIAKgDIAJgBIAIgCIAFgDQADgCAAgDQAAgFgCgCIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgHAEgGQACgEAEgEQAFgCAGgCQAFgCAHABIAKABQAFAAAEACQAEADADAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAKABIgJACIgIABIgIACQgDABgCADQgCADAAAFIABAGIAEADIAEACIAGABQAGgBADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgDAAg");
	this.shape_282.setTransform(477.4,175.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgCgHgBgJQABgHACgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAFgGADIgIADIgJABgAgJgaQgEACgDAEQgDADgCAGQgCAFAAAGQAAAIACAFQACAGADADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgGgEgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_283.setTransform(456.5,175.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_284.setTransform(450.4,175.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGACgIABIgKgBQgFgCgDgDQgEgCgBgEQgDgEAAgGQAAgHADgEQACgEADgDIAJgCIAJgDIAKgBIAIgCIAGgDQABgCAAgDQABgFgCgCIgEgEIgFgCIgGAAQgHAAgGADQgFADgBAJIgMAAQAAgHADgGQACgEAFgEQAEgCAGgCQAFgCAHABIAJABQAGAAAEACQAFADACAEQADAEAAAHIAAAnIAAAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAEgBIAAAKQgDACgGAAQgFgBgCgCgAAJABIgIACIgHABIgIACQgEABgCADQgCADAAAFIABAGIADADIAFACIAGABQAGgBAEgCQAEgBADgCQADgDACgEIAAgFIAAgMQgCABgEAAg");
	this.shape_285.setTransform(414.8,175.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgEgCgEgFQgDgEAAgGIANAAQABADACACIAEAFIAHACIAFAAQAHAAAEgCQAFgCACgEQADgEABgFQACgFgBgHIAAgFIAAAAQgDAHgHADQgGAEgHAAQgJAAgGgEQgHgDgEgFQgEgFgCgIQgCgGAAgIIABgNQACgIAEgGQAEgFAIgFQAGgDAJAAQAIgBAGAEQAGADADAGIAAgLIANAAIAABHQgBAJgCAHQgCAHgEAFQgJAJgSAAQgFABgGgCgAgIgpQgFADgDADIgEAJIgBALIABAKQABAFADAEQACAEAEADQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgKQgCgEgCgFQgCgEgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_286.setTransform(402,176.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_287.setTransform(393.7,175.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgDgHABgJQgBgHADgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAFgGADIgIADIgJABgAgJgaQgEACgDAEQgEADgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQADgDADgGQABgFAAgIQAAgGgBgFQgDgGgDgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_288.setTransform(385.3,175.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIABIgKgBQgEgCgEgDQgEgCgBgEQgCgEAAgGQAAgHACgEQACgEAEgDIAIgCIAKgDIAJgBIAIgCIAFgDQACgCABgDQAAgFgCgCIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgHADgGQADgEAEgEQAFgCAGgCQAGgCAGABIAKABQAFAAAEACQAFADACAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgCgCgAAKABIgJACIgIABIgIACQgDABgCADQgCADAAAFIABAGIAEADIAEACIAGABQAGgBADgCQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDAAg");
	this.shape_289.setTransform(373.8,175.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgMAoQgFgCgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACAEQACACADACIAGADIAGABIAHgBIAGgCQADAAABgDQACgDABgDQgBgFgEgDQgDgCgGgCIgLgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFACgFQADgDAEgDQAFgDAEgBIAKgBQAHgBAFACQAFABAFACQAEAEACAEQADAFABAHIgNAAIgCgGIgEgFIgGgCIgFAAIgGAAIgGACIgDADQgCACAAADQABADACADIAFADIAIACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgFADgGACIgMABIgMgBg");
	this.shape_290.setTransform(361.7,175.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgFAnIgdhNIAOAAIAVBAIAAAAIAVhAIAOAAIgdBNg");
	this.shape_291.setTransform(346.2,175.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgCgHAAgJQAAgHACgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAHAEQAHADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAFgHADIgHADIgJABgAgJgaQgEACgDAEQgEADgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgGgEgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_292.setTransform(338.1,175.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgFACIgGAFQgDADgBAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAHAAQAGAAAFACQAFABADADQAEACACAFQACAEAAAGIAAA4g");
	this.shape_293.setTransform(327.5,175.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgMAoQgFgCgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACAEQACACACACIAHADIAHABIAGgBIAGgCQADAAABgDQADgDAAgDQgBgFgEgDQgDgCgGgCIgLgCIgMgEQgFgBgFgEQgDgFAAgIQAAgFACgFQADgDAEgDQAFgDAEgBIAKgBQAHgBAFACQAGABAEACQAEAEACAEQADAFABAHIgNAAIgCgGIgEgFIgGgCIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACADIAFADIAIACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgFADgGACIgMABIgMgBg");
	this.shape_294.setTransform(305.1,175.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgRAmQgFgDgDgDQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAEAHABQAFgBAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_295.setTransform(293.9,175.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgkA3IAAhrIANAAIAAALIAEgFIAGgFQAHgCAHAAIAJABIAHACQAGADAFAGQAEAGADAHQACAHAAAIQAAAJgCAGQgDAIgEAFQgEAFgHADQgHAEgJAAIgFgBIgHgCIgGgEQgEgCgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAEIgBALIABALQABAEADAFQADAEAFACQAEADAGAAQAHAAAEgDQAFgCACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgFgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_296.setTransform(285.6,176.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgEACIgHAFQgCADgBAEIgCAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACACAFQABAEAAAGIAAA4g");
	this.shape_297.setTransform(274.6,175.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUBAIABAAIAVhAIANAAIgcBNg");
	this.shape_298.setTransform(248.9,175.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFAKAAIAAAOQgHAAgGACQgFACgCAEQgDAEgCAGQgCAGAAAGIAAAjg");
	this.shape_299.setTransform(243.2,175.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_300.setTransform(228,175.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgEgCgEgDQgDgCgDgEQgBgEAAgGQAAgHABgEQADgEAEgDIAIgCIAKgDIAJgBIAIgCIAFgDQACgCABgDQAAgFgCgCIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgHADgGQADgEAEgEQAFgCAGgCQAFgCAHABIAKABQAFAAAEACQAFADACAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgCgCgAAKABIgJACIgIABIgIACQgDABgCADQgCADAAAFIABAGIAEADIAEACIAGABQAGgBADgCQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDAAg");
	this.shape_301.setTransform(215.9,175.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgCgCgFQgEgEAAgGIANAAQAAADACACIAGAFIAFACIAGAAQAGAAAFgCQAEgCADgEQADgEABgFQACgFAAgHIAAgFIgBAAQgDAHgHADQgHAEgGAAQgIAAgHgEQgGgDgFgFQgFgFgCgIQgCgGABgIIABgNQACgIAEgGQAFgFAGgFQAHgDAJAAQAIgBAGAEQAGADAEAGIAAgLIAMAAIAABHQAAAJgCAHQgDAHgEAFQgJAJgSAAQgFABgFgCgAgIgpQgFADgDADIgEAJIgBALIABAKQABAFACAEQADAEAFADQAEACAFAAQAGAAAEgCQAFgDADgEQACgEABgFIACgLIgCgKQAAgEgDgFQgDgEgEgCQgEgCgGAAQgGAAgDACg");
	this.shape_302.setTransform(198.9,176.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_303.setTransform(190.6,175.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_304.setTransform(184.8,173.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGACgIABIgKgBQgFgCgDgDQgEgCgBgEQgDgEAAgGQAAgHADgEQACgEADgDIAJgCIAJgDIAKgBIAIgCIAGgDQABgCAAgDQABgFgCgCIgEgEIgFgCIgGAAQgHAAgGADQgFADgBAJIgMAAQAAgHACgGQADgEAFgEQAEgCAGgCQAFgCAHABIAJABQAGAAAEACQAFADACAEQADAEAAAHIAAAnIAAAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAEgBIAAAKQgDACgGAAQgFgBgCgCgAAJABIgIACIgHABIgIACQgEABgCADQgCADAAAFIABAGIADADIAFACIAGABQAGgBAEgCQAEgBADgCQADgDABgEIABgFIAAgMQgCABgEAAg");
	this.shape_305.setTransform(172.7,175.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgCgGgBgGIANAAQAAADACAEQABACAEACIAGADIAGABIAHgBIAGgCQADAAABgDQACgDAAgDQAAgFgDgDQgEgCgFgCIgMgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFADgFQACgDAEgDQAEgDAGgBIAKgBQAFgBAGACQAFABAEACQAFAEACAEQADAFAAAHIgMAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACADIAHADIAIACIAIADIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgGADgFACIgMABIgLgBg");
	this.shape_306.setTransform(156.2,175.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgCgHgBgJQABgHACgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAFgGADIgIADIgJABgAgJgaQgEACgDAEQgDADgCAGQgCAFAAAGQAAAIACAFQACAGADADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgGgEgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_307.setTransform(140.1,175.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_308.setTransform(131.7,175.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_309.setTransform(125.9,173.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgEACIgHAFQgCADgCAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAGgEQAGgEAHAAQAGAAAFACQAFABADADQADACADAFQABAEAAAGIAAA4g");
	this.shape_310.setTransform(117.9,175.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgDgHABgJQgBgHADgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAFgGADIgIADIgJABgAgJgaQgEACgDAEQgEADgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQADgDADgGQABgFAAgIQAAgGgBgFQgDgGgDgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_311.setTransform(107.2,175.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_312.setTransform(72.4,173.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgiA1IAAhqIAOAAIAABfIA4AAIAAALg");
	this.shape_313.setTransform(67.2,173.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgCgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_314.setTransform(128.4,115.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgLAnQgGgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQACADACADIAHACIAGAAIAHAAIAGgBQADgCACgCQABgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgGgCgDgEQgEgEAAgHQAAgGADgEQACgEAEgDQAEgDAGgBIAKgCQAFAAAGACQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgCIgFgBIgGABIgFABIgEADQgBACgBADQAAADACACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgFACgFABIgMABIgLgBg");
	this.shape_315.setTransform(120.6,115.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgBQAFgCADgEQACgDACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHgBQgIAAgFgCg");
	this.shape_316.setTransform(109.4,115.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgkA2IAAhpIANAAIAAAKIAEgGIAGgDQAHgEAHAAIAJABIAHADQAGADAFAGQAEAGADAHQACAHAAAJQAAAHgCAHQgDAIgEAFQgEAGgHACQgHADgJAAIgFAAIgHgCIgGgDQgEgDgCgEIAAAogAgLgnQgEACgDAEQgDAEgBAGIgBAKIABALQABAFADADQADAEAFADQAEADAGgBQAHABAEgDQAFgDACgEIAEgJIABgKQAAgGgBgFIgEgJQgDgFgFgBQgFgDgFAAQgGAAgFADg");
	this.shape_317.setTransform(101,116.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgCgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_318.setTransform(72.2,115.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgFAnIgdhNIAOAAIAVBAIAAAAIAVhAIANAAIgcBNg");
	this.shape_319.setTransform(64.4,115.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgCAEgCAGQgCAGABAGIAAAjg");
	this.shape_320.setTransform(58.6,115.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgCgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_321.setTransform(51.7,115.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgCgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_322.setTransform(31.2,115.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_323.setTransform(23,114.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgCgHgBgJQABgHACgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAJAAAHADQAIADAEAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgEAGgIADIgHACIgJABgAgJgaQgEACgDADQgEAEgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADAEAEABQAFADAEAAQAFAAAEgDQAFgBADgEQAEgDACgGQABgFAAgIQAAgGgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_324.setTransform(94.3,98);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgCgHgBgJQABgHACgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAJAAAIADQAGADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAGgGADIgIACIgJABgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAGQAAAIACAFQACAGADADQADAEAEABQAFADAEAAQAFAAAEgDQAFgBADgEQAEgDACgGQABgFAAgIQAAgGgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_325.setTransform(73.5,98);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgDgHABgJQgBgHADgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAJAAAIADQAGADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAGgGADIgIACIgJABgAgJgaQgEACgDADQgEAEgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADAEAEABQAFADAEAAQAFAAAEgDQAFgBADgEQADgDADgGQABgFAAgIQAAgGgBgFQgDgGgDgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_326.setTransform(47.8,98);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgDQAFgBADgDQACgDACgFQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_327.setTransform(34.6,98.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgEgDgEgEQgDgEAAgHIANAAQABAEACADIAEADIAGADIAGAAQAHAAAEgCQAFgCACgEQADgEABgFQABgGAAgGIAAgFIAAAAQgDAHgHAEQgGACgHAAQgJAAgGgCQgGgDgFgGQgEgFgDgHQgBgGAAgJIABgOQACgHAEgGQAEgGAIgDQAGgEAJgBQAHAAAHAEQAGADADAHIAAgLIANAAIAABGQAAAJgDAHQgCAHgEAFQgJAKgSAAIgLgCgAgIgpQgFADgDAEIgEAJIgBAKIABAKQABAFADAEQACAEAFADQAEADAFgBQAGABAFgDQAEgDADgEQADgEAAgFIACgKIgCgKQgBgGgCgDQgCgFgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_328.setTransform(186.5,82);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgDgHAAgJQAAgHADgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAKAAAGAEQAIADAEAGQAFAFACAHQADAIAAAHQAAAJgDAHQgCAHgFAGQgEAFgIADIgHADIgJAAgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAHACAGQACAFADAEQADADAEADQAFABAEAAQAFAAAFgBQAEgDADgDQADgEADgFQABgGAAgHQAAgGgBgFQgDgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_329.setTransform(161.6,80.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDADQgDADgBAEQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_330.setTransform(144.3,79.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgDgEAAgHIAMAAQAAAEACADIAGADIAFADIAGAAQAHAAAEgCQAEgCADgEQADgEABgFQABgGABgGIAAgFIgBAAQgDAHgHAEQgGACgHAAQgJAAgGgCQgHgDgEgGQgEgFgDgHQgCgGAAgJIACgOQACgHAEgGQAFgGAGgDQAHgEAJgBQAHAAAHAEQAGADAEAHIAAgLIALAAIAABGQAAAJgBAHQgDAHgEAFQgJAKgSAAIgKgCgAgJgpQgEADgDAEIgEAJIgBAKIABAKQABAFACAEQADAEAFADQADADAGgBQAGABAEgDQAFgDACgEQADgEACgFIABgKIgBgKQgCgGgCgDQgDgFgEgCQgEgCgGAAQgGAAgEACg");
	this.shape_331.setTransform(135.6,82);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFADQAFABAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_332.setTransform(124.3,80.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFADQAFABAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_333.setTransform(103.8,80.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDADQgDADgBAEQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_334.setTransform(95.5,79.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgMAAQAAgHACgFQADgEAEgEQAFgDAGgBQAGgCAGAAIAKACQAFAAAEADQAFACACAEQACAEABAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgCgCgAAKABIgJACIgHABIgJADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgBQAFgCADgCQADgDABgDIABgGIAAgMQgCABgDAAg");
	this.shape_335.setTransform(75.4,80.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgKA2QgGgBgFgDQgEgDgDgEQgEgEAAgHIANAAQABAEACADIAEADIAGADIAGAAQAGAAAFgCQAEgCADgEQADgEABgFQABgGAAgGIAAgFIAAAAQgDAHgHAEQgHACgGAAQgIAAgHgCQgGgDgFgGQgFgFgCgHQgBgGAAgJQgBgHACgHQACgHAEgGQAFgGAHgDQAGgEAJgBQAHAAAHAEQAGADADAHIAAgLIANAAIAABGQAAAJgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgIgpQgFADgDAEIgEAJIgBAKIABAKQABAFADAEQACAEAFADQAEADAFgBQAGABAEgDQAFgDADgEQACgEABgFIACgKIgCgKQAAgGgDgDQgDgFgEgCQgEgCgGAAQgFAAgEACg");
	this.shape_336.setTransform(58.4,82);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgLAnQgGgBgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACADQACAEACACIAHACIAGAAIAHAAIAGgBQADgCACgCQABgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgGgBgDgFQgEgEAAgHQAAgGADgEQACgFAEgCQAEgDAGgBIAKgCQAFAAAGACQAGABADACQAFADADAFQACAFAAAHIgMAAIgCgHIgFgEIgFgBIgFgBIgGABIgFABIgEADQgBACAAADQgBADACACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgFACgFABIgMABIgLgBg");
	this.shape_337.setTransform(47.2,80.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgGAFIgHAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgDgEQgBgEAAgGQAAgGABgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCABgEQAAgFgCgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHADgFQADgEAEgEQAFgDAGgBQAFgCAHAAIAKACQAFAAAEADQAFACACAEQACAEAAAHIAAAmIABAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgDgCgAAKABIgJACIgIABIgIADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgBQAFgCADgCQADgDABgDIACgGIAAgMQgDABgDAAg");
	this.shape_338.setTransform(18.3,80.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHAAQgIAAgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_339.setTransform(166.8,63);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgCgFgBgIIANAAQAAAEACAEQABACAEACIAGADIAGABIAHgBIAGgBQADgCABgCQACgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFADgFQACgEAEgCQAEgDAGgBIAKgBQAFAAAGABQAFABAEADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACACIAGAEIAJADIAIACIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgGAEgFABIgMAAIgLAAg");
	this.shape_340.setTransform(158.9,63);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGACgIAAIgKAAQgFgBgDgEQgDgCgCgEQgCgEAAgGQAAgGACgFQACgEADgCIAJgEIAJgCIAKgBIAIgCIAFgDQACgCAAgDQAAgEgBgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAJIgMAAQAAgIACgEQADgGAEgCQAFgEAGgBQAGgBAGAAIAKAAQAFABAEACQAFADACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFAAgCgCgAAKACIgJABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAAEgCQAEgCADgDQADgCABgEIABgFIAAgMQgCABgDABg");
	this.shape_341.setTransform(151.3,63);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHAAQgIAAgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_342.setTransform(143.2,63);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHAAQgIAAgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_343.setTransform(131.8,63);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHAAQgIAAgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_344.setTransform(114.9,63);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGACgIAAIgKAAQgFgBgDgEQgDgCgCgEQgCgEAAgGQAAgGACgFQACgEADgCIAJgEIAJgCIAKgBIAIgCIAFgDQACgCAAgDQAAgEgBgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAJIgMAAQAAgIACgEQADgGAFgCQAEgEAGgBQAGgBAGAAIAKAAQAFABAEACQAFADACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFAAgCgCgAAKACIgJABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAAEgCQAEgCADgDQADgCABgEIABgFIAAgMQgCABgDABg");
	this.shape_345.setTransform(102.3,63);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAEACAEQABACAEACIAGADIAGABIAHgBIAGgBQADgCABgCQACgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFACgFQADgEAEgCQAFgDAFgBIAKgBQAFAAAGABQAFABAEADQAFADACAEQADAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACACIAGAEIAIADIAJACIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgGAEgFABIgMAAIgLAAg");
	this.shape_346.setTransform(90.2,63);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgDQACgDACgFQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHAAQgIAAgFgBg");
	this.shape_347.setTransform(65.1,63.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgIAoIgHgCQgHgEgFgFQgFgGgCgHQgDgHABgIQgBgIADgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAJAAAIADQAGADAFAFQAFAGADAIQABAHAAAIQAAAIgBAHQgDAHgFAGQgFAFgGAEIgIACIgJAAgAgIgaQgFACgDADQgEAEgBAGQgCAFAAAHQAAAGACAGQABAGAEADQADADAFADQAEACAEAAQAFAAAEgCQAFgDADgDQAEgDABgGQACgGAAgGQAAgHgCgFQgBgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgEACg");
	this.shape_348.setTransform(56.7,63);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgkA2IAAhqIANAAIAAALIAEgFIAGgFQAHgCAHAAIAJAAIAHADQAGADAFAGQAEAFADAIQACAHAAAJQAAAHgCAHQgDAHgEAGQgEAFgHAEQgHACgJAAIgFAAIgHgCIgGgEQgEgCgCgDIAAAngAgLgnQgEACgDAEQgDAEgBAFIgBALIABALQABAEADAFQADAEAFACQAEACAGABQAHgBAEgCQAFgCACgEIAEgJIABgMQAAgFgBgFIgEgKQgDgDgFgCQgFgDgFAAQgGAAgFADg");
	this.shape_349.setTransform(48.2,64.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQgBgDgCgCQgBgDgDgBIgHgBQgGAAgDACIgHAFQgDADAAAEIgBAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABAEADQADACABAFQACAEAAAGIAAA4g");
	this.shape_350.setTransform(37.2,62.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgIAoIgHgCQgHgEgFgFQgFgGgCgHQgCgHgBgIQABgIACgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAKAAAGADQAIADAEAFQAFAGACAIQACAHABAIQgBAIgCAHQgCAHgFAGQgEAFgIAEIgHACIgJAAgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAGADADQADADAEADQAFACAEAAQAFAAAEgCQAFgDADgDQAEgDACgGQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_351.setTransform(26.5,63);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgIACgHQACgHAFgHQAEgFAHgDQAHgDAIAAQAHAAAGABIAKAFQAEADADAGQADAEABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFACAFABQAJAAAGgGQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGABgHAAQgIAAgHgCg");
	this.shape_352.setTransform(18.2,63);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgCQgFgBgDgDQgEgCgCgEQgBgEAAgGQAAgGABgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQADgCAAgEQAAgFgCgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHAEgFQACgFAEgDQAFgDAGgBQAFgBAHAAIAJABQAGAAAEACQAEADADAEQADAEgBAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDACgDIABgGIAAgMQgDABgEAAg");
	this.shape_353.setTransform(179.5,45.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_354.setTransform(171.3,45.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgFAFQgFAFgBAJIAAAwIgLAAIAAgyIgBgHQgBgDgBgCQgCgDgDgBIgHgBQgFAAgFACIgGAFQgCADgCAEIgBAFIAAAwIgMAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACACAFQADAEAAAGIAAA4g");
	this.shape_355.setTransform(157.6,45.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_356.setTransform(147.3,45.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAApQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_357.setTransform(139,44.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_358.setTransform(130.9,45.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAFAGQAFAFACAHQACAIAAAHQAAAJgCAHQgCAHgFAGQgFAFgHADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgEACgFQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_359.setTransform(105.9,45.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgQAAIAegoIgbglIAQAAIASAbIATgbIAPAAIgbAkIAfApg");
	this.shape_360.setTransform(97.8,45.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIAAIgKgCQgFgBgDgDQgDgCgCgEQgCgEgBgGQABgGACgFQACgEADgDIAJgCIAJgDIAKgCIAIgBIAFgCQACgCAAgEQABgFgCgCIgEgEIgGgBIgFgBQgHAAgGADQgFADgBAIIgMAAQAAgHACgFQADgFAFgDQAEgDAGgBQAFgBAHAAIAKABQAFAAAEACQAEADADAEQADAEAAAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgCgDgAAKABIgJACIgHABIgIADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDABgDIABgGIAAgMQgCABgDAAg");
	this.shape_361.setTransform(90,45.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_362.setTransform(77.7,45.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAApQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_363.setTransform(69.5,44.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_364.setTransform(62.8,44.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgDgHABgJQgBgHADgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFACAHQACAIAAAHQAAAJgCAHQgCAHgFAGQgFAFgGADIgIADIgJABgAgJgaQgEACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQADgEADgFQABgFAAgIQAAgGgBgFQgDgFgDgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_365.setTransform(47.8,45.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_366.setTransform(18.2,45.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_367.setTransform(212.1,28);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_368.setTransform(203.9,26.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_369.setTransform(197.2,26.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgMAoQgFgCgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACADADADIAGACIAGABIAHgBIAGgBQADgBABgDQACgDABgDQgBgFgEgCQgDgDgGgCIgLgCIgMgEQgGgCgEgDQgDgFAAgHQAAgGACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgCACAAADQABADACACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgEADQgFADgGABIgMAAIgMAAg");
	this.shape_370.setTransform(187.1,28);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_371.setTransform(179.4,28);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_372.setTransform(171.2,26.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgFgCgIQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFACAFABQAJAAAGgGQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGABgHAAQgIABgHgDg");
	this.shape_373.setTransform(163,28);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgHAFIgGAEQgGADgIgBIgKAAQgEgBgEgDQgDgDgDgEQgBgEAAgGQAAgHABgEQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgBABgEQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAIIgNAAQAAgHADgEQADgGAEgCQAFgDAGgCQAFgBAHgBIAKABQAFABAEADQAFACACAEQACAEAAAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgCgDgAAKACIgJABIgIABIgIACQgDACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCABgDIACgGIAAgMQgDABgDABg");
	this.shape_374.setTransform(155.1,28);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_375.setTransform(147,28);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_376.setTransform(130.1,28);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACADADADIAGACIAGABIAHgBIAGgBQADgBABgDQACgDAAgDQAAgFgEgCQgDgDgGgCIgLgCIgMgEQgFgCgFgDQgDgFAAgHQAAgGACgFQADgEAEgCQAFgDAFgBIAJgCQAGABAGABQAFABAEADQAFADACAEQADAFABAHIgNAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgCACAAADQAAADADACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgEADQgFADgGABIgMAAIgLAAg");
	this.shape_377.setTransform(122.2,28);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_378.setTransform(116.8,26.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgEQACgDACgEQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgBg");
	this.shape_379.setTransform(111,28.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgkA2IAAhqIANAAIAAALIAEgFIAGgFQAHgDAHAAIAJABIAHADQAGAEAFAFQAEAFADAIQACAHAAAJQAAAHgCAHQgDAHgEAGQgEAGgHADQgHACgJAAIgFAAIgHgCIgGgEQgEgCgCgDIAAAngAgLgnQgEACgDAEQgDAEgBAFIgBALIABALQABAFADAEQADADAFADQAEACAGABQAHgBAEgCQAFgDACgDIAEgJIABgLQAAgGgBgFIgEgKQgDgDgFgCQgFgDgFAAQgGAAgFADg");
	this.shape_380.setTransform(102.7,29.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_381.setTransform(83.6,26.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_382.setTransform(73.9,28);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_383.setTransform(65.6,26.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_384.setTransform(59,26.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_385.setTransform(40.4,28);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_386.setTransform(32.1,26.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAYA1IgYhZIgYBZIgPAAIgbhpIAOAAIAVBXIAYhXIAOAAIAZBXIAVhXIAPAAIgdBpg");
	this.shape_387.setTransform(21.1,26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164,p:{x:105.7,y:40}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153,p:{x:184.1,y:39.9}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146,p:{x:232.7,y:41.3}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143,p:{x:256.7,y:41.4}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{x:282.9,y:41.3}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137,p:{x:310.9,y:41.3}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132,p:{x:351.9,y:41.3}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129,p:{x:372.8,y:41.4}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126,p:{x:397.9,y:40}},{t:this.shape_125,p:{x:403.7,y:41.3}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119,p:{x:457.4,y:40}},{t:this.shape_118,p:{x:462.4,y:40}},{t:this.shape_117,p:{x:468.2,y:41.3}},{t:this.shape_116,p:{x:60.6,y:58.8}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112,p:{x:88.1,y:57.5}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:135.5,y:57.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103,p:{x:159.9,y:57.5}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:183.8,y:57.4}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:205.6,y:58.8}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92,p:{x:246.8,y:57.5}},{t:this.shape_91,p:{x:252.7,y:57.5}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84,p:{x:316.4,y:57.5}},{t:this.shape_83,p:{x:324.8,y:60.5}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{x:379.2,y:57.8}},{t:this.shape_75,p:{x:383.3,y:57.5}},{t:this.shape_74,p:{x:391.4,y:58.8}},{t:this.shape_73},{t:this.shape_72,p:{x:407.7,y:57.5}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:456.4,y:57.5}},{t:this.shape_65,p:{x:462.2,y:58.8}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:83.7,y:76.3}},{t:this.shape_59},{t:this.shape_58,p:{x:98.9,y:76.3}},{t:this.shape_57,p:{x:104.6,y:76.4}},{t:this.shape_56},{t:this.shape_55,p:{x:122.2,y:75}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:149.6,y:76.5}},{t:this.shape_51,p:{x:155.4,y:75}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:216.4,y:75}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:259.1,y:76.3}},{t:this.shape_38,p:{x:269.6,y:75.3}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:296.6,y:76.4}},{t:this.shape_34},{t:this.shape_33,p:{x:310.3,y:75}},{t:this.shape_32,p:{x:313.6,y:75}},{t:this.shape_31,p:{x:325.8,y:76.3}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:357.6,y:75}},{t:this.shape_27,p:{x:364.8,y:76.3}},{t:this.shape_26},{t:this.shape_25,p:{x:379,y:76.3}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:406.2,y:74.9}},{t:this.shape_21},{t:this.shape_20,p:{x:428.9,y:75}},{t:this.shape_19,p:{x:437.6,y:76.4}},{t:this.shape_18,p:{x:445.7,y:76.3}},{t:this.shape_17,p:{x:454.1,y:75}},{t:this.shape_16,p:{x:461.7,y:76.3}},{t:this.shape_15,p:{x:465.3,y:75}},{t:this.shape_14,p:{x:469.2,y:75.3}},{t:this.shape_13,p:{x:475.8,y:76.4}},{t:this.shape_12,p:{x:481.8,y:79.5}}]},68).to({state:[]},334).to({state:[{t:this.shape_226},{t:this.shape_225},{t:this.shape_224,p:{x:149.8}},{t:this.shape_117,p:{x:157.9,y:175.2}},{t:this.shape_223},{t:this.shape_65,p:{x:182.6,y:175.2}},{t:this.shape_222,p:{x:190.8}},{t:this.shape_221,p:{x:198.9}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_60,p:{x:220.5,y:175.2}},{t:this.shape_118,p:{x:230.5,y:173.9}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216,p:{x:254,y:174.2}},{t:this.shape_215,p:{x:263.6,y:175.2}},{t:this.shape_214,p:{x:269.5}},{t:this.shape_213},{t:this.shape_212,p:{x:283.1,y:174.2}},{t:this.shape_211,p:{x:287.7,y:179.5}},{t:this.shape_210,p:{x:296.1,y:174.2}},{t:this.shape_209},{t:this.shape_208,p:{x:311}},{t:this.shape_55,p:{x:320.8,y:173.9}},{t:this.shape_39,p:{x:326.6,y:175.2}},{t:this.shape_207},{t:this.shape_15,p:{x:339.9,y:173.9}},{t:this.shape_84,p:{x:345.7,y:173.9}},{t:this.shape_206,p:{x:354.5}},{t:this.shape_205},{t:this.shape_22,p:{x:373.5,y:173.8}},{t:this.shape_204,p:{x:381.9,y:174.2}},{t:this.shape_203},{t:this.shape_202,p:{x:396.8}},{t:this.shape_201},{t:this.shape_200,p:{x:417.1}},{t:this.shape_33,p:{x:422.7,y:173.9}},{t:this.shape_32,p:{x:426,y:173.9}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_74,p:{x:98.4,y:192.7}},{t:this.shape_28,p:{x:109.4,y:191.4}},{t:this.shape_146,p:{x:116.6,y:192.7}},{t:this.shape_197},{t:this.shape_25,p:{x:130.8,y:192.7}},{t:this.shape_196,p:{x:139}},{t:this.shape_112,p:{x:148.8,y:191.4}},{t:this.shape_195},{t:this.shape_194,p:{x:166.2}},{t:this.shape_193,p:{x:171.8,y:191.4}},{t:this.shape_192,p:{x:177.5}},{t:this.shape_191,p:{x:185.5}},{t:this.shape_190},{t:this.shape_16,p:{x:197.2,y:192.7}},{t:this.shape_106,p:{x:200.8,y:191.4}},{t:this.shape_189},{t:this.shape_188},{t:this.shape_103,p:{x:220.2,y:191.4}},{t:this.shape_72,p:{x:223.5,y:191.4}},{t:this.shape_83,p:{x:228.9,y:194.4}},{t:this.shape_18,p:{x:241,y:192.7}},{t:this.shape_187,p:{x:249.2}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184,p:{x:272}},{t:this.shape_92,p:{x:276.2,y:191.4}},{t:this.shape_57,p:{x:281.6,y:192.8}},{t:this.shape_183,p:{x:289.4}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180,p:{x:320.6}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_27,p:{x:346.8,y:192.7}},{t:this.shape_177,p:{x:352.6}},{t:this.shape_20,p:{x:360.8,y:191.4}},{t:this.shape_143,p:{x:375.2,y:192.8}},{t:this.shape_75,p:{x:382.6,y:191.4}},{t:this.shape_176,p:{x:386.4}},{t:this.shape_175,p:{x:393.1}},{t:this.shape_174,p:{x:403.6}},{t:this.shape_173,p:{x:410.2}},{t:this.shape_172,p:{x:418.5}},{t:this.shape_171},{t:this.shape_170,p:{x:439.3}},{t:this.shape_169,p:{x:445.7,y:191.7}},{t:this.shape_168},{t:this.shape_66,p:{x:457.3,y:191.4}},{t:this.shape_17,p:{x:463.2,y:191.4}},{t:this.shape_167,p:{x:471.9}},{t:this.shape_12,p:{x:477.9,y:195.9}}]},153).to({state:[]},184).to({state:[{t:this.shape_313},{t:this.shape_312},{t:this.shape_119,p:{x:78.5,y:173.9}},{t:this.shape_224,p:{x:85.9}},{t:this.shape_20,p:{x:98.2,y:173.9}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_222,p:{x:148.5}},{t:this.shape_306},{t:this.shape_153,p:{x:166.4,y:173.8}},{t:this.shape_305},{t:this.shape_51,p:{x:178.2,y:173.9}},{t:this.shape_44,p:{x:181.5,y:173.9}},{t:this.shape_304},{t:this.shape_303,p:{x:190.6,y:175.2}},{t:this.shape_302},{t:this.shape_211,p:{x:205.4,y:179.5}},{t:this.shape_301},{t:this.shape_300,p:{x:228,y:175.2}},{t:this.shape_214,p:{x:236.3}},{t:this.shape_299,p:{x:243.2,y:175.2}},{t:this.shape_298},{t:this.shape_208,p:{x:256.8}},{t:this.shape_164,p:{x:266.5,y:173.9}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_33,p:{x:299.7,y:173.9}},{t:this.shape_294},{t:this.shape_206,p:{x:313}},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_202,p:{x:354}},{t:this.shape_290},{t:this.shape_289},{t:this.shape_32,p:{x:379.3,y:173.9}},{t:this.shape_288},{t:this.shape_287,p:{x:393.7,y:175.2}},{t:this.shape_286},{t:this.shape_285},{t:this.shape_140,p:{x:427,y:175.2}},{t:this.shape_200,p:{x:435.2}},{t:this.shape_221,p:{x:443.3}},{t:this.shape_284},{t:this.shape_283},{t:this.shape_137,p:{x:464.9,y:175.2}},{t:this.shape_282},{t:this.shape_281},{t:this.shape_184,p:{x:74.5}},{t:this.shape_280},{t:this.shape_196,p:{x:89.4}},{t:this.shape_106,p:{x:99.2,y:191.4}},{t:this.shape_132,p:{x:105,y:192.7}},{t:this.shape_279},{t:this.shape_92,p:{x:118.3,y:191.4}},{t:this.shape_17,p:{x:124.1,y:191.4}},{t:this.shape_194,p:{x:132.9}},{t:this.shape_278},{t:this.shape_100,p:{x:151.9,y:191.3}},{t:this.shape_176,p:{x:160.3}},{t:this.shape_277},{t:this.shape_192,p:{x:175.2}},{t:this.shape_125,p:{x:187.5,y:192.7}},{t:this.shape_187,p:{x:195.7}},{t:this.shape_170,p:{x:203.8}},{t:this.shape_58,p:{x:210.9,y:192.7}},{t:this.shape_276},{t:this.shape_117,p:{x:225.4,y:192.7}},{t:this.shape_275},{t:this.shape_143,p:{x:246.9,y:192.8}},{t:this.shape_75,p:{x:254.2,y:191.4}},{t:this.shape_174,p:{x:258.1}},{t:this.shape_274},{t:this.shape_175,p:{x:272.8}},{t:this.shape_183,p:{x:281}},{t:this.shape_273},{t:this.shape_22,p:{x:298.9,y:191.3}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_74,p:{x:320.7,y:192.7}},{t:this.shape_173,p:{x:335.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_66,p:{x:356.7,y:191.4}},{t:this.shape_65,p:{x:362.5,y:192.7}},{t:this.shape_268},{t:this.shape_180,p:{x:385.8}},{t:this.shape_267},{t:this.shape_266,p:{x:403.7,y:192.7}},{t:this.shape_177,p:{x:409.6}},{t:this.shape_172,p:{x:421.8}},{t:this.shape_72,p:{x:427.4,y:191.4}},{t:this.shape_167,p:{x:433.1}},{t:this.shape_191,p:{x:441.1}},{t:this.shape_169,p:{x:447.3,y:191.7}},{t:this.shape_16,p:{x:452.8,y:192.7}},{t:this.shape_265},{t:this.shape_60,p:{x:467.3,y:192.7}},{t:this.shape_264},{t:this.shape_263},{t:this.shape_39,p:{x:80.7,y:210.2}},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_216,p:{x:111.7,y:209.2}},{t:this.shape_126,p:{x:115.9,y:208.9}},{t:this.shape_57,p:{x:121.3,y:210.3}},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255,p:{x:164.6,y:210.2}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_212,p:{x:200.5,y:209.2}},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_129,p:{x:235.9,y:210.3}},{t:this.shape_118,p:{x:241.3,y:208.9}},{t:this.shape_25,p:{x:247.1,y:210.2}},{t:this.shape_247},{t:this.shape_97,p:{x:270.4,y:210.2}},{t:this.shape_246},{t:this.shape_27,p:{x:288.3,y:210.2}},{t:this.shape_245},{t:this.shape_244},{t:this.shape_215,p:{x:314,y:210.2}},{t:this.shape_243},{t:this.shape_210,p:{x:326.6,y:209.2}},{t:this.shape_242},{t:this.shape_18,p:{x:341.8,y:210.2}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_55,p:{x:388.1,y:208.9}},{t:this.shape_204,p:{x:391.9,y:209.2}},{t:this.shape_15,p:{x:396.1,y:208.9}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_12,p:{x:476.4,y:213.4}}]},23).to({state:[]},325).to({state:[{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_303,p:{x:48.5,y:27.9}},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_74,p:{x:91.7,y:27.9}},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_116,p:{x:141.1,y:27.9}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_300,p:{x:26.3,y:45.4}},{t:this.shape_91,p:{x:34.7,y:44.1}},{t:this.shape_365},{t:this.shape_22,p:{x:54.4,y:44}},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_287,p:{x:114.4,y:45.4}},{t:this.shape_211,p:{x:120.6,y:49.7}},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_112,p:{x:165.6,y:44.1}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_193,p:{x:185,y:44.1}},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_140,p:{x:73.4,y:62.9}},{t:this.shape_84,p:{x:81.8,y:61.6}},{t:this.shape_346},{t:this.shape_345},{t:this.shape_299,p:{x:109.1,y:62.9}},{t:this.shape_344},{t:this.shape_266,p:{x:126,y:62.9}},{t:this.shape_343},{t:this.shape_32,p:{x:137.4,y:61.6}},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_20,p:{x:174.9,y:61.6}},{t:this.shape_338},{t:this.shape_137,p:{x:26.3,y:80.4}},{t:this.shape_17,p:{x:34.7,y:79.1}},{t:this.shape_337},{t:this.shape_106,p:{x:52.6,y:79.1}},{t:this.shape_336},{t:this.shape_132,p:{x:67,y:80.4}},{t:this.shape_335},{t:this.shape_103,p:{x:80.9,y:79.1}},{t:this.shape_76,p:{x:88.9,y:79.4}},{t:this.shape_334},{t:this.shape_333},{t:this.shape_125,p:{x:116,y:80.4}},{t:this.shape_332},{t:this.shape_92,p:{x:129.9,y:79.1}},{t:this.shape_331},{t:this.shape_330},{t:this.shape_28,p:{x:153.1,y:79.1}},{t:this.shape_329},{t:this.shape_16,p:{x:168.8,y:80.4}},{t:this.shape_75,p:{x:172.5,y:79.1}},{t:this.shape_117,p:{x:178.3,y:80.4}},{t:this.shape_328},{t:this.shape_65,p:{x:18.3,y:97.9}},{t:this.shape_19,p:{x:26.5,y:98}},{t:this.shape_327},{t:this.shape_255,p:{x:41.7,y:97.9}},{t:this.shape_326},{t:this.shape_60,p:{x:56.2,y:97.9}},{t:this.shape_38,p:{x:66.7,y:96.9}},{t:this.shape_325},{t:this.shape_35,p:{x:86,y:98}},{t:this.shape_324},{t:this.shape_39,p:{x:102.8,y:97.9}},{t:this.shape_14,p:{x:109.1,y:96.9}},{t:this.shape_15,p:{x:113.3,y:96.6}},{t:this.shape_25,p:{x:119.1,y:97.9}},{t:this.shape_52,p:{x:127.4,y:98.1}},{t:this.shape_13,p:{x:135.6,y:98}},{t:this.shape_169,p:{x:16.3,y:114.4}},{t:this.shape_323},{t:this.shape_322},{t:this.shape_18,p:{x:43.5,y:115.4}},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_66,p:{x:82,y:114.1}},{t:this.shape_31,p:{x:90,y:115.4}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_72,p:{x:115.2,y:114.1}},{t:this.shape_315},{t:this.shape_314},{t:this.shape_12,p:{x:134.4,y:118.6}}]},114).to({state:[]},237).wait(237));

	// text - labels
	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(1.5,1,1).p("AUmC9IAABwMgpLAAAIAApZ");
	this.shape_388.setTransform(168.6,331.7,1,1,0,0,0,0,24.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIADAAQAFAAACgCQADgCABgDIAFgNIgehMIAOAAIAWA+IAAAAIAWg+IAOAAIgiBXIgEAJIgEAHIgHADIgHABg");
	this.shape_389.setTransform(203.1,151.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_390.setTransform(194.7,149);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFADAHQACAIgBAHQABAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_391.setTransform(186.2,150.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_392.setTransform(177.7,149);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_393.setTransform(167.2,148.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_394.setTransform(163.9,148.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_395.setTransform(158.3,150.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgUA0IgIgGIgHgGQgGgIgDgKQgDgKAAgMQAAgLADgJIAFgLIAFgHQAGgIAKgFQAEgCAGgBIALgBQAIAAAHACQAIADAGAEQAGAEADAHQAEAGACAJIgPAAQgCgMgIgFQgEgEgFgBQgFgBgFAAQgJAAgHADQgHAEgEAGQgEAGgCAIQgDAIAAAIQAAAIADAJQACAHAEAHQAEAGAHADQAHAEAJAAQAGAAAGgCQAGgDADgDQAEgFADgFQACgHAAgGIAPAAQgCAUgMAMQgMALgUAAQgMAAgKgEg");
	this.shape_396.setTransform(148.9,148.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_397.setTransform(356.5,211);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgGgBgHIANAAQAAAFACADQABACADACIAHADIAHABIAGgBIAGgCQADgBACgCQABgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgFgBgEgEQgEgFAAgIQAAgFADgFQACgEAEgCQAEgDAFgBQAFgCAGABQAFgBAGACQAGABADACQAFADADAFQACAFAAAHIgMAAIgCgGIgFgFIgFgCIgFAAIgGAAIgGACIgDADQgCACABADQAAADABADIAHADIAIADIAIACIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgFAEgFABIgMABIgMgBg");
	this.shape_398.setTransform(348.6,211);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgkA3IAAhrIANAAIAAALIAEgFIAGgFQAHgCAHAAIAJAAIAHADQAGADAFAGQAEAGADAHQACAHAAAIQAAAIgCAHQgDAIgEAFQgEAGgHADQgHADgJAAIgFgBIgHgCIgGgEQgEgCgCgDIAAAogAgLgoQgEADgDAEQgDAFgBAEIgBALIABALQABAFADAEQADAEAFACQAEADAGAAQAHAAAEgDQAFgCACgEIAEgJIABgMQAAgFgBgFIgEgKQgDgDgFgDQgFgCgFAAQgGAAgFACg");
	this.shape_399.setTransform(340.7,212.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgEgBgEgEQgEgCgCgEQgCgEABgGQgBgGACgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAGgDQACgCAAgDQgBgEgBgDIgEgEIgFgCIgFAAQgJAAgFADQgGADAAAJIgNAAQAAgIAEgFQACgEAEgDQAFgEAGgBQAGgCAGABIAJABQAGAAAEACQAEADADAEQADAEgBAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAJACIgIABIgIABIgIACQgDABgCAEQgCADAAAEIABAGIADADIAFACIAGABQAGAAADgDQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEABg");
	this.shape_400.setTransform(332.2,211);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_401.setTransform(323.8,210.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIADAAQAEAAADgCQADgCABgDIAGgNIgghMIAPAAIAWA+IAAAAIAWg+IAOAAIgiBXIgEAJIgEAHIgHADIgHABg");
	this.shape_402.setTransform(315.9,212.5);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgPA1QgHgCgHgEIgFgFIgEgHQgEgHAAgKIAOAAQAAAHACAFQADAFAEADQAFADAFACQAGABAEAAIAKgBIAJgDQAEgCADgEQACgEAAgGQAAgFgDgDQgDgEgFgCQgEgCgHgCIgMgCIgMgEIgLgDQgFgDgCgFQgDgFAAgIIAAgHIADgHQADgGAGgDQAFgEAHgCQAHgCAHAAQAHAAAIACQAGACAGAEQAFAEAEAGQACAHAAAJIgNAAQgBgMgHgFQgHgFgKAAIgJAAQgFACgDACQgEACgCADQgCAEAAAFQAAAFADADQAEADAEACIAMADIALADIAMAEQAGACAGACQAFAEACAFQADAFAAAIQAAAIgEAHQgDAGgHAEQgFAEgIABQgHACgIAAQgIAAgIgDg");
	this.shape_403.setTransform(307.3,209.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_404.setTransform(203.5,210.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgCgHgBgJQABgHACgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAJAAAHADQAHADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAGgHADIgHACIgJABgAgJgaQgEACgDAEQgDADgCAGQgCAFAAAGQAAAIACAFQACAGADADQADAEAEABQAFADAEAAQAFAAAEgDQAFgBADgEQAEgDACgGQABgFAAgIQAAgGgBgFQgCgGgEgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_405.setTransform(195,211);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgQAAIAegoIgbglIAQAAIASAbIATgbIAPAAIgbAkIAfApg");
	this.shape_406.setTransform(186.9,211);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AAiA1IgMgfIgsAAIgMAfIgPAAIAqhqIAPAAIAqBqgAgSAJIAkAAIgSgwg");
	this.shape_407.setTransform(178.1,209.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFADQAFABAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_408.setTransform(116.7,132.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_409.setTransform(110.1,131.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_410.setTransform(106.2,130.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_411.setTransform(102.6,132.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_412.setTransform(95,130.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_413.setTransform(86.6,132.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFADQAFABAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_414.setTransform(78.5,132.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgrA2IAAhqIAlAAQALAAAKACQAJADAHAHQAGAGAEAKQADAJAAAOQAAAMgDAKIgEAKIgFAIQgGAHgKAEQgKADgMABgAgdApIAYAAIAFAAIAIgCIAIgEQAEgCADgFQADgFACgHQACgGAAgKQAAgJgCgIQgCgHgEgGQgEgFgHgDQgHgCgJgBIgYAAg");
	this.shape_415.setTransform(69.4,130.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_416.setTransform(182.3,358.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgGgCgHQgDgHAAgIQAAgIADgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAKABAGADQAIADAEAFQAFAGADAIQACAHAAAIQAAAIgCAHQgDAHgFAGQgEAGgIADIgHACIgJAAgAgIgaQgFACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAFACQAEACAEAAQAFAAAFgCQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_417.setTransform(173.8,358.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_418.setTransform(167.8,358.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgHIAAgyIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgEQACgDACgEQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgBg");
	this.shape_419.setTransform(160.7,358.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_420.setTransform(152.6,358.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AAbA1Ig3hUIAAAAIAABUIgOAAIAAhpIAPAAIA4BVIAAAAIAAhVIAOAAIAABpg");
	this.shape_421.setTransform(143.1,357.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(1.5,1,1).p("AAAglIAABL");
	this.shape_422.setTransform(162.1,341.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").ss(1,1,1).p("A0VlxIC6lQAw8BJIB4hhIJUnoAmhJcIEeoTAPMLCIFKpi");
	this.shape_423.setTransform(201.8,213.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQABADADADIAHACIAHAAIAGAAIAGgBQADgCACgCQACgCAAgEQAAgFgFgDQgDgCgGgBIgLgEIgMgDQgFgCgEgEQgEgEAAgHQAAgGADgEQACgEAEgDQAEgDAFgBIAKgCQAHAAAFACQAGABAEADQAEADADAEQACAFAAAHIgMAAIgCgHIgEgDIgGgCIgFgBIgGABIgGABIgDADQgCACABADQAAADABACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgEACgGABIgMABIgMgBg");
	this.shape_424.setTransform(146.5,179.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgBQAFgCADgEQACgDACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHgBQgIAAgFgCg");
	this.shape_425.setTransform(138.6,179.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgBQAFgCADgEQACgDACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHgBQgIAAgFgCg");
	this.shape_426.setTransform(127,179.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQgBgDgCgCQgBgDgDgBIgHgBQgGAAgDACIgHAFQgCADgBAEIgBAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAIAAQAGAAAEACQAFABAEADQACACACAFQACAEAAAGIAAA4g");
	this.shape_427.setTransform(116.5,179.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_428.setTransform(104.3,178.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgPA2QgHgCgHgFIgFgGIgFgGQgDgHAAgJIANAAQABAGACAFQADAFAEADQAEADAGABQAFACAGAAIAKgBIAIgDQAEgCACgEQADgDAAgHQAAgFgDgEQgDgDgFgCQgEgCgHgCIgLgDIgNgCIgLgFQgFgCgDgGQgDgEAAgIIABgIIACgGQAEgGAFgEQAGgEAHgBQAHgCAHAAQAIAAAGACQAIACAFAEQAFAEADAHQAEAGAAAJIgOAAQgBgMgHgFQgIgFgKAAIgJABQgEABgDACQgDACgCAEQgCADAAAFQAAAFACADQAEADAFACIAKAEIAMACIANADQAFACAFADQAFAEADAFQADAFAAAIQAAAJgDAGQgEAGgGADQgHAEgHACQgIACgGAAQgIAAgJgCg");
	this.shape_429.setTransform(97.2,178);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgHQgDgIAAgJQAAgIADgHQADgIAFgFQAFgGAIgDQAHgDAIAAQAKAAAHAEIAHAEIAFAGQAFAHACAIQACAIgBAIIg3AAIACAJIAEAGQAEAFAIAAQAHAAAFgDQAEgEABgDIATAAQgCAHgEAFQgDAFgFADQgJAGgNAAQgIAAgIgDgAgHgWIgGAEIgDAGIgBAFIAiAAQgBgIgEgFIgFgDIgHgBQgEAAgDACg");
	this.shape_430.setTransform(381.7,225);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AgMAnQgGgBgFgDQgFgDgDgFQgEgGAAgHIAUAAQAAADACACIADAFIAGACIAFABIAEgBIAFgCIADgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgFgHgCIgQgFIgKgDIgHgDQgEgCgCgDQgCgEAAgFQAAgIADgEQADgFAFgDQAEgDAGgBIAMgBIAMABQAGABAEADQAFADADAFQADAFABAHIgUAAQgBgGgEgCQgEgDgFAAIgEABIgEABIgDACIgBAEQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAIAGADIAHACIAIACIAJADIAIAEQAEABACAEQACADAAAGQAAAHgDAGQgDAFgFADQgFADgGABIgNACQgGAAgHgCg");
	this.shape_431.setTransform(373.3,225);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgmA1IAAhnIAUAAIAAAKQAEgHAGgDQAGgCAGAAQAJAAAHADQAHAEAEAFQAEAGACAHQACAIAAAIQAAAIgCAGQgCAIgEAFQgEAGgHADIgHACIgHABQgHAAgGgDQgGgDgEgFIAAAkgAgIgiQgEACgCADIgDAIIgBAKIABAJIADAHQACADAEACQAEACAEAAQAFAAAEgCQADgCACgDQACgEACgDIAAgJIgBgJIgDgIQgCgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_432.setTransform(364.9,226.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgVAnQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAgHACgEQADgFADgCQAEgCAFgBIAJgCIAKgBIAHgBQAEgBACgCQACgCAAgDIgBgGIgDgDIgFgBIgFgBQgFAAgEADQgEADAAAGIgWAAQABgHADgFQADgFAGgDQAFgDAGgCIAMgBIAMABQAGABAFACQAFADADAEQADAEAAAHIAAAnIABALQAAAEACADIgWAAIgBgEIAAgEQgGAFgGADQgGACgIAAQgFAAgFgCgAAKADIgEABIgFABIgEAAIgFACIgEACIgDADIgBAFIABAEIADAEIAEABIAFABQAGAAADgDQAEgCABgDIACgFIABgFIAAgIg");
	this.shape_433.setTransform(355.8,225);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAPAoIAAgrIgBgIIgCgGQgCgDgCgBQgDgBgDAAQgJAAgDAFQgCADgBAEIgBAKIAAAoIgVAAIAAhNIAUAAIAAALIABAAQADgHAHgDQAGgDAGAAQAIAAAGACQAFADADAEQAEAEABAGQABAGABAHIAAAvg");
	this.shape_434.setTransform(347.2,224.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AgZA0IgGAAIAAgSIAGABIAGAAQAEgBACgCQACgDAAgEIgBgFIgbhHIAXAAIARA0IAAAAIAQg0IAXAAIghBWQgDAJgFAEQgHAEgLAAg");
	this.shape_435.setTransform(338.9,226.4);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgQA1QgIgCgGgEIgGgGIgFgGQgDgHAAgKIAXAAQAAAGACADQACAEADACQADACAEABIAIACIAHgBIAHgCIAFgEQACgDAAgEQAAgEgDgDQgCgDgFgBIgKgEIgLgDIgLgDQgGgCgEgDQgFgDgDgFQgDgGAAgHIABgHIADgHQAEgGAFgEQAGgFAHgBQAHgCAHAAQAIAAAIACQAHABAGAFQAGAEAEAGIADAHIAAAJIgWAAIgCgIQgCgDgDgBQgDgDgEAAIgHgBIgFABIgFACIgEAEQgCACAAAEIABAEQACACADACIAKAEIAPADIAIADQAGABAFADQAFADAEAGQAEAFAAAKQAAAHgDAGQgDAHgFAEQgGAFgIACQgMADgIAAQgHAAgJgDg");
	this.shape_436.setTransform(330.1,223.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#FFFFFF").p("AhBkIICDIR");
	this.shape_437.setTransform(400,127.4);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#FFFFFF").p("AAKlpIgTLT");
	this.shape_438.setTransform(374.1,136);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#FFFFFF").p("ACUmmIknNN");
	this.shape_439.setTransform(344,144.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#FFFFFF").p("AGYlKIsvKV");
	this.shape_440.setTransform(302.7,132);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgMAnQgGgBgFgDQgFgDgDgFQgEgGAAgHIAUAAQAAADACACIADAFIAGACIAFABIAEgBIAFgCIADgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgFgHgCIgQgFIgKgDIgHgDQgEgCgCgDQgCgEAAgFQAAgIADgEQADgFAFgDQAEgDAGgBIAMgBIAMABQAGABAEADQAFADADAFQADAFABAHIgUAAQgBgGgEgCQgEgDgFAAIgEABIgEABIgDACIgBAEQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAIAGADIAHACIAIACIAJADIAIAEQAEABACAEQACADAAAGQAAAHgDAGQgDAFgFADQgFADgGABIgNACQgGAAgHgCg");
	this.shape_441.setTransform(419.1,84.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_442.setTransform(413.1,83.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AgVAnQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAgHACgEQADgFADgCQAEgCAFgBIAJgCIAKgBIAHgBQAEgBACgCQACgCAAgDIgBgGIgDgDIgFgBIgFgBQgFAAgEADQgEADAAAGIgWAAQABgHADgFQADgFAGgDQAFgDAGgCIAMgBIAMABQAGABAFACQAFADADAEQADAEAAAHIAAAnIABALQAAAEACADIgWAAIgBgEIAAgEQgGAFgGADQgGACgIAAQgFAAgFgCgAAKADIgEABIgFABIgEAAIgFACIgEACIgDADIgBAFIABAEIADAEIAEABIAFABQAGAAADgDQAEgCABgDIACgFIABgFIAAgIg");
	this.shape_443.setTransform(406.9,84.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgOAmQgHgDgFgFQgFgGgDgHQgDgHAAgJQAAgIADgIQACgHAFgGQAFgGAIgDIAIgCIAIgBIANACQAGACAFADQAFAEADAGQAEAFAAAIIgVAAQgCgOgOAAQgEAAgDACQgEADgCADIgDAJIgBAHIABAJIADAIQACADAEADQADACAEAAIAHgBIAFgDQAEgFABgHIAUAAQgBAIgDAGQgDAGgFAEQgEAEgHACQgGACgIAAQgIAAgHgDg");
	this.shape_444.setTransform(398.4,84.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgKA2IAAhNIAVAAIAABNgAgKgjIAAgRIAVAAIAAARg");
	this.shape_445.setTransform(392.1,83.4);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AAmAoIAAgrIAAgIQAAgDgCgDIgEgEQgCgBgFAAQgEAAgDACIgFAEIgCAGIAAAIIAAAqIgUAAIAAgrIgBgHIgBgGQgBgDgDgBQgCgCgFAAIgEABIgFACIgEAGQgCADAAAGIAAAsIgVAAIAAhNIAUAAIAAALQAFgGAGgEQAFgDAIAAQAHAAAGADQAGADADAHQADgFAGgEQAGgEAIAAQAGAAAFACQAGABADADQAEAEACAFQACAFAAAIIAAAzg");
	this.shape_446.setTransform(383.4,84.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgHQgDgIAAgJQAAgIADgHQADgIAFgFQAFgGAIgDQAHgDAIAAQAKAAAHAEIAHAEIAFAGQAFAHACAIQACAIgBAIIg3AAIACAJIAEAGQAEAFAIAAQAHAAAFgDQAEgEABgDIATAAQgCAHgEAFQgDAFgFADQgJAGgNAAQgIAAgIgDgAgHgWIgGAEIgDAGIgBAFIAiAAQgBgIgEgFIgFgDIgHgBQgEAAgDACg");
	this.shape_447.setTransform(372.3,84.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AAPA2IAAgsIgBgIIgCgGQgCgCgCgBQgDgBgDAAQgJgBgDAGQgCADgBADIgBAKIAAApIgWAAIAAhqIAWAAIAAAoIABAAQAEgHAFgDQAGgDAGAAQAJAAAFACQAGADADAEQADAEABAGQACAFAAAHIAAAwg");
	this.shape_448.setTransform(363.6,83.4);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgSAzIgKgEIgHgHQgHgIgDgKQgEgKAAgLQAAgMAEgKIAEgKIAGgIIAHgHIAKgFQAJgEAMAAQAJAAAIADQAIACAFAFQAHAEAEAIQAEAHABAKIgXAAQAAgEgDgEIgFgGIgHgEIgIgBQgHAAgGADQgFADgEAFQgDAFgBAHQgCAGgBAHQABAGACAGQABAHADAFQAEAFAFADQAGADAHAAQAFAAAFgCQADgBAEgDQAGgHABgLIAXAAQgCANgDAGQgDAIgHAFQgGAGgIADQgIADgKAAQgMAAgJgFg");
	this.shape_449.setTransform(353.6,83.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410,p:{x:106.2,y:130.8}},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393,p:{x:167.2,y:148.9}},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388}]},68).to({state:[]},243).to({state:[{t:this.shape_429},{t:this.shape_428},{t:this.shape_410,p:{x:108.4,y:178}},{t:this.shape_427},{t:this.shape_426},{t:this.shape_393,p:{x:132.8,y:178}},{t:this.shape_425},{t:this.shape_424}]},17).to({state:[]},74).to({state:[{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430}]},810).to({state:[]},226).wait(237));

	// chem release zoom
	this.instance = new lib.zoomcircle();
	this.instance.parent = this;
	this.instance.setTransform(229.6,309,1.558,1.558,0,0,0,40,40);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1201).to({_off:false},0).wait(1).to({regX:42,regY:42,scaleX:1.81,scaleY:1.81,x:242.9,y:302},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:253,y:291.8},0).wait(1).to({scaleX:2.3,scaleY:2.3,x:263.2,y:281.7},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:273.4,y:271.5},0).wait(1).to({scaleX:2.8,scaleY:2.8,x:283.6,y:261.4},0).wait(1).to({scaleX:3.05,scaleY:3.05,x:293.8,y:251.3},0).wait(1).to({scaleX:3.3,scaleY:3.3,x:304,y:241.1},0).wait(1).to({scaleX:3.54,scaleY:3.54,x:314.2,y:231},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:324.4,y:220.8},0).wait(1).to({scaleX:4.04,scaleY:4.04,x:334.6,y:210.7},0).wait(1).to({scaleX:4.29,scaleY:4.29,x:344.7,y:200.5},0).wait(237).to({scaleX:3.9,scaleY:3.9,x:328.8,y:216.5},0).wait(1).to({scaleX:3.51,scaleY:3.51,x:312.7,y:232.4},0).wait(1).to({scaleX:3.12,scaleY:3.12,x:296.7,y:248.4},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:280.7,y:264.3},0).wait(1).to({scaleX:2.34,scaleY:2.34,x:264.7,y:280.3},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:248.7,y:296.2},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:232.7,y:312.1},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(215));

	// impulse flash
	this.instance_1 = new lib.flash();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.5,211.1,1,1,0,0,0,1.7,0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(328).to({_off:false},0).wait(1).to({regX:-0.1,regY:0.4,x:119.7,y:210.7},0).wait(76).to({x:117.2,y:211.8},0).wait(1).to({x:114.7,y:213},0).wait(1).to({x:112.3,y:214.2},0).wait(1).to({x:109.9,y:215.5},0).wait(1).to({x:107.5,y:216.9},0).wait(1).to({x:105.1,y:218.2},0).wait(1).to({x:102.7,y:219.7},0).wait(1).to({x:100.4,y:221.2},0).wait(1).to({x:98.1,y:222.7},0).wait(1).to({x:95.9,y:224.2},0).wait(1).to({x:93.7,y:225.9},0).wait(1).to({x:91.5,y:227.5},0).wait(1).to({x:89.4,y:229.3},0).wait(1).to({x:87.3,y:231.1},0).wait(1).to({x:85.3,y:232.9},0).wait(1).to({x:83.3,y:234.9},0).wait(1).to({x:81.4,y:236.9},0).wait(1).to({x:79.6,y:238.9},0).wait(1).to({x:77.9,y:241.1},0).wait(1).to({x:76.3,y:243.3},0).wait(1).to({x:74.9,y:245.7},0).wait(1).to({x:73.6,y:248.1},0).wait(1).to({x:72.4,y:250.5},0).wait(1).to({x:71.5,y:253.1},0).wait(1).to({x:70.8,y:255.8},0).wait(1).to({x:70.3,y:258.2},0).wait(1).to({x:70.1,y:261.3},0).wait(1).to({x:70.5,y:262.9},0).wait(1).to({x:71.2,y:264},0).wait(1).to({x:72.2,y:265.1},0).wait(1).to({x:73.3,y:266.2},0).wait(1).to({x:74.4,y:267.1},0).wait(1).to({x:75.6,y:268},0).wait(1).to({x:76.9,y:268.9},0).wait(1).to({x:78.1,y:269.7},0).wait(1).to({x:79.4,y:270.5},0).wait(1).to({x:80.7,y:271.2},0).wait(1).to({x:82,y:272},0).wait(1).to({x:83.3,y:272.7},0).wait(1).to({x:84.7,y:273.4},0).wait(1).to({x:86,y:274.1},0).wait(1).to({x:87.3,y:274.8},0).wait(1).to({x:88.7,y:275.4},0).wait(1).to({x:90.1,y:276.1},0).wait(1).to({x:91.1,y:276.5},0).wait(1).to({x:90.2,y:275.8},0).wait(1).to({x:89.7,y:275.1},0).wait(1).to({x:89.5,y:274.1},0).wait(1).to({x:89.6,y:273.1},0).wait(1).to({x:89.7,y:272.1},0).wait(1).to({x:90,y:271.2},0).wait(1).to({x:90.4,y:270.2},0).wait(1).to({x:90.8,y:269.3},0).wait(1).to({x:91.2,y:268.4},0).wait(1).to({x:91.6,y:267.5},0).wait(1).to({x:92.1,y:266.6},0).wait(1).to({x:92.5,y:265.7},0).wait(1).to({x:93,y:264.8},0).wait(1).to({x:93.5,y:263.9},0).wait(1).to({x:94,y:263.1},0).wait(1).to({x:94.5,y:262.2},0).wait(1).to({x:95,y:261.3},0).wait(1).to({x:95.4,y:260.4},0).wait(1).to({x:95.9,y:259.6},0).wait(1).to({x:96.4,y:258.7},0).wait(1).to({x:96.9,y:257.8},0).wait(1).to({x:97.3,y:256.9},0).wait(1).to({x:97.8,y:256},0).wait(1).to({x:98.1,y:255.3},0).wait(1).to({x:98.5,y:254.5},0).wait(1).to({x:99,y:253.3},0).wait(1).to({x:100.1,y:251.1},0).wait(1).to({x:101.3,y:249},0).wait(1).to({x:102.5,y:247},0).wait(1).to({x:103.8,y:244.9},0).wait(1).to({x:105.1,y:242.9},0).wait(1).to({x:106.5,y:241},0).wait(1).to({x:107.9,y:239},0).wait(1).to({x:109.3,y:237.1},0).wait(1).to({x:110.8,y:235.2},0).wait(1).to({x:112.3,y:233.3},0).wait(1).to({x:113.8,y:231.5},0).wait(1).to({x:115.4,y:229.7},0).wait(1).to({x:117,y:228},0).wait(1).to({x:118.7,y:226.3},0).wait(1).to({x:120.3,y:224.9},0).wait(1).to({x:121.7,y:223.7},0).wait(1).to({x:124.4,y:221.8},0).wait(1).to({x:125.8,y:221.6},0).wait(1).to({x:127.3,y:221.4},0).wait(1).to({x:128.8},0).wait(1).to({x:130.2,y:221.3},0).wait(1).to({x:131.7},0).wait(1).to({x:133.2},0).wait(1).to({x:134.7,y:221.4},0).wait(1).to({x:136.1,y:221.5},0).wait(1).to({x:137.6,y:221.6},0).wait(1).to({x:139.1,y:221.8},0).wait(1).to({x:140.5,y:222},0).wait(1).to({x:142,y:222.3},0).wait(1).to({x:143.4,y:222.6},0).wait(1).to({x:144.9,y:223},0).wait(1).to({x:146.3,y:223.4},0).wait(1).to({x:147.7,y:223.8},0).wait(1).to({x:149.1,y:224.4},0).wait(1).to({x:150.4,y:224.9},0).wait(1).to({x:151.8,y:225.6},0).wait(1).to({x:153.1,y:226.2},0).wait(1).to({x:154.3,y:227},0).wait(1).to({x:155.6,y:227.8},0).wait(1).to({x:156.8,y:228.7},0).wait(1).to({x:157.9,y:229.6},0).wait(1).to({x:159,y:230.6},0).wait(1).to({x:160,y:231.7},0).wait(1).to({x:161,y:232.8},0).wait(1).to({x:161.9,y:234},0).wait(1).to({x:162.7,y:235.2},0).wait(1).to({x:163.5,y:236.4},0).wait(1).to({x:164.2,y:237.7},0).wait(1).to({x:164.8,y:239.1},0).wait(1).to({x:165.4,y:240.5},0).wait(1).to({x:165.9,y:241.8},0).wait(1).to({x:166.3,y:243.2},0).wait(1).to({x:166.7,y:244.7},0).wait(1).to({x:167,y:246.1},0).wait(1).to({x:167.3,y:247.5},0).wait(1).to({x:167.5,y:248.9},0).wait(1).to({x:167.6,y:250.4},0).wait(1).to({x:167.7,y:252},0).wait(1).to({x:167.8,y:253.2},0).wait(1).to({y:254.5},0).wait(1).to({y:256.1},0).wait(1).to({y:257.9},0).wait(1).to({x:167.7,y:260.9},0).wait(1).to({x:168,y:263.7},0).wait(1).to({x:168.5,y:266.5},0).wait(1).to({x:169.2,y:269.3},0).wait(1).to({x:170.1,y:272},0).wait(1).to({x:171.1,y:274.7},0).wait(1).to({x:172.4,y:277.3},0).wait(1).to({x:173.7,y:279.9},0).wait(1).to({x:175.2,y:282.4},0).wait(1).to({x:176.8,y:284.8},0).wait(1).to({x:178.5,y:287.1},0).wait(1).to({x:180.2,y:289.4},0).wait(1).to({x:182.1,y:291.6},0).wait(1).to({x:184,y:293.7},0).wait(1).to({x:186.1,y:295.7},0).wait(1).to({x:188.2,y:297.7},0).wait(1).to({x:190.3,y:299.7},0).wait(1).to({x:192.5,y:301.5},0).wait(1).to({x:194.8,y:303.3},0).wait(1).to({x:197.1,y:305},0).wait(1).to({x:199.5,y:306.6},0).wait(1).to({x:201.9,y:308.2},0).wait(1).to({x:204.3,y:309.7},0).wait(1).to({x:206.9,y:311.1},0).wait(1).to({x:209.4,y:312.5},0).wait(1).to({x:212,y:313.7},0).wait(1).to({x:214.6,y:314.9},0).wait(1).to({x:217.3,y:316},0).wait(1).to({x:220,y:317},0).wait(1).to({x:222.7,y:318},0).wait(1).to({x:225.5,y:318.8},0).wait(1).to({x:228.2,y:319.6},0).wait(1).to({x:231,y:320.2},0).wait(1).to({x:233.8,y:320.8},0).wait(1).to({x:236.7,y:321.3},0).wait(1).to({x:239.5,y:321.6},0).wait(1).to({x:242.2,y:321.9},0).wait(1).to({x:245.2,y:322.1},0).wait(1).to({x:248.2},0).wait(1).to({x:251.1},0).wait(1).to({x:253.9,y:321.9},0).wait(1).to({x:256.4,y:321.7},0).wait(1).to({x:259.7,y:321.2},0).wait(149).to({_off:true},1).wait(369).to({_off:false,regX:1.7,regY:0.8,x:300.9,y:323.1},0).wait(1).to({regX:-0.1,regY:0.4,x:299.1,y:323},0).wait(1).to({y:323.3},0).wait(1).to({y:323.6},0).wait(1).to({y:323.9},0).wait(1).to({y:324.2},0).wait(1).to({y:324.5},0).wait(1).to({y:324.8},0).wait(1).to({y:325.1},0).wait(1).to({y:325.4},0).wait(1).to({y:325.7},0).wait(1).to({y:326},0).wait(1).to({y:326.3},0).wait(1).to({y:326.6},0).wait(1).to({y:326.8},0).wait(1).to({y:327.1},0).wait(1).to({y:327.4},0).wait(1).to({y:327.7},0).wait(1).to({y:328},0).wait(1).to({y:328.3},0).wait(1).to({y:328.6},0).wait(1).to({y:328.9},0).wait(1).to({y:329.2},0).wait(1).to({y:329.5},0).wait(1).to({y:329.8},0).wait(1).to({y:330.1},0).wait(1).to({y:330.4},0).wait(1).to({y:330.7},0).wait(1).to({y:331.7},0).wait(1).to({y:332.7},0).wait(1).to({y:333.7},0).wait(1).to({y:334.7},0).wait(1).to({y:335.7},0).wait(1).to({y:336.7},0).wait(1).to({y:337.7},0).wait(1).to({y:338.7},0).wait(1).to({y:339.7},0).wait(1).to({y:340.7},0).wait(1).to({y:341.7},0).wait(1).to({y:342.7},0).wait(1).to({y:343.7},0).wait(1).to({y:344},0).wait(1).to({y:344.3},0).wait(1).to({y:344.6},0).wait(1).to({y:344.9},0).wait(1).to({y:345.2},0).wait(1).to({y:345.5},0).wait(1).to({y:345.8},0).wait(1).to({y:346.1},0).wait(1).to({y:346.4},0).wait(1).to({y:346.5},0).wait(1).to({y:346.7},0).wait(1).to({y:346.8},0).wait(1).to({y:346.7},0).wait(2).to({y:344.8},0).wait(1).to({y:342.9},0).wait(1).to({y:341},0).wait(1).to({y:334.9},0).wait(1).to({y:328.8},0).wait(1).to({y:322.8},0).wait(1).to({y:316.7},0).wait(1).to({y:311.7},0).wait(1).to({y:306.7},0).wait(1).to({y:301.7},0).wait(1).to({y:296.7},0).wait(1).to({y:291.7},0).wait(1).to({y:286.7},0).wait(1).to({y:281.7},0).wait(1).to({y:279.7},0).wait(1).to({y:277.7},0).wait(1).to({y:275.7},0).wait(1).to({y:273.7},0).wait(1).to({y:271.7},0).wait(1).to({y:269.7},0).wait(1).to({y:267.7},0).wait(1).to({y:265.7},0).wait(1).to({y:263.7},0).wait(1).to({y:261.7},0).wait(1).to({y:253.9},0).wait(1).to({y:246},0).wait(1).to({y:238.2},0).wait(1).to({y:230.4},0).wait(1).to({y:222.5},0).wait(1).to({y:214.7},0).wait(3).to({_off:true},1).wait(276).to({_off:false,regX:1.7,regY:0.8,x:264.9,y:359.9},0).wait(1).to({regX:-0.1,regY:0.4,x:263.1,y:356.3,alpha:0.995},0).wait(1).to({y:353.1,alpha:0.99},0).wait(1).to({y:350,alpha:0.985},0).wait(1).to({y:346.8,alpha:0.98},0).wait(1).to({y:343.6,alpha:0.974},0).wait(1).to({y:340.5,alpha:0.969},0).wait(1).to({y:337.3,alpha:0.964},0).wait(1).to({y:334.1,alpha:0.959},0).wait(1).to({y:331,alpha:0.954},0).wait(1).to({y:329.6,alpha:0.949},0).wait(1).to({y:328.2,alpha:0.944},0).wait(1).to({y:326.9,alpha:0.939},0).wait(1).to({y:325.5,alpha:0.934},0).wait(1).to({y:324.2,alpha:0.929},0).wait(1).to({y:322.8,alpha:0.923},0).wait(1).to({y:321.4,alpha:0.918},0).wait(1).to({y:320.1,alpha:0.913},0).wait(1).to({y:318.7,alpha:0.908},0).wait(1).to({y:317.4,alpha:0.903},0).wait(1).to({y:316,alpha:0.898},0).wait(1).to({y:314.6,alpha:0.893},0).wait(1).to({y:313.3,alpha:0.888},0).wait(1).to({y:311.9,alpha:0.883},0).wait(1).to({y:310.6,alpha:0.878},0).wait(1).to({y:309.2,alpha:0.872},0).wait(1).to({y:307.8,alpha:0.867},0).wait(1).to({y:306.5,alpha:0.862},0).wait(1).to({y:305.1,alpha:0.857},0).wait(1).to({y:303.8,alpha:0.852},0).wait(1).to({y:302.7,alpha:0.847},0).wait(1).to({y:301.6,alpha:0.842},0).wait(1).to({y:300.6,alpha:0.837},0).wait(1).to({y:299.5,alpha:0.832},0).wait(1).to({y:298.4,alpha:0.827},0).wait(1).to({y:297.4,alpha:0.821},0).wait(1).to({y:296.3,alpha:0.816},0).wait(1).to({y:295.2,alpha:0.811},0).wait(1).to({y:294.2,alpha:0.806},0).wait(1).to({y:293.1,alpha:0.801},0).wait(1).to({y:292,alpha:0.796},0).wait(1).to({y:291,alpha:0.791},0).wait(1).to({y:289.9,alpha:0.786},0).wait(1).to({y:288.8,alpha:0.781},0).wait(1).to({y:287.8,alpha:0.776},0).wait(1).to({y:286.7,alpha:0.77},0).wait(1).to({y:285.6,alpha:0.765},0).wait(1).to({y:284.6,alpha:0.76},0).wait(1).to({y:283.5,alpha:0.755},0).wait(1).to({y:282.4,alpha:0.75},0).wait(1).to({y:281.4,alpha:0.745},0).wait(1).to({y:280.3,alpha:0.74},0).wait(1).to({y:279.2,alpha:0.735},0).wait(1).to({y:278.2,alpha:0.73},0).wait(1).to({y:277.1,alpha:0.724},0).wait(1).to({y:276,alpha:0.719},0).wait(1).to({y:275,alpha:0.714},0).wait(1).to({y:273.9,alpha:0.709},0).wait(1).to({y:272.8,alpha:0.704},0).wait(1).to({y:271.8,alpha:0.699},0).wait(1).to({y:271.5,alpha:0.694},0).wait(1).to({y:271.3,alpha:0.689},0).wait(1).to({y:271,alpha:0.684},0).wait(1).to({y:270.8,alpha:0.679},0).wait(1).to({y:270.5,alpha:0.673},0).wait(1).to({y:270.3,alpha:0.668},0).wait(1).to({y:270.1,alpha:0.663},0).wait(1).to({y:269.8,alpha:0.658},0).wait(1).to({y:269.6,alpha:0.653},0).wait(1).to({y:269.3,alpha:0.648},0).wait(1).to({y:269.1,alpha:0.643},0).wait(1).to({y:268.8,alpha:0.638},0).wait(1).to({y:268.6,alpha:0.633},0).wait(1).to({y:268.4,alpha:0.628},0).wait(1).to({y:268.1,alpha:0.622},0).wait(1).to({y:267.9,alpha:0.617},0).wait(1).to({y:267.6,alpha:0.612},0).wait(1).to({y:267.4,alpha:0.607},0).wait(1).to({y:267.2,alpha:0.602},0).wait(1).to({y:268.1,alpha:0.597},0).wait(1).to({y:269,alpha:0.592},0).wait(1).to({y:269.9,alpha:0.587},0).wait(1).to({y:270.8,alpha:0.582},0).wait(1).to({y:271.7,alpha:0.577},0).wait(1).to({y:272.6,alpha:0.571},0).wait(1).to({y:273.5,alpha:0.566},0).wait(1).to({y:274.4,alpha:0.561},0).wait(1).to({y:275.4,alpha:0.556},0).wait(1).to({y:276.3,alpha:0.551},0).wait(1).to({y:277.2,alpha:0.546},0).wait(1).to({y:278.1,alpha:0.541},0).wait(1).to({y:279,alpha:0.536},0).wait(1).to({y:279.9,alpha:0.531},0).wait(1).to({y:280.8,alpha:0.526},0).wait(1).to({y:281.7,alpha:0.52},0).wait(1).to({y:282.7,alpha:0.515},0).wait(1).to({y:283.6,alpha:0.51},0).wait(1).to({y:284.5,alpha:0.505},0).wait(1).to({y:285.4,alpha:0.5},0).wait(1).to({y:286.3,alpha:0.495},0).wait(1).to({y:287.2,alpha:0.49},0).wait(1).to({y:288.1,alpha:0.485},0).wait(1).to({y:289,alpha:0.48},0).wait(1).to({y:289.9,alpha:0.474},0).wait(1).to({y:290.9,alpha:0.469},0).wait(1).to({y:291.8,alpha:0.464},0).wait(1).to({y:292.7,alpha:0.459},0).wait(1).to({y:293.6,alpha:0.454},0).wait(1).to({y:294.5,alpha:0.449},0).wait(1).to({y:295.4,alpha:0.444},0).wait(1).to({y:296.3,alpha:0.439},0).wait(1).to({y:297.2,alpha:0.434},0).wait(1).to({y:298.2,alpha:0.429},0).wait(1).to({y:298.5,alpha:0.423},0).wait(1).to({y:298.8,alpha:0.418},0).wait(1).to({y:299.2,alpha:0.413},0).wait(1).to({y:299.5,alpha:0.408},0).wait(1).to({y:299.9,alpha:0.403},0).wait(1).to({y:300.2,alpha:0.398},0).wait(1).to({y:300.6,alpha:0.393},0).wait(1).to({y:300.9,alpha:0.388},0).wait(1).to({y:301.3,alpha:0.383},0).wait(1).to({y:301.6,alpha:0.378},0).wait(1).to({y:301.9,alpha:0.372},0).wait(1).to({y:302.3,alpha:0.367},0).wait(1).to({y:302.6,alpha:0.362},0).wait(1).to({y:303,alpha:0.357},0).wait(1).to({y:303.3,alpha:0.352},0).wait(1).to({y:303.7,alpha:0.347},0).wait(1).to({y:304,alpha:0.342},0).wait(1).to({y:304.4,alpha:0.337},0).wait(1).to({y:304.7,alpha:0.332},0).wait(1).to({y:305.1,alpha:0.327},0).wait(1).to({y:305.4,alpha:0.321},0).wait(1).to({y:305.7,alpha:0.316},0).wait(1).to({y:306.1,alpha:0.311},0).wait(1).to({y:306.4,alpha:0.306},0).wait(1).to({y:306.8,alpha:0.301},0).wait(1).to({y:307.1,alpha:0.296},0).wait(1).to({y:307.5,alpha:0.291},0).wait(1).to({y:307.8,alpha:0.286},0).wait(1).to({y:308.2,alpha:0.281},0).wait(1).to({y:308.5,alpha:0.276},0).wait(1).to({y:308.8,alpha:0.27},0).wait(1).to({y:309.2,alpha:0.265},0).wait(1).to({y:309.5,alpha:0.26},0).wait(1).to({y:309.9,alpha:0.255},0).wait(1).to({y:310.2,alpha:0.25},0).wait(1).to({y:310.6,alpha:0.245},0).wait(1).to({y:310.9,alpha:0.24},0).wait(1).to({y:311.3,alpha:0.235},0).wait(1).to({y:311.6,alpha:0.23},0).wait(1).to({y:312,alpha:0.224},0).wait(1).to({y:311,alpha:0.219},0).wait(1).to({y:310.1,alpha:0.214},0).wait(1).to({y:309.2,alpha:0.209},0).wait(1).to({y:308.3,alpha:0.204},0).wait(1).to({y:307.4,alpha:0.199},0).wait(1).to({y:306.5,alpha:0.194},0).wait(1).to({y:305.6,alpha:0.189},0).wait(1).to({y:304.7,alpha:0.184},0).wait(1).to({y:303.8,alpha:0.179},0).wait(1).to({y:302.9,alpha:0.173},0).wait(1).to({y:301.9,alpha:0.168},0).wait(1).to({y:301,alpha:0.163},0).wait(1).to({y:300.1,alpha:0.158},0).wait(1).to({y:299.2,alpha:0.153},0).wait(1).to({y:298.3,alpha:0.148},0).wait(1).to({y:297.4,alpha:0.143},0).wait(1).to({y:296.5,alpha:0.138},0).wait(1).to({y:295.6,alpha:0.133},0).wait(1).to({y:294.7,alpha:0.128},0).wait(1).to({y:293.8,alpha:0.122},0).wait(1).to({y:292.8,alpha:0.117},0).wait(1).to({y:291.9,alpha:0.112},0).wait(1).to({y:291,alpha:0.107},0).wait(1).to({y:290.1,alpha:0.102},0).wait(1).to({y:289.2,alpha:0.097},0).wait(1).to({y:288.3,alpha:0.092},0).wait(1).to({y:287.3,alpha:0.087},0).wait(1).to({y:286.4,alpha:0.082},0).wait(1).to({y:285.5,alpha:0.077},0).wait(1).to({y:284.6,alpha:0.071},0).wait(1).to({y:283.7,alpha:0.066},0).wait(1).to({y:282.8,alpha:0.061},0).wait(1).to({y:281.8,alpha:0.056},0).wait(1).to({y:280.9,alpha:0.051},0).wait(1).to({y:280,alpha:0.046},0).wait(1).to({y:279.1,alpha:0.041},0).wait(1).to({y:278.2,alpha:0.036},0).wait(1).to({y:277.3,alpha:0.031},0).wait(1).to({y:276.3,alpha:0.026},0).wait(1).to({y:275.4,alpha:0.02},0).wait(1).to({y:274.5,alpha:0.015},0).wait(1).to({y:273.6,alpha:0.01},0).wait(1).to({y:272.7,alpha:0.005},0).wait(1).to({y:271.8,alpha:0},0).to({_off:true},1).wait(15));

	// nerve closeup 2
	this.nerveCloseUp = new lib.nervecloseup2();
	this.nerveCloseUp.parent = this;
	this.nerveCloseUp.setTransform(242.7,310.2,0.269,0.259,-3.1,0,0,191.4,10.7);
	this.nerveCloseUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nerveCloseUp).wait(730).to({_off:false},0).wait(1).to({regX:240.8,regY:55.3,scaleX:0.3,scaleY:0.29,x:257.3,y:311.7},0).wait(1).to({scaleX:0.33,scaleY:0.32,rotation:-3,x:258.1,y:302.6},0).wait(1).to({scaleX:0.35,scaleY:0.34,rotation:-2.9,x:258.9,y:293.4},0).wait(1).to({scaleX:0.38,scaleY:0.37,rotation:-2.7,x:259.6,y:284.3},0).wait(1).to({scaleX:0.41,scaleY:0.4,rotation:-2.6,x:260.4,y:275.1},0).wait(1).to({scaleX:0.44,scaleY:0.43,rotation:-2.5,x:261.1,y:266},0).wait(1).to({scaleX:0.47,scaleY:0.46,rotation:-2.4,x:261.8,y:256.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:-2.2,x:262.5,y:247.8},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:-2.1,x:263.2,y:238.7},0).wait(1).to({scaleX:0.55,scaleY:0.54,rotation:-2,x:264,y:229.6},0).wait(1).to({scaleX:0.58,scaleY:0.57,rotation:-1.9,x:264.7,y:220.5},0).wait(1).to({scaleX:0.61,scaleY:0.6,rotation:-1.7,x:265.4,y:211.3},0).wait(1).to({scaleX:0.64,scaleY:0.63,rotation:-1.6,x:266.1,y:202.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-1.5,x:266.8,y:193.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-1.4,x:267.4,y:184.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-1.2,x:268.2,y:175.1},0).wait(1).to({scaleX:0.75,scaleY:0.74,rotation:-1.1,x:268.8,y:166},0).wait(1).to({scaleX:0.78,scaleY:0.77,rotation:-1,x:269.5,y:156.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-0.9,x:270.1,y:147.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-0.7,x:270.8,y:138.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-0.6,x:271.5,y:129.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-0.5,x:272.1,y:120.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-0.4,x:272.8,y:111.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-0.2,x:273.4,y:102.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-0.1,x:274,y:93.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:274.7,y:84.6},0).wait(332).to({scaleX:0.9,scaleY:0.89,rotation:-0.5,x:272.9,y:118.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-0.9,x:271,y:151.8},0).wait(1).to({scaleX:0.69,scaleY:0.68,rotation:-1.4,x:269.1,y:185.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:-1.8,x:267.1,y:219.2},0).wait(1).to({scaleX:0.48,scaleY:0.47,rotation:-2.3,x:265,y:253},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-2.8,x:262.9,y:286.9},0).wait(1).to({scaleX:0.27,scaleY:0.26,rotation:-3.2,x:260.6,y:321},0).wait(1).to({y:320.7,alpha:0.75},0).wait(1).to({y:320.5,alpha:0.5},0).wait(1).to({y:320.2,alpha:0.25},0).wait(1).to({y:320,alpha:0},0).wait(577));

	// neuron 2
	this.instance_2 = new lib.nervecell2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(416.2,313.6,0.169,0.169,14.5,0,0,678.9,268.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(68).to({_off:false},0).wait(1).to({regX:622.5,regY:268,scaleX:0.17,scaleY:0.17,x:406.9,y:311},0).wait(243).to({scaleX:0.2,scaleY:0.2,x:487.6,y:326.5},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:568.2,y:341.8},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:648.9,y:357.2},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:729.5,y:372.6},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:810.2,y:388},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:890.9,y:403.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:971.5,y:418.7},0).to({_off:true},1).wait(783).to({_off:false,regX:631.5,regY:269.6,scaleX:0.66,scaleY:0.66,rotation:2,x:1341.5,y:243.1},0).wait(1).to({regX:622.5,regY:268,rotation:2.2,x:1329,y:243.8},0).wait(1).to({x:1322.4,y:245.9},0).wait(1).to({x:1315.8,y:247.9},0).wait(1).to({x:1309.2,y:249.9},0).wait(1).to({x:1302.6,y:251.9},0).wait(1).to({x:1296,y:253.9},0).wait(1).to({x:1289.4,y:255.8},0).wait(1).to({x:1282.7,y:257.7},0).wait(1).to({x:1276.1,y:259.6},0).wait(1).to({x:1269.5,y:261.4},0).wait(1).to({x:1262.8,y:263.3},0).wait(1).to({x:1256.1,y:265.1},0).wait(1).to({x:1249.5,y:266.8},0).wait(1).to({x:1242.8,y:268.6},0).wait(1).to({x:1236.1,y:270.3},0).wait(1).to({x:1229.4,y:272},0).wait(1).to({x:1222.7,y:273.7},0).wait(1).to({x:1216,y:275.4},0).wait(1).to({x:1209.3,y:277},0).wait(1).to({x:1202.6,y:278.6},0).wait(1).to({x:1195.9,y:280.2},0).wait(1).to({x:1189.2,y:281.7},0).wait(1).to({x:1182.5,y:283.3},0).wait(1).to({x:1175.7,y:284.8},0).wait(1).to({x:1169,y:286.3},0).wait(1).to({x:1162.3,y:287.7},0).wait(1).to({x:1155.5,y:289.1},0).wait(1).to({x:1148.7,y:290.6},0).wait(1).to({x:1142,y:291.9},0).wait(1).to({x:1135.2,y:293.3},0).wait(1).to({x:1128.4,y:294.6},0).wait(1).to({x:1121.7,y:295.9},0).wait(1).to({x:1114.9,y:297.2},0).wait(1).to({x:1108.1,y:298.5},0).wait(1).to({x:1101.3,y:299.7},0).wait(1).to({x:1094.5,y:301},0).wait(1).to({x:1087.7,y:302.1},0).wait(1).to({x:1080.9,y:303.3},0).wait(1).to({x:1074.1,y:304.5},0).wait(1).to({x:1067.3,y:305.6},0).wait(1).to({x:1060.5,y:306.7},0).wait(1).to({x:1053.7,y:307.8},0).wait(1).to({x:1046.9,y:308.8},0).wait(1).to({x:1040.1,y:309.8},0).wait(1).to({x:1033.2,y:310.8},0).wait(1).to({x:1026.4,y:311.8},0).wait(1).to({x:1019.6,y:312.8},0).wait(1).to({x:1012.7,y:313.7},0).wait(1).to({x:1005.9,y:314.6},0).wait(1).to({x:999,y:315.5},0).wait(1).to({x:992.2,y:316.4},0).wait(1).to({x:985.3,y:317.2},0).wait(1).to({x:978.5,y:318},0).wait(1).to({x:971.6,y:318.8},0).wait(1).to({x:964.8,y:319.6},0).wait(1).to({x:957.9,y:320.3},0).wait(1).to({x:951.1,y:321},0).wait(1).to({x:944.2,y:321.7},0).wait(1).to({x:937.3,y:322.4},0).wait(1).to({x:930.5,y:323},0).wait(1).to({x:923.6,y:323.7},0).wait(1).to({x:916.7,y:324.3},0).wait(1).to({x:909.8,y:324.8},0).wait(1).to({x:903,y:325.4},0).wait(1).to({x:896.1,y:325.9},0).wait(1).to({x:889.2,y:326.4},0).wait(1).to({x:882.3,y:326.9},0).wait(1).to({x:875.4,y:327.4},0).wait(1).to({x:868.5,y:327.8},0).wait(1).to({x:861.7,y:328.2},0).wait(1).to({x:854.8,y:328.6},0).wait(1).to({x:847.9,y:328.9},0).wait(1).to({x:841,y:329.2},0).wait(1).to({x:834.1,y:329.5},0).wait(1).to({x:827.2,y:329.8},0).wait(1).to({x:820.3,y:330.1},0).wait(1).to({x:813.4,y:330.3},0).wait(1).to({x:806.5,y:330.5},0).wait(1).to({x:799.6,y:330.6},0).wait(1).to({x:792.7,y:330.8},0).wait(1).to({x:785.8,y:330.9},0).wait(1).to({x:778.9,y:331},0).wait(1).to({x:772},0).wait(1).to({x:765.1},0).wait(1).to({x:758.2},0).wait(1).to({x:751.3},0).wait(1).to({x:744.4,y:330.9},0).wait(1).to({x:737.5,y:330.7},0).wait(1).to({x:730.6,y:330.6},0).wait(1).to({x:723.7,y:330.4},0).wait(1).to({x:716.8,y:330.1},0).wait(1).to({x:709.9,y:329.7},0).wait(8).to({alpha:0.915},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.15},0).wait(238).to({alpha:0.256},0).wait(1).to({alpha:0.363},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.681},0).wait(1).to({alpha:0.788},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:1},0).wait(8).to({x:706.7,y:329.1},0).wait(1).to({x:703.4,y:328.4},0).wait(1).to({x:700.2,y:327.8},0).wait(1).to({x:696.9,y:327.2},0).wait(1).to({x:693.7,y:326.5},0).wait(1).to({x:690.4,y:325.9},0).wait(1).to({x:687.2,y:325.2},0).wait(1).to({x:683.9,y:324.6},0).wait(1).to({x:680.7,y:323.9},0).wait(1).to({x:677.4,y:323.3},0).wait(1).to({x:674.2,y:322.7},0).wait(1).to({x:670.9,y:322},0).wait(1).to({x:667.7,y:321.4},0).wait(1).to({x:664.4,y:320.7},0).wait(1).to({x:661.2,y:320.1},0).wait(1).to({x:658,y:319.4},0).wait(1).to({x:654.7,y:318.8},0).wait(1).to({x:651.5,y:318.2},0).wait(1).to({x:648.2,y:317.5},0).wait(1).to({x:645,y:316.9},0).wait(1).to({x:641.7,y:316.2},0).wait(1).to({x:638.5,y:315.6},0).wait(1).to({x:635.2,y:314.9},0).wait(1).to({x:632,y:314.3},0).wait(1).to({x:628.7,y:313.6},0).wait(1).to({x:625.5,y:313},0).wait(1).to({x:622.2,y:312.4},0).wait(1).to({x:619,y:311.7},0).wait(1).to({x:615.7,y:311.1},0).wait(1).to({x:612.5,y:310.4},0).wait(1).to({x:609.2,y:309.8},0).wait(1).to({x:606,y:309.1},0).wait(1).to({x:602.7,y:308.5},0).wait(1).to({x:599.5,y:307.9},0).wait(1).to({x:596.2,y:307.2},0).wait(1).to({x:593,y:306.6},0).wait(1).to({x:589.7,y:305.9},0).wait(1).to({x:586.5,y:305.3},0).wait(1).to({x:583.2,y:304.6},0).wait(1).to({x:580,y:304},0).wait(1).to({x:576.7,y:303.3},0).wait(1).to({x:573.5,y:302.7},0).wait(1).to({x:570.2,y:302.1},0).wait(1).to({x:567,y:301.4},0).wait(1).to({x:563.7,y:300.8},0).wait(1).to({x:560.5,y:300.1},0).wait(1).to({x:557.2,y:299.5},0).wait(1).to({x:554,y:298.8},0).wait(1).to({x:550.7,y:298.2},0).wait(1).to({x:547.5,y:297.6},0).wait(1).to({x:544.2,y:296.9},0).wait(1).to({x:541,y:296.3},0).wait(1).to({x:537.8,y:295.6},0).wait(1).to({x:534.5,y:295},0).wait(1).to({x:531.3,y:294.3},0).wait(1).to({x:528,y:293.7},0).wait(1).to({x:524.8,y:293.1},0).wait(1).to({x:521.5,y:292.4},0).wait(1).to({x:518.3,y:291.8},0).wait(1).to({x:515,y:291.1},0).wait(1).to({x:511.8,y:290.5},0).wait(1).to({x:508.5,y:289.8},0).wait(1).to({x:505.3,y:289.2},0).wait(1).to({x:502,y:288.5},0).wait(1).to({x:498.8,y:287.9},0).wait(1).to({x:495.5,y:287.3},0).wait(1).to({x:492.3,y:286.6},0).wait(1).to({x:489,y:286},0).wait(1).to({x:485.8,y:285.3},0).wait(1).to({x:482.5,y:284.7},0).wait(1).to({x:479.3,y:284},0).wait(1).to({x:476,y:283.4},0).wait(1).to({x:472.8,y:282.8},0).wait(1).to({x:469.5,y:282.1},0).wait(1).to({x:466.3,y:281.5},0).wait(1).to({x:463,y:280.8},0).wait(1).to({x:459.8,y:280.2},0).wait(1).to({x:456.5,y:279.5},0).wait(1).to({x:453.3,y:278.9},0).wait(1).to({x:450,y:278.3},0).wait(1).to({x:446.8,y:277.6},0).wait(1).to({x:443.5,y:277},0).wait(1).to({x:440.3,y:276.3},0).wait(1).to({x:437,y:275.7},0).wait(1).to({x:433.8,y:275},0).wait(1).to({x:430.5,y:274.4},0).wait(1).to({x:427.3,y:273.7},0).wait(1).to({x:424,y:273.1},0).wait(1).to({x:420.8,y:272.5},0).wait(1).to({x:417.6,y:271.8},0).wait(1).to({x:414.3,y:271.2},0).wait(1).to({x:411.1,y:270.5},0).wait(1).to({x:407.8,y:269.9},0).wait(1).to({x:404.6,y:269.2},0).wait(1).to({x:401.4,y:268.6},0).wait(1).to({x:398.1,y:268},0).wait(1).to({x:394.9,y:267.3},0).wait(1).to({x:391.6,y:266.7},0).wait(1).to({x:388.4,y:266},0).wait(1).to({x:385.1,y:265.4},0).wait(1).to({x:381.9,y:264.7},0).wait(1).to({x:378.6,y:264.1},0).wait(1).to({x:375.4,y:263.5},0).wait(1).to({x:372.1,y:262.8},0).wait(1).to({x:368.9,y:262.2},0).wait(1).to({x:365.6,y:261.5},0).wait(1).to({x:362.4,y:260.9},0).wait(1).to({x:359.1,y:260.2},0).wait(1).to({x:355.9,y:259.6},0).wait(1).to({x:352.6,y:258.9},0).wait(1).to({x:349.4,y:258.3},0).wait(1).to({x:346.1,y:257.7},0).wait(1).to({x:342.9,y:257},0).wait(1).to({x:339.6,y:256.4},0).wait(1).to({x:336.4,y:255.7},0).wait(1).to({x:333.1,y:255.1},0).wait(1).to({x:329.9,y:254.4},0).wait(1).to({x:326.6,y:253.8},0).wait(1).to({x:323.4,y:253.2},0).wait(1).to({x:320.1,y:252.5},0).wait(1).to({x:316.9,y:251.9},0).wait(1).to({x:313.6,y:251.2},0).wait(1).to({x:310.4,y:250.6},0).wait(1).to({x:307.1,y:249.9},0).wait(1).to({x:303.9,y:249.3},0).wait(1).to({x:300.7,y:248.7},0).wait(1).to({x:297.4,y:248},0).wait(1).to({x:294.2,y:247.4},0).wait(1).to({x:290.9,y:246.7},0).wait(1).to({x:287.7,y:246.1},0).wait(1).to({x:284.4,y:245.4},0).wait(1).to({x:281.2,y:244.8},0).wait(1).to({x:277.9,y:244.1},0).wait(1).to({x:274.7,y:243.5},0).wait(1).to({x:271.4,y:242.9},0).wait(1).to({x:268.2,y:242.2},0).wait(1).to({x:264.9,y:241.6},0).wait(1).to({x:261.7,y:240.9},0).wait(1).to({x:258.4,y:240.3},0).wait(1).to({x:255.2,y:239.6},0).wait(1).to({x:251.9,y:239},0).wait(1).to({x:248.7,y:238.4},0).wait(1).to({x:245.4,y:237.7},0).wait(1).to({x:242.2,y:237.1},0).wait(1).to({x:238.9,y:236.4},0).wait(1).to({x:235.7,y:235.8},0).wait(1).to({x:232.4,y:235.1},0).wait(1).to({x:229.2,y:234.5},0).wait(1).to({x:225.9,y:233.9},0).wait(1).to({x:222.7,y:233.2},0).wait(1).to({x:219.4,y:232.6},0).wait(1).to({x:216.2,y:231.9},0).wait(1).to({x:212.9,y:231.3},0).wait(1).to({x:209.7,y:230.6},0).wait(1).to({x:206.4,y:230},0).wait(1).to({x:203.2,y:229.3},0).wait(1).to({x:199.9,y:228.7},0).wait(1).to({x:196.7,y:228.1},0).wait(1).to({x:193.4,y:227.4},0).wait(1).to({x:190.2,y:226.8},0).wait(1).to({x:187,y:226.1},0).wait(1).to({x:183.7,y:225.5},0).wait(1).to({x:180.5,y:224.8},0).wait(1).to({x:177.2,y:224.2},0).wait(1).to({x:174,y:223.6},0).wait(1).to({x:170.7,y:222.9},0).wait(1).to({x:167.5,y:222.3},0).wait(1).to({x:164.2,y:221.6},0).wait(1).to({x:161,y:221},0).wait(1).to({x:157.7,y:220.3},0).wait(1).to({x:154.5,y:219.7},0).wait(1).to({x:151.2,y:219},0).wait(1).to({x:148,y:218.4},0).wait(1).to({x:144.7,y:217.8},0).wait(1).to({x:141.5,y:217.1},0).wait(1).to({x:138.2,y:216.5},0).wait(1).to({x:135,y:215.8},0).wait(1).to({x:131.7,y:215.2},0).wait(1).to({x:128.5,y:214.5},0).wait(1).to({x:125.2,y:213.9},0).wait(1).to({x:122,y:213.3},0).wait(1).to({x:118.7,y:212.6},0).wait(1).to({x:115.5,y:212},0).wait(1).to({x:112.2,y:211.3},0).wait(1).to({x:109,y:210.7},0).wait(1).to({x:105.7,y:210},0).wait(1).to({x:102.5,y:209.4},0).wait(1).to({x:99.2,y:208.8},0).wait(1).to({x:96,y:208.1},0).wait(1).to({x:92.7,y:207.5},0).wait(1).to({x:89.5,y:206.8},0).wait(1).to({x:86.2,y:206.2},0).wait(1).to({x:83,y:205.5},0).wait(1).to({x:79.7,y:204.9},0).wait(1).to({x:76.5,y:204.2},0).wait(1).to({x:73.2,y:203.6},0).wait(1).to({x:63.1,y:201.6,alpha:0.933},0).wait(1).to({x:52.9,y:199.6,alpha:0.867},0).wait(1).to({x:42.7,y:197.6,alpha:0.8},0).wait(1).to({x:32.5,y:195.5,alpha:0.733},0).wait(1).to({x:22.3,y:193.5,alpha:0.667},0).wait(1).to({x:12.1,y:191.5,alpha:0.6},0).wait(1).to({x:1.9,y:189.5,alpha:0.533},0).wait(1).to({x:-8.3,y:187.5,alpha:0.467},0).wait(1).to({x:-18.4,y:185.5,alpha:0.4},0).wait(1).to({x:-28.6,y:183.5,alpha:0.333},0).wait(1).to({x:-38.8,y:181.5,alpha:0.267},0).wait(1).to({x:-49,y:179.4,alpha:0.2},0).wait(1).to({x:-59.2,y:177.4,alpha:0.133},0).wait(1).to({x:-69.4,y:175.4,alpha:0.067},0).wait(1).to({x:-79.6,y:173.4,alpha:0},0).wait(1));

	// neuron
	this.instance_3 = new lib.nervecell1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(172.5,254.1,0.204,0.204,12.3,0,0,679.5,267.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68).to({_off:false},0).wait(1).to({regX:679.8,regY:268,rotation:12.5,x:172.4,y:254.2},0).wait(243).to({scaleX:0.25,scaleY:0.25,rotation:11.7,x:208,y:262.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:11,x:243.4,y:270.6},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:10.3,x:278.9,y:278.7},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:9.5,x:314.4,y:286.9},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:8.8,x:349.9,y:295.1},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:8.1,x:385.4,y:303.2},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:7.3,x:420.9,y:311.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:6.6,x:456.3,y:319.5},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:5.9,x:491.8,y:327.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:5.1,x:527.3,y:335.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:4.4,x:562.8,y:344.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:3.7,x:598.3,y:352.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:2.9,x:633.8,y:360.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:2.2,x:669.3,y:368.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:1.5,x:704.8,y:376.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:0.7,x:740.3,y:384.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:775.8,y:393},0).wait(76).to({regX:680,regY:268.1,x:775.5,y:392.5},0).wait(1).to({regX:679.8,regY:268,x:771.8,y:392.2},0).wait(1).to({x:768.4,y:392},0).wait(1).to({x:764.9,y:391.7},0).wait(1).to({x:761.5,y:391.4},0).wait(1).to({x:758.1,y:391},0).wait(1).to({x:754.7,y:390.6},0).wait(1).to({x:751.3,y:390.2},0).wait(1).to({x:747.9,y:389.7},0).wait(1).to({x:744.5,y:389.2},0).wait(1).to({x:741.1,y:388.7},0).wait(1).to({x:737.7,y:388.1},0).wait(1).to({x:734.3,y:387.5},0).wait(1).to({x:730.9,y:386.8},0).wait(1).to({x:727.5,y:386.1},0).wait(1).to({x:724.1,y:385.4},0).wait(1).to({x:720.8,y:384.7},0).wait(1).to({x:717.4,y:383.9},0).wait(1).to({x:714.1,y:383},0).wait(1).to({x:710.8,y:382.2},0).wait(1).to({x:707.4,y:381.3},0).wait(1).to({x:704.1,y:380.3},0).wait(1).to({x:700.8,y:379.3},0).wait(1).to({x:697.6,y:378.3},0).wait(1).to({x:694.3,y:377.2},0).wait(1).to({x:691,y:376.1},0).wait(1).to({x:687.8,y:374.9},0).wait(1).to({x:684.6,y:373.7},0).wait(1).to({x:681.4,y:372.4},0).wait(1).to({x:678.2,y:371.1},0).wait(1).to({x:675.1,y:369.8},0).wait(1).to({x:671.9,y:368.4},0).wait(1).to({x:668.8,y:366.9},0).wait(1).to({x:665.7,y:365.4},0).wait(1).to({x:662.7,y:363.8},0).wait(1).to({x:659.6,y:362.2},0).wait(1).to({x:656.6,y:360.5},0).wait(1).to({x:653.7,y:358.7},0).wait(1).to({x:650.7,y:356.9},0).wait(1).to({x:647.8,y:355.1},0).wait(1).to({x:645,y:353.1},0).wait(1).to({x:642.2,y:351.1},0).wait(1).to({x:639.4,y:349.1},0).wait(1).to({x:636.7,y:347},0).wait(1).to({x:634.1,y:344.8},0).wait(1).to({x:631.5,y:342.5},0).wait(1).to({x:628.9,y:340.2},0).wait(1).to({x:626.4,y:337.8},0).wait(1).to({x:624,y:335.3},0).wait(1).to({x:621.7,y:332.8},0).wait(1).to({x:619.4,y:330.2},0).wait(1).to({x:617.3,y:327.5},0).wait(1).to({x:615.2,y:324.8},0).wait(1).to({x:613.2,y:322},0).wait(1).to({x:611.2,y:319.2},0).wait(1).to({x:609.4,y:316.2},0).wait(1).to({x:607.7,y:313.3},0).wait(1).to({x:606,y:310.2},0).wait(1).to({x:604.4,y:307.2},0).wait(1).to({x:602.7,y:304.2},0).wait(1).to({x:600.9,y:301.3},0).wait(1).to({x:599,y:298.4},0).wait(1).to({x:597,y:295.6},0).wait(1).to({x:594.9,y:292.9},0).wait(1).to({x:592.7,y:290.2},0).wait(1).to({x:590.4,y:287.6},0).wait(1).to({x:588.1,y:285.1},0).wait(1).to({x:585.7,y:282.6},0).wait(1).to({x:583.3,y:280.2},0).wait(1).to({x:580.8,y:277.8},0).wait(1).to({x:578.2,y:275.5},0).wait(1).to({x:575.6,y:273.3},0).wait(1).to({x:572.9,y:271.1},0).wait(1).to({x:570.2,y:269},0).wait(1).to({x:567.4,y:267},0).wait(1).to({x:564.6,y:265},0).wait(1).to({x:561.8,y:263.1},0).wait(1).to({x:558.9,y:261.2},0).wait(1).to({x:556,y:259.4},0).wait(1).to({x:553,y:257.6},0).wait(1).to({x:550.1,y:255.9},0).wait(1).to({x:547.1,y:254.2},0).wait(1).to({x:544,y:252.5},0).wait(1).to({x:541,y:250.9},0).wait(1).to({x:537.9,y:249.4},0).wait(1).to({x:534.8,y:247.9},0).wait(1).to({x:531.7,y:246.4},0).wait(1).to({x:528.6,y:245},0).wait(1).to({x:525.4,y:243.6},0).wait(1).to({x:522.2,y:242.3},0).wait(1).to({x:519,y:240.9},0).wait(1).to({x:515.9,y:239.7},0).wait(1).to({x:512.6,y:238.4},0).wait(1).to({x:509.4,y:237.2},0).wait(1).to({x:506.2,y:236},0).wait(1).to({x:502.9,y:234.9},0).wait(1).to({x:499.7,y:233.8},0).wait(1).to({x:496.4,y:232.7},0).wait(1).to({x:493.1,y:231.7},0).wait(1).to({x:489.8,y:230.6},0).wait(1).to({x:486.5,y:229.6},0).wait(1).to({x:483.2,y:228.7},0).wait(1).to({x:479.9,y:227.7},0).wait(1).to({x:476.6,y:226.8},0).wait(1).to({x:473.3,y:225.9},0).wait(1).to({x:470,y:225},0).wait(1).to({x:466.6,y:224.2},0).wait(1).to({x:463.3,y:223.4},0).wait(1).to({x:459.9,y:222.6},0).wait(1).to({x:456.6,y:221.8},0).wait(1).to({x:453.2,y:221},0).wait(1).to({x:449.8,y:220.3},0).wait(1).to({x:446.5,y:219.6},0).wait(1).to({x:443.1,y:218.9},0).wait(1).to({x:439.7,y:218.2},0).wait(1).to({x:436.4,y:217.6},0).wait(1).to({x:433,y:216.9},0).wait(1).to({x:429.6,y:216.3},0).wait(1).to({x:426.2,y:215.7},0).wait(1).to({x:422.8,y:215.1},0).wait(1).to({x:419.4,y:214.6},0).wait(1).to({x:416,y:214},0).wait(1).to({x:412.6,y:213.5},0).wait(1).to({x:409.2,y:213},0).wait(1).to({x:405.8,y:212.5},0).wait(1).to({x:402.4,y:212},0).wait(1).to({x:399,y:211.5},0).wait(1).to({x:395.6,y:211.1},0).wait(1).to({x:392.1,y:210.7},0).wait(1).to({x:388.7,y:210.2},0).wait(1).to({x:385.3,y:209.8},0).wait(1).to({x:381.9,y:209.4},0).wait(1).to({x:378.5,y:209.1},0).wait(1).to({x:375,y:208.7},0).wait(1).to({x:371.6,y:208.3},0).wait(1).to({x:368.2,y:208},0).wait(1).to({x:364.8,y:207.7},0).wait(1).to({x:361.3,y:207.4},0).wait(1).to({x:357.9,y:207.1},0).wait(1).to({x:354.5,y:206.8},0).wait(1).to({x:351,y:206.5},0).wait(1).to({x:347.6,y:206.2},0).wait(1).to({x:344.2,y:206},0).wait(1).to({x:340.7,y:205.8},0).wait(1).to({x:337.3,y:205.5},0).wait(1).to({x:333.9,y:205.3},0).wait(1).to({x:330.4,y:205.1},0).wait(1).to({x:327,y:204.9},0).wait(1).to({x:323.6,y:204.7},0).wait(1).to({x:320.1,y:204.6},0).wait(1).to({x:316.7,y:204.4},0).wait(1).to({x:313.2,y:204.3},0).wait(1).to({x:309.8,y:204.1},0).wait(1).to({x:306.4,y:204},0).wait(1).to({x:302.9,y:203.9},0).wait(1).to({x:299.5,y:203.8},0).wait(1).to({x:296,y:203.7},0).wait(1).to({x:292.6,y:203.6},0).wait(1).to({x:289.1},0).wait(1).to({x:285.7,y:203.5},0).wait(1).to({x:282.3},0).wait(1).to({x:278.8,y:203.4},0).wait(1).to({x:275.4},0).wait(1).to({x:271.9},0).wait(1).to({x:268.5},0).wait(1).to({x:265},0).wait(1).to({x:261.6},0).wait(1).to({x:258.2,y:203.5},0).wait(1).to({x:254.7},0).wait(1).to({x:251.3,y:203.6},0).wait(1).to({x:247.8},0).wait(1).to({x:244.4,y:203.7},0).wait(1).to({x:240.9,y:203.8},0).wait(1).to({x:237.5,y:203.9},0).wait(1).to({x:234.1,y:204},0).wait(1).to({x:230.7,y:204.2},0).wait(1).to({x:227.2,y:204.3},0).wait(1).to({regX:680,regY:268.1,x:227.4,y:204.4},0).wait(1).to({regX:679.8,regY:268,x:227.2,y:204.3},0).wait(521).to({x:220.9,y:206.5},0).wait(1).to({x:214.5,y:208.7},0).wait(1).to({x:208.1,y:210.7},0).wait(1).to({x:201.7,y:212.7},0).wait(1).to({x:195.3,y:214.7},0).wait(1).to({x:188.9,y:216.7},0).wait(1).to({x:182.5,y:218.6},0).wait(1).to({x:176,y:220.5},0).wait(1).to({x:169.6,y:222.4},0).wait(1).to({x:163.1,y:224.2},0).wait(1).to({x:156.7,y:226},0).wait(1).to({x:150.2,y:227.8},0).wait(1).to({x:143.7,y:229.6},0).wait(1).to({x:137.3,y:231.3},0).wait(1).to({x:130.8,y:233.1},0).wait(1).to({x:124.3,y:234.7},0).wait(1).to({x:117.8,y:236.4},0).wait(1).to({x:111.3,y:238.1},0).wait(1).to({x:104.8,y:239.7},0).wait(1).to({x:98.2,y:241.3},0).wait(1).to({x:91.7,y:242.9},0).wait(1).to({x:85.2,y:244.4},0).wait(1).to({x:78.7,y:246},0).wait(1).to({x:72.1,y:247.5},0).wait(1).to({x:65.6,y:249},0).wait(1).to({x:59.1,y:250.5},0).wait(1).to({x:52.5,y:251.9},0).wait(1).to({x:45.9,y:253.4},0).wait(1).to({x:39.4,y:254.8},0).wait(1).to({x:32.8,y:256.2},0).wait(1).to({x:26.3,y:257.5},0).wait(1).to({x:19.7,y:258.9},0).wait(1).to({x:13.1,y:260.2},0).wait(1).to({x:6.5,y:261.6},0).wait(1).to({x:-0.1,y:262.8},0).wait(1).to({x:-6.6,y:264.1},0).wait(1).to({x:-13.2,y:265.4},0).wait(1).to({x:-19.8,y:266.6},0).wait(1).to({x:-26.4,y:267.8},0).wait(1).to({x:-33,y:269},0).wait(1).to({x:-39.6,y:270.2},0).wait(1).to({x:-46.2,y:271.3},0).wait(1).to({x:-52.9,y:272.5},0).wait(1).to({x:-59.5,y:273.6},0).wait(1).to({x:-66.1,y:274.7},0).wait(1).to({x:-72.7,y:275.7},0).wait(1).to({x:-79.3,y:276.8},0).wait(1).to({x:-86,y:277.9},0).wait(1).to({x:-92.6,y:278.9},0).wait(1).to({x:-99.2,y:279.9},0).wait(1).to({x:-105.9,y:280.9},0).wait(1).to({x:-112.5,y:281.8},0).wait(1).to({x:-119.2,y:282.8},0).wait(1).to({x:-125.8,y:283.7},0).wait(1).to({x:-132.4,y:284.6},0).wait(1).to({x:-139.1,y:285.5},0).wait(1).to({x:-145.7,y:286.3},0).wait(1).to({x:-152.4,y:287.2},0).wait(1).to({x:-159.1,y:288},0).wait(1).to({x:-165.7,y:288.8},0).wait(1).to({x:-172.4,y:289.6},0).wait(1).to({x:-179,y:290.4},0).wait(1).to({x:-185.7,y:291.1},0).wait(1).to({x:-192.4,y:291.9},0).wait(1).to({x:-199.1,y:292.6},0).wait(1).to({x:-205.7,y:293.3},0).wait(1).to({x:-212.4,y:293.9},0).wait(1).to({x:-219.1,y:294.6},0).wait(1).to({x:-225.8,y:295.2},0).wait(1).to({x:-232.4,y:295.8},0).wait(1).to({x:-239.1,y:296.4},0).wait(1).to({x:-245.8,y:297},0).wait(1).to({x:-252.5,y:297.5},0).wait(1).to({x:-259.2,y:298.1},0).wait(1).to({x:-265.9,y:298.6},0).wait(1).to({x:-272.6,y:299.1},0).wait(1).to({x:-279.3,y:299.6},0).wait(1).to({x:-286,y:300},0).wait(1).to({x:-292.7,y:300.4},0).wait(1).to({x:-299.4,y:300.9},0).wait(1).to({x:-306,y:301.2},0).wait(1).to({x:-312.7,y:301.6},0).wait(1).to({x:-319.4,y:302},0).wait(1).to({x:-326.1,y:302.3},0).wait(1).to({x:-332.8,y:302.6},0).wait(1).to({x:-339.6,y:302.9},0).wait(1).to({x:-346.3,y:303.2},0).wait(1).to({x:-353,y:303.4},0).wait(1).to({x:-359.7,y:303.6},0).wait(1).to({x:-366.4,y:303.8},0).wait(1).to({x:-373.1,y:304},0).wait(1).to({x:-379.8,y:304.2},0).wait(1).to({regX:680,regY:268.1,x:-379.6,y:304.4},0).wait(1).to({regX:679.8,regY:268,x:-379.8,y:304.3},0).wait(6).to({alpha:0.915},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.15},0).wait(238).to({alpha:0.256},0).wait(1).to({alpha:0.363},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.681},0).wait(1).to({alpha:0.788},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:1},0).wait(8).to({x:-384.8,y:303.3},0).wait(1).to({x:-389.9,y:302.3},0).wait(1).to({x:-394.9,y:301.3},0).wait(1).to({x:-399.9,y:300.3},0).wait(1).to({x:-404.9,y:299.3},0).wait(1).to({x:-410,y:298.3},0).wait(1).to({x:-415,y:297.3},0).wait(1).to({x:-420,y:296.3},0).wait(1).to({x:-425.1,y:295.3},0).wait(1).to({x:-430.1,y:294.3},0).wait(1).to({x:-435.1,y:293.3},0).wait(1).to({x:-440.1,y:292.3},0).wait(1).to({x:-445.2,y:291.3},0).wait(1).to({x:-450.2,y:290.3},0).wait(1).to({x:-455.2,y:289.3},0).wait(1).to({x:-460.3,y:288.3},0).wait(1).to({x:-465.3,y:287.3},0).wait(1).to({x:-470.3,y:286.3},0).wait(1).to({x:-475.4,y:285.3},0).wait(1).to({x:-480.4,y:284.3},0).wait(1).to({x:-485.4,y:283.3},0).wait(1).to({x:-490.4,y:282.3},0).wait(1).to({x:-495.5,y:281.3},0).wait(1).to({x:-500.5,y:280.3},0).wait(1).to({x:-505.5,y:279.3},0).wait(1).to({x:-510.6,y:278.3},0).wait(1).to({x:-515.6,y:277.4},0).wait(1).to({x:-520.6,y:276.4},0).wait(1).to({x:-525.6,y:275.4},0).wait(1).to({x:-530.7,y:274.4},0).wait(1).to({x:-535.7,y:273.4},0).wait(1).to({x:-540.7,y:272.4},0).wait(1).to({x:-545.8,y:271.4},0).wait(1).to({x:-550.8,y:270.4},0).wait(1).to({x:-555.8,y:269.4},0).wait(1).to({x:-560.8,y:268.4},0).wait(1).to({x:-565.9,y:267.4},0).wait(1).to({x:-570.9,y:266.4},0).wait(1).to({x:-575.9,y:265.4},0).wait(1).to({x:-581,y:264.5},0).wait(1).to({x:-586,y:263.5},0).wait(1).to({x:-591,y:262.5},0).wait(1).to({x:-596,y:261.5},0).wait(1).to({x:-601.1,y:260.5},0).wait(1).to({x:-606.1,y:259.5},0).wait(1).to({x:-611.1,y:258.5},0).wait(1).to({x:-616.2,y:257.5},0).wait(1).to({x:-621.2,y:256.5},0).wait(1).to({x:-626.2,y:255.5},0).wait(1).to({x:-631.2,y:254.5},0).wait(1).to({x:-636.3,y:253.5},0).wait(1).to({x:-641.3,y:252.5},0).wait(1).to({x:-646.3,y:251.5},0).wait(1).to({x:-651.4,y:250.5},0).wait(1).to({x:-656.4,y:249.5},0).wait(1).to({x:-661.4,y:248.5},0).wait(1).to({x:-666.5,y:247.5},0).wait(1).to({x:-671.5,y:246.5},0).wait(1).to({x:-676.5,y:245.5},0).wait(1).to({x:-681.5,y:244.5},0).wait(1).to({x:-686.6,y:243.5},0).wait(1).to({x:-691.6,y:242.5},0).wait(1).to({x:-696.6,y:241.5},0).wait(1).to({x:-701.7,y:240.5},0).wait(1).to({x:-706.7,y:239.5},0).wait(1).to({x:-711.7,y:238.6},0).wait(1).to({x:-716.7,y:237.6},0).wait(1).to({x:-721.8,y:236.6},0).wait(1).to({x:-726.8,y:235.6},0).wait(1).to({x:-731.8,y:234.6},0).wait(1).to({x:-736.9,y:233.6},0).wait(1).to({x:-741.9,y:232.6},0).wait(1).to({x:-746.9,y:231.6},0).wait(1).to({x:-751.9,y:230.6},0).wait(1).to({x:-757,y:229.6},0).wait(1).to({x:-762,y:228.6},0).wait(1).to({x:-767,y:227.6},0).wait(1).to({x:-772.1,y:226.6},0).wait(1).to({x:-777.1,y:225.6},0).wait(1).to({x:-782.1,y:224.6},0).wait(1).to({x:-787.1,y:223.6},0).wait(1).to({x:-792.2,y:222.6},0).wait(1).to({x:-797.2,y:221.6},0).wait(1).to({x:-802.2,y:220.6},0).wait(1).to({x:-807.3,y:219.6},0).wait(1).to({x:-812.3,y:218.6},0).wait(1).to({x:-817.3,y:217.6},0).wait(1).to({x:-822.4,y:216.6},0).wait(1).to({x:-827.4,y:215.6},0).wait(1).to({x:-832.4,y:214.6},0).wait(1).to({x:-837.4,y:213.6},0).wait(1).to({x:-842.5,y:212.7},0).wait(1).to({x:-847.5,y:211.7},0).wait(1).to({x:-852.5,y:210.7},0).wait(1).to({x:-857.6,y:209.7},0).wait(1).to({x:-862.6,y:208.7},0).wait(1).to({x:-867.6,y:207.7},0).wait(1).to({x:-872.6,y:206.7},0).wait(1).to({x:-877.7,y:205.7},0).wait(1).to({x:-882.7,y:204.7},0).wait(1).to({x:-887.7,y:203.7},0).wait(1).to({x:-892.8,y:202.7},0).wait(1).to({x:-897.8,y:201.7},0).wait(1).to({x:-902.8,y:200.7},0).wait(1).to({x:-907.8,y:199.7},0).wait(1).to({x:-912.9,y:198.7},0).wait(1).to({x:-917.9,y:197.7},0).wait(1).to({x:-922.9,y:196.7},0).wait(1).to({x:-928,y:195.7},0).wait(1).to({x:-933,y:194.7},0).wait(1).to({x:-938,y:193.7},0).wait(1).to({x:-943,y:192.7},0).wait(1).to({x:-948.1,y:191.7},0).wait(1).to({x:-953.1,y:190.7},0).wait(1).to({x:-958.1,y:189.7},0).wait(1).to({x:-963.2,y:188.7},0).wait(1).to({x:-968.2,y:187.7},0).wait(1).to({x:-973.2,y:186.8},0).wait(1).to({x:-978.2,y:185.8},0).wait(1).to({x:-983.3,y:184.8},0).wait(1).to({x:-988.3,y:183.8},0).wait(1).to({x:-993.3,y:182.8},0).wait(1).to({x:-998.4,y:181.8},0).wait(1).to({x:-1003.4,y:180.8},0).wait(1).to({x:-1008.4,y:179.8},0).wait(1).to({x:-1013.5,y:178.8},0).wait(1).to({x:-1018.5,y:177.8},0).wait(1).to({x:-1023.5,y:176.8},0).wait(1).to({x:-1028.5,y:175.8},0).wait(1).to({x:-1033.6,y:174.8},0).wait(1).to({x:-1038.6,y:173.8},0).wait(1).to({x:-1043.6,y:172.8},0).wait(1).to({x:-1048.7,y:171.8},0).wait(1).to({x:-1053.7,y:170.8},0).wait(1).to({x:-1058.7,y:169.8},0).wait(1).to({x:-1063.7,y:168.8},0).wait(1).to({x:-1068.8,y:167.8},0).wait(1).to({x:-1073.8,y:166.8},0).wait(1).to({x:-1078.8,y:165.8},0).wait(1).to({x:-1083.9,y:164.8},0).wait(1).to({x:-1088.9,y:163.8},0).wait(1).to({x:-1093.9,y:162.8},0).wait(1).to({x:-1098.9,y:161.8},0).wait(1).to({x:-1104,y:160.9},0).wait(1).to({x:-1109,y:159.9},0).wait(1).to({x:-1114,y:158.9},0).wait(1).to({x:-1119.1,y:157.9},0).wait(1).to({x:-1124.1,y:156.9},0).wait(1).to({x:-1129.1,y:155.9},0).wait(1).to({x:-1134.1,y:154.9},0).wait(1).to({x:-1139.2,y:153.9},0).wait(1).to({x:-1144.2,y:152.9},0).wait(1).to({x:-1149.2,y:151.9},0).wait(1).to({x:-1154.3,y:150.9},0).wait(1).to({x:-1159.3,y:149.9},0).wait(1).to({x:-1164.3,y:148.9},0).wait(1).to({x:-1169.4,y:147.9},0).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(422.2,372,250.5,46.9);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/nerve_impulse_canvas_atlas_.png?1483639225339", id:"nerve_impulse_canvas_atlas_"},
		{src:"sounds/nerve_p01_titlewav.mp3?1483639226654", id:"nerve_p01_titlewav"},
		{src:"sounds/nerve_p02_withdrawalReflexwav.mp3?1483639226654", id:"nerve_p02_withdrawalReflexwav"},
		{src:"sounds/nerve_p03_whenANueronwav.mp3?1483639226654", id:"nerve_p03_whenANueronwav"},
		{src:"sounds/nerve_p04_likeDominoeswav.mp3?1483639226654", id:"nerve_p04_likeDominoeswav"},
		{src:"sounds/nerve_p05_whenTheImpulsewav.mp3?1483639226654", id:"nerve_p05_whenTheImpulsewav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;