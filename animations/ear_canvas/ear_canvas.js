(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"ear_canvas_atlas_", frames: [[0,0,600,1196],[208,1291,43,43],[163,1283,43,43],[118,1283,43,43],[118,1328,43,43],[118,1198,97,83],[0,1198,116,166],[217,1198,84,91]]}
];


// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["ear_canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["ear_canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["ear_canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.spriteSheet = ss["ear_canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.spriteSheet = ss["ear_canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_6_0 = function() {
	this.spriteSheet = ss["ear_canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_7_0 = function() {
	this.spriteSheet = ss["ear_canvas_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.spriteSheet = ss["ear_canvas_atlas_"];
	this.gotoAndStop(7);
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


(lib.whiteblock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnDAXcMAAAgu3MBOHAAAMAAAAu3g");
	this.shape.setTransform(250,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,300);


(lib.soundwaves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6D5F1").s().p("ABTWAQjCh0iXjUQiXjUhTkRQhVkcAAk3QAAk2BVkcQBTkSCXjTQCXjUDCh0QDLh4DeABQAogBAiAEQjRAUi9B/Qi2B7iLDRQiLDQhNEJQhPESABEpQgBEqBPERQBNEJCLDRQCLDQC2B8QC9B/DRAUQgiAEgogBQjeABjLh4g");
	this.shape.setTransform(408.5,152.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6D5F1").s().p("ABTWAQjDh0iWjUQiXjUhTkRQhVkcgBk3QABk2BVkcQBTkSCXjTQCWjUDDh0QDLh4DdABQAogBAkAEQjSAUi9B/Qi2B7iKDRQiNDQhLEJQhPESAAEpQAAEqBPERQBLEJCNDRQCKDQC2B8QC9B/DSAUQgkAEgogBQjdABjLh4g");
	this.shape_1.setTransform(321,152.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6D5F1").s().p("ABUWAQjDh0iXjUQiXjUhTkRQhWkcABk3QgBk2BWkcQBTkSCXjTQCXjUDDh0QDKh4DeABQAogBAiAEQjRAUi8B/Qi3B7iLDRQiLDQhNEJQhPESAAEpQAAEqBPERQBNEJCLDRQCLDQC3B8QC8B/DRAUQgiAEgogBQjeABjKh4g");
	this.shape_2.setTransform(233.4,152.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6D5F1").s().p("ABTWAQjCh0iXjUQiXjUhTkRQhVkcAAk3QAAk2BVkcQBTkSCXjTQCXjUDCh0QDLh4DdABQAogBAjAEQjRAUi9B/Qi2B7iLDRQiMDQhMEJQhPESAAEpQAAEqBPERQBMEJCMDRQCLDQC2B8QC9B/DRAUQgjAEgogBQjdABjLh4g");
	this.shape_3.setTransform(145.8,152.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B6D5F1").s().p("ABTWAQjCh0iXjUQiXjUhTkRQhVkcgBk3QABk2BVkcQBTkSCXjTQCXjUDCh0QDLh4DdABQAogBAkAEQjSAUi8B/Qi3B7iKDRQiNDRhLEIQhPESAAEpQAAEqBPERQBLEJCNDRQCKDQC3B8QC8B/DSAUQgkAEgogBQjdABjLh4g");
	this.shape_4.setTransform(58.3,152.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.soundwaves, new cjs.Rectangle(0,0,466.8,305.5), null);


(lib.soundwavesingle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6D5F1").s().p("ABTWAQjCh0iXjUQiXjUhTkRQhVkcgBk3QABk2BVkcQBTkSCXjTQCXjUDCh0QDLh4DdABQAogBAkAEQjSAUi8B/Qi3B7iKDRQiNDRhLEIQhPESAAEpQAAEqBPERQBLEJCNDRQCKDQC3B8QC8B/DSAUQgkAEgogBQjdABjLh4g");
	this.shape.setTransform(6,15.7,0.103,0.103,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.soundwavesingle, new cjs.Rectangle(0,0,12,31.5), null);


(lib.innerearMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1EAA5").s().p("Ag1AZIBBg0QAagQAWgKQgyAhgWAWIgvA0g");
	this.shape.setTransform(-7.1,-38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFDDE","#F1EAA5","#EEE6A2","#DFD597","#CBBE85","#B1A270","#908058"],[0,0.353,0.494,0.624,0.753,0.878,1],-1.9,-4.1,0,-1.9,-4.1,21.7).s().p("AhcD9IgcgXQgOgRgNgaQgagyAKgqIASg/QAEgTgGgVQgFgVgJgYIABgBQANghgEgRIgCgIIAAgDQgMgmgPgKIgPgHIABgDQACgGAMgPQAJAKAIAEQAKAEAjgOQAXgGADgNQABgIgIgUIgIgSIgPgGIAOgEIAFgBIAfAbIAPAOIAOAYQAIAVARAQQAJAKALAHQAfAXA3AAQAOgBAHgJQADgFABgHIAEAIQAHAKARAGQAOAEAGgDQAEgCAFgDQASAaAHAaIABADQgLAdgEAbQgDAYACAbIgjA8IgBgEQhBA5gyASQgfALhAACIg6AAIATAoQAOAXAVAYQgKgFgMgJg");
	this.shape_1.setTransform(-21.3,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A08D60").s().p("AAlBNIgIgHIAFABIADACQAKAEAUgGQAVgEACgLQADgQgUgUIgbgLIgIgEIgCgBQgegMgRgOQgTgNgVgWIgSgTIgKAKQgKANADAKQAGAWA/AtIAIAFIAEAEIAFAHIgQgNQhGgtgEgXQgCgKAKgPIAMgMIA4AzQAQAMAmAPQAiAPADADQARAWgDARQgBAMgXAHQgMADgIAAQgGAAgEgCg");
	this.shape_2.setTransform(-40.8,-22.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2C1A3").s().p("AAjA/QgagXgegZQgvgmgHgUQgCgHACgHIADgHIABABIgBAGQgCAHADAGQAJAVApAiQAzAsAGADQAKAFAMgCQAOAAABgGQAFgIgagQQgegGgcgVQgTgMgYgdIgQgUIAOARQAZAbARAOQAdAUAjAIQAYAQgDAMQgBAHgQABIgHAAQgKAAgHgCg");
	this.shape_3.setTransform(-40.3,-23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B6A06C").s().p("AB7B7QgXgMgPgaQgLgcgJgMQgKgNgYgRIgvgkQg9g0gqgHQgRgDgWAAQgOABgHgEQgTgOAGgUQAEgNAagDQAXgDAxATQAbAKB8BeIAVAKQAaAMASANQAhAaAXAhQASAagHAWQgHANgJgCIgFABQgSAAgfgPgAhqhWQAYAEAaASQANAIAkAeQANAMAcASQAUAMALAPQAGAHAVAkQAQAbAUANQAXAOAJACQAGABAFgBQAJABAJgOQADgRgQgZQgUgegegVQgSgNgagOIgXgLIhghHQgmgbgPgGQgrgRgWADQgWAAgEAOQgGAQAZAKQAGADAMAAIAKAAQAOAAAOADg");
	this.shape_4.setTransform(-31.3,-24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6AE7C").s().p("ACdCDQgJgBgXgOQgUgNgQgcQgVgkgGgHQgLgOgUgNQgcgSgNgLQgkgegNgJQgagRgYgFQgTgEgTACQgMAAgGgDQgZgKAGgQQAEgOAWAAQAWgDArARQAPAFAmAcQgmgZgPgHQghgOgcAAQgSAAgGANQgGAOAaAKQAEACAPAAQARgCAUADQAXAGAaARIAvAoQAPANAXANQARAIANAQQAHAHAWAnQARAcAUANQATAMARAGQAKABAJgQQADgQgQgYQgQgagfgVIhDgoIAXAMQAaANASANQAeAWAUAeQAQAYgDARQgJAPgJgCIgFABIgGgBg");
	this.shape_5.setTransform(-31,-24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A49162").s().p("AB6CCQgagNgNgXQgJgZgHgLQgNgRhLg9Qg4gvg1gKQgQgDgXACQgOAAgJgGQgRgRAKgXQADgMAKgDIAUgDQALgCAOACIALACIABAAIAEABQASADAWAJQALAFAmAaIBkBLIAWAKQAaAMARANQAeAVAgAtQAUAbgMAZQgEAKgJABIgKABQgWAAgggOgAh7hQQA0AKA2AxQBHA3ANARQAJAKALAcQANAYAXAMQAhAPAcAAQAIgBAGgMQAKgXgUgbQgYgkgjgaQgRgNgagLIgWgLQh+hggXgIQg0gWgaAGQgaADgGAOQgFAWARAOQAHAGAOAAIAPgBQAOAAAKACg");
	this.shape_6.setTransform(-31.6,-23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#746539").s().p("ABwCFQgLgHgJgKIANALQAUAQAdAEIgmgSQgIgGgIgIQALALAPAGQAzAVAVgHQAHgDAFgIQANgagWgdQgng0gZgSQgSgMgagMIgVgIIhlhMQgngcgLgEQgPgHgXgEIgEgBIgBAAIgMgCQgUgDgJACIgVADQgKADgFAMQgFAOAAAHIAAgUIgMAkQAEAbAKAMIAkAoIgLgRQgNgRAAgGQAAgGAJgEIAHgDQgWgCgEgNQgCgGgCgSQACAJAJAKQAKAIAPAAQAZgBANABQA+AMAyAsQBOBDANATQAGAIAJAZIAHALIgEgGIgTghQgDgIgYgaIhJg7IgagPIAQAOQgigZgmgQQgMgGgPAAIgKACIAQAPQATASARANQAaARA6AYIAOAGIAHASQAJAUgCAIQgDANgWAGQgiAOgKgEQgIgEgKgLIgEgFIAHgKIAMAKIABAAIAIAHQAKAEAUgFQAWgHABgMQADgRgQgWQgDgDgigPQgmgPgRgMIg4gzIgMAMQgKAPACAKQAEAXBGAtIAQAMIAOASIgHAJIgKgPQgHgKgigaQgogdgPgOQgvgtAIgmQAGgWAMgKQAIgJAWgIQASgIAcAFQAaAEAUAKQAUAKA+ArIAyAlQASANAFAGIAVAKQA4AjACgBIAIAGIAOANIALAKIADADIgBABIAQAUQAOAWABAKQACATAEALIgBAFQAAAHgDAFQgHAJgPABQg2AAgggXgAAmAoIAMALIADAEIgPgPg");
	this.shape_7.setTransform(-32.4,-23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#72593C").s().p("Ag4CUIAGgMIAEgFIAHgJIgOgSIgFgGIgEgEIgZgWIAlAaQAJAHAOAUQAJAEAWAFQgNADgJgBIgFgBIgBAAIgMgKIgHAKIgBADIgGANgABQgJIgEgEQAHgZgFgOIAAgBQgEgZgXgUQgUgRgggQIg7gRIgGgCIAZACQAdAEARAKQAsAWAQAUIACAEQARAaADAQQACAKgCAIIgBAEIgDAJQgBAHgBAAIgBgBg");
	this.shape_8.setTransform(-35.5,-29.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0EBB8").s().p("AGAGVIgagDIAggDQAigEAOgGIBIgoIgdAZQgYASgbAJQgNAEgWAAIgLAAgAlSACQgYgVgQgGQgRgDgLgEQgTgHgTgWIhBhSIAjAkQAnAnATAMQAhASBBAQQAYAMgIAMQgDAHgNAAQgLAAgJgHgAkmkDQgwgBgFgIQgCgFABgCIABAAIAKgDQAMgBANADQAlANAeAXIAjAcQhFgogPgHgAg7j/QAAgEAKAAQAFAAAFACIgCASQgBAJgEABIgKACIgBAAQgJAAAHgcgAhpkjQgcgjgOgNQgnghgdgPIgkgRIAbAHQAhAKAbATQA4AkAaAvQAJARgJAGIAAAAQgDAAgUgdg");
	this.shape_9.setTransform(-10.7,-8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFCD1").s().p("AESBpQgfgbguAZQA4gwAoAqQAnAogrA3QATg7gigcgAhkAGIADgCIgCAFIgBgDgAj6hwQgJgGgOgSIgTgcIgTgbIAXAJQAZANALANQAgAkgEAMQgBAEgFAAQgHAAgNgIg");
	this.shape_10.setTransform(8.3,-3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#908058").s().p("AAJHAQingliEhvQgkgfgagdQgWgYgOgWIgSgoIA5AAQBBgCAfgLQAzgSBAg5IABAEIARA0QAYA/AgAeQBMBUBPAVQBoAaBJgYQBggeA1g9QAggiAXgwQAXgsAEggQAMhmgjg7QglhHhcgzQhTgwhVAXQhgAeg3BbQgxBVAKBEQAEAxAsA4QAzBGBMANQBEANBCgnQAegTAPgPQASgTAPgdQAPgfgCgwQgFgwgXgbQgXgagfgQQgggRgdAAQgfACgeAPQgjASgQAbQghAwAgAiQAbAnAagWQAOgLgBgRQgCgSgOgBQgNgBAAgPIACgNIAPgOQAVgQAVgHQAagLAdAIQAcAHAQAVQAUAfAGANQAKAbgHAdQgOBBhIAeQhWAhg2gdQglgUgggjQgjgmgFghQgGgkAMgtQANgxAbgeQBHhSBKgCQArgBAwARQAuARAiAfQAjAeAQAeQAPAdAGAqQAGAvgMAxQgOA6gkApQgiAtg6AYQg2AZhBAAQg6ABhDgiQg4gcgjglQghgggXhFQgPgsgEgnQgCgaAEgZQAEgcAKgcIACgFQAKgcAPgbQAcgyAeghQAcggAtgeQA3gjAvgIQBXgQCAA3QA1AWA1A2QAnAoAZArQATAgAMAwQAKAugCAgQgDBegsBIQghAygWAaQgXAagpAlQhPBGhZAhQgzAVhDAIQgoAGgiAAQgiAAgdgGgAj1CNQggALgyAJIgrAGIAPAlQAdAvBCA0QCEBnCVAfQA2ALBKgKQBAgJA1gUQBYgfBOhEQApglAWgbQATgXAhg0QAcgrAKguQAIgdABgrQABgjgKgqQgKgvgSgeQhFhzhfgqQiAg4hYAQQgyAJg1AhQgtAcgbAgQhSBdgNBoQgJA7AaBJQAXBDAjAiQAiAkA2AaQA/AhA5gCQBAgBA4gYQA2gZAjgqQAhgoANg4QALgxgEgvQgGgqgRgbQgPgdgigeQhIhAhgADQhFAChJBSQgaAegNAvQgKAqAGAjQAEAfAhAkQAdAeAoAWQA1AdBPgeQBGgcAQg+QAHgegIgYQgFgNgUgcQgOgVgdgHQgagIgZAJQgVAJgUANIgOAMIgCAOQAAAOANACQAPABABATQACAUgQALQgdAWghgkQghgrAgg0QAVghAkgSQAggPAhABQBCADA0A7QAXAbAEAzQAEA0gQAeQgYAxg3AjQhFAshGgPQhJgQg4hDQgcgjgJgVQgKgUgEggQgNhKAxhWQA9hjBhgdQBYgbBcA1QBYAxAsBPQAUAnAFAvQABAYgDAzQgEAhgaAxQgZAwghAlQg4A+hnAiQhPAXhigcQhNgThOhVQgggfgag7IgSg0QgzAsgzASgAkKiuQgPgGgLgLIgCgCIgBgCIgCgBIgHgLQgJgZgGgIQgNgThPhEQgygsg+gMQgNgBgZABQgPAAgKgIQgJgKgCgJIAAgCIAAgBQAAgIAFgNQAFgMAKgDIAVgDQAJgCAUADQgOgCgKADIgVADQgKADgCALQgLAXASARQAIAGAPAAQAXgBAQACQA1ALA4AvQBMA+ANARQAHAKAJAaQAMAXAaANQApARAYgEQAJgCAEgKQALgYgUgbQgfgtgegWQgSgMgagNIgVgKIAVAIQAaAMASANQAZASAnA0QAWAdgNAaQgFAIgHADQgFACgHAAQgWAAgmgQgAnXm0QgWgIgRgEQAXAEAPAHQALAEAnAcQgmgagLgFg");
	this.shape_11.setTransform(6.9,7.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AA9666").s().p("AjCDlQgmgWhAg8QgqgngTgcQgOgWgKgeQgNgqAOg7QAPg0A8g0QA3gsA8gMQBGgOBCAaQBRAhAtA1QAYAbAJAZIB5hVQAbgTAlgOQAkgOATABQAdAAANATQAFAHgNAeQgNAhgbAhQgYAdgjBBQgfBBgGAHQgGAHAAAYQgDAcgEALQgMAegIADQgXAFgJgPQgHgIgBgMQgFgTgBgCQgDgLgKgOIgKgLIAvgsQAGgHAKgcQAKggAJgQQALgTAog0IAngwQhJAVgyA3IguAyQgeAggQAHQgMAGgbgMQgagKgHgMQgGgXAAgRQAAgigqgmQg5gzhFgDQhVgDg4A8Qg3A4AHBKQAFA0BVA9QAPANAtANQAuAPAEADQAPALALAdIgHAhQgWAHgSAAQgVAAgPgKgAi+jkQg1AKg6ArQgXARgXAeQgYAggGAYQgQA4APAqQAIAfASAXQASAZAqApQA1AyAxAbQAaAQArgNIAHgdQgLgagPgKQgFgEgtgNQgtgNgPgLQgugmgKgKQgjgigEgjQgHhPA7g8QA8g9BWADQBFACA8A4QAsAoAAAhQAAARAJAaQAKALARAGQAUAGAQgGQAUgKAbgdQAmgpAEgDQA4g8BWgZIgrA3QguA5gMAUQgIAQgMAjQgKAegFAHIgxArIAIAJQAJAMADAKQADAFADAQQACANAIAJQAKAOASgHQAIgDALgdQAEgLAAgaQAAgYAGgJQAGgHAdg9QAfg+AZgbQAcghASgjQAPgfgFgJQgPgRgYgCQgTAAgkAPQgiAOgdATIh6BYQgNgfgXgbQgyg3hLgcQgpgQgqAAQgZAAgaAGgABLCfQgXgMgNgYQgMgcgIgKQgNgRhHg4Qg3gwgzgKQgQgDgXACQgOAAgIgGQgRgOAGgWQAGgOAZgDQAagGA0AWQAXAIB/BfIAVALQAaAMASANQAiAaAYAkQAVAbgLAXQgFAMgJABQgbAAghgPgAikgxQAqAHA9AzIAwAlQAXASAKANQAJALALAdQAPAaAXALQAkARASgCQAJABAHgNQAHgVgSgaQgXghghgaQgSgNgagNIgVgKQh8hegbgKQgxgTgXADQgaADgEANQgGAUATAOQAHAFAOgCQAWAAARADgAhmB2IgDgBQAJAAAOgDQgXgEgJgFQgOgUgJgHIglgaIAZAXIgIgGQg/gtgGgWQgDgJAKgNIAKgKIASATQAVAUATANQASAOAeAOIACABIAIADIAbALQAUAUgDAQQgCAMgVAEQgMADgIAAQgGAAgEgCgAjUgRQgEAIACAIQAFAQA1ArQAfAYAaAXQAIAFAQgCQARgBACgJQAEgOgYgQIgcgLQgYgJgRgNQgTgNgXgZIgUgXg");
	this.shape_12.setTransform(-26.8,-27.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9D8B5F").s().p("AjFDpQgkgXhDg+QgogmgUgfQgPgXgIgeQgPguARg4QAPg3A7gyQAygrBCgNQBOgOBAAbQBRAkArAyQAZAbAHAVIB0hUQAcgSAmgPQAmgNASAAQAdACAOAUQAGAIgIAaQgKAggaAhQgZAdglBGIgoBKQgFAHgBAaQgDAbgEAMQgMAfgLADQgWAJgNgUQgHgJgBgMIgGgVQgCgKgLgRIgMgPIAugrQAGgHAKgaQAKgdAJgQQALgUAkguIAjgqQg/AUgtAwIgyA4QghAkgMAFQgIAEgjgRQgfgRgGgIIgDgnQADgegsgoQg5g0hCAAQgjgCglAQQgnAPgYAcQgxA2AGBDQACAxBRA+QAOAKAtAQQAuAQAGADQAOALANAeIgJAqQgUAEgSAAQgZAAgTgKgAi9jqQg9ALg2AtQg9A0gOAzQgOA7AMAqQALAeAOAWQATAdApAnQBBA8AlAVQAdASAvgPIAIghQgMgcgOgMQgFgDgugOQgsgNgQgNQhVg+gEg0QgHhJA2g4QA4g9BVADQBFADA6A0QAqAlAAAjQAAARAFAXQAIALAZALQAcALALgFQAQgIAeggIAugyQAyg2BKgWIgnAxQgoA0gMASQgIAQgKAgQgKAdgGAHIgwArIAKAMQAKAOADAKQACADAEATQACALAHAJQAIAOAXgEQAJgDALgeQAFgMADgbQAAgZAFgHQAGgHAghBQAihBAZgcQAbghANghQANgfgGgHQgNgSgdAAQgSgCgkAOQgmAPgbATIh5BUQgIgYgZgbQgsg2hRghQgrgQgsAAQgYAAgZAFg");
	this.shape_13.setTransform(-26.8,-27);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#867752").s().p("AjIDsQgWgNgUgRQgFgEg6g2QgqgmgSgfQgPgXgIgfQgMgwAQg3QAOgzA6g3QAygsBHgPQBTgOA+AdQBMAiAwA1QAYAbAGAQIBxhQQAcgUAogNQAkgNAUABQAdAAAPAWQAIAKgFAXQgHAegaAgQgXAegoBJQglBFgGAIQgGAIgBAaQgDAdgEAKQgPAhgLADQgGADgMgDQgOgEgHgLQgGgIgBgMIgFgUQgBgKgOgSIgNgSIAugrQALgNAWg9QALgUAggoIAdgkQgzATgnAoIg2A8QgkApgHAEQgGADgogYQgngWgEgGIABglQAAgcgfghQgQgUgsgXQgSgKgdgEIgZgBIAGABIgEAAQghgBgkAPQgnASgXAZQgrA2AEA7QACAyBNA6QAMAKAuAQQAvAPAGAFQAOALAMAgIgHAvQgWAGgSAAQgcAAgUgNgAi/jvQhDANgyAsQg7AygOA2QgRA4AOAvQAJAeAOAXQAUAeAoAnQBEA+AkAXQAeARA0gMIAIgpQgNgegOgMQgGgDgugQQgsgPgPgKQhQg+gDgxQgGhEAxg1QAZgdAmgOQAmgQAiABQBCAAA6A0QArAogDAeIADAnQAGAJAgAQQAiARAJgEQALgEAhglIAzg4QAsgvA/gUIgiAqQgkAtgMAVQgIAPgKAeQgKAZgGAIIguArIALAOQAMARABAKIAGAWQACALAHAJQANAUAVgIQAMgDALggQAFgLACgcQACgaAEgHIAohJQAmhHAYgdQAaghAKgfQAJgagGgJQgOgUgdgBQgTAAglANQgnAOgbATIh1BTQgHgUgYgbQgrgzhRgkQgrgSgwAAQgZAAgaAFg");
	this.shape_14.setTransform(-26.8,-26.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#736338").s().p("ADQHDQhPgWhNhTQgggegXg/IgRg1IAjg7QADAnAPAsQAXBFAhAfQAkAmA4AbQBDAiA6gBQBBAAA2gYQA6gZAigsQAkgqAOg5QAMgxgGgwQgGgrgPgdQgQgegjgeQgigdgugRQgwgSgrACQhKABhHBRQgbAegNAxQgMAuAGAkQAFAhAjAnQAgAiAlAVQA2AcBWghQBIgeAOhBQAHgcgKgcQgGgNgUgfQgQgWgcgHQgdgHgaAKQgVAHgVAQIgPAOIgCAPQAAAOANACQAOABACARQABARgOAMQgaAVgbgmQgggjAhgxQAQgbAjgRQAegQAfgBQAdAAAgARQAfAQAXAaQAXAbAFAxQACAvgPAgQgPAcgSATQgPAQgeATQhCAmhEgNQhMgNgzhGQgtg4gEgxQgKhFAyhUQA3haBggeQBVgXBTAvQBcA0AlBFQAjA7gMBoQgEAfgXAtQgXAvggAjQg1A8hgAeQgkAMgqAAQgtAAg2gNgAl1A4QgfAAgegUQgQgKgNgNIgDgDIgGgGQgfgfgfgcQhAg+gQhBQgLgzARg4QAQg3A1g1QAzgxBLgNQBWgOBEAfQBNAmAwA1QAXAbABAGIBthMQAbgTApgNQAmgNAUACQAfAAAQAXQAaAmglAzQgXAfguBPQgqBMgGAIQgFAIgFAaQgFAggDAKQgLAYgLAJQgEAEgDABQgGADgPgEQgRgGgHgKIgEgHIABgGQgEgLgCgTQgBgKgOgVQAOASABAKIAFAUQABAMAGAIQAHALAOAEQAMADAGgDQAKgDAPghQAEgKADgdQABgaAGgIQAGgIAlhGQAohJAXgeQAaggAHgeQAFgXgIgKQgPgWgdAAQgUgBgkANQgoANgcAUIhwBQQgGgQgYgbQgwg1hNgiQg+gdhTAOQhHAPgyAsQg6A3gOAzQgQA3AMAxQAIAfAPAXQASAfAqAmQA6A2AFAEQAUAQAWANQAhAWA3gPIAHguQgMgggOgLQgGgFgvgPQgugQgMgKQhNg6gCgzQgEg7Arg2QAXgZAngSQAkgPAhABIAEAAIA7ARQAhAQAUARQAXAUAEAaQgKgTgXgSQgUgRgegNQgigNgfAAQgeAAgiARQgkATgRAXQgTAagGARQgHAUAAAdQAAAbAbAkQAWAdAUANQAJAHAvASIAoARIAPAIQAOAKANAlIgBAEIACAHQAFARgNAhIgBAAQgaAGgPAAIgGAAgAiqgwIgNgLQgRgRgJgVIgNgXIgDgEIgMgLIgfgaIgugnIgQgNIAaAOIBKA8QAYAaADAJIATAhIAEAFIACACIABABIACADQAIAIAIAFIAmATQgdgEgUgQgAhYiBIABAAIgDgDIAqgrQAKgMAXg0QAQgeAjgqQgcAOgbAcIhgByIgIgHQgCABg4gjIgVgKQgFgGgSgNQAFgQAAgOIABgEQACgJgCgKQgDgQgRgaIgCgDQAgAhAAAcIgBAlQAEAGAnAXQAoAYAGgDQAHgEAkgqIA2g8QAmgoAzgTIgdAkQggAogKAUQgWA+gLANIguArIANASgAnejkQgKgLgEgcIAMgjIAAAUIAAAAIAAADQACARACAHQAEANAWABIgHADQgJAFAAAFQAAAGANARIALASg");
	this.shape_15.setTransform(-4.8,-6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2D090").s().p("AByHtQh5gZh8hVQhEgugXgmIgIgfIAOgSQAWgWAfgLQAzgQAVgUIAXAsQAdAzAeAeQBYBZBEATQBnAZBMgUQAtgLAygdQA0geAfgjQAkgpAcgwQAfg4ACgkQAEg4gBgXQgDgvgWgnQgyhZhUgwQg1gcglgIQg3gNg9ATQhAAUgpAoQggAdgiA6QgxBRARBdQAHAiAKASQAJAOAhAqQA3BGBNANQAjAHAugLQApgKAagSQA6gpAXgtQAPghgEg5QgGg7gXgaQgzhAhCgFQhagJgzBRQgaApAHAhQAEAWAWAXQAkAkAngZQASgMAAgZQgBgXgQgBQgLgCAAgNIABgOIALgJQAQgKAWgIQA2gTAfAtQARAXAEAPQAEATgHAeQgNA7hHAUQgiAKgVACQgjAAgegQQhagxgHg3QgPhaAyg3QBIhRBEgBQBdgDBBA7QAkAhAOAVQAPAaAFApQAGAwgKAvQgMA3geAhQhNBah6ACQhvABhYhYQgigigXg8QgahHAHhCQALhfBQhbQBIhSBjgPQA4gKA4ANQApAKBAAeQBZApA/BvQAlA8gDBUQAAAugFAaQgKAogdArIgxBIQgUAbgnAjQgrAngeARQggATg4AVQhbAehKAAQggAAgcgFgAFJE6QgOAGgjAEIgfADIAaADQAeACAQgGQAbgJAYgSIAdgZgAFjBKQAhAcgTA7QArg3gmgoQgpgqg4AwQAWgMATAAQAUAAARAOgAnJgvQgygcgzgwQgpgogTgaQgQgVgKgdQgQgtAQg2QAGgWAYghQAXgeAXgQQA9gpAvgMQA/gOBCAYQBOAaAyA4QAZAbANAjIB+hbQBLgyAnADQAYABANASQAGAHgUAiQgWAkgcAhQgZAbgdA9QgaA5gGAHQgFAIABAXQAAAZgEAMQgKAbgGADIgMAEQgHAAgHgKQgHgIgDgNIgGgXQgEgKgHgJIgHgGIAygpQAGgHAKghQANgpAHgOQALgTAyhAIAwg9QgYAHggAPQg+AegnAqIgmAoQgZAYgYAMQgkARgTgYQgLgaAAgRQAAgigugrQg/g7hFgBQhYgDhBA8Qg/A+AHBZQAFAjAjAkIA9AvQASAOAsALQArALAFAEQAPAKALAZIgHAVQgUAHgQAAQgQAAgLgHgAopiIQASAWAUAHQAKAEASADQAQAGAYAWQAJAHALAAQANAAADgHQAHgNgXgMQhBgQghgSQgUgMgngnIgigkgAiolKQgIAdALgBIAKgCQAEgBABgJIACgSQgFgCgFAAQgKAAAAAEgAg9mUIhCA1IgFAdIAug0QAYgXAxghQgWAKgaAQgAlFnOQAeAPAnAhQAOANAcAjQAVAfACgCQAIgGgIgRQgagvg4gkQgcgTghgKIgbgHgAiThrQgRgGgTgLQgUgNgRgdQgWgngHgHQgNgQgRgIQgXgNgQgNIgvgoQgagSgXgFQgUgDgRABQgPAAgEgBQgagKAGgPQAGgNASAAQAcAAAhAPQAQAGAmAZIBgBHIBDAoQAfAWAQAZQAQAZgDAQQgIAOgJAAIgCAAgAjTjDIASAcQAPASAIAGQAXANADgJQAEgMgfgkQgMgNgYgNIgXgJgAnIlXQAFAIAvABQAQAHBFAoIgjgcQgegXglgNQgNgDgMABIgKADIgBAAQgCACADAFgAl2i5IgDgLIAJABQAKACADADQAHAFgBAJQgUAAgFgJg");
	this.shape_16.setTransform(0.2,-0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CABB83").s().p("ABjHzQiDgaiDhgQhEgxgYgrIgMghIBhglQAygTAkggIAVAxQAcA3AeAeQBSBWBJATQBiAbBRgVQBqgfA+hGQAhglAbgxQAdg0AEgiQADg7gBgUQgDgwgWgmQgvhUhVgwQgvgbgpgHQgygKg4AQQg5ARgpAlQgiAeghA3QgxBRAOBVQAGAhAMASQAIATAeAlQA4BHBLANQAkAHArgKQAlgKAcgSQA5gpAXgtQAQgegGg3QgEg4gXgZQgyg9hEgEQhTgGgwBIQgmBBArArQAfAlAjgYQASgNgBgWQgBgVgPAAQgNgCAAgOIADgPIANgKQAQgLAVgHQA7gUAgAsQATAaAEAOQAHAXgHAfQgQA6hGAZQhKAag1gcQhdgygHg8QgGgmAJgoQALgrAageQBIhRBDgBQBhAABDA5QAjAgAOAZQAQAbAGAqQAFAvgKAxQgNA2gfAmQgjAog1AYQg4AZg8ABQg7ACg9geQgygZgigkQgjgkgWg+QgdhHAJhAQAOhlBQhaQBMhTBggQQA3gKA2ANQAqAIBCAeQBbApBDBzQAnBCgDBSQgBAugGAaQgKAqgeAsQghA1gSAUQgUAagoAkQgqAngiAUQgiAUg2ATQhXAihPAAQgjAAgigHgAijDVQggAMgVAVIgPATIAJAeQAXAnBDAuQB8BVB5AYQBfATCDgrQA4gWAfgTQAegRAsgnQAmgiAUgbIAxhIQAdgrAKgpQAGgZAAguQADhUgmg8Qg/hvhZgqQg/gegqgKQg4gNg4AKQhjAQhIBSQhPBagMBgQgHBCAaBGQAXA8AjAjQBXBXBvgBQB6gBBOhbQAeghALg3QALgvgGgvQgGgqgOgZQgPgVgkghQhAg7heADQhDABhIBQQgyA3AOBbQAHA3BbAwQAeAQAiAAQAWgBAhgKQBIgUANg7QAHgegEgTQgFgQgRgXQgegsg3ASQgVAJgQAKIgMAIIgBAPQAAANAMABQAPACACAXQAAAYgTANQgnAYgkgjQgVgXgEgWQgIghAagqQA0hRBZAJQBCAGA0A/QAXAaAGA7QAEA6gQAhQgXAsg5AqQgaARgqAKQguAMgigIQhOgMg3hHQghgqgIgOQgKgRgHgjQgShdAxhRQAjg5AfgdQAqgoA/gUQA+gTA2ANQAmAHA1AdQBTAvAzBZQAVAnADAwQABAXgEA4QgBAkggA4QgbAvgkAqQggAigzAfQgzAcgsAMQhMAUhogaQhDgThYhZQgfgegcgyIgXgtQgWAUgyAQgAnMguQgxgbg1gyQgqgpgTgZQgRgXgJgfQgOgrAQg4QAGgYAYggQAXgeAXgRQA5grA2gKQBDgQBCAaQBMAcAzA3QAXAbAMAfIB7hYQAcgTAigOQAkgPASAAQAZACAOARQAGAJgQAfQgRAjgdAhQgYAbggA/QgcA9gFAHQgGAJAAAYQAAAagEALQgMAdgHADQgTAHgKgOQgHgJgDgNQgDgQgDgFQgDgKgIgMIgJgJIAxgrQAGgHAKgeQALgkAJgQQALgUAtg5IAsg3QhWAZg4A8QgEADglApQgcAdgUAKQgQAHgUgHQgRgGgKgLQgJgaAAgRQAAghgsgoQg8g4hFgCQhXgDg8A9Qg7A8AHBQQAFAjAiAiQAKAKAuAmQAQALAtANQAsANAGAEQAOAKAMAaIgIAdQgTAGgQAAQgTAAgOgJgAnMnvQgwALg8AqQgXAQgXAeQgZAhgFAVQgQA3AQAsQAKAdAPAWQATAaAqAoQAyAvAyAdQAXANApgNIAHgWQgMgYgOgKQgGgEgrgMQgrgKgTgOIg8gwQgkgkgEgiQgHhZA/g+QBAg8BYADQBFABA/A7QAuArAAAhQAAARAMAaQASAZAkgSQAZgLAYgZIAngoQAngqA+geQAfgOAZgHIgxA8QgxBBgMASQgHAPgNAoQgKAhgGAHIgyAqIAHAGQAHAIAFAKIAGAXQACANAIAJQAHAKAHAAIALgEQAGgDAKgcQAFgLAAgaQgCgXAGgHQAGgHAZg6QAeg8AYgbQAdghAVgkQAUgjgFgHQgNgRgZgCQgmgDhMAzIh+BaQgNgigYgcQgzg4hNgZQgqgQgoAAQgYAAgXAGgAlxirQgFgDg0gsQgqgjgIgVQgDgGABgHIACgGIAAAAIAFAGIAQAUQAZAdASANQAdAVAeAGQAaAQgEAIQgCAGgOAAIgFAAQgJAAgIgDgAl2i8QAEAJAUAAQACgJgIgGQgCgDgLgBIgIgCg");
	this.shape_17.setTransform(0.3,-0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AA976C").s().p("AAAGQQiUgfiEhnQhCg0gdgvIgQglIArgGQAygJAggLQA0gSAygsIATA0QAaA7AfAfQBPBVBNATQBhAcBPgXQBogiA4g+QAhglAYgwQAagxAFghQACgygBgZQgEgvgUgnQgthPhYgxQhcg1hXAbQhiAdg7BjQgyBWAMBKQAFAgAKAUQAKAVAaAjQA4BDBJAQQBHAPBFgsQA2gjAZgxQAQgegFgzQgEg0gXgbQg0g7hCgDQghgBgfAPQgkASgWAhQgfA1AhAqQAhAkAcgWQAQgLgBgUQgCgSgOgBQgNgCAAgOIABgPIAPgMQAUgNAUgJQAagJAaAIQAcAHAPAVQAUAdAEANQAJAXgHAeQgQA+hHAcQhPAeg1gdQgogWgdgeQghgkgEgfQgGgiAKgrQANgvAageQBJhSBFgCQBhgDBHBAQAjAeAOAdQASAbAFArQAFAugMAxQgNA4ghAoQgiAqg3AZQg4AYg/ABQg6ACg/ghQg0gagkgkQgigigXhDQgahIAIg8QANhoBUhdQAaggAsgcQA2ghAygJQBXgQCAA4QBfAqBFBzQATAeAKAvQAKAqgCAkQgBAqgHAdQgKAugdArQghA0gTAXQgVAbgqAlQhNBEhYAfQg1AUhBAJQgiAFgeAAQgjAAgdgGgAkBBpIhhAlIAMAiQAYArBEAwQCDBhCDAaQBuAVB9gxQA2gSAigVQAigUAqgmQAogkAUgaQASgUAhg1QAegtAKgqQAGgZABgtQADhUgnhCQhDhzhbgoQhCgegqgJQg2gNg3AKQhgAQhLBTQhRBbgOBmQgJA/AdBHQAXA+AjAkQAhAkAyAYQA9AeA7gBQA8gCA4gYQA1gZAjgoQAfglANg3QAKgxgFguQgGgqgQgbQgOgagjgfQhDg6hhAAQhDAChIBQQgaAegLAtQgJAoAGAkQAHA9BdAyQA1AbBKgaQBGgYAQg7QAHgegHgWQgEgOgTgaQgggtg7AUQgVAHgQAMIgNAKIgDAOQAAAPANABQAPAAABAVQABAVgSANQgjAZgfgmQgrgqAmhAQAwhKBTAGQBEAEAyA+QAXAaAEA4QAGA2gQAeQgXAsg5AqQgcARglAKQgrAKgkgHQhLgNg4hGQgdgmgIgSQgMgTgGghQgOhUAxhSQAgg2AigeQApgmA5gRQA4gQAyAKQApAHAvAcQBVAvAvBVQAWAnADAvQABAUgDA6QgEAjgdAzQgbAxghAmQg+BGhqAeQhRAWhigcQhIgShThXQgegegcg2IgVgxQgkAfgyATgAnJkRQgagXgegZQg1grgGgRQgBgHAEgJIAEgIIAUAXQAXAaATANQARAMAZAJIAbAMQAYAPgEAPQgBAIgSACIgHAAQgLAAgGgDgAo4mNQgBAIABAHQAIAUAvAnQAeAYAaAXQAKAEAOgBQAQgCACgHQADgLgZgQQgigJgfgUQgRgOgYgbIgPgRIgFgGIAAAAIgCgCg");
	this.shape_18.setTransform(9,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.innerearMC, new cjs.Rectangle(-66.7,-52.4,133.5,104.9), null);


(lib.innereardrum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#806088","#B28EC0"],[0.067,1],1.2,-0.7,0,1.2,-0.7,4.6).s().p("AAYBAQgegIgKgOQgegqgGgLQgSgjARgVQAQgDAKACQALACAPALQAYAQAHAHQAPANAFAQIAKAmQAHAigOABQgOgCgPgEg");
	this.shape.setTransform(17.9,20.1,2.873,2.873);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.innereardrum, new cjs.Rectangle(0,0,35.9,40.2), null);


(lib.CompoundShape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B6B9").s().p("Aj9ApQgUhBANg1IAMgzQAYAwAfAEIAHgBQAagBBvgcQB8gfAVgEQBOgOAzAfQAUAMANAaQALAZgDASQgDAOgGgDIgGgFIhygHQgcgCgyASQgbAKg0AWQgwAUhdASIgTADQgPABgBARQgBAIACAIIgGBEQgjgxgRg5g");
	this.shape.setTransform(26.6,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundShape, new cjs.Rectangle(0,0,53.3,29.4), null);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E6C98D","#E7CA8F","#E9CD96","#EBD2A2","#EFDBB4","#F4E6CD","#FDFBF4","#FFFFFF"],[0.122,0.424,0.58,0.702,0.808,0.902,0.988,1],-28.7,-4.8,13.7,8).s().p("AApElIgggEQhGgIgPgMQgHgGhSgqQhPgogFgHQgNgQgYiiQgIg/gQjhIBnAMIAUCeIAtB1IBoAjQBuAjAiAAQBNAAB5gdQAIgCgCACIgLAJQgdATgNATQgUAegNAuQgKAlAAAYQAAARgIgIQgOgPgMABQgOABgaAdQgdAhgPAHQgQAIgcAAIgLAAg");
	this.shape.setTransform(31.1,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_59, new cjs.Rectangle(0,0,62.2,58.7), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,204,51,0)","#FFCC33"],[0,1],0,0,0,0,0,27).s().p("Ai8C8QhOhOAAhuQAAhuBOhOQBOhOBuABQBugBBPBOQBOBOAABuQAABuhOBOQhPBPhuAAQhtAAhPhPg");
	this.shape.setTransform(27.3,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0.6,0.3,53.4,53.3), null);


(lib.Image_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_7_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.059,0.066);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7, new cjs.Rectangle(0,0,6.9,10.9), null);


(lib.Image_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_6_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.059,0.066);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6, new cjs.Rectangle(0,0,5.7,5.5), null);


(lib.eardrumbone3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5E4D35").ss(0.3,0,0,4).p("AA3AoQgMAAgOgBQgcgCgEgJQgFgJgOABQgNAAgLAHQgNAIAHgeQAIABAJAAQASABAEgGQADgLACgIQAEgNATgEQAggFAGABIAAAQQgJgCgKAAQgVACgHANIgDAOQAAAQAOACQAWAFAQgDg");
	this.shape.setTransform(10.3,5.4,1.354,1.354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F1D4A5","#E2C495","#C7A174","#BB9468"],[0,0.306,0.812,1],-5.5,0,5.5,0).s().p("AAdAnQgcgCgEgJQgFgJgOABQgNAAgLAHQgNAIAHgeQAIABAJAAQASABAEgGIAFgTQAEgNATgEQAggFAGABIAAAQQgJgCgKAAQgVACgHANIgDAOQAAAQAOACQAWAFAQgDIAAAQIgIAAIgSgBg");
	this.shape_1.setTransform(10.3,5.4,1.354,1.354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5E4D35").ss(0.1,0,0,4).p("AgGgIQABgCAFAAQADAAACABQAGAPgHAEQgBABgDAAQgFAAAAgBQABgDAAgHQAAAAgCgEQgCgDACgBg");
	this.shape_2.setTransform(2.2,8.2,2.873,2.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F1D4A5","#EDD0A1","#E3C596","#D7B486","#C49E72","#BB9468","#DBB27F"],[0,0.38,0.518,0.616,0.694,0.725,0.988],0,-0.5,0.1,0.5).s().p("AgFAKIABgKIgCgEQgBAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABgCAFAAIAFABQAGAPgHAEIgEABIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_3.setTransform(2.2,8.2,2.873,2.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eardrumbone3, new cjs.Rectangle(-1,-1,19.8,13.4), null);


(lib.drumouterridge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCA2DE","#CCA2DE"],[0,0.812],-14.4,-14.6,14.8,14.6).s().p("ABBDOQh0gjgfgvQhThwgYg5QgthtA8hHQAzgKAhAGQAnAIAxAlQBRA3AVAUQA0AtAPAzIAjCDQAWBxgvABQg1gIg7gSg");
	this.shape.setTransform(21.1,23.2,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.drumouterridge, new cjs.Rectangle(0,0,41.8,46.5), null);


(lib.cochleacallout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A3631D").ss(1.6,1,1).p("ANMrIQkWjdlVBKQldBLhdFUQhSEsDPDmQAWAYjYjBQjdjIiViNQgnglgoAmQjtDfisEPQFOF0GdEdQEACwE2geQCVgRCPgwQEshjDBj7QE6mWjJnYQhKitiVh4g");
	this.shape.setTransform(114.5,87.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,204,51,0)","#FFCC33"],[0,1],0,0,0,0,0,116.4).s().p("AmNLYQmdkdlOl0QCskPDtjfQAogmAnAlQCVCNDdDIQDYDBgWgYQjPjmBSksQBdlUFdhLQFVhKEWDdQCVB4BKCtQDJHYk6GWQjBD7ksBjQiPAwiVARQguAEgsAAQkCAAjaiWg");
	this.shape_1.setTransform(114.5,87.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cochleacallout, new cjs.Rectangle(-1,-1,231.1,177.7), null);


(lib.cochleabg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000033").ss(1.6,1,1).p("AKcBrQh/DMjvgQQi6gKiLh+Qk/kfk6koQgnglgoAmQjtDfisEPQFOF0GdEdQEACwE2geQCVgRCPgwQEshjDBj7QE6mWjJnYQhKitiVh4QkWjdlVBKQldBLhdFUQhSEsDPDmQESExFCi4QChhcAkizQBClNlMhxQiWg0hyB2QjVDcEICgQCzBqAljXQAKg4gwgmQgmgcggAmIAUAkQhFBKAOh5QAFgpAvAEQCXARgeCZQgNBHhDAdQipBLhviqQiOjbDsiJQEAiTDBD7QCxDnigECg");
	this.shape.setTransform(114.5,87.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCFF").s().p("AmNLYQmdkdlOl0QCskPDtjfQAogmAnAlQE6EoE/EfQCLB+C6AKQDvAQB/jMQCgkCixjnQjBj7kACTQjsCJCODbQBvCqCphLQBDgdANhHQAeiZiXgRQgvgEgFApQgOB5BFhKIgUgkQAggmAmAcQAwAmgKA4QglDXizhqQkIigDVjcQByh2CWA0QFMBxhCFNQgkCzihBcQlCC4kSkxQjPjmBSksQBdlUFdhLQFVhKEWDdQCVB4BKCtQDJHYk6GWQjBD7ksBjQiPAwiVARQguAEgsAAQkCAAjaiWg");
	this.shape_1.setTransform(114.5,87.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#81724B").ss(5.7,1,1).p("AKcBrQh/DMjvgQQi6gKiLh+Qk/kfk6koQgnglgoAmQjtDfisEPQFOF0GdEdQEACwE2geQCVgRCPgwQEshjDBj7QE6mWjJnYQhKitiVh4QkWjdlVBKQldBLhdFUQhSEsDPDmQESExFCi4QChhcAkizQBClNlMhxQiWg0hyB2QjVDcEICgQCzBqAljXQAKg4gwgmQgmgcggAmIAUAkQhFBKAOh5QAFgpAvAEQCXARgeCZQgNBHhDAdQipBLhviqQiOjbDsiJQEAiTDBD7QCxDnigECg");
	this.shape_2.setTransform(114.5,87.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2D090").s().p("AmNLYQmdkdlOl0QCskPDtjfQAogmAnAlQE6EoE/EfQCLB+C6AKQDvAQB/jMQCgkCixjnQjBj7kACTQjsCJCODbQBvCqCphLQBDgdANhHQAeiZiXgRQgvgEgFApQgOB5BFhKIgUgkQAggmAmAcQAwAmgKA4QglDXizhqQkIigDVjcQByh2CWA0QFMBxhCFNQgkCzihBcQlCC4kSkxQjPjmBSksQBdlUFdhLQFVhKEWDdQCVB4BKCtQDJHYk6GWQjBD7ksBjQiPAwiVARQguAEgsAAQkCAAjaiWg");
	this.shape_3.setTransform(114.5,87.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cochleabg, new cjs.Rectangle(-2.8,-2.8,234.8,181.4), null);


(lib.clickReveal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape.setTransform(51.1,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAnQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAgHACgEQADgFADgCQAEgCAFgBIAJgCIAKgBIAHgBQAEgBACgCQACgCAAgDIgBgGIgDgDIgFgBIgFgBQgFAAgEADQgEADAAAGIgWAAQABgHADgFQADgFAGgDQAFgDAGgCIAMgBIAMABQAGABAFACQAFADADAEQADAEAAAHIAAAnIABALQAAAEACADIgWAAIgBgEIAAgEQgGAFgGADQgGACgIAAQgFAAgFgCgAAKADIgEABIgFABIgEAAIgFACIgEACIgDADIgBAFIABAEIADAEIAEABIAFABQAGAAADgDQAEgCABgDIACgFIABgFIAAgIg");
	this.shape_1.setTransform(44.9,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPAmQgHgDgFgGQgFgFgDgHQgDgIAAgJQAAgIADgHQADgIAFgFQAFgGAIgDQAHgDAIAAQAKAAAHAEIAHAEIAFAGQAFAHACAIQACAIgBAIIg3AAIACAJIAEAGQAEAFAIAAQAHAAAFgDQAEgEABgDIATAAQgCAHgEAFQgDAFgFADQgJAGgNAAQgIAAgIgDgAgHgWIgGAEIgDAGIgBAFIAiAAQgBgIgEgFIgFgDIgHgBQgEAAgDACg");
	this.shape_2.setTransform(36.3,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAnIgbhNIAXAAIAQA0IAAAAIAQg0IAWAAIgbBNg");
	this.shape_3.setTransform(28.1,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAmQgHgDgFgGQgFgFgDgHQgDgIAAgJQAAgIADgHQADgIAFgFQAFgGAIgDQAHgDAIAAQAKAAAHAEIAHAEIAFAGQAFAHACAIQACAIgBAIIg3AAIACAJIAEAGQAEAFAIAAQAHAAAFgDQAEgEABgDIATAAQgCAHgEAFQgDAFgFADQgJAGgNAAQgIAAgIgDgAgHgWIgGAEIgDAGIgBAFIAiAAQgBgIgEgFIgFgDIgHgBQgEAAgDACg");
	this.shape_4.setTransform(19.9,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAoIAAhNIAUAAIAAAPIAEgHIAFgFIAHgEIAIgBIAFABIAAAUIgEgBIgDAAQgHAAgDACQgEACgDADQgBAEgBAEIgCAJIAAAjg");
	this.shape_5.setTransform(13.4,25.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAmQgHgDgFgFQgFgGgDgHQgDgIAAgJQAAgIADgIQADgHAFgGQAFgFAHgDQAIgDAIAAQAGAAALADQAHADAFAFQAGAGACAHQADALAAAFQgBAMgCAFQgCAHgGAGQgFAFgHADQgIADgJAAQgIAAgIgDgAgIgWQgEACgCAEIgDAIIgBAIIABAJIADAIQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgDABgFIABgJIgBgIQgBgFgCgDQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_6.setTransform(54.2,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAMAzIgJgBQgDAAgEgCQgDgCgCgEQgCgDAAgGIAAgtIgNAAIAAgOIANAAIAAgYIAUAAIAAAYIAQAAIAAAOIgQAAIAAAlQAAAGACACQACABAFAAIAEAAIADAAIAAAQIgGABg");
	this.shape_7.setTransform(47,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANA1IgVgiIgIAIIAAAaIgVAAIAAhpIAVAAIAAA4IAagbIAZAAIgdAbIAgAxg");
	this.shape_8.setTransform(36.5,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAmQgHgDgFgFQgFgGgDgHQgDgHAAgJQAAgIADgIQACgHAFgGQAFgGAIgDIAIgCIAIgBIANACQAGACAFADQAFAEADAGQAEAFAAAIIgVAAQgCgOgOAAQgEAAgDACQgEADgCADIgDAJIgBAHIABAJIADAIQACADAEADQADACAEAAIAHgBIAFgDQAEgFABgHIAUAAQgBAIgDAGQgDAGgFAEQgEAEgHACQgGACgIAAQgIAAgHgDg");
	this.shape_9.setTransform(27.4,13.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKA1IAAhMIAVAAIAABMgAgKgjIAAgRIAVAAIAAARg");
	this.shape_10.setTransform(21.1,11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_11.setTransform(17.3,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAzIgKgEIgHgHQgHgHgDgLQgEgKAAgLQAAgMAEgKIAEgJIAGgJIAHgHIAKgFQAJgEAMAAQAJAAAIADQAIACAFAFQAHAFAEAHQAEAHABAKIgXAAQAAgFgDgDIgFgGIgHgEIgIgCQgHABgGADQgFADgEAFQgDAFgBAHQgCAGgBAHQABAGACAHQABAGADAFQAEAFAFADQAGADAHAAQAFAAAFgCQADgBAEgDQAGgHABgKIAXAAQgCAMgDAGQgDAHgHAGQgGAGgIADQgIADgKAAQgMAAgJgFg");
	this.shape_12.setTransform(9.8,11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAJIAAgDQgGAAAAgFQAAgDAVgFQAQgEAKAAQAJAAgBAEQAAAGgUAGQgQAHgIAAQgEAAgBgDg");
	this.shape_13.setTransform(44.7,28.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLAHIgFgBQgKAAAAgFQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAIgCIAFgBIACgCIABgBIAHAAQAPAAAIAEQAGACAAADQAAAIgbAAQgHAAgEgCg");
	this.shape_14.setTransform(36.2,25.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(4,1,1).p("ADWhCQgFAHABAKQgBAKAFAHQAEAHAKABQALgBAEgHQAEgHAAgKQAAgKgEgHQgEgHgLgBQgKABgEAHgADkhaQATAAALALQALALAAATQAAATgLALQgLALgTAAQgSAAgLgLQgLgLAAgTQAAgTALgLQALgLASAAgACChYIANAAIAAgXIAWAAIAAAXIAPAAIAAAPIgPAAIAAAmQgBAKAKgBQADAAADgBIAAARQgFABgHAAQgKAAgHgEQgHgDgBgMIAAgtIgNAAgACGAmQANAAAKAEQALAFABANIAAAoQAAAMACAGIgWAAQgBgEAAgEQgLALgPgBQgLAAgIgGQgHgFAAgMQAAgNAIgFQAIgFAKgBQAKgBAHgCQAIgBAAgGQAAgHgEgCQgEgCgGABQgMgBgCAMIgVAAQABgPALgFQALgGANAAgADPALIAABrIgVAAIAAhrgABVhYIgdAcIAhAyIgaAAIgVgjIgJAIIAAAbIgVAAIAAhrIAVAAIAAA5IAbgcgAhchkIgWAAIAAgRIAWAAgAgnhaQAPAAAKAHQAKAIACAPIgVAAQgCgNgOgBQgKABgEAIQgEAHAAAJQAAAJAEAIQAEAHAKABQAPgBACgPIAUAAQgCAQgKAIQgKAIgPAAQgSAAgKgLQgLgLAAgSQAAgSAKgMQAKgLATgBgAgxAoIAQA1IARg1IAUAAIgZBOIgYAAIgbhOgABOA0QAKAOgCASIg4AAQACAUASAAQAGAAAFgDQAEgDABgEIATAAQgJAbgbgBQgTAAgKgLQgLgMAAgSQAAgRALgMQALgLASgBQAUABAJANgAhcgKIgWAAIAAhOIAWAAgAiDh1IAABrIgWAAIAAhrgAiphRIgXAAQgBgIgGgGQgHgFgJAAQgQABgGAKQgHALAAAPQAAANAHALQAGALAQAAQALAAAGgGQAGgHABgLIAXAAQgCAVgMALQgNAMgUAAQgZAAgOgQQgOgQAAgXQAAgZAOgPQAOgQAZgBQASAAANAKQANAKACATgAi7AoIAAAPIABAAQADgIAHgEQAHgFAHAAQADAAACABIAAAUQgDgBgFAAQgLAAgFAHQgFAHAAALIAAAjIgVAAIAAhOgAhzAmQAUABAKANQAJAOgBASIg4AAQABAUASAAQAHAAAEgDQAFgDABgEIATAAQgKAbgbgBQgSAAgLgLQgKgMgBgSQABgRAKgMQALgLASgBgAiFBHIAjAAQgDgQgOgBQgKABgEAFQgEAGAAAFg");
	this.shape_15.setTransform(31.5,18.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AB6B4QgLAAgIgGQgHgFAAgMQAAgNAIgFQAIgFAKgBIARgDQAIgBAAgGQAAgHgEgCQgEgCgGABQgMgBgCAMIgVAAQABgPALgFQALgGANAAQANAAAKAEQALAFABANIAAAoQAAAMACAGIgWAAIgBgIQgKALgOAAIgCgBgACLBTIgJABQgGABgDADQgEACAAAGQAAAFAEADQAEACAFAAQAMgBADgHQADgGgBgEIAAgIQgDACgFABgAAxB4QgTAAgKgLQgLgMAAgSQAAgRALgMQALgLASgBQAUABAJANQAKAOgCASIg4AAQACAUASAAQAGAAAFgDQAEgDABgEIATAAQgJAagaABIgBgBgAAiA8QgDAGgBAFIAjAAQgCgQgPgBQgKABgEAFgAhzB4QgSAAgLgLQgKgMgBgSQABgRAKgMQALgLASgBQAUABAKANQAJAOgBASIg4AAQABAUASAAQAHAAAEgDQAFgDABgEIATAAQgKAagaABIgBgBgAiBA8QgEAGAAAFIAjAAQgDgQgOgBQgKABgEAFgAC6B2IAAhrIAVAAIAABrgAgtB2IgbhOIAXAAIAQA1IARg1IAUAAIgZBOgAjPB2IAAhOIAUAAIAAAPIABAAQADgIAHgEQAHgFAHAAIAFABIAAAUIgIgBQgLAAgFAHQgFAHAAALIAAAjgADHgTQgLgLAAgTQAAgTALgLQALgLASAAQATAAALALQALALAAATQAAATgLALQgLALgTAAQgSAAgLgLgADWhCQgFAHABAKQgBAKAFAHQAEAHAKABQALgBAEgHQAEgHAAgKQAAgKgEgHQgEgHgLgBQgKABgEAHgAhDgTQgLgLAAgSQAAgSAKgMQAKgLATgBQAPAAAKAHQAKAIACAPIgVAAQgCgNgOgBQgKABgEAIQgEAHAAAJQAAAJAEAIQAEAHAKABQAPgBACgPIAUAAQgCAQgKAIQgKAIgPAAQgSAAgKgLgAj+gYQgOgQAAgXQAAgZAOgPQAOgQAZgBQASAAANAKQANAKACATIgXAAQgBgIgGgGQgHgFgJAAQgQABgGAKQgHALAAAPQAAANAHALQAGALAQAAQALAAAGgGQAGgHABgLIAXAAQgCAVgMALQgNAMgUAAQgZAAgOgQgACXgNQgHgDgBgMIAAgtIgNAAIAAgPIANAAIAAgXIAWAAIAAAXIAPAAIAAAPIgPAAIAAAmQgBAKAKgBQADAAADgBIAAARIgMABIgCAAQgJAAgGgEgAA/gKIgVgjIgJAIIAAAbIgVAAIAAhrIAVAAIAAA5IAbgcIAZAAIgdAcIAhAygAhygKIAAhOIAWAAIAABOgAiZgKIAAhrIAWAAIAABrgAhyhkIAAgRIAWAAIAAARg");
	this.shape_16.setTransform(31.5,18.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_17.setTransform(51.1,24.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAnQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAgHACgEQADgFADgCQAEgCAFgBIAJgCIAKgBIAHgBQAEgBACgCQACgCAAgDIgBgGIgDgDIgFgBIgFgBQgFAAgEADQgEADAAAGIgWAAQABgHADgFQADgFAGgDQAFgDAGgCIAMgBIAMABQAGABAFACQAFADADAEQADAEAAAHIAAAnIABALQAAAEACADIgWAAIgBgEIAAgEQgGAFgGADQgGACgIAAQgFAAgFgCgAAKADIgEABIgFABIgEAAIgFACIgEACIgDADIgBAFIABAEIADAEIAEABIAFABQAGAAADgDQAEgCABgDIACgFIABgFIAAgIg");
	this.shape_18.setTransform(44.9,25.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgHQgDgIAAgJQAAgIADgHQADgIAFgFQAFgGAIgDQAHgDAIAAQAKAAAHAEIAHAEIAFAGQAFAHACAIQACAIgBAIIg3AAIACAJIAEAGQAEAFAIAAQAHAAAFgDQAEgEABgDIATAAQgCAHgEAFQgDAFgFADQgJAGgNAAQgIAAgIgDgAgHgWIgGAEIgDAGIgBAFIAiAAQgBgIgEgFIgFgDIgHgBQgEAAgDACg");
	this.shape_19.setTransform(36.3,25.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAnIgbhNIAXAAIAQA0IAAAAIAQg0IAWAAIgbBNg");
	this.shape_20.setTransform(28.1,25.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgHQgDgIAAgJQAAgIADgHQADgIAFgFQAFgGAIgDQAHgDAIAAQAKAAAHAEIAHAEIAFAGQAFAHACAIQACAIgBAIIg3AAIACAJIAEAGQAEAFAIAAQAHAAAFgDQAEgEABgDIATAAQgCAHgEAFQgDAFgFADQgJAGgNAAQgIAAgIgDgAgHgWIgGAEIgDAGIgBAFIAiAAQgBgIgEgFIgFgDIgHgBQgEAAgDACg");
	this.shape_21.setTransform(19.9,25.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAoIAAhNIAUAAIAAAPIAEgHIAFgFIAHgEIAIgBIAFABIAAAUIgEgBIgDAAQgHAAgDACQgEACgDADQgBAEgBAEIgCAJIAAAjg");
	this.shape_22.setTransform(13.4,25.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAmQgHgDgFgFQgFgGgDgHQgDgIAAgJQAAgIADgIQADgHAFgGQAFgFAHgDQAIgDAIAAQAGAAALADQAHADAFAFQAGAGACAHQADALAAAFQgBAMgCAFQgCAHgGAGQgFAFgHADQgIADgJAAQgIAAgIgDgAgIgWQgEACgCAEIgDAIIgBAIIABAJIADAIQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgDABgFIABgJIgBgIQgBgFgCgDQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_23.setTransform(54.2,13.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAMAzIgJgBQgDAAgEgCQgDgCgCgEQgCgDAAgGIAAgtIgNAAIAAgOIANAAIAAgYIAUAAIAAAYIAQAAIAAAOIgQAAIAAAlQAAAGACACQACABAFAAIAEAAIADAAIAAAQIgGABg");
	this.shape_24.setTransform(47,12.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AANA1IgVgiIgIAIIAAAaIgVAAIAAhqIAVAAIAAA5IAagbIAZAAIgdAcIAgAwg");
	this.shape_25.setTransform(36.5,12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAmQgHgDgFgFQgFgGgDgHQgDgHAAgJQAAgIADgIQACgHAFgGQAFgGAIgDIAIgCIAIgBQAGAAAHACQAGACAFADQAFAEADAGQAEAFAAAIIgVAAQgCgOgOAAQgEAAgDACQgEADgCADIgDAJIgBAHIABAJIADAIQACADAEADQADACAEAAIAHgBIAFgDQAEgFABgHIAUAAQgBAIgDAGQgDAGgFAEQgEAEgHACQgGACgIAAQgIAAgHgDg");
	this.shape_26.setTransform(27.4,13.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKA1IAAhMIAVAAIAABMgAgKgjIAAgSIAVAAIAAASg");
	this.shape_27.setTransform(21.1,12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKA1IAAhqIAVAAIAABqg");
	this.shape_28.setTransform(17.3,12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSA0IgKgGIgHgGQgHgHgDgLQgEgKAAgMQAAgLAEgKIAEgJIAGgJIAHgHIAKgFQAJgEAMAAQAJAAAIACQAIADAFAFQAHAEAEAIQAEAHABAJIgXAAQAAgEgDgDIgFgGIgHgEIgIgCQgHAAgGAEQgFADgEAFQgDAFgBAHQgCAHgBAFQABAHACAHQABAGADAFQAEAFAFADQAGADAHAAQAFAAAFgCQADgBAEgDQAGgHABgKIAXAAQgCAMgDAGQgDAHgHAGQgGAGgIADQgIADgKAAQgMAAgJgEg");
	this.shape_29.setTransform(9.8,12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BF812E").s().p("AgXAKQAAgEAFAAIAAAAIgDgDIgIACQgFAAAAgEQAAgCAPgDIAPgCQAXgGAHAAQAGAAAAAEIgBACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIABADQAAADgWAGQgTAGgMAAQgFAAAAgDg");
	this.shape_30.setTransform(44.5,28.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BF812E").s().p("AgPAGQgEgCAAgCQAAgIALABIARAAIAIAEQABAAAAAAQABABAAAAQAAAAABAAQAAABAAABQAAACgFACg");
	this.shape_31.setTransform(36.4,24.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BF812E").s().p("AgIAFQgIAAgDgCQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAgBAAIAAgDQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAeAAQAGADABACQAAAEgZACQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_32.setTransform(20.1,25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BF812E").ss(4,1,1).p("ADkhKQgKABgEAHQgFAHABAKQgBAKAFAHQAEAHAKABQALgBAEgHQAEgHAAgKQAAgKgEgHQgEgHgLgBgAEChPQALALAAATQAAATgLALQgLALgTAAQgSAAgLgLQgLgLAAgTQAAgTALgLQALgLASAAQATAAALALgACChYIANAAIAAgXIAWAAIAAAXIAPAAIAAAPIgPAAIAAAmQgBAKAKgBQADAAADgBIAAARQgFABgHAAQgKAAgHgEQgHgDgBgMIAAgtIgNAAgACGAmQANAAAKAEQALAFABANIAAAoQAAAMACAGIgWAAQgBgEAAgEQgLALgPgBQgLAAgIgGQgHgFAAgMQAAgNAIgFQAIgFAKgBQAKgBAHgCQAIgBAAgGQAAgHgEgCQgEgCgGABQgMgBgCAMIgVAAQABgPALgFQALgGANAAgADPALIAABrIgVAAIAAhrgAAhh1IAAA5IAbgcIAZAAIgdAcIAhAyIgaAAIgVgjIgJAIIAAAbIgVAAIAAhrgAhchkIgWAAIAAgRIAWAAgAgOhTQAKAIACAPIgVAAQgCgNgOgBQgKABgEAIQgEAHAAAJQAAAJAEAIQAEAHAKABQAPgBACgPIAUAAQgCAQgKAIQgKAIgPAAQgSAAgKgLQgLgLAAgSQAAgSAKgMQAKgLATgBQAPAAAKAHgAgxAoIAQA1IARg1IAUAAIgZBOIgYAAIgbhOgAAxAmQAUABAJANQAKAOgCASIg4AAQACAUASAAQAGAAAFgDQAEgDABgEIATAAQgJAbgbgBQgTAAgKgLQgLgMAAgSQAAgRALgMQALgLASgBgAhcgKIgWAAIAAhOIAWAAgAiphRIgXAAQgBgIgGgGQgHgFgJAAQgQABgGAKQgHALAAAPQAAANAHALQAGALAQAAQALAAAGgGQAGgHABgLIAXAAQgCAVgMALQgNAMgUAAQgZAAgOgQQgOgQAAgXQAAgZAOgPQAOgQAZgBQASAAANAKQANAKACATgAiDh1IAABrIgWAAIAAhrgAi7AoIAAAPIABAAQADgIAHgEQAHgFAHAAQADAAACABIAAAUQgDgBgFAAQgLAAgFAHQgFAHAAALIAAAjIgVAAIAAhOgAhzAmQAUABAKANQAJAOgBASIg4AAQABAUASAAQAHAAAEgDQAFgDABgEIATAAQgKAbgbgBQgSAAgLgLQgKgMgBgSQABgRAKgMQALgLASgBg");
	this.shape_33.setTransform(31.5,18.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AmXDQIAAmfIMvAAIAAGfg");
	this.shape_34.setTransform(32.1,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_34}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,0.4,58.7,34.1);


(lib.buttonupbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AlJBpQgrAAgggfQgegfAAgrQAAgqAeggQAggeArAAIKTAAQAsAAAeAeQAfAgAAAqQAAArgfAfQgeAfgsAAg");
	this.shape.setTransform(43.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.buttonupbg, new cjs.Rectangle(0,0,87,21), null);


(lib.soundwavessmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.soundwavesingle();
	this.instance.parent = this;
	this.instance.setTransform(8,15.7,1,1,0,0,0,6,15.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.45,x:11.3,alpha:0.25},0).wait(1).to({scaleX:0.1,skewY:180,x:14.6,alpha:0.5},0).wait(1).to({scaleX:0.65,x:17.8,alpha:0.75},0).wait(1).to({scaleX:1.2,x:21.1,alpha:1},0).wait(1).to({scaleX:0.73,x:18.3},0).wait(1).to({scaleX:0.26,x:15.5},0).wait(1).to({scaleX:0.2,skewY:0,x:12.8},0).wait(1).to({scaleX:0.67,x:10},0).wait(1).to({scaleX:1.14,x:7.2},0).wait(1).to({scaleX:1.6,x:4.4},0).wait(1).to({scaleX:1.04,x:7.7},0).wait(1).to({scaleX:0.48,x:11.1},0).wait(1).to({scaleX:0.08,skewY:180,x:14.5},0).wait(1).to({scaleX:0.64,x:17.8},0).wait(1).to({scaleX:1.2,x:21.1},0).wait(1).to({scaleX:0.73,x:18.3,alpha:0.909},0).wait(1).to({scaleX:0.26,x:15.5,alpha:0.818},0).wait(1).to({scaleX:0.2,skewY:0,x:12.8,alpha:0.727},0).wait(1).to({scaleX:0.67,x:10,alpha:0.636},0).wait(1).to({scaleX:1.14,x:7.2,alpha:0.545},0).wait(1).to({scaleX:1.6,x:4.4,alpha:0.455},0).wait(1).to({scaleX:1.04,x:7.7,alpha:0.364},0).wait(1).to({scaleX:0.48,x:11.1,alpha:0.273},0).wait(1).to({scaleX:0.08,skewY:180,x:14.5,alpha:0.182},0).wait(1).to({scaleX:0.64,x:17.8,alpha:0.091},0).wait(1).to({scaleX:1.2,x:21.1,alpha:0},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,12,31.5);


(lib.soundwavesmotion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cycle:161});

	// timeline functions:
	this.frame_232 = function() {
		this.gotoAndPlay("cycle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(232).call(this.frame_232).wait(1));

	// Layer 4
	this.text = new cjs.Text("Sound waves", "15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 91;
	this.text.parent = this;
	this.text.setTransform(-183.7,148);
	this.text._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AB4myIjvNl");
	this.shape.setTransform(-160.5,92.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAAmtIAANb");
	this.shape_1.setTransform(-184.5,93.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhymyIDlNl");
	this.shape_2.setTransform(-204,94.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_3.setTransform(-142.2,157.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAAWgHQgBgJgEgFQgGgIgKAAQgIAAgHAGQgGAGAAAKIAqAAIAAAAg");
	this.shape_4.setTransform(-150.2,157.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAQIAFgQIARguIANAAIgdBNg");
	this.shape_5.setTransform(-158.1,157.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_6.setTransform(-166.2,157.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAnIgMguIgDgNIgPA7IgOAAIgXhNIANAAIANAsIAEARIAEgQIANgtIAMAAIAMAtIAEAOIAEgPIAOgsIAMAAIgYBNg");
	this.shape_7.setTransform(-175.8,157.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_8.setTransform(-190,156.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgEgCgGAAQgHAAgHAFQgFAFgBAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_9.setTransform(-198.1,157.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAlQgHgCgCgEQgEgFgBgFIgBgNIAAgvIAOAAIAAArIABANQABAGAEACQAEADAGAAQAFAAAFgDQAFgDACgFQACgFABgKIAAgpIAMAAIAABNIgLAAIAAgMQgJAOgPAAQgGAAgGgDg");
	this.shape_10.setTransform(-206.5,157.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_11.setTransform(-214.9,157.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAzQgKgEgGgJQgFgIgBgLIAOgBQABAIADAFQAEAFAHADQAHAEAJAAQAIgBAGgCQAGgCADgEQADgFAAgEQAAgGgDgDQgDgEgGgDIgSgFQgPgDgGgCQgIgFgEgFQgDgHAAgHQAAgIAEgIQAFgGAJgEQAJgDAKAAQALAAAJADQAKAEAEAIQAFAHABAJIgOACQgBgLgGgFQgHgFgMAAQgMAAgGAFQgGAEAAAHQAAAGAEADQAFAEAQAEQARAEAHADQAJAEAEAGQAFAGAAAJQAAAJgFAHQgFAIgJAEQgJAFgMgBQgNABgKgFg");
	this.shape_12.setTransform(-224.2,156.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},20).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.text}]},79).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[]},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(20).to({_off:false},0).wait(4).to({_off:true},1).wait(79).to({_off:false},0).wait(4).to({_off:true},1).wait(124));

	// sound waves
	this.instance = new lib.soundwaves();
	this.instance.parent = this;
	this.instance.setTransform(-383,4.5,0.368,0.368,180,0,0,320.9,152.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:233.4,regY:152.8,x:-342.7,y:4.4},0).wait(1).to({x:-334.3},0).wait(1).to({x:-326.1},0).wait(1).to({x:-317.8},0).wait(1).to({x:-309.6},0).wait(1).to({x:-301.4},0).wait(1).to({x:-293.1},0).wait(1).to({x:-284.9},0).wait(1).to({x:-276.6},0).wait(1).to({x:-268.4},0).wait(1).to({x:-260.2},0).wait(1).to({x:-251.9},0).wait(1).to({x:-243.7},0).wait(1).to({x:-235.4},0).wait(1).to({x:-227.2},0).wait(1).to({x:-219},0).wait(1).to({x:-210.7},0).wait(1).to({x:-202.5},0).wait(1).to({x:-194.2},0).wait(1).to({regX:320.9,x:-214.3,y:4.5},0).wait(88).to({regY:152.7},0).wait(1).to({regX:233.4,regY:152.8,x:-175.3,y:4.4},0).wait(1).to({x:-168.6},0).wait(1).to({x:-161.8},0).wait(1).to({x:-155.1},0).wait(1).to({x:-148.3},0).wait(1).to({x:-141.6},0).wait(1).to({x:-134.8},0).wait(1).to({x:-128.1},0).wait(1).to({x:-121.3},0).wait(1).to({x:-114.5},0).wait(1).to({x:-107.8},0).wait(1).to({x:-101},0).wait(1).to({x:-94.3},0).wait(1).to({x:-87.5},0).wait(1).to({x:-80.8},0).wait(1).to({x:-74.1},0).wait(1).to({x:-67.3},0).wait(1).to({x:-60.6},0).wait(1).to({x:-53.8},0).wait(1).to({x:-47},0).wait(1).to({x:-40.3},0).wait(1).to({x:-33.5},0).wait(1).to({x:-26.8},0).wait(1).to({x:-20},0).wait(1).to({x:-13.3},0).wait(1).to({x:-6.5},0).wait(1).to({x:0.2},0).wait(1).to({x:7},0).wait(1).to({x:13.8},0).wait(1).to({x:20.5},0).wait(1).to({x:27.3},0).wait(1).to({x:34},0).wait(1).to({x:40.8},0).wait(1).to({x:47.5},0).wait(1).to({x:54.3},0).wait(1).to({x:61.1},0).wait(1).to({x:67.8},0).wait(1).to({x:74.6},0).wait(1).to({x:81.3},0).wait(1).to({x:88.1},0).wait(1).to({x:94.8},0).wait(1).to({x:101.6},0).wait(1).to({x:108.3},0).wait(1).to({x:115.1},0).wait(1).to({x:121.8},0).wait(1).to({x:128.6},0).wait(1).to({x:135.4},0).wait(1).to({x:142.1},0).wait(1).to({x:148.9},0).wait(1).to({x:155.6},0).wait(1).to({x:162.4},0).wait(1).to({x:169.1},0).wait(1).to({regX:320.9,regY:152.7,x:-383,y:4.5},0).wait(1).to({regX:233.4,regY:152.8,x:-343.7,y:4.4},0).wait(1).to({x:-336.3},0).wait(1).to({x:-329},0).wait(1).to({x:-321.6},0).wait(1).to({x:-314.2},0).wait(1).to({x:-306.9},0).wait(1).to({x:-299.6},0).wait(1).to({x:-292.2},0).wait(1).to({x:-284.9},0).wait(1).to({x:-277.6},0).wait(1).to({x:-270.3},0).wait(1).to({x:-262.9},0).wait(1).to({x:-255.6},0).wait(1).to({x:-248.3},0).wait(1).to({x:-241},0).wait(1).to({x:-233.6},0).wait(1).to({x:-226.3},0).wait(1).to({x:-219},0).wait(1).to({x:-211.7},0).wait(1).to({x:-204.3},0).wait(1).to({x:-197},0).wait(1).to({x:-189.7},0).wait(1).to({x:-182.4},0).wait(1).to({x:-175},0).wait(1).to({x:-167.7},0).wait(1).to({x:-160.4},0).wait(1).to({x:-153},0).wait(1).to({x:-145.7},0).wait(1).to({x:-138.4},0).wait(1).to({x:-131.1},0).wait(1).to({x:-123.7},0).wait(1).to({x:-116.4},0).wait(1).to({x:-109.1},0).wait(1).to({x:-101.8},0).wait(1).to({x:-94.4},0).wait(1).to({x:-87.1},0).wait(1).to({x:-79.8},0).wait(1).to({x:-72.5},0).wait(1).to({x:-65},0).wait(1).to({x:-57.4},0).wait(1).to({x:-50.8},0).wait(1).to({x:-43.4},0).wait(1).to({x:-36.1},0).wait(1).to({x:-28.6},0).wait(1).to({x:-21.3},0).wait(1).to({x:-14},0).wait(1).to({x:-6.6},0).wait(1).to({x:0.7},0).wait(1).to({x:8},0).wait(1).to({x:15.3},0).wait(1).to({x:22.7},0).wait(1).to({x:30},0).wait(1).to({x:37.3},0).wait(1).to({x:44.6},0).wait(1).to({x:52},0).wait(1).to({x:59.3},0).wait(1).to({x:66.6},0).wait(1).to({x:73.9},0).wait(1).to({x:81.3},0).wait(1).to({x:88.6},0).wait(1).to({x:95.9},0).wait(1).to({x:103.2},0).wait(1).to({x:110.6},0).wait(1).to({x:117.9},0).wait(1).to({x:125.2},0).wait(1).to({x:132.5},0).wait(1).to({x:139.9},0).wait(1).to({x:147.2},0).wait(1).to({x:154.6},0).wait(1).to({x:161.9},0).wait(1).to({x:169.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-436.6,-51.7,171.6,112.3);


(lib.innerdrum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fribillate:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABEC5QhYgYgbgpQhYh3gRghQg0hlAzg+QAsgIAdAFQAhAIArAfQBFAuAVATQAsAnANAsIAeBxQATBhgoACQgngEgtgMg");
	mask.setTransform(17.9,20.1);

	// Layer 1
	this.instance = new lib.innereardrum();
	this.instance.parent = this;
	this.instance.setTransform(17.9,20.1,1,1,0,0,0,17.9,20.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.35,scaleY:1.1,x:18.9,y:19.2},0).wait(1).to({scaleX:1.71,scaleY:1.19,x:19.9,y:18.3},0).wait(1).to({scaleX:1.35,scaleY:1.1,x:18.9,y:19.2},0).wait(1).to({scaleX:1,scaleY:1,x:17.9,y:20.1},0).wait(1).to({scaleX:1.35,scaleY:1.1,x:18.9,y:19.2},0).wait(1).to({scaleX:1.71,scaleY:1.19,x:19.9,y:18.3},0).wait(1).to({scaleX:1.47,scaleY:1.13,x:19.3,y:19},0).wait(1).to({scaleX:1.24,scaleY:1.06,x:18.6,y:19.5},0).wait(1).to({scaleX:1,scaleY:1,x:17.9,y:20.1},0).wait(1).to({scaleX:1.35,scaleY:1.1,x:18.9,y:19.2},0).wait(1).to({scaleX:1.71,scaleY:1.19,x:19.9,y:18.3},0).wait(1).to({scaleX:1.47,scaleY:1.13,x:19.3,y:19},0).wait(1).to({scaleX:1.24,scaleY:1.06,x:18.6,y:19.5},0).wait(1).to({scaleX:1,scaleY:1,x:17.9,y:20.1},0).wait(1).to({scaleX:1.24,scaleY:1.06,x:18.6,y:19.5},0).wait(1).to({scaleX:1.47,scaleY:1.13,x:19.3,y:19},0).wait(1).to({scaleX:1.71,scaleY:1.19,x:19.9,y:18.3},0).wait(1).to({scaleX:1.47,scaleY:1.13,x:19.3,y:19},0).wait(1).to({scaleX:1.24,scaleY:1.06,x:18.6,y:19.5},0).wait(1).to({scaleX:1,scaleY:1,x:17.9,y:20.1},0).wait(1).to({scaleX:1.35,scaleY:1.1,x:18.9,y:19.2},0).wait(1).to({scaleX:1.71,scaleY:1.19,x:19.9,y:18.3},0).wait(1).to({scaleX:1.35,scaleY:1.1,x:18.9,y:19.2},0).wait(1).to({scaleX:1,scaleY:1,x:17.9,y:20.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.9,40.2);


(lib.eardrumbone2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF9D72").s().p("AAAAHQgJgDgBgJIgBgDQAAAAAAAAQAAAAAAAAQABAAAAABQABABABAAIAGAGQAHAHAHgDQAAAFgEAAIgCAAIgGgCg");
	this.shape.setTransform(22.1,47.8,2.873,2.873);

	this.instance = new lib.Image_3();
	this.instance.parent = this;
	this.instance.setTransform(18.5,24.7,0.227,0.178,0,44.3,50.4);

	this.instance_1 = new lib.Image_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.2,10.4,0.259,0.188);

	this.instance_2 = new lib.Image_7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.4,31.9,2.873,2.873,0,0,0,3.3,5.5);
	this.instance_2.alpha = 0.621;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F1E4DD","#E9DACE","#DCC6AF","#C9A985","#BB9468"],[0,0.161,0.424,0.761,1],1.6,-0.2,-1.9,1.2).s().p("AAOBOQgEgFgCgNIgBgKQgBgFgDgEQgEgFgOgHQgPgHgGgGQgIgKgBgOQAAgXAMgcIgCADQACgFADAAIABgCQAFgBAEgHQADgHAAgGQAFgCADAHIAFALQADAEAHAAQAJAAADADIAKAIQAGAEAGACQAHADgCAGQgBAFgFAFQgPAOgGAKQAGAEACAIQACAIgCAJIgDARQgCAKABAHQACAGABACQABACAFACIgBAAQAIgHADALQADALgKAAIgBAAQgNAAgGgIg");
	this.shape_1.setTransform(15,26.7,2.873,2.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F1D4A5","#E2C495","#C7A174","#BB9468"],[0,0.306,0.812,1],1.6,-0.2,-1.9,1.2).s().p("AAOBOQgEgFgCgNIgBgKQgBgFgDgEQgEgFgOgHQgPgHgGgGQgIgKgBgOQAAgXAMgcIgCADQACgFADAAIABgCQAFgBAEgHQADgHAAgGQAFgCADAHIAFALQADAEAHAAQAJAAADADIAKAIQAGAEAGACQAHADgCAGQgBAFgFAFQgPAOgGAKQAGAEACAIQACAIgCAJIgDARQgCAKABAHQACAGABACQABACAFACIgBAAQAIgHADALQADALgKAAIgBAAQgNAAgGgIg");
	this.shape_2.setTransform(15,26.7,2.873,2.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eardrumbone2, new cjs.Rectangle(1.9,2.1,26.3,49.2), null);


(lib.eardrumbone1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_8();
	this.instance.parent = this;
	this.instance.setTransform(8.8,31.2,0.169,0.188);

	this.instance_1 = new lib.Image_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.5,39.4,0.287,0.171,0,-73.7,-76.7);

	this.instance_2 = new lib.Image_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.2,9.5,0.169,0.188);

	this.instance_3 = new lib.Image_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(16,17.5,2.873,2.873,0,0,0,2.9,2.7);
	this.instance_3.alpha = 0.719;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfBbIgFgJQgEgLgHgJQgPgVgMgIQgLgIgFABIAKgHQAHgFgDgFQgDgFgJACIgNADQABgDAEgBIAGgBQAJgEADAAIAIABQAEAAADgCQADgFgCgMQgBgGgGgHIgKgMQgEgFACgKQACgJAEgFIAHgEQAEgDABgEIABgPIAAAAIAAAAIAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQACAJAKAFIARAHQAHAGAAAOQAAAGgCAFIgFAJQgDAFABAGIABALQAAAIgEAOQAAAFACAGIADAKQAFARAAAHIgCAMIAAAMQADAPgFAJQAAgEgDgFg");
	this.shape.setTransform(13.7,30.9,2.873,2.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F1D4A5","#DBB27F"],[0,1],1.8,0,-0.6,-0.1).s().p("AAfBbIgFgJQgEgLgHgJQgPgVgMgIQgLgIgFABIAKgHQAHgFgDgFQgDgFgJACIgNADQABgDAEgBIAGgBQAJgEADAAIAIABQAEAAADgCQADgFgCgMQgBgGgGgHIgKgMQgEgFACgKQACgJAEgFIAHgEQAEgDABgEIABgPIAAAAIAAAAIAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQACAJAKAFIARAHQAHAGAAAOQAAAGgCAFIgFAJQgDAFABAGIABALQAAAIgEAOQAAAFACAGIADAKQAFARAAAHIgCAMIAAAMQADAPgFAJQAAgEgDgFg");
	this.shape_1.setTransform(13.7,30.9,2.873,2.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eardrumbone1, new cjs.Rectangle(2.2,2.2,23.2,57.4), null);


(lib.eardrum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"cycle":161});

	// timeline functions:
	this.frame_124 = function() {
		this.innerdrum.gotoAndPlay("fribillate");
	}
	this.frame_200 = function() {
		this.innerdrum.gotoAndPlay("fribillate");
	}
	this.frame_232 = function() {
		this.gotoAndPlay("cycle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(124).call(this.frame_124).wait(76).call(this.frame_200).wait(32).call(this.frame_232).wait(1));

	// inner drum
	this.innerdrum = new lib.innerdrum();
	this.innerdrum.parent = this;
	this.innerdrum.setTransform(-17.2,16.9,1,1,0,0,0,17.9,20.1);
	this.innerdrum.shadow = new cjs.Shadow("rgba(111,84,119,1)",0,0,10);

	this.timeline.addTween(cjs.Tween.get(this.innerdrum).wait(233));

	// drum outer ridge
	this.instance = new lib.drumouterridge();
	this.instance.parent = this;
	this.instance.setTransform(-16.6,16.6,1,1,0,0,0,20.9,23.2);
	this.instance.shadow = new cjs.Shadow("rgba(92,68,98,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(233));

	// back side of drum
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A581B1").s().p("ABuDIQhNgWgxg/Qgvg8gmhDQggg7gZg+IgOgkIAQgQQBJgmBGArQBDAqAtBCQAvBGAWBPQARA+gmAuQgOARgVACg");
	this.shape.setTransform(-16.2,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A581B1").s().p("AB3DQIgFABQgJAAgQgHIgegOIgEgDQgpgUgegiQgRgSgPgUQghgtgcgxIgNgWQgbg0gWg2IgCgEIgMggIgBgCIAPgOIACgCIAjgUQAPgHAWADQAnADAnAUQAsAXApAgQAZATAUAXQAbAeASAjQAZAsAEAvQACALgBAKQAAAjgVAmIgMASQgNATgSAJIgDgBg");
	this.shape_1.setTransform(-14.9,16.8);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A581B1").s().p("ABgDSQgYgMgJgCIgCgEQgugRgighQgSgRgQgVQgkgwgfgzIgNgXQgdg2gXg4IgCgFIgNgjIgBAAIAQgQIACgCQARgIASgQQAMgKAaAFQApAGAqARQAwAUAwAcQAeARAXAWQAgAcAVAkQAdAwgCAxQgBAMgCALQgGAfgXAsIgMAUQgMATgQARIgCADIgFADIgFACQgIAAgOgIg");
	this.shape_2.setTransform(-13.4,17);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A581B1").s().p("ABlDbQgdgPgFAAIgCgEQhMgWgyg/Qgvg8gmhDQggg7gZg+IgOgkIAQgQQARgJAUgYQAKgMAeAHQBcATBnAtQBQAjApBAQAqBBgYA/QgLAbgaAzIgrBOQgBADgFAAQgHAAgQgIg");
	this.shape_3.setTransform(-11.7,17.1);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A581B1").s().p("ABiDVQgagNgIgCIgCgEQgvgQgiggQgUgSgQgVQglgwgeg0IgOgXQgeg3gXg5IgCgFIgNgjIgBAAIAQgQIADgCQAQgIASgSQAMgKAbAFQApAHArAQQAwAUAzAaQAeARAZAVQAhAcAVAkQAfAygFAyQAAALgDAMQgHAegYAtIgMAVQgLATgQATIgDAEIgEAEQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgHAAgPgHg");
	this.shape_4.setTransform(-13,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A581B1").s().p("ABdDOIgggOIgDgEQgrgSgggiQgSgRgPgUQgjgvgdgzIgNgWQgdg0gWg4IgCgEIgNgiIAAgBIAPgPIACgCQARgIASgOQAOgIAYAEQAnAEApATQAuAVAtAeQAbASAWAXQAdAdAUAjQAaAuACAwQAAAMgBALQgDAhgXApIgLATQgNASgRAOIgCABIgFACIgDAAQgIAAgPgHg");
	this.shape_5.setTransform(-14.1,16.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A581B1").s().p("AB1DOIgFAAQgKgBgOgGIgfgPIgDgCQgpgVgdgiQgQgSgOgUQghgtgcgwIgMgWQgbgzgVg1IgCgEIgMggIgBgCIAOgOIADgCIAjgSQAPgGAVACQAmACAmAUQAsAZAnAgQAYAUATAYQAZAeASAiQAYArAGAvIACAVQABAkgUAkIgMASQgNASgUAIIgCgCg");
	this.shape_6.setTransform(-15.2,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},124).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},39).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(124).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).wait(51).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(125).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(126).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(127).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(11));

	// ear drum bone 3
	this.instance_1 = new lib.eardrumbone3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.7,11,1,1,0,0,0,2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125).to({regX:8.5,regY:6.1,scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.9,x:32.6,y:8.6},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:1,x:29.2,y:8.9},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.9,x:32.6,y:8.6},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:1,x:29.2,y:8.9},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.9,x:32.6,y:8.6},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:1,x:29.2,y:8.9},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.9,x:32.6,y:8.6},0).wait(1).to({scaleX:0.92,x:31.8,y:8.7},0).wait(1).to({scaleX:0.95,x:30.9,y:8.8},0).wait(1).to({scaleX:0.97,x:30},0).wait(1).to({scaleX:1,x:29.2,y:8.9},0).wait(1).to({regX:2,regY:8.2,x:22.7,y:11},0).wait(51).to({regX:8.5,regY:6.1,scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.9,x:32.6,y:8.6},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:1,x:29.2,y:8.9},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.9,x:32.6,y:8.6},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:1,x:29.2,y:8.9},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.9,x:32.6,y:8.6},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:1,x:29.2,y:8.9},0).wait(1).to({scaleX:0.97,x:30.3,y:8.8},0).wait(1).to({scaleX:0.93,x:31.5,y:8.7},0).wait(1).to({scaleX:0.9,x:32.6,y:8.6},0).wait(1).to({scaleX:0.92,x:31.8,y:8.7},0).wait(1).to({scaleX:0.95,x:30.9,y:8.8},0).wait(1).to({scaleX:0.97,x:30},0).wait(1).to({scaleX:1,x:29.2,y:8.9},0).wait(1).to({regX:2,regY:8.2,x:22.7,y:11},0).wait(7));

	// ear drum bone 2
	this.instance_2 = new lib.eardrumbone2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.8,-10.1,1,1,0,0,0,15,26.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({regX:11.8,regY:15.7,x:6.6,y:-21.2},0).wait(1).to({regX:15,regY:26.7,rotation:-1.6,x:11.7,y:-10.2},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-4.7,x:15.5,y:-10.5},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-1.6,x:11.7,y:-10.2},0).wait(1).to({rotation:0,x:9.8},0).wait(1).to({rotation:-1.6,x:11.7},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-4.7,x:15.5,y:-10.5},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-1.6,x:11.7,y:-10.2},0).wait(1).to({rotation:0,x:9.8},0).wait(1).to({rotation:-1.6,x:11.7},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-4.7,x:15.5,y:-10.5},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-1.6,x:11.7,y:-10.2},0).wait(1).to({rotation:0,x:9.8},0).wait(1).to({rotation:-1.6,x:11.7},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-4.7,x:15.5,y:-10.5},0).wait(1).to({rotation:-3.5,x:14,y:-10.3},0).wait(1).to({rotation:-2.3,x:12.7},0).wait(1).to({rotation:-1.2,x:11.3,y:-10.2},0).wait(1).to({rotation:0,x:9.8},0).wait(1).to({regY:26.8,y:-10.1},0).wait(50).to({regX:11.8,regY:15.7,x:6.6,y:-21.2},0).wait(1).to({regX:15,regY:26.7,rotation:-1.6,x:11.7,y:-10.2},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-4.7,x:15.5,y:-10.5},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-1.6,x:11.7,y:-10.2},0).wait(1).to({rotation:0,x:9.8},0).wait(1).to({rotation:-1.6,x:11.7},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-4.7,x:15.5,y:-10.5},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-1.6,x:11.7,y:-10.2},0).wait(1).to({rotation:0,x:9.8},0).wait(1).to({rotation:-1.6,x:11.7},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-4.7,x:15.5,y:-10.5},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-1.6,x:11.7,y:-10.2},0).wait(1).to({rotation:0,x:9.8},0).wait(1).to({rotation:-1.6,x:11.7},0).wait(1).to({rotation:-3.1,x:13.6,y:-10.3},0).wait(1).to({rotation:-4.7,x:15.5,y:-10.5},0).wait(1).to({rotation:-3.5,x:14,y:-10.3},0).wait(1).to({rotation:-2.3,x:12.7},0).wait(1).to({rotation:-1.2,x:11.3,y:-10.2},0).wait(1).to({rotation:0,x:9.8},0).wait(1).to({regY:26.8,y:-10.1},0).wait(7));

	// ear drum bone 1
	this.instance_3 = new lib.eardrumbone1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-7.8,-3.2,1,1,0,0,0,13.6,31.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(139,115,91,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125).to({regX:13.7,regY:30.9,rotation:-2.2,x:-6.7,y:-4.3},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.9},0).wait(1).to({rotation:-6.7,x:-4.5,y:-5.5},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:0,x:-7.7,y:-3.6},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-6.7,x:-4.5,y:-5.5},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:0,x:-7.7,y:-3.6},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-6.7,x:-4.5,y:-5.5},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:0,x:-7.7,y:-3.6},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-6.7,x:-4.5,y:-5.5},0).wait(1).to({rotation:-5.1,x:-5.4,y:-5},0).wait(1).to({rotation:-3.4,x:-6.1,y:-4.5},0).wait(1).to({rotation:-1.7,x:-6.9,y:-4},0).wait(1).to({rotation:0,x:-7.7,y:-3.6},0).wait(12).to({regX:13.6,regY:31.4,x:-7.8,y:-3.2},0).wait(40).to({regX:13.7,regY:30.9,rotation:-2.2,x:-6.7,y:-4.3},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.9},0).wait(1).to({rotation:-6.7,x:-4.5,y:-5.5},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:0,x:-7.7,y:-3.6},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-6.7,x:-4.5,y:-5.5},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:0,x:-7.7,y:-3.6},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-6.7,x:-4.5,y:-5.5},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:0,x:-7.7,y:-3.6},0).wait(1).to({rotation:-2.2,x:-6.7,y:-4.2},0).wait(1).to({rotation:-4.5,x:-5.6,y:-4.8},0).wait(1).to({rotation:-6.7,x:-4.5,y:-5.5},0).wait(1).to({rotation:-5.1,x:-5.4,y:-5},0).wait(1).to({rotation:-3.4,x:-6.1,y:-4.5},0).wait(1).to({rotation:-1.7,x:-6.9,y:-4},0).wait(1).to({rotation:0,x:-7.7,y:-3.6},0).wait(1).to({regX:13.6,regY:31.4,x:-7.8,y:-3.2},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.1,-37.4,86.7,90.2);


(lib.cochleabuttonpulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cochleacallout();
	this.instance.parent = this;
	this.instance.setTransform(114.5,87.9,1,1,0,0,0,114.5,87.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:87.8,y:87.8,alpha:0.042},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,230.7,177.3);


(lib.cochlea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmNLYQmdkdlOl0QCskPDtjfQAogmAnAlQE6EoE/EfQCLB+C6AKQDvAQB/jMQCgkCixjnQjBj7kACTQjsCJCODbQBvCqCphLQBDgdANhHQAeiZiXgRQgvgEgFApQgOB5BFhKIgUgkQAggmAmAcQAwAmgKA4QglDXizhqQkIigDVjcQByh2CWA0QFMBxhCFNQgkCzihBcQlCC4kSkxQjPjmBSksQBdlUFdhLQFVhKEWDdQCVB4BKCtQDJHYk6GWQjBD7ksBjQiPAwiVARQguAEgsAAQkCAAjaiWg");
	mask.setTransform(114.5,87.8);

	// waves
	this.instance = new lib.soundwavessmall();
	this.instance.parent = this;
	this.instance.setTransform(197.9,77.4,0.47,0.417,100.4,0,0,5.9,16);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance.cache(0,-2,16,36);

	this.instance_1 = new lib.soundwavessmall();
	this.instance_1.parent = this;
	this.instance_1.setTransform(195.8,88.1,0.47,0.417,107.4,0,0,5.8,15.9);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_1.cache(0,-2,16,36);

	this.instance_2 = new lib.soundwavessmall();
	this.instance_2.parent = this;
	this.instance_2.setTransform(192.1,98.5,0.446,0.396,120.1,0,0,5.9,15.7);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_2.cache(0,-2,16,36);

	this.instance_3 = new lib.soundwavessmall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(187.2,108.4,0.522,0.463,134,0,0,6,15.7);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_3.cache(0,-2,16,36);

	this.instance_4 = new lib.soundwavessmall();
	this.instance_4.parent = this;
	this.instance_4.setTransform(179.6,117.5,0.588,0.522,146,0,0,5.9,15.7);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_4.cache(0,-2,16,36);

	this.instance_5 = new lib.soundwavessmall();
	this.instance_5.parent = this;
	this.instance_5.setTransform(168.9,125.6,0.588,0.522,161,0,0,6,15.7);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_5.cache(0,-2,16,36);

	this.instance_6 = new lib.soundwavessmall();
	this.instance_6.parent = this;
	this.instance_6.setTransform(153.9,130.6,0.751,0.668,178.2,0,0,6,15.8);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_6.cache(0,-2,16,36);

	this.instance_7 = new lib.soundwavessmall();
	this.instance_7.parent = this;
	this.instance_7.setTransform(135.7,131.5,0.845,0.751,-162.3,0,0,6,15.8);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_7.cache(0,-2,16,36);

	this.instance_8 = new lib.soundwavessmall();
	this.instance_8.parent = this;
	this.instance_8.setTransform(118.7,127.3,0.845,0.751,-156.9,0,0,6.2,15.8);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_8.cache(0,-2,16,36);

	this.instance_9 = new lib.soundwavessmall();
	this.instance_9.parent = this;
	this.instance_9.setTransform(104.3,119.3,1,0.889,-139.4,0,0,6.4,15.8);
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_9.cache(0,-2,16,36);

	this.instance_10 = new lib.soundwavessmall();
	this.instance_10.parent = this;
	this.instance_10.setTransform(89.9,108.7,1,0.889,-139.4,0,0,6.2,15.8);
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_10.cache(0,-2,16,36);

	this.instance_11 = new lib.soundwavessmall();
	this.instance_11.parent = this;
	this.instance_11.setTransform(77.3,98.4,1,0.889,-133.5,0,0,6.1,15.8);
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_11.cache(0,-2,16,36);

	this.instance_12 = new lib.soundwavessmall();
	this.instance_12.parent = this;
	this.instance_12.setTransform(66.7,87.3,1,0.889,-133.5,0,0,6.2,15.8);
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_12.cache(0,-2,16,36);

	this.instance_13 = new lib.soundwavessmall();
	this.instance_13.parent = this;
	this.instance_13.setTransform(55,76.9,1,0.889,-133.5,0,0,6.2,15.8);
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_13.cache(0,-2,16,36);

	this.instance_14 = new lib.soundwavessmall();
	this.instance_14.parent = this;
	this.instance_14.setTransform(42.7,66.3,1,0.889,-133.5,0,0,6.2,15.6);
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_14.cache(0,-2,16,36);

	this.instance_15 = new lib.soundwavessmall();
	this.instance_15.parent = this;
	this.instance_15.setTransform(217.7,84.1,0.656,0.583,-87.9,0,0,6,15.7);
	this.instance_15.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_15.cache(0,-2,16,36);

	this.instance_16 = new lib.soundwavessmall();
	this.instance_16.parent = this;
	this.instance_16.setTransform(215.8,96.1,0.656,0.583,-74.9,0,0,5.8,15.8);
	this.instance_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_16.cache(0,-2,16,36);

	this.instance_17 = new lib.soundwavessmall();
	this.instance_17.parent = this;
	this.instance_17.setTransform(210.8,106.1,0.656,0.583,-67.5,0,0,6,15.7);
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_17.cache(0,-2,16,36);

	this.instance_18 = new lib.soundwavessmall();
	this.instance_18.parent = this;
	this.instance_18.setTransform(206,116.9,0.656,0.583,-58.3,0,0,6,15.7);
	this.instance_18.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_18.cache(0,-2,16,36);

	this.instance_19 = new lib.soundwavessmall();
	this.instance_19.parent = this;
	this.instance_19.setTransform(199.2,126.6,0.656,0.583,-51.6,0,0,6,15.8);
	this.instance_19.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_19.cache(0,-2,16,36);

	this.instance_20 = new lib.soundwavessmall();
	this.instance_20.parent = this;
	this.instance_20.setTransform(190.7,135.6,0.656,0.583,-44.2,0,0,6,15.7);
	this.instance_20.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_20.cache(0,-2,16,36);

	this.instance_21 = new lib.soundwavessmall();
	this.instance_21.parent = this;
	this.instance_21.setTransform(182.1,143.9,0.735,0.653,-36.5,0,0,6,15.7);
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_21.cache(0,-2,16,36);

	this.instance_22 = new lib.soundwavessmall();
	this.instance_22.parent = this;
	this.instance_22.setTransform(170.5,150.6,0.784,0.696,-26.3,0,0,5.9,15.8);
	this.instance_22.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_22.cache(0,-2,16,36);

	this.instance_23 = new lib.soundwavessmall();
	this.instance_23.parent = this;
	this.instance_23.setTransform(157.5,156.7,0.784,0.696,-18.6,0,0,5.9,15.8);
	this.instance_23.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_23.cache(0,-2,16,36);

	this.instance_24 = new lib.soundwavessmall();
	this.instance_24.parent = this;
	this.instance_24.setTransform(142.6,159.2,0.882,0.784,-9.6,0,0,6,15.9);
	this.instance_24.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_24.cache(0,-2,16,36);

	this.instance_25 = new lib.soundwavessmall();
	this.instance_25.parent = this;
	this.instance_25.setTransform(125.3,159.6,1,0.889,3.1,0,0,5.9,15.7);
	this.instance_25.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_25.cache(0,-2,16,36);

	this.instance_26 = new lib.soundwavessmall();
	this.instance_26.parent = this;
	this.instance_26.setTransform(108.3,156.4,1,0.889,16.1,0,0,5.8,15.9);
	this.instance_26.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_26.cache(0,-2,16,36);

	this.instance_27 = new lib.soundwavessmall();
	this.instance_27.parent = this;
	this.instance_27.setTransform(90.2,149.9,1,0.889,28.8,0,0,6,15.8);
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_27.cache(0,-2,16,36);

	this.instance_28 = new lib.soundwavessmall();
	this.instance_28.parent = this;
	this.instance_28.setTransform(74.8,140.5,1,0.889,37.2,0,0,6,15.8);
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_28.cache(0,-2,16,36);

	this.instance_29 = new lib.soundwavessmall();
	this.instance_29.parent = this;
	this.instance_29.setTransform(60.2,130.6,1,0.889,37.2,0,0,6,15.8);
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_29.cache(0,-2,16,36);

	this.instance_30 = new lib.soundwavessmall();
	this.instance_30.parent = this;
	this.instance_30.setTransform(48.1,120.9,1,0.889,37.2,0,0,6,15.6);
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_30.cache(0,-2,16,36);

	this.instance_31 = new lib.soundwavessmall();
	this.instance_31.parent = this;
	this.instance_31.setTransform(35.9,108.9,1,0.889,37.2,0,0,6,15.7);
	this.instance_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_31.cache(0,-2,16,36);

	this.instance_32 = new lib.soundwavessmall();
	this.instance_32.parent = this;
	this.instance_32.setTransform(24,97.9,1,0.889,37.2,0,0,6,15.7);
	this.instance_32.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_32.cache(0,-2,16,36);

	this.instance_33 = new lib.soundwavessmall();
	this.instance_33.parent = this;
	this.instance_33.setTransform(142,68.8,0.215,0.191,-89,0,0,5.2,15.9);
	this.instance_33.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_33.cache(0,-2,16,36);

	this.instance_34 = new lib.soundwavessmall();
	this.instance_34.parent = this;
	this.instance_34.setTransform(139.3,64.2,0.215,0.191,-89,0,0,5.2,15.8);
	this.instance_34.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_34.cache(0,-2,16,36);

	this.instance_35 = new lib.soundwavessmall();
	this.instance_35.parent = this;
	this.instance_35.setTransform(139.4,58.4,0.215,0.191,-59.8,0,0,5,16);
	this.instance_35.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_35.cache(0,-2,16,36);

	this.instance_36 = new lib.soundwavessmall();
	this.instance_36.parent = this;
	this.instance_36.setTransform(144.3,54.5,0.215,0.191,-22.3,0,0,5.5,16.1);
	this.instance_36.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_36.cache(0,-2,16,36);

	this.instance_37 = new lib.soundwavessmall();
	this.instance_37.parent = this;
	this.instance_37.setTransform(151,53.2,0.215,0.191,-2.6,0,0,5.6,16.3);
	this.instance_37.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_37.cache(0,-2,16,36);

	this.instance_38 = new lib.soundwavessmall();
	this.instance_38.parent = this;
	this.instance_38.setTransform(157,54.5,0.215,0.191,24.4,0,0,5.8,16.3);
	this.instance_38.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_38.cache(0,-2,16,36);

	this.instance_39 = new lib.soundwavessmall();
	this.instance_39.parent = this;
	this.instance_39.setTransform(161.8,57.8,0.215,0.191,55.9,0,0,6,16.2);
	this.instance_39.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_39.cache(0,-2,16,36);

	this.instance_40 = new lib.soundwavessmall();
	this.instance_40.parent = this;
	this.instance_40.setTransform(165.1,62.9,0.215,0.191,74.9,0,0,6,16.2);
	this.instance_40.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_40.cache(0,-2,16,36);

	this.instance_41 = new lib.soundwavessmall();
	this.instance_41.parent = this;
	this.instance_41.setTransform(166.9,69.4,0.237,0.211,74.9,0,0,5.9,16.2);
	this.instance_41.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_41.cache(0,-2,16,36);

	this.instance_42 = new lib.soundwavessmall();
	this.instance_42.parent = this;
	this.instance_42.setTransform(166.7,75.9,0.237,0.211,95.6,0,0,5.9,16.2);
	this.instance_42.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_42.cache(0,-2,16,36);

	this.instance_43 = new lib.soundwavessmall();
	this.instance_43.parent = this;
	this.instance_43.setTransform(164.2,81.9,0.237,0.211,126.1,0,0,5.7,16.4);
	this.instance_43.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_43.cache(0,-2,16,36);

	this.instance_44 = new lib.soundwavessmall();
	this.instance_44.parent = this;
	this.instance_44.setTransform(159.7,87.3,0.237,0.211,152.3,0,0,5.9,16.4);
	this.instance_44.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_44.cache(0,-2,16,36);

	this.instance_45 = new lib.soundwavessmall();
	this.instance_45.parent = this;
	this.instance_45.setTransform(154.4,90.4,0.237,0.211,152.3,0,0,6,16.4);
	this.instance_45.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_45.cache(0,-2,16,36);

	this.instance_46 = new lib.soundwavessmall();
	this.instance_46.parent = this;
	this.instance_46.setTransform(148.6,92.4,0.237,0.211,170.8,0,0,6,16.2);
	this.instance_46.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_46.cache(0,-2,16,36);

	this.instance_47 = new lib.soundwavessmall();
	this.instance_47.parent = this;
	this.instance_47.setTransform(142.2,92.5,0.237,0.211,-169,0,0,6,16.1);
	this.instance_47.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_47.cache(0,-2,16,36);

	this.instance_48 = new lib.soundwavessmall();
	this.instance_48.parent = this;
	this.instance_48.setTransform(136.8,90.8,0.237,0.211,-150.5,0,0,5.8,16.4);
	this.instance_48.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_48.cache(0,-2,16,36);

	this.instance_49 = new lib.soundwavessmall();
	this.instance_49.parent = this;
	this.instance_49.setTransform(131.9,88.3,0.237,0.211,-150.5,0,0,5.9,16.4);
	this.instance_49.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_49.cache(0,-2,16,36);

	this.instance_50 = new lib.soundwavessmall();
	this.instance_50.parent = this;
	this.instance_50.setTransform(126.7,85.8,0.312,0.277,-129.8,0,0,5.8,16.4);
	this.instance_50.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_50.cache(0,-2,16,36);

	this.instance_51 = new lib.soundwavessmall();
	this.instance_51.parent = this;
	this.instance_51.setTransform(122.1,81.3,0.312,0.277,-129.8,0,0,5.8,16.4);
	this.instance_51.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_51.cache(0,-2,16,36);

	this.instance_52 = new lib.soundwavessmall();
	this.instance_52.parent = this;
	this.instance_52.setTransform(117.8,75.2,0.312,0.277,-119.6,0,0,5.7,16.4);
	this.instance_52.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_52.cache(0,-2,16,36);

	this.instance_53 = new lib.soundwavessmall();
	this.instance_53.parent = this;
	this.instance_53.setTransform(115,67.9,0.312,0.277,-106.4,0,0,5.7,16.5);
	this.instance_53.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_53.cache(0,-2,16,36);

	this.instance_54 = new lib.soundwavessmall();
	this.instance_54.parent = this;
	this.instance_54.setTransform(114.1,61,0.312,0.277,-91.5,0,0,5.6,16.6);
	this.instance_54.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_54.cache(0,-2,16,36);

	this.instance_55 = new lib.soundwavessmall();
	this.instance_55.parent = this;
	this.instance_55.setTransform(115.3,53.1,0.312,0.277,-80.5,0,0,5.8,16.4);
	this.instance_55.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_55.cache(0,-2,16,36);

	this.instance_56 = new lib.soundwavessmall();
	this.instance_56.parent = this;
	this.instance_56.setTransform(117.7,45.3,0.355,0.316,-55.8,0,0,5.9,16.4);
	this.instance_56.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_56.cache(0,-2,16,36);

	this.instance_57 = new lib.soundwavessmall();
	this.instance_57.parent = this;
	this.instance_57.setTransform(121.7,38.8,0.355,0.316,-37.4,0,0,5.8,16.3);
	this.instance_57.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_57.cache(0,-2,16,36);

	this.instance_58 = new lib.soundwavessmall();
	this.instance_58.parent = this;
	this.instance_58.setTransform(129.1,33.5,0.391,0.348,-21.9,0,0,6,16.2);
	this.instance_58.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_58.cache(0,-2,16,36);

	this.instance_59 = new lib.soundwavessmall();
	this.instance_59.parent = this;
	this.instance_59.setTransform(136.2,29.4,0.391,0.348,-21.9,0,0,6,16.1);
	this.instance_59.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_59.cache(0,-2,16,36);

	this.instance_60 = new lib.soundwavessmall();
	this.instance_60.parent = this;
	this.instance_60.setTransform(144.1,27,0.391,0.348,-6.5,0,0,5.8,16.2);
	this.instance_60.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_60.cache(0,-2,16,36);

	this.instance_61 = new lib.soundwavessmall();
	this.instance_61.parent = this;
	this.instance_61.setTransform(153.5,25.7,0.431,0.383,14.8,0,0,5.7,16.4);
	this.instance_61.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_61.cache(0,-2,16,36);

	this.instance_62 = new lib.soundwavessmall();
	this.instance_62.parent = this;
	this.instance_62.setTransform(163.6,27,0.472,0.419,25.8,0,0,5.9,16.1);
	this.instance_62.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_62.cache(0,-2,16,36);

	this.instance_63 = new lib.soundwavessmall();
	this.instance_63.parent = this;
	this.instance_63.setTransform(172.1,30.7,0.472,0.419,35.5,0,0,5.9,16.2);
	this.instance_63.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_63.cache(0,-2,16,36);

	this.instance_64 = new lib.soundwavessmall();
	this.instance_64.parent = this;
	this.instance_64.setTransform(180.5,35.3,0.496,0.441,48.7,0,0,6,16.1);
	this.instance_64.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_64.cache(0,-2,16,36);

	this.instance_65 = new lib.soundwavessmall();
	this.instance_65.parent = this;
	this.instance_65.setTransform(187.7,41.8,0.496,0.441,59.2,0,0,5.9,16.1);
	this.instance_65.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_65.cache(0,-2,16,36);

	this.instance_66 = new lib.soundwavessmall();
	this.instance_66.parent = this;
	this.instance_66.setTransform(192.6,49.4,0.496,0.441,69.2,0,0,5.9,16.1);
	this.instance_66.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_66.cache(0,-2,16,36);

	this.instance_67 = new lib.soundwavessmall();
	this.instance_67.parent = this;
	this.instance_67.setTransform(195.3,56.9,0.496,0.441,74.9,0,0,5.8,16.2);
	this.instance_67.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_67.cache(0,-2,16,36);

	this.instance_68 = new lib.soundwavessmall();
	this.instance_68.parent = this;
	this.instance_68.setTransform(197.9,66.4,0.482,0.429,82.8,0,0,6,16.1);
	this.instance_68.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_68.cache(0,-2,16,36);

	this.instance_69 = new lib.soundwavessmall();
	this.instance_69.parent = this;
	this.instance_69.setTransform(197.7,76.3,0.482,0.429,94.5,0,0,6,16);
	this.instance_69.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_69.cache(0,-2,16,36);

	this.instance_70 = new lib.soundwavessmall();
	this.instance_70.parent = this;
	this.instance_70.setTransform(196,87.2,0.482,0.429,105.5,0,0,6,16.2);
	this.instance_70.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_70.cache(0,-2,16,36);

	this.instance_71 = new lib.soundwavessmall();
	this.instance_71.parent = this;
	this.instance_71.setTransform(192,97.5,0.482,0.429,116,0,0,6.2,15.9);
	this.instance_71.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_71.cache(0,-2,16,36);

	this.instance_72 = new lib.soundwavessmall();
	this.instance_72.parent = this;
	this.instance_72.setTransform(187.5,106.9,0.572,0.508,127.9,0,0,6.3,16);
	this.instance_72.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_72.cache(0,-2,16,36);

	this.instance_73 = new lib.soundwavessmall();
	this.instance_73.parent = this;
	this.instance_73.setTransform(180.3,116.2,0.609,0.541,141.4,0,0,6.2,15.8);
	this.instance_73.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_73.cache(0,-2,16,36);

	this.instance_74 = new lib.soundwavessmall();
	this.instance_74.parent = this;
	this.instance_74.setTransform(170.1,124.8,0.609,0.541,160.1,0,0,6.2,16);
	this.instance_74.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_74.cache(0,-2,16,36);

	this.instance_75 = new lib.soundwavessmall();
	this.instance_75.parent = this;
	this.instance_75.setTransform(155.5,130.4,0.745,0.662,176.3,0,0,6.2,15.7);
	this.instance_75.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_75.cache(0,-2,16,36);

	this.instance_76 = new lib.soundwavessmall();
	this.instance_76.parent = this;
	this.instance_76.setTransform(137.4,131.5,0.869,0.772,-167.2,0,0,6.4,15.6);
	this.instance_76.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_76.cache(0,-2,16,36);

	this.instance_77 = new lib.soundwavessmall();
	this.instance_77.parent = this;
	this.instance_77.setTransform(121,127.5,0.869,0.772,-160.5,0,0,6.2,15.7);
	this.instance_77.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_77.cache(0,-2,16,36);

	this.instance_78 = new lib.soundwavessmall();
	this.instance_78.parent = this;
	this.instance_78.setTransform(106.2,120.7,1,0.889,-140.8,0,0,6.2,15.7);
	this.instance_78.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_78.cache(0,-2,16,36);

	this.instance_79 = new lib.soundwavessmall();
	this.instance_79.parent = this;
	this.instance_79.setTransform(91.8,109.7,1,0.889,-140.8,0,0,6.2,15.6);
	this.instance_79.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_79.cache(0,-2,16,36);

	this.instance_80 = new lib.soundwavessmall();
	this.instance_80.parent = this;
	this.instance_80.setTransform(80.1,99.3,1,0.889,-140.8,0,0,6.1,15.7);
	this.instance_80.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_80.cache(0,-2,16,36);

	this.instance_81 = new lib.soundwavessmall();
	this.instance_81.parent = this;
	this.instance_81.setTransform(69.6,88.3,1,0.889,-140.8,0,0,6.1,15.7);
	this.instance_81.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_81.cache(0,-2,16,36);

	this.instance_82 = new lib.soundwavessmall();
	this.instance_82.parent = this;
	this.instance_82.setTransform(57.8,78.1,1,0.889,-140.8,0,0,6.1,15.8);
	this.instance_82.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_82.cache(0,-2,16,36);

	this.instance_83 = new lib.soundwavessmall();
	this.instance_83.parent = this;
	this.instance_83.setTransform(45.2,66.9,1,0.889,-140.8,0,0,6.1,15.7);
	this.instance_83.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_83.cache(0,-2,16,36);

	this.instance_84 = new lib.soundwavessmall();
	this.instance_84.parent = this;
	this.instance_84.setTransform(153.1,75.2,0.175,0.156,0,-46,-46.2,6.2,16.6);
	this.instance_84.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_84.cache(0,-2,16,36);

	this.instance_85 = new lib.soundwavessmall();
	this.instance_85.parent = this;
	this.instance_85.setTransform(147.2,79,0.226,0.201,0,1,0.8,6,15.8);
	this.instance_85.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_85.cache(0,-2,16,36);

	this.instance_86 = new lib.soundwavessmall();
	this.instance_86.parent = this;
	this.instance_86.setTransform(140.4,77.3,0.226,0.201,0,31.7,31.5,5.9,17);
	this.instance_86.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_86.cache(0,-2,16,36);

	this.instance_87 = new lib.soundwavessmall();
	this.instance_87.parent = this;
	this.instance_87.setTransform(133.9,73.6,0.226,0.201,0,39.8,39.6,6,17.1);
	this.instance_87.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_87.cache(0,-2,16,36);

	this.instance_88 = new lib.soundwavessmall();
	this.instance_88.parent = this;
	this.instance_88.setTransform(129.3,67.8,0.277,0.246,0,71.3,71.1,6,17.1);
	this.instance_88.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_88.cache(0,-2,16,36);

	this.instance_89 = new lib.soundwavessmall();
	this.instance_89.parent = this;
	this.instance_89.setTransform(127.8,59.6,0.313,0.278,0,102.5,102.3,5.7,17.4);
	this.instance_89.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_89.cache(0,-2,16,36);

	this.instance_90 = new lib.soundwavessmall();
	this.instance_90.parent = this;
	this.instance_90.setTransform(131.1,52.8,0.313,0.278,0,124.5,124.3,6,17.4);
	this.instance_90.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_90.cache(0,-2,16,36);

	this.instance_91 = new lib.soundwavessmall();
	this.instance_91.parent = this;
	this.instance_91.setTransform(135.5,47.2,0.313,0.278,0,137.2,137,5.9,17.5);
	this.instance_91.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_91.cache(0,-2,16,36);

	this.instance_92 = new lib.soundwavessmall();
	this.instance_92.parent = this;
	this.instance_92.setTransform(141.5,42.7,0.313,0.278,0,148,147.8,5.6,17.4);
	this.instance_92.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_92.cache(0,-2,16,36);

	this.instance_93 = new lib.soundwavessmall();
	this.instance_93.parent = this;
	this.instance_93.setTransform(148.9,40.6,0.313,0.278,0,-179.1,-179.3,6,17.6);
	this.instance_93.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_93.cache(0,-2,16,36);

	this.instance_94 = new lib.soundwavessmall();
	this.instance_94.parent = this;
	this.instance_94.setTransform(156,41.8,0.313,0.278,0,-162.1,-162.3,6,17.5);
	this.instance_94.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_94.cache(0,-2,16,36);

	this.instance_95 = new lib.soundwavessmall();
	this.instance_95.parent = this;
	this.instance_95.setTransform(162.9,44.4,0.313,0.278,0,-153.2,-153.4,5.7,17.6);
	this.instance_95.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_95.cache(0,-2,16,36);

	this.instance_96 = new lib.soundwavessmall();
	this.instance_96.parent = this;
	this.instance_96.setTransform(169.4,48.6,0.313,0.278,0,-141.4,-141.6,6.2,17.3);
	this.instance_96.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_96.cache(0,-2,16,36);

	this.instance_97 = new lib.soundwavessmall();
	this.instance_97.parent = this;
	this.instance_97.setTransform(175,54.6,0.313,0.278,0,-123,-123.2,6.1,17.4);
	this.instance_97.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_97.cache(0,-2,16,36);

	this.instance_98 = new lib.soundwavessmall();
	this.instance_98.parent = this;
	this.instance_98.setTransform(178.7,62.5,0.35,0.311,0,-104.5,-104.7,6.1,17.1);
	this.instance_98.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_98.cache(0,-2,16,36);

	this.instance_99 = new lib.soundwavessmall();
	this.instance_99.parent = this;
	this.instance_99.setTransform(179.4,70.2,0.366,0.325,0,-94.3,-94.5,5.9,17.4);
	this.instance_99.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_99.cache(0,-2,16,36);

	this.instance_100 = new lib.soundwavessmall();
	this.instance_100.parent = this;
	this.instance_100.setTransform(178.7,77.8,0.366,0.325,0,-82.5,-82.7,6.1,16.8);
	this.instance_100.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_100.cache(0,-2,16,36);

	this.instance_101 = new lib.soundwavessmall();
	this.instance_101.parent = this;
	this.instance_101.setTransform(177,85.9,0.366,0.325,0,-67.8,-68,5.9,16.7);
	this.instance_101.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_101.cache(0,-2,16,36);

	this.instance_102 = new lib.soundwavessmall();
	this.instance_102.parent = this;
	this.instance_102.setTransform(172.2,93.4,0.409,0.363,0,-51.1,-51.3,5.8,16.7);
	this.instance_102.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_102.cache(0,-2,16,36);

	this.instance_103 = new lib.soundwavessmall();
	this.instance_103.parent = this;
	this.instance_103.setTransform(165.7,99,0.444,0.394,0,-38.6,-38.8,6,16.8);
	this.instance_103.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_103.cache(0,-2,16,36);

	this.instance_104 = new lib.soundwavessmall();
	this.instance_104.parent = this;
	this.instance_104.setTransform(158,103.2,0.444,0.394,0,-24.7,-24.9,6,16.6);
	this.instance_104.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_104.cache(0,-2,16,36);

	this.instance_105 = new lib.soundwavessmall();
	this.instance_105.parent = this;
	this.instance_105.setTransform(149.3,106.6,0.444,0.394,0,-11.9,-12.1,5.9,16.6);
	this.instance_105.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_105.cache(0,-2,16,36);

	this.instance_106 = new lib.soundwavessmall();
	this.instance_106.parent = this;
	this.instance_106.setTransform(139.9,106.8,0.444,0.394,0,7,6.8,5.9,16.4);
	this.instance_106.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_106.cache(0,-2,16,36);

	this.instance_107 = new lib.soundwavessmall();
	this.instance_107.parent = this;
	this.instance_107.setTransform(130.1,105,0.444,0.395,0,24.7,24.5,5.9,16.3);
	this.instance_107.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_107.cache(0,-2,16,36);

	this.instance_108 = new lib.soundwavessmall();
	this.instance_108.parent = this;
	this.instance_108.setTransform(121.6,100.3,0.444,0.395,0,37.2,36.9,6,16.4);
	this.instance_108.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_108.cache(0,-2,16,36);

	this.instance_109 = new lib.soundwavessmall();
	this.instance_109.parent = this;
	this.instance_109.setTransform(114.5,94.4,0.444,0.395,0,51.6,51.4,6,16.4);
	this.instance_109.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_109.cache(0,-2,16,36);

	this.instance_110 = new lib.soundwavessmall();
	this.instance_110.parent = this;
	this.instance_110.setTransform(109.2,87.4,0.444,0.395,0,59.9,59.6,6,16.6);
	this.instance_110.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_110.cache(0,-2,16,36);

	this.instance_111 = new lib.soundwavessmall();
	this.instance_111.parent = this;
	this.instance_111.setTransform(104.3,79.8,0.444,0.395,0,72.6,72.3,6.2,16.4);
	this.instance_111.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_111.cache(0,-2,16,36);

	this.instance_112 = new lib.soundwavessmall();
	this.instance_112.parent = this;
	this.instance_112.setTransform(101.3,71.7,0.444,0.395,0,78.3,78.1,5.9,16.2);
	this.instance_112.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_112.cache(0,-2,16,36);

	this.instance_113 = new lib.soundwavessmall();
	this.instance_113.parent = this;
	this.instance_113.setTransform(99.8,62.9,0.444,0.395,0,89,88.8,6,16.2);
	this.instance_113.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_113.cache(0,-2,16,36);

	this.instance_114 = new lib.soundwavessmall();
	this.instance_114.parent = this;
	this.instance_114.setTransform(99.8,54.2,0.444,0.395,0,92,91.8,5.9,16.1);
	this.instance_114.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_114.cache(0,-2,16,36);

	this.instance_115 = new lib.soundwavessmall();
	this.instance_115.parent = this;
	this.instance_115.setTransform(101.9,45.5,0.444,0.395,0,103.5,103.3,6,16.2);
	this.instance_115.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_115.cache(0,-2,16,36);

	this.instance_116 = new lib.soundwavessmall();
	this.instance_116.parent = this;
	this.instance_116.setTransform(104.6,36.6,0.444,0.395,0,111.9,111.7,6,16.4);
	this.instance_116.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_116.cache(0,-2,16,36);

	this.instance_117 = new lib.soundwavessmall();
	this.instance_117.parent = this;
	this.instance_117.setTransform(109.3,29.1,0.444,0.395,0,123.6,123.4,5.9,16.1);
	this.instance_117.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_117.cache(0,-2,16,36);

	this.instance_118 = new lib.soundwavessmall();
	this.instance_118.parent = this;
	this.instance_118.setTransform(115.3,22.2,0.444,0.395,0,134.1,133.9,6,16.1);
	this.instance_118.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_118.cache(0,-2,16,36);

	this.instance_119 = new lib.soundwavessmall();
	this.instance_119.parent = this;
	this.instance_119.setTransform(122,16.3,0.444,0.395,0,147.1,146.9,6.2,16.1);
	this.instance_119.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_119.cache(0,-2,16,36);

	this.instance_120 = new lib.soundwavessmall();
	this.instance_120.parent = this;
	this.instance_120.setTransform(131.1,11.7,0.444,0.395,0,159,158.8,6.2,16.1);
	this.instance_120.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_120.cache(0,-2,16,36);

	this.instance_121 = new lib.soundwavessmall();
	this.instance_121.parent = this;
	this.instance_121.setTransform(140.9,10,0.444,0.395,0,175,174.8,6.2,16.1);
	this.instance_121.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_121.cache(0,-2,16,36);

	this.instance_122 = new lib.soundwavessmall();
	this.instance_122.parent = this;
	this.instance_122.setTransform(151.2,9.8,0.444,0.395,0,179.5,179.3,6.2,16.1);
	this.instance_122.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_122.cache(0,-2,16,36);

	this.instance_123 = new lib.soundwavessmall();
	this.instance_123.parent = this;
	this.instance_123.setTransform(160.5,10.3,0.444,0.395,0,-175.8,-176,6.1,15.9);
	this.instance_123.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_123.cache(0,-2,16,36);

	this.instance_124 = new lib.soundwavessmall();
	this.instance_124.parent = this;
	this.instance_124.setTransform(169.8,12.1,0.444,0.395,0,-168.1,-168.3,6.2,15.8);
	this.instance_124.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_124.cache(0,-2,16,36);

	this.instance_125 = new lib.soundwavessmall();
	this.instance_125.parent = this;
	this.instance_125.setTransform(178.3,15.6,0.444,0.395,0,-155.7,-155.9,6.2,15.8);
	this.instance_125.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_125.cache(0,-2,16,36);

	this.instance_126 = new lib.soundwavessmall();
	this.instance_126.parent = this;
	this.instance_126.setTransform(186.7,19.6,0.444,0.395,0,-155.7,-155.9,6.2,15.8);
	this.instance_126.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_126.cache(0,-2,16,36);

	this.instance_127 = new lib.soundwavessmall();
	this.instance_127.parent = this;
	this.instance_127.setTransform(195.3,24.9,0.444,0.395,-145.7,0,0,6.1,16);
	this.instance_127.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_127.cache(0,-2,16,36);

	this.instance_128 = new lib.soundwavessmall();
	this.instance_128.parent = this;
	this.instance_128.setTransform(202.1,32.2,0.444,0.395,-124,0,0,6.2,15.4);
	this.instance_128.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_128.cache(0,-2,16,36);

	this.instance_129 = new lib.soundwavessmall();
	this.instance_129.parent = this;
	this.instance_129.setTransform(208.5,39.7,0.444,0.395,-124,0,0,6,15.8);
	this.instance_129.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_129.cache(0,-2,16,36);

	this.instance_130 = new lib.soundwavessmall();
	this.instance_130.parent = this;
	this.instance_130.setTransform(212.8,49.3,0.444,0.395,-108.2,0,0,6.2,15.8);
	this.instance_130.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_130.cache(0,-2,16,36);

	this.instance_131 = new lib.soundwavessmall();
	this.instance_131.parent = this;
	this.instance_131.setTransform(215.4,58.9,0.502,0.446,-97.3,0,0,6.1,15.7);
	this.instance_131.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_131.cache(0,-2,16,36);

	this.instance_132 = new lib.soundwavessmall();
	this.instance_132.parent = this;
	this.instance_132.setTransform(218,70.2,0.575,0.511,-97.3,0,0,6.2,15.8);
	this.instance_132.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_132.cache(0,-2,16,36);

	this.instance_133 = new lib.soundwavessmall();
	this.instance_133.parent = this;
	this.instance_133.setTransform(217.6,82.1,0.649,0.577,-88.3,0,0,6.2,15.8);
	this.instance_133.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_133.cache(0,-2,16,36);

	this.instance_134 = new lib.soundwavessmall();
	this.instance_134.parent = this;
	this.instance_134.setTransform(216.1,93.9,0.649,0.577,-76.1,0,0,6.3,15.8);
	this.instance_134.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_134.cache(0,-2,16,36);

	this.instance_135 = new lib.soundwavessmall();
	this.instance_135.parent = this;
	this.instance_135.setTransform(211.7,104.1,0.649,0.577,-67.8,0,0,6.4,15.9);
	this.instance_135.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_135.cache(0,-2,16,36);

	this.instance_136 = new lib.soundwavessmall();
	this.instance_136.parent = this;
	this.instance_136.setTransform(206.8,115.1,0.649,0.577,-56.9,0,0,6.2,15.7);
	this.instance_136.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_136.cache(0,-2,16,36);

	this.instance_137 = new lib.soundwavessmall();
	this.instance_137.parent = this;
	this.instance_137.setTransform(200.8,125.1,0.649,0.577,-56.9,0,0,6,15.7);
	this.instance_137.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_137.cache(0,-2,16,36);

	this.instance_138 = new lib.soundwavessmall();
	this.instance_138.parent = this;
	this.instance_138.setTransform(192.3,134.1,0.649,0.577,-47.9,0,0,6,15.7);
	this.instance_138.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_138.cache(0,-2,16,36);

	this.instance_139 = new lib.soundwavessmall();
	this.instance_139.parent = this;
	this.instance_139.setTransform(184,142.4,0.731,0.65,-39.6,0,0,6,15.6);
	this.instance_139.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_139.cache(0,-2,16,36);

	this.instance_140 = new lib.soundwavessmall();
	this.instance_140.parent = this;
	this.instance_140.setTransform(172.9,149.6,0.784,0.696,-28.9,0,0,6.2,15.6);
	this.instance_140.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_140.cache(0,-2,16,36);

	this.instance_141 = new lib.soundwavessmall();
	this.instance_141.parent = this;
	this.instance_141.setTransform(160,155.6,0.784,0.696,-19.4,0,0,6,15.6);
	this.instance_141.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_141.cache(0,-2,16,36);

	this.instance_142 = new lib.soundwavessmall();
	this.instance_142.parent = this;
	this.instance_142.setTransform(145.2,158.2,0.836,0.743,-11.2,0,0,6,15.6);
	this.instance_142.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_142.cache(0,-2,16,36);

	this.instance_143 = new lib.soundwavessmall();
	this.instance_143.parent = this;
	this.instance_143.setTransform(128,159.7,0.95,0.844,-1.3,0,0,6.1,15.5);
	this.instance_143.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_143.cache(0,-2,16,36);

	this.instance_144 = new lib.soundwavessmall();
	this.instance_144.parent = this;
	this.instance_144.setTransform(110.6,158.4,1,0.889,7.2,0,0,6.1,15.8);
	this.instance_144.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_144.cache(0,-2,16,36);

	this.instance_145 = new lib.soundwavessmall();
	this.instance_145.parent = this;
	this.instance_145.setTransform(92.1,152.3,1.001,0.889,0,22.2,25.2,6.1,16);
	this.instance_145.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_145.cache(0,-2,16,36);

	this.instance_146 = new lib.soundwavessmall();
	this.instance_146.parent = this;
	this.instance_146.setTransform(77,141.9,1,0.889,37.2,0,0,6.2,15.7);
	this.instance_146.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_146.cache(0,-2,16,36);

	this.instance_147 = new lib.soundwavessmall();
	this.instance_147.parent = this;
	this.instance_147.setTransform(62.2,132,1,0.889,37.2,0,0,6,15.8);
	this.instance_147.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_147.cache(0,-2,16,36);

	this.instance_148 = new lib.soundwavessmall();
	this.instance_148.parent = this;
	this.instance_148.setTransform(50.4,122.5,1,0.889,37.2,0,0,6,15.7);
	this.instance_148.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_148.cache(0,-2,16,36);

	this.instance_149 = new lib.soundwavessmall();
	this.instance_149.parent = this;
	this.instance_149.setTransform(38.6,110.5,1,0.889,37.2,0,0,6,15.7);
	this.instance_149.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_149.cache(0,-2,16,36);

	this.instance_150 = new lib.soundwavessmall();
	this.instance_150.parent = this;
	this.instance_150.setTransform(25.9,99.9,1,0.889,37.2,0,0,6,15.7);
	this.instance_150.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_150.cache(0,-2,16,36);

	this.instance_151 = new lib.soundwavessmall();
	this.instance_151.parent = this;
	this.instance_151.setTransform(15.7,89.4,1,0.889,37.2,0,0,6,15.6);
	this.instance_151.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 135, 179, 0), new cjs.BlurFilter(2, 2, 3)];
	this.instance_151.cache(0,-2,16,36);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101,this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106,this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.instance_118,this.instance_119,this.instance_120,this.instance_121,this.instance_122,this.instance_123,this.instance_124,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148,this.instance_149,this.instance_150,this.instance_151];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// middle ridge
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F1F52").s().p("AlhHyQkiivjSkDIADgCIAQgPIAEADQAUAYAmAmQApApArAoIBqBpQBMBJAMABQBEA8BOAvQE5C8Fdg+QCYgcBwhqQErkbg2mSQgZi5iWhnQluj8k8EPQg7AygUBPQhqGcGSBkQBSAUBHgtQDyiaicjfQhDhhhwAfQjRA5CGCQQAhAjAvgOQAngLANgoQgPBbhbghQiWg2BdiLQBOhyCHA2QB1AuAXB5QAwEBj/BMQivA0h8iEQjgjrCSknQBHiQCegmIgdADQEmg/EACiQBoBCA1BxQBsFPi0EzQglA/grA6IAJgHQimDHj+AbQgyAFgxAAQkKAAjuiQg");
	this.shape.setTransform(123.1,81.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.instance_152 = new lib.cochleabg();
	this.instance_152.parent = this;
	this.instance_152.setTransform(114.5,87.9,1,1,0,0,0,114.5,87.9);
	this.instance_152.shadow = new cjs.Shadow("rgba(51,51,102,1)",0,0,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_152).wait(1));

}).prototype = getMCSymbolPrototype(lib.cochlea, new cjs.Rectangle(-21.8,-21.8,275,222), null);


(lib.circlecallout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(76.5,77.5,2.873,2.873,0,0,0,27.2,27.2);
	this.instance.alpha = 0.391;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC3300").ss(2,0,0,2.4).p("AL9AAQAAE9jgDfQjhDgk8AAQk7AAjhjgQjgjfAAk9QAAk8DgjgQDfjfE9AAQE8AADhDfQDgDgAAE8g");
	this.shape.setTransform(76.7,76.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circlecallout, new cjs.Rectangle(-0.8,-1,155,154.9), null);


(lib.clickZoom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AheBtQgLgLAAgTQAAgSALgMQAKgLATABQATgBAKALQAMAMAAASQAAATgMALQgKALgTABQgTgBgKgLgAhQA/QgEAHABAJQgBAKAEAHQAFAHAKABQALgBAEgHQAEgHAAgKQAAgJgEgHQgEgIgLAAQgKAAgFAIgAi5BtQgMgLAAgTQAAgSAMgMQAKgLATABQASgBALALQALAMAAASQAAATgLALQgLALgSABQgTgBgKgLgAirA/QgFAHABAJQgBAKAFAHQAEAHALABQAKgBAFgHQAEgHgBgKQABgJgEgHQgFgIgKAAQgLAAgEAIgAEBB2IAAgrQAAgUgPABQgQgBAAAXIAAAoIgWAAIAAhOIAVAAIAAALIAAAAQAJgNAPABQARAAAGAIQAGAJAAAOIAAAwgACnB2IAAhOIAVAAIAABOgABXB2IAAgsQAAgIgCgFQgDgGgIABQgJAAgDAFQgCAHgBAHIAAArIgVAAIAAgrQABgIgDgGQgBgFgKAAQgEgBgFADQgEAEgBAMIAAAsIgVAAIAAhOIATAAIAAALIABAAQAJgMAOAAQAQgBAIANQACgFAHgEQAGgDAHAAQANgBAIAHQAIAGAAAPIAAA0gAkVB2IAAgQIAogtIglAAIAAgRIBBAAIAAARIgoAtIArAAIAAAQgACnAdIAAgSIAVAAIAAASgADKgTQgLgLAAgTQAAgSALgLQAKgLASAAQATAAALALQALALAAASQAAATgLALQgLALgTABQgSgBgKgLgADYhCQgEAHAAAKQAAAKAEAHQAEAHAKABQALgBAFgHQADgHAAgKQAAgKgDgHQgFgHgLgBQgKABgEAHgAhBgTQgLgLAAgSQAAgSAKgLQALgMASAAQAPAAAKAGQALAIABAPIgVAAQgCgNgOgBQgKABgDAIQgFAHAAAJQAAAKAFAHQADAHAKABQAPgBACgPIAUAAQgBAQgLAIQgKAIgPABQgSgBgKgLgAj8gYQgOgPABgYQgBgZAOgPQAOgQAagBQASABAMAJQANALADASIgYAAQgBgIgGgGQgHgEgIgBQgRABgGALQgHAKAAAPQAAANAHALQAGALARAAQAKABAGgHQAGgHABgKIAYAAQgCAUgNALQgNAMgTABQgagBgOgQgACZgNQgHgDAAgMIAAgtIgOAAIAAgOIAOAAIAAgYIAVAAIAAAYIAQAAIAAAOIgQAAIAAAmQgBAKAKgBQADABAEgBIAAAQIgNABIgCAAQgJAAgGgEgABBgKIgVgjIgJAIIAAAbIgVAAIAAhrIAVAAIAAA5IAbgbIAZAAIgcAcIAgAxgAhvgKIAAhNIAVAAIAABNgAiWgKIAAhrIAVAAIAABrgAhvhkIAAgRIAVAAIAAARg");
	this.shape.setTransform(27.8,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("AEPgxQAAATgLALQgLALgSAAQgTAAgKgLQgLgLAAgTQAAgTALgLQAKgLATAAQASAAALALQALALAAATgADnhKQgLABgEAHQgEAHAAAKQAAAKAEAHQAEAHALABQALgBAEgHQAEgHAAgKQAAgKgEgHQgEgHgLgBgACnhvIAAAXIAPAAIAAAPIgPAAIAAAmQgBAKAKgBQAEAAACgBIAAARQgFABgHAAQgKAAgHgEQgHgDAAgMIAAgtIgOAAIAAgPIAOAAIAAgXgAC8AcIgVAAIAAgRIAVAAgADhApIAAAKIABAAQAJgNAOAAQARAAAGAJQAGAJAAAPIAAAvIgVAAIAAgrQAAgUgPABQgQgCAAAYIAAAoIgVAAIAAhNgAC8ApIAABNIgVAAIAAhNgAA6g8IAhAyIgaAAIgVgjIgIAIIAAAbIgWAAIAAhrIAWAAIAAA5IAagcIAZAAgAgzhBQgEAHAAAJQAAAJAEAIQAEAHAKABQAPgBACgPIAUAAQgCAQgKAIQgKAIgPAAQgSAAgKgLQgLgLAAgSQAAgSAKgMQAKgLATgBQAPAAAKAHQAKAIACAPIgVAAQgCgNgOgBQgKABgEAIgAAJApIAAAKIABAAQAIgNAPAAQAQAAAIANQACgFAHgDQAGgFAIAAQAMAAAIAGQAIAHAAAPIAAA0IgVAAIAAgsQAAgIgCgFQgDgFgJAAQgIAAgDAFQgDAHAAAHIAAArIgVAAIAAgrQAAgHgCgHQgBgFgKAAQgEgBgFADQgFAEAAALIAAAtIgVAAIAAhNgAgZBQQAAASgLALQgLALgSABQgTgBgKgLQgLgLAAgSQAAgTALgMQAKgLATAAQASAAALALQALAMAAATgAguBQQAAgKgEgHQgEgIgLgBQgLABgEAIQgEAHAAAKQAAAJAEAHQAEAHALABQALgBAEgHQAEgHAAgJgAiBh1IAABrIgWAAIAAhrgAhahYIAABOIgWAAIAAhOgAhwhkIAAgRIAWAAIAAARgAjVhkQgQABgGAKQgHALAAAPQAAANAHALQAGALAQAAQALAAAGgGQAGgHABgLIAXAAQgCAVgMALQgNAMgUAAQgZAAgOgQQgOgQAAgXQAAgZAOgPQAOgQAZgBQASAAANAKQANAKACATIgXAAQgBgIgGgGQgHgFgJAAgAj5BlIArAAIAAARIhHAAIAAgRIAogsIglAAIAAgQIBBAAIAAAQgAi6AxQALgLASAAQATAAALALQALAMAAATQAAASgLALQgLALgTABQgSgBgLgLQgLgLAAgSQAAgTALgMgAidA2QgKABgEAIQgFAHABAKQgBAJAFAHQAEAHAKABQALgBAEgHQAEgHAAgJQAAgKgEgHQgEgIgLgBg");
	this.shape_1.setTransform(27.8,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AheBtQgLgLAAgTQAAgSALgMQAKgLATABQATgBAKALQAMAMAAASQAAATgMALQgKALgTABQgTgBgKgLgAhQA/QgEAHABAJQgBAKAEAHQAFAHAKABQALgBAEgHQAEgHAAgKQAAgJgEgHQgEgIgLAAQgKAAgFAIgAi5BtQgMgLAAgTQAAgSAMgMQAKgLATABQASgBALALQALAMAAASQAAATgLALQgLALgSABQgTgBgKgLgAirA/QgFAHABAJQgBAKAFAHQAEAHALABQAKgBAFgHQAEgHgBgKQABgJgEgHQgFgIgKAAQgLAAgEAIgAEBB2IAAgrQAAgUgPABQgQgBAAAXIAAAoIgWAAIAAhOIAVAAIAAALIAAAAQAJgNAPABQARAAAGAIQAGAJAAAOIAAAwgACnB2IAAhOIAVAAIAABOgABXB2IAAgsQAAgIgCgFQgDgGgIABQgJAAgDAFQgCAHgBAHIAAArIgVAAIAAgrQABgIgDgGQgBgFgKAAQgEgBgFADQgEAEgBAMIAAAsIgVAAIAAhOIATAAIAAALIABAAQAJgMAOAAQAQgBAIANQACgFAHgEQAGgDAHAAQANgBAIAHQAIAGAAAPIAAA0gAkVB2IAAgQIAogtIglAAIAAgRIBBAAIAAARIgoAtIArAAIAAAQgACnAdIAAgSIAVAAIAAASgADKgTQgLgLAAgTQAAgSALgLQAKgLASAAQATAAALALQALALAAASQAAATgLALQgLALgTABQgSgBgKgLgADYhCQgEAHAAAKQAAAKAEAHQAEAHAKABQALgBAFgHQADgHAAgKQAAgKgDgHQgFgHgLgBQgKABgEAHgAhBgTQgLgLAAgSQAAgSAKgLQALgMASAAQAPAAAKAGQALAIABAPIgVAAQgCgNgOgBQgKABgDAIQgFAHAAAJQAAAKAFAHQADAHAKABQAPgBACgPIAUAAQgBAQgLAIQgKAIgPABQgSgBgKgLgAj8gYQgOgPABgYQgBgZAOgPQAOgQAagBQASABAMAJQANALADASIgYAAQgBgIgGgGQgHgEgIgBQgRABgGALQgHAKAAAPQAAANAHALQAGALARAAQAKABAGgHQAGgHABgKIAYAAQgCAUgNALQgNAMgTABQgagBgOgQgACZgNQgHgDAAgMIAAgtIgOAAIAAgOIAOAAIAAgYIAVAAIAAAYIAQAAIAAAOIgQAAIAAAmQgBAKAKgBQADABAEgBIAAAQIgNABIgCAAQgJAAgGgEgABBgKIgVgjIgJAIIAAAbIgVAAIAAhrIAVAAIAAA5IAbgbIAZAAIgcAcIAgAxgAhvgKIAAhNIAVAAIAABNgAiWgKIAAhrIAVAAIAABrgAhvhkIAAgRIAVAAIAAARg");
	this.shape_2.setTransform(27.8,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AheBtQgLgLAAgTQAAgSALgMQAKgLATABQATgBAKALQAMAMAAASQAAATgMALQgKALgTABQgTgBgKgLgAhQA/QgEAHABAJQgBAKAEAHQAFAHAKABQALgBAEgHQAEgHAAgKQAAgJgEgHQgEgIgLAAQgKAAgFAIgAi5BtQgMgLAAgTQAAgSAMgMQAKgLATABQASgBALALQALAMAAASQAAATgLALQgLALgSABQgTgBgKgLgAirA/QgFAHABAJQgBAKAFAHQAEAHALABQAKgBAFgHQAEgHgBgKQABgJgEgHQgFgIgKAAQgLAAgEAIgAEBB2IAAgrQAAgUgPABQgQgBAAAXIAAAoIgWAAIAAhOIAVAAIAAALIAAAAQAJgNAPABQARAAAGAIQAGAJAAAOIAAAwgACnB2IAAhOIAVAAIAABOgABXB2IAAgsQAAgIgCgFQgDgGgIABQgJAAgDAFQgCAHgBAHIAAArIgVAAIAAgrQABgIgDgGQgBgFgKAAQgEgBgFADQgEAEgBAMIAAAsIgVAAIAAhOIATAAIAAALIABAAQAJgMAOAAQAQgBAIANQACgFAHgEQAGgDAHAAQANgBAIAHQAIAGAAAPIAAA0gAkVB2IAAgQIAogtIglAAIAAgRIBBAAIAAARIgoAtIArAAIAAAQgACnAdIAAgSIAVAAIAAASgADKgTQgLgLAAgTQAAgSALgLQAKgLASAAQATAAALALQALALAAASQAAATgLALQgLALgTABQgSgBgKgLgADYhCQgEAHAAAKQAAAKAEAHQAEAHAKABQALgBAFgHQADgHAAgKQAAgKgDgHQgFgHgLgBQgKABgEAHgAhBgTQgLgLAAgSQAAgSAKgLQALgMASAAQAPAAAKAGQALAIABAPIgVAAQgCgNgOgBQgKABgDAIQgFAHAAAJQAAAKAFAHQADAHAKABQAPgBACgPIAUAAQgBAQgLAIQgKAIgPABQgSgBgKgLgAj8gYQgOgPABgYQgBgZAOgPQAOgQAagBQASABAMAJQANALADASIgYAAQgBgIgGgGQgHgEgIgBQgRABgGALQgHAKAAAPQAAANAHALQAGALARAAQAKABAGgHQAGgHABgKIAYAAQgCAUgNALQgNAMgTABQgagBgOgQgACZgNQgHgDAAgMIAAgtIgOAAIAAgOIAOAAIAAgYIAVAAIAAAYIAQAAIAAAOIgQAAIAAAmQgBAKAKgBQADABAEgBIAAAQIgNABIgCAAQgJAAgGgEgABBgKIgVgjIgJAIIAAAbIgVAAIAAhrIAVAAIAAA5IAbgbIAZAAIgcAcIAgAxgAhvgKIAAhNIAVAAIAABNgAiWgKIAAhrIAVAAIAABrgAhvhkIAAgRIAVAAIAAARg");
	this.shape_3.setTransform(27.8,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BF812E").ss(4,1,1).p("AEPgxQAAATgLALQgLALgSAAQgTAAgKgLQgLgLAAgTQAAgTALgLQAKgLATAAQASAAALALQALALAAATgADnhKQgLABgEAHQgEAHAAAKQAAAKAEAHQAEAHALABQALgBAEgHQAEgHAAgKQAAgKgEgHQgEgHgLgBgACnhYIAPAAIAAAPIgPAAIAAAmQgBAKAKgBQAEAAACgBIAAARQgFABgHAAQgKAAgHgEQgHgDAAgMIAAgtIgOAAIAAgPIAOAAIAAgXIAVAAgAC8AcIgVAAIAAgRIAVAAgADhApIAAAKIABAAQAJgNAOAAQARAAAGAJQAGAJAAAPIAAAvIgVAAIAAgrQAAgUgPABQgQgCAAAYIAAAoIgVAAIAAhNgAC8ApIAABNIgVAAIAAhNgAA6g8IAhAyIgaAAIgVgjIgIAIIAAAbIgWAAIAAhrIAWAAIAAA5IAagcIAZAAgAgzhBQgEAHAAAJQAAAJAEAIQAEAHAKABQAPgBACgPIAUAAQgCAQgKAIQgKAIgPAAQgSAAgKgLQgLgLAAgSQAAgSAKgMQAKgLATgBQAPAAAKAHQAKAIACAPIgVAAQgCgNgOgBQgKABgEAIgAAJApIAAAKIABAAQAIgNAPAAQAQAAAIANQACgFAHgDQAGgFAIAAQAMAAAIAGQAIAHAAAPIAAA0IgVAAIAAgsQAAgIgCgFQgDgFgJAAQgIAAgDAFQgDAHAAAHIAAArIgVAAIAAgrQAAgHgCgHQgBgFgKAAQgEgBgFADQgFAEAAALIAAAtIgVAAIAAhNgAgZBQQAAASgLALQgLALgSABQgTgBgKgLQgLgLAAgSQAAgTALgMQAKgLATAAQASAAALALQALAMAAATgAguBQQAAgKgEgHQgEgIgLgBQgLABgEAIQgEAHAAAKQAAAJAEAHQAEAHALABQALgBAEgHQAEgHAAgJgAiBh1IAABrIgWAAIAAhrgAhahYIAABOIgWAAIAAhOgAhwhkIAAgRIAWAAIAAARgAjVhkQgQABgGAKQgHALAAAPQAAANAHALQAGALAQAAQALAAAGgGQAGgHABgLIAXAAQgCAVgMALQgNAMgUAAQgZAAgOgQQgOgQAAgXQAAgZAOgPQAOgQAZgBQASAAANAKQANAKACATIgXAAQgBgIgGgGQgHgFgJAAgAj5BlIArAAIAAARIhHAAIAAgRIAogsIglAAIAAgQIBBAAIAAAQgAi6AxQALgLASAAQATAAALALQALAMAAATQAAASgLALQgLALgTABQgSgBgLgLQgLgLAAgSQAAgTALgMgAidA2QgKABgEAIQgFAHABAKQgBAJAFAHQAEAHAKABQALgBAEgHQAEgHAAgJQAAgKgEgHQgEgIgLgBg");
	this.shape_4.setTransform(27.8,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmXDQIAAmfIMvAAIAAGfg");
	this.shape_5.setTransform(28.7,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},2).wait(1));

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CC3300").ss(2,0,0,2.4).p("AIdocQDgDgAAE8QAAE9jgDfQjhDgk8AAQk8AAjhjgQjfjfAAk9QAAk8DfjgQDgjfE9AAQE8AADhDfg");
	this.shape_6.setTransform(28.9,15.5);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 2
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(28.6,16.6,2.873,2.873,0,0,0,27.2,27.2);
	this.instance.alpha = 0.391;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,59.6,28.1);


(lib.btnzoomout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMAzIgJgBQgDAAgEgCQgDgCgCgEQgCgDAAgGIAAgtIgNAAIAAgOIANAAIAAgYIAUAAIAAAYIAQAAIAAAOIgQAAIAAAlQAAAGACACQACABAFAAIAEAAIADAAIAAAQIgGABg");
	this.shape.setTransform(9.6,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAlQgFgCgDgEQgEgEgBgGQgCgGABgHIAAgvIAVAAIAAArIAAAIIADAGQADAFAIAAQAHAAAEgFQAEgFAAgMIAAgoIAVAAIAABNIgUAAIAAgLIAAAAIgFAGIgGAEQgFADgHAAQgJAAgFgDg");
	this.shape_1.setTransform(2.7,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAmQgHgDgFgFQgFgGgDgHQgDgIAAgJQAAgIADgIQADgHAFgGQAFgFAHgDQAIgDAIAAQAGAAALADQAHADAFAFQAGAGACAHQADALAAAFQgBAMgCAFQgCAHgGAGQgFAFgHADQgIADgJAAQgIAAgIgDgAgIgWQgEACgCAEIgDAIIgBAIIABAJIADAIQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgDABgFIABgJIgBgIQgBgFgCgDQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_2.setTransform(-6.4,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmAoIAAgrIAAgIQAAgDgCgDIgEgEQgCgBgFAAQgEAAgDACIgFAEIgCAGIAAAIIAAAqIgUAAIAAgrIgBgHIgBgGQgBgDgDgBQgCgCgFAAIgEABIgFACIgEAGQgCADAAAGIAAAsIgVAAIAAhNIAUAAIAAALQAFgGAGgEQAFgDAIAAQAHAAAGADQAGADADAHQADgFAGgEQAGgEAIAAQAGAAAFACQAGABADADQAEAEACAFQACAFAAAIIAAAzg");
	this.shape_3.setTransform(-21.9,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAmQgHgDgFgFQgFgGgDgHQgDgIAAgJQAAgIADgIQADgHAFgGQAFgFAHgDQAIgDAIAAQAGAAALADQAHADAFAFQAGAGACAHQADALAAAFQgBAMgCAFQgCAHgGAGQgFAFgHADQgIADgJAAQgIAAgIgDgAgIgWQgEACgCAEIgDAIIgBAIIABAJIADAIQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgDABgFIABgJIgBgIQgBgFgCgDQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_4.setTransform(-33.2,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAmQgHgDgFgFQgFgGgDgHQgDgIAAgJQAAgIADgIQADgHAFgGQAFgFAHgDQAIgDAIAAQAGAAALADQAHADAFAFQAGAGACAHQADALAAAFQgBAMgCAFQgCAHgGAGQgFAFgHADQgIADgJAAQgIAAgIgDgAgIgWQgEACgCAEIgDAIIgBAIIABAJIADAIQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgDABgFIABgJIgBgIQgBgFgCgDQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_5.setTransform(-42.4,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsA2IAAgTIA4hEIg0AAIAAgTIBUAAIAAASIg5BDIA6AAIAAAVg");
	this.shape_6.setTransform(-51.8,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,0,0,4).p("AAfAfQgNANgSAAQgRAAgNgNQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANg");
	this.shape_7.setTransform(23.5,7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAEAkIgmg7IAQgNIA1AvQAAAIgEAHQgGALgOAAIgHgBg");
	this.shape_8.setTransform(29.3,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.instance = new lib.buttonupbg();
	this.instance.parent = this;
	this.instance.setTransform(-12.2,10.5,1.232,1,0,0,0,43.5,10.5);
	this.instance.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 76.5, 127.5, 0)];
	this.instance.cache(-2,-2,91,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.8,-1.2,107.2,22.2);


(lib.buttoncircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.circlecallout();
	this.instance.parent = this;
	this.instance.setTransform(76.7,76.4,1,1,0,0,0,76.7,76.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-1,155,154.9);


(lib.bgwhole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPBhQAAgJAJgEIAdgLQhDgggTgMQgdgSAAgaQAAgwBDgcQAZgLAUgBQAUgBAAAJQAAAIg0AUQg1AUAAAcQAAATBOAiQBPAhAAAUQAAAIgBADQgDAFgLAAIgPgHQgoAAgOAEQgHAEgFAAQgLAAAAgHg");
	this.shape.setTransform(34.9,-15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjoAuQgBgEgBgEQAAgRAXggQAcgqAjAAQAbAAAhAQQAiAPAIAAIAygNQAzgPAdAAQAMAAA8AZIBOAeQgCADgIAAQgVAAg6gVQg6gWgDAAQgaAAg3AWIg4AWQgUAAgbgPQgagPgIAAQgnAAgSAlIgNAaQgGAMgIAAQgKAAgEgIg");
	this.shape_1.setTransform(59.5,-28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABoALQiWgWhXgbIB6AWIB5ATQAJABAIANQAHALAAALQgRgbgNgBg");
	this.shape_2.setTransform(44.8,38.8,2.873,2.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0ECBE").s().p("AgDASQgvgSgGgNQgEgHACgGQACgHALABQAWAZASALQAcAVAlAHQgEABgFAAQgSAAgkgPg");
	this.shape_3.setTransform(150.1,27.8,2.873,2.873);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0EBB8").s().p("AgRAKIgJgBIAMgBQALgCAFgCIAYgNIgKAJQgIAFgJADQgEACgIAAIgEAAg");
	this.shape_4.setTransform(180.1,23.4,2.873,2.873);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFCD1").s().p("AAHgJQgKgKgQAJQATgRAOAPQANANgPATQAHgUgMgJg");
	this.shape_5.setTransform(181,3.5,2.873,2.873);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2D090").s().p("AgiCAQgUgEgOgGQgUgIgagQQgXgPgHgMIgBgKQgBgEABgEQACgJALgEQARgHADgCIAIAOQALARALALQAfAeAXAHQAkAJAZgHQAQgEATgLQAUgLALgMQANgPAKgRQAMgUAAgNQACgUgBgIQgBgRgHgNQgTgigcgPQgTgLgNgDQgUgFgYAIQgXAHgQAPQgJAJgOAXQgRAdAIAhQADANADAGIAPATQAUAYAaAFQAMADARgFQAPgDAJgGQAUgPAIgRQAGgLgCgUQgCgVgIgKQgSgXgXgCQgigEgSAfQgKAQADAMQACAIAJAIQANAMAOgIQAHgFAAgJQAAgJgGAAQgEgBAAgEIABgEIADgDQAFgDAIgCQARgHALAPQAGAJABAEQABAEgDALQgFAUgYAGQgMADgGAAQgLAAgKgGQgPgIgGgGQgKgIgCgLQgEgeAQgSQAZgcAWgBQAggBAWAUQANAMAEAGQAFAJACAOQACAQgDAQQgEATgKALQgMANgQAIQgUAJgUABQglAAgcgdQgNgMgIgUQgKgXADgXQACgXAKgRQAGgKANgOQAZgcAhgGQAUgDAUAFQAOADAWALQAbANAYAnQAMAUgBAdQAAAQgCAIQgDAMgKAQIgRAYQgHAJgNAMQgQAPgIAFQgKAGgVAHQggALgXAAQgKAAgJgCg");
	this.shape_6.setTransform(170.2,4.6,2.873,2.873);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2D090").s().p("AghCCQgqgIgrgeQgYgQgIgNIgDgLIAFgGQAIgIALgEQARgFAIgHIAIAPQAKASAKAKQAfAfAYAHQAjAJAagHQAQgEARgKQASgLALgMQANgOAJgRQALgTABgNQABgSAAgIQgBgRgIgOQgRgfgdgQQgTgKgNgDQgTgEgVAGQgVAHgPAOQgLAKgMAUQgRAdAGAfQADAMADAGIAPAUQATAYAaAFQAMACAQgEQAOgDAJgGQAUgPAIgPQAGgMgCgTQgCgUgIgJQgSgXgXgCQgfgDgRAdQgJAOADAMQABAGAIAIQALANAOgJQAGgEAAgIQAAgIgGAAQgEgBAAgEIABgFIAEgDIANgHQATgGAKAPQAGAIACAGQABAFgCALQgFAUgZAHQgLAEgIAAQgMAAgJgFQgggRgCgTQgFgfARgTQAYgcAYgBQAggBAXAVQAMALAFAIQAFAJACAOQACAQgDAQQgEATgLAMQgbAfgqABQgmAAgegeQgMgMgIgVQgKgYADgXQAEghAcggQAZgcAhgGQAUgDATAEQAPAEAWAKQAfAPAWAmQANAVgBAeQAAAPgCAJQgEAOgKAPIgRAZQgHAJgNAMQgPAOgLAGQgLAGgTAIQggAKgZAAQgLAAgKgCg");
	this.shape_7.setTransform(168.6,5,2.873,2.873);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CABB83").s().p("AggCFQgugJgugiQgXgRgJgPIgEgLIAigNQARgHANgLIAHARQAKATAKALQAdAeAaAGQAhAKAcgIQAlgKAVgZQAMgNAJgRQAKgSACgMIAAgaQgBgRgHgNQgRgegdgQQgRgKgOgCQgRgEgUAGQgTAGgOANQgMAKgLATQgRAdAFAdQACALAEAGQADAHAKANQAUAYAZAFQAMACAPgDQANgEAKgGQAUgOAIgQQAFgKgCgSQgBgUgIgJQgSgVgXgCQgdgCgQAaQgNAWAPAOQAKANAMgIQAGgFAAgGQgBgIgFAAQgEAAAAgFIABgFIAEgEQAGgEAHgCQAVgHALAPQAGAJACAFQACAHgCALQgGAUgYAJQgaAJgSgKQgggRgCgVQgCgMADgOQAEgQAJgKQAYgcAXgBQAiAAAXAUQAMALAFAJQAGAKACAOQACAQgEARQgEATgLANQgMAOgTAIQgTAJgVAAQgVABgUgLQgRgIgMgNQgMgMgIgWQgKgYADgWQAFgjAcggQAagdAhgFQATgEATAFQAOADAXAKQAgAOAXAoQAOAXgBAdQgBAPgCAJQgDAPgLAPQgLATgGAHQgHAJgOAMQgPAOgMAHQgMAHgSAGQgeAMgbAAQgMAAgMgCg");
	this.shape_8.setTransform(167.1,5.3,2.873,2.873);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AA976C").s().p("AgfCHQg0gKgugkQgXgSgKgRIgFgNIAPgCQARgDALgEQASgGASgPIAGASQAJAUALALQAcAeAbAGQAhAKAbgIQAkgMAUgVQALgNAJgRQAJgRABgLIABgaQgCgQgHgOQgPgbgfgRQgggTgeAKQghAKgVAiQgSAeAFAaQABAKAEAHQADAIAKAMQATAXAZAGQAYAFAYgPQATgNAJgRQAFgKgBgRQgCgSgIgKQgSgUgXgBQgLgBgLAGQgNAGgHALQgKATAKAOQAMAMAKgHQAFgEAAgGQgBgHgFAAQgEgBAAgFIAAgFIAFgEIAOgIQAJgDAJADQAKACAFAIQAHAKACAEQADAIgDAKQgFAWgZAJQgbALgTgKQgNgIgKgKQgLgNgCgLQgCgLAEgPQAEgQAJgLQAZgcAYgBQAhgBAZAWQAMALAFAKQAGAJACAPQACAQgEARQgFATgLAOQgMAPgTAIQgUAJgWAAQgUABgVgMQgSgJgNgMQgMgMgIgXQgJgZADgVQAFgkAdggQAJgLAQgKQARgMASgDQAegFAtATQAhAPAYAoQAGAKAEARQADAOAAANQgBAOgCAKQgEAQgKAPQgLASgHAIQgHAJgPANQgbAYgeALQgTAHgWADQgMABgJAAQgMAAgLgCg");
	this.shape_9.setTransform(165.4,5.6,2.873,2.873);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#908058").s().p("AgdCKQg7gNgugnQgXgTgLgSIgGgOIAUAAQAWAAALgEQASgGAWgUIAGATQAJAWALALQAbAdAbAHQAjAJAagIQAhgLATgVQALgMAIgQQAIgQABgLQAEgjgMgUQgNgZgggSQgdgQgdAIQghAKgTAgQgRAdADAYQACAQAPAUQASAYAaAFQAXAEAXgNQALgHAFgFQAGgHAFgKQAGgLgBgPQgCgRgIgKQgIgJgLgFQgLgGgKAAQgLAAgKAGQgMAGgGAJQgLARALAMQAJANAJgIQAFgEAAgFQgBgGgFAAQgEgBAAgFIAAgFIAGgFQAHgFAHgDQAJgDAKACQAKADAGAHIAJAQQADAJgCAJQgFAXgZAKQgeAMgTgKQgMgHgLgMQgMgOgCgLQgCgMAEgQQAFgRAJgKQAYgdAaAAQAPgBAQAGQAQAGAMALQAMAKAGALQAFAKACAPQACAQgEAQQgFAUgMAPQgMAPgUAJQgTAIgXAAQgUABgWgMQgUgKgMgNQgMgLgIgYQgJgZADgVQADgTAMgVQAJgSALgLQAKgLAQgLQASgMAQgDQAegFAtATQASAIATASQANAOAJAPQAHALAEARQADAQAAAMQgBAfgQAZQgLASgIAJQgIAJgOANQgcAYgfAMQgRAHgYADQgNACgLAAQgMAAgKgCg");
	this.shape_10.setTransform(163.8,6,2.873,2.873);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#736338").s().p("AgxB1QgWgGgdgqIgYgqIAlg9QAqhBAagKQAjgNAcAEQAjAFASAdQAVAiAFAXQAGAagMAWQgQAcgLANQgQATgVALQgiARgQAFQgQAGgQAAQgKAAgKgDg");
	this.shape_11.setTransform(172.7,6.5,2.873,2.873);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFCD1").s().p("AgUgFQANgeAhgFQgcANgMAWQgOAYAXAWQgdgRAOgdg");
	this.shape_12.setTransform(164.1,-0.1,2.873,2.873);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#72593C").s().p("AAYAYIgBgBQACgJgBgFQgCgJgIgGQgHgGgKgFIgXgHIAJABQAKABAGAEQAQAIAFAIQAGAIABAFIAAAHIgCAEIgBADIAAgBg");
	this.shape_13.setTransform(112.9,-43.4,2.873,2.873);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0EBB8").s().p("AAXAYQgIgIgGgBIgJgDQgGgCgHgIIgWgcIAMANQANANAHAEQALAGAWAFQAIAEgCAFQgBACgFAAQgEAAgDgCg");
	this.shape_14.setTransform(96.1,-21.1,2.873,2.873);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2D090").s().p("AgDAAIgBgCIADAAIAEABQACABAAAEQgGgBgCgDg");
	this.shape_15.setTransform(111.2,-25.5,2.873,2.873);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F0EBB8").s().p("AgEgEQgRAAgBgDIgBgCIABAAIADgBIAJAAQAMAFAKAHIAMAKIgcgQg");
	this.shape_16.setTransform(108.6,-38.9,2.873,2.873);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFCD1").s().p("AAGAMQgDgCgEgGIgHgJIgGgJIAIADQAHAEAEAFQALALgBAFQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgCAAgFgDg");
	this.shape_17.setTransform(128.8,-24.8,2.873,2.873);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F1EAA5").s().p("AgSAJIAWgSIARgJQgRAMgIAHIgQASg");
	this.shape_18.setTransform(140.2,-44.6,2.873,2.873);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F0EBB8").s().p("AgCgDQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIADABIAAAFQgBABAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgDAAIAAABQgDAAACgJg");
	this.shape_19.setTransform(131.5,-38.7,2.873,2.873);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F0EBB8").s().p("AAVAPQgKgNgFgDQgMgMgLgFIgMgGIAJADQAMADAIAHQAUALAJARQADAGgDACIAAAAIgIgKg");
	this.shape_20.setTransform(120.1,-47.7,2.873,2.873);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#72593C").s().p("AgDAFIACgEIAEgGIABACIgEAEIgBAFg");
	this.shape_21.setTransform(107.3,-22,2.873,2.873);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#72593C").s().p("AAGALIgFgEIgGgIIgKgJIANAJIAHAIIALADIgHABIgDAAg");
	this.shape_22.setTransform(107.7,-25,2.873,2.873);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#736338").s().p("AAHAQQgKAAgKgHIgKgIIgDgDIAOAKQAJAGAGAAQAGABAMgEQADgKAAgEIgBgIIgCgEIADAEIADAJQABAFgEALQgJACgGAAIgCAAg");
	this.shape_23.setTransform(103.1,-11.4,2.873,2.873);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#736338").s().p("AgDAGQgDgEgCgJIAEgMIAAAHIACAKQABADAHAAIgDACQAAAAgBAAQgBABAAAAQAAABgBAAQAAAAAAABQAAACAFAGIAEAGg");
	this.shape_24.setTransform(95.8,-36.9,2.873,2.873);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#736338").s().p("AATAZQgJgHgEgKIgGgIIgjgfIAJAFIAZAVQAIAIABADIAGALQAFAGAEADIANAGQgKgBgHgGg");
	this.shape_25.setTransform(119.9,-24.4,2.873,2.873);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2D090").s().p("AhBBNQgRgKgSgQQgOgOgHgJQgFgIgEgKQgFgOAFgTQACgIAJgLQAIgLAIgFQAVgPAQgEQAWgFAXAJQAaAJASATQAIAKAFAMIAsggQAagRAOABQAIAAAFAGQACADgHAMQgIAMgKAMQgIAJgLAUIgLAXQgCACABAIQAAAJgCAEQgDAKgCABIgEABQgDAAgCgDQgDgDgBgFIgCgIIgEgGIgCgCIARgPQACgCAEgMIAHgSIAVgdIARgVIgTAIQgWAKgOAPIgNAOQgJAIgIAEQgNAFgGgHQgEgJAAgGQAAgMgPgPQgWgUgYgBQgfgBgWAVQgWAWACAeQACAMAMAMIAVARQAHAFAPADQAPAEACACQAFADAEAJIgDAHQgHADgFAAQgGAAgEgDg");
	this.shape_26.setTransform(120.6,-33.8,2.873,2.873);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CABB83").s().p("AhBBOQgRgJgTgSQgOgOgHgJQgGgIgDgKQgFgOAGgUQACgIAIgLQAIgLAIgGQAUgPATgDQAXgGAXAJQAaAKARATQAIAKAFAKIAqgeQAKgHAMgFQANgFAGAAQAJABAFAGQACADgGALQgGAMgKALQgIAKgLAVIgMAXQgCADAAAJQAAAJgCAEQgEAKgCABQgHACgDgFQgDgDgBgEIgCgIQgBgDgDgEIgDgDIARgPQACgDAEgKQAEgMADgFQAEgHAQgUIAPgTQgeAIgUAVIgOAQQgKAKgHADQgFACgHgCQgGgCgEgEQgDgJAAgGQAAgLgOgOQgVgUgYAAQgegBgVAVQgVAVADAbQABAMAMAMIAUAQQAFAEAQAFQAPAEACACQAFADAEAJIgCAKQgHACgGAAQgGAAgFgDg");
	this.shape_27.setTransform(120.5,-33.6,2.873,2.873);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AA9666").s().p("AhDBQQgNgIgWgVQgPgNgGgKQgFgIgEgKQgEgOAFgVQAFgSAVgSQATgPAVgEQAYgFAXAJQAcALAPATQAJAJADAJIAqgeQAJgGANgFQANgFAGAAQAKAAAFAHQACACgFALQgEALgKAMQgIAKgMAWIgNAZQgCACAAAJIgDANQgEALgDABQgIABgDgFQgCgDgBgEIgCgHQgBgEgDgFIgEgEIARgPQACgCADgKQAEgLADgFIASgZIANgRQgZAIgSATIgQARQgKALgGACQgEACgJgEQgJgDgDgEQgCgIAAgGQAAgMgOgNQgUgSgYgBQgdgBgUAVQgTAUADAZQABASAeAVQAFAFAQAEIARAGQAFAEAEAKIgCAMQgIACgGAAQgIAAgFgDg");
	this.shape_28.setTransform(120.6,-33.5,2.873,2.873);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9D8B5F").s().p("AhEBRQgMgIgYgVQgOgOgHgKQgFgIgDgLQgFgPAGgUQAFgTAVgRQARgPAXgFQAbgFAXAKQAbAMAPASQAJAJACAHIApgdQAJgGAOgFQANgFAGAAQAKABAFAHQACADgDAJQgDALgJALQgJAKgNAYIgOAaQgBACgBAJQgBAKgBAEQgEALgEABQgIADgEgHQgDgDAAgEIgCgIQgBgDgEgGIgEgFIAQgPIAGgMIAGgPQAEgHANgQIAMgOQgWAHgQAQIgRAUQgMAMgEABQgDACgMgGQgLgFgCgDIgBgOQABgKgOgOQgUgSgXAAQgMgBgNAGQgOAFgIAKQgRASACAXQABARAcAWQAFADAPAGIASAGQAFAEAFALIgDAOIgNACQgJAAgHgEg");
	this.shape_29.setTransform(120.5,-33.3,2.873,2.873);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#867752").s().p("AhFBSQgHgEgHgGIgWgUQgPgOgGgKQgFgIgDgLQgEgQAFgTQAFgSAUgTQASgQAYgFQAdgFAWAKQAaAMAQATQAJAJACAGIAngcQAKgHAOgFQAMgEAHAAQAKAAAGAIQACADgBAIQgDALgJALQgIAKgOAaIgPAaQgCADAAAJQgBAKgCADQgFAMgEABQgCABgEgBQgFgCgCgDQgCgDgBgEIgBgHQgBgEgFgGIgEgGIAQgPQAEgFAHgUQAEgHALgOIAKgNQgRAHgOAOIgTAVQgMANgDACQgCABgOgJQgNgHgCgCIABgNQAAgLgOgNQgIgHgLgFQgMgFgLAAQgLAAgNAFQgNAGgIAJQgPATABAUQABARAbAUQAEAEAQAFIASAHQAFAEAEALIgCARQgIACgGAAQgKAAgHgFg");
	this.shape_30.setTransform(120.6,-33.2,2.873,2.873);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#736338").s().p("AhGBUQgKgGgbgaQgOgNgHgLQgFgIgDgMQgEgRAGgSQAGgTATgSQARgRAZgEQAdgGAYALQAaAMAQATQAIAKABADIAngbQAKgHAOgEQANgFAHABQAKAAAGAHQAHANgPAUQgIAKgPAbIgPAbQgCADgBAJIgDAOQgEALgGACQgCABgEgCQgGgBgCgEQgDgDgBgLQAAgDgFgIIgGgHIAPgPQAFgEAHgTQAHgLAPgTQgOAGgLAMIgVAXQgNAPgCABQgBAAgggUQABgHAAgGQAAgMgNgMQgTgPgWAAQgLgBgNAGQgNAGgGAJQgHAJgDAHQgDAJABAKQAAAPAZAWIAUAJIATAHQAFAEAEAMIgDATQgHABgHAAQgLAAgHgEg");
	this.shape_31.setTransform(120.6,-33,2.873,2.873);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CABB83").s().p("AAMAVIgTgRQgOgLgDgHQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIABgCIAHAJQAJAKAGAEQAJAHALACQAJAGgCADQAAACgFAAIgCAAIgGgBg");
	this.shape_32.setTransform(107.1,-29.6,2.873,2.873);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D2C1A3").s().p("AAMAWIgSgRQgRgMgCgHIAAgFIABgDIAHAJIAPANQAJAHAMADQAJAGgBAEQgBACgFABIgDAAIgGgBg");
	this.shape_33.setTransform(107.1,-29.5,2.873,2.873);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AA976C").s().p("AAMAWIgSgQQgTgOgCgGQAAgDABgDIACgDIAHAIQAIAJAGAFQAFADAJADIAJAEQAJAGgCAFQAAADgGAAIgDABIgGgCg");
	this.shape_34.setTransform(106.9,-29.4,2.873,2.873);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AA9666").s().p("AAMAYIgSgRQgUgOgBgHQgBgDACgDIACgDIAHAHQAIAJAGAEQAFADAKAEIAKAFQAIAGgBAFQgBADgGABIgFAAIgFAAg");
	this.shape_35.setTransform(106.9,-29.3,2.873,2.873);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AA9666").s().p("AANAZIgHgHIgLgKQgWgPgBgHQgBgDACgEIADgDIAHAHQAHAIAHAEQAFAEALAEIALAFQAHAGgBAGQgBADgHACIgFAAIgEAAg");
	this.shape_36.setTransform(106.8,-29.1,2.873,2.873);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AA9666").s().p("AAMAaIgHgHQgFgGgGgEQgWgPgCgIQgBgDAEgFIADgDIAGAGQAIAIAGAEQAJAHAUAHQAHAHgBAGQgBAEgHABIgHABIgEAAg");
	this.shape_37.setTransform(106.7,-29,2.873,2.873);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E2D090").s().p("AA5AtQgGgCgHgEQgHgFgGgKQgHgNgDgDQgEgFgGgDIgNgIIgQgOQgJgGgIgCIgNgBIgHAAQgJgEACgFQACgEAHAAQAJAAAMAFQALAEAoAfIAXANQALAIAGAJQAFAIgBAGQgDAFgDAAIAAAAg");
	this.shape_38.setTransform(116.5,-30.5,2.873,2.873);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C6AE7C").s().p("AA3AuQgDgBgIgFQgHgEgGgKIgJgPQgEgFgHgEIgOgKIgRgNQgJgGgIgCQgHgBgGAAIgHgBQgIgDACgGQABgFAIAAQAHgBAPAGQALAEApAgIAIAEIAPAJQAKAHAHALQAGAIgBAGQgDAFgDAAIgCAAIgCAAg");
	this.shape_39.setTransform(116.4,-30.5,2.873,2.873);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B6A06C").s().p("AArApQgHgEgFgJIgJgPQgEgEgHgGIgPgKQgWgTgNgCQgHgCgGABIgHgBQgIgEACgHQACgFAIAAQAJgBAPAGQAKAEApAgIAIAEIAPAIQALAJAIALQAGAJgCAGQgDAFgDAAQgHAAgKgGg");
	this.shape_40.setTransform(116.2,-30.4,2.873,2.873);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B6A06C").s().p("AArArQgIgEgFgJQgEgKgDgEQgEgFgIgGIgQgMQgVgSgPgCIgNgBQgFAAgDgBQgGgFACgHQABgFAJgBQAIgBARAHQAKADAqAhIAIAEQAJADAGAFQALAJAIALQAHAJgDAIQgCAEgDAAIgCAAQgHAAgKgFg");
	this.shape_41.setTransform(116.1,-30.3,2.873,2.873);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AA9666").s().p("AAqAsQgIgEgEgJQgEgJgDgEQgFgGgYgSQgTgRgSgEQgFgBgIABQgFAAgDgCQgGgFACgIQACgFAJgBQAJgCASAIQAIADAsAhIAHAEQAJADAGAFQAMAJAJAMQAHAKgEAIQgCAEgDAAQgJAAgMgFg");
	this.shape_42.setTransform(115.9,-30.2,2.873,2.873);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A49162").s().p("AAqAtQgJgEgEgIQgDgJgDgEQgEgGgagUQgTgRgTgDQgFgBgIAAQgFAAgDgCQgGgGADgIQABgEAEgBIAHgBQAJgCATAHQAHAEAsAhIAIAEQAJADAGAFQAKAHALAQQAHAJgEAJQgBADgDABIgEAAQgHAAgMgFg");
	this.shape_43.setTransform(115.7,-30.1,2.873,2.873);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A08D60").s().p("AANAbIgHgHQgGgHgFgEQgYgPgCgIQAAgDADgFIAEgFIAUASQAFAEANAFIANAGQAGAIgBAGQgBAEgIACIgHACIgDgBg");
	this.shape_44.setTransform(106.6,-28.9,2.873,2.873);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#908058").s().p("AAqAuQgJgEgEgIIgFgLQgFgHgagWQgSgQgVgEIgOAAQgFAAgDgDQgEgDAAgEIACgIQABgEAEgBIAHgBQAEgBAKACQAKACAFACQAIADAsAjIAIADQAJAEAGADQAJAHANASQAIAKgFAJQgBADgDABIgEAAQgHAAgOgFg");
	this.shape_45.setTransform(115.4,-29.9,2.873,2.873);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#746539").s().p("AAnAuQgIgFgFgJIgDgIQgEgFgTgRQgRgPgUgJQgFgCgFAAIgDABIAFAFIANALQAKAHAXAJIADAGQADAHgBADQgBAEgHACQgMAFgDgBQgGgDgGgLQgDgDgMgJIgTgPQgQgPADgOQACgHAEgEQADgDAHgDQAHgCAJABQAJACAHADQAHAEAVAPQAWAPAEAEIALAFQAKAEAOAMQAPAOACAOQABAIgCAEQgDADgFAAQgTAAgLgIg");
	this.shape_46.setTransform(115,-29.9,2.873,2.873);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#736338").s().p("AhIBVIgQgMIgVgVQgXgWgFgWQgEgRAGgUQAFgTATgSQASgRAagFQAegFAXALQAaANARATQAIAJAAACIAmgaQAKgHAOgEQANgFAHABQALAAAGAIQAJANgNASQgIALgQAbIgRAcQgCADgBAJIgDAPQgFALgGACQgCABgFgBQgGgCgCgEQgDgEAAgKQgBgDgFgJIgGgIIAPgPQADgEAIgRQAGgLAMgOQgJAFgKAJIgkApIgkgXQADgHAAgGQAAgMgOgLQgHgGgLgEQgMgFgKAAQgLAAgMAGQgMAHgGAIQgHAJgCAGQgCAHAAAKQAAAIAJANQAIAKAHAEQADADAQAGQARAHACACQAFADAFANIgDAVIgOACQgMAAgJgFg");
	this.shape_47.setTransform(120.7,-32.8,2.873,2.873);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFFDDE","#F1EAA5","#EEE6A2","#DFD597","#CBBE85","#B1A270","#908058"],[0,0.353,0.494,0.624,0.753,0.878,1],-0.7,-1.5,0,-0.7,-1.5,7.5).s().p("AggBXIgKgIQgFgGgEgJQgJgRADgPIAGgWQACgGgCgHQgEgNgGgRQgIgWABgFQACgEALgOIALgNIAGgBQAIgCAKABQAdAFAVAQQAjAbADAZQACAPgJAXQgHATgKASQgIANgUANQgSAMgLABIgCAAQgHAAgKgHg");
	this.shape_48.setTransform(126.2,-1.6,2.873,2.873);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFCD1").s().p("AAZgXQgRAKgKAKQgKAJgMARQAMgiAlgMg");
	this.shape_49.setTransform(147,-7.3,2.873,2.873);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#736338").s().p("AgIADIgCgEIAAgEIACADQADADADABQADABAKgDQgDADgGACIgEABQgEAAgCgDg");
	this.shape_50.setTransform(143.9,-29,2.873,2.873);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhEgjIAPgHIB6BNIgIAIg");
	this.shape_51.setTransform(186.7,67.6,2.873,2.873);

	this.instance = new lib.CompoundShape();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,43.6,2.873,2.873,0,0,0,26.7,14.7);
	this.instance.shadow = new cjs.Shadow("rgba(152,53,54,0.859)",0,0,13);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8C483A").s().p("APVE9QgUgQgJgQQgIgMgagLQgcgMgaAAQgMAAgmgKIgogLQhfgSgdgHQhugbiWgVQgGABgCACQgGgGAAgIIAAgBIhggVQA4gKBpgJQBPgLAAgeQAAiWi5gvQiagniRApQogCghmASQhZAOhQgHQhYgLgegfQgYgWAHgTIgPANQglAjgBB2IgqidQgkiWAQgoQARgoAHgsIADgmIAvCLQA6COA0AFQCAAfEFg5QCUghErhPQARgOBPgRQBhgYBaAAQCHAAB8AqQghA7AmBpQAkBfA6AuIBxBZQAfgPCwA2QA2AsACAkQATACAGAEQACACAAADIgcAIQgHAAgTgRgAGtCzIgOgEIAqAIIAQADIgsgHg");
	this.shape_52.setTransform(-15.7,16.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhYCCQgQg+gHgVQgSgyACgWQAGgbAAgiQAAgOgPgSQgPgSAAgFQAAgSAVAAQAGAAA7ARQA7ASAjAAQAoAAATgSQALgKAHgOQASgSAPAEQANADAAAOQg0BNhHAAIgbgCIgagDQgDADAAAGQAJgFAGAAQAMAAAEAJQACAEgBAFIgDAKQgCAHAAACQAAAFAIANIgYAzQgaA1AAAxQAAADAIAJQAHAKAAAFQAAAOgDAHQgGANgRAAQgSAAgRg0g");
	this.shape_53.setTransform(73.8,8.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AEHDHQg5gnhWgpQjPhihOAWQheALgTBNIgOAxQABgLgCgFQgDgGgJgKQgHgIAAgGIAAgbQAAgrAQguIAQgtIgJgRQgJgPAAgLQAAgKAIgIQAIgIAAgIQAAgIAFgEQAGgGAMAAQAKAAAJADIAMAFIAzAFQAYAAAAhYQAAgVAUAKQAPAIAKANQAFAIAWANQAYAOAUAEQAQAEA3ACQA3AGAeATQASAMA+AhQAmAXAwAZQAcARAAAWQAAApgQBCQgOA0gDAmIgRgNgAj9C5IgCAMIgBAGIADgSg");
	this.shape_54.setTransform(99.9,8.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhmhXIACgJIDLC5IgHAIg");
	this.shape_55.setTransform(157.8,89.1,2.873,2.873);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AACgHIgKgTIgWACQgXADgDAEQgEAIgMADQgBgOAggIQANgDAegDIAGARQAFALA8AjIgDAGQg/gfgFgLg");
	this.shape_56.setTransform(106.6,50.3,2.873,2.873);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#727476").s().p("AgJgcQAKABABACIAHAMQAEAJgGAeIgGADQAEgogOgRg");
	this.shape_57.setTransform(122.2,5.9,2.873,2.873);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#727476").s().p("AgCgFQAEgBAQACIAAAHQgLgDgHAAQgIAAgJAGQACgJANgCg");
	this.shape_58.setTransform(111.6,3.7,2.873,2.873);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#594233").s().p("AAZAXQgQgCgKgRQglABgbgbQAnAYAegDQANARAKABQAHACAZgIQAHgBgBAEQgBAEgHgBQgPAGgMAAIgFAAg");
	this.shape_59.setTransform(102.3,10.5,2.873,2.873);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DAAB40").s().p("AADACQAFgJACgKIAAgHIADAHQACAJgBAHQgCAJgNAMIgMAFQAKgGAGgRg");
	this.shape_60.setTransform(-87.5,-121.5,2.873,2.873);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DAAB40").s().p("AgHgDQADgHANgNQgKAUgHAbQgBgVACgGg");
	this.shape_61.setTransform(-73.4,-52.2,2.873,2.873);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.9,0,1.9,0).s().p("AAAAEQgFgBgHAAIgGABIASgRIgBALIAJAAIALAQQgLgIgIgCg");
	this.shape_62.setTransform(-85.8,-165.7,2.873,2.873);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-0.6,0,0.7,0).s().p("AgGgHIAHgOIAGArg");
	this.shape_63.setTransform(-43.3,-119.7,2.873,2.873);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.5,0,1.5,0).s().p("AgOAEIARgMIAMALIgGAGg");
	this.shape_64.setTransform(-54.4,-164.2,2.873,2.873);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-0.7,0,0.7,0).s().p("AgHABIAJgSQAFALABAYIgPgRg");
	this.shape_65.setTransform(-49.6,-154.1,2.873,2.873);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.1,0,1.1,0).s().p("AgKAAIAHgMQALAGADAAIgIATg");
	this.shape_66.setTransform(-59.4,-138.7,2.873,2.873);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.4,0,1.4,0).s().p("AgNgCQAAgLARgDIgDAPIANAJIgOAJQgOgJABgKg");
	this.shape_67.setTransform(-57.5,-150.6,2.873,2.873);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.7,0,1.6,0).s().p("AgBAUQgfgUAggWQAWAbgHACQgFAAABAJIADAHg");
	this.shape_68.setTransform(-49.6,-133.1,2.873,2.873);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2,0,2,0).s().p("AgHAXQAKgGgEgOQgBgFgLgKQgJgIAFgIQAFgJAJABQADAAADACIARAqIgOAeg");
	this.shape_69.setTransform(-50.9,-110,2.873,2.873);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-3.3,0,3.4,0).s().p("AAAAGQgUgEgIgFQgLgKAOgQIAMAAIAUAcIAbAUIgaALg");
	this.shape_70.setTransform(-35.9,-90.5,2.873,2.873);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-0.9,0,1,0).s().p("AgIgRQAGACAFABQAIALgCAIQgBAKgNADg");
	this.shape_71.setTransform(-49.8,-80.6,2.873,2.873);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.4,0,1.4,0).s().p("AgIAFQgLgTAKgJQAKgJAOAXQgGAKgGAJIgPARIAEgWg");
	this.shape_72.setTransform(-39.4,-72.7,2.873,2.873);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.8,0,1.9,0).s().p("AgDAPQgLgLgDgFQgDgKAMgHIAIARIATAEIgBAQg");
	this.shape_73.setTransform(-36.5,-49.2,2.873,2.873);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.4,0,1.5,0).s().p("AgOAEIAFgZQASAFAFANQAFANgSAMg");
	this.shape_74.setTransform(-33.4,-61.4,2.873,2.873);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.3,0,2.3,0).s().p("AgWgIQAEgSAMACQAGAAASAKIAFASQgQgEgEAFQgCADAAARIgXghg");
	this.shape_75.setTransform(-22.9,-70.4,2.873,2.873);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.5,0,1.5,0).s().p("AgOAQQAHgMAAgEQABgDgDgNIASACQAKATgGAHQgFAFgLAAIgLgBg");
	this.shape_76.setTransform(-22.6,-52.8,2.873,2.873);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.4,0,1.4,0).s().p("AgKAKIgDgaQANgCAGANQAEAFAEARg");
	this.shape_77.setTransform(-20.3,-37,2.873,2.873);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.3,0,1.4,0).s().p("AgCAMIgKgaQAQgBAGAIQAFAHgCAPIgPgDg");
	this.shape_78.setTransform(-10.7,-33.6,2.873,2.873);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.3,0,1.3,0).s().p("AgMALIAIgRIgIgPQAggEgJAwg");
	this.shape_79.setTransform(-9.8,-47.1,2.873,2.873);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.4,0,1.4,0).s().p("AgNAAIAIgPQAQAAADALQACAJgMALg");
	this.shape_80.setTransform(-7.6,-61.1,2.873,2.873);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-3.3,0,3.3,0).s().p("AgQABIAQgFIgZgUQAeAAALAEQAUAIgDAXQgagFgKAKQgGAGgMACIgLABIAQgYg");
	this.shape_81.setTransform(6.3,-61.9,2.873,2.873);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.3,0,2.4,0).s().p("AgXABIAegMIARAIIggAPIgPgLg");
	this.shape_82.setTransform(108.3,-71.9,2.873,2.873);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.8,0,1.8,0).s().p("AAEAPIgVgSIAZgLIAKAdg");
	this.shape_83.setTransform(36,-58.9,2.873,2.873);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.7,0,1.7,0).s().p("AgQgFQABgRAPAEIARAJIgNAEIgBAOIgPALQgFgOABgLg");
	this.shape_84.setTransform(93.4,-63,2.873,2.873);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.9,0,2,0).s().p("AAAAMQgQgOgDgMQgDgPAZAAIgDAUIAUANIgLAag");
	this.shape_85.setTransform(84.4,-47,2.873,2.873);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.3,0,1.4,0).s().p("AgMgGQAAgLAUAAIgFAOIALAIIgQANQgLgRABgHg");
	this.shape_86.setTransform(78.3,-62.1,2.873,2.873);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.4,0,2.4,0).s().p("AABAOIgVADIgDgZQALgVAHAGQACABALAXIAQAPIgJAJIgOgLg");
	this.shape_87.setTransform(71.2,-46.7,2.873,2.873);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.6,0,2.6,0).s().p("AgZgBQAHgUARAEQANADAOAPIgRAMIgLgRIgMAWg");
	this.shape_88.setTransform(54.4,-56.4,2.873,2.873);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.7,0,2.8,0).s().p("AgbgIIATAGIAKgLIAaADQgOAVgPADIgFAAQgOAAgHgWg");
	this.shape_89.setTransform(52.3,-44,2.873,2.873);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-3.7,0,3.8,0).s().p("AAAANQAAgGgQgHIgVgLQAXgKALAEQALAEALAUIATAAIgLAMIgbgGg");
	this.shape_90.setTransform(5.7,-21.9,2.873,2.873);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.9,0,1.9,0).s().p("AgTAOIAWgPIgIgQQAOgJAHALQAGAKgFAPIgWAMIgOgIg");
	this.shape_91.setTransform(2.4,-40.6,2.873,2.873);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.8,0,1.9,0).s().p("AgMgMQALgDAUAJIgeAUQgOgWANgEg");
	this.shape_92.setTransform(14.7,-49.7,2.873,2.873);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-3.4,0,3.5,0).s().p("AgSAQQgSgDADgJQAGgNAZgEQAKgCAbAAIgjAfIgHAAIgLAAg");
	this.shape_93.setTransform(29.1,-45.5,2.873,2.873);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.9,0,2.9,0).s().p("AgLANQgTgBACgJQADgIAWgEIAggEIgVAaIgNABIgGgBg");
	this.shape_94.setTransform(18.9,-33,2.873,2.873);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.5,0,1.5,0).s().p("AgOgIIAdAFQgLALgIABIgBAAQgJAAAAgRg");
	this.shape_95.setTransform(170.3,37.3,2.873,2.873);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2,0,2,0).s().p("AADAHIgDgJIgNADIgGgFQAKgOAKAEQAHACAMANIAAAPg");
	this.shape_96.setTransform(161.2,42,2.873,2.873);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.4,0,2.4,0).s().p("AgUAMIgDgWQARAKACAAQAJADAFgPIAOAHQABANgSAEIgMABIgPgBg");
	this.shape_97.setTransform(149.8,48,2.873,2.873);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.4,0,1.4,0).s().p("AgNAOIAKgTQAFgKAMACQgCAPgEAGQgFAHgIAAIgIgBg");
	this.shape_98.setTransform(150.4,36.6,2.873,2.873);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.2,0,1.2,0).s().p("AgIgIQAEgOAQAGQgLAIgBACQgCAFADALIgMAJQACgZABgCg");
	this.shape_99.setTransform(141.9,34.9,2.873,2.873);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-0.7,0,0.8,0).s().p("AgGAEQgEgFAOgGIAEAMQgFADgDAAQgFAAgBgEg");
	this.shape_100.setTransform(134.2,30.5,2.873,2.873);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-0.8,0,0.8,0).s().p("AgIAEIACgIIAFgEQAFgDADADQAEAGgIAMg");
	this.shape_101.setTransform(117.7,62.1,2.873,2.873);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-0.8,0,0.9,0).s().p("AgHAHQgCgCAEgGIAEgGIAEAHIAGAGQgJACgDAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_102.setTransform(93.9,63.5,2.873,2.873);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-0.8,0,0.9,0).s().p("AgHADQgBgFAHgEIAFgDIAFAIIgFAKIgEABQgHAAAAgHg");
	this.shape_103.setTransform(94,53.6,2.873,2.873);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-0.8,0,0.9,0).s().p("AgHAEQgCgIAFgEQAFgGAIAJIgNAQIgDgHg");
	this.shape_104.setTransform(100.3,58.3,2.873,2.873);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.7,0,1.8,0).s().p("AgPAOQgIgRAagOIAPAFIgHAGQgNAAAAAFQAAABAFAMIgLAGg");
	this.shape_105.setTransform(107.4,62.2,2.873,2.873);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-0.9,0,1,0).s().p("AgJAJIAHgRIAEgCQAFAAACAFQADAIgFAIg");
	this.shape_106.setTransform(104.7,74.2,2.873,2.873);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.3,0,1.4,0).s().p("AgKAFQgGgFAKgFQAIgGAHADQADABACACIgHANIgHACIgKgFg");
	this.shape_107.setTransform(97.2,70.8,2.873,2.873);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-0.6,0,0.6,0).s().p("AgEgBQgDgDAFgFIAFgCIADAYg");
	this.shape_108.setTransform(78.8,56.2,2.873,2.873);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2,0,2,0).s().p("AABAEQgPgBgFgDQAAgOAMAAIAVAAIAFAOQACAHgBAJQgIgLgLgBg");
	this.shape_109.setTransform(73.3,63.2,2.873,2.873);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.3,0,2.3,0).s().p("AgWAGQgEgdAcACQALABAGAGQAHAGgEAIQgIANgGAAQgFABgMgIIgFAQIgIgQg");
	this.shape_110.setTransform(70.2,51.8,2.873,2.873);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.4,0,2.5,0).s().p("AgDAJQgQgJgEgIQgCgFAIgBIAJAAQANAIAPAEQAJAJgIAFQgDADgFAAQgHAAgJgGg");
	this.shape_111.setTransform(53,56.5,2.873,2.873);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.4,0,2.5,0).s().p("AgCAPQABgJgHgEQgHgEgIACQgDgOALgDQAHgBAQABIAMALQAHASgFAFQgCACgFAAQgGAAgLgEg");
	this.shape_112.setTransform(54.1,46.5,2.873,2.873);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.5,0,2.5,0).s().p("AgYAPQAAgHABgIQACgPAGABIAoAEQABAIgNAGIgSALg");
	this.shape_113.setTransform(36.2,42.5,2.873,2.873);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-2.6,0.1,2.7,0.1).s().p("AAAATIgagJQACgKANgCQALgDAAgKQANgLAGAMQAFAMgPAHQAWAHgFAGQgEADgHAAQgGAAgJgCg");
	this.shape_114.setTransform(37,52.5,2.873,2.873);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.1,0,1.2,0).s().p("AgLAEIACgLQAJgEAHAGQAIAFgFAJg");
	this.shape_115.setTransform(11.9,51.8,2.873,2.873);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.8,0,1.8,0).s().p("AgRgBQABgSAPAIQALAGAIALQgMAEgIAEg");
	this.shape_116.setTransform(20.2,49,2.873,2.873);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.1,0,1.1,0).s().p("AgJgHQAFgLAPAHQgDAKgDAEIgLAMQgHgOAEgIg");
	this.shape_117.setTransform(25,40.9,2.873,2.873);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#9E7A43","#A5824A","#BA9A5E","#D7BC7C"],[0,0.208,0.553,0.894],-1.1,0,1.2,0).s().p("AgLANQACgQACgGQAEgJAPACIgKAQQAGAJgIAFQgFADgCAAQgDAAgBgEg");
	this.shape_118.setTransform(12.9,39.3,2.873,2.873);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#72593C").s().p("AAAAEQgFgBgHAAIgGABIASgSIgBALIAJABIALAQQgLgIgIgCg");
	this.shape_119.setTransform(-87.1,-166.6,2.873,2.873);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#72593C").s().p("AgGgIIAGgNIAHArg");
	this.shape_120.setTransform(-44.5,-120.5,2.873,2.873);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#72593C").s().p("AgOAEIARgMIAMALIgGAGg");
	this.shape_121.setTransform(-55.6,-165.2,2.873,2.873);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#72593C").s().p("AgGABIAIgTQAEAMABAYg");
	this.shape_122.setTransform(-50.9,-155.1,2.873,2.873);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#72593C").s().p("AgKAAIAGgMIAPAGIgIAUg");
	this.shape_123.setTransform(-60.6,-139.6,2.873,2.873);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#72593C").s().p("AgNgCQAAgMARgCIgDAPIANAJIgOAJQgOgJABgKg");
	this.shape_124.setTransform(-58.8,-151.7,2.873,2.873);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#72593C").s().p("AAAAVQgggVAggWQAWAagHADQgFABACAHIACAIg");
	this.shape_125.setTransform(-50.9,-134.1,2.873,2.873);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#72593C").s().p("AgHAXQAJgGgDgOQgCgEgLgLQgIgIAFgIQAFgJAJABQADAAADACQAFAPAMAbIgOAeQgHgIgGgHg");
	this.shape_126.setTransform(-52.1,-111,2.873,2.873);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#72593C").s().p("AABAGQgVgEgHgFQgLgJANgRIAMAAIAUAcIAbAUIgaALg");
	this.shape_127.setTransform(-37.2,-91.5,2.873,2.873);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#72593C").s().p("AgJgRIAMADQAIALgCAIQgCAKgMADIgEgjg");
	this.shape_128.setTransform(-51.1,-81.6,2.873,2.873);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#72593C").s().p("AgIAFQgLgTALgJQAJgJAOAXQgGAKgGAJIgPARg");
	this.shape_129.setTransform(-40.6,-73.7,2.873,2.873);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#72593C").s().p("AgEAPQgLgLgCgFQgDgKALgHIAJARIASAEIAAAQg");
	this.shape_130.setTransform(-37.7,-50.2,2.873,2.873);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#72593C").s().p("AgOAEIAEgZQATAFAFANQAFANgSAMg");
	this.shape_131.setTransform(-34.7,-62.4,2.873,2.873);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#72593C").s().p("AgWgIQAEgSAMACQAGAAASALIAFARQgRgEgDAFQgDAEAAAQg");
	this.shape_132.setTransform(-24,-71.4,2.873,2.873);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#72593C").s().p("AgOAQQAGgMABgEQAAgDgCgNIASACQAKATgGAHQgEAFgMAAIgLgBg");
	this.shape_133.setTransform(-23.8,-53.7,2.873,2.873);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#72593C").s().p("AgJAKIgEgaQANgCAGANQAEAFAEARg");
	this.shape_134.setTransform(-21.6,-38,2.873,2.873);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#72593C").s().p("AgCAMIgLgaQAQgBAGAIQAGAHgCAPQgGAAgJgDg");
	this.shape_135.setTransform(-12,-34.6,2.873,2.873);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#72593C").s().p("AgMAMIAIgSIgIgPQASgCAFAQQAEALgEATg");
	this.shape_136.setTransform(-11.1,-48.1,2.873,2.873);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#72593C").s().p("AgNAAIAIgQQAQABADALQACAJgNAMg");
	this.shape_137.setTransform(-8.8,-62.1,2.873,2.873);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#72593C").s().p("AgQABIAPgFIgYgUQAdAAAMAEQAUAIgDAXQgbgEgJAKQgGAFgMACIgLABIAQgYg");
	this.shape_138.setTransform(5.2,-62.9,2.873,2.873);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#72593C").s().p("AgWABIAegMIAQAIIggAPg");
	this.shape_139.setTransform(107.1,-72.9,2.873,2.873);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#72593C").s().p("AAEAPIgVgSQAJgDAQgIIAKAdg");
	this.shape_140.setTransform(34.7,-59.9,2.873,2.873);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#72593C").s().p("AgQgFQABgRAPAEIARAJIgNAEIgCAOIgOALQgGgOACgLg");
	this.shape_141.setTransform(92.2,-63.9,2.873,2.873);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#72593C").s().p("AAAANQgQgPgCgMQgEgPAZAAIgCAUIATANIgLAag");
	this.shape_142.setTransform(83.2,-48,2.873,2.873);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#72593C").s().p("AgMgHQABgKATgBIgEAPIAKAIIgQANQgLgRABgIg");
	this.shape_143.setTransform(77.1,-63,2.873,2.873);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#72593C").s().p("AABAOIgVADIgDgYQALgWAHAGQADACAKAWIAQAPIgIAKIgPgMg");
	this.shape_144.setTransform(69.9,-47.7,2.873,2.873);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#72593C").s().p("AgZAAQAHgVARAEQAMADAPAPIgRAMIgLgQIgMAVg");
	this.shape_145.setTransform(53.1,-57.4,2.873,2.873);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#72593C").s().p("AgbgJIATAHIALgLIAZACQgOAWgPADIgEABQgPgBgHgXg");
	this.shape_146.setTransform(51,-44.9,2.873,2.873);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#72593C").s().p("AAAAOQAAgHgPgHIgWgLQAXgKALAEQALAEALAUIATAAIgLAMg");
	this.shape_147.setTransform(4.4,-22.9,2.873,2.873);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#72593C").s().p("AgSAOIAVgPIgIgQQAOgIAHALQAGAKgFAOIgVAMg");
	this.shape_148.setTransform(1.2,-41.5,2.873,2.873);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#72593C").s().p("AgLgMQALgDATAJIgeAUQgOgWAOgEg");
	this.shape_149.setTransform(13.5,-50.7,2.873,2.873);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#72593C").s().p("AgSAQQgSgDADgJQAGgNAZgEQAKgCAbAAIgjAfIgHAAIgLAAg");
	this.shape_150.setTransform(27.8,-46.5,2.873,2.873);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#72593C").s().p("AgLANQgTgBACgJQADgIAXgEIAfgEIgVAaIgMABIgHgBg");
	this.shape_151.setTransform(17.7,-34,2.873,2.873);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#72593C").s().p("AgOgIIAdAFQgLALgIABIgBAAQgJAAAAgRg");
	this.shape_152.setTransform(169.1,36.3,2.873,2.873);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#72593C").s().p("AACAHIgCgJIgNADIgGgFQAKgOAJAEQAHACAMANIABAPg");
	this.shape_153.setTransform(160,41.1,2.873,2.873);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#72593C").s().p("AgUALIgDgWQASALABAAQAJACAFgOIAOAHQABANgSAEIgLABQgIAAgIgCg");
	this.shape_154.setTransform(148.5,47,2.873,2.873);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#72593C").s().p("AgOANIAKgTQAGgJANABQgDAQgEAGQgFAHgIAAIgJgCg");
	this.shape_155.setTransform(149.2,35.7,2.873,2.873);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#72593C").s().p("AgJgIQAFgOAQAHIgMAJQgCAFADALIgMAJIACgbg");
	this.shape_156.setTransform(140.7,33.9,2.873,2.873);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#72593C").s().p("AgGAFQgDgGANgGIAEAMQgGADgDAAQgEAAgBgDg");
	this.shape_157.setTransform(132.9,29.6,2.873,2.873);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#72593C").s().p("AgHAEIABgIIAGgEQAEgDADADQAEAGgJAMg");
	this.shape_158.setTransform(116.6,61.1,2.873,2.873);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#72593C").s().p("AgHAHQgCgCAEgGIAFgGIADAHIAGAGQgJACgDAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_159.setTransform(92.6,62.5,2.873,2.873);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#72593C").s().p("AgHADQgBgFAHgEIAGgDIAEAIIgFALIgEAAQgHAAAAgHg");
	this.shape_160.setTransform(92.7,52.7,2.873,2.873);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#72593C").s().p("AgHAEQgCgIAFgEQAFgGAIAJIgNAQIgDgHg");
	this.shape_161.setTransform(99.1,57.3,2.873,2.873);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#72593C").s().p("AgPAOQgIgRAagOIAPAFIgHAGQgMAAgBAFQAAABAFAMIgLAGg");
	this.shape_162.setTransform(106.1,61.2,2.873,2.873);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#72593C").s().p("AgJAJIAHgSIAEgBQAFAAACAFQADAHgFAJg");
	this.shape_163.setTransform(103.6,73.2,2.873,2.873);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#72593C").s().p("AgKAFQgHgFAKgFQAJgGAHACQADABACADIgHANIgHACIgKgFg");
	this.shape_164.setTransform(95.9,69.9,2.873,2.873);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#72593C").s().p("AgEgBQgDgDAFgFIAEgDIADALIABAOIgKgOg");
	this.shape_165.setTransform(77.6,55.2,2.873,2.873);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#72593C").s().p("AABAEQgOgBgGgDQAAgNAMgBIAVAAIAFAOQACAHgBAJQgIgLgLgBg");
	this.shape_166.setTransform(72,62.2,2.873,2.873);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#72593C").s().p("AgWAGQgEgdAcACQALABAGAGQAHAHgEAHQgIANgGAAQgFABgMgIIgFAQIgIgQg");
	this.shape_167.setTransform(69,50.8,2.873,2.873);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#72593C").s().p("AgDAKQgRgKgEgIQgCgFAJgBIAJAAQAMAIAQAEQAJAJgIAGQgDACgFAAQgHAAgJgFg");
	this.shape_168.setTransform(51.8,55.5,2.873,2.873);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#72593C").s().p("AgBAPQAAgJgHgEQgHgEgIACQgDgOALgDQAHgBAQABIANALQAHASgGAFQgDACgEAAQgGAAgKgEg");
	this.shape_169.setTransform(52.9,45.5,2.873,2.873);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#72593C").s().p("AgYAPQAAgHABgIQACgOAGAAIAoAEQABAIgNAGIgSALg");
	this.shape_170.setTransform(34.9,41.6,2.873,2.873);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#72593C").s().p("AAAATQgHgCgTgIQACgJANgCQALgDAAgKQANgLAGAMQAGAMgQAHQAWAHgFAFQgEAEgIAAQgGAAgIgCg");
	this.shape_171.setTransform(35.8,51.5,2.873,2.873);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#72593C").s().p("AgLAEIACgLQAJgEAHAGQAIAFgFAJg");
	this.shape_172.setTransform(10.6,50.8,2.873,2.873);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#72593C").s().p("AgRgBQABgSAPAIQALAHAIAKIgVAIg");
	this.shape_173.setTransform(19,48,2.873,2.873);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#72593C").s().p("AgIgHQAEgLAPAHQgDAKgDAEIgKAMQgIgOAFgIg");
	this.shape_174.setTransform(23.7,39.9,2.873,2.873);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#72593C").s().p("AgLANQACgQACgGQADgJAQACQgGAHgEAJQAGAIgIAGQgEADgDAAQgDAAgBgEg");
	this.shape_175.setTransform(11.7,38.4,2.873,2.873);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAAAAQgEgGgJgEIgIgCIAZACIASgSIgJAXIgJAhQABgRgFgLg");
	this.shape_176.setTransform(-84.1,-146.8,2.873,2.873);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#DAAB40").s().p("AAoDtQgUgOgIgXQgGgPgEggIgNADQAMgJgBgQIgFgeIgNAHQAJgQACgSQACgYgLgLIgegQIAZAAQAEghgIgjIgbAMIAegZQAAgegBgFQgFgRgWAEQALgHAKgKIgJhuIAIgFIARDPQALB1ATBWQAGAZAeApIgNgBg");
	this.shape_177.setTransform(-65.3,-105.5,2.873,2.873);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#715D48").s().p("ABcBgIhZhFQhXhDgGgJIgUgkIAuAlIBTgUIAhgcIgVAiIhOAbICeB9QgKAHgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_178.setTransform(163.6,72.5,2.873,2.873);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#715D48").s().p("AhLhtIAIgLICIDVIAHAcg");
	this.shape_179.setTransform(139.7,109.7,2.873,2.873);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#715D48").s().p("AgvA0QAjgUAVgaQAOgPAYgqIABAOQgPAdgPASQgTAYgZASg");
	this.shape_180.setTransform(114.3,73.4,2.873,2.873);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgDAnQgCgDAAgPIgCgzQAAgJAHgCQACgBAEABQAFBJgHAHQgDADgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBg");
	this.shape_181.setTransform(-96.8,-49.5,2.873,2.873);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgfALQAAgFABgEQAEgHAMABQAJAAAPgEQANgEAEADQAGAFgBAEQgBADgGACIgdAGg");
	this.shape_182.setTransform(-74.9,-13.2,2.873,2.873);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgIAAQADgGAHABIAIACIgGAIIgHABQgJAAAEgGg");
	this.shape_183.setTransform(-35.2,58.3,2.873,2.873);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgTAGQAGgLALgFQASgKAHAHIgBAHIgsAXQABgFACgGg");
	this.shape_184.setTransform(-59.3,68.8,2.873,2.873);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#93623D").s().p("AgZByIAVg6IgeAzIAZhMIgcA8IAYhLQAHgTAKgrIAPgxIAJgZIAKADIgHA0QgHA3gDAMQgGAWgeBhIgKgHg");
	this.shape_185.setTransform(206.2,-54.8,2.873,2.873);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#715D48").s().p("AlKCXQAagDAKgDQAFgCAYgsQAbgyAKgMQAmgqA4gfQAsgYBDgXIgBhGIADAcQAGAcAJAEQAGACA1ACQA7ADAbAGIB6AdIAGgcIALAoQAOAGARAMQAQAOAGALQgoAGhMghQhZgogNgCQgrgKgVgCQgigEgoAMQgtANgvAZQgpAXgPANQgGAGgIAPQgGAKgMAIQgOAIgaAsIgXArQgNAOgPABIgigDg");
	this.shape_186.setTransform(9.4,87.3,2.873,2.873);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#E6C98D","#E7CA8F","#E9CD96","#EBD2A2","#EFDBB4","#F4E6CD","#FDFBF4","#FFFFFF"],[0.122,0.424,0.58,0.702,0.808,0.902,0.988,1],-9.1,-11.4,8.2,5.1).s().p("Ahug3IBRgYICMBSIg5BNg");
	this.shape_187.setTransform(178.3,76.5,2.873,2.873);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#E6C98D","#E7CA8F","#E9CD96","#EBD2A2","#EFDBB4","#F4E6CD","#FDFBF4","#FFFFFF"],[0.122,0.424,0.58,0.702,0.808,0.902,0.988,1],-11.6,-8.6,5.7,7.9).s().p("Ah3hUIAig7IDNC8IhdBjg");
	this.shape_188.setTransform(153.7,102.1,2.873,2.873);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#77503F").s().p("AgUBvQgKgJgJgQQgIgQAAgPIAJinIAIgOIgDBXQgDBZADANQAIA2BJABIgJAJQgtgEgOgMg");
	this.shape_189.setTransform(-88.9,95.4,2.873,2.873);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#DAAB40").s().p("AgKAJQAMgIAAgGQAAgEgDgEIgEgDIAOADIACADQACAFgBAEQgCAEgVAOg");
	this.shape_190.setTransform(-50.2,66.6,2.873,2.873);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#DAAB40").s().p("AgNgOIAbAMIgNARQgJgagFgDg");
	this.shape_191.setTransform(-73.8,66.5,2.873,2.873);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#DAAB40").s().p("AAFAEQAJgIAAgNQADAUgFAHQgGAIgUAAQAPgJAEgFg");
	this.shape_192.setTransform(-79.3,78.6,2.873,2.873);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#DAAB40").s().p("AhgBZQAZgcASgQIgJgJIAXAAIAggPIgHgOQAOAFAQgEQAIgCAUgIQAcgFAJgNQAIgNgDgdIAHgfIADAnQADAhgEAEQgHAHgxATQhCAegLAIQgHAFgaAWIgZAUg");
	this.shape_193.setTransform(-28.5,64.5,2.873,2.873);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#DAAB40").s().p("AgHgLIAGAEIAdAEIgdADIgaAMg");
	this.shape_194.setTransform(-50.6,76.5,2.873,2.873);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#DAAB40").s().p("AgTAEQAAgGAJgHIAJgFQgJAOAHAHQAFAEASABQgTAEgEAAQgPAAgBgMg");
	this.shape_195.setTransform(-39.2,58.8,2.873,2.873);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#DAAB40").s().p("AggAfIgFgJQgEgHAFgJQACgGALgOQALgPAZgCQgbASgMANIgCAKQgCALAEADQAGAFAkgdIAYgGIgcAUQgQAMgNAEIgMACIgDgBg");
	this.shape_196.setTransform(-60.6,69.5,2.873,2.873);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#DAAB40").s().p("AgOAJIACgfQAAATAHADQAFACAUgKIgnAfg");
	this.shape_197.setTransform(-79.5,96.8,2.873,2.873);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#DAAB40").s().p("Ag0BeQgPgGgDgRIAAgcQAAhOAGhAIADBCIAVADIgXAFIAEAyQAGgDAFAAQgPAUABANQABANATARQAIAHAIgcIACALQADALADABQADABAHgIQAHgKgBgGQgBgFgGgFIgFgFQAXAEAJgMQAKgMgXgMIAJACQAJADAGAAQAGgBADgJQAEgJgCgFQAAgEgHgIIgHgIIAWALQAMAEALgLQg0BHgaAmQgGAJgNAAQgLAAgPgGg");
	this.shape_198.setTransform(-73.3,93.6,2.873,2.873);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#DAAB40").s().p("AAEACIgNAJQgEACgMABQAQgKAVgcIgGAPIATgCIgLAJIABAaIAAABQgBAAgKgXg");
	this.shape_199.setTransform(-14.2,49.2,2.873,2.873);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#DAAB40").s().p("AABAdQAMgKgHgHQgEgGgNADIgOADIAPgGQANgEAEgIIAEgYQACAiADANIAKAOg");
	this.shape_200.setTransform(-31,51.4,2.873,2.873);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#DAAB40").s().p("AiXASQABgIALgCQAFAAAFABIBRgdIAygUQAigPAOgDQAOgDAogOQAmgLAQAJQgGAAgQAOQAAgQgiALQglAPgGAAQgHAAgKAFIgIAGIgFAgIgHgdIgiAOQgHASgEgDQgKgIgCAAQgFAAgOAKIgOAIQgOAAgKADQgPAFAEAMQgRgDgKADQgGADgKAaIgMAhQACgzAFgNg");
	this.shape_201.setTransform(-47.9,55.4,2.873,2.873);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#DAAB40").s().p("AgSAYQARgPADgKQAEgNgLgRIAPAJQAEAFAFAMQgQAFgGAgQgIgFgHgDg");
	this.shape_202.setTransform(-82.8,-69.9,2.873,2.873);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#DAAB40").s().p("AgGAGQgDgaABgGQACgUAPgDIgFAEQgEAFgCAEQgCAFADA3QAAANAFANQgPgGAFgmg");
	this.shape_203.setTransform(-99.5,-50.2,2.873,2.873);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#DAAB40").s().p("AgHgBQgDgMgIgEIASAEIATgIQgLAPgNAcQAAgTgCgEg");
	this.shape_204.setTransform(-84.8,-38.4,2.873,2.873);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#DAAB40").s().p("AgJAAQgEgHgNgHIAbAGIAagLIgTASQgLAKgCALQACgNgGgHg");
	this.shape_205.setTransform(-96.8,-25.7,2.873,2.873);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#DAAB40").s().p("AgPgRIAEAHQAIADAKgDIATgHQgSALgCAVQgGgRgHACQgFABgNAQg");
	this.shape_206.setTransform(-50.9,-17.5,2.873,2.873);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#DAAB40").s().p("AAFACQgGgMgMAAIAOgEQAJgEAEgFIgEAOIAEAhQgFgPgEgHg");
	this.shape_207.setTransform(-60.1,-32.4,2.873,2.873);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#DAAB40").s().p("AgRAFQAWgKAAgTQADAWAMAWQgPgLgFAAQgIABgLAPg");
	this.shape_208.setTransform(-76,-30,2.873,2.873);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#DAAB40").s().p("AgDgDIAYAAIgMAGIgdABg");
	this.shape_209.setTransform(-72.3,-6.4,2.873,2.873);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#DAAB40").s().p("AguATQgIgMAIgQQAEgHAQgBIAbgCQAVgHANABQAUADgFAWIgHAHQAAgQgJgGQgJgFgPAIIgkAGQgZAEAKAPQAEAHARABQgIAFgHAAQgHAAgEgHg");
	this.shape_210.setTransform(-76.7,-13.9,2.873,2.873);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#DAAB40").s().p("AicBPQgIgHgNgiQgLgbgGgUQgDgNAAgiIACgfQAGAWACAPIASALIgWABQAAANACAFQAEAKAKgBQgHAQAEAPQADAMAMASQALgFAAADIADAQQACAGAKAFQAKAGAFgDQAHgFgMgMQgKgKgHgBIgPgkQAJANAGADQAHAEAPgEIgJAMQAPAWAJAIQARANASgJIgIgKIARAIIAfgCQAVgEgJgOIARgTIgGAOQAAALARAAQALAAAOgEIgBgYIAIAVQATAAAbgHQABgMgKgEQgHgDgOAAIAagEIAPAQQAEADArgMQAIgNgIgIQgJgJgSACQgDAAgaAIQASgNAAgDQAAgDgggKQgKAHgFADIAIgQIg0giIALgFQAzAfAZARIBgAuIhoAXQhBAPgmAGQgtAJgdADQgRACgOAAQgdAAgNgJg");
	this.shape_211.setTransform(-58.1,-19.6,2.873,2.873);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#DAAB40").s().p("AgnCYQABgGAMgBIAZgBQAfgGgIglIgGhGIgHg4QgGg7gCgEQgBgDAAg8IAAg9IAIAMIgCAaIAOgDIgPAVIAFAnIALgGIgIARIAEAkIARADIgRAMIAEAwIAQACIgKAQIAGAoIAPAJIgRAMIAAAeQgDAigJALQgKAMgLAFQgPAEgIADQgJADgHATQgEALgCAIQAFgyADgKg");
	this.shape_212.setTransform(-100.6,-113,2.873,2.873);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C08B57").s().p("AgPANQgNgRAOgJQANgIARAJIAHAZQgRAFgJAAQgJAAgDgFg");
	this.shape_213.setTransform(112.2,8,2.873,2.873);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#8C483A").s().p("AgMAAQAAgKAMgCQANgBAAANQAAANgNAAQgMAAAAgNg");
	this.shape_214.setTransform(42,30.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#77503F").s().p("AG7G+QgdgIgwgaQhAghgfgaIgggaIgDgGIgIgVIgDgVQgDgPgBAAQgFADgIAAIgPgCQgOAAgNACIgIgBQgRAAgXAIIgNAFQgSADgiAXIgDABIgFADQgfAQgTAOQgHgDgEgFIgFgKIgEgEIgMgZQgNgahBgIQhTgJgjgSQgPgIgIgKIgYgDIAPgFQgXgOgigdQhHg6gggtQgegrgMglQgNgkAAgrQgBgjAHgeIAFgTQgXAEgPAAQgQAAgEgHIgBgIQAAgSApgJQASgEAkgFIg7gYQhWghgDgaQgCgeAjgYQAdgWAjgHQAQgBAag4QAXgwAqAPQBKAYASAQIA9gWQBDgSAZAUQAWAQBMAOQBNAOAPANQDBCRCRBfQANgGADAhQADAggGANQgngpg6gtIgEAIQgHANAAANQAFAFgDAKIgBACQAUAGABAGQAAAEgDAIIAJAKQAIAJAAAGQAAAGgDAFQgGAGgKgBQACAEAAAEQAAAGgNANIgMAOQAAAFgCACQgBAEgHAEQAFAGAAAFQAAAEgCAEIBSgIQAQgPAbgfIA9A5IgXBPQgWBYADAqQADAoBKBaQAmAuAkAmQhKAXhNAkgADIEaIACAAIAAABIgCgBg");
	this.shape_215.setTransform(83.6,15.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#E6C98D","#E7CA8F","#E9CD96","#EBD2A2","#EFDBB4","#F4E6CD","#FDFBF4","#FFFFFF"],[0.122,0.424,0.58,0.702,0.808,0.902,0.988,1],-22.2,0,22.3,0).s().p("AhYAnIh+gUIgIhPIAMgvIEJAuIBlgGIBDBHIglA+Ig0Aqg");
	this.shape_216.setTransform(65.9,56.9,2.873,2.873);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FBDBDB").s().p("Ag8A5IglhAIARhJIAaARQAeATAaAJQAbALAlAFQATADAOAAIAAAZIgeAqIhWAeg");
	this.shape_217.setTransform(152.8,37.5,2.873,2.873);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#93623D").s().p("Ag8BuQAUgSAMgQQAVgbAVg5QAKgXAfheIAIADIgcBsIArhkIgXBRIgzCMIAYhhIAHg5IgqCbIgKACIAXhNQgTAjgPATQgVAagcANg");
	this.shape_218.setTransform(188.5,-58.1,2.873,2.873);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#93623D").s().p("AARA0IgvAkIAtg0QgUAXgZAMQgXAMgjAIIgBgLQAmAAAigfQAUgUAcgrIAvhpIAMAAIgzB7IAdgmQgrBdgKAMQgGAHgZAWIgZAUg");
	this.shape_219.setTransform(174,-61.2,2.873,2.873);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#B75564","#B85766","#BC606D","#C36F7A","#CF878E","#DDA9AC","#F0DAD9","#FFFFFF"],[0,0.161,0.318,0.471,0.624,0.776,0.925,1],-4.7,-5.8,9.4,5.9).s().p("AiBhaIBAgSIDDCaQgTACgGAXQgFAUAGASg");
	this.shape_220.setTransform(156.4,84.1,2.873,2.873);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#87553E").s().p("ADGA2IAZgNQAYgQgGgNQgKgchTgCQgbgCiAAnQiHApgkACQgsADgPgSIgIgMQgDgGgFAAIgShiQAKATADAJIAFAaQAFATATAFQANADAxAAQAjAACIgfQBEgQA+gRIAyAEQA1AJARAVQARATABAlQABASgCAOIhJgQg");
	this.shape_221.setTransform(-41.3,10.9,2.873,2.873);

	this.instance_1 = new lib.Path_59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.6,-89.3,2.873,2.873,0,0,0,31.1,29.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(170,124,76,1)",0,0,11);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFD880").s().p("AiQE8QgdgVgOgrQgahNgCglQgCgoABgUQACgfALgKQAPgQAbgUQARgUgQieQgHhQgMhLIB6ADIAoGlIArA+IDABjQjwBEg1AKIgSACQgdAAgWgRg");
	this.shape_222.setTransform(-58.3,-79.4,2.873,2.873);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFD880").s().p("AiiCsQgQgFgJgRQgIgPAAgVIAAilIAfgpIEphbIA/AIIgjAwIAFBRIiBA3IhdBZIgwBWg");
	this.shape_223.setTransform(-43.4,77,2.873,2.873);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("Ah/BDQBGgeAngwQAlgwAhhjIBMAoIg1D7Ih+Aag");
	this.shape_224.setTransform(180.3,-53.7,2.873,2.873);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#E6C98D","#E7CA8F","#E9CD96","#EBD2A2","#EFDBB4","#F4E6CD","#FDFBF4","#FFFFFF"],[0.122,0.424,0.58,0.702,0.808,0.902,0.988,1],-11.5,-3.8,8.3,2.2).s().p("Ai/BbQABgdAMgoQAYhQA8g7IB2gIQB+gBAqAkIhODYg");
	this.shape_225.setTransform(128.9,-45.3,2.873,2.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.instance_1},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.instance},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhlS2Qhehzgoh2QjkqbhYndQgsjvAChpQAIjwCJlEQBEijBDhyQAZgxBNgOIBIgFQByAMC1D6QA5BOA5BcIAuBNIEKfbQAwCriFBgQhDAwhNANIgaABQj7AAixjbg");
	mask.setTransform(-138.5,15.3);

	// ear
	this.instance_2 = new lib.Image();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-227,-132.8,0.245,0.258,-4.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgwhole, new cjs.Rectangle(-197.9,-185.7,415.1,343.6), null);


// stage content:
(lib.ear_canvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{zoomedOut:103,zoomOut:832,firstZoom:451,revealTubes:874});

	// timeline functions:
	this.frame_1 = function() {
		console.log(this);
		playSound("ear_p1_titlewav");
	}
	this.frame_103 = function() {
		this.zoom1_btn.addEventListener('click', zoomOne.bind(this));
		
		function zoomOne() {
			console.log('clicked');
			this.gotoAndPlay("firstZoom");
		}
		
		console.log('Frame 104');
		playSound("ear_p2_crosssectionalwav");
	}
	this.frame_450 = function() {
		this.stop();
		
		console.log('Frame 451');
		playSound("ear_p6_clickzoomwav");
	}
	this.frame_452 = function() {
		this.soundwaves.gotoAndStop(0);
		this.eardrum.gotoAndStop(0);
		
		this.playingSound = playSound("ear_p6_clickzoomwav");
		
		exportRoot.playingSound.stop();
		
		/* 
		this.SoundMixer.stopAll();
		*/
	}
	this.frame_495 = function() {
		this.stop();
		
		var soundwaves = exportRoot.soundwaves;
		var eardrum = exportRoot.eardrum;
		var zoom2_btn = exportRoot.zoom2_btn;
		var zoomout_btn = exportRoot.zoomout_btn;
		
		this.soundwaves.gotoAndPlay("cycle");
		this.eardrum.gotoAndPlay("cycle");
		
		this.zoom2_btn.addEventListener('click', revealTubes.bind(this));
		
		this.zoomout_btn.addEventListener('click', zoomOut.bind(this));
		
		function zoomOut() {
			this.gotoAndPlay("zoomOut");
		}
		
		function revealTubes() {
			this.gotoAndPlay("revealTubes");
		}
		playSound("ear_p3_perceptwav");
	}
	this.frame_601 = function() {
		playSound("ear_p5_threeboneswav");
	}
	this.frame_831 = function() {
		this.stop();
	}
	this.frame_832 = function() {
		this.soundwaves.gotoAndStop(0);
		this.eardrum.gotoAndStop(0);
		
		/*
		this.SoundMixer.stopAll();
		*/
	}
	this.frame_873 = function() {
		this.gotoAndStop("zoomedOut");
	}
	this.frame_874 = function() {
		this.soundwaves.gotoAndPlay("cycle");
		this.eardrum.gotoAndPlay("cycle");
		
		this.zoomout_btn.addEventListener('click', zoomOut.bind(this));
		
		/*
		this.SoundMixer.stopAll();
		*/
		
		function zoomOut() {
			this.gotoAndPlay("zoomOut");
		}
	}
	this.frame_906 = function() {
		playSound("ear_p7_cochleawav");
	}
	this.frame_1139 = function() {
		playSound("ear_p8_threecanalswav");
	}
	this.frame_1323 = function() {
		playSound("ear_p9_fuidmovingwav");
	}
	this.frame_1632 = function() {
		playSound("ear_p10_fluidspiralwav");
	}
	this.frame_1843 = function() {
		playSound("ear_p11_spiralchannelwav");
	}
	this.frame_1999 = function() {
		playSound("ear_p12_nervesnearwav");
	}
	this.frame_2229 = function() {
		this.stop();
		playSound("ear_p13_nervesshortwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(102).call(this.frame_103).wait(347).call(this.frame_450).wait(2).call(this.frame_452).wait(43).call(this.frame_495).wait(106).call(this.frame_601).wait(230).call(this.frame_831).wait(1).call(this.frame_832).wait(41).call(this.frame_873).wait(1).call(this.frame_874).wait(32).call(this.frame_906).wait(233).call(this.frame_1139).wait(184).call(this.frame_1323).wait(309).call(this.frame_1632).wait(211).call(this.frame_1843).wait(156).call(this.frame_1999).wait(230).call(this.frame_2229).wait(209));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvB7QgQgIgKgOQgKgOgGgSQgFgSAAgTQAAgTAFgRQAGgRAKgNQAKgOAQgIQAHgEAJgCQAJgCALAAQAPAAAPAHQAPAHAJAOIABAAIAAheIAzAAIAAEAIgxAAIAAgXIgBAAQgJAPgOAGQgPAHgRAAQgVAAgQgIgAgTgUQgJAFgFAIQgFAHgCALQgDAKAAAMQAAALADALQACAKAGAJQAGAIAIAGQAJAFAKAAQANAAAIgFQAJgFAFgJQAFgIACgLQACgLAAgLQAAgMgCgKQgCgLgFgHQgFgIgJgFQgIgFgNAAQgLAAgJAFg");
	this.shape.setTransform(544.4,268.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBfIAAhnIgCgVQgBgIgEgGQgEgFgGgDQgGgDgKAAQgTgBgKANQgFAHgCAKQgCAJAAAPIAABgIgzAAIAAi4IAwAAIAAAaIABAAQAKgRAQgHQAOgIAQAAQAVABANAFQANAGAIAJQAHAKADAOQADAPAAARIAABxg");
	this.shape_1.setTransform(523.2,271.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0BaQgNgFgIgKQgHgKgDgOQgDgPAAgRIAAhxIAzAAIAABoIACAUQABAJAEAFQAHALATAAQAUAAAJgMQAJgMAAgdIAAhgIAzAAIAAC5IgwAAIAAgaIgBAAQgFAIgHAGQgGAGgIADQgOAHgQAAQgVAAgNgFg");
	this.shape_2.setTransform(501.9,272);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBbQgSgHgMgNQgNgMgGgSQgIgSABgXQgBgVAIgSQAGgSANgNQAMgNASgHQASgHAVAAQAOAAAZAHQASAHANANQAMANAIASQAGAZAAAOQgCAdgEAMQgIASgMAMQgNANgSAHQgRAHgWAAQgVAAgSgHgAgVg1QgJAFgEAIQgGAJgCAKQgCALAAAKQAAAMACAKQACALAGAIQAEAJAJAFQAJAFAMAAQAMAAAJgFQAKgFAFgJQAFgIACgLQACgKAAgMQAAgKgCgLQgCgKgFgJQgFgIgKgFQgJgFgMAAQgMAAgJAFg");
	this.shape_3.setTransform(480.3,271.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnCBQgUgFgPgLQgIgGgGgHQgGgHgFgJQgIgRAAgYIA3AAQAAANAEAJQAFAJAIAGQAHAFALADQAKADAKgBIARgBQAIgBAIgEQAHgDAFgHQAGgGAAgJQAAgLgHgGQgHgHgLgEIgYgHIgbgIIgcgIQgOgGgKgHQgLgJgHgMQgHgMAAgSQAAgKADgIQACgJAEgHQAJgPANgKQAOgKARgEQARgEASgBQATABASAEQATAEAOAKQAPAKAIAQQAEAIADAJQACAKAAALIg3AAQgBgMgEgHQgEgHgHgFQgHgEgJgCIgSgCIgOABQgGACgGAEQgFADgEAGQgEAFAAAIQAAAIADAFQADAFAIADIAYAIIAmALIAUAEQANAEAMAIQANAIAJAOQAJAOAAAVQAAASgHAPQgGAPgOALQgNALgUAGQgdAGgSAAQgUAAgUgFg");
	this.shape_4.setTransform(457.6,268.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BfIAAi4IAwAAIAAAiIABAAQAEgJAGgHQAFgHAIgGQAIgFAJgDQAJgCAJgBIAMACIAAAwIgJgCIgKAAQgOAAgJAFQgKAEgGAIQgFAJgCAKQgDALAAALIAABUg");
	this.shape_5.setTransform(429.9,271.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_6.setTransform(411.5,271.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkBbQgSgHgMgNQgNgNgGgSQgHgSAAgWQAAgTAHgTQAHgSAMgNQANgNASgHQARgIAUAAQAYAAASAJQAIAFAIAGQAHAGAGAIQALAPAFAUQAFAUgBAVIiGAAQABAMADAJQADAJAGAGQALALAVAAQAPAAAMgIQALgIACgIIAtAAQgFAQgIAMQgJAMgLAIQgWAOggAAQgVAAgRgHgAgTg2QgIAEgFAGQgEAGgCAHIgDAMIBSAAQgDgTgJgKQgFgFgHgDQgHgCgJAAQgLAAgJAEg");
	this.shape_7.setTransform(390.9,271.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA0CAIAAhuIhnAAIAABuIg4AAIAAj/IA4AAIAABiIBnAAIAAhiIA5AAIAAD/g");
	this.shape_8.setTransform(367.3,268.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkBbQgSgHgMgNQgNgNgGgSQgHgSAAgWQAAgTAHgTQAHgSAMgNQANgNASgHQARgIAUAAQAYAAASAJQAIAFAIAGQAHAGAGAIQALAPAFAUQAFAUgBAVIiGAAQABAMADAJQADAJAGAGQALALAVAAQAPAAAMgIQALgIACgIIAtAAQgFAQgIAMQgJAMgLAIQgWAOggAAQgVAAgRgHgAgTg2QgIAEgFAGQgEAGgCAHIgDAMIBSAAQgDgTgJgKQgFgFgHgDQgHgCgJAAQgLAAgJAEg");
	this.shape_9.setTransform(333.6,271.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAhBdIghh8IAAAAIggB8Ig1AAIg6i5IA2AAIAiB9IABAAIAeh9IAxAAIAgB9IAAAAIAjh9IA1AAIg8C5g");
	this.shape_10.setTransform(308.7,271.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAhBdIghh8IAAAAIgfB8Ig1AAIg8i5IA2AAIAjB9IAAAAIAgh9IAwAAIAgB9IABAAIAih9IA0AAIg6C5g");
	this.shape_11.setTransform(269.4,271.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnBbQgSgHgMgNQgNgMgGgSQgIgSAAgXQAAgVAIgSQAGgSANgNQAMgNASgHQASgHAVAAQAOAAAZAHQATAHAMANQAMANAIASQAGAZABAOQgDAdgEAMQgIASgMAMQgMANgTAHQgRAHgWAAQgVAAgSgHgAgVg1QgJAFgEAIQgGAJgCAKQgCALAAAKQAAAMACAKQACALAGAIQAEAJAJAFQAJAFAMAAQANAAAIgFQAJgFAGgJQAFgIACgLQACgKAAgMQAAgKgCgLQgCgKgFgJQgGgIgJgFQgIgFgNAAQgMAAgJAFg");
	this.shape_12.setTransform(243.8,271.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA0CAIAAhuIhnAAIAABuIg4AAIAAj/IA4AAIAABiIBnAAIAAhiIA5AAIAAD/g");
	this.shape_13.setTransform(219.5,268.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgvB7QgQgIgKgOQgKgOgGgSQgFgSAAgTQAAgTAFgRQAGgRAKgNQAKgOAQgIQAHgEAJgCQAJgCALAAQAPAAAPAHQAPAHAJAOIABAAIAAheIAzAAIAAEAIgxAAIAAgXIgBAAQgJAPgOAGQgPAHgRAAQgVAAgQgIgAgTgUQgJAFgFAIQgFAHgCALQgDAKAAAMQAAALADALQACAKAGAJQAGAIAIAGQAJAFAKAAQANAAAIgFQAJgFAFgJQAFgIACgLQACgLAAgLQAAgMgCgKQgCgLgFgHQgFgIgJgFQgIgFgNAAQgLAAgJAFg");
	this.shape_14.setTransform(184.8,268.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAkBfIAAhnIgCgVQgBgIgEgGQgEgFgGgDQgGgDgKAAQgTgBgKANQgFAHgCAKQgCAJAAAPIAABgIgzAAIAAi4IAwAAIAAAaIABAAQAKgRAQgHQAOgIAQAAQAVABANAFQANAGAIAJQAHAKADAOQADAPAAARIAABxg");
	this.shape_15.setTransform(163.5,271.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_16.setTransform(142.4,271.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag7BgIAAi6IAwAAIAAAjIABAAQAEgIAGgIQAFgIAIgEQAIgGAJgDQAJgDAJAAIAMACIAAAwIgJgBIgKgBQgOAAgJAEQgKAFgGAJQgFAHgDAMQgCAKAAALIAABVg");
	this.shape_17.setTransform(403.9,234.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_18.setTransform(385.5,234.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhhCBIAAkBIDAAAIAAAwIiHAAIAAA3IB7AAIAAArIh7AAIAAA/ICJAAIAAAwg");
	this.shape_19.setTransform(364.2,231.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkBbQgSgHgMgNQgNgNgGgSQgHgSAAgWQAAgTAHgTQAHgSAMgNQANgNASgHQARgIAUAAQAYAAASAJQAIAFAIAGQAHAGAGAIQALAPAFAUQAFAUgBAVIiGAAQABAMADAJQADAJAGAGQALALAVAAQAPAAAMgIQALgIACgIIAtAAQgFAQgIAMQgJAMgLAIQgWAOggAAQgVAAgRgHgAgTg2QgIAEgFAGQgEAGgCAHIgDAMIBSAAQgDgTgJgKQgFgFgHgDQgHgCgJAAQgLAAgJAEg");
	this.shape_20.setTransform(331.6,234.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAkCBIAAhpIgCgUQgBgJgEgFQgEgGgGgDQgGgCgKAAQgTAAgKAMQgFAGgCAJQgCALAAAOIAABiIgzAAIAAkBIAzAAIAABiIABAAQAKgRAPgIQAOgGAOgBQAVAAANAGQANAFAIALQAHAKADANQADAPAAAQIAABzg");
	this.shape_21.setTransform(310.7,231.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcCBIAAjRIhNAAIAAgwIDTAAIAAAwIhOAAIAADRg");
	this.shape_22.setTransform(289.1,231.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},83).to({state:[]},2310).wait(45));

	// white out
	this.instance = new lib.whiteblock("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(345.1,247.5,1.373,1.667,0,-0.2,0,250.8,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},83).wait(2355));

	// txt
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AD1r3InpXv");
	this.shape_23.setTransform(367.5,329);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgFACIgGAFQgDADgBAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAHAAQAGAAAFACQAFABADADQAEACACAFQACAEAAAGIAAA4g");
	this.shape_24.setTransform(346.4,424.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgBQAFgCADgEQACgDACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHgBQgIAAgFgCg");
	this.shape_25.setTransform(335.8,424.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_26.setTransform(329.7,424.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_27.setTransform(322.1,422.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgCAGABAGIAAAjg");
	this.shape_28.setTransform(316.1,424.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIAAIgKgBQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgGACgFQADgEADgCIAJgDIAKgDIAJgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgGgBQgIAAgFADQgFADgBAIIgNAAQABgGADgFQACgFAFgDQAEgDAGgCQAGgCAGAAIAJABQAGABAEADQAEACADAEQACAEAAAHIAAAmIABAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgDgCgAAJACIgIABIgIABIgIADQgDABgCADQgCACAAAFIABAFIADAEIAFACIAGAAQAGAAADgBQAFgCADgDQADgCACgDIABgGIAAgMQgDABgEABg");
	this.shape_29.setTransform(309.3,424.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgkA2IAAhqIBJAAIAAALIg7AAIAAAjIA3AAIAAAKIg3AAIAAAlIA7AAIAAANg");
	this.shape_30.setTransform(300.8,422.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_31.setTransform(380.4,90.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIAAIgKgCQgFgBgDgCQgDgDgCgEQgCgEgBgGQABgGACgFQACgEADgDIAJgCIAJgDIAKgCIAIgBIAFgCQACgCAAgEQABgFgCgCIgEgEIgGgBIgFgBQgHAAgGADQgFADgBAIIgMAAQAAgHACgFQADgFAFgDQAEgDAGgBQAFgBAHAAIAKABQAFAAAEACQAEADADAEQADAEAAAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgCgDgAAKABIgJACIgHABIgIADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_32.setTransform(374.9,91.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_33.setTransform(366.5,91.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgCQgFgBgDgCQgDgDgDgEQgBgEAAgGQAAgGABgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCABgEQAAgFgCgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHADgFQADgFAEgDQAFgDAGgBQAFgBAHAAIAKABQAFAAAEACQAFADACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgDgDgAAKABIgJACIgIABIgIADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDAAg");
	this.shape_34.setTransform(358.5,91.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKIAEAKQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_35.setTransform(350.3,91.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_36.setTransform(340.1,91.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIAAIgKgCQgEgBgEgCQgEgDgBgEQgCgEAAgGQAAgGACgFQACgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCABgEQAAgFgCgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHADgFQADgFAEgDQAFgDAGgBQAGgBAGAAIAKABQAFAAAEACQAFADACAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgCgDgAAKABIgJACIgIABIgIADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDAAg");
	this.shape_37.setTransform(333.3,91.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgkA2IAAhrIBJAAIAAAMIg7AAIAAAiIA3AAIAAALIg3AAIAAAmIA7AAIAAAMg");
	this.shape_38.setTransform(324.8,90.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AjbLVIG32p");
	this.shape_39.setTransform(323,180.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("Ak/tCIJ/aF");
	this.shape_40.setTransform(293,192.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("Agnn4IBPPx");
	this.shape_41.setTransform(255,160.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("ABumyIjbNl");
	this.shape_42.setTransform(230,153.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgLAnQgGgBgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACADQACAEACACIAHACIAHAAIAGAAIAGgCQADgBACgCQABgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgGgCgDgEQgEgEAAgHQAAgGADgEQACgEAEgDQAEgDAGgBIAKgBQAFAAAGABQAGABADACQAFADADAFQACAFAAAHIgMAAIgCgGIgFgFIgFgBIgFgBIgGABIgFABIgEADQgBACgBADQAAADACADIAHADIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFACQgFADgFABIgMACIgLgCg");
	this.shape_43.setTransform(289.3,97.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_44.setTransform(281.6,97.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFADAHQACAIgBAHQABAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_45.setTransform(264.9,97.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_46.setTransform(256.4,95.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgCQgFgBgDgDQgDgCgDgEQgBgEAAgGQAAgGABgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCABgEQAAgFgCgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHADgFQADgFAEgDQAFgDAGgBQAFgBAHAAIAKABQAFAAAEACQAFADACAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgDgDgAAKABIgJACIgHABIgJADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgDIACgGIAAgMQgDABgDAAg");
	this.shape_47.setTransform(238.8,97.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_48.setTransform(230.7,97.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_49.setTransform(220.4,97.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_50.setTransform(213.5,97.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_51.setTransform(205.3,97.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_52.setTransform(197,97.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_53.setTransform(190.9,95.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AA9kIIh6IR");
	this.shape_54.setTransform(161.7,217.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQgBgDgCgCQgBgDgDgBIgHgBQgGAAgEACIgGAFQgCADgBAEIgBAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAFgEQAHgEAIAAQAGAAAEACQAFABAEADQADACABAFQACAEAAAGIAAA4g");
	this.shape_55.setTransform(184,181.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRAlQgFgBgDgEQgEgEgBgFQgBgFAAgGIAAgyIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgDQACgEACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgNIAAAAQgEAIgHADQgGAEgHAAQgIAAgFgDg");
	this.shape_56.setTransform(173.4,181.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGgBAGIAAAjg");
	this.shape_57.setTransform(167.3,181.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_58.setTransform(153.7,181.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIAAIgKgBQgEgCgEgDQgDgCgCgEQgCgEAAgGQAAgHACgEQACgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgDQACgCAAgDQAAgEgBgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgMAAQAAgHACgGQADgEAEgEQAFgDAGgBQAGgBAGAAIAKABQAFAAAEACQAFADACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEADgGAAQgFAAgCgDgAAKABIgJACIgHABIgJADQgDAAgCADQgCAEAAAEIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_59.setTransform(146.9,181.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgkA1IAAhqIBJAAIAAAMIg7AAIAAAiIA3AAIAAAMIg3AAIAAAlIA7AAIAAALg");
	this.shape_60.setTransform(138.4,180.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,0,0,2.4).p("ABQj5IifHz");
	this.shape_61.setTransform(501,166);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgQBFIAKgRIAGgQIACgRQABgKAAgIQAAgTgEgQQgEgSgLgQIAKAAIAJAQIAHARQADAJACAIQACAKAAAJQAAARgGASQgDAJgFAIIgJAQg");
	this.shape_62.setTransform(577.6,130.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgEgEAAgGIANAAQAAADACADIAGADIAFACIAGABQAGAAAFgCQAEgCADgEQADgEABgGQACgFAAgGIAAgFIgBAAQgDAHgHAEQgGACgHAAQgJAAgGgCQgHgEgEgFQgFgFgCgIQgCgGAAgHIACgPQACgHAEgGQAFgFAGgEQAHgFAJAAQAIABAGADQAGADAEAHIAAgMIALAAIAABGQAAAKgBAHQgDAHgEAFQgJAKgSgBIgKgBgAgJgpQgEACgDAEIgEAJIgBALIABALQABAEACAEQADAFAFACQADACAGABQAGgBAEgCQAFgCACgFQADgEABgEQACgGAAgGQAAgEgCgGQgBgEgCgFQgDgDgEgCQgEgDgGAAQgGAAgEACg");
	this.shape_63.setTransform(571.6,131.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_64.setTransform(563.3,130.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_65.setTransform(557.5,128.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_66.setTransform(553.9,130.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgHAFIgGAEQgGADgIgBIgKgBQgFAAgDgDQgDgDgDgEQgBgEAAgGQAAgHABgEQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgBABgEQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAIIgNAAQAAgHADgEQADgGAEgCQAFgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEAAAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgCgDgAAKACIgJABIgIABIgIACQgDACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCABgDIACgGIAAgMQgDABgDABg");
	this.shape_67.setTransform(547.1,130.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_68.setTransform(538.9,130.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_69.setTransform(530.7,128.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAHBFIgJgQIgHgRIgFgRQgCgKAAgJIACgSIAEgRQAGgSALgPIAKAAIgKARIgGARQgDAQAAASIABASIACARQAFASALAQg");
	this.shape_70.setTransform(525,130.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgGAFIgHAEQgGADgIgBIgKgBQgEAAgEgDQgDgDgCgEQgCgEAAgGQAAgHACgEQACgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgBABgEQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAIIgNAAQAAgHADgEQADgGAEgCQAFgDAGgCQAFgBAHgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgDgDgAAKACIgJABIgIABIgIACQgDACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCABgDIACgGIAAgMQgDABgDABg");
	this.shape_71.setTransform(514.7,130.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_72.setTransform(506.5,130.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_73.setTransform(500.8,128.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_74.setTransform(495,128.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgFgCgIQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFACAFABQAJAAAGgGQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGABgHAAQgIABgHgDg");
	this.shape_75.setTransform(486.8,130.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgGgCgHQgDgHAAgIQAAgIADgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAKABAGADQAIADAEAFQAFAGADAIQACAHAAAIQAAAIgCAHQgDAHgFAGQgEAGgIADIgHACIgJAAgAgIgaQgFACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAFACQAEACAEAAQAFAAAFgCQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_76.setTransform(478.5,130.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgUAzIgIgEIgHgHQgGgHgDgLQgDgKAAgLQAAgLADgLIAFgJIAFgJQAGgHAKgEQAEgDAGgBIALgBQAIAAAHACQAIACAGAEQAGAFADAGQAEAHACAIIgPAAQgCgLgIgGQgEgCgFgBQgFgCgFAAQgJAAgHAEQgHADgEAGQgEAGgCAIQgDAIAAAIQAAAJADAHQACAJAEAGQAEAGAHAEQAHADAJAAQAGAAAGgDQAGgBADgFQAEgEADgGQACgFAAgHIAPAAQgCAVgMAKQgMAMgUAAQgMAAgKgFg");
	this.shape_77.setTransform(468.8,128.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgQBFIAKgRIAGgQIACgSQABgIAAgKQAAgRgEgSQgEgQgLgRIAKAAIAJAQIAHARQADAJACAIQACAKAAAIQAAASgGASQgDAJgFAIIgJAQg");
	this.shape_78.setTransform(577.6,130.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgCgCgFQgEgEAAgGIANAAQAAADACACIAGAFIAFABIAGABQAGAAAFgCQAEgCADgEQADgEABgGQACgEAAgHIAAgFIgBAAQgDAHgHADQgGAEgHAAQgJAAgGgEQgHgDgEgFQgFgFgCgIQgCgFAAgJIACgNQACgIAEgGQAFgGAGgEQAHgDAJAAQAIAAAGADQAGADAEAGIAAgLIALAAIAABGQAAAKgBAHQgDAHgEAFQgJAJgSAAIgKgBgAgJgpQgEADgDADIgEAJIgBALIABAKQABAFACAEQADAEAFADQADADAGAAQAGAAAEgDQAFgDACgEQADgEABgFQACgFAAgGQAAgFgCgFQgBgFgCgEQgDgDgEgDQgEgCgGAAQgGAAgEACg");
	this.shape_79.setTransform(571.6,131.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_80.setTransform(557.5,129);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgFgBgDgEQgDgCgDgEQgBgEAAgGQAAgGABgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgCABgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgIADgFQADgEAEgDQAFgEAGgBQAGgCAGABIAKAAQAFABAEACQAFADACAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgCgCgAAKACIgJABIgIABIgIACQgDABgCAEQgCADAAAEIABAGIAEADIAEACIAGABQAGAAADgDQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDABg");
	this.shape_81.setTransform(547.1,130.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_82.setTransform(538.9,130.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFAAgFABQgEACgDADQgDADgBAEQgBAEAAAFIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_83.setTransform(530.7,129);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAHBFIgJgQIgHgRIgFgSQgCgIAAgKIACgSIAEgRQAGgSALgPIAKAAIgKAQIgGARQgDARAAASIABASIACARQAFARALARg");
	this.shape_84.setTransform(525,130.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgGAFIgHAEQgGACgIABIgKgBQgEgBgEgEQgDgCgCgEQgCgEAAgGQAAgGACgFQACgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgCABgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgIADgFQADgEAEgDQAFgEAGgBQAFgCAHABIAKAAQAFABAEACQAFADACAEQACAEABAHIAAAnIAAAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgDgCgAAKACIgJABIgIABIgIACQgDABgCAEQgCADAAAEIABAGIAEADIAEACIAGABQAGAAADgDQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDABg");
	this.shape_85.setTransform(514.7,130.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_86.setTransform(506.5,130.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_87.setTransform(500.8,129);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFAAgFABQgEACgDADQgDADgBAEQgBAEAAAFIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_88.setTransform(495,129);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgIACgHQACgHAFgHQAEgFAHgDQAHgDAIAAQAHgBAGACIAKAFQAEADADAGQADAEABAIIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFADAFAAQAJgBAGgFQAFgFABgIIANAAQgBAHgDAGQgCAFgFAEQgEAEgGACQgGACgHAAQgIgBgHgCg");
	this.shape_89.setTransform(486.8,130.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgFgCgIQgDgHAAgJQAAgHADgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAKAAAGADQAIADAEAFQAFAGADAIQACAHAAAHQAAAJgCAHQgDAIgFAFQgEAGgIADIgHACIgJABgAgIgaQgFACgDAEQgDADgCAGQgCAFAAAGQAAAIACAFQACAGADADQADAEAFABQAEADAEAAQAFAAAFgDQAEgBADgEQADgDACgGQACgFAAgIQAAgGgCgFQgCgGgDgDQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_90.setTransform(478.5,130.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgUAzIgIgFIgHgGQgGgHgDgLQgDgKAAgMQAAgKADgKIAFgKIAFgIQAGgJAKgDQAEgDAGgBIALgBQAIAAAHACQAIADAGADQAGAFADAGQAEAHACAJIgPAAQgCgMgIgGQgEgCgFgBQgFgCgFAAQgJAAgHAEQgHADgEAGQgEAGgCAIQgDAIAAAIQAAAJADAHQACAJAEAGQAEAGAHAEQAHADAJAAQAGAAAGgCQAGgCADgFQAEgEADgGQACgFAAgHIAPAAQgCAUgMALQgMAMgUAAQgMAAgKgFg");
	this.shape_91.setTransform(468.8,129);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("AqEimIUJFN");
	this.shape_92.setTransform(352.4,124.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgQBGIAKgRIAGgRIACgRIABgSQAAgTgEgQQgEgRgLgSIAKAAIAJARIAHARQADAIACAKQACAIAAAKQAAARgGASQgDAJgFAJIgJAQg");
	this.shape_93.setTransform(321,88.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_94.setTransform(315.5,88.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAEQADAFABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_95.setTransform(307.4,88.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIAAIgKgBQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgGACgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgFgBQgJAAgFADQgGADAAAIIgNAAQAAgHAEgFQACgEAEgEQAFgDAGgBQAGgCAGAAIAJACQAGAAAEADQAEACADAEQADAEgBAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgDgCgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDACgDIABgGIAAgMQgDABgEAAg");
	this.shape_96.setTransform(291.2,88.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_97.setTransform(285.4,87.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIAAIgKgBQgFgBgDgCQgEgDgCgEQgBgEAAgGQAAgGABgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQADgCAAgEQAAgFgCgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHAEgFQACgEAEgEQAFgDAGgBQAFgCAHAAIAJACQAGAAAEADQAEACADAEQADAEgBAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgDgCgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDACgDIABgGIAAgMQgDABgEAAg");
	this.shape_98.setTransform(279.9,88.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAHBGIgJgRIgHgRIgFgRQgCgJAAgKIACgRIAEgSQAGgSALgQIAKAAIgKARIgGASQgDAQAAASIABASIACASQAFAQALASg");
	this.shape_99.setTransform(265.3,88.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACADQACAEADACIAGACIAGAAIAHAAIAGgCQADgBABgCQACgCABgEQgBgFgEgDQgDgCgGgBIgLgEIgMgDQgGgBgEgFQgDgEAAgHQAAgGACgEQADgFAEgCQAFgDAFgBIAJgCQAHAAAFACQAFABAFACQAEADACAFQADAFABAHIgNAAIgCgHIgEgEIgGgBIgFgBIgGABIgFABIgEADQgCACAAADQABADACACIAFAEIAIACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgFACgGABIgMABIgLgBg");
	this.shape_100.setTransform(255.1,88.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_101.setTransform(249.7,87.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgDgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQABgCAAgEQAAgFgBgCIgEgEIgFgBIgGgBQgHAAgGADQgFADgBAIIgMAAQAAgHADgFQACgEAFgEQAEgDAGgBQAGgCAGAAIAJACQAGAAAEADQAEACADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgDgCgAAJABIgIACIgIABIgHADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDACgDIAAgGIAAgMQgCABgEAAg");
	this.shape_102.setTransform(244.2,88.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGACgIAAIgKgBQgFgBgDgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEADgDIAJgCIAJgDIAKgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgFgBQgHAAgGADQgFADgBAIIgMAAQAAgHACgFQADgEAEgEQAFgDAGgBQAGgCAGAAIAKACQAFAAAEADQAFACACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgCgCgAAKABIgJACIgHABIgIADQgEABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAAEgCQAEgBADgCQADgDABgDIABgGIAAgMQgCABgDAAg");
	this.shape_103.setTransform(227.8,88.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAEQADAFABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_104.setTransform(219.6,88.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_105.setTransform(328.5,69.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgBQgFgCgDgDQgEgCgCgEQgBgEAAgGQAAgHABgEQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQADgDAAgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgHAEgGQACgEAEgEQAFgDAGgBQAFgBAHAAIAJABQAGAAAEACQAEADADAEQADAEgBAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIAEAAIAAAJQgEADgGAAQgFAAgDgDgAAJABIgIACIgIABIgIADQgDAAgCADQgCAEAAAEIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_106.setTransform(321.7,69.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgFgCgHQgCgHAAgJQAAgHACgIQACgIAFgGQAEgFAHgDQAHgEAIABQAHAAAGABIAKAFQAEADADAFQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgFABgKIANAAQgBAIgDAGQgCAFgFAEQgEAEgGABQgGADgHAAQgIAAgHgDg");
	this.shape_107.setTransform(301.9,69.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_108.setTransform(296.1,69.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgFgCgHQgCgHAAgJQAAgHACgIQACgIAFgGQAEgFAHgDQAHgEAIABQAHAAAGABIAKAFQAEADADAFQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgFABgKIANAAQgBAIgDAGQgCAFgFAEQgEAEgGABQgGADgHAAQgIAAgHgDg");
	this.shape_109.setTransform(285.9,69.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_110.setTransform(280.2,68);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQgBgDgCgCQgBgDgDgBIgHgBQgGAAgDACIgHAFQgCADgBAEIgBAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAIAAQAGAAAEACQAFABAEADQADACABAFQACAEAAAGIAAA4g");
	this.shape_111.setTransform(272.2,69.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDADgBADQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_112.setTransform(261.8,69.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACAEQABADAEABIAGADIAGAAIAHAAIAGgCQADAAABgDQACgDAAgDQAAgFgDgDQgEgCgFgBIgMgDIgMgEQgGgCgEgEQgDgEAAgIQAAgFADgFQACgDAEgDQAFgDAFgBIAKgBQAFAAAGABQAFABAEACQAFADACAFQADAFAAAHIgMAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACADIAGADIAJACIAHADIAKACIAIADIAGAGQACAEAAAFQAAAHgDAFQgDAEgEADQgGADgFACIgMABIgLgBg");
	this.shape_113.setTransform(254,69.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDADgBADQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_114.setTransform(242.1,69.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDADgBADQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_115.setTransform(234.1,69.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_116.setTransform(228.2,69.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AATA1IAAg0IgBgGIgDgEIgFgDIgGgCQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgCIAGgEIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_117.setTransform(221.1,68);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgGA1IAAheIgkAAIAAgMIBVAAIAAAMIgkAAIAABeg");
	this.shape_118.setTransform(212.7,68);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1,1,1).p("AkBqHIIDUP");
	this.shape_119.setTransform(287.8,172.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("AiokUIFRIp");
	this.shape_120.setTransform(290.1,137.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1,1,1).p("ABQFFIifqJ");
	this.shape_121.setTransform(532,371.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1,1,1).p("AFZGBIqxsB");
	this.shape_122.setTransform(505.5,365.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgRAmQgFgDgDgDQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAEAHABQAFgBAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_123.setTransform(563.3,436.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_124.setTransform(553.7,434.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIABIgKgBQgEgCgEgDQgDgCgDgEQgCgEAAgGQAAgHACgEQADgEADgDIAJgDIAJgCIAKgBIAIgCIAGgDQACgCgBgDQAAgFgBgCIgEgEIgFgCIgGAAQgIAAgFADQgGADAAAJIgMAAQAAgHADgGQACgEAFgEQAEgCAGgCQAGgCAGABIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAJABIgIACIgIABIgHACQgEABgCADQgCADAAAFIABAGIADADIAFACIAGABQAGgBAEgCQAEgBADgCQADgDACgEIAAgFIAAgMQgCABgEAAg");
	this.shape_125.setTransform(538.5,436.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_126.setTransform(530.3,436.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_127.setTransform(524.6,434.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFAAgFABQgEACgDADQgDAEgBADQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_128.setTransform(518.8,434.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgEAIABQAHgBAGACIAKAFQAEADADAFQADAFABAIIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFADAFAAQAJgBAGgFQAFgEABgKIANAAQgBAIgDAGQgCAFgFAEQgEADgGADQgGACgHAAQgIgBgHgCg");
	this.shape_129.setTransform(510.6,436.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgDgHABgJQgBgHADgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAFgGADIgIADIgJABgAgJgaQgEACgDAEQgEADgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQADgDADgGQABgFAAgIQAAgGgBgFQgDgGgDgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_130.setTransform(502.3,436.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgEAIABQAHgBAGACIAKAFQAEADADAFQADAFABAIIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFADAFAAQAJgBAGgFQAFgEABgKIANAAQgBAIgDAGQgCAFgFAEQgEADgGADQgGACgHAAQgIgBgHgCg");
	this.shape_131.setTransform(494,436.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_132.setTransform(554.9,417.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgMAnQgFgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACADADADIAGACIAGAAIAHAAIAGgBQADgCABgCQACgCABgEQgBgFgEgCQgDgDgGgBIgLgEIgMgDQgGgCgEgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAEgBIAKgCQAHAAAFACQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgCIgFgBIgGABIgGABIgDADQgCACAAADQAAADADACIAFAEIAIACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgFACgGABIgMABIgMgBg");
	this.shape_133.setTransform(545.3,418.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgOAlQgHgDgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_134.setTransform(537.6,418.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgFAnIgdhNIAOAAIAVBAIAAAAIAVhAIAOAAIgdBNg");
	this.shape_135.setTransform(529.8,418.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AATAmQgCgDgBgGIgGAFIgGAEQgGACgIAAIgKgBQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgFgBQgJAAgFADQgFADgBAIIgNAAQABgGADgFQACgFAFgDQAEgDAGgCQAGgCAGAAIAJABQAGABAEADQAEACADAEQACAEAAAHIAAAmIABAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgDgCgAAJABIgIACIgIABIgIADQgDABgCADQgCACAAAFIABAFIADAEIAFACIAGAAQAGAAADgBQAFgCADgDQADgCACgDIABgGIAAgMQgDABgEAAg");
	this.shape_136.setTransform(522.2,418.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAYA2IgYhZIgZBZIgPAAIgbhqIAPAAIAVBYIAYhYIAPAAIAXBYIAXhYIANAAIgcBqg");
	this.shape_137.setTransform(511.6,417.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1,1,1).p("Aj+ELIH9oU");
	this.shape_138.setTransform(380.3,362.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AggAnIAAgKIAug4IgqAAIAAgLIA6AAIAAAJIguA4IAxAAIAAAMg");
	this.shape_139.setTransform(315.1,364.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAcA1IAAgxIg3AAIAAAxIgPAAIAAhpIAPAAIAAAuIA3AAIAAguIAPAAIAABpg");
	this.shape_140.setTransform(306.1,362.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgEgCgGIgEgMIgBgMIAAgLIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAALIgBAMIgEAMQgCAGgEAEQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEACgCAEIgEAIIgCAJIgBAKIAAAHIAAANQABAIACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgIIABgNIAAgHIgBgKIgCgJIgEgIQgCgEgEgCQgEgBgFAAQgEAAgEABg");
	this.shape_141.setTransform(292.4,362.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgOAzQgGgCgFgDQgEgFgDgFQgCgGgBgHIANAAIACAHIAEAHIAHADQAFACAEAAQAEAAAEgCQAEgBADgDQADgDACgFQACgFAAgGQAAgGgCgEQgBgEgDgDIgIgFQgFgBgEAAQgGAAgFACIgJAGIgLAAIAKg2IAzAAIAAALIgpAAIgGAfQAEgEAFgBQAFgCAFAAQAHAAAHACQAGACAFAFQAEAEADAGQACAHAAAJQAAAHgCAGQgCAGgFAFQgFAGgGACQgIADgIAAQgHAAgGgCg");
	this.shape_142.setTransform(284,362.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(1,1,1).p("AFyGRIrjsh");
	this.shape_143.setTransform(421.6,169.5,1,1,13.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgfAnIAAgKIAtg4IgrAAIAAgLIA8AAIAAAJIgvA4IAwAAIAAAMg");
	this.shape_144.setTransform(417.1,110.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAdA1IAAgxIg4AAIAAAxIgOAAIAAhpIAOAAIAAAuIA4AAIAAguIANAAIAABpg");
	this.shape_145.setTransform(408.1,109.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgEgCgGIgEgMIgBgMIAAgLIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAALIgBAMIgEAMQgCAGgEAEQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEACgCAEIgEAIIgCAJIgBAKIAAAHIAAANQABAIACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgIIABgNIAAgHIgBgKIgCgJIgEgIQgCgEgEgCQgEgBgFAAQgEAAgEABg");
	this.shape_146.setTransform(394.4,109.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgEgCgGIgEgMIgBgMIAAgLIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAALIgBAMIgEAMQgCAGgEAEQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEACgCAEIgEAIIgCAJIgBAKIAAAHIAAANQABAIACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgIIABgNIAAgHIgBgKIgCgJIgEgIQgCgEgEgCQgEgBgFAAQgEAAgEABg");
	this.shape_147.setTransform(386.1,109.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgEgCgGIgEgMIgBgMIAAgLIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAALIgBAMIgEAMQgCAGgEAEQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEACgCAEIgEAIIgCAJIgBAKIAAAHIAAANQABAIACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgIIABgNIAAgHIgBgKIgCgJIgEgIQgCgEgEgCQgEgBgFAAQgEAAgEABg");
	this.shape_148.setTransform(377.8,109.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgHAMIAEgDIADgEIAAgEIABgDIgIAAIAAgQIAPAAIAAAPIgBAHIgDAGQgDAHgIACg");
	this.shape_149.setTransform(371.5,115);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgiA1QABgJACgHQADgHAEgFIAJgIIALgHIALgIIAIgGIAFgIQACgEAAgGQAAgEgCgEQgBgDgDgDQgDgCgEgBIgIgCQgEAAgEACQgEADgDAEQgCADgBAFQgCAFABAFIgNAAQgBgJADgGQACgHAEgFQAEgFAHgDQAHgDAHAAQAHAAAGACQAGACAFAEQAEAEADAFQACAGAAAIQAAAHgCAFIgGAJIgIAHIgJAHIgKAGIgIAGQgFADgCAEQgDAEgBAFIA1AAIAAALg");
	this.shape_150.setTransform(365,109.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(1,1,1).p("AhEDTICJml");
	this.shape_151.setTransform(543.9,198.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AggAnIAAgKIAug4IgqAAIAAgLIA6AAIAAAJIguA4IAxAAIAAAMg");
	this.shape_152.setTransform(573.4,168.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAcA1IAAgwIg3AAIAAAwIgPAAIAAhqIAPAAIAAAvIA3AAIAAgvIAPAAIAABqg");
	this.shape_153.setTransform(564.4,166.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgFgCgFIgEgMIgBgLIAAgMIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAAMIgBALIgEAMQgCAFgEAFQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEADgCADIgEAIIgCAJIgBAKIAAAHIAAAOQABAHACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgHIABgOIAAgHIgBgKIgCgJIgEgIQgCgDgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_154.setTransform(550.7,167);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgFgCgFIgEgMIgBgLIAAgMIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAAMIgBALIgEAMQgCAFgEAFQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEADgCADIgEAIIgCAJIgBAKIAAAHIAAAOQABAHACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgHIABgOIAAgHIgBgKIgCgJIgEgIQgCgDgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_155.setTransform(542.4,167);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgFgCgFIgEgMIgBgLIAAgMIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAAMIgBALIgEAMQgCAFgEAFQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEADgCADIgEAIIgCAJIgBAKIAAAHIAAAOQABAHACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgHIABgOIAAgHIgBgKIgCgJIgEgIQgCgDgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_156.setTransform(534.1,167);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgHAMIAEgDIADgEIAAgEIABgDIgIAAIAAgQIAPAAIAAAPIgBAHIgDAGQgDAHgIACg");
	this.shape_157.setTransform(527.8,172.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAHA1IAAhLIgaAAIAAgKIAKgBQAFgBAEgCQAEgCADgEQACgEABgGIAKAAIAABpg");
	this.shape_158.setTransform(520.8,166.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgfAnIAAgKIAtg4IgrAAIAAgLIA8AAIAAAJIgvA4IAxAAIAAAMg");
	this.shape_159.setTransform(532.7,139.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAdA1IAAgwIg4AAIAAAwIgOAAIAAhqIAOAAIAAAvIA4AAIAAgvIANAAIAABqg");
	this.shape_160.setTransform(523.7,138.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgFgCgFIgEgMIgBgLIAAgMIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAAMIgBALIgEAMQgCAFgEAFQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEADgCADIgEAIIgCAJIgBAKIAAAHIAAANQABAIACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgIIABgNIAAgHIgBgKIgCgJIgEgIQgCgDgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_161.setTransform(510,138.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgFgCgFIgEgMIgBgLIAAgMIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAAMIgBALIgEAMQgCAFgEAFQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEADgCADIgEAIIgCAJIgBAKIAAAHIAAANQABAIACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgIIABgNIAAgHIgBgKIgCgJIgEgIQgCgDgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_162.setTransform(501.7,138.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgFgCgFIgEgMIgBgLIAAgMIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAAMIgBALIgEAMQgCAFgEAFQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEADgCADIgEAIIgCAJIgBAKIAAAHIAAANQABAIACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgIIABgNIAAgHIgBgKIgCgJIgEgIQgCgDgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_163.setTransform(493.4,138.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgHAMIAEgDIADgEIAAgEIABgDIgIAAIAAgQIAPAAIAAAPIgBAHIgDAGQgDAHgIACg");
	this.shape_164.setTransform(487.2,143.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgNA0QgGgCgEgEQgEgFgCgFIgEgMIgBgLIAAgMIAAgMIABgMIAEgLQACgGAEgEQAEgEAGgCQAGgDAHAAQAIAAAGADQAGACAEAEQAEAEACAGIAEALIABAMIAAAMIAAAMIgBALIgEAMQgCAFgEAFQgEAEgGACQgGACgIAAQgHAAgGgCgAgIgoQgEADgCADIgEAIIgCAJIgBAKIAAAHIAAANQABAIACAHQACAGAEAFQAFAEAHAAQAIAAAFgEQAEgFACgGQACgHAAgIIABgNIAAgHIgBgKIgCgJIgEgIQgCgDgEgDQgEgBgFAAQgEAAgEABg");
	this.shape_165.setTransform(481,138.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgiA1QABgJACgHQADgHAEgFIAJgIIALgHIALgIIAIgGIAFgIQACgEAAgGQAAgEgCgEQgBgDgDgDQgDgCgEgBIgIgCQgEAAgEACQgEADgDAEQgCADgBAFQgCAFABAFIgNAAQgBgJADgGQACgHAEgFQAEgFAHgDQAHgDAHAAQAHAAAGACQAGACAFAEQAEAEADAFQACAGAAAIQAAAHgCAFIgGAJIgIAHIgJAHIgKAGIgIAGQgFADgCAEQgDAEgBAFIA1AAIAAALg");
	this.shape_166.setTransform(472.4,138.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(1,1,1).p("Ah6oYID1Qx");
	this.shape_167.setTransform(504.3,335.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgQBFIAKgRIAGgQIACgRIABgSQAAgTgEgQQgEgSgLgQIAKAAIAJAQIAHARQADAJACAIQACAKAAAJQAAARgGASQgDAJgFAIIgJAQg");
	this.shape_168.setTransform(573.2,423);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgDgFAAgIIANAAQAAAEACADQACADACADIAHACIAHABIAGgBIAGgBQADgBABgDQADgCAAgEQAAgFgFgCQgDgDgGgCIgLgDIgMgDQgFgCgFgDQgDgFAAgHQAAgGACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgFADQgEADgGAAIgMABIgMgBg");
	this.shape_169.setTransform(567.9,423.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_170.setTransform(560.2,423.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_171.setTransform(532.5,423.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgEQACgDACgEQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgBg");
	this.shape_172.setTransform(524.3,423.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAYA2IAAgnQgEAGgGADQgHACgHAAIgJAAIgHgCQgGgEgFgFQgEgGgDgIQgCgGAAgIQAAgIACgHQACgIAFgGQAEgFAHgDQAHgDAJgBIAFABIAHACIAGAEIAGAGIAAgLIANAAIAABqgAgKgnQgFACgCAEIgEAKIgBALQAAAFABAGIAEAIQADAEAFACQAFACAFABQAGgBAFgCQAEgDADgDQADgFABgEIABgKIgBgMQgBgFgDgEQgDgEgFgCQgEgDgHAAQgGAAgEADg");
	this.shape_173.setTransform(515.5,424.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_174.setTransform(507.3,423.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFAKAAIAAAOQgHAAgFACQgGACgDAEQgCAEgCAGQgCAGAAAGIAAAjg");
	this.shape_175.setTransform(501.5,423);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFAKAAIAAAOQgHAAgGACQgFACgDAEQgCAEgCAGQgCAGAAAGIAAAjg");
	this.shape_176.setTransform(488,423);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_177.setTransform(481.1,423.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_178.setTransform(472.8,421.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgEgDgEgEQgDgEAAgGIANAAQABADACADIAEAEIAHABIAFABQAHAAAEgCQAFgCACgEQADgEABgGQABgFAAgGIAAgFIAAAAQgDAHgHAEQgGACgHAAQgJAAgGgCQgGgEgFgFQgEgFgDgIQgBgGAAgHIABgPQACgHAEgGQAEgFAIgEQAGgFAJAAQAHABAHADQAGADADAHIAAgMIANAAIAABGQAAAKgDAHQgCAHgEAFQgJAKgSgBIgLgBgAgIgpQgFACgDAEIgEAJIgBALIABALQABAEADAEQACAFAFACQAEACAFABQAGgBAFgCQAEgCADgFQADgEAAgEIACgMIgCgKQgBgEgCgFQgCgDgFgCQgEgDgGAAQgFAAgEACg");
	this.shape_179.setTransform(464.2,424.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_180.setTransform(458.4,421.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_181.setTransform(452.6,421.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgCQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_182.setTransform(549.6,405.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIAAIgKgBQgFgCgDgDQgEgCgBgEQgDgEAAgGQAAgHADgEQACgEADgDIAJgCIAJgDIAKgCIAIgBIAGgDQABgCAAgDQABgEgCgDIgEgEIgFgCIgGAAQgHAAgGADQgFADgBAJIgMAAQAAgHADgGQACgEAFgEQAEgDAGgBQAFgBAHAAIAJABQAGAAAEACQAEADADAEQADAEAAAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAJQgDADgGAAQgFAAgCgDgAAJABIgIACIgHABIgIADQgEAAgCADQgCAEAAAEIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDACgEIAAgFIAAgMQgCABgEAAg");
	this.shape_183.setTransform(525.1,405.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgDIgGgCQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAtIgNAAIAAhrIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_184.setTransform(516.7,404.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_185.setTransform(498.7,404.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_186.setTransform(495.4,404.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgHAFIgGAEQgGADgIAAIgKgBQgEgCgEgDQgDgCgDgEQgBgEAAgGQAAgHABgEQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgDQACgCABgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgHADgGQADgEAEgEQAFgDAGgBQAFgBAHAAIAKABQAFAAAEACQAFADACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEADgGAAQgFAAgCgDgAAKABIgJACIgIABIgIADQgDAAgCADQgCAEAAAEIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDAAg");
	this.shape_187.setTransform(489.9,405.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQgBgDgBgCQgCgDgDgBIgHgBQgFAAgFACIgGAFQgCADgCAEIgBAFIAAAwIgMAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACACAFQADAEAAAGIAAA4g");
	this.shape_188.setTransform(479.4,405.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgPA2QgIgDgGgEIgFgFIgFgHQgDgHAAgKIANAAQAAAHADAFQADAFAEADQAFADAFACQAFABAGAAIAKgBIAIgDQAEgCADgEQACgEAAgFQAAgGgDgDQgDgEgFgCQgFgDgGAAIgMgEIgMgDIgLgDQgFgEgCgEQgEgGAAgHIABgIIADgGQADgFAGgEQAFgFAHgBQAHgCAHAAQAIAAAGACQAIACAFAEQAFAEAEAHQADAGAAAJIgOAAQgBgMgHgFQgIgFgKAAIgJAAQgEABgDADQgDACgDADQgBAEAAAFQAAAFACADQAEADAEACIALADIAMADIAMAEQAGACAFACQAFADADAGQADAFAAAIQAAAJgEAFQgEAHgFADQgHAEgHACQgIACgGAAQgJAAgIgCg");
	this.shape_189.setTransform(468.1,404.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgQBFIAKgRIAGgQIACgRIABgSQAAgTgEgQQgEgSgLgQIAKAAIAJAQIAHARQADAJACAIQACAKAAAJQAAARgGASQgDAJgFAIIgJAQg");
	this.shape_190.setTransform(390.6,423);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgDgFAAgIIANAAQAAAEACADQABADADADIAHACIAHABIAGgBIAGgBQADgBACgDQACgCAAgEQAAgFgFgCQgDgDgGgCIgLgDIgMgDQgFgCgEgDQgEgFAAgHQAAgGACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADADAEQACAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACACIAGAEIAHADIAIABIAKADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgFADQgEADgGAAIgMABIgMgBg");
	this.shape_191.setTransform(385.3,423.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_192.setTransform(377.6,423.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_193.setTransform(371.9,421.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgFgCgIQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFACAFABQAJAAAGgGQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGABgHAAQgIABgHgDg");
	this.shape_194.setTransform(366.2,423.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_195.setTransform(349.9,423.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgEQACgDACgEQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgBg");
	this.shape_196.setTransform(341.7,423.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAYA2IAAgnQgEAGgGADQgHACgHAAIgJAAIgHgCQgGgEgFgFQgEgGgDgIQgCgGAAgIQAAgIACgHQACgIAFgGQAEgFAHgDQAHgDAJgBIAFABIAHACIAGAEIAGAGIAAgLIANAAIAABqgAgKgnQgFACgCAEIgEAKIgBALQAAAFABAGIAEAIQADAEAFACQAFACAFABQAGgBAFgCQAEgDADgDQADgFABgEIABgKIgBgMQgBgFgDgEQgDgEgFgCQgEgDgHAAQgGAAgEADg");
	this.shape_197.setTransform(332.9,424.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_198.setTransform(324.7,423.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_199.setTransform(313.8,421.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_200.setTransform(305.4,423);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_201.setTransform(298.5,423.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AAQAnIgQg9IgPA9IgNAAIgZhNIAOAAIARA/IABAAIAPg/IANAAIARA/IARg/IANAAIgYBNg");
	this.shape_202.setTransform(288.7,423.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgGgCgHQgCgHgBgIQABgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAIADQAGADAFAFQAFAGACAIQACAHAAAIQAAAIgCAHQgCAHgFAGQgFAGgGADIgIACIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFACAEAAQAFAAAEgCQAFgCADgEQAEgEACgFQABgGAAgGQAAgHgBgFQgCgFgEgFQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_203.setTransform(278.7,423.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAHBFIgJgQIgHgRIgFgRQgCgKAAgJIACgSIAEgRQAGgSALgPIAKAAIgKARIgGARQgDAQAAASIABASIACARQAFASALAQg");
	this.shape_204.setTransform(269.6,423);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_205.setTransform(375.5,404.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgCQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_206.setTransform(369.9,405.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_207.setTransform(361.6,405.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_208.setTransform(353.3,405.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGADgIAAIgKgBQgEgCgEgDQgEgCgCgEQgCgEAAgGQAAgHACgEQADgEADgDIAJgCIAKgDIAJgCIAIgBIAGgDQACgCAAgDQgBgEgBgDIgEgEIgFgCIgGAAQgIAAgFADQgFADgBAJIgNAAQABgHADgGQACgEAFgEQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDADgGAAQgFAAgDgDgAAJABIgIACIgIABIgIADQgDAAgCADQgCAEAAAEIABAGIADADIAFACIAGAAQAGAAADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_209.setTransform(345.3,405.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgDIgGgCQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAtIgNAAIAAhrIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_210.setTransform(337,404.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgCQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_211.setTransform(316.7,405.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgLA2QgFgBgEgDQgGgDgCgEQgDgEAAgHIAMAAQABAEABACIAGAFIAGACIAFAAQAGAAAFgCQAEgCADgEQADgEABgFQABgFABgHIAAgFIgBAAQgDAHgHADQgGADgHABQgJgBgGgDQgGgDgFgFQgFgFgBgHQgDgHAAgIIACgNQACgIAEgGQAFgGAGgEQAHgDAJAAQAHgBAHAEQAGADAEAGIAAgKIALAAIAABGQAAAJgCAHQgCAHgEAFQgJAJgSAAIgLgBgAgJgpQgEADgDAEIgEAJIgBAKIABAKQABAFACAEQADAEAEADQAEACAGAAQAGAAAEgCQAFgDACgEQADgEACgFIABgLIgBgJQgBgFgDgEQgDgEgEgDQgEgCgGAAQgFAAgFACg");
	this.shape_212.setTransform(308.1,407.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIAAIgKgBQgFgCgDgDQgEgCgBgEQgDgEAAgGQAAgHADgEQACgEADgDIAJgCIAJgDIAKgCIAIgBIAGgDQABgCAAgDQABgEgCgDIgEgEIgFgCIgGAAQgHAAgGADQgFADgBAJIgMAAQAAgHADgGQACgEAFgEQAEgDAGgBQAFgBAHAAIAJABQAGAAAEACQAFADACAEQADAEAAAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAJQgDADgGAAQgFAAgCgDgAAJABIgIACIgHABIgIADQgEAAgCADQgCAEAAAEIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDACgEIAAgFIAAgMQgCABgEAAg");
	this.shape_213.setTransform(295.6,405.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgiA2IAAhrIAOAAIAABfIA4AAIAAAMg");
	this.shape_214.setTransform(287.8,404.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(1,1,1).p("AtjPdIH1mzAMaA9IBKwZ");
	this.shape_215.setTransform(411.1,251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:340.1,y:91.8}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:366.5,y:91.8}},{t:this.shape_32},{t:this.shape_31,p:{x:380.4,y:90.4}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:322.1,y:422.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},83).to({state:[]},369).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{x:486.8,y:130.2}},{t:this.shape_74},{t:this.shape_73,p:{x:500.8,y:128.7}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{x:525,y:130.1}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:557.5,y:128.7}},{t:this.shape_64,p:{x:563.3,y:130.1}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:153.7,y:181.4}},{t:this.shape_27,p:{x:159.7,y:180.1}},{t:this.shape_57,p:{x:167.3,y:181.4}},{t:this.shape_56,p:{x:173.4,y:181.6}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:197,y:97.2}},{t:this.shape_51,p:{x:205.3,y:97.2}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_36,p:{x:245.6,y:97.2}},{t:this.shape_46,p:{x:256.4,y:95.9}},{t:this.shape_45},{t:this.shape_33,p:{x:273.4,y:97.2}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},43).to({state:[]},337).to({state:[{t:this.shape_61},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87,p:{x:500.8,y:129}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_36,p:{x:553.9,y:130.3}},{t:this.shape_80,p:{x:557.5,y:129}},{t:this.shape_33,p:{x:563.3,y:130.3}},{t:this.shape_79},{t:this.shape_78}]},42).to({state:[]},255).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{x:228.2,y:69.4}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109,p:{x:285.9,y:69.5}},{t:this.shape_80,p:{x:291.5,y:68}},{t:this.shape_108},{t:this.shape_107,p:{x:301.9,y:69.5}},{t:this.shape_56,p:{x:310.1,y:69.6}},{t:this.shape_87,p:{x:315.9,y:68}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_51,p:{x:235.8,y:88.5}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_46,p:{x:271.5,y:87.2}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_33,p:{x:299.2,y:88.5}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},10).to({state:[]},493).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_33,p:{x:560.7,y:418.7}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_57,p:{x:545.3,y:436.2}},{t:this.shape_124,p:{x:553.7,y:434.8}},{t:this.shape_87,p:{x:557.5,y:434.9}},{t:this.shape_123},{t:this.shape_80,p:{x:569.1,y:434.9}},{t:this.shape_27,p:{x:574.9,y:434.9}},{t:this.shape_122},{t:this.shape_121}]},10).to({state:[]},193).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_116,p:{x:302.4,y:405.5}},{t:this.shape_212},{t:this.shape_211},{t:this.shape_109,p:{x:328.8,y:405.6}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_73,p:{x:272.8,y:421.7}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_58,p:{x:318.9,y:423}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_64,p:{x:358,y:423}},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_107,p:{x:508.6,y:405.6}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_52,p:{x:533.1,y:405.5}},{t:this.shape_51,p:{x:541.4,y:405.5}},{t:this.shape_182},{t:this.shape_31,p:{x:555.2,y:404.2}},{t:this.shape_70,p:{x:447,y:423}},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_124,p:{x:496.4,y:421.6}},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_33,p:{x:540.6,y:423}},{t:this.shape_75,p:{x:548.8,y:423.1}},{t:this.shape_65,p:{x:554.5,y:421.7}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},9).wait(594));

	// btn
	this.zoom1_btn = new lib.clickZoom1();
	this.zoom1_btn.parent = this;
	this.zoom1_btn.setTransform(486.4,224.8,1,1,0,0,0,27.8,12.1);
	new cjs.ButtonHelper(this.zoom1_btn, 0, 1, 2, false, new lib.clickZoom1(), 3);

	this.zoomout_btn = new lib.btnzoomout();
	this.zoomout_btn.parent = this;
	this.zoomout_btn.setTransform(367.5,467.7,1.016,1.016,0,0,0,-12.2,10.3);
	new cjs.ButtonHelper(this.zoomout_btn, 0, 1, 1);

	this.zoom2_btn = new lib.clickReveal();
	this.zoom2_btn.parent = this;
	this.zoom2_btn.setTransform(481.1,268.8,1.58,1.58,0,0,0,27.8,12.1);
	new cjs.ButtonHelper(this.zoom2_btn, 0, 1, 2, false, new lib.clickReveal(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.zoom1_btn}]},83).to({state:[]},369).to({state:[{t:this.zoom2_btn},{t:this.zoomout_btn}]},43).to({state:[]},337).to({state:[{t:this.zoomout_btn}]},42).wait(1564));

	// btn show
	this.instance_1 = new lib.buttoncircle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(488,228.8,1,1,0,0,0,76.7,76.4);

	this.instance_2 = new lib.cochleabuttonpulse();
	this.instance_2.parent = this;
	this.instance_2.setTransform(452,280.4,1,1,0,0,0,114.5,87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},450).to({state:[]},1).to({state:[{t:this.instance_2}]},380).to({state:[]},1).to({state:[]},1561).wait(45));

	// cochlea
	this.instance_3 = new lib.cochlea();
	this.instance_3.parent = this;
	this.instance_3.setTransform(452.5,318.4,1,1,0,0,0,114.5,126.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(874).to({_off:false},0).wait(1564));

	// sound waves mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_83 = new cjs.Graphics().p("A5bVXIAAgdIh4gBIAAidIB4gBIAAnBQgKg8AAhPQAAhOATh+QAIg6ADg3QgUgLAAgWQAAgaAVgJIgBgjICgADIAAAbIAKAAQgCgbAAgjQAHi4AAg3IAAxLQgUgKgMgQQgNgSAAgYQAAgfANgSQAUgaAvgGIQ+AAQAIgJAKgFQAogVAuAtQAyAWAAAzIAAADQAHAXAGAfIARBfQAWBKAjAyQADAMAGAMQAmBSBVAAIAFAAIADAAIAKAAIADABIAIADIA2gBQEJgNDyhJQBCgUB7goQBugiBbgSICRAAQB/ASBVAdIAxAAQBsAOBkBcIAkAfQARASABANQAAAGAHAYQAGAWAAAIIAJAaIALAqIABASQADANABAUQAAAWgKAYQgRAqgnAAQgeAAgvgJQgfgHgRgFIgSgFQg3gGhrgSQjOghgagDIj8AAQgsAThSAbQhGApiiAzQhbAdhsAdIheAXIgyAJQgVgBgYAEQgfAFgXANIgjAHIgDAYQgXAdAAAoQAAAcAEAWIABAJIAAAFQgZCzAABtIADA3IAKAAIAHAPIAATjIhMgBIgDABQguABgeAFQgbAEgHAAIhfgCQhOgDgKgDIxngEIAAAgg");
	var mask_graphics_451 = new cjs.Graphics().p("ADpbcIgRABI0aAAQgKAPgXABQgOgBgKgPIirAAQgogKAAgdQAAglAogEICXAAQgDgbAAgjQAHi5AAg3IAAxLQgUgKgLgPQgOgTAAgYQAAgfAOgSQATgaAvgGIQ+AAQAIgJAKgFQAngVAuAtQAyAWAAAzIAAADQAIAXAFAgIARBeQAWBKAjAyQAEAMAFAMQAmBSBWABIAFAAIADAAIAKAAIADABIAJACIA1gBQEJgNDyhJQBCgUB7goQBugiBbgSICRAAQBKALA8AOIAEADQAbATAxAAQAeAAAhgDIAWADIARAKQBeAzAJAGQBXA4AlBRQANAtANBJQAOASAAARQAAAcgGAUQgLAogbABQgZAAgMgHIgBAAIgPgEQgbgBgogIQgggGgQgGIgTgEQg2gHhsgSQjOghgagDIj7AAQgtAThRAbQhHApiiAzQhaAdhtAdIheAXIgxAJQgWgBgYAEQgfAFgXAOIgiAHIgDAXQgYAdAAApQAAAbAEAWIACAJIgBAFQgZCzAABuQAAAjAMCXQADAIAAAKIgBALIABANQAAAQgFALQgJAXgaAAQgNAAgKgRg");
	var mask_graphics_452 = new cjs.Graphics().p("ACUb3IgSACI1KAAQgKAPgYAAQgOAAgLgPIixAAQgqgLAAgfQAAgmAqgDICcAAQgDgdAAgkQAIi/AAg6IAAxzQgVgLgMgQQgOgTAAgYQAAghAOgSQAUgbAxgGIRmAAQAIgJAKgGQApgWAxAvQAyAXAAA0IAAAEQAIAXAGAhIARBjQAXBMAlA0QADANAGALQAnBWBZAAIAGAAIACAAIALAAIADABIAJADIA4gBQESgND7hNQBEgUCAgqQBygjBegSICXAAQBMALA+AOIAEADQAdAUAzAAQAfAAAhgDIAYADIARAKQBiA1AJAGQBbA7AlBUQAOAuANBMQAPATAAASQAAAcgGAVQgLAqgdAAQgZAAgNgHIgBAAIgPgEQgdgBgpgIQghgHgRgFIgTgFQg5gHhwgSQjVgjgbgDIkFAAQguAUhUAcQhJAqioA1QheAehwAeQhSAVgQADIgzAKQgXgCgYAEQghAFgXAOIgkAIIgDAZQgZAdAAAqQAAAdAFAXIABAJIAAAFQgaC6AAByQAAAkAMCcQADAJAAAKIgBALIABAOQAAAQgFAMQgKAXgaAAQgOAAgKgRg");
	var mask_graphics_453 = new cjs.Graphics().p("AA+cSIgSACI16AAQgKAQgZAAQgPAAgLgQIi3AAQgrgLAAggQAAgnArgEIChAAQgDgdAAgmQAIjGAAg8IAAybQgWgLgMgRQgOgUAAgZQAAgiAOgTQAUgcAzgGISOAAQAJgJAKgGQArgXAyAwQA1AYAAA3IAAADQAJAZAFAiIATBmQAXBOAlA2QAEAOAGAMQAoBYBdAAIAFAAIADAAIAKAAIAEABIAJAEIA6gBQEcgOEEhPQBGgWCFgrQB2gkBigTICbAAQBPALBAAQIAFADQAdAUA1AAQAgAAAjgDIAYADIASALQBlA2AKAHQBeA8AnBXQAOAxANBOQAPATAAATQAAAdgFAWQgMArgeAAQgaAAgOgHIAAAAIgQgEQgdgBgsgJQghgHgSgFIgUgFQg7gHhzgTQjdgkgcgDIkOAAQgwAUhXAeQhMAriuA3QhhAfh0AfQhVAWgQADIg1AKQgXgCgaAFQghAFgZAOIglAIIgDAaQgaAeAAAsQAAAdAFAYIABAKIAAAFQgbDBAAB1QAAAmAMCiQAEAIAAALIgBALIABAPQAAARgFAMQgLAYgbAAQgOAAgLgSg");
	var mask_graphics_454 = new cjs.Graphics().p("AgWctIgTACI2rAAQgLARgZAAQgQAAgLgRIi+AAQgsgLAAghQAAgpAsgEICnAAQgDgeAAgnQAIjNAAg9IAAzEQgWgMgNgRQgPgUAAgaQAAgjAPgUQAVgdA1gGIS2AAQAIgKAMgGQArgXA0AxQA4AZgBA4IAAAEQAJAZAGAjIATBqQAYBRAnA4QAEAOAGAMQAqBcBfAAIAFAAIADAAIALAAIAEABIAJADIA8gBQEmgOENhSQBIgWCJgsQB7gmBlgUIChAAQBSAMBCAQIAEADQAfAVA2AAQAiAAAjgDIAZADIATALQBpA5AKAGQBgA/ApBaQAPAyAOBQQAPAVAAATQAAAegGAXQgMAtgfAAQgbAAgOgIIAAAAIgRgEQgegBgtgJQgjgHgSgGIgVgFQg8gIh4gTQjkglgdgEIkXAAQgyAWhaAeQhOAti0A5QhlAgh4AgQhYAXgQADIg3AKQgYgCgbAFQgiAFgaAPIgmAIIgDAbQgbAfAAAtQAAAfAFAZIACAKIgBAFQgcDHAAB6QAAAnANCnQAEAJAAALIgBAMIABAPQAAARgGANQgKAZgdAAQgNAAgLgTg");
	var mask_graphics_455 = new cjs.Graphics().p("AhrdJIgUABI3bAAQgLASgbAAQgQAAgLgSIjEAAQgugLAAgjQAAgpAugEICsAAQgDggAAgoQAJjUAAg/IAAztQgXgLgOgSQgPgVAAgbQAAgkAPgVQAWgeA3gFITdAAQAJgKAMgHQAtgYA1AzQA6AZAAA7IAAADQAIAbAHAkIATBtQAZBUAoA5QAEAPAHANQArBeBiAAIAGAAIADAAIALAAIAEABIAKAEIA9gBQEwgPEWhUQBLgXCNguQB+gnBpgUICmAAQBVAMBEAQIAFADQAfAWA4AAQAjAAAlgDIAaADIATAMQBsA6ALAHQBkBBApBcQAQA0AOBTQAQAVAAAUQAAAfgGAYQgNAugfAAQgcAAgPgIIAAAAIgRgEQgggBgugJQgkgIgTgGIgVgFQg/gIh8gUQjrgmgegEIkhAAQgzAWhdAgQhRAui6A7QhnAhh9AhQhaAYgSADIg4AKQgZgBgcAEQgjAGgbAPIgnAIIgDAcQgaAhAAAuQAAAgAEAZIACALIgBAFQgcDOAAB9QAAApANCtQAEAJAAALIgBAMIABAQQAAASgGANQgLAagdAAQgPAAgLgTg");
	var mask_graphics_456 = new cjs.Graphics().p("Ah9dkIgUACI4LAAQgMARgbAAQgRAAgMgRIjKAAQgvgMAAgkQAAgrAvgEICyAAQgDghAAgpQAIjaAAhCIAA0VQgXgMgOgSQgQgWAAgcQAAglAQgVQAXgeA4gGIUFAAQAKgLALgHQAvgZA3A2QA7AZAAA8IAAAEQAJAbAHAlIAUBxQAZBXAqA7QAEAPAHANQAtBiBmAAIAGAAIADAAIAKAAIAEABIALAEIA/gCQE5gPEfhXQBNgYCTgvQCCgoBrgVICsAAQBXAMBHARIAFAEQAgAWA6AAQAkAAAmgDIAbADIAUAMQBvA8ALAHQBnBDArBgQAQA1APBWQAQAWAAAUQAAAggGAZQgNAvghAAQgcAAgPgIIgBABIgSgFQgggBgwgKQglgHgTgGIgWgGQhBgIiAgVQjzgngfgEIkpAAQg2AXhfAgQhUAwjAA9QhrAiiAAiQheAYgRAEIg7ALQgZgCgdAEQgkAGgcAQIgnAJIgEAcQgcAiAAAwQAAAgAFAbIACALIgBAFQgeDUAACCQAAAqAOCyQAEAJAAAMIgBANIABAQQAAASgGAOQgLAageAAQgPAAgMgTg");
	var mask_graphics_457 = new cjs.Graphics().p("AiBd/IgVACI47AAQgMASgcAAQgRAAgMgSIjRAAQgxgMAAglQAAgtAxgEIC4AAQgDghgBgrQAJjhAAhEIAA09QgYgMgOgTQgRgXAAgcQAAgmARgWQAXgfA6gHIUtAAQAKgLAMgHQAwgZA5A2QA9AbAAA+IAAADQAJAcAHAnIAUB0QAbBZArA9QAEAQAHAOQAuBkBpAAIAGAAIADAAIAMAAIAEABIAKAEIBCgBQFDgQEnhaQBQgYCXgxQCGgpBvgWICxAAQBaANBJASIAFADQAhAXA8AAQAlAAAngDIAcADIAVAMQByA/ALAHQBrBFAsBiQARA3APBZQARAWAAAVQAAAhgHAaQgNAxgiAAQgeAAgPgJIgBABIgSgFQghgBgxgKQgngIgUgGIgXgGQhCgIiEgWQj7gogfgEIkzAAQg3AXhjAiQhWAxjGA/QhuAjiEAjQhhAZgSAEIg8ALQgbgCgdAFQgmAGgcAQIgpAJIgEAdQgcAjAAAxQAAAiAFAbIABALIAAAGQgfDbAACFQAAAsAOC3QAFAKAAAMIgCANIACARQAAATgGAOQgMAbgfAAQgQAAgMgUg");
	var mask_graphics_458 = new cjs.Graphics().p("AiFeaIgWACI5qAAQgNATgdAAQgRAAgNgTIjXAAQgygNAAglQAAguAygFIC9AAQgDgiAAgsQAJjoAAhGIAA1lQgZgNgPgTQgRgXAAgeQAAgmARgXQAYghA8gHIVVAAQAKgLANgHQAxgaA7A4QA+AcABA/IAAAEQAJAdAHAnIAVB4QAbBcAtA/QAEAQAHAOQAwBoBsAAIAGAAIADAAIAMAAIAEABIALAEIBDgCQFNgQExhcQBSgZCbgzQCKgqBzgWIC2AAQBdANBLASIAFADQAiAYA+AAQAmAAAogDIAdADIAVANQB2BAAMAHQBtBHAuBmQARA4APBcQASAXAAAVQAAAigHAbQgOAygiAAQgfAAgQgJIAAABIgTgFQgjgBgygLQgogIgUgGIgYgGQhEgIiIgWQkCgrghgDIk8AAQg5AYhlAiQhZAzjMBBQhxAkiJAkQhjAagTAEIg+ALQgbgCgeAFQgnAGgdARIgqAJIgEAeQgeAkAAAzQAAAjAFAcIACALIAAAGQggDhAACKQAAAtAPC9QAEAKAAAMIgBAOIABARQAAATgGAPQgMAcggAAQgRAAgMgVg");
	var mask_graphics_459 = new cjs.Graphics().p("AiJe1IgWACI6bAAQgNAUgdAAQgTAAgMgUIjeAAQgzgNAAgnQAAgvAzgEIDDAAQgDgkgBgtQAKjvAAhIIAA2NQgagNgPgUQgRgYAAgeQAAgoARgYQAZghA9gHIV9AAQAKgMANgHQAzgbA8A6QBBAcAABCIAAAEQAKAdAHApIAWB7QAcBfAuBAQAEARAHAOQAxBrBwAAIAGAAIADAAIAMAAIAFABIALAEIBFgBQFXgRE5hfQBVgaCfgzQCPgsB1gXIC8AAQBfANBOATIAFAEQAjAYBAAAQAnAAApgDIAeADIAWANQB5BCAMAIQBxBJAvBoQARA6AQBfQASAXAAAXQAAAigHAcQgOAzgkAAQgfAAgQgJIgBABIgTgFQgkgBg0gLQgpgIgVgHIgYgGQhGgJiMgWQkKgsghgDIlGAAQg6AYhpAkQhbA0jRBDQh2AliMAlQhmAbgTADIhBAMQgbgCgfAFQgoAHgeARIgsAJIgEAfQgeAlAAA1QAAAjAFAdIACAMIgBAGQggDoAACOQAAAuAPDCQAEALAAAMIgBAOIABASQAAAUgGAOQgMAeghAAQgRAAgNgWg");
	var mask_graphics_460 = new cjs.Graphics().p("AiNfQIgXACI7KAAQgOAUgeAAQgTAAgNgUIjjAAQg2gNAAgoQAAgwA2gFIDIAAQgEglAAguQAKj2AAhJIAA22QgbgOgPgTQgSgZAAgfQAAgqASgYQAZgjA/gHIWlAAQAKgMAOgHQA0gcA+A8QBDAdAABEIAAAEQAKAeAHApIAXB/QAcBhAvBDQAFARAHAPQAzBuByAAIAHAAIADAAIANAAIAEABIAMAEIBHgBQFggSFChhQBXgbClg1QCSgtB5gYIDBAAQBiAOBPATIAGAEQAkAZBCAAQAoAAAqgDIAfADIAWANQB9BEAMAIQB0BLAxBsQASA8AQBgQATAZAAAXQAAAkgIAcQgOA1glAAQggAAgRgKIgBABIgTgFQglgBg1gLQgqgJgWgHIgZgGQhIgJiQgXQkRgtgjgEIlPAAQg7AahsAkQheA2jXBFQh5AmiQAmQhpAbgUAEIhCAMQgdgCggAGQgpAGgeASIgtAKIgEAfQggAmAAA2QAAAlAGAeIACAMIgBAGQghDvAACRQAAAvAPDJQAFAKAAANIgCAPIACASQAAAUgHAPQgMAegiAAQgSAAgNgWg");
	var mask_graphics_461 = new cjs.Graphics().p("AiRfsIgXACI77AAQgNAUggAAQgTAAgOgUIjpAAQg3gOAAgpQAAgyA3gFIDNAAQgDglgBgwQALj8AAhMIAA3fQgcgMgQgVQgSgaAAggQAAgrASgYQAagkBBgHIXNAAQALgNANgHQA2gdBAA9QBEAfAABFIAAAEQALAgAHArIAXCBQAeBkAwBFQAFARAIAPQAzBxB2AAIAHAAIADAAIANAAIAFABIALAFIBJgCQFrgSFLhkQBZgbCpg3QCWgvB9gXIDGAAQBlAOBRATIAGAEQAlAaBDAAQApAAAsgDIAgADIAXAOQCABGANAIQB3BNAyBuQASA+ARBjQATAZAAAYQAAAlgHAcQgQA3glAAQghAAgSgJIAAAAIgVgFQglgBg3gMQgrgIgXgHIgZgHQhLgJiTgYQkZgugkgEIlXAAQg+AahvAmQhgA3jdBHQh8AmiUAoQhsAcgVAEIhEANQgdgDghAGQgqAHggASIguAKIgEAhQggAnAAA3QAAAmAGAeIACANIgBAGQgiD1AACWQAAAwAPDOQAFALAAANIgBAPIABATQAAAVgHAPQgNAfgiAAQgSAAgOgWg");
	var mask_graphics_462 = new cjs.Graphics().p("EgCVAgHIgYACI8qAAQgOAVghAAQgTAAgOgVIjwAAQg4gOAAgqQAAg0A4gFIDTAAQgDgmgBgxQAKkDAAhOIAA4GQgcgOgQgVQgTgaAAghQAAgtATgZQAbgkBCgIIX1AAQALgNAOgHQA3geBCA/QBGAfAABIIAAAEQAKAgAIAsIAYCFQAeBnAyBGQAFASAIAQQA1B0B5AAIAHAAIADAAIANAAIAFABIAMAEIBLgBQF0gSFUhoQBcgcCtg4QCbgwB/gYIDMAAQBnAPBUAUIAGADQAmAbBFAAQAqAAAugDIAfADIAYAOQCEBIANAIQB6BPA0ByQASA/ASBmQATAaAAAYQAAAmgHAdQgQA4gmAAQgiAAgSgJIgBAAIgVgFQgmgBg5gMQgsgJgXgHIgagHQhNgJiXgZQkhgvgkgEIlhAAQg/AbhyAmQhjA5jjBIQh/AoiZApQhvAdgVAEIhFANQgegCgiAFQgrAHghATIgvAKIgEAiQghAoAAA5QAAAmAFAgIACAMIAAAHQgjD8AACZQAAAyAQDTQAFAMAAANIgCAPIACAUQAAAVgHAQQgOAggkAAQgSAAgOgXg");
	var mask_graphics_463 = new cjs.Graphics().p("EgCZAgiIgYACI9bAAQgOAWghAAQgUAAgPgWIj2AAQg6gOAAgsQAAg0A6gFIDZAAQgEgogBgyQALkKAAhQIAA4uQgdgOgQgXQgUgaAAgiQAAgtAUgaQAbgmBFgIIYcAAQALgNAPgIQA5geBDBBQBIAgAABJIAAAEQAKAiAIAtIAZCIQAfBqAzBIQAFASAIAQQA3B3B7AAIAIAAIADAAIAOAAIAFABIAMAFIBNgCQF+gSFchqQBfgdCxg6QCfgxCDgZIDRAAQBqAPBWAVIAGAEQAnAbBHAAQArAAAvgDIAgADIAZAPQCHBJANAJQB+BRA0B0QAUBBASBpQAUAaAAAZQAAAngIAeQgQA6goAAQgjAAgSgKIgBAAIgVgFQgogBg6gMQgtgKgYgHIgagHQhPgJibgaQkogwgmgEIlqAAQhBAbh0AoQhmA6jpBKQiDApicAqQhyAegVAEIhIANQgfgCgiAGQgtAHghATIgxAKIgEAjQgiApAAA6QAAAoAGAgIACANIgBAHQgkECAACeQAAAzARDZQAFALAAAOIgBAQIABAUQAAAWgHAQQgOAhglAAQgSAAgPgYg");
	var mask_graphics_464 = new cjs.Graphics().p("EgCdAg9IgZACI+KAAQgPAWgiAAQgVAAgOgWIj9AAQg7gPAAgsQAAg2A7gFIDeAAQgDgpgBgzQALkRAAhSIAA5WQgegPgRgXQgTgbAAgjQAAguATgbQAdgmBGgIIZEAAQAMgOAOgIQA7gfBEBDQBKAgAABMIAAAEQALAiAIAuIAZCMQAgBsA1BKQAFATAIARQA4B6B/AAIAHAAIAEAAIAOAAIAFABIANAEIBPgBQGHgTFlhtQBhgdC3g7QCigzCHgaIDWAAQBtAQBYAVIAGAEQAoAcBJAAQAsAAAwgEIAhAEIAZAPQCLBLAOAJQCABTA2B4QAUBCASBsQAVAbAAAZQAAAogIAfQgQA7gpAAQgkAAgTgKIAAABIgWgGQgpgBg7gNQgvgJgYgIIgbgHQhRgKifgZQkwgygmgEIl0AAQhCAch4AoQhoA8jvBMQiGAqigArQh1AegWAFIhJANQgggCgjAGQguAHgiAUIgyAKIgFAkQgiAqAAA8QAAAoAGAiIACANIgBAHQglEJAAChQAAA1ARDeQAFAMAAAOIgBAQIABAVQAAAWgHARQgOAhgmAAQgTAAgPgYg");
	var mask_graphics_465 = new cjs.Graphics().p("EgChAhYIgZACI+7AAQgPAXgjAAQgVAAgPgXIkDAAQg8gPAAgtQAAg3A8gGIDkAAQgEgpgBg1QAMkYAAhUIAA5+QgegPgSgYQgUgcAAgjQAAgwAUgbQAdgoBIgIIZsAAQAMgOAPgIQA8ggBGBEQBMAiAABNIAAAFQALAiAIAwIAaCPQAhBvA1BMQAGATAIARQA6B9CCAAIAHAAIAEAAIAOAAIAGABIAMAFIBRgCQGSgTFuhvQBjgfC7g8QCmg0CKgaIDcAAQBvAQBbAVIAGAEQApAdBLAAQAtAAAxgEIAiAEIAaAPQCOBOAOAJQCEBVA3B6QAUBEATBvQAVAbAAAaQAAApgIAgQgRA9gpAAQglAAgTgLIgBABIgWgGQgqgCg9gMQgwgKgZgHIgcgIQhSgKikgaQk3gzgngFIl9AAQhEAdh6AqQhrA9j1BOQiJArikAsQh4AfgXAFIhLANQgggCglAGQgvAIgiAUIg0ALIgEAkQgkArAAA9QAAAqAGAiIADAOIgBAHQgmEPAACmQAAA2ARDkQAGAMAAAOQAAAIgCAJIACAVQAAAXgIARQgOAignAAQgTAAgQgZg");
	var mask_graphics_466 = new cjs.Graphics().p("EgCkAhzIgbADI/qAAQgQAXgjAAQgWAAgQgXIkJAAQg+gQAAguQAAg5A+gFIDqAAQgEgrgBg2QAMkeAAhWIAA6nQgfgQgSgYQgVgcAAglQAAgxAVgcQAdgoBKgIIaUAAQAMgOAQgJQA9ghBIBGQBNAiAABPIAAAFQAMAkAJAxIAaCSQAhByA3BNQAGAUAIASQA7B/CFAAIAIAAIAEAAIAPAAIAFACIANAFIBTgCQGbgUF3hyQBmgfC/g+QCrg1CNgbIDhAAQByAQBdAWIAGAFQAqAdBMAAQAvAAAygEIAjAEIAbAQQCRBPAOAJQCHBYA5B9QAVBGATBwQAWAdAAAaQAAAqgJAhQgRA+grAAQglAAgUgLIgBABIgXgGQgqgCg/gMQgwgKgagIIgdgIQhUgKiogbQk+g0gpgFImFAAQhGAeh+AqQhtA/j7BQQiNAsioAtQh6AggXAFIhNAOQgigDglAGQgwAIgkAVIg0ALIgFAlQgkAsAAA/QAAArAGAjIACAOIAAAHQgnEWAACqQAAA3ASDpQAFAMAAAPQAAAJgBAIIABAWQAAAXgIASQgOAjgoAAQgUAAgPgag");
	var mask_graphics_467 = new cjs.Graphics().p("EgCoAiOIgbADMggbAAAQgQAYgkAAQgWAAgQgYIkQAAQg/gQAAgwQAAg6A/gFIDvAAQgEgsAAg3QALklAAhYIAA7PQgfgQgTgZQgVgdAAgmQAAgyAVgcQAfgpBLgJIa8AAQAMgOAQgJQA/ghBKBHQBPAjAABRIAAAFQAMAkAJAyIAbCXQAiB0A4BPQAGAUAIASQA9CDCIAAIAIAAIAEAAIAPAAIAFABIAOAFIBVgBQGkgVGAh1QBogfDEhAQCvg2CQgcIDnAAQB1ARBeAXIAHAEQArAeBOAAQAwAAAzgEIAkAEIAbAQQCVBRAPAKQCKBZA6CAQAVBIAUBzQAWAdAAAcQAAAqgJAiQgRA/gsAAQgmAAgVgLIAAABIgYgGQgrgChAgNQgygKgagIIgegIQhWgKisgcQlGg1gpgFImPAAQhIAeiAAsQhwBAkBBSQiQAtisAuQh9AhgYAEIhPAPQgigDgmAHQgxAIglAVIg1ALIgFAmQglAtAABBQAAArAGAkIACAOIgBAIQgnEcAACuQAAA5ASDuQAGANAAAPQAAAJgCAJIACAWQAAAYgIASQgPAkgpAAQgVAAgPgbg");
	var mask_graphics_468 = new cjs.Graphics().p("EgCsAiqIgcACMghKAAAQgQAYgmAAQgWAAgRgYIkVAAQhBgQAAgxQAAg7BBgGID0AAQgEgtgBg4QAMksAAhaIAA74QgggQgTgZQgWgeAAgmQAAgzAWgeQAfgqBNgJIbkAAQANgOAQgJQBAgiBLBJQBSAjAABTIAAAFQAMAlAJA0IAbCaQAjB2A6BRQAGAVAIASQA+CGCMAAIAIAAIAEAAIAPAAIAGACIAOAFIBXgCQGugVGJh3QBqghDJhBQCyg3CUgcIDsAAQB4ARBgAXIAHAEQAsAfBQAAQAxAAA0gEIAlAEIAcAQQCYBTAPAKQCNBcA8CDQAVBJAVB2QAWAeAAAcQAAAsgJAiQgRBBgtAAQgoAAgUgMIgBABIgYgGQgtgChBgNQgzgLgbgIIgegIQhYgKiwgdQlNg2grgFImYAAQhJAfiEAsQhyBCkHBUQiTAuiwAvQiBAhgYAFIhQAPQgjgDgnAHQgzAIglAWIg3ALIgFAnQgmAvAABBQAAAtAHAlIACAOIgBAIQgoEjAACyQAAA5ASD1QAGANAAAPQAAAJgCAJIACAXQAAAYgIATQgQAkgpAAQgVAAgQgag");
	var mask_graphics_469 = new cjs.Graphics().p("EgCwAjFIgcACMgh7AAAQgQAZgmAAQgYAAgQgZIkcAAQhDgQAAgyQAAg9BDgGID6AAQgEgtgBg6QAMkzAAhcIAA8gQghgQgTgaQgXgfAAgnQAAg0AXgeQAfgrBPgJIcLAAQAOgPAQgJQBCgjBNBKQBTAlAABVIAAAFQANAmAJA0IAcCeQAkB5A7BTQAFAVAKATQA/CJCOAAIAJAAIAEAAIAQAAIAFABIAOAFIBZgBQG4gWGSh6QBtghDNhCQC3g5CXgcIDwAAQB7AQBjAYIAHAFQAtAfBSAAQAyAAA1gEIAmAEIAcARQCcBVAPAJQCRBeA9CGQAWBLAUB5QAYAeAAAdQAAAtgJAjQgTBCgtAAQgpAAgVgMIgBABIgYgGQgugChDgNQg0gLgbgJIgfgIQhbgLizgdQlVg3grgFImiAAQhLAfiGAuQh1BDkNBWQiWAvi1AwQiDAigZAFIhSAPQgkgCgnAGQg0AJgmAWIg4AMIgFAnQgnAwAABDQAAAuAGAlIADAPIgBAHQgqErAAC1QAAA7AUD6QAFANAAAQQAAAJgBAKIABAXQAAAZgIATQgQAlgqAAQgWAAgQgbg");
	var mask_graphics_470 = new cjs.Graphics().p("EgC0AjgIgdACMgiqAAAQgRAagnAAQgYAAgRgaIkiAAQhEgRAAgyQAAg+BEgGID/AAQgEgvgBg7QANk6AAheIAA9IQgigRgUgaQgWggAAgnQAAg2AWgeQAhgtBQgJIczAAQAOgPARgKQBDgjBPBMQBVAmAABWIAAAFQANAnAJA2IAdChQAkB8A8BVQAGAVAKATQBACMCSAAIAJAAIAEAAIAQAAIAGACIAOAFIBbgCQHCgWGah8QBwgiDRhEQC7g5CageID2AAQB+ASBlAXIAHAFQAuAgBUAAQAzAAA2gEIAnAEIAdARQCfBXAQAKQCUBgA+CJQAWBMAVB8QAYAfAAAdQAAAugJAjQgTBEgvAAQgpAAgVgMIgBABIgZgGQgvgChEgOQg2gLgcgIIgfgJQhdgLi3geQldg4gsgFImrAAQhMAgiKAuQh3BFkTBYQiaAwi4AxQiGAjgZAFQghAFgzAKQglgCgpAHQg0AIgnAXIg6AMIgFApQgoAwAABFQAAAuAHAnIADAPIgBAHQgrExAAC6QAAA8AUEAQAGANAAAQQAAAKgCAJIACAYQAAAZgJAUQgQAmgrAAQgWAAgRgcg");
	var mask_graphics_471 = new cjs.Graphics().p("EgC4Aj7IgeADMgjaAAAQgRAagoAAQgYAAgRgaIkpAAQhFgSAAg0QAAg/BFgGIEFAAQgEgwgBg8QANlAAAhhIAA9wQgjgRgUgbQgXggAAgpQAAg3AXgfQAhgtBSgJIdbAAQAOgQASgKQBEgkBRBOQBWAmAABZIAAAFQANAoAKA2IAdClQAmB+A9BXQAGAWAKAUQBCCPCVAAIAJAAIAEAAIAQAAIAGABIAPAGIBdgCQHLgXGkh/QBxgjDWhFQC/g6CegeID7AAQCAASBoAZIAHAEQAvAgBVAAQA1AAA3gEIAoAEIAdASQCjBYAQAKQCXBiA/CMQAYBOAVB/QAYAfAAAeQAAAvgJAkQgTBGgwAAQgqAAgWgMIgBAAIgagGQgvgChGgOQg3gLgcgJIgggJQhfgLi7geQlkg6gtgGIm1AAQhOAhiMAwQh6BGkZBZQidAyi8AyQiJAkgaAFQghAFg1ALQglgDgqAHQg2AJgnAXIg7AMIgFAqQgpAxAABGQAAAwAHAnIACAQIgBAHQgrE4AAC+QAAA9AUEFQAGAOAAAQQAAAKgCAJIACAZQAAAagJAUQgQAngsAAQgXAAgRgdg");
	var mask_graphics_472 = new cjs.Graphics().p("EgC8AkWIgeADMgkKAAAQgSAagpAAQgYAAgSgaIkvAAQhHgSAAg1QAAhBBHgGIELAAQgFgwgBg+QAOlHAAhiIAA+ZQgkgSgUgbQgYghAAgqQAAg3AYggQAhguBVgKIeCAAQAPgQARgKQBGglBSBQQBZAnAABaIAAAFQANApAKA4IAeCoQAmCCA/BYQAGAWAKAUQBDCSCZAAIAIAAIAFAAIAQAAIAHACIAPAFIBegBQHWgYGsiCQB0gjDbhHQDCg7CigfIEAAAQCDASBqAaIAHAFQAwAgBXAAQA2AAA4gDIApADIAeASQCmBaAQALQCbBkBACPQAYBPAWCBQAZAhAAAeQAAAwgKAlQgUBHgwAAQgrAAgXgMIgBABIgagHQgxgChHgOQg3gMgegJIgggJQhhgLi/gfQlsg8gugFIm9AAQhQAiiPAxQh9BHkfBbQigAzjAAzQiMAlgbAFQghAFg2ALQgngDgqAHQg3AJgpAYIg8AMIgFArQgqAyAABIQAAAxAHAnIADAQIgBAIQgsE+AADCQAAA/AUEKQAHAPAAAQQAAAKgCAKIACAZQAAAagJAVQgRAngtAAQgXAAgSgdg");
	var mask_graphics_473 = new cjs.Graphics().p("EgDAAkxIgfADMgk6AAAQgSAbgpAAQgaAAgSgbIk1AAQhIgSAAg2QAAhCBIgHIEQAAQgEgxgBg/QANlOAAhkIAA/BQgkgSgUgcQgZgiAAgqQAAg5AZghQAigvBWgKIeqAAQAPgQASgKQBHgmBUBRQBbAoAABcIAAAGQANApAKA5IAfCsQAnCFBABZQAGAXAKAVQBFCVCbAAIAJAAIAFAAIARAAIAGABIAPAGIBhgCQHfgXG1iFQB3gkDfhIQDHg9CkggIEGAAQCGATBsAaIAHAFQAxAiBZAAQA2AAA7gEIApAEIAeARQCqBdAQAKQCeBmBCCSQAYBSAXCDQAZAhAAAfQAAAxgKAmQgUBIgyAAQgrAAgXgMIgBABIgbgHQgygChIgPQg5gMgegJIgigJQhigLjDggQl0g9gvgFInGAAQhRAiiTAyQh/BJklBdQikA0jEA0QiOAlgcAGQgiAFg3ALQgngDgrAHQg4AJgqAZIg9ANIgGArQgqAzAABKQAAAxAHApIADAQIgBAIQgtFFAADGQAABAAVEQQAGAOAAARQAAAKgCAKIACAaQAAAbgJAUQgRApguAAQgYAAgSgeg");
	var mask_graphics_474 = new cjs.Graphics().p("EgDEAlMIgfADMglqAAAQgTAcgqAAQgaAAgSgcIk8AAQhJgSAAg4QAAhDBJgGIEWAAQgFgzgBhBQAOlUAAhmIAA/pQglgTgVgcQgZgjAAgrQAAg6AZghQAjgwBYgKIfSAAQAPgRASgKQBJgnBWBTQBcApAABeIAAAFQAOArAKA6IAgCvQAnCIBCBbQAGAXAKAVQBGCYCfAAIAJAAIAFAAIARAAIAHACIAPAGIBjgCQHpgYG+iIQB5glDjhIQDLg/CoggIELAAQCJATBtAaIAIAFQAyAjBbAAQA3AAA8gEIAqAEIAfATQCtBdARALQChBoBDCVQAZBTAWCGQAaAiAAAfQAAAygKAnQgUBKgzAAQgtAAgXgNIgBABIgbgHQgzgChKgPQg6gMgfgJIgigKQhkgMjHggQl7g+gwgFInQAAQhTAjiVAzQiCBKkrBfQinA1jIA1QiSAmgbAGQgjAFg5ALQgngDgsAIQg6AJgqAZIg/ANIgFAsQgrA1AABKQAAAzAHApIADARIgBAIQguFLAADKQAABCAVEVQAGAPAAARQAAALgCAKIACAaQAAAbgJAVQgRAqgvAAQgYAAgTgfg");
	var mask_graphics_475 = new cjs.Graphics().p("EgDIAloIggACMgmaAAAQgSAdgsAAQgaAAgTgdIlBAAQhMgSAAg5QAAhEBMgHIEbAAQgFg0gBhCQAOlaAAhpMAAAggSQgmgSgVgeQgagiAAgtQAAg7AagiQAkgxBZgKIf6AAQAPgRATgKQBKgoBYBVQBeApAABgIAAAGQAOArAKA7IAgCzQApCKBCBdQAHAYAKAVQBICcCiAAIAJAAIAFAAIARAAIAHABIAQAGIBlgCQHygYHHiKQB7gmDphKQDOhACsghIEQAAQCLAUBwAaIAIAGQAzAjBdAAQA4AAA9gEIAqAEIAgATQCxBfARALQCkBqBFCYQAZBVAXCJQAbAiAAAhQAAAygLAoQgUBLg0AAQguAAgYgNIgBABIgbgHQg0gChMgQQg7gMgfgJIgjgKQhmgMjLghQmDg/gxgFInZAAQhUAjiZA0QiEBMkxBhQiqA2jMA2QiVAngcAFQgkAGg5ALQgogCguAHQg6AJgrAaIhAANIgGAtQgsA2AABMQAAA0AIAqIACARIAAAIQgvFSAADOQAABDAVEbQAHAPAAASQAAAKgCAKIACAbQAAAcgKAVQgSArgvAAQgZAAgTgfg");
	var mask_graphics_476 = new cjs.Graphics().p("EgDMAmDIggADMgnKAAAQgTAcgsAAQgbAAgTgcIlIAAQhNgUAAg5QAAhGBNgHIEgAAQgFg0AAhEQAOlhAAhrMAAAgg6QgmgTgWgeQgagjAAgtQAAg9AagiQAkgyBbgKMAgiAAAQAQgSATgKQBLgpBaBXQBfAqAABiIAAAFQAPAtAKA8IAhC2QApCNBEBfQAHAYAKAWQBJCeClAAIAKAAIAFAAIASAAIAGACIARAGIBmgCQH8gZHQiNQB+gmDthMQDThBCugiIEWAAQCOAUByAcIAIAFQA0AkBeAAQA6AAA+gEIArAEIAhATQC0BhARAMQCoBsBGCbQAZBWAYCMQAbAiAAAiQAAA0gLAoQgVBMg0AAQgvAAgYgNIgBABIgdgHQg0gChNgQQg9gMgfgKIgkgKQhogMjQgiQmKhAgxgGInjAAQhWAlibA1QiHBNk3BjQitA3jQA3QiYAogdAFQgkAGg7AMQgpgDguAHQg7AKgsAaIhBANIgGAuQgtA3AABOQAAA0AHArIADASIgBAIQgwFYAADSQAABEAWEhQAHAPAAATQAAAKgCALIACAaQAAAdgJAWQgTArgxAAQgYAAgUgfg");
	var mask_graphics_477 = new cjs.Graphics().p("EgDQAmeIghADMgn6AAAQgTAdgtAAQgbAAgUgdIlOAAQhOgUAAg6QAAhIBOgGIEmAAQgFg2gBhFQAPloAAhtMAAAghiQgngTgXgfQgagkAAguQAAg9AagkQAlgyBdgLMAhKAAAQAQgSATgKQBNgpBbBXQBiArAABkIAAAGQAPAtAKA9IAiC6QAqCQBFBhQAHAYALAWQBKCiCoAAIAKAAIAFAAIASAAIAHABIARAGIBogCQIGgZHZiQQCAgmDxhOQDXhCCygjIEbAAQCRAVB0AcIAIAFQA2AlBfAAQA7AAA/gFIAsAFIAiAUQC3BjASALQCqBuBICeQAaBYAYCPQAbAjAAAiQAAA1gKApQgWBOg2AAQgvAAgZgOIgBABIgdgHQg2gChOgQQg+gNgggKIgkgKQhrgMjTgiQmRhCgzgGInrAAQhYAlifA2QiJBPk9BlQixA4jUA4QiaAogdAGQgmAGg7AMQgqgDgvAIQg9AJgtAbIhCANIgGAvQguA4AABPQAAA2AIAsIADARIgBAJQgxFfAADWQAABFAXEmQAHAQAAATQAAAKgCALIACAbQAAAegKAWQgTAsgyAAQgZAAgUggg");
	var mask_graphics_478 = new cjs.Graphics().p("EgDUAm5IghADMgoqAAAQgUAeguAAQgcAAgUgeIlUAAQhQgUAAg8QAAhIBQgHIEsAAQgFg3gBhGQAPlvAAhuMAAAgiLQgogUgXgfQgbglAAguQAAg/AbgkQAmg0BegLMAhyAAAQAQgSAUgLQBPgpBcBZQBkAsAABmIAAAGQAPAtALA/IAhC9QArCSBHBkQAHAZALAWQBLCkCsAAIAKAAIAFAAIASAAIAHACIARAGIBrgCQIPgaHiiSQCCgnD2hQQDbhDC1gjIEhAAQCTAVB3AcIAIAGQA3AlBhAAQA8AABAgFIAtAFIAiAUQC7BmASALQCuBwBIChQAbBZAZCRQAcAkAAAjQAAA2gLAqQgWBPg3AAQgwAAgagOIgBABIgdgHQg3gChQgRQg/gNgggKIglgJQhtgNjXgjQmZhDg0gGIn0AAQhaAmihA3QiMBQlDBnQi0A5jYA5QidApgeAGQgmAGg9AMQgqgDgwAIQg+AKguAbIhDAOIgGAvQgvA5AABRQAAA3AIAsIADASIgBAJQgyFmAADaQAABGAXEsQAHAQAAATQAAALgCALIACAbQAAAegKAXQgTAtgzAAQgaAAgUghg");
	var mask_graphics_479 = new cjs.Graphics().p("EgDXAnUIgjADMgpaAAAQgUAfgvAAQgcAAgUgfIlbAAQhRgUAAg9QAAhKBRgHIExAAQgFg4gBhHQAPl2AAhwMAAAgizQgogVgXgfQgcglAAgwQAAhAAcgkQAmg1BggLMAiaAAAQAQgTAVgLQBQgqBeBbQBlAtAABnIAAAGQAPAvAMBAIAiDAQAsCVBIBmQAHAZALAXQBNCmCuAAIAKAAIAFAAIAUAAIAHACIARAHIBtgDQIZgaHqiUQCFgoD7hSQDfhEC4gkIEmAAQCWAVB5AdIAIAGQA4AmBjAAQA9AABBgFIAuAFQAPAKAUALQC+BnASAMQCxByBKCjQAbBcAaCTQAcAlAAAjQAAA3gLAqQgXBSg3AAQgyAAgZgPIgBABIgegHQg4gChSgRQg/gNgigKIglgKQhvgOjbgjQmghEg1gGIn+AAQhbAmikA4QiPBSlJBpQi3A5jcA7QigAqgfAGQgmAGg+AMQgsgDgwAIQg/AKgvAcIhFAOIgGAxQgwA5AABSQAAA4AJAuIADASIgBAJQgzFsAADeQAABIAXExQAHAQAAAUQAAALgCALIACAcQAAAfgKAXQgTAug0AAQgaAAgUgig");
	var mask_graphics_480 = new cjs.Graphics().p("EgDbAnvIgjADMgqKAAAQgVAfgvAAQgdAAgVgfIlhAAQhSgUAAg+QAAhLBSgIIE3AAQgFg4gBhJQAPl8AAhzMAAAgjbQgpgVgYggQgcgmAAgxQAAhBAcglQAng2BigLMAjCAAAQARgSAUgMQBSgrBgBdQBnAtAABpIAAAHQAPAvAMBBQAhC9ACAHQAsCYBJBnQAIAaALAYQBOCpCyAAIAKAAIAFAAIAUAAIAHACIASAGIBugCQIjgbH0iWQCHgqD/hSQDjhGC8glIErAAQCZAWB7AdIAIAGQA5AnBlAAQA+AABCgFIAvAFQAQAKATALQDCBpATANQC0BzBLCnQAcBdAZCWQAdAlAAAkQAAA4gLArQgXBTg5AAQgyAAgagPIgBABIgegHQg5gChTgRQhBgOgigKIgmgKQhxgOjfgkQmohFg2gGIoHAAQhdAninA5QiRBTlPBrQi7A6jgA8QijArgfAGQgnAGg/AMQgsgDgyAJQhAAKgvAcIhGAOIgGAyQgxA7AABTQAAA5AIAuIADATIgBAJQgzFzAADiQAABJAXE3QAIAQAAAUQAAALgCALIACAdQAAAfgLAYQgTAug1AAQgbAAgUgig");
	var mask_graphics_481 = new cjs.Graphics().p("EgDdAn+IgjADMgqdAAAQgVAfgwAAQgdAAgVgfIljAAQhUgVAAg+QAAhMBUgIIE4AAQgFg5gBhJQAQl/AAh0MAAAgjrQgqgVgYggQgcgnAAgxQAAhBAcgmQAog2BjgLMAjRAAAQARgTAVgLQBSgsBgBeQBoAtAABrIAAAGQAQAwALBBQAiC+ACAIQAtCYBJBoQAIAaALAYQBPCrCzAAIAKAAIAFAAIAUAAIAHACIASAGIBvgCQIngbH3iYQCJgpEAhUQDlhGC9glIEuAAQCZAWB8AeIAJAFQA5AoBmAAQA+AABDgFIAvAFQAQAKAUALQDDBqATAMQC1B1BMCoQAcBdAaCXQAdAmAAAkQAAA4gMAsQgXBTg5AAQgyAAgbgOIgBABIgegIQg6gChTgRQhCgOgigKIgngLQhxgNjgglQmshFg2gGIoLAAQhdAnioA5QiTBUlRBrQi8A8jiA8QikArgfAGQgnAGhAANQgtgEgxAJQhBAKgwAcIhGAPIgHAyQgxA7AABUQAAA5AJAvIADATIgBAJQg0F1AADkQAABKAYE5QAHAQAAAUQAAALgCAMIACAdQAAAfgKAYQgUAvg1AAQgbAAgVgig");
	var mask_graphics_482 = new cjs.Graphics().p("EgDfAoMIgjADMgqxAAAQgVAfgwAAQgdAAgVgfIlmAAQhUgVAAg/QAAhMBUgIIE7AAQgFg5gBhJQAPmDAAh0MAAAgj8QgqgVgYghQgcgmAAgyQAAhBAcgmQAog3BkgLMAjiAAAQAQgTAVgLQBTgsBhBeQBpAuAABrIAAAGQAQAwALBCQAiDAACAHQAtCaBKBpQAIAaALAYQBQCsC0AAIAKAAIAFAAIAUAAIAIACIARAGIBwgCQIrgbH7iZQCJgqEDhUQDmhHC/glIEvAAQCbAWB9AeIAIAGQA6AoBmAAQA/AABEgGIAvAGQAQAKAUALQDFBqATANQC2B1BNCpQAcBeAaCZQAdAmAAAkQAAA5gMAsQgXBTg5AAQgzAAgbgOIgBABIgfgIQg5gChUgRQhCgOgjgKIgngLQhygOjigkQmuhGg3gHIoOAAQheAoiqA6QiUBVlTBrQi9A8jkA9QilArgfAGQgoAGhAANQgtgDgyAIQhBALgwAcIhIAOIgGAzQgxA7AABVQAAA6AIAvIADATIgBAJQg0F4AADlQAABLAYE7QAHAQAAAUQAAAMgCALIACAeQAAAfgKAYQgUAvg1AAQgcAAgVgig");
	var mask_graphics_483 = new cjs.Graphics().p("EgDgAoaIgkADMgrEAAAQgVAggxAAQgdAAgVggIlpAAQhUgVAAg/QAAhNBUgIIE9AAQgFg6gBhJQAQmFAAh1MAAAgkNQgqgVgZghQgcgnAAgxQAAhDAcgmQAog3BlgLMAjyAAAQARgTAVgMQBTgsBiBfQBqAuAABsIAAAGQAPAxAMBCQAiDBACAHQAtCbBLBqQAHAaAMAYQBQCtC2AAIAKAAIAFAAIAUAAIAIACIASAHIBxgCQIugcH/iaQCKgqEEhUQDohIDAglIEyAAQCcAWB+AeIAIAGQA6AoBnAAQBAAABEgFIAwAFQAPAKAUALQDHBsATAMQC4B2BNCrQAcBfAaCZQAdAnAAAkQAAA5gLAsQgXBVg6AAQg0AAgagPIgBABIgggIQg6gChUgRQhDgOgjgLIgngKQhzgOjjglQmyhHg3gGIoSAAQhfAoirA6QiUBWlWBsQi/A8jlA+QimArggAGQgoAGhAANQgugDgyAIQhCALgwAcIhIAPIgGAzQgyA8AABVQAAA6AJAwIADATIgBAJQg1F7AADnQAABKAYE+QAIARAAAUQAAALgCAMIACAdQAAAggLAYQgUAwg2AAQgbAAgVgjg");
	var mask_graphics_484 = new cjs.Graphics().p("EgDiAooIgkADMgrYAAAQgVAggxAAQgdAAgWggIlrAAQhVgVAAhAQAAhNBVgIIFAAAQgFg6gChKQAQmIAAh2MAAAgkdQgqgVgZghQgcgnAAgyQAAhDAcgmQApg4BlgLMAkCAAAQARgUAVgLQBUgtBjBgQBqAvAABsIAAAGQAQAxAMBDQAiDCACAIQAuCcBLBqQAHAbAMAYQBRCuC2AAIALAAIAFAAIAVAAIAHACIASAHIBygCQIygcICibQCMgrEGhVQDphIDCglIE0AAQCdAWB+AfIAJAFQA6ApBoAAQBAAABEgGIAxAGQAQAKAUALQDHBsAUANQC5B3BNCsQAdBfAaCbQAeAmAAAlQAAA5gMAtQgXBVg7AAQgzAAgbgPIgBABIgggIQg6gChWgRQhCgOgjgLIgogLQh0gNjlgmQm0hHg4gGIoWAAQhfAoisA7QiWBWlYBtQjAA9jnA9QinAsggAGQgpAHhAAMQgugDgzAJQhCAKgxAdIhIAPIgGAzQgyA8AABWQAAA7AIAvIADAUIgBAJQg1F9AADpQAABLAZFAQAHARAAAUQAAAMgCALIACAeQAAAggLAYQgUAwg2AAQgbAAgWgjg");
	var mask_graphics_485 = new cjs.Graphics().p("EgDjAo2IglAEMgrrAAAQgVAggyAAQgdAAgWggIluAAQhVgWAAhAQAAhOBVgIIFCAAQgFg6gBhLQAQmLAAh2MAAAgkuQgrgVgYghQgdgoAAgyQAAhEAdgmQAog4BmgMMAkSAAAQASgTAVgMQBUgsBkBgQBrAvAABtIAAAGQAQAyAMBDQAiDEACAHQAuCdBMBrQAHAbAMAZQBRCvC4AAIALAAIAFAAIAVAAIAHACIASAHIBzgDQI3gbIFidQCMgqEIhWQDshJDCglIE2AAQCeAWCAAfIAIAGQA7AoBpAAQBAAABFgFIAxAFQAQALAUALQDJBtATANQC7B3BOCtQAdBgAaCcQAeAnAAAlQAAA6gMAtQgXBVg7AAQg0AAgbgPIgBABIgggIQg7gChWgSQhDgNgjgLIgogLQh0gOjnglQm4hIg3gGIoaAAQhhAoitA7QiXBXlaBuQjCA9joA+QipAsggAGQgoAHhCAMQgugDgzAJQhCALgxAcIhJAPIgHA0QgyA9AABWQAAA7AJAwIADATIgBAKQg2GAAADqQAABMAZFCQAHARAAAUQAAAMgCAMIACAeQAAAggKAZQgVAwg2AAQgcAAgVgkg");
	var mask_graphics_486 = new cjs.Graphics().p("EgDlApFIglADMgr+AAAQgWAggxAAQgfAAgVggIlwAAQhWgWAAhAQAAhPBWgIIFEAAQgGg7gBhLQAQmNAAh4MAAAgk+QgrgVgYgiQgdgoAAgyQAAhEAdgnQApg4BmgMMAkjAAAQARgTAVgMQBWgtBkBhQBrAvAABuIAAAHQARAxALBEQAjDFACAHQAuCfBNBrQAHAbAMAZQBSCxC5AAIALAAIAFAAIAVAAIAHACIATAGIBzgCQI7gcIJidQCNgrEKhWQDthJDEgmIE4AAQCfAWCBAfIAIAGQA7ApBqAAQBBAABFgFIAxAFQAQAKAVAMQDKBtATANQC8B5BPCuQAdBhAaCcQAeAoAAAlQAAA6gLAtQgYBWg7AAQg1AAgbgPIgBABIgggIQg7gChXgSQhEgOgjgKIgogLQh1gOjpgmQm6hIg4gGIoeAAQhhApiuA7QiYBXldBvQjDA9jqA/QiqAsggAGQgpAHhCANQgugEg0AJQhDALgxAdIhJAPIgHA0QgyA9AABXQAAA8AIAwIADATIgBAKQg2GDAADrQAABNAZFEQAIARAAAVQAAAMgCALIACAfQAAAggLAZQgUAwg3AAQgcAAgWgjg");
	var mask_graphics_487 = new cjs.Graphics().p("EgDmApTIglADMgsTAAAQgVAhgyAAQgfAAgVghIlzAAQhXgWAAhBQAAhPBXgHIFGAAQgFg8gBhMQAQmQAAh4MAAAglPQgrgVgZgiQgegoAAgzQAAhEAegnQApg5BngMMAkzAAAQARgTAWgMQBWguBlBiQBsAwAABuIAAAHQAQAyAMBEQAjDGACAIQAvCfBNBtQAHAbAMAZQBTCyC6AAIALAAIAFAAIAVAAIAIACIASAGIB0gCQI/gcIMieQCPgsELhXQDvhJDFgmIE7AAQCgAWCBAfIAJAGQA7AqBrAAQBBAABGgGIAxAGQAQAKAVALQDMBvATANQC9B5BQCwQAdBhAbCeQAeAnAAAmQAAA6gMAuQgYBXg8AAQg0AAgcgQIgBACIgggJQg8gChXgSQhEgOgkgLIgogKQh2gOjqgmQm+hJg4gHIoiAAQhhAqiwA7QiZBYlfBwQjEA+jsA+QirAtghAGQgpAHhCANQgvgDg0AIQhDALgyAdIhKAQIgGA0QgzA+AABXQAAA8AJAxIADATIgBAKQg2GFAADuQAABNAZFGQAHARAAAVQAAAMgCAMIACAeQAAAhgLAZQgUAxg4AAQgcAAgVgkg");
	var mask_graphics_488 = new cjs.Graphics().p("EgDoAphIglADMgsmAAAQgWAhgyAAQgfAAgWghIl1AAQhXgWAAhBQAAhQBXgHIFJAAQgGg9gBhMQARmTAAh5MAAAglfQgsgVgZgiQgegpAAgzQAAhFAegnQApg5BogMMAlDAAAQASgUAWgMQBWgtBlBiQBuAwAABvIAAAHQAQAyAMBFQAjDIACAHQAvChBNBtQAIAbAMAZQBTCzC8AAIALAAIAFAAIAVAAIAIADIASAGIB1gCQJDgcIQigQCPgsEOhXQDwhKDHgmIE8AAQCiAXCCAfIAJAGQA8ApBrAAQBBAABHgFIAxAFQARALAUALQDOBvATANQC/B7BPCwQAeBiAbCfQAeAoAAAmQAAA7gMAuQgYBXg8AAQg1AAgcgPIgBABIgggIQg8gDhYgSQhFgOgkgLIgogLQh3gOjsgmQnBhJg4gHIomAAQhiAqixA8QiaBYlhBxQjGA+jtA/QisAtghAHQgqAGhCANQgvgDg1AJQhDALgyAdIhLAPIgGA1Qg0A+AABYQAAA8AJAyIADATIgBAKQg2GIAADvQAABOAZFIQAHASAAAUQAAAMgCAMIACAfQAAAhgKAZQgVAxg4AAQgcAAgWgkg");
	var mask_graphics_489 = new cjs.Graphics().p("EgDqApvIglADMgs5AAAQgWAhgzAAQgfAAgWghIl4AAQhYgWAAhBQAAhRBYgHIFLAAQgFg9gBhNQAQmVAAh6MAAAglwQgsgWgZgiQgegoAAg0QAAhFAegoQAqg5BogMMAlUAAAQARgUAWgMQBXguBmBjQBuAwAABwIAAAHQARAzAMBFQAjDJACAIQAvChBOBuQAIAcAMAZQBUC0C9AAIALAAIAFAAIAVAAIAIACIATAHIB1gCQJHgdIUigQCQgsEPhYQDyhLDIgmIE/AAQCiAXCDAfIAJAGQA9AqBrAAQBDAABGgGIAyAGQARAKAVAMQDOBwAUANQDAB7BQCyQAeBjAbCgQAfAoAAAmQAAA7gMAuQgZBYg8AAQg2AAgbgPIgCABIgggIQg9gDhYgSQhFgOgkgLIgpgLQh4gOjtgnQnEhJg5gHIopAAQhjAqiyA8QibBZlkByQjHA+jvBAQiuAtghAHQgpAGhDANQgwgDg0AJQhFALgyAeIhLAPIgHA1QgzA+AABZQAAA9AJAxIADAUIgBAKQg3GLAADwQAABOAZFLQAIASAAAVQAAAMgCAMIACAfQAAAhgLAZQgVAxg4AAQgdAAgWgkg");
	var mask_graphics_490 = new cjs.Graphics().p("EgDrAp9IgmAEMgtNAAAQgWAhgzAAQgfAAgWghIl6AAQhZgWAAhDQAAhRBZgHIFNAAQgGg9gBhOQARmYAAh7MAAAgl/QgtgXgZgiQgegpAAg0QAAhGAegnQAqg6BpgMMAlkAAAQASgUAWgMQBXgvBnBkQBvAxAABwIAAAHQAQAzAMBGQAkDKACAIQAwCjBOBuQAIAcAMAZQBUC2C/AAIALAAIAFAAIAVAAIAIACIATAHIB2gCQJLgdIYiiQCRgsERhZQDzhLDKgnIFBAAQCjAYCEAfIAJAGQA9AqBsAAQBDAABHgFIAyAFQARALAVAMQDQBwAUAOQDBB8BRCyQAeBkAbChQAfAoAAAnQAAA7gMAvQgZBYg8AAQg2AAgcgPIgBABIghgIQg9gDhZgSQhGgOgkgLIgpgLQh5gPjvgmQnHhKg5gHIotAAQhkAqizA9QicBZlmByQjJA/jwBBQivAtghAHQgqAGhEAOQgvgEg1AJQhFALgzAeIhLAQIgHA1Qg0A/AABZQAAA9AJAyIADAUIgBAKQg3GNAADzQAABOAZFNQAIASAAAVQAAAMgCAMIACAfQAAAigLAZQgVAyg4AAQgdAAgWglg");
	var mask_graphics_491 = new cjs.Graphics().p("EgDtAqMIgmADMgtgAAAQgWAhg0AAQgfAAgWghIl9AAQhZgWAAhDQAAhSBZgHIFPAAQgFg+gChOQARmbAAh7MAAAgmQQgsgXgagiQgegpAAg1QAAhGAegoQAqg6BqgMMAl0AAAQASgUAWgNQBYguBoBkQBvAxAAByIAAAGQARA0AMBGQAkDMACAHQAwCkBPBwQAIAbAMAaQBVC3DAAAIALAAIAFAAIAVAAIAIACIATAHIB3gCQJPgdIbijQCSgtEThZQD1hMDLgnIFDAAQClAYCFAgIAJAGQA9AqBtAAQBDAABIgGIAzAGQAQALAVALQDSByAUANQDCB9BSC0QAeBkAbCjQAfAoAAAnQAAA8gMAvQgYBZg+AAQg2AAgcgQIgBABIghgIQg9gChagTQhGgOglgLIgpgMQh6gOjwgnQnKhLg6gGIoxAAQhkAqi0A9QieBblpByQjJBAjyBAQiwAughAHQgrAGhEAOQgwgDg1AIQhFAMgzAeIhMAPIgHA2Qg0A/AABaQAAA+AJAyIADAUIgBAKQg4GQAAD0QAABPAaFPQAIASAAAVQAAANgDAMIADAfQAAAigMAZQgVAyg5AAQgdAAgWgkg");
	var mask_graphics_492 = new cjs.Graphics().p("EgDuAqaIgnADMgt0AAAQgWAig0AAQgfAAgWgiImAAAQhagWAAhEQAAhSBagHIFSAAQgGg+gBhPQARmdAAh9MAAAgmgQgtgXgagiQgegqAAg1QAAhGAegpQArg6BqgMMAmEAAAQASgVAXgMQBYgvBpBlQBwAxAABzIAAAGQARA0AMBHQAkDNACAIQAwClBQBwQAIAcAMAaQBVC4DBAAIAMAAIAFAAIAWAAIAHACIAUAHIB4gDQJSgdIfikQCTgsEVhaQD3hMDMgoIFFAAQCmAYCFAgIAJAGQA+ArBuAAQBEAABIgGIAzAGQARAKAVAMQDTByAUAOQDEB9BSC2QAdBlAcCjQAgApAAAnQAAA8gNAvQgYBag+AAQg2AAgdgQIgBABIghgIQg+gChagTQhHgOglgMIgpgLQh7gOjygoQnNhLg6gHIo0AAQhlAri2A+QieBblsBzQjLBAjzBBQixAugiAHQgqAHhFANQgwgDg2AJQhFALg0AeIhMAQIgHA2Qg1BAAABaQAAA+AJAzIADAUIgBAKQg4GTAAD1QAABQAaFRQAIASAAAWQAAAMgCAMIACAgQAAAhgLAaQgWAzg5AAQgdAAgWglg");
	var mask_graphics_493 = new cjs.Graphics().p("EgDwAqoIgmADMguIAAAQgWAig0AAQggAAgXgiImCAAQhagWAAhEQAAhSBagIIFUAAQgGg+gBhPQARmhAAh9MAAAgmxQgtgXgagjQgegqAAg1QAAhHAegoQArg7BrgNMAmVAAAQASgUAWgMQBagwBpBmQBwAyAABzIAAAHQARAzANBIQAkDOACAIQAxCmBQBxQAIAcAMAaQBWC6DCAAIAMAAIAFAAIAWAAIAIACIATAHIB5gDQJWgdIjilQCTgtEXhbQD5hMDNgoIFIAAQCnAYCGAgIAJAGQA+ArBvAAQBEAABJgFIAzAFQARALAVAMQDVBzAUANQDFB/BSC2QAeBmAcCkQAgApAAAnQAAA9gMAwQgZBag+AAQg3AAgdgQIgBACIghgJQg+gChbgTQhHgPgmgLIgpgLQh8gPjzgnQnQhMg7gHIo4AAQhmAri3A+QifBcluB0QjMBAj1BCQiyAugiAHQgrAHhFANQgxgDg2AJQhGALg0AfIhNAQIgGA2Qg2BAAABcQAAA+AKAyIADAVIgBAKQg5GVAAD4QAABQAaFUQAIASAAAVQAAANgCAMIACAgQAAAhgLAaQgWAzg5AAQgdAAgXglg");
	var mask_graphics_494 = new cjs.Graphics().p("EgD8Ar4IgoADMgwbAAAQgYAkg2AAQgiAAgXgkImWAAQhfgYAAhHQAAhWBfgJIFlAAQgGhBgBhTQASm1AAiEMAAAgosQgwgYgbglQgggsAAg3QAAhLAggrQAtg9BxgOMAoPAAAQASgVAYgNQBegyBuBrQB3A0AAB5IAAAHQARA3ANBKQAmDZADAJQAzCuBUB2QAIAeANAbQBaDDDMAAIAMAAIAGAAIAXAAIAIACIAUAHIB/gCQJ0gfI+itQCbgvElhfQEFhRDYgpIFYAAQCvAYCNAiIAKAHQBBAtB0AAQBHAABMgGQAcACAaAEQASALAXANQDfB5AVAOQDPCFBWC/QAgBrAdCsQAiArAAApQAABAgNAyQgbBfhBAAQg5AAgegQIgCABIgjgJQhBgDhfgTQhLgQgngLIgsgMQiBgQkAgpQnnhQg+gHIpUAAQhrAtjABCQinBgmAB6QjXBDkBBFQi7AxgkAHQgtAHhIAOQgzgDg5AJQhKAMg2AgIhRAQIgHA5Qg4BEAABgQAABBAKA2IADAVIgBALQg7GpAAEEQAABUAbFlQAIATAAAWQAAANgCANIACAhQAAAkgMAbQgWA2g9AAQgeAAgYgng");
	var mask_graphics_495 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_496 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_497 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_498 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_499 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_500 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_501 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_502 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_503 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_504 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_505 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_506 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_507 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_508 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_509 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_510 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_511 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_512 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_513 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_514 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_515 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_516 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_517 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_518 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_519 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_520 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_521 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_522 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_523 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_524 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_525 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_526 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_527 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_528 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_529 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_530 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_531 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_532 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_533 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_534 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_535 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_536 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_537 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_538 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_539 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_540 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_541 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_542 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_543 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_544 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_545 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_546 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_547 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_548 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_549 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_550 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_551 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_552 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_553 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_554 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_555 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_556 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_557 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_558 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_559 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_560 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_561 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_562 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_563 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_564 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_565 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_566 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_567 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_568 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_569 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_570 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_571 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_572 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_573 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_574 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_575 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_576 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_577 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_578 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_579 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_580 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_581 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_582 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_583 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_584 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_585 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_586 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_587 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_588 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_589 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_590 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_591 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_592 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_593 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_594 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_595 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_596 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_597 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_598 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_599 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_600 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_601 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_602 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_603 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_604 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_605 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_606 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_607 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_608 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_609 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_610 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_611 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_612 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_613 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_614 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_615 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_616 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_617 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_618 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_619 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_620 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_621 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_622 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_623 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_624 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_625 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_626 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_627 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_628 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_629 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_630 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_631 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_632 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_633 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_634 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_635 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_636 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_637 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_638 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_639 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_640 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_641 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_642 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_643 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_644 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_645 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_646 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_647 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_648 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_649 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_650 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_651 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_652 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_653 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_654 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_655 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_656 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_657 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_658 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_659 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_660 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_661 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_662 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_663 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_664 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_665 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_666 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_667 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_668 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_669 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_670 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_671 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_672 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_673 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_674 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_675 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_676 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_677 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_678 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_679 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_680 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_681 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_682 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_683 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_684 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_685 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_686 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_687 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_688 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_689 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_690 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_691 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_692 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_693 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_694 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_695 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_696 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_697 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_698 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_699 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_700 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_701 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_702 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_703 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_704 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_705 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_706 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_707 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_708 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_709 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_710 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_711 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_712 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_713 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_714 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_715 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_716 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_717 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_718 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_719 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_720 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_721 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_722 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_723 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_724 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_725 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_726 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_727 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_728 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_729 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_730 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_731 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_732 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_733 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_734 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_735 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_736 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_737 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_738 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_739 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_740 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_741 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_742 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_743 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_744 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_745 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_746 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_747 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_748 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_749 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_750 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_751 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_752 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_753 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_754 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_755 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_756 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_757 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_758 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_759 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_760 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_761 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_762 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_763 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_764 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_765 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_766 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_767 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_768 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_769 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_770 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_771 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_772 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_773 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_774 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_775 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_776 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_777 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_778 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_779 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_780 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_781 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_782 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_783 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_784 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_785 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_786 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_787 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_788 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_789 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_790 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_791 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_792 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_793 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_794 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_795 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_796 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_797 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_798 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_799 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_800 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_801 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_802 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_803 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_804 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_805 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_806 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_807 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_808 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_809 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_810 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_811 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_812 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_813 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_814 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_815 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_816 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_817 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_818 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_819 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_820 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_821 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_822 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_823 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_824 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_825 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_826 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_827 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_828 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_829 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_830 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_831 = new cjs.Graphics().p("EgEIAtHIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhLQAAhaBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgZgdgmQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgOQBig0B0BwQB8A3AAB+IAAAIQATA5ANBOQAoDjACAJQA2C3BYB8QAJAfANAcQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAeADAbAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAiBwAeC0QAjAtAAArQAABEgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgRkMgrQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_832 = new cjs.Graphics().p("EgEIAtEIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhKQAAhbBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqpQgxgYgdgnQgiguAAg6QAAhPAigsQAvhBB2gNMAqJAAAQAUgXAZgNQBig1B0BwQB8A3AAB+IAAAIQASA5AOBOQAoDkACAIQA2C3BYB8QAJAfANAdQBfDMDVAAIANAAIAGAAIAYAAIAIADIAWAGICEgCQKTgfJZi3QCigyEzhjQERhUDigsIFoAAQC4AaCUAkIAKAGQBEAwB6AAQBLAABPgHQAdADAcAEQATAMAXAMQDqB/AWAPQDZCMBaDIQAhBwAfC0QAjAtAAAsQAABDgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgRgpgMIgugMQiIgQkMgsQn+hThBgIIpxAAQhvAwjKBEQivBkmSCAQjhBHkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUARIgIA8Qg6BHAABkQAABFAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAXQAAAOgCAOIACAiQAAAmgMAcQgYA4g/AAQggAAgZgpg");
	var mask_graphics_833 = new cjs.Graphics().p("EgEFAsrIgpADMgyEAAAQgZAlg4AAQgiAAgZglImjAAQhigYAAhKQAAhZBigJIFxAAQgGhDgChWQATnEAAiIMAAAgqFQgxgZgcgmQgigtAAg6QAAhNAigsQAuhAB1gNMApmAAAQATgWAZgOQBhgzByBuQB6A2AAB9IAAAHQATA5ANBNQAnDgADAJQA0C0BYB7QAIAeAOAcQBdDKDTAAIAMAAIAGAAIAXAAIAJACIAVAHICDgCQKKgfJRi0QCggxEvhiQEOhUDfgqIFjAAQC1AZCTAjIAJAHQBEAvB4AAQBKAABPgHQAcADAbAEQATALAXANQDmB9AWAPQDWCKBaDFQAhBuAeCzQAiAsAAArQAABCgNA0QgbBihEAAQg7AAgfgRIgCABIgkgJQhDgDhjgUQhNgQgogMIgugNQiFgQkJgqQn4hThAgHIpoAAQhuAvjHBDQitBjmNB/QjeBFkKBIQjBAyglAHQgvAIhLAOQg0gDg7AJQhMANg4AhIhUARIgHA7Qg6BGAABjQAABDAKA3IADAWIgBAMQg9G4AAEMQAABXAcFxQAJAUAAAXQAAANgDAOIADAiQAAAlgNAcQgXA3g+AAQggAAgZgog");
	var mask_graphics_834 = new cjs.Graphics().p("EgEBAsRIgpAEMgxaAAAQgYAkg4AAQgiAAgYgkImeAAQhggYAAhJQAAhYBggIIFsAAQgGhDgBhVQASm+AAiGMAAAgpiQgwgYgcgmQghgsAAg5QAAhMAhgsQAug/BzgNMApDAAAQATgWAZgNQBfgzBxBtQB5A1AAB8IAAAHQASA3ANBNQAnDdACAIQA0CyBWB5QAJAeANAcQBcDHDQAAIAMAAIAGAAIAXAAIAJACIAUAHICCgCQKBgeJJiyQCfgxEqhgQEKhTDdgqIFeAAQCzAZCQAjIAKAHQBCAuB3AAQBJAABOgGQAcACAbAEQASALAXANQDjB7AWAPQDTCIBYDDQAhBsAeCxQAhArAAAqQAABCgNAzQgaBghDAAQg7AAgfgRIgBACIgjgKQhDgChhgUQhNgQgngMIgtgMQiEgQkFgqQnxhRg/gHIphAAQhtAujEBCQiqBimIB9QjbBFkGBGQi/AyglAHQguAHhJAPQg0gEg7AKQhLAMg3AgIhTARIgHA6Qg5BFAABiQAABDAKA2IAEAWIgCALQg8GyAAEJQAABWAcFsQAIATAAAXQAAAOgCANIACAiQAAAkgMAcQgXA2g+AAQgfAAgYgog");
	var mask_graphics_835 = new cjs.Graphics().p("EgD+Ar4IgoAEMgwwAAAQgYAjg3AAQghAAgYgjImYAAQhggYAAhIQAAhXBggIIFnAAQgGhCgBhTQASm5AAiEMAAAgo+QgwgYgbglQghgsAAg5QAAhLAhgrQAtg+BxgNMAogAAAQAUgVAXgNQBfgzBvBsQB3A0AAB6IAAAHQASA3ANBLQAmDbADAIQAzCvBVB4QAIAeANAbQBbDEDNAAIAMAAIAGAAIAXAAIAIACIAVAIIB/gDQJ5gfJBiuQCdgwEmhfQEHhSDZgpIFaAAQCxAZCOAiIAJAGQBCAuB1AAQBIAABNgGQAcACAaAEQASALAXAMQDgB6AVAOQDRCHBXDAQAgBrAdCuQAiArAAAqQAABAgOAyQgaBghBAAQg6AAgfgRIgBABIgjgJQhCgChggUQhLgPgngMIgtgMQiCgQkBgpQnrhQg+gHIpYAAQhsAtjBBCQioBgmDB7QjYBEkDBFQi8AxgkAHQguAIhIAOQg0gEg5AKQhKAMg3AgIhRARIgHA5Qg4BEAABhQAABBAJA2IAEAWIgCAKQg7GtAAEFQAABVAbFnQAJATAAAXQAAANgDANIADAhQAAAkgMAcQgXA1g9AAQgfAAgYgng");
	var mask_graphics_836 = new cjs.Graphics().p("EgD6ArfIgoADMgwGAAAQgXAkg2AAQghAAgYgkImTAAQhegXAAhHQAAhWBegIIFjAAQgGhBgBhSQARmzAAiCMAAAgobQgvgYgbgkQgggsAAg3QAAhKAggqQAtg+BwgNMAn9AAAQATgVAXgNQBdgxBuBqQB1A0AAB4IAAAHQASA2ANBKQAmDXACAJQAzCtBTB1QAIAeANAbQBaDBDKAAIAMAAIAGAAIAXAAIAIADIAUAHIB+gDQJwgeI6isQCagvEjhfQEDhQDWgpIFVAAQCuAZCNAhIAJAHQBBAtBzAAQBHAABMgGQAbACAaAEQASALAWAMQDeB4AVAOQDNCFBWC9QAgBqAdCsQAhAqAAApQAABAgNAxQgaBfhBAAQg5AAgegRIgBABIgjgJQhBgChegTQhLgQgmgLIgsgMQiAgQj/gpQnjhPg+gHIpQAAQhqAti+BBQimBfl+B5QjVBDj/BFQi6AwgkAHQgtAHhHAOQgzgDg4AJQhJAMg3AgIhQAQIgHA5Qg3BDAABfQAABBAJA1IAEAVIgBALQg7GmAAECQAABUAbFiQAIATAAAWQAAANgCANIACAhQAAAjgMAcQgWA1g8AAQgfAAgXgng");
	var mask_graphics_837 = new cjs.Graphics().p("EgD3ArFIgnAEMgvcAAAQgXAjg1AAQghAAgXgjImNAAQhdgXAAhGQAAhVBdgIIFdAAQgFhAgChRQASmtAAiAMAAAgn4QgvgXgagkQgggrAAg2QAAhJAggqQAsg9BugMMAnaAAAQATgVAXgNQBcgxBsBpQB0AzAAB2IAAAHQARA2ANBJQAlDUACAIQAyCrBTB0QAIAdANAbQBYC+DIAAIALAAIAGAAIAWAAIAIADIAUAHIB8gDQJogeIyiqQCYguEfhdQD/hPDTgoIFRAAQCsAYCKAhIAKAGQA/AtByAAQBGAABLgGQAbACAaAEQARALAWAMQDaB2AVAOQDLCDBVC7QAfBoAcCpQAhAqAAApQAAA+gNAxQgZBdhAAAQg5AAgdgQIgBABIgjgJQhAgChdgTQhJgPgmgMIgrgLQh/gQj7goQndhOg8gHIpIAAQhpAsi8BAQikBel4B4QjSBCj8BDQi3AwgjAHQgsAHhHAOQgygEg4AJQhIAMg1AfIhPARIgHA3Qg3BDAABeQAABAAJA0IAEAVIgBAKQg6GhAAD+QAABTAaFdQAIATAAAWQAAANgCAMIACAhQAAAjgLAaQgWA1g7AAQgfAAgXgng");
	var mask_graphics_838 = new cjs.Graphics().p("EgDzAqsIgnADMguxAAAQgXAjg1AAQggAAgXgjImHAAQhcgWAAhFQAAhUBcgIIFYAAQgGg/gBhQQARmmAAiAMAAAgnTQgtgXgbgkQgfgqAAg2QAAhIAfgpQAsg8BtgMMAm3AAAQASgVAXgMQBagxBrBoQByAyAAB1IAAAHQARA0ANBIQAlDSACAIQAxCoBRBzQAIAcANAbQBXC8DFAAIALAAIAGAAIAWAAIAIACIAUAHIB6gDQJfgdIqioQCWgtEbhcQD8hODQgoIFMAAQCpAYCJAhIAJAGQA/AsBwAAQBFAABKgGQAbACAZAEQARALAWALQDXB1AVAOQDHCABUC5QAfBnAcCnQAgApAAAoQAAA+gNAwQgZBcg/AAQg3AAgdgQIgCABIghgJQg/gChcgTQhJgPglgLIgrgMQh9gPj3goQnWhMg8gHIpAAAQhnAri5A/QiiBdlzB2QjPBBj5BDQi0AvgjAGQgrAHhGAOQgxgDg3AJQhHALg1AfIhOAQIgHA3Qg2BBAABdQAAA/AJA0IAEAUIgBAKQg6GcAAD6QAABSAbFYQAIATAAAVQAAANgCAMIACAhQAAAigMAaQgVA0g7AAQgeAAgWgmg");
	var mask_graphics_839 = new cjs.Graphics().p("EgDwAqTIgmADMguHAAAQgXAig0AAQgfAAgXgiImCAAQhagXAAhDQAAhTBagIIFUAAQgGg+gBhPQARmgAAh+MAAAgmwQgtgWgagjQgfgqAAg1QAAhHAfgpQArg7BrgMMAmUAAAQASgUAXgNQBZgvBpBlQBxAyAABzIAAAHQAQA0ANBHQAkDPACAIQAxClBQBxQAIAdAMAaQBWC5DCAAIAMAAIAFAAIAWAAIAIACIATAHIB5gCQJWgeIiilQCUgtEXhaQD4hNDOgnIFHAAQCnAXCHAgIAJAHQA+ArBuAAQBEAABJgGQAaACAZAEQARAKAWAMQDUBzAUAOQDFB+BTC3QAeBlAcClQAfApAAAnQAAA9gMAvQgZBag+AAQg3AAgdgPIgBABIghgJQg+gChbgTQhHgOglgMIgqgLQh7gPj0gnQnQhMg7gHIo3AAQhmAri3A+QifBcluB0QjMBBj1BBQizAughAHQgrAHhFANQgxgDg2AJQhGALg0AfIhNAQIgGA2Qg1BAAABcQAAA+AJAyIADAVIgBAKQg5GVAAD3QAABRAaFTQAIASAAAWQAAAMgCANIACAfQAAAigLAaQgWAzg5AAQgdAAgXglg");
	var mask_graphics_840 = new cjs.Graphics().p("EgDtAp5IglAEMgtdAAAQgWAhgzAAQggAAgWghIl8AAQhZgXAAhCQAAhSBZgHIFPAAQgGg+gBhOQARmaAAh8MAAAgmMQgtgXgagiQgegpAAg1QAAhGAegoQArg6BpgMMAlxAAAQASgUAWgMQBYgvBoBkQBvAxAAByIAAAGQARA0AMBGQAjDLADAIQAwCkBPBvQAHAcANAZQBUC3DAAAIALAAIAFAAIAVAAIAIACIATAHIB3gCQJOgdIbijQCRgsEThZQD1hMDKgnIFDAAQClAXCEAgIAJAGQA9ArBtAAQBDAABIgGIAzAGQAQAKAVAMQDSBxAUAOQDCB8BRC0QAeBkAbCiQAfApAAAmQAAA8gMAvQgYBZg9AAQg3AAgcgQIgBABIghgIQg9gChagSQhGgPgkgLIgqgLQh5gPjwgnQnJhKg6gHIowAAQhkAqi0A+QidBalpByQjJBAjyBAQiwAughAHQgqAGhEAOQgwgEg1AJQhFALgzAeIhMAQIgHA1Qg0BAAABaQAAA9AJAyIADAUIgBAKQg4GQAADzQAABPAaFPQAIASAAAVQAAANgDAMIADAfQAAAhgLAaQgWAyg4AAQgdAAgXglg");
	var mask_graphics_841 = new cjs.Graphics().p("EgDpApgIglADMgszAAAQgWAhgyAAQgfAAgWghIl3AAQhYgWAAhCQAAhQBYgHIFKAAQgFg9gBhMQAQmVAAh6MAAAglpQgsgWgZgiQgegoAAg0QAAhFAegoQAqg5BogMMAlOAAAQARgTAWgMQBXguBmBiQBtAwAABwIAAAHQARAyAMBFQAjDJACAIQAvChBOBuQAIAbAMAZQBTC0C9AAIALAAIAFAAIAVAAIAIACIATAHIB1gCQJFgdITigQCPgsEPhYQDyhKDHgmIE+AAQCiAWCDAgIAJAGQA8AqBrAAQBCAABHgGIAyAGQAQAKAVALQDOBwAUANQC/B7BQCxQAeBjAbCgQAfAoAAAmQAAA7gMAuQgZBYg8AAQg1AAgcgQIgBABIgggIQg9gChYgSQhFgOgkgLIgpgLQh3gPjtgmQnDhKg5gGIooAAQhiAqiyA8QibBZljBxQjGA+juBAQiuAtggAGQgqAHhDANQgvgDg1AJQhEAKgyAeIhLAPIgGA1Qg0A/AABYQAAA9AJAxIADAUIgBAKQg3GJAADwQAABOAZFKQAIASAAAVQAAAMgCAMIACAfQAAAhgLAZQgVAxg4AAQgcAAgWgkg");
	var mask_graphics_842 = new cjs.Graphics().p("EgDmApHIgkADMgsJAAAQgVAggyAAQgeAAgWggIlxAAQhXgWAAhBQAAhPBXgHIFFAAQgGg8gBhLQARmPAAh4MAAAglGQgsgVgYgiQgegoAAgyQAAhEAegnQApg5BmgLMAkrAAAQARgUAWgMQBVgtBlBhQBsAwAABuIAAAGQAQAyAMBEQAiDGADAHQAuCfBNBsQAHAbAMAZQBSCxC6AAIALAAIAFAAIAVAAIAHADIATAGIBzgCQI9gcILieQCOgrEKhXQDuhJDFgmIE5AAQCgAXCBAeIAIAGQA8ApBpAAQBCAABFgFIAxAFQAQALAVALQDLBuATANQC9B5BPCvQAdBhAbCdQAeAoAAAlQAAA6gMAuQgYBWg7AAQg1AAgbgPIgBABIgggIQg8gChXgSQhEgOgjgLIgogLQh2gOjpglQm9hJg4gGIofAAQhhApivA7QiZBYleBvQjDA9jrA/QirAsggAHQgpAGhCANQgugDg0AJQhDALgyAdIhJAPIgHA0QgzA9AABYQAAA7AJAxIADATIgBAKQg2GEAADtQAABMAZFFQAHASAAAUQAAAMgCAMIACAeQAAAhgKAZQgVAwg3AAQgcAAgWgjg");
	var mask_graphics_843 = new cjs.Graphics().p("EgDiAotIgkADMgreAAAQgWAggxAAQgeAAgVggIlsAAQhVgVAAhAQAAhNBVgIIFBAAQgGg6gBhLQAQmJAAh2MAAAgkiQgqgVgZghQgdgoAAgyQAAhDAdgmQApg4BlgLMAkHAAAQARgTAWgMQBUgtBjBgQBqAvAABsIAAAHQAQAxAMBDQAiDDACAHQAuCcBLBrQAIAaALAZQBRCvC3AAIALAAIAFAAIAVAAIAHACIASAGIBygCQI0gcIDibQCMgrEHhVQDqhIDBglIE1AAQCdAWB/AeIAJAGQA6AoBpAAQBAAABEgFIAwAFQAQALAVALQDIBsATANQC6B3BNCsQAdBgAaCbQAeAnAAAkQAAA6gMAtQgXBVg7AAQgzAAgbgPIgCABIgfgIQg7gChVgSQhDgOgjgKIgogLQh0gOjmglQm1hHg3gHIoYAAQhfApitA6QiWBXlZBtQjAA9jnA+QipArgfAHQgpAGhBANQgugDgzAIQhCALgxAcIhIAPIgGAzQgyA9AABWQAAA7AIAwIADATIgBAJQg1F/AADpQAABLAYFBQAIARAAAUQAAAMgCALIACAeQAAAggLAYQgUAwg2AAQgcAAgVgjg");
	var mask_graphics_844 = new cjs.Graphics().p("EgDfAoUIgjADMgq0AAAQgVAfgwAAQgeAAgVgfIlmAAQhUgVAAg/QAAhMBUgIIE7AAQgFg5gBhKQAQmDAAh0MAAAgj/QgqgVgYggQgdgnAAgxQAAhCAdgmQAng2BkgMMAjlAAAQAQgTAVgLQBTgsBiBeQBoAuAABrIAAAGQAQAwAMBCQAhDAACAIQAtCaBLBpQAHAaAMAYQBPCsC1AAIAKAAIAFAAIAUAAIAIACIASAGIBwgCQIrgbH7iZQCKgqEDhUQDmhHC/glIEwAAQCbAWB9AeIAIAGQA6AnBnAAQA/AABDgFIAwAFQAQALATAKQDFBrATANQC3B1BNCqQAcBeAaCYQAdAnAAAkQAAA5gLAsQgXBTg6AAQgzAAgbgOIgBABIgfgIQg5gChVgRQhCgOgigLIgngKQhygOjjgkQmvhHg2gGIoPAAQhfAoipA6QiUBUlUBsQi+A8jjA9QimArgfAGQgoAHhAAMQgtgDgyAIQhBALgwAcIhIAPIgGAyQgxA8AABVQAAA5AIAwIADASIgBAKQg0F4AADmQAABKAYE8QAHAQAAAUQAAAMgCALIACAeQAAAfgKAYQgUAvg2AAQgbAAgVgig");
	var mask_graphics_845 = new cjs.Graphics().p("EgDbAn6IgjAEMgqKAAAQgVAfgvAAQgdAAgVgfIlhAAQhSgVAAg+QAAhLBSgIIE3AAQgFg4gBhJQAPl8AAhzMAAAgjbQgpgVgYggQgcgmAAgxQAAhBAcglQAng1BigMMAjCAAAQARgSAUgMQBSgrBgBdQBnAtAABpIAAAHQAPAvAMBBQAhC9ACAHQAsCYBJBnQAIAaALAYQBOCpCyAAIAKAAIAFAAIAUAAIAHACIASAGIBugCQIjgbH0iWQCHgqD/hSQDjhGC8glIErAAQCZAWB7AeIAIAFQA5AnBlAAQA+AABCgFIAvAFQAQAKATALQDCBpATANQC0BzBLCnQAcBdAZCWQAdAmAAAjQAAA4gLArQgXBTg5AAQgyAAgagOIgBABIgegIQg5gChTgRQhBgOgigKIgmgKQhxgOjfgkQmohFg2gGIoHAAQhdAninA5QiRBTlPBrQi7A6jgA8QijArgfAGQgnAGg/AMQgsgDgyAJQhAAKgvAcIhGAOIgGAyQgxA7AABTQAAA5AIAuIADATIgBAJQgzFzAADiQAABJAXE3QAIAQAAAUQAAALgCALIACAdQAAAfgLAYQgTAvg1AAQgbAAgUgjg");
	var mask_graphics_846 = new cjs.Graphics().p("EgDXAneIgjADMgpYAAAQgUAegvAAQgcAAgUgeIlbAAQhRgUAAg9QAAhKBRgHIExAAQgFg4gBhHQAPl2AAhwMAAAgiyQgogUgXgfQgcgmAAgvQAAhAAcglQAmg0BggLMAiZAAAQAQgTAUgLQBQgqBeBbQBmAsAABoIAAAGQAPAuALBAQAgC6ACAHQAsCVBIBlQAHAZALAWQBNCoCuAAIAKAAIAFAAIAUAAIAHACIARAGIBsgCQIZgbHriUQCEgoD7hRQDehFC5gjIEmAAQCVAVB5AdIAIAFQA4AnBjAAQA9AABBgFIAuAFQAQAKATAKQC+BnASAMQCxByBKCkQAbBbAZCTQAdAlAAAjQAAA3gLAqQgXBRg3AAQgyAAgZgOIgBABIgegHQg4gDhSgQQg/gNgigKIglgLQhvgNjbgjQmghEg1gGIn9AAQhbAmikA4QiPBSlIBoQi4A6jcA7QigApgeAHQgnAGg9AMQgsgDgxAIQg+AKgvAbIhFAPIgGAwQgwA6AABSQAAA4AJAtIADASIgBAKQgzFrAADeQAABIAXExQAHAQAAATQAAAMgCALIACAcQAAAegKAYQgTAtg0AAQgaAAgUghg");
	var mask_graphics_847 = new cjs.Graphics().p("EgDTAnBIgiADMgomAAAQgUAeguAAQgcAAgUgeIlUAAQhPgUAAg7QAAhJBPgHIEsAAQgFg2gBhGQAPlvAAhuMAAAgiIQgogUgXgfQgbgkAAgvQAAg/AbgkQAmgzBegLMAhvAAAQAQgSAUgLQBOgqBdBaQBjArAABmIAAAGQAPAuALA+IAiC9QArCSBGBkQAHAYALAWQBMCkCrAAIAKAAIAFAAIASAAIAHACIARAGIBrgCQIOgaHiiSQCCgmD1hQQDbhEC1giIEgAAQCTAUB3AdIAHAFQA3AmBiAAQA7AABAgFIAuAFQAOAKATAKQC7BkASAMQCuBwBIChQAbBZAYCRQAcAkAAAjQAAA1gLAqQgWBQg2AAQgxAAgZgOIgBABIgdgIQg3gChQgQQg+gNghgKIglgKQhsgNjXgjQmZhCgzgGIn0AAQhaAmihA2QiMBRlCBmQi0A5jYA6QidAogeAGQglAGg9AMQgrgDgvAIQg+AKguAbIhDAOIgGAwQgvA4AABRQAAA2AIAtIADASIgBAJQgyFlAADZQAABHAXErQAHAQAAATQAAALgCALIACAcQAAAegKAWQgTAtgyAAQgaAAgUghg");
	var mask_graphics_848 = new cjs.Graphics().p("EgDPAmlIghADMgn1AAAQgUAdgsAAQgcAAgTgdIlOAAQhOgUAAg6QAAhHBOgHIEmAAQgFg2gBhEQAPloAAhsMAAAgheQgngUgXgeQgagkAAguQAAg9AagjQAlgzBdgLMAhGAAAQAPgRAUgLQBNgpBaBYQBiArAABjIAAAGQAPAtAKA9IAhC5QAqCQBGBhQAGAYALAWQBKChCoAAIAKAAIAFAAIASAAIAHACIAQAGIBpgCQIFgaHXiPQCAgmDxhOQDXhCCxgiIEbAAQCQAUB0AcIAIAFQA1AlBgAAQA7AAA+gFIAtAFIAhAUQC3BiASAMQCqBuBHCeQAaBXAYCOQAcAkAAAhQAAA1gLApQgWBOg1AAQgwAAgYgOIgBABIgdgHQg2gChOgQQg+gNgggJIgkgKQhqgNjTgiQmQhBgzgGInrAAQhXAlieA2QiKBPk8BkQiwA4jUA4QiaAogdAGQglAGg8AMQgqgDguAHQg9AKgtAaIhCAOIgGAvQguA3AABPQAAA2AIAsIADASIgBAIQgxFeAADWQAABFAXEmQAHAPAAATQAAAKgCALIACAbQAAAegKAWQgTAsgxAAQgaAAgTggg");
	var mask_graphics_849 = new cjs.Graphics().p("EgDLAmIIghADMgnDAAAQgTAdgsAAQgaAAgUgdIlHAAQhMgTAAg5QAAhGBMgHIEgAAQgFg0gBhDQAPlhAAhqMAAAgg1QgmgTgWgdQgagkAAgtQAAg8AagiQAkgyBbgKMAgcAAAQAPgSAUgKQBLgoBZBWQBgAqAABhIAAAGQAOAsAKA8IAhC2QApCMBEBfQAHAYAKAWQBJCeCkAAIAKAAIAFAAIASAAIAGACIARAFIBmgCQH7gZHOiMQB+gmDshMQDShBCughIEVAAQCOAUByAbIAHAFQA1AlBdAAQA6AAA9gFIAsAFIAgATQC0BgARAMQCnBsBGCaQAaBWAXCLQAbAjAAAhQAAA0gKAoQgVBMg1AAQgvAAgYgNIgBABIgcgHQg1gChNgQQg8gMgfgKIgkgJQhogNjOghQmJhAgygGInhAAQhWAkibA1QiHBNk1BjQitA2jQA4QiXAngdAGQgkAFg6AMQgpgDguAIQg7AJgsAaIhBANIgGAuQgtA3AABNQAAA1AIArIACARIgBAJQgvFXAADRQAABEAWEgQAGAPAAASQAAALgCAKIACAbQAAAdgJAWQgSArgxAAQgZAAgTggg");
	var mask_graphics_850 = new cjs.Graphics().p("EgDHAlsIggACMgmRAAAQgTAdgrAAQgaAAgTgdIlBAAQhKgSAAg4QAAhFBKgGIEaAAQgEg0gBhCQAOlZAAhoMAAAggLQgmgTgVgdQgZgiAAgsQAAg7AZgiQAkgxBZgKIfzAAQAPgRASgKQBKgoBYBVQBdApAABfIAAAGQAOArALA7IAgCyQAoCKBCBdQAHAXAKAWQBHCaCiAAIAJAAIAFAAIARAAIAHACIAQAGIBkgCQHxgYHFiKQB7gmDnhKQDPg/CqghIEQAAQCKATBwAbIAIAFQAzAkBcAAQA4AAA9gFIAqAFIAgATQCwBeARAMQCkBpBECYQAZBUAXCIQAaAiABAhQgBAzgKAnQgUBLg0AAQgtAAgYgNIgBABIgcgHQgzgChMgQQg7gMgfgJIgigKQhngMjKghQmBg+gxgGInXAAQhUAkiYAzQiEBMkwBhQiqA1jLA2QiUAngcAFQgkAGg5ALQgogDgtAIQg6AJgrAaIhAANIgGAtQgsA1AABMQAAA0AIAqIADARIgBAIQgvFQAADOQAABCAVEaQAHAPAAASQAAAKgCALIACAaQAAAcgJAVQgSArgwAAQgYAAgTgfg");
	var mask_graphics_851 = new cjs.Graphics().p("EgDDAlPIgfADMglgAAAQgSAbgqAAQgaAAgTgbIk6AAQhJgSAAg4QAAhDBJgGIEVAAQgFgygBhBQAOlSAAhmIAA/hQglgTgVgcQgZgiAAgrQAAg6AZghQAjgwBXgKIfKAAQAPgQASgKQBJgnBVBTQBcAoAABeIAAAFQAOAqAKA6IAfCvQAoCHBBBaQAGAXAKAVQBGCYCeAAIAJAAIAFAAIARAAIAGACIAQAFIBigCQHngXG8iHQB4glDjhJQDKg+CnggIEKAAQCIATBuAaIAHAFQAyAjBaAAQA4AAA7gEIApAEIAgATQCsBcARALQCgBoBDCUQAYBTAXCFQAaAiAAAgQAAAxgKAnQgUBJgzAAQgsAAgYgNIgBABIgbgHQgygChKgPQg6gMgegJIgigJQhkgMjHggQl5g9gwgGInNAAQhTAjiVAyQiBBLkqBeQimA1jHA1QiRAmgcAFQgiAGg4ALQgogDgsAHQg5AJgqAZIg+ANIgGAsQgrA0AABLQAAAyAHAqIADAQIgBAIQguFKAADJQAABBAVEUQAHAPAAASQAAAKgCAKIACAZQAAAcgKAVQgRApgvAAQgYAAgSgeg");
	var mask_graphics_852 = new cjs.Graphics().p("EgC/AkzIgfACMgkuAAAQgRAbgqAAQgZAAgSgbIkzAAQhIgSAAg2QAAhBBIgHIEOAAQgEgxgBg/QANlMAAhjIAA+3QgkgSgUgcQgZgiAAgqQAAg5AZggQAigvBVgKIehAAQAOgQASgKQBHglBUBRQBaAnAABcIAAAFQANAqAKA4IAfCrQAmCEBABZQAGAXAKAUQBFCVCaAAIAJAAIAFAAIARAAIAGABIAPAGIBhgCQHcgXGziFQB2gkDehHQDGg9CjgfIEFAAQCFATBrAZIAHAFQAyAjBYAAQA2AAA6gFIApAFIAeARQCpBbAQALQCdBlBCCSQAYBRAWCDQAZAgAAAfQAAAxgJAmQgUBIgyAAQgrAAgXgNIgBABIgbgHQgxgChIgOQg5gMgegJIghgJQhigMjCgfQlyg9gugFInFAAQhRAiiRAyQh/BJkjBcQijAzjDA0QiOAlgbAGQgiAFg3ALQgngDgrAHQg4AJgpAZIg9AMIgFArQgrA0AABIQAAAyAIAoIACARIgBAIQgtFCAADFQAABAAVEPQAGAOAAARQAAAKgBAKIABAZQAAAbgJAVQgRAoguAAQgXAAgSgdg");
	var mask_graphics_853 = new cjs.Graphics().p("EgC7AkWIgeADMgj8AAAQgSAagoAAQgZAAgRgaIktAAQhHgSAAg1QAAhABHgGIEIAAQgEgxgBg9QANlFAAhiIAA+NQgjgRgUgcQgYggAAgqQAAg3AYggQAhguBUgJId3AAQAOgQASgKQBGglBRBQQBYAmAABaIAAAFQAOApAJA3IAeCnQAmCBA/BYQAGAWAJAUQBDCRCYAAIAIAAIAFAAIAQAAIAHACIAPAFIBegBQHSgXGqiCQBzgjDahGQDBg7CggfIEAAAQCCASBpAaIAHAEQAwAhBWAAQA1AAA5gFIAoAFIAeARQClBaAQALQCaBjBACOQAXBPAWCBQAZAgAAAeQAAAwgKAlQgTBGgxAAQgqAAgXgMIgBABIgagHQgwgChHgOQg3gMgdgJIghgIQhggMi+gfQlqg7gtgFIm7AAQhPAiiPAwQh8BHkdBbQifAyi/AzQiLAkgbAFQghAGg2AKQgmgCgqAHQg2AIgpAYIg8ANIgFAqQgpAyAABHQAAAxAHAnIACAQIAAAIQgsE8AADBQAAA+AUEJQAGAOAAARQAAAKgCAJIACAZQAAAagJAUQgRAogsAAQgXAAgSgdg");
	var mask_graphics_854 = new cjs.Graphics().p("EgC3Aj5IgdADMgjLAAAQgRAagoAAQgYAAgRgaIkmAAQhFgRAAg0QAAg/BFgGIEDAAQgFgvAAg8QANk+AAhgIAA9jQgjgRgUgbQgXggAAgoQAAg3AXgfQAhgsBSgKIdOAAQAOgPARgKQBEgkBQBOQBWAlAABYIAAAFQANAoAJA2IAeCkQAlB9A9BWQAGAWAJAUQBCCOCUAAIAJAAIAEAAIAQAAIAGACIAPAFIBcgCQHIgWGhh/QBxgiDUhFQC+g6CdgeID5AAQB/ASBnAYIAHAEQAvAhBVAAQA0AAA3gEIAnAEIAdARQCiBYAQALQCWBhA/CLQAXBNAVB+QAYAfAAAeQAAAugJAkQgTBFgvAAQgqAAgWgMIgBABIgZgGQgwgChFgOQg2gLgdgJIgggJQhdgLi6geQlig6gtgFImxAAQhOAhiLAvQh6BGkXBZQibAxi7AyQiIAjgaAFQghAFg0ALQglgDgqAHQg1AJgoAXIg6AMIgFApQgpAxAABGQAAAvAHAnIADAQIgBAHQgrE1AAC9QAAA9AUEDQAGAOAAAQQAAAKgCAJIACAYQAAAagJAUQgQAngsAAQgXAAgRgdg");
	var mask_graphics_855 = new cjs.Graphics().p("EgCzAjdIgcACMgiZAAAQgRAagnAAQgYAAgQgaIkgAAQhEgQAAgzQAAg9BEgGID9AAQgEgvgBg7QANk2AAheIAA85QgigRgTgaQgXggAAgnQAAg1AXgeQAggsBQgKIckAAQAOgPARgJQBCgjBPBLQBUAmAABVIAAAFQAMAnAKA1IAcCgQAlB7A7BUQAGAVAJAUQBACLCRAAIAJAAIAEAAIAQAAIAGABIAOAFIBagBQG+gWGYh8QBugiDQhDQC5g5CagdID0AAQB8ASBlAXIAGAEQAvAgBSAAQAzAAA2gEIAmAEIAdARQCeBWAPAKQCTBfA+CIQAWBMAVB7QAYAeAAAeQAAAtgKAjQgSBEguAAQgpAAgWgMIgBABIgYgHQgvgBhDgOQg1gLgcgJIgfgIQhcgLi2gdQlag5gsgFImnAAQhMAgiJAvQh2BEkRBWQiZAwi2AxQiFAjgaAFQggAFgzAKQgkgDgpAHQg0AJgnAWIg5AMIgFApQgnAwAABEQAAAuAGAmIADAPIgBAIQgqEuAAC4QAAA8ATD+QAGANAAAQQAAAJgBAKIABAXQAAAZgIAUQgQAmgrAAQgWAAgRgcg");
	var mask_graphics_856 = new cjs.Graphics().p("EgCvAjAIgcADMghnAAAQgRAZglAAQgXAAgRgZIkZAAQhCgRAAgxQAAg8BCgGID3AAQgEgtgBg6QANkvAAhcIAA8QQghgQgTgaQgWgeAAgnQAAg0AWgdQAfgrBOgJIb8AAQANgPARgJQBBgjBMBKQBSAlAABUIAAAFQANAlAJA0IAcCdQAjB4A7BSQAFAUAJATQA/CICOAAIAIAAIAEAAIAPAAIAGACIAOAFIBYgCQG0gVGPh5QBsghDLhCQC1g4CWgdIDuAAQB6ARBiAYIAHAEQAtAgBRAAQAxAAA1gEIAmAEIAcAQQCaBUAPAKQCQBdA8CFQAWBKAUB4QAXAeAAAcQAAAtgJAiQgSBCgtAAQgoAAgVgLIgBAAIgYgGQgugChCgNQg0gLgbgIIgegIQhagLiygdQlSg3grgFImeAAQhKAgiFAtQh0BCkLBVQiVAviyAwQiCAigZAFIhSAOQgjgCgnAGQg0AJglAWIg4ALIgFAoQgnAvAABDQAAAtAHAlIACAPIgBAHQgpEnAAC1QAAA6ATD4QAGANAAAQQAAAJgCAJIACAXQAAAZgIASQgQAmgqAAQgVAAgRgcg");
	var mask_graphics_857 = new cjs.Graphics().p("EgCrAikIgbACMgg2AAAQgQAYglAAQgWAAgQgYIkTAAQhBgQAAgwQAAg7BBgFIDyAAQgEgtgBg4QAMkpAAhZIAA7mQgggQgTgZQgVgeAAgmQAAgyAVgdQAfgqBMgJIbTAAQAMgOAQgJQBAgiBLBIQBQAkAABSIAAAFQAMAlAJAyIAbCZQAjB1A5BRQAGAUAJASQA9CFCKAAIAIAAIAEAAIAPAAIAGABIANAFIBWgBQGrgVGFh2QBpghDHhAQCwg3CTgcIDpAAQB3ARBgAXIAGAFQAsAeBPAAQAwAAA0gEIAlAEIAbAQQCXBSAPAKQCMBbA7CCQAVBIAUB1QAXAdAAAcQAAArgJAiQgSBAgsAAQgnAAgVgLIAAABIgYgGQgsgChBgNQgzgKgagIIgegIQhYgLitgcQlLg2gqgFImUAAQhIAfiDAsQhxBBkEBTQiSAuiuAuQiAAhgYAFIhPAPQgjgDgmAHQgyAIglAVIg3AMIgFAmQglAuAABBQAAAsAGAlIADAOIgBAHQgoEhAACwQAAA5ASDyQAGANAAAPQAAAJgCAJIACAXQAAAYgIASQgQAkgpAAQgVAAgQgag");
	var mask_graphics_858 = new cjs.Graphics().p("EgCnAiHIgaADMggEAAAQgQAXgkAAQgWAAgQgXIkMAAQg/gQAAgvQAAg6A/gFIDsAAQgEgrgBg3QAMkiAAhXIAA68QgfgQgSgYQgWgdAAglQAAgyAWgcQAdgpBLgJIapAAQANgOAPgIQA+ghBJBGQBPAjAABQIAAAFQAMAkAIAxIAbCVQAiBzA3BOQAGAUAJASQA7CCCHAAIAIAAIAEAAIAPAAIAFABIAOAFIBUgCQGggUF8h0QBmgfDCg/QCtg1CPgcIDkAAQB0ARBdAWIAGAFQAsAdBNAAQAvAAAygEIAkAEIAbAQQCTBQAOAKQCJBYA6B/QAVBHATByQAWAcAAAcQAAAqgJAhQgRA/grAAQgmAAgUgLIgBABIgXgGQgrgCg/gNQgygKgagIIgdgIQhVgKiqgbQlDg1gogFImLAAQhHAeh/ArQhvBAj+BRQiOAtirAtQh8AggXAFIhOAOQgigCglAGQgxAIgkAVIg1ALIgFAmQglAsAABAQAAArAGAkIADAOIgBAHQgnEaAACrQAAA4ASDsQAFANAAAPQAAAJgBAIIABAWQAAAYgIASQgOAjgoAAQgVAAgQgag");
	var mask_graphics_859 = new cjs.Graphics().p("EgCjAhrIgaACI/SAAQgPAXgjAAQgWAAgPgXIkGAAQg+gPAAguQAAg4A+gGIDmAAQgDgqgBg1QALkbAAhVIAA6TQgegPgSgYQgVgcAAgkQAAgwAVgcQAdgoBJgIIaAAAQAMgOAPgIQA9ghBHBFQBNAiAABOIAAAFQALAjAIAwIAbCRQAgBwA3BNQAFATAJASQA6B+CEAAIAHAAIAEAAIAOAAIAGACIANAEIBSgBQGWgUFyhxQBlgeC9g+QCpg0CLgbIDeAAQBxAQBcAWIAGAFQAqAdBLAAQAuAAAxgEIAjAEIAaAPQCQBOAOAJQCGBXA4B8QAUBEATBwQAWAcAAAaQAAAqgJAgQgRA9gqAAQglAAgUgLIAAABIgXgGQgqgBg+gNQgwgKgZgHIgdgIQhTgKimgbQk6gzgogFImCAAQhEAdh9ArQhsA+j4BPQiKArinAtQh5AfgXAFIhLANQghgCglAGQgwAIgjAVIg0AKIgEAlQgkAsAAA+QAAAqAGAiIACAOIgBAHQgmETAACoQAAA2ASDnQAFAMAAAPQAAAIgCAIIACAWQAAAXgIARQgOAjgnAAQgUAAgQgZg");
	var mask_graphics_860 = new cjs.Graphics().p("EgCeAhOIgaACI+hAAQgOAXgjAAQgVAAgPgXIj/AAQg8gPAAgsQAAg3A8gFIDhAAQgEgpgBg1QALkTAAhTIAA5pQgegPgRgXQgUgcAAgjQAAgvAUgbQAdgnBHgIIZWAAQAMgNAPgJQA7gfBGBDQBKAhAABMIAAAFQALAiAJAvIAZCNQAgBuA1BLQAFASAJASQA4B7CBAAIAHAAIAEAAIAOAAIAFABIANAFIBQgCQGMgTFphuQBigeC5g8QCkgyCIgaIDZAAQBuAPBZAVIAGAFQApAcBJAAQAtAAAwgEIAiAEIAaAPQCMBMAOAJQCCBUA3B5QAUBDASBtQAVAbAAAaQAAAogIAgQgRA8gpAAQgkAAgTgLIgBABIgWgGQgpgBg8gNQgvgJgZgIIgbgHQhSgKihgaQkzgygngFIl4AAQhDAdh5ApQhpA8jyBNQiIAriiArQh2AfgWAEIhKAOQgggCgkAGQguAHgjAUIgyALIgFAjQgjArAAA9QAAApAGAhIACAOIAAAGQgmENAACjQAAA1ARDhQAGAMAAAOIgCARIACAVQAAAWgIARQgOAigmAAQgUAAgOgZg");
	var mask_graphics_861 = new cjs.Graphics().p("EgCaAgyIgZACI9vAAQgPAWghAAQgVAAgOgWIj5AAQg6gPAAgrQAAg2A6gFIDbAAQgEgoAAgzQALkMAAhRIAA4/QgegPgQgWQgUgbAAgjQAAgtAUgbQAbgmBFgIIYuAAQALgNAPgIQA5geBEBBQBJAgAABLIAAAEQALAhAIAuIAZCKQAfBrA0BIQAFATAIAQQA3B4B9AAIAIAAIADAAIAOAAIAFACIAMAEIBOgBQGCgTFghrQBggdCzg6QChgyCEgZIDTAAQBsAPBXAVIAFAEQApAbBHAAQAsAAAvgDIAhADIAYAPQCJBKANAJQB/BSA2B2QATBBASBqQAUAbAAAZQAAAngIAfQgQA6goAAQgjAAgTgKIAAAAIgWgFQgogCg6gLQgugKgYgHIgbgHQhQgKidgZQkrgxgmgFIluAAQhCAch2AoQhmA7jsBLQiEAqieAqQhzAegWAEIhIANQgfgCgjAGQgtAHgiAUIgxAKIgEAjQgiApAAA7QAAAoAFAhIADANIgBAHQglEFAACgQAAAzARDbQAFAMAAAOIgBAQIABAUQAAAWgHARQgOAhglAAQgTAAgOgYg");
	var mask_graphics_862 = new cjs.Graphics().p("EgCWAgVIgYACI8+AAQgOAVghAAQgTAAgPgVIjyAAQg5gOAAgrQAAgzA5gFIDVAAQgDgngBgyQALkGAAhOIAA4WQgdgOgQgWQgTgaAAghQAAgtATgaQAbgkBDgIIYEAAQAMgNAOgIQA4geBCBAQBHAfAABJIAAAEQAKAhAIAsIAYCGQAfBoAyBHQAFASAIAQQA2B1B6AAIAHAAIADAAIANAAIAFACIAMAEIBMgCQF4gSFXhoQBdgdCvg4QCcgxCBgYIDOAAQBpAOBUAVIAGAEQAnAbBFAAQArAAAugEIAgAEIAYAOQCFBIANAJQB8BQAzByQATBAASBnQAUAaAAAZQAAAmgIAeQgQA4gnAAQgiAAgSgKIgBABIgVgFQgngCg5gLQgsgKgYgHIgagHQhNgJiZgZQkkgvglgFIlkAAQhAAbhzAnQhkA6jmBJQiAAoiaApQhwAdgVAFIhGAMQgfgCgiAGQgsAHggATIgwAKIgFAiQghApAAA5QAAAnAGAgIACANIgBAGQgjD/AACbQAAAyAQDWQAFALAAANIgBAQIABAUQAAAVgHAQQgOAggkAAQgSAAgOgXg");
	var mask_graphics_863 = new cjs.Graphics().p("AiSf4IgYADI8LAAQgOAUggAAQgTAAgOgUIjsAAQg3gOAAgqQAAgyA3gFIDQAAQgEgmgBgwQALj/AAhMIAA3sQgcgOgQgVQgSgaAAggQAAgsASgYQAbgkBBgIIXbAAQALgMAOgIQA2gdBAA+QBFAfAABGIAAAEQALAgAHArIAYCCQAdBmAxBFQAFARAIAQQA0ByB3AAIAHAAIADAAIANAAIAFABIAMAEIBJgBQFugSFOhlQBbgcCqg3QCYgvB9gYIDIAAQBmAOBTAUIAFAEQAmAaBEAAQApAAAtgEIAfAEIAYAOQCBBGANAIQB4BOAyBwQATA+ARBkQATAZAAAYQAAAlgHAdQgPA4gmAAQgiAAgRgKIgBABIgVgFQgmgCg3gLQgrgJgXgHIgagHQhLgJiVgYQkcgugkgFIlbAAQg+AbhvAmQhiA4jfBHQh9AniWAoQhtAcgVAEIhEANQgegCghAFQgrAHgfATIgvAJIgEAiQggAnAAA4QAAAmAFAfIACAMIgBAGQgiD4AACXQAAAxAQDQQAFALAAANIgCAPIACAUQAAAUgHAQQgNAfgkAAQgSAAgNgXg");
	var mask_graphics_864 = new cjs.Graphics().p("AiOfcIgXACI7aAAQgOAUgeAAQgTAAgOgUIjlAAQg2gOAAgoQAAgxA2gEIDKAAQgDglgBgvQAKj4AAhKIAA3DQgbgOgPgUQgSgYAAggQAAgqASgYQAZgjBAgIIWxAAQALgMAOgHQA1gcA+A8QBDAeAABEIAAAEQAKAfAHApIAXCAQAdBiAwBEQAEAQAIAQQAzBuBzAAIAHAAIADAAIANAAIAEACIAMAEIBIgCQFjgRFFhjQBYgaCmg2QCTguB6gXIDDAAQBjAOBQATIAGAEQAkAZBCAAQApAAArgDIAeADIAXAOQB+BEAMAIQB1BMAxBsQASA9ARBhQATAZAAAXQAAAkgIAcQgOA2glAAQghAAgRgJIgBAAIgTgFQglgBg2gLQgrgJgWgHIgZgGQhJgJiRgXQkTgtgjgEIlSAAQg8AZhtAlQhfA2jZBFQh5AniSAnQhqAbgUAEIhDAMQgcgCghAGQgpAGgfASIgtAKIgEAgQggAmAAA3QAAAkAFAfIACAMIAAAGQgiDxAACTQAAAvAQDKQAEALAAANIgBAOIABATQAAAUgGAQQgNAegiAAQgSAAgNgWg");
	var mask_graphics_865 = new cjs.Graphics().p("AiKe/IgWACI6pAAQgNAUgeAAQgSAAgNgUIjfAAQg0gNAAgnQAAgvA0gFIDEAAQgDgkgBguQAKjwAAhIIAA2aQgagNgPgUQgSgXAAgfQAAgpASgXQAZgiA+gHIWIAAQAKgMANgHQA0gcA9A7QBBAdAABCIAAAEQAJAdAIApIAWB8QAcBgAuBBQAFARAHAPQAxBrBxAAIAGAAIADAAIAMAAIAFABIALAEIBGgBQFZgRE8hgQBVgaChg0QCQgsB3gXIC9AAQBgAOBOASIAFAEQAkAYBAAAQAnAAAqgDIAdADIAXAOQB6BCAMAIQByBJAvBqQASA6AQBfQASAYAAAXQAAAjgHAbQgOA0gkAAQggAAgQgJIgBABIgTgFQgkgBg1gLQgpgIgVgHIgYgHQhHgIiNgXQkMgsgigDIlIAAQg7AYhpAkQhcA1jUBDQh2AliNAmQhnAbgUAEIhAAMQgcgCggAFQgoAGgeASIgsAJIgEAfQgfAmAAA0QAAAkAGAeIACALIgBAGQghDqAACPQAAAuAPDFQAFAKAAAMIgBAPIABASQAAAUgHAPQgMAdghAAQgRAAgNgWg");
	var mask_graphics_866 = new cjs.Graphics().p("AiGejIgWACI52AAQgNATgdAAQgSAAgMgTIjZAAQgzgNAAgmQAAguAzgFIC/AAQgEgiAAgtQAJjpAAhHIAA1vQgZgNgPgTQgRgYAAgcQAAgoARgXQAYghA9gHIVeAAQALgLAMgHQAygbA7A5QA/AcAABBIAAACQAKAdAHAoIAVB5QAcBdAtA/QAEAQAHAOQAwBpBtAAIAGAAIADAAIAMAAIAFABIAKAEIBEgBQFPgREzhdQBTgZCcgzQCLgrB0gWIC3AAQBeANBLASIAFAEQAjAYA+AAQAmAAApgDIAdADIAVAMQB3BBAMAIQBuBHAuBmQARA5AQBcQASAXAAAWQAAAjgHAaQgOAzgjAAQgfAAgQgJIgBABIgSgFQgjgCgzgKQgogIgVgGIgXgHQhFgIiJgWQkEgrghgDIk+AAQg5AYhnAiQhZA0jNBBQhzAkiJAlQhkAagTAEIg/ALQgbgCgeAFQgoAGgdARIgrAJIgDAfQgeAkAAAzQAAAjAFAcIACAMIgBAFQgfDkAACKQAAAtAOC/QAFAKAAAMIgCAOIACASQAAATgHAOQgMAdggAAQgQAAgNgVg");
	var mask_graphics_867 = new cjs.Graphics().p("AiCeGIgVACI5FAAQgMASgcAAQgSAAgMgSIjSAAQgxgMAAglQAAgtAxgEIC5AAQgDgigBgrQAJjiAAhFIAA1FQgYgNgOgTQgRgWAAgdQAAgmARgWQAXggA6gHIU2AAQAKgLAMgGQAxgaA5A3QA9AbAAA+IAAADQAJAdAHAmIAVB1QAaBaAsA+QAEAPAHAOQAvBlBpAAIAGAAIADAAIAMAAIAEACIAKADIBCgBQFGgQEphaQBQgZCYgxQCHgqBwgVICyAAQBbANBJARIAFAEQAhAXA9AAQAlAAAngDIAcADIAVAMQBzA/ALAHQBrBGAtBjQARA3APBZQARAXAAAVQAAAhgHAaQgNAxgiAAQgeAAgPgIIgBAAIgSgEQgigCgxgKQgngIgUgGIgXgGQhDgIiFgWQj8gpgggDIk1AAQg3AXhjAiQhXAxjHBAQhvAjiFAjQhhAagTADIg8ALQgbgCgdAFQgmAGgdARIgpAJIgEAdQgdAjAAAyQAAAiAFAbIACALIAAAGQgfDcAACHQAAArAOC5QAEAKAAAMIgBANIABARQAAATgGAOQgMAbgfAAQgQAAgMgUg");
	var mask_graphics_868 = new cjs.Graphics().p("Ah+dqIgUABI4UAAQgLASgcAAQgRAAgLgSIjMAAQgwgLAAgkQAAgsAwgEICzAAQgDggAAgqQAJjcAAhCIAA0cQgYgLgOgTQgQgWAAgcQAAglAQgVQAXgfA4gGIUNAAQAJgLAMgHQAvgZA3A2QA8AaAAA8IAAADQAJAcAGAlIAUBxQAaBYAqA7QAEAPAHAOQAtBiBnAAIAGAAIADAAIAKAAIAFABIAKAEIA/gBQE8gQEghXQBOgYCTgwQCCgoBtgVICsAAQBYANBHAQIAFAEQAhAWA6AAQAkAAAmgDIAbADIAUAMQBwA9ALAHQBoBDArBgQAQA2APBXQARAVAAAVQAAAggHAZQgNAwghAAQgdAAgPgJIAAABIgSgFQghgBgwgKQglgHgUgGIgWgGQhBgIiAgVQj1gogfgDIkrAAQg1AWhhAhQhUAwjBA+QhrAhiBAjQheAYgSAEIg7ALQgagCgcAFQglAGgcAQIgoAIIgDAcQgcAiAAAxQAAAgAFAbIABALIAAAFQgeDWAACCQAAAqAOCzQAEAKAAALIgBANIABARQAAASgGAOQgLAagfAAQgPAAgMgTg");
	var mask_graphics_869 = new cjs.Graphics().p("Ah6dNIgUACI3hAAQgMARgaAAQgQAAgMgRIjFAAQgugMAAgiQAAgqAugEICtAAQgCgggBgoQAJjVAAhAIAAzyQgXgLgOgSQgPgWAAgbQAAgkAPgVQAWgdA3gGITjAAQAJgKAMgHQAtgYA2AzQA5AZAAA7IAAAEQAJAaAGAkIAUBuQAZBUApA6QAEAOAGAOQAsBfBjAAIAGAAIADAAIAKAAIAEABIAKADIA+gBQExgPEXhUQBLgXCOgvQB/gnBpgUICnAAQBVAMBFARIAEADQAgAWA4AAQAjAAAlgDIAaADIAUALQBsA7ALAHQBkBBAqBdQAQA0AOBUQAQAVAAAUQAAAfgGAYQgNAuggAAQgcAAgOgIIgBAAIgRgEQgggBgugKQgkgHgTgGIgWgGQg+gHh9gUQjtgngdgDIkiAAQg0AWhdAfQhSAvi6A7QhoAhh9AiQhbAXgSAEIg5AKQgZgCgbAFQgkAGgaAPIgnAIIgEAcQgbAhAAAuQAAAgAFAaIACAKIgBAGQgdDOAAB+QAAApAOCuQAEAJAAALIgCANIACAQQAAARgGANQgLAagdAAQgPAAgMgTg");
	var mask_graphics_870 = new cjs.Graphics().p("AglcxIgTABI2wAAQgLARgaAAQgQAAgLgRIi+AAQgtgLAAghQAAgpAtgEICnAAQgCgfgBgnQAIjNAAg+IAAzIQgWgLgNgSQgPgUAAgaQAAgjAPgVQAWgcA0gHIS6AAQAJgKALgGQAsgWA0AxQA4AYAAA5IAAAEQAIAZAGAjIATBqQAYBSAoA4QAEAOAGANQAqBbBfAAIAFAAIADAAIALAAIAEACIAKADIA7gBQEogPENhSQBJgWCKgsQB6gmBmgUIChAAQBSAMBDAQIAEADQAfAVA3AAQAhAAAkgDIAZADIATALQBpA5AKAHQBhA+ApBbQAPAyANBRQAQAUAAATQAAAegGAYQgMAsgfAAQgbAAgOgIIgBABIgQgEQgfgBgtgJQgjgIgSgFIgVgGQg8gHh5gUQjlglgdgDIkYAAQgyAVhaAfQhPAti0A5QhlAgh5AgQhYAXgRADIg3AKQgYgBgaAEQgjAGgaAPIgmAIIgDAaQgbAgAAAtQAAAfAFAZIACAKIgBAFQgcDIAAB6QAAAnANCoQAEAJAAAKIgBANIABAPQAAARgGANQgKAZgcAAQgOAAgLgSg");
	var mask_graphics_871 = new cjs.Graphics().p("AA0cUIgSACI19AAQgLAQgZAAQgPAAgLgQIi4AAQgrgLAAggQAAgoArgDICiAAQgDgeAAgmQAIjGAAg8IAAyeQgWgLgMgRQgOgUAAgZQAAgiAOgTQAVgcAzgGISQAAQAJgKALgGQAqgWAyAwQA2AYAAA2IAAAEQAIAYAGAiIASBnQAXBPAmA1QADAOAGAMQApBZBdAAIAFAAIADAAIAKAAIAEABIAJADIA6gBQEdgOEEhPQBHgVCFgrQB2glBigTICcAAQBQAMBAAPIAEADQAeAUA0AAQAhAAAigCIAZACIASALQBlA3AKAGQBeA9AnBXQAOAwAOBPQAPATAAATQAAAdgGAXQgMArgdAAQgbAAgNgIIgBABIgQgEQgdgCgsgIQghgHgSgGIgUgFQg7gHh0gTQjdgkgcgDIkPAAQgwAUhXAeQhMAriuA4QhiAeh1AgQhVAWgQADIg1AKQgXgCgaAEQghAGgZAOIglAIIgDAaQgaAeAAAsQAAAdAFAZIABAJIAAAFQgbDBAAB2QAAAmAMCiQAEAJAAAKIgBAMIABAPQAAAQgFANQgLAYgbAAQgOAAgLgSg");
	var mask_graphics_872 = new cjs.Graphics().p("ACPb3IgSACI1MAAQgKAQgYAAQgOAAgLgQIixAAQgqgKAAggQAAglAqgEICcAAQgDgdAAgkQAIi/AAg6IAAx1QgVgKgMgQQgOgTAAgZQAAghAOgSQAUgbAxgGIRnAAQAIgJALgGQApgWAwAvQAzAXAAA1IAAADQAIAYAFAgIASBjQAWBMAlA0QAEANAGAMQAnBWBZAAIAGAAIACAAIALAAIADABIAJADIA4gBQETgOD7hMQBEgVCAgpQBygkBfgSICWAAQBNALA+APIAEADQAcAUAzAAQAfAAAigDIAXADIASAKQBiA1AJAGQBbA7AlBUQAOAuANBMQAPATAAASQAAAcgGAVQgLAqgdAAQgZAAgNgHIgBAAIgPgEQgdgBgqgIQgggHgRgFIgUgFQg4gHhwgSQjWgjgbgDIkFAAQguAUhUAcQhKAqioA2QheAdhwAeQhSAWgQADIgzAJQgXgCgYAFQghAFgXAOIgkAHIgDAZQgZAeAAAqQAAAcAEAYIACAJIgBAFQgaC6AAByQAAAkAMCdQAEAIAAAKIgBALIABAPQAAAPgFAMQgKAYgbAAQgNAAgKgSg");
	var mask_graphics_873 = new cjs.Graphics().p("ADpbbIgRABI0aAAQgKAPgXAAQgOAAgKgPIirAAQgogKAAgeQAAgkAogEICXAAQgDgbAAgjQAHi5AAg3IAAxLQgUgKgLgQQgOgSAAgYQAAgfAOgSQATgaAvgGIQ+AAQAIgJAKgFQAngVAuAtQAyAWAAAzIAAADQAIAXAFAfIARBfQAWBKAjAyQAEAMAFAMQAmBSBWAAIAFAAIADAAIAKAAIADABIAJADIA1gBQEJgNDyhJQBCgUB7goQBugiBbgSICRAAQBKALA8AOIAEADQAbATAxAAQAeAAAggDIAXADIARAKQBeAzAJAGQBXA4AlBRQANAtANBJQAOASAAARQAAAbgGAVQgLAogbAAQgZAAgMgHIgBABIgPgEQgbgBgogIQgggHgQgFIgTgFQg2gGhsgSQjOghgagDIj7AAQgtAThRAbQhHApiiAzQhaAdhtAdIheAXIgxAJQgWgBgYAEQgfAFgXANIgiAHIgDAYQgYAdAAAoQAAAcAEAWIACAJIgBAFQgZCzAABuQAAAjAMCXQADAIAAAJIgBALIABAOQAAAPgFAMQgJAWgaAAQgNAAgKgQg");
	var mask_graphics_874 = new cjs.Graphics().p("EgEIAtGIgqAEMgyuAAAQgZAlg5AAQgjAAgZglImpAAQhjgZAAhKQAAhbBjgJIF2AAQgGhEgBhXQASnKAAiKMAAAgqoQgxgZgdgnQgiguAAg6QAAhOAigtQAvhBB2gNMAqJAAAQAUgXAZgNQBig0B0BvQB8A3AAB/IAAAHQASA5AOBPQAoDjACAIQA2C3BYB8QAJAfANAdQBfDNDVAAIANAAIAGAAIAYAAIAIACIAWAHICEgDQKTgfJZi3QCigxEzhkQERhUDigsIFoAAQC4AaCUAkIAKAHQBEAvB6AAQBLAABPgGQAdACAcAEQATAMAXANQDqB+AWAPQDZCMBaDIQAiBwAeC1QAjAtAAArQAABDgOA0QgbBjhEAAQg9AAgfgRIgBABIglgJQhEgDhkgUQhOgQgpgNIgugMQiIgQkMgsQn+hThBgHIpxAAQhvAvjKBEQivBlmSCAQjhBGkNBIQjEAzgmAIQgvAHhMAPQg1gEg8AKQhNANg5AhIhUASIgIA7Qg6BHAABlQAABEAKA4IADAWIgBALQg+G+AAEQQAABYAdF2QAIAUAAAYQAAANgCAOIACAjQAAAlgMAcQgYA4g/AAQggAAgZgpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(83).to({graphics:mask_graphics_83,x:230.8,y:324.9}).wait(368).to({graphics:mask_graphics_451,x:203.9,y:177.3}).wait(1).to({graphics:mask_graphics_452,x:202,y:180}).wait(1).to({graphics:mask_graphics_453,x:200,y:182.8}).wait(1).to({graphics:mask_graphics_454,x:198.1,y:185.6}).wait(1).to({graphics:mask_graphics_455,x:196.2,y:188.4}).wait(1).to({graphics:mask_graphics_456,x:187.5,y:191.1}).wait(1).to({graphics:mask_graphics_457,x:177.4,y:193.9}).wait(1).to({graphics:mask_graphics_458,x:167.4,y:196.7}).wait(1).to({graphics:mask_graphics_459,x:157.3,y:199.5}).wait(1).to({graphics:mask_graphics_460,x:147.2,y:202.2}).wait(1).to({graphics:mask_graphics_461,x:137.2,y:205}).wait(1).to({graphics:mask_graphics_462,x:127.1,y:207.8}).wait(1).to({graphics:mask_graphics_463,x:117,y:210.6}).wait(1).to({graphics:mask_graphics_464,x:106.9,y:213.3}).wait(1).to({graphics:mask_graphics_465,x:96.9,y:216.1}).wait(1).to({graphics:mask_graphics_466,x:86.8,y:218.9}).wait(1).to({graphics:mask_graphics_467,x:76.7,y:221.7}).wait(1).to({graphics:mask_graphics_468,x:66.7,y:224.4}).wait(1).to({graphics:mask_graphics_469,x:56.6,y:227.2}).wait(1).to({graphics:mask_graphics_470,x:46.5,y:230}).wait(1).to({graphics:mask_graphics_471,x:36.4,y:232.8}).wait(1).to({graphics:mask_graphics_472,x:26.4,y:235.5}).wait(1).to({graphics:mask_graphics_473,x:16.3,y:238.3}).wait(1).to({graphics:mask_graphics_474,x:6.2,y:241.1}).wait(1).to({graphics:mask_graphics_475,x:-3.8,y:243.9}).wait(1).to({graphics:mask_graphics_476,x:-13.9,y:246.6}).wait(1).to({graphics:mask_graphics_477,x:-24,y:249.4}).wait(1).to({graphics:mask_graphics_478,x:-34.1,y:252.2}).wait(1).to({graphics:mask_graphics_479,x:-44.1,y:255}).wait(1).to({graphics:mask_graphics_480,x:-54.2,y:257.7}).wait(1).to({graphics:mask_graphics_481,x:-60.7,y:259.2}).wait(1).to({graphics:mask_graphics_482,x:-67.2,y:260.6}).wait(1).to({graphics:mask_graphics_483,x:-73.8,y:262.1}).wait(1).to({graphics:mask_graphics_484,x:-80.3,y:263.5}).wait(1).to({graphics:mask_graphics_485,x:-86.8,y:265}).wait(1).to({graphics:mask_graphics_486,x:-93.3,y:266.4}).wait(1).to({graphics:mask_graphics_487,x:-99.8,y:267.9}).wait(1).to({graphics:mask_graphics_488,x:-106.4,y:269.3}).wait(1).to({graphics:mask_graphics_489,x:-112.9,y:270.7}).wait(1).to({graphics:mask_graphics_490,x:-119.4,y:272.2}).wait(1).to({graphics:mask_graphics_491,x:-125.9,y:273.6}).wait(1).to({graphics:mask_graphics_492,x:-132.5,y:275.1}).wait(1).to({graphics:mask_graphics_493,x:-139,y:276.5}).wait(1).to({graphics:mask_graphics_494,x:-160.3,y:284.7}).wait(1).to({graphics:mask_graphics_495,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_496,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_497,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_498,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_499,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_500,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_501,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_502,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_503,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_504,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_505,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_506,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_507,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_508,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_509,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_510,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_511,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_512,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_513,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_514,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_515,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_516,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_517,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_518,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_519,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_520,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_521,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_522,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_523,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_524,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_525,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_526,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_527,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_528,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_529,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_530,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_531,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_532,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_533,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_534,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_535,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_536,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_537,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_538,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_539,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_540,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_541,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_542,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_543,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_544,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_545,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_546,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_547,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_548,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_549,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_550,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_551,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_552,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_553,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_554,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_555,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_556,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_557,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_558,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_559,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_560,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_561,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_562,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_563,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_564,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_565,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_566,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_567,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_568,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_569,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_570,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_571,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_572,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_573,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_574,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_575,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_576,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_577,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_578,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_579,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_580,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_581,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_582,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_583,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_584,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_585,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_586,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_587,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_588,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_589,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_590,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_591,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_592,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_593,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_594,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_595,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_596,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_597,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_598,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_599,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_600,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_601,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_602,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_603,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_604,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_605,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_606,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_607,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_608,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_609,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_610,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_611,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_612,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_613,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_614,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_615,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_616,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_617,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_618,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_619,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_620,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_621,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_622,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_623,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_624,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_625,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_626,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_627,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_628,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_629,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_630,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_631,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_632,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_633,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_634,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_635,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_636,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_637,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_638,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_639,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_640,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_641,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_642,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_643,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_644,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_645,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_646,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_647,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_648,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_649,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_650,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_651,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_652,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_653,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_654,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_655,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_656,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_657,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_658,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_659,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_660,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_661,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_662,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_663,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_664,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_665,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_666,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_667,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_668,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_669,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_670,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_671,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_672,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_673,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_674,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_675,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_676,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_677,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_678,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_679,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_680,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_681,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_682,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_683,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_684,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_685,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_686,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_687,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_688,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_689,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_690,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_691,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_692,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_693,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_694,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_695,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_696,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_697,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_698,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_699,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_700,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_701,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_702,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_703,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_704,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_705,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_706,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_707,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_708,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_709,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_710,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_711,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_712,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_713,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_714,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_715,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_716,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_717,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_718,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_719,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_720,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_721,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_722,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_723,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_724,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_725,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_726,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_727,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_728,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_729,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_730,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_731,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_732,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_733,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_734,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_735,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_736,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_737,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_738,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_739,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_740,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_741,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_742,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_743,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_744,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_745,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_746,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_747,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_748,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_749,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_750,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_751,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_752,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_753,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_754,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_755,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_756,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_757,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_758,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_759,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_760,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_761,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_762,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_763,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_764,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_765,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_766,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_767,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_768,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_769,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_770,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_771,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_772,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_773,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_774,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_775,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_776,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_777,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_778,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_779,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_780,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_781,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_782,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_783,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_784,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_785,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_786,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_787,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_788,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_789,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_790,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_791,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_792,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_793,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_794,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_795,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_796,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_797,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_798,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_799,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_800,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_801,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_802,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_803,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_804,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_805,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_806,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_807,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_808,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_809,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_810,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_811,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_812,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_813,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_814,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_815,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_816,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_817,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_818,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_819,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_820,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_821,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_822,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_823,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_824,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_825,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_826,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_827,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_828,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_829,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_830,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_831,x:-181.7,y:292.8}).wait(1).to({graphics:mask_graphics_832,x:-178.8,y:292.5}).wait(1).to({graphics:mask_graphics_833,x:-170.1,y:289.9}).wait(1).to({graphics:mask_graphics_834,x:-161.3,y:287.3}).wait(1).to({graphics:mask_graphics_835,x:-152.6,y:284.7}).wait(1).to({graphics:mask_graphics_836,x:-143.8,y:282.2}).wait(1).to({graphics:mask_graphics_837,x:-135.1,y:279.6}).wait(1).to({graphics:mask_graphics_838,x:-126.4,y:277}).wait(1).to({graphics:mask_graphics_839,x:-117.6,y:274.4}).wait(1).to({graphics:mask_graphics_840,x:-108.9,y:271.8}).wait(1).to({graphics:mask_graphics_841,x:-100.2,y:269.2}).wait(1).to({graphics:mask_graphics_842,x:-91.4,y:266.6}).wait(1).to({graphics:mask_graphics_843,x:-82.7,y:264}).wait(1).to({graphics:mask_graphics_844,x:-74,y:261.4}).wait(1).to({graphics:mask_graphics_845,x:-65.2,y:258.9}).wait(1).to({graphics:mask_graphics_846,x:-54.4,y:255.9}).wait(1).to({graphics:mask_graphics_847,x:-43.6,y:253}).wait(1).to({graphics:mask_graphics_848,x:-32.7,y:250.1}).wait(1).to({graphics:mask_graphics_849,x:-21.9,y:247.2}).wait(1).to({graphics:mask_graphics_850,x:-11.1,y:244.3}).wait(1).to({graphics:mask_graphics_851,x:-0.3,y:241.3}).wait(1).to({graphics:mask_graphics_852,x:10.5,y:238.4}).wait(1).to({graphics:mask_graphics_853,x:21.4,y:235.5}).wait(1).to({graphics:mask_graphics_854,x:32.2,y:232.6}).wait(1).to({graphics:mask_graphics_855,x:43,y:229.7}).wait(1).to({graphics:mask_graphics_856,x:53.8,y:226.8}).wait(1).to({graphics:mask_graphics_857,x:64.7,y:223.8}).wait(1).to({graphics:mask_graphics_858,x:75.5,y:220.9}).wait(1).to({graphics:mask_graphics_859,x:86.3,y:218}).wait(1).to({graphics:mask_graphics_860,x:97.1,y:215.1}).wait(1).to({graphics:mask_graphics_861,x:108,y:212.2}).wait(1).to({graphics:mask_graphics_862,x:118.8,y:209.2}).wait(1).to({graphics:mask_graphics_863,x:129.6,y:206.3}).wait(1).to({graphics:mask_graphics_864,x:140.4,y:203.4}).wait(1).to({graphics:mask_graphics_865,x:151.3,y:200.5}).wait(1).to({graphics:mask_graphics_866,x:162.1,y:197.6}).wait(1).to({graphics:mask_graphics_867,x:172.9,y:194.6}).wait(1).to({graphics:mask_graphics_868,x:183.7,y:191.7}).wait(1).to({graphics:mask_graphics_869,x:194.5,y:188.8}).wait(1).to({graphics:mask_graphics_870,x:197.3,y:185.9}).wait(1).to({graphics:mask_graphics_871,x:199.5,y:183}).wait(1).to({graphics:mask_graphics_872,x:201.7,y:180.1}).wait(1).to({graphics:mask_graphics_873,x:203.9,y:177.1}).wait(1).to({graphics:mask_graphics_874,x:-181.7,y:292.7}).wait(1564));

	// sound waves
	this.soundwaves = new lib.soundwavesmotion();
	this.soundwaves.parent = this;
	this.soundwaves.setTransform(-33.5,251.1,1,1,0,0,0,-383,4.5);
	this.soundwaves._off = true;

	var maskedShapeInstanceList = [this.soundwaves];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.soundwaves).wait(83).to({_off:false},0).wait(368).to({x:-133.5,y:267.1},0).wait(1).to({regX:-90.8,regY:56.5,scaleX:1.04,scaleY:1.04,x:156,y:322.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:153.2,y:325.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:150.4,y:328.9},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:147.7,y:332.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:144.8,y:335.5},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:142.1,y:338.7},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:139.3,y:342},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:136.5,y:345.3},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:133.8,y:348.6},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:131,y:351.9},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:128.2,y:355.1},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:125.4,y:358.4},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:122.7,y:361.7},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:119.9,y:365},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:117.1,y:368.3},0).wait(1).to({scaleX:1.59,scaleY:1.59,x:114.4,y:371.6},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:111.6,y:374.8},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:108.8,y:378.1},0).wait(1).to({scaleX:1.69,scaleY:1.69,x:106.1,y:381.4},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:103.3,y:384.7},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:100.5,y:387.9},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:97.8,y:391.3},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:94.9,y:394.5},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:92.2,y:397.8},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:89.5,y:401.1},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:86.6,y:404.4},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:83.9,y:407.6},0).wait(1).to({scaleX:2.02,scaleY:2.02,x:81.1,y:410.9},0).wait(1).to({scaleX:2.06,scaleY:2.06,x:78.3,y:414.2},0).wait(1).to({scaleX:2.08,scaleY:2.08,x:59.9,y:417},0).wait(1).to({scaleX:2.09,scaleY:2.09,x:41.3,y:419.8},0).wait(1).to({scaleX:2.1,scaleY:2.1,x:22.8,y:422.5},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:4.3,y:425.3},0).wait(1).to({scaleX:2.13,scaleY:2.13,x:-14.2,y:428},0).wait(1).to({scaleX:2.15,scaleY:2.15,x:-32.6,y:430.8},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:-51.1,y:433.5},0).wait(1).to({scaleX:2.18,scaleY:2.18,x:-69.6,y:436.3},0).wait(1).to({scaleX:2.19,scaleY:2.19,x:-88.2,y:439},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:-106.6,y:441.8},0).wait(1).to({scaleX:2.22,scaleY:2.22,x:-125.2,y:444.6},0).wait(1).to({scaleX:2.24,scaleY:2.24,x:-143.6,y:447.4},0).wait(1).to({scaleX:2.25,scaleY:2.25,x:-162.1,y:450.1},0).wait(339).to({regX:-382.9,regY:4.5,x:-819.7,y:333.2},0).wait(1).to({regX:-90.8,regY:56.5,scaleX:2.24,scaleY:2.24,x:-144,y:447.4},0).wait(1).to({scaleX:2.22,scaleY:2.22,x:-125.5,y:444.6},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:-107,y:441.8},0).wait(1).to({scaleX:2.19,scaleY:2.19,x:-88.5,y:439.1},0).wait(1).to({scaleX:2.18,scaleY:2.18,x:-70,y:436.3},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:-51.5,y:433.5},0).wait(1).to({scaleX:2.15,scaleY:2.15,x:-33,y:430.8},0).wait(1).to({scaleX:2.13,scaleY:2.13,x:-14.5,y:428},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:4,y:425.3},0).wait(1).to({scaleX:2.1,scaleY:2.1,x:22.5,y:422.5},0).wait(1).to({scaleX:2.09,scaleY:2.09,x:41,y:419.8},0).wait(1).to({scaleX:2.08,scaleY:2.08,x:59.5,y:417},0).wait(1).to({scaleX:2.06,scaleY:2.06,x:78,y:414.2},0).wait(1).to({scaleX:2.02,scaleY:2.02,x:80.9,y:410.8},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:83.8,y:407.4},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:86.6,y:404},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:89.5,y:400.7},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:92.4,y:397.2},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:95.3,y:393.8},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:98.1,y:390.4},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:101,y:387.1},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:103.9,y:383.7},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:106.8,y:380.2},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:109.6,y:376.8},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:112.5,y:373.4},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:115.4,y:370.1},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:118.3,y:366.7},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:121.1,y:363.2},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:124,y:359.8},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:126.9,y:356.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:129.8,y:353.1},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:132.6,y:349.7},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:135.5,y:346.2},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:138.4,y:342.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:141.3,y:339.5},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:144.1,y:336.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:147,y:332.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:149.9,y:329.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:152.8,y:325.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:155.6,y:322.5},0).wait(1).to({scaleX:1,scaleY:1,x:158.5,y:319.1},0).wait(1).to({regX:-382.9,regY:4.5,scaleX:2.25,scaleY:2.25,x:-819.7,y:333.2},0).wait(1).to({regX:-90.8,regY:56.5,x:-162.5,y:450.2},0).wait(1563));

	// ear drum bones mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_495 = new cjs.Graphics().p("A0CTxMAAAgnhMAmWAAAIAAQTQA0gRAKAeQAMAAAMABQAAAWAFAlQAFAlAEATIAADkQADAYADAzQACAzACAXIAABbQgLAbgcAAQgMAAgIgEQgIALABARIgBAgQgIAdgdAAIgGAAIAAMJg");
	var mask_1_graphics_874 = new cjs.Graphics().p("A0CTxMAAAgnhMAmWAAAIAAQTQA0gRAKAeQAMAAAMABQAAAWAFAlQAFAlAEATIAADkQADAYADAzQACAzACAXIAABbQgLAbgcAAQgMAAgIgEQgIALABARIgBAgQgIAdgdAAIgGAAIAAMJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(495).to({graphics:mask_1_graphics_495,x:216.8,y:275.5}).wait(337).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_1_graphics_874,x:216.8,y:275.5}).wait(1564));

	// ear drum -bones
	this.eardrum = new lib.eardrum();
	this.eardrum.parent = this;
	this.eardrum.setTransform(405.2,225.1);
	this.eardrum._off = true;

	var maskedShapeInstanceList = [this.eardrum];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.eardrum).wait(83).to({_off:false},0).wait(368).to({scaleX:2.84,scaleY:2.84,x:238.2,y:261.3},44).wait(336).to({scaleX:1,scaleY:1,x:405.2,y:225.1},42).wait(1).to({scaleX:2.84,scaleY:2.84,x:238.2,y:261.3},0).wait(1564));

	// inner ear
	this.innerEar_btn = new lib.innerearMC();
	this.innerEar_btn.parent = this;
	this.innerEar_btn.setTransform(480.2,218.6);
	this.innerEar_btn.alpha = 0;
	this.innerEar_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.innerEar_btn).wait(83).to({_off:false},0).wait(368).to({scaleX:2.36,scaleY:2.36,x:420.1,y:250.1,alpha:1},44).wait(336).to({scaleX:1,scaleY:1,x:480.2,y:218.6},42).to({scaleX:2.36,scaleY:2.36,x:420.1,y:250.1},1).wait(1564));

	// bg
	this.bg_whole = new lib.bgwhole();
	this.bg_whole.parent = this;
	this.bg_whole.setTransform(332.9,224.9);
	this.bg_whole._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bg_whole).wait(83).to({_off:false},0).wait(368).to({scaleX:2.34,scaleY:2.34,x:75,y:264.9,alpha:0},44).wait(336).to({scaleX:1,scaleY:1,x:332.9,y:224.9,alpha:1},42).to({_off:true},1).wait(1564));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(344,250,688.1,500);
// library properties:
lib.properties = {
	width: 688,
	height: 500,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ear_canvas_atlas_.png?1483627742996", id:"ear_canvas_atlas_"},
		{src:"sounds/ear_p10_fluidspiralwav.mp3?1483627743976", id:"ear_p10_fluidspiralwav"},
		{src:"sounds/ear_p11_spiralchannelwav.mp3?1483627743976", id:"ear_p11_spiralchannelwav"},
		{src:"sounds/ear_p12_nervesnearwav.mp3?1483627743976", id:"ear_p12_nervesnearwav"},
		{src:"sounds/ear_p13_nervesshortwav.mp3?1483627743976", id:"ear_p13_nervesshortwav"},
		{src:"sounds/ear_p1_titlewav.mp3?1483627743976", id:"ear_p1_titlewav"},
		{src:"sounds/ear_p2_crosssectionalwav.mp3?1483627743976", id:"ear_p2_crosssectionalwav"},
		{src:"sounds/ear_p3_perceptwav.mp3?1483627743976", id:"ear_p3_perceptwav"},
		{src:"sounds/ear_p5_threeboneswav.mp3?1483627743976", id:"ear_p5_threeboneswav"},
		{src:"sounds/ear_p6_clickzoomwav.mp3?1483627743976", id:"ear_p6_clickzoomwav"},
		{src:"sounds/ear_p7_cochleawav.mp3?1483627743976", id:"ear_p7_cochleawav"},
		{src:"sounds/ear_p8_threecanalswav.mp3?1483627743976", id:"ear_p8_threecanalswav"},
		{src:"sounds/ear_p9_fuidmovingwav.mp3?1483627743976", id:"ear_p9_fuidmovingwav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;