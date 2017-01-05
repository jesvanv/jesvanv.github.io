(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"galapagos_finches_canvas_atlas_", frames: [[0,1250,253,155],[0,0,1500,900],[457,1200,495,299],[0,902,455,346],[457,902,519,296],[978,902,490,305]]}
];


// symbols:



(lib.Backgroundcopy = function() {
	this.spriteSheet = ss["galapagos_finches_canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Darwinvoyageplacementmap = function() {
	this.spriteSheet = ss["galapagos_finches_canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["galapagos_finches_canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.spriteSheet = ss["galapagos_finches_canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["galapagos_finches_canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.spriteSheet = ss["galapagos_finches_canvas_atlas_"];
	this.gotoAndStop(5);
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


(lib.wing3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AglAiQgBgDAAgEQAAgQAmghQAngiAAAhQAAADgeAeQgeAfgEAAQgJAAgDgHg");
	this.shape.setTransform(9.6,0.3,1,0.026);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgwAhQgCgCAAgFQAAgPAyggQAzghAAAeQAAADgnAdQgnAggHAAQgLAAgDgHg");
	this.shape_1.setTransform(9.3,0.3,1,0.026);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgvAYQAAgLAvgiQAwgjAAAgQAAAEgjAdQgjAfgKAAQgQAAABgQg");
	this.shape_2.setTransform(7.6,0.2,1,0.026);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgTgDQguhHAAgIQAAgGAIgHQADAEAAAJIB4CrIAAAEIgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgdgTgzhQg");
	this.shape_3.setTransform(24.5,0.5,1,0.026);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AB2AEIgCAAIgHAAIgCAAIgTgBIgEAAIgOAAIgXAAIgDAAIgMAAIgKgBIgEAAIgDAAIACAAIgCAAIgDAAIgDAAIgEAAIgCAAIgDgBIgJAAIgCAAIgIAAIgCAAIgOgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCAAIgPAAIgMAAIgGAAIhCgBIB/gBIAzgBIAnADIAcACIAMAAIgBAAIAQABQADABgIAAIgNAAg");
	this.shape_4.setTransform(13.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing3, new cjs.Rectangle(0,0,31.1,0.8), null);


(lib.wing3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgTASIAAgMQAAgVATgLQAUgLAAAVQgUAvgFAAQgMAAgCgNg");
	this.shape.setTransform(19.8,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgaAeIAAgLQAAgWAagZQAbgZAAAdQAAADgTAeQgSAfgCAAQgMAAgCgKg");
	this.shape_1.setTransform(17.9,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgeAhIgCgJQAAgcAggaQAhgZAAAeQAAAFgQAOQgQAOAAARQAAAEgDAGQgGAHgIAAQgLAAgDgJg");
	this.shape_2.setTransform(15.9,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgoApQgBgDgBgEQAAgRAqgqQArgqAAAkQAAAIhFBHQgKAAgEgHg");
	this.shape_3.setTransform(14.4,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgnAmIgBgIQAAgNAognQApgpAAAmQAAAIhDA9QgLAAgCgGg");
	this.shape_4.setTransform(11.7,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgzAtIgBgHQAAgMA0gyQA2gyAAAtQAAAFhaBMQgNAAgCgHg");
	this.shape_5.setTransform(10.5,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgyAfQAAgIAygsQAzgsAAAgQAAAEgmAlQglAogJAAQgRAAAAgRg");
	this.shape_6.setTransform(9,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AguAjIgBgHQAAgJAvgnQAwgoAAAjQAAAFgmAfQgmAfgEAAQgLAAgDgHg");
	this.shape_7.setTransform(7.4,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AhCAiIgCgIQAAgNBEgjQBFgjAAAeQAAAGg5AfQg4AggJAAQgKAAgDgIg");
	this.shape_8.setTransform(8.6,6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgaAWIAAgJQAAgXAagOQAbgOAAAYQAAAHgnAlQgLAAgDgIg");
	this.shape_9.setTransform(16.8,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgeAeQgBgDAAgFQgBgRAggbQAggcABAfQgBACgYAaIgZAbQgKAAgDgGg");
	this.shape_10.setTransform(15.1,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgqAlIgBgJQAAgPArglQAsgnAAAkQAAAFhJBDQgKAAgDgIg");
	this.shape_11.setTransform(14.5,15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgsAkQgCgDAAgEQAAgPAuglQAvglAAAkQAAAFhOA+QgJAAgEgHg");
	this.shape_12.setTransform(13.1,13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AglAiQgBgDAAgEQAAgQAmghQAngiAAAhQAAADgeAeQgeAfgEAAQgJAAgDgHg");
	this.shape_13.setTransform(11.3,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgwAhQgCgCAAgFQAAgPAyggQAzghAAAeQAAADgnAdQgnAggHAAQgLAAgDgHg");
	this.shape_14.setTransform(11,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgvAYQAAgLAvgiQAwgjAAAgQAAAEgjAdQgjAfgKAAQgQAAABgQg");
	this.shape_15.setTransform(9.3,7.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgeAIQgihDAAgaQAAgEABgCIAEgCQARAeAWA+QAZA1A8AhIAAAHQACABgIAAQgvAAgqhVg");
	this.shape_16.setTransform(27.1,17.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgKADIghg+QAAgEADgBIACAAQAWAcAcArQAfAuAAAFIAAADQACAEgHAAQgNAAgjg+g");
	this.shape_17.setTransform(26.7,23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgTgDQguhHAAgIQAAgGAIgHQADAEAAAJIB4CrIAAAEIgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgdgTgzhQg");
	this.shape_18.setTransform(26.1,19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("ABYCLIgEgCQgIABgGgFQgRgCgGgPIgDgJQgGABgGgDQgHgEgDgGIgEgJIgDgBIACAGQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgDgFAAgFIAAgBIgDgEIgBAIIgFgHIADgGQgCgFgBgIQgFACgGgFQgFgEgDgGQgDgJABgGQgKgEgEgLQgBgKABgIIgCgEQgNgCgCgNIAAgDQgHABgFgEQgFgGgBgGIAAgFQgKgFg4gpQBRgmBhgWQAZBBAOBIQAMA8AcA1IgBgBIAQAqQADAHgIADQgHACgGgFIgCACQgEADgFAAQgNgCgGgLg");
	this.shape_19.setTransform(15.3,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing3_1, new cjs.Rectangle(1.7,0,32,30.3), null);


(lib.wing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgPAIQgCgCAAgGQAAgHAFgFQAGgGAIAQQAHgBAFADQAEADAAADQAAAIgNAAQgPAAgFgGg");
	this.shape.setTransform(5,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgKAEIgGgIQAAgOAQAJQARAJAAAEQAAAJgLAAQgJAAgHgJg");
	this.shape_1.setTransform(4.5,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgPAFIgDgKQAAgSASAOQAJAHAKAJQAAAJgOAAQgOAAgGgLg");
	this.shape_2.setTransform(4.6,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgSgEQAAgWASAQQAKAIAKALQAAAIgLABQgbgBAAgVg");
	this.shape_3.setTransform(4.8,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgOAFIgEgQQAAgIAHgBQAIgBAEAMQABAIAKADQAHAEAAAFQAAAKgLAAQgOAAgIgQg");
	this.shape_4.setTransform(5.1,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgLAGIgIgTQAAgMAIgBQAHgCADARQADAHAKALIAIALQAAAEgFADQgDACgCAAQgMAAgJgVg");
	this.shape_5.setTransform(5.9,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgPgKQAAgIAJgGQAIgFAAASQgBAFAHAJQAIAKAAAFQAAADgCACQgDADgEAAQgPAAgHgkg");
	this.shape_6.setTransform(6,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgTAGIgPgpQAAgIAJgDQAIgDABANQAAAHAIATQAHAXASAOIARAMQAAAIgIAAQgaAAgTgpg");
	this.shape_7.setTransform(8.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgSANQgNgfAAgSQAAgIAIgJQAIgJABAUQgBANAFARQAHAUASAVIARATQAAADgCACQgDADgEAAQgXAAgSgrg");
	this.shape_8.setTransform(9,15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgPAGQgOgZgJgbQgBgMAJAAQAIAAADAQQAIAaADAFIAbAjQAVAZAAACQAAAIgJAAQgUAAgag1g");
	this.shape_9.setTransform(10.2,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgSAEIgNgoQAAgJAKABQAIAAACAKQABAFAFAUQAEANAQARIARAQQAAAJgKAAQgXAAgRgqg");
	this.shape_10.setTransform(9.9,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AABAvQgJgRgHgPQgJgUgBgJIAAgaQAAgNAHgLQAIgLACAUQAAAaACANQAAAEAQAfQAQAfAAAJQAAAKgIAAQgEAAgNgWg");
	this.shape_11.setTransform(10.8,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgQAOQgFgWAAgWQAAgZAJgDQAIgDABAqQABAdAMASQAMARAAAFQAAAJgIAAQgVAAgJgtg");
	this.shape_12.setTransform(11.7,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAAAvIgIgfIgJgbQgBgEAAgQQgBgNACgJQADgSAMALQACAHAAANIgBATQABAHAJAeQAKAeAAAKQAAAJgIAAQgHAAgEgSg");
	this.shape_13.setTransform(12.8,7.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgJAVQgDgSgBgSQAAgXALgMQAKgNAAAQQgGAUAAAMQAAAQAGAVQAGAVAAAEQgBAKgIAAQgHAAgHgkg");
	this.shape_14.setTransform(13.9,6.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgOAvIAAgWIADg1IADgMQACgJADgFQAGgOAGABQAHABgBAJIgNAzIAABDIgDAFQgCACgDAAQgHAAgBgVg");
	this.shape_15.setTransform(15.1,6.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgVA6IAAgPQAAgiAJgbIAFgPQACgKADgGQAEgKAJgIQALgKAAARIgKAbQgMAbgBAMIgCAnQgBAbgHAAQgIAAgCgOg");
	this.shape_16.setTransform(16.3,5.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgaA3IAAgGQAAgEARg3IAJgcQAagiABAWIgJAUQgKAVgEAOIgGAhQgHAWgHAAQgIAAgCgFg");
	this.shape_17.setTransform(17.1,4.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AhKCSQgGgpAAgbQAAg0AFgUQAEgRAZhFQAKgaAKgRQAJgOALgLIAagVQAPgIAagMQARgDADASIgCAGIAAAFQgHAJgbAQQgqAZgNAfQgPAfgMA3QgOBCgLAjQgDAPAAA6QAAAHgEAGIgFgtg");
	this.shape_18.setTransform(11.4,19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AhLCJIgCgZQADgWANguQAOgxAGgQIAPgkQAKgXAMgQQBAg7ASAMIgFAoIgOALQghAXgHAKQgKAPgIAUIgLAiQgFAOgMBAQgOA6gRAAQgMAAgFgJg");
	this.shape_19.setTransform(11.3,18.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AhPBjQAAg0AEgVQAEgRAahEQAJgbALgRIAMgQQAPgOAfgNQAlgPAKANIAAAAIgEAbIgGACQgaAFgRAKQgMAGgIAOQgFAHgFAMQgKARgUA9QgGATgRBHQgJAlgKAPQgEghAAgXg");
	this.shape_20.setTransform(11.4,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhFBwQgEgGAAgHQABhXBLhaQANgQAMgKIAngSQAEABADADQgIAPgCAMIgDAWQgZAJgMARQgXAdgFAbQgKAxgFAOQgPAvgSAAQgNAAgEgLg");
	this.shape_21.setTransform(13,11.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AhSBnIAAgKQAAgjADgTIAIgEQgEgGAAgGIAIgaIABAAIAFgEIgCgGIALgeIAAAAQAUgQAPASIAGAGQgIgKgMgSQgJgPANgMQAMgMANAGIgDgOQgEgSASgJQAUgJAIATQAEAKACANQADgUAHgZQAFgVAVAGIAEABQgFAKgBAKIgKBDIAAAtIADAxQgQA7gnBAIgRACIhLAYQgFgmAAgag");
	this.shape_22.setTransform(11.7,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing2, new cjs.Rectangle(2.7,-1.4,17.6,39.7), null);


(lib.wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgLApQgCgIABgIQAAgMAEgfQACgOAJgQQALgRAAAZQgIA9AAAXQAAAMgIAAQgHAAgCgPg");
	this.shape.setTransform(17.4,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgSAKIgBgKQAAgLAJgGQAIgGAAAXIAMAAQALAAgBAIQAAALgOAAQgUAAgEgJg");
	this.shape_1.setTransform(12.9,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgSAKIgEgKQAAgJAOgHQAOgGAAANQAAAEgFADIgCACQAHAEALAAQAGAAAAAEQAAAFgFADQgGADgJAAQgOAAgHgJg");
	this.shape_2.setTransform(11.2,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgQAJQgBgDAAgGQAAgYARALQASALAAAIQAAAFgCACQgEAEgKAAQgNAAgFgIg");
	this.shape_3.setTransform(9.9,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgQAIIgDgLQAAgKACgCQAFgIASAGQACAGAHAHQAFAFAAAGQAAAOgQAAQgOAAgGgNg");
	this.shape_4.setTransform(9,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgJAIIgEgLQABgHAFgHQAHgHAEAOQACAGAEAGQADAGAAAEQAAAJgJAAQgJAAgEgNg");
	this.shape_5.setTransform(7.5,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgRAGIgCgIQAAgJAFgDQAGgDAGAQQAWAAAAAIQAAAJgRAAQgPAAgFgKg");
	this.shape_6.setTransform(10.7,24.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgJBIIgBgOQAAgJABgBQACgFALgKQgagpgDgNIgHgbQgEgQAAgKQAAgHAGgDQAHgDAFANQADAFACANIACASQACALAEAIQADAHAUAbQATAcAAAMQAAAHgGAKQgIANgNAAQgOAAgFgNg");
	this.shape_7.setTransform(23.2,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgRAJQgigfAAgJQAAgWAQARQAJAJAMAQIAkAYQAfATgBAEQABAIgJAAQgWAAgngjg");
	this.shape_8.setTransform(14.8,24.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgQAJQgwgZAAgIQAAgPASAEQASAEAAAPQAAACAXALIAZALIAeAIQAPAEAAAJQAAAIgKAAQgWAAgxgcg");
	this.shape_9.setTransform(13.8,20.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgTAOQg6geAAgOQAAgOAXgBQAXgBAAANQAAAJgWAAIAdARQASAJAVAHIAlAOQAaALAAAEIgCAFQgCADgEAAQgeAAg7ggg");
	this.shape_10.setTransform(14.1,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgVAJQgTgKgUgRQgXgUAAgKQAAgSAWAHQAVAHAAAIQAAAJgMAAQAWATBGAiQAaANAPAJIADAVIAAABQhSgngXgOg");
	this.shape_11.setTransform(14.7,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgMAHQgfgegbgeQABgcAWAYIAqAxIAnAeQAlAdAAAJQgBAJgIAAQgQAAg6g+g");
	this.shape_12.setTransform(13.2,12.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AATApQgZgTgOgQIgagYQgYgXAAgIQAAgMAKAAIBlBLQAAAKgMgBIgDAAIAaAQQATALAAAEQgBADgCACQgDADgEAAQgMAAgegVg");
	this.shape_13.setTransform(13.2,10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAEAzQgTgYgJgUQgKgWgEgNQgEgOAAgTQAAgHABgEIAFgGQAFAAAFAVQABAXAKAUQALAVAZAhIAWAeQAAAJgIAAQgKAAgVgcg");
	this.shape_14.setTransform(15.6,3.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AApA3IgQgTIgQgMQgMgKgIgHIgfgdQgYgZAAgKQAAgkBCBKQAiAkAhAsQAAACgCADQgCADgEAAQgFAAgNgOg");
	this.shape_15.setTransform(14,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgOAGQgVgcgRgdQAAgVARARQAPAQAQAgQAPATAYAYIASATQAAAJgJAAQgRAAgpg6g");
	this.shape_16.setTransform(14.3,6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgIAFIgEggQAAgRALAJQAKAJAAAMQAFAQAAAQIAAANQgCAIgIAAQgGAAgGgig");
	this.shape_17.setTransform(19.1,-5.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgKAFQgIgggFgiQgBgLAKABQAJABACAPIADAQIAEAPIAKAfIAJAaQAAACgGAIIAHAUQAAAJgJAAQgJAAgQhDg");
	this.shape_18.setTransform(16.8,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgOALQgJgbgHgcQAAgKAHgJQAHgJADAVQAGAWAGAOIASApQAOAdAAADQAAAJgJAAQgRAAgTg4g");
	this.shape_19.setTransform(14.9,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AAeApIgQgPQAAAEgIAAQgGAAgcgjQgZghAAgCQAAgUARAPIAnAlQAKAHARAOQAZAWAAAIQgBAJgIAAQgFAAgLgLg");
	this.shape_20.setTransform(15,5.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhAAOQABgFACgBQAEgBANAAQAXAAAXgHQANgDAJgEQAFgBAUgMQAJgEAEABIACAMQgGAKgkALQgpAOgZAAQgUAAAAgKg");
	this.shape_21.setTransform(17.7,29.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgzASQgNgCAAgJQAAgFADgBQAFgBAZAAQANAAAvgLQAkgKAAAJQAAAKhOAUg");
	this.shape_22.setTransform(16.6,27.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("Ag2AUIAAAAQgMgBgEgCQgCgBAAgEQAAgIAHgBIAeAAQAaAAAPgEIAWgIQAJgCAVgIQAIgCAFABIACANQgMAIgyALQgwAKgMAAQgBAAgBgBQgBAAgBAAQAAAAAAAAQgBAAAAgBg");
	this.shape_23.setTransform(16.1,25.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("Ag2AJQgKgFAAgGQAAgDADgCQACgCAEAAIATAEQAUADAFAAQALAAAlgJQAcgHAAAIQAAAHgcAJQgdAJgUAAQgcAAgOgGg");
	this.shape_24.setTransform(14.3,22.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AglAQQgTgDgFgCQgIgEAAgGQAAgCAEgCIAEgDIAXAGIAvAAQAJgCAbgLQAZgHAAAOQAAAHgcAIQgUAGgPABg");
	this.shape_25.setTransform(13.9,19.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AhLACQAAgCADgDQAEgFAHAAIAVADQAWACALAAQAHAAAugIQAegFAAAKQAAAGggAGQgfAIgUAAQhEAAAAgMg");
	this.shape_26.setTransform(14,16.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("Ag4AGQgSgGAAgFQAAgMASAFQAgAKAVAAQARAAASgFQASgFAMAAQANAAAAAJQAAAIhOAJQggAAgVgIg");
	this.shape_27.setTransform(13.7,14.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AglAIQgagSAAgJQAAgVANAMIAUAVQAXAMApAHQAeAFAAAHQAAAEgBABQgFAEgPAAQguAAgigZg");
	this.shape_28.setTransform(12.3,11.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AAJAaQgagPgHgGIgbgiQAAgSAMAMQAIAHAQATIAkATQAfAQAAAGQAAAJgJAAQgFAAgdgPg");
	this.shape_29.setTransform(12.8,7.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AATAhIghgaQgWgOgIgIQgPgNAAgKQAAgJAHgDQAGgEAFAQQABAGALAIIAUAOQA7ArAJAJIABAFQgCAFgHAAQgHAAgZgTg");
	this.shape_30.setTransform(15.2,5.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AACAuQgQgTgMgUQgDgGgGgWQgGgYAAgKIAAgGQABgIAFgBIAAAAQAHgCAEAXQACAFACAOQABANACAFQAJAUAaAdIAYAaQAAAIgIAAQgLAAgVgZg");
	this.shape_31.setTransform(15.8,2.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgQAYQgEgxgBgwQAAg8AKAOQAGAIABAOIgBAYQAAA3ANBEIAPBAQAAACgEADQgDADgCAAQgUAAgKhig");
	this.shape_32.setTransform(16.4,5.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgCCEQgLghgEgeIgEgwIgDgzQAAgzAFgYQACgpAQgRQAFgHAFABQAFABAAAIQAAAFgIAZQgIAbgCAJQgDAdAAAjQAABAAPBBIARA+QAAAJgJAAQgHAAgLgmg");
	this.shape_33.setTransform(18,8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgMBPQgGgsgDgsIAAgkIAEg0IABgWIADgXQAEgXAHgBQAGgBAAASQAAAOgEAlQgEAmAAA0QAAAzAMA5IAOA4QAAALgJAAQgNAAgMhYg");
	this.shape_34.setTransform(18.7,6.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AgNBCQgHg2gCg1QAAgxAFgYQAAgLAEgYQACgOAKgHQAGgEACAFQgCAJAAAOIAAALIgEARQgFAhAAAtQAAA4ANBMIAOBIQAAADgCADQgCADgEAAQgQAAgMhrg");
	this.shape_35.setTransform(21,8.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgNBTQgGgrgDgpQABgMADgkIAEgnQALgvAOgVQAIgMADACQgCAKgBAOQgOAfgFAiQgEAqAAAiQAAApANA+IANA5IgBAFQgDADgFAAQgOAAgMhUg");
	this.shape_36.setTransform(19.6,7.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AAPCOIgHgfQgPgkAAgPQgBgNgHgnQgFgfAAgSIAAggQAAgSAEgMQAAgkALgOQALgNAAAUIgBAJIgEAKQgEAKgFAXQgEAVAAAPQAAARACAFQADANADASQADAXABAIIAEAKIAHBCQAFAhAFAYQgDgFgDgMg");
	this.shape_37.setTransform(22,12.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AA+C/IgPgEQgSAAgNgpQgRAFgOAJIgRALIgIgKIgKgNQgMgQgIgRIgBAAQgTgjgHgkIAAgBIgBgCIgBgLIgBgNIAAgBIAAgEIAAgDIAAgHIAAgFIACgSIAAAAIACgSIABgCIADgQIAAAAIABgBIABgDIABgFIAAgBIABgEIAEgMIACgIIAGgQIAIgSIABgCIAAgBIACgDIAGgNIABgBIAAgGIAMgVIABgBIAAAAIABgCIAOgNIAGgGQAFANAAAgQAAAXAMAfIAWA2IAgBOIADAbQARB4AYAAQAHAAADgEQgDAPgQAAQgFAAgPgEg");
	this.shape_38.setTransform(18.1,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing1, new cjs.Rectangle(5.9,-10.3,22.4,46), null);


(lib.whitefade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1efQMAAAg+fMAq9AAAMAAAA+fg");
	this.shape.setTransform(276,201,2.007,1.005);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitefade, new cjs.Rectangle(0,0,552,402), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BBDDE7","#F5F9ED"],[0,1],-3,-189.3,0.5,34.8).s().p("EgrTAfqMAAAg/UMBWnAAAMAAAA/Ug");
	this.shape.setTransform(275,200,0.992,0.987);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,550,400), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E4142E").ss(0.5,0,1).p("AAtBOQgYgXgWggQgvg9AGgq");
	this.shape.setTransform(200.1,215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E4142E").ss(0.5,0,0,4).p("EA5XAKpIADAXAIVw9QhHBQhIB3QiODuAADCQhbC0hrDGQjXGLhWBcQgeAggxA/Qg4BHgVAYQhZBmhBgCIgtBYQg3Blg2BEQgLAOAJASQAGAKAQATQALAQgGALQgIAPgoAMQhWAag/giQhCgjgVhaQAJhHARhbQAhi2AmhjQALgiAFgnQALhOgggWQgTgEgZgRQgygkgchGAxEAmQhbgjitgyQ7XI9AygUEgwKAIGQgTAJgcAUQg4ApgsA5InBAk");
	this.shape_1.setTransform(305.2,203.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Darwinvoyageplacementmap();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.489,0.489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-63.7,0,797.2,440), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.283,0.283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,140.3,84.8), null);


(lib.sacoast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#594A42","#7F9F3D"],[0,1],106.6,36.7,-7.4,-34.3).s().p("AIBRUIhAgKQhlgrgog/QgRgaAFgSQADgLAWgaQAWgbAEgfQAEgbgJgkQgIgggegYIgGgKQgMgPgggLQgWgHgmgHQgEgZgSgKIg9ghQgogUgVgMQAXhCg4g4QgqgrhSgfQhBgZhigcQg2gQgrgeIgggYQAHgYgBgZIALgIIAVgMIgcgsIAFgYQAKgsgYgvQgVgogogdQg5gogHgKQgZggAmgkQAagZA0gVQA8gVAZgNQARgIAFgUQAEgTgJgQQgHgPgcgpQgXgjgKgWQgdhDA1gwQAkgiBOgdQBxgpAKgFQAZgMgCgbQgCgagVgPQghgZgOgNQgZgZgIgZQgIgYAYgiQAJgOAgghQArgvBHgmQAygbBQgdIAggMIA1gIQC1gdCLgPQALgBAHAHIgEAvIgHACIgMADIASAKQgNClAHDDQAGCXAUDRQADDEAJEkIgLHXQgHEPABDHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sacoast, new cjs.Rectangle(-53.4,-110.9,106.9,221.9), null);


(lib.islands_sea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#89C3E0","#F6F9EC","#89C3E0"],[0,0.447,1],-239.1,0,261.4,0).s().p("EgrcAK1IAA1oMBW5AAAIAAVog");
	this.shape.setTransform(0,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.islands_sea, new cjs.Rectangle(-278.1,-64.6,556.3,138.5), null);


(lib.infoboxbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(2,1,1).p("Aw8w8MAh5AAAMAAAAh5Mgh5AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE88F").s().p("Aw8Q9MAAAgh5MAh5AAAMAAAAh5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.infoboxbg, new cjs.Rectangle(-109.5,-109.5,219,219), null);


(lib.galapagosmap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_206 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(206).call(this.frame_206).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EAW4BAOIIPoNIHsHuIoPIMg");
	var mask_graphics_60 = new cjs.Graphics().p("EAWSA/rIIRoRIISIRIoRIRg");
	var mask_graphics_61 = new cjs.Graphics().p("EAVuA/HIIToTII1I1IoUITg");
	var mask_graphics_62 = new cjs.Graphics().p("EAVJA+kIIWoWIJYJYIoWIWg");
	var mask_graphics_63 = new cjs.Graphics().p("EAUlA+AIIYoYIJ7J8IoYIYg");
	var mask_graphics_64 = new cjs.Graphics().p("EAUAA9dIIboaIKeKeIoaIbg");
	var mask_graphics_65 = new cjs.Graphics().p("EATcA86IIdodILCLCIodIdg");
	var mask_graphics_66 = new cjs.Graphics().p("EAS3A8WIIgofILlLlIogIgg");
	var mask_graphics_67 = new cjs.Graphics().p("EASSA7zIIioiIMJMJIoiIig");
	var mask_graphics_68 = new cjs.Graphics().p("EARuA7QIIkolIMsMsIokIlg");
	var mask_graphics_69 = new cjs.Graphics().p("EARJA6sIInonINPNQIomIng");
	var mask_graphics_70 = new cjs.Graphics().p("EAQlA6JIIpopINzNyIopIpg");
	var mask_graphics_71 = new cjs.Graphics().p("EAQAA5lIIsorIOWOWIosIrg");
	var mask_graphics_72 = new cjs.Graphics().p("EAPcA5CIIuouIO5O5IouIug");
	var mask_graphics_73 = new cjs.Graphics().p("EAO3A4fIIxoxIPcPdIowIwg");
	var mask_graphics_74 = new cjs.Graphics().p("EAOTA37IIyozIQAQBIoyIyg");
	var mask_graphics_75 = new cjs.Graphics().p("EANuA3YII1o1IQkQjIo2I1g");
	var mask_graphics_76 = new cjs.Graphics().p("EANJA20II4o3IRHRHIo4I3g");
	var mask_graphics_77 = new cjs.Graphics().p("EAMlA2RII6o6IRqRqIo6I6g");
	var mask_graphics_78 = new cjs.Graphics().p("EAMAA1uII9o9ISNSOIo8I8g");
	var mask_graphics_79 = new cjs.Graphics().p("EALcA1KII/o/ISxSxIo/I/g");
	var mask_graphics_80 = new cjs.Graphics().p("EAK3A0nIJCpBITUTUIpCJBg");
	var mask_graphics_81 = new cjs.Graphics().p("EAKTA0DIJDpDIT4T3IpEJEg");
	var mask_graphics_82 = new cjs.Graphics().p("EAJuAzgIJGpGIUbUbIpGJGg");
	var mask_graphics_83 = new cjs.Graphics().p("EAJKAy9IJIpJIU+U+IpIJJg");
	var mask_graphics_84 = new cjs.Graphics().p("EAIlAyZIJLpLIViViIpMJLg");
	var mask_graphics_85 = new cjs.Graphics().p("EAIAAx2IJOpNIWFWEIpOJOg");
	var mask_graphics_86 = new cjs.Graphics().p("EAHcAxTIJQpQIWoWoIpQJQg");
	var mask_graphics_87 = new cjs.Graphics().p("EAG3AwvIJTpSIXLXMIpSJSg");
	var mask_graphics_88 = new cjs.Graphics().p("EAGTAwMIJUpVIXvXvIpUJVg");
	var mask_graphics_89 = new cjs.Graphics().p("EAFuAvoIJXpXIYTYTIpYJXg");
	var mask_graphics_90 = new cjs.Graphics().p("EAFKAvFIJZpaIY2Y2IpaJag");
	var mask_graphics_91 = new cjs.Graphics().p("EAElAuiIJcpcIZZZZIpcJcg");
	var mask_graphics_92 = new cjs.Graphics().p("EAEBAt+IJepeIZ8Z8IpeJfg");
	var mask_graphics_93 = new cjs.Graphics().p("EADcAtbIJhphIafagIpgJhg");
	var mask_graphics_94 = new cjs.Graphics().p("EAC3As3IJkpjIbDbDIpkJkg");
	var mask_graphics_95 = new cjs.Graphics().p("EACTAsUIJmpmIbmbnIpmJmg");
	var mask_graphics_96 = new cjs.Graphics().p("EABuArxIJopoIcKcJIpoJog");
	var mask_graphics_97 = new cjs.Graphics().p("EABKArNIJqpqIctctIpqJqg");
	var mask_graphics_98 = new cjs.Graphics().p("EAAlAqqIJtptIdQdQIptJtg");
	var mask_graphics_99 = new cjs.Graphics().p("EAABAqHIJvpwId0d0IpwJvg");
	var mask_graphics_100 = new cjs.Graphics().p("EgAjApjIJxpyIeXeYIpyJxg");
	var mask_graphics_101 = new cjs.Graphics().p("EgBIApAIJ0p0Ie6e6Ip0J0g");
	var mask_graphics_102 = new cjs.Graphics().p("EgBsAocIJ2p2IfdfeIp2J2g");
	var mask_graphics_103 = new cjs.Graphics().p("EgCRAn5IJ4p5MAgCAgBIp6J5g");
	var mask_graphics_104 = new cjs.Graphics().p("EgC1AnWIJ6p8MAglAglIp8J7g");
	var mask_graphics_105 = new cjs.Graphics().p("EgDaAmyIJ9p+MAhIAhIIp+J+g");
	var mask_graphics_106 = new cjs.Graphics().p("EgD+AmPIJ/qAMAhrAhrIqAKAg");
	var mask_graphics_107 = new cjs.Graphics().p("EgEjAlrIKCqCMAiOAiOIqCKDg");
	var mask_graphics_108 = new cjs.Graphics().p("EgFHAlIIKEqFMAiyAiyIqGKFg");
	var mask_graphics_109 = new cjs.Graphics().p("EgFsAklIKHqIMAjVAjVIqIKIg");
	var mask_graphics_110 = new cjs.Graphics().p("EgGRAkBIKJqKMAj5Aj5IqKKKg");
	var mask_graphics_111 = new cjs.Graphics().p("EgG1AjeIKLqNMAkcAkcIqMKNg");
	var mask_graphics_112 = new cjs.Graphics().p("EgHaAi7IKOqPMAk/Ak/IqPKPg");
	var mask_graphics_113 = new cjs.Graphics().p("EgH+AiXIKQqRMAljAljIqSKRg");
	var mask_graphics_114 = new cjs.Graphics().p("EgIjAh0IKTqUMAmGAmGIqUKUg");
	var mask_graphics_115 = new cjs.Graphics().p("EgJHAhQIKVqWMAmpAmqIqWKWg");
	var mask_graphics_116 = new cjs.Graphics().p("EgJsAgtIKYqZMAnMAnNIqYKZg");
	var mask_graphics_117 = new cjs.Graphics().p("EgKQAgKIKaqbMAnvAnwIqbKbg");
	var mask_graphics_118 = new cjs.Graphics().p("Aq1fmIKdqdMAoTAoTIqeKeg");
	var mask_graphics_119 = new cjs.Graphics().p("ArafDIKgqgMAo2Ao3IqgKgg");
	var mask_graphics_120 = new cjs.Graphics().p("Ar+efIKiqiMApZApaIqiKjg");
	var mask_graphics_121 = new cjs.Graphics().p("Asjd8IKlqlMAp8Ap+IqkKlg");
	var mask_graphics_122 = new cjs.Graphics().p("AtHdZIKnqnMAqfAqgIqnKng");
	var mask_graphics_123 = new cjs.Graphics().p("Atsc1IKqqpMArDArEIqqKpg");
	var mask_graphics_124 = new cjs.Graphics().p("AuQcSIKsqsMArmArnIqsKsg");
	var mask_graphics_125 = new cjs.Graphics().p("Au1bvIKuqvMAsKAsLIquKug");
	var mask_graphics_126 = new cjs.Graphics().p("AvabLIKxqxMAstAsvIqxKwg");
	var mask_graphics_127 = new cjs.Graphics().p("Av+aoIKzqzMAtRAtRIq0Kzg");
	var mask_graphics_128 = new cjs.Graphics().p("AwjaEIK2q1MAt0At1Iq2K1g");
	var mask_graphics_129 = new cjs.Graphics().p("AxHZhIK4q4MAuXAuYIq4K4g");
	var mask_graphics_130 = new cjs.Graphics().p("AxsY+IK7q7MAu6Au8Iq6K6g");
	var mask_graphics_131 = new cjs.Graphics().p("AyQYaIK9q9MAvdAvfIq9K9g");
	var mask_graphics_132 = new cjs.Graphics().p("Ay1X3IK/rAMAwCAwDIrAK/g");
	var mask_graphics_133 = new cjs.Graphics().p("AzZXTILBrBMAwlAwlIrCLCg");
	var mask_graphics_134 = new cjs.Graphics().p("Az+WwILErEMAxIAxJIrELEg");
	var mask_graphics_135 = new cjs.Graphics().p("A0jWNILHrHMAxrAxsIrGLHg");
	var mask_graphics_136 = new cjs.Graphics().p("A1HVpILJrJMAyOAyQIrJLJg");
	var mask_graphics_137 = new cjs.Graphics().p("A1sVGILMrMMAyyAyzIrMLMg");
	var mask_graphics_138 = new cjs.Graphics().p("A2QUiILOrNMAzVAzWIrOLOg");
	var mask_graphics_139 = new cjs.Graphics().p("A21T/ILRrQMAz4Az6IrQLQg");
	var mask_graphics_140 = new cjs.Graphics().p("A3ZTcILSrTMA0cA0dIrTLTg");
	var mask_graphics_141 = new cjs.Graphics().p("A3+S4ILVrVMA0/A1BIrVLVg");
	var mask_graphics_142 = new cjs.Graphics().p("A4iSVILXrYMA1jA1kIrYLYg");
	var mask_graphics_143 = new cjs.Graphics().p("A5HRyILaraMA2GA2HIraLag");
	var mask_graphics_144 = new cjs.Graphics().p("A5sROILdrcMA2pA2qIrcLdg");
	var mask_graphics_145 = new cjs.Graphics().p("A6QQrILfrfMA3MA3OIrfLfg");
	var mask_graphics_146 = new cjs.Graphics().p("A61QHILirhMA3vA3xIrhLig");
	var mask_graphics_147 = new cjs.Graphics().p("A7ZPkILjrkMA4UA4VIrkLkg");
	var mask_graphics_148 = new cjs.Graphics().p("A7+PBILmrmMA43A43IrmLmg");
	var mask_graphics_149 = new cjs.Graphics().p("A8iOdILoroMA5aA5bIroLog");
	var mask_graphics_150 = new cjs.Graphics().p("A9HN6ILrrrMA59A5+IrrLrg");
	var mask_graphics_151 = new cjs.Graphics().p("A9sNWILurtMA6hA6iIruLtg");
	var mask_graphics_152 = new cjs.Graphics().p("A+QMzILwrwMA7EA7GIrwLvg");
	var mask_graphics_153 = new cjs.Graphics().p("A+1MQILzrzMA7nA7pIryLyg");
	var mask_graphics_154 = new cjs.Graphics().p("A/ZLsIL0rzMA8LA8LIr1L0g");
	var mask_graphics_155 = new cjs.Graphics().p("A/+LJIL3r2MA8uA8uIr3L3g");
	var mask_graphics_156 = new cjs.Graphics().p("EggiAKmIL5r5MA9SA9SIr6L5g");
	var mask_graphics_157 = new cjs.Graphics().p("EghHAKCIL8r7MA91A91Ir8L8g");
	var mask_graphics_158 = new cjs.Graphics().p("EghrAJfIL+r+MA+YA+ZIr+L+g");
	var mask_graphics_159 = new cjs.Graphics().p("EgiQAI7IMBr/MA+7A+7IsBMBg");
	var mask_graphics_160 = new cjs.Graphics().p("Egi1AIYIMEsCMA/eA/fIsDMDg");
	var mask_graphics_161 = new cjs.Graphics().p("EgjZAH1IMGsFMBACBACIsGMGg");
	var mask_graphics_162 = new cjs.Graphics().p("Egj+AHRIMIsHMBAmBAmIsIMIg");
	var mask_graphics_163 = new cjs.Graphics().p("EgkiAGuIMKsKMBBJBBJIsKMLg");
	var mask_graphics_164 = new cjs.Graphics().p("EglHAGKIMNsLMBBsBBsIsNMNg");
	var mask_graphics_165 = new cjs.Graphics().p("EglrAFnIMPsOMBCPBCQIsPMPg");
	var mask_graphics_166 = new cjs.Graphics().p("EgmQAFEIMSsRMBCzBCzIsSMSg");
	var mask_graphics_167 = new cjs.Graphics().p("Egm1AEgIMVsTMBDWBDXIsUMUg");
	var mask_graphics_168 = new cjs.Graphics().p("EgnZAD9IMXsWMBD5BD6IsXMXg");
	var mask_graphics_169 = new cjs.Graphics().p("Egn+ADaIMZsYMBEdBEdIsZMZg");
	var mask_graphics_170 = new cjs.Graphics().p("EgoiAC2IMbsaMBFABFAIsbMcg");
	var mask_graphics_171 = new cjs.Graphics().p("EgpAACTIMesdMBFjBFkIseMeg");
	var mask_graphics_172 = new cjs.Graphics().p("EgpTABvIMgsfMBGHBGHIsgMhg");
	var mask_graphics_173 = new cjs.Graphics().p("EgpmABMIMjsiMBGqBGrIsjMig");
	var mask_graphics_174 = new cjs.Graphics().p("Egp5AApIMlskMBHOBHNIslMlg");
	var mask_graphics_175 = new cjs.Graphics().p("EgqMAAFIMosmMBHxBHxIsoMng");
	var mask_graphics_176 = new cjs.Graphics().p("EgqfgAdIMqsqMBIVBIUIsqMqg");
	var mask_graphics_177 = new cjs.Graphics().p("EgqygBBIMtssMBI4BI4IstMsg");
	var mask_graphics_178 = new cjs.Graphics().p("EgrEgBkIMusvMBJbBJcIsuMug");
	var mask_graphics_179 = new cjs.Graphics().p("EgrXgCHIMxsyMBJ+BJ/IsxMxg");
	var mask_graphics_180 = new cjs.Graphics().p("EgrqgCrIM0szMBKhBKiIs0Mzg");
	var mask_graphics_181 = new cjs.Graphics().p("Egr9gDOIM2s2MBLFBLFIs2M2g");
	var mask_graphics_182 = new cjs.Graphics().p("EgsQgDxIM5s5MBLoBLpIs5M4g");
	var mask_graphics_183 = new cjs.Graphics().p("EgsjgEVIM7s7MBMMBMMIs7M7g");
	var mask_graphics_184 = new cjs.Graphics().p("Egs2gE4IM+s+MBMvBMwIs+M9g");
	var mask_graphics_185 = new cjs.Graphics().p("EgtJgFcINAs/MBNTBNSItANAg");
	var mask_graphics_186 = new cjs.Graphics().p("EgtbgF/INCtCMBN1BN2ItCNCg");
	var mask_graphics_187 = new cjs.Graphics().p("EgtugGiINEtFMBOZBOZItENFg");
	var mask_graphics_188 = new cjs.Graphics().p("EguBgHGINHtHMBO8BO9ItHNHg");
	var mask_graphics_189 = new cjs.Graphics().p("EguUgHpINJtKMBPgBPgItJNKg");
	var mask_graphics_190 = new cjs.Graphics().p("EgungININMtLMBQDBQDItMNMg");
	var mask_graphics_191 = new cjs.Graphics().p("Egu6gIwINOtOMBQnBQnItONOg");
	var mask_graphics_192 = new cjs.Graphics().p("EgvNgJTINRtRMBRKBRKItRNRg");
	var mask_graphics_193 = new cjs.Graphics().p("EgvggJ3INUtTMBRtBRuItUNTg");
	var mask_graphics_194 = new cjs.Graphics().p("EgvzgKaINWtWMBSRBSRItWNWg");
	var mask_graphics_195 = new cjs.Graphics().p("EgwFgK9INYtYMBSzBS0ItYNYg");
	var mask_graphics_196 = new cjs.Graphics().p("EgwYgLhINataMBTXBTXItaNbg");
	var mask_graphics_197 = new cjs.Graphics().p("EgwrgMEINdtdMBT6BT7ItdNdg");
	var mask_graphics_198 = new cjs.Graphics().p("Egw+gMoINftfMBUeBUeItfNgg");
	var mask_graphics_199 = new cjs.Graphics().p("EgxRgNLINitiMBVBBVCItiNhg");
	var mask_graphics_200 = new cjs.Graphics().p("EgxkgNuINktlMBVlBVlItkNkg");
	var mask_graphics_201 = new cjs.Graphics().p("Egx3gOSINntmMBWIBWIItnNmg");
	var mask_graphics_202 = new cjs.Graphics().p("EgyKgO1INptpMBWsBWrItpNpg");
	var mask_graphics_203 = new cjs.Graphics().p("EgycgPZINrtrMBXOBXPItrNrg");
	var mask_graphics_204 = new cjs.Graphics().p("EgyvgP8INttuMBXyBXzIttNtg");
	var mask_graphics_205 = new cjs.Graphics().p("EgzCgQfINwtxMBYVBYWItwNwg");
	var mask_graphics_206 = new cjs.Graphics().p("EgzVgRDINztyMBY4BY5ItzNyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:248.3,y:460.3}).wait(1).to({graphics:mask_graphics_60,x:248.5,y:460.4}).wait(1).to({graphics:mask_graphics_61,x:248.6,y:460.4}).wait(1).to({graphics:mask_graphics_62,x:248.7,y:460.4}).wait(1).to({graphics:mask_graphics_63,x:248.8,y:460.4}).wait(1).to({graphics:mask_graphics_64,x:248.9,y:460.4}).wait(1).to({graphics:mask_graphics_65,x:249.1,y:460.4}).wait(1).to({graphics:mask_graphics_66,x:249.2,y:460.4}).wait(1).to({graphics:mask_graphics_67,x:249.3,y:460.4}).wait(1).to({graphics:mask_graphics_68,x:249.4,y:460.4}).wait(1).to({graphics:mask_graphics_69,x:249.5,y:460.4}).wait(1).to({graphics:mask_graphics_70,x:249.7,y:460.3}).wait(1).to({graphics:mask_graphics_71,x:249.8,y:460.3}).wait(1).to({graphics:mask_graphics_72,x:249.9,y:460.3}).wait(1).to({graphics:mask_graphics_73,x:250,y:460.3}).wait(1).to({graphics:mask_graphics_74,x:250.1,y:460.3}).wait(1).to({graphics:mask_graphics_75,x:250.3,y:460.3}).wait(1).to({graphics:mask_graphics_76,x:250.4,y:460.3}).wait(1).to({graphics:mask_graphics_77,x:250.5,y:460.3}).wait(1).to({graphics:mask_graphics_78,x:250.6,y:460.3}).wait(1).to({graphics:mask_graphics_79,x:250.8,y:460.3}).wait(1).to({graphics:mask_graphics_80,x:250.9,y:460.3}).wait(1).to({graphics:mask_graphics_81,x:251,y:460.3}).wait(1).to({graphics:mask_graphics_82,x:251.1,y:460.3}).wait(1).to({graphics:mask_graphics_83,x:251.2,y:460.3}).wait(1).to({graphics:mask_graphics_84,x:251.4,y:460.3}).wait(1).to({graphics:mask_graphics_85,x:251.5,y:460.3}).wait(1).to({graphics:mask_graphics_86,x:251.6,y:460.3}).wait(1).to({graphics:mask_graphics_87,x:251.7,y:460.3}).wait(1).to({graphics:mask_graphics_88,x:251.8,y:460.3}).wait(1).to({graphics:mask_graphics_89,x:252,y:460.3}).wait(1).to({graphics:mask_graphics_90,x:252.1,y:460.3}).wait(1).to({graphics:mask_graphics_91,x:252.2,y:460.3}).wait(1).to({graphics:mask_graphics_92,x:252.3,y:460.3}).wait(1).to({graphics:mask_graphics_93,x:252.4,y:460.3}).wait(1).to({graphics:mask_graphics_94,x:252.6,y:460.3}).wait(1).to({graphics:mask_graphics_95,x:252.7,y:460.3}).wait(1).to({graphics:mask_graphics_96,x:252.8,y:460.2}).wait(1).to({graphics:mask_graphics_97,x:252.9,y:460.2}).wait(1).to({graphics:mask_graphics_98,x:253,y:460.2}).wait(1).to({graphics:mask_graphics_99,x:253.2,y:460.2}).wait(1).to({graphics:mask_graphics_100,x:253.3,y:460.2}).wait(1).to({graphics:mask_graphics_101,x:253.4,y:460.2}).wait(1).to({graphics:mask_graphics_102,x:253.5,y:460.2}).wait(1).to({graphics:mask_graphics_103,x:253.7,y:460.2}).wait(1).to({graphics:mask_graphics_104,x:253.8,y:460.2}).wait(1).to({graphics:mask_graphics_105,x:253.9,y:460.2}).wait(1).to({graphics:mask_graphics_106,x:254,y:460.2}).wait(1).to({graphics:mask_graphics_107,x:254.1,y:460.2}).wait(1).to({graphics:mask_graphics_108,x:254.3,y:460.2}).wait(1).to({graphics:mask_graphics_109,x:254.4,y:460.2}).wait(1).to({graphics:mask_graphics_110,x:254.5,y:460.2}).wait(1).to({graphics:mask_graphics_111,x:254.6,y:460.2}).wait(1).to({graphics:mask_graphics_112,x:254.7,y:460.2}).wait(1).to({graphics:mask_graphics_113,x:254.9,y:460.2}).wait(1).to({graphics:mask_graphics_114,x:255,y:460.2}).wait(1).to({graphics:mask_graphics_115,x:255.1,y:460.2}).wait(1).to({graphics:mask_graphics_116,x:255.2,y:460.2}).wait(1).to({graphics:mask_graphics_117,x:255.3,y:460.2}).wait(1).to({graphics:mask_graphics_118,x:255.5,y:460.2}).wait(1).to({graphics:mask_graphics_119,x:255.6,y:460.2}).wait(1).to({graphics:mask_graphics_120,x:255.7,y:460.2}).wait(1).to({graphics:mask_graphics_121,x:255.8,y:460.2}).wait(1).to({graphics:mask_graphics_122,x:255.9,y:460.1}).wait(1).to({graphics:mask_graphics_123,x:256.1,y:460.1}).wait(1).to({graphics:mask_graphics_124,x:256.2,y:460.1}).wait(1).to({graphics:mask_graphics_125,x:256.3,y:460.1}).wait(1).to({graphics:mask_graphics_126,x:256.4,y:460.1}).wait(1).to({graphics:mask_graphics_127,x:256.6,y:460.1}).wait(1).to({graphics:mask_graphics_128,x:256.7,y:460.1}).wait(1).to({graphics:mask_graphics_129,x:256.8,y:460.1}).wait(1).to({graphics:mask_graphics_130,x:256.9,y:460.1}).wait(1).to({graphics:mask_graphics_131,x:257,y:460.1}).wait(1).to({graphics:mask_graphics_132,x:257.2,y:460.1}).wait(1).to({graphics:mask_graphics_133,x:257.3,y:460.1}).wait(1).to({graphics:mask_graphics_134,x:257.4,y:460.1}).wait(1).to({graphics:mask_graphics_135,x:257.5,y:460.1}).wait(1).to({graphics:mask_graphics_136,x:257.6,y:460.1}).wait(1).to({graphics:mask_graphics_137,x:257.8,y:460.1}).wait(1).to({graphics:mask_graphics_138,x:257.9,y:460.1}).wait(1).to({graphics:mask_graphics_139,x:258,y:460.1}).wait(1).to({graphics:mask_graphics_140,x:258.1,y:460.1}).wait(1).to({graphics:mask_graphics_141,x:258.2,y:460.1}).wait(1).to({graphics:mask_graphics_142,x:258.4,y:460.1}).wait(1).to({graphics:mask_graphics_143,x:258.5,y:460.1}).wait(1).to({graphics:mask_graphics_144,x:258.6,y:460.1}).wait(1).to({graphics:mask_graphics_145,x:258.7,y:460.1}).wait(1).to({graphics:mask_graphics_146,x:258.8,y:460.1}).wait(1).to({graphics:mask_graphics_147,x:259,y:460.1}).wait(1).to({graphics:mask_graphics_148,x:259.1,y:460}).wait(1).to({graphics:mask_graphics_149,x:259.2,y:460}).wait(1).to({graphics:mask_graphics_150,x:259.3,y:460}).wait(1).to({graphics:mask_graphics_151,x:259.5,y:460}).wait(1).to({graphics:mask_graphics_152,x:259.6,y:460}).wait(1).to({graphics:mask_graphics_153,x:259.7,y:460}).wait(1).to({graphics:mask_graphics_154,x:259.8,y:460}).wait(1).to({graphics:mask_graphics_155,x:259.9,y:460}).wait(1).to({graphics:mask_graphics_156,x:260.1,y:460}).wait(1).to({graphics:mask_graphics_157,x:260.2,y:460}).wait(1).to({graphics:mask_graphics_158,x:260.3,y:460}).wait(1).to({graphics:mask_graphics_159,x:260.4,y:460}).wait(1).to({graphics:mask_graphics_160,x:260.5,y:460}).wait(1).to({graphics:mask_graphics_161,x:260.7,y:460}).wait(1).to({graphics:mask_graphics_162,x:260.8,y:460}).wait(1).to({graphics:mask_graphics_163,x:260.9,y:460}).wait(1).to({graphics:mask_graphics_164,x:261,y:460}).wait(1).to({graphics:mask_graphics_165,x:261.1,y:460}).wait(1).to({graphics:mask_graphics_166,x:261.3,y:460}).wait(1).to({graphics:mask_graphics_167,x:261.4,y:460}).wait(1).to({graphics:mask_graphics_168,x:261.5,y:460}).wait(1).to({graphics:mask_graphics_169,x:261.6,y:460}).wait(1).to({graphics:mask_graphics_170,x:261.7,y:460}).wait(1).to({graphics:mask_graphics_171,x:261.2,y:460}).wait(1).to({graphics:mask_graphics_172,x:259.6,y:460}).wait(1).to({graphics:mask_graphics_173,x:257.9,y:460}).wait(1).to({graphics:mask_graphics_174,x:256.3,y:459.9}).wait(1).to({graphics:mask_graphics_175,x:254.6,y:459.9}).wait(1).to({graphics:mask_graphics_176,x:253,y:459.9}).wait(1).to({graphics:mask_graphics_177,x:251.3,y:459.9}).wait(1).to({graphics:mask_graphics_178,x:249.7,y:459.9}).wait(1).to({graphics:mask_graphics_179,x:248,y:459.9}).wait(1).to({graphics:mask_graphics_180,x:246.4,y:459.9}).wait(1).to({graphics:mask_graphics_181,x:244.7,y:459.9}).wait(1).to({graphics:mask_graphics_182,x:243.1,y:459.9}).wait(1).to({graphics:mask_graphics_183,x:241.5,y:459.9}).wait(1).to({graphics:mask_graphics_184,x:239.8,y:459.9}).wait(1).to({graphics:mask_graphics_185,x:238.2,y:459.9}).wait(1).to({graphics:mask_graphics_186,x:236.5,y:459.9}).wait(1).to({graphics:mask_graphics_187,x:234.9,y:459.9}).wait(1).to({graphics:mask_graphics_188,x:233.2,y:459.9}).wait(1).to({graphics:mask_graphics_189,x:231.6,y:459.9}).wait(1).to({graphics:mask_graphics_190,x:229.9,y:459.9}).wait(1).to({graphics:mask_graphics_191,x:228.3,y:459.9}).wait(1).to({graphics:mask_graphics_192,x:226.6,y:459.9}).wait(1).to({graphics:mask_graphics_193,x:225,y:459.9}).wait(1).to({graphics:mask_graphics_194,x:223.3,y:459.9}).wait(1).to({graphics:mask_graphics_195,x:221.7,y:459.9}).wait(1).to({graphics:mask_graphics_196,x:220,y:459.9}).wait(1).to({graphics:mask_graphics_197,x:218.4,y:459.9}).wait(1).to({graphics:mask_graphics_198,x:216.8,y:459.9}).wait(1).to({graphics:mask_graphics_199,x:215.1,y:459.8}).wait(1).to({graphics:mask_graphics_200,x:213.5,y:459.8}).wait(1).to({graphics:mask_graphics_201,x:211.8,y:459.8}).wait(1).to({graphics:mask_graphics_202,x:210.2,y:459.8}).wait(1).to({graphics:mask_graphics_203,x:208.5,y:459.8}).wait(1).to({graphics:mask_graphics_204,x:206.9,y:459.8}).wait(1).to({graphics:mask_graphics_205,x:205.2,y:459.8}).wait(1).to({graphics:mask_graphics_206,x:203.6,y:459.8}).wait(1));

	// path
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E4142E").ss(3,0,1).p("AWYYzIgGgFQmXl5ovpGQxjySr+wR");
	this.shape.setTransform(227.2,663.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E4142E").ss(3,0,0,4).p("EgavhzKQg2h5hvjMQjemZkZmcQluoZmYnPEAXxg7rIlzl3EAxcCUoQoLg+nFjvQxnpgli33QCey6EZ4XUAIzgwkAKIgaXQDDpMBVqQQCz01oil9QlChCmrko");
	this.shape_1.setTransform(255.4,1241.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},59).wait(148));

	// FlashAICB
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAGgFALgCIAUgCQAGgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAGQgDACgBAHIgMAAQAAgPAKgFQAJgHALABQAOAAAIAFQAJAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgFAAIgEAAQgGAAgEgEQgBgDgBgEQgEAFgIAEQgGAEgJgBQgLAAgHgGgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFgBgMIAAgKIgGACg");
	this.shape_2.setTransform(337.1,346.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAeQgKgLABgRQgBgTAKgMQALgMAOABQANgBAIAHQAJAGABAQIgMAAQgBgHgFgFQgEgFgJAAQgLAAgGANQgEAHAAALQABAMAFAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgKAHQgJAHgNAAQgOAAgJgLg");
	this.shape_3.setTransform(329.1,346.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_4.setTransform(323.6,344.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKgBgFAHQgFAGAAAJIAAAsg");
	this.shape_5.setTransform(319.9,346.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAPABQAJAAAHADQAIAEAEAGQAEAHABAHQACAFAAAMIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_6.setTransform(312.8,346.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAnAoIAAg1QAAgJgEgCQgEgDgFAAQgIAAgGAFQgFAFAAANIAAAsIgNAAIAAgyQAAgIgBgEQgDgGgJAAQgHABgGAFQgGAGAAAPIAAApIgOAAIAAhOIANAAIAAALIAJgHQAGgFAJAAQAJAAAGAFQACACADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAGAAALIAAAzg");
	this.shape_7.setTransform(302.5,346.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAgA2IgMggIgoAAIgMAgIgPAAIAohrIAQAAIAnBrgAAQAKIgQgvIgRAvIAhAAg");
	this.shape_8.setTransform(291.3,344.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgHgKAAQgHAAgHAGQgGAFgBAPIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgEAJgBQAQABAHALQADAHAAAKIAAAzg");
	this.shape_9.setTransform(329,327.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_10.setTransform(322.7,328.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQAAAGABAEQAEAHAJAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_11.setTransform(316.5,329.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_12.setTransform(308.2,329.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_13.setTransform(299,327.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("EAozAN8QghgegzgqQgUgQAAgHQAAgpAMgTQATghA8gSQCcgvHeAuIBKBEQAdAcAAALQABASgmAiQggAdgiATgACdM3QgKgWAEgcQACgOAEgOQAAhEANgUQAOgWAzgIQAigFB7gLQCMgQCYgfQgHgdgmhOQghhBAAgwQAAi7EEgEQDPgDFrByQGfCDGfDLQAFAYgJAbQgVA2hOAQQj0ALifAPQiaARhnAJQhKBKh8gFQrAghg3ANQgMADABAGIALANQARATgjANQgOAFgoAGQg1AHg5AAQitAAgihFgAvOEGIg+gJQAAgFgJgLQgIgKgBgzQABgzAegcQAygwCHgDIBWgrQmXgmhoinQg0hVAdh1IgVAKQhhAohtAEQhDgLnaiDIobiVQhgAYhLAnQhXA0grATQhIAhhUAAIAAAAQgWAhgNAQQgiApg9AAQgbAAgWgDIgCADIgEgEQgQgCgMgEIgUgLQAAgGgIgLQgFgFgCgQIgRgPQgUgRAAgIQABgfA0g0QAUgyAugwQBnhtC+g2QBmgdB3gLQCIgfCBAKQHUAKEbAuQDdAkCeBFQBCAcBkAzQAyAMAiAQQAiAQASAXQCIA4CpAhQGeC9ERCgQDvCNABAjQAAAZglApQgrAwg7AUQjzAYlzAqIlBAmQg1AAhKgJgA3Xk5QgGgHgBgXIAHAGQAKAJgCALQgBAHgDAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_14.setTransform(457.8,-427.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EAQSDBdQhiiHgIjEQgDg+AGhUQAHheAAgPQAAlnAfiWQAXhwBHhgQBriRAyhkQBwjeBvmPQAYhWAph0QAwiBAWg/IARg0IADgcQBorCBnrpQDP3SAAjpQAAg2AOikQAMiYgChXQgIkbiihpQi+h6hlhCQiyh0hwhWQhkhMhEhCQkqgEgIgKQgLgRgrghQgwgngbggQgjgog7gjQgngWhLggQgwgWhbhrQhfh2gagfQgegjgWglQgnhBgNgTQgggwAbgaQAugeAUgaQAagfgXg2QgqhKgWg4QgSgziijzQihjwgEAIQAohbhdjxQhSjXhRhhQgggngZhMQgXhMgHhVQgGhfhyifQiUjKgRgkIg/iFQgagphLg0Qg6gohGgQQhSgUhEglQhZgzAcgcQAEgGBTgkQAqgRgOgrQgGgPhAh8QgqhPgEgxQADhCgJhKQgLhbAygxQBKg3AqgwQApgrBBg6QA1gvAggpQAmgygUhBQgjhMgSgrQgRgrhmhWQhZhLAKgWQAPggAHgUQAKgfAKhJQAJg9gBhHQgChVADgpQAEg4AagHQAlgKATgnIAjhJQAJgTAagvQCBjoAyhKQB0imCAhJQBNgrAdhCQAchBAfgRQAngVAegOQAJgIAAgjQAAgggThtQgNhOARg9QABgFDFhoQDLh6AgheQAwiMgpi6QgjiahXiYQgjg8AggRQA4gcAHgQQAYg6hSimQg8h5hAhaQgng2gQgjQgXg0gIgNQgWgngngnIhWhWQgrgsAZgOQAOgHAngFQAdgJAGgPQALgZgugdQgjgUgCgGQgLgNgwgmIhMhBQgRgPg1ggIhJgwQgSgLgwgLQgngIAEAGQAOAYgWAWQgVAWgfAVQgeAWgWAVQgaAbgfAJQgmAIgaAIQglAMgdAhQgbAfAGAUQANAkB+BLQA1AhgJAbQgFARgWAkQgEAWgGgBQgQgDgaARQgpAbgeADQgjADgygZQhCgegjgSQg8ghg3gxQhJhBgUgOQgdgXgqgTQgSgHhGgvQg2gkgogEQjwgegsgSQgZgKgvghQg7AWhLAAQoKAAiokvQg3hhgMh8IgBgFIgCgDQgWgjAAg6QAAg3AKgcQAFgMALgRQAEgzAIgpQgggOghgUQhWg0hxhoQg+g7hwhsQhbhSg4gRQl0huirg1QniiUiLg8QiRg+jQiRQi+iFi/imQitiXhxh8QhGAHhYAFIheADQgaALgRAOIgaAaQggAchaAMQh/AQlAAAQpzAApClUQhKgshuhJQlKgjlOitQkZiRjxjZQjPi/hEhQQhChOAEgvQABgTANgbIAbg4QAmhVAAhzQAAgxgjhSQgVgxg4hyQhUiwgViNIgVgRIlRkkQi0idhBhCQhvhyjdlLIgBgBQgtAghCAAQgFAAiJh6QiYiHiuiiQnunLjTj4QgfglgbhUQgPgsgeh6Qg4jkg5g2Qhehdh0hTQhBgvhshGQhTg5gigsQgSgYgLgcQg3gCg7AAQBbCoAACOQAAAyBSBeQA7BEB/B2IDMC9QBnBlAdA1QAcA0AXBmQAjCbAHAaQBDDmC5BwQB/BNBBBaQAxBEAbBkQAYBwATA4QAgBhA/BJQBgBvCABdIDHCFQBlBEAqA8QA3BOAABwQAABEgiA8Qg3Bgh2AAQhVAAiVhcQiOhXiXiLQiciPhriQQh1iegZh0Qgch/h/h2QhHhBi6h9Qith1hDhGQhrhvAAh5QAAhJAWgsQAeg9BWg7QgtgoiojcQimjZi6kDQlhnvhaivQj4iEjPjvQiWiuhpjNQhQicAAgnQAAhzBMhNQBJhIBsgHQAYgCAXACQA7gdBVgKIQQgJIDPgaIRHgIIEdgSIAAgIMCY0AAAQDgBnDzA/QCGAjDIApQCSAjA3AzQAQAOAMATIAegDQEdgVAAEGQAAChjNCPQhKA0iIBKQieBUhSAtQkxCqiSCnQiDCVgvC3QBTCABUDnQBzE5BeGnQBQFqAABuQAFBIACA1QAFBlgNBHQgmDYjKAAQj4AAifi+Qh9iVhZkqQgehogmifIg8kDQgWhXgVhIIggheQglhngog7QiyAAi8AaQi7AagRAAQiiAAheh4Qg0hBgShNIgagEQmFAekFAfQmDAtgqAEQggByguAhQg8AritAAQjsAAiDhCIgjAAIj1gJQidgGhsABQlAAEjqBDQjDA3kFDQQiKBxhCA1QhzBahTAuQhtA+hJDjIAGAeQAvDaAABzQAAArghBcQgtB5gaBNQgpB7gZB6QATHsCSFtQCCFEDvDyQBUBVBxBaICsCFQBVBDAlAvIAIAKIAVgBQCSgTHCgBIHmADQBSAAAjgpQAegjABhKQAAgogMhxQgNhwABhAQAEjZCVhwQA1goBJgeQAkgfAsgeQDWiSE0g8QE1g8DVBBQDtBJAADMQAABYjnFGIgSAZQgKBugbBpQgjCHhOCvQhfDPgzB2QhbDQg6DCQOeAVFHCnQE2ARBzA9QBLAoAaBFQATAzAABoQh1MEh7F8QA1A9BGA+QDECtERCIQAkASBRBFQBGA9ANAAQALAABXg3QBeg5AggJQAfgJBUgVQBHgVAWgbQAWgbBNgIIB2gJQAsgFCXAmQCUAkAuAbQAmAVBdBzQAzA9BFBZQAeAkBAAbQA6AYBAAHQAnAEgDgGQgKgSAZgWQAdgZgGgVQgMgeAGgUQAJgcAagTQAggYALgYQAQgfA0gfQBLgvAEgEIA0grQAggbgFgUQgNgfgFgjIgIg6QgBgLAAgjQAAggANghQAWguARgtQAVgzAdgGIA/gLQAYgNA0AJQA4AIAogNQAngNgGgEQgUgNANgeQAQgmAoAMQAZAGA6AUQAqAFAPgEQAGgBAggSQAjgRCCgjQBogiARgaQAGgJAVgvQATgrAPgOQASgSA+ADQA0ABBCAOQA0AMAQAwQAKAigIAtQgFAagfAFQgqAEgaAIQg1ARgGAEQgVANgHAjQgFAgBMA5QAlAcAnAWQgaCSgRAjQgoBSgMBKQgFAmAMASQAJANAkAsQAeAqANAkQALAbAHAzQAGAkApgRQAagKBKgjQAvgQACgNQgFgXAIgaQAMgjgchTQgWhEgfg5QgSgggkgiQgtgogXghQgggrAfgaQATgPA0gbQAegZAXgGQAPgGA1gHQAngGAXgTQANgMAdggQAWgVgEg5QgJhFAAgjQAAgzARgRQAPgPAcAOQAWALASBRQAGAdAPBfQAGAnBAAdQAPAHBXAdQCOAxA6AvQAaAUgKAzIgQBUQAAAhA7ABQAkABBxgBQApADBiAOQBFAJBEAAQBOAAAHAJQAEAHgLAcQAAASA5AeQBIAlASATQAjAjAWAHQAUAFAvgCQAdhAA0guIACgDIgDgGQgjhBAWAAQASAAAngNQAqgIAvAVQA+gTBLADQCeAGCEBhQCNBpAqCkQCtAAEqgeQCVgPB6gPQGDAAIVHyQCYCODGDaQCpC6AXAQQC5CDFIAuQB2ARCtAKIEgAQQFQAWCdBDQDZBcAnDcQE+B+C+C0QCgCYBUDPQA5CMAsDvQA0EXAbBYQCSAICVBzQBxBWBCBlQFoBxIMCGIMzDQQGrBxDuBdQEnB0B7CAQE4BMDVBUQCnBCChBfQBeA3DBB4QC+BxDWBeQCjBHBZFbQAdByARCBQAMBcAAAkQAAE/i2C1QhKBJh4BFQg4AgiwBYQiaBMhcA6QiIBWhlBkQj+D9hoGoQgUBWACE+QADGFgOC0QgaFLhZCwQgqBUg6A0QhZDzjGFfQhFB7hKB4QgiBPgmBNQiYE6iXC1Qi5DdinAAQhyAAhIg4QhqA4iOBIIlMCpQmDDHi4CMQj4C9ghC0QgOBPABB9IADDTQgBB3gVBPQgaBlg+BDIljGBQikCxijC8QhEBOgsByQgZBAgkCQQgjCHgcBEQgtBrhIBHQi9C5jiDwQieCghvA0Qh9A6joAJQiJAGofgMQBRBhBIDHQBHDHAAB+QAABKgXBaQgfB9hDBjQg8BahSA9QgQAkgaAjQhfB+i6AGMg/wAAAQjKAQivAAQsJAAjulHg");
	this.shape_15.setTransform(371.5,306.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009933").s().p("AgEAIQgDgCgBgDIAAgBQgBgFAEgDQAEgEAFADIABABQADACABAEQABAEgEADIAAAAIgDACIgBAAIgCAAIgEgBg");
	this.shape_16.setTransform(-109.7,240.6,2.596,2.596);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009933").s().p("AAAAHIgCAAQgEgBAAgEQgCgHAHgBIABAAQAIgCAAAIQAAAIgGAAIgCgBg");
	this.shape_17.setTransform(-77.1,245.9,2.596,2.596);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009933").s().p("AAAAIQgCABgDgCQgCgCgBgDQgBgCABgEQACgDAEAAIABABQADgBAEACQAFAEgCAFQgDAEgDAAIgDAAg");
	this.shape_18.setTransform(-97.6,251,2.596,2.596);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009933").s().p("AgGAJIgDgEQgEgEAEgGQAEgHAIAAQAEAAADAEQADAEgCAEIgBAGQgBADgEACQgCACgDAAQgDAAgDgEg");
	this.shape_19.setTransform(-96.9,310.4,2.596,2.596);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009933").s().p("AgcASQgJgEAFgJQAEgHAIgCIANgCQAFgCAFgFQAFgDAGgCIALgCQAGgCADAGQACAGgGADQgFADgLAJQgLAJgGACQgGAFgHAAQgGAAgGgDg");
	this.shape_20.setTransform(-57.5,292.7,2.596,2.596);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009933").s().p("AgCAaQgNgDgFgFQgGgGgCgHQgCgIAFgFQADgEAJgBQAJgBADgDIADgHQABgDAEABQAJABAMAUQACAEgCAEQgCAIAAAEQAAAEgDADIgGAEQgDABgFAAIgLgBg");
	this.shape_21.setTransform(-94.2,284.2,2.596,2.596);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009933").s().p("AgTALQgKgHAEgIQACgGAFgDQAGgDAFABIgDAAIAMAAQAIAAAEAEIAFAEQAIAHAAAFQAAAJgLACIgQAAQgKAAgJgFg");
	this.shape_22.setTransform(-107.6,273,2.596,2.596);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009933").s().p("AgLALQgLgIABgLQABgHAHAAIAMABQADAAAHgDQAGgBAEAFQACACAAAEIABAKQABAIgGAEIgFACQgEABgDAAQgHAAgJgHg");
	this.shape_23.setTransform(-139.5,275.8,2.596,2.596);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009933").s().p("AALBhQgRgCgRgHIgSgFIgBAAIgDgBQgEgBgDgDQgDgEAAgEIANgLIAIgKQAJgJANgEIAMgEQAGgDgCgHIAAgBIgEAAIAAgBQgBgFgFgDIgBgEIAAgBIgBgCIgCgBIgDgEIgEgBQgEAAgBgCIABgFQABgEgBgCQgHgKgDgJIAAAAQgHgGAAgSIABgEIgBgCIACgEQAEgNgCgKIABgDIABgBQADgDAGABQAGgCAFAGIACACIABAAQgBAFACADIAAABIgBAIIgCAEIACABQAEAEAAAPQAAAEACAGIABABQACAGAHAJIAMAOIAEAJQAGACADADQADADABAEIABAIIACAFIAGAFIAAABIALAKIgEAKIgFAOIAAACIgDADQgBADgEAEIgNAHIgGABIgEADIgBAFIAAABIgCADIgCABg");
	this.shape_24.setTransform(-125.8,276.4,2.596,2.596);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(207));

	// map
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_25.setTransform(-54.2,209.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQABQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHABQgOAAgJgLgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_26.setTransform(-62.4,207.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJABIgHABQgFABgEAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAHgHAFgDQAGgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_27.setTransform(-70.4,209);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgFAKgCIAVgCQAFgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAJgFQAKgHALAAQANABAJAFQAJAFAAAMIAAAsIAAADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgHABgDgFQgCgDAAgFQgEAGgIAEQgGADgJAAQgLABgHgHgAAJACIgHABIgIABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQALgFAAgMIAAgKIgGACg");
	this.shape_28.setTransform(-78.5,209.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_29.setTransform(-84.5,207.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_30.setTransform(-89.9,209.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHA2IAAhrIAOAAIAABrg");
	this.shape_31.setTransform(-95.6,207.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_32.setTransform(-105.7,209.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_33.setTransform(-113.7,209.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAzQgJgFgBgNIAOAAQAAAFADAEQAFAEAJAAQAOAAAFgLIACgIIABgPQgEAHgGACQgFAEgJAAQgMgBgKgIQgJgKAAgUQAAgTAJgMQAKgLANABQAJgBAGAFIAIAHIAAgJIAMAAIAABGQAAAPgEAJQgIAPgWAAQgNABgIgGgAgRgeQgDAGAAAMQAAAMAGAHQAFAHAJAAQANAAAGgNQADgHAAgJQAAgPgGgGQgGgIgJAAQgNABgFANg");
	this.shape_34.setTransform(-122.2,210.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAGgFALgCIAUgCQAGgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAKgFQAJgHALAAQAOABAIAFQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgIAEQgGADgJAAQgLABgHgHgAAJACIgHABIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQAMgFgBgMIAAgKIgGACg");
	this.shape_35.setTransform(-130,209.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJALQAKAKAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAFQAFANANAAQAJAAAGgIQAGgIAAgOQAAgJgDgIQgFgNgNAAQgNABgFAOg");
	this.shape_36.setTransform(-138.3,210.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgFALgCIATgCQAFgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQABgOAIgFQAKgHAMAAQAMABAJAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgCgDAAgFQgEAGgHAEQgHADgJAAQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQAKgFABgMIAAgKIgHACg");
	this.shape_37.setTransform(-146.6,209.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_38.setTransform(-152.6,207.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgFALgCIATgCQAFgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQAAgOAKgFQAIgHANAAQAMABAJAFQAJAFgBAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgCgDAAgFQgEAGgHAEQgHADgJAAQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQAKgFABgMIAAgKIgHACg");
	this.shape_39.setTransform(-158.2,209.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AghAsQgOgPAAgbQAAgaAOgQQAOgQAUAAQAPAAALAGQAQAJAEAVIgPAAQgCgMgIgFQgJgGgMAAQgOAAgKALQgKAMAAAVQAAATAJAMQAIAMASAAQAOAAAJgIQAKgJAAgTIgiAAIAAgLIAvAAIAAA5IgJAAIgDgOQgIAIgFADQgKAGgNAAQgTAAgOgNg");
	this.shape_40.setTransform(-168.6,207.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#91D6DD").s().p("EhPsBNNMAAAiaZMCfZAAAMAAACaZg");
	this.shape_41.setTransform(87.2,300.5,3.226,2.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(207));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1558.3,-964.2,3351.9,2541.7);


(lib.galapagos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594A42").s().p("AhDAWIgBAAQAFgHgDgIQgDgIgJgDIgLgDQACgHAEgEQA1gFA+ABQAWAAAgAIQAEAGAAAHQgrAQgXAHIg1ABIgmgBg");
	this.shape.setTransform(45,-37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#594A42","#7F9F3D"],[0,1],-0.2,27.6,0.3,-17.7).s().p("Ag8C/QghgEgygKIhUgRQhUgQgmgIQhDgPg0gRQg5gEgkglQgPgQgBgSQgCgQAKgNQAAgMAEgNIBQg0QAwggAigOQCOg5DJgNQB3AIBmAZQAgAIBGAXQBCAVAkAIIBgAWQA1AOAnASQAcAMgDAgQgCAdgXAQQgSANgcANQgHAfgdAXQgbAVgpAIQiDAdiLAIIhhAFIgZAAQgnAAgggDg");
	this.shape_1.setTransform(212.5,49.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#594A42","#7F9F3D"],[0,1],-0.1,16,0.2,-10.6).s().p("Ai0BmQgEAAgEABIhAgJIgGgCIgngGQgkgEgsgCQgVgCgQgNIgogCQAOgDgCgRQgCgQgPABIhgAFQg5ADgogCQgEgOgNAAQgTgBgTgEQgJgVAQgVQAwgdBSgIQASgCCBgCIABAAIAKgBQAigBAagCIBTgHQCngMCDgEIAEAAIACgHIAugFQBBgGBWABQAeAJAwASIBOAdIAGACICEALQBNAGA4ABQAXAAAPAOQANANABATQgZAEgVAHQgMADgBAMQgBALAJAGQADALAKACIAFABIgFACIgYAJIg4AAQgjABhfAIQhSAHgxAAQgIAAgEAFQgFAFAAAHQhbAChAgKIhIAKQiuAAhegLg");
	this.shape_2.setTransform(149.6,-35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#594A42","#7F9F3D"],[0,1],0,9.5,0.1,-5.9).s().p("AhwA1QgTgFgFgTIhLgGIgCAAIhYAKQg0AFglgGQgTgCgIgRIgQgBQgJgBgFgGIgOgCQgQgDABgQQgBgPAQgGQAPgEAXAAIAEAAIBXgSIAKgBQAHgEAMgBIA2gCIAdACICgAIQBjAGA8ABQB2AFBDAHIAwAHQASAIAOAJIATADQAeAAAlADQAcgBgBAbQAAAbgbADQi1AQiIACIh7ABQhGgBg0gNg");
	this.shape_3.setTransform(32.9,-54.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#594A42").s().p("AkXBEQgIAAgIgDQgeAAgUgDQgHgCgGgDQgdADgagGQgEAAgGgDIgKABQgMABgGgNQgHgHACgKQABgKALgCIANgDQAbgKAagJQAFgCAHACIABAAQAJgLALgDQA7gUArADQALAAALAGIAKgBQAOgCAMAEQAkgIAogBQAOAAAJAHQAbgGAWgCQANgCANAGQAogJAlAEIADABQAYgFAhgBQAMAAAJAFQAsgMAngCQAKAAAKAFQASgEAcgBQAPAAAKAIIAlgIQADgCAGgBIAdgEIAAABQAJABAGADQAGAAAFgDQAagIAIAbQAHAbgaAIQglALgYABIgrAKIgrAKQg+AVg+gFQg4AKgvAAQgxAHgqAAQgtAEgogCQgwAJgmgDQgmAGgkAAIgGAAg");
	this.shape_4.setTransform(-208.8,-48.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#594A42","#7F9F3D"],[0,1],0.2,6.4,-0.3,-13.8).s().p("AhhBsQAIgHgBgKQgBgLgMgCQgygJhMgBQgEgEgEAAQhVgLgogEIgHgGIgHgCQgIgHgFgJQAFgJgEgJQgFgIgLgBQgkgBg3gIIhagOQACgPAKgJQAKgLAPAAIApgCQAIgBALAFQA7gJAUgBQAqAABDANIAfAEQASgDAWAEIBFgBQArgCAaACQAEgWAPgPQARgRAZgCIAGgBIgBANQA1gCBDAGQAtAEBLAKQAYAEBtAXQBRARAzABQAjgGA1ANQATAFgBATQgBARgRAHQgMAFgPAJIgBABQgiAEgjgGIgfgGQhIABhoAOQgWAbghgHQgYgGgrgCQgTAagggHQgOgDgTAAIgfACQgIAGgHADIgBABQgmAYg6AAIgMgBg");
	this.shape_5.setTransform(-97,-47.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#594A42","#7F9F3D"],[0,1],2.3,21.3,-1.7,-14.7).s().p("AkhCVIjngEQiIgFhdgWIgQgGIgIACQgJAFgMADQgoAHg2gCIhegDQgrgBgQgtQgQguAmgWQgCgLACgNIgBgCQgJgIgGgLIAqgSQAOgHASgMQAXgQAIgEQASgLAigDIA3gCIBcgCQAOABAJACQBPAFB9gFIDMgHQAZAAASAMIBYAAQAyACAmAHQA7gSBFgBQBKgiB+gCQCJgCBSAeQBUgJBDAMQATgDAmgEQAKAfAgAEQBCAIBdgFQBpgJA1gDQgDAOAEANQADAOAKAJQg/AMhNAWQgwAOhaAdQhxgKhKgBQhZgBg4AIQhSAMg1AkQgHAFgEAGIhnAAQgCAFgEACQAJAIgCAMQgCAMgMAEQhCAVhggBQg2AAhtgGQgJAAgGgGQhAAOgyAAIgKAAgAs/AaIAQAGIAFgHg");
	this.shape_6.setTransform(-165.7,-8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#594A42").s().p("Aq4F6IjogDQiHgFhdgXIgQgFIgJABQgIAGgNACQgnAHg3gBIhegEQgrAAgQgtQgQguAngXQgDgMADgMIgCgDQgbgYAEgiQAEglApgJIBJgNQAQgDARAGIAugCQBJgPBFgHQAJgHANgDQCmguEAgSIDUgNQB+gIBYgLQBOgKBPACQAIgCANgBIBGgBQAHAHAKgCQAmgGBNAAQAGAAAFgDIASADQARADAFgSQAEgRgRgDQgygJhMgBQgEgEgEAAQhUgLgrgEQgPgHgJgRQAFgJgEgJQgFgJgLgBQglgBg6gJQhMgNgTgCIgBAAQgQgIgIgPQgHgNABgRQAbgGAhgPIA5gbQAHgDABgHQABgHgDgGIBlgaQA8gPAqgIIAEgBQAdgFAfgBIAAAAQAVgIATgDQAQgCAPAKQAOAJAIAPQAQADAMAPIACAAIAWACQBBACAXADQAOACAAAMQAAANgOABIgdACQAIARgDATQA2gCBDAGQAtAEBLAKQAYAEBtAXQBRARAzABQAjgGA1ANQATAFgBATQgBASgRAHQgMAFgPAJQgHAfgfAHQgKACgoAGQgmAGgLALQApAAAUgCQB2gKApACQBXADBAAlQATALAGARQAbABAmAEIA8AGQAVABAMAOQAfAAAZAGIAPgCQAMgCAIAIQg/AQgyAZQgKAGABAMQACANALACQArAJAygEQAZADAuAHQAwAIAWADQgBAGgEAEQgEAEgHAAQgfgDg7AIQg9AJgdgCQgRAAgcgHIgLABQgkABhFAKQhGALgjAAQgKAGgLACIgiAFQghATgIADIgSAGQgFAWgUAIQADAGAAAFQAdADAKAAQAZABADAZQAEAZgYAHQgrAOg+gBQgSAGgWAAQgUAAgRgFIgFgCQgJgBgWgFQgHgCAAgHQgBgHAGgEIAXgSQAFgHAGgEIAWgKIAGgDQADgIAGgGQAAgEACgFQghAAhNATQhIARgngDQhsAVhDggIhYALQgtAGgMAAIg9AAQhLAZhtAGQgVABinAAQgDAFgEADQAKAIgCALQgCAMgNAEQhBAWhggBQg3gBhtgFQgKAAgGgGQhAANgxAAIgKAAg");
	this.shape_7.setTransform(-125,-31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.galapagos, new cjs.Rectangle(-270.4,-69.2,540.8,138.5), null);


(lib.finchseedeater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finchseedeater, new cjs.Rectangle(0,0,495,299), null);


(lib.finchleafeating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finchleafeating, new cjs.Rectangle(0,0,490,305), null);


(lib.finchgrubeating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finchgrubeating, new cjs.Rectangle(0,0,519,296), null);


(lib.finchconeeating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finchconeeating, new cjs.Rectangle(0,0,455,346), null);


(lib.finchancestor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Backgroundcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finchancestor, new cjs.Rectangle(0,0,253,155), null);


(lib.darwinspath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_234 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(234).call(this.frame_234).wait(1));

	// part2 mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_184 = new cjs.Graphics().p("ArQDOIOsmQIFbMuIusGRg");
	var mask_graphics_185 = new cjs.Graphics().p("ArSDIIOsmTIFhM1IutGTg");
	var mask_graphics_186 = new cjs.Graphics().p("ArUDBIOtmSIFjM7IusGTg");
	var mask_graphics_187 = new cjs.Graphics().p("ArVC7IOsmTIFmNCIusGTg");
	var mask_graphics_188 = new cjs.Graphics().p("ArWC0IOsmTIFpNJIusGTg");
	var mask_graphics_189 = new cjs.Graphics().p("ArYCtIOsmSIFsNPIusGTg");
	var mask_graphics_190 = new cjs.Graphics().p("ArZCnIOsmTIFvNWIutGTg");
	var mask_graphics_191 = new cjs.Graphics().p("ArbCgIOsmTIFyNdIusGTg");
	var mask_graphics_192 = new cjs.Graphics().p("ArcCZIOsmSIF0NjIusGTg");
	var mask_graphics_193 = new cjs.Graphics().p("ArdCTIOsmTIF3NqIusGTg");
	var mask_graphics_194 = new cjs.Graphics().p("ArfCMIOsmTIF6NxIusGTg");
	var mask_graphics_195 = new cjs.Graphics().p("ArgCFIOsmSIF9N3IusGTg");
	var mask_graphics_196 = new cjs.Graphics().p("AriB/IOsmTIGAN+IusGTg");
	var mask_graphics_197 = new cjs.Graphics().p("ArjB4IOsmTIGCOFIurGTg");
	var mask_graphics_198 = new cjs.Graphics().p("ArlBxIOsmSIGGOLIusGTg");
	var mask_graphics_199 = new cjs.Graphics().p("ArmBrIOsmTIGIOSIusGTg");
	var mask_graphics_200 = new cjs.Graphics().p("ArnBkIOrmTIGMOZIusGTg");
	var mask_graphics_201 = new cjs.Graphics().p("ArpBdIOsmSIGOOfIusGTg");
	var mask_graphics_202 = new cjs.Graphics().p("ArqBXIOrmTIGROmIurGTg");
	var mask_graphics_203 = new cjs.Graphics().p("ArsBQIOsmTIGUOtIusGTg");
	var mask_graphics_204 = new cjs.Graphics().p("ArtBJIOrmSIGXOzIurGTg");
	var mask_graphics_205 = new cjs.Graphics().p("AruBDIOrmTIGaO6IusGTg");
	var mask_graphics_206 = new cjs.Graphics().p("ArwA8IOsmTIGcPBIusGTg");
	var mask_graphics_207 = new cjs.Graphics().p("ArxA1IOrmSIGfPHIurGTg");
	var mask_graphics_208 = new cjs.Graphics().p("ArzAuIOsmSIGiPOIusGTg");
	var mask_graphics_209 = new cjs.Graphics().p("Ar0AoIOrmTIGlPVIurGTg");
	var mask_graphics_210 = new cjs.Graphics().p("Ar2AhIOsmSIGnPbIurGTg");
	var mask_graphics_211 = new cjs.Graphics().p("Ar3AaIOrmSIGrPiIurGTg");
	var mask_graphics_212 = new cjs.Graphics().p("Ar4AUIOrmSIGtPoIurGTg");
	var mask_graphics_213 = new cjs.Graphics().p("Ar6ANIOrmSIGxPvIurGTg");
	var mask_graphics_214 = new cjs.Graphics().p("Ar7AGIOrmSIGzP2IurGTg");
	var mask_graphics_215 = new cjs.Graphics().p("Ar9AAIOrmSIG2P8IurGTg");
	var mask_graphics_216 = new cjs.Graphics().p("Ar+gGIOrmTIG5QDIurGTg");
	var mask_graphics_217 = new cjs.Graphics().p("Ar/gNIOqmTIG8QKIurGTg");
	var mask_graphics_218 = new cjs.Graphics().p("AsBgTIOrmTIG/QQIurGTg");
	var mask_graphics_219 = new cjs.Graphics().p("AsCgaIOrmTIHBQXIurGTg");
	var mask_graphics_220 = new cjs.Graphics().p("AsEghIOrmTIHEQeIuqGTg");
	var mask_graphics_221 = new cjs.Graphics().p("AsFgnIOrmTIHHQkIurGTg");
	var mask_graphics_222 = new cjs.Graphics().p("AsHguIOrmTIHKQrIuqGTg");
	var mask_graphics_223 = new cjs.Graphics().p("AsIg1IOrmTIHNQyIurGTg");
	var mask_graphics_224 = new cjs.Graphics().p("AsJg7IOqmTIHQQ4IurGTg");
	var mask_graphics_225 = new cjs.Graphics().p("AsLhCIOrmTIHSQ/IuqGTg");
	var mask_graphics_226 = new cjs.Graphics().p("AsMhJIOqmTIHWRGIurGTg");
	var mask_graphics_227 = new cjs.Graphics().p("AsOhPIOrmTIHYRMIuqGTg");
	var mask_graphics_228 = new cjs.Graphics().p("AsPhWIOqmTIHcRTIurGTg");
	var mask_graphics_229 = new cjs.Graphics().p("AsQhdIOqmTIHeRaIuqGTg");
	var mask_graphics_230 = new cjs.Graphics().p("AsShjIOqmTIHhRgIuqGTg");
	var mask_graphics_231 = new cjs.Graphics().p("AsThqIOqmTIHkRnIuqGTg");
	var mask_graphics_232 = new cjs.Graphics().p("AsVhxIOrmTIHmRuIuqGTg");
	var mask_graphics_233 = new cjs.Graphics().p("AsWh3IOqmTIHqR0IurGTg");
	var mask_graphics_234 = new cjs.Graphics().p("AsXh+IOqmTIHsR7IuqGTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(184).to({graphics:mask_graphics_184,x:-72.1,y:102.1}).wait(1).to({graphics:mask_graphics_185,x:-72.3,y:102.1}).wait(1).to({graphics:mask_graphics_186,x:-72.5,y:102.1}).wait(1).to({graphics:mask_graphics_187,x:-72.6,y:102.1}).wait(1).to({graphics:mask_graphics_188,x:-72.7,y:102.1}).wait(1).to({graphics:mask_graphics_189,x:-72.9,y:102.1}).wait(1).to({graphics:mask_graphics_190,x:-73,y:102.1}).wait(1).to({graphics:mask_graphics_191,x:-73.2,y:102.1}).wait(1).to({graphics:mask_graphics_192,x:-73.3,y:102.1}).wait(1).to({graphics:mask_graphics_193,x:-73.4,y:102.1}).wait(1).to({graphics:mask_graphics_194,x:-73.6,y:102.1}).wait(1).to({graphics:mask_graphics_195,x:-73.7,y:102.1}).wait(1).to({graphics:mask_graphics_196,x:-73.9,y:102.1}).wait(1).to({graphics:mask_graphics_197,x:-74,y:102.1}).wait(1).to({graphics:mask_graphics_198,x:-74.2,y:102.1}).wait(1).to({graphics:mask_graphics_199,x:-74.3,y:102.1}).wait(1).to({graphics:mask_graphics_200,x:-74.4,y:102.1}).wait(1).to({graphics:mask_graphics_201,x:-74.6,y:102.1}).wait(1).to({graphics:mask_graphics_202,x:-74.7,y:102.1}).wait(1).to({graphics:mask_graphics_203,x:-74.9,y:102.1}).wait(1).to({graphics:mask_graphics_204,x:-75,y:102.1}).wait(1).to({graphics:mask_graphics_205,x:-75.1,y:102.1}).wait(1).to({graphics:mask_graphics_206,x:-75.3,y:102.1}).wait(1).to({graphics:mask_graphics_207,x:-75.4,y:102.1}).wait(1).to({graphics:mask_graphics_208,x:-75.6,y:102.1}).wait(1).to({graphics:mask_graphics_209,x:-75.7,y:102.1}).wait(1).to({graphics:mask_graphics_210,x:-75.9,y:102.1}).wait(1).to({graphics:mask_graphics_211,x:-76,y:102.1}).wait(1).to({graphics:mask_graphics_212,x:-76.1,y:102.1}).wait(1).to({graphics:mask_graphics_213,x:-76.3,y:102.1}).wait(1).to({graphics:mask_graphics_214,x:-76.4,y:102.1}).wait(1).to({graphics:mask_graphics_215,x:-76.6,y:102.1}).wait(1).to({graphics:mask_graphics_216,x:-76.7,y:102.1}).wait(1).to({graphics:mask_graphics_217,x:-76.8,y:102.1}).wait(1).to({graphics:mask_graphics_218,x:-77,y:102.1}).wait(1).to({graphics:mask_graphics_219,x:-77.1,y:102.1}).wait(1).to({graphics:mask_graphics_220,x:-77.3,y:102.1}).wait(1).to({graphics:mask_graphics_221,x:-77.4,y:102.1}).wait(1).to({graphics:mask_graphics_222,x:-77.6,y:102.1}).wait(1).to({graphics:mask_graphics_223,x:-77.7,y:102.1}).wait(1).to({graphics:mask_graphics_224,x:-77.8,y:102.1}).wait(1).to({graphics:mask_graphics_225,x:-78,y:102.1}).wait(1).to({graphics:mask_graphics_226,x:-78.1,y:102.1}).wait(1).to({graphics:mask_graphics_227,x:-78.3,y:102.1}).wait(1).to({graphics:mask_graphics_228,x:-78.4,y:102.1}).wait(1).to({graphics:mask_graphics_229,x:-78.5,y:102.1}).wait(1).to({graphics:mask_graphics_230,x:-78.7,y:102.1}).wait(1).to({graphics:mask_graphics_231,x:-78.8,y:102.1}).wait(1).to({graphics:mask_graphics_232,x:-79,y:102.1}).wait(1).to({graphics:mask_graphics_233,x:-79.1,y:102.1}).wait(1).to({graphics:mask_graphics_234,x:-79.2,y:102.1}).wait(1));

	// part2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E4142E").ss(1,0,1).p("AAtBOQgYgXgWggQgjgugGgjQgBgLABgL");
	this.shape.setTransform(-134.4,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E4142E").ss(1,0,0,4).p("ANII1QgFgBgFgBQgWgEgUgLQgEgCgEgCQg7glgThUQAJhHAQhbQAZiKAchaQAJgdAJgXQAMgiAFgnQAKhOgggWQgGgBgHgDQgOgGgRgLQgxgkgdhGAJHneQhagjitgzQiuA5ibAzQn9CnlABo");
	this.shape_1.setTransform(-197,51.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},184).wait(51));

	// p1 mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AnBmKIHrnuIHuHsInsHtg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AnNl9IH4n9IHvHsIn4H8g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AnYlwIIEoLIHwHsIoEIJg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AnilkIIPoYIHxHrIoQIXg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AntlXIIbomIHyHqIocIkg");
	var mask_1_graphics_5 = new cjs.Graphics().p("An3lLIInozIHyHpIonIyg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AoCk+IIzpAIHzHoIozI/g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AoMkxII+pOIH0HnIo/JNg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AoXkkIJLpcIH0HmIpLJbg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AohkYIJWppIH1HlIpWJpg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AorkLIJip4IH1HmIpiJ2g");
	var mask_1_graphics_11 = new cjs.Graphics().p("Aoxj+IJtqGIH2HlIptKEg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ao3jxIJ5qUIH2HkIp5KSg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Ao9jkIKEqiIH3HjIqEKgg");
	var mask_1_graphics_14 = new cjs.Graphics().p("ApEjXIKQqwIH5HiIqQKug");
	var mask_1_graphics_15 = new cjs.Graphics().p("ApKjLIKcq9IH5HhIqcK9g");
	var mask_1_graphics_16 = new cjs.Graphics().p("ApQi+IKnrLIH6HhIqnLKg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ApWixIKzrZIH6HgIqzLYg");
	var mask_1_graphics_18 = new cjs.Graphics().p("ApcikIK+rnIH7HfIq+Lmg");
	var mask_1_graphics_19 = new cjs.Graphics().p("ApiiXILJr1IH8HeIrJL0g");
	var mask_1_graphics_20 = new cjs.Graphics().p("ApniKILUsDIH7HdIrUMDg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Apth8ILfsSIH8HcIrfMRg");
	var mask_1_graphics_22 = new cjs.Graphics().p("ApzhvILqsgIH9HbIrqMfg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Ap5hiIL1suIH+HaIr1Mug");
	var mask_1_graphics_24 = new cjs.Graphics().p("Ap/hVIMBs9IH+HaIsBM8g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AqFhIIMMtLIH/HaIsMNJg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AqLg7IMXtZIIAHZIsXNYg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AqQgtIMhtoIIAHYIshNmg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AqWggIMst2IIBHXIssN1g");
	var mask_1_graphics_29 = new cjs.Graphics().p("AqcgTIM4uEIIBHWIs4ODg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AqigGINDuTIICHWItDOSg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AqnAHINNuhIICHVItNOgg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AqtAUINYuvIIDHUItYOvg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AqzAhINju9IIEHTItjO9g");
	var mask_1_graphics_34 = new cjs.Graphics().p("Aq5AvINuvMIIFHSItuPMg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Aq+A8IN4vbIIFHSIt4Pbg");
	var mask_1_graphics_36 = new cjs.Graphics().p("ArEBKIODvqIIGHRIuDPpg");
	var mask_1_graphics_37 = new cjs.Graphics().p("ArJBXIONv4IIGHQIuNP4g");
	var mask_1_graphics_38 = new cjs.Graphics().p("ArPBlIOYwHIIHHPIuYQHg");
	var mask_1_graphics_39 = new cjs.Graphics().p("ArUByIOiwWIIHHPIuiQVg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AraCAIOtwlIIIHOIutQkg");
	var mask_1_graphics_41 = new cjs.Graphics().p("ArgCNIO4wzIIJHNIu4Qzg");
	var mask_1_graphics_42 = new cjs.Graphics().p("ArlCbIPCxCIIJHMIvCRCg");
	var mask_1_graphics_43 = new cjs.Graphics().p("ArqCoIPLxRIIKHLIvLRSg");
	var mask_1_graphics_44 = new cjs.Graphics().p("ArwC2IPWxgIILHKIvWRgg");
	var mask_1_graphics_45 = new cjs.Graphics().p("Ar1DEIPgxvIILHJIvgRvg");
	var mask_1_graphics_46 = new cjs.Graphics().p("Ar7DRIPrx+IIMHJIvrR+g");
	var mask_1_graphics_47 = new cjs.Graphics().p("AsADfIP1yNIIMHIIv1SNg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AsGDtIQAycIINHHIwAScg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AsLD7IQJysIIOHHIwJSrg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AsQEIIQTy6IIOHGIwTS6g");
	var mask_1_graphics_51 = new cjs.Graphics().p("AsVEWIQdzJIIOHEIwdTKg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AsbEkIQnzZIIQHEIwnTZg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AsgEyIQxzoIIQHDIwxTog");
	var mask_1_graphics_54 = new cjs.Graphics().p("AslFAIQ7z3IIQHCIw7T3g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AsqFOIRE0HIIRHCIxEUGg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AswFcIRP0WIISHBIxPUVg");
	var mask_1_graphics_57 = new cjs.Graphics().p("As1FqIRZ0mIISHAIxZUlg");
	var mask_1_graphics_58 = new cjs.Graphics().p("As6F4IRi01IITG/IxiU1g");
	var mask_1_graphics_59 = new cjs.Graphics().p("As/GGIRs1EIITG+IxsVEg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AtEGUIR11UIIUG+Ix1VTg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AtJGiIR/1jIIUG8Ix/Vjg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AtOGwISI1zIIVG8IyIVyg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AtTG+ISS2CIIVG7IySWCg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AtYHMISb2RIIWG6IybWRg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AtdHaISl2hIIWG5IylWhg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AtiHoISu2wIIXG4IyuWxg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AtnH2IS33AIIYG4Iy3XAg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AtsIEITB3PIIYG3IzBXPg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AtxITITK3gIIZG2IzKXgg");
	var mask_1_graphics_70 = new cjs.Graphics().p("At2IdITT3vIIaG2IzTXvg");
	var mask_1_graphics_71 = new cjs.Graphics().p("At7ImITd3/IIaG0IzdX/g");
	var mask_1_graphics_72 = new cjs.Graphics().p("AuAIuITm4PIIbG0IzmYPg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AuFI2ITv4eIIcGzIzvYeg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AuJI/IT44vIIbGyIz4Yvg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AuOJHIUB4+IIcGxI0BY+g");
	var mask_1_graphics_76 = new cjs.Graphics().p("AuTJPIUK5OIIdGxI0KZOg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AuYJYIUT5eIIeGvI0TZeg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AucJgIUb5uIIeGvI0bZug");
	var mask_1_graphics_79 = new cjs.Graphics().p("AuhJpIUk5/IIfGuI0kZ/g");
	var mask_1_graphics_80 = new cjs.Graphics().p("AumJxIUu6OIIfGtI0uaOg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AuqJ5IU26eIIfGtI02aeg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AuvKCIU/6uIIgGrI0/aug");
	var mask_1_graphics_83 = new cjs.Graphics().p("Au0KKIVI6+IIhGrI1Ia+g");
	var mask_1_graphics_84 = new cjs.Graphics().p("Au4KTIVQ7PIIhGqI1QbPg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Au9KbIVZ7eIIiGpI1Zbeg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AvBKkIVh7vIIiGoI1hbvg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AvGKsIVq7/IIjGoI1qb/g");
	var mask_1_graphics_88 = new cjs.Graphics().p("AvKK1IVy8PIIjGmI1ycPg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AvPK9IV78fIIkGmI17cfg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AvTLGIWD8wIIkGlI2Dcwg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AvYLPIWL9BIImGkI2LdBg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AvcLXIWT9QIImGjI2TdQg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AvgLgIWb9hIInGiI2cdhg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AvlLoIWk9xIInGiI2kdxg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AvpLxIWs+CIInGhI2seCg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AvuL6IW1+TIIoGgI21eTg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AvyMCIW8+iIIpGfI28eig");
	var mask_1_graphics_98 = new cjs.Graphics().p("Av2MLIXE+zIIpGeI3Eezg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Av6MUIXM/EIIpGdI3MfEg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Av/McIXU/UIIrGdI3UfUg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AwDMlIXc/lIIrGcI3cflg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AwHMuIXk/2IIrGbI3kf2g");
	var mask_1_graphics_103 = new cjs.Graphics().p("AwLM3MAXrggHIIsGaMgXrAgHg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AwPM/MAXzggXIIsGaMgXzAgXg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AwTNIMAX7ggnIIsGYMgX7Agng");
	var mask_1_graphics_106 = new cjs.Graphics().p("AwXNRMAYCgg4IItGXMgYCAg4g");
	var mask_1_graphics_107 = new cjs.Graphics().p("AwbNaMAYKghJIItGWMgYKAhJg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AwfNjMAYRghaIIuGVMgYRAhag");
	var mask_1_graphics_109 = new cjs.Graphics().p("AwjNrMAYZghqIIuGVMgYZAhqg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AwnN0MAYggh7IIvGUMgYgAh7g");
	var mask_1_graphics_111 = new cjs.Graphics().p("AwrN9MAYogiMIIvGTMgYoAiMg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AwvOGMAYvgidIIwGSMgYvAidg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AwzOPMAY2giuIIxGRMgY2Aiug");
	var mask_1_graphics_114 = new cjs.Graphics().p("Aw3OYMAY+gi/IIxGQMgY+Ai/g");
	var mask_1_graphics_115 = new cjs.Graphics().p("Aw7OhMAZFgjQIIyGPMgZFAjQg");
	var mask_1_graphics_116 = new cjs.Graphics().p("Aw/OqMAZNgjiIIyGPMgZNAjig");
	var mask_1_graphics_117 = new cjs.Graphics().p("AxDOyMAZUgjyIIzGPMgZUAjyg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AxHO7MAZbgkDII0GOMgZbAkDg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AxKPEMAZhgkUII0GNMgZhAkUg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AxOPNMAZpgklII0GMMgZpAklg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AxSPWMAZwgk2II1GLMgZwAk2g");
	var mask_1_graphics_122 = new cjs.Graphics().p("AxWPfMAZ3glHII2GKMgZ3AlHg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AxZPoMAZ9glYII2GJMgZ9AlYg");
	var mask_1_graphics_124 = new cjs.Graphics().p("AxdPxMAaFglqII2GJMgaFAlqg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AxhP6MAaMgl7II3GIMgaMAl7g");
	var mask_1_graphics_126 = new cjs.Graphics().p("AxkQDMAaSgmMII3GHMgaSAmMg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AxoQMMAaZgmdII4GGMgaZAmdg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AxrQWMAafgmvII4GEMgafAmvg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AxvQfMAamgnBII5GEMgamAnBg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AxyQoMAasgnSII5GDMgasAnSg");
	var mask_1_graphics_131 = new cjs.Graphics().p("Ax2QxMAazgnjII6GCMgazAnjg");
	var mask_1_graphics_132 = new cjs.Graphics().p("Ax5Q6MAa5gn0II6GBMga5An0g");
	var mask_1_graphics_133 = new cjs.Graphics().p("Ax9RDMAbAgoGII7GBMgbAAoGg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AyARMMAbGgoXII7GAMgbGAoXg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AyERVMAbNgooII8F/MgbNAoog");
	var mask_1_graphics_136 = new cjs.Graphics().p("AyHRfMAbTgo6II8F9MgbTAo6g");
	var mask_1_graphics_137 = new cjs.Graphics().p("AyKRoMAbZgpMII8F9MgbZApMg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AyORxMAbggpdII9F8MgbgApdg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AyRR6MAblgpuII+F7MgblApug");
	var mask_1_graphics_140 = new cjs.Graphics().p("AyUSDMAbrgqAII+F7MgbrAqAg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AyYSNMAbygqSII/F5MgbyAqSg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AybSWMAb4gqkII/F5Mgb4Aqkg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AyeSfMAb9gq1IJAF4Mgb9Aq1g");
	var mask_1_graphics_144 = new cjs.Graphics().p("AyhSoMAcDgrGIJAF3MgcDArGg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AykSyMAcJgrZIJAF2MgcJArZg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AyoS7MAcQgrqIJBF1MgcQArqg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AyrTEMAcVgr8IJCF1MgcVAr8g");
	var mask_1_graphics_148 = new cjs.Graphics().p("AyuTNMAcbgsNIJCF0MgcbAsNg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AyxTXMAcggsfIJDFyMgcgAsfg");
	var mask_1_graphics_150 = new cjs.Graphics().p("Ay0TgMAcmgsxIJDFyMgcmAsxg");
	var mask_1_graphics_151 = new cjs.Graphics().p("Ay3TpMAcsgtCIJDFxMgcsAtCg");
	var mask_1_graphics_152 = new cjs.Graphics().p("Ay6TzMAcxgtVIJEFwMgcxAtVg");
	var mask_1_graphics_153 = new cjs.Graphics().p("Ay9T8MAc3gtmIJEFvMgc3Atmg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AzAUGMAc8gt5IJFFuMgc8At5g");
	var mask_1_graphics_155 = new cjs.Graphics().p("AzDUPMAdCguKIJFFtMgdCAuKg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AzGUYMAdHgucIJGFtMgdHAucg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AzJUiMAdMguuIJHFrMgdMAuug");
	var mask_1_graphics_158 = new cjs.Graphics().p("AzLUrMAdRgvAIJGFrMgdRAvAg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AzOU1MAdWgvTIJHFqMgdWAvTg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AzRU+MAdcgvkIJHFpMgdcAvkg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AzUVHMAdhgv2IJIFpMgdhAv2g");
	var mask_1_graphics_162 = new cjs.Graphics().p("AzXVRMAdmgwIIJJFnMgdmAwIg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AzZVaMAdqgwaIJJFnMgdqAwag");
	var mask_1_graphics_164 = new cjs.Graphics().p("AzcVkMAdwgwsIJJFlMgdwAwsg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AzfVtMAd1gw+IJKFlMgd1Aw+g");
	var mask_1_graphics_166 = new cjs.Graphics().p("AzhV3MAd5gxRIJKFkMgd5AxRg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AzkWAMAd+gxiIJLFjMgd+Axig");
	var mask_1_graphics_168 = new cjs.Graphics().p("AznWKMAeEgx1IJLFiMgeEAx1g");
	var mask_1_graphics_169 = new cjs.Graphics().p("AzpWTMAeIgyHIJLFiMgeIAyHg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AzsWdMAeNgyZIJMFgMgeNAyZg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AzuWnMAeRgysIJMFfMgeRAysg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AzxWwMAeWgy+IJNFfMgeWAy+g");
	var mask_1_graphics_173 = new cjs.Graphics().p("AzzW6MAeagzQIJNFdMgeaAzQg");
	var mask_1_graphics_174 = new cjs.Graphics().p("Az2XDMAefgziIJOFdMgefAzig");
	var mask_1_graphics_175 = new cjs.Graphics().p("Az4XNMAejgz1IJOFcMgejAz1g");
	var mask_1_graphics_176 = new cjs.Graphics().p("Az6XWMAeng0GIJOFbMgenA0Gg");
	var mask_1_graphics_177 = new cjs.Graphics().p("Az9XgMAesg0ZIJPFaMgesA0Zg");
	var mask_1_graphics_178 = new cjs.Graphics().p("Az/XqMAewg0sIJPFZMgewA0sg");
	var mask_1_graphics_179 = new cjs.Graphics().p("A0CXzMAe1g0+IJQFZMge1A0+g");
	var mask_1_graphics_180 = new cjs.Graphics().p("A0EX9MAe5g1QIJQFXMge5A1Qg");
	var mask_1_graphics_181 = new cjs.Graphics().p("A0GYHMAe9g1jIJQFWMge9A1jg");
	var mask_1_graphics_182 = new cjs.Graphics().p("A0IYQMAfAg11IJRFWMgfAA11g");
	var mask_1_graphics_183 = new cjs.Graphics().p("A0LYaMAfFg2IIJSFVMgfFA2Ig");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:53.6,y:-88.9}).wait(1).to({graphics:mask_1_graphics_1,x:53.8,y:-89.1}).wait(1).to({graphics:mask_1_graphics_2,x:54,y:-89.2}).wait(1).to({graphics:mask_1_graphics_3,x:54.2,y:-89.3}).wait(1).to({graphics:mask_1_graphics_4,x:54.4,y:-89.4}).wait(1).to({graphics:mask_1_graphics_5,x:54.6,y:-89.4}).wait(1).to({graphics:mask_1_graphics_6,x:54.8,y:-89.5}).wait(1).to({graphics:mask_1_graphics_7,x:55,y:-89.6}).wait(1).to({graphics:mask_1_graphics_8,x:55.2,y:-89.7}).wait(1).to({graphics:mask_1_graphics_9,x:55.4,y:-89.8}).wait(1).to({graphics:mask_1_graphics_10,x:55.5,y:-90}).wait(1).to({graphics:mask_1_graphics_11,x:55.3,y:-90.1}).wait(1).to({graphics:mask_1_graphics_12,x:55,y:-90.2}).wait(1).to({graphics:mask_1_graphics_13,x:54.8,y:-90.3}).wait(1).to({graphics:mask_1_graphics_14,x:54.5,y:-90.4}).wait(1).to({graphics:mask_1_graphics_15,x:54.3,y:-90.5}).wait(1).to({graphics:mask_1_graphics_16,x:54.1,y:-90.6}).wait(1).to({graphics:mask_1_graphics_17,x:53.8,y:-90.7}).wait(1).to({graphics:mask_1_graphics_18,x:53.6,y:-90.8}).wait(1).to({graphics:mask_1_graphics_19,x:53.3,y:-90.9}).wait(1).to({graphics:mask_1_graphics_20,x:53.1,y:-91}).wait(1).to({graphics:mask_1_graphics_21,x:52.9,y:-91.1}).wait(1).to({graphics:mask_1_graphics_22,x:52.6,y:-91.2}).wait(1).to({graphics:mask_1_graphics_23,x:52.4,y:-91.4}).wait(1).to({graphics:mask_1_graphics_24,x:52.2,y:-91.5}).wait(1).to({graphics:mask_1_graphics_25,x:51.9,y:-91.6}).wait(1).to({graphics:mask_1_graphics_26,x:51.7,y:-91.7}).wait(1).to({graphics:mask_1_graphics_27,x:51.4,y:-91.8}).wait(1).to({graphics:mask_1_graphics_28,x:51.2,y:-91.9}).wait(1).to({graphics:mask_1_graphics_29,x:51,y:-92}).wait(1).to({graphics:mask_1_graphics_30,x:50.7,y:-92.2}).wait(1).to({graphics:mask_1_graphics_31,x:50.5,y:-92.3}).wait(1).to({graphics:mask_1_graphics_32,x:50.2,y:-92.4}).wait(1).to({graphics:mask_1_graphics_33,x:50,y:-92.5}).wait(1).to({graphics:mask_1_graphics_34,x:49.8,y:-92.6}).wait(1).to({graphics:mask_1_graphics_35,x:49.5,y:-92.8}).wait(1).to({graphics:mask_1_graphics_36,x:49.3,y:-92.9}).wait(1).to({graphics:mask_1_graphics_37,x:49,y:-93}).wait(1).to({graphics:mask_1_graphics_38,x:48.8,y:-93.1}).wait(1).to({graphics:mask_1_graphics_39,x:48.6,y:-93.3}).wait(1).to({graphics:mask_1_graphics_40,x:48.3,y:-93.4}).wait(1).to({graphics:mask_1_graphics_41,x:48.1,y:-93.5}).wait(1).to({graphics:mask_1_graphics_42,x:47.8,y:-93.6}).wait(1).to({graphics:mask_1_graphics_43,x:47.6,y:-93.8}).wait(1).to({graphics:mask_1_graphics_44,x:47.4,y:-93.9}).wait(1).to({graphics:mask_1_graphics_45,x:47.1,y:-94}).wait(1).to({graphics:mask_1_graphics_46,x:46.9,y:-94.2}).wait(1).to({graphics:mask_1_graphics_47,x:46.7,y:-94.3}).wait(1).to({graphics:mask_1_graphics_48,x:46.4,y:-94.4}).wait(1).to({graphics:mask_1_graphics_49,x:46.2,y:-94.6}).wait(1).to({graphics:mask_1_graphics_50,x:45.9,y:-94.7}).wait(1).to({graphics:mask_1_graphics_51,x:45.7,y:-94.8}).wait(1).to({graphics:mask_1_graphics_52,x:45.5,y:-95}).wait(1).to({graphics:mask_1_graphics_53,x:45.2,y:-95.1}).wait(1).to({graphics:mask_1_graphics_54,x:45,y:-95.2}).wait(1).to({graphics:mask_1_graphics_55,x:44.7,y:-95.4}).wait(1).to({graphics:mask_1_graphics_56,x:44.5,y:-95.5}).wait(1).to({graphics:mask_1_graphics_57,x:44.3,y:-95.7}).wait(1).to({graphics:mask_1_graphics_58,x:44,y:-95.8}).wait(1).to({graphics:mask_1_graphics_59,x:43.8,y:-95.9}).wait(1).to({graphics:mask_1_graphics_60,x:43.5,y:-96.1}).wait(1).to({graphics:mask_1_graphics_61,x:43.3,y:-96.2}).wait(1).to({graphics:mask_1_graphics_62,x:43.1,y:-96.4}).wait(1).to({graphics:mask_1_graphics_63,x:42.8,y:-96.5}).wait(1).to({graphics:mask_1_graphics_64,x:42.6,y:-96.6}).wait(1).to({graphics:mask_1_graphics_65,x:42.3,y:-96.8}).wait(1).to({graphics:mask_1_graphics_66,x:42.1,y:-96.9}).wait(1).to({graphics:mask_1_graphics_67,x:41.9,y:-97.1}).wait(1).to({graphics:mask_1_graphics_68,x:41.6,y:-97.2}).wait(1).to({graphics:mask_1_graphics_69,x:41.4,y:-97.4}).wait(1).to({graphics:mask_1_graphics_70,x:41.2,y:-97.2}).wait(1).to({graphics:mask_1_graphics_71,x:40.9,y:-96.7}).wait(1).to({graphics:mask_1_graphics_72,x:40.7,y:-96.3}).wait(1).to({graphics:mask_1_graphics_73,x:40.4,y:-95.8}).wait(1).to({graphics:mask_1_graphics_74,x:40.2,y:-95.4}).wait(1).to({graphics:mask_1_graphics_75,x:40,y:-94.9}).wait(1).to({graphics:mask_1_graphics_76,x:39.7,y:-94.5}).wait(1).to({graphics:mask_1_graphics_77,x:39.5,y:-94}).wait(1).to({graphics:mask_1_graphics_78,x:39.2,y:-93.6}).wait(1).to({graphics:mask_1_graphics_79,x:39,y:-93.1}).wait(1).to({graphics:mask_1_graphics_80,x:38.8,y:-92.7}).wait(1).to({graphics:mask_1_graphics_81,x:38.5,y:-92.3}).wait(1).to({graphics:mask_1_graphics_82,x:38.3,y:-91.8}).wait(1).to({graphics:mask_1_graphics_83,x:38,y:-91.4}).wait(1).to({graphics:mask_1_graphics_84,x:37.8,y:-90.9}).wait(1).to({graphics:mask_1_graphics_85,x:37.6,y:-90.5}).wait(1).to({graphics:mask_1_graphics_86,x:37.3,y:-90}).wait(1).to({graphics:mask_1_graphics_87,x:37.1,y:-89.6}).wait(1).to({graphics:mask_1_graphics_88,x:36.8,y:-89.1}).wait(1).to({graphics:mask_1_graphics_89,x:36.6,y:-88.7}).wait(1).to({graphics:mask_1_graphics_90,x:36.4,y:-88.2}).wait(1).to({graphics:mask_1_graphics_91,x:36.1,y:-87.8}).wait(1).to({graphics:mask_1_graphics_92,x:35.9,y:-87.3}).wait(1).to({graphics:mask_1_graphics_93,x:35.6,y:-86.9}).wait(1).to({graphics:mask_1_graphics_94,x:35.4,y:-86.4}).wait(1).to({graphics:mask_1_graphics_95,x:35.2,y:-86}).wait(1).to({graphics:mask_1_graphics_96,x:34.9,y:-85.5}).wait(1).to({graphics:mask_1_graphics_97,x:34.7,y:-85.1}).wait(1).to({graphics:mask_1_graphics_98,x:34.4,y:-84.6}).wait(1).to({graphics:mask_1_graphics_99,x:34.2,y:-84.2}).wait(1).to({graphics:mask_1_graphics_100,x:34,y:-83.7}).wait(1).to({graphics:mask_1_graphics_101,x:33.7,y:-83.3}).wait(1).to({graphics:mask_1_graphics_102,x:33.5,y:-82.8}).wait(1).to({graphics:mask_1_graphics_103,x:33.2,y:-82.4}).wait(1).to({graphics:mask_1_graphics_104,x:33,y:-82}).wait(1).to({graphics:mask_1_graphics_105,x:32.8,y:-81.5}).wait(1).to({graphics:mask_1_graphics_106,x:32.5,y:-81.1}).wait(1).to({graphics:mask_1_graphics_107,x:32.3,y:-80.6}).wait(1).to({graphics:mask_1_graphics_108,x:32.1,y:-80.2}).wait(1).to({graphics:mask_1_graphics_109,x:31.8,y:-79.7}).wait(1).to({graphics:mask_1_graphics_110,x:31.6,y:-79.3}).wait(1).to({graphics:mask_1_graphics_111,x:31.3,y:-78.8}).wait(1).to({graphics:mask_1_graphics_112,x:31.1,y:-78.4}).wait(1).to({graphics:mask_1_graphics_113,x:30.9,y:-77.9}).wait(1).to({graphics:mask_1_graphics_114,x:30.6,y:-77.5}).wait(1).to({graphics:mask_1_graphics_115,x:30.4,y:-77}).wait(1).to({graphics:mask_1_graphics_116,x:30.1,y:-76.6}).wait(1).to({graphics:mask_1_graphics_117,x:29.9,y:-76.1}).wait(1).to({graphics:mask_1_graphics_118,x:29.7,y:-75.7}).wait(1).to({graphics:mask_1_graphics_119,x:29.4,y:-75.2}).wait(1).to({graphics:mask_1_graphics_120,x:29.2,y:-74.8}).wait(1).to({graphics:mask_1_graphics_121,x:28.9,y:-74.3}).wait(1).to({graphics:mask_1_graphics_122,x:28.7,y:-73.9}).wait(1).to({graphics:mask_1_graphics_123,x:28.5,y:-73.4}).wait(1).to({graphics:mask_1_graphics_124,x:28.2,y:-73}).wait(1).to({graphics:mask_1_graphics_125,x:28,y:-72.5}).wait(1).to({graphics:mask_1_graphics_126,x:27.7,y:-72.1}).wait(1).to({graphics:mask_1_graphics_127,x:27.5,y:-71.7}).wait(1).to({graphics:mask_1_graphics_128,x:27.3,y:-71.2}).wait(1).to({graphics:mask_1_graphics_129,x:27,y:-70.8}).wait(1).to({graphics:mask_1_graphics_130,x:26.8,y:-70.3}).wait(1).to({graphics:mask_1_graphics_131,x:26.5,y:-69.9}).wait(1).to({graphics:mask_1_graphics_132,x:26.3,y:-69.4}).wait(1).to({graphics:mask_1_graphics_133,x:26.1,y:-69}).wait(1).to({graphics:mask_1_graphics_134,x:25.8,y:-68.5}).wait(1).to({graphics:mask_1_graphics_135,x:25.6,y:-68.1}).wait(1).to({graphics:mask_1_graphics_136,x:25.3,y:-67.6}).wait(1).to({graphics:mask_1_graphics_137,x:25.1,y:-67.2}).wait(1).to({graphics:mask_1_graphics_138,x:24.9,y:-66.7}).wait(1).to({graphics:mask_1_graphics_139,x:24.6,y:-66.3}).wait(1).to({graphics:mask_1_graphics_140,x:24.4,y:-65.8}).wait(1).to({graphics:mask_1_graphics_141,x:24.1,y:-65.4}).wait(1).to({graphics:mask_1_graphics_142,x:23.9,y:-64.9}).wait(1).to({graphics:mask_1_graphics_143,x:23.6,y:-64.5}).wait(1).to({graphics:mask_1_graphics_144,x:23.4,y:-64}).wait(1).to({graphics:mask_1_graphics_145,x:23.2,y:-63.6}).wait(1).to({graphics:mask_1_graphics_146,x:22.9,y:-63.2}).wait(1).to({graphics:mask_1_graphics_147,x:22.7,y:-62.7}).wait(1).to({graphics:mask_1_graphics_148,x:22.4,y:-62.3}).wait(1).to({graphics:mask_1_graphics_149,x:22.2,y:-61.8}).wait(1).to({graphics:mask_1_graphics_150,x:22,y:-61.4}).wait(1).to({graphics:mask_1_graphics_151,x:21.7,y:-60.9}).wait(1).to({graphics:mask_1_graphics_152,x:21.5,y:-60.5}).wait(1).to({graphics:mask_1_graphics_153,x:21.2,y:-60}).wait(1).to({graphics:mask_1_graphics_154,x:21,y:-59.6}).wait(1).to({graphics:mask_1_graphics_155,x:20.8,y:-59.1}).wait(1).to({graphics:mask_1_graphics_156,x:20.5,y:-58.7}).wait(1).to({graphics:mask_1_graphics_157,x:20.3,y:-58.2}).wait(1).to({graphics:mask_1_graphics_158,x:20,y:-57.8}).wait(1).to({graphics:mask_1_graphics_159,x:19.8,y:-57.3}).wait(1).to({graphics:mask_1_graphics_160,x:19.6,y:-56.9}).wait(1).to({graphics:mask_1_graphics_161,x:19.3,y:-56.4}).wait(1).to({graphics:mask_1_graphics_162,x:19.1,y:-56}).wait(1).to({graphics:mask_1_graphics_163,x:18.8,y:-55.6}).wait(1).to({graphics:mask_1_graphics_164,x:18.6,y:-55.1}).wait(1).to({graphics:mask_1_graphics_165,x:18.3,y:-54.7}).wait(1).to({graphics:mask_1_graphics_166,x:18.1,y:-54.2}).wait(1).to({graphics:mask_1_graphics_167,x:17.9,y:-53.8}).wait(1).to({graphics:mask_1_graphics_168,x:17.6,y:-53.3}).wait(1).to({graphics:mask_1_graphics_169,x:17.4,y:-52.9}).wait(1).to({graphics:mask_1_graphics_170,x:17.1,y:-52.4}).wait(1).to({graphics:mask_1_graphics_171,x:16.9,y:-52}).wait(1).to({graphics:mask_1_graphics_172,x:16.6,y:-51.5}).wait(1).to({graphics:mask_1_graphics_173,x:16.4,y:-51.1}).wait(1).to({graphics:mask_1_graphics_174,x:16.2,y:-50.6}).wait(1).to({graphics:mask_1_graphics_175,x:15.9,y:-50.2}).wait(1).to({graphics:mask_1_graphics_176,x:15.7,y:-49.8}).wait(1).to({graphics:mask_1_graphics_177,x:15.4,y:-49.3}).wait(1).to({graphics:mask_1_graphics_178,x:15.2,y:-48.9}).wait(1).to({graphics:mask_1_graphics_179,x:14.9,y:-48.4}).wait(1).to({graphics:mask_1_graphics_180,x:14.7,y:-48}).wait(1).to({graphics:mask_1_graphics_181,x:14.4,y:-47.5}).wait(1).to({graphics:mask_1_graphics_182,x:14.2,y:-47.1}).wait(1).to({graphics:mask_1_graphics_183,x:13.9,y:-46.7}).wait(1).to({graphics:null,x:0,y:0}).wait(51));

	// part 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E4142E").ss(1,0,0,4).p("At3w9QhHBQhIB3QiODuAADCQhbC0hrDGQjYGLhWBcQgeAggxA/Qg4BHgVAYQhZBmhBgCIgtBYQg3Blg2BEQgLAOAJASQAGAKAQATQALAQgGALQgIAPgoAMQg1AQgsgHEAjKAKpIADAX");
	this.shape_2.setTransform(112.7,0);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(235));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.6,-109.6,98.7,30.5);


(lib.btnclose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxgxIBjBj");
	this.shape.setTransform(-306.7,0.2,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxgxIBjBj");
	this.shape_1.setTransform(-306.7,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660000").s().p("AhMBNQgfggAAgtQAAgsAfggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAgQggAfgtAAQgsAAgggfg");
	this.shape_2.setTransform(-306.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-317.4,-10.8,21.6,21.6);


(lib.blackfade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Egq9AfVMAAAg+pMBV7AAAMAAAA+pg");
	this.shape.setTransform(275,200,1,0.998);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackfade, new cjs.Rectangle(0,0,550,400), null);


(lib.infoboxseedeater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{primitive_bacteria:0});

	// close btn
	this.close_btn = new lib.btnclose();
	this.close_btn.parent = this;
	this.close_btn.setTransform(-82.6,-28.7,0.816,0.816);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.close_btn).wait(1));

	// info box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQA2IgYgoIgLAKIAAAeIgNAAIAAhrIANAAIAAA+IAhghIAQAAIgeAcIAhAyg");
	this.shape.setTransform(97.3,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgFALgCIAUgCQAEgBACgEIABgEQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQABgOAIgFQAKgHAMAAQANABAIAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgEgFQgCgDAAgFQgEAGgIAEQgGADgJAAQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQAMgFAAgMIAAgKIgHACg");
	this.shape_1.setTransform(89.1,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_2.setTransform(80.5,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAzIgIgIIAAAKIgMAAIAAhrIANAAIAAAnQAEgGAHgDQAGgDAGAAQAOAAAJAKQAKAKAAATQAAATgJAMQgJAMgRAAQgHAAgHgEgAgPgIQgHAGAAAPQAAALADAHQAFANAOAAQAKAAAGgJQAFgIAAgOQAAgNgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_3.setTransform(72.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_4.setTransform(60.3,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_5.setTransform(54.3,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_6.setTransform(50.7,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgCgEQgDgHgKABQgIgBgGAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgEAJgBQARABAGAMQADAGAAALIAAAyg");
	this.shape_7.setTransform(40.8,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_8.setTransform(34.4,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_9.setTransform(30.8,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAnIgQg7IgPA7IgNAAIgXhNIAPAAIAOA9IAPg9IAPAAIAPA8IAQg8IANAAIgXBNg");
	this.shape_10.setTransform(23.7,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_11.setTransform(10.5,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQABQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHABQgOAAgJgLgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_12.setTransform(2.3,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_13.setTransform(-5.8,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_14.setTransform(-14.1,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_15.setTransform(-21.9,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_16.setTransform(-33.6,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAQA2IgYgoIgLAKIAAAeIgNAAIAAhrIANAAIAAA+IAhghIAQAAIgdAcIAfAyg");
	this.shape_17.setTransform(-40.6,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAeQgIgLgBgRQABgUAJgLQALgMAOAAQANAAAJAHQAIAGACAQIgOAAQgBgIgDgEQgFgFgJAAQgMAAgFANQgDAHAAALQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgDAQgIAHQgJAIgOgBQgPABgJgMg");
	this.shape_18.setTransform(-48.5,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAGgFALgCIAUgCQAFgBACgEIAAgEQAAgHgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAFIgMAAQAAgOAKgFQAIgHAMAAQANABAJAFQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgHAEQgHADgJAAQgLABgHgHgAAJACIgHABIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgMIAAgKIgGACg");
	this.shape_19.setTransform(-56.3,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_20.setTransform(-62.7,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_21.setTransform(-71,-0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAjQgJgIAAgNIAVAAQAAAGACACQAEAEAKAAQAGAAAEgBQADgCAAgEQAAgDgDgCQgCgCgSgFQgOgDgGgEQgGgFABgJQgBgLAKgIQAIgIAQAAQAOAAAJAGQAJAGACAOIgVAAQAAgEgCgCQgDgEgIAAQgGAAgEACQgDACAAADQAAADADACQADACATAEQAMADAGAFQAHAGAAAJQgBALgIAIQgKAHgSAAQgSAAgIgHg");
	this.shape_22.setTransform(63.1,-14.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_23.setTransform(55,-14.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJA2IAAhPIATAAIAABPgAgJgiIAAgTIATAAIAAATg");
	this.shape_24.setTransform(48.6,-16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgaAfQgKgMAAgSQAAgUAKgLQALgLAQAAQAPAAAJAGQAKAHACARIgWAAQAAgEgDgEQgDgFgHABQgKAAgEAKQgCAGAAAHQAAAKACAEQAEALAJgBQAIAAADgDQACgEABgGIAWAAQgBAJgGAJQgKANgTAAQgTAAgIgLg");
	this.shape_25.setTransform(42.4,-14.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_26.setTransform(34.2,-14.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgmA5IAAhvIAUAAIAAAMQAEgFAEgDQAHgFAIgBQAOABAKAJQAKALAAAUQAAAUgKALQgJAMgPAAQgJgBgGgFQgEgCgDgFIAAAqgAgPgbQgDAGAAAJQAAANAIAFQAEAEAGAAQAIAAAFgHQAEgFAAgMQAAgJgEgHQgEgIgJAAQgLABgEAKg");
	this.shape_27.setTransform(25.5,-13);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAjQgKgIABgNIAUAAQABAGADACQADAEAJAAQAHAAADgBQAEgCAAgEQAAgDgDgCQgDgCgRgFQgOgDgGgEQgFgFgBgJQAAgLAJgIQAJgIAQAAQAOAAAJAGQAKAGABAOIgVAAQAAgEgCgCQgEgEgHAAQgGAAgDACQgDACgBADQABADADACQADACARAEQANADAGAFQAGAGAAAJQABALgJAIQgKAHgSAAQgSAAgIgHg");
	this.shape_28.setTransform(16.6,-14.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAzQgKgGgBgMIAXAAQABAEACABQADAEAHAAQALAAAEgIQACgFAAgMIAAgFQgCAGgDACQgHAFgJAAQgPAAgKgLQgJgLAAgRQAAgSAJgMQAJgMAQAAQAGAAADACQAJACAEAJIAAgLIAVAAIAABKQAAAQgGAIQgJANgYAAQgPAAgKgGgAgOgbQgCAFAAAIQAAAHADAGQAEAJAJAAQAIgBAFgFQAFgFAAgMQAAgLgFgGQgEgGgJAAQgJAAgFALg");
	this.shape_29.setTransform(3.5,-13);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAOApIAAgwQABgGgCgDQgDgHgJAAQgKAAgDAJQgCAFAAAIIAAAqIgVAAIAAhPIAUAAIAAAMQAEgGAEgDQAGgFAJAAQANAAAHAHQAIAGAAAPIAAA1g");
	this.shape_30.setTransform(-5.4,-14.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJA2IAAhPIATAAIAABPgAgJgiIAAgTIATAAIAAATg");
	this.shape_31.setTransform(-12.1,-16);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAAyQgEgBgDgDQgEgDABgIIAAgwIgMAAIAAgPIAMAAIAAgWIATAAIAAAWIANAAIAAAPIgNAAIAAApQAAAFABABQACACAGAAIACAAIACgBIAAAQIgKAAIgDAAIgJgBg");
	this.shape_32.setTransform(-16.7,-15.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgeAkQgGgHAAgLQAAgPALgFQAGgEAMgBIAHgBIAIgCQAEgCAAgEQAAgEgDgCQgEgCgFAAQgIAAgDADIgDAIIgUAAQAAgLAFgGQAJgLAUAAQAMAAAKAFQALAFAAAOIAAAkIAAAKIACAFIADACIAAAEIgYAAIgBgFIAAgFQgFAFgFADQgGAEgJAAQgKAAgIgGgAAIADIgGABIgEABQgGABgDACQgFADAAAFQAAAGADACQADADAEAAQAGAAAGgEQAGgEAAgLIAAgIg");
	this.shape_33.setTransform(-23.2,-14.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_34.setTransform(-31.4,-14.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape_35.setTransform(-38.2,-14.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgdAsQgJgLAAgSQAAgUAJgLQAKgMAPAAQAHAAAFADQAGADADAGIAAgmIAWAAIAABrIgUAAIAAgLQgFAHgGADQgFADgIAAQgOAAgKgLgAgMgDQgFAGABAKQgBALAFAHQAEAHAIAAQAJAAAEgHQAFgHABgKQAAgOgIgGQgEgEgGAAQgJAAgEAHg");
	this.shape_36.setTransform(-45.4,-15.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_37.setTransform(-53.8,-14.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_38.setTransform(-62.1,-14.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfAvQgNgKAAgQIAWAAQABAHADAEQAGAGAMABQAIgBAFgCQAKgDAAgJQAAgFgFgDQgEgDgLgCIgKgDQgRgEgHgEQgLgHAAgPQAAgPALgKQALgJAUAAQAQAAANAJQAMAJAAARIgVAAQgBgJgIgFQgFgDgHAAQgJABgGADQgFAEAAAGQAAAGAFACQAEADALACIASAEQAMAEAGADQAKAIAAAPQAAAOgMAKQgLAKgVAAQgUAAgMgKg");
	this.shape_39.setTransform(-71.3,-15.9);

	this.instance = new lib.infoboxbg();
	this.instance.parent = this;
	this.instance.setTransform(61.1,0,1.381,0.297);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.infoboxseedeater, new cjs.Rectangle(-341.5,-37.5,553.8,70.1), null);


(lib.infoboxleafeater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"primitive_bacteria":0});

	// close btn
	this.close_btn = new lib.btnclose();
	this.close_btn.parent = this;
	this.close_btn.setTransform(-82.6,-28.7,0.816,0.816);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.close_btn).wait(1));

	// info box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQA2IgYgoIgLAKIAAAeIgNAAIAAhrIANAAIAAA+IAhghIAQAAIgeAcIAhAyg");
	this.shape.setTransform(-21.2,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgGAKgBIAVgCQAEgBACgEIABgEQAAgHgFgDQgFgDgIAAQgKAAgEAFQgDAEAAAGIgNAAQABgPAIgFQAKgHAMAAQANABAIAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgCgDAAgEQgEAFgIAEQgGAEgJgBQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFAAgMIAAgKIgHACg");
	this.shape_1.setTransform(-29.4,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_2.setTransform(-37.9,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAzIgIgIIAAAKIgMAAIAAhrIANAAIAAAnQAEgGAHgDQAGgDAGAAQAOAAAJAKQAKAKAAATQAAATgJAMQgJAMgRAAQgHAAgHgEgAgPgIQgHAGAAAPQAAALADAHQAFANAOAAQAKAAAGgJQAFgIAAgOQAAgNgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_3.setTransform(-46,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_4.setTransform(-58.2,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_5.setTransform(-64.1,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_6.setTransform(-67.8,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgDgEQgDgHgKABQgIgBgGAGQgHAFABAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgEAIgBQARABAHAMQADAGAAALIAAAyg");
	this.shape_7.setTransform(72.6,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_8.setTransform(66.2,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_9.setTransform(62.6,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAnIgQg7IgPA7IgNAAIgXhNIAOAAIAQA9IAOg9IAPAAIAPA8IAQg8IANAAIgXBNg");
	this.shape_10.setTransform(55.5,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_11.setTransform(42.3,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_12.setTransform(34.3,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_13.setTransform(26.4,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgFALgCIATgCQAGgBABgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAFIgMAAQAAgOAKgFQAIgHAMAAQANABAJAFQAJAFgBAMIAAAsIACADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgBgDgBgFQgEAGgHAEQgHADgJAAQgLABgHgHgAAJACIgIABIgGABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFAAgMIAAgKIgHACg");
	this.shape_14.setTransform(18.7,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_15.setTransform(10.2,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_16.setTransform(4.5,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_17.setTransform(-3.5,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAoIAAhOIANAAIAAAOQABgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_18.setTransform(-7.5,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgFALgCIAUgCQAEgBACgEIABgEQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQABgOAIgFQAKgHAMAAQANABAIAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgEgFQgCgDAAgFQgEAGgIAEQgGADgJAAQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQAMgFAAgMIAAgKIgHACg");
	this.shape_19.setTransform(-14.4,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJALQAKAKAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAFQAFANANAAQAJAAAGgIQAGgIAAgOQAAgJgDgIQgFgNgNAAQgNABgFAOg");
	this.shape_20.setTransform(-22.7,2.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAGgFALgCIAUgCQAGgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAKgFQAJgHALAAQAOABAIAFQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgIAEQgGADgJAAQgLABgHgHgAAJACIgHABIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQAMgFgBgMIAAgKIgGACg");
	this.shape_21.setTransform(-31,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_22.setTransform(-43.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJALQAKAKAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAFQAFANANAAQAJAAAGgIQAGgIAAgOQAAgJgDgIQgFgNgNAAQgNABgFAOg");
	this.shape_23.setTransform(-51,2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_24.setTransform(-57,-0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAaA2IgBgEIgBgIIgBgSQAAgLgIgDQgEgCgIAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgIADQAHACAEAFQACAEABAJIAAAPIABAJQACAFADABIAAADgAgcgEIAfAAQAKAAAHgEQAFgEAAgKQAAgMgIgEQgEgCgIAAIghAAg");
	this.shape_25.setTransform(-63.7,-0.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbAjQgIgIgBgNIAWAAQAAAGADACQADAEAJAAQAHAAAEgBQADgCAAgEQAAgDgCgCQgEgCgSgFQgNgDgGgEQgGgFAAgJQABgLAIgIQAJgIAQAAQAOAAAJAGQAJAGACAOIgVAAQAAgEgCgCQgEgEgHAAQgHAAgDACQgCACAAADQAAADACACQADACATAEQAMADAGAFQAHAGgBAJQAAALgJAIQgIAHgTAAQgSAAgJgHg");
	this.shape_26.setTransform(65.1,-14.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_27.setTransform(56.9,-14.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKA2IAAhPIAVAAIAABPgAgKgiIAAgTIAVAAIAAATg");
	this.shape_28.setTransform(50.5,-16);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbAfQgJgMAAgSQAAgUAKgLQALgLAQAAQAPAAAJAGQAKAHACARIgWAAQAAgEgCgEQgEgFgIABQgJAAgEAKQgCAGAAAHQAAAKACAEQAEALAJgBQAHAAAEgDQADgEAAgGIAVAAQAAAJgGAJQgKANgUAAQgRAAgKgLg");
	this.shape_29.setTransform(44.4,-14.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_30.setTransform(36.2,-14.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgmA5IAAhvIAUAAIAAAMQAEgFAEgDQAHgFAIgBQAOABAKAJQAKALAAAUQAAAUgKALQgJAMgPAAQgJgBgGgFQgEgCgDgFIAAAqgAgPgbQgDAGAAAJQAAANAIAFQAEAEAGAAQAIAAAFgHQAEgFAAgMQAAgJgEgHQgEgIgJAAQgLABgEAKg");
	this.shape_31.setTransform(27.5,-13);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAjQgJgIAAgNIAVAAQAAAGACACQAEAEAKAAQAGAAAEgBQADgCAAgEQAAgDgDgCQgCgCgSgFQgOgDgGgEQgGgFABgJQgBgLAKgIQAIgIAQAAQAOAAAJAGQAJAGACAOIgVAAQAAgEgCgCQgDgEgIAAQgGAAgEACQgDACAAADQAAADADACQADACATAEQAMADAGAFQAHAGAAAJQgBALgIAIQgKAHgSAAQgSAAgIgHg");
	this.shape_32.setTransform(18.6,-14.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZAzQgJgGgCgMIAXAAQABAEACABQADAEAHAAQALAAAEgIQACgFAAgMIAAgFQgCAGgEACQgGAFgJAAQgQAAgIgLQgKgLABgRQAAgSAIgMQAJgMAQAAQAFAAAFACQAHACAFAJIAAgLIAUAAIAABKQABAQgGAIQgJANgYAAQgQAAgJgGgAgOgbQgCAFAAAIQAAAHACAGQAFAJAJAAQAIgBAFgFQAFgFAAgMQAAgLgFgGQgEgGgJAAQgKAAgEALg");
	this.shape_33.setTransform(5.5,-13);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAPApIAAgwQgBgGgBgDQgDgHgJAAQgKAAgDAJQgCAFAAAIIAAAqIgVAAIAAhPIAUAAIAAAMQAEgGADgDQAHgFAJAAQAMAAAIAHQAIAGAAAPIAAA1g");
	this.shape_34.setTransform(-3.4,-14.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgJA2IAAhPIAUAAIAABPgAgJgiIAAgTIAUAAIAAATg");
	this.shape_35.setTransform(-10.1,-16);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAAAyQgEgBgDgDQgEgDAAgIIAAgwIgLAAIAAgPIALAAIAAgWIAVAAIAAAWIAMAAIAAAPIgMAAIAAApQAAAFABABQABACAGAAIACAAIACgBIAAAQIgKAAIgDAAIgJgBg");
	this.shape_36.setTransform(-14.7,-15.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgeAkQgHgHAAgLQABgPAKgFQAHgEAMgBIAHgBIAHgCQAFgCAAgEQAAgEgDgCQgDgCgHAAQgHAAgDADIgDAIIgUAAQABgLAEgGQAJgLAUAAQAMAAALAFQAKAFAAAOIAAAkIAAAKIABAFIAEACIAAAEIgYAAIAAgFIgBgFQgEAFgGADQgGAEgJAAQgKAAgIgGgAAIADIgFABIgFABQgGABgDACQgFADAAAFQAAAGADACQADADAFAAQAFAAAGgEQAGgEAAgLIAAgIg");
	this.shape_37.setTransform(-21.2,-14.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_38.setTransform(-29.4,-14.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_39.setTransform(-36.3,-14.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgKA3IAAhAIgMAAIAAgPIALAAIAAgFQAAgNAFgFQAFgGAPAAIAFAAIADAAIAAARIgFAAQgEAAgCACIgBADIAAAHIANAAIAAAPIgNAAIAABAg");
	this.shape_40.setTransform(-41.2,-16);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdAkQgIgHABgLQgBgPALgFQAHgEAMgBIAHgBIAIgCQAEgCAAgEQAAgEgDgCQgEgCgFAAQgIAAgDADIgDAIIgUAAQAAgLAGgGQAIgLAUAAQANAAAJAFQALAFAAAOIAAAkIAAAKIACAFIACACIAAAEIgWAAIgCgFIAAgFQgEAFgGADQgGAEgIAAQgMAAgGgGgAAIADIgGABIgDABQgHABgDACQgFADAAAFQAAAGADACQADADAEAAQAHAAAFgEQAGgEAAgLIAAgIg");
	this.shape_41.setTransform(-47.7,-14.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_42.setTransform(-55.9,-14.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AglA2IAAhrIAWAAIAABXIA1AAIAAAUg");
	this.shape_43.setTransform(-64.4,-15.9);

	this.instance = new lib.infoboxbg();
	this.instance.parent = this;
	this.instance.setTransform(61.7,-0.5,1.385,0.292);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.infoboxleafeater, new cjs.Rectangle(-341.5,-37.5,554.8,69.1), null);


(lib.infoboxgrubeater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"primitive_bacteria":0});

	// close btn
	this.close_btn = new lib.btnclose();
	this.close_btn.parent = this;
	this.close_btn.setTransform(-373.5,-28.7,0.816,0.816);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.close_btn).wait(1));

	// info box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPA2IgXgoIgLAKIAAAeIgMAAIAAhrIAMAAIAAA+IAhghIARAAIgfAcIAhAyg");
	this.shape.setTransform(2.5,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgGALgBIATgCQAFgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAGIgNAAQAAgPAKgFQAIgHANAAQAMABAJAFQAJAFgBAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgCgDAAgEQgEAFgHAEQgHAEgJgBQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQAKgFABgMIAAgKIgHACg");
	this.shape_1.setTransform(-5.7,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_2.setTransform(-14.2,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAzIgIgIIAAAKIgMAAIAAhrIANAAIAAAnQAEgGAHgDQAGgDAGAAQAOAAAJAKQAKAKAAATQAAATgJAMQgJAMgRAAQgHAAgHgEgAgPgIQgHAGAAAPQAAALADAHQAFANAOAAQAKAAAGgJQAFgIAAgOQAAgNgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_3.setTransform(-22.3,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_4.setTransform(-34.5,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_5.setTransform(-40.4,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_6.setTransform(-44.1,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATA2IAAgxQgBgIgCgEQgDgHgKAAQgHAAgHAGQgHAFAAAPIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgEAIgBQARABAHALQADAHAAAKIAAAzg");
	this.shape_7.setTransform(-54,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_8.setTransform(-60.3,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_9.setTransform(-64,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAnIgQg7IgPA7IgNAAIgXhNIAPAAIAPA9IAOg9IAPAAIAPA8IAQg8IANAAIgXBNg");
	this.shape_10.setTransform(-71,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_11.setTransform(79.3,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_12.setTransform(71.3,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_13.setTransform(63,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_14.setTransform(56.9,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_15.setTransform(51.8,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA3IAAhDIgMAAIAAgLIAMAAIAAgMQAAgIADgEQADgHANABIACAAIADAAIAAAMIgDAAIgBAAQgGAAgCACQAAADgBANIANAAIAAALIgNAAIAABDg");
	this.shape_16.setTransform(43.6,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_17.setTransform(37.3,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAPA2IgXgoIgLAKIAAAeIgNAAIAAhrIANAAIAAA+IAhghIAQAAIgdAcIAfAyg");
	this.shape_18.setTransform(25.8,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_19.setTransform(19.5,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAGgFALgCIAUgCQAGgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAKgFQAJgHALAAQAOABAIAFQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgHAEQgHADgJAAQgLABgHgHgAAJACIgHABIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgMIAAgKIgGACg");
	this.shape_20.setTransform(12.6,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOAzIgIgIIAAAKIgMAAIAAhrIANAAIAAAnQAEgGAHgDQAGgDAGAAQAOAAAJAKQAKAKAAATQAAATgJAMQgJAMgRAAQgHAAgHgEgAgPgIQgHAGAAAPQAAALADAHQAFANAOAAQAKAAAGgJQAFgIAAgOQAAgNgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_21.setTransform(4.3,-0.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_22.setTransform(-8.4,1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgHgKABQgHgBgHAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgEAJgBQAQABAHAMQADAGAAALIAAAyg");
	this.shape_23.setTransform(-16.6,-0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_24.setTransform(-22.9,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_25.setTransform(-32.8,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_26.setTransform(-40.8,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAzIgIgIIAAAKIgMAAIAAhrIANAAIAAAnQAEgGAHgDQAGgDAGAAQAOAAAJAKQAKAKAAATQAAATgJAMQgJAMgRAAQgHAAgHgEgAgPgIQgHAGAAAPQAAALADAHQAFANAOAAQAKAAAGgJQAFgIAAgOQAAgNgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_27.setTransform(-48.8,-0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_28.setTransform(-57.4,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_29.setTransform(-63.5,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnA2IAAhrIAvAAQAOAAAJAIQAJAIAAAPQAAANgIAJQgIAIgQAAIggAAIAAAugAgYgDIAbAAQAKAAAGgEQAGgEAAgLQAAgMgJgEQgEgCgJAAIgbAAg");
	this.shape_30.setTransform(-71.1,-0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAjQgJgIAAgNIAVAAQAAAGACACQAEAEAKAAQAGAAAEgBQADgCAAgEQAAgDgDgCQgCgCgSgFQgOgDgGgEQgGgFABgJQgBgLAKgIQAIgIAQAAQAOAAAJAGQAJAGACAOIgVAAQAAgEgCgCQgDgEgIAAQgGAAgEACQgDACAAADQAAADADACQADACATAEQAMADAGAFQAHAGAAAJQgBALgIAIQgKAHgSAAQgSAAgIgHg");
	this.shape_31.setTransform(63.1,-14.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_32.setTransform(55,-14.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJA2IAAhPIATAAIAABPgAgJgiIAAgTIATAAIAAATg");
	this.shape_33.setTransform(48.6,-16);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgaAfQgKgMAAgSQAAgUAKgLQALgLAQAAQAPAAAJAGQAKAHACARIgWAAQAAgEgDgEQgDgFgHABQgKAAgEAKQgCAGAAAHQAAAKACAEQAEALAJgBQAIAAADgDQACgEABgGIAWAAQgBAJgGAJQgKANgTAAQgTAAgIgLg");
	this.shape_34.setTransform(42.4,-14.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_35.setTransform(34.2,-14.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgmA5IAAhvIAUAAIAAAMQAEgFAEgDQAHgFAIgBQAOABAKAJQAKALAAAUQAAAUgKALQgJAMgPAAQgJgBgGgFQgEgCgDgFIAAAqgAgPgbQgDAGAAAJQAAANAIAFQAEAEAGAAQAIAAAFgHQAEgFAAgMQAAgJgEgHQgEgIgJAAQgLABgEAKg");
	this.shape_36.setTransform(25.5,-13);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgaAjQgKgIABgNIAUAAQABAGADACQADAEAJAAQAHAAADgBQAEgCAAgEQAAgDgDgCQgDgCgRgFQgOgDgGgEQgFgFgBgJQAAgLAJgIQAJgIAQAAQAOAAAJAGQAKAGABAOIgVAAQAAgEgCgCQgEgEgHAAQgGAAgDACQgDACgBADQABADADACQADACARAEQANADAGAFQAGAGAAAJQABALgJAIQgKAHgSAAQgSAAgIgHg");
	this.shape_37.setTransform(16.6,-14.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgZAzQgKgGgBgMIAXAAQABAEACABQADAEAHAAQALAAAEgIQACgFAAgMIAAgFQgCAGgDACQgHAFgJAAQgPAAgKgLQgJgLAAgRQAAgSAJgMQAJgMAQAAQAGAAADACQAJACAEAJIAAgLIAVAAIAABKQAAAQgGAIQgJANgYAAQgPAAgKgGgAgOgbQgCAFAAAIQAAAHADAGQAEAJAJAAQAIgBAFgFQAFgFAAgMQAAgLgFgGQgEgGgJAAQgJAAgFALg");
	this.shape_38.setTransform(3.5,-13);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAOApIAAgwQABgGgCgDQgDgHgJAAQgKAAgDAJQgCAFAAAIIAAAqIgVAAIAAhPIAUAAIAAAMQAEgGAEgDQAGgFAJAAQANAAAHAHQAIAGAAAPIAAA1g");
	this.shape_39.setTransform(-5.4,-14.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgJA2IAAhPIATAAIAABPgAgJgiIAAgTIATAAIAAATg");
	this.shape_40.setTransform(-12.1,-16);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAAAyQgEgBgDgDQgEgDABgIIAAgwIgMAAIAAgPIAMAAIAAgWIATAAIAAAWIANAAIAAAPIgNAAIAAApQAAAFABABQACACAGAAIACAAIACgBIAAAQIgKAAIgDAAIgJgBg");
	this.shape_41.setTransform(-16.7,-15.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgeAkQgGgHAAgLQAAgPALgFQAGgEAMgBIAHgBIAIgCQAEgCAAgEQAAgEgDgCQgEgCgFAAQgIAAgDADIgDAIIgUAAQAAgLAFgGQAJgLAUAAQAMAAAKAFQALAFAAAOIAAAkIAAAKIACAFIADACIAAAEIgYAAIgBgFIAAgFQgFAFgFADQgGAEgJAAQgKAAgIgGgAAIADIgGABIgEABQgGABgDACQgFADAAAFQAAAGADACQADADAEAAQAGAAAGgEQAGgEAAgLIAAgIg");
	this.shape_42.setTransform(-23.2,-14.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_43.setTransform(-31.4,-14.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape_44.setTransform(-38.2,-14.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgKAzQgDgCgFgGIAAAKIgUAAIAAhrIAVAAIAAAnQAEgGAEgDQAHgDAHgBQAQAAAJAMQAJALAAARQAAATgJAMQgJAMgQAAQgJAAgGgEgAgPAAQgCAFgBAJQAAALAFAGQAFAHAIAAQAIAAAFgGQAEgHAAgLQAAgIgCgGQgFgKgKAAQgLAAgEAKg");
	this.shape_45.setTransform(-45,-15.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgfAcQgEgHAAgNIAAgwIAWAAIAAAwQgBAGACAEQADAFAIABQAKAAAEgJQACgEAAgJIAAgqIAVAAIAABPIgUAAIAAgMIgCADIgCADQgFAEgFACQgDACgGAAQgSAAgGgNg");
	this.shape_46.setTransform(-54.4,-14.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgWApIAAhPIAUAAIAAAOQAEgIADgDQAGgFAJAAIABAAIACAAIAAAWIgDgBIgDAAQgMAAgFAIQgBAFAAAJIAAAmg");
	this.shape_47.setTransform(-61.5,-14.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgjAqQgOgPAAgaQAAgZAOgQQAPgQAXAAQAUAAANAKQAMALACAPIgWAAQgDgLgKgEQgFgCgHAAQgMAAgJAJQgIAKAAATQAAAUAJAIQAJAIALAAQALAAAHgGQAIgHABgKIgZAAIAAgRIAtAAIAAA5IgPAAIgCgOQgGAIgGADQgJAGgMAAQgVAAgOgPg");
	this.shape_48.setTransform(-70.8,-15.9);

	this.instance = new lib.infoboxbg();
	this.instance.parent = this;
	this.instance.setTransform(60.6,0.5,1.375,0.302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.infoboxgrubeater, new cjs.Rectangle(-632.4,-37.5,843.6,71.1), null);


(lib.infoboxconeeater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"primitive_bacteria":0});

	// close btn
	this.close_btn = new lib.btnclose();
	this.close_btn.parent = this;
	this.close_btn.setTransform(-419.5,-28.7,0.816,0.816);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.close_btn).wait(1));

	// info box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape.setTransform(108.2,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQgBAGACAEQADAHAKAAQANAAAEgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgCAEgFADQgHAGgKAAQgQAAgGgLg");
	this.shape_1.setTransform(102,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_2.setTransform(93.7,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_3.setTransform(81.8,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgMAQAAQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHABQgOgBgJgKgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_4.setTransform(73.6,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_5.setTransform(65.5,16.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_6.setTransform(57.2,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_7.setTransform(49.4,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_8.setTransform(37.2,16.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgCgEQgEgHgKAAQgIAAgGAGQgHAFABAPIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgEAIgBQASABAGALQADAHAAAKIAAAzg");
	this.shape_9.setTransform(29,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_10.setTransform(22.7,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_11.setTransform(14.4,15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHA3IAAhDIgKAAIAAgKIAKAAIAAgNQABgIACgEQAEgHANAAIADAAIACAAIAAANIgCAAIgCAAQgGAAgBACQgBADAAAOIAMAAIAAAKIgMAAIAABDg");
	this.shape_12.setTransform(10.3,15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_13.setTransform(6.6,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_14.setTransform(3.3,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgMAQAAQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHABQgOgBgJgKgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_15.setTransform(-6.9,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJAAIgHACQgGABgDAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAHgHAGgDQAGgDAGAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_16.setTransform(-14.9,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgGAKgBIAVgCQAEgBACgEIABgEQAAgHgFgDQgFgDgIAAQgKAAgEAFQgDAEAAAGIgNAAQABgPAIgFQAKgHAMAAQANABAIAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgCgDAAgEQgEAFgIAEQgGAEgJgBQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFAAgMIAAgKIgHACg");
	this.shape_17.setTransform(-23.1,16.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_18.setTransform(-35.3,16.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_19.setTransform(-43.3,16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJAAIgHACQgFABgEAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAHgHAFgDQAGgDAHAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_20.setTransform(-51.5,16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_21.setTransform(-59.9,16.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAeQgJgLAAgRQAAgTAKgMQAKgMAPAAQANAAAIAHQAJAGACAQIgOAAQgBgHgDgFQgFgFgJAAQgLAAgGANQgEAIABAKQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgDAQgJAHQgIAIgOgBQgOAAgKgLg");
	this.shape_22.setTransform(-67.6,16.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_23.setTransform(98.2,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_24.setTransform(94.2,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAGgFALgCIAUgCQAGgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAKgFQAJgHALAAQAOABAIAFQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgHAEQgHADgJAAQgLABgHgHgAAJACIgHABIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgMIAAgKIgGACg");
	this.shape_25.setTransform(87.3,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJALQAKAKAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAFQAFANANAAQAJAAAGgIQAGgIAAgOQAAgJgDgIQgFgNgNAAQgNABgFAOg");
	this.shape_26.setTransform(79,2.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgFALgCIATgCQAFgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQABgOAIgFQAKgHAMAAQAMABAJAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgCgDAAgFQgEAGgHAEQgHADgJAAQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQAKgFABgMIAAgKIgHACg");
	this.shape_27.setTransform(70.7,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_28.setTransform(60.6,-0.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_29.setTransform(57.3,-0.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQAAAGABAEQAEAHAJAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_30.setTransform(51.4,1.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJALQAKAKAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAFQAFANANAAQAJAAAGgIQAGgIAAgOQAAgJgDgIQgFgNgNAAQgNABgFAOg");
	this.shape_31.setTransform(43.4,2.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_32.setTransform(30.7,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_33.setTransform(24.4,0.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAQA2IgYgoIgLAKIAAAeIgMAAIAAhrIAMAAIAAA+IAhghIARAAIgfAcIAhAyg");
	this.shape_34.setTransform(15,-0.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgFALgCIAUgCQAEgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQABgOAIgFQAKgHAMAAQAMABAJAFQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgCgDAAgFQgEAGgHAEQgHADgJAAQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQAKgFABgMIAAgKIgHACg");
	this.shape_35.setTransform(6.8,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_36.setTransform(-1.7,1.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOAzIgIgIIAAAKIgMAAIAAhrIANAAIAAAnQAEgGAHgDQAGgDAGAAQAOAAAJAKQAKAKAAATQAAATgJAMQgJAMgRAAQgHAAgHgEgAgPgIQgHAGAAAPQAAALADAHQAFANAOAAQAKAAAGgJQAFgIAAgOQAAgNgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_37.setTransform(-9.8,-0.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_38.setTransform(-22,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_39.setTransform(-27.9,0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_40.setTransform(-31.6,-0.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_41.setTransform(-41.1,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFABQgOAAgKgLgAAWgGQgBgJgDgFQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_42.setTransform(-49.1,1.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_43.setTransform(-56.9,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkAkQgFgLgBgUIAAg7IAPAAIAABBQAAAMAEAIQAHALAQAAQARAAAHgMQAEgHAAgMIAAhBIAOAAIAAA7QABAUgGALQgJATgcAAQgaAAgKgTg");
	this.shape_44.setTransform(-65.9,-0.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgaAjQgKgIABgNIAUAAQABAGADACQADAEAJAAQAHAAADgBQAEgCAAgEQAAgDgDgCQgDgCgRgFQgOgDgGgEQgFgFgBgJQAAgLAJgIQAJgIAQAAQAOAAAJAGQAKAGABAOIgVAAQAAgEgCgCQgEgEgHAAQgGAAgDACQgDACgBADQABADADACQADACARAEQANADAGAFQAGAGAAAJQABALgKAIQgJAHgSAAQgSAAgIgHg");
	this.shape_45.setTransform(69.7,-14.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_46.setTransform(61.6,-14.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgKA2IAAhPIAUAAIAABPgAgKgiIAAgTIAUAAIAAATg");
	this.shape_47.setTransform(55.2,-16);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAfQgKgMAAgSQAAgUAKgLQAKgLARAAQAPAAAKAGQAJAHACARIgVAAQgBgEgDgEQgDgFgIABQgJAAgEAKQgCAGAAAHQAAAKACAEQAEALAJgBQAHAAADgDQADgEACgGIAUAAQAAAJgGAJQgKANgUAAQgRAAgJgLg");
	this.shape_48.setTransform(49,-14.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_49.setTransform(40.8,-14.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgmA5IAAhvIAUAAIAAAMQAEgFAEgDQAHgFAIgBQAOABAKAJQAKALAAAUQAAAUgKALQgJAMgPAAQgJgBgGgFQgEgCgDgFIAAAqgAgPgbQgDAGAAAJQAAANAIAFQAEAEAGAAQAIAAAFgHQAEgFAAgMQAAgJgEgHQgEgIgJAAQgLABgEAKg");
	this.shape_50.setTransform(32.1,-13);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgbAjQgIgIgBgNIAWAAQAAAGADACQADAEAJAAQAHAAAEgBQADgCAAgEQAAgDgCgCQgEgCgSgFQgNgDgGgEQgGgFAAgJQABgLAIgIQAJgIAQAAQAOAAAJAGQAJAGACAOIgVAAQAAgEgCgCQgEgEgHAAQgHAAgDACQgCACAAADQAAADACACQADACATAEQAMADAGAFQAHAGgBAJQAAALgJAIQgIAHgTAAQgSAAgJgHg");
	this.shape_51.setTransform(23.2,-14.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZAzQgJgGgCgMIAXAAQABAEACABQADAEAHAAQAMAAADgIQADgFAAgMIAAgFQgEAGgCACQgHAFgJAAQgPAAgKgLQgIgLgBgRQAAgSAJgMQAJgMAQAAQAFAAAEACQAJACAEAJIAAgLIAUAAIAABKQAAAQgFAIQgJANgYAAQgPAAgKgGgAgOgbQgCAFAAAIQAAAHACAGQAEAJALAAQAHgBAFgFQAFgFAAgMQAAgLgFgGQgFgGgHAAQgLAAgEALg");
	this.shape_52.setTransform(10.1,-13);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAOApIAAgwQAAgGgBgDQgDgHgJAAQgJAAgEAJQgCAFAAAIIAAAqIgVAAIAAhPIAUAAIAAAMQAEgGAEgDQAGgFAJAAQANAAAHAHQAIAGAAAPIAAA1g");
	this.shape_53.setTransform(1.2,-14.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKA2IAAhPIAVAAIAABPgAgKgiIAAgTIAVAAIAAATg");
	this.shape_54.setTransform(-5.5,-16);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAAAyQgEgBgDgDQgDgDgBgIIAAgwIgKAAIAAgPIAKAAIAAgWIAUAAIAAAWIAOAAIAAAPIgOAAIAAApQAAAFABABQACACAGAAIACAAIADgBIAAAQIgKAAIgEAAIgJgBg");
	this.shape_55.setTransform(-10.1,-15.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgdAkQgIgHABgLQgBgPALgFQAHgEAMgBIAHgBIAIgCQAEgCAAgEQAAgEgDgCQgEgCgFAAQgIAAgDADIgDAIIgUAAQAAgLAGgGQAIgLAUAAQANAAAKAFQAKAFAAAOIAAAkIAAAKIACAFIACACIAAAEIgWAAIgBgFIgBgFQgFAFgFADQgGAEgIAAQgMAAgGgGgAAIADIgGABIgDABQgHABgDACQgFADAAAFQAAAGADACQADADAEAAQAHAAAFgEQAGgEAAgLIAAgIg");
	this.shape_56.setTransform(-16.6,-14.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_57.setTransform(-24.8,-14.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_58.setTransform(-31.6,-14.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgbAhQgMgKAAgWQAAgUALgLQALgLARAAQAKAAAIAEQAJADAFAIQAFAHACAKQABAFgBAKIg5AAQABAMAIAFQAEADAGAAQAHAAAFgEQACgCACgEIAVAAQgBAHgGAIQgLALgUAAQgOAAgNgJgAASgHQgBgIgFgFQgFgEgHAAQgHAAgFAFQgEAEgBAIIAjAAIAAAAg");
	this.shape_59.setTransform(-38,-14.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAOApIAAgwQAAgGgBgDQgDgHgJAAQgJAAgEAJQgCAFAAAIIAAAqIgVAAIAAhPIAUAAIAAAMQAEgGADgDQAHgFAJAAQAMAAAIAHQAIAGAAAPIAAA1g");
	this.shape_60.setTransform(-46.9,-14.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgeAeQgKgMAAgSQAAgQAKgMQAKgNAUgBQAUABALANQAKAMAAAQQAAASgKAMQgLANgUAAQgUAAgKgNgAgNgRQgFAGAAALQAAAMAFAHQAFAGAIAAQAJAAAFgGQAFgHAAgMQAAgLgFgGQgFgHgJAAQgIAAgFAHg");
	this.shape_61.setTransform(-56.1,-14.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AghApQgOgPAAgZQAAgcAQgPQANgNATAAQAbgBAMATQAHAJABALIgXAAQgCgJgDgDQgHgHgLAAQgLAAgHAKQgHAKAAARQAAASAHAJQAHAJALAAQALAAAHgIQADgEACgIIAXAAQgDARgNAMQgLALgTgBQgWABgNgQg");
	this.shape_62.setTransform(-66,-15.9);

	this.instance = new lib.infoboxbg();
	this.instance.parent = this;
	this.instance.setTransform(61.8,2.5,1.386,0.32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.infoboxconeeater, new cjs.Rectangle(-678.4,-37.5,891.9,75.1), null);


(lib.finchevolveseedeater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer 2
	this.instance = new lib.finchancestor();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,-9.1,0.494,0.494,0,0,0,126.2,77.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.5,regY:77.5,scaleX:0.5,scaleY:0.5,x:-6.2,y:-8.9,alpha:0.981},0).wait(1).to({alpha:0.963},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.944},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.3,alpha:0.926},0).wait(1).to({x:-6.2,y:-8.8,alpha:0.907},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.3,alpha:0.889},0).wait(1).to({alpha:0.87},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.852},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.833},0).wait(1).to({alpha:0.815},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.796},0).wait(1).to({y:-8.7,alpha:0.778},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.4,alpha:0.759},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.3,alpha:0.741},0).wait(1).to({x:-6.4,alpha:0.722},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:-8.6,alpha:0.704},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.685},0).wait(1).to({alpha:0.667},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.648},0).wait(1).to({y:-8.5,alpha:0.63},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.611},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-6.5,alpha:0.593},0).wait(1).to({x:-6.4,alpha:0.574},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-6.5,alpha:0.556},0).wait(1).to({y:-8.4,alpha:0.537},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.519},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.5},0).wait(1).to({alpha:0.481},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.463},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.444},0).wait(1).to({x:-6.6,y:-8.3,alpha:0.426},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-6.5,alpha:0.407},0).wait(1).to({x:-6.6,alpha:0.389},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.37},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.352},0).wait(1).to({y:-8.2,alpha:0.333},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.315},0).wait(1).to({alpha:0.296},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.278},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-6.7,y:-8.1,alpha:0.259},0).wait(1).to({x:-6.6,alpha:0.241},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-6.7,alpha:0.222},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.204},0).wait(1).to({alpha:0.185},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-8,alpha:0.167},0).wait(1).to({alpha:0.148},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.13},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.111},0).wait(1).to({x:-6.8,y:-7.9,alpha:0.093},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-6.7,alpha:0.074},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.056},0).wait(1).to({x:-6.8,alpha:0.037},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.019},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0.1,1,1,0,0,0,70.2,42.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:70.1,x:0,alpha:0.019},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.093},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.185},0).wait(1).to({alpha:0.204},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.315},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.463},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.537},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.593},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.648},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-47.2,140.3,89.7);


(lib.finchevolvegrubeater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer 2
	this.instance = new lib.finchancestor();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,-9.1,0.494,0.494,0,0,0,126.2,77.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.5,regY:77.5,scaleX:0.5,scaleY:0.5,x:-6.2,y:-8.9,alpha:0.981},0).wait(1).to({alpha:0.963},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.944},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.3,alpha:0.926},0).wait(1).to({x:-6.2,y:-8.8,alpha:0.907},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.3,alpha:0.889},0).wait(1).to({alpha:0.87},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.852},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.833},0).wait(1).to({alpha:0.815},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.796},0).wait(1).to({y:-8.7,alpha:0.778},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.4,alpha:0.759},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.3,alpha:0.741},0).wait(1).to({x:-6.4,alpha:0.722},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:-8.6,alpha:0.704},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.685},0).wait(1).to({alpha:0.667},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.648},0).wait(1).to({y:-8.5,alpha:0.63},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.611},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-6.5,alpha:0.593},0).wait(1).to({x:-6.4,alpha:0.574},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-6.5,alpha:0.556},0).wait(1).to({y:-8.4,alpha:0.537},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.519},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.5},0).wait(1).to({alpha:0.481},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.463},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.444},0).wait(1).to({x:-6.6,y:-8.3,alpha:0.426},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-6.5,alpha:0.407},0).wait(1).to({x:-6.6,alpha:0.389},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.37},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.352},0).wait(1).to({y:-8.2,alpha:0.333},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.315},0).wait(1).to({alpha:0.296},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.278},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-6.7,y:-8.1,alpha:0.259},0).wait(1).to({x:-6.6,alpha:0.241},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-6.7,alpha:0.222},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.204},0).wait(1).to({alpha:0.185},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-8,alpha:0.167},0).wait(1).to({alpha:0.148},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.13},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.111},0).wait(1).to({x:-6.8,y:-7.9,alpha:0.093},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-6.7,alpha:0.074},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.056},0).wait(1).to({x:-6.8,alpha:0.037},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.019},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.finchgrubeating();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62.2,-29.2,0.258,0.258,0,0,0,69.7,42);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:259.5,regY:148,x:-13.3,y:-1.9,alpha:0.019},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.093},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.185},0).wait(1).to({alpha:0.204},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.315},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.463},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.537},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.593},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.648},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.1,-47.2,136.5,83.6);


(lib.finchevolveconeeater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer 2
	this.instance = new lib.finchancestor();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,-9.1,0.494,0.494,0,0,0,126.2,77.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.5,regY:77.5,x:-6.2,y:-9,alpha:0.981},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.648},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.593},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.537},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.463},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.315},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.204},0).wait(1).to({alpha:0.185},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.093},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.finchconeeating();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.2,-34,0.252,0.252,0,0,0,69.8,41.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:227.5,regY:173,x:-14.5,y:-1,alpha:0.019},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.093},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.185},0).wait(1).to({alpha:0.204},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.315},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.463},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.537},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.593},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.648},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-47.2,128,89.8);


(lib.finchevolveleafeater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer 2
	this.instance = new lib.finchancestor();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,-9.1,0.494,0.494,0,0,0,126.2,77.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.5,regY:77.5,scaleX:0.5,scaleY:0.5,x:-6.2,y:-8.9,alpha:0.981},0).wait(1).to({alpha:0.963},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.944},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.3,alpha:0.926},0).wait(1).to({x:-6.2,y:-8.8,alpha:0.907},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.3,alpha:0.889},0).wait(1).to({alpha:0.87},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.852},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.833},0).wait(1).to({alpha:0.815},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.796},0).wait(1).to({y:-8.7,alpha:0.778},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.4,alpha:0.759},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-6.3,alpha:0.741},0).wait(1).to({x:-6.4,alpha:0.722},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:-8.6,alpha:0.704},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.685},0).wait(1).to({alpha:0.667},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.648},0).wait(1).to({y:-8.5,alpha:0.63},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.611},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-6.5,alpha:0.593},0).wait(1).to({x:-6.4,alpha:0.574},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-6.5,alpha:0.556},0).wait(1).to({y:-8.4,alpha:0.537},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.519},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.5},0).wait(1).to({alpha:0.481},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.463},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.444},0).wait(1).to({x:-6.6,y:-8.3,alpha:0.426},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-6.5,alpha:0.407},0).wait(1).to({x:-6.6,alpha:0.389},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.37},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.352},0).wait(1).to({y:-8.2,alpha:0.333},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.315},0).wait(1).to({alpha:0.296},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.278},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-6.7,y:-8.1,alpha:0.259},0).wait(1).to({x:-6.6,alpha:0.241},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-6.7,alpha:0.222},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.204},0).wait(1).to({alpha:0.185},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:-8,alpha:0.167},0).wait(1).to({alpha:0.148},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.13},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.111},0).wait(1).to({x:-6.8,y:-7.9,alpha:0.093},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-6.7,alpha:0.074},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.056},0).wait(1).to({x:-6.8,alpha:0.037},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.019},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.finchleafeating();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51.2,-32.3,0.25,0.25,0,0,0,70.2,42.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:245,regY:152.5,x:-7.5,y:-4.8,alpha:0.019},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.093},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.185},0).wait(1).to({alpha:0.204},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.315},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.463},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.537},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.593},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.648},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-47.2,125.1,80.6);


(lib.finch3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.wing1();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,17.9,1,0.022,0,180,0,10.8,17.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({regX:17,regY:12.6,scaleY:1,skewX:0,x:-6.3,y:-5.6},0).wait(1).to({regX:10.8,regY:17.9,x:-12.5,y:-0.3},0).wait(1).to({regX:17,regY:12.6,scaleY:0.02,skewX:180,x:-6.3,y:18},0).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.wing2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.7,14.8,1,0.083,0,180,0,10.7,16.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regX:11.5,regY:18.4,scaleY:1,skewX:0,x:10.5,y:-1.4},0).wait(1).to({regX:10.7,regY:16.9,x:9.7,y:-3.5},0).wait(1).to({regX:11.5,regY:18.4,scaleY:0.08,skewX:180,x:10.5,y:14.6},0).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.wing3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.4,31.7,1,1,0,0,0,10.3,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:17.6,scaleY:0.03,x:7.7,y:16.9},0).to({_off:true},1).wait(4).to({_off:false,regX:10.3,x:0.4},0).wait(1));

	// Layer 4
	this.instance_3 = new lib.wing3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.6,31.7,1,1,0,0,0,10.3,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:17.6,scaleY:0.03,x:3.7,y:16.9},0).to({_off:true},1).wait(4).to({_off:false,regX:10.3,x:-3.6},0).wait(1));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgwASIgBgFQAAgaAxgHQAygHgBAlQABAKgLAAQgIAAgHgIQgFgKgDgCQgTgDgRAMQgRANgCAAQgGAAgDgEg");
	this.shape.setTransform(11.8,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("Ag8BSIgWgFIgMgEQgNgMgSgLQgOgIgRgJQgZgMgTgFIACgCIATgMIAUgBIAAgBIgCgEQAqgKAngZQATgMAagGIA9AAQAIgDASgKQASgLAJgDQAEgCAdABIATAAIAEACIAHAKQAGgEALACQAJACAHAFQARALAJAPQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAIAAgBIgOACIgNAAIgLABQgIABgEgCQgBACgDABIgGAJQgHAAgHAGIgoAjIgCACIgIAGIgJAKIgMAMIgfAbIgRAJIgFADIAAAAIgGAAIgbACQgIAAgRgFg");
	this.shape_1.setTransform(1.2,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,8.1,42.7,38.7);


(lib.finch2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.wing1();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,2.5,1,1,0,0,0,10.8,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:17,regY:12.6,scaleY:0.02,skewX:180,x:-6.3,y:18},0).to({_off:true},1).wait(4).to({_off:false,regX:10.8,regY:17.9,x:-12.5,y:17.9},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.wing2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.7,-2.3,1,1,0,0,0,10.7,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:11.5,regY:18.4,scaleY:0.08,skewX:180,x:10.5,y:14.6},0).to({_off:true},1).wait(4).to({_off:false,regX:10.7,regY:16.3,x:9.7,y:14.8},0).wait(1));

	// Layer 5
	this.instance_2 = new lib.wing3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.4,26.7,1,0.675,0,0,0,10.3,15.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:17.6,scaleY:1,x:7.7,y:31.6},0).wait(1).to({regX:10.3,regY:15.2,scaleY:0.35,x:0.4,y:21.9},0).wait(1).to({regX:17.6,regY:15.1,scaleY:0.03,x:7.7,y:16.9},0).to({_off:true},1).wait(1));

	// Layer 4
	this.instance_3 = new lib.wing3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.6,26.7,1,0.675,0,0,0,10.3,15.1);
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_3.cache(0,-2,36,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(1).to({regX:17.6,scaleY:1,x:3.7,y:31.6},0).wait(1).to({regX:10.3,regY:15.2,scaleY:0.35,x:-3.6,y:21.9},0).wait(1).to({regX:17.6,scaleY:0.03,x:3.7,y:16.9},0).to({_off:true},1).wait(1));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgwASIgBgFQAAgaAxgHQAygHgBAlQABAKgLAAQgIAAgHgIQgFgKgDgCQgTgDgRAMQgRANgCAAQgGAAgDgEg");
	this.shape.setTransform(11.8,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("Ag8BSIgWgFIgMgEQgNgMgSgLQgOgIgRgJQgZgMgTgFIACgCIATgMIAUgBIAAgBIgCgEQAqgKAngZQATgMAagGIA9AAQAIgDASgKQASgLAJgDQAEgCAdABIATAAIAEACIAHAKQAGgEALACQAJACAHAFQARALAJAPQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAIAAgBIgOACIgNAAIgLABQgIABgEgCQgBACgDABIgGAJQgHAAgHAGIgoAjIgCACIgIAGIgJAKIgMAMIgfAbIgRAJIgFADIAAAAIgGAAIgbACQgIAAgRgFg");
	this.shape_1.setTransform(1.2,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-31.7,47.2,64);


(lib.finch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.wing1();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,17.9,1,0.022,0,180,0,10.8,17.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({scaleY:1,skewX:0,y:-0.3},0).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.wing2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.7,14.8,1,0.083,0,180,0,10.7,16.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regY:16.9,scaleY:1,skewX:0,y:-3.5},0).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.wing3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.4,31.7,1,1,0,0,0,10.3,15.2);

	this.instance_3 = new lib.wing3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(7.4,16.9,1,1,0,0,0,15.6,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleY:1,y:31.7}}]}).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_2,p:{scaleY:0.026,y:16.9}}]},2).wait(1));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgkARIgBgFQAAgMAlgNQAmgOAAAQQgMACgKAFQgIADgFADIgBABQgcASgDAAQgFAAgCgEg");
	this.shape.setTransform(17.4,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhAAmQgdgMgcAAQgRAAgmAGQgLAAgCgFQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgFAUgFQAXgFAbAAQAjAAAbANQAbAMAPAAQAjAAAzgRQAbgIAXgKQALgFAlggQAXgUAAATQAAAYhFAgQhHAig6AAQgcAAgdgMg");
	this.shape_1.setTransform(-1.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhlAwQAwgBBLgtQAqgYAggaIAEABQACAAAAAFQAAAOgYASQgkATgNAFQgQAHgpANQgvAPgJAAIgRgBg");
	this.shape_2.setTransform(7.3,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgDAOQAVgSATgfIAEACQACABAAAEQAAAXgWATQgRAHgfAKIgPAEQAWgIARgNg");
	this.shape_3.setTransform(7.3,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgsAiIgFAAIgBgCQAFgHAagLIAfgPIANgVQAJgNAPACIABAAIABAEQAAAGgDAFIgEABQgbAEgGAWQgGAEgFAFIgJAEIghAMIgCAAg");
	this.shape_4.setTransform(11.3,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("Ag4ARQgBgBAAgEQAAgOATgJQAfgHAXAAIAAAAQARAFAQAGQAFAFAEAGIgBADQgCACgEAAQgFAAgJgFQgOgJgOgFIgaAAQgGACgNAMIgQAOIgEgBg");
	this.shape_5.setTransform(11.7,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhXAXQgBgBAAgEQAAgSAtgGICBgQIADAEQgJANgjALQgRAGgQADQgJADgIgBQgTAAgEgQQgZADgJAGIgUANIgFAAg");
	this.shape_6.setTransform(1.3,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgiAKQADgIAQgGQASgJAaAAIAFABQACAAAAAFQAAABgBABQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABQgcABgiAPQgEgBgBgDg");
	this.shape_7.setTransform(-5.2,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("Ag1AlQAAABAAAAQgBAAAAgBQAAAAAAgCQAAgBAAgCQAAgLAxgcIA2geIAFABQABABAAAEQAAAShlAzQgHAAAAgBg");
	this.shape_8.setTransform(-11.1,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AhAAZQACgMA3gTQAlgOAdgHQAFACABADQgGAFg1ARQgxASgQAKQgDgBgCgCg");
	this.shape_9.setTransform(-17.8,19.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AhuAnQAWgNBQgaQBZgfAXgLQAEACACAEQgOAKgxATQgVACgPAJIgCABQgtARhEAVg");
	this.shape_10.setTransform(-20,20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AhGASQAPgNAngKQAlgLAwgFIACAEQgEAGghAKIgPADQgfAJg0ALQgEgBgCgDg");
	this.shape_11.setTransform(-19.5,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgwASIgBgFQAAgaAxgHQAygHgBAlQABAKgLAAQgIAAgHgIQgFgKgDgCQgTgDgRAMQgRANgCAAQgGAAgDgEg");
	this.shape_12.setTransform(11.8,10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AhYAzQgVgNgpAAQgSAAgNAEIgQgHIAQgKIAUgBIAAgCIgCgDQAqgLAngYQATgMAagGIA9AAQAIgDASgKQASgLAJgDQAEgCAdABIATAAIAEACIAHAKQAGgEALACQAJACAHAFQAQALAJAOQgKACgJAEIgMAAIgLABQgIABgEgCQgBACgDABIgBAAIgFACQgTAGgFAPQgTAGgUAPIgGAEIgjALIAAABQguAOgJAAQgqAAgVgMg");
	this.shape_13.setTransform(1.4,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,7.9,58.9,45.7);


(lib.finchflock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.finch();
	this.instance.parent = this;
	this.instance.setTransform(74,46.1,0.642,0.642,0,0,180,-1,3.1);

	this.instance_1 = new lib.finch2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76,8,0.508,0.508,0,0,180,-1,3.1);

	this.instance_2 = new lib.finch3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23,-25.9,0.642,0.642,0,0,180,-1,3.1);

	this.instance_3 = new lib.finch2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23,34.1,1,1,0,0,180,-1,3.1);

	this.instance_4 = new lib.finch();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-30,7.1,0.642,0.642,0,0,180,-1,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.finchflock, new cjs.Rectangle(-60.7,-53.9,168,135.5), null);


// stage content:
(lib.galapagos_finches_canvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{beginning:78});

	// timeline functions:
	this.frame_0 = function() {
		playSound("galap_p1_titlewav");
	}
	this.frame_78 = function() {
		playSound("galap_p2_in1831wav");
	}
	this.frame_410 = function() {
		playSound("galap_p2_oneofwav");
	}
	this.frame_696 = function() {
		playSound("galap_p3_darwinnotedwav");
	}
	this.frame_939 = function() {
		playSound("galap_p4_darwinhypwav");
	}
	this.frame_1218 = function() {
		playSound("galap_p5_thefinceswav");
	}
	this.frame_1320 = function() {
		playSound("galap_p6_finchesadaptwav");
	}
	this.frame_1763 = function() {
		/* stop();
		
		import flash.events.MouseEvent;
		import flash.media.SoundChannel;
		
		seedFinch.buttonMode = true;
		coneFinch.buttonMode = true;
		grubFinch.buttonMode = true;
		leafFinch.buttonMode = true;
		
		var seedEaterSpeak:seedEaterVoice = new seedEaterVoice();
		var coneEaterSpeak:coneEaterVoice = new coneEaterVoice();
		var leafEaterSpeak:leafEaterVoice = new leafEaterVoice();
		var grubEaterSpeak:grubEaterVoice = new grubEaterVoice();
		
		seedInfo.visible = false;
		coneInfo.visible = false;
		grubInfo.visible = false;
		leafInfo.visible = false;
		
		function showSeedInfo(e:MouseEvent):void {
			var seedEaterSpeakStart:SoundChannel = seedEaterSpeak.play();
			seedInfo.visible = true;
			instructions.visible = false;
		}
		
		function showConeInfo(e:MouseEvent):void {
			var coneEaterSpeakStart:SoundChannel = coneEaterSpeak.play();
			coneInfo.visible = true;
			instructions.visible = false;
		}
		
		function showGrubInfo(e:MouseEvent):void {
			var grubEaterSpeakStart:SoundChannel = grubEaterSpeak.play();
			grubInfo.visible = true;
			instructions.visible = false;
		}
		
		function showLeafInfo(e:MouseEvent):void {
			var leafEaterSpeakStart:SoundChannel = leafEaterSpeak.play();
			leafInfo.visible = true;
			instructions.visible = false;
		}
		
		function closeInfo(e:MouseEvent):void {
			SoundMixer.stopAll();
			e.currentTarget.parent.visible = false;
		}
		
		grubFinch.addEventListener(MouseEvent.MOUSE_UP, showGrubInfo);
		coneFinch.addEventListener(MouseEvent.MOUSE_UP, showConeInfo);
		seedFinch.addEventListener(MouseEvent.MOUSE_UP, showSeedInfo);
		leafFinch.addEventListener(MouseEvent.MOUSE_UP, showLeafInfo);
		
		grubInfo.close_btn.addEventListener(MouseEvent.MOUSE_UP, closeInfo);
		coneInfo.close_btn.addEventListener(MouseEvent.MOUSE_UP, closeInfo);
		seedInfo.close_btn.addEventListener(MouseEvent.MOUSE_UP, closeInfo);
		leafInfo.close_btn.addEventListener(MouseEvent.MOUSE_UP, closeInfo);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(78).call(this.frame_78).wait(332).call(this.frame_410).wait(286).call(this.frame_696).wait(243).call(this.frame_939).wait(279).call(this.frame_1218).wait(102).call(this.frame_1320).wait(443).call(this.frame_1763).wait(1));

	// text narration
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAOAAIAAAPg");
	this.shape.setTransform(515.5,384.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJABIgHABQgGABgDAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAHgHAGgDQAFgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_1.setTransform(509.3,381);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_2.setTransform(503.5,379.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQAnIgQg7IgPA7IgNAAIgXhNIAPAAIAPA9IAOg9IAPAAIAPA8IAQg8IANAAIgXBNg");
	this.shape_3.setTransform(496.4,381.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAHAAAIIAAAsg");
	this.shape_4.setTransform(489,381);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEALgCIATgDQAFAAACgDIABgFQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCADAAAGIgNAAQAAgOAKgGQAIgFANgBQAMAAAJAGQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgCgDAAgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgIACIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQAKgFABgNIAAgJIgHABg");
	this.shape_5.setTransform(482.1,381.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgrA2IAAhrIArAAQAVAAAMAQQALAOAAAWQAAAQgGAOQgMAZgaAAgAgcApIAZAAQAHAAAEgBQAJgDAEgIQAFgHACgKIABgLQAAgTgIgLQgHgLgRAAIgZAAg");
	this.shape_6.setTransform(472.6,379.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_7.setTransform(459.1,381.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAHQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_8.setTransform(451.1,381.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_9.setTransform(445.4,379.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAHAAAIIAAAsg");
	this.shape_10.setTransform(441.7,381);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAVgDQAFAAABgDIAAgFQABgHgFgDQgFgDgIAAQgKAAgEAFQgDADgBAGIgMAAQAAgOAJgGQAKgFALgBQAOAAAIAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQALgFAAgNIAAgJIgGABg");
	this.shape_11.setTransform(434.8,381.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgCgEQgEgHgKABQgIgBgGAGQgHAFABAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIAAQASAAAGANQADAGAAALIAAAyg");
	this.shape_12.setTransform(426.4,379.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_13.setTransform(416.8,379.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQABQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGADgHAAQgOABgJgLgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgNgGgIQgGgHgJAAQgIAAgHAIg");
	this.shape_14.setTransform(402.8,379.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAHQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_15.setTransform(394.7,381.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAnAoIAAg2QAAgHgEgEQgEgCgFAAQgIAAgGAFQgFAFAAAMIAAAtIgNAAIAAgyQAAgIgBgEQgDgGgJABQgHAAgGAFQgGAGAAAQIAAAoIgOAAIAAhNIANAAIAAALIAJgIQAGgFAJAAQAJAAAGAFQACACADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAHAAAKIAAAzg");
	this.shape_16.setTransform(384.4,381);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEALgCIATgDQAGAAABgDIABgFQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAKgGQAIgFAMgBQANAAAJAGQAJAFgBAMIAAAsIACADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgIACIgGABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFAAgNIAAgJIgHABg");
	this.shape_17.setTransform(374.2,381.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJABIgHABQgGABgDAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAHgHAGgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_18.setTransform(365.8,381);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgBgEQgEgIgJABIgHABQgFABgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIANAAIAAALQAFgHAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_19.setTransform(353.3,381);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAUgDQAGAAABgDIAAgFQABgHgFgDQgFgDgIAAQgKAAgEAFQgDADgBAGIgMAAQAAgOAKgGQAJgFALgBQAOAAAIAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_20.setTransform(345.2,381.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAnAoIAAg2QAAgHgEgEQgEgCgFAAQgIAAgGAFQgFAFAAAMIAAAtIgNAAIAAgyQAAgIgBgEQgDgGgJABQgHAAgGAFQgGAGAAAQIAAAoIgOAAIAAhNIANAAIAAALIAJgIQAGgFAJAAQAJAAAGAFQACACADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAHAAAKIAAAzg");
	this.shape_21.setTransform(334.6,381);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAzQgJgFgBgNIAOAAQAAAGADADQAFAEAJAAQAOAAAFgLIACgJIABgNQgEAFgGAEQgFADgJAAQgMAAgKgJQgJgKAAgTQAAgUAJgMQAKgLANABQAJAAAGAEIAIAHIAAgJIAMAAIAABGQAAAPgEAJQgIAPgWAAQgNABgIgGgAgRgeQgDAGAAAMQAAAMAGAHQAFAHAJAAQANAAAGgNQADgGAAgKQAAgOgGgIQgGgHgJAAQgNABgFANg");
	this.shape_22.setTransform(319.8,382.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AASAoIAAgwQABgIgCgEQgEgIgJABIgHABQgFABgFAFQgDAEgBAEIAAAMIAAAoIgOAAIAAhNIANAAIAAALQAGgHAFgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_23.setTransform(311.8,381);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQAAAGABAEQAEAHAJAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgEADQgHAGgJAAQgRAAgGgLg");
	this.shape_24.setTransform(303.4,381.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_25.setTransform(295.1,381.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYA3IgEgBIAAgMIAFACIADAAIAGgBIACgDIADgGIADgIIgdhQIAPAAIAUA/IAVg/IAPAAIgNAiIgMAgQgLAegEAHQgEAGgMAAg");
	this.shape_26.setTransform(287.3,382.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAUgDQAGAAABgDIAAgFQABgHgFgDQgFgDgIAAQgKAAgEAFQgDADgBAGIgMAAQAAgOAKgGQAJgFALgBQAOAAAIAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_27.setTransform(275.4,381.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_28.setTransform(263.2,381.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEAKgCIAVgDQAEAAACgDIABgFQAAgHgFgDQgFgDgIAAQgKAAgEAFQgDADAAAGIgNAAQABgOAIgGQAKgFAMgBQANAAAIAGQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgCgDAAgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgIABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQAMgFAAgNIAAgJIgHABg");
	this.shape_29.setTransform(255.5,381.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAPAnIgPg7IgPA7IgOAAIgWhNIAOAAIAPA9IAQg9IANAAIAQA8IAQg8IANAAIgWBNg");
	this.shape_30.setTransform(245.7,381.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgFAFgEQAHgEAIAAQANAAAJALQAKAKAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAFQAFAMANABQAJAAAGgIQAGgIAAgOQAAgKgDgGQgFgNgNgBQgNABgFAOg");
	this.shape_31.setTransform(232.2,382.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_32.setTransform(226.2,379.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AATA2IAAgxQgBgIgBgEQgEgHgKABQgHgBgHAGQgGAFAAAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_33.setTransform(220.5,379.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_34.setTransform(212.6,381.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAHQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_35.setTransform(200.4,381.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgHgKABQgHgBgHAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_36.setTransform(192.2,379.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_37.setTransform(185.9,380);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgDgEQgDgIgJABIgHABQgGABgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhNIAMAAIAAALQAGgHAHgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_38.setTransform(175.6,381);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_39.setTransform(165.6,379.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_40.setTransform(153.6,384.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQABQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGADgHAAQgOABgJgLgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgNgGgIQgGgHgJAAQgIAAgHAIg");
	this.shape_41.setTransform(147.1,379.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_42.setTransform(141.6,379.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAHAAAIIAAAsg");
	this.shape_43.setTransform(137.9,381);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_44.setTransform(130.7,381.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAQAnIgQg7IgPA7IgNAAIgXhNIAOAAIAQA9IAOg9IAOAAIAQA8IAQg8IANAAIgXBNg");
	this.shape_45.setTransform(121.2,381.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAHQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_46.setTransform(107.5,381.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgCgEQgDgHgKABQgIgBgGAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQARAAAGANQADAGAAALIAAAyg");
	this.shape_47.setTransform(99.3,379.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_48.setTransform(92.9,380);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQABQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGADgHAAQgOABgJgLgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgNgGgIQgGgHgJAAQgIAAgHAIg");
	this.shape_49.setTransform(82.4,379.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgDgEQgDgIgJABIgHABQgGABgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhNIAMAAIAAALQAGgHAHgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_50.setTransform(74.4,381);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQAAAGACAEQAEAHAJAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgCAEgEADQgIAGgJAAQgRAAgGgLg");
	this.shape_51.setTransform(66,381.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_52.setTransform(57.7,381.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAHAAAIIAAAsg");
	this.shape_53.setTransform(51.6,381);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAVgDQAFAAABgDIAAgFQABgHgFgDQgFgDgIAAQgKAAgEAFQgDADgBAGIgMAAQAAgOAJgGQAJgFAMgBQAOAAAIAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgHABgDgFQgBgDgBgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQALgFAAgNIAAgJIgGABg");
	this.shape_54.setTransform(44.7,381.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPABQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_55.setTransform(522.5,364.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_56.setTransform(514.7,364.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_57.setTransform(509.3,362.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQgBAGACAEQADAHAKAAQANAAAEgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_58.setTransform(503.4,364.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAHAAAIIAAAsg");
	this.shape_59.setTransform(497.3,364);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYAeQgJgLABgRQgBgUAKgLQALgMAOAAQANABAIAFQAJAHABAQIgNAAQAAgHgFgFQgEgFgJAAQgLAAgGAMQgDAJAAAKQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIANAAQgBAQgKAHQgIAIgOAAQgOAAgKgMg");
	this.shape_60.setTransform(490.7,364.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAHAAAIIAAAsg");
	this.shape_61.setTransform(480.7,364);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEALgCIAUgDQAEAAACgDIABgGQAAgGgFgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQABgOAIgGQAKgFAMgBQANAAAIAGQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEACIgFAAQgGAAgEgFQgCgDAAgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFAAgNIAAgJIgHABg");
	this.shape_62.setTransform(473.8,364.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPABQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_63.setTransform(465.3,364.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgYA3IgEgBIAAgMIAFACIADAAIAGgBIACgDIADgGIADgIIgdhQIAPAAIAUA/IAVg/IAPAAIgMAiIgMAgQgMAegDAHQgGAGgLAAg");
	this.shape_64.setTransform(457.5,365.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgRAHIAAgNIAkAAIAAANg");
	this.shape_65.setTransform(451.2,363.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPABQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_66.setTransform(444.5,364.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_67.setTransform(436.7,364.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_68.setTransform(431.3,362.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgHA3IAAhDIgLAAIAAgLIALAAIAAgMQABgIADgEQADgGANAAIADAAIACAAIAAALIgCAAIgCAAQgGAAgBADQgBAEAAAMIAMAAIAAALIgMAAIAABDg");
	this.shape_69.setTransform(427.6,362.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEAKgCIAVgDQAFAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAJgGQAKgFALgBQANAAAJAGQAJAFAAAMIAAAsIAAADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFACIgEAAQgHAAgDgFQgCgDAAgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgIABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQALgFAAgNIAAgJIgGABg");
	this.shape_70.setTransform(417.4,364.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAHAAAIIAAAsg");
	this.shape_71.setTransform(406.9,364);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_72.setTransform(399.7,364.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgHA3IAAhDIgLAAIAAgLIALAAIAAgMQABgIADgEQADgGANAAIADAAIACAAIAAALIgCAAIgCAAQgGAAgCADQAAAEAAAMIAMAAIAAALIgMAAIAABDg");
	this.shape_73.setTransform(393.6,362.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgNQAJgNAQAAQAIAAAGAEQAEADAEAFIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGAEgHgBQgOABgJgMgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgPgGgHQgGgHgJAAQgIAAgHAIg");
	this.shape_74.setTransform(382.9,362.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgBgEQgEgHgJAAIgHABQgFABgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIANAAIAAALQAFgHAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_75.setTransform(374.9,364);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAUgDQAGAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAKgGQAJgFALgBQAOAAAIAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFACIgEAAQgGAAgEgFQgBgDgBgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFgBgNIAAgJIgGABg");
	this.shape_76.setTransform(366.8,364.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_77.setTransform(360.8,362.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgVAzQgJgGgBgMIAOAAQAAAGADADQAFAEAJAAQAOAAAFgLIACgJIABgNQgEAFgGAEQgFACgJABQgMAAgKgKQgJgJAAgTQAAgUAJgMQAKgLANABQAJAAAGAEIAIAHIAAgJIAMAAIAABGQAAAPgEAJQgIAQgWAAQgNAAgIgGgAgRgeQgDAGAAAMQAAAMAGAHQAFAGAJABQANAAAGgNQADgHAAgJQAAgOgGgIQgGgGgJgBQgNAAgFAOg");
	this.shape_78.setTransform(354.7,365.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgCgEQgEgHgJAAIgHABQgFABgFAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhNIANAAIAAALQAFgHAHgDQAFgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_79.setTransform(346.7,364);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgnA2IAAhrIBNAAIAAANIg/AAIAAAhIA7AAIAAALIg7AAIAAAlIBAAAIAAANg");
	this.shape_80.setTransform(337.8,362.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_81.setTransform(326.2,363);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgHA3IAAhDIgKAAIAAgLIAKAAIAAgMQABgIACgEQAEgGANAAIADAAIADAAIAAALIgDAAIgCAAQgGAAgBADQgBAEAAAMIANAAIAAALIgNAAIAABDg");
	this.shape_82.setTransform(322.2,362.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPABQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_83.setTransform(315.9,364.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_84.setTransform(310.2,362.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgfAeQgIgKAEgTQAEgSANgMQANgMAPABQAIgBAHAEQAHAEADAHQADAFAAAIQAAAFgDAMIg4AAQgDAMAEAGQAEAIALAAQAJAAAIgHQAEgEADgFIANAAIgGAJQgEAGgEADQgHAGgKACQgEACgGgBQgOABgIgMgAgJgXQgHAHgDAKIArAAQABgIgCgGQgDgJgNAAQgIAAgIAGg");
	this.shape_85.setTransform(301,364.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgRA2IAWhrIANAAIgWBrg");
	this.shape_86.setTransform(295.6,362.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgkAzQgHgGACgMIANAAQAAAGACADQAEAEAJAAQAOAAAHgLIAEgJIAEgNQgGAFgGAEQgFACgJABQgNAAgIgKQgHgJAEgTQAEgUAMgMQAMgLANABQAJAAAGAEIAGAHIACgJIAMAAIgPBGQgDAPgGAJQgMAQgVAAQgNAAgIgGgAgOgeQgEAGgCAMQgDAMAEAHQAEAGAJABQANAAAIgNQAFgHACgJQADgOgEgIQgFgGgJgBQgNAAgIAOg");
	this.shape_87.setTransform(289.2,365.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AggAjQgGgGACgLQACgKAJgHQAIgEALgCIAUgDQAFAAACgDQACgCAAgEQACgGgEgDQgFgDgIAAQgKAAgFAFQgDAEgCAFIgNAAQAEgOAKgGQAKgFALgBQAOAAAIAGQAHAFgCAMIgKAsIAAADQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIADAAIACgBIgCAKIgFACIgEAAQgHAAgCgFIgBgIQgFAGgJAEQgHAEgJAAQgLAAgFgHgAANABIgIACIgHABQgIABgEACQgGAEgCAHQgBAGADADQAEADAFAAQAHAAAHgDQAMgFACgNIACgJIgGABg");
	this.shape_88.setTransform(280.9,364.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgfAeQgIgKAEgTQAEgSANgMQANgMAPABQAIgBAHAEQAHAEADAHQADAFAAAIQAAAFgDAMIg4AAQgDAMAEAGQAEAIALAAQAJAAAIgHQAEgEADgFIANAAIgGAJQgEAGgEADQgHAGgKACQgEACgGgBQgOABgIgMgAgJgXQgHAHgDAKIArAAQABgIgCgGQgDgJgNAAQgIAAgIAGg");
	this.shape_89.setTransform(272.8,364.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgvA2IAXhrIAtAAQATAAAGALQADAHgCAJQgCAKgHAHQgEADgGADQAIADADADQAGAHgDAMQgCALgJAIQgMANgUAAgAgeApIAfAAQANAAAHgHQAFgFACgHQACgMgKgEQgFgDgJAAIgcAAgAgTgHIAZAAQAKAAAFgDQAJgEACgKQADgLgIgEQgFgCgJAAIgZAAg");
	this.shape_90.setTransform(263.7,362.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgIAIIADgPIAOAAIgDAPg");
	this.shape_91.setTransform(251.8,367.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgnAvQgKgLAEgRIAOAAQgBAJACAGQAFALASAAQAIAAAHgDQAOgEACgMQACgJgEgEQgFgDgLgDIgNgDQgOgDgFgDQgJgHADgNQADgPAMgJQAMgKARAAQARAAALAJQAKAIgEASIgOAAQABgJgDgFQgFgIgQAAQgMAAgGAFQgHAGgCAHQgBAIAFAEQAEACAOADIAOAEQALACAFAEQAIAHgDAPQgEASgOAHQgPAIgQAAQgUAAgJgKg");
	this.shape_92.setTransform(245.6,362.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgIAIIADgPIAOAAIgDAPg");
	this.shape_93.setTransform(237.6,367.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAbA2IANg/IADgLIADgQIgxBaIgOAAIgMhaIgBADIgCAMIgCAMIgOA/IgOAAIAXhrIAVAAIALBaIAyhaIAUAAIgXBrg");
	this.shape_94.setTransform(230.4,362.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgIAIIADgPIAOAAIgDAPg");
	this.shape_95.setTransform(221,367.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AARA2IAKgzIg3AAIgKAzIgPAAIAWhrIAPAAIgJAtIA3AAIAJgtIAPAAIgXBrg");
	this.shape_96.setTransform(214.6,362.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJAKQAKALAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAGQAFALANABQAJgBAGgHQAGgIAAgOQAAgKgDgGQgFgNgNgBQgNABgFAOg");
	this.shape_97.setTransform(199.9,365.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_98.setTransform(193.9,362.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AATA2IAAgxQgBgIgCgEQgDgGgKAAQgHgBgHAGQgHAFAAAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAIAAQARAAAHANQADAGAAALIAAAyg");
	this.shape_99.setTransform(188.1,362.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_100.setTransform(180.2,364.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgCgEQgEgGgKAAQgIgBgGAGQgGAFAAAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIAAQASAAAGANQADAGAAALIAAAyg");
	this.shape_101.setTransform(168.2,362.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgXAeQgKgLABgRQgBgUAKgLQALgMAOAAQANABAIAFQAJAHABAQIgMAAQgBgHgFgFQgEgFgJAAQgLAAgGAMQgEAJAAAKQABAMAEAIQAFAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgKAHQgJAIgNAAQgOAAgJgMg");
	this.shape_102.setTransform(160.3,364.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAHAAAIIAAAsg");
	this.shape_103.setTransform(154.5,364);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEALgCIAUgDQAEAAACgDIABgGQAAgGgFgDQgFgDgIAAQgKAAgEAFQgDAEAAAFIgNAAQABgOAIgGQAKgFAMgBQANAAAIAGQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEACIgFAAQgGAAgEgFQgCgDAAgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFAAgNIAAgJIgHABg");
	this.shape_104.setTransform(147.6,364.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPABQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_105.setTransform(139,364.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_106.setTransform(131.2,364.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPABQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_107.setTransform(123.2,364.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAHAAAIIAAAsg");
	this.shape_108.setTransform(117.1,364);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPABQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_109.setTransform(105.8,364.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgGgKAAQgHgBgHAGQgGAFAAAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_110.setTransform(97.6,362.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_111.setTransform(91.3,363);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgHAMQAFgBACgGIAAgFIAAgBIAAgBIgHAAIAAgQIAPAAIAAAPQAAAHgEAHQgDAGgIACg");
	this.shape_112.setTransform(83,368.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAFA0IAAhJIgXAAIAAgKQAOgCAFgDQAFgDADgMIAKAAIAABng");
	this.shape_113.setTransform(76.1,362.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgbAsQgJgLAAgOIAOAAQABAKADAEQAFAJANAAQAKAAAGgFQAGgHAAgIQAAgLgGgEQgHgEgLgBIgCAAIgDAAIAAgKIADAAIADABQAHgBAFgCQAIgEAAgKQAAgJgGgEQgFgEgIAAQgMAAgFAJQgDAEAAAKIgNAAQAAgMAFgJQAIgOAUAAQAPAAAJAHQAJAIAAANQAAAJgGAHQgDADgFACQAIACAFAGQAFAHAAAJQAAAPgKAKQgKAJgRAAQgTAAgIgKg");
	this.shape_114.setTransform(68.4,362.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgYAuQgLgJAAgQQAAgJAFgHQAEgFAJgEQgGgCgDgDQgFgGAAgJQAAgMAIgJQAJgIAOAAQAPAAAIAIQAJAIAAALQAAAJgFAGQgCADgHAEQAHADAEADQAHAHAAAMQAAAOgKAKQgIAJgSAAQgOAAgKgIgAgOAHQgHAFAAAKQABAIAFAGQAFAGAKAAQAKAAAGgFQAGgFAAgKQAAgKgHgFQgFgFgKAAQgJAAgFAFgAgNgkQgFAEAAAIQAAAGAGAFQAFAEAHAAQAJAAAFgFQAEgFAAgGQAAgHgEgEQgFgFgJAAQgJAAgEAFg");
	this.shape_115.setTransform(60.2,362.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAFA0IAAhJIgXAAIAAgKQAOgCAFgDQAFgDADgMIAKAAIAABng");
	this.shape_116.setTransform(51.2,362.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgHgJAAIgHABQgGABgDAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAHgHAGgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_117.setTransform(39.5,364);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_118.setTransform(33.4,362.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAUgCQAFgBACgDIAAgGQAAgGgEgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAKgGQAIgFAMgBQANAAAJAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgHABgDgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_119.setTransform(423.8,378);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgXAeQgKgLABgRQgBgUALgLQAKgMAOAAQANABAIAFQAJAHABAQIgMAAQgBgIgFgEQgEgFgJAAQgLAAgGAMQgEAJAAAKQABAMAFAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgKAHQgJAIgNAAQgPAAgIgMg");
	this.shape_120.setTransform(415.8,378);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_121.setTransform(399.5,378);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAgA2IgMggIgoAAIgMAgIgPAAIAohrIAQAAIAnBrgAARAKIgRgvIgRAvIAiAAg");
	this.shape_122.setTransform(378.1,376.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgCgEQgDgHgKABQgIgBgGAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_123.setTransform(365.6,376.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQgBAGACAEQAEAHAJAAQANAAAEgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_124.setTransform(353,378);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_125.setTransform(335.6,376.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgHA3IAAhDIgKAAIAAgLIAKAAIAAgMQABgIACgEQAEgHANABIADAAIADAAIAAALIgDAAIgCAAQgGABgBACQgBAEAAAMIANAAIAAALIgNAAIAABDg");
	this.shape_126.setTransform(324.4,376.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_127.setTransform(294,378);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAQA2IgYgoIgLAKIAAAeIgNAAIAAhrIANAAIAAA+IAhghIAQAAIgeAcIAhAyg");
	this.shape_128.setTransform(259.3,376.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgYAuQgKgIgBgOIANAAQACALAJAEQAFACAGAAQAKAAAGgHQAGgIAAgJQAAgLgHgGQgHgFgIAAQgGAAgGADQgEACgEAEIgMAAIAJg4IA1AAIAAANIgrAAIgFAdIAHgEQAGgDAHAAQAOAAAKAKQAKAIAAAOQAAAPgJAMQgKALgTAAQgNAAgJgHg");
	this.shape_129.setTransform(246.7,376.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgYArQgLgLAAgaQAAgTAFgOQAJgaAXAAQASAAAHAJQAHAKAAAJIgNAAQgBgGgDgEQgEgGgLAAQgKAAgGAKQgHAKAAATQAFgGAGgDQAHgEAGAAQAOAAAJAJQAKAHAAARQAAAOgJALQgJALgSAAQgOAAgKgLgAgNACQgHAFABAMQAAAKAFAHQAGAGAJABQALAAAFgIQAFgHAAgJQAAgIgEgIQgFgFgMAAQgIgBgGAFg");
	this.shape_130.setTransform(238.5,376.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgZAuQgIgIAAgNIANAAQABAMAIADQAEADAFAAQAIAAAHgIQAGgIADgYQgEAHgHADQgGACgHAAQgPAAgJgJQgIgJAAgOQAAgOAIgLQAJgLARAAQAWAAAJAVQAEALAAARQAAASgFAPQgKAZgWAAQgPAAgIgIgAgPgiQgGAGAAALQAAAKAFAGQAFAFALAAQAHAAAHgEQAGgFAAgNQAAgMgGgFQgGgGgIAAQgJAAgGAHg");
	this.shape_131.setTransform(230.1,376.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_132.setTransform(209.3,378);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAUgCQAGgBABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDADgBAGIgMAAQAAgOAKgGQAJgFALgBQAOAAAIAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_133.setTransform(197.1,378);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgXAeQgKgLABgRQgBgUALgLQAKgMAOAAQANABAIAFQAJAHABAQIgMAAQgBgIgFgEQgEgFgJAAQgLAAgGAMQgEAJAAAKQABAMAEAIQAFAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgKAHQgJAIgNAAQgOAAgJgMg");
	this.shape_134.setTransform(189.1,378);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEALgCIATgCQAFgBACgDIABgGQgBgGgEgDQgFgDgIAAQgKAAgFAFQgCADAAAGIgNAAQABgOAIgGQAKgFAMgBQAMAAAJAGQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgCgDAAgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgIACIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQAKgFABgNIAAgJIgHABg");
	this.shape_135.setTransform(137.3,378);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_136.setTransform(131.4,376.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_137.setTransform(120.3,376.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgVAzQgJgGgBgMIAOAAQAAAGADADQAFAEAJAAQAOAAAFgLIACgJIABgNQgEAFgGAEQgFACgJAAQgMABgKgKQgJgJAAgTQAAgUAJgMQAKgLANABQAJAAAGAEIAIAHIAAgJIAMAAIAABGQAAAPgEAJQgIAQgWAAQgNAAgIgGgAgRgeQgDAGAAAMQAAAMAGAHQAFAGAJABQANAAAGgNQADgHAAgJQAAgOgGgIQgGgGgJgBQgNAAgFAOg");
	this.shape_138.setTransform(468.2,362.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAVgDQAFAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAJgGQAJgFAMgBQAOAAAIAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFACIgEAAQgHAAgDgFQgBgDgBgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQALgFAAgNIAAgJIgGABg");
	this.shape_139.setTransform(432.1,361);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AghAsQgOgPAAgbQAAgaAOgQQAOgQAUAAQAPAAALAGQAQAJAEAVIgPAAQgCgMgIgFQgJgGgMAAQgOAAgKALQgKAMAAAVQAAATAJAMQAIAMASAAQAOAAAJgIQAKgJAAgTIgiAAIAAgLIAvAAIAAA5IgJAAIgDgOQgIAIgFADQgKAGgNAAQgTAAgOgNg");
	this.shape_140.setTransform(421.7,359.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_141.setTransform(407.8,361);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AASA2IAAgxQABgIgCgEQgEgGgKAAQgHgBgHAGQgGAFAAAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_142.setTransform(399.6,359.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEAKgCIAVgDQAEAAACgDIABgGQAAgGgFgDQgFgDgIAAQgKAAgEAFQgDAEAAAFIgNAAQABgOAIgGQAKgFAMgBQANAAAIAGQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFACIgEAAQgGAAgEgFQgCgDAAgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFAAgNIAAgJIgHABg");
	this.shape_143.setTransform(375.6,361);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAPAnIgPg7IgPA7IgOAAIgWhNIAOAAIAQA9IAPg9IANAAIAQA8IAQg8IANAAIgWBNg");
	this.shape_144.setTransform(365.9,360.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgNQAJgNAQABQAIgBAGAEQAEADAEAFIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGAEgHgBQgOABgJgMgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgPgGgHQgGgHgJAAQgIAAgHAIg");
	this.shape_145.setTransform(351.9,359.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_146.setTransform(343.8,361);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJAKQAKALAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAGQAFALANABQAJgBAGgHQAGgIAAgOQAAgKgDgGQgFgNgNgBQgNABgFAOg");
	this.shape_147.setTransform(335.8,362.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJAKQAKALAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAGQAFALANABQAJgBAGgHQAGgIAAgOQAAgKgDgGQgFgNgNgBQgNABgFAOg");
	this.shape_148.setTransform(327.5,362.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_149.setTransform(318.9,361);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_150.setTransform(312.7,359.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_151.setTransform(294.8,361);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgGA2IAAhrIAMAAIAABrg");
	this.shape_152.setTransform(289.1,359.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgVAzQgJgGgBgMIAOAAQAAAGADADQAFAEAJAAQAOAAAFgLIACgJIABgNQgEAFgGAEQgFACgJAAQgMABgKgKQgJgJAAgTQAAgUAJgMQAKgLANABQAJAAAGAEIAIAHIAAgJIAMAAIAABGQAAAPgEAJQgIAQgWAAQgNAAgIgGgAgRgeQgDAGAAAMQAAAMAGAHQAFAGAJABQANAAAGgNQADgHAAgJQAAgOgGgIQgGgGgJgBQgNAAgFAOg");
	this.shape_153.setTransform(283,362.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAVgDQAFAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAJgGQAKgFALgBQANAAAJAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFACIgEAAQgHAAgDgFQgCgDAAgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgHABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQALgFAAgNIAAgJIgGABg");
	this.shape_154.setTransform(275.2,361);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_155.setTransform(266.6,361);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgpA2IAAhrIAuAAQATAAAIALQAFAHAAAJQAAAKgGAHIgJAGQAIADAFADQAHAHAAAMQAAALgHAIQgKANgVAAgAgaApIAeAAQAOAAAGgHQADgFAAgHQAAgMgKgEQgGgDgJAAIgcAAgAgagHIAaAAQAJAAAFgDQAIgEAAgKQAAgLgJgEQgFgCgIAAIgaAAg");
	this.shape_156.setTransform(257.8,359.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_157.setTransform(244.2,361);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgCgEQgDgGgKAAQgIgBgGAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_158.setTransform(236,359.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_159.setTransform(229.6,359.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_160.setTransform(219.3,361);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAHAAAIIAAAsg");
	this.shape_161.setTransform(213.2,360.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_162.setTransform(206,361);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgCgEQgDgGgKAAQgIgBgGAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQARAAAGANQADAGAAALIAAAyg");
	this.shape_163.setTransform(197.8,359.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAPAnIgPg7IgPA7IgOAAIgWhNIAOAAIAPA9IAQg9IANAAIAQA8IAQg8IANAAIgWBNg");
	this.shape_164.setTransform(188.2,360.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_165.setTransform(175,361);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_166.setTransform(167,361);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgXAeQgJgLAAgRQAAgUAKgLQAKgMAOAAQANABAJAFQAIAHABAQIgMAAQgCgHgEgFQgEgFgJAAQgLAAgGAMQgDAJgBAKQAAAMAGAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgJAHQgKAIgNAAQgPAAgIgMg");
	this.shape_167.setTransform(159.2,361);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEAKgCIAVgDQAFAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAJgGQAKgFALgBQANAAAJAGQAJAFAAAMIAAAsIAAADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFACIgEAAQgHAAgDgFQgCgDAAgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgHABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQALgFAAgNIAAgJIgGABg");
	this.shape_168.setTransform(151.4,361);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAIAAQANAAAJAKQAKALAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgFIAAAogAgSgdQgDAGAAAMQAAAJADAGQAFALANABQAJgBAGgHQAGgIAAgOQAAgKgDgGQgFgNgNgBQgNABgFAOg");
	this.shape_169.setTransform(139.8,362.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_170.setTransform(127.1,361);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgDgEQgDgGgKAAQgHgBgHAGQgHAFABAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIAAQARAAAHANQADAGAAALIAAAyg");
	this.shape_171.setTransform(118.9,359.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_172.setTransform(112.6,359.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgHA3IAAhDIgKAAIAAgLIAKAAIAAgMQABgIACgEQAEgHANABIADAAIACAAIAAALIgCAAIgCAAQgGAAgBADQgBAEAAAMIAMAAIAAALIgMAAIAABDg");
	this.shape_173.setTransform(104.4,359.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_174.setTransform(98.1,361);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgMgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_175.setTransform(85.6,361);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AATAoIAAgwQgBgIgCgEQgDgHgJAAIgHABQgGABgEAFQgCAEgBAEIgCAMIAAAoIgNAAIAAhNIAMAAIAAALQAGgHAHgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_176.setTransform(77.4,360.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAPA2IgXgoIgLAKIAAAeIgMAAIAAhrIAMAAIAAA+IAhghIARAAIgeAcIAfAyg");
	this.shape_177.setTransform(474.8,379.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAUgDQAFAAACgDIAAgFQAAgHgEgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAKgGQAIgFAMgBQANAAAJAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgHABgDgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_178.setTransform(466.6,381.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgOAzIgIgIIAAAKIgMAAIAAhrIANAAIAAAnQAEgGAHgDQAGgDAGAAQAOAAAJAKQAKAKAAATQAAATgJAMQgJAMgRAAQgHAAgHgEgAgPgIQgHAGAAAPQAAALADAHQAFANAOAAQAKAAAGgJQAFgIAAgOQAAgNgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_179.setTransform(450,379.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgGA3IAAhDIgMAAIAAgLIAMAAIAAgMQAAgIADgEQADgHANABIACAAIADAAIAAALIgDAAIgBAAQgGAAgCADQgBAEAAAMIANAAIAAALIgNAAIAABDg");
	this.shape_180.setTransform(406.3,379.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAUgDQAFAAACgDIAAgFQAAgHgEgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAKgGQAIgFAMgBQANAAAJAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_181.setTransform(371.2,381.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AATA2IAAgxQgBgIgCgEQgDgHgKABQgHgBgHAGQgHAFAAAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAIAAQARAAAHANQADAGAAALIAAAyg");
	this.shape_182.setTransform(362.7,379.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgDgEQgDgHgKABQgHgBgHAGQgHAFABAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIAAQARAAAHANQADAGAAALIAAAyg");
	this.shape_183.setTransform(334.5,379.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJABIgHABQgFABgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAGgHAGgDQAGgDAIAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_184.setTransform(317.9,381);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAUgDQAGAAABgDIAAgFQABgHgFgDQgFgDgIAAQgKAAgEAFQgDADgBAGIgMAAQAAgOAKgGQAJgFALgBQAOAAAIAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgGABgEgFQgBgDgBgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQAMgFgBgNIAAgJIgGABg");
	this.shape_185.setTransform(294.8,381.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAQAnIgQg7IgPA7IgNAAIgXhNIAOAAIAQA9IAOg9IAPAAIAPA8IAQg8IANAAIgXBNg");
	this.shape_186.setTransform(285,381.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJABIgHABQgFABgEAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAHgHAFgDQAGgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_187.setTransform(263.1,381);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQABAGABAEQADAHAKAAQANAAAEgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_188.setTransform(254.7,381.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgGA3IAAhDIgMAAIAAgLIAMAAIAAgMQAAgIADgEQADgHANABIACAAIADAAIAAALIgDAAIgBAAQgGAAgCADQgBAEABAMIAMAAIAAALIgMAAIAABDg");
	this.shape_189.setTransform(240.2,379.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAHQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_190.setTransform(229.8,381.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAHQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_191.setTransform(209,381.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgXAeQgKgLABgRQgBgUAKgLQALgMAOAAQANABAIAFQAJAHABAQIgMAAQgBgIgFgEQgEgFgJAAQgLAAgGANQgEAIAAAKQABAMAFAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgKAHQgJAIgNAAQgOAAgJgMg");
	this.shape_192.setTransform(201.3,381.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJABIgHABQgFABgEAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAHgHAFgDQAGgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_193.setTransform(193.3,381);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAHQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_194.setTransform(184.9,381.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAHQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_195.setTransform(171.7,381.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgGA3IAAhDIgMAAIAAgLIAMAAIAAgMQAAgIADgEQADgHANABIACAAIADAAIAAALIgDAAIgBAAQgGAAgCADQgBAEABAMIAMAAIAAALIgMAAIAABDg");
	this.shape_196.setTransform(165.5,379.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgHA3IAAhDIgKAAIAAgLIAKAAIAAgMQABgIADgEQADgHANABIADAAIACAAIAAALIgCAAIgCAAQgGAAgBADQgBAEAAAMIAMAAIAAALIgMAAIAABDg");
	this.shape_197.setTransform(161.6,379.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAHQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_198.setTransform(139.6,381.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgBgEQgEgIgJABIgHABQgFABgFAFQgDAEgBAEIAAAMIAAAoIgOAAIAAhNIANAAIAAALQAGgHAFgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_199.setTransform(131.4,381);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_200.setTransform(109.3,384.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgCgEQgEgIgJABIgHABQgGABgEAFQgDAEAAAEIgBAMIAAAoIgOAAIAAhNIANAAIAAALQAGgHAFgDQAGgDAIAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_201.setTransform(94.8,381);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEALgCIATgDQAGAAABgDIAAgFQAAgHgEgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAKgGQAIgFANgBQAMAAAJAGQAJAFgBAMIAAAsIACADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgIACIgGABQgIABgDACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_202.setTransform(86.7,381.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEALgCIATgDQAFAAACgDIABgGQgBgGgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQAAgOAKgGQAIgFANgBQAMAAAJAGQAJAFgBAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEACIgFAAQgHAAgDgFQgCgDAAgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQAKgFABgNIAAgJIgHABg");
	this.shape_203.setTransform(404.7,364.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAnAoIAAg2QAAgHgEgEQgEgCgFAAQgIAAgGAFQgFAFAAAMIAAAtIgNAAIAAgyQAAgIgBgEQgDgGgJABQgHAAgGAFQgGAGAAAQIAAAoIgOAAIAAhNIANAAIAAALIAJgJQAGgEAJAAQAJAAAGAEQACADADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAHAAAKIAAAzg");
	this.shape_204.setTransform(375.9,364);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgGA3IAAhDIgLAAIAAgLIALAAIAAgMQAAgIACgEQAEgGANAAIACAAIAEAAIAAALIgEAAIgBAAQgGAAgCADQgBAEAAAMIAOAAIAAALIgOAAIAABDg");
	this.shape_205.setTransform(354.4,362.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgGgKAAQgIgBgGAGQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQAQAAAHANQADAGAAALIAAAyg");
	this.shape_206.setTransform(328.2,362.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgYAeQgIgLgBgRQABgUAJgLQALgMAOAAQANABAJAFQAIAHACAQIgOAAQgBgHgDgFQgFgFgJAAQgMAAgFAMQgEAJABAKQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgCAQgKAHQgIAIgOAAQgOAAgKgMg");
	this.shape_207.setTransform(320.4,364.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgDgEQgDgHgJAAIgHABQgGABgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhNIAMAAIAAALQAGgHAHgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_208.setTransform(312.4,364);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_209.setTransform(306.6,362.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgGA3IAAhDIgMAAIAAgLIAMAAIAAgMQAAgIACgEQAEgGANAAIACAAIAEAAIAAALIgEAAIgBAAQgGAAgCADQgBAEAAAMIAOAAIAAALIgOAAIAABDg");
	this.shape_210.setTransform(302.9,362.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_211.setTransform(286.7,362.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgYAeQgIgLgBgRQABgUAJgLQALgMAOAAQANABAJAFQAIAHACAQIgOAAQgBgHgDgFQgFgFgJAAQgMAAgFAMQgEAJABAKQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgCAQgKAHQgIAIgOAAQgOAAgKgMg");
	this.shape_212.setTransform(261.4,364.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgDgEQgDgHgJAAIgHABQgGABgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhNIAMAAIAAALQAGgHAHgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_213.setTransform(253.5,364);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgGA3IAAhDIgLAAIAAgLIALAAIAAgMQAAgIACgEQAEgGANAAIACAAIAEAAIAAALIgEAAIgBAAQgGAAgCADQgBAEAAAMIAOAAIAAALIgOAAIAABDg");
	this.shape_214.setTransform(225.7,362.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgGA3IAAhDIgMAAIAAgLIAMAAIAAgMQAAgIADgEQADgGANAAIACAAIADAAIAAALIgDAAIgBAAQgGAAgCADQgBAEABAMIAMAAIAAALIgMAAIAABDg");
	this.shape_215.setTransform(221.8,362.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_216.setTransform(218,362.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgNQAJgNAQAAQAIAAAGAEQAEADAEAFIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGAEgHgBQgOABgJgMgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgPgGgHQgGgHgJAAQgIAAgHAIg");
	this.shape_217.setTransform(212,362.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgNQAJgNAQAAQAIAAAGAEQAEADAEAFIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGAEgHgBQgOABgJgMgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgPgGgHQgGgHgJAAQgIAAgHAIg");
	this.shape_218.setTransform(199.5,362.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgCgEQgEgHgJAAIgHABQgFABgFAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhNIANAAIAAALQAFgHAHgDQAFgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_219.setTransform(170.8,364);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_220.setTransform(152.5,362.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEALgCIATgDQAFAAACgDIABgGQgBgGgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQAAgOAKgGQAIgFANgBQAMAAAJAGQAJAFgBAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEACIgFAAQgHAAgDgFQgCgDAAgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQAKgFABgNIAAgJIgHABg");
	this.shape_221.setTransform(131.1,364.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgrA2IAAhrIArAAQAVAAAMAQQALAOAAAWQAAAQgGAOQgMAZgaAAgAgcApIAZAAQAGAAAFgBQAJgDAFgIQAEgHACgKIABgLQAAgTgIgLQgHgLgRAAIgZAAg");
	this.shape_222.setTransform(121.6,362.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQAAQAIAAAGAEQAEADAEAFIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGAEgHgBQgOABgJgLgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgPgGgHQgGgHgJAAQgIAAgHAIg");
	this.shape_223.setTransform(447.8,47.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEALgCIATgDQAFAAACgDIABgGQgBgGgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQABgOAIgGQAKgFAMgBQAMAAAJAGQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEACIgFAAQgHAAgDgFQgCgDAAgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQAKgFABgNIAAgJIgHABg");
	this.shape_224.setTransform(431.6,49.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgVAzQgJgGgBgMIAOAAQAAAGADADQAFAEAJAAQAOAAAFgLIACgJIABgNQgEAFgGAEQgFACgJAAQgMABgKgJQgJgKAAgTQAAgUAJgMQAKgLANABQAJAAAGAEIAIAHIAAgJIAMAAIAABGQAAAPgEAJQgIAQgWAAQgNAAgIgGgAgRgeQgDAGAAAMQAAAMAGAHQAFAGAJABQANAAAGgNQADgHAAgJQAAgOgGgIQgGgGgJgBQgNAAgFAOg");
	this.shape_225.setTransform(388,50.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAUgDQAFAAACgDIAAgGQAAgGgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAFIgMAAQAAgOAKgGQAIgFAMgBQANAAAJAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEACIgFAAQgGAAgEgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQALgFgBgNIAAgJIgGABg");
	this.shape_226.setTransform(363.5,49.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAGgEALgCIAUgDQAGAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAKgGQAJgFALgBQAOAAAIAGQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFACIgEAAQgGAAgEgFQgBgDgBgFQgEAGgHAEQgHAEgJAAQgLAAgHgHgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQALgFgBgNIAAgJIgGABg");
	this.shape_227.setTransform(351.9,49.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_228.setTransform(327.6,49.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IAOAAIAAAzQAAAGABAEQADAHAKAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgMAAIAAgLQgDAEgDADQgIAGgJAAQgRAAgGgLg");
	this.shape_229.setTransform(273.6,49.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQAAQAIAAAGAEQAEADAEAFIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGAEgHgBQgOABgJgLgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgPgGgHQgGgHgJAAQgIAAgHAIg");
	this.shape_230.setTransform(261,47.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_231.setTransform(252.9,49.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQAAQAIAAAGAEQAEADAEAFIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGAEgHgBQgOABgJgLgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgPgGgHQgGgHgJAAQgIAAgHAIg");
	this.shape_232.setTransform(244.4,47.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_233.setTransform(228,49.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgCgEQgEgGgKAAQgIgBgGAGQgGAFAAAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIAAQASAAAGANQADAGAAALIAAAyg");
	this.shape_234.setTransform(196.5,47.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJgBAHAEQAIAEAEAHQAEAFABAIQACAFAAAMIg4AAQAAAMAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_235.setTransform(188.1,49.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgNAQAAQAIAAAGAEQAEADAEAFIAAgnIANAAIAABrIgMAAIAAgLQgFAHgGADQgGAEgHgBQgOABgJgLgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgPgGgHQgGgHgJAAQgIAAgHAIg");
	this.shape_236.setTransform(147.2,47.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgHgJAAIgHABQgFABgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIANAAIAAALQAFgHAGgDQAGgDAIAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_237.setTransform(139.2,49);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgdAjQgHgGAAgLQAAgKAHgHQAHgEAKgCIAVgDQAEAAACgDIABgGQAAgGgFgDQgFgDgIAAQgKAAgEAFQgDAEAAAFIgNAAQABgOAIgGQAKgFAMgBQANAAAIAGQAIAFAAAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFACIgEAAQgGAAgEgFQgCgDAAgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgIABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFAAgNIAAgJIgHABg");
	this.shape_238.setTransform(107.9,49.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_239.setTransform(482.9,32.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AASA2IAAgyQAAgHgCgEQgDgGgKAAQgHAAgHAFQgHAFAAAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAIABQASAAAGAMQADAGAAALIAAAyg");
	this.shape_240.setTransform(474.7,30.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAnAoIAAg2QAAgIgEgDQgEgCgFAAQgIAAgGAFQgFAFAAAMIAAAtIgNAAIAAgyQAAgIgBgEQgDgFgJAAQgHgBgGAHQgGAFAAAQIAAAoIgOAAIAAhNIANAAIAAAKIAJgIQAGgEAJAAQAJAAAGAEQACADADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAGAAALIAAAzg");
	this.shape_241.setTransform(456,32);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgSAoIAAhNIANAAIAAANQABgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_242.setTransform(439.4,32);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgHA2IAAhCIgLAAIAAgLIALAAIAAgMQABgIADgEQADgGANAAIADAAIACAAIAAALIgCAAIgCAAQgGAAgBAEQgBACAAANIAMAAIAAALIgMAAIAABCg");
	this.shape_243.setTransform(434.4,30.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AASA2IAAgyQAAgHgCgEQgDgGgKAAQgIAAgGAFQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJABQAQAAAHAMQADAGAAALIAAAyg");
	this.shape_244.setTransform(424.1,30.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgYAeQgIgLgBgRQABgUAJgLQALgMAOABQANAAAJAFQAIAHACAQIgOAAQgBgHgDgFQgFgFgJAAQgMAAgFAMQgEAJABAKQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgDAQgJAHQgIAIgOAAQgOAAgKgMg");
	this.shape_245.setTransform(416.2,32.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AATAoIAAgxQAAgGgDgFQgDgHgJAAIgHAAQgGACgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhNIAMAAIAAAKQAGgGAHgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_246.setTransform(408.3,32);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgGA2IAAhCIgMAAIAAgLIAMAAIAAgMQAAgIACgEQAEgGANAAIACAAIAEAAIAAALIgEAAIgBAAQgGAAgCAEQgBACAAANIAOAAIAAALIgOAAIAABCg");
	this.shape_247.setTransform(398.7,30.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgHA2IAAhCIgLAAIAAgLIALAAIAAgMQABgIADgEQADgGANAAIACAAIADAAIAAALIgDAAIgBAAQgGAAgCAEQAAACAAANIAMAAIAAALIgMAAIAABCg");
	this.shape_248.setTransform(390.4,30.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_249.setTransform(364.2,32.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgYAeQgJgLAAgRQAAgUAKgLQAKgMAPABQANAAAIAFQAJAHACAQIgOAAQgBgHgDgFQgFgFgJAAQgLAAgGAMQgEAJABAKQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgDAQgJAHQgIAIgOAAQgOAAgKgMg");
	this.shape_250.setTransform(353.1,32.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_251.setTransform(345.1,32.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgFAFgDQAHgFAIAAQANAAAJAKQAKALAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgGIAAApgAgSgdQgDAHAAALQAAAJADAGQAFAMANgBQAJAAAGgHQAGgIAAgOQAAgKgDgGQgFgOgNAAQgNAAgFAPg");
	this.shape_252.setTransform(337,33.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgLAHgGQAGgEALgCIAVgDQAFAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAJgGQAJgFAMAAQAOgBAIAGQAJAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgFABIgEAAQgHAAgDgFQgBgDgBgFQgEAGgIAEQgGADgJABQgLgBgHgGgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQALgFAAgNIAAgJIgGABg");
	this.shape_253.setTransform(313.8,32.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_254.setTransform(307.4,32);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_255.setTransform(288.6,32.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgYAeQgIgLgBgRQABgUAJgLQALgMAOABQANAAAJAFQAIAHACAQIgOAAQgBgHgDgFQgFgFgJAAQgMAAgFAMQgDAJAAAKQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgDAQgIAHQgJAIgOAAQgPAAgJgMg");
	this.shape_256.setTransform(280.9,32.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AATAoIAAgxQAAgGgCgFQgEgHgJAAIgHAAQgGACgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhNIANAAIAAAKQAFgGAHgDQAFgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_257.setTransform(272.9,32);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgLAHgGQAHgEALgCIATgDQAFAAACgDIABgGQgBgGgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQAAgOAKgGQAIgFANAAQAMgBAJAGQAJAFgBALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgEABIgFAAQgHAAgDgFQgCgDAAgFQgEAGgHAEQgHADgJABQgLgBgHgGgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAGgEQAKgFABgNIAAgJIgHABg");
	this.shape_258.setTransform(264.8,32.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgBgFQgEgHgJAAIgHAAQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAAKQAGgGAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_259.setTransform(252.2,32);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgLAHgGQAGgEALgCIAVgDQAFAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAJgGQAKgFALAAQAOgBAIAGQAJAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgFABIgEAAQgGAAgEgFQgBgDgBgFQgEAGgIAEQgGADgJABQgLgBgHgGgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQALgFAAgNIAAgJIgGABg");
	this.shape_260.setTransform(244,32.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgLAHgGQAHgEALgCIATgDQAFAAACgDIABgGQgBgGgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQAAgOAKgGQAIgFANAAQAMgBAJAGQAJAFgBALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgEABIgFAAQgHAAgDgFQgCgDAAgFQgEAGgHAEQgHADgJABQgLgBgHgGgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAGgEQAKgFABgNIAAgJIgHABg");
	this.shape_261.setTransform(227.4,32.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AASA2IAAgyQAAgHgCgEQgDgGgKAAQgIAAgGAFQgGAFgBAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJABQARAAAGAMQADAGAAALIAAAyg");
	this.shape_262.setTransform(219,30.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgNAQgBQAIAAAGAFQAEABAEAGIAAgoIANAAIAABsIgMAAIAAgLQgFAHgGADQgGAEgHgBQgOAAgJgLgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgOgGgIQgGgHgJAAQgIAAgHAIg");
	this.shape_263.setTransform(202.1,30.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_264.setTransform(194,32.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AggAnIAAgKIAug3IgqAAIAAgMIA7AAIAAALIgtA2IAvAAIAAAMg");
	this.shape_265.setTransform(186.1,32.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgYAiQgHgIgBgMIANAAQAAAHADADQAFAHAMAAQAHAAAGgEQAGgDAAgGQAAgFgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAIIgMAAQgBgFgDgDQgEgFgLAAQgHAAgEACQgEADAAAFQAAAFAFADIAJADIAIACQAOAEAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_266.setTransform(175.4,32.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_267.setTransform(167.4,32.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AATA2IAAgyQAAgHgCgEQgEgGgKAAQgIAAgGAFQgGAFAAAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIABQASAAAGAMQADAGAAALIAAAyg");
	this.shape_268.setTransform(159.2,30.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_269.setTransform(146.6,32.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgiA4IAAhtIANAAIAAALQAEgFAFgDQAHgFAIAAQANAAAJAKQAKALAAASQAAAZgOALQgIAHgMAAQgIAAgGgDQgDgDgEgGIAAApgAgSgdQgDAHAAALQAAAJADAGQAFAMANgBQAJAAAGgHQAGgIAAgOQAAgKgDgGQgFgOgNAAQgNAAgFAPg");
	this.shape_270.setTransform(138.6,33.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgYA3IgEgBIAAgMIAFACIADAAIAGgBIACgDIADgGIADgIIgdhQIAPAAIAUA/IAVg/IAPAAIgNAiIgLAgQgMAegDAHQgFAGgMAAg");
	this.shape_271.setTransform(130.5,33.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AATA2IAAgyQAAgHgCgEQgEgGgKAAQgIAAgGAFQgHAFABAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIABQASAAAGAMQADAGAAALIAAAyg");
	this.shape_272.setTransform(122.6,30.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgCgFQgDgHgJAAIgHAAQgGACgDAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAAKQAHgGAGgDQAGgDAGAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_273.setTransform(110.2,32);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgSAoIAAhNIAMAAIAAANQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKABgFAGQgFAGAAAJIAAAsg");
	this.shape_274.setTransform(89.9,32);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgLAHgGQAHgEALgCIATgDQAFAAACgDIABgGQgBgGgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQAAgOAKgGQAIgFANAAQAMgBAJAGQAJAFgBALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgEABIgFAAQgHAAgDgFQgBgDgBgFQgEAGgHAEQgHADgJABQgLgBgHgGgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAGgEQAKgFABgNIAAgJIgHABg");
	this.shape_275.setTransform(83,32.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgrA2IAAhrIArAAQAVAAAMAQQALAOAAAWQAAAQgGAOQgMAZgaAAgAgcApIAZAAQAGAAAFgBQAJgDAEgIQAFgHACgKIABgLQAAgTgIgLQgHgLgRAAIgZAAg");
	this.shape_276.setTransform(73.5,30.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgBgFQgEgHgJAAIgHAAQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIANAAIAAAKQAFgGAGgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_277.setTransform(465.4,32);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgCgFQgDgHgJAAIgHAAQgFACgEAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAAKQAHgGAFgDQAGgDAHAAQARAAAGAMQADAGAAAMIAAAxg");
	this.shape_278.setTransform(436.3,32);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AATAoIAAgxQAAgGgCgFQgEgHgJAAIgHAAQgGACgEAFQgDAEAAAEIgBAMIAAAoIgOAAIAAhNIANAAIAAAKQAGgGAFgDQAGgDAIAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_279.setTransform(404,32);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgCgFQgDgHgJAAIgHAAQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhNIANAAIAAAKQAFgGAGgDQAGgDAIAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_280.setTransform(379.1,32);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgHA2IAAhCIgKAAIAAgLIAKAAIAAgMQABgIACgEQAEgGANAAIADAAIACAAIAAALIgCAAIgCAAQgGAAgBAEQgBACAAANIAMAAIAAALIgMAAIAABCg");
	this.shape_281.setTransform(347.4,30.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgNAQgBQAIAAAGAFQAEABAEAGIAAgoIANAAIAABsIgMAAIAAgLQgFAHgGADQgGAEgHgBQgOAAgJgLgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgOQAAgOgGgIQgGgHgJAAQgIAAgHAIg");
	this.shape_282.setTransform(308.5,30.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgLAHgGQAGgEALgCIAUgDQAFAAACgDIAAgGQAAgGgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAFIgMAAQAAgOAKgGQAIgFAMAAQANgBAJAGQAJAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgFABIgEAAQgHAAgDgFQgBgDgBgFQgEAGgHAEQgHADgJABQgLgBgHgGgAAJABIgHACIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAGgEQALgFgBgNIAAgJIgGABg");
	this.shape_283.setTransform(270.8,32.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgXAeQgKgLABgRQgBgUALgLQAKgMAOABQANAAAIAFQAJAHABAQIgMAAQgBgHgFgFQgEgFgJAAQgLAAgGAMQgEAJAAAKQABAMAFAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgKAHQgJAIgNAAQgPAAgIgMg");
	this.shape_284.setTransform(262.8,32.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_285.setTransform(235.6,32.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgXAeQgKgLABgRQgBgUALgLQAKgMAOABQANAAAIAFQAJAHABAQIgMAAQgBgHgFgFQgEgFgJAAQgLAAgGAMQgEAJAAAKQABAMAFAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgJAHQgKAIgNAAQgPAAgIgMg");
	this.shape_286.setTransform(224.6,32.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_287.setTransform(216.5,32.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgdAjQgHgHAAgKQAAgLAHgGQAHgEAKgCIAVgDQAEAAACgDIABgGQAAgGgFgDQgFgDgIAAQgKAAgEAFQgDAEAAAFIgNAAQABgOAIgGQAKgFAMAAQANgBAIAGQAIAFAAALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAALIgFABIgEAAQgGAAgEgFQgCgDAAgFQgEAGgIAEQgGADgJABQgLgBgHgGgAAJABIgIACIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQAMgFAAgNIAAgJIgHABg");
	this.shape_288.setTransform(184.4,32.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AATA2IAAgyQgBgHgBgEQgEgGgKAAQgHAAgHAFQgGAFAAAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAJABQAQAAAHAMQADAGAAALIAAAyg");
	this.shape_289.setTransform(175.9,30.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgHA2IAAhCIgLAAIAAgLIALAAIAAgMQABgIADgEQADgGANAAIACAAIADAAIAAALIgDAAIgBAAQgGAAgBAEQgBACAAANIAMAAIAAALIgMAAIAABCg");
	this.shape_290.setTransform(161.4,30.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_291.setTransform(135.1,32.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AATA2IAAgyQgBgHgCgEQgDgGgKAAQgHAAgHAFQgHAFAAAQIAAApIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAIABQARAAAHAMQADAGAAALIAAAyg");
	this.shape_292.setTransform(126.9,30.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgXAeQgJgLAAgRQAAgUAKgLQAJgMAPABQANAAAJAFQAIAHACAQIgNAAQgCgHgEgFQgEgFgJAAQgMAAgFAMQgDAJgBAKQAAAMAGAIQAEAIAKAAQAIAAAFgFQAFgFACgJIANAAQgDAQgIAHQgKAIgNAAQgPAAgIgMg");
	this.shape_293.setTransform(119.1,32.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgBgFQgEgHgJAAIgHAAQgFACgFAFQgDAEgBAEIAAAMIAAAoIgOAAIAAhNIANAAIAAAKQAGgGAFgDQAHgDAHAAQAQAAAGAMQADAGAAAMIAAAxg");
	this.shape_294.setTransform(111.1,32);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgHA2IAAhCIgKAAIAAgLIAKAAIAAgMQABgIACgEQAEgGANAAIADAAIADAAIAAALIgDAAIgCAAQgGAAgBAEQgCACAAANIAOAAIAAALIgOAAIAABCg");
	this.shape_295.setTransform(101.6,30.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJAAAHAFQAIADAEAHQAEAFABAIQACAFAAALIg4AAQAAANAFAGQAFAIAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFABgFAAQgOAAgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_296.setTransform(91.1,32.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AATA2IAAgyQAAgHgDgEQgDgGgKAAQgIAAgGAFQgHAFABAQIAAApIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgFAIABQARAAAHAMQADAGAAALIAAAyg");
	this.shape_297.setTransform(82.9,30.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgHA2IAAheIgkAAIAAgNIBXAAIAAANIgkAAIAABeg");
	this.shape_298.setTransform(74.2,30.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJABAHAEQAIADAEAGQAEAGABAIQACAGAAAKIg4AAQAAAMAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_299.setTransform(475.8,53.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgXAeQgKgLABgRQgBgTALgMQAKgLAOAAQANgBAIAHQAJAGABAQIgMAAQgCgHgEgFQgEgFgJAAQgLAAgGANQgEAHAAALQABAMAFAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgJAHQgKAHgNAAQgPAAgIgLg");
	this.shape_300.setTransform(468,53.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQABAGABAEQAEAHAJAAQANAAAEgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_301.setTransform(460,53.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgOAQAAQAIABAGAEQAEACAEAFIAAgoIANAAIAABrIgMAAIAAgLQgFAIgGADQgGAEgHAAQgOAAgJgMgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_302.setTransform(451.5,51.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKAAgFAHQgFAHAAAIIAAAsg");
	this.shape_303.setTransform(437.3,53);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgiA4IAAhsIANAAIAAAKQAEgFAFgDQAHgFAIAAQANAAAJALQAKAJAAAUQAAAYgOALQgIAHgMAAQgIAAgGgEQgDgCgEgGIAAApgAgSgeQgDAIAAALQAAAJADAFQAFAMANAAQAJABAGgIQAGgIAAgOQAAgJgDgIQgFgMgNAAQgNAAgFANg");
	this.shape_304.setTransform(430.4,54.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJABAHAEQAIADAEAGQAEAGABAIQACAGAAAKIg4AAQAAAMAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_305.setTransform(421.8,53.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgSAoIAAhOIANAAIAAAOQABgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKAAgFAHQgFAHAAAIIAAAsg");
	this.shape_306.setTransform(415.7,53);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgOAQAAQAIABAGAEQAEACAEAFIAAgoIANAAIAABrIgMAAIAAgLQgFAIgGADQgGAEgHAAQgOAAgJgMgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_307.setTransform(404.2,51.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AATAoIAAgxQAAgGgCgFQgEgIgJAAIgHABQgFACgFAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhOIANAAIAAALQAFgGAHgDQAFgDAHAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_308.setTransform(396.2,53);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAHgGALgBIATgCQAFgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAGQgCACAAAHIgNAAQAAgPAKgFQAIgHANABQAMAAAJAFQAJAFgBALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEAAIgFAAQgHAAgDgEQgCgCAAgFQgEAFgHAEQgHADgJAAQgLAAgHgGgAAJACIgIABIgHABQgGABgEACQgGADAAAIQAAAGAEADQAEADAGABQAHgBAGgDQAKgFABgMIAAgKIgHACg");
	this.shape_309.setTransform(388.1,53.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJABAHAEQAIADAEAGQAEAGABAIQACAGAAAKIg4AAQAAAMAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_310.setTransform(375.4,53.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_311.setTransform(356.7,53.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCgBQgKAAgFAHQgFAHAAAIIAAAsg");
	this.shape_312.setTransform(351,53);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgOAQAAQAIABAGAEQAEACAEAFIAAgoIANAAIAABrIgMAAIAAgLQgFAIgGADQgGAEgHAAQgOAAgJgMgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_313.setTransform(307.1,51.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgGA2IAAhCIgLAAIAAgKIALAAIAAgNQAAgIACgEQAEgGANgBIACAAIAEAAIAAANIgEAAIgBAAQgGAAgCADQgBADAAANIAOAAIAAAKIgOAAIAABCg");
	this.shape_314.setTransform(284.5,51.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AATA2IAAgyQAAgHgDgEQgDgGgKgBQgIABgGAFQgHAGABAOIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgEAIAAQARgBAHAMQADAHAAAKIAAAzg");
	this.shape_315.setTransform(274.2,51.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgVAzQgJgGgBgMIAOAAQAAAFADADQAFAFAJAAQAOAAAFgLIACgIIABgPQgEAHgGACQgFADgJAAQgMAAgKgJQgJgIAAgVQAAgTAJgLQAKgMANAAQAJAAAGAFIAIAIIAAgKIAMAAIAABGQAAAPgEAIQgIAQgWAAQgNAAgIgFgAgRgfQgDAHAAALQAAANAGAHQAFAGAJAAQANAAAGgMQADgGAAgKQAAgPgGgGQgGgIgJABQgNgBgFANg");
	this.shape_316.setTransform(265.6,54.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQABAGABAEQAEAHAJAAQANAAAEgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgDAEgEADQgHAGgKAAQgQAAgGgLg");
	this.shape_317.setTransform(257.5,53.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AATAoIAAgxQAAgGgCgFQgEgIgJAAIgHABQgFACgFAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhOIANAAIAAALQAFgGAHgDQAFgDAHAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_318.setTransform(241,53);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJABAHAEQAIADAEAGQAEAGABAIQACAGAAAKIg4AAQAAAMAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_319.setTransform(232.6,53.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJABAHAEQAIADAEAGQAEAGABAIQACAGAAAKIg4AAQAAAMAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_320.setTransform(216,53.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgVAzQgJgGgBgMIAOAAQAAAFADADQAFAFAJAAQAOAAAFgLIACgIIABgPQgEAHgGACQgFADgJAAQgMAAgKgJQgJgIAAgVQAAgTAJgLQAKgMANAAQAJAAAGAFIAIAIIAAgKIAMAAIAABGQAAAPgEAIQgIAQgWAAQgNAAgIgFgAgRgfQgDAHAAALQAAANAGAHQAFAGAJAAQANAAAGgMQADgGAAgKQAAgPgGgGQgGgIgJABQgNgBgFANg");
	this.shape_321.setTransform(207.5,54.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AAnAoIAAg1QAAgJgEgCQgEgDgFAAQgIAAgGAFQgFAFAAANIAAAsIgNAAIAAgyQAAgIgBgEQgDgFgJgBQgHAAgGAHQgGAFAAAPIAAApIgOAAIAAhOIANAAIAAALIAJgIQAGgEAJAAQAJAAAGAEQACADADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAGAAALIAAAzg");
	this.shape_322.setTransform(176.6,53);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJABAHAEQAIADAEAGQAEAGABAIQACAGAAAKIg4AAQAAAMAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_323.setTransform(166.2,53.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AATA2IAAgyQgBgHgCgEQgDgGgKgBQgHABgHAFQgHAGAAAOIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgEAIAAQASgBAGAMQADAHAAAKIAAAzg");
	this.shape_324.setTransform(158,51.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgYAsQgKgLAAgSQAAgQAJgMQAJgOAQAAQAIABAGAEQAEACAEAFIAAgoIANAAIAABrIgMAAIAAgLQgFAIgGADQgGAEgHAAQgOAAgJgMgAgOgHQgGAHAAAOQAAANAGAIQAFAJALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_325.setTransform(141.1,51.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgYAeQgLgKAAgTQAAgSALgMQAKgMAPAAQAJABAHAEQAIADAEAGQAEAGABAIQACAGAAAKIg4AAQAAAMAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgMgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_326.setTransform(133,53.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAHgGAKgBIAVgCQAFgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAGQgDACgBAHIgMAAQAAgPAJgFQAKgHALABQANAAAJAFQAJAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgFAAIgEAAQgHAAgDgEQgCgCAAgFQgEAFgIAEQgGADgJAAQgLAAgHgGgAAJACIgHABIgIABQgGABgEACQgGADAAAIQAAAGAEADQAEADAGABQAHgBAFgDQALgFAAgMIAAgKIgGACg");
	this.shape_327.setTransform(99.2,53.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAHgGALgBIATgCQAGgBABgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAGQgCACgBAHIgMAAQAAgPAKgFQAIgHAMABQANAAAJAFQAJAFgBALIAAAsIACAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEAAIgFAAQgHAAgDgEQgBgCgBgFQgEAFgHAEQgHADgJAAQgLAAgHgGgAAJACIgIABIgGABQgIABgDACQgGADAAAIQAAAGAEADQAEADAGABQAHgBAGgDQALgFAAgMIAAgKIgHACg");
	this.shape_328.setTransform(82.6,53.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AASA2IAAgyQAAgHgCgEQgDgGgKgBQgHABgHAFQgHAGAAAOIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgEAIAAQASgBAGAMQADAHAAAKIAAAzg");
	this.shape_329.setTransform(74.2,51.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AATAoIAAgxQAAgGgCgFQgEgIgJAAIgHABQgGACgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhOIANAAIAAALQAFgGAHgDQAFgDAHAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_330.setTransform(476.8,36);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_331.setTransform(468.4,36.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAHgFALgCIATgCQAFgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAGQgCACAAAHIgNAAQAAgPAKgFQAIgHANABQAMAAAJAFQAIAFAAALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgEABIgFAAQgHAAgDgEQgCgDAAgEQgEAFgHAEQgHAEgJgBQgLAAgHgGgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQAKgFABgMIAAgKIgHACg");
	this.shape_332.setTransform(452.9,36.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_333.setTransform(446.4,35);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgiA4IAAhsIANAAIAAAKQAEgGAFgDQAHgEAIAAQANAAAJALQAKAJAAAUQAAAYgOALQgIAHgMAAQgIAAgGgEQgDgCgEgGIAAApgAgSgeQgDAIAAALQAAAJADAFQAFAMANAAQAJABAGgIQAGgIAAgOQAAgJgDgIQgFgNgNABQgNgBgFAOg");
	this.shape_334.setTransform(440.4,37.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAGgFALgCIAVgCQAFgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAGQgDACgBAHIgMAAQAAgPAJgFQAJgHAMABQAOAAAIAFQAJAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgFABIgEAAQgHAAgDgEQgBgDgBgEQgEAFgIAEQgGAEgJgBQgLAAgHgGgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQALgFAAgMIAAgKIgGACg");
	this.shape_335.setTransform(432.1,36.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgMAQAAQAIAAAGADQAEADAEAFIAAgoIANAAIAABrIgMAAIAAgLQgFAIgGADQgGADgHABQgOgBgJgKgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_336.setTransform(423.4,34.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAHgFALgCIATgCQAFgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAGQgCACAAAHIgNAAQAAgPAKgFQAIgHANABQAMAAAJAFQAJAFgBALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgEABIgFAAQgHAAgDgEQgBgDgBgEQgEAFgHAEQgHAEgJgBQgLAAgHgGgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQAKgFABgMIAAgKIgHACg");
	this.shape_337.setTransform(415.5,36.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgMAQAAQAIAAAGADQAEADAEAFIAAgoIANAAIAABrIgMAAIAAgLQgFAIgGADQgGADgHABQgOgBgJgKgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_338.setTransform(402.6,34.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAPABQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_339.setTransform(394.5,36.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_340.setTransform(386.7,36.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_341.setTransform(375.4,36.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_342.setTransform(367.6,36.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAPABQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_343.setTransform(359.6,36.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAPABQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_344.setTransform(339.7,36.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AASA2IAAgyQAAgHgCgEQgDgHgKAAQgIAAgGAGQgGAGgBAOIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgEAJAAQAQgBAHAMQADAHAAAKIAAAzg");
	this.shape_345.setTransform(331.5,34.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_346.setTransform(325.1,35);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgCgFQgDgIgJAAIgHABQgGACgDAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAALQAHgGAGgDQAGgDAGAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_347.setTransform(303.2,36);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_348.setTransform(294.8,36.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_349.setTransform(285.3,35);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAHgFAKgCIAVgCQAEgBACgEIABgEQAAgHgFgDQgFgDgIAAQgKAAgEAGQgDACAAAHIgNAAQABgPAIgFQAKgHAMABQANAAAIAFQAIAFAAALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgFABIgEAAQgGAAgEgEQgCgDAAgEQgEAFgIAEQgGAEgJgBQgLAAgHgGgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQAMgFAAgMIAAgKIgHACg");
	this.shape_350.setTransform(279.3,36.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgSAoIAAhOIANAAIAAAOQABgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKgBgFAHQgFAGAAAJIAAAsg");
	this.shape_351.setTransform(273,36);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAPABQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_352.setTransform(265.8,36.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AATAoIAAgxQAAgGgCgFQgEgIgJAAIgHABQgFACgFAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhOIANAAIAAALQAFgGAHgDQAFgDAHAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_353.setTransform(257.6,36);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAPABQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_354.setTransform(249.2,36.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgVAzQgJgFgBgNIAOAAQAAAFADADQAFAFAJAAQAOAAAFgLIACgIIABgPQgEAHgGACQgFADgJABQgMgBgKgIQgJgJAAgVQAAgTAJgLQAKgLANAAQAJgBAGAFIAIAIIAAgKIAMAAIAABGQAAAPgEAIQgIARgWgBQgNAAgIgFgAgRgfQgDAIAAAKQAAANAGAHQAFAHAJgBQANAAAGgMQADgHAAgJQAAgPgGgGQgGgIgJABQgNgBgFANg");
	this.shape_355.setTransform(240.7,37.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgYA3IgEgBIAAgMIAFACIADAAIAGgBIACgDIADgGIADgIIgdhQIAPAAIAUA/IAVg/IAPAAIgMAiIgMAgQgMAegDAHQgGAGgLAAg");
	this.shape_356.setTransform(229,37.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AATAoIAAgxQAAgGgDgFQgDgIgJAAIgHABQgGACgEAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhOIAMAAIAAALQAGgGAHgDQAGgDAGAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_357.setTransform(221.1,36);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgdAjQgHgHAAgJQAAgMAHgFQAHgFALgCIAUgCQAEgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAGQgCACAAAHIgNAAQABgPAIgFQAKgHAMABQAMAAAJAFQAIAFAAALIAAAsIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAJIgEABIgFAAQgHAAgDgEQgCgDAAgEQgEAFgHAEQgHAEgJgBQgLAAgHgGgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQAKgFABgMIAAgKIgHACg");
	this.shape_358.setTransform(212.9,36.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AAnAoIAAg1QAAgJgEgCQgEgDgFAAQgIAAgGAFQgFAFAAANIAAAsIgNAAIAAgyQAAgIgBgEQgDgGgJAAQgHABgGAFQgGAGAAAPIAAApIgOAAIAAhOIANAAIAAALIAJgHQAGgFAJAAQAJAAAGAFQACACADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAGAAALIAAAzg");
	this.shape_359.setTransform(202.4,36);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKgBgFAHQgFAGAAAJIAAAsg");
	this.shape_360.setTransform(190,36);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAPABQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_361.setTransform(182.8,36.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_362.setTransform(175,36.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_363.setTransform(153.4,39.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_364.setTransform(141.6,35);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgBgFQgEgIgJAAIgHABQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhOIANAAIAAALQAFgGAGgDQAHgDAHAAQAQAAAGALQADAHAAALIAAAyg");
	this.shape_365.setTransform(135.5,36);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAPABQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_366.setTransform(127.1,36.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AAnAoIAAg1QAAgJgEgCQgEgDgFAAQgIAAgGAFQgFAFAAANIAAAsIgNAAIAAgyQAAgIgBgEQgDgGgJAAQgHABgGAFQgGAGAAAPIAAApIgOAAIAAhOIANAAIAAALIAJgHQAGgFAJAAQAJAAAGAFQACACADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAGAAALIAAAzg");
	this.shape_367.setTransform(116.8,36);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AASAoIAAgxQAAgGgCgFQgDgIgJAAIgHABQgFACgEAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAALQAHgGAFgDQAGgDAHAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_368.setTransform(106.5,36);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_369.setTransform(98.1,36.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKgBgFAHQgFAGAAAJIAAAsg");
	this.shape_370.setTransform(92,36);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_371.setTransform(82,36.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AATAoIAAgxQAAgGgCgFQgEgIgJAAIgHABQgGACgEAFQgDAEAAAEIgBAMIAAAoIgOAAIAAhOIANAAIAAALQAGgGAFgDQAGgDAIAAQAQAAAGALQADAHAAALIAAAyg");
	this.shape_372.setTransform(74.1,36);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAPABQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_373.setTransform(65.7,36.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_374.setTransform(450.9,19.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgCgEQgDgIgJAAIgHACQgGABgDAFQgDAEgCAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAHgHAGgDQAGgDAGAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_375.setTransform(442.7,19);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_376.setTransform(414.4,19.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKgBgFAHQgFAGAAAJIAAAsg");
	this.shape_377.setTransform(405,19);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgGALgBIATgCQAGgBABgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCAEgBAFIgMAAQAAgOAKgFQAIgHAMAAQANABAJAFQAJAFgBAMIAAAsIACADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgBgDgBgEQgEAFgHAEQgHAEgJgBQgLABgHgHgAAJACIgIABIgGABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQALgFAAgMIAAgKIgHACg");
	this.shape_378.setTransform(398.1,19.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUA/IAWg/IAOAAIgdBNg");
	this.shape_379.setTransform(390,19.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgSAoIAAhOIANAAIAAAOQABgEAFgFQAGgGAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKgBgFAHQgFAGAAAJIAAAsg");
	this.shape_380.setTransform(380.1,19);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_381.setTransform(369.6,19.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AASA2IAAgxQAAgIgBgEQgEgHgKAAQgHAAgHAGQgGAFgBAPIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgEAJgBQAQABAHALQADAHAAAKIAAAzg");
	this.shape_382.setTransform(361.4,17.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_383.setTransform(355.1,18);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgGA3IAAhDIgMAAIAAgKIAMAAIAAgNQAAgIADgEQADgHANAAIACAAIADAAIAAANIgDAAIgBAAQgGAAgCACQgBADAAAOIANAAIAAAKIgNAAIAABDg");
	this.shape_384.setTransform(346.9,17.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_385.setTransform(340.6,19.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgCgEQgEgIgJAAIgHACQgGABgEAFQgDAEAAAEIgBAMIAAAoIgOAAIAAhOIANAAIAAAMQAGgHAFgDQAGgDAIAAQAQAAAGALQADAHAAALIAAAyg");
	this.shape_386.setTransform(320.7,19);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_387.setTransform(312.3,19.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_388.setTransform(302.8,18);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgMAQAAQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHABQgOgBgJgKgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_389.setTransform(293.1,17.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AATAoIAAgwQAAgIgCgEQgEgIgJAAIgHACQgFABgFAFQgCAEgBAEIgBAMIAAAoIgOAAIAAhOIANAAIAAAMQAFgHAHgDQAFgDAHAAQARAAAGALQADAHAAALIAAAyg");
	this.shape_390.setTransform(285.1,19);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_391.setTransform(276.7,19.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgXAeQgJgLAAgRQAAgTAKgMQAJgMAPAAQANAAAJAHQAIAGACAQIgNAAQgCgHgEgFQgEgFgJAAQgMAAgFANQgDAIgBAKQAAAMAGAIQAEAIAKAAQAIAAAFgFQAFgFACgJIANAAQgDAQgIAHQgKAIgNgBQgPAAgIgLg");
	this.shape_392.setTransform(268.9,19.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_393.setTransform(256.7,19.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgDgEQgDgHgKAAQgHAAgHAGQgHAFABAPIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgEAIgBQARABAHALQADAHAAAKIAAAzg");
	this.shape_394.setTransform(248.5,17.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_395.setTransform(242.2,18);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAJgMAQAAQAPAAALAKQAKAKAAAUQAAASgJAMQgJANgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAAMAGAJQAFAIALAAQANAAAFgKQAEgKAAgLQAAgLgDgHQgGgKgNAAQgLAAgFAJg");
	this.shape_396.setTransform(231.8,19.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_397.setTransform(225.6,18);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgMAQAAQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHABQgOgBgJgKgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_398.setTransform(215,17.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_399.setTransform(206.9,19.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_400.setTransform(200.7,18);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgiA4IAAhsIANAAIAAAKQAEgGAFgDQAHgEAIAAQANAAAJALQAKAKAAASQAAAZgOALQgIAHgMAAQgIAAgGgEQgDgCgEgFIAAAogAgSgeQgDAIAAALQAAAJADAFQAFANANAAQAJAAAGgIQAGgIAAgOQAAgJgDgIQgFgNgNABQgNgBgFAOg");
	this.shape_401.setTransform(194.7,20.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAGgGALgBIAVgCQAFgBABgEIAAgEQABgHgFgDQgFgDgIAAQgKAAgEAFQgDAEgBAFIgMAAQAAgOAKgFQAIgHAMAAQAOABAIAFQAJAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgHABgDgFQgBgDgBgEQgEAFgIAEQgGAEgJgBQgLABgHgHgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAFgDQALgFAAgMIAAgKIgGACg");
	this.shape_402.setTransform(186.4,19.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgYAtQgKgMAAgSQAAgQAJgNQAJgMAQAAQAIAAAGADQAEACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgFAIgGADQgGADgHABQgOgBgJgKgAgOgHQgGAHAAAOQAAANAGAJQAFAIALAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgJAAQgIAAgHAIg");
	this.shape_403.setTransform(177.7,17.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgdAjQgHgGAAgKQAAgMAHgFQAHgGALgBIATgCQAFgBACgEIABgEQgBgHgEgDQgFgDgIAAQgKAAgFAFQgCAEAAAFIgNAAQAAgOAKgFQAIgHANAAQAMABAJAFQAJAFgBAMIAAAsIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgHABgDgFQgCgDAAgEQgEAFgHAEQgHAEgJgBQgLABgHgHgAAJACIgIABIgHABQgGABgEACQgGAEAAAHQAAAGAEADQAEADAGAAQAHAAAGgDQAKgFABgMIAAgKIgHACg");
	this.shape_404.setTransform(169.8,19.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_405.setTransform(149.6,19.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgDgEQgDgHgKAAQgHAAgHAGQgHAFABAPIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgEAIgBQARABAHALQADAHAAAKIAAAzg");
	this.shape_406.setTransform(141.4,17.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgXAeQgJgLAAgRQAAgTAKgMQAKgMAOAAQANAAAIAHQAJAGABAQIgMAAQgCgHgEgFQgEgFgJAAQgLAAgGANQgDAIgBAKQAAAMAGAIQAEAIAKAAQAIAAAFgFQAFgFACgJIAMAAQgBAQgJAHQgKAIgNgBQgPAAgIgLg");
	this.shape_407.setTransform(133.6,19.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AASAoIAAgwQAAgIgBgEQgEgIgJAAIgHACQgFABgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhOIANAAIAAAMQAFgHAGgDQAHgDAHAAQAQAAAGALQADAHAAALIAAAyg");
	this.shape_408.setTransform(125.6,19);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgHA3IAAhDIgKAAIAAgKIAKAAIAAgNQABgIACgEQAEgHANAAIADAAIADAAIAAANIgDAAIgCAAQgGAAgBACQgBADAAAOIANAAIAAAKIgNAAIAABDg");
	this.shape_409.setTransform(116.1,17.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFABgFABQgOgBgKgKgAAWgGQgBgJgDgEQgFgKgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_410.setTransform(105.6,19.2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AATA2IAAgxQAAgIgCgEQgEgHgKAAQgIAAgGAGQgHAFABAPIAAAqIgOAAIAAhrIAOAAIAAAoQAEgGAEgCQAGgEAIgBQASABAGALQADAHAAAKIAAAzg");
	this.shape_411.setTransform(97.4,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_118,p:{x:33.4,y:362.6}},{t:this.shape_117,p:{x:39.5,y:364}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112,p:{x:83,y:368.3}},{t:this.shape_111,p:{x:91.3,y:363}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:131.2,y:364.1}},{t:this.shape_105,p:{x:139}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:168.2,y:362.6}},{t:this.shape_100,p:{x:180.2,y:364.1}},{t:this.shape_99},{t:this.shape_98,p:{x:193.9,y:362.6}},{t:this.shape_97,p:{x:199.9,y:365.6}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:315.9}},{t:this.shape_82},{t:this.shape_81,p:{x:326.2,y:363}},{t:this.shape_80},{t:this.shape_79,p:{x:346.7}},{t:this.shape_78},{t:this.shape_77,p:{x:360.8,y:362.6}},{t:this.shape_76,p:{x:366.8,y:364.1}},{t:this.shape_75,p:{x:374.9,y:364}},{t:this.shape_74,p:{x:382.9}},{t:this.shape_73},{t:this.shape_72,p:{x:399.7,y:364.1}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:431.3,y:362.6}},{t:this.shape_67,p:{x:436.7,y:364.1}},{t:this.shape_66,p:{x:444.5}},{t:this.shape_65},{t:this.shape_64,p:{x:457.5,y:365.7}},{t:this.shape_63,p:{x:465.3}},{t:this.shape_62,p:{x:473.8,y:364.1}},{t:this.shape_61,p:{x:480.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:509.3,y:362.6}},{t:this.shape_56,p:{x:514.7,y:364.1}},{t:this.shape_55,p:{x:522.5}},{t:this.shape_54},{t:this.shape_53,p:{x:51.6,y:381}},{t:this.shape_52,p:{x:57.7,y:381.1}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:82.4}},{t:this.shape_48,p:{x:92.9,y:380}},{t:this.shape_47},{t:this.shape_46,p:{x:107.5}},{t:this.shape_45,p:{x:121.2,y:381.1}},{t:this.shape_44,p:{x:130.7,y:381.1}},{t:this.shape_43,p:{x:137.9,y:381}},{t:this.shape_42,p:{x:141.6,y:379.6}},{t:this.shape_41,p:{x:147.1,y:379.8}},{t:this.shape_40,p:{x:153.6,y:384.2}},{t:this.shape_39,p:{x:165.6,y:379.6}},{t:this.shape_38,p:{x:175.6,y:381}},{t:this.shape_37,p:{x:185.9,y:380}},{t:this.shape_36,p:{x:192.2}},{t:this.shape_35,p:{x:200.4}},{t:this.shape_34,p:{x:212.6,y:381.1}},{t:this.shape_33},{t:this.shape_32,p:{x:226.2,y:379.6}},{t:this.shape_31,p:{x:232.2}},{t:this.shape_30,p:{x:245.7,y:381.1}},{t:this.shape_29},{t:this.shape_28,p:{x:263.2,y:381.1}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:295.1,y:381.1}},{t:this.shape_24,p:{x:303.4,y:381.2}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:334.6,y:381}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:384.4,y:381}},{t:this.shape_15,p:{x:394.7}},{t:this.shape_14,p:{x:402.8,y:379.8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:441.7}},{t:this.shape_9,p:{x:445.4,y:379.6}},{t:this.shape_8,p:{x:451.1}},{t:this.shape_7,p:{x:459.1,y:381.1}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:489,y:381}},{t:this.shape_3,p:{x:496.4,y:381.1}},{t:this.shape_2,p:{x:503.5,y:379.6}},{t:this.shape_1},{t:this.shape,p:{x:515.5}}]},78).to({state:[]},277).to({state:[{t:this.shape_39,p:{x:67.4,y:359.5}},{t:this.shape_176,p:{x:77.4,y:360.9}},{t:this.shape_175},{t:this.shape_174,p:{x:98.1,y:361}},{t:this.shape_173},{t:this.shape_172,p:{x:112.6,y:359.9}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_42,p:{x:145.5,y:359.5}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165,p:{x:175,y:361}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159,p:{x:229.6,y:359.9}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_106,p:{x:307,y:361}},{t:this.shape_150,p:{x:312.7,y:359.9}},{t:this.shape_149,p:{x:318.9,y:361}},{t:this.shape_148},{t:this.shape_147,p:{x:335.8,y:362.4}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143,p:{x:375.6,y:361}},{t:this.shape_100,p:{x:383.4,y:361}},{t:this.shape_111,p:{x:393.2,y:359.9}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{x:421.7,y:359.5}},{t:this.shape_139,p:{x:432.1,y:361}},{t:this.shape_9,p:{x:437.8,y:359.5}},{t:this.shape_76,p:{x:443.7,y:361}},{t:this.shape_97,p:{x:452,y:362.4}},{t:this.shape_62,p:{x:460.3,y:361}},{t:this.shape_138},{t:this.shape_72,p:{x:476.7,y:361}},{t:this.shape_56,p:{x:484.7,y:361}},{t:this.shape_137},{t:this.shape_34,p:{x:126,y:378}},{t:this.shape_136,p:{x:131.4,y:376.5}},{t:this.shape_135},{t:this.shape_38,p:{x:145.5,y:377.9}},{t:this.shape_41,p:{x:153.5,y:376.6}},{t:this.shape_28,p:{x:161.7,y:378}},{t:this.shape_112,p:{x:167.4,y:382.2}},{t:this.shape_118,p:{x:175.4,y:376.5}},{t:this.shape_52,p:{x:181.1,y:378}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_81,p:{x:203.1,y:376.9}},{t:this.shape_132},{t:this.shape_14,p:{x:217.4,y:376.6}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_21,p:{x:268.8,y:377.9}},{t:this.shape_30,p:{x:284.5,y:377.9}},{t:this.shape_127},{t:this.shape_7,p:{x:302,y:378}},{t:this.shape_48,p:{x:307.7,y:376.9}},{t:this.shape_44,p:{x:318.1,y:378}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_25,p:{x:344.7,y:378}},{t:this.shape_124},{t:this.shape_37,p:{x:359.2,y:376.9}},{t:this.shape_123,p:{x:365.6,y:376.5}},{t:this.shape_122},{t:this.shape_16,p:{x:389.2,y:377.9}},{t:this.shape_121},{t:this.shape_4,p:{x:406.7,y:377.9}},{t:this.shape_2,p:{x:410.3,y:376.5}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_40,p:{x:429.9,y:381.1}}]},55).to({state:[]},224).to({state:[{t:this.shape_222},{t:this.shape_221},{t:this.shape_43,p:{x:138,y:364}},{t:this.shape_3,p:{x:145.4,y:364.1}},{t:this.shape_220,p:{x:152.5,y:362.6}},{t:this.shape_117,p:{x:158.3,y:364}},{t:this.shape_219},{t:this.shape_149,p:{x:179,y:364.1}},{t:this.shape_111,p:{x:185.2,y:363}},{t:this.shape_105,p:{x:191.4}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216,p:{x:218,y:362.6}},{t:this.shape_215},{t:this.shape_214},{t:this.shape_83,p:{x:231.8}},{t:this.shape_61,p:{x:239}},{t:this.shape_66,p:{x:245.1}},{t:this.shape_213,p:{x:253.5,y:364}},{t:this.shape_212},{t:this.shape_63,p:{x:269.2}},{t:this.shape_165,p:{x:277.2,y:364.1}},{t:this.shape_211,p:{x:286.7,y:362.6}},{t:this.shape_176,p:{x:292.5,y:364}},{t:this.shape_210},{t:this.shape_209,p:{x:306.6,y:362.6}},{t:this.shape_208,p:{x:312.4,y:364}},{t:this.shape_207},{t:this.shape_206},{t:this.shape_55,p:{x:336.4}},{t:this.shape_106,p:{x:344.4,y:364.1}},{t:this.shape_205},{t:this.shape_53,p:{x:359.4,y:364}},{t:this.shape_72,p:{x:365.5,y:364.1}},{t:this.shape_204},{t:this.shape_98,p:{x:387.9,y:362.6}},{t:this.shape_100,p:{x:393.4,y:364.1}},{t:this.shape_136,p:{x:398.8,y:362.6}},{t:this.shape_203},{t:this.shape_79,p:{x:412.9}},{t:this.shape_74,p:{x:420.9}},{t:this.shape_81,p:{x:431.4,y:363}},{t:this.shape_52,p:{x:437.7,y:364.1}},{t:this.shape_68,p:{x:69.9,y:379.6}},{t:this.shape_56,p:{x:75.3,y:381.1}},{t:this.shape_118,p:{x:80.7,y:379.6}},{t:this.shape_202},{t:this.shape_201},{t:this.shape_49,p:{x:102.8}},{t:this.shape_200,p:{x:109.3,y:384.2}},{t:this.shape_39,p:{x:121.4,y:379.6}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_41,p:{x:151.8,y:379.8}},{t:this.shape_57,p:{x:157.9,y:379.6}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_4,p:{x:178.8,y:381}},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_123,p:{x:221.6,y:379.6}},{t:this.shape_190},{t:this.shape_189},{t:this.shape_44,p:{x:246.4,y:381.1}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_14,p:{x:271.1,y:379.8}},{t:this.shape_186,p:{x:285,y:381.1}},{t:this.shape_185},{t:this.shape_34,p:{x:302.5,y:381.1}},{t:this.shape_32,p:{x:312,y:379.6}},{t:this.shape_184},{t:this.shape_48,p:{x:328.1,y:380}},{t:this.shape_183},{t:this.shape_46,p:{x:342.7}},{t:this.shape_28,p:{x:354.8,y:381.1}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_31,p:{x:379.5}},{t:this.shape_35,p:{x:387.5}},{t:this.shape_25,p:{x:400,y:381.1}},{t:this.shape_180},{t:this.shape_37,p:{x:414.5,y:380}},{t:this.shape_36,p:{x:420.8}},{t:this.shape_15,p:{x:429}},{t:this.shape_2,p:{x:434.9,y:379.6}},{t:this.shape_10,p:{x:439.5}},{t:this.shape_179},{t:this.shape_8,p:{x:458}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_7,p:{x:481.8,y:381.1}},{t:this.shape,p:{x:487.6}}]},62).to({state:[]},206).to({state:[{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:89.9}},{t:this.shape_3,p:{x:97.3,y:32.1}},{t:this.shape_98,p:{x:104.3,y:30.6}},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269,p:{x:146.6,y:32.1}},{t:this.shape_159,p:{x:152.8,y:31}},{t:this.shape_268},{t:this.shape_267,p:{x:167.4}},{t:this.shape_266},{t:this.shape_68,p:{x:180.7,y:30.6}},{t:this.shape_265},{t:this.shape_264,p:{x:194}},{t:this.shape_263,p:{x:202.1}},{t:this.shape_150,p:{x:212.6,y:31}},{t:this.shape_262},{t:this.shape_261},{t:this.shape_111,p:{x:233.4,y:31}},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255,p:{x:288.6}},{t:this.shape_165,p:{x:296.6,y:32.1}},{t:this.shape_81,p:{x:302.3,y:31}},{t:this.shape_254,p:{x:307.4}},{t:this.shape_253},{t:this.shape_77,p:{x:319.4,y:30.6}},{t:this.shape_106,p:{x:329,y:32.1}},{t:this.shape_252,p:{x:337}},{t:this.shape_251,p:{x:345.1}},{t:this.shape_250},{t:this.shape_57,p:{x:358.4,y:30.6}},{t:this.shape_249,p:{x:364.2}},{t:this.shape_100,p:{x:372.2,y:32.1}},{t:this.shape_174,p:{x:384.1,y:32.1}},{t:this.shape_248,p:{x:390.4}},{t:this.shape_247},{t:this.shape_32,p:{x:402.4,y:30.6}},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242,p:{x:439.4}},{t:this.shape_149,p:{x:445.5,y:32.1}},{t:this.shape_241,p:{x:456}},{t:this.shape_48,p:{x:468.3,y:31}},{t:this.shape_240},{t:this.shape_239,p:{x:482.9}},{t:this.shape_21,p:{x:97.3,y:49}},{t:this.shape_238},{t:this.shape_2,p:{x:113.5,y:47.6}},{t:this.shape_75,p:{x:119.3,y:49}},{t:this.shape_42,p:{x:125.1,y:47.6}},{t:this.shape_139,p:{x:131.1,y:49.1}},{t:this.shape_237},{t:this.shape_236},{t:this.shape_56,p:{x:159.6,y:49.1}},{t:this.shape_72,p:{x:167.4,y:49.1}},{t:this.shape_16,p:{x:177.8,y:49}},{t:this.shape_235},{t:this.shape_234},{t:this.shape_52,p:{x:204.7,y:49.1}},{t:this.shape_30,p:{x:214.3,y:49.1}},{t:this.shape_233},{t:this.shape_213,p:{x:236.4,y:49}},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229,p:{x:273.6,y:49.2}},{t:this.shape_147,p:{x:282.2,y:50.6}},{t:this.shape_44,p:{x:294.4,y:49.1}},{t:this.shape_117,p:{x:302.8,y:49}},{t:this.shape_37,p:{x:313,y:48}},{t:this.shape_101,p:{x:319.4,y:47.6}},{t:this.shape_228},{t:this.shape_140,p:{x:341.5,y:47.6}},{t:this.shape_227},{t:this.shape_9,p:{x:357.6,y:47.6}},{t:this.shape_226},{t:this.shape_97,p:{x:371.8,y:50.6}},{t:this.shape_143,p:{x:380.1,y:49.1}},{t:this.shape_225},{t:this.shape_25,p:{x:396.5,y:49.1}},{t:this.shape_34,p:{x:404.5,y:49.1}},{t:this.shape_136,p:{x:414.6,y:47.6}},{t:this.shape_28,p:{x:420.3,y:49.1}},{t:this.shape_118,p:{x:425.7,y:47.6}},{t:this.shape_224},{t:this.shape_208,p:{x:439.8,y:49}},{t:this.shape_223},{t:this.shape_7,p:{x:456,y:49.1}},{t:this.shape_200,p:{x:461.8,y:52.2}}]},37).to({state:[]},267).to({state:[{t:this.shape_298,p:{x:74.2,y:30.6}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_68,p:{x:105.3,y:30.6}},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_100,p:{x:143.1,y:32.1}},{t:this.shape_52,p:{x:155.1,y:32.1}},{t:this.shape_290},{t:this.shape_172,p:{x:169.6,y:31}},{t:this.shape_289},{t:this.shape_288},{t:this.shape_159,p:{x:190.3,y:31}},{t:this.shape_56,p:{x:200.4,y:32.1}},{t:this.shape_252,p:{x:208.5}},{t:this.shape_287},{t:this.shape_286},{t:this.shape_57,p:{x:229.9,y:30.6}},{t:this.shape_285},{t:this.shape_34,p:{x:243.6,y:32.1}},{t:this.shape_28,p:{x:255.3,y:32.1}},{t:this.shape_284},{t:this.shape_283},{t:this.shape_150,p:{x:276.8,y:31}},{t:this.shape_111,p:{x:280.9,y:31}},{t:this.shape_267,p:{x:287.2}},{t:this.shape_242,p:{x:294.3}},{t:this.shape_264,p:{x:300.4}},{t:this.shape_282},{t:this.shape_81,p:{x:319.1,y:31}},{t:this.shape_44,p:{x:325.3,y:32.1}},{t:this.shape_263,p:{x:337.6}},{t:this.shape_32,p:{x:343.6,y:30.6}},{t:this.shape_281},{t:this.shape_248,p:{x:351.3}},{t:this.shape_255,p:{x:357.4}},{t:this.shape_274,p:{x:364.6}},{t:this.shape_251,p:{x:370.7}},{t:this.shape_280},{t:this.shape_48,p:{x:385.2,y:31}},{t:this.shape_249,p:{x:395.6}},{t:this.shape_279},{t:this.shape_67,p:{x:411.8,y:32.1}},{t:this.shape_2,p:{x:417.2,y:30.6}},{t:this.shape_254,p:{x:421.8}},{t:this.shape_25,p:{x:427.9,y:32.1}},{t:this.shape_278},{t:this.shape_241,p:{x:446.7}},{t:this.shape_239,p:{x:457}},{t:this.shape_277},{t:this.shape_37,p:{x:471.5,y:31}},{t:this.shape_7,p:{x:477.4,y:32.1}},{t:this.shape_40,p:{x:483.2,y:35.2}}]},12).to({state:[]},87).to({state:[{t:this.shape_298,p:{x:88.7,y:17.6}},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_220,p:{x:119.8,y:17.6}},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_165,p:{x:157.6,y:19.1}},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_216,p:{x:299.1,y:17.6}},{t:this.shape_388},{t:this.shape_211,p:{x:306.6,y:17.6}},{t:this.shape_387},{t:this.shape_386},{t:this.shape_106,p:{x:328.6,y:19.1}},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_209,p:{x:375.5,y:17.6}},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_98,p:{x:408.6,y:17.6}},{t:this.shape_376},{t:this.shape_24,p:{x:422.7,y:19.2}},{t:this.shape_100,p:{x:430.7,y:19.1}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_186,p:{x:460.5,y:19.1}},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_68,p:{x:87.4,y:34.6}},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_56,p:{x:147.6,y:36.1}},{t:this.shape_363},{t:this.shape_39,p:{x:165.4,y:34.6}},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_57,p:{x:289.1,y:34.6}},{t:this.shape_348},{t:this.shape_347},{t:this.shape_34,p:{x:311.1,y:36.1}},{t:this.shape_112,p:{x:316.9,y:40.3}},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_64,p:{x:347.7,y:37.7}},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_136,p:{x:381.3,y:34.6}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_172,p:{x:458.8,y:35}},{t:this.shape_32,p:{x:462.6,y:34.6}},{t:this.shape_331},{t:this.shape_330},{t:this.shape_28,p:{x:484.7,y:36.1}},{t:this.shape_159,p:{x:67.8,y:52}},{t:this.shape_329},{t:this.shape_328},{t:this.shape_150,p:{x:88.6,y:52}},{t:this.shape_327},{t:this.shape_9,p:{x:104.9,y:51.6}},{t:this.shape_118,p:{x:108.2,y:51.6}},{t:this.shape_269,p:{x:113.9,y:53.1}},{t:this.shape_45,p:{x:123.5,y:53.1}},{t:this.shape_326},{t:this.shape_325},{t:this.shape_111,p:{x:151.6,y:52}},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_81,p:{x:189,y:52}},{t:this.shape_174,p:{x:195.2,y:53.1}},{t:this.shape_321},{t:this.shape_320},{t:this.shape_48,p:{x:222.2,y:52}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_149,p:{x:249.2,y:53.1}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_72,p:{x:290.7,y:53.1}},{t:this.shape_52,p:{x:299,y:53.1}},{t:this.shape_313},{t:this.shape_37,p:{x:317.6,y:52}},{t:this.shape_44,p:{x:323.9,y:53.1}},{t:this.shape_7,p:{x:336,y:53.1}},{t:this.shape_229,p:{x:343.8,y:53.2}},{t:this.shape_312},{t:this.shape_311},{t:this.shape_2,p:{x:362.1,y:51.6}},{t:this.shape_67,p:{x:367.5,y:53.1}},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_25,p:{x:443.4,y:53.1}},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_40,p:{x:482.1,y:56.2}}]},15).to({state:[]},289).wait(155));

	// blue backing
	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#91D6DD").s().p("A9pC0IAAlnMA7TAAAIAAFng");
	this.shape_412.setTransform(246.6,369.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#91D6DD").s().p("Egi1AC0IAAlnMBFrAAAIAAFng");
	this.shape_413.setTransform(279.8,369.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_412}]},430).to({state:[{t:this.shape_413}]},20).to({state:[]},184).wait(1130));

	// title
	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("Ag+BOQgTgSAAgbIAvAAQABAMAGAFQAIAKAXAAQAOAAAJgFQAIgDAAgJQAAgIgHgEQgHgEgpgKQgfgIgMgKQgNgMAAgVQAAgZAUgSQATgSAkAAQAhAAAVAOQAVANAEAhIgwAAQAAgJgFgFQgHgKgSAAQgQAAgHAFQgGAFAAAGQAAAJAHADQAHAEAqAJQAcAHAOAMQAOAOgBAUQAAAbgTARQgVARgqAAQgpAAgVgSg");
	this.shape_414.setTransform(421.2,200.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("Ag9BKQgcgXAAgyQAAguAZgZQAZgZAnAAQAXAAATAJQATAIAMASQAMAQADAWQACAMgBAXIiCAAQABAbASALQAKAHAPAAQAQAAAKgJQAFgEAFgIIAwAAQgCAQgQARQgYAagsAAQgjAAgbgWgAAogSQgBgSgLgKQgMgKgQAAQgSAAgKAKQgKALgCARIBQAAIAAAAg");
	this.shape_415.setTransform(402.7,200.3);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AAhB6IAAhuQAAgOgFgJQgGgNgSAAQgSAAgJANQgKALAAAYIAABiIgvAAIAAjzIAvAAIAABWQAKgPAOgHQAMgGAPAAQARAAANAGQAOAGAJAMQAHAKACALQABAKAAAXIAABrg");
	this.shape_416.setTransform(382.5,197.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("Ag+BGQgUgaAAgpQAAguAWgaQAXgaAnABQAiAAAWAPQAVAPAEAnIgwAAQgBgLgGgHQgIgMgRAAQgXAAgIAYQgFAMAAAVQAAATAFAMQAIAXAXAAQAQAAAHgJQAHgJACgOIAwAAQgCAVgOAUQgWAegsAAQgqABgVgag");
	this.shape_417.setTransform(362.8,200.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AAhBdIAAhuQAAgOgEgHQgHgPgTAAQgXABgIAUQgGALAAARIAABhIgvAAIAAi0IAuAAIAAAaQAJgNAJgHQAOgLAVABQAcgBASAPQARAOAAAiIAAB6g");
	this.shape_418.setTransform(343,200.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgXB7IAAi0IAvAAIAAC0gAgXhOIAAgsIAvAAIAAAsg");
	this.shape_419.setTransform(327.8,197);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AhWB6IAAjzICtAAIAAArIh7AAIAAA4IBsAAIAAAqIhsAAIAABmg");
	this.shape_420.setTransform(313.7,197.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("Ag+BOQgTgSAAgbIAvAAQABAMAGAFQAIAKAXAAQAOAAAJgFQAIgDAAgJQAAgIgHgEQgHgEgpgKQgfgIgMgKQgNgMAAgVQAAgZAUgSQATgSAkAAQAhAAAVAOQAVANAEAhIgwAAQAAgJgFgFQgHgKgSAAQgQAAgHAFQgGAFAAAGQAAAJAHADQAHAEAqAJQAcAHAOAMQAOAOgBAUQAAAbgTARQgVARgpAAQgqAAgVgSg");
	this.shape_421.setTransform(283.5,200.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AhEBEQgXgcAAgoQAAgmAXgdQAWgcAuAAQAvAAAXAcQAWAdAAAmQAAAogWAcQgXAcgvAAQguAAgWgcgAgfgpQgLAPAAAaQAAAbALAPQALAPAUAAQAVAAALgPQALgPAAgbQAAgagLgPQgLgOgVAAQgUAAgLAOg");
	this.shape_422.setTransform(263.7,200.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("Ag6B0QgWgOgCgbIAzAAQACAIAFAEQAIAGARABQAZgBAJgQQAFgLAAgaIAAgMQgGAMgIAFQgOAMgWAAQgjAAgUgZQgVgYAAgpQAAgoAUgcQAUgbAkAAQANgBAKAEQARAIALASIAAgaIAuAAIAACrQAAAjgMASQgUAeg4ABQgjAAgWgOgAgghAQgFANAAASQAAAPAFANQAKAWAXgBQARAAALgMQAMgMAAgbQAAgZgLgOQgLgNgSAAQgYAAgJAXg");
	this.shape_423.setTransform(242.4,203.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AhEBRQgQgOAAgZQAAgiAZgOQAPgIAbgDIARgCQAMgCAGgCQAKgFgBgJQAAgLgHgEQgIgEgOAAQgRAAgHAIQgFAGgCAKIguAAQACgXAMgPQATgYAuAAQAcAAAYALQAWAMAAAhIAABSIABAVQABAJACADQACAEAFACIAAAHIgzAAIgEgLIgBgKQgJAKgNAIQgPAIgTAAQgZAAgQgOgAASAGIgMAEIgKACQgPACgHAEQgLAHAAANQAAAMAHAGQAHAFAJAAQAPAAANgJQANgJAAgYIAAgRg");
	this.shape_424.setTransform(223.3,200.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AhXCAIAAj7IAuAAIAAAbQAHgMAJgGQAQgNAVAAQAgAAAWAXQAWAYAAAuQAAAugWAZQgVAZgiAAQgVAAgOgLQgIgFgIgMIAABegAgkg9QgFANAAATQAAAgARAMQAKAHANAAQATAAALgPQAKgOAAgaQAAgVgJgPQgKgQgVgBQgaABgJAYg");
	this.shape_425.setTransform(203.8,203.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AhEBRQgQgOAAgZQAAgiAagOQAOgIAcgDIAPgCQANgCAFgCQALgFAAgJQAAgLgIgEQgIgEgOAAQgRAAgHAIQgFAGgCAKIgtAAQABgXAMgPQATgYAtAAQAeAAAWALQAYAMAAAhIAABSIAAAVQAAAJADADQACAEAFACIAAAHIg0AAIgCgLIgCgKQgJAKgOAIQgOAIgUAAQgYAAgQgOgAATAGIgOAEIgJACQgPACgHAEQgLAHAAANQAAAMAHAGQAGAFALAAQAOAAANgJQANgJABgYIAAgRg");
	this.shape_426.setTransform(183.6,200.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgXB6IAAjzIAvAAIAADzg");
	this.shape_427.setTransform(169.4,197.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AhEBRQgQgOAAgZQAAgiAZgOQAPgIAbgDIARgCQAMgCAGgCQAKgFgBgJQAAgLgHgEQgIgEgOAAQgRAAgHAIQgFAGgCAKIguAAQACgXAMgPQATgYAuAAQAcAAAYALQAWAMAAAhIAABSIABAVQABAJACADQACAEAFACIAAAHIgzAAIgEgLIgBgKQgJAKgNAIQgPAIgTAAQgZAAgQgOgAASAGIgMAEIgKACQgPACgHAEQgLAHAAANQAAAMAHAGQAHAFAJAAQAPAAANgJQANgJAAgYIAAgRg");
	this.shape_428.setTransform(155.3,200.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AhQBfQghgiAAg7QAAg6AhgkQAhgkA0AAQAvAAAcAYQAdAYAEAjIgzAAQgFgZgXgKQgMgFgQAAQgcAAgTAWQgTAWAAAsQAAAtAUATQAVASAZAAQAaAAAQgPQAQgOAEgYIg4AAIAAgoIBmAAIAACCIgiAAIgFgeQgPARgMAHQgUANgdAAQgwAAgfgig");
	this.shape_429.setTransform(132.2,197.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414}]}).to({state:[]},55).wait(1709));

	// Layer 1
	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("A1efQMAAAg+fMAq9AAAMAAAA+fg");
	this.shape_430.setTransform(275,200,2.007,1.005);

	this.instance = new lib.whitefade();
	this.instance.parent = this;
	this.instance.setTransform(275,200,1,1,0,0,0,276,201);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_430}]}).to({state:[{t:this.instance}]},55).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1694));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1694));

	// stage MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egq9AfQMAAAg+fMBV7AAAMAAAA+fg");
	mask.setTransform(275,200);

	// black fade
	this.instance_1 = new lib.blackfade();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,200,1,1,0,0,0,275,200);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(902).to({_off:false},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(837));

	// evolve - seed eater
	this.leafFinch = new lib.finchevolveleafeater();
	this.leafFinch.parent = this;
	this.leafFinch.setTransform(101.7,178);
	this.leafFinch._off = true;

	var maskedShapeInstanceList = [this.leafFinch];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.leafFinch).wait(1693).to({_off:false},0).wait(1).to({regX:-6.8,regY:-7.7,scaleX:1,scaleY:1,x:99.1,y:172.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:103.2,y:174.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:107.3,y:176.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:111.4,y:178.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:115.6,y:181},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:119.7,y:183.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:123.8,y:185.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:127.9,y:187.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:132.1,y:189.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:136.2,y:191.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:140.3,y:193.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:144.4,y:196},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:148.6,y:198.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:152.7,y:200.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:156.8,y:202.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:160.9,y:204.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:165.1,y:206.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:169.2,y:208.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:173.3,y:211},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:177.5,y:213.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:181.6,y:215.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:185.7,y:217.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:189.8,y:219.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:194,y:221.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:198.1,y:223.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:202.3,y:226.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:206.4,y:228.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:210.5,y:230.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:214.6,y:232.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:218.8,y:234.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:222.9,y:236.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:227,y:239},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:231.1,y:241.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:235.3,y:243.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:239.4,y:245.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:243.5,y:247.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:247.6,y:249.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:251.8,y:251.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:255.9,y:254},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:260,y:256.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:264.2,y:258.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:268.3,y:260.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:272.4,y:262.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:276.5,y:264.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:280.7,y:266.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:284.8,y:269},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:288.9,y:271.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:293.1,y:273.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:297.2,y:275.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:301.3,y:277.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:305.5,y:279.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:309.6,y:281.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:313.7,y:284},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:317.8,y:286.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:322,y:288.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:326.1,y:290.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:330.2,y:292.6},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:334.4,y:294.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:338.5,y:296.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:342.6,y:299},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:346.7,y:301.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:350.9,y:303.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:355,y:305.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:359.1,y:307.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:363.2,y:309.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:367.4,y:311.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:371.5,y:314.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:375.6,y:316.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:379.7,y:318.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:383.9,y:320.5},0).wait(1));

	// evolve - seed eater
	this.grubFinch = new lib.finchevolvegrubeater();
	this.grubFinch.parent = this;
	this.grubFinch.setTransform(101.7,178);
	this.grubFinch._off = true;

	var maskedShapeInstanceList = [this.grubFinch];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.grubFinch).wait(1693).to({_off:false},0).wait(1).to({regX:-10.2,regY:-6.3,scaleX:1,scaleY:1,x:95.6,y:172.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:99.8,y:173.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:103.8,y:174.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:108,y:175.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:112.1,y:176.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:116.2,y:177.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:120.3,y:178.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:124.4,y:179.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:128.5,y:180.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:132.7,y:181.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:136.8,y:182.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:140.9,y:183.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:145,y:184},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:149.1,y:185},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:153.2,y:185.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:157.4,y:186.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:161.4,y:187.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:165.6,y:188.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:169.7,y:189.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:173.8,y:190.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:177.9,y:191.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:182,y:192.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:186.1,y:193.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:190.3,y:194.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:194.4,y:195.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:198.5,y:196.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:202.6,y:197.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:206.7,y:198.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:210.8,y:199.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:215,y:200.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:219,y:201.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:223.2,y:202.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:227.3,y:203},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:231.4,y:204},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:235.6,y:204.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:239.6,y:205.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:243.8,y:206.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:247.9,y:207.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:252,y:208.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:256.1,y:209.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:260.2,y:210.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:264.3,y:211.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:268.5,y:212.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:272.6,y:213.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:276.7,y:214.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:280.8,y:215.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:284.9,y:216.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:289,y:217.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:293.2,y:218.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:297.2,y:219.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:301.4,y:220.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:305.5,y:221},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:309.6,y:222},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:313.7,y:222.9},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:317.8,y:223.9},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:321.9,y:224.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:326.1,y:225.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:330.2,y:226.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:334.3,y:227.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:338.4,y:228.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:342.5,y:229.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:346.6,y:230.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:350.8,y:231.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:354.9,y:232.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:359,y:233.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:363.1,y:234.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:367.2,y:235.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:371.3,y:236.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:375.4,y:237.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:379.6,y:238.1},0).wait(1));

	// evolve - seed eater
	this.coneFinch = new lib.finchevolveconeeater();
	this.coneFinch.parent = this;
	this.coneFinch.setTransform(101.7,178);
	this.coneFinch._off = true;

	var maskedShapeInstanceList = [this.coneFinch];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.coneFinch).wait(1693).to({_off:false},0).wait(1).to({regX:-7.8,regY:-2.4,scaleX:1,scaleY:1,x:98,y:175.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:102.1,y:175.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:106.2,y:174.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:110.3,y:174.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:114.4,y:174.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:118.6,y:174.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:122.6,y:174},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:126.8,y:173.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:130.8,y:173.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:135,y:173.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:139.1,y:173},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:143.2,y:172.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:147.3,y:172.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:151.4,y:172.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:155.5,y:172.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:159.6,y:171.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:163.7,y:171.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:167.8,y:171.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:171.9,y:171.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:176,y:171},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:180.1,y:170.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:184.2,y:170.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:188.3,y:170.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:192.4,y:170},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:196.5,y:169.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:200.7,y:169.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:204.7,y:169.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:208.9,y:169.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:213,y:168.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:217.1,y:168.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:221.2,y:168.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:225.3,y:168.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:229.4,y:167.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:233.5,y:167.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:237.6,y:167.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:241.7,y:167.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:245.8,y:167},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:249.9,y:166.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:254.1,y:166.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:258.1,y:166.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:262.3,y:166.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:266.3,y:165.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:270.5,y:165.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:274.6,y:165.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:278.7,y:165.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:282.8,y:164.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:286.9,y:164.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:291,y:164.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:295.1,y:164.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:299.2,y:164},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:303.3,y:163.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:307.4,y:163.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:311.5,y:163.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:315.6,y:163.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:319.7,y:162.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:323.8,y:162.6},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:327.9,y:162.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:332,y:162.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:336.2,y:161.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:340.2,y:161.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:344.4,y:161.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:348.4,y:161.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:352.6,y:161},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:356.7,y:160.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:360.8,y:160.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:364.9,y:160.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:369,y:160},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:373.1,y:159.8},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:377.2,y:159.6},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:381.3,y:159.4},0).wait(1));

	// evolve - seed eater
	this.seedFinch = new lib.finchevolveseedeater();
	this.seedFinch.parent = this;
	this.seedFinch.setTransform(101.7,178);
	this.seedFinch._off = true;

	var maskedShapeInstanceList = [this.seedFinch];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.seedFinch).wait(1693).to({_off:false},0).wait(1).to({regX:-1.7,regY:-3.2,scaleX:1,scaleY:1,x:104.2,y:173.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:108.4,y:172},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:112.6,y:170.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:116.8,y:169.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:121,y:167.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:125.2,y:166.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:129.4,y:165.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:133.6,y:163.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:137.7,y:162.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:141.9,y:161},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:146.1,y:159.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:150.4,y:158.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:154.6,y:156.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:158.7,y:155.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:162.9,y:154.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:167.1,y:152.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:171.3,y:151.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:175.5,y:150},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:179.7,y:148.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:183.9,y:147.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:188.1,y:145.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:192.3,y:144.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:196.5,y:143.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:200.7,y:141.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:204.9,y:140.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:209.1,y:139},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:213.3,y:137.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:217.5,y:136.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:221.7,y:134.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:225.9,y:133.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:230,y:132.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:234.2,y:130.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:238.4,y:129.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:242.6,y:128},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:246.9,y:126.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:251,y:125.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:255.2,y:123.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:259.4,y:122.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:263.6,y:121.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:267.8,y:119.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:272,y:118.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:276.2,y:117},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:280.4,y:115.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:284.6,y:114.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:288.8,y:112.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:293,y:111.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:297.2,y:110.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:301.4,y:108.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:305.5,y:107.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:309.8,y:105.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:314,y:104.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:318.2,y:103.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:322.3,y:101.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:326.5,y:100.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:330.7,y:99.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:334.9,y:97.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:339.1,y:96.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:343.3,y:94.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:347.5,y:93.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:351.7,y:92.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:355.9,y:90.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:360.1,y:89.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:364.3,y:88.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:368.5,y:86.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:372.7,y:85.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:376.9,y:83.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:381.1,y:82.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:385.3,y:81.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:389.5,y:79.8},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:393.7,y:78.4},0).wait(1));

	// ancestor finch
	this.instance_2 = new lib.finchancestor();
	this.instance_2.parent = this;
	this.instance_2.setTransform(282.9,168.1,1,1,0,0,0,126.5,77.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1620).to({_off:false},0).wait(59).to({scaleX:0.95,scaleY:0.95,x:265.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:248.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:231.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:213.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:196.6},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:179.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:162.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:144.9},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:127.6},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:110.4},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:93.1},0).wait(59).to({alpha:0.938},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1));

	// info boxes
	this.leafInfo = new lib.infoboxleafeater();
	this.leafInfo.parent = this;
	this.leafInfo.setTransform(218.5,314.2,1,1,0,0,0,-1.9,-2.5);

	this.grubInfo = new lib.infoboxgrubeater();
	this.grubInfo.parent = this;
	this.grubInfo.setTransform(220.4,232.6,1,1,0,0,0,-1.9,-2.5);

	this.coneInfo = new lib.infoboxconeeater();
	this.coneInfo.parent = this;
	this.coneInfo.setTransform(219.4,148.8,1,1,0,0,0,-1.9,-2.5);

	this.seedInfo = new lib.infoboxseedeater();
	this.seedInfo.parent = this;
	this.seedInfo.setTransform(218.5,70.1,1,1,0,0,0,-1.9,-2.5);

	var maskedShapeInstanceList = [this.leafInfo,this.grubInfo,this.coneInfo,this.seedInfo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.seedInfo},{t:this.coneInfo},{t:this.grubInfo},{t:this.leafInfo}]},1763).wait(1));

	// Layer 7
	this.instance_3 = new lib.finchleafeating();
	this.instance_3.parent = this;
	this.instance_3.setTransform(277,205,1,1,0,0,0,245,152.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(825).to({_off:false},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.192},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.269},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.346},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.423},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.577},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.654},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.731},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.808},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:1},0).wait(27).to({scaleX:0.97,scaleY:0.97,x:285,y:208.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:293,y:211.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:301,y:214.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:309.1,y:217.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:317.1,y:221},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:325.1,y:224.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:333.1,y:227.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:341.2,y:230.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:349.2,y:233.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:357.2,y:237},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:365.3,y:240.2},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:373.3,y:243.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:381.3,y:246.5},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:389.4,y:249.7},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:397.3,y:252.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:405.4,y:256.1},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:413.4,y:259.3},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:421.4,y:262.5},0).wait(18).to({_off:true},1).wait(850));

	// Layer 6
	this.instance_4 = new lib.finchgrubeating();
	this.instance_4.parent = this;
	this.instance_4.setTransform(277,205,1,1,0,0,0,259.5,148);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(774).to({_off:false},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:1},0).wait(30).to({scaleX:0.98,scaleY:0.98,x:272,y:207.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:267,y:209.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:262,y:211.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:257,y:214.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:252,y:216.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:247.1,y:218.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:242.1,y:221.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:237.1,y:223.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:232.1,y:225.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:227.1,y:227.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:222.2,y:230.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:217.2,y:232.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:212.2,y:234.8},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:207.2,y:237.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:202.2,y:239.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:197.3,y:241.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:192.3,y:244},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:187.3,y:246.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:182.3,y:248.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:177.3,y:250.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:172.4,y:253.1},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:167.4,y:255.4},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:162.4,y:257.7},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:157.4,y:260},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:152.4,y:262.3},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:147.4,y:264.6},0).wait(62).to({_off:true},1).wait(850));

	// Layer 5
	this.instance_5 = new lib.finchconeeating();
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,223,1,1,0,0,0,227.5,173);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(724).to({_off:false},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:1},0).wait(30).to({scaleX:0.97,scaleY:0.97,x:281.8,y:217.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:288.7,y:211.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:295.6,y:205.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:302.5,y:199.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:309.4,y:193.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:316.2,y:188},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:323.1,y:182.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:330,y:176.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:336.9,y:170.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:343.8,y:164.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:350.7,y:158.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:357.6,y:153},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:364.5,y:147.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:371.4,y:141.4},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:378.2,y:135.6},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:385.1,y:129.7},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:392,y:123.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:398.9,y:118.1},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:405.8,y:112.3},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:412.7,y:106.4},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:419.6,y:100.6},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:426.5,y:94.8},0).wait(117).to({_off:true},1).wait(850));

	// Layer 4
	this.instance_6 = new lib.Layer1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(29.5,30);

	this.instance_7 = new lib.finchseedeater();
	this.instance_7.parent = this;
	this.instance_7.setTransform(277,179.5,1,1,0,0,0,247.5,149.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.finch();
	this.instance_8.parent = this;
	this.instance_8.setTransform(253.7,310.4,0.105,0.105,0,0,0,0,10.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},696).to({state:[{t:this.instance_7}]},28).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_8}]},335).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(724).to({_off:false},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:271.3,y:175.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:265.6,y:171},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:260,y:166.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:254.3,y:162.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:248.6,y:158.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:243,y:153.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:237.3,y:149.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:231.6,y:145.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:225.9,y:141.1},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:220.3,y:136.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:214.6,y:132.6},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:208.9,y:128.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:203.3,y:124.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:197.6,y:119.8},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:191.9,y:115.6},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:186.3,y:111.4},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:180.6,y:107.1},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:174.9,y:102.8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:169.3,y:98.6},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:163.6,y:94.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:158,y:90.1},0).wait(168).to({_off:true},1).wait(850));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1249).to({_off:false},0).wait(1).to({regX:-3.7,regY:9.1,x:256.6,y:308.3},0).wait(1).to({x:260,y:306.5},0).wait(1).to({x:263.4,y:304.7},0).wait(1).to({x:266.8,y:303},0).wait(1).to({x:270.3,y:301.3},0).wait(1).to({x:273.8,y:299.7},0).wait(1).to({x:277.3,y:298.2},0).wait(1).to({x:280.9,y:296.8},0).wait(1).to({x:284.5,y:295.4},0).wait(1).to({x:288.1,y:294.1},0).wait(1).to({x:291.7,y:292.9},0).wait(1).to({x:295.4,y:291.8},0).wait(1).to({x:299.1,y:290.8},0).wait(1).to({x:302.8,y:289.8},0).wait(1).to({x:306.6,y:289},0).wait(1).to({x:310.4,y:288.2},0).wait(1).to({x:314.2,y:287.6},0).wait(1).to({x:318,y:287.1},0).wait(1).to({x:321.8,y:286.7},0).wait(1).to({x:325.6,y:286.3},0).wait(1).to({x:329.4,y:286.2},0).wait(1).to({x:333.3,y:286.1},0).wait(1).to({x:337.1},0).wait(1).to({x:341,y:286.3},0).wait(1).to({x:344.8,y:286.6},0).wait(1).to({x:348.6,y:287},0).wait(1).to({x:352.4,y:287.6},0).wait(1).to({x:356.2,y:288.3},0).wait(1).to({x:360,y:289.1},0).wait(1).to({x:363.7,y:290},0).wait(1).to({x:367.4,y:291},0).wait(1).to({x:371,y:292.2},0).wait(1).to({x:374.7,y:293.5},0).wait(1).to({x:378.3,y:294.9},0).wait(1).to({x:381.8,y:296.4},0).wait(1).to({x:385.3,y:298},0).wait(1).to({x:388.7,y:299.7},0).wait(1).to({x:392.1,y:301.5},0).wait(1).to({x:395.4,y:303.4},0).wait(1).to({x:398.7,y:305.4},0).wait(1).to({x:401.9,y:307.5},0).wait(1).to({x:405.1,y:309.7},0).wait(1).to({x:408.2,y:312},0).wait(1).to({x:411.2,y:314.3},0).wait(1).to({x:414.2,y:316.7},0).wait(1).to({x:417.2,y:319.2},0).wait(1).to({x:420,y:321.8},0).wait(1).to({x:422.8,y:324.4},0).wait(1).to({x:425.6,y:327.1},0).wait(1).to({x:428.3,y:329.8},0).wait(1).to({x:430.9,y:332.6},0).wait(1).to({x:433.5,y:335.4},0).wait(1).to({x:436,y:338.3},0).wait(1).to({x:438.5,y:341.3},0).wait(1).to({x:440.9,y:344.3},0).wait(1).to({x:443.3,y:347.3},0).wait(1).to({x:445.6,y:350.4},0).wait(1).to({x:447.9,y:353.5},0).wait(1).to({x:450,y:356.6},0).wait(1).to({x:452.2,y:359.8},0).wait(1).to({x:454.3,y:363},0).wait(1).to({x:456.3,y:366.3},0).wait(1).to({x:458.3,y:369.6},0).wait(1).to({x:460.2,y:372.9},0).wait(1).to({x:462,y:376.3},0).wait(1).to({x:463.8,y:379.7},0).wait(1).to({x:465.5,y:383.2},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(440));

	// finch 2
	this.instance_9 = new lib.finch();
	this.instance_9.parent = this;
	this.instance_9.setTransform(253.7,310.4,0.105,0.105,0,0,0,0,10.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1242).to({_off:false},0).wait(1).to({regX:-3.7,regY:9.1,x:255.7,y:308.8},0).wait(1).to({x:258.1,y:307.5},0).wait(1).to({x:260.5,y:306.1},0).wait(1).to({x:262.9,y:304.8},0).wait(1).to({x:265.4,y:303.5},0).wait(1).to({x:267.8,y:302.2},0).wait(1).to({x:270.3,y:300.9},0).wait(1).to({x:272.7,y:299.6},0).wait(1).to({x:275.2,y:298.3},0).wait(1).to({x:277.7,y:297.1},0).wait(1).to({x:280.2,y:295.9},0).wait(1).to({x:282.7,y:294.7},0).wait(1).to({x:285.2,y:293.5},0).wait(1).to({x:287.7,y:292.3},0).wait(1).to({x:290.2,y:291.2},0).wait(1).to({x:292.8,y:290.1},0).wait(1).to({x:295.3,y:289},0).wait(1).to({x:297.9,y:287.9},0).wait(1).to({x:300.4,y:286.9},0).wait(1).to({x:303,y:285.8},0).wait(1).to({x:305.6,y:284.8},0).wait(1).to({x:308.2,y:283.9},0).wait(1).to({x:310.8,y:282.9},0).wait(1).to({x:313.4,y:282},0).wait(1).to({x:316,y:281.2},0).wait(1).to({x:318.7,y:280.3},0).wait(1).to({x:321.3,y:279.5},0).wait(1).to({x:324,y:278.8},0).wait(1).to({x:326.7,y:278},0).wait(1).to({x:329.3,y:277.3},0).wait(1).to({x:332,y:276.7},0).wait(1).to({x:334.7,y:276.1},0).wait(1).to({x:337.5,y:275.6},0).wait(1).to({x:340.2,y:275.1},0).wait(1).to({x:342.9,y:274.6},0).wait(1).to({x:345.7,y:274.2},0).wait(1).to({x:348.4,y:273.9},0).wait(1).to({x:351.2,y:273.6},0).wait(1).to({x:353.9,y:273.4},0).wait(1).to({x:356.7,y:273.3},0).wait(1).to({x:359.5},0).wait(1).to({x:362.3},0).wait(1).to({x:365,y:273.4},0).wait(1).to({x:367.8,y:273.6},0).wait(1).to({x:370.5,y:273.9},0).wait(1).to({x:373.3,y:274.3},0).wait(1).to({x:376,y:274.8},0).wait(1).to({x:378.7,y:275.4},0).wait(1).to({x:381.4,y:276.2},0).wait(1).to({x:384,y:277},0).wait(1).to({x:386.6,y:278},0).wait(1).to({x:389.2,y:279.1},0).wait(1).to({x:391.6,y:280.3},0).wait(1).to({x:394.1,y:281.6},0).wait(1).to({x:396.4,y:283.1},0).wait(1).to({x:398.7,y:284.7},0).wait(1).to({x:400.9,y:286.4},0).wait(1).to({x:402.9,y:288.3},0).wait(1).to({x:404.9,y:290.2},0).wait(1).to({x:406.8,y:292.3},0).wait(1).to({x:408.5,y:294.4},0).wait(1).to({x:410.1,y:296.7},0).wait(1).to({x:411.6,y:299},0).wait(1).to({x:413,y:301.4},0).wait(1).to({x:414.2,y:303.9},0).wait(1).to({x:415.2,y:306.5},0).wait(1).to({x:416.1,y:309.1},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(445));

	// finch 2
	this.instance_10 = new lib.finch();
	this.instance_10.parent = this;
	this.instance_10.setTransform(253.7,310.4,0.105,0.105,0,0,0,0,10.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1236).to({_off:false},0).wait(1).to({regX:-3.7,regY:9.1,x:254.1,y:308},0).wait(1).to({x:255,y:305.8},0).wait(1).to({x:256,y:303.5},0).wait(1).to({x:257,y:301.3},0).wait(1).to({x:257.9,y:299.2},0).wait(1).to({x:259,y:297},0).wait(1).to({x:260,y:294.9},0).wait(1).to({x:261.1,y:292.7},0).wait(1).to({x:262.2,y:290.7},0).wait(1).to({x:263.4,y:288.6},0).wait(1).to({x:264.6,y:286.5},0).wait(1).to({x:265.9,y:284.5},0).wait(1).to({x:267.3,y:282.5},0).wait(1).to({x:268.6,y:280.6},0).wait(1).to({x:270.1,y:278.7},0).wait(1).to({x:271.6,y:276.9},0).wait(1).to({x:273.3,y:275.1},0).wait(1).to({x:275,y:273.5},0).wait(1).to({x:276.8,y:271.9},0).wait(1).to({x:278.7,y:270.6},0).wait(1).to({x:280.8,y:269.4},0).wait(1).to({x:283,y:268.4},0).wait(1).to({x:285.3,y:267.8},0).wait(1).to({x:287.7,y:267.5},0).wait(1).to({x:290.1,y:267.6},0).wait(1).to({x:292.4,y:268},0).wait(1).to({x:294.7,y:268.8},0).wait(1).to({x:296.8,y:269.8},0).wait(1).to({x:298.8,y:271.1},0).wait(1).to({x:300.7,y:272.5},0).wait(1).to({x:302.5,y:274.1},0).wait(1).to({x:304.2,y:275.9},0).wait(1).to({x:305.7,y:277.7},0).wait(1).to({x:307.2,y:279.5},0).wait(1).to({x:308.5,y:281.5},0).wait(1).to({x:309.8,y:283.5},0).wait(1).to({x:311,y:285.6},0).wait(1).to({x:312.2,y:287.7},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(482));

	// finch
	this.instance_11 = new lib.finchflock();
	this.instance_11.parent = this;
	this.instance_11.setTransform(529.1,278.9,0.092,0.092,0,0,0,-1.1,9.8);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(967).to({_off:false},0).wait(1).to({regX:23.7,regY:17.2,scaleX:0.12,scaleY:0.12,x:530.5,y:274.6},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:529.4,y:269.7},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:528.2,y:264.8},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:526.7,y:260.1},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:525,y:255.5},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:523.1,y:250.9},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:521,y:246.4},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:518.7,y:242.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:516.2,y:237.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:513.6,y:233.9},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:510.8,y:229.9},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:507.7,y:226.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:504.6,y:222.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:501.3,y:219.1},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:497.8,y:215.8},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:494.3,y:212.6},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:490.6,y:209.6},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:486.7,y:206.7},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:482.9,y:204.1},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:478.8,y:201.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:474.7,y:199.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:470.6,y:196.9},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:466.3,y:194.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:462,y:192.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:457.7,y:191},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:453.3,y:189.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:448.8,y:187.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:444.3,y:186.2},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:439.8,y:184.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:435.2,y:183.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:430.6,y:182.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:426,y:181.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:421.4,y:180.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:416.7,y:179.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:412,y:179.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:407.3,y:178.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:402.6,y:178.3},0).wait(1).to({scaleX:1,scaleY:1,x:397.9,y:178.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:393.1,y:178},0).wait(157).to({scaleX:1,scaleY:1,x:386.9,y:177.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:380.8,y:177.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:374.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:368.4,y:177.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:362.3,y:178.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:356.2,y:178.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:350,y:179.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:344,y:180.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:337.9,y:181.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:331.9,y:182.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:325.9,y:183.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:320,y:185.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:314.1,y:186.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:308.3,y:188.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:302.6,y:190.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:297,y:193},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:291.4,y:195.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:286,y:198},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:280.7,y:200.9},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:275.4,y:203.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:270.4,y:207},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:265.4,y:210.4},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:260.6,y:213.9},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:256.1,y:217.6},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:251.6,y:221.6},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:247.3,y:225.6},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:243.3,y:229.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:239.4,y:234.2},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:235.7,y:238.7},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:232.1,y:243.3},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:228.9,y:248.1},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:225.8,y:252.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:222.8,y:257.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:220.2,y:262.9},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:217.6,y:268},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:215.3,y:273.2},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:213.1,y:278.4},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:211.1,y:283.7},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:209.3,y:289},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:207.7,y:294.4},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:206.1,y:299.8},0).to({_off:true},1).wait(560));

	// darwin's path
	this.instance_12 = new lib.darwinspath();
	this.instance_12.parent = this;
	this.instance_12.setTransform(334.4,171.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(78).to({_off:false},0).to({_off:true},236).wait(1450));

	// galapgos zoom
	this.instance_13 = new lib.galapagosmap();
	this.instance_13.parent = this;
	this.instance_13.setTransform(196.1,157.9,0.059,0.059,0,0,0,150,150);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(314).to({_off:false},0).wait(1).to({regX:117.6,regY:306.6,scaleX:0.07,scaleY:0.07,x:194.5,y:164.3},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:194.9,y:161.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:195.3,y:158.6},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:195.7,y:155.8},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:196,y:152.9},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:196.4,y:150.1},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:196.8,y:147.3},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:197.2,y:144.4},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:197.6,y:141.6},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:198,y:138.8},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:198.4,y:135.9},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:198.7,y:133.1},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:199.1,y:130.3},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:199.5,y:127.4},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:198.5,y:125.3},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:197.6,y:123.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:196.6,y:121.1},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:195.6,y:119},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:194.6,y:116.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:193.7,y:114.7},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:192.7,y:112.6},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:191.7,y:110.5},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:190.7,y:108.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:189.8,y:106.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:188.8,y:104.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:187.8,y:102},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:186.8,y:99.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:185.9,y:97.8},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:184.9,y:95.7},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:183.9,y:93.6},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:182.9,y:91.4},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:181.9,y:89.3},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:181,y:87.2},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:180,y:85.1},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:179,y:83},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:178,y:80.9},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:177.1,y:78.7},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:176.1,y:76.6},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:175.1,y:74.5},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:174.1,y:72.4},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:173.2,y:70.2},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:172.2,y:68.1},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:171.2,y:66},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:170.2,y:63.9},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:169.3,y:61.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:168.3,y:59.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:167.3,y:57.5},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:166.3,y:55.4},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:165.4,y:53.3},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:164.3,y:51.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:163.4,y:49.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:162.4,y:46.9},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:161.5,y:44.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:160.4,y:42.7},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:159.5,y:40.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:158.5,y:38.4},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:157.6,y:36.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:156.5,y:34.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:155.6,y:32.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:154.6,y:30},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:153.6,y:27.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:152.6,y:25.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:151.7,y:23.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:150.7,y:21.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:149.7,y:19.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:148.7,y:17.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:147.8,y:15.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:146.8,y:13},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:145.8,y:10.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:144.8,y:8.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:143.9,y:6.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:142.9,y:4.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:141.9,y:2.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:140.9,y:0.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:140,y:-1.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:139,y:-3.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:138,y:-6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:137,y:-8.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:136,y:-10.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:138.7,y:-8.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:141.4,y:-7.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:144.1,y:-5.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:146.7,y:-4.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:149.4,y:-2.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:152.1,y:-1.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:154.8,y:0.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:157.4,y:1.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:160.1,y:3.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:162.8,y:4.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:165.4,y:6.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:168.1,y:7.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:170.8,y:9.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:173.4,y:10.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:176.1,y:12.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:178.8,y:13.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:181.5,y:15.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:184.1,y:16.9},0).wait(1).to({scaleX:1,scaleY:1,x:186.8,y:18.4},0).wait(1).to({scaleX:1,scaleY:1,x:189.5,y:19.9},0).wait(1).to({scaleX:1,scaleY:1,x:192.1,y:21.4},0).wait(1).to({scaleX:1,scaleY:1,x:194.8,y:22.9},0).wait(1).to({scaleX:1,scaleY:1,x:197.5,y:24.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:200.1,y:26},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:202.8,y:27.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:205.5,y:29},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:208.1,y:30.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:210.8,y:32},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:213.5,y:33.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:216.1,y:35},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:218.8,y:36.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:221.5,y:38},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:224.2,y:39.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:226.9,y:41.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:229.5,y:42.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:232.2,y:44.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:234.9,y:45.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:237.5,y:47.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:240.2,y:48.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:242.9,y:50.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:245.5,y:51.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:248.2,y:53.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:250.9,y:54.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:253.5,y:56.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:256.2,y:57.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:258.9,y:59.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:261.5,y:60.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:264.2,y:62.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:266.9,y:63.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:269.6,y:65.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:272.2,y:66.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:274.9,y:68.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:277.6,y:69.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:280.2,y:71.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:282.9,y:72.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:285.6,y:74.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:288.2,y:75.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:290.9,y:77.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:293.6,y:78.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:296.2,y:80.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:298.9,y:81.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:301.6,y:83.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:304.3,y:84.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:307,y:86.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:309.6,y:87.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:312.3,y:89.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:315,y:90.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:317.6,y:92.4},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:320.3,y:93.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:323,y:95.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:325.6,y:96.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:328.3,y:98.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:331,y:99.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:333.6,y:101.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:336.3,y:102.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:339,y:104.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:341.6,y:106},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:344.4,y:107.5},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:347,y:109},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:349.7,y:110.5},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:352.4,y:112},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:355,y:113.5},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:357.7,y:115},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:360.4,y:116.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:363,y:118},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:365.7,y:119.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:368.4,y:121.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:371,y:122.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:373.7,y:124.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:376.4,y:125.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:379,y:127.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:381.7,y:128.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:384.4,y:130.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:387.1,y:131.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:389.7,y:133.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:392.4,y:134.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:395.1,y:136.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:397.7,y:137.7},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:400.4,y:139.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:403.1,y:140.7},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:405.7,y:142.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:408.4,y:143.7},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:411.1,y:145.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:413.7,y:146.7},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:416.4,y:148.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:419.1,y:149.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:421.7,y:151.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:424.4,y:152.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:427.1,y:154.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:429.8,y:155.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:432.5,y:157.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:435.1,y:158.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:437.8,y:160.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:440.5,y:161.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:443.1,y:163.4},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:445.8,y:164.9},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:448.5,y:166.4},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:451.1,y:167.9},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:453.8,y:169.4},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:456.5,y:170.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:459.1,y:172.4},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:461.8,y:173.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:464.5,y:175.4},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:467.2,y:176.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:469.8,y:178.5},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:472.5,y:180},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:475.2,y:181.5},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:477.8,y:183},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:480.5,y:184.5},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:483.2,y:186},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:485.8,y:187.5},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:488.5,y:189},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:491.2,y:190.5},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:493.8,y:192},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:496.5,y:193.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:499.2,y:195.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:501.9,y:196.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:504.5,y:198.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:507.2,y:199.6},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:509.9,y:201.1},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:512.6,y:202.6},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:515.2,y:204.1},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:517.9,y:205.6},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:520.6,y:207.1},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:523.2,y:208.6},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:525.9,y:210.1},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:528.6,y:211.6},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:531.2,y:213.1},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:533.9,y:214.7},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:536.6,y:216.2},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:539.2,y:217.7},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:541.9,y:219.2},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:544.6,y:220.7},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:547.2,y:222.2},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:550,y:223.7},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:552.6,y:225.2},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:555.3,y:226.7},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:558,y:228.2},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:560.6,y:229.8},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:563.3,y:231.3},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:566,y:232.8},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:568.6,y:234.3},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:571.3,y:235.8},0).wait(78).to({scaleX:1.36,scaleY:1.35,x:581.9,y:236.8,alpha:0.974},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:592.4,y:237.8,alpha:0.949},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:602.9,y:238.9,alpha:0.923},0).wait(1).to({scaleX:1.5,scaleY:1.49,x:613.5,y:239.9,alpha:0.897},0).wait(1).to({scaleX:1.55,scaleY:1.54,x:624.1,y:240.9,alpha:0.872},0).wait(1).to({scaleX:1.6,scaleY:1.59,x:634.7,y:241.9,alpha:0.846},0).wait(1).to({scaleX:1.65,scaleY:1.63,x:645.2,y:242.9,alpha:0.821},0).wait(1).to({scaleX:1.7,scaleY:1.68,x:655.7,y:243.9,alpha:0.795},0).wait(1).to({scaleX:1.75,scaleY:1.73,x:666.3,y:244.9,alpha:0.769},0).wait(1).to({scaleX:1.79,scaleY:1.77,x:676.9,y:245.9,alpha:0.744},0).wait(1).to({scaleX:1.84,scaleY:1.82,x:687.5,y:246.9,alpha:0.718},0).wait(1).to({scaleX:1.89,scaleY:1.87,x:698,y:247.9,alpha:0.692},0).wait(1).to({scaleX:1.94,scaleY:1.91,x:708.5,y:248.9,alpha:0.667},0).wait(1).to({scaleX:1.99,scaleY:1.96,x:719.1,y:250,alpha:0.641},0).wait(1).to({scaleX:2.04,scaleY:2.01,x:729.7,y:251,alpha:0.615},0).wait(1).to({scaleX:2.09,scaleY:2.05,x:740.2,y:252,alpha:0.59},0).wait(1).to({scaleX:2.14,scaleY:2.1,x:750.8,y:253,alpha:0.564},0).wait(1).to({scaleX:2.19,scaleY:2.15,x:761.3,y:254,alpha:0.538},0).wait(1).to({scaleX:2.23,scaleY:2.19,x:771.9,y:255,alpha:0.513},0).wait(1).to({scaleX:2.28,scaleY:2.24,x:782.5,y:256,alpha:0.487},0).wait(1).to({scaleX:2.33,scaleY:2.29,x:793,y:257,alpha:0.462},0).wait(1).to({scaleX:2.38,scaleY:2.33,x:803.6,y:258,alpha:0.436},0).wait(1).to({scaleX:2.43,scaleY:2.38,x:814.1,y:259,alpha:0.41},0).wait(1).to({scaleX:2.48,scaleY:2.43,x:824.7,y:260,alpha:0.385},0).wait(1).to({scaleX:2.53,scaleY:2.47,x:835.2,y:261,alpha:0.359},0).wait(1).to({scaleX:2.58,scaleY:2.52,x:845.8,y:262,alpha:0.333},0).wait(1).to({scaleX:2.62,scaleY:2.57,x:856.4,y:263.1,alpha:0.308},0).wait(1).to({scaleX:2.67,scaleY:2.61,x:866.9,y:264.1,alpha:0.282},0).wait(1).to({scaleX:2.72,scaleY:2.66,x:877.5,y:265.1,alpha:0.256},0).wait(1).to({scaleX:2.77,scaleY:2.71,x:888,y:266.1,alpha:0.231},0).wait(1).to({scaleX:2.82,scaleY:2.75,x:898.6,y:267.1,alpha:0.205},0).wait(1).to({scaleX:2.87,scaleY:2.8,x:909.2,y:268.1,alpha:0.179},0).wait(1).to({scaleX:2.92,scaleY:2.85,x:919.7,y:269.1,alpha:0.154},0).wait(1).to({scaleX:2.97,scaleY:2.89,x:930.2,y:270.1,alpha:0.128},0).wait(1).to({scaleX:3.01,scaleY:2.94,x:940.8,y:271.1,alpha:0.103},0).wait(1).to({scaleX:3.06,scaleY:2.99,x:951.4,y:272.1,alpha:0.077},0).wait(1).to({scaleX:3.11,scaleY:3.03,x:962,y:273.1,alpha:0.051},0).wait(1).to({scaleX:3.16,scaleY:3.08,x:972.5,y:274.1,alpha:0.026},0).wait(1).to({scaleX:3.21,scaleY:3.13,x:983,y:275.2,alpha:0},0).to({_off:true},1).wait(1091));

	// islands
	this.galapagos = new lib.galapagos();
	this.galapagos.parent = this;
	this.galapagos.setTransform(-284.7,340.3);
	this.galapagos._off = true;

	var maskedShapeInstanceList = [this.galapagos];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.galapagos).wait(1095).to({_off:false},0).wait(1).to({x:-276.4},0).wait(1).to({x:-268,y:340.4},0).wait(1).to({x:-259.7},0).wait(1).to({x:-251.3,y:340.5},0).wait(1).to({x:-243},0).wait(1).to({x:-234.7,y:340.6},0).wait(1).to({x:-226.3,y:340.7},0).wait(1).to({x:-218},0).wait(1).to({x:-209.7,y:340.8},0).wait(1).to({x:-201.3},0).wait(1).to({x:-193,y:340.9},0).wait(1).to({x:-184.6,y:341},0).wait(1).to({x:-176.3},0).wait(1).to({x:-168,y:341.1},0).wait(1).to({x:-159.6},0).wait(1).to({x:-151.3,y:341.2},0).wait(1).to({x:-143,y:341.3},0).wait(1).to({x:-134.6},0).wait(1).to({x:-126.3,y:341.4},0).wait(1).to({x:-117.9},0).wait(1).to({x:-109.6,y:341.5},0).wait(1).to({x:-101.3,y:341.6},0).wait(1).to({x:-92.9},0).wait(1).to({x:-84.6,y:341.7},0).wait(1).to({x:-76.3},0).wait(1).to({x:-67.9,y:341.8},0).wait(1).to({x:-59.6,y:341.9},0).wait(1).to({x:-51.2},0).wait(1).to({x:-42.9,y:342},0).wait(1).to({x:-34.6},0).wait(1).to({x:-26.2,y:342.1},0).wait(1).to({x:-17.9,y:342.2},0).wait(1).to({x:-9.6},0).wait(1).to({x:-1.2,y:342.3},0).wait(1).to({x:7.1},0).wait(1).to({x:15.5,y:342.4},0).wait(1).to({x:23.8,y:342.5},0).wait(1).to({x:32.1},0).wait(1).to({x:40.5,y:342.6},0).wait(1).to({x:48.8},0).wait(1).to({x:57.1,y:342.7},0).wait(1).to({x:65.5,y:342.8},0).wait(1).to({x:73.8},0).wait(1).to({x:82.2,y:342.9},0).wait(1).to({x:90.5},0).wait(1).to({x:98.8,y:343},0).wait(1).to({x:107.2},0).wait(1).to({x:115.5,y:343.1},0).wait(1).to({x:123.8,y:343.2},0).wait(1).to({x:132.2},0).wait(1).to({x:140.5,y:343.3},0).wait(1).to({x:148.9},0).wait(1).to({x:157.2,y:343.4},0).wait(1).to({x:165.5,y:343.5},0).wait(1).to({x:173.9},0).wait(1).to({x:182.2,y:343.6},0).wait(1).to({x:190.5},0).wait(1).to({x:198.9,y:343.7},0).wait(1).to({x:207.2,y:343.8},0).wait(1).to({x:215.6},0).wait(1).to({x:223.9,y:343.9},0).wait(1).to({x:232.2},0).wait(1).to({x:240.6,y:344},0).wait(1).to({x:248.9,y:344.1},0).wait(1).to({x:257.2},0).wait(1).to({x:265.6,y:344.2},0).wait(1).to({x:273.9},0).wait(1).to({x:282.3,y:344.3},0).wait(601));

	// main coast
	this.sa_coast = new lib.sacoast();
	this.sa_coast.parent = this;
	this.sa_coast.setTransform(510.6,379.5);
	this.sa_coast._off = true;

	var maskedShapeInstanceList = [this.sa_coast];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.sa_coast).wait(914).to({_off:false},0).wait(65).to({x:513.1},0).wait(1).to({x:515.7},0).wait(1).to({x:518.3},0).wait(1).to({x:520.9},0).wait(1).to({x:523.5},0).wait(1).to({x:526.1},0).wait(1).to({x:528.7},0).wait(1).to({x:531.3},0).wait(1).to({x:533.9},0).wait(1).to({x:536.4},0).wait(1).to({x:539},0).wait(1).to({x:541.6},0).wait(1).to({x:544.2},0).wait(1).to({x:546.8},0).wait(1).to({x:549.4},0).wait(1).to({x:552},0).wait(1).to({x:554.6},0).wait(1).to({x:557.2},0).wait(1).to({x:559.8},0).wait(1).to({x:562.3},0).wait(1).to({x:564.9},0).wait(1).to({x:567.5},0).wait(1).to({x:570.1},0).wait(1).to({x:572.7},0).wait(1).to({x:575.3},0).wait(1).to({x:577.9},0).wait(1).to({x:580.5},0).wait(1).to({x:583.1},0).wait(1).to({x:585.7},0).wait(1).to({x:588.2},0).wait(1).to({x:590.8},0).wait(1).to({x:593.4},0).wait(1).to({x:596},0).wait(1).to({x:598.6},0).wait(1).to({x:601.2},0).wait(1).to({x:603.8},0).wait(1).to({x:606.4},0).wait(1).to({x:609},0).wait(1).to({x:611.6},0).to({_off:true},1).wait(746));

	// sea
	this.islands_sea = new lib.islands_sea();
	this.islands_sea.parent = this;
	this.islands_sea.setTransform(275,330.4,0.989,0.989);
	this.islands_sea._off = true;

	var maskedShapeInstanceList = [this.islands_sea];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.islands_sea).wait(914).to({_off:false},0).wait(850));

	// sky
	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.lf(["#BBDDE7","#F5F9ED"],[0,1],-3,-189.3,0.6,34.8).s().p("EgrTAfqMAAAg/UMBWnAAAMAAAA/Ug");
	this.shape_431.setTransform(275,200,0.992,0.987);

	this.instance_14 = new lib.Symbol4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(275,200,1,1,0,0,0,275,200);

	var maskedShapeInstanceList = [this.shape_431,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_431}]},914).to({state:[{t:this.instance_14}]},849).wait(1));

	// world map
	this.instance_15 = new lib.Darwinvoyageplacementmap();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,-30,0.489,0.489);

	this.instance_16 = new lib.Symbol2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(366.8,190,1,1,0,0,0,366.8,220);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},55).to({state:[{t:this.instance_16}]},259).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[]},1).wait(1360));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(314).to({_off:false},0).wait(1).to({regX:335.4,scaleX:1.12,scaleY:1.12,x:352.3,y:189.6},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:369.2,y:189.2},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:386.1,y:188.8},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:402.9,y:188.4},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:419.8,y:188.1},0).wait(1).to({scaleX:1.69,scaleY:1.69,x:436.7,y:187.7},0).wait(1).to({scaleX:1.81,scaleY:1.81,x:453.6,y:187.3},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:470.5,y:186.9},0).wait(1).to({scaleX:2.04,scaleY:2.04,x:487.3,y:186.5},0).wait(1).to({scaleX:2.15,scaleY:2.15,x:504.2,y:186.1},0).wait(1).to({scaleX:2.27,scaleY:2.27,x:521.1,y:185.7},0).wait(1).to({scaleX:2.38,scaleY:2.38,x:538,y:185.3},0).wait(1).to({scaleX:2.5,scaleY:2.5,x:554.9,y:184.9},0).wait(1).to({scaleX:2.52,scaleY:2.52,x:559,y:184,alpha:0.987},0).wait(1).to({scaleX:2.54,scaleY:2.54,x:563.3,y:183.2,alpha:0.974},0).wait(1).to({scaleX:2.56,scaleY:2.56,x:567.5,y:182.4,alpha:0.961},0).wait(1).to({scaleX:2.58,scaleY:2.58,x:571.7,y:181.5,alpha:0.947},0).wait(1).to({scaleX:2.6,scaleY:2.6,x:575.9,y:180.7,alpha:0.934},0).wait(1).to({scaleX:2.63,scaleY:2.63,x:580.1,y:179.8,alpha:0.921},0).wait(1).to({scaleX:2.65,scaleY:2.65,x:584.4,y:179,alpha:0.908},0).wait(1).to({scaleX:2.67,scaleY:2.67,x:588.6,y:178.2,alpha:0.895},0).wait(1).to({scaleX:2.69,scaleY:2.69,x:592.8,y:177.3,alpha:0.882},0).wait(1).to({scaleX:2.71,scaleY:2.71,x:597,y:176.5,alpha:0.868},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:601.3,y:175.6,alpha:0.855},0).wait(1).to({scaleX:2.75,scaleY:2.75,x:605.4,y:174.8,alpha:0.842},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:609.6,y:174,alpha:0.829},0).wait(1).to({scaleX:2.8,scaleY:2.8,x:613.9,y:173.2,alpha:0.816},0).wait(1).to({scaleX:2.82,scaleY:2.82,x:618.1,y:172.3,alpha:0.803},0).wait(1).to({scaleX:2.84,scaleY:2.84,x:622.3,y:171.5,alpha:0.789},0).wait(1).to({scaleX:2.86,scaleY:2.86,x:626.5,y:170.6,alpha:0.776},0).wait(1).to({scaleX:2.88,scaleY:2.88,x:630.7,y:169.8,alpha:0.763},0).wait(1).to({scaleX:2.9,scaleY:2.9,x:635,y:169,alpha:0.75},0).wait(1).to({scaleX:2.92,scaleY:2.92,x:639.2,y:168.1,alpha:0.737},0).wait(1).to({scaleX:2.94,scaleY:2.94,x:643.4,y:167.3,alpha:0.724},0).wait(1).to({scaleX:2.97,scaleY:2.97,x:647.6,y:166.4,alpha:0.711},0).wait(1).to({scaleX:2.99,scaleY:2.99,x:651.9,y:165.6,alpha:0.697},0).wait(1).to({scaleX:3.01,scaleY:3.01,x:656,y:164.8,alpha:0.684},0).wait(1).to({scaleX:3.03,scaleY:3.03,x:660.3,y:163.9,alpha:0.671},0).wait(1).to({scaleX:3.05,scaleY:3.05,x:664.5,y:163.1,alpha:0.658},0).wait(1).to({scaleX:3.07,scaleY:3.07,x:668.7,y:162.2,alpha:0.645},0).wait(1).to({scaleX:3.09,scaleY:3.09,x:672.9,y:161.4,alpha:0.632},0).wait(1).to({scaleX:3.11,scaleY:3.11,x:677.1,y:160.6,alpha:0.618},0).wait(1).to({scaleX:3.14,scaleY:3.14,x:681.3,y:159.7,alpha:0.605},0).wait(1).to({scaleX:3.16,scaleY:3.16,x:685.6,y:158.9,alpha:0.592},0).wait(1).to({scaleX:3.18,scaleY:3.18,x:689.8,y:158,alpha:0.579},0).wait(1).to({scaleX:3.2,scaleY:3.2,x:694,y:157.2,alpha:0.566},0).wait(1).to({scaleX:3.22,scaleY:3.22,x:698.2,y:156.4,alpha:0.553},0).wait(1).to({scaleX:3.24,scaleY:3.24,x:702.5,y:155.5,alpha:0.539},0).wait(1).to({scaleX:3.26,scaleY:3.26,x:706.7,y:154.7,alpha:0.526},0).wait(1).to({scaleX:3.28,scaleY:3.28,x:710.9,y:153.8,alpha:0.513},0).wait(1).to({scaleX:3.31,scaleY:3.31,x:715.1,y:153,alpha:0.5},0).wait(1).to({scaleX:3.33,scaleY:3.33,x:719.3,y:152.2,alpha:0.487},0).wait(1).to({scaleX:3.35,scaleY:3.35,x:723.5,y:151.3,alpha:0.474},0).wait(1).to({scaleX:3.37,scaleY:3.37,x:727.7,y:150.5,alpha:0.461},0).wait(1).to({scaleX:3.39,scaleY:3.39,x:732,y:149.6,alpha:0.447},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:736.2,y:148.8,alpha:0.434},0).wait(1).to({scaleX:3.43,scaleY:3.43,x:740.4,y:148,alpha:0.421},0).wait(1).to({scaleX:3.45,scaleY:3.45,x:744.6,y:147.2,alpha:0.408},0).wait(1).to({scaleX:3.48,scaleY:3.48,x:748.8,y:146.3,alpha:0.395},0).wait(1).to({scaleX:3.5,scaleY:3.5,x:753.1,y:145.5,alpha:0.382},0).wait(1).to({scaleX:3.52,scaleY:3.52,x:757.3,y:144.6,alpha:0.368},0).wait(1).to({scaleX:3.54,scaleY:3.54,x:761.5,y:143.8,alpha:0.355},0).wait(1).to({scaleX:3.56,scaleY:3.56,x:765.7,y:143,alpha:0.342},0).wait(1).to({scaleX:3.58,scaleY:3.58,x:769.9,y:142.1,alpha:0.329},0).wait(1).to({scaleX:3.6,scaleY:3.6,x:774.1,y:141.3,alpha:0.316},0).wait(1).to({scaleX:3.62,scaleY:3.62,x:778.3,y:140.4,alpha:0.303},0).wait(1).to({scaleX:3.65,scaleY:3.65,x:782.6,y:139.6,alpha:0.289},0).wait(1).to({scaleX:3.67,scaleY:3.67,x:786.8,y:138.8,alpha:0.276},0).wait(1).to({scaleX:3.69,scaleY:3.69,x:791,y:137.9,alpha:0.263},0).wait(1).to({scaleX:3.71,scaleY:3.71,x:795.2,y:137.1,alpha:0.25},0).wait(1).to({scaleX:3.73,scaleY:3.73,x:799.4,y:136.2,alpha:0.237},0).wait(1).to({scaleX:3.75,scaleY:3.75,x:803.7,y:135.4,alpha:0.224},0).wait(1).to({scaleX:3.77,scaleY:3.77,x:807.9,y:134.6,alpha:0.211},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:812.1,y:133.7,alpha:0.197},0).wait(1).to({scaleX:3.82,scaleY:3.82,x:816.3,y:132.9,alpha:0.184},0).wait(1).to({scaleX:3.84,scaleY:3.84,x:820.5,y:132,alpha:0.171},0).wait(1).to({scaleX:3.86,scaleY:3.86,x:824.7,y:131.2,alpha:0.158},0).wait(1).to({scaleX:3.88,scaleY:3.88,x:828.9,y:130.4,alpha:0.145},0).wait(1).to({scaleX:3.9,scaleY:3.9,x:833.2,y:129.5,alpha:0.132},0).wait(1).to({scaleX:3.92,scaleY:3.92,x:837.4,y:128.7,alpha:0.118},0).wait(1).to({scaleX:3.94,scaleY:3.94,x:841.6,y:127.8,alpha:0.105},0).wait(1).to({scaleX:3.96,scaleY:3.96,x:845.8,y:127,alpha:0.092},0).wait(1).to({scaleX:3.99,scaleY:3.99,x:850,y:126.2,alpha:0.079},0).wait(1).to({scaleX:4.01,scaleY:4.01,x:854.3,y:125.3,alpha:0.066},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:858.5,y:124.5,alpha:0.053},0).wait(1).to({scaleX:4.05,scaleY:4.05,x:862.7,y:123.7,alpha:0.039},0).wait(1).to({scaleX:4.07,scaleY:4.07,x:866.9,y:122.8,alpha:0.026},0).wait(1).to({scaleX:4.09,scaleY:4.09,x:871.1,y:122,alpha:0.013},0).wait(1).to({scaleX:4.11,scaleY:4.11,x:875.3,y:121.2,alpha:0},0).to({_off:true},1).wait(1360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,199,552,402);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/galapagos_finches_canvas_atlas_.png?1483646195167", id:"galapagos_finches_canvas_atlas_"},
		{src:"sounds/galap_p1_titlewav.mp3?1483646196295", id:"galap_p1_titlewav"},
		{src:"sounds/galap_p2_in1831wav.mp3?1483646196295", id:"galap_p2_in1831wav"},
		{src:"sounds/galap_p2_oneofwav.mp3?1483646196295", id:"galap_p2_oneofwav"},
		{src:"sounds/galap_p3_darwinnotedwav.mp3?1483646196295", id:"galap_p3_darwinnotedwav"},
		{src:"sounds/galap_p4_darwinhypwav.mp3?1483646196295", id:"galap_p4_darwinhypwav"},
		{src:"sounds/galap_p5_thefinceswav.mp3?1483646196295", id:"galap_p5_thefinceswav"},
		{src:"sounds/galap_p6_finchesadaptwav.mp3?1483646196295", id:"galap_p6_finchesadaptwav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;