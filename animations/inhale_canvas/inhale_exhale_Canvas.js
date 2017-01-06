(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1.7).p("AGsiPQiEh5iWAZQi9AhjOD7QhoB/hDB7QgKASgUAAQgIAAgIgEQgNgHgEgNQgEgOAHgMQBLiLBviDQDbkHDSgkQC2gfCdCPQAKAKABAOQABAOgKAKQgJALgOAAQgOABgLgJg");
	this.shape.setTransform(48.5,31.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#796C61").s().p("AnSE1QgNgHgEgNQgEgOAHgMQBLiLBviDQDbkHDSgkQC2gfCdCPQAKAKABAOQABAOgKAKQgJALgOAAQgOABgLgJQiEh5iWAZQi9AhjOD7QhoB/hDB7QgKASgUAAQgIAAgIgEg");
	this.shape_1.setTransform(48.5,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,99.1,69.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1.8).p("AH0AoQAdCBAHBvQAWFljWAxQhsAIh1AhQjqBCgwB+Qg8gZg+g4Qh9hygQihQgUgxgXhVQguipgPiwQgxo0EZmrIAQgGQAWgGAZgBQBSgDBZAzQEbCjD9KDg");
	this.shape.setTransform(53.8,92.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB81A2").s().p("AkdNHQh9hxgQihQgUgygXhUQguipgPixQgxo0EZmqIAQgGQAWgHAZgBQBSgDBZAzQEbCkD9KDIAcBpQAdCCAHBvQAWFljWAwQhsAIh1AhQjqBCgwB+Qg8gYg+g5g");
	this.shape_1.setTransform(53.8,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,109.8,186.1), null);


(lib.ribcage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1.6).p("AioiWQAFAQAeAuQAeAuAMALQAoAkAEADQAlAeAbAIQARAFApAPQAdAKAOACQAaADBLABQAJABAOAAQALAAAAADQgBAFABAOQABAQACAHQADAHgCAPQgDANgDAIQgDAFgQgHQgWgJgFgBIgjgFQgggEgrgNQgwgNgggPQgzgagQgIQglgUgPgNQgYgUgPgPQgagZgVgnQgKgTgQgOIgOgKQgHgCgHgDQgNgIAAgLQAAgSAAgHQABgMAFgEQAFgFAcgCQAEAAAVAGQASAFADgFQADgDABATg");
	this.shape.setTransform(59.3,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADoCpQgWgJgFgBIgjgFQgggEgrgNQgwgNgggPIhDgiQglgUgPgNQgYgUgPgPQgagZgVgnQgKgTgQgOIgOgKQgHgCgHgDQgNgIAAgLIAAgZQABgMAFgEQAFgFAcgCQAEAAAVAGQASAFADgFQADgDABATQAFAQAeAuQAeAuAMALIAsAnQAlAeAbAIIA6AUQAdAKAOACQAaADBLABIAXABQALAAAAADIAAATQABAQACAHQADAHgCAPQgDANgDAIQgBACgEAAQgFAAgJgEg");
	this.shape_1.setTransform(59.3,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#373535").ss(1.5).p("AlqiHQAHAUARAVQAPATASANQALAJAiAfQAiAcARAIQARAIAYAQQANAIASANQAJAGBBAWQAjAMA+AVQAXAIAzAOQAqAMAKAEQAOAGAwAOQAwAOAMACQARACBEARQAIgVgDgPIgDgbQgCgSgGgFQgJgGgZAAQggAAgQgEQgqgMgXgHIhXgZQgPgFgOgEQgOgEgjgOQglgPgXgHQgcgJgbgOQgZgNgKgFQgMgFgygdQgpgYgWgNQgOgIgXgaQgVgYgBgFQgDgJgCgGQgCgKAKADQAHACgBgCQgEgFAJgFQAPgIgBgLQgBgMgbADQgLACgrgEQgfgCgBAJQgCAMAEAbQAEAXADAJg");
	this.shape_2.setTransform(61.9,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AEaDDQgMgCgwgOQgwgOgOgGQgKgEgqgMQgzgOgXgIIhhghQhBgWgJgGIgfgVQgYgQgRgIQgRgIgigcQgigfgLgJQgSgNgPgTQgRgVgHgUQgDgJgEgXQgEgbACgMQABgJAfACQArAEALgCQAbgDABAMQABALgPAIQgJAFAEAFQABACgHgCQgKgDACAKIAFAPQABAFAVAYQAXAaAOAIIA/AlQAyAdAMAFIAjASQAbAOAcAJQAXAHAlAPQAjAOAOAEIAdAJIBXAZIBBATQAQAEAgAAQAZAAAJAGQAGAFACASIADAbQADAPgIAVQhEgRgRgCg");
	this.shape_3.setTransform(61.9,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#373535").ss(1.5).p("AHaC2QgSgUgxgLQhDgLgqgKIi3gsQhOgSgHgBQgygNglgNQgbgKg+gTQgygOgLgFQgWgMglgYQgwgdgZgTQgkgYgMgKQgUgPAAgKQABgSAVgTQAZgXAcAOQAZAMACgOQAAgFAOAEQAGABAHADIgug3QggAAgPgGQgwgRgoA6QgZAkAKAjQACAJASAfQAMATAWAXQAhAiAhARQAZAMBZAsQBPAnANADQANADAwAQQAZAJApAOQAbAJAyANQA8APAhAFQAyAJCrAxQAXAGBDAZQALAEADgTQAEgYAAgJQAAgZgEgFg");
	this.shape_4.setTransform(62.8,44.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AHMEEQhDgZgXgGQirgxgygJQghgFg8gPQgygNgbgJIhCgXQgwgQgNgDQgNgDhPgnIhyg4QghgRghgiQgWgXgMgTQgSgfgCgJQgKgjAZgkQAog6AwARQAPAGAgAAIAuA3IgNgEQgOgEAAAFQgCAOgZgMQgcgOgZAXQgVATgBASQAAAKAUAPQAMAKAkAYQAZATAwAdQAlAYAWAMQALAFAyAOQA+ATAbAKQAlANAyANIBVATIC3AsQAqAKBDALQAxALASAUQAEAFAAAZQAAAJgEAYQgCAQgIAAIgEgBg");
	this.shape_5.setTransform(62.8,44.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#373535").ss(1.5).p("AHXCiQgVgDhjgSQhpgUgKgEQgLgFg6gPQg7gPgXgDQhqgTgOgCQhDgOgmgPQhFgdhKghQhkgvgOgQQgfgYgSgPQghgaACgYQAEgaAigEQAdgEAcAMIgcg/QhCgNgRADQgOACgVAgQgUAggEAbQgEAfAQAaQAVAgBFA5QA/AzAwAUQAbALAiAJQAOAGA5ASQAzAQAOAGQAUAJBTAbQBTAaARACQAWADA0AJQA6AKAZAGQASAFBWATQBTATAZAKQAqAQBEATQgOgRgDgHQgBgBgGgdIgNgtQgEgLgcgEg");
	this.shape_6.setTransform(61.3,60);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AG1D0QgZgKhTgTQhWgTgSgFQgZgGg6gKIhKgMQgRgChTgaQhTgbgUgJQgOgGgzgQQg5gSgOgGQgigJgbgLQgwgUg/gzQhFg5gVggQgQgaAEgfQAEgbAUggQAVggAOgCQARgDBCANIAcA/QgcgMgdAEQgiAEgEAaQgCAYAhAaIAxAnQAOAQBkAvQBKAhBFAdQAmAPBDAOIB4AVQAXADA7APQA6APALAFQAKAEBpAUQBjASAVADQAcAEAEALIANAtIAHAeQADAHAOARQhEgTgqgQg");
	this.shape_7.setTransform(60.6,59.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#373535").ss(1.5).p("AH0EiQi7g9gZgEQgXgChFgPQiPgeiug3QhtgiiTg+QgkgPg9gjQhBglgTgTQgSgRgCgaQAAghAAgTQAAgdALgcQALgdAQgGQAWgIAxgZIAOgGQARgHAQACQAPACAEARQAFASADABQAFABgUAJQgXAKgCABIgaAfQgNACgOAHQgaANABAXQABAZApAhQAgAbAxAbQAcAPBEAoQA7AgAVAFQAjAIDpA/QAMADBlASQBlARAXAHQAqALDCAuQANADAhAKIACAOQABARgJAOQgIAPAIAIQAEAEAIAGQACAEgLANQgZgGgtgOg");
	this.shape_8.setTransform(60.2,74.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AH0EiQi7g9gZgDQgXgDhFgPQiPgeiug2QhtgiiTg+QgkgPg9gjQhBgmgTgTQgSgRgCgaIAAgzQAAgeALgcQALgdAQgGQAWgIAxgYIAOgHQARgGAQACQAPACAEAQQAFASADABQAFACgUAIIgZAMIgaAfQgNACgOAGQgaANABAXQABAZApAiQAgAaAxAbIBgA3QA7AhAVAFQAjAIDpA/QAMADBlASQBlARAXAGQAqALDCAuIAuANIACAOQABARgJAPQgIAOAIAIIAMALQACAEgLANQgZgHgtgOg");
	this.shape_9.setTransform(60.2,74.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#373535").ss(1.5).p("AHmC+Qh4grg3gMQgxgLgcgIQgYgGgSgFQgkgIh7gjQh6gigbgGQgzgMhcgfQhmgkgigXQg8gigegXQg2gqgFgwQgGguAvgSQAXgIAWgDQgDgDAHgPQAGgOgIgDQgIgHgEgCQgGgDgRAEQgkAHgdAaQgsAmgFBBQgEA/AqApQAVAVAZAJQACABBGAkQBKAmAUAIQARAHBGAZQBFAYAQAHQASAIA2ANQA9APAGACQALADA4AVQA5AVASAFQAnAMBSAXQBjAcARADQAUADBFAZQBDAYASAJQANAGAgAaQAjAcABABQAGAEACgLQABgMAAgCQALhVgGgGQgGgFhwgog");
	this.shape_10.setTransform(60.9,94.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AJOFbIgkgdQgggagNgGQgSgJhDgYQhFgZgUgDQgRgDhjgcIh5gjQgSgFg5gVIhDgYIhDgRQg2gNgSgIQgQgHhFgYQhGgZgRgHQgUgIhKgmIhIglQgZgJgVgVQgqgpAEg/QAFhBAsgmQAdgaAkgHQARgEAGADIAMAJQAIADgGAOQgHAPADADQgWADgXAIQgvASAGAuQAFAwA2AqQAeAXA8AiQAiAXBmAkQBcAfAzAMQAbAGB6AiQB7AjAkAIIAqALQAcAIAxALQA3AMB4ArQBwAoAGAFQAGAGgLBVIgBAOQgCAIgDAAIgDgBg");
	this.shape_11.setTransform(60.9,94.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#373535").ss(1.5).p("AHkE4QgUgIkYhhQjnhPgygTQhPgdgngPQhFgagbgPQg/gihKgdQgxgUgmgWQg7gjgHgaQgGgZAEgvQAGgwABgMQAGgwAFgIQATgmBAAIQAPACgSAbQgJAOgMANIgHAuQgGAwADAOQAFASAmAgQAmAhAcAKQAmANDTBeQARAICWAyQCTAxAaAHQAmALBmAeQB2AjAZAJQALAEBRAbQBAAWADAEQAGAGgKAWQgIArgHADQgEABgCALQgBAGAAAKQgBAEgigVQgugbgNgGg");
	this.shape_12.setTransform(60.6,110.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AIfFZQgugbgNgGQgUgIkYhhQjnhPgygTIh2gsQhFgagbgPQg/gihKgdQgxgUgmgWQg7gjgHgaQgGgZAEgvIAHg8QAGgwAFgIQATgmBAAIQAPACgSAbQgJAOgMANIgHAuQgGAwADAOQAFASAmAgQAmAhAcAKQAlANDUBeQARAICWAyQCTAxAaAHICMApQB2AjAZAJIBcAfQBAAWADAEQAGAGgKAWQgIArgHADQgFABgBALIgCAQIgBABQgFAAgcgSg");
	this.shape_13.setTransform(60.6,110.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#373535").ss(1.5).p("AG8EbQjOhFhVggQjshihTgeQg5gUhIgVQg/gRgTgDQgXgFgzgUQg+gYgVgUQgcgZgRgjQgVgrABgsQABgqAjg2QAfgwAJAAQAEAAgCAlQgDA/ABAxQABAuAoAiQAVASAmARQALAFAyASQAvARAQAIQAVALARAGQASAGAjAJQAoAKBNAgIBFAaQBLAdAnALQA/ATCkA9QAvAQAJACIAnAMQAqAPAXAMQAhASAjAWQArAbAHAKQAHAJgOAdQgHAPgIANQgWgQgbgTQg3glgbgKg");
	this.shape_14.setTransform(60.4,128.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AIOFLQg3glgbgJQjOhFhVghQjshhhTgeQg5gVhIgUQg/gSgTgDQgXgEgzgUQg+gZgVgTQgcgZgRgkQgVgqABgtQABgpAjg3QAfgwAJAAQAEAAgCAlQgDBAABAwQABAuAoAjQAVARAmASQALAFAyARQAvARAQAIQAVALARAGQASAGAjAJQAoAKBNAhIBFAaQBLAcAnAMQA/ATCkA9QAvAQAJABIAnANQAqAPAXAMQAhASAjAWQArAaAHAKQAHAJgOAeQgHAPgIANIgxgkg");
	this.shape_15.setTransform(60.4,128.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#373535").ss(1.5).p("AIlD8Qh0hAgvgXQhhgxjAhQQh1gxiegoQhIgShAgcQhTgkgrgpQgfgeAAgsQAHgsABgKQACgRgqAQQgpARAAAXQgBAYAJAvQAJAtAGAOQAMAXAMALQAaAZA9AWQAkANBcAjQBFAZAfAKQAbAIBqAeQBjAdApAUQAoATBLAeQAmAPAxATQCuBIAXAWQAMAMAJAFQADgNAGgOQANgbAQgEg");
	this.shape_16.setTransform(59.2,146.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AHpEnQgYgWiuhIIhXgiQhKgegogTQgpgUhkgdIiFgmQgegKhFgZIiBgwQg8gWgbgZQgMgLgLgXQgHgOgIgtQgJgvAAgYQAAgXAqgRQAqgQgCARIgIA2QgBAsAfAeQArApBTAkQBAAcBIASQCfAoB0AxQDABQBhAxQAwAXBzBAQgQAEgMAbQgGAOgDANQgJgFgMgMg");
	this.shape_17.setTransform(59.3,146.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#373535").ss(1.5).p("AGqC4QgbATgegEQgcgbgngRQgpgRhfgiQgTgIgjgSQglgTgOgHQiDhDhAgaQilg+gUgJQgZgKgrgaQg2ghgDgNQgDgMgWgUIgUgSIgHARQgHARgBAIQgBAHAGASQAIAWABAIQAFAkAhAPQAjAPA1AZQBGAiAOAIQAQALBMAkQBMAkAWAIQAaAIA/AXQBCAYALAFQAHADA8AcQA8AaAWADQAYADAZAMQAYALAGAKQAGAKASAEQATAGAVgGQAUgFAfgbQAagXAFgKQAYgiAFgPQAGgOADgJQAEgPAEgVIgMAWQgOAagJATQgLAagYARg");
	this.shape_18.setTransform(63.4,161.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AFMD1QgSgFgGgKQgFgJgYgMQgZgMgZgDQgWgDg8gaIhDgfQgKgFhEgYIhXgfQgWgHhNglQhMgjgQgLQgNgJhGghIhZgpQgggPgFgkQgCgIgHgVQgHgSABgHQABgIAHgSIAHgQIAVARQAVAUADANQAEANA1AgQAsAaAYALQAUAJClA+QBAAZCEBDIAzAbQAiASATAHQBfAjAqARQAnAQAcAbQAeAEAbgTQAYgQALgaQAJgUAOgaIAMgVQgEAUgFAPIgIAXQgGAQgXAhQgGALgaAXQgeAbgUAFQgLACgKAAQgKAAgKgCg");
	this.shape_19.setTransform(62.9,162);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#373535").ss(1.5).p("AlIjwQgSAUgEAYQgLBFAXAxQAhBGBUAsQAiATBBAoQA9AnAMAFQDABcAgAGQAPAEAkAJQAgAHANAAQAWgBAZgLQAfgNADgSQgLAGgVACQgqAFgxgTQgwgSgcgQIgSgLQiOhRgXgOQgTgLg5gkQg6gkgMgJIhVg8QgHgFgOgcQgOgegBgPQgBgZAAgIQABgTAIgMQAIgLADgIIACgGIgfgEQgGABgPAOg");
	this.shape_20.setTransform(57.9,169);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ADkD5IgzgMQghgHjAhbQgLgGg9gmQhBgpgjgSQhUgsghhHQgXgwALhGQAEgYATgTQAOgPAHgBIAfAEIgCAGQgEAIgIAMQgIAMgBASIACAhQAAAPAPAeQANAcAHAFIBVA9IBHAtIBLAvQAXAOCOBQIASAMQAcAPAxATQAwASAqgEQAVgDAMgGQgEATgfANQgZAKgWABIgCABQgNAAgdgIg");
	this.shape_21.setTransform(57.7,169);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#373535").ss(1.5).p("AirhgQAFARASAaQAQAXABAJQACAKAgAaQAoAiADADQAOAPAuAoQAyArAaATQAxAhAzACQgPgQgcgOQgRgKgMgOIgJgMQgOgPgwgrQg2gxgUgOQgfgUgbgfQgjgpgLgpIgQg8IgigUIAFAmQAGApAHAVg");
	this.shape_22.setTransform(46.1,180.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABWCmQgagTgygrQgugogOgPIgrgmQgggZgBgLQgCgIgPgXQgTgbgFgRQgHgUgGgqIgFglIAiATIAQA9QALAoAkAqQAaAfAfAUQAUAOA3AxQAvAqAOAPIAJANQAMAOASAJQAcAPAOAPQgzgCgxggg");
	this.shape_23.setTransform(45.7,180.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#373535").ss(1.5).p("AAYAZQAEgIABgRIAFggIglgLIgRALQgQAOADAMQAGATAKAQQANAUALgGQAMgGAFgMg");
	this.shape_24.setTransform(20.7,151.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAcQgKgPgGgTQgDgMAQgOIARgLIAlALIgFAgQgBAQgEAJQgFAMgMAGIgFABQgIAAgLgQg");
	this.shape_25.setTransform(20.7,151.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#373535").ss(1.5).p("AgUgvIgCAEQgLAWgCAMQgFAWAJAVQAMAaAdgIQAegHgCgag");
	this.shape_26.setTransform(13.6,135.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfAfQgJgVAFgWQACgMALgWIACgEIA6BCQACAageAHQgHACgEAAQgUAAgKgUg");
	this.shape_27.setTransform(13.6,135.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#373535").ss(1.5).p("AgIg7QgWApgCAOQAAAEgCAKQAAAIAHAHQAhAnAIABQAIABAGgeIAHgvg");
	this.shape_28.setTransform(7.8,117.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAOA/QgIgCghgmQgHgIAAgIIACgOQACgOAXgpIAqAwIgGAvQgHAegHAAIgBAAg");
	this.shape_29.setTransform(7.8,117.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#373535").ss(1.5).p("AAWgrQgKgDgMACQgWAFgEAZQgEAYAIAUQAGAPAFABQADAAAkgug");
	this.shape_30.setTransform(7.2,48.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKAuQgFgBgGgPQgJgUAFgYQAEgZAWgFQALgCALADIAFArQgkAugCAAIAAAAg");
	this.shape_31.setTransform(7.2,48.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#373535").ss(1.5).p("AgnAaQAFALAGADQAHAEAhgbIAfgPQgCgJgGgKQgMgUgSgCQgSgDgOAPQgLAMgDAQQgDANAFAMg");
	this.shape_32.setTransform(22.4,19.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgbAoQgHgDgEgLQgGgMADgNQAEgQALgMQANgPATADQASACALAUQAGAKACAJIgfAPQgdAYgJAAIgBgBg");
	this.shape_33.setTransform(22.4,19.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#373535").ss(1.5).p("AAsgDQgBgJgIgKQgOgUgagCQgagBgGAVQgDAMgBASQgEALABANQACAOAIABQANABAXgUg");
	this.shape_34.setTransform(14,33.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AghAtQgJgBgBgOQgCgNAEgLQABgSADgMQAGgVAbABQAaACAOAUQAHAKACAJIgrAdQgVATgMAAIgCAAg");
	this.shape_35.setTransform(13.9,33.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#373535").ss(1.5).p("AAzgKQAJAEABANQgPAZgKACQgFABgFgHQgGgGgFgBQgFAAgJABQgIABgDgBQgGgDgEgBQgHgDgNAFIgQAHQACgHADgJQAGgQAHgEQAFgEARgNQAQgKAPAFQAFACAHAIQAHAHADABQAKABAEACg");
	this.shape_36.setTransform(84.3,22.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAYAcQgGgGgFgBIgNABIgMAAIgKgEQgHgDgNAFIgQAHIAFgQQAGgQAHgEIAWgRQAQgKAPAFQAFACAHAIQAHAHADABQAKABAEACQAJAEABANQgPAZgKACIgBAAQgEAAgFgGg");
	this.shape_37.setTransform(84.5,22.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#373535").ss(1.5).p("ACdCMQgDAZAbAuQAHALALARQAIAPACAQQABAGAEATQAAATgRAKQgVAOgJgBQgNgCgegYQgbgVAIgSQAQgRAEgHIAAgEQgBgSgPgjQgFgMgMgVQgMgVgEgDQgEgEgKgeIgKgdQgbgwgKgPQgGgIgcgVIgbgUIgKgsQgTgfgSgRQgMgLghgXQgcgSgNgIQgIgFgOgRIgLgPIAJgtQACgHADgJQAHgRAGgEQAGgEAQgNQARgKAPAFQAGACAHAIQAGAHADABQAKABAEACQAKAEABAOIAKALQALANABAIQAAAGAIAPQAHAOgBAHIAFAMQAFAOABAGQACAJAYA0IA0BCQAgAgAEAOQABADANA4QABAHARARQAJAJALALQACAEAPARQANATgCANg");
	this.shape_38.setTransform(98.9,52.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("ACnFRQgNgCgfgYQgbgVAIgSQAQgRAEgHIABgEQgBgSgQgjQgEgMgMgVQgMgVgEgDQgEgEgLgeIgKgdQgagwgKgPQgGgIgcgVIgcgUIgJgsQgUgfgRgRQgNgLgggXIgqgaQgHgFgOgRIgLgPIAJgtIAFgQQAGgRAHgEIAWgRQARgKAPAFQAGACAGAIQAHAHADABQAKABAEACQAKAEABAOIAKALQAKANABAIQABAGAHAPQAIAOgBAHIAEAMQAGAOABAGQACAJAYA0IA0BCQAgAgAEAOIAOA7QABAHARARIAUAUIARAVQANATgCANQgEAZAbAuIASAcQAJAPACAQIAEAZQAAATgQAKQgUANgJAAIgBAAg");
	this.shape_39.setTransform(99,52.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#373535").ss(1.5).p("ABBARQABAcgEAOQgGAYgDAWQgCALgHAJQgJANgOgLIgUgNQgLgLgYgKQgUgIgHgNQgIgQALgfQAKgcAGAAQACAAAUAFQASAHADgCQAFgDAHgCQAEgCAAgJQgBgLgSgcQgSgbgJgHQgGgGAMgUQAGgKAHgJIALANQAMANAEAEQAMAIANAQQAUAXABAUQAAAPACAgg");
	this.shape_40.setTransform(119.2,94.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAVB9IgUgNQgLgLgYgKQgUgIgHgNQgIgQALgfQAKgcAGAAIAWAFQASAHADgCIAMgFQAEgCAAgJQgBgLgSgcQgSgbgJgHQgGgGAMgUQAGgKAHgJIALANQAMANAEAEQAMAIANAQQAUAXABAUIACAvQABAcgEAOQgGAYgDAWQgCALgHAJQgFAHgGAAQgGAAgGgFg");
	this.shape_41.setTransform(119.2,94.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#373535").ss(1.5).p("AgZjjIA5B7IARATQASAXAEAVQADAQAJAXQAIAQgBANQAAAMABAaQABAZgFAUQgFAXgSAmQgQAggJANQgGAJgSAGQgQAFgFgEIgNgJQgJgKgDgYIgKhYIAVAEQAUAEAEAAQAJgBABgLQABgIgEgdQgEgpgEgLQgBgCgQgpQgPgjABgFQABgDgLgZQgMgcgCgQQgCgVgLgUQgLgTgLgGQgIgFAOgIQAHgDAJgDg");
	this.shape_42.setTransform(121.6,105.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGDoIgNgJQgJgKgDgYIgKhYIAVAEQAUAEAEAAQAJgBABgLQABgIgEgdQgEgpgEgLIgRgrQgPgjABgFQABgDgLgZQgMgcgCgQQgCgVgLgUQgLgTgLgGQgIgFAOgIIAQgGIAoAFIA5B7IARATQASAXAEAVQADAQAJAXQAIAQgBANQAAAMABAaQABAZgFAUQgFAXgSAmQgQAggJANQgGAJgSAGQgKACgFAAQgEAAgCgBg");
	this.shape_43.setTransform(121.6,105.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#373535").ss(1.5).p("ABjkGQgDASgBAMQAAAAgEAWQgCAMADALQALAigCASQgBAHAAAoQAAACABAMQACAJgCAHQgCAGAAAQQgBANgCAHQgEAIgGATQgGASgBAIQgBAJgOAnQgPAogCALQgDASgQAcQgJARgTAfQgVAjgJALQgOAPgGAGQgLAJgIAAQgJABgFgBQgIgEgLgWQgLgXATgIIAVgFIAPAFQARACAIgMQAIgNAIgTQAHgSABgEQABgNgQgKQgIgFAOgZQAHgNAIgMIAIABQAIgBADgNQACgKAJgdQAIgaABgGQAAgFgbgMQgcgLgFgPQgGgSASgmIARgjIACgCQACgBAFACQACABANAMQAJAJABgIIAOhTQAHgrAIgGQAGgGAbgrg");
	this.shape_44.setTransform(118.9,146.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhREkQgIgDgLgXQgKgWATgJIAUgEIAQAFQARACAHgMQAIgNAJgUQAHgRAAgFQABgNgPgJQgJgFAOgaQAHgNAJgMIAHABQAJgBADgNIALgmIAIghQABgFgbgKQgdgMgFgQQgFgSARgmIASgjIABgBQACgCAGADIAPANQAIAIACgHIAOhUQAGgqAIgHQAHgGAbgqIgDAQQgDATAAALIgFAXQgCAMAEAKQALAjgCASQgBAHAAAnIABAOQABAJgCAHQgBAHgBAPQAAAOgDAGQgEAJgFATQgGASgBAIQgBAIgPAnQgOAogCALQgDATgQAcIgdAvQgVAkgJAKQgNAQgHAFQgLAKgHgBIgJABIgGgBg");
	this.shape_45.setTransform(118.6,147.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ribcage, new cjs.Rectangle(-1.8,-5.3,134.7,206.9), null);


(lib.arrowhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("AhOhaICdBaIidBbg");
	this.shape.setTransform(7.9,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowhead, new cjs.Rectangle(0,0,15.8,18.2), null);


(lib.arrowcolortrail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3399CC","rgba(51,153,204,0)"],[0,1],-18.6,0,0,-18.6,0,37.3).s().p("Ai3lyQCYABBqBsQBtBtAACYQAACahtBsQhqBsiYABg");
	this.shape.setTransform(18.4,37.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowcolortrail, new cjs.Rectangle(0,0,36.9,74.2), null);


(lib.O2arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// arrowhead
	this.instance = new lib.arrowhead();
	this.instance.parent = this;
	this.instance.setTransform(7.9,-23.3,0.999,0.999,156.4,0,0,7.8,9.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:7.9,regY:9.1,scaleX:1,scaleY:1,rotation:157.2,x:7.1,y:-22.5,alpha:0.01},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:158,x:6.3,y:-22.2,alpha:0.02},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:158.8,x:5.5,y:-21.9,alpha:0.03},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:159.5,x:4.6,y:-21.6,alpha:0.04},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:160.2,x:3.8,y:-21.3,alpha:0.051},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:160.9,x:3,y:-21,alpha:0.061},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:161.6,x:2.1,y:-20.7,alpha:0.071},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:162.2,x:1.3,y:-20.3,alpha:0.081},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:162.8,x:0.4,y:-20.1,alpha:0.091},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:163.4,x:-0.4,y:-19.8,alpha:0.101},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:163.9,x:-1.3,y:-19.6,alpha:0.111},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:164.4,x:-2.1,y:-19.3,alpha:0.121},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:165,x:-3,y:-19.1,alpha:0.131},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:165.5,x:-3.8,y:-18.9,alpha:0.141},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:165.9,x:-4.7,y:-18.6,alpha:0.152},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:166.4,x:-5.6,y:-18.4,alpha:0.162},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:166.8,x:-6.4,y:-18.2,alpha:0.172},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:167.3,x:-7.3,y:-18,alpha:0.182},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:167.7,x:-8.2,y:-17.8,alpha:0.192},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:168.1,x:-8.9,y:-17.6,alpha:0.202},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:168.5,x:-9.8,y:-17.4,alpha:0.212},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:168.8,x:-10.7,y:-17.2,alpha:0.222},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:169.2,x:-11.6,y:-17,alpha:0.232},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:169.6,x:-12.4,y:-16.9,alpha:0.242},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:169.9,x:-13.3,y:-16.7,alpha:0.253},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:170.2,x:-14.1,y:-16.5,alpha:0.263},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:170.6,x:-15,y:-16.4,alpha:0.273},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:170.9,x:-15.9,y:-16.2,alpha:0.283},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:171.2,x:-16.8,y:-16.1,alpha:0.293},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:171.5,x:-17.6,y:-16,alpha:0.303},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:171.8,x:-18.6,y:-15.8,alpha:0.313},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:172.1,x:-19.5,y:-15.7,alpha:0.323},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:172.4,x:-20.4,y:-15.6,alpha:0.333},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:172.7,x:-21.2,y:-15.4,alpha:0.343},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:172.9,x:-22.1,y:-15.3,alpha:0.354},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:173.2,x:-23,y:-15.2,alpha:0.364},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:173.4,x:-23.8,y:-15.1,alpha:0.374},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:173.7,x:-24.7,y:-15,alpha:0.384},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:173.9,x:-25.6,y:-14.9,alpha:0.394},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:174.2,x:-26.4,y:-14.8,alpha:0.404},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:174.4,x:-27.4,y:-14.7,alpha:0.414},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:174.7,x:-28.2,y:-14.6,alpha:0.424},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:174.9,x:-29.1,alpha:0.434},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:175.1,x:-30,y:-14.4,alpha:0.444},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:175.3,x:-30.9,alpha:0.455},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:175.5,x:-31.8,y:-14.3,alpha:0.465},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:175.8,x:-32.7,y:-14.2,alpha:0.475},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:176,x:-33.5,y:-14.1,alpha:0.485},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:176.2,x:-34.5,alpha:0.495},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:176.4,x:-35.3,y:-14,alpha:0.505},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:176.6,x:-36.2,alpha:0.515},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:176.8,x:-37.1,y:-13.9,alpha:0.525},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:177,x:-37.9,alpha:0.535},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:177.2,x:-38.8,y:-13.8,alpha:0.545},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:177.3,x:-39.7,alpha:0.556},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:177.5,x:-40.6,y:-13.7,alpha:0.566},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:177.7,x:-41.5,alpha:0.576},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:177.9,x:-42.4,alpha:0.586},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:178.1,x:-43.3,y:-13.6,alpha:0.596},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:178.2,x:-44.1,alpha:0.606},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:178.4,x:-45.1,alpha:0.616},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:178.6,x:-45.9,alpha:0.626},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:178.8,x:-46.8,alpha:0.636},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:178.9,x:-47.7,y:-13.5,alpha:0.646},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:179.1,x:-48.6,alpha:0.657},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:179.3,x:-49.5,alpha:0.667},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:179.4,x:-50.4,alpha:0.677},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:179.6,x:-51.2,alpha:0.687},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:179.7,x:-52.1,alpha:0.697},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:179.9,x:-53,alpha:0.707},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:180.1,x:-53.9,alpha:0.717},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:180.2,x:-54.8,y:-13.4,alpha:0.727},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:180.4,x:-55.7,y:-13.5,alpha:0.737},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:180.5,x:-56.6,alpha:0.747},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:180.7,x:-57.5,alpha:0.758},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:180.8,x:-58.3,alpha:0.768},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:181,x:-59.2,alpha:0.778},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:181.1,x:-60.1,alpha:0.788},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:181.3,x:-61,y:-13.6,alpha:0.798},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:181.4,x:-61.9,alpha:0.808},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:181.6,x:-62.8,alpha:0.818},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:181.7,x:-63.7,alpha:0.828},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:181.9,x:-64.5,alpha:0.838},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:182.1,x:-65.4,y:-13.7,alpha:0.848},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:182.2,x:-66.4,alpha:0.859},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:182.4,x:-67.2,alpha:0.869},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:182.5,x:-68.1,y:-13.8,alpha:0.879},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:182.7,x:-69,alpha:0.889},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:182.8,x:-69.8,y:-13.9,alpha:0.899},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:183,x:-70.7,alpha:0.909},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:183.2,x:-71.6,y:-14,alpha:0.919},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:183.3,x:-72.5,alpha:0.929},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:183.5,x:-73.4,y:-14.1,alpha:0.939},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:183.7,x:-74.3,y:-14.2,alpha:0.949},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:183.9,x:-75.2,alpha:0.96},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:184.1,x:-76,y:-14.3,alpha:0.97},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:184.4,x:-76.9,alpha:0.98},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:184.7,x:-77.8,y:-14.4,alpha:0.99},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:185.3,x:-78.7,y:-14.5,alpha:1},0).wait(1));

	// arrow line mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmfBJIgigDIAGhEIAiADQCIANCugEQFZgIDAhTIAMgFIAABKQjIBSlbAIIhRABQiDAAhqgKg");
	mask.setTransform(-37.3,-18.7);

	// Layer 3
	this.instance_1 = new lib.arrowcolortrail();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.3,-24.1,0.999,0.999,-23.8,0,0,-5.4,36.8);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:18.4,regY:37.1,scaleX:1,scaleY:1,rotation:-19.4,x:31.4,y:-31.1,alpha:0.01},0).wait(1).to({rotation:-17.6,x:31,y:-30.2,alpha:0.02},0).wait(1).to({rotation:-16.3,x:30.6,y:-29.5,alpha:0.03},0).wait(1).to({rotation:-15.3,x:29.8,y:-28.7,alpha:0.04},0).wait(1).to({rotation:-14.5,x:29.1,y:-28.1,alpha:0.051},0).wait(1).to({rotation:-13.7,x:28.2,y:-27.4,alpha:0.061},0).wait(1).to({rotation:-13.1,x:27.4,y:-26.8,alpha:0.071},0).wait(1).to({rotation:-12.5,x:26.6,y:-26.4,alpha:0.081},0).wait(1).to({rotation:-12,x:25.8,y:-25.8,alpha:0.091},0).wait(1).to({rotation:-11.5,x:25,y:-25.4,alpha:0.101},0).wait(1).to({rotation:-11,x:24.2,y:-24.9,alpha:0.111},0).wait(1).to({rotation:-10.6,x:23.3,y:-24.5,alpha:0.121},0).wait(1).to({rotation:-10.2,x:22.4,y:-24.1,alpha:0.131},0).wait(1).to({rotation:-9.8,x:21.6,y:-23.7,alpha:0.141},0).wait(1).to({rotation:-9.4,x:20.8,y:-23.3,alpha:0.152},0).wait(1).to({rotation:-9.1,x:19.8,y:-22.9,alpha:0.162},0).wait(1).to({rotation:-8.8,x:19,y:-22.6,alpha:0.172},0).wait(1).to({rotation:-8.5,x:18.1,y:-22.2,alpha:0.182},0).wait(1).to({rotation:-8.2,x:17.2,y:-21.9,alpha:0.192},0).wait(1).to({rotation:-7.9,x:16.4,y:-21.6,alpha:0.202},0).wait(1).to({rotation:-7.6,x:15.5,y:-21.3,alpha:0.212},0).wait(1).to({rotation:-7.3,x:14.6,y:-21,alpha:0.222},0).wait(1).to({rotation:-7.1,x:13.7,y:-20.7,alpha:0.232},0).wait(1).to({rotation:-6.8,x:12.8,y:-20.4,alpha:0.242},0).wait(1).to({rotation:-6.6,x:11.9,y:-20.2,alpha:0.253},0).wait(1).to({rotation:-6.4,x:11,y:-19.9,alpha:0.263},0).wait(1).to({rotation:-6.2,x:10.2,y:-19.6,alpha:0.273},0).wait(1).to({rotation:-5.9,x:9.2,y:-19.4,alpha:0.283},0).wait(1).to({rotation:-5.7,x:8.3,y:-19.2,alpha:0.293},0).wait(1).to({rotation:-5.5,x:7.4,y:-18.9,alpha:0.303},0).wait(1).to({rotation:-5.3,x:6.5,y:-18.7,alpha:0.313},0).wait(1).to({rotation:-5.1,x:5.7,y:-18.5,alpha:0.323},0).wait(1).to({rotation:-5,x:4.7,y:-18.3,alpha:0.333},0).wait(1).to({rotation:-4.8,x:3.9,y:-18.1,alpha:0.343},0).wait(1).to({rotation:-4.6,x:3,y:-17.9,alpha:0.354},0).wait(1).to({rotation:-4.4,x:2,y:-17.7,alpha:0.364},0).wait(1).to({rotation:-4.3,x:1.1,y:-17.5,alpha:0.374},0).wait(1).to({rotation:-4.1,x:0.2,y:-17.3,alpha:0.384},0).wait(1).to({rotation:-3.9,x:-0.7,y:-17.2,alpha:0.394},0).wait(1).to({rotation:-3.8,x:-1.6,y:-17,alpha:0.404},0).wait(1).to({rotation:-3.6,x:-2.5,y:-16.8,alpha:0.414},0).wait(1).to({rotation:-3.5,x:-3.4,y:-16.7,alpha:0.424},0).wait(1).to({rotation:-3.3,x:-4.4,y:-16.5,alpha:0.434},0).wait(1).to({rotation:-3.2,x:-5.3,y:-16.4,alpha:0.444},0).wait(1).to({rotation:-3,x:-6.2,y:-16.2,alpha:0.455},0).wait(1).to({rotation:-2.9,x:-7.1,y:-16.1,alpha:0.465},0).wait(1).to({rotation:-2.7,x:-8,y:-16,alpha:0.475},0).wait(1).to({rotation:-2.6,x:-8.9,y:-15.8,alpha:0.485},0).wait(1).to({rotation:-2.5,x:-9.8,y:-15.7,alpha:0.495},0).wait(1).to({rotation:-2.3,x:-10.7,y:-15.6,alpha:0.505},0).wait(1).to({rotation:-2.2,x:-11.7,y:-15.5,alpha:0.515},0).wait(1).to({rotation:-2.1,x:-12.6,y:-15.3,alpha:0.525},0).wait(1).to({rotation:-1.9,x:-13.5,y:-15.2,alpha:0.535},0).wait(1).to({rotation:-1.8,x:-14.4,y:-15.1,alpha:0.545},0).wait(1).to({rotation:-1.7,x:-15.3,y:-15,alpha:0.556},0).wait(1).to({rotation:-1.6,x:-16.3,y:-14.9,alpha:0.566},0).wait(1).to({rotation:-1.5,x:-17.1,y:-14.8,alpha:0.576},0).wait(1).to({rotation:-1.3,x:-18.1,y:-14.7,alpha:0.586},0).wait(1).to({rotation:-1.2,x:-19,y:-14.6,alpha:0.596},0).wait(1).to({rotation:-1.1,x:-19.9,y:-14.5,alpha:0.606},0).wait(1).to({rotation:-1,x:-20.8,y:-14.4,alpha:0.616},0).wait(1).to({rotation:-0.9,x:-21.8,alpha:0.626},0).wait(1).to({rotation:-0.8,x:-22.7,y:-14.3,alpha:0.636},0).wait(1).to({rotation:-0.6,x:-23.6,y:-14.2,alpha:0.646},0).wait(1).to({rotation:-0.5,x:-24.5,y:-14.1,alpha:0.657},0).wait(1).to({rotation:-0.4,x:-25.4,alpha:0.667},0).wait(1).to({rotation:-0.3,x:-26.3,y:-14,alpha:0.677},0).wait(1).to({rotation:-0.2,x:-27.2,y:-13.9,alpha:0.687},0).wait(1).to({rotation:-0.1,x:-28.2,alpha:0.697},0).wait(1).to({rotation:0,x:-29.1,y:-13.8,alpha:0.707},0).wait(1).to({rotation:0.1,x:-30,alpha:0.717},0).wait(1).to({rotation:0.2,x:-30.9,y:-13.7,alpha:0.727},0).wait(1).to({rotation:0.3,x:-31.8,alpha:0.737},0).wait(1).to({rotation:0.4,x:-32.8,y:-13.6,alpha:0.747},0).wait(1).to({rotation:0.5,x:-33.7,alpha:0.758},0).wait(1).to({rotation:0.6,x:-34.6,y:-13.5,alpha:0.768},0).wait(1).to({rotation:0.8,x:-35.5,alpha:0.778},0).wait(1).to({rotation:0.9,x:-36.5,y:-13.4,alpha:0.788},0).wait(1).to({rotation:1,x:-37.4,alpha:0.798},0).wait(1).to({rotation:1.1,x:-38.3,alpha:0.808},0).wait(1).to({rotation:1.2,x:-39.2,y:-13.3,alpha:0.818},0).wait(1).to({rotation:1.3,x:-40.2,alpha:0.828},0).wait(1).to({rotation:1.4,x:-41.1,alpha:0.838},0).wait(1).to({rotation:1.5,x:-42,y:-13.2,alpha:0.848},0).wait(1).to({rotation:1.6,x:-42.9,y:-13.3,alpha:0.859},0).wait(1).to({rotation:1.7,x:-43.8,y:-13.2,alpha:0.869},0).wait(1).to({rotation:1.8,x:-44.8,alpha:0.879},0).wait(1).to({rotation:1.9,x:-45.7,alpha:0.889},0).wait(1).to({rotation:2,x:-46.5,alpha:0.899},0).wait(1).to({rotation:2.2,x:-47.5,alpha:0.909},0).wait(1).to({rotation:2.3,x:-48.4,alpha:0.919},0).wait(1).to({rotation:2.4,x:-49.3,alpha:0.929},0).wait(1).to({rotation:2.5,x:-50.3,alpha:0.939},0).wait(1).to({rotation:2.7,x:-51.2,y:-13.1,alpha:0.949},0).wait(1).to({rotation:2.8,x:-52.1,alpha:0.96},0).wait(1).to({rotation:3,x:-53,alpha:0.97},0).wait(1).to({rotation:3.2,x:-54,alpha:0.98},0).wait(1).to({rotation:3.4,x:-54.9,y:-13,alpha:0.99},0).wait(1).to({rotation:3.8,x:-55.8,y:-12.9,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-34.3,21.7,24);


(lib.CO2arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// arrowhead
	this.instance = new lib.arrowhead();
	this.instance.parent = this;
	this.instance.setTransform(7.9,-23.3,0.999,0.999,156.4,0,0,7.8,9.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:7.9,regY:9.1,scaleX:1,scaleY:1,rotation:157.2,x:7.1,y:-22.5,alpha:0.01},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:158,x:6.3,y:-22.2,alpha:0.02},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:158.8,x:5.5,y:-21.9,alpha:0.03},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:159.5,x:4.6,y:-21.6,alpha:0.04},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:160.2,x:3.8,y:-21.3,alpha:0.051},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:160.9,x:3,y:-21,alpha:0.061},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:161.6,x:2.1,y:-20.7,alpha:0.071},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:162.2,x:1.3,y:-20.3,alpha:0.081},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:162.8,x:0.4,y:-20.1,alpha:0.091},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:163.4,x:-0.4,y:-19.8,alpha:0.101},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:163.9,x:-1.3,y:-19.6,alpha:0.111},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:164.4,x:-2.1,y:-19.3,alpha:0.121},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:165,x:-3,y:-19.1,alpha:0.131},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:165.5,x:-3.8,y:-18.9,alpha:0.141},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:165.9,x:-4.7,y:-18.6,alpha:0.152},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:166.4,x:-5.6,y:-18.4,alpha:0.162},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:166.8,x:-6.4,y:-18.2,alpha:0.172},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:167.3,x:-7.3,y:-18,alpha:0.182},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:167.7,x:-8.2,y:-17.8,alpha:0.192},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:168.1,x:-8.9,y:-17.6,alpha:0.202},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:168.5,x:-9.8,y:-17.4,alpha:0.212},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:168.8,x:-10.7,y:-17.2,alpha:0.222},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:169.2,x:-11.6,y:-17,alpha:0.232},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:169.6,x:-12.4,y:-16.9,alpha:0.242},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:169.9,x:-13.3,y:-16.7,alpha:0.253},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:170.2,x:-14.1,y:-16.5,alpha:0.263},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:170.6,x:-15,y:-16.4,alpha:0.273},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:170.9,x:-15.9,y:-16.2,alpha:0.283},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:171.2,x:-16.8,y:-16.1,alpha:0.293},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:171.5,x:-17.6,y:-16,alpha:0.303},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:171.8,x:-18.6,y:-15.8,alpha:0.313},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:172.1,x:-19.5,y:-15.7,alpha:0.323},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:172.4,x:-20.4,y:-15.6,alpha:0.333},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:172.7,x:-21.2,y:-15.4,alpha:0.343},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:172.9,x:-22.1,y:-15.3,alpha:0.354},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:173.2,x:-23,y:-15.2,alpha:0.364},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:173.4,x:-23.8,y:-15.1,alpha:0.374},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:173.7,x:-24.7,y:-15,alpha:0.384},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:173.9,x:-25.6,y:-14.9,alpha:0.394},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:174.2,x:-26.4,y:-14.8,alpha:0.404},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:174.4,x:-27.4,y:-14.7,alpha:0.414},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:174.7,x:-28.2,y:-14.6,alpha:0.424},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:174.9,x:-29.1,alpha:0.434},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:175.1,x:-30,y:-14.4,alpha:0.444},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:175.3,x:-30.9,alpha:0.455},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:175.5,x:-31.8,y:-14.3,alpha:0.465},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:175.8,x:-32.7,y:-14.2,alpha:0.475},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:176,x:-33.5,y:-14.1,alpha:0.485},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:176.2,x:-34.5,alpha:0.495},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:176.4,x:-35.3,y:-14,alpha:0.505},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:176.6,x:-36.2,alpha:0.515},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:176.8,x:-37.1,y:-13.9,alpha:0.525},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:177,x:-37.9,alpha:0.535},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:177.2,x:-38.8,y:-13.8,alpha:0.545},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:177.3,x:-39.7,alpha:0.556},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:177.5,x:-40.6,y:-13.7,alpha:0.566},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:177.7,x:-41.5,alpha:0.576},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:177.9,x:-42.4,alpha:0.586},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:178.1,x:-43.3,y:-13.6,alpha:0.596},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:178.2,x:-44.1,alpha:0.606},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:178.4,x:-45.1,alpha:0.616},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:178.6,x:-45.9,alpha:0.626},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:178.8,x:-46.8,alpha:0.636},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:178.9,x:-47.7,y:-13.5,alpha:0.646},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:179.1,x:-48.6,alpha:0.657},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:179.3,x:-49.5,alpha:0.667},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:179.4,x:-50.4,alpha:0.677},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:179.6,x:-51.2,alpha:0.687},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:179.7,x:-52.1,alpha:0.697},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:179.9,x:-53,alpha:0.707},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:180.1,x:-53.9,alpha:0.717},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:180.2,x:-54.8,y:-13.4,alpha:0.727},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:180.4,x:-55.7,y:-13.5,alpha:0.737},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:180.5,x:-56.6,alpha:0.747},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:180.7,x:-57.5,alpha:0.758},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:180.8,x:-58.3,alpha:0.768},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:181,x:-59.2,alpha:0.778},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:181.1,x:-60.1,alpha:0.788},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:181.3,x:-61,y:-13.6,alpha:0.798},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:181.4,x:-61.9,alpha:0.808},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:181.6,x:-62.8,alpha:0.818},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:181.7,x:-63.7,alpha:0.828},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:181.9,x:-64.5,alpha:0.838},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:182.1,x:-65.4,y:-13.7,alpha:0.848},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:182.2,x:-66.4,alpha:0.859},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:182.4,x:-67.2,alpha:0.869},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:182.5,x:-68.1,y:-13.8,alpha:0.879},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:182.7,x:-69,alpha:0.889},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:182.8,x:-69.8,y:-13.9,alpha:0.899},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:183,x:-70.7,alpha:0.909},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:183.2,x:-71.6,y:-14,alpha:0.919},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:183.3,x:-72.5,alpha:0.929},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:183.5,x:-73.4,y:-14.1,alpha:0.939},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:183.7,x:-74.3,y:-14.2,alpha:0.949},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:183.9,x:-75.2,alpha:0.96},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:184.1,x:-76,y:-14.3,alpha:0.97},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:184.4,x:-76.9,alpha:0.98},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:184.7,x:-77.8,y:-14.4,alpha:0.99},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:185.3,x:-78.7,y:-14.5,alpha:1},0).wait(1));

	// arrow line mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmfBJIgigDIAGhEIAiADQCIANCugEQFZgIDAhTIAMgFIAABKQjIBSlbAIIhRABQiDAAhqgKg");
	mask.setTransform(-37.3,-18.7);

	// Layer 3
	this.instance_1 = new lib.arrowcolortrail();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.3,-24.1,0.999,0.999,-23.8,0,0,-5.4,36.8);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:18.4,regY:37.1,scaleX:1,scaleY:1,rotation:-19.4,x:31.4,y:-31.1,alpha:0.01},0).wait(1).to({rotation:-17.6,x:31,y:-30.2,alpha:0.02},0).wait(1).to({rotation:-16.3,x:30.6,y:-29.5,alpha:0.03},0).wait(1).to({rotation:-15.3,x:29.8,y:-28.7,alpha:0.04},0).wait(1).to({rotation:-14.5,x:29.1,y:-28.1,alpha:0.051},0).wait(1).to({rotation:-13.7,x:28.2,y:-27.4,alpha:0.061},0).wait(1).to({rotation:-13.1,x:27.4,y:-26.8,alpha:0.071},0).wait(1).to({rotation:-12.5,x:26.6,y:-26.4,alpha:0.081},0).wait(1).to({rotation:-12,x:25.8,y:-25.8,alpha:0.091},0).wait(1).to({rotation:-11.5,x:25,y:-25.4,alpha:0.101},0).wait(1).to({rotation:-11,x:24.2,y:-24.9,alpha:0.111},0).wait(1).to({rotation:-10.6,x:23.3,y:-24.5,alpha:0.121},0).wait(1).to({rotation:-10.2,x:22.4,y:-24.1,alpha:0.131},0).wait(1).to({rotation:-9.8,x:21.6,y:-23.7,alpha:0.141},0).wait(1).to({rotation:-9.4,x:20.8,y:-23.3,alpha:0.152},0).wait(1).to({rotation:-9.1,x:19.8,y:-22.9,alpha:0.162},0).wait(1).to({rotation:-8.8,x:19,y:-22.6,alpha:0.172},0).wait(1).to({rotation:-8.5,x:18.1,y:-22.2,alpha:0.182},0).wait(1).to({rotation:-8.2,x:17.2,y:-21.9,alpha:0.192},0).wait(1).to({rotation:-7.9,x:16.4,y:-21.6,alpha:0.202},0).wait(1).to({rotation:-7.6,x:15.5,y:-21.3,alpha:0.212},0).wait(1).to({rotation:-7.3,x:14.6,y:-21,alpha:0.222},0).wait(1).to({rotation:-7.1,x:13.7,y:-20.7,alpha:0.232},0).wait(1).to({rotation:-6.8,x:12.8,y:-20.4,alpha:0.242},0).wait(1).to({rotation:-6.6,x:11.9,y:-20.2,alpha:0.253},0).wait(1).to({rotation:-6.4,x:11,y:-19.9,alpha:0.263},0).wait(1).to({rotation:-6.2,x:10.2,y:-19.6,alpha:0.273},0).wait(1).to({rotation:-5.9,x:9.2,y:-19.4,alpha:0.283},0).wait(1).to({rotation:-5.7,x:8.3,y:-19.2,alpha:0.293},0).wait(1).to({rotation:-5.5,x:7.4,y:-18.9,alpha:0.303},0).wait(1).to({rotation:-5.3,x:6.5,y:-18.7,alpha:0.313},0).wait(1).to({rotation:-5.1,x:5.7,y:-18.5,alpha:0.323},0).wait(1).to({rotation:-5,x:4.7,y:-18.3,alpha:0.333},0).wait(1).to({rotation:-4.8,x:3.9,y:-18.1,alpha:0.343},0).wait(1).to({rotation:-4.6,x:3,y:-17.9,alpha:0.354},0).wait(1).to({rotation:-4.4,x:2,y:-17.7,alpha:0.364},0).wait(1).to({rotation:-4.3,x:1.1,y:-17.5,alpha:0.374},0).wait(1).to({rotation:-4.1,x:0.2,y:-17.3,alpha:0.384},0).wait(1).to({rotation:-3.9,x:-0.7,y:-17.2,alpha:0.394},0).wait(1).to({rotation:-3.8,x:-1.6,y:-17,alpha:0.404},0).wait(1).to({rotation:-3.6,x:-2.5,y:-16.8,alpha:0.414},0).wait(1).to({rotation:-3.5,x:-3.4,y:-16.7,alpha:0.424},0).wait(1).to({rotation:-3.3,x:-4.4,y:-16.5,alpha:0.434},0).wait(1).to({rotation:-3.2,x:-5.3,y:-16.4,alpha:0.444},0).wait(1).to({rotation:-3,x:-6.2,y:-16.2,alpha:0.455},0).wait(1).to({rotation:-2.9,x:-7.1,y:-16.1,alpha:0.465},0).wait(1).to({rotation:-2.7,x:-8,y:-16,alpha:0.475},0).wait(1).to({rotation:-2.6,x:-8.9,y:-15.8,alpha:0.485},0).wait(1).to({rotation:-2.5,x:-9.8,y:-15.7,alpha:0.495},0).wait(1).to({rotation:-2.3,x:-10.7,y:-15.6,alpha:0.505},0).wait(1).to({rotation:-2.2,x:-11.7,y:-15.5,alpha:0.515},0).wait(1).to({rotation:-2.1,x:-12.6,y:-15.3,alpha:0.525},0).wait(1).to({rotation:-1.9,x:-13.5,y:-15.2,alpha:0.535},0).wait(1).to({rotation:-1.8,x:-14.4,y:-15.1,alpha:0.545},0).wait(1).to({rotation:-1.7,x:-15.3,y:-15,alpha:0.556},0).wait(1).to({rotation:-1.6,x:-16.3,y:-14.9,alpha:0.566},0).wait(1).to({rotation:-1.5,x:-17.1,y:-14.8,alpha:0.576},0).wait(1).to({rotation:-1.3,x:-18.1,y:-14.7,alpha:0.586},0).wait(1).to({rotation:-1.2,x:-19,y:-14.6,alpha:0.596},0).wait(1).to({rotation:-1.1,x:-19.9,y:-14.5,alpha:0.606},0).wait(1).to({rotation:-1,x:-20.8,y:-14.4,alpha:0.616},0).wait(1).to({rotation:-0.9,x:-21.8,alpha:0.626},0).wait(1).to({rotation:-0.8,x:-22.7,y:-14.3,alpha:0.636},0).wait(1).to({rotation:-0.6,x:-23.6,y:-14.2,alpha:0.646},0).wait(1).to({rotation:-0.5,x:-24.5,y:-14.1,alpha:0.657},0).wait(1).to({rotation:-0.4,x:-25.4,alpha:0.667},0).wait(1).to({rotation:-0.3,x:-26.3,y:-14,alpha:0.677},0).wait(1).to({rotation:-0.2,x:-27.2,y:-13.9,alpha:0.687},0).wait(1).to({rotation:-0.1,x:-28.2,alpha:0.697},0).wait(1).to({rotation:0,x:-29.1,y:-13.8,alpha:0.707},0).wait(1).to({rotation:0.1,x:-30,alpha:0.717},0).wait(1).to({rotation:0.2,x:-30.9,y:-13.7,alpha:0.727},0).wait(1).to({rotation:0.3,x:-31.8,alpha:0.737},0).wait(1).to({rotation:0.4,x:-32.8,y:-13.6,alpha:0.747},0).wait(1).to({rotation:0.5,x:-33.7,alpha:0.758},0).wait(1).to({rotation:0.6,x:-34.6,y:-13.5,alpha:0.768},0).wait(1).to({rotation:0.8,x:-35.5,alpha:0.778},0).wait(1).to({rotation:0.9,x:-36.5,y:-13.4,alpha:0.788},0).wait(1).to({rotation:1,x:-37.4,alpha:0.798},0).wait(1).to({rotation:1.1,x:-38.3,alpha:0.808},0).wait(1).to({rotation:1.2,x:-39.2,y:-13.3,alpha:0.818},0).wait(1).to({rotation:1.3,x:-40.2,alpha:0.828},0).wait(1).to({rotation:1.4,x:-41.1,alpha:0.838},0).wait(1).to({rotation:1.5,x:-42,y:-13.2,alpha:0.848},0).wait(1).to({rotation:1.6,x:-42.9,y:-13.3,alpha:0.859},0).wait(1).to({rotation:1.7,x:-43.8,y:-13.2,alpha:0.869},0).wait(1).to({rotation:1.8,x:-44.8,alpha:0.879},0).wait(1).to({rotation:1.9,x:-45.7,alpha:0.889},0).wait(1).to({rotation:2,x:-46.5,alpha:0.899},0).wait(1).to({rotation:2.2,x:-47.5,alpha:0.909},0).wait(1).to({rotation:2.3,x:-48.4,alpha:0.919},0).wait(1).to({rotation:2.4,x:-49.3,alpha:0.929},0).wait(1).to({rotation:2.5,x:-50.3,alpha:0.939},0).wait(1).to({rotation:2.7,x:-51.2,y:-13.1,alpha:0.949},0).wait(1).to({rotation:2.8,x:-52.1,alpha:0.96},0).wait(1).to({rotation:3,x:-53,alpha:0.97},0).wait(1).to({rotation:3.2,x:-54,alpha:0.98},0).wait(1).to({rotation:3.4,x:-54.9,y:-13,alpha:0.99},0).wait(1).to({rotation:3.8,x:-55.8,y:-12.9,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-34.3,21.7,24);


// stage content:
(lib.inhale_exhale_Canvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{beginning:82});

	// timeline functions:
	this.frame_0 = function() {
		playSound("inhale_p01_titlewav");
	}
	this.frame_82 = function() {
		playSound("inhale_p02_soHowExactlywav");
	}
	this.frame_176 = function() {
		playSound("inhale_p03_aDifferencewav");
	}
	this.frame_432 = function() {
		playSound("inhale_p04_yourRibCagewav");
	}
	this.frame_656 = function() {
		playSound("inhale_p05_yourDiaphragmwav");
	}
	this.frame_820 = function() {
		playSound("inhale_p06_toPushCarbonwav");
	}
	this.frame_994 = function() {
		playSound("inhale_p07_theResultwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(82).call(this.frame_82).wait(94).call(this.frame_176).wait(256).call(this.frame_432).wait(224).call(this.frame_656).wait(164).call(this.frame_820).wait(174).call(this.frame_994).wait(261));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAkBfIAAhnIgCgVQgBgIgEgGQgEgFgGgDQgGgDgKgBQgTAAgKANQgFAHgCAKQgCAJAAAPIAABgIgzAAIAAi4IAwAAIAAAZIABAAQAKgQAQgHQAOgIAQAAQAVABANAFQANAGAIAJQAHALADANQADAPAAARIAABxg");
	this.shape.setTransform(481,203.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnBbQgRgHgNgNQgNgMgHgSQgHgSAAgXQAAgVAHgSQAHgSANgNQANgNARgHQASgHAVAAQAPAAAYAHQATAHAMANQAMANAIASQAGAZABAOQgDAdgEAMQgIASgMAMQgMANgTAHQgRAHgWAAQgVAAgSgHgAgVg1QgJAFgEAIQgGAJgCAKQgCALAAAKQAAAMACAKQACALAGAIQAEAJAJAFQAJAFAMAAQANAAAIgFQAKgFAFgJQAFgIACgLQACgKAAgMQAAgKgCgLQgCgKgFgJQgFgIgKgFQgIgFgNAAQgMAAgJAFg");
	this.shape_1.setTransform(459.4,203.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYCAIAAi4IAxAAIAAC4gAgYhWIAAgpIAxAAIAAApg");
	this.shape_2.setTransform(443.8,200.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAIB4QgKgCgIgEQgIgFgFgIQgFgJAAgOIAAhtIgfAAIAAgiIAfAAIAAg4IAyAAIAAA4IAmAAIAAAiIgmAAIAABbQAAANAFAFQAEAEANAAIAIgBIAIgBIAAAoIgPACIgPAAg");
	this.shape_3.setTransform(432.7,201.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_4.setTransform(416.1,203.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZCAIAAj/IAzAAIAAD/g");
	this.shape_5.setTransform(401.3,200.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_6.setTransform(386.2,203.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAkCAIAAhoIgCgVQgBgHgEgGQgEgFgGgDQgGgDgKgBQgTAAgKANQgFAHgCAJQgCAJAAAPIAABhIgzAAIAAj/IAzAAIAABgIABAAQAKgQAPgHQAOgIAOAAQAVABANAFQANAGAIAJQAHALADANQADAPAAAQIAAByg");
	this.shape_7.setTransform(365.3,200.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAmBdIgmg7IgmA7Ig6AAIBDhhIg9hYIA6AAIAgAwIAggwIA5AAIg9BXIBFBig");
	this.shape_8.setTransform(345,203.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhhCAIAAj/IC/AAIAAAvIiGAAIAAA3IB7AAIAAArIh7AAIAAA/ICKAAIAAAvg");
	this.shape_9.setTransform(324.3,200.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvB7QgQgIgKgOQgKgOgGgSQgFgSAAgTQAAgTAFgRQAGgRAKgNQAKgOAQgIQAHgEAJgCQAJgCALAAQAPAAAPAHQAPAHAJAOIABAAIAAheIAzAAIAAEAIgxAAIAAgXIgBAAQgJAPgOAGQgPAHgRAAQgVAAgQgIgAgTgUQgJAFgFAIQgFAHgCALQgDAKAAAMQAAALADALQACAKAGAJQAGAIAIAGQAJAFAKAAQANAAAIgFQAJgFAFgJQAFgIACgLQACgLAAgLQAAgMgCgKQgCgLgFgHQgFgIgJgFQgIgFgNAAQgLAAgJAFg");
	this.shape_10.setTransform(290.7,200.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAkBfIAAhnIgCgVQgBgIgEgGQgEgFgGgDQgGgDgKgBQgTAAgKANQgFAHgCAKQgCAJAAAPIAABgIgzAAIAAi4IAwAAIAAAZIABAAQAKgQAQgHQAOgIAQAAQAVABANAFQANAGAIAJQAHALADANQADAPAAARIAABxg");
	this.shape_11.setTransform(269.5,203.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_12.setTransform(248.4,203.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAkBfIAAhnIgCgVQgBgIgEgGQgEgFgGgDQgGgDgKgBQgTAAgKANQgFAHgCAKQgCAJAAAPIAABgIgzAAIAAi4IAwAAIAAAZIABAAQAKgQAQgHQAOgIAQAAQAVABANAFQANAGAIAJQAHALADANQADAPAAARIAABxg");
	this.shape_13.setTransform(217.5,203.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgnBbQgRgHgNgNQgMgMgIgSQgGgSgBgXQABgVAGgSQAIgSAMgNQANgNARgHQASgHAVAAQAPAAAZAHQASAHAMANQANANAGASQAIAZAAAOQgDAdgFAMQgGASgNAMQgMANgSAHQgTAHgVAAQgVAAgSgHgAgVg1QgIAFgGAIQgFAJgCAKQgCALAAAKQAAAMACAKQACALAFAIQAGAJAIAFQAJAFAMAAQANAAAJgFQAIgFAFgJQAGgIACgLQACgKAAgMQAAgKgCgLQgCgKgGgJQgFgIgIgFQgJgFgNAAQgMAAgJAFg");
	this.shape_14.setTransform(195.9,203.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZCAIAAi4IAzAAIAAC4gAgZhWIAAgpIAzAAIAAApg");
	this.shape_15.setTransform(180.3,200.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAIB4QgKgCgIgEQgIgFgFgIQgFgJAAgOIAAhtIgfAAIAAgiIAfAAIAAg4IAyAAIAAA4IAmAAIAAAiIgmAAIAABbQAAANAFAFQAEAEANAAIAIgBIAIgBIAAAoIgPACIgPAAg");
	this.shape_16.setTransform(169.2,201.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_17.setTransform(152.6,203.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgZCAIAAj/IAzAAIAAD/g");
	this.shape_18.setTransform(137.8,200.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_19.setTransform(122.7,203.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkCAIAAhoIgCgVQgBgHgEgGQgEgFgGgDQgGgDgKgBQgTAAgKANQgFAHgCAJQgCAJAAAPIAABhIgzAAIAAj/IAzAAIAABgIABAAQAKgQAPgHQAOgIAOAAQAVABANAFQANAGAIAJQAHALADANQADAPAAAQIAAByg");
	this.shape_20.setTransform(101.8,200.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAkBfIAAhnIgCgVQgBgIgEgGQgEgFgGgDQgGgDgKgBQgTAAgKANQgFAHgCAKQgCAJAAAPIAABgIgzAAIAAi4IAwAAIAAAZIABAAQAKgQAQgHQAOgIAQAAQAVABANAFQANAGAIAJQAHALADANQADAPAAARIAABxg");
	this.shape_21.setTransform(80.5,203.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbCAIAAj/IA3AAIAAD/g");
	this.shape_22.setTransform(64.6,200.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},63).wait(1192));

	// text - labels
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#373535").p("AjAhGIGBCN");
	this.shape_23.setTransform(444.2,363.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQgBgDgCgCQgBgDgDgBIgHgBQgGAAgDACIgHAFQgDADAAAEIgBAFIAAAwIgOAAIAAhNIAMAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACABAFQACAEAAAGIAAA4g");
	this.shape_24.setTransform(533.9,373.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgDgEgBgHIANAAQAAAEACADIAGADIAFACIAGABQAGAAAFgCQAEgCADgEQADgEABgGQACgFAAgGIAAgFIgBAAQgDAHgHAEQgHACgGAAQgJAAgGgCQgHgDgEgGQgFgFgCgIQgCgGAAgHIACgPQACgHAEgGQAFgFAGgEQAHgFAJAAQAIABAGADQAGADAEAHIAAgMIALAAIAABGQABAKgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgJgpQgEACgDAEIgEAJIgBALIABALQABAEACAEQADAFAFACQADACAGABQAGgBAEgCQAFgCADgFQACgEABgEQACgGAAgFQAAgGgCgFQgBgEgCgFQgDgEgEgBQgEgDgGAAQgGAAgEACg");
	this.shape_25.setTransform(523,375.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIgBIgKgBQgEgBgEgCQgDgDgCgEQgCgEAAgGQAAgHACgEQACgEAEgCIAIgEIAKgCIAJgCIAIgBIAFgCQACgDAAgDQAAgEgBgDIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQABgGACgFQADgGAEgCQAFgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFABgCgDgAAKACIgJABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIAEAEIAEACIAGAAQAGABAEgCQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_26.setTransform(515,373.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGgBAGIAAAjg");
	this.shape_27.setTransform(508.8,373.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgFIgFgDIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAEAAAGIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_28.setTransform(501.7,372.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgkA2IAAhqIANAAIAAALIAEgFIAGgEQAHgEAHAAIAJABIAHADQAGADAFAGQAEAGADAHQACAHAAAJQAAAHgCAHQgDAIgEAFQgEAGgHADQgHACgJAAIgFAAIgHgCIgGgDQgEgDgCgDIAAAngAgLgnQgEACgDAEQgDAEgBAGIgBAKIABALQABAFADADQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgIIABgLQAAgGgBgFIgEgKQgDgEgFgBQgFgDgFAAQgGAAgFADg");
	this.shape_29.setTransform(493.4,375.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIgBIgKgBQgEgBgEgCQgDgDgCgEQgCgEAAgGQAAgHACgEQACgEAEgCIAIgEIAKgCIAJgCIAIgBIAFgCQACgDAAgDQAAgEgBgDIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgGADgFQADgGAEgCQAFgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFABgCgDgAAKACIgJABIgHABIgJACQgDABgCAEQgCADAAAEIABAFIAEAEIAEACIAGAAQAGABAEgCQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_30.setTransform(484.9,373.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_31.setTransform(479,372.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgrA2IAAhqIAlAAQALAAAKACQAJADAHAHQAGAHAEAJQADAJAAANQAAANgDAKIgEAKIgFAIQgGAHgKAEQgKAEgMAAgAgdApIAYAAIAFAAIAIgCIAIgEQAEgCADgFQADgFACgHQACgHAAgJQAAgJgCgIQgCgHgEgGQgEgFgHgDQgHgCgJAAIgYAAg");
	this.shape_32.setTransform(472.4,372.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#373535").p("AjmA9IHNh5");
	this.shape_33.setTransform(435.7,266.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#373535").p("AkQAOIIhgb");
	this.shape_34.setTransform(430.6,253);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#373535").p("AlXg4IKvBx");
	this.shape_35.setTransform(424.4,239.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#373535").p("AmUh1IMpDr");
	this.shape_36.setTransform(419.3,226.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgDgGAAgGIANAAQAAADACAEQABADADABIAHADIAHAAIAGAAIAGgCQADAAACgDQACgDAAgDQAAgFgFgDQgDgCgGgBIgLgDIgMgEQgFgCgEgEQgEgEAAgIQAAgFACgFQADgDAEgDQAFgDAEgBIAKgBQAHAAAFABQAFABAFACQAEADADAFQACAFABAHIgNAAIgCgGIgEgFIgGgCIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACADIAGADIAHACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAHgDAFQgDAEgFADQgEADgGACIgMABIgMgBg");
	this.shape_37.setTransform(492.9,250.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_38.setTransform(484.9,249.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_39.setTransform(478.6,249.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAbA1QAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAgBgBIAAgGIAAgIIgBgIIgCgIIgDgFQgCgDgDgCQgDgBgFAAIgiAAIAAAtIgPAAIAAhqIAyAAQAIAAAFACQAHACAEAEQAEAEACAFQACAFABAGIgCAJQgBAFgCADQgEAIgKABIAAABIAHADIAGAFIACAHIABAHIAAAIIABAIIACAHQABAEACACgAgcgDIAcAAIAKgBIAIgDQAEgCACgEQACgDgBgHQAAgIgEgFIgGgDIgIgCIgjAAg");
	this.shape_40.setTransform(472.2,249.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#373535").p("AnbgpIO3BT");
	this.shape_41.setTransform(305.7,373.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_42.setTransform(238.8,371.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAQAnIgQg9IgPA9IgNAAIgZhNIAOAAIARA/IABAAIAPg/IANAAIARA/IARg/IANAAIgYBNg");
	this.shape_43.setTransform(228.9,371.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgIAoIgHgCQgHgEgFgFQgFgGgCgHQgCgHgBgIQABgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAHADQAIADAEAFQAFAGACAIQACAHAAAIQAAAIgCAHQgCAHgFAGQgEAFgIAEIgHACIgJABgAgJgaQgEACgDADQgEAEgBAGQgCAFAAAHQAAAGACAGQABAGAEADQADADAEADQAFACAEAAQAFAAAEgCQAFgDADgDQAEgDACgGQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_44.setTransform(219,371.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_45.setTransform(210,370.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgMAoQgFgCgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAEACAEQACACADACIAGADIAGABIAHgBIAGgBQADgCABgCQACgDABgDQgBgFgEgCQgDgDgGgCIgLgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgCACAAADQABADACADIAFADIAIADIAIACIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgFAEgGABIgMABIgMgBg");
	this.shape_46.setTransform(197.9,371.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHgBIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIgBgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_47.setTransform(190.2,371.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgFAnIgdhNIAOAAIAVBAIAAAAIAVhAIAOAAIgdBNg");
	this.shape_48.setTransform(182.4,371.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgIAoIgHgCQgHgEgFgFQgFgGgCgHQgCgHAAgIQAAgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAHADQAHADAFAFQAFAGACAIQACAHAAAIQAAAIgCAHQgCAHgFAGQgFAFgHAEIgHACIgJABgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAGADADQADADAEADQAFACAEAAQAFAAAEgCQAFgDADgDQAEgDACgGQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_49.setTransform(174.3,371.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgFACIgGAFQgDADgBAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABADADQAEACACAFQACAEAAAGIAAA4g");
	this.shape_50.setTransform(163.7,371.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgFAFQgFAFgBAJIAAAwIgLAAIAAgyIgBgHQgBgDgBgCQgCgDgDgBIgHgBQgGAAgEACIgGAFQgCADgCAEIgBAFIAAAwIgMAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACACAFQADAEAAAGIAAA4g");
	this.shape_51.setTransform(269.2,354.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgFgDgDgEQgCgEAAgHIAMAAQAAAEADACIAEAEIAHADIAFAAQAGAAAFgCQAFgCACgEQADgEABgFQACgGgBgGIAAgFIAAAAQgDAHgHADQgHADgGAAQgIAAgHgDQgHgDgEgFQgEgFgCgHQgCgHAAgIIABgNQACgIAEgGQAEgGAIgEQAGgDAJAAQAIAAAGADQAGADADAGIAAgKIAMAAIAABGQAAAJgCAHQgCAHgEAFQgJAKgSAAIgLgCgAgJgpQgEACgDAFIgEAJIgBAKIABAKQABAFADAEQACAEAEADQAFADAFgBQAGABAFgDQAEgDACgEQAEgEABgFIABgKIgBgKQgCgGgCgDQgCgFgFgCQgEgCgGAAQgFAAgFACg");
	this.shape_52.setTransform(258.3,355.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgCQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgGACgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgGgBQgIAAgFADQgFADgBAIIgNAAQABgHADgFQACgFAFgDQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_53.setTransform(250.4,354.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_54.setTransform(244.2,354.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAtIgNAAIAAhrIANAAIAAAqQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_55.setTransform(237.1,352.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgGIAGgDQAHgDAHAAIAJABIAHACQAGAEAFAFQAEAFADAIQACAHAAAIQAAAJgCAGQgDAHgEAGQgEAFgHADQgHADgJABIgFgBIgHgCIgGgDQgEgDgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAFIgBAKIABALQABAEADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgJIABgLQAAgFgBgFIgEgJQgDgFgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_56.setTransform(228.7,355.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGADgIAAIgKgCQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgFgBQgJAAgFADQgFADgBAIIgNAAQABgHADgFQACgFAFgDQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_57.setTransform(220.2,354.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_58.setTransform(214.4,352.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_59.setTransform(208.1,352.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_60.setTransform(195.1,352.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_61.setTransform(186.9,354.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_62.setTransform(180.3,353.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_63.setTransform(174.1,354.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGADgIAAIgKgCQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgFgBQgJAAgFADQgFADgBAIIgNAAQABgHADgFQACgFAFgDQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_64.setTransform(166.2,354.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_65.setTransform(160,354.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_66.setTransform(154.6,353.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_67.setTransform(148.2,354.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHgBgJQABgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAIADAEAGQAFAFACAHQACAIAAAHQAAAJgCAHQgCAHgFAGQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgEACgFQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_68.setTransform(139.8,354.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgTA0IgJgGIgHgGQgGgIgDgKQgDgKAAgMQAAgLADgJIAFgLIAFgHQAHgIAJgFQAFgCAFgBIAKgBQAJAAAHACQAIADAGAEQAGAEAEAHQADAGABAJIgNAAQgDgMgIgFQgEgEgFgBQgFgBgGAAQgIAAgHADQgGAEgFAGQgFAGgBAIQgDAIAAAIQAAAIADAJQABAHAFAHQAFAGAGADQAHAEAIAAQAIAAAFgCQAFgDAFgDQAEgFACgFQACgHABgGIAOAAQgCAUgMAMQgMALgVAAQgLAAgJgEg");
	this.shape_69.setTransform(130.1,352.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgYAjQAAgGACgFQABgEAEgDIAGgHIAIgGIAFgDIAEgCIAEgFQABgCAAgDIgBgFIgCgDQgDgDgEAAIgFABIgDAEIgBAFIgBAGIgOAAQABgGABgFQABgFAEgEQADgEAFgCQAEgCAGAAIAJACIAHAEIAFAHQABAEAAAEQAAAGgBADQgCAEgCACIgGAFIgIAFIgFAFIgGAGIAfAAIAAAMg");
	this.shape_70.setTransform(474.9,102.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgVA0IgJgGIgIgGQgGgIgEgKQgEgKAAgMQAAgLAEgKIAEgJIAGgJIAIgGIAJgGQAKgEALAAQANAAAJAEIAJAGIAIAGIAGAJIAEAJQAEAKAAALQAAAMgEAKQgDAKgHAIIgIAGIgJAGQgJAEgNAAQgLAAgKgEgAgMghQgGAEgDAFQgEAFgBAHQgCAHAAAFQAAAHACAHQABAGAEAFQADAFAGADQAFADAHAAQAIAAAGgDQAFgDAEgFQADgFACgGIABgOQAAgFgBgHQgCgHgDgFQgEgFgFgEQgGgDgIAAQgHAAgFADg");
	this.shape_71.setTransform(466.3,99.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgkA2IAAhqIANAAIAAALIAEgFIAGgFQAHgCAHgBIAJABIAHADQAGADAFAGQAEAFADAIQACAHAAAJQAAAHgCAHQgDAHgEAGQgEAFgHAEQgHACgJAAIgFAAIgHgCIgGgEQgEgCgCgDIAAAngAgLgnQgEACgDAEQgDAEgBAFIgBALIABALQABAEADAFQADAEAFACQAEACAGABQAHgBAEgCQAFgCACgEIAEgJIABgMQAAgFgBgFIgEgKQgDgDgFgCQgFgDgFAAQgGAAgFADg");
	this.shape_72.setTransform(228.8,373.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgEQACgCACgFQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHAAQgIAAgFgBg");
	this.shape_73.setTransform(220,371.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgDgFAAgIIANAAQAAAEACAEQACACADACIAGADIAHABIAGgBIAGgBQADgCABgCQADgDAAgDQAAgFgFgCQgDgDgGgCIgLgCIgMgEQgFgBgFgEQgDgFAAgIQAAgFACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAGABAEADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACADIAFADIAIADIAIACIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgEAEgGABIgMABIgMgBg");
	this.shape_74.setTransform(207.9,371.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgGAnIgchNIAOAAIAVBAIAAAAIAVhAIAOAAIgdBNg");
	this.shape_75.setTransform(192.4,371.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgIAoIgHgCQgHgEgFgFQgFgGgCgHQgCgHgBgIQABgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAHADQAIADAEAFQAFAGACAIQACAHAAAIQAAAIgCAHQgCAHgFAGQgEAFgIAEIgHACIgJABgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAGADADQADADAEADQAFACAEAAQAFAAAEgCQAFgDADgDQAEgDACgGQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_76.setTransform(184.3,371.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgEACIgHAFQgCADgCAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAGgEQAGgEAHAAQAGAAAFACQAFABADADQADACADAFQABAEAAAGIAAA4g");
	this.shape_77.setTransform(173.7,371.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgEACIgHAFQgCADgBAEIgCAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACACAFQABAEAAAGIAAA4g");
	this.shape_78.setTransform(258.8,354.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgEgEAAgHIANAAQAAAEACACIAGAEIAFADIAGAAQAGAAAFgCQAEgCADgEQADgEABgFQACgGAAgGIAAgFIgBAAQgDAHgHADQgHADgGAAQgIAAgHgDQgGgDgFgFQgFgFgCgHQgCgHAAgIIACgNQACgIAEgGQAFgGAGgEQAHgDAJAAQAIAAAGADQAGADAEAGIAAgKIAMAAIAABGQAAAJgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgIgpQgFACgDAFIgEAJIgBAKIABAKQABAFACAEQADAEAFADQAEADAFgBQAGABAEgDQAFgDADgEQACgEABgFIACgKIgCgKQAAgGgDgDQgDgFgEgCQgEgCgGAAQgGAAgDACg");
	this.shape_79.setTransform(247.9,355.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGADgIAAIgKgCQgFgBgDgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEADgDIAJgCIAJgDIAKgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgFgBQgHAAgGADQgFADgBAIIgMAAQAAgHACgFQADgFAEgDQAFgDAGgBQAGgBAGAAIAKABQAFAAAEACQAFADACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgCgDgAAKABIgJACIgHABIgIADQgEABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAAEgCQAEgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_80.setTransform(240,354.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFALAAIAAAOQgIAAgFACQgGACgCAEQgEAEgBAGQgCAGABAGIAAAjg");
	this.shape_81.setTransform(233.8,354.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGADgIAAIgKgCQgFgBgDgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEADgDIAJgCIAJgDIAKgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgFgBQgHAAgGADQgFADgBAIIgMAAQAAgHACgFQADgFAEgDQAFgDAGgBQAGgBAGAAIAKABQAFAAAEACQAFADACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgCgDgAAKABIgJACIgHABIgIADQgEABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAAEgCQAEgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_82.setTransform(209.8,354.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgQAAIAdgoIgbglIARAAIASAbIASgbIAQAAIgbAkIAeApg");
	this.shape_83.setTransform(168.6,354.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGADgIAAIgKgCQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgGgBQgIAAgFADQgFADgBAIIgNAAQABgHADgFQACgFAFgDQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_84.setTransform(160.8,354.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_85.setTransform(155,352.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_86.setTransform(149.4,354.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAcA2QgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgBIAAgGIgBgIIgBgIIgBgIIgCgGQgCgCgEgCQgDgBgGAAIghAAIAAAuIgOAAIAAhrIAxAAQAHAAAHACQAFACAFAEQAFAEACAFQABAFAAAGIAAAJQgCAFgCADQgEAIgKABIAAABIAIADIAEAFIADAHIABAHIABAIIABAIIABAHQABAEACADgAgcgDIAdAAIAJgBIAIgDQADgCACgEQACgDAAgHQABgHgFgFIgGgFIgJgBIgiAAg");
	this.shape_87.setTransform(140.5,352.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgYAjQAAgGACgFQACgEADgDIAHgHIAHgGIAFgDIAEgCIAEgFQABgCAAgDIgBgFIgCgDQgDgDgEAAIgFABIgDAEIgBAFIgBAGIgOAAQABgGABgFQACgFADgEQADgEAFgCQAEgCAGAAIAJACIAHAEIAFAHQACAEAAAEQAAAGgCADQgBAEgDACIgHAFIgHAFIgFAFIgGAGIAfAAIAAAMg");
	this.shape_88.setTransform(498.5,102.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgVA0IgJgGIgIgGQgGgIgEgKQgEgKAAgMQAAgLAEgKIAEgJIAGgJIAIgGIAJgGQAKgEALAAQANAAAJAEIAJAGIAIAGIAGAJIAEAJQAEAKAAALQAAAMgEAKQgDAKgHAIIgIAGIgJAGQgJAEgNAAQgLAAgKgEgAgMghQgGAEgDAFQgEAFgBAHQgCAHAAAFQAAAHACAHQABAGAEAFQADAFAGADQAFADAHAAQAIAAAGgDQAFgDAEgFQADgFACgGQABgHAAgHQAAgFgBgHQgCgHgDgFQgEgFgFgEQgGgDgIAAQgHAAgFADg");
	this.shape_89.setTransform(489.9,99.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgSA0IgJgGIgIgGQgHgIgDgKQgEgKAAgMQAAgLAEgKIAEgJIAGgJIAIgGIAJgGQAKgEALAAQAIAAAJACQAHADAGAFQAHAFAEAHQAEAHABAJIgXAAQgBgDgCgEIgEgGIgIgEIgIgCQgHAAgFADQgGAEgDAFQgEAFgBAHQgCAHAAAFQAAAHACAHQABAGAEAFQADAFAGADQAFADAHAAQAFAAAEgBQAEgCAEgEQAGgGABgLIAXAAQgCANgCAFQgFAJgFAFQgHAGgIADQgIADgKAAQgLAAgKgEg");
	this.shape_90.setTransform(478.6,99.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},204).to({state:[]},216).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:186.9}},{t:this.shape_60},{t:this.shape_59,p:{x:208.1}},{t:this.shape_58,p:{x:214.4}},{t:this.shape_57},{t:this.shape_56,p:{x:228.7}},{t:this.shape_55,p:{x:237.1}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:190.2}},{t:this.shape_46},{t:this.shape_45,p:{x:210,y:370.3}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},12).to({state:[]},373).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_61,p:{x:176.5}},{t:this.shape_59,p:{x:184.7}},{t:this.shape_45,p:{x:197.7,y:352.8}},{t:this.shape_58,p:{x:204}},{t:this.shape_82},{t:this.shape_56,p:{x:218.3}},{t:this.shape_55,p:{x:226.7}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_47,p:{x:200.2}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_41}]},41).wait(409));

	// text - narration
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgHA3IAAgRIAQAAIAAARgAgFAdIAAgHQAAgHACgEIAEgIIAGgFIAGgHQADgDACgEQACgEgBgFQAAgIgFgFQgCgCgEgCIgHgBQgEAAgEACQgEACgDAEQgCADgCAEIgBAKIgMAAQgBgIADgGQACgHAEgFQAFgEAGgDQAGgDAHAAQAHAAAGACQAGACAEAEQAEAEACAFQADAGAAAHIgBAIIgDAHIgEAGIgFAEIgFAEIgEAFIgDAGIgBAHIAAAGg");
	this.shape_91.setTransform(199.5,203.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgDgGAAgGIANAAQAAADACAEQACACACACIAHADIAHABIAGgBIAGgCQADAAABgDQADgDAAgDQAAgFgFgDQgDgCgGgCIgLgCIgMgEQgFgBgFgEQgDgFAAgIQAAgFACgFQADgDAEgDQAFgDAEgBIAKgBQAHgBAFACQAGABAEACQAEAEACAEQADAFABAHIgNAAIgCgGIgEgFIgGgCIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACADIAFADIAIACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgEADgGACIgMABIgMgBg");
	this.shape_92.setTransform(191.7,205.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgKA2QgGgBgFgDQgEgCgDgFQgEgEAAgGIANAAQABADACACIAEAFIAGACIAGAAQAGAAAFgCQAEgCADgEQADgEABgGQABgEAAgHIAAgFIAAAAQgDAHgHADQgHAEgGAAQgIAAgHgEQgGgDgFgFQgFgFgCgHQgBgHAAgIQgBgHACgGQACgIAEgGQAFgFAHgFQAGgDAJAAQAHgBAHAEQAGADADAGIAAgLIANAAIAABHQAAAJgCAHQgDAHgEAFQgJAJgSAAQgFABgFgCgAgIgpQgFADgDADIgEAKIgBAKIABAKQABAFADAEQACAEAFADQAEACAFAAQAGAAAFgCQAEgDADgEQACgEABgFIACgLIgCgJQAAgFgDgFQgDgEgEgCQgEgCgGAAQgFAAgEACg");
	this.shape_93.setTransform(183.5,207);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_94.setTransform(175.2,205.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgRAmQgFgDgDgDQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAEAHABQAFgBAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_95.setTransform(166.9,205.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_96.setTransform(161.1,204);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGAAAGIAAAjg");
	this.shape_97.setTransform(153.3,205.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgRAmQgFgDgDgDQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAEAHABQAFgBAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_98.setTransform(146.2,205.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgDgHABgJQgBgHADgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGADAIQABAHAAAHQAAAJgBAHQgDAIgFAFQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEADgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADADAFACQAEACAEABQAFgBAEgCQAFgCADgDQADgDADgGQABgFAAgIQAAgGgBgFQgDgGgDgDQgDgEgFgCQgEgCgFAAQgEAAgEACg");
	this.shape_99.setTransform(137.8,205.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIADAAQAFAAACgCQADgCABgDIAFgNIgehMIAOAAIAWA+IAAAAIAWg+IAOAAIgiBXIgEAJIgEAHIgHADIgHABg");
	this.shape_100.setTransform(129.7,207);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgDgHABgJQgBgHADgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAFgGADIgIADIgJABgAgJgaQgEACgDAEQgEADgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQADgDADgGQABgFAAgIQAAgGgBgFQgDgGgDgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_101.setTransform(117.5,205.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_102.setTransform(110.7,204.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_103.setTransform(104.4,205.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_104.setTransform(98.6,204);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_105.setTransform(90.3,204.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_106.setTransform(84.1,205.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgEgCgEgFQgCgEAAgGIAMAAQABADABACIAFAFIAHACIAFAAQAGAAAFgCQAEgCADgEQADgEABgGQABgEAAgHIAAgFIAAAAQgDAHgHADQgHAEgGAAQgIAAgHgEQgGgDgFgFQgEgFgCgHQgCgHgBgIIACgNQACgIAEgGQAEgFAIgFQAGgDAJAAQAHgBAHAEQAGADADAGIAAgLIAMAAIAABHQAAAJgCAHQgCAHgEAFQgJAJgSAAQgFABgGgCgAgJgpQgEADgDADIgEAKIgBAKIABAKQABAFACAEQADAEAEADQAFACAFAAQAGAAAFgCQAEgDACgEQAEgEABgFIABgLIgBgJQgBgFgDgFQgDgEgEgCQgEgCgGAAQgFAAgFACg");
	this.shape_107.setTransform(75.5,207);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_108.setTransform(215.5,187.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_109.setTransform(210.9,186.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgMAAQAAgGACgFQADgFAEgDQAFgDAGgCQAGgCAGAAIAKABQAFABAEADQAFACACAEQACAEABAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgCgCgAAKABIgJACIgHABIgJADQgDABgCADQgCACAAAFIABAFIAEAEIAEACIAGAAQAGAAADgBQAFgCADgDQADgCABgDIABgGIAAgMQgCABgDAAg");
	this.shape_110.setTransform(205.4,188);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACADADADIAGACIAGAAIAHAAIAGgBQADgCABgCQACgCAAgEQAAgFgEgCQgDgDgGgBIgLgEIgMgDQgFgCgFgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAFgBIAKgCQAFAAAGACQAFABAEADQAFADACAEQADAFABAHIgNAAIgCgHIgFgDIgFgCIgFgBIgGABIgFABIgEADQgCACAAADQAAADADACIAFAEIAIACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgFACgGABIgMABIgLgBg");
	this.shape_111.setTransform(193.3,188);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgOAlQgHgDgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_112.setTransform(185.6,188);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgIAoIgHgDQgHgCgFgGQgFgFgCgIQgCgHgBgIQABgIACgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAKAAAGAEQAIADAEAGQAFAFACAHQACAIABAIQgBAIgCAHQgCAIgFAFQgEAGgIACIgHADIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAGADADQADAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgDACgGQABgGAAgGQAAgHgBgFQgCgFgEgFQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_113.setTransform(177.2,188);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_114.setTransform(168.3,186.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIADAAQAEAAADgCQADgCABgDIAGgNIgghMIAPAAIAWA+IAAAAIAWg+IAOAAIgiBXIgEAJIgEAHIgHADIgHABg");
	this.shape_115.setTransform(156.2,189.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_116.setTransform(150.8,186.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_117.setTransform(146.6,186.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAEQADAFABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgIIANAAQgBAHgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_118.setTransform(140.4,188);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgGADgFQADgFAEgDQAFgDAGgCQAGgCAGAAIAKABQAFABAEADQAFACACAEQACAEABAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgCgCgAAKABIgJACIgHABIgJADQgDABgCADQgCACAAAFIABAFIAEAEIAEACIAGAAQAGAAAEgBQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDAAg");
	this.shape_119.setTransform(132.5,188);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgQAAIAdgoIgbglIARAAIASAbIASgbIAQAAIgbAkIAeApg");
	this.shape_120.setTransform(124.5,188);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgOAlQgHgDgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_121.setTransform(116.6,188);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAQAnIgQg9IgPA9IgNAAIgZhNIAOAAIARA/IABAAIAPg/IANAAIARA/IARg/IANAAIgYBNg");
	this.shape_122.setTransform(102.7,188);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgHAoIgIgDQgHgCgFgGQgFgFgCgIQgDgHAAgIQAAgIADgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAKAAAGAEQAIADAEAGQAFAFACAHQADAIAAAIQAAAIgDAHQgCAIgFAFQgEAGgIACIgHADIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAGADADQADAEAEACQAFABAEAAQAFAAAFgBQAEgCADgEQADgDACgGQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_123.setTransform(92.7,188);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_124.setTransform(84.3,186.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgHAoIgIgDQgHgCgFgGQgFgFgCgIQgDgHAAgIQAAgIADgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAKAAAGAEQAIADAEAGQAFAFADAHQACAIAAAIQAAAIgCAHQgDAIgFAFQgEAGgIACIgHADIgJAAgAgIgaQgFACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAGADADQADAEAFACQAEABAEAAQAFAAAFgBQAEgCADgEQADgDACgGQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_125.setTransform(71.7,188);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgPA2QgHgCgHgFIgFgGIgEgGQgEgHAAgJIAOAAQAAAGACAFQADAFAEADQAFADAFABQAGACAEAAIAKgBIAJgDQAEgCADgEQACgDAAgHQAAgFgDgEQgDgDgFgCQgEgCgHgCIgMgDIgMgCIgLgFQgFgCgCgGQgDgEAAgIIAAgIIADgGQADgGAGgEQAFgEAHgBQAHgCAHAAQAHAAAIACQAGACAGAEQAFAEAEAHQACAGAAAJIgNAAQgBgMgHgFQgHgFgKAAIgJABQgFABgDACQgEACgCAEQgCADAAAFQAAAFADADQAEADAEACIAMAEIALACIAMADQAHACAFADQAFAEACAFQADAFAAAIQAAAJgEAFQgDAHgHADQgFAEgIACQgHACgIAAQgIAAgIgCg");
	this.shape_126.setTransform(62.5,186.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_127.setTransform(233.3,239.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_128.setTransform(221.3,235);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACAEQABADADABIAHADIAHAAIAGAAIAGgCQADAAACgDQACgDAAgDQAAgFgFgDQgDgCgGgBIgLgDIgMgEQgFgCgEgEQgEgEAAgIQAAgFADgEQACgEAEgDQAEgDAFgBIAKgBQAHAAAFABQAGABAEACQAEADADAFQACAFAAAHIgMAAIgCgGIgEgFIgGgBIgFgBIgGABIgGABIgDADQgCACABADQAAADABADIAHADIAIACIAIADIAJACIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFADQgEADgGACIgMABIgMgBg");
	this.shape_129.setTransform(211.7,236.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_130.setTransform(204,236.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgDIgGgCQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAtIgNAAIAAhrIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_131.setTransform(195.8,235);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACAEQABADADABIAHADIAHAAIAGAAIAGgCQADAAACgDQACgDAAgDQAAgFgFgDQgDgCgGgBIgLgDIgMgEQgFgCgEgEQgEgEAAgIQAAgFADgEQACgEAEgDQAEgDAFgBIAKgBQAHAAAFABQAGABAEACQAEADADAFQACAFABAHIgNAAIgCgGIgEgFIgGgBIgFgBIgGABIgGABIgDADQgCACABADQAAADACADIAGADIAIACIAIADIAJACIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFADQgEADgGACIgMABIgMgBg");
	this.shape_132.setTransform(187.9,236.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgRAlQgFgBgDgEQgEgEgBgFQgBgFAAgGIAAgyIANAAIAAAzIABAGIADAFQAEAEAHAAQAFAAAEgCQAFgBADgDQACgEACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgNIAAAAQgEAIgHADQgGAEgHAAQgIAAgFgDg");
	this.shape_133.setTransform(180,236.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFALAAIAAAOQgIAAgGACQgFACgDAEQgCAEgCAGQgCAGABAGIAAAjg");
	this.shape_134.setTransform(173.8,236.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_135.setTransform(164.7,236.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_136.setTransform(160.1,235);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGADgIAAIgKgBQgEgCgEgDQgDgCgDgEQgCgEAAgGQAAgHACgEQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgDQABgCAAgDQAAgEgBgDIgEgEIgFgBIgGgBQgHAAgGADQgGADAAAJIgMAAQAAgHADgGQACgEAFgEQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDADgGAAQgFAAgDgDgAAJABIgIACIgIABIgHADQgEAAgCADQgCAEAAAEIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDACgEIAAgFIAAgMQgCABgEAAg");
	this.shape_137.setTransform(154.6,236.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgEAIABQAJgBAIAEQAGADAFAGQAFAFADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_138.setTransform(142,236.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACAEQACADADABIAGADIAGAAIAHAAIAGgCQADAAABgDQACgDAAgDQAAgFgEgDQgDgCgFgBIgMgDIgMgEQgFgCgFgEQgDgEAAgIQAAgFACgEQADgEAEgDQAFgDAFgBIAJgBQAGAAAGABQAFABAEACQAFADACAFQADAFABAHIgNAAIgCgGIgFgFIgFgBIgFgBIgGABIgFABIgEADQgCACAAADQAAADADADIAFADIAIACIAIADIAKACIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgEADQgFADgGACIgMABIgLgBg");
	this.shape_139.setTransform(133.9,236.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgHAMIAEgDIADgEIAAgEIABgDIgIAAIAAgQIAPAAIAAAPIgBAHIgDAGQgDAHgIACg");
	this.shape_140.setTransform(123.9,240.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_141.setTransform(117.9,236.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_142.setTransform(112.1,236.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgRAlQgFgBgDgEQgEgEgBgFQgBgFAAgGIAAgyIANAAIAAAzIABAGIADAFQAEAEAHAAQAFAAAEgCQAFgBADgDQACgEACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgNIAAAAQgEAIgHADQgGAEgHAAQgIAAgFgDg");
	this.shape_143.setTransform(105,236.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACAEQABADADABIAHADIAHAAIAGAAIAGgCQADAAACgDQABgDABgDQAAgFgEgDQgEgCgFgBIgMgDIgMgEQgFgCgEgEQgEgEAAgIQAAgFADgEQACgEAEgDQAEgDAFgBIALgBQAFAAAGABQAGABAEACQAEADADAFQACAFAAAHIgMAAIgCgGIgFgFIgFgBIgFgBIgGABIgGABIgDADQgCACABADQAAADABADIAHADIAIACIAIADIAJACIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFADQgFADgFACIgMABIgMgBg");
	this.shape_144.setTransform(97.1,236.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgDgGAAgGIANAAQAAADACAEQACADACABIAHADIAHAAIAGAAIAGgCQADAAABgDQADgDAAgDQAAgFgFgDQgDgCgGgBIgLgDIgMgEQgFgCgFgEQgDgEAAgIQAAgFACgEQADgEAEgDQAFgDAEgBIAKgBQAHAAAFABQAGABAEACQAEADACAFQADAFABAHIgNAAIgCgGIgEgFIgGgBIgFgBIgGABIgGABIgDADQgBACAAADQAAADACADIAFADIAIACIAIADIAKACIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFADQgEADgGACIgMABIgMgBg");
	this.shape_145.setTransform(89.6,236.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_146.setTransform(81.9,236.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_147.setTransform(76,236.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgGIAGgEQAHgCAHAAIAJABIAHACQAGADAFAGQAEAFADAIQACAHAAAIQAAAJgCAGQgDAHgEAGQgEAFgHADQgHAEgJAAIgFgBIgHgCIgGgEQgEgCgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAEIgBALIABALQABAEADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgJIABgLQAAgFgBgFIgEgJQgDgEgFgDQgFgCgFAAQgGAAgFACg");
	this.shape_148.setTransform(68.9,237.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_149.setTransform(58.1,236.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_150.setTransform(51.2,236.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHgBgJQABgHACgIQACgHAFgFQAFgGAHgDQAHgEAIABQAKgBAGAEQAIADAEAGQAFAFACAHQACAIABAHQgBAJgCAHQgCAHgFAGQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_151.setTransform(31.4,236.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_152.setTransform(25.5,235);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_153.setTransform(222.1,218.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIgBIgKgBQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgHACgEQADgEAEgCIAIgEIAJgCIAKgBIAIgCIAGgCQACgDAAgDQgBgEgBgDIgEgEIgFgBIgGgBQgIAAgFADQgFADgBAIIgNAAQABgGADgFQACgGAFgCQAEgDAGgCQAGgBAGgBIAJABQAGABAEADQAEACADAEQACAEAAAHIAAAmIABAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAKQgDABgGAAQgFABgDgDgAAJACIgIABIgIABIgIACQgDACgCADQgCADAAAEIABAFIADAEIAFACIAGAAQAGAAADgBQAFgCADgDQADgCACgDIABgGIAAgMQgDABgEABg");
	this.shape_154.setTransform(209.4,218.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_155.setTransform(201.3,218.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgCAEgCAGQgCAGABAGIAAAjg");
	this.shape_156.setTransform(195.4,218.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgHACgIQACgIAFgFQAEgGAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFACAFAAQAJABAGgGQAFgEABgJIANAAQgBAHgDAFQgCAGgFAEQgEADgGADQgGABgHAAQgIABgHgDg");
	this.shape_157.setTransform(188.5,218.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgFgCgIQgDgHAAgIQAAgIADgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAKABAGADQAIADAEAGQAFAFACAHQADAIAAAIQAAAIgDAHQgCAIgFAFQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFABAEAAQAFAAAFgBQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_158.setTransform(176,218.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_159.setTransform(169.2,217.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFAKAAIAAAOQgHAAgFACQgGACgDAEQgCAEgCAGQgCAGAAAGIAAAjg");
	this.shape_160.setTransform(160.8,218.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_161.setTransform(153.9,218.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgFIgFgDIgGAAQgFAAgFABQgEACgDAEQgDADgBADQgBAEAAAGIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_162.setTransform(145.7,217.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_163.setTransform(139,217.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_164.setTransform(132.9,218.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgDgEgBgHIANAAQAAAEACADIAGADIAFACIAGABQAGAAAFgCQAEgCADgEQADgEABgGQACgFAAgGIAAgFIgBAAQgDAHgHAEQgGACgHAAQgJAAgGgCQgHgDgEgGQgFgFgCgIQgCgGAAgHIACgPQACgHAEgGQAFgFAGgEQAHgFAJAAQAIABAGADQAGADAEAHIAAgMIAMAAIAABGQAAAKgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgJgpQgEACgDAEIgEAJIgBALIABALQABAEACAEQADAFAFACQADACAGABQAGgBAEgCQAFgCADgFQACgEABgEQACgGAAgFQAAgFgCgGQgBgEgCgFQgDgEgEgBQgEgDgGAAQgGAAgEACg");
	this.shape_165.setTransform(124.3,220.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgFgCgIQgCgHAAgIQAAgIACgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAJABAIADQAGADAFAGQAFAFADAHQACAIAAAIQAAAIgCAHQgDAIgFAFQgFAGgGADIgIACIgJAAgAgIgaQgFACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAFADAEQADAEAFACQAEABAEAAQAFAAAFgBQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_166.setTransform(115.9,218.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_167.setTransform(109.1,217.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AARA2IgZgpIgMALIAAAeIgNAAIAAhqIANAAIAAA+IAighIARAAIgeAbIAhAyg");
	this.shape_168.setTransform(99.4,217.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_169.setTransform(93,218.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgFgCgIQgCgHAAgIQAAgIACgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAJABAIADQAGADAFAGQAFAFADAHQACAIAAAIQAAAIgCAHQgDAIgFAFQgFAGgGADIgIACIgJAAgAgIgaQgFACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAFADAEQADAEAFACQAEABAEAAQAFAAAFgBQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_170.setTransform(85.7,218.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAQAnIgQg9IgPA9IgNAAIgZhNIAOAAIARA/IABAAIAPg/IANAAIARA/IARg/IANAAIgYBNg");
	this.shape_171.setTransform(75.7,218.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_172.setTransform(62,218.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgFgDgEgEQgCgEAAgHIAMAAQABAEABADIAGADIAGACIAFABQAGAAAFgCQAEgCADgEQADgEABgGQABgFABgGIAAgFIgBAAQgDAHgHAEQgHACgGAAQgJAAgGgCQgGgDgFgGQgFgFgBgIQgDgGAAgHIACgPQACgHAEgGQAFgFAGgEQAHgFAJAAQAHABAHADQAGADAEAHIAAgMIALAAIAABGQAAAKgBAHQgDAHgEAFQgJAKgSAAIgKgCgAgJgpQgEACgDAEIgEAJIgBALIABALQABAEACAEQADAFAEACQAEACAGABQAGgBAEgCQAFgCACgFQADgEACgEIABgLIgBgLQgBgEgDgFQgDgEgEgBQgEgDgGAAQgFAAgFACg");
	this.shape_173.setTransform(53.4,220.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIgBIgKgBQgFgBgDgCQgEgDgCgEQgBgEAAgGQAAgHABgEQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgCQADgDAAgDQAAgEgCgDIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgGAEgFQACgGAEgCQAFgDAGgCQAFgBAHgBIAJABQAGABAEADQAEACADAEQADAEgBAHIAAAmIABAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAKQgDABgGAAQgFABgDgDgAAJACIgIABIgIABIgIACQgDACgCADQgCADAAAEIABAFIAEAEIAEACIAGAAQAGAAADgBQAFgCADgDQADgCACgDIABgGIAAgMQgDABgEABg");
	this.shape_174.setTransform(45.4,218.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgHACgIQACgIAFgFQAEgGAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALIAEAJQADAEAEACQAFACAFAAQAJABAGgGQAFgEABgJIANAAQgBAHgDAFQgCAGgFAEQgEADgGADQgGABgHAAQgIABgHgDg");
	this.shape_175.setTransform(37.2,218.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_176.setTransform(223.8,200);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgGAFIgHAEQgGACgIABIgKgBQgFgCgDgDQgDgCgCgEQgCgEAAgGQAAgHACgEQACgEAEgDIAIgDIAKgCIAJgBIAIgCIAFgDQACgCABgDQAAgFgCgCIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgHADgGQADgEAEgEQAFgCAGgCQAGgCAGABIAKABQAFAAAEACQAFADACAEQACAEABAHIAAAnIAAAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgDgCgAAKABIgJACIgIABIgIADQgDAAgCADQgCADAAAFIABAGIAEADIAEACIAGABQAGgBADgCQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDAAg");
	this.shape_177.setTransform(185.7,201.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQAAgDgDgCQgBgDgDgBIgHgBQgGAAgEACIgGAFQgCADgCAEIAAAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAGgDQAGgEAJAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACACAFQACAEABAGIAAA4g");
	this.shape_178.setTransform(171,201.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgEgCgEgFQgCgEAAgGIAMAAQABADABACIAFAFIAHACIAFAAQAGAAAFgCQAEgCADgEQADgEABgGQABgEAAgHIAAgFIAAAAQgDAHgHADQgHAEgGAAQgIAAgHgEQgGgDgFgFQgEgFgCgIQgCgGgBgIIACgNQACgIAEgGQAEgFAIgFQAGgDAJAAQAHgBAHAEQAGADADAGIAAgKIAMAAIAABGQAAAJgCAHQgCAHgEAFQgJAJgSAAQgFABgGgCgAgJgpQgEADgDADIgEAKIgBAKIABAKQABAFACAEQADAEAEADQAFACAFAAQAGAAAFgCQAEgDACgEQAEgEABgFIABgLIgBgJQgBgFgDgFQgDgEgEgCQgEgCgGAAQgFAAgFACg");
	this.shape_179.setTransform(160.1,202.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgEgCgEgDQgEgCgCgEQgCgEAAgGQAAgHACgEQADgEAEgDIAIgDIAKgCIAJgBIAIgCIAGgDQACgCAAgDQgBgFgBgCIgEgEIgFgCIgFAAQgJAAgFADQgGADAAAJIgNAAQAAgHAEgGQACgEAEgEQAFgCAGgCQAGgCAGABIAJABQAGAAAEACQAEADADAEQADAEgBAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAJABIgIACIgIABIgIADQgDAAgCADQgCADAAAFIABAGIAEADIAEACIAGABQAGgBADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_180.setTransform(152.2,201.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFAKAAIAAAOQgHAAgGACQgFACgCAEQgDAEgCAGQgCAGAAAGIAAAjg");
	this.shape_181.setTransform(146,201.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFAAgFABQgEACgDADQgDAEgBADQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_182.setTransform(138.9,200);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgFIAGgFQAHgCAHAAIAJABIAHACQAGADAFAGQAEAGADAHQACAHAAAIQAAAJgCAGQgDAIgEAFQgEAFgHADQgHAEgJAAIgFgBIgHgCIgGgEQgEgCgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAEIgBALIABALQABAEADAFQADAEAFACQAEADAGAAQAHAAAEgDQAFgCACgEIAEgKIABgLQAAgFgBgFIgEgKQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_183.setTransform(130.5,202.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgEgCgEgDQgEgCgCgEQgCgEAAgGQAAgHACgEQADgEAEgDIAIgDIAKgCIAJgBIAIgCIAGgDQACgCAAgDQgBgFgBgCIgEgEIgFgCIgFAAQgJAAgFADQgGADAAAJIgNAAQAAgHAEgGQACgEAEgEQAFgCAGgCQAGgCAGABIAJABQAGAAAEACQAEADADAEQADAEgBAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAJABIgIACIgIABIgIADQgDAAgCADQgCADAAAFIABAGIAEADIAEACIAGABQAGgBADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_184.setTransform(122,201.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_185.setTransform(116.2,200);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_186.setTransform(109.9,200);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_187.setTransform(99.5,201.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgRAmQgFgDgDgDQgEgEgBgFQgBgFAAgGIAAgyIANAAIAAAzIABAHIADAEQAEAEAHABQAFgBAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_188.setTransform(92.4,201.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgCgHgBgJQABgHACgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAHAEQAIADAEAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgDADgCAGQgCAFAAAGQAAAIACAFQACAGADADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgGgEgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_189.setTransform(84,201.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgYA2IgEgBIAAgMIAEACIADAAQAEAAADgCQADgCABgDIAFgNIgehMIAOAAIAWA+IAAAAIAWg+IAOAAIgjBXIgDAJIgFAHIgGADIgHABg");
	this.shape_190.setTransform(75.9,203);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgHAMIAEgDIADgEIAAgEIABgDIgIAAIAAgQIAPAAIAAAPIgBAHIgDAGQgDAHgIACg");
	this.shape_191.setTransform(65.9,205.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgYA2IgEgBIAAgMIAEACIAEAAQAEAAACgCQADgCABgDIAFgNIgfhMIAPAAIAVA+IABAAIAWg+IANAAIgiBXIgDAJIgFAHIgFADIgIABg");
	this.shape_192.setTransform(61.3,203);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_193.setTransform(52.9,200);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgCgHgBgJQABgHACgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAHAEQAIADAEAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgEADgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgGgEgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_194.setTransform(44.4,201.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_195.setTransform(35.9,200);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_196.setTransform(218.2,183.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgBQAFgCADgEQACgDACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHgBQgIAAgFgCg");
	this.shape_197.setTransform(211.1,184);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgYA2IgEgBIAAgMIAEACIAEAAQAEAAACgCQADgCABgDIAGgNIgghMIAPAAIAVA+IABAAIAWg+IANAAIgiBXIgDAJIgFAHIgFADIgIABg");
	this.shape_198.setTransform(194.6,185.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_199.setTransform(182.5,183.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgGA2IAAhqIANAAIAABqg");
	this.shape_200.setTransform(176.5,182.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_201.setTransform(168.3,187);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_202.setTransform(161.6,182.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_203.setTransform(146.8,182.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGACgIAAIgKgBQgFgBgDgCQgEgDgBgEQgDgEAAgGQAAgGADgFQACgEADgCIAJgDIAJgDIAKgCIAIgBIAGgCQABgCAAgEQABgFgCgCIgEgEIgFgBIgGgBQgHAAgGADQgFADgBAIIgMAAQAAgGACgFQADgFAFgEQAEgCAGgCQAFgCAHAAIAJABQAGABAEADQAEACADAEQADAEAAAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgCgCgAAJACIgIABIgHABIgIADQgEABgCACQgCADAAAFIABAFIADAEIAFACIAGAAQAGAAAEgBQAEgCADgDQADgCABgDIABgGIAAgMQgCABgEABg");
	this.shape_204.setTransform(140.8,183.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGgBAGIAAAjg");
	this.shape_205.setTransform(126.8,183.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAEQADAFABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgJIANAAQgBAIgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_206.setTransform(119.8,183.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQABADADADIAHACIAHAAIAGAAIAGgBQADgCACgCQABgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgFgCgEgEQgEgEAAgHQAAgGADgEQACgEAEgDQAEgDAFgBIALgCQAFAAAGACQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgEgDIgGgCIgFgBIgGABIgGABIgDADQgCACABADQAAADABACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgFACgFABIgMABIgMgBg");
	this.shape_207.setTransform(107.9,183.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgOAlQgHgDgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_208.setTransform(92.7,183.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_209.setTransform(86.9,183.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgBQAFgCADgEQACgDACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHgBQgIAAgFgCg");
	this.shape_210.setTransform(79.8,184);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQABADADADIAHACIAHAAIAGAAIAGgBQADgCACgCQABgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgFgCgEgEQgEgEAAgHQAAgGADgEQACgEAEgDQAEgDAFgBIALgCQAFAAAGACQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgEgDIgGgCIgFgBIgGABIgGABIgDADQgCACABADQAAADABACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgFACgFABIgMABIgMgBg");
	this.shape_211.setTransform(71.9,183.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgDgFAAgIIANAAQAAAFACACQACADADADIAGACIAHAAIAGAAIAGgBQADgCABgCQADgCAAgEQAAgFgFgDQgDgCgGgBIgLgEIgMgDQgFgCgFgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAEgBIAKgCQAHAAAFACQAGABAEADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgCIgFgBIgGABIgGABIgDADQgBACAAADQAAADACACIAFAEIAIACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgEACgGABIgMABIgMgBg");
	this.shape_212.setTransform(64.4,183.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgOAlQgHgDgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_213.setTransform(56.7,183.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_214.setTransform(50.8,183.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgkA2IAAhpIANAAIAAAKIAEgGIAGgDQAHgEAHAAIAJABIAHADQAGADAFAGQAEAGADAHQACAHAAAJQAAAHgCAHQgDAIgEAFQgEAGgHACQgHADgJAAIgFAAIgHgCIgGgDQgEgDgCgEIAAAogAgLgnQgEACgDAEQgDAEgBAGIgBAKIABALQABAFADADQADAEAFADQAEADAGgBQAHABAEgDQAFgDACgEIAEgJIABgKQAAgGgBgFIgEgJQgDgFgFgBQgFgDgFAAQgGAAgFADg");
	this.shape_215.setTransform(43.7,185.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_216.setTransform(173.2,166.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_217.setTransform(167.4,165);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_218.setTransform(157.7,166.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgIACgHQACgHAFgHQAEgFAHgDQAHgDAIAAQAHgBAGACIAKAFQAEADADAGQADAEABAIIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFADAFAAQAJgBAGgFQAFgFABgIIANAAQgBAHgDAGQgCAFgFAEQgEAEgGACQgGACgHAAQgIgBgHgCg");
	this.shape_219.setTransform(149.6,166.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_220.setTransform(141.4,166.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_221.setTransform(133.3,166.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_222.setTransform(127.4,166.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAEADAEQADAEAFABQAFADAFAAQAIAAAFgEIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEACgDAEQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_223.setTransform(120.5,166.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_224.setTransform(114.3,164.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_225.setTransform(110.2,164.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_226.setTransform(106.2,165);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_227.setTransform(99.9,165);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AAiA1IgMgfIgsAAIgMAfIgPAAIAqhqIAPAAIAqBqgAgSAJIAkAAIgSgwg");
	this.shape_228.setTransform(86.7,165);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIAEAAQADAAADgCQADgCABgDIAGgNIgghMIAPAAIAVA+IABAAIAWg+IANAAIghBXIgEAJIgEAHIgGADIgIABg");
	this.shape_229.setTransform(242.4,234.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_230.setTransform(236.1,231.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgGAnIgdhNIAPAAIAUBAIABAAIAVhAIANAAIgcBNg");
	this.shape_231.setTransform(226.9,232.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGACgIAAIgKgBQgFgBgDgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEADgDIAJgCIAJgDIAKgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgFgBQgHAAgGADQgFADgBAIIgMAAQAAgHACgFQADgEAEgEQAFgDAGgBQAGgCAGAAIAKACQAFAAAEADQAFACACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgCgCgAAKABIgJACIgHABIgIADQgEABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAAEgCQAEgBADgCQADgDABgDIABgGIAAgMQgCABgDAAg");
	this.shape_232.setTransform(219.3,232.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAEQADAFABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_233.setTransform(211.1,232.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_234.setTransform(200.4,231.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgDgGAAgGIANAAQAAAEACACQACAEADACIAGACIAHAAIAGAAIAGgCQADgBABgCQADgCAAgEQAAgFgFgDQgDgCgGgBIgLgEIgMgDQgFgBgFgFQgDgEAAgHQAAgGACgEQADgFAEgCQAFgDAEgBIAKgCQAHAAAFACQAGABAEADQAEACACAFQADAFABAHIgNAAIgCgHIgEgEIgGgBIgFgBIgGABIgGABIgDADQgBACAAADQAAADACACIAFAEIAIACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgEACgGABIgMABIgMgBg");
	this.shape_235.setTransform(194.4,232.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_236.setTransform(186.7,232.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDADQgDADgBAEQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_237.setTransform(178.5,231.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAEQADAFABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKIAEAKQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_238.setTransform(170.3,232.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgEQACgDACgEQABgFAAgFIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgCg");
	this.shape_239.setTransform(153,232.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgDgHAAgJQAAgHADgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAKAAAGAEQAIADAEAGQAFAFADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgEAFgIADIgHADIgJAAgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAHACAGQACAGADADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgGAAgHQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_240.setTransform(144.6,232.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_241.setTransform(118.7,231.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_242.setTransform(108.9,232.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAEQADAFABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_243.setTransform(100.8,232.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHADgFQADgEAEgEQAFgDAGgBQAGgCAGAAIAKACQAFAAAEADQAFACACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgCgCgAAKABIgJACIgHABIgJADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAAEgCQAEgBADgCQADgDABgDIABgGIAAgMQgCABgDAAg");
	this.shape_244.setTransform(92.9,232.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgGIAGgDQAHgDAHgBIAJACIAHACQAGAEAFAFQAEAGADAHQACAHAAAIQAAAJgCAGQgDAHgEAGQgEAFgHADQgHADgJAAIgFAAIgHgCIgGgDQgEgDgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAFIgBAKIABALQABAEADAEQADAFAFACQAEADAGgBQAHABAEgDQAFgCACgFIAEgJIABgKQAAgGgBgFIgEgJQgDgFgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_245.setTransform(84.5,234);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgCgGgBgGIANAAQAAAEACACQABAEAEACIAGACIAGAAIAHAAIAGgCQADgBABgCQACgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgGgBgEgFQgDgEAAgHQAAgGADgEQACgFAEgCQAEgDAGgBIAKgCQAFAAAGACQAFABAEADQAFACADAFQACAFAAAHIgMAAIgCgHIgFgEIgFgBIgFgBIgGABIgFABIgEADQgBACgBADQAAADACACIAHAEIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgGACgFABIgMABIgLgBg");
	this.shape_246.setTransform(76.1,232.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_247.setTransform(64.3,232.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_248.setTransform(58.4,232.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAJAAAIAEQAGADAFAGQAFAFADAHQABAIAAAHQAAAJgBAHQgDAHgFAGQgFAFgGADIgIADIgJAAgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAHACAGQABAGAEADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgGAAgHQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_249.setTransform(51.2,232.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQAAgDgDgCQgBgDgDgBIgHgBQgGAAgEACIgGAFQgCADgBAEIgBAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAGgDQAGgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACACAFQACAEABAGIAAA4g");
	this.shape_250.setTransform(40.5,232.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHAAQgIAAgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_251.setTransform(242.3,215.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_252.setTransform(235.7,214);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGACgIAAIgKAAQgFgBgDgEQgDgCgCgEQgCgEAAgGQAAgGACgFQACgEADgCIAJgEIAJgCIAKgBIAIgCIAFgDQACgCAAgDQAAgEgBgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAJIgMAAQAAgIACgEQADgGAFgCQAEgEAGgBQAGgBAGAAIAKAAQAFABAEACQAFADACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGgBQgFAAgCgCgAAKACIgJABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAAEgCQAEgCADgDQADgCABgEIABgFIAAgMQgCABgDABg");
	this.shape_253.setTransform(229.6,215.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHAAQgIAAgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_254.setTransform(221.5,215.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgIACgHQACgHAFgHQAEgFAHgDQAHgDAIAAQAHAAAGABIAKAFQAEADADAGQADAEABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFACAFABQAJAAAGgGQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGACgHgBQgIAAgHgCg");
	this.shape_255.setTransform(208.7,215.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgCgFgBgIIANAAQAAAEACAEQABACAEACIAGADIAGABIAHgBIAGgBQADgCABgCQACgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgGgBgEgEQgDgFAAgIQAAgFADgFQACgEAEgCQAEgDAGgBIAKgBQAFAAAGABQAFABAEADQAFADACAEQADAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACACIAHAEIAIADIAIACIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgGAEgFABIgMAAIgLAAg");
	this.shape_256.setTransform(196.7,215.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgkA2IAAhqIANAAIAAALIAEgFIAGgFQAHgCAHAAIAJAAIAHADQAGADAFAGQAEAGADAHQACAHAAAJQAAAHgCAHQgDAHgEAGQgEAFgHAEQgHACgJAAIgFAAIgHgCIgGgEQgEgCgCgDIAAAngAgLgnQgEACgDAEQgDAEgBAFIgBALIABALQABAEADAFQADAEAFACQAEACAGABQAHgBAEgCQAFgCACgEIAEgJIABgMQAAgFgBgFIgEgKQgDgDgFgCQgFgDgFAAQgGAAgFADg");
	this.shape_257.setTransform(188.8,216.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHAAQgIAAgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_258.setTransform(176.9,215.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAFIAAAsIgNAAIAAhqIANAAIAAApQABgDADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_259.setTransform(168.6,213.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_260.setTransform(157.8,214);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_261.setTransform(141.5,214);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgEQACgCACgFQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHAAQgIABgFgCg");
	this.shape_262.setTransform(135.2,215.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgIAoIgHgCQgHgEgFgFQgFgGgCgHQgCgHgBgIQABgIACgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAJAAAHADQAIADAEAFQAFAGACAIQACAHAAAIQAAAIgCAHQgCAHgFAGQgEAFgIAEIgHACIgJAAgAgJgaQgEACgDADQgEAEgBAGQgCAFAAAHQAAAGACAGQABAGAEADQADADAEADQAFACAEAAQAFAAAEgCQAFgDADgDQAEgDACgGQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_263.setTransform(126.7,215.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAEACAEQABACADACIAHADIAHABIAGgBIAGgBQADgCACgCQACgDAAgDQAAgFgFgCQgDgDgGgCIgLgCIgMgEQgFgBgEgEQgEgFAAgIQAAgFADgFQACgEAEgCQAEgDAFgBIAKgBQAHAAAFABQAGABAEADQAEADADAEQACAFAAAHIgMAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgCACABADQAAADABACIAHAEIAIADIAIACIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgEAEgGABIgMAAIgMAAg");
	this.shape_264.setTransform(114.5,215.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHAAQgIAAgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_265.setTransform(106.8,215.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgGAnIgchNIAOAAIAUBAIABAAIAVhAIAOAAIgdBNg");
	this.shape_266.setTransform(99,215.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgHAoIgIgCQgHgEgFgFQgFgGgCgHQgDgHAAgIQAAgIADgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAKAAAGADQAIADAEAFQAFAGACAIQADAHAAAIQAAAIgDAHQgCAHgFAGQgEAFgIAEIgHACIgJAAgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAGADADQADADAEADQAFACAEAAQAFAAAFgCQAEgDADgDQADgDADgGQABgGAAgGQAAgHgBgFQgDgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_267.setTransform(90.9,215.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQgBgDgCgCQgBgDgDgBIgHgBQgFAAgEACIgHAFQgDADAAAEIgBAFIAAAwIgOAAIAAhNIAMAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACACAFQABAEAAAGIAAA4g");
	this.shape_268.setTransform(80.3,215);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHAAQgIAAgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_269.setTransform(65.8,215.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgFgCgDgFQgCgEAAgGIAMAAQAAADADACIAEAFIAHABIAFABQAGAAAFgCQAFgCACgEQADgEABgGQACgEgBgHIAAgFIAAAAQgDAHgHAEQgHADgGAAQgIAAgHgDQgHgDgEgGQgEgFgCgIQgCgFAAgIIABgPQACgHAEgGQAEgFAIgFQAGgEAJABQAIAAAGADQAGADADAGIAAgLIAMAAIAABGQAAAKgCAHQgCAHgEAFQgJAJgSAAIgLgBgAgJgpQgEACgDAEIgEAJIgBALIABALQABAEADAEQACAEAEADQAFADAFAAQAGAAAFgDQAEgDACgEQAEgEABgEIABgMIgBgKQgCgEgCgFQgCgDgFgCQgEgDgGAAQgFAAgFACg");
	this.shape_270.setTransform(57.2,216.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIAAIgKAAQgEgBgEgEQgEgCgCgEQgCgEAAgGQAAgGACgFQADgEADgCIAJgEIAJgCIAKgBIAIgCIAGgDQACgCAAgDQgBgEgBgDIgEgEIgFgCIgGAAQgIAAgFADQgFADgBAJIgNAAQABgIADgEQACgGAFgCQAEgEAGgBQAGgBAGAAIAJAAQAGABAEACQAEADADAEQACAEAAAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGgBQgFAAgDgCgAAJACIgIABIgIABIgIACQgDABgCAEQgCADAAAEIABAFIADAEIAFACIAGABQAGAAADgCQAFgCADgDQADgCACgEIABgFIAAgMQgDABgEABg");
	this.shape_271.setTransform(49.2,215.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgIACgHQACgHAFgHQAEgFAHgDQAHgDAIAAQAHAAAGABIAKAFQAEADADAGQADAEABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFACAFABQAJAAAGgGQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGACgHgBQgIAAgHgCg");
	this.shape_272.setTransform(41,215.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_273.setTransform(233.3,196.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_274.setTransform(218.6,197.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAtIgNAAIAAhqIANAAIAAApQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_275.setTransform(210.3,196.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_276.setTransform(203.7,196.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_277.setTransform(185.1,197.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAtIgNAAIAAhqIANAAIAAApQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_278.setTransform(176.8,196.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAYA2IgYhZIgZBZIgOAAIgbhqIAOAAIAVBYIAYhYIAPAAIAYBYIAVhYIAPAAIgdBqg");
	this.shape_279.setTransform(165.8,196.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAtIgNAAIAAhqIANAAIAAApQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_280.setTransform(146.4,196.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_281.setTransform(139.7,196.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIAAIgKgCQgFgBgDgDQgDgCgCgEQgCgEgBgGQABgGACgFQACgEADgDIAJgCIAJgDIAKgCIAIgBIAFgCQACgCAAgEQABgFgCgCIgEgEIgGgBIgFgBQgHAAgGADQgFADgBAIIgMAAQAAgHACgFQADgFAFgDQAEgDAGgBQAFgBAHAAIAKABQAFAAAEACQAEADADAEQADAEAAAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgCgDgAAKABIgJACIgHABIgIADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_282.setTransform(133.7,197.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_283.setTransform(125.5,197.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAtIgNAAIAAhqIANAAIAAApQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_284.setTransform(99.6,196.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_285.setTransform(91.4,197.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGADgIAAIgKgCQgEgBgEgDQgDgCgDgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQABgCAAgEQAAgFgBgCIgEgEIgFgBIgGgBQgHAAgGADQgGADAAAIIgMAAQAAgHADgFQACgFAFgDQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgHADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDACgEIAAgFIAAgMQgCABgEAAg");
	this.shape_286.setTransform(83.5,197.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_287.setTransform(75.4,197.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAtIgNAAIAAhqIANAAIAAApQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_288.setTransform(63,196.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_289.setTransform(56.3,196.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_290.setTransform(52.5,196.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_291.setTransform(235.4,178.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIgBIgKAAQgEgBgEgDQgDgDgCgEQgCgEAAgGQAAgHACgEQACgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgBAAgEQAAgEgBgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAIIgNAAQAAgHADgEQADgGAEgCQAFgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgCgDgAAKACIgJABIgHABIgJACQgDACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAAEgCQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_292.setTransform(208.6,180.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_293.setTransform(197.7,179);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgHIAAgyIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgEQACgDACgEQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgBg");
	this.shape_294.setTransform(191.4,180.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgGgCgHQgCgHAAgIQAAgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAIADQAGADAFAFQAFAGADAIQACAHAAAIQAAAIgCAHQgDAHgFAGQgFAGgGADIgIACIgJAAgAgIgaQgFACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAFACQAEACAEAAQAFAAAFgCQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_295.setTransform(182.9,180.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQABADAEADIAGACIAGABIAHgBIAGgBQADgBABgDQACgDAAgDQAAgFgDgCQgEgDgFgCIgMgDIgMgDQgGgCgEgDQgDgFAAgHQAAgGACgFQADgEAEgCQAFgDAFgBIAKgCQAFABAGABQAFABAEADQAFADACAEQADAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACACIAGAEIAJADIAHACIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgEADQgGADgFABIgMAAIgLAAg");
	this.shape_296.setTransform(170.7,180.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_297.setTransform(163,180.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAUBAIABAAIAVhAIANAAIgcBNg");
	this.shape_298.setTransform(155.2,180.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgGgCgHQgDgHABgIQgBgIADgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAIADQAGADAFAFQAFAGADAIQABAHAAAIQAAAIgBAHQgDAHgFAGQgFAGgGADIgIACIgJAAgAgIgaQgFACgDADQgEAFgBAFQgCAFAAAHQAAAGACAGQABAFAEAEQADAEAFACQAEACAEAAQAFAAAFgCQAEgCADgEQAEgEABgFQACgGAAgGQAAgHgCgFQgBgFgEgFQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_299.setTransform(147.1,180.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgFAFQgFAFgBAJIAAAwIgLAAIAAgyIgBgHQgBgDgBgCQgCgDgDgBIgHgBQgFAAgFACIgGAFQgCADgCAEIAAAFIAAAwIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACACAFQADAEAAAGIAAA4g");
	this.shape_300.setTransform(136.5,180);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_301.setTransform(122,180.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgEgEAAgGIANAAQAAADACADIAGADIAFACIAGABQAGAAAFgCQAEgCADgEQADgEABgGQACgFAAgGIAAgFIgBAAQgDAHgHAEQgHADgGAAQgIAAgHgDQgGgEgFgFQgFgFgCgIQgCgGAAgHIACgPQACgHAEgGQAFgFAGgEQAHgFAJAAQAIABAGADQAGADAEAHIAAgMIAMAAIAABGQAAAKgCAHQgDAHgEAFQgJAKgSgBIgKgBgAgIgpQgFACgDAEIgEAJIgBALIABALQABAEACAEQADAFAFACQAEACAFABQAGgBAEgCQAFgCADgFQACgEABgEIACgMIgCgKQAAgEgDgFQgDgDgEgCQgEgDgGAAQgGAAgDACg");
	this.shape_302.setTransform(113.4,181.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGADgIgBIgKAAQgFgBgDgDQgDgDgCgEQgCgEAAgGQAAgHACgEQACgEADgCIAJgEIAJgCIAKgBIAIgCIAFgDQACgBAAgEQAAgEgBgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAIIgMAAQAAgHACgEQADgGAEgCQAFgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgCgDgAAKACIgJABIgHABIgIACQgEACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAAEgCQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_303.setTransform(105.4,180.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgFgCgIQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFACAFABQAJAAAGgGQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGABgHAAQgIABgHgDg");
	this.shape_304.setTransform(97.2,180.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_305.setTransform(84.8,178.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_306.setTransform(78.5,178.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFAKAAIAAAOQgHAAgGACQgFACgDAEQgCAEgCAGQgCAGAAAGIAAAjg");
	this.shape_307.setTransform(74.9,180);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgHIAAgyIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgEQACgDACgEQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgBg");
	this.shape_308.setTransform(58.7,180.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgGgCgHQgCgHgBgIQABgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAHADQAIADAEAFQAFAGACAIQACAHAAAIQAAAIgCAHQgCAHgFAGQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgEAFgBAFQgCAFAAAHQAAAGACAGQABAFAEAEQADAEAEACQAFACAEAAQAFAAAEgCQAFgCADgEQAEgEACgFQABgGAAgGQAAgHgBgFQgCgFgEgFQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_309.setTransform(50.2,180.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgGA1IAAgrIgpg+IARAAIAfAyIAfgyIAQAAIgpA+IAAArg");
	this.shape_310.setTransform(42.7,178.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGACgIAAIgKAAQgFgBgDgEQgDgCgCgEQgCgEgBgGQABgGACgFQACgEADgCIAJgEIAJgCIAKgBIAIgCIAFgDQACgCAAgDQABgEgCgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAJIgMAAQAAgIACgEQADgGAFgCQAEgEAGgBQAFgBAHAAIAKAAQAFABAEACQAEADADAEQADAEAAAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGgBQgFAAgCgCgAAKACIgJABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIADAEIAFACIAGABQAGAAAEgCQAEgCADgDQADgCABgEIABgFIAAgMQgCABgDABg");
	this.shape_311.setTransform(193.5,215.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAEACAEQABACADACIAHADIAHABIAGgBIAGgBQADgCACgCQABgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgFgBgEgEQgEgFAAgIQAAgFADgFQACgEAEgCQAEgDAFgBIALgBQAFAAAGABQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgCACABADQAAADABACIAHAEIAIADIAIACIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgFAEgFABIgMAAIgMAAg");
	this.shape_312.setTransform(176.7,215.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgHAoIgIgCQgHgEgFgFQgFgGgCgHQgDgHAAgIQAAgIADgHQACgIAFgGQAFgFAHgDQAHgDAIAAQAKAAAGADQAIADAEAFQAFAGADAIQACAHAAAIQAAAIgCAHQgDAHgFAGQgEAFgIAEIgHACIgJAAgAgIgaQgFACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAGADADQADADAFADQAEACAEAAQAFAAAFgCQAEgDADgDQADgDACgGQACgGAAgGQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_313.setTransform(151.8,215.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQgBgDgCgCQgBgDgDgBIgHgBQgGAAgDACIgHAFQgDADAAAEIgBAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABAEADQADACABAFQACAEAAAGIAAA4g");
	this.shape_314.setTransform(141.1,215);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgGAnIgchNIAOAAIAVBAIAAAAIAVhAIAOAAIgdBNg");
	this.shape_315.setTransform(110.5,215.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIAAIgKAAQgEgBgEgEQgEgCgCgEQgCgEAAgGQAAgGACgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAGgDQACgCAAgDQgBgEgBgDIgEgEIgFgCIgFAAQgJAAgFADQgGADAAAJIgNAAQAAgIAEgEQACgGAEgCQAFgEAGgBQAGgBAGAAIAJAAQAGABAEACQAEADADAEQADAEgBAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGgBQgFAAgDgCgAAJACIgIABIgIABIgIACQgDABgCAEQgCADAAAEIABAFIADAEIAFACIAGABQAGAAADgCQAFgCADgDQADgCACgEIABgFIAAgMQgDABgEABg");
	this.shape_316.setTransform(77.9,215.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgCAHAAIAJAAIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHAAQgIAAgHgCgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_317.setTransform(69.8,215.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgDgGAAgGIANAAQAAADACADQABAEADABIAHADIAHAAIAGAAIAGgCQADgBACgCQACgCAAgEQAAgFgFgDQgDgCgGgBIgLgEIgMgDQgFgCgEgEQgEgEAAgIQAAgFACgEQADgEAEgDQAFgDAEgBIAKgBQAHAAAFABQAFABAFACQAEADADAFQACAFABAHIgNAAIgCgGIgEgFIgGgBIgFgBIgGABIgGABIgDADQgBACAAADQAAADACADIAGADIAHACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFACQgEADgGABIgMACIgMgCg");
	this.shape_318.setTransform(214.3,197.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgGIAGgDQAHgDAHAAIAJABIAHACQAGAEAFAFQAEAFADAIQACAHAAAIQAAAJgCAGQgDAHgEAGQgEAFgHADQgHADgJABIgFgBIgHgCIgGgDQgEgDgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAFIgBAKIABALQABAEADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgJIABgKQAAgGgBgFIgEgJQgDgFgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_319.setTransform(206.4,199);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgCQgFgBgDgDQgDgCgDgEQgBgEAAgGQAAgGABgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCABgEQAAgFgCgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHADgFQADgFAEgDQAFgDAGgBQAGgBAGAAIAKABQAFAAAEACQAFADACAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgDgDgAAKABIgJACIgIABIgIADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDAAg");
	this.shape_320.setTransform(156.9,197.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgDgEgBgHIANAAQAAAEACACIAGAEIAFADIAGAAQAGAAAFgCQAEgCADgEQADgEABgFQACgGAAgGIAAgFIgBAAQgDAHgHADQgGADgHAAQgIAAgHgDQgHgDgEgFQgFgFgCgHQgCgHAAgIIACgNQACgIAEgGQAFgGAGgEQAHgDAJAAQAIAAAGADQAGADAEAGIAAgKIALAAIAABGQAAAJgBAHQgDAHgEAFQgJAKgSAAIgKgCgAgJgpQgEACgDAFIgEAJIgBAKIABAKQABAFACAEQADAEAFADQADADAGgBQAGABAEgDQAFgDADgEQACgEABgFQACgFAAgFQAAgFgCgFQgBgGgCgDQgDgFgEgCQgEgCgGAAQgGAAgEACg");
	this.shape_321.setTransform(144.1,199.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgCQgEgBgEgDQgEgCgCgEQgCgEAAgGQAAgGACgFQADgEAEgDIAIgCIAJgDIAKgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgGgBQgIAAgFADQgFADgBAIIgNAAQABgHADgFQACgFAFgDQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_322.setTransform(111.8,197.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHgBgJQABgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAIADAEAGQAFAFACAHQACAIAAAHQAAAJgCAHQgCAHgFAGQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgEACgFQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_323.setTransform(85.3,197.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_324.setTransform(77,197.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgGgCgHQgCgHgBgIQABgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAHADQAIADAEAFQAFAGACAIQACAHAAAIQAAAIgCAHQgCAHgFAGQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFACAEAAQAFAAAEgCQAFgCADgEQAEgEACgFQABgGAAgGQAAgHgBgFQgCgFgEgFQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_325.setTransform(209.1,180.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgMAoQgFgCgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACADADADIAGACIAGABIAHgBIAGgBQADgBABgDQACgDABgDQgBgFgEgCQgDgDgGgCIgLgDIgMgDQgGgCgEgDQgDgFAAgHQAAgGACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgCACAAADQABADACACIAFAEIAIADIAIACIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgEADQgFADgGABIgMAAIgMAAg");
	this.shape_326.setTransform(188,180.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgFAnIgdhNIAOAAIAVBAIAAAAIAVhAIAOAAIgdBNg");
	this.shape_327.setTransform(172.5,180.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgGgCgHQgCgHgBgIQABgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAIADQAGADAFAFQAFAGACAIQACAHAAAIQAAAIgCAHQgCAHgFAGQgFAGgGADIgIACIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFACAEAAQAFAAAEgCQAFgCADgEQAEgEACgFQABgGAAgGQAAgHgBgFQgCgFgEgFQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_328.setTransform(164.4,180.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgFACIgGAFQgDADgBAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAHAAQAGAAAFACQAFABADADQAEACACAFQACAEAAAGIAAA4g");
	this.shape_329.setTransform(153.8,180);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgDgCQgBgDgDgBIgHgBQgFAAgEACIgHAFQgCADgBAEIgCAFIAAAwIgNAAIAAhNIAMAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACACAFQABAEAAAGIAAA4g");
	this.shape_330.setTransform(136.9,180);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgEgEAAgGIANAAQAAADACADIAGADIAFACIAGABQAGAAAFgCQAEgCADgEQADgEABgGQACgFAAgGIAAgFIgBAAQgDAHgHAEQgHADgGAAQgIAAgHgDQgGgEgFgFQgFgFgCgIQgCgGABgHIABgPQACgHAEgGQAFgFAGgEQAHgFAJAAQAIABAGADQAGADAEAHIAAgMIAMAAIAABGQAAAKgCAHQgDAHgEAFQgJAKgSgBIgKgBgAgIgpQgFACgDAEIgEAJIgBALIABALQABAEACAEQADAFAFACQAEACAFABQAGgBAEgCQAFgCADgFQACgEABgEIACgMIgCgKQAAgEgDgFQgDgDgEgCQgEgDgGAAQgGAAgDACg");
	this.shape_331.setTransform(126,181.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGADgIgBIgKAAQgFgBgDgDQgDgDgCgEQgCgEAAgGQAAgHACgEQACgEADgCIAJgEIAJgCIAKgBIAIgCIAFgDQACgBAAgEQAAgEgBgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAIIgMAAQAAgHACgEQADgGAFgCQAEgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgCgDgAAKACIgJABIgHABIgIACQgEACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAAEgCQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_332.setTransform(118,180.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgCAGABAGIAAAjg");
	this.shape_333.setTransform(111.8,180);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_334.setTransform(104.7,178.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgkA2IAAhqIANAAIAAALIAEgFIAGgFQAHgDAHAAIAJABIAHADQAGAEAFAFQAEAFADAIQACAHAAAJQAAAHgCAHQgDAHgEAGQgEAGgHADQgHACgJAAIgFAAIgHgCIgGgEQgEgCgCgDIAAAngAgLgnQgEACgDAEQgDAEgBAFIgBALIABALQABAFADAEQADADAFADQAEACAGABQAHgBAEgCQAFgDACgDIAEgJIABgLQAAgGgBgFIgEgKQgDgDgFgCQgFgDgFAAQgGAAgFADg");
	this.shape_335.setTransform(96.4,181.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGADgIgBIgKAAQgFgBgDgDQgDgDgCgEQgCgEAAgGQAAgHACgEQACgEADgCIAJgEIAJgCIAKgBIAIgCIAFgDQACgBAAgEQAAgEgBgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAIIgMAAQAAgHACgEQADgGAFgCQAEgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgCgDgAAKACIgJABIgHABIgIACQgEACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAAEgCQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_336.setTransform(87.9,180.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgGgCgHQgCgHAAgIQAAgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAIADQAGADAFAFQAFAGADAIQABAHAAAIQAAAIgBAHQgDAHgFAGQgFAGgGADIgIACIgJAAgAgIgaQgFACgDADQgEAFgBAFQgCAFAAAHQAAAGACAGQABAFAEAEQADAEAFACQAEACAEAAQAFAAAFgCQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_337.setTransform(49.8,180.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgPAAIAdgoIgbglIAQAAIASAbIATgbIAPAAIgaAkIAdApg");
	this.shape_338.setTransform(206.9,215.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIAAIgKAAQgEgBgEgEQgDgCgCgEQgCgEAAgGQAAgGACgFQACgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgCAAgDQAAgEgBgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgMAAQAAgIACgEQADgGAEgCQAFgEAGgBQAGgBAGAAIAKAAQAFABAEACQAFADACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGgBQgFAAgCgCgAAKACIgJABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCABgEIABgFIAAgMQgCABgDABg");
	this.shape_339.setTransform(199.1,215.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgYA2IgEgBIAAgMIAEACIAEAAQAEAAACgCQADgCABgDIAFgNIgehMIAOAAIAWA+IAAAAIAWg+IANAAIgiBXIgDAJIgFAHIgFADIgIABg");
	this.shape_340.setTransform(171,216.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_341.setTransform(165.6,213.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFgBAJIAAAwIgLAAIAAgyIgBgHQgBgDgBgCQgCgDgDgBIgHgBQgGAAgEACIgGAFQgDADgBAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABADADQADACADAFQACAEAAAGIAAA4g");
	this.shape_342.setTransform(148.7,215);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAEACAEQACACADACIAGADIAGABIAHgBIAGgBQADgCABgCQACgDAAgDQAAgFgDgCQgEgDgGgCIgLgCIgMgEQgFgBgFgEQgDgFAAgIQAAgFACgFQADgEAEgCQAFgDAFgBIAJgBQAGAAAGABQAFABAEADQAFADACAEQADAFABAHIgNAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgCACAAADQAAADADACIAFAEIAIADIAIACIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgFAEgGABIgMAAIgLAAg");
	this.shape_343.setTransform(135.3,215.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgEACIgHAFQgCADgCAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAGgEQAGgEAHAAQAGAAAFACQAFABADADQADACADAFQABAEAAAGIAAA4g");
	this.shape_344.setTransform(121,215);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgKA2QgGgBgFgDQgEgCgDgFQgEgEAAgGIANAAQABADACACIAEAFIAGABIAGABQAGAAAFgCQAEgCADgEQADgEABgGQABgEAAgHIAAgFIAAAAQgDAHgHAEQgHADgGAAQgIAAgHgDQgGgDgFgGQgFgFgCgIQgBgFAAgIQgBgHACgIQACgHAEgGQAFgFAGgFQAHgEAJABQAHAAAHADQAGADADAGIAAgLIANAAIAABGQAAAKgCAHQgDAHgEAFQgJAJgSAAIgKgBgAgIgpQgFACgDAEIgEAJIgBALIABALQABAEADAEQACAEAFADQAEADAFAAQAGAAAFgDQAEgDADgEQACgEABgEIACgMIgCgKQAAgEgDgFQgDgDgEgCQgEgDgGAAQgFAAgEACg");
	this.shape_345.setTransform(110.1,216.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgkA2IAAhqIANAAIAAALIAEgFIAGgFQAHgCAHAAIAJAAIAHADQAGADAFAGQAEAGADAHQACAHAAAJQAAAHgCAHQgDAHgEAGQgEAFgHAEQgHACgJAAIgFAAIgHgCIgGgEQgEgCgCgDIAAAngAgLgnQgEACgDAEQgDAEgBAFIgBALIABALQABAEADAFQADAEAFACQAEACAGABQAHgBAEgCQAFgCACgEIAEgJIABgMQAAgFgBgFIgEgKQgDgDgFgCQgFgDgFAAQgGAAgFADg");
	this.shape_346.setTransform(80.5,216.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGACgIAAIgKAAQgFgBgDgEQgDgCgCgEQgCgEgBgGQABgGACgFQACgEADgCIAJgEIAJgCIAKgBIAIgCIAFgDQACgCAAgDQABgEgCgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAJIgMAAQAAgIACgEQADgGAFgCQAEgEAGgBQAFgBAHAAIAKAAQAFABAEACQAEADADAEQADAEAAAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGgBQgFAAgCgCgAAKACIgJABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIADAEIAFACIAGABQAGAAAEgCQAEgCADgDQADgCABgEIABgFIAAgMQgCABgDABg");
	this.shape_347.setTransform(72,215.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIAAIgKgCQgEgBgEgDQgDgCgCgEQgCgEAAgGQAAgGACgFQACgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgMAAQAAgHACgFQADgFAEgDQAFgDAGgBQAGgBAGAAIAKABQAFAAAEACQAFADACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgCgDgAAKABIgJACIgHABIgJADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_348.setTransform(209.9,197.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgFgDgDgEQgCgEAAgHIAMAAQAAAEADACIAEAEIAHADIAFAAQAGAAAFgCQAFgCACgEQADgEABgFQACgGgBgGIAAgFIAAAAQgDAHgHADQgHADgGAAQgIAAgHgDQgGgDgFgFQgEgFgCgHQgCgHAAgIIABgNQACgIAEgGQAEgGAIgEQAGgDAJAAQAIAAAGADQAGADADAGIAAgKIAMAAIAABGQAAAJgCAHQgCAHgEAFQgJAKgSAAIgLgCgAgJgpQgEACgDAFIgEAJIgBAKIABAKQABAFADAEQACAEAEADQAFADAFgBQAGABAFgDQAEgDACgEQAEgEABgFIABgKIgBgKQgCgGgCgDQgCgFgFgCQgEgCgGAAQgFAAgFACg");
	this.shape_349.setTransform(189,199.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGADgIAAIgKgCQgEgBgEgDQgEgCgCgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgGgBQgIAAgFADQgFADgBAIIgNAAQABgHADgFQACgFAFgDQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_350.setTransform(181.1,197.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFALAAIAAAOQgIAAgFACQgGACgCAEQgEAEgBAGQgCAGABAGIAAAjg");
	this.shape_351.setTransform(150.5,197.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHAAQgIgBgFgCg");
	this.shape_352.setTransform(134.3,197.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFADAHQABAIAAAHQAAAJgBAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_353.setTransform(125.9,197.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIAEAAQADAAADgCQADgCABgDIAGgNIgghMIAPAAIAVA+IABAAIAWg+IANAAIghBXIgEAJIgEAHIgHADIgHABg");
	this.shape_354.setTransform(117.8,199.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFADAHQABAIABAHQgBAJgBAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_355.setTransform(86.3,197.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHAAQgIgBgFgCg");
	this.shape_356.setTransform(59.9,197.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgDgHAAgJQAAgHADgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAKAAAGADQAIADAEAGQAFAFADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgEAFgIADIgHADIgJABgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_357.setTransform(51.4,197.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgQAAIAegoIgbglIAQAAIASAbIATgbIAPAAIgbAkIAfApg");
	this.shape_358.setTransform(168,180.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgGgCgHQgDgHAAgIQAAgIADgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAKABAGADQAIADAEAFQAFAGACAIQADAHAAAIQAAAIgDAHQgCAHgFAGQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEQADgEADgFQABgGAAgGQAAgHgBgFQgDgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_359.setTransform(159.8,180.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgGgCgHQgDgHAAgIQAAgIADgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAKABAGADQAIADAEAFQAFAGADAIQACAHAAAIQAAAIgCAHQgDAHgFAGQgEAGgIADIgHACIgJAAgAgIgaQgFACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAFACQAEACAEAAQAFAAAFgCQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_360.setTransform(126.6,180.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_361.setTransform(111.4,180);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIgBIgKAAQgEgBgEgDQgDgDgCgEQgCgEAAgGQAAgHACgEQACgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgBAAgEQAAgEgBgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAIIgMAAQAAgHACgEQADgGAEgCQAFgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgCgDgAAKACIgJABIgHABIgJACQgDACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_362.setTransform(104.6,180.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgDgFAAgIIANAAQAAAFACACQABADADADIAHACIAHABIAGgBIAGgBQADgBACgDQACgDAAgDQAAgFgFgCQgDgDgGgCIgLgDIgMgDQgFgCgEgDQgEgFAAgHQAAgGACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADADAEQACAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACACIAGAEIAHADIAIACIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgFADQgEADgGABIgMAAIgMAAg");
	this.shape_363.setTransform(76.2,180.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgGgCgHQgDgHAAgIQAAgIADgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAKABAGADQAIADAEAFQAFAGACAIQADAHAAAIQAAAIgDAHQgCAHgFAGQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_364.setTransform(46.8,180.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgGA1IAAhdIgkAAIAAgMIBVAAIAAAMIgkAAIAABdg");
	this.shape_365.setTransform(39.9,178.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_366.setTransform(216.1,192.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgNIAAAAQgEAIgHADQgGAEgHAAQgIgBgFgCg");
	this.shape_367.setTransform(209.8,194.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAFAGQAFAFACAHQACAIAAAHQAAAJgCAHQgCAHgFAGQgFAFgHADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgEACgFQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_368.setTransform(201.3,194);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgPAAIAcgoIgbglIARAAIASAbIASgbIAQAAIgaAkIAdApg");
	this.shape_369.setTransform(168.8,194);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgDgHABgJQgBgHADgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFADAHQABAIAAAHQAAAJgBAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQAEgEABgFQACgFAAgIQAAgGgCgFQgBgFgEgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_370.setTransform(160.6,194);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgDgHABgJQgBgHADgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFACAHQACAIAAAHQAAAJgCAHQgCAHgFAGQgFAFgGADIgIADIgJABgAgJgaQgEACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQADgEADgFQABgFAAgIQAAgGgBgFQgDgFgDgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_371.setTransform(127.4,194);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGADgIAAIgKgCQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAKgDIAJgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgGgBQgIAAgFADQgFADgBAIIgNAAQABgHADgFQACgFAFgDQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAADgCQAFgBADgCQADgDACgDIABgGIAAgMQgDABgEAAg");
	this.shape_372.setTransform(105.5,194);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACADQACAEADABIAGADIAGAAIAHAAIAGgCQADgBABgCQACgCAAgEQAAgFgEgDQgDgCgGgBIgLgEIgMgDQgFgCgFgEQgDgEAAgIQAAgFACgEQADgEAEgDQAFgDAFgBIAJgBQAGAAAGABQAFABAEACQAFADACAFQADAFABAHIgNAAIgCgGIgFgFIgFgBIgFgBIgGABIgFABIgEADQgCACAAADQAAADADADIAFADIAIACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgFACgGABIgMACIgLgCg");
	this.shape_373.setTransform(85.3,194);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKIAEAKQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_374.setTransform(69.5,194);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_375.setTransform(56.5,194);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIgBIgKgBQgEAAgEgDQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgBAAgEQAAgEgBgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgIADgEQADgGAEgCQAFgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgCgDgAAKACIgJABIgHABIgJACQgDACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_376.setTransform(205,176.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgDIAHgDIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_377.setTransform(196.6,175.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_378.setTransform(190,175.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgLAnQgGgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQACADACADIAHACIAGABIAHgBIAGgBQADgBACgDQABgDAAgDQAAgFgDgCQgEgDgFgCIgMgDIgMgDQgGgCgDgDQgEgFAAgHQAAgGADgFQACgEAEgCQAEgDAGgBIAKgCQAFABAGABQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgBACAAADQgBADACACIAHAEIAIADIAIABIAJADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgFADQgFADgFAAIgMABIgLgBg");
	this.shape_379.setTransform(158.8,176.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgDgFAAgIIANAAQAAAFACACQABADADADIAHACIAHABIAGgBIAGgBQADgBACgDQACgDAAgDQAAgFgFgCQgDgDgGgCIgLgDIgMgDQgFgCgEgDQgEgFAAgHQAAgGACgFQADgEAEgCQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADADAEQACAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACACIAGAEIAHADIAIABIAKADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgFADQgEADgGAAIgMABIgMgBg");
	this.shape_380.setTransform(151.3,176.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_381.setTransform(109,176.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACADADADIAGACIAGABIAHgBIAGgBQADgBABgDQACgDABgDQgBgFgEgCQgDgDgGgCIgLgDIgMgDQgGgCgEgDQgDgFAAgHQAAgGACgFQADgEAEgCQAFgDAFgBIAJgCQAHABAFABQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgDIgFAAIgGAAIgFACIgEADQgCACAAADQABADACACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgEADQgFADgGAAIgMABIgLgBg");
	this.shape_382.setTransform(101.2,176.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIgBIgKgBQgFAAgDgDQgEgDgCgEQgBgEAAgGQAAgGABgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQADgBAAgEQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgIAEgEQACgGAEgCQAFgDAGgCQAFgBAHgBIAJABQAGABAEADQAEACADAEQADAEgBAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDABgGAAQgFABgDgDgAAJACIgIABIgIABIgIACQgDACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCACgDIABgGIAAgMQgDABgEABg");
	this.shape_383.setTransform(93.6,176.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_384.setTransform(85.4,176.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgBQgFgCgDgDQgEgCgCgEQgBgEAAgGQAAgHABgEQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgDQADgCAAgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgHAEgGQACgEAEgEQAFgDAGgBQAFgBAHAAIAKABQAFAAAEACQAEADADAEQADAEgBAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIAEAAIAAAJQgEADgGAAQgFAAgDgDgAAKABIgJACIgIABIgIADQgDAAgCADQgCAEAAAEIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgDAAg");
	this.shape_385.setTransform(210.1,159);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACAEQACADADABIAGADIAGAAIAHAAIAGgCQADAAABgDQACgDAAgDQAAgFgEgDQgDgCgGgBIgLgDIgMgEQgFgCgFgEQgDgEAAgIQAAgFACgFQADgDAEgDQAFgDAFgBIAKgBQAFAAAGABQAFABAEACQAFADACAFQADAFABAHIgNAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgCACAAADQAAADADADIAFADIAIACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAHgDAFQgDAEgEADQgFADgGACIgMABIgLgBg");
	this.shape_386.setTransform(193.3,159);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDADgBADQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_387.setTransform(185.6,159);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AATA1IAAg0IgBgGIgDgEIgFgDIgGgCQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_388.setTransform(177.4,157.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgFgCgHQgCgHAAgJQAAgHACgIQACgIAFgGQAEgFAHgDQAHgEAIABQAHAAAGABIAKAFQAEADADAFQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgFABgKIANAAQgBAIgDAGQgCAFgFAEQgEAEgGABQgGADgHAAQgIAAgHgDg");
	this.shape_389.setTransform(169.2,159);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgRAlQgFgBgDgEQgEgEgBgFQgBgFAAgGIAAgyIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgDQACgEACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgNIAAAAQgEAIgHADQgGAEgHAAQgIAAgFgDg");
	this.shape_390.setTransform(151.9,159.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHgBgJQABgHACgIQACgHAFgGQAFgFAHgDQAHgEAIABQAKgBAGAEQAIADAEAFQAFAGACAHQACAIABAHQgBAJgCAHQgCAHgFAGQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_391.setTransform(143.5,159);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgYA2IgEgBIAAgMIAEACIAEAAQAEAAACgCQADgCABgDIAFgNIgehMIAOAAIAVA+IABAAIAWg+IAOAAIgjBXIgDAJIgFAHIgFADIgIABg");
	this.shape_392.setTransform(135.4,160.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDADgBADQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_393.setTransform(123.6,159);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgCgGgBgGIANAAQAAADACAEQABADAEABIAGADIAGAAIAHAAIAGgCQADAAABgDQACgDAAgDQAAgFgDgDQgEgCgFgBIgMgDIgMgEQgGgCgEgEQgDgEAAgIQAAgFADgFQACgDAEgDQAEgDAGgBIAKgBQAFAAAGABQAFABAEACQAFADACAFQADAFAAAHIgMAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACADIAGADIAJACIAIADIAJACIAIADIAGAGQACAEAAAFQAAAHgDAFQgDAEgEADQgGADgFACIgMABIgLgBg");
	this.shape_394.setTransform(103.6,159);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDADgBADQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_395.setTransform(80.1,159);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgFgCgHQgCgHAAgJQAAgHACgIQACgIAFgGQAEgFAHgDQAHgEAIABQAHAAAGABIAKAFQAEADADAFQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgFABgKIANAAQgBAIgDAGQgCAFgFAEQgEAEgGABQgGADgHAAQgIAAgHgDg");
	this.shape_396.setTransform(72,159);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIAAIgKgBQgEgCgEgDQgDgCgCgEQgCgEAAgGQAAgHACgEQACgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgDQACgCAAgDQAAgEgBgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgMAAQAAgHACgGQADgEAEgEQAFgDAGgBQAGgBAGAAIAKABQAFAAAEACQAFADACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEADgGAAQgFAAgCgDgAAKABIgJACIgHABIgJADQgDAAgCADQgCAEAAAEIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_397.setTransform(64.1,159);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgGIAGgDQAHgDAHAAIAJABIAHACQAGADAFAGQAEAFADAIQACAHAAAIQAAAJgCAGQgDAHgEAGQgEAFgHADQgHAEgJAAIgFgBIgHgCIgGgEQgEgCgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAEIgBALIABALQABAEADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgJIABgLQAAgFgBgFIgEgJQgDgEgFgDQgFgCgFAAQgGAAgFACg");
	this.shape_398.setTransform(55.7,160.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgCgGgBgGIANAAQAAADACAEQABADAEABIAGADIAGAAIAHAAIAGgCQADAAABgDQACgDAAgDQAAgFgDgDQgEgCgFgBIgMgDIgMgEQgGgCgEgEQgDgEAAgIQAAgFADgFQACgDAEgDQAEgDAGgBIAKgBQAFAAAGABQAFABAEACQAFADADAFQACAFAAAHIgMAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgBACgBADQAAADACADIAGADIAJACIAIADIAJACIAIADIAGAGQACAEAAAFQAAAHgDAFQgDAEgEADQgGADgFACIgMABIgLgBg");
	this.shape_399.setTransform(47.3,159);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_400.setTransform(208.1,140.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACAEADACIAGACIAGAAIAHAAIAGgBQADgBABgDQACgDABgDQgBgFgEgCQgDgDgGgCIgLgDIgMgDQgGgCgEgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAFgBIAJgCQAHABAFABQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgCIgFgBIgGABIgFABIgEADQgCACAAADQABADACACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgEAEQgFACgGABIgMABIgLgBg");
	this.shape_401.setTransform(192.1,141.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIgBIgKgBQgFgBgDgCQgEgDgCgEQgBgEAAgGQAAgHABgEQADgEAEgCIAIgEIAKgCIAJgCIAIgBIAFgCQADgDAAgDQAAgEgCgDIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgGAEgFQACgGAEgCQAFgDAGgCQAFgBAHgBIAJABQAGABAEADQAEACADAEQADAEgBAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFABgDgDgAAJACIgIABIgIABIgIACQgDACgCADQgCADAAAEIABAFIAEAEIAEACIAGAAQAGAAADgBQAFgCADgDQADgCACgDIABgGIAAgMQgDABgEABg");
	this.shape_402.setTransform(184.5,141.5);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgHACgIQACgIAFgFQAEgGAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKIAEAKQADAEAEACQAFACAFAAQAJABAGgGQAFgEABgJIANAAQgBAHgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIABgHgDg");
	this.shape_403.setTransform(163.5,141.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_404.setTransform(146.8,140.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgDgFAAgIIANAAQAAAFACACQABAEADACIAHACIAHAAIAGAAIAGgBQADgBACgDQACgDAAgDQAAgFgFgCQgDgDgGgCIgLgDIgMgDQgFgCgEgEQgEgEAAgHQAAgGACgEQADgEAEgDQAFgDAEgBIAKgCQAHABAFABQAFABAFADQAEADADAEQACAFABAHIgNAAIgCgHIgEgDIgGgCIgFgBIgGABIgGABIgDADQgBACAAADQAAADACACIAGAEIAHADIAIABIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFAEQgEACgGABIgMABIgMgBg");
	this.shape_405.setTransform(134.7,141.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgyIANAAIAAA0IABAHIADAFQAEAEAHgBQAFAAAEgBQAFgCADgEQACgDACgEQABgEAAgGIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHgBQgIAAgFgCg");
	this.shape_406.setTransform(111.3,141.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACAEADACIAGACIAGAAIAHAAIAGgBQADgBABgDQACgDABgDQgBgFgEgCQgDgDgGgCIgLgDIgMgDQgGgCgEgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAFgBIAJgCQAHABAFABQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgCIgFgBIgGABIgFABIgEADQgCACAAADQABADACACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgEAEQgFACgGABIgMABIgLgBg");
	this.shape_407.setTransform(103.4,141.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgFIgFgDIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAEAAAGIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_408.setTransform(70.6,140.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgGA2IAAhfIgkAAIAAgLIBVAAIAAALIgkAAIAABfg");
	this.shape_409.setTransform(62.1,140.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_126},{t:this.shape_125,p:{x:71.7,y:188}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122,p:{x:102.7,y:188}},{t:this.shape_121,p:{x:116.6,y:188}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:146.6,y:186.8}},{t:this.shape_116,p:{x:150.8,y:186.5}},{t:this.shape_115},{t:this.shape_114,p:{x:168.3,y:186.6}},{t:this.shape_113},{t:this.shape_112,p:{x:185.6,y:188}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109,p:{x:210.9,y:186.5}},{t:this.shape_108,p:{x:215.5,y:187.9}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104,p:{x:98.6,y:204}},{t:this.shape_103,p:{x:104.4,y:205.4}},{t:this.shape_102,p:{x:110.7,y:204.3}},{t:this.shape_101},{t:this.shape_100,p:{x:129.7,y:207}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:161.1,y:204}},{t:this.shape_95},{t:this.shape_94,p:{x:175.2,y:205.4}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},82).to({state:[]},76).to({state:[{t:this.shape_228},{t:this.shape_227,p:{x:99.9,y:165}},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224,p:{x:114.3,y:164.9}},{t:this.shape_223},{t:this.shape_222,p:{x:127.4,y:166.3}},{t:this.shape_221},{t:this.shape_220,p:{x:141.4,y:166.3}},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216,p:{x:173.2,y:166.3}},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_109,p:{x:102.5,y:182.5}},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205,p:{x:126.8,y:183.8}},{t:this.shape_121,p:{x:132.6,y:183.9}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_112,p:{x:153.4,y:183.9}},{t:this.shape_202,p:{x:161.6,y:182.5}},{t:this.shape_201,p:{x:168.3,y:187}},{t:this.shape_200},{t:this.shape_199,p:{x:182.5,y:183.8}},{t:this.shape_198,p:{x:194.6,y:185.5}},{t:this.shape_125,p:{x:202.6,y:183.9}},{t:this.shape_197},{t:this.shape_196,p:{x:218.2,y:183.8}},{t:this.shape_195,p:{x:35.9,y:200}},{t:this.shape_194},{t:this.shape_193,p:{x:52.9,y:200}},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187,p:{x:99.5,y:201.3}},{t:this.shape_186,p:{x:109.9,y:200}},{t:this.shape_185,p:{x:116.2,y:200}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_103,p:{x:193.7,y:201.3}},{t:this.shape_114,p:{x:202.1,y:200}},{t:this.shape_108,p:{x:213.8,y:201.3}},{t:this.shape_104,p:{x:217.5,y:200}},{t:this.shape_176,p:{x:223.8,y:200}},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172,p:{x:62,y:218.9}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169,p:{x:93,y:218.8}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164,p:{x:132.9,y:218.9}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161,p:{x:153.9,y:218.9}},{t:this.shape_160,p:{x:160.8,y:218.8}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156,p:{x:195.4,y:218.8}},{t:this.shape_155,p:{x:201.3,y:218.9}},{t:this.shape_154},{t:this.shape_117,p:{x:215.5,y:217.8}},{t:this.shape_153,p:{x:222.1,y:218.9}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_122,p:{x:41.4,y:236.4}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{x:123.9,y:240.6}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136,p:{x:160.1,y:235}},{t:this.shape_135,p:{x:164.7,y:236.3}},{t:this.shape_134,p:{x:173.8,y:236.3}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:221.3,y:235}},{t:this.shape_94,p:{x:227.1,y:236.3}},{t:this.shape_127,p:{x:233.3,y:239.5}}]},18).to({state:[]},244).to({state:[{t:this.shape_310,p:{x:42.7}},{t:this.shape_309},{t:this.shape_308,p:{x:58.7}},{t:this.shape_222,p:{x:65.8,y:180}},{t:this.shape_307},{t:this.shape_306,p:{x:78.5}},{t:this.shape_305,p:{x:84.8}},{t:this.shape_304,p:{x:97.2,y:180.1}},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301,p:{x:122,y:180.1}},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297,p:{x:163,y:180.1}},{t:this.shape_296},{t:this.shape_295,p:{x:182.9}},{t:this.shape_294,p:{x:191.4,y:180.2}},{t:this.shape_293,p:{x:197.7,y:179}},{t:this.shape_292},{t:this.shape_216,p:{x:216.6,y:180}},{t:this.shape_114,p:{x:224.9,y:178.7}},{t:this.shape_291,p:{x:235.4,y:178.7}},{t:this.shape_199,p:{x:241.2,y:180}},{t:this.shape_122,p:{x:45.1,y:197.6}},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285,p:{x:91.4,y:197.6}},{t:this.shape_284},{t:this.shape_195,p:{x:112.5,y:196.2}},{t:this.shape_187,p:{x:119.7,y:197.5}},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281,p:{x:139.7}},{t:this.shape_280},{t:this.shape_201,p:{x:152.6,y:200.7}},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277,p:{x:185.1,y:197.6}},{t:this.shape_103,p:{x:193.2,y:197.5}},{t:this.shape_276,p:{x:203.7}},{t:this.shape_275,p:{x:210.3}},{t:this.shape_274,p:{x:218.6,y:197.6}},{t:this.shape_134,p:{x:229.6,y:197.5}},{t:this.shape_273},{t:this.shape_176,p:{x:239.6,y:196.2}},{t:this.shape_272,p:{x:41}},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269,p:{x:65.8}},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:106.8}},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_140,p:{x:146.1,y:219.3}},{t:this.shape_104,p:{x:154,y:213.7}},{t:this.shape_260},{t:this.shape_259,p:{x:168.6}},{t:this.shape_258,p:{x:176.9}},{t:this.shape_96,p:{x:182.5,y:213.7}},{t:this.shape_257,p:{x:188.8}},{t:this.shape_256},{t:this.shape_255,p:{x:208.7}},{t:this.shape_108,p:{x:215.6,y:215}},{t:this.shape_254,p:{x:221.5}},{t:this.shape_253},{t:this.shape_252,p:{x:235.7}},{t:this.shape_251,p:{x:242.3}},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248,p:{x:58.4,y:232.5}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_94,p:{x:124.5,y:232.5}},{t:this.shape_198,p:{x:136.5,y:234.2}},{t:this.shape_240},{t:this.shape_239},{t:this.shape_196,p:{x:160.1,y:232.5}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_109,p:{x:232.3,y:231.2}},{t:this.shape_230},{t:this.shape_229,p:{x:242.4,y:234.2}},{t:this.shape_127,p:{x:247,y:235.7}}]},12).to({state:[]},212).to({state:[{t:this.shape_310,p:{x:42.3}},{t:this.shape_337,p:{x:49.8}},{t:this.shape_294,p:{x:58.3,y:180.2}},{t:this.shape_134,p:{x:65.4,y:180}},{t:this.shape_193,p:{x:75.7,y:178.7}},{t:this.shape_291,p:{x:82,y:178.7}},{t:this.shape_336},{t:this.shape_335,p:{x:96.4,y:181.5}},{t:this.shape_334,p:{x:104.7}},{t:this.shape_333,p:{x:111.8,y:180}},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_297,p:{x:180.3,y:180.1}},{t:this.shape_326},{t:this.shape_186,p:{x:200.1,y:178.7}},{t:this.shape_325},{t:this.shape_122,p:{x:219,y:180.1}},{t:this.shape_220,p:{x:228.9,y:180}},{t:this.shape_176,p:{x:57.1,y:196.2}},{t:this.shape_229,p:{x:65.1,y:199.2}},{t:this.shape_324},{t:this.shape_323},{t:this.shape_216,p:{x:93.8,y:197.5}},{t:this.shape_281,p:{x:100.1}},{t:this.shape_169,p:{x:105.6,y:197.5}},{t:this.shape_322},{t:this.shape_285,p:{x:119.7,y:197.6}},{t:this.shape_276,p:{x:125.9}},{t:this.shape_109,p:{x:130,y:196.2}},{t:this.shape_199,p:{x:135.8,y:197.5}},{t:this.shape_321},{t:this.shape_320},{t:this.shape_103,p:{x:164.9,y:197.5}},{t:this.shape_114,p:{x:173.3,y:196.2}},{t:this.shape_275,p:{x:186.2}},{t:this.shape_274,p:{x:194.5,y:197.6}},{t:this.shape_116,p:{x:200.1,y:196.2}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_272,p:{x:57}},{t:this.shape_135,p:{x:63.9,y:215}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_252,p:{x:84}},{t:this.shape_269,p:{x:90.6}},{t:this.shape_265,p:{x:102.8}},{t:this.shape_315},{t:this.shape_258,p:{x:118.3}},{t:this.shape_94,p:{x:126.4,y:215}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_160,p:{x:159,y:215}},{t:this.shape_254,p:{x:164.9}},{t:this.shape_312},{t:this.shape_257,p:{x:185.1}},{t:this.shape_311,p:{x:193.5}},{t:this.shape_255,p:{x:201.4}},{t:this.shape_251,p:{x:209.5}},{t:this.shape_127,p:{x:215.5,y:218.2}}]},12).to({state:[]},149).to({state:[{t:this.shape_365},{t:this.shape_364},{t:this.shape_335,p:{x:59.9,y:181.5}},{t:this.shape_308,p:{x:68.3}},{t:this.shape_363},{t:this.shape_334,p:{x:84.1}},{t:this.shape_304,p:{x:96.4,y:180.1}},{t:this.shape_362},{t:this.shape_361,p:{x:111.4,y:180}},{t:this.shape_305,p:{x:118.1}},{t:this.shape_360},{t:this.shape_103,p:{x:135,y:180}},{t:this.shape_227,p:{x:147.5,y:178.7}},{t:this.shape_306,p:{x:153.8}},{t:this.shape_359},{t:this.shape_358},{t:this.shape_291,p:{x:173.5,y:178.7}},{t:this.shape_202,p:{x:179.3,y:178.7}},{t:this.shape_297,p:{x:188.1,y:180.1}},{t:this.shape_295,p:{x:200.5}},{t:this.shape_294,p:{x:208.9,y:180.2}},{t:this.shape_293,p:{x:215.3,y:179}},{t:this.shape_337,p:{x:226.2}},{t:this.shape_224,p:{x:232.8,y:178.6}},{t:this.shape_198,p:{x:43.4,y:199.2}},{t:this.shape_357},{t:this.shape_356},{t:this.shape_196,p:{x:67,y:197.5}},{t:this.shape_195,p:{x:77.8,y:196.2}},{t:this.shape_355},{t:this.shape_193,p:{x:94.8,y:196.2}},{t:this.shape_100,p:{x:103.2,y:199.2}},{t:this.shape_140,p:{x:107.8,y:201.8}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_156,p:{x:141.4,y:197.5}},{t:this.shape_351},{t:this.shape_109,p:{x:154.2,y:196.2}},{t:this.shape_176,p:{x:160.5,y:196.2}},{t:this.shape_285,p:{x:172.9,y:197.6}},{t:this.shape_350},{t:this.shape_349},{t:this.shape_274,p:{x:197.6,y:197.6}},{t:this.shape_348},{t:this.shape_94,p:{x:217.9,y:197.5}},{t:this.shape_186,p:{x:226.3,y:196.2}},{t:this.shape_114,p:{x:59.9,y:213.7}},{t:this.shape_185,p:{x:66.2,y:213.7}},{t:this.shape_347},{t:this.shape_346},{t:this.shape_259,p:{x:88.9}},{t:this.shape_134,p:{x:96,y:215}},{t:this.shape_311,p:{x:102.2}},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_104,p:{x:140.7,y:213.7}},{t:this.shape_342},{t:this.shape_257,p:{x:159.7}},{t:this.shape_341},{t:this.shape_340},{t:this.shape_135,p:{x:181.8,y:215}},{t:this.shape_251,p:{x:187.7}},{t:this.shape_96,p:{x:193.3,y:213.7}},{t:this.shape_339},{t:this.shape_338},{t:this.shape_127,p:{x:212.8,y:218.2}}]},15).to({state:[]},160).to({state:[{t:this.shape_409},{t:this.shape_408},{t:this.shape_172,p:{x:78.8,y:141.5}},{t:this.shape_205,p:{x:89.9,y:141.4}},{t:this.shape_164,p:{x:95.7,y:141.5}},{t:this.shape_407},{t:this.shape_406},{t:this.shape_116,p:{x:117.1,y:140.1}},{t:this.shape_117,p:{x:121,y:140.4}},{t:this.shape_109,p:{x:129.3,y:140.1}},{t:this.shape_405},{t:this.shape_404},{t:this.shape_161,p:{x:155.5,y:141.5}},{t:this.shape_403},{t:this.shape_248,p:{x:170.5,y:141.4}},{t:this.shape_155,p:{x:176.3,y:141.5}},{t:this.shape_402},{t:this.shape_401},{t:this.shape_153,p:{x:199.9,y:141.5}},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_185,p:{x:89.9,y:157.6}},{t:this.shape_216,p:{x:95.7,y:158.9}},{t:this.shape_394},{t:this.shape_104,p:{x:109,y:157.6}},{t:this.shape_227,p:{x:114.8,y:157.6}},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_160,p:{x:159,y:158.9}},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_102,p:{x:199.3,y:157.9}},{t:this.shape_385},{t:this.shape_199,p:{x:218.1,y:158.9}},{t:this.shape_202,p:{x:226.5,y:157.6}},{t:this.shape_291,p:{x:58.6,y:175.1}},{t:this.shape_103,p:{x:64.4,y:176.4}},{t:this.shape_304,p:{x:72.6,y:176.5}},{t:this.shape_196,p:{x:79.6,y:176.4}},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_193,p:{x:117.2,y:175.1}},{t:this.shape_335,p:{x:130.6,y:177.9}},{t:this.shape_108,p:{x:137.8,y:176.4}},{t:this.shape_301,p:{x:143.6,y:176.5}},{t:this.shape_380},{t:this.shape_379},{t:this.shape_294,p:{x:166.7,y:176.6}},{t:this.shape_134,p:{x:173.8,y:176.4}},{t:this.shape_297,p:{x:179.7,y:176.5}},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_293,p:{x:211,y:175.4}},{t:this.shape_224,p:{x:50.1,y:192.5}},{t:this.shape_375},{t:this.shape_361,p:{x:63.7,y:193.9}},{t:this.shape_374},{t:this.shape_277,p:{x:77.6,y:194}},{t:this.shape_373},{t:this.shape_285,p:{x:97.3,y:194}},{t:this.shape_372},{t:this.shape_333,p:{x:112.3,y:193.9}},{t:this.shape_176,p:{x:118.9,y:192.6}},{t:this.shape_371},{t:this.shape_94,p:{x:135.9,y:193.9}},{t:this.shape_186,p:{x:148.4,y:192.6}},{t:this.shape_136,p:{x:154.7,y:192.6}},{t:this.shape_370},{t:this.shape_369},{t:this.shape_128,p:{x:174.3,y:192.6}},{t:this.shape_114,p:{x:180.2,y:192.6}},{t:this.shape_274,p:{x:188.9,y:194}},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_127,p:{x:220.7,y:197.1}}]},14).wait(261));

	// CO2 arrow
	this.instance = new lib.CO2arrow();
	this.instance.parent = this;
	this.instance.setTransform(449,113.2,1,1,0,-14,166,-9.2,-33.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(846).to({_off:false},0).wait(409));

	// O2 arrow
	this.instance_1 = new lib.O2arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(509.6,147.9,1,1,0,0,0,7.9,9.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(432).to({_off:false},0).to({_off:true},373).wait(450));

	// rib cage
	this.instance_2 = new lib.ribcage();
	this.instance_2.parent = this;
	this.instance_2.setTransform(368.8,273.6,0.847,1,0,0,0,65.5,98);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({_off:false},0).wait(1).to({regX:65.4,regY:100.3,x:368.7,y:275.9},0).wait(350).to({scaleX:0.85,x:368.8},0).wait(1).to({scaleX:0.85,x:368.9},0).wait(1).to({scaleX:0.85,x:369},0).wait(1).to({scaleX:0.85,x:369.1},0).wait(1).to({scaleX:0.86,x:369.2},0).wait(1).to({scaleX:0.86,x:369.3},0).wait(1).to({scaleX:0.86},0).wait(1).to({scaleX:0.86,x:369.5},0).wait(1).to({scaleX:0.86},0).wait(1).to({scaleX:0.87,x:369.6},0).wait(1).to({scaleX:0.87,x:369.7},0).wait(1).to({scaleX:0.87,x:369.8},0).wait(1).to({scaleX:0.87,x:369.9},0).wait(1).to({scaleX:0.87,x:370},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.88,x:370.2},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.88,x:370.3},0).wait(1).to({scaleX:0.88,x:370.4},0).wait(1).to({scaleX:0.89,x:370.5},0).wait(1).to({scaleX:0.89,x:370.6},0).wait(1).to({scaleX:0.89,x:370.7},0).wait(1).to({scaleX:0.89,x:370.8},0).wait(1).to({scaleX:0.89,x:370.9},0).wait(1).to({scaleX:0.9,x:371},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.9,x:371.1},0).wait(1).to({scaleX:0.9,x:371.2},0).wait(1).to({scaleX:0.9,x:371.3},0).wait(1).to({scaleX:0.91,x:371.4},0).wait(1).to({scaleX:0.91,x:371.5},0).wait(1).to({scaleX:0.91,x:371.6},0).wait(1).to({scaleX:0.91,x:371.7},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.91,x:371.8},0).wait(1).to({scaleX:0.92,x:371.9},0).wait(1).to({scaleX:0.92,x:372},0).wait(1).to({scaleX:0.92,x:372.1},0).wait(1).to({scaleX:0.92,x:372.2},0).wait(1).to({scaleX:0.92,x:372.3},0).wait(1).to({scaleX:0.93,x:372.4},0).wait(1).to({scaleX:0.93,x:372.5},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,x:372.7},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.94,x:372.8},0).wait(1).to({scaleX:0.94,x:372.9},0).wait(1).to({scaleX:0.94,x:373},0).wait(1).to({scaleX:0.94,x:373.1},0).wait(1).to({scaleX:0.94,x:373.2},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.95,x:373.4},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.95,x:373.5},0).wait(1).to({scaleX:0.95,x:373.6},0).wait(1).to({scaleX:0.96,x:373.7},0).wait(1).to({scaleX:0.96,x:373.8},0).wait(1).to({scaleX:0.96,x:373.9},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.96,x:374.1},0).wait(1).to({scaleX:0.96,x:374.2},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97,x:374.3},0).wait(1).to({scaleX:0.97,x:374.4},0).wait(1).to({scaleX:0.97,x:374.5},0).wait(1).to({scaleX:0.97,x:374.6},0).wait(1).to({scaleX:0.98,x:374.7},0).wait(1).to({scaleX:0.98,x:374.8},0).wait(1).to({scaleX:0.98,x:374.9},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.98,x:375},0).wait(1).to({scaleX:0.99,x:375.1},0).wait(1).to({scaleX:0.99,x:375.2},0).wait(1).to({scaleX:0.99,x:375.3},0).wait(1).to({scaleX:0.99,x:375.4},0).wait(1).to({scaleX:0.99,x:375.5},0).wait(1).to({scaleX:1,x:375.6},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1,x:375.8},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1,x:375.9},0).wait(1).to({scaleX:1,x:376},0).wait(1).to({scaleX:1.01,x:376.1},0).wait(1).to({scaleX:1.01,x:376.2},0).wait(1).to({scaleX:1.01,x:376.3},0).wait(1).to({scaleX:1.01,x:376.4},0).wait(1).to({scaleX:1.01,x:376.5},0).wait(1).to({scaleX:1.02,x:376.6},0).wait(1).to({scaleX:1.02},0).wait(1).to({scaleX:1.02,x:376.7},0).wait(1).to({scaleX:1.02,x:376.8},0).wait(1).to({scaleX:1.02,x:376.9},0).wait(1).to({scaleX:1.03,x:377},0).wait(1).to({scaleX:1.03,x:377.1},0).wait(1).to({scaleX:1.03,x:377.2},0).wait(1).to({scaleX:1.03,x:377.3},0).wait(1).to({scaleX:1.03},0).wait(1).to({scaleX:1.04,x:377.4},0).wait(1).to({scaleX:1.04,x:377.5},0).wait(1).to({scaleX:1.04,x:377.6},0).wait(310).to({scaleX:1.04,x:377.5},0).wait(1).to({scaleX:1.04,x:377.4},0).wait(1).to({scaleX:1.03,x:377.3},0).wait(1).to({scaleX:1.03},0).wait(1).to({scaleX:1.03,x:377.2},0).wait(1).to({scaleX:1.03,x:377.1},0).wait(1).to({scaleX:1.03,x:377},0).wait(1).to({scaleX:1.02,x:376.9},0).wait(1).to({scaleX:1.02,x:376.8},0).wait(1).to({scaleX:1.02,x:376.7},0).wait(1).to({scaleX:1.02,x:376.6},0).wait(1).to({scaleX:1.02},0).wait(1).to({scaleX:1.01,x:376.5},0).wait(1).to({scaleX:1.01,x:376.4},0).wait(1).to({scaleX:1.01,x:376.3},0).wait(1).to({scaleX:1.01,x:376.2},0).wait(1).to({scaleX:1.01,x:376.1},0).wait(1).to({scaleX:1,x:376},0).wait(1).to({scaleX:1,x:375.9},0).wait(1).to({scaleX:1,x:375.8},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1,x:375.6},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.99,x:375.5},0).wait(1).to({scaleX:0.99,x:375.4},0).wait(1).to({scaleX:0.99,x:375.3},0).wait(1).to({scaleX:0.99,x:375.2},0).wait(1).to({scaleX:0.99,x:375.1},0).wait(1).to({scaleX:0.98,x:375},0).wait(1).to({scaleX:0.98,x:374.9},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.98,x:374.8},0).wait(1).to({scaleX:0.98,x:374.7},0).wait(1).to({scaleX:0.97,x:374.6},0).wait(1).to({scaleX:0.97,x:374.5},0).wait(1).to({scaleX:0.97,x:374.4},0).wait(1).to({scaleX:0.97,x:374.3},0).wait(1).to({scaleX:0.97,x:374.2},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.96,x:374.1},0).wait(1).to({scaleX:0.96,x:373.9},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.96,x:373.8},0).wait(1).to({scaleX:0.96,x:373.7},0).wait(1).to({scaleX:0.95,x:373.6},0).wait(1).to({scaleX:0.95,x:373.5},0).wait(1).to({scaleX:0.95,x:373.4},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.95,x:373.2},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.94,x:373.1},0).wait(1).to({scaleX:0.94,x:373},0).wait(1).to({scaleX:0.94,x:372.9},0).wait(1).to({scaleX:0.94,x:372.8},0).wait(1).to({scaleX:0.93,x:372.7},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,x:372.5},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,x:372.4},0).wait(1).to({scaleX:0.92,x:372.3},0).wait(1).to({scaleX:0.92,x:372.2},0).wait(1).to({scaleX:0.92,x:372.1},0).wait(1).to({scaleX:0.92,x:372},0).wait(1).to({scaleX:0.92,x:371.9},0).wait(1).to({scaleX:0.91,x:371.8},0).wait(1).to({scaleX:0.91,x:371.7},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.91,x:371.6},0).wait(1).to({scaleX:0.91,x:371.5},0).wait(1).to({scaleX:0.91,x:371.4},0).wait(1).to({scaleX:0.9,x:371.3},0).wait(1).to({scaleX:0.9,x:371.2},0).wait(1).to({scaleX:0.9,x:371.1},0).wait(1).to({scaleX:0.9,x:371},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.89,x:370.9},0).wait(1).to({scaleX:0.89,x:370.8},0).wait(1).to({scaleX:0.89,x:370.7},0).wait(1).to({scaleX:0.89,x:370.6},0).wait(1).to({scaleX:0.89,x:370.5},0).wait(1).to({scaleX:0.88,x:370.4},0).wait(1).to({scaleX:0.88,x:370.3},0).wait(1).to({scaleX:0.88,x:370.2},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.88,x:370},0).wait(1).to({scaleX:0.87},0).wait(1).to({scaleX:0.87,x:369.9},0).wait(1).to({scaleX:0.87,x:369.8},0).wait(1).to({scaleX:0.87,x:369.7},0).wait(1).to({scaleX:0.87,x:369.6},0).wait(1).to({scaleX:0.86,x:369.5},0).wait(1).to({scaleX:0.86},0).wait(1).to({scaleX:0.86,x:369.3},0).wait(1).to({scaleX:0.86},0).wait(1).to({scaleX:0.86,x:369.2},0).wait(1).to({scaleX:0.85,x:369.1},0).wait(1).to({scaleX:0.85,x:369},0).wait(1).to({scaleX:0.85,x:368.9},0).wait(1).to({scaleX:0.85,x:368.8},0).wait(1).to({scaleX:0.85,x:368.7},0).wait(314));

	// diaphragm
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(373.3,377.6,0.835,1.064,0,0,0,48.5,33.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).wait(1).to({regY:31.2,x:373.2,y:374.9},0).wait(350).to({scaleX:0.84,scaleY:1.06,x:373.3},0).wait(1).to({scaleX:0.84,x:373.4},0).wait(1).to({scaleX:0.84,scaleY:1.06,x:373.5,y:375},0).wait(1).to({scaleX:0.84,scaleY:1.06},0).wait(1).to({scaleX:0.84,x:373.6},0).wait(1).to({scaleX:0.85,scaleY:1.06,x:373.7},0).wait(1).to({scaleX:0.85,x:373.8},0).wait(1).to({scaleX:0.85,scaleY:1.06,x:373.9,y:375.1},0).wait(1).to({scaleX:0.85,scaleY:1.06},0).wait(1).to({scaleX:0.85,x:374},0).wait(1).to({scaleX:0.85,scaleY:1.06,x:374.1},0).wait(1).to({scaleX:0.86,scaleY:1.06,x:374.2},0).wait(1).to({scaleX:0.86,x:374.3,y:375.2},0).wait(1).to({scaleX:0.86,scaleY:1.06},0).wait(1).to({scaleX:0.86,scaleY:1.05,x:374.4},0).wait(1).to({scaleX:0.86,x:374.5},0).wait(1).to({scaleX:0.86,scaleY:1.05,x:374.6},0).wait(1).to({scaleX:0.87,scaleY:1.05,x:374.7,y:375.3},0).wait(1).to({scaleX:0.87,x:374.8},0).wait(1).to({scaleX:0.87,scaleY:1.05,x:374.9},0).wait(1).to({scaleX:0.87,x:375},0).wait(1).to({scaleX:0.87,scaleY:1.05},0).wait(1).to({scaleX:0.87,scaleY:1.05,x:375.1,y:375.4},0).wait(1).to({scaleX:0.88,x:375.2},0).wait(1).to({scaleX:0.88,scaleY:1.05,x:375.3},0).wait(1).to({scaleX:0.88,scaleY:1.05,x:375.4},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.88,scaleY:1.05,x:375.5,y:375.5},0).wait(1).to({scaleX:0.88,scaleY:1.05,x:375.6},0).wait(1).to({scaleX:0.89,x:375.7},0).wait(1).to({scaleX:0.89,scaleY:1.04,x:375.8},0).wait(1).to({scaleX:0.89},0).wait(1).to({scaleX:0.89,scaleY:1.04,x:375.9,y:375.6},0).wait(1).to({scaleX:0.89,scaleY:1.04,x:376},0).wait(1).to({scaleX:0.89,x:376.1},0).wait(1).to({scaleX:0.89,scaleY:1.04,x:376.2},0).wait(1).to({scaleX:0.9,scaleY:1.04},0).wait(1).to({scaleX:0.9,x:376.3,y:375.7},0).wait(1).to({scaleX:0.9,scaleY:1.04,x:376.4},0).wait(1).to({scaleX:0.9,scaleY:1.04,x:376.5},0).wait(1).to({scaleX:0.9,x:376.6},0).wait(1).to({scaleX:0.9,scaleY:1.04},0).wait(1).to({scaleX:0.91,scaleY:1.04,x:376.7,y:375.8},0).wait(1).to({scaleX:0.91,x:376.8},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:376.9},0).wait(1).to({scaleX:0.91,x:377},0).wait(1).to({scaleX:0.91,scaleY:1.03},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:377.1,y:375.9},0).wait(1).to({scaleX:0.92,x:377.2},0).wait(1).to({scaleX:0.92,scaleY:1.03,x:377.3},0).wait(1).to({scaleX:0.92,scaleY:1.03,x:377.4},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.92,scaleY:1.03,x:377.5,y:376},0).wait(1).to({scaleX:0.92,scaleY:1.03,x:377.6},0).wait(1).to({scaleX:0.93,x:377.7},0).wait(1).to({scaleX:0.93,scaleY:1.03,x:377.8},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,scaleY:1.03,x:377.9,y:376.1},0).wait(1).to({scaleX:0.93,scaleY:1.03,x:378},0).wait(1).to({scaleX:0.93,x:378.1},0).wait(1).to({scaleX:0.94,scaleY:1.02,x:378.2},0).wait(1).to({scaleX:0.94,scaleY:1.02},0).wait(1).to({scaleX:0.94,x:378.3,y:376.2},0).wait(1).to({scaleX:0.94,scaleY:1.02,x:378.4},0).wait(1).to({scaleX:0.94,scaleY:1.02,x:378.5},0).wait(1).to({scaleX:0.94,x:378.6},0).wait(1).to({scaleX:0.95,scaleY:1.02},0).wait(1).to({scaleX:0.95,scaleY:1.02,x:378.7,y:376.3},0).wait(1).to({scaleX:0.95,x:378.8},0).wait(1).to({scaleX:0.95,scaleY:1.02,x:378.9},0).wait(1).to({scaleX:0.95,x:379},0).wait(1).to({scaleX:0.95,scaleY:1.02},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:379.1,y:376.4},0).wait(1).to({scaleX:0.96,x:379.2},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:379.3},0).wait(1).to({scaleX:0.96,scaleY:1.01,x:379.4},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.96,scaleY:1.01,x:379.5,y:376.5},0).wait(1).to({scaleX:0.97,scaleY:1.01,x:379.6},0).wait(1).to({scaleX:0.97,x:379.7},0).wait(1).to({scaleX:0.97,scaleY:1.01,x:379.8},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97,scaleY:1.01,x:379.9,y:376.6},0).wait(1).to({scaleX:0.97,scaleY:1.01,x:380},0).wait(1).to({scaleX:0.98,x:380.1},0).wait(1).to({scaleX:0.98,scaleY:1.01,x:380.2},0).wait(1).to({scaleX:0.98,scaleY:1.01},0).wait(1).to({scaleX:0.98,x:380.3,y:376.7},0).wait(1).to({scaleX:0.98,scaleY:1.01,x:380.4},0).wait(1).to({scaleX:0.98,scaleY:1.01,x:380.5},0).wait(1).to({scaleX:0.99,x:380.6},0).wait(1).to({scaleX:0.99,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:1,x:380.7,y:376.8},0).wait(1).to({scaleX:0.99,x:380.8},0).wait(1).to({scaleX:0.99,scaleY:1,x:380.9},0).wait(1).to({scaleX:0.99,x:381},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:381.1,y:376.9},0).wait(1).to({scaleX:1,x:381.2},0).wait(1).to({scaleX:1,scaleY:1,x:381.3},0).wait(310).to({scaleX:1,scaleY:1,x:381.2},0).wait(1).to({scaleX:1,x:381.1},0).wait(1).to({scaleX:1,scaleY:1,x:381,y:376.8},0).wait(1).to({scaleX:0.99,scaleY:1},0).wait(1).to({scaleX:0.99,x:380.9},0).wait(1).to({scaleX:0.99,scaleY:1,x:380.8},0).wait(1).to({scaleX:0.99,x:380.7},0).wait(1).to({scaleX:0.99,scaleY:1,x:380.6,y:376.7},0).wait(1).to({scaleX:0.99,scaleY:1.01},0).wait(1).to({scaleX:0.98,x:380.5},0).wait(1).to({scaleX:0.98,scaleY:1.01,x:380.4},0).wait(1).to({scaleX:0.98,scaleY:1.01,x:380.3},0).wait(1).to({scaleX:0.98,x:380.2,y:376.6},0).wait(1).to({scaleX:0.98,scaleY:1.01},0).wait(1).to({scaleX:0.98,scaleY:1.01,x:380.1},0).wait(1).to({scaleX:0.97,x:380},0).wait(1).to({scaleX:0.97,scaleY:1.01,x:379.9},0).wait(1).to({scaleX:0.97,scaleY:1.01,x:379.8,y:376.5},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97,scaleY:1.01,x:379.7},0).wait(1).to({scaleX:0.97,x:379.6},0).wait(1).to({scaleX:0.96,scaleY:1.01,x:379.5},0).wait(1).to({scaleX:0.96,scaleY:1.01,x:379.4,y:376.4},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:379.3},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:379.2},0).wait(1).to({scaleX:0.96,x:379.1},0).wait(1).to({scaleX:0.95,scaleY:1.02,x:379,y:376.3},0).wait(1).to({scaleX:0.95,scaleY:1.02},0).wait(1).to({scaleX:0.95,x:378.9},0).wait(1).to({scaleX:0.95,scaleY:1.02,x:378.8},0).wait(1).to({scaleX:0.95,x:378.7},0).wait(1).to({scaleX:0.95,scaleY:1.02,x:378.6,y:376.2},0).wait(1).to({scaleX:0.94,scaleY:1.02},0).wait(1).to({scaleX:0.94,x:378.5},0).wait(1).to({scaleX:0.94,scaleY:1.02,x:378.4},0).wait(1).to({scaleX:0.94,scaleY:1.02,x:378.3},0).wait(1).to({scaleX:0.94,x:378.2,y:376.1},0).wait(1).to({scaleX:0.94,scaleY:1.02},0).wait(1).to({scaleX:0.93,scaleY:1.03,x:378.1},0).wait(1).to({scaleX:0.93,x:378},0).wait(1).to({scaleX:0.93,scaleY:1.03,x:377.9},0).wait(1).to({scaleX:0.93,scaleY:1.03,x:377.8,y:376},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,scaleY:1.03,x:377.7},0).wait(1).to({scaleX:0.92,x:377.6},0).wait(1).to({scaleX:0.92,scaleY:1.03,x:377.5},0).wait(1).to({scaleX:0.92,scaleY:1.03,x:377.4,y:375.9},0).wait(1).to({scaleX:0.92},0).wait(1).to({scaleX:0.92,scaleY:1.03,x:377.3},0).wait(1).to({scaleX:0.92,scaleY:1.03,x:377.2},0).wait(1).to({scaleX:0.91,x:377.1},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:377,y:375.8},0).wait(1).to({scaleX:0.91,scaleY:1.03},0).wait(1).to({scaleX:0.91,x:376.9},0).wait(1).to({scaleX:0.91,scaleY:1.04,x:376.8},0).wait(1).to({scaleX:0.91,x:376.7},0).wait(1).to({scaleX:0.9,scaleY:1.04,x:376.6,y:375.7},0).wait(1).to({scaleX:0.9,scaleY:1.04},0).wait(1).to({scaleX:0.9,x:376.5},0).wait(1).to({scaleX:0.9,scaleY:1.04,x:376.4},0).wait(1).to({scaleX:0.9,scaleY:1.04,x:376.3},0).wait(1).to({scaleX:0.9,x:376.2,y:375.6},0).wait(1).to({scaleX:0.89,scaleY:1.04},0).wait(1).to({scaleX:0.89,scaleY:1.04,x:376.1},0).wait(1).to({scaleX:0.89,x:376},0).wait(1).to({scaleX:0.89,scaleY:1.04,x:375.9},0).wait(1).to({scaleX:0.89,scaleY:1.04,x:375.8,y:375.5},0).wait(1).to({scaleX:0.89},0).wait(1).to({scaleX:0.89,scaleY:1.05,x:375.7},0).wait(1).to({scaleX:0.88,x:375.6},0).wait(1).to({scaleX:0.88,scaleY:1.05,x:375.5},0).wait(1).to({scaleX:0.88,scaleY:1.05,x:375.4,y:375.4},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.88,scaleY:1.05,x:375.3},0).wait(1).to({scaleX:0.88,scaleY:1.05,x:375.2},0).wait(1).to({scaleX:0.87,x:375.1},0).wait(1).to({scaleX:0.87,scaleY:1.05,x:375,y:375.3},0).wait(1).to({scaleX:0.87,scaleY:1.05},0).wait(1).to({scaleX:0.87,x:374.9},0).wait(1).to({scaleX:0.87,scaleY:1.05,x:374.8},0).wait(1).to({scaleX:0.87,x:374.7},0).wait(1).to({scaleX:0.86,scaleY:1.05,x:374.6,y:375.2},0).wait(1).to({scaleX:0.86,scaleY:1.05,x:374.5},0).wait(1).to({scaleX:0.86,x:374.4},0).wait(1).to({scaleX:0.86,scaleY:1.06,x:374.3},0).wait(1).to({scaleX:0.86,scaleY:1.06},0).wait(1).to({scaleX:0.86,x:374.2,y:375.1},0).wait(1).to({scaleX:0.85,scaleY:1.06,x:374.1},0).wait(1).to({scaleX:0.85,scaleY:1.06,x:374},0).wait(1).to({scaleX:0.85,x:373.9},0).wait(1).to({scaleX:0.85,scaleY:1.06},0).wait(1).to({scaleX:0.85,scaleY:1.06,x:373.8,y:375},0).wait(1).to({scaleX:0.85,x:373.7},0).wait(1).to({scaleX:0.84,scaleY:1.06,x:373.6},0).wait(1).to({scaleX:0.84,x:373.5},0).wait(1).to({scaleX:0.84,scaleY:1.06},0).wait(1).to({scaleX:0.84,scaleY:1.06,x:373.4,y:374.9},0).wait(1).to({scaleX:0.84,x:373.3},0).wait(1).to({scaleX:0.84,scaleY:1.06,x:373.2},0).wait(314));

	// lungs
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(369.9,273.6,0.871,1,0,0,0,54,92.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({_off:false},0).wait(1).to({regX:53.8,x:369.7},0).wait(350).to({scaleX:0.87,x:369.8},0).wait(1).to({scaleX:0.88,x:369.9},0).wait(1).to({scaleX:0.88,x:370},0).wait(1).to({scaleX:0.88,x:370.1},0).wait(1).to({scaleX:0.88,x:370.2},0).wait(1).to({scaleX:0.88,x:370.3},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.89,x:370.4},0).wait(1).to({scaleX:0.89,x:370.5,y:273.7},0).wait(1).to({scaleX:0.89,x:370.6},0).wait(1).to({scaleX:0.89,x:370.7},0).wait(1).to({scaleX:0.89,x:370.8},0).wait(1).to({scaleX:0.89,x:370.9},0).wait(1).to({scaleX:0.9,x:371},0).wait(1).to({scaleX:0.9,x:371.1},0).wait(1).to({scaleX:0.9,x:371.2},0).wait(1).to({scaleX:0.9,x:371.3},0).wait(1).to({scaleX:0.9,x:371.4},0).wait(1).to({scaleX:0.9,x:371.5},0).wait(1).to({scaleX:0.91,x:371.6},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.91,x:371.7},0).wait(1).to({scaleX:0.91,x:371.8},0).wait(1).to({scaleX:0.91,x:371.9},0).wait(1).to({scaleX:0.91,x:372,y:273.8},0).wait(1).to({scaleX:0.92,x:372.1},0).wait(1).to({scaleX:0.92,x:372.2},0).wait(1).to({scaleX:0.92,x:372.3},0).wait(1).to({scaleX:0.92,x:372.4},0).wait(1).to({scaleX:0.92,x:372.5},0).wait(1).to({scaleX:0.93,x:372.6},0).wait(1).to({scaleX:0.93,x:372.7},0).wait(1).to({scaleX:0.93,x:372.8},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,x:372.9},0).wait(1).to({scaleX:0.93,x:373},0).wait(1).to({scaleX:0.94,x:373.1},0).wait(1).to({scaleX:0.94,x:373.2},0).wait(1).to({scaleX:0.94,x:373.3},0).wait(1).to({scaleX:0.94,x:373.4},0).wait(1).to({scaleX:0.94,x:373.5},0).wait(1).to({scaleX:0.94,x:373.6,y:273.9},0).wait(1).to({scaleX:0.95,x:373.7},0).wait(1).to({scaleX:0.95,x:373.8},0).wait(1).to({scaleX:0.95,x:373.9},0).wait(1).to({scaleX:0.95,x:374},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.95,x:374.1},0).wait(1).to({scaleX:0.96,x:374.2},0).wait(1).to({scaleX:0.96,x:374.3},0).wait(1).to({scaleX:0.96,x:374.4},0).wait(1).to({scaleX:0.96,x:374.5},0).wait(1).to({scaleX:0.96,x:374.6},0).wait(1).to({scaleX:0.96,x:374.7},0).wait(1).to({scaleX:0.97,x:374.8},0).wait(1).to({scaleX:0.97,x:374.9},0).wait(1).to({scaleX:0.97,x:375},0).wait(1).to({scaleX:0.97,x:375.1},0).wait(1).to({scaleX:0.97,x:375.2,y:274},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.98,x:375.3},0).wait(1).to({scaleX:0.98,x:375.4},0).wait(1).to({scaleX:0.98,x:375.5},0).wait(1).to({scaleX:0.98,x:375.6},0).wait(1).to({scaleX:0.98,x:375.7},0).wait(1).to({scaleX:0.99,x:375.8},0).wait(1).to({scaleX:0.99,x:375.9},0).wait(1).to({scaleX:0.99,x:376},0).wait(1).to({scaleX:0.99,x:376.1},0).wait(1).to({scaleX:0.99,x:376.2},0).wait(1).to({scaleX:0.99,x:376.3},0).wait(1).to({scaleX:1,x:376.4},0).wait(1).to({scaleX:1,x:376.5},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1,x:376.6,y:274.1},0).wait(1).to({scaleX:1,x:376.7},0).wait(1).to({scaleX:1,x:376.8},0).wait(1).to({scaleX:1,x:376.9},0).wait(1).to({scaleX:1.01,x:377},0).wait(1).to({scaleX:1.01,x:377.1},0).wait(1).to({scaleX:1.01,x:377.2},0).wait(1).to({scaleX:1.01,x:377.3},0).wait(1).to({scaleX:1.01,x:377.4},0).wait(1).to({scaleX:1.02,x:377.5},0).wait(1).to({scaleX:1.02,x:377.6},0).wait(1).to({scaleX:1.02,x:377.7},0).wait(1).to({scaleX:1.02},0).wait(1).to({scaleX:1.02,x:377.8},0).wait(1).to({scaleX:1.02,x:377.9},0).wait(1).to({scaleX:1.03,x:378},0).wait(1).to({scaleX:1.03,x:378.1},0).wait(1).to({scaleX:1.03,x:378.2,y:274.2},0).wait(1).to({scaleX:1.03,x:378.3},0).wait(1).to({scaleX:1.03,x:378.4},0).wait(1).to({scaleX:1.03,x:378.5},0).wait(1).to({scaleX:1.04,x:378.6},0).wait(1).to({scaleX:1.04,x:378.7},0).wait(1).to({scaleX:1.04,x:378.8},0).wait(1).to({scaleX:1.04,x:378.9},0).wait(1).to({scaleX:1.04},0).wait(310).to({scaleX:1.04},0).wait(1).to({scaleX:1.04,x:378.8},0).wait(1).to({scaleX:1.04,x:378.7},0).wait(1).to({scaleX:1.04,x:378.6},0).wait(1).to({scaleX:1.03,x:378.5},0).wait(1).to({scaleX:1.03,x:378.4},0).wait(1).to({scaleX:1.03,x:378.3},0).wait(1).to({scaleX:1.03,x:378.2},0).wait(1).to({scaleX:1.03,x:378.1,y:274.1},0).wait(1).to({scaleX:1.03,x:378},0).wait(1).to({scaleX:1.02,x:377.9},0).wait(1).to({scaleX:1.02,x:377.8},0).wait(1).to({scaleX:1.02,x:377.7},0).wait(1).to({scaleX:1.02},0).wait(1).to({scaleX:1.02,x:377.6},0).wait(1).to({scaleX:1.02,x:377.5},0).wait(1).to({scaleX:1.01,x:377.4},0).wait(1).to({scaleX:1.01,x:377.3},0).wait(1).to({scaleX:1.01,x:377.2},0).wait(1).to({scaleX:1.01,x:377.1},0).wait(1).to({scaleX:1.01,x:377},0).wait(1).to({scaleX:1,x:376.9},0).wait(1).to({scaleX:1,x:376.8},0).wait(1).to({scaleX:1,x:376.7},0).wait(1).to({scaleX:1,x:376.6},0).wait(1).to({scaleX:1,x:376.5,y:274},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1,x:376.4},0).wait(1).to({scaleX:0.99,x:376.3},0).wait(1).to({scaleX:0.99,x:376.2},0).wait(1).to({scaleX:0.99,x:376.1},0).wait(1).to({scaleX:0.99,x:376},0).wait(1).to({scaleX:0.99,x:375.9},0).wait(1).to({scaleX:0.99,x:375.8},0).wait(1).to({scaleX:0.98,x:375.7},0).wait(1).to({scaleX:0.98,x:375.6},0).wait(1).to({scaleX:0.98,x:375.5},0).wait(1).to({scaleX:0.98,x:375.4},0).wait(1).to({scaleX:0.98,x:375.3},0).wait(1).to({scaleX:0.97,x:375.2},0).wait(1).to({scaleX:0.97},0).wait(1).to({scaleX:0.97,x:375.1,y:273.9},0).wait(1).to({scaleX:0.97,x:375},0).wait(1).to({scaleX:0.97,x:374.9},0).wait(1).to({scaleX:0.97,x:374.8},0).wait(1).to({scaleX:0.96,x:374.7},0).wait(1).to({scaleX:0.96,x:374.6},0).wait(1).to({scaleX:0.96,x:374.5},0).wait(1).to({scaleX:0.96,x:374.4},0).wait(1).to({scaleX:0.96,x:374.3},0).wait(1).to({scaleX:0.96,x:374.2},0).wait(1).to({scaleX:0.95,x:374.1},0).wait(1).to({scaleX:0.95,x:374},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.95,x:373.9},0).wait(1).to({scaleX:0.95,x:373.8},0).wait(1).to({scaleX:0.95,x:373.7},0).wait(1).to({scaleX:0.94,x:373.6},0).wait(1).to({scaleX:0.94,x:373.5,y:273.8},0).wait(1).to({scaleX:0.94,x:373.4},0).wait(1).to({scaleX:0.94,x:373.3},0).wait(1).to({scaleX:0.94,x:373.2},0).wait(1).to({scaleX:0.94,x:373.1},0).wait(1).to({scaleX:0.93,x:373},0).wait(1).to({scaleX:0.93,x:372.9},0).wait(1).to({scaleX:0.93,x:372.8},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.93,x:372.7},0).wait(1).to({scaleX:0.93,x:372.6},0).wait(1).to({scaleX:0.92,x:372.5},0).wait(1).to({scaleX:0.92,x:372.4},0).wait(1).to({scaleX:0.92,x:372.3},0).wait(1).to({scaleX:0.92,x:372.2},0).wait(1).to({scaleX:0.92,x:372.1},0).wait(1).to({scaleX:0.91,x:372},0).wait(1).to({scaleX:0.91,x:371.9,y:273.7},0).wait(1).to({scaleX:0.91,x:371.8},0).wait(1).to({scaleX:0.91,x:371.7},0).wait(1).to({scaleX:0.91,x:371.6},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:0.9,x:371.5},0).wait(1).to({scaleX:0.9,x:371.4},0).wait(1).to({scaleX:0.9,x:371.3},0).wait(1).to({scaleX:0.9,x:371.2},0).wait(1).to({scaleX:0.9,x:371.1},0).wait(1).to({scaleX:0.9,x:371},0).wait(1).to({scaleX:0.89,x:370.9},0).wait(1).to({scaleX:0.89,x:370.8},0).wait(1).to({scaleX:0.89,x:370.7},0).wait(1).to({scaleX:0.89,x:370.6},0).wait(1).to({scaleX:0.89,x:370.5},0).wait(1).to({scaleX:0.89,x:370.4,y:273.6},0).wait(1).to({scaleX:0.88,x:370.3},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.88,x:370.2},0).wait(1).to({scaleX:0.88,x:370.1},0).wait(1).to({scaleX:0.88,x:370},0).wait(1).to({scaleX:0.88,x:369.9},0).wait(1).to({scaleX:0.87,x:369.8},0).wait(1).to({scaleX:0.87,x:369.7},0).wait(314));

	// Layer 1
	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AhIIuQgDgfgOgsQgUg8gEgNQgUhUgCg/QgEh2ARivQAIhhAGgwQALhUAUg6QAPgsAqhFQAuhMAOgiQAJgUAvgHQAwgGgIASQgOAggwBOQgqBEgOAtQgSA9gLBRQgFAmgKBrQgLBugCAwQgFBbAIBFQAKBUAUA7QANAnAFASQAKAgACAbQACAWgvAMQgSAEgMAAQgUAAgBgMg");
	this.shape_410.setTransform(331.5,249.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#373535").ss(1.5).p("AiahLIADgYIBRAWICEgPIApAFIAFAJQAGAOADATQADAZAKAhQADALAUAzIiOAbIhcgzIgjhHg");
	this.shape_411.setTransform(362.1,357.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AhQAyIgjhHIgmg3IADgYIBRAWICEgPIApAFIAFAJQAGAOADATQADAZAKAhQADALAUAzIiOAbg");
	this.shape_412.setTransform(362,357.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("Ai7A8QgBgcAPgXQAPgYAbgKIAAAGQAmgnBzgBQBpgCA6AYQAFAbgEAXQgEAagOARQgNgng7gPQgqgKg2ADQgdABhEAjQg4AegcAAIgGgBg");
	this.shape_413.setTransform(402.3,117.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#373535").ss(1.7).p("AFXjqQAFgLgHgLQgKgMgDgHQgBgDAAgHQgBgGgBgEQgFgIgNgSQgYgggHgJQgTgXgUgPQgygqhDgDQhFgDgzAqQgHAGgIALQgJAMgFAFQgPANgeAVQgdATgOAKQgYAQgPASQgOAQgJAZQgLAegJANQgKAPgNAhQgQAogEAKQgRAigFAoQgEAgAEArQAGA7gPBJQgIArgaBYQgMAngYA5QgGANAFAEQAEAEAPACQAbACAMAEQAFgGAEgSQAFgQAGgJQALgOAdgaQAbgZALgQQAHgLAMgXQAMgYAHgKQAHgLATgQQASgRAHgKQAQgWgEgQQgDgKgMgKQgSgPgCgCQgRgTgLgmQgIgggCgeQgBgNAAgIQgBgQAEgDQAJgJAHAIQAGAHABALQABAFABAPQABANAFADQAMAJAMgNQAKgJADgOQABgHAAgRQgBgQADgJQACgLAJgLQAEgGANgNQAXgYAlgDQASgCA1AGQA6AFAwAdQALAHATAIQAWAJAHAEQAFACANALQALAJAIACQAZAFgBgcQAAgWgLgUQgGgMAEgEQADgCAMgHQARgNgHgTQgKgRgDgHQgFgMAPgHQAKgEAOgDQAKgEAGgP");
	this.shape_414.setTransform(395.2,137.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#EB81A2").s().p("AlFG3QgPgCgEgEQgFgEAGgNQAYg5AMgnQAahYAIgrQAPhJgGg7QgEgrAEggQAFgoARgiIAUgyQANghAKgPQAJgNALgeQAJgZAOgQQAPgSAYgQIArgdQAegVAPgNQAFgFAJgMQAIgLAHgGQAzgqBFADQBDADAyAqQAUAPATAXIAfApQANASAFAIQABAEABAGIABAKQADAHAKAMQAHALgFALIAEAAQgGAPgKAEQgOADgKAEQgPAHAFAMIANAYQAHATgRANIgPAJQgEAEAGAMQALAUAAAWQABAcgZgFQgIgCgLgJIgSgNIgdgNQgTgIgLgHQgwgdg6gFQg1gGgSACQglADgXAYIgRATQgJALgCALQgDAJABAQQAAARgBAHQgDAOgKAJQgMANgMgJQgFgDgBgNIgCgUQgBgLgGgHQgHgIgJAJQgEADABAQIABAVQACAeAIAgQALAmARATIAUARQAMAKADAKQAEAQgQAWQgHAKgSARQgTAQgHALQgHAKgMAYQgMAXgHALQgLAQgbAZQgdAagLAOQgGAJgFAQQgEASgFAGQgMgEgbgCg");
	this.shape_415.setTransform(395.2,137.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#373535").ss(1.7).p("ACLh6QAhATgLAlQgtAXgWAbQgPAcgHANQgNAXgXACQAJATgVApQgTAngUAMQgWAMgwgPQg7gSgSAAQgGg2BBhhQBJhvAIgqQAhgGA1AcQA7AgAcAB");
	this.shape_416.setTransform(372.1,167.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AhVCeQg7gSgSAAQgGg2BBhhQBJhvAIgqQAhgGA1AcQA7AgAcABIgMgNQAhATgLAlQgtAXgWAbIgWApQgNAXgXACQAJATgVApQgTAngUAMQgKAFgPAAQgTAAgagIg");
	this.shape_417.setTransform(372.1,167.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#373535").ss(1.5).p("AgkgoQANgGACgGQACgGAPgEQANgFAIAAQAIAAAnAcQAMAIAEALQABADACAPQABAJAAAYQgIAFgLAEQgXAIgTgCQgKgBgQAIQgOAGgGAHQgHAHgQgOQgBgBgIgRQgIgRgJgGQgMgJACgVQABgWAQgBQAPAAAOgFg");
	this.shape_418.setTransform(336.1,343.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AguA7IgJgSQgIgRgJgGQgMgJACgVQABgWAQgBQAPAAAOgFQANgGACgGQACgGAPgEQANgFAIAAQAIAAAnAcQAMAIAEALIADASQABAJAAAYQgIAFgLAEQgXAIgTgCQgKgBgQAIQgOAGgGAHQgDACgDAAQgHAAgKgJg");
	this.shape_419.setTransform(336.1,343.3);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#373535").ss(1.5).p("AjkAHQBZgRAJAAQAIAAACgGIAFgQQgJgTABgGQABgZAGgMQAHgNAOgHQASgJAXAKQATAHANAJQAJAHADAAQAHAAARAAIDUgkIgGAQQgGATgBATQAAAVANApQALAjAGAIQAEAHAGALQgbAGgSAEQgJABgzAEQgzADgIACQgVAFgLABQgVACACgPQAJgYADgKQAFgSgVgEQgWgFgNAUQgKAOgCAUQgJA9gfAJQgVAFgMgHQgLgIABgQQACgVgBgHQgDgLgNAEQgdALg2AfQgSAKgOgDQgPgEgGgSQgJgdABgUQACggAZgFg");
	this.shape_420.setTransform(354.2,376.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AhUB8QgLgIABgQQACgVgCgHQgDgLgNAEQgcALg3AfQgSAKgOgDQgPgEgFgSQgJgdABgUQABggAagFQBZgRAJAAQAHAAADgGIAEgQQgIgTAAgGQACgZAGgMQAGgNAOgHQATgJAWAKQATAHANAJQAJAHADAAIAZAAIDTgkIgGAQQgGATAAATQAAAVANApQALAjAFAIIAKASIgsAKQgJABg0AEQgzADgIACQgVAFgLABQgUACACgPIALgiQAFgSgUgEQgWgFgOAUQgKAOgCAUQgIA9ggAJQgIACgIAAQgJAAgHgEg");
	this.shape_421.setTransform(354.1,376.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#373535").ss(1.5).p("AhfAAQARgGAHgFQAIgFAKgEQAFgCADgBQgDgRAGgGQgKgMAAgIQgDgHgBgKQgCgTALgLQANgMAPAEQAOACAKANQANAPAcARIA/A0IAUAbQgLgEgMgCQgYgGgHAGQgIAEgfAdQggAdgMACIgPAEQg0AfgJAQQgGAKgKgBQgMgEgHgDQgLgDgGgOQgFgNACgNQADgaACgIQAFgXAJgGQAHgFASgFg");
	this.shape_422.setTransform(341.4,363.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AheB7IgTgHQgLgDgGgOQgFgNACgNIAFgiQAFgXAJgGQAHgFASgFQARgGAHgFQAIgFAKgEIAIgDQgDgRAGgGQgKgMAAgIQgDgHgBgKQgCgTALgLQANgMAPAEQANACALANQANAPAcARIA/A0IAUAbIgXgGQgYgGgHAGQgIAEgfAdQggAdgMACIgPAEQg0AfgJAQQgGAJgHAAIgDAAg");
	this.shape_423.setTransform(340.8,363.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#373535").ss(1.5).p("AguAiQAVgEAPAAQAwAAAHADQAHAEATAHQAUAIAGABQAJABAIgtIADg0IgZgLQgYAKgdAGQgSAEgOABIgJABQhAANgCAAQgkALgFASQgIAfABAHQABANAWgKQAWgLAZgGg");
	this.shape_424.setTransform(325.4,191);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("Ah0AwQgBgHAIgfQAFgSAkgLIBDgNIAJgBQAOgBASgEQAdgGAXgKIAZALIgDA0QgHAtgJgBQgHgBgUgIQgSgHgHgEQgHgDgwAAQgPAAgVAEQgaAGgWALQgKAEgFAAQgHAAgBgHg");
	this.shape_425.setTransform(325.3,191);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#373535").ss(1.5).p("ABVhLIgfAWQgXAQgTALQgjAWgWADQgYACgLAKQgHAHgFANQgUA+AsgWQAvgXAgACQAKAAAngKIAYADIAOhwg");
	this.shape_426.setTransform(318.3,203.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AhbAfQAEgOAHgGQALgKAYgCQAWgDAkgWIApgbIAfgWIAOAFIgPBwIgYgCQgmAKgLgBQgggBguAWQgMAGgHAAQgUAAAPgtg");
	this.shape_427.setTransform(318.2,203.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#373535").ss(1.5).p("AABgiQggAigKACQgMADgJAPQgIAOgBATQgBANgEAVQgCAMALgIQBEg2ARgHQARgHAegYIAMhcQgSgDgQARQgIAIgiAlg");
	this.shape_428.setTransform(307.7,235.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AhMBXQAFgVAAgNQABgTAJgOQAJgPAMgDQAKgCAfgiIAqgtQAQgRASADIgMBcQgdAYgRAHQgSAHhDA2QgFADgCAAQgEAAABgHg");
	this.shape_429.setTransform(307.7,235.5);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#373535").ss(1.5).p("ABNhdQgSgDgQARQgZAbgRASQggAigKACQgMADgJAPQgIAPgBASQAAANgFAVQgCAMALgIQAbgUARgMQAfgZALgEQARgHAdgYg");
	this.shape_430.setTransform(311.4,220.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AhMBXQAFgVAAgNQABgSAJgPQAJgPAMgDQAKgCAfgiIArgtQAQgRARADIgLBcQgeAYgRAHQgKAEgfAZIgsAgQgFADgCAAQgEAAABgHg");
	this.shape_431.setTransform(311.3,220.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#373535").ss(1.5).p("AAZhSQgPAYgLAXQgFALgMAiQgJAYgJAKQgKAMgBAEQAAADABAJQAAAIgBARQAAAPACACIAGAHQAFACAJgNQAog8AVgDIAMg+IAAhhQgIAHgPAXg");
	this.shape_432.setTransform(307.6,255);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgnB1IgGgHQgCgCAAgPIABgZIgBgMQABgEAKgMQAJgKAJgYQAMgiAFgLQALgXAPgYQAPgXAIgHIAABhIgMA+QgVADgoA8QgIALgFAAIgBAAg");
	this.shape_433.setTransform(307.6,255.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#373535").ss(1.5).p("AAnhhQgGAJgTAWQgKAMgGAQQgEALgIAZQgGARgFAIQgEAIgKAOQgIANADAKIAMAoIAGADQAHABAHgKQAMgSAPgZQADgFAJgcQAJgbABgFQABgCAFgGQADgFAAgJQAAgLgDgeg");
	this.shape_434.setTransform(309.3,275.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AgaBoIgGgCIgMgpQgDgKAIgMQAKgOAEgIQAFgIAGgSIAMgkQAGgPAKgNQATgWAGgJIAEAdQADAeAAAKQAAAKgDAEIgGAJIgKAgQgJAcgDAFQgPAYgMATQgHAJgGAAIgBgBg");
	this.shape_435.setTransform(309.3,276.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#373535").ss(1.5).p("AgeB9QAMAGAKgTQAlhNAIggQAEgQACgXIABgTIgfg6QgGAYgUBAQgUA6gJAZQgEAOALAlQAFAOAAACIAAAAQgBACgHgI");
	this.shape_436.setTransform(310.3,291.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgeB3IAAgBIgFgQQgLglAEgNIAdhTQAUhBAGgXIAfA6IgBATQgCAWgEARQgIAgglBMQgIAPgIAAIgGgBg");
	this.shape_437.setTransform(310.3,292.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#373535").ss(1.5).p("AAvgKIgmhjIAAAEQgEAYgHAiQgLAtgGALQgFALgRAkQgMAiAMAVQAGAJAHAHQAGAFACAAQABAAANgRQAPgWAFgGQAHgIAIgXQAJgWAEgEQAIgIgDggg");
	this.shape_438.setTransform(315.3,307.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgcBzQgHgGgGgJQgMgWAMghIAWguQAGgNALgsQAHgjAEgXIAAgEIAmBiQADAhgIAIQgEAEgJAWQgIAXgHAIIgUAbQgNASgBAAQgCAAgGgGg");
	this.shape_439.setTransform(315.3,308.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#373535").ss(1.5).p("AgRg3QgEARgJAaQgJAegGAIQgIANgCAOQgDATAJAQQAIAQAFgBQAIgGAGgFQAHgGAOgRQAPgTACgBQANgLALgJQAKgKAGgpQgCgIgCgJQgFgQgBAAQgDgBgcgTIgBgYIgRgCIgFAOQgFARgEAPg");
	this.shape_440.setTransform(322.7,324.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgxBYQgIgQACgTQADgPAHgMQAGgJAKgdQAJgbADgQIAKghIAFgOIARACIABAZQAbATADAAQACABAEAQIAFAQQgGAqgLAJIgYAUIgQAVQgOARgIAFIgNALIgBABQgFAAgIgPg");
	this.shape_441.setTransform(322.7,324.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#373535").ss(1.5).p("AAfhiQAJABAHACIAaAnIgCALQgCALABACQADADgDAiIgWAZQgbAXgEAAIgPgCQgOAngTAHQgPAHgIgEQgJgFgCgUQgBgOgEgIQgEgFABgGQACgKALgNQAOgPAFgFQATgYADgEQALgQABgOQACgPAFgNQAFgMAFgBQAEgBARADg");
	this.shape_442.setTransform(328.5,337.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("Ag2BkQgJgFgBgUQgCgOgEgIQgDgFABgGQABgKAMgNIASgUIAXgcQAKgQACgOQACgPAEgNQAGgMAEgBQAEgBARADIARADIAaAnIgDALQgCALACACQACADgCAiIgXAZQgaAXgFAAIgPgCQgOAngSAHQgKAEgHAAQgEAAgDgBg");
	this.shape_443.setTransform(328.5,337.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#373535").ss(1.5).p("AhVg1QARgFAagHQANgEA0AAQAyAAASADQAfAGAHARQAHAOgEAaQgBAKgHAGQgIAIgNgEQgMgEgegDIgdgCIgxANQgGABgIABQgPADgIAFQgLAGgLAFQgHAEgGAGQgIAKgKAGQgNAGgDgIQgGgOgDgYQgDghALgTQAKgSAdgLg");
	this.shape_444.setTransform(339.1,354.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("Ah7BCQgGgOgDgYQgDghALgTQAKgSAdgLQARgFAagHQANgEA0AAQAyAAASADQAfAGAHARQAHAOgEAaQgBAKgHAGQgIAIgNgEQgMgEgegDIgdgCIgxANIgOACQgPADgIAFIgWALQgHAEgGAGQgIAKgKAGQgGACgEAAQgEAAgCgEg");
	this.shape_445.setTransform(339.1,354.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#373535").ss(1.5).p("AgvAlQARAHAIALQAKAOAWALIAygXIBAhFIAPgZQAWgTACgHQAFgSgbABQgKAAghARQglATgcAGQgvAKgRAEQgcAFgJgBQgQgFgKgDQgRgGgIAEQgKAEgLAPQgLAMgGAQQgGARAAAGQACAKAPAAQAKAAAWgKQAWgJAMAAQASAAAPAGg");
	this.shape_446.setTransform(336,179.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgWA3QgIgLgRgGQgPgGgSgBQgMAAgWAKQgWAJgKAAQgPAAgCgJQAAgHAGgRQAGgPALgNQALgPAKgEQAIgDARAFIAaAIQAJACAcgGIBAgOQAcgGAlgTQAhgRAKAAQAbgBgFATQgCAHgWATIgPAYIhABFIgyAYQgWgLgKgPg");
	this.shape_447.setTransform(336,179.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#373535").ss(1.5).p("AAjgQQgKArgZAHQgQAEgMgEQgFgDgBgIQgBgRAVgYQAUgZARALQAIAFAEALg");
	this.shape_448.setTransform(347.9,384.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgcAiQgFgDgBgIQgBgRAVgYQAUgZARALQAIAFAEALQgKArgZAHQgIACgHAAQgHAAgGgCg");
	this.shape_449.setTransform(347.9,384.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#373535").ss(1.5).p("AgjATQAOAPAQACQAFABAEglIAIgBQAJgCAHgDQAJgEACgKQACgJgKgBQgOgDgGgBQgKgCgFABQgHABgEADIgDADQgMAPgFAJQgIAPAIAIg");
	this.shape_450.setTransform(335.4,186.6);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AgFAkQgQgCgOgPQgIgIAIgPQAFgJAMgPIADgDQAEgDAHgBQAFgBAKACIAUAEQAKABgCAJQgCAKgJAEIgQAFIgIABQgEAkgEAAIgBAAg");
	this.shape_451.setTransform(335.4,186.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#373535").ss(1.5).p("AAVgtQgHAFgUAPQgRASACAXQACAZAOAJQAGAFAHAAg");
	this.shape_452.setTransform(311.4,240.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AgEAuQgOgKgCgYQgCgYARgRIAbgVIgNBlQgHAAgGgFg");
	this.shape_453.setTransform(311.3,240.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#373535").ss(1.5).p("AAIglIgJAGQgKAKgCAPQgCARAFAPQAGAQAKABQAKACgBgVg");
	this.shape_454.setTransform(310.2,253.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AAGApQgKgCgGgQQgFgOACgSQACgOAKgKIAJgHIAHA9QABAUgJAAIgBAAg");
	this.shape_455.setTransform(310.2,254.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410}]},82).wait(1173));

	// head
	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#373535").ss(2.5).p("ACgKyQACgFADgEIAwiKIC6geIBEgVQBCgggIgxQgJgPgGgPQgMggAPgEIAMgQQAOgSAEgIQAFgIgFgMIgYgoIAHgEQAJgGAIgIQAHgGgQglQgPggANADQBEgJAKgJQAJgJgHggQgJgpgkgsIhOhrQAGgkAGgeQAAgngMg6QgXhzg8hYQi+kbncBVQgzAJhJAuQhhA9g7BZQiqEEDeGCIAxBOQAsBSgbAaIhJDB");
	this.shape_456.setTransform(372.1,101.3);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#ECB77F").s().p("AgfKGQh2gRhwgdQg9gRg/gEIhugOIBJjBQAagagrhTIgxhNQjemCCqkEQA7hZBgg+QBKgtAzgKQHbhVC/EcQA7BYAYBzQAMA5AAAoIgMBCIBOBrQAkArAJApQAHAggJAKQgKAIhEAKQgNgDAOAgQARAkgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgFAIgNASIgMAQQgPAEAMAfQAGAQAJAPQAHAxhBAfIhEAWIi6AeIgwCKIgFAIQhegbhhgNg");
	this.shape_457.setTransform(372.1,101.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_457},{t:this.shape_456}]},82).wait(1173));

	// body
	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#373535").ss(2.5).p("AIE5qQi+kcncBVQgzAKhJAtQhhA+g7BZQiqEEDeGDIAxBNQAsBTgbAaIhUDeQgnA6gqBDQhUCGgPApIgnBbQgtB1gbB/QhZGYB0FoIB0F9QByGGgIAtIgMDeIRDgPQgHhxgEh4QgHjwASgiQAlhDAfi5QAmjtgricIgHimQAHhEgdh3Qg5jtiyj/IilkFQgGgOgDgRQgGgiAPgTIAwiKIC6geIBEgWQBCgfgIgxQgJgPgGgQQgMgfAPgEIAMgQQAOgSAEgIQAFgIgFgMIgYgoIAHgFQAJgFAIgIQAHgHgQgkQgPggANADQBEgKAKgIQAJgKgHggQgJgpgkgrIhOhsQAGgkAGgeQAAgogMg5QgXhzg8hYg");
	this.shape_458.setTransform(361.1,219.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#ECB77F").s().p("Am2ZnQAIgthymGIh0l9Qh0loBZmYQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVC+EcQA8BYAXBzQAMA5AAAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQgNgDAPAgQAQAkgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQAIAxhCAfIhEAWIi6AeIgwCKQgPATAGAiQADARAGAOIClEFQCyD/A5DtQAdB3gHBEIAHCmQArCcgmDtQgfC5glBDQgSAiAHDwQAEB4AHBxIxDAPg");
	this.shape_459.setTransform(361.1,219.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#373535").ss(2.5).p("AkS76QhhA+g7BZQiqEEDeGDIAxBNQAsBTgbAaIhUDeQgnA6gqBDQhUCGgPApIgnBbQgtB1gbB/QhZGYB0FoIB0F9QByGGgIAtIgMDeIRDgPQgHhxgEh4QgHjwASgiQAlhDAfi5QAmjtgricIgHimQAHhEgdh3Qg5jtiyj/IilkFQgGgOgDgRQgGgiAPgTIAwiKIj2g0QAWgKBLgaQBAgYgDgUQgJgPgGgQQgMgfAPgEIAMgQQAOgSAEgIQAFgIgFgMIgYgoIAHgFQAJgFAIgIQAHgHgQgkQgPggANADQBEgKAKgIQAJgKgHggQgJgpgkgrIhOhsQAGgkAGgeQAZgoAag5QAzhzADhYQAKkcncBVQgzAKhJAtg");
	this.shape_460.setTransform(361.1,219.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#ECB77F").s().p("Am2ZnQAIgthymGIh0l9Qh0loBZmYQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQgNgDAPAgQAQAkgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAUhAAYQhLAagWAKID2A0IgwCKQgPATAGAiQADARAGAOIClEFQCyD/A5DtQAdB3gHBEIAHCmQArCcgmDtQgfC5glBDQgSAiAHDwQAEB4AHBxIxDAPg");
	this.shape_461.setTransform(361.1,219.1);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#373535").ss(2.5).p("AqwA3QAbh8ArhyIAmhaQASgvBNh8QAshGAjg0QAFgHAEgHIBMjKQAEgKAEgKQAXgXgcg/QgFgLgHgMIgjg3QgHgLgHgLQjPlpCFj6QAKgTANgSQAuhGBHg2QASgOAUgMQArgaAjgPQAZgKAWgEQGfhKAtDPQAGAegBAkQgCA/gbBMQgLAfgPAhQgIAUgJARQgPAhgQAZQgBABgBABQgGAegFAkIAhAuQAWAfAXAfQAGAHAFAHQANASAIASQAIARAEASQAGAagHALQgBACgBACQgGAFgXAFQgSAEgeAEQgKgBAGARQACAEACAEQABADABACQALAZAAALQAAAFgCACQgEAEgEADQgEAEgFADQgDACgEADQADAFADAFIAKARQAEAGAEAGQAFAMgFAIQgBACgBACQgFAIgLAPQgBACgCACQgEAGgEAGQgPAEAMAfQAGAPAJAPQADAQgnASQgKAFgOAFQg6AVgaALQgHACgEACIDyA1IgMAhQgCAEgBAEQgIAVgHAWQgFAOgFAPIgIAZQgOATAGAiQADARAGANIB6DBQAWAiAWAiQCSDRBBDGQAOArAKAqQAGAaAEAXQAQBNgDAyQgBAGAAAFIAHCmQADAOADAOQAhCVgjDYQAAADgBAEQgXCOgcBGQgIATgHAOQgSAhAFDYQABAMAAANQAEByAGBsQABAFAAAGIxDAPIALjdQACgMgGghQgRhjhVkjQgFgPgEgOIhrlhQgDgJgDgKQhrlgBWmNg");
	this.shape_462.setTransform(361.2,219.1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#ECB77F").s().p("Am3ZoQACgMgGghQgRhjhVkjIgJgdIhrlhIgGgTQhrlgBWmNQAbh8ArhyIAmhaQASgvBNh8QAshGAjg0IAJgOIBMjKIAIgUQAXgXgcg/IgMgXIgjg3IgOgWQjPlpCFj6QAKgTANgSQAuhGBHg2QASgOAUgMQArgaAjgPQAZgKAWgEQGfhKAtDPQAGAegBAkQgCA/gbBMQgLAfgPAhIgRAlQgPAhgQAZIgCACQgGAegFAkIAhAuIAtA+IALAOQANASAIASQAIARAEASQAGAagHALIgCAEQgGAFgXAFQgSAEgeAEQgKgBAGARIAEAIIACAFQALAZAAALQAAAFgCACIgIAHIgJAHIgHAFIAGAKIAKARIAIAMQAFAMgFAIIgCAEQgFAIgLAPIgDAEIgIAMQgPAEAMAfQAGAPAJAPQADAQgnASIgYAKQg6AVgaALIgLAEIDyA1IgMAhIgDAIIgPArIgKAdIgIAZQgOATAGAiQADARAGANIB6DBIAsBEQCSDRBBDGQAOArAKAqIAKAxQAQBNgDAyIgBALIAHCmIAGAcQAhCVgjDYIgBAHQgXCOgcBGQgIATgHAOQgSAhAFDYIABAZQAEByAGBsIABALIxDAPg");
	this.shape_463.setTransform(361.2,219.1);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#373535").ss(2.5).p("AqxA3QAbh8ArhyIAmhaQASgvBNh8QAshGAjg1QAFgHAEgHIBMjKQAEgKAEgKQAXgWgcg/QgGgLgGgMIgjg4QgHgLgHgLQjPloCGj6QAKgTAMgSQAuhGBHg2QATgOAUgMQArgbAjgOQAZgKAVgEQGfhKAtDQQAGAegBAkQgCA/gbBMQgLAfgPAhQgIATgJASQgQAggPAaQgBABgBABQgFAegGAkIAhAuQAXAfAWAfQAGAHAFAHQANASAIARQAIASADARQAGAagGALQgBADgCABQgFAFgYAFQgRAFgeAEQgJgCAFASQACAEABAEQACADABACQALAZAAALQAAAFgCACQgEAEgEADQgEAEgFADQgDACgDACQACAGADAFIAKARQAEAGADAGQAFAMgEAIQgBACgBACQgFAIgLAOQgBACgCACQgEAGgEAGQgPAEANAfQAGAQAJAOQADAQgmASQgKAFgNAFQg6AVgZALQgHACgFACIDvA2IgMAhQgCAEgCAEQgHAVgHAWQgFAOgFAPIgHAZQgPATAHAiQADARAGANIB7DAQAWAiAVAiQCTDQBBDHQAOArAKAqQAGAaAEAXQAQBNgDAyQgBAGAAAFIAHCmQADAOADAOQAhCVgjDYQgBADAAAEQgYCOgcBGQgIATgHAPQgRAgAFDYQAAAMABANQADBzAGBrQAAAGABAFIxEAPIALjdQACgMgGghQgRhihVkkQgFgPgEgOIhrlgQgDgKgDgJQhrlhBWmNg");
	this.shape_464.setTransform(361.3,219.1);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#ECB77F").s().p("Am4ZoQACgMgGghQgRhihVkkIgJgdIhrlgIgGgTQhrlhBWmNQAbh8ArhyIAmhaQASgvBNh8QAshGAjg1IAJgOIBMjKIAIgUQAXgWgcg/IgMgXIgjg4IgOgWQjPloCGj6QAKgTAMgSQAuhGBHg2QATgOAUgMQArgbAjgOQAZgKAVgEQGfhKAtDQQAGAegBAkQgCA/gbBMQgLAfgPAhIgRAlQgQAggPAaIgCACIgLBCIAhAuIAtA+IALAOQANASAIARQAIASADARQAGAagGALIgDAEQgFAFgYAFQgRAFgeAEQgJgCAFASIADAIIADAFQALAZAAALQAAAFgCACIgIAHIgJAHIgGAEIAFALIAKARIAHAMQAFAMgEAIIgCAEIgQAWIgDAEIgIAMQgPAEANAfQAGAQAJAOQADAQgmASIgXAKQg6AVgZALIgMAEIDvA2IgMAhIgEAIIgOArIgKAdIgHAZQgPATAHAiQADARAGANIB7DAIArBEQCTDQBBDHQAOArAKAqIAKAxQAQBNgDAyIgBALIAHCmIAGAcQAhCVgjDYIgBAHQgYCOgcBGQgIATgHAPQgRAgAFDYIABAZQADBzAGBrIABALIxEAPg");
	this.shape_465.setTransform(361.3,219.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#373535").ss(2.5).p("AqyA3QAbh8ArhyIAnhaQARgvBOh8QAshGAjg1QAEgHAFgHIBMjKQAEgKAEgKQAWgWgcg/QgFgLgHgMIgjg4QgHgLgHgLQjPloCGj7QAKgSANgSQAuhHBHg1QASgOAUgMQAsgbAjgOQAZgKAVgEQGghKArDRQAHAegCAkQgCA+gbBMQgLAfgPAiQgIATgJASQgPAggQAaQgBABgBABQgFAegFAkIAhAuQAXAfAWAfQAGAHAFAHQANASAIARQAIASADARQAFAagHAKQgBADgBABQgGAFgXAGQgRAFgdAEQgKgCAGASQABADACAFQABACABADQALAYABAMQAAAFgCACQgEAEgEADQgEADgFADQgDADgEACQADAFADAGIAJARQAEAGAEAGQAEAMgEAIQgBABgBACQgFAJgKAOQgCACgBACQgEAGgEAGQgPAEANAfQAGAPAJAPQAEAPgmATQgKAEgNAFQg3AVgaALQgHACgEACIDqA3IgMAhQgCAEgBAEQgIAVgHAWQgFAPgEAOIgIAZQgNATAGAiQADAQAHAOIB7C/QAWAiAWAiQCSDQBCDHQAOArAKAqQAGAaAEAXQAPBOgDAxQAAAGAAAFIAGCmQAEAOADAOQAgCVgjDYQgBAEAAADQgYCOgcBHQgIASgHAPQgSAhAFDXQABAMAAANQADBzAGBsQABAFAAAFIxEAPIALjdQACgLgGghQgRhihVklQgFgOgEgPIhrlgQgDgKgDgJQhslhBWmNg");
	this.shape_466.setTransform(361.3,219.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#ECB77F").s().p("Am4ZoQACgLgGghQgRhihVklIgJgdIhrlgIgGgTQhslhBWmNQAbh8ArhyIAnhaQARgvBOh8QAshGAjg1IAJgOIBMjKIAIgUQAWgWgcg/IgMgXIgjg4IgOgWQjPloCGj7QAKgSANgSQAuhHBHg1QASgOAUgMQAsgbAjgOQAZgKAVgEQGghKArDRQAHAegCAkQgCA+gbBMQgLAfgPAiIgRAlQgPAggQAaIgCACIgKBCIAhAuIAtA+IALAOQANASAIARQAIASADARQAFAagHAKIgCAEQgGAFgXAGQgRAFgdAEQgKgCAGASIADAIIACAFQALAYABAMQAAAFgCACIgIAHIgJAGIgHAFIAGALIAJARIAIAMQAEAMgEAIIgCADQgFAJgKAOIgDAEIgIAMQgPAEANAfQAGAPAJAPQAEAPgmATIgXAJQg3AVgaALIgLAEIDqA3IgMAhIgDAIIgPArIgJAdIgIAZQgNATAGAiQADAQAHAOIB7C/IAsBEQCSDQBCDHQAOArAKAqIAKAxQAPBOgDAxIAAALIAGCmIAHAcQAgCVgjDYIgBAHQgYCOgcBHQgIASgHAPQgSAhAFDXIABAZQADBzAGBsIABAKIxEAPg");
	this.shape_467.setTransform(361.3,219.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#373535").ss(2.5).p("AqzA3QAbh8ArhyIAnhbQASguBNh8QAshGAjg1QAFgHAEgHIBMjKQAEgKAEgKQAWgWgchAQgFgLgHgMIgjg3QgHgLgHgLQjPlpCHj6QAKgTAMgSQAvhGBGg1QATgOAUgNQArgaAjgOQAZgKAWgEQGfhKArDRQAHAegCAkQgCA/gbBMQgLAfgPAhQgJAUgIARQgQAhgPAZQgBACgBABQgFAdgFAkIAiAuQAWAfAWAfQAGAHAFAIQANASAIARQAIARACARQAFAagGALQgCACgBACQgGAEgWAGQgRAFgdAFQgKgCAGASQABADACAEQABADABACQALAZABALQAAAFgCACQgEAFgEADQgEADgFADQgDADgEACQADAFADAGIAJARQADAGAEAGQAFALgFAJQgBABAAACQgFAIgKAPQgCACgBACQgEAGgEAGQgOAEANAeQAGAQAJAOQAEAQglASQgKAFgMAEQg2AVgaALQgHACgEACIDlA4IgMAhQgBAEgCAEQgHAVgHAWQgFAPgFAOIgGAZQgOATAHAhQADARAHANIB8C/QAWAiAWAiQCSDPBCDIQAOArAKAqQAGAaAEAXQAPBOgCAxQgBAGAAAFIAGCmQAEAOADAOQAgCWgkDXQAAAEgBADQgYCPgcBGQgHASgIAPQgRAhAEDYQABAMAAANQADByAGBsQAAAFABAFIxEAPIAKjcQACgMgGghQgRhhhVkmQgFgOgEgPIhrlgQgDgJgDgKQhslhBWmNg");
	this.shape_468.setTransform(361.4,219.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#ECB77F").s().p("Am5ZpQACgMgGghQgRhhhVkmIgJgdIhrlgIgGgTQhslhBWmNQAbh8ArhyIAnhbQASguBNh8QAshGAjg1IAJgOIBMjKIAIgUQAWgWgchAIgMgXIgjg3IgOgWQjPlpCHj6QAKgTAMgSQAvhGBGg1QATgOAUgNQArgaAjgOQAZgKAWgEQGfhKArDRQAHAegCAkQgCA/gbBMQgLAfgPAhIgRAlQgQAhgPAZIgCADIgKBBIAiAuIAsA+IALAPQANASAIARQAIARACARQAFAagGALIgDAEQgGAEgWAGQgRAFgdAFQgKgCAGASIADAHIACAFQALAZABALQAAAFgCACIgIAIIgJAGIgHAFIAGALIAJARIAHAMQAFALgFAJIgBADIgPAXIgDAEIgIAMQgOAEANAeQAGAQAJAOQAEAQglASQgKAFgMAEIhQAgIgLAEIDlA4IgMAhIgDAIIgOArIgKAdIgGAZQgOATAHAhQADARAHANIB8C/IAsBEQCSDPBCDIQAOArAKAqIAKAxQAPBOgCAxIgBALIAGCmIAHAcQAgCWgkDXIgBAHQgYCPgcBGQgHASgIAPQgRAhAEDYIABAZQADByAGBsIABAKIxEAPg");
	this.shape_469.setTransform(361.4,219.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#373535").ss(2.5).p("Aq0A3QAbh8ArhyIAnhbQASguBNh8QAshGAjg1QAFgHAEgHIBMjKQAEgKAEgKQAWgXgcg/QgFgLgHgMIgjg3QgHgLgHgLQjPlpCHj7QAKgSAMgSQAvhGBHg2QASgOAUgMQAsgaAjgOQAZgKAVgEQGghKArDSQAGAegCAkQgCA/gbBLQgLAggPAhQgJATgIASQgQAggPAaQgBABgBABQgEAegFAkIAhAuQAXAfAWAfQAGAHAEAHQANATAIARQAHARADARQAFAZgHALQgBACgCACQgFAFgXAGQgQAFgdAEQgKgBAGARQABAEACAEQABADABACQALAZABALQAAAFgCACQgEAEgEADQgEAEgFADQgDACgEADQADAFADAGIAJAQQADAGAEAGQAFAMgFAIQgBACgBACQgEAIgKAPQgCACgBACQgEAGgEAGQgOAEANAeQAHAPAJAOQAEAQgkASQgKAFgMAFQg1AUgZALQgHACgEACIDhA5IgMAhQgCAEgBAEQgIAVgHAWQgEAPgFAOIgGAZQgNATAHAhQADARAHANIB9C+QAWAiAVAiQCTDPBCDIQAOArAKAqQAGAaAEAXQAPBPgCAwQgBAGAAAFIAHCnQADANADAOQAfCWgjDXQgBAEAAADQgYCPgdBGQgHASgHAPQgSAiAFDXQAAAMAAANQADByAGBsQAAAFAAAGIxEAOIAKjcQACgMgGggQgQhhhWkmQgFgPgEgOIhrlhQgDgJgDgKQhslhBWmNg");
	this.shape_470.setTransform(361.5,219.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#ECB77F").s().p("Am6ZpQACgMgGggQgQhhhWkmIgJgdIhrlhIgGgTQhslhBWmNQAbh8ArhyIAnhbQASguBNh8QAshGAjg1IAJgOIBMjKIAIgUQAWgXgcg/IgMgXIgjg3IgOgWQjPlpCHj7QAKgSAMgSQAvhGBHg2QASgOAUgMQAsgaAjgOQAZgKAVgEQGghKArDSQAGAegCAkQgCA/gbBLQgLAggPAhIgRAlQgQAggPAaIgCACIgJBCIAhAuIAtA+IAKAOQANATAIARQAHARADARQAFAZgHALIgDAEQgFAFgXAGQgQAFgdAEQgKgBAGARIADAIIACAFQALAZABALQAAAFgCACIgIAHIgJAHIgHAFIAGALIAJAQIAHAMQAFAMgFAIIgCAEIgOAXIgDAEIgIAMQgOAEANAeQAHAPAJAOQAEAQgkASIgWAKIhOAfIgLAEIDhA5IgMAhIgDAIIgPArIgJAdIgGAZQgNATAHAhQADARAHANIB9C+IArBEQCTDPBCDIQAOArAKAqIAKAxQAPBPgCAwIgBALIAHCnIAGAbQAfCWgjDXIgBAHQgYCPgdBGIgOAhQgSAiAFDXIAAAZQADByAGBsIAAALIxEAOg");
	this.shape_471.setTransform(361.5,219.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#373535").ss(2.5).p("Aq1A3QAbh8ArhyIAnhbQASgvBNh7QAshHAjg0QAFgHAEgHIBMjKQAEgKAEgKQAWgXgcg/QgGgLgGgMIgjg4QgHgLgHgLQjPloCHj7QAKgSAMgSQAvhHBHg1QATgOAUgMQArgbAjgOQAZgJAWgEQGfhKArDTQAGAegCAkQgCA+gbBMQgMAfgPAhQgIAUgJARQgPAhgPAaQgBABgBABQgEAegFAjIAhAuQAXAgAWAfQAGAHAFAHQAMASAIARQAHASACAQQAFAagHAKQgBACgCACQgFAFgWAGQgQAGgdAEQgKgBAGARQABADACAFQABACABADQALAYABAMQAAAFgCACQgEAEgEADQgEAEgFADQgDACgDACQACAGADAFIAIARQAEAGADAGQAFAMgEAIQgBACgBACQgEAIgKAOQgCACgBACQgEAGgEAGQgNAFANAeQAGAOAKAPQAEAPgkASQgJAFgMAFQgzAUgZALQgHACgFACIDeA6IgMAhQgCAEgCAEQgHAVgHAWQgEAPgFAOIgGAZQgNASAIAiQADAQAHAOIB9C9QAWAiAWAiQCTDOBCDJQAOArAKAqQAGAaAEAXQAPBPgCAwQgBAGAAAFIAHCnQADANADAOQAfCWgkDXQAAAEgBADQgYCPgcBGQgIASgHAPQgRAjAEDWQAAAMABANQACBzAGBrQAAAGAAAFIxEAOIgBgqIAKixQACgMgGghQgQhghWknQgFgOgEgPIhrlhQgDgJgDgKQhslhBWmNg");
	this.shape_472.setTransform(361.6,219.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#ECB77F").s().p("AnFcbIAKixQACgMgGghQgQhghWknIgJgdIhrlhIgGgTQhslhBWmNQAbh8ArhyIAnhbQASgvBNh7QAshHAjg0IAJgOIBMjKIAIgUQAWgXgcg/IgMgXIgjg4IgOgWQjPloCHj7QAKgSAMgSQAvhHBHg1QATgOAUgMQArgbAjgOQAZgJAWgEQGfhKArDTQAGAegCAkQgCA+gbBMQgMAfgPAhIgRAlQgPAhgPAaIgCACIgJBBIAhAuIAtA/IALAOQAMASAIARQAHASACAQQAFAagHAKIgDAEQgFAFgWAGQgQAGgdAEQgKgBAGARIADAIIACAFQALAYABAMQAAAFgCACIgIAHIgJAHIgGAEIAFALIAIARIAHAMQAFAMgEAIIgCAEQgEAIgKAOIgDAEIgIAMQgNAFANAeQAGAOAKAPQAEAPgkASIgVAKIhMAfIgMAEIDeA6IgMAhIgEAIIgOArIgJAdIgGAZQgNASAIAiQADAQAHAOIB9C9IAsBEQCTDOBCDJQAOArAKAqIAKAxQAPBPgCAwIgBALIAHCnIAGAbQAfCWgkDXIgBAHQgYCPgcBGIgPAhQgRAjAEDWIABAZQACBzAGBrIAAALIxEAOg");
	this.shape_473.setTransform(361.6,219.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#373535").ss(2.5).p("Aq1A3QAbh8ArhyIAmhbQASgvBOh8QAshGAjg0QAEgHAFgHIBMjLQAEgJAEgLQAVgWgcg/QgFgLgHgMIgjg4QgHgLgHgLQjOlpCHj6QAKgTAMgSQAvhGBHg1QATgOAUgMQArgbAjgOQAZgJAWgEQGfhJAqDSQAGAegBAkQgDA/gbBMQgLAfgPAhQgJAUgJARQgPAggPAbQgBABAAABQgFAegEAjIAhAuQAXAfAWAfQAGAIAFAHQAMASAHARQAIARABARQAFAZgHAKQgCADgBABQgFAFgWAGQgQAHgcAEQgKgCAFASQABADACAEQABADABACQALAZABALQAAAFgCACQgDAFgEADQgFADgEADQgDADgEACQADAGACAFIAJARQADAGAEAGQAEAMgEAIQgBABgBACQgEAJgKAOQgBACgCACQgEAGgDAGQgNAEANAeQAHAPAJAOQAEAPgiASQgJAFgMAFQgxAUgaALQgHADgEACIDZA6IgMAhQgCAEgBAEQgIAVgHAWQgEAPgEAOIgGAZQgMASAHAiQAEAQAGANIB/C9QAWAiAWAiQCSDOBDDJQAOArAKAqQAGAaAEAXQAPBPgDAwQAAAGgBAFIAHCnQADANADAOQAfCXgkDWQAAAEgBADQgYCPgdBGQgHASgHAPQgSAjAEDWQABAMAAANQADBzAFBsQAAAFAAAFIxFAOIgBgqIAKixQACgMgFghQgQhfhXkoQgEgOgFgPIhqlgQgDgKgDgJQhslhBWmOg");
	this.shape_474.setTransform(361.7,219.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#ECB77F").s().p("AnGcbIAKixQACgMgFghQgQhfhXkoIgJgdIhqlgIgGgTQhslhBWmOQAbh8ArhyIAmhbQASgvBOh8QAshGAjg0IAJgOIBMjLIAIgUQAVgWgcg/IgMgXIgjg4IgOgWQjOlpCHj6QAKgTAMgSQAvhGBHg1QATgOAUgMQArgbAjgOQAZgJAWgEQGfhJAqDSQAGAegBAkQgDA/gbBMQgLAfgPAhQgJAUgJARQgPAggPAbIgBACIgJBBIAhAuIAtA+IALAPQAMASAHARQAIARABARQAFAZgHAKIgDAEQgFAFgWAGQgQAHgcAEQgKgCAFASIADAHIACAFQALAZABALQAAAFgCACIgHAIIgJAGIgHAFIAFALIAJARIAHAMQAEAMgEAIIgCADIgOAXIgDAEIgHAMQgNAEANAeQAHAPAJAOQAEAPgiASIgVAKIhLAfIgLAFIDZA6IgMAhIgDAIQgIAVgHAWIgIAdIgGAZQgMASAHAiQAEAQAGANIB/C9IAsBEQCSDOBDDJQAOArAKAqIAKAxQAPBPgDAwIgBALIAHCnIAGAbQAfCXgkDWIgBAHQgYCPgdBGQgHASgHAPQgSAjAEDWIABAZQADBzAFBsIAAAKIxFAOg");
	this.shape_475.setTransform(361.7,219.1);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#373535").ss(2.5).p("Aq2A3QAbh8ArhyIAmhbQASgvBOh8QAshGAjg0QAEgHAFgHIBMjLQAEgKAEgKQAVgWgchAQgFgLgHgLIgjg4QgHgLgHgLQjPlpCIj7QAKgSAMgSQAvhGBHg1QATgOAUgNQArgaAjgOQAZgJAWgEQGghJApDTQAGAegBAkQgDA/gbBLQgMAggPAhQgIATgJASQgPAggPAaQgBABAAABQgEAegEAkIAhAuQAXAfAVAfQAGAHAFAHQAMATAIARQAHARABARQAEAYgHALQgBACgCABQgFAFgVAHQgQAGgcAFQgKgCAFARQABAEACAEQABACABADQALAYABAMQAAAFgCACQgDAEgEADQgEAEgFADQgDADgEACQADAFACAGIAIARQAEAFADAHQAFALgFAJQAAABgBACQgEAJgKAOQgBACgCACQgEAGgDAGQgMAEANAeQAGAOAKAOQAEAQgiARQgIAFgMAFQgwAUgZALQgHADgEACIDUA7IgMAhQgBAEgCAEQgHAVgHAWQgEAPgEAOIgGAZQgMASAIAhQADARAHANIB/C8QAXAiAWAiQCSDNBDDKQAOAqAKArQAGAaAEAXQAPBQgDAvQAAAGgBAFIAHCnQADANADAOQAfCXgkDXQgBADAAAEQgZCOgcBGQgIASgHAQQgRAjAEDVQAAAMAAANQADBzAFBsQAAAFAAAFIxFAOIgCgpIAKixQACgNgFggQgQhfhXkoQgEgPgFgOIhqlhQgDgKgDgJQhslhBWmOg");
	this.shape_476.setTransform(361.8,219.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#ECB77F").s().p("AnHccIAKixQACgNgFggQgQhfhXkoIgJgdIhqlhIgGgTQhslhBWmOQAbh8ArhyIAmhbQASgvBOh8QAshGAjg0IAJgOIBMjLIAIgUQAVgWgchAIgMgWIgjg4IgOgWQjPlpCIj7QAKgSAMgSQAvhGBHg1QATgOAUgNQArgaAjgOQAZgJAWgEQGghJApDTQAGAegBAkQgDA/gbBLQgMAggPAhIgRAlQgPAggPAaIgBACIgIBCIAhAuQAXAfAVAfIALAOQAMATAIARQAHARABARQAEAYgHALIgDADQgFAFgVAHQgQAGgcAFQgKgCAFARIADAIIACAFQALAYABAMQAAAFgCACIgHAHIgJAHIgHAFIAFALIAIARIAHAMQAFALgFAJIgBADQgEAJgKAOIgDAEIgHAMQgMAEANAeQAGAOAKAOQAEAQgiARIgUAKIhJAfIgLAFIDUA7IgMAhIgDAIIgOArIgIAdIgGAZQgMASAIAhQADARAHANIB/C8IAtBEQCSDNBDDKQAOAqAKArIAKAxQAPBQgDAvIgBALIAHCnIAGAbQAfCXgkDXIgBAHQgZCOgcBGIgPAiQgRAjAEDVIAAAZQADBzAFBsIAAAKIxFAOg");
	this.shape_477.setTransform(361.8,219.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#373535").ss(2.5).p("Aq3A3QAbh8ArhyIAnhbQARgvBOh8QAshGAjg1QAEgHAFgHIBMjKQAEgKAEgKQAVgXgcg/QgFgLgHgMIgjg3QgHgLgHgLQjPlpCIj7QAKgSANgSQAvhHBHg1QASgOAUgMQAsgaAjgOQAZgKAWgDQGghJAoDUQAGAegCAkQgDA+gbBMQgLAfgPAhQgJAUgIARQgPAggPAbQgBABgBABQgDAegEAjIAhAuQAXAgAWAfQAGAHAEAHQANATAHARQAHARABAQQAEAYgIALQgBACgCABQgFAFgVAHQgPAHgcAEQgKgBAFARQABADACAFQABACABADQALAYABAMQAAAFgCACQgDAEgEADQgEAEgFADQgDACgEADQADAFACAFIAIARQADAGAEAGQAEAMgEAIQgBACgBACQgEAIgJAPQgBACgBACQgEAGgDAGQgNAEANAdQAHAPAKAOQAFAPgiARQgIAFgMAFQguAUgZALQgHADgEACIB0AfIBcAdIgMAhQgCAEgBAEQgIAVgGAWQgEAPgEAPIgGAYQgLASAHAhQAEAQAHAOICAC7QAWAiAWAiQCTDNBDDKQAOAqAKArQAGAaAEAXQAPBQgDAvQAAAGAAAFIAGCnQADANADAOQAeCXgkDXQAAADgBAEQgYCPgdBFQgHASgIAQQgRAjAEDWQAAAMAAANQADByAFBsQAAAFAAAFIxGAOIgCgpIAKixQACgMgFghQgQhehWkpQgFgPgEgOIhrlhQgDgJgDgKQhslhBWmOg");
	this.shape_478.setTransform(361.9,219.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#ECB77F").s().p("AnIccIAKixQACgMgFghQgQhehWkpIgJgdIhrlhIgGgTQhslhBWmOQAbh8ArhyIAnhbQARgvBOh8QAshGAjg1IAJgOIBMjKIAIgUQAVgXgcg/IgMgXIgjg3IgOgWQjPlpCIj7QAKgSANgSQAvhHBHg1QASgOAUgMQAsgaAjgOQAZgKAWgDQGghJAoDUQAGAegCAkQgDA+gbBMQgLAfgPAhIgRAlQgPAggPAbIgCACIgHBBIAhAuIAtA/IAKAOQANATAHARQAHARABAQQAEAYgIALIgDADQgFAFgVAHQgPAHgcAEQgKgBAFARIADAIIACAFQALAYABAMQAAAFgCACIgHAHIgJAHIgHAFIAFAKIAIARIAHAMQAEAMgEAIIgCAEIgNAXIgCAEIgHAMQgNAEANAdQAHAPAKAOQAFAPgiARIgUAKIhHAfIgLAFIB0AfIBcAdIgMAhIgDAIIgOArIgIAeIgGAYQgLASAHAhQAEAQAHAOICAC7IAsBEQCTDNBDDKQAOAqAKArIAKAxQAPBQgDAvIAAALIAGCnIAGAbQAeCXgkDXIgBAHQgYCPgdBFIgPAiQgRAjAEDWIAAAZQADByAFBsIAAAKIxGAOg");
	this.shape_479.setTransform(361.9,219.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#373535").ss(2.5).p("Aq4A3QAbh8ArhyIAnhbQASgvBNh8QAthGAjg1QAEgHAEgHIBNjKQAEgKAEgKQAUgXgcg/QgFgLgHgMIgjg3QgHgMgHgLQjOlpCIj6QAKgTAMgSQAvhGBIg1QASgOAUgMQAsgaAjgOQAZgKAWgEQGghIAoDUQAGAfgCAjQgDA/gbBMQgMAfgPAhQgIATgJASQgPAggPAbQAAABgBABQgEAegDAjIAhAuQAXAfAWAfQAFAIAFAHQANATAGAQQAHARABARQADAYgHAKQgCACgBACQgFAFgVAGQgPAIgcAEQgJgBAFARQABADABAEQABADABACQALAZACALQAAAFgCACQgEAFgDADQgFADgEAEQgDACgEACQADAGACAFIAIARQACAGAEAGQAEAMgEAIQgBACAAACQgEAIgJAPQgCACgBACQgEAFgDAGQgMAFAOAdQAHAOAKAOQAEAPghARQgIAFgLAFQgsAUgaALQgGADgFACIBxAfIBbAeIgMAhQgCAEgBAEQgIAVgGAXQgEAOgEAPIgFAYQgLASAIAhQAEAQAHANICAC7QAXAiAWAhQCSDNBEDLQAOAqAKArQAFAaAFAXQAPBRgDAuQAAAGgBAFIAHCnQADANADAOQAeCYglDWQAAADgBAEQgZCPgcBFQgHASgIAQQgRAkADDVQABAMAAANQACBzAFBrQAAAFAAAFIxGAOIgCgoIAKiyQABgMgFggQgPhehXkqQgEgOgFgPIhrlhQgDgJgDgKQhslhBWmOg");
	this.shape_480.setTransform(361.9,219.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#ECB77F").s().p("AnIcdIAKiyQABgMgFggQgPhehXkqIgJgdIhrlhIgGgTQhslhBWmOQAbh8ArhyIAnhbQASgvBNh8QAthGAjg1IAIgOIBNjKIAIgUQAUgXgcg/IgMgXIgjg3IgOgXQjOlpCIj6QAKgTAMgSQAvhGBIg1QASgOAUgMQAsgaAjgOQAZgKAWgEQGghIAoDUQAGAfgCAjQgDA/gbBMQgMAfgPAhIgRAlQgPAggPAbIgBACIgHBBIAhAuIAtA+IAKAPQANATAGAQQAHARABARQADAYgHAKIgDAEQgFAFgVAGQgPAIgcAEQgJgBAFARIACAHIACAFQALAZACALQAAAFgCACIgHAIIgJAHIgHAEIAFALIAIARIAGAMQAEAMgEAIIgBAEIgNAXIgDAEIgHALQgMAFAOAdQAHAOAKAOQAEAPghARQgIAFgLAFIhGAfIgLAFIBxAfIBbAeIgMAhIgDAIQgIAVgGAXIgIAdIgFAYQgLASAIAhQAEAQAHANICAC7IAtBDQCSDNBEDLQAOAqAKArIAKAxQAPBRgDAuIgBALIAHCnIAGAbQAeCYglDWIgBAHQgZCPgcBFIgPAiQgRAkADDVIABAZQACBzAFBrIAAAKIxGAOg");
	this.shape_481.setTransform(361.9,219.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#373535").ss(2.5).p("Aq5A3QAbh8ArhyIAnhbQASgvBOh8QAshGAjg1QAEgHAEgHIBNjKQAEgKAEgKQAUgXgcg/QgFgLgHgMIgjg4QgHgLgHgLQjOlpCIj7QAKgSANgSQAvhGBHg1QATgOAUgMQArgbAjgNQAZgKAWgEQGghIAoDVQAGAegCAkQgDA/gcBLQgLAggPAhQgJATgIARQgPAhgPAaQgBABAAABQgDAegEAjIAiAvQAXAfAVAfQAGAHAEAIQANATAGAQQAHARAAAQQAEAYgIAKQgBACgCACQgFAFgUAHQgPAHgbAFQgKgBAFAQQAAAEACAEQABACABADQALAYACAMQAAAFgCACQgDAEgEAEQgFADgEADQgDADgEACQADAGACAFIAHARQADAFAEAHQAEALgEAJQgBABgBACQgEAJgIAOQgCACgBACQgEAGgCAGQgMAEANAdQAHAPAKANQAFAPggARQgIAFgLAFQgrAUgZALQgGADgFACIBuAfIBaAfIgMAhQgCAEgBAEQgIAVgGAXQgEAOgEAPIgFAYQgKASAIAhQAEAQAHANICBC6QAWAiAXAhQCSDNBEDLQAOAqAKArQAGAaAEAXQAPBRgDAuQAAAGgBAFIAHCnQADANADAOQAdCYgkDWQgBADAAAEQgZCPgdBFQgHASgHAQQgSAkAEDVQAAAMAAANQACBzAFBsQAAAFAAAEIxGAOIgDgoIAKixQABgNgFggQgPhdhXkqQgEgPgFgPIhrlhQgDgJgDgKQhslhBWmOg");
	this.shape_482.setTransform(362,219.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#ECB77F").s().p("AnJcdIAKixQABgNgFggQgPhdhXkqIgJgeIhrlhIgGgTQhslhBWmOQAbh8ArhyIAnhbQASgvBOh8QAshGAjg1IAIgOIBNjKIAIgUQAUgXgcg/IgMgXIgjg4IgOgWQjOlpCIj7QAKgSANgSQAvhGBHg1QATgOAUgMQArgbAjgNQAZgKAWgEQGghIAoDVQAGAegCAkQgDA/gcBLQgLAggPAhIgRAkQgPAhgPAaIgBACIgHBBIAiAvIAsA+IAKAPQANATAGAQQAHARAAAQQAEAYgIAKIgDAEQgFAFgUAHQgPAHgbAFQgKgBAFAQIACAIIACAFQALAYACAMQAAAFgCACIgHAIIgJAGIgHAFIAFALIAHARIAHAMQAEALgEAJIgCADIgMAXIgDAEIgGAMQgMAEANAdQAHAPAKANQAFAPggARQgIAFgLAFIhEAfIgLAFIBuAfIBaAfIgMAhIgDAIQgIAVgGAXIgIAdIgFAYQgKASAIAhQAEAQAHANICBC6IAtBDQCSDNBEDLQAOAqAKArQAGAaAEAXQAPBRgDAuIgBALIAHCnIAGAbQAdCYgkDWIgBAHQgZCPgdBFIgOAiQgSAkAEDVIAAAZQACBzAFBsIAAAJIxGAOg");
	this.shape_483.setTransform(362,219.1);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#373535").ss(2.5).p("Aq6A3QAbh8ArhyIAnhbQASgvBOh8QAshGAjg1QAEgHAEgHIBNjLQAEgJAEgLQAUgXgcg/QgFgKgHgMIgjg4QgHgLgHgLQjPlpCJj7QALgTAMgRQAvhGBHg1QATgOAUgNQAsgaAjgNQAZgKAWgEQGghIAnDWQAGAegCAkQgEA+gbBMQgLAfgPAhQgJAUgJARQgPAggOAbQgBABAAABQgDAegDAjIAhAuQAXAgAVAfQAGAHAFAHQAMATAGARQAHAQAAARQADAXgIAKQgBADgCABQgFAFgUAHQgOAIgbAEQgKAAAFAQQAAADACAFQABACABADQALAYACAMQAAAEgCADQgDAEgEADQgEAEgFADQgDADgEACQADAFACAGIAHARQADAFADAHQAEALgDAJQgBABgBACQgEAJgIAOQgCACgBACQgEAGgCAGQgMAEAOAdQAHAOAKAOQAFAPgfAQQgIAFgKAFQgqAUgZALQgHADgEACIBrAfIBYAgIgMAhQgBAEgCAEQgHAVgGAXQgFAOgDAPIgEAYQgLASAIAgQAFAQAHANICCC6QAWAiAWAhQCTDMBEDMQAOAqAKArQAGAaAEAXQAPBSgDAtQAAAGgBAFIAHCnQADANADAOQAdCYglDWQAAADgBAEQgZCPgcBFQgIASgHAQQgRAlADDUQAAAMAAANQACBzAFBsQAAAFgBAFIxGANIgDgnIAKiyQABgMgFggQgOhdhYkrQgEgPgFgOIhrlhQgDgKgDgJQhsliBWmOg");
	this.shape_484.setTransform(362.1,219.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#ECB77F").s().p("AnKceIAKiyQABgMgFggQgOhdhYkrIgJgdIhrlhIgGgTQhsliBWmOQAbh8ArhyIAnhbQASgvBOh8QAshGAjg1IAIgOIBNjLIAIgUQAUgXgcg/IgMgWIgjg4IgOgWQjPlpCJj7QALgTAMgRQAvhGBHg1QATgOAUgNQAsgaAjgNQAZgKAWgEQGghIAnDWQAGAegCAkQgEA+gbBMQgLAfgPAhIgSAlQgPAggOAbIgBACIgGBBIAhAuIAsA/IALAOQAMATAGARQAHAQAAARQADAXgIAKIgDAEQgFAFgUAHQgOAIgbAEQgKAAAFAQIACAIIACAFQALAYACAMQAAAEgCADIgHAHIgJAHIgHAFIAFALIAHARIAGAMQAEALgDAJIgCADIgMAXIgDAEQgEAGgCAGQgMAEAOAdQAHAOAKAOQAFAPgfAQQgIAFgKAFQgqAUgZALIgLAFIBrAfIBYAgIgMAhIgDAIQgHAVgGAXIgIAdIgEAYQgLASAIAgQAFAQAHANICCC6IAsBDQCTDMBEDMQAOAqAKArQAGAaAEAXQAPBSgDAtIgBALIAHCnIAGAbQAdCYglDWIgBAHQgZCPgcBFIgPAiQgRAlADDUIAAAZQACBzAFBsIgBAKIxGANg");
	this.shape_485.setTransform(362.1,219.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#373535").ss(2.5).p("Aq7A3QAbh8AshzIAmhaQASgwBOh7QAshGAjg1QAEgHAFgHIBMjLQAEgKAEgKQAUgXgcg/QgFgLgHgLIgjg4QgHgLgHgLQjPlqCKj6QAKgTAMgSQAvhGBIg1QATgOAUgMQArgaAjgOQAZgJAWgEQGhhIAmDWQAFAfgBAjQgEA/gbBMQgMAfgPAhQgIATgJASQgPAggOAbQgBABAAABQgDAegDAjIAiAuQAXAfAVAfQAGAIAEAHQAMATAHARQAGAQgBAQQADAYgIAKQgBACgBABQgGAFgTAIQgOAIgbAEQgKgBAEARQABADACAEQABADABACQALAYABAMQABAFgCACQgDAFgEADQgEADgFAEQgDACgDADQACAFACAGIAHAQQACAGAEAGQAEAMgEAIQgBACAAACQgEAJgJAOQgBACgBACQgEAGgCAGQgLAEAOAcQAHAOAKAOQAFAPgeARQgIAEgKAFQgoAVgZAKQgHADgEACIBoAgIBXAgIgMAhQgCAEgBAEQgIAVgGAXQgEAPgDAOIgEAYQgKASAIAgQAFAQAGANICDC5QAXAiAWAhQCTDMBEDMQAOAqAKArQAGAaAEAXQAPBSgDAtQAAAGgBAFIAHCnQADAOADANQAdCZglDVQgBAEAAADQgaCPgcBFQgHASgIAQQgRAmADDTQAAANABAMQABBzAFBsQAAAFgBAFIxGANIgFgnIAKixQACgNgFggQgOhchYksQgEgOgFgPIhqlhQgDgKgDgJQhtliBWmOg");
	this.shape_486.setTransform(362.2,219.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#ECB77F").s().p("AnMceIAKixQACgNgFggQgOhchYksIgJgdIhqlhIgGgTQhtliBWmOIAAAAQAbh8AshzIAmhaQASgwBOh7QAshGAjg1IAJgOIBMjLIAIgUQAUgXgcg/IgMgWIgjg4IgOgWQjPlqCKj6QAKgTAMgSQAvhGBIg1QATgOAUgMQArgaAjgOQAZgJAWgEQGhhIAmDWQAFAfgBAjQgEA/gbBMQgMAfgPAhIgRAlQgPAggOAbIgBACIgGBBIAiAuIAsA+IAKAPQAMATAHARQAGAQgBAQQADAYgIAKIgCADQgGAFgTAIQgOAIgbAEQgKgBAEARIADAHIACAFQALAYABAMQABAFgCACIgHAIIgJAHIgGAFIAEALIAHAQIAGAMQAEAMgEAIIgBAEQgEAJgJAOIgCAEQgEAGgCAGQgLAEAOAcQAHAOAKAOQAFAPgeARIgSAJQgoAVgZAKIgLAFIBoAgIBXAgIgMAhIgDAIQgIAVgGAXIgHAdIgEAYQgKASAIAgQAFAQAGANICDC5IAtBDQCTDMBEDMQAOAqAKArIAKAxQAPBSgDAtIgBALIAHCnIAGAbQAdCZglDVIgBAHQgaCPgcBFIgPAiQgRAmADDTIABAZQABBzAFBsIgBAKIxGANg");
	this.shape_487.setTransform(362.2,219.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#373535").ss(2.5).p("Aq7A3QAbh8ArhzIAnhaQASgwBNh7QAshHAkg0QAEgHAEgHIBMjLQAFgKAEgKQAUgXgdg/QgFgLgHgMIgjg3QgHgLgGgLQjPlqCJj7QALgSAMgSQAvhGBIg1QASgOAUgMQAsgaAjgOQAZgJAWgEQGhhIAmDXQAFAegCAkQgDA/gcBLQgMAggPAgQgIAUgJARQgPAggOAbQAAABgBACQgCAdgDAjIAiAuQAXAgAVAfQAFAHAFAIQAMATAGARQAHAQgCAQQADAXgIAKQgBACgCABQgFAFgTAIQgOAIgbAFQgJgBAEAQQABAEABAEQABACABADQAMAYABAMQAAAFgBACQgEAEgEAEQgEADgEADQgDADgEACQACAGACAFIAHARQADAGADAGQAEALgEAJQAAACgBACQgEAIgIAPQgBACgBACQgEAGgCAGQgLAEAOAcQAHAOALANQAFAPgeARQgHAEgKAFQgnAVgZAKQgGADgFACIBmAgIBVAhIgMAhQgBAEgCAFQgIAUgGAXQgDAPgEAOIgEAYQgJASAIAgQAFAQAHANICEC4QAWAhAXAiQCSDLBFDMQAOArAKArQAFAaAFAXQAOBTgCAsQgBAGAAAFIAHCnQADAOACAOQAdCYglDVQgBAEAAADQgaCQgcBFQgIARgHARQgRAlADDUQAAAMAAANQACByAEBsQAAAFgBAFIxGANIgFgmIAKiyQACgNgFgfQgOhchYksQgEgPgFgPIhrlhQgDgKgDgJQhtliBXmOg");
	this.shape_488.setTransform(362.3,219.1);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#ECB77F").s().p("AnMcfIAKiyQACgNgFgfQgOhchYksIgJgeIhrlhIgGgTQhtliBXmOIAAAAQAbh8ArhzIAnhaQASgwBNh7QAshHAkg0IAIgOIBMjLIAJgUQAUgXgdg/IgMgXIgjg3IgNgWQjPlqCJj7QALgSAMgSQAvhGBIg1QASgOAUgMQAsgaAjgOQAZgJAWgEQGhhIAmDXQAFAegCAkQgDA/gcBLQgMAggPAgIgRAlIgdA7IgBADIgFBAIAiAuQAXAgAVAfIAKAPQAMATAGARQAHAQgCAQQADAXgIAKIgDADQgFAFgTAIQgOAIgbAFQgJgBAEAQIACAIIACAFQAMAYABAMQAAAFgBACIgIAIIgIAGIgHAFIAEALIAHARIAGAMQAEALgEAJIgBAEQgEAIgIAPIgCAEQgEAGgCAGQgLAEAOAcQAHAOALANQAFAPgeARIgRAJQgnAVgZAKIgLAFIBmAgIBVAhIgMAhIgDAJQgIAUgGAXIgHAdIgEAYQgJASAIAgQAFAQAHANICEC4IAtBDQCSDLBFDMQAOArAKArIAKAxQAOBTgCAsIgBALIAHCnIAFAcQAdCYglDVIgBAHQgaCQgcBFIgPAiQgRAlADDUIAAAZQACByAEBsIgBAKIxGANg");
	this.shape_489.setTransform(362.3,219.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#373535").ss(2.5).p("Aq8A3QAbh8ArhzIAnhaQASgwBNh7QAshHAkg0QAEgHAEgHIBMjLQAFgKAEgKQATgXgcg/QgFgLgHgMIgjg4QgHgLgHgLQjOlpCKj7QAKgTAMgRQAvhGBIg1QATgOAUgMQArgbAkgNQAZgJAWgEQGghIAmDYQAFAegCAkQgEA+gbBMQgMAfgPAhQgJATgIASQgPAggOAbQAAABgBABQgCAegCAjIAhAuQAXAfAVAgQAGAHAEAHQAMAUAGAQQAHAQgCAQQADAXgJAKQgBACgCACQgFAEgTAIQgNAJgbAFQgJgBAEAQQABAEABAEQABACABACQALAYACAMQAAAFgBADQgEAEgEADQgEAEgEADQgDADgEACQACAFACAGIAHARQACAFAEAHQAEALgEAJQgBABAAACQgEAJgIAOQgBACgBACQgEAGgCAGQgLAFAPAcQAHANALAOQAFAOgdARQgHAEgKAFQglAVgZAKQgGADgFACIBjAgIBUAiIgMAhQgCAEgBAFQgIAUgGAXQgEAPgDAOIgDAYQgJASAIAgQAFAQAHAMICEC4QAXAhAWAiQCTDLBFDMQAOArAKArQAGAaAEAXQAOBTgCAsQgBAGAAAFIAHCnQADAOACAOQAcCYgkDVQgBAEgBADQgZCQgdBFQgHARgIARQgQAmACDTQAAAMAAANQACBzAEBsQAAAEgBAFIxHANIgFgmIAKiyQACgMgFggQgOhbhYktQgEgPgFgOIhrliQgDgJgDgKQhtlhBXmPg");
	this.shape_490.setTransform(362.4,219.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#ECB77F").s().p("AnNcfIAKiyQACgMgFggQgOhbhYktIgJgdIhrliIgGgTQhtlhBXmPIAAAAQAbh8ArhzIAnhaQASgwBNh7QAshHAkg0IAIgOIBMjLIAJgUQATgXgcg/IgMgXIgjg4IgOgWQjOlpCKj7QAKgTAMgRQAvhGBIg1QATgOAUgMQArgbAkgNQAZgJAWgEQGghIAmDYQAFAegCAkQgEA+gbBMQgMAfgPAhIgRAlQgPAggOAbIgBACIgEBBIAhAuQAXAfAVAgIAKAOQAMAUAGAQQAHAQgCAQQADAXgJAKIgDAEQgFAEgTAIQgNAJgbAFQgJgBAEAQIACAIIACAEQALAYACAMQAAAFgBADIgIAHIgIAHIgHAFIAEALIAHARIAGAMQAEALgEAJIgBADQgEAJgIAOIgCAEIgGAMQgLAFAPAcQAHANALAOQAFAOgdARIgRAJQglAVgZAKIgLAFIBjAgIBUAiIgMAhIgDAJQgIAUgGAXIgHAdIgDAYQgJASAIAgQAFAQAHAMICEC4IAtBDQCTDLBFDMQAOArAKArQAGAaAEAXQAOBTgCAsIgBALIAHCnIAFAcQAcCYgkDVIgCAHQgZCQgdBFIgPAiQgQAmACDTIAAAZQACBzAEBsIgBAJIxHANg");
	this.shape_491.setTransform(362.4,219.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#373535").ss(2.5).p("Aq9A3QAbh8ArhzIAnhaQASgwBNh8QAthGAjg0QAEgIAEgHIBNjKQAEgKAEgKQATgYgcg+QgFgLgHgMIgjg4QgHgLgHgLQjOlqCKj7QAKgSAMgSQAwhGBHg0QATgOAUgNQAsgaAjgNQAZgJAWgEQGhhIAlDYQAFAfgCAjQgEA/gbBMQgMAfgPAhQgJATgJARQgOAggOAcQgBABAAABQgCAegCAiIAhAvQAYAfAVAfQAFAIAFAHQAMAUAFAQQAGAQgBAQQACAXgJAJQgBACgBACQgGAFgSAIQgNAJgaAEQgKAAAEAQQABADABAEQABADABACQALAYACAMQAAAFgBACQgEAFgDADQgFAEgEADQgDADgEACQACAFACAGIAHARQACAFADAGQAEAMgDAIQgBACgBACQgDAJgIAOQgBACgBACQgEAGgCAGQgKAEAOAcQAIAOAKANQAGAOgdARQgGAEgKAFQgjAVgZAKQgHADgEACIBgAgIBSAjIgMAiQgBAEgCAEQgIAUgFAXQgEAPgDAOIgDAYQgJASAJAfQAFAQAHANICFC3QAXAhAWAiQCTDKBFDNQAOArAKArQAGAaAEAXQAOBUgCArQAAAGgBAFIAHCnQADAOACAOQAcCZglDUQgBAEAAADQgaCQgdBFQgHARgHARQgRAmACDTQAAAMAAANQACBzAEBsQgBAFAAAEIxHANIgGgmIAKixQACgNgFggQgOhahYkuQgEgOgFgPIhrliQgDgJgDgKQhtlhBXmPg");
	this.shape_492.setTransform(362.5,219.1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#ECB77F").s().p("AnOcfIAKixQACgNgFggQgOhahYkuIgJgdIhrliIgGgTQhtlhBXmPIAAAAQAbh8ArhzIAnhaQASgwBNh8QAthGAjg0IAIgPIBNjKIAIgUQATgYgcg+IgMgXIgjg4IgOgWQjOlqCKj7QAKgSAMgSQAwhGBHg0QATgOAUgNQAsgaAjgNQAZgJAWgEQGhhIAlDYQAFAfgCAjQgEA/gbBMQgMAfgPAhQgJATgJARIgcA8IgBACIgEBAIAhAvQAYAfAVAfIAKAPQAMAUAFAQQAGAQgBAQQACAXgJAJIgCAEQgGAFgSAIQgNAJgaAEQgKAAAEAQIACAHIACAFQALAYACAMQAAAFgBACIgHAIIgJAHIgHAFIAEALIAHARIAFALQAEAMgDAIIgCAEIgLAXIgCAEIgGAMQgKAEAOAcQAIAOAKANQAGAOgdARIgQAJQgjAVgZAKIgLAFIBgAgIBSAjIgMAiIgDAIQgIAUgFAXIgHAdIgDAYQgJASAJAfQAFAQAHANICFC3IAtBDQCTDKBFDNQAOArAKArQAGAaAEAXQAOBUgCArIgBALIAHCnIAFAcQAcCZglDUIgBAHQgaCQgdBFIgOAiQgRAmACDTIAAAZQACBzAEBsIgBAJIxHANg");
	this.shape_493.setTransform(362.5,219.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#373535").ss(2.5).p("Aq+A3QAbh8AshzIAmhaQATgwBNh8QAshGAjg1QAFgHAEgHIBMjLQAFgJADgLQAUgXgdg/QgFgLgGgLIgkg4QgHgLgGgLQjPlqCKj7QALgSAMgSQAwhGBHg1QATgOAUgMQAsgaAjgNQAZgJAWgEQGhhIAkDZQAFAegCAkQgEA/gbBLQgMAggPAgQgJAUgIARQgPAggOAbQAAABgBACQgBAdgCAjIAhAuQAYAgAUAfQAGAHAFAIQAMAUAFAQQAGAQgCAPQACAXgJAJQgBACgCACQgFAFgSAIQgNAJgaAFQgJAAADAQQABADABAEQABACABADQAMAYABAMQABAFgCACQgDAEgEAEQgEADgEAEQgEACgDADQACAFACAFIAGARQACAGADAGQAEALgDAJQgBACgBACQgDAJgIAOQgBACgBACQgDAGgCAGQgKAEAOAcQAIANALANQAGAPgcAQQgHAFgJAEQgiAVgZALQgGACgFACIBeAgIBRAkIgMAiQgCAEgCAEQgHAVgGAWQgDAPgEAOIgCAYQgJASAJAfQAFAQAHANICGC2QAXAhAXAiQCSDKBGDNQAOArAKArQAFAaAEAXQAPBUgCArQgBAGAAAFIAGCnQADAOADAOQAbCZglDUQAAAEgBADQgaCQgdBFQgHARgHARQgRAnACDSQAAAMAAANQABBzAEBsQAAAFgBAEIxHANIgHglIAKiyQACgNgFgfQgNhahYkvQgFgOgEgPIhrlhQgDgKgDgKQhtlhBWmPg");
	this.shape_494.setTransform(362.5,219.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#ECB77F").s().p("AnPcgIAKiyQACgNgFgfQgNhahYkvIgJgdIhrlhIgGgUQhtlhBWmPIAAAAQAbh8AshzIAmhaQATgwBNh8IBPh7IAJgOIBMjLIAIgUQAUgXgdg/IgLgWIgkg4IgNgWQjPlqCKj7QALgSAMgSQAwhGBHg1QATgOAUgMQAsgaAjgNQAZgJAWgEQGhhIAkDZQAFAegCAkQgEA/gbBLQgMAggPAgIgRAlQgPAggOAbIgBADIgDBAIAhAuQAYAgAUAfQAGAHAFAIQAMAUAFAQQAGAQgCAPQACAXgJAJIgDAEQgFAFgSAIQgNAJgaAFQgJAAADAQIACAHIACAFQAMAYABAMQABAFgCACIgHAIIgIAHIgHAFIAEAKIAGARIAFAMQAEALgDAJIgCAEQgDAJgIAOIgCAEQgDAGgCAGQgKAEAOAcQAIANALANQAGAPgcAQQgHAFgJAEQgiAVgZALIgLAEIBeAgIBRAkIgMAiIgEAIQgHAVgGAWIgHAdIgCAYQgJASAJAfQAFAQAHANICGC2IAuBDQCSDKBGDNQAOArAKArIAJAxQAPBUgCArIgBALIAGCnIAGAcQAbCZglDUIgBAHQgaCQgdBFIgOAiQgRAnACDSIAAAZQABBzAEBsIgBAJIxHANg");
	this.shape_495.setTransform(362.5,219.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#373535").ss(2.5).p("Aq/A3QAbh8AshzIAmhbQATgvBNh8QAshGAjg1QAFgHAEgHIBMjLQAFgJADgLQAUgXgdg/QgFgLgHgMIgjg3QgHgLgGgLQjPlqCLj7QAKgTAMgSQAwhFBIg1QATgOAUgMQArgaAkgNQAZgJAWgEQGhhIAjDaQAFAegCAkQgEA+gbBMQgMAfgPAhQgJATgJASQgOAggOAbQAAABgBABQgBAegCAjIAiAuQAXAfAVAgQAFAHAFAHQAMAVAFAQQAGAPgDAQQACAWgJAKQgBACgCABQgFAFgSAIQgMAKgaAFQgJAAADAPQABAEABAEQABACABACQAMAYABAMQABAFgCADQgDAEgEAEQgEADgEADQgDADgEACQACAGACAFIAGARQACAFADAHQAEALgDAJQgBABgBADQgDAJgIAOQgBACgBACQgDAGgCAGQgJAEAOAbQAIAOALANQAGAOgcAQQgGAFgJAEQggAVgZALQgGACgFACIBbAhIBPAkIgMAiQgBAEgCAEQgIAVgFAWQgEAPgDAOIgCAYQgIASAJAfQAFAQAHAMICHC2QAXAhAWAiQCTDJBGDOQAOArAKArQAFAaAEAXQAPBUgCArQgBAGAAAFIAGCnQADAOADAOQAbCZglDVQgBADgBAEQgaCPgdBFQgHARgHARQgRAnACDTQAAAMAAANQABByAEBtQgBAEAAAFIxIAMIgHglIAKixQACgNgFggQgNhZhYkvQgFgPgEgPIhrlhQgDgKgDgJQhtliBWmPg");
	this.shape_496.setTransform(362.6,219.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#ECB77F").s().p("AnQcgIAKixQACgNgFggQgNhZhYkvIgJgeIhrlhIgGgTQhtliBWmPIAAAAQAbh8AshzIAmhbQATgvBNh8QAshGAjg1IAJgOIBMjLIAIgUQAUgXgdg/IgMgXIgjg3IgNgWQjPlqCLj7QAKgTAMgSQAwhFBIg1QATgOAUgMQArgaAkgNQAZgJAWgEQGhhIAjDaQAFAegCAkQgEA+gbBMQgMAfgPAhIgSAlQgOAggOAbIgBACIgDBBIAiAuQAXAfAVAgIAKAOQAMAVAFAQQAGAPgDAQQACAWgJAKIgDADQgFAFgSAIQgMAKgaAFQgJAAADAPIACAIIACAEQAMAYABAMQABAFgCADIgHAIIgIAGIgHAFIAEALIAGARIAFAMQAEALgDAJIgCAEQgDAJgIAOIgCAEQgDAGgCAGQgJAEAOAbQAIAOALANQAGAOgcAQQgGAFgJAEQggAVgZALIgLAEIBbAhIBPAkIgMAiIgDAIQgIAVgFAWIgHAdIgCAYQgIASAJAfQAFAQAHAMICHC2IAtBDQCTDJBGDOQAOArAKArIAJAxQAPBUgCArIgBALIAGCnIAGAcQAbCZglDVIgCAHQgaCPgdBFIgOAiQgRAnACDTIAAAZQABByAEBtIgBAJIxIAMg");
	this.shape_497.setTransform(362.6,219.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#373535").ss(2.5).p("ArAA3QAbh8AshzIAmhbQATgvBNh8QAshGAjg1QAFgHAEgHIBMjLQAFgKAEgKQATgXgdg/QgFgLgHgMIgjg3QgHgMgHgLQjOlqCLj7QAKgSANgSQAvhGBIg0QATgOAUgMQAsgaAjgNQAZgJAWgEQGhhIAjDaQAFAfgCAjQgEA/gcBMQgMAfgPAhQgIATgJARQgOAggOAcQAAABgBABQgBAegBAiIAhAvQAYAfAUAfQAGAIAEAHQAMAUAFAQQAGAQgDAPQACAWgKAKQgBACgBABQgGAFgRAJQgMAKgaAEQgJAAADAQQABADABAEQABADABACQALAYACAMQABAFgCACQgDAFgEADQgEAEgEADQgDADgEACQACAGACAFIAGARQABAFAEAHQADALgDAJQgBABAAACQgDAJgIAPQgBACgBACQgDAFgBAGQgKAFAPAbQAIANALANQAGAOgbAQQgGAFgJAEQgeAVgZALQgGACgFACIBYAhIBOAmIgMAhQgCAEgBAEQgIAVgFAWQgEAPgDAOIgCAYQgHASAJAfQAFAPAHANICIC1QAXAhAWAiQCTDJBGDOQAOAqAKAsQAGAaAEAXQAOBVgCAqQgBAGAAAFIAGCnQADAOADAOQAaCaglDUQAAADgBAEQgaCQgdBEQgHARgIARQgQAoABDSQAAAMAAANQABBzAEBsQgBAEAAAFIxJAMIgHgkIAKiyQACgNgEgfQgNhZhZkwQgFgPgEgOIhrliQgDgKgDgJQhtliBWmPg");
	this.shape_498.setTransform(362.7,219.1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#ECB77F").s().p("AnRchIAKiyQACgNgEgfQgNhZhZkwIgJgdIhrliIgGgTQhtliBWmPIAAAAQAbh8AshzIAmhbQATgvBNh8QAshGAjg1IAJgOIBMjLIAJgUQATgXgdg/IgMgXIgjg3IgOgXQjOlqCLj7QAKgSANgSQAvhGBIg0QATgOAUgMQAsgaAjgNQAZgJAWgEQGhhIAjDaQAFAfgCAjQgEA/gcBMQgMAfgPAhIgRAkIgcA8IgBACIgCBAIAhAvQAYAfAUAfIAKAPQAMAUAFAQQAGAQgDAPQACAWgKAKIgCADQgGAFgRAJQgMAKgaAEQgJAAADAQIACAHIACAFQALAYACAMQABAFgCACIgHAIIgIAHIgHAFIAEALIAGARIAFAMQADALgDAJIgBADQgDAJgIAPIgCAEQgDAFgBAGQgKAFAPAbQAIANALANQAGAOgbAQQgGAFgJAEQgeAVgZALIgLAEIBYAhIBOAmIgMAhIgDAIQgIAVgFAWIgHAdIgCAYQgHASAJAfQAFAPAHANICIC1IAtBDQCTDJBGDOQAOAqAKAsQAGAaAEAXQAOBVgCAqIgBALIAGCnIAGAcQAaCaglDUIgBAHQgaCQgdBEIgPAiQgQAoABDSIAAAZQABBzAEBsIgBAJIxJAMg");
	this.shape_499.setTransform(362.7,219.1);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#373535").ss(2.5).p("ArAA3QAbh8ArhzIAnhbQASgvBOh8QAshGAjg1QAEgHAEgHIBNjLQAFgKADgKQATgYgdg+QgFgLgGgMIgkg4QgGgLgHgLQjPlqCMj7QAKgSAMgSQAwhGBIg1QATgNAUgMQAsgbAjgNQAZgIAWgEQGhhIAjDbQAFAegCAkQgFA/gbBLQgMAggPAgQgJAUgJARQgOAggOAbQAAACgBABQAAAdgBAjIAhAuQAYAgAUAfQAGAHAEAIQAMAUAFAQQAFAQgDAPQACAWgKAJQgBACgCACQgFAEgRAJQgMAKgZAFQgJAAADAQQAAADABAEQABACABADQAMAXACANQAAAFgBACQgDAFgEADQgEADgEAEQgEADgDACQACAFABAGIAGARQACAFADAGQADALgDAJQAAACgBACQgDAJgHAOQgBACgBACQgEAGgBAGQgJAFAPAaQAIAOALAMQAGAOgaAQQgFAFgJAEQgdAVgYALQgHACgFACIBVAhIBNAnIgMAhQgCAEgBAEQgIAVgFAWQgEAPgCAPIgCAXQgHASAJAfQAFAPAIANICIC0QAXAhAXAiQCSDIBHDPQAOAqAKAsQAFAaAEAXQAOBVgCAqQAAAGgBAFIAHCnQADAOACAOQAaCaglDUQAAADgBAEQgaCQgdBEQgIARgHASQgRAnACDSQAAAMAAANQABBzADBsQAAAEgBAFIxJAMIgHgkIAKiyQACgNgFgfQgNhYhYkxQgFgOgEgPIhsliQgDgJgDgKQhtliBXmPg");
	this.shape_500.setTransform(362.8,219.1);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#ECB77F").s().p("AnRchIAKiyQACgNgFgfQgNhYhYkxIgJgdIhsliIgGgTQhtliBXmPIAAAAQAbh8ArhzIAnhbQASgvBOh8QAshGAjg1IAIgOIBNjLQAFgKADgKQATgYgdg+IgLgXIgkg4IgNgWQjPlqCMj7IAWgkQAwhGBIg1QATgNAUgMQAsgbAjgNQAZgIAWgEQGhhIAjDbQAFAegCAkQgFA/gbBLQgMAggPAgIgSAlQgOAggOAbIgBADIgBBAIAhAuQAYAgAUAfIAKAPQAMAUAFAQQAFAQgDAPQACAWgKAJIgDAEQgFAEgRAJQgMAKgZAFQgJAAADAQIABAHIACAFQAMAXACANQAAAFgBACQgDAFgEADIgIAHIgHAFIADALIAGARIAFALQADALgDAJIgBAEQgDAJgHAOIgCAEQgEAGgBAGQgJAFAPAaQAIAOALAMQAGAOgaAQQgFAFgJAEQgdAVgYALIgMAEIBVAhIBNAnIgMAhIgDAIQgIAVgFAWIgGAeIgCAXQgHASAJAfQAFAPAIANICIC0IAuBDQCSDIBHDPQAOAqAKAsIAJAxQAOBVgCAqIgBALIAHCnIAFAcQAaCaglDUIgBAHQgaCQgdBEIgPAjQgRAnACDSIAAAZQABBzADBsIgBAJIxJAMg");
	this.shape_501.setTransform(362.8,219.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#373535").ss(2.5).p("ArBA2QAbh8ArhzIAnhaQASgwBOh8QAshGAjg1QAEgHAFgHIBMjLQAFgJADgLQATgYgdg+QgFgLgGgMIgkg3QgHgLgGgMQjPlqCMj7QAKgSANgSQAvhGBIg0QATgOAUgMQAsgaAkgNQAZgJAWgEQGhhHAiDbQAFAegDAkQgEA/gcBLQgMAggPAgQgIAUgJARQgOAggOAcQAAABgBABQAAAegBAiIAiAuQAXAgAVAfQAFAIAEAHQAMAVAFAPQAFAQgDAPQABAWgKAJQgBACgCABQgFAFgRAJQgLALgZAEQgJAAADAQQAAADABAEQABADABACQAMAXACANQAAAFgBACQgDAFgEADQgEAEgEADQgEADgDACQACAGABAFIAGARQABAFADAHQAEALgDAJQgBABAAACQgDAJgHAPQgBACgBACQgDAFgBAGQgJAFAPAaQAIANALANQAHAOgaAQQgFAEgJAFQgbAVgZAKQgGADgFACIBSAhIBMAnIgMAhQgCAEgCAEQgIAVgEAXQgEAPgCAOIgCAXQgHASAKAfQAFAPAIANICJCzQAXAiAWAhQCTDIBHDQQAOAqAKAsQAFAZAEAYQAOBVgCAqQAAAFAAAGIAGCnQADAOACANQAaCbglDTQgBAEgBADQgaCRgdBEQgHARgHARQgRApABDRQAAAMAAANQABBzADBsQgBAEgBAFIxIAMIgIgkIAKiyQACgNgFgfQgMhXhZkyQgFgOgEgPIhrliQgDgKgDgJQhuliBXmPg");
	this.shape_502.setTransform(362.9,219.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#ECB77F").s().p("AnSciIAKiyQACgOgFgeQgMhYhZkxIgJgeIhrliIgGgTQhuliBXmPIAAAAQAbh8ArhzIAnhbQASgwBOh7QAshGAjg1IAJgOIBMjLQAFgKADgKQATgYgdg/IgLgWIgkg4IgNgWQjPlqCMj7QAKgTANgSQAvhFBIg1QATgOAUgMQAsgaAkgNQAZgJAWgDQGhhIAiDcQAFAegDAkQgEA+gcBMQgMAggPAgQgIATgJARIgcA8IgBACIgBBAIAiAvQAXAfAVAgIAJAPQAMAUAFAQQAFAPgDAPQABAWgKAJIgDAEQgFAFgRAJQgLAKgZAFQgJAAADAPIABAIIACAEQAMAYACAMQAAAFgBADIgHAIIgIAHIgHAFIADALIAGAQIAEAMQAEALgDAJIgBAEQgDAJgHAOIgCAEQgDAGgBAGQgJAEAPAbQAIANALANQAHAOgaAPQgFAFgJAEQgbAVgZALIgLAEIBSAhIBMAoIgMAhIgEAIQgIAVgEAWIgGAeIgCAXQgHASAKAeQAFAQAIAMICJC0IAtBDQCTDIBHDPQAOAqAKAsIAJAxQAOBWgCApIAAALIAGCoIAFAbQAaCaglDUIgCAHQgaCQgdBEIgOAjQgRAoABDRIAAAZQABBzADBsIgCAJIxIAMg");
	this.shape_503.setTransform(362.9,219.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#373535").ss(2.5).p("ArCA3QAbh8ArhzIAnhbQATgwBNh7QAshHAjg0QAEgHAFgIIBMjLQAFgJADgLQATgXgdg/QgFgLgHgLIgjg4QgHgLgHgLQjOlrCMj7QALgSAMgSQAwhGBIg0QATgOAUgMQAsgaAjgNQAZgJAWgEQGhhHAiDcQAFAfgDAjQgEA/gcBLQgMAggPAhQgJATgJARQgNAggOAcQAAABgBABQAAAeAAAiIAhAuQAYAgAUAfQAFAIAFAHQALAVAFAQQAFAPgEAPQABAVgJAKQgCABgBACQgGAFgQAJQgLALgZAFQgJAAADAPQAAADABAEQABADABACQALAYADAMQAAAFgBACQgDAFgEADQgEAEgEADQgDADgEACQACAGABAFIAFARQACAFADAHQAEALgDAJQgBABgBADQgCAJgHAOQgBACgBACQgDAGgBAGQgJAEAPAaQAIANAMANQAHAOgZAPQgFAFgIAEQgaAVgZALQgGACgFACIBPAiIBKAoIgMAhQgCAEgBAEQgIAVgFAWQgDAPgDAPIgBAXQgGASAKAeQAFAPAIANICJCzQAYAhAWAiQCTDHBHDQQAOAqAKAsQAFAaAEAYQAPBVgDApQAAAGAAAFIAGCoQADANACAOQAaCbgmDTQAAADgBAEQgbCQgdBEQgHARgHASQgRApABDQQAAAMAAANQABBzADBtQgBAEgBAEIxJAMIgIgjIAKiyQACgNgFgfQgMhXhZkyQgFgPgEgOIhrliQgDgKgDgKQhuliBXmPg");
	this.shape_504.setTransform(363,219.1);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#ECB77F").s().p("AnTciIAKiyQACgNgFgfQgMhXhZkyIgJgdIhrliIgGgUQhuliBXmPIAAAAQAbh8ArhzIAnhbQATgwBNh7QAshHAjg0IAJgPIBMjLIAIgUQATgXgdg/IgMgWIgjg4IgOgWQjOlrCMj7QALgSAMgSQAwhGBIg0QATgOAUgMQAsgaAjgNQAZgJAWgEQGhhHAiDcQAFAfgDAjQgEA/gcBLQgMAggPAhIgSAkQgNAggOAcIgBACIAABAIAhAuQAYAgAUAfIAKAPQALAVAFAQQAFAPgEAPQABAVgJAKIgDADQgGAFgQAJQgLALgZAFQgJAAADAPIABAHIACAFQALAYADAMQAAAFgBACIgHAIIgIAHIgHAFIADALIAFARIAFAMQAEALgDAJIgCAEQgCAJgHAOIgCAEQgDAGgBAGQgJAEAPAaQAIANAMANQAHAOgZAPQgFAFgIAEQgaAVgZALIgLAEIBPAiIBKAoIgMAhIgDAIQgIAVgFAWIgGAeIgBAXQgGASAKAeQAFAPAIANICJCzIAuBDQCTDHBHDQQAOAqAKAsIAJAyQAPBVgDApIAAALIAGCoIAFAbQAaCbgmDTIgBAHQgbCQgdBEIgOAjQgRApABDQIAAAZQABBzADBtIgCAIIxJAMg");
	this.shape_505.setTransform(363,219.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#373535").ss(2.5).p("ArDA3QAbh8ArhzIAnhbQATgwBNh7QAshHAjg0QAEgIAFgHIBMjLQAFgJADgLQATgYgdg+QgFgLgHgMIgjg3QgHgLgHgMQjOlqCMj7QALgTAMgRQAwhGBIg0QATgOAUgMQAsgaAjgNQAZgJAXgEQGhhHAhDdQAFAegDAkQgEA/gcBLQgMAggPAgQgJATgJASQgOAfgNAcQAAACgBABQAAAdAAAjIAiAuQAXAgAUAfQAGAIAEAHQAMAVAEAPQAFAQgEAPQABAVgKAJQgCACgBABQgFAFgQAJQgLAMgZAEQgJABADAPQAAADABAEQABACABADQALAXADANQAAAFgBACQgDAFgEADQgEAEgEADQgDADgEACQACAFABAGIAFARQACAFADAHQADALgDAJQAAABgBACQgCAKgHAOQgBACgBACQgDAFgBAGQgIAFAPAaQAIANAMAMQAHAOgYAQQgFAEgIAEQgYAVgZALQgGACgFACIBMAiIBJApIgMAhQgCAEgBAEQgIAVgFAWQgDAQgDAOIAAAXQgGASAKAeQAFAPAIAMICKCzQAXAhAXAiQCTDHBHDQQAOAqAKAsQAGAaADAYQAPBWgDAoQAAAGAAAFIAGCoQADANACAOQAZCbglDTQgBAEgBADQgaCQgeBEQgHARgHASQgQApAADRQAAAMAAANQABBzADBsQgBAEgBAEIxJAMIgJgiIAKiyQACgOgFgeQgMhXhZkzQgFgOgEgPIhrliQgDgKgDgJQhuliBXmQg");
	this.shape_506.setTransform(363.1,219.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#ECB77F").s().p("AnUcjIAKiyQACgOgFgeQgMhXhZkzIgJgdIhrliIgGgTQhuliBXmQIAAAAQAbh8ArhzIAnhbQATgwBNh7QAshHAjg0IAJgPIBMjLIAIgUQATgYgdg+IgMgXIgjg3IgOgXQjOlqCMj7QALgTAMgRQAwhGBIg0QATgOAUgMQAsgaAjgNQAZgJAXgEQGhhHAhDdQAFAegDAkQgEA/gcBLQgMAggPAgIgSAlIgbA7IgBADIAABAIAiAuQAXAgAUAfIAKAPQAMAVAEAPQAFAQgEAPQABAVgKAJIgDADQgFAFgQAJQgLAMgZAEQgJABADAPIABAHIACAFQALAXADANQAAAFgBACIgHAIIgIAHIgHAFIADALIAFARIAFAMQADALgDAJIgBADQgCAKgHAOIgCAEQgDAFgBAGQgIAFAPAaQAIANAMAMQAHAOgYAQIgNAIQgYAVgZALIgLAEIBMAiIBJApIgMAhIgDAIQgIAVgFAWIgGAeIAAAXQgGASAKAeQAFAPAIAMICKCzIAuBDQCTDHBHDQQAOAqAKAsQAGAaADAYQAPBWgDAoIAAALIAGCoIAFAbQAZCbglDTIgCAHQgaCQgeBEIgOAjQgQApAADRIAAAZQABBzADBsIgCAIIxJAMg");
	this.shape_507.setTransform(363.1,219.1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#373535").ss(2.5).p("ArEA3QAbh8ArhzIAnhbQATgwBNh7QAshHAjg1QAFgHAEgHIBMjLQAFgJAEgLQASgYgdg+QgFgLgHgMIgjg4QgHgLgHgLQjOlrCNj7QAKgSAMgSQAwhFBIg1QAUgNATgMQAtgbAjgMQAZgJAWgEQGihHAgDeQAFAegDAkQgEA+gcBMQgNAggPAgQgIATgJARQgOAggNAcQgBABAAACQAAAdABAiIAhAvQAYAfAUAgQAFAHAEAIQAMAVAEAPQAFAPgFAPQABAVgKAJQgCACgBABQgFAFgQAKQgKALgYAFQgKAAADAPQAAAEABAEQABACABACQALAYADAMQAAAFgBADQgDAEgEAEQgEADgEAEQgDADgEACQACAFABAGIAFARQABAFADAGQAEALgDAJQgBACAAACQgDAJgGAOQgBACgBACQgDAGgBAGQgIAFAQAaQAIAMALANQAIANgYAQQgEAEgIAEQgWAVgZALQgGACgFACIBJAiIBIAqIgMAhQgCAEgCAEQgIAVgEAXQgDAPgDAOIAAAXQgGASAKAeQAGAPAIAMICLCyQAXAhAXAhQCTDHBHDRQAPAqAJAsQAGAaAEAYQAOBWgCAoQgBAGAAAFIAGCoQADANACAOQAZCbgmDTQAAAEgBADQgbCRgdBEQgHAQgHASQgRAqAADQQAAAMAAANQABBzADBsQgBAEgBAEIxKAMIgJgiIAKiyQACgOgFgeQgLhWhakzQgFgPgEgPIhrliQgDgKgDgJQhuliBXmQg");
	this.shape_508.setTransform(363.2,219.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#ECB77F").s().p("AnVcjIAKiyQACgOgFgeQgLhWhakzIgJgeIhrliIgGgTQhtliBWmQIAAAAQAbh8AshzIAmhbQATgwBNh7IBPh8IAJgOIBMjLQAFgJAEgLQASgYgdg+IgMgXIgjg4IgOgWQjOlrCNj7IAWgkQAxhFBHg1IAngZQAtgbAjgMQAZgJAWgEQGihHAgDeQAFAegDAkQgEA+gcBMQgMAggQAgQgIATgJARQgOAggNAcIgBADIABA/IAhAvQAYAfAUAgIAJAPQAMAVAEAPQAFAPgFAPQABAVgKAJIgDADQgFAFgQAKQgKALgYAFQgKAAADAPIABAIIACAEQALAYADAMQAAAFgBADIgHAIIgIAHIgHAFIADALIAFARIAEALQAEALgDAJIgBAEQgDAJgGAOIgCAEQgDAGgBAGQgIAFAQAaQAIAMALANQAIANgYAQQgEAEgHAEQgXAVgZALIgLAEIBJAiIBIAqIgMAhIgEAIQgIAVgEAXIgGAdIAAAXQgGASAKAeQAGAPAIAMICLCyIAuBCQCTDHBHDRQAPAqAJAsIAKAyQAOBWgCAoIgBALIAGCoIAFAbQAZCbgmDTIgBAHQgbCRgdBEIgOAiQgRAqAADQIAAAZQABBzADBsIgCAIIxKAMg");
	this.shape_509.setTransform(363.2,219.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#373535").ss(2.5).p("ArFA3QAbh8AshzIAnhbQASgwBOh7QAshHAjg1QAEgHAEgHIBNjLQAFgKADgKQASgYgdg+QgFgLgGgMIgkg4QgHgLgGgLQjPlrCNj7QALgSAMgSQAwhFBIg1QAUgOATgMQAtgaAjgMQAZgJAWgEQGihHAgDeQAEAfgCAjQgFA/gcBLQgMAggPAgQgJAUgJARQgOAggNAcQAAABAAABQAAAeABAiIAhAuQAYAgAUAfQAFAIAEAHQAMAWAEAPQAFAPgGAPQABAUgKAJQgCACgBACQgGAEgPAKQgKAMgYAFQgJAAACAPQABADAAAEQABADABACQAMAXACANQABAFgCACQgCAFgEAEQgEADgEAEQgDACgEADQACAFABAGIAEAQQABAFADAHQAEALgDAJQAAACgBACQgCAJgHAOQgBACAAACQgEAGAAAGQgIAFAQAZQAIANAMAMQAHAOgWAPQgFAEgHAFQgVAUgYALQgHACgFACIBHAiIBGArIgMAhQgCAEgCAEQgIAVgEAXQgDAPgCAOIAAAXQgGASALAdQAFAPAIANICMCxQAXAhAXAhQCTDHBIDRQAOAqAKAsQAFAaAEAYQAOBXgCAnQAAAGgBAFIAHCoQACANADAOQAYCcgmDSQAAAEgBADQgbCRgdBEQgHAQgHATQgRApAADQQAAAMAAANQAABzADBsQgBAFgBAEIxKALIgKghIAKiyQACgOgEgeQgMhVhZk1QgFgPgEgOIhsljQgDgJgDgKQhtliBWmQg");
	this.shape_510.setTransform(363.2,219.1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#ECB77F").s().p("AnWckIAKiyQACgOgEgeQgMhVhZk1IgJgdIhsljIgGgTQhtliBWmQIAAAAQAbh8AshzIAnhbQASgwBOh7QAshHAjg1IAIgOIBNjLQAFgKADgKQASgYgdg+IgLgXIgkg4IgNgWQjPlrCNj7QALgSAMgSQAwhFBIg1QAUgOATgMQAtgaAjgMQAZgJAWgEQGihHAgDeQAEAfgCAjQgFA/gcBLQgMAggPAgIgSAlIgbA8IAAACIABBAIAhAuQAYAgAUAfIAJAPQAMAWAEAPQAFAPgGAPQABAUgKAJIgDAEIgVAOQgKAMgYAFQgJAAACAPIABAHIACAFQAMAXACANQABAFgCACQgCAFgEAEIgIAHIgHAFIADALIAEAQIAEAMQAEALgDAJIgBAEQgCAJgHAOIgBAEQgEAGAAAGQgIAFAQAZQAIANAMAMQAHAOgWAPQgFAEgHAFQgVAUgYALIgMAEIBHAiIBGArIgMAhIgEAIQgIAVgEAXIgFAdIAAAXQgGASALAdQAFAPAIANICMCxIAuBCQCTDHBIDRQAOAqAKAsIAJAyQAOBXgCAnIgBALIAHCoIAFAbQAYCcgmDSIgBAHQgbCRgdBEIgOAjQgRApAADQIAAAZQAABzADBsIgCAJIxKALg");
	this.shape_511.setTransform(363.2,219.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#373535").ss(2.5).p("ArGA3QAbh9AshyIAnhbQASgwBOh8QAshGAjg1QAEgHAEgHIBNjLQAFgKADgKQASgYgdg/QgFgLgHgLIgjg4QgHgLgGgLQjPlrCNj7QALgTAMgRQAwhGBJg0QATgOAUgMQAsgaAjgMQAZgJAWgEQGihHAgDfQAEAegCAkQgFA/gdBLQgMAggPAgQgJATgIARQgOAggNAcQAAACgBABQABAdABAiIAhAvQAYAgAUAfQAFAIAFAHQALAVAEAQQAEAPgFAOQAAAVgKAIQgCACgBACQgFAEgPAKQgKANgYAEQgJABACAPQAAADABAEQABACABADQAMAXACANQABAFgCACQgCAFgEADQgEAEgEADQgDADgEADQACAFABAFIAEARQABAFADAHQADALgCAJQgBABAAACQgDAKgGAOQgBACAAACQgEAGABAGQgIAEAQAaQAIAMAMAMQAHAOgVAPQgFAEgHAFQgTAUgZALQgGACgFACIBEAiIBEAsIgMAhQgBAEgCAEQgIAVgEAXQgDAPgCAOIAAAWQgFATALAdQAFAPAIAMICNCxQAXAhAXAhQCTDGBIDSQAOAqAKAsQAFAZAEAZQAOBXgCAnQAAAGgBAFIAHCoQACANADAOQAYCcgmDSQgBAEAAADQgcCRgdBEQgHAQgHATQgRAqAADPQAAAMAAANQAABzADBtQgBAEgBAEIxKALIgLghIAKiyQACgOgEgeQgLhUhak2QgFgOgEgPIhsljQgDgJgDgKQhtliBWmQg");
	this.shape_512.setTransform(363.3,219.1);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#ECB77F").s().p("AnXckIAKiyQACgOgEgeQgLhUhak2IgJgdIhsljIgGgTQhtliBWmQIAAAAQAbh9AshyIAnhbQASgwBOh8QAshGAjg1IAIgOIBNjLQAFgKADgKQASgYgdg/IgMgWIgjg4IgNgWQjPlrCNj7QALgTAMgRQAwhGBJg0QATgOAUgMQAsgaAjgMQAZgJAWgEQGihHAgDfQAEAegCAkQgFA/gdBLQgMAggPAgIgRAkIgbA8IgBADIACA/IAhAvQAYAgAUAfIAKAPQALAVAEAQQAEAPgFAOQAAAVgKAIIgDAEIgUAOQgKANgYAEQgJABACAPIABAHIACAFQAMAXACANQABAFgCACQgCAFgEADIgIAHIgHAGIADAKIAEARIAEAMQADALgCAJIgBADQgDAKgGAOIgBAEQgEAGABAGQgIAEAQAaQAIAMAMAMQAHAOgVAPQgFAEgHAFQgTAUgZALIgLAEIBEAiIBEAsIgMAhIgDAIQgIAVgEAXIgFAdIAAAWQgFATALAdQAFAPAIAMICNCxIAuBCQCTDGBIDSQAOAqAKAsIAJAyQAOBXgCAnIgBALIAHCoIAFAbQAYCcgmDSIgBAHQgcCRgdBEIgOAjQgRAqAADPIAAAZQAABzADBtIgCAIIxKALg");
	this.shape_513.setTransform(363.3,219.1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#373535").ss(2.5).p("ArHA3QAbh9AshyIAnhbQASgwBOh8QAshGAjg1QAEgHAEgHIBNjMQAFgJADgLQASgYgdg+QgFgLgHgLIgjg4QgHgLgHgLQjOlsCOj7QAKgSANgSQAwhFBIg0QATgOAUgMQAsgaAkgNQAZgIAWgEQGihHAfDgQAEAegDAkQgFA+gcBMQgMAggPAgQgJATgJARQgNAggNAcQAAABgBACQABAdABAiIAiAuQAYAgATAgQAGAHAEAIQALAVAEAQQAEAOgFAPQAAAUgLAJQgCABgBACQgFAFgPAKQgJAMgYAFQgJABACAPQAAADABAEQABACABACQALAXADANQABAFgCADQgCAEgEAEQgEADgEAEQgDADgEACQACAGABAFIAEARQABAFACAGQAEALgDAJQAAACgBACQgCAKgGAOQgBACAAACQgDAGAAAGQgIAEAQAZQAJANAMAMQAIANgWAPQgEAEgHAFQgRAUgZALQgGACgFACIBBAjIBDAsIgMAhQgCAEgCAEQgHAVgFAXQgCAPgCAOIAAAWQgFATALAdQAGAPAIAMICNCwQAYAhAXAhQCTDGBIDSQAPAqAJAsQAFAZAEAZQAOBYgCAmQAAAGAAAFIAGCoQACANADAOQAXCcgmDSQAAAEgBADQgbCRgeBEQgHAQgHATQgQAqgBDPQAAANAAAMQAABzADBtQgBAEgCAEIxKALIgLghIAKiyQACgOgEgeQgLhThak3QgFgOgEgPIhsliQgDgKgDgKQhtliBWmQg");
	this.shape_514.setTransform(363.4,219.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#ECB77F").s().p("AnYckIAKiyQACgOgEgeQgLhThak3IgJgdIhsliIgGgUQhtliBWmQIAAAAQAbh9AshyIAnhbQASgwBOh8QAshGAjg1IAIgOIBNjMQAFgJADgLQASgYgdg+IgMgWIgjg4IgOgWQjOlsCOj7QAKgSANgSQAwhFBIg0QATgOAUgMQAsgaAkgNQAZgIAWgEQGihHAfDgQAEAegDAkQgFA+gcBMQgMAggPAgIgSAkIgaA8IgBADIACA/IAiAuQAYAgATAgIAKAPQALAVAEAQQAEAOgFAPQAAAUgLAJIgDADQgFAFgPAKQgJAMgYAFQgJABACAPIABAHIACAEQALAXADANQABAFgCADQgCAEgEAEIgIAHIgHAFIADALIAEARIADALQAEALgDAJIgBAEQgCAKgGAOIgBAEQgDAGAAAGQgIAEAQAZQAJANAMAMQAIANgWAPQgEAEgHAFQgRAUgZALIgLAEIBBAjIBDAsIgMAhIgEAIQgHAVgFAXIgEAdIAAAWQgFATALAdQAGAPAIAMICNCwIAvBCQCTDGBIDSQAPAqAJAsIAJAyQAOBYgCAmIAAALIAGCoIAFAbQAXCcgmDSIgBAHQgbCRgeBEIgOAjQgQAqgBDPIAAAZQAABzADBtIgDAIIxKALg");
	this.shape_515.setTransform(363.4,219.1);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#373535").ss(2.5).p("ArIA2QAbh8AshzIAnhbQASgwBOh7QAshHAjg1QAEgHAEgHIBNjLQAFgKADgKQASgYgdg/QgFgLgHgLIgjg4QgHgLgHgLQjOlrCOj7QAKgTANgSQAwhFBJg0QATgOAUgMQAsgaAjgMQAZgJAWgDQGjhHAeDgQAEAegDAkQgFA+gcBMQgMAggPAgQgJATgJARQgNAggNAcQAAACgBABQACAdABAiIAhAvQAYAfAUAgQAFAHAEAIQAMAWADAPQAEAOgGAPQAAAUgLAIQgBACgCACQgFAEgOALQgJAMgYAFQgJABACAPQAAADABAEQABACABACQALAXADANQABAFgCADQgCAFgEADQgEAEgEADQgDADgDADQABAFABAFIAEARQAAAFADAHQADAKgCAKQAAABgBACQgCAKgGAOQgBACAAACQgDAGAAAGQgHAFAQAYQAJANAMAMQAIANgVAPQgEAEgGAEQgRAVgYALQgGACgFACIA+AiIBCAtIgMAiQgCAEgCAEQgIAUgEAXQgDAQgBAOIAAAWQgEASALAdQAGAPAIAMICOCvQAYAhAXAiQCSDFBJDSQAPAqAJAtQAGAZADAYQAOBYgCAnQAAAFAAAGIAGCnQACAOADAOQAXCcgmDSQgBAEAAADQgcCRgdBDQgHARgHATQgRAqgBDPQAAAMABANQgBBzADBtQgCAEgBAEIxKALIgMghIAKiyQACgOgEgeQgLhThak3QgFgOgEgPIhsljQgDgJgDgKQhtliBWmQg");
	this.shape_516.setTransform(363.5,219.2);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#ECB77F").s().p("AnZclIAKiyQACgOgEgeQgLhThak3IgJgeIhsliIgGgTQhtljBWmQIAAAAQAbh9AshyIAnhbQASgxBOh7QAshGAjg1IAIgOIBNjMQAFgJADgLQASgYgdg+IgMgXIgjg3IgOgXQjOlrCOj7QAKgSANgSQAwhFBJg1QATgNAUgMQAsgaAjgNQAZgIAWgEQGjhHAeDgQAEAfgDAjQgFA/gcBLQgMAggPAgIgSAlIgaA8IgBACIADBAIAhAuQAYAgAUAfIAJAPQAMAWADAPQAEAPgGAOQAAAUgLAJIgDADIgTAPQgJANgYAFQgJABACAOIABAHIACAFQALAXADANQABAFgCACQgCAFgEAEIgIAHIgGAFIACALIAEAQQAAAFADAHQADALgCAJIgBAEQgCAKgGAOIgBAEQgDAFAAAGQgHAFAQAZQAJAMAMAMQAIANgVAPIgKAJQgRAUgYALIgLAEIA+AjIBCAtIgMAhIgEAIQgIAVgEAXIgEAdIAAAWQgEASALAeQAGAOAIANICOCvIAvBCQCSDFBJDTQAPAqAJAsQAGAZADAZQAOBYgCAmIAAALIAGCoIAFAbQAXCdgmDSIgBAHQgcCQgdBEIgOAjQgRArgBDPIABAZQgBBzADBsIgDAIIxKALg");
	this.shape_517.setTransform(363.5,219.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#373535").ss(2.5).p("ArIA3QAbh9ArhyIAnhbQATgxBNh7QAthHAjg0QAEgHAEgIIBNjLQAFgJADgLQARgYgdg+QgFgLgHgMIgjg4QgHgLgGgLQjPlrCPj7QAKgTANgRQAwhGBIg0QAUgOATgMQAtgaAjgMQAZgIAWgEQGjhHAdDhQAFAegDAkQgFA/gdBLQgMAggPAgQgJATgJARQgNAggNAcQAAACAAABQABAdACAiIAhAvQAYAgAUAfQAFAIAEAHQALAWAEAPQAEAOgHAPQAAATgLAJQgCACgBABQgFAFgOAKQgJAOgXAFQgJABACAOQAAADAAAEQABACABADQAMAXADANQAAAEgBADQgDAFgDADQgEAEgEADQgDADgEADQABAFABAFIAEARQABAFACAHQADALgCAJQAAACgBACQgCAJgFAOQgBACgBACQgDAGABAGQgHAFAQAYQAJANAMALQAIANgUAPQgDAEgHAFQgOAUgYALQgHACgFACIA8AjIBAAuIgMAhQgCAEgCAEQgIAVgEAXQgCAPgCAOIABAWQgEASALAdQAGAPAJAMICOCvQAYAhAXAhQCTDFBJDTQAOApAKAtQAFAZAEAZQAOBYgCAmQAAAGgBAFIAGCoQADANACAOQAXCdgmDSQgBADAAAEQgcCRgeBDQgHAQgHATQgQArgBDPQAAAMAAANQgBBzADBsQgBAEgCAEIxKALIgMggIAKiyQABgOgEgeQgKhShbk4QgEgPgFgOIhrljQgDgKgDgJQhuljBXmQg");
	this.shape_518.setTransform(363.6,219.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#ECB77F").s().p("AnZclIAKiyQABgOgEgeQgKhShbk4IgJgdIhrljIgGgTQhuljBXmQIAAAAQAbh9ArhyIAnhbQATgxBNh7QAthHAjg0IAIgPIBNjLQAFgJADgLQARgYgdg+IgMgXIgjg4IgNgWQjPlrCPj7QAKgTANgRQAwhGBIg0QAUgOATgMQAtgaAjgMQAZgIAWgEQGjhHAdDhQAFAegDAkQgFA/gdBLQgMAggPAgIgSAkIgaA8IAAADIADA/IAhAvQAYAgAUAfIAJAPQALAWAEAPQAEAOgHAPQAAATgLAJIgDADIgTAPQgJAOgXAFQgJABACAOIAAAHIACAFQAMAXADANQAAAEgBADIgGAIIgIAHIgHAGIACAKIAEARIADAMQADALgCAJIgBAEQgCAJgFAOIgCAEQgDAGABAGQgHAFAQAYQAJANAMALQAIANgUAPQgDAEgHAFQgOAUgYALIgMAEIA8AjIBAAuIgMAhIgEAIQgIAVgEAXIgEAdIABAWQgEASALAdQAGAPAJAMICOCvIAvBCQCTDFBJDTQAOApAKAtIAJAyQAOBYgCAmIgBALIAGCoIAFAbQAXCdgmDSIgBAHQgcCRgeBDIgOAjQgQArgBDPIAAAZQgBBzADBsIgDAIIxKALg");
	this.shape_519.setTransform(363.6,219.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#373535").ss(2.5).p("ArJA3QAbh9ArhzIAnhaQATgxBNh7QAthHAjg0QAEgIAEgHIBNjLQAFgKADgKQARgZgdg+QgFgLgHgLIgjg4QgHgLgHgLQjOlsCPj7QAKgSANgSQAwhFBJg0QATgOAUgMQAsgaAkgMQAZgIAWgEQGihHAdDiQAFAegDAkQgGA+gcBMQgMAggPAgQgJATgJARQgNAggNAcQAAABAAACQABAdACAiIAiAuQAYAgATAgQAFAHAEAIQAMAWADAPQAEAOgHAOQgBAUgLAIQgCACgBABQgFAFgOALQgIANgXAFQgJABACAPQAAADAAAEQABACABACQALAXAEANQAAAFgBADQgDAEgDAEQgEAEgEADQgDADgEADQACAFAAAFIAEARQAAAFADAHQADAKgCAKQgBABAAACQgCAKgFAOQgBACgBACQgDAGABAGQgGAFAQAYQAJAMAMAMQAIANgTAOQgDAFgGAEQgNAVgZAKQgGACgFACIA5AjIA+AvIgMAhQgCAEgBAEQgIAVgEAXQgCAPgCAOIABAWQgDASALAdQAGAPAJAMICPCuQAYAhAXAhQCTDEBJDUQAPApAJAtQAFAZAEAZQAOBZgCAlQAAAGgBAFIAGCoQADAOACANQAXCdgnDSQAAADgBAEQgcCRgdBDQgHAQgHATQgRAsgBDOQAAAMAAANQgBBzADBtQgCAEgBADIxLALIgMgfIAKiyQABgPgEgdQgKhShbk5QgEgOgFgPIhrljQgDgJgDgKQhuljBXmQg");
	this.shape_520.setTransform(363.7,219.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#ECB77F").s().p("AnacmIAKiyQABgPgEgdQgKhShbk5IgJgdIhrljIgGgTQhuljBXmQIAAAAQAbh9ArhzIAnhaQATgxBNh7QAthHAjg0IAIgPIBNjLQAFgKADgKQARgZgdg+IgMgWIgjg4IgOgWQjOlsCPj7QAKgSANgSQAwhFBJg0IAngaQAsgaAkgMQAZgIAWgEQGihHAdDiQAFAegDAkQgGA+gcBMQgMAggPAgIgSAkIgaA8IAAADIADA/IAiAuQAYAgATAgIAJAPQAMAWADAPQAEAOgHAOQgBAUgLAIIgDADIgTAQQgIANgXAFQgJABACAPIAAAHIACAEQALAXAEANQAAAFgBADIgGAIIgIAHIgHAGIACAKIAEARIADAMQADAKgCAKIgBADQgCAKgFAOIgCAEQgDAGABAGQgGAFAQAYQAJAMAMAMQAIANgTAOQgDAFgGAEQgNAVgZAKIgLAEIA5AjIA+AvIgMAhIgDAIQgIAVgEAXIgEAdIABAWQgDASALAdQAGAPAJAMICPCuIAvBCQCTDEBJDUQAPApAJAtIAJAyQAOBZgCAlIgBALIAGCoIAFAbQAXCdgnDSIgBAHQgcCRgdBDIgOAjQgRAsgBDOIAAAZQgBBzADBtIgDAHIxLALg");
	this.shape_521.setTransform(363.7,219.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#373535").ss(2.5).p("ArKA3QAbh9ArhzIAnhaQATgxBNh7QAthHAjg1QAEgHAEgHIBNjLQAFgKADgKQARgZgdg+QgFgLgHgLIgjg4QgHgLgHgLQjOlsCPj7QALgSAMgSQAxhFBIg0QATgOAUgMQAtgaAjgMQAZgIAWgEQGjhHAcDiQAFAfgDAjQgGA/gcBLQgNAggPAgQgJATgJARQgNAggMAdQAAABgBABQADAeACAhIAhAvQAYAgATAfQAGAIAEAIQALAWADAPQAEAOgIAOQAAATgMAJQgBABgCACQgFAEgNALQgIAOgXAFQgJABACAOQAAADAAAEQABADABACQALAXAEANQAAAFgBACQgDAFgDAEQgEADgEAEQgDADgEACQACAFAAAGIADARQABAEACAHQAEALgCAJQgBACAAACQgCAKgFAOQgBACgBACQgDAGABAGQgGAEARAYQAIAMANAMQAIANgSAOQgDAFgGAEQgMAVgYAKQgGACgFACIA2AkIA9AvIgMAhQgCAEgCAEQgHAVgEAXQgDAPgBAPIABAVQgDASAMAdQAGAOAJANICQCtQAYAhAXAhQCSDEBKDUQAPApAJAtQAFAZAEAZQAOBZgCAlQAAAGgBAFIAGCoQADAOACANQAWCegmDRQgBADAAAEQgcCRgeBDQgHAQgHAUQgQAsgCDNQAAAMAAANQgBBzADBtQgCAEgBAEIxLAKIgNgfIAKiyQABgOgEgeQgJhRhbk5QgFgPgEgPIhsljQgDgJgDgKQhuljBXmQg");
	this.shape_522.setTransform(363.8,219.1);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#ECB77F").s().p("AnbcmIAKiyQABgOgEgeQgJhRhbk5IgJgeIhsljIgGgTQhuljBXmQIAAAAQAbh9ArhzIAnhaQATgxBNh7QAthHAjg1IAIgOIBNjLQAFgKADgKQARgZgdg+IgMgWIgjg4IgOgWQjOlsCPj7QALgSAMgSQAxhFBIg0QATgOAUgMQAtgaAjgMQAZgIAWgEQGjhHAcDiQAFAfgDAjQgGA/gcBLQgNAggPAgIgSAkIgZA9IgBACIAFA/IAhAvQAYAgATAfQAGAIAEAIQALAWADAPQAEAOgIAOQAAATgMAJIgDADIgSAPQgIAOgXAFQgJABACAOIAAAHIACAFQALAXAEANQAAAFgBACIgGAJIgIAHIgHAFIACALIADARIADALQAEALgCAJIgBAEQgCAKgFAOIgCAEQgDAGABAGQgGAEARAYQAIAMANAMQAIANgSAOQgDAFgGAEQgMAVgYAKIgLAEIA2AkIA9AvIgMAhIgEAIQgHAVgEAXIgEAeIABAVQgDASAMAdQAGAOAJANICQCtIAvBCQCSDEBKDUQAPApAJAtIAJAyQAOBZgCAlIgBALIAGCoIAFAbQAWCegmDRIgBAHQgcCRgeBDIgOAkQgQAsgCDNIAAAZQgBBzADBtIgDAIIxLAKg");
	this.shape_523.setTransform(363.8,219.1);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#373535").ss(2.5).p("ArLA2QAbh8ArhzIAnhbQATgxBNh7QAthGAjg1QAEgHAEgIIBNjLQAFgJADgLQARgZgdg+QgFgKgHgMIgjg4QgHgLgHgLQjOlsCPj7QALgSAMgSQAxhFBJg0QATgOAUgMQAsgaAkgMQAZgIAWgEQGihGAdDiQAEAfgDAkQgGA+gdBLQgMAhgPAfQgJATgJARQgNAggMAdQAAABgBACQADAdACAhIAiAvQAYAgATAgQAFAHAEAIQALAWADAPQAEAOgIAOQgBATgMAIQgBACgCABQgFAFgNALQgHAOgXAFQgJABACAOQAAAEAAADQABADABACQALAXAEANQAAAFgBADQgDAEgDAEQgEADgEAEQgDADgDADQABAFAAAFIADARQABAFACAHQADAKgCAKQAAABgBACQgBAKgFAOQgBACgBACQgDAGACAGQgGAFAQAYQAJALANAMQAIANgRAOQgDAEgGAEQgKAVgYALQgGACgFACIAzAjIA8AxIgMAhQgCAEgCAEQgIAUgDAYQgDAPgBAOIACAWQgDASAMAcQAGAPAJAMICQCsQAYAhAYAhQCSDEBLDUQAOAqAJAtQAGAZADAYQAOBagCAlQAAAFgBAGIAHCoQACANACAOQAWCdgnDRQAAAEgBADQgcCSgeBDQgHAQgHATQgQAtgBDNQAAAMAAANQgCBzADBtQgCADgCAEIxLALIgNgfIAKiyQABgPgDgdQgKhRhbk5QgFgPgEgPIhsljQgDgKgDgJQhuljBXmQg");
	this.shape_524.setTransform(363.9,219.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#ECB77F").s().p("AnccnIAKizQABgOgDgdQgKhRhbk6IgJgdIhsljIgGgUQhuliBXmRIAAAAQAbh9ArhzIAnhaQATgxBNh7QAthHAjg1IAIgOIBNjMQAFgJADgKQARgZgdg+IgMgWIgjg4IgOgXQjOlrCPj7QALgTAMgRQAxhGBJg0QATgNAUgMQAsgaAkgMQAZgIAWgEQGihGAdDiQAEAegDAkQgGA/gdBLQgMAggPAgIgSAkIgZA9IgBACIAFA/IAiAvQAYAgATAfIAJAPQALAWADAPQAEAOgIAOQgBATgMAJIgDADIgSAQQgHAOgXAFQgJABACAOIAAAHIACAFQALAWAEAOQAAAEgBADIgGAIIgIAIIgGAFIABALIADAQIADAMQADALgCAJIgBAEQgBAKgFAOIgCAEQgDAFACAGQgGAFAQAYQAJAMANALQAIANgRAOQgDAFgGAEQgKAVgYAKIgLAFIAzAjIA8AwIgMAhIgEAJQgIAUgDAXIgEAeIACAVQgDASAMAdQAGAOAJAMICQCtIAwBCQCSDDBLDUQAOAqAJAtQAGAZADAZQAOBagCAkIgBALIAHCoIAEAcQAWCdgnDRIgBAHQgcCRgeBDIgOAkQgQAsgBDNIAAAZQgCB0ADBsIgEAIIxLAKg");
	this.shape_525.setTransform(363.9,219.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#373535").ss(2.5).p("ArMA2QAbh8ArhzIAnhbQATgxBOh7QAshHAjg0QAEgIAEgHIBNjLQAFgKADgKQARgZgdg+QgGgLgGgLIgjg4QgHgLgHgLQjOlsCQj7QAKgTANgRQAwhFBJg0QATgOAUgMQAtgaAjgMQAZgIAWgEQGjhGAcDjQAEAfgEAjQgFA/gdBLQgMAggPAgQgJATgJARQgNAggMAdQgBABAAABQADAeACAhIAiAvQAYAgATAfQAFAIAEAIQALAWADAPQAEAOgIANQgCATgLAJQgCABgBACQgGAEgMALQgHAPgWAFQgKABACAOQgBADABAEQABACABADQALAWAEAOQAAAFgBACQgCAFgEAEQgEADgEAEQgDADgDACQABAGAAAFIADARQAAAEADAHQADALgCAJQgBACAAACQgCAKgEAOQgBACgBACQgCAGABAGQgGAEARAYQAJAMAMALQAKANgSAOQgCAEgGAEQgIAVgYALQgGACgGACIBrBVIgMAhQgCAEgBAEQgIAUgEAYQgCAPgBAOIACAWQgCASAMAcQAGAOAJAMICRCsQAYAhAYAhQCSDDBLDVQAOAqAJAtQAGAZADAYQAOBbgCAkQAAAFAAAGIAGCoQACANACAOQAWCegnDRQgBADAAAEQgdCRgdBDQgHAQgHATQgRAtgBDNQAAAMAAANQgCBzACBtQgBAEgCADIxMALIgNgeIAKizQABgOgDgdQgKhRhbk6QgFgPgEgPIhsljQgDgJgDgKQhuljBXmQg");
	this.shape_526.setTransform(364,219.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#ECB77F").s().p("AndcnIAKizQABgOgDgdQgKhRhbk6IgJgeIhsliIgGgTQhulkBXmQIAAAAQAbh9ArhzIAnhbQATgwBOh7QAshIAjg0IAIgPIBNjLQAFgJADgLQARgZgdg9IgMgXIgjg4IgOgWQjOlsCQj7QAKgSANgSQAwhFBJg0QATgOAUgMQAtgaAjgLQAZgJAWgDQGjhHAcDjQAEAfgEAjQgFA/gdBMQgMAfgPAgIgSAlIgZA8IgBADIAFA/IAiAuQAYAgATAfIAJAQQALAWADAPQAEAOgIAOQgCASgLAJIgDADIgSAPQgHAPgWAFQgKABACAPIAAAHIACAEQALAWAEAOQAAAFgBACQgCAFgEAEIgIAHIgGAFIABAMIADAQIADAMQADAKgCAKIgBADIgGAYIgCAEQgCAGABAGQgGAFARAYQAJALAMALQAKANgSAOQgCAFgGADQgIAWgYAKIgMAEIBrBVIgMAhIgDAIQgIAVgEAXIgDAdIACAWQgCASAMAcQAGAPAJAMICRCrIAwBCQCSDDBLDVQAOAqAJAtQAGAZADAZQAOBagCAkIAAALIAGCoIAEAcQAWCdgnDRIgBAHQgdCSgdBCIgOAkQgRAsgBDOIAAAYQgCB0ACBsIgDAHIxMALg");
	this.shape_527.setTransform(364,219.2);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#373535").ss(2.5).p("ArNA2QAbh8AshzIAnhbQATgxBNh7QAshHAkg1QAEgHAEgHIBMjMQAGgJADgKQAQgZgdg+QgFgLgHgLIgjg4QgHgLgGgMQjPlrCQj8QALgSAMgSQAxhFBJg0QATgNAUgMQAtgaAjgMQAZgIAWgEQGjhGAbDkQAEAegDAkQgGA+gdBMQgMAggPAfQgJAUgJARQgNAfgMAdQAAACAAABQADAdACAiIAiAuQAYAgATAgQAFAIAEAHQALAXADAOQADAOgIAOQgCASgMAJQgBABgCACQgFAEgMAMQgHAPgWAFQgJABABAOQAAADAAAEQABACABACQAMAXADANQABAFgBADQgDAFgEADQgDAEgEAEQgDACgEADQABAFABAGIACAQQAAAFADAHQADALgCAJQAAACgBACQgBAKgFAOQgBACAAACQgDAFACAGQgGAFARAYQAJALANAMQAJAMgQAOQgDAEgFAEQgHAVgXALQgHACgFACIBnBWIgMAhQgCAEgCAEQgIAUgDAYQgDAPgBAOIADAWQgCASAMAcQAHAOAIAMICSCrQAYAhAYAhQCSDDBLDVQAPAqAJAtQAFAZAEAYQANBbgBAkQgBAFAAAGIAGCoQADANACAOQAVCegnDRQgBADAAAEQgdCRgeBDQgGAQgHAUQgRAtgCDMQAAANAAAMQgBB0ACBsQgCAEgCAEIxMAKIgOgeIAKiyQACgPgEgdQgJhQhck7QgEgPgFgOIhrljQgDgKgDgKQhuljBWmQg");
	this.shape_528.setTransform(364,219.2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#ECB77F").s().p("AnecnIAKiyQACgPgEgdQgJhQhck7IgJgdIhrljIgGgUQhuljBWmQIAAgBQAbh8AshzIAnhbQATgxBNh7QAshHAkg1IAIgOIBMjMQAGgJADgKQAQgZgdg+IgMgWIgjg4IgNgXQjPlrCQj8QALgSAMgSQAxhFBJg0QATgNAUgMQAtgaAjgMQAZgIAWgEQGjhGAbDkQAEAegDAkQgGA+gdBMQgMAggPAfIgSAlIgZA8IAAADIAFA/IAiAuQAYAgATAgIAJAPQALAXADAOQADAOgIAOQgCASgMAJIgDADIgRAQQgHAPgWAFQgJABABAOIAAAHIACAEQAMAXADANQABAFgBADQgDAFgEADIgHAIIgHAFIACALIACAQQAAAFADAHQADALgCAJIgBAEQgBAKgFAOIgBAEQgDAFACAGQgGAFARAYQAJALANAMQAJAMgQAOQgDAEgFAEQgHAVgXALIgMAEIBnBWIgMAhIgEAIQgIAUgDAYIgEAdIADAWQgCASAMAcQAHAOAIAMICSCrIAwBCQCSDDBLDVQAPAqAJAtIAJAxQANBbgBAkIgBALIAGCoIAFAbQAVCegnDRIgBAHQgdCRgeBDIgNAkQgRAtgCDMIAAAZQgBB0ACBsIgEAIIxMAKg");
	this.shape_529.setTransform(364,219.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#373535").ss(2.5).p("ArOA3QAbh9AshzIAnhbQATgwBNh8QAthGAjg1QAEgHAEgIIBNjLQAFgJADgLQAQgZgdg+QgFgLgHgLIgjg4QgHgLgHgLQjOlsCQj8QALgSANgSQAwhFBJg0QAUgNATgMQAtgaAkgMQAZgIAWgEQGjhFAaDkQAEAegDAkQgGA/gdBLQgMAggPAgQgJATgJARQgNAfgMAeQAAABAAABQADAeADAhIAiAuQAYAhATAfQAFAIAEAHQALAXACAPQADANgJAOQgBASgMAIQgCACgCABQgFAFgMAMQgGAPgWAFQgJABABAOQAAADAAAEQABACABADQALAWAEAOQABAEgBADQgDAFgDAEQgEADgEAEQgDADgEACQABAGABAFIACARQAAAEACAHQADALgBAJQgBACAAACQgBAKgFAOQgBACAAACQgDAGACAGQgFAFARAXQAJALANALQAJANgQAOQgCAEgFAEQgFAVgYAKQgGADgFACIBiBWIgMAiQgCAEgCAEQgIAUgDAXQgCAQgBAOIADAVQgCASANAcQAGAOAJAMICTCrQAYAgAYAiQCSDCBMDVQAOAqAJAtQAFAZAEAZQANBbgBAjQAAAGgBAFIAGCoQADAOACAOQAUCegnDQQAAAEgBADQgcCSgeBDQgHAPgHAUQgQAugCDMQAAAMgBANQgBBzACBtQgCAEgCADIxMAKIgPgdIAKiyQACgPgEgdQgJhPhck8QgEgPgFgPIhrljQgDgJgDgKQhuljBWmRg");
	this.shape_530.setTransform(364.1,219.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#ECB77F").s().p("AnfcoIAKiyQACgPgEgdQgJhPhck8IgJgeIhrljIgGgTQhuljBWmRIAAAAQAbh9AshzIAnhbQATgwBNh8IBQh7IAIgPIBNjLQAFgJADgLQAQgZgdg+IgMgWIgjg4IgOgWQjOlsCQj8IAYgkQAwhFBJg0QAUgNATgMQAtgaAkgMQAZgIAWgEQGjhFAaDkQAEAegDAkQgGA/gdBLQgMAggPAgIgSAkIgZA9IAAACIAGA/IAiAuQAYAhATAfIAJAPQALAXACAPQADANgJAOQgBASgMAIIgEADIgRARQgGAPgWAFQgJABABAOIAAAHIACAFQALAWAEAOQABAEgBADIgGAJIgIAHIgHAFIACALIACARQAAAEACAHQADALgBAJIgBAEQgBAKgFAOIgBAEQgDAGACAGQgFAFARAXQAJALANALQAJANgQAOQgCAEgFAEQgFAVgYAKIgLAFIBiBWIgMAiIgEAIQgIAUgDAXIgDAeIADAVQgCASANAcQAGAOAJAMICTCrIAwBCQCSDCBMDVQAOAqAJAtIAJAyQANBbgBAjIgBALIAGCoIAFAcQAUCegnDQIgBAHQgcCSgeBDQgHAPgHAUQgQAugCDMIgBAZQgBBzACBtIgEAHIxMAKg");
	this.shape_531.setTransform(364.1,219.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#373535").ss(2.5).p("ArPA3QAbh9AshzIAnhbQATgxBNh7QAthGAjg1QAEgHAEgIIBNjLQAFgKADgKQAQgZgdg+QgFgLgHgLIgjg4QgHgLgHgMQjOlsCRj7QAKgSANgSQAxhFBJg0QATgNAUgMQAsgaAkgMQAZgIAWgEQGjhFAaDlQAEAegDAkQgGA+gdBLQgNAhgPAfQgJATgJARQgMAggMAdQAAACAAABQADAdADAhIAiAvQAYAgATAgQAFAHAEAIQALAXACAOQADAOgJAOQgCASgMAIQgCABgBACQgGAEgLAMQgGAPgWAGQgJABABAOQAAADAAAEQABACABACQALAXAEANQABAFgBADQgDAFgDADQgEAEgEAEQgDACgDADQAAAFABAGIACAQQAAAFACAHQADAKgCAKQAAACAAACQgCAKgEAOQgBACAAACQgDAFACAGQgFAFASAXQAJAMANALQAJAMgPAOQgCAEgEAEQgEAVgYAKQgGADgFACIBeBXIgMAiQgCAEgCAEQgIAUgDAXQgCAQgBAOIADAVQgBASANAcQAGAOAJAMICUCqQAYAgAYAiQCSDBBMDWQAOAqAJAtQAGAZADAZQAOBcgCAiQAAAGgBAFIAGCoQADAOACAOQAUCegnDQQgBAEAAADQgdCSgeBDQgHAPgHAUQgQAugCDMQAAAMAAANQgCB0ACBsQgCAEgCADIxNAKIgPgdIAKiyQACgPgEgdQgIhOhdk9QgEgOgFgPIhrlkQgDgJgDgKQhuljBWmRg");
	this.shape_532.setTransform(364.2,219.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#ECB77F").s().p("AngcoIAKiyQACgPgEgdQgIhOhdk9IgJgdIhrlkIgGgTQhuljBWmRIAAAAQAbh9AshzIAnhbQATgxBNh7IBQh7IAIgPIBNjLQAFgKADgKQAQgZgdg+IgMgWIgjg4IgOgXQjOlsCRj7QAKgSANgSQAxhFBJg0IAngZQAsgaAkgMQAZgIAWgEQGjhFAaDlQAEAegDAkQgGA+gdBLQgNAhgPAfIgSAkIgYA9IAAADIAGA+IAiAvQAYAgATAgQAFAHAEAIQALAXACAOQADAOgJAOQgCASgMAIIgDADIgRAQQgGAPgWAGQgJABABAOIAAAHIACAEQALAXAEANQABAFgBADQgDAFgDADIgIAIIgGAFIABALIACAQQAAAFACAHQADAKgCAKIAAAEQgCAKgEAOIgBAEQgDAFACAGQgFAFASAXQAJAMANALQAJAMgPAOQgCAEgEAEQgEAVgYAKIgLAFIBeBXIgMAiIgEAIQgIAUgDAXIgDAeIADAVQgBASANAcQAGAOAJAMICUCqIAwBCQCSDBBMDWQAOAqAJAtQAGAZADAZQAOBcgCAiIgBALIAGCoIAFAcQAUCegnDQIgBAHQgdCSgeBDQgHAPgHAUQgQAugCDMIAAAZQgCB0ACBsIgEAHIxNAKg");
	this.shape_533.setTransform(364.2,219.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#373535").ss(2.5).p("ArQA3QAbh9AshzIAnhbQATgxBNh7QAthHAjg0QAEgIAEgHIBNjMQAFgJADgKQAQgZgdg+QgGgLgGgMIgjg3QgHgMgHgLQjOlsCRj7QALgTAMgRQAxhFBJg0QATgOAUgLQAtgaAjgMQAZgIAXgEQGjhFAZDlQAEAfgDAjQgGA/gdBLQgNAggPAgQgJATgJARQgMAggMAdQgBABAAACQAEAdAEAhIAhAvQAZAgASAfQAFAIAEAIQALAXACAOQADAOgKANQgCASgMAIQgCABgBACQgFAEgLAMQgGAQgVAFQgKACABANQAAAEAAADQABACABADQALAWAEAOQABAFgBACQgDAFgDAEQgEAEgEADQgDADgDADQABAFAAAFIACARQgBAFADAHQACAKgBAKQAAABgBADQgBAKgEAOQgBACAAACQgDAFACAGQgEAFARAXQAKALAMALQAKAMgOAOQgCAEgEAEQgCAVgYAKQgGADgGACIBaBYIgMAiQgCAEgBAEQgIAUgDAYQgCAPgBAOIADAVQAAASAMAcQAHAOAJALICUCqQAZAgAYAhQCSDCBMDWQAOAqAJAtQAGAZADAZQAOBcgCAiQAAAGgBAFIAGCoQADAOACAOQAUCfgoDPQAAAEgBADQgdCSgeBDQgGAPgHAVQgRAugCDMQAAAMAAANQgCBzABBtQgCADgBADIxNAKIgQgcIAKizQACgOgEgdQgIhOhck9QgFgPgEgPIhsljQgDgKgDgKQhuljBWmRg");
	this.shape_534.setTransform(364.3,219.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#ECB77F").s().p("AnhcpIAKizQACgOgEgdQgIhOhck9IgJgeIhsljIgGgUQhuljBWmRIAAAAQAbh9AshzIAnhbQATgxBNh7QAthHAjg0IAIgPIBNjMQAFgJADgKQAQgZgdg+IgMgXIgjg3IgOgXQjOlsCRj7QALgTAMgRQAxhFBJg0QATgOAUgLQAtgaAjgMQAZgIAXgEQGjhFAZDlQAEAfgDAjQgGA/gdBLQgNAggPAgIgSAkIgYA9IgBADIAIA+IAhAvQAZAgASAfIAJAQQALAXACAOQADAOgKANQgCASgMAIIgDADIgQAQQgGAQgVAFQgKACABANIAAAHIACAFQALAWAEAOQABAFgBACIgGAJIgIAHIgGAGIABAKIACARQgBAFADAHQACAKgBAKIgBAEQgBAKgEAOIgBAEQgDAFACAGQgEAFARAXQAKALAMALQAKAMgOAOQgCAEgEAEQgCAVgYAKIgMAFIBaBYIgMAiIgDAIQgIAUgDAYIgDAdIADAVQAAASAMAcQAHAOAJALICUCqIAxBBQCSDCBMDWQAOAqAJAtQAGAZADAZQAOBcgCAiIgBALIAGCoIAFAcQAUCfgoDPIgBAHQgdCSgeBDIgNAkQgRAugCDMIAAAZQgCBzABBtIgDAGIxNAKg");
	this.shape_535.setTransform(364.3,219.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#373535").ss(2.5).p("ArQA3QAbh9AshzIAmhbQAUgxBNh7QAshHAkg1QAEgHAEgHIBMjMQAGgJADgLQAQgZgeg9QgFgLgHgMIgjg4QgHgLgHgLQjOlsCSj8QAKgSANgSQAxhFBJgzQATgOAUgMQAtgaAjgLQAZgIAXgEQGjhFAZDmQADAegDAkQgGA/gdBLQgNAggPAgQgJATgJARQgMAfgMAeQAAABAAABQAEAeAEAhIAhAuQAZAgASAgQAFAIAEAIQALAXACAOQACANgKAOQgCARgMAIQgCABgCACQgFAFgKAMQgGAQgVAFQgJACAAANQAAADAAAEQABACABACQALAXAEANQABAFgBADQgCAFgEAEQgDADgEAEQgDADgEADQABAFAAAFIACARQAAAEACAHQADALgCAJQAAACgBACQgBAKgEAOQAAACgBACQgCAGACAGQgEAFARAWQAKALANALQAKAMgOAOQgBAEgEAEQgBAVgXAKQgHADgFACIBWBZIgMAiQgDAEgBAEQgIAUgDAYQgCAPgBAOIAEAVQAAASANAbQAHAOAIAMICWCpQAYAgAYAhQCSDBBMDXQAPAqAJAtQAFAZAEAZQANBdgBAhQgBAGAAAFIAGCpQACANACAOQAUCfgnDQQgBADgBAEQgdCSgeBCQgHAPgGAVQgRAvgCDLQgBAMAAANQgCBzACBtQgCADgCAEIxNAJIgRgcIAKiyQACgPgDgdQgIhNhdk+QgEgPgFgPIhrljQgDgKgDgKQhvljBXmQg");
	this.shape_536.setTransform(364.4,219.1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#ECB77F").s().p("AnicpIAKiyQACgPgDgdQgIhNhdk+IgJgeIhrljIgGgUQhvljBXmQIAAgBQAbh9AshzIAmhbQAUgxBNh7QAshHAkg1IAIgOIBMjMQAGgJADgLQAQgZgeg9IgMgXIgjg4IgOgWQjOlsCSj8QAKgSANgSQAxhFBJgzQATgOAUgMQAtgaAjgLQAZgIAXgEQGjhFAZDmQADAegDAkQgGA/gdBLQgNAggPAgIgSAkIgYA9IAAACIAIA/IAhAuQAZAgASAgIAJAQQALAXACAOQACANgKAOQgCARgMAIIgEADIgPARQgGAQgVAFQgJACAAANIAAAHIACAEQALAXAEANQABAFgBADIgGAJIgHAHIgHAGIABAKIACARQAAAEACAHQADALgCAJIgBAEQgBAKgEAOIgBAEQgCAGACAGQgEAFARAWQAKALANALQAKAMgOAOQgBAEgEAEQgBAVgXAKIgMAFIBWBZIgMAiIgEAIQgIAUgDAYIgDAdIAEAVQAAASANAbQAHAOAIAMICWCpIAwBBQCSDBBMDXQAPAqAJAtIAJAyQANBdgBAhIgBALIAGCpIAEAbQAUCfgnDQIgCAHQgdCSgeBCQgHAPgGAVQgRAvgCDLIgBAZQgCBzACBtIgEAHIxNAJg");
	this.shape_537.setTransform(364.4,219.1);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#373535").ss(2.5).p("ArRA3QAbh9AshzIAmhbQAUgxBNh7QAshHAkg1QAEgHAEgHIBMjMQAGgJADgLQAPgZgdg+QgFgLgHgLIgjg4QgHgLgHgLQjOltCSj7QALgSAMgSQAxhFBJg0QAUgNAUgMQAsgaAkgLQAZgIAWgEQGkhFAYDmQADAfgDAkQgGA+gdBLQgNAhgPAfQgJATgJARQgMAggMAdQAAACAAABQAEAdAEAhIAiAvQAYAgATAgQAFAHAEAIQAKAXACAPQACANgKANQgDARgMAIQgCACgBABQgGAFgKAMQgFAQgVAGQgJACAAANQAAADAAADQABADABACQALAWAEAOQABAFgBADQgCAFgEADQgDAEgEAEQgDADgDACQAAAFAAAGIACARQgBAEACAHQADAKgBAKQgBACAAACQgBAKgEAOQAAACgBACQgCAGACAGQgDAFARAWQAKALANALQAKAMgNANQgBAEgEAEQABAVgYALQgGACgFACIBRBaIgMAiQgCAEgCAEQgIAUgCAYQgCAPgBAOIAEAVQAAASANAbQAIAOAIAMICWCoQAZAgAYAhQCSDBBNDXQAOAqAJAtQAFAZAEAZQANBdgBAhQgBAGAAAFIAGCpQACANACAOQAUCfgoDQQgBADAAAEQgeCSgdBCQgHAPgHAVQgQAvgDDLQAAAMAAANQgDBzACBtQgCADgCAEIxOAJIgRgbIAKizQACgPgDgcQgIhNhdk/QgEgPgFgOIhrlkQgDgKgDgJQhvlkBXmQg");
	this.shape_538.setTransform(364.5,219.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#ECB77F").s().p("AnjcqIAKizQACgPgDgcQgIhNhdk/IgJgdIhrlkIgGgTQhvlkBXmQIAAgBQAbh9AshzIAmhbQAUgxBNh7QAshHAkg1IAIgOIBMjMQAGgJADgLQAPgZgdg+IgMgWIgjg4IgOgWQjOltCSj7QALgSAMgSQAxhFBJg0QAUgNAUgMQAsgaAkgLQAZgIAWgEQGkhFAYDmQADAfgDAkQgGA+gdBLQgNAhgPAfIgSAkIgYA9IAAADIAIA+IAiAvQAYAgATAgIAJAPQAKAXACAPQACANgKANQgDARgMAIIgDADQgGAFgKAMQgFAQgVAGQgJACAAANIAAAGIACAFQALAWAEAOQABAFgBADQgCAFgEADIgHAIIgGAFIAAALIACARQgBAEACAHQADAKgBAKIgBAEQgBAKgEAOIgBAEQgCAGACAGQgDAFARAWQAKALANALQAKAMgNANQgBAEgEAEQABAVgYALIgLAEIBRBaIgMAiIgEAIQgIAUgCAYIgDAdIAEAVQAAASANAbQAIAOAIAMICWCoIAxBBQCSDBBNDXQAOAqAJAtIAJAyQANBdgBAhIgBALIAGCpIAEAbQAUCfgoDQIgBAHQgeCSgdBCQgHAPgHAVQgQAvgDDLIAAAZQgDBzACBtIgEAHIxOAJg");
	this.shape_539.setTransform(364.5,219.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#373535").ss(2.5).p("ArSA2QAbh8Ash0IAmhbQAUgxBNh7QAshGAkg1QAEgIAEgHIBMjMQAGgJADgLQAPgZgdg9QgFgLgHgMIgjg4QgHgLgHgLQjOltCSj7QALgSAMgSQAxhFBKgzQATgOAUgMQAtgaAjgLQAZgIAXgDQGjhGAYDoQADAegDAkQgHA+gdBMQgMAggPAfQgKATgJARQgMAggLAdQAAACAAABQAEAdAEAhIAiAvQAZAgASAgQAFAIAEAHQAKAYACAOQACANgKANQgDARgNAIQgCABgBACQgFAEgKANQgFARgVAFQgJACAAANQAAADAAAEQABACABACQALAWAEAOQABAFgBADQgCAFgEAEQgDADgEAEQgDADgDADQAAAFAAAFIABARQAAAEACAHQADALgCAJQAAACAAACQgBALgEANQAAACgBACQgCAGADAGQgEAFASAWQAJALAOALQAKALgMAOQgBAEgEAEQADAVgYAKQgGACgFACIBNBcIgMAhQgCAEgCAEQgIAUgDAYQgBAQgBAOIAEAVQABARANAbQAHAOAJAMICXCnQAZAhAYAhQCSDABNDYQAOApAJAuQAGAZADAZQANBdgBAhQgBAFAAAGIAGCoQACAOACANQATCggnDPQgBAEgBADQgdCSgeBDQgHAPgHAVQgQAvgDDLQAAAMAAANQgDBzABBtQgCADgCADIxNAKIgSgbIAKizQACgPgDgcQgIhNhdk/QgEgPgFgPIhrljQgDgKgDgKQhvljBXmRg");
	this.shape_540.setTransform(364.6,219.2);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#ECB77F").s().p("AnkcqIAKiyQACgPgDgdQgIhMhdlAIgJgdIhrlkIgGgTQhvljBXmRIAAgBQAbh9AshzIAmhbQAUgxBNh7QAshHAkg1IAIgOIBMjMQAGgJADgLQAPgZgdg+IgMgWIgjg4IgOgWQjOltCSj7QALgTAMgRQAxhFBKg0IAngZQAtgaAjgLQAZgIAXgEQGjhFAYDnQADAfgDAjQgHA/gdBLQgMAggPAgIgTAkIgXA9IAAADIAIA+IAiAvQAZAgASAfIAJAQQAKAXACAPQACANgKANQgDARgNAIIgDACQgFAFgKANQgFAQgVAGQgJACAAANIAAAGIACAFQALAWAEAOQABAFgBACQgCAFgEAEIgHAHIgGAGIAAALIABAQQAAAFACAHQADAKgCAKIAAAEQgBAKgEAOIgBAEQgCAGADAGQgEAFASAVQAJALAOALQAKAMgMANQgBAEgEAEQADAVgYALIgLAEIBNBbIgMAiIgEAIQgIAUgDAYIgCAdIAEAVQABASANAbQAHAOAJALICXCoIAxBBQCSDABNDYQAOApAJAuQAGAZADAZQANBdgBAhIgBALIAGCpIAEAbQATCggnDPIgCAHQgdCSgeBCQgHAPgHAVQgQAwgDDKIAAAZQgDBzABBtIgEAHIxNAJg");
	this.shape_541.setTransform(364.6,219.1);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#373535").ss(2.5).p("ArTA3QAbh9AshzIAmhbQAUgxBNh7QAthHAjg1QAEgHAEgHIBNjMQAFgJADgLQAPgagdg9QgGgLgGgLIgjg4QgHgLgHgMQjOlsCSj8QALgSANgSQAxhEBJg0QAUgOATgLQAtgaAkgLQAZgIAWgEQGkhFAXDoQADAegDAkQgHA/gdBLQgNAggPAfQgJATgJARQgMAggLAeQAAABAAABQAEAeAFAgIAiAvQAYAgASAgQAFAIAEAIQALAXABAOQACANgLANQgDARgNAIQgCABgBACQgFAEgKANQgEARgVAFQgJACAAANQAAADAAAEQABACABACQALAXAEANQABAFgBADQgCAFgDAEQgEADgEAEQgDADgDADQAAAFAAAGIABAQQAAAEACAIQACAKgBAKQAAABAAADQgBAKgEAOQAAACgBACQgCAFADAGQgDAFASAWQAJALAOAKQAKAMgMANQAAAEgEAEQAFAVgYALQgGACgGACIAaAlIAvA3IgMAiQgCAEgBAEQgIAUgDAYQgCAPAAAOIAFAVQABASANAbQAHANAJAMICYCnQAYAgAYAhQCTDABNDYQAOApAJAuQAGAZADAZQANBegBAgQAAAGgBAFIAGCpQACANACAOQATCggoDPQgBADAAAEQgeCSgeBCQgHAPgGAVQgQAwgEDKQAAANAAAMQgDB0ABBtQgCADgCADIxOAJIgSgaIAKizQACgPgDgcQgIhMhdlAQgEgPgFgPIhrlkQgDgJgDgKQhvljBXmRg");
	this.shape_542.setTransform(364.7,219.1);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#ECB77F").s().p("AnlcrIAKizQACgPgDgcQgIhMhdlAIgJgeIhrlkIgGgTQhvljBXmRIAAgBQAbh9AshzIAmhbQAUgxBNh7QAthHAjg1IAIgOIBNjMQAFgJADgLQAPgagdg9IgMgWIgjg4IgOgXQjOlsCSj8QALgSANgSQAxhEBJg0QAUgOATgLQAtgaAkgLQAZgIAWgEQGkhFAXDoQADAegDAkQgHA/gdBLQgNAggPAfIgSAkIgXA+IAAACIAJA+IAiAvQAYAgASAgIAJAQQALAXABAOQACANgLANQgDARgNAIIgDADQgFAEgKANQgEARgVAFQgJACAAANIAAAHIACAEQALAXAEANQABAFgBADQgCAFgDAEIgIAHIgGAGIAAALIABAQQAAAEACAIQACAKgBAKIAAAEQgBAKgEAOIgBAEQgCAFADAGQgDAFASAWQAJALAOAKQAKAMgMANQAAAEgEAEQAFAVgYALIgMAEIAaAlIAvA3IgMAiIgDAIQgIAUgDAYIgCAdIAFAVQABASANAbQAHANAJAMICYCnIAwBBQCTDABNDYQAOApAJAuQAGAZADAZQANBegBAgIgBALIAGCpIAEAbQATCggoDPIgBAHQgeCSgeBCQgHAPgGAVQgQAwgEDKIAAAZQgDB0ABBtIgEAGIxOAJg");
	this.shape_543.setTransform(364.7,219.1);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#373535").ss(2.5).p("ArUA3QAbh9AshzIAnhbQAUgxBNh7QAshHAkg1QADgHAEgIIBNjMQAGgJADgKQAPgageg9QgFgLgHgMIgjg3QgHgMgGgLQjPltCTj7QALgSAMgSQAxhFBKgzQATgOAUgMQAtgZAkgMQAZgHAWgEQGkhFAXDoQADAfgEAkQgGA+geBLQgNAhgPAfQgJATgJARQgMAfgLAeQAAACAAABQAFAdAFAhIAiAvQAYAgASAgQAFAIAEAHQALAYAAAOQADANgMANQgDAQgNAIQgCABgBACQgFAEgKANQgEASgUAFQgJACAAANQgBADAAADQABADABACQAMAWAEAOQABAFgBADQgCAFgEAEQgDADgEAEQgDADgEADQABAFAAAFIABARQgBAEACAHQACALgBAJQAAACAAACQgBALgDAOQgBACAAACQgCAFADAGQgDAFASAWQAKAKANALQALALgLANQgBAEgDAEQAGAVgXALQgHACgFACIAXAlIAuA4IgMAiQgCAEgCAEQgIAUgDAYQgBAPgBAPIAFAUQACASANAaQAIAOAJAMICYCmQAZAgAYAhQCSC/BODZQAOApAJAuQAFAZAEAZQANBegCAgQAAAGAAAFIAGCpQACANACAOQASCggoDPQgBADAAAEQgeCSgeBCQgHAPgHAVQgQAxgDDKQAAAMgBANQgCBzABBtQgDADgCADIxOAJIgSgaIAKizQABgPgDgcQgHhLhdlBQgEgPgFgPIhsljQgDgKgDgKQhvljBXmRg");
	this.shape_544.setTransform(364.7,219.1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#ECB77F").s().p("AnlcrIAKizQABgPgDgcQgHhLhdlBIgJgeIhsljIgGgUQhvljBXmRIAAgBQAbh9AshzIAnhbQAUgxBNh7QAshHAkg1IAHgPIBNjMQAGgJADgKQAPgageg9IgMgXIgjg3IgNgXQjPltCTj7QALgSAMgSQAxhFBKgzQATgOAUgMQAtgZAkgMQAZgHAWgEQGkhFAXDoQADAfgEAkQgGA+geBLQgNAhgPAfIgSAkIgXA9IAAADIAKA+IAiAvQAYAgASAgIAJAPQALAYAAAOQADANgMANQgDAQgNAIIgDADQgFAEgKANQgEASgUAFQgJACAAANIgBAGIACAFQAMAWAEAOQABAFgBADQgCAFgEAEIgHAHIgHAGIABAKIABARQgBAEACAHQACALgBAJIAAAEQgBALgDAOIgBAEQgCAFADAGQgDAFASAWQAKAKANALQALALgLANQgBAEgDAEQAGAVgXALIgMAEIAXAlIAuA4IgMAiIgEAIQgIAUgDAYIgCAeIAFAUQACASANAaQAIAOAJAMICYCmQAZAgAYAhQCSC/BODZQAOApAJAuIAJAyQANBegCAgIAAALIAGCpIAEAbQASCggoDPIgBAHQgeCSgeBCQgHAPgHAVQgQAxgDDKIgBAZQgCBzABBtIgFAGIxOAJg");
	this.shape_545.setTransform(364.7,219.1);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#373535").ss(2.5).p("ArVA3QAbh9AshzIAnhbQAUgyBNh6QAshHAkg1QADgHAEgIIBNjMQAGgJADgLQAPgZgeg+QgFgKgHgMIgjg4QgHgLgHgLQjOltCTj7QALgTANgRQAxhFBJg0QAUgNAUgMQAtgaAjgLQAZgHAXgEQGkhFAWDpQADAfgEAjQgHA/gdBLQgNAggPAgQgJATgJARQgMAfgLAeQAAABAAACQAFAdAFAhIAiAuQAZAhASAfQAFAIADAIQALAYABAOQACAMgMANQgEARgNAHQgCABgBACQgFAEgJAOQgEARgUAGQgJACAAANQgBADAAADQABACABADQALAWAFAOQABAEgBADQgCAFgEAEQgDAEgEAEQgDADgDACQAAAFAAAGIAAARQgBAEACAHQADAKgBAKQAAACgBACQAAAKgDAOQgBACAAACQgCAGADAGQgDAFASAVQAKALAOAKQALAMgLANQAAADgDAEQAIAVgXALQgHACgFACIAUAlIAsA5IgMAiQgCAEgCAEQgIAUgCAYQgBAQgBAOIAGAUQABASAOAaQAIAOAJALICZCmQAZAgAYAhQCSC/BODZQAOApAJAuQAFAZAEAZQANBfgCAfQAAAGAAAFIAGCpQACANACAOQASChgoDOQgBAEgBADQgeCTgeBBQgGAPgHAWQgQAwgEDKQAAAMAAANQgDBzABBtQgDADgCADIxOAJIgTgZIAKizQABgPgDgcQgGhLhelCQgEgOgFgPIhslkQgDgKgDgKQhvljBXmRg");
	this.shape_546.setTransform(364.8,219.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#ECB77F").s().p("AnmcsIAKizQABgPgDgcQgGhLhelCIgJgdIhslkIgGgUQhvljBXmRIAAgBQAbh9AshzIAnhbQAUgyBNh6QAshHAkg1IAHgPIBNjMQAGgJADgLQAPgZgeg+IgMgWIgjg4IgOgWQjOltCTj7QALgTANgRQAxhFBJg0QAUgNAUgMQAtgaAjgLQAZgHAXgEQGkhFAWDpQADAfgEAjQgHA/gdBLQgNAggPAgIgSAkIgXA9IAAADIAKA+IAiAuQAZAhASAfIAIAQQALAYABAOQACAMgMANQgEARgNAHIgDADQgFAEgJAOQgEARgUAGQgJACAAANIgBAGIACAFQALAWAFAOQABAEgBADQgCAFgEAEIgHAIIgGAFIAAALIAAARQgBAEACAHQADAKgBAKIgBAEQAAAKgDAOIgBAEQgCAGADAGQgDAFASAVQAKALAOAKQALAMgLANQAAADgDAEQAIAVgXALIgMAEIAUAlIAsA5IgMAiIgEAIQgIAUgCAYIgCAeIAGAUQABASAOAaQAIAOAJALICZCmQAZAgAYAhQCSC/BODZQAOApAJAuIAJAyQANBfgCAfIAAALIAGCpIAEAbQASChgoDOIgCAHQgeCTgeBBQgGAPgHAWQgQAwgEDKIAAAZQgDBzABBtIgFAGIxOAJg");
	this.shape_547.setTransform(364.8,219.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#373535").ss(2.5).p("ArWA2QAbh9AshzIAnhbQAUgxBNh7QAshHAkg1QAEgHADgHIBNjNQAGgIADgLQAPgageg9QgFgLgHgLIgjg4QgHgMgHgLQjOltCTj7QALgTANgRQAxhFBKgzQATgOAUgMQAtgZAkgLQAZgIAWgEQGkhEAWDpQADAfgEAkQgHA+gdBLQgNAhgPAfQgJATgJARQgMAfgLAeQAAACAAABQAFAdAGAhIAiAvQAYAgASAgQAFAHAEAIQAKAYABAOQACANgNAMQgDAQgOAIQgCABgBACQgFAEgJAOQgDARgUAGQgJACAAANQgBADAAADQABADABACQALAWAFAOQABAFgBADQgCAFgEADQgDAEgEAEQgDADgDADQAAAFAAAFIAAARQgBAEACAHQACAKAAAKQgBACAAACQAAALgDAOQgBACAAACQgCAFADAGQgCAFASAVQAKALAOAKQALALgKANQAAAEgCAEQAJAVgYAKQgGADgFACIARAlIArA6IgMAhQgCAEgCAFQgIATgCAZQgCAPAAAOIAGAVQACARAOAaQAIAOAJALICZClQAZAgAYAhQCTC/BODZQAOAqAJAuQAGAZADAZQANBfgBAfQgBAFAAAGIAGCoQACAOACAOQARCggoDPQgBADAAAEQgeCSgeBCQgHAPgHAVQgQAxgEDJQAAANAAAMQgDB0AABtQgCADgCADIxPAJIgTgZIAKizQABgQgCgbQgHhLhelCQgEgPgFgOIhslkQgDgKgDgKQhvljBXmSg");
	this.shape_548.setTransform(364.9,219.2);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#ECB77F").s().p("AnncsIAKizQABgPgCgcQgHhKhelCIgJgeIhslkIgGgTQhvlkBXmRIAAgBQAbh9AshzIAnhbQAUgyBNh7QAshGAkg1IAHgPIBNjMQAGgJADgLQAPgZgeg+IgMgWIgjg4IgOgWQjOltCTj8QALgSANgSQAxhEBKg0QATgNAUgMQAtgaAkgLQAZgHAWgEQGkhFAWDqQADAegEAkQgHA/gdBLQgNAggPAfIgSAkIgXA+IAAADIALA9IAiAvQAYAgASAgQAFAIAEAIQAKAYABAOQACAMgNANQgDAQgOAHIgDADQgFAFgJANQgDASgUAFQgJADAAAMIgBAHIACAEQALAWAFAOQABAFgBADQgCAFgEAEIgHAHIgGAGIAAALIAAAQQgBAFACAHQACAKAAAKIgBAEQAAAKgDAOIgBAEQgCAGADAGQgCAFASAVQAKAKAOAKQALAMgKANQAAAEgCADQAJAVgYALIgLAEIARAlIArA7IgMAhIgEAIQgIAUgCAYIgCAeIAGAUQACASAOAaQAIANAJAMICZClIAxBBQCTC+BODaQAOApAJAuQAGAZADAZQANBfgBAfIgBALIAGCpIAEAbQARChgoDOIgBAHQgeCTgeBBQgHAPgHAWQgQAxgEDJIAAAZQgDBzAABtIgEAHIxPAIg");
	this.shape_549.setTransform(364.9,219.1);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#373535").ss(2.5).p("ArXA2QAbh9AshzIAnhbQAUgxBNh7QAshHAkg1QAEgHADgHIBNjNQAGgJADgLQAOgZgdg+QgGgKgGgMIgkg4QgGgLgHgLQjOltCUj8QALgSAMgRQAxhFBKg0QAUgNATgMQAtgaAkgLQAZgHAXgEQGkhEAVDqQADAfgEAjQgHA/gdBLQgNAggPAfQgKATgJARQgLAggMAeQABABAAACQAFAdAGAgIAiAvQAZAgASAgQAEAIAEAIQAKAYABAOQACAMgNANQgEAQgNAHQgCABgCACQgFAEgIAOQgDASgUAGQgJACAAANQgBADAAADQABACABACQALAWAFAOQABAFgBADQgCAFgEAEQgDAEgEAEQgDADgDACQAAAFAAAGIAAARQgBAEACAHQACAKgBAKQAAACAAACQAAALgDANQgBACAAACQgCAGADAGQgCAFATAVQAKAKAOAKQALAMgJAMQAAAEgCAEQAKAVgXAKQgGADgGACIAPAlIAqA7IgMAhQgDAEgBAFQgJATgBAZQgCAPAAAOIAGAVQADARAOAaQAHAOAKALICaCkQAZAgAYAhQCTC+BODaQAOApAKAvQAFAZADAZQANBfgBAfQgBAFAAAGIAGCoQACAOACAOQARChgoDOQgBADgBAEQgeCSgeBCQgHAPgHAVQgPAygFDJQAAAMAAANQgDBzAABtQgCADgDADIxPAJIgTgZIAKizQABgPgCgcQgHhKhelDQgEgOgFgPIhslkQgDgKgDgKQhvljBXmSg");
	this.shape_550.setTransform(365,219.2);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#ECB77F").s().p("AnocsIAKiyQABgQgCgcQgHhJhelDIgJgeIhslkIgGgTQhvlkBXmRIAAgBQAbh9AshzIAnhbQAUgyBNh7QAshHAkg1IAHgOIBNjMQAGgJADgLQAOgagdg9IgMgWIgkg4IgNgXQjOltCUj7QALgSAMgSQAxhFBKgzQAUgOATgLQAtgaAkgLQAZgIAXgDQGkhFAVDqQADAfgEAkQgHA+gdBLQgNAhgPAfIgTAkIgXA9IABADIALA+IAiAvQAZAgASAgIAIAPQAKAYABAOQACANgNAMQgEAQgNAIIgEACQgFAFgIANQgDATgUAFQgJADAAAMIgBAGIACAFQALAWAFAOQABAFgBADQgCAFgEAEIgHAHIgGAGIAAAKIAAARQgBAEACAIQACAKgBAKIAAAEQAAAKgDAOIgBAEQgCAFADAGQgCAGATAUQAKALAOAKQALALgJANQAAAEgCADQAKAVgXALIgMAEIAPAmIAqA7IgMAhIgEAIQgJAUgBAYIgCAeIAGAUQADASAOAaQAHANAKAMICaCkQAZAgAYAhQCTC+BODaQAOApAKAuIAIAyQANBggBAeIgBALIAGCpIAEAbQARChgoDOIgCAHQgeCTgeBCQgHAOgHAWQgPAxgFDJIAAAZQgDB0AABtIgFAGIxPAIg");
	this.shape_551.setTransform(365,219.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#373535").ss(2.5).p("ArYA2QAbh9AshzIAnhbQAUgxBNh7QAshHAkg1QAEgHAEgIIBMjMQAGgJADgLQAOgZgdg+QgGgLgGgLIgkg4QgGgLgHgLQjOluCUj7QALgSAMgSQAyhFBJgzQAUgNAUgMQAtgaAkgLQAZgHAWgEQGkhEAVDrQADAegEAkQgHA+geBLQgNAhgPAfQgJATgJARQgMAfgLAfQAAABABABQAGAeAGAgIAhAvQAZAgASAgQAFAIADAIQALAYAAAOQABAMgMAMQgEAQgOAHQgCABgCACQgFAFgIANQgCATgTAFQgJADgBAMQgBADgBAEQACACABACQALAWAFAOQABAFgBADQgCAFgEAEQgDADgEAEQgDADgDADQAAAFAAAGIAAAQQgCAEACAIQADAKgBAKQAAACgBACQAAAKgCAOQgBACAAACQgCAGAEAGQgCAFASAUQALAKANALQAMALgIAMQAAAEgCAEQAMAVgXAKQgGADgGACIAMAlIAoA8IgMAiQgCAEgCAEQgIATgCAZQgBAPAAAOIAGAVQADARAPAaQAHANAKAMICbCjQAZAgAYAhQCTC+BODaQAPApAJAvQAFAZADAZQANBggBAeQgBAFAAAGIAGCpQACANACAOQAQChgoDOQgBADAAAEQgeCTgfBBQgGAPgHAWQgQAygFDIQAAAMAAANQgDBzAABtQgCADgDADIxPAJIgUgZIAKiyQABgQgCgcQgHhJhelDQgEgPgFgPIhrlkQgDgKgDgKQhwljBXmSg");
	this.shape_552.setTransform(365.1,219.2);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#ECB77F").s().p("AnpcsIAKiyQABgQgCgcQgHhJhelDIgJgeIhrlkIgGgUQhwljBXmSIAAgBQAbh9AshzIAnhbQAUgxBNh7QAshHAkg1IAIgPIBMjMQAGgJADgLQAOgZgdg+IgMgWIgkg4IgNgWQjOluCUj7QALgSAMgSQAyhFBJgzIAogZQAtgaAkgLQAZgHAWgEQGkhEAVDrQADAegEAkQgHA+geBLQgNAhgPAfQgJATgJARIgXA+IABACIAMA+IAhAvQAZAgASAgIAIAQQALAYAAAOQABAMgMAMQgEAQgOAHIgEADQgFAFgIANQgCATgTAFQgJADgBAMIgCAHIADAEQALAWAFAOQABAFgBADQgCAFgEAEIgHAHIgGAGIAAALIAAAQQgCAEACAIQADAKgBAKIgBAEQAAAKgCAOIgBAEQgCAGAEAGQgCAFASAUQALAKANALQAMALgIAMQAAAEgCAEQAMAVgXAKIgMAFIAMAlIAoA8IgMAiIgEAIQgIATgCAZIgBAdIAGAVQADARAPAaQAHANAKAMICbCjIAxBBQCTC+BODaQAPApAJAvIAIAyQANBggBAeIgBALIAGCpIAEAbQAQChgoDOIgBAHQgeCTgfBBQgGAPgHAWQgQAygFDIIAAAZQgDBzAABtIgFAGIxPAJg");
	this.shape_553.setTransform(365.1,219.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#373535").ss(2.5).p("ArZA3QAbh9Ash0IAnhbQAUgxBNh7QAthHAjg1QAEgHAEgHIBNjNQAFgIADgLQAOgagdg+QgGgKgGgMIgkg4QgHgLgGgLQjOltCUj8QALgSANgSQAxhEBKg0QAUgNATgMQAtgaAkgKQAZgIAXgEQGkhEAUDsQADAegEAkQgHA/geBLQgNAggPAfQgJATgJARQgMAfgLAfQAAABABACQAGAdAGAgIAiAvQAZAgARAgQAFAIAEAIQAKAYAAAOQABAMgNAMQgEAQgOAHQgCABgCACQgFAEgHAOQgCATgTAGQgJACgBAMQgBADgBAEQACACABACQALAWAFAOQABAFgBADQgCAFgDAEQgEAEgEAEQgDADgDACQAAAGAAAFIgBARQgBAEACAHQACAKAAAKQgBACAAACQAAALgCANQgBACAAACQgCAGAEAGQgCAFATAUQAKAKAOAKQAMAMgIAMQABAEgCAEQAOAVgXAKQgGACgGACIAJAmIAnA9IgMAhQgCAEgCAEQgIAUgCAYQgBAQAAAOIAHAUQADASAOAZQAIANAKAMICbCjQAaAgAYAhQCSC9BPDbQAPApAJAuQAFAZADAZQANBhgBAdQAAAGgBAFIAGCpQACAOACANQAQCigoDNQgBAEgBADQgeCTgeBCQgHAOgHAWQgQAzgEDIQgBAMAAANQgDBzAABtQgDADgCADIxQAIIgUgYIAKiyQABgQgCgcQgGhIhflEQgEgPgFgPIhrlkQgDgKgDgKQhwlkBXmRg");
	this.shape_554.setTransform(365.2,219.1);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#ECB77F").s().p("AnqctIAKiyQABgQgCgcQgGhIhflEIgJgeIhrlkIgGgUQhwlkBXmRIAAgBQAbh9Ash0IAnhbQAUgxBNh7QAthHAjg1IAIgOIBNjNQAFgIADgLQAOgagdg+IgMgWIgkg4IgNgWQjOltCUj8QALgSANgSQAxhEBKg0IAngZQAtgaAkgKQAZgIAXgEQGkhEAUDsQADAegEAkQgHA/geBLQgNAggPAfIgSAkIgXA+IABADIAMA9IAiAvQAZAgARAgQAFAIAEAIQAKAYAAAOQABAMgNAMQgEAQgOAHIgEADQgFAEgHAOQgCATgTAGQgJACgBAMIgCAHIADAEQALAWAFAOQABAFgBADQgCAFgDAEIgIAIIgGAFIAAALIgBARQgBAEACAHQACAKAAAKIgBAEQAAALgCANIgBAEQgCAGAEAGQgCAFATAUQAKAKAOAKQAMAMgIAMQABAEgCAEQAOAVgXAKIgMAEIAJAmIAnA9IgMAhIgEAIQgIAUgCAYIgBAeIAHAUQADASAOAZQAIANAKAMICbCjQAaAgAYAhQCSC9BPDbQAPApAJAuIAIAyQANBhgBAdIgBALIAGCpIAEAbQAQCigoDNIgCAHQgeCTgeBCQgHAOgHAWQgQAzgEDIIgBAZQgDBzAABtIgFAGIxQAIg");
	this.shape_555.setTransform(365.2,219.1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#373535").ss(2.5).p("ArZA3QAbh9Ash0IAnhbQAUgxBNh7QAshHAkg1QADgHAEgHIBNjNQAGgJADgLQAOgZgeg+QgFgLgHgLIgjg4QgHgLgHgLQjOluCVj7QALgTAMgRQAyhFBKgzQATgNAUgMQAtgaAkgKQAZgIAXgEQGkhEATDsQADAfgEAkQgHA+geBLQgNAhgPAfQgJATgJARQgMAfgKAeQAAACAAABQAGAdAHAhIAiAvQAZAgARAgQAFAIAEAIQAKAYAAAOQABAMgOAMQgEAPgOAHQgCABgCACQgFAEgHAPQgCATgTAFQgJADgBAMQgBADAAADQABADABACQALAWAFAOQABAFgBADQgBAFgEAEQgDADgEAEQgDADgDADQAAAFgBAGIAAAQQgCAEACAIQACAKAAAKQgBACAAACQAAAKgCAOQAAACAAACQgCAGAEAGQgCAFATAUQALAKAOAKQAMALgHAMQABAEgCAEQAPAVgXAKQgGACgFACIAGAmIAlA+IgMAhQgCAEgCAEQgIAUgCAYQgBAQAAAOIAHAUQAEASAPAZQAIANAJALICdCjQAZAgAYAhQCTC8BPDcQAOApAJAuQAGAZADAZQAMBhgBAdQAAAGAAAFIAFCpQACAOACANQAQCigoDOQgBADgBAEQgeCTgfBBQgGAOgHAWQgQAzgFDIQAAAMAAANQgEBzAABtQgCADgDADIxQAIIgVgXIAKizQACgQgDgbQgGhIhelFQgEgPgFgPIhslkQgDgKgDgKQhvljBXmSg");
	this.shape_556.setTransform(365.3,219.1);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#ECB77F").s().p("AnrcuIAKizQACgQgDgbQgGhIhelFIgJgeIhslkIgGgUQhvljBXmSIAAgBQAbh9Ash0IAnhbQAUgxBNh7QAshHAkg1IAHgOIBNjNQAGgJADgLQAOgZgeg+IgMgWIgjg4IgOgWQjOluCVj7QALgTAMgRQAyhFBKgzQATgNAUgMQAtgaAkgKQAZgIAXgEQGkhEATDsQADAfgEAkQgHA+geBLQgNAhgPAfIgSAkIgWA9IAAADIANA+IAiAvQAZAgARAgIAJAQQAKAYAAAOQABAMgOAMQgEAPgOAHIgEADQgFAEgHAPQgCATgTAFQgJADgBAMIgBAGIACAFQALAWAFAOQABAFgBADQgBAFgEAEIgHAHIgGAGIgBALIAAAQQgCAEACAIQACAKAAAKIgBAEQAAAKgCAOIAAAEQgCAGAEAGQgCAFATAUQALAKAOAKQAMALgHAMQABAEgCAEQAPAVgXAKIgLAEIAGAmIAlA+IgMAhIgEAIQgIAUgCAYIgBAeIAHAUQAEASAPAZQAIANAJALICdCjIAxBBQCTC8BPDcQAOApAJAuQAGAZADAZQAMBhgBAdIAAALIAFCpIAEAbQAQCigoDOIgCAHQgeCTgfBBQgGAOgHAWQgQAzgFDIIAAAZQgEBzAABtIgFAGIxQAIg");
	this.shape_557.setTransform(365.3,219.1);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#373535").ss(2.5).p("AraA3QAbh9Ash0IAnhbQAUgxBNh7QAshHAkg1QADgHAEgIIBNjMQAGgJADgLQAOgageg9QgGgLgGgLIgkg4QgGgLgHgMQjOltCVj8QALgSANgRQAxhFBKgzQAUgOAUgLQAtgaAkgLQAZgHAWgEQGlhEASDtQADAfgEAjQgHA/geBLQgNAhgPAeQgJATgKARQgLAfgLAfQABACAAABQAHAdAGAgIAiAvQAZAhASAfQAEAIAEAIQAKAZAAANQABAMgOAMQgFAPgOAIQgCABgCABQgFAFgHAOQgBATgTAGQgJADgBAMQgBADAAADQABACABADQALAVAFAPQABAEgBADQgBAGgEAEQgDADgEAEQgDADgDADQAAAFgBAGIgBAQQgBAEACAIQACAJgBALQAAABAAADQAAAKgCAOQAAACAAACQgCAFAEAGQgBAGATATQAKAKAPAKQAMALgHAMQACAEgCAEQARAVgXAKQgGACgGACIAEAnIAkA+IgMAhQgDAEgBAEQgJAUgBAYQgBAQAAAOIAIAUQAEASAOAZQAJANAJALICdCiQAaAgAYAhQCTC8BPDcQAPApAJAuQAFAZADAZQAMBigBAcQAAAGAAAFIAFCpQACAOACANQAQCjgpDNQgBADAAAEQgfCTgeBBQgHAOgHAXQgPAzgGDHQAAAMAAANQgEB0AABtQgDADgCACIxQAIIgWgXIAKizQACgQgDgbQgFhHhflGQgEgPgFgPIhslkQgDgKgDgJQhvlkBXmSg");
	this.shape_558.setTransform(365.4,219.1);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#ECB77F").s().p("AnscuIAKizQACgQgDgbQgFhHhflGIgJgeIhslkIgGgTQhvlkBXmSIAAgBQAbh9Ash0IAnhbQAUgxBNh7QAshHAkg1IAHgPIBNjMQAGgJADgLQAOgageg9IgMgWIgkg4IgNgXQjOltCVj8QALgSANgRQAxhFBKgzQAUgOAUgLQAtgaAkgLQAZgHAWgEQGlhEASDtQADAfgEAjQgHA/geBLQgNAhgPAeIgTAkIgWA+IABADIANA9IAiAvQAZAhASAfIAIAQQAKAZAAANQABAMgOAMQgFAPgOAIIgEACQgFAFgHAOQgBATgTAGQgJADgBAMIgBAGIACAFQALAVAFAPQABAEgBADQgBAGgEAEIgHAHIgGAGIgBALIgBAQQgBAEACAIQACAJgBALIAAAEQAAAKgCAOIAAAEQgCAFAEAGQgBAGATATQAKAKAPAKQAMALgHAMQACAEgCAEQARAVgXAKIgMAEIAEAnIAkA+IgMAhIgEAIQgJAUgBAYQgBAQAAAOIAIAUQAEASAOAZQAJANAJALICdCiIAyBBQCTC8BPDcQAPApAJAuQAFAZADAZQAMBigBAcIAAALIAFCpIAEAbQAQCjgpDNIgBAHQgfCTgeBBQgHAOgHAXQgPAzgGDHIAAAZQgEB0AABtIgFAFIxQAIg");
	this.shape_559.setTransform(365.4,219.1);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#373535").ss(2.5).p("ArbA3QAbh9Ash0IAnhbQAUgxBNh7QAshHAkg1QAEgHADgIIBNjMQAGgJADgLQAOgageg9QgGgLgGgLIgkg4QgGgLgHgMQjOltCVj8QALgSANgSQAyhEBKgzQATgOAUgLQAtgaAkgLQAZgHAXgEQGkhEATDuQACAfgEAjQgHA/geBLQgNAggPAfQgKATgJARQgLAfgLAfQABABAAACQAHAdAHAgIAiAvQAZAgARAgQAFAIADAIQAKAZAAANQABAMgOAMQgFAPgPAHQgCABgBABQgFAFgHAOQgBAUgSAGQgJADgCAMQgBADAAADQABACABACQALAWAFAOQABAFAAADQgCAFgEAEQgDAEgEAEQgDADgDADQAAAFgBAFIgBARQgBAEABAHQACAKAAAKQAAACAAACQAAALgCAOQAAACAAACQgCAFAEAGQAAAGATATQAKAKAPAKQAMAKgGAMQACAEgBAEQASAVgXAKQgGACgGACIABAnIAiA/IgMAhQgCAEgCAFQgIATgBAZQgBAPAAAOIAIAUQAEASAPAZQAJANAJALICeChQAaAgAYAhQCTC8BPDcQAPApAJAuQAFAZADAaQANBhgBAcQgBAGAAAGIAGCoQACAOABAOQAQCigpDNQgBADgBAEQgeCTgfBBQgGAPgHAWQgQAzgFDHQgBANAAAMQgEB0AABtQgDADgCADIxRAHIgWgWIAKizQACgQgDgbQgFhHhflGQgEgPgFgPIhsllQgDgJgDgKQhvlkBXmSg");
	this.shape_560.setTransform(365.5,219.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#ECB77F").s().p("AntcvIAKizQACgQgDgbQgFhHhflGIgJgeIhsllIgGgTQhvlkBXmSIAAgBQAbh9Ash0IAnhbQAUgxBNh7QAshHAkg1IAHgPIBNjMQAGgJADgLQAOgageg9IgMgWIgkg4IgNgXQjOltCVj8QALgSANgSQAyhEBKgzQATgOAUgLQAtgaAkgLQAZgHAXgEQGkhEATDuQACAfgEAjQgHA/geBLQgNAggPAfIgTAkIgWA+IABADIAOA9IAiAvQAZAgARAgIAIAQQAKAZAAANQABAMgOAMQgFAPgPAHIgDACQgFAFgHAOQgBAUgSAGQgJADgCAMIgBAGIACAEQALAWAFAOIABAIQgCAFgEAEIgHAIIgGAGIgBAKIgBARQgBAEABAHQACAKAAAKIAAAEQAAALgCAOIAAAEQgCAFAEAGQAAAGATATQAKAKAPAKQAMAKgGAMQACAEgBAEQASAVgXAKIgMAEIABAnIAiA/IgMAhIgEAJQgIATgBAZIgBAdIAIAUQAEASAPAZQAJANAJALICeChIAyBBQCTC8BPDcQAPApAJAuQAFAZADAaQANBhgBAcIgBAMIAGCoIADAcQAQCigpDNIgCAHQgeCTgfBBQgGAPgHAWQgQAzgFDHIgBAZQgEB0AABtIgFAGIxRAHg");
	this.shape_561.setTransform(365.5,219.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#373535").ss(2.5).p("ArcA3QAbh9Ash0IAnhbQAUgyBNh6QAshHAkg1QAEgIADgHIBNjMQAGgJADgLQANgagdg9QgGgLgGgLIgkg4QgHgMgGgLQjOluCVj7QALgTANgRQAyhFBKgzQAUgNATgMQAugZAjgLQAZgHAXgEQGlhEASDuQACAfgEAkQgIA+geBLQgNAhgPAfQgJATgJAQQgLAggLAeQAAACABABQAHAdAHAgIAiAvQAaAhAQAgQAFAIAEAIQAKAZgBANQABAMgPAMQgFAOgPAHQgCABgBABQgFAFgGAPQgBAUgSAFQgJAEgCALQgBADgBADQACADABACQALAVAFAPQABAFAAADQgCAFgEAEQgDADgEAEQgDADgDAEQAAAEgBAGIgBAQQgCAEACAIQACAKAAAKQgBACAAACQABALgCAOQAAACAAACQgCAFAFAGQgBAFATAUQALAJAOAKQANAKgFAMQABAEAAAEQAUAVgXAKQgGACgGACIgCAnIAhBAIgMAhQgCAEgCAFQgIATgCAZQAAAPAAAOIAIAUQAFARAPAZQAIANAKALICfChQAZAfAZAhQCSC8BQDcQAPApAJAvQAFAZADAaQANBhgBAcQgBAGAAAGIAGCoQACAOABAOQAPCigpDNQAAADgBAEQgfCTgfBBQgGAPgHAWQgQA0gFDGQgBANAAAMQgEB0AABtQgDADgDADIxQAHIgXgWIAKizQACgQgDgbQgFhGhflHQgEgPgFgPIhsllQgDgJgDgKQhvlkBXmSg");
	this.shape_562.setTransform(365.6,219.1);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#ECB77F").s().p("AnucvIAKizQACgQgDgbQgFhGhflHIgJgeIhsllIgGgTQhvlkBXmSIAAgBQAbh9Ash0IAnhbQAUgyBNh6QAshHAkg1IAHgPIBNjMQAGgJADgLQANgagdg9IgMgWIgkg4IgNgXQjOluCVj7QALgTANgRQAyhFBKgzIAngZQAugZAjgLQAZgHAXgEQGlhEASDuQACAfgEAkQgIA+geBLQgNAhgPAfIgSAjIgWA+IABADIAOA9IAiAvQAaAhAQAgIAJAQQAKAZgBANQABAMgPAMQgFAOgPAHIgDACQgFAFgGAPQgBAUgSAFQgJAEgCALIgCAGIADAFQALAVAFAPIABAIQgCAFgEAEIgHAHIgGAHIgBAKIgBAQQgCAEACAIQACAKAAAKIgBAEQABALgCAOIAAAEQgCAFAFAGQgBAFATAUQALAJAOAKQANAKgFAMIABAIQAUAVgXAKIgMAEIgCAnIAhBAIgMAhIgEAJQgIATgCAZIAAAdIAIAUQAFARAPAZQAIANAKALICfChQAZAfAZAhQCSC8BQDcQAPApAJAvQAFAZADAaQANBhgBAcIgBAMIAGCoIADAcQAPCigpDNIgBAHQgfCTgfBBQgGAPgHAWQgQA0gFDGIgBAZQgEB0AABtIgGAGIxQAHg");
	this.shape_563.setTransform(365.6,219.1);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#373535").ss(2.5).p("ArdA3QAbh9Ash0IAnhbQAUgyBNh6QAshIAkg1QAEgHADgHIBNjNQAGgIADgLQANgbgdg9QgGgKgHgMIgjg4QgHgLgGgLQjOluCWj8QALgSANgRQAxhFBKgzQAUgOAUgLQAtgaAkgKQAZgHAXgEQGkhEASDvQACAfgEAjQgIA/geBLQgNAhgPAeQgJATgKARQgKAfgLAfQAAACABABQAHAdAIAgIAiAvQAZAhARAfQAEAIAEAIQAKAZgBAOQABALgPAMQgGAOgPAHQgCABgBACQgFAEgGAPQAAAUgSAGQgJADgCAMQgBADgBADQACACABADQALAVAFAPQABAEAAADQgCAGgEAEQgDADgEAEQgCADgEADQAAAFgBAGIgBAQQgCAEABAIQACAJAAALQAAABAAADQABALgCANQAAACAAACQgCAGAFAGQAAAFATATQALAKAOAJQANALgEALQABAEAAAEQAWAVgXAKQgGACgGACIgFAnIAgBBIgMAhQgDAEgCAFQgIATgBAZQgBAPABAOIAIAUQAFARAQAZQAIANAKALICfCgQAaAfAZAhQCSC8BRDcQAOApAJAvQAFAZADAaQANBigBAbQgBAGAAAGIAGCoQACAOABAOQAPCjgpDMQgBADgBAEQgfCTgeBBQgHAPgHAWQgPA0gGDHQAAAMgBANQgEBzAABuQgDACgDADIxRAHIgXgVIAKizQACgRgDgaQgEhGhglIQgEgPgFgPIhslkQgDgKgDgKQhvlkBXmSg");
	this.shape_564.setTransform(365.7,219.1);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#ECB77F").s().p("AnvcwIAKizQACgRgDgaQgEhGhglIIgJgeIhslkIgGgUQhvlkBXmSIAAgBQAbh9Ash0IAnhbQAUgyBNh6QAshIAkg1IAHgOIBNjNQAGgIADgLQANgbgdg9IgNgWIgjg4IgNgWQjOluCWj8QALgSANgRQAxhFBKgzQAUgOAUgLQAtgaAkgKQAZgHAXgEQGkhEASDvQACAfgEAjQgIA/geBLQgNAhgPAeQgJATgKARIgVA+IABADIAPA9IAiAvQAZAhARAfIAIAQQAKAZgBAOQABALgPAMQgGAOgPAHIgDADQgFAEgGAPQAAAUgSAGQgJADgCAMIgCAGIADAFQALAVAFAPIABAHQgCAGgEAEIgHAHIgGAGIgBALIgBAQQgCAEABAIQACAJAAALIAAAEQABALgCANIAAAEQgCAGAFAGQAAAFATATQALAKAOAJQANALgEALQABAEAAAEQAWAVgXAKIgMAEIgFAnIAgBBIgMAhIgFAJQgIATgBAZQgBAPABAOIAIAUQAFARAQAZQAIANAKALICfCgQAaAfAZAhQCSC8BRDcQAOApAJAvIAIAzQANBigBAbIgBAMIAGCoIADAcQAPCjgpDMIgCAHQgfCTgeBBQgHAPgHAWQgPA0gGDHIgBAZQgEBzAABuIgGAFIxRAHg");
	this.shape_565.setTransform(365.7,219.1);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#373535").ss(2.5).p("AreA3QAch9Arh0IAnhbQAUgyBNh7QAthHAkg1QADgHAEgHIBNjNQAGgJADgLQANgageg9QgGgLgGgLIgkg4QgGgLgHgLQjOlvCWj7QALgSANgSQAyhEBKgzQAUgOAUgLQAtgaAkgKQAZgHAXgEQGlhEAQDwQADAfgFAjQgIA+geBLQgNAhgPAfQgJATgKARQgKAfgLAfQABABAAACQAIAdAIAgIAiAvQAZAgARAgQAEAIAEAIQAKAZgBAOQAAALgPAMQgGAOgPAGQgCABgBACQgFAEgGAPQAAAVgSAGQgJADgBAMQgBADgBADQABACABACQALAVAGAPQABAFgBADQgCAFgDAEQgDAEgEAEQgDADgDADQAAAFgBAFIgCARQgCAEACAHQABAKAAAKQAAACAAACQABALgBAOQAAACgBACQgBAGAFAGQAAAFATATQALAJAPAKQANAKgEAMQACADAAAEQAXAVgXAKQgGACgGACIgIAnIAfBCIgMAhQgDAEgBAFQgJATgBAZQAAAQABAOIAIATQAGARAPAZQAJANAKALICgCfQAZAfAZAhQCTC7BQDdQAPApAJAvQAFAZADAaQAMBigBAbQAAAGAAAGIAFCoQACAOACAOQAOCjgpDMQgBAEgBADQgfCUgfBAQgGAPgHAWQgPA1gHDGQAAAMAAANQgEBzgBBuQgDACgDADIxRAHIgXgVIAKizQABgQgCgbQgFhFhflJQgEgOgFgPIhsllQgDgKgDgKQhwlkBXmSg");
	this.shape_566.setTransform(365.7,219.1);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#ECB77F").s().p("AnvcwIAKizQABgQgCgbQgFhFhflJIgJgdIhsllIgGgUQhwlkBXmSIAAgBQAch9Arh0IAnhbQAUgyBNh7QAthHAkg1IAHgOIBNjNQAGgJADgLQANgageg9IgMgWIgkg4IgNgWQjOlvCWj7QALgSANgSQAyhEBKgzQAUgOAUgLQAtgaAkgKQAZgHAXgEQGlhEAQDwQADAfgFAjQgIA+geBLQgNAhgPAfIgTAkIgVA+IABADIAQA9IAiAvQAZAgARAgIAIAQQAKAZgBAOQAAALgPAMQgGAOgPAGIgDADQgFAEgGAPQAAAVgSAGQgJADgBAMIgCAGIACAEQALAVAGAPIAAAIQgCAFgDAEIgHAIIgGAGIgBAKIgCARQgCAEACAHIABAUIAAAEIAAAZIgBAEQgBAGAFAGQAAAFATATQALAJAPAKQANAKgEAMIACAHQAXAVgXAKIgMAEIgIAnIAfBCIgMAhIgEAJQgJATgBAZQAAAQABAOIAIATQAGARAPAZQAJANAKALICgCfIAyBAQCTC7BQDdQAPApAJAvQAFAZADAaQAMBigBAbIAAAMIAFCoIAEAcQAOCjgpDMIgCAHQgfCUgfBAQgGAPgHAWQgPA1gHDGIAAAZQgEBzgBBuIgGAFIxRAHg");
	this.shape_567.setTransform(365.7,219.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#373535").ss(2.5).p("ArfA3QAch9Arh0IAnhbQAVgyBNh7QAshHAkg1QADgHAEgHIBNjNQAGgJADgLQANgageg9QgGgLgGgLIgkg4QgHgLgGgMQjOluCXj7QALgTANgRQAxhEBLg0QATgNAUgLQAugaAjgKQAZgHAXgEQGlhEAQDwQADAfgFAkQgIA+geBLQgNAhgPAeQgKATgJARQgKAfgLAfQABACAAACQAIAcAIAgIAiAvQAaAhAQAgQAFAIADAIQAKAZgBANQAAAMgQALQgGAOgPAHQgCABgBABQgFAEgFAQQAAAVgSAGQgJADgBALQgCADAAADQABADABACQALAVAGAPQABAFgBADQgBAFgEAEQgDAEgEAEQgDADgDADQAAAFgBAFIgCARQgCAEABAHQACAKAAAKQAAACAAACQABALgBAOQAAACgBACQgBAFAFAGQAAAGAUASQALAKAPAJQANAKgDAMQACADAAAEQAZAVgXAKQgGACgGACIgLAoIAdBCIgMAhQgCAEgCAFQgIATgBAZQgBAQABAOIAJATQAGARAQAZQAJAMAKALICgCfQAaAfAZAhQCSC7BRDdQAPApAJAvQAFAZADAaQAMBjgBAaQAAAGAAAGIAFCoQACAOACAOQAOCjgqDMQAAAEgBADQggCUgeBAQgHAPgGAWQgQA1gGDGQgBAMAAANQgEB0gBBtQgDADgDACIxRAHIgYgUIAKi0QABgQgCgaQgEhFhglJQgEgPgFgPIhsllQgDgKgDgJQhwllBXmSg");
	this.shape_568.setTransform(365.8,219.1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#ECB77F").s().p("AnwcxIAKi0QABgQgCgaQgEhFhglJIgJgeIhsllIgGgTQhwllBXmSIAAgBQAch9Arh0IAnhbQAVgyBNh7QAshHAkg1IAHgOIBNjNQAGgJADgLQANgageg9IgMgWIgkg4IgNgXQjOluCXj7QALgTANgRQAxhEBLg0QATgNAUgLQAugaAjgKQAZgHAXgEQGlhEAQDwQADAfgFAkQgIA+geBLQgNAhgPAeIgTAkIgVA+IABAEIAQA8IAiAvQAaAhAQAgIAIAQQAKAZgBANQAAAMgQALQgGAOgPAHIgDACQgFAEgFAQQAAAVgSAGQgJADgBALIgCAGIACAFQALAVAGAPIAAAIQgBAFgEAEIgHAIIgGAGIgBAKIgCARQgCAEABAHIACAUIAAAEIAAAZIgBAEQgBAFAFAGQAAAGAUASQALAKAPAJQANAKgDAMQACADAAAEQAZAVgXAKIgMAEIgLAoIAdBCIgMAhIgEAJQgIATgBAZQgBAQABAOIAJATQAGARAQAZQAJAMAKALICgCfQAaAfAZAhQCSC7BRDdQAPApAJAvQAFAZADAaQAMBjgBAaIAAAMIAFCoIAEAcQAOCjgqDMIgBAHQggCUgeBAQgHAPgGAWQgQA1gGDGIgBAZQgEB0gBBtIgGAFIxRAHg");
	this.shape_569.setTransform(365.8,219.1);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#373535").ss(2.5).p("ArgA3QAch9Arh0IAnhbQAVgyBNh7QAshHAkg1QADgHAEgIIBNjMQAGgJADgLQANgageg9QgGgLgGgLIgkg4QgHgMgGgLQjOluCXj8QALgSANgSQAyhEBKgzQAUgNAUgMQAtgZAkgKQAZgHAXgEQGlhEAPDxQADAfgFAjQgIA/geBLQgOAhgPAeQgJATgJARQgLAfgKAfQAAACABABQAIAdAIAgIAjAvQAZAhAQAfQAFAIADAJQAKAZgBANQAAALgQAMQgGANgQAHQgCABgBABQgFAFgFAPQABAVgRAGQgJAEgCALQgCADgBADQACACABADQALAVAGAPQABAEgBADQgBAGgEAEQgDADgEAEQgDADgDAEQAAAFgBAFIgCAQQgDAEACAIQACAJAAALQAAACAAACQAAALAAAOQAAACgBACQgBAFAFAGQABAFAUATQALAJAOAJQAOAKgCAMQACADAAAEQAbAVgXAKQgGACgGACIgNAoIAbBDIgMAiQgCAEgCAEQgIATgBAZQgBAQABAOIAJATQAHARAQAYQAJANAKALIChCeQAaAfAZAhQCSC6BSDeQAOApAJAvQAFAZADAaQAMBjgBAaQAAAGAAAGIAFCpQACANACAOQANCkgpDLQgBAEgBADQgfCUgfBAQgGAPgHAXQgQA1gGDFQAAANgBAMQgEB0gBBtQgDADgDACIxSAHIgYgUIAKizQABgRgCgaQgEhEhglKQgEgPgFgPIhsllQgDgKgDgJQhwllBXmSg");
	this.shape_570.setTransform(365.9,219.1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#ECB77F").s().p("AnxcxIAKizQABgRgCgaQgEhEhglKIgJgeIhsllIgGgTQhwllBXmSIAAgBQAch9Arh0IAnhbQAVgyBNh7QAshHAkg1IAHgPIBNjMQAGgJADgLQANgageg9IgMgWIgkg4IgNgXQjOluCXj8QALgSANgSQAyhEBKgzQAUgNAUgMQAtgZAkgKQAZgHAXgEQGlhEAPDxQADAfgFAjQgIA/geBLQgOAhgPAeQgJATgJARIgVA+IABADIAQA9IAjAvQAZAhAQAfQAFAIADAJQAKAZgBANQAAALgQAMQgGANgQAHIgDACQgFAFgFAPQABAVgRAGQgJAEgCALIgDAGIADAFQALAVAGAPIAAAHQgBAGgEAEIgHAHIgGAHIgBAKIgCAQQgDAEACAIQACAJAAALIAAAEIAAAZIgBAEQgBAFAFAGQABAFAUATQALAJAOAJQAOAKgCAMQACADAAAEQAbAVgXAKIgMAEIgNAoIAbBDIgMAiIgEAIQgIATgBAZQgBAQABAOIAJATQAHARAQAYQAJANAKALIChCeIAzBAQCSC6BSDeQAOApAJAvQAFAZADAaQAMBjgBAaIAAAMIAFCpIAEAbQANCkgpDLIgCAHQgfCUgfBAQgGAPgHAXQgQA1gGDFIgBAZQgEB0gBBtIgGAFIxSAHg");
	this.shape_571.setTransform(365.9,219.1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#373535").ss(2.5).p("ArhA3QAch9Arh0IAnhbQAVgyBNh7QAshHAkg1QADgHAEgIIBNjMQAGgJADgLQAMgbgdg9QgGgKgHgMIgjg4QgHgLgGgLQjOlvCXj7QALgSANgSQAyhEBKgzQAUgOAUgLQAtgaAkgKQAZgHAXgDQGlhEAPDyQADAfgFAjQgIA+geBLQgOAhgPAfQgJATgKAQQgKAfgKAgQAAABABACQAIAdAJAfIAiAvQAaAhAQAgQAEAIAEAIQAJAagBANQAAALgQALQgHAOgPAGQgCABgCABQgFAFgEAPQABAWgRAGQgJAEgCALQgCADgBADQACACABACQALAVAGAPQABAFgBADQgBAFgEAFQgDADgEAEQgCADgEADQAAAFgBAGIgDAQQgCAEABAIQACAJAAALQAAABAAADQABALAAANQAAACgBACQgBAGAFAGQABAFAUASQALAJAPAKQAOAKgCALQADADAAAEQAcAVgWAKQgGACgGACIgQAoIAaBEIgMAiQgDAEgCAEQgIATAAAZQgBAQABAOIAKATQAGARARAYQAIANALALICiCdQAaAfAZAhQCSC6BSDeQAOApAJAvQAFAZADAaQAMBkgBAZQAAAGAAAGIAFCpQACANACAOQANCkgqDLQAAAEgBADQggCUgfBBQgGAOgHAXQgPA2gHDFQAAAMgBANQgEBzgBBuQgEACgDACIxRAHIgZgUIAKizQABgQgCgbQgEhDhglLQgEgOgFgQIhsllQgDgJgDgKQhwllBXmSg");
	this.shape_572.setTransform(366,219.1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#ECB77F").s().p("AnycxIAKizQABgQgCgbQgEhDhglLIgJgeIhsllIgGgTQhwllBXmSIAAgBQAch9Arh0IAnhbQAVgyBNh7QAshHAkg1IAHgPIBNjMQAGgJADgLQAMgbgdg9IgNgWIgjg4IgNgWQjOlvCXj7QALgSANgSQAyhEBKgzQAUgOAUgLQAtgaAkgKQAZgHAXgDQGlhEAPDyQADAfgFAjQgIA+geBLQgOAhgPAfIgTAjIgUA/IABADIARA8IAiAvQAaAhAQAgIAIAQQAJAagBANQAAALgQALQgHAOgPAGIgEACQgFAFgEAPQABAWgRAGQgJAEgCALIgDAGIADAEQALAVAGAPIAAAIQgBAFgEAFIgHAHIgGAGIgBALIgDAQQgCAEABAIQACAJAAALIAAAEQABALAAANIgBAEQgBAGAFAGQABAFAUASQALAJAPAKQAOAKgCALQADADAAAEQAcAVgWAKIgMAEIgQAoIAaBEIgMAiIgFAIQgIATAAAZQgBAQABAOIAKATQAGARARAYQAIANALALICiCdQAaAfAZAhQCSC6BSDeQAOApAJAvIAIAzQAMBkgBAZIAAAMIAFCpIAEAbQANCkgqDLIgBAHQggCUgfBBQgGAOgHAXQgPA2gHDFIgBAZQgEBzgBBuIgHAEIxRAHg");
	this.shape_573.setTransform(366,219.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#373535").ss(2.5).p("AriA3QAch9Arh0IAnhbQAVgyBNh7QAshHAkg1QAEgIADgHIBNjNQAGgIADgLQAMgbgdg9QgGgLgHgLIgjg4QgHgLgGgLQjOlvCXj8QALgSANgRQAyhEBLgzQAUgOATgLQAugaAkgKQAZgHAXgDQGlhDAODxQADAfgFAkQgIA+gfBLQgNAhgPAeQgJATgKARQgKAfgKAgQAAABABACQAIAdAJAfIAiAvQAaAhAQAgQAFAIADAIQAKAagCANQAAALgRALQgGANgQAGQgCABgCACQgFAEgEAQQABAWgQAGQgJADgCALQgCADgBADQABADACACQALAVAGAPQABAFgBADQgBAFgEAEQgDAEgEAEQgCADgEADQAAAFgBAGIgDAQQgCAEABAHQACAKAAAKQAAACAAACQABAMAAANQAAACgBACQgBAGAGAGQABAFAUASQALAJAPAJQAOAKgBALQADAEABADQAdAVgWAKQgHADgFACIgTAnIAYBFIgMAiQgCAEgCAEQgIATgBAZQAAAQABAOIAKATQAHARAQAYQAJAMALALICiCdQAaAfAZAhQCTC5BSDfQAOApAJAvQAFAZADAaQAMBkAAAZQgBAGAAAGIAFCpQACANACAOQAMCkgpDLQgBAEgBADQgfCUgfBBQgHAOgGAXQgQA2gHDFQAAAMgBANQgEBzgCBuQgDACgDADIxSAGIgZgTIAKizQABgRgCgaQgEhDhglLQgEgPgFgPIhsllQgDgKgDgKQhwlkBXmTg");
	this.shape_574.setTransform(366.1,219.1);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#ECB77F").s().p("AnzcyIAKizQABgRgCgaQgEhDhglLIgJgeIhsllIgGgUQhwlkBXmTIAAgBQAch9Arh0IAnhbQAVgyBNh7QAshHAkg1IAHgPIBNjNQAGgIADgLQAMgbgdg9IgNgWIgjg4IgNgWQjOlvCXj8QALgSANgRQAyhEBLgzIAngZQAugaAkgKQAZgHAXgDQGlhDAODxQADAfgFAkQgIA+gfBLQgNAhgPAeQgJATgKARIgUA/IABADIARA8IAiAvQAaAhAQAgIAIAQQAKAagCANQAAALgRALQgGANgQAGIgEADQgFAEgEAQQABAWgQAGQgJADgCALIgDAGIADAFQALAVAGAPIAAAIQgBAFgEAEIgHAIIgGAGIgBALIgDAQQgCAEABAHIACAUIAAAEQABAMAAANIgBAEQgBAGAGAGQABAFAUASQALAJAPAJQAOAKgBALIAEAHQAdAVgWAKIgMAFIgTAnIAYBFIgMAiIgEAIQgIATgBAZQAAAQABAOIAKATQAHARAQAYQAJAMALALICiCdIAzBAQCTC5BSDfQAOApAJAvQAFAZADAaQAMBkAAAZIgBAMIAFCpIAEAbQAMCkgpDLIgCAHQgfCUgfBBQgHAOgGAXQgQA2gHDFIgBAZQgEBzgCBuIgGAFIxSAGg");
	this.shape_575.setTransform(366.1,219.1);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#373535").ss(2.5).p("ArjA2QAch9Arh0IAnhbQAVgyBNh7QAshHAkg1QAEgHADgHIBNjNQAGgJADgLQAMgbgdg9QgGgKgHgLIgjg5QgHgLgHgLQjNlvCYj7QALgTANgRQAyhEBKgzQAUgOAUgLQAtgaAkgJQAZgHAXgEQGmhDANDzQADAegFAkQgJA+geBLQgNAhgPAfQgKASgJARQgKAfgKAgQAAABABACQAJAdAJAfIAiAvQAaAhAQAgQAEAIADAIQAKAagCANQAAALgRALQgHANgQAGQgCABgCABQgFAFgDAQQABAWgQAGQgJAEgCALQgCACgBAEQABACACACQAKAVAHAPQABAFgBADQgBAFgEAEQgDAEgEAEQgCADgDADQgBAFgBAGIgDAQQgDAEACAIQABAJABALQAAABAAADQABALAAANQAAACgBACQgBAGAGAGQABAFAVASQALAJAPAJQAOAKAAALQADADABAEQAfAVgWAKQgHACgFACIgWAoIAXBGIgMAhQgDAEgBAEQgJAUAAAZQAAAQABANIAKAUQAIARAQAXQAJAMALALICjCcQAaAgAZAgQCTC5BSDgQAPAoAIAwQAFAZADAZQAMBlAAAZQgBAGAAAFIAFCpQACAOACANQAMClgqDLQAAAEgBADQggCUgfBAQgGAOgHAYQgPA2gIDEQAAANAAAMQgFB0gCBuQgDACgDACIxTAHIgZgTIAKizQABgRgCgaQgDhDhhlMQgEgOgFgPIhslmQgDgJgDgKQhwllBXmTg");
	this.shape_576.setTransform(366.2,219.2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#ECB77F").s().p("An0cyIAKizQABgRgCgaQgDhChhlMIgJgeIhslmIgGgTQhwlkBXmTIAAgBQAch+ArhzIAnhbQAVgzBNh7QAshHAkg0IAHgPIBNjNQAGgJADgLQAMgagdg+IgNgVIgjg4IgOgXQjNluCYj8QALgSANgSQAyhEBKgzQAUgNAUgMQAtgZAkgKQAZgHAXgEQGmhDANDzQADAfgFAjQgJA/geBKQgNAigPAeIgTAjIgUA/IABADIASA8IAiAwQAaAgAQAgQAEAIADAJQAKAagCAMQAAALgRALQgHANgQAHIgEACQgFAEgDAQQABAWgQAGQgJAEgCALIgDAGIADAEIARAkIAAAIQgBAGgEAEIgHAIIgFAFIgCALIgDAQQgDAEACAIIACAUIAAAEIABAZIgBAEQgBAFAGAGQABAGAVARQALAJAPAJQAOAKAAALQADAEABADQAfAVgWAKIgMAEIgWApIAXBFIgMAhIgEAIQgJAUAAAZQAAAQABANIAKAUQAIARAQAYQAJAMALALICjCcIAzBAQCTC5BSDfQAPAoAIAwQAFAZADAaQAMBlAAAYIgBALIAFCqIAEAbQAMClgqDLIgBAHQggCUgfBAQgGANgHAYQgPA3gIDDIAAAaQgFB0gCBtIgGAFIxTAGg");
	this.shape_577.setTransform(366.2,219.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#373535").ss(2.5).p("ArkA2QAch9Arh0IAohbQAUgyBNh7QAshHAkg1QAEgHADgIIBNjNQAHgIACgLQAMgbgeg9QgFgLgHgLIgkg4QgGgLgHgLQjNlvCYj8QALgSANgRQAyhFBKgyQAUgOAUgLQAugaAkgKQAZgGAXgEQGlhDANDzQADAfgFAjQgJA/geBLQgOAhgPAeQgJATgKARQgKAfgKAfQABACAAACQAKAcAJAgIAiAvQAaAhAQAfQAFAJADAIQAJAagCANQAAAKgSALQgHANgQAGQgCABgBABQgFAFgEAQQACAXgQAGQgJAEgCAKQgCADgBADQABACABADQALAUAHAQQABAEgBADQgBAGgEAEQgDAEgDAEQgDADgDADQgBAFgBAFIgDARQgDAEABAHQACAKAAAKQAAACAAACQACAMAAANQAAACAAACQgCAGAGAGQACAFAUARQAMAJAPAJQAOAKABALQADADABAEQAhAVgWAKQgHACgFACIgZAoIAWBHIgMAhQgDAEgCAEQgIAUAAAZQAAAQABAOIAKATQAIARARAXQAJAMALALICkCbQAaAgAZAgQCTC5BSDgQAPAoAJAwQAEAZADAZQAMBmAAAYQgBAGAAAFIAFCpQACAOACANQAMCmgqDKQgBAEgBADQggCUgfBAQgGAOgHAYQgPA3gIDEQAAAMAAANQgFBzgCBuQgDACgDACIxTAHIgagTIAKizQABgRgCgaQgDhChglMQgFgPgEgPIhtllQgDgKgDgKQhwllBXmTg");
	this.shape_578.setTransform(366.3,219.2);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#ECB77F").s().p("An1cyIAKizQABgRgCgaQgDhChglMIgJgeIhtllIgGgUQhwllBXmTIAAgBQAch9Arh0IAohbQAUgyBNh7QAshHAkg1IAHgPIBNjNQAHgIACgLQAMgbgeg9IgMgWIgkg4IgNgWQjNlvCYj8QALgSANgRQAyhFBKgyQAUgOAUgLQAugaAkgKQAZgGAXgEQGlhDANDzQADAfgFAjQgJA/geBLQgOAhgPAeIgTAkIgUA+IABAEIATA8IAiAvQAaAhAQAfIAIARQAJAagCANQAAAKgSALQgHANgQAGIgDACQgFAFgEAQQACAXgQAGQgJAEgCAKIgDAGIACAFQALAUAHAQIAAAHQgBAGgEAEIgGAIIgGAGIgCAKIgDARQgDAEABAHIACAUIAAAEQACAMAAANIAAAEQgCAGAGAGQACAFAUARQAMAJAPAJQAOAKABALIAEAHQAhAVgWAKIgMAEIgZAoIAWBHIgMAhIgFAIQgIAUAAAZQAAAQABAOIAKATQAIARARAXQAJAMALALICkCbQAaAgAZAgQCTC5BSDgQAPAoAJAwQAEAZADAZQAMBmAAAYIgBALIAFCpIAEAbQAMCmgqDKIgCAHQggCUgfBAQgGAOgHAYQgPA3gIDEIAAAZQgFBzgCBuIgGAEIxTAHg");
	this.shape_579.setTransform(366.3,219.2);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#373535").ss(2.5).p("ArkA3QAbh+AshzIAnhbQAVgzBMh6QAthIAkg1QADgHAEgHIBNjNQAGgJADgLQAMgbgeg9QgGgKgHgLIgjg4QgHgMgGgLQjOlvCYj8QAMgSANgRQAyhEBKgzQAUgOAUgLQAugZAkgKQAZgHAXgEQGlhCANDzQACAfgFAkQgIA+gfBLQgOAhgPAeQgJATgJARQgKAfgKAgQAAABABACQAJAdAKAfIAiAvQAaAhAQAgQAEAIAEAIQAJAagCANQgBAKgSALQgHANgQAGQgCABgCABQgFAFgDAQQADAXgQAGQgJAEgDAKQgBADgCADQACADABACQALAVAGAPQABAEAAAEQgCAFgDAEQgDAEgEAEQgCADgEADQAAAFgCAGIgDAQQgDAEABAIQACAJABALQgBABABADQABALAAAOQAAACAAACQgBAFAGAGQACAFAVASQALAIAPAJQAPAKABAKQADAEACADQAiAVgWAKQgGADgGACIgcAoIAVBHIgMAiQgDAEgCAEQgIATAAAZQAAAQABAOIALATQAIARARAXQAKAMAKALIClCbQAaAfAZAhQCTC4BTDgQAOApAJAvQAFAZADAaQAMBmgBAXQAAAGAAAGIAFCpQACANABAOQAMClgqDLQgBADgBAEQggCUgfBAQgGAOgHAXQgPA4gIDDQAAANgBAMQgFB0gBBuQgEACgDACIxTAGIgbgSIAKizQABgRgBgaQgDhBhhlNQgEgPgFgPIhslmQgDgKgDgJQhwllBXmTg");
	this.shape_580.setTransform(366.4,219.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#ECB77F").s().p("An2czIAKizQABgRgBgaQgDhBhhlNIgJgeIhslmIgGgTQhwllBXmTIAAgBQAbh+AshzIAnhbQAVgzBMh6QAthIAkg1IAHgOIBNjNQAGgJADgLQAMgbgeg9IgNgVIgjg4IgNgXQjOlvCYj8QAMgSANgRQAyhEBKgzQAUgOAUgLQAugZAkgKQAZgHAXgEQGlhCANDzQACAfgFAkQgIA+gfBLQgOAhgPAeQgJATgJARIgUA/IABADIATA8IAiAvQAaAhAQAgIAIAQQAJAagCANQgBAKgSALQgHANgQAGIgEACQgFAFgDAQQADAXgQAGQgJAEgDAKIgDAGIADAFIARAkIABAIQgCAFgDAEIgHAIIgGAGIgCALIgDAQQgDAEABAIIADAUIAAAEIABAZIAAAEQgBAFAGAGQACAFAVASQALAIAPAJQAPAKABAKQADAEACADQAiAVgWAKIgMAFIgcAoIAVBHIgMAiIgFAIQgIATAAAZQAAAQABAOIALATQAIARARAXIAUAXIClCbQAaAfAZAhQCTC4BTDgQAOApAJAvQAFAZADAaQAMBmgBAXIAAAMIAFCpIADAbQAMClgqDLIgCAHQggCUgfBAQgGAOgHAXQgPA4gIDDIgBAZQgFB0gBBuIgHAEIxTAGg");
	this.shape_581.setTransform(366.4,219.1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#373535").ss(2.5).p("ArlA3QAbh+AshzIAnhcQAVgyBNh6QAshIAkg1QADgHAEgHIBNjNQAGgJADgLQAMgbgeg9QgGgKgHgMIgjg4QgHgLgGgLQjOlvCZj8QALgSANgSQAyhEBLgyQAUgOATgLQAugaAkgJQAZgHAXgEQGmhCAMD0QACAfgFAjQgJA/geBLQgOAhgPAeQgJATgKAQQgKAfgJAgQAAACABABQAKAdAJAfIAjAwQAaAgAPAgQAFAJADAIQAJAagCANQgBAKgSALQgHAMgRAGQgCABgCABQgEAFgDAQQACAYgPAGQgJAEgDAKQgCADgBADQABACACACQALAVAGAPQABAFAAADQgBAGgEAEQgDAEgEAEQgCADgEADQAAAFgCAGIgDAQQgDADABAIQABAKABAKQAAACAAACQACAMAAANQAAACAAACQgBAGAGAGQACAFAVARQAMAJAPAIQAPAKACAKQADAEACADQAkAVgWAKQgGADgGACIgfAoIATBIIgMAiQgCAEgCAEQgIATAAAZQAAAQABAOIALATQAJARARAXQAJAMALALICmCaQAaAfAZAhQCTC3BTDhQAPAoAIAwQAFAZADAaQAMBmgBAXQAAAGAAAGIAFCpQACANABAOQALCmgqDKQAAADgBAEQggCUggBAQgGAOgGAYQgQA3gIDEQAAAMgBANQgFBzgCBuQgDACgEACIxTAGIgbgRIAKi0QABgRgBgZQgDhBhhlOQgEgPgFgPIhslmQgDgJgDgKQhwllBXmTg");
	this.shape_582.setTransform(366.5,219.1);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#ECB77F").s().p("An3c0IAKi0QABgRgBgZQgDhBhhlOIgJgeIhslmIgGgTQhwllBXmTIAAgBQAbh+AshzIAnhcQAVgyBNh6QAshIAkg1IAHgOIBNjNQAGgJADgLQAMgbgeg9IgNgWIgjg4IgNgWQjOlvCZj8QALgSANgSQAyhEBLgyIAngZQAugaAkgJQAZgHAXgEQGmhCAMD0QACAfgFAjQgJA/geBLQgOAhgPAeIgTAjIgTA/IABADIATA8IAjAwQAaAgAPAgIAIARQAJAagCANQgBAKgSALQgHAMgRAGIgEACQgEAFgDAQQACAYgPAGQgJAEgDAKIgDAGIADAEIARAkIABAIQgBAGgEAEIgHAIIgGAGIgCALIgDAQQgDADABAIIACAUIAAAEIACAZIAAAEQgBAGAGAGQACAFAVARQAMAJAPAIQAPAKACAKIAFAHQAkAVgWAKIgMAFIgfAoIATBIIgMAiIgEAIQgIATAAAZQAAAQABAOIALATQAJARARAXQAJAMALALICmCaQAaAfAZAhQCTC3BTDhQAPAoAIAwQAFAZADAaQAMBmgBAXIAAAMIAFCpIADAbQALCmgqDKIgBAHQggCUggBAQgGAOgGAYQgQA3gIDEIgBAZQgFBzgCBuIgHAEIxTAGg");
	this.shape_583.setTransform(366.5,219.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#373535").ss(2.5).p("ArmA3QAbh+AshzIAnhcQAVgyBNh7QAshHAkg1QADgHAEgIIBNjNQAGgIADgLQALgbgdg9QgGgLgHgLIgjg4QgHgLgGgMQjOlvCZj7QALgTANgRQAyhEBLgzQAUgNAUgLQAugaAkgJQAZgHAXgEQGlhCAMD1QACAfgFAjQgJA+geBLQgOAhgPAeQgKATgJARQgKAfgJAgQAAACABABQAKAdAKAfIAiAvQAaAhAQAgQAEAIADAIQAKAbgDAMQgBALgSAKQgIAMgRAGQgCABgBACQgFAEgDARQADAXgPAGQgJAFgDAKQgCADgBADQABACACACQALAVAGAPQABAFAAADQgBAGgEAEQgDADgEAFQgCADgDADQgBAFgCAFIgDARQgEADACAIQABAJABALQAAACAAACQACAMAAANQAAACAAACQgBAFAGAGQADAGAVARQAMAIAPAJQAPAJACAKQAEAEACADQAmAVgWALQgHACgFACIgiAoIASBJIgMAiQgCAEgCAEQgJATABAZQgBAQACAOIAMATQAJARARAXQAJAMALAKICmCaQAbAfAZAhQCTC3BTDhQAPAoAIAwQAFAZADAaQAMBmgBAXQAAAGAAAGIAFCpQACANABAOQALCmgqDKQgBADgBAEQggCUgfBAQgGAOgHAYQgPA4gJDDQAAAMAAANQgGB0gCBtQgDACgEACIxTAGIgcgRIAKizQABgRgBgaQgDhAhhlPQgEgPgFgPIhsllQgDgKgDgKQhwllBXmTg");
	this.shape_584.setTransform(366.6,219.1);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#ECB77F").s().p("An4c0IAKizQABgRgBgaQgDhAhhlPIgJgeIhsllIgGgUQhwllBXmTIAAgBQAbh+AshzIAnhcQAVgyBNh7QAshHAkg1IAHgPIBNjNQAGgIADgLQALgbgdg9IgNgWIgjg4IgNgXQjOlvCZj7QALgTANgRQAyhEBLgzQAUgNAUgLQAugaAkgJQAZgHAXgEQGlhCAMD1QACAfgFAjQgJA+geBLQgOAhgPAeIgTAkIgTA/IABADIAUA8IAiAvQAaAhAQAgIAHAQQAKAbgDAMQgBALgSAKQgIAMgRAGIgDADQgFAEgDARQADAXgPAGQgJAFgDAKIgDAGIADAEQALAVAGAPIABAIQgBAGgEAEIgHAIIgFAGIgDAKIgDARQgEADACAIIACAUIAAAEIACAZIAAAEQgBAFAGAGQADAGAVARQAMAIAPAJQAPAJACAKQAEAEACADQAmAVgWALIgMAEIgiAoIASBJIgMAiIgEAIQgJATABAZQgBAQACAOIAMATQAJARARAXQAJAMALAKICmCaQAbAfAZAhQCTC3BTDhQAPAoAIAwQAFAZADAaQAMBmgBAXIAAAMIAFCpIADAbQALCmgqDKIgCAHQggCUgfBAQgGAOgHAYQgPA4gJDDIAAAZQgGB0gCBtIgHAEIxTAGg");
	this.shape_585.setTransform(366.6,219.1);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#373535").ss(2.5).p("ArnA3QAbh+Ash0IAnhbQAVgyBNh7QAshHAkg1QADgHAEgIIBNjNQAGgIADgMQALgbgdg8QgGgLgHgLIgkg4QgGgLgHgMQjNlvCZj8QALgSANgRQAzhEBLgzQAUgNATgMQAugZAkgKQAZgGAXgEQGmhCALD1QACAfgFAkQgJA+gfBLQgNAhgPAeQgKATgJARQgKAegKAhQABABABACQAKAdAKAfIAjAvQAaAhAPAgQAFAIADAIQAJAbgDAMQgBAKgTALQgIAMgQAGQgDAAgBACQgFAEgCARQADAYgPAGQgJAEgDALQgCACgBADQABADACACQAKAUAHAQQABAEAAAEQgBAFgEAEQgDAEgEAEQgCADgDAEQgBAFgCAFIgEAQQgDAEABAIQACAJABALQgBACABACQABALABAOQAAACAAACQgBAFAHAGQADAGAVAQQALAIAQAJQAPAJADALQAEADADADQAnAWgWAKQgHACgFACIglApIARBJIgMAiQgDAEgCAEQgIATAAAZQAAARACANIAMATQAJARASAWQAJAMALALICnCZQAbAfAZAhQCSC2BUDiQAPAoAJAwQAEAZADAaQAMBngBAWQAAAGAAAGIAFCpQACAOABANQALCmgqDKQgBAEgBADQghCVgfA/QgGAOgHAYQgPA5gIDCQgBAMAAANQgGB0gCBtQgDACgEADIxUAFIgcgQIAKi0QABgRgBgZQgChAhilQQgEgOgFgPIhslmQgDgKgDgKQhxllBYmTg");
	this.shape_586.setTransform(366.7,219.1);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#ECB77F").s().p("An5c1IAKi0QABgRgBgZQgChAhilQIgJgdIhslmIgGgUQhxllBYmTIAAgBQAbh+Ash0IAnhbQAVgyBNh7QAshHAkg1IAHgPIBNjNQAGgIADgMQALgbgdg8IgNgWIgkg4IgNgXQjNlvCZj8QALgSANgRQAzhEBLgzIAngZQAugZAkgKQAZgGAXgEQGmhCALD1QACAfgFAkQgJA+gfBLQgNAhgPAeIgTAkIgUA/IACADIAUA8IAjAvQAaAhAPAgQAFAIADAIQAJAbgDAMQgBAKgTALQgIAMgQAGIgEACQgFAEgCARQADAYgPAGQgJAEgDALIgDAFIADAFIARAkQABAEAAAEQgBAFgEAEIgHAIIgFAHIgDAKIgEAQQgDAEABAIIADAUIAAAEIACAZIAAAEQgBAFAHAGQADAGAVAQQALAIAQAJQAPAJADALIAHAGQAnAWgWAKIgMAEIglApIARBJIgMAiIgFAIQgIATAAAZQAAARACANIAMATQAJARASAWIAUAXICnCZQAbAfAZAhQCSC2BUDiQAPAoAJAwQAEAZADAaQAMBngBAWIAAAMIAFCpIADAbQALCmgqDKIgCAHQghCVgfA/QgGAOgHAYQgPA5gIDCIgBAZQgGB0gCBtIgHAFIxUAFg");
	this.shape_587.setTransform(366.7,219.1);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#373535").ss(2.5).p("AroA3QAbh+Ash0IAnhbQAVgyBNh7QAshHAkg1QAEgIADgHIBNjNQAHgIACgMQALgbgeg8QgGgLgGgLIgkg4QgGgMgHgLQjNlvCZj8QAMgSANgSQAyhEBLgyQAUgOAUgLQAugZAkgKQAZgGAXgEQGmhCAKD2QACAfgFAjQgJA/gfBLQgOAhgPAeQgJATgKAQQgJAfgKAgQABACAAACQALAcALAfIAiAvQAaAhAQAgQAEAJADAIQAJAbgDAMQgBAKgTAKQgIAMgRAGQgDAAgBACQgFAEgCARQAEAZgPAGQgJAEgDAKQgCADgBADQABACABACQALAVAHAPQABAFAAADQgBAGgEAEQgDAEgDAEQgDADgDADQgBAFgCAGIgEAQQgDAEABAHQABAKABAKQAAACAAADQACALABAOQAAACAAACQgBAFAHAGQADAGAVAQQAMAIAQAIQAPAJAEALQAEADADADQApAWgWAKQgHACgGACIgnApIAPBKIgMAiQgCAEgCAEQgJATABAaQAAAQACAOIAMASQAKARARAWQAKAMALALICoCYQAaAfAaAgQCSC3BUDiQAPAoAJAwQAEAZADAaQAMBnAAAWQgBAGAAAGIAFCpQACAOABANQAKCngqDJQgBAEgBADQggCVggA/QgGAOgGAYQgQA5gIDCQgBANAAAMQgGB0gCBuQgEACgDACIxUAFIgdgQIAKi0QABgRgBgZQgCg/hhlQQgFgPgEgPIhtlmQgDgKgDgKQhxllBYmTg");
	this.shape_588.setTransform(366.8,219.1);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#ECB77F").s().p("An6c1IAKi0QABgRgBgZQgCg/hhlQIgJgeIhtlmIgGgUQhxllBYmTIAAgBQAbh+Ash0IAnhbQAVgyBNh7QAshHAkg1IAHgPIBNjNQAHgIACgMQALgbgeg8IgMgWIgkg4IgNgXQjNlvCZj8QAMgSANgSQAyhEBLgyQAUgOAUgLQAugZAkgKQAZgGAXgEQGmhCAKD2QACAfgFAjQgJA/gfBLQgOAhgPAeIgTAjIgTA/IABAEIAWA7IAiAvQAaAhAQAgIAHARQAJAbgDAMQgBAKgTAKQgIAMgRAGIgEACQgFAEgCARQAEAZgPAGQgJAEgDAKIgDAGIACAEQALAVAHAPQABAFAAADQgBAGgEAEIgGAIIgGAGIgDALIgEAQQgDAEABAHIACAUIAAAFQACALABAOIAAAEQgBAFAHAGQADAGAVAQIAcAQQAPAJAEALIAHAGQApAWgWAKIgNAEIgnApIAPBKIgMAiIgEAIQgJATABAaQAAAQACAOIAMASQAKARARAWIAVAXICoCYQAaAfAaAgQCSC3BUDiQAPAoAJAwQAEAZADAaQAMBnAAAWIgBAMIAFCpIADAbQAKCngqDJIgCAHQggCVggA/QgGAOgGAYQgQA5gIDCIgBAZQgGB0gCBuIgHAEIxUAFg");
	this.shape_589.setTransform(366.8,219.1);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#373535").ss(2.5).p("ArpA3QAbh+Ash0IAnhbQAVgzBNh6QAshHAkg1QAEgIADgHIBNjNQAHgJACgLQALgbgeg9QgGgKgGgLIgkg5QgHgLgGgLQjOlwCbj7QALgTANgRQAyhEBLgyQAUgOAUgLQAugaAkgJQAZgGAXgEQGmhCAKD3QACAfgFAjQgJA+gfBLQgOAhgPAeQgKATgJARQgKAfgJAgQABACAAABQALAdALAfIAiAvQAbAhAPAgQAEAIADAJQAJAagDANQgBAKgUAKQgIALgRAGQgCABgCABQgFAEgBASQAEAYgPAHQgJAEgDAKQgCADgBADQABACABACQALAUAHAQQABAFAAADQgBAGgEAEQgCADgEAFQgDADgDADQgBAFgCAFIgEARQgEADACAIQABAJABALQAAACAAACQACAMABANQAAACAAACQgBAGAHAGQAEAFAVAQQAMAIAQAJQAPAJAFAKQAEADADADQAqAWgVAKQgHACgGACIgqApIAOBLIgMAiQgDAEgBAEQgJATABAaQAAAQACAOIAMASQALARARAWQAKAMALAKICpCYQAaAfAaAgQCSC2BUDjQAPAoAJAwQAFAZACAaQAMBoAAAVQgBAGAAAGIAFCpQACAOABANQAKCngqDJQgBAEgBADQghCVgfA/QgGAOgHAYQgPA6gJDBQgBANAAAMQgGB0gCBuQgEACgEACIxUAFIgdgQIAKizQABgRgBgaQgCg+hhlRQgFgPgEgPIhtlmQgDgKgDgJQhxllBYmUg");
	this.shape_590.setTransform(366.9,219.1);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#ECB77F").s().p("An7c1IAKizQABgRgBgaQgCg+hhlRIgJgeIhtlmIgGgTQhxllBYmUIAAgBQAbh+Ash0IAnhbQAVgzBNh6QAshHAkg1IAHgPIBNjNQAHgJACgLQALgbgeg9IgMgVIgkg5IgNgWQjOlwCbj7QALgTANgRQAyhEBLgyQAUgOAUgLQAugaAkgJQAZgGAXgEQGmhCAKD3QACAfgFAjQgJA+gfBLQgOAhgPAeIgTAkIgTA/IABADIAWA8IAiAvQAbAhAPAgIAHARQAJAagDANQgBAKgUAKQgIALgRAGIgEACQgFAEgBASQAEAYgPAHQgJAEgDAKIgDAGIACAEQALAUAHAQQABAFAAADQgBAGgEAEIgGAIIgGAGIgDAKIgEARQgEADACAIIACAUIAAAEIADAZIAAAEQgBAGAHAGQAEAFAVAQQAMAIAQAJQAPAJAFAKIAHAGQAqAWgVAKIgNAEIgqApIAOBLIgMAiIgEAIQgJATABAaQAAAQACAOIAMASQALARARAWIAVAWICpCYQAaAfAaAgQCSC2BUDjQAPAoAJAwQAFAZACAaQAMBoAAAVIgBAMIAFCpIADAbQAKCngqDJIgCAHQghCVgfA/QgGAOgHAYQgPA6gJDBIgBAZQgGB0gCBuIgIAEIxUAFg");
	this.shape_591.setTransform(366.9,219.1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#373535").ss(2.5).p("ArqA3QAbh+Ash0IAnhbQAVgzBNh6QAthHAjg1QAEgIADgHIBOjNQAGgJADgLQAKgbgeg9QgGgLgGgLIgkg4QgHgLgGgLQjOlwCbj8QALgSANgRQAzhEBLgzQAUgNATgLQAugaAkgJQAZgGAYgEQGmhCAJD3QACAfgFAkQgKA+geBLQgOAhgPAeQgKATgJAQQgKAfgJAhQABABAAACQALAdAMAeIAiAwQAaAhAPAgQAFAIADAIQAJAbgEANQgBAJgUALQgJALgRAFQgCABgCABQgFAFAAARQAEAZgPAGQgIAFgEAKQgCACgCADQACACABADQALAUAHAQQABAEAAAEQgBAFgDAFQgDADgEAEQgDAEgDADQgBAFgCAFIgEARQgEADABAIQABAJABALQAAACABACQACAMABANQAAACAAACQgBAGAHAGQAEAFAWAQQAMAIAQAIQAPAJAFAKQAFADADAEQAsAVgWAKQgGACgGACIgsApIALBMIgMAiQgCAEgCAEQgIATAAAaQABAQACAOIAMASQALARASAWQAKALALALICpCXQAbAfAaAgQCSC2BVDjQAOAoAJAwQAFAZADAaQALBoAAAVQAAAGgBAGIAFCpQACAOABANQAKCngrDJQgBAEgBADQghCVgfBAQgGANgHAYQgPA6gJDCQAAAMgBANQgGBzgCBuQgEACgEACIxUAFIgegPIAKi0QABgRgBgZQgBg+hilSQgFgOgEgQIhtlmQgDgJgDgKQhxllBYmUg");
	this.shape_592.setTransform(367,219.1);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#ECB77F").s().p("An8c2IAKi0QABgRgBgZQgBg+hilSIgJgeIhtlmIgGgTQhxllBYmUIAAgBQAbh+Ash0IAnhbQAVgzBNh6QAthHAjg1IAHgPIBOjNQAGgJADgLQAKgbgeg9IgMgWIgkg4IgNgWQjOlwCbj8QALgSANgRQAzhEBLgzQAUgNATgLQAugaAkgJQAZgGAYgEQGmhCAJD3QACAfgFAkQgKA+geBLQgOAhgPAeIgTAjIgTBAIABADIAXA7IAiAwQAaAhAPAgQAFAIADAIQAJAbgEANQgBAJgUALQgJALgRAFIgEACQgFAFAAARQAEAZgPAGQgIAFgEAKIgEAFIADAFIASAkQABAEAAAEQgBAFgDAFIgHAHIgGAHIgDAKIgEARQgEADABAIIACAUIABAEIADAZIAAAEQgBAGAHAGQAEAFAWAQQAMAIAQAIQAPAJAFAKIAIAHQAsAVgWAKIgMAEIgsApIALBMIgMAiIgEAIQgIATAAAaQABAQACAOIAMASQALARASAWQAKALALALICpCXQAbAfAaAgQCSC2BVDjQAOAoAJAwQAFAZADAaQALBoAAAVIgBAMIAFCpIADAbQAKCngrDJIgCAHQghCVgfBAQgGANgHAYQgPA6gJDCIgBAZQgGBzgCBuIgIAEIxUAFg");
	this.shape_593.setTransform(367,219.1);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#373535").ss(2.5).p("ArrA3QAch+Ash0IAnhbQAVgzBMh6QAthHAkg2QADgHAEgHIBNjOQAGgIADgLQALgcgeg8QgGgLgHgLIgkg4QgGgLgHgMQjNlvCaj8QAMgSANgSQAyhEBMgyQAUgNATgLQAugaAkgJQAZgGAYgEQGmhCAJD4QABAfgFAjQgJA/gfBKQgOAigPAeQgKASgJARQgJAfgKAgQABACABACQALAcAMAfIAiAvQAaAhAPAgQAFAJADAIQAJAbgEAMQgCAKgUAKQgJALgRAFQgDABgBABQgFAFAAASQAEAZgOAGQgJAFgEAJQgBADgCADQABACACACQAKAVAHAPQACAFgBADQgBAGgDAEQgDAEgEAEQgCADgDAEQgBAEgCAGIgFAQQgEAEABAIQABAJACALQAAABAAADQACAMABANQABACAAACQgBAFAHAGQAEAGAWAPQAMAIAQAIQAQAJAGAKQAFADADAEQAuAVgWAKQgHACgFACIgwApIALBNIgMAiQgDAEgCAEQgIATABAaQAAAQACAOIANASQALARASAWQAKALALALICqCWQAbAfAaAgQCSC1BVDkQAPAoAJAwQAEAZADAaQAMBpgBAUQAAAGAAAGIAFCpQABAOACANQAJCogrDIQgBAEgBADQghCVgfBAQgGANgHAZQgPA6gJDBQgBAMAAANQgGB0gDBuQgEABgEACIxUAFIgfgPIAKizQACgSgCgZQgBg9hilSQgEgPgFgPIhslmQgDgKgDgKQhxllBXmUg");
	this.shape_594.setTransform(367,219.1);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#ECB77F").s().p("An9c2IAKizQACgSgCgZQgBg9hilSIgJgeIhslmIgGgUQhxllBXmUIAAgBQAch+Ash0IAnhbQAVgzBMh6QAthHAkg2IAHgOIBNjOQAGgIADgLQALgcgeg8IgNgWIgkg4IgNgXQjNlvCaj8QAMgSANgSQAyhEBMgyIAngYQAugaAkgJQAZgGAYgEQGmhCAJD4QABAfgFAjQgJA/gfBKQgOAigPAeIgTAjIgTA/IACAEIAXA7IAiAvQAaAhAPAgIAIARQAJAbgEAMQgCAKgUAKQgJALgRAFIgEACQgFAFAAASQAEAZgOAGQgJAFgEAJIgDAGIADAEIARAkQACAFgBADQgBAGgDAEIgHAIIgFAHIgDAKIgFAQQgEAEABAIIADAUIAAAEQACAMABANIABAEQgBAFAHAGQAEAGAWAPQAMAIAQAIQAQAJAGAKIAIAHQAuAVgWAKIgMAEIgwApIALBNIgMAiIgFAIQgIATABAaQAAAQACAOIANASQALARASAWIAVAWICqCWQAbAfAaAgQCSC1BVDkQAPAoAJAwQAEAZADAaQAMBpgBAUIAAAMIAFCpIADAbQAJCogrDIIgCAHQghCVgfBAQgGANgHAZQgPA6gJDBIgBAZQgGB0gDBuIgIADIxUAFg");
	this.shape_595.setTransform(367,219.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#373535").ss(2.5).p("ArsA3QAch+Ash0IAnhbQAVgzBNh6QAshIAkg1QADgHAEgHIBNjOQAHgIACgMQAKgbgeg8QgGgLgGgLIgkg4QgGgMgHgLQjNlwCbj8QALgSANgRQAzhEBLgyQAUgOAUgLQAugZAkgJQAZgHAXgDQGnhCAID5QABAfgFAjQgKA+geBLQgOAhgPAeQgKATgKARQgJAegJAhQABACABABQALAdAMAfIAiAvQAbAhAPAgQAEAIADAJQAJAbgEAMQgCAKgUAKQgJAKgSAGQgCAAgCACQgFAEAAASQAFAZgOAHQgJAFgEAJQgCADgBADQABACABACQALAUAHAQQACAFgBADQAAAGgEAEQgDAEgDAEQgDADgDADQgBAFgCAGIgFAQQgEADABAIQABAJABALQAAACABADQACALABAOQABACAAACQgBAFAHAGQAFAGAWAPQAMAIAQAIQAQAIAGAKQAGADADAEQAvAVgVAKQgHACgGACIgyAqIAJBNIgMAiQgCAEgCAEQgJATABAaQABAQACAOIANASQAMARASAVQAKAMALAKICrCWQAbAfAaAgQCSC1BVDkQAPAoAJAwQAEAZADAaQAMBpgBAUQAAAGAAAGIAFCpQABAOACANQAICogqDJQgBADgBAEQghCVggA/QgGANgGAZQgQA6gJDBQgBAMAAANQgGB0gDBuQgEACgEABIxVAFIgfgOIAKi0QACgRgCgZQAAg9hjlTQgEgPgFgPIhslmQgDgKgDgKQhxllBXmUg");
	this.shape_596.setTransform(367.1,219.1);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#ECB77F").s().p("An+c3IAKi0QACgRgCgZQAAg9hjlTIgJgeIhslmIgGgUQhxllBXmUIAAgBQAch+Ash0IAnhbQAVgzBNh6QAshIAkg1IAHgOIBNjOQAHgIACgMQAKgbgeg8IgMgWIgkg4IgNgXQjNlwCbj8QALgSANgRQAzhEBLgyQAUgOAUgLQAugZAkgJQAZgHAXgDQGnhCAID5QABAfgFAjQgKA+geBLQgOAhgPAeIgUAkIgSA/IACADIAXA8IAiAvQAbAhAPAgIAHARQAJAbgEAMQgCAKgUAKQgJAKgSAGIgEACQgFAEAAASQAFAZgOAHQgJAFgEAJIgDAGIACAEIASAkQACAFgBADQAAAGgEAEIgGAIIgGAGIgDALIgFAQQgEADABAIIACAUIABAFIADAZIABAEQgBAFAHAGQAFAGAWAPQAMAIAQAIQAQAIAGAKQAGADADAEQAvAVgVAKIgNAEIgyAqIAJBNIgMAiIgEAIQgJATABAaQABAQACAOIANASQAMARASAVIAVAWICrCWQAbAfAaAgQCSC1BVDkQAPAoAJAwQAEAZADAaQAMBpgBAUIAAAMIAFCpIADAbQAICogqDJIgCAHQghCVggA/QgGANgGAZQgQA6gJDBIgBAZQgGB0gDBuIgIADIxVAFg");
	this.shape_597.setTransform(367.1,219.1);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#373535").ss(2.5).p("ArtA3QAch+Ash0IAnhbQAVgzBNh6QAshIAkg1QADgHAEgIIBNjNQAHgIACgMQAKgbgeg9QgGgKgGgLIgkg4QgHgMgGgLQjNlwCbj8QALgSANgRQAzhEBLgzQAVgNATgLQAugZAkgJQAZgHAYgDQGmhCAID5QABAfgFAkQgKA+gfBLQgOAhgPAeQgJATgKAQQgJAfgJAhQABABABACQALAdAMAeIAjAwQAaAhAPAgQAEAIADAIQAJAcgEAMQgCAJgVAKQgJAKgSAGQgCAAgCACQgEAEAAASQAFAagOAGQgJAFgEAKQgCADgBACQABACABADQALAUAHAQQACAEgBAEQAAAFgEAFQgDADgDAFQgDADgDADQgBAFgCAGIgFAQQgEADABAIQAAAJACALQAAACAAACQADAMABAOQABACAAACQgBAFAIAGQAEAGAWAPQANAHAQAIQAQAJAHAJQAGADAEAEQAwAVgVAKQgHACgGACIg1AqIAIBPIgMAhQgDAEgBAFQgJASABAaQABAQACAOIAOASQAMARASAVQAKAMALAKICsCVQAbAeAaAhQCSC0BWDkQAOApAJAwQAFAZACAaQAMBqgBATQAAAGAAAGIAFCpQABAOACAOQAICngrDJQgBADgBAEQghCVggA/QgGANgGAZQgPA7gKDAQAAANgBAMQgGB0gDBuQgEACgEABIxWAFIgfgOIAKizQACgSgBgZQgBg8hjlUQgEgPgFgPIhslmQgDgKgDgKQhxllBXmUg");
	this.shape_598.setTransform(367.2,219.1);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#ECB77F").s().p("An/c3IAKizQACgSgBgZQgBg8hjlUIgJgeIhslmIgGgUQhxllBXmUIAAgBQAch+Ash0IAnhbQAVgzBNh6QAshIAkg1IAHgPIBNjNQAHgIACgMQAKgbgeg9IgMgVIgkg4IgNgXQjNlwCbj8QALgSANgRQAzhEBLgzIAogYQAugZAkgJQAZgHAYgDQGmhCAID5QABAfgFAkQgKA+gfBLQgOAhgPAeIgTAjIgSBAIACADIAXA7IAjAwQAaAhAPAgIAHAQQAJAcgEAMQgCAJgVAKQgJAKgSAGIgEACQgEAEAAASQAFAagOAGQgJAFgEAKIgDAFIACAFQALAUAHAQQACAEgBAEQAAAFgEAFIgGAIIgGAGIgDALIgFAQQgEADABAIIACAUIAAAEIAEAaIABAEQgBAFAIAGQAEAGAWAPQANAHAQAIQAQAJAHAJIAKAHQAwAVgVAKIgNAEIg1AqIAIBPIgMAhIgEAJQgJASABAaQABAQACAOIAOASQAMARASAVIAVAWICsCVQAbAeAaAhQCSC0BWDkQAOApAJAwQAFAZACAaQAMBqgBATIAAAMIAFCpIADAcQAICngrDJIgCAHQghCVggA/QgGANgGAZQgPA7gKDAIgBAZQgGB0gDBuIgIADIxWAFg");
	this.shape_599.setTransform(367.2,219.1);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#373535").ss(2.5).p("AruA3QAch+Ash0IAnhbQAVgzBNh6QAshIAkg1QADgHAEgIIBNjNQAHgIACgMQAKgbgeg9QgGgKgGgLIgkg5QgHgLgGgLQjOlwCcj8QAMgSANgSQAyhDBMgzQAUgNAUgLQAugaAkgJQAZgGAXgDQGnhCAHD6QABAfgFAjQgKA/gfBKQgOAigPAdQgKATgJARQgJAegJAhQABACAAACQANAcAMAfIAiAvQAbAhAOAgQAFAJADAIQAIAcgEAMQgCAJgVAKQgKAKgSAFQgCABgBABQgFAEAAATQAGAagOAGQgJAFgEAJQgCADgBADQABACABACQALAUAHAQQACAFgBADQAAAGgEAEQgCAEgEAEQgDAEgDADQgBAFgCAFIgGARQgEADABAIQABAJACALQAAACAAACQACAMACANQABACAAACQgBAGAIAGQAFAFAWAPQAMAIARAHQAQAJAIAJQAGADAEAEQAyAVgVAKQgHACgGACIg4AqIAHBQIgMAhQgDAEgCAFQgIASABAaQAAAQADAOIAOASQAMARATAVQAKALALALICtCUQAbAeAZAhQCTC0BWDkQAOApAJAwQAFAZACAaQAMBqgBATQAAAGAAAGIAFCpQABAOACAOQAICogrDIQgBADgBAEQgiCVgfA/QgGANgHAZQgPA7gKDAQAAANgBAMQgGB0gDBuQgEACgFACIxVAEIgggNIAKi0QACgSgBgYQgBg8hilUQgFgPgEgPIhtlnQgDgKgDgJQhxlmBXmUg");
	this.shape_600.setTransform(367.3,219.1);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#ECB77F").s().p("AoAc4IAKi0QACgSgBgYQgBg8hilUIgJgeIhtlnIgGgTQhxlmBXmUIAAgBQAch+Ash0IAnhbQAVgzBNh6QAshIAkg1IAHgPIBNjNQAHgIACgMQAKgbgeg9IgMgVIgkg5IgNgWQjOlwCcj8QAMgSANgSQAyhDBMgzQAUgNAUgLQAugaAkgJQAZgGAXgDQGnhCAHD6QABAfgFAjQgKA/gfBKQgOAigPAdIgTAkIgSA/IABAEIAZA7IAiAvQAbAhAOAgIAIARQAIAcgEAMQgCAJgVAKQgKAKgSAFIgDACQgFAEAAATQAGAagOAGQgJAFgEAJIgDAGIACAEQALAUAHAQQACAFgBADQAAAGgEAEIgGAIIgGAHIgDAKIgGARQgEADABAIIADAUIAAAEIAEAZIABAEQgBAGAIAGQAFAFAWAPQAMAIARAHQAQAJAIAJQAGADAEAEQAyAVgVAKIgNAEIg4AqIAHBQIgMAhIgFAJQgIASABAaQAAAQADAOIAOASQAMARATAVIAVAWICtCUQAbAeAZAhQCTC0BWDkQAOApAJAwQAFAZACAaQAMBqgBATIAAAMIAFCpIADAcQAICogrDIIgCAHQgiCVgfA/QgGANgHAZQgPA7gKDAIgBAZQgGB0gDBuIgJAEIxVAEg");
	this.shape_601.setTransform(367.3,219.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#373535").ss(2.5).p("ArvA3QAch+Ash0IAnhbQAVgzBNh7QAshHAkg1QAEgIADgHIBNjNQAHgJACgLQAKgcgeg8QgGgLgGgLIgkg4QgHgLgGgMQjOlwCcj8QAMgSANgRQAzhEBLgyQAUgNAUgLQAugaAkgJQAZgGAYgDQGmhCAHD7QABAfgFAjQgKA+gfBLQgOAigPAdQgKATgKAQQgIAfgJAhQABACAAABQANAdAMAeIAjAwQAaAhAPAgQAEAIADAJQAJAcgFALQgCAKgWAJQgJAKgSAFQgDABgBABQgFAFABASQAGAagOAHQgIAFgFAJQgCADgCADQACACABACQALAUAHAQQACAFAAADQgBAGgEAEQgCAEgEAEQgDADgDAEQgBAFgCAFIgGAQQgEADABAJQABAIABAMQAAABABADQACAMACANQABACAAACQgBAFAIAGQAFAGAXAPQAMAHARAIQAQAIAJAJQAGAEAEADQA0AVgWAKQgGACgGACIg7AqIAFBRIgMAhQgCAEgCAFQgJASACAaQAAAQADAOIAOASQANARATAVQAKALALAKICtCUQAbAeAaAhQCTCzBWDlQAPApAIAwQAFAZACAaQAMBrAAASQgBAGAAAGIAFCqQACANABAOQAHCogrDIQgBADgBAEQghCVggA/QgGANgGAZQgPA8gLDAQAAAMgBANQgGB0gEBuQgEABgEACIxWAEIgggNIAKi0QACgSgBgYQgBg7hilVQgFgPgEgPIhtlnQgDgJgDgKQhxlmBXmUg");
	this.shape_602.setTransform(367.4,219.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#ECB77F").s().p("AoBc4IAKi0QACgSgBgYQgBg7hilVIgJgeIhtlnIgGgTQhxlmBXmUIAAgBQAch+Ash0IAnhbQAVgzBNh7QAshHAkg1IAHgPIBNjNQAHgJACgLQAKgcgeg8IgMgWIgkg4IgNgXQjOlwCcj8QAMgSANgRQAzhEBLgyQAUgNAUgLQAugaAkgJQAZgGAYgDQGmhCAHD7QABAfgFAjQgKA+gfBLQgOAigPAdIgUAjIgRBAIABADIAZA7IAjAwQAaAhAPAgQAEAIADAJQAJAcgFALQgCAKgWAJQgJAKgSAFIgEACQgFAFABASQAGAagOAHQgIAFgFAJIgEAGIADAEIASAkIACAIQgBAGgEAEIgGAIIgGAHIgDAKIgGAQQgEADABAJIACAUIABAEIAEAZIABAEQgBAFAIAGQAFAGAXAPIAdAPQAQAIAJAJIAKAHQA0AVgWAKIgMAEIg7AqIAFBRIgMAhIgEAJQgJASACAaQAAAQADAOIAOASQANARATAVIAVAVICtCUQAbAeAaAhQCTCzBWDlQAPApAIAwQAFAZACAaQAMBrAAASIgBAMIAFCqIADAbQAHCogrDIIgCAHQghCVggA/QgGANgGAZQgPA8gLDAIgBAZQgGB0gEBuIgIADIxWAEg");
	this.shape_603.setTransform(367.4,219.1);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#373535").ss(2.5).p("ArwA3QAch+Ash0IAnhbQAVgzBNh7QAthHAjg1QAEgIADgHIBOjOQAGgIADgLQAJgcgeg8QgGgLgHgLIgjg4QgHgLgGgMQjOlwCdj8QALgSANgRQAzhEBLgyQAVgOATgLQAvgZAkgJQAZgGAXgEQGnhBAGD7QABAfgFAkQgKA+gfBLQgPAhgPAeQgJATgKAQQgJAfgIAhQAAABABACQANAdANAeIAiAvQAbAiAOAgQAEAIADAJQAJAbgFAMQgCAJgWAKQgKAJgSAGQgDAAgBABQgFAFABASQAHAbgNAHQgJAFgFAJQgCADgCACQACACABADQALAUAHAQQACAEAAAEQgBAFgDAFQgDADgEAFQgCADgEADQgBAFgCAGIgGAQQgEADAAAIQABAJACALQAAACAAADQADALACAOQABACAAACQgBAFAIAGQAGAGAWAOQANAHAQAIQARAIAJAJQAHAEAEADQA2AVgWAKQgGACgGACIg+ArIAEBRIgMAhQgDAEgCAFQgIASABAaQABAQADAOIAOASQANARATAUQALAMALAKICuCTQAbAeAaAhQCTCzBWDlQAPAoAIAxQAFAZADAaQALBrAAASQAAAGgBAGIAFCqQACANABAOQAHCogrDIQgBADgBAEQgiCWggA+QgGANgGAZQgPA9gKC/QgBAMgBANQgGB0gEBuQgEABgEACIxWAEIghgMIAKi0QACgSgBgYQAAg7hjlWQgFgPgEgPIhtlmQgDgKgDgKQhxlmBXmUg");
	this.shape_604.setTransform(367.5,219.1);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#ECB77F").s().p("AoCc5IAKi0QACgSgBgYQAAg7hjlWIgJgeIhtlmIgGgUQhxlmBXmUIAAgBQAch+Ash0IAnhbQAVgzBNh7QAthHAjg1IAHgPIBOjOQAGgIADgLQAJgcgeg8IgNgWIgjg4IgNgXQjOlwCdj8QALgSANgRQAzhEBLgyQAVgOATgLQAvgZAkgJQAZgGAXgEQGnhBAGD7QABAfgFAkQgKA+gfBLQgPAhgPAeIgTAjIgRBAIABADIAaA7IAiAvQAbAiAOAgIAHARQAJAbgFAMQgCAJgWAKQgKAJgSAGQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgFAFABASQAHAbgNAHQgJAFgFAJIgEAFIADAFIASAkIACAIQgBAFgDAFIgHAIIgGAGIgDALIgGAQQgEADAAAIIADAUIAAAFIAFAZIABAEQgBAFAIAGQAGAGAWAOIAdAPQARAIAJAJIALAHQA2AVgWAKIgMAEIg+ArIAEBRIgMAhIgFAJQgIASABAaQABAQADAOIAOASQANARATAUQALAMALAKICuCTQAbAeAaAhQCTCzBWDlQAPAoAIAxQAFAZADAaQALBrAAASIgBAMIAFCqIADAbQAHCogrDIIgCAHQgiCWggA+QgGANgGAZQgPA9gKC/IgCAZQgGB0gEBuIgIADIxWAEg");
	this.shape_605.setTransform(367.5,219.1);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#373535").ss(2.5).p("ArxA3QAch+Ash0IAnhbQAVg0BNh6QAthHAjg1QAEgIADgHIBOjOQAGgIADgLQAJgcgeg9QgGgKgHgLIgjg4QgHgMgGgLQjOlwCdj8QALgTANgRQAzhDBMgzQAUgNAUgLQAugZAkgJQAZgGAYgEQGnhBAFD8QABAfgFAjQgKA/ggBKQgOAigPAdQgKATgJARQgJAegIAhQAAACABACQANAcANAfIAjAvQAaAhAPAgQAEAJADAIQAIAcgEAMQgDAJgXAJQgKAKgSAFQgCAAgCACQgFAEACATQAGAbgMAGQgJAGgFAIQgCADgCADQABACACACQALAUAHAQQACAFAAADQgBAGgDAFQgDADgEAFQgCADgDADQgCAFgCAFIgGARQgFADABAIQABAJACALQAAACAAACQADAMACAOQABACAAACQgBAFAJAGQAGAGAWAOQANAHAQAHQARAJAKAJQAHADAFADQA2AVgVAKQgGACgGACIhBArIACBSIgMAhQgCAEgCAFQgJASACAaQABARADANIAPASQANAQATAVQALALALAKICvCTQAbAeAaAhQCSCyBXDmQAPAoAIAxQAFAZADAaQALBrAAASQAAAGgBAGIAFCqQACANABAOQAHCpgsDHQgBAEgBADQgiCWgfA+QgGANgHAaQgPA8gKC/QgBAMAAANQgHB0gEBuQgEACgEABIxXAEIghgMIAKi0QACgSgBgYQAAg6hjlWQgFgPgEgQIhtlmQgDgKgDgKQhxllBXmVg");
	this.shape_606.setTransform(367.6,219.1);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#ECB77F").s().p("AoDc5IAKi0QACgSgBgYQAAg6hjlWIgJgfIhtlmIgGgUQhxllBXmVIAAgBQAch+Ash0IAnhbQAVg0BNh6QAthHAjg1IAHgPIBOjOQAGgIADgLQAJgcgeg9IgNgVIgjg4IgNgXQjOlwCdj8QALgTANgRQAzhDBMgzIAogYQAugZAkgJQAZgGAYgEQGnhBAFD8QABAfgFAjQgKA/ggBKQgOAigPAdIgTAkIgRA/IABAEIAaA7IAjAvQAaAhAPAgIAHARQAIAcgEAMQgDAJgXAJQgKAKgSAFIgEACQgFAEACATQAGAbgMAGQgJAGgFAIIgEAGIADAEIASAkIACAIQgBAGgDAFIgHAIIgFAGIgEAKIgGARQgFADABAIIADAUIAAAEIAFAaIABAEQgBAFAJAGQAGAGAWAOIAdAOQARAJAKAJIAMAGQA2AVgVAKIgMAEIhBArIACBSIgMAhIgEAJQgJASACAaQABARADANIAPASIAgAlIAWAVICvCTQAbAeAaAhQCSCyBXDmQAPAoAIAxQAFAZADAaQALBrAAASIgBAMIAFCqIADAbQAHCpgsDHIgCAHQgiCWgfA+QgGANgHAaQgPA8gKC/IgBAZQgHB0gEBuIgIADIxXAEg");
	this.shape_607.setTransform(367.6,219.1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#373535").ss(2.5).p("AryA3QAch+Ash0IAnhbQAVg0BNh6QAthHAjg2QAEgHADgHIBOjOQAGgIADgMQAJgcgeg8QgGgKgHgLIgkg5QgGgLgHgLQjNlxCdj8QAMgSANgRQAzhEBLgyQAVgNATgLQAvgaAkgIQAZgGAXgEQGnhBAFD9QABAfgGAjQgKA+gfBLQgOAigPAdQgKATgKAQQgIAfgJAhQABACABACQANAcAOAeIAiAwQAbAhAOAgQAEAIADAJQAIAcgEAMQgDAIgXAKQgKAJgTAFQgCAAgCACQgFAEACATQAHAbgMAHQgJAFgFAJQgCADgCADQABACACACQAKAUAIAQQACAEAAAEQgBAGgDAEQgDAEgEAEQgCAEgDADQgCAFgCAFIgHARQgEADABAIQAAAIACAMQAAACABACQADAMACANQABACAAACQAAAGAIAGQAGAGAXANQAMAHARAIQASAIAKAJQAHADAFADQA4AVgVAKQgGACgGACIhEArIABBTIgMAhQgDAEgBAFQgJASACAaQABARADANIAPASQAOAQATAVQALALALAKICvCSQAcAeAaAhQCSCyBXDmQAPAoAJAxQAEAZADAaQALBsAAARQAAAGAAAGIAECqQACANABAOQAGCpgrDHQgBAEgBADQgiCWggA+QgGANgGAaQgPA9gLC+QgBANAAAMQgHB0gEBuQgEACgFABIxWAEIgigLIAKi0QACgTgBgXQAAg6hjlXQgFgPgEgPIhtlnQgDgKgDgKQhxllBXmVg");
	this.shape_608.setTransform(367.7,219.1);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#ECB77F").s().p("AoEc6IAKi0QACgTgBgXQAAg6hjlXIgJgeIhtlnIgGgUQhxllBXmVIAAgBQAch+Ash0IAnhbQAVg0BNh6QAthHAjg2IAHgOIBOjOQAGgIADgMQAJgcgeg8IgNgVIgkg5IgNgWQjNlxCdj8QAMgSANgRQAzhEBLgyQAVgNATgLQAvgaAkgIQAZgGAXgEQGnhBAFD9QABAfgGAjQgKA+gfBLQgOAigPAdIgUAjIgRBAIACAEIAbA6IAiAwQAbAhAOAgQAEAIADAJQAIAcgEAMQgDAIgXAKQgKAJgTAFQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQgFAEACATQAHAbgMAHQgJAFgFAJIgEAGIADAEIASAkIACAIQgBAGgDAEIgHAIIgFAHIgEAKIgHARQgEADABAIIACAUIABAEIAFAZIABAEQAAAGAIAGQAGAGAXANQAMAHARAIQASAIAKAJIAMAGQA4AVgVAKIgMAEIhEArIABBTIgMAhQgDAEgBAFQgJASACAaQABARADANIAPASIAhAlIAWAVICvCSQAcAeAaAhQCSCyBXDmQAPAoAJAxQAEAZADAaQALBsAAARIAAAMIAECqIADAbQAGCpgrDHIgCAHQgiCWggA+QgGANgGAaQgPA9gLC+IgBAZQgHB0gEBuIgJADIxWAEg");
	this.shape_609.setTransform(367.7,219.1);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#373535").ss(2.5).p("ArzA3QAch+Ash0IAnhbQAVg0BNh6QAthHAkg2QADgHADgHIBOjOQAGgIADgMQAJgcgeg8QgGgLgHgKIgkg5QgGgLgHgLQjNlxCdj8QAMgSANgRQAzhEBMgyQAUgNAUgLQAugaAkgIQAZgGAYgEQGnhBAED9QABAfgGAkQgKA+gfBLQgPAhgPAeQgJASgKARQgIAegJAiQABACABABQAOAdANAeIAjAvQAaAiAOAgQAFAIACAJQAJAcgFAMQgDAIgXAJQgLAJgTAFQgCABgCABQgEAEACAUQAHAbgMAHQgJAFgFAJQgCADgCACQABACACADQAKATAIARQACAEAAAEQgBAGgDAEQgDAEgEAEQgCADgDAEQgCAFgCAFIgHAQQgEADAAAJQABAIACAMQAAABABADQACAMADANQABACAAACQAAAGAIAGQAHAFAXAOQAMAHARAHQASAIALAJQAHADAFADQA6AVgVAKQgGACgGACIhGArIgBBUIgMAiQgDAEgCAEQgIASACAaQABARADAOIAPARQAOAQAUAVQALALALAKICwCRQAcAeAaAhQCSCxBYDnQAOAoAJAxQAEAZADAaQALBsAAARQAAAGAAAGIAECqQACANABAOQAGCpgsDHQgBAEAAADQgjCWggA+QgGANgGAaQgPA9gLC/QAAAMgBANQgHB0gEBuQgEABgFABIxXAEIgigLIAKi0QACgSgBgYQABg5hklYQgEgPgFgPIhtlnQgDgKgDgJQhxlmBXmVg");
	this.shape_610.setTransform(367.8,219.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#ECB77F").s().p("AoFc6IAKi0QACgSgBgYQABg5hklYIgJgeIhtlnIgGgTQhxlmBXmVIAAgBQAch+Ash0IAnhbQAVg0BNh6QAthHAkg2IAGgOIBOjOQAGgIADgMQAJgcgeg8IgNgVIgkg5IgNgWQjNlxCdj8QAMgSANgRQAzhEBMgyIAogYQAugaAkgIQAZgGAYgEQGnhBAED9QABAfgGAkQgKA+gfBLQgPAhgPAeIgTAjIgRBAIACADIAbA7IAjAvQAaAiAOAgQAFAIACAJQAJAcgFAMQgDAIgXAJQgLAJgTAFIgEACQgEAEACAUQAHAbgMAHQgJAFgFAJIgEAFIADAFIASAkIACAIQgBAGgDAEIgHAIIgFAHIgEAKIgHAQQgEADAAAJIADAUIABAEIAFAZIABAEQAAAGAIAGQAHAFAXAOQAMAHARAHQASAIALAJIAMAGQA6AVgVAKIgMAEIhGArIgBBUIgMAiIgFAIQgIASACAaQABARADAOIAPARIAiAlIAWAVICwCRQAcAeAaAhQCSCxBYDnQAOAoAJAxQAEAZADAaQALBsAAARIAAAMIAECqIADAbQAGCpgsDHIgBAHQgjCWggA+QgGANgGAaQgPA9gLC/IgBAZQgHB0gEBuIgJACIxXAEg");
	this.shape_611.setTransform(367.8,219.1);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#373535").ss(2.5).p("Ar0A3QAch+Ash0IAnhcQAVgzBNh6QAthIAkg1QADgHADgIIBOjNQAGgJADgLQAJgcgeg8QgHgLgGgLIgkg4QgHgLgGgMQjNlwCdj8QAMgTANgRQAzhDBMgyQAUgOAUgLQAugZAlgIQAZgGAXgEQGnhBAED+QABAfgGAjQgKA/ggBKQgOAigPAdQgKATgJAQQgJAfgIAhQABACABACQAOAcANAeIAjAwQAbAhAOAgQAEAJADAIQAIAdgFALQgDAJgYAJQgLAJgSAEQgDABgBABQgFAEACAUQAIAcgMAGQgJAGgFAJQgCACgCADQABACACACQAKAUAIAQQACAFAAADQgBAGgDAFQgDADgEAFQgCADgDAEQgCAEgCAGIgHAQQgFADABAIQAAAJADALQAAACAAACQADANADANQABACAAACQAAAFAJAGQAGAGAXANQANAHARAHQASAIAMAJQAHADAFADQA8AVgVAKQgHACgGACIhIArIgDBVIgMAiQgCAEgCAEQgJASACAaQABARAEAOIAPARQAPAQAUAUQALALALAKICxCRQAbAeAaAhQCTCxBYDnQAOAoAJAxQAEAZADAaQALBtAAAQQAAAGAAAGIAECqQACANABAOQAGCqgsDGQgBAEgBADQgjCWgfA+QgGANgHAaQgOA+gMC+QAAAMgBANQgIB0gDBuQgFABgEACIxXADIgjgLIAKi0QABgSAAgYQABg4hklZQgEgOgFgQIhtlnQgDgJgDgKQhxlmBXmVg");
	this.shape_612.setTransform(367.9,219.1);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#ECB77F").s().p("AoGc6IAKi0QABgSAAgYQABg4hklZIgJgeIhtlnIgGgTQhxlmBXmVIAAgBQAch+Ash0IAnhcQAVgzBNh6QAthIAkg1IAGgPIBOjNQAGgJADgLQAJgcgeg8IgNgWIgkg4IgNgXQjNlwCdj8QAMgTANgRQAzhDBMgyQAUgOAUgLQAugZAlgIQAZgGAXgEQGnhBAED+QABAfgGAjQgKA/ggBKQgOAigPAdIgTAjIgRBAIACAEIAbA6IAjAwQAbAhAOAgIAHARQAIAdgFALQgDAJgYAJQgLAJgSAEIgEACQgFAEACAUQAIAcgMAGQgJAGgFAJIgEAFIADAEIASAkIACAIQgBAGgDAFIgHAIIgFAHIgEAKIgHAQQgFADABAIQAAAJADALIAAAEIAGAaIABAEQAAAFAJAGQAGAGAXANQANAHARAHQASAIAMAJIAMAGQA8AVgVAKIgNAEIhIArIgDBVIgMAiIgEAIQgJASACAaQABARAEAOIAPARQAPAQAUAUIAWAVICxCRQAbAeAaAhQCTCxBYDnQAOAoAJAxQAEAZADAaQALBtAAAQIAAAMIAECqIADAbQAGCqgsDGIgCAHQgjCWgfA+QgGANgHAaQgOA+gMC+IgBAZQgIB0gDBuIgJADIxXADg");
	this.shape_613.setTransform(367.9,219.1);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#373535").ss(2.5).p("Ar1A3QAch+Ash0IAnhcQAVgzBNh6QAthIAkg1QADgHADgIIBOjOQAHgIACgLQAJgcgfg8QgGgLgGgLIgkg4QgHgMgGgLQjNlxCej8QALgSANgRQA0hEBLgyQAVgNATgLQAvgZAkgJQAZgFAXgEQGohBADD/QABAfgGAjQgKA+ggBLQgOAigPAdQgKATgKAQQgIAfgIAhQABACABACQAOAcAOAeIAiAvQAbAiAOAgQAEAIADAJQAIAdgFALQgDAIgYAJQgLAJgTAFQgDAAgBABQgFAFADATQAIAcgMAHQgJAGgFAIQgCADgCADQABACABACQALATAIARQACAEAAAEQgBAGgDAEQgDAEgDAEQgDAEgDADQgBAFgDAGIgHAQQgFADAAAIQABAIACAMQAAACABACQADAMADAOQABACAAACQAAAFAJAGQAHAGAXANQANAHARAHQASAHAMAJQAIADAGADQA9AVgVAKQgHACgGACIhLAsIgEBVIgMAiQgDAEgCAEQgIASACAbQABAQAEAOIAPARQAPAQAUAUQALALAMAKICyCQQAbAeAaAgQCTCxBYDoQAPAoAIAxQAEAZADAaQALBtAAAQQAAAGAAAGIAECqQACANABAOQAFCqgsDGQgBAEAAADQgjCXggA+QgGAMgGAaQgPA+gMC+QAAAMgBANQgIB0gDBuQgFABgEACIxYADIgjgKIAKi0QABgTAAgXQABg4hklZQgEgPgFgPIhtlnQgDgKgDgKQhxlmBXmVg");
	this.shape_614.setTransform(368,219.1);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#ECB77F").s().p("AoHc7IAKi0QABgTAAgXQABg4hklZIgJgeIhtlnIgGgUQhxlmBXmVIAAgBQAch+Ash0IAnhcQAVgzBNh6QAthIAkg1IAGgPIBOjOQAHgIACgLQAJgcgfg8IgMgWIgkg4IgNgXQjNlxCej8QALgSANgRQA0hEBLgyIAogYQAvgZAkgJQAZgFAXgEQGohBADD/QABAfgGAjQgKA+ggBLQgOAigPAdQgKATgKAQIgQBAIACAEIAcA6IAiAvQAbAiAOAgQAEAIADAJQAIAdgFALQgDAIgYAJQgLAJgTAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgFAFADATQAIAcgMAHQgJAGgFAIIgEAGIACAEIATAkIACAIQgBAGgDAEIgGAIIgGAHIgEALIgHAQQgFADAAAIQABAIACAMIABAEIAGAaIABAEQAAAFAJAGQAHAGAXANQANAHARAHQASAHAMAJIAOAGQA9AVgVAKIgNAEIhLAsIgEBVIgMAiIgFAIQgIASACAbQABAQAEAOIAPARIAjAkIAXAVICyCQQAbAeAaAgQCTCxBYDoQAPAoAIAxIAHAzQALBtAAAQIAAAMIAECqIADAbQAFCqgsDGIgBAHQgjCXggA+QgGAMgGAaQgPA+gMC+IgBAZQgIB0gDBuIgJADIxYADg");
	this.shape_615.setTransform(368,219.1);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#373535").ss(2.5).p("Ar1A3QAbh+Ash0IAohcQAVgzBNh6QAshIAkg1QAEgIADgHIBNjOQAHgIADgLQAIgdgeg8QgGgKgHgLIgkg4QgGgMgGgLQjOlxCej8QAMgSANgSQAzhDBMgyQAVgNATgLQAvgZAkgJQAZgFAXgEQGohBADD/QABAfgGAkQgLA+ggBLQgOAhgPAdQgKATgJARQgJAegIAiQABACABABQAPAdAOAeIAiAvQAbAhAOAhQAEAIADAJQAIAdgFALQgEAIgYAJQgLAIgUAFQgCAAgCACQgEAEADAUQAIAcgLAHQgJAGgFAIQgDADgCACQABACACACQALAUAIAQQABAFAAAEQAAAGgEAEQgCAEgEAEQgCADgDAEQgCAFgDAFIgHAQQgFADABAJQAAAIACAMQABACAAACQADAMAEAOQAAACABACQgBAFAKAGQAHAGAXANQANAGARAHQASAIAOAIQAHADAGADQA/AVgVAKQgGACgGACIhPAsIgFBWIgMAiQgCAEgCAEQgJASACAbQABAQAEAOIAQARQAQAQAUAUQALALAMAKICyCPQAbAeAbAgQCSCxBYDoQAPAoAJAxQAEAZADAaQAKBuABAPQgBAGAAAGIAFCqQABANABAOQAFCqgsDHQgBADAAAEQgjCWggA+QgGAMgGAbQgPA+gMC9QgBANAAAMQgIB0gEBuQgFACgEABIxYADIgjgKIAKi0QABgSgBgYQACg3hklaQgFgPgEgPIhtlnQgDgKgDgKQhylmBYmVg");
	this.shape_616.setTransform(368.1,219.1);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#ECB77F").s().p("AoHc7IAKi0QABgSgBgYQACg3hklaIgJgeIhtlnIgGgUQhylmBYmVIAAgBQAbh+Ash0IAohcQAVgzBNh6QAshIAkg1IAHgPIBNjOQAHgIADgLQAIgdgeg8IgNgVIgkg4IgMgXQjOlxCej8QAMgSANgSQAzhDBMgyQAVgNATgLQAvgZAkgJQAZgFAXgEQGohBADD/QABAfgGAkQgLA+ggBLQgOAhgPAdIgTAkIgRBAIACADIAdA7IAiAvQAbAhAOAhIAHARQAIAdgFALQgEAIgYAJQgLAIgUAFIgEACQgEAEADAUQAIAcgLAHQgJAGgFAIIgFAFIADAEIATAkIABAJQAAAGgEAEIgGAIIgFAHIgFAKIgHAQQgFADABAJQAAAIACAMIABAEIAHAaIABAEQgBAFAKAGQAHAGAXANQANAGARAHQASAIAOAIIANAGQA/AVgVAKIgMAEIhPAsIgFBWIgMAiIgEAIQgJASACAbQABAQAEAOIAQARIAkAkIAXAVICyCPQAbAeAbAgQCSCxBYDoQAPAoAJAxQAEAZADAaQAKBuABAPIgBAMIAFCqIACAbQAFCqgsDHIgBAHQgjCWggA+QgGAMgGAbQgPA+gMC9IgBAZQgIB0gEBuIgJADIxYADg");
	this.shape_617.setTransform(368.1,219.1);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#373535").ss(2.5).p("Ar2A3QAbh+Ash0IAohcQAVgzBNh6QAthIAjg1QAEgIADgHIBOjOQAGgIADgMQAIgcgeg8QgHgLgGgKIgkg5QgGgLgHgLQjNlyCfj8QALgSANgRQA0hDBMgyQAUgNAUgLQAugaAkgIQAZgFAYgEQGohBACEAQABAfgGAjQgLA/ggBKQgOAigPAdQgKATgKAQQgIAfgIAhQABACABACQAPAcAOAeIAjAwQAbAhANAgQAEAJADAIQAIAdgFAMQgEAIgZAJQgLAHgTAFQgDAAgBACQgFAEAEAUQAIAdgLAHQgJAGgFAIQgDACgCADQABACACACQAKAUAJAQQABAFAAADQAAAGgDAFQgDADgEAFQgCADgDAEQgCAEgDAGIgHAQQgFADAAAIQAAAJADALQAAACABADQADAMAEANQAAACABACQgBAGAKAGQAHAGAYAMQANAHARAGQASAIAOAIQAIADAHADQBAAVgVAKQgGACgHACIhRAsIgGBXIgMAiQgDAEgCAEQgIASACAbQABAQAEAOIAQARQAQAQAUAUQAMAKAMAKICyCPQAcAeAbAgQCSCwBZDpQAOAoAJAxQAEAZADAbQALBtAAAPQAAAGgBAGIAFCqQABANABAOQAFCrgsDGQgBADgBAEQgjCWggA+QgGAMgGAbQgPA+gMC9QAAANgBAMQgIB0gEBvQgFABgEABIxYADIgkgJIAKi0QABgTgBgXQACg3hklbQgFgPgEgPIhtlnQgDgKgDgKQhylmBYmVg");
	this.shape_618.setTransform(368.2,219.1);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#ECB77F").s().p("AoIc8IAKi0QABgTgBgXQACg3hklbIgJgeIhtlnIgGgUQhylmBYmVIAAgBQAbh+Ash0IAohcQAVgzBNh6QAthIAjg1IAHgPIBOjOQAGgIADgMQAIgcgeg8IgNgVIgkg5IgNgWQjNlyCfj8QALgSANgRQA0hDBMgyIAogYQAugaAkgIIAxgJQGohBACEAQABAfgGAjQgLA/ggBKQgOAigPAdIgUAjIgQBAIACAEIAdA6IAjAwQAbAhANAgIAHARQAIAdgFAMQgEAIgZAJQgLAHgTAFQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgFAEAEAUQAIAdgLAHQgJAGgFAIIgFAFIADAEIATAkIABAIQAAAGgDAFIgHAIIgFAHIgFAKIgHAQQgFADAAAIQAAAJADALIABAFIAHAZIABAEQgBAGAKAGQAHAGAYAMQANAHARAGQASAIAOAIIAPAGQBAAVgVAKIgNAEIhRAsIgGBXIgMAiIgFAIQgIASACAbQABAQAEAOIAQARIAkAkIAYAUICyCPQAcAeAbAgQCSCwBZDpQAOAoAJAxQAEAZADAbQALBtAAAPIgBAMIAFCqIACAbQAFCrgsDGIgCAHQgjCWggA+QgGAMgGAbQgPA+gMC9IgBAZQgIB0gEBvIgJACIxYADg");
	this.shape_619.setTransform(368.2,219.1);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#373535").ss(2.5).p("Ar3A3QAbh+Ash1IAohbQAVg0BNh6QAthHAjg1QAEgIADgHIBOjOQAGgIADgMQAIgcgeg8QgHgLgGgLIgkg4QgHgLgGgMQjNlxCfj8QALgSAOgRQAzhEBMgxQAVgOATgLQAvgZAkgIQAZgGAXgDQGohBACEBQABAfgHAjQgKA+ggBLQgPAigPAdQgJASgKARQgIAegIAiQABACABACQAPAcAPAeIAiAvQAbAiAOAgQAEAJACAIQAJAdgGALQgEAIgZAJQgMAIgTAEQgDAAgBACQgFAEAEAUQAJAegLAGQgJAGgFAIQgDADgCADQABACACACQAKATAJARQABAEAAAEQAAAGgDAFQgDADgEAFQgCADgDAEQgCAEgDAGIgHAQQgGADABAIQAAAJADALQAAACAAACQAEANAEANQAAACABACQAAAFAJAGQAIAGAXANQAOAGARAHQATAHAOAIQAIADAHADQBCAWgVAJQgHACgGACIhUAsIgIBYIgMAiQgCAEgCAEQgJASADAbQABAQAEAOIARARQAQAQAUATQAMALAMAKICzCOQAcAeAaAgQCTCwBZDpQAPAoAIAxQAEAZADAbQALBuAAAOQAAAGAAAGIAECqQABAOABANQAFCrgtDGQgBADAAAEQgkCWggA+QgFAMgHAbQgOA/gNC9QAAAMgBANQgIB0gEBuQgFABgFABIxYADIgkgJIAKi0QABgTgBgXQADg2hllbQgFgPgEgQIhtlnQgDgKgDgKQhylmBYmVg");
	this.shape_620.setTransform(368.3,219.1);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#ECB77F").s().p("AoJc8IAKi0QABgTgBgXQADg2hllbIgJgfIhtlnIgGgUQhylmBYmVIAAgBQAbh+Ash1IAohbQAVg0BNh6QAthHAjg1IAHgPIBOjOQAGgIADgMQAIgcgeg8IgNgWIgkg4IgNgXQjNlxCfj8QALgSAOgRQAzhEBMgxQAVgOATgLQAvgZAkgIQAZgGAXgDQGohBACEBQABAfgHAjQgKA+ggBLQgPAigPAdIgTAjIgQBAIACAEIAeA6IAiAvQAbAiAOAgIAGARQAJAdgGALQgEAIgZAJQgMAIgTAEQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgFAEAEAUQAJAegLAGQgJAGgFAIIgFAGIADAEIATAkIABAIQAAAGgDAFIgHAIIgFAHIgFAKIgHAQQgGADABAIQAAAJADALIAAAEIAIAaIABAEQAAAFAJAGQAIAGAXANIAfANQATAHAOAIIAPAGQBCAWgVAJIgNAEIhUAsIgIBYIgMAiIgEAIQgJASADAbQABAQAEAOIARARIAkAjIAYAVICzCOQAcAeAaAgQCTCwBZDpQAPAoAIAxQAEAZADAbQALBuAAAOIAAAMIAECqIACAbQAFCrgtDGIgBAHQgkCWggA+QgFAMgHAbQgOA/gNC9IgBAZQgIB0gEBuIgKACIxYADg");
	this.shape_621.setTransform(368.3,219.1);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#373535").ss(2.5).p("Ar4A3QAbh+Ash1IAohbQAVg0BNh6QAthHAkg2QADgHADgHIBOjOQAHgIACgMQAIgdgfg7QgGgLgGgLIgkg4QgHgLgGgMQjNlxCfj8QAMgSANgSQAzhDBMgyQAVgNAUgLQAugZAkgIQAZgGAYgDQGohBABEBQABAfgHAkQgLA+gfBKQgPAigPAdQgKATgJAQQgIAfgIAiQABACABABQAPAdAPAdIAjAwQAbAhANAhQAEAIADAJQAIAdgGALQgEAIgZAJQgMAHgUAFQgDAAgBABQgFAEAFAVQAJAdgLAHQgJAGgFAIQgDADgCACQABACABACQALAUAJAQQABAFAAAEQAAAGgDAEQgDAEgDAEQgDAEgDADQgCAFgDAFIgIARQgFACAAAJQABAIACAMQABACAAACQAEANAEANQAAACABACQAAAFAJAGQAIAGAYAMQANAGASAHQATAHAPAIQAIADAHADQBEAWgVAJQgHACgGACIhXAtIgJBYIgMAiQgDAEgCAEQgIASACAbQACAQAEAOIARARQAQAQAVATQAMALAMAKIC0CNQAcAeAaAgQCTCvBZDqQAPAoAIAxQAEAZADAbQALBuAAAOQAAAGAAAGIAECqQABAOABANQAECrgsDGQgBADgBAEQgjCWggA+QgGAMgGAbQgPBAgMC8QgBAMgBANQgIB0gEBuQgFABgFABIxYADIglgIIAKi1QABgSgBgXQADg2hllcQgEgPgFgPIhtloQgDgJgDgKQhylnBYmVg");
	this.shape_622.setTransform(368.4,219.1);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#ECB77F").s().p("AoKc9IAKi1QABgSgBgXQADg2hllcIgJgeIhtloIgGgTQhylnBYmVIAAgBQAbh+Ash1IAohbQAVg0BNh6QAthHAkg2IAGgOIBOjOQAHgIACgMQAIgdgfg7IgMgWIgkg4IgNgXQjNlxCfj8QAMgSANgSQAzhDBMgyIApgYQAugZAkgIQAZgGAYgDQGohBABEBQABAfgHAkQgLA+gfBKQgPAigPAdIgTAjIgQBBIACADIAeA6IAjAwQAbAhANAhIAHARQAIAdgGALQgEAIgZAJQgMAHgUAFQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAQgFAEAFAVQAJAdgLAHQgJAGgFAIIgFAFIACAEIAUAkIABAJQAAAGgDAEIgGAIIgGAHIgFAKIgIARQgFACAAAJQABAIACAMIABAEIAIAaIABAEQAAAFAJAGQAIAGAYAMIAfANQATAHAPAIIAPAGQBEAWgVAJIgNAEIhXAtIgJBYIgMAiIgFAIQgIASACAbQACAQAEAOIARARIAlAjIAYAVIC0CNQAcAeAaAgQCTCvBZDqQAPAoAIAxQAEAZADAbQALBuAAAOIAAAMIAECqIACAbQAECrgsDGIgCAHQgjCWggA+QgGAMgGAbQgPBAgMC8IgCAZQgIB0gEBuIgKACIxYADg");
	this.shape_623.setTransform(368.4,219.1);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#373535").ss(2.5).p("Ar5A3QAbh+Ash1IAohbQAVg0BNh6QAthHAkg2QADgHADgIIBOjOQAHgIACgLQAIgdgfg8QgGgKgGgLIgkg4QgHgMgGgLQjNlyCfj8QAMgSANgRQA0hDBMgyQAUgNAUgLQAvgZAkgIQAZgGAXgDQGohAABEBQABAfgHAjQgLA/ggBKQgOAigPAdQgKATgKAQQgIAegHAjQABABABACQAPAdAQAdIAiAwQAbAhAOAgQAEAJACAJQAIAdgGALQgEAIgaAIQgMAHgUAFQgCAAgCABQgFAFAFAUQAKAegLAHQgIAGgGAIQgDACgDADQACACABACQALATAJARQABAFAAADQAAAGgDAFQgDADgDAFQgDADgDAEQgCAFgDAFIgIAQQgFADAAAJQAAAIADAMQAAACABACQADAMAFAOQAAACABACQAAAFAKAGQAIAGAYAMQANAGASAGQATAIAQAHQAIADAHADQBFAWgUAJQgHADgGACIhaAsIgKBZIgMAiQgDAEgCAEQgJASADAbQACAQAEAOIARARQARAQAVATQALAKANAKIC1CNQAcAeAaAgQCTCvBZDqQAPAnAIAyQAFAZACAbQALBvAAANQAAAGAAAGIAECqQABAOABANQAECsgtDFQgBADAAAEQgkCXggA9QgGAMgGAbQgPBAgMC8QgBAMgBANQgIB0gFBuQgEABgFABIxZADIglgIIAKi0QABgTAAgXQACg1hlldQgEgPgFgPIhtlnQgDgKgDgKQhylmBYmWg");
	this.shape_624.setTransform(368.5,219.1);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#ECB77F").s().p("AoLc9IAKi0IABgqQACg1hlldIgJgeIhtlnIgGgUQhylmBYmWIAAgBQAbh+Ash1IAohbQAVg0BNh6QAthHAkg2IAGgPIBOjOQAHgIACgLQAIgdgfg8IgMgVIgkg4IgNgXQjNlyCfj8QAMgSANgRQA0hDBMgyQAUgNAUgLQAvgZAkgIQAZgGAXgDQGohAABEBQABAfgHAjQgLA/ggBKQgOAigPAdQgKATgKAQIgPBBIACADIAfA6IAiAwQAbAhAOAgQAEAJACAJQAIAdgGALQgEAIgaAIQgMAHgUAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgFAFAFAUQAKAegLAHQgIAGgGAIIgGAFIADAEIAUAkIABAIQAAAGgDAFIgGAIIgGAHIgFAKIgIAQQgFADAAAJQAAAIADAMIABAEIAIAaIABAEQAAAFAKAGQAIAGAYAMIAfAMIAjAPIAPAGQBFAWgUAJIgNAFIhaAsIgKBZIgMAiQgDAEgCAEQgJASADAbQACAQAEAOIARARIAmAjIAYAUIC1CNQAcAeAaAgQCTCvBZDqQAPAnAIAyQAFAZACAbQALBvAAANIAAAMIAECqIACAbQAECsgtDFIgBAHQgkCXggA9QgGAMgGAbQgPBAgMC8IgCAZQgIB0gFBuIgJACIxZADg");
	this.shape_625.setTransform(368.5,219.1);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#373535").ss(2.5).p("Ar6A3QAbh+Ash1IAohbQAVg0BNh6QAthIAkg1QADgHADgIIBOjOQAHgIACgLQAIgdgfg8QgGgKgHgLIgjg5QgHgLgGgLQjNlyCgj8QALgSANgRQA0hDBMgyQAVgNATgLQAvgaAkgHQAZgGAYgDQGohAAAECQABAfgHAjQgLA+ggBLQgPAigPAdQgJASgKARQgIAegHAiQABACABACQAPAcAQAeIAjAvQAbAiANAgQAEAJACAIQAIAegGALQgEAHgaAJQgMAHgVAEQgCAAgCACQgEAEAFAUQAKAfgLAHQgIAGgGAHQgDADgDADQACACABACQALATAJARQABAEAAAEQAAAGgDAFQgDADgDAFQgCADgEAEQgCAFgDAFIgIAQQgGADABAIQAAAJADALQAAACABADQADAMAFANQAAACABACQAAAGAKAGQAIAGAZALQANAGASAHQATAHAQAIQAJACAIADQBGAWgUAJQgHADgGACIhdAsIgMBaIgMAiQgCAEgCAEQgJASADAbQABARAFANIARARQASAQAVATQALAKANAKIC1CMQAcAeAbAgQCSCuBaDrQAPAnAIAyQAFAZACAbQALBvAAANQAAAGAAAGIAECqQABAOABANQADCsgsDFQgBAEgBADQgjCXghA9QgFAMgHAbQgOBBgNC7QgBANgBAMQgIB0gFBvQgFABgFABIxZACIglgHIAKi1QABgTAAgWQACg1hlldQgEgPgFgQIhtlnQgDgKgDgKQhylmBYmWg");
	this.shape_626.setTransform(368.6,219.1);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#ECB77F").s().p("AoMc+IAKi1IABgpQACg1hlldIgJgfIhtlnIgGgUQhylmBYmWIAAgBQAbh+Ash1IAohbQAVg0BNh6QAthIAkg1IAGgPIBOjOQAHgIACgLQAIgdgfg8IgNgVIgjg5IgNgWQjNlyCgj8QALgSANgRQA0hDBMgyIAogYQAvgaAkgHQAZgGAYgDQGohAAAECQABAfgHAjQgLA+ggBLQgPAigPAdIgTAjIgPBAIACAEIAfA6IAjAvQAbAiANAgIAGARQAIAegGALQgEAHgaAJQgMAHgVAEQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABQgEAEAFAUQAKAfgLAHQgIAGgGAHIgGAGIADAEIAUAkIABAIQAAAGgDAFIgGAIIgGAHIgFAKIgIAQQgGADABAIQAAAJADALIABAFIAIAZIABAEQAAAGAKAGQAIAGAZALIAfANQATAHAQAIIARAFQBGAWgUAJIgNAFIhdAsIgMBaIgMAiIgEAIQgJASADAbQABARAFANIARARIAnAjIAYAUIC1CMQAcAeAbAgQCSCuBaDrQAPAnAIAyQAFAZACAbQALBvAAANIAAAMIAECqIACAbQADCsgsDFIgCAHQgjCXghA9QgFAMgHAbQgOBBgNC7IgCAZQgIB0gFBvIgKACIxZACg");
	this.shape_627.setTransform(368.6,219.1);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#373535").ss(2.5).p("Ar7A3QAbh+Ash1IAohbQAVg0BNh6QAthIAkg1QADgHADgIIBOjOQAHgIACgMQAIgcgfg8QgGgLgHgKIgkg5QgGgLgGgMQjOlxChj8QALgSAOgSQAzhDBNgyQAUgNAUgKQAvgaAkgIQAZgFAXgDQGphAgBECQABAfgHAkQgLA+ggBKQgPAigPAdQgKATgJAQQgIAfgIAiQACACABACQAQAcAPAdIAjAwQAbAhANAhQAEAIADAJQAIAegHAKQgEAIgbAIQgMAHgUAEQgDAAgCACQgEAEAFAVQALAegLAHQgIAHgGAHQgDADgDACQACACABACQALATAJARQABAFAAAEQAAAGgDAEQgCAEgEAFQgCADgDAEQgCAEgEAGIgIAQQgGADAAAIQAAAIADAMQABACAAACQAEANAFANQAAACABACQAAAFAKAGQAJAHAYALQAOAGASAGQATAHARAIQAJADAIACQBIAWgUAKQgHACgGACIhgAsIgNBbIgMAiQgDAEgCAEQgIATADAaQABARAFANIASARQARAQAVATQAMAKANAKIC2CLQAcAeAbAgQCSCuBaDrQAPAnAJAyQAEAZACAbQALBvAAANQAAAGAAAGIAECqQABAOABANQADCsgtDFQAAAEgBADQgkCXggA9QgGAMgGAcQgPBAgNC7QgBANAAAMQgJB1gFBuQgFABgFABIxZACIgmgHIAKi0QABgTAAgXQADg0hmleQgEgPgFgPIhtloQgDgKgDgKQhylmBYmWg");
	this.shape_628.setTransform(368.7,219.1);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#ECB77F").s().p("AoNc+IAKi0IABgqQADg0hmleIgJgeIhtloIgGgUQhylmBYmWIAAgBQAbh+Ash1IAohbQAVg0BNh6QAthIAkg1IAGgPIBOjOQAHgIACgMQAIgcgfg8IgNgVIgkg5IgMgXQjOlxChj8QALgSAOgSQAzhDBNgyQAUgNAUgKQAvgaAkgIIAwgIQGphAgBECQABAfgHAkQgLA+ggBKQgPAigPAdIgTAjIgQBBIADAEIAfA5IAjAwQAbAhANAhIAHARQAIAegHAKQgEAIgbAIQgMAHgUAEQgBAAgBAAQAAAAgBAAQgBABAAAAQAAAAgBABQgEAEAFAVQALAegLAHQgIAHgGAHIgGAFIADAEIAUAkIABAJQAAAGgDAEIgGAJIgFAHIgGAKIgIAQQgGADAAAIQAAAIADAMIABAEIAJAaIABAEQAAAFAKAGQAJAHAYALQAOAGASAGIAkAPIARAFQBIAWgUAKIgNAEIhgAsIgNBbIgMAiIgFAIQgIATADAaQABARAFANIASARIAmAjIAZAUIC2CLQAcAeAbAgQCSCuBaDrQAPAnAJAyQAEAZACAbIALB8IAAAMIAECqIACAbQADCsgtDFIgBAHQgkCXggA9QgGAMgGAcQgPBAgNC7IgBAZQgJB1gFBuIgKACIxZACg");
	this.shape_629.setTransform(368.7,219.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#373535").ss(2.5).p("Ar8A3QAbh+Ash1IAohbQAWg0BMh6QAthIAkg1QADgIADgHIBOjOQAHgIACgMQAIgdgfg7QgGgLgHgLIgkg4QgGgLgGgMQjOlyChj8QAMgSANgRQA0hDBMgyQAVgNATgLQAvgZAkgIQAZgFAYgEQGog/gBEDQABAfgHAjQgLA/ggBKQgPAigPAdQgKATgKAQQgHAegIAjQABABACACQAQAdAQAdIAjAvQAbAiANAgQAEAJACAJQAIAegHAKQgEAIgbAIQgNAGgUAEQgDAAgBACQgFAEAGAVQALAfgKAHQgJAGgGAIQgDACgDADQACACABACQALATAJARQABAFAAADQAAAGgDAFQgCAEgEAEQgCAEgDADQgCAFgEAGIgIAQQgGACAAAJQAAAIADAMQAAACABACQAEANAFANQAAACABACQAAAFAKAGQAKAGAYALQAOAGARAGQAUAHASAIQAJADAIADQBKAVgVAKQgGACgGACIhiAsIgPBcIgMAiQgDAEgCAEQgJATADAaQACARAEANIATARQASAQAVASQAMAKANAKIC3CLQAcAeAbAgQCSCtBbDsQAOAnAJAyQAEAZACAbQALBwAAAMQAAAGAAAGIAECqQABAOABANQADCtgtDEQgBAEgBADQgkCXggA9QgGAMgGAcQgPBBgNC7QAAAMgBANQgJB0gFBuQgFABgFABIxaACIgmgGIAKi1QABgTAAgWQADg0hmlfQgEgPgFgPIhtloQgDgKgDgKQhylmBYmWg");
	this.shape_630.setTransform(368.8,219.1);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#ECB77F").s().p("AoOc/IAKi1IABgpQADg0hmlfIgJgeIhtloIgGgUQhylmBYmWIAAgBQAbh+Ash1IAohbQAWg0BMh6QAthIAkg1IAGgPIBOjOQAHgIACgMQAIgdgfg7IgNgWIgkg4IgMgXQjOlyChj8IAZgjQA0hDBMgyIAogYQAvgZAkgIIAxgJQGog/gBEDQABAfgHAjQgLA/ggBKQgPAigPAdQgKATgKAQIgPBBIADADIAgA6IAjAvQAbAiANAgQAEAJACAJQAIAegHAKQgEAIgbAIQgNAGgUAEQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgFAEAGAVQALAfgKAHQgJAGgGAIIgGAFIADAEIAUAkIABAIQAAAGgDAFIgGAIIgFAHIgGALIgIAQQgGACAAAJQAAAIADAMIABAEIAJAaIABAEQAAAFAKAGQAKAGAYALIAfAMIAmAPIARAGQBKAVgVAKIgMAEIhiAsIgPBcIgMAiIgFAIQgJATADAaQACARAEANIATARIAnAiIAZAUIC3CLQAcAeAbAgQCSCtBbDsQAOAnAJAyQAEAZACAbIALB8IAAAMIAECqIACAbQADCtgtDEIgCAHQgkCXggA9QgGAMgGAcQgPBBgNC7IgBAZQgJB0gFBuIgKACIxaACg");
	this.shape_631.setTransform(368.8,219.1);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#373535").ss(2.5).p("Ar9A3QAbh+Ash1IAohbQAWg0BMh6QAthIAkg1QADgIADgHIBOjOQAHgIACgMQAHgdgeg8QgGgKgHgLIgkg4QgGgMgHgLQjNlyChj8QAMgSANgRQA0hDBMgyQAVgNAUgLQAugZAlgIQAZgFAXgEQGpg/gCEEQABAfgHAjQgMA+ggBLQgOAigPAdQgKASgKAQQgHAfgIAiQABACACACQAQAcAQAdIAjAwQAbAiANAgQAEAJACAIQAIAegHALQgEAHgbAIQgNAHgVAEQgDAAgBABQgFAEAGAWQALAfgJAHQgJAGgGAIQgDACgDADQABACACACQAKATAKARQABAEAAAEQAAAGgDAFQgCADgEAFQgCADgDAEQgCAFgEAFIgJAQQgGADABAJQgBAIAEAMQAAABABADQAEANAFANQAAACABACQAAAFALAGQAJAGAZALQANAGASAGQAUAHATAHQAJADAIADQBMAVgVAKQgGACgGACIhlAtIgRBcIgMAiQgDAEgBAEQgJATADAaQACARAEANIATARQATAQAVASQAMAKANAKIC3CKQAdAeAaAgQCTCtBbDsQAPAnAIAyQAEAZACAbQALBwAAAMQAAAGAAAGIAECqQABAOABANQACCtgtDEQAAAEgBADQgkCXghA9QgFAMgHAcQgOBBgOC7QAAAMgBANQgJB0gFBvQgFAAgFABIxaACIgngGIAKi0QABgUAAgWQADgzhmlgQgEgOgFgQIhtloQgDgJgDgKQhylnBYmWg");
	this.shape_632.setTransform(368.9,219.1);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#ECB77F").s().p("AoPc/IAKi0IABgqQADgzhmlgIgJgeIhtloIgGgTQhylnBYmWIAAgBQAbh+Ash1IAohbQAWg0BMh6QAthIAkg1IAGgPIBOjOQAHgIACgMQAHgdgeg8IgNgVIgkg4IgNgXQjNlyChj8QAMgSANgRQA0hDBMgyIApgYQAugZAlgIQAZgFAXgEQGpg/gCEEQABAfgHAjQgMA+ggBLQgOAigPAdIgUAiIgPBBIADAEIAgA5IAjAwQAbAiANAgQAEAJACAIQAIAegHALQgEAHgbAIQgNAHgVAEQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgFAEAGAWQALAfgJAHQgJAGgGAIIgGAFIADAEIAUAkIABAIQAAAGgDAFIgGAIIgFAHIgGAKIgJAQQgGADABAJQgBAIAEAMIABAEIAJAaIABAEQAAAFALAGQAJAGAZALQANAGASAGIAnAOIARAGQBMAVgVAKIgMAEIhlAtIgRBcIgMAiIgEAIQgJATADAaQACARAEANIATARIAoAiIAZAUIC3CKQAdAeAaAgQCTCtBbDsQAPAnAIAyQAEAZACAbIALB8IAAAMIAECqIACAbQACCtgtDEIgBAHQgkCXghA9QgFAMgHAcQgOBBgOC7IgBAZQgJB0gFBvIgKABIxaACg");
	this.shape_633.setTransform(368.9,219.1);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#373535").ss(2.5).p("Ar+A3QAbh+Ash1IAohbQAWg0BMh6QAthIAkg1QADgIADgHIBOjPQAHgHADgMQAGgdgeg8QgHgKgGgLIgkg4QgGgMgHgLQjNlyChj9QAMgSANgRQA0hDBNgxQAUgNAUgLQAvgZAkgIQAZgFAYgEQGog/gBEEQAAAfgHAkQgMA+ggBKQgPAigPAdQgKATgJAQQgIAegHAjQABACABACQARAcARAdIAiAwQAcAhANAhQADAIADAJQAIAegIALQgEAHgcAIQgNAGgVAEQgDAAgBABQgFAEAHAWQALAfgJAHQgJAHgGAHQgDADgDACQABACACACQAKATAKARQABAFAAAEQAAAGgDAFQgCADgEAFQgCADgDAEQgCAEgEAGIgJAQQgGADAAAIQAAAIADAMQABACAAADQAEAMAGAOQAAACABACQAAAFALAGQAKAGAYALQAOAFASAGQAUAHATAHQAKADAJADQBNAVgVAKQgGACgHACIhnAtIgSBdIgMAiQgDAEgCAFQgJASAEAaQACARAEAOIATAQQATAQAWASQAMAKANAJIC4CKQAdAdAaAhQCTCsBbDsQAPAoAIAyQAEAZADAbQAKBxAAALQAAAGAAAGIAFCqQAAAOABAOQACCsgtDEQgBAEgBADQgkCYggA9QgGALgGAcQgPBCgNC6QgBAMgBANQgJB0gFBvQgGABgFAAIxaACIgngGIAKi0QABgTAAgXQAEgyhmlgQgFgPgEgQIhulnQgDgKgDgKQhylnBYmWg");
	this.shape_634.setTransform(369,219.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#ECB77F").s().p("AoQc/IAKi0IABgqQAEgyhmlgIgJgfIhulnIgGgUQhylnBYmWIAAgBQAbh+Ash1IAohbQAWg0BMh6QAthIAkg1IAGgPIBOjPQAHgHADgMQAGgdgeg8IgNgVIgkg4IgNgXQjNlyChj9IAZgjQA0hDBNgxIAogYQAvgZAkgIQAZgFAYgEQGog/gBEEQAAAfgHAkQgMA+ggBKQgPAigPAdIgTAjIgPBBIACAEIAiA5IAiAwQAcAhANAhIAGARQAIAegIALQgEAHgcAIQgNAGgVAEQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgFAEAHAWQALAfgJAHIgPAOIgGAFIADAEIAUAkIABAJQAAAGgDAFIgGAIIgFAHIgGAKIgJAQQgGADAAAIQAAAIADAMIABAFIAKAaIABAEQAAAFALAGQAKAGAYALIAgALIAnAOIATAGQBNAVgVAKIgNAEIhnAtIgSBdIgMAiIgFAJQgJASAEAaQACARAEAOIATAQIApAiIAZATIC4CKQAdAdAaAhQCTCsBbDsQAPAoAIAyQAEAZADAbIAKB8IAAAMIAFCqIABAcQACCsgtDEIgCAHQgkCYggA9QgGALgGAcQgPBCgNC6IgCAZQgJB0gFBvIgLABIxaACg");
	this.shape_635.setTransform(369,219.1);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#373535").ss(2.5).p("Ar/A3QAbh+Ath1IAnhbQAWg1BMh5QAthIAkg2QADgHAEgHIBNjPQAHgIADgLQAGgdgeg8QgHgLgGgKIgkg5QgHgLgGgLQjNlzCij8QALgSAOgRQAzhDBNgyQAVgNATgKQAvgaAlgHQAZgFAXgEQGpg/gCEFQgBAfgGAjQgMA/ggBKQgPAigPAdQgKASgKARQgHAegHAjQABABABACQARAdARAdIAjAvQAbAiANAgQAEAJACAJQAIAegHALQgFAHgcAHQgOAGgVAEQgCAAgCABQgEAFAGAVQAMAggJAHQgJAHgHAHQgCADgDACQABACACACQAKATAJARQACAFAAADQAAAGgDAFQgCAEgEAEQgCAEgDAEQgCAEgEAGIgJAQQgGACAAAJQAAAIADAMQAAACABACQAEANAFANQABACABACQAAAGALAGQAKAGAZAKQAOAFASAGQAUAHAUAHQAKADAJADQBOAVgUAKQgGACgHACIhqAtIgTBeIgMAiQgDAEgCAFQgJASADAaQADARAEAOIATAQQAUAQAWASQAMAKAMAJIC6CJQAcAdAbAhQCTCsBbDsQAPAoAIAyQAEAZADAbQAKBxAAALQAAAGAAAGIAFCrQAAANABAOQACCtgtDEQgBADgBAEQglCXggA9QgGALgGAcQgOBDgOC5QgBANgBAMQgJB0gGBvQgFABgFAAIxaACIgpgFIAKi1QACgTAAgWQAEgyhmlhQgFgPgEgPIhtloQgDgKgDgKQhzlnBYmVg");
	this.shape_636.setTransform(369.1,219.1);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#ECB77F").s().p("AoSdAIAKi1QACgTAAgWQAEgyhmlhIgJgeIhtloIgGgUQhzlnBYmVIAAgCQAbh+Ath1IAnhbQAWg1BMh5QAthIAkg2IAHgOIBNjPQAHgIADgLQAGgdgeg8IgNgVIgkg5IgNgWQjNlzCij8QALgSAOgRQAzhDBNgyQAVgNATgKQAvgaAlgHIAwgJQGpg/gCEFQgBAfgGAjQgMA/ggBKQgPAigPAdIgUAjIgOBBIACADIAiA6IAjAvQAbAiANAgIAGASQAIAegHALQgFAHgcAHQgOAGgVAEQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgEAFAGAVQAMAggJAHIgQAOIgFAFIADAEIATAkQACAFAAADQAAAGgDAFIgGAIIgFAIIgGAKIgJAQQgGACAAAJQAAAIADAMIABAEIAJAaIACAEQAAAGALAGQAKAGAZAKIAgALIAoAOIATAGQBOAVgUAKIgNAEIhqAtIgTBeIgMAiIgFAJQgJASADAaQADARAEAOIATAQIAqAiIAYATIC6CJQAcAdAbAhQCTCsBbDsQAPAoAIAyQAEAZADAbIAKB8IAAAMIAFCrIABAbQACCtgtDEIgCAHQglCXggA9QgGALgGAcQgOBDgOC5IgCAZQgJB0gGBvIgKABIxaACg");
	this.shape_637.setTransform(369.1,219.1);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#373535").ss(2.5).p("AsAA3QAbh+Ath1IAnhbQAWg1BMh6QAthHAkg2QADgHAEgIIBNjOQAHgIADgMQAGgdgeg7QgHgLgGgKIgkg5QgHgLgGgMQjNlyCij8QAMgSANgRQA0hDBNgyQAUgNAUgLQAvgZAkgHQAZgFAYgEQGpg/gDEFQgBAggGAjQgMA+ggBLQgPAigPAcQgKATgKAQQgHAegHAjQABACABACQARAcASAdIAiAwQAcAiAMAgQAEAJADAIQAHAfgHAKQgFAHgdAIQgNAFgVAEQgDAAgCACQgEAEAHAWQAMAggJAHQgJAHgHAHQgCACgDACQABADACACQAKASAJASQACAEAAAEQAAAGgDAFQgCADgEAFQgCAEgDADQgCAFgEAFIgJARQgHACAAAJQAAAIAEAMQAAACABACQAEANAFANQABACABACQAAAFALAGQALAHAZAKQAOAFASAGQAUAGAVAHQAKADAJADQBQAVgUAKQgHACgGACIhtAtIgVBfIgMAiQgDAEgCAFQgIASADAaQACARAFAOIAUAQQATAQAWARQANAKAMAKIC6CIQAdAdAbAhQCSCrBcDtQAPAoAIAyQAEAZADAbQAKByAAAKQAAAGAAAGIAFCrQAAANABAOQABCtgtDEQgBADgBAEQgkCXghA9QgFALgHAcQgOBDgOC5QgBANgBAMQgJB1gGBuQgFABgFABIxbABIgpgFIAKi0QACgUAAgWQAEgxhmliQgFgPgEgPIhtloQgDgKgDgKQhzlnBYmVg");
	this.shape_638.setTransform(369.2,219.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#ECB77F").s().p("AoTdAIAKi0QACgUAAgWQAEgxhmliIgJgeIhtloIgGgUQhzlnBYmVIAAgCQAbh+Ath1IAnhbQAWg1BMh6QAthHAkg2IAHgPIBNjOQAHgIADgMQAGgdgeg7IgNgVIgkg5IgNgXQjNlyCij8IAZgjQA0hDBNgyIAogYQAvgZAkgHIAxgJQGpg/gDEFQgBAggGAjQgMA+ggBLQgPAigPAcIgUAjIgOBBIACAEIAjA5IAiAwQAcAiAMAgIAHARQAHAfgHAKQgFAHgdAIQgNAFgVAEQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQgEAEAHAWQAMAggJAHIgQAOIgFAEIADAFIATAkQACAEAAAEQAAAGgDAFIgGAIIgFAHIgGAKIgJARQgHACAAAJQAAAIAEAMIABAEIAJAaIACAEQAAAFALAGQALAHAZAKIAgALIApANIATAGQBQAVgUAKIgNAEIhtAtIgVBfIgMAiIgFAJQgIASADAaQACARAFAOIAUAQIApAhIAZAUIC6CIQAdAdAbAhQCSCrBcDtQAPAoAIAyQAEAZADAbIAKB8IAAAMIAFCrIABAbQABCtgtDEIgCAHQgkCXghA9QgFALgHAcQgOBDgOC5IgCAZQgJB1gGBuIgKACIxbABg");
	this.shape_639.setTransform(369.2,219.1);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#373535").ss(2.5).p("AsBA3QAbh+Ath1IAnhcQAWg0BNh6QAshHAkg2QADgHAEgIIBNjOQAIgIACgMQAGgdgfg7QgGgLgGgLIgkg4QgHgLgGgMQjNlyCij9QAMgSANgRQA0hDBNgxQAVgNATgLQAvgZAlgHQAZgFAXgEQGpg/gDEGQgBAfgGAkQgMA+ghBKQgPAigPAdQgKATgJAQQgHAegHAjQABACABACQASAcARAdIAjAwQAbAhANAhQAEAIACAJQAHAfgHAKQgFAHgdAHQgOAGgVAEQgDgBgBACQgFAEAHAWQANAggJAIQgJAHgHAGQgDADgCACQABACABACQALATAJARQACAFAAAEQABAGgEAFQgCADgDAFQgDADgDAEQgCAFgEAFIgKAQQgGADAAAIQAAAIADAMQABACAAADQAFANAFANQABACABACQAAAFAMAGQAKAGAZAKQAOAFATAGQAUAGAWAHQAKADAJADQBSAVgUAKQgHACgGACIhwAuIgWBfIgMAiQgDAEgCAFQgJASAEAaQACARAFAOIAUAQQAUAQAWARQANAKAMAJIC7CIQAdAdAbAhQCSCrBcDtQAPAoAIAyQAFAZACAbQAKByAAAKQAAAGAAAGIAFCrQAAANABAOQABCtgtDEQgBADgBAEQglCXggA9QgGALgGAdQgPBDgOC5QgBAMgBANQgJB0gGBvQgFAAgGABIxaABIgqgEIAKi1QACgTAAgWQAEgxhmliQgFgPgEgQIhtloQgDgKgDgKQhzlmBYmWg");
	this.shape_640.setTransform(369.3,219.1);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#ECB77F").s().p("AoUdBIAKi1QACgTAAgWQAEgxhmliIgJgfIhtloIgGgUQhzlmBYmWIAAgCQAbh+Ath1IAnhcQAWg0BNh6QAshHAkg2IAHgPIBNjOQAIgIACgMQAGgdgfg7IgMgWIgkg4IgNgXQjNlyCij9QAMgSANgRQA0hDBNgxIAogYQAvgZAlgHIAwgJQGpg/gDEGQgBAfgGAkQgMA+ghBKQgPAigPAdIgTAjIgOBBIACAEIAjA5IAjAwQAbAhANAhQAEAIACAJQAHAfgHAKQgFAHgdAHQgOAGgVAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgFAEAHAWQANAggJAIIgQANIgFAFIACAEIAUAkQACAFAAAEQABAGgEAFIgFAIIgGAHIgGAKIgKAQQgGADAAAIQAAAIADAMIABAFIAKAaIACAEQAAAFAMAGQAKAGAZAKIAhALIAqANIATAGQBSAVgUAKIgNAEIhwAuIgWBfIgMAiIgFAJQgJASAEAaQACARAFAOIAUAQIAqAhIAZATIC7CIQAdAdAbAhQCSCrBcDtQAPAoAIAyQAFAZACAbIAKB8IAAAMIAFCrIABAbQABCtgtDEIgCAHQglCXggA9QgGALgGAdQgPBDgOC5IgCAZQgJB0gGBvIgLABIxaABg");
	this.shape_641.setTransform(369.3,219.1);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#373535").ss(2.5).p("AsCA3QAbh+Ath1IAnhcQAWg0BNh6QAthIAjg1QAEgHADgIIBOjOQAHgIACgMQAGgdgfg8QgGgKgHgLIgjg4QgHgMgGgLQjNlzCij8QAMgSANgRQA0hDBNgxQAVgNAUgLQAvgZAkgHQAZgFAYgEQGpg/gEEHQgBAfgGAjQgMA/ghBKQgPAigPAdQgKASgKAQQgHAfgGAjQABACABABQASAdARAcIAjAwQAcAiAMAgQAEAJACAJQAIAfgIAKQgFAGgeAIQgOAFgVAEQgDAAgBABQgFAEAIAWQANAhgJAHQgIAHgIAHQgDADgDACQACACABACQALATAJARQACAEABAEQAAAHgDAEQgDAEgDAFQgCADgDAEQgDAFgEAFIgKAQQgGACAAAJQgBAIAEAMQAAACABADQAFANAFANQABACABACQAAAFAMAGQALAGAZAKQAOAFATAFQAUAHAWAGQALADAKADQBTAVgUAKQgHACgGACIhzAuIgYBgIgMAiQgCAEgCAFQgJASAEAbQACAQAFAOIAUAQQAVAQAWARQANAKAMAJIC8CHQAdAdAbAgQCSCrBcDuQAPAoAIAyQAFAZACAbQAKBzABAJQAAAGgBAGIAFCrQABANAAAOQABCuguDDQgBADgBAEQglCXggA9QgGALgGAdQgOBDgPC5QgBAMAAANQgKB0gGBvQgFAAgGABIxbABIgqgEIAKi0QACgUAAgWQAFgwhnljQgFgPgEgPIhtlpQgDgKgDgJQhzlnBYmWg");
	this.shape_642.setTransform(369.4,219.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#ECB77F").s().p("AoVdBIAKi0QACgUAAgWQAFgwhnljIgJgeIhtlpIgGgTQhzlnBYmWIAAgCQAbh+Ath1IAnhcQAWg0BNh6QAthIAjg1IAHgPIBOjOQAHgIACgMQAGgdgfg8IgNgVIgjg4IgNgXQjNlzCij8QAMgSANgRQA0hDBNgxIApgYQAvgZAkgHIAxgJQGpg/gEEHQgBAfgGAjQgMA/ghBKQgPAigPAdQgKASgKAQIgNBCIACADIAjA5IAjAwQAcAiAMAgIAGASQAIAfgIAKQgFAGgeAIQgOAFgVAEQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgFAEAIAWQANAhgJAHIgQAOIgGAFIADAEIAUAkIADAIQAAAHgDAEIgGAJIgFAHIgHAKIgKAQQgGACAAAJQgBAIAEAMIABAFIAKAaIACAEQAAAFAMAGQALAGAZAKIAhAKIAqANIAVAGQBTAVgUAKIgNAEIhzAuIgYBgIgMAiIgEAJQgJASAEAbQACAQAFAOIAUAQIArAhIAZATIC8CHQAdAdAbAgQCSCrBcDuQAPAoAIAyQAFAZACAbIALB8IgBAMIAFCrIABAbQABCuguDDIgCAHQglCXggA9QgGALgGAdQgOBDgPC5IgBAZQgKB0gGBvIgLABIxbABg");
	this.shape_643.setTransform(369.4,219.1);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#373535").ss(2.5).p("AsDA3QAbh/Ath0IAnhcQAWg0BNh6QAthIAkg1QADgIADgHIBOjPQAHgHACgMQAGgegfg7QgGgKgHgLIgkg4QgGgMgGgLQjNlzCij8QAMgSAOgRQA0hDBNgyQAUgNAUgKQAvgZAlgIQAZgFAXgDQGpg/gEEHQgBAggHAjQgMA+ggBLQgPAigPAcQgKATgKAQQgHAegHAjQACACABACQASAcASAdIAjAwQAbAiANAgQADAJADAJQAHAegIALQgFAGgeAHQgOAFgWAEQgDAAgBABQgFAEAIAXQAOAhgJAHQgIAHgIAHQgDACgDACQACADABACQALASAJASQACAEABAEQAAAGgDAFQgDAEgDAEQgCAEgDAEQgDAEgEAGIgKAQQgHACAAAJQAAAIAEAMQAAACABACQAEANAGAOQABACABACQABAFALAGQALAGAaAJQAOAFATAGQAVAGAWAGQALADAKADQBVAVgUAKQgHACgGACIh2AuIgZBhIgMAiQgDAEgCAFQgJASAEAbQADAQAFAOIAUAQQAVAQAXARQANAJAMAKIC9CGQAcAdAbAgQCTCrBdDuQAOAoAJAyQAEAZACAbQAKBzABAJQAAAGAAAGIAECrQABANAAAOQAACugtDDQgBADgBAEQglCYghA8QgFALgHAdQgOBEgPC4QAAANgBAMQgKB0gGBvQgGABgFAAIxbABIgrgDIAKi1QABgUABgVQAFgwhnlkQgEgPgFgPIhtloQgDgKgDgKQhzlnBYmWg");
	this.shape_644.setTransform(369.5,219.1);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#ECB77F").s().p("AoWdCIAKi1IACgpQAFgwhnlkIgJgeIhtloIgGgUQhzlnBYmWIAAgCQAbh/Ath0IAnhcQAWg0BNh6QAthIAkg1IAGgPIBOjPQAHgHACgMQAGgegfg7IgNgVIgkg4IgMgXQjNlzCij8QAMgSAOgRQA0hDBNgyQAUgNAUgKQAvgZAlgIIAwgIQGpg/gEEHQgBAggHAjQgMA+ggBLQgPAigPAcIgUAjIgOBBIADAEIAkA5IAjAwQAbAiANAgIAGASQAHAegIALQgFAGgeAHQgOAFgWAEQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgFAEAIAXQAOAhgJAHIgQAOIgGAEIADAFIAUAkIADAIQAAAGgDAFIgGAIIgFAIIgHAKIgKAQQgHACAAAJQAAAIAEAMIABAEIAKAbIACAEQABAFALAGQALAGAaAJIAhALIArAMIAVAGQBVAVgUAKIgNAEIh2AuIgZBhIgMAiIgFAJQgJASAEAbQADAQAFAOIAUAQIAsAhIAZATIC9CGQAcAdAbAgQCTCrBdDuQAOAoAJAyQAEAZACAbIALB8IAAAMIAECrIABAbQAACugtDDIgCAHQglCYghA8QgFALgHAdQgOBEgPC4IgBAZQgKB0gGBvIgLABIxbABg");
	this.shape_645.setTransform(369.5,219.1);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#373535").ss(2.5).p("AsEA3QAbh/Ath0IAnhcQAWg0BNh6QAthIAkg1QADgIADgHIBOjPQAHgIACgLQAGgegfg7QgGgLgHgKIgkg5QgGgLgGgMQjOlyCkj9QAMgSANgRQA0hDBNgxQAVgNATgLQAwgZAkgHQAZgFAYgDQGpg/gFEIQgBAggHAjQgMA+ggBKQgQAigPAdQgKASgJARQgHAegHAjQACACABACQASAcASAdIAjAvQAcAiAMAhQAEAIACAJQAHAfgIAKQgFAHgeAHQgPAFgWADQgCAAgCABQgFAEAJAXQAOAhgJAIQgIAHgIAGQgDADgDACQACACABACQALATAJARQACAFABAEQAAAGgDAFQgCADgEAFQgCAEgDADQgDAFgEAFIgKARQgHACAAAJQgBAHAEANQABACAAACQAFANAGANQABACABACQABAFALAGQAMAHAZAJQAPAFATAFQAVAGAXAHQALACAKADQBWAVgTAKQgHACgGACIh5AuIgmCEQgDAEgCAFQgJASAEAbQADARAFANIAVAQQAVAQAXAQQAMAKANAJIC9CGQAdAdAbAgQCTCqBdDvQAPAnAIAzQAEAZACAbQAKB0ABAIQAAAGAAAGIAECrQABANAAAOQAACuguDDQgBAEgBADQglCYggA8QgGALgGAdQgOBEgPC4QgBANgBAMQgKB1gGBuQgGABgFAAIxcABIgrgDIAKi1QABgTABgWQAFgvhnlkQgEgPgFgQIhtloQgDgKgDgKQhzlnBYmWg");
	this.shape_646.setTransform(369.6,219.1);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#ECB77F").s().p("AoXdCIAKi1IACgpQAFgvhnlkIgJgfIhtloIgGgUQhzlnBYmWIAAgCQAbh/Ath0IAnhcQAWg0BNh6QAthIAkg1IAGgPIBOjPQAHgIACgLQAGgegfg7IgNgVIgkg5IgMgXQjOlyCkj9IAZgjQA0hDBNgxIAogYQAwgZAkgHIAxgIQGpg/gFEIQgBAggHAjQgMA+ggBKQgQAigPAdIgTAjIgOBBIADAEIAkA5IAjAvQAcAiAMAhQAEAIACAJQAHAfgIAKQgFAHgeAHQgPAFgWADQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgFAEAJAXQAOAhgJAIIgQANIgGAFIADAEIAUAkIADAJQAAAGgDAFIgGAIIgFAHIgHAKIgKARQgHACAAAJQgBAHAEANIABAEIALAaIACAEQABAFALAGQAMAHAZAJIAiAKIAsANIAVAFQBWAVgTAKIgNAEIh5AuIgmCEIgFAJQgJASAEAbQADARAFANIAVAQIAsAgIAZATIC9CGQAdAdAbAgQCTCqBdDvQAPAnAIAzQAEAZACAbIALB8IAAAMIAECrIABAbQAACuguDDIgCAHQglCYggA8QgGALgGAdQgOBEgPC4IgCAZQgKB1gGBuIgLABIxcABg");
	this.shape_647.setTransform(369.6,219.1);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#373535").ss(2.5).p("AsFA3QAbh+Ath1IAnhbQAWg1BNh6QAthHAkg2QADgHADgIIBOjPQAHgHACgMQAGgegfg7QgGgKgHgLIgkg4QgGgMgHgLQjNlzCkj9QAMgSANgRQA0hCBNgyQAVgNAUgKQAvgZAkgHQAZgFAYgEQGqg+gGEIQgBAggHAjQgMA+ghBKQgPAjgPAcQgKATgKAQQgGAegHAjQABACACACQASAcATAdIAjAwQAbAhAMAhQAEAJACAJQAIAfgJAKQgFAGgfAHQgOAEgWAEQgDAAgCABQgEAEAJAXQANAigHAHQgJAHgIAHQgDACgDACQABACACACQAKATAKARQACAFABAEQAAAGgDAFQgCADgEAFQgCAEgDAEQgDAEgEAGIgKAQQgHACAAAJQgBAIAEAMQAAACABACQAFANAGAOQABACABACQABAFAMAGQALAGAaAJQAPAFASAFQAWAGAYAGQALADAKACQBYAWgUAJQgGADgGACIh8AuIgoCFQgDAEgBAEQgJASAEAbQACARAGAOIAVAPQAWAQAWARQANAJANAJIC+CFQAdAeAbAgQCTCpBdDwQAPAnAIAzQAEAYACAcQAKB0ABAIQAAAGAAAGIAECqQABAOAAANQgBCvgtDDQgBADgBAEQglCYghA8QgGAKgGAeQgOBEgPC4QgBAMgBANQgKB0gGBvQgGAAgGABIyHgCIAKi1QABgUABgVQAGguholmQgEgPgFgPIhtloQgDgKgDgKQhzlnBYmXg");
	this.shape_648.setTransform(369.7,219.1);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#ECB77F").s().p("AoYdDIAKi1IACgpQAGguholmIgJgeIhtloIgGgUQhzlnBYmXIAAgCQAbh+Ath1IAnhbQAWg1BNh6QAthHAkg2IAGgPIBOjPQAHgHACgMQAGgegfg7IgNgVIgkg4IgNgXQjNlzCkj9QAMgSANgRQA0hCBNgyIApgXQAvgZAkgHIAxgJQGqg+gGEIQgBAggHAjQgMA+ghBKQgPAjgPAcIgUAjIgNBBIADAEIAlA5IAjAwQAbAhAMAhQAEAJACAJQAIAfgJAKQgFAGgfAHQgOAEgWAEQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgEAEAJAXQANAigHAHIgRAOIgGAEIADAEIAUAkIADAJQAAAGgDAFIgGAIIgFAIIgHAKIgKAQQgHACAAAJQgBAIAEAMIABAEQAFANAGAOIACAEQABAFAMAGQALAGAaAJIAhAKIAuAMIAVAFQBYAWgUAJIgMAFIh8AuIgoCFQgDAEgBAEQgJASAEAbQACARAGAOIAVAPIAsAhIAaASIC+CFQAdAeAbAgQCTCpBdDwQAPAnAIAzQAEAYACAcIALB8IAAAMIAECqIABAbQgBCvgtDDIgCAHQglCYghA8QgGAKgGAeQgOBEgPC4IgCAZQgKB0gGBvIgMABg");
	this.shape_649.setTransform(369.7,219.1);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#373535").ss(2.5).p("AsGA3QAbh+Ath1IAnhbQAWg1BNh6QAthIAkg1QADgIADgHIBOjPQAHgHACgMQAGgegfg7QgHgLgGgKIgkg5QgHgLgGgMQjNlzCkj8QAMgSANgRQA1hDBNgxQAVgNATgLQAvgZAlgHQAZgEAYgEQGpg+gGEJQgBAfgHAjQgMA/ghBKQgPAigPAdQgKASgKAQQgHAegGAkQABACACACQASAcATAcIAjAwQAcAiAMAgQADAJADAJQAHAfgJAKQgFAHgfAHQgPAEgWADQgDAAgCABQgEAEAJAXQAOAigHAIQgJAHgIAGQgDADgDACQABACACACQAKASAKASQACAFABADQAAAHgDAFQgCADgEAFQgCAEgDADQgDAFgEAFIgLARQgHACAAAJQgBAHAEANQABACABACQAFANAGANQABACABACQABAFAMAGQAMAHAaAIQAOAFATAFQAWAGAYAGQAMADALACQBZAWgUAKQgGACgHACIh+AuIgpCGQgDAEgCAEQgJASAFAbQACARAGAOIAVAPQAWAQAXAQQANAKANAJIC/CEQAdAeAbAgQCTCpBdDwQAPAnAIAzQAEAYACAcQAKB0ABAIQAAAGAAAGIAECqQABAOAAANQgBCwguDCQgBADgBAEQglCYghA8QgFAKgHAeQgOBFgPC3QgBANgBAMQgKB1gHBuQgFABgGAAIyIgCIAKi0QABgUABgWQAGgtholmQgEgPgFgQIhtloQgDgKgDgKQhzlnBYmXg");
	this.shape_650.setTransform(369.8,219.1);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#ECB77F").s().p("AoZdDIAKi0IACgqQAGgtholmIgJgfIhtloIgGgUQhzlnBYmXIAAgCQAbh+Ath1IAnhbQAWg1BNh6QAthIAkg1IAGgPIBOjPQAHgHACgMQAGgegfg7IgNgVIgkg5IgNgXQjNlzCkj8IAZgjQA1hDBNgxIAogYQAvgZAlgHIAxgIQGpg+gGEJQgBAfgHAjQgMA/ghBKQgPAigPAdIgUAiIgNBCIADAEIAlA4IAjAwQAcAiAMAgIAGASQAHAfgJAKQgFAHgfAHQgPAEgWADQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgEAEAJAXQAOAigHAIIgRANIgGAFIADAEIAUAkIADAIQAAAHgDAFIgGAIIgFAHIgHAKIgLARQgHACAAAJQgBAHAEANIACAEIALAaIACAEQABAFAMAGQAMAHAaAIIAhAKIAuAMIAXAFQBZAWgUAKIgNAEIh+AuIgpCGIgFAIQgJASAFAbQACARAGAOIAVAPIAtAgIAaATIC/CEQAdAeAbAgQCTCpBdDwQAPAnAIAzQAEAYACAcIALB8IAAAMIAECqIABAbQgBCwguDCIgCAHQglCYghA8QgFAKgHAeQgOBFgPC3IgCAZQgKB1gHBuIgLABg");
	this.shape_651.setTransform(369.8,219.1);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#373535").ss(2.5).p("AsHA3QAbh/Ath1IAnhbQAWg1BNh5QAthIAkg2QADgHADgIIBOjOQAHgIACgMQAGgegfg7QgHgKgGgLIgkg4QgHgMgGgLQjNlzCkj9QAMgSAOgRQA0hDBNgxQAVgNAUgKQAvgZAkgHQAZgFAYgDQGqg/gHEKQgBAggHAjQgMA+ghBKQgQAjgPAcQgJASgKAQQgHAegGAkQABACACACQATAcATAcIAiAwQAcAiAMAhQAEAJACAIQAHAggJAKQgGAGgfAHQgPAEgWADQgDgBgBACQgFAEAKAXQAOAjgHAHQgJAHgIAGQgDADgDACQABACACACQAKASAKASQACAFABAEQAAAGgDAFQgCADgEAFQgCAEgDAEQgDAEgEAGIgLAQQgHACAAAJQgBAIAEAMQABACAAACQAGAOAGANQABACABACQABAFAMAGQANAGAZAJQAPAEATAFQAWAGAZAGQAMACALADQBbAWgUAJQgGACgHACIiBAvIgqCHQgDAEgCAEQgJASAEAbQADARAGANIAVAQQAXAPAXARQANAJANAJIC/CEQAeAdAbAgQCSCpBeDwQAPAnAIAzQAEAZACAbQAKB1ABAHQAAAGAAAGIAECrQABAOAAANQgBCvguDCQgBAEgBADQgmCYghA8QgFALgGAeQgOBFgQC3QgBAMgBANQgKB0gHBvQgFAAgGABIyJgCIAKi0QABgVABgVQAGgtholmQgEgPgFgQIhtlpQgDgKgDgKQhzlnBYmWg");
	this.shape_652.setTransform(369.9,219.1);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#ECB77F").s().p("AoadDIAKi0IACgqQAGgtholmIgJgfIhtlpIgGgUQhzlnBYmWIAAgCQAbh/Ath1IAnhbQAWg1BNh5QAthIAkg2IAGgPIBOjOQAHgIACgMQAGgegfg7IgNgVIgkg4IgNgXQjNlzCkj9QAMgSAOgRQA0hDBNgxIApgXQAvgZAkgHIAxgIQGqg/gHEKQgBAggHAjQgMA+ghBKQgQAjgPAcQgJASgKAQIgNBCIADAEIAmA4IAiAwQAcAiAMAhIAGARQAHAggJAKQgGAGgfAHQgPAEgWADQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgFAEAKAXQAOAjgHAHIgRANIgGAFIADAEIAUAkIADAJQAAAGgDAFIgGAIIgFAIIgHAKIgLAQQgHACAAAJQgBAIAEAMIABAEIAMAbIACAEQABAFAMAGQANAGAZAJIAiAJIAvAMIAXAFQBbAWgUAJIgNAEIiBAvIgqCHIgFAIQgJASAEAbQADARAGANIAVAQIAuAgIAaASIC/CEQAeAdAbAgQCSCpBeDwQAPAnAIAzQAEAZACAbIALB8IAAAMIAECrIABAbQgBCvguDCIgCAHQgmCYghA8QgFALgGAeQgOBFgQC3IgCAZQgKB0gHBvIgLABg");
	this.shape_653.setTransform(369.9,219.1);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#373535").ss(2.5).p("AsIA3QAbh+Ath1IAnhcQAXg0BMh6QAthIAkg1QADgIADgHIBOjPQAHgIACgMQAGgdgfg8QgHgKgGgLIgkg4QgHgMgGgLQjNlzClj9QAMgSANgRQA0hCBOgxQAVgNATgLQAvgZAlgHQAZgEAYgEQGpg+gHEKQgBAggHAjQgNA+ggBKQgQAjgPAcQgKASgKAQQgGAfgGAjQABACACACQATAcATAcIAjAwQAcAiAMAhQADAJACAJQAHAfgJAKQgGAGgfAHQgPADgXAEQgDgBgBACQgFAEAKAXQAPAjgHAHQgJAIgIAGQgDACgDACQABACACACQAKATAKARQACAFABAEQAAAGgDAFQgCAEgEAFQgCADgDAEQgCAFgFAFIgLAQQgHACgBAJQAAAIAEAMQAAACABADQAFANAHANQABACABACQABAFAMAGQANAGAaAJQAPAEATAFQAWAGAaAFQAMADALADQBdAVgUAKQgGACgHACIiEAvIgsCHQgDAEgCAFQgJARAFAcQADAQAFAOIAXAPQAWAQAYAQQANAJANAJIDACDQAdAdAcAgQCSCpBeDwQAPAoAIAzQAEAYACAcQAKB1ABAHQAAAGAAAGIAECrQABANAAAOQgCCvguDCQgBADgBAEQglCYghA8QgGAKgGAeQgOBGgQC3QgBAMgBANQgKB0gHBvQgGAAgFAAIyKgBIAKi0QABgVABgVQAGgsholoQgEgPgFgPIhtlpQgDgKgDgKQhzlnBYmXg");
	this.shape_654.setTransform(370,219.1);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#ECB77F").s().p("AobdEIAKi0IACgqQAGgsholoIgJgeIhtlpIgGgUQhzlnBYmXIAAgCQAbh+Ath1IAnhcQAXg0BMh6QAthIAkg1IAGgPIBOjPQAHgIACgMQAGgdgfg8IgNgVIgkg4IgNgXQjNlzClj9IAZgjQA0hCBOgxIAogYQAvgZAlgHIAxgIQGpg+gHEKQgBAggHAjQgNA+ggBKQgQAjgPAcIgUAiIgMBCIADAEIAmA4IAjAwQAcAiAMAhIAFASQAHAfgJAKQgGAGgfAHIgmAHQAAgBgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgFAEAKAXQAPAjgHAHIgRAOIgGAEIADAEIAUAkIADAJQAAAGgDAFIgGAJIgFAHIgHAKIgLAQQgHACgBAJQAAAIAEAMIABAFQAFANAHANIACAEQABAFAMAGQANAGAaAJIAiAJQAWAGAaAFIAXAGQBdAVgUAKIgNAEIiEAvIgsCHIgFAJQgJARAFAcQADAQAFAOIAXAPIAuAgIAaASIDACDQAdAdAcAgQCSCpBeDwQAPAoAIAzQAEAYACAcIALB8IAAAMIAECrIABAbQgCCvguDCIgCAHQglCYghA8QgGAKgGAeQgOBGgQC3IgCAZQgKB0gHBvIgLAAg");
	this.shape_655.setTransform(370,219.1);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#373535").ss(2.5).p("AsJA3QAbh+Ath1IAnhcQAXg0BMh6QAthIAkg1QADgIADgHIBOjPQAIgIACgMQAEgegfg7QgGgKgGgLIgkg4QgHgMgGgLQjNl0Clj8QAMgSANgRQA1hDBNgxQAVgNATgKQAwgZAkgHQAZgFAYgDQGqg+gIELQgBAfgHAjQgNA/ghBKQgPAigPAcQgKATgKAQQgGAegGAkQABACABACQAUAcATAcIAjAwQAcAiAMAgQAEAJACAJQAHAggJAKQgHAFgfAHQgQAEgXADQgDgBgBACQgFAEALAYQAPAigHAIQgJAIgIAFQgDADgDACQABACABACQALASAKASQACAEABAEQAAAHgDAFQgCADgDAFQgDAEgDAEQgCAEgFAGIgLAQQgIACAAAJQgBAHAEANQABACABACQAFAOAHANQABACABACQABAFANAGQANAGAaAIQAPAEATAFQAWAGAbAGQAMACALADQBfAVgUAKQgHACgGACIiHAvIgtCIQgDAEgCAFQgJARAFAcQADARAFANIAXAPQAXAQAYAQQANAJANAJIDBCCQAdAdAcAgQCSCoBeDxQAPAnAIA0QAFAYACAcQAJB1ABAHQAAAGAAAGIAECrQABANAAAOQgCCwguDBQgBAEgBADQgmCYghA8QgFAKgGAeQgPBHgQC2QgBAMgBANQgKB0gHBvQgGAAgGAAIyKAAIAKi1QABgUABgVQAHgsholoQgFgPgEgQIhulpQgDgKgDgKQhzlnBYmXg");
	this.shape_656.setTransform(370.1,219.1);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#ECB77F").s().p("AJudFIyKAAIAKi1IACgpQAHgsholoIgJgfIhulpIgGgUQhzlnBYmXIAAgCQAbh+Ath1IAnhcQAXg0BMh6QAthIAkg1IAGgPIBOjPQAIgIACgMQAEgegfg7IgMgVIgkg4IgNgXQjNl0Clj8QAMgSANgRQA1hDBNgxIAogXQAwgZAkgHIAxgIQGqg+gIELQgBAfgHAjQgNA/ghBKQgPAigPAcQgKATgKAQIgMBCIACAEIAnA4IAjAwQAcAiAMAgQAEAJACAJQAHAggJAKQgHAFgfAHQgQAEgXADQAAgBgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgFAEALAYQAPAigHAIIgRANIgGAFIACAEIAVAkIADAIQAAAHgDAFIgFAIIgGAIIgHAKIgLAQQgIACAAAJQgBAHAEANIACAEQAFAOAHANIACAEQABAFANAGQANAGAaAIIAiAJIAxAMIAXAFQBfAVgUAKIgNAEIiHAvIgtCIIgFAJQgJARAFAcQADARAFANIAXAPIAvAgIAaASIDBCCQAdAdAcAgQCSCoBeDxQAPAnAIA0QAFAYACAcIAKB8IAAAMIAECrIABAbQgCCwguDBIgCAHQgmCYghA8QgFAKgGAeQgPBHgQC2IgCAZQgKB0gHBvIgMAAg");
	this.shape_657.setTransform(370.1,219.1);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#373535").ss(2.5).p("AsKA3QAbh/Ath1IAnhbQAXg1BMh6QAthIAkg1QADgIADgHIBOjPQAIgIACgMQAEgdgfg8QgGgKgHgLIgkg4QgGgMgGgLQjNlzClj9QAMgSANgRQA1hCBNgxQAVgNAUgLQAvgZAlgHQAZgEAYgEQGqg+gJEMQgBAggHAjQgNA+ghBKQgPAjgPAcQgKASgKAQQgHAegGAkQACACABACQAUAcAUAcIAjAwQAcAiALAhQAEAJACAJQAHAfgJAKQgHAGggAGQgQADgWAEQgDgBgCACQgEAEAKAXQAQAkgHAHQgIAIgJAGQgDACgEACQACACABACQALASAKASQACAFABAEQAAAGgDAFQgCAEgDAFQgCADgDAEQgDAFgFAFIgMAQQgHACAAAJQgBAIAEAMQABACABADQAFANAHANQABACABACQABAFANAGQANAGAbAIQAOAEAUAFQAWAGAbAFQANADAMACQBfAWgTAJQgHACgGACIiKAwIguCJQgDAEgCAEQgJASAFAbQACARAGAOIAXAPQAYAPAXAQQAOAJANAJIDCCCQAdAdAbAgQCTCnBfDyQAPAnAIAzQAEAZACAbQAJB2ABAGQAAAGAAAGIAECrQABAOAAANQgCCwgvDCQgBADgBAEQgmCYghA8QgFAKgGAeQgOBHgQC2QgBAMgBANQgLB0gHBvQgGAAgGAAIyLAAIAKi1QABgVABgUQAHgsholpQgFgPgEgPIhulpQgDgKgDgKQhzlnBYmXg");
	this.shape_658.setTransform(370.2,219.1);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#ECB77F").s().p("AoddFIAKi1IACgpQAHgsholpIgJgeIhulpIgGgUQhzlnBYmXIAAgCQAbh/Ath1IAnhbQAXg1BMh6QAthIAkg1IAGgPIBOjPQAIgIACgMQAEgdgfg8IgNgVIgkg4IgMgXQjNlzClj9IAZgjQA1hCBNgxIApgYQAvgZAlgHIAxgIQGqg+gJEMQgBAggHAjQgNA+ghBKQgPAjgPAcIgUAiQgHAegGAkIADAEIAoA4IAjAwQAcAiALAhIAGASQAHAfgJAKQgHAGggAGIgmAHQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgEAEAKAXQAQAkgHAHIgRAOIgHAEIADAEIAVAkIADAJQAAAGgDAFIgFAJIgFAHIgIAKIgMAQQgHACAAAJQgBAIAEAMIACAFQAFANAHANIACAEQABAFANAGQANAGAbAIIAiAJIAxALIAZAFQBfAWgTAJIgNAEIiKAwIguCJIgFAIQgJASAFAbQACARAGAOIAXAPIAvAfIAbASIDCCCQAdAdAbAgQCTCnBfDyQAPAnAIAzQAEAZACAbIAKB8IAAAMIAECrIABAbQgCCwgvDCIgCAHQgmCYghA8QgFAKgGAeQgOBHgQC2IgCAZQgLB0gHBvIgMAAg");
	this.shape_659.setTransform(370.2,219.1);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#373535").ss(2.5).p("Alu76QhhA+g7BZQiqEEDeGDIAxBNQAsBTgbAaIhUDeQgnA6gqBDQhUCGgPApIgnBbQgtB1gbB/QhZGYB0FoIB0F9QByGGgIAtIgMDeISYAAQAIh7AMiBQAXkDATgiQAhg8AmiYQAwjFADi0IgFjSQgBgFgJh3QgHhVgWg5Qhxkfi6i3IkkjBQgGgOgDgRQgEgbAIgSQACgEADgEIAwiKICag0QAWgKh9gaQiIgcgDgQQgJgPgGgQQgMgfAPgEIAMgQQAOgSAEgIQAFgIgFgMIgYgoIAHgFQAJgFAIgIQAHgHgQgkQgPggANADQBEgKAKgIQAJgKgHggQgJgpgkgrIhOhsQAGgkAGgeQAZgoAag5QAzhzADhYQAKkcncBVQgzAKhJAtg");
	this.shape_660.setTransform(370.3,219.1);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#ECB77F").s().p("AoedFIAMjeQAIgthymGIh0l9Qh0loBZmYQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQgNgDAPAgQAQAkgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgFAIQgIASAEAbQADARAGAOIEkDBQC6C3BxEfQAWA5AHBVIAKB8IAFDSQgDC0gwDFQgmCYghA8QgTAigXEDQgMCBgIB7g");
	this.shape_661.setTransform(370.3,219.1);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgDAEgCAEQgJASAFAbQADASAGANIEkDBQABAAAAABQC5C3BxEeQAAAAAAABQAWA5AHBUQAAABAAAAQAJB2ABAFQAAABAAAAIAFDRQAAABAAAAQgDC0gwDEQAAAAAAABQgmCXghA8QgBAAAAABQgSAkgXEAQAAAAAAABQgMCBgIB6QgBAAAAAAIyXAAIAMjeQAAAAAAgBQAHgwhxmCQAAAAAAgBIh0l8QAAAAAAgBQh0loBZmXg");
	this.shape_662.setTransform(370.3,219.1);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#ECB77F").s().p("AJ5dFIyXAAIAMjeIAAgBQAHgwhxmCIAAgBIh0l8IAAgBQh0loBZmXQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgFAIQgJASAFAbQADASAGANIEkDBIABABQC5C3BxEeIAAABQAWA5AHBUIAAABIAKB7IAAABIAFDRIAAABQgDC0gwDEIAAABQgmCXghA8IgBABQgSAkgXEAIAAABQgMCBgIB6IgBAAg");
	this.shape_663.setTransform(370.3,219.1);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgDAEgCAEQgJASAFAbQADASAGANIEkDBQABAAAAABQC5C3BxEeQAAAAAAABQAWA5AHBUQAAABAAAAQAJB2ABAFQAAABAAAAIAFDRQAAABAAAAQgDC0gwDEQAAAAAAABQgmCXghA8QgBAAAAABQgSAkgXEAQAAAAAAABQgMCBgIB6QgBAAAAAAIyXAAIAMjeQAAAAAAgBQAHgvhxmDQAAAAAAgBIh0l8QAAAAAAgBQh0loBZmXg");
	this.shape_664.setTransform(370.3,219.1);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#ECB77F").s().p("AJ5dFIyXAAIAMjeIAAgBQAHgvhxmDIAAgBIh0l8IAAgBQh0loBZmXQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgFAIQgJASAFAbQADASAGANIEkDBIABABQC5C3BxEeIAAABQAWA5AHBUIAAABIAKB7IAAABIAFDRIAAABQgDC0gwDEIAAABQgmCXghA8IgBABQgSAkgXEAIAAABQgMCBgIB6IgBAAg");
	this.shape_665.setTransform(370.3,219.1);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgDAEgCAEQgJASAFAbQADASAGANIEkDBQABAAAAABQC5C3BxEeQAAAAAAABQAWA5AHBUQAAABAAAAQAJB1ABAGQAAABAAAAIAFDRQAAABAAAAQgDC0gwDEQAAAAAAABQgmCXghA8QgBAAAAABQgSAkgXEAQAAAAAAABQgMCBgIB6QgBAAAAAAIyXAAIAMjeQAAAAAAgBQAHgvhxmDQAAAAAAgBIh0l8QAAAAAAgBQh0loBZmXg");
	this.shape_666.setTransform(370.3,219.1);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgDAEgCAEQgJARAFAcQADASAGANIEkDBQABAAAAABQC5C3BxEeQAAAAAAABQAWA5AHBUQAAABAAAAQAJB1ABAGQAAABAAAAIAFDRQAAABAAAAQgDC0gwDEQAAAAAAABQgmCXghA8QgBAAAAABQgSAkgXEAQAAAAAAABQgMCBgIB6QgBAAAAAAIyXAAIAMjeQAAAAAAgBQAHgvhxmDQAAAAAAgBIh0l8QAAAAAAgBQh0loBZmXg");
	this.shape_667.setTransform(370.3,219.1);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#ECB77F").s().p("AJ5dFIyXAAIAMjeIAAgBQAHgvhxmDIAAgBIh0l8IAAgBQh0loBZmXQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgFAIQgJARAFAcQADASAGANIEkDBIABABQC5C3BxEeIAAABQAWA5AHBUIAAABIAKB7IAAABIAFDRIAAABQgDC0gwDEIAAABQgmCXghA8IgBABQgSAkgXEAIAAABQgMCBgIB6IgBAAg");
	this.shape_668.setTransform(370.3,219.1);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgDAEgCAEQgJARAFAcQADASAGANIEkDBQABAAAAABQC5C3BxEeQAAAAAAABQAWA5AHBUQAAABAAAAQAJB1ABAGQAAABAAAAIAFDRQAAABAAAAQgDC0gwDEQAAAAAAABQgmCXghA8QgBAAAAABQgSAjgXEBQAAAAAAABQgMCBgIB6QgBAAAAAAIyXAAIAMjeQAAAAAAgBQAHgvhxmDQAAAAAAgBIh0l8QAAAAAAgBQh0loBZmXg");
	this.shape_669.setTransform(370.3,219.1);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#ECB77F").s().p("AJ5dFIyXAAIAMjeIAAgBQAHgvhxmDIAAgBIh0l8IAAgBQh0loBZmXQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgFAIQgJARAFAcQADASAGANIEkDBIABABQC5C3BxEeIAAABQAWA5AHBUIAAABIAKB7IAAABIAFDRIAAABQgDC0gwDEIAAABQgmCXghA8IgBABQgSAjgXEBIAAABQgMCBgIB6IgBAAg");
	this.shape_670.setTransform(370.3,219.1);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgDADgCAFQgJARAFAcQADARAGANIEkDBQAAABABAAQC5C3BxEeQAAABAAAAQAWA5AHBVQAAAAAAABQAJB1ABAGIAFDSQAAAAAAABQgDCzgwDEQAAABAAAAQgmCYghA7QgBABAAAAQgSAkgXEAQAAABAAAAQgMCBgIB7IgBAAIyWAAIgBAAIAMjdQAAgBAAAAQAHgwhxmCQAAgBAAAAIh0l8QAAgBAAAAQh0loBZmYg");
	this.shape_671.setTransform(370.3,219.1);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#ECB77F").s().p("AoddFIgBAAIAMjdIAAgBQAHgwhxmCIAAgBIh0l8IAAgBQh0loBZmYIAAAAQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgFAIQgJARAFAcQADARAGANIEkDBIABABQC5C3BxEeIAAABQAWA5AHBVIAAABIAKB7IAFDSIAAABQgDCzgwDEIAAABQgmCYghA7IgBABQgSAkgXEAIAAABQgMCBgIB7IgBAAg");
	this.shape_672.setTransform(370.3,219.1);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgDADgCAFQgJARAFAcQADARAGANIEkDBQAAABABAAQC5C3BxEeQAAABAAAAQAWA5AHBVQAAAAAAABQAJB1ABAGIAFDSQAAAAAAABQgDCzgwDEQAAABAAAAQgmCYghA7QgBABAAAAQgSAkgXEAQAAABAAAAQgMCBgIB7IgBAAIyWAAIgBAAIAMjdQAAgBAAAAQAHgvhxmDQAAgBAAAAIh0l8QAAgBAAAAQh0loBZmYg");
	this.shape_673.setTransform(370.3,219.1);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#ECB77F").s().p("AoddFIgBAAIAMjdIAAgBQAHgvhxmDIAAgBIh0l8IAAgBQh0loBZmYIAAAAQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgFAIQgJARAFAcQADARAGANIEkDBIABABQC5C3BxEeIAAABQAWA5AHBVIAAABIAKB7IAFDSIAAABQgDCzgwDEIAAABQgmCYghA7IgBABQgSAkgXEAIAAABQgMCBgIB7IgBAAg");
	this.shape_674.setTransform(370.3,219.1);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgDADgCAFQgJARAFAcQADARAGANIEkDBQAAABABAAQC5C3BxEeQAAABAAAAQAWA5AHBVQAAAAAAABQAJB0ABAHIAFDSQAAAAAAABQgDCzgwDEQAAABAAAAQgmCYghA7QgBABAAAAQgSAkgXEAQAAABAAAAQgMCBgIB7IgBAAIyWAAIgBAAIAMjdQAAgBAAAAQAHgvhxmDQAAgBAAAAIh0l8QAAgBAAAAQh0loBZmYg");
	this.shape_675.setTransform(370.3,219.1);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgDADgCAEQgJASAFAcQADARAGANIEkDBQAAABABAAQC5C3BxEeQAAABAAAAQAWA5AHBVQAAAAAAABQAJB0ABAHIAFDSQAAAAAAABQgDCzgwDEQAAABAAAAQgmCYghA7QgBABAAAAQgSAkgXEAQAAABAAAAQgMCBgIB7IgBAAIyWAAIgBAAIAMjdQAAgBAAAAQAHgvhxmDQAAgBAAAAIh0l8QAAgBAAAAQh0loBZmYg");
	this.shape_676.setTransform(370.3,219.1);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#ECB77F").s().p("AoddFIgBAAIAMjdIAAgBQAHgvhxmDIAAgBIh0l8IAAgBQh0loBZmYIAAAAQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgFAHQgJASAFAcQADARAGANIEkDBIABABQC5C3BxEeIAAABQAWA5AHBVIAAABIAKB7IAFDSIAAABQgDCzgwDEIAAABQgmCYghA7IgBABQgSAkgXEAIAAABQgMCBgIB7IgBAAg");
	this.shape_677.setTransform(370.3,219.1);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgCADgCAEQgKASAFAcQADARAGANIEkDBQAAABABAAQC4C3ByEeQAAABAAAAQAWA5AHBVQAAAAAAABQAJB0ABAHQAAAAAAABIAFDRQAAAAAAABQgDCzgwDEQAAABAAAAQgmCYghA7QAAABgBAAQgSAjgXEBQAAABAAAAQgMCBgIB7IgBAAIyWAAIgBAAIAMjdQAAgBAAAAQAHgvhxmDQAAgBAAAAIh0l8QAAgBAAAAQh0loBZmYg");
	this.shape_678.setTransform(370.3,219.1);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#ECB77F").s().p("AoddFIgBAAIAMjdIAAgBQAHgvhxmDIAAgBIh0l8IAAgBQh0loBZmYIAAAAQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgEAHQgKASAFAcQADARAGANIEkDBIABABQC4C3ByEeIAAABQAWA5AHBVIAAABQAJB0ABAHIAAABIAFDRIAAABQgDCzgwDEIAAABQgmCYghA7IgBABQgSAjgXEBIAAABQgMCBgIB7IgBAAg");
	this.shape_679.setTransform(370.3,219.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgCADgCAEQgKASAFAcQADARAGANIEkDBQAAABABAAQC4C3ByEeQAAABAAAAQAWA5AHBVQAAAAAAABQAJB0ABAHQAAAAAAABIAFDRQAAAAAAABQgDCzgwDEQAAABAAAAQgmCYghA7QAAABgBAAQgSAjgXEBQAAABAAAAQgMCBgIB7IgBAAIyWAAIgBAAIAMjdQAAgBAAAAQAHguhxmEQAAgBAAAAIh0l8QAAgBAAAAQh0loBZmYg");
	this.shape_680.setTransform(370.3,219.1);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#ECB77F").s().p("AoddFIgBAAIAMjdIAAgBQAHguhxmEIAAgBIh0l8IAAgBQh0loBZmYIAAAAQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgEAHQgKASAFAcQADARAGANIEkDBIABABQC4C3ByEeIAAABQAWA5AHBVIAAABQAJB0ABAHIAAABIAFDRIAAABQgDCzgwDEIAAABQgmCYghA7IgBABQgSAjgXEBIAAABQgMCBgIB7IgBAAg");
	this.shape_681.setTransform(370.3,219.1);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgCADgCAEQgKARAFAdQADARAGANIEkDBQAAABABAAQC4C3ByEeQAAABAAAAQAWA5AHBVQAAAAAAABQAJB0ABAHQAAAAAAABIAFDRQAAAAAAABQgDCzgwDEQAAABAAAAQgmCYghA7QAAABgBAAQgSAjgXEBQAAABAAAAQgMCBgIB7IgBAAIyWAAIgBAAIAMjdQAAgBAAAAQAHguhxmEQAAgBAAAAIh0l8QAAgBAAAAQh0loBZmYg");
	this.shape_682.setTransform(370.3,219.1);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#ECB77F").s().p("AoddFIgBAAIAMjdIAAgBQAHguhxmEIAAgBIh0l8IAAgBQh0loBZmYIAAAAQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgEAHQgKARAFAdQADARAGANIEkDBIABABQC4C3ByEeIAAABQAWA5AHBVIAAABQAJB0ABAHIAAABIAFDRIAAABQgDCzgwDEIAAABQgmCYghA7IgBABQgSAjgXEBIAAABQgMCBgIB7IgBAAg");
	this.shape_683.setTransform(370.3,219.1);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgCADgCAEQgKARAFAdQADARAGANIEkDBQAAABABAAQC4C3ByEeQAAABAAAAQAWA5AHBVQAAAAAAABQAJBzABAIQAAAAAAABIAFDRQAAAAAAABQgDCzgwDEQAAABAAAAQgmCYghA7QAAABgBAAQgSAjgXEBQAAABAAAAQgMCBgIB7IgBAAIyWAAIgBAAIAMjdQAAgBAAAAQAHguhxmEQAAgBAAAAIh0l8QAAgBAAAAQh0loBZmYg");
	this.shape_684.setTransform(370.3,219.1);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#ECB77F").s().p("AoddFIgBAAIAMjdIAAgBQAHguhxmEIAAgBIh0l8IAAgBQh0loBZmYIAAAAQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgEAHQgKARAFAdQADARAGANIEkDBIABABQC4C3ByEeIAAABQAWA5AHBVIAAABQAJBzABAIIAAABIAFDRIAAABQgDCzgwDEIAAABQgmCYghA7IgBABQgSAjgXEBIAAABQgMCBgIB7IgBAAg");
	this.shape_685.setTransform(370.3,219.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgCADgCAEQgKARAFAcQADASAGANIEjDBQABAAAAABQC5C3ByEeQAAAAAAABQAWA5AHBUQAAABAAAAQAJB0ABAIIAFDRQAAABAAAAQgDC0gwDEQAAAAAAABQgmCXghA8QAAAAAAABQgTAjgXEBQAAAAAAABQgMCBgIB6QAAABAAAAIyYAAIAMjdQAAAAAAgBQAIguhymEQAAAAAAgBIh0l8QAAAAAAgBQh0loBZmXg");
	this.shape_686.setTransform(370.3,219.1);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#ECB77F").s().p("AoedFIAMjdIAAgBQAIguhymEIAAgBIh0l8IAAgBQh0loBZmXIAAgBQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgEAHQgKARAFAcQADASAGANIEjDBIABABQC5C3ByEeIAAABQAWA5AHBUIAAABQAJB0ABAIIAFDRIAAABQgDC0gwDEIAAABQgmCXghA8IAAABQgTAjgXEBIAAABQgMCBgIB6IAAABg");
	this.shape_687.setTransform(370.3,219.1);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgCADgCAEQgKARAFAcQADASAGANIEjDBQABAAAAABQC5C3ByEeQAAAAAAABQAWA5AHBUQAAABAAAAQAJB0ABAIIAFDRQAAABAAAAQgDC0gwDEQAAAAAAABQgmCXghA8QAAAAAAABQgTAigXECQAAAAAAABQgMCBgIB6QAAABAAAAIyYAAIAMjdQAAAAAAgBQAIguhymEQAAAAAAgBIh0l8QAAAAAAgBQh0loBZmXg");
	this.shape_688.setTransform(370.3,219.1);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#ECB77F").s().p("AoedFIAMjdIAAgBQAIguhymEIAAgBIh0l8IAAgBQh0loBZmXIAAgBQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgEAHQgKARAFAcQADASAGANIEjDBIABABQC5C3ByEeIAAABQAWA5AHBUIAAABQAJB0ABAIIAFDRIAAABQgDC0gwDEIAAABQgmCXghA8IAAABQgTAigXECIAAABQgMCBgIB6IAAABg");
	this.shape_689.setTransform(370.3,219.1);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgCADgCAEQgKARAFAcQADASAGANIEjDBQABAAAAABQC5C3ByEeQAAAAAAABQAWA5AHBUQAAABAAAAQAJB0ABAIIAFDRQAAABAAAAQgDC0gwDEQAAAAAAABQgmCXghA8QAAAAAAABQgTAigXECQAAAAAAABQgMCBgIB6QAAABAAAAIyYAAIAMjdQAAAAAAgBQAIgthymFQAAAAAAgBIh0l8QAAAAAAgBQh0loBZmXg");
	this.shape_690.setTransform(370.3,219.1);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#ECB77F").s().p("AoedFIAMjdIAAgBQAIgthymFIAAgBIh0l8IAAgBQh0loBZmXIAAgBQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgEAHQgKARAFAcQADASAGANIEjDBIABABQC5C3ByEeIAAABQAWA5AHBUIAAABQAJB0ABAIIAFDRIAAABQgDC0gwDEIAAABQgmCXghA8IAAABQgTAigXECIAAABQgMCBgIB6IAAABg");
	this.shape_691.setTransform(370.3,219.1);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgCADgCADQgKASAFAcQADASAGANIEjDBQABAAAAABQC5C3ByEeQAAAAAAABQAWA5AHBUQAAABAAAAQAJB0ABAIIAFDRQAAABAAAAQgDC0gwDEQAAAAAAABQgmCXghA8QAAAAAAABQgTAigXECQAAAAAAABQgMCBgIB6QAAABAAAAIyYAAIAMjdQAAAAAAgBQAIgthymFQAAAAAAgBIh0l8QAAAAAAgBQh0loBZmXg");
	this.shape_692.setTransform(370.3,219.1);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#ECB77F").s().p("AoedFIAMjdIAAgBQAIgthymFIAAgBIh0l8IAAgBQh0loBZmXIAAgBQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgEAGQgKASAFAcQADASAGANIEjDBIABABQC5C3ByEeIAAABQAWA5AHBUIAAABQAJB0ABAIIAFDRIAAABQgDC0gwDEIAAABQgmCXghA8IAAABQgTAigXECIAAABQgMCBgIB6IAAABg");
	this.shape_693.setTransform(370.3,219.1);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#373535").ss(2.5).p("AsLA3QAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoQgGAegGAkIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgCADgCADQgKASAFAcQADASAGANIEjDBQABAAAAABQC5C3ByEeQAAAAAAABQAWA5AHBUQAAABAAAAQAJBzABAJIAFDRQAAABAAAAQgDC0gwDEQAAAAAAABQgmCXghA8QAAAAAAABQgTAigXECQAAAAAAABQgMCBgIB6QAAABAAAAIyYAAIAMjdQAAAAAAgBQAIgthymFQAAAAAAgBIh0l8QAAAAAAgBQh0loBZmXg");
	this.shape_694.setTransform(370.3,219.1);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#ECB77F").s().p("AoedFIAMjdIAAgBQAIgthymFIAAgBIh0l8IAAgBQh0loBZmXIAAgBQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQASBBgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKIgEAGQgKASAFAcQADASAGANIEjDBIABABQC5C3ByEeIAAABQAWA5AHBUIAAABQAJBzABAJIAFDRIAAABQgDC0gwDEIAAABQgmCXghA8IAAABQgTAigXECIAAABQgMCBgIB6IAAABg");
	this.shape_695.setTransform(370.3,219.1);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#373535").ss(2.5).p("Alu76QhhA+g7BZQiqEEDeGDIAxBNQAsBTgbAaIhUDeQgnA6gqBDQhUCGgPApIgnBbQgtB1gbB/QhZGYB0FoIB0F9QByGGgIAtIgMDeISYAAQAIh7AMiBQAXkDATgiQAhg8AmiYQAwjFADi0IgFjSQgBgFgJh3QgHhVgWg5Qhxkfi6i3IkkjBQgGgOgDgRQgGgiAPgTIAwiKICag0QAWgKh9gaQiIgcgDgQQgJgPgGgQQgMgfAPgEIAMgQQAOgSAEgIQAFgIgFgMIgYgoIAHgFQAJgFAIgIQAHgHgQgkQgPggANADQBEgKAKgIQAJgKgHggQgJgpgkgrIhOhsQAGgkAGgeQAZgoAag5QAzhzADhYQAKkcncBVQgzAKhJAtg");
	this.shape_696.setTransform(370.3,219.1);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#ECB77F").s().p("AoedFIAMjeQAIgthymGIh0l9Qh0loBZmYQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVgKEcQgDBYgzBzQgaA5gZAoIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQgNgDAPAgQAQAkgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAQCIAcQB9AagWAKIiaA0IgwCKQgPATAGAiQADARAGAOIEkDBQC6C3BxEfQAWA5AHBVIAKB8IAFDSQgDC0gwDFQgmCYghA8QgTAigXEDQgMCBgIB7g");
	this.shape_697.setTransform(370.3,219.1);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#373535").ss(2.5).p("AsKA3QAbh/Ath1IAnhbQAVgyBOh9QAshGAlg3IBUjeQAFgFADgHQALgegkhDQgEgGgEgHIgphAQgEgIgEgHQjTl5Cnj/QAIgMAIgLQA3hKBUg2QAOgIANgIQA4gfAqgIQAQgDAQgCQG7hGgJESQgBAHAAAIQgHBTgvBpQgZA5gaAnQgDARgEASQgCAPgDAQQALAPAKAOIA5BPQANAQAJAPQARAbAGAbQAGAcgGALQgBABgBABQgHAHghAGQgQADgWADQgMgDAOAfQABADABADQAJAWAAAJQAAAEgCACQgIAIgJAGQgDACgDACQACAGADAEQAGAJAFAJIAHAMQAFAMgFAIQgDAHgKANQgCADgDADQgDAFgDAEQgDAEgCADQgLADADARQABAHADAJQABACABACQAGANAHANQABAEAIAFQAKAGAWAHQAdAJAwAKQAJACAKACQA4AMAaAIQAfALgMAFIiWA0IguCIQgEAGgDAGQgHARAFAZQADARAFANIA/AqQAXAPAXAQQANAJAOAJICaBnQAtAtApAyQB/CeBVDZQAVA2AIBNQAAAGABAGQAJB2ABAGQABAYAAAZIAEChQAAAEAAAEQgDCwgwDAQgDANgDAMQgiCFgeA2QgJAQgJA5QgLBKgNCSQgDAbgCAaQgJBmgGBiQgSAAgTAAIxyAAIALjDQABgNAAgOQAIgthslxQgDgKgDgLIhwlwQgCgGgCgHQhzlnBYmXg");
	this.shape_698.setTransform(370.2,219.1);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#ECB77F").s().p("AoddFIALjDIABgbQAIgthslxIgGgVIhwlwIgEgNQhzlnBYmXIAAgCQAbh/Ath1IAnhbQAVgyBOh9QAshGAlg3IBUjeQAFgFADgHQALgegkhDIgIgNIgphAIgIgPQjTl5Cnj/IAQgXQA3hKBUg2IAbgQQA4gfAqgIIAggFQG7hGgJESIgBAPQgHBTgvBpQgZA5gaAnIgHAjIgFAfIAVAdIA5BPQANAQAJAPQARAbAGAbQAGAcgGALIgCACQgHAHghAGIgmAGQgMgDAOAfIACAGQAJAWAAAJQAAAEgCACQgIAIgJAGIgGAEIAFAKIALASIAHAMQAFAMgFAIIgNAUIgFAGIgGAJIgFAHQgLADADARQABAHADAJIACAEQAGANAHANQABAEAIAFQAKAGAWAHQAdAJAwAKIATAEQA4AMAaAIQAfALgMAFIiWA0IguCIQgEAGgDAGQgHARAFAZQADARAFANIA/AqIAuAfIAbASICaBnQAtAtApAyQB/CeBVDZQAVA2AIBNIABAMIAKB8IABAxIAEChIAAAIQgDCwgwDAIgGAZQgiCFgeA2QgJAQgJA5QgLBKgNCSIgFA1QgJBmgGBiIglAAg");
	this.shape_699.setTransform(370.2,219.1);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#373535").ss(2.5).p("AsJA3QAbh+Ath1IAnhcQAVgxBOh9QAshGAlg4IBUjdQAFgGADgHQALgdgkhDQgEgGgEgHIgphAQgEgIgEgHQjTl5Cnj/QAHgMAIgLQA4hKBUg2QAOgIANgIQA4gfAqgIQAQgDAQgDQG7hFgKERQAAAHgBAIQgGBTgwBpQgZA5gZAoQgEAQgEASQgCAPgDARQALAOAKAPIA5BPQAMAPAKAPQARAcAGAaQAGAcgGALQgBABgBABQgGAHgiAGQgPADgWADQgNgDAOAgQABADABACQAJAWAAAKQAAAEgCACQgIAIgIAFQgEADgDACQADAFADAFQAFAJAFAJIAHAMQAFALgFAIQgDAHgJANQgDADgCADQgEAFgDAFQgDADgCAEQgLADADAQQABAHADAJQABACABACQAFANAIANQAAAEAJAFQAKAGAVAHQAdAJAwALQAIACAKACQA3AMAZAIQAfAKgMAGIiTAzIgsCHQgEAGgCAGQgHARAEAZQADARAGANIA9AqQAXAPAXAQQANAJAOAJICZBoQAtAtAoAzQCACdBVDaQAVA1AHBNQABAGAAAGQAKB2ABAGQABAZAAAYIAEChQAAAEAAAEQgDCwgvDAQgDANgDAMQgiCFgfA3QgIAPgJA5QgLBJgOCTQgCAbgCAaQgJBmgGBiQgSAAgSAAIxyAAIALjDQABgNAAgOQAHgthrlxQgDgKgDgLIhwlwQgCgGgCgHQhzlnBYmXg");
	this.shape_700.setTransform(370.1,219.1);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#ECB77F").s().p("AocdFIALjDIABgbQAHgthrlxIgGgVIhwlwIgEgNQhzlnBYmXIAAgCQAbh+Ath1IAnhcQAVgxBOh9QAshGAlg4IBUjdQAFgGADgHQALgdgkhDIgIgNIgphAIgIgPQjTl5Cnj/IAPgXQA4hKBUg2IAbgQQA4gfAqgIIAggGQG7hFgKERIgBAPQgGBTgwBpQgZA5gZAoIgIAiIgFAgIAVAdIA5BPQAMAPAKAPQARAcAGAaQAGAcgGALIgCACQgGAHgiAGIglAGQgNgDAOAgIACAFQAJAWAAAKQAAAEgCACQgIAIgIAFIgHAFIAGAKIAKASIAHAMQAFALgFAIQgDAHgJANIgFAGIgHAKIgFAHQgLADADAQQABAHADAJIACAEQAFANAIANQAAAEAJAFQAKAGAVAHQAdAJAwALIASAEQA3AMAZAIQAfAKgMAGIiTAzIgsCHIgGAMQgHARAEAZQADARAGANIA9AqIAuAfIAbASICZBoQAtAtAoAzQCACdBVDaQAVA1AHBNIABAMIALB8IABAxIAEChIAAAIQgDCwgvDAIgGAZQgiCFgfA3QgIAPgJA5QgLBJgOCTIgEA1QgJBmgGBiIgkAAg");
	this.shape_701.setTransform(370.1,219.1);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#373535").ss(2.5).p("AsIA3QAbh+Ath1IAnhcQAVgxBOh9QAshGAlg3IBUjeQAFgFADgHQALgegkhDQgEgGgEgHIgohAQgEgIgFgHQjTl5Cnj/QAHgMAIgLQA4hKBUg2QANgIANgIQA4gfAqgIQARgDAQgDQG7hFgKERQgBAHAAAIQgHBTgvBpQgaA5gZAnQgEARgEASQgCAPgDAQQALAPAKAOIA5BPQAMAQAKAPQARAbAGAbQAGAbgGAMQgBABgBABQgGAHgiAGQgPADgWADQgNgDAOAfQABADABADQAJAVAAAKQAAAEgCACQgIAIgIAGQgEACgDACQADAGADAEQAFAJAFAJIAHAMQAFAMgFAIQgDAHgJANQgDADgCADQgEAFgDAEQgCAEgDADQgKADACARQABAHADAJQABACABACQAFANAIANQAAAEAJAFQAKAGAVAHQAcAJAvALQAIACAKACQA1AMAZAIQAfAKgLAGIiQAzIgrCGQgDAFgDAHQgHAQAFAZQACARAGAOIA8AqQAXAPAXAQQANAJANAKICZBoQAtAtAoAyQCACeBVDZQAVA2AHBNQABAGAAAGQAKB1ABAHQABAYAAAZIAEChQAAAEAAAEQgDCvgvDBQgDAMgDANQgiCEgeA3QgIAQgJA4QgMBJgNCUQgCAagDAbQgIBlgGBiQgSABgSAAIxxAAIALjDQABgNAAgOQAHguhrlwQgDgKgDgLIhwlwQgCgGgCgHQhzlnBYmXg");
	this.shape_702.setTransform(370,219.1);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#ECB77F").s().p("AobdFIALjDIABgbQAHguhrlwIgGgVIhwlwIgEgNQhzlnBYmXIAAgCQAbh+Ath1IAnhcQAVgxBOh9QAshGAlg3IBUjeQAFgFADgHQALgegkhDIgIgNIgohAIgJgPQjTl5Cnj/IAPgXQA4hKBUg2IAagQQA4gfAqgIIAhgGQG7hFgKERIgBAPQgHBTgvBpQgaA5gZAnIgIAjIgFAfIAVAdIA5BPQAMAQAKAPQARAbAGAbQAGAbgGAMIgCACQgGAHgiAGIglAGQgNgDAOAfIACAGQAJAVAAAKQAAAEgCACQgIAIgIAGIgHAEIAGAKIAKASIAHAMQAFAMgFAIQgDAHgJANIgFAGIgHAJIgFAHQgKADACARIAEAQIACAEQAFANAIANQAAAEAJAFQAKAGAVAHQAcAJAvALIASAEQA1AMAZAIQAfAKgLAGIiQAzIgrCGQgDAFgDAHQgHAQAFAZQACARAGAOIA8AqIAuAfIAaATICZBoQAtAtAoAyQCACeBVDZQAVA2AHBNIABAMQAKB1ABAHIABAxIAEChIAAAIQgDCvgvDBIgGAZQgiCEgeA3QgIAQgJA4QgMBJgNCUIgFA1QgIBlgGBiIgkABg");
	this.shape_703.setTransform(370,219.1);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#373535").ss(2.5).p("AsHA3QAch+Ash1IAohcQAUgxBPh9QAshGAlg3IBUjeQAEgFADgHQALgegjhDQgEgGgEgHIgphAQgEgIgEgHQjTl5Cmj/QAIgLAIgLQA3hLBUg2QAOgIANgIQA4gfAqgIQAQgDAQgDQG7hGgKESQgBAHAAAIQgHBTgvBoQgaA5gZAoQgEARgEARQgCAPgDARQAKAOAKAPIA5BPQAMAQAKAPQARAbAGAaQAGAcgGALQgBACgBABQgGAHghAGQgPADgWADQgNgDANAfQACADABACQAIAWAAAKQAAAEgCACQgHAIgJAGQgDACgDACQADAFACAFQAFAJAFAJIAHAMQAFAMgFAIQgDAGgJANQgCADgCAEQgEAEgDAFQgDADgCAEQgLADADAQQABAHADAJQABACABACQAFANAHAOQABAEAIAEQAKAHAVAGQAcAKAuALQAIACAJACQA0AMAZAIQAeALgKAFIiNAyIgpCGQgDAFgDAGQgHARAFAZQACARAGANIA7AqQAWAQAXAQQANAJANAKICZBpQAtAtAoAyQB/CeBVDZQAVA2AHBMQABAGABAGQAJB1ABAHQABAZAAAYIAEChQAAAEAAAEQgCCvgvDCQgDAMgDAMQghCFgfA3QgIAQgJA4QgMBJgMCTQgDAbgCAaQgIBmgGBiQgSAAgSABIxwAAIALjDQAAgOABgNQAGguhrlwQgDgLgDgKIhvlwQgCgGgCgHQh0lnBYmXg");
	this.shape_704.setTransform(369.8,219.1);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#ECB77F").s().p("AoZdFIALjDIABgbQAGguhrlwIgGgVIhvlwIgEgNQh0lnBYmXIAAgCQAch+Ash1IAohcQAUgxBPh9QAshGAlg3IBUjeQAEgFADgHQALgegjhDIgIgNIgphAIgIgPQjTl5Cmj/IAQgWQA3hLBUg2IAbgQQA4gfAqgIIAggGQG7hGgKESIgBAPQgHBTgvBoQgaA5gZAoIgIAiIgFAgIAUAdIA5BPQAMAQAKAPQARAbAGAaQAGAcgGALIgCADQgGAHghAGIglAGQgNgDANAfIADAFQAIAWAAAKQAAAEgCACQgHAIgJAGIgGAEIAFAKIAKASIAHAMQAFAMgFAIQgDAGgJANIgEAHIgHAJIgFAHQgLADADAQQABAHADAJIACAEQAFANAHAOQABAEAIAEQAKAHAVAGQAcAKAuALIARAEQA0AMAZAIQAeALgKAFIiNAyIgpCGQgDAFgDAGQgHARAFAZQACARAGANIA7AqIAtAgIAaATICZBpQAtAtAoAyQB/CeBVDZQAVA2AHBMIACAMIAKB8IABAxIAEChIAAAIQgCCvgvDCIgGAYQghCFgfA3QgIAQgJA4QgMBJgMCTIgFA1QgIBmgGBiIgkABg");
	this.shape_705.setTransform(369.8,219.1);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#373535").ss(2.5).p("AsGA3QAch+Ash1IAohbQAUgyBOh9QAshGAlg3IBUjeQAFgFADgHQAMgdgkhEQgEgGgEgHIgphAQgEgIgEgHQjTl5Cmj/QAHgLAIgLQA4hLBUg1QANgJANgHQA4ggAqgIQARgDAQgCQG7hHgLERQAAAIgBAHQgHBUgvBoQgaA5gZAoQgEAQgEASQgCAPgDARQAKAOAKAPIA5BPQAMAPAKAPQARAcAGAaQAGAbgGAMQgBABgBABQgFAHghAHQgPADgXADQgMgDAMAfQACADABACQAIAVAAAKQAAAEgCACQgHAJgIAFQgEADgDACQADAFADAFQAEAJAFAJIAHALQAFAMgFAIQgDAHgJANQgCADgCADQgEAFgDAEQgCAEgDAEQgKADACAQQABAHADAJQABACABACQAEANAIANQAAAEAJAFQAKAGAVAHQAbAKAtALQAIACAJACQAzAMAYAJQAeAKgKAFIiKAyIgmCEQgEAGgCAGQgHAQAEAZQADARAFAOIA7AqQAVAQAXAQQANAKANAJICYBpQAsAtApAzQB/CfBVDYQAVA2AHBMQABAGAAAGQAKB0ABAIQABAYAAAZIAEChQAAAEAAAEQgBCvgvDBQgDANgDAMQgiCEgeA3QgIARgJA3QgMBJgNCUQgCAagCAbQgIBlgGBiQgSABgRABIxwgBIALjDQAAgNABgOQAGguhrlvQgDgLgDgKIhvlwQgCgGgCgHQh0lnBYmXg");
	this.shape_706.setTransform(369.7,219.1);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#ECB77F").s().p("AoYdEIALjDIABgbQAGguhrlvIgGgVIhvlwIgEgNQh0lnBYmXIAAgCQAch+Ash1IAohbQAUgyBOh9QAshGAlg3IBUjeQAFgFADgHQAMgdgkhEIgIgNIgphAIgIgPQjTl5Cmj/IAPgWQA4hLBUg1IAagQQA4ggAqgIIAhgFQG7hHgLERIgBAPQgHBUgvBoQgaA5gZAoIgIAiIgFAgIAUAdIA5BPQAMAPAKAPQARAcAGAaQAGAbgGAMIgCACQgFAHghAHIgmAGQgMgDAMAfIADAFQAIAVAAAKQAAAEgCACQgHAJgIAFIgHAFIAGAKIAJASIAHALQAFAMgFAIQgDAHgJANIgEAGIgHAJIgFAIQgKADACAQQABAHADAJIACAEQAEANAIANQAAAEAJAFQAKAGAVAHQAbAKAtALIARAEQAzAMAYAJQAeAKgKAFIiKAyIgmCEIgGAMQgHAQAEAZQADARAFAOIA7AqIAsAgIAaATICYBpQAsAtApAzQB/CfBVDYQAVA2AHBMIABAMIALB8IABAxIAEChIAAAIQgBCvgvDBIgGAZQgiCEgeA3QgIARgJA3QgMBJgNCUIgEA1QgIBlgGBiIgjACg");
	this.shape_707.setTransform(369.7,219.1);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#373535").ss(2.5).p("AsFA3QAch/Ash1IAohbQAUgxBOh9QAshGAlg4IBUjdQAFgGADgHQAMgdgkhDQgEgGgEgHIgphAQgEgIgEgHQjTl5Cmj/QAHgLAIgLQA4hLBUg2QANgIANgIQA4gfAqgIQAQgDAQgDQG8hGgLERQgBAHAAAIQgHBTgwBoQgZA5gaAoQgEAQgEASQgCAPgDARQAKAOAJAPIA5BPQANAPAJAPQASAcAGAaQAGAbgGAMQgBABgBABQgFAIghAGQgPADgWADQgNgCANAeQABADAAACQAJAVAAALQAAAEgCACQgHAIgIAFQgDADgEACQADAFADAFQAEAJAFAJIADAHIADAFQAFALgEAIQgDAHgIANQgDADgCAEQgDAEgEAFQgCADgDAEQgKADACAQQABAHADAJQABACABACQAEANAIANQAAAEAIAFQALAGAUAHQAcAKArALQAIADAJACQAyAMAXAIQAfAKgLAGIiHAxIgkCDQgEAGgBAGQgHAQADAZQADARAFAOIA6AqQAVAQAXARQAMAJAOAJICXBrQAsAtAoAyQCACfBVDYQAVA2AHBMQABAGAAAGQAKB0ABAIQABAZAAAYIAEChQAAAEAAAEQgBCvgvDBQgCANgDAMQgiCEgeA4QgIAQgKA3QgLBIgNCVQgCAagCAbQgIBlgGBiQgRABgSABIxTABIgcgCIALjCQAAgOABgOQAGguhrlvQgDgKgDgLIhvlwQgCgGgCgHQh0lnBYmWg");
	this.shape_708.setTransform(369.6,219.1);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#ECB77F").s().p("AoXdDIALjCIABgcQAGguhrlvIgGgVIhvlwIgEgNQh0lnBYmWIAAgCQAch/Ash1IAohbQAUgxBOh9QAshGAlg4IBUjdQAFgGADgHQAMgdgkhDIgIgNIgphAIgIgPQjTl5Cmj/IAPgWQA4hLBUg2IAagQQA4gfAqgIIAggGQG8hGgLERIgBAPQgHBTgwBoQgZA5gaAoIgIAiIgFAgIATAdIA5BPQANAPAJAPQASAcAGAaQAGAbgGAMIgCACQgFAIghAGIglAGQgNgCANAeIABAFQAJAVAAALQAAAEgCACQgHAIgIAFIgHAFIAGAKIAJASIADAHIADAFQAFALgEAIQgDAHgIANIgFAHIgHAJIgFAHQgKADACAQQABAHADAJIACAEQAEANAIANQAAAEAIAFQALAGAUAHQAcAKArALIARAFQAyAMAXAIQAfAKgLAGIiHAxIgkCDQgEAGgBAGQgHAQADAZQADARAFAOIA6AqIAsAhIAaASICXBrQAsAtAoAyQCACfBVDYQAVA2AHBMIABAMIALB8IABAxIAEChIAAAIQgBCvgvDBIgFAZQgiCEgeA4QgIAQgKA3QgLBIgNCVIgEA1QgIBlgGBiIgjACIxTABg");
	this.shape_709.setTransform(369.6,219.1);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#373535").ss(2.5).p("AsEA3QAch/Ash0IAohcQAUgxBOh9QAshGAlg4IBUjdQAFgFADgHQAMgdgkhEQgEgGgEgHIgphAQgEgIgEgHQjTl5Cmj/QAHgLAIgLQA3hLBUg2QAOgIANgIQA4gfAqgIQAQgDAQgDQG8hGgMERQAAAHgBAIQgHBTgvBoQgaA5gaAoQgEAQgEASQgCAPgDAQQAKAPAJAPIA5BPQANAPAJAPQARAbAHAbQAGAbgGAMQgBABgBABQgFAIggAGQgPADgXADQgNgCANAeQABACAAADQAIAVABAKQAAAEgCACQgHAIgIAGQgDADgDACQACAFADAFQAFAJAEAIIADAHIADAFQAFAMgEAIQgDAHgIAMQgDAEgCADQgDAFgEAEQgCAEgCADQgLAEADAQQAAAHADAJQABACABABQAEANAHAOQABAEAIAFQAKAGAVAHQAbAKAqAMQAIACAIACQAxAMAYAIQAeAKgKAGIiEAxIgjCCQgDAFgCAGQgHARAEAZQACAQAGAOIA4ArQAVAQAWARQANAJANAJICXBrQAsAtAoAzQCACfBUDYQAVA2AIBLQAAAGABAGQAKB0ABAJQABAYAAAZIAECgQAAAEAAAEQgBCvguDCQgDAMgDAMQghCFgeA3QgJARgJA3QgMBHgMCVQgCAbgCAaQgIBmgGBiQgRABgRABIxTABIgcgCIALjDQAAgNABgOQAGgvhrluQgDgLgDgKIhwlwQgCgGgCgHQhzlnBYmWg");
	this.shape_710.setTransform(369.5,219.1);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#ECB77F").s().p("AoWdDIALjDIABgbQAGgvhrluIgGgVIhwlwIgEgNQhzlnBYmWIAAgCQAch/Ash0IAohcQAUgxBOh9QAshGAlg4IBUjdQAFgFADgHQAMgdgkhEIgIgNIgphAIgIgPQjTl5Cmj/IAPgWQA3hLBUg2IAbgQQA4gfAqgIIAggGQG8hGgMERIgBAPQgHBTgvBoQgaA5gaAoIgIAiIgFAfIATAeIA5BPQANAPAJAPQARAbAHAbQAGAbgGAMIgCACQgFAIggAGQgPADgXADQgNgCANAeIABAFQAIAVABAKQAAAEgCACQgHAIgIAGIgGAFIAFAKIAJARIADAHIADAFQAFAMgEAIQgDAHgIAMIgFAHIgHAJIgEAHQgLAEADAQQAAAHADAJIACADQAEANAHAOQABAEAIAFQAKAGAVAHQAbAKAqAMIAQAEQAxAMAYAIQAeAKgKAGIiEAxIgjCCQgDAFgCAGQgHARAEAZQACAQAGAOIA4ArIArAhIAaASICXBrQAsAtAoAzQCACfBUDYQAVA2AIBLIABAMIALB9IABAxIAECgIAAAIQgBCvguDCIgGAYQghCFgeA3QgJARgJA3QgMBHgMCVIgEA1QgIBmgGBiIgiACIxTABg");
	this.shape_711.setTransform(369.5,219.1);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#373535").ss(2.5).p("AsDA3QAch/Ash0IAohcQAUgxBOh9QAshGAlg4IBUjdQAFgFADgHQAMgdgkhEQgEgGgEgHIgphAQgEgIgEgHQjTl4Cmj/QAHgMAIgLQA3hLBUg1QAOgJANgHQA3ggAqgIQARgDAQgDQG8hGgMEQQgBAIAAAIQgIBTgvBoQgaA4gZAoQgFARgEARQgCAQgDAQQAKAPAJAOIA5BPQAMAQAKAPQARAbAHAaQAGAcgGALQgBACAAABQgGAIggAGQgPADgXADQgMgCAMAdQABADAAACQAIAVABALQAAAEgCACQgHAIgIAGQgDADgDACQADAFACAFQAFAIAEAJIAGAMQAFAMgEAIQgDAGgIANQgCADgDAEQgDAEgDAFQgDADgCAEQgKADACAQQAAAHADAJQABACABACQAEANAHANQABAFAIAEQAKAHAUAHQAbAKApAMQAIACAIACQAwAMAXAJQAeAJgKAGIiBAxIggCBQgEAFgBAGQgHAQADAZQADARAFANIA4AsQAUAQAWARQANAJANAKICWBrQAsAtAoAzQCACfBUDXQAVA2AIBMQAAAGABAGQAKBzABAJQABAZAAAYIAEChQAAAEAAAEQAACuguDCQgDANgDAMQgiCEgeA4QgIARgJA2QgMBHgMCWQgCAagDAbQgHBlgGBiQgRACgRABIxSABIgcgCIALjDQAAgNABgOQAFgwhqltQgDgLgDgKIhwlwQgCgGgCgHQhzlnBYmWg");
	this.shape_712.setTransform(369.4,219.1);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#ECB77F").s().p("AoVdDIALjDIABgbQAFgwhqltIgGgVIhwlwIgEgNQhzlnBYmWIAAgCQAch/Ash0IAohcQAUgxBOh9QAshGAlg4IBUjdQAFgFADgHQAMgdgkhEIgIgNIgphAIgIgPQjTl4Cmj/IAPgXQA3hLBUg1IAbgQQA3ggAqgIIAhgGQG8hGgMEQIgBAQQgIBTgvBoQgaA4gZAoIgJAiIgFAgIATAdIA5BPQAMAQAKAPQARAbAHAaQAGAcgGALIgBADQgGAIggAGIgmAGQgMgCAMAdIABAFQAIAVABALQAAAEgCACQgHAIgIAGIgGAFIAFAKIAJARIAGAMQAFAMgEAIQgDAGgIANIgFAHIgGAJIgFAHQgKADACAQQAAAHADAJIACAEQAEANAHANQABAFAIAEQAKAHAUAHQAbAKApAMIAQAEQAwAMAXAJQAeAJgKAGIiBAxIggCBQgEAFgBAGQgHAQADAZQADARAFANIA4AsIAqAhIAaATICWBrQAsAtAoAzQCACfBUDXQAVA2AIBMIABAMIALB8IABAxIAEChIAAAIQAACuguDCIgGAZQgiCEgeA4QgIARgJA2QgMBHgMCWIgFA1QgHBlgGBiIgiADIxSABg");
	this.shape_713.setTransform(369.4,219.1);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#373535").ss(2.5).p("AsCA3QAch/Ash0IAohcQAUgxBOh9QAshGAlg3IBUjeQAFgFADgHQAMgdgkhDQgEgHgEgHIgohAQgEgHgFgIQjTl4Clj/QAIgMAIgLQA3hKBUg2QANgJANgHQA4ggAqgIQAQgDAQgDQG9hGgMEQQgBAIgBAHQgHBUgwBoQgZA4gaAoQgEAQgFASQgCAPgDARQAKAOAJAPIA5BPQAMAQAKAPQARAbAHAaQAGAbgGAMQgBABAAABQgGAIggAHQgOADgXADQgNgCAMAdQABADAAACQAIAUABALQAAAEgCADQgHAIgIAGQgDACgDACQADAGACAEQAFAJAEAJIADAHIADAFQAFALgEAIQgDAHgIANQgCADgCADQgEAFgDAFQgCADgDAEQgKADACAQQAAAHADAJQABACABACQAEAMAHAOQABAEAIAFQAKAHAUAHQAbAKAnAMQAIACAIACQAvAMAWAJQAeAJgKAGIh9AxIgfB/QgDAFgCAGQgHARAEAZQACAQAFAOIA3AsQAUAPAWASQANAJAMAKICWBrQAsAuAoAyQCACgBUDXQAVA2AIBMQAAAGABAGQAKByABAKQABAZAAAYIAEChQAAAEAAAEQAACtguDDQgDAMgDANQghCEgeA3QgIARgJA3QgMBGgMCWQgDAbgCAaQgHBmgGBiQgQABgRACIxSABIgcgCIALjDQAAgNABgOQAFgxhqltQgDgKgDgKIhwlwQgCgGgCgHQhzlnBYmWg");
	this.shape_714.setTransform(369.3,219.1);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#ECB77F").s().p("AoUdDIALjDIABgbQAFgxhqltIgGgUIhwlwIgEgNQhzlnBYmWIAAgCQAch/Ash0IAohcQAUgxBOh9QAshGAlg3IBUjeQAFgFADgHQAMgdgkhDIgIgOIgohAIgJgPQjTl4Clj/IAQgXQA3hKBUg2IAagQQA4ggAqgIIAggGQG9hGgMEQIgCAPQgHBUgwBoQgZA4gaAoIgJAiIgFAgIATAdIA5BPQAMAQAKAPQARAbAHAaQAGAbgGAMIgBACQgGAIggAHIglAGQgNgCAMAdIABAFQAIAUABALQAAAEgCADIgPAOIgGAEIAFAKIAJASIADAHIADAFQAFALgEAIQgDAHgIANIgEAGIgHAKIgFAHQgKADACAQQAAAHADAJIACAEQAEAMAHAOQABAEAIAFQAKAHAUAHQAbAKAnAMIAQAEQAvAMAWAJQAeAJgKAGIh9AxIgfB/QgDAFgCAGQgHARAEAZQACAQAFAOIA3AsIAqAhIAZATICWBrQAsAuAoAyQCACgBUDXQAVA2AIBMIABAMIALB8IABAxIAEChIAAAIQAACtguDDIgGAZQghCEgeA3QgIARgJA3QgMBGgMCWIgFA1QgHBmgGBiIghADIxSABg");
	this.shape_715.setTransform(369.3,219.1);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#373535").ss(2.5).p("AsBA3QAch/Ash0IAohcQAUgxBOh9QAshGAlg3IBUjeQAFgFACgHQANgdgjhDQgEgHgEgGIgphBQgEgHgEgIQjUl4Clj/QAIgLAIgLQA3hLBUg2QANgJANgHQA4ggAqgIQAQgDAQgDQG8hHgMERQgBAIAAAHQgIBUgwBnQgZA5gaAoQgEAQgFASQgCAPgDAQQAJAPAKAPIA5BPQAMAPAKAPQARAbAGAaQAHAcgGALQgBACAAABQgGAIgfAHQgPADgXADQgMgCALAdQABACAAADQAIAUABALQAAAEgCACQgHAIgIAGQgDADgDACQADAFADAFQAEAJAEAIIADAHIADAFQAFAMgEAIQgDAHgIAMQgCADgCAEQgDAFgEAEQgCAEgDADQgKAEACAQQABAHACAIQABACABACQAEANAHAOQAAAEAIAEQAKAHAVAIQAaAKAnAMQAHACAIACQAtAMAWAJQAeAKgJAFIh7AwIgdB/QgDAFgBAGQgHARADAYQACARAFANIA2AsQAUAQAWARQAMAKANAKICVBsQAsAtAoAzQCACgBTDXQAWA2AHBLQABAGABAGQAKByABALQABAYAAAYIAEChQAAAEAAAEQABCuguDDQgDAMgDAMQghCEgeA4QgIARgKA2QgMBGgLCXQgDAagCAbQgHBlgFBiQgRACgRACIxSABIgbgDIALjCQAAgNABgPQAFgwhqltQgDgKgDgLIhwlvQgCgHgCgGQhzlnBYmWg");
	this.shape_716.setTransform(369.2,219.1);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#ECB77F").s().p("AoTdCIALjCIABgcQAFgwhqltIgGgVIhwlvIgEgNQhzlnBYmWIAAgCQAch/Ash0IAohcQAUgxBOh9QAshGAlg3IBUjeQAFgFACgHQANgdgjhDIgIgNIgphBIgIgPQjUl4Clj/IAQgWQA3hLBUg2IAagQQA4ggAqgIIAggGQG8hHgMERIgBAPQgIBUgwBnQgZA5gaAoIgJAiIgFAfIATAeIA5BPIAWAeQARAbAGAaQAHAcgGALIgBADQgGAIgfAHIgmAGQgMgCALAdIABAFQAIAUABALQAAAEgCACIgPAOIgGAFIAGAKIAIARIADAHIADAFQAFAMgEAIIgLATIgEAHIgHAJIgFAHQgKAEACAQQABAHACAIIACAEQAEANAHAOQAAAEAIAEQAKAHAVAIQAaAKAnAMIAPAEQAtAMAWAJQAeAKgJAFIh7AwIgdB/QgDAFgBAGQgHARADAYQACARAFANIA2AsIAqAhIAZAUICVBsQAsAtAoAzQCACgBTDXQAWA2AHBLIACAMIALB9IABAwIAEChIAAAIQABCuguDDIgGAYQghCEgeA4QgIARgKA2QgMBGgLCXIgFA1QgHBlgFBiIgiAEIxSABg");
	this.shape_717.setTransform(369.2,219.1);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#373535").ss(2.5).p("AsAA3QAch/Ash0IAohcQAUgxBOh9QAshGAlg3IBUjeQAFgFACgHQANgdgjhDQgEgHgEgGIgphBQgEgHgEgIQjUl4Clj/QAIgLAIgLQA2hLBUg2QAOgIANgIQA3ggAqgIQARgDAQgDQG8hHgMERQgBAIgBAHQgHBTgwBoQgaA4gaApQgEAQgEARQgDAQgDAQQAJAPAJAPIA5BOQANAQAJAPQASAbAGAaQAHAbgGAMQgBACAAABQgGAIgfAGQgOAEgXADQgNgCALAcQABADAAACQAHAUABAMQABAEgCACQgHAIgHAGQgDADgDACQACAFADAFQAEAJAEAIIACAHIADAFQAFALgEAIQgCAHgIANQgCADgCAEQgDAEgEAFQgCADgCAEQgKADABAQQABAHACAJQABACABACQADAMAIAOQAAAEAIAFQAKAHAUAHQAaALAmAMQAHACAIACQAsAMAVAJQAeAKgJAFIh3AwIgbB9QgDAFgCAGQgHARAEAYQACARAFAOIA1AsQATAQAWARQAMAKANAKICUBtQAsAtAoAzQCACgBTDWQAVA3AIBLQABAGAAAGQALByABAKQAAAZABAYIAEChQAAAEAAAEQABCtguDDQgDANgDAMQggCDgeA5QgJARgJA2QgMBFgMCXQgCAbgCAaQgHBmgFBiQgRACgQACIxSABIgbgDIALjDQAAgNABgOQAFgxhqlsQgDgKgDgLIhwlvQgCgHgCgGQhzlnBYmWg");
	this.shape_718.setTransform(369.1,219.1);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#ECB77F").s().p("AoSdCIALjDIABgbQAFgxhqlsIgGgVIhwlvIgEgNQhzlnBYmWIAAgCQAch/Ash0IAohcQAUgxBOh9QAshGAlg3IBUjeQAFgFACgHQANgdgjhDIgIgNIgphBIgIgPQjUl4Clj/IAQgWQA2hLBUg2IAbgQQA3ggAqgIIAhgGQG8hHgMERIgCAPQgHBTgwBoQgaA4gaApIgIAhIgGAgIASAeIA5BOQANAQAJAPQASAbAGAaQAHAbgGAMIgBADQgGAIgfAGQgOAEgXADQgNgCALAcIABAFQAHAUABAMQABAEgCACQgHAIgHAGIgGAFIAFAKIAIARIACAHIADAFQAFALgEAIQgCAHgIANIgEAHIgHAJIgEAHQgKADABAQQABAHACAJIACAEQADAMAIAOQAAAEAIAFQAKAHAUAHQAaALAmAMIAPAEQAsAMAVAJQAeAKgJAFIh3AwIgbB9QgDAFgCAGQgHARAEAYQACARAFAOIA1AsIApAhIAZAUICUBtQAsAtAoAzQCACgBTDWQAVA3AIBLIABAMIAMB8IABAxIAEChIAAAIQABCtguDDIgGAZQggCDgeA5QgJARgJA2QgMBFgMCXIgEA1QgHBmgFBiIghAEIxSABg");
	this.shape_719.setTransform(369.1,219.1);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#373535").ss(2.5).p("Ar/A3QAch/Ash0IAohcQAUgxBOh9QAshGAlg3IBUjeQAFgFACgHQANgdgjhDQgEgHgEgGIgphBQgEgHgEgHQjUl5Clj+QAHgMAIgLQA3hLBUg2QAOgIANgIQA3gfAqgJQARgDAPgDQG9hHgNERQgBAHAAAIQgIBTgwBoQgZA4gbAoQgEARgEARQgDAPgDARQAJAOAJAPIA5BPQAMAQAKAPQARAbAHAaQAHAbgGAMQgBABAAABQgFAJgfAGQgPAEgXADQgNgCALAcQABADAAACQAHAUABALQABAEgCACQgHAJgHAGQgDACgDADQADAFACAEQAEAJAEAJIACAHIADAEQAFAMgEAIQgCAHgIANQgCADgCADQgDAFgDAFQgDADgCAEQgKADACAQQAAAHACAJQABACABACQADAMAHAOQABAEAIAFQAKAHAUAHQAaALAkAMQAHACAHACQArANAWAIQAdAKgJAFIh0AwIgZB8QgDAFgBAGQgHARADAYQACARAFANIA0AtQATAQAVARQANAKAMAKICUBtQAsAuAoAzQCACgBTDWQAVA2AIBLQABAGAAAGQALByABALQAAAZABAYIAECgQAAAEAAAEQABCtgtDEQgDAMgDAMQghCEgdA4QgJASgJA1QgMBGgMCXQgCAagCAbQgHBlgFBiQgQACgQACIxSACIgbgDIALjDQAAgNABgOQAFgyhqlrQgDgLgDgKIhwlvQgCgHgCgGQhzlnBYmWg");
	this.shape_720.setTransform(369,219.1);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#ECB77F").s().p("AoRdCIALjDIABgbQAFgyhqlrIgGgVIhwlvIgEgNQhzlnBYmWIAAgCQAch/Ash0IAohcQAUgxBOh9QAshGAlg3IBUjeQAFgFACgHQANgdgjhDIgIgNIgphBIgIgOQjUl5Clj+IAPgXQA3hLBUg2IAbgQQA3gfAqgJIAggGQG9hHgNERIgBAPQgIBTgwBoQgZA4gbAoIgIAiIgGAgIASAdIA5BPIAWAfQARAbAHAaQAHAbgGAMIgBACQgFAJgfAGQgPAEgXADQgNgCALAcIABAFQAHAUABALQABAEgCACQgHAJgHAGIgGAFIAFAJIAIASIACAHIADAEQAFAMgEAIIgKAUIgEAGIgGAKIgFAHQgKADACAQQAAAHACAJIACAEQADAMAHAOQABAEAIAFQAKAHAUAHQAaALAkAMIAOAEQArANAWAIQAdAKgJAFIh0AwIgZB8IgEALQgHARADAYQACARAFANIA0AtIAoAhIAZAUICUBtQAsAuAoAzQCACgBTDWQAVA2AIBLIABAMIAMB9IABAxIAECgIAAAIQABCtgtDEIgGAYQghCEgdA4QgJASgJA1QgMBGgMCXIgEA1QgHBlgFBiIggAEIxSACg");
	this.shape_721.setTransform(369,219.1);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#373535").ss(2.5).p("Ar+A3QAch+Ash1IAnhcQAUgxBPh9QAshGAlg3IBUjeQAFgFACgHQANgcgjhEQgEgGgEgHIgphAQgEgIgEgHQjUl4Clj/QAHgMAIgLQA3hLBUg2QANgIANgIQA4gfAqgJQAQgDAQgDQG9hHgNERQgBAHgBAIQgIBTgwBoQgZA4gaAoQgFAQgEASQgDAPgCAQQAIAPAJAPIA5BPQAMAPAKAPQARAbAHAaQAGAbgFAMQAAACgBABQgFAJgfAGQgOAEgXADQgNgCAKAcQABADAAACQAHATABAMQAAAEgBACQgHAJgHAFQgDADgDACQADAFACAFQAEAJADAJIAGALQAFAMgEAIQgCAHgIAMQgBADgDAEQgDAFgDAEQgCAEgDADQgKAEACAQQAAAHACAIQABACABACQADAMAHAOQABAEAIAFQAKAHATAIQAaAKAjANQAHACAHACQAqANAVAIQAdAKgIAFIhyAwIgXB7QgCAEgCAGQgHARADAYQACARAFAOIA0AsQASAQAVASQAMAKANAKICTBuQAsAtAoAzQCACiBTDVQAVA2AIBLQAAAGABAGQALBxABAMQAAAYABAYIAEChQAAAEAAAEQACCtguDDQgDANgCAMQghCDgeA5QgIASgKA1QgMBFgLCXQgCAbgCAaQgHBmgFBhQgQADgQACIxSACIgagEIALjCQABgNAAgPQAEgyhqlqQgDgLgDgKIhvlvQgCgHgCgGQhzlnBYmXg");
	this.shape_722.setTransform(368.9,219.1);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#ECB77F").s().p("AoQdBIALjCIABgcQAEgyhqlqIgGgVIhvlvIgEgNQhzlnBYmXIAAgBQAch+Ash1IAnhcQAUgxBPh9QAshGAlg3IBUjeQAFgFACgHQANgcgjhEIgIgNIgphAIgIgPQjUl4Clj/IAPgXQA3hLBUg2IAagQQA4gfAqgJIAggGQG9hHgNERIgCAPQgIBTgwBoQgZA4gaAoIgJAiIgFAfIARAeIA5BPQAMAPAKAPQARAbAHAaQAGAbgFAMIgBADQgFAJgfAGQgOAEgXADQgNgCAKAcIABAFQAHATABAMQAAAEgBACQgHAJgHAFIgGAFIAFAKIAHASIAGALQAFAMgEAIQgCAHgIAMIgEAHIgGAJIgFAHQgKAEACAQIACAPIACAEQADAMAHAOQABAEAIAFQAKAHATAIIA9AXIAOAEQAqANAVAIQAdAKgIAFIhyAwIgXB7IgEAKQgHARADAYQACARAFAOIA0AsIAnAiIAZAUICTBuQAsAtAoAzQCACiBTDVQAVA2AIBLIABAMIAMB9IABAwIAEChIAAAIQACCtguDDIgFAZQghCDgeA5QgIASgKA1QgMBFgLCXIgEA1QgHBmgFBhIggAFIxSACg");
	this.shape_723.setTransform(368.9,219.1);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#373535").ss(2.5).p("Ar9A3QAch+Ash1IAnhcQAUgwBPh+QAshGAlg3IBUjdQAFgGACgHQANgcgjhEQgEgGgEgHIgphAQgEgIgEgHQjUl4Clj/QAHgLAIgMQA3hKBUg2QANgJANgIQA4gfApgJQARgDAQgCQG9hIgOERQAAAHgBAIQgIBTgwBnQgaA4gaApQgFAQgEARQgDAPgCARQAIAPAJAPIA5BPQAMAPAKAPQARAbAHAaQAGAbgFAMQAAABgBABQgFAKgfAGQgOADgXAEQgNgCAKAcQABACAAACQAHATABANQAAAEgBACQgHAIgHAGQgDADgDACQADAFACAFQAEAJADAIIADAHIADAFQAFALgEAIQgCAHgHANQgCADgCAEQgDAEgEAFQgCADgDAEQgJAEABAPQAAAHACAJQABACABACQADAMAHAOQABAEAHAFQAKAHAUAIQAZAKAiANQAHACAHACQApANAUAIQAdAKgIAFIhuAwIgVB5QgDAFgBAGQgHARADAYQACARAEANIAzAtQASAQAVASQAMALANAJICTBvQArAtAnAzQCBCiBSDUQAWA3AIBLQAAAGABAGQAKBwACAMQAAAZAAAYIAFChQAAAEAAAEQACCsgtDEQgDAMgDAMQggCEgeA5QgIASgKA0QgMBFgLCYQgCAagCAbQgHBlgFBiQgQADgPACIxSACIgagEIALjDQABgMAAgPQAEgyhqlrQgDgKgDgKIhvlwQgCgGgCgHQhzlmBYmXg");
	this.shape_724.setTransform(368.8,219.1);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#ECB77F").s().p("AoPdBIALjDIABgbQAEgyhqlrIgGgUIhvlwIgEgNQhzlmBYmXIAAgBQAch+Ash1IAnhcQAUgwBPh+QAshGAlg3IBUjdQAFgGACgHQANgcgjhEIgIgNIgphAIgIgPQjUl4Clj/IAPgXQA3hKBUg2IAagRQA4gfApgJIAhgFQG9hIgOERIgBAPQgIBTgwBnQgaA4gaApIgJAhIgFAgIARAeIA5BPQAMAPAKAPQARAbAHAaQAGAbgFAMIgBACQgFAKgfAGIglAHQgNgCAKAcIABAEQAHATABANQAAAEgBACQgHAIgHAGIgGAFIAFAKIAHARIADAHIADAFQAFALgEAIQgCAHgHANIgEAHIgHAJIgFAHQgJAEABAPIACAQIACAEQADAMAHAOQABAEAHAFQAKAHAUAIIA7AXIAOAEQApANAUAIQAdAKgIAFIhuAwIgVB5IgEALQgHARADAYQACARAEANIAzAtIAnAiIAZAUICTBvQArAtAnAzQCBCiBSDUQAWA3AIBLIABAMIAMB8IAAAxIAFChIAAAIQACCsgtDEIgGAYQggCEgeA5QgIASgKA0QgMBFgLCYIgEA1QgHBlgFBiIgfAFIxSACg");
	this.shape_725.setTransform(368.8,219.1);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#373535").ss(2.5).p("Ar8A3QAch+Ash1IAnhcQAUgwBPh+QAshGAlg3IBUjdQAFgGACgGQANgdgjhEQgEgGgEgHIgphAQgEgIgEgHQjUl4Clj/QAHgLAIgLQA3hLBTg2QAOgJANgHQA3ggAqgJQARgDAPgCQG+hIgOEQQgBAIgBAIQgIBTgwBnQgZA4gbAoQgEARgFARQgDAPgCARQAIAOAJAPIA4BPQANAQAJAPQASAbAHAaQAGAagFAMQAAACgBABQgFAKgeAGQgOADgYAEQgMgCAJAbQABADAAACQAGATACAMQAAAEgBACQgHAJgHAGQgCADgDACQACAFACAFQAEAIADAJIADAHIACAEQAFAMgDAIQgCAHgHAMQgCAEgCADQgDAFgDAFQgDADgCAEQgKADABAQQAAAHADAIQAAACABACQADAMAHAPQABAEAHAEQAKAIAUAIQAZAKAhANQAGACAHACQAnANAUAJQAdAJgIAFIhrAvIgTB5QgCAFgCAFQgHARADAYQACARAEAOIAyAtQASAQAVASQAMALAMAJICTBvQArAuAnAzQCBCiBSDUQAVA3AIBKQABAGABAGQAKBwACANQAAAZAAAXIAFChQAAAEAAAEQADCsguDFQgCAMgDAMQghCDgdA5QgJATgJA0QgMBEgLCYQgCAbgCAaQgHBmgFBhQgPADgQADIxRACIgagEIALjDQABgNAAgOQAEgzhqlqQgDgKgDgLIhvlvQgCgGgCgHQhzlnBYmWg");
	this.shape_726.setTransform(368.7,219.1);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#ECB77F").s().p("AoOdBIALjDIABgbQAEgzhqlqIgGgVIhvlvIgEgNQhzlnBYmWIAAgBQAch+Ash1IAnhcQAUgwBPh+QAshGAlg3IBUjdQAFgGACgGQANgdgjhEIgIgNIgphAIgIgPQjUl4Clj/IAPgWQA3hLBTg2IAbgQQA3ggAqgJIAggFQG+hIgOEQIgCAQQgIBTgwBnQgZA4gbAoIgJAiIgFAgIARAdIA4BPQANAQAJAPQASAbAHAaQAGAagFAMIgBADQgFAKgeAGQgOADgYAEQgMgCAJAbIABAFQAGATACAMQAAAEgBACQgHAJgHAGIgFAFIAEAKIAHARIADAHIACAEQAFAMgDAIQgCAHgHAMIgEAHIgGAKIgFAHQgKADABAQQAAAHADAIIABAEQADAMAHAPQABAEAHAEQAKAIAUAIIA6AXIANAEQAnANAUAJQAdAJgIAFIhrAvIgTB5IgEAKQgHARADAYQACARAEAOIAyAtIAnAiIAYAUICTBvQArAuAnAzQCBCiBSDUQAVA3AIBKIACAMIAMB9IAAAwIAFChIAAAIQADCsguDFIgFAYQghCDgdA5QgJATgJA0QgMBEgLCYIgEA1QgHBmgFBhIgfAGIxRACg");
	this.shape_727.setTransform(368.7,219.1);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#373535").ss(2.5).p("Ar7A3QAch+Ash1IAnhbQAUgxBPh+QAshFAlg4IBUjdQAFgFACgHQANgdgjhDQgEgHgEgHIgphAQgEgHgEgIQjUl4Ckj+QAIgMAIgLQA2hLBUg2QAOgJANgHQA3ggAqgIQAQgEAQgCQG+hIgPEQQAAAIgBAHQgJBUgwBnQgZA3gbApQgEAQgFASQgDAPgCAQQAIAPAIAPIA5BPQAMAPAKAPQASAbAHAaQAGAbgFAMQAAACgBABQgFAJgeAHQgOADgXAEQgNgCAJAbQABADAAACQAGASACANQAAAEgBACQgHAJgGAFQgDADgDADQADAFACAEQADAJADAJIACAGIADAFQAFALgDAJQgCAGgHANQgCADgCAEQgDAFgDAEQgDAEgCADQgKAEABAQQAAAGADAJQAAACABACQADAMAHAOQAAAEAIAFQAKAIATAHQAZALAgANQAGACAHACQAmANATAJQAdAJgHAFIhoAvIgSB3QgCAFgBAGQgHARADAYQACAQAEAOIAxAuQARAQAVASQAMALAMAJICSBwQArAuAnAzQCACiBTDUQAVA2AIBLQABAGABAGQAKBvABANQABAZAAAYIAFChQAAAEAAAEQADCsgtDEQgDANgDAMQggCDgdA5QgJASgJA0QgNBEgKCZQgCAagCAbQgHBlgFBiQgPADgPADIxSACIgZgFIALjCQABgNAAgPQAEgzhqlpQgDgKgDgLIhvlvQgCgGgCgHQhzlnBYmWg");
	this.shape_728.setTransform(368.6,219.1);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#ECB77F").s().p("AoNdAIALjCIABgcQAEgzhqlpIgGgVIhvlvIgEgNQhzlnBYmWIAAgBQAch+Ash1IAnhbQAUgxBPh+QAshFAlg4IBUjdQAFgFACgHQANgdgjhDIgIgOIgphAIgIgPQjUl4Ckj+IAQgXQA2hLBUg2IAbgQQA3ggAqgIIAggGQG+hIgPEQIgBAPQgJBUgwBnQgZA3gbApIgJAiIgFAfIAQAeIA5BPIAWAeQASAbAHAaQAGAbgFAMIgBADQgFAJgeAHQgOADgXAEQgNgCAJAbIABAFQAGASACANQAAAEgBACQgHAJgGAFIgGAGIAFAJIAGASIACAGIADAFQAFALgDAJQgCAGgHANIgEAHIgGAJIgFAHQgKAEABAQQAAAGADAJIABAEQADAMAHAOQAAAEAIAFQAKAIATAHIA5AYIANAEQAmANATAJQAdAJgHAFIhoAvIgSB3IgDALQgHARADAYQACAQAEAOIAxAuIAmAiIAYAUICSBwQArAuAnAzQCACiBTDUQAVA2AIBLIACAMIALB8IABAxIAFChIAAAIQADCsgtDEIgGAZQggCDgdA5QgJASgJA0QgNBEgKCZIgEA1QgHBlgFBiIgeAGIxSACg");
	this.shape_729.setTransform(368.6,219.1);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("#373535").ss(2.5).p("Ar6A3QAch+Ash1IAnhbQAUgxBPh+QAshFAlg4IBUjdQAEgFADgHQANgdgjhDQgEgHgEgHIgphAQgEgHgEgIQjUl3Ckj/QAIgMAIgLQA2hLBUg2QANgIANgIQA4ggAqgIQAQgEAQgCQG+hIgPEQQgBAIgBAHQgIBUgwBnQgaA3gbApQgEAQgFARQgDAPgCARQAIAPAIAPIA5BPQAMAPAKAPQASAbAGAaQAHAagFANQAAABgBABQgFAKgdAHQgOADgYAEQgNgCAJAbQABACAAACQAGATACAMQAAAEgBADQgHAIgGAGQgDADgDACQADAGACAEQADAJADAIIACAHIADAFQAFALgDAIQgCAHgHANQgCADgCADQgDAFgDAFQgCADgDAEQgJAEABAPQAAAHACAJQAAACABACQACALAIAPQAAAEAIAFQAJAHAUAIQAYALAfANQAGACAHACQAlANASAJQAdAJgHAFIhlAvIgPB2QgDAFAAAFQgHARACAYQACARAEAOIAwAuQARAQAVASQALALAMAJICSBwQArAuAnAzQCACjBSDTQAWA3AIBKQABAGAAAGQALBvABAOQABAZAAAYIAFCgQAAAEAAAEQADCsgtDFQgCAMgDAMQggCDgdA6QgJASgKA0QgMBDgLCZQgCAbgCAaQgGBmgEBhQgQAEgPADIxRACIgZgFIALjCQABgNgBgPQAFg0hqloQgDgLgDgKIhvlvQgCgGgCgHQhzlnBYmWg");
	this.shape_730.setTransform(368.5,219.1);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#ECB77F").s().p("AoMdAIALjCQABgNgBgPQAFg0hqloIgGgVIhvlvIgEgNQhzlnBYmWIAAgBQAch+Ash1IAnhbQAUgxBPh+QAshFAlg4IBUjdQAEgFADgHQANgdgjhDIgIgOIgphAIgIgPQjUl3Ckj/IAQgXQA2hLBUg2IAagQQA4ggAqgIIAggGQG+hIgPEQIgCAPQgIBUgwBnQgaA3gbApIgJAhIgFAgIAQAeIA5BPIAWAeQASAbAGAaQAHAagFANIgBACQgFAKgdAHQgOADgYAEQgNgCAJAbIABAEQAGATACAMQAAAEgBADQgHAIgGAGIgGAFIAFAKIAGARIACAHIADAFQAFALgDAIQgCAHgHANIgEAGIgGAKIgFAHQgJAEABAPQAAAHACAJIABAEQACALAIAPQAAAEAIAFQAJAHAUAIIA3AYIANAEQAlANASAJQAdAJgHAFIhlAvIgPB2QgDAFAAAFQgHARACAYQACARAEAOIAwAuIAmAiIAXAUICSBwQArAuAnAzQCACjBSDTQAWA3AIBKIABAMIAMB9IABAxIAFCgIAAAIQADCsgtDFIgFAYQggCDgdA6QgJASgKA0QgMBDgLCZIgEA1QgGBmgEBhIgfAHIxRACg");
	this.shape_731.setTransform(368.5,219.1);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#373535").ss(2.5).p("Ar5A3QAch+Ash1IAnhbQAUgxBPh9QAshGAlg4IBUjdQAEgFADgHQANgdgjhDQgEgHgEgGIgphBQgEgHgEgIQjTl3Cjj/QAIgMAHgLQA3hLBUg2QANgIANgIQA3ggAqgIQARgEAPgCQG+hIgPEQQAAAHgBAIQgJBUgwBmQgZA4gbApQgFAQgFARQgDAPgCARQAIAOAIAQIA5BOQAMAQAKAPQARAbAHAaQAHAagFAMQAAACgBABQgEAKgeAHQgOADgXAEQgNgCAIAaQABADAAACQAFASADANQAAAEgBACQgGAJgHAGQgDADgDACQADAFACAFQADAJADAIIACAGIADAFQAFAMgDAIQgCAHgHAMQgCADgCAEQgCAFgEAEQgCAEgDAEQgJADABAQQAAAHACAIQAAACABACQACAMAHAOQABAEAHAFQAKAIATAIQAZALAdANQAGACAGACQAkAOATAIQAcAJgHAFIhhAvIgOB1QgCAEgBAGQgHARADAYQABAQAEAOIAvAuQARAQAUATQAMALAMAKICRBwQArAuAnAzQCACjBSDTQAVA3AJBKQABAGAAAGQALBvABAOQABAYAAAYIAFChQAAAEAAAEQAECrgtDFQgDANgDAMQggCDgdA5QgIATgKAzQgMBDgLCaQgCAagCAbQgGBlgEBiQgPADgPADIxRADIgZgFIALjDQABgMgBgPQAEg1hploQgDgKgDgKIhvlvQgCgHgCgGQhzlnBYmWg");
	this.shape_732.setTransform(368.4,219.1);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#ECB77F").s().p("AoLdAIALjDQABgMgBgPQAEg1hploIgGgUIhvlvIgEgNQhzlnBYmWIAAgBQAch+Ash1IAnhbQAUgxBPh9QAshGAlg4IBUjdQAEgFADgHQANgdgjhDIgIgNIgphBIgIgPQjTl3Cjj/IAPgXQA3hLBUg2IAagQQA3ggAqgIIAggGQG+hIgPEQIgBAPQgJBUgwBmQgZA4gbApIgKAhIgFAgIAQAeIA5BOQAMAQAKAPQARAbAHAaQAHAagFAMIgBADQgEAKgeAHQgOADgXAEQgNgCAIAaIABAFQAFASADANIgBAGQgGAJgHAGIgGAFIAFAKIAGARIACAGIADAFQAFAMgDAIQgCAHgHAMIgEAHIgGAJIgFAIQgJADABAQQAAAHACAIIABAEQACAMAHAOQABAEAHAFQAKAIATAIIA2AYIAMAEQAkAOATAIQAcAJgHAFIhhAvIgOB1QgCAEgBAGQgHARADAYQABAQAEAOIAvAuIAlAjIAYAVICRBwQArAuAnAzQCACjBSDTQAVA3AJBKIABAMIAMB9IABAwIAFChIAAAIQAECrgtDFIgGAZQggCDgdA5QgIATgKAzQgMBDgLCaIgEA1QgGBlgEBiIgeAGIxRADg");
	this.shape_733.setTransform(368.4,219.1);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#373535").ss(2.5).p("Ar4A3QAch+Ash1IAnhbQAUgxBPh9QAshGAlg4IBUjdQAEgFADgHQANgcgjhEQgEgHgEgGIgphBQgEgHgEgHQjTl4Cjj/QAHgLAIgLQA3hLBTg3QAOgIANgIQA3gfAqgJQAQgEAQgCQG+hIgPEQQgBAHgBAIQgIBTgxBnQgZA3gbApQgFAQgFASQgDAPgCAQQAIAPAIAPIA5BPQAMAPAKAPQARAbAHAaQAHAagFANQAAABgBACQgEAKgeAGQgNAEgYAEQgNgCAIAaQABADAAACQAFARADAOQAAAEgBACQgGAJgHAGQgCADgDACQACAFACAEQADAJADAJIACAGIADAFQAFALgEAIQgBAHgHANQgBADgCAEQgDAFgEAEQgCAEgCADQgKAEABAQQAAAGACAJQAAACABACQACALAHAPQABAEAHAFQAKAIATAIQAYALAcANQAGACAGACQAjAOASAIQAcAJgGAFIhfAuIgMB0QgCAFAAAFQgHARACAYQACARAEANIAuAvQAQAQAUATQAMALAMAKICQBxQArAuAnAzQCACjBSDTQAVA3AJBKQAAAGABAGQALBuABAOQABAZAAAYIAFCgQAAAEAAAEQAECsgsDFQgDAMgDAMQggCDgdA6QgJATgJAzQgNBCgKCaQgCAbgCAaQgGBmgEBhQgPAEgPADIxRADIgYgFIALjDQABgMgBgQQAEg0hploQgDgKgDgKIhvlvQgCgHgCgGQhzlnBYmWg");
	this.shape_734.setTransform(368.3,219.1);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#ECB77F").s().p("AoKdAIALjDQABgMgBgQQAEg0hploIgGgUIhvlvIgEgNQhzlnBYmWIAAgBQAch+Ash1IAnhbQAUgxBPh9QAshGAlg4IBUjdQAEgFADgHQANgcgjhEIgIgNIgphBIgIgOQjTl4Cjj/IAPgWQA3hLBTg3IAbgQQA3gfAqgJIAggGQG+hIgPEQIgCAPQgIBTgxBnQgZA3gbApIgKAiIgFAfIAQAeIA5BPQAMAPAKAPQARAbAHAaQAHAagFANIgBADQgEAKgeAGQgNAEgYAEQgNgCAIAaIABAFQAFARADAOIgBAGQgGAJgHAGIgFAFIAEAJIAGASIACAGIADAFQAFALgEAIQgBAHgHANIgDAHIgHAJIgEAHQgKAEABAQQAAAGACAJIABAEQACALAHAPQABAEAHAFQAKAIATAIIA0AYIAMAEQAjAOASAIQAcAJgGAFIhfAuIgMB0QgCAFAAAFQgHARACAYQACARAEANIAuAvIAkAjIAYAVICQBxQArAuAnAzQCACjBSDTQAVA3AJBKIABAMIAMB8IABAxIAFCgIAAAIQAECsgsDFIgGAYQggCDgdA6QgJATgJAzQgNBCgKCaIgEA1QgGBmgEBhIgeAHIxRADg");
	this.shape_735.setTransform(368.3,219.1);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#373535").ss(2.5).p("Ar3A3QAch+Ash1IAnhbQAUgxBPh9QAshGAlg3IBUjeQAEgFADgHQANgcgjhEQgEgGgEgHIgohAQgFgIgEgHQjTl4Cjj+QAHgMAIgLQA3hLBTg2QANgJANgIQA4gfAqgJQAQgEAQgCQG+hIgQEQQAAAHgBAIQgJBTgwBnQgaA3gbApQgFAQgFARQgCAPgDARQAIAPAIAPIA4BPQANAPAJAPQASAbAHAaQAHAagFAMQAAACgBABQgEALgdAGQgOAEgYADQgMgBAHAaQABACAAACQAFASACANQABAEgCADQgFAIgHAGQgCADgDADQACAFACAEQADAJADAIIACAHIACAFQAFALgDAIQgBAHgHAMQgBAEgCADQgDAFgDAFQgDADgCAEQgKAEABAPQAAAHACAJQAAABABACQACAMAHAOQABAFAHAEQAKAIATAJQAXALAcANQAFACAGADQAiANARAIQAcAJgGAFIhbAuIgKBzQgCAEgBAGQgHARADAYQABAQAEAOIAtAvQAQAQAUATQALALAMAKICQBxQArAuAnAzQCACkBSDSQAVA4AIBJQABAGABAGQALBuABAPQABAZAAAYIAECgQAAAEAAAEQAFCrgsDFQgDANgDAMQgfCDgdA5QgJAUgKAyQgMBCgKCbQgCAagCAbQgGBlgEBiQgPAEgOADIxRADIgYgGIALjCQABgNgBgPQAEg1hplnQgDgKgDgLIhvluQgCgHgCgGQhzlnBYmWg");
	this.shape_736.setTransform(368.2,219.1);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#ECB77F").s().p("AoJc/IALjCQABgNgBgPQAEg1hplnIgGgVIhvluIgEgNQhzlnBYmWIAAgBQAch+Ash1IAnhbQAUgxBPh9QAshGAlg3IBUjeQAEgFADgHQANgcgjhEIgIgNIgohAIgJgPQjTl4Cjj+IAPgXQA3hLBTg2IAagRQA4gfAqgJIAggGQG+hIgQEQIgBAPQgJBTgwBnQgaA3gbApIgKAhIgFAgIAQAeIA4BPQANAPAJAPQASAbAHAaQAHAagFAMIgBADQgEALgdAGQgOAEgYADQgMgBAHAaIABAEQAFASACANQABAEgCADQgFAIgHAGIgFAGIAEAJIAGARIACAHIACAFQAFALgDAIQgBAHgHAMIgDAHIgGAKIgFAHQgKAEABAPQAAAHACAJIABADQACAMAHAOQABAFAHAEQAKAIATAJIAzAYIALAFQAiANARAIQAcAJgGAFIhbAuIgKBzQgCAEgBAGQgHARADAYQABAQAEAOIAtAvIAkAjIAXAVICQBxQArAuAnAzQCACkBSDSQAVA4AIBJIACAMIAMB9IABAxIAECgIAAAIQAFCrgsDFIgGAZQgfCDgdA5QgJAUgKAyQgMBCgKCbIgEA1QgGBlgEBiIgdAHIxRADg");
	this.shape_737.setTransform(368.2,219.1);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("#373535").ss(2.5).p("Ar2A3QAch+Ash1IAnhbQAUgxBPh9QAshGAkg3IBVjeQAEgFADgHQANgcgjhEQgEgGgEgHIgohAQgEgIgFgHQjTl4Cjj+QAHgMAIgLQA2hLBUg2QANgJANgHQA3ggAqgJQARgEAPgCQG/hIgQEPQgBAIgBAIQgJBTgwBnQgaA3gbApQgFAQgFARQgCAPgDARQAIAPAHAPIA5BOQAMAQAKAPQASAbAHAZQAHAagFANQAAACgBABQgEALgdAGQgNAEgYADQgNgBAHAZQABADAAACQAFARACAOQABAEgCACQgFAJgHAGQgCADgDACQADAFACAFQACAJADAIIABAGIADAFQAFALgDAJQgBAHgHAMQgBADgCAEQgDAFgDAEQgCAEgDAEQgJADAAAQQAAAHACAIQAAACABACQACALAHAPQAAAEAIAFQAJAIATAIQAYAMAaANQAFACAGADQAgANARAJQAcAIgGAFIhYAuIgIBxQgCAFAAAFQgHARACAYQABARAEANIAtAvQAPARAUATQALALAMAKICPByQAqAuAoAzQCACkBRDSQAWA3AIBKQABAGABAGQALBtABAQQABAYAAAYIAEChQAAAEAAAEQAGCqgsDGQgDAMgDANQgfCCgdA6QgJAUgKAyQgMBBgKCbQgCAbgCAaQgGBmgEBhQgOAEgPAEIxQADIgYgGIALjCQABgNgBgPQAEg2hplmQgDgKgDgLIhvluQgCgHgCgGQhzlnBYmWg");
	this.shape_738.setTransform(368.1,219.1);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#ECB77F").s().p("AoIc/IALjCQABgNgBgPQAEg2hplmIgGgVIhvluIgEgNQhzlnBYmWIAAgBQAch+Ash1IAnhbQAUgxBPh9QAshGAkg3IBVjeQAEgFADgHQANgcgjhEIgIgNIgohAIgJgPQjTl4Cjj+IAPgXQA2hLBUg2IAagQQA3ggAqgJIAggGQG/hIgQEPIgCAQQgJBTgwBnQgaA3gbApIgKAhIgFAgIAPAeIA5BOIAWAfQASAbAHAZQAHAagFANIgBADQgEALgdAGQgNAEgYADQgNgBAHAZIABAFQAFARACAOQABAEgCACQgFAJgHAGIgFAFIAFAKIAFARIABAGIADAFQAFALgDAJQgBAHgHAMIgDAHIgGAJIgFAIQgJADAAAQIACAPIABAEQACALAHAPQAAAEAIAFQAJAIATAIIAyAZIALAFQAgANARAJQAcAIgGAFIhYAuIgIBxQgCAFAAAFQgHARACAYQABARAEANIAtAvIAjAkIAXAVICPByQAqAuAoAzQCACkBRDSQAWA3AIBKIACAMIAMB9IABAwIAEChIAAAIQAGCqgsDGIgGAZQgfCCgdA6QgJAUgKAyQgMBBgKCbIgEA1QgGBmgEBhIgdAIIxQADg");
	this.shape_739.setTransform(368.1,219.1);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#373535").ss(2.5).p("Ar1A3QAch+Ash1IAnhbQAUgxBPh9QAshGAkg3IBVjdQAEgGADgHQANgcgjhEQgDgGgEgHIgphAQgEgIgEgHQjUl3Cjj/QAHgMAIgLQA2hLBUg2QANgJANgHQA3ggAqgJQAQgEAQgCQG/hIgREPQAAAIgBAHQgJBUgxBmQgZA3gbApQgFAQgGASQgCAPgDAQQAIAPAHAPIA5BPQAMAQAKAPQASAaAHAaQAHAagFANQAAABgBABQgEALgcAHQgOAEgYADQgNgBAHAZQABADAAACQAEARADAOQABAEgCACQgFAJgGAGQgDADgDACQADAFACAFQACAIADAJIABAGIADAFQAFALgDAIQgBAHgGANQgCADgCADQgCAFgEAFQgCADgDAEQgJAEABAPQgBAHACAJQAAACABACQACALAHAPQAAAEAHAFQAKAIATAIQAXAMAZANQAFACAGADQAfANAQAJQAcAJgFAEIhWAuIgGBwQgBAEgBAGQgHARACAYQACAQADAOIAsAvQAPARAUATQALALAMAKICOByQAqAvAnAzQCBCkBRDSQAVA3AJBJQABAGABAGQALBtABAQQABAZAAAYIAECgQAAAEAAAEQAGCqgsDHQgDAMgCAMQggCDgdA6QgIAUgKAxQgNBBgJCcQgCAagCAbQgGBlgEBiQgOAEgOAEIxQADIgYgGIALjDQABgMgBgPQADg3hollQgDgLgDgKIhvlvQgCgGgCgHQhzlmBYmWg");
	this.shape_740.setTransform(368,219.1);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#ECB77F").s().p("AoHc/IALjDQABgMgBgPQADg3hollIgGgVIhvlvIgEgNQhzlmBYmWIAAgBQAch+Ash1IAnhbQAUgxBPh9IBQh9IBVjdQAEgGADgHQANgcgjhEIgHgNIgphAIgIgPQjUl3Cjj/IAPgXQA2hLBUg2IAagQQA3ggAqgJIAggGQG/hIgREPIgBAPQgJBUgxBmQgZA3gbApIgLAiIgFAfIAPAeIA5BPQAMAQAKAPQASAaAHAaQAHAagFANIgBACQgEALgcAHQgOAEgYADQgNgBAHAZIABAFIAHAfQABAEgCACQgFAJgGAGIgGAFIAFAKIAFARIABAGIADAFQAFALgDAIQgBAHgGANIgEAGIgGAKIgFAHQgJAEABAPQgBAHACAJIABAEQACALAHAPQAAAEAHAFQAKAIATAIIAwAZIALAFQAfANAQAJQAcAJgFAEIhWAuIgGBwIgCAKQgHARACAYQACAQADAOIAsAvIAjAkIAXAVICOByQAqAvAnAzQCBCkBRDSQAVA3AJBJIACAMIAMB9IABAxIAECgIAAAIQAGCqgsDHIgFAYQggCDgdA6QgIAUgKAxQgNBBgJCcIgEA1QgGBlgEBiIgcAIIxQADg");
	this.shape_741.setTransform(368,219.1);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#373535").ss(2.5).p("Ar0A3QAch+Ash1IAnhbQAUgxBPh9QAshGAkg3IBVjdQAEgGADgGQAOgdgkhDQgDgHgEgHIgphAQgEgHgEgIQjUl3Cij/QAIgLAIgMQA2hLBTg2QAOgIANgIQA3ggAqgJQAQgDAQgDQG/hIgREPQgBAIgBAHQgJBUgwBmQgaA3gbApQgFAQgGARQgCAPgDARQAIAPAHAPIA5BPQAMAPAKAPQARAbAIAaQAGAagEAMQAAACgBABQgEALgcAHQgNAEgYADQgNgBAGAZQABACAAACQAEARADAOQAAAEgBADQgFAIgGAGQgDADgCADQACAFACAEQACAJACAIIACAHIADAEQAFAMgDAIQgBAHgGAMQgCAEgCADQgCAFgDAFQgDADgCAEQgKAEABAPQgBAHACAIQAAACABACQABALAHAPQABAEAHAFQAKAIASAJQAXALAYAOQAFADAFACQAfANAQAJQAbAJgFAEIhSAtIgEBwQgCAEAAAFQgHARACAYQABARADANIArAwQAPAQATAUQALALAMAKICOBzQAqAvAnAzQCBCkBRDSQAVA3AJBJQABAGAAAGQAMBsABARQABAZAAAXIAEChQAAAEAAAEQAHCqgsDGQgDANgDAMQgfCCgdA6QgJAUgKAyQgMBAgKCcQgBAbgCAaQgGBmgEBhQgOAFgOAEIxQADIgXgHIALjCQABgMgBgQQADg2holmQgDgKgDgKIhvlvQgCgGgCgHQhzlmBYmWg");
	this.shape_742.setTransform(367.9,219.1);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#ECB77F").s().p("AoGc+IALjCQABgMgBgQQADg2holmIgGgUIhvlvIgEgNQhzlmBYmWIAAgBQAch+Ash1IAnhbQAUgxBPh9IBQh9IBVjdQAEgGADgGQAOgdgkhDIgHgOIgphAIgIgPQjUl3Cij/IAQgXQA2hLBTg2IAbgQQA3ggAqgJIAggGQG/hIgREPIgCAPQgJBUgwBmQgaA3gbApIgLAhIgFAgIAPAeIA5BPIAWAeQARAbAIAaQAGAagEAMIgBADQgEALgcAHQgNAEgYADQgNgBAGAZIABAEIAHAfIgBAHQgFAIgGAGIgFAGIAEAJIAEARIACAHIADAEQAFAMgDAIQgBAHgGAMIgEAHIgFAKIgFAHQgKAEABAPQgBAHACAIIABAEQABALAHAPQABAEAHAFQAKAIASAJQAXALAYAOIAKAFQAfANAQAJQAbAJgFAEIhSAtIgEBwIgCAJQgHARACAYQABARADANIArAwIAiAkIAXAVICOBzQAqAvAnAzQCBCkBRDSQAVA3AJBJIABAMIANB9IABAwIAEChIAAAIQAHCqgsDGIgGAZQgfCCgdA6QgJAUgKAyQgMBAgKCcIgDA1QgGBmgEBhIgcAJIxQADg");
	this.shape_743.setTransform(367.9,219.1);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("#373535").ss(2.5).p("ArzA3QAch+Ash1IAnhbQAUgwBPh+QAshGAkg3IBVjdQAEgFACgHQAPgcgjhEQgEgHgEgHIgphAQgEgHgEgIQjUl3Cij+QAIgMAIgLQA2hLBTg3QANgIANgIQA4ggApgJQARgDAPgDQHAhJgSEQQAAAIgBAHQgJBUgxBmQgaA3gbApQgFAQgGARQgCAPgDARQAHAPAIAPIA4BPQANAPAJAPQASAbAIAZQAGAagEANQAAACgBABQgEALgcAHQgNADgYAEQgNgBAGAZQABACAAACQAEAQADAPQAAAEgBACQgFAJgGAGQgCADgDADQACAFACAEQACAJACAIIACAGIACAFQAFALgCAIQgBAIgGAMQgCADgBAEQgDAFgDAEQgDAEgCADQgJAFAAAPQgBAHACAIQAAACABACQABALAHAPQABAEAHAFQAJAIATAJQAXALAWAOQAFADAFACQAdANAQAJQAbAJgFAEIhPAtIgCBuQgBAFgBAFQgHARACAYQABAQAEAOIAqAwQAOAQATAUQALALAMAKICNB0QAqAuAnAzQCBClBRDRQAVA4AJBJQAAAGABAGQALBsACARQABAYgBAYIAFCgQAAAEAAAEQAHCqgsDHQgDAMgCAMQgfCDgdA6QgJAUgKAxQgNBAgJCdQgCAagBAbQgGBlgEBiQgNAEgOAFIxQADIgXgHIALjCQABgNgBgPQADg3hollQgDgKgDgKIhvlvQgCgGgCgHQhzlmBYmWg");
	this.shape_744.setTransform(367.8,219.1);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#ECB77F").s().p("AoFc+IALjCQABgNgBgPQADg3hollIgGgUIhvlvIgEgNQhzlmBYmWIAAgBQAch+Ash1IAnhbQAUgwBPh+IBQh9IBVjdQAEgFACgHQAPgcgjhEIgIgOIgphAIgIgPQjUl3Cij+IAQgXQA2hLBTg3IAagQQA4ggApgJIAggGQHAhJgSEQIgBAPQgJBUgxBmQgaA3gbApIgLAhIgFAgIAPAeIA4BPQANAPAJAPQASAbAIAZQAGAagEANIgBADQgEALgcAHQgNADgYAEQgNgBAGAZIABAEIAHAfQAAAEgBACQgFAJgGAGIgFAGIAEAJIAEARIACAGIACAFQAFALgCAIQgBAIgGAMIgDAHIgGAJIgFAHQgJAFAAAPQgBAHACAIIABAEQABALAHAPQABAEAHAFQAJAIATAJQAXALAWAOIAKAFQAdANAQAJQAbAJgFAEIhPAtIgCBuIgCAKQgHARACAYQABAQAEAOIAqAwQAOAQATAUIAXAVICNB0QAqAuAnAzQCBClBRDRQAVA4AJBJIABAMIANB9IAAAwIAFCgIAAAIQAHCqgsDHIgFAYQgfCDgdA6QgJAUgKAxQgNBAgJCdIgDA1QgGBlgEBiIgbAJIxQADg");
	this.shape_745.setTransform(367.8,219.1);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("#373535").ss(2.5).p("AryA3QAch+Ash1IAnhbQAUgwBPh+QAshGAkg3IBVjdQAEgFACgHQAPgcgjhEQgEgHgEgGIgphBQgEgHgEgHQjUl4Cij+QAIgMAHgLQA3hLBTg2QANgJANgIQA3gfAqgKQARgDAPgDQHAhJgSEQQgBAHAAAIQgKBUgxBmQgZA2gcAqQgFAQgFARQgDAPgDAQQAHAPAIAQIA4BOQAMAQAKAPQASAaAHAaQAHAagEANQAAABgBABQgDAMgcAHQgNADgZAEQgMgBAGAYQAAADAAACQAEAQADAPQAAAEgBACQgFAJgGAGQgCADgDACQADAGABAEQACAJACAIIACAGIACAFQAFALgCAIQgBAHgGAMQgBAEgCADQgDAFgDAFQgCADgDAEQgJAEAAAPQAAAHABAJQABACAAABQABALAHAPQABAFAHAFQAJAIATAJQAWALAWAOQAEADAFACQAcAOAPAIQAbAJgEAFIhMAsIAABtQgCAEAAAFQgHASACAXQABARADANIApAxQAOAQATAUQALALAMAKICMB0QAqAvAnAzQCBClBQDRQAWA3AJBJQAAAGABAGQALBsACARQABAZgBAYIAFCgQAAAEAAAEQAHCpgrDHQgDANgDAMQgfCCgcA7QgJAUgKAxQgNA/gJCdQgCAbgBAbQgGBlgDBhQgOAFgOAEIxPAEIgXgHIALjCQABgNgBgPQADg4holkQgDgKgDgKIhvlvQgCgGgCgHQhylmBXmWg");
	this.shape_746.setTransform(367.7,219.1);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#ECB77F").s().p("AoEc+IALjCIAAgcQADg4holkIgGgUIhvlvIgEgNQhylmBXmWIAAgBQAch+Ash1IAnhbQAUgwBPh+QAshGAkg3IBVjdQAEgFACgHQAPgcgjhEIgIgNIgphBIgIgOQjUl4Cij+IAPgXQA3hLBTg2IAagRQA3gfAqgKIAggGQHAhJgSEQIgBAPQgKBUgxBmQgZA2gcAqIgKAhIgGAfIAPAfIA4BOIAWAfQASAaAHAaQAHAagEANIgBACQgDAMgcAHQgNADgZAEQgMgBAGAYIAAAFIAHAfQAAAEgBACQgFAJgGAGIgFAFIAEAKIAEARIACAGIACAFQAFALgCAIQgBAHgGAMIgDAHIgGAKIgFAHQgJAEAAAPQAAAHABAJIABADQABALAHAPQABAFAHAFQAJAIATAJQAWALAWAOIAJAFIArAWQAbAJgEAFIhMAsIAABtIgCAJQgHASACAXQABARADANIApAxIAhAkQALALAMAKICMB0QAqAvAnAzQCBClBQDRQAWA3AJBJIABAMIANB9IAAAxIAFCgIAAAIQAHCpgrDHIgGAZQgfCCgcA7QgJAUgKAxQgNA/gJCdIgDA2QgGBlgDBhIgcAJIxPAEg");
	this.shape_747.setTransform(367.7,219.1);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#373535").ss(2.5).p("ArxA3QAbh+Ash1IAohbQATgwBPh+QAshGAlg3IBUjdQAEgFADgHQAOgcgjhEQgEgHgEgGIgohBQgFgHgEgHQjTl3Chj/QAIgMAIgLQA2hLBTg2QANgJANgIQA3gfAqgKQARgDAPgDQHAhJgSEQQgBAHAAAIQgKBUgxBlQgZA3gcApQgFAQgGARQgDAPgCARQAHAPAHAPIA5BPQAMAPAKAPQARAbAIAaQAHAZgEANQgBACAAABQgEAMgbAHQgNADgZAEQgNgCAGAZQAAACAAACQAEAQADAPQABAEgBADQgFAIgGAGQgCAEgDACQACAFACAEQACAJACAIIABAHIADAEQAFALgDAJQgBAHgFAMQgCADgBAEQgDAFgDAFQgCADgDAEQgJAEAAAPQgBAHACAIQAAACABACQAAALAHAPQABAEAHAFQAJAJATAIQAWAMAUAOQAEADAFACQAbAOAPAIQAbAJgFAFIhIAsIABBrQgBAFAAAFQgHARACAYQABAQADAOIAoAwQANARATAUQALALAMAKICMB1QAqAvAmAzQCBClBQDRQAWA3AJBJQABAGAAAGQAMBrABASQABAZAAAXIAFChQAAAEAAAEQAHCpgrDHQgDAMgDAMQgeCDgdA6QgJAVgKAxQgNA+gJCeQgBAagCAbQgFBlgEBiQgNAFgOAEIxPAEIgWgIIALjCQAAgMAAgQQACg4holjQgDgKgDgLIhvluQgCgHgCgGQhylmBYmWg");
	this.shape_748.setTransform(367.7,219.1);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#ECB77F").s().p("AoDc9IALjCIAAgcQACg4holjIgGgVIhvluIgEgNQhylmBYmWIAAgBQAbh+Ash1IAohbQATgwBPh+QAshGAlg3IBUjdQAEgFADgHQAOgcgjhEIgIgNIgohBIgJgOQjTl3Chj/IAQgXQA2hLBTg2IAagRQA3gfAqgKIAggGQHAhJgSEQIgBAPQgKBUgxBlQgZA3gcApIgLAhIgFAgIAOAeIA5BPIAWAeQARAbAIAaQAHAZgEANIgBADQgEAMgbAHQgNADgZAEQgNgCAGAZIAAAEIAHAfQABAEgBADQgFAIgGAGIgFAGIAEAJIAEARIABAHIADAEQAFALgDAJQgBAHgFAMIgDAHIgGAKIgFAHQgJAEAAAPQgBAHACAIIABAEQAAALAHAPQABAEAHAFQAJAJATAIQAWAMAUAOIAJAFIAqAWQAbAJgFAFIhIAsIABBrIgBAKQgHARACAYQABAQADAOIAoAwQANARATAUIAXAVICMB1QAqAvAmAzQCBClBQDRQAWA3AJBJIABAMIANB9IABAwIAFChIAAAIQAHCpgrDHIgGAYQgeCDgdA6QgJAVgKAxQgNA+gJCeIgDA1QgFBlgEBiIgbAJIxPAEg");
	this.shape_749.setTransform(367.7,219.1);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#373535").ss(2.5).p("ArwA3QAch+Ash1IAnhbQAUgwBOh+QAshGAlg3IBUjdQAFgFACgHQAPgcgjhEQgEgGgEgHIgphAQgEgIgEgHQjUl3Cij/QAHgLAIgMQA2hLBTg2QAOgJANgHQA3ggAqgKQAQgDAPgDQHAhJgSEPQgBAIAAAIQgKBUgxBlQgaA3gbApQgGAQgFARQgDAPgDARQAHAPAHAPIA5BPQAMAPAKAPQASAbAHAZQAHAagEANQAAABgBABQgDANgbAHQgNADgZAEQgNgCAGAZQAAACAAACQADAQAEAPQAAAEgBACQgFAJgGAGQgCADgCADQACAFACAEQABAJACAIIABAGIADAFQAFALgCAIQgBAIgGAMQgBADgCAEQgCAFgEAEQgCAEgCADQgJAFAAAPQgBAHABAIQABACAAACQABAKAHAQQAAAEAHAFQAKAIASAJQAWAMATAOQAEADAFACQAZAOAOAJQAbAIgEAFIhFAsIADBqQgBAEAAAFQgHASACAXQAAAQAEAOIAnAxQANAQATAVQAKALAMAKICLB2QAqAuAnA0QCBClBQDQQAVA4AJBIQABAGABAGQALBrACATQAAAYAAAYIAFCgQAAAEAAAEQAICpgrDIQgDAMgDAMQgeCCgdA7QgJAVgKAwQgNA/gICdQgCAbgCAbQgFBlgDBhQgNAFgOAFIxPAEIgWgIIALjCQABgMgBgQQACg4hnljQgDgLgDgKIhvluQgCgHgCgGQhylnBXmVg");
	this.shape_750.setTransform(367.5,219.1);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#ECB77F").s().p("AoCc9IALjCIAAgcQACg4hnljIgGgVIhvluIgEgNQhylnBXmVIAAgBQAch+Ash1IAnhbQAUgwBOh+QAshGAlg3IBUjdQAFgFACgHQAPgcgjhEIgIgNIgphAIgIgPQjUl3Cij/IAPgXQA2hLBTg2IAbgQQA3ggAqgKIAfgGQHAhJgSEPIgBAQQgKBUgxBlQgaA3gbApIgLAhIgGAgIAOAeIA5BPIAWAeQASAbAHAZQAHAagEANIgBACQgDANgbAHQgNADgZAEQgNgCAGAZIAAAEIAHAfQAAAEgBACQgFAJgGAGIgEAGIAEAJIADARIABAGIADAFQAFALgCAIQgBAIgGAMIgDAHIgGAJIgEAHQgJAFAAAPQgBAHABAIIABAEQABAKAHAQQAAAEAHAFQAKAIASAJQAWAMATAOIAJAFQAZAOAOAJQAbAIgEAFIhFAsIADBqIgBAJQgHASACAXQAAAQAEAOIAnAxQANAQATAVIAWAVICLB2QAqAuAnA0QCBClBQDQQAVA4AJBIIACAMIANB+IAAAwIAFCgIAAAIQAICpgrDIIgGAYQgeCCgdA7QgJAVgKAwQgNA/gICdIgEA2IgIDGIgbAKIxPAEg");
	this.shape_751.setTransform(367.5,219.1);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#373535").ss(2.5).p("ArvA3QAbh+Ash1IAohbQATgwBPh+QAshGAlg3IBUjdQAEgFADgHQAOgcgjhEQgEgGgEgHIgohAQgEgIgFgHQjTl3Chj/QAIgLAHgLQA3hMBTg2QANgJANgHQA3ggAqgKQAQgDAQgDQHAhJgTEPQgBAIAAAIQgKBTgxBmQgaA2gcAqQgFAQgGARQgCAPgDAQQAHAPAGAQIA5BOQAMAQAKAPQASAaAHAaQAHAZgDANQgBACAAABQgDANgbAGQgNAEgZAEQgNgCAFAYQAAADAAACQADAPAEAPQAAAEgBADQgEAJgGAGQgCADgCACQACAGABAEQACAJABAIIABAGIADAFQAFALgCAIQgBAHgFAMQgBAEgCADQgCAFgEAFQgCADgDAEQgJAEAAAPQAAAHABAIQAAACABACQAAALAHAPQABAEAHAFQAJAJASAJQAVAMATAOQADADAFACQAYAOAOAJQAbAIgEAFIhCArIAFBqQgBAEAAAFQgHARACAYQAAAQADAOIAnAxQAMAQATAVQAKALAMALICLB1QAqAvAmAzQCBCmBQDQQAVA4AJBIQABAGABAGQAMBqABATQABAZAAAXIAEChQAAAEAAAEQAJCogrDIQgDAMgDANQgeCCgcA7QgKAVgKAwQgMA+gJCeQgCAagBAbQgFBlgDBiQgOAFgNAFIxPAEIgVgIIALjCQAAgMAAgQQACg5holjQgDgKgDgKIhvluQgCgHgCgGQhylnBYmVg");
	this.shape_752.setTransform(367.5,219.1);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#ECB77F").s().p("AoBc9IALjCIAAgcQACg5holjIgGgUIhvluIgEgNQhylnBYmVIAAgBQAbh+Ash1IAohbQATgwBPh+QAshGAlg3IBUjdQAEgFADgHQAOgcgjhEIgIgNIgohAIgJgPQjTl3Chj/IAPgWQA3hMBTg2IAagQQA3ggAqgKIAggGQHAhJgTEPIgBAQQgKBTgxBmQgaA2gcAqIgLAhIgFAfIANAfIA5BOIAWAfQASAaAHAaQAHAZgDANIgBADQgDANgbAGQgNAEgZAEQgNgCAFAYIAAAFIAHAeIgBAHQgEAJgGAGIgEAFIADAKIADARIABAGIADAFQAFALgCAIQgBAHgFAMIgDAHQgCAFgEAFIgFAHQgJAEAAAPIABAPIABAEQAAALAHAPQABAEAHAFQAJAJASAJQAVAMATAOIAIAFIAmAXQAbAIgEAFIhCArIAFBqQgBAEAAAFQgHARACAYQAAAQADAOIAnAxQAMAQATAVIAWAWICLB1QAqAvAmAzQCBCmBQDQQAVA4AJBIIACAMIANB9IABAwIAEChIAAAIQAJCogrDIIgGAZQgeCCgcA7QgKAVgKAwQgMA+gJCeIgDA1QgFBlgDBiIgbAKIxPAEg");
	this.shape_753.setTransform(367.5,219.1);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#373535").ss(2.5).p("AruA3QAbh+Ash1IAohbQATgwBPh+QAshFAlg4IBUjcQAEgGADgHQAOgcgjhEQgDgGgEgHIgphAQgEgIgEgHQjUl3Chj+QAHgMAIgLQA2hLBTg3QAOgIANgIQA3ggApgJQARgEAPgDQHAhJgSEPQgBAIgBAHQgKBUgxBmQgZA2gcApQgGAQgGARQgCAPgDARQAHAPAGAPIA5BPQAMAPAKAPQASAbAHAZQAHAagDANQgBACAAABQgDAMgbAHQgNAEgZAEQgMgCAEAYQAAACAAACQADAPAEAQQAAAEgBACQgEAJgGAHQgCADgCACQACAGABAEQACAIABAIIABAHIADAEQAFALgCAIQgBAIgFAMQgBADgCAEQgCAFgDAFQgDADgCAEQgJAEgBAPQAAAHABAIQAAACABACQAAAKAHAQQABAEAGAFQAJAJASAJQAWAMARAOQADADAFACQAXAOANAJQAbAIgEAFIg/ArIAHBoQgBAEABAFQgHASABAXQABAQACAOIAmAyQAMAQATAVQAKALAMALICKB2QAqAvAmAzQCBCmBQDQQAVA3AJBJQABAGABAGQALBpACAUQABAZgBAXIAFCgQAAAEAAAEQAJCpgrDIQgCAMgDAMQgeCCgdA7QgJAWgKAvQgNA+gICeQgCAbgBAbQgFBlgDBhQgNAGgNAFIxPAEIgVgIIALjDQAAgMAAgQQABg5hnliQgDgKgDgKIhvlvQgCgGgCgHQhylmBYmVg");
	this.shape_754.setTransform(367.4,219.1);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#ECB77F").s().p("AoAc9IALjDIAAgcQABg5hnliIgGgUIhvlvIgEgNQhylmBYmVIAAgBQAbh+Ash1IAohbQATgwBPh+QAshFAlg4IBUjcQAEgGADgHQAOgcgjhEIgHgNIgphAIgIgPQjUl3Chj+IAPgXQA2hLBTg3IAbgQQA3ggApgJIAggHQHAhJgSEPIgCAPQgKBUgxBmQgZA2gcApIgMAhIgFAgIANAeIA5BPQAMAPAKAPQASAbAHAZQAHAagDANIgBADQgDAMgbAHQgNAEgZAEQgMgCAEAYIAAAEIAHAfQAAAEgBACQgEAJgGAHIgEAFIADAKIADAQIABAHIADAEQAFALgCAIQgBAIgFAMIgDAHIgFAKIgFAHQgJAEgBAPIABAPIABAEQAAAKAHAQQABAEAGAFQAJAJASAJQAWAMARAOIAIAFIAkAXQAbAIgEAFIg/ArIAHBoQgBAEABAFQgHASABAXQABAQACAOIAmAyQAMAQATAVIAWAWICKB2QAqAvAmAzQCBCmBQDQQAVA3AJBJIACAMIANB9IAAAwIAFCgIAAAIQAJCpgrDIIgFAYQgeCCgdA7QgJAWgKAvQgNA+gICeIgDA2QgFBlgDBhIgaALIxPAEg");
	this.shape_755.setTransform(367.4,219.1);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#373535").ss(2.5).p("ArtA3QAbh+Ash1IAohbQATgwBPh+QAshFAkg4IBVjcQAEgGACgHQAPgbgihEQgEgHgEgHIgphAQgEgHgEgIQjUl2Chj/QAHgMAIgLQA2hLBTg3QANgIANgIQA3ggAqgJQAQgEAQgDQHAhJgTEPQgBAIAAAHQgLBUgxBlQgZA2gcAqQgGAQgGARQgCAPgDARQAGAPAHAPIA5BPQAMAPAKAPQASAbAHAZQAHAZgDAOQgBABAAABQgDANgbAHQgMAEgZAEQgNgCAEAYQAAACAAACQADAPAEAQQAAAEgBACQgEAJgGAGQgCADgCADQACAFACAEQABAJABAIIABAGIADAFQAFALgCAIQgBAHgFAMQgBAEgCADQgCAGgDAEQgCAEgDADQgJAFAAAPQgBAGABAJQAAACABABQAAALAHAPQAAAFAHAFQAJAIASAJQAVANAQAOQADADAFACQAWAOAMAJQAbAIgDAFIg9ArIAKBnQgBAEAAAFQgHARABAXQABARADAOIAkAxQAMARATAVQAKALALALICKB2QApAwAnAzQCBCnBPDOQAWA4AJBIQABAGABAGQALBqACATQABAZgBAYIAFCgQAAAEAAAEQAKCogrDIQgDANgCAMQgfCBgcA8QgJAVgKAwQgNA9gICfQgCAagBAbQgFBlgDBiQgNAFgNAGIxOAEIgVgJIALjCQAAgMAAgQQABg6hnlhQgDgKgDgKIhvlvQgCgGgCgHQhylmBYmVg");
	this.shape_756.setTransform(367.3,219.1);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#ECB77F").s().p("An/c8IALjCIAAgcQABg6hnlhIgGgUIhvlvIgEgNQhylmBYmVIAAgBQAbh+Ash1IAohbQATgwBPh+IBQh9IBVjcQAEgGACgHQAPgbgihEIgIgOIgphAIgIgPQjUl2Chj/IAPgXQA2hLBTg3IAagQQA3ggAqgJIAggHQHAhJgTEPIgBAPQgLBUgxBlQgZA2gcAqIgMAhIgFAgIANAeIA5BPIAWAeQASAbAHAZQAHAZgDAOIgBACQgDANgbAHQgMAEgZAEQgNgCAEAYIAAAEIAHAfQAAAEgBACQgEAJgGAGIgEAGIAEAJIACARIABAGIADAFQAFALgCAIQgBAHgFAMIgDAHQgCAGgDAEIgFAHQgJAFAAAPQgBAGABAJIABADQAAALAHAPQAAAFAHAFQAJAIASAJQAVANAQAOIAIAFIAiAXQAbAIgDAFIg9ArIAKBnQgBAEAAAFQgHARABAXQABARADAOIAkAxQAMARATAVQAKALALALICKB2QApAwAnAzQCBCnBPDOQAWA4AJBIIACAMIANB9IAAAxIAFCgIAAAIQAKCogrDIIgFAZQgfCBgcA8QgJAVgKAwQgNA9gICfIgDA1QgFBlgDBiIgaALIxOAEg");
	this.shape_757.setTransform(367.3,219.1);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#373535").ss(2.5).p("ArsA3QAbh+Ash1IAohbQATgwBPh+QAshFAkg3IBVjdQAEgGACgHQAPgbgihEQgEgHgEgHIgphAQgEgHgEgIQjUl2Chj/QAHgLAIgMQA2hLBTg2QANgJANgIQA3ggAqgJQAQgEAQgDQHAhJgTEPQgBAHgBAIQgKBUgxBlQgaA2gcAqQgGAQgGARQgCAPgDAQQAGAPAHAQIA4BOQAMAQAKAPQASAaAIAaQAHAZgDANQgBACAAABQgDANgaAHQgNAEgZAEQgNgCAEAXQAAADAAACQADAOAEAQQAAAEgBADQgEAJgFAGQgCADgDADQADAFABAEQABAJABAIIABAGIACAFQAFALgBAIQgBAHgFAMQgBADgBAEQgDAFgDAFQgCADgDAEQgJAEAAAPQgBAHABAIQAAACABACQAAAKAGAQQABAEAHAFQAJAJASAJQAUANAPAOQADADAEACQAVAPANAIQAaAIgDAFIg5ArIALBlQgBAEABAFQgHASABAXQAAAQADAOIAkAyQALARASAVQALALALALICJB3QApAvAnA0QCBCnBPDOQAWA4AJBIQABAGAAAGQAMBpACAUQABAZgBAXIAFChQAAAEAAAEQAKCngrDJQgCAMgDAMQgeCCgcA7QgJAWgKAvQgNA9gJCfQgBAbgCAbQgEBlgDBhQgNAGgMAFIxPAFIgUgJIALjCQAAgMAAgQQABg6hnlhQgDgKgDgLIhvluQgCgGgCgHQhylmBYmVg");
	this.shape_758.setTransform(367.2,219.1);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#ECB77F").s().p("An+c8IALjCIAAgcQABg6hnlhIgGgVIhvluIgEgNQhylmBYmVIAAgBQAbh+Ash1IAohbQATgwBPh+QAshFAkg3IBVjdQAEgGACgHQAPgbgihEIgIgOIgphAIgIgPQjUl2Chj/IAPgXQA2hLBTg2IAagRQA3ggAqgJIAggHQHAhJgTEPIgCAPQgKBUgxBlQgaA2gcAqIgMAhIgFAfIANAfIA4BOIAWAfQASAaAIAaQAHAZgDANIgBADQgDANgaAHQgNAEgZAEQgNgCAEAXIAAAFIAHAeQAAAEgBADQgEAJgFAGIgFAGIAEAJIACARIABAGIACAFQAFALgBAIQgBAHgFAMIgCAHIgGAKIgFAHQgJAEAAAPQgBAHABAIIABAEQAAAKAGAQQABAEAHAFQAJAJASAJQAUANAPAOIAHAFIAiAXQAaAIgDAFIg5ArIALBlQgBAEABAFQgHASABAXQAAAQADAOIAkAyQALARASAVIAWAWICJB3QApAvAnA0QCBCnBPDOQAWA4AJBIIABAMIAOB9IAAAwIAFChIAAAIQAKCngrDJIgFAYQgeCCgcA7QgJAWgKAvQgNA9gJCfIgDA2IgHDGIgZALIxPAFg");
	this.shape_759.setTransform(367.2,219.1);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#373535").ss(2.5).p("ArrA3QAbh+Ash0IAohcQATgwBPh+QAshFAkg3IBVjdQAEgGACgGQAQgcgjhEQgEgHgEgHIgphAQgEgHgEgHQjUl3Chj/QAHgLAIgMQA2hLBTg2QANgJANgIQA3gfApgKQARgEAPgCQHBhKgUEPQgBAHAAAIQgLBUgxBlQgaA2gcAqQgFAPgHARQgCAPgDARQAGAPAHAPIA4BPQAMAPAKAPQASAbAIAZQAHAZgDAOQgBABAAACQgDANgaAHQgMAEgZAEQgNgCADAXQAAACAAACQACAPAFAQQAAAEgBACQgEAJgFAHQgCADgCACQACAGABAEQABAIABAIIABAHIACAEQAFALgCAIQAAAIgFAMQgBADgBAEQgCAFgEAFQgCADgDAEQgIAEgBAPQgBAHABAIQAAACABACQgBAKAHAPQABAFAHAFQAJAJARAJQAVANANAPQADACAEACQAUAPAMAIQAaAIgDAFIg2AqIANBlQAAAEAAAFQgHARABAXQABARACANIAjAzQALAQASAWQAKAMALAKICJB4QApAvAnAzQCBCoBPDOQAVA4AKBHQAAAGABAGQAMBpACAVQABAZgBAXIAFCgQAAAEAAAEQALCogrDIQgDANgCAMQgeCBgcA8QgKAWgKAvQgNA8gICgQgBAagCAbQgEBlgDBiQgMAGgMAFIxPAFIgUgJIALjCQAAgMAAgRQABg6hnlgQgDgLgDgKIhvluQgCgGgCgHQhylmBYmVg");
	this.shape_760.setTransform(367.1,219.1);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#ECB77F").s().p("An9c8IALjCIAAgdQABg6hnlgIgGgVIhvluIgEgNQhylmBYmVIAAgBQAbh+Ash0IAohcQATgwBPh+QAshFAkg3IBVjdQAEgGACgGQAQgcgjhEIgIgOIgphAIgIgOQjUl3Chj/IAPgXQA2hLBTg2IAagRQA3gfApgKIAggGQHBhKgUEPIgBAPQgLBUgxBlQgaA2gcAqIgMAgIgFAgIANAeIA4BPQAMAPAKAPQASAbAIAZQAHAZgDAOIgBADQgDANgaAHQgMAEgZAEQgNgCADAXIAAAEQACAPAFAQQAAAEgBACQgEAJgFAHIgEAFIADAKIACAQIABAHIACAEQAFALgCAIQAAAIgFAMIgCAHIgGAKIgFAHQgIAEgBAPIAAAPIABAEQgBAKAHAPQABAFAHAFQAJAJARAJQAVANANAPIAHAEIAgAXQAaAIgDAFIg2AqIANBlIAAAJQgHARABAXQABARACANIAjAzQALAQASAWQAKAMALAKICJB4QApAvAnAzQCBCoBPDOQAVA4AKBHIABAMQAMBpACAVIAAAwIAFCgIAAAIQALCogrDIIgFAZQgeCBgcA8QgKAWgKAvQgNA8gICgIgDA1QgEBlgDBiIgYALIxPAFg");
	this.shape_761.setTransform(367.1,219.1);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#373535").ss(2.5).p("ArqA3QAbh+Ash0IAohcQATgwBPh9QAshGAkg3IBVjdQAEgFACgHQAQgcgjhEQgEgHgEgGIgphBQgEgHgEgHQjUl3Cgj+QAIgMAIgLQA1hMBTg2QAOgJANgHQA2ggAqgKQARgEAPgCQHBhKgUEOQgBAIgBAIQgKBUgyBlQgZA1gcAqQgGAQgGARQgDAPgDARQAGAPAGAPIA5BPQAMAPAKAPQASAbAIAZQAHAZgDANQgBACAAABQgDAOgZAHQgNAEgZAEQgNgCADAXQAAACAAACQACAOAEARQABAEgBACQgEAJgFAGQgCAEgCACQACAFABAFQABAIABAIIAAAGIADAFQAFALgCAIQAAAHgEAMQgBAEgCADQgCAGgEAEQgCAEgCADQgJAFgBAPQgBAGABAJQAAABABACQgBAKAHAQQABAEAGAFQAJAKASAJQAUAMANAQQACACAEACQATAPALAJQAaAHgCAFIgzAqIAPBkQgBAEABAEQgHASABAXQAAAQADAOIAhAyQALARASAWQAKAMALAKICIB4QApAwAmAzQCCCoBPDNQAVA4AJBIQABAGABAGQAMBoACAVQAAAZAAAYIAFCgQAAAEAAAEQALCngqDJQgDAMgDANQgdCBgdA8QgJAWgKAuQgNA8gICgQgBAbgCAbQgEBlgDBhQgMAGgMAGIxOAFIgUgKIALjCQAAgMAAgQQAAg7hmlgQgDgKgDgKIhvluQgCgHgCgGQhylmBYmVg");
	this.shape_762.setTransform(367,219.1);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#ECB77F").s().p("An8c7IALjCIAAgcQAAg7hmlgIgGgUIhvluIgEgNQhylmBYmVIAAgBQAbh+Ash0IAohcQATgwBPh9QAshGAkg3IBVjdQAEgFACgHQAQgcgjhEIgIgNIgphBIgIgOQjUl3Cgj+IAQgXQA1hMBTg2IAbgQQA2ggAqgKIAggGQHBhKgUEOIgCAQQgKBUgyBlQgZA1gcAqIgMAhIgGAgIAMAeIA5BPIAWAeQASAbAIAZQAHAZgDANIgBADQgDAOgZAHQgNAEgZAEQgNgCADAXIAAAEIAGAfIAAAGQgEAJgFAGIgEAGIADAKIACAQIAAAGIADAFQAFALgCAIQAAAHgEAMIgDAHIgGAKIgEAHQgJAFgBAPQgBAGABAJIABADQgBAKAHAQQABAEAGAFQAJAKASAJQAUAMANAQIAGAEIAeAYQAaAHgCAFIgzAqIAPBkIAAAIQgHASABAXQAAAQADAOIAhAyQALARASAWIAVAWICIB4QApAwAmAzQCCCoBPDNQAVA4AJBIIACAMQAMBoACAVIAAAxIAFCgIAAAIQALCngqDJIgGAZQgdCBgdA8QgJAWgKAuQgNA8gICgIgDA2QgEBlgDBhIgYAMIxOAFg");
	this.shape_763.setTransform(367,219.1);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#373535").ss(2.5).p("ArpA3QAbh+Ash0IAohcQATgwBPh9QAshGAkg3IBVjdQAEgFACgHQAQgcgjhEQgEgGgEgHIgphAQgEgIgEgHQjUl3Cgj+QAIgMAHgLQA2hLBTg3QANgJANgHQA3ggAqgKQAQgEAQgCQHBhKgVEOQgBAIAAAIQgLBUgxBkQgaA2gcAqQgGAQgGARQgDAPgDAQQAGAPAGAQIA5BPQAMAPAKAPQASAaAIAaQAHAYgDAOQgBACAAABQgCAOgaAHQgMAEgZAEQgNgCACAXQAAACAAACQACANAEARQABAEgBADQgEAJgFAGQgCADgCADQACAFABAEQABAJABAIIAAAGIADAFQAFAKgCAIQAAAIgEAMQgBADgCAEQgCAFgDAFQgCADgDAEQgJAFgBAOQgBAHABAIQAAACABACQgBAKAHAQQABAEAGAFQAJAJARAKQAUAMAMAQQACACAEACQARAPALAJQAaAHgCAFIgwAqIARBiQAAAEAAAFQgHARABAXQAAARADANIAhAzQAKARASAWQAKAMALAKICHB5QApAvAmA0QCCCoBODNQAWA4AJBIQABAGABAGQAMBnACAWQAAAZAAAXIAFCgQAAAEAAAEQALCngqDKQgDAMgCAMQgeCBgcA8QgJAXgKAuQgNA7gIChQgCAagBAbQgEBlgDBiQgMAGgLAGIxPAFIgTgKIALjCQAAgMAAgQQAAg8hmlfQgDgKgDgKIhvluQgCgHgCgGQhylmBYmVg");
	this.shape_764.setTransform(366.9,219.1);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#ECB77F").s().p("An7c7IALjCIAAgcQAAg8hmlfIgGgUIhvluIgEgNQhylmBYmVIAAgBQAbh+Ash0IAohcQATgwBPh9QAshGAkg3IBVjdQAEgFACgHQAQgcgjhEIgIgNIgphAIgIgPQjUl3Cgj+IAPgXQA2hLBTg3IAagQQA3ggAqgKIAggGQHBhKgVEOIgBAQQgLBUgxBkQgaA2gcAqIgMAhIgGAfIAMAfIA5BPQAMAPAKAPQASAaAIAaQAHAYgDAOIgBADQgCAOgaAHQgMAEgZAEQgNgCACAXIAAAEQACANAEARIAAAHQgEAJgFAGIgEAGIADAJIACARIAAAGIADAFQAFAKgCAIQAAAIgEAMIgDAHQgCAFgDAFIgFAHQgJAFgBAOQgBAHABAIIABAEQgBAKAHAQQABAEAGAFQAJAJARAKQAUAMAMAQIAGAEIAcAYQAaAHgCAFIgwAqIARBiIAAAJQgHARABAXQAAARADANIAhAzQAKARASAWQAKAMALAKICHB5QApAvAmA0QCCCoBODNQAWA4AJBIIACAMQAMBnACAWIAAAwIAFCgIAAAIQALCngqDKIgFAYQgeCBgcA8QgJAXgKAuQgNA7gIChIgDA1QgEBlgDBiIgXAMIxPAFg");
	this.shape_765.setTransform(366.9,219.1);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#373535").ss(2.5).p("AroA3QAbh+Ash0IAohbQATgwBOh+QAshGAlg3IBUjdQAFgFACgHQAQgbgjhFQgEgGgEgHIgphAQgEgIgEgHQjUl2Cgj/QAHgMAIgLQA2hLBTg3QANgIANgIQA3ggAqgKQAQgEAPgCQHChKgVEOQgBAIgBAHQgLBVgxBkQgaA2gcAqQgGAPgGARQgDAPgDARQAGAPAGAQIA5BOQAMAQAKAPQASAaAIAZQAHAZgDAOQgBABAAABQgCAOgaAIQgMADgZAEQgNgBACAWQAAACAAACQABAOAFARQABAEgBACQgEAJgFAHQgBADgDADQACAFACAEQAAAJABAHIAAAGIADAFQAFALgCAIQAAAIgEALQgBAEgCAEQgCAFgDAEQgCAEgDAEQgIAEgBAPQgCAHABAIQAAACABABQgBAKAHAQQAAAFAHAFQAJAJARAJQAUANAKAQQACACAEADQAQAOAKAJQAaAIgCAEIgsAqIATBhQgBAEABAEQgHASABAXQAAAQACAOIAgAzQAKARASAWQAJAMALAKICHB6QApAvAmAzQCBCpBPDNQAVA4AKBHQABAGABAGQAMBnABAXQABAYAAAYIAFCgQAAAEAAAEQAMCmgqDKQgDANgDAMQgdCBgcA8QgJAXgLAtQgNA7gHChQgCAbgBAbQgEBlgDBhQgLAHgMAGIxOAFIgTgKIALjCQAAgMAAgQQAAg9hmleQgDgKgDgKIhvluQgCgHgCgGQhylmBYmVg");
	this.shape_766.setTransform(366.8,219.1);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#ECB77F").s().p("An6c7IALjCIAAgcQAAg9hmleIgGgUIhvluIgEgNQhylmBYmVIAAgBQAbh+Ash0IAohbQATgwBOh+QAshGAlg3IBUjdQAFgFACgHQAQgbgjhFIgIgNIgphAIgIgPQjUl2Cgj/IAPgXQA2hLBTg3IAagQQA3ggAqgKIAfgGQHChKgVEOIgCAPQgLBVgxBkQgaA2gcAqIgMAgIgGAgIAMAfIA5BOIAWAfQASAaAIAZQAHAZgDAOIgBACQgCAOgaAIQgMADgZAEQgNgBACAWIAAAEQABAOAFARQABAEgBACQgEAJgFAHIgEAGIAEAJIABAQIAAAGIADAFQAFALgCAIQAAAIgEALIgDAIQgCAFgDAEIgFAIQgIAEgBAPQgCAHABAIIABADQgBAKAHAQQAAAFAHAFQAJAJARAJQAUANAKAQIAGAFIAaAXQAaAIgCAEIgsAqIATBhIAAAIQgHASABAXQAAAQACAOIAgAzQAKARASAWQAJAMALAKICHB6QApAvAmAzQCBCpBPDNQAVA4AKBHIACAMQAMBnABAXIABAwIAFCgIAAAIQAMCmgqDKIgGAZQgdCBgcA8QgJAXgLAtQgNA7gHChIgDA2QgEBlgDBhIgXANIxOAFg");
	this.shape_767.setTransform(366.8,219.1);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#373535").ss(2.5).p("ArnA3QAbh+Ash0IAohbQATgwBOh+QAshGAlg3IBUjdQAFgFACgHQAQgbgjhFQgEgGgEgHIgphAQgEgIgEgHQjUl2Cgj/QAHgLAIgMQA2hLBTg3QANgIANgIQA2ggAqgKQARgEAPgCQHChKgWEOQgBAIAAAHQgLBUgyBlQgZA1gdAqQgGAQgGARQgDAPgDARQAGAPAGAPIA4BPQAMAPAKAPQASAbAIAZQAIAZgDANQgBACAAABQgCAOgZAHQgMAEgaAEQgNgBADAWQgBACAAACQABANAFARQABAEgBADQgEAJgEAGQgCAEgCACQACAGABAEQAAAIABAIIAAAGIACAFQAFALgBAIQAAAHgEAMQgBAEgBADQgCAFgEAFQgCADgDAEQgIAFgBAOQgBAHAAAIQAAACABACQgBAKAGAQQABAEAHAFQAIAKARAJQAUANAJAQQACACADADQAPAOALAJQAZAIgBAEIgqApIAVBgQAAAEAAAFQgGARAAAXQAAAQACAOIAgA0QAJARARAWQAKAMALAKICGB6QApAwAmAzQCBCpBPDMQAVA5AKBHQABAGABAGQAMBnABAWQABAZAAAXIAFCgQAAAEAAAEQAMCngqDKQgCAMgDAMQgdCBgcA9QgKAXgKAtQgNA6gHCiQgCAagBAbQgEBlgCBiQgMAGgLAHIxOAFIgTgLIALjBQAAgMAAgRQAAg8hmleQgDgKgDgLIhvltQgCgHgCgGQhylmBYmVg");
	this.shape_768.setTransform(366.7,219.1);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#ECB77F").s().p("An5c6IALjBIAAgdQAAg8hmleIgGgVIhvltIgEgNQhylmBYmVIAAgBQAbh+Ash0IAohbQATgwBOh+QAshGAlg3IBUjdQAFgFACgHQAQgbgjhFIgIgNIgphAIgIgPQjUl2Cgj/IAPgXQA2hLBTg3IAagQQA2ggAqgKIAggGQHChKgWEOIgBAPQgLBUgyBlQgZA1gdAqIgMAhIgGAgIAMAeIA4BPIAWAeQASAbAIAZQAIAZgDANIgBADQgCAOgZAHQgMAEgaAEQgNgBADAWIgBAEQABANAFARQABAEgBADQgEAJgEAGIgEAGIADAKIABAQIAAAGIACAFQAFALgBAIQAAAHgEAMIgCAHIgGAKIgFAHQgIAFgBAOQgBAHAAAIIABAEQgBAKAGAQQABAEAHAFQAIAKARAJQAUANAJAQIAFAFIAaAXQAZAIgBAEIgqApIAVBgIAAAJQgGARAAAXQAAAQACAOIAgA0QAJARARAWIAVAWICGB6QApAwAmAzQCBCpBPDMQAVA5AKBHIACAMQAMBnABAWIABAwIAFCgIAAAIQAMCngqDKIgFAYQgdCBgcA9QgKAXgKAtQgNA6gHCiIgDA1QgEBlgCBiIgXANIxOAFg");
	this.shape_769.setTransform(366.7,219.1);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#373535").ss(2.5).p("ArmA3QAbh+Ash0IAohbQATgwBOh+QAshGAlg3IBUjcQAEgGADgHQAQgbgjhEQgEgHgEgHIgohAQgFgHgEgIQjUl2Cgj+QAHgMAIgLQA2hMBSg2QANgJANgIQA3ggAqgKQAQgEAQgCQHBhLgVEPQgBAIgBAHQgLBUgxBlQgaA1gdAqQgGAQgGAQQgDAQgDAQQAGAPAFAQIA5BPQAMAPAKAPQASAaAIAZQAIAZgDAOQgBACAAABQgCAOgZAHQgMAEgZAEQgNgBACAWQgBACAAABQABAOAFARQABAEgBADQgEAJgEAGQgCAEgCACQACAGABADQAAAJABAIIgBAGIADAEQAFALgBAIQAAAIgEAMQgBADgBAEQgCAFgDAFQgDADgCAEQgJAFgBAOQgBAHAAAIQAAACABACQgBAJAGAQQABAFAGAFQAJAJARAKQATANAIAQQACACADADQAOAOAKAJQAZAIgBAEIgmApIAWBfQAAAEABAEQgHASABAXQAAAQABAOIAfA0QAJAQARAXQAKAMALAKICFB7QApAwAmAzQCBCpBODMQAWA5AKBGQABAGAAAGQANBnABAXQABAZAAAXIAFCgQAAAEAAAEQAMCmgpDKQgDANgDAMQgdCBgbA8QgKAXgKAtQgOA6gHCiQgBAbgBAbQgEBlgCBhQgMAHgLAHIxOAFIgSgLIALjCQAAgLAAgRQAAg9hmleQgDgKgDgKIhvluQgCgGgCgHQhyllBYmVg");
	this.shape_770.setTransform(366.6,219.1);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#ECB77F").s().p("An4c6IALjCIAAgcQAAg9hmleIgGgUIhvluIgEgNQhyllBYmVIAAgBQAbh+Ash0IAohbQATgwBOh+QAshGAlg3IBUjcQAEgGADgHQAQgbgjhEIgIgOIgohAIgJgPQjUl2Cgj+IAPgXQA2hMBSg2IAagRQA3ggAqgKIAggGQHBhLgVEPIgCAPQgLBUgxBlQgaA1gdAqIgMAgIgGAgIALAfIA5BPQAMAPAKAPQASAaAIAZQAIAZgDAOIgBADQgCAOgZAHQgMAEgZAEQgNgBACAWIgBADQABAOAFARQABAEgBADQgEAJgEAGIgEAGIADAJIABARIgBAGIADAEQAFALgBAIQAAAIgEAMIgCAHIgFAKIgFAHQgJAFgBAOQgBAHAAAIIABAEQgBAJAGAQQABAFAGAFQAJAJARAKQATANAIAQIAFAFIAYAXQAZAIgBAEIgmApIAWBfIABAIQgHASABAXQAAAQABAOIAfA0QAJAQARAXQAKAMALAKICFB7QApAwAmAzQCBCpBODMQAWA5AKBGIABAMQANBnABAXIABAwIAFCgIAAAIQAMCmgpDKIgGAZQgdCBgbA8QgKAXgKAtQgOA6gHCiIgCA2QgEBlgCBhIgXAOIxOAFg");
	this.shape_771.setTransform(366.6,219.1);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#373535").ss(2.5).p("ArmA3QAch+Ash0IAnhbQATgwBPh+QAshGAkg3IBVjcQAEgGACgHQAQgbgihEQgEgHgEgHIgphAQgEgHgEgIQjUl2Cfj+QAIgMAHgLQA2hMBTg2QANgJANgIQA2ggAqgKQAQgEAQgCQHChLgWEPQgBAHgBAIQgLBUgxBkQgaA2gdAqQgGAPgHARQgCAPgDARQAFAPAGAQIA4BOQAMAQAKAPQATAaAIAZQAHAZgDANQAAACAAABQgCAPgZAHQgMAEgZAEQgNgBABAVQAAACgBACQABANAFASQABAEgBACQgDAJgFAHQgBADgCADQACAFABAEQAAAJAAAHIAAAGIACAFQAFALgBAIQAAAIgDALQgBAEgBADQgCAGgEAEQgCAEgDAEQgIAEgBAPQgCAHABAIQAAABAAACQgBAKAHAQQAAAEAHAFQAIAKARAKQATANAHAQQACACADADQAMAPAJAIQAaAIgBAEIgkApIAZBeQAAADABAFQgHARAAAXQAAAQACAOIAeA0QAJARARAXQAJAMALALICFB6QAoAwAmA0QCCCpBODMQAVA4AKBHQABAGABAGQAMBmACAYQABAYgBAYIAFCgQAAAEAAAEQANClgpDLQgDAMgCAMQgdCBgcA9QgKAXgKAtQgNA5gHCjQgCAagBAbQgEBlgCBhQgLAIgLAGIxNAGIgSgLIAKjCQABgMgBgQQAAg+hmldQgDgKgDgKIhvluQgCgGgCgHQhxllBXmVg");
	this.shape_772.setTransform(366.5,219.1);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#ECB77F").s().p("An3c6IAKjCQABgMgBgQQAAg+hmldIgGgUIhvluIgEgNQhxllBXmVIAAgBQAch+Ash0IAnhbQATgwBPh+QAshGAkg3IBVjcQAEgGACgHQAQgbgihEIgIgOIgphAIgIgPQjUl2Cfj+IAPgXQA2hMBTg2IAagRQA2ggAqgKIAggGQHChLgWEPIgCAPQgLBUgxBkQgaA2gdAqIgNAgIgFAgIALAfIA4BOIAWAfQATAaAIAZQAHAZgDANIAAADQgCAPgZAHQgMAEgZAEQgNgBABAVIgBAEQABANAFASIAAAGQgDAJgFAHIgDAGIADAJIAAAQIAAAGIACAFQAFALgBAIQAAAIgDALIgCAHQgCAGgEAEIgFAIQgIAEgBAPQgCAHABAIIAAADQgBAKAHAQQAAAEAHAFQAIAKARAKQATANAHAQIAFAFQAMAPAJAIQAaAIgBAEIgkApIAZBeIABAIQgHARAAAXQAAAQACAOIAeA0QAJARARAXIAUAXICFB6QAoAwAmA0QCCCpBODMQAVA4AKBHIACAMQAMBmACAYIAAAwIAFCgIAAAIQANClgpDLIgFAYQgdCBgcA9QgKAXgKAtQgNA5gHCjIgDA1QgEBlgCBhIgWAOIxNAGg");
	this.shape_773.setTransform(366.5,219.1);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#373535").ss(2.5).p("ArlA3QAch+Ash0IAnhbQATgwBPh+QAshGAkg3IBVjcQAEgGACgHQAQgbgihEQgEgHgEgHIgphAQgEgHgEgHQjUl2Cfj/QAHgMAIgLQA2hLBSg3QANgJANgIQA3gfAqgLQAQgEAQgCQHChLgXEPQAAAHgBAIQgMBUgxBkQgaA1gdArQgGAPgHARQgCAPgDARQAFAPAGAPIA4BPQAMAPAKAPQASAaAIAaQAIAYgDAOQAAACAAABQgCAPgYAHQgMAEgaAEQgNgBABAVQAAACgBACQABAMAFASQABAEgBADQgDAJgEAHQgCADgCADQACAFABAEQAAAIAAAIIAAAGIACAFQAFAKgBAJQAAAHgDAMQgBADgBAEQgCAFgDAFQgDADgCAEQgJAFgBAOQgBAHAAAIQAAACAAACQgBAJAGARQABAEAGAFQAJAKARAKQATANAFAQQACACACADQAMAPAJAIQAZAIgBAEIggApIAaBcQAAAEACAEQgHASAAAXQAAAQABAOIAdA0QAJARAQAXQAKAMAKALICFB7QAoAwAmAzQCCCqBNDLQAWA5AKBHQABAGABAGQAMBlACAYQABAZgBAXIAFCgQAAAEAAAEQAOCmgqDLQgCAMgDAMQgdCBgbA9QgKAXgKAsQgOA5gGCjQgCAbgBAbQgEBlgBBhQgLAHgLAHIxOAGIgRgLIAKjCQABgMgBgRQAAg+hmlcQgDgKgDgKIhvluQgCgGgCgHQhxlmBXmUg");
	this.shape_774.setTransform(366.4,219.1);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#ECB77F").s().p("An2c6IAKjCQABgMgBgRQAAg+hmlcIgGgUIhvluIgEgNQhxlmBXmUIAAgBQAch+Ash0IAnhbQATgwBPh+QAshGAkg3IBVjcQAEgGACgHQAQgbgihEIgIgOIgphAIgIgOQjUl2Cfj/IAPgXQA2hLBSg3IAagRQA3gfAqgLIAggGQHChLgXEPIgBAPQgMBUgxBkQgaA1gdArIgNAgIgFAgIALAeIA4BPQAMAPAKAPQASAaAIAaQAIAYgDAOIAAADQgCAPgYAHQgMAEgaAEQgNgBABAVIgBAEQABAMAFASIAAAHQgDAJgEAHIgEAGIADAJIAAAQIAAAGIACAFQAFAKgBAJQAAAHgDAMIgCAHIgFAKIgFAHQgJAFgBAOIgBAPIAAAEQgBAJAGARQABAEAGAFQAJAKARAKQATANAFAQIAEAFQAMAPAJAIQAZAIgBAEIggApIAaBcIACAIQgHASAAAXQAAAQABAOIAdA0QAJARAQAXIAUAXICFB7QAoAwAmAzQCCCqBNDLQAWA5AKBHIACAMQAMBlACAYIAAAwIAFCgIAAAIQAOCmgqDLIgFAYQgdCBgbA9QgKAXgKAsQgOA5gGCjIgDA2QgEBlgBBhIgWAOIxOAGg");
	this.shape_775.setTransform(366.4,219.1);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#373535").ss(2.5).p("ArkA3QAch+Ash0IAnhbQATgwBPh+QAshGAkg3IBVjcQAEgGACgGQAQgcgihEQgEgHgEgHIgphAQgEgHgEgHQjUl2Cfj/QAHgLAIgMQA2hLBSg3QANgJANgHQA3ggAqgLQAQgEAPgCQHDhLgXEOQgBAIgBAIQgLBUgyBkQgZA1gdAqQgHAQgGAQQgDAQgDAQQAFAPAFAQIA5BPQAMAPAKAPQASAaAIAZQAIAZgDAOQAAABAAACQgCAPgYAHQgMAEgaAEQgNgBABAVQAAACgBABQABANAFASQABAEgBADQgDAJgEAGQgCAEgCACQACAGABAEQAAAIAAAIIgBAGIADAEQAFALgBAIQAAAIgDALQgBAEgBAEQgCAFgDAFQgCADgDAEQgIAFgCAOQgBAHAAAIQAAACAAABQgBAKAGAQQABAFAGAFQAJAJAQAKQATAOAEAQQACACACADQALAPAIAJQAZAHgBAEIgdApIAdBbQAAADABAFQgHARAAAXQAAAQACAOIAcA1QAIARAQAXQAJAMALALICEB8QAoAwAmAzQCCCqBNDLQAWA5AKBGQABAGAAAGQANBlACAZQAAAZAAAXIAFCgQAAAEAAAEQAOClgpDLQgDAMgCANQgdCAgcA9QgJAYgLAsQgNA4gHCkQgBAagBAbQgEBlgBBhQgLAIgLAHIxNAGIgRgMIAKjCQABgLgBgRQgBg+hllcQgDgKgDgKIhvluQgCgGgCgHQhxlmBXmUg");
	this.shape_776.setTransform(366.3,219.1);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#ECB77F").s().p("An1c5IAKjCQABgLgBgRQgBg+hllcIgGgUIhvluIgEgNQhxlmBXmUIAAgBQAch+Ash0IAnhbQATgwBPh+QAshGAkg3IBVjcQAEgGACgGQAQgcgihEIgIgOIgphAIgIgOQjUl2Cfj/IAPgXQA2hLBSg3IAagQQA3ggAqgLIAfgGQHDhLgXEOIgCAQQgLBUgyBkQgZA1gdAqIgNAgIgGAgIAKAfIA5BPIAWAeQASAaAIAZQAIAZgDAOIAAADQgCAPgYAHQgMAEgaAEQgNgBABAVIgBADQABANAFASIAAAHQgDAJgEAGIgEAGIADAKIAAAQIgBAGIADAEQAFALgBAIQAAAIgDALIgCAIQgCAFgDAFIgFAHQgIAFgCAOQgBAHAAAIIAAADQgBAKAGAQQABAFAGAFQAJAJAQAKQATAOAEAQIAEAFQALAPAIAJQAZAHgBAEIgdApIAdBbIABAIQgHARAAAXQAAAQACAOIAcA1QAIARAQAXQAJAMALALICEB8QAoAwAmAzQCCCqBNDLQAWA5AKBGIABAMQANBlACAZIAAAwIAFCgIAAAIQAOClgpDLIgFAZQgdCAgcA9QgJAYgLAsQgNA4gHCkIgCA1QgEBlgBBhIgWAPIxNAGg");
	this.shape_777.setTransform(366.3,219.1);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#373535").ss(2.5).p("ArjA3QAch+Ash0IAnhbQATgwBPh+QAshFAkg4IBVjcQAEgGACgGQARgbgjhFQgEgHgEgGIgphBQgEgHgEgHQjUl2Cfj+QAHgMAIgMQA1hLBTg3QANgIANgIQA2ggAqgKQARgEAPgDQHChLgXEOQAAAIgBAIQgMBUgxBkQgaA0gdArQgHAQgGAQQgDAPgDARQAFAPAFAQIA5BOQAMAQAKAPQASAaAIAZQAIAYgDAOQAAACAAABQgCAQgYAHQgLAEgaAEQgNgBAAAUQAAACgBACQAAAMAGATQABAEgBACQgDAJgEAHQgCADgCADQACAFABAEQAAAJAAAHIgBAGIADAFQAFALgBAIQAAAHgDAMQgBAEgBADQgCAGgDAEQgCAEgDAEQgIAEgCAPQgBAGAAAIQAAACAAACQgCAJAHARQABAEAGAFQAJAKAQAKQASAOAEAQQABADACACQAJAPAIAJQAZAHAAAEIgaAoIAeBaQAAAEACAEQgHASAAAXQAAAQABAOIAbA0QAIARAQAYQAJAMALALICDB8QAoAwAmA0QCBCqBODLQAVA5AKBGQABAGABAGQANBkABAZQABAZAAAXIAFCgQAAAEAAAEQAPClgqDMQgCAMgDAMQgcCBgcA9QgJAYgLArQgNA4gHCkQgBAbgBAbQgEBlgBBhQgLAIgKAHIxNAGIgRgMIAKjCQABgLgBgRQgBg/hllbQgDgKgDgLIhvltQgCgHgCgGQhxlmBXmUg");
	this.shape_778.setTransform(366.2,219.1);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#ECB77F").s().p("An0c5IAKjCQABgLgBgRQgBg/hllbIgGgVIhvltIgEgNQhxlmBXmUIAAgBQAch+Ash0IAnhbQATgwBPh+IBQh9IBVjcQAEgGACgGQARgbgjhFIgIgNIgphBIgIgOQjUl2Cfj+IAPgYQA1hLBTg3IAagQQA2ggAqgKIAggHQHChLgXEOIgBAQQgMBUgxBkQgaA0gdArIgNAgIgGAgIAKAfIA5BOIAWAfQASAaAIAZQAIAYgDAOIAAADQgCAQgYAHQgLAEgaAEQgNgBAAAUIgBAEQAAAMAGATIAAAGQgDAJgEAHIgEAGIADAJIAAAQIgBAGIADAFQAFALgBAIQAAAHgDAMIgCAHQgCAGgDAEIgFAIQgIAEgCAPQgBAGAAAIIAAAEQgCAJAHARQABAEAGAFQAJAKAQAKQASAOAEAQIADAFQAJAPAIAJQAZAHAAAEIgaAoIAeBaIACAIQgHASAAAXQAAAQABAOIAbA0QAIARAQAYQAJAMALALICDB8QAoAwAmA0QCBCqBODLQAVA5AKBGIACAMQANBkABAZIABAwIAFCgIAAAIQAPClgqDMIgFAYQgcCBgcA9QgJAYgLArQgNA4gHCkIgCA2QgEBlgBBhIgVAPIxNAGg");
	this.shape_779.setTransform(366.2,219.1);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#373535").ss(2.5).p("AriA3QAch+Ash0IAnhbQATgwBPh+QAshFAkg3IBVjdQAEgFACgHQARgbgjhFQgEgGgEgHIgohAQgFgIgEgHQjUl2Cfj+QAHgMAIgLQA1hMBTg3QANgIANgIQA2ggAqgKQAQgEAQgDQHChLgXEOQgBAIgBAHQgLBVgyBjQgaA1gdArQgGAPgHARQgDAPgDARQAFAPAFAQIA5BOQALAPALAPQASAaAIAaQAIAYgDAOQAAACAAABQgCAPgXAIQgMAEgaAEQgNgBAAAUQAAACgBACQAAAMAGASQABAEgBADQgDAJgEAHQgBADgCADQACAFAAAEQAAAJAAAHIgBAGIADAFQAFAKgBAIQAAAIgDAMQAAADgCAEQgBAFgEAFQgCADgDAEQgIAFgCAOQgBAHAAAIQAAACAAACQgCAJAHAQQABAFAGAFQAIAKARAKQASAOACAQQABADACACQAIAPAHAJQAZAHAAAEIgXAoIAgBZQABAEABAEQgHASAAAWQAAAQABAOIAaA1QAIARAQAYQAJAMAKALICDB9QAoAwAmA0QCBCqBNDLQAWA4AKBGQABAGABAGQANBkABAaQABAZAAAXIAFCgQAAAEAAAEQAPClgpDLQgDANgCAMQgdCAgbA9QgKAZgKArQgOA3gGClQgBAagBAbQgEBlgBBhQgKAIgLAIIxNAGIgQgMIAKjCQABgLgBgSQgBg/hllbQgDgKgDgKIhvltQgCgHgCgGQhxlmBXmUg");
	this.shape_780.setTransform(366.1,219.1);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#ECB77F").s().p("Anzc5IAKjCQABgLgBgSQgBg/hllbIgGgUIhvltIgEgNQhxlmBXmUIAAgBQAch+Ash0IAnhbQATgwBPh+QAshFAkg3IBVjdQAEgFACgHQARgbgjhFIgIgNIgohAIgJgPQjUl2Cfj+IAPgXQA1hMBTg3IAagQQA2ggAqgKIAggHQHChLgXEOIgCAPQgLBVgyBjQgaA1gdArIgNAgIgGAgIAKAfIA5BOIAWAeQASAaAIAaQAIAYgDAOIAAADQgCAPgXAIQgMAEgaAEQgNgBAAAUIgBAEQAAAMAGASIAAAHQgDAJgEAHIgDAGIACAJIAAAQIgBAGIADAFQAFAKgBAIQAAAIgDAMIgCAHQgBAFgEAFIgFAHQgIAFgCAOQgBAHAAAIIAAAEQgCAJAHAQQABAFAGAFQAIAKARAKQASAOACAQIADAFQAIAPAHAJQAZAHAAAEIgXAoIAgBZIACAIQgHASAAAWQAAAQABAOIAaA1QAIARAQAYQAJAMAKALICDB9QAoAwAmA0QCBCqBNDLQAWA4AKBGIACAMQANBkABAaIABAwIAFCgIAAAIQAPClgpDLIgFAZQgdCAgbA9QgKAZgKArQgOA3gGClIgCA1QgEBlgBBhIgVAQIxNAGg");
	this.shape_781.setTransform(366.1,219.1);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#373535").ss(2.5).p("ArhA3QAch+Ash0IAnhbQATgwBPh+QAshFAkg3IBVjdQAEgFACgHQARgbgjhFQgEgGgEgHIgohAQgFgIgEgHQjUl2Cfj+QAHgMAIgLQA1hMBSg2QANgJANgIQA3ggAqgKQAQgEAPgDQHDhLgXEOQgBAIgBAHQgMBVgyBjQgZA1geAqQgGAQgHAQQgDAQgDAQQAFAPAFAQIA4BPQAMAPAKAPQATAaAIAZQAHAYgCAOQAAACAAABQgCAQgXAIQgLAEgaAEQgNgBgBAUQAAACgBABQAAAMAGATQAAAEAAACQgDAKgEAGQgBAEgCADQACAFAAAEQAAAIgBAIIAAAGIACAEQAFALAAAIQAAAIgDALQAAAEgBAEQgCAFgDAFQgDADgCAEQgIAFgCAOQgCAHAAAIQAAABAAACQgCAJAHARQABAEAFAFQAJALAQAKQASANABARQABADACACQAGAPAHAJQAZAHAAAEIgTAoIAiBYQAAADACAEQgHASAAAXQgBAQABAOIAaA1QAHARAQAYQAJAMAKALICCB+QAoAwAmAzQCBCrBNDKQAWA5AKBGQABAGABAGQANBkABAaQABAZAAAXIAFCgQAAAEAAAEQAPCkgpDMQgCAMgDAMQgcCBgbA9QgKAZgKAqQgOA4gGCkQgBAbgBAbQgEBlgBBhQgKAIgKAIIxNAGIgQgNIAKjBQABgMgBgRQgBhAhllaQgDgKgDgKIhvltQgCgHgCgGQhxlmBXmUg");
	this.shape_782.setTransform(366,219.1);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#ECB77F").s().p("Anyc4IAKjBQABgMgBgRQgBhAhllaIgGgUIhvltIgEgNQhxlmBXmUIAAgBQAch+Ash0IAnhbQATgwBPh+QAshFAkg3IBVjdQAEgFACgHQARgbgjhFIgIgNIgohAIgJgPQjUl2Cfj+IAPgXQA1hMBSg2IAagRQA3ggAqgKIAfgHQHDhLgXEOIgCAPQgMBVgyBjQgZA1geAqIgNAgIgGAgIAKAfIA4BPIAWAeQATAaAIAZQAHAYgCAOIAAADQgCAQgXAIQgLAEgaAEQgNgBgBAUIgBADQAAAMAGATIAAAGQgDAKgEAGIgDAHIACAJIgBAQIAAAGIACAEQAFALAAAIQAAAIgDALIgBAIIgFAKIgFAHQgIAFgCAOIgCAPIAAADQgCAJAHARQABAEAFAFQAJALAQAKQASANABARIADAFQAGAPAHAJQAZAHAAAEIgTAoIAiBYIACAHQgHASAAAXQgBAQABAOIAaA1QAHARAQAYQAJAMAKALICCB+QAoAwAmAzQCBCrBNDKQAWA5AKBGIACAMQANBkABAaIABAwIAFCgIAAAIQAPCkgpDMIgFAYQgcCBgbA9QgKAZgKAqQgOA4gGCkIgCA2QgEBlgBBhIgUAQIxNAGg");
	this.shape_783.setTransform(366,219.1);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#373535").ss(2.5).p("ArgA3QAch+Ash0IAnhbQATgwBPh+QAshFAkg3IBVjdQADgFADgHQARgbgjhEQgEgHgEgHIgohAQgFgHgEgIQjUl1Cej/QAIgLAHgMQA2hLBSg3QANgJANgIQA3ggApgKQARgEAPgDQHDhLgYEOQgBAHgBAIQgMBUgxBkQgaA0geArQgGAQgHAQQgDAPgDARQAFAPAFAQIA4BPQAMAPAKAPQASAaAJAZQAHAYgCAOQAAACAAABQgBAQgXAHQgMAFgaAEQgNgBgBAUQAAABgBACQAAALAGATQAAAEAAADQgDAJgEAHQgBAEgCACQACAGABADQgBAJgBAHIAAAGIACAFQAFAKgBAJQABAHgDAMQAAAEgBADQgCAGgDAEQgCAEgDAEQgIAFgCAOQgCAGAAAIQAAACAAACQgCAJAGAQQABAFAGAFQAJAKAQALQARANAAARQABADABACQAGAQAHAIQAYAHABAEIgRAoIAkBWQABAEABAEQgHASAAAWQAAAQABAOIAYA2QAHARAPAYQAJAMAKALICCB+QAoAwAmA0QCBCrBNDKQAWA5AKBGQABAGABAGQANBjABAaQABAZAAAXIAFCgQAAAEAAAEQAQCkgpDMQgDANgCAMQgcCAgbA+QgKAYgLArQgNA3gGClQgBAagBAbQgEBlgBBhQgKAJgKAHIxMAHIgQgNIAKjCQABgLgBgRQgBhAhllaQgDgKgDgKIhvltQgCgHgCgGQhxlmBXmUg");
	this.shape_784.setTransform(365.9,219.1);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#ECB77F").s().p("Anxc4IAKjCQABgLgBgRQgBhAhllaIgGgUIhvltIgEgNQhxlmBXmUIAAgBQAch+Ash0IAnhbQATgwBPh+QAshFAkg3IBVjdIAGgMQARgbgjhEIgIgOIgohAIgJgPQjUl1Cej/IAPgXQA2hLBSg3IAagRQA3ggApgKIAggHQHDhLgYEOIgCAPQgMBUgxBkQgaA0geArIgNAgIgGAgIAKAfIA4BPIAWAeQASAaAJAZQAHAYgCAOIAAADQgBAQgXAHQgMAFgaAEQgNgBgBAUIgBADQAAALAGATIAAAHQgDAJgEAHIgDAGIADAJIgCAQIAAAGIACAFQAFAKgBAJQABAHgDAMIgBAHQgCAGgDAEIgFAIQgIAFgCAOIgCAOIAAAEQgCAJAGAQQABAFAGAFQAJAKAQALQARANAAARIACAFQAGAQAHAIQAYAHABAEIgRAoIAkBWIACAIQgHASAAAWQAAAQABAOIAYA2QAHARAPAYQAJAMAKALICCB+QAoAwAmA0QCBCrBNDKQAWA5AKBGIACAMQANBjABAaIABAwIAFCgIAAAIQAQCkgpDMIgFAZQgcCAgbA+QgKAYgLArQgNA3gGClIgCA1QgEBlgBBhIgUAQIxMAHg");
	this.shape_785.setTransform(365.9,219.1);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#373535").ss(2.5).p("ArfA3QAbh+Ash0IAnhbQATgvBPh/QAshFAlg3IBUjcQAEgGACgHQARgbgihEQgEgHgEgHIgphAQgEgHgEgIQjUl1Cej+QAHgMAIgMQA1hLBSg3QANgJANgIQA3ggAqgKQAQgEAPgDQHDhLgYEOQgBAHgBAIQgMBUgyBkQgZA0geArQgGAPgIARQgCAPgDARQAEAPAFAQIA4BOQAMAQAKAPQATAZAIAZQAIAYgCAPQAAABgBACQgBAQgXAHQgLAEgaAFQgNgBgBATQgBACgBACQAAALAGATQABAEgBADQgCAJgEAHQgBADgCADQACAGAAADQAAAJgBAHIgBAGIACAFQAFAKAAAIQABAIgDALQAAAEgCAEQgBAFgDAFQgDADgCAEQgIAFgCAOQgCAHAAAIQAAACAAABQgDAJAHARQABAFAFAFQAJAKAQAKQARAOgBARQAAADACACQAEAQAGAIQAZAHABAEIgOAnIAmBWQABADABAEQgHASAAAXQgBAQABANIAYA3QAGARAQAYQAIAMALALICBB/QAoAwAlA0QCCCrBMDKQAWA5AKBFQABAGABAGQANBjACAbQABAZgBAXIAFCgQAAAEAAAEQARCjgpDNQgCAMgDANQgcCAgbA9QgKAZgLAqQgNA3gGClQgBAbgBAbQgDBlgBBhQgKAIgKAIIxMAHIgQgNIALjCQABgLgBgRQgChBhllZQgDgKgDgKIhvluQgCgGgCgHQhxllBYmUg");
	this.shape_786.setTransform(365.9,219.1);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#ECB77F").s().p("Anxc4IALjCQABgLgBgRQgChBhllZIgGgUIhvluIgEgNQhxllBYmUIAAgBQAbh+Ash0IAnhbQATgvBPh/QAshFAlg3IBUjcIAGgNQARgbgihEIgIgOIgphAIgIgPQjUl1Cej+IAPgYQA1hLBSg3IAagRQA3ggAqgKIAfgHQHDhLgYEOIgCAPQgMBUgyBkQgZA0geArIgOAgIgFAgIAJAfIA4BOIAWAfQATAZAIAZQAIAYgCAPIgBADQgBAQgXAHQgLAEgaAFQgNgBgBATIgCAEQAAALAGATIAAAHQgCAJgEAHIgDAGIACAJIgBAQIgBAGIACAFQAFAKAAAIQABAIgDALIgCAIQgBAFgDAFIgFAHQgIAFgCAOQgCAHAAAIIAAADQgDAJAHARQABAFAFAFQAJAKAQAKQARAOgBARIACAFQAEAQAGAIQAZAHABAEIgOAnIAmBWIACAHQgHASAAAXQgBAQABANIAYA3QAGARAQAYQAIAMALALICBB/QAoAwAlA0QCCCrBMDKQAWA5AKBFIACAMQANBjACAbQABAZgBAXIAFCgIAAAIQARCjgpDNIgFAZQgcCAgbA9QgKAZgLAqQgNA3gGClIgCA2QgDBlgBBhIgUAQIxMAHg");
	this.shape_787.setTransform(365.9,219.1);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#373535").ss(2.5).p("AreA3QAbh+Ash0IAnhbQATgvBPh/QAshFAkg3IBVjcQAEgGACgHQARgagihFQgEgHgEgHIgphAQgEgHgEgHQjUl2Cej+QAHgMAIgLQA1hMBSg3QANgJANgHQA2ggAqgLQAQgEAQgDQHDhLgYENQgBAIgBAIQgMBUgyBjQgaA1geArQgGAPgIAQQgCAQgDAQQAEAQAFAPIA4BPQAMAPAKAPQATAaAIAZQAIAYgCAOQAAACgBABQgBARgWAHQgLAEgbAFQgNgBgBATQgBACgBABQAAALAGAUQABAEgBACQgCAKgEAGQgBAEgCADQACAFABAEQgBAIgBAIIgBAGIACAEQAFALAAAIQABAIgDALQAAAEgBADQgCAGgDAFQgCADgDAEQgIAFgCAOQgCAHAAAIQAAABAAACQgDAJAHARQAAAEAGAFQAJALAPAKQARAOgCARQAAADACACQADAQAFAJQAZAGABAFIgLAmIAoBUQABAEACAEQgHASgBAWQAAAQABAOIAWA2QAGARAQAZQAIAMAKALICBB/QAnAxAmA0QCCCsBMDIQAWA5AKBGQABAGABAGQANBiACAcQABAZgBAXIAFCfQAAAEAAAEQARCkgoDNQgDAMgCAMQgcCAgbA+QgKAZgLAqQgOA2gFCmQgBAagBAbQgDBlgBBhQgKAJgJAIIxMAHIgQgOIALjBQABgLgBgSQgChBhllYQgDgKgDgKIhvluQgCgGgCgHQhxllBYmUg");
	this.shape_788.setTransform(365.8,219.1);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#ECB77F").s().p("Anwc3IALjBQABgLgBgSQgChBhllYIgGgUIhvluIgEgNQhxllBYmUIAAgBQAbh+Ash0IAnhbQATgvBPh/QAshFAkg3IBVjcQAEgGACgHQARgagihFIgIgOIgphAIgIgOQjUl2Cej+IAPgXQA1hMBSg3IAagQQA2ggAqgLIAggHQHDhLgYENIgCAQQgMBUgyBjQgaA1geArIgOAfIgFAgIAJAfIA4BPIAWAeQATAaAIAZQAIAYgCAOIgBADQgBARgWAHQgLAEgbAFQgNgBgBATIgCADQAAALAGAUIAAAGQgCAKgEAGQgBAEgCADIADAJIgCAQIgBAGIACAEQAFALAAAIQABAIgDALIgBAHQgCAGgDAFIgFAHQgIAFgCAOQgCAHAAAIIAAADQgDAJAHARQAAAEAGAFQAJALAPAKQARAOgCARIACAFQADAQAFAJQAZAGABAFIgLAmIAoBUIADAIQgHASgBAWQAAAQABAOIAWA2QAGARAQAZQAIAMAKALICBB/QAnAxAmA0QCCCsBMDIQAWA5AKBGIACAMQANBiACAcQABAZgBAXIAFCfIAAAIQARCkgoDNIgFAYQgcCAgbA+QgKAZgLAqQgOA2gFCmIgCA1QgDBlgBBhIgTARIxMAHg");
	this.shape_789.setTransform(365.8,219.1);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#373535").ss(2.5).p("ArdA3QAbh+Ash0IAnhbQATgvBPh+QAshGAkg3IBVjcQAEgGACgHQARgagihFQgEgHgEgHIgphAQgEgHgEgHQjUl2Cdj+QAIgMAHgLQA2hMBSg3QANgIANgIQA2ggAqgLQAQgEAPgDQHEhLgZENQgBAIgBAIQgMBUgyBjQgaA0gdArQgHAQgHAQQgDAPgDARQAEAPAEAQIA5BPQAMAPAKAPQASAaAJAZQAIAXgCAPQAAACgBABQAAARgXAHQgLAEgaAFQgNgBgCATQgBABgBACQgBALAHATQABAEgBADQgCAJgEAHQgBAEgCADQACAFABAEQgBAIgBAHIgCAGIADAFQAFAKAAAIQABAIgDAMQAAADgBAEQgCAGgDAEQgCAEgDAEQgIAFgCAOQgCAGAAAIQAAACAAACQgDAIAGARQABAFAGAFQAIAKAQALQARAOgEARQAAADABACQADAQAFAJQAYAHABAEIgHAmIAqBTQABADABAEQgGASgBAXQgBAPABAOIAWA3QAFARAPAZQAJAMAKALICACAQAnAxAmAzQCBCtBNDIQAVA5ALBFQABAGABAGQANBiABAcQABAZAAAXIAFCgQAAAEAAAEQARCjgoDNQgCANgDAMQgcCAgbA+QgJAZgLApQgOA2gFCmQgBAbgBAbQgDBlgBBhQgJAJgKAIIxMAHIgPgOIALjBQABgMgBgRQgDhChklYQgDgKgDgKIhvltQgCgGgCgHQhxllBYmUg");
	this.shape_790.setTransform(365.7,219.1);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#ECB77F").s().p("Anvc3IALjBQABgMgBgRQgDhChklYIgGgUIhvltIgEgNQhxllBYmUIAAgBQAbh+Ash0IAnhbQATgvBPh+IBQh9IBVjcQAEgGACgHQARgagihFIgIgOIgphAIgIgOQjUl2Cdj+IAPgXQA2hMBSg3IAagQQA2ggAqgLQAQgEAPgDQHEhLgZENIgCAQQgMBUgyBjQgaA0gdArIgOAgIgGAgIAIAfIA5BPQAMAPAKAPQASAaAJAZQAIAXgCAPIgBADQAAARgXAHQgLAEgaAFQgNgBgCATIgCADQgBALAHATIAAAHQgCAJgEAHIgDAHIADAJIgCAPIgCAGIADAFQAFAKAAAIQABAIgDAMIgBAHQgCAGgDAEIgFAIQgIAFgCAOIgCAOIAAAEQgDAIAGARQABAFAGAFQAIAKAQALQARAOgEARIABAFQADAQAFAJQAYAHABAEIgHAmIAqBTIACAHQgGASgBAXQgBAPABAOIAWA3QAFARAPAZQAJAMAKALICACAQAnAxAmAzQCBCtBNDIQAVA5ALBFIACAMQANBiABAcIABAwIAFCgIAAAIQARCjgoDNIgFAZQgcCAgbA+QgJAZgLApQgOA2gFCmIgCA2QgDBlgBBhIgTARIxMAHg");
	this.shape_791.setTransform(365.7,219.1);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#373535").ss(2.5).p("ArcA3QAbh+Ash0IAnhbQATgvBPh+QAshGAkg3IBVjcQAEgGACgGQARgbgihFQgEgHgEgHIgohAQgFgHgEgHQjUl1Cdj/QAIgLAHgMQA1hMBTg3QANgIANgIQA2ggAqgLQAQgEAPgDQHEhLgZENQgBAIgBAIQgNBUgyBjQgZA0geArQgHAPgHARQgDAPgDARQAEAPAEAQIA5BOQALAQALAPQASAZAJAZQAHAYgBAPQAAABgBACQAAARgWAHQgLAEgbAFQgNgBgCASQgBACgBACQgBAKAHAUQAAAEAAADQgCAJgDAHQgBAEgCACQACAGAAADQgBAJgCAHIgBAGIADAEQAFALgBAIQACAIgDALQAAAEgBAEQgBAFgEAFQgCADgDAEQgHAFgDAOQgCAHAAAIQAAACAAABQgDAJAGARQABAEAGAGQAIAKAQALQAQAOgFARQAAADABACQABAQAFAJQAYAHACAEIgFAmIAsBSQABADACAEQgHASgBAWQAAAQAAAOIAVA3QAFARAPAZQAJAMAJAMICACAQAnAwAmA0QCBCtBMDIQAWA5ALBFQABAGABAGQANBhABAdQABAZAAAXIAFCgQAAAEAAAEQASCigoDOQgDAMgCAMQgcCAgbA+QgKAagKApQgOA1gFCnQgBAagBAbQgDBlgBBhQgJAJgJAJIxMAHIgPgOIALjCQABgLgBgRQgDhChklYQgDgKgDgKIhvltQgCgGgCgHQhxllBYmUg");
	this.shape_792.setTransform(365.6,219.1);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#ECB77F").s().p("Anuc3IALjCQABgLgBgRQgDhChklYIgGgUIhvltIgEgNQhxllBYmUIAAgBQAbh+Ash0IAnhbQATgvBPh+QAshGAkg3IBVjcQAEgGACgGQARgbgihFIgIgOIgohAIgJgOQjUl1Cdj/IAPgXQA1hMBTg3IAagQQA2ggAqgLQAQgEAPgDQHEhLgZENIgCAQQgNBUgyBjQgZA0geArIgOAgIgGAgIAIAfIA5BOIAWAfQASAZAJAZQAHAYgBAPIgBADQAAARgWAHQgLAEgbAFQgNgBgCASIgCAEQgBAKAHAUIAAAHQgCAJgDAHQgBAEgCACQACAGAAADIgDAQIgBAGIADAEQAFALgBAIQACAIgDALIgBAIQgBAFgEAFIgFAHQgHAFgDAOQgCAHAAAIIAAADQgDAJAGARQABAEAGAGQAIAKAQALQAQAOgFARIABAFQABAQAFAJQAYAHACAEIgFAmIAsBSIADAHQgHASgBAWIAAAeIAVA3QAFARAPAZIASAYICACAQAnAwAmA0QCBCtBMDIQAWA5ALBFIACAMQANBhABAdIABAwIAFCgIAAAIQASCigoDOIgFAYQgcCAgbA+QgKAagKApQgOA1gFCnIgCA1QgDBlgBBhIgSASIxMAHg");
	this.shape_793.setTransform(365.6,219.1);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#373535").ss(2.5).p("ArbA3QAbh+Ash0IAnhbQATgvBPh+QAshGAkg3IBVjcQAEgGACgGQARgbgihFQgEgGgEgHIgohAQgFgIgEgHQjUl1Cdj+QAHgMAIgMQA1hLBSg3QANgJANgIQA3ggApgLQARgEAPgDQHEhLgaENQgBAIgBAHQgMBVgyBjQgaA0geArQgHAPgHAQQgDAQgDAQQAEAQAEAQIA4BOQAMAPAKAPQATAaAJAZQAHAXgBAPQAAACgBABQAAARgWAIQgLAEgaAFQgOgBgCASQgBACgBABQgBAKAHAVQAAAEAAACQgCAKgDAHQgBADgCADQACAFAAAEQgBAJgCAHIgBAGIACAEQAFAKAAAJQACAIgCALQgBAEgBADQgBAGgEAFQgCADgCAEQgIAFgDAOQgCAHAAAHQAAACAAACQgDAIAGARQABAFAFAFQAJALAPAKQAQAPgFARQgBADABACQAAAQAEAJQAYAHACAEIgBAlIAtBRQACADABAEQgGASgBAXQgBAPABAOIATA3QAFASAPAZQAIAMAKAMIB/CAQAnAxAlA0QCCCtBMDHQAWA6AKBFQABAGABAGQAOBhABAdQABAZAAAWIAFCgQAAAEAAAEQASCjgoDNQgCANgDAMQgbCAgbA+QgKAagLAoQgOA1gFCnQgBAbAAAbQgDBlgBBhQgJAJgJAJIxLAHIgPgOIALjCQABgLgBgSQgDhChklXQgDgKgDgKIhvltQgCgHgCgGQhxllBYmUg");
	this.shape_794.setTransform(365.5,219.1);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#ECB77F").s().p("Antc3IALjCQABgLgBgSQgDhChklXIgGgUIhvltIgEgNQhxllBYmUIAAgBQAbh+Ash0IAnhbQATgvBPh+QAshGAkg3IBVjcQAEgGACgGQARgbgihFIgIgNIgohAIgJgPQjUl1Cdj+IAPgYQA1hLBSg3IAagRQA3ggApgLQARgEAPgDQHEhLgaENIgCAPQgMBVgyBjQgaA0geArIgOAfIgGAgIAIAgIA4BOQAMAPAKAPQATAaAJAZQAHAXgBAPIgBADQAAARgWAIQgLAEgaAFQgOgBgCASIgCADQgBAKAHAVIAAAGQgCAKgDAHIgDAGIACAJIgDAQIgBAGIACAEQAFAKAAAJQACAIgCALIgCAHQgBAGgEAFIgEAHQgIAFgDAOQgCAHAAAHIAAAEQgDAIAGARQABAFAFAFQAJALAPAKQAQAPgFARIAAAFQAAAQAEAJQAYAHACAEIgBAlIAtBRIADAHQgGASgBAXQgBAPABAOIATA3QAFASAPAZQAIAMAKAMIB/CAQAnAxAlA0QCCCtBMDHQAWA6AKBFIACAMQAOBhABAdIABAvIAFCgIAAAIQASCjgoDNIgFAZQgbCAgbA+QgKAagLAoQgOA1gFCnIgBA2QgDBlgBBhIgSASIxLAHg");
	this.shape_795.setTransform(365.5,219.1);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#373535").ss(2.5).p("ArbA3QAch+Ash0IAnhbQASgvBPh+QAshGAlg3IBUjcQAEgFADgHQARgbgihEQgEgHgEgHIgphAQgEgHgEgIQjUl1Cdj+QAHgMAIgLQA1hMBSg3QANgJANgIQA2ggAqgLQAQgEAPgCQHEhMgaENQgBAIgBAHQgMBVgyBjQgaAzgeAsQgHAPgIAQQgCAPgDARQAEAPADAQIA5BPQAMAPAKAPQASAaAJAZQAIAXgBAPQgBACAAABQAAARgWAIQgLAEgaAFQgOgBgCASQgBACgBABQgCAKAHAUQABAEAAADQgCAKgDAGQgBAEgCADQACAFAAAEQgCAIgBAIIgCAFIADAFQAFAKAAAIQABAIgCAMQAAADgBAEQgBAGgEAEQgCAEgCAEQgIAFgDAOQgCAGgBAIQAAACAAACQgDAIAGARQABAFAGAFQAIALAPAKQAQAPgHARQAAADAAADQgBAQAEAIQAYAHACAEIACAlIAvBQQACADACAEQgHASgBAWQgBAQAAAOIATA3QAFASAOAZQAJANAJALIB/CBQAnAxAlA0QCCCtBLDHQAWA6ALBEQABAGABAGQANBhACAdQABAZgBAXIAGCgQAAAEAAAEQASCigoDOQgCAMgDANQgbB/gbA/QgKAagKAoQgOA0gFCoQgBAagBAbQgDBlAABhQgJAKgIAJIxMAHIgOgPIAKjBQABgLgBgSQgDhDhklWQgDgKgDgKIhultQgCgHgCgGQhxllBXmUg");
	this.shape_796.setTransform(365.4,219.1);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#ECB77F").s().p("Ansc2IAKjBQABgLgBgSQgDhDhklWIgGgUIhultIgEgNQhxllBXmUIAAgBQAch+Ash0IAnhbQASgvBPh+QAshGAlg3IBUjcQAEgFADgHQARgbgihEIgIgOIgphAIgIgPQjUl1Cdj+IAPgXQA1hMBSg3IAagRQA2ggAqgLIAfgGQHEhMgaENIgCAPQgMBVgyBjQgaAzgeAsIgPAfIgFAgIAHAfIA5BPIAWAeQASAaAJAZQAIAXgBAPIgBADQAAARgWAIQgLAEgaAFQgOgBgCASIgCADQgCAKAHAUIABAHQgCAKgDAGQgBAEgCADQACAFAAAEIgDAQIgCAFIADAFQAFAKAAAIQABAIgCAMIgBAHQgBAGgEAEIgEAIQgIAFgDAOIgDAOIAAAEQgDAIAGARQABAFAGAFQAIALAPAKQAQAPgHARIAAAGQgBAQAEAIQAYAHACAEIACAlIAvBQIAEAHQgHASgBAWIgBAeIATA3QAFASAOAZQAJANAJALIB/CBQAnAxAlA0QCCCtBLDHQAWA6ALBEIACAMQANBhACAdIAAAwIAGCgIAAAIQASCigoDOIgFAZQgbB/gbA/QgKAagKAoQgOA0gFCoIgCA1QgDBlAABhIgRATIxMAHg");
	this.shape_797.setTransform(365.4,219.1);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#373535").ss(2.5).p("ArZA3QAbh+Ash0IAnhbQATgvBPh+QAshGAkg3IBVjcQADgFADgHQASgbgjhEQgEgHgEgHIgohAQgEgHgFgIQjUl1Cdj+QAHgMAIgLQA1hMBSg3QANgJANgIQA2ggAqgLQAQgEAPgCQHFhNgbEOQgBAHgBAIQgMBVgzBiQgZA0gfArQgHAPgHARQgDAPgDARQAEAPAEAQIA4BOQAMAQAKAPQATAZAIAZQAIAYgBAOQAAACAAABQgBASgVAIQgLAEgbAEQgNAAgDARQgBACgBACQgCAJAHAVQABAEAAADQgCAJgDAHQgBAEgBACQABAGAAADQgBAJgCAHIgBAGIACAEQAFALAAAIQABAIgBALQAAAEgBAEQgCAFgDAFQgCADgDAEQgHAFgDAOQgCAHgBAIQAAABAAACQgEAIAHASQABAEAFAFQAIALAPALQAQAPgIARQgBADABADQgDAQADAIQAYAHADAEIAFAlIAxBOQABAEADADQgHASgBAWQgBAQAAAOIASA4QAEARAPAZQAIAOAJALIB+CCQAnAwAlA0QCCCuBLDHQAWA5ALBFQABAGABAGQANBgACAeQABAZgBAXIAGCfQAAAEAAAEQATCigoDPQgCAMgDAMQgbB/gaA/QgLAagKAoQgOA0gFCpQgBAZgBAcQgCBlAABhQgJAJgIAJIxMAIIgOgPIALjCQABgKgCgSQgChEhklVQgDgKgDgKIhvltQgCgHgCgGQhxlmBYmTg");
	this.shape_798.setTransform(365.3,219.1);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#ECB77F").s().p("Anrc2IALjCQABgKgCgSQgChEhklVIgGgUIhvltIgEgNQhxlmBYmTIAAgBQAbh+Ash0IAnhbQATgvBPh+QAshGAkg3IBVjcQADgFADgHQASgbgjhEIgIgOIgohAIgJgPQjUl1Cdj+IAPgXQA1hMBSg3IAagRQA2ggAqgLIAfgGQHFhNgbEOIgCAPQgMBVgzBiQgZA0gfArIgOAgIgGAgIAIAfIA4BOIAWAfQATAZAIAZQAIAYgBAOIAAADQgBASgVAIQgLAEgbAEQgNAAgDARIgCAEQgCAJAHAVIABAHQgCAJgDAHIgCAGIABAJIgDAQIgBAGIACAEQAFALAAAIQABAIgBALIgBAIQgCAFgDAFIgFAHQgHAFgDAOIgDAPIAAADQgEAIAHASQABAEAFAFQAIALAPALQAQAPgIARIAAAGQgDAQADAIQAYAHADAEIAFAlIAxBOIAEAHQgHASgBAWIgBAeIASA4QAEARAPAZQAIAOAJALIB+CCQAnAwAlA0QCCCuBLDHQAWA5ALBFIACAMQANBgACAeQABAZgBAXIAGCfIAAAIQATCigoDPIgFAYQgbB/gaA/QgLAagKAoQgOA0gFCpIgCA1QgCBlAABhIgRASIxMAIg");
	this.shape_799.setTransform(365.3,219.1);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#373535").ss(2.5).p("ArZA3QAbh+Ath0IAnhbQASgvBPh+QAshGAlg3IBUjbQAEgGACgHQASgagihFQgEgHgEgHIgphAQgEgHgEgHQjUl2Ccj+QAHgMAIgLQA1hMBSg3QANgJANgHQA2ggAqgMQAQgEAPgCQHFhNgbENQgBAIgBAIQgMBVgzBiQgaA0geArQgHAPgIAQQgCAQgDAQQADAQAEAQIA4BOQAMAPAKAPQATAaAJAZQAIAXgBAPQgBACAAABQAAASgVAIQgLAEgbAEQgNAAgDARQgBACgCABQgCAKAIAVQABAEgBACQgBAKgDAHQgBADgCADQACAGAAADQgCAJgBAHIgCAGIACAEQAFAKABAIQABAJgBALQgBADgBAEQgBAGgDAFQgCADgDAEQgIAFgDAOQgCAHgBAHQAAACAAACQgDAIAGARQABAFAFAFQAIALAPALQAQAPgJARQgBADAAADQgEAQADAJQAYAGACAEIAJAlIAzBNQABADADAEQgHASgBAWQgCAQABAOIARA4QADARAPAZQAIAOAKALIB9CCQAnAxAkA0QCDCuBLDGQAVA6ALBEQABAGABAGQAOBgACAfQABAZgBAWIAFCgQAAAEAAAEQAUCigoDOQgCAMgDANQgbB/gaA/QgKAagLAoQgOAzgFCpQgBAaAAAbQgDBlAABhQgIAKgIAJIxMAIIgNgPIAKjCQABgLgBgSQgDhEhklVQgDgKgDgKIhultQgCgGgCgHQhxllBXmTg");
	this.shape_800.setTransform(365.2,219.1);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#ECB77F").s().p("Anqc2IAKjCQABgLgBgSQgDhEhklVIgGgUIhultIgEgNQhxllBXmTIAAgBQAbh+Ath0IAnhbQASgvBPh+QAshGAlg3IBUjbIAGgNQASgagihFIgIgOIgphAIgIgOQjUl2Ccj+IAPgXQA1hMBSg3IAagQQA2ggAqgMIAfgGQHFhNgbENIgCAQQgMBVgzBiQgaA0geArIgPAfIgFAgIAHAgIA4BOQAMAPAKAPQATAaAJAZQAIAXgBAPIgBADQAAASgVAIQgLAEgbAEQgNAAgDARIgDADQgCAKAIAVIAAAGQgBAKgDAHIgDAGIACAJIgDAQIgCAGIACAEQAFAKABAIQABAJgBALIgCAHQgBAGgDAFIgFAHQgIAFgDAOIgDAOIAAAEQgDAIAGARQABAFAFAFQAIALAPALQAQAPgJARIgBAGQgEAQADAJQAYAGACAEIAJAlIAzBNIAEAHQgHASgBAWQgCAQABAOIARA4QADARAPAZQAIAOAKALIB9CCQAnAxAkA0QCDCuBLDGQAVA6ALBEIACAMQAOBgACAfQABAZgBAWIAFCgIAAAIQAUCigoDOIgFAZQgbB/gaA/QgKAagLAoQgOAzgFCpIgBA1QgDBlAABhIgQATIxMAIg");
	this.shape_801.setTransform(365.2,219.1);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#373535").ss(2.5).p("ArYA3QAbh+Ath0IAnhbQASgvBPh+QAshGAlg2IBUjcQAEgGACgHQASgagihFQgEgHgEgHIgohAQgFgHgEgHQjUl1Ccj/QAHgLAIgMQA1hMBSg3QANgJANgHQA2ggAqgMQAQgEAPgCQHFhNgbENQgBAIgBAIQgNBUgzBjQgZAzgfAsQgHAPgIAQQgCAPgDARQADAPAEAQIA4BPQAMAPAKAPQATAaAJAYQAHAYAAAPQgBABAAACQAAASgVAHQgKAFgbAEQgOAAgDARQgBACgCABQgCAJAIAVQAAAEAAADQgBAKgDAGQgBAEgBADQABAGAAADQgCAIgCAIIgBAFIACAFQAFAKAAAIQACAIgBALQAAAEgBAEQgCAFgDAFQgCADgDAEQgHAGgDANQgDAHgBAIQAAACAAABQgDAIAGASQABAEAFAGQAIALAPALQAPAOgKASQgBADAAADQgFAQACAJQAYAGADAEIALAlIA1BMQACADACADQgHASgBAWQgBAQAAAOIAQA5QADARAPAZQAIAOAJALIB9CDQAnAxAkA0QCDCuBKDGQAWA6ALBEQABAGABAGQAOBfACAfQABAZgBAXIAFCgQAAAEAAAEQAUChgnDPQgDAMgCAMQgbB/gaA/QgLAbgKAnQgPAzgECqQgBAZAAAcQgDBlAABhQgIAJgIAKIxLAIIgNgQIAKjBQABgLgBgSQgDhEhklVQgDgKgDgKIhultQgCgGgCgHQhxllBXmTg");
	this.shape_802.setTransform(365.1,219.1);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#ECB77F").s().p("Anpc1IAKjBQABgLgBgSQgDhEhklVIgGgUIhultIgEgNQhxllBXmTIAAgBQAbh+Ath0IAnhbQASgvBPh+QAshGAlg2IBUjcIAGgNQASgagihFIgIgOIgohAIgJgOQjUl1Ccj/IAPgXQA1hMBSg3IAagQQA2ggAqgMIAfgGQHFhNgbENIgCAQQgNBUgzBjQgZAzgfAsIgPAfIgFAgIAHAfIA4BPIAWAeQATAaAJAYQAHAYAAAPIgBADQAAASgVAHQgKAFgbAEQgOAAgDARIgDADQgCAJAIAVIAAAHQgBAKgDAGIgCAHIABAJIgEAQIgBAFIACAFQAFAKAAAIQACAIgBALIgBAIQgCAFgDAFIgFAHQgHAGgDANQgDAHgBAIIAAADQgDAIAGASQABAEAFAGQAIALAPALQAPAOgKASIgBAGQgFAQACAJQAYAGADAEIALAlIA1BMIAEAGQgHASgBAWIgBAeIAQA5QADARAPAZQAIAOAJALIB9CDQAnAxAkA0QCDCuBKDGQAWA6ALBEIACAMQAOBfACAfQABAZgBAXIAFCgIAAAIQAUChgnDPIgFAYQgbB/gaA/QgLAbgKAnQgPAzgECqIgBA1QgDBlAABhIgQATIxLAIg");
	this.shape_803.setTransform(365.1,219.1);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#373535").ss(2.5).p("ArXA3QAbh+Ath0IAnhbQASgvBPh+QAshFAlg3IBUjcQAEgGACgHQASgagihFQgEgHgEgHIgohAQgFgHgEgHQjUl1Ccj+QAHgMAIgMQA1hLBRg4QANgIANgIQA3ggApgLQARgFAPgCQHFhNgcENQgBAIgBAIQgNBUgyBjQgaAzgeArQgIAQgHAQQgDAPgDARQADAPADAQIA5BPQAMAPAKAPQASAZAJAZQAIAXAAAPQgBACAAABQAAATgUAHQgLAFgbAEQgNAAgEARQgBABgCACQgCAIAIAWQAAAEAAADQgBAJgDAHQgBAEgBADQABAFAAAEQgCAIgCAHIgCAGIADAEQAFAKAAAJQACAIgBALQAAAEgBAEQgCAFgDAFQgCADgCAEQgIAGgDANQgCAHgCAHQAAACAAACQgEAIAGARQACAFAFAFQAIALAPALQAPAPgMASQgBADgBADQgFAQACAJQAXAGADAEIAPAkIA3BLQABADADAEQgHASgBAWQgCAQAAAOIAQA4QACASAOAZQAIAOAKALIB8CEQAnAxAkAzQCCCvBLDGQAWA6ALBEQABAGABAGQAOBeABAgQABAZAAAWIAFCgQAAAEAAAEQAVChgoDPQgCANgDAMQgaB/gbA/QgKAbgLAnQgOAygECqQgBAaAAAbQgDBlABBhQgIAKgIAKIxLAIIgNgQIAKjBQABgLgBgSQgEhFhjlUQgDgKgDgKIhultQgCgGgCgHQhxllBXmTg");
	this.shape_804.setTransform(365,219.1);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#ECB77F").s().p("Anoc1IAKjBQABgLgBgSQgEhFhjlUIgGgUIhultIgEgNQhxllBXmTIAAgBQAbh+Ath0IAnhbQASgvBPh+QAshFAlg3IBUjcIAGgNQASgagihFIgIgOIgohAIgJgOQjUl1Ccj+IAPgYQA1hLBRg4IAagQQA3ggApgLQARgFAPgCQHFhNgcENIgCAQQgNBUgyBjQgaAzgeArIgPAgIgGAgIAGAfIA5BPQAMAPAKAPQASAZAJAZQAIAXAAAPIgBADQAAATgUAHQgLAFgbAEQgNAAgEARIgDADQgCAIAIAWIAAAHQgBAJgDAHIgCAHIABAJIgEAPIgCAGIADAEQAFAKAAAJQACAIgBALIgBAIQgCAFgDAFIgEAHQgIAGgDANIgEAOIAAAEQgEAIAGARQACAFAFAFQAIALAPALQAPAPgMASIgCAGQgFAQACAJQAXAGADAEIAPAkIA3BLIAEAHQgHASgBAWIgCAeIAQA4QACASAOAZQAIAOAKALIB8CEQAnAxAkAzQCCCvBLDGQAWA6ALBEIACAMQAOBeABAgIABAvIAFCgIAAAIQAVChgoDPIgFAZQgaB/gbA/QgKAbgLAnQgOAygECqIgBA1QgDBlABBhIgQAUIxLAIg");
	this.shape_805.setTransform(365,219.1);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#373535").ss(2.5).p("ArWA3QAbh+Ath0IAnhaQASgwBPh+QAshFAkg3IBVjcQAEgGACgHQASgagihFQgEgHgEgHIgohAQgFgHgEgHQjUl1Ccj+QAHgMAIgLQA0hMBSg3QANgJANgIQA2ggAqgLQAQgFAPgCQHGhNgcENQgBAIgBAHQgNBVgzBiQgaAzgeAsQgIAPgHAQQgDAQgDAQQADAQADAQIA5BOQALAPALAPQASAaAJAZQAIAXAAAPQgBACAAABQAAASgUAIQgKAFgbAEQgOAAgEAQQgBACgCABQgCAJAHAVQABAEAAADQgBAKgDAHQAAAEgCACQACAGAAADQgDAJgCAHIgCAFIADAFQAFAKAAAIQACAIgBAMQAAADgBAEQgBAGgEAEQgBAEgDAEQgIAFgDAOQgCAGgCAIQAAACAAACQgEAHAGASQABAEAGAGQAIALAOALQAPAPgNASQgBADgBADQgHAQACAJQAXAGADAEIASAkIA5BKQACADACADQgGASgCAWQgBAQAAAOIAOA5QACARAOAaQAIAOAJALIB8CEQAmAxAlA0QCCCvBLDFQAWA6ALBEQABAGABAGQAOBfABAfQABAZAAAXIAFCgQAAAEAAAEQAVChgnDPQgDAMgCAMQgaB/gbBAQgKAbgLAmQgOAygECrQgBAZgBAcQgCBlABBhQgIAKgIAKIxLAIIgMgQIAKjCQABgKgBgTQgEhFhjlTQgDgKgDgKIhultQgCgGgCgHQhxllBXmTg");
	this.shape_806.setTransform(364.9,219.1);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#ECB77F").s().p("Annc1IAKjCQABgKgBgTQgEhFhjlTIgGgUIhultIgEgNQhxllBXmTIAAgBQAbh+Ath0IAnhaQASgwBPh+QAshFAkg3IBVjcQAEgGACgHQASgagihFIgIgOIgohAIgJgOQjUl1Ccj+IAPgXQA0hMBSg3IAagRQA2ggAqgLQAQgFAPgCQHGhNgcENIgCAPQgNBVgzBiQgaAzgeAsIgPAfIgGAgIAGAgIA5BOIAWAeQASAaAJAZQAIAXAAAPIgBADQAAASgUAIQgKAFgbAEQgOAAgEAQIgDADQgCAJAHAVIABAHQgBAKgDAHIgCAGIACAJIgFAQIgCAFIADAFQAFAKAAAIQACAIgBAMIgBAHQgBAGgEAEIgEAIQgIAFgDAOIgEAOIAAAEQgEAHAGASQABAEAGAGQAIALAOALQAPAPgNASIgCAGQgHAQACAJQAXAGADAEIASAkIA5BKIAEAGQgGASgCAWIgBAeIAOA5QACARAOAaQAIAOAJALIB8CEQAmAxAlA0QCCCvBLDFQAWA6ALBEIACAMQAOBfABAfIABAwIAFCgIAAAIQAVChgnDPIgFAYQgaB/gbBAQgKAbgLAmQgOAygECrIgCA1QgCBlABBhIgQAUIxLAIg");
	this.shape_807.setTransform(364.9,219.1);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#373535").ss(2.5).p("ArVA3QAbh+Ash0IAnhaQASgvBPh/QAshFAlg3IBUjcQAEgGADgHQASgagjhFQgDgGgEgHIgphAQgEgIgEgHQjUl1Cbj+QAHgMAIgLQA1hMBRg3QANgJANgIQA2ggAqgLQAQgFAQgCQHFhNgcENQgBAIgBAHQgNBVgzBiQgaAzgeAsQgIAPgIAQQgDAPgCARQADAPACARIA5BOQAMAPAKAPQATAaAJAYQAIAXgBAPQAAACAAABQAAATgUAIQgKAEgcAFQgNAAgEAQQgCACgBABQgDAIAIAWQABAEAAADQgBAKgDAGQgBAEgBADQABAGAAADQgCAJgCAHIgDAFIADAFQAFAKABAIQABAIAAALQAAAEgBAEQgCAFgDAFQgCADgCAEQgIAGgDANQgDAHgBAIQAAABAAACQgEAIAGASQABAEAFAFQAIAMAOALQAPAPgOASQgCADAAADQgJAQABAJQAXAGAEAEIAVAkIA7BIQACADACAEQgGASgCAWQgCAPAAAPIAOA5QACARAOAaQAHAOAKALIB6CFQAnAxAkA0QCDCvBKDFQAWA6ALBEQABAGABAGQAOBeACAgQABAZgBAXIAGCfQAAAEAAAEQAVChgnDQQgCAMgDAMQgaB/gbA/QgKAcgLAmQgOAxgECrQgBAaAAAbQgCBlAABhQgHAKgIALIxKAIIgNgRIALjBQABgLgCgSQgEhGhjlTQgDgJgDgKIhultQgCgHgCgGQhxllBYmTg");
	this.shape_808.setTransform(364.9,219.1);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#ECB77F").s().p("Annc0IALjBQABgLgCgSQgEhGhjlTIgGgTIhultIgEgNQhxllBYmTIAAgBQAbh+Ash0IAnhaQASgvBPh/QAshFAlg3IBUjcQAEgGADgHQASgagjhFIgHgNIgphAIgIgPQjUl1Cbj+IAPgXQA1hMBRg3IAagRQA2ggAqgLQAQgFAQgCQHFhNgcENIgCAPQgNBVgzBiQgaAzgeAsIgQAfIgFAgIAFAgIA5BOIAWAeQATAaAJAYQAIAXgBAPIAAADQAAATgUAIQgKAEgcAFQgNAAgEAQIgDADQgDAIAIAWIABAHQgBAKgDAGIgCAHIABAJIgEAQIgDAFIADAFQAFAKABAIQABAIAAALIgBAIQgCAFgDAFIgEAHQgIAGgDANQgDAHgBAIIAAADQgEAIAGASQABAEAFAFQAIAMAOALQAPAPgOASIgCAGQgJAQABAJQAXAGAEAEIAVAkIA7BIIAEAHQgGASgCAWIgCAeIAOA5QACARAOAaQAHAOAKALIB6CFQAnAxAkA0QCDCvBKDFQAWA6ALBEIACAMQAOBeACAgQABAZgBAXIAGCfIAAAIQAVChgnDQIgFAYQgaB/gbA/QgKAcgLAmQgOAxgECrIgBA1QgCBlAABhIgPAVIxKAIg");
	this.shape_809.setTransform(364.9,219.1);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#373535").ss(2.5).p("ArUA3QAbh+AshzIAnhbQASgvBPh/QAshFAlg3IBUjcQAEgGACgGQATgagihFQgEgHgEgHIgphAQgEgHgEgIQjUl0Cbj/QAHgLAIgMQA1hMBRg3QANgJANgIQA2ggAqgLQAQgFAPgCQHGhNgdENQgBAHgBAIQgNBVgzBiQgaAzgeAsQgIAPgIAQQgDAPgCARQACAPADAQIA5BPQALAPALAPQASAZAKAZQAIAXgBAPQAAACAAABQAAATgUAIQgKAEgbAFQgOAAgEAQQgCABgBACQgDAIAIAWQABAEAAADQgBAJgDAHQAAAEgCADQACAFAAAEQgDAIgCAHIgDAGIADAEQAFAKAAAJQACAIAAALQAAAEgBADQgBAGgEAFQgBADgDAEQgIAGgDANQgDAHgBAHQAAACAAACQgFAHAGASQABAFAGAFQAIALAOAMQAOAPgPATQgCACgBADQgJARABAIQAWAGAFAEIAXAkIA9BHQACADADADQgHASgCAWQgBAQAAAOIAMA5QACASANAaQAIAOAJALIB6CFQAnAyAkA0QCDCvBKDFQAWA6ALBDQABAGABAGQAOBeACAhQABAZgBAWIAGCgQAAAEAAAEQAVCggmDQQgDAMgCANQgbB+gaBAQgKAbgLAmQgOAxgECsQgBAZAAAcQgCBlAABhQgHAKgHAKIxLAJIgMgRIALjBQABgLgCgSQgEhGhjlTQgDgKgDgKIhulsQgCgHgCgGQhxllBYmTg");
	this.shape_810.setTransform(364.8,219.1);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#ECB77F").s().p("Anmc0IALjBQABgLgCgSQgEhGhjlTIgGgUIhulsIgEgNQhxllBYmTIAAgBQAbh+AshzIAnhbQASgvBPh/QAshFAlg3IBUjcIAGgMQATgagihFIgIgOIgphAIgIgPQjUl0Cbj/IAPgXQA1hMBRg3IAagRQA2ggAqgLQAQgFAPgCQHGhNgdENIgCAPQgNBVgzBiQgaAzgeAsIgQAfIgFAgIAFAfIA5BPIAWAeQASAZAKAZQAIAXgBAPIAAADQAAATgUAIQgKAEgbAFQgOAAgEAQIgDADQgDAIAIAWIABAHQgBAJgDAHIgCAHIACAJIgFAPIgDAGIADAEQAFAKAAAJQACAIAAALIgBAHQgBAGgEAFIgEAHQgIAGgDANQgDAHgBAHIAAAEQgFAHAGASQABAFAGAFQAIALAOAMQAOAPgPATIgDAFQgJARABAIQAWAGAFAEIAXAkIA9BHIAFAGQgHASgCAWIgBAeIAMA5QACASANAaQAIAOAJALIB6CFQAnAyAkA0QCDCvBKDFQAWA6ALBDIACAMQAOBeACAhQABAZgBAWIAGCgIAAAIQAVCggmDQIgFAZQgbB+gaBAQgKAbgLAmQgOAxgECsIgBA1QgCBlAABhIgOAUIxLAJg");
	this.shape_811.setTransform(364.8,219.1);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#373535").ss(2.5).p("ArTA3QAbh+AshzIAnhbQASgvBPh/QAshFAlg3IBUjcQAEgGACgGQATgagihFQgEgHgEgHIgphAQgEgHgEgIQjUl0Cbj+QAHgMAIgMQA0hMBSg3QANgJANgHQA2ghAqgLQAQgFAPgCQHGhNgdEMQgBAIgBAIQgOBVgyBiQgaAygfAsQgIAPgIAQQgCAQgDAQQACAQADAQIA4BOQAMAQAKAPQATAZAJAYQAIAXAAAQQAAABAAACQAAATgTAIQgKAEgcAFQgNAAgFAPQgCACgBABQgEAIAJAWQAAAEAAADQAAAKgDAHQAAAEgCADQACAFAAAEQgDAIgDAHIgCAFIACAFQAFAKABAIQACAIAAALQAAAEgBAEQgBAGgDAEQgCAEgDAEQgHAFgEAOQgCAGgCAIQAAACAAABQgFAIAGASQABAEAFAGQAIALAOAMQAOAPgQATQgCACgBADQgKARAAAJQAWAFAFAEIBaBqQACACACAEQgGASgCAWQgCAPAAAOIAMA6QABASANAaQAIAOAJAMIB5CFQAnAxAkA0QCDCwBKDEQAVA7AMBDQABAGABAGQAOBdACAhQABAZgBAXIAFCfQAAAEAAAEQAXCggnDRQgCAMgDAMQgaB/gaBAQgKAbgLAmQgPAxgDCrQgBAaAAAbQgCBlABBhQgIALgHAKIxKAJIgMgRIALjBQABgLgCgSQgEhHhjlSQgDgKgDgKIhulsQgCgHgCgGQhxllBYmTg");
	this.shape_812.setTransform(364.7,219.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#ECB77F").s().p("Anlc0IALjBQABgLgCgSQgEhHhjlSIgGgUIhulsIgEgNQhxllBYmTIAAgBQAbh+AshzIAnhbQASgvBPh/QAshFAlg3IBUjcIAGgMQATgagihFIgIgOIgphAIgIgPQjUl0Cbj+IAPgYQA0hMBSg3IAagQQA2ghAqgLQAQgFAPgCQHGhNgdEMIgCAQQgOBVgyBiQgaAygfAsIgQAfIgFAgIAFAgIA4BOIAWAfQATAZAJAYQAIAXAAAQIAAADQAAATgTAIQgKAEgcAFQgNAAgFAPIgDADQgEAIAJAWIAAAHQAAAKgDAHIgCAHIACAJIgGAPIgCAFIACAFQAFAKABAIQACAIAAALIgBAIQgBAGgDAEIgFAIQgHAFgEAOIgEAOIAAADQgFAIAGASQABAEAFAGQAIALAOAMQAOAPgQATIgDAFQgKARAAAJQAWAFAFAEIBaBqIAEAGQgGASgCAWIgCAdIAMA6QABASANAaQAIAOAJAMIB5CFQAnAxAkA0QCDCwBKDEQAVA7AMBDIACAMQAOBdACAhQABAZgBAXIAFCfIAAAIQAXCggnDRIgFAYQgaB/gaBAQgKAbgLAmQgPAxgDCrIgBA1QgCBlABBhIgPAVIxKAJg");
	this.shape_813.setTransform(364.7,219.1);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#373535").ss(2.5).p("ArSA3QAbh+AshzIAnhbQASgvBPh/QAshFAlg3IBUjcQAEgFACgHQATgagihFQgEgHgEgHIgohAQgFgHgEgHQjUl1Cbj+QAHgMAIgLQA0hMBSg4QANgJANgHQA2ggApgMQAQgFAQgCQHGhNgdEMQgCAIgBAIQgNBVgzBhQgaAzgfAsQgHAPgJAQQgCAPgDARQACAPADARIA4BOQAMAPAKAPQATAaAJAYQAIAXAAAPQAAACAAABQAAAUgTAIQgKAEgbAFQgOAAgFAPQgCACgBABQgEAHAIAXQABAEAAADQAAAKgCAHQgBAEgBACQABAGAAADQgDAJgDAHIgCAFIACAFQAFAJABAJQACAIAAALQAAAEgBAEQgBAFgDAFQgCADgDAEQgHAGgEANQgCAHgCAIQAAABAAACQgFAHAGASQABAFAFAFQAIAMAOALQAOAQgSATQgCACgBADQgMARAAAJQAWAFAFAEIBfBoQACADADADQgHATgCAVQgCAQAAAOIALA6QABASANAaQAHAOAJAMIB5CGQAnAxAkA0QCDCwBJDEQAWA6AMBEQABAGABAGQAOBcACAiQABAZgBAXIAFCfQAAAEAAAEQAXCggmDQQgDAMgCANQgaB+gaBAQgLAcgLAlQgOAxgDCsQgBAZAAAcQgCBlABBhQgHAKgHALIxKAJIgMgRIALjCQABgKgCgTQgEhHhjlRQgDgKgDgKIhulsQgCgHgCgGQhxllBYmTg");
	this.shape_814.setTransform(364.6,219.1);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#ECB77F").s().p("Ankc0IALjCQABgKgCgTQgEhHhjlRIgGgUIhulsIgEgNQhxllBYmTIAAgBQAbh+AshzIAnhbQASgvBPh/QAshFAlg3IBUjcQAEgFACgHQATgagihFIgIgOIgohAIgJgOQjUl1Cbj+IAPgXQA0hMBSg4IAagQQA2ggApgMQAQgFAQgCQHGhNgdEMIgDAQQgNBVgzBhQgaAzgfAsIgQAfIgFAgIAFAgIA4BOIAWAeQATAaAJAYQAIAXAAAPIAAADQAAAUgTAIQgKAEgbAFQgOAAgFAPIgDADQgEAHAIAXIABAHQAAAKgCAHIgCAGQABAGAAADIgGAQIgCAFIACAFQAFAJABAJQACAIAAALIgBAIQgBAFgDAFIgFAHQgHAGgEANIgEAPIAAADQgFAHAGASQABAFAFAFQAIAMAOALQAOAQgSATIgDAFQgMARAAAJQAWAFAFAEIBfBoIAFAGQgHATgCAVIgCAeIALA6QABASANAaQAHAOAJAMIB5CGQAnAxAkA0QCDCwBJDEQAWA6AMBEIACAMQAOBcACAiQABAZgBAXIAFCfIAAAIQAXCggmDQIgFAZQgaB+gaBAQgLAcgLAlQgOAxgDCsIgBA1QgCBlABBhIgOAVIxKAJg");
	this.shape_815.setTransform(364.6,219.1);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#373535").ss(2.5).p("ArRA3QAbh+AshzIAnhbQASgvBPh/QAshFAlg3IBUjbQAEgGACgHQATgagihFQgEgHgEgHIgohAQgFgHgEgHQjUl1Cbj+QAHgMAHgLQA1hMBRg4QANgIANgIQA2ggAqgMQAQgEAPgDQHGhNgdEMQgBAIgBAIQgOBVgzBhQgaAzgfAsQgHAPgJAQQgCAPgDARQACAPADAQIA4BPQAMAPAKAPQATAZAJAZQAIAWAAAQQAAACAAABQABAUgTAIQgKAEgcAFQgNAAgGAPQgCABgBACQgEAHAIAXQABAEAAACQAAAKgCAHQgBAEgBADQABAGAAADQgDAIgDAHIgCAGIACAEQAFAKABAIQACAJAAALQAAADAAAEQgCAGgDAFQgCADgCAEQgIAGgEANQgCAHgCAHQAAACAAACQgFAHAGASQABAEAFAGQAIAMAOALQANAQgSATQgDADgBACQgNARgBAJQAWAGAGADIBjBnQADADACADQgGASgCAWQgCAPgBAOIAKA7QABARANAbQAHAOAJAMIB5CGQAmAyAkA0QCCCwBKDEQAWA6ALBDQABAGACAGQAOBcABAjQACAZgBAWIAFCgQAAAEAAAEQAXCfgmDRQgCAMgDAMQgZB/gaBAQgLAcgLAlQgOAwgDCsQgBAagBAbQgBBlABBhQgHALgHALIxKAJIgLgSIALjBQABgKgCgTQgEhIhjlQQgDgKgDgKIhultQgCgGgCgHQhxlkBYmTg");
	this.shape_816.setTransform(364.5,219.1);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#ECB77F").s().p("AnjczIALjBQABgKgCgTQgEhIhjlQIgGgUIhultIgEgNQhxlkBYmTIAAgBQAbh+AshzIAnhbQASgvBPh/IBRh8IBUjbIAGgNQATgagihFIgIgOIgohAIgJgOQjUl1Cbj+IAOgXQA1hMBRg4IAagQQA2ggAqgMQAQgEAPgDQHGhNgdEMIgCAQQgOBVgzBhQgaAzgfAsIgQAfIgFAgIAFAfIA4BPIAWAeQATAZAJAZQAIAWAAAQIAAADQABAUgTAIQgKAEgcAFQgNAAgGAPIgDADQgEAHAIAXIABAGQAAAKgCAHIgCAHIABAJIgGAPIgCAGIACAEQAFAKABAIQACAJAAALIAAAHQgCAGgDAFIgEAHQgIAGgEANIgEAOIAAAEQgFAHAGASQABAEAFAGQAIAMAOALQANAQgSATIgEAFQgNARgBAJQAWAGAGADIBjBnIAFAGQgGASgCAWIgDAdIAKA7QABARANAbQAHAOAJAMIB5CGQAmAyAkA0QCCCwBKDEQAWA6ALBDIADAMQAOBcABAjQACAZgBAWIAFCgIAAAIQAXCfgmDRIgFAYQgZB/gaBAQgLAcgLAlQgOAwgDCsIgCA1QgBBlABBhIgOAWIxKAJg");
	this.shape_817.setTransform(364.5,219.1);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#373535").ss(2.5).p("ArRA3QAbh+AthzIAnhbQASgvBPh+QAshGAkg3IBVjbQADgGADgHQATgagjhFQgDgHgEgHIgphAQgEgHgEgHQjUl1Caj+QAHgLAIgMQA0hMBSg3QANgJANgIQA1ggAqgMQAQgEAPgDQHHhNgeEMQgBAIgBAIQgOBUgzBiQgaAygfAsQgIAPgIAQQgDAQgDAQQADAQACAQIA4BOQAMAQAKAPQATAZAKAYQAIAXAAAPQgBACAAACQABAUgTAHQgJAFgcAFQgNAAgHAOQgBACgCABQgEAHAJAXQABAEAAADQAAAKgDAHQAAAEgBADQABAFAAAEQgDAIgDAHIgDAFIACAFQAFAKABAIQADAIAAALQAAAEgBAEQgBAGgDAEQgCAEgDAEQgHAFgEAOQgDAGgBAIQAAABgBACQgFAHAGASQABAFAFAFQAIAMAOAMQANAQgUATQgCADgCACQgOARgBAJQAWAGAFADIBpBlQADADACADQgGATgCAVQgCAQgBAOIAJA6QAAASANAbQAHAOAJAMIB4CHQAmAyAkA0QCDCwBJDEQAWA6AMBDQABAGABAGQAOBcACAiQABAZgBAXIAGCfQAAAEAAAEQAXCfgmDRQgCANgDAMQgZB+gaBAQgLAdgLAkQgOAwgDCtQgBAZAAAcQgCBlABBhQgGALgHALIxJAJIgLgSIAKjBQABgLgBgSQgFhIhilRQgDgJgDgKIhvltQgCgGgCgHQhwlkBXmTg");
	this.shape_818.setTransform(364.4,219.1);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#ECB77F").s().p("AniczIAKjBQABgLgBgSQgFhIhilRIgGgTIhvltIgEgNQhwlkBXmTIAAgBQAbh+AthzIAnhbQASgvBPh+QAshGAkg3IBVjbIAGgNQATgagjhFIgHgOIgphAIgIgOQjUl1Caj+IAPgXQA0hMBSg3IAagRQA1ggAqgMQAQgEAPgDQHHhNgeEMIgCAQQgOBUgzBiQgaAygfAsIgQAfIgGAgIAFAgIA4BOIAWAfQATAZAKAYQAIAXAAAPIgBAEQABAUgTAHQgJAFgcAFQgNAAgHAOIgDADQgEAHAJAXIABAHQAAAKgDAHIgBAHQABAFAAAEIgGAPIgDAFIACAFQAFAKABAIQADAIAAALIgBAIQgBAGgDAEIgFAIQgHAFgEAOQgDAGgBAIIgBADQgFAHAGASQABAFAFAFQAIAMAOAMQANAQgUATIgEAFQgOARgBAJQAWAGAFADIBpBlIAFAGQgGATgCAVIgDAeIAJA6QAAASANAbQAHAOAJAMIB4CHQAmAyAkA0QCDCwBJDEQAWA6AMBDIACAMQAOBcACAiQABAZgBAXIAGCfIAAAIQAXCfgmDRIgFAZQgZB+gaBAQgLAdgLAkQgOAwgDCtIgBA1QgCBlABBhIgNAWIxJAJg");
	this.shape_819.setTransform(364.4,219.1);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#373535").ss(2.5).p("ArQA3QAbh+AthzIAnhbQASgvBPh+QAshGAkg3IBVjbQADgGADgHQATgagjhFQgDgHgEgHIgphAQgEgHgEgHQjUl0Caj+QAHgMAIgMQA0hMBRg3QANgJANgIQA2ggAqgMQAQgEAPgDQHHhNgeEMQgCAIgBAHQgOBVgzBiQgZAyggAsQgHAPgJAQQgDAPgDARQADAPACARIA4BOQAMAPAKAPQATAaAJAYQAJAWAAAQQgBACAAABQABAUgSAIQgKAFgcAFQgNAAgHAOQgBACgCABQgEAHAJAXQABAEAAADQAAAKgCAHQgBAEgBADQABAFAAADQgDAJgDAHIgDAFIACAEQAFAKABAJQADAIAAALQAAAEgBAEQgBAFgDAFQgCADgCAEQgIAGgEANQgCAHgCAHQAAACgBACQgFAHAGASQABAFAFAFQAIAMANAMQANAQgUATQgDADgCACQgPARgCAJQAWAGAGADIBtBkQADADADADQgHASgCAWQgCAPgBAOIAJA7QgBASANAbQAHAOAJAMIB3CIQAmAxAkA0QCDCxBJDDQAWA7ALBCQACAGABAGQAOBcACAjQABAZgBAWIAGCgQAAAEAAAEQAYCfgmDRQgDAMgCANQgaB+gZBAQgLAdgLAkQgPAvgCCtQgBAaAAAbQgCBlACBhQgHALgGAMIxKAJIgKgSIAKjBQABgLgBgTQgFhIhilQQgDgKgDgKIhvlsQgCgGgCgHQhwllBXmSg");
	this.shape_820.setTransform(364.3,219.1);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#ECB77F").s().p("AnhczIAKjBQABgLgBgTQgFhIhilQIgGgUIhvlsIgEgNQhwllBXmSIAAgBQAbh+AthzIAnhbQASgvBPh+QAshGAkg3IBVjbIAGgNQATgagjhFIgHgOIgphAIgIgOQjUl0Caj+IAPgYQA0hMBRg3IAagRQA2ggAqgMQAQgEAPgDQHHhNgeEMIgDAPQgOBVgzBiQgZAyggAsIgQAfIgGAgIAFAgIA4BOIAWAeQATAaAJAYQAJAWAAAQIgBADQABAUgSAIQgKAFgcAFQgNAAgHAOIgDADQgEAHAJAXIABAHQAAAKgCAHIgCAHQABAFAAADIgGAQIgDAFIACAEQAFAKABAJQADAIAAALIgBAIQgBAFgDAFIgEAHQgIAGgEANIgEAOIgBAEQgFAHAGASQABAFAFAFQAIAMANAMQANAQgUATIgFAFQgPARgCAJQAWAGAGADIBtBkIAGAGQgHASgCAWIgDAdIAJA7QgBASANAbQAHAOAJAMIB3CIQAmAxAkA0QCDCxBJDDQAWA7ALBCIADAMQAOBcACAjQABAZgBAWIAGCgIAAAIQAYCfgmDRIgFAZQgaB+gZBAIgWBBQgPAvgCCtIgBA1QgCBlACBhIgNAXIxKAJg");
	this.shape_821.setTransform(364.3,219.1);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#373535").ss(2.5).p("ArPA3QAbh9Ath0IAmhbQASgvBQh+QAshGAkg3IBVjbQADgGADgHQATgZgjhGQgDgGgEgIIgpg/QgEgIgEgHQjUl0Caj+QAHgMAHgMQA1hMBRg3QANgJANgIQA2ggAqgMQAQgEAPgDQHHhNgfEMQgBAHgBAIQgOBVgzBhQgaAzgfAsQgIAPgJAQQgDAPgCARQACAPACAQIA4BPQALAPALAPQATAZAJAZQAIAWABAQQAAABgBACQACAUgTAIQgJAFgcAFQgOAAgHAOQgBABgCACQgEAGAJAXQAAAEABADQAAAKgCAHQgBAEgBADQACAGgBADQgDAIgEAHIgCAGIACAEQAFAKABAIQADAJAAAKQAAAEAAAEQgBAGgEAFQgBADgDAEQgHAGgEANQgDAHgCAHQAAACgBABQgFAHAGATQABAEAFAGQAHAMAOAMQANAPgWAUQgDADgCACQgRASgCAIQAWAGAGADIBzBjQACACAEADQgHATgDAVQgCAQAAAOIAHA7QgBASANAbQAHAOAIAMIB3CIQAmAyAkA0QCDCyBJDCQAWA6ALBDQABAGACAGQAOBbACAkQABAZgBAWIAGCfQAAAEAAAEQAYCfgmDSQgCAMgCAMQgaB+gaBBQgKAdgLAjQgPAvgCCuQgBAZAAAcQgCBlACBgQgGAMgHALIxJAKIgKgTIAKjBQACgKgCgTQgGhJhilPQgDgKgDgKIhulsQgCgGgCgHQhwllBXmTg");
	this.shape_822.setTransform(364.2,219.1);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#ECB77F").s().p("AngcyIAKjBQACgKgCgTQgGhJhilPIgGgUIhulsIgEgNQhwllBXmTIAAAAQAbh9Ath0IAmhbQASgvBQh+IBQh9IBVjbIAGgNQATgZgjhGIgHgOIgpg/IgIgPQjUl0Caj+IAOgYQA1hMBRg3IAagRQA2ggAqgMQAQgEAPgDQHHhNgfEMIgCAPQgOBVgzBhQgaAzgfAsIgRAfIgFAgIAEAfIA4BPIAWAeQATAZAJAZQAIAWABAQIgBADQACAUgTAIQgJAFgcAFQgOAAgHAOIgDADQgEAGAJAXIABAHQAAAKgCAHIgCAHQACAGgBADIgHAPIgCAGIACAEQAFAKABAIQADAJAAAKIAAAIQgBAGgEAFIgEAHQgHAGgEANIgFAOIgBADQgFAHAGATQABAEAFAGQAHAMAOAMQANAPgWAUIgFAFQgRASgCAIQAWAGAGADIBzBjIAGAFQgHATgDAVIgCAeIAHA7QgBASANAbQAHAOAIAMIB3CIQAmAyAkA0QCDCyBJDCQAWA6ALBDIADAMQAOBbACAkQABAZgBAWIAGCfIAAAIQAYCfgmDSIgEAYQgaB+gaBBQgKAdgLAjQgPAvgCCuIgBA1QgCBlACBgIgNAXIxJAKg");
	this.shape_823.setTransform(364.2,219.1);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#373535").ss(2.5).p("ArOA3QAbh9Ath0IAmhbQASgvBQh+QAshGAkg2IBVjcQADgGACgHQAUgZgihFQgEgHgEgHIgohAQgFgHgEgIQjUl0CZj+QAIgMAHgLQA1hMBRg4QANgJANgIQA2ggApgMQAQgEAPgDQHHhOgeENQgBAHgCAIQgOBVgzBhQgaAygfAtQgIAOgJAQQgDAPgCARQABAQACAQIA5BPQALAPALAPQATAZAJAYQAIAWABAQQAAACgBABQACAVgSAIQgKAFgcAFQgNAAgIAOQgBABgCABQgFAGAJAYQABAEABADQAAAKgCAHQAAAEgCADQACAGgBADQgDAIgEAHIgDAFIADAFQAFAJABAJQADAIAAALQAAAEAAAEQgBAGgDAEQgCAEgDAEQgHAGgEANQgDAGgCAIQAAABgBACQgFAHAGASQABAFAEAFQAIAMAOAMQAMAQgXAUQgDADgCACQgSASgDAIQAWAGAGADIB4BhQADADADADQgHASgCAWQgCAPgBAOIAGA8QgBARANAcQAGAOAJAMIB2CJQAmAyAkA0QCDCyBIDCQAWA6AMBDQABAGABAGQAPBaACAkQABAZgBAXIAGCfQAAAEAAAEQAYCeglDSQgDAMgCANQgZB+gaBAQgKAdgMAkQgOAugDCuQAAAaAAAbQgCBlACBhQgGAMgGALIxJAKIgKgTIAKjBQACgKgCgTQgGhKhilOQgDgKgDgKIhulsQgCgHgCgGQhwllBXmTg");
	this.shape_824.setTransform(364.1,219.1);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#ECB77F").s().p("AnfcyIAKjBQACgKgCgTQgGhKhilOIgGgUIhulsIgEgNQhwllBXmTIAAAAQAbh9Ath0IAmhbQASgvBQh+IBQh8IBVjcIAFgNQAUgZgihFIgIgOIgohAIgJgPQjUl0CZj+IAPgXQA1hMBRg4IAagRQA2ggApgMQAQgEAPgDQHHhOgeENIgDAPQgOBVgzBhQgaAygfAtIgRAeIgFAgIADAgIA5BPIAWAeQATAZAJAYQAIAWABAQIgBADQACAVgSAIQgKAFgcAFQgNAAgIAOIgDACQgFAGAJAYIACAHQAAAKgCAHQAAAEgCADQACAGgBADIgHAPIgDAFIADAFQAFAJABAJQADAIAAALIAAAIQgBAGgDAEIgFAIQgHAGgEANIgFAOIgBADQgFAHAGASQABAFAEAFQAIAMAOAMQAMAQgXAUIgFAFQgSASgDAIQAWAGAGADIB4BhIAGAGQgHASgCAWIgDAdIAGA8QgBARANAcQAGAOAJAMIB2CJQAmAyAkA0QCDCyBIDCQAWA6AMBDIACAMQAPBaACAkQABAZgBAXIAGCfIAAAIQAYCeglDSIgFAZQgZB+gaBAIgWBBQgOAugDCuIAAA1QgCBlACBhIgMAXIxJAKg");
	this.shape_825.setTransform(364.1,219.1);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#373535").ss(2.5).p("ArNA3QAbh9Ash0IAnhbQASgvBPh+QAshGAkg2IBVjcQADgGADgGQATgagihFQgEgHgEgHIgohAQgEgHgFgIQjUl0Caj+QAHgLAIgMQA0hMBRg4QANgJANgHQA2ghApgMQARgEAPgDQHHhOgfEMQgBAIgCAIQgOBVgzBhQgaAygfAsQgIAPgJAQQgDAPgDARQACAPACARIA4BOQALAPALAPQATAaAJAYQAJAWAAAQQAAACAAABQABAVgRAIQgKAFgcAFQgNAAgIANQgCACgCABQgEAGAJAYQABAEAAADQAAAKgBAHQgBAEgBADQACAGgBADQgEAIgDAHIgDAFIACAEQAFAKABAIQADAJABALQAAAEAAADQgBAGgDAFQgCADgDAEQgHAGgFANQgCAHgCAHQgBACAAACQgGAGAGATQABAEAFAGQAHAMAOAMQAMAQgYAUQgEADgCACQgTASgDAJQAWAFAGADIAxAiIBMA+QADACADADQgHATgCAVQgCAQgCAOIAGA8QgBARAMAcQAHAOAIAMIB2CJQAlAyAkA1QCDCyBJDBQAWA7ALBCQACAGABAGQAOBaACAlQABAZgBAWIAGCgQAAAEAAAEQAZCeglDSQgCAMgDAMQgZB+gaBBQgKAdgLAjQgPAugCCvQgBAZAAAcQgBBlACBgQgGAMgGAMIxJAKIgJgTIAKjBQABgLgCgTQgGhJhhlOQgDgKgDgKIhulsQgCgHgCgGQhxllBYmTg");
	this.shape_826.setTransform(364.1,219.1);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#ECB77F").s().p("AnecyIAKjBQABgLgCgTQgGhJhhlOIgGgUIhulsIgEgNQhxllBYmTIAAAAQAbh9Ash0IAnhbQASgvBPh+IBQh8IBVjcIAGgMQATgagihFIgIgOIgohAIgJgPQjUl0Caj+IAPgXQA0hMBRg4IAagQQA2ghApgMQARgEAPgDQHHhOgfEMIgDAQQgOBVgzBhQgaAygfAsIgRAfIgGAgIAEAgIA4BOIAWAeQATAaAJAYQAJAWAAAQIAAADQABAVgRAIQgKAFgcAFQgNAAgIANIgEADQgEAGAJAYIABAHQAAAKgBAHIgCAHQACAGgBADIgHAPIgDAFIACAEQAFAKABAIQADAJABALIAAAHQgBAGgDAFIgFAHQgHAGgFANIgEAOIgBAEQgGAGAGATQABAEAFAGQAHAMAOAMQAMAQgYAUIgGAFQgTASgDAJQAWAFAGADIAxAiIBMA+IAGAFQgHATgCAVIgEAeIAGA8QgBARAMAcQAHAOAIAMIB2CJQAlAyAkA1QCDCyBJDBQAWA7ALBCIADAMQAOBaACAlQABAZgBAWIAGCgIAAAIQAZCeglDSIgFAYQgZB+gaBBIgVBAQgPAugCCvIgBA1QgBBlACBgIgMAYIxJAKg");
	this.shape_827.setTransform(364.1,219.1);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#373535").ss(2.5).p("ArMA3QAbh9Ash0IAnhbQASguBPh/QAshFAkg3IBVjcQADgGADgGQATgagihFQgDgHgEgHIgphAQgEgHgEgHQjVl0Caj+QAHgMAIgMQA0hMBRg4QANgIANgIQA1ggAqgMQAQgFAPgDQHIhOggEMQgBAIgBAIQgPBVgzBhQgaAxgfAtQgIAPgJAPQgDAQgDARQACAPABARIA5BOQALAPALAPQATAZAJAYQAJAXAAAQQAAABAAACQABAVgRAIQgJAEgdAFQgNABgIANQgCABgCABQgFAGAKAYQABAEAAADQAAAKgBAHQAAAFgCADQACAFgBADQgEAJgDAGIgEAGIADAEQAFAKABAIQADAIABALQAAAEAAAEQgBAGgDAFQgCADgDAEQgHAGgEANQgDAGgCAIQgBACAAABQgGAHAGASQABAFAEAGQAIAMANAMQAMAQgZAUQgEADgCADQgUARgEAJQAWAFAHAEIAzAhIBOA8QADADAEADQgHASgDAWQgCAPgBAOIAFA8QgCASAMAcQAGAOAJAMIB1CKQAlAyAkA0QCDCzBIDBQAWA7AMBCQABAGACAGQAOBZACAlQABAagBAWIAGCfQAAAEAAAEQAaCegmDSQgCANgCAMQgZB+gaBBQgKAdgMAjQgPAtgBCvQgBAaAAAbQgBBlACBhQgGAMgGAMIxIAKIgJgUIAKjBQABgKgCgTQgGhKhhlOQgDgJgDgKIhulsQgCgHgCgGQhxllBYmTg");
	this.shape_828.setTransform(364,219.1);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#ECB77F").s().p("AndcxIAKjBQABgKgCgTQgGhKhhlOIgGgTIhulsIgEgNQhxllBYmTIAAAAQAbh9Ash0IAnhbQASguBPh/IBQh8IBVjcIAGgMQATgagihFIgHgOIgphAIgIgOQjVl0Caj+IAPgYQA0hMBRg4IAagQQA1ggAqgMQAQgFAPgDQHIhOggEMIgCAQQgPBVgzBhQgaAxgfAtIgRAeIgGAhIADAgIA5BOIAWAeQATAZAJAYQAJAXAAAQIAAADQABAVgRAIQgJAEgdAFQgNABgIANIgEACQgFAGAKAYIABAHQAAAKgBAHQAAAFgCADQACAFgBADIgHAPIgEAGIADAEQAFAKABAIQADAIABALIAAAIQgBAGgDAFIgFAHQgHAGgEANIgFAOIgBADQgGAHAGASQABAFAEAGQAIAMANAMQAMAQgZAUIgGAGQgUARgEAJQAWAFAHAEIAzAhIBOA8IAHAGQgHASgDAWIgDAdIAFA8QgCASAMAcQAGAOAJAMIB1CKQAlAyAkA0QCDCzBIDBQAWA7AMBCIADAMQAOBZACAlQABAagBAWIAGCfIAAAIQAaCegmDSIgEAZQgZB+gaBBIgWBAQgPAtgBCvIgBA1QgBBlACBhIgMAYIxIAKg");
	this.shape_829.setTransform(364,219.1);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#373535").ss(2.5).p("ArLA3QAbh9Ash0IAnhbQASguBPh/QAshFAkg3IBVjcQADgGADgGQATgagihFQgDgHgEgHIgphAQgEgHgEgHQjVl0Caj+QAHgMAHgMQA1hMBRg3QAMgJANgIQA2ggAqgMQAQgFAPgDQHIhOggEMQgBAIgCAIQgOBVgzBgQgaAyggAtQgIAOgJAQQgDAPgDARQACAQABAQIA5BPQALAPALAPQATAZAJAYQAJAWAAAQQAAACAAABQACAWgSAIQgJAEgcAFQgOABgIANQgCABgCABQgFAGAKAYQABAEAAADQAAAKgBAHQAAAEgBADQABAGgBADQgEAIgDAHIgEAFIADAFQAFAJABAJQADAIABALQAAAEAAAEQgBAFgDAFQgCADgDAFQgGAGgFAMQgDAHgCAHQgBACAAACQgGAGAGATQABAFAEAFQAIAMANANQALAQgaAUQgEADgCADQgWARgEAJQAWAFAHAEIA3AgIBQA8QADACADADQgGATgDAVQgDAPgBAPIAEA8QgCASAMAcQAGAOAIAMIB1CLQAlAyAkA0QCDCzBIDBQAWA7AMBBQABAGABAGQAPBZACAmQABAZgBAWIAGCgQAAAEAAAEQAaCdglDTQgCAMgDAMQgZB+gZBBQgLAegLAiQgPAtgCCwQAAAZAAAcQgBBlACBgQgGANgFAMIxJAKIgIgUIAKjBQABgKgCgTQgGhLhhlNQgDgKgDgJIhulsQgCgHgCgGQhxllBYmTg");
	this.shape_830.setTransform(363.9,219.1);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#ECB77F").s().p("AnccxIAKjBQABgKgCgTQgGhLhhlNIgGgTIhulsIgEgNQhxllBYmTIAAAAQAbh9Ash0IAnhbQASguBPh/IBQh8IBVjcIAGgMQATgagihFIgHgOIgphAIgIgOQjVl0Caj+IAOgYQA1hMBRg3IAZgRQA2ggAqgMQAQgFAPgDQHIhOggEMIgDAQQgOBVgzBgQgaAyggAtIgRAeIgGAgIADAgIA5BPIAWAeQATAZAJAYQAJAWAAAQIAAADQACAWgSAIQgJAEgcAFQgOABgIANIgEACQgFAGAKAYIABAHQAAAKgBAHIgBAHIAAAJIgHAPIgEAFIADAFQAFAJABAJQADAIABALIAAAIQgBAFgDAFIgFAIQgGAGgFAMIgFAOIgBAEQgGAGAGATQABAFAEAFQAIAMANANQALAQgaAUIgGAGQgWARgEAJQAWAFAHAEIA3AgIBQA8IAGAFQgGATgDAVIgEAeIAEA8QgCASAMAcQAGAOAIAMIB1CLQAlAyAkA0QCDCzBIDBQAWA7AMBBIACAMQAPBZACAmQABAZgBAWIAGCgIAAAIQAaCdglDTIgFAYQgZB+gZBBIgWBAQgPAtgCCwIAAA1QgBBlACBgIgLAZIxJAKg");
	this.shape_831.setTransform(363.9,219.1);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#373535").ss(2.5).p("ArKA3QAbh9Ash0IAnhbQASguBPh/QAshFAkg3IBVjbQADgGADgHQATgagihFQgDgHgEgHIgphAQgEgHgEgHQjUl0CYj+QAIgMAHgLQA0hNBRg3QANgJANgIQA2ggAqgMQAQgFAPgDQHHhOggEMQgBAIgBAIQgPBVgzBgQgaAyggAsQgIAPgJAQQgDAPgDARQACAPABARIA4BOQAMAQAKAPQATAZAKAYQAIAWABAQQAAACAAABQACAWgRAIQgJAEgdAFQgNABgJAMQgCACgCABQgFAFAJAZQABAEABADQABAKgCAHQAAAEgBADQABAGgBADQgEAIgEAHIgDAFIACAEQAFAKACAIQADAJABAKQABAEgBAEQgBAGgDAFQgCADgCAEQgHAGgFANQgDAHgCAHQgBACAAABQgGAHAFATQACAEAEAGQAHAMANAMQAMARgcAUQgEADgDADQgWARgEAJQAVAFAHAEIA6AgIBSA7QADACAEADQgHASgDAWQgCAPgCAOIADA9QgCASALAcQAHAOAIANIB0CKQAlAzAkA0QCDCzBIDAQAWA7AMBCQABAGABAGQAPBZACAmQABAZgBAWIAGCfQAAAEAAAEQAaCdglDUQgCAMgCAMQgZB+gZBBQgLAegLAiQgPAsgCCwQAAAaAAAbQgBBlACBhQgFAMgGANIxIAKIgIgUIAKjBQABgKgCgTQgGhMhhlMQgDgKgDgKIhulsQgCgGgCgHQhxlkBYmTg");
	this.shape_832.setTransform(363.8,219.1);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#ECB77F").s().p("AnbcxIAKjBQABgKgCgTQgGhMhhlMIgGgUIhulsIgEgNQhxlkBYmTIAAAAQAbh9Ash0IAnhbQASguBPh/QAshFAkg3IBVjbIAGgNQATgagihFIgHgOIgphAIgIgOQjUl0CYj+IAPgXQA0hNBRg3IAagRQA2ggAqgMQAQgFAPgDQHHhOggEMIgCAQQgPBVgzBgQgaAyggAsIgRAfIgGAgIADAgIA4BOIAWAfQATAZAKAYQAIAWABAQIAAADQACAWgRAIQgJAEgdAFQgNABgJAMIgEADQgFAFAJAZIACAHQABAKgCAHQAAAEgBADQABAGgBADIgIAPIgDAFIACAEQAFAKACAIQADAJABAKIAAAIQgBAGgDAFIgEAHQgHAGgFANQgDAHgCAHIgBADQgGAHAFATQACAEAEAGQAHAMANAMQAMARgcAUIgHAGQgWARgEAJQAVAFAHAEIA6AgIBSA7IAHAFQgHASgDAWIgEAdIADA9QgCASALAcQAHAOAIANIB0CKQAlAzAkA0QCDCzBIDAQAWA7AMBCIACAMQAPBZACAmQABAZgBAWIAGCfIAAAIQAaCdglDUIgEAYQgZB+gZBBIgWBAQgPAsgCCwIAAA1QgBBlACBhIgLAZIxIAKg");
	this.shape_833.setTransform(363.8,219.1);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#373535").ss(2.5).p("ArKA3QAbh9Ath0IAmhbQASguBPh/QAshFAlg3IBUjbQAEgGACgHQAUgZgihGQgEgHgEgHIgohAQgEgHgFgHQjUl0CZj+QAHgMAIgLQA0hMBRg4QAMgJANgIQA2ggAqgMQAQgFAPgCQHIhPghEMQgBAIgBAHQgPBVgzBhQgaAxggAtQgIAPgJAPQgDAQgDARQABAPABARIA5BOQALAPALAPQATAZAJAYQAJAWABAQQAAACAAACQABAVgQAIQgJAFgdAFQgNABgJAMQgCABgCABQgGAFAKAZQABAEAAADQABAKgBAIQAAAEgBADQABAFgBADQgEAJgEAGIgEAGIADAEQAFAJABAJQAEAIABALQAAAEAAAEQgBAGgDAFQgCADgDAEQgGAGgFANQgDAGgDAIQAAABgBACQgGAGAGATQABAFAEAFQAIANAMAMQAMARgdAUQgEADgDADQgYARgFAJQAVAFAIAEIA9AgIBUA5QADADAEACQgHATgDAVQgCAPgCAOIACA9QgDASAMAdQAGAPAIAMIB0CLQAlAyAjA0QCDC0BIDAQAWA7AMBCQABAGACAGQAOBYACAmQABAagBAWIAGCfQAAAEAAAEQAbCdgkDTQgDAMgCANQgZB9gZBCQgLAegLAhQgPAsgBCxQgBAZAAAcQgBBlADBgQgFANgGANIxIAKIgIgUIAKjBQACgKgCgUQgHhMhhlLQgDgKgDgKIhulsQgCgGgCgHQhwlkBXmTg");
	this.shape_834.setTransform(363.7,219.1);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#ECB77F").s().p("AnbcxIAKjBQACgKgCgUQgHhMhhlLIgGgUIhulsIgEgNQhwlkBXmTIAAAAQAbh9Ath0IAmhbQASguBPh/QAshFAlg3IBUjbIAGgNQAUgZgihGIgIgOIgohAIgJgOQjUl0CZj+IAPgXQA0hMBRg4IAZgRQA2ggAqgMQAQgFAPgCQHIhPghEMIgCAPQgPBVgzBhQgaAxggAtIgRAeIgGAhIACAgIA5BOIAWAeQATAZAJAYQAJAWABAQIAAAEQABAVgQAIQgJAFgdAFQgNABgJAMIgEACQgGAFAKAZIABAHQABAKgBAIIgBAHIAAAIIgIAPIgEAGIADAEQAFAJABAJQAEAIABALIAAAIQgBAGgDAFIgFAHQgGAGgFANIgGAOIgBADQgGAGAGATQABAFAEAFQAIANAMAMQAMARgdAUIgHAGQgYARgFAJQAVAFAIAEIA9AgIBUA5IAHAFQgHATgDAVIgEAdIACA9QgDASAMAdQAGAPAIAMIB0CLQAlAyAjA0QCDC0BIDAQAWA7AMBCIADAMQAOBYACAmQABAagBAWIAGCfIAAAIQAbCdgkDTIgFAZQgZB9gZBCIgWA/QgPAsgBCxIgBA1QgBBlADBgIgLAaIxIAKg");
	this.shape_835.setTransform(363.7,219.1);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#373535").ss(2.5).p("ArJA3QAbh9Ath0IAmhbQASguBPh/QAshFAlg3IBUjbQAEgGACgHQAUgZgihGQgEgGgEgIIgog/QgEgIgFgHQjUl0CZj9QAHgMAHgMQA0hMBRg4QANgJANgIQA2ggApgMQARgFAPgCQHIhPghEMQgBAHgCAIQgOBVg0BhQgaAxggAtQgIAPgJAPQgDAPgDARQABAQABAQIA4BPQAMAPAKAPQATAZAKAYQAJAWABAQQAAACAAABQACAWgRAIQgJAFgcAFQgOABgJAMQgCABgCABQgGAFAKAZQABAEAAADQABAKgBAHQAAAFgBADQABAFgBADQgEAIgEAHIgEAFIACAFQAFAJACAIQAEAJABALQABAEgBAEQgBAFgDAFQgCADgCAFQgHAGgFAMQgDAHgDAHQAAACgBACQgGAGAFATQACAEAEAGQAHANANAMQALARgeAUQgEADgEADQgYASgFAIQAUAFAIAEIBBAgIBVA4QAEACADADQgGASgDAWQgDAPgCAOIACA9QgEASALAdQAHAPAIAMIBzCMQAlAyAjA0QCDC0BIDAQAWA7AMBBQABAGABAGQAPBYACAnQABAZgBAWIAGCgQAAAEAAAEQAcCcglDUQgCAMgDAMQgYB+gZBBQgLAfgLAhQgPArgCCxQAAAaAAAbQgBBlADBhQgFANgFAMIxIALIgIgVIAKjBQACgKgCgTQgHhMhhlLQgDgKgDgKIhulsQgCgGgCgHQhwlkBXmTg");
	this.shape_836.setTransform(363.6,219.1);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#ECB77F").s().p("AnacwIAKjBQACgKgCgTQgHhMhhlLIgGgUIhulsIgEgNQhwlkBXmTIAAAAQAbh9Ath0IAmhbQASguBPh/QAshFAlg3IBUjbIAGgNQAUgZgihGIgIgOIgog/IgJgPQjUl0CZj9IAOgYQA0hMBRg4IAagRQA2ggApgMQARgFAPgCQHIhPghEMIgDAPQgOBVg0BhQgaAxggAtIgRAeIgGAgIACAgIA4BPIAWAeQATAZAKAYQAJAWABAQIAAADQACAWgRAIQgJAFgcAFQgOABgJAMIgEACQgGAFAKAZIABAHQABAKgBAHQAAAFgBADQABAFgBADIgIAPIgEAFIACAFQAFAJACAIQAEAJABALIAAAIQgBAFgDAFIgEAIQgHAGgFAMIgGAOIgBAEQgGAGAFATQACAEAEAGQAHANANAMQALARgeAUIgIAGQgYASgFAIQAUAFAIAEIBBAgIBVA4IAHAFQgGASgDAWIgFAdIACA9QgEASALAdQAHAPAIAMIBzCMQAlAyAjA0QCDC0BIDAQAWA7AMBBIACAMQAPBYACAnQABAZgBAWIAGCgIAAAIQAcCcglDUIgFAYQgYB+gZBBIgWBAQgPArgCCxIAAA1QgBBlADBhIgKAZIxIALg");
	this.shape_837.setTransform(363.6,219.1);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#373535").ss(2.5).p("ArIA3QAbh9Ath0IAmhbQASguBPh/QAshFAkg3IBVjbQADgGADgHQAUgZgihFQgEgHgEgIIgog/QgEgHgFgIQjUlzCYj+QAIgMAHgMQA0hMBRg4QANgJANgHQA1ghAqgMQAQgFAPgCQHJhPgiELQgBAIgBAIQgPBVg0BgQgaAyggAtQgIAOgJAQQgDAPgDARQABAQABAQIA4BOQAMAQAKAPQATAZAKAYQAJAVABARQAAABAAACQACAWgQAIQgJAFgdAFQgOABgJALQgCACgCABQgHAEALAZQABAEAAAEQABAKgBAHQAAAEgBADQABAGAAADQgFAIgEAHIgEAFIACAEQAFAKACAIQADAJACAKQABAEgBAEQAAAGgEAFQgBADgDAEQgHAGgFANQgDAHgDAHQAAACgBABQgGAGAFATQABAFAFAGQAHAMANANQAKARgfAUQgEADgEADQgZASgGAJQAUAEAJAEIBDAfIBYA3QADADAEACQgHATgDAVQgDAPgBAOIAAA+QgEASALAdQAGAPAIAMIBzCMQAkAzAkA0QCDC0BHC/QAWA8ANBBQABAGABAGQAPBXACAoQABAZgBAWIAGCfQAAAEAAAEQAcCcgkDUQgDAMgCANQgYB9gZBCQgLAegMAhQgPArgBCyQAAAZAAAcQgBBlADBgQgFANgEANIxIALIgIgVIAKjBQACgKgCgTQgHhNhhlLQgDgJgDgKIhulsQgCgGgCgHQhwlkBXmTg");
	this.shape_838.setTransform(363.5,219.1);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#ECB77F").s().p("AnZcwIAKjBQACgKgCgTQgHhNhhlLIgGgTIhulsIgEgNQhwlkBXmTIAAAAQAbh9Ath0IAmhbQASguBPh/IBQh8IBVjbIAGgNQAUgZgihFIgIgPIgog/IgJgPQjUlzCYj+IAPgYQA0hMBRg4QANgJANgHQA1ghAqgMQAQgFAPgCQHJhPgiELIgCAQQgPBVg0BgQgaAyggAtIgRAeIgGAgIACAgIA4BOIAWAfQATAZAKAYQAJAVABARIAAADQACAWgQAIQgJAFgdAFQgOABgJALIgEADQgHAEALAZIABAIQABAKgBAHIgBAHIABAJIgJAPIgEAFIACAEQAFAKACAIQADAJACAKQABAEgBAEQAAAGgEAFIgEAHQgHAGgFANIgGAOIgBADQgGAGAFATQABAFAFAGQAHAMANANQAKARgfAUIgIAGQgZASgGAJQAUAEAJAEIBDAfIBYA3IAHAFQgHATgDAVIgEAdIAAA+QgEASALAdQAGAPAIAMIBzCMIBIBnQCDC0BHC/QAWA8ANBBIACAMQAPBXACAoQABAZgBAWIAGCfIAAAIQAcCcgkDUIgFAZQgYB9gZBCIgXA/QgPArgBCyIAAA1QgBBlADBgIgJAaIxIALg");
	this.shape_839.setTransform(363.5,219.1);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#373535").ss(2.5).p("ArHA3QAbh9Ath0IAmhbQASguBPh/QAshFAkg3IBVjbQADgGADgHQAUgZgihFQgDgHgEgHIgphAQgEgHgEgHQjVl0CYj+QAHgMAIgMQA0hMBRg4QANgIANgIQA1ggAqgNQAQgFAPgCQHIhPghELQgBAIgCAIQgPBVgzBgQgaAxggAtQgJAPgJAPQgDAQgDARQABAPABARIA4BOQALAPALAPQATAZAKAYQAJAWABAQQAAACAAABQACAXgQAIQgJAFgdAFQgNABgKALQgCABgCABQgHAFAKAZQACAEAAADQABAKgBAIQAAAEgBADQACAGgBADQgFAIgEAGIgEAGIACAEQAFAJACAJQADAIACALQABAEAAAEQgBAGgDAFQgCADgDAEQgGAGgGANQgDAGgDAIQAAABgBACQgHAGAGATQABAFAEAFQAIANAMANQALARghAUQgEADgEADQgbASgGAJQAUAFAJADIBGAfIBaA2QAEACADADQgGASgEAVQgCAQgCAOIgBA+QgEASALAdQAGAPAIAMIByCNQAkAyAkA1QCDC0BHC/QAWA7ANBBQABAGABAGQAPBXACAoQABAagBAWIAGCfQAAAEAAAEQAcCcgkDUQgCAMgCAMQgYB9gaBCQgKAfgMAhQgPAqgBCyQAAAaAAAbQgBBlADBhQgEANgFANIxIALIgHgVIAKjBQACgKgCgUQgIhNhglKQgDgKgDgJIhulsQgCgHgCgGQhwlkBXmTg");
	this.shape_840.setTransform(363.4,219.1);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#ECB77F").s().p("AnYcwIAKjBQACgKgCgUQgIhNhglKIgGgTIhulsIgEgNQhwlkBXmTIAAAAQAbh9Ath0IAmhbQASguBPh/IBQh8IBVjbIAGgNQAUgZgihFIgHgOIgphAIgIgOQjVl0CYj+IAPgYQA0hMBRg4IAagQQA1ggAqgNQAQgFAPgCQHIhPghELIgDAQQgPBVgzBgQgaAxggAtIgSAeIgGAhIACAgIA4BOIAWAeQATAZAKAYQAJAWABAQIAAADQACAXgQAIQgJAFgdAFQgNABgKALIgEACQgHAFAKAZIACAHQABAKgBAIIgBAHQACAGgBADIgJAOIgEAGIACAEQAFAJACAJIAFATIABAIQgBAGgDAFIgFAHQgGAGgGANIgGAOIgBADQgHAGAGATQABAFAEAFQAIANAMANQALARghAUIgIAGQgbASgGAJIAdAIIBGAfIBaA2IAHAFQgGASgEAVIgEAeIgBA+QgEASALAdQAGAPAIAMIByCNQAkAyAkA1QCDC0BHC/QAWA7ANBBIACAMQAPBXACAoQABAagBAWIAGCfIAAAIQAcCcgkDUIgEAYQgYB9gaBCIgWBAQgPAqgBCyIAAA1QgBBlADBhIgJAaIxIALg");
	this.shape_841.setTransform(363.4,219.1);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#373535").ss(2.5).p("ArGA3QAbh9Ash0IAnhbQARguBQh/QAshFAkg3IBVjbQADgGACgGQAVgagihFQgEgHgEgHIgohAQgFgHgEgHQjUl0CYj+QAHgMAHgLQA0hNBRg3QANgJANgIQA1ggAqgNQAQgFAPgCQHJhPgiELQgBAIgCAIQgPBVg0BgQgZAxghAtQgIAPgKAPQgDAPgCARQAAAQABARIA4BOQAMAPAKAPQATAZAKAYQAJAVABARQAAACAAABQADAXgQAIQgJAFgdAFQgNABgLALQgCABgCABQgHAEALAaQABAEABADQABAKgBAHQAAAFgBADQABAGgBACQgEAJgFAGIgEAFIACAEQAFAKACAIQAEAJACAKQABAFgBADQAAAGgDAFQgCADgDAFQgHAGgFAMQgDAHgDAHQgBACAAABQgHAGAFATQACAFAEAGQAHANAMAMQAKARghAVQgFADgEADQgcASgGAJQAUAFAJADIBJAfIBcA1QADACAFACQgHATgEAVQgCAPgDAOIgBA/QgEASAKAdQAGAPAIAMIBxCNQAlAzAjA0QCDC1BHC/QAWA7ANBBQABAGABAGQAPBWACApQACAZgCAWIAHCfQAAAEAAAEQAcCcgkDUQgCANgCAMQgYB9gZBCQgLAfgMAgQgPAqgBCzQAAAZAAAcQAABlADBgQgFAOgEANIxIALIgGgWIAKjAQABgKgCgUQgHhOhhlJQgDgKgDgKIhulrQgCgHgCgGQhwlkBYmTg");
	this.shape_842.setTransform(363.4,219.1);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#ECB77F").s().p("AnXcvIAKjAQABgKgCgUQgHhOhhlJIgGgUIhulrIgEgNQhwlkBYmTIAAAAQAbh9Ash0IAnhbQARguBQh/IBQh8IBVjbIAFgMQAVgagihFIgIgOIgohAIgJgOQjUl0CYj+IAOgXQA0hNBRg3IAagRQA1ggAqgNQAQgFAPgCQHJhPgiELIgDAQQgPBVg0BgQgZAxghAtIgSAeIgFAgIABAhIA4BOIAWAeQATAZAKAYQAJAVABARIAAADQADAXgQAIQgJAFgdAFQgNABgLALIgEACQgHAEALAaIACAHIAAARIgBAIQABAGgBACIgJAPIgEAFIACAEQAFAKACAIQAEAJACAKIAAAIQAAAGgDAFIgFAIQgHAGgFAMIgGAOIgBADQgHAGAFATQACAFAEAGQAHANAMAMQAKARghAVIgJAGQgcASgGAJIAdAIIBJAfIBcA1IAIAEQgHATgEAVIgFAdIgBA/QgEASAKAdQAGAPAIAMIBxCNIBIBnQCDC1BHC/QAWA7ANBBIACAMQAPBWACApQACAZgCAWIAHCfIAAAIQAcCcgkDUIgEAZQgYB9gZBCIgXA/QgPAqgBCzIAAA1QAABlADBgIgJAbIxIALg");
	this.shape_843.setTransform(363.4,219.1);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#373535").ss(2.5).p("ArFA3QAbh9Ash0IAnhbQARguBQh/QAshFAkg3IBVjbQADgGACgGQAVgZgihGQgEgHgEgHIgohAQgEgHgFgHQjUl0CYj9QAHgMAHgMQA0hMBRg4QANgJANgIQA1ggAqgNQAQgFAPgCQHJhPgjELQgBAIgBAIQgPBVg0BgQgaAxggAtQgJAOgKAQQgCAPgDARQAAAQABAQIA4BPQALAPALAPQATAZAKAXQAJAWABAQQAAACAAACQADAXgQAIQgIAFgdAFQgOABgLALQgCABgCABQgHADALAaQABAEAAADQACALgBAHQAAAEgBAEQACAFgBADQgFAIgFAHIgEAFIACAEQAFAKACAIQAEAJACAKQABAEgBAEQAAAGgDAFQgCADgDAEQgGAHgGAMQgDAHgDAHQgBABAAACQgHAGAFATQABAFAEAFQAIANAMANQAKARgjAVQgFADgEADQgdASgHAJQAUAFAJADIBNAfIBdAzQAEACAEADQgHASgDAVQgDAQgCAOIgCA+QgFASAKAeQAGAPAIAMIBwCOQAlAzAjA0QCDC1BHC+QAWA8ANBBQABAGABAGQAPBWACApQACAZgCAWIAGCfQAAAEAAAEQAeCbgkDVQgDAMgCANQgYB8gZBDQgKAfgMAgQgPAqgBCyQAAAaAAAbQAABlADBhQgEANgEAOIxIALIgGgWIAKjBQABgKgCgTQgIhOhglJQgDgKgDgKIhulrQgCgHgCgGQhwllBYmSg");
	this.shape_844.setTransform(363.3,219.1);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#ECB77F").s().p("AnWcvIAKjBQABgKgCgTQgIhOhglJIgGgUIhulrIgEgNQhwllBYmSIAAAAQAbh9Ash0IAnhbQARguBQh/IBQh8IBVjbIAFgMQAVgZgihGIgIgOIgohAIgJgOQjUl0CYj9IAOgYQA0hMBRg4IAagRQA1ggAqgNQAQgFAPgCQHJhPgjELIgCAQQgPBVg0BgQgaAxggAtIgTAeIgFAgIABAgIA4BPIAWAeQATAZAKAXQAJAWABAQIAAAEQADAXgQAIQgIAFgdAFQgOABgLALIgEACQgHADALAaIABAHQACALgBAHIgBAIQACAFgBADIgKAPIgEAFIACAEQAFAKACAIQAEAJACAKIAAAIQAAAGgDAFIgFAHQgGAHgGAMIgGAOIgBADQgHAGAFATQABAFAEAFQAIANAMANQAKARgjAVIgJAGQgdASgHAJIAdAIIBNAfIBdAzIAIAFQgHASgDAVIgFAeIgCA+QgFASAKAeQAGAPAIAMIBwCOQAlAzAjA0QCDC1BHC+QAWA8ANBBIACAMQAPBWACApQACAZgCAWIAGCfIAAAIQAeCbgkDVIgFAZQgYB8gZBDIgWA/QgPAqgBCyIAAA1QAABlADBhIgIAbIxIALg");
	this.shape_845.setTransform(363.3,219.1);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#373535").ss(2.5).p("ArFA3QAbh9Ath0IAmhaQASgvBPh+QAshGAkg2IBVjbQADgHADgGQAUgZgihGQgDgHgEgHIgohAQgFgHgEgHQjUlzCXj+QAHgMAIgMQAzhMBRg4QANgJANgIQA1ggAqgNQAQgFAPgCQHJhPgiELQgCAIgBAIQgPBVg0BfQgaAxghAtQgIAPgKAPQgDAQgDARQABAPAAARIA4BOQAMAPAKAPQAUAZAKAYQAIAVACARQAAACAAABQACAYgPAIQgIAFgdAFQgOABgLAKQgCABgDABQgHAEALAaQABAEABADQACAKgBAIQAAAEgBADQABAGgBADQgFAIgFAGIgEAGIACAEQAFAJADAJQADAIADALQAAAEAAAEQAAAGgDAFQgCADgDAEQgGAGgGANQgEAGgCAHQgBACAAACQgIAFAGAUQABAEAEAGQAHANAMANQAKARgkAVQgFADgEADQgfASgHAJQAUAFAJADIBQAfIBfAyQAEACAEACQgGATgEAVQgDAPgCAOIgDA/QgGASALAeQAFAPAIAMIBwCPQAkAzAkA0QCDC1BGC+QAWA8ANBAQABAGACAGQAPBWACApQABAagBAVIAGCgQAAAEAAAEQAeCbgkDVQgCAMgDAMQgXB9gZBCQgLAggMAgQgPApAACzQgBAZAAAcQABBlACBgQgDAOgEAOIxIALIgGgWIALjBQABgKgCgUQgIhOhglIQgDgKgDgKIhulrQgCgHgCgGQhwllBXmSg");
	this.shape_846.setTransform(363.2,219.1);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#ECB77F").s().p("AnWcvIALjBQABgKgCgUQgIhOhglIIgGgUIhulrIgEgNQhwllBXmSIAAAAQAbh9Ath0IAmhaQASgvBPh+IBQh8IBWjbIAFgNQAUgZghhGIgIgOIgohAIgJgOQjUlzCXj+IAPgYQAzhMBRg4IAagRQA1ggAqgNQAQgFAPgCQHJhPgiELIgCAQQgQBVg0BfQgaAxggAtIgSAeIgHAhIABAgIA4BOIAWAeQAUAZAKAYQAIAVACARIAAADQACAYgPAIQgIAFgdAFQgOABgLAKIgFACQgHAEALAaIACAHQACAKgBAIQAAAEgBADQABAGgBADIgKAOIgEAGIADAEQAEAJADAJQADAIADALIAAAIQAAAGgDAFIgFAHQgGAGgGANIgGANIgBAEQgIAFAGAUQABAEAEAGQAHANANANQAJARgkAVIgJAGQgeASgIAJQAUAFAJADIBQAfIBfAyIAIAEQgGATgEAVIgFAdIgDA/QgGASALAeQAGAPAHAMIBwCPIBIBnQCDC1BGC+QAXA8AMBAIADAMQAPBWACApQACAagCAVIAGCgIAAAIQAeCbgkDVIgFAYQgXB9gZBCIgWBAQgQApAACzIgBA1QABBlACBgIgHAcIxIALg");
	this.shape_847.setTransform(363.2,219.1);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#373535").ss(2.5).p("ArEA3QAbh9Ash0IAnhaQASgvBPh+QAshGAkg2IBVjbQADgHADgGQAUgZgihGQgDgHgEgHIgohAQgFgHgEgHQjUlzCXj+QAHgMAHgMQA0hMBRg4QANgJANgIQA1ggAqgNQAQgFAPgCQHJhPgjELQgBAHgBAIQgQBWg0BfQgaAxghAtQgIAPgKAPQgDAPgDARQABAQAAARIA4BOQALAPALAPQATAZAKAYQAJAVACARQAAABAAACQADAXgPAJQgJAFgdAFQgOABgLAKQgCABgDABQgHADALAbQABAEABADQACAKgBAHQAAAFAAADQABAGgCACQgFAJgFAGIgEAFIACAEQAFAKADAIQADAJADAKQABAEgBAEQAAAGgDAFQgCADgDAFQgGAGgGAMQgDAHgDAHQgBACAAABQgIAGAFATQACAFAEAGQAHANAMANQAJARglAVQgFADgFADQgfATgIAIQAUAFAJADIBTAeIBhAxQAEACAFADQgHATgEAUQgDAPgCAPIgEA/QgGASAKAeQAGAPAIAMIBvCPQAkAzAjA1QCEC1BGC+QAWA7ANBBQABAGABAGQAQBVACAqQABAZgBAWIAGCfQAAAEAAAEQAeCbgkDVQgCAMgCANQgYB8gYBDQgMAggLAfQgPApgBCzQAAAaAAAcQABBkADBhQgEAOgEANIxHAMIgGgXIALjAQABgKgCgUQgIhPhglIQgDgJgDgKIhulsQgCgGgCgHQhwlkBXmSg");
	this.shape_848.setTransform(363.1,219.1);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#ECB77F").s().p("AnVcuIALjAQABgKgCgUQgIhPhglIIgGgTIhulsIgEgNQhwlkBXmSIAAAAQAbh9Ash0IAnhaQASgvBPh+QAshGAkg2IBVjbIAGgNQAUgZgihGIgHgOIgohAIgJgOQjUlzCXj+IAOgYQA0hMBRg4IAagRQA1ggAqgNQAQgFAPgCQHJhPgjELIgCAPQgQBWg0BfQgaAxghAtIgSAeIgGAgIABAhIA4BOIAWAeQATAZAKAYQAJAVACARIAAADQADAXgPAJQgJAFgdAFQgOABgLAKIgFACQgHADALAbIACAHQACAKgBAHIAAAIQABAGgCACIgKAPIgEAFIACAEQAFAKADAIQADAJADAKIAAAIQAAAGgDAFIgFAIQgGAGgGAMIgGAOIgBADQgIAGAFATQACAFAEAGQAHANAMANQAJARglAVIgKAGQgfATgIAIQAUAFAJADIBTAeIBhAxIAJAFQgHATgEAUIgFAeIgEA/QgGASAKAeQAGAPAIAMIBvCPQAkAzAjA1QCEC1BGC+QAWA7ANBBIACAMQAQBVACAqQABAZgBAWIAGCfIAAAIQAeCbgkDVIgEAZQgYB8gYBDIgXA/QgPApgBCzIAAA2QABBkADBhIgIAbIxHAMg");
	this.shape_849.setTransform(363.1,219.1);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#373535").ss(2.5).p("ArDA3QAbh9Ash0IAnhaQASguBPh/QAshGAkg2IBVjbQADgGACgHQAVgZghhGQgEgGgEgIIgog/QgFgIgEgHQjUlzCXj+QAHgMAHgLQA0hNBRg4QAMgJANgHQA2ghApgNQAQgFAPgCQHKhQgjELQgCAIgBAIQgQBWg0BfQgaAxggAtQgJAOgKAQQgDAPgDARQAAAQABAQIA4BPQALAPALAPQATAZAKAXQAJAVACARQAAACAAABQADAYgPAJQgIAEgeAGQgNABgMAKQgCABgDABQgHADALAaQABAEABADQACALgBAHQABAFgBADQABAFgBADQgGAIgFAHIgEAFIACAEQAFAJADAJQADAJADAKQABAEAAAEQgBAGgDAFQgCADgDAEQgGAHgGAMQgDAHgDAHQgBABAAACQgIAFAFAUQABAFAEAFQAHAOAMANQAJARgmAVQgFADgFADQghATgIAJQAUAEAKADIBWAeIBjAwQAEACAEACQgGATgEAVQgEAPgCAOIgFA/QgGATAKAeQAGAPAHAMIBvCQQAkAzAjA0QCEC2BGC9QAWA8ANBAQABAGABAGQAPBVADArQABAZgCAWIAHCfQAAAEAAAEQAeCagjDWQgCAMgDAMQgXB9gZBDQgLAggLAfQgQAoAAC0QAAAZAAAcQABBlADBgQgEAOgDAOIxHAMIgGgXIALjBQABgJgCgUQgJhQhflHQgDgKgDgJIhulsQgCgGgCgHQhwlkBXmSg");
	this.shape_850.setTransform(363,219.1);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#ECB77F").s().p("AnUcuIALjBQABgJgCgUQgJhQhflHIgGgTIhulsIgEgNQhwlkBXmSIAAAAQAbh9Ash0IAnhaQASguBPh/QAshGAkg2IBVjbIAFgNQAVgZghhGIgIgOIgog/IgJgPQjUlzCXj+IAOgXQA0hNBRg4QAMgJANgHQA2ghApgNQAQgFAPgCQHKhQgjELIgDAQQgQBWg0BfQgaAxggAtIgTAeIgGAgIABAgIA4BPIAWAeQATAZAKAXQAJAVACARIAAADQADAYgPAJQgIAEgeAGQgNABgMAKIgFACQgHADALAaIACAHQACALgBAHQABAFgBADQABAFgBADIgLAPIgEAFIACAEQAFAJADAJIAGATIABAIQgBAGgDAFIgFAHQgGAHgGAMIgGAOIgBADQgIAFAFAUQABAFAEAFQAHAOAMANQAJARgmAVIgKAGQghATgIAJQAUAEAKADIBWAeIBjAwIAIAEQgGATgEAVIgGAdIgFA/QgGATAKAeQAGAPAHAMIBvCQQAkAzAjA0QCEC2BGC9QAWA8ANBAIACAMQAPBVADArQABAZgCAWIAHCfIAAAIQAeCagjDWIgFAYQgXB9gZBDIgWA/QgQAoAAC0IAAA1QABBlADBgIgHAcIxHAMg");
	this.shape_851.setTransform(363,219.1);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#373535").ss(2.5).p("ArCA3QAbh9Ash0IAnhaQASguBPh/QAshGAkg2IBVjbQADgGACgHQAWgZgihFQgEgHgEgIIgog/QgFgHgEgIQjUlzCWj+QAIgLAHgMQA0hNBQg3QANgJANgIQA1ghAqgNQAQgEAPgDQHKhQgkELQgBAIgBAIQgQBVg0BgQgaAwghAuQgJAOgKAPQgDAQgDARQAAAPAAARIA5BOQALAPALAPQATAZAKAYQAJAVACARQAAACAAABQADAYgPAIQgIAFgdAGQgOABgMAJQgCABgDABQgHADALAbQABAEABADQACAKgBAIQABAEgBADQABAGgBADQgGAIgFAGIgFAFIADAFQAFAJACAIQAEAJADAKQABAFAAAEQgBAGgDAEQgBAEgDAEQgHAGgGANQgDAGgDAHQgBACAAABQgJAGAGATQABAFAEAGQAHANAMANQAIASgmAVQgGAEgFACQgiATgJAJQAUAEAKADIBZAeIBlAvQAEACAFACQgHATgEAUQgDAPgDAPIgFA/QgHASAKAfQAFAPAIANIBuCQQAkAzAjA0QCEC2BFC9QAXA8AMBAQACAGABAGQAPBUADArQABAZgCAWIAHCfQAAAEAAAEQAfCbgkDVQgCAMgCANQgXB8gZBDQgLAggMAfQgPAoAAC0QAAAaAAAcQABBkADBhQgEAOgDAOIxHAMIgFgXIALjBQABgJgCgVQgJhPhflHQgDgKgDgKIhulrQgCgGgCgHQhwlkBXmSg");
	this.shape_852.setTransform(362.9,219.1);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#ECB77F").s().p("AnTcuIALjBQABgJgCgVQgJhPhflHIgGgUIhulrIgEgNQhwlkBXmSIAAAAQAbh9Ash0IAnhaQASguBPh/QAshGAkg2IBVjbIAFgNQAWgZgihFIgIgPIgog/IgJgPQjUlzCWj+IAPgXQA0hNBQg3IAagRQA1ghAqgNQAQgEAPgDQHKhQgkELIgCAQQgQBVg0BgQgaAwghAuIgTAdIgGAhIAAAgIA5BOIAWAeQATAZAKAYQAJAVACARIAAADQADAYgPAIQgIAFgdAGQgOABgMAJIgFACQgHADALAbIACAHQACAKgBAIIAAAHQABAGgBADQgGAIgFAGIgFAFIADAFQAFAJACAIQAEAJADAKIABAJQgBAGgDAEIgEAIQgHAGgGANIgGANIgBADQgJAGAGATQABAFAEAGQAHANAMANQAIASgmAVIgLAGQgiATgJAJQAUAEAKADIBZAeIBlAvIAJAEQgHATgEAUIgGAeIgFA/QgHASAKAfQAFAPAIANIBuCQQAkAzAjA0QCEC2BFC9QAXA8AMBAIADAMQAPBUADArQABAZgCAWIAHCfIAAAIQAfCbgkDVIgEAZQgXB8gZBDIgXA/QgPAoAAC0IAAA2QABBkADBhIgHAcIxHAMg");
	this.shape_853.setTransform(362.9,219.1);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#373535").ss(2.5).p("ArBA3QAbh9Ash0IAnhaQARguBPh/QAshFAlg3IBUjbQADgGADgHQAVgZgihFQgDgHgEgHIgphAQgEgHgEgHQjVlzCXj+QAHgMAIgMQAzhMBRg4QAMgJANgIQA2ggApgNQAQgFAPgDQHKhQgkELQgBAIgBAIQgQBVg1BfQgZAxghAtQgJAPgKAPQgDAPgDARQAAAQAAARIA4BOQALAPALAPQATAZALAYQAIAVACAQQAAACABACQACAYgOAIQgIAFgdAGQgOABgMAJQgDABgCABQgIACALAcQABAEABADQACAKAAAIQABAEgBADQABAGgCADQgFAIgGAGIgEAFIACAEQAFAKADAIQAEAJADAKQABAEgBAEQAAAGgDAFQgCADgDAEQgGAHgGAMQgEAHgDAHQAAABgBACQgIAFAFAUQACAFADAFQAHAOAMANQAIASgoAVQgGAEgFACQgjATgJAJQATAEALADIBcAeIBnAtQAEACAFACQgHATgEAVQgDAPgDAOIgHBAQgGASAJAfQAFAPAIANIBuCQQAkAzAiA1QCEC2BGC9QAWA8ANBAQABAGABAGQAQBTACAsQABAZgBAWIAGCfQAAAEAAAEQAgCagkDWQgCAMgCAMQgXB9gZBDQgLAggMAfQgPAnAAC1QAAAZAAAcQABBlADBgQgDAPgDAOIxGAMIgFgXIAKjBQABgKgCgUQgJhQhflGQgDgKgDgKIhulrQgCgHgCgGQhvlkBXmSg");
	this.shape_854.setTransform(362.9,219.1);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#ECB77F").s().p("AnScuIAKjBQABgKgCgUQgJhQhflGIgGgUIhulrIgEgNQhvlkBXmSIAAAAQAbh9Ash0IAnhaQARguBPh/IBRh8IBUjbIAGgNQAVgZgihFIgHgOIgphAIgIgOQjVlzCXj+IAPgYQAzhMBRg4IAZgRQA2ggApgNQAQgFAPgDQHKhQgkELIgCAQQgQBVg1BfQgZAxghAtIgTAeIgGAgIAAAhIA4BOIAWAeQATAZALAYQAIAVACAQIABAEQACAYgOAIQgIAFgdAGQgOABgMAJIgFACQgIACALAcIACAHQACAKAAAIQABAEgBADQABAGgCADIgLAOIgEAFIACAEIAIASIAHATIAAAIQAAAGgDAFIgFAHQgGAHgGAMIgHAOIgBADQgIAFAFAUQACAFADAFQAHAOAMANQAIASgoAVIgLAGQgjATgJAJIAeAHIBcAeIBnAtIAJAEQgHATgEAVIgGAdIgHBAQgGASAJAfQAFAPAIANIBuCQQAkAzAiA1QCEC2BGC9QAWA8ANBAIACAMQAQBTACAsQABAZgBAWIAGCfIAAAIQAgCagkDWIgEAYQgXB9gZBDQgLAggMAfQgPAnAAC1IAAA1QABBlADBgIgGAdIxGAMg");
	this.shape_855.setTransform(362.9,219.1);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#373535").ss(2.5).p("ArAA3QAbh9Ash0IAnhaQARguBPh/QAshFAkg3IBVjbQADgGADgHQAVgYgihGQgDgHgEgHIgphAQgEgHgEgHQjVlzCXj+QAHgMAHgMQA0hMBQg4QANgJANgIQA1ggAqgNQAQgFAPgDQHKhQgkELQgCAIgBAIQgQBVg0BfQgaAwghAuQgJAOgKAQQgDAPgDARQAAAQgBARIA5BOQALAPALAPQATAZAKAXQAJAVACARQAAACABABQADAZgOAIQgIAFgeAGQgOABgMAJQgDABgCABQgIACALAbQABAEABADQACALAAAHQABAFgBADQABAGgBACQgGAJgGAGIgFAFIADAEQAFAJADAJQAEAIADALQABAEAAAEQgBAGgDAFQgBADgDAEQgGAHgHAMQgDAGgEAHQAAACgBACQgIAFAFAUQABAEAEAGQAHAOALANQAJASgqAVQgGAEgFACQgkATgKAJQATAEALADIBfAdIBpAtQAFACAEACQgGATgFAUQgDAPgDAPIgHBAQgHASAJAfQAFAPAIANIBtCRQAjAzAjA1QCEC3BFC8QAXA7ANBAQABAGABAGQAQBUACArQABAagBAVIAGCfQAAAEAAAEQAgCagjDXQgCAMgCAMQgXB8gZBEQgLAggMAeQgPAnAAC1QAAAaAAAcQABBkAEBhQgDAOgDAPIxHAMIgEgYIAKjAQABgKgCgUQgJhRhflGQgDgJgDgKIhulrQgCgHgCgGQhvlkBXmSg");
	this.shape_856.setTransform(362.8,219.1);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#ECB77F").s().p("AnRctIAKjAQABgKgCgUQgJhRhflGIgGgTIhulrIgEgNQhvlkBXmSIAAAAQAbh9Ash0IAnhaQARguBPh/IBQh8IBVjbIAGgNQAVgYgihGIgHgOIgphAIgIgOQjVlzCXj+IAOgYQA0hMBQg4IAagRQA1ggAqgNQAQgFAPgDQHKhQgkELIgDAQQgQBVg0BfQgaAwghAuIgTAeIgGAgIgBAhIA5BOIAWAeQATAZAKAXQAJAVACARIABADQADAZgOAIQgIAFgeAGQgOABgMAJIgFACQgIACALAbIACAHQACALAAAHIAAAIQABAGgBACIgMAPIgFAFIADAEIAIASQAEAIADALIABAIQgBAGgDAFIgEAHQgGAHgHAMIgHANIgBAEQgIAFAFAUQABAEAEAGQAHAOALANQAJASgqAVIgLAGQgkATgKAJIAeAHIBfAdIBpAtIAJAEQgGATgFAUIgGAeIgHBAQgHASAJAfQAFAPAIANIBtCRIBGBoQCEC3BFC8QAXA7ANBAIACAMQAQBUACArQABAagBAVIAGCfIAAAIQAgCagjDXIgEAYQgXB8gZBEIgXA+QgPAnAAC1IAAA2QABBkAEBhIgGAdIxHAMg");
	this.shape_857.setTransform(362.8,219.1);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#373535").ss(2.5).p("Aq/A3QAbh9Ash0IAnhaQARguBPh/QAshFAkg3IBVjbQADgGADgHQAVgYgihGQgDgHgEgHIgohAQgFgHgEgHQjVlzCXj+QAHgMAHgMQA0hMBQg4QANgJANgIQA1ggAqgNQAQgFAOgDQHLhQglELQgBAIgBAIQgRBVg0BfQgaAwghAuQgJAOgKAPQgDAQgDARQAAAPgBARIA4BOQAMAQAKAPQAUAYAKAYQAJAVACARQAAACABABQADAZgOAIQgIAFgdAFQgOACgNAIQgDABgCABQgJACAMAcQABAEABADQACAKAAAIQABAEgBAEQABAGgBACQgGAIgGAGIgFAFIACAFQAFAJAEAIQAEAJADAKQABAEAAAEQAAAGgDAFQgCADgDAFQgGAGgGAMQgEAHgEAHQAAACgBABQgJAFAGAUQABAFAEAGQAHANALAOQAIASgqAVQgHAEgFADQgmASgKAJQATAEALADIBjAdIBrArQAEACAFACQgHATgEAVQgEAPgDAOIgIBBQgHASAJAfQAFAPAHANIBtCRQAjA0AjA0QCEC4BFC7QAWA8ANBAQACAGABAGQAQBTACAsQABAZgBAWIAGCfQAAAEAAAEQAgCZgjDXQgCAMgCANQgXB8gYBDQgLAhgMAeQgQAmABC2QAAAZAAAcQABBlAEBgQgDAPgDAPIxGAMIgEgYIAKjBQABgJgCgUQgJhShflFQgDgJgDgKIhulrQgCgHgCgGQhvlkBXmSg");
	this.shape_858.setTransform(362.7,219.1);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#ECB77F").s().p("AnQctIAKjBQABgJgCgUQgJhShflFIgGgTIhulrIgEgNQhvlkBXmSIAAAAQAbh9Ash0IAnhaQARguBPh/IBQh8IBVjbIAGgNQAVgYgihGIgHgOIgohAIgJgOQjVlzCXj+IAOgYQA0hMBQg4IAagRQA1ggAqgNQAQgFAOgDQHLhQglELIgCAQQgRBVg0BfQgaAwghAuIgTAdIgGAhIgBAgIA4BOIAWAfQAUAYAKAYQAJAVACARIABADQADAZgOAIQgIAFgdAFQgOACgNAIIgFACQgJACAMAcIACAHQACAKAAAIIAAAIQABAGgBACIgMAOIgFAFIACAFIAJARIAHATIABAIQAAAGgDAFIgFAIQgGAGgGAMIgIAOIgBADQgJAFAGAUIAFALQAHANALAOQAIASgqAVIgMAHQgmASgKAJIAeAHIBjAdIBrArIAJAEQgHATgEAVIgHAdIgIBBQgHASAJAfQAFAPAHANIBtCRIBGBoQCEC4BFC7QAWA8ANBAIADAMQAQBTACAsQABAZgBAWIAGCfIAAAIQAgCZgjDXIgEAZQgXB8gYBDQgLAhgMAeQgQAmABC2IAAA1QABBlAEBgIgGAeIxGAMg");
	this.shape_859.setTransform(362.7,219.1);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#373535").ss(2.5).p("Aq+A3QAbh9AshzIAnhbQARguBPh/QAshFAkg3IBVjbQADgGADgGQAVgZgihGQgDgHgEgHIgohAQgFgHgEgHQjVlzCWj+QAHgLAIgMQAzhNBRg4QANgJANgIQA1ggApgNQAQgFAPgDQHLhQglELQgCAIgBAHQgQBWg1BfQgaAwghAtQgJAPgKAPQgDAPgDARQAAAQgBARIA4BOQALAPALAPQAUAZAKAXQAJAVACARQAAACABACQADAYgOAJQgHAFgeAFQgOACgNAIQgDABgCABQgJACAMAbQABAEABAEQACAKABAIQAAAEAAADQABAGgCADQgGAIgGAGIgFAFIACAEQAFAJADAJQAFAJADAKQABAEAAAEQAAAGgDAFQgCADgDAEQgGAHgGAMQgEAHgEAHQAAABgBACQgJAFAGAUQABAFAEAFQAGAOAMAOQAHASgrAWQgHADgFADQgnASgLAJQATAEAMADIBlAdIBtAqQAFACAEACQgGATgFAUQgDAPgDAOIgJBBQgIATAJAfQAFAPAHANIBsCSQAjAzAjA1QCEC4BFC7QAWA8ANA/QABAGACAGQAPBTADAtQABAZgCAWIAHCfQAAAEAAAEQAhCZgjDXQgCAMgCAMQgXB8gYBEQgMAhgLAdQgQAmABC2QAAAaAAAcQABBkAEBhQgDAPgCAPIxGAMIgEgYIAKjBQABgJgCgVQgJhRhflFQgDgKgDgJIhulrQgCgHgCgGQhvlkBXmSg");
	this.shape_860.setTransform(362.6,219.1);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#ECB77F").s().p("AnPctIAKjBQABgJgCgVQgJhRhflFIgGgTIhulrIgEgNQhvlkBXmSIAAAAQAbh9AshzIAnhbQARguBPh/IBQh8IBVjbIAGgMQAVgZgihGIgHgOIgohAIgJgOQjVlzCWj+IAPgXQAzhNBRg4IAagRQA1ggApgNQAQgFAPgDQHLhQglELIgDAPQgQBWg1BfQgaAwghAtIgTAeIgGAgIgBAhIA4BOIAWAeQAUAZAKAXQAJAVACARIABAEQADAYgOAJQgHAFgeAFQgOACgNAIIgFACQgJACAMAbIACAIIADASIAAAHQABAGgCADIgMAOIgFAFIACAEQAFAJADAJQAFAJADAKIABAIQAAAGgDAFIgFAHQgGAHgGAMIgIAOIgBADQgJAFAGAUQABAFAEAFQAGAOAMAOQAHASgrAWIgMAGQgnASgLAJIAfAHIBlAdIBtAqIAJAEQgGATgFAUIgGAdIgJBBQgIATAJAfQAFAPAHANIBsCSIBGBoQCEC4BFC7QAWA8ANA/IADAMQAPBTADAtQABAZgCAWIAHCfIAAAIQAhCZgjDXIgEAYQgXB8gYBEIgXA+QgQAmABC2IAAA2QABBkAEBhIgFAeIxGAMg");
	this.shape_861.setTransform(362.6,219.1);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#373535").ss(2.5).p("Aq+A3QAbh9AshzIAnhbQARguBQh/QAshFAkg3IBVjaQADgHACgGQAWgZgihGQgEgHgEgHIgohAQgEgHgFgHQjUlzCWj9QAHgMAHgMQA0hNBQg4QANgJANgHQA1ghApgNQARgFAOgDQHLhQglEKQgCAIgBAIQgQBWg1BeQgaAwghAuQgJAPgKAPQgDAPgDARQgBAQgBARIA4BOQAMAPAKAPQAUAZALAXQAIAVADARQAAACAAABQAEAZgOAJQgHAFgeAFQgOACgOAIQgCABgDABQgJABAMAcQABAEABADQADALAAAHQABAFgBADQABAGgBADQgGAIgHAGIgFAFIACAEQAFAJAEAIQAEAJAEAKQABAFAAAEQAAAGgEAFQgBADgDAEQgGAHgHAMQgEAGgDAHQgBACAAABQgJAFAFAUQABAFAEAGQAHAOALANQAHASgsAXQgHADgGADQgoATgLAJQATADAMADIBoAdIBvApQAFABAEACQgGATgFAVQgDAPgDAOIgLBBQgIASAJAgQAFAPAHANIBrCTQAkAzAiA1QCEC4BFC7QAWA8ANA/QACAGABAGQAQBSACAtQABAagBAVIAGCfQAAAEAAAEQAiCZgjDXQgCAMgCANQgXB8gYBDQgLAigMAdQgQAlABC3QAAAZABAcQABBlADBgQgCAPgCAPIxGANIgEgZIALjAQABgKgCgUQgKhShflEQgDgKgDgKIhulrQgCgGgCgHQhvljBXmSg");
	this.shape_862.setTransform(362.5,219.1);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#ECB77F").s().p("AnPcsIALjAQABgKgCgUQgKhShflEIgGgUIhulrIgEgNQhvljBXmSIAAAAQAbh9AshzIAnhbQARguBQh/IBQh8IBVjaIAFgNQAWgZgihGIgIgOIgohAIgJgOQjUlzCWj9IAOgYQA0hNBQg4QANgJANgHQA1ghApgNQARgFAOgDQHLhQglEKIgDAQQgQBWg1BeQgaAwghAuIgTAeIgGAgIgCAhIA4BOIAWAeQAUAZALAXQAIAVADARIAAADQAEAZgOAJQgHAFgeAFQgOACgOAIIgFACQgJABAMAcIACAHQADALAAAHIAAAIQABAGgBADQgGAIgHAGIgFAFIACAEIAJARIAIATIABAJQAAAGgEAFIgEAHQgGAHgHAMIgHANIgBADQgJAFAFAUQABAFAEAGQAHAOALANQAHASgsAXIgNAGQgoATgLAJIAfAGIBoAdIBvApIAJADQgGATgFAVIgGAdIgLBBQgIASAJAgQAFAPAHANIBrCTIBGBoQCEC4BFC7QAWA8ANA/IADAMQAQBSACAtQABAagBAVIAGCfIAAAIQAiCZgjDXIgEAZQgXB8gYBDQgLAigMAdQgQAlABC3IABA1QABBlADBgIgEAeIxGANg");
	this.shape_863.setTransform(362.5,219.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#373535").ss(2.5).p("Aq9A3QAbh9AshzIAnhbQARguBQh/QAshFAkg3IBVjaQACgHADgGQAWgZgihGQgEgGgEgIIgog/QgEgIgFgHQjUlyCWj+QAHgMAHgMQA0hMBQg4QAMgJANgIQA2ghApgNQAQgFAPgDQHLhQgmEKQgBAIgBAIQgRBWg0BeQgaAwgiAuQgJAOgKAPQgDAQgDARQgBAPgBARIA4BPQAMAPAKAPQAUAYAKAYQAJAUADARQAAACAAACQAEAZgNAJQgIAFgeAFQgNACgPAIQgCAAgDABQgJABAMAdQABAEABADQADAKAAAIQABAFAAADQAAAGgBACQgGAIgHAGIgFAFIACAFQAFAJAEAIQAEAJAEAKQABAEAAAEQAAAGgDAFQgCADgDAFQgGAHgGALQgEAHgEAHQgBABAAACQgKAFAGAUQABAFAEAFQAGAOALAOQAHASgtAXQgHADgGADQgpATgMAJQATADAMADIBsAcIBwAoQAFACAFACQgHATgEAUQgEAPgDAOIgLBCQgJASAJAgQAEAPAIANIBqCTQAkA0AiA0QCEC5BFC6QAWA9ANA/QACAGABAGQAQBRACAuQABAZgBAWIAGCfQAAAEAAAEQAiCYgiDYQgDAMgCAMQgWB8gYBEQgMAigMAcQgPAlABC3QAAAaAAAcQACBkAEBhQgDAPgCAPIxFANIgEgZIALjAQABgKgDgUQgJhThflDQgDgKgDgKIhulrQgCgGgCgHQhvljBXmSg");
	this.shape_864.setTransform(362.4,219.1);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#ECB77F").s().p("AnOcsIALjAQABgKgDgUQgJhThflDIgGgUIhulrIgEgNQhvljBXmSIAAAAQAbh9AshzIAnhbQARguBQh/IBQh8IBVjaIAFgNQAWgZgihGIgIgOIgog/IgJgPQjUlyCWj+IAOgYQA0hMBQg4IAZgRQA2ghApgNQAQgFAPgDQHLhQgmEKIgCAQQgRBWg0BeQgaAwgiAuIgTAdIgGAhIgCAgIA4BPIAWAeQAUAYAKAYQAJAUADARIAAAEQAEAZgNAJQgIAFgeAFQgNACgPAIIgFABQgJABAMAdIACAHQADAKAAAIIABAIQAAAGgBACQgGAIgHAGIgFAFIACAFIAJARIAIATIABAIQAAAGgDAFIgFAIQgGAHgGALIgIAOIgBADQgKAFAGAUQABAFAEAFQAGAOALAOQAHASgtAXIgNAGQgpATgMAJIAfAGIBsAcIBwAoIAKAEQgHATgEAUIgHAdIgLBCQgJASAJAgQAEAPAIANIBqCTIBGBoQCEC5BFC6QAWA9ANA/IADAMQAQBRACAuQABAZgBAWIAGCfIAAAIQAiCYgiDYIgFAYQgWB8gYBEQgMAigMAcQgPAlABC3IAAA2QACBkAEBhIgFAeIxFANg");
	this.shape_865.setTransform(362.4,219.1);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#373535").ss(2.5).p("Aq8A3QAbh9AshzIAnhbQARguBPh/QAshFAlg3IBUjaQADgGADgHQAWgYgihGQgDgHgEgIIgpg/QgEgHgEgHQjVlzCVj+QAHgMAIgMQAzhMBRg4QAMgJANgIQA1ggAqgOQAQgFAPgDQHLhQgmEKQgCAIgBAIQgRBWg0BeQgaAwgiAuQgJAOgKAPQgDAPgDARQgBAQgBARIA4BOQALAPALAPQAUAZAKAXQAJAVADARQAAACAAABQAEAagNAJQgHAFgeAFQgOACgPAHQgCABgDABQgJABAMAcQABAEABAEQADAKABAIQAAAEAAAEQABAFgCADQgGAIgHAGIgFAFIACAEQAFAJAEAJQAEAJAEAKQABAEAAAEQAAAGgDAFQgCADgDAEQgFAHgHAMQgEAHgEAHQgBABAAACQgKAEAGAUQABAFADAGQAHAOALAOQAHASgvAXQgHADgGADQgqATgNAJQATAEAMADIBvAbIBzAnQAEABAGACQgHATgFAVQgEAOgDAPIgMBBQgJATAJAgQAEAPAHANIBqCUQAkA0AiA0QCEC5BEC6QAXA8ANA/QABAGACAGQAQBRACAvQABAZgBAWIAGCeQAAAEAAAEQAiCZgiDXQgCANgCAMQgWB8gYBEQgMAhgMAdQgQAkACC4QAAAZAAAcQACBlAEBgQgCAQgCAPIxGANIgDgZIALjBQABgJgDgVQgJhThflDQgDgJgDgKIhulrQgCgGgCgHQhvljBXmSg");
	this.shape_866.setTransform(362.3,219.1);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#ECB77F").s().p("AnNcsIALjBQABgJgDgVQgJhThflDIgGgTIhulrIgEgNQhvljBXmSIAAAAQAbh9AshzIAnhbQARguBPh/IBRh8IBUjaIAGgNQAWgYgihGIgHgPIgpg/IgIgOQjVlzCVj+IAPgYQAzhMBRg4IAZgRQA1ggAqgOQAQgFAPgDQHLhQgmEKIgDAQQgRBWg0BeQgaAwgiAuIgTAdIgGAgIgCAhIA4BOIAWAeQAUAZAKAXQAJAVADARIAAADQAEAagNAJQgHAFgeAFQgOACgPAHIgFACQgJABAMAcIACAIQADAKABAIIAAAIQABAFgCADQgGAIgHAGIgFAFIACAEIAJASIAIATIABAIQAAAGgDAFIgFAHQgFAHgHAMIgIAOIgBADQgKAEAGAUQABAFADAGQAHAOALAOQAHASgvAXIgNAGQgqATgNAJIAfAHIBvAbIBzAnIAKADQgHATgFAVIgHAdIgMBBQgJATAJAgQAEAPAHANIBqCUIBGBoQCEC5BEC6QAXA8ANA/IADAMQAQBRACAvQABAZgBAWIAGCeIAAAIQAiCZgiDXIgEAZQgWB8gYBEQgMAhgMAdQgQAkACC4IAAA1QACBlAEBgIgEAfIxGANg");
	this.shape_867.setTransform(362.3,219.1);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#373535").ss(2.5).p("Aq7A3QAbh9AshzIAnhbQARguBPh/QAshFAkg3IBVjaQADgGACgHQAWgYghhGQgEgHgEgIIgog/QgEgHgFgHQjUlzCVj+QAHgMAHgLQA0hNBQg4QAMgJANgIQA1ggAqgOQAQgFAPgDQHLhQgmEKQgCAIgBAIQgRBVg0BfQgaAvgiAuQgJAPgLAPQgDAPgDARQgBAQgBARIA4BOQAMAPAKAPQAUAZALAXQAJAUACASQAAACABABQAEAagNAIQgHAGgeAFQgOACgPAHQgDABgDABQgJAAAMAdQACAEABADQADALAAAHQABAFAAADQAAAGgBADQgHAIgGAGIgGAFIACAEQAFAJAEAIQAFAJADAKQACAFAAADQAAAHgDAFQgCADgDAEQgGAHgGAMQgFAGgDAHQgBACgBABQgJAFAFAUQABAFAEAGQAGAOALAOQAHASgwAXQgIADgGADQgrATgNAJQATAEAMADIByAbIB0AlQAFACAGACQgHATgFAUQgEAPgDAOIgNBCQgKATAJAgQAEAPAHANIBqCUQAjA0AjA1QCDC5BFC6QAWA8ANA/QACAGABAGQAQBRACAuQACAagCAVIAHCfQAAAEAAAEQAiCYgiDYQgCAMgCANQgWB7gYBEQgMAigMAcQgPAkABC4QAAAaABAcQABBkAEBhQgBAPgCAQIxFANIgDgaIAKjAQABgJgCgVQgKhUhelCQgDgJgDgKIhulrQgCgGgCgHQhvlkBXmRg");
	this.shape_868.setTransform(362.3,219.1);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#ECB77F").s().p("AnMcrIAKjAQABgJgCgVQgKhUhelCIgGgTIhulrIgEgNQhvlkBXmRIAAAAQAbh9AshzIAnhbQARguBPh/IBQh8IBVjaIAFgNQAWgYghhGIgIgPIgog/IgJgOQjUlzCVj+IAOgXQA0hNBQg4QAMgJANgIQA1ggAqgOQAQgFAPgDQHLhQgmEKIgDAQQgRBVg0BfQgaAvgiAuIgUAeIgGAgIgCAhIA4BOIAWAeQAUAZALAXQAJAUACASIABADQAEAagNAIQgHAGgeAFQgOACgPAHIgGACQgJAAAMAdIADAHQADALAAAHIABAIQAAAGgBADIgNAOIgGAFIACAEIAJARQAFAJADAKIACAIQAAAHgDAFIgFAHQgGAHgGAMIgIANIgCADQgJAFAFAUIAFALQAGAOALAOQAHASgwAXIgOAGQgrATgNAJIAfAHIByAbIB0AlIALAEQgHATgFAUIgHAdIgNBCQgKATAJAgQAEAPAHANIBqCUIBGBpQCDC5BFC6QAWA8ANA/IADAMQAQBRACAuQACAagCAVIAHCfIAAAIQAiCYgiDYIgEAZQgWB7gYBEQgMAigMAcQgPAkABC4IABA2QABBkAEBhIgDAfIxFANg");
	this.shape_869.setTransform(362.3,219.1);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#373535").ss(2.5).p("Aq6A3QAbh9AshzIAnhbQARgtBPiAQAshFAkg2IBVjbQADgGACgHQAXgYgihGQgEgHgEgHIgohAQgEgHgFgHQjUlzCVj9QAHgMAHgMQAzhNBRg4QAMgJANgIQA1ggAqgOQAQgFAOgCQHMhRgnEKQgBAIgBAIQgRBVg1BeQgaAwgiAuQgJAOgLAPQgDAQgDARQgBAPgBASIA4BOQALAPALAPQAUAYALAYQAJAUACARQAAACABACQAEAagNAIQgHAFgeAGQgOACgPAHQgDAAgDABQgJABAMAdQACAEABADQADAKAAAIQABAFAAADQABAGgCACQgHAJgGAFIgGAFIACAEQAFAJAEAJQAFAJAEAKQABAEAAAEQAAAGgDAFQgCADgDAFQgFAHgHALQgFAHgDAHQgBABgBACQgKAEAGAVQABAFADAFQAHAPALANQAGATgxAXQgIADgGADQgtATgNAJQATAEAMADIB2AbIB2AkQAFACAFABQgGATgFAVQgEAOgEAPIgOBCQgKATAJAgQAEAQAHAMIBpCVQAjA0AiA1QCEC5BEC5QAXA9ANA+QACAGABAGQAQBRACAvQACAZgCAWIAHCfQAAAEAAAEQAjCXgiDZQgCAMgDAMQgVB8gYBEQgMAigMAcQgQAjACC5QAAAZABAcQABBlAEBgQgBAQgCAQIxFANIgCgaIAKjAQABgJgCgVQgKhUhelCQgDgKgDgJIhulrQgCgHgCgGQhvlkBXmRg");
	this.shape_870.setTransform(362.2,219.1);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#ECB77F").s().p("AnLcrIAKjAQABgJgCgVQgKhUhelCIgGgTIhulrIgEgNQhvlkBXmRIAAAAQAbh9AshzIAnhbQARgtBPiAQAshFAkg2IBVjbIAFgNQAXgYgihGIgIgOIgohAIgJgOQjUlzCVj9IAOgYQAzhNBRg4IAZgRQA1ggAqgOQAQgFAOgCQHMhRgnEKIgCAQQgRBVg1BeQgaAwgiAuIgUAdIgGAhIgCAhIA4BOIAWAeQAUAYALAYQAJAUACARIABAEQAEAagNAIQgHAFgeAGQgOACgPAHIgGABQgJABAMAdIADAHQADAKAAAIIABAIQABAGgCACQgHAJgGAFIgGAFIACAEIAJASIAJATIABAIQAAAGgDAFIgFAIIgMASIgIAOIgCADQgKAEAGAVIAEAKQAHAPALANQAGATgxAXIgOAGQgtATgNAJIAfAHIB2AbIB2AkIAKADQgGATgFAVIgIAdIgOBCQgKATAJAgQAEAQAHAMIBpCVIBFBpQCEC5BEC5QAXA9ANA+IADAMQAQBRACAvQACAZgCAWIAHCfIAAAIQAjCXgiDZIgFAYQgVB8gYBEQgMAigMAcQgQAjACC5IABA1QABBlAEBgIgDAgIxFANg");
	this.shape_871.setTransform(362.2,219.1);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#373535").ss(2.5).p("Aq5A3QAbh9AshzIAmhbQARgtBQiAQAshFAkg2IBVjbQADgGACgHQAXgYgihGQgEgHgEgHIgohAQgEgHgFgHQjUlyCUj+QAIgMAHgMQAzhNBQg4QANgJANgIQA1ggApgOQAQgFAPgCQHMhRgnEKQgBAIgCAIQgRBVg1BeQgaAwghAuQgKAOgLAPQgDAPgCARQgCAQgBARIA4BOQALAPALAPQAUAZAKAXQAJAUADASQABACAAABQAEAbgMAIQgHAFgfAGQgNACgQAGQgDABgDABQgKAAANAdQABAEACAEQADAKABAIQABAFgBADQABAGgCACQgHAIgHAGIgFAFIACAEQAFAJAEAIQAFAKAEAJQABAFAAAEQAAAGgDAFQgBADgDAEQgGAHgHAMQgEAHgEAGQgBACgBABQgKAFAGAUQABAFADAGQAHAOAKAOQAGATgyAXQgIADgGADQguATgOAJQATAEANADIB4AbIB4AjQAFABAGACQgHATgFAUQgEAPgEAOIgOBDQgLASAJAhQAEAQAHANIBoCVQAjA0AiA0QCEC6BEC5QAWA9AOA+QABAGACAGQAQBQACAwQACAZgCAVIAHCfQAAAEAAAEQAjCYgiDYQgCAMgCANQgWB7gYBFQgLAigMAbQgQAjACC5QAAAaABAcQABBkAFBgQgCARgBAQIxFANIgCgaIAKjBQACgJgDgVQgLhUhelBQgDgKgDgJIhtlrQgCgHgCgGQhvlkBXmRg");
	this.shape_872.setTransform(362.1,219.1);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#ECB77F").s().p("AnKcrIAKjBQACgJgDgVQgLhUhelBIgGgTIhtlrIgEgNQhvlkBXmRQAbh9AshzIAmhbQARgtBQiAIBQh7IBVjbIAFgNQAXgYgihGIgIgOIgohAIgJgOQjUlyCUj+IAPgYQAzhNBQg4IAagRQA1ggApgOQAQgFAPgCQHMhRgnEKIgDAQQgRBVg1BeQgaAwghAuIgVAdIgFAgIgDAhIA4BOIAWAeQAUAZAKAXQAJAUADASIABADQAEAbgMAIQgHAFgfAGQgNACgQAGIgGACQgKAAANAdIADAIIAEASIAAAIQABAGgCACIgOAOIgFAFIACAEIAJARIAJATIABAJQAAAGgDAFIgEAHIgNATIgIANIgCADQgKAFAGAUQABAFADAGQAHAOAKAOQAGATgyAXIgOAGQguATgOAJIAgAHIB4AbIB4AjIALADIgMAnIgIAdIgOBDQgLASAJAhQAEAQAHANIBoCVIBFBoQCEC6BEC5QAWA9AOA+IADAMQAQBQACAwQACAZgCAVIAHCfIAAAIQAjCYgiDYIgEAZQgWB7gYBFQgLAigMAbQgQAjACC5IABA2QABBkAFBgIgDAhIxFANg");
	this.shape_873.setTransform(362.1,219.1);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#373535").ss(2.5).p("Aq5A3QAbh9AshzIAnhbQARgtBPiAQAshFAkg2IBVjbQADgGADgHQAWgYgihGQgDgHgEgHIgohAQgFgHgEgHQjVlyCVj+QAHgMAHgMQA0hMBQg5QAMgJANgIQA1ggAqgOQAQgFAOgCQHMhRgnEKQgBAHgCAIQgRBWg1BeQgaAvgiAuQgJAPgLAPQgDAPgDARQgBAQgCARIA4BOQALAPALAPQAUAYALAYQAJAUADASQAAABAAACQAFAagMAJQgHAFgfAGQgOACgPAGQgDABgDABQgKgBANAeQABAEABADQADALABAIQABAEAAAEQABAGgCACQgHAIgHAGIgGAFIACAEQAFAJAEAIQAFAJAEAKQACAEAAAEQAAAHgDAFQgCADgDAEQgFAHgHAMQgFAGgEAHQgBACAAABQgKAEAFAVQABAFADAGQAHAOAKAOQAGATgzAXQgIADgHADQgvAUgOAIQASAEAOADIB7AaIB6AiQAFACAGABQgHATgFAVQgEAOgEAPIgPBDQgLASAIAhQAEAQAHANIBoCVQAiA0AjA1QCEC6BDC5QAXA8ANA/QACAGABAGQAQBPADAwQABAagCAVIAHCfQAAAEAAAEQAkCXgiDZQgCAMgCAMQgWB8gXBEQgMAjgMAbQgQAjACC5QAAAZABAcQACBlAEBgQgBAQgBAQIxFAOIgBgaIAKjBQABgJgDgVQgKhVhelAQgDgKgDgKIhulqQgCgHgCgGQhvlkBXmRg");
	this.shape_874.setTransform(362,219.1);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#ECB77F").s().p("AnJcrIAKjBQABgJgDgVQgKhVhelAIgGgUIhulqIgEgNQhvlkBXmRQAbh9AshzIAnhbQARgtBPiAIBQh7IBVjbIAGgNQAWgYgihGIgHgOIgohAIgJgOQjVlyCVj+IAOgYQA0hMBQg5IAZgRQA1ggAqgOQAQgFAOgCQHMhRgnEKIgDAPQgRBWg1BeQgaAvgiAuIgUAeIgGAgIgDAhIA4BOIAWAeQAUAYALAYQAJAUADASIAAADQAFAagMAJQgHAFgfAGQgOACgPAGIgGACQgKgBANAeIACAHQADALABAIIABAIQABAGgCACIgOAOIgGAFIACAEIAJARIAJATIACAIQAAAHgDAFIgFAHIgMATIgJANIgBADQgKAEAFAVIAEALQAHAOAKAOQAGATgzAXIgPAGQgvAUgOAIIAgAHIB7AaIB6AiIALADIgMAoIgIAdIgPBDQgLASAIAhQAEAQAHANIBoCVIBFBpQCEC6BDC5QAXA8ANA/IADAMQAQBPADAwQABAagCAVIAHCfIAAAIQAkCXgiDZIgEAYQgWB8gXBEQgMAjgMAbQgQAjACC5IABA1QACBlAEBgIgCAgIxFAOg");
	this.shape_875.setTransform(362,219.1);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#373535").ss(2.5).p("Aq4A3QAbh9AshzIAnhbQARgtBPh/QAshGAkg2IBVjbQADgGADgGQAWgZgihGQgDgHgEgHIgohAQgFgHgEgHQjUlyCUj+QAHgMAHgMQAzhMBQg4QANgJANgIQA1ghApgOQAQgFAPgCQHMhRgoEJQgBAIgBAIQgSBWg0BeQgaAvgiAuQgKAOgLAPQgDAQgDARQgBAPgCASIA4BOQALAPALAPQAUAYALAYQAJATADASQAAACAAACQAFAagMAJQgHAFgeAGQgOACgQAGQgDABgDAAQgLAAANAdQACAEABAEQAEALABAHQABAFgBADQABAGgCADQgHAIgHAGIgGAEIACAEQAFAJAEAJQAFAJAEAKQACAEAAAEQAAAGgDAFQgBADgDAFQgGAHgHALQgFAHgEAHQgBABAAACQgLAEAGAUQABAFADAGQAHAPAKAOQAFATg0AXQgIADgHADQgwAUgPAJQASADAOADIB+AaIB8AhQAGABAFACQgGATgGAUQgEAPgEAOIgQBDQgLATAIAhQAEAQAGANIBoCWQAiA0AjA1QCEC6BDC4QAWA9AOA+QACAGABAGQAQBPADAxQABAZgCAWIAHCeQAAAEAAAEQAkCXghDZQgCAMgCANQgWB7gYBFQgLAjgMAaQgQAjACC5QAAAaABAcQACBkAEBgQgBARAAAQIxFAOIgBgbIAKjAQABgJgDgVQgLhWhdlAQgDgJgDgKIhulqQgCgHgCgGQhvlkBXmRg");
	this.shape_876.setTransform(361.9,219.1);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#ECB77F").s().p("AnIcqIAKjAQABgJgDgVQgLhWhdlAIgGgTIhulqIgEgNQhvlkBXmRQAbh9AshzIAnhbQARgtBPh/IBQh8IBVjbIAGgMQAWgZgihGIgHgOIgohAIgJgOQjUlyCUj+IAOgYQAzhMBQg4IAagRQA1ghApgOQAQgFAPgCQHMhRgoEJIgCAQQgSBWg0BeQgaAvgiAuIgVAdIgGAhIgDAhIA4BOIAWAeQAUAYALAYQAJATADASIAAAEQAFAagMAJQgHAFgeAGQgOACgQAGIgGABQgLAAANAdIADAIQAEALABAHIAAAIQABAGgCADIgOAOIgGAEIACAEIAJASQAFAJAEAKQACAEAAAEQAAAGgDAFIgEAIIgNASIgJAOIgBADQgLAEAGAUIAEALQAHAPAKAOQAFATg0AXIgPAGQgwAUgPAJIAgAGIB+AaIB8AhIALADIgMAnIgIAdIgQBDQgLATAIAhQAEAQAGANIBoCWIBFBpQCEC6BDC4QAWA9AOA+IADAMQAQBPADAxQABAZgCAWIAHCeIAAAIQAkCXghDZIgEAZQgWB7gYBFQgLAjgMAaQgQAjACC5IABA2QACBkAEBgIgBAhIxFAOg");
	this.shape_877.setTransform(361.9,219.1);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#373535").ss(2.5).p("Aq3A3QAbh9AshzIAnhbQARgtBPh/QAshFAkg3IBVjaQADgHACgGQAXgYghhHQgEgHgEgHIgohAQgFgHgEgHQjUlyCUj9QAHgMAHgMQAzhNBQg4QANgJANgIQA0ghAqgNQAQgGAPgCQHMhSgoEKQgBAIgCAIQgRBWg1BdQgaAvgiAvQgKAOgLAPQgDAPgDARQgCAQgBARIA4BOQALAPALAPQATAZALAXQAKAUADASQAAACAAABQAFAbgLAJQgHAFgfAGQgOACgQAFQgDABgDABQgLgBANAeQACAEABADQAEALABAIQABAFgBADQABAGgCACQgHAIgHAGIgGAFIACAEQAFAJAEAIQAFAJAFAKQABAFAAAEQABAGgEAFQgBADgDAEQgGAHgHAMQgEAGgFAHQgBACAAABQgLAEAFAVQACAFADAGQAGAOAKAPQAGATg2AXQgIADgIADQgxAUgOAJQARADAOADICCAaIB+AfQAFACAGABQgHATgFAUQgEAPgEAPIgSBDQgLATAHAgQAEARAHANIBnCXQAiA0AiA1QCEC6BEC4QAWA9AOA+QABAGACAGQAQBOACAxQACAagCAVIAHCfQAAAEAAAEQAlCXgiDZQgCAMgCAMQgVB7gYBGQgLAjgNAaQgQAiADC6QAAAZABAcQACBlAFBgQgBARgBAQIxFAOIAKjbQABgJgDgWQgLhVhdlAQgDgJgDgKIhulrQgCgGgCgHQhvljBXmRg");
	this.shape_878.setTransform(361.8,219.1);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#ECB77F").s().p("Am9ZqQABgJgDgWQgLhVhdlAIgGgTIhulrIgEgNQhvljBXmRQAbh9AshzIAnhbQARgtBPh/IBQh8IBVjaIAFgNQAXgYghhHIgIgOIgohAIgJgOQjUlyCUj9IAOgYQAzhNBQg4IAagRQA0ghAqgNQAQgGAPgCQHMhSgoEKIgDAQQgRBWg1BdQgaAvgiAvIgVAdIgGAgIgDAhIA4BOIAWAeQATAZALAXQAKAUADASIAAADQAFAbgLAJQgHAFgfAGQgOACgQAFIgGACQgLgBANAeIADAHQAEALABAIIAAAIQABAGgCACIgOAOIgGAFIACAEIAJARIAKATIABAJQABAGgEAFIgEAHIgNATIgJANIgBADQgLAEAFAVIAFALQAGAOAKAPQAGATg2AXIgQAGQgxAUgOAJIAfAGICCAaIB+AfIALADIgMAnIgIAeIgSBDQgLATAHAgQAEARAHANIBnCXIBEBpQCEC6BEC4QAWA9AOA+IADAMQAQBOACAxQACAagCAVIAHCfIAAAIQAlCXgiDZIgEAYQgVB7gYBGQgLAjgNAaQgQAiADC6IABA1QACBlAFBgIgCAhIxFAOg");
	this.shape_879.setTransform(361.8,219.1);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#373535").ss(2.5).p("Aq2A3QAbh9AshzIAmhbQARgtBQh/QAshFAkg3IBVjaQACgHADgGQAXgYgihGQgDgHgEgIIgog/QgFgHgEgHQjVlzCUj9QAHgMAHgMQAzhNBQg4QANgJANgIQA1ggApgOQAQgGAPgCQHMhSgoEKQgBAIgCAIQgRBWg1BdQgaAvgjAvQgJAOgLAPQgDAPgDARQgCAQgCARIA4BOQALAPALAPQAUAYALAYQAJATADASQABACAAACQAFAbgLAJQgHAFgfAGQgOACgRAFQgDABgDABQgLgBAOAeQABAEABADQAEALABAIQABAEAAAEQABAGgCACQgIAIgHAGIgGAFIACAEQAFAIAEAJQAFAJAFAKQACAEAAAEQAAAHgDAFQgBADgDAEQgGAHgHAMQgFAGgEAHQgBABgBACQgKAEAFAVQABAEADAGQAHAPAKAOQAFAUg3AXQgJADgHADQgyAUgQAJQASADAOADIEEA4QAGABAGACQgHATgFAUQgFAPgEAOIgSBEQgMASAIAhQAEARAGANIBmCXQAjA1AiA0QCEC7BDC4QAWA9AOA9QACAGABAGQARBOACAyQABAagBAVIAGCfQAAAEAAAEQAmCWgiDaQgCAMgCAMQgVB7gXBFQgMAjgMAaQgQAiACC6QAAAaABAcQACBkAFBgQAAARgBARIxEAOIAJjcQACgIgDgWQgLhWhek/QgDgKgDgJIhtlrQgCgGgCgHQhvljBXmRg");
	this.shape_880.setTransform(361.8,219.1);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#ECB77F").s().p("Am9ZpQACgIgDgWQgLhWhek/IgGgTIhtlrIgEgNQhvljBXmRQAbh9AshzIAmhbQARgtBQh/IBQh8IBVjaIAFgNQAXgYgihGIgHgPIgog/IgJgOQjVlzCUj9IAOgYQAzhNBQg4IAagRQA1ggApgOQAQgGAPgCQHMhSgoEKIgDAQQgRBWg1BdQgaAvgjAvIgUAdIgGAgIgEAhIA4BOIAWAeQAUAYALAYQAJATADASIABAEQAFAbgLAJQgHAFgfAGQgOACgRAFIgGACQgLgBAOAeIACAHQAEALABAIIABAIQABAGgCACQgIAIgHAGIgGAFIACAEIAJARIAKATIACAIQAAAHgDAFIgEAHIgNATIgJANIgCADQgKAEAFAVIAEAKQAHAPAKAOQAFAUg3AXIgQAGQgyAUgQAJIAgAGIEEA4IAMADIgMAnIgJAdIgSBEQgMASAIAhQAEARAGANIBmCXIBFBpQCEC7BDC4QAWA9AOA9IADAMQARBOACAyQABAagBAVIAGCfIAAAIQAmCWgiDaIgEAYQgVB7gXBFQgMAjgMAaQgQAiACC6IABA2QACBkAFBgIgBAiIxEAOg");
	this.shape_881.setTransform(361.8,219.1);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#373535").ss(2.5).p("Aq1A3QAbh9AshzIAmhbQARgtBQh/QAshFAkg3IBVjaQACgHADgGQAXgYgihGQgDgHgEgIIgog/QgFgHgEgHQjVlyCUj+QAHgMAHgMQAzhNBQg4QANgJANgIQA0ggAqgOQAQgGAPgCQHMhSgoEKQgCAIgBAIQgSBWg1BdQgaAvgiAuQgKAOgLAPQgDAQgDARQgCAPgCASIA4BOQALAPALAPQAUAYALAXQAJAUADASQABACAAABQAFAcgLAJQgHAFgfAGQgNACgSAFQgDABgDAAQgLgBAOAeQABAEABAEQAEALACAHQABAFgBAEQABAGgCACQgIAIgHAGIgGAEIACAEQAFAJAEAIQAFAKAFAKQACAEAAAEQABAGgDAFQgCADgDAFQgFAHgIALQgFAHgEAGQgBACgBACQgLADAGAVQABAFADAGQAGAPAKAOQAFATg4AYQgJADgHADQg0AUgQAJQASADAOADICIAZICCAeQAGABAFABQgGAUgGATQgEAPgFAPIgSBEQgNASAIAhQADARAHANIBlCYQAjA0AiA1QCEC7BDC3QAWA9AOA+QACAGABAGQAQBOADAyQABAZgCAVIAHCfQAAAEAAAEQAmCWghDaQgCAMgCANQgVB6gYBGQgLAjgNAaQgQAhADC7QAAAZABAcQACBlAFBgQAAARAAARIxFAOIAKjcQACgJgDgVQgMhXhdk+QgDgKgDgJIhtlrQgCgGgCgHQhvljBXmRg");
	this.shape_882.setTransform(361.7,219.1);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#ECB77F").s().p("Am8ZpQACgJgDgVQgMhXhdk+IgGgTIhtlrIgEgNQhvljBXmRQAbh9AshzIAmhbQARgtBQh/IBQh8IBVjaIAFgNQAXgYgihGIgHgPIgog/IgJgOQjVlyCUj+IAOgYQAzhNBQg4IAagRQA0ggAqgOQAQgGAPgCQHMhSgoEKIgDAQQgSBWg1BdQgaAvgiAuIgVAdIgGAhIgEAhIA4BOIAWAeQAUAYALAXQAJAUADASIABADQAFAcgLAJQgHAFgfAGQgNACgSAFIgGABQgLgBAOAeIACAIIAGASIAAAJQABAGgCACIgPAOIgGAEIACAEIAJARIAKAUQACAEAAAEQABAGgDAFIgFAIIgNASIgJANIgCAEQgLADAGAVIAEALQAGAPAKAOQAFATg4AYIgQAGQg0AUgQAJIAgAGICIAZICCAeIALACIgMAnIgJAeIgSBEQgNASAIAhQADARAHANIBlCYIBFBpQCEC7BDC3QAWA9AOA+IADAMQAQBOADAyQABAZgCAVIAHCfIAAAIQAmCWghDaIgEAZQgVB6gYBGQgLAjgNAaQgQAhADC7IABA1QACBlAFBgIAAAiIxFAOg");
	this.shape_883.setTransform(361.7,219.1);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#373535").ss(2.5).p("Aq0A3QAbh9AshzIAmhbQARgtBQh/QAshFAkg3IBVjaQACgGADgHQAXgYgihGQgDgHgEgIIgog/QgFgHgEgHQjVlyCUj+QAHgMAHgMQAzhMBQg5QAMgJANgIQA1ggAqgOQAQgGAOgCQHNhSgpEKQgBAIgCAIQgSBVg1BeQgaAugiAvQgKAOgLAPQgDAPgDARQgCAQgCARIA4BPQALAPALAPQATAYAMAXQAJAUADASQABACAAABQAFAcgLAIQgGAGgfAGQgOACgSAFQgDAAgDABQgLgCANAfQACAEABADQAEALACAIQABAFAAADQAAAGgCACQgHAIgIAGIgGAFIACAEQAFAJAEAIQAFAJAFAKQACAFABADQAAAHgDAFQgCADgDAEQgFAIgIALQgFAGgEAHQgBACgBABQgLAEAFAVQACAFADAGQAGAPAKAOQAEATg5AYQgJADgIADQg0AUgQAJQARADAPADIEOA1QAGABAGACQgHATgFAUQgFAPgEAOIgUBEQgNATAHAhQAEARAGANIBlCYQAjA1AiA1QCEC7BCC3QAXA9AOA+QABAGACAGQAQBNADAyQABAagCAVIAHCfQAAAEAAAEQAmCVggDbQgDAMgCAMQgUB7gYBFQgMAkgMAZQgQAhADC7QAAAaABAcQACBkAFBgQAAASAAARIxEAOIAKjcQACgJgDgVQgMhYhdk9QgDgKgDgKIhulqQgCgGgCgHQhuljBXmRg");
	this.shape_884.setTransform(361.6,219.1);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#ECB77F").s().p("Am7ZpQACgJgDgVQgMhYhdk9IgGgUIhulqIgEgNQhuljBXmRQAbh9AshzIAmhbQARgtBQh/IBQh8IBVjaIAFgNQAXgYgihGIgHgPIgog/IgJgOQjVlyCUj+IAOgYQAzhMBQg5IAZgRQA1ggAqgOQAQgGAOgCQHNhSgpEKIgDAQQgSBVg1BeQgaAugiAvIgVAdIgGAgIgEAhIA4BPIAWAeQATAYAMAXQAJAUADASIABADQAFAcgLAIQgGAGgfAGQgOACgSAFIgGABQgLgCANAfIADAHQAEALACAIIABAIQAAAGgCACQgHAIgIAGIgGAFIACAEIAJARIAKATIADAIQAAAHgDAFIgFAHIgNATIgJANIgCADQgLAEAFAVIAFALQAGAPAKAOQAEATg5AYIgRAGQg0AUgQAJIAgAGIEOA1IAMADIgMAnIgJAdIgUBEQgNATAHAhQAEARAGANIBlCYIBFBqQCEC7BCC3QAXA9AOA+IADAMQAQBNADAyQABAagCAVIAHCfIAAAIQAmCVggDbIgFAYQgUB7gYBFQgMAkgMAZQgQAhADC7IABA2QACBkAFBgIAAAjIxEAOg");
	this.shape_885.setTransform(361.6,219.1);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#373535").ss(2.5).p("Aq0A3QAbh9AshzIAnhbQARgtBPh/QAshFAkg3IBVjaQADgGACgHQAXgYghhGQgEgHgEgHIgohAQgEgHgFgHQjUlyCTj9QAHgMAIgMQAyhNBQg5QANgJANgIQA0ggAqgOQAQgGAOgCQHNhSgpEKQgBAIgCAIQgSBVg1BdQgaAvgiAvQgKAOgMAOQgDAQgDARQgCAQgCARIA4BOQALAPALAPQAUAYALAYQAJATAEASQAAACABACQAEAcgKAIQgGAGgfAGQgOACgSAEQgDABgEAAQgLgBAOAfQABAEACADQAEALABAIQACAFgBADQABAGgCACQgIAIgIAGIgGAFIACAEQAFAIAEAJQAGAJAFAKQACAEAAAEQABAHgDAFQgCADgDAEQgFAHgIAMQgFAGgEAHQgBABgBACQgLADAFAVQABAFADAGQAGAPAKAPQAEATg6AYQgJADgIADQg2AUgQAJQARADAPADIETA0QAGABAGABQgHAUgFATQgFAPgFAOIgUBFQgNATAHAhQADARAHANIBkCZQAiA1AiA1QCEC7BDC3QAWA9AOA9QACAGABAGQARBNACAzQACAagCAVIAHCeQAAAEAAAEQAmCWggDaQgCAMgDANQgUB6gYBGQgLAkgNAZQgQAgADC8QAAAZABAcQADBlAFBgQAAARAAASIxEAOIALjcQABgJgDgWQgMhXhck+QgDgJgDgKIhulqQgCgHgCgGQhvljBXmRg");
	this.shape_886.setTransform(361.5,219.1);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#ECB77F").s().p("Am6ZpQABgJgDgWQgMhXhck+IgGgTIhulqIgEgNQhvljBXmRQAbh9AshzIAnhbQARgtBPh/IBQh8IBVjaIAFgNQAXgYghhGIgIgOIgohAIgJgOQjUlyCTj9IAPgYQAyhNBQg5IAagRQA0ggAqgOQAQgGAOgCQHNhSgpEKIgDAQQgSBVg1BdQgaAvgiAvIgWAcIgGAhIgEAhIA4BOIAWAeQAUAYALAYQAJATAEASIABAEQAEAcgKAIQgGAGgfAGQgOACgSAEIgHABQgLgBAOAfIADAHQAEALABAIQACAFgBADQABAGgCACQgIAIgIAGIgGAFIACAEIAJARIALATIACAIQABAHgDAFIgFAHIgNATIgJANIgCADQgLADAFAVIAEALQAGAPAKAPQAEATg6AYIgRAGQg2AUgQAJIAgAGIETA0IAMACIgMAnIgKAdIgUBFQgNATAHAhQADARAHANIBkCZIBEBqQCEC7BDC3QAWA9AOA9IADAMQARBNACAzQACAagCAVIAHCeIAAAIQAmCWggDaIgFAZQgUB6gYBGQgLAkgNAZQgQAgADC8IABA1QADBlAFBgIAAAjIxEAOg");
	this.shape_887.setTransform(361.5,219.1);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#373535").ss(2.5).p("AqzA3QAbh9AshzIAnhaQAQguBQh/QAshFAkg3IBVjaQADgGACgHQAYgXgihHQgEgHgEgHIgohAQgEgHgFgHQjUlyCTj9QAHgMAHgMQAzhNBQg4QAMgJANgIQA1ghApgOQAQgFAPgDQHNhSgpEJQgCAIgBAIQgSBWg2BdQgaAvgiAuQgKAOgMAPQgDAQgCARQgDAQgCARIA4BOQALAPALAPQAUAYALAXQAJAUAEASQAAACABABQAFAcgKAJQgHAGgfAGQgOACgSAEQgDABgEAAQgLgCAOAfQABAEACAEQAEALACAHQABAFAAAEQAAAGgCACQgIAIgIAGIgGAEIACAEQAFAJAEAIQAGAKAFAJQACAFAAAEQABAGgDAFQgCADgDAFQgFAHgIALQgFAHgEAGQgBACgBABQgMAEAGAVQABAFADAGQAGAPAJAPQAEATg7AYQgJAEgIACQg3AVgRAJQARACAPADIEYAyQAGACAHABQgHATgGAUQgFAOgEAPIgWBFQgNATAHAhQADARAGANIBkCaQAiA0AiA1QCEC9BCC2QAXA9AOA9QABAGACAGQARBMACA0QACAZgCAVIAHCfQAAAEAAAEQAnCVghDbQgCAMgCAMQgVB7gXBGQgMAkgMAYQgQAgADC8QAAAaABAcQADBkAFBgQAAASABARIxEAPIALjdQABgIgDgWQgMhYhdk9QgDgJgDgKIhtlqQgCgHgCgGQhvljBXmRg");
	this.shape_888.setTransform(361.4,219.1);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#ECB77F").s().p("Am5ZoQABgIgDgWQgMhYhdk9IgGgTIhtlqIgEgNQhvljBXmRQAbh9AshzIAnhaQAQguBQh/IBQh8IBVjaIAFgNQAYgXgihHIgIgOIgohAIgJgOQjUlyCTj9IAOgYQAzhNBQg4IAZgRQA1ghApgOQAQgFAPgDQHNhSgpEJIgDAQQgSBWg2BdQgaAvgiAuIgWAdIgFAhIgFAhIA4BOIAWAeQAUAYALAXQAJAUAEASIABADQAFAcgKAJQgHAGgfAGIggAGIgHABQgLgCAOAfIADAIIAGASIABAJQAAAGgCACQgIAIgIAGIgGAEIACAEIAJARIALATQACAFAAAEQABAGgDAFIgFAIIgNASIgJANIgCADQgMAEAGAVQABAFADAGQAGAPAJAPQAEATg7AYIgRAGQg3AVgRAJIAgAFIEYAyIANADIgNAnIgJAdIgWBFQgNATAHAhQADARAGANIBkCaIBEBpQCEC9BCC2QAXA9AOA9IADAMQARBMACA0QACAZgCAVIAHCfIAAAIQAnCVghDbIgEAYQgVB7gXBGQgMAkgMAYQgQAgADC8IABA2QADBkAFBgIABAjIxEAPg");
	this.shape_889.setTransform(361.4,219.1);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#373535").ss(2.5).p("AqyA3QAbh9AshzIAnhaQAQguBQh/QAshFAkg3IBVjaQACgGADgHQAYgXgihHQgDgHgEgHIgphAQgEgHgEgHQjVlxCTj+QAHgMAHgMQAzhNBQg4QAMgJANgIQA1ghApgOQAQgFAPgDQHNhSgqEJQgBAIgCAIQgSBWg1BdQgaAugjAvQgKAOgLAPQgDAPgDARQgDAQgDASIA4BOQALAPALAPQAUAYAMAXQAJATAEASQAAACABACQAFAcgKAJQgGAGgfAFQgOADgTAEQgDAAgEABQgLgCAOAfQABAEABADQAFALACAIQABAFAAAEQABAFgDADQgIAIgIAFIgHAFIACAEQAFAIAFAJQAGAJAFAKQACAEABAEQAAAHgDAFQgCADgDAEQgFAIgIALQgFAGgEAHQgBABgBACQgMADAFAVQACAFACAGQAHAQAJAOQAEAUg9AYQgJAEgJADQg4AUgQAJQAQADAPACIEeAxQAGABAGABQgGAUgHATQgEAPgFAOIgWBFQgOATAGAiQAEARAGANIBjCaQAiA1AiA1QCEC9BCC1QAXA9AOA9QABAGACAGQARBMACA0QABAagBAVIAGCeQAAAEAAAEQAoCVggDbQgCANgCAMQgVB6gXBGQgMAlgMAYQgRAfAEC9QAAAZABAcQADBlAFBgQABASAAARIxDAPIALjdQABgJgDgVQgMhZhdk8QgDgKgDgJIhtlqQgCgHgCgGQhvljBXmRg");
	this.shape_890.setTransform(361.3,219.1);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#ECB77F").s().p("Am4ZoQABgJgDgVQgMhZhdk8IgGgTIhtlqIgEgNQhvljBXmRQAbh9AshzIAnhaQAQguBQh/IBQh8IBVjaIAFgNQAYgXgihHIgHgOIgphAIgIgOQjVlxCTj+IAOgYQAzhNBQg4IAZgRQA1ghApgOQAQgFAPgDQHNhSgqEJIgDAQQgSBWg1BdQgaAugjAvIgVAdIgGAgIgGAiIA4BOIAWAeQAUAYAMAXQAJATAEASIABAEQAFAcgKAJQgGAGgfAFIghAHIgHABQgLgCAOAfIACAHQAFALACAIQABAFAAAEQABAFgDADQgIAIgIAFIgHAFIACAEIAKARIALATIADAIQAAAHgDAFIgFAHIgNATIgJANIgCADQgMADAFAVIAEALQAHAQAJAOQAEAUg9AYIgSAHQg4AUgQAJIAfAFIEeAxIAMACIgNAnIgJAdIgWBFQgOATAGAiQAEARAGANIBjCaIBEBqQCEC9BCC1QAXA9AOA9IADAMQARBMACA0QABAagBAVIAGCeIAAAIQAoCVggDbIgEAZQgVB6gXBGQgMAlgMAYQgRAfAEC9IABA1QADBlAFBgIABAjIxDAPg");
	this.shape_891.setTransform(361.3,219.1);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#373535").ss(2.5).p("AqxA3QAbh9AshzIAnhaQAQgtBQiAQAshFAkg2IBVjbQACgGADgGQAYgYgihHQgDgHgEgHIgohAQgFgHgEgHQjVlxCTj+QAHgMAHgMQAzhNBPg4QANgJANgIQA0ghAqgOQAQgFAOgDQHOhSgqEJQgCAIgBAIQgTBWg1BdQgaAugjAvQgKAOgLAOQgDAQgDARQgDAQgDARIA4BOQALAPALAPQAUAYAMAYQAJATAEASQAAACABACQAFAcgKAJQgGAFgfAGQgOADgTADQgDABgEAAQgMgCAOAfQACAEABAEQAFALACAIQABAFAAADQABAGgDACQgIAIgIAGIgHAEIACAEQAFAJAFAJQAGAJAFAKQACAEABAEQAAAGgDAFQgBADgDAFQgFAHgJALQgFAHgEAHQgBABgBACQgMADAFAVQACAFACAGQAGAPAKAPQADAUg+AYQgJAEgJADQg5AUgRAJQAQADAQACIEiAwQAGABAHABQgHATgGAUQgFAOgFAPIgXBFQgOATAGAiQADARAGAOIBjCaQAiA1AiA1QCEC9BCC1QAWA9APA9QABAGACAGQAQBLADA1QABAZgCAWIAHCeQAAAEAAAEQAoCVggDbQgCAMgCANQgUB6gXBGQgMAlgNAXQgQAfAEC9QAAAaABAcQADBkAFBgQABASABASIxEAPIAMjdQABgJgDgWQgMhZhdk7QgDgKgDgJIhtlqQgCgHgCgGQhvlkBXmQg");
	this.shape_892.setTransform(361.2,219.1);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#ECB77F").s().p("Am3ZoQABgJgDgWQgMhZhdk7IgGgTIhtlqIgEgNQhvlkBXmQQAbh9AshzIAnhaQAQgtBQiAIBQh7IBVjbIAFgMQAYgYgihHIgHgOIgohAIgJgOQjVlxCTj+IAOgYQAzhNBPg4IAagRQA0ghAqgOQAQgFAOgDQHOhSgqEJIgDAQQgTBWg1BdQgaAugjAvIgVAcIgGAhIgGAhIA4BOIAWAeQAUAYAMAYQAJATAEASIABAEQAFAcgKAJQgGAFgfAGIghAGIgHABQgMgCAOAfIADAIQAFALACAIIABAIQABAGgDACQgIAIgIAGIgHAEIACAEIAKASIALATIADAIQAAAGgDAFIgEAIIgOASIgJAOIgCADQgMADAFAVIAEALQAGAPAKAPQADAUg+AYIgSAHQg5AUgRAJIAgAFIEiAwIANACIgNAnIgKAdIgXBFQgOATAGAiQADARAGAOIBjCaIBEBqQCEC9BCC1QAWA9APA9IADAMQAQBLADA1QABAZgCAWIAHCeIAAAIQAoCVggDbIgEAZQgUB6gXBGQgMAlgNAXQgQAfAEC9IABA2QADBkAFBgIACAkIxEAPg");
	this.shape_893.setTransform(361.2,219.1);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#373535").ss(2.5).p("AqwA3QAbh9AshzIAmhaQARgtBPiAQAshFAkg2IBVjaQADgHACgGQAYgYghhGQgEgHgEgIIgog/QgEgHgFgHQjUlyCSj9QAHgMAHgMQAzhNBQg5QAMgJANgIQA1ggApgPQAQgFAPgDQHNhSgqEJQgCAIgBAIQgTBWg1BcQgaAvgjAvQgKAOgMAOQgDAQgDARQgDAQgDARIA4BOQALAPALAPQAUAYAMAXQAJATAEATQABACAAABQAGAdgKAJQgGAFgfAGQgOADgTADQgEABgDAAQgMgDAOAgQABAEACAEQAFALACAIQABAFAAADQABAGgDACQgIAIgJAGIgHAEIACAEQAFAJAFAIQAGAKAGAJQACAFABAEQAAAGgDAFQgCADgDAFQgFAHgIALQgFAHgFAGQgBACgBABQgMADAFAWQACAFACAGQAHAPAJAPQADAUg/AYQgKAEgJADQg5AUgSAJQAQADAPACIEoAuQAGABAHABQgHAUgGATQgFAPgFAOIgYBGQgPATAGAiQAEARAGAOIBiCbQAhA1AiA1QCEC9BCC1QAXA9AOA9QABAGACAGQARBLACA1QACAZgCAVIAHCfQAAAEAAAEQAoCUggDcQgCAMgCAMQgUB6gXBHQgMAkgMAYQgRAeAEC+QAAAZABAcQADBlAGBgQABASABASIxDAPIALjdQACgJgDgWQgNhZhck8QgDgJgDgKIhulqQgCgGgCgHQhuljBXmQg");
	this.shape_894.setTransform(361.2,219.1);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#ECB77F").s().p("Am3ZoQACgJgDgWQgNhZhck8IgGgTIhulqIgEgNQhuljBXmQQAbh9AshzIAmhaQARgtBPiAIBQh7IBVjaIAFgNQAYgYghhGIgIgPIgog/IgJgOQjUlyCSj9IAOgYQAzhNBQg5IAZgRQA1ggApgPQAQgFAPgDQHNhSgqEJIgDAQQgTBWg1BcQgaAvgjAvIgWAcIgGAhIgGAhIA4BOIAWAeQAUAYAMAXQAJATAEATIABADQAGAdgKAJQgGAFgfAGIghAGIgHABQgMgDAOAgIADAIQAFALACAIQABAFAAADQABAGgDACQgIAIgJAGIgHAEIACAEIAKARIAMATIADAJQAAAGgDAFIgFAIIgNASIgKANIgCADQgMADAFAWIAEALQAHAPAJAPQADAUg/AYIgTAHQg5AUgSAJIAfAFIEoAuIANACIgNAnIgKAdIgYBGQgPATAGAiQAEARAGAOIBiCbIBDBqQCEC9BCC1QAXA9AOA9IADAMQARBLACA1QACAZgCAVIAHCfIAAAIQAoCUggDcIgEAYQgUB6gXBHQgMAkgMAYQgRAeAEC+IABA1QADBlAGBgIACAkIxDAPg");
	this.shape_895.setTransform(361.2,219.1);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#373535").ss(2.5).p("AkS76QhhA+g7BZQiqEEDeGDIAxBNQAsBTgbAaIhUDeQgnA6gqBDQhUCGgPApIgnBbQgtB1gbB/QhZGYB0FoIB0F9QByGGgIAtIgMDeIRDgPQgHhxgEh4QgHjwASgiQAlhDAfi5QAmjtgricIgHimQAHhEgdh3Qg5jtiyj/IilkFQgGgOgDgRQgGgiAPgTIAwiKIlZg0QAWgKBKgaQBAgYgDgUQgJgPgGgQQgMgfAPgEIAMgQQAOgSAEgIQAFgIgFgMIgYgoIAHgFQAJgFAIgIQAHgHgQgkQgPggANADQBEgKAKgIQAJgKgHggQgJgpgkgrIhOhsQAGgkAGgeQB9ifAeiNQA8kcncBVQgzAKhJAtg");
	this.shape_896.setTransform(361.1,219.1);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#ECB77F").s().p("Am2ZnQAIgthymGIh0l9Qh0loBZmYQAbh/Ath1IAnhbQAPgpBUiGQAqhDAng6IBUjeQAbgagshTIgxhNQjemDCqkEQA7hZBhg+QBJgtAzgKQHchVg8EcQgeCNh9CfIgMBCIBOBsQAkArAJApQAHAggJAKQgKAIhEAKQgNgDAPAgQAQAkgHAHQgIAIgJAFIgHAFIAYAoQAFAMgFAIQgEAIgOASIgMAQQgPAEAMAfQAGAQAJAPQADAUhAAYQhKAagWAKIFZA0IgwCKQgPATAGAiQADARAGAOIClEFQCyD/A5DtQAdB3gHBEIAHCmQArCcgmDtQgfC5glBDQgSAiAHDwQAEB4AHBxIxDAPg");
	this.shape_897.setTransform(361.1,219.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_459},{t:this.shape_458}]},82).to({state:[{t:this.shape_461},{t:this.shape_460}]},350).to({state:[{t:this.shape_463},{t:this.shape_462}]},1).to({state:[{t:this.shape_465},{t:this.shape_464}]},1).to({state:[{t:this.shape_467},{t:this.shape_466}]},1).to({state:[{t:this.shape_469},{t:this.shape_468}]},1).to({state:[{t:this.shape_471},{t:this.shape_470}]},1).to({state:[{t:this.shape_473},{t:this.shape_472}]},1).to({state:[{t:this.shape_475},{t:this.shape_474}]},1).to({state:[{t:this.shape_477},{t:this.shape_476}]},1).to({state:[{t:this.shape_479},{t:this.shape_478}]},1).to({state:[{t:this.shape_481},{t:this.shape_480}]},1).to({state:[{t:this.shape_483},{t:this.shape_482}]},1).to({state:[{t:this.shape_485},{t:this.shape_484}]},1).to({state:[{t:this.shape_487},{t:this.shape_486}]},1).to({state:[{t:this.shape_489},{t:this.shape_488}]},1).to({state:[{t:this.shape_491},{t:this.shape_490}]},1).to({state:[{t:this.shape_493},{t:this.shape_492}]},1).to({state:[{t:this.shape_495},{t:this.shape_494}]},1).to({state:[{t:this.shape_497},{t:this.shape_496}]},1).to({state:[{t:this.shape_499},{t:this.shape_498}]},1).to({state:[{t:this.shape_501},{t:this.shape_500}]},1).to({state:[{t:this.shape_503},{t:this.shape_502}]},1).to({state:[{t:this.shape_505},{t:this.shape_504}]},1).to({state:[{t:this.shape_507},{t:this.shape_506}]},1).to({state:[{t:this.shape_509},{t:this.shape_508}]},1).to({state:[{t:this.shape_511},{t:this.shape_510}]},1).to({state:[{t:this.shape_513},{t:this.shape_512}]},1).to({state:[{t:this.shape_515},{t:this.shape_514}]},1).to({state:[{t:this.shape_517},{t:this.shape_516}]},1).to({state:[{t:this.shape_519},{t:this.shape_518}]},1).to({state:[{t:this.shape_521},{t:this.shape_520}]},1).to({state:[{t:this.shape_523},{t:this.shape_522}]},1).to({state:[{t:this.shape_525},{t:this.shape_524}]},1).to({state:[{t:this.shape_527},{t:this.shape_526}]},1).to({state:[{t:this.shape_529},{t:this.shape_528}]},1).to({state:[{t:this.shape_531},{t:this.shape_530}]},1).to({state:[{t:this.shape_533},{t:this.shape_532}]},1).to({state:[{t:this.shape_535},{t:this.shape_534}]},1).to({state:[{t:this.shape_537},{t:this.shape_536}]},1).to({state:[{t:this.shape_539},{t:this.shape_538}]},1).to({state:[{t:this.shape_541},{t:this.shape_540}]},1).to({state:[{t:this.shape_543},{t:this.shape_542}]},1).to({state:[{t:this.shape_545},{t:this.shape_544}]},1).to({state:[{t:this.shape_547},{t:this.shape_546}]},1).to({state:[{t:this.shape_549},{t:this.shape_548}]},1).to({state:[{t:this.shape_551},{t:this.shape_550}]},1).to({state:[{t:this.shape_553},{t:this.shape_552}]},1).to({state:[{t:this.shape_555},{t:this.shape_554}]},1).to({state:[{t:this.shape_557},{t:this.shape_556}]},1).to({state:[{t:this.shape_559},{t:this.shape_558}]},1).to({state:[{t:this.shape_561},{t:this.shape_560}]},1).to({state:[{t:this.shape_563},{t:this.shape_562}]},1).to({state:[{t:this.shape_565},{t:this.shape_564}]},1).to({state:[{t:this.shape_567},{t:this.shape_566}]},1).to({state:[{t:this.shape_569},{t:this.shape_568}]},1).to({state:[{t:this.shape_571},{t:this.shape_570}]},1).to({state:[{t:this.shape_573},{t:this.shape_572}]},1).to({state:[{t:this.shape_575},{t:this.shape_574}]},1).to({state:[{t:this.shape_577},{t:this.shape_576}]},1).to({state:[{t:this.shape_579},{t:this.shape_578}]},1).to({state:[{t:this.shape_581},{t:this.shape_580}]},1).to({state:[{t:this.shape_583},{t:this.shape_582}]},1).to({state:[{t:this.shape_585},{t:this.shape_584}]},1).to({state:[{t:this.shape_587},{t:this.shape_586}]},1).to({state:[{t:this.shape_589},{t:this.shape_588}]},1).to({state:[{t:this.shape_591},{t:this.shape_590}]},1).to({state:[{t:this.shape_593},{t:this.shape_592}]},1).to({state:[{t:this.shape_595},{t:this.shape_594}]},1).to({state:[{t:this.shape_597},{t:this.shape_596}]},1).to({state:[{t:this.shape_599},{t:this.shape_598}]},1).to({state:[{t:this.shape_601},{t:this.shape_600}]},1).to({state:[{t:this.shape_603},{t:this.shape_602}]},1).to({state:[{t:this.shape_605},{t:this.shape_604}]},1).to({state:[{t:this.shape_607},{t:this.shape_606}]},1).to({state:[{t:this.shape_609},{t:this.shape_608}]},1).to({state:[{t:this.shape_611},{t:this.shape_610}]},1).to({state:[{t:this.shape_613},{t:this.shape_612}]},1).to({state:[{t:this.shape_615},{t:this.shape_614}]},1).to({state:[{t:this.shape_617},{t:this.shape_616}]},1).to({state:[{t:this.shape_619},{t:this.shape_618}]},1).to({state:[{t:this.shape_621},{t:this.shape_620}]},1).to({state:[{t:this.shape_623},{t:this.shape_622}]},1).to({state:[{t:this.shape_625},{t:this.shape_624}]},1).to({state:[{t:this.shape_627},{t:this.shape_626}]},1).to({state:[{t:this.shape_629},{t:this.shape_628}]},1).to({state:[{t:this.shape_631},{t:this.shape_630}]},1).to({state:[{t:this.shape_633},{t:this.shape_632}]},1).to({state:[{t:this.shape_635},{t:this.shape_634}]},1).to({state:[{t:this.shape_637},{t:this.shape_636}]},1).to({state:[{t:this.shape_639},{t:this.shape_638}]},1).to({state:[{t:this.shape_641},{t:this.shape_640}]},1).to({state:[{t:this.shape_643},{t:this.shape_642}]},1).to({state:[{t:this.shape_645},{t:this.shape_644}]},1).to({state:[{t:this.shape_647},{t:this.shape_646}]},1).to({state:[{t:this.shape_649},{t:this.shape_648}]},1).to({state:[{t:this.shape_651},{t:this.shape_650}]},1).to({state:[{t:this.shape_653},{t:this.shape_652}]},1).to({state:[{t:this.shape_655},{t:this.shape_654}]},1).to({state:[{t:this.shape_657},{t:this.shape_656}]},1).to({state:[{t:this.shape_659},{t:this.shape_658}]},1).to({state:[{t:this.shape_661},{t:this.shape_660}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_663},{t:this.shape_662}]},1).to({state:[{t:this.shape_665},{t:this.shape_664}]},1).to({state:[{t:this.shape_665},{t:this.shape_664}]},1).to({state:[{t:this.shape_665},{t:this.shape_664}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_665},{t:this.shape_666}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_674},{t:this.shape_675}]},1).to({state:[{t:this.shape_674},{t:this.shape_675}]},1).to({state:[{t:this.shape_674},{t:this.shape_675}]},1).to({state:[{t:this.shape_674},{t:this.shape_675}]},1).to({state:[{t:this.shape_674},{t:this.shape_675}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_679},{t:this.shape_678}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_681},{t:this.shape_680}]},1).to({state:[{t:this.shape_683},{t:this.shape_682}]},1).to({state:[{t:this.shape_683},{t:this.shape_682}]},1).to({state:[{t:this.shape_683},{t:this.shape_682}]},1).to({state:[{t:this.shape_683},{t:this.shape_682}]},1).to({state:[{t:this.shape_683},{t:this.shape_682}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_685},{t:this.shape_684}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_687},{t:this.shape_686}]},1).to({state:[{t:this.shape_689},{t:this.shape_688}]},1).to({state:[{t:this.shape_689},{t:this.shape_688}]},1).to({state:[{t:this.shape_689},{t:this.shape_688}]},1).to({state:[{t:this.shape_689},{t:this.shape_688}]},1).to({state:[{t:this.shape_689},{t:this.shape_688}]},1).to({state:[{t:this.shape_689},{t:this.shape_688}]},1).to({state:[{t:this.shape_689},{t:this.shape_688}]},1).to({state:[{t:this.shape_689},{t:this.shape_688}]},1).to({state:[{t:this.shape_689},{t:this.shape_688}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_691},{t:this.shape_690}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_693},{t:this.shape_692}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_697},{t:this.shape_696}]},1).to({state:[{t:this.shape_699},{t:this.shape_698}]},1).to({state:[{t:this.shape_701},{t:this.shape_700}]},1).to({state:[{t:this.shape_703},{t:this.shape_702}]},1).to({state:[{t:this.shape_705},{t:this.shape_704}]},1).to({state:[{t:this.shape_707},{t:this.shape_706}]},1).to({state:[{t:this.shape_709},{t:this.shape_708}]},1).to({state:[{t:this.shape_711},{t:this.shape_710}]},1).to({state:[{t:this.shape_713},{t:this.shape_712}]},1).to({state:[{t:this.shape_715},{t:this.shape_714}]},1).to({state:[{t:this.shape_717},{t:this.shape_716}]},1).to({state:[{t:this.shape_719},{t:this.shape_718}]},1).to({state:[{t:this.shape_721},{t:this.shape_720}]},1).to({state:[{t:this.shape_723},{t:this.shape_722}]},1).to({state:[{t:this.shape_725},{t:this.shape_724}]},1).to({state:[{t:this.shape_727},{t:this.shape_726}]},1).to({state:[{t:this.shape_729},{t:this.shape_728}]},1).to({state:[{t:this.shape_731},{t:this.shape_730}]},1).to({state:[{t:this.shape_733},{t:this.shape_732}]},1).to({state:[{t:this.shape_735},{t:this.shape_734}]},1).to({state:[{t:this.shape_737},{t:this.shape_736}]},1).to({state:[{t:this.shape_739},{t:this.shape_738}]},1).to({state:[{t:this.shape_741},{t:this.shape_740}]},1).to({state:[{t:this.shape_743},{t:this.shape_742}]},1).to({state:[{t:this.shape_745},{t:this.shape_744}]},1).to({state:[{t:this.shape_747},{t:this.shape_746}]},1).to({state:[{t:this.shape_749},{t:this.shape_748}]},1).to({state:[{t:this.shape_751},{t:this.shape_750}]},1).to({state:[{t:this.shape_753},{t:this.shape_752}]},1).to({state:[{t:this.shape_755},{t:this.shape_754}]},1).to({state:[{t:this.shape_757},{t:this.shape_756}]},1).to({state:[{t:this.shape_759},{t:this.shape_758}]},1).to({state:[{t:this.shape_761},{t:this.shape_760}]},1).to({state:[{t:this.shape_763},{t:this.shape_762}]},1).to({state:[{t:this.shape_765},{t:this.shape_764}]},1).to({state:[{t:this.shape_767},{t:this.shape_766}]},1).to({state:[{t:this.shape_769},{t:this.shape_768}]},1).to({state:[{t:this.shape_771},{t:this.shape_770}]},1).to({state:[{t:this.shape_773},{t:this.shape_772}]},1).to({state:[{t:this.shape_775},{t:this.shape_774}]},1).to({state:[{t:this.shape_777},{t:this.shape_776}]},1).to({state:[{t:this.shape_779},{t:this.shape_778}]},1).to({state:[{t:this.shape_781},{t:this.shape_780}]},1).to({state:[{t:this.shape_783},{t:this.shape_782}]},1).to({state:[{t:this.shape_785},{t:this.shape_784}]},1).to({state:[{t:this.shape_787},{t:this.shape_786}]},1).to({state:[{t:this.shape_789},{t:this.shape_788}]},1).to({state:[{t:this.shape_791},{t:this.shape_790}]},1).to({state:[{t:this.shape_793},{t:this.shape_792}]},1).to({state:[{t:this.shape_795},{t:this.shape_794}]},1).to({state:[{t:this.shape_797},{t:this.shape_796}]},1).to({state:[{t:this.shape_799},{t:this.shape_798}]},1).to({state:[{t:this.shape_801},{t:this.shape_800}]},1).to({state:[{t:this.shape_803},{t:this.shape_802}]},1).to({state:[{t:this.shape_805},{t:this.shape_804}]},1).to({state:[{t:this.shape_807},{t:this.shape_806}]},1).to({state:[{t:this.shape_809},{t:this.shape_808}]},1).to({state:[{t:this.shape_811},{t:this.shape_810}]},1).to({state:[{t:this.shape_813},{t:this.shape_812}]},1).to({state:[{t:this.shape_815},{t:this.shape_814}]},1).to({state:[{t:this.shape_817},{t:this.shape_816}]},1).to({state:[{t:this.shape_819},{t:this.shape_818}]},1).to({state:[{t:this.shape_821},{t:this.shape_820}]},1).to({state:[{t:this.shape_823},{t:this.shape_822}]},1).to({state:[{t:this.shape_825},{t:this.shape_824}]},1).to({state:[{t:this.shape_827},{t:this.shape_826}]},1).to({state:[{t:this.shape_829},{t:this.shape_828}]},1).to({state:[{t:this.shape_831},{t:this.shape_830}]},1).to({state:[{t:this.shape_833},{t:this.shape_832}]},1).to({state:[{t:this.shape_835},{t:this.shape_834}]},1).to({state:[{t:this.shape_837},{t:this.shape_836}]},1).to({state:[{t:this.shape_839},{t:this.shape_838}]},1).to({state:[{t:this.shape_841},{t:this.shape_840}]},1).to({state:[{t:this.shape_843},{t:this.shape_842}]},1).to({state:[{t:this.shape_845},{t:this.shape_844}]},1).to({state:[{t:this.shape_847},{t:this.shape_846}]},1).to({state:[{t:this.shape_849},{t:this.shape_848}]},1).to({state:[{t:this.shape_851},{t:this.shape_850}]},1).to({state:[{t:this.shape_853},{t:this.shape_852}]},1).to({state:[{t:this.shape_855},{t:this.shape_854}]},1).to({state:[{t:this.shape_857},{t:this.shape_856}]},1).to({state:[{t:this.shape_859},{t:this.shape_858}]},1).to({state:[{t:this.shape_861},{t:this.shape_860}]},1).to({state:[{t:this.shape_863},{t:this.shape_862}]},1).to({state:[{t:this.shape_865},{t:this.shape_864}]},1).to({state:[{t:this.shape_867},{t:this.shape_866}]},1).to({state:[{t:this.shape_869},{t:this.shape_868}]},1).to({state:[{t:this.shape_871},{t:this.shape_870}]},1).to({state:[{t:this.shape_873},{t:this.shape_872}]},1).to({state:[{t:this.shape_875},{t:this.shape_874}]},1).to({state:[{t:this.shape_877},{t:this.shape_876}]},1).to({state:[{t:this.shape_879},{t:this.shape_878}]},1).to({state:[{t:this.shape_881},{t:this.shape_880}]},1).to({state:[{t:this.shape_883},{t:this.shape_882}]},1).to({state:[{t:this.shape_885},{t:this.shape_884}]},1).to({state:[{t:this.shape_887},{t:this.shape_886}]},1).to({state:[{t:this.shape_889},{t:this.shape_888}]},1).to({state:[{t:this.shape_891},{t:this.shape_890}]},1).to({state:[{t:this.shape_893},{t:this.shape_892}]},1).to({state:[{t:this.shape_895},{t:this.shape_894}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(332.2,376,436.6,46.9);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/inhale_p01_titlewav.mp3?1483713504580", id:"inhale_p01_titlewav"},
		{src:"sounds/inhale_p02_soHowExactlywav.mp3?1483713504580", id:"inhale_p02_soHowExactlywav"},
		{src:"sounds/inhale_p03_aDifferencewav.mp3?1483713504580", id:"inhale_p03_aDifferencewav"},
		{src:"sounds/inhale_p04_yourRibCagewav.mp3?1483713504580", id:"inhale_p04_yourRibCagewav"},
		{src:"sounds/inhale_p05_yourDiaphragmwav.mp3?1483713504580", id:"inhale_p05_yourDiaphragmwav"},
		{src:"sounds/inhale_p06_toPushCarbonwav.mp3?1483713504580", id:"inhale_p06_toPushCarbonwav"},
		{src:"sounds/inhale_p07_theResultwav.mp3?1483713504580", id:"inhale_p07_theResultwav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;