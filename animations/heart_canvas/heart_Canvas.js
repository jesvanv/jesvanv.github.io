(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"heart_Canvas_atlas_", frames: [[0,1507,950,1482],[350,2991,336,189],[0,0,1056,1505],[0,2991,348,613]]}
];


// symbols:



(lib.BLUES = function() {
	this.spriteSheet = ss["heart_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["heart_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer5 = function() {
	this.spriteSheet = ss["heart_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.leftchambers = function() {
	this.spriteSheet = ss["heart_Canvas_atlas_"];
	this.gotoAndStop(3);
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


(lib.heart = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{firstStage:1,toVentricles:62,ventricleSqueeze:106,relax:155});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_61 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_105 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_154 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_205 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(61).call(this.frame_61).wait(44).call(this.frame_105).wait(49).call(this.frame_154).wait(51).call(this.frame_205).wait(1));

	// right atrium valve 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB69F").s().p("AnFBJQCyiXDghBQC5g7CwA0QEXCpkGBgQiwgriYAkQhPATg4Awg");
	this.shape.setTransform(644.3,1138.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB69F").s().p("AnHAnQDAiNDkguQDBgpCqBGQEFDEkPBFQiqg/ibAXQhQAOg6Asg");
	this.shape_1.setTransform(644.9,1140.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB69F").s().p("AgMBeQhPAIg/AoIksiRQDMiEDogaQDHgVCjBWQDvDdkUAqQijhSicAJg");
	this.shape_2.setTransform(645.2,1144);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB69F").s().p("AgQBMQhQAChAAjIkhilQDYh4DogHQDMgBCZBmQDYD0kXAOQiZhkicgEg");
	this.shape_3.setTransform(645.3,1147.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB69F").s().p("AEVDCQiOh1ibgRQhOgEhDAfIkVi5QDkhsDmANQDPAUCPB1QC1D7j0AAIgagBg");
	this.shape_4.setTransform(645.2,1151.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB69F").s().p("AEDDQQiAiGiZgeQhOgIhFAaIkHjNQDvhdDkAgQDPApCDCCQCND2i/AAQgdAAgjgFg");
	this.shape_5.setTransform(644.9,1155);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFB69F").s().p("ADvDdQhyiUiVgrQhNgOhGAVIj4jeQD4hPDhA0QDNA+B1CPQBsDxieAAQgkAAgzgNg");
	this.shape_6.setTransform(644.4,1158.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFB69F").s().p("ADZDpQhiihiQg3QhLgShIAPIjojvQECg/DbBHQDJBTBmCZQBPDsiHAAQgpAAg+gWg");
	this.shape_7.setTransform(643.6,1161.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFB69F").s().p("AC/D0QhOiriMhEQhIgXhJAMIjWkAQEJgtDUBZQDDBoBVChQA1Dnh2AAQgtAAhGgig");
	this.shape_8.setTransform(642.8,1164.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFB69F").s().p("AClEAQg8i1iFhOQhGgchKAGIjEkOQERgcDLBrQC6B8BFCqQAcDfhpAAQgvAAhKgtg");
	this.shape_9.setTransform(641.8,1167);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFB69F").s().p("ACGELQgoi7h9hZQhEgghJAAIixkbQEXgJDAB8QCwCPA0CwQAFDXhgAAQgxAAhMg6g");
	this.shape_10.setTransform(640.9,1169.2);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFB69F").s().p("AC3D4QhJiuiJhIQhIgYhJAKIjQkFQEMgoDRBfQDABvBQCkQAsDlhxAAQguAAhHgmg");
	this.shape_11.setTransform(642.5,1165.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFB69F").s().p("ADgDlQhmiciTg0QhLgRhHASIjujqQD/hEDdBBQDLBMBqCVQBZDuiOAAQgoAAg7gTg");
	this.shape_12.setTransform(643.9,1160.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFB69F").s().p("AgSBHQhOAAhCAiIkditQDchzDngBQDOAGCWBrQDPD7kXAFQiWhricgHg");
	this.shape_13.setTransform(645.3,1149.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFB69F").s().p("AgKBlQhQAKg9ApIkviLQDIiGDmghQDGgcClBQQD3DWkTAzQimhMibAOg");
	this.shape_14.setTransform(645.1,1142.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(61).to({_off:true},1).wait(43).to({_off:false},0).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(71).to({_off:false},0).wait(28).to({_off:true},1).wait(106));

	// left atrium valve 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFB69F").s().p("AoFMVQg9i2AzihIARgtQBEkjEejnQAvgqAQgtQAEgmAxhQQCaj0A8iBQAwhjAbidICSgJQD0ByiIDwQhRB2hmBUQhxBIhLBrQgaAzgcBIQgZBSgxAxQj6D9g3DyQgVBsAMBaQBPDsiGALQhlgVgzibg");
	this.shape_15.setTransform(724.3,1066.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB69F").s().p("AnhMpQhLixApilQAGgXAIgWQA0knESj3QAsgtASguQAGgpAxhQQCYj2A7iAQAvhkAaidICTgKQD0BwiGDxQhQB2hnBVQhwBIhKBtQgZAygbBIQgXBQguAyQjuELgpD1QgMBsATBZQBgDliFAUQhngNg+iYg");
	this.shape_16.setTransform(726.5,1067.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFB69F").s().p("Am7M8QhYitAeilQAEgZAHgWQAlkrEDkGQArgwATgwQAIgrAwhQQCXj2A6iBQAuhlAZicICTgMQD1BviFDyQhPB3hmBUQhwBKhJBsQgdCShWBrQjhEVgZD4QgEBsAZBYQBwDdiDAeQhogGhJiUg");
	this.shape_17.setTransform(728.5,1067.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFB69F").s().p("AmUNOQhlinATinQADgYAGgYQAVktD1kTQAogzAUgzQAKgtAwhRQCVj3A5iBQAuhlAYidICSgMQD2BtiDDzQhPB3hlBWQhvBKhJBtQgdCMhQBvQjUEhgJD4QAEBrAfBWQCBDUiBAoIgCAAQhnAAhUiNg");
	this.shape_18.setTransform(730.6,1068.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFB69F").s().p("AlrNeQhxifAIipQACgYADgXQAFkwDmkgQAmg2AVg1QALgvAvhRQCUj4A5iCQAthlAXidICSgNQD2BriBD0QhOB4hkBWQhvBLhIBtQgeCHhJB0QjIEqAID4QAMBqAlBTQCQDLh9AxIgNAAQhiAAhZiAg");
	this.shape_19.setTransform(732.6,1068.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFB69F").s().p("AlBNtQh9iXgDipQAAgZADgXQgMkxDWksQAYhRBdiiQCSj5A4iCQAshlAWidICSgPQD3Bqh/D1QhNB4hkBXQhvBLhHBuQgeCChEB3Qi4E0AWD4QAUBoAsBQQCdC/h4A6QgMACgLAAQhdAAhehzg");
	this.shape_20.setTransform(734.5,1068.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFB69F").s().p("AkUN5QiJiOgNioQgCgZABgXQgckxDFk3QAYhYBcijQCQj6A3iDQAshmAVidICSgPQD3Bph9D1QhNB5hjBXQhuBMhHBvQgfB7g9B8QipE+AmD1QAbBlAyBMQCqC0hzBDQgRAEgRAAQhYAAhghng");
	this.shape_21.setTransform(736.3,1068.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFB69F").s().p("AjmOEQiUiEgYinQgEgYAAgYQgskwCzlBQAYhgBbijQCQj7A1iDQArhmAUidICSgRQD4Bnh8D3QhMB5hjBYQhtBNhGBuQghB3g2B/QiaFGA2DyQAiBiA3BJQC3CmhuBLQgWAHgWAAQhUAAhhhag");
	this.shape_22.setTransform(738,1068.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFB69F").s().p("Ai3ONQieh6giikIgHgwQg8kuChlMQAWhmBaikQCPj8A0iDQAqhmATieICSgRQD5Blh7D3QhLB6hiBZQhtBNhFBvQgiBzgvCAQiLFPBFDtQApBfA8BEQDDCZhpBTQgbAKgcAAQhPAAhhhNg");
	this.shape_23.setTransform(739.6,1068.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFB69F").s().p("AiHOUQinhugtiiQgHgYgDgXQhNksCPlUQAWhuBYikQCNj9A0iDQAphnASidICSgTQD5Bkh5D4QhKB6hiBZQhsBPhDBvQgmBtgoCEQh7FVBUDpQAxBbBBA/QDNCKhjBbQgfAOgkAAQhKAAhfhBg");
	this.shape_24.setTransform(741.1,1067.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFB69F").s().p("AhWOZQiwhjg3ieQgIgXgFgXQhdkpB8lbQAUh1BXilQCMj+AziEQAohmARieICSgTQD6Bih4D5QhJB6hhBaQhsBPhDBwQgoBpggCFQhqFcBiDjQA3BVBEA7QDYB7hdBhQgjAUgrAAQhHAAhag1g");
	this.shape_25.setTransform(742.5,1067);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFB69F").s().p("AinOQQihh3gmijQgFgYgDgYQhCktCblPQAXhpBZikQCOj8A0iDQAqhnATidICSgSQD5Blh6D4QhLB5hiBZQhtBOhFBvQgjBxgtCBQiGFSBLDrQAsBdA+BEQDGCThoBWQgcAMgfAAQhNAAhghJg");
	this.shape_26.setTransform(740.1,1068.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFB69F").s().p("Aj2OBQiQiIgUinQgDgYAAgYQgnkxC5k+QAYhdBbijQCRj6A1iDQArhmAVidICSgRQD4Boh9D2QhMB5hjBYQhuBMhGBvQgfB5g5B9QigFEAxDzQAgBjA1BKQCzCrhwBIQgUAGgVAAQhVAAhhheg");
	this.shape_27.setTransform(737.5,1068.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFB69F").s().p("AmGNUQhpikAPipQADgYAFgXQAPkuDwkYQAog0AUgzQALguAvhRQCVj3A5iCQAthkAYidICSgNQD2BsiCD0QhPB3hlBWQhvBKhIBtQgdCKhOBxQjQEkgED5QAHBrAiBUQCFDRh/ArIgGAAQhmAAhViIg");
	this.shape_28.setTransform(731.2,1068.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFB69F").s().p("AnIM2QhUiuAiimQAFgYAHgWQAqkqEJkBQArgvATgwQAHgpAwhRQCYj1A6iCQAuhkAaicICSgMQD1BwiFDyQhQB2hlBVQhwBJhKBsQgdCUhYBpQjmESgeD2QgHBsAXBZQBrDfiDAcQhogJhGiVg");
	this.shape_29.setTransform(727.8,1067.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(61).to({_off:true},1).wait(43).to({_off:false},0).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(71).to({_off:false},0).wait(28).to({_off:true},1).wait(106));

	// right atrium valve 2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFB69F").s().p("AnDESQAWisBoiAQCTi1DQh0QB1hHEEg+IAAAAQA3BfACBiIh7DiQg+Aqg/AYQgcAKgcAIQgkAJgkAMQgniCk0F5Qh2COgyAAQg4AAAgi3g");
	this.shape_30.setTransform(1194.6,984.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFB69F").s().p("Am1ErQAGitBdiJQCDjBDVh/QBzhMEBhHIAAAAQA6BdAGBiIhyDmQg9Aug+AZQgcALgbAIIhHAYQgwiIkSGSQhsCcgxAAQg1AAAQi0g");
	this.shape_31.setTransform(1196.7,986);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFB69F").s().p("AmkFDQgHiuBQiQQBxjLDbiMQBvhQD+hRIAAABQA+BaAJBiIhpDqQg7Awg9AcQgcAMgbAJIhGAbQg5iOjtGoQhhCqgxAAQgyAAgBixg");
	this.shape_32.setTransform(1198.6,987.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFB69F").s().p("AmMFaQgXisBDiXQBfjUDfiZQBshUD7hbIAAAAQBBBYANBiIhgDuQg6Ayg7AfQgbAMgbALQgiAMgjARQhDiUjIG8QhTC2gyAAQgvAAgQisg");
	this.shape_33.setTransform(1200.3,989.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFB69F").s().p("AlxFxQgmiqA2icQBMjcDiioQBohYD4hkIAAABQBEBVARBhIhXDyQg4A0g6AhQgbAOgaALQgiANgiASQhOiYigHMQhFDBgyAAQguAAgeilg");
	this.shape_34.setTransform(1201.8,990.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFB69F").s().p("AlSGFQg2ilApihQA4jhDki3QBlhcD0htIAAAAQBHBTAVBgIhPD1Qg1A2g5AjQgbAQgZAMQghAPgiASQhaibh3HYQg1DKgzAAQgsAAgrieg");
	this.shape_35.setTransform(1203.3,991.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFB69F").s().p("AkxGZQhDigAaikQAkjlDljIQBihfDvh2IAAAAQBKBQAYBgIhFD3QgzA5g4AkQgZARgaANQggAQghAUQhmiehOHhQgkDSg0AAQgrAAg4iVg");
	this.shape_36.setTransform(1204.6,992.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFB69F").s().p("AkMGrQhRiaALimQAQjnDkjYQBfhjDqh/IABAAQBNBNAbBfIg8D5QgwA7g3AnQgZASgZAOQgfAQghAWQhzifgkHlQgRDag2AAQgrAAhCiMg");
	this.shape_37.setTransform(1205.8,993.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFB69F").s().p("AjlG7QheiSgDimQgEjoDhjpQBchnDliHIAAAAQBQBKAfBdIgyD8QgvA8g1AqQgYASgZAPIg+AoQgpg2glBJQgvBBADD0QACDfg4AAQgqAAhNiCg");
	this.shape_38.setTransform(1206.8,993.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFB69F").s().p("Ai7HKQhriJgSilQgYjnDej7QBYhpDfiRIABAAQBSBIAjBbIgpD+QgsA+g0ArQgXATgYAQQgeATgfAYQgrg1ghBIQgqBBAZDyQAWDjg7AAQgqAAhVh3g");
	this.shape_39.setTransform(1207.8,993.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFB69F").s().p("AiQHWQh3h/gfiiQgtjkDZkNQBUhtDaiZIAAAAQBWBFAlBaIgfD/QgqA/gyAuIguAkIg7AtQgvgzgbBHQglBAAtDvQAqDmg9AAQgqAAhchtg");
	this.shape_40.setTransform(1208.6,994);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFB69F").s().p("AjXHAQhiiPgIilQgLjoDgjvQBbhpDjiKIAAAAQBRBKAgBcIgvD9QguA8g1ArQgYASgYAQQgeASgfAXQgqg2gkBIQguBCALDzQAIDhg4AAQgrAAhPh/g");
	this.shape_41.setTransform(1207.1,993.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFB69F").s().p("AkYGlQhNicAQilQAXjnDkjSQBghiDsh8IAAAAQBNBOAaBfIg/D5QgyA5g3AnQgZARgZAOIhAAlQhviegyHkQgXDXg1AAQgsAAg+iPg");
	this.shape_42.setTransform(1205.4,993);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFB69F").s().p("AmDFiQgdisA/iYQBZjXDgieQBrhVD6heIAAAAQBCBYAOBgIhdDwQg5Ayg7AgIg2AXQgiAOgiARQhHiWi7HCQhPC5gxAAQgvAAgUipg");
	this.shape_43.setTransform(1200.8,989.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFB69F").s().p("AmqE7QgDitBUiOQB3jIDZiIQBxhOD/hOIAAAAQA8BcAJBhIhtDpQg7Awg+AaQgcAMgbAJIhGAaQg2iNj6GiQhkClgxAAQgzAAAFiyg");
	this.shape_44.setTransform(1198,987.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(61).to({_off:true},1).wait(43).to({_off:false},0).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(71).to({_off:false},0).wait(28).to({_off:true},1).wait(106));

	// right atrium valve 1
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFB69F").s().p("ADlGhQgRhAgCgZQgHgvgph2QguiMg2hLQADgLgXgVQhPg/hRgXQhbgZgZAaIgHAPIhwhtIg2hsIAghMIDlAtQCqAmAwAcQBNAiA5BBQBgCOApCjQAuCIANBfQAcBihbArQgcAIgWAAQgrAAgRgfg");
	this.shape_45.setTransform(1110.4,1000.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFB69F").s().p("ADPGuQgOhBgBgZQgEgwgjh3QgniOgxhOQADgLgWgWQhMhDhPgbQhagdgaAZIgIAOIhrhzIgxhtIAkhLIDjA4QCoAvAuAeQBMAmA2BEQBZCTAfCkQAoCLAIBgQAWBihdAnQgYAFgTAAQgxAAgQgig");
	this.shape_46.setTransform(1108.7,1002.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFB69F").s().p("AC4G5QgLhBAAgZQgBgwgdh5QggiQgthRQAFgLgWgWQhIhHhOgfQhZgigaAYIgJAOIhlh3IgrhwIAnhJIDfBDQCmA2AtAhQBJApAzBHQBRCYAXClQAhCNADBgQARBkhfAhQgUAEgQAAQg3AAgPgmg");
	this.shape_47.setTransform(1107,1003.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFB69F").s().p("ACgHDQgIhCACgZQABgwgXh6QgXiSgphSQAFgKgUgYQhFhLhMgiQhXgmgcAWIgJAOQgvg/gwg9IgmhyIArhHIDcBOQCiA+AsAjQBIAtAuBJQBKCcAOCnQAZCOgCBgQAMBkhhAdIgaACQg/AAgPgqg");
	this.shape_48.setTransform(1105.2,1004.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFB69F").s().p("ACGHMQgEhCAEgZQADgwgQh7QgQiTglhUQAGgKgSgZQhBhOhLgmQhVgqgdAVIgKANIhZiAIggh0IAuhFIDYBZQCfBGAqAlQBGAxArBLQBBCgAGCnQARCPgHBgQAGBlhiAXIgPABQhJAAgOgug");
	this.shape_49.setTransform(1103.4,1005.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFB69F").s().p("ABrHTQgBhCAFgZQAGgvgKh8QgIiTgghXQAGgKgRgZQg9hRhJgpQhTgvgeAUIgKANIhTiFIgah1IAxhDIDTBjQCcBOAoAoQBEA0AnBNQA4CjgDCnQAKCQgMBfQABBlhjATQhXAAgMgzg");
	this.shape_50.setTransform(1101.8,1006.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFB69F").s().p("ABNHZQAChCAGgYQAIgwgDh8QAAiTgchZQAIgIgRgcQg4hThHgtQhRgygfATIgLALQglhFgnhDIgUh3IA0g/IDOBtQCYBWAmApQBBA2AjBQQAxCkgMCpQACCQgRBeQgEBlhkANQhXgEgJgzg");
	this.shape_51.setTransform(1100.4,1007.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFB69F").s().p("AAqHdQAGhBAIgZQALguADh9QAHiTgXhZQAIgIgPgcQg0hXhFgwQhOg2ggARIgLAMQgihIgjhFIgPh3IA3g9IDJB3QCTBdAkArQA/A6AfBRQAoCogVCmQgFCRgWBdQgKBlhkAIQhXgJgHg0g");
	this.shape_52.setTransform(1099.3,1008.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFB69F").s().p("AAHHhQAJhCAJgXQANguAKh9QAPiSgShbQAIgIgNgcQgwhYhCg0QhMg5ggAPIgNALQgdhJghhHIgJh4IA7g6IDCCAQCPBlAiAsQA7A+AbBTQAgCpgeClQgNCQgaBcQgPBkhlADQhWgOgEgzg");
	this.shape_53.setTransform(1098.3,1009);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFB69F").s().p("AA5IpQhUgSgCg0QANhBAKgXQAPguAQh7QAWiRgNhcQAJgHgMgdQgshbg/g3QhJg9ghAOIgNAKQgahKgdhIIgDh4IA9g4IC8CKQCKBsAgAtQA4BBAXBUQAXCrgnCjQgUCPgfBbQgUBhhgAAIgFAAg");
	this.shape_54.setTransform(1097.4,1009.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFB69F").s().p("AARItQiAgNBJiUQASgsAWh7QAeiQgJhcQAKgGgLgeQgnhdg8g6QhGhAgiAMIgNAKIgwiVIADh4IBAg0IC0CSQCFByAdAwQA2BDASBVQAOCsgvChQgbCOgkBZQgYBbhYAAIgOgBg");
	this.shape_55.setTransform(1096.4,1010.1);
	this.shape_55._off = true;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFB69F").s().p("AgEHhQAKhBAIgXQAPguAMh8QARiSgRhbQAJgIgNgcQguhahBg0QhLg7ghAPIgMALQgdhJgfhIIgHh4IA7g5IDBCDQCNBnAhAtQA6A/AaBTQAcCpggClQgPCQgdBcQgQBkhlAAQhVgPgDg0g");
	this.shape_56.setTransform(1098,1009.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFB69F").s().p("AA2HcQAFhBAHgZQAKgvABh9QAEiSgYhZQAIgKgPgaQg2hWhFgvQhQg0gfAQIgLANIhIiMIgRh3IA3g+IDKB0QCVBaAlArQA/A5AhBRQAqCmgRCnQgDCQgUBfQgIBlhkAJQhXgHgIg0g");
	this.shape_57.setTransform(1099.7,1008);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFB69F").s().p("ACYHGQgHhBACgZQACgwgUh7QgViSgohTQAGgLgUgYQhDhLhMgkQhXgngcAWIgJANIhdh+IgkhyIAshGIDaBRQCiBCArAjQBHAuAuBKQBGCdALCnQAXCOgEBgQAKBlhhAbIgXABQhCAAgOgrg");
	this.shape_58.setTransform(1104.6,1004.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFB69F").s().p("AC/G2QgMhBAAgZQgCgwgfh5QgiiPgvhQQAEgLgVgWQhKhFhOgeQhZghgbAZIgIAOIhnh2IgthvIAmhKIDgA/QCnA1AuAgQBJAoA1BFQBTCXAaCkQAjCMAFBhQASBjheAjQgVAEgRAAQg1AAgQgkg");
	this.shape_59.setTransform(1107.6,1002.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45}]}).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(61).to({_off:true},1).wait(43).to({_off:false},0).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(71).to({_off:false},0).wait(28).to({_off:true},1).wait(106));

	// pulm valve blue 1
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFB69F").s().p("Ai8DmQgagEgzgbQhEgehYAVQgSAFgWAHIFgjXIAqgaQA6BtCbgpIAYgHIAtgTQCJhgAfhMQAKhgAkArQAtA2gQBGQgJAngaAsIgZAlQhHBTh/A5QiUBBhRgBQgzAKgsAAQgiAAgegGg");
	this.shape_60.setTransform(824.2,898.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFB69F").s().p("Ai3D6QgbgCg0gWQhHgXhWAcQgSAGgVAJIFMj2IAogdQBEBnCXg1IAXgJIAsgVQCGhrAohKQAVhbAiAsQArA4gTBFQgKAmgcArIgbAkQhHBSh6BBQiLBJhRAHQhEAUg3AAQgSAAgRgCg");
	this.shape_61.setTransform(825.4,896.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFB69F").s().p("AiPAEIAlggQBNBgCThBIAWgKQAUgLAWgPQCCh0AwhIQAihWAgAtQApA5gWBFQgMAmgeAqIgcAkQhIBQhzBHQiCBRhQAOQhXAihFgBQgaAAg3gSQhJgRhSAlIgmASg");
	this.shape_62.setTransform(826.5,895.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFB69F").s().p("AigAGIAigjQBWBXCNhLIAVgNIAogdQB/h9A3hGQAuhSAeAvQAnA7gZBEQgOAlgfApIgeAjQhIBPhsBNQh4BYhOAWQhUAqhFADQgbADg3gMQhKgKhPAqIgkAWg");
	this.shape_63.setTransform(827.6,894.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFB69F").s().p("AiwAIIAeglQBeBOCHhWIAUgOIAlggIC5jJQA7hOAcAwQAjA9gbBCQgPAlghAnIgfAiQhJBNhjBTQhuBfhMAcQhPAxhFAKQgbAFg4gHQhLgEhKAyIgiAZg");
	this.shape_64.setTransform(828.5,893.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFB69F").s().p("AjAANIAbgoQBlBFB/hhIATgQIAjgiQDnlKA0BiQAiA/geBAQgRAkgjAmIggAhQhJBMhbBXQhjBlhJAjQhLA3hDARQgaAHg5gCQhLADhGA4QgPAMgQAQIDhlbg");
	this.shape_65.setTransform(829.3,892.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFB69F").s().p("AjPASIAXgrQBrA7B3hrIASgRIAgglQD3lMAwBkQAeBAggBAQgTAjgkAlIgiAeQhIBLhTBbQhXBqhGApQhFA+hCAXQgZAJg5ADQhKAKhBA+IgcAeIDBltg");
	this.shape_66.setTransform(830,891.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFB69F").s().p("AjeAWIATgtQBwAxBvh0IAQgTIAdgnQBniaBVg+QBfhDAWAzQAcBBgjA+QgUAjgmAjIgjAdQhIBJhJBeQhLBuhCAwQhABDg/AdQgZALg4AIQhKAQg6BEQgNAPgNASICgl9g");
	this.shape_67.setTransform(830.7,890.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFB69F").s().p("AjrAcIAPguQB0AlBmh8IANgUQANgSANgYQBgifBdg8QBqg/AUA0QAZBCgmA8QgVAignAhIgkAcQhIBGhABiQg/Bxg9A1Qg5BKg9AhQgYANg3AOQhHAWg1BJIgXAjIB+mKg");
	this.shape_68.setTransform(831.1,890);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFB69F").s().p("Aj4AjIALgvQB3AaBbiEIANgVIAWgsQBYikBjg6QB2g8ASA1QAWBDgoA7QgXAggoAgIgmAaQhHBDg2BlQgyBzg4A6QgzBOg5AnQgXAQg2ASQhFAdguBNIgTAkg");
	this.shape_69.setTransform(831.5,889);
	this.shape_69._off = true;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFB69F").s().p("AjsAdIAOguQB0AkBlh+IAOgTIAZgqQBfigBeg8QBrg/AUA0QAYBCglA9QgWAhgnAhIgkAcQhIBGg/BjQg+Bwg8A2Qg5BKg8AiQgYAOg3ANQhHAXg0BKIgXAjg");
	this.shape_70.setTransform(831.2,889.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFB69F").s().p("AjhAXIATgtQBxAuBsh1IAQgTIAcgoQBnibBWg+QBhhCAVA0QAcBBgkA+QgUAigmAjIgjAdQhIBIhIBfQhJBvhAAwQg/BGg+AcQgZAMg4AJQhIASg7BFIgZAhg");
	this.shape_71.setTransform(830.8,890.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFB69F").s().p("AjUATIAWgrQBtA4B1huIARgRIAfgmQD7lNAvBlQAeBAgiA/QgTAjgkAkIgiAfQhIBKhQBcQhUBrhFArQhEBAhAAYQgaAKg4AFQhKAMg/A/IgcAfIC3lyg");
	this.shape_72.setTransform(830.2,891.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFB69F").s().p("AjGAPIAZgpQBoBBB8hlIASgQIAigkQDtlLAzBjQAgA/gfBBQgSAjgiAmIghAfIihClQheBnhIAlQhIA7hDATQgaAHg5AAQhKAGhFA7IgeAdIDVljg");
	this.shape_73.setTransform(829.6,892.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFB69F").s().p("Ai4AKIAcgnQBiBKCDhcIAUgPIAkghQB3iJBDhDQBAhMAbAwQAjA+gdBCQgQAkghAnIggAgQjxD3hrAtQhMA0hFAOQgaAGg5gFQhKAAhJA1QgQALgQAPIDwlQg");
	this.shape_74.setTransform(828.9,893.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFB69F").s().p("AipAHIAfglQBbBSCKhSIAUgNQATgNAUgSQB8iCA8hEQA1hQAdAwQAkA7gZBEQgQAlgfAnIgfAiQhIBPhnBQQhzBdhMAZQhRAuhFAIQgbAEg4gJQhLgHhMAvQgRAKgSAOg");
	this.shape_75.setTransform(828.1,894.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFB69F").s().p("AibAFIAjgiQBTBaCPhIIAVgMIApgcQCAh6A1hHQAqhTAfAuQAnA7gYBEQgNAlgeApIgeAjQhIBQhuBMQh7BWhPATQhVAnhFACQgbACg3gOQhKgMhQApQgRAJgTAMg");
	this.shape_76.setTransform(827.3,894.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFB69F").s().p("AiMAEIAlggQBMBiCUg/IAWgJIAqgZQCEhzAuhIQAfhYAgAuQAqA5gVBFQgNAlgcArIgcAkQhIBQh1BGQiEBQhPAMQhYAhhFgDQgbgBg2gSQhIgShUAjQgRAHgUAKIE5kNg");
	this.shape_77.setTransform(826.3,895.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFB69F").s().p("Ai3D4QgcgCg0gXQhHgXhVAbQgSAGgVAJIFOjzIAngdQBDBoCYg0IAXgJIAsgVQCHhqAmhKQAVhcAiAsQArA4gSBFQgLAmgbAsIgbAkQhHBSh6BAQiMBIhRAHQhCATg3AAQgTAAgSgDg");
	this.shape_78.setTransform(825.3,896.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60}]}).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(105).to({_off:true},1).wait(58).to({_off:false},0).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(114).to({_off:false},0).wait(40).to({_off:true},1).wait(51));

	// pulm valve blue 2
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFB69F").s().p("AgDBjQATgHgKgeQg1hKhCh1QgyhXA0iwQA8iJAzAFQArAfgDBBQgHAqgYBoQAPBuAkA9QAuAwAVgSQAHgGAFgHIg6JrQgQiAhEkqg");
	this.shape_79.setTransform(877.6,933.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFB69F").s().p("AgPBmQARgIgIgeQgyhPg6h4QgthdA2ipQA9iIAyAFQArAggDBAQgHArgaBoQAMBzAhBAQAqAzAXgSQAHgFAFgHIhMJmQgMh2g+k1g");
	this.shape_80.setTransform(879.2,932.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFB69F").s().p("AgbBnQAQgIgHgeQgthSgzh8QgnhdA3ioQA9iIAzAGQAqAhgEBAQgHAqgaBoQAIB6AcBBQAnA1AYgQQAIgFAFgGIhdJhQgJh7g4kzg");
	this.shape_81.setTransform(880.8,932.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFB69F").s().p("AgnBpQAPgIgGgfQgohXgsh+QghhgA4iiQA+iHAzAGQAqAggEBBQgIAqgbBnQAEB/AYBEQAkA3AZgOQAIgFAGgGIhvJbQgHiAgxkvg");
	this.shape_82.setTransform(882.3,931.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFB69F").s().p("Ag4BqQAPgIgGgfQgjhagjiBQANjTAPgtQBAiHAzAHQAqAhgFBAQgIAqgcBnQgBCFAUBEQAgA5AagMQAJgEAFgGIh+JUQgEiDgsktg");
	this.shape_83.setTransform(884.4,931.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFB69F").s().p("AhDBrQANgJgEgfQgchdgciEQATjPAQguQBAiGAyAHQArAigGA/QgJAqgcBoQgHCJARBGQAdA7AbgLQAIgEAGgFIiPJMQgBiGgmkqg");
	this.shape_84.setTransform(885.8,930.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFB69F").s().p("AhMBrQALgJgCggQgYhggUiEQAZjNAQgtQBCiGAyAHQAqAigGBAQgJAqgdBnQgMCOAMBHQAaA8AbgJQAIgDAHgFIifJEQABh9gek0g");
	this.shape_85.setTransform(887.1,930.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFB69F").s().p("AhXBrQALgLgBgfQgShjgMiFQAfjKAQgtQBDiFAyAIQAqAigHBAQgJAqgeBmQgSCTAJBHQAVA/AbgIQAJgDAHgEIiuI7QADiBgYkwg");
	this.shape_86.setTransform(888.5,930.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFB69F").s().p("AhgBqQAJgLAAggQgMhlgEiFQAkjHARgtQBDiEAzAIQAqAjgIA/QgJAqggBnQgWCWADBIQASA/AbgGQAKgCAGgDIi9IyQAHh8gRk2g");
	this.shape_87.setTransform(889.9,930.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFB69F").s().p("AhtBpQAIgMACggQgGhmAEiGQApjCARgtQBEiEAzAIQApAjgIBAQgJAqggBmQgeCbgBBHQAPBBAbgFQAKgBAHgEIjMIpQAIhwgJlCg");
	this.shape_88.setTransform(891.6,930.1);
	this.shape_88._off = true;

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFB69F").s().p("AhiBqQAJgLABggQgMhkgDiHQAljFAQgtQBEiFAzAIQApAjgHBAQgKAqgfBmQgYCYADBHQARA/AdgFQAJgCAHgEIi/IxQAGhygQlAg");
	this.shape_89.setTransform(890.1,930.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFB69F").s().p("AhZBrQALgLgBgfQgRhjgKiGQAfjJARgtQBCiFAzAIQAqAjgHA/QgJAqgfBnQgTCUAIBHQAUA+AcgHQAJgDAHgEIiyI5QAFhygXk/g");
	this.shape_90.setTransform(888.8,930.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFB69F").s().p("AhPBrQALgKgCgfQgWhhgSiFQAbjLAQguQBDiGAyAIQApAigGBAQgJApgdBoQgOCPALBHQAYA9AbgJQAJgDAHgEIikJBQACiCgckvg");
	this.shape_91.setTransform(887.5,930.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFB69F").s().p("AhGBrQANgJgEgfQgbhfgZiDQAVjOAQguQBCiGAyAHQAqAigGA/QgIAqgdBoQgJCLAPBGQAbA8AbgKQAIgEAHgFIiVJJQgBiCgikvg");
	this.shape_92.setTransform(886.3,930.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFB69F").s().p("Ag9BrQANgJgEgfQgghcggiCQAQjRAQguQBBiGAxAHQAqAhgFBAQgIAqgcBnQgECHATBGQAeA6AagMQAJgEAGgFIiHJQQgDh6gok2g");
	this.shape_93.setTransform(885.1,931.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFB69F").s().p("Ag0BpQAPgIgGgfQglhYgniBQALjSAQguQA/iHAzAGQAqAhgFBAQgHAqgcBoQAACCAXBEQAhA5AagOQAIgEAGgGIh4JXQgGh6guk2g");
	this.shape_94.setTransform(883.8,931.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFB69F").s().p("AgkBoQAPgHgGgfQgphWguh9QgihdA2imQA/iIAyAGQArAhgFBAQgHAqgbBoQAFB9AaBDQAlA3AYgPQAIgFAGgGIhqJdQgHh5g0k2g");
	this.shape_95.setTransform(881.9,931.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFB69F").s().p("AgZBoQARgJgIgdQguhTg0h7QgphdA3inQA+iIAyAFQArAhgEBAQgHAqgaBoQAIB4AeBBQAnA1AYgQQAIgFAFgGIhaJhQgJhyg6k6g");
	this.shape_96.setTransform(880.5,932.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFB69F").s().p("AgOBmQARgIgIgeQgyhOg7h4QgthaA1itQA9iIAyAFQAsAggEBBQgHAqgZBoQAMBzAhA/QAqAzAXgSQAIgFAEgHIhKJnQgNh/g+ksg");
	this.shape_97.setTransform(879.1,932.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79}]}).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(105).to({_off:true},1).wait(58).to({_off:false},0).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_88).wait(114).to({_off:false},0).wait(40).to({_off:true},1).wait(51));

	// Armature_18
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFB69F").s().p("AiIGWQgWANgWAAQhegSgWg/IgLhgQAAg7AKgqQgSgPAAgcQAAgrAdgHQAOgDAUgBQBIgDCZhjIAngcQA5AGAhhNQAShfAOhVQAmhoA9ARQBMAkAFApQAGBWgWBsQgQBHgeAiQg+BEgtApQhMBahLB7QhXCZgXAAQgEAAgQgVg");
	this.shape_98.setTransform(930.4,1044.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFB69F").s().p("AhsGgQgVAOgXABQhegOgZg9IgQhgQgCg7AHgqQgSgOgBgcQgCgsAcgIIAigGQBHgDCUhsIAkgdQA6ABAbhOQALhhAIhVQAfhrA+ANQBOAfAIApQAMBVgPBtQgLBIgbAkQg5BHgqAtQhGBehHB/QhQCegXABQgEgBgRgTg");
	this.shape_99.setTransform(928.6,1044);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFB69F").s().p("AhSGpQgUAPgXACQhfgKgbg8IgVheQgEg7AFgrQgTgOgCgbQgEgrAbgKQAOgEAUgDQBHgECNh1IAhgeQA6gDAVhQQAFhgAChXQAYhtA+AJQBQAZALAoQASBVgHBuQgHBIgYAmQgzBMgnAvQhBBihCCDQhJCigXACQgEAAgSgTg");
	this.shape_100.setTransform(927,1043.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFB69F").s().p("AjgGDIgZheQgHg6ADgrQgTgMgEgcQgGgsAbgKQAOgFATgEQBHgFCGh9IAegfQA5gGARhSQgChggEhXQAPhuA/AEQBSAUAOAnQAYBTAABuQgBBJgWAnQguBQgjAxQg8Bng7CGQhDClgXAEQgDgBgTgRQgUAPgWADQhggFgeg6g");
	this.shape_101.setTransform(925.5,1042.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFB69F").s().p("AjKGPIgdhcQgLg6ACgsQgVgLgEgcQgIgrAagMIAhgKQBHgFB/iFIAbggQA5gLAKhSQgJhhgKhVQAIhvA/AAQBTAOARAmQAeBRAHBuQAEBIgTApQgoBUggAyQg1Brg2CJQg8CpgWAFQgDgBgVgQQgSARgXADQhggBggg4g");
	this.shape_102.setTransform(924.2,1041.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFB69F").s().p("Ai0GZIgihbQgMg5gBgrQgUgLgHgbQgKgrAagNQANgGAUgGQBHgGB2iMIAYggQA4gPAFhTQgPhfgQhVQAAhvA/gFQBTAIAUAlQAjBPAPBtQAJBJgQApQgiBWgcA1QgvBugwCMQg1CtgXAFQgDAAgUgQQgSASgWAFIgLAAQhXAAghg0g");
	this.shape_103.setTransform(922.8,1041.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFB69F").s().p("AieGhIglhZQgQg4gDgrQgVgKgHgbQgMgqAZgOQANgHATgHQBHgGBviTIAVghQA3gSgBhUQgWhegWhUQgHhuA+gJQBUACAWAkQApBMAWBrQAOBIgNArQgcBYgYA3QgoBxgqCOQguCwgWAGQgEAAgVgPQgQATgWAGIgZABQhMAAghgvg");
	this.shape_104.setTransform(921.5,1041.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFB69F").s().p("AiIGoIgqhXQgRg4gGgqQgVgJgJgbQgOgpAZgQIAfgPQBIgHBmiZIASghQA2gWgHhTIg3ivQgQhuA9gNQBUgEAYAjQAuBJAeBqQATBGgKArQgWBagUA5QgiBzgjCRQgmCzgWAHQgEABgWgPQgQATgUAIQgTACgQAAQhFAAgggqg");
	this.shape_105.setTransform(920.2,1041);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFB69F").s().p("AhyGuQgshRgCgEQgUg3gHgrQgWgIgKgZQgPgpAXgRQAMgHATgJQBIgIBdifIAPghQA0gagNhSQgjhbgghPQgWhtA7gSQBUgJAaAgQA0BGAkBoQAYBEgHAsQgQBcgQA7QgaB0gdCTQgeC1gWAIQgEABgWgNQgQAUgVAIQgXAEgVAAQg8AAggglg");
	this.shape_106.setTransform(919,1041);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFB69F").s().p("AhcGzQgwhOgBgFQgYg2gJgqQgVgHgMgZQgRgoAXgSQALgIASgKQBKgJBTikQAJgSAFgPQAwgcgShSQgohXgnhOQgehrA7gWQBSgPAdAfQA4BCAsBkQAdBEgEAsQgKBcgMA8IgpELQgXC2gVAKQgEABgXgMQgOAUgVAKQgdAGgXAAQg3AAgfghg");
	this.shape_107.setTransform(917.7,1040.9);
	this.shape_107._off = true;

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFB69F").s().p("AhwGuIguhUQgVg4gHgqQgVgIgLgZQgQgpAYgRQAMgIATgIQBIgJBcifQALgTAEgOQA0gagNhSQgkhaghhQQgXhsA7gSQBUgKAbAgQAzBFAmBnQAZBFgHAsQgQBcgQA6QgZB1gcCTQgeC1gWAJQgDABgXgOQgPAVgVAIQgZAFgUAAQg8AAgggmg");
	this.shape_108.setTransform(918.8,1041);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFB69F").s().p("AiEGqIgqhXQgTg3gFgrQgWgJgJgaQgOgpAZgQIAfgQQBIgHBkiaIASghQA0gXgHhTQgehcgchSQgRhtA9gPQBUgEAZAhQAuBJAgBpQAUBGgJAsQgWBagTA5QggB0giCRQglCzgWAIQgDAAgWgOQgQAUgWAHQgTADgRAAQhCgBghgog");
	this.shape_109.setTransform(920,1041);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFB69F").s().p("AiYGkIgmhYQgQg5gEgrQgVgJgIgbQgNgqAagPIAfgOQBIgGBsiVIAUghQA2gTgChUQgYhdgYhUQgJhuA9gLQBUABAXAjQArBMAYBrQAQBHgMArQgbBZgXA3QgmBygoCPQgrCxgXAGQgDAAgWgOQgQASgVAHIgbABQhKAAgigtg");
	this.shape_110.setTransform(921.1,1041.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFB69F").s().p("AirGcIgjhaQgOg4gCgsQgUgKgHgbQgLgqAagOQANgGATgGQBHgGB0iPIAXgiQA3gPADhUIglizQgDhvA/gHQBUAHAUAkQAmBOASBsQALBIgPAqQggBYgbA1QgsBvgtCNQgyCugXAGQgDABgVgRQgRASgWAGIgRAAQhSAAghgyg");
	this.shape_111.setTransform(922.3,1041.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFB69F").s().p("Ai/GUIgfhcQgMg5AAgrQgUgMgGgbQgIgqAagNQANgGAUgFQBGgGB7iIIAaghQA4gMAIhTQgMhggNhWQAEhvA/gCQBTALASAmQAhBQALBtQAHBJgSApQglBVgeA0QgyBsgzCKQg5CrgXAFQgCAAgVgQQgSARgWAFIgFAAQhcAAghg3g");
	this.shape_112.setTransform(923.5,1041.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFB69F").s().p("AjTGKIgbhdQgJg6ACgrQgUgMgFgbQgHgrAbgMQAOgFAUgFQBGgFCCiBIAcggQA5gJANhTQgGhggIhWQALhvA/ACQBTAQAQAnQAbBSAEBuQACBJgTAnQgsBTghAyQg3Bpg5CIQg/CogWADQgDABgUgSQgTARgWADQhggCggg6g");
	this.shape_113.setTransform(924.7,1042);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFB69F").s().p("AhAGuQgUAPgWADQhggHgdg6IgYheQgGg6ADgrQgSgOgEgbQgFgrAbgLIAigIQBHgECHh7IAfgfQA6gGAShRIgCi3QAShtA+AFQBSAWANAnQAWBUgCBuQgDBJgWAmQgwBQglAvQg9Bmg9CFQhECkgYADQgDAAgTgSg");
	this.shape_114.setTransform(926,1042.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFB69F").s().p("AhXGnQgVAPgWACQhggLgag8QgUhaAAgEQgEg7AGgrQgTgNgCgcQgEgrAcgKQAOgEAUgDQBHgECOhzIAigeQA5gBAXhRQAGhgADhXQAZhsA+AJQBQAbALAoQASBVgKBuQgIBIgYAlQg1BLgnAvQhCBihDCCQhKChgYACQgDgBgSgTg");
	this.shape_115.setTransform(927.4,1043.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFB69F").s().p("AhvGfQgVAOgXABQhfgPgYg9IgPhfQgCg7AHgqQgSgPgBgcQgBgrAcgIQANgDAVgDQBHgDCUhsIAkgcQA6ABAchOQAMhfAJhXQAfhqA9ANQBPAgAIApQAMBVgRBtQgLBHgbAkQg5BIgrAsQhHBehIB+QhQCegXABQgEgBgRgUg");
	this.shape_116.setTransform(928.8,1044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98}]}).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_98).wait(105).to({_off:true},1).wait(58).to({_off:false},0).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_107).wait(114).to({_off:false},0).wait(40).to({_off:true},1).wait(51));

	// pulm valve red 2
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFB69F").s().p("AllFWQh7gJgrhaQAUhPBegVQBPAPBxgxQBKgsA/hFQBFhUAOgdQAbhvhThpQBqgRBrAOQB8ARB8A+QBGAjAuA6QgMBegcBHQg4gzhDAOQh4AIhuBrQAWgHg8A3QhbBuh3A5QhsAyhgAAQgTAAgRgCg");
	this.shape_117.setTransform(994.4,971.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFB69F").s().p("Al5FCQh7gWghheQAchNBggLQBLAbB1goQBMglBBhCQBIhOAPgcQAghuhNhtQBqgNBqAUQB7AWB6BEQBEAmArA9QgQBcgfBGQg2g1hEAKQh3AEhzBnQAVgGhAAzQhhBrh8AvQhaAfhPAAQgnAAgkgHg");
	this.shape_118.setTransform(993.4,969.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFB69F").s().p("AmMErQh5gjgXhhQAkhJBggBQBHAmB3geQBOgfBDg+QBKhKARgbQAkhshIhwQBrgIBpAYQB7AcB1BJQBDApAoA/QgUBcgjBFQgyg5hFAHQh2ABh5BhQAUgEhDAvQhpBnh/AlQhEAQg9AAQg9AAg3gRg");
	this.shape_119.setTransform(992.6,967.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFB69F").s().p("AmeESQh1gxgNhiQArhFBfAJQBBAwB5gTQBPgZBFg5QBMhGASgaQAqhrhDhzQBrgDBoAdQB5AhByBPQBBAsAlBBQgYBagmBEQgwg8hFAFQh0gDiABbQAUgChGAqQhxBkiBAYQgtAHgpAAQhXAAhHgfg");
	this.shape_120.setTransform(992.1,965.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFB69F").s().p("AmuD3Qhxg9gDhkQAyhABeATQA6A6B5gKQBQgSBHg1QBOhBAUgZQAuhpg/h2QBtACBlAhQB4AnBvBUQA+AvAjBCQgdBZgpBCQgtg9hFABQhygGiFBUQARAAhIAmQh4BeiDAOIgmABQhzAAhXgxg");
	this.shape_121.setTransform(991.7,963.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFB69F").s().p("Am9DaQhqhKAHhkQA5g5BbAbQAxBDB5ABQBRgLBIgyQBQg9AUgYQA0hng6h5QBsAHBlAnQB1AsBrBYQA9AzAeBCQggBZgsBAQgqg/hFgCQhygJiKBMQARAChLAhQiABYiCADQiMgDhfhDg");
	this.shape_122.setTransform(991.5,962.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFB69F").s().p("AjnEYQiKgQhYhNQhjhWAShiQA+gzBYAlQAnBKB5ALQBQgFBJgtQBRg5AWgXQA4hkg0h8QBrAMBjArQB0AyBmBdQA6A1AcBEQgkBWgvA/QgohBhEgGQhwgLiPBFQAPAEhNAbQh7BLh4AAIgWgBg");
	this.shape_123.setTransform(991.5,960.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFB69F").s().p("Aj7ENQiHgchRhXQhahgAbhfQBEgtBUAuQAdBQB1AWQBPAABLgpQBSg0AXgWQA9higvh9QBsAQBgAvQBxA3BiBiQA4A3AZBGQgpBVgxA8QglhDhEgJQhvgOiTA+QAOAEhPAXQhxA8hoAAQgbAAgagEg");
	this.shape_124.setTransform(991.6,959.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFB69F").s().p("AkPEBQiEgohHhfQhRhqAmhcQBHgmBPA3QASBVByAfQBOAGBLglQBUgvAYgWQBBhegpiAQBqAWBfAzQBuA8BeBnQA1A4AWBIQgsBTg1A5QghhEhEgMQhtgRiXA2QALAGhPARQhoAvhdAAQgoAAgmgJg");
	this.shape_125.setTransform(991.8,957.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFB69F").s().p("AFBCxQhsgUiaAuQAKAGhQANQidA6h5gnQiAg0g9hmQhGhyAuhZQBMgeBIA+QAGBaBvAnQBMAMBMggQBVgsAZgUQBFhcgjiBQBpAbBcA3QBsBBBZBqQAyA7ATBJQgwBRg3A3QgfhGhDgOg");
	this.shape_126.setTransform(992,956.6);
	this.shape_126._off = true;

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFB69F").s().p("AkQEAQiEgphGhgQhQhrAmhbQBIgmBOA3QARBXByAfQBOAHBLgkQBUgwAYgVQBBhegniAQBpAWBfA0QBuA9BdBmQA1A5AVBIQgsBSg1A6QghhFhEgMQhtgRiXA1QALAGhPARQhnAthbAAQgqAAgngJg");
	this.shape_127.setTransform(991.8,957.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFB69F").s().p("Aj/ELQiHgfhOhYQhZhiAeheQBEgtBTAwQAbBSB1AXQBPABBLgoQBSgzAXgWQA9hhgsh+QBqASBhAwQBwA4BiBjQA3A2AYBHQgqBVgxA7QglhDhDgJQhvgPiUA8QAOAFhPAWQhwA5hmAAQgdAAgdgFg");
	this.shape_128.setTransform(991.6,958.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFB69F").s().p("AjtEVQiKgThVhRQhhhZAVhgQA/gyBXAoQAkBMB4AOQBQgEBJgsQBSg3AWgXQA6hjgzh8QBsANBiAsQByAzBmBfQA5A2AcBEQgmBWgwA+QgmhChFgGQhwgNiQBEQAPADhNAbQh6BFhzAAIgegBg");
	this.shape_129.setTransform(991.5,960.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFB69F").s().p("AjbEdQiLgIhchIQhohPAMhiQA6g3BbAfQAtBGB5AFQBQgKBJgvQBQg7AVgYQA1hmg3h5QBsAIBkApQB0AuBqBbQA7AzAeBDQgiBXgtBAQgphAhFgDQhxgKiMBKQAQAChMAfQiBBUiBAAIgDAAg");
	this.shape_130.setTransform(991.5,961.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFB69F").s().p("Am2DpQhuhEADhkQA1g9BdAXQA1A/B6gEQBQgPBHgzQBPg/AUgZQAxhng8h4QBsAEBlAkQB3AqBtBWQA9AwAhBEQgfBYgqBBQgsg/hEAAQhygHiIBQQARABhKAjQh8BbiCAJIgNAAQiDAAheg7g");
	this.shape_131.setTransform(991.6,962.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFB69F").s().p("AmoECQhzg4gHhkQAwhCBfAPQA8A2B5gNQBQgVBGg3QBOhCATgaQAshqhAh1QBsAABmAgQB4AlBxBRQA/AvAkBBQgbBZgoBDQgug8hFACQhzgEiEBWQATAAhIAnQh0BgiCASQgfAEgcAAQhnAAhRgqg");
	this.shape_132.setTransform(991.8,964.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFB69F").s().p("AmZEaQh3gtgQhiQAqhGBfAGQBDAtB4gXQBQgaBEg7QBMhHARgaQAohshEhyQBrgEBoAbQB6AgBzBNQBBAsAmA/QgXBaglBFQgwg6hFAFQh0gBh/BcQAUgChFArQhvBkiAAdQg0AJgvAAQhPAAhDgag");
	this.shape_133.setTransform(992.2,966.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFB69F").s().p("AmJEwQh5ghgZhgQAihKBggDQBIAjB3gfQBOggBCg/QBKhLAQgbQAkhthJhvQBrgJBpAXQB6AbB3BIQBDApApA+QgTBcgiBFQg0g4hEAHQh2ACh5BiQAVgDhDAvQhnBoh/AmQhIAUhBAAQg5AAgzgPg");
	this.shape_134.setTransform(992.8,967.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFB69F").s().p("Al4FEQh6gVgiheQAbhMBfgMQBMAaB1gqQBMglBAhDQBJhPAOgcQAghuhOhsQBqgOBqAUQB7AWB7BCQBFAnAqA8QgQBcgfBHQg1g1hDAKQh4AFhzBnQAWgGhAAzQhgBsh9AwQhbAhhRAAQglAAgjgHg");
	this.shape_135.setTransform(993.5,969.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117}]}).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_117).wait(105).to({_off:true},1).wait(58).to({_off:false},0).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_126).wait(114).to({_off:false},0).wait(40).to({_off:true},1).wait(51));

	// static wall filler
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFB69F").s().p("AkiNJQgYgDgGgrIAAgwQAChTAMhNIABgIIABg+QAGhDAjhjQAGgyAGgeQANg2AwgaQA/ghAJgSQAIggAXgrQBIiDCIFWQAaBAAYBEQAXAWAbAcIANgRQAJgMAOAAQAZAAAKAwQAFAZAAAZQAABdgkAAQgaAAgCgVIADgXQAAgGgWgbQAQA2APA4IACAmQABAegJAWQgZBDhvAAQhPAAgxgsQgQgOgLgQQgIgMAAgBQgoAWgPAfQgHAPgGAnQgFAdgOAMQgUAQg1AAQgwAAgWgugAh2mtQgkiIAAgrQAAg0AWggQAwhFCZgqQBDgTAcgaQAcgbAZgIQAvgOAfAmQAaAeAAAfQAAA5hDBHQhMBRhqAWQAAAPAIBEQAJBAgCAmQgGB7hqAAQgwAAgtiqg");
	this.shape_136.setTransform(894.7,1003.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_136).wait(206));

	// upper right wall
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFB69F").s().p("AIZVvQgGgRgHgNIgDgJQgfhPgJgfQgTg+AAg6QAAiuBljRIAMgVQDii5A3iUQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_137.setTransform(1168.1,863.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFB69F").s().p("AIZVvQgHgSgGgMIgDgKQgfhRgIggQgRhBAAg6QABirBkjPIALgVQDhi4A2iTQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_138.setTransform(1168.1,863.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFB69F").s().p("AIZVvQgHgSgGgNIgEgKQgdhSgIgjQgQhCABg8QACioBjjNIALgUQDdi3A3iSQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_139.setTransform(1168.1,863.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFB69F").s().p("AIZVvQgHgTgHgNIgEgLQgbhTgIgkQgQhFACg8QACilBjjLIALgUQDci2A2iRQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_140.setTransform(1168.1,863.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFB69F").s().p("AIZVvQgHgUgIgNIgEgLQgahVgHgmQgPhGADg9QADiiBijKIALgTQDZi1A2iQQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_141.setTransform(1168.1,863.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFB69F").s().p("AIZVvQgIgVgHgNIgEgLQgZhXgHgnQgOhIAEg+QAEifBhjIIAKgTQDXizA2iQQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_142.setTransform(1168.1,863.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFB69F").s().p("AIZVvQgIgWgIgNIgEgMQgYhXgGgqQgNhKAEg+QAFidBgjGIAKgSQDWiyA1iPQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_143.setTransform(1168.1,863.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFB69F").s().p("AIZVvQgIgWgJgOIgDgMQgXhZgGgrQgMhMAEhAQAGiZBfjEIALgSQDTixA1iOQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_144.setTransform(1168.1,863.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFB69F").s().p("AIZVvQgJgXgIgOIgEgMQgWhbgFgtQgMhOAHhAQAFiWBgjDIAJgRQDSiwA0iNQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_145.setTransform(1168.1,863.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFB69F").s().p("AIZVvQgJgYgJgOIgEgNQgVhcgEguQgKhQAGhBQAHiTBejBIAJgRQDQivA0iMQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_146.setTransform(1168.1,863.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFB69F").s().p("AIZVvQgJgZgKgOIgDgNQgUhdgEgxQgJhSAGhBQAIiRBdi/IAKgQQDNiuA0iLQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_147.setTransform(1168.1,863.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFB69F").s().p("AIZVvQgJgZgLgPIgCgNQgUhfgDgyQgJhUAIhCQAIiOBei9IAJgRQDLirAziLQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_148.setTransform(1168.1,863.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFB69F").s().p("AIZVvQgKgagKgPIgDgOQgShggDg0QgIhWAJhDQAJiKBci8IAJgQQDJiqAziKQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_149.setTransform(1168.1,863.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFB69F").s().p("AIZVvQgKgbgLgPIgCgOQgShigCg1QgHhYAJhEQAKiHBbi6IAJgQQDHipAziJQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_150.setTransform(1168.1,863.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFB69F").s().p("AIZVvQgKgcgLgPIgDgOQgQhjgCg4QgGhaAKhEQALiFBai4IAIgPQDGioAyiIQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_151.setTransform(1168.1,863.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFB69F").s().p("AIZVvQgLgdgLgPIgDgPQgPhkgBg5QgFhcAKhFQAMiCBai3IAIgOQDDinAyiHQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_152.setTransform(1168.1,863.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFB69F").s().p("AIZVvQgLgdgLgQIgDgPQgOhmgCg6QgDheALhGQAMh/Bai1IAIgOQDAilAyiHQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_153.setTransform(1168.1,863.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFB69F").s().p("AIZVvQgLgegMgQIgDgPQgNhogBg8QgChgAMhGQANh8BYi0IAHgNQDAikAxiGQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_154.setTransform(1168.1,863.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFB69F").s().p("AIZVvQgLgfgMgQIgEgQQgLhogBg+QgChiANhIQAOh5BYixIAHgNQC9ijAxiFQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_155.setTransform(1168.1,863.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFB69F").s().p("AIZVvQgMgggMgQIgDgQQgLhqAAhAQgBhkAOhIQAOh2BYiwIAHgMQC6iiAxiEQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_156.setTransform(1168.1,863.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFB69F").s().p("AIZVvQgMghgNgQIgDgQQgJhsAAhBQAAhmAPhJQAPhzBWiuIAHgMQC4ihAxiDQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_157.setTransform(1168.1,863.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFB69F").s().p("AIZVvQgMghgNgRIgEgRQgIhtABhDQAChoAOhJQARhwBVitIAGgLQC3igAwiCQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_158.setTransform(1168.1,863.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFB69F").s().p("AIZVvQgNgigNgQIgDgSQgIhuADhFQABhqAQhKQARhuBViqIAGgLQC0ieAwiCQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_159.setTransform(1168.1,863.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFB69F").s().p("AIZVvQgNgjgOgQIgDgSQgGhwADhHQAChsARhLQARhqBUipIAGgKQCyidAwiBQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_160.setTransform(1168.1,863.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFB69F").s().p("AIZVvQgNgkgPgQIgCgTQgGhxAEhIQADhuARhMQAThnBTinIAFgKQCxicAviAQBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_161.setTransform(1168.1,863.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFB69F").s().p("AIZVvQgOglgOgQQgCgNgBgGQgEhzADhKQAFhvARhNQAUhkBTimIAFgJQCuibAvh/QBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_162.setTransform(1168.1,863.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFB69F").s().p("AIZVvQgOglgPgRQgCgNAAgGQgEh0AEhMQAGhyAShNQAVhiBRijIAGgKQCriZAvh+QBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_163.setTransform(1168.1,863.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFB69F").s().p("AIZVvQgOgmgQgRIgCgUQgCh1AEhOQAHhzAThOQAVhfBRiiIAFgJQCpiYAvh9QBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_164.setTransform(1168.1,863.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFB69F").s().p("AIZVvQgOgngQgRQgDgNABgHQgBh3AEhPQAIh2AThPQAWhbBRigIAEgJQCniWAvh9QBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvg");
	this.shape_165.setTransform(1168.1,863.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFB69F").s().p("AIZVvQgOgogRgRQgCgOAAgGQAAh5AFhRQAIh3AVhQQAXhYBPifIAEgIQCmiWAuh7QBPjfg2irQg/i0kmmKQkIlhmzjWQlDifk7gqQjEgZjwANIjFAMIGbkIIBNgOQBjgOBwACQFjAGFVCgQE7CUEREOQGcGVCzG/QBrELAaEoQAPCcgJEaQgJD3BdDOQAyBkAuA3IsxDvgAGDWeIAAgCIABACIgBACIAAgCg");
	this.shape_166.setTransform(1168.1,863.7);
	this.shape_166._off = true;

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFB69F").s().p("AIbV0QgPgogPgSIgDgUIAAgQIAAg6QABhAACgxIABgOQAIh3AUhQQAThJA4h2IAbg4IAEgIQA1gyAogtQBWhfAghUQAVg3ALg0QAYhtgOheQgGgqgOgoQgbhKhEhvQhYiOiSjFIghgrQh/imijiJQidiEi/hqIg5geQhvg5htgqQhngphmgbQhmgbhmgOIgDAAQjEgajvANIgBAAIjFANIGbkJIADgBIAugIIAbgGQAygHA1gDQA1gEA3ABQDtAEDqBLQBZAdBYAqIAtAVQBeAvBaA7QB8BQB0BiQBOBDBMBLIAdAdQB8B9BpCAQByCOBcCWQBQCEA5CIIAMAeQAwB1AeB6QAiCOAOCVQAHBPACBvQAABLgCBaIgCBSQgCAvACAsQAIDDBKCoQAWAtAWAkQAbAsAZAeIhWAcIrXDUg");
	this.shape_167.setTransform(1168,863.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFB69F").s().p("AJXYWIg6ieQgOgogQgSQgDgNAAgHIAAgQIgBg6IADhxIABgOQAIh2AUhRQAThJA3h2IAbg4IAEgIQA1gyAngtQBWhfAghUQAVg3AMg0QAZhsgRheQgGgqgPgoQgdhIhFhuQhdiNiQjCIghgrQiBilihiJQiciFi9hsIg4gfQhug9hrgqQhmgrhlgcQhlgchmgOIgDAAQjEgajvANIgBAAIjFANIGbkJIADgBIAugJIAbgGQAxgHA2gEQA0gDA3ABQDsAEDrBMQBYAdBXAsIAsAWQBcAwBZA9QB6BUBxBhQBNBFBLBKIAdAdQB7B8BrCAQBxCLBhCUQBUCDA6CFIANAeQAyB0AeB5QAjCOAOCUQAIBQABBuQABBKgCBbIgDBTQgCAuACAsQAHDDBKCoQAWAtAWAkQAaAsAZAfIhSAeIrWDUg");
	this.shape_168.setTransform(1167.9,863.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFB69F").s().p("AJZYaIg6ieQgOgngQgTIgDgTIAAgQIgCg6QABhAACgxIABgOQAHh2AVhRQAShKA3h1IAbg4IAEgIQA0g0AmgsQBWhfAihTQAVg3AMg0QAZhsgTheQgHgpgPgoQgfhHhGhsQhiiOiOi9IgigrQiCikigiKQiaiGi6hvIg4gfQhug/hogrQhlguhjgcQhlgdhngPIgCAAQjFgZjuANIgBAAIjFAMIGakIIADgBIAvgKIAagGQAygIA1gEQA0gEA3ABQDrAEDsBOQBYAdBVAvIArAXQBaAwBXBAQB4BYBvBgQBLBGBLBKIAcAeQB7B7BuB+QBwCIBmCTQBWCCA7CCIAOAdQA2B0AdB3QAlCPAOCTQAHBRACBtQABBKgEBbIgCBSQgCAvACAsQAGDDBKCoQAVAtAWAkQAaAsAaAfQgnAQgnAPIrWDUg");
	this.shape_169.setTransform(1167.8,863.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFB69F").s().p("AJbYeIg6ieQgOgngQgTIgDgUIgBgQIgCg5QAAhAACgxIABgOQAHh1AVhSQAShLA3h0IAbg4IAEgHQAzg1AlgtQBXheAihTQAWg3AMg0QAZhrgVheQgHgpgRgnQgfhHhIhqQhmiOiOi5IghgqQiEijieiLQiaiHi4hxIg2ghQhthChmgrQhkgwhigdQhkgehngPIgDAAQjEgZjuANIgBAAIjGAMIGbkIIADgBIAugLIAagGQAygJA1gEQA0gDA3ABQDqADDtBQQBWAdBVAxIArAYQBXAxBWBCQB1BcBsBfQBLBIBKBKIAcAdQB6B6BwB+QBvCFBsCSQBZCAA8CAIAOAcQA4BzAfB2QAkCPAPCTQAIBRACBsQAABJgDBcIgDBTQgCAvACArQAGDDBJCoQAVAtAVAlQAbAsAZAeQglASgkAPIrWDUg");
	this.shape_170.setTransform(1167.7,863.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFB69F").s().p("AJcYiIg6idQgOgngOgTIgEgUIgBgQIgDg5QAAhAACgxIAAgOQAHh1AVhSQAThMA1hzIAbg4IAFgIQAzg2AjgsQBYheAihSQAWg3ANg0QAZhrgXheQgIgogSgnQgghGhJhpQhriNiNi1IghgqQiFiiidiMQiZiIi0h0Ig2ghQhshEhkgsQhjgyhhgeQhjgghngOIgDAAQjFgajuANIgBAAIjFANIGbkIIACgCIAugLIAbgGQAxgJA1gFQA0gEA3ABQDpAEDuBRQBWAdBTA0IAqAYQBVAzBUBEQB0BfBoBfICUCTIAcAdQB5B6BzB8QBuCCBwCRQBdB+A9B+IAPAcQA7BxAeB2QAlCPAPCSQAJBRABBsQAABJgDBcIgDBSQgCAwACArQAFDDBICoQAVAtAVAlQAbAsAZAfIhFAiIrWDUg");
	this.shape_171.setTransform(1167.7,863.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFB69F").s().p("AJfYnIg7ieQgOgmgOgUIgDgUIgCgQIgEg5QAAg/ABgyIABgNQAHh0AVhTQAShNA1hzIAbg3IAFgIQAyg3AjgsQBXhdAjhTQAXg2ANg0QAahrgahdQgIgogTgnQgihFhKhnIj7k/IghgpQiHihiciMQiXiJiyh3Ig1giQhrhHhhgtQhjg0hggfQhhgghogPIgDAAQjFgZjuANIgBAAIjFAMIGbkIIACgBIAtgMIAbgHQAxgJA1gFQA1gEA3ABQDnAEDuBTQBVAcBTA3QAVALAUAOQBTAzBTBHQBxBjBmBeICSCUIAcAdQB4B5B2B8QBtB+B1CQQBgB8A+B7IAPAcQA9BxAfB0QAnCPAPCSQAJBSABBrQAABIgEBdIgDBSQgCAvACArQAEDEBICoQAVAsAWAmQAZAsAZAfQggATggARIrVDUg");
	this.shape_172.setTransform(1167.6,862.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFB69F").s().p("AJgYrIg6ieQgNgmgPgUIgEgUIgBgQIgFg5QgBg/ACgxIABgOQAHhzAUhUQAThOA0hxIAbg4IAEgIQAyg4AjgrQBXhdAjhTQAYg2AMg0QAahqgbheQgJgmgUgnQgjhEhLhmQh0iNiKiuIghgoQiJihiaiMQiWiKiwh6Ig0giQhqhKhggtQhhg3heggQhhghhogPIgDAAQjFgZjuANIgBAAIjFAMIGakIIADgBIAtgNIAagGQAxgLA1gEQA1gFA3ABQDmAEDvBUQBVAdBRA5QAUAMAUAOQBRA0BRBJIDTDEQBJBNBHBJIAcAdIDvDyQBsB8B7CPQBiB6BAB5IAPAbQBBBwAeBzQAoCPAPCRQAKBTAABqQABBIgEBdIgEBSQgCAwABAqQAFDEBHCoQAVAtAVAlQAaAsAYAfQgdAVgeARIrWDUg");
	this.shape_173.setTransform(1167.5,862.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFB69F").s().p("AJiYvIg5ieQgPglgOgVIgEgTIgBgQIgGg5QgBg/ACgyIABgNQAGhzAVhUQAShPA1hxIAbg3IADgIQAyg5AhgrQBXhdAkhSQAYg2ANg0QAahqgdhdQgKgmgVgnQgkhDhMhlQh5iMiIiqIgigoQiKigiZiNQiViLith8IgzgjQhqhNhdguQhgg5hdggQhggjhpgOIgCAAQjFgajuANIgBAAIjFANIGakIIAvgPIAagHQAxgKA2gFQA0gFA3ABQDkADDyBXQBSAdBRA7IAnAbQBPA1BQBLIDODHQBHBPBHBIIAcAdIDxDxIDqEGQBmB5BAB2IARAaQBCBvAgByQAoCQAQCQQAKBTAABqQAABHgEBeIgEBSQgDAwACAqQAEDEBGCoQAVAtAVAlQAaAsAZAgQgcAVgcASIrVDTg");
	this.shape_174.setTransform(1167.4,862.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFB69F").s().p("AJkY0Ig6ieQgNglgPgWIgDgTIgCgQIgGg4QgChAACgxIABgOQAFhyAVhVQAThPA0hwIAbg3IADgIQAyg7AggqQBXhdAlhSQAYg2ANgzQAbhqgghdQgKgmgWgmQglhChOhjQh9iNiHimIgignQiMifiXiOQiUiMirh+IgygkQhphQhaguQhfg8hdghQhfgjhpgPIgDAAQjEgZjuANIgCAAIjEAMIGZkIIAwgPIAagHQAwgLA2gFQA0gFA4ABQDiADDzBYQBSAdBPA9QATANAUAPQBMA2BOBOQBsBuBeBcQBGBQBFBIIAdAdQB1B2B9B5QBqB1CFCNQBpB3BCBzIAPAbQBHBuAfBxQApCPAQCQQAKBUABBpQAABGgFBfIgEBSQgDAwACAqQADDDBGCpQAVAsAVAmQAaAsAXAgQgYAWgaASIrWDUg");
	this.shape_175.setTransform(1167.3,862.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFB69F").s().p("AJmY3Ig6idQgNglgPgWIgEgTIgBgQIgIg4QgBg/ABgyIABgNQAGhyAVhWQAShPAzhwIAbg3IAEgIQAxg7AfgrQBXhcAmhRQAZg3ANgyQAbhqgihdQgLglgWgmQgnhBhPhiQiCiNiGihIgignQiNieiWiPQiSiNipiBIgxglQhohShYgvQheg+hcghQheglhpgPIgDAAQjFgZjuANIgBAAIjFAMIGakIIAvgQIAagHQAwgMA2gFQA0gFA4ABQDiADDyBaQBSAdBOA/QATAOATAPQBMA3BLBQQBpByBcBcQBFBRBFBIIAcAdQB1B1B/B4QBpByCKCMQBrB1BDBxIARAaQBJBtAfBwQAqCPARCPQAKBVAABoQAABGgFBfIgEBSQgCAwABAqQADDEBFCoQAUAtAVAlQAaAtAYAfQgXAYgXASIrWDUg");
	this.shape_176.setTransform(1167.2,862.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFB69F").s().p("AJoY8Ig6ieQgOgkgNgWIgFgUIgCgQIgIg3QgBhAABgxIAAgOQAHhxAUhWQAThQAyhvIAbg3IADgIQAxg9AegqQBYhcAmhRQAZg2ANgzQAchpglhdQgLgkgXgmQgohAhRhhQiGiMiEieIgigmQiPidiViQQiQiNimiEIgygmQhmhVhWgvQhdhAhagjQhegmhpgOIgEAAQjEgajuANIgBAAIjFANIGakIIAvgRIAagIQAvgMA2gFQA0gFA4AAQDgAED0BbQBRAdBNBCQASAOATAQQBJA4BKBSQBoB1BYBcQBEBSBFBIIAcAdQBzB0CDB3QBoBvCOCLQBvB0BEBuIARAZQBMBsAfBvQArCQARCOQAKBVABBoQAABGgGBfIgEBSQgDAwACAqQACDDBFCpQATAsAVAmQAaAtAYAgQgVAYgVATIrVDUg");
	this.shape_177.setTransform(1167.2,862.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFB69F").s().p("AJqZAIg6idQgNglgOgWIgFgTIgCgQIgJg4QgCg/ACgxIAAgOQAGhwAUhXQAThRAyhuIAbg3IADgIQAwg+AdgqQBYhbAnhRQAag2ANgzQAchpgmhcQgMgkgZgmQgog/hThfQiLiMiCiaIgjgmQiQiciTiQQiQiPikiGIgvgnQhmhYhUgvQhchDhZgjQhdgnhqgPIgDAAQjEgZjuANIgBAAIjFAMIGakHIADgCIArgQIAagIQAwgMA1gGQA0gGA4ABQDfADD1BdQBQAdBMBFQASAOASAQQBIA5BIBVQBlB5BWBaQBDBVBDBHIAcAdQB0BzCEB2QBnBsCUCKQByByBFBsIARAZQBPBrAgBtQArCRARCNQALBWABBmQgBBGgFBgIgFBRQgDAxABApQACDEBFCpQATAsAVAmQAZAtAYAgQgSAZgTAUIrVDTg");
	this.shape_178.setTransform(1167.1,862.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFB69F").s().p("AJsZFIg6ieQgNgkgOgXIgEgTIgDgQIgJg3QgDg/ABgxIABgOQAFhwAVhXQAThTAxhtIAbg3IADgHQAwg/AcgqQBYhbAnhRQAbg1ANgzQAdhpgphcQgNgjgZgmQgqg/hUhdQiPiMiBiWIgjglQiSibiRiRQiPiPihiKIgvgnQhlhahSgxQhbhFhYgkQhcgohqgOIgDAAQjEgajuANIgBAAIjFANIGakIIADgBIArgRIAZgIQAwgNA2gGQA0gGA3ABQDeADD2BeQBPAdBLBIQASAOARARQBGA6BGBWQBkB9BTBaQBCBWBCBHIAcAdQBzBzCHB1QBmBoCZCJQB0BwBHBpIASAZQBRBqAgBtQAsCQASCNQALBWAABmQAABFgGBgIgFBSQgDAxABApQACDEBECpQATAsAUAmQAaAtAXAgQgQAagQAUIrVDUg");
	this.shape_179.setTransform(1167,862);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFB69F").s().p("AJtZJIg5ieQgNgkgOgXIgFgTIgCgQIgKg3QgDg/ABgxIABgOQAFhvAUhYQAUhTAwhtIAag2IAEgIQAvhAAbgpQBZhbAohRQAag1AOgyQAdhpgrhcQgOgjgaglQgrg/hVhbQiUiLh/iTIgjglQiUiaiQiRQiOiRieiLIgugoQhlhehOgxQhbhHhXglQhbgphrgOIgCAAQjFgajtANIgCAAIjEANIGZkIIADgBIArgSIAZgIQAwgOA2gGQA0gGA3ABQDdADD3BgQBOAdBKBKQARAOASASQBDA7BFBZQBhCABRBaQBABXBCBGIAcAeQByBxCJB0QBmBmCdCHQB4BvBHBnIATAYQBUBpAgBsQAtCQASCNQAMBWAABlQAABFgHBhIgFBRQgDAyABAoQABDEBECpQASAsAVAnQAZAsAXAhQgNAbgPAUIrUDUg");
	this.shape_180.setTransform(1166.9,861.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFB69F").s().p("AJvZNIg5idQgNgkgOgXIgEgTIgDgQQgGgggFgXQgEg/ACgxIAAgOQAFhvAVhYQAThUAwhsIAag3IAEgHQAuhBAagpQBZhbAphQQAbg1AOgzQAdhoguhcQgNgigbglQgsg+hXhZQiZiMh+iOIgjglIkkkrQiMiRiciPIgtgoQhkhghNgyQhZhJhVgmQhbgqhrgPIgDAAQjEgZjuANIgBAAIjFAMIGakHIAtgUIAagJQAvgNA2gHQA0gGA4ABQDbADD4BhQBNAdBJBNQARAOARASQBBA8BDBbQBgCFBNBZQBABYBBBGIAcAeQBxBxCMBzQBkBiCjCGQB7BuBIBkIATAYQBXBoAhBqQAtCRASCMQAMBXAABkQAABEgHBhIgFBSQgDAyABAoQAADEBDCpQATAsAUAnQAZAsAYAhQgMAcgMAVIrVDUg");
	this.shape_181.setTransform(1166.8,861.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFB69F").s().p("AJyZRIg7idQgMgjgNgYIgFgTIgDgQQgGgggHgXQgDg/ABgxIABgOQAFhuAUhZQAUhVAuhrIAbg2IAEgIQAthCAagpQBYhaAqhQQAcg1AOgyQAdhogvhcQgPgigcgkQgtg9hYhYQidiLh9iLIgjgkQiXiYiNiTQiLiSiaiRIgsgpQhihjhLgzQhZhLhUgnQhagrhrgPIgDAAQjEgZjuANIgBAAIjFAMIGakHIAtgUIAZgJQAvgPA3gGQAzgHA4ABQDaADD4BjQBNAdBIBPQAQAPARATQA/A8BCBeQBdCIBLBYQA/BaBABGIAcAdQBwBwCOBzQBkBfCoCFQB9BsBKBhIATAYQBbBnAgBpQAuCRATCLQAMBYAABjQAABEgIBiIgFBRQgDAyABAoQAADEBCCpQATAsATAnQAZAtAYAhQgJAdgLAVIrUDUg");
	this.shape_182.setTransform(1166.8,861.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFB69F").s().p("AJ0ZVIg7idQgMgjgNgYIgGgTIgCgQQgHgggGgWQgEg/ABgxIAAgOQAFhuAVhaQAThVAuhqIAbg2IAEgIQAthEAYgoQBZhaAqhPQAcg2APgxQAdhogyhcQgOghgegkQgug8hZhWQihiMh8iGIgjgkQiZiXiMiUQiJiTiYiUIgsgpQhhhmhIgzQhXhOhUgnQhYgshsgPIgDAAQjFgajtANIgBAAIjFANIGakIIAtgVIAZgJQAugPA3gHQAzgGA4ABQDZADD5BkQBNAeBGBQQAQAQAQATQA9A9BABhQBbCMBJBXQA+BcA/BFIAcAdQBvBwCSBxQBiBcCsCEQCBBqBLBfIAUAXQBdBmAgBoQAwCRASCLQANBZAABiQAABDgIBjIgGBRQgDAyAAAoQAADEBCCpQASAsAUAnQAYAtAYAhQgHAegHAWIrVDTg");
	this.shape_183.setTransform(1166.7,861.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFB69F").s().p("AJ1ZaIg6ieQgMgigNgZIgFgTIgEgQQgGgggHgWQgEg/ABgxIAAgOQAFhsAUhbQAThWAuhpIAbg3IADgHQAthFAYgoQBYhZArhQQAdg1APgxQAehog1hcQgPgggegkQgwg7hahVQimiLh7iDIgjgjQiaiWiKiUQiJiUiViXIgqgqQhhhphGgzQhWhRhSgoQhYgthsgPIgDAAQjFgZjtANIgBAAIjFAMIGZkHIAtgWIAZgJQAugPA3gIQAzgGA4AAQDYADD6BmQBLAeBGBTQAPAQAQAUQA7A+A/BiQBZCQBGBXQA9BdA+BFQAOAQAOANQBuBvCUBwQBhBZCyCDQCEBpBMBcIAUAWQBgBlAgBoQAwCRAUCKQANBZgBBiQAABDgIBiIgGBSQgDAyAAAnQAADEBACqQASAsAVAnQAYAtAXAhQgEAfgGAXIrUDTg");
	this.shape_184.setTransform(1166.6,861.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFB69F").s().p("AJ3ZeIg6ieQgMgigNgZIgFgTIgEgQQgHgggHgVQgFg/ACgxIAAgOQAEhtAUhbQAUhWAuhpIAZg2IAEgIQAthGAWgoQBZhZArhPQAdg1AQgxQAehog3hbQgQgggfgjQgxg7hbhTQiriLh5h/IgkgiQibiViJiWQiIiViSiZIgqgrQhfhrhEg0QhWhThQgpQhXguhtgPIgDAAQjEgZjtANIgCAAIjEAMIGYkHIAtgWIAagKQAtgQA3gHQA0gHA4ABQDWACD8BoQBJAeBFBVQAPAQAQAVQA4A/A9BlQBYCTBCBWQA8BfA+BFIAcAdQBuBuCWBvQBgBWC2CCQCIBnBMBZIAVAWQBjBkAgBnQAyCRATCKQANBZAABhQgBBCgIBkIgFBRQgFAyAAAoQAADEBACpQASAsAUAoQAYAsAYAiQgDAfgEAYIrTDTg");
	this.shape_185.setTransform(1166.5,861.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFB69F").s().p("AJ5ZiIg6idQgMgigNgaIgFgSIgEgQQgHgggIgWQgFg/ABgxIABgOQADhrAVhcQAThXAthoIAag3IAEgHQAshHAVgoQBZhYAthPQAdg1AQgxQAfhng6hbQgQgggggjQgyg6hdhRQiwiLh3h7IgjgiQieiUiIiWQiGiWiQicIgogsQhfhuhCg0QhUhWhPgpQhXgvhtgPIgDAAQjEgajtANIgCAAIjEANIGbkJIAqgWIAZgKQAugQA3gHQAzgHA4AAQDVADD9BpQBIAeBEBYQAOAQAPAVQA3BAA8BoQBVCXBBBVQA6BgA9BFQAOAQANANQBtBtCZBuQBfBTC8CBQCKBlBPBXIAVAWQBlBjAhBlQAxCSAVCJQANBaAABgQAABCgKBkIgFBRQgFAyAAAnQgBDEBACqQASAsATAoQAZAsAWAiIgBA4IrTDUg");
	this.shape_186.setTransform(1166.4,861.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFB69F").s().p("AJ5ZnIg5ieQgMghgNgaIgGgTIgEgQQgHgggIgVQgGg/ABgxIABgOQADhrAVhcQAThZAthnIAag2IADgHQAshIAUgoQBahYAshPQAeg0AQgxQAfhng7hbQgRgfghgjQgzg5hfhQQi0iLh2h3IgkghQifiTiFiXIkTk1IgogtQhehxg/g1QhUhXhOgrQhWgwhtgPIgDAAQjEgZjtANIgBAAIjFAMIGckJIApgWIAZgKQAtgQA3gIQAzgIA4ABQDUADD+BrQBIAdBCBbQAPAQAOAWQA1BBA7BpQBSCbA9BVQA6BiA8BEQAOAQAOANQBsBsCbBtQBeBQDBCAQCNBjBQBVIAWAVQBnBiAiBkQAyCSAUCJQAOBaAABgQgBBBgJBkIgGBRQgEAzAAAnQgCDEA/CqQASAsATAoQAYAsAXAiIADA6IrTDTg");
	this.shape_187.setTransform(1166.5,860.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFB69F").s().p("AJ5ZrIg6ieQgMghgMgaIgGgTIgEgQQgIgggJgVQgFg/ABgxIAAgOQAEhqAUhdQAUhZArhnIAag2IAEgHQArhJATgnQBahYAthPQAeg0AQgxQAghng+haQgRgegigjQg0g4hghPQi5iKh0h0IgkghQihiSiEiXQiEiYiLihIgngtQhdh0g9g2QhThZhNgsQhVgxhtgPIgDAAQjEgZjuANIgBAAIjFAMIGckJIApgWIAZgLQAtgRA3gIQAzgHA4AAQDSADD/BsQBIAeBBBdQAOARAOAWQAzBCA5BsQBQCeA7BUQA5BkA7BDQANAQAOAOQBsBrCdBsQBeBNDFB+QCRBiBQBSIAXAVQBqBhAiBjQAzCSAUCIQAPBbgBBfQAABBgKBlIgGBRQgFAzAAAmQgCDEA/CqQARAsAUAoQAXAtAXAiIAIA7IrUDUg");
	this.shape_188.setTransform(1166.6,860.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFB69F").s().p("AJ5ZvIg6idQgMghgMgbIgGgTIgFgQQgIgggJgUQgGg/ABgxIAAgOQAEhqAUhdQAUhaArhmIAag2IADgHQArhKASgnQBahYAuhOQAfg0AQgxQAghnhAhaQgSgdgjgjQg1g3hhhNQi+iLhzhvIgkggQiiiSiDiYQiDiYiIikIgnguQhch3g7g2QhRhchMgsQhUgyhugPIgDAAQjEgajtANIgBAAIjFANIHEkgIAZgLQAtgSA3gIQAzgIA4ABQDRACEABvQBHAdBABgQANARAOAWQAxBDA3BuQBOCjA4BTQA4BlA7BEIAbAdQBrBqCgBsQBcBJDLB+QCTBgBSBPIAXAVQBtBgAiBiQA0CSAVCHQAOBcgBBeQAABAgKBlIgHBRQgEA0AAAmQgDDEA+CqQARAsAUAoQAXAtAXAiIAMA9IrTDTg");
	this.shape_189.setTransform(1166.8,860.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFB69F").s().p("AJ4ZzIg5idQgMgggNgcIgFgSIgFgQQgJgggJgVQgGg+AAgxIABgOQADhpAUheQAUhbArhlIAag2IADgHQAqhMARgmQBahXAvhOQAfg0AQgxQAhhmhDhbQgSgcgkgjQg2g2hjhNQjCiJhyhrIgkggQikiRiAiYQiDiaiGinIglguQhbh5g5g3QhQhfhLgsQhTg0hugPIgDAAQjFgZjtANIgBAAIjFAMIGZkHIADgBIAogZIAZgLQAtgRA3gJQAzgIA4ABQDQACEBBwQBFAeA/BiQANARAOAXQAvBEA1BwQBNCmA1BTQA3BnA5BDQAOAQANANQBrBpCiBrQBbBGDQB9QCWBeBTBNIAYAUQBwBfAiBhQA0CSAWCHQAPBcgBBdQgBBAgKBmIgHBRQgEA0gBAlQgDDFA+CqQAQAsAUAoQAXAtAXAiQAJAlAIAaIrUDTg");
	this.shape_190.setTransform(1166.9,860.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFB69F").s().p("AI/XaQgMghgMgbIgHgTIgEgQQgKgggJgUQgGg+AAgxIAAgOQADhpAVhfQAThbAqhlIAag1IAEgHQAqhNAPgmQBahXAwhOQAfg0ARgwQAhhmhFhaQgTgdglghQg3g2hkhLQjGiJhxhoIgkgfQimiQh/iZQiBibiEipIgkgvQhah8g2g4QhQhghKguQhTg0hugPIgDAAQjEgajuANIAAAAIjFANIGYkHIAEgCIAngZIAZgLQAtgSA3gJQAzgIA4AAQDOADECBxQBGAeA9BkQANASANAXQAtBFA0BzQBKCqAzBSQA1BoA5BDQANAQAOANQBqBpCkBpQBbBEDVB7QCZBdBUBKIAYAUQByBeAjBgQA1CSAWCGQAPBdgBBcQgBBAgKBmIgHBRQgFA0AAAlQgEDFA+CpQAQAsATApQAXAtAXAiQALAmAKAaIrTDTIhSACg");
	this.shape_191.setTransform(1167.1,860.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFB69F").s().p("AI+XcQgMgggLgcIgHgSIgFgQQgJghgLgTQgGg/AAgxIAAgOQAEhoAUhfQAThcAqhkIAag1IADgIQAqhNAOgmQBbhXAwhNQAgg0AQgwQAhhmhGhaQgUgcglghQg5g1hlhKQjMiJhvhjIgkgfQiniPh+iaQiAibiBisIgjgwQhah/g0g4QhPhjhIguQhSg2hvgPIgCAAQjEgZjuANIgBAAIjEAMIGYkHIADgBIAogaQALgGANgFQAsgTA3gJQA0gJA4ABQDNACEDBzQBEAeA9BnQAMASANAYQAqBGAzB1QBICtAwBSQA0BpA5BDQANAQAOANQBoBoCoBoQBZBBDaB6QCcBbBVBIIAZATQB1BdAjBfQA2CSAWCGQAQBdgBBcQgBA/gLBnIgHBQQgFA1gBAlQgEDEA9CqQAQAsATApQAXAtAXAiQANAnAMAbIrTDTIhUAFg");
	this.shape_192.setTransform(1167.2,860.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFB69F").s().p("AI+XeQgMgfgMgdIgGgSIgFgQQgLgggJgUQgIg+ABgxIAAgOQAChnAVhgQAThdAphjIAag2IADgHQAphPAPglQBahWAwhOQAhgzARgxQAhhlhJhaQgUgbgmghQg7g0hlhIQjRiJhthgIglgeQipiOh7iaQiAidh+iuIgjgxQhYiCgyg4QhNhmhIgvQhRg2hvgPIgDAAQjEgajuANIAAAAIjFANIGYkHIAEgCIAmgaIAZgMQAtgTA3gJQAzgJA4ABQDLACEEB1QBEAdA7BqQAMASAMAZQApBGAxB4QBGCxAtBRQA0BrA4BCQANAQAOANQBnBnCqBoQBYA9DgB5QCeBaBXBEIAZATQB4BdAiBdQA4CTAWCFQAQBegBBbQgBA+gLBoIgIBQQgEA0gBAlQgEDFA7CqQAQAsAUApQAWAtAXAiQAPAoAPAbIrTDUIhWAJg");
	this.shape_193.setTransform(1167.4,860.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFB69F").s().p("AI9XhIgXg8IgGgSIgFgQQgLghgLgTQgHg+AAgxIAAgOQADhnAUhhQAUhdAohiIAag2IADgHQAphQANglQBahWAyhNQAhg0ARgwQAihlhMhZQgUgbgoghQg7gzhohHQjUiIhshcIglgeQiqiNh7ibQh+idh8iyIgigxQhYiEgvg5QhMhohHgwQhQg4hvgPIgDAAQjEgZjuANIgBAAIjEAMIHCkjIAYgMQAtgUA3gJQAzgJA4AAQDKADEFB2QBDAeA7BrQALATAMAZQAmBIAwB6QBEC0AqBRQAzBsA2BCQANAQAOANQBnBmCtBnQBXA6DkB4QCiBYBYBCIAZATQB7BbAjBdQA4CTAWCEQARBegBBaQgBA/gMBoIgIBQQgFA0AAAlQgFDFA7CqQAPAsAUApQAXAtAWAjQASAoAQAcIrTDTIhXANg");
	this.shape_194.setTransform(1167.5,860.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFB69F").s().p("AI9XjIgXg8IgGgSIgGgQQgLghgLgSQgIg+ABgxIAAgOQAChnAUhhQAUhfAohhIAag1IADgHQAohRAMglQBbhWAyhMQAhg0ARgwQAjhlhOhZQgVgagpghQg8gyhphFQjZiJhrhXIglgeQisiMh5icQh9ieh5i0IghgyQhXiHgtg6QhMhqhFgwQhPg5hwgPIgDAAQjEgajtANIgBAAIjFANIHCkkIAYgNQAsgUA4gKQAzgIA4AAQDJACEGB4QBCAeA5BuQALATAMAaQAkBIAuB8QBDC5AmBQQAyBuA2BBQANAQAOANQBmBmCvBlQBWA3DpB3QCmBWBYBAIAaASQB+BbAjBbQA5CTAXCEQAQBfgBBZQgBA+gMBoIgIBRQgFA0gBAlQgFDFA6CqQAQArATAqQAXAtAWAjQAUApATAdIrTDTIhZAQg");
	this.shape_195.setTransform(1167.6,860.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFB69F").s().p("AI9XmIgXg8IgHgTIgFgQQgMgggLgTQgIg+AAgxIAAgOQAChlAVhiQAThgAohgIAZg1IADgHQAohTALgkQBbhVAzhNQAigzARgwQAihlhPhZQgWgZgpghQg+gxhqhEQjeiIhqhUIglgdQitiLh4icQh8igh2i2IghgzQhWiKgqg6QhLhshEgyQhOg6hxgPIgDAAQjEgZjtANIgBAAIjEAMIGYkGIApgeQAMgHAMgGQAsgVA3gKQA0gJA4ABQDIACEHB5QBAAeA5BxQAKATAMAaQAiBKAsB+QBBC8AkBPQAwBwA2BBQANAQANAOQBmBkCxBlQBWAzDuB2QCoBVBaA9IAaASQCBBZAjBaQA5CUAYCDQAQBfgBBZQgBA9gMBpIgIBQQgFA1gBAkQgGDFA6CrQAPArATAqQAXAtAWAjQAWAqAVAdIrTDUIhbAUg");
	this.shape_196.setTransform(1167.8,860.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFB69F").s().p("AI9XoIgXg9IgGgSIgGgQQgMghgMgRQgJg+AAgxIAAgOQAChmAVhiQAUhgAmhgIAag1IADgHQAnhTAKglQBchVAzhMQAigzASgwQAihkhShZQgWgZgqggQg/gwhshDQjiiIhohQIgmgcQiuiKh2ieQh7igh1i5Igeg0QhWiMgog7QhKhvhDgyQhNg7hxgPIgDAAQjEgZjtANIgBAAIjEAMIGYkGIAogfIAYgNQAsgVA3gKQAzgJA5AAQDGACEIB7QBAAeA4BzQAKAUAKAaQAgBLArCAQA/DAAhBPQAwBxA0BBQAOAQANANQBkBkC0BjQBVAxDzB1QCrBTBcA6IAaASQCDBYAkBZQA6CUAYCCQARBggCBYQgBA9gMBpIgIBRQgFA1gCAkQgGDFA6CqQAOArAUAqQAWAtAVAkQAZArAYAeIrTDTIhdAYg");
	this.shape_197.setTransform(1167.9,860.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFB69F").s().p("AIZWMQgMghgNgSQgIg+AAgxQAAjOBQjHQBAiFAMgwQCYiNAsh2QAjhkhUhZQg5g8i2hsQjniIhmhMQjKiViCiuQh5ihhxi8Qhti5gshGQhJhxhCgzQhMg8hygPQjEgajwANIjFANIGbkJIAmgdQAzggBIgNQDkgrFVCgQA/AeA3B2QAjBMA3CxQA9DEAgBOQA5CPBCBBQBkBjC3BjQBUAtD3B0QDLBeBbA8QCHBYAjBYQBnEBgEDMQgBA8gNBqQgNBugCA7QgJD4BdDNQAyBlAuA2IsxDvg");
	this.shape_198.setTransform(1168.1,860.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFB69F").s().p("AIZWMQgMghgMgSQgJg+AAgxQAAjOBQjHQBAiFAMgwQCYiNAsh2QAjhkhUhZQg5g8i2hsQjniIhmhMQjKiViCiuQh5ihhxi8Qhti5gshGQhJhxhCgzQhMg8hygPQjEgajwANIjFANIGbkJIAmgdQAzggBIgNQDkgrFVCgQA/AeA3B2QAjBMA3CxQA9DEAgBOQA5CPBCBBQBkBjC3BjQBUAtD3B0QDLBeBbA8QCHBYAjBYQBnEBgEDMQgBA8gNBqQgNBugCA7QgJD4BdDNQAyBlAuA2IsxDvg");
	this.shape_199.setTransform(1168.1,860.9);
	this.shape_199._off = true;

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFB69F").s().p("AI9XkIgXg9IgGgSIgGgQQgLghgLgSQgIg+ABgxIAAgOQAChmAUhiQAUheAohiIAag1IADgHQAohRAMglQBahVAzhNQAhg0ARgwQAjhkhOhaQgWgagoggQg9gyhphGQjZiIhrhXIglgeQisiMh5icQh9ieh5i0IghgzQhXiHgsg5QhMhrhFgwQhPg5hwgPIgDAAQjEgajtANIgBAAIjFANIHCkkIAYgNQAsgUA4gKQAzgJA4ABQDJACEGB4QBBAeA6BuQALATALAaQAkBJAuB8QBDC5AmBPQAyBvA2BBQANAQANANQBnBlCvBmQBWA3DqB2QClBXBZA/IAaASQB+BbAjBbQA5CTAXCEQAQBfgBBZQgBA+gMBoIgIBQQgFA1gBAkQgFDFA6CrQAQArATAqQAXAtAWAjQAUApATAdIrTDTIhZARg");
	this.shape_200.setTransform(1167.6,860.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFB69F").s().p("AI+XdQgMgggMgcIgGgTIgFgQQgKgggKgUQgGg+AAgxIAAgOQADhoAUhfQAUhdAqhjIAZg2IAEgHQAphOAPgmQBahWAwhOQAhgzAQgxQAhhlhHhaQgUgcglghQg5g1hmhKQjMiIhvhjIgkgfQiniPh+iaQiAibiAitIgkgwQhZh/g0g4QhOhkhIguQhSg2hvgPIgDAAQjEgZjtANIgBAAIjFAMIGZkHIADgBIAngaIAZgMQAsgSA3gKQA0gIA4ABQDMACEEBzQBDAeA9BnQAMATANAYQAqBGAyB1QBICuAvBSQA1BpA4BDQANAQAOANQBoBoCoBoQBaBADaB6QCdBbBWBHIAYATQB2BdAiBfQA3CSAWCFQAPBeAABbQgBA/gLBnIgHBRQgFA0gBAlQgEDFA8CqQAQAsAUAoQAXAtAWAjQAOAnANAbIrUDTIhUAGg");
	this.shape_201.setTransform(1167.2,860.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFB69F").s().p("AJ4ZwIg5idQgMghgNgbIgFgSIgFgQQgIghgJgUQgGg+AAgyIABgNQADhqAVheQAThaArhmIAag1IADgIQAshKARgnQBahXAuhPQAfg0AQgxQAghmhAhbQgTgdgigiQg2g3hihNQi/iKhyhuIgkghQijiRiDiYQiCiZiHilIgmguQhdh3g6g2QhRhdhLgsQhVgzhtgPIgDAAQjEgZjtANIgCAAIjEAMIHEkgIAYgLQAtgSA4gIQAygIA5ABQDRACD/BvQBHAeA/BgQAOARAOAXQAwBDA3BvQBOCjA3BTQA4BmA5BDQAOAQAOANQBqBqChBrQBcBJDNB9QCUBgBRBPIAYAUQBtBgAjBiQAzCSAVCHQAPBcgBBdQAABBgKBlIgHBRQgEAzgBAmQgDDFA/CqQARArATApQAXAtAYAiIAMA9IrTDTg");
	this.shape_202.setTransform(1166.8,860.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFB69F").s().p("AJ6ZkIg6ieQgMghgNgaIgGgTIgDgQQgIgggIgVQgFg/ABgxIABgOQADhrAVhcQAUhYAshoIAag2IAEgHQArhIAWgnQBYhZAthPQAdg0AQgyQAfhng6hbQgQgfghgjQgyg5hehRQixiLh3h6IgkghQidiUiHiWQiGiXiPidIgogsQhfhvhAg0QhUhWhQgqQhWgwhtgPIgDAAQjEgZjtANIgCAAIjEAMIGbkJIAqgVIAZgKQAtgRA3gHQA0gIA4ABQDUADD9BqQBJAdBDBZQAOARAPAVQA2BAA7BoQBUCZBABVQA7BhA8BEQAOAQAOANQBsBtCaBuQBfBSC9CAQCLBlBPBWIAVAVQBnBjAhBlQAxCRAVCJQANBaAABgQgBBCgIBkIgGBRQgFAzAAAnQgBDEA/CpQASAsAUAoQAYAtAXAhIAAA6IrUDTg");
	this.shape_203.setTransform(1166.4,861);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFB69F").s().p("AJ0ZYIg6ieQgMgigOgZIgEgTIgEgQQgGgggHgWQgEg/ABgxIABgOQAEhtAVhaQAThWAuhqIAbg2IADgHQAuhFAXgoQBZhZArhQQAcg1APgyQAehog0hbQgPghgdgkQgvg8hahVQikiMh7iEIgjgkQiZiWiLiUQiJiUiXiVIgrgqQhhhnhHgzQhXhPhTgoQhYgshsgPIgDAAQjEgajuANIgBAAIjFANIGakIIAsgVIAagJQAugPA3gHQAzgHA4ABQDYADD6BlQBMAdBGBSQAQAQAQATQA8A+A/BhQBbCOBHBXQA9BdA/BFIAcAdQBvBvCSBxQBiBbCvCDQCCBqBLBdIAVAXQBdBmAhBnQAwCRATCLQANBZgBBiQAABDgIBiIgFBSQgEAyAAAnQAADEBBCqQATAsAUAnQAYAtAYAhQgGAegHAXIrUDTg");
	this.shape_204.setTransform(1166.6,861.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFB69F").s().p("AJvZLIg6ieQgNgjgOgYIgEgTIgDgQQgGgfgFgYQgDg/ABgxIABgOQAFhvAUhYQAThTAxhsIAag3IAEgIQAvhAAbgqQBYhaAohQQAbg2AOgyQAdhpgthcQgNgigaglQgsg+hWhaQiWiMiAiQIgjglIkjkrQiNiRidiNIgugoQhjhfhPgyQhahIhVgmQhbgphrgPIgDAAQjEgZjuANIgBAAIjFAMIGakHIADgCIArgSIAZgIQAvgOA2gGQA0gGA4ABQDcADD3BgQBNAeBKBLQAQAOASASQBDA7BDBbQBgCCBQBZQBABYBBBHIAcAdQByBxCKB0QBlBkCgCGQB6BuBIBlIATAZQBVBoAhBrQAsCRATCMQAMBXAABkQgBBFgGBhIgFBRQgEAyACAoQAADEBDCpQATAsAVAnQAYAsAYAhQgNAbgNAVIrUDUg");
	this.shape_205.setTransform(1166.9,861.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFB69F").s().p("AJpY/Ig6ieQgNgkgOgWIgEgUIgCgQIgJg3QgChAACgxIAAgOQAGhwAUhXQAThRAyhuIAag3IAFgIQAvg9AegqQBYhcAmhRQAag2AOgyQAbhqglhcQgNgkgXgmQgohAhThfQiJiMiDicIgigmQiQiciUiQQiPiOimiGIgwgmQhlhXhWgwQhchBhZgjQhegnhpgOIgDAAQjFgajtANIgCAAIjEANIGZkIIAvgRIAagIQAvgMA2gGQA0gFA4AAQDfAED1BcQBQAdBNBEQASANASARQBJA4BIBUQBnB4BWBbQBDBTBEBHIAcAeQBzBzCFB3QBnBtCRCKQBxByBFBtIARAZQBOBrAfBvQAsCQAQCOQAMBVAABnQAABFgGBgIgEBSQgDAxABApQACDEBFCoQATAtAVAmQAZAsAYAgQgSAZgUATIrWDUg");
	this.shape_206.setTransform(1167.1,862.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFB69F").s().p("AJkYyIg6idQgOgmgOgVIgEgTIgCgQIgGg5QgBg/ACgxIAAgOQAGhyAVhVQAThPAzhwIAbg4IAEgHQAxg7AhgrQBXhcAlhSQAYg2ANgzQAbhqgfhdQgLgmgVgmQglhDhOhkQh7iMiIinIgigoQiLifiXiOQiViLirh+IgzgkQhohPhcguQhfg7hdggQhfgkhpgOIgDAAQjEgajvANIgBAAIjFANIGakIIAwgPIAagIQAwgKA2gGQA0gEA3ABQDkADDxBXQBTAdBQA9QATANATAPQBOA2BOBMQBsBuBfBcQBGBPBGBJIAcAdQB2B2B9B5QBqB2CDCNQBoB4BBB0IAQAaQBGBuAfByQAoCPARCQQAKBUAABpQAABHgEBeIgEBSQgDAwACAqQAEDEBGCoQAUAtAVAlQAaAsAYAgQgaAWgaASIrVDUg");
	this.shape_207.setTransform(1167.3,862.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFB69F").s().p("AJeYmIg6ieQgOgmgPgUIgDgUIgBgQIgEg5QgBg/ACgyIABgNQAHh0AVhUQAShMA1hzIAcg3IADgIQAzg3AjgsQBXhdAjhTQAXg3ANgzQAZhrgZheQgIgngTgnQghhFhKhoIj6k/IghgpQiHiiiciMQiXiJizh2Ig1giQhrhHhigsQhjg0hggeQhighhngOIgDAAQjFgajuANIgBAAIjFANIGakIIADgCIAtgLIAbgHQAxgKA1gEQA0gEA4ABQDnADDuBTQBWAdBSA2IAqAZQBTAzBTBGQByBjBnBeICRCUIAdAdQB4B4B1B8QBtCAB0CQQBfB8A+B8IAPAbQA9BxAfB1QAmCPAQCSQAJBSAABrQABBIgEBdIgDBSQgCAvABArQAFDEBICoQAVAsAVAmQAaAsAZAfQggATghAQIrVDUg");
	this.shape_208.setTransform(1167.6,863);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFB69F").s().p("AJZYZIg7ieQgNgngQgSIgDgUIAAgQIgDg6IAEhxIABgOQAHh2AVhRQAShKA3h1IAbg4IAEgIQA0gzAngtQBWhfAhhTQAVg3AMg0QAZhsgTheQgHgpgPgoQgehHhGhsQhiiOiPi+IghgqQiCikigiKQibiHi6huIg3gfQhug/hpgrQhlgthjgdQhlgdhngOIgCAAQjFgajuANIgBAAIjFANIGakJIADgBIAvgKIAagFQAygJA1gDQA0gEA3ABQDrAEDsBOQBXAdBWAuIAsAXQBaAwBXBAQB4BXBvBhQBMBGBKBKIAdAdQB6B7BuB/QBwCIBlCUQBXCBA7CDIANAdQA2BzAdB4QAkCPAPCTQAHBQACBuQAABJgDBbIgCBTQgCAvACAsQAGDDBKCnQAVAtAWAlQAaAsAaAeQgnARgnAPIrXDUg");
	this.shape_209.setTransform(1167.8,863.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137}]}).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_166).wait(29).to({_off:false},0).to({_off:true},1).wait(75).to({_off:false},0).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.shape_199).wait(62).to({_off:false},0).wait(10).to({_off:true},1).wait(1).to({_off:false},0).wait(19).to({_off:true},1).wait(112));

	// Layer 15
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFB69F").s().p("AF/IHQhQhpghgmIgPgPQgXgVgagJQgagXhegoQgpgRhqgpQhAgkhghGIgsggQgLgSgOgPQgZgbgfgRQh5hghYg/Qigh2hXAJIC0kdIAdAyQAiAyAdARQAZAND0CjQD7CgA2AQQAYAJB+AIQBhAEA/AmQBeA4BjBeIAcASQBRA3BMBDQBHBAAAAOQABBCgnAvQg/BLiVABQgeARgXAIQgRAHgSAAQgpAAgpgogAAQF7QgQgHgEgEIgCgCQAYAGAUAOQgGAAgQgHg");
	this.shape_210.setTransform(1017.8,934.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_210).wait(206));

	// cross section upper left
	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFB69F").s().p("Egk4AkYQiokFhSkjQirpmgIhnQghnOEmplQF1sXEalLQFhmdH/hzIDhAUQELBCDIDdQAFAEGUJJQDZE4C8g2QDFg1BWioQA0hiBfj+QA1huCDnDQBzmRBJhWQCgjJC8hmQEvikE8B/QFcCHB3D+QBuDdhaEGQhODZi0E7QiTEChjCDQisDyiCE7QjeIcBGHKImyDdQAMjEA+kWQB6oxDumlQBaigGVq4QDhl4AZhrQApiXhqjBQhzjYjRg2QjJgyjABvQh2BCilCoQheBeiPF4IjIIRQgyB7gIB2QgIBzgdBBQgdA9hNBCQhOA+gpB3QghBZgxDdQgtDAg1BmQhOCYighWQishag4kfQhHljkdnPQk3n7jlAEQkwAInCFUQoQGVjlI4Qj+JyBqLmQBrLlFMhuQHnilDYgQQELgZDxCMIgxCfQgdgIgkAEQhKAJghBJIyGFlQhChHhSiDg");
	this.shape_211.setTransform(726.9,958.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFB69F").s().p("EgkwAkeQgrg/glhAQg9hugvh1QgmhegchhQhCjqgqihQhDkAgEhCQgMiwAljHQAojdBlj9QAshvA4hyQBqjgBii6QC/ltCkjmQAug/Atg4QAlgsAmgpQBZhfBhhLQCpiFDFhPQBsgrB2gcIDeASIACAAQBxAbBlA2QCKBLB1B/QAGAECVDYID+FvQBVB6BSBEQB7BmBwgdQCQgjBVhiQAggkAYgsQAthQBHi3IAhhXQAjhIBEjWQAkhzAuifQAxiqAqhzQA3iYApgzQBqiIB1hZQA7guA+giQCbhWCegJQCWgKCaA8QCyBCB3BkQBxBfA8B6QBVCjgbC8QgJA/gVBBQgzCYhmDFQgtBXg4BhQhyDKhWB+QgXAigVAcQhxCfheC6QgzBlguBtQhUDKgrDAQhHE9ApEdImBDRIglATQAGi0AykAIADgRQAzjtBIjWQBikgCHj0QA9hvDHlVIDqmTQC8k7AyiCQAJgWAEgQQAriZhli+QgqhVg5g7QhZheh9gkQg1gPg0gDQiPgJiMBNQg4AdhEA0QhKA5hWBWQgzAxhAB9Qg6BxhGCxIgYA7QhJC8hqEYIgKAbQgoBsgJBqQgIBygdBBQgdA+hLBBIgBABQhMA/goB3IgOAmQgVBIgcB2IgUBRQgLAsgLAnQglB+gnBPIgCAFQhNCVichNQgOgHgOgIQh2hHg4iyQgOgpgKgvQgUhXgjhiQhEjCh5jlQg0hjhAhpQjvmKjChbQg0gXgxgBQkLgGl3EAQg0Ajg3AoQjkCtiuDTQjfEMiDFEQhcDiguDyQhCFZAcF1QAGBYAMBZQAnEmBLCiQBxDyDCg8IA0gPID+hKQD9hJCNgMQCygRClA2QBUAbBRAuIgrCbQgbgHgiAEQhAAJgfA9IgFAMIiUAxIhAAUQhFAVhFAXIskD3QhDhEhTh9g");
	this.shape_212.setTransform(727,958.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFB69F").s().p("EgkoAkjQgrg7gng+Qg9htgxh1QgmhegchhQhEjogqiiQhCj9gEhGQgKivAmjHQApjaBnj/QAshvA4hyQBrjgBhi5QC9lrCijqIBah4QAkgsAlgqQBYhgBehMQCniIDDhQQBrgtB1gcIDeAPIACAAQBxAaBlA1QCLBKB1B9QAJAHCUDTID9FwQBVB5BRBFQB6BnBwgaQCPgeBWhgQAggkAZgrQAwhPBHi1IAhhXQAjhJBDjUQAlhyAvigQAwioAqh1QA2iYAqg0QBoiLBzhYQA7gtA9gjQCahXCdgMQCWgMCZA5QCyBBB5BjQByBdA9B4QBXCigYC7QgIA+gUBCQgvCXhlDGQgtBXg3BhQhxDIhXCAQgXAigVAcQhwChheC4Qg0BkguBtQhUDJgtDAQhJE8AnEdIl0DZIglATQgCisAqj0IAEgSQAyjqBHjYQBhkhCGj0QA+hyDDlRIDrmTQC6k4A1iFQAJgXAEgQQAtiZhgi8QgnhWg3g7QhVheh6gnQg0gQgzgEQiNgNiLBHQg5AbhDAyQhLA2hYBUQg0AwhBB7Qg7BvhJCvIgYA7QhJC4hrEbIgLAbQgnBsgKBqQgJBwgdBDQgdA+hKBCIgBABQhLBAgnB2IgNAmQgVBJgcB0IgUBSQgMArgMAnQgmB8goBQIgCAFQhLCTiYhFQgOgGgNgHQh0g/g5ipQgNgmgLgtQgWhSglhgQhHjAh3jmQg0hjg/hpQjqmGjChjQg0gZgwgBQkMgUlxD4Qg0Aig3AoQjjCqivDWQjcELiFFGQhcDggwDzQhEFYAYF0QAFBYALBZQAjElBHCiQBsDzC9g1IAzgNQCFghB3gjQD8hKCOgMQCzgTCjA0QBUAaBSAtIgkCXQgagGggAEQg8AJgcA9IgFALIiRA1IhAASQhFAVhEAZIsjD3QhEhAhVh5g");
	this.shape_213.setTransform(727.1,958);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFB69F").s().p("EgkgAkpQgtg5gog6Qg9hsgxh2QgnhdgdhhQhEjmgrikQhCj6gChJQgKiuAojIQApjXBpkBQAthuA3hyQBsjhBgi4QC7loChjuIBYh6QAjgsAlgqQBWhiBdhMQCjiMDBhRQBqguB1gdIDeAMIACAAQBwAaBmAzQCLBJB2B9QAMAICRDPID+FwQBUB4BSBIQB4BnBvgXQCOgaBXheQAhgiAZgrQAzhPBHizIAhhWQAkhLBDjSQAkhwAviiQAwinArh3QA1iWApg1QBniOByhXQA6guA9gjQCYhYCdgOQCVgOCZA3QCyA9B6BiQBzBcA+B3QBaCggVC6QgGA+gTBBQgtCZhkDFQgsBXg3BhQhvDHhYCCQgXAigVAcQhxCihdC2Qg0BkgvBtQhVDHgtDBQhLE7AkEdQi3BwixBvIgkATQgIiiAijpIADgRQAxjqBHjZQBfkhCFj0QA/h3DBlMIDqmTQC3kzA5iLQAJgWAEgQQAviahbi5QgjhXg1g6QhRhfh4grQgzgQgygHQiLgRiKBDQg5AZhEAvQhMA0hXBRQg2AvhCB5Qg9BthKCuIgZA7QhKC1hsEdIgLAbQgnBrgLBqQgKBwgdBDQgdA+hIBCIgBABQhKBCgmB1IgNAnQgVBKgcBzIgVBRQgMAqgNAnQgnB6goBRIgCAFQhJCRiVg8QgOgFgNgHQhxg2g4igQgOgjgMgrQgXhNgohgQhLi7h0jpQgzhjg+hqQjmmCjChqQgzgZgvgDQkMghlsDvQg1Ahg3AoQjhCniwDaQjaEKiGFHQhcDggyDyQhGFYAUFzQAEBXAKBZQAfEjBEClQBnDyC3guIAygLQCCgbB4gjQD7hKCOgNQC0gUCiAyQBUAZBSAsIgeCTQgXgGgeAEQg5AKgZA8IgFALIiNA4IhAASQhGAUhCAaIsjD3QhGg9hVhzg");
	this.shape_214.setTransform(727.2,957.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFB69F").s().p("EgkYAkvQgug2gog4Qg+hqgzh3QgnhdgdhgQhGjlgrikQhBj4gChMQgIiuApjHQAqjVBrkCQAthvA3hxQBsjiBgi2QC5lmCfjyQAqg6AthBQAigsAlgsQBUhjBahMQChiPC+hTQBqgvB1geIDdAKIACAAQBwAZBmAyQCMBHB3B8QAOAKCPDMID/FvQBTB4BRBJQB4BoBtgVQCOgVBYhbQAigiAZgqQA2hOBGiyIAihWQAkhLBDjRQAkhvAwijQAvilArh5QA1iVApg3QBmiPBvhXQA5guA9gkQCXhaCcgPQCVgQCZA0QCxA7B8BhQBzBaBAB1QBcCfgSC4QgFA/gSBBQgpCZhjDFQgsBXg2BiQhuDEhZCFIgrA+QhxCkheCzQg0BkgvBsQhWDHgvDAQhME7AiEdQixB0iqByIglATQgOiaAajdIADgRQAvjoBHjbQBekhCEj1QBAh6C+lIIDqmTQC1kvA8iPIANgmQAxibhWi3QgghXgzg6QhNhfh1guQgygSgygIQiIgViKA+Qg5AXhEAtQhNAxhYBPQg3AuhCB2Qg/BshNCsIgZA6QhKCyhtEfIgLAbQgnBrgMBrQgLBugdBEQgdA/hHBCIgBABQhJBEglB0IgMAnQgVBLgcBxIgVBRQgNAqgOAmQgoB4goBSIgCAFQhICPiRgzIgagLQhvgtg4iXQgPghgMgoQgZhJgqheQhOi4hzjqQgxhkg+hqQjhl+jDhyQgxgagvgEQkMgvlnDoQg1Agg3AnQjgClixDcQjXEJiIFJQhcDfgzDzQhIFXAPFxQADBYAJBYQAcEiBACmQBiDzCxgoIAwgJQCAgUB5gkQD6hKCPgOQC1gWCgAxQBVAYBRAqIgXCQQgVgGgcAFQg1AKgWA7IgFALIiKA7QgfAIghAJQhGAUhBAcIsiD2QhIg5hWhug");
	this.shape_215.setTransform(727.3,957.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFB69F").s().p("EgkQAk0Qgvgzgqg1Qg+hpgzh3QgohdgehfQhGjkgsimQhAj0gBhQQgIitArjHQArjSBskEQAuhvA2hwQBtjjBfi1QC4ljCcj2QApg4AthFQAigtAjgrQBThmBZhMQCeiSC7hVQBpgvB1gfQBsACBwAFIACAAQBxAYBmAxQCNBGB3B6QARANCNDHID+FwQBTB3BSBKQB2BpBsgRQCNgRBahaQAhghAagpQA5hNBGiwIAihWQAkhMBDjQQAkhtAwikQAwikArh6QA0iVAog4QBliSBthVQA5gvA8gkQCWhbCcgSQCVgSCYAyQCwA4B+BgQB0BZBBB0QBfCcgPC4QgEA+gQBBQgnCahhDEQgsBYg2BhQhtDEhZCGQgXAigUAcQhyCmhdCxQg1BjgvBsQhWDGgwDAQhOE7AfEcQisB4iiB1IglATQgViQASjSIADgRQAujnBHjcQBdkhCCj1QBBh/C7lEIDqmSQCykrBAiTIANgmQAzichQi1QgehYgwg5QhKhghygxQgxgTgxgJQiGgaiJA5Qg5AVhEArQhOAuhZBNQg4AthEB0QhABphOCrIgbA6QhKCvhuEhIgLAbQgnBrgNBrQgLBtgeBFQgdA/hFBDIgBABQhIBEgkB0IgMAnIgwC8IgXBQQgNAqgPAlQgpB2goBUIgCAFQhGCNiOgrIgZgJQhtglg4iOQgPgegNgmQgahEgthdQhRi1hxjsQgwhkg9hqQjdl6jCh6QgxgagugGQkNg7lhDfQg1Afg4AnQjeChiyDgQjVEIiJFKQhcDfg1DzQhLFWALFwQADBYAHBYQAYEhA9CnQBdDzCsgiIAvgGQB8gOB7glQD5hJCQgQQC1gWCfAuQBVAXBSApIgRCMQgUgFgaAEQgwALgUA6IgFAMIiGA+QggAHghAJQhGAUg/AdIsiD2QhJg2hXhpg");
	this.shape_216.setTransform(727.5,957.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFB69F").s().p("EgkIAk6QgwgwgrgzQg+hog0h3QgphcgehfQhIjigsinQg/jyAAhTQgHisAtjHQArjQBukFQAuhvA2hwQBujjBdi1QC3lgCbj7QAng2AshHQAigtAjgtQBRhnBWhMQCciWC5hVQBngxB1ggQBsABBwADIACAAQBxAYBmAvQCOBFB3B5QAUAPCLDDID/FwQBSB2BRBMQB2BqBrgOQCMgNBahXQAjghAagoQA7hNBGiuQARgnASgvQAkhNBDjOQAjhsAyilQAviiArh8QAziUAog5QBkiVBrhUQA5gvA7glQCVhcCbgUQCUgUCYAvQCxA2B/BfQB1BYBCBxQBhCcgMC2QgCA+gQBBQgjCahgDFQgsBXg2BiQhrDBhaCJIgrA+QhyCnhdCvQg1BjgvBsQhXDEgxDBQhQE6AdEbQimB8icB5IglATQgbiIAKjGIADgRQAtjlBGjeQBckhCBj2QBBiCC5k/IDqmTQCvknBDiXQAJgWAFgQQA1idhLiyQgbhZgug5QhFhhhxg0QgvgUgwgKQiEgeiIA0Qg6AShEApQhPAshZBKQg6AshEByQhCBohQCpIgbA5QhMCshvEkIgKAbQgnBqgOBrQgMBsgeBGQgdA/hEBEIgBABQhGBFgkB0IgMAmIgvC8QgKAmgOAqQgNApgQAlQgrB0gnBVIgCAFQhFCLiKgjIgZgHQhqgcg4iFQgPgbgOgkQgchAgvhbQhViyhujtQgwhkg8hrQjYl2jDiBQgwgcgtgHQkNhJlcDXQg1Aeg5AnQjcCfizDjQjTEHiKFMQhcDdg2DzQhNFWAHFvQABBXAGBYQAVEgA5CoQBYD0CmgcIAugEQB5gHB8gmQD4hJCRgRQC2gXCdAsQBVAVBSAoIgKCIQgSgEgYAFQgsALgRA5IgFAMIiDBBIhAAPQhHATg+AgIshD2QhLgzhYhkg");
	this.shape_217.setTransform(727.6,957.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFB69F").s().p("EgkAAlAQgxgugsgvQg+hng2h3QgphcgfhfQhIjggtipQg/jvABhWQgGirAujIQAsjNBwkHQAvhvA2hvQBujkBdizQC0leCZj/QAmg0AthLQAggtAjgtQBPhpBVhNQCYiYC3hXQBngyB0ghQBrgBBxACIACAAQBwAYBnAuQCOBDB4B5QAXAQCJC/ID+FwQBSB1BSBOQB0BqBqgLQCMgIBbhVQAjggAbgnQA+hMBFisQARgnASgvQAkhOBDjNQAkhqAxinQAvigArh/QAziSAog7QBjiXBohTQA5gwA7glQCUhdCZgWQCVgXCXAuQCwAzCBBdQB2BXBEBwQBiCagIC1QgBA+gOBAQghCbhfDFQgrBXg2BiQhpDAhbCLQgWAhgVAdQhyCphdCsQg1BjgwBrQhXDEgzDBQhRE5AaEbQihB/iUB9IglASQgih+ACi6IADgSQAsjjBGjgQBakhCAj2QBCiHC2k6IDqmTQCtkjBGicIAPglQA3iehHiwQgXhZgsg5QhChhhug3QgugVgvgMQiCgjiHAwQg6AQhEAmQhQAphaBJQg7ArhFBvQhDBmhTCoIgcA5QhMCohwEnIgKAbQgnBpgPBrQgNBrgeBHQgdBAhCBEIgBABQhFBHgjByIgMAnQgSBPgdBsQgKAmgOApQgOAqgQAlQgsBxgoBWIgCAFQhECJiGgaIgYgFQhogUg4h8QgPgZgPghQgdg8gyhZQhYiuhsjwQgvhkg7hrQjTlzjEiIQgvgcgtgJQkNhWlWDPQg2Acg4AnQjbCci0DnQjREFiLFOQhcDdg4DyQhPFWACFtQAABXAGBYQAREfA1CpQBTD0ChgVIAsgCQB3gBB9gmQD2hJCSgSQC3gZCcArQBVAUBSAnIgDCEQgQgEgWAFQgpAMgOA4IgFAMIiABEQgfAGghAJQhGASg+AhIsgD2QhMgvhZhfg");
	this.shape_218.setTransform(727.7,957.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFB69F").s().p("Egj5AlGQgxgrgugtQg+hlg3h4QgphcggheQhJjfgtipQg+jtABhZQgEirAvjHQAtjLBxkIQAvhvA2hvQBvjkBcizQCylbCYkDQAkgyAthOIBBhbQBPhqBShOQCWicC0hYQBmgzB0ghQBrgDBxABIACAAQBwAXBnAsQCPBDB4B3QAaASCHC7ID+FxQBRB0BSBQQBzBqBpgIQCLgDBchTQAkgfAbgnQBBhMBFiqQARgnASgvQAlhOBCjMQAkhpAyioQAvifAriAQAziRAng8QBhiaBnhSQA4gwA7gmQCSheCZgYQCUgZCYArQCvAwCDBdQB2BVBFBvQBlCYgFC0QAAA+gNBAQgeCcheDEQgqBXg2BjQhoC+hbCMIgrA/QhyCqhdCrQg1BigxBrQhXDDg0DAQhTE5AYEaQicCEiNB/IglATQgoh1gHivIAEgSQAqjhBFjiQBakiB+j1QBDiLC0k2IDpmTQCrkeBJihIAPglQA5ifhBitQgUhagqg5Qg+hhhsg6QgtgXgugNQiAgniGArQg6AOhFAkQhRAmhaBHQg8AphGBtQhFBkhVCnIgcA4QhNCmhwEoIgLAbQgnBpgQBsQgNBqgfBIQgcA/hBBFIgBABQhEBIgiByIgLAmQgTBRgcBqQgLAmgOApQgOApgSAlQgtBvgoBYIgCAFQhCCGiDgRIgXgEQhmgMg3hyQgQgWgPgfIhUiPQhbirhqjyQguhkg6hrQjPlvjDiQQgvgdgsgJQkNhklRDHQg2Abg5AmQjZCZi1DqQjPEFiMFPQhcDcg6DzQhSFVgBFsQgBBXAEBXQAOEeAxCrQBOD0CcgPIArAAQBzAGB/gmQD1hKCSgTQC4gaCbAoQBVAUBTAlIADCBQgPgEgTAGQglAMgLA3IgFAMIh9BHQgfAGghAIQhHASg8AjIsgD2QhOgshahag");
	this.shape_219.setTransform(727.9,957.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFB69F").s().p("EgjxAlNQgzgpgugqQg+hkg5h4QgphcghheQhKjdgtirQg+jpAChdQgDipAxjIQAtjIB0kKQAvhvA1huQBwjlBbiyQCxlYCWkIQAigwAthRQAfgtAhgvQBNhsBQhOQCUifCxhZQBlg1B0giQBqgEBxgBIACAAQBwAXBoArQCPBBB5B2QAdAUCEC4ID/FwQBRB0BRBRQByBrBogFQCLABBchRQAkgeAcgmQBEhLBFioIAjhWQAlhPBDjLQAjhnAzipQAuidAsiCQAyiRAmg9QBhicBkhSQA4gwA6gmQCShgCYgaQCTgbCYApQCuAuCFBbQB3BUBHBtQBnCWgCCzQABA+gMBAQgaCchdDEQgqBYg2BiQhnC9hcCPQgVAhgVAdQhzCshcCoQg2BigxBrQhYDCg1DBQhUE3AVEaQiWCIiGCCIglATQgvhsgOijIADgSQApjgBFjkQBYkiB+j1QBDiPCxkxIDqmTQCokbBMikQAKgVAFgRQA7ifg8irQgRhagng5Qg6hihqg9QgsgYgugPQh9griFAmQg6AMhFAiQhSAjhbBFQg+AohHBrQhFBihYCmIgcA3QhOCjhxEqIgLAcQgmBngSBsQgOBpgfBJQgcBAg/BFIgBABQhEBJghByIgKAmQgSBTgdBoQgKAlgPApQgPApgSAlQgvBsgoBZIgCAFQhBCFh/gJIgWgCQhjgDg4hqQgQgTgQgdQghgyg3hXQheiohpjzQgshlg5hrQjKlrjEiYQgugdgrgLQkOhxlMC/Qg2Aag5AmQjYCWi1DtQjNEEiNFQQhdDcg7DzQhUFVgGFqQgCBXADBWQAKEdAvCtQBJD0CVgIIAqACQBxAMCAgnQD0hJCTgUQC4gcCZAnQBWASBTAkIAJB9QgMgDgSAGQghAMgIA2IgFAMIh5BLQggAFghAIQhHASg7AkIsfD1QhPgohbhUg");
	this.shape_220.setTransform(728,957.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFB69F").s().p("EgjqAlTQg0gmgvgnQg/hjg5h5QgqhbghheQhLjbguisQg9jnADhfQgCipAzjIQAtjFB1kMQAwhvA1htQBwjnBbiwQCvlWCUkLQAhgvAthUIA/hdQBLhtBOhPQCRiiCvhbQBjg1B0gjQBqgGBxgCIACAAQBwAXBoApQCQBAB5B1QAgAWCCCzID/FxQBQBzBSBTQBwBrBngBQCKAFBehPQAlgdAcglQBGhLBGimQAQgnATgvQAlhQBCjJQAkhmAzirQAuibAsiEQAxiPAng/QBfifBihQQA3gxA6gnQCQhhCYgbQCTgeCXAnQCvArCGBaQB4BTBHBsQBqCUABCxQADA+gLBAQgYCdhbDEQgqBYg1BiQhmC8hcCQIgqA+QhzCuhcCmQg3BhgxBrQhZDBg2DBQhWE3ATEaQiRCLh/CGIgkASQg2hjgXiXIADgSQApjfBEjlQBXkiB8j2QBFiTCuktIDpmTQCmkWBQipIAPglQA9ihg3ioQgOhbglg4Qg2hjhnhAQgrgZgtgRQh7gviFAiQg6AJhFAgQhTAghbBDQg/AnhIBoQhHBhhaCkIgdA3QhOCfhzEuIgKAbQgnBngSBsQgPBogfBKQgcBAg+BFIgBABQhCBLggBxIgLAmQgRBUgdBnQgLAlgPAoQgPAogTAlIhZDFIgCAFQg/CCh7AAIgWgBQhhAGg3hhQgQgQgRgaQgjgug5hWQhiikhmj1Qgrhlg5hsQjFlnjFifQgtgegqgMQkOh/lHC3Qg2AZg5AlQjXCUi2DwQjKEDiPFSQhcDbg+DzQhVFUgKFpQgDBXABBWQAHEbArCuQBED1CQgCIAoAFQBuASCBgnQDzhKCUgVQC5gcCYAkQBVARBTAjQAJA6AHA/QgKgDgQAHQgdANgFA1IgFALIh2BOQgfAFgiAIQhHARg6AmIseD1QhRglhchPg");
	this.shape_221.setTransform(728.2,957.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFB69F").s().p("EgjjAlZQg0gjgxglQg/hhg6h5QgrhbghheQhMjZguitQg9jlAEhjQgBioA0jIQAujCB3kOQAwhuA1htQBxjnBZivQCtlUCTkPQAggtAshYIA+hdQBKhvBMhPQCOimCshcQBjg2B0gkQBpgIBxgCIACAAQBwAVBpAoQCQA/B6B0QAiAYCACvIEAFxQBPByBSBVQBvBsBmACQCJAJBfhMQAlgdAdgkQBJhKBFilQARgmASgwQAmhRBCjHQAjhkA0isQAuibAsiFQAxiOAmhBQBeihBghPQA3gxA5goQCPhiCXgeQCTgfCXAkQCuAoCHBaQB5BRBJBqQBsCTAFCwQADA+gJBAQgVCdhaDEQgpBYg1BjQhlC5hdCTIgqA+QhzCwhcCjQg3BhgyBrQhYC/g4DBQhYE3AREZQiMCPh3CJIglATQg8hagfiMIADgSQAnjdBEjnQBWkiB7j2QBFiXCskpIDpmTQCjkSBUitIAPglQA/iigyilQgLhcgjg4QgyhjhlhEQgpgZgtgTQh5gziDAcQg7AIhFAdQhUAehcBAQhAAnhJBlQhIBfhcCjIgeA2QhPCdhzEvIgLAbQgmBngUBtQgPBngfBKQgcBBg9BFIgBABQhBBMgfBxIgKAmQgRBVgdBlQgLAlgQAoQgQAogTAkQgyBpgoBbIgCAFQg+CAh3AJIgVABQhfAOg3hYQgRgNgRgYQglgpg7hWQhmighkj3Qgqhlg4hsQjAljjFinQgsgfgqgNQkOiMlBCuQg3AYg6AlQjUCRi4D0QjIEBiQFUQhcDag/DzQhYFUgOFnQgEBXAABWQADEaAnCwQA/D0CLAFIAnAHQBrAZCDgoQDxhKCUgWQC7gdCWAiQBWAPBTAjQAMA3AKA9QgIgCgOAHQgZAOgDA0IgFALIhyBRQgfAEgiAIQhHARg5AoIsdD1QhTgihdhKg");
	this.shape_222.setTransform(728.4,957.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFB69F").s().p("EgjbAlfQg2gggxgiQg/hgg8h6QgrhagihdQhNjYgvivQg8jhAFhmQAAioA2jHQAujAB5kQQAxhuA1htQBxjnBZiuQCrlRCQkUQAfgrAthaIA8hfQBIhxBKhPQCLipCqhdQBig4B0gkQBogKBygDIACAAQBwAVBoAmQCRA+B7BzQAlAaB+CrIEAFxQBOBxBSBWQBuBtBlAFQCJAOBghLQAlgcAegjQBLhJBFijQARgmASgwQAnhSBCjGQAjhiA0iuQAtiYAtiIQAwiNAmhCQBdijBehPQA2gxA5goQCOhjCWggQCTgiCWAiQCtAmCKBYQB5BQBLBpQBuCQAICwQAEA9gIBAQgSCehZDEQgpBXg0BjQhjC5heCUIgqA+QhzCyhcChQg3BggzBrQhZC+g5DBQhZE2AOEZQiGCThwCNIglASQhDhRgmiAIACgSQAmjcBEjoQBVkjB5j2QBHibCokkIDpmTQChkOBXiyIAPglQBCiigtijQgIhcghg4QgvhkhhhHQgpgagsgUQh2g4iDAYQg7AFhFAbQhVAbhcA+QhCAmhKBjQhKBdheChIgfA2QhOCah1ExIgLAbQgmBngVBtQgQBlgfBMQgcBBg7BGIgBABQhABNgeBwIgKAmQgRBXgcBjQgLAkgRAoQgQAngVAlQgzBmgoBdIgCAFQg8B+h0ARIgVACQhcAXg3hPQgRgKgSgWQgmgkg+hVQhqichhj5Qgphmg3hsQi8lfjFivQgrgfgpgPQkPiZk8CmQg3AXg5AlQjUCOi4D3QjFEAiSFWQhcDZhBDzQhaFTgTFmQgFBXAABWQgBEZAkCxQA6D0CFAMIAlAJQBoAfCFgpQDwhJCVgXQC7gfCVAgQBWAOBTAiQAPA1AOA7QgHgBgLAHQgVAOAAAzIgFAMIhwBUQgeADgiAIQhHARg4ApIsdD1QhUgfhehFg");
	this.shape_223.setTransform(728.6,956.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFB69F").s().p("EgjUAlmQg3gegygfQg/hfg9h6QgshagihdQhOjWgviwQg8jfAGhpQABimA3jIQAvi+B7kRQAxhuA1hsQBxjoBYitIE5pnQAdgpAshdIA7hfQBHhzBIhPQCIitCoheQBhg5BzgmQBogLBygFIACAAQBwAVBpAlQCRA9B7BxQAoAcB8CoIEAFxQBOBwBSBYQBsBuBkAHQCJATBghJQAmgbAfgjQBOhIBEiiQARglATgwQAnhTBBjEQAjhhA1ivQAtiXAtiJQAviNAmhDQBcilBbhOQA2gyA5goQCNhlCVgiQCSgjCWAfQCtAjCLBXQB7BPBMBnQBwCPALCuQAGA+gHA/QgPCfhYDDQgoBYg1BjQhhC3hfCWIgpA/Qh0CzhbCeQg4BhgzBqQhaC9g6DCQhbE1AMEYQiBCXhpCQIglASQhJhHgvh2IADgRQAljbBDjqQBUkiB4j3QBHifCmkfIDpmTQCekKBai2IAQglQBEijgoihQgFhdgfg3QgqhlhghKQgngbgrgWQh1g8iCATQg6ADhGAZQhWAZhdA7QhDAlhLBhQhLBbhgCgIgfA1QhQCWh2E0IgKAcQgmBlgWBtQgRBlgfBMQgcBCg6BGIgBABQg+BPgeBvIgKAmQgQBYgcBiQgMAkgRAoQgRAmgVAkQg0BlgoBeIgCAFQg7B8hwAZIgUAEQhaAfg3hFQgRgIgTgUQgogfhAhUQhtiZhfj7Qgohlg3htQi3lbjFi2QgrgggogQQkPink2CeQg4AWg6AkQjRCLi6D7QjDD/iTFXQhcDZhDDzQhcFTgXFkQgGBXgBBVQgFEYAhCyQA1D1B/ASIAkALQBlAmCGgpQDvhKCWgYQC8ggCTAeQBWANBUAhQASAzARA5QgFAAgJAHQgRAPACAyIgFALIhsBYQgeACgiAIQhHAQg3ArIscD1QhWgchfg/g");
	this.shape_224.setTransform(728.8,956.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFB69F").s().p("EgjNAltQg3gbg0gcQg/heg+h7QgshZgjhdQhPjVgwiwQg7jcAHhtQABimA6jIQAvi6B9kTQAxhvA0hrQBzjpBXisQColMCNkcQAbgnAthhIA5hgQBGh0BFhQQCGivClhgQBgg6B0gmQBngNBygGIACAAQBwAUBpAjQCSA8B8BwQArAeB5CkQA5BPDHEiQBOBvBSBaQBrBuBjALQCIAXBhhGQAngbAegiQBRhIBFifQARgmATgvQAnhUBBjDQAjhgA2iwQAsiVAtiLQAviMAlhEQBbioBZhNQA2gyA4gpQCMhmCUgkQCSgmCWAdQCtAhCMBWQB7BOBOBlQByCNAOCtQAIA9gHBAQgLCfhXDEQgoBXg0BkQhgC1hgCYIgpA/Qh0C0hbCdQg4BggzBpQhaC9g8DBQhcE1AJEYQh8CahiCTIgkATQhQg/g3hpIADgSQAjjZBDjsQBTkiB3j3QBIijCjkbIDpmTQCbkGBei6IAQglQBFikgiieQgChegcg3QgnhlhdhNQgngdgqgXQhyhAiBAOQg7ABhGAWQhXAWhdA6QhFAjhLBfQhNBZhiCfIggA1QhQCTh3E2IgLAbQglBlgXBuQgSBjgfBNQgdBCg4BHIgBABQg9BQgdBuIgJAnQgQBZgcBgQgMAkgSAnQgRAmgWAkQg2BjgoBfIgCAFQg5B6hsAiIgUAFQhXAog3g9QgSgEgTgSQgpgbhEhSQhwiWhdj8Qgnhmg2htQiylXjFi+QgqghgogRQkPi0kxCWQg4AVg6AkQjQCIi7D+QjAD+iVFZQhcDXhEDzQhfFTgaFjQgIBWgCBVQgIEXAcC0QAwD1B6AYQARAIASAFQBiAtCHgqQDuhKCXgZQC8ghCSAcQBXAMBTAfQAWAxAUA4QgDAAgHAHQgNAPAFAyIgFALIhoBbQgfACgiAHQhIAQg1AsIscD1QhXgYhgg6g");
	this.shape_225.setTransform(729,956.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFB69F").s().p("EgjHAlzQg4gYg1gZQg/hdg/h7QgthZgjhcQhQjUgwiyQg6jZAHhwQADilA6jIQAxi4B+kUQAxhvA1hqQBzjqBWirQCmlJCLkgQAbgmAshkIA4hgQBEh3BEhPQCDizCihiQBfg7B0gnQBmgOBygHIACAAQBwATBqAiQCSA7B9BvQAtAgB4CfIEBFyQBMBuBSBcQBqBvBiANQCHAcBjhFQAmgZAgghQBThIBFieQARglATgvQAnhVBBjCQAjheA2ixQAsiUAuiNQAuiLAlhFQBZirBYhMQA1gyA3gpQCLhnCUgnQCSgnCVAaQCsAeCOBVQB8BMBPBkQB1CLARCtQAJA9gFA/QgJCghWDDQgnBYg0BjQhfC0hgCaQgVAigUAdQh0C2hbCaQg5BggzBpQhbC8g8DBQhfE0AIEYQh3CehbCXIgkASQhXg1g/hfIADgRQAijYBCjtQBSkjB2j3QBJinCgkXIDpmSQCZkCBhi/IAQglQBIilgeibQAChfgbg2QgjhmhahQQglgegqgZQhwhEiAAJQg7gBhGAUQhYAUheA3QhGAihNBdQhOBXhkCdIghA1QhQCPh4E5IgLAbQglBlgYBuQgTBigfBOQgcBCg3BHIgBABQg8BSgcBtIgJAnQgPBbgdBeQgMAjgSAoQgSAlgXAkQg3BhgoBgIgCAFQg3B3hpArIgTAHQhVAwg3gzQgSgCgTgPQgsgXhFhRQh0iShbj/Qgmhmg1htQiulTjFjGQgpghgngTQkQjBkrCOQg4AUg7AjQjOCFi8ECQi+D9iWFaQhcDXhGDzQhhFSgfFiQgIBWgEBVQgMEVAaC1QArD2B0AfQAQAIASAHQBfAzCIgrQDthJCXgaQC+gjCQAaQBXALBUAeQAZAvAXA2QgBABgFAHQgKAQAIAwIgFAMIhlBdQgeACgjAHQhHAQg0AtIsbD1QhZgVhig1g");
	this.shape_226.setTransform(729.2,956.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFB69F").s().p("EgjAAl6Qg5gWg2gWQg/hbhAh8QguhZgkhcQhRjRgwi0Qg6jWAJhzQADikA8jJQAxi1CAkWQAyhvA0hqQB0jqBViqQCklGCKklQAZgkAthnIA2hhQBDh4BBhQQCAi2ChhjQBeg8BzgoQBmgQBygIIACAAQBwATBqAgQCTA6B9BuQAwAhB2CcIEBFyQBLBtBSBdQBpBwBhARQCHAgBjhDQAngZAgggQBXhHBEicQARgkATgwQAohWBBjAQAjhdA2iyQAsiTAuiOQAtiKAkhHQBZitBVhLQA1gzA3gqQCKhoCTgoQCRgqCVAYQCsAbCQBVQB9BKBQBiQB2CKAVCrQAKA9gEBAQgGCghUDDQgnBXg0BkQhdCyhhCdIgoA+Qh2C4haCYQg5Bfg0BpQhbC7g+DCQhgEzAFEXQhxCihUCaIgkASQhegshGhTIACgRQAhjWBCjwQBRkiB0j4QBKirCdkSIDqmTQCWj9BkjDIARglQBJimgYiZQAEhfgYg2QgfhnhYhTQgkgfgpgaQhuhJh/AFQg7gEhGASQhZARhfA1QhHAhhOBaQhPBWhmCcIgiA0QhRCMh5E7IgKAcQgmBkgZBuQgTBhggBPQgcBCg1BIIgBABQg7BSgbBuIgJAmQgOBcgdBcQgMAkgTAnQgSAlgYAjQg4BfgpBiIgCAFQg2B1hlA0IgSAIQhTA5g2grQgTABgUgNQgtgShIhPQh3iPhZkBQglhmg0htQiplQjGjNQgogigngUQkPjPknCGQg4ATg6AjQjOCCi8EFQi8D8iXFcQhcDWhIDzQhjFSgjFgQgJBWgFBVQgQEUAWC2QAmD2BvAlQAPAKARAIQBdA5CJgrQDshJCXgcQC/gjCPAXQBXAKBUAdQAcAtAbA0QABABgEAIQgFAQALAwIgFALIhiBhQgfABgiAHQhIAPgzAwIsaD0QhagShjgvg");
	this.shape_227.setTransform(729.5,956.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFB69F").s().p("Egi5AmAQg6gSg3gUQhAhahBh8QgthYglhcQhSjQgxi0Qg5jUAJh2QAFikA+jIQAxizCCkXQAyhvA0hqQB0jsBVinQCilECIkpQAXgiAthqIA1hiQBCh6A/hRQB9i5CehkQBdg9BzgpQBmgSBygJIACAAQBwASBqAgQCUA4B9BtQA0AjBzCYIEBFyQBLBsBSBfQBoBwBgAUQCFAlBlhAQAogZAggfQBZhGBEiaQARglAUgwQAnhXBCi/QAihbA3izQAsiRAuiRQAsiIAkhJQBYivBThKQA0g0A3gqQCIhpCTgqQCRgtCUAWQCsAZCRBTQB+BKBRBgQB5CIAYCqQALA9gCA/QgDChhUDDQgmBXgzBlQhcCwhiCeIgoA/Qh2C6haCVQg5Bfg1BpQhbC5g/DCQhhEzACEXQhsClhMCdIglATQhkgjhOhHIACgSQAgjVBBjxQBQkiBzj4QBKivCbkOQBMiFCdkOQCUj5BojIIARglQBLimgTiXQAHhfgVg2QgchnhWhXQgjgggngbQhshNh/AAQg7gGhGAPQhaAOhfAzQhJAghOBYQhRBUhpCaIgiA0QhSCKh5E9IgLAbQglBkgbBuQgTBgggBQQgcBCg0BJIgBABQg6BTgaBtIgIAmQgOBegdBbQgMAjgUAmQgTAlgYAjQg6BdgoBjIgCAFQg1BzhhA8IgSAKQhQBBg3ghQgSADgVgKQgvgNhLhPQh6iLhWkDQglhmgzhuQiklMjGjUQgogjgmgVQkQjckhB9Qg4ASg7AjQjMB/i9EJQi6D6iYFeQhcDVhJDzQhmFRgnFfQgKBWgGBVQgTETASC4QAhD2BpArQAPALAQAJQBaA/CKgrQDrhJCYgdQC/glCOAWQBXAJBUAbQAgArAeAzQADABgCAJQgCAQAOAuIgEAMIhfBkQgfABgiAGQhIAPgyAxIsaD0QhbgOhkgrg");
	this.shape_228.setTransform(729.7,956.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFB69F").s().p("EgizAmHQg7gQg4gRQhAhZhCh8QguhYgmhbQhSjPgyi2Qg4jRAKh5QAGijA/jIQAyiwCDkZQAzhvA0hpQB0jtBVimQCglCCGktQAWggAthtIA0hjQBAh8A8hQQB7i9CchlQBcg/BygpQBmgUBygKIACAAQBwASBqAeQCVA2B9BsQA3AmBxCTIEBFyQBKBsBTBhQBmBxBfAXQCFAoBmg+QAogXAhgfQBchFBEiZQAQgkAUgwQAohYBBi9QAjhaA3i1QAsiPAuiSQAsiIAkhKQBWiyBRhJQA0gzA2grQCHhrCSgsQCRguCUATQCrAWCTBSQB/BJBSBeQB8CHAbCoQAMA9gBA/QAACihTDDQgmBXgzBkQhaCvhiChIgoA+Qh2C8haCTQg6Beg1BpQhcC4hADCQhjEyAAEXQhnCphFChIgkASQhrgahXg8IADgRQAejUBBjyQBPkjBxj4QBMizCYkJIDpmTQCRj1BrjMIARglQBOingOiVQAKhggTg1QgYhohThaQgighgngdQhphRh/gFQg7gIhGANQhbAMhgAwQhKAfhPBWQhSBShrCZIgjAzQhSCGh7FAIgKAbQglBjgcBvQgUBfghBRQgbBCgzBJIgBABQg4BVgZBsIgJAmQgNBfgdBZQgNAkgUAmQgTAkgZAjQg7BbgpBkIgCAFQgzBxheBEIgQAMQhOBKg3gZQgTAGgVgIQgxgIhNhOQh9iJhVkDQgjhmgyhvQiglHjHjcQgngkgkgXQkRjpkbB1Qg5ARg7AiQjKB9i/EMQi3D5iZFgQhdDUhLDzQhnFRgsFdQgLBWgHBUQgXESAPC5QAcD3BjAyQAOAMAQAKQBXBGCMgtQDphJCZgdQDAgmCMATQBYAIBUAaQAjApAhAxQAFACAAAJQACARARAtIgFAMIhbBnQgeAAgjAGQhIAOgxAzIsZD0QhdgLhlglg");
	this.shape_229.setTransform(730,955.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFB69F").s().p("EgisAmOIh1gbQhAhXhDh9QgvhYgmhbQhTjNgyi3Qg4jOALh9QAGiiBBjIQAzitCFkbQAzhvA0hoQB1juBTilQCfk/CEkxQAVgfAthwIAyhkQA+h9A7hRQB4jACZhnQBbg/BzgqQBkgWBzgLIACAAQBwARBrAcQCUA2B/BrQA5AnBvCQIECFyQBJBrBTBjQBlBxBeAaQCEAtBng8QAogWAigeQBehFBEiXQARgkAUgwQAohZBBi8QAjhYA4i2QAqiOAviUQAriHAkhLQBVi0BPhIQAzg0A2grQCGhsCRgvQCRgwCTARQCrATCVBSQB/BGBUBeQB+CEAeCoQAOA8gBBAQAECihSDCQglBYgzBkQhZCuhjCiIgoA/IjQFOQg6Beg1BoQhcC3hCDCQhlEygCEWQhiCtg+CkIgkASQhxgRhfgwIACgSQAejRBAj1QBOkiBwj5QBMi3CWkFIDpmSQCOjxBvjRIARglQBQiogJiRQAOhhgSg2QgUhohRhdQgggigmgfQhohVh9gKQg8gKhGALQhcAJhgAuQhMAehQBUQhTBQhtCXIgkAzQhTCDh7FCIgLAbQgkBjgdBvQgWBeggBRQgcBDgwBJIgBABQg4BXgYBrIgIAmQgNBhgdBXQgNAjgVAmQgTAkgaAiQg9BZgoBmIgCAFQgyBuhaBOIgQANQhLBSg3gQQgTAKgWgGQgygEhQhMQiBiGhSkFQgjhngxhuQiblEjHjkQgmgkgkgYQkRj3kWBtQg5AQg7AiQjJB6i/EPQi2D4iaFhQhdDUhMDzQhqFQgwFcQgMBWgIBUQgbEQALC7QAXD3BeA4QAOAOAPAKQBUBNCNgtQDohJCagfQDBgnCLASQBXAGBVAZQAmAmAkAwQAHADADAJQAFARAUAsIgFAMIhYBqQgeAAgjAGQhIAOgwA0IsYD0QhfgIhmggg");
	this.shape_230.setTransform(730.2,955.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFB69F").s().p("EgimAmVIh3gWQhAhWhEh9QgwhYgmhaQhVjLgyi4Qg3jMAMiAQAHihBDjIQAzirCHkdQAzhvA0hnIDImTQCdk8CDk2QATgcAshzIAxhlQA9h/A5hRQB1jDCXhoQBahBBygrQBkgYBzgMIACAAQBwARBrAbQCVA0B/BqQA9AqBsCLIECFyQBJBrBSBkQBkByBdAdQCEAxBng5QAqgWAigdQBhhFBEiVQAQgjAVgxQAohZBBi7QAihWA5i4QAqiMAviWQAriGAjhNQBUi2BNhHQAzg1A1grQCFhtCQgxQCQgyCUAOQCqARCWBQQCBBGBVBbQCACDAhCnQAPA8ABA/QAGCjhQDCQglBYgzBlQhXCrhkClIgnA/IjQFNQg7Beg2BnQhcC2hDDDQhmExgFEVQhcCyg3CnIgkASQh4gIhnglIACgRQAcjRBAj1QBNkjBvj5QBNi7CTkAIDpmTQCLjtByjVIASglQBSipgEiPQARhhgPg1QgQhphPhgQgfgjgmghQhlhZh9gPQg7gMhHAJQhdAGhhAsQhNAdhQBRQhVBOhvCWIgkAyQhUCBh8FEIgLAbQglBigeBvQgWBdggBSQgcBEgvBJIgBABQg3BYgXBrIgHAmQgNBigdBVQgNAjgWAmQgUAjgaAiQg+BXgoBnIgCAFQgwBshXBWIgPAPQhKBbg2gHQgUAMgWgDQg0AAhShLQiEiChRkHQghhngxhvQiWlAjHjrQgmglgjgZQkRkEkRBlQg5AOg8AiQjHB3jAESQizD4icFiQhdDThODzQhsFQg0FbQgNBWgJBTQgeEPAHC9QASD2BYA/QANAPAPAMQBRBSCOgtQDnhJCbggQDCgoCJAPQBYAGBUAYQAqAkAnAuQAJADAFAJIAfA9IgEAMIhVBtQgegBgjAGQhIAOguA2IsYDzQhhgEhngbg");
	this.shape_231.setTransform(730.5,955.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFB69F").s().p("EgifAmcIh6gQQhAhVhGh+QgvhXgnhaQhWjKgzi5Qg2jJAMiDQAJigBEjJQA0ioCJkeQA0hvAzhnIDImSQCbk6CBk6QARgbAth2IAwhlQA7iBA3hSQByjGCUhpQBahCBygsQBjgZBzgOIACAAQBwARBrAZQCWA0CABoQA/AsBrCHQAjAyDeFBQBJBpBSBmQBjByBcAgQCDA3Bog4QAqgVAjgdQBkhDBDiTQARgkAUgwQAphbBBi5QAihVA5i5IBZkiQAqiFAjhOQBTi5BLhGQAyg1A1gsQCEhuCPgzQCQg1CTANQCqAOCYBPQCBBEBXBaQCCCBAlCmQAQA8ACA/QAJCjhPDCQglBYgyBlQhWCqhlCmIgnA/Qh3DBhZCMQg7Bdg2BoQhdC1hEDDQhoEwgIEVQhWC1gwCqIgkATQh/ABhugZIACgSQAbjPBAj3QBLkjBuj6QBOi+CPj8IDpmTQCKjpB1jZIASglQBUipABiNQAUhjgNg0QgMhphMhkQgfgkgkgiQhjhdh8gUQg8gOhHAGQheADhhAqQhOAchSBPQhXBNhxCUIgkAyQhUB9h+FGIgLAcQgkBhgfBvQgXBcggBUQgcBDguBKIgBABQg1BZgXBqIgHAnQgMBjgdBUQgNAigWAlQgVAjgcAiQg+BVgpBpIgCAFQguBqhTBeIgPAQQhHBjg2ADQgUAPgYgCQg1AGhVhKQiHh/hOkJQghhngwhvQiSk8jHjzQgkgmgjgaQkRkSkMBdQg5AOg8AhQjGB0jBEWQiwD2ieFkQhcDShQD0QhuFPg5FZQgOBWgKBTQgiEOAEC+QAND3BTBFQAMAQAOANQBOBZCQguQDlhJCcghQDCgqCIAOQBYAEBVAXQAtAiArAsQAKAEAHAJQANATAZAqIgEAMIhSBxQgegCgjAFQhIAOgtA3IsYD0QhigBhngWg");
	this.shape_232.setTransform(730.8,955.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFB69F").s().p("EgiZAmjIh8gLQhAhThHh/QgwhWgohaQhWjIgzi7Qg2jGANiGQAKigBGjIQA0imCKkgQA1hvAzhmIDHmSQCak3B/k+QAQgZAth5IAuhmQA6iDA0hSQBwjJCShrQBYhDBygtQBjgbBzgOIACAAQBwAPBsAZQCWAyCABnQBCAuBpCDIECFzQBHBoBTBoQBhBzBbAjQCDA7Bpg2QAqgUAkgcQBmhDBDiRQARgjAVgxQAphbBBi4QAihTA5i6IBakjQApiEAihQQBSi7BJhFQAyg1A0gtQCDhvCPg1QCPg3CTAKQCqALCZBPQCCBDBYBYQCEB/AoClQARA8AEA/QAMCjhODDQgkBXgzBlQhUCphlCoIgnA/Qh4DChYCKQg8Bdg2BnQheC0hFDDQhqEwgKEUQhRC5goCuIglASQiFALh2gOIACgSQAZjNBAj5QBKkjBsj6QBPjDCNj3IDpmTQCHjlB4jdIATglQBWiqAGiLQAXhjgLg0QgIhqhKhmQgdglgkgkQhhhih7gYQg8gRhHAEQhfABhhAoQhQAbhTBMQhYBLhzCTIglAxQhVB6h+FJIgLAbQgkBhggBwQgYBbghBUQgbBEgtBKIgBABQg0BagVBqIgHAmQgMBlgdBSQgNAigXAlQgVAjgdAhQhABTgoBqIgCAFQgtBohQBnIgOASQhEBrg2AMQgVARgYABQg3AKhXhIQiLh8hMkLQgfhngvhvQiOk4jHj7QgkgmgigcQkRkfkGBVQg6AMg8AhQjEBxjDEaQiuD1ieFmQhdDRhSDzQhwFPg8FYQgQBVgLBTQgmENABC/QAID3BNBMQALARAOAOQBLBgCRgvQDlhJCcgiQDDgrCGAMQBZADBVAWQAwAfAuArQAMAEAJAKQARATAcApIgFAMIhOB0QgegDgjAGQhIANgsA5IsXDzIgbAAQhXAAhagOg");
	this.shape_233.setTransform(731.1,955.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFB69F").s().p("EgiTAmpIh+gFQhAhShIh/QgxhWgohZQhXjHg0i8Qg1jDAOiKQALifBHjIQA1ijCMkiQA1hvAzhlIDHmSQCXk1B+lBQAPgYAsh8IAthnQA5iFAyhSQBtjMCPhtQBYhEBygtQBigdBzgPIACAAQBwAPBsAXQCXAxCBBmQBEAvBnCAQAeApDkFKQBHBnBTBpQBgB0BaAnQCCA/Bqg0QArgUAkgaQBphDBDiPQARgjAUgxQAqhcBAi2QAihSA7i8IBZkjQAoiDAjhRQBRi9BGhFQAxg1A0gtQCChxCOg3QCPg5CSAIQCqAICbBOQCCBBBaBXQCGB+AsCjQASA8AEA/QAQCkhNDCQgkBYgyBlQhTCnhmCqIgnBAQh3DDhZCIQg8Bdg3BmQheCzhHDDQhrEvgMEVQhMC8ghCxIgkASQiMAUh/gCIACgSQAZjMA/j7QBJkjBrj6QBQjHCKjzIDpmSQCEjhB8jiIATgkQBYisALiIQAahjgJg0QgEhqhHhqQgcgmgjglQhfhnh6gdQg8gShIABQhggChiAmQhRAahTBKQhaBJh1CRIgmAxQhVB3iAFLIgKAbQgkBhgiBwQgYBaghBUQgbBFgrBLIgBABQgzBbgVBpIgHAmQgLBmgdBRQgOAigXAkQgVAigeAiQhBBQgpBsIgCAFQgrBlhMBwIgNATQhCB0g2AVQgVAUgZAEQg5AOhZhHQiOh4hKkNQgfhnguhwQiJk0jHkCQgjgngigeQkRkskBBNQg6ALg9AhQjCBujDEdQisD0igFnQhdDRhTDzQhzFOhAFXQgRBVgMBTQgpEMgDDAQADD3BHBTQALASAMAPQBJBmCTgwQDjhJCcgiQDFgsCFAJQBYACBVAVQA0AdAxApQAOAFALAKQAVATAfApIgFAMIhLB2QgdgDgkAGQhIAMgrA7IsWDzQghACghAAQhGAAhHgIg");
	this.shape_234.setTransform(731.4,954.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFB69F").s().p("EgiNAmvIiAAAQhAhRhJh/QgxhWgphZQhYjFg0i9Qg1jAAPiNQALieBJjJQA2igCOkkQA1huAzhmIDHmRQCVkyB8lGQAOgWAsh/IAshoQA3iGAwhSQBrjQCMhuQBWhFBygvQBigeBzgRIACAAQBwAPBtAWQCXAvCBBlQBIAyBkB7IECFzQBHBnBTBrQBeB1BZApQCCBDBrgxQArgTAlgaQBrhCBDiNQARgjAVgxQAqhdBAi1QAihQA7i9IBZkjQAoiCAihTQBQjABEhDQAxg2AzgtQCBhzCNg4QCPg7CSAFQCpAGCcBMQCEBABbBWQCJB7AuCiQAUA8AFA/QASClhLDCQgjBXgyBmQhSCmhnCsIgmA/Qh4DFhYCFQg9Bdg3BnQhfCxhIDEQhsEugPEUQhGDAgaC0IglATQiSAciHAKIACgSQAYjLA+j8QBIkjBqj7QBQjKCIjvQBDh1CmkdQCBjdCAjmIATglQBaisAQiFQAdhlgGgzQgBhrhFhtQgbgngignQhchqh6giQg8gVhHgBQhhgEhjAjQhTAZhUBIQhbBHh3CQIgnAwQhWB0iAFNIgLAcQgkBfgiBwQgZBZghBWQgcBFgpBLIgBABQgyBdgUBoIgGAmQgLBogdBOQgOAigYAlQgWAhgeAhQhDBPgoBsIgCAFQgqBlhIB3IgNAVQhAB9g2AdQgUAYgaAFQg6AUhchHQiSh1hIkOQgdhoguhwQiEkwjIkKQgigngggfQkTk6j7BFQg6AKg9AhQjBBrjEEgQiqDzihFpQhdDQhVDzQh0FOhFFVQgSBVgNBSQgtELgGDCQgCD3BBBZQALATALAQQBGBtCUgwQDihJCdgkQDGgtCDAHQBZABBVAUQA3AbA0AnQAQAGANAKQAZAUAhAnIgEAMIhHB6QgegEgkAGQhIAMgqA8IsWDzQg7AGg9AAQgtAAgsgDg");
	this.shape_235.setTransform(731.7,954.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFB69F").s().p("EgmUAjnQgyhWgphYQhZjEg1i+Qg0i9AQiQQANieBKjJQA2idCQklQA1hvAzhlIDHmQQCUkwB6lKQAMgUAsiDIAqhoQA2iIAuhTQBojTCKhvQBVhGBygvQBhggB0gSIACAAQBvAOBtAUQCYAvCCBjQBLA0BiB3QAYAhDqFTQBHBmBSBsQBdB1BYAtQCBBIBsgwQAsgSAlgZQBuhBBDiMQARgjAVgxQArhdBAi0QAhhPA8i+IBZkjQAniCAhhTQBPjDBChCQAxg3AzgtQB/h0CNg6QCOg+CSADQCoADCfBMQCEA/BcBTQCLB6AyChQAVA8AGA/QAWClhLDCQgjBXgxBmQhRCkhnCuIgmBAQh5DHhXCDQg9Bcg4BmQhfCxhJDEQhuEtgRETQhCDFgTC3IgkASQiZAmiOAVIABgSQAXjJA9j+QBIkjBoj8QBRjOCFjqIDpmSQB/jZCDjqIATglQBcitAWiDQAghlgEgzQADhshDhvQgagpghgoQhahvh5gmQg8gYhIgCQhigIhjAiQhUAXhVBGQhcBFh6CPIgnAvQhXBxiBFQIgLAbQgjBfgkBxQgaBYghBWQgbBFgoBMIgBABQgxBegTBoIgGAmQgLBpgcBNQgOAhgZAkQgWAhgfAhQhFBNgoBuIgCAFQgpBihECAIgMAWQg9CFg2AnQgVAagaAIQg9AYhehFQiVhyhGkQQgchogthwQh/ktjIkRQgigoggggQkSlHj2A9Qg7AJg9AgQi/BojFEjQioDyiiFrQhdDPhXDzQh3FOhJFTQgSBWgPBRQgwEKgKDDQgHD4A8BfQAKAVALAQQBCBzCWgwQDhhJCeglQDGguCCAFQBYAABWASQA6AZA4AmQARAGAQAKQAdAUAkAnIgFAMIhEB9QgegEgjAFQhJAMgpA+IsVDyQhoANhsgBIiBAFQhBhPhKiAg");
	this.shape_236.setTransform(732,955.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFB69F").s().p("EgmRAjuQgyhVgqhZQhajCg1i/Qg0i7ARiTQANidBNjJQA2iaCSknIBojTIDHmQQCSkuB4lOQAKgSAtiGIAphpQA0iJAshUQBljWCHhwQBVhIBygwQBgghB0gTIACAAQBvANBuATQCYAtCDBjQBNA1BgB0QAVAcDtFXQBHBlBSBvQBcB1BXAwQCABMBtgtQAsgRAmgZQBxhABDiKQARgjAVgxQArheA/iyQAihOA8i/IBZkkQAniAAhhVQBNjFBAhCQAwg2AzgvQB+h0CMg9QCOhACSABQCoABCfBKQCFA+BeBSQCNB4A1CgQAWA7AIA/QAYCmhJDCQgiBXgyBmQhPCjhoCwIgmA/Qh4DJhYCAQg9Bcg4BmQhgCwhKDEQhwEsgUETQg8DIgLC7IgkASQigAviXAhIACgSQAVjIA+kAQBGkjBnj8QBSjSCCjlIDpmTQB8jUCGjvIAUgkQBeiuAbiBQAjhlgCgzQAHhshAhzQgZgqghgqQhYhzh3grQg9gZhIgGQhjgKhjAgQhWAWhWBDQhdBEh8CNIgoAvQhXBuiCFSIgLAbQgkBfgkBxQgbBWghBYQgcBFgmBMIgBABQgwBggSBnIgFAmQgLBqgcBLQgPAigZAjQgXAhgfAhQhGBKgpBvIgCAFQgnBhhACIIgMAYQg7COg1AvQgWAdgbAKQg9AdhihEQiYhuhEkSQgbhogshxQh6kojJkZQgggpggghQkSlVjxA1Qg7AIg9AfQi+BmjGEnQilDwikFtQhdDOhYDzQh5FNhNFSQgUBVgQBSQg0EIgNDFQgMD4A2BmQAJAVALASQA/B6CXgxQDghKCfglQDGgwCBADQBZgBBWARQA9AXA7AkQATAGASALQAhAVAmAmIgEALIhBCBQgdgFgkAFQhJALgoBAIsUDyQhqAQhsAEIiEALQhBhOhLiAg");
	this.shape_237.setTransform(732.3,955.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFB69F").s().p("EgmPAj1QgzhVgqhYQhbjAg1jBQgzi4ARiXQAPibBNjKQA4iYCTkoIBojSQB6jzBNidQCQkrB3lTQAJgQAsiJIAohqQAyiLAqhTQBjjaCFhxQBThJBxgxQBggjB0gVIACAAQBwAOBuARQCZAsCCBiQBRA3BdBvQATAZDwFbQBGBkBSBwQBbB3BWAyQCABRBtgrQAtgRAmgXQB0hABDiJQARghAVgyQArhfBAixQAhhMA9jBIBYkkQAnh/AghWQBNjIA+hAQAvg3AygvQB+h2CKg/QCOhBCSgCQCngCCiBJQCGA8BfBRQCPB3A4CeQAXA8AJA+QAcCnhJDBQghBYgyBmQhOChhoCyIgmBAQh5DKhXB+Qg+Bcg4BlQhgCuhMDGQhxErgWESQg3DMgEC+IgkASQimA4ifAsIABgSQAUjFA9kCQBFkjBmj9QBTjWCAjgQA+huCqklQB6jQCJj0IAUgkQBgivAgh+QAmhmABgzQALhsg+h2QgYgrgggrQhWh4h2gwQg9gbhIgIQhkgMhkAdQhXAVhXBBQhfBCh+CMIgoAuQhYBriDFUIgLAcQgjBdgmBxQgbBWgiBYQgbBGglBNIgBABQgvBggRBnIgFAmQgKBrgdBKQgOAigaAjQgXAgghAgQhHBJgpBwIgCAFQglBeg9CRIgLAaQg4CWg2A5QgWAfgbANQhAAhhjhCQichrhCkUQgahogrhxQh2kljJkgQgggqgegjQkTlijrAtQg7AGg+AgQi8BjjHEqQijDvilFuQhdDPhaDyQh7FNhSFQQgVBVgRBRQg3EIgRDGQgRD4AxBsQAIAXAKATQA9CACYgyQDehJCggnQDIgxB/ACQBZgDBWAQQBAAUA+AjQAWAHATALQAlAVAqAlIgFAMIg9CDQgegFgjAFQhKAKgmBCIsUDyQhrAThuAKIiGAQQhAhNhNiAg");
	this.shape_238.setTransform(732.7,956.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFB69F").s().p("EgmMAj7QgzhUgrhYQhci+g2jCQgyi2ASiZQAQibBPjJQA4iWCUkqIBpjSQB6jzBNicQCOkoB1lXQAHgOAtiMIAmhrQAxiNAohUQBgjdCChzQBThKBxgxQBfglB0gWIACAAQBwANBuAQQCaArCDBgQBTA6BcBrQAPAUD0FgQBEBjBTByQBaB3BUA2QCABVBugpQAtgQAngXQB3g/BCiHQARghAWgyQArhgBAiwQAhhKA9jCQAoiAAxikQAlh/AhhXQBLjKA8hAQAvg3AxgvQB9h3CKhBQCNhECRgEQCngFCjBIQCHA7BhBPQCRB1A7CeQAZA7AKA+QAeCohHDBQghBXgxBnQhNCfhoC0IgmBAQh5DMhYB8Qg+Bbg5BlQhgCthNDGQhzEqgYESQgyDQADDCIgkASQitBBimA3IABgSQATjEA8kDQBEkkBkj8QBVjaB8jdQA9hrCsknQB3jMCNj4IAUgkQBiiwAlh8QAphmADgzQAPhtg7h5QgXgsgfgtQhUh7h2g1Qg9gehIgKQhlgPhlAbQhYAUhYA/QhgA/iACLIgpAuQhYBoiFFWIgLAcQgjBdgnBxQgbBVgiBZQgbBGgkBNIgBABQgtBigQBmIgGAmQgJBtgdBIQgOAhgbAjQgYAgghAgQhIBGgpByIgCAFQgkBcg5CZIgKAcQg3Ceg1BCQgWAigcAPQhCAmhmhBQiehohAkWQgZhogrhxQhxkhjJkoQgfgrgegjQkTlvjmAkQg7AFg+AfQi7BgjIEuQigDuinFwQhdDNhbDzQh+FMhWFPQgWBVgSBRQg7EGgUDIQgWD4ArBzQAIAYAJAUQA6CGCZgyQDehJCggoQDIgyB+gBQBZgEBXAPQBDASBCAhQAXAIAVALQApAWAsAjIgEAMIg6CHQgdgGgkAEQhKALglBDIsTDyQhtAWhvAPIiHAWQhBhMhOiBg");
	this.shape_239.setTransform(733,956.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFB69F").s().p("EgmKAkDQg0hVgrhXQhdi9g2jDQgyizATicQARibBRjJQA4iTCXkrIBpjSQB6j0BMicQCMkkBzlbQAHgNAsiPIAlhsQAwiOAlhUQBdjhCAh0QBShLBxgyQBfgnB0gWIACAAQBvAMBvAOQCaAqCEBfQBWA8BZBnQANAQD2FkQBFBjBSBzQBZB4BTA4QB/BaBwgnQAtgPAogWQB5g/BCiFQARghAWgyQArhhBAiuQAhhJA+jDQAnh+AximQAlh+AghZQBLjMA5g/QAvg4AxgvQB7h5CJhCQCOhGCQgHQCngHClBHQCHA6BiBNQCUBzA+CcQAaA8ALA+QAiCohGDBQghBXgxBnQhLCehqC2IglBAQh6DNhXB6Qg+Bbg6BlQhgCshPDFQh0EqgbESQgsDUAKDEIgkASQizBKivBDIABgSQASjCA8kFQBDkkBjj9QBVjeB6jYQA7hpCtkpQB1jICQj8IAUgkQBlixAqh5QAshoAFgyQAShtg4h9QgWgtgeguQhSiAh1g5Qg9gghIgMQhmgShmAYQhZAUhZA8QhiA+iCCJIgqAtQhYBliGFZIgKAbQgjBdgpByQgcBTgiBaQgbBHgiBNIgBABQgsBjgQBmIgFAmQgIBugdBGQgPAhgbAjQgYAfgjAgQhJBEgpBzIgCAFQgiBag2CiIgJAdQg0Cng2BLQgWAlgdARQhDArhohAQiihlg+kXQgYhpgqhxQhtkejJkvQgegrgdglQkUl9jgAcQg8AFg+AeQi5BejJEwQieDuioFxQhdDNhdDyQiAFMhaFOQgXBVgTBQQg/EFgYDJQgbD5AmB5QAHAZAIAVQA3CMCbgyQDchJChgpQDKg0B8gCQBZgGBXAOQBHAQBEAfQAZAJAYALQAtAXAvAiIgFAMIg3CKQgdgGgkAEQhJAKgkBFIsTDyQhuAZhwAUIiKAbQhBhKhPiBg");
	this.shape_240.setTransform(733.3,956.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFB69F").s().p("EgmHAkKQg1hUgshXQhei7g2jEQgxiwAUigQARiaBTjJQA5iRCYktIBpjQQB7j2BLiaQCLkiBxlfQAFgLAsiSIAkhtQAuiQAjhVQBbjjB9h2QBRhMBxgzQBegoB0gYIACAAIDfAYQCaApCFBfQBZA9BXBjQAJAMD6FoQBEBiBSB1QBYB4BSA8QB+BeBxgkQAugPAogVQB8g+BCiDQARghAWgyQAshiA/itQAhhHA+jFQAnh9AyioQAkh8AghaQBJjPA3g+QAvg4AwgwQB6h6CJhEQCNhJCQgIQCngLCmBGQCIA5BjBMQCWBxBCCbQAbA8ANA9QAkCphFDBQggBYgxBnQhKCchqC4IglBAQh6DPhXB3Qg/Bbg5BkQhiCrhPDGQh2EpgeESQgmDXARDIIgkASQi6BTi3BPIABgSQARjCA8kGQBBkkBij9QBWjiB3jUQA6hnCukrIEGnFIAVgjQBmiyAvh2QAwhpAHgxQAWhvg2h/QgVgugdgwQhQiEh0g+Qg9gjhJgOQhngVhlAXQhbAShaA6QhjA8iECIIgrAtQhZBhiGFcIgLAbQgjBcgpByIhACtQgbBHghBOIgBABQgrBkgOBlQgDATgBATQgJBwgdBEQgPAhgcAiQgYAfgjAgQhLBCgpB0IgCAFQghBYgyCrIgJAeQgxCwg1BUQgXAogeATQhEAvhrg/Qimhgg7kaQgXhpgphyQhokZjKk3QgdgsgdgmQkTmKjcAUQg7ADg/AfQi4BajKE0QibDsipFzQhdDMhfDzQiCFLheFMQgYBVgVBQQhCEEgbDKQggD5AgCAQAGAaAIAWQA0CTCcgzQDbhJCigqQDKg1B7gFQBZgGBXANQBKAOBIAdQAbAJAaAMQAwAWAyAiIgEAMIg0CNQgdgHgkAEQhKAKgjBGIsSDyQhwAdhwAZIiMAhQhChJhPiCg");
	this.shape_241.setTransform(733.7,957.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFB69F").s().p("EgmFAkRQg1hTgshXQhgi6g3jFQgwitAVikQASiYBUjKQA6iNCakvIBpjQQB8j2BKiaQCJkfBwlkQADgIAtiWIAhhtQAtiSAihVQBXjnB7h2QBQhOBxg0QBdgqB1gZIACAAIDeAXQCcAoCFBdQBbA/BWBfQAGAHD9FuICVDXQBXB5BRA/QB+BjBxgjQAvgOAogUQB/g+BCiBQARghAWgyQAshjA/irQAihGA+jFQAnh8AyiqQAjh7AghcQBIjRA1g9QAug4AwgxQB5h7CIhHQCMhKCQgLQCmgNCoBFQCJA3BlBKQCYBwBFCaQAcA7AOA+QAnCphEDBQggBYgwBnQhICahrC6IglBAQh6DRhXB1Qg/Bag6BlQhiCqhRDGQh4EogfERQghDbAYDMIgkASImAC2IACgSQAPjAA7kIQBBkkBgj9QBXjmB0jPQA5hlCvkuIEHnFIAVgjQBoizA1h0QAyhpAJgxQAbhvg0iDQgTgvgdgxQhNiIh0hEQg9gkhJgRQhogXhmAUQhcAShbA3QhlA6iGCHIgrAsQhaBeiHFeIgLAcIhNDNIhACuIg7CVIgBABQgqBmgNBkIgEAmQgIBxgdBDQgQAggcAiQgZAegkAgQhMBAgpB2IgCAFQgfBVguC0IgJAfQgvC4g1BdQgXArgeAWQhGA0hug+Qiphdg5kcQgWhpgphyQhjkVjJk/QgdgtgcgnQkUmXjWALQg8ADg+AeQi3BXjLE4QiZDrirF0QhcDLhhDzQiFFLhiFLQgZBUgVBQQhGEDgfDLQglD6AbCGQAFAbAHAXQAxCaCeg0QDahJCigrQDLg2B5gHQBagHBXALQBOAMBLAcQAcAJAcAMQA1AXA0AhIgEAMIgwCQQgdgHglADQhKAKghBIIsRDxQhyAhhyAeIiOAmQhBhHhRiDg");
	this.shape_242.setTransform(734,957.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFB69F").s().p("EgmDAkYQiokFhSkjQgviqAVinQAUiYBVjJQA7iLCbkxQDKmKBljUQCHkdBuloIBPkNQAsiUAfhVQBVjqB4h4QCQiQEBg5IDhAUQELBCDIDdQAFAEGUJJQDZE4C8g2QDFg1BWioQA0hiBfj+QA1huCDnDQBzmRBJhWQCgjJC8hmQEvikE8B/QFcCHB3D+QBuDdhaEGQhODZi0E7QiTEChjCDQisDyiCE7QjeIcBGHKImyDdQAMjEA+kWQB6oxDumlQBaigGVq4QDhl4AZhrQApiXhqjBQhzjYjRg2QjJgyjABvQh2BCilCoQheBeiPF4IjIIRQgyB7gIB2QgIBzgdBBQgdA9hNBCQhOA+gpB3QghBZgxDdQgtDAg1BmQhOCYighWQishag3kfQhHljkenPQk3n7jlAEQjpAFkTGpQjpFpkZK0QiHFLhmFJQhwFngtEMQgyEsApCOQAuCgCfg0QHnilDYgQQELgZDxCMIgxCfQgdgIgkAEQhKAJghBJIyGFlQhChHhSiDg");
	this.shape_243.setTransform(734.4,958.1);
	this.shape_243._off = true;

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFB69F").s().p("EgmKAkDQg0hUgrhXQhdi9g2jDQgyizATidQARiaBRjJQA5iTCWksIBpjRQB7j0BLicQCMkkBzlcQAHgMAsiPIAlhsQAviPAlhUQBdjhCAh0QBShLBxgzQBegmB1gXIACAAQBvAMBvAOQCaAqCEBfQBWA8BZBnQAMAPD3FlQBFBiBSB0QBZB4BTA5QB/BaBwgnQAtgPAngWQB6g/BCiEQARgiAWgxQAshiA/itQAhhJA+jDQAnh/AximQAlh9AghZQBLjNA5g/QAvg4AwgvQB8h5CJhDQCNhGCRgGQCmgIClBHQCIA6BiBNQCUBzA/CcQAZA7AMA+QAhCohFDBQghBYgxBnQhLCdhqC3IglA/Qh6DOhXB5Qg+Bbg6BlQhgCshPDGQh0EqgbERQgsDUALDFIgkASQi0BLiwBEIABgSQASjDA8kFQBDkjBjj9QBVjeB5jYQA8hpCtkpQB0jICRj9IAUgjQBlixAqh5QAthoAFgyQAThtg5h9QgVgtgegvQhSiAh1g6Qg9gghIgMQhmgThmAZQhZAThZA8QhiA+iCCJIgqAtQhZBliFFZIgLAbQgjBdgpByQgcBTgiBaQgbBHgiBNIgBABQgsBjgPBmIgFAmQgJBugdBGQgPAhgbAjQgYAfgiAgQhKBEgpBzIgCAFQgiBag1CjIgKAcQg0Cog1BMQgXAlgcASQhDArhphAQiihkg+kYQgYhpgqhxQhskdjJkwQgegrgdgmQkUl9jgAbQg7AFg/AeQi5BdjJExQieDtioFyQhdDMhdDzQiAFMhaFNQgXBVgUBQQg/EFgYDJQgbD5AlB6QAGAZAJAVQA3CNCbgzQDchJChgpQDJgzB8gDQBagFBWAOQBIAPBEAfQAaAJAXALQAuAWAvAjIgEAMIg3CKQgdgGgkAEQhKAKgkBFIsSDyQhvAahwAUIiKAcQhBhKhPiCg");
	this.shape_244.setTransform(733.4,957);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFB69F").s().p("EgmQAjvQgzhVgqhYQhajCg1jAQgzi6AQiUQAOicBMjJQA3ibCSknQA2huAyhkQB5jzBOieQCRksB5lQQAKgRAsiHIAphpQA0iKArhTQBljXCHhwQBUhIBygwQBggiB0gUIACAAQBvAOBuASQCZAuCCBiQBOA2BfBzQAVAbDuFYQBGBlBSBvQBcB1BXAxQCABNBtgtQAsgRAmgZQByhABCiKQASgiAVgxQAqhfBAiyQAihNA8jAIBZkjQAmiBAhhVQBOjFA/hBQAwg3AzgvQB+h0CLg9QCPhACRAAQCoAACgBKQCFA9BeBSQCOB4A1CgQAXA7AIA/QAYCmhJDCQgiBXgxBmQhPCihoCxIgmA/Qh5DJhXCAQg+Bcg4BmQhfCvhLDFQhwEsgUETQg7DJgKC7IglASQigAxiZAiIACgSQAVjHA9kAQBGkjBnj8QBSjTCCjlQBAhvCpkjQB8jUCGjwIAUgkQBeiuAciAQAkhmgCgzQAIhshAhzQgYgqghgqQhXh0h4gsQg8gahIgFQhjgLhkAfQhWAWhWBDQheBDh8CNIgoAvQhXBtiDFTIgLAbQgjBfglBwQgaBXgiBYQgbBFgnBMIgBABQgvBggSBnIgFAmQgKBqgdBLQgPAigZAjQgXAhggAgQhFBKgpBwIgCAFQgnBghACKIgLAYQg7CPg1AyQgWAdgbALQg+AdhhhDQiZhuhEkTQgbhogshwQh5kojJkaQgggqgfghQkTlXjwAzQg6AIg+AfQi+BmjGEnQilDwijFtQhdDOhZDzQh6FNhOFSQgUBVgQBSQg0EIgODFQgND4A2BnQAIAWALASQA/B6CXgxQDfhJCfgmQDHgwCBADQBZgCBVARQA+AXA8AjQATAHASALQAiAVAnAlIgEAMIhACBQgegFgkAFQhJALgnBAIsUDzQhqAQhtAFIiEAMQhBhOhLiAg");
	this.shape_245.setTransform(732.4,955.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFB69F").s().p("EgiSAmrIh+gEQhAhShIh/QgxhWgphZQhXjGg0i8Qg1jDAOiKQALifBIjJQA1iiCNkiQA1hvAyhmIDImRQCXk0B9lDQAOgXAth9IAshnQA4iFAyhSQBtjOCOhsQBXhFByguQBigcBzgRIACAAQBwAPBsAXQCXAxCBBlQBGAwBmB/IECFzQBGBnBTBqQBgB0BaAnQCCBABqgzQArgTAkgbQBqhCBDiPQARgjAVgxQAphcBBi2QAihRA6i8IBZkjQApiDAihRQBQi/BGhEQAxg2A0gsQCBhyCOg3QCPg6CTAIQCpAHCbBNQCDBCBaBWQCHB9AsCjQATA8AFA/QAQCkhNDCQgjBYgyBlQhUCnhlCrIgnA/Qh4DEhYCHQg8Bdg3BmQheCzhHDDQhsEvgNEUQhKC+ggCxIgkATQiNAWiBABIACgSQAYjMA/j7QBJkjBqj6QBQjICKjyIDpmSQCDjgB9jjIATgkQBYisANiHQAbhkgIg0QgEhqhGhrQgcgmgjgmQhehnh6gfQg8gThHABQhggDhjAlQhRAahUBJQhaBJh2CRIgmAwQhVB3iAFLIgLAcQgkBgghBwQgZBZghBVQgbBFgrBLIgBABQgyBcgVBpIgGAmQgMBmgcBQQgOAigYAlQgVAigeAhQhCBQgoBsIgCAFQgrBlhLByIgNATQhCB3g2AXQgUAVgZAEQg6AQhahHQiPh3hJkOQgehngvhwQiHkzjIkEQgigngigeQkRkwkABLQg6ALg8AgQjCBujEEdQirD0igFoQhdDQhUDzQhzFPhCFWQgRBVgMBSQgqEMgEDBQABD3BGBUQALATAMAPQBIBoCTgwQDjhJCdgjQDEgsCFAJQBYABBWAVQA0AcAyApQAOAFAMAKQAWATAfApIgEAMIhKB3QgegDgjAFQhJANgqA7IsWDzQgoADgpAAQg+AAhBgGg");
	this.shape_246.setTransform(731.5,954.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFB69F").s().p("EgijAmXIh4gUQhAhVhFh+QgwhXgmhaQhVjLgzi4Qg2jLALiBQAIihBDjIQA0iqCHkdQA0hvAzhoIDJmSQCck8CCk2QASgcAth1IAxhlQA8h/A4hSQB0jECWhoQBahCBygrQBkgYBygNIACAAQBwARBsAaQCVA1B/BpQA+AqBsCKIEBFyQBJBqBSBlQBkByBcAeQCEA0Bog5QApgWAjgdQBihEBDiUQARgkAUgwQAphaBBi6QAihWA5i4IBZkiQAriGAjhNQBUi3BLhHQAzg1A1grQCFhuCQgxQCQg0CTAOQCqAQCXBQQCBBFBWBbQCACCAjCmQAPA9ABA/QAICihQDDQglBXgzBlQhXCrhkClQgUAigTAdIjQFNQg7Beg2BoQhcC1hEDDQhnExgFEVQhaCzg1CoIgkASQh6gEhqghIACgSQAcjPBAj3QBMkjBvj5QBNi8CSj/QBHh9CikVQCKjsB0jWIASglQBSipgCiPQAShigPg0QgOhphOhhQgfgkglghQhkhbh9gQQg7gNhHAHQhdAFhhAsQhOAdhRBQQhWBNhvCWIgkAyQhUB/h9FFIgLAbQgkBigfBvQgWBdggBSQgcBEgvBKIgBABQg2BYgXBqIgHAnQgNBigdBVQgNAjgWAlQgUAjgbAiQg+BWgoBoIgCAFQgwBrhVBZIgPAQQhJBdg2gDQgUANgXgDQg0ADhThLQiFiBhQkIQghhmgxhvQiUk/jHjuQglglgkgaQkRkJkPBiQg5AOg8AiQjGB2jBEUQiyD2icFkQhdDShPDzQhsFQg2FaQgOBWgJBTQggEPAHC9QAQD3BWBBQANAPAOAMQBQBVCPguQDmhJCbggQDCgpCJAPQBYAFBVAYQAqAjApAtQAJAEAGAJQALASAXArIgFAMIhTBvQgegCgjAGQhJANgtA3IsYD0QhhgDhngag");
	this.shape_247.setTransform(730.6,955.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFB69F").s().p("Egi2AmDQg7gRg3gTQhAhZhCh8QguhZglhbQhSjPgxi1Qg4jTAJh3QAFikA+jIQAyixCDkZQAyhvA0hpQB0jsBVinQChlDCHkrQAXghAthrIA0hjQBBh7A+hQQB8i7CdhkQBdg+BygpQBmgTBygKIACAAQBwASBrAfQCTA4B+BsQA1AkByCWIEBFyQBLBsBSBgQBnBxBgAVQCFAmBlg/QAogYAhgfQBahGBEiZIAlhVQAohXBBi+QAihaA3i1QAsiQAuiRQAsiIAkhKQBXiwBShKQA0gzA3gqQCIhqCSgsQCRgtCUAVQCrAXCTBTQB+BJBSBgQB6CHAZCpQAMA9gCBAQgCChhTDCQgmBYgzBkQhcCwhhCfIgpA/Qh1C6haCVQg6Bfg1BoQhbC5hADCQhiEyABEXQhpCohJCeIglATQhngfhShCIACgSQAgjUBBjyQBPkiByj5QBLiwCakMIDpmTQCSj3BqjKIARglQBMimgQiWQAIhggVg2QgZhnhVhYQgigggogdQhqhOh/gDQg7gHhHAPQhaANhfAxQhKAghOBXQhSBThpCaIgjAzQhSCIh6E+IgKAcQglBjgcBuQgUBgggBQQgcBDgzBIIgBABQg5BVgZBsIgJAmQgOBfgcBZQgNAkgUAmQgTAlgZAjQg6BcgoBjIgCAFQg0ByhgBAIgRALQhPBFg3geQgTAFgVgJQgvgLhMhOQh8iLhVkDQgkhmgzhuQiilKjHjYQgngjglgWQkQjikfB6Qg4ARg7AjQjLB+i+EKQi5D6iZFeQhcDVhKDzQhmFRgqFfQgKBWgHBUQgVESARC5QAfD2BmAuQAPAMAQAJQBYBDCLgsQDqhKCZgcQDAgmCNAVQBXAIBUAbQAhAqAgAyQADACAAAIQAAARAPAuIgFAMIhdBlQgeAAgjAGQhIAPgxAyIsaD0QhcgNhkgog");
	this.shape_248.setTransform(729.8,956);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFB69F").s().p("EgjKAlwQg3gag1gaQg/hdg+h7QgthZgjhdQhQjUgwixQg6jbAHhuQACilA6jJQAwi5B9kTQAyhvA0hrQBzjpBXirQCmlLCNkeQAagnAthiIA5hgQBFh2BEhPQCEiyCkhhQBfg6B0gnQBngOBxgGIACAAQBwAUBqAjQCSA6B8BwQAtAfB4ChIEAFyQBNBvBSBaQBrBvBiAMQCIAaBihGQAmgaAgghQBShIBEieQARglATgwQAnhVBCjCQAjhfA2iwQAsiVAtiMQAuiLAlhFQBbiqBYhMQA1gyA4gpQCLhnCUglQCSgnCVAcQCtAfCNBWQB8BMBOBlQB0CMAQCtQAIA9gGA/QgKCghWDDQgoBYg0BjQhfC1hgCZIgoA/Qh1C1hbCbQg5BggzBpQhaC8g8DCQheE0AJEYQh5CcheCVIglATQhUg6g7hjIADgSQAjjYBCjtQBTkiB2j3QBIilCikZIDpmTQCakDBfi9IARglQBGilggicQAAhegbg3QglhmhchPQglgdgqgYQhxhCiBALQg7AAhFAVQhYAVheA4QhFAjhMBdQhOBZhjCdIggA1QhRCRh3E4IgLAbQglBlgYBuQgSBjgfBNQgcBCg4BHIgBABQg9BRgcBuIgJAmQgPBagdBfQgMAkgSAnQgRAmgXAkQg2BigoBfIgCAFQg5B5hqAnIgTAGQhWAsg3g3QgSgEgTgQQgrgYhEhSQhyiUhcj9Qgnhmg1htQiwlWjFjBQgqgigngSQkQi7kuCSQg3AUg7AkQjPCGi7EAQjAD+iUFZQhdDXhFDzQhgFTgdFiQgIBWgDBVQgKEWAbC1QAtD1B3AcQARAIARAGQBhAwCIgqQDthJCWgaQC+giCRAbQBXALBTAfQAYAvAWA4QgCAAgGAHQgMAQAHAwIgFAMIhmBcQgfACgiAHQhIAQg0AtIscD0QhYgWhhg3g");
	this.shape_249.setTransform(729.1,956.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFB69F").s().p("EgjeAldQg1ghgygjQg+hhg7h5QgrhbgihdQhNjZguiuQg9jiAFhlQgBioA2jIQAujAB4kPQAwhvA2hsQBwjoBZiuQCslSCSkSQAfgsAshZIA9heQBJhxBKhOQCNioCrhdQBig3B0gkQBogKBygDIACAAQBwAWBoAnQCRA+B6BzQAkAZB/CtIEAFxQBPBxBSBWQBuBtBlADQCJANBghMQAlgcAdgkQBLhJBFikIAjhVQAmhSBCjHQAjhjA1itQAtiZAsiGQAwiOAmhCQBeiiBfhPQA2gxA5goQCPhiCWggQCTggCWAiQCuAnCIBZQB6BQBKBpQBtCRAHCwQAEA+gJBAQgTCehZDDQgpBYg1BjQhjC5heCTIgpA/Qh0CwhcCiQg3BhgyBqQhZC/g5DBQhYE2APEaQiJCRhyCLIglATQhBhUgjiFIADgSQAmjcBDjoQBWkiB6j3QBGiZCpkmIDqmTQChkPBWiwQAJgVAGgRQBBihgvikQgJhcghg4QgwhkhjhGQgpgagsgTQh4g2iDAZQg6AGhFAcQhVAdhcA+QhCAmhJBkQhJBehdCiIgfA2QhPCah0ExIgLAbQgmBngUBsQgQBngfBLQgcBAg8BGIgBABQhABNgfBwIgKAmQgQBXgdBjQgLAlgRAoQgQAngUAlQgyBngpBcIgCAFQg8B/h1AOIgVACQhdATg3hSQgRgLgSgXQglgmg+hVQhoiehij4Qgqhlg3hsQi+lhjEisQgsgfgpgOQkPiVk9CqQg3AXg6AlQjUCPi4D2QjGEBiRFUQhdDahADzQhZFTgRFnQgFBXAABWQABEZAlCwQA8D1CHAJIAmAIQBpAdCEgoQDwhKCVgWQC7gfCVAhQBWAPBTAhQAOA3ANA8QgHgCgNAHQgWAOgBAzIgFAMIhxBTQgfADghAIQhHARg5AoIsdD1QhTgghehGg");
	this.shape_250.setTransform(728.5,957);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFB69F").s().p("EgjzAlLQgygpgvgrQg+hkg4h5QgphbggheQhKjeguiqQg+jrADhbQgEiqAxjIQAsjIBzkKQAvhvA2huQBvjlBciyQCxlZCWkGQAjgxAthQIBBhcQBNhrBRhOQCUifCyhZQBlg0B0ghQBrgFBwABIACAAQBxAXBnArQCPBBB5B3QAcATCFC5ID/FwQBRB0BRBRQByBrBogGQCLAABdhSQAkgeAcgmQBChMBGioQAQgnASgvQAmhQBCjKQAjhoAzipQAuidAsiCQAyiQAng+QBhibBlhSQA3gwA7gmQCShfCYgaQCUgaCXApQCvAvCEBcQB3BUBGBuQBmCWgCCzQABA+gNBAQgbCchdDEQgqBYg2BiQhnC+hcCNIgqA/QhzCshcCoQg2BigxBrQhYDCg1DBQhUE4AXEaQiYCGiICCIglATQgthvgMimIADgSQApjgBFjkQBZkiB+j1QBDiNCykzIDpmTQCpkcBMijQAJgVAGgRQA6ifg9irQgShagog5Qg7hihqg9QgtgXgugPQh+gpiFAnQg6ANhFAiQhSAkhaBFQg+AphHBrQhFBjhWCmIgdA4QhNCjhyEqIgKAbQgnBogRBsQgOBqgeBIQgdBAhABFIgBABQhDBJghBxIgLAnQgSBSgdBpQgKAlgPApQgPAogSAmQguBtgoBYIgCAFQhBCFiAgLIgXgCQhkgGg3hsQgQgUgQgdIhXiLQhdiphpjyQgthlg5hrQjMlsjDiWQgvgdgrgLQkOhtlNDBQg2Aag5AmQjYCXi2DtQjMEEiOFQQhcDbg7DzQhTFVgFFrQgBBXADBXQALEcAvCtQBLD0CXgKIAqACQBxAKCAgnQD0hJCTgUQC4gbCaAnQBVASBTAlIAIB+QgNgDgSAFQgiANgJA2IgGAMIh6BKQgfAFghAIQhHASg7AkIsfD1QhPgphbhWg");
	this.shape_251.setTransform(728,957.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFB69F").s().p("EgkKAk5QgvgxgrgzQg+hog1h3QgohcgehgQhHjhgsinQhAjzAAhSQgHisAsjIQArjQBukFQAuhvA2hwQBujjBei0QC2lhCbj6QAog2AthHQAhgtAjgtQBShmBWhNQCciVC6hVQBogxB0gfQBsABBxADIACAAQBwAYBnAwQCNBFB3B5QAUAOCLDEID+FwQBTB2BRBMQB2BqBrgPQCNgNBahYQAighAagoQA7hNBGiuIAihWQAlhNBCjPQAkhrAximQAviiArh8QA0iTAog6QBkiUBrhVQA5gvA8gkQCVhcCbgUQCUgUCYAxQCwA2CABfQB1BYBCByQBgCbgMC3QgDA+gQBBQgkCahgDEQgsBYg2BiQhrDChaCIQgWAhgVAdQhyCnhdCvQg1BjgwBsQhWDEgxDBQhPE6AdEcQinB7idB4IglATQgaiJALjIIADgSQAujlBGjeQBckhCBj1QBBiCC5lAIDqmTQCwknBDiXIAOgmQA0ichMizQgbhYgvg6QhGhghxg0QgvgTgxgLQiEgdiIA1Qg6AThEApQhPAshZBLQg5AshEByQhCBohQCqIgbA5QhLCthvEjIgKAbQgnBqgPBrQgLBsgeBGQgdA/hEBEIgBABQhHBFgjB0IgMAmIgwC8QgKAmgNAqQgNAqgQAlQgrB0gnBVIgCAFQhGCLiKgkQgNgDgMgFQhrgeg4iGQgPgcgNgkQgchBgvhbIjDmgQgvhkg8hqQjZl4jDh/QgxgbgtgHQkNhHldDZQg1Aeg4AnQjdCfiyDjQjUEHiKFLQhcDeg2DzQhMFWAHFvQACBXAGBYQAVEgA6CoQBZD0CngdIAugFQB6gIB8glQD4hKCQgQQC2gYCeAtQBVAWBSAoIgLCJQgSgFgZAFQgtALgRA5IgFAMIiEBBQgfAGghAJQhHATg+AfIshD2QhLgzhYhlg");
	this.shape_252.setTransform(727.6,957.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFB69F").s().p("EgkgAkpQgtg6gog6Qg9hsgxh2QgnhdgdhhQhEjmgrikQhCj6gChJQgKiuAojIQApjYBpkAQAthuA3hyQBrjhBgi4QC8loChjuIBYh6QAjgsAlgqQBWhiBdhMQCkiLDBhSQBqgtB1gdIDeAMIACAAQBwAaBmA0QCMBIB1B9QALAICSDQID+FwQBUB4BSBHQB4BnBvgXQCOgaBXheQAhgjAZgrQAzhOBGi0QARgoARguQAjhKBDjTQAlhwAviiQAwinArh2QA1iXApg1QBniNByhXQA6guA9gkQCYhYCdgNQCWgOCZA3QCxA+B7BiQByBbA+B3QBaChgWC6QgGA+gTBBQgtCZhkDFQgsBXg3BhQhvDHhYCCIgsA+QhxCihdC2Qg0BkgvBtQhVDHgtDBQhLE7AkEdQi3BwixBvIglATQgHikAijpIAEgSQAxjpBHjZQBfkhCFj0QA/h3DBlNIDqmTQC4kzA4iKQAJgWAEgQQAviahbi6QgkhWg1g7QhShfh4gqQgygQgzgGQiLgRiKBDQg5AZhEAwQhMA0hXBRQg2AvhBB5Qg9BuhLCtIgZA7QhJC1hsEdIgLAbQgnBsgLBqQgJBvgeBEQgdA+hIBCIgBABQhKBCgnB1IgMAmQgVBKgcBzIgVBRQgMArgNAmQgnB6goBSIgCAFQhJCRiWg9QgNgFgNgHQhyg3g4igQgOgkgMgrQgXhOgnhfQhLi8h1joQgyhkg+hpQjnmDjChpQgzgagvgCQkMgglsDwQg1Ahg3AoQjiCoivDYQjbELiFFGQhcDhgyDyQhGFYAUFzQAEBXAKBZQAgEkBECkQBnDyC4gvIAygLQCCgbB4gjQD7hKCPgNQCzgUCiAyQBVAZBRAsIgeCUQgYgHgeAFQg5AKgZA7IgFAMIiNA3IhBASQhFAVhDAaIsiD2QhGg9hVhzg");
	this.shape_253.setTransform(727.2,957.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_211}]}).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_211}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_211).wait(29).to({_off:true},1).wait(75).to({_off:false},0).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.shape_243).wait(61).to({_off:false},0).wait(33).to({_off:true},1).wait(111));

	// cross section lower
	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFB69F").s().p("EAkqAw4QiOgljdAAQj2AMh5gEQmdgMmdgaQuBhCrainQzgkcrJnPQt1o8mEv6QgyiGhknvQhcm/hcivQhDh5AuhgQAihHB0hHQB1hHDihDQEChPDNAAQC3AABcCOQAuBCAIBHQhwLbNLMoQI8IfPIEgIISCjQE1BXDoAAQAJAAFWAqQD+AdB5gqQBlghhchcQiChogdgyQivk1iajVQlnoJjIkPQsEwLAAv+QAAjyAuhDQAyhPD/hxQDlhkBLC8QAZBCAaEpQAMCFNSNLQGuGqHUG6QFJFFExBoQGmCSBCnSQARiKgyj2Qg2kPAEhxQAIlKA/onQBLqXARjZQAMivB1iCQB1iKC3ghQCbgdCeBkQBQAyAyA7QIJJhC0QkQCSNThgPQQhtRenXMmQjhGEmRDIQkZCLkYAAQiTAAiUgng");
	this.shape_254.setTransform(949.9,1307);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFB69F").s().p("EAk8Aw/QgqgKgxgIQh2gRibAAQhlAFhQABQhyADhKgDIiXgFQi5gFi0gJIk5gRIg2gEQjGgQi7gTQl4goleg/QjCgii0goIhdgVQiKgfiCghQoWiImsiuQmkirk9jQQhHgthDgxQsLo0lnuqQgTgygZhhQgriohAk8IgShTQhTl9hTigIgKgTQg2huArhZQAfhBBnhCIAQgLQBog/C7g7IA1gQQDIg9CngNQAzgFAvABQBsABBNAzQA0AjAkA6IADAEQAqBCAHBFQgxFDCGFQQCAFDEnFLQBmByB5B0QDjDWEfCvQGCDsHmCgQBLAZBTAYIBVAbIEJBSIC1A2QC0AzCaAUQBWANBTADIApABIDiAbIB9AQQDcAaB4gcQATgEARgHQBighhbheQhHg6gpgrQghgggNgXQgwhVgvhOQgxhQgshFQhKhzhFhgIisj6QjvlXiVjKQhAhXg7hVQqNu3AAutQAAjLAghQQAHgPAHgLQAthGDIhfIA9gbQCjhGBVBLQAiAfAWA4QASAzATCxIAPCIQARCFMNMQIBABAQEQEQEhEXQCjCfChCYIAMAMQCTCQCRBnQCwB8CpA7QA3ATAyAJQD8AuBfjiQAdhCAPhcQAMhWgPiBQgJhMgShdQg0kMADh2IAAgMQAGkHAllzIAZjsIASixQAaj3AOiyQARi5AGhhQAFhTAbhIQAfhSA7hGQBNhfBrgvQAzgXA5gMQBdgVBfAbQA9ARA9AlQBPAvA0A4IAJAKQBhBsBWB+QAsBAAnBEQDSFoCBHZQA7DYAqDvQAyEaAYEpQAoH5gkIfQgHBmgKBmQggFlhGFDQhhHDimGDQhcDZhzDFQhnC0iMCMQiXCYjFBqIggARQjeBvjfAaQhBAIhCAAQiMAAiMgjg");
	this.shape_255.setTransform(950.2,1308.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFB69F").s().p("EAlNAxGQgqgJgxgHQh3gQibAAQhkAEhRABQhxAChLgDIiZgFQi7gFiygJIk7gRIg2gDQjIgPi6gUQl3gnlhhBQjFgkizgnIhdgVQiLggiCgiQoWiHmvixQmjisk/jRQhHgvhEgxQsMo3lpusQgTgzgZhhQgrilhBlAIgShTQhTl/hUigIgKgUQg1huAqhZQAfhCBohBIAQgLQBog/C9g7IA0gQQDJg9CogOQAygEAvABQBtACBMA1QA0AkAkA7IACAEQAoBCAHBFQgxFFCFFQQCAFHEnFJQBmBzB6BzQDkDXEgCwQGGDvHkCfQBJAZBVAZIBVAaIEKBSIC2A2QC0AzCaAUQBWALBVAFIApABIDiAcIB9AQQDeAbB2gcQAUgFAQgHQBggihaheQhGg7gqgsQggghgOgXQgwhVgwhPQgyhRgrhDQhKh0hFhhQhbiFhRh1QjvlYiWjMQhBhXg7hVQqRu5AAuwQAAjMAhhPQAHgQAIgLQAthGDJheQAdgOAggOQCjhFBUBOQAhAfAWA4QASA1ATCwQAGA7AKBOQAXCKMIMPIBABBQEQEREhEZQCmCkCdCUIAMAMQCSCQCUBoQCxB8CpA8QA3ATAyAKQD9AwBijcQAfhBAQhaQAPhWgOiCQgJhLgRhfQgzkIADh7IAAgNQAFkQAjlrIAXjtIARiwQAYj1AKi3QAPi4AFhjQAEhTAahIQAdhTA5hGQBKhhBogyQAxgYA4gNQBagXBfAXQA8APA+AiQBPAsA1A1IAKAKQBiBoBYB9QAtA/AoBEQDVFnCEHbQA8DYArDvQA0EaAZEqQAsH8ghIgQgGBlgJBnQgfFmhEFEQhgHGikGEQhbDahyDGQhnC1iLCOQiVCYjGBtIggARQjdBxjgAdQhJAJhJAAQiFAAiFgfg");
	this.shape_256.setTransform(950.6,1309.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFB69F").s().p("EAlfAxNQgrgJgxgGQh4gOiagBQhlAEhRAAQhxABhMgDIiZgFQi/gEiwgJIk8gQIg2gEQjKgPi6gTQl1gnllhDQjHgliygnIhdgWQiMggiCghQoXiHmwizQmkiulAjUQhIguhDgyQsOo8lqutQgUg0gZhfQgrilhClCIgShUQhTmAhUihIgKgTQg2hvArhZQAfhCBohCIARgLQBog/C9g7IA1gQQDJg9CogNQAzgEAvABQBtADBLA2QA0AlAjA7IADAEQAmBDAGBFQgwFHCDFRQCAFKEnFIQBnByB6B0QDlDXEhCxQGLDzHgCeQBIAXBXAaIBVAbIELBSIC2A2QC2AyCaATQBVAMBWAFIApABIDjAdIB9ARQDgAbB1gcQAUgEAQgIQBdgihahgQhEg7gqguQgggggOgYQgwhVgxhPIhdiVQhKh0hFhhQhciHhSh1QjvlYiXjNQhBhYg6hVQqVu8AAuyQAAjOAhhPQAHgPAIgLQAuhGDJhfIA9gbQCkhFBTBRQAhAfAVA5QASA2ASCwQAHA6AMBPQAcCPMDMPIBBBBQEPESEgEcQCrCpCZCRIAMAMQCRCPCVBpQCyB8CqA8QA4AUAxAKQD/AyBkjWQAhg/AShaQAQhVgNiCQgIhLgQhgQgykFACiAIAAgNQAEkaAilhIAWjuIAPiyQAWjxAHi8QAMi4AEhkQADhTAYhJQAchTA3hHQBGhiBlg0QAwgaA3gPQBYgZBeAUQA8AMA+AfQBPApA2AzIAKAKQBlBjBaB8QAuA/AoBEQDXFlCHHdQA+DYAtDwQA1EbAbEqQAvH+geIgQgGBmgIBnQgcFphEFDQhdHKiiGEQhbDbhyDIQhmC1iKCQQiUCZjGBvIggARQjdBzjgAfQhSAMhSAAQh8AAh8gbg");
	this.shape_257.setTransform(950.9,1310.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFB69F").s().p("EAlwAxUQgrgIgxgGQh5gMiZgBQhlAEhSgBQhwAAhOgDIiagFQjBgEiugIIk+gRIg2gDQjMgOi5gTQl0gnlphFQjJgniwgnIhegWQiNggiBghQoYiHmzi2QmkiulCjXQhHgvhEgyQsPpAlsuvQgUg0gZhfQgsijhClFIgShUQhTmChUihIgKgUQg3hvArhZQAghCBohDIARgLQBog+C+g8IA1gQQDKg9CpgMQAzgEAvACQBtADBLA4QAzAmAiA7IADAEQAkBDAGBGQgwFJCCFRQB/FNEoFHQBoBzB6BzQDnDXEhCyQGPD3HdCdQBHAXBZAbIBWAaIELBSIC3A2QC2AyCaATQBUALBZAGIApABIDjAeIB9ARQDhAcB1gcQAUgEAQgIQBagjhZhiQhCg7grgvQggghgOgYQgxhUgxhQIheiVQhKh1hFhiQhciHhSh1QjvlZiYjOQhBhZg7hVQqZu/AAu0QAAjPAihPQAHgPAIgLQAvhGDJhfIA+gbQCkhEBSBUQAhAfAUA6QASA3ASCvQAGA5APBQQAhCVL/MOIBABCQEPEUEgEdQCuCuCVCOIAMALQCQCPCYBqQCzB8CqA9QA4AUAyAKQD/A1BnjQQAjg+AThYQAShVgLiCQgHhLgRhhQgvkCABiFIAAgOQACkjAilZQAKhxAKh9QAHhdAGhWQAUjuADjBQAKi3ADhlQAChUAXhIQAahUA1hIQBDhkBig2QAugbA2gRQBWgcBdARQA8AJA9AeQBQAlA3AxIAKAJQBnBeBdB8QAvA/ApBDQDYFkCLHeQA/DZAuDwQA3EbAdEsQAzIAgcIgQgFBngHBmQgbFshCFEQhcHMigGFQhaDchxDJQhmC2iJCRQiTCbjGBxIggARQjcB0jgAjQhbANhZAAQh1AAh1gXg");
	this.shape_258.setTransform(951.3,1311.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFB69F").s().p("EAmBAxcQgrgIgxgFQh7gLiYgBQhmADhRgCQhvAAhQgEIibgEQjEgEisgIIk/gQIg3gDQjOgOi4gTQlygmluhHQjLgoiugoIhegVQiOgiiCghQoYiGm2i4QmjivlEjaQhHgvhEgyQsQpEluuxQgUg1gaheQgriihDlIIgShVQhUmDhUiiIgKgTQg3hwArhZQAghDBohCIARgLQBpg/C+g7IA2gQQDLg+CpgLQAzgEAvACQBtAFBKA5QAzAnAiA7IACAFQAjBDAFBGQgvFLCBFRQB/FREoFFQBoBzB7B0QDnDXEiCzQGUD7HaCbQBFAWBcAcIBVAbIENBRIC3A2QC3AyCaASQBUAKBaAHIApACIDjAfIB9ARQDjAdB0gcQAUgFAQgIQBYgkhYhiQhCg7grgxQgfghgPgZQgxhUgyhRIheiUQhKh1hFhjQhciIhSh1QjwlaiZjQQhBhYg7hVQqdvCAAu3QAAjQAihOQAHgQAJgLQAwhGDJhfIA+gaQClhEBRBXQAgAeAUA7QASA5ASCuQAGA5AQBRQAnCZL5MOIBABCQEPEWEhEfQCxC0CRCJIAMAMQCPCOCbBqQCzB+CrA9QA3AVAyAKQEBA2BpjKQAmg9AUhWQAUhVgKiCQgHhKgQhjQguj+ABiLIAAgNQABkuAglPQAKhxAJh/QAHhcAEhXQATjqgBjGQAIi4ABhmQABhUAWhIQAYhVAzhIQBAhmBfg4QAsgdA1gSQBVgeBcANQA7AHA+AbQBPAiA5AuIAKAJQBpBaBfB7QAwA+ApBDQDbFjCOHgQBADZAwDwQA4EcAfEsQA2IDgYIgQgEBngIBnQgYFthBFFQhbHPieGGQhZDdhwDKQhlC3iICTQiSCbjHB0IggARQjbB2jhAlQhjAQhiAAQhtAAhsgTg");
	this.shape_259.setTransform(951.7,1312.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFB69F").s().p("EAmTAxjQgsgHgxgFQh8gKiYgBQhmAEhSgDQhugChSgDIiagFQjHgDirgHIlAgQIg3gDQjRgOi3gSQlwgmlyhJQjOgqisgnIhegWQiPgiiCghQoZiGm4i6QmkixlEjbQhIgwhEgzQsSpIlvuyQgVg2gaheQgrifhElMIgShVQhUmEhTijIgKgUQg4hvArhaQAghDBphCIARgLQBpg/C/g8IA1gQQDMg9CqgMQAzgDAwACQBsAGBKA7QAzAoAgA8IADAEQAhBEAFBGQgvFNB/FRQB/FVEpFEQBpBzB7BzQDoDXEiC0QGZD/HXCaQBDAWBeAcIBWAbIENBSIC4A1QC5AyCaARQBSAKBcAIIAqACQAVAEDNAcIB9ASQDlAdB0gcQAUgFAPgJQBVgkhXhjQhAg8gsgyQgfghgPgaQgxhTgzhSIheiVQhKh1hFhjQhciJhTh2QjwlaiZjRQhChZg7hVQqhvEAAu6QAAjSAjhNQAHgPAJgMQAwhGDKheQAegOAggNQClhDBRBZQAfAfAUA8QARA6ASCtQAGA4ATBTQArCeL1MOIBABCQEOEXEhEhQC0C5CNCGIAMAMQCQCNCcBrQC0B+CrA/QA4AUAyALQECA4BsjEQAng7AWhWQAWhUgJiDQgGhJgQhkQgsj7AAiQIAAgOQgBk3AglHQAKhxAHh/QAGhcAEhXQAQjogEjLQAGi3AAhnQAAhVAUhIQAXhWAwhJQA+hnBbg7QArgdAzgUQBTghBcAJQA6AFA+AZQBPAfA7AsIAKAIQBqBWBiB6QAxA9AqBDQDcFiCSHiQBCDZAwDwQA7EcAhEuQA5IEgVIiQgEBngHBnQgWFvhAFFQhZHSicGGQhZDfhvDLQhkC4iICVQiQCcjIB2IggARQjaB3jhApQhrAThrAAQhkAAhkgRg");
	this.shape_260.setTransform(952.1,1313.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFB69F").s().p("EAmkAxrQgsgGgxgFQh+gIiXgBQhmADhSgEQhtgChUgEQhMgDhPgBQjKgDiogHIlDgQIg3gDQjSgNi3gSQlugll2hMQjQgrirgnIhfgXQiQgiiBggQoaiGm7i9QmjiylGjeQhIgwhEgzQsTpNlxuzQgVg3gahdQgsiehElPIgShVQhUmFhUikIgKgUQg4hwArhaQAghCBphDIARgLQBqg/DAg8IA1gQQDNg9CqgLQA0gEAvADQBsAHBKA8QAzApAfA8IACAEQAgBFAEBGQguFPB+FSQB+FYEpFDQBqByB7B0QDqDXEiC1QGeEDHUCYQBBAWBhAdIBWAbIEOBSIC4A1QC6AxCaARQBRAJBeAJIAqADQAYAEDLAcIB9ASQDmAfBzgdQAUgFAPgJQBTglhWhkQhAg8gsg0QgeghgQgaQgxhTgzhSIhfiVQhKh2hFhkQhdiJhTh2QjwlbiajSQhDhag6hVQqlvHAAu9QAAjSAjhOQAHgPAJgLQAyhGDKhfQAegOAggMQClhCBRBbQAeAfAUA9QARA7ASCtQAFA3AVBUQAxCjLwMNIBABDQENEYEhEkQC4C+CJCCIAMAMQCPCMCeBtQC1B+CsA/QA4AVAyALQEDA6Bui+QAqg6AXhUQAYhUgIiDQgGhJgOhlQgrj4gBiVIAAgOQgClBAek+QAKhxAHh/QAFhdAChYQAPjkgIjQQAEi3gChoQgBhWAThIQAVhWAuhJQA7hpBYg9QAqgfAxgVQBRgkBbAGQA7ACA9AWQBPAcA8AqIALAIQBsBRBkB5QAzA9ApBCQDfFhCVHkQBDDZAyDxQA8EcAjEvQA9IGgSIiQgEBogGBnQgUFyg+FEQhYHWibGHQhXDfhvDMQhkC6iGCWQiPCdjIB4IggASQjZB4jjAsQh0AVhzAAQhcAAhbgNg");
	this.shape_261.setTransform(952.5,1314.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFB69F").s().p("EAm1AxyIhdgJQh/gHiXgCQhmADhTgEIjBgHQhMgDhQgCQjNgCimgHIlEgPIg4gDQjUgNi2gRQltgll6hOQjSgtipgnIhfgWIkThDQoaiGm9i/QmjizlIjhQhIgwhEg0QsUpQlzu1QgWg4gahcQgridhFlSIgThWQhUmGhTikIgLgUQg4hwArhbQAghDBqhCIARgLQBqhADAg7IA2gQQDNg+CrgKQA0gEAwAEQBsAIBJA9QAyAqAfA8IACAFQAeBEADBHQgtFRB8FSQB/FbEpFCQBqBzB8BzQDrDYEjC2QGiEHHRCWQBAAVBiAeIBXAbQB9AnCRArIC5A1QC7AxCaAQICwATIAqADIDjAhIB9ATQDpAfBxgdQAUgFAPgJQBRgmhWhmQg+g8gtg1QgeghgQgaQgxhTg0hTIhgiWQhJh2hGhkQhciKhTh3QjxlbibjTQhDhbg7hVQqovKAAu/QAAjUAkhMQAHgPAJgMQAyhGDLhfIA+gaQCmhBBQBeQAdAfATA+QARA8ASCsQAGA3AWBUQA3CoLrMOIA/BCQEOEaEhEnQC7DDCFB+IAMAMQCOCLChBuQC1B+CtBAQA3AVAzAMQEDA8Byi4QArg4AZhUQAahTgHiDQgFhJgOhmQgpj1gCiaIAAgOQgDlLAdk1QAJhxAGiBQAEhcAChZQAMjhgLjUQABi3gChpQgChWARhJQAUhWArhLQA4hqBVg/QAoghAxgWQBPgnBaADQA6AAA9ATQBPAZA+AnIALAIQBuBMBmB5QA0A9AqBCQDhFfCYHmQBEDZA0DxQA+EdAkEvQBAIJgPIiQgCBogGBoQgSFzg9FFQhXHaiYGGQhXDhhuDNQhjC7iGCXQiNCfjJB6IggASQjYB6jjAuQh9AZh8AAQhTAAhTgLg");
	this.shape_262.setTransform(952.9,1315.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFB69F").s().p("EAnFAx6QgsgFgxgDQiAgFiWgCQhmAChUgFIjCgIQhMgDhRgBQjPgBilgHQh8gHjJgIIg4gDQjWgNi1gRQlrgkl/hRQjUgtiognIhfgXIkUhEQoaiFnAjBQmji1lJjjQhIgwhFg0QsVpVl1u3QgWg4gahbQgsichFlVIgThWQhUmIhUilIgKgTQg5hxAshbQAfhDBrhDIARgLQBrg/DBg8IA1gQQDOg9CsgLQA0gDAvAEQBsAJBJA/QAyArAeA9IACAEQAcBFADBHQgtFTB7FSQB+FfEqFAQBrBzB8BzQDsDZEkC2QGmELHOCVQA+AUBlAfIBXAbIEPBSQBaAbBgAaQC7AxCbAPICxAUIAqADIDjAiIB9ATQDqAgBxgdQAUgFAPgKQBOgmhVhnQg9g9gtg3QgegggQgbQgxhTg1hUIhgiVQhKh3hFhkQhdiLhTh3QjylcibjVQhDhbg7hVQqsvMAAvCIAAAAQAAjVAkhMQAHgPAJgMQAzhGDLheQAfgOAggNQCmhBBPBiQAcAfAUA+QAQA+ASCsQAFA2AZBVQA8CtLmMNIA/BDQENEbEiEpQC+DICBB7IAMAMQCNCKCkBvQC2B+CtBBQA3AVAzAMQEFA/B0iyQAtg3AahTQAchTgGiDQgEhJgOhnQgnjygCifIgBgOQgElUAcksQAJhyAFiBQADhcABhaQAKjdgOjaQgBi3gFhqQgChWAQhJQARhXAqhLQA1hsBShCQAmghAwgYQBMgpBagBQA6gCA9AQQBPAWA/AlIALAHQBwBIBpB3QA1A9AqBCQDjFdCcHoQBFDaA1DyQBAEdAmEwQBDILgLIjQgCBogFBnQgQF2g9FFQhVHdiWGHQhWDihtDOQhjC8iFCZQiLCfjKB8IggATQjXB7jkAxQiHAdiGAAQhKAAhJgJg");
	this.shape_263.setTransform(953.3,1316.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFB69F").s().p("EAnWAyCQgtgEgxgDQiBgEiWgCQhmAChUgGIjDgIQhMgEhRgBQjTgBiigGIlHgPIg4gDQjYgMi0gRQlqgjmChUQjXguingnIhfgYIkUhDQociFnCjEQmji1lLjmQhIgxhEg0QsXpal3u4QgWg4gahbQgsiahGlYIgThXQhUmJhUilIgKgUQg5hxArhbQAghDBrhEIARgLQBrg/DCg8IA1gQQDPg+CsgJQA1gDAvAEQBsAKBIBBQAyArAdA9IACAEQAaBGADBHQgtFVB7FTQB9FiEqE/QBsBzB8BzQDuDZEjC3QGsEPHLCUQA8ATBoAgIBXAbQCBAoCOAqIC6A1QC9AwCbAPICxAUIAqAEQAfAGDFAdIB9ASQDsAiBwgdQAUgGAOgKQBMgnhUhoQg8g9gug4QgdghgRgbQgxhTg2hUQg+hfgig3QhKh3hFhlQhdiMhTh3QjylcicjWQhEhcg7hVQqwvPAAvEIAAgBQAAjWAlhMQAHgOAJgMQA0hGDMhfQAfgOAfgMQCnhABOBkQAcAfATA/QARA/ARCrQAFA2AbBWQBBCyLhMNIA/BDQENEdEiErQDBDNB+B3IALAMQCNCJCmBxQC2B+CuBCQA3AVA0AMQEFBBB3isQAvg1AchTQAehSgFiDQgEhIgNhpQgmjugDikIAAgPQgGleAbkjQAJhyADiBQADhdAAhaQAJjagTjfQgDi3gGhrQgDhXAPhIQAPhYAohMQAxhtBPhEQAlgjAugaQBLgrBZgFQA6gEA9AOQBPATBAAiIAMAGQBxBEBrB3QA2A8ArBBQDlFdCgHpQBGDbA3DxQBAEeApExQBHINgJIjQgBBpgFBnQgOF5g7FFQhUHgiUGHQhVDkhtDPQhiC8iECbQiKCgjKB/IggATQjXB8jkA0QiQAhiOAAQhCAAhAgHg");
	this.shape_264.setTransform(953.8,1317.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFB69F").s().p("EAnmAyKQgtgDgxgCIkYgFQhmAChUgHIjEgKQhNgDhRgBQjVAAihgHQh2gGjSgIIg5gDQjagMizgQQlogjmHhWQjZgwilgnIhggXIkVhEQociFnEjGQmki3lMjoQhIgxhEg1QsZpel4u5QgXg5gahbQgriYhIlbIgShXQhUmKhUinIgLgUQg5hxArhbQAghEBrhDIASgLQBrg/DCg8IA2gRQDQg9CsgJQA1gDAwAFQBrAKBIBCQAyAtAbA9IADAFQAYBGADBHQgtFXB5FTQB9FlErE+QBsB0B9ByQDvDZEkC5QGwESHHCTIClAzIBYAbQCCApCOAqIC6A0QC+AwCbAOICyAVIArAEQAhAGDCAdIB+AUQDtAiBvgdQAVgGANgLQBJgnhThqQg6g9gvg6QgcgggSgcQgxhSg2hVIhhiWQhKh4hFhlQhdiNhUh3QjyldidjXQhEhdg7hUQq0vSAAvHIAAgBQAAjXAlhLQAHgPAKgMQA1hGDMhfQAfgOAfgMQCng/BOBnQAbAeATBBQAQBAARCrQAGA0AcBYQBGC3LdMMIA/BDQEMEfEiEtQDFDSB5B0IAMAMQCMCICoByQC3B+CuBDQA4AVAzANQEHBCB5ilQAyg0AdhSQAghRgEiEQgDhHgNhqQgkjrgEiqIAAgPQgIloAakaQAJhyADiCQAChcgChbQAHjXgWjkQgFi2gHhsQgFhYAOhIQAOhYAlhNQAvhvBLhGQAkglAtgbQBJguBYgIQA5gHA9AMQBPAQBCAfIAMAGQBzBABtB2QA4A7ArBBQDnFbCjHsQBHDbA4DyQBDEdAqEyQBKIPgFIkQgBBpgEBoQgMF6g6FGQhSHjiSGIQhUDlhtDQQhiC9iCCcQiJCijLCBIgfATQjXB+jlA3QiaAkiYAAQg3AAg3gFg");
	this.shape_265.setTransform(954.3,1318.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFB69F").s().p("EAn2AyTIhegEIkYgEQhmAChVgIQhpgHhcgEQhNgDhSgBQjYAAiegGIlKgOIg5gDQjcgLizgQQlmgjmLhYQjbgxijgnIhhgYIkVhEQodiEnHjJQmji4lOjqQhIgyhFg1QsZpil6u7QgYg6gahaQgsiWhHlfIgThXQhUmMhVimIgKgVQg6hxAshcQAghDBrhEIASgLQBsg/DCg8IA2gRQDRg9CtgJQA1gDAvAGQBsALBIBEQAxAtAbA+IACAEQAWBHACBIQgsFYB4FTQB9FpErE9QBtBzB9BzQDwDZElC6QG0EWHFCRIClA0IBYAbQCFApCMApQBbAbBgAaQC+AvCcAOQBLAIBoANIAqAEQAkAHDAAeIB+ATQDuAjBvgdQAUgFAOgMQBGgnhShsQg5g9gvg7QgcghgSgcQgxhSg4hWQhBhjgggzQhKh4hFhmQhdiNhUh4QjzleidjYQhFhdg7hUQq3vVAAvKIAAAAQAAjZAlhLQAHgOAKgNQA2hGDMheQAfgOAggMQCng/BNBqQAbAfASBBQAQBBARCqQAFA0AfBZQBMC8LXMMIA/BEQEMEgEiEvQDIDXB2BxIALALQCLCICrBzQC4B+CuBDQA4AWA0ANQEHBEB8ifQA0gyAehRQAihRgDiEQgChHgMhrQgjjogEiuIgBgQQgIlxAZkSQAIhyABiCQAChdgDhbQAFjUgZjpQgIi2gIhtQgGhYAMhIQANhZAjhOQArhwBJhJQAigmAsgcQBHgxBXgLQA5gKA9AKQBPAMBDAdIAMAGQB1A7BwB1QA4A7AsBBQDpFaCmHtQBJDbA6DyQBEEeAsEzQBOISgDIkQAABpgDBoQgKF9g5FGQhRHmiQGIQhTDmhsDRQhiC/iBCdQiICjjLCDIgfATQjWCAjlA6QijAoiiAAQguAAgvgDg");
	this.shape_266.setTransform(954.7,1319.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFB69F").s().p("EAoGAycIhegDQiFAAiUgCQhnABhVgJQhngHhfgFQhMgDhTgBQjaABidgGQhvgFjdgIIg4gDQjfgLixgQQllgimPhaQjegzihgnIhhgYIkXhFQodiDnKjMQmji5lPjtQhIgyhFg1Qsbpml8u9QgXg7gbhZQgriVhJlhIgShYQhVmNhUinIgLgVQg6hyAshbQAghEBshEIARgLQBtg/DDg8IA2gRQDSg9CtgJQA1gCAwAFQBrANBHBFQAxAuAaA/IACAEQAVBHACBIQgsFbB3FTQB8FsEsE8QBtBzB+BzQDxDZElC7QG5EaHCCQICmAzIBYAcQCHAqCKAoQBcAbBgAZQC/AwCcAMQBKAIBqAOIArAFQAmAHC9AeQA9ALBBAJQDwAkBvgeQAUgFANgMQBEgohRhtQg5g9gvg9QgcghgSgdQgxhRg4hXQhDhkgfgyQhKh4hFhnQhdiOhVh3QjzlfiejaQhFhdg7hVQq7vXAAvMIAAgBQAAjZAlhLQAIgPAKgMQA3hGDMheQAfgPAggLQCog+BMBsQAaAfASBCQAQBDARCpQAFAzAgBaQBRDBLTMLIA/BFQELEhEiExQDMDdBxBtIAMALQCKCHCtB1QC5B+CvBEQA4AWA0ANQEIBHB+iaQA2gxAghPQAkhRgCiEQgChHgLhsQghjlgFizIgBgQQgKl7AYkJQAIhyABiDQAAhdgDhcQADjQgdjuQgKi2gKhuQgGhZALhIQAKhaAhhOQAphyBFhLQAggnArgeQBFgzBXgPQA4gMA9AHQBPAKBFAaIAMAFQB3A3ByB0QA6A7ArBAQDsFZCpHvQBLDcA6DyQBGEeAuE0QBRIUABIlQAABpgDBoQgHF/g4FGQhPHpiPGJQhSDohrDSQhhC/iBCfQiGCkjMCFIgfAUQjVCBjmA9QiuAtirAAQglAAgkgCg");
	this.shape_267.setTransform(955.2,1320.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFB69F").s().p("EAoWAykIhegBQiHACiTgDQhnABhVgKQhngIhggEQhMgEhUgBQjdACibgGQhrgFjigIIg5gDQjggLixgPQljgimThcQjgg0ihgnIhhgYIkXhFQoeiEnMjOQmji6lRjvQhIgzhFg1Qscprl+u9QgYg8gahYQgsiUhJllIgThYQhUmOhVioIgKgUQg7hzAshcQAghEBshEIASgLQBtg/DEg8IA2gRQDSg9CugIQA1gDAwAGQBsAOBGBHQAxAvAZA+IACAFQATBHABBIQgrFdB1FTQB9FwErE7QBvBzB+ByQDyDaElC8QG+EeG/COICmA0IBZAbQCIArCKAoQBcAbBgAZQDAAvCdAMQBIAHBsAPIArAFQAoAJC8AeQA9AKBBAKQDyAkBtgdQAUgGANgMQBCgphRhuQg3g+gwg+QgbghgTgdQgxhRg5hXQhEhngegvQhKh6hFhnQheiOhUh4Qj0lfifjbQhFhfg7hUQq/vaAAvPIAAAAQAAjbAmhKQAHgPALgMQA3hHDNheQAfgOAggMQCog9BMBvQAZAfARBDQAQBEARCpQAFAyAiBbQBXDGLNMLIA/BFQELEjEjEzQDPDiBtBpIAMAMQCJCGCwB1QC5B/CvBEQA4AWA0AOQEKBJCBiUQA4gvAhhOQAmhRgBiEQgBhHgLhtQggjigFi4IgBgQQgLmFAXj/QAIhzgBiEQAAhcgFhdQABjNggjzQgNi2gKhvQgIhZAKhIQAJhbAehOQAmh0BChNQAfgpApgfQBDg2BWgSQA4gPA9AFQBPAGBGAYIANAFQB5AyB0BzQA7A7AsBAQDtFXCtHxQBMDcA8DzQBIEfAwE0QBUIWADIlQACBqgDBpQgFGAg3FHQhOHsiMGJQhSDphqDTQhhDBh/CgQiFCljMCHIggAUQjTCDjnA/Qi4Ayi1AAIg2gBg");
	this.shape_268.setTransform(955.7,1321.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFB69F").s().p("EAitAytQhnAAhWgKQhmgJhhgFQhNgDhUgBQjgACiYgFQhpgFjmgIIg6gDQjigKiwgQQlhghmYheQjig2ifgnIhhgYIkYhGQofiCnOjRQmji7lTjyQhIgzhFg2Qsepul/vAQgYg8gbhYQgsiShKloIgShZQhVmPhVioIgKgVQg7hzAshcQAghEBthEIASgLQBthADEg8IA3gQQDTg+CugHQA1gDAwAHQBsAOBGBIQAwAwAZA/IACAFQARBIABBIQgrFfB0FTQB8F0EsE5QBvB0B+ByQDzDaEmC8QHDEjG7CMICoA0IBYAcQCLArCIAnQBdAbBgAZQDBAvCdALQBIAHBtAQIArAFQArAJC5AeIB+AVQD0AlBsgdQAVgGAMgNQA/gphQhvQg2g+gwhAQgbghgTgeQgxhRg6hYQhFhogdguQhKh5hFhoQheiPhVh4Qj0lgigjdQhFheg7hUQrDvdAAvSIAAAAQAAjcAmhKQAIgPALgMQA4hHDNheQAfgOAggLQCpg9BKByQAZAfARBDQAQBGAQCoQAFAyAlBcQBbDKLJMLIA/BFQELElEiE1QDTDnBpBmIAMALQCICGCyB3QC6B+CwBFQA4AXA0AOQELBKCDiNQA6guAjhNQAohRAAiEQgBhGgKhvQgejegGi9IgBgRQgMmOAVj3QAIhygCiFQgBhdgFhdQgBjKgkj4QgPi1gMhxQgIhZAIhIQAHhbAchQQAjh1A/hPQAdgqAoghQBCg4BVgWQA3gRA+ACQBOADBIAWIANAEQB7AuB2ByQA8A6AsBAQDwFWCwHzQBNDcA+DzQBJEfAyE2QBYIYAGIlQACBrgCBoQgDGDg1FHQhNHviKGKQhRDqhqDUQhgDCh/CiQiDCljNCKIgfAUQjTCEjoBDQjTA8jQgFIhfgBQhJAChMAAIiFgBg");
	this.shape_269.setTransform(956.2,1322.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFB69F").s().p("EAi8Ay3QhnAAhWgLQhmgKhjgFQhNgDhUgBQjjADiXgFQhkgFjsgIIg6gCQjkgLivgPQlgggmchhQjkg3idgnIhigYQiZgniAgfQofiDnRjTQmji8lUj0QhIg0hGg2QsepzmBvAQgZg+gbhXQgsiQhKlrIgThZQhVmRhVipIgKgVQg8hzAshcQAhhEBthFIASgLQBtg/DGg9IA2gQQDUg+CugHQA2gCAwAHQBsAPBFBKQAxAxAXA/IACAFQAPBIABBJQgrFhBzFTQB8F3EsE4QBwB0B/ByQD0DaEmC9QHIEnG4CLICoA0IBZAcQCNArCGAnQBeAbBgAZQDCAuCdALQBGAGBvARIAsAGQAtAJC3AfQA+ALBAAKQD1AmBsgeQAVgGAMgNQA8gqhPhwQg0g/gxhBQgbgggTgfQgxhQg7hZQhHhqgcgsQhKh6hFhpQheiQhVh4Qj0lhihjdIiBizQrHvgAAvUIAAgBQAAjdAnhJQAIgPALgNQA5hGDNheQAggOAggLQCpg8BKB0QAXAfARBFQAQBHAQCnQAFAxAnBdQBhDQLDMKIA/BFQEKEnEjE3QDWDsBlBiIAMAMQCICEC0B4QC7B/CwBGQA4AWA1APQELBNCGiIQA8gsAkhMQAqhRACiEQAAhFgKhxQgdjagGjDIgBgRQgOmYAUjuQAIhygDiFQgChdgGheQgDjHgoj9QgRi1gNhyQgJhaAHhHQAFhcAahQQAgh3A7hSQAdgrAmgiQBAg7BUgaQA3gTA+AAQBOAABJATIANAEQB9ApB5ByQA9A5AtA/QDxFVC0H1QBODdA/DzQBLEfA0E3QBbIaAKImQACBrgBBpQgCGFg0FHQhLHyiIGKQhQDshqDVQhfDCh+CkQiBCnjOCMIgfAUQjSCGjpBFQjTA+jQgCIhfABQhVADhaAAIhsgBg");
	this.shape_270.setTransform(956.8,1323.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFB69F").s().p("EAjLAzCQhnAAhXgMQhkgLhlgFQhNgEhVAAQjmADiVgFQhhgFjxgHIg5gDQjngKiugOQleggmghkImCheIhigZQiagoiBgeQofiDnUjVQmji9lVj3QhIg0hGg3Qsgp3mDvCQgZg+gbhWQgsiPhLlvIgThZQhVmRhUirIgLgUQg8h0AshcQAhhFBuhEIARgLQBuhADGg8IA3gRQDUg+CvgGQA3gCAwAHQBrARBFBLQAwAyAWA/IACAFQAOBIAABKQgqFiByFUQB7F7EtE2QBwB0B/ByQD2DaEnC+QHLErG2CJQAwAQB5AlIBZAcQCOAsCGAnQBeAaBgAZQDDAuCdAKQBFAGBxASIAsAGQAwAKC0AfQA/ALA/AKQD3AnBrgeQAVgGAMgOQA6gqhOhxQg0g/gxhDQgbghgTgeQgxhRg8hZQhIhsgbgrQhKh6hFhpQheiRhWh4Qj1liihjeIiBi0QrLviAAvXIAAgBQAAjeAohJQAHgPALgNQA6hGDOheQAggOAggLQCpg7BKB3QAWAfARBFQAQBIAQCnQAEAwApBfQBmDUK/MKIA/BGQEJEoEjE6QDaDxBhBeIAMAMQCHCDC2B5QC8B/CwBHQA5AXA0APQENBOCJiBQA+grAlhLQAshRADiEQAAhFgJhxQgbjYgHjIIgBgQQgQmiAUjlQAHhzgEiGQgChcgIhfQgEjEgskBQgTi2gOhyQgLhbAGhHQAEhdAXhRQAdh4A4hUQAbgsAmgkQA9g+BUgdQA3gWA9gCQBOgEBLARIANAEQB/AkB7BxQA+A5AtA/QD0FUC3H3QBQDcBAD0QBMEgA2E3QBeIcANInQADBsAABoQAAGHgzFIQhJH2iHGKQhPDshpDXQheDDh+CmQiACnjOCOIgfAVQjRCHjpBIQjUBBjQACIhfACQhcAEhgAAIhggBg");
	this.shape_271.setTransform(957.3,1324.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFB69F").s().p("EAjZAzNQhnAAhXgNQhjgMhngFQhNgEhVAAQjpAEiTgFQhegEj1gIIg6gCQjpgKiugOQlcggmkhlImDhgIhigaQibgniAgfQohiCnWjYQmii+lXj5QhJg1hFg3Qsip7mEvEQgag/gbhVQgsiNhMlyIgThaQhVmThViqIgKgVQg9h0AthdQAghEBvhFIARgLQBuhADHg8IA3gRQDVg+CwgGQA2gCAwAIQBrASBFBMQAwAzAWBAIABAEQAMBKAABJQgqFlBxFUQB7F+EtE1QBxB0B/ByQD3DaEnC/QHREvGyCIQAvAPB7AmIBZAcQCRAtCEAlQBfAbBfAYQDFAvCdAJQBEAFBzATIAsAGQAyALCyAfQA/AMA/AKQD5AnBqgeQAVgGAMgOQA3grhNhyQgzhAgyhEQgagggTggQgyhQg8haQhKhtgagqQhKh6hFhqQheiRhWh5Qj1liiijgIiCi0QrOvlAAvaIAAAAQAAjgAohJQAHgOAMgNQA6hGDPheQAggPAfgKQCqg7BJB6QAWAfAQBGQAQBKAQCmQAEAvArBgQBrDZK6MKIA/BGQEJEpEjE8QDdD3BdBaIAMAMQCHCDC4B6QC8B/CxBIQA5AWA1AQQENBQCMh7QBAgpAnhLQAthQAFiEQAAhEgJhzQgZjUgIjNIAAgRQgRmsASjcQAHhzgFiGQgDhdgJhfQgGjBgwkGQgVi2gPhzQgMhbAEhIQADhdAVhSQAah5A1hXQAZgtAkgmQA8hABTghQA2gYA+gFQBOgGBMAOIANADQCBAhB9BwQBAA4AtA/QD2FSC7H5QBRDdBBD0QBOEgA4E4QBiIfAQInQADBsAABoQACGKgxFHQhIH5iFGLQhODuhoDYQheDEh9CnQh+CojPCRIgfAUQjRCJjpBLQjVBEjPAEIhgAEQhkAFhmAAIhTgBg");
	this.shape_272.setTransform(957.8,1325.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFB69F").s().p("EAjoAzYQhoAAhXgOQhjgNhogFQhNgEhWAAQjsAFiRgFQhagEj7gIIg6gCQjrgJitgOQlagfmohoImEhhIhjgaQicgoiAgfQohiBnYjaQmjjAlYj8QhJg0hFg4Qsjp/mGvFQgahAgbhVQgtiMhMl1IgThaQhVmUhVirIgLgVQg9h0AthdQAghFBvhFIASgLQBuhADIg8IA3gRQDWg+CwgFQA3gCAwAIQBrASBEBOQAwA0AUBAIACAFQAKBKgBBJQgpFnBvFUQB7GCEtE0QByB0CABxQD4DbEoDAQHVEzGvCGICqA1IBaAcQCSAuCDAlQBgAbBfAYQDGAuCdAJQBDAFB1ATIAsAHQA0ALCxAfQA/AMA/AKQD6ApBpgeQAVgGAMgPQA1grhNh0QgxhAgyhGQgagggUggQgyhQg9hbQhLhvgZgnQhKh8hFhpQhfiThWh5Qj1liijjiIiCi0QrSvoAAvcIAAgBQAAjhAohIQAIgOALgNQA8hHDOheQAhgOAfgLQCqg5BJB8QAVAfAQBHQAPBLAQCmQAEAuAtBhQBxDeK1MKIA+BGQEJErEjE+QDhD7BZBYIAMALQCGCCC6B8QC9B/CyBIQA4AXA1AQQEPBSCOh1QBCgnAphKQAvhPAGiFQABhEgJh0QgXjRgJjSIAAgSQgTm1ARjTQAHhzgGiHQgEhdgKhgQgIi9gzkMQgXi0gRh1QgNhcADhHQABheAThSQAXh7AyhZQAYgvAjgnQA5hDBTgkQA2gbA9gHQBOgKBOAMIANADQCDAcCABvQBAA4AuA+QD4FRC+H7QBSDdBDD1QBQEgA5E5QBlIhATIoQAEBsABBpQAEGLgwFIQhHH8iCGLQhNDvhoDZQheDFh7CpQh9CpjPCTIgfAVQjQCKjrBOQjUBGjQAIIhgAFQhlAGhnAAIhRgBg");
	this.shape_273.setTransform(958.4,1326.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFB69F").s().p("EAj2AzkQhngBhYgPQhigNhqgFQhNgEhXAAQjuAFiPgFIlXgLIg6gCQjtgJisgOQlZgemshqImFhjIhjgaQidgoh/gfQoiiBnbjdQmjjBlZj+QhJg1hGg4QskqDmIvHQgahAgchUQgsiLhNl4IgThaQhVmVhVisIgLgVQg9h1AshdQAhhFBvhFIASgLQBvhADIg9IA3gQQDXg+CwgGQA3gBAxAJQBqATBFBPQAvA1ATBBIACAEQAJBKgCBKQgoFpBtFUQB7GFEuEzQByB0CAByQD5DbEpDBQHZE2GsCFICrA2IBaAcQCVAuCBAlQBhAbBfAXQDGAuCeAIQBCAFB2AUIAtAHQA2AMCuAfQBAANA/AKQD8ApBogeQAVgGALgQQAzgrhMh2QgwhAgzhHQgZgggVghQgxhPg+hcQhNhxgYgmQhJh7hGhrQheiThXh5Qj2ljijjjIiDi1QrWvqAAvfIAAgBQAAjiAphIQAIgOAMgNQA8hHDPhdQAggPAggKQCqg5BIB/QAVAfAPBIQAPBMAQClQAEAuAvBiQB2DjKwMJIA+BHQEJEsEjFAQDkEBBVBUIAMALQCFCBC9B9QC+B/CyBJQA4AXA2ARQEPBUCRhvQBEgmAqhJQAyhPAGiFQAChDgIh2QgWjNgJjXIgBgSQgUm/ARjKQAGh0gHiHQgFhdgLhhQgKi6g2kQQgai1gSh2QgOhcAChHQgBheARhUQAUh8AuhcQAXgwAigoQA3hGBSgnQA1gdA+gKQBOgNBPAJIAOADQCEAXCCBvQBCA3AuA+QD6FQDBH9QBUDdBED1QBSEhA7E6QBpIiAWIqQAEBrACBpQAGGOgvFIQhGH/iAGMQhMDwhoDaQhdDGh6CqQh8CrjQCVIgeAVQjQCMjqBQQjWBJjQALIhgAGQhqAIhsAAIhIgBg");
	this.shape_274.setTransform(959,1327.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFB69F").s().p("EAkFAzwQhogBhYgPQhhgPhsgFQhNgEhXAAQjyAGiMgFQhUgDkFgIIg6gCQjvgIirgOQlXgemxhsImFhkIhkgaQiegph/gfQojiAndjfQmijDlckAQhIg1hHg5QslqHmKvJQgahBgchTQgsiJhOl7IgThbQhVmXhWisIgKgVQg+h1AtheQAghFBwhFIASgLQBvhADJg9IA3gQQDYg+CxgFQA3gCAwAJQBrAVBEBRQAvA1ATBBIABAFQAHBKgCBLQgoFqBsFVQB7GIEuEyQBzB0CABxQD6DcEpDCQHfE6GpCEICrA1IBaAcQCXAvCAAkQBhAcBfAXQDIAtCeAIQBBAEB4AVIAsAHQA6ANCrAgQBAAMA/AKQD9AqBogeQAVgGALgQQAwgshLh3QgvhAgzhJQgZgggVghQgyhPg+hdQhPhygWgkQhKh9hFhqQhfiUhXh6Qj2lkikjkIiDi1QravtAAviIAAAAQAAjkAphHQAIgOAMgOQA9hGDPheQAhgOAfgLQCrg4BHCCQAUAfAQBJQAOBNAQClQAEAtAwBjQB8DoKrMJIA/BHQEIEtEjFDQDnEGBSBQIALALQCFCBC/B+QC/B/CyBKQA5AXA1ARQERBWCThpQBGgkArhIQA0hPAIiFQAChDgHh3QgVjKgKjcIAAgSQgVnJAPjBQAGh0gIiIQgGhdgMhhQgMi3g6kVQgbi1gUh3QgPhcABhIQgDhfAPhTQAQh/AshdQAVgyAggqQA2hIBRgrQA1gfA9gNQBPgPBQAGIAOACQCGATCFBuQBDA3AuA+QD8FODFH/QBVDeBGD1QBTEhA9E7QBsIlAZIpQAFBsACBpQAIGQgtFIQhEIDh/GMQhMDyhmDbQhdDHh5CrQh6CsjRCXIgfAVQjOCOjrBTQjWBMjQAOIhhAHQhrAJhsAAIhHgBg");
	this.shape_275.setTransform(959.5,1328.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFB69F").s().p("EAkTAz9QhogBhZgRQhggPhtgFQhOgEhXAAQj0AGiLgEQhQgEkKgHIg7gCQjxgIiqgNQlWgem0huImGhmIhkgaQifgqiAgeQojiAnfjiQmjjDldkDQhIg2hHg4QsmqMmMvKQgbhCgbhTQgtiHhOl+IgThcQhWmXhViuIgLgVQg+h1AtheQAghFBxhFIASgLQBvhBDKg8IA3gRQDZg+CxgEQA3gCAxAKQBqAVBEBTQAuA2ASBBIACAFQAFBLgDBLQgnFsBrFVQB6GMEuEwQB0B0CBByQD7DbEqDDQHjE/GmCCICsA1IBaAdQCZAvB/AkQBhAbBfAXQDJAtCeAHQBAAEB6AWIAtAHQA7AOCqAgQBAAMA+ALQD/AqBngeQAVgGALgQQAtgthKh4IhhiLQgZgggVgiQgyhPg/hdQhQh0gWgjQhJh8hGhsQhfiUhWh6Qj3lliljlIiEi2QrdvwAAvkIAAAAQAAjlAphHQAIgOANgNQA+hHDPheQAhgOAfgKQCsg4BGCFQATAfAPBJQAPBPAPCkQAEAsAzBkQCBDtKmMJIA+BHQEIEvEkFFQDqELBNBNIAMALQCECADCB/QC/B/CyBLQA5AXA2ASQERBYCWhjQBJgjAshHQA2hOAJiHQAChBgGh4QgTjHgLjiIAAgSQgXnSAOi5QAGhzgJiJQgGhdgNhiQgOizg+kbIgyksQgQhdgBhIQgEhfAMhVQAOh/AohgQATgzAggsQAzhKBRgvQA0giA+gPQBOgSBSAEIAOABQCIAPCHBtQBEA2AuA+QD/FNDIIBQBWDeBHD1QBVEhA/E8QBvInAdIqQAGBtACBpQAKGSgsFIQhDIGh8GNQhLDzhmDcQhcDIh5CtQh4CsjRCaIgfAVQjOCPjsBXQjWBOjQARQgwAFgxAEQhvAKhvAAIhBgBg");
	this.shape_276.setTransform(960.1,1329.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFB69F").s().p("EAkhA0KQhogChZgRQhfgQhvgGQhOgEhYABQj3AGiIgEQhNgDkPgHIg7gCQjzgIiqgNQlTgdm5hxImHhmIhkgbQiggqh/geQokiAnijkQmjjElekGQhJg2hGg5QsoqQmNvLQgchDgbhSQgtiGhPmBIgThcQhWmZhViuIgLgVQg/h2AtheQAhhFBxhGIASgLQBwhADKg9IA3gQQDag/CxgDQA4gCAxAKQBqAXBDBTQAuA4ARBBIACAFQADBMgDBLQgnFuBqFVQB6GPEuEwQB1B0CBBxQD9DcEpDEQHoFCGjCBICtA2IBbAcQCaAwB+AjQBiAbBfAXQDJAtCfAGQA+ADB8AYIAtAHQA+AOCoAgQBAANA+ALQEBArBmgeQAVgHALgQQAqguhJh5IhhiMQgYghgVghQgyhPhAheQhSh2gUghQhKh9hFhsQhgiVhXh6Qj3lmiljmIiEi2QrivzAAvnIAAAAQAAjmAqhHQAIgOANgNQA/hHDQheQAhgOAfgKQCsg3BFCHQATAfAPBLQAOBQAPCjQAEAsA1BlQCGDyKhMIIA+BIQEIExEjFHQDuEQBKBIIALAMQCDB/DECAQDAB/CzBMQA5AYA2ARQETBaCYhcQBLgiAuhFQA3hPAKiGQAEhBgHh6QgRjDgLjnIgBgSQgYndANivQAGh0gKiJQgHhdgOhjQgQiwhBkfIg2kuQgRhdgDhHQgFhhAJhVQALiBAlhiQASg1AegtQAyhNBQgyQA0gkA9gRQBOgWBUABIAOABQCKALCJBsQBGA2AvA9QEAFMDMICQBXDfBJD1QBWEiBBE9QBzIpAfIqQAGBtADBqQANGUgrFJQhCIJh6GNQhKD0hmDdQhbDJh4CuQh3CujRCcIgfAVQjNCRjtBZQjWBRjRAVQgvAFgyAEQhwAMhuAAIhCgBg");
	this.shape_277.setTransform(960.7,1330);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFB69F").s().p("EAkwA0XQhpgChZgSQhegRhygGQhNgEhZABQj5AHiHgEQhJgDkUgHIg8gBQj0gIipgMQlSgdm+hzImHhoIhlgbQihgrh/gdQokiAnkjnQmjjFlgkIQhJg3hGg5QsqqUmPvNQgbhEgchRQgtiEhQmFIgThcQhVmahWivIgLgVQg/h2AtheQAhhGBxhFIATgLQBwhBDLg9IA3gQQDag/CzgDQA4gBAwAKQBqAYBDBVQAuA4AQBCIACAFQABBMgDBLQgnFxBpFVQB5GSEvEvQB1B0CCBxQD+DcEqDFQHsFGGgB/ICuA2IBbAdQCcAxB8AiQBjAbBfAWQDKAtCfAGQA+ADB+AYIAtAIQBAAOClAhQBBANA+ALQECAsBmgfQAVgGAKgRQAoguhIh7IhgiOQgYgggWgiQgyhPhBheQhTh4gTggQhKh9hFhtQhgiWhXh6Qj4lmimjnIiEi4Qrmv1AAvpIAAgBQAAjnArhGQAIgOANgOQA/hGDRheQAhgOAfgKQCsg2BFCJQASAgAOBLQAPBSAPCiQADArA3BmQCLD3KdMIIA+BIQEHEyEkFKQDxEVBGBFIALALQCCB+DHCCQDAB/C0BMQA5AYA2ATQEUBcCbhXQBMggAwhFQA5hNALiHQAEhBgGh6QgPjBgMjsIgBgSQgZnmAMinQAFh0gLiKQgIhdgPhjQgRithFkkIg6kuQgShegDhIQgIhhAIhWQAIiDAihkQAQg2AdguQAvhQBQg1QA0gnA9gUQBOgZBVgBIAOABQCMAGCMBrQBGA2AvA9QEDFKDPIFQBYDeBLD2QBXEiBDE+QB2IrAjIrQAHBtADBqQAPGWgqFJQhAINh4GNQhKD1hkDeQhcDKh2CwQh2CvjSCeIgfAWQjMCSjtBcQjXBTjRAYQgwAHgxAEQhzANhxAAIg8gBg");
	this.shape_278.setTransform(961.3,1330.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFB69F").s().p("EAk9A0kQhogDhagTQhegRhygGQhOgEhZAAQj9AIiFgDQhFgDkZgHIg8gBQj3gIiogMQlQgcnCh2ImIhpIhlgbQiigrh/geQolh/nmjpQmjjHlhkKQhJg3hHg6QsrqYmQvOQgdhFgbhQQgtiDhRmIIgThcQhVmchWivIgLgVQg/h3AtheQAhhGBxhGIATgLQBwhADMg9IA3gRQDbg+CzgDQA4gBAxALQBqAYBCBXQAuA5APBCIACAFQgBBMgDBMQgnFzBoFVQB5GWEvEtQB2B0CCBxQD/DdErDFQHxFKGcB+ICvA2IBbAdQCeAxB7AiQBkAcBeAVQDMAtCfAFQA8ADCAAZIAtAIIDmAwQBBANA+ALQEEAtBkgfQAWgGAJgSQAmguhIh8IhfiQQgXghgXgiQgyhPhBhfQhVh5gSgeQhKh+hFhtQhgiXhXh6Qj4lninjpIiFi3Qrpv4AAvsIAAgBQAAjoArhGQAIgOANgOQBAhGDRheQAhgOAfgKQCtg2BECNQARAfAPBMQAOBUAOChQAEArA5BnQCQD8KYMHIA+BIQEHE0EkFMQD0EaBCBCIALALQCCB9DJCDQDBB/C0BNQA5AZA2ASQEVBeCehQQBOgfAxhDQA8hOAMiHQAEhBgFh7QgOi9gNjxIAAgTQgbnwALidQAFh1gMiKQgJhdgQhkQgTiqhJkpIg9kvQgThegFhIQgJhhAFhXQAFiEAfhnQAPg3AcgwQAthSBPg5QAzgpA9gXQBOgcBXgDIAPAAQCNABCOBrQBIA1AvA9QEFFJDSIGQBaDfBMD2QBZEjBFE+QB5IuAmIrQAIBuAEBqQAQGYgpFJQg+IQh2GNQhJD3hkDfQhbDLh1CyQh1CvjSChIgfAWQjLCTjuBfQjXBWjRAcIhiAMQhzAOhwAAIg+gBg");
	this.shape_279.setTransform(961.9,1331.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFB69F").s().p("EAlLA0yQhogDhagUQhdgSh1gGQhNgFhaABQj/AJiDgEIlggJIg8gCQj5gHingLQlPgcnFh4ImJhqIhmgcQijgrh+geQomh/npjrQmjjIljkNQhJg3hGg6QssqdmTvQQgdhFgbhQQgtiBhRmLIgUhdQhVmchXiwIgKgWQhBh3AuheQAhhGByhGIASgLQByhBDMg9IA4gRQDbg+C0gCQA4gBAxALQBqAZBBBZQAuA6AOBCIACAFQgCBNgFBMQglF0BmFWQB4GZEwEsQB3B0CCBxQEADdErDHQH2FOGaB8ICuA3IBcAcQChAyB5AiQBkAbBfAWQDMAsCgAEQA6ACCDAaIAtAJQBFAQChAhQBBANA+ALQEFAuBkgfQAVgHAKgRQAjgwhHh9QgphBg1hRQgXgggXgjQgyhOhDhgQhWh7gRgcQhKh/hFhtQhgiYhXh6Qj5loiojqIiFi4Qrtv7AAvuIAAgBQAAjqAshFQAIgOANgNQBBhHDRheQAhgOAggKQCtg1BDCQQARAfAOBNQAOBUAOChQAEAqA6BoQCWEBKTMHIA+BJQEGE1ElFOQD3EfA+A+IAMAMQCAB8DMCEQDBCAC1BNQA5AZA3ATQEVBgCghLQBRgdAzhCQA8hNAOiIQAFhBgFh7QgMi7gOj1IAAgUQgcn5AJiVQAGh0gOiLQgJhdgRhlQgWimhLkvIhCkvQgThfgGhIQgLhiADhXQACiGAchpQANg5AagxQAshVBOg8QAzgsA9gZQBOgfBYgGIAOAAQCQgDCQBpQBJA1AwA9QEHFHDWIJQBbDfBND3QBbEiBGFAQB+IvAoIsQAIBvAFBpQASGbgnFJQg9ITh0GOQhID4hjDgQhbDMh0CzQhzCxjTCiIgfAXQjLCVjuBiQjXBYjSAfQgxAHgxAGQh3AQhxAAIg6gBg");
	this.shape_280.setTransform(962.5,1332.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFB69F").s().p("EAlZA0/QhogDhbgVQhcgTh2gGQhOgFhaABQkCAJiBgDQg/gCkjgHIg8gBQj7gHimgLQlNgbnKh7ImKhrIhlgcQikgsh/gdQomh/nsjuQmjjJlkkPQhJg4hHg7QstqhmVvRQgdhGgchPQgsh/hSmOIgUheQhWmdhVixIgLgWQhBh3AuhfQAhhGByhGIATgLQBxhBDNg9IA4gRQDcg+C0gCQA5gBAxAMQBqAaBBBaQAtA7ANBDIACAFQgEBNgFBMQglF3BlFVQB4GeExEqQB3B0CCBxQECDdErDIQH6FSGXB7ICwA2IBcAdQCiAzB4AhQBlAbBfAVQDNAsCgAEQA5ACCEAbIAuAJIDlAxQBDAOA8ALQEIAvBjggQAVgGAKgTQAggvhGh+QgohCg2hSIgthEQgzhOhDhgQhXh+gQgaQhKh/hFhuQhgiYhZh7Qj4loipjrIiFi5Qrxv9AAvyIAAgBQAAjqAshFQAIgOANgOQBChHDShdQAhgPAggJQCtg0BDCSQAPAfAOBOQAOBWAOCgQAEApA8BqQCcEFKOMHIA9BJQEGE3EkFQQD8EkA5A7IAMALQCAB7DNCGQDDB/C1BPQA5AZA3ATQEXBiCjhEQBSgcA0hBQA/hNAPiIQAFhAgEh9IgYmyIgBgUQgeoDAJiMQAFh0gPiMQgKhdgShlQgXikhQkzIhEkwQgVhggHhHQgNhjABhYQgBiIAYhrQAMg6AZgzQAqhXBNhAQAzguA9gbQBOgjBZgIIAPAAQCSgICSBpQBKA0AwA8QEJFHDZIKQBdDfBOD3QBdEjBJFBQCAIxArItQAJBvAGBpQAUGdgmFKQg8IWhyGOQhHD5hjDiQhZDNh0C1QhyCxjUClIgeAXQjKCWjvBlQjYBbjRAiQgxAIgxAGQh5ARhyAAIg4gBg");
	this.shape_281.setTransform(963.1,1333);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFB69F").s().p("EAlnA1NQhogEhcgVQhagUh4gHQhOgEhbABQkFAKh/gDIljgJIg9gBQj9gHilgLQlMganOh9ImKhtIhmgcQilgsh+geQonh+nvjwQmijLlmkRQhJg4hHg7QsvqlmWvTQgdhHgchOQgth+hTmRIgTheQhWmfhWixIgLgWQhBh4AuhfQAhhGBzhGIASgLQByhBDOg9IA4gRQDdg+C0gCQA5gBAxANQBqAbBBBbQAtA8AMBDIABAFIgKCaQglF5BjFVQB5GhEwEpQB4B1CDBwQECDeEtDIQH+FWGUB6ICwA3IBcAcQClA0B3AgQBlAcBfAUQDOAsCgADQA5ACCFAbIAuAKIDmAyQBCAOA9ALQEJAwBiggQAWgGAJgTQAegwhFiAQgnhCg3hUIgthEQgzhNhEhiQhZh/gPgZQhJh/hGhuQhgiZhYh7Qj5lpiqjtIiGi5Qr0wAAAv0IAAgBQAAjsAshEQAIgOAOgOQBDhHDShdQAhgPAggJQCtgzBDCVQAPAfANBPQANBXAPCfQADApA/BqQCgELKJMGIA+BKQEFE4ElFSQD+EqA2A3IAMALQB/B5DQCIQDDCAC2BPQA5AZA3AUQEXBkCmg/QBVgaA1hAQBBhNAQiIQAGg/gEh/IgXmzIgBgUQgfoNAIiDQAEh1gQiMQgKhdgThmQgaighTk4Qgri0gdh+QgVhggJhHQgPhjgBhaQgEiIAVhuQALg7AYg1QAnhaBNhDQAygwA9geQBOgmBbgKIAPgBQCTgMCVBoQBLAzAxA8QELFFDcINQBeDfBQD4QBfEjBKFBQCEI0AuItQAKBwAGBpQAWGfglFKQg6IZhxGPQhFD6hjDjQhZDOhzC2QhwCzjUCnIgeAXQjKCXjvBoQjZBejRAlQgxAJgxAHQh8ASh0AAIg0gBg");
	this.shape_282.setTransform(963.7,1333.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFB69F").s().p("EAl1A1aQhpgDhcgXQhZgVh6gGQhOgEhbABQkIAKh9gDIllgIIg9gBQj/gGilgLQlJganTh/ImKhvIhngcQimgth+gdQooh+nxjyQmijMlnkUQhJg4hIg8QswqpmXvUQgehIgchOQgth8hUmUIgTheQhWmhhWiyIgLgWQhBh3AthgQAihGBzhHIASgLQBzhADOg+IA4gRQDeg+C1gBQA5gBAxANQBqAcBABdQAtA9ALBDIABAFIgMCbQglF7BjFWQB3GkExEoQB5B0CDBwQEEDeEsDKQIEFZGQB5ICyA3IBcAcQCmA1B2AfQBmAcBeAUQDQAsCgACQA3ABCIAdIAuAKIDmAzQBDAOA8ALQEKAxBiggQAWgHAIgTQAcgxhEiAQgmhDg3hVIguhFQgyhNhFhiQhaiAgOgYQhJiAhGhuQhhiahYh8Qj6lpiqjuIiGi5Qr5wDAAv3IAAgBQAAjtAthEQAIgNAOgPQBEhGDSheQAigPAfgJQCugyBCCXQAOAgANBPQAOBZAOCfQADAnBABsQCmEQKFMGIA9BJQEFE6ElFUQECEvAxAzIAMALQB/B5DSCJQDECAC2BQQA5AZA3AUQEZBmCog4QBXgYA2hAQBEhMAQiIQAHhAgDh/QgHixgQkFIgBgUQggoWAHh7QAEh1gRiMQgLhegUhmQgbidhXk9Qguizgeh/QgWhhgLhHQgQhkgDhaQgHiKAShwQAJg9AWg2QAmhcBMhHQAygzA9ggQBOgpBcgNIAQgBQCVgRCXBnQBMA0AxA7QENFEDgIOQBfDgBRD4QBgEjBNFDQCHI2AxItQALBwAGBqQAZGhgkFKQg5IchvGQQhFD7hhDkQhZDPhyC4QhvCzjUCpIgfAYQjICZjwBrQjZBgjRAoQgyAKgxAHQh8AThzAAIg1gBg");
	this.shape_283.setTransform(964.4,1334.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFB69F").s().p("EAmDA1oQhpgEhcgXQhZgWh8gGQhNgFhcABQkLALh7gCQg1gCkxgGIg9gCQkBgFilgLQlHgZnXiCImMhvIhmgdQingth/gdQooh+nzj1QmijMlpkXQhJg5hIg7QsxqumZvWQgfhIgchNQgth7hUmXIgThfQhXmhhWizIgLgWQhCh4AuhgQAihGBzhHIATgLQBzhBDOg9IA5gRQDfg/C1AAQA5gBAxANQBqAdBABfQAsA+ALBDIABAFQgJBPgGBNQgkF8BhFXQB4GnExEnQB5B0CEBxQEFDeEtDKQIIFeGNB3ICyA3IBdAdQCoA0B0AgQBnAbBeAVQDRArCgABQA2ABCKAeIAuAKIDmA0QBDAOA8ALQENAyBhggQAVgHAJgTQAZgyhEiCQgkhDg4hWIgthFQgzhNhGhjQhciCgMgWQhKiAhFhwQhhiahZh8Qj6lqirjvIiGi6Qr9wGAAv5IAAgBQAAjuAthEQAJgNAOgOQBFhHDSheQAigOAfgJQCvgyBBCaQANAfANBRQANBZAOCfQADAnBDBsQCrEVJ/MGIA+BKQEEE7ElFXQEFEzAuAwIAMALQB+B4DUCKQDFCAC2BRQA6AZA3AVQEaBoCqgyQBZgXA4g/QBFhLASiJQAIg/gDiBQgGitgQkKIgBgVQghogAFhxQAEh1gSiNQgMhegVhnQgdiZhalDQgwiygfiBQgYhhgMhHQgRhlgGhaQgKiMAPhyQAHg+AWg4QAkhfBKhKQAyg1A9gjQBOgsBdgPIAQgCQCXgVCaBmQBNAzAyA7QEPFDDjIQQBhDgBSD4QBiEkBOFDQCKI4A1IuQALBxAHBpQAbGkgjFKQg3IghtGPQhED9hhDlQhYDQhxC5QhuC1jVCrIgeAYQjICajxBuQjZBjjRArQgyALgxAIQh/AUhzAAIgzgBg");
	this.shape_284.setTransform(965,1335.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFB69F").s().p("EAmRA12QhqgEhcgYQhYgXh9gGQhOgFhdACQkNALh5gCIlogIIg+gBQkDgFijgLQlGgZnbiDImMhxQg1gQgygNQioguh+gdQoph9n2j3QmijOlqkZQhKg5hHg9QszqxmbvXQgfhKgchMQgth5hVmbIgThfQhXmjhWizIgLgWQhCh4AuhgQAhhHB0hHIATgLQBzhBDQg9IA4gRQDgg/C1AAQA6AAAxANQBqAeA/BgQAsA/AKBEIABAFQgLBPgGBNQgkF/BgFWQB3GrEyEmQB6B0CEBwQEGDfEtDLQINFiGKB1ICzA4IBdAcQCqA2BzAeQBoAcBeAUQDRArChABQA1AACLAfIAvAKIDmA1QBEAPA7ALQEOAyBgggQAWgHAIgUQAXgyhDiDQgjhDg4hYIguhGQgzhMhGhkQhdiEgMgUQhKiBhFhvQhhichZh8Qj6lqisjxIiHi6QsAwIAAv8IAAgBQAAjwAthDQAJgNAOgPQBGhHDShdQAjgPAfgJQCvgxBACdQANAgAMBRQANBbAOCeQADAmBEBuQCxEZJ7MGIA9BKQEEE9ElFYQEJE5ApAsIAMALQB9B4DXCLQDFCAC3BSQA6AZA3AVQEbBqCtgsQBbgVA6g+QBHhLATiJQAIg/gCiCQgEiqgRkPIgBgVQgjopAEhpQAEh1gTiOQgNhegWhnQgfiXhelHQgyiyggiCQgZhhgNhHQgThmgIhbQgNiNALh1QAGg/AUg5QAihiBLhOQAxg3A9glQBOgvBfgSIAQgDQCZgZCcBlQBOAzAyA7QERFBDnISQBhDhBUD4QBkEkBQFEQCOI7A3IuQAMBxAHBqQAdGlghFLQg2IihrGRQhDD+hhDlQhXDRhwC7QhsC2jWCtIgeAYQjHCcjyBxQjZBljSAvQgyALgxAJQh/AWhzAAIgzgCg");
	this.shape_285.setTransform(965.6,1335.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFB69F").s().p("EAjYA1nQiMgmj1AFQkQAMh3gCImngJQkFgFijgKQlEgYnfiGImNhyQjshDijglQoph9n4j6Qn3j5moloQtyrqmbw6QgyiFhknwQhcm+hciwQhCh5AuhgQAhhHB1hHQB1hHDhhCQEDhQDMAAQC4AABcCOQAuBDAIBHQhKHYByGcQB3GuEyElQFuFcHGEzQIRFmGHB0IERBUQCsA2ByAeQFQBbDpAAQA0AACNAfIEVBAQF6BVB1gnQBngijSlOQg+hhhqiVQhfiGgKgTQiwk0iajVQlmoJjIkPQsEwLAAv/QAAjyAuhCQAyhQD+hwQDmhlBLC8QAZBDAZEoQALCHNqQxQEfFgFHGEQEME+AmApQB+B7DjCTQEECoDrBZQEcBsCwgmQDQgtAlj3QATiPghoDQgkozADhgQAFjDg6kHQghiThilMQhck4giimQg1kEAOjEQANivB0iBQB1iKC4ghQCageCfBlQBPAyAyA6QEUFADqIUQDXHqCYJZQCRI9A7IvQA8IvgpGeQg1ImhoGRQiAHojpGMQhqC3jXCwQjRCskFB9QkNCBkCAuQiCAXh0AAQiEAAhzgfg");
	this.shape_286.setTransform(966.2,1336.4);
	this.shape_286._off = true;

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFB69F").s().p("EAjWA1ZIgEgBQiPgjjsAEIgnACQjwAKhwgCIhugDIk2gGIiegEQiagFhugHQlIgbnYiFIgugNQjjhCh5glQjphEiigpIhCgQQn/iInUjqQg+gfg8ghQjEhoi5h5Qi9h9i1iPIg2gsQiqiNifibQiyiviYi+QiejFiFjXQihkGh/kiQglhUghhYQgSgwgZheQgkiJgxjyIgVhpQghijghh8Qg2jMg2hvIgJgSQhBh4AthfIAAgBQAihHB0hHIATgLQBzhBDPg9IA4gRQDgg/C1AAQA6AAAxANQBpAeBABfQAsA/AKBEIABAFQgKBPgGBNQgZEGAlDzQARBwAeBsQAlCEA3B4QBlDaCgCuQAjAnAmAjQCCB7COBzQCnCJC5CBQBiBEBlBDQBKAxBGArQG2EPFSBnIA2ARIDZBFQCqA2ByAfQAqAMApAKQEbBHDIACQAZABAtAHQAxAIBIARICbAmIB3AdQBOATBDAOQCNAcBcACQBIADApgNQAegJAFghQAKg4hBh7Qgig/gyhOIg3hSQgwhJhAhaQhdiEgMgVQhOiIhJh1QhciUhWh2QkAl0itjyQhGhhg5hOQsAwIAAv7IAAgPQACjjAshBQALgSAVgUQBKhEDEhWQApgSAlgKQCkgoA/CWQANAiAOBbQAMBZANCTQADApBMB3QC0EcJvL2IBFBTQEBE5EhFTQEHE4ArAtIAUATQB8B0DPCGQDLCEC7BSQA1AXAyATQEbBqCtgtQBggXA6hEQBBhLAQiCIADgmQAGhvgPjwQgHh1gLiRIgJhtQgMiagFhuQgMjfADg9QADhHgGhQQgJiKghimQgJgxgRhGQgfiMg9jYIgUhQQhEj8gciQIgHgnQgljNAJijIAEguQAQitB2h9IADgDQB2iEC0gbIALgCQBcgMBdAhQA4AUA5AlQBOAyAyA7QCJCjB6DVQBKCCBGCXQArBdAqBnIAoBlQA7CdA4CjQAxCaAuChQAxCrAtCzQAuC3ApC2QBRF2AqF5IABAKQA8IfglGcIgBAPQgwIahkGMIgEAOQhdFtiYE0Qg1Brg8BlQhrC2jVCuQhfBNhoBDQiABSiPBEQkNB+kBArQg1AJgyAEQhGAHhCAAQiGAAh2geg");
	this.shape_287.setTransform(964.8,1335.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFB69F").s().p("EAjUA1LIgEgBQiSghjnAEIgnACQjvAJhvgCIhugDIk0gGIiegFQiYgFhvgIQlLgcnQiEIgvgOQjghCh6gmQjmhGiggsIhBgSQn6iSnOjqIh6hAQjChoi5h3Qi8h6i4iNIg3gqQioiJikiYQi1iriYi6QigjAiIjUQijkCiBkgQglhTghhYQgTgxgYhcQgjiJgxjxIgVhoQghikggh6Qg1jMg2hvIgJgRQhBh4AthfIAAgBQAihGBzhHIATgLQByhBDPg9IA4gRQDeg+C1gBQA6gBAxANQBpAdBABdQAtA+ALBEIABAEQgIBPgGBNQgZEEAlDzQARBvAfBrQAlCFA3B3QBlDZCgCtQAjAlAmAkQCDB5CPBwQCnCFC6B9QBkBDBkBAICQBaQG0EHFTBqIA1ARIDYBFQCoA2BzAgIBSAXQEbBJDFAEQAZABAsAIQAxAIBIASICZAoIB2AfQBMATBDAPQCNAeBaAEQBIADApgMQAegJAFggQAOg3hCh6Qgjg+gxhMIg3hSQgwhJg/haQhbiBgOgXQhNiHhKh1QhciThVh2Qj/lyitjxQhFhhg6hOQr7wEAAv4IAAgPQACjhArhCQALgTAVgTQBJhEDDhXQApgSAlgJQCkgqA/CTQAPAhAOBbQANBXANCUQADApBJB2QCtEWJ1L3IBFBTQECE2EgFRQEEExAwAyIATATQB9B1DNCFQDKCDC6BSQA1AWAyATQEaBoCpg1QBdgZA5hFQA+hKAOiCIADgnQAEhtgTjuIgXkEIgKhsQgOiZgGhuQgKjbAEg/QADhHgEhQQgIiIgcimQgIgxgPhFQgaiOg4jUIgThPQg+j5gaiSIgGgnQgjjLANiiIAFguQAUiqB4h5IADgDQB2h/C0gXIAKgCQBcgKBcAiQA3AWA4AlQBNAzAwA7QCICkB1DVQBHCCBACWQApBdAmBnIAlBlIBpE/QAuCZArCgQAuCqAtCzQAuC2AqC1QBUFwAtF7IABAKQA8IagiGeIgBAPQguIXhhGMIgEAOQhcFviWEwQg1Bqg8BkQhtC2jUCsQheBMhoBDQiABSiPBCQkLB8kCAnQg0AIgyAEQhBAGg9AAQiKAAh7geg");
	this.shape_288.setTransform(963.3,1334.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFB69F").s().p("EAjRA09IgEAAQiUggjjAEIgmACQjtAIhxgCIhtgDIkygHIidgEQiXgGhvgJQlPgdnJiDIgugOQjdhCh7goQjjhIifgvIhAgTQn1ienIjpIh5hAQjBhoi6h1Qi6h4i7iKIg3gpQimiFipiUQi5iniYi1Qiii8iJjRQilj+iEkeQglhTgihXQgSgxgYhbQgkiJgwjwIgUhoQghilggh3Qg0jLg2hvIgJgSQhAh3AtheIAAgBQAhhHBzhGIATgLQByhBDNg9IA4gRQDeg+C0gCQA5AAAxAMQBqAcBABbQAtA9ANBDIABAFIgLCaQgaEDAlDyQARBwAfBqQAlCEA3B3QBmDYCgCrQAjAlAmAjQCEB4CPBtQCnCAC9B6IDIB/ICQBXQGyD/FUBtIA1ARIDWBHQCmA2BzAhIBSAXQEbBLDBAGQAaACArAIQAxAJBHASICXApIB1AhICOAkQCLAhBaAFQBHAEAqgMQAdgIAHgfQARg2hDh5Qgkg+gxhLIg3hRQgwhIg+haQhZh/gPgZQhOiHhJh0QhciRhVh2Qj/lyirjwIh/itQr2wBAAv1IAAgPQABjgArhCQALgTAUgTQBIhEDDhXQApgSAkgKQCkgqBACPQAQAhAOBaQANBVAOCVQADAqBGB1QCnEPJ7L4IBFBSQEDE1EgFOQD/ErA1A2IATATQB+B2DKCEQDJCDC6BQQA0AXAyASQEZBlCmg8QBbgaA2hHQA9hKALiCIABgmQAChsgWjsQgNh2gOiLIgLhrQgRiZgFhtQgKjXAFhDQAEhHgDhPQgGiGgXimQgHgxgNhEQgViQg0jPIgQhPQg5j2gYiUIgGgmQghjLASigIAFgtQAYinB6h2IADgDQB4h7CygSIALgBQBbgIBZAjQA3AXA3AlQBMA0AwA7QCGClBwDVQBDCCA8CWQAmBcAiBnQASAyAQAzQAvCgAxCdIBRE4IBYFcIBbFpQBWFqAuF9IACAKQA9IUgfGhIgBAPQgrIUhgGMIgDAOQhbFxiVErQg1Bqg8BkQhuC1jSCqQheBMhoBCQiBBRiOBBQkLB5kBAkQg0AHgyAEQg8AFg6AAQiNAAh/geg");
	this.shape_289.setTransform(961.8,1333.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFB69F").s().p("EAjPA0wIgEgBQiXgdjeADIgmACQjrAIhxgDIhtgCIkxgHIicgGQiWgGhvgJQlSgfnBiCIgugOQjbhCh7gqIl+h8Ig/gUQnwipnCjpIh4hAQjAhni7h0Qi4h0i+iIIg3gpQikiAiuiRQi9ijiYiwQili4iLjNQimj6iHkdQglhRgihYQgTgxgXhaQgjiIgwjvIgUhnQghingfh1QgzjKg2huIgJgSQhAh3AtheIAAgBQAhhGByhHIATgLQBxhADNg9IA4gRQDdg+CzgDQA5AAAxAMQBqAaBBBaQAtA7AOBDIABAFQgEBNgFBMQgaECAmDxQARBvAeBrQAmCCA3B3QBmDXCgCpQAkAmAmAiQCEB3CQBqQCmB8C/B2IDJB7ICQBUQGwD3FWBwIA0ASIDUBHQCkA2B0AiIBSAXQEaBOC/AIQAaACAqAIQAwAKBGATICWAqIB0AiICMAnQCKAjBZAGQBHAFAqgLQAdgIAIgeQAVg1hFh4Qglg9gxhKQgaglgcgrQgwhJg9hYQhYh+gQgaQhOiHhJhzQhbiRhVh1Qj+lxirjuIh+iuQryv9AAvyIAAgOQABjfAqhDQALgTAUgTQBGhDDDhYQAogRAlgLQCjgrBCCMQAQAhAPBYQAOBUANCVQAEArBDB0QCgEJKCL4IBFBSQEDEzEfFLQD8ElA6A7IATASQB+B3DHCDQDICDC6BQQA0AWAyASQEXBiCkhDQBYgcA0hIQA7hKAIiCIABgmQAAhrgbjqQgPh1gPiJIgNhqQgUiZgEhsQgKjUAHhFQAFhHgChOQgEiFgTilQgFgygMhDQgQiRgvjLIgPhPQgyjzgWiVIgGgmQgfjKAWifIAHgsQAbilB7hyIADgDQB5h3CygNIAKgBQBbgFBYAlQA2AXA2AmQBKA0AwA8QCECmBrDUQBACCA3CWQAjBcAfBnQAQAxAOAzQApCiAtCZIBLE4QAoCqAsCxQAuC0AvCyQBZFlAxF/IABAKQA/IOgdGkIgBAPQgoIRheGMIgDANQhZFziUEoQg1Bpg8BjQhvC1jRCoQheBLhoBCQiBBQiNA/QkKB3kBAgQg0AHgyADQg4AEg1AAQiQAAiEgdg");
	this.shape_290.setTransform(960.3,1332.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFB69F").s().p("EAjNA0iIgEgBQiagbjaADIgmABQjpAIhxgCIhsgDIkvgIQhUgChIgDQiVgHhvgJQlWghm6iCIgtgOQjYhBh8gtQjehJicg4Ig+gVQnqizm9jpIh4hAQi+hni7hyQi3hyjAiFIg4gnQiih9iziOQjAieiZirQiniziNjLQioj1iJkcQgmhQgihYQgSgxgXhaQgkiGgvjvIgThnQghiogehyQgzjKg2huIgJgRQhAh3AtheIAAgBQAhhGByhGIATgLQBxhADMg9IA3gRQDcg+CzgDQA5gBAwAMQBqAZBCBYQAuA6AOBCIABAFQgBBNgFBMQgaEAAmDxQARBvAeBpQAmCDA4B2QBmDWCgCnQAkAlAmAiQCEB2CRBnQCmB4DBByIDKB3QBOArBCAmQGtDwFYBzIAzARQBJAaCKAuQCiA2B1AkIBRAXQEaBQC7AKQAbADApAIQAwAKBFAUICVAsIBzAkICKAoQCJAlBYAHQBGAHArgLQAdgIAIgdQAZg0hGh2Qgmg9gxhIQgbgmgbgqQgwhJg8hYQhWh7gRgcQhOiGhJhzQhciQhUh1Qj+lwiqjsIh9itQrtv7gBvuIAAgOQABjdAqhEQALgTATgTQBFhDDDhYQAogSAlgKQCjgtBBCIQATAhAPBXQANBTAOCWQAEAsBAByQCaEDKIL5IBFBRQEDExEgFJQD3EfA/A/IATASQB/B4DECBQDHCDC5BPQA1AWAyARQEVBhChhKQBVgfAzhIQA4hLAGiBIAAgmQgChqgfjoQgSh2gQiGIgPhpQgWiYgEhrQgJjQAIhJQAGhGgBhOQgCiEgOilQgEgwgKhDQgLiTgqjGIgNhOQgtjygUiWIgGgmQgdjIAbieIAHgrQAfijB9huIADgDQB7hyCwgJIAKAAQBbgDBWAlQA1AZA1AmQBJA1AvA8QCDCnBlDUQA9CCAyCWQAhBbAbBnIAbBkQAjCkAqCWQAgCaAkCcQAkCqAsCwQAtCzAyCxQBcFfAzGCIABAJQBAIIgbGnIgBAPQglIPhbGLIgEANQhXF1iSEjQg2Bpg8BiQhwC1jQCmQheBLhoBAQiABQiNA+QkKB1kAAcQg0AGgyADQgwADgwAAQiVAAiKgdg");
	this.shape_291.setTransform(958.9,1331.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFB69F").s().p("EAjLA0UIgEgBQidgZjVADIgmABQjnAHhygCIhrgDIkugIIibgGQiUgHhvgKQlZgjmyiAIgugOQjVhCh8guQjbhLicg7Ig9gWQnki/m3joIh3hAQi9hni8hwQi1hvjDiDIg4gmIlZkDQjDibiZilQiqiviOjIQiqjxiLkaQgnhPgihYQgSgygXhYQgjiGgvjuIgThmQghipgdhwQgyjJg2huIgKgSQg/h2AthdIAAgBQAhhGBxhGIATgLQBwhADMg9IA3gRQDbg+CygDQA5gBAwALQBqAXBCBXQAuA5AQBCIABAEQABBNgEBLQgaD/AlDxQASBuAeBpQAmCCA4B1QBmDWChCmQAjAkAnAiQCEB0CSBkQCmB0DDBuIDKBzQBPAqBBAlQGrDnFZB2IAzASQBJAaCIAuQChA3B1AkIBQAYQEbBSC3ANQAbADAoAIQAwAKBEAVICUAuIBxAlICKArQCHAnBXAIQBGAHArgKQAdgHAJgdQAcgzhGh1Qgog8gwhGQgcgmgbgpQgvhKg8hXQhUh5gSgeQhOiFhJhyQhbiQhUh1Qj+lvipjrIh8isQrpv3gBvrIAAgOQABjbAphFQALgTATgTQBEhDDChYQAogSAlgLQCigtBDCEQATAhAQBWQAOBRAOCXQADAtA+BwQCTD9KOL6IBFBRQEEEvEgFGQDzEYBDBEIATASQCAB6DCB/QDGCDC4BOQA1AVAxARQEVBfCdhSQBTghAxhJQA2hLADiBIgBglQgEhqgjjmQgUh1gSiDQgJg5gHgwQgYiXgEhqQgIjNAJhMQAGhGABhNQAAiCgKilQgDgwgIhDQgGiTgmjDIgLhNQgnjvgSiXIgFgmQgbjHAfidIAIgrQAjigB+hqIADgDQB8huCwgEIAKAAQBaAABUAmQA1AZAzAnQBIA2AvA8QCBCoBgDUQA6CBAtCXQAeBaAXBnIAYBkQAdCmAnCSQAbCaAhCbQAiCpAsCwQAsCyA1CwQBeFZA1GEIABAJQBCIDgZGpIgBAPQgiIMhaGLIgDANQhVF3iSEfQg1Bpg9BhQhxC0jOCkQheBKhoBAQiABPiNA9QkIBykBAZQgzAGgyABQgrADgqAAQiZAAiQgdg");
	this.shape_292.setTransform(957.4,1330.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFB69F").s().p("EAjJA0HIgEAAQiggZjQADIgmACQjmAGhygCIhrgDIksgIQhSgDhIgEQiTgHhvgKQlcglmsiAIgtgOQjThBh8gxQjYhMiag+Ig9gYQnfjKmxjmIh2hBQi8hni8huQizhtjGiAIg5glIlbj8QjHiWiZigQitiriQjFQisjtiOkYQgmhPgihXQgTgygXhXQgjiGgtjtIgUhlQggirgchuQgyjIg2htIgJgSQg/h2AthdIAAgBQAhhFBwhGIATgLQBwhADKg9IA4gRQDZg+CygEQA4gBAwAKQBrAXBDBUQAuA4AQBCIACAFQADBLgEBLQgbD+AmDwQASBuAeBpQAmCBA4B1QBnDVChCkQAjAkAnAhQCEB0CTBfQCmBxDFBqIDKBvQBQApBBAjQGpDgFaB5IAyASQBKAbCGAuQCeA3B2AlIBQAYQEbBUC0APQAbAEAnAIQAwALBDAUICSAwIBxAnICIAtQCGApBWAKQBFAIArgKQAegHAJgbQAggyhHh0IhZiBQgcgmgbgoQgvhKg7hWQhSh3gTggQhOiFhKhxQhaiPhUh0Qj9luiojqIh8isQrkvzgBvoIAAgOQABjaAohFQAKgUATgSQBChEDDhXQAngSAlgLQCigvBECBQAUAhAQBVQAOBPAOCXQAFAvA6BvQCMD2KVL7IBFBQQEFEuEfFDQDvESBIBIIATASQCBB7C/B9QDFCDC4BNQA0AWAyAQQETBcCahZQBQgiAwhLQAzhLAAiBIgBgkQgGhpgnjkQgXh1gSiBQgLg4gHgvQgbiYgEhoQgIjKAMhOQAGhGAChNQACiBgFikQgCgwgGhCQgBiVghi+IgJhNQghjsgRiZIgFgmQgZjGAjibIAKgqQAmieCAhmIADgCQB+hrCuACIAKgBQBZADBTAnQA0AaAzAnQBGA2AuA9QCACpBaDTQA3CCAoCXQAbBYAUBpQALAwAKAzQAXCnAjCPQAXCbAfCZQAeCpAsCvQAsCxA3CvQBhFSA3GHIABAJQBDH9gXGsIAAAOQggIKhXGLIgEAOQhTF4iQEbQg2Bog9BgQhyC0jNCiQhdBKhoA/QiBBOiLA8QkJBwkAAWQgzAEgxABIhHABQieAAiYgcg");
	this.shape_293.setTransform(955.9,1328.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFB69F").s().p("EAjGAz6IgEgBQiigWjMADIglABQjkAGh0gDIhpgCIkrgJIiZgHQiSgIhvgLQlggmmkh+IgtgPQjQhBh9gyQjVhOiZhCIg8gZQnZjVmsjmIh1hBQi7hmi9htQixhqjJh9Ig5glQidhvjBiEQjLiSiZicQiviniSjBQitjpiRkXQgnhNgihYQgTgygWhWQgjiFgtjtIgThkQggisgchrQgxjIg2htIgJgSQg+h1AshdIAAgBQAhhFBwhFIASgLQBwhBDKg8IA3gRQDZg+CxgEQA3gCAxAKQBqAVBEBTQAuA3ASBBIACAFQAEBLgCBKQgcD9AmDwQASBtAeBoQAmCBA4B0QBoDUCgCiQAkAkAnAhQCFByCTBdQCmBsDHBnQBqA3BhA0QBRAnBAAiQGnDYFbB8IAyASQBKAcCEAuQCcA3B2AmIBQAZQEbBWCwAQQAcAFAmAIQAwAMBCAVICQAxQAxARA/AYICGAvQCGArBVALQBFAJArgJQAdgHALgaQAjgxhJhzIhZh/QgdgmgZgnQgvhKg7hVQhQh1gVgjQhOiEhJhwQhaiOhUh0Qj8luinjoIh8irQrgvwgBvlIAAgNQABjZAohGQAKgTASgTQBBhDDChYQAogRAlgMQChgwBFB+QAVAgARBUQAOBNAOCZQAFAvA4BtQCFDwKbL8IBFBQQEFEsEfFAQDrEMBNBMIATATQCCB8C8B8QDECCC4BMQAzAWAyAQQESBaCXhhQBNgkAuhMQAyhLgDiBIgCgjQgIhpgrjiQgZh1gUh+QgMg4gIguQgdiYgDhnQgIjGANhSQAHhFADhMQAEh/gBikQAAgxgEhAQAEiXgdi6IgHhNQgbjpgPiaIgEgmQgYjFAoiZIAKgqQAribCBhjIADgCQB/hnCtAHIAKAAQBZAFBRAoQAzAcAyAnQBFA2AtA9QB/CrBVDTQAzCBAkCXQAYBYAQBpQAKAwAIAyQARCpAfCMQATCaAcCZQAcCpArCuQAsCwA5CuQBkFMA5GJIABAJQBEH3gUGuIgBAPQgcIHhWGKIgDAOQhSF6iPEXQg1Bng9BgQh0C0jLCgQheBJhnA/QiBBNiLA6QkIBukAASQgzAEgxAAIg4AAQijAAihgbg");
	this.shape_294.setTransform(954.5,1327.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFB69F").s().p("EAjEAzsIgEAAQimgVjGADIgmABQjiAFh0gCIhpgDIkogJIiagHQiQgIhvgMQlkgomch9IgtgPQjNhBh+g0QjThQiXhFIg7gaQnUjgmljlIh1hBQi6hni9hqQivhojMh6QgagRgggTQibhrjGiBQjOiOiaiWQixijiUi/QivjliTkVQgnhMgihYQgTgygXhVQgiiEgtjsIgShkQghitgahpQgxjHg2hsIgJgTQg+h0AthdIAAgBQAghFBwhFIASgLQBvhADJg9IA3gQQDYg+CxgFQA3gCAwAJQBrAVBEBQQAvA2ASBBIACAFQAHBKgCBKQgcD7AmDwQASBtAeBoQAmB/A5B0QBoDUCgCgQAkAkAnAgQCFBxCUBZQCmBoDJBkQBrA0BgAyQBSAmBAAhQGkDQFdB/IAxASQBLAdCCAuQCaA3B3AnIBPAZQEbBZCtASIBBANQAvANBCAVICPA0QAwARA+AYQBEAZBBAZQCEAtBVAMQBEAKAsgJQAdgGALgZQAngxhKhxIhah8QgdgngZgmQgvhKg6hVQhOhzgWgkQhOiEhJhwQhbiMhTh0Qj8ltimjnIh7iqQrbvtgBviIAAgNQABjXAnhGQAKgUASgSQA/hEDChYQAngRAlgMQChgxBGB6QAWAhARBSQAPBMAOCZQAFAwA1BsQB/DqKhL8IBFBQQEGEqEfE+QDmEFBSBRIATASQCDB9C5B7QDDCCC3BLQA0AWAxAPQERBYCUhoQBLgmAshOQAvhLgGiAIgCgjQgKhogvjgQgch1gVh7QgNg4gIgtQggiXgDhnQgHjCAOhVQAIhFAEhMQAGh9AEikQABgwgDhAQAKiYgZi2QgCgogDgkQgVjngNibIgEgmQgVjDAriZIAMgpQAuiYCDhfIADgCQCAhjCsAMIAKAAQBZAIBPApQAyAcAxAnQBEA4AtA9QB8CsBQDSQAwCBAfCXQAWBXAMBpQAIAwAGAzQALCqAdCIQAOCbAZCXQAZCpArCtQArCwA8CsQBmFGA8GLIABAKQBFHxgSGxIAAAOQgaIEhTGLIgEAOQhQF8iNESQg2Bng9BfQh1CzjKCfQhdBIhoA+QiBBNiKA5QkHBrkAAPQgzADgxgBIghAAQitAAisgcg");
	this.shape_295.setTransform(953,1326.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFB69F").s().p("EAo7Az7Qi7ABi/gdIgEgBQiogSjCACIglABQjhAFh0gDIhogCIkngJQhSgEhHgEQiPgJhvgMQlngqmWh8IgsgPQjLhBh+g2QjQhRiWhJIg5gbQnPjrmgjlIh0hBIl2jPIl9jdIg6giQiZhnjLh+QjSiKiZiRQi0ifiWi7QixjhiVkTQgohLgihYQgTgzgWhUQgiiDgsjrIgThkQggiugahnQgvjGg3hsIgJgSQg9h1AshcIAAgBQAhhFBvhFIASgLQBvhADIg8IA3gRQDWg+CwgFQA3gCAxAJQBqATBFBPQAvA0AUBBIACAEQAJBKgCBKQgcD6AmDvQASBtAfBnQAmB/A4BzQBoDTChCfQAkAjAnAgQCGBwCVBWQClBkDLBfQBsAzBgAwQBTAlA+AfQGjDIFdCCIAxASQBMAeCAAuQCYA3B3AoIBPAaQEaBaCrAVIA/AOQAwAMBBAXICNA1IBtArQBDAZBBAaQCDAwBUANQBDALAsgIQAdgGAMgYQArgwhLhwQgsg6guhAQgfgmgYgmQgvhLg4hUQhNhwgYgnQhNiDhKhvQhaiMhTh0Qj7lriljlIh7iqQrXvqgBveIAAgNQABjVAmhIQAKgUASgSQA+hDDChZQAmgRAmgMQCggyBHB3QAXAgASBRQAPBKAOCaQAFAyAzBqQB3DkKnL9IBGBPQEGEoEfE7QDiD/BYBWIASASQCEB+C2B5QDDCCC2BLQAzAUAxAQQERBVCQhvQBIgoAqhPQAthLgIh/IgDgkQgMhngzjdQgfh2gWh4QgOg3gJgtQgiiXgDhmQgGi+AQhYQAIhFAFhLQAIh8AIijQADgxgBg/QAOiZgUiyQAAgogDgkIgbmAIgDgmQgTjCAwiXIANgpQAxiWCFhbIADgCQCBheCsAQIAJABQBYAKBOAqQAxAdAwAoQBDA4AsA9QB7CuBLDRQAtCCAZCXQATBWAJBpQAHAwAEAyQAFCsAZCFQAKCbAWCWQAWCoArCtQArCuA+CsQBpFAA+GNIABAJQBGHsgPGzIgBAPQgXIBhRGLIgDANQhPF+iMEPQg2Bmg9BeQh2CzjJCcQhdBIhnA+QiBBMiKA3QkHBpj/ALQgfACgfAAIglgBg");
	this.shape_296.setTransform(951.6,1325.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFB69F").s().p("EAo3AzvQi4gCjAgbIgEAAQirgRi+ACIglABQjeAEh2gDIhngCQh8gDipgHQhRgDhHgFQiOgJhwgMQlqgsmOh8IgsgOQjIhCh/g4QjNhSiVhMIg4gcQnKj2majlIhzhBQi4hmi+hnQirhijSh1QgZgQgigSQiXhjjQh7QjViFiaiMQi2ibiXi4QizjdiYkRQgohLgihYQgUgzgWhSQgiiDgrjqIgShjQggiwgZhkQgvjFg3hsIgJgTQg8hzAshdIAAAAQAghFBvhFIASgLQBuhADHg8IA3gRQDWg9CvgGQA3gCAwAIQBrASBFBNQAvAzAVBAIACAFQALBJAABKQgdD4AmDvQASBsAfBnQAmB+A5BzQBoDSChCdQAkAjAnAgQCGBuCWBTQClBgDOBcQBsAwBfAuQBVAjA9AeQGgDBFfCFIAxASQBMAfB+AtQCWA3B3AqIBPAaQEaBcCnAXIA/APQAwANBAAXICMA2QAuATA9AaQBCAaBBAcQCCAyBTAOQBCALAtgHQAdgGANgXQAuguhMhvQgtg6gug/QgfgmgYglQgvhLg3hTQhLhugZgpQhOiChJhvQhaiLhShzQj7lriljkIh6ipQrSvmgBvbIAAgNQABjUAlhIQAKgUARgSQA9hDDChZQAmgRAlgMQCgg0BIB0QAYAgASBQQAPBIAPCbQAFAyAwBpQBxDeKtL+IBGBOQEHEmEeE5QDfD5BcBaIASASQCEB/C0B3QDCCDC1BJQA0AVAwAPQEQBTCNh3QBFgqAphQQArhLgLh+IgEgkQgOhng3jbQghh1gYh1QgPg4gJgsQgliWgChlQgGi7ARhbQAJhFAHhKIAWkdQAEgxABg+QATibgQitQABgogBgkQgKjhgKieIgDgmQgRjBA0iVIAOgoQA1iUCHhXIADgCQCDhaCqAVIAKABQBXANBLArQAyAeAuAoQBCA5ArA9QB6CvBFDRQAqCBAVCXQAQBWAFBpQAFAwADAyQgBCuAVCBQAFCbAUCVQAUCoAqCsQArCtBBCrQBrE6BAGPIABAKQBHHmgNG1IAAAPQgUH+hQGLIgDANQhNGAiLEKQg1Bmg+BeQh3CyjHCaQhdBIhnA9QiCBLiJA2QkGBnj/AHIgsABIg3gBg");
	this.shape_297.setTransform(950.1,1324.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFB69F").s().p("EAozAziQi1gEjCgZIgEgBQiugPi5ACIglABQjdADh1gCIhngDQh9gDimgGQhRgEhHgFQiMgKhwgMQlugumHh7IgrgOQjGhCiAg6QjKhTiThQIg4gdQnEkBmUjkIhzhBQi2hmi+hmQiqhfjVhzQgZgPgigRQiVhfjWh4QjYiBiaiHQi5iWiZi1Qi0jZibkQQgohJgihYQgUg0gWhRQghiCgrjqIgShiQggixgYhiQgujEg3hsIgJgSQg8h0AshcIAAAAQAghFBuhEIASgLQBuhADGg8IA3gRQDUg+CvgGQA3gCAwAHQBrARBFBLQAwAyAWBAIACAFQAOBIgBBKQgdD3AnDuQARBsAfBmQAnB+A5ByQBoDRCiCbQAkAjAnAgQCGBtCXBPQClBcDPBYQBuAvBeAsQBWAiA8AcQGeC5FhCIIAwASQBNAgB7AtQCUA3B4ArIBPAaQEZBfCkAZIA/APQAvAOA/AXICLA5QAuATA8AbQBBAaBBAdQCAA1BSAPQBCAMAtgHQAdgFAOgWQAyguhNhtQgvg6gug8QgfgngYgkQguhLg3hTQhIhsgbgqQhOiChJhuQhaiKhShzQj6lqikjiIh6ipQrNvjgBvYIAAgMQABjTAkhIQAKgVARgRQA8hEDBhZQAmgRAlgMQCgg1BIBwQAaAgASBPQAQBHAPCbQAFA0AtBnQBqDXK0L/IBGBOQEHEkEeE2QDaDzBhBeIATASQCFCACxB2QDACDC1BIQA0AVAwAOQEOBRCLh+QBCgsAnhRQAphLgOh+IgFgkQgQhmg6jYQgkh2gahyQgQg3gJgsQgoiWgBhkQgFi3ASheQAJhFAIhKQAMh5ARiiQAFgwADg+QAYicgLipQACgogBgjQgEjfgHifIgDgmQgPi/A4iVIAPgnQA5iRCJhTIADgCQCDhWCqAaIAJABQBXAPBKAsQAwAfAuApQBBA5AqA+QB4CwBADQQAnCCAPCXQAOBUACBqQADAvABAzQgHCvASB+QABCbARCTQAQCpAqCqQArCtBDCpQBuE0BCGSIACAJQBHHhgKG4IAAAOQgSH8hNGKIgDAOQhMGCiJEGQg2Blg+BdQh3CyjGCYQhdBHhnA8QiCBLiJA0QkFBlj+AEIgdAAQgjAAgjgCg");
	this.shape_298.setTransform(948.7,1323.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFB69F").s().p("EAowAzWQiygHjEgXIgEgBQixgNi0ACIglAAQjbAEh2gDIhmgCQh/gEijgHQhRgDhGgGQiLgKhwgNQlygvl/h6IgrgOQjDhCiAg8QjIhUiShVIg3geQm+kMmPjjIhyhBQi1hmi/hkQiohcjXhwQgZgPgjgRQiThajbh1Qjbh9ibiCQi7iSibiyQi2jUidkPQgphIgihYQgUg0gVhRQgiiBgqjpIgRhhQggiygXhgQgujEg3hrIgJgSQg8hzAshcIAAgBQAhhEBthEIASgLQBthADGg8IA2gRQDUg9CugHQA2gDAwAHQBsAQBFBJQAxAxAXBAIACAEQAPBIABBJQgeD2AnDuQASBrAfBmQAmB9A5ByQBpDQCiCaQAkAiAnAfQCHBsCXBMQClBYDRBVQBvAsBeAqQBWAhA8AbQGcCwFiCLIAvATQBOAgB5AuQCSA3B5AsIBOAbQEZBgChAbIA+AQQAvAOA+AYICJA6QAuAUA8AcQA/AbBBAfQB/A2BRARQBCANAtgGQAdgFAOgVQA2gthOhsQgwg6gtg7QghgmgWgkQgvhLg2hSQhGhpgcgtQhOiBhJhuQhaiJhRhzQj6lpijjgIh5ipQrJvggCvUIAAgMQABjRAkhJQAKgVAQgRQA7hEDBhZQAlgRAmgNQCfg1BJBsQAbAgATBOQAPBFAQCcQAFA1AqBmQBkDQK6MAIBGBNQEHEjEeEzQDXDtBlBiIATASQCGCBCuB1QDACDC0BHQAzAUAxAOQENBPCHiFQBAguAlhSQAmhMgRh+IgFgjQgShlg+jXQgnh1gbhwQgQg3gKgqQgqiWgChjQgEi0AThhIAUiNQANh4AWiiQAGgwAFg9QAdiegGilQACgnABgjQABjcgFihIgCglQgOi/A9iTIAQgnQA9iOCKhPIADgCQCFhSCoAfIAJABQBXASBIAtQAwAgAsApQBAA6AqA+QB2CxA7DQQAjCBALCYQALBTgCBrQACAugBAzQgNCxAOB6QgDCcAPCSQANCoAqCqQAqCrBFCoQBxEuBEGVIACAJQBJHagIG7IAAAOQgPH6hLGJIgDAOQhKGEiIEBQg2Blg+BcQh5CyjFCWQhcBHhoA7QiBBKiJAzQkEBij+ABIgMAAQgsAAgqgDg");
	this.shape_299.setTransform(947.3,1322.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFB69F").s().p("EAqOAzOQgyAAgwgFQivgIjGgWIgEgBQizgLiwABIgkABQjaADh3gDIhkgCQiCgEifgHQhRgEhGgFQiKgLhwgOQl1gwl3h5IgrgPQjAhBiBg+QjFhWiRhYIg2gfQm5kXmJjjIhxhCQi0hli/hiQinhajahtQgZgOgjgRQiRhWjghxQjfh5iah9Qi+iOidivQi4jQifkNQgphHgjhZQgTgzgVhQQgiiBgpjoIgShhQgfizgXheQgtjDg3hqIgJgTQg7hyAshcIAAAAQAghEBthEIASgLQBshADFg8IA2gRQDTg9CugIQA2gCAwAGQBrAPBGBHQAxAwAYA/IACAEQASBIABBJQgeD0AnDtQASBrAfBmQAmB8A5BxQBqDQChCYQAlAiAnAeQCHBrCYBJQClBUDTBRQBwAqBeAoQBXAfA7AaQGaCpFiCOIAvASQBPAiB3AtQCQA3B5AtIBNAcQEaBiCdAdIA9ARQAvAOA+AZICIA8QAsAUA8AdQA+AcBAAgQB+A5BRARQBBAPAtgGQAdgFAPgUQA5gshPhrQgxg5gsg5QgigngVgiQgvhMg1hRQhFhngdgvQhNiBhKhtQhZiIhRhzQj6loihjfQhBhYg4hPQrFvdgBvRIAAgMQAAjPAkhKQAKgVAPgRQA6hEDAhZQAmgRAlgNQCfg3BKBpQAcAgAUBMQAPBEAQCdQAFA1AoBlQBcDKLAMBIBHBNQEHEgEfExQDSDmBqBnIATASQCGCCCsB0QC/CCCzBGQA0AUAwAOQEMBMCDiMQA+gwAjhTQAkhMgTh9IgGgjQgUhlhDjUQgph1gchuQgRg2gLgqQgsiWgChhQgDiwAVhlIAViMQAPh2AaiiQAIgwAHg8QAiifgCihQAEgoABgiQAHjagEihIgBgmQgLi9BBiSIAQgmQBBiMCLhLIADgCQCHhOCnAkIAJACQBWAUBHAuQAvAhArApQA+A6AqA/QB1CyA1DPQAgCCAGCXQAIBTgFBrIgCBgQgTCzALB3QgICcAMCRQAKCnAqCqQApCqBICnQB0EoBGGXIABAJQBLHUgGG+IAAAOQgMH3hJGJIgDAOQhIGFiHD+Qg2Bkg+BcQh6CxjECUQhcBGhnA7QiBBJiJAyQj7Bdj2AAIgQAAg");
	this.shape_300.setTransform(945.8,1321.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFB69F").s().p("EAqKAzCQgygBgwgEQisgMjIgUIgEAAQi2gJirABIgkAAQjYACh3gCIhkgDQiDgDicgIQhRgEhFgGQiJgLhwgOQl5gylwh4IgrgPQi9hBiChAQjChXiQhcIg0ggQm0kimDjjQg5gig4gfQiyhljAhhQilhXjdhrQgZgNgkgQQiOhSjlhuQjjh1ibh4Qi/iJifisQi6jMiikMQgphGgjhYQgUg0gUhPQgiiAgpjnIgQhgQggi1gWhbQgsjDg3hqIgKgSQg6hzAshbIAAAAQAghEBshEIASgLQBsg/DEg9IA2gQQDSg+CtgIQA2gCAwAGQBrANBHBGQAxAuAZA/IACAEQAUBHABBJQgeDyAnDtQASBrAfBlQAnB8A5BxQBqDOCiCWQAlAiAmAeQCIBqCZBGQCkBPDWBNQBxApBdAlQBYAfA6AYQGYChFkCRIAuATQBQAiB0AtQCOA3B6AuIBNAcQEZBlCaAfIA9ARQAvAPA9AaICGA9QAsAVA7AeQA9AdBAAhQB8A7BQASQBBAQAtgGQAdgEAQgTQA9grhQhqQgzg4gsg4QgigngVgiQguhLg0hRQhDhlgfgwQhNiBhJhsQhaiHhRhzQj4lnihjdQhBhYg4hQQrAvZgBvOIAAgMQAAjNAjhLQAKgVAPgRQA4hDDAhaQAmgRAlgNQCfg4BKBlQAeAgAUBLQAPBCAQCeQAFA3AmBjQBWDELGMBIBGBNQEIEeEeEvQDODfBwBsIATASQCHCCCoBzQC+CCCzBFQA0AUAwANQEKBKCBiTQA7gyAhhUQAihMgWh9IgHgjQgWhkhGjSQgsh1gdhrQgTg2gLgpQgviWgBhgQgDitAWhnIAXiMQARh0AfiiQAKgvAIg8QAnihADicQAFgoACghQANjYgCijIgBglQgKi8BGiQIARgmQBFiJCNhIIADgCQCIhJCmAoIAJACQBVAXBFAvQAuAiArApQA9A7ApBAQBzCzAwDPQAdCBABCYQAFBSgIBrIgGBgQgZC0AHB0QgMCcAKCPQAHCoApCoQAqCqBKClQB2EjBIGZIACAIQBLHPgDHAIAAAPQgJH0hHGJIgDANQhHGIiFD5Qg2Bkg/BbQh7CwjCCTQhcBFhnA6QiBBJiIAxQjyBXjtAAIghgBg");
	this.shape_301.setTransform(944.4,1320);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFB69F").s().p("EAqFAy3QgxgBgwgFQiqgOjJgSIgEAAQi5gIimAAIgkABQjWACh4gDIhjgCQiFgEiZgIQhQgEhFgGQiIgMhwgOQl8g0lph3IgqgPQi7hBiChDQi/hYiPhfIg0giQmuksl9jiQg5gjg3gfQixhljBheQijhVjghoQgYgNglgQQiNhNjqhrQjmhxibhzQjCiFigipQi8jIilkKQgphFgjhYQgUg0gUhOQgih/gojnIgQhfQggi2gVhZQgsjCg2hqIgKgSQg6hyAshbIAAAAQAghEBshDIARgLQBshADDg8IA2gQQDRg+CtgJQA1gCAvAFQBsAMBHBEQAyAtAaA/IACAEQAWBGACBJQgfDxAoDtQASBqAfBkQAmB8A6BwQBrDOChCUQAlAhAnAeQCIBoCZBDQClBMDYBJQBxAnBdAjQBZAdA5AXQGWCZFlCUIAuATQBQAiBzAuIEGBnIBMAcQEaBnCWAhIA8ARQAvAQA8AaICFA/QArAVA6AgQA8AdBAAjQB8A9BOATQBAAQAugEQAdgEARgSQBAgrhRhoQgzg4gsg2QgjgngUghQguhMg0hPQhBhkgfgyQhOiAhJhrQhZiHhRhyQj4lnihjbQg/hXg4hQQq7vWgCvLIAAgLQAAjMAjhLQAJgWAPgQQA3hEDAhZQAlgSAlgNQCeg5BMBiQAeAfAVBKQAPBBARCfQAFA2AiBiQBPC+LNMCIBHBMQEIEdEeEsQDKDZB0BwIATASQCICECmBxQC9CCCyBEQA0AUAvANQEKBIB9icQA4gzAghWQAghLgZh9IgHgiQgYhkhLjQQguh1gfhoQgTg2gMgoQgxiVgBhfQgCiqAXhqIAZiLQAThzAkihQAKgwAKg7QAtiiAGiYQAGgoAEghQASjVAAikIgBglQgHi7BKiPIASglQBIiHCPhDIADgCQCKhGCkAuIAKACQBUAZBDAwQAuAjAqAqQA7A8AoA/QByC0ArDPQAZCBgDCYQACBRgMBrQgDAugGAyQgfC2AEBxQgRCbAHCPQAFCnApCnQApCpBNCkQB4EdBLGbIABAJQBNHJgBHDIAAAOQgGHxhFGJIgDAOQhFGJiED1Qg2Bkg/BaQh8CwjBCQQhcBFhnA6QiBBHiIAwQjoBRjlAAIgygBg");
	this.shape_302.setTransform(943,1318.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFB69F").s().p("EAqBAytQgxgCgwgHQingQjLgQIgEAAQi7gGiiABIgkAAQjUABh5gDIhigCQiGgEiWgIQhQgEhFgHQiGgMhxgOQl/g2lih3IgqgOQi4hCiDhEQi8hZiNhjIgzgjQmpk4l4jhQg4gig3ggQiwhkjBheQihhRjjhmQgYgMglgQQiLhJjvhoQjqhsibhuQjFiBiiilQi9jEiokJQgphEgjhYQgUg1gUhMQghh/gojlIgQhfQgfi4gVhWQgrjBg3hqIgJgSQg6hyAshaIAAgBQAghDBrhEIARgLQBsg/DCg8IA2gQQDQg+CsgJQA1gDAvAFQBsALBIBCQAxAsAcA+IACAEQAZBGACBIQggDwAoDsQASBqAgBkQAmB7A6BvQBrDNCiCTQAlAhAnAeQCIBnCaA/QCkBIDaBFQBzAlBcAhQBaAcA4AVQGUCRFmCXIAuAUQBRAjBwAtIEFBoIBMAdQEZBpCUAjIA6ASQAvAQA7AbQA3AaBNAnIBkA2QA7AeBAAkQB6A/BOAVQA/ARAugEQAdgDASgSQBEgphShnQg1g4grg0QgkgngUggQgthNgzhOQg/hhghg1QhOh/hJhrQhZiGhQhyQj4lligjaQg/hXg4hQQq2vSgCvIIAAgLQAAjKAihMQAJgWAOgQQA2hEDAhaQAkgQAmgPQCeg5BMBeQAgAfAVBJQAQA/AQCfQAGA5AfBgQBIC4LTMCIBHBMQEJEbEeEpQDGDTB5B1IATARQCICFCjBvQC9CDCxBDQA0ATAvANQEJBFB6iiQA1g2AehWQAehLgch+IgIgiQgahjhOjNQgxh1gghlQgVg2gMgoQg0iVAAheQgCimAZhtIAbiKQAVhyAoigQAMgwAMg6QAxijALiUQAHgoAEghQAZjSABilIAAglQgFi6BOiOQAJgTALgRQBLiFCRg/IADgCQCKhCCkAzIAJACQBUAcBCAxQAtAkApAqQA6A8AnBAQBxC2AlDOQAWCBgICYQgBBQgPBsIgMBfQglC4AABtQgVCcAECNQABCnApCnQApCnBPCkQB8EWBMGeIACAIQBNHEACHFIAAAOQgDHvhEGJIgCANQhEGLiDDxQg2Bjg/BZQh9Cwi/CPQhcBEhnA5QiBBHiHAuQjgBMjbAAQgiAAghgBg");
	this.shape_303.setTransform(941.6,1317.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFB69F").s().p("EAp8AyiQgxgDgvgHQikgSjNgPIgEAAQi+gEidAAIgkAAQjTABh5gDIhhgCQiIgEiSgIQhQgFhFgGQiFgNhxgPQmCg4lah1IgqgPQi2hBiDhGQi6hbiMhnIgxgjQmklDlyjhQg4gjg2gfQivhkjBhcQighOjmhkQgYgLgmgPQiJhFj0hlQjthoibhpQjHh9ikiiQi/jAiqkHQgqhDgjhYQgUg1gUhMQghh+gnjkIgQhfQgfi4gUhVQgqjAg3hpIgKgTQg5hxAshaIAAAAQAghDBqhEIASgLQBqg/DCg8IA2gQQDOg9CsgKQA1gDAvAEQBsAKBIBAQAyArAdA+IACAEQAbBFADBIQggDuAoDsQASBpAfBkQAnB6A6BvQBrDMCiCRQAlAhAnAdQCJBmCbA8QCkBEDcBBQB0AjBbAfQBbAaA4AVQGRCJFoCaIAtATQBRAlBuAtIEEBpIBLAdQEZBrCRAlIA6ATQAuARA7AbQA3AbBLAoQApAWA6AhQA5AfBAAlQB5BCBNAWQA/ASAugEQAdgDATgQQBHgphThmQg2g3grgyQgkgngTggQguhNgxhOIhgiVQhOh/hJhqQhZiFhQhxQj3llifjZQg+hWg4hPQqyvQgCvEIAAgLQAAjJAhhMQAJgWAOgQQA1hEC/haQAkgRAmgOQCdg7BOBbQAgAfAWBIQAQA9ARCgQAFA5AdBfQBBCyLaMDIBHBLQEJEZEeEnQDBDMB/B6IASARQCJCGChBuQC7CCCxBDQA0ATAvAMQEHBDB3iqQAzg3AchYQAchLgfh9IgIgiQgchihTjLQgzh1gihjQgVg1gNgnQg2iVAAhdQgBiiAahxIAciJQAXhwAtigQANgwAOg5QA2ilAQiQQAIgnAFghQAejPAEinIAAglQgDi4BSiNIAVgkQBPiCCSg7IADgCQCMg9CjA3IAJADQBTAeBAAyQAsAlAoAqQA5A9AnBAQBvC3AgDNQATCCgOCXQgDBQgTBsQgGAtgJAyQgrC5gDBqQgaCcACCMQgCCnApCmQAoCmBSCjQB+EQBPGgIABAIQBPG+AEHIIAAAOQgBHshBGJIgCANQhCGNiCDtQg2Big/BZQh+Cvi+CNQhcBDhnA5QiBBGiHAtQjWBHjTAAQgqAAgqgCg");
	this.shape_304.setTransform(940.2,1316.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFB69F").s().p("EAp4AyXQgxgEgwgHQiggVjPgNIgEAAIlZgCIgkAAQjRAAh6gDIhggCQiJgEiQgIQhPgFhEgHQiEgNhxgQQmHg5lTh0IgpgPQiyhCiFhHQi2hdiLhqIgxglQmelOlsjgQg3gjg3gfQithkjChaQiehMjphgQgYgMgmgOQiHhBj5hhQjxhkibhkQjKh5imifQjAi8itkFQgqhCgjhZQgUg1gUhKQghh9gmjkIgQheQgfi6gThSQgqi/g2hpIgKgTQg5hwAshaIAAgBQAfhDBrhDIARgLQBqg/DBg8IA1gQQDOg9CrgKQA1gEAvAEQBsAIBJA/QAyAqAeA9IACAEQAdBFAEBHQghDtAoDsQASBpAgBjQAnB5A6BvQBsDLChCPQAmAhAnAdQCJBkCbA5QCkA/DeA/QB1AgBbAdQBcAZA3ATQGPCBFpCdIAtAUQBSAlBsAtIECBqIBLAeQEZBtCNAnIA5AUQAvARA5AcQA3AcBKAoQApAXA4AiQA5AgA/AnQB4BDBMAXQA/ATAvgDQAcgCAUgQQBLgnhVhlQg3g3gqgxQglgngSgfQguhMgxhOIhfiVQhOh+hJhpQhYiEhQhyQj3lkiejXQg+hVg4hQQqtvMgCvBIAAgLQAAjHAhhNQAJgWANgQQAzhEC/haQAkgRAmgPQCdg7BOBXQAiAfAWBGQAQA8ARChQAGA6AaBdQA6CsLgMEIBHBLQEKEXEeEkQC9DGCDB+IATARQCKCHCdBtQC7CCCwBBQA0ATAuAMQEHBBB0ixQAwg6AahYQAahMgih9IgJghQgehihWjJQg2h1gjhfQgXg2gNgmQg5iUABhcQgBifAch0QAOhCAQhGQAZhuAxigQAPgwAPg4QA8inATiLQAKgnAGghQAkjNAFioIABgkQgCi4BXiLQAKgSAMgRQBTh/CUg4IADgCQCNg5CiA8IAIADQBUAhA+AzQArAmAnAqQA4A+AmBAQBtC5AbDMQAPCBgSCYQgFBPgXBsQgIAtgLAyQgxC7gGBmQgeCcgCCLQgECnAoClQAoCmBUChQCBEKBRGiIACAJQBPG4AHHKIAAAOQACHpg/GJIgCANQhBGPiADpQg2Bhg/BYQiACvi8CLQhcBDhnA4QiBBFiGAsQjOBDjLAAQgyAAgxgEg");
	this.shape_305.setTransform(938.8,1315.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFB69F").s().p("EApzAyMQgxgEgvgJQiegXjQgLIgEAAIlYAAIgjAAQjPgBh7gDIhggCQiKgEiNgJQhOgFhFgHQiCgNhxgQQmKg7lNh0IgogPQiwhBiFhKQizheiKhtIgwgmQmYlalnjfQg3gjg2gfQishkjDhYQibhJjsheQgYgLgngOQiFg8j+hfQj0hfichgQjMh0inicQjDi4ivkDQgrhBgihZQgVg1gUhJQggh9gmjjIgPhdQgfi7gShQQgpi/g3hoIgKgTQg4hwArhaQAghDBqhDIARgLQBqg/C/g7IA2gRQDNg9CqgLQA0gDAvADQBtAHBJA9QAzApAeA8IADAFQAfBEAEBGQghDtAoDqQASBpAgBjQAnB4A6BuQBsDLCiCNQAmAhAnAcQCJBjCdA2QCkA7DgA7QB1AfBaAaQBeAYA2ASQGNB5FqCgIAsAUQBTAmBqAtQCDA4B9AzIBLAeQEZBvCJApIA5AVQAuASA5AcQA3AdBIApQApAXA4AjQA3AhA/AoQB3BGBLAYQA+AUAvgDQAdgCAUgOQBPgnhWhjQg4g2gqgwQglgngSgeQguhNgwhNIheiVQhOh+hJhoQhYiDhQhxQj2ljidjWQg+hVg4hQQqovIgDu+IAAgLQABjGAfhOQAJgWANgQQAyhDC/haQAkgRAmgPQCcg9BPBUQAjAfAWBFQARA6ARCiQAGA7AXBcQA0ClLmMFIBHBKQELEWEdEgQC5DBCICCIATARQCLCICbBrQC5CCCwBBQAzATAvALQEFA+Bxi4QAtg7AZhaQAXhLgkh+IgKggQgghhhajHQg5h1gkhdQgYg1gNglQg8iVABhaQAAicAdh2QAOhDAShFQAbhtA2ifIAhhnQBAioAZiIQAKgnAHggQAqjKAHipIABglQABi2BaiKIAXgjQBXh8CWg1IADgBQCOg1ChBBIAJADQBSAjA8A1QArAnAmArQA3A9AlBBQBsC6AVDMQANCBgXCYQgJBOgaBtQgKAsgMAyQg3C8gKBjQgjCdgDCJQgICnAoCkQAoClBXCgQCDEEBTGkIACAJQBQGyAJHNIABAOQAFHmg9GJIgDANQg/GRh+DkQg3Bhg/BYQiBCvi7CIQhbBDhnA3QiCBEiFArQjFA/jDAAQg6AAg5gGg");
	this.shape_306.setTransform(937.5,1314.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFB69F").s().p("EApuAyCQgwgFgvgKQibgZjSgJIgEAAIlWABIgjAAQjNgBh8gDIhfgDQiMgEiJgIQhOgGhEgHQiCgOhxgQQmNg9lFhzIgogPQiuhBiFhMQixhfiIhxIgvgnQmTlllhjeQg3gjg1ggQishjjDhXQiZhGjvhcQgYgKgogOQiDg3kChcQj4hbichaQjOhwiqiZQjEi0iykCQgrhAgihYQgVg2gUhIQggh8gljjIgPhcQgfi8gRhOQgpi+g3hoIgJgTQg4hwArhZQAghDBphCIARgLQBpg/C/g8IA2gQQDMg9CpgMQA0gDAvACQBtAGBKA7QAyAoAgA8IADAEQAhBEAFBGQgiDrApDqQASBpAgBiQAnB4A6BtQBtDKCiCMQAlAgAnAcQCKBiCdAyQCkA4DiA2QB3AdBZAZQBfAWA1ARQGLBxFrCjIAsAUQBTAnBoAtQCBA4B+A0IBKAeQEZByCGArIA4AVQAvASA4AdQA2AeBHAqQAoAYA3AkQA3AhA/AqQB1BIBLAZQA9AVAvgCQAdgCAVgNQBSgmhWhiQg6g2gpguQgmgngSgdQgthOgvhLIheiVQhOh+hJhnQhYiDhPhxQj2liicjUQg9hUg4hQQqkvFgDu7IAAgKQABjEAfhPQAIgWANgQQAwhEC/haIBKggQCbg+BRBQQAjAfAXBEQARA4ARCjQAHA8AUBbQAtCeLsMGIBIBKQELEUEdEeQC1C6CNCGIASASQCMCICYBqQC5CCCvBAQAzASAuALQEFA8Bti/QArg9AXhbQAVhMgnh9IgLggQgihghejFQg7h1glhaQgZg1gOgkQg+iUABhaQAAiYAfh6QAPhCAThFQAchrA7ifIAkhmQBGipAciEQAMgmAIggQAwjIAIiqIACglQACi1BfiIQAMgSAMgRQBbh6CXgwIADgBQCQgyCgBHIAIADQBSAmA7A1QAqAoAlArQA1A/AlBBQBqC7AQDLQAJCBgbCYQgMBNgeBtQgLAtgOAxQg9C+gNBgQgnCdgHCHQgKCnAoCjQAnCkBZCfQCGD+BVGnIACAHQBSGuALHPIABAOQAIHkg8GIIgCAOQg9GTh+DgQg2BghABXQiBCui6CHQhbBChnA2QiCBEiEApQi9A7i8AAQhBAAhBgHg");
	this.shape_307.setTransform(936.1,1313);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFB69F").s().p("EAppAx3QgwgGgvgKQiYgbjTgIIgEAAQjKADiKAAIgkgBQjLgBh8gDIhegCQiOgFiGgJQhOgFhEgHQiAgPhxgRQmRg+k+hyIgngPQirhBiGhOQiuhhiHh1IgugoQmOlvlbjeQg2gkg2gfQiphjjEhVQiYhEjxhYQgYgKgpgNQiBg0kHhYQj7hXidhVQjQhsisiWQjGiwi0kAQgrg/gjhZQgVg1gThIQggh7gljiIgOhcQgfi9gQhLQgpi9g2hoIgKgTQg3hvArhaQAfhCBphCIARgLQBpg/C+g8IA1gQQDLg9CpgMQAzgEAwACQBsAFBLA5QAzAnAhA8IADAEQAiBDAGBGQgiDpApDqQASBoAgBiQAnB3A7BtQBtDJCiCKQAlAgAnAbQCKBhCeAvQCkA0DkAzQB4AaBZAXQBfAVA1APQGIBqFtCmIArATQBVApBlAsQB/A4B+A2IBKAeQEZB0CDAtIA3AWQAuATA4AdQA2AfBFArQAoAYA3AlQA1AiA/ArQB0BKBJAbQA9AWAwgCQAdgCAVgMQBWglhXhhQg7g1gpgsQgngogRgcQgthOguhLIheiUQhNh9hJhnQhYiChPhwQj1lhicjTQg8hTg4hQQqgvDgCu3IAAgKQAAjDAfhPQAIgXAMgPQAvhEC/haQAjgRAmgPQCchABQBNQAmAfAXBDQARA2ARCkQAHA9ASBZQAmCYLyMHIBIBJQELESEdEcQCxCzCSCLIASASQCNCJCVBpQC4CCCvA+QAyATAvAKQEDA6BqjHQAog/AWhcQAShMgqh8IgLggQgkhghijCQg+h1gmhXQgag1gPgkQhAiUABhYQABiUAgh9QAQhCAUhEQAehqA/ifIAohlQBLirAhh/QANgnAIgfQA2jFAKisIACglQAFizBjiHIAZgiQBeh4CZgsIADgBQCRgtCfBLIAIAEQBSAoA5A2QApApAkArQA0A/AkBCQBpC8AKDLQAGCBggCYQgOBMgiBuIgcBdQhDDAgRBcQgrCdgJCHQgNCmAnCjQAnCiBbCeQCJD4BXGoIACAJQBTGnANHSIABAOQALHhg5GIIgDAOQg7GUh8DcQg2BghBBWQiCCui5CFQhbBBhmA2QiCBDiEAoQi1A3i0AAQhIAAhJgJg");
	this.shape_308.setTransform(934.7,1311.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFB69F").s().p("EApkAxsQgvgGgvgLQiWgejVgFIgEgBQjMAGiGgBIgjgBQjKgCh8gCIhegDQiPgEiDgJQhOgGhDgIQh/gOhygSQmUhAk2hxIgngPQiohBiHhQQirhiiGh5IgtgpQmIl6lWjeQg2gjg1gfQiohkjEhSQiXhBj0hXIhAgWQiAgvkMhVQj/hTichQQjUhnitiUQjHiri3j/Qgsg9gjhZQgVg2gShHQggh6gkjhIgPhbQgei/gQhJQgni8g3hoIgKgTQg3hvArhZQAghCBohCIAQgLQBpg/C9g7IA1gQQDKg9CpgNQAzgEAvACQBtADBLA4QAzAlAiA8IADAEQAlBCAGBGQgiDoApDpQASBoAgBhQAnB3A7BsQBtDJCjCIQAlAfAoAbQCKBgCfAsQCjAvDmAvQB5AZBZAVQBgATAzAOQGHBiFuCpIArAUQBVApBjAsQB9A4B/A3IBJAfQEZB2CAAvIA2AWQAuAUA2AeQA3AfBEAsQAmAZA3AmQA0AiA/AtQByBMBJAcQA8AXAwgCQAdgBAXgLQBZgkhYhgQg8g0gpgrQgngngRgcQgshOguhKIhdiVQhOh8hJhmQhXiBhPhwQj0lgibjSQg9hTg3hQQqbu/gDu0IAAgJQAAjCAehQQAJgXALgPQAuhDC/hbQAigQAngQQCbhBBRBJQAnAfAXBCQASA1ARCkQAHA+APBYQAfCSL5MHIBIBJQEMEQEcEZQCtCtCXCQIASARQCNCLCTBoQC3CBCuA+QAzASAuAJQECA4BnjOQAmhBAThdQARhMgth8IgMggQgmhfhmjAQhAh1gohUQgbg1gPgjQhDiTAChYQABiRAih/QAQhCAVhEQAhhoBDifIArhkQBPisAmh7QAOgmAJgfQA8jDAMitIACglQAHiyBoiGQAMgRAOgQQBhh1CbgpIADgBQCSgpCeBQIAIAEQBRArA4A3QAoAqAjAsQAzBAAkBBQBnC9AFDLQADCBgmCYQgRBMglBtIgfBeQhJDBgVBZQgvCdgMCFQgQCmAnCiQAnCiBdCdQCMDyBZGqIACAIQBUGiAQHVIABAOQANHeg3GIIgCANQg6GXh7DYQg2BfhBBVQiDCui3CDQhbBAhnA1QiCBDiDAmQitAzisAAQhQAAhQgLg");
	this.shape_309.setTransform(933.4,1310.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFB69F").s().p("EApfAxiQgvgHgvgLQiSggjXgEIgEAAQjQAHiBgBIgigBQjIgCh9gDIhdgDQiRgEiAgKQhNgFhDgIQh+gPhygTQmXhCkvhvIgogQQilhBiHhRQiohkiFh8IgsgqQmDmGlPjdQg2gjg1ggQinhjjFhQQiUg/j3hUIhBgVQh+grkRhRQkChPidhLQjWhjiuiRQjKini5j9Qgsg9gjhYQgVg3gThFQggh5gjjhIgOhbQgejAgPhGQgni8g3hnIgKgTQg2hvArhYQAfhCBohCIAQgLQBog/C9g7IA1gQQDJg9CogNQAygEAvABQBtACBMA2QA0AkAjA7IADAEQAnBCAGBFQgiDnApDpQASBnAgBhQAnB2A7BsQBuDICiCGQAmAfAoAbQCKBeCgApQCjArDpArQB5AXBYATQBiASAyAMQGFBaFvCsIAqAUQBWAqBhAsQB7A5B/A4IBJAfQEZB4B8AxIA2AXQAuAUA1AfQA3AgBCAsQAmAaA2AnQAzAjA+AuQByBPBIAcQA8AYAwAAQAdgBAXgLQBdgihahfQg9g0gogqQgogngPgbQgthOgthJIhciVQhOh7hJhmQhXiAhPhwQj0lfiZjQQg9hSg3hQQqWu8gDuxIAAgJQAAjAAdhRQAIgXALgPQAthDC+hbIBJghQCbhBBSBFQAoAfAYBAQARA0ASClQAHA/ALBWQAaCML/MIIBIBIQEMEPEdEWQCoCnCcCUIASARQCOCMCQBnQC2CACuA9QAyASAuAJQEBA2BkjVQAjhDAShfQAOhMgvh8IgNgfQgohehqi+QhDh1gphSQgcg0gQgjQhFiTAChWQACiNAjiDQARhCAWhDQAjhmBIifIAthjQBViuAqh2IAahFQBBjBAOiuIADgkQAIiyBsiEQANgRAOgPQBmhzCcglIADgBQCUglCcBVIAJAFQBQAtA1A4QAoArAiAsQAyBAAjBCQBmC/gBDKQAACBgqCYQgUBLgpBuIgjBcQhPDEgXBVQg1CdgOCEQgTCmAnChQAmChBhCcQCNDsBcGsIACAIQBVGdASHXIABAOQARHbg1GIIgDANQg4GZh5DTQg3BfhABVQiFCti2CBQhbBAhmA0QiCBCiDAlQimAvikAAQhXAAhXgNg");
	this.shape_310.setTransform(932,1309.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFB69F").s().p("EApaAxYQgvgIgvgMQiPgjjZgCIgEAAQjSAJh8gBIgjgBIlDgGIhdgCQiSgFh8gJQhOgGhCgJQh9gPhygTQmbhDknhvIgogQQiihBiIhTQimhliDiAIgrgrQl9mRlKjcQg1gkg1gfQimhjjFhPQiTg8j6hRIhBgUQh8gnkWhOQkGhLidhGQjYhfiwiNQjMiji8j8Qgsg7gjhZQgVg3gShEQggh5gjjfIgNhaQgfjCgOhEQgmi7g3hnIgKgTQg1huAqhYQAfhCBnhCIARgLQBng+C8g7IA1gQQDIg9CngOQAzgEAvAAQBtABBMA0QA0AjAkA7IADAEQAqBBAGBFQgjDmAqDoQASBnAgBgQAoB2A7BrQBuDHCiCFQAmAeAoAbQCLBdCgAlQCjAnDrAoIDSAlQBiARAyALQGCBSFxCvIApAVQBXAqBeAsQB5A5CAA5IBJAfQEZB7B5AzIA1AXQAuAVA0AfQA3AhBBAuIBbBCIBvBTQBxBRBHAeQA7AYAxAAQAcAAAYgKQBhgihbhdQg+g0gognQgogogPgaQgthOgshJQgwhQgshEQhNh7hJhlIiljvQj0leiZjPQg8hRg3hRQqSu4gDuuIAAgJQAAi+AdhRQAIgYALgOQArhEC+hbIBJghQCahCBTBCQApAeAYBAQASAxARCmIARCVQATCGMFMIIBIBIQENENEcETQClChCgCZIASARQCPCMCNBmQC1CACtA8QAzASAuAJQD/AzBhjdQAghEAQhgQAMhMgyh8IgNgfQgqhdhui8QhGh1gqhPQgdg0gQgiQhIiSAChWQADiKAkiFQAShCAYhCQAkhlBMieIAxhjQBaivAvhyQAQgmALgfQBHi9AQiwIADgkQAKiwBxiDQANgRAPgPQBphwCeghIADgBQCVghCcBaIAIAEQBQAwAzA5QAoAsAhAtQAwBBAiBCQBkC/gFDKQgECBgvCYQgWBKgtBuIgmBdQhVDFgbBSQg5CdgQCDQgXClAnChQAmCgBjCaQCQDmBeGvIACAIQBWGXAVHZIABAOQATHZgzGIIgCANQg3Gah4DQQg3BehABUQiGCti1B/QhaA/hmA0QiDBBiCAkQieAridAAQheAAhegPg");
	this.shape_311.setTransform(930.7,1308.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFB69F").s().p("EAn3Aw4QiOgljdAAQj2AMh5gEQkUgFiKgEQjygHiqgWQpdhOl3iYQl9ibj5kRQm2nflvjcQilhijGhOQiRg5j9hOQhXgbmAhmQkJhHidhBQjahaiziKQjNifi+j6QhIhfgvivQggh4gijfQgokOgRhQQgli6g3hmQhDh5AuhgQAihHB0hHQB1hHDihDQEChPDNAAQC3AABcCOQAuBCAIBHQgjDkApDoQApDkBtDCQBuDGCjCDQCrCLDPAsQCjAjDsAkQEMApBbARQGWBOGFDDQDmBzEOB3QFmCfBcArQBeArB6BaQBFAzCDBmQBvBTBGAfQBcAoBFgXQBlghhchcQiChogdgyQivk1iajVQlnoJjJkPQsDwLAAv+QAAjyAuhDQAyhPD/hxQDlhkBLC8QAYBCAaEpQAMCFNTNLQGuGqHUG6QFJFFExBoQGmCSBCnSQALhVhEiSQgshchyi6Qh6jFgohRQhLiSADhVQAGjFBOjNQAxiBB6jiQCAjtAwh1QBUjOAOjCQAMivB1iCQB1iKC3ghQCbgdCeBkQBQAyAyA7QEAEqgRE9QgHCBg0CZQgjBlhQCuQhbDHgeBOQg9CegUCBQgyFLDKEzQCTDgBgGxQBaGUAXHhQAXHegxGNQg1Gnh5DOQjhGEmRDIQkZCLkXAAQiUAAiUgng");
	this.shape_312.setTransform(929.4,1307);
	this.shape_312._off = true;

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFB69F").s().p("EAqoAxYQhegJhggZQhKgThfgJQhYgIhpABQhmAFhPACQhyADhJgDQkRgFiNgEQhygEhigGQhugIhagLQpahNl7iVQjOhSiqhzQiPhih1h6Qm8nQlyjbQimhijEhOQhygtixg7IhpgiQhcggl2hpQkFhKichFQjYhfiviNQjLiii6j7IgJgNQhBhdgsilQgfh5gjjeIAAgBQgokKgShTQgli1g1hmIgDgFQhAh1ApheIADgGQAhhHB1hHQB1hHDhhCQEDhQDMAAQC4AABcCOQAuBDAIBHQgkDkAqDoQAqDiBtDEQBuDFCiCFQChCFDCAyIAUAFQCiAoDpAnQEHAsBfAVQGTBTGHDAIBmAxQC5BZDWBdIBfAqIFmCcQA8AbBIAtIBVA4QBDAuB5BbIAPALQBvBQBIAdQBSAiA/gOIAPgEQBdgfhJhSIgMgNQhyhbgkgyIgJgNQiqksiWjRIgJgNQlfn+jIkPIgJgLQr9wDgFv4IAAgOQAAjfAnhKIAHgMQAxhNDyhtIAOgFQDdhhBNCrIAGAOQAYBCAYEaIABAPQAPCGNGNAIALAKQGqGlHOG2IAKAJQFDE+ErBrIAMAEQGgCQBGnEIACgNQALhWhCiRQgWgwgnhHQgnhGg2haQhAhtgohIQgig+gSgmQhHiRAEhXQAFjEBNjOQAOgnAVgwQAwhxBSicQB8juAuh2QAohoAYhiQAYhlAIhhQAHhGAXg/QAihdBGhMQAzg6BAgnQBUgzBngRQA/gKA/AKQBRAOBQAwIAYAOQBPAzAyA7QD9EpgKE+QgFCBgwCYQgfBnhLCtQhVDEgcBSIgOAnQguCHgPByQguFKDBE1QCNDlBbGtQAVBjAQBoQA0FBANFpQATHdg3GNQglEPhCC4QgiBjgrBIQixEukdC7QhPA1hYArQkVCHkTAAQg6AAg5gGg");
	this.shape_313.setTransform(929.8,1307);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFB69F").s().p("EAqbAxWQhegKhggYQhKgShfgJQhagHhoAAQhlAFhPACQhxADhKgDQkOgFiRgFQhxgDhjgHQhtgHhbgMQpWhLl/iSQjPhQirhwQiShgh2h2QnCnCl1jZQiohhjChPQhzgviug8IhpgjQhggllthqQkBhOichLQjThiiuiPQjHimi3j8IgIgNQhAhcgsinQggh6gijdIAAgCQgpkHgThVQgli2g1hlIgDgFQhAh2AphdIADgGQAhhHB1hHQB1hHDhhCQEDhQDMAAQC4AABcCOQAuBDAIBHQgkDkArDoQAqDiBuDEQBtDECiCHQCfCFDAA4IAUAFQChAsDnArQEBAvBjAYQGQBYGJC9IBnAxQC4BXDYBcIBgAqQEPB1BYAjQA9AbBIArIBWA2QBDAsB7BYIAPAKQBxBNBHAcQBTAgA/gOIAPgFQBcgfhKhSIgMgMQhyhcgjgxIgJgOQiqkriWjRIgJgNQlfn/jIkOIgJgLQr9wEgFv4IAAgOQAAjfAnhJIAIgMQAxhODxhsIAOgGQDdhgBNCsIAHAOQAYBCAXEaIACAPQAQCHNFM/IALAKQGpGlHOG2IAKAJQFDE9EsBrIAMAEQGfCPBGnEIACgNQALhWhAiRQgVgwgnhIQglhHg0haQg+htgmhJQghg9gRgnQhDiQADhZQAHjEBJjPQAPgnAUgxQAuhyBPibQB3juAth4QAohpAWhhQAYhlAKhgQAHhGAYg/QAkhcBHhKQA0g6BAglQBUgyBogOQA+gJA/AMQBRAPBPAwIAYAPQBNAzAyA8QD7EngEE/QgCCCgsCXQgbBphGCrQhQDCgaBWIgMAnQgrCGgOBzQgqFKC5E2QCHDqBVGrQAUBjAPBnQAvFCAKFoQANHcg7GMQgoENhEC4QgjBigsBJQiyEskeC6QhQA0hYArQkRCEkPAAQg+AAg9gHg");
	this.shape_314.setTransform(930.3,1307.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFB69F").s().p("EAqOAxUQhegLhggXQhLgShfgIQhagHhnABQhmAFhOABQhxADhKgDQkMgFiTgFQhxgEhjgGQhugIhbgLQpThKmDiPQjQhOishtQiThdh4hyQnHm0l5jYQiphhjChPQh0gwirg9IhogkQhlgplkhuQj8hRibhPQjQhmiriTQjFipizj9IgJgNQg9hcgsioQggh7gijcIgBgCQgokEgUhYQgmi2g1hlIgDgFQhAh1AqheIACgFQAhhHB1hHQB1hHDhhDQEDhPDMAAQC4AABcCOQAuBCAIBHQgkDkAsDoQAqDhBuDFQBuDDCgCJQCfCHC+A8IATAGQChAwDkAuQD8AyBmAbQGOBdGKC7IBnAwQC2BVDcBcIBhApQEMBzBbAiQA/AaBIApQAjAWA0AeQBEArB8BUIAPAKQBxBKBJAaQBTAfA+gPIAQgEQBbgfhKhTIgMgMQhzhcgjgyIgIgNQirksiWjQIgJgNQlfn/jHkOIgJgLQr9wEgFv4IAAgOQAAjgAohIIAHgMQAyhODxhsIAOgFQDdhgBNCsIAFAOQAZBDAXEZIACAPQASCINDM+IALAKQGqGkHOG2IAKAJQFDE+ErBrIAMAEQGfCPBGnFIACgNQALhWg+iSQgVgwglhIQgkhIgzhZQg8hvgkhJQgfg9gQgoQhAiOAEhcQAHjDBHjQQAOgoATgwQAuh1BMiaQByjtAsh6QAmhqAWhgQAWhlAMhgQAIhFAag+QAlhcBIhJQA0g4BCglQBUgwBogMQA+gIA/ANQBQARBOAxIAXAPQBMA0AzA8QD3EmADFAQABCBgoCXQgYBrhBCqQhKDAgXBZIgMAnQgnCGgNB0QgmFKCwE3QCBDwBQGmQASBjAPBoQArFEAGFlQAIHbhBGMQgqEKhGC5QgkBigtBJQizErkfC4QhRA0hYAqQkNCAkLAAQhCAAhBgIg");
	this.shape_315.setTransform(930.8,1307.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFB69F").s().p("EAqAAxSQhdgLhhgXQhLgRhegIQhcgGhmABQhmAEhOACQhvAChMgCQkJgGiWgFQhxgEhkgHQhtgHhbgLQpRhJmGiMQjRhMiuhqQiThah7hvQnNmml8jWQiqhgjAhQQh1gxipg+IhngmQhqgtlbhwQj3hViahUQjOhqioiVQjCitivj+IgJgNQg7hbgtiqQgfh8gjjaIgBgDQgokBgVhcQgni1g1hlIgDgFQhAh1AqheIACgFQAihHB0hHQB1hHDihCQEChQDNAAQC3AABcCOQAuBDAIBHQgjDjAsDpQArDgBvDGQBsDCChCLQCcCHC9BBIATAGQCgA0DhAzQD3A0BpAfQGMBhGMC5IBoAvQC0BUDfBbIBgApQEKBwBgAhQA/AZBIAnQAiAVA3AdQBFApB9BRIAPAKQBxBHBKAYQBTAdA+gPIAQgEQBbgfhLhTIgMgMQhzhcgjgyIgIgNQirksiWjRIgJgNQlfn+jHkOIgJgLQr9wEgFv4IAAgOQABjgAnhIIAIgMQAyhODxhrIAOgGQDdhfBMCsIAGAOQAYBEAYEYIABAPQAUCKNCM7IALAKQGpGlHOG2IAKAJQFEE+ErBqIAMAEQGfCPBGnFIABgNQALhXg8iRQgUgygkhHQgjhJgxhZQg6hwgihJQgeg8gOgqQg9iNAEhdQAIjDBFjRQANgpATgwQAsh2BIiZQBvjtAqh8QAkhrAWhfQAVhlAOhgQAJhFAag9QAnhbBJhIQA1g3BCgkQBVguBogKQA+gGA+AOQBRATBMAxIAXAQQBLA0AyA9QD1EkAKFBQADCBgjCXQgVBrg8CqQhFC+gUBcIgLAoQgkCFgLB1QgjFJCpE6QB6D0BLGjQARBjANBoQAnFFADFkQACHZhGGLQgtEIhIC6QglBhgtBJQi0EqkhC3QhRAzhYAqQkJB8kIAAQhGAAhFgJg");
	this.shape_316.setTransform(931.4,1307.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFB69F").s().p("EApyAxQQhdgMhhgVQhLgRhfgIQhcgFhlAAQhnAFhNABQhvADhMgDQkGgGiagFQhwgEhkgHQhtgHhcgLQpNhImLiJQjRhKiwhnQiUhXh9hrQnTmYl/jVQirhfi/hRQh2gzimg+IhngnQhugylShyQjzhZiZhZQjKhuimiXQi/ixisj/IgIgNQg6hagtisQgfh8gkjaIAAgDQgpj+gWhfQgni1g1hkIgDgFQhAh2AqheIACgEQAihHB0hHQB1hHDihDQEChPDNAAQC3AABcCOQAuBCAIBHQgjDkAtDoQArDgBvDGQBtDBCfCOQCbCIC8BFIASAGQCfA5DeA2QDyA3BtAiQGJBnGOC2IBoAvQCzBRDiBbIBhAoQEGBtBlAhQBAAYBIAlQAgAUA6AcQBFAoB/BOIAPAJQByBDBLAYQBTAbA+gPIAPgFQBbgfhMhTIgMgMQhzhdgigxIgIgNQirksiWjRIgJgNQlgn+jHkOIgJgLQr8wEgFv4IAAgOQABjgAohIIAHgMQAzhODxhrIAOgGQDchfBNCtIAFAOQAYBEAYEYIACAPQAVCMNBM5IAKAKQGqGlHOG2IAKAJQFDE+EsBqIAMAEQGeCOBGnFIABgNQALhXg6iRQgTgzgjhHQgjhLguhYQg4hxghhJQgcg8gNgrQg5iLAEhgQAIjDBDjRQAMgpASgxQArh4BGiXQBpjuAph+QAkhrAUheQAVhmAPhfQAKhEAcg9QAohbBKhGQA2g2BCgiQBWgtBngHQA+gGA+AQQBRAUBLAxIAXARQBKA1AyA9QDyEjAQFCQAGCBgfCWQgRBtg3CpQhAC7gRBgIgKAoQgiCFgJB2QgfFJCgE7QB1D5BFGgQAQBjAMBoQAjFGgBFiQgDHYhLGLQgwEFhKC7QgmBggtBKQi2EokiC1QhSAzhYApQkFB5kEAAQhKAAhJgKg");
	this.shape_317.setTransform(932,1307.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFB69F").s().p("EApjAxOQhcgNhigUQhMgQhegHQhdgFhjAAQhoAFhMABQhuAChOgDQkDgGidgGQhwgEhlgGQhsgIhcgLQpKhGmQiGQjRhIixhkQiWhUh/hoQnYmJmDjUQishfi+hRQh3g0ikg/IhlgoQh0g3lHh1QjvhciZheQjHhxijibQi8i0iokAIgIgNQg5hZgsiuQggh9gkjZIAAgDQgpj7gXhiQgoi0g1hlIgDgFQhAh2ArhdIACgFQAhhHB1hHQB1hHDhhCQEDhQDMAAQC4AABcCOQAuBDAIBHQgkDjAuDpQArDeBxDIQBrC/CgCQQCZCJC6BKIASAHQCfA9DbA6QDtA6BwAlQGGBrGQC0IBoAuQCyBPDkBbIBhAoQEEBqBpAhQBBAWBIAjQAeATA9AbQBHAnCABKIAPAIQBzBBBMAWQBTAaA9gQIAPgFQBagfhMhTIgMgMQhzhdgigxIgIgNQirksiWjRIgJgNQlfn+jIkOIgJgLQr8wEgEv4IAAgOQAAjhAphHIAHgNQA0hMDwhsIAOgGQDcheBMCtIAGAOQAYBFAZEXIABAQQAXCMM/M4IAKAKQGqGlHOG2IAKAJQFDE+EsBqIAMAEQGeCNBFnFIACgNQALhYg4iRQgTgzgihHQgihMgshXQg2hzgfhJQgag8gNgsQg2iKAGhiQAIjCBAjTQAMgpASgwQAph6BCiXQBmjtAniAQAihsAUhdQAUhmARhfQALhEAdg8QAphaBLhEQA2g2BEghQBXgsBngEQA9gEA+AQQBQAWBKAyIAWARQBKA2AyA+QDvEhAXFDQAICBgaCWQgPBugxCnQg6C6gPBjIgJAoQgeCGgJB1QgaFJCXE9QBvD+BAGdQAOBjALBoQAgFHgGFgQgIHXhQGKQgyEEhNC7QgmBgguBJQi4EnkjC0QhSAzhYAoQkAB1kAAAQhPAAhOgLg");
	this.shape_318.setTransform(932.6,1307.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFB69F").s().p("EApUAxMQhbgNhjgUQhMgPhegHQhdgEhjABQhoAEhMABQhtAChPgDQkAgGiggGQhwgFhlgGQhsgIhcgKQpIhFmTiDQjShHiyhgQiYhSiAhkQnel7mHjTQithei9hRQh4g1ihhAIhlgqQh4g8k+h3QjrhfiYhjQjDh1igidQi6i4ikkBIgJgNQg2hZgtiwQggh+gkjXIAAgEQgpj4gYhkQgpi1g0hkIgDgFQhAh2ArheIABgEQAihHB0hHQB1hHDihCQEChQDNAAQC3AABcCOQAuBDAIBHQgjDjAuDpQAsDdBxDJQBrC+CfCSQCXCKC5BOIASAIQCeBBDYA9QDoA9BzApQGEBwGSCxIBpAuQCvBNDnBbIBiAnQEBBoBuAfQBBAWBIAhQAdASA/AaQBIAlCCBHIAPAIQBzA+BNAUQBTAYA9gQIAQgFQBZgghNhTIgMgLQhzhdgigxIgIgOQirkriWjRIgJgNQlfn/jHkOIgJgLQr9wEgEv4IAAgOQABjhAohHIAIgMQA0hNDwhrIAOgGQDcheBMCuIAGAOQAYBGAYEWIACAPQAYCOM+M3IAKAKQGqGlHOG1IAKAKQFDE9EsBqIAMAEQGeCNBFnGIACgNQAKhYg1iRQgTgzgghHQghhOgrhWQg0h1gdhIQgYg8gMgtQgziJAGhkQAIjCA+jTQAMgqARgwQAoh9A/iVQBhjtAmiBQAhhuAThcIAljEQANhDAeg9QArhZBLhDQA3g0BFggQBXgqBngDQA9gCA+ASQBQAXBIAzIAWARQBIA2AzA/QDsEgAeFDQALCBgXCVQgLBxgsCmQg1C3gMBnIgIAoQgbCFgHB3QgWFICOE+QBpEDA6GaQANBkAKBnQAcFJgJFeQgNHVhWGLQg1EAhPC9QgnBfgvBJQi4ElklCzQhSAyhYAoQj9Bxj8AAQhSAAhTgMg");
	this.shape_319.setTransform(933.3,1307.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFB69F").s().p("EApEAxKQhagNhkgUQhMgPhegGQhegDhiABQhoAEhMABQhsABhQgDQj9gGijgHQhwgEhlgGQhrgIhegKQpEhEmYiAQjShFi0hdQiYhPiDhhQnklsmKjSQiuhdi7hSQh5g2ifhBIhkgrQh9hBk1h5QjmhjiXhoQjBh5idigQi3i7ihkCIgIgNQg1hZgtixQgfh/gljWIAAgEQgpj1gZhnQgqi1g0hkIgDgFQhAh2ArhdIACgEQAhhHB1hHQB1hHDhhDQEDhPDMAAQC4AABcCOQAuBCAIBHQgkDkAvDoQAtDdBxDJQBrC+CeCUQCWCKC3BTIASAIQCdBGDVBBQDjA/B3AsQGBB2GUCuIBpAtQCuBLDqBbIBiAmQD+BmByAeQBCAVBIAfQAcARBCAZQBJAjCCBEIAQAIQB0A6BNATQBUAWA9gQIAPgFQBYgghNhTIgMgLQhzhegigwIgIgOQirkriWjRIgJgNQlfn/jHkOIgJgLQr9wEgDv4IAAgOQAAjhAphHIAIgMQA1hNDvhrIAOgGQDcheBMCvIAFAOQAYBGAZEWIABAQQAbCPM8M1IAKAKQGqGlHOG1IAKAKQFDE9EsBqIAMAEQGeCNBEnHIACgNQALhYg0iRQgSg0gfhHQgghPgphWQgyh2gbhIQgXg8gLguQgviHAGhnQAJjBA8jVQALgqAQgwQAnh+A8iUQBdjuAkiCQAghvAShbQAShmAUheQAOhDAfg8QAshYBMhCQA4gyBFgfQBYgpBngBQA9gBA9ATQBQAaBHAzIAWARQBHA3AzA/QDpEfAlFEQANCBgSCVQgIBygnCkQgvC1gKBrIgHApQgYCEgGB3QgSFJCGE/QBjEIA1GXQAMBkAIBnQAYFKgNFcQgSHUhbGKQg3D/hSC9QgnBegwBJQi6EkkmCyQhSAyhYAnQj5Buj4AAQhXAAhXgOg");
	this.shape_320.setTransform(934,1307.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFB69F").s().p("EAo1AxIQhbgOhkgSQhMgPhegGQhfgDhhABQhoAFhLAAQhsABhRgDQj6gGimgHQhwgEhlgHQhrgHhegLQpBhCmch9QjShDi2haQiahMiFhdQnplemNjRQiwhci6hTQh6g4ichBIhkgsQiBhFksh8QjhhniXhsQi9h9ibijQi0i/idkCIgIgOQgzhYgtizQggh/gkjWIgBgEQgpjzgahpQgqi1g0hkIgDgFQhAh1ArheIABgEQAihHB0hHQB1hHDihCQEChQDNAAQC3AABcCOQAuBDAIBHQgjDjAwDpQAsDcByDKQBrC8CdCWQCVCMC1BXIASAJQCcBKDSBEQDeBDB6AvQF/B6GVCsIBqAsQCsBKDtBaIBjAmQD8BiB1AeQBEAUBHAdQAaAQBFAYQBKAiCEBAIAQAIQB0A3BOARQBUAVA9gRIAPgEQBYgghOhUIgMgLQh0heghgxIgIgNQirksiWjQIgJgNQlfn/jHkOIgJgLQr8wEgEv4IAAgOQABjiAphGIAIgMQA1hNDvhrIAOgFQDcheBMCvIAFAOQAYBHAYEVIACAQQAcCQM7M0IAKAKQGqGkHOG2IAKAJQFDE+EsBpIAMAEQGdCNBFnHIACgNQAKhZgxiRQgSg0gehHQgfhQgnhWQgwh3gZhIQgVg8gKgvQgsiGAGhpQAKjAA5jWQALgqAPgxQAliAA6iTQBYjtAjiFQAehwAShZQARhmAWheQAPhCAgg7QAuhYBNhBQA4gxBGgeQBYgnBnACQA9AAA9AUQBQAbBFAzIAWASQBGA4AzA/QDmEeArFFQARCBgPCUQgEB0giCjQgqCzgHBuIgGApQgVCEgEB4QgOFIB9FBQBdEOAwGSQAKBkAHBoQAUFMgQFaQgYHShgGKQg6D8hUC+QgoBdgwBKQi7EjknCwQhTAxhYAnQj1Bqj0AAQhbAAhbgPg");
	this.shape_321.setTransform(934.8,1307.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFB69F").s().p("EAolAxHQhagPhlgSQhMgOhegFQhfgChgABQhpAEhLAAQhrABhSgDQj4gGipgIQhvgEhlgHQhsgHhegKQo9hBmhh7QjShAi4hXQibhKiHhZQnvlQmQjPQixhci5hTQh6g5iahDIhjgtQiGhKkih+QjehriWhxQi6iAiXimQiyjCiakEIgHgOQgyhXgti0QggiBgljUIAAgFQgpjvgchtQgqi0g0hkIgDgFQhAh2ArhdIACgEQAhhHB0hHQB2hHDhhCQEDhQDMAAQC4AABbCOQAvBDAHBHQgjDjAxDpQAsDbBzDLQBrC7CcCYQCTCMC0BdIASAJQCaBODQBIQDZBFB9AzQF9B/GXCqIBqArQCrBIDvBZIBjAmQD5BgB7AdQBEATBHAbQAYAOBJAYQBKAgCGA9IAQAHQB0A1BPAPQBVATA7gRIAPgFQBYgghOhTIgMgLQh0heghgxIgIgOQirkriWjRIgJgNQlgn/jGkNIgJgLQr9wFgDv4IAAgOQABjiAqhFIAIgNQA1hMDvhrIAOgGQDbhdBMCwIAFAOQAZBIAYEUIACAQQAfCRM4MyIAKAKQGpGlHPG2IAKAJQFDE9EsBpIALAEQGeCNBFnHIABgNQALhagwiRQgQg1gehHQgehRgmhVQguh4gWhJQgUg7gJgwQgoiFAHhrQAJjAA3jXQALgqAPgxQAjiCA3iSQBTjtAiiGQAdhxAQhZQAShmAWhdQAQhCAig7QAvhXBOg/QA5gwBGgdQBagmBmAEQA8ACA9AVQBQAdBEA0IAWASQBFA4AzBAQDjEcAyFGQASCCgKCTQAAB1geCiQgkCxgEBxIgFAqQgSCEgCB4QgLFIB1FDQBXESAqGQQAKBkAFBoQAQFMgUFZQgdHRhkGJQg+D6hWC+QgoBdgxBKQi9EhkoCvQhUAxhXAmQjyBnjwAAQhfAAhfgQg");
	this.shape_322.setTransform(935.5,1307.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFB69F").s().p("EAoUAxFIi+ggQhNgNhegFQhggChfABQhpAEhKAAQhqABhTgDQj1gHitgHQhugFhngGQhqgIhegKQo7hAmlh3QjTg/i5hUQichHiJhVQn1lCmUjOQiyhbi3hUQh8g6iXhDIhigvQiLhOkZiBQjZhuiVh2Qi3iEiVipQivjGiVkEIgIgOQgwhWgti3QggiBgljTIgBgGQgpjsgdhvQgri1g0hjIgDgFQg/h2ArheIABgDQAihHB0hHQB1hHDihCQEChQDNAAQC3AABcCOQAuBDAIBHQgjDjAxDpQAtDaB0DMQBpC6CdCaQCRCNCyBhIASAKQCaBSDMBMQDUBICBA2QF6CEGZCnIBqArQCpBFDzBaIBjAlQD3BdB+AcQBFATBHAYQAXAOBLAXQBMAeCGA6IARAGQB1AyBQAOQBUARA8gRIAPgFQBXgghPhUIgMgLQh0hegggxIgJgNQiqksiXjQIgJgNQlfn/jHkOIgJgLQr8wEgDv4IAAgOQABjjAqhFIAIgMQA2hNDuhqIAOgGQDchdBLCwIAGAOQAXBJAYETIACAQQAhCTM3MxIAKAKQGqGkHOG2IAKAJQFDE+EsBpIAMAEQGdCLBEnHIACgNQAKhagtiRQgQg1gchHQgehTgjhUQgsh6gVhIQgSg7gIgyQgliDAHhtQAKjAA1jXIAYhcQAiiEAziRQBQjtAgiIQAchyAPhXQARhnAYhdQARhBAjg6QAxhXBOg9QA6gwBHgbQBaglBmAHQA8ADA9AWQBQAfBDA0IAVASQBEA6AzBAQDgEbA5FHQAVCBgGCTQADB3gYChQgfCugCB1IgEAqQgPCDgBB6QgGFHBsFEQBREYAlGMQAIBkAFBoQAMFOgYFWQgiHQhqGJQhAD3hYDAQgqBcgxBKQi+EgkqCtQhUAxhYAlQjtBkjtAAQhjAAhjgSg");
	this.shape_323.setTransform(936.4,1307.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFB69F").s().p("EAoDAxEQhZgQhmgQQhMgNhegFQhhgBheABQhqAEhKAAQhpAAhUgDQjxgGiwgIQhvgFhmgGQhqgIhfgKQo4g+mph1QjTg8i7hRQidhEiLhSQn7kzmXjOQizhai2hUQh9g8iUhEIhigvQiPhUkQiDQjVhxiUh7QiziJiTiqQisjKiSkFIgIgPQgvhVgti4QgfiCgmjTIgBgFQgpjqgdhyQgsi0g0hjIgDgFQg/h2ArheIABgDQAihHB0hHQB1hHDihCQEChQDNAAQC3AABcCOQAuBDAIBHQgjDjAyDpQAuDZBzDMQBqC6CbCdQCQCNCxBmIARAJQCZBYDKBPQDOBLCFA5QF3CJGbCkIBrArQCnBDD2BZIBkAlQDzBaCDAcQBGARBHAXQAWAMBNAWQBMAdCJA2IAQAHQB2AuBRANQBUAPA8gRIAPgFQBWghhQhTIgMgLQh0hfgggwIgIgOQirkriWjRIgJgNQlgn/jGkNIgJgMQr8wEgDv4IAAgOQABjiAqhGIAIgMQA3hMDuhqIAOgGQDbhdBLCxIAGAOQAXBJAYETIADAQQAjCVM0MuIAKAKQGqGlHOG1IAKAKQFDE9EtBpIAMAEQGcCLBEnIIACgMQAKhbgriQQgQg3gbhHQgchTghhUQgrh7gThIQgQg7gIgzQggiCAHhvQAKjAAzjYQAJgsAOgwQAgiGAxiPQBKjuAfiKQAbhzAPhWQAPhmAbhdQAShBAjg6QAyhWBQg8QA7guBHgaQBbgjBmAJQA8AEA8AYQBQAfBBA1IAWATQBCA6AzBBQDeEZA/FIQAYCBgBCTQAGB4gUCgQgYCsAAB4IgDArQgMCDAAB6QgCFIBkFFQBKEcAgGJQAHBlADBnQAJFQgcFUQgoHPhvGIQhBD1hcDAQgpBcgzBKQi/EekrCsQhUAwhYAlQjqBhjqAAQhnAAhmgTg");
	this.shape_324.setTransform(937.3,1307.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFB69F").s().p("EAnyAxDQhYgRhngQQhNgMhdgEQhjgBhcACQhqAEhKgBQhoAAhVgDQjvgHizgIQhugEhngHQhpgHhggLQo1g9mthxQjUg6i8hOQiehCiNhOQoBklmajMQi0hai1hVIkQiCIhhgwQiUhYkGiFQjRh2iTh/QiwiNiRitQipjNiOkHIgHgOQguhVgti5QgfiEgmjRIgBgGQgpjmgfh2Qgsi0g0hjIgDgFQg/h1ArheIABgDQAihHB0hHQB1hHDihCQEChQDNAAQC3AABcCOQAuBDAIBHQgjDjAyDpQAvDYB0DNQBpC5CbCfQCOCOCvBrIARAJQCZBcDGBTQDKBOCIA8QF1COGcCiIBsApQClBCD5BZIBkAkQDxBYCHAaQBGARBIAUQAUAMBQAVQBNAbCKAzIAQAGQB3ArBSALQBUAOA8gRIAOgFQBWghhQhUIgMgLQh1hfgfgwIgIgOQirkriWjRIgJgNQlgn/jHkMIgJgMQr7wEgDv5IAAgOQABjiAqhFIAIgMQA4hNDuhqIANgFQDchdBLCxIAFAPQAXBJAYETIADAQQAlCWMyMsIALAKQGpGlHOG2IAKAJQFEE9EsBpIAMAEQGdCLBDnIIACgNQAKhbgpiQQgPg4gahHQgchUgfhTQgph8gQhJQgPg7gHg0QgdiAAIhyQALi/AwjZQAJgsAMgxQAgiHAtiOQBGjuAeiLQAZh0AOhWQAPhmAchcQAThBAkg5QA0hVBRg7QA7gtBIgZQBcgiBlALQA8AGA8AZQBQAhBAA2IAVATQBCA7AyBBQDcEYBFFIQAbCCADCSQAJB5gPCfQgSCqACB8IgCArQgJCCACB7QACFIBcFHQBDEhAcGFQAFBlACBoQAFFRggFSQgtHOh0GHQhEDzheDAQgqBbgzBLQjBEdksCrQhVAvhYAkQjnBejlAAQhrAAhqgUg");
	this.shape_325.setTransform(938.2,1307.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFB69F").s().p("EAngAxCQhXgRhogQQhNgLhdgEQhjAAhcACQhqADhJAAQhogBhWgDQjsgHi2gIQhugFhngGQhpgIhggKQoyg7mxhvQjVg4i9hLQigg/iPhLQoGkWmejLQi1hZi0hWIkOiEIhggxQiZhdj9iIQjMh5iTiEQitiQiNixQinjQiKkIIgHgOQgshUgti7QggiFgmjQIgBgGQgpjjggh5Qgti0g0hiIgDgFQg/h2AsheIABgCQAhhHB1hHQB1hHDhhDQEDhPDMAAQC4AABcCOQAuBCAIBHQgjDjAyDqQAvDXB1DOQBpC4CaCgQCMCPCuBwIARAKQCYBgDEBWQDEBRCLBAQFzCSGeCgIBsApQCkA/D8BZIBkAkQDuBVCMAZQBGAQBIATQASAKBUAUQBOAZCKAwIARAGQB3AoBTAKQBUALA8gRIAOgFQBVghhQhUIgMgLQh1hfgfgwIgIgOQirkriWjRIgJgNQlgn/jGkMIgJgMQr8wEgCv5IAAgOQABjjAqhEIAIgMQA4hNDuhpIANgGQDchcBKCxIAGAPQAXBKAYESIACAQQAnCXMxMrIALAKQGpGlHOG2IAKAJQFEE9EsBpIAMAEQGdCKBDnIIABgNQAKhbgniRQgOg4gZhHQgbhVgdhTQgnh9gOhJQgOg6gFg2Qgah/AIhzQALi/AujaQAJgsAMgxQAeiKAqiNQBCjtAciNQAYh1ANhVQAOhmAehcQAUhAAlg5QA2hVBRg5QA8gsBJgYQBcggBmANQA7AIA8AZQBQAkA+A2IAVATQBBA7AyBDQDZEWBMFJQAdCCAHCRQANB7gKCeQgNCoAFB/IgBArQgFCCADB8QAFFHBUFJQA9EmAWGCQAEBlABBoQABFSgjFQQgzHNh5GHQhHDwhgDBQgrBbgzBKQjCEckuCpQhVAwhYAjQjjBbjiAAQhvAAhugWg");
	this.shape_326.setTransform(939.1,1307.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFB69F").s().p("EAnOAxAQhXgRhogPQhNgLhegDIi+ACQhrAEhIgBQhngBhXgDQjpgHi6gJQhtgFhogGQhpgIhggKQovg6m1hsQjVg2i/hHQihg9iRhHQoMkImhjKIlpiuIkMiGIhggzQidhhj0iLQjIh8iSiJQipiUiMizQijjUiHkJIgHgPQgqhTgti9QggiFgmjPIgCgHQgpjgghh7Qgti0g0hjIgDgFQg/h1AsheIABgCQAhhHB1hHQB1hHDhhDQEDhPDMAAQC4AABcCOQAuBCAIBHQgjDjAzDqQAvDWB2DPQBoC3CaCiQCLCQCsB0IAQALQCXBkDBBaQC/BUCPBDQFwCXGgCdIBtAoQCiA+D/BYIBkAkQDsBSCPAZQBIAPBIAQQAQAJBXAUQBOAXCNAtIAQAFQB4AmBUAHQBUAKA7gRIAPgFQBUghhRhUIgMgLQh1hfgegxIgIgNQirksiXjQIgJgNQlgoAjFkMIgJgMQr8wEgCv4IAAgOQABjkAqhEIAJgMQA4hMDthqIAOgFQDbhcBLCyIAFAPQAXBLAYERQAAAHADAJQAoCYMwMqIAKAKQGqGkHOG2IAKAJQFDE9EtBpIAMAEQGcCKBDnJIABgMQAKhcgliRQgNg4gYhHQgahXgbhSQglh/gNhIQgMg7gEg2QgWh+AIh2QAMi+ArjbQAIgsALgxQAdiMAniMQA9jtAbiPQAXh2AMhTQAOhnAfhbQAVhAAng4QA3hUBSg4QA9grBJgXQBdgfBlAQQA7AJA8AbQBQAkA9A3IAVAUQA/A8AzBCQDVEVBTFKQAgCCALCRQARB9gFCcQgICmAICCIAAAsQgDCCAFB8QAJFHBLFKQA4EsAQF+QADBlAABoQgDFUgnFOQg4HLh+GHQhKDuhiDCQgsBag0BKQjDEbkvCoQhWAuhYAjQjfBYjdAAQhzAAhzgYg");
	this.shape_327.setTransform(940.1,1307.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFB69F").s().p("EAm7Aw/QhWgShogOQhOgKhdgDIi+ADQhrADhIgBQhmgBhYgDQjngHi8gJQhtgFhpgGQhogIhhgKQorg5m6hpQjVg0jBhEQiig6iThDQoSj6mljJQi3hXixhXQiBhAiKhIQgvgZgwgbQiihmjqiNQjEiAiRiOQimiYiJi2QihjXiDkKIgGgPQgphSgti/QggiGgnjOIgBgHQgpjdgih+Qgvi0gzhiIgDgFQg/h2AsheIABgCQAhhHB1hHQB1hHDhhCQEDhQDMAAQC4AABcCOQAuBDAIBHQgjDjA0DpQAvDWB3DPQBnC2CaClQCJCRCqB4IARALQCWBpC+BeQC6BWCSBGQFuCcGiCbIBsAoQChA7ECBYIBkAjQDpBQCUAYICQAcQAPAIBaATQBPAWCOApIARAFQB4AiBVAHQBUAIA7gSIAOgFQBUghhRhUIgMgLQh1hggfgwIgIgNQirksiWjQIgJgNQlgoAjGkMIgJgMQr8wEgBv4IAAgOQABjkArhEIAIgMQA5hMDthpIANgGQDchcBKCzIAFAPQAXBLAYERQAAAHADAJQAqCaMuMoIALAKQGpGkHOG2IAKAJQFEE9EsBpIAMAEQGcCJBDnJIABgMQAKhdgjiQQgNg5gWhHIgziqQgjiAgLhIQgKg6gDg4QgTh8AJh4QAMi+ApjcIASheQAbiNAkiLQA5jtAaiRQAVh3AMhSQAMhnAhhbQAWhAAog3QA5hUBSg2QA+gqBKgWQBegdBlASQA7AKA7AcQBQAnA8A3IAUAUQA/A9AyBDQDTETBaFLQAiCCAPCRQAUB+AACbQgCCjAKCGIABAsQABCCAGB9QANFHBDFLQAxExAMF7QABBlgBBoQgHFVgrFMQg9HKiEGGQhMDshkDDQgtBZg0BLQjFEZkxCmQhWAvhYAiQjbBVjaAAQh3AAh3gag");
	this.shape_328.setTransform(941.1,1307.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFB69F").s().p("EAmoAw+QhWgShpgOQhNgKhegCIi+AEQhrADhIgBQhlgBhZgEQjjgHjAgJQhtgFhogHQhogHhhgKQopg4m+hmQjWgyjChBQijg3iVhAQoYjrmojIQi4hXiwhXQiChBiHhJIhfg1QimhrjiiPQi/iEiQiTQijibiGi5Qiejbh/kKIgHgQQgnhSgujAQgfiHgnjNIgCgHQgpjbgjiAQgvi0gzhiIgDgFQg/h2AsheIABgBQAhhHB1hHQB1hHDhhDQEDhPDMAAQC4AABcCOQAuBCAIBHQgjDjA1DqQAwDUB2DRQBoC1CYCmQCICSCpB9IAQAMQCVBtC7BhIFLCjQFrChGkCYIBtAnQCfA6EFBXIBlAjQDmBNCYAXICRAZQAOAHBcASQBQAUCPAnIARAEQB5AfBVAFQBVAGA7gSIAOgFQBTghhShUIgMgLQh1hggegwIgIgOQirkriWjQIgJgNQlhoAjFkMIgJgMQr8wEgBv5IAAgOQABjkArhDIAIgMQA6hMDthpIANgGQDbhbBKCzIAFAPQAXBMAYEQQAAAHADAJQAsCbMtMnIAKAKQGqGkHOG2IAKAJQFDE9EtBoIAMAEQGbCKBDnKIABgMQAKhdghiRQgMg5gVhHIgwiqQghiCgJhIQgJg6gCg5QgPh7AIh6QANi9AnjdIARhfQAaiPAhiKQA0jtAYiSQAUh5ALhRQAMhnAihaQAYg/Apg3QA6hTBTg1QA/goBKgVQBegcBlAUQA7AMA7AdQBQAoA6A4IAVAUQA9A+AzBDQDQESBgFMQAlCCATCQQAYCAAFCaQADChANCJIACAtQADCBAIB+QARFGA6FNQAsE2AGF4QAABlgDBoQgLFWguFLQhCHIiJGGQhPDphnDEQgtBYg1BLQjGEYkyClQhWAuhYAiQjXBRjWAAQh8AAh7gbg");
	this.shape_329.setTransform(942.2,1307.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFB69F").s().p("EAmVAw9QhVgThqgNQhOgJhdgCIi+AFQhrADhIgBIi+gFQjhgIjDgKQhsgFhpgGQhogIhhgJQomg2nChjQjWgxjEg+Qilg0iWg9QoejdmrjGQi6hWivhYQiChCiFhKQgvgbgvgcQirhvjYiSQi7iHiQiYQififiDi7Qibjfh8kLIgHgPQglhSgujCQggiIgnjLIgBgIQgqjYgkiDQgvi0gzhiIgDgFQg/h2AshdIABgCQAhhHB1hHQB1hHDhhCQEDhQDMAAQC4AABcCOQAuBDAIBHQgjDjA1DpQAxDUB3DRQBnC0CYCpQCGCSCnCCIARAMQCUBxC4BlQCwBcCZBNQFpCmGlCWIBuAmQCdA4EHBXIBmAiQDkBLCcAWICRAXQANAFBeARIDiA2IASAEQB5AcBWADQBVAFA6gSIAPgGQBSghhShVIgMgKQh2hggdgwIgJgOQiqkriXjQIgJgNQlgoAjFkMIgJgMQr8wEgBv5IAAgOQABjkArhDIAJgMQA6hMDshpIANgGQDbhbBKC0IAGAPQAXBNAXEPIADARQAuCcMrMlIALAKQGpGkHOG2IAKAJQFEE9EsBoIAMAEQGcCJBCnKIACgNQAJhdgeiQQgMg6gVhHIgtirQgfiDgHhIQgGg6gCg6QgMh5AJh9QANi9AkjeIARheQAYiSAeiIQAwjtAWiUQATh6AKhQQAMhnAkhaQAYg+Aqg3QA8hSBUg0QA/gnBLgUQBfgaBlAWQA6ANA7AfQBQAqA5A4IAUAUQA8A+AzBFQDNEQBnFNQAoCCAXCPQAbCCAKCYQAJCfAPCOIAEAsQAGCBAJB+QAWFHAxFOQAlE7ABF1QgBBlgEBoQgPFXgyFJQhIHHiNGGQhSDnhpDEQguBYg2BKQjHEXkzCkQhXAthYAhQjTBPjSAAQiAAAh/gdg");
	this.shape_330.setTransform(943.3,1307.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFB69F").s().p("EAmBAw8QhUgUhrgLQhOgJhdgCIi9AFQhsAEhHgCQhkgChbgDQjegIjGgKQhsgFhpgGQhngIhigJQojg1nHhgQjWgvjFg7QimgyiZg4QojjPmvjFQi7hVithZQiEhEiChKIhdg4Qiwh0jOiUQi3iLiPicQicijiBi/QiYjih4kMIgHgPQgkhRgtjEQggiIgojLIgBgJQgqjUgliGQgwi0gzhhIgDgFQg/h2AtheIAAgBQAihHB0hHQB1hHDihDQEChPDNAAQC3AABcCOQAuBCAIBHQgjDjA2DqQAxDTB4DSQBnCyCXCrQCECUCmCGIAQANQCUB1C1BpQCrBeCdBRQFmCrGnCTIBuAmQCcA1EKBXIBmAiQDhBHChAWQBKAMBIAIQAKAEBiARIDkAwIARAEQB6AZBYACQBVADA6gTIAOgFQBSgihThVIgMgKQh2hggdgwIgIgOQirkriXjQIgJgNQlgoAjFkMIgJgMQr8wEgBv5IAAgOQABjlAshCIAJgMQA6hMDshpIANgFQDbhbBKC0IAFAPQAXBOAYEOQAAAIADAJQAwCdMpMkIALAKQGpGkHOG2IAKAJQFEE9EsBoIAMAEQGcCIBCnKIABgNQAKhdgdiRQgLg6gThHIgrisQgdiEgFhIQgFg6gBg7QgIh4AKh/QANi8AijfIAPhfQAXiTAbiIQArjtAViWQASh6AJhPQALhnAlhaQAag+Arg2QA9hSBVgyQBAgmBMgSQBggZBkAZQA6AOA7AfQBPAsA4A4IAUAVQA7A/AzBFQDKEPBuFOQAqCCAcCPQAeCDAPCXQAPCdARCRIAFAsIAUEAQAZFGApFQQAfFAgEFxQgDBmgFBoQgSFZg3FGQhMHGiTGFQhUDlhsDFQguBXg3BLQjJEVk0CiQhXAuhYAgQjPBMjPAAQiDAAiEgfg");
	this.shape_331.setTransform(944.5,1307.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFB69F").s().p("EAltAw7QhUgUhrgLQhPgIhcgCIi+AGQhsADhGgBIi/gGQjbgIjJgKQhsgFhqgHQhngHhigKQoggznKhdQjXgtjHg4Qingvibg1QopjAmyjEQi8hVishZQiFhFiAhLQgugcgugdQi1h5jFiWQiyiPiOihQiZinh+jBQiWjmh0kNIgGgPQgjhQgtjGQggiJgojKIgCgJQgpjRgmiKQgxizgzhhIgDgFQg/h2AtheIAAgBQAihHB0hHQB1hHDihCQEChQDNAAQC3AABcCOQAuBDAIBHQgjDiA3DqQAxDSB5DTQBmCyCXCtQCCCUClCLIAQANQCTB6CyBsQCmBiCgBTQFjCwGpCRIBvAlQCaA0ENBWIBmAhQDfBFClAVQBLALBHAGQAJADBlAQIDmArIASAEQB6AWBYAAQBWABA5gTIAOgFQBSgihUhVIgMgKQh2hggdgwIgIgOQirkriWjRIgJgNQlgn/jGkMIgJgMQr7wEgBv5IAAgOQACjlArhCIAJgMQA7hMDshoIANgGQDbhaBJC0IAGAPQAWBPAYENQAAAIADAJQAyCfMoMhIAKAKQGpGlHOG2IAKAJQFEE9EtBnIAMAEQGbCIBCnKIABgNQAKhegbiQQgLg8gShGIgnisQgbiGgDhIQgEg5AAg9QgFh2AKiBQAOi8AgjgIAOhgQAViVAYiGQAnjtAUiYQAQh7AJhOQAJhnAohaQAag9Asg2QA/hRBWgxQBAglBNgRQBggXBlAbQA6APA6AhQBQAtA2A5IATAWQA7A/AyBGQDIENB0FPQAtCCAgCOQAhCEAVCXIAoEvIAFAtIAZEAQAdFGAhFSQAZFEgKFuQgEBmgGBoQgXFag6FFQhSHEiYGFQhWDihuDGQgvBWg3BLQjKEUk2ChQhYAthYAgQjLBJjLAAQiIAAiHghg");
	this.shape_332.setTransform(945.7,1307.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFB69F").s().p("EAlYAw6QhUgVhsgKQhOgIhdgBIi9AHQhtADhGgCIi/gGQjYgHjMgLIjWgMQhmgIhjgJQocgynPhaQjYgrjIg1QiogsidgxQoviym1jDQi9hUirhZQiGhHh9hMIhcg6Qi5h+i8iZQiuiSiNimQiWirh7jDQiTjqhxkOIgGgPQghhQgujHQgfiKgojJIgCgJQgqjOgniNQgxizgzhhIgDgFQg/h2AtheIAAAAQAihHB0hHQB1hHDihDQEChPDNAAQC3AABcCOQAuBCAIBHQgjDjA4DqQAyDRB5DUQBlCwCXCwQCBCVCjCPIAPANQCSB/CvBvQChBlCkBXQFhC0GqCPIBvAkQCZAyEQBWIBmAhQDdBCCoAUQBNAKBHAEQAIACBnAPIDoAnIASADQB7ATBZgCQBWAAA5gTIAOgGQBRgihUhVIgMgJQh3hhgcgwIgIgOQirkriWjRIgJgNQlhn/jFkMIgJgMQr7wFgBv4IAAgOQACjlAshCIAIgMQA8hMDshoIANgGQDahaBKC2IAFAOQAWBQAYEMQAAAIADAJQA0ChMmMfIAKAKQGqGlHOG1IAKAKQFEE9EsBnIAMAEQGbCIBCnLIABgNQAKhegZiQQgKg9gRhGIglitQgZiHgBhIQgCg5ABg9QgBh2AKiDQAOi8AejgIAMhgQAViYAUiEQAjjtASiaQAPh8AIhNQAJhoAphZQAcg8Atg2QBAhQBXgwQBBgjBNgRQBhgVBkAdQA6ARA6AiQBQAvA0A5IAUAWQA5BAAzBGQDFEMB7FQQAvCBAkCOQAlCGAZCWQAaCYAXCYIAGAtQAPCAAOCBQAhFFAYFUQATFJgPFrQgFBmgIBoQgaFbg+FDQhXHDidGFQhZDfhxDHQgvBWg4BLQjLESk4CgQhXAshYAfQjIBHjHAAQiMAAiLgjg");
	this.shape_333.setTransform(947,1307.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFB69F").s().p("EAlBAw5QhTgVhsgKQhPgHhcAAQhqAFhTACQhtADhGgCIi/gGQjVgIjQgMQhrgFhrgGQhlgIhkgJQoZgxnThXQjYgpjKgxQiqgqifguQo0ikm5jBQi+hTiqhaQiGhIh7hNQgugdgtgfQi+iCiyibQipiWiOirQiSiuh5jGQiQjthtkPIgGgQQgfhPgujJQggiLgojHIgCgKQgpjMgpiPQgyizgyhhIgDgFQg/h2AthdIAAgBQAihHB0hHQB1hHDihCQEChQDNAAQC3AABcCOQAuBDAIBHQgjDiA5DqQAyDRB6DUQBkCwCXCxQB/CWChCUIAPAOQCSCCCsB0QCcBnCnBaQFeC6GtCMQA3ASA4ARIGqCGIBmAgQDaBACtATQBOAJBHACIBwAPIDrAiIARACQB8AQBagDQBWgCA5gTIAOgGQBQgihVhVIgMgJQh2higcgvIgIgOQirkriXjRIgJgNQlgoAjFkLIgJgMQr8wFAAv4IAAgOQACjmAshBIAJgMQA8hMDrhoIANgGQDbhZBJC2IAFAPQAXBPAXENQAAAHADAKQA2ChMlMeIAKAKQGpGlHOG1IAKAKQFEE8EtBoIAMAEQGaCHBCnLIABgNQAKhfgXiQQgJg9gQhGQgUhggOhOQgXiIAAhIQAAg5ACg+QACh0ALiGQAPi7AajiIAMhgQATiZARiEQAfjtARibQAOh+AGhLQAJhoAqhYQAdg9Aug1QBChPBXguQBCgjBOgPQBigVBkAgQA5ASA6AkQBQAwAzA6IATAWQA4BBAzBGQDCELCCFQQAyCCAoCOQAoCHAfCUQAfCXAZCbIAHAtQATCAAPCBQAlFGAQFVQANFOgVFoQgGBmgJBoQgeFchCFBQhcHCiiGEQhcDehzDHQgwBVg5BLQjMERk5CfQhYArhYAfQjEBEjDAAQiQAAiQglg");
	this.shape_334.setTransform(948.4,1307);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_254}]}).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_254).wait(29).to({_off:true},1).wait(147).to({_off:false},0).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_286).wait(61).to({_off:false},0).wait(45).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.shape_312).wait(132).to({_off:false},0).wait(22).to({_off:true},1).wait(51));

	// right blood all
	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("rgba(219,120,138,0.996)").s().p("ACkUvQgihXgPgjQgOgggOgSQiOgShogpQidg/gUhaIgvizIgPg9IgGgEIghgTQh+hFiCgTQisgYgIgCQhjgXhVg/QhVhBhqg+Qhrg8gqgZQhEgqgdgkQgjgsAAg8QAAgiCrmwQDFnxA3iQQAXg/A3hLQA3hKBDg6IBFhGQAtgwAzgaQCWhRE5AeQHABSDOBaQD2BrAACaQAAAtgmBGQALASAKAVIBCCHQAsBMBCAzQBjBMBfBEQBOAXBNApQBAAiBCBRQAmAwBUBxQBCBTAhBjQAOAYAKAZQAZA6AAAqQAACUidDCQgiArhDBJQhIBuhNBmQiwDmh4BUQgXATgZARIh5BFQhZAzgWAhQgVAzgbAgQg0A9hfAAQhzAAhJiog");
	this.shape_335.setTransform(1108.8,874.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(219,120,138,0.996)").s().p("AGFXHIgMgJQhDhLgthiIgKgcIgsiEQgMgggNgXQhXgshKhCIgegYQg0grghgoQhBgtgUgrQgFgFgGgSQgYgkgYhGIgNgoIgVg8IgFgFIgGgFIgWgTQhCg2hHg2QgvgRgwgLQhJgPg0gIIhBgJQhDgMgggQQgxgSgugeQghgWgigYQg+gshHgrIgsgZQhMgrglgWIgYgOQg1gjgagdIgIgKQgdgqAAg3IAAgBQAAgbBwkhIAJgJQAlgtAwhbIAVgqQAqhaAphcQA6iBBchhQBGhgAugtQAfghAmgfIArggQBHgxBPgmQATgBA+guQA2ggA5gRQCHgoDDABQAeAEAwAYIA7AVIBeAnQDRBYCeAdQAnAHAgACQBBAWA4AaIAMAGQA/AfAzAtQBFA1AwBSQAVAlAIApQAJAqgNA5IgDASIAPAcIAGAOQAPAiAOApQAJAgAJAlQAWBOAXBBQAQAhAMAhQAUAjALAoIAOAdQAiAsAiA1QAPAdAQAoIASA9QACBBAkBkQAKAvAFAvQANAsALA1QAIAaAIAdIADANQANAnACA5QABAqgHAzQgMBhgrBZQgTAugYAtQgZA8gvBKQg4CDhBBoIgEAHQiFDbiTA7IgjAOQgaAKgbAHQhHARgugIQhIANgXgJQgGAFgHACQgMAJgOABQgLAEgNAAQgiAAgwgag");
	this.shape_336.setTransform(1097.3,896.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("rgba(219,120,138,0.996)").s().p("AJ3ZcQhFgHgvgrQg2gZgXgzIgMgTQgJgMgKgSQgZghgmhIIgHgQQgpiMgZhCIgHgeQgThFgWhKQgKgfgLgdQg6hKg6hlIgWgiQglg7gZgxQhHgugcgiQgJgHgHgMQgmgngcg+IgQgmIgZg9IgFgGIgFgGIgRgXQg0hAg8hUQgwgVgxgOQhGgUg9gJIhEgKQhVgNgTgHQg1gQgwgcQgkgVgjgaQhAgvhKgtIgvgbIh2hDIgZgQQg3gigcgfIgJgLQgggqAAg6IAAgBQAAgcB1ksIAOgFQAwgWA/hkQANgUAMgXQAvhVAyhnQA6hwCQhdQBehLBHggQAugWAtgPIA2gPQBXgZBbgTQAkAAA6gWQA+gQA/gIQCdgUC7ABQAUAHA2AtQAaATAbARQAtAiAsAbQDOCHClAOQAqAEAggHQBCAWA9AeIAPAIQA7AhA2A6QA1AyBCBiQAaAlAPApQATAuADA4IADATQAIANAGAPIAHAQQAQAoAHAnQAFAigBAoQABBQgTBPQgHAmgMAnQgFAjgUAzIgGAhIgTCCIgPBPQgIAggHAhQgjBSgLBYIghBfIAJBpIAJA7IACAQQAHAbAEBNQABArgCA2QgCBzgYBWQgKAzgOAxQgQBLgdBNQgoCYg0BqIgDAGQhzDyi5AdQgUAFgTABIgWABQgSAAgRgDg");
	this.shape_337.setTransform(1094.1,929.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(219,120,138,0.996)").s().p("ACZWrQgWhrgMiwQgPjMgFgiQgSh/hulrIg2iyQhphAgegXQg1gpgfg3QgihEgWgqQgqhPg6iJQh0g7h3gSQisgYgIgCQhjgXhVg/QhVhBhqg+Qhrg8gqgZQhFgqgcgkQgjgsAAg8QAAgdB5k5IASABQBHAABhiZQAzhQA6hyQA7hfDEhYQDBhYCGAGINsAEQALAKA6BDQBDBNBBA4QDLC1CsAAQAtAAAggPQBDAWBBAjQBAAiBCBRQAmAwBUBxQBCBTAhBkQAOAXAKAaQAZA6AAAqQAACUidDCQgdAlg1A7QhhCYhgCKQibDfhnB1QgHBJADB6QAAAXAMDAQAHCDgEBTQgUF+hEC4QhhEJjgAAQjbAAhGlOg");
	this.shape_338.setTransform(1108.8,966);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(219,120,138,0.996)").s().p("AG/b2QjYgShIlHQgOhAgLhXQgHg9gGhIIgSjyIgEgdQgFgsgLg1IgDgIQggiAg+jUIgFgSIg1izIhAgzQgogegSgTQgvgtggg4QgghBgZgvQgshSg9iEQglgXgmgTIgGgDQgTgIgTgHQg4gTg4gIIgpgGIiNgVQgSgEgOgEQhSgYhHg0IgVgRQhOg5heg2IgPgIQhfg2gogYIgJgFQg+gngbgiIgDgFQgggqAAg6QAAgcB1kuIAHgLIADAAIAPAAQAigBApglQAVgQAWgXQAXgaAbgmIAFgHQA0hFA1hQIAUgcQBDhSDJhNQA7gXA5gQQB5gkBgACICKAAIGsABIC/gCIB/gBIABABIAJAIIA+BAQAcAbAbAYQAqAoAqAiQAgAbAgAXQCtB/CLAJQAsAEAggKIAcAOQAxAXAuAfQAiAYAiAkQASATARAWIARAWIApA+QAaAtAhA9QAyBTAPBlIAHAZIAGAYQAQA1gIArIgBALQgMB1hoCTQgWAfgcAjQgfAmgzA8IgcApIhgCOQgfA2geA5IgaAwQgzBLgqBZQguBOgmA5IgIANQABBOAJBzQAGAZAKBmQAEAgACAoIABAMQAEBEABBEQAAArgDAmIgDAvQgKB+gQBoQgeC1g0BpQgsBfhAA0QhZBLh0AAIgbgBg");
	this.shape_339.setTransform(1106.8,971.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(219,120,138,0.996)").s().p("AHAb0QjTgjhLlAQgQhDgLhWQgJg+gFhHQgOixgDhFIgDgdQgEgvgIgyIgCgJQgih/g9jXIgFgSIg0i0QghgkgXgVQgigggRgXQgrgwggg6QgghAgagxQgvhVhAiAQgjgagjgXIgHgDIglgRQg3gUg5gJIgqgGIiOgVQgVgEgLgEQhTgXhIg0IgVgQQhOg6heg3IgQgIQhgg2gogYIgJgGQg+gngcgiIgDgEQghgrAAg6IAAAAQAAgcB2kxIAJgIIADAAIAPAAQAigDAoglQAXgNAXgWQAYgYAeglIAFgGIB0iJIAZgZQBLhEDNhCQA8gTA8gOQB4geBkAAICLgDIGuAAIDDgDIB/gDIABABIAJAHQAYAVApAnQAeAaAdAVQArAlAsAhIBDAxQCzB9CDATQAsAHAfgFIAbAQQAuAdAqAjQAgAaAdAnQARATARAXIAPAXIAkBAQAVAwAVA+QAhBVgDBkIACAaIAAAXQAHAygOAsIgDAKQgUBzhpCUQgWAegdAlIhSBjIgdApIhhCNQgbA2gXA+IgVAyQgpBBgfBuQgjBSgfA8IgFAOIAYC+QALAgAOBbQAGAhACAoIABAMQADA9ABBMQAAAqgDApIgEAvQgLB/gUBoQglC1g9BkQg0BYhJAqQhTA0hfAAQgdAAgdgFg");
	this.shape_340.setTransform(1105.1,976.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("rgba(219,120,138,0.996)").s().p("AG0bxQjPg1hNk5QgRhEgNhWQgJg/gGhHQgNijgChWIgCgdQgCgygGgwIgCgIQgiiAg9jaIgEgRIg0i1QgdgpgTgXQgcghgRgcQgmgzggg6Qgfg/gdg1IhzjTQghgdghgcIgHgDIgkgTQg4gUg5gKIgqgHQh3gQgagFQgWgEgJgDQhUgWhIgzIgWgRQhOg6hfg4IgQgIIiJhPIgJgFQg+gngdgiIgDgFQghgqAAg7IAAgBQAAgcB3kyIAKgGIADAAIAPgBQAigEAogmQAYgLAYgUQAYgVAiglIAFgGQBEhHA8g2IAcgUQBTg3DTg2QA8gPA/gMQB3gZBogCICLgEIGygBIDGgGIB/gEIABAAIAKAHIBEA5QAfAXAfATQAtAiAuAgQAiAZAjAWQC4B7B9AcQAsAMAdgBIAZAUQAsAgAmAnQAdAfAaAoQAQAUAPAYIAOAXQARAgAOAjQAQAzAJA/QARBVgWBlIgEAaIgEAXQgCAugWAtIgEAKQgcBxhrCUQgVAegdAlQggApgyA8IgeAqQg7BRgpA7QgVA1gSBEIgPA1QgeA2gVCCQgZBXgXA+IgCAPIAnC7QAQApARBPQAIAhACApIABALQADA2AABVQAAApgDArIgFAvQgMCAgYBoQgrC2hIBeQg7BShRAfQhKAghMAAQgtAAgugLg");
	this.shape_341.setTransform(1104.8,981.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(219,120,138,0.996)").s().p("AGdbsQjKhHhQkyQgThGgNhVQgKhAgGhGQgNiWgBhnIgBgdQAAg1gDguIgCgIIhfldIgFgPIgyi3QgZgugPgYQgXgjgRggQghg1ggg+Qgeg9gfg3QgzhchFh2QgeggggggIgHgEIgkgUQg4gVg5gLIgrgHIiSgVQgYgEgHgCQhUgWhJgzIgXgQQhOg7hgg4IgPgJQhgg2grgZIgJgFQg+gngdgiIgEgFQghgrAAg7IAAgBQAAgcB4k0IALgEIADAAIAPgBQAigFAognQAagJAZgSQAYgTAlglIAFgFQBNhJA/goIAggPQBbgrDYgpQA9gNBBgJQB3gTBrgEICMgGIG1gCIDJgJIB/gFIABAAIAKAHIBHA0QAiAWAgAQIBfA/QAjAXAkAWQC+B4B2AmQArAQAcAEIAYAWQApAlAjArQAaAjAXApQAPAVANAZIANAYQAQAjAJAiQALA2gCBAQgBBWgoBlIgKAbIgIAWQgMArgdAuIgFAKQgkBuhsCVQgVAdgeAmQggArgxA7IgfAqQg/BVgnA3QgQA1gMBKIgKA2QgUAsgJCXQgPBbgQBBIABAQIA1C4QAWAwAUBEQAKAhADApIAAAMQADAvAABdQAAAogEAuIgFAvQgOCAgcBpQgxC1hTBaQhCBLhaAVQg6APg4AAQhCAAhBgVg");
	this.shape_342.setTransform(1105.5,986.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(219,120,138,0.996)").s().p("AF/bkQjGhYhTksQgUhHgOhVQgLhAgGhGQgNiJABh4IgBgdQACg4AAgrIgCgIQglh/g7jhIgEgPIgxi4QgUgzgMgZIgihJIg8h4Qgeg7ggg6Qg3hghHhxIg6hHIgHgFIgjgWQg4gVg6gMIgrgHIiTgVIgggGQhVgVhKgyIgWgQQhPg8hgg5IgQgJQhgg2grgZIgJgGQg/gngdgiIgEgEQgigrAAg8IAAgBQAAgcB4k3IAOgBIADAAIAOgBQAigHAognQAbgGAagRQAagRAogkIAFgEQBVhLBCgaQAQgGAUgGQBjgdDdgeQA9gJBEgHQB2gOBvgFICNgJIG3gDQAigDCrgIICAgGIABAAIAKAGQAkAZAmAYQAjAUAjANIBiA7IBJAsQDEB2BvAwQArATAaAJIAXAZQAnAqAeAvQAYAlATArQAOAWAMAaIAMAZQAPAmAEAhQAGA5gOBBQgRBYg7BkIgPAbIgOAXQgUAmgkAwIgHAJQgsBshsCWIg0BEIhRBnIghAqQhDBXgkA0QgLA1gFBPIgFA5QgKAhABCsQgEBfgJBEIAEAQIBEC2QAbA4AXA4QANAhACAqIABAMQABAoAABmQAAAmgEAwIgFAwQgQCBggBpQg3C1hdBVQhKBEhiALQgiAEghAAQhhAAhVglg");
	this.shape_343.setTransform(1107,992.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(219,120,138,0.996)").s().p("AAiStQgijBAGjnIAGhkIgDgIQgkh/g7jkQg6jdgSg9QhPj7j9lkIgHgGIgigXQhOgfhQgMQisgYgIgCQhjgXhVg/QhVhBhqg+Qhrg8gqgZQhFgqgcgkQgjgsAAg8QAAgdB5k4IASAAQAoAAAwgwQAdgFAbgPQAagOArgkQBghPBJgOQB6gXF/gcIF1gaIG7gEQAUgEC7gKICBgHIALAFQBOAzBIAXQBTArBeA2QEdCkBZAuIAVAcQBCBTAhBkQAOAXAKAaQAZA6AAAqQAACUidDCQgiArhBBIQg0BqhuCWQgzBFh0CTQhGBagjAuQgIBKAEB8QAAAXAMDAQAGBjgBBHQBWDJA+BoQAOAhADArQACAWgBCFQABA0gMBTQgRCCgjBqQhuFCjzAAQnOAAhrpng");
	this.shape_344.setTransform(1108.8,998.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(219,120,138,0.996)").s().p("AJodXQktg9iEl7QgwiHgaivQgNhfgHhoQgGhcACimIACgnIABhDIgCgJQgJg1gJg7QgEgmgDgmIgLhDQgIhBgKg6QgDgmgEgRQgNhTgFg1IAAgjIgVhMQgWhJghhUQgohogthcIgEgLQgGgTgLgVQgtg6g3hZIgegyIgcgiIgKgMIgDgFIgFgGIgIgNIgXgPIgNgHQgdgPgbgMIgegLQgfgLgfgIQhwgZg7gJIgWgDQhegRgrgXQgggOgegTQgtgcgvghQg1glg8gkIg8giQhCglgigVIgggUQgwgfgYgdIgLgOQgcgoAAg1IAAgCQAAgTA5ibIADgFIALgTIACgEQAcgwBIg6IATAAQAsgBA2ggIACAAQAVgDAqgDQAfgGAwgSQA2gWA3gIQArgKAmAAQCXANDDgGICxgJIGNgRID8gBQBWgFCHgRQAUgEA1gGQA+gIBPgIQBcgLAtgCIACACIAIACQBRAjBVAcIAfAPIAkAiIAkAgQAbAbAWAYIAJAKQBwByAMBkQAfAlADAjIABAJIAFAVQAHAbADAcQANA5gHBGIAAAHIABAyQgEAqACAXQgCAQgEAQQgJAsgYA3QgcBBghA3Ig+CSIgJATQgVAhggBWIgNAsQgKAjgNAiIgBAKIgoCiQgEAVgHAYQgNBVgkBqIgDAMQgbBQgHA9IAXDNQAEAWAGA5QAJA9AIBSQAKBmACBQIAfBuQAYBiAUA2IAWBMQAHAlgBArIgKBwIgHAvQgLA9gWBMQgpB+hGBZQhABdhYAyQhbA+hlAAQgrAAgsgMg");
	this.shape_345.setTransform(1100.2,1022.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(219,120,138,0.996)").s().p("AIVeOQkKh6h0mvQgoiVgVi2QgMhlgFhuQgFhIABjOIABgrIgBhHIgBgKQgFg8gBg7QAAgsAEgkIgFhJQgBhMgDg1QAAgvgCgJQgHhcAGg3QADgUAEgRIgYhUQgWhMgfhbQgph7gjhZIgCgNQgEgUgJgZQgygwg+hqIgeg1IgfgiIgMgMIgCgDIgCgIIgDgQIgZgRIgPgJQgdgUgagPIgggPQgfgOgggLQhnghhOgMIgZgEQh4gSgYgNQgkgLghgRQg0gagwgkQg3gog/gnIhBgmIhqg8IgigVQg0ghgbgdIgLgOQgggqAAg5IAAgBQAAgUA+ikIADgEIAOgTIADgCQAggjBugfIAUgBQAxgBA8gQIAEAAQAOgCA5AJQAjACA2gBQA4gCBEAIQAuACApAGQDQAtCSAIIC6gEIGmgJIEMgBQBFgICmggQAcgHAvgIQBKgOBHgKQBogSAogBIACABIAIABQBWASBfAjIAjAOQAPAWANAXQAQATAOAVQAYAlANAeIAEAOQA4CDhICTQgBAngdAzIgDAJIgFAXQgGAcgKAfQgNA3gkBKIgEAHQgMAcgIAXQgZAwgBAPIgPAgQgSApggA6QgoBKgeAxQgSBBgQBjIgFAXQgKAagMByIgEAxQgEAngGAlIADALQAGBRAPBhIAHAxQAYBnAOBnIADAOQAMBNARBOQAaBcAZB6QAIAfAIAyQAOBGALBOQAPBoAFBZQALA+AHA6QAMB1AJAxQAEAtABAoQABAqgFArIgWBzIgNAwQgWBFgiBEQhCB8hmBHQhaBGh1AZQg7AQg4AAQhiAAhbgvg");
	this.shape_346.setTransform(1101.1,1047.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(219,120,138,0.996)").s().p("AA1VBQg0j9gLlCQgCg3AAkgQgKh2ALheQAGgxAKgkIABhOIAMjBQAAhlAQg4QAGgWAIgSQgehxgvicIhEjjIAAgPQgBgWgJgcQg2gmhFh7Igdg5IgjghIgOgNIABgeIgqgdIg3grIghgTQh+hEiCgUQisgYgIgCQhjgWhVhAQhVhBhqg9Qhrg9gqgZQhFgpgcglQgjgrAAg9QAAgVBBitIAEgDIASgSIADgCQAzgcEYAAQAOgBEvBYQFWBjBxAaIOdAAIFIhOQD1g5A3AAQBuAACFA4QAMAbAJAdQAOAXAKAZQAZA6AAAqQAACVidDBQgiAshEBKQgXAqgiAuQgmA0hBBPIhkB3QgeAlg8BgIhQB9QgJBKAECHQAAAWAMDAIAEBUIAHALQAmBuBFCIQBDCEBEBqQB2C3BKEkQBCEKAADeQAACIgDAsQgMCpgvCEQiRGYm4ABQn0AAifsMg");
	this.shape_347.setTransform(1108.8,1070.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(219,120,138,0.996)").s().p("EALGAhtQh5gJhmg1QkEiHiCmjQgYhPgUhZQgsi+gSjjQgHhLgEhNQgDgsAAh1IAAixQgDg/ABg1QgBgxADguQADgvAJgmIgBhNQAJiwgBgTQAAgjABgeQADgyAHgqQAFgWAIgSIgvjHIgThHIgiiKIgShYIgBgCIAAgPQAAgWgIgbIgJgJQgpg5gyhjIgLgaIgNgfIgdgkIgLgNQAAgPACgPIgWgUIgMgMIgPgRIgfgdIgdgVQhTg6hWgmQgdgMgcgIQhkgcgmgQQgTgEgDgDQghgMgfgPQg4gag1gtIg6gwQg7gvg/gpIgqgbQhEgpghgXIgsggQghgZgTgWQgigogIgzIAAgFIAAgCQAAgMAOgoQACgOAFgRQAKglAVgsIAMgZIAEgDIATgRIAEgCQAHgDALgDQAXgGAkgCQAngDA0AAQBAAABeAFQAGAAAaAHIEZBNQCkArB2AaQBxAbBAAKQCIgCCHgEIAWAAQBQgCBTABQBrACBjAIQBfAJBQAQQAbAFAYAGQAqADCxgaIATgCIBDgHIAHAAIAEgBQA4gFAhABQAYgDAOAFQAJABAGACQBZAMBvBMQAKAYAJAgQALAXAJAbIAKAeQAKAngBAfIgBAcQgMCRh0CsQgbAxg3BKQgTArgaAvIgJAOQgcA0gtBEQhKBogDAWIhAB9IgFAKQgoBRgUAvQgDBRAGB8IAFBJIAKCKIAEA7IADAXIAIALIAbBAQAiBMAzBnQA/B+BDBxQBHB1A6CfQAhBeAcBoQBKEOAGDRQADBNgBAuQAAAigCAUQgIBegZBRQgSA+gbA0QgqBXg7A9QirC2kZAAQgbAAgcgCg");
	this.shape_348.setTransform(1110.6,1083.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(219,120,138,0.996)").s().p("EAJvAiOQh2gRhkg5QkAiSiHmUQgZhOgVhWQgwi9gXjgQgIhNgFhKQgEg0AAhrIABiuQgDg/ACg0QgCgwABguQABguAGgnQgCglAAgnQAFihgCgjQgBgiABggQACgsAHgxIAKgoIgmjIIgQhHQgQhNgKg+QgIgxgEgmIAAgCIAAgPQAAgWgGgaIgIgLIhGifQgFgQgEgJIgKgfIgXgmIgJgPIADgdIgQgXIgIgMIgLgTIgbgfIgZgYQhHg/hMg0QgYgQgZgMQhWgoghgZQgRgGgDgEIg8giQgzgcgzgxIg4gyQg5g1g5gpIgogeQg/gqgigaQgXgRgTgQQgggYgUgWQglgogMguIAAgFIAAgCQAAgOAMglQABgPAEgQQAIgnAXgoIANgXIAFgDIAVgPIADgBIASgGQAZgFAiAAQAngBAyACQA9ADBfAKIAgAIQBZAZC9AvQCeAmB9AVQBtAWBFAGQCHgDCHgJIAVABQBQgEBSACQBuADBeAPQBdATBAAhQAVAJAQALQAaAUBvAHIAMACQAXAFASADIADABIADAAQAmAGARAJQATABAJALQAGADAEAFQBEAYBaBfQAIAVAHAkQAJAXAIAcIAIAfQAGAmAAAgIgCAbQgJCXhaCqQgVA2gqBJQgOAtgTAvIgHAPQgUA2ghBGQg4BhACAiQgOAugfBSIgDAKQgcBQgNAyQADBXAIBzQADAUAEAzQAGA4AGBQIAEA7IAGAVIAHALIAfA8IBXC0QA8B5BCB4QBCB3A7CfQAiBeAdBkQBRETAMDFQAHBMgBArQAAAhgDAWQgJBcggBPQgXA6ghAwQgwBMhFAxQipCAjmAAQg3AAg7gHg");
	this.shape_349.setTransform(1121.1,1095.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(219,120,138,0.996)").s().p("EAIXAitQhygZhig9Qj+ieiJmEQgchMgXhVQg0i8gajdQgJhNgGhIQgFg8AAhgIABisQgBg/ACgyQgEgvgBgvQAAgtADgnIgEhNQABiRgCgzIgBhCQACgoAEg2IAIgpIgdjIIgNhIQgMhMgGg/QgFgxABgmIgBgCIAAgOQAAgWgEgaIgGgMQgVhUgdhOQgDgSgDgHIgIgfIgQgpIgGgPIADgeIgLgYIgFgNIgFgUIgXgiIgVgaQg8hFhBhCQgVgTgUgRQhHgzgegjQgOgIgEgFQgegXgagRQgugegyg1Ig0g1Qg3g6gzgqQgVgTgQgNQg7grgjgeIgpgiQgfgYgVgWQgmgmgSgqIAAgEIAAgBQAAgSAMghQgCgQADgQQAGgpAaglIAPgTIAFgEIAWgNIAEgBIARgFQAagDAgACQAnABAxAEQA6AFBgAPIAeAIQBkAcCwAoQCaAiCDAPQBoARBLADQCFgGCGgMIAWABQBOgGBTADQBwAEBZAXQBcAcAwAxQAQAOAIARQAIAmAuAnIAFAGIAOAWIABADIABABQATARACASQANADAEARQADAFADAHQAuAmBFBxQAGATAGAoQAHAWAHAeIAGAfQADAmgBAgIgCAbQgGCdhBCnQgOA7gdBJQgJAugNAwIgEAOQgNA5gUBIQgnBbAGAuQgGAygSBQIgCAKQgQBPgGA2IAUDHQAEAXAEAuQAHA5AHBMIAFA7IAIAVIAIAKIAiA4QAiBBA3BzQA4B0BBCAQA+B4A8CfQAjBfAdBgQBYEYATC3QAKBLgBApQAAAggDAXQgKBcgnBLQgcA4gnAqQg4BChOAlQicBRi1AAQhYAAhegTg");
	this.shape_350.setTransform(1131.6,1107.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("rgba(219,120,138,0.996)").s().p("EAHAAjJQhughhhhBQj6iqiOlzQgdhMgZhSQg4i7gejaQgKhOgGhGQgHhEAAhUQAAhYAChSQAAhAADgxQgFgugDguQgDgsAAgpIgGhMQgCiAgDhGIgBhBQAAgjAEg9IAEgoIgTjKIgKhHQgJhNgBg/QgBgxADglIAAgDIAAgOQgBgXgCgYIgEgNQgLhigThDQgBgUgCgFIgFgfIgKgsIgDgQQABgPACgOIgFgaIgCgOIAAgVIgTgkIgRgcQgwhMg2hQIgigrQg4hAgagsQgLgJgGgHQgbgcgYgSQgqghgwg4Igxg4Qg1hAgtgqIgigjQg2gsglggIgngkQgegYgXgVQgoglgWglIAAgFIAAgBQAAgTAKgfQgDgRACgPQAEgqAdgiQAHgJAJgIIAGgDIAWgLIAFgCIARgDQAcgDAcAEQApADAuAGQA3AIBiAUIAcAIQBtAgClAhQCVAdCJAKQBjALBRgBQCEgHCGgRIAVACQBOgIBSAEQB0AGBSAeQBbAlAgBCQALASgBAYQgJA1gSBJIgCAKQgHAWgGAPIgDAEIAAACQABAbgNAaQAHAIgCAXIABAQQAaAyAvCFQAEAQAFArIALA2IAEAfQAAAmgCAgIgBAbQgFCigmClQgHBAgRBJQgEAvgGAwIgCAPQgFA8gJBJQgUBVAKA6QACA3gGBNIAAALQgEBNACA6QAPBjANBgQAFAbAEAnQAIA8AIBIIAGA7IAKAUIAHAKIAmA1QAiA7A5B4IB0D2QA7B6A8CfQAkBfAeBcQBfEeAZCpQANBLAAAnQgBAegDAYQgLBbguBJQghA0gtAlQg/A5hXAYQiCApiFAAQiBAAiFgmg");
	this.shape_351.setTransform(1142,1120.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(219,120,138,0.996)").s().p("EAFpAjgQhsgqhehEQj2i1iTlkQgfhKgahQQg9i7ggjXQgMhOgHhEQgIhMAAhKQAAhaAChNQABhBAEgvQgHgtgFguQgEgrgDgqIgHhLIgKjHIgChBIABhhIACgpIgJjLQgFgkgCgjQgGhNADhAQACgxAIgkIgBgDIAAgOIgBgvIgCgOQgBhwgIg3QAAgWgBgDIgCggIgEgtIgBgSIAEgcIABgcIACgPIAEgXIgPgmIgNgfIhQivIgagzQgqhMgWg2IgPgSQgaghgUgTQglgjgug9QgWgbgYggQg0hFgngrIggglQgygsgkgkIgnglQgdgXgXgVQgqglgbggIAAgFIAAAAQAAgWAJgcQgGgRABgPQACgsAfgeQAJgJAJgGIAHgDIAXgJIAFgBIARgDQAdgCAbAGQAoAFAtAIQA0ALBiAZIAdAJQB2AiCYAaQCQAYCQAFQBfAFBWgEQCDgICFgWIAVADQBNgKBTAFQB1AHBOAmQBZAuAQBTQAFAWgIAdQgaBHhVBpIgJAPQgTAegTAVIgGAGIgBACQgSAmgdAjQACALgIAdIgDAVQAFA+AZCYQADAOADAuIAHA3IAEAgQgFAlgCAgIgBAbQgCCogNCjQgBBFgDBJIACBgIAAAQIAGCIQgDBPAQBGQAIA9AHBKIABALQAIBMAJA9QAWBpAOBXQAHAfAEAhQALA+AIBFIAGA7IANASIAHAKQAaAhAPAQQAiA1A7B+QAxBqA+COQA3B8A9CeQAlBgAeBZQBnEiAfCdQAQBKAAAkQAAAdgEAaQgMBZg2BGQglAygzAgQhFAuhhAMQhSAMhPAAQi/AAizhEg");
	this.shape_352.setTransform(1152.5,1133.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("rgba(219,120,138,0.996)").s().p("EABNAh0QjzjAiXlTQhuj4gzktQgei2AAhuQAAi3AJhcQgqjogLkdQgCg2AAkgQgJh2AKheQAGgxALgkIABhOIAMjDQAAhkAQg4QAGgXAIgSQgehwgwicIg/jSQggg2gXgaQgug1hKhuQhNhzgjgqQhFhGgzg2QhPhAgygrIAAgEQAAgYAIgZQgHgSAAgOQAAguAigbQAcgXAtgCQAegBAYAJQApAFAsAMQA3AOB4AmQEABLEtAAQDcAADggsIAVADQBMgMBTAGQB4AJBJAuQBXA3AABjQAABfjRDBQgrAzgmAhIgKAHIgCADQgkAygtArQgEAOgNAjQgYBDAFDMIAICWQgLA0AAArQAAFCAsERQAcCxBEEAQBJERAXCAQARBcAKBgQAuA3AVARQBTBzDnJWQDsJgAAB3QAAB7hPBYQhhBti4AAQmvAAkvjug");
	this.shape_353.setTransform(1162.9,1147.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("rgba(219,120,138,0.996)").s().p("EAK5Ak6QkNgLjYhrQh5gvhnhOQjgioiOktIgUgsQhLisgtjIQgShSgNhPIgIg/QgPiEABhYIADhRQABhxAFhKQgfjigIkJIgBgJQgDg+gCjDIAAhKQgHhpAIhmQAEguAIgmQgBgmABgmQAEhlAEg0IAEgmQABgcADgZQABgwAHglIADgPQAFgVAGgSQgNhcgVhIIgVhfIgPhKIgGgrIgahYIgCgEQgXgwgRgdIgdgwIgLgVIgqhTIgIgPQg7hrggg3Ig8hJIgsg2IAAAAIgWgZIgHgHIgFgGIhHhNIAAgDIAAgBQAAgYAJgYIgBgEIgBgEQgDgMABgKQAEgsAfgbIAMgJQAXgQAfgFQAcgFAYAEQAmAAArAFQA6AFBwAaQBBANBHALQDCAdC/AKIASgCIANAAQAdABAfAFIBHAFIBRAOIAoAFQA9AKA2ABIADACIAOAGQAzAKA6ATQAZAJAWALIAPAIIAIAFIAFAFIARALQAMAIAKALIAPAOQAbAaAPAlQAQAsgBAxIAAAHQgBAPgHAbQgKAlgWAqIgGAMQgXAogiAzIgyA/IgNAVQgZAmgXAeIgHAIIgBADQgbAzghAuQgDAQgJAgQgRBQAHC1IALCHIAAAIQgHAxACArQAHDAAbC8QANBiAQBZIACAIIAOA+QAYB9BEDhIABAFQAxCnAcBkIAjB2QAVBUAVBdIArA2IATAUQAzBMBGCeQAsBiAsB7QAmBoAmCBIAKAiQALAeAMAsIAPA0QA3CYAcBgQAoCVgGBWQABAogIAYQgTBphYBDQgNALgOAJQhfA6iHAAIgWAAg");
	this.shape_354.setTransform(1168.3,1151.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("rgba(219,120,138,0.996)").s().p("EAI9AkXQkCgVjQhyQh2gphmhJQjciciKknIgTgqQhIingqjDQgRhTgKhJQgEghgCgcQgLh/ADhVIAEhPQABhoAEhNQgVjhgGj7IAAgKQgGhNgCipIgBhIQgFhdAFhtQADgsAGgoIgChJQAChdAGg5QACgdACgJQACgcAEgXQABgtAFgmIACgPIAIgmQgFhtgOgwIgNhdQgFgogBggIABgqIgZhWIgCgEIgchOIgVgyIgHgWQgLgogPgsIgGgPQgohjgfhDIgxhNIglg1IAAgBQgKgRgHgKIgFgJIgFgGIg4hSIAAgDIAAgBQAAgWAKgXIAAgEIgBgEQAAgMACgKQAGgoAdgcIALgJQAVgRAdgJQAYgIAYgCQAkgGApgBQA9gEBoAOICGAOIF0AlQAHgEAKAAIALAAQAaACAeAMQAkAGAfAHQAiASAdASIAiAQQA0AfAkAPIABAEIAIAKQAaAgAgAfIAZAgIAIANIAFAGIABAGIAIAOQAGAKAFANIAHARQAQAbAJApQAEAugBAsIAAAGIgFApQgGAngLAoIgCANIgkBeIglBCIgJAWIgfBIIgFAJIgBADQgSA1gVAwQgBASgGAdQgJBdAKCeIAMCBIABAHQgDAuAEArQAPCyAiC+QARBfARBUIACAIIAQA7QAVBdBQD1IACAFQA1CpAfBWQASA2AZA7IA5CmIApA4IAQAVQA8BdA5CAQAuBjAkBzQAfBkAbB/IAHAjQAHAWAJAzIALAzQA3CfASBTQAbCMgeBXQgIAkgQAXQgnBYhgAvQgOAHgPAGQhZAihqAAQgaAAgagCg");
	this.shape_355.setTransform(1174.8,1154.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(219,120,138,0.996)").s().p("EAG5Aj7Qj3gfjGh5Qh1gjhkhDQjZiQiFkiIgTgpQhFihgli+QgRhUgHhDQgEgggBgaQgFh8AEhSQADgrADghIACiwQgKjggDjtIgBgJQgHhdgEiPIAAhHQgEhQADh1QABgpADgqQgCgjgBgjQAAhWAHg+QACgYACgOQAEgaAFgWQABgqACgnIACgPIAFglQACh9gHgZQgDgxgCgqQAAgnAEgfQADgWAEgTIgYhUIgBgFIgQhPIgMgyIgDgXQgEgqgIgsIgCgPQgWhbgdhPIgnhQIgfg2IAAgCIgMgcIgDgKIgDgHQgfg/gKgYIAAgCIAAgBQAAgWAKgWIABgDIAAgEQABgLADgKQAKglAagdIAKgKQAUgSAZgNQAWgLAXgHQAigMAngHQBAgNBgACQA+ABBFADQDPAKCYAYQAHgEAJgBIAKAAQAYADAcATQAiAJAdAMQAaAdATAeIAcAbQArAyASAdIgBAHIACAOQABA2AGAsIADAsIABAQIACAIIgEAHIgBARIAAAcIAAATQAFAdACArQgIAxgBAmIAAAHIgCAoIAABOIABANIgPBiQgOAkgKAhIgFAXIgPBMIgDAJIAAAFIgSBoIgCAtQgBBrAMCIIAOB5IABAHQACArAGAsQAWCiArDBIAmCqIADAIIASA4QARA+BcEKIACAFQA7CqAgBIQAUAtAgA/IBHCbIAnA6IAPAVQBDBuAtBjQAvBkAdBrQAZBfAOB/IAEAiQADAOAIA7IAGAzQA2CkAKBHQANCDg2BXQgRAhgYAXQg7BFhpAbIgeAHQhEAMhIAAQgzAAg0gGg");
	this.shape_356.setTransform(1182,1156.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(219,120,138,0.996)").s().p("EgB3Ag6Qluhci+mfQhOisgnjRQgYiDAAhHQAAi0AOhbIAAppQgLhxgEh6QgCg3AAkgQgKh2ALheQAFgxAMgkQgBgnABgnIANjDQAAhkAPg4QAHgWAIgSIgZhYQgBhBgGhCIACgYQADgtAAgrQAAh8g8iUIgXg3IgHggIgCgLIgCgHQgZhLAAgUQAAgWAMgXIAAgFQAQg0AlgoQB4iEE7AAQDVAACFAgQAJgKAPADQAUAEAbAZQAhANAaAQQASAoAJAqIAVAmQAjBFAAAsQgoCGgfBRIgFAUIgCAKIgJAIIgJAVIgLAgQgMAhgFBCQgVA3AAAiIABAnQAEArALAkIAFANIAGBmQgMA0AAArQAAFCAsERQAcCxBEEAIAqChIAZA8IB2E/QBACvAjA8QAtBOCKDkQBWCPAkBLQAwBlAUBjQAWBoAACSIAFBKIABAxQA3CsAAA5QAAB7hOBYQhiBti4AAQl/AAkZi8g");
	this.shape_357.setTransform(1189.5,1158.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("rgba(219,120,138,0.996)").s().p("EAJpAjoQjagGi3hEQiegpiChPQi8g9iJiMQiGhhiIjeQgZgrgZgvQhFiGgxiRQgnh3gThOIgQhUQgThxgIhGQgdhwgDhEQgWhigFhQQgFg9ABhJIABh9IgFh1IgFh7IgBhdQABhjAKiAIADgbQAHhyAiheQAPgtAUgjQAKgiANgjQAghqAjgtQABgOAKgCQARhHA3gsIANgQIAMgOQAKgeAFghQAdgyAMgyQAFgKAEgKIAEgMIAAgCIAChHQAAiGgoiWIgJgiIgFgaQgCgWAAgNIAAgKIgCgIQgOhDACghQAAgLADgLQABgMAFgOIAAgEIABgHQALgyAXgtIAQgaQAeg5ArgaIADgDIADgDQAmgjA3ghQAXgPAagLIARgHQAvgDAzgBIAMAAQCkABBwBFIAhAOQAIgEANAFIAPAIQAOAJAOARQANAJALAKQALAJALANIAMAkQAIAVAEAaIAKAbIAEALQAGARAEARQAGASAEARQAFAZAAAWQgaB/gVBbIgDAUIgCAKIgFAIIgGAVIgIAhIgDAKIAAABQAAAgAHAwQgFAwAMAjQAFAGAFAdQALAmASAhIAGALIAEAOQALAgAOAsQADAtANAoQASBHAYBIQAdByAZCGQAJA5AOBGIAJArIATBOQAqCSAzDGIAeB3IALAqIAUA+QASBOBIDuIAPA8QAhB3APA/QAKAkATA0QA5BKA8B7IAJATQAeA/AUA7QAXA4AMAyIAAABQAZA8ANBfIAGAyQAJBYgDBlQAEAcADAdQAEAQAGA3IAGAwQAcBeAJA1QAJAxgEAgQgGBNgmA+QgVAhgdAcIgUAQQhHA5hpANQgoAFgqAAIgUAAg");
	this.shape_358.setTransform(1178.7,1159.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#DB788A").s().p("EALaAjZQjhgMi7hPQingkiJhJQi9hMiFiWQiDhEiyjuQgegqgfgvQhaiGhFiGQg2htgnhVIgghSQgohtgZhHQg7iDgGgqQgshrgLhGQgKg6AChSIADh/QAAhSgBglIgEh+QgBgtAAgwQACh2AVhyIAGgaQAXhvA7hdQAXgoAdgiQAVgfAYgfQA3hRBDgvQADgHAUgEQAigoBcghIAUgKIARgJQAegTAYgVQA7gjAegiQAKgHAHgIIAHgIIABgBIAAhKQAAiPgUiZIgEgkIABgdIACgkIAAgLIAAgHQgDg8AEguIACgXIACgbIAAgEIABgIQAGg0ANg0IAIgeQAShNAbgcIACgDIACgFQAUgwAog4QARgYATgTIAOgNIBkgEIANAAQCXAABnBzIAdATQAJADAMAIIANAJQANALAMASQAJALAHAOQAIALAIARIAKAlQAGAUAEAcIAFAaIACAMIAFAiIAIAlQADAYAAAXQgOB3gKBmIgCATIAAAKIgDAJIgDAWIgEAhIgBAJIAAABQAJAfATArQAKAoAZAlQAIAJAJAVQATAgAYAeIAIAKIAIANIAsBCQARAkAaAmQAlA7AtBBQA0BdAlCOIAeB9IAMAqQAMApAMAiQA1COAzDDQAPA7AOA8IAJArIARA/IA+E6IAIA8QAQBvACBMQACAqAFAwQBFBHAtB8IAGASQAWA+AKBCQAMAzAGA6IAAAEQAMArAGB0IABAzQABBcgKBeIANA3QAHAZAIAqIAJAwQAdBhAFAvQAEAvgHAkQgMBJgtA8QgXAfgfAZIgWAPQhMAzhvAGQgdACgcAAIgwgBg");
	this.shape_359.setTransform(1163.8,1161.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#DB788A").s().p("EAGkAhdQmehGjhkXQiUgskRlQQjokdiOjzIjKlYQhBhzgRg8QgPg3ADhbQAIjPAAgrQgGiSAChNQADiIAfhkQBYkTFniyQAHgDDpgmQDlgmA6gkIABAAIAAmnQAUhhAMh+QgCgQAAgZQAAhFAEhOQAHhgAJgfIACgDIAAgGQADg+AZhOQALgiAMgbIALgTIB0gEQCIAABfCgIA5A4QAVAVALAqQAHAXAKAxQAHAZAAAxIAAAvIAHAmIAAF1IAAABQA0BbCjCTID/DhQBLBJAxCVQAOApAYBRQAWBHAVAsQBVCwA6EOQA5EKgBDYQAACcgaB/QBQBEAeB9QAQBCADBWQABAugDBCIgBCqQgGB9gVBtQBQDtAABGQAAB6hOBZQhhBti5AAQknAAjshwg");
	this.shape_360.setTransform(1148.9,1162.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#DB788A").s().p("EANwAiJQk2gdjeibQjcgrjUjCQhwhehWhvQhihEh7iOIg3hEQgcgZgfgeQgngmgpgtQhIhNhFhTQh1iPhdiKQgkg0gdgxQgwhOghg9QhojAgUgoIgWgrQgshagPg2IgEgQQgMg2AChSIAAgBQAEiHABhQIABg1QgDiQAIhaQALiOAohnQAjhbA+hJQCPilESgsQArALDIgBQDIABBeAPIABAAQAxhGA3g9QAWgiARgjIAAgBQALhXAHhjQAKgQAJgTQAGgPAFgXQAFgUADgWQAFguABhBIAChLQACgmAEgWIABgEIAAgGQABhAASg4IAJgZQAOgiAVgXIAPgQQAlgFApgBQAXAAAVABQA1AFAwAeQA5AkA4BSQAHAOAGAPIADAHIAmBFQAOAcAHApIALBLQAFAgAAAvIAAASIABABIAGAdIAKAcIAEAEIAjAxQA4A6AmBWIABAAQBDAoBTBfQAnAsAmAzIAVAdQAlAyArBKQAjBNAqAwIAFAHQAiBFAiBSQAPAlAOAyQAOAwAWBTQATBFASA3QAyCGApC1QATBSAQBSQAyEOAGCPIgDBYQgEA/gGA7IACArQABBCgHBEQAYAlARAyQAVAnAKBcIACAOQAIBFgDBMQgBAggDAlIAFAwQAMAtAEB/QADArgCAhQgFBagbBMIgBAhQAHCag4AxQgEAJgFAHQguBRheAxQhZAshygEIglABQgeAAgggCg");
	this.shape_361.setTransform(1134.8,1165.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#DB788A").s().p("EANyAhCQgzgDgzgJQlEg4jRjHQi4gsjykIQhshwhXh0QhlhrhkiKIg0hLQgggWgkgeQgrgjgugsQhNhKhPhYQh/iPhoiSQgmg3gggyQg0hSgghBQhfi+gbg8IgWguQgrhdgQg7IgEgRQgNg6AAhWIAAgCIADjkIABg6QABiOAOhnQATiTAwhqQArhgBFhEQCoijEtAiQBPAZCnAjQCsAoCABEIACAAQBjATBuAoQAsgRAhgUIABAAQAFhfAEhlQASgLAPgPQANgNAKgUQAKgUAGgYQAJgqgBhLIgBhPQgBglABgaIABgFIAAgHQgBhMASgxQAFgNAGgMQASghAdgUQAJgHALgFQAlgJAuAAQAYAAAXAEQA2AJAwAmQA0AnA+BbIAJAfIABAKIATBQQAHAjAEAqIAGBNQACAmAAAtIAAATIAAABIANAdIAOAbIAHgBQAkgGAkgDQBugRBNAnIAAAAQBkAQBKBhQAnAxAdA8IAPAiQAZA7AVBaQARBrAWApIACAIQATBWAeBPQAOAnAOA3QAPA4ATBUIAhCHQAmCQAmDDIAgCsQA2FEADBnIgJBdQgGBCgJA+IAIAsQAJBCgDBNQANApAHA7QALAZAEB1IABAPQABBMgGBMIgIBIIALAxQAYBNAKBhQAHAwgBAfQgCBegoBNQgGARgIAQQgtCEh4AZQgJAEgKADQhdAnhtALQgXACgXAAQhVAAhagWg");
	this.shape_362.setTransform(1123.5,1168.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#DB788A").s().p("AMSfXQmfhGjhkWQiTgtkRlPQjokeiOjzIgxhSQgjgUgpgdQh8hZiSiYQiIiOhyiaQhziagxhtQh3kLgWgzQgwhxgPhDQgPg+AAhbIABjyQAAokDrjDQGSlPPfNNQBCAAAxgFIAAjNQBUgRAYhJQATg2gNiaQgNiWAYg6QAnhfCRAAQBSAABIBBQAvArBBBjIAHAjIAAF1IAAACQAPAaAXAeQA6goA7ghQFjjHB7C9QAyBHASBcQANBDAABqIgBC0QAFBnAZBNQA2CpBfJMQBXIgAABPQgRB6gRBsQAHAWAGAYQAQBCACBWQABAugCBCIgBCqQgHB+gVBsQBRDuAABFQAAB7hOBYQhiBti4AAQkoAAjrhwg");
	this.shape_363.setTransform(1112.3,1176.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#DB788A").s().p("EAT3AgWQhZgGhUgRQi+gaifhMQjRgzibhtQiKhHh5iOQhQgmhvhwQhhhkhviLQh4iXhdiMIg3hTIg6hIIgzhGIg2hMQgjgWgmgeQglgcgmgiQhahPhghnQgwg0gtg2QhRhhhChdIgQgYIgagjQhThwguhVQhZipgnhRIgag4QgvhqgRhIQgOhAgBhWIAAgBQABh7AQhzQALiFAgh6QAQhCAUg7QA4jjCEhxIAHgGQA6gvBGgXIAdgMQDhhqEdBxQBsAdBaBUQBWAzBsBGQBkA/BRA1QA5AhA8ApIByAGQAThBAVg5IABgEQBLAAAiguQAjgfARhyIAGgZQAShcAigvQARgaAXgTQARgIAYgBQAMgHAPgGQAYgMAdgGIAHgBQBIgKA+AdQAKAEALAHQAsAYA6A4IAFAMIAHAPQAdCRAbDNIAAABQAOAbAUAfIASgFQAkgNAhgHIAUgFQBBgPA0ABQBMgLA3AbQBRArAsBEIACAGQAnBMATBXIACAKQANA+AGBjQADCOAFAmQAIBiAXBRQAXBXAfChQAqDdArESIAZCtQAMCFAGBjIAIAwQAQBkACA1IAAAPIgKBbQgIA5gIBTIAGAbIADATQALBEgBBRIgDBMIACAjQAHAfADCEQAEBRgHA+QgFAtgIAqQAQBMABA8QAMBqgVAqQgQA/grAwQgYAcgfAXQhjBHiTAAIgmgBg");
	this.shape_364.setTransform(1107.6,1179.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#DB788A").s().p("EASwAgFQhXgMhSgYQi9gcibhLQjIhAiRh8Qh+g6iGiXQhOgyhmhuQhhhrhmiDQh1iYhZiLIg1hTQgfgeghgiIg5hAIg7hHQgigZgkgeQgkgdgkgiQhahUhahkQgug1gsg2QhQhlg8haIgPgYIgbgiQhUhqgzhSQhjifgqhQIgcg4QgthjgShMQgPhDAAhRIAAgBQAAhxAfh6QAXh8Awh8QAWg+AZg5QA5jfCDhvIAIgHQA6gvBFgWIAagPQDqicD0A9QB0AIBJBlQBQAqB2BFQBxBABIAgQA7ATA8AgQA7AFA1ALQAmgfApgPIADgBQBCASAsgVQAzgHAvhKIAQgQQApg+AxgqQAUgWAYgSIAbAOIAWgTQAVgRAXgMIAFgDQBDgWA4gEQAJgCAKAAQAwAFBBAkIAJAIIALAKQA5BoA2DgIAAABQANAbARAfIAPAFQAjgCAeAIIASADQA4ALAoAbQA3APAkA2QA2BTAeAzIABAGQAcBSAUBRIACAKQAPA8ALBkQAIB5AKA8QAJBbAWBXQAWBfAbCWQAsD5AkDrQAQBvAHA6QACCCgCBmIAKAvQAQBZACBAIAAASIgHBaQgFAqgHBjIAFAbIACATQAFBGgEBNIgFBLIAEAhQAOAxAIBsQALBVgFA2QgDAtgJApQAEBLgQA6QgKBcgrAlQgfAwg2AgQgeATghAPQhaAkhrAAQgsAAgugGg");
	this.shape_365.setTransform(1105.5,1180.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#DB788A").s().p("EARmAglQhWgShPgeQi7geiYhKQi/hNiHiLQhxgsiVihQhKg/hdhqQhjhzhch7QhyiYhViMIgzhSQghgZglggQgfgbgfgfIhChCQgggagjgfQgigfgjgjQhYhXhVhiQgtg1gqg3QhQhog2hXIgOgYIgcghQhThlg6hPQhsiWgthOQgRgegMgZQgthcgShSQgQhFAAhNQAAhmAuiCQAjhxBAh/QAbg6Afg3QA5jcCDhuIAJgHQA5guBFgWIAXgSQDyjODLAKQB+gMA3B0QBJAiCBBCQB/BBA/AMQA7AGA9AVQA5AIA0ATQA6ADA9AbIAEADQA6AiA2AGQBDARBMgiIAagIQBCgfA+gmIAxgiIANAkIASgYQAQgXASgSIAEgFQA8giAzgmIASgOQA0gOBIARIALAEQAIACAHAEQBVA9BRDzIABABIAaA7IAMAOQAhAKAbAWIAQAMQAwAlAbA1QAiApASBQQAbB7APAiIABAHQAQBXAVBNIADAIQAQA6AQBlQANBjAPBSQAMBXATBbQAVBmAYCNQAuESAdDGQARB4ADAuQgHB+gKBpIAMAvQAPBNACBLIABAVIgEBZQgDAbgEBzIACAbIABATQAABIgHBJIgIBJIAHAhQAVBCAMBUQASBZgCAvQgBAsgKApQgHBIghA5QghBOhBAgQguAihCAQQgjAJgkAGQg6AJg7AAQhVAAhXgSg");
	this.shape_366.setTransform(1103.6,1175.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#DB788A").s().p("EAN6AgIQmehGjikWQiUgtkQlPQjokeiOjzIgwhSQgkgUgogdQh9hZiRiYQiJiOhyiaQhbh7gyhdIgcgfQjukNhKh4QhvizAAi/QAAigC8ktQAig2Ajg1QA6jZCDhsQA8gzBKgXIAVgVQD6kBCigpQCHghAlCEQBDAbCLA/QCNBCA2gIQC2gbDMCtQB/CJDYAAQB8AABgg/IAAA7IANgeQANgfANgbQBBg4AzhYQA9glBZAAQCNAACDFvQAgAWAYAkQAyBHASBcQANBDAABqIgBC0QAFBnAaBNQA1CpBfJMQBXIgABBPQgRB6gSBsQAIAWAFAYQAQBCADBWQABAugDBCIgBCqQgGB+gVBsQBQDuAABFQAAB7hOBYQhhBti5AAQknAAjshwg");
	this.shape_367.setTransform(1101.9,1171.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#DB788A").s().p("EAVSAhhQjngKi9hRQg1gTgzgaQjRgriohuQiShbhpiFQhcgniEiKQgfghggglQgcgcgfgiIhEhOQhQhfhIhdQh5iehaiRIgVgjIgxhSQgjgXgngeIgNgLIghgaQhahLhhhjIgjgiQhshthbiDQgXgfgWggQg8hXgphMQgRgfgNgcIgaghIhAhXQg9hJgshMQhIhogjhBIgBgDQgshMgdhYQgIgZgHgaQgEgQgDgQQgNhBAAg+IAAAAQAAgnALgsQAjiTCTi0IARgVQAkguAngrQATguAXgnQAshBAqg2QAmgpArghIAZgRQAzglA7gVIAVgUQAlgjAigdQBbhMBGghQBhg+BWgMIAFAAQB2gTAtBSQAIANAHARQBIAXCHBAQBQAlA2ASQAlAMAXgBQCDgICWBQQA3AcA3AmQAgAcAlAUQAVARAWAPIAZAIQAcAHAeAFQA/AJBHgHIAhgFQBKgJBEgcIAtgVIAGA5IAOgYQAOgZAOgUQA/gqAxhCQATgIAVgEQAkgJAnABIAdACQA5AHA1BDQAqA1AmBbQAeBMAdBVIAIAHQAYAXASAgQAbAsATAyQAMAhAHAmQAOBDACBrQABCbADAbQAGBlAYBRQAMAlAMA3QA0DqA/GJIAEAmIAWCyIAIAsQAMBLAIBAQAIA4AFAvQANBfACA3IAAASQgNBmgPBdIgEAlQAHAWAHAYQARBFADBSQACAjgBAqIgBAjIgICpIgCATQgPBvgeBbIAMBCQAiCcgNAxQgOBqhSBJQgOANgPAKQhcBBiMAAIgYgBg");
	this.shape_368.setTransform(1098.8,1171.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#DB788A").s().p("EAT+AhKQjngUi4heQgzgSg1gcQjGgyirh8QiOhjhoiEQhcgzh8iIIg9hGQgdgcggghQgigkgkgoQhRhchMhfQh6icheiSIgVgkIgyhSQgjgZgkgfIgNgLIgfgbQhchQhehiIgkghQhrhphZiMIgqhAQg4hZgmhQQgPgggNgdIgWgiIg5hbQg1hEgmhYQg/hsgehDIgBgEQgnhJgfhfQgIgagHgZIgIggQgOhEAAg8QAAgoAOgrQAkiaCliTIASgRQAmgmAsghQAWgmAbgeQA4gwAngwQAogkAtgeQAMgJANgHQA0gnA6gVIAWgUQAmgiAkgbQBghGBCgNQBdgyBdgDIAGAAQB4gJAuBIQAJALAIAOQBMAUCFBAQBOAlA3AWQAjAOAYACQCCAECZBFQA4AZA4AfQAiAXAmAOQASATATAQIAYADQAaADAcAAQA9ADBEgPIAfgIQBJgNBGgYIAugRIAMA3IAPgSQAPgTAPgNQA8gbAwgtQASgEAUAAQAjgFAmAFIAaAGQA3ANAxBEQAmA2AhBeIAzCiIAHAHQAVAZARAhQAZAtASAyQAMAhAIAmQAOBFAFBrQADCTAFAlQAHBkAYBUQAKAmANA3QA4ERA3FhIADAmIAPC0IAJAtQAMBJAIBDQAHA3AEAyQALBUACBEIAAATQgNBngPBeIgCAkQAIAXAGAXQATBIAEBPQADAlAAAoIgCAjIgPCnIgEATQgVBsgrBSQACAggCAbQAOCIgcAoQgbBahWA6QgOAKgQAIQhZAwh4AAQgXAAgZgCg");
	this.shape_369.setTransform(1098.4,1171.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#DB788A").s().p("EASpAg0QjlgfizhqQgzgRg2gfQi8g4isiLQiMhphmiFQhbg+h1iFIg7hJQgegaghghQgjgiglgoQhShahPhgQh9iZhgiUIgWgjIg0hTQghgcgiggIgMgMIgfgbQhdhVhbhgQgTgPgSgRQhqhmhXiUQgUghgTgiQg0hagjhUQgOgggLgeIgUgkIgyhfQgtg/gfhlQg1hvgahFIgBgFQgihFghhmIgPg0QgFgQgDgRQgPhGAAg6IAAAAQAAgpAPgqQAnihC2hxIATgOQApgdAwgYQAagdAegWQBEgfAjgpQArgfAvgcIAagPQA1gnA4gXIAXgTQAoghAlgZQBlhBA+AIQBagoBjAHIAGABQB6ABAvA8QALAJAJANQBRAQCCBAICEBAQAiAPAYAFQCAAQCcA8QA7AVA5AXQAkASAlAIQAQAUARATIAWgCIAygGQA8gEBAgWIAdgMQBHgQBJgVQAYgHAYgFIARA0IAQgMQAQgMAQgGQA5gOAwgXQAQAAATAEQAigBAkAKIAZAIQA0AUAsBGQAiA4AdBfQAWBbAWBIIAGAIQASAbAPAhQAXAvARAyQAMAgAJAoQAPBFAHBsQAFCKAHAvQAIBjAXBXQAKAoAMA3QA8E3AvE6IADAmIAJC2IAJAtQANBIAGBGQAGA1AEA0QAJBLACBQIgBAVQgLBogQBdIAAAlIAOAuQAUBLAGBMQAEAnAAAlIgCAkQgDAmgSCAIgGASQgdBog2BKQgEAcgIAXQgIB1gqAeQgoBKhZArIgfANQhSAihjAAQgmAAgpgFg");
	this.shape_370.setTransform(1097.9,1171.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#DB788A").s().p("EARVAgfQjlgpish2QgzgRg3ghQiyg+iuiaQiIhwhmiFQhbhJhtiDIg5hKQgfgagigfQgkgiglgnQhUhXhShhQh/iYhjiUIgXgkIg0hTQghgegfgiIgMgMIgfgcQhehZhXhfQgUgOgTgRQhphhhUifIglhFQgwhagfhYQgNghgKgfIgRgmQgYg0gSguQgmg6gZhyQgrhygWhIIgBgGQgdhCgihsIgQg1QgFgQgDgRQgQhJAAg4IAAAAQAAgqARgpQApioDHhPIAUgKQAsgVA0gOQAegVAigOQBPgOAfgiIBfg0IAbgOQA1goA4gYIAYgTQApggAmgWQBrg8A6AdQBWgdBpARIAHABQB8ALAwAxQAMAHALAKQBVANCABAQBJAkA6AgQAfARAZAIQB+AdCgAxIB3AiQAlAMAmACQANAWAOAUIAVgGIAugPQA7gLA8geIAcgPQBGgTBLgRQAZgGAXgCQAMAWALAcIARgGQARgGARAAQA3ABAvgCQAPAFARAHQAiADAiAPIAYALQAxAbAnBGQAfA6AYBhQASBjASBCIAFAHQAQAdANAiQAUAxARAxQAMAgAJApQAPBGAKBsQAHCCAJA6QAJBhAWBaIAWBgQBBFfAnESIABAmIACC4IAKAtQAOBHAGBIQAFA1ACA2QAIBAABBeIgBAWQgKBogRBeIADAlIAOAuQAWBOAHBJQAFAogBAkIgBAkQgEAugZB2IgGASQglBlhCBAQgKAZgOATQgdBhg4AWQg2A5hcAcIggAIQhHAUhQAAQg1AAg6gJg");
	this.shape_371.setTransform(1097.4,1171.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#DB788A").s().p("EAQAAgUQjjg0ioiCQgygQg4gkQiohEiwioQiFh4hjiGQhbhThliBIg4hLQgggZgjgfQglghgngmQhUhUhWhiQiAiXhmiVIgYgkIg1hTIg+hDIgKgNIgegcQhghfhUhdQgUgNgUgSQhohdhSioQgSgigQgkQgshcgchcQgMgigIgfIgPgnQgUg3gOgwQgeg1gTh+Qghh2gShKIgBgGQgYhAgkhyQgJgcgHgaQgFgQgDgRQgRhLgBg2IAAgBQAAgsATgmQAsivDYguIAVgGQAvgNA4gFQAhgMAngGQBaADAcgcQAwgUAzgXIAcgOQA1gpA3gZIAYgSQAsgfAngUQBwg3A2AyQBSgSBwAaIAHACQB+AVAxAmQANAFANAIQBZAJB+BAQBHAkA7AlQAeATAZAKQB9ApCiAnQBAAPA7AIQAmAGAngDQAKAYALAWIATgMQAVgMAWgLQA5gSA5glQAOgIAMgKQBEgXBOgOQAZgFAZABQAOAVAOAbIASAAQASAAASAIQA0APAuAUQAOAIAQAMQAhAGAgATIAWAPQAvAhAiBHQAcA8ATBjQAOBqAPA8IAEAIQAMAfAMAiIAjBjQALAhAJApQAQBHAMBsQAKB6ALBFQALBgAVBdIAUBhQBFGEAgDsIgBAnQgBBigCBXIAKAtQAOBGAFBLQAFAzABA5QAHA2AABqIgBAXQgKBqgQBeIAEAlIAOAvQAXBPAIBHQAHApAAAiIgCAkQgFA3geBsIgJASQgsBhhNA3QgQAVgUAQQgzBOhFAMQhEAphgANQgQADgRAAQg3AKg6AAQhJAAhOgQg");
	this.shape_372.setTransform(1097,1170.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#DB788A").s().p("EAOrAgNQjig+iiiOQgxgQg5gmQiehLiyi3QiBh+hjiGQhbhfhdh+Ig2hNQghgYglgeQglgggnglQhWhShZhjQiDiVhpiWIgYgkQgdgsgZgnQgfgkgcgjIgJgNIgegeQhhhjhRhaQgUgNgVgSQhnhahQixQgQgkgQglQgmhcgahgQgKgigIggIgMgpQgQg6gKgxQgWgwgNiKQgXh6gOhMIgBgIIg5i1QgJgcgGgaQgGgRgDgRQgShOgBg0IAAAAQAAgtAUgmQAvi2DpgMIAWgCQAygFA8AFQAkgEAsADQBkATAZgUQAzgQA0gVIAdgMQA2gqA2gaIAZgSQAtgeApgSQB2gxAyBGQBOgGB2AjIAIACQCAAgAyAaQAOADAOAGQBeAGB7BAQBEAkA9ApQAdAUAaANQB6A2CmAdQBCALA7ABQAoABAngJIAQAxIASgQQATgRATgPQA5gZA1gtIAZgVQBDgbBQgKQAagEAYAEQASATARAbIASAGQATAHASAOQAyAdAuAqIAbAcQAgAKAfAXIAVASQAsAoAdBIQAYA+AOBlQALBxALA2IACAIIAUBEQAQA0ARAwQAKAgAKArQARBIAOBsQALBxANBQQANBeAUBhIATBiQBLGrAXDFIgCAmQgEBjgGBYQAGAWAGAXQAOBFAEBOQAEAyAAA7QAFAsAAB3IgBAZQgJBqgRBfIAGAkIAOAvQAZBTAJBDQAIArAAAgQAAASgBASQgHBAgkBhIgJASQg0BehZAuQgWASgaALQhIA7hTADQhSAZhkgCQgQAAgRgCQgfACgfAAQhlAAhogag");
	this.shape_373.setTransform(1096.5,1169.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#DB788A").s().p("EASGAgsIgjgHQiIgBiEgoQjhhJiciaQgxgQg6goQiUhRi1jGQh9iEhiiHQhbhqhVh8Ig0hOQgigXgmgeQgmgegoglQhXhPhchlQiFiShriYIgagkIg3hTQgegngZgkIgJgOIgegeQhihnhNhZQgWgNgVgRQhmhXhNi6QgPgkgOgmQgkhegWhkQgIgjgGggIgKgrQgNg8gGgzQgPgqgGiYIgXjLIgBgJQgOg4goiAIgQg3QgFgRgDgSQgUhPAAgyIAAgBQAAguAWglQAxi9D6AWIAXABQA1AEBAAOQAoAFAvALQBxAkAUgNQA3gLA2gTIAdgLQA3grA0gbIAbgRQAvgdApgQQB7gsAuBbQBLAEB9AtIAIADQCCAqAyAOQAQACAPAEQBjACB3BAQBDAjA/AuQAbAXAaAPQB4BCCpAUQBEAHA9gHQAqgEAngPIALA0IAQgUQARgXARgSQA4ggAyg0IAXgZQBAgeBUgHQAZgCAaAHQAUARAUAaIAUAMQATAOAUAVQAvAqAsBAIAYAkQAhAOAcAcIAUAUQApAvAYBKQAVA/AJBnQAHB5AIAvIACAJIAPBGQANA2AQAwQALAgAKAsQARBIARBtQANBoAQBaQANBdATBkIATBjQBOHSAQCeIgDAmIgQC9IAMAtQAPBEADBRQADAwAAA+QADAigBCDIgBAaQgJBsgRBeIAJAlIAOAvQAaBWALBAQAJAtgBAdQAAATgBASQgHBHgqBZIgLARQg8BahkAmQgcAOggAHQheAnhhgGQghADgiAAQhAAAhDgLg");
	this.shape_374.setTransform(1096,1169);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#DB788A").s().p("EAULAhNQhtgHhqggIgkgMQiOgOiAgtQjghTiXinQgwgPg7gqQiKhXi2jVQh6iMhhiHQhbh1hNh5IgyhQQgjgWgngdQgngegpgjQhYhNhghmQiGiQhviZIgagkQgfgsgZgoQgdgpgXglIgJgOIgcgeQhkhthKhYQgXgMgVgRQhmhThKjDIgbhNQgfhegThoQgHgjgFgiIgHgsQgJg+gCg1QgHglAAikQgEiAgFhSIgBgJQgJg1gqiHIgQg3QgFgRgEgSQgUhTgBgwIAAAAQAAgwAYgjQA0jEELA3IAYAFQA3AMBFAYQAsANAyAUQB8A1ASgHQA5gFA3gRIAfgKQA3gsAzgdIAcgQQAwgcAqgNQCCgnAqBvQBGAQCEA2IAIAEQCEAzA0AEQARgBAQACQBngBB1BAQBBAjBAAyQAaAYAbATQB2BOCsAJQBGAEA+gOQArgKAogUIAFA3IAPgZQAPgbAPgXQA2gmAvg8QALgNAKgPQA/ghBWgEQAagBAaAKQAXAPAXAaIAVASQAUAUAUAcQAtA5ArBVIAWAsQAgASAaAgIASAYQAoA1ATBLQARBBAEBpQADCAAEApIABAJQAEAlAHAkQALA3APAwQALAfALAtQARBJAUBuIAgDEQAPBcATBnIARBkQBTH5AIB2IgEAnIgXC+QAHAWAGAYQAPBDADBTQACAvgBBAQABAYgBCQIgBAcQgIBsgSBfIALAlIAOAvQAcBYAMA9QAKAvAAAbQAAATgCASQgIBQgwBOIgNARQhCBXhwAdQgiAKgmAEQhCALg/AAQgxAAgxgHg");
	this.shape_375.setTransform(1095.6,1169.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#DB788A").s().p("EAO+AghQmfhGjikWQiTgtkQlPQjokeiPjzIgwhSQgkgUgogdQh8hZiSiYQiIiOhyiaQhbh7gyhdIgcgfQhlhxhHhXQiChAhXj5QgsiAgYiZQgUiHADhkIAHjRQAGiDgBhUQAAgtgxidIgQg4QgFgRgEgSQgWhWAAguQAAgwAZgiQA3jLEcBZQBmAgCcBQQCHBFAOAAQBMAABIgXQCDhoBhgZQCHghAmCEQBDAaCKBAQCNBCA3gIQC1gbDNCtQB+CJDYAAQB9AABgg/IAAA7IAMgeQAOggANgaQBBg4AyhYQA+glBYAAQCOAACDFvQAgAWAYAkQAyBHARBcQAOBDAABqIgBC0QAFBnAZBNQA2CpBfJMQBXIgAABPQgRB6gRBsQAHAWAGAYQAQBCACBWQABAugCBCIgBCqQgHB+gVBsQBRDuAABFQAAB7hOBYQhiBti4AAQkoAAjrhwg");
	this.shape_376.setTransform(1095.1,1168.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#DB788A").s().p("EAPIAglQmfhGjikXQiTgskQlQQjpkeiOjzIgwhRQgkgVgogdQh9hZiRiXQiJiPhxiZQhbh7gyhdIgcggQhlhxhHhXQiDhAhWj4QgtiBgXiYQgTiCAChhQgBgcAEibQgLhzgDheQgCgugqiTQgHgmgHgZIgNg9QgWhRAAg2QAAg0AYgrQAyjFD/A/QBogRCsBOQCLBFBPAmQBPAHBJgPQB5haBagQQCIgSArB7QA7AXB5A4QCNBBA2gIQC2gbDNCuQB+CJDYAAQB8AABgg/IAAA7IANgeQAOggANgbQBBg3AyhZQA+gkBYAAQCNAACEFuQAgAWAXAlQAyBGASBcQAOBDgBBrIAACzQAEBnAaBNQA1CpBfJMQBYIhAABOQgRB6gSBtQAIAWAGAYQAQBCACBVQABAvgCBCIgCCqQgGB9gVBtQBRDtAABGQAAB6hPBYQhhBui4AAQkoAAjrhwg");
	this.shape_377.setTransform(1094.1,1168.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#DB788A").s().p("EAPSAg3QmfhGjikXQiTgskQlQQjpkeiOjzIgwhRQgkgVgogdQh9hZiRiXQiJiPhxiZQhbh7gyhdIgcggQhlhxhHhXQiDhAhWj4QgtiBgXiYQgTh9ACheQgDgYABiEQgahjgHhpQgCgugkiLQgGgsgGgYQgIg5gJgeQgWhMAAhAQAAg2AXgzQAujADgAlQBshDC8BMQCOBFCRBNQBRAOBLgGQBvhNBSgHQCKgDAwBxQAyAUBoAwQCNBBA2gIQC2gbDNCuQB+CJDYAAQB8AABgg/IAAA7IANgeQAOggANgbQBBg3AyhZQA+gkBYAAQCNAACEFuQAgAWAXAlQAyBGASBcQAOBDgBBrIAACzQAEBnAaBNQA1CpBfJMQBYIhAABOQgRB6gSBtQAIAWAGAYQAQBCACBVQABAvgCBCIgCCqQgGB9gVBtQBRDtAABGQAAB6hPBYQhhBui4AAQkoAAjrhwg");
	this.shape_378.setTransform(1093.1,1166.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#DB788A").s().p("EAPbAhUQmehGjikWQiTgtkRlPQjokeiOjzIgwhSQgkgUgogdQh9hZiRiYQiJiOhyiaQhbh7gyhdIgcgfQhkhyhIhWQiChAhXj5QgsiAgXiZQgSh3ABhcQgFgTgChuQgqhSgJh0QgDgvgeiBQgFg1gFgWQgKhNgMgkQgVhHABhIQAAg6AUg8QAqi5DCAKQBvh0DMBKQCRBFDUBzQBTAUBMADQBmg/BJACQCMANA2BnQApAQBXAoQCNBCA2gIQC1gbDOCtQB9CJDZAAQB8AABgg/IAAA7IANgeQANggANgaQBBg4AzhYQA9glBZAAQCNAACDFvQAhAWAXAkQAyBHASBcQANBDAABqIgBC0QAFBnAaBNQA1CpBfJLQBXIhABBPQgRB6gSBsQAHAWAGAYQAQBCADBWQABAugDBCIgBCqQgHB+gUBsQBQDuAABFQAAB7hOBYQhhBti5AAQknAAjshwg");
	this.shape_379.setTransform(1092.2,1163.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#DB788A").s().p("EAPlAh0QmfhGjhkXQiUgskQlQQjokeiOjzIgwhRQgkgVgpgdQh8hZiSiXQiIiPhyiZQhbh7gyheIgcgfQhkhxhIhXQiChAhXj4QgsiBgXiYQgRhyAAhZQgHgPgFhYQg5hCgMh+QgEgwgYh4QgEg8gEgUQgLhigPgqQgUhCAAhRQAAg8AThFQAlizCkgQQBzimDcBJQCUBEEVCZQBWAbBNAMQBdgyBAAMQCOAbA7BeQAhANBGAgQCNBBA2gIQC1gbDNCuQB+CJDZAAQB8AABgg/IAAA7IANgeQANggANgbQBBg3AzhZQA9gkBZAAQCNAACDFuQAgAWAYAlQAyBGASBcQANBDAABrIgBCzQAFBnAZBNQA2CpBfJMQBXIhAABOQgRB6gRBtQAHAWAGAYQAQBCACBVQABAvgCBCIgBCqQgHB9gUBtQBQDtAABGQAAB6hOBYQhiBui4AAQkoAAjrhwg");
	this.shape_380.setTransform(1091.2,1160.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#DB788A").s().p("EAPvAiVQmfhGjhkXQiUgskQlQQjokeiOjzIgwhRQgkgVgpgdQh8hZiSiXQiIiPhyiZQhbh7gyheIgcggQhkhwhIhXQiChAhXj4QgsiBgXiYQgRhtAAhWQgJgKgIhCQhJgygPiIQgEgxgShvQgChEgEgTQgNh2gRgvQgUg9AAhaQAAhAAShNQAhitCFgrQB2jXDtBHQCWBEFYDAQBYAiBOAUQBUgkA4AUQCPArBABUQAaAKA0AYQCNBBA2gIQC1gbDNCuQB+CJDZAAQB8AABgg/IAAA7IANgeQANggANgbQBBg3AzhZQA9gkBZAAQCNAACDFuQAgAWAYAlQAyBGASBcQANBDAABrIgBCzQAFBnAZBNQA2CpBfJMQBXIhAABOQgRB6gRBtQAHAWAGAYQAQBCACBVQABAvgCBCIgBCqQgHB9gUBtQBQDtAABGQAAB6hOBYQhiBui4AAQkoAAjrhwg");
	this.shape_381.setTransform(1090.2,1157.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#DB788A").s().p("EAP5Ai2QmfhGjikWQiTgtkQlPQjokeiPjzIgvhSQglgUgogdQh8hZiSiYQiIiOhyiaQhbh7gyheIgcgfQhlhxhHhWQiChAhXj5QgsiAgYiZQgPhogChSQgKgGgKgsQhaghgRiTIgRiYQgBhLgDgSQgPiKgTg1QgUg4AAhjQAAhCARhWQAcioBnhEQB6kJD8BFQCZBEGaDmQBbApBOAdQBLgXAxAdQCQA6BGBLQARAGAiARQCOBBA1gIQC2gbDNCtQB+CJDYAAQB8AABhg/IAAA7IAMgeQAOggANgaQBBg4AzhYQA9glBYAAQCNAACEFvQAgAWAYAkQAyBHARBcQAOBDAABqIgBC0QAFBnAZBNQA2CpBfJLQBXIhAABPQgRB6gRBsQAHAWAGAYQAQBCACBWQABAugCBCIgBCqQgHB+gUBsQBQDuAABFQAAB7hOBYQhiBti4AAQkoAAjrhwg");
	this.shape_382.setTransform(1089.2,1153.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#DB788A").s().p("EAQDAjYQmfhGjikWQiTgtkQlPQjokeiPjzIgvhSQglgUgogdQh8hZiSiYQiIiOhyiaQhbh7gyheIgcgfQhlhxhHhWQiChAhXj5QgsiAgYiZQgPhigChQQgMgCgOgWQhogQgVieQgGgzgFhcQAAhTgCgQQgPifgYg6QgTgzAAhsQAAhGAPheQAYiiBJhfQB9k6ENBEQCdBDHbEMQBdAwBQAmQBBgJAoAmQCTBJBKBBIAaAMQCOBBA1gIQC2gbDNCtQB+CJDYAAQB8AABhg/IAAA7IAMgeQAOggANgaQBBg4AzhYQA9glBYAAQCNAACEFvQAgAWAYAkQAyBHARBcQAOBDAABqIgBC0QAFBnAZBNQA2CpBfJLQBXIhAABPQgRB6gRBsQAHAWAGAYQAQBCACBWQABAugCBCIgBCqQgHB+gUBsQBQDuAABFQAAB7hOBYQhiBti4AAQkoAAjrhwg");
	this.shape_383.setTransform(1088.2,1150.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#DB788A").s().p("EAQMAj6QmehGjikWQiTgtkQlPQjpkeiOjzIgwhSQgkgUgogdQh9hZiRiXQiJiPhxiZQhbh7gyhfIgcgfQhlhxhHhWQiDhAhWj5QgtiAgXiZQgOhdgDhNQgOADgQAAQh5AAgXioQgHg0ABhTQABhagBgPQgRizgahBQgTgtAAh2QAAhHAOhnQAUicArh5QCAlsEcBCQCgBDIdEyICxBlQA4AEAfAwQCVBYBPA3IABABQCNBBA2gIQC2gbDNCuQB+CJDYAAQB8AABgg/IAAA7IANgfQAOgfANgbQBBg3AyhZQA+gkBYAAQCNAACDFuQAhAWAXAlQAyBGASBcQAOBDgBBqIAAC0QAEBnAaBNQA1CpBfJLQBYIiAABOQgRB6gSBsQAIAWAGAYQAQBCACBWQABAugCBDIgCCqQgGB9gVBtQBRDtAABGQAAB6hPBYQhhBti4AAQkoAAjshwg");
	this.shape_384.setTransform(1087.2,1147);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#DB788A").s().p("EAQNAj7QmfhGjikXQiTgtkQlPQjpkeiOjzIgwhRQgkgVgogdQh9hZiRiXQiJiPhxiZQhbh7gyheIgcggQhlhyhHhVQiDhAhWj5QgtiAgXiZQgOhdgDhNQgOADgQAAQh5AAgXioQgHg0ABhTQABhagBgPQgRizgahBQgTgtAAh2QAAhHAOhnQAUicArh5QCAlsEcBCQCgBDIdEyICxBlQA4AFAfAvQCVBYBQA3IAAABQCNBBA2gIQC2gbDNCuQB+CJDYAAQB8AABgg/IAAA7IANgfQAOgfANgbQBBg3AyhZQA+gkBYAAQCNAACEFuQAgAWAXAlQAyBGASBcQAOBDgBBqIAAC0QAEBnAaBNQA1CpBfJLQBYIiAABOQgRB6gSBsQAIAXAGAXQAQBCACBWQABAugCBDIgCCqQgGB9gVBtQBRDtAABGQAAB6hPBYQhhBti4AAQkoAAjrhvg");
	this.shape_385.setTransform(1087.2,1147);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#DB788A").s().p("EAPjAhgQmChCjkj3QiXgvj/kmQjhj+iVjfIgyhJQgigUgmgbIgQgMQhwhSiCiCQiCiDhxiOQhWhwg1hXIgbgeIgIgHIhxh+QgWgcgTgaQglgXghgoQg+hRgviKIgIgSIgLgWQgvhigXiCQgJgzgEgxQgDgfgBgeQgMABgOgCQgxgFgdgnQgggtgKhNIgDgcQgDgrgBg5QABhRgCgRQgKhfgNg8QgJgtgKgeQgRgtAAhqIAAgDQAAhEANhhQAFgrAHgpQARhgAchSQAoh3A5hJQBqiICkAXQB9ATFQCwIDIBuICoBgQA0AGAfAqQCJBRBQA2IABAAQB/A8A4gBQA7gEA9AQQAdAHAdAMQBSArBaBTQByCEDGAOQBQAFBHgVQAcgJAagNIAGA0IAOgYQAOgZAPgUQA/gqA0hHQAugVA9gDIAiAAQBnAEBoC1QAhA9AjBPQAeAVAXAhQAvA9AXBOIADAIQATA9AHBeQAICOAIASQANBdAdBFQAhBFAbB6QA/C7A+EsIAVBeQBDEyALB+QAEAjgBAWIgVCUIgLBHIAKArQAMBAAABPQAAAsgEA9QgBASgEB4IAAAVQgJB2gWBlQA8DZgJBGQgIByhLBPQhEBIhqASQgrAIgxAAQkVgBjihjg");
	this.shape_386.setTransform(1079.3,1132.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#DB788A").s().p("EAV+AggQkBgCjahWQljg9jojYQiagyjuj8QjZjeiejKIgyhCQgggTgkgaIgQgLQhrhOh8h2Qh7h4hviCQhThkg4hRIgagbIgHgIIhthzIgjg2QgfgZgbgmQg1hTgmh+IgJgOIgMgSQg4hOgZh8QgKgvgFguIgEg6QgJgCgLgDQgogLgXgnQgZgwgIhDIgDgZQgDgqgBg0QgBhJgDgUQgKhagNg2QgJgpgJgfQgOgsAAhiIAAgCQAAhBALhbQAFgoAHgnQAPhaAYhNQAkhwAyhIQBeiFCPAEQB8gPEyCWQBTArBsA8ICeBYQAwAIAfAmQB8BIBTA1IAAABQBxA2A6AGQA3ACA7ASQAaAIAbALQBEAyBPBQQBmB+C0AcQBIALBCgLQAagFAZgJIAMAuIAPgRQAPgSAQgPQA9gdA2gzQAsgPA5AAIAfACQBjAIBqCYQAjA3AlBFQAdAUAXAeQAuA3AcBEIADAHQAZA4AOBQQASB6APAVQAWBRAfA9QAsBDAYBkQBVCuBGEEIAaBVQBPETAJB/QADAcgCAcIgTCLIgKBDIAHApQAIA8gCBJIgGBjQgEAYgFBoIgBAUQgMBugWBeQAnDEgSBHQgQBphHBGQhDBBhiAPQgmAGgqAAIgHAAg");
	this.shape_387.setTransform(1073.6,1118.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#DB788A").s().p("AUheDQjugDjRhIQlGg5jqi4Qidg2jdjSQjRi+imi2Igzg6QgfgTghgXIgQgLQhnhKh0hqQh2hshuh3QhOhYg7hLIgZgZIgHgHIhphqIgcg0QgZgbgWgmQgrhVgdhyIgKgJIgOgOQhAg6gch1QgKgrgFgtIgEg2IgQgJQgegQgRgnQgTg0gGg4IgCgYQgEgogBgvQgChAgDgXQgLhVgNgyIgRhDQgMgsAAhaIAAgCQAAg9AKhUIAKhKQAOhVAWhJQAehnAshIQBRiBB6gPQB7gxEWB7QBLAmBpA5ICVBSQArAKAgAhQBwBABUA0IAAABQBjAwA7AOQA0AHA3ATQAYAJAZALQA3A5BDBMQBbB6ChAqQBBAQA9gBQAYgBAYgEIASAnIAPgKQARgLARgJQA7gQA3ghQAqgIA1AEIAdADQBfANBsB5QAkAxAoA9QAbASAXAbQAtAwAhA8IAEAGQAfAyAVBDQAbBlAXAXQAfBHAhA1QA3BBAWBNQBpChBODcQARAnAPAlQBbDzAHCBQACAVgDAhIgRCEIgKA+IAEAnQAEA5gEBDIgIBcQgGAdgHBZIgCATQgOBmgXBXQASCvgbBIQgYBghDA+QhBA6hbALQgiAEgmAAIgJAAg");
	this.shape_388.setTransform(1068,1103.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#DB788A").s().p("ATEbsQjagEjJg7Qkog0jtiZQihg5jLipQjKidiuiiIg0gyQgdgSgfgVIgQgMQhihFhthfQhvhghthsQhKhLg+hFIgYgXIgIgHQg5g2gqgqIgXgzQgSgdgRgkQghhZgUhkIgLgGIgPgIQhKgogfhuQgKgngFgrQgDgYgBgbIgLgMQgUgWgMgnQgMg2gEgvIgCgWIgGhQQgCg4gEgaQgLhQgOgtQgJgegGghQgKgsAAhRIAAgBQAAg6AJhOIAJhFQAMhPAThFQAahfAlhHQBEh+BlgiQB6hTD5BhQBEAhBmA2ICMBMQAnAMAgAcQBjA4BVAzQBWAsA8AVQAxAMAyAVIAtAUQAqA/A5BJQBOB1CPA4QA5AWA5AJQAWADAXABIAXAgIARgEIAkgGQA5gDA4gPQApgBAvAHIAcAFQBaARBuBbQAmArArA0QAZARAXAXQAtArAlAyIAEAFQAlAsAcA3QAlBQAeAZQAoA9AkAsQBCBAATA2QB+CTBWC0QAUAjARAhQBoDTAFCCQABAPgEAmIgQB8IgJA6IACAkQgBA3gGA8IgLBVQgHAjgJBKIgCARQgRBegYBQQgDCbgjBJQghBXhAA1Qg+AzhTAHQgfADgiAAIgLAAg");
	this.shape_389.setTransform(1062.4,1087.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#DB788A").s().p("ARmZaQjHgEi/guQkLgwjwh6Qikg7i6h/QjCh+i2iNIg1grQgcgRgcgTIgQgLQhdhBhnhTQhohVhshgQhGhAhBg/IgXgUIgHgHIhghWIgQgxQgMgfgLgkQgYhbgLhYIgMgCIgRgEQhSgTghhoQgLgjgFgpIgEgvIgGgRQgLgbgGgnIgIheIgBgUIgGhKQgEgvgFgdQgLhLgOgoQgIgagGghQgIgsAAhJIAAAAQAAg2AIhIIAIhAQAKhJAQhBQAWhYAfhGQA3h6BPg2QB6h0DcBGQA9AcBjA0ICCBFQAjAOAgAXQBXAwBXAyIAAABQBHAlA+AdQAtARAvAXIApAVQAcBFAuBGQBDBwB8BGQAxAbA0ATIAqANIAdAaIASACIAmAHQA3AKA6AEQAmAGAsAKIAZAGQBXAWBwA9IBUBPQAYARAXAUQArAkArApIAFAEQAqAnAkApQAtA7AmAcQAxAyAmAkQBNA+AQAfQCUCGBdCMQAXAeAUAdQB1C0ACCEQABAIgFArIgOB0IgJA2IgCAhQgEA0gIA2IgNBOQgKApgKA7IgDAPQgUBXgZBIQgXCGgtBKQgoBOg8AsQg9AthMAEIgpAAIgdAAg");
	this.shape_390.setTransform(1056.8,1071.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#DB788A").s().p("AqDNmQj1imk0kBIhbhLQgMg4gJg8QgOhdgDhNQgOADgQAAQh5AAgXinQgHg0ABhTQABhagBgPQgRizgahBQgTgtAAh2QAAhHAOhnQAUicArh5QCAlsEcBCQCgBDIdEyIAlAVQAwDzD9CYQB+BNDCBAQBZAeCCAjQBgBICABXQFxD5AbAUQDWCYBoB2QCCCUAACFIgTCfQgbC4grCaQiJHpj0AAQtEAAuJpog");
	this.shape_391.setTransform(1051.2,1054.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#DB788A").s().p("AmoOTQj2iSkdjlQhignhQgvQgvhBgthQQgZhdgShRQgdgMgVgFQh6gMgdiZQgHgxABhOQABhagBgOQgRizgahBQgTgtAAh2QAAhIAOhnQAUicArh5QCAlrEcBBQCgBDIdEzIAlAVQAwDyD9CZQB+BNDCBAQBWAdB9AiQBjBHB2BPIFiDwQDECLBjBvQCHCQALB+QAIAJgKCSQADDCgmCwQh6G4jlALIgiABQrjAAsdoTg");
	this.shape_392.setTransform(1048.2,1050.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#DB788A").s().p("AjZPAQj3h/kGjIQiPgjh7g+QhRhJhRhmIhFiyQgrgZgbgMQh6gYgliLQgFguAAhHQAChagCgPQgRizgahAQgSguAAh1QAAhIANhnQAUicArh5QCAlsEdBCQCfBDIeEyIAlAVQAvDzD9CZQB/BNDBBAQBUAbB4AhQBlBGBsBIIE4DTQCyB/BgBmQCLCNAVB2QARARgCCHQAhDMghDGQhrGHjVAXIhEABQqDAAqxm+g");
	this.shape_393.setTransform(1046.4,1046.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#DB788A").s().p("AgRPsQj6hsjvirQi7geimhOQh0hSh0h6Ihfi2Qg6gogggRQh7gkgrh9QgFgrAAhBQAChagCgPQgRizgahAQgSguAAh1QAAhIANhnQAUicArh5QCAlsEdBCQCfBDIeEyIAlAVQAvDzD9CZQB/BNDBBAQBRAaBzAgIDKCGIENC2QChByBbBeQCQCJAgBvQAaAXAGB9QA/DXgcDcQhcFVjFAjQgzADgyAAQojAApFlrg");
	this.shape_394.setTransform(1045.4,1042.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#DB788A").s().p("ACzQXQj7hYjXiOQjogZjRheQiXhbiXiPQg6hahAhfQhIg3glgXQh8gvgyhwQgEgoAAg7QAChagCgOQgRizgahBQgSgtAAh2QAAhIANhnQAUicArh5QCAlrEdBBQCfBDIeEzIAlAVQAvDyD9CZQB/BNDBBAQBOAaBuAeIDDB+IDiCZQCQBmBXBWQCUCFArBoQAiAdAPBzQBdDhgYDyQhMEki1AuQhEAHhEAAQnBAAnbkag");
	this.shape_395.setTransform(1044.6,1038.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#DB788A").s().p("AF3RBQj9hEi/hyQkVgUj7huQi6hji7ikIiTi+QhXhEgqgdQh9g7g5hiQgDglAAg1QABhagBgOQgRizgahBQgTgtAAh2QAAhIAOhnQAUicArh5QCAlrEcBBQCgBDIdEzIAlAVQAwDyD8CZQB/BNDCBAQBLAZBpAdQBtBEBOAyIC4B8QB/BZBSBNQCZCCA2BgQAqAlAXBpQB7DrgTEIQg9DyilA6QhWANhWAAQlfAAlvjLg");
	this.shape_396.setTransform(1043.8,1035.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#DB788A").s().p("AI7RqQj+gxiqhWQlAgOkmh+Qjchsjfi5IiujBQhlhTgvgiQh+hIhAhTQgCgjAAgvQABhZgBgPQgRizgahAQgTguAAh1QAAhIAOhnQAUicArh5QCAlsEcBCQCgBDIdEyIAlAVQAwDzD8CZQB/BNDCBAQBIAYBkAbQBwBDBEArICOBfQBtBNBOBFQCdB+BBBZQAyArAgBfQCZD1gOEeQguDBiWBGQhnAVhoAAQj8AAkEh+g");
	this.shape_397.setTransform(1043.1,1031.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#DB788A").s().p("AL/SOQkBgdiSg5QltgKlRiOQj/h0kBjOQhbhXhuhuQh0hhg0goQh+hThHhFQgCggAAgqQAChZgCgOQgRizgahBQgSgtAAh2QAAhIANhnQAUicArh5QCAlrEdBBQCfBDIeEzIAlAVQAvDyD9CZQB/BNDBBAQBFAXBgAbQByBCA7AjIBiBCQBcBCBKA7QCiB7BMBRQA6AyAoBVQC4D/gKE0QgfCQiFBRQh6Anh6AAQiYAAiZg7g");
	this.shape_398.setTransform(1042.5,1028.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#DB788A").s().p("APCSqQkCgKh7gcQmbgFl7ieQkhh8kmjkQhmhWh8hyQiDhvg5gvQh/hfhOg3IgBhAQAChZgCgPQgRizgahAQgSguAAh1QAAhIANhnQAUicArh5QCAlsEdBCQCfBDIeEyIAlAVQAvDzD9CZQB/BNDBBAQBDAWBaAZQB1BBAwAdIA5AlQBKA1BGAzQCmB3BXBJQBDA6AwBKQDVEJgEFKQgQBfh2BdQiNBJiMAAQgwAAgxgIg");
	this.shape_399.setTransform(1041.9,1026.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#DB788A").s().p("AhPQIQlEiFlJj4QhxhWiMh3QiRh9g+g0QiBhrhUgpIAAg3QABhZgBgPQgRizgahBQgTgtAAh2QAAhHAOhnQAUicArh5QCAlsEcBCQCgBDIdEyIAlAVQAwDzD8CYQB/BNDCBAQA/AWBVAXICfBWIAOAIQA5AoBBAtIEMC0QBMBAA4BAQD0ETAAFhQAAAthnBpQhtBvhiAmQkEAKhkAAQnIAAmlitg");
	this.shape_400.setTransform(1041.2,1026.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#DB788A").s().p("AA3QEQg8gWg9gaQhigqhjgzQjUhvjNiTQhxhQh/hmIjCiZIgEgDIghgWIgbgcQg7g+gtgcIgMgIIgBg0QAAhQgCgRQgLhpgOg9QgJglgJgZQgQguAAhsQAAhEANhgIAKhIQARhnAdhWQAhhkAuhEQBsiiCvAVQAqAJBCAaIALADQAvAKBIAfQBeApCBBMQBMAqBuA5IAIAFIAbAOQArB0BLBeQA7BIBxBVQAjAWAnAYQBfA6BzAwQA2AaA/AXIANAEICVBRIAMAIIAzAiIBBArICQBfIBqBOQA4AwAvAyIAUAXQDSDrAkEPQABAigCAjQgDAxhWBfQhfBshWAsIgLABQhZAOhIANQhjADg5AAIgHAAQlmAAlShig");
	this.shape_401.setTransform(1030.1,1020.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#DB788A").s().p("AA6PRQg5gWg4gZQhagohdgwQjMhqi7h/QhyhKhyhWIi4iDIgEgDIgggQIgUgcQgshGgigYIgKgJIgCgwQgBhHgDgWQgLhhgPg4IgQg7QgNgtAAhiIAAgBQAAhAALhZQAEgiAFgiQAQhgAZhRQAdhdAohDQBdidCWgDQAngBA7AOIAHAAQAkgKBCAVQBVAbB9BNQA9AhByA4IAHAEIAaANQA9BkBABSQAtA4BvBjQAeAYAjAYQBXBBBgAyQAwAiAxAXIAMAEQBdAzAvAbIAMAGIAvAgIA9AnICIBZQA0AnAsAkQAzAuAsAwIATAVQDLDiAwDpIgDBBQgIA0hGBUQhPBphLAyIgJACQhLAYhAAWIiTADIgSAAQlHAAk6hHg");
	this.shape_402.setTransform(1019.2,1014.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#DB788A").s().p("AA8OxIhngvQhUgmhWgtQjFhliohqQhyhFhmhGIiuhuIgFgBIgfgLIgOgdQgchNgYgUIgGgKIgDgtQgCg8gDgaQgMhcgPgyIgPg4QgLgtAAhYIAAgBQAAg8AKhTIAIg+QANhZAXhMQAYhXAihCQBQiXB8gbQAkgNAzADIAEgDQAZgeA7AKQBMAPB5BNQAuAZB3A1IAHADIAYAMQBPBVA0BGQAfAoBtBxIA6AyQBOBJBMAzQArApAkAYIALAFICCBJIAKAGIAsAcIA6AlICABQQAtAmAqAlQAsArAqAuIASATQDDDYA+DFQgDAegEAdQgMA4g1BKQhBBkg/A5IgGAEIh3BBIiKADIglAAQklAAkdgsg");
	this.shape_403.setTransform(1008.3,1007.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#DB788A").s().p("AA/OZIhfgtQhMglhQgpQi9hgiWhWQhzg/hag2QiMhOgYgLIgDgBIgfgEIgHgeQgNhUgNgRIgEgLIgDgpQgDgzgFgeQgMhWgPgtQgIgWgGgdQgIgtgBhOIAAgBQAAg5AJhLIAHg7QAMhSAShHQAUhPAdhBQBBiSBig0QAigWArgJIACgGQAMgyA2AAQBDAAB1BPQAeAQB9AzIAFADIAXAKQBiBFAoA7QARAXBrCAIAwA0QBIBPA3A2IA8BJIAKAFIB5BFIAKAFIAoAaIA2AgIB3BJQAmAjAnAnQAoAoAoAsIARASQC7DOBLCgIgLA2QgPA7glBAQgyBhg0A/IgFAEQgtArg0AqIiAADIhaAAQjyAAjvgSg");
	this.shape_404.setTransform(997.3,998.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#DB788A").s().p("AijMLQp3lAgdAAIghABIAAgfQABhagBgOQgSizgZhBQgTgtAAh1QAAhIANhnQAVicAqh5QBHjJB3hGIgBgJQAAhFAygLQA5gNBxBQQAPAHCGAzQCGA6AgA0QAEAICQDCQB8CsARA0IClBhIChBeICMCYQC/DPBbCAQg5DQhLB+QgeA0guA1IqFALIjlh1g");
	this.shape_405.setTransform(986.4,990.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#DB788A").s().p("AhGKDIgygOQh3gghbgcQkchggdAQIAAABIgbAGIgCgNIAAgHQgDg8gIgIQgGgXgHgVQgPhPgRgxIgLgeQgLgXgFgrIgDgdIAAgCIgBgvIABgmQACgxAKhEQASiEAmhzIANgkQASgzAVgrQAohRA1goIAAgIQAAgrASgSQAIgIAMgFQAtgWBZAvQAPgEBqAcQBrAgAgAaQAHgCA9BEIAJAIQANALAQAQIAXAXIB9CIIAlAOQAtAUA3APIAVAHQA7ASA0AXIAKAHQA1AjBDA/QATASATATQAiAjAdAjQAaAgAUAdQA0A/AVBIQgqCOg4BvIgXAsQgcAvgmAvQh4AXh2ASQhEAKhEAOIhUAPIgMABQgXADgXAHQg8gWhDgQg");
	this.shape_406.setTransform(967,983.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#DB788A").s().p("AnmH1IgCgDQgHgfgOgBIgUgbQgTg+gSguIgNgZQgMgUgFgkIgDgaIAAgBQgCgTABgWIAAgBIABgiQACgoAKhAQAQhqAihtIAKghQAMgtAPgoQAbhKAjgnIAAgHQABglAMgRQAGgIAIgGQAhgfBBAPQAPgQBOAGIBxAGQALgLAwAlIAHACQAMADANAGIASAIQBPAyAegDIAeACQAjAIAsgIIAQgBQAvgFApAIIAIADQAzAIA8AuQASAOASAQQAeAdAYAgQAXAfANAaQAjAsgCBRQgmByg2BqIgUAmQgYArgeAqQheAqhXAhQgyAUg1AaIg+AbIgJADQgQAFgRANQgqgCgvAMQgSACgSABQhUAPhBACQjJgIgjAgIgBACIgVAKIgCgFg");
	this.shape_407.setTransform(947.7,979.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#DB788A").s().p("AlzIrIgqhZIgOgTQgMgSgGgdIgDgWIgBgBIABgBQgCgQAAgTIAAgBIACgcQABggAKg7QAOhTAehnIAJgeIANhKQAOhEATgmIgBgGQABggAHgPQADgHAFgHQAUgoAqgSQAPgcAygRQA0gWAjgYQAPgSAiAFIAHgCQAJgIAKgEIAPgGQA4gKAkgfQALgGANgEQAXgFAigfIALgIQAigdAegHIAHgCQAxgSA1AeQARAJAQANQAbAXAUAeQATAbAGAYQASAZgaBaQgiBYgyBlIgSAiQgUAlgWAkQhDA+g6AwQggAdgkAnIgpAnIgFAEQgKAIgLATQgYARgcAoIgVAWQgyA8gnAgQh2BQgpAwIgBADIgPAPIgDACIgDABQgMgBgTAFQgMgDgQgGg");
	this.shape_408.setTransform(929.1,970.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#DB788A").s().p("AkNKAQgXgRgKghIgEgTIAAgBIAAAAQgCgPABgQIACgYQAAgzA2jRIABhBQABhwAEgfQASiiCTi2IAGgHIAOgeQAthhA6hMQAPgUAchDQAZg8AVgVQA+g7A9ArQAYAQAPAbQAPAaAAAVQAAAJh/D9QhGCMgrBhIgiBaIgUAyIgCAGQgHAZgPBzQgUCHgPBJQgiCngxBAQgGAUgIAOQgbAzg0ACQgagegXgog");
	this.shape_409.setTransform(911.4,958.7);
	this.shape_409._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_335}]},73).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_409}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_409).wait(150).to({_off:false},0).wait(56));

	// right atrium blood 1
	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("rgba(219,120,138,0.996)").s().p("AhlA7QgIgTAAgoQAAg8AigdQAfgZAsAEQAsAFAfAdQAjAfAAAqQAAAigWAhQggAvg8AAQhLAAgWg0g");
	this.shape_410.setTransform(1079.9,810.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("rgba(219,120,138,0.996)").s().p("AgbCRIgPgFQgSgGgQgIQgOgFgHgHQgJgIgIgKIgHgLIgJgSQgFgKgCgKQgDgIgBgHQgCgIAAgJQAAgaANgjQAMgjAUgWQALgMALgHIASgKQAKgFANgCIAMgDIAOgCQAcgBAfALQAXAJASAOQAVAOANAQQASAVABAZIAAAKQgBAMgEANQgHATgKARIgPAXIgJALQgLAOgLALQgKAKgNAKQgMAJgMAGQgLAFgMAEIgCABQgMAFgMAAIgHAAg");
	this.shape_411.setTransform(1079.2,811.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("rgba(219,120,138,0.996)").s().p("AgWC0IgSgHIgqgQQgUgHgHgGQgNgIgKgNIgJgMQgHgJgHgLQgIgMgEgLQgGgIgCgJQgDgJAAgLQAAgbATgxQAQgsAWgbQAMgRAMgJQAIgIAMgHQAMgHAPgFQAEAAAJgFIARgFIABAAQAggDAqAMQAdAKAWAOQAcAPAQARQAcAYABAeIgBANQgCAOgIARQgKAWgNATIgVAcIgKAOIgaAhIgYAcQgNAOgLAIQgLAJgNAIIgCACQgOAMgRAAIgFgBg");
	this.shape_412.setTransform(1078.7,812.5);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("rgba(219,120,138,0.996)").s().p("AgQDYIgWgJQgagLgYgIQgagHgHgHQgQgIgOgPIgLgOIgRgWQgNgNgFgMQgIgKgDgJQgEgLAAgNIAAAAQAAgbAYhAQATg0AYghQAOgVAMgLQAJgKANgKQAOgKARgGQAEgBAMgHQAKgGAKgCIABAAQAlgGAzAMQAjALAcAPQAiARAVATQAjAbABAiQABAHgCAIQgDARgKATQgOAcgRAVIgZAgIgNARIgdAoIgaAkQgOASgLAMQgKAMgNAMIgDADQgRASgUAAIgDAAg");
	this.shape_413.setTransform(1078.1,813.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("rgba(219,120,138,0.996)").s().p("AgLD8IgZgLQgegNgcgJQgggIgHgGQgTgJgRgRIgNgPIgWgYQgQgQgHgMQgKgLgEgLQgGgLAAgPIAAgBQAAgbAfhPQAWg9AagmQAPgZANgOQAKgMAOgMQAQgNATgIQAEgBAOgKQALgHAMgDIABAAQApgJA+ANQApAMAhAQQAoASAZAUQAsAeABAnQAAAIgCAKQgFASgMAXQgRAggUAXIgfAlIgPAUQgTAZgNAWIgcAsIgZAlQgJAQgPARIgDADQgTAZgXAAIgDAAg");
	this.shape_414.setTransform(1077.5,814.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("rgba(219,120,138,0.996)").s().p("AgFEgIgcgOQgigQghgJQgmgIgGgGQgXgKgUgSIgPgRIgagaQgVgSgIgNQgMgMgGgMQgGgNAAgQIAAgBQAAgcAkhdQAbhGAbgrQARgeANgQQAKgOAQgPQASgPAUgLQAFAAAQgNQAMgIAOgFIABAAQAvgMBHAOQAvANAlAQQAwAUAcAVQA0AiABAsQABAJgDALQgGAUgPAaQgVAlgXAaQgTATgQAVIgSAXQgVAdgOAaIgeA0IgaAtQgIATgPAVIgDAEQgUAggcAAIgCAAg");
	this.shape_415.setTransform(1076.9,815.4);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("rgba(219,120,138,0.996)").s().p("AAAFEIgfgQQgmgSglgJQgsgJgGgGQgbgLgWgUIgSgSIgegdQgYgTgKgNQgPgOgGgNQgHgOgBgSIAAgBQAAgcAqhsQAfhPAcgxQATgiANgSQALgQASgSQATgRAXgNQAEgBASgPQAOgKAQgFIABAAQAzgPBSAOQA0AOAqARQA3AVAgAXQA9AkABAyQAAAJgEANQgGAWgSAdQgZApgaAdQgVAVgUAYIgTAZQgYAhgPAdIggA8QgQAhgJAUQgIAXgQAZIgDAFQgWAmggAAIgBAAg");
	this.shape_416.setTransform(1076.3,816.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("rgba(219,120,138,0.996)").s().p("AAFFoIgigSQgqgUgpgKQgygKgGgGQgegLgZgWIgUgTIgjgfQgcgVgLgOQgRgPgHgOQgJgPAAgVIAAAAQAAgdAvh6QAihYAfg3QAUgnAOgTQALgTAUgUQAUgUAZgPQAEgBAVgRQAPgMARgGIABgBQA4gRBcAPQA7APAvASQA9AWAkAYQBFAoABA2QABAKgFAOQgHAZgVAgQgcAtgeAfQgYAXgVAbIgWAcQgaAlgQAhIgiBDQgRAlgJAYQgHAagRAdIgDAGQgXAtgjAAIgCAAg");
	this.shape_417.setTransform(1075.7,817.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("rgba(219,120,138,0.996)").s().p("AAKGMQgPgJgWgLQgugXgtgKQg4gLgGgFQghgMgcgYIgXgVIgmghQgggXgNgOQgTgQgJgPQgKgRAAgXIAAAAQAAgdA2iJQAlhhAgg8QAWgrAOgWQAMgVAWgWQAWgXAbgRQAEgBAWgTQARgOATgHIABgBQA9gUBmAQQBBAPA0ATQBDAYAoAZQBOArABA7QAAALgFAPQgIAbgYAjQgfAygiAhQgaAbgYAcQgMAPgLAPQgeApgQAlIgkBLQgSAqgIAbQgHAegRAhIgDAGQgZA0gnAAIgCAAg");
	this.shape_418.setTransform(1075.1,818.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("rgba(219,120,138,0.996)").s().p("AAQGwQgRgKgYgMQgygZgxgLQg+gLgHgGQgkgMgegaIgZgWIgrgkQgkgYgOgPQgWgSgJgQQgMgSAAgYIAAgBQABgcA7iZQAphqAihAQAXgxAPgYQANgWAWgaQAYgZAdgTQAEAAAZgXQASgPAVgIIABgBQBBgXBwAQQBHARA5AUQBKAZAsAaQBXAuABBAQgBAMgFARQgKAdgaAmQgjA2glAkQgdAcgaAfQgNAQgNARQgfAtgRAoIgmBTQgTAvgHAdQgHAigRAlIgEAHQgbA7gqAAIgBAAg");
	this.shape_419.setTransform(1074.6,819.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("rgba(219,120,138,0.996)").s().p("AAVHVQgTgMgZgNQg2gbg2gMQhDgLgGgGQgogMghgcIgcgYIgvgmQgngagQgQQgYgSgLgSQgMgTAAgaIAAgBQAAgdBBinQAthzAjhGQAZg1APgaQAOgZAYgbQAagcAfgVQADgBAbgZQAUgRAWgJIABgBQBGgaB7ASQBNARA9AVQBRAaAwAcQBfAxABBEQAAAOgGASQgLAfgdApQgnA6gnAnQghAegbAhQgPASgNASQgjAxgSAsIgnBbQgUAzgHAhQgGAlgSApIgEAIQgcBCguAAIgBAAg");
	this.shape_420.setTransform(1074,820);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("rgba(219,120,138,0.996)").s().p("AAaH5QgTgNgbgOQg6geg6gMQhJgMgHgFQgrgNgkgeIgegZIgzgoQgrgdgRgQQgbgUgMgSQgNgVgBgcIAAAAQAAgeBIi1QAwh8AlhMQAag5AQgcQAOgbAagfQAcgeAggXQAEgBAdgbQAWgTAXgKIABgBQBLgdCEASQBUATBCAVQBXAcA0AdQBnA0ABBJQABAPgHATQgMAhgfAtQgrA+grApQgjAhgeAjIgeAnQglA0gTAwIgpBjQgVA4gGAkQgGAogTAtIgEAJQgdBJgxAAIgCAAg");
	this.shape_421.setTransform(1073.4,821);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("rgba(219,120,138,0.996)").s().p("AAgIdQgVgOgdgQQg+gfg+gNQhPgNgHgFQgugNgnggIgggbQgagVgegVQgugegTgRQgdgVgNgTQgPgWAAgeIAAgBQAAgeBNjEQA0iFAnhRQAbg9ARgfQAOgdAcghQAdghAjgZQADgBAggdQAXgVAZgLIABgBQBPggCPATQBaATBHAXQBeAcA4AfQBvA4ABBNQAAAQgHAUQgNAkgiAvQguBDgvArQgmAjggAmQgRAUgPAWQgoA4gTAzIgrBrQgWA8gGAnQgEAsgUAyIgEAKQgfBPg0AAIgCAAg");
	this.shape_422.setTransform(1072.8,821.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("rgba(219,120,138,0.996)").s().p("AAlJBQgWgPgfgRQhCgihDgNQhUgNgHgFQgygOgpgiIgjgcQgbgWghgXQgygggUgRQgggWgNgVQgRgXABggIAAgBQAAgdBTjUQA3iNAphXQAchCASggQAPggAdgjQAegkAlgbQADgBAiggQAZgWAagMIACgBQBTgjCaAUQBgAUBLAXQBkAeA8AgQB5A7ABBSQAAARgJAWQgNAlglAzQgyBHgyAuQgoAlgjApQgRAUgRAXQgqA8gVA3IgsBzQgXBBgFAqQgFAvgUA2IgEALQggBWg4AAIgCAAg");
	this.shape_423.setTransform(1072.2,822.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("rgba(219,120,138,0.996)").s().p("AArJlQgYgQghgRQhGglhHgNQhagOgHgFQg1gPgtgkIgkgdQgegXgigYQg2gigWgRQgigYgPgWQgRgYAAgiIAAgBQAAgeBZjiQA7iWAqhcQAfhHARgiQAQgiAfgmQAggmAngdQADgBAkgjQAagXAcgNIACgBQBYgmCjAUQBmAVBQAYQBsAfBAAiQCAA+ABBXQAAASgJAXQgPAngnA2Qg2BMg0AwQgsAngkArQgUAWgRAZQgtA/gVA7IguB7QgYBFgFAuQgDAygVA6IgFAMQghBcg8AAIgBAAg");
	this.shape_424.setTransform(1071.6,823.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("rgba(219,120,138,0.996)").s().p("AAwKJQgYgQgkgTQhKgnhLgNQhggQgHgEQg4gQgwgmIgmgeQgggYgkgZQg7gkgXgSQgkgZgQgXQgSgZgBgkIAAgBQAAgeBfjxQA/ifArhhQAhhMASgkQAQgkAhgpQAigoApggQADAAAmgmQAbgZAegOIACgBQBcgpCuAVQBsAWBVAZQByAgBEAjQCJBCAABcQABASgKAZQgQApgqA5Qg5BQg4AyQgvApgmAvQgVAXgSAaQgvBDgWA+IgwCDQgZBKgEAxQgDA2gWA+IgEAMQgjBjg/AAIgCAAg");
	this.shape_425.setTransform(1071,824.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("rgba(219,120,138,0.996)").s().p("AA2KtQgagRglgUQhOgqhQgNQhmgQgHgEQg8gRgygoIgoggQgigZgngaQg+glgYgTQgogagQgYQgUgbAAglIAAgBQAAgfBkj/QBDipAthmQAihQATgnQAQgmAjgrQAjgrArgiQADAAApgoQAcgbAfgPIADgBQBggsC4AWQBzAXBZAZQB5AiBIAkQCRBFABBhQAAATgKAaQgRArgsA9Qg+BUg7A1QgxArgpAxQgVAYgUAbQgxBHgXBCIgyCLQgaBPgDA0QgDA5gWBCIgFANQgkBqhDAAIgBAAg");
	this.shape_426.setTransform(1070.4,825.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("rgba(219,120,138,0.996)").s().p("AA7LSQgbgTgngVQhSgshUgOQhsgQgHgEQg/gRg1gqIgrgiQgkgagpgbQhBgngbgUQgpgbgRgZQgWgcAAgnIAAgCQAAgeBqkPQBHixAuhsQAkhUATgpQARgoAlguQAkguAugjQADgBAqgqQAegdAhgQIACgBQBlguDDAWQB5AYBeAaQB/AjBMAmQCaBIAABlQABAVgLAbQgSAtgvBAQhBBZg/A3Qg0AtgrAzQgXAagUAdQg0BKgXBGIg0CTQgbBTgDA3QgCA9gXBGIgFAOQglBxhGAAIgCAAg");
	this.shape_427.setTransform(1069.9,826.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("rgba(219,120,138,0.996)").s().p("ABBL2QgcgUgqgWQhWguhYgPQhxgRgIgEQhCgRg4gsIgtgjQgmgcgrgbQhGgqgbgUQgsgdgTgZQgVgegBgpIAAgBQAAgfBwkdQBJi6AyhyQAlhYATgrQARgqAngxQAmgwAwgmQACgBAtgsQAfgfAjgRIADgBQBpgxDMAWQCAAaBiAbQCGAkBQAnQCjBLAABqQAAAWgMAcQgSAwgyBDQhFBdhCA5Qg2AvguA2QgXAbgWAeQg3BPgYBJQgRA0gkBnQgcBYgCA6QgCBAgYBLIgEAOQgnB4hKAAIgBAAg");
	this.shape_428.setTransform(1069.3,827.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("rgba(219,120,138,0.996)").s().p("ABGMaQgdgVgsgYQhagwhcgPQh4gSgHgDQhFgSg7guIgwgkQgngdgugdQhJgrgdgVQgugegUgbQgXgfgBgqIAAgCQAAgfB2ksQBNjDAzh3QAmhdAUgtQATgsAogzQAogzAxgoQACgBAvgvQAhggAkgSIADgBQBug0DXAXQCFAaBoAcQCNAmBUAoQCqBOAABvQABAXgNAeQgUAxg0BGQhIBihFA7Qg6AygvA4QgZAegWAeQg6BSgZBNQgSA3glBsQgdBdgCA9QgBBEgYBOIgFAQQgoB+hNAAIgCAAg");
	this.shape_429.setTransform(1068.7,828.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("rgba(219,120,138,0.996)").s().p("ABMM+QgfgWgugYQhegzhggPQh9gTgIgDQhJgTg9gwIgyglQgqgegvgeQhOgtgegVQgxgggUgcQgZggAAgsIAAgCQAAgfB8k7QBQjMA1h8QAohiAUgvQATguAqg2QApg2A0gpQACgBAxgyQAjgiAlgSIADgCQBzg3DhAYQCLAbBsAdQCUAnBYAqQCzBRAAB0QAAAXgNAgQgVAzg3BKQhMBlhIA+Qg9A0gxA6QgaAfgXAgQg8BWgaBRQgSA5gnBxQgeBigBBAQgBBHgYBTIgGAQQgqCFhRAAIAAAAg");
	this.shape_430.setTransform(1068.1,829.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("rgba(219,120,138,0.996)").s().p("ABSNiQghgXgwgaQhig0hkgQQiDgUgIgDQhMgThAgyIg0gnQgsgfgygfQhRgvgggVQgzghgVgdQgaghAAgvIAAgBQgBggCClJQBUjVA2iCIA/iXQATgxAsg4QArg4A1gsIA1g1QAlgkAngTIADgCQB3g6DrAZQCSAcBxAeQCaAoBcArQC7BUAAB5QAAAYgNAhQgWA2g6BMQhPBqhMBAQg/A2gzA9QgcAhgYAhQg/BagbBUQgSA8goB2QgfBngBBDQAABLgZBWIgFASQgsCLhUAAIAAAAg");
	this.shape_431.setTransform(1067.5,830.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("rgba(219,120,138,0.996)").s().p("ABXOHQgigYgzgbQhlg3hogRQiKgUgHgDQhPgThDg0Ig3gpQguggg0ggQhVgxghgWQg1gigXgeQgbgjAAgwIAAgCQAAggCHlYQBYjeA3iGIBBifQAUgyAtg7QAtg7A4gtIA3g4QAlglApgVIADgCQB8g8D2AZQCXAdB2AfQChApBgAsQDEBYAAB9QAAAagOAiQgXA4g9BPQhTBuhPBDQhCA4g1BAQgdAhgZAjQhCBegbBYQgTA+gpB8QggBrAABGQAABPgaBaIgFASQgtCThXAAIgBAAg");
	this.shape_432.setTransform(1066.9,831.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("rgba(219,120,138,0.996)").s().p("ABcOrQgjgZg0gdQhpg5htgRQiPgUgIgDQhTgUhFg2Ig5gqQgwgig2ghQhZgygjgXQg4gjgXgfQgcgkgBgzIAAgBQAAggCOlnQBbjnA5iMIBDilQAVg1Aug9QAvg+A5gvIA6g6QAngnAqgWIADgCQCBg/EAAaQCdAeB7AfQCnArBkAtQDMBbABCCQAAAbgPAjQgYA6hABTQhWByhSBGQhFA6g4BCQgeAigaAlQhEBhgcBcQgTBBgrCBQghBwABBJQABBSgbBfIgGATQguCZhbAAIgBAAg");
	this.shape_433.setTransform(1066.3,832.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("rgba(219,120,138,0.996)").s().p("ABiPPQgkgag3geQhtg8hxgRQiVgVgHgDQhXgVhIg3Ig7gsQgygig5giQhcg1gkgXQg7gkgZghQgdglAAg0IAAgCQAAggCTl2ICamBIBFisQAVg3AwhAQAxg/A7gyIA8g9QAogoAsgXIADgCQCFhCEKAbQCkAeB/AgQCvAtBnAuQDVBfAACHQAAAbgPAlQgZA8hCBWQhbB2hVBIQhIA8g6BFQgfAkgbAlQhGBmgdBfQgUBDgsCHQgiB0ABBNQACBVgcBjIgFAUQgwCghfAAIAAAAg");
	this.shape_434.setTransform(1065.7,833.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("rgba(219,120,138,0.996)").s().p("ABnPzQglgbg5gfQhxg+h1gRQibgWgHgDQhagVhLg6QgegWgggWQgzgkg7gjQhgg3gmgYQg9glgagiQgegmgBg2IAAgCQAAghCZmEICgmQIBGiyQAWg5AyhCQAyhDA+g0IA9g/QAqgqAugYIADgBQCKhGEUAcQCqAfCEAhQC1AuBrAwQDeBhAACMQAAAcgQAnQgbA+hEBZQheB7hZBKQhKA+g8BHQggAlgcAoQhKBpgdBiQgVBGgtCNQgjB5ACBPQACBZgcBnIgGAVQgxCmhiAAIgBAAg");
	this.shape_435.setTransform(1065.1,834);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("rgba(219,120,138,0.996)").s().p("AALPbQh1hAh5gSQihgXgIgCQhcgWhPg8Ig/guQg2glg9gkQhkg4gngZQg/gngbgiQgggoAAg4IAAgCQAAghCemTIClmdIBJi5QAWg7A0hGQAzhFBAg1IBAhCQArgsAvgZIAEgCQCOhIEeAcQCwAhCJAiQC8AvBvAxQDmBlAACQQAAAdgRAoQgbBAhHBcQhiCAhcBMQhNBAg+BKQgiAngdAoQhMBtgeBnQgVBIguCSQgkB9ACBTQADBcgdBrIgGAWQgyCthmAAQgngcg7ggg");
	this.shape_436.setTransform(1064.6,834.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("rgba(219,120,138,0.996)").s().p("AANP9Qh5hCh9gTQingXgHgCQhhgXhRg9QgfgYgjgYQg3gmhAglQhng6gpgZQhCgogcgkQgggpgBg6IAAgCQAAghClmiICqmsIBKi/QAXg+A2hHQA1hIBCg4IBBhEQAtguAxgZIAEgCQCShLEpAdQC2AhCOAjQDCAwBzAzQDvBnAACWQAAAegSApQgcBChKBgQhlCDhgBPQhQBChABMQgiAogeArQhPBwgfBqQgVBLgwCXQglCDADBVQADBggdBvIgHAXQgzC0hqAAQgogeg9ghg");
	this.shape_437.setTransform(1064,835.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("rgba(219,120,138,0.996)").s().p("AAQQfQh9hFiCgTQitgYgHgCQhkgXhUg/QhVhBhqg+Qhsg8gqgZQhEgqgdgkQgigsAAg8QAAgiCqmwQDGnxA2iQQAYg/A3hLQA3hKBDg6IBEhGQAugwAzgaQCWhRE4AeQHABSDPBaQD2BrAACaQAABQh8CgQhpCIhiBRQh/BphZB/QhRB1ggBtQgWBOgxCcQgmCHAEBZQAEBtglCBQg1C7htAAQgpgfg/gig");
	this.shape_438.setTransform(1063.4,836.8);
	this.shape_438._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_438}]},1).to({state:[]},1).to({state:[{t:this.shape_410}]},104).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_438).wait(29).to({_off:false},0).wait(43).to({_off:true},1).wait(132).to({_off:false},0).wait(1));

	// right atrium blood 2
	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("rgba(219,120,138,0.996)").s().p("AhQAzQgPgbAAgZQAAhdBgAAQA7AAAXAmQANATAAAaQAAAUgbAnQgiAvgmAAQg2AAgXgsg");
	this.shape_439.setTransform(1141.4,814.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("rgba(219,120,138,0.996)").s().p("AgVB8QgKABgLgDQgLgDgJgFQgHgEgIgHIgMgMIgMgOIgBgBQgXgWgGgUQgCgEAAgFIgBgIIAAgBQAAgMADgJQABgHAFgIIANgWQAKgRAPgPQAegeAtgMIAKgCQAcgJAaAGQAdAHAWAYIAGAHQAQAVAGAbIACAJQAEAPgGAOQgBAGgCAFIgEAGIgTAaIgFAGQgGAIgIAHIgbAXQgTAOgSAJIgTAHIgGACQgIACgIAAIgCAAg");
	this.shape_440.setTransform(1140.6,815.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("rgba(219,120,138,0.996)").s().p("AguCbQgNgCgMgHQgKgFgJgIIgRgPIgQgQIgBgBQglgYgHgVQgDgEgBgGIgBgLIAAgBQAAgQAEgLQADgIAIgIIATgZQAPgUATgUQAngpAwgWIALgEQAhgSAiAFQAjAGAeAdIAJAJQAVAZALAhIAEALQAHAUgFARQgBAHgDAGIgGAHIgYAgQgCAEgFAEQgIAJgLAJIgkAcQgXASgVANIgWAMIgJAEQgKAGgKABIgKAAQgIAAgJgBg");
	this.shape_441.setTransform(1139.8,817.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("rgba(219,120,138,0.996)").s().p("AgyC8QgRgCgOgIQgMgFgMgLIgUgSIgVgRIgBgBQgxgbgKgUQgFgGgBgGIgBgOIAAAAQAAgUAFgNQAEgKAMgKQAQgPAKgNIAqgvQAvg1A1gfIAMgHQAmgaApAEQAqAGAnAjIAKAKQAbAdAQAnIAFANQALAZgFATQgBAKgDAGQgCAEgFAFQgQAQgPAWIgIAJQgKAKgOAKIgtAhIg0AoQgLAGgOAKIgKAGQgMAKgMACQgHACgJAAIgQgBg");
	this.shape_442.setTransform(1139,818.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("rgba(219,120,138,0.996)").s().p("Ag2DdQgUgCgRgIQgOgHgOgMIgYgUQgNgMgMgIIgCgBQg+gdgLgVQgHgGgCgHQgBgFAAgLIAAgBQAAgXAHgPQAFgLAPgMQAUgRAMgNIAzg3QA4hAA5gqIANgIQArgkAwAEQAxAFAvApIANAMQAgAhAVAsIAHAPQAOAegEAVQgCAMgEAIQgCAEgGAFQgUATgRAaQgDAEgHAGQgLALgRAMQgkAYgSAOIg8AwQgLAHgRAOIgLAIQgOANgNAEQgLADgNAAIgOgBg");
	this.shape_443.setTransform(1138.3,820.4);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("rgba(219,120,138,0.996)").s().p("Ag6D/QgXgDgUgJQgPgHgRgOIgcgXQgPgNgOgIIgCgBQhLgggOgVQgIgHgCgIQgCgGAAgMIAAgBQAAgcAJgQQAGgNATgNQAYgTAPgOQAcgcAegiQBBhMA9g0IAOgKQAwgsA4ADQA4AEA3AuIAPAOQAlAmAaAyIAIARQATAjgFAWQgBAOgEAJQgDAFgHAGQgYAVgTAdQgEAGgIAGQgMAMgVAOQgrAcgTAPQgmAegeAaQgNAJgTASIgLAKQgRAQgOAEQgOAFgRAAIgNAAg");
	this.shape_444.setTransform(1137.5,821.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("rgba(219,120,138,0.996)").s().p("Ag+EgQgagCgXgLQgRgIgTgPIgggaQgSgOgQgJIgCgBQhYgigPgWQgKgHgDgJQgCgHAAgOIAAgBQAAgfALgSQAHgOAWgOQAdgWAQgPQAhgfAignQBKhWBBg+IAPgMQA1g1A/ACQA/ADA/A0IASAQQAqApAfA4IAKATQAWAogFAZQgBAQgEAJQgEAGgIAGQgbAYgWAhQgEAGgJAIQgPAMgYAQQgxAfgVARQgqAhgiAgQgNAJgVAWIgNAMQgUATgPAGQgPAGgVAAIgNAAg");
	this.shape_445.setTransform(1136.7,823.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("rgba(219,120,138,0.996)").s().p("AhDFBQgdgCgZgLQgTgJgWgRIgkgdQgUgQgSgIIgCgBQhlglgSgWQgLgIgDgKQgCgHAAgQIAAgBQAAgjAMgUQAIgPAZgQQAigXATgSQAlggAlgsQBUhiBFhIIAPgOQA6g+BHABQBFADBIA6IAUARQAwAuAjA9IAMAWQAZAsgEAbQgBASgFAKQgEAHgJAIQgfAZgZAlQgEAHgKAIQgQAOgcARQg4AigWATQgvAlgmAkQgOALgXAZIgOAOQgVAWgRAIQgRAIgZAAIgNgBg");
	this.shape_446.setTransform(1136,825);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("rgba(219,120,138,0.996)").s().p("AhGFjQgggCgdgNQgVgKgYgSIgoggQgWgRgUgJIgCgBQhygngUgWQgNgJgDgLQgDgIAAgSIAAAAQAAgnAOgWQAJgQAdgSQAmgZAVgTQAqgiApgxQBchuBJhRIAQgRQA/hGBPAAQBMACBQBAIAWATQA1AxAoBEIANAXQAeAygEAcQgBAUgGAMQgEAHgKAJQgjAbgbApQgFAHgLAJQgSAPgfATQg+AmgZATQg0AqgoAoQgPAMgZAdIgQAQQgXAagSAIQgUAKgeAAIgKAAg");
	this.shape_447.setTransform(1135.2,826.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("rgba(219,120,138,0.996)").s().p("AhKGEQgkgCgfgOQgXgKgagVIgsgiQgYgSgXgKIgCgBQh/gpgWgXQgOgJgEgMQgDgIAAgUIAAgBQAAgqAPgYQALgRAggTQArgbAXgUQAugmAtg1ICyjVIARgSQBEhQBWAAQBTABBYBGIAYAUQA7A2AtBJIAPAZQAhA3gEAfQgBAWgGAMQgEAIgMAJQgmAegeAtQgFAHgNAKQgTAQgiAVQhFApgbAVQg4AtgsAtQgQAOgbAgIgRASQgZAdgTAKQgXALghAAIgKAAg");
	this.shape_448.setTransform(1134.5,828.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("rgba(219,120,138,0.996)").s().p("AhPGlQgmgBgigPQgZgLgdgXIgvglQgbgUgYgJIgDgBQiLgsgYgXQgQgKgFgNQgDgJAAgWIAAAAQAAgvARgZQAMgSAjgVQAvgdAagVQAygoAxg7QBtiEBShlQAJgLAJgKQBIhYBegBQBaAABgBMIAbAWQBAA5AxBPIARAcQAlA8gEAgQgBAYgGANQgFAJgNAKQgpAgghAxQgFAIgOALQgVARglAWQhMAsgdAXQg9AxgvAxQgQAPgeAkIgSAUQgbAggVALQgZANglAAIgKAAg");
	this.shape_449.setTransform(1133.7,829.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("rgba(219,120,138,0.996)").s().p("AhTHGQgpgBglgQQgbgMgfgYQghgbgSgNQgdgVgbgKIgCgBQiZgugagYQgSgKgEgOQgEgKAAgXIAAgBQAAgyATgbQAMgUAngWQA0gfAbgWQA3grA1hAQB2iPBWhwIATgWQBNhhBmgCQBgAABoBRIAeAYQBFA+A2BUIASAeQApBAgEAjQgBAagGAOQgFAJgPALQgtAigjA1QgFAJgQALQgWASgpAYQhSAwgfAYQhCA1gyA2QgRAQggAnIgTAWQgdAkgWAMQgcAQgqAAIgIgBg");
	this.shape_450.setTransform(1133,831.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("rgba(219,120,138,0.996)").s().p("AhXHoQgtgCgngRQgdgNgigZQgkgdgTgOQgfgXgdgKIgDgBQilgwgcgYQgUgLgFgPQgEgKAAgaIAAAAQAAg2AVgdQAOgVApgYQA5ggAegYQA7guA4hEQB/ibBah5IAUgZQBShqBtgCQBngBBxBXIAgAZQBKBCA7BbIAUAfQAsBGgDAkQgBAcgHAPQgFAKgQAMQgxAkglA5QgGAJgRANQgYATgsAZQhZAzggAaQhHA5g2A6QgRASgiAqIgUAYQgfAogYANQgeARgtAAIgIAAg");
	this.shape_451.setTransform(1132.3,832.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("rgba(219,120,138,0.996)").s().p("AhbIJQgwgBgqgTQgfgNgkgcIg7gtQgigYgfgLIgCgBQizgygegZQgVgLgFgQQgFgLAAgbIAAgBQAAg6AWgeQAPgWAtgZQA9gjAggZQBAgwA8hJQCIimBeiEIAVgaQBXhzB1gDQBtgCB5BdIAiAbQBQBGBABgIAVAhQAwBLgDAnQgBAdgHAQQgGALgRAMQg0AngoA9QgGAJgSAOQgaAUgvAbQhgA3giAbQhLA8g6BAQgSASgkAuIgVAaQghArgaAPQgfASgxAAIgIAAg");
	this.shape_452.setTransform(1131.5,834.4);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("rgba(219,120,138,0.996)").s().p("AhfIqQgzgBgtgTQghgOgngeIg+gwQgkgZghgLIgDgBQi/g1ghgZQgWgMgGgRQgFgLAAgeIAAAAQAAg+AYggQAQgXAxgbQBBgkAigbQBFgzA/hNQCRiyBiiNIAWgdQBch7B8gEQB0gDCCBjQASANASAPQBVBKBFBnIAXAjQAzBQgCAoQgBAggIAQQgGAMgSANQg4ApgrBBQgHAKgTAOQgbAVgyAdQhnA6gkAdQhQBAg8BEQgUAUgmAyIgWAcQgjAtgbAQQgiAUg1AAIgHAAg");
	this.shape_453.setTransform(1130.8,835.9);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("rgba(219,120,138,0.996)").s().p("AhkJMQg2gCgvgUQgjgPgpgfQgsgjgXgQQgmgbgjgLIgDgBQjMg4gjgZQgYgNgGgRQgFgMAAgfIAAgBQAAhBAZgiQASgZA0gbQBGgmAkgdQBJg2BDhSQCZi8BniYIAXgeQBgiFCEgFQB7gDCKBoIAmAfQBbBOBJBsQAOATALASQA3BVgCAqQgBAigJARQgGAMgTAOQg8AsgtBEQgHALgUAPQgdAXg2AeQhtA9gmAfQhVBEg/BIQgVAWgoA1IgXAeQglAxgdARQgkAWg5AAIgHAAg");
	this.shape_454.setTransform(1130,837.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("rgba(219,120,138,0.996)").s().p("AhoJtQg5gBgygWQglgPgrghIhHg2QgpgcgkgLIgEgBQjZg7glgZQgZgOgHgSQgFgNAAghIAAAAQAAhFAbgkQASgaA4gdQBKgoAngdQBNg6BHhWQCijIBrihQAMgSAMgPQBliNCMgGQCBgECSBuIApAgQBgBSBOByQAPAVALATQA7BZgCAtQgBAjgJASQgHANgUAPQg/AugwBIQgHAMgWAPQgeAYg5AgQh0BBgoAgQhZBHhDBNQgWAXgqA5IgYAgQgnA0gfASQglAYg9AAIgHAAg");
	this.shape_455.setTransform(1129.3,839);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("rgba(219,120,138,0.996)").s().p("AhsKOQg9gBg0gWQgngRgugiQgxgngagSQgrgegngLIgDgBQjmg9gngZQgbgPgHgTQgFgNAAgjQAAhJAcgmQAUgbA6gfQBPgpApgfQBSg8BKhbQCrjUBwirQAMgSAMgRQBqiWCTgGQCIgFCbB0IArAiQBlBWBTB4IAcApQA/BfgCAuQgBAmgKASQgHAOgVAQQhDAwgyBMQgIAMgXARQggAYg8AiQh7BEgpAiQheBLhHBRQgWAZgsA8IgaAiQgpA3ggAUQgnAZhAAAIgHAAg");
	this.shape_456.setTransform(1128.6,840.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("rgba(219,120,138,0.996)").s().p("AhwKwQhAgBg3gYQgpgRgxgkQgzgpgbgTQgtgfgpgMIgEgBQjzg/gpgaQgcgPgIgUQgFgOAAgkIAAgBQAAhMAegoQAUgcA+ggQBUgsArggQBWg/BOhgQC0jeBzi2IAagkQBvifCbgHQCOgGCjB6QAXARAXASQBqBbBYB9IAeArQBCBkgCAwQgBAogKAUQgHAOgXAQQhGAzg1BQQgIAMgYASQgiAZhAAkQiBBHgrAjQhjBQhKBWQgXAZguBAIgbAkQgrA7ghAVQgqAbhFAAIgFAAg");
	this.shape_457.setTransform(1127.8,842.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("rgba(219,120,138,0.996)").s().p("Ah1LRQhCgBg6gZQgrgSgzgmQg2grgcgTQgwghgrgMIgEgBQj/hBgrgbQgegPgJgVQgFgPAAgmIAAgBQAAhQAfgqQAWgdBBghQBYguAughQBahCBShlQC9jpB3jAIAbgmQB0ioCigIQCVgGCsB/QAYASAXATQBwBfBdCDIAfAtQBGBpgCAyQAAAqgLAUQgIAPgXARQhLA2g3BTQgJANgZATQgjAahDAlQiIBLgtAlQhoBThNBaQgXAbgxBDIgcAmQgtA/gjAWQgsAdhJAAIgFAAg");
	this.shape_458.setTransform(1127.1,843.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("rgba(219,120,138,0.996)").s().p("Ah5LyQhGAAg8gaQgtgTg1goQg5gsgdgVQgygigtgMIgEgBQkNhEgtgbQgggQgIgWQgGgPAAgoIAAgBQAAhUAhgrQAXgeBEgjQBdgwAvgiQBfhFBWhpQDGj1B7jKQAOgVAOgTQB5ixCpgJQCcgHC0CGQAZASAZAUQB1BjBiCJIAgAvQBKBugCA0QAAAsgLAVQgIAQgZARQhOA4g6BYQgJANgaATQglAchGAnQiPBOgvAmQhsBXhRBfQgYAcgzBHIgdAoQgvBBgkAYQgvAehMAAIgFAAg");
	this.shape_459.setTransform(1126.3,845.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("rgba(219,120,138,0.996)").s().p("Ah9MTQhJAAg/gbQgvgUg4gpQg7gvgfgVQg0gjgvgNIgEgBQkahGgvgbQghgRgJgXQgGgQAAgqQAAhYAigtQAYggBIgkQBigyAxgkQBjhGBahvQDPkAB/jUIAcgqQB+i6CxgJQCjgIC8CLQAbATAZAVQB7BnBmCPIAjAxQBNBzgCA2QAAAugLAWQgJAQgaATQhRA6g9BbQgJAOgcAUQgmAdhKAoQiVBSgxAnQhxBbhUBkQgZAdg1BKIgeAqQgxBFgmAZQgwAghQAAIgFAAg");
	this.shape_460.setTransform(1125.6,846.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("rgba(219,120,138,0.996)").s().p("AiBM1QhMgBhCgcQgxgUg6grQg+gxgggWQg2glgygNIgEgBQkmhIgygcQgigRgKgYQgHgQAAgtQAAhcAlguQAZghBLgmQBmgzA0gmQBohJBdhzQDXkMCEjdQAOgYAPgVQCDjDC5gKQCpgIDFCRQAbAUAbAWQB/BqBsCVIAkAzQBRB4gBA4QgBAwgMAXQgIARgbATQhWA8g/BgQgKAOgcAVQgoAehNAqQicBVgzApQh2BfhXBoQgaAfg3BNIgfAsQgzBJgnAaQgzAihWAAIgCAAg");
	this.shape_461.setTransform(1124.8,848.4);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("rgba(219,120,138,0.996)").s().p("AiFNWQhPAAhFgdQgzgVg8gtQhBgzghgXQg5gmgzgNIgEgBQk0hLgzgcQglgSgJgZQgIgQAAgvQAAhfAmgxQAbgiBOgnQBrg1A2gnQBshMBhh4QDgkXCIjnQAPgZAPgWQCIjMDAgKQCwgKDNCXQAdAVAbAXQCFBuBxCbIAlA1QBVB9gBA6QgBAygMAXQgJASgcAUQhZA/hCBjQgKAPgeAWQgqAfhQAsQiiBYg1ArQh6BihbBtQgaAgg5BRIghAuQg1BLgpAcQg1AjhZAAIgCAAg");
	this.shape_462.setTransform(1124.1,849.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("rgba(219,120,138,0.996)").s().p("AiJN3QhTAAhHgeQg1gWg/gvQhDg1gigXQg7gng2gOIgEgBQlBhNg1gdQgmgSgKgaQgIgSAAgwQAAhjAogyQAbgkBTgoQBug3A5goQBwhPBlh9QDpkiCMjxQAPgaAQgXQCMjUDIgMQC3gKDVCcIA7AuQCKByB1ChQAWAdARAaQBZCCgBA8QAAAzgNAZQgKASgdAVQhcBBhFBnQgKAQgfAXQgsAghTAtQipBcg3AsQh/BmhdBxQgcAig7BVIgiAwQg3BOgqAdQg4AlhcAAIgCAAg");
	this.shape_463.setTransform(1123.3,851.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("rgba(219,120,138,0.996)").s().p("AkuN5Qg2gXhCgwQhFg3gkgYQg9gpg4gNIgEgBQlOhQg3gdQgogTgKgbQgIgSAAgyIAAAAQAAhnAqg0QAcglBVgqQB0g5A6gpQB1hRBoiCQDykuCQj7IAhgzQCRjdDPgMQC+gLDdCiQAfAXAeAYQCQB3B6CmIAoA6QBcCGAAA+QgBA2gNAZQgKATgeAWQhgBDhHBrQgLARggAXQgtAhhXAvQiwBfg4AuQiEBqhhB2QgcAig+BZIgiAyQg5BSgsAdQg6AohiAAQhVgBhLgfg");
	this.shape_464.setTransform(1122.6,853);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("rgba(219,120,138,0.996)").s().p("Ak3OaQg5gYhEgyQhIg5glgZQg/gqg7gOIgEgBQlahSg6gdQgpgUgLgcQgIgTAAgzQAAhrArg2QAegmBYgsQB4g6A9grQB5hUBtiHQD6k5CUkFQAQgbASgaQCWjlDWgNQDFgMDmCoQAfAXAgAaQCUB7B/CrQAYAgATAcQBfCMAABAQAAA3gOAaQgKAUgfAXQhlBFhJBvQgLARgiAYQguAihaAxQi3Big6AwQiIBthlB7QgdAkg/BcIgkA0Qg7BVguAfQg8AphlAAQhZAAhMggg");
	this.shape_465.setTransform(1121.9,854.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("rgba(219,120,138,0.996)").s().p("AlCO6Qg6gYhGg0QhLg7gngaQhBgrg8gPIgFgBQlnhUg8geQgqgUgMgdQgIgTAAg2QAAhvAsg3QAfgnBcgtQB9g9A+grQB+hXBwiMQEElECYkPQARgdARgaQCbjvDegOQDMgMDtCuQAiAYAgAaQCaB/CECyQAYAgAUAdQBjCRAABCQAAA5gOAcQgLAUghAXQhnBIhMBzQgLARgjAaQgxAihdAzQi9Blg8AxQiOByhnB/QgeAlhBBgIgmA2Qg8BYgvAhQg+AqhpAAQhcAAhQghg");
	this.shape_466.setTransform(1121.1,856.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("rgba(219,120,138,0.996)").s().p("AlMPaQg8gZhJg1QhNg9gogbQhEgtg+gOQl4hYg/geQgsgVgMgeQgIgUAAg3QAAhzAug5QAggoBfgvQCBg+BBgtQCChaB0iQQEMlQCdkZQCrkvD+gQQDSgND2C0QDHCRClDdQCUDIAABRQAAA8gOAcQgLAVgiAYQhrBKhPB3QgcAqimBaQjEBpg+AyQiSB2hrCDQgnAxhiCRQg+BcgxAhQhAAthsAAQhfAAhTgjgAEUoUIACgBIgJgFIAHAGg");
	this.shape_467.setTransform(1120.4,857.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("rgba(219,120,138,0.996)").s().p("AkjPnQgUgGgUgIQgwgUg3gmIgegUQg4gtgkgaIgYgRQg3gkgzgQIgYgHQlthVhFgfIgFgCQgqgUgNgcIgBgCQgIgUAAg4QAAhyAug6IAFgGQAhglBZgrIAMgGQB4g6A+grIATgNQB3hXBsiGIAWgcQD8k/CWkNQAQgcARgbQCBjHCrgyQAsgMAugDQAWgBAVAAQBrAFByA0QBFAfBIAxQAYAQAYATQAkAbAkAeQBCA4A/BBQBVBWBNBmQBNBlAmBHQAbAyAHAkQACALAAAJQABAqgHAbIgDAKIgEAJQgLAVgiAXQhCAwg3A+QghAmgfAtQgVAehYA1IhWAxQh5BBhFAsQgrAbgYATQhzBdhbBmQgYAbgWAcQggAnhFBlIgkA1QglA2ggAhQgWAYgUAOQgxAhhKAIQgYACgaAAQhJAAhAgVg");
	this.shape_468.setTransform(1120.2,857.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("rgba(219,120,138,0.996)").s().p("AkjPmQgUgGgUgIQgvgVg4gmIgdgUQg4gtgkgZIgZgRQg3gkgzgQIgYgHQlshVhFgfIgFgCQgqgUgMgcIgBgCQgJgUAAg4QAAhyAug5IAFgGQAigmBYgrIAMgGQB4g6A+grIATgNQB3hXBriFIAXgcQD7k+CXkNQAQgdARgaQCAjHCrgzQArgLAvgDQAVgCAVABQBsAGBwA0QBEAgBHAyQAYAQAXATQAkAcAjAeQBCA5A/BAQBVBWBOBlQBNBkAoBGQAbAyAIAjIACAVQABApgGAcIgDAKIgEAIQgMAVghAYQhCAvg2A/QghAmggAsQgWAehXA1IhWAwQh5BBhFAtQgqAbgZATQhzBdhaBmQgYAagWAcQggAohEBlIgkA0QgmA2ggAiQgWAXgUANQgxAhhKAIQgYACgaAAQhIAAhBgVg");
	this.shape_469.setTransform(1120,857.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("rgba(219,120,138,0.996)").s().p("AkiPkQgUgGgUgHQgvgVg4gmIgdgVQg4gsgkgaIgYgRQg3gjgzgQIgYgHQlshVhFgfIgFgBQgqgVgMgcIgBgCQgJgVAAg2QAAhzAug5IAFgGQAhgmBZgrIAMgFQB3g6A+gsIATgMQB3hXBsiFIAWgcQD7k+CXkMQAQgdARgaQCAjHCpg0QArgKAvgDIArgBQBrAHBwA0QBDAhBGAzIAvAjQAjAcAiAfQBBA6BAA/QBVBWBOBkQBOBjApBGQAbAwAIAkQADALAAAKQABApgFAbIgCAKIgFAIQgMAWghAXQhBAwg2A+QghAmghAtQgWAdhXA1QglAVgwAaQh6BDhEArQgqAbgZAUQhyBdhbBmQgXAagWAcQggAphFBkIgkA0QglA2ggAhQgWAWgVAOQgxAhhKAHQgXACgaABQhJgBhAgWg");
	this.shape_470.setTransform(1119.8,857.9);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("rgba(219,120,138,0.996)").s().p("AkiPkIgngPQgvgUg3gmIgdgVQg5gsgkgaIgYgRQg3gkgzgPIgYgHQlrhVhFgeIgFgCQgqgVgMgcIgBgCQgJgUAAg3QAAhyAug6IAFgFQAhgmBYgrIAMgGQB3g6A/grIASgNQB4hWBriFIAWgcQD7k9CXkMQAQgdARgaQB/jHCpg1QArgKAvgDQAVgBAWABQBrAIBuA1QBDAhBFA0IAuAkQAiAcAjAgQBAA6A/A/QBWBVBPBjQBOBiAqBFQAcAwAIAkQADALAAAKQACAogFAcIgCAKIgEAIQgNAVggAYQhBAwg2A+QggAmgiAsQgYAehVAzQgmAXgwAZQh6BChDAsQgqAbgZAUQhyBdhaBmQgXAagXAcQggAphEBkIgkA0QglA2ggAgQgWAXgVANQgxAhhKAHQgYACgaAAQhIgBhBgVg");
	this.shape_471.setTransform(1119.6,858);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("rgba(219,120,138,0.996)").s().p("AiYP5QhIgBhBgVQgUgHgTgIQgwgVg2glIgdgVQg5gtgkgZIgYgRQg3gjgzgQIgYgHQlrhUhEgfIgFgCQgqgUgMgdIgBgCQgJgUAAg3QAAhxAug6IAEgGQAiglBYgrIAMgGQB3g6A+grIATgNQB3hWBriFIAXgbQD6k9CXkMQAQgcARgbQB+jHCpg1QArgKAugDQAWgBAVABQBsAJBsA2QBDAhBEA1QAWARAXAUQAiAcAiAhQA/A6A/A/QBXBVBPBhQBOBhAsBFQAcAuAJAlIAEAVQABAogEAcIgBAKIgFAIQgNAVggAXQhBAxg1A+QggAlgjAtQgYAdhVAzQgmAXgvAZQh7BChCAsQgpAbgaAUQhyBdhZBmQgXAagXAdQggAphEBjIgkA0QglA2ghAgQgWAWgVAOQgxAfhKAHQgTACgUAAIgKAAg");
	this.shape_472.setTransform(1119.4,858);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("rgba(219,120,138,0.996)").s().p("AiYP4QhIgBhBgWQgTgGgUgJQgvgUg3gmIgdgUQg4gtgkgZIgYgRQg3gkgzgPIgYgHQlrhUhEgfIgFgCQgqgUgMgdIgBgCQgIgUAAg3QAAhxAtg6IAFgGQAhglBYgrIAMgGQB3g6A+grIATgMQB3hWBriFIAXgbQD6k9CWkLQAQgdARgaQB+jHCog2QArgKAvgCQAVgBAVAAQBtALBqA2QBCAiBDA2QAWARAWAVQAiAcAhAhIB+B6QBXBUBQBgQBPBgAtBEQAcAtAKAmQACAKABALQACAngDAcIgBAKIgFAJQgOAUgfAYQhBAwg1A/IhDBRQgZAehUAyIhVAwQh7BChCArQgpAbgZAVQhyBdhZBmQgXAZgXAeQggAphDBjIgkAzQgmA2ghAgQgWAWgVANQgxAghKAGQgTACgUAAIgKAAg");
	this.shape_473.setTransform(1119.3,858.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("rgba(219,120,138,0.996)").s().p("AiXP3QhJgChAgVQgTgHgUgIQgvgVg3gmIgcgUQg5gtgkgZIgYgRQg3gjgzgPIgYgHQlqhVhEgeIgFgCQgqgUgMgdIgBgCQgIgUAAg3QAAhxAtg6IAFgFQAhgmBYgrIAMgGQB2g6A/gqIASgNQB3hWBriEIAXgcQD6k8CWkKQAQgdARgaQB+jHCng3QAqgJAvgCIArgBQBsAMBqA2QBBAjBCA3QAVARAWAVQAhAdAhAhIB+B6QBXBUBQBfQBPBeAvBEQAcAtAKAlQADALABAKQADAngDAdIgBAKIgFAIQgOAUgfAYQhAAwg1BAIhEBQQgZAehUAxQgmAXgvAZQh7BDhBArQgoAbgaAUQhyBdhZBnQgWAZgXAdQghAqhDBiIgjA0QgmA2ghAfQgWAWgVANQgyAfhKAGQgTACgTAAIgKAAg");
	this.shape_474.setTransform(1119.1,858.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("rgba(219,120,138,0.996)").s().p("AiXP2QhIgBhBgWQgTgHgTgIQgwgVg2gmIgdgUQg5gtgjgZIgYgQQg3gkgzgPQgMgEgMgCQlqhVhEgfIgEgCQgqgUgMgcIgBgCQgJgUAAg3IAAAAQAAhxAtg6IAFgGQAhglBYgrIAMgGQB2g6A/gqIASgNQB3hVBriFIAXgbQD5k8CXkKQAQgdARgaQB9jHCmg4QAqgIAvgCIArgBQBtANBoA3QBBAjBAA4QAVARAWAWQAgAdAhAiIB9B6QBYBTBQBeQBQBdAwBEQAcArALAmIAEAVQADAngCAdIgBAKIgFAIQgOAUgfAYQhAAwg0BAIhFBQQgaAdhTAxQgnAXguAZQh7BDhAArQgpAbgZAUQhyBehZBmQgWAZgXAeQghAqhCBhIgkA0QgmA2ghAfQgWAVgVANQgyAfhKAGQgTABgTAAIgKAAg");
	this.shape_475.setTransform(1118.9,858.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("rgba(219,120,138,0.996)").s().p("AiXP1QhIgChAgWQgUgGgTgJQgvgVg3gmIgcgUQg5gtgjgZIgYgQQg3gjgzgPIgYgHQlqhUhEgfIgEgCQgqgUgMgcIgBgCQgIgVAAg2IAAAAQAAhxAtg6IAEgGQAhglBYgrIAMgGQB2g5A+grIATgNQB3hVBriEIAWgbQD6k7CXkKIAgg3QB9jHClg5QAqgIAwgCIAqgBQBtAPBnA3QBAAkBAA5QAUARAWAWQAfAdAgAjQA9A9BAA9QBYBTBRBdQBQBcAyBDQAcAqALAnIAFAVQADAmgBAdIgBAKIgFAIQgPAVgeAXQg/Axg1A/QgdAjgoAtQgbAdhSAxIhVAvQh7BDhAArQgoAbgaAVQhxBdhZBmQgWAZgXAeQghArhCBhIgkAzQgmA2ghAfQgVAVgWANQgyAehKAGQgSACgUAAIgKgBg");
	this.shape_476.setTransform(1118.8,858.4);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("rgba(219,120,138,0.996)").s().p("AiXP1QhIgChAgXQgTgGgUgJQgvgVg2gmIgcgUQg5gtgjgZIgZgQQg3gjgzgPIgXgGQlqhVhDgeIgFgCQgpgVgNgcIgBgCQgIgUAAg2IAAgBQAAhxAtg5IAFgGQAgglBYgrIAMgGQB2g6A+gqIATgNQB3hVBriDIAWgcQD5k6CXkKIAgg3QB9jHCkg6QAqgHAwgCQAVgBAVABQBuAPBkA4QBAAkA/A6QAUASAVAWQAfAeAgAjQA8A+A/A8QBZBTBSBcQBQBaAzBCQAdAqAMAnIAEAVQAEAlAAAeIgBAKIgFAIQgPAUgeAYQg/Axg0BAQgdAigpAsQgcAehSAwIhUAvQh7BDhAArQgnAbgaAVQhxBdhZBnQgVAYgYAfQghArhBBgIgkAzQgnA2ggAfQgWAVgWAMQgyAehKAGIgkABIgMAAg");
	this.shape_477.setTransform(1118.6,858.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("rgba(219,120,138,0.996)").s().p("AiXP0QhIgDhAgWQgTgHgTgIQgvgVg2gmIgdgVQg5gsgjgZIgYgQQg3gkgzgOIgXgGQlqhVhDgeIgEgCQgqgVgMgcIgBgCQgIgUAAg2IAAgBQAAhwAsg6IAFgGQAhglBXgrIAMgGQB2g5A+grIATgMQB3hVBriEIAWgbQD5k6CXkKIAgg2QB8jICjg6QAqgGAwgCQAVgBAVAAQBuARBjA4QBAAlA9A7QAUASAVAWQAeAeAfAkQA8A+A/A8QBaBTBSBbQBQBZA1BBQAcApANAoIAFAVQAEAkAAAfIAAAKIgFAHQgQAVgeAXQg+Axg0BAQgcAigqAsQgdAehRAvIhUAwQh8BDg+ArQgnAagbAWQhwBdhZBmQgVAZgYAfQghArhBBgIgkAzQgmA2ghAeQgWAVgWAMQgyAdhKAGIgkABIgMAAg");
	this.shape_478.setTransform(1118.5,858.5);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("rgba(219,120,138,0.996)").s().p("AiXPzQhIgDhAgWIgngQQgugVg2gmIgcgUQg5gtgjgZIgZgQQg2gjg0gOIgWgHQlqhUhDgeIgEgCQgqgVgMgcIgBgCQgIgUAAg2IAAgBQAAhwAtg6IAEgFQAggmBYgrIAMgGQB2g5A+gqIATgNQB3hVBqiDIAWgbQD5k6CXkJIAgg3QB7jHCjg7QAqgGAvgCIArAAQBuASBiA4QA+AmA+A8QASASAVAXQAeAeAfAkQA6A/BAA8QBaBSBTBZQBQBYA2BCQAdAoANAnIAGAVQADAkACAfIgBAKIgFAIQgQAUgdAXQg+Ayg0BAQgbAigrArQgdAehRAvQgnAXgtAYQh8BEg+AqQgnAbgaAVQhwBehYBmQgWAYgXAfQgiAshBBfIgjAzQgnA2ghAeQgWAUgWANQgyAdhKAFIgkABIgMAAg");
	this.shape_479.setTransform(1118.4,858.6);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("rgba(219,120,138,0.996)").s().p("AiYPyQhHgDhAgWIgmgQQgvgVg1gmIgdgUQg5gtgjgZIgXgQQg4gjgygOIgYgGQlphVhCgeIgFgCQgpgUgNgdIgBgCQgIgUAAg2IAAAAQAAhxAtg5IAFgGQAgglBXgrIAMgGQB1g5A/grIASgMQB3hVBriCIAXgcQD3k5CXkJIAhg2QB6jICjg7QApgGAwgCIAqAAQBuATBhA5QA+AmA8A9QASASAUAYQAdAeAgAlQA5BABAA7QBaBRBTBZQBRBWA4BBQAdAnANAoQAEALACALQAFAjACAfIAAAKIgGAIQgQAUgdAXQg+AygzBAQgbAhgsAsQgfAdhQAvIhTAvQh9BEg9AqQgmAbgbAWQhwBdhYBmQgVAYgYAgQghAshBBfIgjAyQgnA2ghAeQgWAUgXAMQgyAdhJAEIgdABIgUAAg");
	this.shape_480.setTransform(1118.2,858.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("rgba(219,120,138,0.996)").s().p("AiYPxQhHgChAgXIgmgQQgvgVg1gmIgcgUQg5gtgjgZIgYgQQg3gjgzgOIgXgGQlphUhCgfIgFgCQgpgUgMgcIgBgCQgIgVAAg1IAAgBQAAhwAsg5IAFgGQAggmBXgrIAMgGQB1g4A/grIASgMQB3hUBriDIAWgbQD4k5CXkIIAgg3QB6jHChg9QAqgFAwgCIAqAAQBvAUBfA6QA9AnA7A9QASATAUAYQAcAeAfAlQA5BBBAA7QBaBRBUBXQBRBWA5BAQAdAmAPAoIAGAWIAHBCIAAAKIgFAIQgRAUgdAXQg9AygzBAQgaAhguAsQgfAdhPAuIhTAvQh9BEg9AqQgmAagbAXQhvBdhYBmQgVAYgYAgQghAshABfIgkAyQgnA2ghAeQgWATgXAMQgyAchJAFIgdAAIgUAAg");
	this.shape_481.setTransform(1118.1,858.7);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("rgba(219,120,138,0.996)").s().p("AiYPwQhHgDhAgXIgmgPQgvgWg1gmIgbgUQg6gtgigYIgYgQQg3gjg0gOIgXgGQlphVhBgeIgEgCQgqgUgMgcIgBgCQgIgVAAg1IAAgBQAAhwAsg5IAEgGQAhglBXgrIAMgGQB1g5A/gqIASgNQB2hUBriCIAWgcQD4k4CXkIIAgg2QB6jICgg9QAqgFAvgBIAqgBQBvAWBfA6QA8AnA5A/QASATAUAYQAcAfAeAmQA4BBBAA6QBcBRBUBWQBSBUA5BAQAeAlAPApIAGAVIAIBDIABAJIgGAIQgRAUgcAXQg9AygyBBQgbAgguAsQgfAdhQAtIhTAvQh8BEg9AqQglAbgcAWQhvBehXBmQgVAYgYAgQghAthBBdIgjAzQgnA2ghAdQgWATgXAMQgyAchJAEIgdABIgUgBg");
	this.shape_482.setTransform(1118,858.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("rgba(219,120,138,0.996)").s().p("AiYPvQhHgDg/gXQgTgHgUgJQgugWg1glIgcgVQg6gtgigYIgYgQQg3gigzgOIgXgGQlphVhBgeIgEgCQgqgUgMgcIgBgCQgIgVAAg1IAAgBQAAhvAsg6IAFgGQAgglBXgrIAMgGQB0g5A/gqIASgMQB3hUBriCIAWgcQD3k3CXkIIAgg3QB5jHCgg+QAqgEAwgBIApgBQBwAXBcA6QA8AoA5BAQARATAUAYQAbAfAdAnQA4BCBAA5QBcBRBVBVQBRBTA8A/QAeAkAPAqIAHAVIAJBCIABAKIgGAHQgRAUgcAXQg9AygyBBQgZAggwAsQghAdhOAtIhTAvQh9BEg7AqQgmAagbAXQhvBehXBmQgUAXgZAhQgiAtg/BdIgkAyQgnA2ghAdQgWATgXAMQgyAbhKAEIgYABIgYgBg");
	this.shape_483.setTransform(1117.8,858.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("rgba(219,120,138,0.996)").s().p("AiYPvQhHgEhAgXQgSgHgUgKQgugVg1gmIgcgUQg6gtghgYIgZgQQg3gigzgOIgWgGQlphVhBgeIgFgBQgpgVgMgcIgBgCQgIgVAAg1IAAAAQABhwArg6IAFgGQAfglBYgrIALgGQB1g4A/gqIASgMQB2hVBriBIAXgbQD3k3CXkIIAfg3QB5jHCfg/QAqgDAvgCIAqAAQBwAYBbA7QA7ApA4BAQAQASAUAaQAaAfAeAnQA3BDBAA5QBcBRBVBTQBSBRA9BAQAeAiAQAqIAHAWIAKBCIACAJIgGAIQgTAUgbAXQg8AxgyBCQgZAfgxAsQghAdhNAtIhTAuQh+BFg6ApQglAbgcAXQhuBdhYBnQgTAXgZAhQgjAtg+BdIgjAyQgoA1ghAdQgWATgXAMQgzAahJAFIgYAAIgYAAg");
	this.shape_484.setTransform(1117.7,859);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("rgba(219,120,138,0.996)").s().p("AiYPuQhHgEg/gYQgTgGgUgKQgugWg1glIgbgUQg6gugigXIgYgQQg3gigzgOIgXgGQlohUhBgeIgEgCQgpgVgMgcIgBgCQgIgUAAg2IAAAAQAAhwAsg5IAEgGQAgglBXgrIAMgGQB0g5A/gqIASgMQB2hUBriBIAWgbQD3k3CXkHIAgg3QB4jHCehAQApgDAwgBIAqAAQBwAZBZA7QA7ApA3BCQAQATATAaQAaAfAdAoQA2BDBAA5QBdBQBWBSICRCPQAeAiAQAqIAHAWQAHAgAFAhIABAKIgGAIQgSATgbAXQg8AygyBCQgYAfgyArQgiAehNAsIhTAuQh9BFg6ApQglAbgbAXQhvBdhXBnQgTAXgZAhQgjAug+BcIgjAyQgoA1ghAdQgWASgYAMQgyAahKAEIgXAAIgYAAg");
	this.shape_485.setTransform(1117.6,859.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("rgba(219,120,138,0.996)").s().p("AiZPtQhGgEg/gYQgUgGgTgKQgugWg1glIgbgVQg5gtgjgXIgYgRQg3ghgygOIgYgGQlnhVhBgdIgEgCQgpgVgMgbIgBgCQgIgWAAg1IAAAAQAAhvAsg5IAEgHQAgglBWgrIANgGQBzg4A/gqIASgNQB3hSBqiDIAXgbQD2k1CXkHIAgg3QB3jHCehBIBZgDIApAAQBxAaBYA8QA6ApA2BDQAQATATAaQAZAgAcAoQA1BEBBA4QBdBQBWBRICTCNQAeAiARAqIAIAWIAMBBIACAKIgGAHQgTAUgbAXQg7AxgxBDQgYAegzAsQgjAdhMAsIhTAtQh+BGg5ApQgkAagcAYQhvBdhWBnQgTAWgZAiQgjAug+BbQgSAbgRAYQgoA1ghAdQgWARgYAMQgzAZhJAEIgYABIgYgBg");
	this.shape_486.setTransform(1117.5,859.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("rgba(219,120,138,0.996)").s().p("AiZPsQhGgEg/gYQgTgHgTgJQgugWg1gmIgbgUQg6gtgigYIgYgQQg3gigzgNIgXgGQlnhUhBgeIgEgCQgpgUgMgcIgBgCQgIgVAAg1IAAgBQAAhvAsg5IAEgGQAgglBWgrIAMgGQB0g4A/grIASgMQB2hTBriBIAWgbQD2k2CXkGIAgg3QB3jHCdhCIBZgCIAqgBQBwAcBXA8QA6ArA0BDQAQATASAbQAZAgAcApQA0BEBBA4QBdBPBXBRICVCKQAeAhASArIAHAWIAOBBIACAKIgHAHQgTAUgaAWQg7AygxBDQgXAeg0ArQgkAdhLArIhTAuQh+BFg5AqQgkAagcAYQhuBdhWBnQgTAWgZAiQgjAvg+BbIgjAxQgoA2ghAcQgWASgYALQgzAZhJADIgYABIgYgBg");
	this.shape_487.setTransform(1117.3,859.2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("rgba(219,120,138,0.996)").s().p("AiZPrQhGgEg/gYQgTgHgTgJQgvgXg0glIgbgUQg6gugigXIgXgQQg3ghg0gOIgWgGQlohUg/geIgFgCQgpgUgMgcIgBgCQgIgVAAg1IAAAAQAAhvAsg6IAEgFQAfgmBXgrIAMgGQB0g4A/gqIASgMQB2hTBriBIAVgbQD2k1CXkGIAhg3QB1jHCdhCIBZgCIApgBQBxAdBWA9QA4ArA0BEQAPAUATAbQAXAgAcApQA0BFBAA4QBeBPBYBPICWCJQAeAgATArIAHAWIAPBBIACAJIgGAIQgUATgZAXQg7AygxBDQgXAeg1ArQgkAdhLAqIhSAuQh/BGg3AoQgkAbgdAYQhtBdhWBnQgTAWgZAiQgjAvg+BbIgjAxQgoA2ghAbQgWASgYALQg0AZhJADIgSAAIgdgBg");
	this.shape_488.setTransform(1117.2,859.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("rgba(219,120,138,0.996)").s().p("AiZPqQhGgEg/gYQgTgHgTgKQgugWg1gmIgbgUQg5gtgigXIgYgQQg3gigzgNIgXgGQlnhUg/geIgFgCQgpgUgLgcIgBgCQgIgVAAg1IAAAAQAAhvArg5IAEgGQAggmBWgrIAMgGQBzg3BAgqIARgMQB3hTBqiBIAWgbQD2k0CXkGIAgg3QB1jHCchDIBZgCIApAAQByAeBTA9QA5AsAyBFQAPAUASAbQAXAhAbApQAzBGBBA3QBeBPBYBOICYCHQAfAfATArIAIAWIAQBBIACAKIgHAHQgTAUgaAWQg6AzgxBDQgWAdg2ArQglAdhKAqIhTAtQh+BGg3ApQgkAagcAYQhuBehVBmQgTAXgZAiQgkAvg8BaIgkAyQgoA1giAcQgVARgZALQgzAYhJADIgTAAIgcgBg");
	this.shape_489.setTransform(1117.1,859.4);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("rgba(219,120,138,0.996)").s().p("AiZPpQhGgEhAgZQgSgHgTgJQgugXg0glIgbgVQg6gtghgXIgZgQQg3ghgzgNIgWgGQlnhUg/geIgEgCQgpgUgMgcIgBgCQgIgVAAg1IAAAAQAAhvArg5IAEgGQAfglBXgrIAMgGQBzg4A/gqIASgMQB2hTBqiAIAXgbQD1k0CXkGIAgg2QB1jICbhDIBYgBIAqAAQByAfBSA+QA4ArAxBHQAOAUASAbQAXAhAaArQAzBGBAA2QBgBPBYBNICaCFQAeAeAUAsIAIAWIARBBIADAJIgHAHQgUAUgZAWQg7AzgvBDQgWAdg4ArQglAdhKApIhSAuQh+BGg3AoQgjAbgdAYQhuBehUBmQgTAWgZAjQgkAwg9BZIgjAxQgoA2giAbQgWARgYALQgzAYhJACIgMAAIgjgBg");
	this.shape_490.setTransform(1117,859.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("rgba(219,120,138,0.996)").s().p("AiaPoQhGgFg+gYQgTgHgTgKQgugWg0gmIgbgUQg6gtghgXIgYgQQg3ghgzgNIgXgGQlmhUg/geIgFgCQgogUgMgcIgBgCQgIgVAAg0IAAgBQAAhvArg5IAFgGQAfglBWgrIAMgGQBzg4A/gqIASgLQB2hTBqiAIAWgbQD1k0CYkFIAfg2QB1jICahEIBZgBIApAAQByAhBQA+QA4AsAwBIIAgAwQAWAhAaArQAyBHBAA2QBfBOBaBMQBUBIBHA7QAfAdAUAtIAJAWIASBAIADAKIgHAHIguApQg5A0gwBDQgVAcg5ArQgmAdhJApIhSAtQh/BGg2ApQgjAagdAZQhtBdhVBnQgSAWgZAiQgkAxg8BZQgSAagRAXQgpA1giAbQgVARgZALQgzAXhJACIgMABIgkgCg");
	this.shape_491.setTransform(1116.8,859.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("rgba(219,120,138,0.996)").s().p("AiaPoQhFgFg/gZQgTgHgTgKQgtgXg0glIgbgUQg6gughgXIgYgPQg3ghgzgNIgXgGQlmhUg/gdIgEgCQgpgVgMgcIgBgCQgHgVAAg0IAAgBQAAhuArg5IAEgGQAfgmBWgrIAMgGQByg3BAgqIARgMQB3hSBqiAIAWgbQD1kzCXkFIAfg2QB1jICZhFQAoABAxgBIApAAQByAiBPA/QA3AtAwBIQANAUARAdIAvBMQAxBIBBA2QBgBNBaBLQBUBHBJA7QAfAcAVAtIAJAWIATBAIACAKIgHAHIgtApQg5A0gwBDQgUAcg6ArQgnAchIApIhSAtQh/BGg2ApQgiAagdAZQhtBehVBmQgSAWgZAjQgkAwg8BZIgjAxQgpA1giAbQgVAQgZALQgzAXhJACIgMAAIgkgBg");
	this.shape_492.setTransform(1116.7,859.6);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("rgba(219,120,138,0.996)").s().p("AiaPnQhFgFg/gZQgSgHgUgKQgtgXg0glIgagUQg7gughgXIgYgPQg3ghgzgNIgWgFQlmhUg/geIgEgCQgogUgMgcIgBgCQgIgVAAg0IAAgBQAAhuArg6IAEgFQAfgmBWgrIAMgGQByg3A/gqIASgMQB2hSBriAIAVgaQD1kzCXkEIAgg3QBzjHCZhHQAoACAxgBIAoAAQB0AjBNA/QA2AuAvBJIAeAyIAtBNQAxBIBBA2IC6CWQBVBHBKA6QAfAbAWAtIAJAWIAUBAIADAKIgHAHIgtApQg5A0gwBDQgTAcg7AqQgoAdhIAoIhRAtQiABHg0AoQgiAageAZQhtBehUBmQgSAWgZAjQglAxg6BYQgSAagSAXQgoA1giAaQgWAQgZALQg0AXhIABIgMABIgkgCg");
	this.shape_493.setTransform(1116.6,859.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("rgba(219,120,138,0.996)").s().p("AiaPnQhGgGg+gZQgSgHgTgKQgugXg0gmIgagUQg6gtghgXIgYgPQg3ghgzgNIgXgFQlmhUg+gdIgEgCQgogVgMgcIgBgCQgIgVAAg0IAAgBQAAhuArg5IAEgGQAfglBWgrIAMgGQByg3A/gqIASgMQB2hSBqh/IAWgbQD0kyCYkEIAfg3QBzjHCYhHQAoACAxAAIAogBQBzAlBNA/QA2AuAtBLIAdAxIAtBPQAwBJBBA0IC7CWQBVBFBMA5QAfAaAWAuIAJAWIAWBAIADAKIgHAGIguAqQg4AzgvBEQgTAbg8ArQgqAdhGAnIhSAtQh/BHg0AoQgiAagdAZQhtBehUBmQgSAWgaAjQgkAyg7BXQgRAagSAXQgpA1giAaQgVAQgaAKQgzAXhJABIgMAAIgjgBg");
	this.shape_494.setTransform(1116.4,859.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("rgba(219,120,138,0.996)").s().p("AiaPmQhFgGg/gZQgTgHgSgKQgugXgzgmIgbgUQg6gtghgXIgYgPQg3ghgzgMIgWgGQllhUg/gdIgEgCQgogUgMgcIgBgCQgIgVAAg0IAAgBQAAhuArg5IAEgGQAeglBWgrIANgGQBxg3BAgqIARgMQB3hSBqh/IAWgbQDzkxCYkEIAfg3QBzjHCXhIQAoADAxAAIAogBQB0AmBKBAQA1AvAtBLIAcAyIAsBQQAvBJBBA0IC8CUQBWBEBNA5QAfAZAXAuIAKAWIAWBAIADAKIgHAGIgtApQg5A0guBEQgTAbg9AqQgqAdhFAnIhSAtQiABHgzAoQghAageAZQhsBehUBnQgRAVgaAkQglAyg7BWIgjAxQgoA1giAaQgXAPgZALQg0AVhIABIgMABIgjgCg");
	this.shape_495.setTransform(1116.3,859.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("rgba(219,120,138,0.996)").s().p("AiaPlQhGgFg+gaQgSgHgTgKQgugXgzgmIgagUQg7gtgggXIgYgPQg3ghgzgMIgXgFQllhUg9geIgFgCQgogUgMgcIgBgCQgHgVAAg0IAAgBQAAhtAqg6IAEgFQAfgmBVgrIAMgGQByg3BAgpIARgMQB2hSBqh/IAWgaQD0kxCXkEIAfg2QByjICXhIQAoACAwABIApAAQB0AmBJBBQA1AvArBMQAMAVAPAeIAsBQQAuBKBBA0IC9CTQBWBCBOA4QAgAZAXAuIAKAWIAYBAIADAJIgHAHQgXATgXAWQg3A0gvBEQgSAbg+AqQgrAdhFAmIhRAtQiABHgzAnIg/A0QhsBehTBnQgSAVgaAkQgkAyg6BWQgSAbgRAWQgqA1giAZQgVAQgaAKQg0AVhJABQgXAAgXgCg");
	this.shape_496.setTransform(1116.2,859.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("rgba(219,120,138,0.996)").s().p("AiaPlQhGgGg+gZQgSgIgTgKQgugXgzgmIgagTQg6gughgXIgXgOQg4gigzgLIgWgGQllhTg9geIgFgCQgogVgLgbIgBgCQgIgVAAg0IAAgBQAAhtAqg6IAFgGQAdglBXgrIALgGQBxg3BBgpIARgMQB2hRBqh/IAWgbQDzkwCYkDIAeg3QByjICWhJQAnADAxABIApAAQB0AoBIBAQA0AwAqBOIAbAzIAqBRQAtBLBBAzQBjBMBbBFQBXBBBQA5QAgAWAXAvIAKAXIAZA/IAEAJIgIAIQgWASgXAWQg3A1gvBEQgRAahAAqQgrAchEAmIhRAtQiBBHgyAoQghAagdAaQhsBehTBmQgSAVgaAkQgkAzg6BVQgSAbgRAWQgqA2giAYQgWAPgZAKQg0AWhJAAQgYAAgWgCg");
	this.shape_497.setTransform(1116.1,859.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("rgba(219,120,138,0.996)").s().p("AibPlQhFgHg+gaQgSgHgTgKQgtgXgzgmIgagUQg7gugggVIgYgPQg3ghgzgMIgXgGQlkhUg9gcIgFgCQgogVgLgcIgBgCQgIgVAAgzIAAgBQAAhuAqg5IAEgFQAfgmBVgrIAMgGQBxg3BAgqIARgLQB2hRBqh/IAWgbQDzkwCYkCIAfg3QBxjHCVhLQAnAEAxABIApAAQB0ApBGBBQA0AxApBOIAaA0IApBSQAtBLBBAzQBiBLBdBEQBXBBBRA3QAgAXAYAuIALAXIAaA/IAEAKIgIAGQgXATgXAWQg2A0guBFQgRAahBApQgsAdhEAlIhRAsQiABJgyAnIg+A0QhsBehTBmQgRAVgaAlQglAzg5BVQgSAagRAWQgqA1giAZQgVAOgbALQg0AUhIABQgYAAgXgCg");
	this.shape_498.setTransform(1115.9,859.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("rgba(219,120,138,0.996)").s().p("AkePEQg8gZhJg2QhNg9gogaQhEgtg+gPQl4hYg/geQgsgVgMgdQgIgUAAg4QAAhyAug6QAggoBfguQCBg/BBgtQCChZB0iRQEMlPCdkZQBwjICUhLQA4AGBKgBQB0ArBFBBQAzAxAoBQIBCCHQAsBMBBAyQC/CRCrBzQAgAVAZAwQAOAbAXA6IAEAJQhWBGhDBjQgcArimBZQjEBpg+AzQiSB1hrCEQgnAwhiCRQg+BcgxAiQhAAshsAAQhfAAhTgigAFCorIACgBIgJgEIAHAFg");
	this.shape_499.setTransform(1115.8,859.9);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("rgba(219,120,138,0.996)").s().p("AkePEQg9gahIg1QhOg9gngbQhEgsg+gPQl5hYg+geQgsgVgMgdQgJgVAAg3QABhzAtg5QAhgoBfguQCBg/BBgtQCChZB0iRQEMlQCdkZQBwjHCVhLQA3AGBKgBQB0ArBFBBQAzAxAoBPIBBCHQAsBMBCAzQC/CRCqByQAhAWAZAvQAOAcAXA6IAEAKQhWBEhDBkQgcAqimBaQjEBpg+AyQiTB2hqCDQgnAxhiCRQg/BcgwAhQhAAthtAAQhfAAhSgig");
	this.shape_500.setTransform(1115.8,860);
	this.shape_500._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_499}]},1).to({state:[]},1).to({state:[{t:this.shape_439}]},104).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_500).wait(62).to({_off:false},0).wait(9).to({_off:true},1).wait(134));

	// right atrium blood 3
	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("rgba(219,120,138,0.996)").s().p("AhaAtQgGgPABgSIACgMQAAg0AegZQAagWAmAHQAmAGAcAdQAdAgAAAoQAAAggHANQgTAjhAAAQhNAAgTgyg");
	this.shape_501.setTransform(1190.4,858.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("rgba(219,120,138,0.996)").s().p("AgmB7QgHgBgHgDQgJgDgHgFIgIgHIgEgDIgSgRQgJgJgHgOIgEgGQgDgIgCgJQgBgHAAgHIAAgDIADgPQACgfAOgdQAJgUAUgUQAIgIAKgHQAZgQAkACIASACQASAEARAHQAMAGAKAIIALAKIAHAIIAMAQIAGAJQAEAFACAGIACAJIACAIQACAQgBAQIgBAHQgDAfgKAPIgCAEIgGAIIgJAKQgPAOgcALQgGABgIAEQgMAFgMACIgFABQgQAEgPAAIgPgBg");
	this.shape_502.setTransform(1189.7,860.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("rgba(219,120,138,0.996)").s().p("AgtCZQgJgBgIgDQgLgEgJgIIgJgJIgEgFIgWgVQgMgJgKgPIgEgIQgGgKgCgKQgDgJABgIIAAgDQABgIADgLQAEgjAUgmQAJgUAageQAKgKALgIQAdgXAsAAIAWABQAXACAUAIQARAGALAIIAOAOIAIAIQAIAKAGALIAJAKQAGAGABAHIADALIABAJQADAUgEAWIgBAHQgGAmgNARIgEAFIgIAKIgKAMQgRARgjAQIgPAIQgOAJgOADIgFACQgXAKgWAAIgKgBg");
	this.shape_503.setTransform(1189,862.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("rgba(219,120,138,0.996)").s().p("Ag1C5QgLgBgJgFQgNgFgKgJIgJgMIgFgGIgagaQgPgJgMgSIgGgIQgHgMgEgMQgDgKAAgKIAAgCQABgKAEgNQAGgnAagvQAKgVAggmQALgMANgMQAhgcA1gDQAMgBAOABQAaABAZAIQAVAGAMAKQAJAHAIAIIAJALQAKALAHANQAEAGAIAGQAGAGACAIQACAGABAHIABALQADAYgGAbIgCAJQgJArgQAUIgFAGIgKALQgFAHgHAIQgTAUgpAVQgHACgLAJQgQAMgOAFIgGADQgeAQgaAAIgJAAg");
	this.shape_504.setTransform(1188.4,864.6);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("rgba(219,120,138,0.996)").s().p("Ag9DXQgMgBgMgGQgPgFgKgLQgGgGgFgIIgFgJQgMgNgRgQQgSgJgPgVIgHgJQgJgNgFgOQgEgMAAgLIAAgCQABgLAFgQQAJgrAfg3QALgXAmguQAMgPAPgOQAlgiA8gGQAPgBAPAAQAgABAdAIQAYAGAOAKIAUASIAKAMQALAOAJAPQAEAGAJAHQAJAGACAKIACAPIACANQACAbgIAhIgCAKQgMAxgUAWIgGAIIgMAMQgFAJgIAIQgWAXgvAaQgHADgNAMQgSAOgPAIIgHADQgiAXggAAIgIgBg");
	this.shape_505.setTransform(1187.8,866.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("rgba(219,120,138,0.996)").s().p("AhED3QgOgBgNgHQgRgHgMgNQgGgHgFgKIgGgJQgNgQgTgTQgVgIgTgXIgIgKQgKgPgGgPQgFgPAAgLIAAgDQABgMAGgSQALgvAmhAQALgYAsg3QANgQARgRQAogoBFgJQARgCARAAQAkAAAhAIQAcAGAQAMQAMAJAKALQAGAGAGAIQAMAPAKARQAEAHAMAHQAKAHACALIADARIABAOQACAggJAlIgDAMQgPA3gYAZIgHAJIgNANQgHAKgJAKQgYAZg2AgQgHADgOAPQgUASgRAJIgHAEQgoAdglAAIgGAAg");
	this.shape_506.setTransform(1187.1,868.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("rgba(219,120,138,0.996)").s().p("AhMEWQgQgBgOgIQgTgHgNgQQgGgIgGgLIgGgLQgOgSgWgVQgYgJgVgYIgJgMQgMgQgHgRQgHgQAAgNIAAgCQABgOAHgUQANgzAshJQANgZAxhAQAPgSASgTQAsgvBOgLQASgCAUgBQAngBAmAJQAgAGASAMIAYAXIANAPQAOARALATQAFAIANAIQAMAHACAMIADATIABAQQACAjgLArIgEANQgRA+gcAbIgJAKIgPAPQgHALgKAKQgaAdg8AlQgHADgQARQgWAWgSALIgIAFQguAjgpAAIgGAAg");
	this.shape_507.setTransform(1186.4,871);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("rgba(219,120,138,0.996)").s().p("AhUE1QgRgBgQgJQgVgIgOgRQgHgJgGgNIgHgNQgPgUgZgXQgagJgYgaIgLgNQgNgSgIgTQgIgRAAgOIAAgDQABgOAIgXQAPg4AyhRQAOgaA3hIIAkgrQAwg0BVgOQAVgDAVgBQAtgCApAJQAkAGAUANQAOAMAMANIAPARQAPATAMAWQAFAIAQAIQANAIACAOQACAIABANIABARQACAngNAwIgEAPQgUBDggAeIgKALIgQAQQgIAMgLAMQgcAfhDArQgIAEgRATQgYAZgTANIgJAGQgyApguAAIgGAAg");
	this.shape_508.setTransform(1185.8,873.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("rgba(219,120,138,0.996)").s().p("AhbFUQgUAAgRgLQgXgJgPgTQgIgKgGgOIgHgOQgQgXgcgZQgdgJgbgdIgMgNQgPgUgJgUQgJgUABgPIAAgCQABgQAJgZQARg8A4haQAOgbA9hRQASgXAVgYQA0g7BegQQAWgEAYgBQAwgDAuAJQAoAHAVANQAQAOANAOIAQASQARAVANAYQAGAJARAIQAPAJACAPQACAJABAOIABATQACArgPA0IgFARQgXBKgjAgIgMAMIgSARQgIAOgMANQgeAhhKAxQgIAEgTAWQgaAcgUAPIgJAHQg3AwgzAAIgFgBg");
	this.shape_509.setTransform(1185.2,875.2);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("rgba(219,120,138,0.996)").s().p("AhjF0QgVgBgTgLQgZgKgQgVQgJgLgGgQIgHgQQgRgYgfgbQgggJgdggIgNgOQgRgVgKgXQgKgVAAgQIAAgCQABgRAKgcQAThAA+hjQAPgbBDhaIAqg0QA4hBBmgTQAYgEAagCQA1gDAyAJQAsAHAWAOQARAOAPAQIASAUQASAWAOAbQAGAJATAJQAQAJADARQACAKABAOIABAWQACAugSA6IgFARQgaBRgnAiIgMANIgUATQgJAPgNAOQggAkhQA2QgIAFgWAYQgbAggWARIgJAHQg9A2g3AAIgFAAg");
	this.shape_510.setTransform(1184.5,877.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("rgba(219,120,138,0.996)").s().p("AhqGTQgXAAgUgNQgcgKgRgXQgJgNgHgRIgIgRQgSgbghgdQgigJghgiIgOgQQgTgWgLgYQgLgXABgSIAAgCQAAgSAMgeQAVhEBEhsQAQgcBJhjIAtg4QA7hHBugWQAagFAcgCQA6gEA2AJQAwAHAYAPQASAQAQARIATAVQATAYAQAdQAGAKAVAKQASAJADASQACALABAQIAAAXQACAygTA+IgGAUQgcBWgrAlIgOAOIgVAVQgKAPgNAQQgjAnhXA7QgIAFgXAbQgeAjgXATIgKAIQhBA8g8AAIgEAAg");
	this.shape_511.setTransform(1183.9,879.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("rgba(219,120,138,0.996)").s().p("AhyGyQgZAAgWgOQgdgLgSgZQgKgOgIgSIgHgTQgTgcgkggQglgKgkgjIgPgRQgVgYgMgaQgMgZABgSIAAgCQAAgUANggQAXhIBKh1QARgdBPhsIAvg8QA/hNB3gZQAcgFAegDQA+gFA6AJQA0AHAaARQATAQASATIAUAXQAUAZARAfQAHALAXAKQATAKADATQACAMABARIABAZQACA1gVBEIgHAVQgfBdgvAnIgPAPIgXAWQgKARgPARQglAphdBBQgJAFgYAeQggAmgYAVIgKAJQhGBChAAAIgFAAg");
	this.shape_512.setTransform(1183.3,881.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("rgba(219,120,138,0.996)").s().p("Ah6HSQgagBgYgPQgfgMgTgbQgLgOgHgUIgJgVQgUgegmgiQgogKgmgmIgRgRQgWgagNgbQgNgbAAgUIAAgCQABgVANgiQAahMBPh+QASgeBVh0QAXgfAcgjQBChTB/gbQAegGAggDQBDgGA+AJQA4AIAbARQAVASATATIAVAZQAWAbASAhQAHAMAZALQAVAKADAUQACANABASIABAbQABA5gXBJIgHAWQgiBjgyAqIgQAQIgZAXQgLATgQARQgnAthjBGQgKAFgaAhQghApgZAXIgMAKQhLBJhFAAIgEAAg");
	this.shape_513.setTransform(1182.6,883.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("rgba(219,120,138,0.996)").s().p("AiBHxQgdAAgYgQQgigNgUgdQgLgQgIgVIgJgWQgVgggpglQgrgJgpgoIgSgTQgYgbgOgeQgOgcABgVIAAgCQAAgWAPglQAbhQBWiGQASggBbh9IA2hGQBGhZCIgdQAfgHAjgDQBGgHBDAJQA7AIAdASQAXATAUAUIAWAbQAYAdATAjQAHAMAbAMQAXAKADAWQACANABAUIAAAcQACA9gZBOIgHAXQglBqg2AsIgSASIgbAYQgLAUgRATQgpAvhqBLQgJAGgcAjQgkAtgaAYIgMALQhQBPhKAAIgDAAg");
	this.shape_514.setTransform(1182,885.6);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("rgba(219,120,138,0.996)").s().p("AiJIRQgegBgbgRQgjgNgWgfQgLgRgJgXIgIgXQgWgjgsgnQgugJgsgrQgKgJgJgLQgZgcgPgfQgQgeABgXIAAgBQAAgXAQgoQAdhUBciPQATghBhiFIA5hLQBKhfCQggQAhgHAlgEQBLgIBGAJQBAAIAeATQAYAUAVAWIAYAcQAZAfAVAlQAHANAdAMQAYALAEAYQACANAAAVIABAeQABBBgaBTIgJAZQgnBwg6AuIgTATIgcAaQgMAUgSAVQgsAxhwBRQgKAGgdAmQgmAwgbAaIgNAMQhUBWhOAAIgEAAg");
	this.shape_515.setTransform(1181.4,887.7);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("rgba(219,120,138,0.996)").s().p("AiRIwQggAAgcgTQglgOgXghQgMgSgJgYIgJgZQgXglgugpQgxgKgvgsIgUgVQgbgegQghQgQggAAgXIAAgCQAAgYARgqQAghYBiiYQAUgiBmiOIA8hPQBOhmCYgiQAjgIAngFQBPgIBLAJQBEAJAgATQAZAWAWAXQANAOANAPQAaAhAVAnQAIAOAfANQAaALADAZQADAOAAAXIABAfQABBFgdBXIgJAbQgqB2g9AxIgUATIgeAcQgNAWgTAVQguA1h3BWQgKAGgfApQgoAzgcAcIgNANQhaBdhTAAIgDgBg");
	this.shape_516.setTransform(1180.7,889.8);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("rgba(219,120,138,0.996)").s().p("AiZJQQghgBgdgTQgogPgYgjQgMgTgKgaIgJgaQgYgngxgsQgzgJgygvIgWgWQgcgggRgiQgSgiAAgYIAAgCQABgZARgsQAiheBoigQAVgjBtiWIA+hUQBShsCgglQAlgIApgFQBUgKBPAKQBHAJAiAUQAbAWAXAZQAOAPANAQQAbAjAXApQAIAPAhANQAbAMAEAaQADAOAAAYIAAAhQACBJgfBdIgJAbQguB9hAAzIgWAVIggAdQgNAXgUAXQgwA3h9BbQgKAHghArQgqA3geAeIgNAOQhfBihYAAIgDAAg");
	this.shape_517.setTransform(1180.1,891.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("rgba(219,120,138,0.996)").s().p("AigJvQgjAAgfgVQgqgQgZglQgNgUgJgbIgKgcQgZgpg0guQg2gJg1gxIgXgXQgegigSgkQgSgjAAgaIAAgBQAAgbATgvQAkhhBuipQAVgkBzifIBChZQBVhxCogoQAngJArgFQBZgLBTAKQBLAJAjAVQAdAYAYAZQAPAQANARQAdAlAYArQAJAPAiAOQAdANAEAbQADAPAAAaIAAAiQABBNggBhIgKAdQgwCDhEA2IgXAWIgiAeQgOAYgVAYQgyA6iEBhQgKAHgjAuQgsA6geAgIgPAOQhkBphdAAIgBAAg");
	this.shape_518.setTransform(1179.4,893.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("rgba(219,120,138,0.996)").s().p("AioKPQglgBghgVQgrgRgagnQgOgVgKgdIgKgdQgagrg2gwQg5gKg4gzIgYgYQgggjgTgmQgTglAAgbIAAgBQAAgcAUgxQAmhmB0ixQAWglB5ioIBEhdQBZh4CxgqQApgKAtgGQBdgLBXAKQBPAJAlAWQAeAZAZAbQAQAQAOASQAeAmAZAuQAJAQAkAOQAfANAEAdQADAQAAAaIABAlQABBQgjBnIgKAeQgzCJhIA4IgYAXIgkAgQgOAagWAZQg1A8iKBmQgLAIgkAxQguA9gfAhIgPAQQhpBvhhAAIgCAAg");
	this.shape_519.setTransform(1178.8,896);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("rgba(219,120,138,0.996)").s().p("AiwKuQgnAAghgXQgugRgbgqQgOgWgLgeIgKgfQgbgtg5gyQg8gKg6g1IgagaQghgkgUgnQgVgnAAgdIAAgBQABgdAUgzQAphqB5i6QAYgmB+ixIBIhiQBch9C6gtQAqgLAwgGQBggMBcAKQBTAJAnAXQAfAaAaAcQARASAOASQAgAoAaAwQAKARAmAPQAgANAEAeQADARAAAcIAAAmQABBUgkBrIgLAgQg2CQhLA6IgaAYIglAiQgPAagXAaQg3BAiQBrQgMAIglA0QgwBAghAjIgQARQhtB1hmAAIgCAAg");
	this.shape_520.setTransform(1178.2,898.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("rgba(219,120,138,0.996)").s().p("Ai3LOQgpgBgjgYQgwgRgcgsQgPgXgLgfIgKghQgcgvg8g1Qg/gKg9g3QgNgMgNgPQgkglgVgqQgVgoAAgeIAAgBQAAgeAWg2QAqhuCAjDQAYgnCEi5IBLhnQBgiDDCgwQAsgLAygGQBlgNBgAKQBXAJAoAYQAgAbAcAdQARATAQATQAhAqAbAyQAKARAoAQQAiANAEAgQADARAAAdIAAAoQABBYgmBxIgMAhQg5CWhPA8IgaAaIgnAjQgQAbgYAcQg5BCiXBwQgLAJgoA2QgyBEgiAlIgQARQhyB8hrAAIgBAAg");
	this.shape_521.setTransform(1177.5,900.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("rgba(219,120,138,0.996)").s().p("Ai/LtQgrAAgkgZQgygTgdgtQgQgYgLgiIgLgiQgdgxg/g3QhBgKg/g5IgdgcQglgngWgrQgWgqAAgfIAAgBQAAggAXg4QAshyCGjMQAZgoCKjBIBOhsQBkiKDKgyQAugLA0gHQBpgOBkAKQBbAKAqAYQAiAcAdAfQASATAQAUQAiAsAdA0QAKASApAQQAlAOAEAhQACASABAfIAAApQAABcgnB1IgNAjQg8CchSA/IgcAbIgpAkQgQAdgZAcQg7BFieB2QgMAJgpA5Qg0BHgiAnIgRASQh4CChvAAIgBAAg");
	this.shape_522.setTransform(1176.9,902.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("rgba(219,120,138,0.996)").s().p("AjHMNQgsAAgmgbQg0gTgegvQgRgagLgiIgLgkQgeg0hCg4QhEgKhCg8QgPgNgPgQQgmgpgXgsQgYgsAAghIAAAAQAAghAYg7QAvh2CLjUQAagpCQjLIBRhwQBoiQDSg1QAwgMA2gHQBugPBoALQBfAKArAZQAkAdAeAgQASAUARAVQAkAtAeA3QAKASAsARQAlAPAFAiQACATAAAfIAAAsQABBfgqB6QgGASgHATQg+CihXBCIgdAbQgUATgWATQgRAegaAeQg9BHikB8QgNAJgrA7Qg1BLglApIgRASQh8CJhzAAIgCAAg");
	this.shape_523.setTransform(1176.3,904.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("rgba(219,120,138,0.996)").s().p("AjOMsQguAAgogcQg2gUgfgxQgRgagMgkIgMgmQgfg1hEg7QhGgLhGg+QgPgNgPgQQgpgrgYguQgZguABghIAAgBQAAgiAZg9QAwh6CSjdQAbgqCWjTIBTh1QBsiWDag4QAygMA4gIQBzgQBsALQBjAKAtAaQAkAfAgAhIAkAqQAlAvAfA5QALATAuARQAnAQAEAjQADAUAAAgIAAAuQABBjgsB/IgOAmQhBCphaBDIgfAdIgsAnQgRAfgbAfQg/BKirCBQgMAKgtA+Qg4BOglArIgSATQiBCPh4AAIgBAAg");
	this.shape_524.setTransform(1175.6,906.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("rgba(219,120,138,0.996)").s().p("AjWNMQgwAAgpgdQg4gVgggzQgSgcgMglIgMgnQggg4hHg9QhJgKhJhAQgQgPgPgQQgqgsgZgwQgagwAAgiIAAgBQAAgjAag/QAzh+CYjnQAbgrCcjcIBXh5QBvicDjg6QA0gNA6gJQB2gQBxALQBnAKAuAbQAmAgAgAiQAVAVARAXQAnAxAgA6QALAVAwARQAoAQAFAlQADAUAAAiIAAAvQAABngtCEIgPAnQhDCvheBHIggAeIguAoQgSAggcAhQhBBMiyCHQgMAJgvBBQg5BSgnAsIgTAVQiGCVh8AAIgBAAg");
	this.shape_525.setTransform(1175,908.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("rgba(219,120,138,0.996)").s().p("AjeNrQgxAAgrgeQg6gVghg2QgTgcgMgnIgMgpQgig5hJhAQhMgKhMhDQgQgOgQgSQgsgtgagyQgbgxAAgkIAAAAQAAglAbhBQA1iDCejvQAdgsChjkIBZh+QB0iiDqg9QA3gOA8gJQB7gRB1ALQBqAKAxAcQAnAhAhAkQAVAWASAXQAoAzAiA9QALAVAxASQArAQAFAmQACAVABAjIAAAxQAABrgwCJIgOAoQhHC2hiBJIghAfIgwAqQgSAhgdAhQhEBQi3CMQgNAKgxBDQg7BVgoAuIgTAWQiLCbiBAAIgBAAg");
	this.shape_526.setTransform(1174.4,910.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("rgba(219,120,138,0.996)").s().p("AjmOLQgzAAgsgfQg8gXgjg3QgSgdgNgpIgNgqQgig8hMhCQhPgKhOhFQgRgPgRgRQgtgvgcg0QgcgzAAglQAAgmAchEQA4iGCjj4QAdgtCojtIBdiDQB2ioD0hAQA3gOA/gJQB/gSB5ALQBvAKAxAdQApAiAjAlQAVAXAUAYQApA0AjA/QALAWA0ATQArAQAGAoQACAWAAAkIAAAyQAABvgxCOIgQAqQhJC8hlBLIgjAgIgxArQgTAjgeAjQhGBSi+CRQgOAKgxBHQg+BXgpAxIgUAWQiPCiiGAAIgBAAg");
	this.shape_527.setTransform(1173.7,912.6);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("rgba(219,120,138,0.996)").s().p("AjtOqQg1AAguggQg+gXgkg6QgTgegNgqIgNgsQgjg9hPhFQhSgKhRhHQgSgPgRgTQgvgwgcg2Qgdg0AAgnQAAgnAdhGQA5iLCqkAQAeguCtj2IBgiHQB6ivD8hCQA6gPBAgJQCEgTB9ALQByALA0AdQAqAjAkAnQAWAXAUAZQArA2AjBCQANAWA1ATQAtARAFApQADAXAAAlIAAA0QAABzg0CTIgPArQhNDChpBOIgjAhQgZAXgaAWQgUAkgfAjQhIBVjFCXQgNALg0BIQg/BcgrAyIgUAXQiUCoiKAAIgBAAg");
	this.shape_528.setTransform(1173.1,914.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("rgba(219,120,138,0.996)").s().p("AlbOpQhAgZglg7QgTgfgOgsIgNgtQgkhAhShGQhngNhmhqQgwgygeg3Qgeg2AAgoQAAh4EJmRQAng6EOl/QCbjeFlg1QCJgUCAAMQB3ALA1AeQBGA7A2BDQAsA4AlBDQAMAXA3AUQAvASAGAqQADAXAAAnIAAA2QAACHhGC0QhQDIhsBQQgqAogwAoQgUAmggAlQhLBXjLCcQgOALg0BMQhCBegrA0QimDHiYAAQg3AAgvghg");
	this.shape_529.setTransform(1172.5,916.7);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("rgba(219,120,138,0.996)").s().p("AktPBQgXgIgVgOQg/gYglg8QgTgegNgoIgCgFIgNgtQgSgggcghQgbgggmggIgGgGQgrgGgsgVIgBgBQg8gdg6g7QgsgsgcgxIgHgLQgQgdgHgYQgHgWAAgUQAAgaAMgnIAFgOQASg3AohNQAag0Alg8QA0hYBJhuQAXgkBiiNIC7kJQA1hMBNg5QCThuDqgkQBJgLBHgCQA+gBA7AGIAQABQBpAMAzAdQAXASAVAUQAtApAkAuIAdAmQAcAoAZAtQAMAXA2AVIALAEQAkATAGAkQADAYAAAnIABA1IAAAPQAAAbgDAdQgFAwgNA0QgRBEgdBMQgcBGggA4QgVAlgXAeQgoA3gsAhQgrApgvAoIgQAbQgQAXgUAYQgaAfgpAnQg1AyhJA8IhSBBQgPAMg1BKIghAtIgCADIgbAkQgbAjgVAaIgnArQg1A3gyAkQgpAegnAQQgvATgxABQgeAAgcgKg");
	this.shape_530.setTransform(1172.3,916.9);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("rgba(219,120,138,0.996)").s().p("AksPDQgWgIgVgOQg/gYgmg8QgSgdgNgpIgCgFIgOgtQgSgggbghQgbghgmggIgGgFQgrgGgrgVIgCgBQg9gcg6g6QgtgrgcgxIgHgLQgPgdgIgZQgGgVAAgUQAAgaAMgnIAEgOQASg4AnhMQAag2Alg7QAzhYBIhuQAYglBiiMIC7kKQA1hLBMg6QCShwDqglQBJgLBIgDQA9gBA7AGIAQACQBpALAzAdQAYATAVAUQAsAoAlAuIAdAnQAbAmAaAuQANAXA1AVIALAFQAkATAGAlQAEAXABAnIAAA1IABAPQAAAbgDAdQgEAwgMA0QgQBEgeBMQgcBGggA4QgVAkgXAfQgoA3gsAiQgrApguAoIgRAbQgQAXgUAYQgZAfgpAnQg1A1hJA7QglAfgrAiQgQANg1BIIgiAsIgCADIgbAjIgxA8QgUAXgTAUQg2A4gyAkQgnAdgnARQgwAUgvABIgDAAQgdAAgcgJg");
	this.shape_531.setTransform(1172.1,917.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("rgba(219,120,138,0.996)").s().p("AkpPFQgWgIgVgNQhAgYglg8QgTgegNgpIgCgFIgOgsQgSgigbggQgbgiglgfIgGgFQgqgGgtgVIgCgBQg9gcg6g4QgtgrgdgwIgHgLQgPgcgIgaQgGgUAAgVQAAgbAMgmIAEgPQARg3AmhNQAag3Alg6QAzhYBIhuQAZgnBgiKIC8kKQA0hMBMg7QCRhxDpgmQBJgMBIgDQA+gBA7AGIAQACQBoAMA0AdQAYATAVATQAtAoAlAuQAPATAOAUQAbAmAaAuQAOAYA0AVIALAFQAjATAHAlQAEAYABAmIACA1IAAAPQABAbgCAdQgDAwgMAzQgQBFgeBMQgbBGghA4QgVAkgXAfQgpA3gsAiQgrAqgtAoIgQAbQgQAXgUAYQgaAfgpAoQg1A2hHA6QglAggrAiQgRAOg0BGIgiArIgDACIgbAkQgcAigWAZIgnAqQg3A4gxAkQgnAegnARQgvAVgwABIgFAAQgcAAgagIg");
	this.shape_532.setTransform(1171.9,917.2);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("rgba(219,120,138,0.996)").s().p("AknPGQgWgHgVgOQhAgXgmg9QgSgdgNgpIgCgFIgOgtQgSghgbggQgbgjgkgeIgGgGQgrgGgsgVIgCgBQg+gbg6g3QgvgqgcgvIgHgMQgQgcgHgZQgGgUAAgWIAAAAQAAgbALgmIAEgOQARg5AlhMQAag5Akg4QAzhYBIhvQAagnBfiJIC8kLQA0hMBMg8QCPhzDpgnQBJgMBJgDQA+gBA6AGIAQACQBnAMA2AeQAXASAWATQAtAoAlAuQAPASAOAUQAcAnAaAuQAOAYA0AWIAKAFQAjATAHAlQAFAYABAlIACA1IABAPQABAbgBAdQgDAxgLAzQgPBEgeBMQgcBGghA5QgVAkgXAfQgpA3grAiQgsArgsAnQgIAOgJANQgQAXgUAYQgaAfgoApQg1A3hFA6QgmAggqAiQgSAPg0BEQgSAXgRATIgCADIgcAjQgcAigXAYQgUAXgTATQg4A4gwAjQgnAggmARQguAWgwABIgHAAQgbAAgagIg");
	this.shape_533.setTransform(1171.8,917.4);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("rgba(219,120,138,0.996)").s().p("AklPIQgWgHgVgOQg/gXgng9QgSgegOgoIgCgFIgOgtQgSgigaggQgagkgkgdIgHgFQgqgHgtgUIgCgBQg/gag6g2QgvgpgdgwIgHgLQgQgcgHgaQgGgUAAgWQAAgbAMgmIADgOQAQg5AlhNQAZg5Alg4QAyhXBIhvQAagpBfiIQBBheB7itQA0hLBLg+QCOh0DpgpQBJgMBJgEQA+AAA7AGIAPACQBnAMA2AeQAYASAWATQAtAnAmAvIAdAmQAbAmAbAuQAOAYAzAXIAKAFQAjAUAHAkQAFAYACAmIADA1IABAPQACAagCAdQgBAxgLAzQgOBEgfBNQgbBFgiA5QgVAkgXAfQgpA3grAjQgsArgrAoIgRAaQgQAXgUAZQgaAfgoAoQg2A6hDA4QglAhgqAiQgTAQgzBDQgTAWgRASIgDADIgcAjIgzA6IgoApQg5A3gwAkQglAggmASQguAWgwACIgHABQgbAAgagIg");
	this.shape_534.setTransform(1171.6,917.6);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("rgba(219,120,138,0.996)").s().p("AkjPKQgWgHgWgNQg+gXgng+QgSgdgOgpIgCgFIgOgtQgSgigZggQgbgkgkgdIgGgFQgqgHgtgUIgCgBQhAgag6g1QgwgogdgvIgHgLQgQgcgHgaQgGgTAAgXQAAgbALgmIAEgPQAPg5AkhNQAZg6Akg2QAyhYBIhvQAbgrBdiGIC8kMQA1hLBKg+QCOh3DpgpQBIgNBJgEQA/AAA6AGIAPACQBnANA3AeQAYASAWASQAtAnAmAvIAdAmQAbAmAcAuQAOAZAyAXIAKAFQAjAVAHAkQAGAYADAlIADA1IABAOQACAbgBAdQAAAxgLAyQgOBFgeBNQgcBFgiA5QgVAkgXAgQgpA2grAjQgsAsgrAoIgRAaQgQAXgUAZQgZAfgoApQg2A7hCA4QglAhgpAiQgUARgzBBQgTAWgSARIgCADIgdAiIgzA6IgpAoQg7A3guAkQglAhglASQguAXgwADIgJAAQgaAAgZgHg");
	this.shape_535.setTransform(1171.5,917.8);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("rgba(219,120,138,0.996)").s().p("AkhPLQgXgGgVgNQg/gXgmg+QgTgegOgoIgCgFIgOgtQgSgjgZgfQgbgmgjgcIgGgFQgqgHgtgUIgCgBQhBgZg6gzQgxgogdguIgHgMQgQgcgHgaQgGgSAAgYIAAAAQAAgbALgmIAEgPQAOg6AjhMQAZg7Akg2QAxhXBIhwQAcgsBciEIC9kNQA0hLBKg/QCNh4DogrQBJgNBJgEQA/AAA6AGIAPACQBmANA4AeQAYASAWASQAtAmAnAvIAdAnQAbAlAcAvQAPAYAxAYIAKAGQAiAUAIAkQAGAZADAkQADAXABAeIACAPQACAaAAAdQAAAygKAyQgNBEgfBNQgcBFgiA6QgVAjgYAgQgpA3gqAjQgsAtgrAnIgQAaQgRAXgUAZQgZAfgnAqQg3A9hAA2QglAigpAiQgUASgzA/QgUAWgSARIgCACIgdAiQgdAhgXAYIgqAoQg7A3gtAkQglAhglATQgtAYgwADIgKAAQgZAAgZgHg");
	this.shape_536.setTransform(1171.4,918);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("rgba(219,120,138,0.996)").s().p("AkfPNQgXgGgWgNQg+gXgng+QgTgdgNgpIgCgFIgPgtQgSgjgYgfQgbgngjgbIgGgFQgqgHgtgUIgCgBQhCgYg6gyQgygngdguIgHgMQgQgbgHgbQgGgSAAgYQAAgcALgmIADgOQAPg6AihNQAYg8Akg1QAxhXBIhvQAdguBbiDIC8kNQA1hLBJhAQCMh6DogsQBIgOBJgEQBAAAA6AHIAPABQBlANA5AfQAYARAXATQAtAlAnAwQAPASAOAUQAbAlAdAvQAPAZAwAYIAKAGQAhAVAJAkQAGAYAEAkQADAXACAeIABAPQADAaAAAdQACAygKAxQgNBFgfBNQgbBEgkA7QgVAjgXAgQgpA3grAkQgsAtgpAnIgRAaQgQAXgUAZQgaAggmApQg4A/g+A2QglAigpAiQgVATgyA9QgUAVgSAQIgDADIgdAiQgeAggXAYIgqAoQg9A2gsAkQgkAigkATQgtAZgxADIgKAAQgZAAgYgGg");
	this.shape_537.setTransform(1171.3,918.1);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("rgba(219,120,138,0.996)").s().p("AkdPOQgXgFgWgNQg+gXgng+QgTgegOgoIgCgFIgOgtQgSgkgYgfQgbgngigbIgGgEQgqgIgugUIgCAAQhCgYg7gxQgygmgeguIgHgLQgQgcgHgbQgFgRAAgZIAAAAQAAgcAKgmIAEgOQANg7AihMQAYg+AjgzQAxhXBIhwQAegvBZiCIC9kNQA1hLBJhBQCKh8DogtQBIgOBKgFQBAABA5AGIAPACQBkANA7AfQAYARAWATQAtAlAoAvQAPASAPAUQAaAlAeAwQAPAZAvAYIAKAHQAhAVAJAjQAHAZAEAkQADAWACAfIACAOQADAbABAcQACAygJAyQgMBEggBOQgbBDgkA7QgUAjgYAhQgqA3gqAkQgsAtgpAnIgRAaIgkAwQgZAggmAqQg4BBg9A0QgkAjgpAiQgWAUgyA7QgUAVgTAQIgCACIgeAiQgeAggYAXIgqAnQg+A3grAjQgjAjgkAUQgtAZgxAEIgOABQgWAAgXgHg");
	this.shape_538.setTransform(1171.1,918.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("rgba(219,120,138,0.996)").s().p("AkcPQQgXgFgVgNQg+gWgog/QgSgegPgoIgCgFIgOgtQgSglgXgeQgbgogigaIgGgFQgqgIgugTIgCgBQhDgWg7gwQgzglgeguIgHgLQgQgcgHgbQgFgRAAgZIAAgBQAAgcAKglIAEgOQANg8AghMQAYg/AjgyQAwhXBIhwQAfgwBYiBIC+kNQA0hLBJhCQCJh+DoguQBIgOBJgGQBBABA5AHIAPACQBjANA8AfIAvAjQAtAlAoAvIAeAnQAaAkAeAwQAQAZAuAZIAKAHQAhAVAJAkQAHAYAFAkQADAWADAeIABAPQAEAaABAdQAEAygJAxQgMBFggBNQgbBEgkA7QgVAjgYAhQgpA3gqAkQgsAvgpAmIgRAaQgQAXgUAZQgZAggmAqQg4BDg7A0QgkAjgoAhQgYAWgxA5QgVAVgTAPIgCACIgfAhQgeAggYAXIgqAnIhqBaQgiAjgkAVQgsAZgxAEIgPABQgWAAgXgGg");
	this.shape_539.setTransform(1171,918.5);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("rgba(219,120,138,0.996)").s().p("AkbPSQgWgFgWgNQg9gWgpg/QgSgegOgoIgDgFIgOgtQgTglgWgeQgbgpghgZIgGgFQgpgIgwgTIgBgBQhEgWg7guQg0glgeguIgHgLQgRgbgGgbQgFgRAAgaQAAgdAKglIADgOQAMg8AghMQAYhAAjgyQAwhWBHhwQAggyBXh/IC+kOQA0hLBIhDQCIiADogvQBIgPBJgFQBCABA4AHIAPACQBjANA8AgQAYAQAYASQAtAkApAwQAPASAOAUQAbAkAeAwQAQAaAtAaIAKAGQAgAWAKAjQAIAZAFAjQAEAXADAeIABAPQAFAaABAcQAFAzgJAwQgLBFggBOQgbBDgkA7QgVAjgYAhQgqA3gpAlQgtAvgoAnIgRAZIgkAwQgZAhgmAqQg5BFg4AyQgkAkgoAiQgYAWgyA4QgVAUgTAOIgDACIgeAhQgfAfgYAXIgrAnIhqBZQghAkgkAVQgrAbgyAEIgPABQgWAAgXgFg");
	this.shape_540.setTransform(1171,918.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("rgba(219,120,138,0.996)").s().p("AkZPUQgXgFgWgMQg9gXgog/QgTgegPgoIgCgFIgPgtQgSgmgWgdQgagqghgZIgHgEQgpgJgvgSIgCgBQhFgVg6gtQg1gkgeguIgHgLQgRgbgGgcQgFgQAAgaIAAgBQAAgcAKglIADgPQAMg8AehMQAYhBAjgxQAvhVBIhxQAgg0BWh9IC+kPQA0hKBIhFQCHiBDngwQBIgPBKgGQBBABA5AHIAPACQBiAOA9AfQAZARAXASQAtAjApAwQAQASAOAUQAbAkAeAwQARAaAsAbIAKAGQAgAWAKAkQAIAYAFAjQAFAXADAeIACAPQAEAaACAcQAGAzgIAwQgLBFggBOQgbBDglA7QgVAjgYAhQgqA4gpAkQgtAwgnAmIgRAaIgkAwQgZAhglAqQg6BHg3AyQgkAkgnAhQgZAYgxA2QgVATgUAOIgDACIgfAhIg3A1IgsAmIhqBZQghAlgjAWQgrAbgxAFIgQAAQgWAAgWgEg");
	this.shape_541.setTransform(1170.9,918.8);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("rgba(219,120,138,0.996)").s().p("AkXPVQgYgEgVgMQg+gXgog/QgTgegOgoIgCgFIgQgtQgSgmgVgeQgbgrgggXIgHgFQgogJgwgSIgCgBQhGgUg6gsQg1gjgfgtIgHgLQgRgcgGgbQgFgQAAgbIAAgBQAAgcAKglIADgPQALg9AehLQAXhDAjgvQAuhWBIhxQAhg1BVh8IC/kPQA0hKBHhGQCGiDDngxQBIgPBKgHQBBACA4AHIAQACQBhAOA+AgQAZAQAXASQAuAjApAwIAeAmQAaAjAgAxQAQAaAsAbIAKAHQAfAWALAjQAIAZAGAjQAFAXADAdIACAPQAFAaADAcQAGAzgIAwQgKBFggBOQgbBDgmA8QgUAigZAiQgqA3goAlQgtAxgnAmIgRAZIgkAxQgZAgglArQg6BIg1AxQgkAlgnAhQgaAZgwA0QgWATgUANIgDACIgfAhIg4A0IgsAmQhCA2goAjQghAlgiAXQgrAbgxAGIgTABQgUAAgVgFg");
	this.shape_542.setTransform(1170.8,919);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("rgba(219,120,138,0.996)").s().p("AkWPXQgXgEgWgMQg9gWgohAQgTgegPgoIgCgFIgPgtQgTgngUgdQgbgrgggXIgHgFQgogJgwgSIgCgBQhHgTg6grQg2gjgfgsIgHgLQgRgbgGgcQgFgQAAgbIAAgBQAAgdAKgkIACgPQALg9AdhMQAXhEAjguQAuhVBIhyQAig2BUh7IC+kPQA0hKBHhHQCFiFDngyQBHgQBLgHQBBACA4AHIAQACQBgAOA/AhQAZAQAYARQAtAjAqAwIAeAmQAaAjAgAxQARAaArAcIAJAHQAfAXAMAjQAJAZAGAiQAFAXADAdIADAPQAFAaADAcQAHAzgHAwQgKBFggBOQgbBDgmA8QgVAigYAiQgqA3gpAmQgtAxgmAmIgRAZIgkAxQgZAggkArQg6BLg0AwQgkAlgmAhQgbAagxAyQgVATgVAMIgDACIgfAgQggAegZAWIgsAlQhEA2gnAjQggAmgiAXQgqAcgyAGIgWABQgSAAgUgEg");
	this.shape_543.setTransform(1170.7,919.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("rgba(219,120,138,0.996)").s().p("AkVPZQgXgEgWgMQg9gWgohAQgUgegOgoIgCgFIgQgtQgSgngUgdQgbgtgggWIgGgEQgogKgxgSIgCAAQhHgTg7gpQg2gigfgtIgIgLQgQgbgHgcQgEgPAAgcIAAgBQAAgdAJgkIADgPQAKg+AchLQAXhFAiguQAuhVBIhxQAig4BTh5IC/kQQA0hKBGhIQCFiGDmg0QBHgQBLgHQBCACA3AHIAQACQBfAOBBAhQAZAQAXARQAuAiArAxIAeAmQAaAiAgAyQARAaAqAcIAKAHQAeAYAMAiQAJAZAHAiQAFAXAEAeIADAPQAGAZADAcQAIA0gHAvQgJBFggBPQgbBCgnA8QgVAigYAiQgrA4gnAmQguAxglAmIgRAZIgkAxQgZAhgkArQg7BMgyAvQgjAmgmAhIhMBLQgWATgVALIgDACIggAgIg6AzIgsAlQhFA2gmAjQgfAmgiAYQgqAdgxAGIgXABQgTAAgTgDg");
	this.shape_544.setTransform(1170.6,919.4);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("rgba(219,120,138,0.996)").s().p("AkTPaQgXgEgWgLQg9gWgphAQgTgegPgoIgCgFIgQgtQgSgogUgdQgagtgggWIgGgEQgogJgxgSIgCgBQhIgSg7goQg3ghgfgsIgHgLQgRgbgHgdQgEgOAAgdIAAAAQAAgeAJgkIADgPQAJg+AchMQAWhFAigtQAuhVBHhyQAkg5BSh3QAzhLCMjGQAzhKBGhJQCEiIDmg1QBHgQBLgHQBCABA3AIIAQACQBfAPBBAgQAZAQAYARQAuAiArAxQAPARAPAUQAaAjAgAxQASAbApAdIAJAHQAfAYAMAiQAKAZAGAiQAGAXAFAdIACAPQAHAZADAcQAKA1gHAvQgJBFggBOQgbBCgnA9QgVAigZAiQgqA4goAmQgtAyglAmIgRAZIgkAwIg9BNQg7BOgwAuQgjAngmAhIhMBKQgXASgVALIgDABIggAgIg6AzIguAkQhFA2gmAiQgeAogiAYQgpAdgyAHQgMABgNAAQgRAAgSgDg");
	this.shape_545.setTransform(1170.5,919.6);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("rgba(219,120,138,0.996)").s().p("AkRPcQgYgEgWgLQg8gWgqhAQgTgfgPgoIgCgFIgQgsQgSgpgTgcQgbgvgfgUIgGgFQgogJgxgSIgCgBQhJgRg7gnQg4gggfgsIgHgKQgSgcgGgcQgEgOAAgeIAAAAQAAgeAJgkIACgPQAJg/AbhLQAWhHAigrQAthVBIhyQAkg7BRh2QAxhICOjJQA0hKBFhKQCCiKDmg2QBHgQBLgIQBDACA3AIIAQACQBeAPBCAhQAZAPAYARQAuAhArAxQAQASAPAUQAZAiAiAyQARAbApAdIAJAHQAeAYANAjQAKAZAHAiQAGAXAFAcIADAPQAGAaAFAbQAKA1gGAvQgIBFghBOQgbBCgoA9QgUAigaAjQgqA3gnAmQgtA0glAlIgRAZIgkAxIg8BNQg8BQguAtQgjAngmAhIhNBJQgXASgVAKIgDABIghAgQggAdgaAVIguAkQhHA1gkAjQgeAoghAYQgpAegyAIQgNACgOAAQgQAAgRgDg");
	this.shape_546.setTransform(1170.4,919.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("rgba(219,120,138,0.996)").s().p("AkQPeQgYgEgWgLQg8gVgqhBQgTgegPgpIgCgFIgQgsQgSgpgTgcQgagvgfgVIgHgEQgngKgxgRIgCgBQhKgQg8gmQg4gfgggsIgHgKQgRgcgGgdQgEgNAAgeIAAgBQAAgdAJgkIACgPQAIhAAahLQAWhIAigqQAshVBIhyQAlg8BPh1QAxhHCPjLQA0hJBFhLQCBiMDlg3QBHgRBLgIQBEACA2AIIAQACQBdAPBDAhQAaAQAYAQQAuAhAsAxQAPASAPAUQAaAiAiAyQASAbAnAeIAJAHQAeAZANAiQAKAZAIAiQAGAXAGAcIADAPQAHAZAEAcQAMA1gGAuQgIBGghBOQgbBCgnA9QgVAigaAjQgqA3gnAnQgtA0gkAlIgRAZIglAxIg7BNQg8BSgtAsQgjAnglAhQgeAegvArQgYARgWAKIgCABIgiAgIg7AxIguAjQhIA1gkAjQgdApggAZQgpAegyAIQgNACgPAAQgQAAgQgCg");
	this.shape_547.setTransform(1170.4,919.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("rgba(219,120,138,0.996)").s().p("AkPPfQgXgDgXgLQg7gVgqhBQgUgfgPgoIgCgFIgQgsQgSgqgSgcQgbgwgegTIgHgEQgngKgygSIgCAAQhKgQg8gkQg5gfgggrIgHgLQgRgbgGgdQgEgNAAgfIAAAAQAAgeAJgkIABgPQAIhAAZhLQAWhJAigqQAshUBHhzQAmg9BPhzQAuhFCRjOQA0hJBFhMQCAiNDlg5QBGgRBMgIQBEACA2AIIAQACQBcAPBEAiQAaAPAYAQQAvAgAsAyQAPASAPAUQAaAhAiAzQASAbAnAeIAJAIQAdAZAOAiQALAZAIAhQAGAXAGAdIADAPQAIAZAFAbQAMA2gFAuQgHBFgiBPQgaBBgpA+QgVAhgZAjQgrA4gmAnQguA0gjAlIgRAZIgkAxIg8BOQg8BUgrArQgjAogkAhQggAegvApQgXARgWAJIgDABIgiAgIg8AwIguAjQhKA1giAjQgdApggAZQgoAggyAIQgQACgQAAQgOAAgPgCg");
	this.shape_548.setTransform(1170.3,920.1);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("rgba(219,120,138,0.996)").s().p("AkOPhQgXgDgXgLQg7gVgqhCQgUgegPgoIgCgFIgQgsQgTgrgRgbQgbgxgdgTIgHgEQgngKgygRIgCgBQhMgPg7gjQg6gegggrIgHgKQgSgbgGgeQgDgMAAggIAAAAQAAgeAIgkIACgPQAHhAAYhLQAVhLAigoQAshUBHhzQAng/BNhyQAuhDCSjQQA0hJBEhNQB/iPDlg6QBGgRBMgJQBEADA2AIIAQACQBcAPBFAiQAZAPAZAQQAvAgAsAyQAQARAPAUQAZAiAjAyQATAcAlAeIAJAIQAdAaAOAhQALAaAJAhQAHAXAGAcIADAPQAIAZAGAbQANA2gFAuQgHBFghBPQgbBBgpA+QgUAigaAjQgrA3gmAoQguA1giAlIgSAYIgkAxIg7BPQg8BVgqAqQgiApgkAhQghAgguAnQgYAQgXAIIgDABIgiAgIg8AvIgvAjQhLA1ghAiQgcArggAZQgoAggyAJQgQADgRAAQgOAAgOgCg");
	this.shape_549.setTransform(1170.2,920.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("rgba(219,120,138,0.996)").s().p("AkMPjQgYgDgXgKQg7gWgqhBQgUgfgQgoIgCgFIgQgsQgSgrgRgbQgagygegSIgHgEQgmgLgzgQIgCgBQhMgOg8giQg6gdgggrIgIgKQgRgbgGgeQgDgMAAggIAAgBQAAgeAIgkIABgPQAHhAAXhLQAVhMAignQArhUBHhzQAohBBMhwQAshBCUjSQA0hJBDhOQB/iRDkg7QBGgSBNgJQBEADA2AIIAPACQBbAQBGAiQAaAOAZARQAvAfAsAyQAQARAPAUQAZAhAkAzQATAcAlAfIAJAIQAcAaAOAiQAMAZAJAhQAHAXAGAcIAEAPQAIAZAGAbQAOA2gEAuQgGBFghBPQgbBAgqA/QgUAhgaAkQgrA4gmAnQguA2ghAkIgSAZIgkAxIg7BPQg9BXgoAqQgiApgkAgQghAhguAmQgYAQgXAHIgDABIgjAfIg9AvIgvAiQhMA1ghAiQgbArgfAbQgnAggzAJQgRADgSAAIgZgBg");
	this.shape_550.setTransform(1170.2,920.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("rgba(219,120,138,0.996)").s().p("AkLPkQgYgCgWgKQg7gWgrhCQgTgegQgoIgCgFIgRgsQgSgsgQgbQgbgygdgSIgHgDQgmgLgzgRIgCAAQhNgOg8ggQg7gdgggqIgIgLQgRgbgGgeQgDgLAAghIAAAAQAAgfAIgjIABgQQAGhBAXhLQAUhMAigmQAqhUBIh0QAohCBLhuQArhACWjUQAzhJBDhPQB+iTDkg8QBGgSBMgJQBFADA1AIIAQACQBaAQBHAiQAaAPAZAQQAvAeAtAzQAQARAPAUQAZAhAkAzQATAcAkAgIAJAIQAcAaAPAhQAMAaAKAgQAHAYAHAcIAEAPQAIAYAHAbQAPA3gEAtQgGBFghBQQgbBAgqA/QgVAhgaAjQgrA4glAoQguA2ghAlIgSAYIgkAyIg6BPQg+BZgmAoQgiAqgjAhQgiAiguAjQgZAQgXAGIgDABIgjAfIg+AuIgwAiQhMA1ggAiQgbAsgfAaQgnAigyAJQgSADgTAAIgYgBg");
	this.shape_551.setTransform(1170.1,920.7);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("rgba(219,120,138,0.996)").s().p("AkKPmQgYgDgWgKQg7gVgrhCQgUgegQgoIgCgFIgQgtQgTgsgPgaQgbg0gcgQIgHgEIhZgbIgCgBQhPgNg7gfQg8gcghgqIgHgKQgSgbgGgeQgCgLAAgiIAAAAQAAgfAHgjIABgPQAGhCAVhLQAVhOAhglQAqhTBIh0QAphDBKhuQApg9CYjXQAzhJBDhQQB8iUDkg+QBGgSBMgKQBFADA2AJIAPACQBaAQBIAjQAaAOAZAQQAvAeAuAyQAPASAQAUQAZAgAkAzQAUAcAjAhIAJAIQAbAbAPAhQANAaAKAgQAIAXAHAcIAEAPQAJAYAHAbQAQA3gEAtQgFBGgiBPQgbBAgqA/QgVAhgaAkQgrA4glAoQguA3ghAkIgRAYIglAyIg5BQQg+BbglAnQghAqgjAhQgjAjguAiQgZAPgYAGIgDABIgjAeIg+AuIgxAhQhNA0gfAjQgaAsgfAbQgmAigzAKQgTAEgVAAIgVgBg");
	this.shape_552.setTransform(1170,920.9);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("rgba(219,120,138,0.996)").s().p("AkJPnQgYgCgWgKQg7gVgrhCQgUgegQgpIgCgFIgQgsQgTgsgPgbQgag0gdgQIgGgEIhagbIgCgBQhPgMg8gdQg9gcgggpIgIgLQgSgagFgfQgDgKAAgiIAAgBQAAgfAIgjIABgPQAEhCAVhLQAUhPAigkQAphTBIh0QAqhFBIhsQApg8CZjZQAzhJBChRQB7iWDkg+QBGgTBNgKQBFADA1AJIAQACQBYAQBKAjQAaAOAZAQQAvAdAuAzQAQARAPAUQAZAgAlA0QAUAcAiAhIAJAJQAbAbAQAhQANAaAKAfQAIAYAHAbIAFAQQAJAYAIAbQAQA3gDAsQgEBGgiBPQgbBAgrBAQgUAggbAkQgrA4glApQguA4ggAkIgSAYIgkAxIg5BRQg+BcgjAnQgiAqgiAhQgkAkguAgQgZAPgYAFIgDABQgRAQgTAOIg/AtIgwAhQhPA0geAiQgaAtgeAcQgmAjgzAKQgTAEgWAAIgUgBg");
	this.shape_553.setTransform(1170,921.1);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("rgba(219,120,138,0.996)").s().p("AkHPpQgYgCgXgJQg6gVgshDQgTgegRgoIgCgFIgQgtQgTgtgPgaQgag1gcgPIgGgEIhagbIgCgBQhQgLg8gcQg9gbghgqIgIgKQgSgagFgfQgDgKAAgjIAAAAQAAggAHgjIABgPQAFhCAUhLQAThQAhgjQAqhTBHh0QArhHBIhqQAmg6CbjbQAzhJBChSQB6iYDkhAQBFgTBNgKQBGADA1AJIAPADQBYAQBLAjQAaANAZAQQAvAdAvAzQAQARAPAUIA+BUQAUAdAiAhIAJAJQAaAbAQAhQAOAaAKAfQAJAYAIAbIAEAQQAKAYAIAaQASA4gDAsQgEBGgiBPQgbA/grBAQgVAhgaAkQgsA4gkApIhOBdIgSAXIgkAyIg4BRQg/BfghAlQgiArgiAhQglAlgtAeQgZAOgZAFIgDABIgkAeIhAAsIgxAgQhQA0gdAiQgZAugeAcQglAkgzAKQgVAEgWAAIgSAAg");
	this.shape_554.setTransform(1169.9,921.2);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("rgba(219,120,138,0.996)").s().p("AkGPqQgZgBgWgJQg7gVgrhDQgUgfgRgoIgCgFIgQgsQgTgugOgZQgag2gcgPIgGgDIhagcIgCAAQhRgLg8gbQg+gaghgpIgIgKQgSgbgFgfQgCgJAAgjIAAgBQAAggAGgiIABgQQAEhDAThKQAUhSAgghQAphTBIh1QArhIBHhpQAlg4CdjdQAzhJBBhTQB5iaDjhAQBGgUBNgLQBGAEA1AJIAPACQBXARBMAjQAaAOAaAPQAvAdAvAzQAQARAPAUQAZAfAmA1QAUAcAhAjIAIAJQAaAbARAhQAOAaALAfQAJAYAIAbIAEAPQALAYAIAbQATA3gCAsQgEBGgiBQQgbA/grBAQgVAggbAlQgrA4gkApIhOBdIgRAYIglAyIg4BRQg/BgggAlQghArgiAhQgmAmgsAcQgaAOgZAEIgDABIgkAeIhBArIgxAgQhRA0gdAiQgYAugdAdQglAkgzALQgVAFgYAAIgQgBg");
	this.shape_555.setTransform(1169.9,921.4);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("rgba(219,120,138,0.996)").s().p("AkFPsQgYgBgXgJQg6gVgshDQgUgfgQgoIgCgFIgRgsQgTgugNgaQgbg3gbgNIgGgEQgmgMg0gPIgCgBQhSgKg8gaQg/gZghgpIgIgKQgSgagFgfQgCgJAAgkIAAgBQAAggAGgiIABgQQADhDAThLQAThSAgggQAphTBHh1QAthKBFhnQAkg2CejgQAzhJBBhUQB4icDjhBQBFgUBOgLQBGAEA0AJIAQACQBXARBMAkQAaANAaAPQAvAcAwAzQAQASAPAUIA/BTQAVAdAgAjIAIAJQAaAcARAhQAOAaAMAeQAJAYAIAbIAFAPQALAYAJAbQATA4gCArQgCBGgjBQQgbA/gsBAQgUAhgbAlQgsA4gkApIhNBdIgRAYIglAyIg3BSQhABigeAkQghAsghAgQgnAngsAbQgbANgZAEIgDAAIglAeIhAAqIgzAgQhSA0gbAiQgYAvgdAdQgkAlg0ALQgWAFgYAAIgPAAg");
	this.shape_556.setTransform(1169.8,921.6);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("rgba(219,120,138,0.996)").s().p("AkEPtQgYgBgXgIQg6gVgshEQgUgegRgoIgCgFIgRgsQgSgvgNgZQgag4gbgNIgHgDQglgNg1gPIgCAAQhSgJg8gZQhAgZghgoIgIgKQgSgbgGgfQgBgJAAgkIAAgBQAAggAGgiIAAgQQADhEAShKQAShTAhggQAohSBHh2QAuhLBEhmQAig0CgjiQAzhIBBhWQB3idDihDQBFgUBOgMQBHAEA0AJIAPADQBWARBNAkQAbANAaAPQAvAbAwA0QAQARAQAUIA/BUQAVAdAfAjIAIAKQAZAcASAgQAPAbAMAeQAKAYAIAbIAFAPQALAYAJAaQAVA4gCArQgCBHgiBQQgbA+gtBBQgUAggbAlQgsA4gjAqIhNBeIgSAXIgkAyIg3BSQhBBlgbAiQghAtghAgQgoAogsAZQgbANgZADIgDAAIglAeIhCAqIgzAfQhTAzgbAiQgWAwgdAeQgkAlgzAMQgXAGgbAAIgMgBg");
	this.shape_557.setTransform(1169.7,921.8);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("rgba(219,120,138,0.996)").s().p("AkDPvQgYgBgXgJQg6gUgshEQgUgegRgoIgCgFIgRgtQgTgvgMgZQgag5gagMIgHgDQglgNg1gOIgCgBQhUgIg8gYQhAgYgigoIgIgKQgSgagFggQgCgIAAglIAAgBQAAggAGgiIABgPQAChFAQhKQAThVAggeQAohTBHh1QAuhMBDhlQAigzChjkQAzhIBAhXQB2ifDihEQBFgUBOgMQBHAEA0AJIAPADQBWARBOAkQAaANAbAPQAvAbAxA0QAPARAQAUIBABTQAVAeAeAkIAJAJQAYAdASAgQAQAbAMAdQAKAYAJAbIAFAPQAMAYAJAaQAWA5gBArQgCBGgjBQQgbA+gtBBQgUAggbAmQgsA4gjAqIhMBeIgSAXQgRAWgUAdIg2BSQhBBmgaAiQghAtggAgQgpAqgsAXQgbAMgaACIgDABIglAdIhCApIg0AfQhUAzgaAiQgWAwgcAfQgkAmgzAMQgZAGgcAAIgJAAg");
	this.shape_558.setTransform(1169.7,922);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("rgba(219,120,138,0.996)").s().p("AkBPwQgZAAgXgJQg6gUgshEQgUgfgRgoIgCgFIgRgsQgTgwgMgYQgag6gagLIgHgEQglgNg1gOIgCgBQhUgHg8gWQhCgYghgnIgIgKQgTgagFggQgBgIAAgmIAAgBQAAggAGgiIAAgPQABhFAQhLQAThVAggeQAnhSBHh2QAvhNBChkQAggwCjjnIByifQB1ihDihGQBFgUBOgNQBIAFAzAJIAQADQBUARBPAlQAbAMAbAPQAvAaAxA0QAQASAQAUQAYAeAoA1QAVAeAeAkIAIAKQAYAcATAhQAPAbANAdQALAYAJAaIAFAQQAMAXAKAaQAXA5gBArQgBBGgjBQQgbA+gtBCQgVAggbAlQgsA5gjAqIhMBeIgRAYQgRAVgUAdQgYAjgeAwQhBBogZAhQggAtghAgQgpArgrAVQgcAMgaACIgDAAIgmAdIhDAoIgzAfQhWAzgZAiQgVAxgcAfQgjAmg0ANQgaAHgfAAIgEgBg");
	this.shape_559.setTransform(1169.6,922.2);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("rgba(219,120,138,0.996)").s().p("AkAPyQgZAAgXgJQg5gUgthEQgUgfgRgoIgCgFIgSgsQgTgwgLgZQgag6gZgLIgHgDQglgNg2gPIgCAAQhVgHg8gVQhCgWgigoIgIgKQgSgagFggQgBgHAAgmIAAgBQAAghAFgiIAAgPQABhGAPhKQAShXAggcQAnhSBHh2QAwhPBBhiQAegvCljpIByigQB0ijDihGQBEgWBPgMQBHAFAzAJIAQADQBUARBQAlQAbAMAaAPQAwAaAxA0QAQARAQAUIBABUIAzBCIAIAKQAYAdATAhQAQAaANAdQALAZAJAaIAGAPQAMAXALAbQAXA5AAAqQAABGgkBRQgaA9guBCQgVAggbAmIhPBjIhLBfIgSAXQgQAVgUAdQgYAkgeAwQhCBqgXAgQggAuggAgQgqArgrATQgcAMgaABIgEAAIgmAdIhDAnIg0AeQhXA0gYAhQgVAygcAfQgiAog0ANQgaAHgfAAIgEAAg");
	this.shape_560.setTransform(1169.6,922.4);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("rgba(219,120,138,0.996)").s().p("Am6NMQgihXgQgjQgag7gYgKQgmgPg8gQIgCAAQi2gNhBhKQgZgdgHgnQgBgHAAgoQAAghAGghIAAgQQAAhGAPhKQARhYAggbQBAiKCejvQAmg7EOl/QCWjWFSg5QBTAGA4AMQBuAYBsA5QBAAiBBBRQAnAwBTBxQBDBTAhBkQANAXALAaQAYA6AAAqQAAB7hsCbQgVAggbAmIirDaQgkAtg2BZQhCBsgVAfQhpCYhjAAIgEAAIgmAcIh5BFQhYAzgXAhQgUAzgbAgQg1A9hfAAQhyAAhJiog");
	this.shape_561.setTransform(1169.5,922.6);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("rgba(219,120,138,0.996)").s().p("Am2NXIgFgMQgdhMgPgkIgFgKQgWgxgVgPIgJgFQgigNg0gPIgLgCIgCAAQgvgFglgHQgugIgigOIgCgBIgUgIQglgTgWgbIgMgRQgPgXgEgcQgDgHAAgjIAAgEQAAgZAEgZIACgPIAAgPIAAgBQAAhGAPhKQARhYAggbQBAiLCejuIABgDQArhAEIl3IADgEQCXjTFNg4IAJABQBNAGA1ALIAKACQBoAYBoA2IAJAGQA7AiA9BLIAIAKQAmAxBNBmIAIAKQA8BPAfBeIAHAMQAJASAJATIAFANQATAxAAAmIAAANQgGB3hmCSQgUAfgcAmIgFAHQhUBrgyA+IgUAaIgNARQgjAsgyBRIgFAIQhBBogYAiIgTAaIgRAUQhUBohTAFIgEAAIgYATIgOAJIhrA+IgNAHQhLArgbAgIgJAKQgQAqgWAdIgJALQgxA4hVAEIgOAAQhugBhIibg");
	this.shape_562.setTransform(1169.5,922.6);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("rgba(219,120,138,0.996)").s().p("Am3NVIgEgLQgehMgPgkIgFgKQgVgygVgOIgJgEQgjgOg0gOIgLgDIgCAAQgwgFgkgHQgtgKgjgOIgBAAIgUgGQgkgVgWgbIgMgQQgPgYgEgbQgEgKAAggIAAgDQAAgaAEgYIACgQIAAgOIAAgBQAAhGAPhKQARhYAggbQBAiLCdjuIACgDQAqg/EJl3IADgFQCWjTFNg3IAJAAQBNAGA1AKIAKACQBpAYBnA3IAJAFQA8AiA8BLIAIAKQAmAwBNBnIAIAKQA9BPAfBeIAHAMQAJARAIAUIAFAMQAUAxAAAmIAAAOQgFB2hlCTQgWAfgbAlIgFAIQhQBlg5BEIgTAYIgNASQgjAvgyBOIgFAIQg/BlgcAkIgVAaIgPATQhSBmhTAMIgDAAIgZATIgOAJIhrA9IgOAIQhKArgbAfIgIALQgRAqgWAdIgJALQgxA4hVADIgPAAQhtgBhIidg");
	this.shape_563.setTransform(1169.5,922.6);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("rgba(219,120,138,0.996)").s().p("Am3NUIgFgLQgdhMgPgkIgFgKQgWgygVgNIgJgFQgjgNg0gOIgLgDIgCAAQgxgGgjgHQgugKghgOIgCgBIgUgFQgigVgWgcIgMgQQgPgYgFgaQgDgLAAgfIAAgCQAAgaADgZIACgPIAAgOIAAgCQAAhFAOhKQAShYAggbQBAiLCdjuIACgDQApg+EJl4IAEgFQCVjSFNg4IAJAAQBOAFA0ALIAKACQBpAYBnA2IAJAFQA8AjA9BKIAHAKQAnAwBMBnIAIAKQA9BPAgBdIAFAMQAKASAIAUIAGAMQATAxABAmIAAAOQgEB2hmCSQgVAggbAlIgGAIQhMBgg9BIIgUAZIgNASQgkAwgxBMIgFAIQg/BhgfAnIgUAaIgPATQhQBkhUARIgDABIgZASIgOAKIhqA9IgOAHQhKAsgbAfIgIAMQgRApgWAdIgJALQgxA3hWADIgOAAQhtgChHidg");
	this.shape_564.setTransform(1169.5,922.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("rgba(219,120,138,0.996)").s().p("Am4NTIgEgLQgehNgPgjIgEgKQgXgygVgNIgJgEQgjgOg0gNIgLgDIgCAAQgygHgigIQgugKghgOIgBgBIgUgDQghgWgWgcIgLgRQgPgYgGgZQgEgNAAgdIAAgCQAAgaADgYIACgQIAAgNIAAgCQAAhFAOhKQAShYAggbQBAiLCdjuIACgDQAog9EKl4IADgFQCWjTFMg4IAJAAQBOAFA0ALIAKACQBpAXBnA3IAJAFQA8AiA9BKIAIAKQAmAwBMBnIAIAKQA9BPAgBdIAGAMQAKASAIAUIAFAMQAUAxABAlIAAAOQgEB3hlCSQgVAggcAkIgGAIQhIBchCBNIgUAYIgNASQgkAzgxBKIgFAHQg+BegiApIgVAaIgPATQhNBihUAXIgDABIgZASIgOAKIhrA8IgNAIQhLAsgaAfIgHAMQgRApgXAdIgJALQgxA2hWADIgOAAQhtgDhHidg");
	this.shape_565.setTransform(1169.5,922.6);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("rgba(219,120,138,0.996)").s().p("Am4NSIgFgLQgdhNgPgjIgFgKQgWgygWgMIgJgFQgjgNg0gOIgLgCIgCAAQgzgJghgHQgugKgggPIgCgBIgUgCQgggXgVgcIgLgRQgPgYgGgYQgFgOAAgbIAAgCQAAgaAEgZIABgPIAAgNIAAgCQAAhFAOhKQAShYAggbQBAiLCcjtIACgDQApg+EJl4IAEgFQCVjTFNg4IAJAAQBNAFA0ALIAKACQBpAXBnA2IAJAFQA8AiA+BLIAHAJQAmAwBNBnIAIAKQA9BPAgBdIAFAMQAKASAIAUIAGAMQATAxACAlIAAAOQgDB3hmCSQgVAggbAkIgGAIQhFBXhHBSIgUAXIgNATIhUB8IgGAIQg8BagmArIgWAaIgOATQhLBghUAdIgEABIgYASIgOAJIhrA9IgNAIQhLAsgaAfIgHAMQgRAqgXAcIgJALQgxA2hXACIgNAAQhsgEhHidg");
	this.shape_566.setTransform(1169.5,922.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("rgba(219,120,138,0.996)").s().p("AkGPzQhsgFhGidIgFgLQgehNgPgjIgEgKQgXgygWgMIgJgEQgjgNg0gOIgLgCIgCgBQgzgJghgHQgtgLgggPIgCgBIgUAAQgfgYgVgdIgLgRQgPgYgGgYQgGgPAAgZIAAgBQAAgbAEgYIABgPIAAgOIAAgBQAAhGAOhJQAShYAggbQBAiKCcjuIACgDQAog9EKl5IAEgFQCUjSFNg5IAJAAQBNAFA0ALIAKACQBpAXBnA2IAJAFQA9AhA9BLIAHAJQAmAvBNBoIAIAKQA9BPAhBdIAFAMIASAlIAFAMQAUAxACAmIAAAOQgDB2hlCTQgVAhgbAiIgHAJQhBBRhMBXIgTAXIgOAUIhUB7IgGAIQg7BXgpAtIgWAaIgPATQhJBdhUAkIgDABIgYASIgOAJIhrA9IgNAHQhMAtgYAfIgIANQgRApgXAcIgJALQgyA1hWACIgNAAg");
	this.shape_567.setTransform(1169.5,922.6);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("rgba(219,120,138,0.996)").s().p("AkIPzQhrgGhGidIgEgLQgehNgPgjIgFgKQgWgygWgLIgKgEQgjgNg0gOIgLgDIgCAAIhTgRQgugMgggPIgCAAQgKgBgJABQgegZgVgdIgLgQQgPgZgGgXQgHgRAAgWIAAgBQAAgcAEgXIABgPIAAgOIAAgBQAAhGAOhJQAShYAggbQBAiKCcjuIACgDQAog8EKl5IAEgFQCUjTFMg4IAJgBQBNAFA0AKIAKACQBpAYBoA2IAJAFQA8AhA9BKIAHAJQAmAvBNBoIAIAKQA9BPAhBdIAFAMIATAlIAFAMQAUAxACAmIAAAOQgCB2hlCTQgWAhgaAiIgIAJQg8BMhSBcIgTAXIgOAUIhUB6IgGAIQg6BTgsAxIgXAZIgOASQhHBchUApIgDACIgZASIgOAJIhqA9IgOAHQhLAtgYAfIgHANQgSApgWAcIgKALQgyA1hWABIgOAAg");
	this.shape_568.setTransform(1169.5,922.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("rgba(219,120,138,0.996)").s().p("AkJPzQhrgHhFidIgFgLQgehOgPgiIgEgKQgXgygWgLIgKgEQgjgNg0gNIgLgDIgCAAIhTgTQgugLgfgQIgCAAIgUACQgcgagVgdIgKgRQgPgZgHgWQgIgSAAgVIAAgBQAAgbAEgYIABgPIAAgNIAAgBQAAhGAOhJQAShYAggbQBAiKCcjuIACgDQAng7EKl6IAEgFQCUjTFMg4IAJgBQBNAFA0AKIAKACQBpAXBoA2IAJAFQA8AhA+BKIAHAJQAlAvBNBoIAIAKQA+BPAhBdIAFAMIASAlIAFAMQAUAxADAlIAAAOQgCB3hkCTQgWAhgbAhIgHAJQg5BIhXBhIgTAWIgOAUQglA5gvBCIgGAHQg5BQgvAzIgYAZIgOASQhEBahUAvIgDACIgZASIgOAJIhrA8IgNAIQhMAtgXAfIgHANQgRApgXAcIgKALQgyA0hWABIgOAAg");
	this.shape_569.setTransform(1169.5,922.6);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("rgba(219,120,138,0.996)").s().p("AkKPzQhrgHhFieIgEgLQgehNgPgiIgFgKQgXgygXgLIgJgEQgkgNg0gNIgKgCIgCAAIhTgVQgugMgfgQIgCAAQgKABgJADQgcgbgTgeIgMgRQgPgZgHgVQgIgUAAgTIAAAAQAAgcAFgXIAAgOIAAgOIAAgBQAAhGAOhJQARhYAhgbQA/iKCcjtIACgDQAng7EKl6IAFgFQCUjTFLg5IAJgCQBNAGA0AKIAKACQBpAXBoA2IAJAFQA8AhA+BJIAHAJQAlAwBOBoIAIAKQA9BOAhBdIAFAMQAJASAKAUIAEAMQAVAwADAlIAAAOQgBB3hlCTQgVAggcAiIgHAJQg1BDhcBmIgUAVIgNAVQgmA7guA/IgFAIQg5BMgyA1IgZAZIgNASQhCBZhVA0IgDADIgYARIgPAJIhqA8IgNAHQhMAugXAfIgHAOQgRApgXAcIgKAKQgyAzhXABIgNAAg");
	this.shape_570.setTransform(1169.6,922.6);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("rgba(219,120,138,0.996)").s().p("AkLPzQhrgIhFieIgDgLQgfhOgOghIgFgKQgYgygWgKIgKgEQgkgNg0gNIgKgDIgCAAIhTgVQgugNgfgQIgBAAQgKACgJADQgbgcgTgeIgLgRQgPgZgIgUQgJgVAAgRQAAgdAFgWIAAgPIAAgNIAAgBQAAhGAOhJQARhYAhgbQA/iJCcjuIACgDQAmg7ELl5IAFgGQCTjTFLg5IAJgCQBNAGA0AKIAKACQBpAXBoA2IAJAEQA9AhA9BKIAHAJQAlAuBOBpIAIAKQA9BOAiBdIAEAMQAKASAJATIAFAMQAUAxAEAlIAAAOQAAB2hlCUQgWAggbAiIgIAJQgxA+hhBrIgTAVIgOAVQgmA8guA+IgGAHQg3BJg2A4IgYAYIgOASQhABWhUA7IgDACIgYASIgPAJIhrA8IgMAHQhNAugVAfIgHAOQgSApgXAbIgKALQgyAzhXAAIgNAAg");
	this.shape_571.setTransform(1169.6,922.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("rgba(219,120,138,0.996)").s().p("Am7NMQgihXgPgjQgag7gZgKQgmgPg8gQIhegYQgvgNgegRIgCABQgKACgJADQgggkgXgnQghg4AAgaQAAgdAFgXIAAgbQAAhGAOhKQARhYAhgbQA/iKCejvQAng7EOl/QCWjWFSg5QBTAGA3AMQBuAYBsA5QBAAiBCBRQAmAwBUBxQBCBTAhBkQAOAXAKAaQAZA6AAAqQAACUidDBQgtA5hnBvIgTAVQgtBKg1BFQhEBZhKBGIgNASQhHBihnBHIh5BFQhYAzgWAhQgVAzgbAgQg0A9hfAAQhzAAhJiog");
	this.shape_572.setTransform(1169.6,922.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[]},1).to({state:[{t:this.shape_501}]},104).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).wait(1));

	// left atrium blood all
	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#6699CC").s().p("A0EX6QgfhOgEheIABhSQAAk0FruWIEEqEQB9k6AQhXQB8qMFAhtQEIhbFrEdQEwDvEBGMQBvCsBBCVQBCCYAABXQAAFLgsDrIgeCOQhFBmg3B7QhyD9AADpIgGBGIgBAiQhOBVh3BOQjxCcmKB1QkuBaldA3QkNArhzAAQlBAAhhj6g");
	this.shape_573.setTransform(623.6,994.3);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#6699CC").s().p("AsRZeIgxgEQgrgFgmgKQhEgRg1ggQg+gkgqg5QgUgZgRgdQgNgYgKgbIgHgRQgahLgEhaIAAgBIABhOIAAgJIACgdQAQliFMr/IAGgOIA3h2QBdjJBJiIQAlhKAdg2QAvhaAmhEIA8hzIAlhUQAkhYAhhCQAXgyAZgtQBRiZBchXQBqhqB4gUIANgBIAbgDQB+gKCIBPQBsBBByB1IAFAFIAUAWQBDBSA6BQQCSDBCMD9IAHANQALASAJAUIADAGQApBNAhBJQAWAvATAsIAGAJIACAHIAHAzQAPBVgCBHQABAlgEAfQgaDmgRC/QgFA+gHA3QgBAegRBpIgSAqQgfBYgWBaQgIApgFAlQgKBGACBHQgKAkgIAlQgPAngNAlQgNAngIAlIgBACQgFAGgJAoIgDALIgEANIgFAOQhMA7hnAxIgZALQi0BMj0AoIh0AQIhMAIQg5AGg7ADIgbADIgYAHIg0AMQhCAQhEAOQg9AHhBAGQgiAFgjADIg9AGIgDAAIgKABQhQAFg8AGQhAADgzAAQgjAAgdgBg");
	this.shape_574.setTransform(620.1,1004.4);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#6699CC").s().p("AnQXaIgDAAIgJAAQhRgCg2ACQhogBhDgOQgYgEgWgFQgogKgjgPQg9gYgugnQg2gpghg8QgRgZgOgcQgLgYgJgaIgGgQQgYhJgDhVIAAgBIAChLIAAgJIABgbQAMl/FEqjIAGgMQAdg5Aeg2QBgi0BaiAQAohCAkgzQA1hQAvg6QAng5AigrQAcgtAVgdQA2hQAqgwQAggsAfglQBniBBng/QB2hQB0AGIAOADIAbADQB1APBwBjQBYBUBVCAIAEAFIANAXQAuBfAjBQQBoDJBtEAQADAEAEAJQAHAQAIAVIACAHQAfBKAaBKIAhBaIAIAJIAAAFIgLAvQgNBLgTBIQgFAhgJAeQg0DTgJC8IgFBwQAAAwgHBNIgGAqQgLBdABBSQABAnAGAjQAJBAAXBCIgUBHIgtA/QgVAhgRAfIgBACQgKACgNAkIgFAIIgHAKIgLAKQhSAphmAcIgaAGQi4AmjogNQg2gDg4gGIhHgJQg2gHg2gKIgZAAIgZAGIgyAMIiAAbQg5ABhAAAIhDADIgmAAIgUAAg");
	this.shape_575.setTransform(619.1,1014.3);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#6699CC").s().p("ADwVuQg0gQg0gSQhUgfhSgmIgZgEIgZAGIgwALIh5AZIh2gMQgfAAgggCQgcgCgbgDIgDAAQhYgLgyAAQhjgKg/gXQhAgTgxgeQg3gggogtQgrgvgag+QgOgZgLgbQgKgYgIgZQgXhNgDhaIAAgBIAChPIAAgaQAHmhFDpOQAegzAggzQBligBph5QBsiOBehSQAsguAqgmQBuh9BLgoQAmglAmgfQB9hqBzglQCBg2BxAhQAVAGAUAIQBrAoBaB4QBEBnA3CKIAEAGQAfB8ALBXQA+DSBQEBQACADACAKQAGASAFAbQAWBJATBJIAZBYIAIAJIgBAGQg5BQguBjQhpDeAADVQAACpAKBfQAQCVAtBeQAdA5AqA+IgWBEQgdAbgfAXIg4A2QgPgBgSAfIgRANQhfAdhwAHIgbABQi7AAjbhCg");
	this.shape_576.setTransform(619.2,1031.6);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#6699CC").s().p("AJxWjQjDggjSh1Ig1ghIgogZQhLgwhEg3IgVgLIgUgDIgngIIgCgBIgYgBIgXAFIgsAKIgeAGIhTAAIgjgIIg/gJIgMgDQgXgCgWgEIgEgBIg9gLIgEAAIhJgMIg4gKQg9gOgtgUQg+gZgvgjQgTgMgQgPQgfgbgYggQgLgPgKgRQgZgngQguIgJgbIgNgdIgHgUIgJgeQgWhOgDhdIAAgBIAAAAIAChRIAAgPIAAgLQAGmsEjngQAgg0AjgzQAkgyAmgwQA9hOBDhFQA4g6A6gyQBkhjBhhAIAogaQAzglAygdQBdhFBNgeQAXgKAUgGQAtgYArgSQBYgmBPgNQAtgJAqAAQBqgJBUArQAQAIAQAKQARAKARANQBZBDA8CDIABAEQAtByAYCLIABAGIACATQAGBzgLBMIgDAyQAUDHAuDoIACAOIAFAaIADATIAFAlIAVB1IAEAXIAOBEIAGAJIgBAGIAAABQgGBEgFBgQgFBIgCBPQgECRAJCPIACAjQABBOABAjQAABFgDA1IgBAvQgDBzgGBIQgBAzACAvIgnAxQgYANgaAMIgTAJQgiATgfAOQgSgBgUATIgTAHQgtAFgvAAQg5AAg8gHg");
	this.shape_577.setTransform(619,1050.4);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#6699CC").s().p("AHlWmQjBhEi5ikIgwgvIgjgiQg+hBg6hIIgQgSIgQgNIgdgaIgCgDIgWgIIgYAFIgtALIgfAHIhUAJIgkgMIg+gSIgOgEIgugIIgDgBQgggHgfgJIgCgBQgrgLgfgHIg4gOQg7gTgugXQg9gfgugnQgSgPgPgQQgdgegWgkQgLgQgJgSQgWgqgMgxQgEgOgDgOIgMgfIgHgVIgJgdQgVhRgCheIAAgBIAAgBIAChTIABgPIAAgLQAEneE8m3QAlgzApgwQAogwAsgsQBHhJBOg+QA/g0BCgsQBxhRBzg0IAugUQA6gbA4gUQBngtBegPQAYgEAXgDQAzgKAwgEQBfgLBUAOQAvAGApAOQBmAbBJBGIAbAaIAbAiQBHBdAeCOIABAEQAWCAgHCMIAAAGIgCAUQgOB2ghBJQgLAZgMAVQgODRAUDvIACAOIACAbIAAAUIACAlQAEA8AGA/IADAZIAJBHIAEAKIgBAFIAAABQAuA4AkBeQAYBDAWBSQAkCSASCTIAFAkIAAByQgCBGgJA4IgJAvQgZBxgxBCQgeAsgnAgQgbAPgdAPQgcAIgdAFIgUAEQgmAJglAFQgVgCgWAHIgWABQhogHhpgig");
	this.shape_578.setTransform(628,1067.5);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#6699CC").s().p("Ag2RFQhjiQhJinIgUgPIgZAGIguAMIh2AZQgvgXhAgYQg2gLg8gWIgCgBQhfghgkgJQidhAhShlQgogygag7QgZg8gIhDQgKgagIgcQgbhfgDh0IAEhjQAAoYFXmSQCXiwDJiAQDAh6DUhBQDPg/DFACQDHACCZBFQChBIBYCJQBeCUAADQQAACagsCcQgvClhVBDQg2DuAAEMIgEA9QgCBLADBPQACAuADAsQCkBLBuDSQBVCkAaCpIAABzQgHBlggBNQhhDtk8AAQnGAAlIncg");
	this.shape_579.setTransform(637.7,1082.6);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#6699CC").s().p("AJrYxQidgUiHhNQjSh5iYj7IgVgkIghg7QhIiLg4iZIgHgQIgDgJIgGgJIgSgRIgEAAIgSgCIgSgBIgZgCIgUgBIgdgEQgfgFgdgBIgVgNIgJgFIgYgOIg3gNIgMgCIgSgDIgEAAQgogHgpgJIgDgBIgBAAIg3gaIg7gZIgKgEQgvgWgtgaQhLgrgogpIgFgEQgPgPgOgPQgggkgYgnQgJgPgHgPQgYgtgNgyIgBgEIgHgXIgNgjIgHgTQgghegChzIAAgCIAEhlIAAgOQABg1AFg1QATjKBCiyQBcjzC0i/QApgrAsgoQCBhxCfhSIAegPQA2gaA2gWQCPg3CIgaQBLgNBFgCIAHABQA1AAAxALQArAFArARQAWACAUAIQAVAHAVAMQAaAJAZAMQBBAcA4AlQAmAWAoAZIAFAEIACACQBBAzA0BAQARAPANAaIAPAWIANAeIAJARIALAWQAOAaANAbQAEAhADAjQAEBsgIB8QgGBWgJBXQgIA5gBBUIgJBOQgRBmgfA/QgBCHANCIQANBtAUBsQAGAKAEAvQAOBHAUBHIAJAfIAGAiIADAWQAuAhAtA2QBSBhA2CGQAbBDAQBDQAOA6AHA7QgDAlgGAbIgDAPQgOBZgSANIgKAWQgJAWgLATQgXAsgdAkQhrCIjJARIgqACQguAAgxgGg");
	this.shape_580.setTransform(644.8,1095.9);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#6699CC").s().p("AJ9ZhQhEgGhEgRQiZgnh+heQjEiXh0kLIgRgoIgZg8Qg4iTgrieIgHgQIgDgJIgGgKIgRgTIgEgCIgPgIIgSgIIgXgKIgTgIIgbgOQgcgRgZgKIgUgNIgJgHIgWgRIg3gFIgNgBIgTgBIgDAAIhTgHIgDgBIgBAAIg0ghIg5geIgKgEQgsgYgxgdQhRgwghgiIgEgEQgRgOgPgPQghgigbgmIgSgcQgcgsgRgvIgBgEIgKgXIgPgiIgHgSQgkhggChyIAAgDIADhnIABgNQACg2AGg2QAVjMBEixQBij5C7izQArgpAvglQCHhpCphDIAfgNQA5gVA3gSQCdgpCAgJQBQgEBBAKIAHACQA2AMApAcQAnAOAkAjQAVAFARASQARANAPAWQAWAQATAVQA0AtAtA3IBCA/IAGAFIACACQAvBBArBLQAMAMAKAjIALAZQADAQAAAQIAJASIAJAYIAXA3IgPBDQgaBugRB3QgMBWgFBXQgEAuARBjIAJBPQAGBjAEBMQAaCGApCCQAjBsAqBiQAMARAKAjQAhBEAjA+IARAcIAJAjIAGAWQAfAmApBCQBGB0AmCCQATBGAIBGQAHA7gBA8QgPAmgRARIgIAOQgdBCgkAWIgRASQgPARgRAPQgkAhgpAZQh/BUixAAIgkgBg");
	this.shape_581.setTransform(652.7,1108.1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#6699CC").s().p("AIBaNQjqg0imigQi1i0hSkbIgNgrQgyi4gljFIgGgQIgCgJIgJgLQgIgMgKgMQgNgQgQgNQgSgPgXgRIgYgZQglgqgdgUQgGgGgDgBIgTgUQgiACgjABIgUAAIgDAAQgvAAgpACQgZgWgYgSQgagRgdgSIhng+QhZg2gZgbIgEgDQg5gugpg0Qgug2gbg7IgCgEQgQgbgNgdQgxhpgBh/QAChRADgkQADg2AGg4QAYjOBHiwQCAk7EIi0QCahqDGg2QA7gQA5gNQEbgvCbA1IAGAEQA1AYAjAtQAjAYAeA1QAhAMAWBKQARAXAOAeQAnA/AhBIQAXAmAhAoIAIAJIA+CkQAJAKAFAsIAJAbIgHAjIAHATQANAqAOApQgTAggSAiQhlDIAADHQAAAvA9C3QBPDtBvDLQCDDuCXCTIAMAkQARAtAuBjQBbDSAADEQAAA8gJA+QgaAmgdAHQg5A9hOApQgWAMgXALQiRBAikAAQhQAAhVgPg");
	this.shape_582.setTransform(661.1,1120.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#6699CC").s().p("AG0bQQkBg7isisQgmgpgjguQiGizgyj1IgKguIgEgdQgfi+gWjFIgEgRIgCgKIgGgMIgHgUIgDgJQgHgTgJgRQgKgUgPgVQgHgPgKgPIgEgIQgYgogbgeIgIgJIgBgBIgRgWQghgSgagEIgEgBIgMgFIgCgBIgIgEIhDAIIgUADQgdgLgdgIIgVgGQgPgPgUgPQgdgXgmgZIgogZIg7gkQgvgdgVgSIgGgEQgYgQgMgKQgpgggjgjQg4g3gjg5IgDgEIgPgWIgUgjQg9hvgBiJQABhOAFgyQADgtAGgvIAEgaQAai7A/igIAag+QCblOE3iYQBvg3CCgeQBNgTBNgLQBCgIA8gEQC3gCBpAuQBHAbArAzIADAEIAEAFQAkAjAVA7IAGAJQAUAYAMA+QAUAZAKBKQAFANAEAQIAIAhQAVBJAQBPIACAFQAPArAaAsIAHAKIAEAMQALBTATBWQAEAIACAOQACAKAAAaIAEAYIABAGIgCAZIgGAMIgBASIgBAJQAJAqAMAmQgKAmgGAkQgRByAXBeQAMBSAvBOIB6CiIAMANQBEBPA4BMQBLBbA/BjIAfAwQCKDjBsDdIAIAmQAGAbALAmQAKAuAPAxIALA1QAWB6gMBtQgHBJgXBCQgSA5gdA2QgfAggiALQhEA0haAiQgZAKgaAIQhSAahZALQhBAIhBAAQhsAAhrgWg");
	this.shape_583.setTransform(674.9,1131.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#6699CC").s().p("AFTceQkZhBiwi5QgqgsgkgzQiNjGgikJIgGgxIgDggQgPjQgLjUIgCgSIgBgLIgDgNIgEgXIAAgLQABgWgDgUQgCgagHgYQgDgTgFgRIgDgJQgPgsgbgpIgIgKIAAgBIgRgaQggglgQgIIgDgCIgJgMIgCgCIgGgJIhJARIgVAEIhEABIgYACQgNgUgTgTQgcgbgqgcIgqgbIhCgmQgxgdgagSIgGgEQgfgTgJgHQgvgggnggQhEg3grg4IgDgEIgRgWQgNgRgLgSQhJh1AAiTQAAhLAGhBQAFgwAHgyIAEgcQAgjKBKioQAPghAQggQC2lhFlh8QB9gsCSgPQBXgJBRgCQBIAAA/AFQDJAWBaBWQA5AxAWBRIACAHIACAIQASAsAIBJIADAMQAJAYAABMQAGAngBBKIABAhIABAmQADBUAABVIAAAHQAIAyAWAxIAFAMIAEALQgGBdAJBdIACAYQACAGgCAhIAAAaIABAGIgCAbIgIAMIgKARIgFAJQAHAuALAqQABAqAFAnQATB8BGBVQAwBEBeA7QA2AeCHBSIASALQBpA6BKA8QBoBNBMBiQATAYASAaQCRDZBAEmIAFAoIAJBIQAFA4AGAwQADAhAAAZQABCGgnBvQgcBLgsA/QglA1gxAtQgjAbgoAOQhQAthkAaQgdAIgeAGQhZAThkAFQgoADgoAAQiWAAiJgfg");
	this.shape_584.setTransform(690.8,1141.5);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#6699CC").s().p("AlRYBQipj5AAlUIAAoMQAdhigKhJQgHg2ggg8Ig4hlQgHgRgGgRIhOAZQg/AShBARQgZg3hMg1QgpgdhLgqIiFhMQinhihShiQhyiIAAi0QAAh4AWiIQAmjrBai7QESo5KjAAQH0AAB4DJQAqBHACBvQACA+gHByQAAApgoDvIgmDsQAABFAaBDQgaB0AABwIgHBGIgBAjQgSATgTATQAYEQC/B4QBTA2CMAoQBSAXCvAqQCdApBkAvQCGA/BZBiQDaDuABH8QgBB0gHA8QgVCShEByQjLFRpTAAQqlAAkYmeg");
	this.shape_585.setTransform(707.9,1150.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#6699CC").s().p("AItdBQkcgTjlhWQkwhxi2jkQgagggXgiQiUjLgdjvIgJhEQgPjBghjiIgMhwQAMhlgOhJQgEgTgGgUQgMglgUgoQgwhbgEgRQgHgRgFgSIgZABIgoAAQg0ABg1gDQgVg9g8g+IgHgHQgiglg4gtQgggbgXgVQgwgmgGgMIgSgSIg6g3IgdgeQgPgQgLgJIgHgHQgkgoghgoIgNgQQgagggYgnQgMgcgJgfQgPgogMg3QgMg5AAgvIAAgBQAAgdAHghQAHgtANgvQAOgwAQgvQAXg8AcgyQAfg2AegqQAVgjAZgaQASgSARgWQAIgHAHgIIAXgZQAjgmAuggQAcgUAhgTIAJgFQAwgbA2gUQBmghBmgdQDVg3EAATQHdAeCjDSIALARQAsBCAQBZQATA+AIBmQAgA5gODNIAAAEQAIBwACBtQANBEAeBBIAAAYQgBBmAJBmQADAJgDA9IABAbIABAJIgbArQAQCUA0B7IAbAzIAEAGQAeAhAjAdIAhAaQBVA/CAA5QA4AdBbAmIBbAmQAyAUAuAXQBSAiBHAtQAcAQAbATQBiBDBCBPIAOARQA+BPAiBcQAYBJAHBJQAGBPgRBMQgQBdgdBnQgVBagbAqQgvBuhXBOQiXCRkOAfQhYAPhjAEIhJABQhLAAhQgFg");
	this.shape_586.setTransform(735.1,1184.6);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#6699CC").s().p("AN+b2QhbAFhlgEQhwgFh5gRQkcgmjyhiQk5h+jJjXQgdgfgbggQi4jPgsjfIgRhGQgei0hCj1IgYhwQgGhngThKQgFgTgHgTQgNgngTgpQgphWgHgfQgGgSgFgSIgUgIIgggOQgpgQgogZQgRhCgthHIgFgIQgdgugsgzQgZgggSgcQglgpgEgUIgNgWIgwhCIgXgjQgQgUgJgIIgGgIQgdgtgigsIgNgRQgYgggegrIgNg+QgMglgOhAQgOhBAAgqIAAAAQAAgdAMgjQAMgsAVgtQAXguAZgqQAjg1ApgmQAugoAmgXQAbgTAfgFQAVgDASgLQAJgBAIgFIAcgMQAegFAvgEQAcgCAigFIAJAAQAuABAyADQBxADBfgNQDjgbD/AmQHGA7DODbIAOAQQA1BBAfBQQAkBAAZBZQBABKALCqIgBADQAjBtAXBlQAbBDAiA/IAEAYIAmDMQAGAQAAA3IADAcIACAKIgRAuQASCSAnCLQAKAVALAkIACAGQAgAiAiAeIAhAcQBWBJB1BLQA2ApBRAyIBVA2QAtAaAvAeQBJAoBMA7QAbATAbAWQBiBPA/BRIANARQBABaAaBcQASBRgHBFQgKBNgvA5QgwBFg6BJQgpA/gwAZQhKBJhpArQiSBDjPAAQguAAgygDg");
	this.shape_587.setTransform(764.8,1218.6);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#6699CC").s().p("AMscKQhggEhogNQhzgPh5gYQkcg6kAhuQlCiKjcjLQghgegegeQjcjSg8jPQgJgegPgqQguinhikIQgUg7gQg2QgXhqgYhJIgOgoQgPgogRgqQgjhRgKgsIgJglIgQgRQgMgMgLgPQgegjgdguQgMhHgehPIgDgJQgYg4gfg5QgTgmgNgiQgagtgCgcIgIgZIgkhNIgSgoQgRgZgGgGIgGgKQgXgwgigyIgNgSIg5hNQgCgfgFgkIgYhqQgQhIAAglIAAgBQAAgbAQglQASgsAdgrQAfgtAigkQAwgvA1gZQA9gbAvgCQAggEAkARQAaAKATABQALAEAIgBQAPACARgCQAaAcAuAZQAdAPAkAJIAIAGQArAcAvAbQB8AnBYADQDyABD9A5QGwBZD5DiIAPAQQBABAAtBIQA2BAAoBOQBgBZAkCJIAAACQA/BoArBfQAoBCAnA9IAJAXQAnBkAbBpQAJAWAEAxIAFAdIACAKQgDAZgEAaQAVCNAaCeQAGASAHArIACAHQAhAiAjAhIAgAeQBYBTBoBbQA2A2BFA/QAgAeAuAmQAqAhAuAmQBBAsBRBLQAaAWAbAYQBiBcA8BRIANATQBCBjARBcQAMBagVBAQgbBMhMAmQhPAuhXApQg/AlhCAIQhmAkh7AHQgxAFg0AAQipAAjOg0g");
	this.shape_588.setTransform(795,1244.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#6699CC").s().p("AXcfeQiBgCiNgbQjqgpkOh2QhjgNhqgVQh3gZh6ghQkbhNkOh7QlLiVjvi/QgkgdgigdQkAjUhLi/IghhKQg8iaiDkcQgbg8gWg2QgohrgdhLIgPgnIghhVQgdhMgMg5IgIgnIgLgYIgPgqQgTg1gQhDQgIhMgPhXIgCgLQgShCgTg/QgMgrgIgnQgPgxAAgkIgDgdIgahXIgMgvIgWghIgFgLQgQg1gjg3IgNgTQgWgfgngxQADghgCgmQgEgdgThRQgShRAAggQAAgaAVgnQAXgsAlgpQAogsArgeQA8goBCgNQBMgNA3ASQAlALArAmQAdAZAUAMQAMAJAJADQARAJATAEQAWA9AvA1QAdAhAlAXIAIAMQApA3ArAyQCGBLBSAUQEAAbD8BNQGZB2EkDrIASAPQBKA/A7A/QBHBBA5BDQCABoA9BoIgBABQBaBjBBBZQA1BBArA7IANAWQA7BjAlBrQAMAcAHAqIAHAfIADAKIADA3QAXCKANCwQADAQAEAyIAAAHIBFBFIAhAhQBYBcBdBsIBvCOQAbAkAtAwIBUBVQA4AxBWBZIA0A1QBiBnA4BTIANAUQBEBtAJBbQAGBigjA9QgrBJhqATQhvAXh0AKQgtAGgtAAQgoAAgogEg");
	this.shape_589.setTransform(825.5,1270.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#6699CC").s().p("AJ/cQQhngWhtgeQmWhxmWjCQmHi6kcjRQkjjXhbiwQg9h0jbmUQh5jggvhzQg9iTgXiaQgWiWAAj9QgViAgHhvQgFhIAFg6IgPhhIgHg0IgUgkIgEgNQgKg5gkg7QgSgfg7hJQAIgiAAgoQAAgagVhaQgVhZAAgaQAAgaAagpQAdgrAtgoQB0hkCHAAQBcAAA+AnQArAaAwA7QA2BDAXASQATAPAWAJQARBeAwBSQAdAyAmAlIAHASQAnBSAoBKQCRBvBLAkQK8CPIyGdQGXEsCeB/QDhC3BuCJQByCPAtCmQApCXAAD2IAABHIAAAIQAkAjAjAlQClCwCID9QApBMBoB5IC9DZQBvCBA2BcQBGB2AABcQAABqgxA5Qg8BHiHAAQqFAAq8mzg");
	this.shape_590.setTransform(856.2,1300);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#6699CC").s().p("EAaOAgfQg1gCg4gIQhNgFhagTQhEgIhMgVQhZgYhmgrQhpguhqg4QhogVhtgdIgzgOQhcgRhigbQjqhGkQh3IhJggQl8iwkxjNIgCgBQkejGhzimQhChXiJjcQg2hPg7hdQiGjOg9huQgZgugUgvQgohegYhhQgsiVgRjuQgch7gNhvQgIhFABg5IAAgDIgRhhIgHg0QgQgfgCgGIgEgMQgJg6ggg9QgIgTgTgeIglg6QAGgiAAgpQgBgegRhVQgShTAAgiQAAgbAXgpQAYgtAmgrQBBhGBJgkQAkgRAmgHQBOgQA2AWQAiAIAnAoIAGAEIAEADIAWAUQAMAMAJAGQALAIAHADQARAJAUAEQAFAPAGAPQAVAtAjArQAaAdAgAYIAIAFIAIANIBbB1IAGAFQAwAcAlAXIAsAeQAaARAVAMQAXAMAVAIIABAAQA0AQA1ALIBtAsQA5AKA0ALICCAVQAjAFAiAHQAyAIA0AOQCkAmCpBPQCGBDCQBYIAVANQEIC5CeCEQBFA4AzAuIAvArQBiBWBTBaQA4A7AqA1QByCSA0CgQAwCIAQDCIAGA2QADARACA0IABAIQAiAkAhAnQCECcBoC9QAbAsAYAuQAYAtAoA7QAhAsAqA0IA4BEIB/CXQBpCAA5BhQBEBzAJBdQAHBlgiA9QgqBKhpAQIgBAAQh3Ach+AAQgnAAgmgCg");
	this.shape_591.setTransform(853.1,1303.1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#6699CC").s().p("AXGe0QhTgFhtgiQhrglhsgwQhpgThsgcIg0gOQhagHhlgVQjag4koh7IhJgfQlxillFjJIgCgBQkai3iMidQhWhWiNjBQg+hJhAhUQiSi7hLhrQgdgsgXgsQgxhXgihbQhBiVghjeQgkh4gThuQgMhDgCg6IgBgDIgRhhIgIgzQgOgegCgJIgEgMQgJg6gag+QgHgVgQgdIgeg9QAFgigBgpQAAgigOhRQgOhOAAgpQAAgcASgpQATguAggvQA1hIA8gzQAegXAfgOQA/gfAtAFQAegJAhAaIAFACIAEACIAQAGQAJAFAHACQAKAEAHgBQAPADASgBQAGAIAHAHQAXAVAiAYQAaAOAfANIAIACIAJAIQAvAfA3AwIAHAEQAzAWAlAVQAXAOAWAQQAZARAVALQAWAMAYAHIABAAQAyAUA1AKIBiA5QA8ADAxAFQBEACA3gGQAfgEAegBQAugFAwADQCdABCwA9QCBA1CfBRIAVAMQEJCvCfCOQBBA4A0A1IAtAsQBYBSBXBmQA2A8AqA2QByCUA8CZQA8COAbCyIAKA1QAGATAGAwIABAHQAhAnAfAnQCCCpBcC2QAaAsAYAuQAZAvAiA7QAiAtApA0IA2BFIB7CaQBiB+A8BlQBBBwATBeQAOBggTBAQgYBPhKAgIgBAAQhmBKh6AXQgfAMgnAFQgvAThIADQgoALgxAAIgkgBg");
	this.shape_592.setTransform(850.1,1310);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#6699CC").s().p("AXddyQhtgbhugoQhpgRhtgcIg0gNQhYAEhogQQjKgqk+h/IhJgeQlniZlajGIgCgBQkViniliUQhrhViQimQhGhEhFhLQifiphYhnQgigpgagoQg6hTgrhUQhWiVgzjOQgrh0gZhuQgPhBgGg7IgBgDIgThhIgIgyQgLgcgDgMIgDgMQgJg7gVg/QgGgWgMgeIgYg/QAEghgBgqQAAgmgLhNQgLhJAAgwQAAgdAOgpQAPguAZgzQAphMAvhBQAXgdAYgUQAygwAkgMQAYgYAcAMIAFAAIADgBIALgGQAGgCAEgEQAJAAAGgDQAOgDAQgHQAHABAIAAQAZgDAhAFQAbgDAdADIAHgBIAKADQA0AGA+AjIAIADQA3AQAkAUQAXAMAWAQQAZATAVAJQAWALAZAGIABAAQAxAZA1AIIBXBHIBsgFQBEgIAygVQAagNAagJQApgTAtgIQCWgjC3AsQB9AnCtBJIAWALQEIClChCZQA8A3A2A8IArAuQBOBOBbBxQA1A9AqA3QBxCWBDCTQBICSAoCkIAOAzQAJAWAJArIACAIQAfAoAdAoQB/C0BRCxQAaAsAYAuIA2BrIBJBjIA1BFIB2CcQBdB9A+BqQA/BsAcBfQAVBcgEBDQgFBTgsAwIgBAAQgxBwhMA4QgKAagVARQgSAtg2AZQgpAmhBAKQgbAEghAAQg6AAhLgQg");
	this.shape_593.setTransform(847.6,1317.9);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#6699CC").s().p("AateVQhvgShxgfQhqgQhtgbIgzgMQhWAOhsgLQi6gclViCIhJgdQldiPlujBIgCgBQkRiYi+iKQh/hWiUiLQhOg+hJhCQisiWhlhjQgmgmgeglQhChNg1hQQhsiUhDi+QgyhwgghuQgRg/gLg8IAAgDQgMgwgJgwIgJgyQgJgagCgPIgDgMQgJg8gQg/QgFgYgJgeIgQhBQACgigBgqQAAgqgIhIQgHhEAAg3QAAgeAKgpQALgwARg2QAdhQAihPQAQgiASgbQAkhAAagdQAUgoAWgBIAFgEIACgDIAFgTIAFgRQAIgEAGgGQANgJAOgNIAQgNQAcgbAfgOQAbgTAcgIIAHgDIAKgDQA5gTBFAWIAJACQA7ALAkARQAWALAXARQAYATAVAJQAWAJAbAFIABAAQAvAeA2AHIBMBUQBAgJArgIQBDgSAsgkQAXgXAWgRQAkghApgSQCPhIC+AbQB5AYC8BDIAYAJQEFCbCjClQA3A2A4BCIAqAwQBDBKBgB8QAyA+ArA5QBxCXBKCNQBUCWAzCVIAUAyQAMAZALAmIACAIQAeAqAcApQB8DBBFCpQAbAsAWAuIAzBuIBHBjIAzBGIBxCfQBXB7BBBvQA+BpAkBgQAcBXALBHQAOBWgOBAIAAABQAECUgeBaQAKApgDAdQALBFgkAwQgbA8g8AaQgvAWhFAAQgjAAgqgGg");
	this.shape_594.setTransform(845.8,1319.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#6699CC").s().p("Acgf6QhwgJhzgXQhrgOhtgZIg0gNQhUAZhvgGQipgOlsiGIhJgbQlTiEmDi+IgCgBQkMiIjXiBQiThViYhwQhWg5hOg4Qi4iEhzhfQgqgjgigiQhLhHg+hLQiBiThUiwQg5hsgmhsQgVg+gOg8IgBgDQgNgwgJgxIgKgxQgGgYgDgSIgCgMIgUh9QgDgagGgcIgJhFIgBhLQAAgvgEhDQgEg/AAg+QAAggAGgoQAGgxAKg7IAmiwQAKgoALgiQAWhPARgtQAPg6AQgOIAEgGIADgFIgBggIAAgdIANgRIAXghIARgcQAegzAegiQAcghAagUIAHgGIALgHQA+gsBMAJIAJAAQA/AGAkAPQAVAJAYASQAXAUAWAIQAVAIAeAEIABAAQAtAiA1AGQAhAyAhAvQBCgPAogOQBDgcAmg0QATggASgYQAfgvAlgcQCIhtDFAJQB1AKDLA7IAYAIQEFCRCkCwQAzA2A6BIIAnAyQA5BGBlCIQAwA+ArA6QBwCZBSCHQBgCaA/CGIAYAxQAPAcAOAhIADAHIA2BXQB6DOA5CiQAbAsAWAuQAZA1AVA7IBGBkIAxBGIBtCiQBRB5BEB0QA7BlAtBiQAkBSAaBKQAfBbASBPIgBABQA5C6AQB8QAfA2APArQApBdgSBGQgOBTg2AqQg5AshmAAIgkgBg");
	this.shape_595.setTransform(853.2,1314.8);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#6699CC").s().p("EAWNAgqQhSAjhzAAQiZAAmDiKQlkh/nGjPQnCjMl5jOQmTjbi3iSQmwlah9mvQgxiogNjYQgGhlAAkeQAAiCATj5QAVkcAXg+IAGgPIgHguIgFgoQAWguAchBQA/iRAzg/QBNheBlAAQBDAAAjAMQAWAIAXATQAYAUAVAHQAVAIAhADQArAnA1AEQAcA5AcA1QBEgVAkgVQBDgmAghCQAPgqAOggQAag8AignQCBiSDLgIQB4gEDsA6QEFCHClC7QA9BGBSByICYDVQE7GrCeEBQDZFfBCDjQA7BhAfBpQA4BRA8BcQExHSDtHhQBvDfA9CdQA1BFAgA3QBGB2AABcQAABqgxA5Qg8BHiHAAQj2AAj+g/g");
	this.shape_596.setTransform(862.5,1309);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#6699CC").s().p("EAW5Aj+QiLgEjjhCQhPgFhjgVIgQgEQi8gzkYhtQi4hJjOhbQivhOiwhTQkPiBj0iBQiBhFhxhAQjsiIiMhnQhUg+hEg9QlQkuhzlqQgOgpgKgqQgkiPgLitIgDgrQgEhqAAj7IAAgCQAAh7ARjkIADgrQAPjLARhPIADgPIABgHQAPgYAPgOIAKgMIAMgjIAKggQAjgoAmg5QBNh6A9hUIAHgKQAfgoAhgfQARgEAUgEQAfACAhAEIAiADQAiANAYASIAMAJQAGAAAHABQACgCAEABQADgBADACQANAAALgEIAkgMQAeAFAlgRQAUAOAWANQAxgjAdgjQAyg0AdhGQAPgqAOgjQAag+AgguQAigwAngnQBghfCAgnQAhgMApgHQBxggCaAIIAOADQB4AVBqAzQBsA1BVBVQASASARATQBEBNBGB5QAtBVBLCYIAZA3IAUAhQDTE5BxEaQAQAgAUAuQBeC0BPDWQBDB5ArBkQBBBmApBmIA3BSIA+BhQCODjBhDHQA2BZAqBeQAwBQAxBVQA9BrA6BsQBzDZBPCuQAxBHAjA+QAsBPAYBGQAKAiAGAgQAPBmgVBCQgQA5gqAfQgOARgWALQgNAJgOAIQgrAmhDAVQg0AdhEAIQgnAHgugCQgtASg5AGQgpAEgtAAIgSAAg");
	this.shape_597.setTransform(857.9,1292.1);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#6699CC").s().p("EAaXAm+QimgHjUg6QhRAPhrgLIgQgCQisgdlDh4QjAhHjZheQizhMi8hYQkciDj+iFQiFhFh5hEQjziGiYhqQhdhBhFg6QlqkxiAlyQgOgrgMgsQgoiSgNi2IgDgsQgFhnAAkMIAAgCQAAh+ASjuIADgsQASjfAShFIAFgOIAAgIQAYgOAYgLIANgIIAegZIAbgYQAxgiAugxQBbhjBHhoIAHgLIA5hSIAoAAQAdANAiAHQARAEARABQAaAZAUAaIALANIAEgNIADgJQABgHACABIAMgaQAHgRAMgTIAlhDQANgbAQgbQAegzAVgwQAihCAahJQAOgsAPgmQAYg/Afg1QAdg1AjgvQBWh0BvhIQAggXAlgTQBzhJCQgYIAOgCQCBgSB1AjQB4AjBdBYQAUATARAUQBLBUA6CAQArBpAsCbIAOA+IATAjQC7ExBYFdIAdBZQBBChBVENQBMB4A5BkQBHBsAzBiIA3BVQAhA0AeAyQCZD9BNDDQA4BdAkBkQA0BRA3BYQBDBuBABuQB4DTBgC/QAtBJAlBFQArBPAfBLQAOAiAKAfQAfBkAIBJQAIBCgJAvQAHAbABAWQADASAAARQAOBOgiA5QgZBDg7AhQgkAVgwAJQguAQg9AEIg7ABIgwgBg");
	this.shape_598.setTransform(855.3,1273.7);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#6699CC").s().p("EAWNApSQhSAkhzAAQiZAAmDiKQlkh/nGjPQnCjMl5jOQmTjbi3iSQmwlah9mvQgxipgNjYQgGhlAAkdQAAiCATj5QAVkcAXg+IAGgQIgBgHQEygqCykeQAcgtAXgwQASAFAYACQArAmA1AFIArBXIgEgaIAAgfQgBoxDjmbQBki1CFh+QB+h5CNg4QCKg4B/ARQCFASBkBbQDQC+ARGtIARAlQCkEqA+GdQALBKCKHtQDgE4B+DMQDZFeBCDiQA7BiAfBqQA4BRA8BcQExHSDtHhQBvDfA9CdQA1BFAgA3QBGB2AABcQAABqgxA5Qg8BHiHAAQj2AAj+hAg");
	this.shape_599.setTransform(862.5,1253.7);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#6699CC").s().p("EAegAsKQjlgEjtg6IgCAAQhNAhhqACIgTAAQiRgDlXh3IhGgZQk1hwl/irIiRhCQlRiakoicQhzg9hpg6QjMhziJhcQiXhmhkhcQg5g0gzg2Qijieh0i8Qhuiwg/jCQgriGgaicQgJgzgGg0QgXiTAAjzIAAgCQAAh9ATiNQALg5ARg4QAliFA/g7QAfgzAYgPIAKgJIADgEIAnABQAoABAkAFQCyhBB9imQAVgrAVgwIAEgJQAVgyATgzIAegLQAgAGAngPIADgBIAnAXIAAgZQACgaABgHQAGgyAHgxQAXiUAfh/QAShMAphXQAyhzA4hcIAkg1QAZg+AfhBIASgkQBjjNBtiAQAaghAZgbQBbhkBkg1QBJgnBKgLQA+gKA+AMQBXAQBOA1QAlAYAhAgQBYBUA8B9QBACFAOCMQAGA4gHBjIAEAPQAEASABAIQAlCRAUCaIAJBaQAPA+ALBCIALAmQAdBXAWBeQAnB8BfGCIASBHQBrC0BlDbQA9BYAxBNQB3C3BNCSQBMCOArB0QA9BpAhBpIAsBPQAhAyAeA2QAVAmAUAnIBpCiQDlFuC9F2IBLCZQA/CGArBqQAmA7AbAzIAQAXQAhA0AUAuQAbA8AGA1QAGAxgHApQgIAwgWAjQgTAfgfAUQg0AkhWAFIgjAAIgSAAg");
	this.shape_600.setTransform(856,1241.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#6699CC").s().p("EAYOAtEIgCABQhQAhhvABIgTAAQiXgFlhh9IhHgZQlAh1mMizIiVhEQlciikxiiQh4hBhpg8QjZh9iDhgQiShshohqQg5g6gxg8Qidijh5jMQhti2hHjJQgyiMgjidQgLg1gKg0QgpjCAAjKIAAAAQAAiZAdh2QASg8AdgyQA/hxBxgeQA0gZAngCIANgCIAGAAQAVADASAFQAnAKAiAWQC0hIB9izIAZhlIADgIIAchtQAJgOALgPIAxg9IACgDIAjgoIAEgaQADgVAEgMQALgzANgzQAnicArh5QAXhEA+hdQBJhzBIhOQAZgaAXgUQAZg+AehGIAQgmQBkjlBViCQAXgmAUgcQBRh3Bdg/QBIgxBMgNQBAgLBAAPQBVATBSA+QAlAbAhAiQBZBYBBCAQBPCXAHB+QADArgQB4IAAAPQAAARgBAMQACCggLCaIgJBdQALBAAHBGIAOAlQAmBXAfBfQBDC0BFFTIATBNQBHCfBjEbQA/BaA1BPQCBC+BTCRQBSCPA1B3QA+ByAjBnQAUArARApQAiA1AbA4QAUApAQAqQA3BQA4BYQDxF4DFGBQAqBRAlBOQBDCJAvBuQAhA/AZA2IARAYQAlA1AXAuQAgA9ALA1QALAygDAqQgEAzgRAmQgQAkgbAYQgyAuhZAIQgaACgcAAQjugCj0g9g");
	this.shape_601.setTransform(849.8,1229.5);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#6699CC").s().p("EAZKAu9QhSAjhzAAQiZAAmDiKQlkh/nHjPQnBjMl5jNQmTjbi3iTQjWiriKjAQiYinh+jeQi2k/hpl8QhWk4AAjFQAAi0AlhfQBRjIDvAAQB7AABDAjQAnATAeAoQC4hPB8jBQACg1AHg5QARiVAliHQAniJAuiHQA6ikA2h2QAbg6BUhkQBghzBXhAQAggXAcgPIA2iKQCPlwBFiCQCDj6CughQCRgcCcB+QCGBtBiCzQBcCpAAByQAAAfgdCbQgkDBguCoIgbBgQAIBCADBJIARAlQCkEqA9GeQAMBJCKHuQDgE2B+DMQDZFgBCDiQA7BhAfBrQA4BQA8BcQExHSDtHhQBvDfA9CeQA1BEAgA3QBGB3AABbQAABqgxA6Qg8BGiHAAQj2AAj+g/g");
	this.shape_602.setTransform(843.6,1217.4);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#6699CC").s().p("EAZTAvAQgNADgNACQhJAbhiABIgaAAQibgHloiAIgWgIQldh9m6jJIgSgIQm3jIlzjKIgNgHQmIjWi2iQIgKgIQjPioiIi7IgGgHQiVimh8jZIgEgHQizk8hol5IgBgEQhWk2AAjDIAAgBQAAiGAVhXQAFggAHgXIAHgUQAbhLA4gwQBOhECHgNQBvgJBSATQAoALAlAaQA4gRA2gWQBNhNBYiVIAIgMQALg1ANg2QAjiNAzh9IACgFIAPgkIATg8QAdhZAehTQAWg8AVg0QAhhSAzhTIACgDQAohABLhTQAZgcAYgYQAcgaAZgUQAkgtAkgoIAXgXIAagZIA2iJQBUjUA2h3QAuhlAng8QBKh4BYg2QBMgxBTgBIAMgEQBcgZBfAdQBAARA2ApQAbAUAVAZQBjCAA7B/IADAGQATAsALAvQATA3AHBDQAGAjgBAnIgDAgQgHA7gQBcIgLA8QgeCXgpBrIgKAnIgOAyIgNAuIgBA0QAEAqACAtQAKAbADANIACAHIAUAmQCTEaA7F/IAKA0QAZBuBxGVIAWApQDNEcB4DBIAXAlQDGFFBBDYIASAkQAuBQAaBXIAUAjQAtBCAwBJIAVAhQEmHDDmHQIAPAfQBjDLA6CTIARAbQAoA1AbAsIAQAcQA3BkAEBRIAAAeQgEBVgnAzQgJAMgLAKQg6A2hxACIgdAAQjogCjwg7g");
	this.shape_603.setTransform(843.6,1217.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#6699CC").s().p("EAZcAvGIgagBQhJAdhiACIgbAAQiXgDlsiBIgXgIQldh9m7jJIgSgIQm3jIl0jKIgOgHQmHjWi4iQIgKgIQjQiniIi8IgGgIQiVilh9jZIgEgHQizk9hpl5IgBgEQhVk2gBjEIAAgBQAAiHAWhXQACgiAEgXIAFgTQAUhNA2g0QBKhICGgbQBigSBiADQAqAEAqALIB1gVICIj6IAHgMQASgzATgzQA3iJBBh0IADgEIAUgjIATg7QAehbAfhRQAXg7AXg0QAehGBChaIACgDQA1hHBEhFQAbgbAagWQAegZAbgRIA4hhIARgaIAVgeIA2iJQBYjcA0hsQAwhhAug9QBUhyBigmQBRghBWATIANgFQBagiBgAOQBIAIAyAkQAbAUATAbQBgCdAnBsIACAHQANAqAGA1QAJAtADBRQADAfgCArIgDAhQgGBEgNBRIgMA9QgfCjgxBZIgKAnIgOAzIgOAuIgHAzQAFAqACAtQAGAZACASIABAGIASAmQCXEaA+F+IAJAyQARBaB4GtIARArQDNEcB5DBIAXAlQDHFEBEDYIAPAmQAwBQAbBWIAQAkQAuBCAwBKIAVAhQEnHDDnHRIAPAeQBkDLA7CUIAOAcQAoA1AcAsIAPAbQA6BkAGBQQABAQAAAPQgCBVgjA0QgJAMgKALQg3A6hxAFIgdABQjpgBjwg6g");
	this.shape_604.setTransform(843.6,1217);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#6699CC").s().p("EAZKAvJQhSAjhzAAQiZAAmDiKQlkh/nHjPQnBjMl5jNQmTjbi3iTQjWiriKjAQiYioh+jdQi2k/hpl8QhWk4AAjFQAAiHAVhXQABg3AEgXQAOhNAzg6QCWimHTAAQAJhQBhjCQBkjIBviVIAbgkIAUg7QA6ikA2h2QAbg6BUhkQBghzBXhAQAggYAcgOIA2iKQCPlwBFiCQCDj6CughQBVgRBZAlQBdgwBpgBQCAgBArBQQBgDAARBaQAHAqAAA6IgBCCQAAAjgFBIQgKBygSBfQgiCvg5BIIgYBbIgbBfQAIBDADBJIARAlQCkEqA9GeQAMBJCKHuQDgE2B+DMQDZFfBCDjQA7BhAfBqQA4BRA8BcQExHSDtHhQBvDfA9CdQA1BFAgA3QBGB3AABbQAABqgxA6Qg8BGiHAAQj2AAj+g/g");
	this.shape_605.setTransform(843.6,1216.2);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#6699CC").s().p("EAWWAwoQijgWkRheIgTgFQhJgUhQgaQjGhFj6hpQhvgvh3g1QjxhtjlhwQjChgiyhgQjChoiThaQiehghlhNQh/hihihmQhMhPg+hTQhOhVhHhiQhIhihBhwQgrhKgnhNQiDkEhTkqIgRhDQhHkQAAiyQAAh1APhQIAGgeQAAgWACgRQABgZADgOQAJgwAYgnQAPgaAWgWQCBiIFegVICKgWQAGgoAZg/QAdhKAzhkQAqhRAshJIAUgiIAbgvQAnhBAng4IAbgmIAVg7IAEgNQAdhQAihJQAcg/Acg1QATgjAmgwQASgYAXgZIASgYQAggqAggkQA5hCA2gtQAegZAbgRIA3iNIAnhhQAwhzAphVQA2h/AthNQAhg+AlgyQBjiGBpgnQAQgHAPgEQA/gVA5AMIAwAIQAzgeA6gVQAmgMAngFQA9gIApANQAmAPAZAcIABABQAoA5AdAvQAWAjAPAeQARAhAJAaQALAdAGAqIADARQAEAYADA2IACAxQABAXgCAkQgBAVgEAdQgKBugYBmQgTBXgYBCQgXA+gcAmIgaBbIgdBhQADBFABBHIAOAmIACAEQAqBTAgBsQAqCEAdCJQALA5AIA5IAJA5QAHArAGAxQAEAvAiCRQASBnAcCDIAQBOIAPBFIAMAUIA/BnIAVAgQCTDVBaClQA0BbAqBWQB4DcA6DKIAOAZQA0BXAeBcQA6BUA8BbIBQB9QChD/B/D1QAwBWArBYQArBQAqBRIACAEQBxDdBECjQA0BFAhA6QBFB2AHBeQAEBUgYA4QgGAOgHALQgvBMhzALQg1AIg1ADQg0AEg4gCQhOAChWgJIgsgEQgpAYg0AMQgsALg1ACIgNABQgjAAgugHg");
	this.shape_606.setTransform(841.4,1209.8);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#6699CC").s().p("EAYEAxhQiugTkPhZIgSgFQhKgNhTgXQjAg8kMhuQhxgvh5g1QjyhrjthzQjGhgi1hhQjEhpiZhbQighghohOQiGhjhihjQhPhPhBhTQhQhXhHhjQhLhihDhyQgthKgohOQiGkHhWkvIgShEQhJkWAAi0QAAh3ARhRIAFgeIACgnQABgZAEgQQAKgvAZgoQAQgZAXgXQCHiGFjgSQA4gQBIgYQAIgpAZg/QAfhMAzhiQAshTAthJIAWgjIAagwQAlhDAmg6IAagnIAWg9IAFgMQAchNAphNQAfg/Aeg0QAWgkAmguQAUgXAYgYIARgZQAegrAfgnQA2hEAzgyQAdgbAZgTIA4iOIAphiQAyh1AvhTQAzh5A1hWQAjg9Ang1QBoiLBigrQAQgHAPgGQBAgdAzAIQAUACAYgDQAxghA3gcQAkgRAkgJQA6gPAmAGQAjAKAdARIABABQAsAqAgAjQAaAaASAZQATAZANAUQAPAXALAmIAEAQQAKAXAFA0QAEAWABAbQACAYgCAkQgBAUgEAfQgNBpgcBtQgUBWgbBHQgYA+gbAoIgbBcIgfBhIgDCNIAKAnIADAEQAiBPAaB3QAiCMAXCFQAIA7AFA6IAIA5QAGArAEA0QADA3AbCKQAMBxARB7IALBQIAKBEIAKAWQAeA2AbA1IAUAhQCPDVBYCyQAwBeAnBZQBqDKBEDqIANAaQA1BZAiBbQA8BWA8BbIBRB/QCoELB4DyQAxBYAqBaQAtBQAsBTIACADQBzDcBLCoQAzBHAiA7QBFB2ANBgQAIBTgQA7QgEAOgGAMQgiBRhfAWQgqAQgsAKQgnAMgsAFQg8ARhLADIgnAEQglAdgyAQQgrAPg2AEIgWAAQggAAgogFg");
	this.shape_607.setTransform(839.3,1204.4);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#6699CC").s().p("EAZvAydQi4gRkMhWIgSgCQhKgIhWgTQi7g0kchyQhzguh8g2Qj1hqj0h2QjJhhi5hhQjFhoifheQiihghshOQiLhkhkhhQhShPhDhSQhShZhIhjQhNhjhGhzQgthLgqhQQiLkKhXk0IgThFQhLkaAAi4QAAh4ARhSIAFgfIACgoQACgYAEgRQALgwAbgnQARgaAYgWQCLiEFqgQQAwgVBFgkQAJgqAbg/QAhhQA0hgQAthTAvhKIAWgjIAZgyQAkhFAlg8IAZgoIAXg9IAFgNQAchLAvhQQAhg+AhgzQAZglAngsQAWgXAYgXIAQgZQAdgsAegqQAzhIAwg0QAbgdAYgWIA5iQIAqhiQA1h4AzhRQAyhyA+hgQAkg9Apg3QBsiPBdguQAPgJAOgHQBBgmAtADQASABAYgJQAsgjA1glQAigVAigOQA1gWAlgBIBBAMIABABQAvAaAlAYQAcARAVAUQAWAQAQAQQATARAQAhIAHAOQANAWAJAzQAFAWADAbQADAYgBAkQgBAUgGAgQgOBlgiB1QgWBVgcBKQgYA/gbAqIgdBcIggBjQgHBLgEBCIAHAoIACADQAdBLATCBQAaCVAQCDQAFA8ACA6IAHA6QAFAqADA2IAAABQABA/AUCEIAMDuIAGBRIAGBFIAIAWQAbA4AXA4IAUAhQCLDVBUDBQAuBeAjBeQBdC3BMELIANAbQA4BZAlBbQA+BZA8BbQArBCAnA+QCvEXBwDxQAzBZAoBcQAuBQAvBUIACAEQB2DZBRCuQAyBHAkA+QBDB1AUBjQANBSgJA9QgCAOgEAMQgVBXhLAiQggAXgiARQgaAUghANQgpAfhBAQQgQAHgSAFQghAigwATQgqASg2AGQgSACgUAAQgaAAgggDg");
	this.shape_608.setTransform(837.3,1198.9);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#6699CC").s().p("EAbZAzaQjCgOkKhSIgSgBQhLgBhZgQQi1gskth1Qh1gvh+g1Qj2hqj9h4QjMhii8hiQjIhoikhfQikhghwhOQiRhlhlhfQhUhPhGhSQhVhahIhlQhPhjhIh0QgvhMgrhRQiPkNhak5IgThGQhNkfAAi6QAAh7AShTIAEgfIACgpQADgYAEgRQANgwAcgoQASgaAZgWQCQiCFvgNQAqgbBBgwQALgrAbg/QAkhSA0hfQAuhUAxhLIAXgiIAZg0QAihHAjg+IAZgqIAXg+IAGgNQAchHA1hUQAkg+AjgyQAdgmAmgpQAYgYAZgVIAQgaQAbgtAcgtQAxhKAtg5QAZgfAWgYIA7iRIAshjQA3h6A4hPQAvhsBHhpQAlg8Asg6QBxiTBWgyQAOgLAPgIQBAguAogBQAQgBAYgQIBahTQAggZAfgSQAygeAjgIQAdACAlgEIABAAQAyAKApANQAgAJAXAOQAYAIAUAKQAXALAVAdIAJANQASAUAMAyQAHAWAEAbQAEAZgBAkQgBATgHAiQgQBhgmB7QgYBUgfBPQgYA/gaAsIgfBdIghBjQgMBPgGBAIADAoIACADQAWBGAMCNQASCdALB/QABA/gBA5IAGA8QAEAoABA6IAAABQAABHAOB+QgBCDgFBsIABBTIACBEIAFAYQAYA5AUA7IATAiQCIDVBRDOQAqBhAhBhQBPCkBVEtIAMAbQA6BbApBZQBABcA8BbQAsBDAnA/QC2EjBoDuQA1BbAmBeQAwBQAxBWIACADQB4DXBZC1QAwBHAlBBQBDB0AbBmQARBRgCA/QAAAOgCANQgIBcg3AtQgVAfgZAYQgNAcgWAUQgXAug2AcQgNALgQAJQgdAnguAXQgoAWg3AHQgXADgaAAQgXAAgZgCg");
	this.shape_609.setTransform(835.5,1193.2);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#6699CC").s().p("EAdBA0fQjNgLkIhOIgRAAQhLAFhcgNQiwgik+h6Qh3guiAg2Qj4hokEh8QjRhii/hjQjJhoiphgQimhgh1hPQiXhmhlhdQhXhOhIhTQhYhchIhlQhThkhKh1QgwhMgshSQiTkRhdk9IgThIQhPkkAAi8QAAh+AThTIADggQABgZACgQQACgYAGgSQANgxAegoQATgZAagWQCViAF1gKIBfhdQAOgtAcg+QAnhVAzhdQAwhWAyhKIAYgkIAYg1QAhhJAihAIAXgrIAZg+IAFgNQAdhGA6hWQAog+AlgxQAggnAngnQAagYAZgUIAPgbIA1hdQAuhNAqg9QAXggAVgbIA9iTQAYg5AUgrQA6h7A9hOQAthlBPhzQAng8Atg7QB2iYBQg2IAbgVQBCg3AigFQAOgDAXgXQAlgnAwg2QAdgdAdgWQAuglAigQQAZgDApgPIABABQA1gFAtABQAjAAAZAJQAcgBAXAFQAcAGAYAYIAMALQAXAUAQAvQAIAXAFAbQAFAagBAjQgBASgIAkQgSBdgrCDQgZBTghBTQgZA+gZAvIggBdIgkBlQgRBSgIA8IABAqIABACQAPBCAGCXQAKCmAEB8QgBBAgFA6IAEA9QAEAnAAA9IAAABQgCBPAHB4QgICMgOBlIgEBUIgCBFIACAYQAUA7ARA+QAMAXAHALQCEDVBODbQAmBkAeBlQBCCSBeFNIALAcQA8BcAtBZQBCBeA7BbIBVCDQC9EwBhDrQA1BcAlBhQAyBQAyBXIACADQB8DWBfC5QAwBJAmBDQBCB0AhBoQAVBPAHBCIAAAcQAGBigjA3QgLAngPAgQAAAkgMAbQgEA8grApQgLAPgNAMQgZAtgsAaQgnAZg4AKQgaAFghAAIgmgCg");
	this.shape_610.setTransform(833.9,1186.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#6699CC").s().p("EAegA14QjXgIkFhLIgRACQhMALhfgKQiqgalQh+Qh4guiDg2Qj5hnkOh+QjShjjDhjQjLhoivhiQiohgh5hPQidhohmhaQhZhOhLhTQhahdhJhmQhVhlhMh2QgyhNgthTQiXkUhflCIgUhJQhQkpAAi/QAAiAAThVIADgfQABgaACgQQADgYAFgSQAPgxAfgpQAUgZAbgWQCah9F7gIQAbgmA6hJQAQguAcg9QAphZAzhbQAyhXA0hLIAZgjIAXg3QAghLAghCIAXgsIAZhAIAGgNQAchCBBhaQAqg+AogwQAjgoAnglQAcgXAagTIAOgcIAyhhQArhQAnhAQAWgjATgcQAhhRAdhFQAZg6AVgqQA8h9BChMQArhfBYh8QAog7Avg+QB7idBIg5IAcgYQBDg/AcgKQAMgFAXgdQAhgqAtg+QAbghAagaQArgtAfgWQAWgIAtgZIABAAQA5gVAwgKQAngIAcADQAegJAbAAQAfgBAeAVQAHAEAHAFQAcASASAuQALAXAFAbQAGAbgBAjQAAARgKAmQgTBZgwCJQgbBSgjBYQgZA+gZAxIgiBeIgkBlQgXBWgKA6IgDAqIABACQAJA9gBCjQACCtgCB6QgEBCgIA6IADA+QADAmgCA/IAAABQgEBYABByQgOCUgZBeIgJBWIgHBEIAAAZQARA9AOBBIASAjQCADVBLDoQAjBmAbBqQA0B+BnFuIALAdQA+BdAwBYQBEBhA8BbIBVCFQDEE8BZDpQA3BdAkBjQAzBRA1BYIACADQB+DTBmDAQAvBJAnBGQBBBzAoBrQAZBOAOBEIAFAcQATBogQBCQAAAvgGAnQANAsAAAiQAOBKggA2QgIATgLAQQgWAygpAdQgmAeg4ALQggAGgnAAIgcAAg");
	this.shape_611.setTransform(833.1,1178.2);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#6699CC").s().p("EAfYA3XQjhgGkDhGIgQADQhNARhigHQikgRlhiCQh6gtiFg3Qj7hmkWiAQjWhkjGhkQjNhoi0hkQiqhfh9hQQijhphnhXQhchPhNhTQhchehKhnQhXhlhPh4QgzhNgvhUQibkYhhlHIgVhKQhSkuAAjBQAAiCAUhWIACghQABgbACgPQAEgYAGgSQAQgyAggoQAWgZAbgWQCfh8GBgFQAUgsA2hUQASgvAdg+QAshbAzhZQAzhYA2hMIAagjIAVg4QAfhOAfhDIAWguIAahAIAGgOQAchABHhdQAtg9ArgvQAlgpApgjQAdgXAagRIAOgdIAvhlQAphTAkhEIAlhEQAihTAehDQAag8AUgqQBAh+BGhLQAphYBhiGQApg7Ayg/QB/iiBCg9IAagaQBFhIAWgOQAKgGAWgkQAdgsAqhHQAZgmAYgeQAng0AegdQATgMAwgkIABAAQA9glA0gVQAqgRAegDQAhgRAfgFQAjgGAiAPIARAJQAgAQAWAsQAMAYAGAaQAHAcAAAjQAAAQgLAoQgVBVg1CRQgdBRglBbQgZA/gYAzIgkBeIgmBnQgbBYgNA4IgGArIAAABQADA5gICtQgFC3gJB2QgIBEgKA6IABA/QACAlgDBCIAAACIgLDLQgVCegkBWIgOBXIgKBFIgDAaQAOA+AKBEIASAjQB8DVBID1QAgBpAYBuQAmBrBwGPIAKAeQBBBeA0BXQBGBkA7BbQAvBHAnBAQDLFHBSDnQA5BeAhBmQA1BQA3BaIACADQCBDRBtDGQAtBKApBIQBAByAvBuQAeBNAVBGIAIAdQAgBtAEBOQAKA2AFAuQAaA0AKApQAhBagVBCQgGAXgIATQgSA3gnAiQglAgg5AOQglAJguAAIgRgBg");
	this.shape_612.setTransform(836.3,1169.1);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#6699CC").s().p("EAgMA44QjsgDkAhCIgPAEQhNAXhmgDQiegJlyiGQh9gtiHg3Qj8hlkeiDQjahkjJhlQjPhoi6hmQishfiBhQQiohqhohVQhfhPhQhSQhehhhKhnQhahlhRh6Qg0hNgxhWQiekbhklLIgVhMQhUkzAAjDQAAiFAVhWIABghQABgcACgPQAEgYAHgUQAQgyAjgnQAWgZAdgWQCjh6GHgCQAMgyA0hhQATgwAeg9QAuheA0hXQA0hZA3hMIAbgkIAVg6QAehQAdhFIAVgvIAchBIAGgOQAbg9BOhhQAvg8AugvQAogpApghQAfgXAbgQIAMgdIAthpQAmhWAhhIIAjhIQAjhWAdhCQAbg+AVgoQBCiBBLhIQAnhTBqiPQAqg6A0hCQCEimA8hBIAZgcIBWhjQAIgIAVgrIBBh9QAXgqAVgjQAjg7AcgkQAQgQA0gvIABgBQBBg0A4ggQAtgaAhgIQAjgZAigLQAogMAnALIATAHQAkAPAZArQAOAXAIAbQAIAdAAAiQgBAQgMAqQgWBQg7CYQgdBQgoBgIgxB0IglBfIgoBnQggBcgPA1QgIAegCANIABABIgSDtQgOC/gPBzQgLBGgNA6IAABAQABAkgEBFIAAACQgIBogMBlQgbCngvBOIgTBZIgPBFIgFAbQALBAAHBHIARAkQB5DUBEEDQAdBrAVByICRIIIAKAfQBCBfA4BWQBIBnA7BaQAwBJAoBAQDSFTBKDlQA6BgAgBoQA2BQA6BbIACADQCEDQByDKQAtBMAqBKQBAByA0BwQAjBLAdBJIALAeQAuByAYBZQAUA+AOA1QAnA9AWAwQAzBogKBPQgDAagGAYQgPA8gkAlQgkAkg6AQQgoAKg0AAIgJAAg");
	this.shape_613.setTransform(839.8,1159.8);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#6699CC").s().p("EAZKA5bQhSAjhzAAQiZAAmDiKQlkh/nHjPQnBjMl5jNQmTjci3iSQjWiriKjAQiYioh+jeQi2k+hpl8QhWk4AAjGQAAiHAVhXQABg3AEgXQAOhNAzg6QCWilHTAAQAJhQBhjCQBkjIBviVIAbgkIAUg8QA6ikA2h1QAbg6BUhlQBghyBXhAQAggYAcgOIA2iKQCPlwBFiCQBEiCBQhIQAzhoDGj5IC+jvQBdh1ANgaIBVjDQA3h/AphEQANgVA5g5QBEhEA8gsQAwgjAkgOQBThJBQANQA4AJAiAzQAiAyAABAQAAA2iuGjQi2G4gOBEQgLAxgUDDQgWDGgVBxQgOBHgRA6IgBBCQAAAigFBJQgKBygSBfQgiCvg5BIIgYBaIgbBgQAIBDADBJIARAlQCkEqA9GeQAMBJCKHtQDgE3B+DMQDZFfBCDjQA7BhAfBqQA4BRA8BcQExHSDtHhQBvDfA9CdQA1BFAgA3QBGB3AABbQAABqgxA6Qg8BGiHAAQj2AAj+g/g");
	this.shape_614.setTransform(843.6,1150.4);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#6699CC").s().p("EAXQA62QhjgCiwgxQhOgPhigcIhfgeQivg6jThVQjOhUjphpQiYhEiUhHQkciIj9iIQh1hAhlg6QjyiMiHhpQhQg9hDg/Qh6hzhbh7Qgyg3gug8Qhkh+hYiYQgbgugZgxQiVkahblIIgMgrQhLkegBi6IAAgBQAAh7AShTIAEgTQAAggACgVQABgPACgKQALg6AhgvQALgQANgOQCKiSGIgOIBXgOQAIg5AxhsQAWgzAfg8QA+h6BChoIAYgjIAfgxQAOgXAPgVIAaglIAUg8IAphuQAhhSAmhLIAIgPQAhg+BShfIAWgYQAXgZAXgWQAvg3AugqIASgQQAegZAagRIA2iMQA5iOArhlQA3iCArhOQAMgaAMgWQArhRAzg/QAZgiAcgdQAbg8BEhnQA5hYBUhyQB/ipA3hPQArg6AbgnQAZgkAHgPIBXjEQA3h9AshIQAOgYA1g4QArgtAngjQAWgUAWgRQAugkAkgQQBShKBPAGQA4ADAmAsQANAPAJARQASAfAFAlQAgAxh7FqIgMAoQgnB+giBlQhPDIgcBYIgCAGQgPA5gZC5QgcDCgcB2QgNA9gQA0IgFARIgFBAIgLBqQgPBygWBeQgnCsg6BMIgcBaQgQAygQAtQACAygBA1IAAAiQALAdACAJIAJATIAXA1QASAqAPAwQAfBaAYBeQAbB7APB4IAKBVIAFAvQABARAGAhQALAxAUBSIALAnQAqCJA8DSQBjCWBNCEQBTB/BDCBQA4BhAvBdQCDDlA4ClQAlA7AbA+QARApAOApQA4BUA7BcQBVCGBKCDQA3BZAwBaQAxBSAvBUQBiCtBYCvQBvDdBDCjQAzBFAhA5IARAeQA1BlAFBQQAFBpgnA8IgLAPQghAuhDAQQgVAGgYADQg9ALhDAEQhGAHhMgDQhZgEhjgVIgDABQhQAdhpAAIgLgBg");
	this.shape_615.setTransform(842.2,1145);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#6699CC").s().p("EAYaA7iQhpgEirgvQhPgIhlgZQgsgLg0gPQisg3jdhXQjQhSjshqQiahEiXhIQkfiIkBiKQh2g/hng7Qj0iMiMhpQhRg+hEg+Qh9hyheh8Qgyg4gug8Qhnh/hZiYQgcgwgagxQiYkchclMIgMgrQhNkigBi7IAAgBQAAh9AThUIADgTIACg1IAEgaQAMg7AiguQALgQAOgPQCOiRGMgLQAkgLArgQQAKg6AxhsQAYgzAeg7QBAh8BEhoIAYgjIAdgzIAcgtIAZgnIAVg8QAVg7AVg0QAghPAthOIAIgPQAnhCBQhZIAXgYQAYgZAYgVQAsg3AsgvIAQgRQAcgbAZgUIA3iMQA6iTArhjQA5iCAwhMQANgaANgYQAqhOA2hDQAXgiAZghQAbg/BAhoQA3heBNhyQB1ipA5haQApg6AagqQAYgjAJgSIBXjEQA4h8AthMQARgbAxg3QAqguAngkQAVgVAVgSQAtglAjgTQBShMBOgBQA5gBAoAkQAOAMALAOQAVAbALAgQBAAvhZFXIgHAoQgaB+gdBqQhECwgrB3IgCAHQgUBCgdCvQgiC9giB7QgQA8gRA1IgGARIgIBAIgRBpQgUBxgaBeQgtCog7BRIgfBZIgkBeIgJBjIgBAjQAJAcABALIAGATQAKAaAJAdQAQApANAzQAZBeARBeQATCCAEBxIAGBWIACAwQAAARAEAgIAcCEIAMAnQAxCMA7DQQBdCYBGCNQBIB0BFCWQAzBiAtBjQCIDkBAClQAmA9AcA9QASApAPApQA6BWA4BcQBWCMBFCDQA3BaAuBdQAyBRAxBVQBkCvBcCwQBwDZBJCpQAxBGAhA8IARAeQA0BkAKBSQALBngdBAIgIAPQgWAxg0AWQgQAIgSAHQgvAWg5ANQg8AVhJAFQhUAHhogRIgDAAQhOAXhiAAIgXAAg");
	this.shape_616.setTransform(840.8,1140.9);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#6699CC").s().p("EAZjA8NQhvgFinguQhPgBhngUQgtgJg1gPQipgyjnhZQjShSjwhqQibhEiahJQkjiJkEiKQh3hAhqg8Qj1iLiQhqQhVg+hDg9QiBhyhgh8Qgzg4gug+Qhph+hbiaQgcgwgbgxQibkghelPIgMgrQhPkmAAi9IAAgBQAAh+AThVIACgTQABgiACgUQACgPACgLQANg7AjgvQAMgPAOgPQCSiQGRgJQAegQAogYQANg8AxhqQAZg1Aeg6QBCh9BFhoIAZgjIAcg0QAMgZAOgWIAXgoIAWg9QAWg7AWg1QAfhMAzhRIAJgPQAshFBPhUIAYgXQAZgZAZgUQAog5Aqg0IAPgSQAagcAWgWIA4iOQA9iYArhfQA7iCA1hMQANgaAOgZQAqhLA4hIQAUgiAYgkQAbhCA7hqQA1hjBIhzQBqioA7hkQAmg8AbgsQAWgjAJgUIBZjFQA4h6AwhQQASgfAug0QApgvAmgnQAVgVAUgTQArgmAjgWQBRhNBOgIQA4gHArAcQAPAKANAMQAZAWAQAcQBhAsg3FEIgDApQgNB9gYBvQg5CYg5CWIgDAIQgZBLghClQgnC3gpCBQgSA8gTA1IgGARIgMBAQgJApgNA/QgaBwgeBdQgyClg8BVIgjBYQgVAygUAsIgSBgIgCAiQAHAdgBANIAFASIAQA5QANAoAJA2QAUBhALBfQAKCKgGBqIABBWIgBAwQgBATADAeIAZCGIAMAmQA4CQA7DMQBWCbA/CWQA9BpBGCsQAwBjAsBoQCMDkBHClQAnA+AdA8QAUApAQApQA6BZA3BcQBWCRBACDQA4BbArBfQAzBSAzBWQBoCvBeCxQBxDXBOCvQAvBGAjA+IAQAfQA0BkAPBSQAQBngTBCIgFAPQgJA1gnAbQgKAMgOAJQgfAhgwAXQgyAjhFAOQhQARhsgOIgEABQhKARhYAAIgngBg");
	this.shape_617.setTransform(839.5,1136.7);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#6699CC").s().p("EAarA86Qh2gIiigrQhQAGhpgQQgsgIg3gOQingtjwhbQjVhSj0hqQibhEiehKQkniKkHiLQh4g/hsg9Qj3iLiUhrQhYg+hDg8QiDhyhjh7Qg0g6gug+Qhrh/hdibQgdgwgbgyQiekihhlTIgMgrQhQkqAAi/IAAAAQAAiBAThUIADgUQAAgjADgUIAEgaQANg7AlgvQAMgQAPgOQCViOGWgIIA9g0QAQg+AyhpQAZg2Aeg5QBEh/BHhoIAZgjIAag2IAZgwIAWgpIAXg9QAXg9AWg1QAehIA6hVIAJgPQAzhJBMhOIAZgXQAbgZAZgSQAlg6Ang5IAOgTQAYgeAVgZIA4iPQA/icArhcQA9iDA7hKQAMgaAQgaQAphJA6hMIAphLQAahDA3hsQAyhoBDh1QBhimA7hwQAkg8AbgwQAUgiAKgWIBajFQA5h5AxhTQAVgjArgyQAngxAlgoIApgqQApgnAjgZQBQhOBNgPQA5gNAtAVQARAHAOAKQAdASAUAXQCCApgVExQABAUAAAVQABB9gTB1QguB/hIC2IgDAIQgeBUgkCbQguCygwCGQgTA7gVA3IgHARIgPA/QgNArgPA8QgfBvgiBdQg4Chg9BaIgnBXQgXAygVArIgcBcIgDAjQAEAcgCAPIADASIANA7QAKAnAHA6QANBkAGBfQABCRgQBkIgFBXIgDAwQgCAUABAcIAWCHIAOAnQA9CSA7DKQBPCdA4CeQAzBgBHDBQAsBjArBuQCQDjBPCmQAoA/AeA7QAVApASApQA6BcA2BcQBWCWA7CDQA5BcAoBiQA0BRA1BXQBqCxBhCyQBzDUBUC1QAtBGAjBBIAQAfQAzBkAUBTQAWBlgJBFIgDAQQADA4gYAgQgFAPgIANQgRArgmAhQgoAyhBAWQhMAchxgMIgEABQhHANhPAAIg1gCg");
	this.shape_618.setTransform(838.4,1132.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#6699CC").s().p("EAbrA9oQh8gKiegqQhQAOhsgMQgsgGg4gNQilgpj6hdQjWhRj4hsQichEiihLQkqiKkKiMQh5g/hvg+Qj4iKiZhrQhahAhEg6QiGhyhlh7Qg0g7gvg+QhtiAhficQgegwgcgzQihkkhilWIgMgtQhSktAAjAIAAgBQAAiCAUhVIACgUQABgkACgTIAFgbQAOg7AmgvQANgQAQgOQCYiNGagGIA1hAQAThAAyhoQAag4Aeg4QBFh/BJhpIAagkIAZg3IAXgyIAVgqIAXg9QAXg+AXg1QAehFBAhZIAKgOQA4hMBLhJIAagXQAcgYAagSQAhg7Alg+IANgUQAVggAUgbIA5iQQBBigArhaQA/iCBAhKQAMgZARgcQAohHA9hPIAlhPQAZhGAzhuQAwhtA9h2QBXilA9h7QAhg8AbgzQATghALgYIBbjGQA5h4A0hXQAWgmAngxQAngyAkgqIAngrQAogoAjgcQBPhPBMgWQA6gSAwANQARAFAQAHQAhANAZATQCiAnANEdIAGApQAOB9gOB6QgjBnhWDVIgEAJQgjBcgoCSQg0Csg2CLQgVA7gXA4IgHARIgTA+QgQAtgRA5QglBugmBeQg9Ccg+BfIgrBXQgZAygXApQgTAwgSApIgFAkQACAbgDARIABATIAJA8QAIAlADA+QAIBoAABfQgICZgaBcIgKBYIgFAxQgEAVgBAbQAJA7ALBMIAOAnQBECVA7DHQBICgAxCnQApBVBIDXQAoBkApBzQCUDiBXCnQApA/AfA7QAXAqATAoQA7BfA0BcQBXCbA1CDQA5BdAnBkIBrCpQBuCyBjC0QB0DRBZC6QAsBHAjBDIAQAfQAzBlAZBUQAbBjACBIIgBAQQAQA7gLAnQABARgEAQQgCA3gcAqQgeBAg9AfQhIAmh2gIIgDAAQg+AIhDAAQglAAgogCg");
	this.shape_619.setTransform(838.1,1128.1);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#6699CC").s().p("EAccA+WQiCgLiagoQhRAUhugIQgrgDg6gNQijgkkDhgQjZhQj7hsQidhEimhMQktiLkNiMQh7hAhwg+Qj6iKiehsQhchAhFg4QiIhzhoh7Qg1g8gug/Qhwh/hhieQgegwgdgzQikknhjlaIgNgtQhTkxAAjCIAAAAQAAiEAUhWIACgUQABglACgTIAFgbQAQg8AngvQANgPAQgOQCciMGegEQAPgdAegvQAVhDAzhnQAbg4Aeg4QBGiABLhpIAbgkIAXg4IAWg0IATgrIAYg+QAYg/AYg1QAdhBBGhdIAKgOQA/hQBJhDIAagXQAegYAbgQIBBh/IALgVIAlg/IA6iSQBDilArhWQBAiDBGhJQAMgZASgdQAnhEBAhUIAhhSQAZhJAuhwQAuhyA3h3ICMkpIA5hzIAeg7QAmhVA2hyQA5h2A2haQAZgqAjgvQAlgzAkgsIAmgtQAmgpAjgfQBPhQBLgdQA6gYAyAGQATACARAFQAlAJAfAOQDCAkAvELIALApQAaB9gJB+QgXBPhlD0IgEALQgoBkgsCIQg6Cng9CQQgXA7gYA4IgIARIgXA+IgmBlQgrBtgqBdQhCCZhABjIgtBWQgcAygZApQgZAwgWAmIgFAkQgBAagEATIgCATIAGA+QAFAkABBCQACBrgGBfQgRCggkBWIgOBZIgJAwQgEAWgEAaQAKA9AHBMIAQAmQBKCZA7DFQBBCiAqCvQAeBLBKDsQAjBkAoB5QCZDhBeCoQAqBAAhA7QAXApAVAoQA8BiAyBbQBXChAwCDQA6BfAkBlQA2BRA4BaQBxCyBmC1QB1DPBfDAQAqBIAjBFIARAfQAyBkAeBVQAgBjAMBKIACARQAcA+AEAsQAFAVACASQANBCgTA0QgUBOg5AoQhEAwh6gFIgEAAQgxAFg0AAQg0AAg3gFg");
	this.shape_620.setTransform(839.2,1123.7);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#6699CC").s().p("EAdFA/GQiJgNiVgmQhRAchxgEQgrgCg8gMQigggkNhhQjahQkAhtQidhDiqhOQkxiLkQiNQh7hAh0g/Qj7iKiihsQhfhAhFg4QiLhyhqh7Qg2g9gug/QhyiBhkieQgegxgdg0QiokphlldIgNguQhUk0AAjEQAAiGAVhWIABgVQABgmACgSIAGgbQAQg8ApgvQANgQARgOQCgiKGigCQAKghAag4QAYhFAzhlQAcg6Aeg3QBIiBBNhqIAbgkIAWg6IAUg1IASgsIAZg/QAYg/AZg2QAcg+BNhgIALgNQBEhUBHg+IAcgWQAfgYAbgPIA7iFIAKgWIAhhEIA7iSQBFipArhUQBDiDBKhIQAMgYATgfQAnhCBChYIAehWQAYhLAqhyQArh3Ayh4QBFijA+iQIA3h3IAdg8QAqhgAzhoQA6h1A4heQAagtAggtQAlg1AigtIAmguQAkgrAighQBOhSBLgkQA6gdA1gCQAUAAATACQAoAEAkAKQDjAiBRD3IAPApQAoB9gFCEQgLA3h0ETIgEALQgtBtgwB/QhAChhDCWQgZA6gbA5IgIARIgaA9IgsBkQgwBtguBdQhICUhABoIgyBWQgeAxgbAoQgdAvgbAkIgHAkQgDAagFAVIgDATIACA/QADAkgDBEQgDBvgNBfQgZCogvBPIgTBZIgLAyIgLAvQAJA/AGBLIAQAlQBRCcA6DDQA6CkAkC4IBeFCQAgBlAmB/QCdDgBmCoQArBBAiA6IAuBRQA9BlAwBcQBYCmArCCQA7BgAhBoQA3BRA6BbQB0CzBpC2QB1DMBlDGQAoBIAkBIIAQAfQAyBlAjBVQAmBhAWBOIAEARQApBBASAyQAKAXAHAWQAcBNgKA9QgKBcg1AxQg/A7h/gCIgEAAIg7ACQhLAAhMgIg");
	this.shape_621.setTransform(841.2,1119.1);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#6699CC").s().p("EAZKA/EQhSAjhzAAQiZAAmDiKQlkh/nHjPQnBjMl5jNQmTjbi3iTQjWiriKjAQiYinh+jeQi2k/hpl8QhWk4AAjGQAAiHAVhXQABg3AEgXQAOhNAzg6QCWimHTAAQAJhQBhjBQBkjIBviVIAbgkIAUg7QA6ikA2h2QAbg6BUhkQBghzBXhAQAggXAcgPIA2iKQCPlwBFiCQBEiCBQhHQAjhIBoiNQAXhZBAjBQB3lqCNlDQC6moCzj0QDcktDAAAQFGAACGEIQBICQAACfQAAAfiCEyQiQFUiiFNQlOKzi0DAQgLA4gOAwIgBBBQAAAjgFBIQgKBygSBfQgiCwg5BHIgYBbIgbBfQAIBDADBJIARAlQCkEqA9GdQAMBJCKHuQDgE3B+DMQDZFgBCDiQA7BhAfBqQA4BRA8BcQExHSDtHhQBvDfA9CeQA1BEAgA3QBGB3AABbQAABqgxA6Qg8BGiHAAQj2AAj+g/g");
	this.shape_622.setTransform(843.6,1114.3);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#6699CC").s().p("EAZKA/EQhSAjhzAAQiZAAmDiKQlkh/nHjPQnBjMl5jNQmTjbi3iTQjWiriKjAQiYinh+jeQi2k/hpl8QhWk4AAjGQAAiHAWhXQAAg3AEgXQAOhNAzg6QCWimHTAAQAJhQBhjBQBkjIBviVIAbgkIAUg7QA6ikA2h2QAbg6BUhkQBghzBXhAQAggXAcgPIA2iKQCPlwBFiCQBEiCBQhHQAihIBpiMQAXhaBAjBQB3lqCNlDQC6moCzj0QDcktDAAAQFGAACGEIQBICQAACfQAAAfiCEyQiQFUiiFNQlOKzi0DAQgLA4gOAwIgBBBQAAAjgFBIQgKBygSBfQgiCwg5BHIgYBbQgOAygNAuQAIBCADBJIARAlQCkEqA9GdQAMBJCKHuQDhE3B9DMQDZFgBCDiQA8BhAeBrQA4BQA8BcQExHSDtHhQBuDfA+CeQA1BEAgA3QBGB3AABbQAABqgxA6Qg8BGiHAAQj2AAj+g/g");
	this.shape_623.setTransform(843.6,1114.3);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#6699CC").s().p("EAUxA8rQiGABjXg1IhfgVQkghFl1iNIgfgMQm4iql0i6Qjth4imhmQhlg/hJg2QjQifiNi3Qhvh2hhiPQgjg2gig4QitkhhnlWIgNgpQhWkrAAjDQAAiBAUhXQABgzAEgYQAMhMAug5QApg1BDgmQCBhQDlghQArgHAsgEQAHghASgvQAbg/AphUIAQgiQBNiZBJiEIAkg8IAWgkIAQg5IAYhYIANggIAWgxIAchFIAPgiQAbg9BKhfQAug7AsgvQAngpAoghQAegXAagQIATgrIAnhYQAuhmAohQIAmhJQAmhcAfhEQAPghANgZQA/h+BJhJQAkhOBdiBIAfhlQAZhJAjhfQAXg7AYg3QAviHBAiMQAwiDA6iLIAVgyQChlyCejrQA2hOA0g9QCMieB/gUQEjgmCDDBIAMATQA/BcAMBuQAVAHhaD9IgGAZQg7EIhmEvIgFAOQg+Ctg/CTQheC4hhCpQhNB/g8BKQgNA1gPAuIgEA+IgKBmQgOBtgVBbQgTBSgYA9QgWA8gbAlIgaBWQgOAwgOAsQACBAgBBFIALAkQBpE0AfFxQAAASAHAmQAIA0AQBNIASBLQANA1AOBFIAkCiIArBLQBSCZA7ByIAwBeIAjBLIAMAZQAoBKAhBHIAYAsQBrDFAtCaQA3BfAdBpQAyBQA0BaIAmBEQBIB1BLCRIAJATIAyBcQA8BvA5B0QA3BhA0BiIAhBDIAkBJQBQCoA0B/QAwBDAfA2QBCByAFBZQAGBkglA5QgnBDhfANIgSAEQivAViugGIgpgEQgcATgiALIgYAJQglALgpAFQgbAHgkAAQgfAAglgFg");
	this.shape_624.setTransform(837.6,1104.4);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#6699CC").s().p("EAQ+A58QgrgBgugEQkNgZl2hxIgfgJQmwiJluimQjkhqiohhQhhg6hKg0QjMiTiQitQhuhwhgiJQgkgzghg2QivkVhnlHIgNgpQhWkeAAi/QAAh7AShXQABgvAEgaQAMhJAng6QAkg2A5gqQByhcDNg4QAmgMAogIQALghARgqIBFiMIAPggQBKiUA6iFIAcg8IASgkIALg4IAPhWIAOgeIAXguQANgjAOggIANggQAchBBAhZQAqg8AogvQAignAngkQAbgXAZgSIAUgoIAqhUQAyhfAthJQAWglAUgdIBCicIAag5QA8h6BBhLQAmhVBRh1IAghfQAbhJAkhXQAZg4AbgzQAth6BGiMQAsh4A4iPIAVgxQCTliCUjvQAxhNAvg+QB9ibBxgoQEBhNB/B7IANALQBBA2AYBKQAqgSgxDIIgBAUQATDTg4EoIgDANQgjCmgzCVQhLCZhnDEQhGB6g6BOQgNAzgPAtIgIA7IgQBhQgRBmgZBZQgUBNgZA9QgWA4gaAlIgbBTIgeBYQgDA9gGBBQAGAZAAAKQAuE9AAFFQgCARADAjQAEA0AKBHIAOBJQAKAxAKBFIAaCdIAgBLQA7CeAkBpIAhBdQANAnALAkIAJAZQAhBIAbBHIAXArQBkC6AwCcQAxBdAbBlQAsBQAtBaIAhBDQA7BnBHCeIAHASIAuBcQA1BrA0B0QA3BdAzBcIAhBCIAiBHQBNCgA0B9QAsBBAeA2QA9BtALBVQAMBfgZA5QgYBFhIAUIgNAHQiDAph4AoIgdAGQgUAUgYAQIgVALQgfARgiAKQgtAYhCAAQhKAWhnAAQg9AAhIgIg");
	this.shape_625.setTransform(831.8,1096.6);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#6699CC").s().p("EAHiA28IgegHQmpholniTQjchbiqhdQhdg0hLgyQjHiIiTiiQhthrhgiBQgkgxghgzQiwkJhok7IgNgmQhVkSAAi8QAAh0APhXQABgsAFgbQALhHAgg6QAfg3AvgtQBihpC1hOQAjgSAigMIAghGQAig/AkhGIAPgeQBFiOAsiJIAVg7IAMgkIAHg3QAFgtACglIAOgcIAYgsIAZhBIANggQAchDA3hUQAlg7AjgwQAegmAmgnQAYgWAXgUIAWgmIAthOQA3hZAxhDQAZghAWgaQAghQAehHIAZg5QA3h1A5hNQAohbBGhrIAghZQAehJAmhOQAbg1AdguQAqhuBPiMQAlhuA4iTIATgwQCGlQCKj1QAshLArhAQBsiXBlg8QDdhzB8A0IANAEQBEAOAlAmQA9gqgICTIAGAPQBfCegIEgIgBAMQgJCggnCWQg4B6huDgQg/B0g2BTQgOAwgQAsIgLA4IgVBcQgWBggbBWQgXBJgZA8QgWA0gYAnIgcBOIggBUQgJA6gLA9QADAXgCALQgNFHgfEYQgFASgBAdQABA1AEBBIAKBHQAHAuAHBGIAQCXIAUBKQAkCjAMBhIATBcIAOBKIAEAZQAbBGAVBIIAWAqQBeCtAxCfQAsBbAaBjQAmBQAlBYIAbBDQAuBZBECqIAFATIAqBaQAuBnAvB0QA3BZAzBXIAgBBIAhBEQBKCaA0B5QAoA/AcA2QA5BoARBSQAQBagMA5QgJBHgyAbIgIAKQhVA+hCBVIgSAPQgMAXgPATIgRAOQgaAWgbAPQgmAlg1AJQhlBFioALQgpAIgrADQgwAEg1AAQjeAAkuhEg");
	this.shape_626.setTransform(826.1,1090.4);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#6699CC").s().p("EAJeA2nIgdgFQmihGlgh/QjUhOirhXQhagvhMgwQjCh8iWiZQhthmhfh5QgjgugigxQiyj9hoktIgMglQhWkFAAi5QAAhtANhXQACgpAEgcQALhFAag6QAZg5AmgwQBSh1CchlQAggXAdgQIAjhBQAmg/AhhAIAOgcQBCiHAdiMIAOg8IAHgkIADg2QABgsgDgiIAPgaIAZgqIAXg/IAMgeQAchHAthOQAhg7AfgxQAZgkAlgpQAVgXAWgVIAYgkIAwhJQA6hTA2g8QAbgdAYgXQAdhKAfhIIAYg4QAyhyAxhPQAqhhA6hgIAhhTQAhhIAmhGQAegyAfgqQAohhBXiMQAfhkA3iXIARgvQB5k/CAj7QAnhJAnhBQBciTBYhQQC6iaB5gSIAMgEQBHgaAxAEQBShDAhBeIAMAKQCsBpAoEYIABALQAQCZgaCXQglBch1D8Qg4BugyBYQgQAugRAqIgOA1QgMAmgNAxQgbBageBSQgZBFgaA7QgVAygXAnIgeBKIghBPIgeBxQgBAVgEAMQhIFRg9DsQgIARgFAXQgDA3gCA7IAGBFQAFAqADBHIAFCRIAKBLQAMCngLBYIAFBcIACBJIABAYQAVBFAPBJIAUAoQBYCiAzCgQAmBZAZBhQAgBQAdBWIAWBEQAhBKBAC3IADATQAJAaAdA+QAnBkAqB0QA3BVAzBSIAfA/IAfBCQBHCTA1B1QAkA+AbA1QAzBkAXBPQAWBUABA5QAFBKgbAiIgDANQgoBTgNCCIgGAXQgDAagGAWIgOASQgUAbgVAVQgfAxgnASQhVBoiRAqQglAQgoALQh9AjimAAQiPAAiugag");
	this.shape_627.setTransform(820.8,1081.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#6699CC").s().p("EAKyA2vIgdgDQmagklahsQjLhAithSQhXgqhMgtQi9hwiaiPQhshhhdhyQgkgsgiguQizjxhpkfIgMgkQhWj4AAi2QAAhnALhXQADgkAEgfQAKhCAUg6QATg7AdgzQBCiCCEh7QAcgcAYgVIAmg7QAqhAAeg4IAOgbQA+iAAOiPIAHg8IACgkIgBg0QgEgtgHggIAPgYIAagnIAWg8IALgdQAbhKAlhIQAcg8AbgxQAVgjAjgsQASgWAVgXIAZgiIAzhEQA+hNA7g0QAegbAagSIA4iPIAXg3QAthtAqhRQAshoAuhUIAihOQAjhIAng+QAggvAiglQAlhUBfiMQAahaA2ibIAQgtQBrkvB2kAQAihHAjhDQBMiPBKhkQCYjBB1hZIANgLQBKhBA9ggQBmhbBJApIATAEQD5A1BXEQIADALQApCSgNCYQgSA+h8EXQgwBogvBdIgiBUIgSAyIgeBTQggBTghBPQgaBAgbA7QgVAugVAoIggBGIgiBLIgpBrQgEARgGAPQiDFahcC/QgLARgIASIgQBtIADBDQACAngBBHQgBBIgEBEQABAmgCAlQgKCrgjBQIgJBbIgJBIIgDAYQAOBEAJBIIASAnQBTCXA0CiQAiBXAXBeQAZBQAXBVQAIAiAIAiQAVA8A7DEIABASQAFAVAcBCIBGDVIBqCdIAdA9IAfBAQBDCMA2ByQAfA8AaA1QAvBfAdBMQAcBOAMA5QAUBNgEApIACAPQAFBoAoCwIAGAgQAGAcADAaIgKAVQgPAggOAaQgZA9gZAdQhFCJh5BLQgjAYglATQirBXkQAAQhGAAhNgGg");
	this.shape_628.setTransform(819.6,1069.2);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#6699CC").s().p("EgGsAzlQmfi4kflIQjnkHh8lEQhikBAAi/QAAkaBHjLQAziPBriSIBVhwQAuhAAbgxQBIiEAAigQAAiVgehJIAQgWIAcgkIAUg7QA5ijA2h1QAcg7BThkQBghyBXhBQAhgXAcgPIA1iKQCQlvBEiDQBEiCBQhHQAjhIBoiMQAXhaA/jBQB3lpCOlEQC6moCzj0QDcktDAAAQFGAACGEJQBICPAACfQAAAfiCEzQiQFTihFNQlPKzizDAQgMA4gOAwIgBBBQAAAjgFBIQgJBygTBfQgiCwg5BHIgYBbIgbBgQAIBCADBJIARAkQCkEqA+GeQAHAuA4DQIgBASQAAAQAdBGIA6DRIBpCUIA7B5QEiJXBECwQAxB+BmDuIAqBlIgFAYQgeB+gRA3QhFDfiSBxQjGCal3AAQqHAAnsjag");
	this.shape_629.setTransform(824.6,1056.3);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#6699CC").s().p("EAJVA10QikgDibgTIgigFQk6g1kNh0QhKgfhHgkQikhWiLhqQi7iDiXjQQhEhUg5hcQh5jChMjUQhZkAAAi1QAAkFBGjVQALghAOghQArhmBEhmIAMgPIAjgsQAfgoATgWIAGgIQAng5AZgvQAOgbAMgdQArhqAEh5QAEiPgXhIIAPgWIAagkIAUg5IAkhiQAnhhAlhMQAWgsAyg/IAlgvQBZhtBWhEIABgBQAdgYAagPIAziIIA0iHQBij1A2hsQBBh/BLhJQAjhKBhiHIAHgZQAbhbA1ieQB3ldCMkxIAEgJQClliCdjMQAdgkAbggQDdkJC4AUQApADAmAIQDKAmBoCmQAUAdAOAmQA9CIgHCgQgBAKgNAlQgfBUhTDEQh7EhiIEdIgoBSQlEKciwDDQgNA2gPAuIgFA+IgBAZIgGBOIgGA6QgEAogGAnQgEAigGAhIgMA7QgdB8grA9IgOA4IgJAgQgMAxgOAtQAGBBAABFQALAcACAIIALAZQAXAzAUA2QAWA5ASA8QAbBQAVBXIAOA0IAGAXQATBiAOBsQAFAlAeB7QAJAoANAwIgBASQAAAKAJAcQAFATAKAbQAIAlAKApIAhB+IBgCTIAOAdIAqBbIBiDTQBmDaA9CPQA1B6AXBFQAkBkA/ChQARApATA4IAPAkIAXA/IgGAXQgbB5gRA4IgPAvQgrB2hDBUIgGAHQglAogqAeQhRA7huAhQiTAsjCAAIgdgBg");
	this.shape_630.setTransform(828.1,1051);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#6699CC").s().p("EAHiA0rQifgGiWgXIgggHQknhGj7iBQhGgjhAgnQiZhdh/hsQilh6iJjiQg8hUgzhdQhtjDhEjMQhRj/AAirQAAjyBGjfQAKggANggQAphmA9hkIALgOIAkgrQAegkAUgWIAGgHQAkg3AZgvQAOgbALgdQAqhoAHh0QAIiIgQhIIAPgWIAYgjIAUg3IAkheQAmhfAnhJQAXgsAwg7IAjguQBThoBVhJIABgBQAagXAXgRIAyiFIAyiFQBbjpA3hyQA9h6BGhLQAjhNBaiAIAIgZQAchcA0iVQB6lXCMkhIAEgKQCrlaCiizQAdgfAdgcQDejlCwAoQAmAGAjALQC6A0BbClQARAbAKAoQAyCAgPCfQgBAMgNAiQggBXhPC5Qh5EaiEEWIgnBQQk5KEitDHQgPA0gQArIgIA7IgDAYIgHBLIgHA5IgIBNIgJBBIgLA7QgaB3gnA/IgOA3IgIAfQgMAwgNArQADBBgDBBQAJAbABAIIAIAZQASAyAQA1QARA4AOA6QAZBOATBVQAJAcAFAXIAHAWQAPBfAMBqQADAoAbB0IATBWIgBARQAAALAIAaQADATAIAaQAFAlAJAnIAeB7IBXCTIANAcIAoBaIBeDQQBgDVA5COQAwB1AWBHQAhBlA3CbQAPAlARA7IAMAkIAUA+IgGAXQgZBzgRA6IgPAtQgpB0g/BSIgGAHQglAlgrAcQhQA1hsAdQiGAjioAAIg7gBg");
	this.shape_631.setTransform(831.6,1045.6);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#6699CC").s().p("EAFuAzjQiagJiSgbIgegJQkUhYjpiNQhAgng8gpQiOhlhwhvQiQhxh7jzQg1hUgtheQhgjEg9jEQhIj+AAiiQAAjdBFjqQAJgfANggQAlhlA3hhIAMgOIAjgpQAfgiAUgVIAGgGQAig2AXgvQANgbALgbQAqhnAKhuQAMiBgJhIIANgVIAYgjIAUg2IAjhbQAnhbAmhIQAZgrAug3QAPgVASgZQBNhiBUhNIABgBIAsgrIAwiCIAwiCQBWjeA2h2QA6h2BBhOQAjhOBTh7IAHgZQAfhcAyiMQB9lQCMkTIAEgJQCylTCliZQAfgbAdgXQDgjBCoA7QAjAJAhAOQCqBBBOClQAOAYAGAqQAnB5gWCfQgDANgMAgQgiBahKCtQh2ETiCEPIglBNQkuJtirDLQgRAxgRAqQgGAZgFAfIgEAWIgIBJIgHA2IgIBMQgDAfgFAhIgKA5QgXBzgjBBIgNA1IgIAfQgLAvgNAqQAAA/gFA+QAGAZAAAKIAFAXQAOAyAMAzQANA3AKA4QAWBNARBUIAOAwIAHAVQALBdAJBoQADArAWBtIARBUIgBAQQABAMAHAYQABATAGAZQADAkAHAmQAMA5AOA/IBPCTIAMAcIAmBYQAsBkAtBqQBbDPA1CNQAsBwAUBKQAeBmAvCVQANAfANA/IALAkIAQA9IgFAWQgXBugRA7IgOAsQgoByg8BRIgGAGQglAigrAZQhQAxhqAZQh4AbiPAAQgrAAgtgDg");
	this.shape_632.setTransform(835.3,1040);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#6699CC").s().p("EAD5AydQiVgMiNgfIgcgLQkChpjXibQg7gqg3grQiChthkhxQh6hohtkGQguhTgnheQhTjGg1i8QhAj+AAiXQAAjJBEj0QAJgfAMgfQAjhmAwheIAMgNIAjgnQAeggAVgUIAHgGQAegzAXgwIAXg1QAphlAOhoQAQh6gDhIIANgWIAWgiIAUg1IAjhXQAmhYAohFQAagrAsgzIAfgtQBHhdBShRIABgBIAogtIAth/IAviAQBPjSA3h7QA2hyA8hQQAkhRBLh1IAIgYQAhhdAwiDQCAlJCLkFIAFgIQC4lMCpiAQAggWAfgTQDhidCgBPQAgANAeARQCaBOBBCjQAMAXABAsQAcBxgeCfQgDAOgLAdQgkBdhGCjQhzELh/EIIgkBLQkjJWipDNQgSAwgSAnIgOA1IgFAUIgJBHIgIA1IgHBKIgHA/IgJA4QgUBuggBDIgMA0IgHAdQgLAugMApQgDA/gIA6QAEAYgCAKIACAWIASBkQAIA2AGA2QAVBLAOBSQAKAcAFATIAHAUIANDAQACAuATBlIAOBTIgBAQQABAMAGAWQgBATAEAYQAAAjAHAlQAJA4ANA+QAjBJAkBIIALAcIAjBYQApBeAsBsQBWDKAwCLQAnBsATBMQAbBnAnCPQALAaAKBEIAJAjIAMA8IgEAVQgVBogRA9QgGAXgIAVQglBvg5BPIgGAGQgmAfgrAXQhPArhoAVQhoAUh3AAQg5AAg9gFg");
	this.shape_633.setTransform(839.2,1034.3);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#6699CC").s().p("EACDAxaQiPgPiLgjIgagNQjvh7jFinQg2gugwguQh4h1hWhzQhlhehfkYQgmhUgihfQhHjGgsi1Qg4j8AAiOQAAi1BEj/IASg8QAhhlAqhdIALgMIAkglQAegdAWgTIAGgFQAcgyAWgwQAMgZAKgbQAohjARhjQAVh0ADhHIAMgWIAUgiIAVgzIAjhTQAmhWAohBQAbgrArgvIAdgtQBAhXBShWIABgBIAjguIAqh9IAth9QBKjHA3iAQAyhuA4hSQAkhTBDhvIAIgXQAjheAvh7QCDlCCLj2IAEgIQC/lFCuhmQAhgSAfgOQDjh4CYBiQAdAQAbATQCKBbA0CjQAKAVgDAtQAQBqglCfIgOArQgmBfhCCXQhxEEh7EBIgkBJQkXI+imDRQgTAugUAmQgJAXgJAaIgGATIgJBEIgKAzIgFBIIgGA+IgIA3QgSBqgbBEIgLAzIgHAdQgLAtgMAnQgFA9gLA4QACAWgEALIAAAVQAFAwAEAxQAEA2ACA1QASBJAMBQIAQAtIAHAUIAHC6QAAAxAPBfQAFAmAHAqIAAAQQAAAMAFAVQgDATACAWQgCAjAFAjQAHA3ANA9QAdBIAgBJIAKAbIAhBWQAlBaArBtQBRDGAsCJQAjBoARBOIA3DxQAJAVAIBHIAGAjIAJA7IgEAVQgTBjgRA+IgNArQgkBsg2BOIgGAFQglAcgrAVQhPAnhmAQQhXANhgAAQhIAAhMgHg");
	this.shape_634.setTransform(843.1,1028.3);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#6699CC").s().p("EAAJAwZQiKgSiHgnIgXgPQjciMizi1QgxgxgsgwQhsh9hJh1QhQhVhQkrQgfhTgchfQg6jIglitQgvj8AAiEQAAigBDkJIARg8QAehlAjhaIAMgLQASgTASgQQAdgbAXgSIAGgFQAZgvAVgxIAWgyQAmhiAVhcQAZhvAKhHIALgWIATghIAUgyIAjhPQAmhTApg+QAdgrAogrIAcgsQA6hSBQhaIABgBIAegwIAoh6IArh7QBEi8A3iEQAuhqAzhUQAlhVA8hqIAIgWQAlhfAthyQCGk8CLjnIAEgIQDGk9CxhMQAjgOAggKQDkhUCQB2QAbATAYAXQB5BoAnCiQAIASgHAwQAFBigtCfIgOApQgoBig9CNQhuD8h4D6IgjBHQkNInijDUQgVArgUAkIgWAvIgHAQIgKBDIgKAxIgEBGIgGA8IgGA3QgPBlgYBGIgLAyIgGAbQgKAsgLAmQgJA9gNA0QgBAVgFALIgDAUIABBgQgBA1gCAzQAQBHAKBOIAQArIAIAUQgCBTABBiQAAA0ALBXQAEAmAFApIAAAPQAAANAEATQgEATgBAVQgEAjAEAhQAFA2ALA7QAYBHAdBJIAJAbIAfBWIBMDDQBLDBAoCIQAeBjAQBQIAsDsQAHARAEBLIAFAiIAFA6IgDAUQgRBdgRBBIgNApQgiBqgzBNIgFAEQgmAZgrATQhPAhhkAMQhFAJhJAAQhXAAhcgMg");
	this.shape_635.setTransform(847.4,1022);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#6699CC").s().p("EgB0AvcQiGgViCgrIgWgRQjJidihjCQgrg0gngzQhhiFg7h4Qg7hMhCk8QgXhTgWhgQgujJgdimQgmj6AAh6QAAiMBBkUIAQg6QAbhlAdhXIAMgLQASgSARgPQAegZAXgQIAHgFQAWguAUgxIAUgxQAmheAYhYQAdhoARhIIAKgVIASghIAUgwIAihMQAnhPApg9QAegqAngnIAagrQAzhNBPheIABgBIAZgzIAnh3IAph4QA+iwA3iJQArhmAuhWQAkhYA1hkIAIgWIBTjIQCJk1CKjZIAFgHQDMk2C1gzQAkgJAhgFQDmgwCICKQAYAVAVAaQBpB1AaCiQAFAQgLAxQgGBbg0CfIgPAoQgqBlg4CBQhrD1h1DzIgiBFQkCIPigDYQgXApgVAiIgZArIgIAPIgMBAIgKAwIgEBEIgEA7IgFA1QgNBhgTBIIgKAwIgGAbQgKArgLAkQgLA8gQAxQgDATgGAMIgHATIgHBeIgLBlQANBGAIBNIAQApIAJASQgHBRgBBgQgBA2AHBRIAHBNIAAAOQABAOACASQgGASgCAUQgHAiACAgQAEA1AJA5QATBHAZBJIAIAbIAeBUIBGDBQBGC7AkCHQAaBeAOBTQASBqAPB8QAFAMABBPIADAiIACA5IgDATQgPBYgRBCIgMAoQggBogwBLIgGAEQglAWgsAQQhOAdhiAIQgwAEgyAAQhnAAhugRg");
	this.shape_636.setTransform(852.1,1015.4);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#6699CC").s().p("EgDxAujQiBgYh+guIgTgTQi2iviPjPQgng4ghg1QhWiNguh6QglhCg0lPQgQhSgQhhQgijLgVidQgej6AAhwQAAh4BBkeIAOg5IAwi6IALgKIAkgfQAdgWAYgQIAHgEIAnhdIATgvQAlheAbhSIA5ipIAJgVIAQghIAVguQASgpAQgfQAmhNAqg5QAggqAkgjQAKgTAOgYQAuhHBNhjIABgBIAUg0IAlh0IAnh2QA4ilA3iOQAnhiAphYQAlhaAuheIAIgVQAphgAqhhQCMkuCKjKIAFgHQDTkuC5gaQAlgEAigBQDngMCACdQAVAZATAdQBZCCANChQACAOgPAzQgRBTg8CfIgPAnQgrBog0B2QhpDuhyDrIghBDQj2H4ieDbQgYAngXAgIgcAoIgJANIgNA+IgLAuIgCBDIgDA5IgFA0QgJBcgQBKIgKAvIgFAaQgJApgKAkQgPA8gSAtQgGARgHANIgKASIgPBcIgUBjQALBEAGBLIAQAnIAJASQgKBOgEBeQgCA5ADBJIAEBLIABAOIACAeQgIATgFATQgJAhABAfQACA0AIA3QANBGAWBJIAHAaIAbBUIBDC9QBAC3AgCFQAVBaAMBVQAPBrAIB2QACAHgBBTIABAhIgCA4IgCATQgNBSgRBEIgMAnQgeBlgtBKIgFADQgmAUgsANQhNAYhgAEIg0ABQh7AAh/gYg");
	this.shape_637.setTransform(856.7,1008.3);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#6699CC").s().p("EgJlAskIgSgVQiijAh+jcQh7jZgtirQgUhGg0oIQg4ocAAilQAAhsBNlYQAWhkAQhTQAYgVAXgRQAggXAcgPIA2iJQCPlwBFiCQBEiCBQhHQAjhIBoiNQAXhZBAjBQB3lqCOlDQC5moCzj0QDcktDAAAQFGAACGEIQBICQAACfQAAAfiCEyQiQFUiiFNQlOKzi0DAQgLA4gOAwIgBBBQAAAjgFBIQgKBygSBfQgiCvg5BHIgYBbIgbBfQAIBDADBJIARAlIAJASQgYB7AACqQAAA6ADA5QgdA2AAAtQAAB+AoCTQAOA2BIDWQA8CyAbCDQAnC/AADKIgEB6QgMCNgiB1QgdBigqBJIgGACQhoAuiTAAQkSAAkJhtg");
	this.shape_638.setTransform(861.4,1000.5);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#6699CC").s().p("EgHcAp7IgSgEIgQgMQiGhriAidIgaghQiBiwg6ilQghhNgymiIgHg1Qg4nhAAi6QAAhzBEk2IAlisQAUgVAUgSIAfgbIAVgOIAxiCQA2iQAjhYIAjhpQAnhSAdgwIAOgXQA3hkBGhFQAVgpAqg9QAbgsAlg4QAWhWA5itIADgHQBwlUCFkyQA4iCA3hxQByjnBvihQDEkWCsgcIAygEQD7gSB5CyQA/BRAaBiQAHAaAEAbQAbAahVEAQgkCbgyCnQgwCYg7CYIgeBLQheDGhpDJQiLEAhhB5QgMA0gPAtIgEA8IgLBjQgNBpgWBZQgGAdgIAaQgfB1gsA8IgZBUQgOAvgPAqQACA+gCBDQAKAbABAIIAHAQQgeB3gKCYQgEA1gCA1QgaAxgEAqQgNB5AWCBQACAYANA1QAMA5AVBQIAKAiIANAxQATBCANBCQANA8AIA1QAJA7AFA6QgEBrgJCEQgDAJgGBoIAAAGQgNB8gdByIgHAaQgVBDgeBJIgEADQgyAfg/AVQgqAOgwAIQhjAXhkAAQhyAAhxgfg");
	this.shape_639.setTransform(860.6,981.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#6699CC").s().p("EgFyAm/IgPAAIgOgFQh4gliMh3IgcgZQiHiHhFidQgxhZg0lwIgHgyQg6mnAAjOIAAAAQAAh5A9kWIAjihQARgWAQgTIAagbIARgQIAth6IBPjaQAPg3AJgtQAmhKAfgtIAOgVQAwhYBEhKQAWgmAmg4QAWgqAgg3QAXhUA0ifIADgHQBpk/B7kgQA0h5A0hsQBnjYBmibQCskBCZg3IArgLQDcg6B5B0QBEAvAnBKQAMAUAJAUQA0AWgmDOQABCFgUCeQgVCPgqCRQgKAlgMAjQhHCchuDjQh6DphaCCQgOAwgPAqIgIA4IgPBbQgTBggYBTIgPAzQggBqgpA8IgaBNIgdBTQgEA5gHA9QAFAYgBAJIAEAQQgkBxgTCHQgIAxgHAwQgZAsgHAnQgZBzADBwQgCAXAGArQAGA5ANBIIAHAgIAKAvQAOA6AIBDQAJA5AEAzQAGA3ACA3QgaBSgTB+QgGAPgHBZIAAAGQgOBvgYBzIgFAXQgQA0gYBUIgDAEQgmAjgwAfQggAVgkAPQiRBXiWAAQgUAAgUgBg");
	this.shape_640.setTransform(860.8,964.3);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#6699CC").s().p("EgJLAjRIgegRQiMhfhSiWQg/hkg2k/IgJgtQg6luAAjiIAAgBQAAh/A1j1IAiiWIAagqIAUgdIANgRIAphyIBGjMQAKg0ACgqQAlhCAigsIAOgRQAohNBChOQAWglAkgyIAsheQAXhSAwiRIACgHQBikpBykPQAwhwAwhoQBdjIBciWQCUjqCGhTIAkgSQC+hhB4A1QBKAOA1AyQAPANANAOQBQARAGCcQAoBuAJCWQAFCFgYCMIgNBEQgvByh2D+QhnDQhVCMQgOArgPAoIgMAzQgJAigMAxQgWBXgbBPIgRAuQggBegmA+IgbBHIgeBLIgXBsQACAUgDALIAAAOQgpBsgdB1IgXBYQgXApgMAjQglBtgOBfQgHAWgBAiQAAA5ADBAIAFAdIAGAtQAKAyAEBFQAEA1ACAxQABA0gBAyQgxA6gcB4QgIAWgIBKIgBAFQgOBigTBzIgEAWQgLAlgRBfIgCAEQgaAnggApQgXAcgZAWQhzCViAAeIgMAFIgMADQgeAJghAAQhWAAhug5g");
	this.shape_641.setTransform(865,947.6);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#6699CC").s().p("EgIhAh+QgQgEgPgGQiSg2heiPQhPhvg4kOIgJgpQg7kzAAj3IAAgBQAAiGAtjTQAPhGARhGIATgrIAPgfIAKgRIAkhqQA0icAJgiQAFgzgFgnQAkg6AlgpIAOgPQAhhBA/hSQAXgkAhgsQANgmAVg1QAYhQAriDIACgHQBbkTBoj9QAshpAshiQBUi5BTiRQB6jUBzhuIAegZQCfiIB4gKQBPgTBCAZIAlAOQBqAMA0BqQBOBYAmCOQAgB8gGCFQgCAggDAhQgYBJh8EYQhVC4hPCVIgeBNIgQAuQgMAigOApQgbBNgeBKIgRArQgiBRgjA/IgcBAIgeBFIgiBiQgDARgFAMIgDAMQgvBnglBjIggBPQgWAlgPAgQgxBnghBOQgMAVgIAZIgLBwIADAbIACAqQAFArgBBGQABAygCAuQgCAxgEAvQhIAhglBzQgLAbgJA7IgBAFQgOBVgOBzIgDAVQgGAWgKBqIgBAFIghBdQgMAigOAeQhBDGhWBKIgKAKIgKALQhCBHhnAAQgpAAgvgLg");
	this.shape_642.setTransform(872.2,931.6);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#6699CC").s().p("Au7ZHQhGkKAAkhQAAjYBZk0QBZkOAAgWQAAgxgLgkQArg+AugpQAjhHBoiMQAXhZBAjCQB3lpCOlEQC6moCyj0QDcktDAAAQFGAACGEJQBICPAACgQAAAeiCEzQiQFTihFNQlPKyizDBQgMA4gOAvIgBBBQAAAjgFBIQgIBggOBSQh8ALgpC+QgRBOgJCAIgKDtQgNEzg0CIQhMDJjBAAQk6AAiBnug");
	this.shape_643.setTransform(880.4,914.5);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#6699CC").s().p("AowcOQhVgyhGhoQgwhEgmhbQhojPgVj3QAAi/BMkdQBGjgAFgrQABgrgHgiQASgeATgaQARgXARgTQAehLBSh4QAWhdAzihIAmh2QAnhtAphpQA5iSA+iKQCol6ChjhQArg6AogvQCRilCEgSQD5gfCHCZQATAVARAYQBQBtAVCBQAYAhhQD6QgUBQgXBTQg7DUhVDXIgIAUQhnDbhsDSQiMEFhiB8QgMAxgOArIgFA6IgKBfQgMBUgQBKQhbAYgpCAQgGASgFATQgTBJgNBuQgJAXgOC4QgNB5gTBcQgXBqghBFIgDAHQhPCnieAQQgaAEgYAAQhLAAg+gjg");
	this.shape_644.setTransform(883.2,891.1);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#6699CC").s().p("AmRYzQhRgehLhFQg3gtgsg/QiLiTgqjPQABilA+kFQAzizAKhAQACglgDggQAOgcAOgaIAZgoQAahMA7hnQAWhgAmiAQARg9ANgsQAkhhAmhdQA1iDA3h5QCWlLCSjPQAkg0AkgrQB6iRBwgiQDUhACDBnQAUAOASAQQBYBLApBgQAxAkgfDCQAABEgGBKQgPC+g5DEIgHATQhKCohsDhQhzDehWCDQgNArgOAmIgIAzIgQBSQgPBJgTBCQhHAlgmBsIgLAgQgXBEgRBbQgQAkgUCOQgVBogXBSQgdBVglA/IgEAGQhQCNh+AgQg4ASgvAAQgdAAgagGg");
	this.shape_645.setTransform(886.9,867.7);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#6699CC").s().p("Am4UrQg+gXgzgjQithXg/ilQACiMAwjuQAhiFAOhVQAEgfABgdQAIgbAKgaIARgmQAVhOAjhUQAWhlAaheIAWhcQAhhVAjhSQAwhyAwhpQCGkdCBi8QAfgtAfgnQBjh+BdgzQCthfCAAzQAVAHATAJQBfAoA9BBQBKAmAUCKQASA4AMBCQAcCngcCxIgFATQgvBzhsDxQhYC5hMCIIgaBGIgNAsIgVBFQgTA+gVA5QgzA0gjBWIgLAcQgZA+gXBJQgXAxgZBlQgcBVgcBJQgjA/grA6IgEAFQhRByhfAxQhJArg3ALQhOgIhPgjg");
	this.shape_646.setTransform(894.8,844.3);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#6699CC").s().p("AsEPsQAFi5BUm5QBKlmANhEQAehJAfhHQC6moCzj0QDbktC/AAQFGAACGEJQBJCPAACfQAAAfiCEzQiQFSiiFNQhpDahaCoIhdBiQidCnhYBTQhKANhVAAQk1AAhsieg");
	this.shape_647.setTransform(905.7,820.6);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#6699CC").s().p("An1NcQhegigvhJIgCgDQARiXBNlRQBEkRAVg1IAphUIANgYQCik+CZixQCzjeCcAIQBvADBUApQAwAbAmAmQAsAwAdBBQA0B1gEB+QgBALgRArIhgDGQh/D4iOD2QhbChhPB9Ig5A1IgVATQh/B8hMA+Qg7AJhEAAQhrgBhOgWg");
	this.shape_648.setTransform(912.5,794.4);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#6699CC").s().p("AkWJbQhQgBg9gPQhBgfggg6IgBgCQAeh0BGjpQA9i9AeglIAkg5IAKgQQCLjTB/hvQCLiOB5APQBSAHA/AhQAgAZAaAcQAbAmASAyQAeBYgIBeQgCAJgMAgQgeAlg2BZQhuCeh6CfQhMBohFBRIgsAiIgQANQhjBRg/AoQgnAFgqAAIgQgBg");
	this.shape_649.setTransform(919.4,768.1);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#6699CC").s().p("AjxFGQg2gCgsgIQgjgbgRgsIgBgBQAshSA+iBQA3hpAmgUQAPgQAPgNIAJgIQBzhqBlgsQBjg/BWAXQA1AKAqAZIAeAqQALAcAGAiQAJA9gMA9IgLAbQgdAOgqAnQhdBGhmBHQg+Awg5AlIgiAQIgMAFQhFAmgzASIgrABIgWAAg");
	this.shape_650.setTransform(926.4,741.7);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#6699CC").s().p("AhiAxQhdgNhSgEQgFgXgCgdQB4hkBvAAQDIAACABlIACAdQgRBCgeAtQiZgvizgZg");
	this.shape_651.setTransform(934.8,716.5);
	this.shape_651._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_573}]},73).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_651}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_651).wait(154).to({_off:false},0).wait(52));

	// left atrium blood 2
	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#6699CC").s().p("Al0CDQgJgTgCgYIgBgXQABhVB4hHQBthBCagZQCdgZBrAhQB5AmAABiQAAAzgiAdQhKA+jdgIQgRAAiRAwQiTAwgFAAQhWAAgcg+g");
	this.shape_652.setTransform(620.1,816.4);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#6699CC").s().p("AlvDMQgTgMgMgVQgFgLgEgMQgEgMgCgNIAAgFIgBgTIAAgBQABgzAhguQAZglAqgeIAYgTIAWgQQBPg2BhgfQAngOApgKQA0gNAxgEQAggDAfAAQAXABAVACQAPABAPADQAaAFAYAIIAGADQAUAHAQAKIATAMIANAJQAfAXAQAhQAPAeABAeIAAAFIABAFQAAASgCAQQgDATgKAQQgFAIgHAHIgFAFIgJAIIgRANQgMAKgPAHIgQAHIgKAEIgSAGQhEAVh1AFIgKABQgbAEiaAyQhOAYgvANQgrAMgHAAQhAAAgmgbg");
	this.shape_653.setTransform(619.1,820.3);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#6699CC").s().p("AmEDzQgWgKgOgXQgHgLgFgOQgEgNgDgOIAAgGIgCgUIAAgCQABg5AigzQAaguAsggQAMgMANgKIAXgUQBThFBkgnQAqgUArgNQA6gUA1gDQAjgGAjgBQAaAAAXADQAQABARADQAdAGAaAKIAHAEQAWAKARALQAJAHAKAIIAPALQAgAZASAnQAQAkADAfIAAAEIABAHQACATAAARQgCAWgHARQgGAJgGAIIgFAGIgJAKIgPAQQgLAMgMAIIgMAIIgJAGIgRAJQhAAeiGAOIgLAAQgmAJijAzQhVAag3AOQgvAMgLAAQhFAAgugbg");
	this.shape_654.setTransform(618.2,824.2);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#6699CC").s().p("AmZEbQgZgJgRgYQgIgMgGgPQgGgOgDgPIgBgHIgCgXIAAgBQADg/Aig5QAcg2AtgiQAMgOANgNIAYgWQBYhUBngwQAsgZAugQQA+gaA7gFQAlgHAngCQAdAAAaACQARABATAEQAfAHAdAMIAIAFQAXAMARAOQAKAHAKAKIAQANQAiAcAUAsQATApAEAfIAAAGIABAGQADAVABATQACAYgHASQgFALgGAJIgFAHIgJALIgNATQgIAPgLAJIgJAKQgBADgFADIgPANQg/AmiWAWIgMACQgwANitA0QhbAbhBAPQgxALgPAAQhMAAg0gZg");
	this.shape_655.setTransform(617.3,828);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#6699CC").s().p("AmvFDQgcgIgTgaQgKgMgHgQQgGgPgEgRIgBgHQgDgTAAgGIAAgBQADhFAjhAQAdg/AvgjQAMgQAOgOQAMgOAMgMQBdhjBqg4QAvgeAxgUQBDggA/gFQAogKArgCQAggCAcADQASABAVAEQAiAIAfAPIAJAFQAZAOASAQQAKAJAKAMIASAOQAjAeAWAyQAUAuAGAhIAAAFIABAIQAFAWADAUQADAcgEASQgFAMgHAKIgFAIIgJANIgKAVQgHASgIALIgGALQAAADgEAEIgOAQQg8AvinAeIgMACIjxBIQhiAchKAQQgzALgUAAQhSAAg7gYg");
	this.shape_656.setTransform(616.5,831.9);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#6699CC").s().p("AnGFqQgfgHgWgaQgKgNgJgRQgHgRgEgSIgCgHQgDgVAAgHIAAgBQAEhLAjhFQAfhIAwglQANgSAOgQQAMgQANgNQBihyBshAQAygjAzgYQBIgmBEgGQAqgMAwgDQAjgCAeADQATAAAXAGQAlAIAhARIAKAHQAbAPASATQALAKAKANIATAQQAlAhAXA3QAXA0AHAhIAAAGIACAIIAKAuQAGAdgDAUQgFANgGAMIgFAIIgJAPQgDALgGANQgEAUgGAMQgDAHABAGQABAEgDAEIgNATQg5A4i4AnIgNACQhGAWi/A3QhoAehTARQg3AKgYAAQhXAAhDgXg");
	this.shape_657.setTransform(615.8,835.8);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#6699CC").s().p("AncGSQgjgGgYgbQgMgOgJgSQgIgSgGgTIgBgIQgEgWAAgIIAAgBQAEhRAkhLQAhhQAygoQAMgUAOgRQANgSANgOQBniBBwhIQA0gpA1gcQBOgsBIgGQAtgOA0gEQAmgDAgAEQAVAAAYAGQAoAJAjATIALAIQAcARAUAWQAKAKALAPQALAIAJAJQAnAkAZA8QAZA6AIAiIAAAGIACAIQAIAaAGAYQAHAfgBAVQgFAPgGAMIgEAKIgJAQIgHAbQgDAXgDANQgCAIADAGQADAFgDAEIgLAWQg3BBjJAvIgNADQhRAbjIA5QhvAehcASQg6AKgbAAQheAAhJgWg");
	this.shape_658.setTransform(615.1,839.7);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#6699CC").s().p("An0G5QglgEgbgdQgMgOgLgUQgJgSgGgVIgCgJQgFgXAAgIIAAgCQAGhXAlhQQAhhZAzgqQAOgWAOgSQANgUANgQQBsiQBzhQQA3gvA3gfQBTgyBNgHQAwgQA3gFQApgDAjAEQAVgBAbAHQAqALAlAVIAMAIQAfAUAUAXQALAMALARIAVASQAoAmAbBCQAcBAAIAiIABAGIACAKIAQA0QALAiAAAWQgEAQgHAOIgEAKIgJASIgFAdIgCApQAAAIAFAHQAEAFgBAFIgKAZQg1BKjZA3IgPADQhbAgjRA6Qh2AghmATQg8AKggAAQhjAAhRgWg");
	this.shape_659.setTransform(614.5,843.6);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#6699CC").s().p("AoLHiQgogEgegdQgOgQgLgUQgLgUgGgWIgCgKQgGgYAAgKIAAgBQAHhdAlhWQAjhhA1gsQAOgYAOgUQAOgWANgSQBxidB1haQA5g0A7giQBYg5BRgHQAzgSA8gFQArgFAkAFQAYgBAdAHQAtALAnAYIANAJQAgAWAUAaQALANAMASQAMAJAKALQAqApAeBHQAcBFAKAjIACAHIACAJIATA4QAMAkADAZQgFAQgGAOIgEANIgJATIgDAgIACAsQACAJAGAHQAGAGgBAFQgBAJgIAUQgyBSjqBAIgPAEQhlAjjcA9Qh8AghuAVQg/AIgkABQhqgBhXgTg");
	this.shape_660.setTransform(613.8,847.4);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#6699CC").s().p("AojIJQgrgBggggQgQgQgMgWQgLgUgHgYIgDgKQgGgZAAgLIAAgBQAHhjAmhcQAlhpA2gvQAOgZAPgXQAOgXAOgTQB1itB4hiQA8g5A+glQBcg/BWgJQA1gTBBgHQAugEAmAEQAagBAeAIQAvAMAqAaIAOAKQAiAYAVAcQALANAMAVIAYAWQArArAfBMQAfBLALAjIACAIIACAKIAXA7QAOAmAEAaQgEARgGAQIgFANIgJAVQABAPgBAUIAGAwQADAKAIAIQAIAGAAAGQgBAJgHAWQgwBbj6BJIgQAEQhwAojlA9QiCAih4AWQhCAIgoAAQhwAAhegTg");
	this.shape_661.setTransform(613.2,851.3);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#6699CC").s().p("ApAIxQgvAAgighQgRgQgNgYQgMgVgIgZIgDgLQgHgaAAgMIAAgBQAIhpAnhiQAnhxA3gyQAOgbAPgYQAOgZAPgVQB6i8B7hpQA/g/A/gpQBihFBbgJQA3gWBFgHQAxgFApAEQAagBAhAJQAyANAsAcIAOALQAkAaAWAeQALAPANAWQANALALAMQAtAuAiBSQAhBQAMAkIABAIIADALIAaA9QAQApAFAcQgEASgFARIgFAOIgIAWQABARAAAVQAFAhAGATQAEALAKAIQAKAHAAAGQAAALgGAXQguBkkLBRIgRAFQh6AsjvA/QiIAjiBAXQhFAIgsAAQh2AAhlgSg");
	this.shape_662.setTransform(613.2,855.1);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#6699CC").s().p("ApdJYQgyACglgjQgSgRgOgYQgNgXgJgaIgDgLQgIgcAAgMIAAgBQAKhwAnhnQAoh6A5g0QAOgeAPgYQAPgcAPgWQB+jKB/hyQBBhEBCgtQBmhLBhgKQA6gXBIgJQA0gFArAEQAcgBAjAJQA0AOAuAeIAQAMQAlAcAWAhQAMAPANAYIAaAZQAuAwAkBYIAwB6IACAIIADAMIAcBBQATArAHAdQgEATgFASIgFAPIgIAYQACASABAWQAHAlAIATQAGAMAMAJQALAHAAAHQACALgGAaQgrBtkcBZIgSAFQiEAxj4BBQiQAkiJAYQhIAIgwAAQh8AAhsgSg");
	this.shape_663.setTransform(613.1,859);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#6699CC").s().p("Ap7KAQg1ADgngkQgTgRgQgaQgOgYgJgbIgEgMQgIgdAAgOIAAAAQAKh2AohtQAqiCA6g2QAPggAPgaQAPgeAPgXQCEjaCBh6QBEhJBFgwQBrhSBlgKQA8gaBNgJQA3gGAtAFQAdgCAlAKQA3APAwAgIARANQAnAeAXAjQALARAOAZQAOANANAOQAwAyAmBdIAzCBIACAIIADANIAgBDQAVAuAIAeQgDAVgGATIgEAQIgJAaQAEASACAYQAJAnAKAVQAHANAOAJQANAIABAIQACAMgFAcQgpB1ktBiIgSAFQiPA2kBBCQiWAliTAZQhLAHg0AAQiCAAhzgQg");
	this.shape_664.setTransform(613.1,862.9);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#6699CC").s().p("AqZKoQg4AEgqglQgUgSgRgbQgPgZgKgcIgDgNQgJgfAAgOIAAAAQALh8AohzQAriLA8g3QAPgjAQgcQAPgfAQgYQCIjpCFiDQBGhOBHg0QBwhYBqgKQA/gcBRgKQA6gHAvAFQAfgCAmALQA6AQAyAiIASAOQApAgAXAmQAMARAOAbQAPANANAPQAyA1AnBjIA3CHIACAIIADANIAjBHQAXAwALAgQgEAWgFAUIgFAQIgIAcQAFAUADAZQAKAqANAWQAIANAQAKQAOAJACAIQAEANgGAeQgmB/k9BqIgTAGQiaA5kKBEQidAnicAaQhNAGg5AAQiIAAh6gPg");
	this.shape_665.setTransform(613.1,866.7);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#6699CC").s().p("Aq3LPQg7AGgsgmQgVgTgSgcQgQgagLgeIgEgNQgJggAAgPIAAgBQALiCAph4QAtiTA9g6QAQglAQgeQAQggAPgaQCNj4CIiLQBJhTBJg4QB1heBwgLQBBgeBVgLQA9gHAxAFQAggCApAMQA8AQA0AlIATAPQAqAiAZAnQALATAPAdQAQAOAOAPQAzA4ApBoQApBnARAmIACAJIAEAOIAmBKQAZAxAMAiQgEAXgFAVIgEASIgIAdQAFAVAEAbQANAsAPAYQAJAOASAKQAQAJADAJQAEAOgFAgQgkCHlOBzIgUAGQikA+kTBFQikAoilAbQhQAHg9AAQiOAAiBgPg");
	this.shape_666.setTransform(613.1,870.6);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#6699CC").s().p("ArUL3Qg+AHgvgoQgXgTgTgdQgRgbgLgfIgFgOQgJgiAAgPIAAgBQAMiIAqh+QAuicA/g8QAPgmAQggQARgjAQgbQCSkGCKiTQBMhZBMg7QB5hkB1gMQBEggBZgMQBAgIAzAGQAhgDArANQA+ARA4AnIATAQQAsAjAZArQAMATAQAfQAPAOAPARQA1A6ArBuQArBsASAnIADAJIADAOIApBNQAcA0ANAjQgDAagGAVIgDASIgJAfQAHAWAFAdQAPAvARAZQAKAOAUAMQASAJADAJQAGAPgFAjQgiCQlfB7IgUAGQivBDkdBHQiqApiuAcQhTAGhAAAQiVAAiHgOg");
	this.shape_667.setTransform(613.1,874.5);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#6699CC").s().p("AryMfQhBAIgygpQgYgUgUgfQgRgbgMghIgFgPQgLgiAAgRIAAgBQAOiNAqiEQAwikBAg/QAQgoAQgiQARgkARgdQCWkVCNibQBPhfBOg+QB/hqB5gNQBGgiBegMQBCgJA2AGQAjgDAsANQBBASA6AqIAUAQQAuAmAZAsQANAVAQAhQAQAPAPARQA2A9AuBzQAtByATAnIADAKIAEAPIArBQQAeA2APAkQgDAbgFAWIgEAUIgIAgQAIAXAFAeQARAyAUAaQAMAQAWAMQATAJAEAKQAGAQgEAlQgfCYlwCEIgVAHQi5BHknBIQiwAqi3AdQhWAGhFAAQiaAAiPgMg");
	this.shape_668.setTransform(613.1,878.4);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#6699CC").s().p("AsQNGQhEAKg0gqQgZgVgVggQgTgcgNgjIgFgPQgLgkAAgRIAAgBQAOiUAriJQAxitBChAQAQgrARgjQARgmARgeQCbkkCRikQBQhkBRhCQCEhwB+gNQBJgkBigOQBFgJA4AGQAkgDAuAOQBEATA8AsIAVARQAwAoAaAvQAMAVARAjQARAPAPASQA4BAAvB4QAvB4AVAoIADAKIAEAPIAvBUQAgA4ARAlQgEAcgFAYIgDAUIgIAiQAIAYAHAgQATA1AVAbQAOAQAYANQAUAKAFAKQAIARgFAnQgcCimBCLIgVAIQjEBMkwBJQi3AsjAAeQhZAFhJAAQigAAiWgMg");
	this.shape_669.setTransform(613.1,882.2);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#6699CC").s().p("AsuNuQhIALg2grQgagVgXghQgTgegOgkIgFgPQgLgmAAgSIAAgBQAOiaAsiPQAzi1BDhCQAQgtARglQASgoARgfQCgkzCUitQBThpBThFQCJh3CCgOQBMgmBmgOQBJgKA6AHQAlgDAwAOQBGAUA+AuIAXASQAxAqAbAxQAMAXARAkQASAQAQATQA6BCAxB+QAxB9AWAoIACALIAFAQIAyBWQAiA7ASAnQgDAdgFAZIgDAVIgIAkQAKAZAHAhQAVA4AYAcQAOARAaANQAXALAFALQAJARgEAqQgbCqmRCUIgWAIQjPBQk4BLQi+AtjKAfQhbAFhNAAQinAAicgLg");
	this.shape_670.setTransform(613.2,886.1);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#6699CC").s().p("AtLOWQhLAMg5gtQgbgWgYgiQgUgfgOglIgGgQQgMgnAAgTIAAAAQAQigAsiVQA0i+BFhEQAQgvARgnQATgqARggQCllCCWi1QBWhuBWhJQCNh9CIgOQBPgoBpgPQBMgLA8AHQAngEAyAPQBJAVBAAwIAXATQAzAsAbA0QANAXASAmQASARARAUQA7BEAzCEQAzCDAXApIADAKIAFARIA0BaQAlA9AUAoQgDAegFAaIgDAWIgIAmQALAaAIAjQAXA6AaAeQAQARAcAOQAYALAGAMQAJASgDAsQgYCzmiCcIgXAJQjZBUlCBNQjFAujSAgQheAEhRAAQitAAijgJg");
	this.shape_671.setTransform(613.1,890);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#6699CC").s().p("AtqO9QhNAOg8guQgcgWgZgkQgVgggPgmIgGgRQgNgoAAgUIAAAAQARinAsiaQA2jGBGhHQARgxASgoQASgsASgiQCqlQCZi9QBZh0BYhNQCSiDCNgPQBRgqBugQQBOgLA/AHQAngDA1APQBLAWBCAyIAZAUQA0AuAcA2QANAZASAnQATASARAUQA9BHA1CJQA1CJAZApIADALIAEASIA4BcQAnBAAWApQgDAggFAbIgDAXIgIAnQAMAbAKAlQAYA9AdAfQARASAeAOQAZAMAHAMQAKATgDAuQgVC8mzClIgYAJQjjBZlLBOQjMAvjbAhQhhAEhWAAQiyAAirgJg");
	this.shape_672.setTransform(613.2,893.8);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#6699CC").s().p("AuIPlQhQAPg+gvQgegXgaglQgWghgPgnIgHgSQgNgpAAgVIAAAAQARitAuigQA3jOBHhJQASgzASgqQASgvATgiQCulgCcjFQBch5BahQQCXiJCSgQQBUgsBygRQBRgLBBAHQApgEA2AQQBOAXBFA0IAZAVQA2AwAdA4QANAaASApQAUATASAVQA+BKA3COQA3COAaAqIADAMIAFASIA7BfQApBCAXArQgDAhgEAcIgEAYIgHAoQANAdAKAmQAbA/AfAhQASATAgAPQAbAMAHANQAMATgDAxQgTDEnDCuIgZAJQjuBdlUBQQjSAwjlAjQhkADhaAAQi4AAiygIg");
	this.shape_673.setTransform(613.2,897.7);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#6699CC").s().p("AumQNQhUAQhAgwQgfgYgbgmQgXgigQgpIgHgSQgOgqAAgWQASizAuimQA5jWBJhLQASg1ASgsQATgxATgkQCzluCfjOQBeh+BdhTQCciQCWgQQBYguB1gSQBUgMBDAHQArgEA4ARQBQAYBHA2IAaAWQA4AyAeA7IAgBFQAUATASAXQBABMA5CTQA5CVAbAqIADAMIAGASIA+BjQArBEAZAsQgDAigEAdIgEAaIgHAqQAOAdALAoQAdBCAhAiQAUAUAiAPQAcANAIANQANAVgDAyQgQDNnUC2IgaAKQj4BileBRQjZAxjtAkQhnADheAAQi+AAi5gHg");
	this.shape_674.setTransform(613.2,901.5);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#6699CC").s().p("AvEQ1QhWARhDgyQghgYgbgnQgZgjgQgqIgHgTQgPgsAAgXQATi4AvisQA6jfBKhNQATg3ASguQATgyATgmQC4l9CijWQBhiDBghXQCgiWCbgRQBagwB6gSQBXgNBFAHQAsgEA6ASQBTAYBJA5IAbAXQA6A0AeA8QANAcAUAtQAUAUAUAXQBBBOA7CZQA7CaAcArIAEAMIAFAUIBBBlQAtBGAbAuQgCAkgFAeIgDAaIgIAsQAPAeANAqQAeBEAkAjQAVAVAkAQQAeANAJAOQANAVgCA1QgODWnlC+IgaALQkDBmlnBSQjfAzj3AlQhqAChiAAQjEAAjAgFg");
	this.shape_675.setTransform(613.2,905.4);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#6699CC").s().p("AyBQ8QgigZgcgoQgagkgRgsIgHgTQgQgtAAgYQAUi/AvixQA8jnBMhQQATg5ASgvQAUg0ATgnQC9mMCljeQBjiJBihbQCmicCggRQBdgyB9gUQBagNBHAIQAugFA8ATQBWAZBLA7IAcAYQA7A2AfA/IAhBLQAWAUATAYQBDBRA9CfQA9CfAdAsIAEAMIAGAUIBEBpQAvBIAdAwQgDAkgEAfIgDAcIgHAtQAPAgAOArQAgBHAmAkQAXAWAlAQQAgAOAKAOQAOAXgCA2QgMDfn1DHIgbALQkNBrlwBUQjnAzkAAmQhsAChmAAQjLAAjGgFQgYAFgXAAQg9AAgzglg");
	this.shape_676.setTransform(613.3,909.3);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#6699CC").s().p("AylRjQgjgZgegqQgaglgSgtIgHgUQgQgvAAgYIAAAAQAUjFAwi3QA+jvBNhSQATg7ASgxQAVg2ATgpQDCmaCojnQBmiOBkheQCriiCkgTQBgg0CCgUQBdgOBJAIQAvgFA+AUQBYAaBNA9IAdAZQA+A3AfBCQAOAeAUAwQAWAVAUAZQBFBTA+CkQBACmAeArIAEANIAGAVIBHBsQAxBKAeAxQgCAmgEAgIgDAcIgHAvQARAhAOAtQAiBKApAlQAXAXAoARQAiAOAKAPQAPAXgBA5QgKDooGDPIgcALQkYBvl5BWQjtA1kJAmQhvAChqAAQjRAAjNgEQgaAGgYAAQg/AAg0gmg");
	this.shape_677.setTransform(613.3,913.2);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#6699CC").s().p("AzJSKQgjgagfgrQgbgmgTguIgIgVQgRgwAAgZIAAAAQAWjLAwi9QA/j4BPhUQATg9ATgyQAVg4AUgqQDGmpCrjvQBpiUBnhiQCvioCqgTQBig2CGgVQBfgPBMAJQAwgFBAATQBbAcBPA/QAQAMAOANQA/A6AgBEQAOAfAVAyQAWAWAVAZQBGBWBBCqQBBCrAgAsIAEANIAGAWIBKBvIBUB+QgCAogEAhIgDAdIgIAxQASAhAQAvQAkBNArAmQAZAXApASQAjAPALAPQAQAYgBA7QgHDxoWDXIgdAMQkiB0mDBXQj0A2kSAoIjgABQjXAAjUgDQgbAGgaAAQhAAAg2gmg");
	this.shape_678.setTransform(613.3,917.2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#6699CC").s().p("AzsSxQgmgbgfgsQgdgngTgwIgIgVQgRgxAAgaQAWjRAxjDQBBkABQhWQATg/ATg0QAVg6AVgrQDLm5Cuj3QBriZBqhlQC0iuCugUQBlg4CKgWQBjgPBNAIQAygFBCAUQBdAdBSBBIAfAaQBBA8AgBHQAOAfAVA0QAXAWAWAbQBIBZBCCuQBECxAgAtIAFAOIAGAVIBNBzQA2BPAhAzQgBAogEAjIgDAeQgDAZgFAZQATAjARAwQAmBPAtAoQAaAYAsATQAlAPALAPQARAZAAA+QgFD5onDgIgeAMQktB4mMBZQj6A3kbApIjnABQjdAAjbgCQgdAHgbAAQhBAAg3gng");
	this.shape_679.setTransform(613.4,921.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#6699CC").s().p("A0QTYQgmgcghgtQgdgogUgxIgJgWQgSgyAAgbQAYjXAxjIQBCkJBShYQAUhCATg1QAWg8AUgtQDQnHCxkAQBuieBshpQC5i0CzgUQBog6COgXQBlgQBQAJQAzgGBEAVQBgAdBUBEIAgAbQBCA+AhBJQAPAgAVA2QAYAXAWAbQBJBcBFC0QBFC2AiAuIAFAOIAGAWIBQB1IBcCGQgCAqgEAkIgDAfIgHAzQAUAkASAyQAoBSAvApQAcAZAtATQAmAQAMAQQATAagBA/QgCECo4DpIgeAMQk3B9mWBaQkBA4kkAqIjuABInFgBQgfAHgcAAQhDAAg4gng");
	this.shape_680.setTransform(613.4,925.1);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#6699CC").s().p("A19S1QgkgzgYg/QgSg0AAgcQAYjdAyjOQBEkRBThbQAqiOAohYQDVnWC0kIQEym+EjgiQBqg8CSgXQBpgRBSAJQA0gFBGAWQBjAeBWBFQBeBMAoBcIAlBYQAZAYAWAcQBLBeBHC6QBHC8AjAuIAMAlIBSB5QA7BTAkA2QgCA+gFAyIgHA1QAUAlATAzQAqBVAxArQAeAZAvAUQAoAQANARQATAaAABCQAAELpJDxQoXDcsdByIrHAAQggAIgeAAQh0AAhThyg");
	this.shape_681.setTransform(613.4,929);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#6699CC").s().p("A1xS2QglgxgYg9QgTgxgCgaIAAgCQAFgpAGgpQAYiyApimQAQhBARg2QA1isBAhIQAUhCATg3QAWg/AWguQBGiaBBiDQCGkPB4iyQBZiFBYhhQBPhYBNg4QBjhKBigbQAdgHAcgDQAugbA3gTQBDgYBUgPIAhgEQBUgMBEAHQAPgCAQAAQApAAAxAPIAXAGIAYAKQA8AXA3AoIAXARQBTBCArBQIAKAUQAPAhAWA3QAYAYAXAcQAOASAOAVQAZAmAZAyQAQAeAQAkQASAnARAuQA6CXAiA9QAIAOAHAIIALAmQAnA7ArA9IAqA8IAXAiIAeAsQgCA2gDArIgBANIgGA1QAVAmATAyIAIAQQAfA8AiAlIAPAPQANAMAQAKQAUANAaALQAbAMAPAMIAKAKQATAbABBBQAAAdgGAeQgKAsgaAsQgQAbgXAbQgeAjgpAkQiNB6kUBzQilBFjAA7QmoCCokBPInPACIj2AAQghAIgeAAQhzAAhUhvg");
	this.shape_682.setTransform(613.6,929.2);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#6699CC").s().p("A1lS3QgmgvgZg7QgUgvgDgaIAAgCIALhRQAZi0ApikQAQhBARg1QA0ipBBhLQAThCAUg2QAXg/AVgwQBGiZBAiCQCGkPB1iyQBYiGBWhhQBOhbBKg3QBhhLBigcQAcgHAcgEQAugbA3gUQBBgXBWgQIAhgEQBUgMBDAFQAPgCAPAAQAqgBAwANIAWAGIAYAJQA8AWA3AoIAXARQBTBAAsBQIAKATQAQAhAWA2QAZAYAWAcQAOASAOAWQAZAmAZAxQAQAfAQAjQASAnASAuQA5CUAjBAIAOAWIAMAlQAnA8AqA9IApA8IAXAhIAdAsQAAA1gDAtIAAAMIgFA1QAVAlATAyIAIAQQAeA8AhAlIAPAPQAMAMAPAKQAUANAaAMQAbAMAOANIAJAKQAUAbACBAQABAegGAcQgJAtgXArQgOAagWAbQgdAjgnAkQiJB8kTB1QikBFjAA8QmnCDojBQInOAEIj2AAQggAIgeAAQhzAAhVhsg");
	this.shape_683.setTransform(613.9,929.4);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#6699CC").s().p("A1ZS6Qgngugag6QgUgtgEgZIgBgCIAMhRQAZi0AoiiQARhCAQg0QA0imBBhPQAUhAAUg3QAXg/AVgvQBGiaBAiBQCEkOB0i0QBWiGBUhhQBMheBJg2QBfhMBhgdQAbgIAcgFQAvgaA2gUQA/gWBYgRIAggGQBVgMBCAEQAPgCAPAAQApgCAwALIAVAFIAYAJQA8AVA4AnIAXARQBTA/AtBPIAKATQARAhAWA1QAYAZAWAbIAcAoQAZAmAYAxQARAfAQAjQASAnASAtQA5CTAkBBQAHANAHAJIALAlQAnA8ApA9IApA8IAWAiIAeArQABA1gCAtIAAALIgEA1QAWAlATAxIAIAQQAcA9AhAlIANAPQAMAMAPALQATANAZANQAbAMAOAMIAJALQAUAcACA+QACAegFAcQgHAsgWAqQgMAagVAbQgaAignAmQiEB9kSB2QijBGjBA9QmlCEoiBQInNAHIj1AAQggAHgeAAQh0AAhVhng");
	this.shape_684.setTransform(614.1,929.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#6699CC").s().p("A1NS8Qgogsgbg4QgVgrgFgYIAAgCIgBAAIAMhRQAbi1AnigQARhCAQg0QAzijBChSQAUhAAUg3QAXg+AWgwQBGiaA+iAQCDkOByi0QBViHBShiQBLhgBGg0QBdhOBggeQAcgJAcgFQAugaA2gUQA+gWBZgSIAggGQBUgNBDADQAOgCAPgBQApgCAuAJIAWAEIAYAJQA7AUA4AnIAXAQQBUA+AuBOIAKATQARAiAXA0QAYAYAVAcQAOASAOAVQAYAmAZAyQARAeAQAjQASAnATAtQA5CQAjBDQAIAOAGAJIAMAkQAmA9ApA8IApA8IAVAiIAeAsQACA0gBAsIAAANQgBAZgCAaQAWAlATAxIAIAQQAcA8AfAmIANAQQALAMAOALQAUANAYANQAaANANAMIAKALQAUAcADA+QACAdgEAcQgGArgTApQgKAbgUAaQgZAiglAmQiAB/kSB4QiiBHjAA9QmkCEogBSInNAJIj1AAQggAHgeAAQhzAAhWhkg");
	this.shape_685.setTransform(614.4,929.6);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#6699CC").s().p("A1CS+Qgogqgcg2QgWgqgGgXIAAgCIgBAAIAMhRQAci1AnifQARhCAQgzQAyifBDhWQAUhAAUg3QAXg+AWgvQBGibA+h/QCBkOBwi0QBUiIBQhiQBKhjBEgzQBbhOBfghQAbgIAcgGQAugaA3gUQA7gVBbgUIAggGQBUgOBCACQAOgCAPgBQApgEAtAIIAVADIAYAJQA7ATA4AmIAYAQQBTA9AvBOIALATQARAhAXAzQAYAYAWAcQAOASANAWQAYAlAYAyQARAeARAjQATAmASAtQA5CPAkBFIAOAWIALAlQAmA9ApA8IAoA7IAVAiIAeAsIADBgIAAAMQAAAZgCAaQAXAmATAwIAIAPQAaA9AeAmIAMAQQALAMAOALQATAOAYANQAZANANANIAKALQAUAdADA8QADAdgDAcQgFAqgQApQgJAagSAZQgYAigjAnQh8CCkRB5QihBHjAA+QmjCFofBTQjkAGjoAFIj0AAQggAHgeAAQhzAAhYhhg");
	this.shape_686.setTransform(614.6,929.7);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#6699CC").s().p("A02TBQgpgpgegzQgWgpgIgWIAAgCIAAAAIAMhRQAci2AoidQAQhCARgzQAxicBDhYQAUhAAVg3QAXg+AVgwQBHibA9h+QCAkNBui1QBSiIBOhjQBJhlBCgyQBZhQBeghQAbgJAcgGQAtgbA3gUQA5gUBdgWIAhgFQBUgPBAABQAOgDAPgBQAqgFArAHIAUACIAYAIQA7ATA5AlIAYAQQBTA8AwBNIALASQASAhAXAzQAYAYAVAcQAOASAOAWQAXAlAZAyQARAeARAiQASAmATAuQA5CLAkBIQAHANAHAJIALAlQAmA+AoA7IAoA7IAVAiIAdAsQAEAzABAsIAAAMIAAAzQAWAlAUAwIAIAQQAZA8AcAnIANAPQAKANANALQATAOAXAOQAZANANAOIAJAKQAUAeAFA7QADAdgCAbQgEAqgOAoQgHAZgRAaQgWAhgiAoQh3CDkRB8QifBHjBA+QmhCHofBTQjjAIjnAGIj0AAQggAGgeAAQhzAAhYhdg");
	this.shape_687.setTransform(614.9,929.7);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#6699CC").s().p("A0qTEQgqgogfgyQgXgngJgVIAAgBIAAAAIANhRQAdi3AmibQARhDARgyQAwiZBDhcQAVg+AVg4QAXg9AWgwQBHicA7h9QB/kNBsi1QBRiJBMhjQBIhoA/gxQBXhRBegjQAagJAcgGQAugbA2gUQA3gUBfgWIAggHQBUgPBAAAIAdgEQApgGArAFIAUABIAYAIQA6ASA6AkIAXAQQBUA7AxBMIALASQATAhAXAyQAYAZAVAbIAbAoQAXAlAYAzQASAdARAiQATAmATAtQA4CKAlBJQAHANAGAJIAMAlQAlA+AnA7QAWAhASAaIAUAiIAeAsIAHBeIAAANIABAyQAXAmATAuIAIAQQAZA9AbAnIALAQQAKAMAMAMQATAOAXAOQAYAOANANQAFAGAEAFQAUAeAFA6QAEAdgBAbQgCApgMAnQgFAZgRAZQgUAhghAqQhyCFkQB9QifBHjAA/QmgCIoeBUQjiAJjnAHIj0AAQgfAGgfAAQhyAAhZhZg");
	this.shape_688.setTransform(615.2,929.8);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#6699CC").s().p("A0fTGQgqglghgwQgXgmgKgUIAAgBIgBAAIAOhRQAdi4AniZQARhDAQgxQAwiWBEhfQAUg/AWg4QAXg8AVgwQBIicA6h8QB+kNBqi2QBQiJBKhkQBGhrA9gvQBVhSBdgkQAagKAcgHQAtgaA3gVQA1gTBhgYIAggGQBUgQA/gBQAOgDAOgCQAqgHApAEIATAAIAYAIQA6AQA7AkIAYAQQBTA5AyBMIALASQAUAhAXAxQAYAZAUAbQAOATANAVQAXAlAYAzQASAdARAhQAUAmATAtQA4CIAlBLIANAWIAMAlQAlA/AmA6QAWAhASAaIAUAiIAeAsIAIBeIABAMIACAxQAXAmATAvIAIAPQAYA9AZAoIALAPQAJANAMAMQATAPAWAOQAXAOANAOIAJALQAUAeAGA5QAFAdAAAaQgBApgKAmQgDAZgPAZQgTAgggArQhtCGkQB/QidBIjBBAQmeCIodBVQjiAKjnAIIjzAAQgfAGgeAAQhzAAhahWg");
	this.shape_689.setTransform(615.5,929.9);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#6699CC").s().p("A0UTKQgrglghgtQgYgkgLgUIgBgBIAAAAIAOhRQAei4AmiYQARhDAQgwQAwiTBEhiQAVg+AVg4QAXg9AWgwQBHicA6h7QB9kNBoi3QBOiJBIhlQBFhtA7guQBThTBcgmQAagKAcgHQAtgaA3gVQAygSBjgaIAggGQBUgRA+gCQAOgEAPgBQApgIApACIASgBIAYAHQA6AQA7AkIAYAPQBTA4AzBLIALASQAVAhAXAxQAXAYAVAcQAOASANAVQAWAlAYAzQASAdASAhQATAmAUAtQA3CFAmBNIANAXIAMAkQAlBAAlA5IAnA7IAUAiIAeAsIAKBdIABAMIADAxQAXAnAUAtIAIAQQAWA8AZApIAKAQQAJANALAMQASAOAWAQQAXANANAPIAJAKQAUAfAHA5QAFAcAAAaQAAAogHAlQgBAZgOAYQgRAhgfArQhoCJkQCAQicBIjBBBQmdCJocBVQjgAMjnAJIjzAAQggAGgeAAQhyAAhbhSg");
	this.shape_690.setTransform(615.8,929.9);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#6699CC").s().p("A0ITOQgsgjgjgsIglg1IAAgBIgBAAIAPhRQAfi5AmiVQARhEAQgwQAuiPBFhmQAVg9AWg5QAXg8AWgwQBHidA5h6QB7kMBni3QBNiKBFhlQBFhwA4guQBRhTBbgnQAagLAcgIQAsgaA3gVQAxgRBlgbIAggHQBTgSA+gDQAOgDAOgCQAqgJAnABIASgCIAYAHQA5APA8AjIAYAOQBTA4A0BKIAMASQAVAhAXAwQAXAYAVAcQANASANAVQAWAlAYAzQATAdARAhQAUAlAUAtQA3CDAmBPIANAXIAMAkQAlBAAlA5QAVAiARAYIAUAjIAdAsIAMBcIACAMIAEAyQAXAlAUAtIAIAQQAVA8AXApIAKAQQAJAOAKAMQASAPAWAPQAWAOAMAPIAJALQAUAfAIA4QAGAcABAZQABAogFAkQABAYgNAYQgQAhgcAsQhlCKkPCCQibBJjBBCQmbCJobBXQjgANjnAKIjyAAQggAFgeAAQhyAAhbhOg");
	this.shape_691.setTransform(616.1,929.8);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#6699CC").s().p("Az+TRQgtghgjgpIgngzIgBgBIAAAAIAPhRQAfi5AmiUQARhEAQgvQAuiNBFhpQAVg9AWg4QAYg8AVgwICAkWQB6kMBli4QBLiLBEhlQBDhzA2gsQBPhVBagoQAagLAcgIQAsgaA3gWQAvgQBmgdIAggHQBUgSA9gEQANgEAOgCQAqgKAmgBIARgDIAYAHQA6AOA8AjIAYAOQBTA2A1BKIAMASQAWAgAXAvQAXAZAVAcQANASANAVQAVAlAYAzQATAcASAhQAUAlAUAtQA3CBAmBRIANAXIAMAkQAkBAAlA5QAVAiARAYIATAjIAeAsIAOBbIABAMIAGAyQAXAlAUAtIAIAPQAUA8AWAqIAJAQQAIANAKANQASAPAVAQQAVAOAMAQIAJAKQAVAgAIA2QAGAcACAaQADAmgCAkQACAYgMAYQgOAggbAtQhgCMkPCEQiZBJjCBCQmaCLoZBXQjgAOjmALIjyAAQgfAGgeAAQhyAAhdhMg");
	this.shape_692.setTransform(616.5,929.8);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#6699CC").s().p("Az0TVQgtgfglgoIgpgwIAAgBIgBAAIAPhRQAhi6AliSQARhEAQgvQAtiJBGhsQAVg9AXg5QAXg7AWgwIB/kWQB4kMBji4QBKiLBChmQBCh1A0grQBNhWBZgqQAZgLAcgJQAsgaA3gVQAtgQBogeIAggHQBTgTA9gGIAbgGQAqgKAlgDIARgEIAYAHQA5ANA8AiIAYAOQBUA1A2BJIAMARQAWAhAYAuQAXAZAUAbQANATANAVQAVAkAYA0QATAcASAhQAUAlAUAsQA3B/AnBTIAMAXIAMAjQAlBCAjA4QAVAiARAYIATAjIAeAsIAPBaIACAMIAHAxQAYAmATAsIAJAPQATA9AUApIAJARQAHANAKANQARAQAVAQQAUAPAMAPIAJALQAUAgAJA1QAIAcACAZQAEAmAAAjQAEAYgKAXQgNAggaAuQhbCOkOCFQiZBKjBBDQmZCLoYBYQjfAQjmAMIjyAAQgfAFgeAAQhyAAhdhIg");
	this.shape_693.setTransform(616.9,929.7);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#6699CC").s().p("AzrTZQgugegmgmQgbgdgQgRIAAAAIgBAAIAPhRQAii7AliQQARhEAQguQAsiGBGhwQAWg8AXg5QAXg7AWgwIB+kVQB3kMBhi5QBJiMBAhmQBAh3AygqQBLhXBZgsQAYgLAdgJQArgaA3gWQArgPBrgfIAfgIQBTgUA8gGIAbgHQAqgLAkgEIAQgFIAYAGQA5AMA8AhIAZAOQBTA0A3BJIANARQAWAgAYAuQAXAZAUAbQANATANAVQAVAkAXA0QAUAcASAgQAUAlAVAsQA2B8AnBWIANAXIAMAjQAkBCAjA4QAUAiARAXIATAkIAdArIASBaIACAMIAIAxQAYAmAUArIAIAPQASA9ATAqIAIAQQAHAOAJANIAlAhQAUAPAMAPIAJALQAUAhAKA0QAIAcADAYQAGAmACAiQAGAXgKAXQgKAggZAvQhXCQkNCHQiYBKjBBDQmYCNoXBYQjeARjmANIjxAAQggAFgdAAQhyAAhehEg");
	this.shape_694.setTransform(617.5,929.7);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#6699CC").s().p("AziTdQgvgdgngjQgcgcgRgQIAAgBIgBAAIAQhQQAii7AliPQARhEAQguQAriDBHhyQAWg8AXg5QAXg7AWgwIB+kVQB2kLBfi6QBHiMA+hnQA/h6AwgpQBJhYBXgsQAZgMAcgKQArgaA3gWQApgOBtghIAfgHQBTgVA7gHQANgFAOgCQAqgNAigGIAQgFIAYAGQA5ALA9AgIAYAOQBUAzA4BIIAMARQAYAgAYAtQAXAZATAbQANATANAVQAUAkAYAzQATAcATAhQAVAkAUAsQA2B6AoBYIAMAXIAMAjQAkBDAiA3QAVAiARAXIASAjIAdAsIAUBaIACALIAJAxQAYAlAUArIAJAPQAQA9ASAqIAIARQAGAOAJANIAkAiQAUAPALAQIAJALQAUAhALAzQAIAbAFAZQAGAkAFAiQAHAXgIAWQgJAggYAwQhSCRkNCJQiWBLjBBEQmXCNoWBZQjdATjmAOIjxAAQgfAEgdAAQhyAAhfhAg");
	this.shape_695.setTransform(618,929.6);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#6699CC").s().p("AzaThQgwgbgogiQgcgagSgPIgBgBIgBAAIARhQQAji8AkiNQAShEAPgtQAriABHh2QAWg7AXg6QAYg6AWgwIB9kUQB0kLBdi6QBGiNA8hoQA+h8AugoQBHhZBWguQAYgMAdgLQArgZA3gXQAmgNBwgiIAegIQBTgVA6gJIAbgHQAqgOAigHIAPgHIAYAGQA4AKA+AgIAYAOQBUAxA5BIIANAQQAYAgAYAtQAXAZATAbQANATAMAUQAUAlAYAzQAUAcASAgQAVAkAVAsIBeDRIAMAYIAMAjQAkBDAhA2QAVAjAQAXIASAjIAeAsIAVBZIADALIAKAwQAYAnAUApIAJAPQAPA9ARArIAHARQAGAOAIANIAjAiQATAQAMAQIAIALQAVAiALAyQAJAbAFAYIAPBFQAJAWgHAXQgHAfgXAxQhNCTkMCKQiWBMjBBEQmVCPoWBaQjcATjmAPIjwAAQgeAFgeAAQhyAAhgg9g");
	this.shape_696.setTransform(618.6,929.6);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#6699CC").s().p("AzSTlQgwgagpgfQgdgZgUgOIAAgBIgBAAIARhQQAji9AliLQAShEAPgtQAqh8BIh6QAVg6AYg6QAYg6AVgwQBJigA0h0QBzkKBbi7QBFiOA6hoQA9h/ArgmQBFhaBWgwQAXgMAdgLQArgaA3gWQAkgNBxgjIAfgJQBTgVA5gKIAbgIQAqgPAggIIAPgIIAYAGQA4AJA+AfIAYANQBUAxA6BHIANAQQAZAgAYAsQAXAZATAbIAZAnQAUAkAXA0QAUAcATAgQAVAjAVAsIBeDRIAMAYIANAjQAjBDAhA2QAUAjAQAXIARAjIAeAsIAXBYIADALQAHAZAEAXQAZAnAUApIAJAOQAOA9AQAsIAGARQAGAOAHANIAjAjQASAQALARIAIALQAVAiAMAxQAKAbAGAXIASBEQAMAWgGAWQgGAfgVAyQhJCVkMCMQiUBMjCBFQmUCPoUBbQjbAVjmAQIjwAAQgfAEgdAAQhyAAhhg5g");
	this.shape_697.setTransform(619.2,929.5);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#6699CC").s().p("AzJToQgxgXgrgeQgdgYgVgMIAAgBIgBAAIARhQQAki9AkiKQAThFAPgsQAph5BIh8QAWg7AYg5QAYg6AVgwQBKihAyhzQBykKBai7QBDiOA4hpQA7iBApgmQBDhbBVgxQAYgNAcgLQArgaA3gWQAigMBzglIAfgIQBSgXA5gLIAagIQAqgQAggKIAOgIIAYAFQA3AJA/AeIAZANQBTAwA8BFIANARQAZAgAZArQAWAYATAcQANASALAVQAUAkAYA0QAUAbATAgQAWAjAVAsQA1B0ApBdIAMAXIAMAjQAjBFAgA1QAUAjAQAWIARAkIAeAsIAZBXIADALIAMAvQAZAoAVAoIAIAOQAOA9AOAsIAGARIALAcIAiAkQASAQALARIAIALQAVAjANAwQAKAaAHAYQAKAiAMAgQANAVgFAWQgEAegUA0QhECXkMCNQiTBMjBBGQmTCQoTBcQjaAWjmARIjvAAQgfAEgdAAQhyAAhig2g");
	this.shape_698.setTransform(619.8,929.5);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#6699CC").s().p("AzBTtQgxgWgsgcQgegWgWgMIgCAAIAShQQAli/AkiHQAShFAPgsQAoh1BJiAQAWg6AZg6IAthqQBKihAxhyQBxkJBXi8QBCiPA2hpQA6iEAngkQBBhcBUgzQAXgNAdgMQAqgaA4gWQAggMB0gmIAggIQBSgYA4gMIAagIIBIgdQAIgEAFgFIAYAFQA4AIA/AeIAZAMQBTAvA9BFIANAQQAaAgAZAqQAWAZATAbQANATALAVQATAjAYA1QAUAbAUAfQAVAjAWAsQA1BxApBgIAMAXIAMAjQAiBFAgA1QAUAjAQAVIARAkIAdAsIAbBWIAEAMIANAvQAZAnAVAnIAIAPQANA9AMAsIAGARIAKAdIAhAkQASAQAKASIAIALQAVAkAOAuIASAxQAMAjAOAeQAPAVgEAWQgCAegTA0QhACZkKCPQiSBNjCBGQmRCRoSBdQjaAXjmASIjuAAQgfADgeAAQhxAAhjgxg");
	this.shape_699.setTransform(620.4,929.4);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#6699CC").s().p("Ay5TwQgygVgtgZQgfgVgXgLIgBAAIgBAAIAThQQAli/AkiGQAShFAPgrQAnhyBKiEQAWg5AZg6IAthpQBKiiAxhxQBvkJBWi9QBAiPA0hpQA5iHAkgjQA/hdBUg0QAXgOAcgMQAqgaA4gWQAegLB2goIAggJQBRgXA4gNIAZgJIBIggIANgKIAYAFQA3AHBAAdIAYAMQBUAuA+BEIANAQQAbAgAYApQAXAZASAcQANASALAVQATAjAXA1QAVAbAUAfQAWAjAVArQA1BwAqBhIALAXIANAjQAiBFAfA1QAUAjAPAWIAQAjIAeAsIAdBWIAEALIAOAvQAaAnAUAnIAIAOQAMA9ALAtIAFASIAJAdIAhAlQARAQAKASIAIALQAVAkAOAtIAVAxQAMAiARAdQARAVgDAVQgBAegRA2Qg8CakKCRQiRBNjBBHQmQCSoRBdQjZAZjmATIjuAAQgeAEgdAAQhxAAhlgvg");
	this.shape_700.setTransform(621,929.4);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#6699CC").s().p("AywT0Qg0gTgugXQgfgTgYgKIgBgBIgBAAIAThPQAmjAAjiEQAThGAOgqQAnhvBKiHIAvhzIAuhpQBKiiAwhwQBukJBUi9QA/iQAyhqQA3iJAigiQA9heBTg2QAXgNAcgNQAqgaA3gXICVgzIAfgJQBSgYA2gOIAagKQAqgSAcgPQAHgGAFgGIAYAFQA3AGBBAdIAYALQBUAtA/BEIANAPQAcAgAYApQAXAZASAbQAMATALAUQATAkAXA0QAVAbAUAfQAWAjAWArQA1BtAqBjIALAYIANAiQAhBGAfA0QAUAkAPAVIAQAkIAdAsIAfBVIAEALIAQAuQAZAoAVAmIAIAOQALA9AKAtIAEASIAIAdIAgAmQAQARALASIAIALQAVAlAPAsIAVAwQAOAhATAdQATAVgCAUQABAegQA2Qg3CckKCTQiPBNjCBIQmPCToQBeQjYAajlAUIjuAAQgeADgdAAQhxAAhlgrg");
	this.shape_701.setTransform(621.6,929.3);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#6699CC").s().p("AypT4QgzgSgwgWQgggRgZgJIgCAAIAThQQAnjAAjiDQAThFAOgqQAmhsBLiKQAWg4Aag7IAthoQBKijAvhvQBtkJBSi9QA9iRAxhqQA2iMAgghQA7hfBSg3QAWgOAdgNQApgaA4gXICUgzIAfgKQBRgZA2gPIAagKQAqgUAbgQIAMgMIAYAEQA2AFBBAcIAZAMQBUArA/BDIAOAPQAcAgAZAoQAWAZASAbQANATAKAVQATAjAXA1QAVAaAUAfQAXAiAWArQA0BrAqBmIAMAXIAMAiQAiBHAdA0QAUAjAPAVIAQAkIAdAsIAhBUIAEALIARAuQAaAoAVAmIAIANQAJA+AJAtIAEASIAHAeIAfAmQAPARALASIAHAMQAVAlAQArIAXAwQAPAgAWAcQAUAVAAAUQACAdgPA3QgyCfkJCUQiPBOjBBIQmOCUoPBfQjXAbjlAVIjtAAQgeADgeAAQhxAAhmgng");
	this.shape_702.setTransform(622.3,929.3);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#6699CC").s().p("AyhT8Qg0gQgxgUQgggPgbgJIgCAAIAThPQAojBAjiBQAThGAOgpQAlhpBMiNQAWg4Aag7IAthoQBLijAuhuQBrkIBQi/QA8iQAvhrQA1iPAdgfQA5hhBRg4QAWgPAdgNQApgaA4gXICUg0IAfgKICGgqIAZgKQArgVAZgSQAHgHAFgGIAYAEQA2AEBBAbIAZAMQBUAqBBBCIAOAQQAcAfAZAoQAXAZASAbQAMATAKAUQASAjAXA1QAWAaAUAfQAXAiAWArQA0BpArBnIALAYIANAiQAhBHAdAzQATAkAPAUIAQAkIAdAsIAjBUIAEALIASAtQAaAoAVAmIAIANIAQBrIADASIAGAeIAfAoQAPARAKASIAHAMQAVAmARAqIAYAvQARAfAYAcQAWAUABAUQADAdgNA4QguCgkICWQiOBOjCBJQmMCVoOBfQjWAdjlAWIjtAAQgdACgdAAQhyAAhngjg");
	this.shape_703.setTransform(622.9,929.2);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#6699CC").s().p("AyZUAQg2gOgxgSQghgOgdgIIAAAAIgCAAIAUhPQApjCAih/QAThGAPgoQAkhmBMiRQAWg3Aag7IAuhoQBLijAthtQBqkJBOi+IBnj9QA0iRAbgfQA3hhBQg6QAWgPAdgOQApgZA3gYICUg1IAfgKICGgsIAZgKQAqgWAZgUQAGgGAEgIIAYAFQA3ACBBAbIAZALQBUApBCBCIAOAPQAdAgAaAmQAWAZARAcQAMASALAVQARAjAXA1QAWAaAVAeQAXAiAWArQA0BnArBpIALAYIANAiQAhBHAcAzQATAkAPAUIAPAkIAeAsIAkBTIAFALIATAtQAaAoAVAlIAIAOIAOBrIACASIAFAeIAeAoQAOASAKATIAHAMQAWAmARAoIAaAvQASAfAaAbQAYATACAUQAFAdgMA5QgpCikICXQiMBPjDBKQmKCVoNBhQjWAdjlAYIjsAAQgdACgeAAQhwAAhoggg");
	this.shape_704.setTransform(623.6,929.1);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#6699CC").s().p("AyRUEQg3gNgygQQgigMgdgHIgBAAIgCAAIAVhPQApjDAih9QAThGAPgoQAjhiBMiUIAxhyIAuhoQBLikAshsIC1nHIBkj+QAziUAZgdQA1hiBPg8QAWgPAcgOQApgaA4gXICTg2IAfgKICFguIAZgLQAqgXAXgVQAHgHAEgIIAYAEQA2ACBCAaIAZALQBUAoBDBBIAOAPQAeAfAZAmQAWAZASAcQAMASAKAVQARAjAXA1QAWAaAVAeQAXAhAXArQAzBkAsBsIALAYIAMAhQAhBJAcAyQATAkAOATIAPAlIAdAsIAnBSIAFALIAUAsQAaApAWAkIAIAOIALBrIACATIAEAfQAOASAPAWQANASAKATIAHAMQAWAnASAnQAOAaANAUQATAfAdAaQAZATADATQAHAdgKA6QglCjkHCaQiMBPjCBLQmJCWoMBhQjVAfjlAYIjrAAQgfACgdAAQhwAAhogcg");
	this.shape_705.setTransform(624.3,929.1);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#6699CC").s().p("AyKUHQg3gLg0gNQgigLgfgGIgBAAIgBAAIAVhPQAqjDAih8QAThGAOgnQAjhgBNiXIAxhyIAuhnQBLikArhsICynHQA4iTAohsQAyiWAXgcQAzhkBOg8QAVgQAdgPQAogZA4gYICUg3IAfgKQBRgcAzgTIAYgMQArgYAWgWQAGgIADgIIAYADQA2ABBDAaIAZALQBUAmBEBBIAOAPQAfAfAZAlQAWAZARAcQAMASAKAVQARAiAXA2QAWAZAVAeQAYAhAXArQAzBiAsBuIAKAYIANAhQAhBJAbAyQATAkAOATIAOAlIAeAsIAoBRIAFALIAVAsQAbAoAVAlIAJANIAIBsIACASIADAgQAOATAOAWQANASAJAUIAIALQAVAnATAnQAPAZAOAVQAUAdAfAZQAbATAFATQAIAdgJA7QggClkHCbQiKBQjDBLQmHCXoLBiQjUAgjlAaIjsAAQgdABgdAAQhxAAhpgZg");
	this.shape_706.setTransform(625,929);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#6699CC").s().p("AyDULQg4gJg1gMQgjgJgggGIgBABIgBAAIAVhPQArjEAhh6QAUhGAOgnQAihcBNiaQAXg3Abg7IAuhnQBLilArhrQBmkGBIjBQA3iTAmhtQAxiZAUgbQAxhkBOg+QAVgQAdgQQAogZA3gYICUg3IAegKQBSgdAygVIAYgMQAqgYAVgZQAGgIAEgIIAYADQA1AABDAZIAaAKQBTAmBFBAIAPAOQAfAfAaAlQAVAZASAbQALATAKAVQARAiAWA2QAXAZAVAeQAYAhAXAqQAzBgAtBwIAKAYIANAhQAgBKAaAxQATAkAOATIAOAkIAeAsIAqBRIAFALIAXAsQAbAoAVAkIAIANIAHBsIAAATIACAgIAcAqQAMASAJAUIAHAMIApBNQAQAZAPAUQAVAdAhAYQAeATAFASQAKAdgIA8QgbCnkHCcQiJBRjCBMQmGCYoKBiQjTAijlAaIjrAAIg7ABQhwAAhqgVg");
	this.shape_707.setTransform(625.7,929);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#6699CC").s().p("Ax8UPQg4gIg3gKQgjgIghgEIgBABIgCAAIAWhPQAsjFAhh4QAThHAOglQAihaBNidIAzhxIAuhnQBLilAqhrQBlkGBGjBQA2iTAkhuQAvibASgaQAvhmBNg/QAVgQAcgQQAogaA4gYICTg3IAfgLQBSgeAwgVIAYgNQArgZAUgaQAFgJADgJIAYADQA1gBBEAZIAaAKQBTAkBGBAIAPAOQAgAfAaAkQAVAZARAbQAMATAKAUQAQAjAXA2QAXAZAVAdQAYAhAXAqQAzBeAtBxIAKAYIANAiQAgBKAZAwQATAlAOASIANAlIAeAsIAsBQIAGALIAXArQAbApAWAjIAIANQADA9ABAwIABATIAAAgQAOATANAYQAMASAJAUIAHAMIAqBNQAQAZAPATQAXAdAkAXQAfASAGATQAMAbgHA+QgWCpkHCeQiHBQjDBNQmFCZoJBjQjSAjjlAcIjqAAIg8ABQhvAAhrgSg");
	this.shape_708.setTransform(626.4,928.9);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#6699CC").s().p("Ax1UTQg5gGg4gIQgkgHgigDIgBABIgCAAIAXhPQAsjFAhh3QAThHAOglQAhhWBOihIAzhxIAuhmQBMimAohpQBkkGBFjBQA0iVAihuQAuidAQgZQAthnBMhBQAUgQAdgRQAngZA4gYICTg5IAfgLQBSgeAvgXIAYgMQArgbASgbQAGgJACgKIAYADQA1gCBFAYIAZAKQBUAjBHA/IAPAOQAhAeAZAkQAWAZARAbQALATAKAUQAQAiAWA3QAXAZAWAcQAYAhAYAqQAyBcAtBzIAKAYIANAiQAgBKAZAwQATAlANASIANAlIAeAsIAuBPIAGALIAYArIAxBLIAJANQACA9gBAxIAAASIAAAhQANAUANAYQALASAJAVIAHAMQAVAoAVAkQARAZAQATQAYAcAmAWQAhASAIASQANAbgFA/QgSCqkGCgQiGBRjDBOQmECaoIBkQjRAkjlAcIjqAAIg4ABQhxAAhtgOg");
	this.shape_709.setTransform(627.2,928.9);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#6699CC").s().p("AxuUXQg6gFg5gGQglgFgjgCIgBABIgCAAQAMglALgqQAtjGAhh0QAThIAOgkQAghTBPikIAzhxIAuhmQBMimAohpQBikFBDjCQAyiVAhhvQAtigANgXQArhoBLhCQAUgRAdgRQAngaA4gYICTg5IAfgLQBRgfAwgYIAXgNQArgcARgdQAFgJADgKIAYACQA0gDBFAYIAaAJQBUAiBHA/IAQANQAhAfAaAjQAVAZARAbQALATAKAUQAPAiAXA3QAXAYAWAdQAYAgAYAqQAyBaAuB1IAKAYIANAhQAfBMAZAvQASAlAOASIAMAlIAeAsIAwBOIAGALIAZAqQAcApAWAiIAIANQABA9gCAxIAAATIgCAhQANAUANAYQAKATAIAVIAHAMQAWApAWAjQARAYARATQAaAbAoAWQAjASAJARQAOAbgDA/QgOCtkFCiQiGBRjCBOQmDCboGBlQjRAljlAeIjpAAIg6AAQhwAAhtgKg");
	this.shape_710.setTransform(627.9,928.8);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#6699CC").s().p("AxnUbIh1gIIhKgEIgBAAIgCAAQAMgkALgqQAujHAghyQAUhIAOgkQAfhQBPinIA0hxIAuhlQBMinAnhnQBhkFBBjDQAxiVAfhvQArijAMgXQAphpBKhDQAUgSAdgRQAngZA3gZICTg5IAegMQBSggAwgYIAWgOQAqgdARgeQAFgKACgLIAYADQA0gEBFAXIAaAJQBUAhBJA9IAQAOQAhAfAbAiQAVAZAQAbQALATAKAUIAlBYQAYAZAWAcQAZAgAYAqQAxBYAvB3IAJAYIANAhQAfBMAYAvQASAlAOARIAMAmIAeAsIAxBOIAHAKIAbAqIAxBKIAJANQgBA+gCAxIgCATIgCAhQAMAVAMAYQAKATAIAVIAHANQAWApAWAiQASAYATASQAaAbArAVQAkARAKARQARAbgDBAQgJCvkFCjQiEBSjDBPQmBCboFBmQjQAnjlAeIjpAAIg9ABQhuAAhsgHg");
	this.shape_711.setTransform(628.7,928.8);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#6699CC").s().p("AxhUeIh2gDIhMgDIgBABIgCAAQAMgkAMgqQAvjIAfhwQAUhIAOgjQAehNBQirIA0hwIAvhlQBMinAmhnQBgkFA+jDQAwiWAdhvQAqimAJgVQAnhqBKhFQATgSAdgSQAngZA4gZICSg6IAegMQBSggAvgaIAVgOQArgdAQggQAEgLACgLIAYACQA0gFBGAXIAaAJQBUAfBKA9IAPAOQAjAeAaAhQAVAaAQAbQAMATAJAUIAlBYQAYAZAWAcQAZAgAYApQAyBVAuB6IAKAYIANAhQAfBMAXAvQASAlANARIAMAlIAdAsIA0BOIAHAKIAcAqIAyBKIAIAMQgBA+gEAxIgCAUIgEAhQANAVALAZQAJATAIAWIAHAMQAWAqAXAgQATAZATARQAbAbAuAUQAmARALARQASAagBBBQgFCxkECkQiDBTjDBPQmACdoEBmQjQAojkAgIjoAAIgzAAQh0AAhygEg");
	this.shape_712.setTransform(629.4,928.7);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#6699CC").s().p("A0LTVQBOlKAjhYQAlhfB9kJQBwjvAwiDQCnnNA+kCQApinAGgVQAlhqBJhHQAtgrBhgsICxhHQBogpAughQA5gpAFguIAYACQA0gFBGAVQBjAfBWBFQBeBLAoBcIAlBZQAZAYAWAcQBLBeBHC6QBHC7AjAvIAMAlIBSB4QA7BUAkA2QgCA+gFAyIgHA1QAUAlATAzQAqBVAxArQAeAZAvAUQAoAQANARQATAaAABCQAAELpJDwQoXDdsdByIrHAAIgDABQAMgkAMgqg");
	this.shape_713.setTransform(630.2,928.7);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#6699CC").s().p("A0LTUQBOlJAjhYQAlhfB9kJQBwjvAwiDQCnnNA+kCQApioAGgUQAlhrBJhGQAtgrBhgsICxhHQBogqAuggQA5gpAFguIAYACQA0gGBGAWQBjAeBWBGQBeBLAoBcIAlBZQAYAYAXAcQBLBeBHC5QBHC8AjAuIAMAmIBSB4IBgCKQgDA+gFAxIgHA2QAUAlATAzQAqBVAxAqQAeAaAvATQAoARANAQQATAbAABCQAAELpJDwQoXDdsdByIrHAAIgDABQAMglAMgqg");
	this.shape_714.setTransform(630.2,928.7);
	this.shape_714._off = true;

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#6699CC").s().p("AlwDNQgSgMgMgVQgGgLgEgMQgEgMgBgNIgBgFIgBgTIAAgBQABgzAhguQAZgmAqgeIAYgTIAXgQQBOg3BhgfQAngOAqgKQA0gOAxgDQAggDAfAAQAXAAAWACQAOABAPADQAbAFAYAIIAGADQAUAIAQAJQAKAGAJAHIANAJQAfAXAQAiQAPAdABAfIABAEIAAAGQABASgDAQQgDATgJAPQgFAJgHAHIgFAFIgKAIIgQANQgNAKgPAHIgPAHIgKAEIgTAHQhDAVh1AFIgKABQgcAEibAyQhOAYguANQgsAMgHAAQhAAAgngbg");
	this.shape_715.setTransform(619,820.4);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#6699CC").s().p("AmFD2QgWgKgPgXQgHgMgFgNQgEgNgDgOIAAgGIgCgVIAAgBQACg5Ahg1QAbguAsggIAYgXIAXgUQBUhFBkgoQAqgVAsgNQA6gUA2gEQAigFAkgBQAagBAXADQAQABARAEQAdAFAaALIAIAEQAWAJAQAMQAKAHAKAJIAPAKQAgAaASAnQARAjADAgIAAAEIAAAHQADATgBASQgBAVgHARQgGAKgGAIIgFAGIgKAKQgGAIgIAIQgKAMgNAJIgMAIIgIAGIgRAJQhAAfiHAOIgLABQgnAJikAzQhVAag4ANQguAMgMAAQhGAAgugag");
	this.shape_716.setTransform(618.1,824.5);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#6699CC").s().p("AmbEfQgZgJgSgYQgIgMgGgPQgGgOgDgQIgBgGIgCgXIAAgCQACg/Aig6QAdg3AtgjQAMgOANgMIAYgXQBZhWBngwQAsgaAvgRQA/gaA7gFQAlgHAogCQAdgBAaADQARAAATAFQAgAGAcANIAJAFQAXAMASAOQAKAIAKAKIAQANQAiAcAUAtQATApAEAgIAAAFIABAHQAEAVABATQABAZgGARQgFALgGAKIgFAHIgJALIgNATQgIAPgKAKIgJAJQgBAEgFADIgPANQg+AniYAXIgMACQgxANiuA1QhcAbhCAPQgxALgQAAQhMAAg1gZg");
	this.shape_717.setTransform(617.2,828.5);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#6699CC").s().p("AmyFIQgcgIgUgZQgKgMgHgRQgHgPgEgRIgBgHQgDgTAAgGIAAgCQAEhFAihBQAehAAvgkQAMgQAOgOQAMgPAMgLQBehlBqg5QAvggAygUQBDghBAgFQAogKAtgDQAggBAcADQASAAAVAFQAjAIAfAPIAJAGQAZANASARQALAJAKAMIARAOQAkAfAWAyQAVAwAFAgIABAGIABAHQAFAXADAUQAEAcgEATQgFAMgHAKIgFAIIgJANIgKAWQgGASgIALIgFALQAAAEgEADIgOARQg7AwiqAgIgMACIj0BIQhjAchLARQg0AKgUAAQhTAAg8gYg");
	this.shape_718.setTransform(616.4,832.5);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#6699CC").s().p("AnJFyQgggHgWgbQgLgNgJgRQgHgRgFgSIgBgIQgEgUAAgIIAAgBQAEhMAkhGQAfhJAwgmQANgSAOgQQAMgRANgNQBjh0BthCQAygkA0gZQBIgnBFgGQArgMAxgDQAjgDAeAEQAUAAAXAFQAmAJAhARIAKAHQAbAQATATQAKAKALAOIATAQQAlAhAYA4QAXA1AHAhIAAAGIACAIQAGAYAFAXQAGAegDAUQgFANgGAMIgFAJIgJAPIgIAYQgEAVgGAMQgCAHABAGQACAEgEAEIgMATQg5A6i7AoIgNADQhHAXjBA4QhqAdhVARQg3ALgYAAQhZAAhDgXg");
	this.shape_719.setTransform(615.7,836.5);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#6699CC").s().p("AnhGbQgjgFgZgcQgMgOgKgTQgIgRgFgUIgCgJQgFgVAAgJIAAgBQAGhSAkhMQAghSAygoQANgUAOgSQANgTANgOQBoiEBwhKQA1gqA2gcQBPguBJgHQAugOA0gEQAngDAgAEQAVAAAaAGQAoAJAjAUIALAIQAdASATAVQALALALAQIAUARQAnAkAaA+QAZA7AIAhIABAHIACAJIAOAxQAIAggBAWQgEAPgGAMIgFAKIgJARIgGAbQgCAYgEANQAAAIACAGQAEAFgDAFIgLAWQg2BDjNAxIgNADQhTAbjKA6QhxAeheATQg6AKgcAAQhgAAhKgWg");
	this.shape_720.setTransform(615,840.5);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#6699CC").s().p("An5HDQgngDgbgeQgNgOgLgUQgJgTgHgVIgBgJQgFgXgBgJIAAgBQAHhZAkhSQAihaA0grQAOgWAOgUQANgUAOgQQBsiTB0hTQA3gwA4gfQBUg1BOgHQAxgQA5gFQApgDAjADQAWAAAcAHQAqAKAmAWIAMAJQAfAUAUAYQALAMALARIAWATQAoAnAcBDQAbBBAKAiIABAHIACAJIARA1QALAjABAXQgFAQgGAOIgFALIgJASQAAANgDARIgBApQAAAJAEAGQAFAGgBAFIgKAaQg0BLjdA6IgPADQhdAhjVA7Qh2AfhoAUQg9AJghAAQhmAAhRgVg");
	this.shape_721.setTransform(614.3,844.5);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#6699CC").s().p("AoRHtQgqgDgegfQgOgPgMgVQgLgUgGgWIgDgKQgFgYAAgKIAAgBQAGhfAmhYQAkhjA1guQANgYAPgVQAOgWAOgSQBxiiB2hcQA7g1A7gjQBZg7BTgIQAzgSA9gGQAsgEAlAEQAZAAAdAHQAtAMAoAYIANAJQAhAXAVAaQAKANANATIAWAVQAqApAeBJQAeBHAKAiIABAHIACAKIAVA5QANAkACAaQgEAQgGAPIgEAMIgJAUQAAAPgCASIADAtQACAJAHAIQAHAGgCAFQgBAJgHAUQgyBVjuBDIgQADQhoAljeA9Qh+AhhxAVQhAAJglAAQhrAAhZgUg");
	this.shape_722.setTransform(613.6,848.5);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#6699CC").s().p("AosIWQgsgBghggQgQgQgNgXQgLgUgIgYIgCgKQgHgaAAgLIAAgBQAIhlAmheQAmhsA2gwQAOgaAPgXQAOgYAOgTQB3iyB5hkQA9g7A+gnQBehBBYgIQA2gVBCgGQAvgFAnAEQAZgBAgAJQAwAMAqAbIAOAKQAjAYAVAdQALAOANAVQAMALALALQAsAsAgBPQAgBMALAkIACAHIACALIAYA7QAPAnAEAbQgEASgGAQIgEANIgJAVQABAQgBAUQAEAgAEARQADAKAJAIQAIAHAAAGQAAAKgHAWQgvBekABLIgQAFQh0ApjoA+QiEAih6AWQhDAJgqAAQhyAAhggTg");
	this.shape_723.setTransform(613.2,852.5);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#6699CC").s().p("ApLI/QgvAAgkghQgRgRgOgXQgMgWgIgZIgDgLQgHgcAAgLIAAgBQAIhsAnhjQAnh1A4gyQAOgdAPgYQAPgaAPgVQB7jBB9htQA/hABBgqQBjhIBdgJQA4gWBGgIQAygFAqAEQAbgBAhAJQAzAOAtAcIAPAMQAkAaAWAfQALAPANAXQANALAMANQAtAuAjBUQAhBTANAkIACAHIACAMIAbA/QARApAGAcQgEATgGARIgEAOIgIAYQACAQAAAWQAFAjAHASQAEALALAJQAKAHABAHQABAKgHAZQgtBnkRBUIgRAFQh+AujyA/QiLAkiEAXQhFAIguAAQh4AAhogSg");
	this.shape_724.setTransform(613.2,856.5);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#6699CC").s().p("AppJoQgzACgmgjQgSgRgPgZQgOgXgIgbIgEgLQgHgdAAgMIAAgBQAJhyAnhqQAph9A6g0QAOgfAPgaQAPgcAPgWQCBjRB/h1QBDhGBDguQBohOBigKQA7gYBKgJQA2gFArAEQAdgBAjAKQA1AOAvAfIAQAMQAmAdAXAhQALAQAOAZQAOAMAMANQAvAxAkBaIAyB9IACAIIADAMIAeBCQATAsAIAdQgEAVgGASIgEAPIgIAZQADASABAXQAIAlAIAVQAGALANAKQAMAHABAHQACAMgGAbQgqBwkjBdIgSAFQiJAyj7BBQiSAliNAYQhJAIgyAAQh+AAhvgRg");
	this.shape_725.setTransform(613.1,860.5);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#6699CC").s().p("AqIKRQg2ADgogkQgUgRgQgbQgPgYgJgcIgEgMQgIgeAAgNIAAgBQAKh4AohwQAriGA7g2QAOgiAQgbQAPgeAQgXQCFjgCDh+QBFhMBFgyQBthUBngKQA+gbBPgJQA4gHAuAFQAegBAlAKQA4APAyAhIARAOQAnAeAYAlQALAQAPAbQAOAMANAPQAxAzAmBgIA1CDIACAJIADAMIAhBFQAWAuAJAgQgEAVgFAUIgEAQIgJAaQAEATADAZQAJAoAMAWQAHAMAPAKQANAIACAIQADAMgGAeQgoB5k0BlIgSAGQiUA3kFBDQiZAmiWAZQhMAHg2AAQiFAAh2gQg");
	this.shape_726.setTransform(613.1,864.5);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#6699CC").s().p("AqnK6Qg5AFgrglQgVgTgRgbQgQgZgKgeIgEgNQgJgfAAgOIAAgBQAMh/Aoh1QAsiPA9g5QAPgjAPgdQAQggAQgZQCKjvCGiHQBIhRBIg1QByhbBsgLQBBgdBTgKQA7gHAwAFQAfgCAoAMQA6AQA0AjIASAOQAqAhAXAnQAMASAPAcIAdAcQAyA3AoBlQAoBkARAlIACAJIADAOIAkBIQAYAwALAhQgDAXgGAUIgEARIgIAcQAFAVADAaQAMArAOAXQAIANARALQAPAIADAJQAEANgGAfQglCDlFBuIgTAGQifA8kPBEQifAnihAbQhOAGg7AAQiLAAh9gPg");
	this.shape_727.setTransform(613.1,868.5);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#6699CC").s().p("ArFLjQg9AGgugnQgWgTgSgcQgQgbgLgeIgFgOQgJghAAgPIAAgBQAMiEAph8QAuiXA+g7QAPgmAQgfQAQghAQgbQCQj+CJiQQBKhWBLg5QB3hhBygMQBCgfBYgLQA+gIAyAGQAhgCApAMQA+ARA2AlIATAQQArAiAYApQAMATAQAeQAPAOAOAQQA0A5ArBrQAqBqARAmIADAJIADAOIAnBMQAbAzANAiQgEAYgFAVIgEASIgIAeQAGAWAEAcQAOAuAQAYQAKAOATALQARAJADAJQAFAOgFAiQgjCLlXB3IgUAHQipBAkYBGQinAoiqAcQhRAGg/AAQiRAAiEgOg");
	this.shape_728.setTransform(613.1,872.6);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#6699CC").s().p("ArkMMQhAAIgwgpQgYgTgTgeQgRgcgMggIgFgOQgKgiAAgQIAAgBQANiLAqiBQAvigA/g9QAQgoARghQAQgjARgcQCUkOCMiYQBNhcBNg9QB8hnB3gNQBGggBbgNQBBgIA1AGQAigDAsANQBAASA4AoIAUAQQAtAlAZArQAMAUAQAgQAQAPAPARQA2A7AsBxQAsBwATAmIACAKIAEAOIAqBPQAdA1APAkQgEAagFAWIgEATIgIAgQAHAWAGAeQAPAwATAaQALAPAVALQATAKADAJQAGAQgEAkQghCUlnCAIgVAHQi0BFkiBHQiuAqizAcQhUAGhDAAQiYAAiLgNg");
	this.shape_729.setTransform(613.1,876.6);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#6699CC").s().p("AsDM1QhDAJgzgpQgZgVgUgfQgSgcgNgiIgFgPQgLgjAAgRIAAgBQAOiRAriHQAwipBBhAQARgpAQgjQARglARgeQCZkdCPihQBQhhBQhAQCBhuB8gNQBIgjBggNQBEgJA3AGQAjgDAuANQBDATA6ArIAVARQAvAnAaAtQAMAWAQAhQARAQAQARQA3A/AuB2QAuB1AVAnIACAKIAEAQIAuBSQAfA3AQAlQgDAbgFAXIgEAUIgIAiQAIAXAGAgQASAzAVAbQANAQAXAMQAUAKAEAKQAHAQgEAmQgeCel5CIIgVAIQjABJkrBJQi1Ari8AeQhXAFhIAAQieAAiSgMg");
	this.shape_730.setTransform(613.1,880.6);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#6699CC").s().p("AsiNfQhGAKg2grQgZgVgWggQgTgegOgiIgFgQQgLglAAgSIAAAAQAOiYAsiNQAyixBChCQARgsARgkQARgoARgfQCeksCTiqQBShmBShFQCHh0CBgNQBKglBlgOQBHgKA5AGQAlgDAvAOQBGAUA9AtIAWASQAwApAbAwQAMAWARAkQARAQAQASQA5BBAxB8QAwB7AVAoIADAKIAEAQIAxBWQAhA5ASAnQgDAcgFAZIgEAVIgIAjQAKAYAHAhQAUA3AXAbQAOARAZANQAWALAFAKQAIARgEApQgbCnmKCQIgXAIQjKBPk1BKQi8AsjFAfQhbAFhLAAQikAAiagLg");
	this.shape_731.setTransform(613.1,884.5);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#6699CC").s().p("AtBOIQhJALg4gsQgbgVgXgiQgUgfgOgkIgGgQQgMgmAAgTIAAgBQAQieAsiTQAzi6BEhEQARguARgmQASgpARggQCjk9CWixQBVhtBVhIQCLh6CGgPQBOgnBogPQBLgKA7AHQAmgEAyAPQBIAVA/AvIAXATQAyArAbAzQANAXARAlQASARARATQA7BEAyCBQAyCBAXApIADALIAEAQIA0BYQAkA9ATAnQgDAegEAaIgEAWIgIAkQAKAaAJAjQAWA5AZAdQAQASAbANQAXALAGALQAJASgEArQgYCwmcCZIgXAJQjVBTk/BMQjCAtjPAgQheAFhPAAQirAAihgKg");
	this.shape_732.setTransform(613.1,888.6);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#6699CC").s().p("AtgOxQhNANg6guQgdgWgYgjQgVgggOglIgGgRQgNgoAAgTIAAgBQAQikAtiZQA1jDBGhGQARgwARgoQASgrASgiQColMCZi6QBXhyBYhLQCQiBCLgPQBRgpBsgQQBOgLA+AHQAngEA0AQQBKAVBCAxIAYAUQA0AuAcA1QANAYARAnQATARARAVQA8BGA1CHQA0CHAYApIADALIAFARIA3BcQAmA+AVApQgDAggEAaIgEAXIgIAnQAMAbAJAkQAYA8AcAeQARATAdAOQAZALAGAMQAKATgDAtQgWC5mtCiIgYAJQjgBXlIBOQjKAvjYAhQhgAEhUAAQixAAiogJg");
	this.shape_733.setTransform(613.2,892.6);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#6699CC").s().p("At/PaQhQAOg9guQgegXgZglQgWgggPgnIgGgSQgOgpAAgUIAAgBQASiqAtifQA3jMBHhIQARgyASgqQASguASgiQCtlbCcjDQBah4BbhPQCViHCQgQQBUgrBwgRQBRgLBAAHQAogEA2AQQBNAXBEAzIAZAVQA2AvAcA4QAOAZASApQATASASAVQA+BJA2CNQA3CNAZApIADAMIAFASIA6BeQAoBBAXArQgCAggFAcIgEAYQgDAUgEAUQAMAcALAmQAaA/AeAfQASAUAfAOQAbAMAHANQALATgDAwQgTDCm/CrIgYAJQjrBclSBPQjQAwjiAiQhjAEhZAAQi3AAivgIg");
	this.shape_734.setTransform(613.2,896.6);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#6699CC").s().p("AueQDQhTAQhAgwQgfgYgaglQgXgigQgpIgHgSQgOgqAAgVIAAgBQASixAuikQA5jUBIhLQASg1ASgrQATgwASgkQCylqCfjMQBdh9BdhSQCaiOCVgRQBXgtB0gRQBUgMBCAHQAqgEA4ARQBQAXBGA2IAaAWQA4AxAdA6QANAaATArQAUATASAWQBABLA4CSQA5CTAaAqIADAMIAGATIA9BiQAqBDAZAsQgDAigEAdIgDAZIgIApQAOAdALAoQAcBBAhAiQATAUAhAPQAdANAHAMQANAVgDAyQgRDLnQCzIgZAKQj2BhlbBRQjXAxjsAjQhmADhdAAQi9AAi2gHg");
	this.shape_735.setTransform(613.2,900.6);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#6699CC").s().p("Au9QsQhWARhDgxQgggYgbgnQgYgjgRgqIgHgSQgOgsAAgWIAAgBQASi3AviqQA6jdBKhNQASg3ASgtQAUgyATglQC2l6CijUQBgiDBfhWQCgiUCagRQBZgwB5gSQBWgNBFAIQAsgFA5ASQBTAZBJA3IAaAXQA6A0AeA8IAgBIQAVATATAXQBBBOA6CYQA7CZAcArIADAMIAGATIBABlQAtBGAaAtQgCAjgFAeIgDAaIgHAsQAOAeANApQAdBEAkAjQAUAUAkAQQAeAOAIANQAOAVgDA0QgPDVngC8IgbAKQkABmllBSQjeAyj1AlQhpAChhAAQjDAAi+gGg");
	this.shape_736.setTransform(613.2,904.6);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#6699CC").s().p("AvdRVQhZAThFgzQghgZgdgoQgZgkgRgrIgHgTQgQgtAAgXIAAgBQAUi9AvixQA8jlBMhQQASg4ASgvQAUg0ATgnQC8mJCljdQBjiIBhhaQCliaCfgSQBcgyB9gTQBagNBGAIQAtgFA8ATQBVAZBLA6IAcAYQA8A1AeA/IAhBLQAVAUAUAYQBDBRA8CdQA9CfAdArIAEAMIAFAUIBEBpQAvBHAcAvQgCAlgFAfIgDAbIgHAtQAPAfAOArQAgBHAlAkQAWAVAmARQAfAOAKAOQAOAWgCA2QgMDenyDFIgbAKQkMBqlvBUQjkA0j/AlQhsAChlAAQjKAAjFgFg");
	this.shape_737.setTransform(613.3,908.6);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#6699CC").s().p("AygRdQgigZgegpQgagmgSgsIgHgUQgQgvAAgYQAUjEAwi2QA9juBNhSQATg7ATgwQAUg2AUgoQDAmZCojlQBmiNBkheQCqihCkgTQBfgzCBgUQBcgOBJAIQAvgFA+ATQBYAaBNA9IAcAYQA+A4AfBBIAhBOQAWAVAVAYQBEBUA+CjQA/CkAfAsIADANIAGAUIBHBsQAxBKAeAwQgCAmgEAgIgDAcIgIAvQARAhAOAsQAiBKAoAlQAYAWAnARQAiAPAJAOQAQAXgCA5QgKDnoDDNIgcALQkWBvl4BVQjsA1kIAnQhvAChpAAQjQAAjMgEQgaAFgYAAQg/AAg0gmg");
	this.shape_738.setTransform(613.3,912.7);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#6699CC").s().p("AzFSGQgkgagegrQgbgmgTguIgIgVQgQgwAAgZQAVjKAxi8QA+j3BPhUQATg9ATgyQAUg4AUgpQDGmoCrjuQBoiTBnhiQCvinCpgTQBig2CFgVQBggOBLAIQAwgFBAATQBaAcBQA+IAdAaQA/A6AgBDQAOAfAUAxQAXAWAVAaQBGBWBACoQBBCrAgAsIAEAOIAGAVIBKBuQAzBNAgAyQgCAngEAhIgDAdIgIAwQASAiAQAuQAkBNAqAmQAZAXApASQAjAPALAPQAQAYgBA7QgHDvoVDXIgdALQkhB0mCBWQjyA3kSAnIjfACQjWAAjUgDQgbAGgaAAQhAAAg1gmg");
	this.shape_739.setTransform(613.3,916.8);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#6699CC").s().p("AzqSuQglgagggsQgcgogTgvIgIgVQgRgxAAgaQAWjRAxjCQBAj/BQhWQAUhAATgzQAVg6AUgrQDLm4Cuj2QBriZBphlQC0iuCugTQBkg4CKgWQBjgPBNAIQAygFBBAUQBeAdBSBAIAeAbQBBA8AgBGQAOAfAVA0QAYAWAVAbQBIBYBCCvQBDCwAhAtIAEAOIAHAVIBMByQA2BPAhAzQgBApgEAiIgDAeIgHAyQASAjARAwQAmBPAtAoQAaAYArASQAlAQALAPQASAZgBA9QgFD5omDfIgeAMQksB4mLBYQj6A4kaApIjnAAQjcAAjbgCQgdAHgbAAQhCAAg2gng");
	this.shape_740.setTransform(613.4,920.8);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#6699CC").s().p("A0PTXQgmgcghgtQgdgogUgxIgIgWQgSgzAAgaQAXjXAyjIQBCkIBRhZQAUhBATg1QAWg8AUgtQDQnGCxkAQBuieBshpQC5i0CzgUQBng6COgXQBmgPBPAIQAzgFBEAVQBgAdBUBDIAfAcQBDA+AhBIQAOAhAWA1QAYAXAWAbQBJBcBECzQBGC3AiAtIAEAOIAHAXQAmA5AqA8QA4BRAjA1QgCApgEAkIgDAfIgHAzQAUAkASAyQAoBSAvApQAbAZAuATQAmAQAMAQQASAZAABAQgCECo4DoIgeAMQk3B9mVBZQkAA5klAqIjtABInFgBQgeAHgdAAQhDAAg4gng");
	this.shape_741.setTransform(613.4,924.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_652}]}).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_713}]},1).to({state:[]},1).to({state:[{t:this.shape_652}]},104).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_681}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_714).wait(62).to({_off:false},0).wait(9).to({_off:true},1).wait(134));

	// lef atrium blood
	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#6699CC").s().p("AlgCkQgVgegDgoIABgwQAAiDB2hUQBqhLCXgJQCZgJBqA9QB2BEAAB9QAABOhKBIQh0Byj8AAQjfAAhAhcg");
	this.shape_742.setTransform(545.5,1169);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#6699CC").s().p("AhWEbIgdgCQgogDghgHQgVgFgRgGQgLgFgJgCIgPgGIgcgLQgpgTgagaQgOgOgKgSQgHgMgFgOQgJgbgCgZIABgmIAAgOQABgYAEgVQARhaBPg8QATgOAVgNIAPgJIAvgWQA2gXA+gNQAxgMA5gGIAlgDQBAgEA0AJQAnAFAhAOQAeAMAYATIATAOQA/AxANBMQAJAigEArIgBAKQgFAlgRAhQgTApgsAnIgLAJQgWAUghATQgbAQgcANIgsASQgaAKgaAHQgTAFgVAEQguAKg2ACIgWAAIgXAAg");
	this.shape_743.setTransform(547,1166.2);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#6699CC").s().p("AhrE3QgQgBgPgCQgsgEgigMQgVgHgRgJQgKgHgKgDQgGgCgIgFQgQgJgNgGQgrgXgZgfQgNgPgKgVQgHgNgFgPQgJgggCgYIABgqIABgPQABgZAFgYQAVhhBcg6QAVgNAXgNIARgIIA0gUQA8gXBEgMQA0gNA/gJIAogEQBHgIA2AHQAsAEAjAQQAfAOAYAYQAKAHAIAJQA9A2AFBVQAHAkgIAvIgCALQgJApgRAiQgVArgzAqIgLAKQgXATgnAWQgfASgdANIgvAVQgcAOgaAHQgVAIgXAFQgwAMg9ACIgQAAIggAAg");
	this.shape_744.setTransform(548.6,1163.4);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#6699CC").s().p("AiBFTQgSgBgQgDQgwgGgjgQQgVgJgRgMQgJgJgJgEQgHgCgIgHQgSgLgMgGQgsgdgYgiQgNgRgJgXQgHgPgFgQQgJglgCgYIABgtIABgQQABgcAHgZQAZhoBog3IAxgZIATgIIA5gSQBBgWBKgLQA2gOBGgNIArgGQBOgLA5AGQAxACAkASQAhAPAYAdIARATQA7A7gEBfQAFAlgMAzIgDAMQgMAtgSAjQgWAtg6AtIgNAKQgXATgsAZQgjATgeAOQgYALgaAOQgfARgbAIQgWAJgYAGQgyAQhDACIgSAAIgigBg");
	this.shape_745.setTransform(550.4,1160.5);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#6699CC").s().p("AiYFwQgUgCgRgDQgzgIgkgUQgWgLgQgPQgKgMgIgDQgGgDgKgIQgSgOgMgGQgugigWgmQgNgTgJgaQgHgQgEgSQgKgpgBgYIABgvIABgSQACgeAHgbQAehuB0g2QAbgMAbgLIAUgIIA/gQQBHgVBPgLQA4gPBNgQIAugHQBWgQA6AFQA2ABAnAUQAhARAYAhQAJALAIALQA4BAgMBoQADAmgQA4IgDAMQgRAxgSAlQgYAvhAAwIgOAKQgXATgyAbQgnAVggAPQgYALgcARQgiAVgbAJQgXAKgaAIQg1AThJABIgOAAIgpgBg");
	this.shape_746.setTransform(552.2,1157.6);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#6699CC").s().p("AixGNQgVgCgRgFQg4gJglgYQgWgOgQgRQgJgPgIgDIgQgNQgTgRgMgGQgvgmgWgrQgMgUgJgcQgGgSgFgTQgJgvgBgXIABgyIABgTQACghAJgdQAih1CBgzQAdgMAdgKIAWgHIBDgPQBNgUBVgKQA7gQBTgTIAxgJQBdgTA9ADQA7AAAoAVQAjATAXAmQAJAMAIANQA2BEgVByQABAogUA7IgEANQgUA1gTAmQgZAxhHAzIgPALQgXATg5AdQgqAXghAQQgZAMgeATQglAYgbAKQgYAMgcAJQg3AWhQABIgMAAQgYAAgXgBg");
	this.shape_747.setTransform(554.2,1154.7);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#6699CC").s().p("AjKGqQgXgDgSgFQg7gLgmgcQgXgQgPgUQgJgRgIgEIgQgOQgUgUgMgHQgwgqgVgvQgMgWgIgfQgGgSgFgVQgJg0gBgWIABg2IABgUQADgjAJgfQAnh7CNgxIA/gWIAYgGIBIgNQBTgTBagKQA9gRBagWIA0gLQBlgXA/ADQBAgCApAXQAlAVAXArQAJAMAHAPQA0BIgeB8QgBApgYBAIgEANQgYA6gUAmQgaA0hOA2IgRALQgXATg+AgIhQApQgbANggAWQgnAbgbALQgaAOgdAJQg6AZhWACIgLAAQgbAAgYgCg");
	this.shape_748.setTransform(556.2,1151.7);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#6699CC").s().p("AjkHHQgYgDgTgGQg/gNgnggQgXgSgPgXQgIgUgIgEIgQgQQgWgWgLgHQgxgwgVgyQgLgXgIgiQgGgUgEgXQgKg5AAgVIABg5IAAgVQAEgmAKggQAriCCagvIBEgUIAZgGIBNgLQBZgSBggKIChgrIA3gMQBrgbBBABQBFgDArAZQAmAWAXAwQAIAOAHAQQAyBNgmCFQgDArgcBEIgGAOQgbA+gUAnQgcA2hVA4IgRAMQgYAThEAiIhUAsQgcAOgiAYQgqAfgbAMQgcAPgdALQg+AchcABIgKAAQgdAAgbgCg");
	this.shape_749.setTransform(558.3,1148.8);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#6699CC").s().p("Aj+HkQgagDgUgHQhCgPgogkQgXgUgPgaQgIgWgHgEIgRgSQgWgZgMgIQgyg0gUg2QgKgZgIglQgGgVgEgYQgJg+gBgUQAAgwABgNIABgXQAEgnAMgiQAuiICngtIBIgUIAbgFQA1gHAdgCQBfgRBkgJICrgwIA6gOQBzgeBEAAQBJgFAtAbQAnAYAXA0QAIAQAHARQAvBSgvCPQgFAsgfBIIgHAPQgeBBgWApQgdA3hbA8IgTANQgYAShKAlIhaAuQgdAPgjAbQgsAigcANQgdAQgfAMQhAAfhjACIgJAAQggAAgcgDg");
	this.shape_750.setTransform(560.4,1145.8);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#6699CC").s().p("AkYIBQgcgEgVgHQhGgQgogpQgYgWgOgdQgIgYgHgFIgRgUQgXgbgMgIQg0g5gSg7QgKgagIgnQgGgWgEgaQgJhDgBgTIABhBIACgYQAEgqANgjQAziPCzgrIBNgSIAdgFQA5gGAdgBQBlgQBqgJIC0g0IA9gPQB6giBGgBQBOgHAvAdQApAZAWA6QAIAQAGATQAuBXg3CYQgIAtgjBNIgHAPQgjBGgWApQgeA6hiA/IgUANQgYAShQAoIhfAwQgeAQglAdQgvAmgcAOQgdASgiANQhDAihpABIgKAAQghAAgdgDg");
	this.shape_751.setTransform(562.6,1142.9);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#6699CC").s().p("AkzIfQgdgFgWgIQhKgSgpgtQgZgYgNgfQgHgbgHgFIgRgWQgZgegLgIQg1g9gSg/QgJgcgIgqQgFgYgFgbQgIhIgBgSIABhEIACgZQAEgsAOgmQA3iVDAgpIBSgRIAegEQA+gGAdABQBrgQBvgIIC9g4IBBgRQCBgmBJgCQBSgJAxAfQArAbAVA/QAIARAGAVQArBbhACiQgJAugoBRIgHAQIg9B1QggA8hpBBIgVANQgYAShWArIhkAzQgfAQgnAgQgxAqgdAOQgeAUgkAOQhFAlhvABIgJAAQglAAgegDg");
	this.shape_752.setTransform(564.8,1139.9);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#6699CC").s().p("AlOI8QgfgFgWgJQhOgTgqgyQgZgagNgiQgHgegGgFIgSgXQgaghgLgIQg2hDgQhDQgJgdgIgtQgFgYgEgdQgJhMgBgTQAAg5ABgOIACgaQAFgvAPgnQA7icDMgmIBXgQIAggEQBCgFAfACQBwgPB0gIQBNgWB6gmIBDgTQCJgpBLgEQBXgKAyAhQAtAdAVBDQAIATAFAWQApBghICrQgMAwgrBVIgJARIhAB5QgiA+hwBFIgWAOQgYARhcAtIhoA2QghARgpAjQgzAsgdAQQggAVglAPQhIAph2ABIgIAAQgnAAgggEg");
	this.shape_753.setTransform(567,1136.9);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#6699CC").s().p("AlpJZQgggFgYgKQhRgVgrg1QgZgdgNgkQgHghgFgFIgTgZQgagjgLgJQg4hHgPhHQgJgfgHgwQgFgagEgeIgKhjIABhKIADgcQAFgxAQgoQBAijDYgkIBcgPIAhgEQBGgDAgACQB2gOB6gHQBPgXCBgpIBGgVQCQgtBNgFQBcgLA0AiQAuAfAVBIQAHAUAGAXQAmBlhRC1QgNAxgwBaIgJARIhFB/QgjBAh2BHIgYAOQgYAShhAvIhuA4QgiASgrAmQg2AwgcAQQgiAXgnAQQhKAsh8ABIgJAAQgoAAgigFg");
	this.shape_754.setTransform(569.2,1133.9);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#6699CC").s().p("AmEJ2QgigFgZgLQhUgXgtg5QgZgfgNgnQgGgjgFgFIgTgcQgbglgLgKQg5hLgPhLQgIghgHgyIgIg7IgKhnIABhOIADgdQAGgzARgrQBEipDlgiIBggOIAjgDQBKgDAgAEQB8gNCAgHQBRgYCIgsIBJgWQCYgxBPgGQBhgNA1AkQAwAgAUBNQAIAWAFAYQAkBphaC/QgPAzgzBeIgKASIhKCDQgkBDh9BKIgZAPQgYARhoAyQhHAjgrAYQgjASgtAoQg5A0gcARQgjAYgpASQhNAuiCABIgIAAQgrAAgjgFg");
	this.shape_755.setTransform(571.4,1131);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#6699CC").s().p("AmgKUQgkgGgZgLQhYgZgug+QgaghgMgqQgFglgFgFIgTgeQgdgogLgKQg6hQgNhPQgIgigHg1IgIg+QgJhbAAgQQAAhEABgOIACgeQAHg1ASgsQBIiwDxggIBlgNIAlgCQBOgCAhAFQCCgMCFgHQBVgZCNgvIBNgYQCfg1BRgHQBmgPA3AmQAxAiAUBSQAHAXAFAaQAiBuhiDIQgSA0g3BiIgKATQg1BZgZAvQgmBFiEBNIgaAPQgYARhuA1QhLAlgsAYQgkAUgvAqQg6A3geASQgkAagqATQhQAxiJABIgHAAQgtAAglgFg");
	this.shape_756.setTransform(573.7,1128);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#6699CC").s().p("Am7KxQglgGgagNQhcgagvhBQgagkgMgsQgFgogFgGQgDgIgQgXQgegrgKgKQg7hVgNhTQgHgkgHg3QgEgegEgjIgJhwIABhUIADggQAHg3ATguQBMi3D+geQA4gHAygEIAmgCQBSgBAiAGQCIgMCLgGQBXgaCUgyIBQgaQClg4BVgJQBqgQA5AoQAyAkAUBXQAHAYAEAbQAgByhqDSQgUA2g7BmIgMAUQg3BdgbAwQgnBHiKBQIgcAQQgYAQhzA4QhPAmguAZQglAVgwAsQg9A7geATQgmAcgsAUQhSA0iPABQg0AAgpgGg");
	this.shape_757.setTransform(575.9,1125);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#6699CC").s().p("AnXLPQgmgHgbgNQhggcgwhGQgaglgMgwQgEgqgFgGQgDgJgQgYQgfgugKgKQg9hagMhXQgGglgHg6QgEgfgEglIgJh0QAAhKABgOIADggQAIg6AUgwQBQi9ELgcQA6gGA1gEIAngCQBXAAAiAIQCOgLCQgGQBagbCbg2IBSgbQCtg8BXgKQBvgSA7ArQA0AlATBcQAHAZAEAdQAdB3hzDbQgVA3hABqIgMAVQg7BhgbAxQgpBJiRBTIgcAQQgZAQh5A7QhSAogwAaQgmAVgyAvQg/A/gfATQgnAeguAVQhUA3iVABQg2AAgrgGg");
	this.shape_758.setTransform(578.2,1122);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#6699CC").s().p("AnzLsQgogHgcgOQhjgegxhKQgbgogLgyQgEgsgEgHQgDgJgRgZQgggxgKgLQg+hegLhbQgGgngGg9IgHhGIgJh4QAAhOABgOIADgiQAIg7AWgyQBUjDEXgaQA9gGA2gDIApgCQBbABAjAJQCUgKCWgGQBcgcChg4IBWgeQC0g/BZgLQB0gUA8AsQA2AoATBgQAHAaADAfQAbB7h7DmQgYA4hDBuIgNAVQg/BmgcAyQgqBLiXBWIgeARQgZAPh/A9QhWAqgwAbQgoAWg0AyQhCBCgfAUQgoAfgvAWQhXA7icABQg4AAgsgHg");
	this.shape_759.setTransform(580.5,1119.1);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#6699CC").s().p("AoOMJQgqgHgdgPQhmgfgyhOQgcgqgKg1QgEgvgEgHQgCgJgSgbQghgzgKgMQg/higKhgQgGgogFhAIgIhIIgJh9IABhfIAEgjQAIg+AXg0QBZjKEjgXQBAgGA4gCIArgBQBfABAkAKQCZgJCcgFQBfgdCng8IBZgfQC8hDBbgMQB5gVA+AuQA3ApATBlQAGAbADAgQAZCAiEDvQgaA6hHBzIgNAVQhDBqgdAzQgrBNieBZIggARQgZAQiEA/QhaAsgyAcQgpAXg1A0QhFBFgfAVQgqAhgwAXQhaA+iiABQg6AAgtgIg");
	this.shape_760.setTransform(582.8,1116.1);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#6699CC").s().p("AoqMnQgsgIgdgQQhrgggzhTQgbgsgLg3QgDgygEgHQgCgKgSgcQgig2gKgLQhAhogJhkQgFgpgGhDIgHhLIgJiCQAAhTABgOIAEglQAJhAAYg1QBcjREwgVQBCgFA7gCIAtgBQBiADAmALQCfgJChgEQBigfCug+IBbghQDDhGBegOQB9gXBAAwQA4ArATBqQAGAdADAhQAXCFiND4QgcA7hLB3IgOAXQhGBtgdA0QgtBPimBcIggASQgZAPiLBCQhdAtgzAdQgqAYg3A3QhHBIggAXQgrAigyAYQhcBBipABQg8AAgugIg");
	this.shape_761.setTransform(585.1,1113.1);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#6699CC").s().p("ApGNEQgtgIgfgRQhugig0hXQgcgugKg6QgDg1gDgHQgCgKgTgeQgjg4gJgMQhChsgIhoIgKhwIgHhOIgIiGQAAhXABgOIADgmQAKhCAZg3QBhjXE8gUQBFgEA9gCIAuAAQBnADAmANQClgICmgEQBlgfC0hCIBfgiQDKhLBggPQCCgYBCAyQA6AsASBvQAGAeADAjQAUCJiWECQgdA9hPB7IgPAXQhKBygeA1QguBRisBfIgiASQgZAPiQBFQhhAvg1AdQgrAZg4A5QhLBMgfAXQgtAkg0AaQheBDivABQg+AAgwgIg");
	this.shape_762.setTransform(587.4,1110.1);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#6699CC").s().p("ApiNiQgugJgggRQhxgkg1hbQgdgxgJg9QgDg3gCgHQgCgKgUggQgkg6gJgNQhDhxgHhsIgKh0IgGhRIgJiKIABhpIAEgmQAKhFAag5QBljeFJgRQBIgEA/AAIAwAAQBrAEAmANQCrgHCsgDQBnggC7hFIBigkQDShOBigRQCHgZBDAzQA8AuARB0QAGAfACAkQATCPieELQggA+hTB/IgQAYQhNB2gfA2QgvBUizBhIgjATQgZAPiXBHQhkAwg2AfQgsAZg6A8QhNBQggAYQguAlg2AbQhhBHi1AAQhAAAgygIg");
	this.shape_763.setTransform(589.7,1107.1);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#6699CC").s().p("Ap+N/QgwgJgggSQh2gmg1hfQgegzgIhAQgDg5gCgHQgCgLgUghQglg9gJgNQhEh2gHhwIgIh5IgGhTIgJiPQAAhdABgPQACgVADgTQAKhHAbg6QBpjkFWgPQBKgEBBAAIAxABQBvAFAoAOQCwgGCygDQBqghDBhIIBlgmQDZhSBlgRQCLgbBFA1QA9AwASB4QAFAhACAlQAQCTimEWQgiA/hXCDIgQAZQhRB5ggA4QgxBVi5BlIgkATQgaAPicBKQhoAxg3AgQguAag8A/QhPBTghAZQgvAmg3AcQhkBKi7ABQhDAAgygJg");
	this.shape_764.setTransform(592,1104.2);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#6699CC").s().p("AqaOcQgygJghgTQh5gng2hkQgeg0gIhDQgCg8gCgIQgCgLgUgiIgwhNQhFh7gFh0IgIh9IgGhVIgIiUQAAhgABgPQABgWADgTQALhKAcg8QBtjqFigNQBNgDBDAAQAaAAAZACQB0AFAoAQQC2gFC3gDQBtgiDIhMIBognQDghVBngTQCQgdBHA4QA/AxARB9QAFAiACAnQANCYivEeQgkBBhaCIIgSAZQhUB+ggA4QgzBYjABnIglAUQgaAOiiBNQhsAzg4AhQgvAbg9BBQhSBWghAaQgxAog4AdQhnBNjBABQhFAAg0gKg");
	this.shape_765.setTransform(594.3,1101.2);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#6699CC").s().p("Aq2O6Qg0gKgigUQh8gpg4hnQgeg3gIhFQgBg/gCgIQgBgLgVgkIgxhQQhGh/gFh4IgHiCIgFhYIgIiYQAAhkABgOQABgXADgUQALhLAeg+QBxjxFvgLQBPgDBFABIA1ACQB3AGApARQC9gEC8gCQBwgkDOhOIBrgpQDohZBpgUQCVgeBIA5QBAAzARCCQAFAjACAoQALCdi4EoQgmBCheCMIgSAaQhYCCghA5Qg0BajHBrIgmAUQgaAOioBPQhwA1g5AhQgwAchABEQhUBaghAaQgyAqg6AeQhpBQjIABQhHAAg1gKg");
	this.shape_766.setTransform(596.7,1098.2);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#6699CC").s().p("ArSPXQg1gKgjgVQiAgrg5hrQgeg5gIhIQgBhBgBgIQgBgNgWgkIgxhUQhIiDgEh8IgGiGIgFhbIgIicQAAhoABgOIAFgsQALhOAfg/QB2j4F7gJQBSgCBHACIA2ACQB8AHApASQDDgDDCgCQBygkDVhSIBugqQDvhdBrgVQCaggBKA7QBCA1AQCHQAFAkABAqQAJCgjAEzQgoBDhjCQIgSAbQhcCFgiA7Qg1BcjNBtIgoAVQgaAOiuBRQhzA3g7AiQgxAdhBBGQhYBeghAbQgzAsg8AfQhrBTjPAAQhJAAg2gKg");
	this.shape_767.setTransform(599,1095.2);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#6699CC").s().p("ArvP0Qg2gKgkgVQiEgtg5hvQgfg8gHhLQgBhDgBgIQgBgNgWgmIgyhWQhJiJgDiAQgBg1gFhVIgEheIgIihQAAhqABgPIAFgsQAMhRAfhBQB6j+GIgHQBUgBBKACQAdABAbACQB/AIArATIGQgEQB1gmDbhUIBxgsQD2hhBugWQCfgiBLA9QBDA3AQCMQAFAlABArQAHCmjJE7QgqBFhnCVIgTAbQhfCJgiA8Qg3BejVBxIgoAVQgaANi0BUQh3A5g8AjQgyAdhEBJQhZBhgiAcQg0Aug+AgQhuBWjVAAQhLAAg4gLg");
	this.shape_768.setTransform(601.3,1092.2);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#6699CC").s().p("AsLQSQg4gLglgXQiHgug7hzQgfg+gHhNIgBhPQAAgNgXgoIgzhZQhKiNgCiEQgBg2gEhYIgFhhIgHilQAAhuABgOQABgYAEgXQAMhSAhhDQB+kEGUgFQBXgBBMADIA5ADQCEAJAsAUIGbgCQB3gnDihYIB0guQD+hkBwgXQCjgkBNBAQBFA4AQCQQAEAnABAsQAECrjRFFQgsBGhqCYIgVAdQhiCNgjA9Qg5BgjbBzIgqAWQgaANi6BYQh6A5g9AkQgzAehGBMQhcBkgiAdQg2Avg/AhQhxBajaAAQhOAAg5gLg");
	this.shape_769.setTransform(603.7,1089.3);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#6699CC").s().p("AsnQvQg5gLgmgXQiLgwg8h4QgfhAgHhQIAAhRQAAgOgYgpIgzhcQhMiSgBiIQAAg4gEhaIgEhkIgIipQAAhxABgPQACgYADgXQANhVAihFQCCkLGhgCQBagBBNAEQAfABAdACQCHAKAtAVIGmgBQB7goDohaIB3gwQEFhoBygZQCogkBPBAQBGA6AQCWQAEAoAAAuQADCvjaFOQguBIhvCdIgVAdQhmCRgkA+Qg5BijiB3IgrAWIjaBmQh/A8g+AlQg0AfhIBOQheBngjAeQg3AxhBAiQhzBdjhAAQhPAAg7gMg");
	this.shape_770.setTransform(606,1086.3);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#6699CC").s().p("AulQpQiPgxg8h8QgghCgGhTIAAhUQAAgOgYgrIg0hfQhNiWAAiNQAAhVgIinIgHiuQAAh0ABgPQAJh0AthaQCGkSGtAAQCBAABoAIQCMAKAtAXIGyAAQCcgzFKiFQEMhsB1gaQCtgmBQBDQBbBLAADjQAAC0jiFYQg1BPiDC5QhqCVglA/QhABukQCGIjgBpQiCA9g/AmQg1AghKBRQhhBrgjAfQg4AyhDAjQh1BgjoAAQihAAhOgwg");
	this.shape_771.setTransform(608.3,1083.3);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#6699CC").s().p("AucQrQiQgwg9h6QgjhBgIhVIgBhWQAAgQgXgpIg0heQhMiUAAiJQgChXgIimIgHirQADhzAFgaQAKh2AthdQCDkMGggBQCBgBBpAIQCMAKAuAWIGrABQCdgxFHiBQEJhqB7geQCwgoBRBAQBeBIACDeQADCwjbFVQgzBSiGC9QhpCUgnBDQhCBvkICEQgcAQjIBdQh/A7hDAoQg4AhhJBPQhgBpgkAgQg5A0hCAkQhzBejjABIgTAAQiRAAhOgrg");
	this.shape_772.setTransform(608.2,1083.3);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#6699CC").s().p("AuUQsQiQgug+h3QgmhBgKhWIgChYQAAgSgWgoIgzhdQhLiSAAiFQgFhZgHilIgHinQAFhzAIglQANh3AthgQB/kHGTgCQCAgCBrAHQCLAKAxAWIGiACQCfgwFEh8QEFhpCCggQCzgrBSA9QBhBEAFDZQAFCtjUFSQgxBViKDCQhmCRgrBHQhDBwkBCCQgdATjKBfQh7A6hIApQg6AihJBOQhfBmgkAiQg8A2hAAjQhyBdjdACIgkABQiEAAhOgog");
	this.shape_773.setTransform(608.1,1083.3);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#6699CC").s().p("AuLQuQiRgtg+h1QgqhAgLhXIgDhaQAAgUgWgnIgyhcQhKiQgBiAQgHhcgHikIgGikQAHhyANgwQANh4AuhjQB8kBGGgEQB/gDBsAHQCLAKAyAVIGbADQChguFAh5QEChmCIgkQC2gtBUA6QBjBBAHDUQAJCqjOFNQgvBZiMDIQhlCOguBKQhEByj6B/QgeAWjMBgQh5A5hMArQg8AjhIBMQheBkgmAkQg8A3hAAjQhvBbjZAEQgbABgZAAQh4AAhNgjg");
	this.shape_774.setTransform(608,1083.3);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#6699CC").s().p("AuCQvQiSgrg+hzQgug/gNhZIgEhcQAAgVgVgnIgxhaQhJiNgBh9QgKhegGikIgHifQAKhyAQg7QAQh6AthmQB5j7F5gFQB+gEBuAHQCKAJA1AVQDPABDDADQCkgsE8h1QD+hlCPgnQC5gvBVA3QBlA+AKDOQAMCnjGFKQguBbiQDOQhjCLgwBPQhGBzjyB9QgfAZjPBhQh1A3hRAtQg/AkhHBLQhcBhgoAmQg9A5g/AjQhuBZjTAFQgjACggAAQhuAAhLggg");
	this.shape_775.setTransform(607.9,1083.3);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#6699CC").s().p("At6QxQiSgqg/hwQgxhAgPhZIgFheQAAgYgUglIgxhZQhHiLgCh5QgMhggGikIgGibQAMhxAUhFQARh8AthpQB2j2FrgGQB/gFBuAHQCLAIA2AVQDNABC+AEQClgrE5hwQD6hjCWgrQC8gxBWA0QBoA6ANDKQAOCji/FGQgtBfiSDSQhiCKgzBSQhHB0jrB7QggAcjRBjQhyA1hVAvQhBAkhHBKQhbBfgpAnQg/A7g9AjQhsBYjOAGQgqAEgmAAQhmAAhKgdg");
	this.shape_776.setTransform(607.8,1083.3);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#6699CC").s().p("AtxQyQiTgphAhtQg0g/gRhbIgGhgQAAgZgUglIgvhXQhHiKgBh1QgPhhgGijIgGiXQAQhyAXhQQASh9AuhsQByjwFegIQB+gGBwAHQCKAIA4AUQDLACC4AEQCngpE2hsQD3hhCcguQC/gzBXAxQBrA2APDFQARCgi4FDQgrBhiVDYQhgCHg3BWQhIB1jjB5QgiAfjTBkQhvA0hYAwQhFAmhGBIQhaBdgpAoQhBA9g8AjQhqBXjJAGQgwAGgsAAQhfAAhIgag");
	this.shape_777.setTransform(607.7,1083.3);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#6699CC").s().p("AtpQzQiTgnhAhrQg5g+gRhcQgHhJgBgZQAAgcgTgjIguhWQhGiHgChyQgRhjgGiiIgGiUQAThxAbhbQATh+AuhvQBvjqFRgKQB9gHByAHQCJAIA6ATQDJACCzAFQCpgnExhoQD0hgCjgxQDCg1BYAuQBtAzASDAQAUCcixE/QgpBliYDcQhfCFg5BaQhKB3jcB2QgjAjjVBlQhsAyhcAyQhHAmhGBIQhYBagrAqQhCA/g7AiQhoBWjEAHQg3AIgxAAQhYAAhHgYg");
	this.shape_778.setTransform(607.6,1083.3);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#6699CC").s().p("AthQ0QiTglhBhpQg8g+gUhdQgHhJgCgbQAAgdgSgjIgthVQhFiFgChtQgThmgGihIgGiQQAVhwAfhmQAViAAuhyQBrjlFFgKQB8gIBzAGQCJAIA8ATQDGACCuAGQCrgmEuhkQDwhdCqg1QDEg4BaAsQBvAvAVC7QAWCZiqE7QgnBoibDiQhdCDg8BdQhLB4jVB0QgkAmjYBmQhoAxhhA0QhJAnhGBGQhWBYgtArQhCBBg7AiQhmBUi+AJQg9AJg3AAQhRAAhGgVg");
	this.shape_779.setTransform(607.5,1083.4);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#6699CC").s().p("AtZQ1QiUgjhBhnQg/g9gWhfQgIhIgCgeQAAgfgRghIgshVQhEiCgDhpQgVhogGigIgFiNQAXhwAjhwQAWiCAvh1QBnjfE4gMQB8gJB0AGQCJAIA9ASQDEADCoAGQCtgkErhgQDshbCxg5QDHg5BbAoQByAsAXC2QAZCWijE3QglBsieDmQhbCBhABhQhMB5jNByQglAojbBoQhlAwhlA1QhLAohGBFIiDCCQhEBCg5AjQhkBSi6AKQhBAMg9AAQhMAAhEgTg");
	this.shape_780.setTransform(607.4,1083.4);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#6699CC").s().p("AtQQ3QiVgihChlQhCg8gXhgQgKhIgCggQAAgigQggIgshTQhDiAgChlQgYhqgFigIgGiIQAahwAnh7QAXiDAvh4QBkjZErgOQB7gKB1AGQCJAHA/ASQDCADCiAHQCvgiEnhcQDphaC4g7QDKg8BcAlQB1AoAZCxQAcCTibE0QglBuihDsQhZB+hCBlQhOB7jGBwQgmArjdBpQhhAuhqA3QhOAphFBDIiCCCQhGBEg4AiQhjBRi0ALQhHAOhCAAQhHAAhBgQg");
	this.shape_781.setTransform(607.3,1083.4);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#6699CC").s().p("AtIQ4QiVghhDhiQhGg8gZhhQgKhIgCgiQAAgjgQgfIgrhSQhCh+gChiQgbhsgFieIgFiFQAdhvAqiHQAZiEAvh7QBhjUEdgOQB7gLB3AFQCIAHBBARQC/AECeAIQCwghEkhYQDlhYC+g/QDOg+BdAjQB3AkAbCsQAgCQiVEwQgiByikDwQhYB8hFBpQhPB8i/BtQgnAvjfBqQhfAthtA4QhQAqhFBCIiDCBQhGBGg4AiQhgBQivAMQhMARhHAAQhDAAg/gPg");
	this.shape_782.setTransform(607.3,1083.5);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#6699CC").s().p("AtAQ5QiWgfhDhgQhKg7gahjQgMhHgCglQAAglgPgeIgqhRQhAh7gDheQgdhugFieIgFiBQAfhvAuiRQAbiGAvh+QBdjOERgQQB6gMB4AFQCIAHBDARQC8AECZAIQCygfEghTQDihXDFhCQDQhABeAgQB6AhAeCmQAiCNiNEsQghB1inD1QhWB6hIBtQhQB9i4BrQgoAyjiBrQhbArhyA7QhSArhFBAQhRBPgxAyQhIBHg3AiQheBOiqANQhPAUhNAAQg/AAg9gNg");
	this.shape_783.setTransform(607.2,1083.5);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#6699CC").s().p("As4Q6QiWgehEhdQhNg7gchkQgNhHgCgnQAAgngOgdIgphPQhAh6gDhaQgghvgEidIgFh+QAihuAxicQAciIAwiBQBajIEDgRQB6gNB5AFQCIAGBFAQQC6AFCTAJQC0geEchPQDfhVDLhFQDUhDBfAdQB8AeAhChQAlCKiHEoQgfB4iqD6QhUB4hLBxQhSB+iwBpQgqA1jjBtQhYAph2A8QhVAshEA/QhQBNgzAzQhJBJg1AiQhdBNikAOQhUAXhSAAQg8AAg6gMg");
	this.shape_784.setTransform(607.2,1083.6);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#6699CC").s().p("AswQ7QiXgchEhbQhRg7gehlQgNhHgDgpQAAgpgNgcQgZgygPgcQg/h3gEhWQghhygEicIgFh6IBakVQAdiJAwiEQBWjCD2gTQB6gOB6AFQCIAGBGAQQC4AECOAKQC2gcEZhLQDahTDThJQDWhEBgAaQB/AaAjCcQAoCGh/EmQgeB6itEAQhSB1hOB1QhTB/ipBnQgrA3jmBvQhUAoh7A9QhXAthEA+QhOBKg0A1QhKBLg1AhQhbBMifAPQhXAahZAAQg3AAg4gKg");
	this.shape_785.setTransform(607.1,1083.6);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#6699CC").s().p("AspQ8QiXgahFhYQhUg7gfhmQgPhHgDgrQAAgrgMgbQgYgxgQgcQg9h1gEhSQgkh0gEibIgEh3QAmhtA5ixQAfiLAwiHQBTi9DpgUQB5gPB8AFQCHAFBJAQQC1AFCIAKQC4gbEVhGQDYhRDZhMQDZhHBhAXQCCAWAmCYQAqCDh4EhQgcB+iwEEQhRB0hRB4QhUCBihBkQgtA7joBwQhRAmh/A/QhZAuhEA9QhNBHg1A3QhMBMgzAiQhZBKiaAQQhaAdhfAAQg0AAg2gJg");
	this.shape_786.setTransform(607.1,1083.6);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#6699CC").s().p("AshQ9QiYgZhFhVQhXg6gihoQgPhGgDguQAAgtgMgZQgWgvgQgdQg9hzgEhOQgnh2gDiaIgEhzQAphtA9i9QAgiMAwiKQBQi3DcgVQB4gQB9AEQCHAFBKAPQCzAGCDALQC6gZEShDQDUhPDfhQQDdhJBiAVQCEASAoCTQAuCAhxEdQgbCCizEJQhPByhUB7QhVCCiaBiQguA+jqBxQhOAliDBBQhcAuhDA8QhMBFg2A4QhNBOgzAiQhXBIiVASQhdAghkAAQgxAAg0gIg");
	this.shape_787.setTransform(607.1,1083.7);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#6699CC").s().p("AsZQ+QiYgXhGhUQhbg5gjhpQgRhGgDgwQAAgvgLgYQgVgtgQgeQg8hxgEhKQgph4gEiZIgEhvQAthtBAjHQAiiOAwiNQBMixDPgXQB4gRB+AEQCHAFBMAPQCwAFB+AMQC8gXEOg/QDQhNDmhTQDghLBkARQCGAPArCOQAwB8hqEaQgZCFi1EOQhOBwhXB/QhXCDiSBgQgvBBjtByQhLAjiGBDQhfAwhDA5QhKBEg4A5QhOBQgxAhQhVBIiQATQhgAjhqAAQgvAAgxgHg");
	this.shape_788.setTransform(607,1083.7);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#6699CC").s().p("AsRQ/QiZgVhHhRQheg5glhqQgShGgDgyQAAgxgKgXQgUgrgRgfQg6hugFhHQgrh6gEiYIgDhsQAvhsBEjSQAjiPAwiQQBJisDCgYQB3gSCAAEQCGAEBOAPQCuAGB5AMQC9gWELg6IG5iiQDjhNBlAOQCJAMAtCJQAzB5hjEWQgXCIi5ESIimDxQhXCEiMBfQgwBDjvB0QhIAiiKBEQhhAwhDA5QhJBBg4A7QhQBSgxAhQhTBGiKAUQhiAmhxAAQgsAAgugGg");
	this.shape_789.setTransform(607,1083.7);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#6699CC").s().p("AsKRAQiagUhGhOQhig4gnhsQgShFgEg1QAAgzgJgWQgTgpgRgfQg6htgFhCQgth8gDiYIgEhpQAyhrBIjcQAkiRAxiTQBFimC1gZQB3gTCBADQCFAEBQAOQCsAGBzAOQC/gVEIg2IG8ijQDmhQBmAMQCLAIAwCEQA2B1hcETQgVCLi8EYIinDyQhZCGiEBbQgxBHjyB1IjTBmQhjAyhDA3QhIA+g5A9QhRBUgwAgQhRBFiGAVQhkAqh3AAQgqAAgrgFg");
	this.shape_790.setTransform(607,1083.8);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#6699CC").s().p("AsDRCQiagThIhMQhlg3gohtQgUhFgEg4QABg0gJgVQgRgngSggQg5hqgFg/Qgwh+gDiXIgDhlQA0hrBMjnQAmiTAxiVQBCihCogaQB2gUCCADQCFAEBSANQCpAHBuAOQDBgTEEgyIHAilQDohSBnAJQCPAFAyB+QA5BzhVEPQgUCOi/EcIioD0QhbCHh8BaQgyBJj0B3IjVBmQhlAzhEA1QhFA9g7A+QhSBVguAhQhQBDiAAWQhnAuh+AAQgmAAgpgEg");
	this.shape_791.setTransform(607.1,1083.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#6699CC").s().p("Ar8RDQibgRhIhKQhpg3gphuQgVhFgEg6QAAg2gIgUQgPglgTghQg3hogGg6QgyiAgDiWIgDhiQA3hqBPjyQAoiVAxiYQA+ibCbgcQB1gVCEADQCFAEBUANQCmAGBpAPQDDgREAguQDChGEBhgQDshUBoAGQCRABA1B5QA7BvhOEMQgSCRjBEiIiqD1QhcCIh1BYQg0BMj2B4IjVBnQhoAzhDA0QhEA6g8BAQhUBXgtAhQhNBBh8AYQhoAxiGAAQgjAAgmgDg");
	this.shape_792.setTransform(607.1,1083.8);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#6699CC").s().p("Ar1REQibgPhJhHQhsg3gshvQgVhFgFg8QABg4gIgTQgOgjgTgiQg2hmgGg2Qg1iCgCiVIgDhfQA5hpBTj9QApiWAyicQA7iVCNgdQB1gWCGADQCEADBWANQCkAHBjAPQDFgQD9gpQC+hFEIhjQDuhWBpADQCUgDA3B1QA/BshHEIQgQCUjFEmIirD4QhdCJhuBVQg1BQj4B5IjXBnQhqA0hDAzQhCA3g9BBQhVBagtAgQhLBAh2AZQhrA1iNAAQggAAgjgDg");
	this.shape_793.setTransform(607.2,1083.8);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#6699CC").s().p("AruRGQicgOhJhFQhwg2gthwQgXhFgEg+QAAg6gGgSQgNghgUgiQg1hkgGgzQg3iEgCiUIgDhbQA8hpBXkIQAqiXAxifQA4iPCBgeQB0gXCHACQCEADBXAMQCiAIBeAQQDHgOD5gmQC7hDEOhmQDyhZBqAAQCWgGA6BwQBBBpg/EEQgPCXjIEsIisD5QhfCKhmBTQg2BTj7B6IjXBnQhtA1hCAyQhBA1g/BDQhWBbgrAgQhKA/hxAZQhsA5iWAAQgdAAgfgCg");
	this.shape_794.setTransform(607.2,1083.8);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#6699CC").s().p("ArnRIQidgMhKhDQhzg2gvhxQgYhFgEhAQAAg8gGgRQgLgfgUgjQg0higGguQg6iHgCiTIgChXQA+hpBbkSQAriZAyiiQA0iJB0ggQB0gYCIACQCDACBaAMQCfAIBYARQDJgND2ghQC3hBEVhqQD1hbBrgDQCZgJA8BqQBEBmg4EAQgNCbjLEwQhCBhhsCaQhfCMhgBQQg3BWj9B8IjYBnQhvA2hCAwQhAAzhABEQhXBdgqAgQhIA+hsAaQhuA9idAAQgbAAgbgBg");
	this.shape_795.setTransform(607.3,1083.8);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#6699CC").s().p("ArhRKQidgLhKhAQh3g1gxhzQgYhEgFhDQAAg+gFgQQgKgcgUglQg0hfgGgrQg8iIgCiTIgChTQBBhoBekeQAtiaAyilQAxiEBnghQBzgZCJACQCEACBbALQCdAJBSARQDLgLDzgdQC0g/EbhuQD4hcBsgGQCbgNA/BlQBHBjgxD8QgMCejNE2IivD8QhhCNhYBOQg4BZkAB9IjZBnQhxA3hCAvQg/AxhBBFQhYBfgqAgQhFA8hnAcQhwBBimAAIgvgBg");
	this.shape_796.setTransform(607.4,1083.7);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#6699CC").s().p("ArbRLQiegJhKg+Qh7g0gyh1QgahDgFhFQABhAgFgPQgIgbgVglQgzhdgGgnQg/iKgBiSIgChQQBDhnBjkpIBglDQAuh+BZgjQBzgaCKACQCEACBcAKQCbAJBNASQDOgJDugZQCwg9EjhxQD6hfBugJQCdgRBCBhQBKBfgrD5QgKChjQE6Qg/BdhxChQhjCOhQBNQg6BbkBB+IjbBoQhzA4hCAuQg9AuhCBHQhaBggoAgQhEA7hiAdQhwBFivAAIgpgBg");
	this.shape_797.setTransform(607.6,1083.7);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#6699CC").s().p("ArVRNQiegHhMg8Qh9g0g0h2QgbhDgFhHQAAhCgDgOQgHgYgWgnQgyhagGgjQhBiNgBiQIgChMQBGhoBmkzIBilIQAqh4BNgkQBygbCMABQCCACBfAKQCYAJBIATQDQgIDqgVQCtg7Eph1QD9hhBvgLQChgVBDBcQBNBcgjD1QgICkjUFAQg9Bah1ClQhjCPhJBKQg7BfkECAIjbBoQh2A4hBAtQg8AshDBIQhbBigoAgQhCA5hcAeQhyBKi3AAIgjgBg");
	this.shape_798.setTransform(607.7,1083.7);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#6699CC").s().p("ArQRPQiegGhMg5QiBgzg2h3QgchDgFhKQAAhEgDgNQgFgWgWgnQgxhYgHggQhDiOgBiQIgChIQBJhoBqk9QAxifAziuQAmhzBAglQBxgcCNABQCDACBgAJQCWAKBDATQDRgGDngRQCqg5Evh4QEAhjBwgPQCjgXBHBWQBPBZgcDxQgHCnjWFFQg7BYh4CpQhlCQhCBIQg7BikHCBIjcBoQh4A6hBArQg7AphEBLQhdBjgmAgQhAA4hXAfQhzBOjAAAIgdgBg");
	this.shape_799.setTransform(607.9,1083.6);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#6699CC").s().p("ArKRSQifgFhNg3QiEgzg4h4QgdhDgFhMQAAhFgCgNQgEgTgXgpQgvhWgHgbQhGiQgBiQIgBhEQBLhoBtlIQAzigAzixQAjhtAygmQBygdCOABQCCAABjAKQCTAKA9AUQDUgFDjgMQCmg4E2h7QEDhmBygRQClgbBJBRQBSBVgVDvQgFCpjZFKQg6BWh7CtQhmCRg6BGQg9BlkJCCIjdBpQh7A6hAAqQg5AnhGBMQheBlglAgQg+A2hSAhQh0BSjKAAIgVAAg");
	this.shape_800.setTransform(608.1,1083.6);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#6699CC").s().p("ArFRUQiggDhNg1QiIgyg5h6QgehCgGhOQABhIgCgLQgDgSgXgpQguhUgIgXQhIiSAAiPIgBhBQBOhnBxlTQA0ihAzi0QAghnAlgoQBwgeCQAAQCCABBkAJQCRAKA4AVQDWgDDfgJQCjg2E9h+QEGhoBygUQCogfBLBNQBWBSgODqQgECtjcFPQg4BTh+CxQhnCTgzBEQg+BnkLCEIjeBoQh+A8hAAoQg3AlhHBNQhfBoglAfQg8A1hNAhQh1BXjTAAIgOAAg");
	this.shape_801.setTransform(608.4,1083.5);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#6699CC").s().p("ArBRWQihgBhNgyQiMgyg6h7QgfhCgGhRIAAhTQgCgQgXgqQguhRgIgUQhKiUAAiOIgBg9QBQhnB1ldQA2ikAzi2QAchiAYgpQBwgfCSAAQCBAABmAJQCOAKAzAWQDXgCDcgEQCfg0FEiCQEJhqB0gXQCqgiBOBHQBYBPgHDnQgBCwjgFUQg2BRiBC0QhoCVgsBBQhABrkNCFIjfBoQh/A8hAAoQg3AihIBPQhgBpgkAfQg6A0hIAiQh1BbjdAAIgHAAg");
	this.shape_802.setTransform(608.7,1083.4);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#6699CC").s().p("AusQpQiPgxg8h8QgghCgGhTIAAhUQAAgOgYgrIg0hfQhNiWAAiNIgBg6QBThmB5loQA3ilAzi6QAZhcALgrQBwgfCSAAQCBAABoAIQCMAKAtAXIGyAAQCcgzFKiFQEMhsB1gaQCtgmBQBDQBbBLAADjQAAC0jiFYQg1BPiDC5QhqCVglA/QhABukQCGIjgBpQiCA9g/AmQg1AghKBRQhhBrgjAfQg4AyhDAjQh1BgjoAAQihAAhOgwg");
	this.shape_803.setTransform(609,1083.3);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#6699CC").s().p("AusQpQiPgxg8h8QghhCgGhTIABhUQAAgOgYgrIg0hfQhOiWAAiNIAAg6QBThmB5loQA2ilA0i6IAkiGQBvggCTAAQCBAABoAIQCMAKAtAXIGyAAQCbgzFLiFQEMhsB1gaQCtgmBQBDQBbBLAADjQAAC0jiFYQg1BPiDC5QhqCVglA/QhBBukPCGIjgBpQiCA9g/AmQg1AghKBRQhiBrgiAfQg5AyhCAjQh2BgjnAAQihAAhOgwg");
	this.shape_804.setTransform(609.1,1083.3);
	this.shape_804._off = true;

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#6699CC").s().p("AhWEcIgdgCQgpgDghgHQgVgFgRgHQgLgEgJgDIgPgFQgPgHgNgFQgpgTgagaQgOgPgKgRQgHgNgFgNQgJgbgCgZIABgnIAAgOQABgYAEgVQARhaBQg8QATgOAVgNIAPgJIAvgWQA3gXA+gNQAxgMA5gGIAlgDQBAgEA0AJQAoAFAhAOQAdAMAZATIASAPQA/AxAOBMQAIAigEArIgBAKQgGAlgQAiQgTAogtAoIgKAJQgXAUghATQgbAQgcAMIgsASQgaALgaAGIgpAKQguAKg2ACIgWAAIgWAAg");
	this.shape_805.setTransform(547.1,1166.1);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#6699CC").s().p("AhsE5QgRgBgPgCQgsgFgjgMQgUgHgSgJQgKgHgJgDQgGgCgJgFQgQgKgNgFQgrgYgYgfQgOgPgJgVQgHgOgFgPQgJgggCgYIABgqIABgQQAAgZAGgXQAVhiBdg6QAVgNAYgMIAQgIIA1gVQA8gWBEgMQA0gNBAgKIAogEQBIgIA2AHQAtAEAjAQQAfAOAYAYIASARQA9A2AEBWQAHAkgJAvIgCALQgJApgRAiQgVArgzArIgMAJQgXAUgnAWQgfASgeANIguAWQgdAOgaAHQgVAHgXAGQgxAMg8ACIgRAAIgfAAg");
	this.shape_806.setTransform(548.8,1163.2);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#6699CC").s().p("AiDFWQgTgBgQgDQgwgGgjgQQgVgKgRgMQgKgKgJgDIgPgJQgRgMgMgGQgtgdgYgiQgMgSgKgXQgHgPgEgRQgKglgBgYIABgtIABgQQABgcAGgaQAbhoBpg3IAygZIASgIIA6gSQBCgVBKgMQA3gOBGgNIArgGQBPgMA5AGQAyACAlASQAgAQAYAdQAJAJAIALQA7A7gFBfQAFAmgMAzIgDAMQgNAtgSAkQgXAtg6AtIgNAKQgXAUgtAYQgjAUgfAOQgXALgbAOQgfASgaAIQgXAJgYAGQgzARhEABIgNAAIgmgBg");
	this.shape_807.setTransform(550.6,1160.2);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#6699CC").s().p("AibF0QgUgCgRgDQg0gIgkgVQgWgMgQgPQgKgMgIgDIgQgLQgSgPgMgGQgugigXgnQgMgTgJgaQgHgQgFgTQgJgqgBgXIABgwIABgSQACgfAHgbQAfhvB2g1QAbgNAbgLIAVgHIA/gQQBIgVBPgLQA5gPBOgQIAugIQBXgQA7AFQA3ABAmATQAiASAYAiQAJAKAIAMQA4BAgOBqQADAngQA4IgEAMQgRAygSAkQgYAvhBAxIgPALQgXATgzAbQgnAVggAPQgYAMgdARQgiAVgbAJQgXALgaAHQg1AUhLABIgOAAIgpgBg");
	this.shape_808.setTransform(552.5,1157.2);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#6699CC").s().p("Ai1GSQgWgDgRgEQg4gKglgZQgWgOgQgRQgJgPgIgEQgGgEgKgJQgUgSgMgGQgvgngWgrQgLgUgJgdQgHgSgEgUQgJgvgCgXIABgzIABgTQADghAIgdQAjh2CDgzIA8gXIAWgGIBEgPQBOgTBVgLQA8gQBVgTIAxgKQBegUA+AEQA8gBAoAWQAjATAXAnQAJAMAIANQA2BFgXB0QABAogVA8IgEANQgVA2gTAlQgZAyhJA0IgPALQgXASg6AeQgqAXgiAQQgZANgfATQgkAZgbAKQgZAMgcAJQg4AXhRABIgNABQgYAAgWgCg");
	this.shape_809.setTransform(554.5,1154.2);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#6699CC").s().p("AjPGwQgXgDgTgFQg7gMgngdQgWgQgQgVQgIgRgIgEIgQgPQgVgUgMgHQgwgsgVgvQgLgWgJggQgGgTgEgVQgJg1gCgWIABg2IACgVQACgjAKgfQAnh9CQgxQAhgLAggKIAXgGIBKgMQBUgTBbgKQA+gSBcgWIA0gLQBmgYBAACQBBgCAqAXQAlAVAWAsQAJAOAHAOQA0BKggB+QgBApgZBBIgFANQgYA7gUAmQgbA0hPA3IgRALQgXAThAAgIhRAqQgbANggAXQgnAcgcALQgaAOgdAKQg7AZhYACIgLAAQgbAAgYgCg");
	this.shape_810.setTransform(556.6,1151.1);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#6699CC").s().p("AjqHOQgZgDgTgGQhAgOgnghQgXgTgPgXQgIgUgIgEIgQgRQgWgXgLgHQgygxgUgzQgLgYgIgjQgGgUgFgXQgJg6gBgVIABg6IACgWQADglALghQAriECeguIBFgUIAZgGQAzgHAbgDQBbgSBggKICkgsIA4gNQBtgbBCABQBGgEArAZQAnAXAXAxQAIAOAHARQAxBOgoCIQgEArgdBFIgFAOQgcA+gVAoQgcA2hXA6IgRAMQgYAShGAjIhWAtQgcAOgiAZQgqAggcAMQgbAPgfALQg+AdheABIgKABQgeAAgagDg");
	this.shape_811.setTransform(558.8,1148.1);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#6699CC").s().p("AkGHsQgagDgUgHQhEgPgogmQgXgVgPgaQgIgXgHgEIgRgTQgWgZgMgIQgzg1gTg4QgKgZgIgmQgGgVgEgZQgJg/gBgUIABg+IABgXQAEgoAMgiQAwiLCqgsIBKgTIAbgFQA3gHAcgBQBhgRBmgKICtgwIA7gPQB1gfBFAAQBKgGAuAbQAoAZAWA2QAIAQAHASQAvBTgxCRQgGAsghBKIgHAPQgfBDgWAoQgdA5heA8IgTANQgXAShMAmIhcAvQgdAPgkAbQgtAkgcANQgdARggAMQhAAghlABIgJAAQghAAgcgDg");
	this.shape_812.setTransform(561.1,1145);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#6699CC").s().p("AkhIKQgcgDgVgIQhHgRgpgqQgYgXgOgdQgIgagGgEIgSgVQgXgcgMgIQg0g6gSg8QgKgbgIgoQgFgXgFgaQgIhFgBgSQAAg1ABgNIABgZQAFgqANgkQA0iRC3gqIBPgSIAdgFQA7gGAdAAQBngQBsgJIC2g1IA+gQQB9gjBHgCQBPgHAvAdQAqAaAWA8QAIAQAGAUQAtBYg6CbQgIAuglBOIgHAQIg6BwQgfA7hkA/IgVANQgXAShSApIhhAxQgeAQgmAeQgvAogdANQgdATgjANQhDAkhrABIgJAAQgjAAgegEg");
	this.shape_813.setTransform(563.3,1141.9);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#6699CC").s().p("Ak9IpQgegEgWgJQhLgSgqgvQgYgZgOggQgHgcgGgFIgSgWQgYgfgMgJQg1g/gRhAQgKgcgHgsQgGgXgEgcQgJhJAAgTQAAg4ABgNIABgaQAFgtAPgmQA4iYDEgnQArgKApgHIAfgEQA/gFAeABQBsgQBxgIIDBg5IBCgSQCEgnBJgDQBUgJAxAfQAsAcAVBBQAIASAGAVQAqBchDCmQgKAvgpBSIgIARIg+B2QghA8hrBDIgVANQgYAShYArIhmA0QggARgnAhQgyArgdAOQgfAVgkAOQhGAnhyABIgIAAQglAAgggEg");
	this.shape_814.setTransform(565.6,1138.8);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#6699CC").s().p("AlYJIQgggFgXgKQhOgUgsgzQgYgbgOgjQgGgegGgGIgSgYQgaghgLgJQg3hEgQhFQgJgegHguQgFgZgEgdQgJhOgBgSIABhJIACgbQAFgvAQgoQA9ifDRglQAugJAqgHIAhgEQBDgEAfADQBzgPB2gIIDLg9IBEgUQCMgrBMgEQBZgLAzAiQAtAdAVBGQAHATAGAWQAoBihMCvQgMAxgtBXIgJARIhDB7QgiA/hyBGIgXAOQgYARheAuIhrA3QghARgpAkQg1AugcAPQghAXgmAPQhIAqh5ABIgJAAQgnAAgggEg");
	this.shape_815.setTransform(567.8,1135.7);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#6699CC").s().p("Al1JmQghgFgYgKQhSgWgsg3QgagegMgmQgHghgFgFQgEgHgPgTQgbglgKgJQg5hJgPhJQgIgfgHgxQgFgagEgfIgKhlIABhMIADgcQAGgyAQgpQBBimDegjIBegOIAigEQBHgDAgADQB5gNB8gIQBRgYCDgqIBIgVQCTgvBOgFQBegMA1AjQAuAfAVBLQAIAUAFAYQAlBnhUC5QgPAygxBbIgJASIhHCAQgkBBh5BJIgYAPQgYARhkAwQhGAjgqAXQgiASgsAmQg3AygdARQgiAXgoARQhLAth/ABIgIAAQgpAAgjgFg");
	this.shape_816.setTransform(570.2,1132.6);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#6699CC").s().p("AmRKEQgjgFgYgMQhXgXgtg8QgZgggNgoQgGgkgFgFQgEgIgPgUQgcgngKgKQg6hOgOhNQgIghgHgzIgIg9IgKhpIABhPIADgeQAGg0ASgrQBFisDrgiIBjgNIAjgDQBMgCAhAFQB/gNCCgHQBTgZCKgtIBLgYQCbgyBQgHQBjgOA3AmQAwAhAUBPQAHAWAFAZQAjBshdDDQgQAzg2BgIgKASQgyBYgZAuQglBDiABMIgaAPQgYARhqAzQhJAlgsAXQgkAUgtAoQg6A2gdARQgkAagpASQhOAviFABIgIAAQgsAAgkgFg");
	this.shape_817.setTransform(572.5,1129.6);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#6699CC").s().p("AmtKiQglgGgZgMQhagZgvhAQgagigMgrQgFgngFgFQgDgIgQgWQgdgqgLgKQg6hTgOhRQgHgjgHg2QgEgdgEgiIgJhuIABhTIADgeQAGg3ATgtQBKizD4gfQA2gHAxgFIAmgCQBQgCAhAGQCFgMCIgHQBWgZCRgxIBOgZQCig2BTgIQBogQA4AoQAyAjAUBUQAHAXAEAbQAhBwhmDNQgTA1g5BkIgLATQg2BcgaAvQgmBGiHBOIgbAQQgZAQhwA3QhNAlgtAZQglAUgvAsQg7A5geASQgmAbgrATQhQAziMABQgzAAgogGg");
	this.shape_818.setTransform(574.8,1126.5);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#6699CC").s().p("AnKLBQgmgHgbgMQhdgbgwhEQgaglgMguQgEgpgFgGQgDgIgQgYQgfgtgKgKQg8hXgNhWQgGgkgHg5QgEgegEgkIgJhyQAAhJABgOIADggQAHg4AUgvQBPi6EEgdQA5gHA0gEIAngCQBUAAAiAGQCLgLCOgGQBZgaCXg0IBRgbQCqg6BWgJQBtgRA5ApQA0AlATBZQAHAYAEAdQAfB0hvDYQgVA2g9BoIgMAUQg6BggbAwQgoBIiOBSIgcAQQgYAQh3A5QhQAngvAaQgmAVgxAuQg+A9geATQgnAcgtAVQhTA2iSABQg1AAgqgGg");
	this.shape_819.setTransform(577.2,1123.4);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#6699CC").s().p("AnnLfQgngGgcgOQhhgdgxhIQgagngMgxQgEgsgEgGQgDgIgRgaQgfgvgLgLQg9hcgLhZQgGgmgHg8IgHhFIgJh3QAAhMABgOIADghQAHg7AWgxQBSjAESgbQA8gGA1gEIApgBQBZAAAjAIQCRgKCTgGQBbgbCfg3IBUgdQCxg+BYgKQBygTA8ArQA1AnATBeQAGAaAEAdQAcB6h4DhQgWA4hCBsIgMAVQg+BkgbAyQgqBKiVBUIgdARQgZAQh8A8QhUApgwAaQgoAWgzAxQhABAgfAUQgoAeguAWQhWA5iZABQg3AAgsgHg");
	this.shape_820.setTransform(579.5,1120.3);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#6699CC").s().p("AoEL9QgpgHgcgOQhmgfgxhMQgbgpgLg0QgEgvgEgGQgDgJgRgbQgggygKgLQg/hhgLheQgFgngGg/IgIhHIgIh8QAAhPABgOIADgjQAIg9AWgzQBXjHEfgYQA+gGA4gDIAqgBQBdABAkAJQCXgJCagFQBegdClg6IBXgeQC5hCBagMQB3gUA9AtQA3AoATBjQAGAbAEAgQAZB+iADrQgZA5hGBxIgNAWQhBBogcAzQgrBMicBXIgfARQgZAQiCA/QhYAqgxAcQgpAWg1A0QhDBEgfAVQgqAfgwAXQhYA9igABQg5AAgtgIg");
	this.shape_821.setTransform(581.9,1117.3);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#6699CC").s().p("AogMcQgrgIgdgPQhpgggzhRQgcgrgKg3QgDgxgEgHQgCgJgSgcQgig1gKgLQhAhmgJhiIgLhrIgHhKIgJiAIABhhIAEgkQAIg/AYg1QBbjOErgWQBCgFA5gDIAsAAQBiACAlAKQCdgICfgFQBhgeCrg9IBbggQDAhGBdgNQB8gWA/AvQA4AqASBoQAHAdADAgQAXCEiKD1QgbA6hJB2IgOAWQhFBsgdA0QgsBOijBbIggASQgZAPiJBBQhcAsgyAdQgqAXg3A3QhGBHgfAWQgrAhgxAYQhbBAinABQg7AAgugIg");
	this.shape_822.setTransform(584.3,1114.2);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#6699CC").s().p("Ao9M7QgtgJgegQQhtgigzhVQgcgtgKg6QgDgzgEgHQgCgKgSgeQgjg3gKgMQhBhrgJhmIgKhvIgGhNIgJiFIABhkIAEglQAJhCAYg2QBgjVE4gUQBEgFA8gBIAugBQBmADAlAMQCjgIClgEQBkgfCyhBIBeghQDIhKBfgOQCBgYBBAxQA5AsASBtQAGAeADAiQAVCIiSD/QgdA8hOB6IgPAXQhIBwgeA1QguBRiqBeIghASQgZAPiPBEQhgAugzAdQgrAYg5A5QhJBLgfAXQgsAjg0AZQhdBDitABQg+AAgvgIg");
	this.shape_823.setTransform(586.7,1111.1);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#6699CC").s().p("ApaNZQgugIgfgRQhxgkg0haQgdgvgJg9QgDg2gDgHQgCgKgTgfQgkg6gJgNQhDhvgHhrIgKhzIgGhQIgJiJQAAhaABgOIAEgmQAKhEAag5QBkjbFFgSQBHgEA+gBIAvAAQBqAEAnANQCpgHCqgEQBnggC5hEIBhgjQDPhNBigQQCFgZBDAzQA7AtASByQAGAfACAkQATCNicEJQgfA9hRB+IgQAYQhMB0gfA3QgvBSixBhIgiATQgaAPiUBGQhkAwg1AeQgsAZg6A8QhMBOggAYQgtAlg1AaQhhBGizABQhAAAgxgJg");
	this.shape_824.setTransform(589,1108);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#6699CC").s().p("Ap3N3QgwgJgggRQh1gmg1heQgcgygKg/QgCg5gDgHQgCgLgTggIguhKQhEh0gGhvIgJh4IgHhTIgIiNQAAhdABgOIAEgoQAKhGAbg6QBojjFTgPQBJgEBAAAIAyAAQBuAFAnAOQCvgGCwgDQBqghC/hIIBlglQDXhRBkgRQCKgaBFA0QA8AwASB3QAFAgACAlQARCSikETQgiA/hWCCIgQAZQhQB4gfA3QgxBVi4BkIgjATQgaAPibBJQhnAyg3AfQgtAag7A+QhPBSghAZQguAmg3AbQhjBKi6AAQhCAAgygJg");
	this.shape_825.setTransform(591.5,1104.9);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#6699CC").s().p("AqUOWQgygKghgSQh4gng2hiQgeg1gIhCQgCg7gDgIQgBgLgUgiQgmg/gJgNQhGh6gFhzIgIh8IgGhVIgIiTQAAhgABgOIAEgpQALhJAcg8QBsjpFggNQBMgDBCAAIAzABQByAFAoAQQC2gFC2gDQBsgiDGhLIBognQDehVBngSQCPgcBGA3QA+AxASB8QAFAhACAnQAOCXitEcQgkBAhaCIIgRAZQhTB8ggA5QgzBXi+BnIglATQgaAPihBMQhrAzg4AgQguAbg+BAQhRBWghAaQgwAog5AcQhlBNjAAAQhFAAgzgJg");
	this.shape_826.setTransform(593.9,1101.8);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#6699CC").s().p("AqxO0QgzgJgigUQh8gpg4hmQgeg3gIhFQgBg+gCgHQgBgMgVgjIgwhQQhHh+gEh4IgIiAIgFhYIgIiXQAAhkABgOQABgWADgUQALhMAeg9QBwjwFtgLQBOgDBFABIA1ACQB2AGApARQC7gFC8gCQBvgjDNhOIBrgpQDmhYBpgUQCUgeBIA5QBAAzARCBQAFAjABAoQAMCbi2EnQgmBBheCMIgRAaQhYCBghA5QgzBZjGBqIgmAUQgaAPinBOQhvA1g5AhQgwAcg/BDQhUBZghAbQgyAqg6AdQhoBQjHAAQhGAAg1gKg");
	this.shape_827.setTransform(596.3,1098.7);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#6699CC").s().p("ArPPTQg0gKgjgVQiAgqg4hrQgeg5gIhHQgBhBgCgIQgBgMgVglIgxhTQhIiDgEh7IgGiFIgFhbIgIicQAAhmABgPQABgXADgUQAMhOAeg/QB1j3F6gJQBRgCBHABIA2ACQB7AIAqARQDBgDDCgCQBxgkDUhRIBugqQDuhdBrgVQCZggBKA7QBBA1ARCGQAEAkACAqQAJCgi/ExQgnBChjCQIgSAbQhbCFgiA6Qg1BcjNBtIgnAUQgaAOitBSQhzA2g6AiQgxAdhBBGQhXBcghAcQgzArg8AfQhrBTjNAAQhJAAg3gKg");
	this.shape_828.setTransform(598.7,1095.6);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#6699CC").s().p("ArsPyQg2gLgjgVQiEgtg6hvQgeg7gIhKQAAhDgBgJQgBgMgWgnIgyhVQhJiIgDiAIgGiJIgFheIgIigIABh5IAFgtQAMhQAghBQB5j9GHgHQBUgCBJADQAdAAAbACQB/AIArATQDHgDDHgBQB1glDahVIBxgrQD2hhBtgWQCeghBLA8QBEA3AQCLQAEAlABArQAHCljIE7QgpBEhnCVIgTAbQhfCJgiA8Qg2BejUBwIgpAVQgaANizBUQh3A4g7AjQgzAehCBIQhaBhgiAcQg0Atg9AgQhuBWjUAAQhLAAg4gKg");
	this.shape_829.setTransform(601.1,1092.5);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#6699CC").s().p("AsJQQQg3gMglgVQiIgug6h0Qgfg9gHhOQAAhFgBgJQgBgNgWgoIgzhYQhKiNgCiEQgBg2gEhYIgFhgIgIilQAAhuABgOIAFguQANhTAhhDQB+kEGTgEQBXgBBLACIA6ADQCDAJArAUIGbgCQB3gnDhhXIB0guQD9hkBwgYQCjgiBNA+QBFA4AQCRQAEAmABAtQAECqjQFEQgsBGhqCZIgUAcQhjCNgjA9Qg4BgjbBzIgqAVQgaAOi5BWQh7A6g8AkQg0AehFBLQhcBkgiAeQg2Aug/AhQhwBajaAAQhNAAg6gLg");
	this.shape_830.setTransform(603.5,1089.5);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#6699CC").s().p("AsmQuQg6gLglgXQiLgwg8h4Qgfg/gHhQIAAhSQAAgNgYgpIgzhcQhMiSgBiIIgEiSIgFhjIgHiqQAAhwABgPQACgZADgXQANhUAihFQCCkLGggCQBagBBNAEQAfABAdACQCHAKAtAVIGmgBQB6goDohbIB3gvQEFhoBygZQCogkBOBAQBHA6APCWQAEAnABAuQACCvjaFPQgtBHhvCdIgVAdQhmCRgkA+Qg5BijiB2IgrAWIjaBnQh+A7g+AlQg0AfhHBOQhfBogjAeQg3AwhAAiQhzBdjhAAQhQAAg6gMg");
	this.shape_831.setTransform(605.9,1086.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_742}]}).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773}]},1).to({state:[{t:this.shape_774}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_776}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_778}]},1).to({state:[{t:this.shape_779}]},1).to({state:[{t:this.shape_780}]},1).to({state:[{t:this.shape_781}]},1).to({state:[{t:this.shape_782}]},1).to({state:[{t:this.shape_783}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_785}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_788}]},1).to({state:[{t:this.shape_789}]},1).to({state:[{t:this.shape_790}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_792}]},1).to({state:[{t:this.shape_793}]},1).to({state:[{t:this.shape_794}]},1).to({state:[{t:this.shape_795}]},1).to({state:[{t:this.shape_796}]},1).to({state:[{t:this.shape_797}]},1).to({state:[{t:this.shape_798}]},1).to({state:[{t:this.shape_799}]},1).to({state:[{t:this.shape_800}]},1).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_802}]},1).to({state:[{t:this.shape_803}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_803}]},1).to({state:[]},1).to({state:[{t:this.shape_742}]},104).to({state:[{t:this.shape_805}]},1).to({state:[{t:this.shape_806}]},1).to({state:[{t:this.shape_807}]},1).to({state:[{t:this.shape_808}]},1).to({state:[{t:this.shape_809}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_811}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_815}]},1).to({state:[{t:this.shape_816}]},1).to({state:[{t:this.shape_817}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_819}]},1).to({state:[{t:this.shape_820}]},1).to({state:[{t:this.shape_821}]},1).to({state:[{t:this.shape_822}]},1).to({state:[{t:this.shape_823}]},1).to({state:[{t:this.shape_824}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_828}]},1).to({state:[{t:this.shape_829}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_771}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_804).wait(62).to({_off:false},0).wait(9).to({_off:true},1).wait(134));

	// reds mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egp0A3gMAAAhu/MBTpAAAMAAABu/g");
	var mask_graphics_36 = new cjs.Graphics().p("Egp0A3gMAAAhu/MAkCAAAIAAAHQgBAyC4EdQCzEVAlAaQAvAiDMB4QCeBeA3A3QAZAZDgCEQBBAmAvAgICBB7QA8BqC0DOQB4CKBEBRIATAcQAoA8AiAwIAfBOQAzB2A+BYQBxCfCXBHQDRDdB3AAQAmAAAYgeQAOgTAXgqIA+BAQBFBIBBA6QBPBHA/ArMAAABBagEgBOg1UQgvhYgbgkIgGgPIAMAAQAYBJBMBvQgRgWgPgXg");
	var mask_graphics_40 = new cjs.Graphics().p("EAAWA1xMgqKAAAMAAAhu+MAkCAAAIAAAHQAAAiBWCRQAGAmANAcQARAlAuAtIAbAaQCpEDAjAZIAYAQIAVAtQAuBfAlA9QB6DHB4AAQATAAAYgMIAhgSQAZAuBQBQQBdBcAMAPQAmAwB9BIQCMBQAXAWIEOD3QBRBGA9AtIAHAJQAoA9AiAvIAfBPQAzB1A+BZQBxCfCXBGQDRDeB3AAQAmAAAYgfQAOgSAXgrIA+BBQBFBHBBA6QBPBHA/AsMAAABBZIuiAAQihDdnOABQr5gBlVjdg");
	var mask_graphics_48 = new cjs.Graphics().p("EABYA1xMgrMAAAMAAAhu+MAkCAAAIAAAHQAAAiBWCRQAGAmANAcQARAlAuAtIAbAaQCpEDAjAZIAYAQIAVAtQAuBfAlA9QB6DHB4AAQATAAAYgMIAhgSQAPAbAiAnQhBgJABBnQgBBgEBDBQBYBDCEBYIC/B+QA8ApFPEVIAvAnQAlBIAqA8QBxCfCXBGQDRDeB3AAQAmAAAYgfQAOgSAXgrIA+BBQBFBHBBA6QBPBHA/AsMAAABBZI0kAAQiZDdjyABQoUgBlajdg");
	var mask_graphics_54 = new cjs.Graphics().p("EACXAyMMgsLAAAMAAAhu/MAkCAAAIAAAHQAAAiBWCRQAGAmANAcQARAmAuAsIAbAaQCpEEAjAZIAYAPIAVAuQAuBeAlA9QB6DHB4AAIABAAIgBAGIAPAwQASA5AVAvQA8CABBAUQA4A0BSA+QBYBCCEBYIC/B/QA8AoFPEVIAvAnQAlBJAqA7QBxCfCXBGQDRDeB3AAQAmAAAYgfQAOgSAXgrIA+BBQBFBIBBA5QBPBHA/AsMAAABBaIu+AAQgLA+glBVQg5CAhcBxQjuEkktAAQnGAAl6qog");
	var mask_graphics_98 = new cjs.Graphics().p("EABYA1xMgrMAAAMAAAhu+MAkCAAAIAAAHQAAAiBWCRQAGAmANAcQARAlAuAtIAbAaQCpEDAjAZIAYAQIAVAtQAuBfAlA9QB6DHB4AAQATAAAYgMIAhgSQAPAbAiAnQhBgJABBnQgBBgEBDBQBYBDCEBYIC/B+QA8ApFPEVIAvAnQAlBIAqA8QBxCfCXBGQDRDeB3AAQAmAAAYgfQAOgSAXgrIA+BBQBFBHBBA6QBPBHA/AsMAAABBZI0kAAQiZDdjyABQoUgBlajdg");
	var mask_graphics_101 = new cjs.Graphics().p("EAAWA1xMgqKAAAMAAAhu+MAkCAAAIAAAHQAAAiBWCRQAGAmANAcQARAlAuAtIAbAaQCpEDAjAZIAYAQIAVAtQAuBfAlA9QB6DHB4AAQATAAAYgMIAhgSQAZAuBQBQQBdBcAMAPQAmAwB9BIQCMBQAXAWIEOD3QBRBGA9AtIAHAJQAoA9AiAvIAfBPQAzB1A+BZQBxCfCXBGQDRDeB3AAQAmAAAYgfQAOgSAXgrIA+BBQBFBHBBA6QBPBHA/AsMAAABBZIuiAAQihDdnOABQr5gBlVjdg");
	var mask_graphics_105 = new cjs.Graphics().p("Egp0A3gMAAAhu/MAkCAAAIAAAHQgBAyC4EdQCzEVAlAaQAvAiDMB4QCeBeA3A3QAZAZDgCEQBBAmAvAgICBB7QA8BqC0DOQB4CKBEBRIATAcQAoA8AiAwIAfBOQAzB2A+BYQBxCfCXBHQDRDdB3AAQAmAAAYgeQAOgTAXgqIA+BAQBFBIBBA6QBPBHA/ArMAAABBagEgBOg1UQgvhYgbgkIgGgPIAMAAQAYBJBMBvQgRgWgPgXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1122.7,y:1005.6}).wait(36).to({graphics:mask_graphics_36,x:1122.7,y:1005.6}).wait(4).to({graphics:mask_graphics_40,x:1122.7,y:1016.7}).wait(8).to({graphics:mask_graphics_48,x:1122.7,y:1016.7}).wait(6).to({graphics:mask_graphics_54,x:1122.7,y:1039.6}).wait(44).to({graphics:mask_graphics_98,x:1122.7,y:1016.7}).wait(3).to({graphics:mask_graphics_101,x:1122.7,y:1016.7}).wait(4).to({graphics:mask_graphics_105,x:1122.7,y:1005.6}).wait(101));

	// REDS
	this.instance = new lib.leftchambers();
	this.instance.parent = this;
	this.instance.setTransform(906,731);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#97233A").s().p("AkNH4QgegVgGhJQgCggADgnIADgiQAAg7gMhoQgNhpAAgaQAAhRAogWQAIgEAIgCQAggGApAcQA0AkAkBHQApBQAABbQAABIglBkQg0CKhTAAQgQAAgNgIgAB9htQhUgkhOhnIgJgMQgpg2ghhAQgagyAAgHQAAhcBAATQA+ATA4BnQA4BjCBAqQA8ATAQAKQAaARADAfIABALQAAAegTAQQgaAVhEAAQgtAAgsgTg");
	this.shape_832.setTransform(951.6,996.8);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#A22545").s().p("ACbCsQgQgKg7gTQiBgqg4hjQg5hmg+gTQhAgTAABcQAAAHAbAxQAgBAApA2IAJAMIghgXQgsgagXg7QgRgqAAgsIABgOQACgWAKgfQAQgwAbgaQANgMAOgGQAYgKAcAIQA0ARBBBTQAdAlA9AcQAgAOBSAaQBFAWAbAQQApAYAAAjQAAAWhOBOQgSASgQAPQgEgfgagRg");
	this.shape_833.setTransform(965.8,957.9);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#A73046").s().p("EAN/A1OQgagoABgqQgBgZAEgVQhthHiqh3QmikmiuibQijiRjjjgQjrjniOieQkZk8kaltQnnp1AAi8QAAg7AkgyQAkgxA0gNQA6gNA5AnQBBAuAxBtQAlBTBLB7QBJB4BIBhQCOC9DpDgQCHCEEqEQQBYBTBvB9IC6DTQDkD8DlCTQC5B4DqCGIBdA2QBWhUAjglQA/hDALgcQAAhSAjiaQAjicAAg+QAAg6gyibIAAttQAFgQgFgPIAAsxQACguAnhcQAshpA6hFIABgDIhKgxIgJBPQgIA4gRAlQgwBuiNgBQitAAgkjCQgLg9AEhJIAGg/QAAkMCkj/QCPjdDaiUQA3glAzgbIAZhUQAxioAAg+QAAiOg/jQQhWkfiojpQjYkulGiqQmKjNoVAAQiWgBg3hZQgRgdgGghIgCgcQAAgwAJgXQAMggAigTQA2gdCPgIIAAABQAAACBlgEQCDABCGAVQG7BKF4EZIFPD7QCuCLBCBrQCTDvBYELQBcEWAADoQAAAbgLBRQgKBVgRBLQA8AqABBpQAABmioBiQgbARiABEQhmA1g4AnQAUAZCCD8QCAD2AAAHQAAA1gtA4IAAAAIAUAcQAFAeAVArQAMAYAcAyQAxBfgPA8QgOA2gCBjQgBA2ACBJQAADlAjDWQATB1A5D1QA2DnAXCaQAiDwABERQAABFgcCJQgiCrg8CSQBJAHA3AoQBJA3ABBZQAABPgrBcQgwBmhTBTQjPDPlCAAQgZAAhoAZQhoAZgYAAQh1AAgwhLgABgCbQgng8gdh1QgciJgPg9QgZhogegiQiTisiChcQhLg0hegnQhFgcgRgaQgFgIgEgMQgUAXgYAVQihCTjLAAQiHABhphfQAsATAtAAQBEAAAbgVQATgQAAgeIgBgLQAQgOASgSQBOhPAAgVQAAgkgpgYQgbgQhFgWQhSgagggPQg+gbgdgmQhBhTg0gQQgOgPgSgQIgUAgQgOAGgNAMQgbAagQAwQgKAfgCAXQhjDEgRCiQgJACgIAEQgoAWAABSQAAAbANBoQANBpAAA6IgEAiQgDAnACAgQAGBKAfAUQg2B8iTAAQh4ABghhjQgKgggBgnIABgjQAAl2BuljQBfkwCVjUQCJjEBqgNQBHgJAZBRQBQApBUBjQAvBBBzCKQBgB7APBNQAFgDAwg+QA+g8BOgBQA8AAAoAcQAOgqARgeQBWiMCMC4QANAUAGAgQACARADAlQAIBDAzAZQBtA2A0gIIAsgMQAegJAfAAQDbAABtFzQA2C6AKC/QAAATAHBJQADBKgJA1QgcCiibAAQhMAAgyhMg");
	this.shape_834.setTransform(1090.1,1054.9);

	var maskedShapeInstanceList = [this.instance,this.shape_832,this.shape_833,this.shape_834];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.instance}]}).wait(206));

	// blues mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_36 = new cjs.Graphics().p("Eg5kBp9QgSg/AJhNIAAAAIANhFIAAAAQmIkVjPleIAAAAQipkdhMmIIAAAAQgdiUgYjOIAAAAIgolqIAAAAQg0nFhZkgIAAAAQhjlAhMmIIAAAAQg8k5g0mLIAAAAQgSiQgGjLIAAAAQgEh4AAjnIAAAAQAAiThcj0IAAAAIhAipIAAAAQgdhWAAgwIAAAAQAAgaADgfIAAAAQCYg0ClnFIAAAAQA7ijBLj+IAAAAQBWknAKgcIAAAAIAADRQgiCEgJC0IAAAAQgEBMAADhIAAAAQAAAuAEA6IAAAAQAGBzARBfIAAAAIADAPIAAAAQAsDkBdAuIAAAAQAYALAaAAIAAAAQBcAAAZhPIAAAAQAHgXAAhGIAAAAQAAhPgXluIAAAAQgXluAAh9IAAAAQAAinCGmsIAAAAQBdkmBejwIAAAAQBajiEvmMIAAAAIBEhYIAAAAQCrjWA9hOIAAAAQBkiAAAgYIAAAAQAAhGgXgfIAAAAIgBgBIAAAAIABABIAAAAQAXAfAABGIAAAAQAAAYhkCAIAAAAQg9BOirDWIAAAAIhEBYIAAAAQgGghgEgnIAAAAQgMhhgCh1IAAAAIAAhkIAAAAIgCgSIAAAAQBFhGA3gwIAAAAIACgBIAAAAIgCABIAAAAQg3AwhFBGIAAAAQgqArgvAyIAAAAQhnBugEAAIAAAAQhKAAjahVIAAAAIhogoIAAAAQAIguA4h7IAAAAQBBiOAAgJIAAAAQAAgchyh5IAAAAIj5kCIAAAAQlsl7AAh0IAAAAQAAhGCOiNIAAAAIBhheIAAAAQAsgsAAgLIAAAAQAAhHglhiIAAAAQgth5gQhoIAAAAQhcAKhdAAIAAAAQmhAAiTjSIAAAAQguhDgOhQIAAAAIgFhJIAAAAQAApsHIpyIAAAAQDKkVEPj0IAAAAQEDjqEiiwIAAAAQEeiuEShbIAAAAQEYheDjAGIAAAAQDuAGCVB1IAAAAQChB9ArDyIAAAAQFNAtCWBUIAAAAQB5BFAQBrIAAAAQAGApgIA3IAAAAQgEAhgNBAIAAAAQgVB3AjA/IAAAAQFYADBPC1IAAAAQAfBFgOBVIAAAAQgMBJgnA9IAAAAQDhgbBYAIIAAAAQA8AFAYAeIAAAAQAeAnAhAMIAAAAQBFAZCyAAIAAAAQC8AABVBbIAAAAQA8A/AYCHIAAAAIAQBqIAAAAQALA7APAiIAAAAQAnBaBsAAIAAAAQAxAAEUhoIAAAAQEUhoAEAAIAAAAQDtAAAzDDIAAAAQAbBogcB6IAAAAQB4g4HejAIAAAAQJTjuIzjPIAAAAQaNpoHNAAIAAAAQDbAABOCiIAAAAQAkBMAAByIAAAAQFPAOCbAvIAAAAQCDAoASBGIAAAAQAMAtgpBcIAAAAQguBmAAArIAAAAQAAALA2BWIAAAAQA1BVAAAoIAAAAQAADQmuDbIAAAAQleCyqZDHIAAAAQmPB2sVDJIAAAAQrTC3jgBIIAAAAQllBxj7DCIAAAAQj2C+g1DFIAAAAQgjCIi1GWIAAAAQinF4AAAeIAAAAQAAAuAlByIAAAAQAlBxAAAuIAAAAQAACQhXEFIAAAAQhSD5iGETIAAAAQiKEbiRDUIAAAAQieDoh9BXIAAAAQCjB9A+BfIAAAAQA0BQgKBOIAAAAQgEAigqBuIAAAAQglBiAABOIAAAAQAAAlAaAmIAAAAQAPAXApA3IAAAAQBSB7ADDEIAAAAQAABdAuA+IAAAAQAeAoBIAxIAAAAQBNA0AZAcIAAAAQAuA1AABMIAAAAQAAAvglBzIAAAAQglB0AAAuIAAAAQAAA4ASAAIAAAAIAVgEIAAAAQAOgEALADIAAAAQA4hPAyg1IAAAAQBghkBoAAIAAAAQCSAACSFrIAAAAQAwB3AnCJIAAAAQAgBvAAAUIAAAAQAAA8gcB3IAAAAQgKAtgtCpIAAAAQEXgkCoEYIAAAAQA4BfAjB0IAAAAQAaBYAAAoIAAAAQAACAi/GpIAAAAQhSC3iGELIAAAAQkNIeohD9IAAAAQiRBEjHA6IAAAAIhnAfIAAAAQgmANAAALIAAAAQAACMiPBnIAAAAQh1BVjkBDIAAAAQiJApkaA8IAAAAQkMA4hgAfIAAAAQm/Cjk9BmIAAAAQpVDBkLAAIAAAAQhTAehlAeIAAAAQjIA8hhAAIAAAAQkwAAg4jGgEg49gjLIABAAIAAAAIgBAAgEg40gjSQCOh8BJgCIAAAAQhJACiOB8gEg1bglQIAAAAIAAAAIAAAAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Eg5kBp9QgSg/AJhNIAAAAIANhFIAAAAQmIkVjPleIAAAAQipkdhMmIIAAAAQgdiUgYjOIAAAAIgolqIAAAAQg0nFhZkgIAAAAQhjlAhMmIIAAAAQg8k5g0mLIAAAAQgSiQgGjLIAAAAQgEh4AAjnIAAAAQAAiThcj0IAAAAIhAipIAAAAQgdhWAAgwIAAAAQAAgaADgfIAAAAQCYg0ClnFIAAAAQA7ijBLj+IAAAAQBWknAKgcIAAAAIAADRQgiCEgJC0IAAAAQgEBMAADhIAAAAQAAAuAEA6IAAAAQAGBzARBfIAAAAQAsDyBgAvIAAAAQAQAjAUAXIAAAAQAnAuA1AAIAAAAQA+AAAjgyIAAAAQAbgmAAgrIAAAAQAAgGgnjIIAAAAQgnjIAAiRIAAAAQAAkKBLmtIAAAAQBAluBOkWIAAAAQBnlsFznUIAAAAIAxg+IAAAAQBXhpB9iMIAAAAIA8hCIAAAAQB2iBAAgLIAAAAQAAg1gNggIAAAAQgQgmgigIIAAAAQgBg8gVgcIAAAAIgCgDIAAAAIipAdIgFADIAAAAQgTANgVARIAAAAQgeAXghAdIAAAAQg3AwhFBGIAAAAQgqArgvAyIAAAAQhnBugEAAIAAAAQhKAAjahVIAAAAIhogoIAAAAQAIguA4h7IAAAAQBBiOAAgJIAAAAQAAgchyh5IAAAAIj5kCIAAAAQlsl7AAh0IAAAAQAAhGCOiNIAAAAIBhheIAAAAQAsgsAAgLIAAAAQAAhHglhiIAAAAQgth5gQhoIAAAAQhcAKhdAAIAAAAQmhAAiTjSIAAAAQguhDgOhQIAAAAIgFhJIAAAAQAApsHIpyIAAAAQDKkVEPj0IAAAAQEDjqEiiwIAAAAQEeiuEShbIAAAAQEYheDjAGIAAAAQDuAGCVB1IAAAAQChB9ArDyIAAAAQFNAtCWBUIAAAAQB5BFAQBrIAAAAQAGApgIA3IAAAAQgEAhgNBAIAAAAQgVB3AjA/IAAAAQFYADBPC1IAAAAQAfBFgOBVIAAAAQgMBJgnA9IAAAAQDhgbBYAIIAAAAQA8AFAYAeIAAAAQAeAnAhAMIAAAAQBFAZCyAAIAAAAQC8AABVBbIAAAAQA8A/AYCHIAAAAIAQBqIAAAAQALA7APAiIAAAAQAnBaBsAAIAAAAQAxAAEUhoIAAAAQEUhoAEAAIAAAAQDtAAAzDDIAAAAQAbBogcB6IAAAAQB4g4HejAIAAAAQJTjuIzjPIAAAAQaNpoHNAAIAAAAQDbAABOCiIAAAAQAkBMAAByIAAAAQFPAOCbAvIAAAAQCDAoASBGIAAAAQAMAtgpBcIAAAAQguBmAAArIAAAAQAAALA2BWIAAAAQA1BVAAAoIAAAAQAADQmuDbIAAAAQleCyqZDHIAAAAQmPB2sVDJIAAAAQrTC3jgBIIAAAAQllBxj7DCIAAAAQj2C+g1DFIAAAAQgjCIi1GWIAAAAQinF4AAAeIAAAAQAAAuAlByIAAAAQAlBxAAAuIAAAAQAACQhXEFIAAAAQhSD5iGETIAAAAQiKEbiRDUIAAAAQieDoh9BXIAAAAQCjB9A+BfIAAAAQA0BQgKBOIAAAAQgEAigqBuIAAAAQglBiAABOIAAAAQAAAlAaAmIAAAAQAPAXApA3IAAAAQBSB7ADDEIAAAAQAABdAuA+IAAAAQAeAoBIAxIAAAAQBNA0AZAcIAAAAQAuA1AABMIAAAAQAAAvglBzIAAAAQglB0AAAuIAAAAQAAA4ASAAIAAAAIAVgEIAAAAQAOgEALADIAAAAQA4hPAyg1IAAAAQBghkBoAAIAAAAQCSAACSFrIAAAAQAwB3AnCJIAAAAQAgBvAAAUIAAAAQAAA8gcB3IAAAAQgKAtgtCpIAAAAQEXgkCoEYIAAAAQA4BfAjB0IAAAAQAaBYAAAoIAAAAQAACAi/GpIAAAAQhSC3iGELIAAAAQkNIeohD9IAAAAQiRBEjHA6IAAAAIhnAfIAAAAQgmANAAALIAAAAQAACMiPBnIAAAAQh1BVjkBDIAAAAQiJApkaA8IAAAAQkMA4hgAfIAAAAQm/Cjk9BmIAAAAQpVDBkLAAIAAAAQhTAehlAeIAAAAQjIA8hhAAIAAAAQkwAAg4jGgEg6sgcGQgMhhgCh1IAAAAIAAhkIAAAAIgCgSIAAAAQBFhGA3gwIAAAAQAhgdAegXIAAAAQAVgRATgNIAAAAIAFgDIAAAAICpgdIACADIAAAAQAVAcABA8IAAAAQAiAIAQAmIAAAAQgyAoguA4IAAAAQhFBUAAAyIAAAAIAAA9IAAAAQh9CMhXBpIAAAAIgxA+IAAAAQgVhFgMhmg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Eg5kBp9QgSg/AJhNIAAAAIANhFIAAAAQmIkVjPleIAAAAQipkdhMmIIAAAAQgdiUgYjOIAAAAIgolqIAAAAQg0nFhZkgIAAAAQhjlAhMmIIAAAAQg8k5g0mLIAAAAQgSiQgGjLIAAAAQgEh4AAjnIAAAAQAAiThcj0IAAAAIhAipIAAAAQgdhWAAgwIAAAAQAAgaADgfIAAAAQCYg0ClnFIAAAAQA7ijBLj+IAAAAQBWknAKgcIAAAAIAADRQgiCEgJC0IAAAAQgEBMAADhIAAAAQAAAuAEA6IAAAAQAGBzARBfIAAAAQAsDyBgAvIAAAAQAQAjAUAXIAAAAQA3CLBbAAIAAAAQBBAAAlgqIAAAAQAegjAAgvIAAAAQAAgUgRhHIAAAAIgKgqIAAAAIgbh2IAAAAQg3kBAAjwIAAAAQAAtHIeuNIAAAAQA9hnBciMIAAAAQBeiNB9izIAAAAIAJgMIAAAAQBSh2Agg1IAAAAQAOgXAKgUIAAAAQAmgsAAgGIAAAAQAAg1gNggIAAAAQgJgVgOgMIAAAAQgLgQgQgEIAAAAQgDg+gYgaIAAAAIg9gQQg5AJheBJIAAAAQgdAXghAdIAAAAQg3AwhFBGIAAAAQgqArgvAyIAAAAQhnBugEAAIAAAAQhKAAjahVIAAAAIhogoIAAAAQAIguA4h7IAAAAQBBiOAAgJIAAAAQAAgchyh5IAAAAIj5kCIAAAAQlsl7AAh0IAAAAQAAhGCOiNIAAAAIBhheIAAAAQAsgsAAgLIAAAAQAAhHglhiIAAAAQgth5gQhoIAAAAQhcAKhdAAIAAAAQmhAAiTjSIAAAAQguhDgOhQIAAAAIgFhJIAAAAQAApsHIpyIAAAAQDKkVEPj0IAAAAQEDjqEiiwIAAAAQEeiuEShbIAAAAQEYheDjAGIAAAAQDuAGCVB1IAAAAQChB9ArDyIAAAAQFNAtCWBUIAAAAQB5BFAQBrIAAAAQAGApgIA3IAAAAQgEAhgNBAIAAAAQgVB3AjA/IAAAAQFYADBPC1IAAAAQAfBFgOBVIAAAAQgMBJgnA9IAAAAQDhgbBYAIIAAAAQA8AFAYAeIAAAAQAeAnAhAMIAAAAQBFAZCyAAIAAAAQC8AABVBbIAAAAQA8A/AYCHIAAAAIAQBqIAAAAQALA7APAiIAAAAQAnBaBsAAIAAAAQAxAAEUhoIAAAAQEUhoAEAAIAAAAQDtAAAzDDIAAAAQAbBogcB6IAAAAQB4g4HejAIAAAAQJTjuIzjPIAAAAQaNpoHNAAIAAAAQDbAABOCiIAAAAQAkBMAAByIAAAAQFPAOCbAvIAAAAQCDAoASBGIAAAAQAMAtgpBcIAAAAQguBmAAArIAAAAQAAALA2BWIAAAAQA1BVAAAoIAAAAQAADQmuDbIAAAAQleCyqZDHIAAAAQmPB2sVDJIAAAAQrTC3jgBIIAAAAQllBxj7DCIAAAAQj2C+g1DFIAAAAQgjCIi1GWIAAAAQinF4AAAeIAAAAQAAAuAlByIAAAAQAlBxAAAuIAAAAQAACQhXEFIAAAAQhSD5iGETIAAAAQiKEbiRDUIAAAAQieDoh9BXIAAAAQCjB9A+BfIAAAAQA0BQgKBOIAAAAQgEAigqBuIAAAAQglBiAABOIAAAAQAAAlAaAmIAAAAQAPAXApA3IAAAAQBSB7ADDEIAAAAQAABdAuA+IAAAAQAeAoBIAxIAAAAQBNA0AZAcIAAAAQAuA1AABMIAAAAQAAAvglBzIAAAAQglB0AAAuIAAAAQAAA4ASAAIAAAAIAVgEIAAAAQAOgEALADIAAAAQA4hPAyg1IAAAAQBghkBoAAIAAAAQCSAACSFrIAAAAQAwB3AnCJIAAAAQAgBvAAAUIAAAAQAAA8gcB3IAAAAQgKAtgtCpIAAAAQEXgkCoEYIAAAAQA4BfAjB0IAAAAQAaBYAAAoIAAAAQAACAi/GpIAAAAQhSC3iGELIAAAAQkNIeohD9IAAAAQiRBEjHA6IAAAAIhnAfIAAAAQgmANAAALIAAAAQAACMiPBnIAAAAQh1BVjkBDIAAAAQiJApkaA8IAAAAQkMA4hgAfIAAAAQm/Cjk9BmIAAAAQpVDBkLAAIAAAAQhTAehlAeIAAAAQjIA8hhAAIAAAAQkwAAg4jGgEg6sgcGQgMhhgCh1IAAAAIAAhkIAAAAIgCgSIAAAAQBFhGA3gwIAAAAQAhgdAdgXIAAAAQBehJA5gJIAAAAIA9AQQAYAaADA+IAAAAQAQAEALAQIAAAAQAOAMAJAVIAAAAQgyAoguA4IAAAAQhFBUAAAyIAAAAIACB3IAAAAIgJAMIAAAAQh9CzheCNIAAAAQgvhMgViyg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Eg5kBp9QgSg/AJhNIAAAAIANhFIAAAAQmIkVjPleIAAAAQipkdhMmIIAAAAQgdiUgYjOIAAAAIgolqIAAAAQg0nFhZkgIAAAAQhjlAhMmIIAAAAQg8k5g0mLIAAAAQgSiQgGjLIAAAAQgEh4AAjnIAAAAQAAiThcj0IAAAAIhAipIAAAAQgdhWAAgwIAAAAQAAgaADgfIAAAAQCYg0ClnFIAAAAQA7ijBLj+IAAAAQBWknAKgcIAAAAIAADRQgiCEgJC0IAAAAQgEBMAADhIAAAAQAAAuAEA6IAAAAQAGBzARBfIAAAAQAsDyBgAvIAAAAQAQAjAUAXIAAAAQA3CLBbAAIAAAAQBBAAAlgqIAAAAQAegjAAgvIAAAAQAAgUgRhHIAAAAIgKgqIAAAAQAcgMASgXIAAAAQAbgiAAgwIAAAAQAAgNgWgpIAAAAQgeg4gRgjIAAAAIgCgCIAAAAIgbg9IgDgIIAAAAIAAAAQgmhiAAhRIAAAAQAAkzDIoYIAAAAQClm5EVobIAAAAQA5huA3hpIAAAAQBNiOBKiDIAAAAIAdgxIAAAAICMjrIAKgQIAAAAQDHlAABA2IAAAAIAAgSIAAAAIgCABIAAAAQhUAghXA4IAAAAQhIAwhBBPIAAAAQhFBUAAAyIAAAAIACCIIAAAAQABA1gDAtIAAAAQhKCDhNCOIAAAAQhsgNgjkpIAAAAQgMhhgCh1IAAAAIAAhkIAAAAIgCgSIAAAAQgqArgvAyIAAAAQhnBugEAAIAAAAQhKAAjahVIAAAAIhogoIAAAAQAIguA4h7IAAAAQBBiOAAgJIAAAAQAAgchyh5IAAAAIj5kCIAAAAQlsl7AAh0IAAAAQAAhGCOiNIAAAAIBhheIAAAAQAsgsAAgLIAAAAQAAhHglhiIAAAAQgth5gQhoIAAAAQhcAKhdAAIAAAAQmhAAiTjSIAAAAQguhDgOhQIAAAAIgFhJIAAAAQAApsHIpyIAAAAQDKkVEPj0IAAAAQEDjqEiiwIAAAAQEeiuEShbIAAAAQEYheDjAGIAAAAQDuAGCVB1IAAAAQChB9ArDyIAAAAQFNAtCWBUIAAAAQB5BFAQBrIAAAAQAGApgIA3IAAAAQgEAhgNBAIAAAAQgVB3AjA/IAAAAQFYADBPC1IAAAAQAfBFgOBVIAAAAQgMBJgnA9IAAAAQDhgbBYAIIAAAAQA8AFAYAeIAAAAQAeAnAhAMIAAAAQBFAZCyAAIAAAAQC8AABVBbIAAAAQA8A/AYCHIAAAAIAQBqIAAAAQALA7APAiIAAAAQAnBaBsAAIAAAAQAxAAEUhoIAAAAQEUhoAEAAIAAAAQDtAAAzDDIAAAAQAbBogcB6IAAAAQB4g4HejAIAAAAQJTjuIzjPIAAAAQaNpoHNAAIAAAAQDbAABOCiIAAAAQAkBMAAByIAAAAQFPAOCbAvIAAAAQCDAoASBGIAAAAQAMAtgpBcIAAAAQguBmAAArIAAAAQAAALA2BWIAAAAQA1BVAAAoIAAAAQAADQmuDbIAAAAQleCyqZDHIAAAAQmPB2sVDJIAAAAQrTC3jgBIIAAAAQllBxj7DCIAAAAQj2C+g1DFIAAAAQgjCIi1GWIAAAAQinF4AAAeIAAAAQAAAuAlByIAAAAQAlBxAAAuIAAAAQAACQhXEFIAAAAQhSD5iGETIAAAAQiKEbiRDUIAAAAQieDoh9BXIAAAAQCjB9A+BfIAAAAQA0BQgKBOIAAAAQgEAigqBuIAAAAQglBiAABOIAAAAQAAAlAaAmIAAAAQAPAXApA3IAAAAQBSB7ADDEIAAAAQAABdAuA+IAAAAQAeAoBIAxIAAAAQBNA0AZAcIAAAAQAuA1AABMIAAAAQAAAvglBzIAAAAQglB0AAAuIAAAAQAAA4ASAAIAAAAIAVgEIAAAAQAOgEALADIAAAAQA4hPAyg1IAAAAQBghkBoAAIAAAAQCSAACSFrIAAAAQAwB3AnCJIAAAAQAgBvAAAUIAAAAQAAA8gcB3IAAAAQgKAtgtCpIAAAAQEXgkCoEYIAAAAQA4BfAjB0IAAAAQAaBYAAAoIAAAAQAACAi/GpIAAAAQhSC3iGELIAAAAQkNIeohD9IAAAAQiRBEjHA6IAAAAIhnAfIAAAAQgmANAAALIAAAAQAACMiPBnIAAAAQh1BVjkBDIAAAAQiJApkaA8IAAAAQkMA4hgAfIAAAAQm/Cjk9BmIAAAAQpVDBkLAAIAAAAQhTAehlAeIAAAAQjIA8hhAAIAAAAQkwAAg4jGgEg49gjLQCViDBLgCIAAAAQhLACiVCDgEg0pgk3QBxh0BLgLIAAAAIAOgBIAAAAIgOABIAAAAQhLALhxB0IAAAAIAAAAIAAAAIAAAAIAAAAIAAAAgEg1bglQIAAAAIAAAAIAAAAgEgxegm3IgBAAIAAAAIABAAg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Eg5kBp9QgSg/AJhNIAAAAIANhFIAAAAQmIkVjPleIAAAAQipkdhMmIIAAAAQgdiUgYjOIAAAAIgolqIAAAAQg0nFhZkgIAAAAQhjlAhMmIIAAAAQg8k5g0mLIAAAAQgSiQgGjLIAAAAQgEh4AAjnIAAAAQAAiThcj0IAAAAIhAipIAAAAQgdhWAAgwIAAAAQAAgaADgfIAAAAQCYg0ClnFIAAAAQA7ijBLj+IAAAAQBWknAKgcIAAAAIAADRQgiCEgJC0IAAAAQgEBMAADhIAAAAQAAAuAEA6IAAAAQAGBzARBfIAAAAQAsDyBgAvIAAAAQAQAjAUAXIAAAAQA3CLBbAAIAAAAQBBAAAlgqIAAAAQAegjAAgvIAAAAQAAgUgRhHIAAAAIgKgqIAAAAQAcgMASgXIAAAAQAbgiAAgwIAAAAQAAgNgWgpIAAAAQgeg4gRgjIAAAAQgTgkgNgjIAAAAQANgvALg7IAAAAQAGgeAejDIAAAAQAUh/ARguIAAAAQAxiCBmjWIAAAAQBxjtAuhyIAAAAQB6krCynsIAAAAQCWmcAkiFIAAAAQBNiFBMh6IAAAAQDHlAABA2IAAAAIAAgSIAAAAIgCABIAAAAQhUAghXA4IAAAAQhIAwhBBPIAAAAQhFBUAAAyIAAAAIACCIIAAAAQABA1gDAtIAAAAQhKCDhNCOIAAAAQhsgNgjkpIAAAAQgMhhgCh1IAAAAIAAhkIAAAAIgCgSIAAAAQgqArgvAyIAAAAQhnBugEAAIAAAAQhKAAjahVIAAAAIhogoIAAAAQAIguA4h7IAAAAQBBiOAAgJIAAAAQAAgchyh5IAAAAIj5kCIAAAAQlsl7AAh0IAAAAQAAhGCOiNIAAAAIBhheIAAAAQAsgsAAgLIAAAAQAAhHglhiIAAAAQgth5gQhoIAAAAQhcAKhdAAIAAAAQmhAAiTjSIAAAAQguhDgOhQIAAAAIgFhJIAAAAQAApsHIpyIAAAAQDKkVEPj0IAAAAQEDjqEiiwIAAAAQEeiuEShbIAAAAQEYheDjAGIAAAAQDuAGCVB1IAAAAQChB9ArDyIAAAAQFNAtCWBUIAAAAQB5BFAQBrIAAAAQAGApgIA3IAAAAQgEAhgNBAIAAAAQgVB3AjA/IAAAAQFYADBPC1IAAAAQAfBFgOBVIAAAAQgMBJgnA9IAAAAQDhgbBYAIIAAAAQA8AFAYAeIAAAAQAeAnAhAMIAAAAQBFAZCyAAIAAAAQC8AABVBbIAAAAQA8A/AYCHIAAAAIAQBqIAAAAQALA7APAiIAAAAQAnBaBsAAIAAAAQAxAAEUhoIAAAAQEUhoAEAAIAAAAQDtAAAzDDIAAAAQAbBogcB6IAAAAQB4g4HejAIAAAAQJTjuIzjPIAAAAQaNpoHNAAIAAAAQDbAABOCiIAAAAQAkBMAAByIAAAAQFPAOCbAvIAAAAQCDAoASBGIAAAAQAMAtgpBcIAAAAQguBmAAArIAAAAQAAALA2BWIAAAAQA1BVAAAoIAAAAQAADQmuDbIAAAAQleCyqZDHIAAAAQmPB2sVDJIAAAAQrTC3jgBIIAAAAQllBxj7DCIAAAAQj2C+g1DFIAAAAQgjCIi1GWIAAAAQinF4AAAeIAAAAQAAAuAlByIAAAAQAlBxAAAuIAAAAQAACQhXEFIAAAAQhSD5iGETIAAAAQiKEbiRDUIAAAAQieDoh9BXIAAAAQCjB9A+BfIAAAAQA0BQgKBOIAAAAQgEAigqBuIAAAAQglBiAABOIAAAAQAAAlAaAmIAAAAQAPAXApA3IAAAAQBSB7ADDEIAAAAQAABdAuA+IAAAAQAeAoBIAxIAAAAQBNA0AZAcIAAAAQAuA1AABMIAAAAQAAAvglBzIAAAAQglB0AAAuIAAAAQAAA4ASAAIAAAAIAVgEIAAAAQAOgEALADIAAAAQA4hPAyg1IAAAAQBghkBoAAIAAAAQCSAACSFrIAAAAQAwB3AnCJIAAAAQAgBvAAAUIAAAAQAAA8gcB3IAAAAQgKAtgtCpIAAAAQEXgkCoEYIAAAAQA4BfAjB0IAAAAQAaBYAAAoIAAAAQAAB9i1GWIAAAAQBXA6BLBQIAAAAQCVCfAACTIAAAAQAACIg1BLIAAAAQhXB6joAAIAAAAQi4AAh/g8IAAAAQj/FmmdDAIAAAAQiRBEjHA6IAAAAIhnAfIAAAAQgmANAAALIAAAAQAACMiPBnIAAAAQh1BVjkBDIAAAAQiJApkaA8IAAAAQkMA4hgAfIAAAAQm/Cjk9BmIAAAAQpVDBkLAAIAAAAQhTAehlAeIAAAAQjIA8hhAAIAAAAQkwAAg4jGgEg49gjLQCViDBLgCIAAAAQhLACiVCDgEg0pgk3QBxh0BLgLIAAAAIAOgBIAAAAIgOABIAAAAQhLALhxB0IAAAAIAAAAIAAAAIAAAAIAAAAIAAAAgEg1bglQIAAAAIAAAAIAAAAgEgxfgm3IAAAAIAAAAIAAAAg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Eg5kBp9QgSg/AJhNIAAAAIANhFIAAAAQmIkVjPleIAAAAQipkdhMmIIAAAAQgdiUgYjOIAAAAIgolqIAAAAQg0nFhZkgIAAAAQhjlAhMmIIAAAAQg8k5g0mLIAAAAQgSiQgGjLIAAAAQgEh4AAjnIAAAAQAAiThcj0IAAAAIhAipIAAAAQgdhWAAgwIAAAAQAAgaADgfIAAAAQCYg0ClnFIAAAAQA7ijBLj+IAAAAQBWknAKgcIAAAAIAADRQgiCEgJC0IAAAAQgEBMAADhIAAAAQAAAuAEA6IAAAAQAGBzARBfIAAAAQAsDyBgAvIAAAAQAQAjAUAXIAAAAQA3CLBbAAIAAAAQBBAAAlgqIAAAAQAegjAAgvIAAAAQAAgUgRhHIAAAAIgKgqIAAAAQAcgMASgXIAAAAQAbgiAAgwIAAAAQAAgNgWgpIAAAAQgeg4gRgjIAAAAIgCgCIAAAAIgbg9IgDgIIAAAAIAAAAQgmhiAAhRIAAAAQAAkzDIoYIAAAAQClm5EVobIAAAAQA5huA3hpIAAAAQBNiOBKiDIAAAAIAdgxIAAAAICMjrIAKgQIAAAAQDHlAABA2IAAAAIAAgSIAAAAIgCABIAAAAQhUAghXA4IAAAAQhIAwhBBPIAAAAQhFBUAAAyIAAAAIACCIIAAAAQABA1gDAtIAAAAQhKCDhNCOIAAAAQhsgNgjkpIAAAAQgMhhgCh1IAAAAIAAhkIAAAAIgCgSIAAAAQgqArgvAyIAAAAQhnBugEAAIAAAAQhKAAjahVIAAAAIhogoIAAAAQAIguA4h7IAAAAQBBiOAAgJIAAAAQAAgchyh5IAAAAIj5kCIAAAAQlsl7AAh0IAAAAQAAhGCOiNIAAAAIBhheIAAAAQAsgsAAgLIAAAAQAAhHglhiIAAAAQgth5gQhoIAAAAQhcAKhdAAIAAAAQmhAAiTjSIAAAAQguhDgOhQIAAAAIgFhJIAAAAQAApsHIpyIAAAAQDKkVEPj0IAAAAQEDjqEiiwIAAAAQEeiuEShbIAAAAQEYheDjAGIAAAAQDuAGCVB1IAAAAQChB9ArDyIAAAAQFNAtCWBUIAAAAQB5BFAQBrIAAAAQAGApgIA3IAAAAQgEAhgNBAIAAAAQgVB3AjA/IAAAAQFYADBPC1IAAAAQAfBFgOBVIAAAAQgMBJgnA9IAAAAQDhgbBYAIIAAAAQA8AFAYAeIAAAAQAeAnAhAMIAAAAQBFAZCyAAIAAAAQC8AABVBbIAAAAQA8A/AYCHIAAAAIAQBqIAAAAQALA7APAiIAAAAQAnBaBsAAIAAAAQAxAAEUhoIAAAAQEUhoAEAAIAAAAQDtAAAzDDIAAAAQAbBogcB6IAAAAQB4g4HejAIAAAAQJTjuIzjPIAAAAQaNpoHNAAIAAAAQDbAABOCiIAAAAQAkBMAAByIAAAAQFPAOCbAvIAAAAQCDAoASBGIAAAAQAMAtgpBcIAAAAQguBmAAArIAAAAQAAALA2BWIAAAAQA1BVAAAoIAAAAQAADQmuDbIAAAAQleCyqZDHIAAAAQmPB2sVDJIAAAAQrTC3jgBIIAAAAQllBxj7DCIAAAAQj2C+g1DFIAAAAQgjCIi1GWIAAAAQinF4AAAeIAAAAQAAAuAlByIAAAAQAlBxAAAuIAAAAQAACQhXEFIAAAAQhSD5iGETIAAAAQiKEbiRDUIAAAAQieDoh9BXIAAAAQCjB9A+BfIAAAAQA0BQgKBOIAAAAQgEAigqBuIAAAAQglBiAABOIAAAAQAAAlAaAmIAAAAQAPAXApA3IAAAAQBSB7ADDEIAAAAQAABdAuA+IAAAAQAeAoBIAxIAAAAQBNA0AZAcIAAAAQAuA1AABMIAAAAQAAAvglBzIAAAAQglB0AAAuIAAAAQAAA4ASAAIAAAAIAVgEIAAAAQAOgEALADIAAAAQA4hPAyg1IAAAAQBghkBoAAIAAAAQCSAACSFrIAAAAQAwB3AnCJIAAAAQAgBvAAAUIAAAAQAAA8gcB3IAAAAQgKAtgtCpIAAAAQEXgkCoEYIAAAAQA4BfAjB0IAAAAQAaBYAAAoIAAAAQAACAi/GpIAAAAQhSC3iGELIAAAAQkNIeohD9IAAAAQiRBEjHA6IAAAAIhnAfIAAAAQgmANAAALIAAAAQAACMiPBnIAAAAQh1BVjkBDIAAAAQiJApkaA8IAAAAQkMA4hgAfIAAAAQm/Cjk9BmIAAAAQpVDBkLAAIAAAAQhTAehlAeIAAAAQjIA8hhAAIAAAAQkwAAg4jGgEg49gjLQCViDBLgCIAAAAQhLACiVCDgEg0pgk3QBxh0BLgLIAAAAIAOgBIAAAAIgOABIAAAAQhLALhxB0IAAAAIAAAAIAAAAIAAAAIAAAAIAAAAgEg1bglQIAAAAIAAAAIAAAAgEgxegm3IgBAAIAAAAIABAAg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Eg5kBp9QgSg/AJhNIAAAAIANhFIAAAAQmIkVjPleIAAAAQipkdhMmIIAAAAQgdiUgYjOIAAAAIgolqIAAAAQg0nFhZkgIAAAAQhjlAhMmIIAAAAQg8k5g0mLIAAAAQgSiQgGjLIAAAAQgEh4AAjnIAAAAQAAiThcj0IAAAAIhAipIAAAAQgdhWAAgwIAAAAQAAgaADgfIAAAAQCYg0ClnFIAAAAQA7ijBLj+IAAAAQBWknAKgcIAAAAIAADRQgiCEgJC0IAAAAQgEBMAADhIAAAAQAAAuAEA6IAAAAQAGBzARBfIAAAAQAsDyBgAvIAAAAQAQAjAUAXIAAAAQA3CLBbAAIAAAAQBBAAAlgqIAAAAQAegjAAgvIAAAAQAAgUgRhHIAAAAIgKgqIAAAAIgbh2IAAAAQg3kBAAjwIAAAAQAAtHIeuNIAAAAQA9hnBciMIAAAAQBeiNB9izIAAAAIAJgMIAAAAQBSh2Agg1IAAAAQAOgXAKgUIAAAAQAmgsAAgGIAAAAQAAg1gNggIAAAAQgJgVgOgMIAAAAQgLgQgQgEIAAAAQgDg+gYgaIAAAAIg9gQQg5AJheBJIAAAAQgdAXghAdIAAAAQg3AwhFBGIAAAAQgqArgvAyIAAAAQhnBugEAAIAAAAQhKAAjahVIAAAAIhogoIAAAAQAIguA4h7IAAAAQBBiOAAgJIAAAAQAAgchyh5IAAAAIj5kCIAAAAQlsl7AAh0IAAAAQAAhGCOiNIAAAAIBhheIAAAAQAsgsAAgLIAAAAQAAhHglhiIAAAAQgth5gQhoIAAAAQhcAKhdAAIAAAAQmhAAiTjSIAAAAQguhDgOhQIAAAAIgFhJIAAAAQAApsHIpyIAAAAQDKkVEPj0IAAAAQEDjqEiiwIAAAAQEeiuEShbIAAAAQEYheDjAGIAAAAQDuAGCVB1IAAAAQChB9ArDyIAAAAQFNAtCWBUIAAAAQB5BFAQBrIAAAAQAGApgIA3IAAAAQgEAhgNBAIAAAAQgVB3AjA/IAAAAQFYADBPC1IAAAAQAfBFgOBVIAAAAQgMBJgnA9IAAAAQDhgbBYAIIAAAAQA8AFAYAeIAAAAQAeAnAhAMIAAAAQBFAZCyAAIAAAAQC8AABVBbIAAAAQA8A/AYCHIAAAAIAQBqIAAAAQALA7APAiIAAAAQAnBaBsAAIAAAAQAxAAEUhoIAAAAQEUhoAEAAIAAAAQDtAAAzDDIAAAAQAbBogcB6IAAAAQB4g4HejAIAAAAQJTjuIzjPIAAAAQaNpoHNAAIAAAAQDbAABOCiIAAAAQAkBMAAByIAAAAQFPAOCbAvIAAAAQCDAoASBGIAAAAQAMAtgpBcIAAAAQguBmAAArIAAAAQAAALA2BWIAAAAQA1BVAAAoIAAAAQAADQmuDbIAAAAQleCyqZDHIAAAAQmPB2sVDJIAAAAQrTC3jgBIIAAAAQllBxj7DCIAAAAQj2C+g1DFIAAAAQgjCIi1GWIAAAAQinF4AAAeIAAAAQAAAuAlByIAAAAQAlBxAAAuIAAAAQAACQhXEFIAAAAQhSD5iGETIAAAAQiKEbiRDUIAAAAQieDoh9BXIAAAAQCjB9A+BfIAAAAQA0BQgKBOIAAAAQgEAigqBuIAAAAQglBiAABOIAAAAQAAAlAaAmIAAAAQAPAXApA3IAAAAQBSB7ADDEIAAAAQAABdAuA+IAAAAQAeAoBIAxIAAAAQBNA0AZAcIAAAAQAuA1AABMIAAAAQAAAvglBzIAAAAQglB0AAAuIAAAAQAAA4ASAAIAAAAIAVgEIAAAAQAOgEALADIAAAAQA4hPAyg1IAAAAQBghkBoAAIAAAAQCSAACSFrIAAAAQAwB3AnCJIAAAAQAgBvAAAUIAAAAQAAA8gcB3IAAAAQgKAtgtCpIAAAAQEXgkCoEYIAAAAQA4BfAjB0IAAAAQAaBYAAAoIAAAAQAACAi/GpIAAAAQhSC3iGELIAAAAQkNIeohD9IAAAAQiRBEjHA6IAAAAIhnAfIAAAAQgmANAAALIAAAAQAACMiPBnIAAAAQh1BVjkBDIAAAAQiJApkaA8IAAAAQkMA4hgAfIAAAAQm/Cjk9BmIAAAAQpVDBkLAAIAAAAQhTAehlAeIAAAAQjIA8hhAAIAAAAQkwAAg4jGgEg6sgcGQgMhhgCh1IAAAAIAAhkIAAAAIgCgSIAAAAQBFhGA3gwIAAAAQAhgdAdgXIAAAAQBehJA5gJIAAAAIA9AQQAYAaADA+IAAAAQAQAEALAQIAAAAQAOAMAJAVIAAAAQgyAoguA4IAAAAQhFBUAAAyIAAAAIACB3IAAAAIgJAMIAAAAQh9CzheCNIAAAAQgvhMgViyg");
	var mask_1_graphics_101 = new cjs.Graphics().p("Eg5kBp9QgSg/AJhNIAAAAIANhFIAAAAQmIkVjPleIAAAAQipkdhMmIIAAAAQgdiUgYjOIAAAAIgolqIAAAAQg0nFhZkgIAAAAQhjlAhMmIIAAAAQg8k5g0mLIAAAAQgSiQgGjLIAAAAQgEh4AAjnIAAAAQAAiThcj0IAAAAIhAipIAAAAQgdhWAAgwIAAAAQAAgaADgfIAAAAQCYg0ClnFIAAAAQA7ijBLj+IAAAAQBWknAKgcIAAAAIAADRQgiCEgJC0IAAAAQgEBMAADhIAAAAQAAAuAEA6IAAAAQAGBzARBfIAAAAQAsDyBgAvIAAAAQAQAjAUAXIAAAAQAnAuA1AAIAAAAQA+AAAjgyIAAAAQAbgmAAgrIAAAAQAAgGgnjIIAAAAQgnjIAAiRIAAAAQAAkKBLmtIAAAAQBAluBOkWIAAAAQBnlsFznUIAAAAIAxg+IAAAAQBXhpB9iMIAAAAIA8hCIAAAAQB2iBAAgLIAAAAQAAg1gNggIAAAAQgQgmgigIIAAAAQgBg8gVgcIAAAAIgCgDIAAAAIipAdIgFADIAAAAQgTANgVARIAAAAQgeAXghAdIAAAAQg3AwhFBGIAAAAQgqArgvAyIAAAAQhnBugEAAIAAAAQhKAAjahVIAAAAIhogoIAAAAQAIguA4h7IAAAAQBBiOAAgJIAAAAQAAgchyh5IAAAAIj5kCIAAAAQlsl7AAh0IAAAAQAAhGCOiNIAAAAIBhheIAAAAQAsgsAAgLIAAAAQAAhHglhiIAAAAQgth5gQhoIAAAAQhcAKhdAAIAAAAQmhAAiTjSIAAAAQguhDgOhQIAAAAIgFhJIAAAAQAApsHIpyIAAAAQDKkVEPj0IAAAAQEDjqEiiwIAAAAQEeiuEShbIAAAAQEYheDjAGIAAAAQDuAGCVB1IAAAAQChB9ArDyIAAAAQFNAtCWBUIAAAAQB5BFAQBrIAAAAQAGApgIA3IAAAAQgEAhgNBAIAAAAQgVB3AjA/IAAAAQFYADBPC1IAAAAQAfBFgOBVIAAAAQgMBJgnA9IAAAAQDhgbBYAIIAAAAQA8AFAYAeIAAAAQAeAnAhAMIAAAAQBFAZCyAAIAAAAQC8AABVBbIAAAAQA8A/AYCHIAAAAIAQBqIAAAAQALA7APAiIAAAAQAnBaBsAAIAAAAQAxAAEUhoIAAAAQEUhoAEAAIAAAAQDtAAAzDDIAAAAQAbBogcB6IAAAAQB4g4HejAIAAAAQJTjuIzjPIAAAAQaNpoHNAAIAAAAQDbAABOCiIAAAAQAkBMAAByIAAAAQFPAOCbAvIAAAAQCDAoASBGIAAAAQAMAtgpBcIAAAAQguBmAAArIAAAAQAAALA2BWIAAAAQA1BVAAAoIAAAAQAADQmuDbIAAAAQleCyqZDHIAAAAQmPB2sVDJIAAAAQrTC3jgBIIAAAAQllBxj7DCIAAAAQj2C+g1DFIAAAAQgjCIi1GWIAAAAQinF4AAAeIAAAAQAAAuAlByIAAAAQAlBxAAAuIAAAAQAACQhXEFIAAAAQhSD5iGETIAAAAQiKEbiRDUIAAAAQieDoh9BXIAAAAQCjB9A+BfIAAAAQA0BQgKBOIAAAAQgEAigqBuIAAAAQglBiAABOIAAAAQAAAlAaAmIAAAAQAPAXApA3IAAAAQBSB7ADDEIAAAAQAABdAuA+IAAAAQAeAoBIAxIAAAAQBNA0AZAcIAAAAQAuA1AABMIAAAAQAAAvglBzIAAAAQglB0AAAuIAAAAQAAA4ASAAIAAAAIAVgEIAAAAQAOgEALADIAAAAQA4hPAyg1IAAAAQBghkBoAAIAAAAQCSAACSFrIAAAAQAwB3AnCJIAAAAQAgBvAAAUIAAAAQAAA8gcB3IAAAAQgKAtgtCpIAAAAQEXgkCoEYIAAAAQA4BfAjB0IAAAAQAaBYAAAoIAAAAQAACAi/GpIAAAAQhSC3iGELIAAAAQkNIeohD9IAAAAQiRBEjHA6IAAAAIhnAfIAAAAQgmANAAALIAAAAQAACMiPBnIAAAAQh1BVjkBDIAAAAQiJApkaA8IAAAAQkMA4hgAfIAAAAQm/Cjk9BmIAAAAQpVDBkLAAIAAAAQhTAehlAeIAAAAQjIA8hhAAIAAAAQkwAAg4jGgEg6sgcGQgMhhgCh1IAAAAIAAhkIAAAAIgCgSIAAAAQBFhGA3gwIAAAAQAhgdAegXIAAAAQAVgRATgNIAAAAIAFgDIAAAAICpgdIACADIAAAAQAVAcABA8IAAAAQAiAIAQAmIAAAAQgyAoguA4IAAAAQhFBUAAAyIAAAAIAAA9IAAAAQh9CMhXBpIAAAAIgxA+IAAAAQgVhFgMhmg");
	var mask_1_graphics_105 = new cjs.Graphics().p("Eg5kBp9QgSg/AJhNIAAAAIANhFIAAAAQmIkVjPleIAAAAQipkdhMmIIAAAAQgdiUgYjOIAAAAIgolqIAAAAQg0nFhZkgIAAAAQhjlAhMmIIAAAAQg8k5g0mLIAAAAQgSiQgGjLIAAAAQgEh4AAjnIAAAAQAAiThcj0IAAAAIhAipIAAAAQgdhWAAgwIAAAAQAAgaADgfIAAAAQCYg0ClnFIAAAAQA7ijBLj+IAAAAQBWknAKgcIAAAAIAADRQgiCEgJC0IAAAAQgEBMAADhIAAAAQAAAuAEA6IAAAAQAGBzARBfIAAAAIADAPIAAAAQAsDkBdAuIAAAAQAYALAaAAIAAAAQBcAAAZhPIAAAAQAHgXAAhGIAAAAQAAhPgXluIAAAAQgXluAAh9IAAAAQAAinCGmsIAAAAQBdkmBejwIAAAAQBajiEvmMIAAAAIBEhYIAAAAQCrjWA9hOIAAAAQBkiAAAgYIAAAAQAAhGgXgfIAAAAIgBgBIAAAAIABABIAAAAQAXAfAABGIAAAAQAAAYhkCAIAAAAQg9BOirDWIAAAAIhEBYIAAAAQgGghgEgnIAAAAQgMhhgCh1IAAAAIAAhkIAAAAIgCgSIAAAAQBFhGA3gwIAAAAIACgBIAAAAIgCABIAAAAQg3AwhFBGIAAAAQgqArgvAyIAAAAQhnBugEAAIAAAAQhKAAjahVIAAAAIhogoIAAAAQAIguA4h7IAAAAQBBiOAAgJIAAAAQAAgchyh5IAAAAIj5kCIAAAAQlsl7AAh0IAAAAQAAhGCOiNIAAAAIBhheIAAAAQAsgsAAgLIAAAAQAAhHglhiIAAAAQgth5gQhoIAAAAQhcAKhdAAIAAAAQmhAAiTjSIAAAAQguhDgOhQIAAAAIgFhJIAAAAQAApsHIpyIAAAAQDKkVEPj0IAAAAQEDjqEiiwIAAAAQEeiuEShbIAAAAQEYheDjAGIAAAAQDuAGCVB1IAAAAQChB9ArDyIAAAAQFNAtCWBUIAAAAQB5BFAQBrIAAAAQAGApgIA3IAAAAQgEAhgNBAIAAAAQgVB3AjA/IAAAAQFYADBPC1IAAAAQAfBFgOBVIAAAAQgMBJgnA9IAAAAQDhgbBYAIIAAAAQA8AFAYAeIAAAAQAeAnAhAMIAAAAQBFAZCyAAIAAAAQC8AABVBbIAAAAQA8A/AYCHIAAAAIAQBqIAAAAQALA7APAiIAAAAQAnBaBsAAIAAAAQAxAAEUhoIAAAAQEUhoAEAAIAAAAQDtAAAzDDIAAAAQAbBogcB6IAAAAQB4g4HejAIAAAAQJTjuIzjPIAAAAQaNpoHNAAIAAAAQDbAABOCiIAAAAQAkBMAAByIAAAAQFPAOCbAvIAAAAQCDAoASBGIAAAAQAMAtgpBcIAAAAQguBmAAArIAAAAQAAALA2BWIAAAAQA1BVAAAoIAAAAQAADQmuDbIAAAAQleCyqZDHIAAAAQmPB2sVDJIAAAAQrTC3jgBIIAAAAQllBxj7DCIAAAAQj2C+g1DFIAAAAQgjCIi1GWIAAAAQinF4AAAeIAAAAQAAAuAlByIAAAAQAlBxAAAuIAAAAQAACQhXEFIAAAAQhSD5iGETIAAAAQiKEbiRDUIAAAAQieDoh9BXIAAAAQCjB9A+BfIAAAAQA0BQgKBOIAAAAQgEAigqBuIAAAAQglBiAABOIAAAAQAAAlAaAmIAAAAQAPAXApA3IAAAAQBSB7ADDEIAAAAQAABdAuA+IAAAAQAeAoBIAxIAAAAQBNA0AZAcIAAAAQAuA1AABMIAAAAQAAAvglBzIAAAAQglB0AAAuIAAAAQAAA4ASAAIAAAAIAVgEIAAAAQAOgEALADIAAAAQA4hPAyg1IAAAAQBghkBoAAIAAAAQCSAACSFrIAAAAQAwB3AnCJIAAAAQAgBvAAAUIAAAAQAAA8gcB3IAAAAQgKAtgtCpIAAAAQEXgkCoEYIAAAAQA4BfAjB0IAAAAQAaBYAAAoIAAAAQAACAi/GpIAAAAQhSC3iGELIAAAAQkNIeohD9IAAAAQiRBEjHA6IAAAAIhnAfIAAAAQgmANAAALIAAAAQAACMiPBnIAAAAQh1BVjkBDIAAAAQiJApkaA8IAAAAQkMA4hgAfIAAAAQm/Cjk9BmIAAAAQpVDBkLAAIAAAAQhTAehlAeIAAAAQjIA8hhAAIAAAAQkwAAg4jGgEg49gjLIABAAIAAAAIgBAAgEg40gjSQCOh8BJgCIAAAAQhJACiOB8gEg1bglQIAAAAIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_1_graphics_36,x:919.4,y:1040.6}).wait(4).to({graphics:mask_1_graphics_40,x:919.4,y:1040.6}).wait(4).to({graphics:mask_1_graphics_44,x:919.4,y:1040.6}).wait(6).to({graphics:mask_1_graphics_50,x:919.4,y:1040.6}).wait(11).to({graphics:mask_1_graphics_61,x:919.4,y:1040.6}).wait(35).to({graphics:mask_1_graphics_96,x:919.4,y:1040.6}).wait(2).to({graphics:mask_1_graphics_98,x:919.4,y:1040.6}).wait(3).to({graphics:mask_1_graphics_101,x:919.4,y:1040.6}).wait(4).to({graphics:mask_1_graphics_105,x:919.4,y:1040.6}).wait(101));

	// BLUES
	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.lf(["#6A5CA9","#4F4291"],[0.004,1],-60.2,0,60.2,0).s().p("Ak4ivQh7jghfjwIhHjDIPvKYQgPBVBoHUQA0DqA3DaQoJklmJrNg");
	this.shape_835.setTransform(592.8,1417.7);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("rgba(88,72,145,0.996)").s().p("AiMBTQgGgOgBgQIgBgPQAAg9AvgsQApgnA8gMQA8gNAqAUQAvAVAAAxQAAAdhWBDQhXBFgsAAQg2AAgSgpg");
	this.shape_836.setTransform(873.6,733.4);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("rgba(88,72,145,0.996)").s().p("AH3I5QgFgNgCgQIAAgPQAAgJBBiiIBAikQAAkrj/i6QhlhKh7gpQhvglhdAAQk+AAiXDeQhABvgZAqQgqBFgsAAQg2AAgSgpQgGgOgBgQIgBgPQAAgoA4hZQA7hhBVhYQDjjrDHAhQI4AfDmEzQCMC8AAESQAAAOgTBBQgXBIgdBFQhQDDg4AAQg1AAgTgpg");
	this.shape_837.setTransform(934,756.1);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("rgba(88,72,145,0.996)").s().p("Ao4DnQgJg7gBhHIAAg7QAAhAAFgOQAUg4BRAAQAGAAA3AZIAbgIQALgxCOhYIB6hIQBHgqAkgcQBKg6BrgFQBagEBkAgQBWAcBAAtQA8AqAAAcQAAAcgUAXQgXAagoAAQgcAAhjgvQhjgvgQAAQj0AAjgFVQg5BVhVCVQhBBrgfAAQhZAAgbi8g");
	this.shape_838.setTransform(602.8,831);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("rgba(88,72,145,0.996)").s().p("AreEkQgJgWgEgZIgDgXQAAh9C/iEQB6hVFJihQCohTCpAFQCQAFCBBCQBuA5BIBVQBDBOAAA5QAAAegQAdQgcAwg+AAQgSAAgzgkIhthQQifh1hRAAQipAAiFBOQiXBnhxA0QifBKgfBtQgOAxgJAKQgUAWg7AAQhJAAgehEg");
	this.shape_839.setTransform(616,814.4);

	this.instance_1 = new lib.BLUES();
	this.instance_1.parent = this;
	this.instance_1.setTransform(437,288);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#323F94").s().p("AjvGSIgHgqQAAgTBQi/QBYjLAOglQAJgWAvhMQA3heAyg/QCWi+AAC/QAABIhXCTQhgCVgUAoQgQAig/C0QhFCjhBAAQg1AAgRgng");
	this.shape_840.setTransform(966.6,830.2);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#292B66").s().p("Ai1FEQgFgOAAgTIACgRQAAgmBCimQAWg5A0h6IAkhdQAXhCAOgaQAyhgA4AYQAXAKAOAZQAPAZAAAbQAAAHgiBjQgnB3goBoQh7FCg4AAQg+AAgOgwg");
	this.shape_841.setTransform(844.4,812.4);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#2F3474").s().p("AkhGJIgDgUQAAgIA7hWQBEhiALgVIAag1QARgiANgSQAMgRAygmQAvgjAGgMQAHgNAaglQAbgmAJgSQADgWAJgdQAKgeANgYQAWgxA6hAQBLhUAABjQARBHAAAIQAABZg1BIQgwBBgGAJQgjAzgbBBQgSArgqA6QgcAogbAgQgPASglAXQglAXgwAWIhAApQg4AlgJAAQgYAAgIgSg");
	this.shape_842.setTransform(829.5,884.6);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#4652A4").s().p("AioG9IgShZQAAhsAVhxQANhFAoibQAMgtAkhCQAqhHAVgnQARhZA5hCQAggmAZgBQASgBAGATQAhgMAAA/QAABNgZBGQgOAqgoBLQgnBKgPArQgZBGAABPQAAAhAYAdQAYAcAAAPQAAANgIALQgKAOgRAAQgIAAgLgIIgPgLQADAKgNASQgPAUgXgIIgSCjQgJAzgOAcQgmgIgdANQgKgWgKgngAhmCuIAAANIABAAIAAgOg");
	this.shape_843.setTransform(896,924.8);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("rgba(88,72,145,0.996)").s().p("AqVFWQg7gGgUgxQgIgRgCgWIAAgUQAAg0Ayg7QAmifCth6QDHiLEignQEfgnDJBTQCpBGAoCGQA2BaAACHQAAApgQAdQgbAxg/AAQhJAAgag1QgKgSgJgkIgQg+IgBgDIgMgMQgMgNgMgaIgWgqQgMgLgNgIQhSg1ioAAQimAAlJDWQg1AjiTBmIgIAOQgpBNgmAAQghAAgXgNg");
	this.shape_844.setTransform(616,812.2);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("rgba(29,27,76,0.996)").s().p("An6B0QgJgQgDgUIgCgRQAAgnCjg9QCgg9DFgmQDdgqCJAOQCjAQAABeQAAAjgXAaQgaAhgtAAQgOAAhEgKQhDgLgPAAQjPAAjBBLQh6AugPAFQhJAXhDAAQhBAAgbg0g");
	this.shape_845.setTransform(557,1153.4);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("rgba(41,56,125,0.996)").s().p("ABSC8QgRgUgXgrQgUglgNgMQg+g5hageQADAOAAATQAAAdgqAwQg2A9hEAAQhAAAgVgyQgGgPgCgUIAAgSQAAgqAoglQAmgjAzgMQATgFASgBQgCgKAAgMQAAiEBjgbQBWgYCCA9QB9A6BcBiQBjBoAABdQAAA1gUAeQgfAvhOAAQh9AAg+hMg");
	this.shape_846.setTransform(644.3,1170.8);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#2A3781").s().p("EAZbAqMQmVhOnFhoQzJkZmAjFQpbk4lalbQlwlwABlKQAAgsh5lHQh4lGgBgYQABg0Aeg3QAhg7AygYQCFg9CNDjQA3B9AhBWQAvB7AkB7QBUElBrC/QCdEYDqCHQHKEKGPCTQHQCrHNAnQAbACDjAhIEYApQBwAQC2gPIE2gcQCxgLB0AaQCSAgBbBiQBpBvAyBvQAyBsABBxQAABigpAsQhGBMjOAAQhMAAl7hIgAIOCIQhHh3hljFQhljEgXgmQhNiEh9lDQiSl2AAiHQAAisBRh7QAlg5AwgmIAAgTIABgjQAAifAYhkQAqiSAliaQAJghAhhqQAZhVAKg3QALhHAsgaIAMgGQAegMAmAHIAMADQAxANAlAlQAlAmAAAnQAABNhZDGQgvBnhDCRQgMAkgmBbQgiBUgHAyQAAAGABAMQA/gGAzAdQBRAxAAB3QAAAwgWAlQgOAXgjAiQgjAjgNATQgWAiAAArQAACPCEEKQBbC3DIFEQDwGEAzBZQCEDsAABbQAABFgvA3Qg2BAhXAAQicAAjsmQgA2JykQguhmgah6QgUhXABghQAAhsA6l/QAHglA7hXQA+haBDhBQBNhNAwgDQA4gCAABsQAAAighAtQgUAbg1A/QhqCLABCoQAAAQAoAfQAqAzAABvQAAArAJA3QAJA5AQAwQAFAQCDCvQB7CkgBA1QAABrhvAAQkAAAiLk7g");
	this.shape_847.setTransform(851.4,1251.8);

	var maskedShapeInstanceList = [this.shape_835,this.shape_836,this.shape_837,this.shape_838,this.shape_839,this.instance_1,this.shape_840,this.shape_841,this.shape_842,this.shape_843,this.shape_844,this.shape_845,this.shape_846,this.shape_847];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.instance_1},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835}]}).wait(206));

	// Layer 3
	this.instance_2 = new lib.Layer3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(396,433);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206));

	// red veins
	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.lf(["#E1384D","#E6364A","#F57C8F","#DF3951"],[0,0.149,0.341,1],-68.3,0,68.3,0).s().p("AqqgDIAIjUIVNEpIgYCGg");
	this.shape_848.setTransform(976.1,1596.2);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.lf(["#C02133","#EB5058","#D62037","#932228"],[0,0.376,0.812,1],-1.6,-10.5,24.1,28.3).s().p("AjCB7Qm9iKEbgYQEagXDWhjQBsgxAzgtICoFRIigCuQkYhBjdhEg");
	this.shape_849.setTransform(1227.3,818.8);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.lf(["#E2304A","#F37D8C","#F58593","#DF3446","#B2223B"],[0,0.376,0.557,0.769,1],-10.9,-44.6,22.1,5.4).s().p("AlACqQg4h7g8iiIgxiKIAngCQAygFA5gNQC3gpDHhpQDGhpCPDDQBGBiAfB2QhpBIh5BlQjyDLhPCXQgVAqgeAAQhNAAiCkeg");
	this.shape_850.setTransform(1192.8,781.4);

	this.instance_3 = new lib.Layer5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(358,262);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#D12B3F").s().p("AgoM6QhwhAhwhsQhlhjhDhkQhDhkAAg1QAAiZBPBMQAgAeB9C1QAkAmCcB1QDGCUBAAAQApAAAmgSIBUiFQCfj4BCh/QAyheAXgxQArhYATg/QANgnAfgzQAhg3AfgfQAlgkAVAMQAaAPAABRQAAAQhBCkQhNDAhSCwQg9CBg2BhIABAIQAAAYgfAxQggA0gyAxIgKAKQhTBsg7AAQgNAAgMgCQgrANgsAAQhnAAiAhKgAs5l5QgfiFgbieQgWh+AAgKQAAgkAQgbQARgbAZgFQA9gKAyB/QAFBCAmC0QAJAqA9C4QA4C1AABJQAAAigLAYQgUArgwAAQhUAAhfmmg");
	this.shape_851.setTransform(755.5,824.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_851},{t:this.instance_3},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848}]}).wait(206));

	// labels
	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#000000").ss(6,1,1).p("AjRBdIGji5");
	this.shape_852.setTransform(1489.5,668.5);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#000000").s().p("AjgCfIEKluIBcDPIBcDQg");
	this.shape_853.setTransform(1455.1,677.7);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#000000").s().p("AgvCXQgWgFgSgMQgRgMgLgUQgKgTgBgbIAxAAQABAPAHAMQAHALALAHQALAHAOADIAdACIAYgBIAXgHQALgFAHgIQAHgKAAgOQAAgTgOgJQgPgKgWgGIgugLQgZgFgWgIQgWgJgOgQQgPgRAAgcQAAgXAKgRQAKgPAQgLQAQgKAUgFQAUgEAUgBQAYAAAWAFQAWAEAQAKQARALAJATQAKASACAbIgxAAQgCgOgGgKQgGgJgKgHQgKgFgMgDIgXgDIgWACIgVAHQgJAEgGAHQgGAHAAAMQAAAMAJAJQAJAIAOAGIAgAJIAhAIIAkAKQASAGAOAJQANAJAJAPQAIAOAAAWQAAAagLATQgLARgTAMQgSALgXAEQgXAEgWAAQgYAAgXgFg");
	this.shape_854.setTransform(1578.2,598.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#000000").s().p("AgrDRQgWgEgSgLQgRgKgMgRQgMgRgBgYIAyAAQAAANAIAKQAIAJALAGQALAFAOADIAYADQAZAAARgJQAQgIALgPQALgPAFgVQAFgVAAgZIAAgTIgBAAQgNAcgaANQgZANgcAAQgiAAgZgNQgZgMgRgUQgRgVgIgbQgIgbAAgfQAAgaAHgdQAHgcAQgXQAQgXAbgOQAagPAmAAQAdAAAYANQAXAMAOAZIAAAAIAAgrIAuAAIAAERQAAAlgIAcQgIAbgRASQgiAlhHAAQgVAAgVgFgAgkihQgRAJgLAQQgKAPgFATQgFAUAAAVQAAAVAEAUQAEAUAKAQQAKAQAQALQAQAKAYAAQAYAAARgKQARgLALgQQAKgQAFgUQAFgVAAgVQAAgUgFgTQgEgTgLgQQgKgPgQgJQgQgKgYAAQgWAAgRAJg");
	this.shape_855.setTransform(1546.2,603.9);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#000000").s().p("ABLCZIAAjKQAAgOgEgLQgEgLgIgIQgIgIgMgEQgLgEgOAAQgWAAgQAHQgRAHgLAMQgLANgFASQgGARAAAUIAACoIgxAAIAAkrIAuAAIAAAwIABAAQAQgbAYgOQAYgNAhAAQAeAAATAHQAUAJAMAOQAMAPAFAUQAFAUAAAYIAADEg");
	this.shape_856.setTransform(1514.3,597.8);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#000000").s().p("AhFCRQgUgIgMgOQgMgOgFgVQgFgTAAgZIAAjEIAxAAIAADKQAAAOAEALQAEALAIAIQARAQAcAAQAWAAAQgHQARgHALgMQALgNAFgRQAGgRAAgVIAAioIAxAAIAAErIguAAIAAgwIgBAAQgQAcgZANQgYANggAAQgeAAgTgIg");
	this.shape_857.setTransform(1482.1,598.5);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#000000").s().p("AgXDPIAAmdIAvAAIAAGdg");
	this.shape_858.setTransform(1459.6,592.5);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#000000").s().p("AChCZIAAjDIgCgaQgDgNgGgJQgGgJgMgFQgLgFgSAAQgkAAgVAVQgVAVAAAjIAAC5IgxAAIAAjDIgCgbQgDgMgGgJQgGgJgLgFQgLgFgRAAQgVAAgQAJQgPAIgJANQgKAMgEANQgFANAAAJIAAC5IgxAAIAAkrIAuAAIAAAtIABAAQARgaAYgNQAZgMAfAAQAcAAAXALQALAGAHAKQAIAKAFAOQAHgNAKgJQAKgKAMgGQAZgNAeAAQAWAAATAEQASAFANALQANAKAHARQAHAQAAAXIAADbg");
	this.shape_859.setTransform(1565.3,530.3);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#000000").s().p("AghCZQgPgCgOgHQgbgMgTgVQgSgVgKgcQgJgcAAgiQAAgfAJgeQAKgcASgVQATgWAbgMQAbgLAjAAQAkAAAbALQAbAMASAWQATAVAJAcQAKAegBAfQABAigKAcQgJAcgTAVQgSAVgbAMQgOAHgQACIghADgAgjhpQgSAIgMAPQgNAOgHAVQgHAVAAAaQAAAbAHAWQAHAVANAOQAMAPASAHQARAIASAAQATAAARgIQARgHANgPQANgOAHgVQAHgWABgbQAAgagIgVQgHgVgNgOQgNgPgRgIQgRgHgTgBQgSABgRAHg");
	this.shape_860.setTransform(1524,530.6);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#000000").s().p("AhOCZIAAkrIAvAAIAAA/IABAAQAJgSALgNQAKgOANgIQAagSAoACIAAA0QgeAAgVAIQgUAIgMAQQgNAPgGAXQgGAWAAAcIAACFg");
	this.shape_861.setTransform(1500.5,530.3);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#000000").s().p("AiHDPIAAmdIEPAAIAAAvIjYAAIAACDIC9AAIAAAuIi9AAIAAC9g");
	this.shape_862.setTransform(1473.9,524.9);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#000000").ss(6,1,1).p("AgYDlIAxnJ");
	this.shape_863.setTransform(618.9,317.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#000000").s().p("AjhjPIDhAZIDhAZIkKFtg");
	this.shape_864.setTransform(616.4,358.3);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#000000").s().p("AheDRIgQgEIAAgtIAOAEIAPACQAOAAALgGQAKgIAFgOIAVgxIh4kqIA5AAIBWD1IABAAIBUj1IA1AAIiDFTIgRAlQgIAPgKAJQgKALgMAEQgNAEgQAAg");
	this.shape_865.setTransform(716.8,263.6);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#000000").s().p("AgkDPQgPgDgNgHQgZgNgSgVQgRgVgJgdQgIgcAAggQAAggAIgbQAIgdASgVQARgVAagMQAZgNAjAAIAXACIAbAIQANAGAMAJQANAIAHAOIACAAIAAiaIAxAAIAAGdIgxAAIAAgpIgCAAQgLAZgbALQgZALgfAAgAgpgxQgSAKgKAQQgLARgEATQgFAVAAAWQAAAVAGAUQAFAUAMAQQALAQARAJQASAJAXAAQAZAAARgKQARgKAMgPQALgQAEgVQAGgUAAgVQAAgWgGgVQgFgTgLgQQgMgPgSgKQgRgKgaAAQgYAAgRAKg");
	this.shape_866.setTransform(684.3,252.2);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#000000").s().p("AggCZQgQgCgNgHQgcgMgSgUQgTgWgJgcQgJgdAAghQAAggAJgdQAJgcATgVQASgWAcgMQAbgMAiABQAkgBAbAMQAbAMATAWQASAVAJAcQAKAdAAAgQAAAhgKAdQgJAcgSAWQgTAUgbAMQgNAHgRACIghAEgAgjhpQgRAIgNAPQgNAOgHAVQgIAVAAAaQAAAcAIAVQAHAVANAPQANAOARAHQARAIASAAQATAAASgIQARgHAMgOQANgPAHgVQAHgVAAgcQAAgagHgVQgHgVgNgOQgMgPgRgIQgSgHgTAAQgSAAgRAHg");
	this.shape_867.setTransform(651.4,257.6);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#000000").s().p("AgTDQIgbgIQgNgFgMgJQgMgJgIgNIgBAAIAAAoIgxAAIAAmdIAxAAIAACbIABAAQAHgNAJgJQAJgJANgGQAbgLAeAAIAgADQAQADAMAHQAaANARAVQARAWAJAcQAJAcAAAgQAAAggJAcQgIAcgRAWQgRAVgaAMQgZAMgjAAgAgtgxQgQAKgMAQQgKAQgGATQgEAVAAAVQgBAVAGAVQAFAVALAPQALAQASAKQATAJAYAAQAaAAARgKQARgKAKgQQALgQAEgVQAEgVAAgWQAAgVgEgUQgHgTgKgPQgLgQgTgJQgRgKgXAAQgZAAgSAKg");
	this.shape_868.setTransform(618.5,252.2);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#000000").s().p("AChCZIAAjDIgCgaQgDgNgGgJQgGgJgMgFQgLgFgSAAQgkAAgVAVQgVAVAAAjIAAC5IgxAAIAAjDIgCgbQgDgMgGgJQgGgJgLgFQgLgFgRAAQgVAAgQAJQgPAIgJANQgKAMgEANQgFANAAAJIAAC5IgxAAIAAkrIAuAAIAAAtIABAAQARgaAYgNQAZgMAfAAQAcAAAXALQALAGAHAKQAIAKAFAOQAHgNAKgJQAKgKAMgGQAZgNAeAAQAWAAATAEQASAFANALQANAKAHARQAHAQAAAXIAADbg");
	this.shape_869.setTransform(559.5,257.2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#000000").s().p("AggCZQgQgCgOgHQgbgMgTgUQgSgWgKgcQgJgdAAghQAAggAJgdQAKgcASgVQATgWAbgMQAbgMAjABQAkgBAbAMQAbAMASAWQATAVAJAcQAJAdAAAgQAAAhgJAdQgJAcgTAWQgSAUgbAMQgOAHgQACIghAEgAgjhpQgSAIgMAPQgNAOgHAVQgHAVAAAaQAAAcAHAVQAHAVANAPQAMAOASAHQARAIASAAQATAAARgIQASgHAMgOQANgPAHgVQAHgVABgcQAAgagIgVQgHgVgNgOQgMgPgSgIQgRgHgTAAQgSAAgRAHg");
	this.shape_870.setTransform(518.2,257.6);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#000000").s().p("AhOCZIAAkrIAvAAIAAA/IABAAQAJgSALgNQAKgOANgIQAagSAoACIAAA0QgeAAgVAIQgUAIgMAQQgNAPgGAXQgGAWAAAcIAACFg");
	this.shape_871.setTransform(494.7,257.2);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#000000").s().p("AiHDPIAAmdIEPAAIAAAvIjYAAIAACDIC9AAIAAAuIi9AAIAAC9g");
	this.shape_872.setTransform(468.2,251.9);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f().s("#000000").ss(6,1,1).p("ADlgNInJAb");
	this.shape_873.setTransform(1400,588);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#000000").s().p("Ai8AAIgPjhIGXDJIl6D6g");
	this.shape_874.setTransform(1441.8,586.6);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#000000").ss(6,1,1).p("ADahIImzCR");
	this.shape_875.setTransform(1385.5,525.5);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#000000").s().p("AiVAAIhJjWIG9BZIksFUg");
	this.shape_876.setTransform(1422.3,518.2);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f().s("#000000").ss(6,1,1).p("ACIi4IkPFx");
	this.shape_877.setTransform(1057.5,316.2);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#000000").s().p("AgYBbIi3iFIGfi3IgyHDg");
	this.shape_878.setTransform(1073.6,288.5);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f().s("#000000").ss(6,1,1).p("AAZjkIgxHI");
	this.shape_879.setTransform(980.2,262.9);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#000000").s().p("AAAC3IjggZIELltIC3Gfg");
	this.shape_880.setTransform(982.7,221.7);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f().s("#000000").ss(6,1,1).p("ACziPIllEf");
	this.shape_881.setTransform(1311.8,486.6);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#000000").s().p("AhRAjIiOiwIG/hGIikGng");
	this.shape_882.setTransform(1337.9,468.7);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#000000").s().p("AgvCXQgWgFgSgMQgRgMgLgUQgKgTgBgcIAxAAQABAQAHAMQAHALALAHQALAHAOACIAdADIAYgBIAXgGQALgGAHgJQAHgJAAgOQAAgTgOgJQgPgKgWgGIgugLQgZgFgWgIQgWgJgOgQQgPgQAAgdQAAgXAKgQQAKgRAQgKQAQgKAUgFQAUgFAUAAQAYABAWAEQAWAEAQALQARAKAJATQAKASACAbIgxAAQgCgPgGgJQgGgJgKgHQgKgFgMgDIgXgDIgWACIgVAGQgJAFgGAHQgGAHAAAMQAAANAJAIQAJAIAOAGIAgAJIAhAIIAkAKQASAGAOAIQANAKAJAPQAIAOAAAWQAAAagLATQgLARgTALQgSAMgXAEQgXAFgWgBQgYABgXgGg");
	this.shape_883.setTransform(1578.2,512);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#000000").s().p("AghCZQgPgCgOgHQgbgMgSgUQgTgWgJgcQgKgcABgiQgBgfAKgeQAJgcATgVQASgWAbgMQAcgMAiABQAkgBAbAMQAbAMASAWQATAVAJAcQAJAeAAAfQAAAigJAcQgJAcgTAWQgSAUgbAMQgNAHgQACIgiAEgAgjhoQgSAGgMAPQgNAPgHAVQgIAVABAaQgBAcAIAVQAHAVANAPQAMAOASAHQARAHASABQATgBARgHQARgHANgOQANgPAHgVQAHgVAAgcQABgagIgVQgHgVgNgPQgNgPgRgGQgRgIgTAAQgSAAgRAIg");
	this.shape_884.setTransform(1536.4,444.4);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#000000").s().p("AgaDPIAAlvIiLAAIAAguIFLAAIAAAuIiKAAIAAFvg");
	this.shape_885.setTransform(1509.5,438.7);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#000000").ss(6,1,1).p("AgijiIBFHF");
	this.shape_886.setTransform(819.2,262.5);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#000000").s().p("Ag7jSIEbFhIjgAiIjfAjg");
	this.shape_887.setTransform(815.7,222.1);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#000000").s().p("AhdDRIgRgEIAAgtIAPAEIANACQAQAAAKgGQAKgIAGgOIAUgxIh3kqIA3AAIBXD1IABAAIBUj1IA0AAIiCFTIgQAlQgIAPgLAJQgKALgNAEQgMAEgQAAg");
	this.shape_888.setTransform(1323.8,263.6);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#000000").s().p("AgjDPQgQgDgMgHQgagNgRgVQgSgVgIgdQgJgcAAggQAAggAIgbQAJgdARgVQARgVAZgMQAbgNAhAAIAZACIAbAIQANAGAMAJQALAIAJAOIABAAIAAiaIAxAAIAAGdIgxAAIAAgpIgBAAQgMAZgaALQgbALgeAAgAgqgxQgQAKgLAQQgKARgGATQgEAVAAAWQAAAVAFAUQAGAUALAQQAMAQARAJQASAJAXAAQAZAAARgKQASgKALgPQAKgQAGgVQAEgUAAgVQAAgWgEgVQgGgTgLgQQgMgPgSgKQgSgKgZAAQgYAAgSAKg");
	this.shape_889.setTransform(1291.3,252.2);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#000000").s().p("AghCZQgPgCgOgHQgbgMgTgUQgSgWgKgcQgJgdAAghQAAggAJgdQAKgcASgVQATgWAbgMQAbgMAjABQAkgBAbAMQAbAMASAWQATAVAJAcQAJAdAAAgQAAAhgJAdQgJAcgTAWQgSAUgbAMQgNAHgQACIgiAEgAgjhpQgSAIgMAPQgNAOgHAVQgHAVAAAaQAAAcAHAVQAHAVANAPQAMAOASAHQARAIASAAQATAAARgIQARgHANgOQANgPAHgVQAHgVAAgcQAAgagHgVQgHgVgNgOQgNgPgRgIQgRgHgTAAQgSAAgRAHg");
	this.shape_890.setTransform(1258.4,257.6);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#000000").s().p("AgTDQIgbgIQgNgFgLgJQgNgJgIgNIgBAAIAAAoIgxAAIAAmdIAxAAIAACbIABAAQAGgNAKgJQAJgJAOgGQAagLAeAAIAhADQAPADANAHQAaANAQAVQASAWAIAcQAJAcAAAgQAAAggJAcQgIAcgRAWQgRAVgaAMQgaAMgiAAgAgsgxQgSAKgLAQQgKAQgFATQgGAVAAAVQABAVAFAVQAFAVALAPQALAQATAKQARAJAZAAQAaAAAQgKQASgKAKgQQALgQAEgVQAFgVAAgWQgBgVgEgUQgGgTgMgPQgLgQgRgJQgSgKgXAAQgZAAgRAKg");
	this.shape_891.setTransform(1225.5,252.2);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#000000").s().p("AghCZQgPgCgOgHQgbgMgTgUQgSgWgKgcQgJgdAAghQAAggAJgdQAKgcASgVQATgWAbgMQAbgMAjABQAkgBAbAMQAbAMASAWQATAVAJAcQAJAdAAAgQAAAhgJAdQgJAcgTAWQgSAUgbAMQgNAHgQACIgiAEgAgjhpQgSAIgMAPQgNAOgHAVQgHAVAAAaQAAAcAHAVQAHAVANAPQAMAOASAHQARAIASAAQATAAARgIQARgHANgOQANgPAHgVQAHgVABgcQAAgagIgVQgHgVgNgOQgNgPgRgIQgRgHgTAAQgSAAgRAHg");
	this.shape_892.setTransform(1174.7,257.6);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#000000").s().p("AgaDPIAAluIiLAAIAAgvIFLAAIAAAvIiKAAIAAFug");
	this.shape_893.setTransform(1147.8,251.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858,p:{y:592.5}},{t:this.shape_857,p:{y:598.5}},{t:this.shape_856,p:{y:597.8}},{t:this.shape_855,p:{y:603.9}},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852}]},1).to({state:[]},61).to({state:[{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_858,p:{y:506.3}},{t:this.shape_857,p:{y:512.3}},{t:this.shape_856,p:{y:511.6}},{t:this.shape_855,p:{y:517.7}},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873}]},44).to({state:[]},49).to({state:[{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858,p:{y:592.5}},{t:this.shape_857,p:{y:598.5}},{t:this.shape_856,p:{y:597.8}},{t:this.shape_855,p:{y:603.9}},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852}]},22).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(358,262,1056,1508);


(lib.buttonupbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AlJBpQgrAAgggfQgegfAAgrQAAgqAeggQAggeArAAIKTAAQAsAAAeAeQAfAgAAAqQAAArgfAfQgeAfgsAAg");
	this.shape.setTransform(43.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.buttonupbg, new cjs.Rectangle(0,0,87,21), null);


(lib.arrowheadgreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73C21D").s().p("AlECcIG5nmIDQKVg");
	this.shape.setTransform(8.8,9,0.273,0.273);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowheadgreen, new cjs.Rectangle(0,0,17.7,18.1), null);


(lib.arcreplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73C21D").s().p("AjWCcQgZg0AAg7QAAgyAUgwQAUgtAjgjQAjgkAugTQAvgUAzAAQBIAAA9AmQA8AlAgA+QgegygzgcQg1geg8AAQguAAgpASQgpARgfAeQggAfgRAoQgRApgBAsQABAtARAoQAJAWAOATIgEAEIgOAPIgQAQIgGAGQgUgYgPgdg");
	this.shape.setTransform(24,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arcreplay, new cjs.Rectangle(0,0,48,41.8), null);


(lib.replayanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrowheadgreen();
	this.instance.parent = this;
	this.instance.setTransform(49,15.3,0.264,0.264,-165,0,0,8.2,8.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:8.8,regY:9,scaleX:0.04,scaleY:0.04,rotation:-168,x:47.1,y:12.1,alpha:0.154},0).wait(1).to({scaleX:0.08,scaleY:0.08,rotation:-171.5,x:44.9,y:9.2,alpha:0.308},0).wait(1).to({scaleX:0.12,scaleY:0.12,rotation:-175.2,x:42.2,y:6.6,alpha:0.462},0).wait(1).to({scaleX:0.17,scaleY:0.17,rotation:-179.5,x:39.3,y:4.6,alpha:0.616},0).wait(1).to({scaleX:0.21,scaleY:0.21,rotation:-184.2,x:36,y:3,alpha:0.77},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-189.7,x:32.5,y:2,alpha:0.783},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-195.9,x:28.7,y:1.5,alpha:0.796},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-203.1,x:25.1,y:1.6,alpha:0.808},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:-211.9,x:21.4,y:2.3,alpha:0.821},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:-223.2,x:17.9,y:3.5,alpha:0.834},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:-241.1,x:14.6,y:5.2,alpha:0.847},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:-279,x:11.7,y:7.5,alpha:0.859},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-299.4,x:9.2,y:10,alpha:0.872},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:-312.1,x:6.9,y:12.8,alpha:0.885},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-321.6,x:5.2,y:16,alpha:0.898},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-329.1,x:4,y:19.6,alpha:0.911},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-335.3,x:3.4,y:23,alpha:0.923},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-340.5,x:3.5,y:26.7,alpha:0.936},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-345,x:4.1,y:30.3,alpha:0.949},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-348.8,x:5.4,y:33.7,alpha:0.962},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-352.2,x:6.9,y:37,alpha:0.974},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-355.2,x:8.9,y:40.1,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,rotation:-357.8,x:11.2,y:43,alpha:1},0).wait(15).to({alpha:0.909},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0},0).wait(1));

	// arc mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AAhA+IDtiqIBUByIjtCsg");
	var mask_graphics_1 = new cjs.Graphics().p("AAbBMIDJjvIBxBeIjJDvg");
	var mask_graphics_2 = new cjs.Graphics().p("AApB1ICRkrICHBCIiRErg");
	var mask_graphics_3 = new cjs.Graphics().p("ABKCdIBHlYICWAfIhHFYg");
	var mask_graphics_4 = new cjs.Graphics().p("ABki2ICcgHIAQF0IicAHg");
	var mask_graphics_5 = new cjs.Graphics().p("AATilICZgtIBwF4IiZAtg");
	var mask_graphics_6 = new cjs.Graphics().p("AgdiRICphHICXFqIiqBHg");
	var mask_graphics_7 = new cjs.Graphics().p("AhKh6IC3hkIC7FZIi3Bkg");
	var mask_graphics_8 = new cjs.Graphics().p("AhyhfIDAiEIDeFDIjACEg");
	var mask_graphics_9 = new cjs.Graphics().p("AiUhAIDDioID/EpIjECog");
	var mask_graphics_10 = new cjs.Graphics().p("AiwgfIDBjNIEdEMIjCDNg");
	var mask_graphics_11 = new cjs.Graphics().p("AjLgKIDFjsIE0EBIjEDsg");
	var mask_graphics_12 = new cjs.Graphics().p("AjjALIDDkJIFND0IjDEJg");
	var mask_graphics_13 = new cjs.Graphics().p("Aj4AjIC/kpIFkDkIi/Epg");
	var mask_graphics_14 = new cjs.Graphics().p("AkKA9IC3lKIF7DRIi3FKg");
	var mask_graphics_15 = new cjs.Graphics().p("AkYBXICrlrIGRC+IisFrg");
	var mask_graphics_16 = new cjs.Graphics().p("AkhByICdmLIGmCoIidGLg");
	var mask_graphics_17 = new cjs.Graphics().p("AkqCCICnmrIGuCoIinGrg");
	var mask_graphics_18 = new cjs.Graphics().p("AkyCRICwnKIG1CpIiwHKg");
	var mask_graphics_19 = new cjs.Graphics().p("Ak7ChIC6nqIG9CpIi6Hqg");
	var mask_graphics_20 = new cjs.Graphics().p("AlDCxIDDoKIHECpIjDIKg");
	var mask_graphics_21 = new cjs.Graphics().p("AlMDBIDNorIHMCqIjNIrg");
	var mask_graphics_22 = new cjs.Graphics().p("AlUDRIDVpLIHUCqIjWJLg");
	var mask_graphics_23 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_24 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_25 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_26 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_27 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_28 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_29 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_30 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_31 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_32 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_33 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_34 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_35 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_36 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_37 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_38 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_39 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_40 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_41 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_42 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_43 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_44 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_45 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_46 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_47 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");
	var mask_graphics_48 = new cjs.Graphics().p("AlcDhIDeprIHbCqIjeJrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:35.4,y:17.8}).wait(1).to({graphics:mask_graphics_1,x:34.1,y:17}).wait(1).to({graphics:mask_graphics_2,x:32.1,y:13.3}).wait(1).to({graphics:mask_graphics_3,x:29.5,y:9.3}).wait(1).to({graphics:mask_graphics_4,x:27.2,y:5.3}).wait(1).to({graphics:mask_graphics_5,x:28.4,y:1.3}).wait(1).to({graphics:mask_graphics_6,x:29.1,y:1.3}).wait(1).to({graphics:mask_graphics_7,x:29.6,y:1.4}).wait(1).to({graphics:mask_graphics_8,x:30,y:1.4}).wait(1).to({graphics:mask_graphics_9,x:30.2,y:1.4}).wait(1).to({graphics:mask_graphics_10,x:30.2,y:1.4}).wait(1).to({graphics:mask_graphics_11,x:30.2,y:2.2}).wait(1).to({graphics:mask_graphics_12,x:30.1,y:3}).wait(1).to({graphics:mask_graphics_13,x:29.9,y:3.7}).wait(1).to({graphics:mask_graphics_14,x:29.6,y:4.5}).wait(1).to({graphics:mask_graphics_15,x:29.2,y:5.3}).wait(1).to({graphics:mask_graphics_16,x:28.4,y:6}).wait(1).to({graphics:mask_graphics_17,x:27.7,y:7.4}).wait(1).to({graphics:mask_graphics_18,x:27,y:8.8}).wait(1).to({graphics:mask_graphics_19,x:26.4,y:10.1}).wait(1).to({graphics:mask_graphics_20,x:25.7,y:11.5}).wait(1).to({graphics:mask_graphics_21,x:25,y:12.9}).wait(1).to({graphics:mask_graphics_22,x:24.4,y:14.3}).wait(1).to({graphics:mask_graphics_23,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_24,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_25,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_26,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_27,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_28,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_29,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_30,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_31,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_32,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_33,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_34,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_35,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_36,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_37,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_38,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_39,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_40,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_41,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_42,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_43,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_44,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_45,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_46,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_47,x:23.7,y:15.6}).wait(1).to({graphics:mask_graphics_48,x:23.7,y:15.6}).wait(1));

	// arc
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73C21D").s().p("AsRIAQhejAAAjXQABi9BJitQBGioCCiBQCAiBCohGQCuhKC8AAQEJAADhCLQDaCHB3DjQhvi0i6hpQjAhsjeAAQipAAiZBAQiWA9hyBxQhzBxg/CSQhCCXAAClQAACiA/CVQA9CQBvBwQgrAcgcArQgdAsgHA0QihiDhbi5g");
	this.shape.setTransform(24,22.6,0.273,0.273);

	this.instance_1 = new lib.arcreplay();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,22.6,1,1,0,0,0,24,22.6);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.shape,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_1}]},38).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).wait(1).to({regY:20.9,y:20.9,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#73C21D").s().p("AgpA3IgHAAIAFgTIAEABIAFAAIAGgBIAEgDIACgEIACgDIgOhRIAXAAIAHA6IAcg6IAYAAIg0BdQgCAGgDADQgDADgEACQgEACgEABIgLABg");
	this.shape_1.setTransform(63.1,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#73C21D").s().p("AgaAqQgFgCgEgDIgFgHQgBgDAAgFQAAgGACgFQACgEAEgEQAEgDAGgCQAGgDAHAAIANgBIAKgCQAEgBACgCQACgCAAgEQAAgDgCgDIgDgCIgFgCIgFgBQgGABgDADQgFADgBAGIgWAAQABgIAEgFQAEgGAFgDQAFgDAHgBIANgBIALABQAGAAAFACQAGADADAEQADAFAAAGIgCAOIgHAgIgBAGIAAAGIABAEIgXAAIAAgIQgFAFgGADQgGACgHAAQgHAAgFgBgAAHAFIgJABIgGABIgFACIgEAEQgCADAAADQAAAFAEACQAEACAFABQAFgBADgBIAGgFIAEgGIACgGIACgIQgEADgFAAg");
	this.shape_2.setTransform(54.2,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#73C21D").s().p("AgWA5IAXhxIAWAAIgXBxg");
	this.shape_3.setTransform(48.2,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#73C21D").s().p("AgxA5IAYhuIAWAAIgCAKIAAAAQADgHAHgDQAGgDAHAAQAIAAAGADQAGABAEAFQAIAIAAAQQAAAKgCAJQgDAKgGAHIgGAHIgIAFQgJAFgLAAIgGAAIgHgDIgFgEQgDgDgBgDIgBAAIgIAogAAAgjQgEADgDAGQgDAFgBAGIgCALQAAAIAEAEQACACAEACIAGABQAGAAAFgDQAEgEAEgEQADgFABgGIABgMIgBgHIgCgFIgGgFQgDgBgEAAQgGAAgFAEg");
	this.shape_4.setTransform(40.3,27.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#73C21D").s().p("AgTApQgHgCgFgFQgFgEgDgHQgCgGAAgKQAAgGADgMQADgJAGgHQAGgHAIgEIAJgDIAJgBQAJgBAHADQAHACAFAFQAFAEADAHQADAHAAAJIgBALIg8AAIAAACIAAACIAAACIABAGQABADACACQAFAFAJAAIAFgCIAFgCIADgEIADgEIAXAAIgHANQgEAFgFAEQgFADgHACQgGABgIAAQgJAAgGgCgAgDgYIgGAEIgFAGIgDAHIAlAAIAAgHIgDgGQgBgDgDgBQgDgBgFAAQgFAAgDABg");
	this.shape_5.setTransform(31.5,25.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#73C21D").s().p("AASA5IgBgEIAAgDIABgMIAAgMIgBgGIgDgFIgFgCIgHAAIgXAAIgJAsIgZAAIAYhxIA1AAQAIAAAGABQAHACAEAEQAEADADAGQACAGAAAIQAAAGgCAFQgCAFgDAEIgIAGQgFADgGABIAGADQACACABADQADAFAAAHIgBAJIAAALIAAAHIACAGgAgRgEIAWAAIAKgBQAFgBADgDQAEgCACgDQACgEAAgEQAAgFgBgDQgCgDgCgBIgGgCIgHAAIgXAAg");
	this.shape_6.setTransform(21.1,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.5,6.9,56.2,28.7);


(lib.replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0062AE").s().p("AgpA3IgHAAIAFgTIAEABIAFAAIAGgBIAEgDIACgEIACgDIgOhRIAXAAIAHA6IAcg6IAYAAIg0BdQgCAGgDADQgDADgEACQgEACgEABIgLABg");
	this.shape.setTransform(63.1,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0062AE").s().p("AgaAqQgFgCgEgDIgFgHQgBgDAAgFQAAgGACgFQACgEAEgEQAEgDAGgCQAGgDAHAAIANgBIAKgCQAEgBACgCQACgCAAgEQAAgDgCgDIgDgCIgFgCIgFgBQgGABgDADQgFADgBAGIgWAAQABgIAEgFQAEgGAFgDQAFgDAHgBIANgBIALABQAGAAAFACQAGADADAEQADAFAAAGIgCAOIgHAgIgBAGIAAAGIABAEIgXAAIAAgIQgFAFgGADQgGACgHAAQgHAAgFgBgAAHAFIgJABIgGABIgFACIgEAEQgCADAAADQAAAFAEACQAEACAFABQAFgBADgBIAGgFIAEgGIACgGIACgIQgEADgFAAg");
	this.shape_1.setTransform(54.2,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0062AE").s().p("AgWA5IAXhxIAWAAIgXBxg");
	this.shape_2.setTransform(48.2,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0062AE").s().p("AgxA5IAYhuIAWAAIgCAKIAAAAQADgHAHgDQAGgDAHAAQAIAAAGADQAGABAEAFQAIAIAAAQQAAAKgCAJQgDAKgGAHIgGAHIgIAFQgJAFgLAAIgGAAIgHgDIgFgEQgDgDgBgDIgBAAIgIAogAAAgjQgEADgDAGQgDAFgBAGIgCALQAAAIAEAEQACACAEACIAGABQAGAAAFgDQAEgEAEgEQADgFABgGIABgMIgBgHIgCgFIgGgFQgDgBgEAAQgGAAgFAEg");
	this.shape_3.setTransform(40.3,27.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0062AE").s().p("AgTApQgHgCgFgFQgFgEgDgHQgCgGAAgKQAAgGADgMQADgJAGgHQAGgHAIgEIAJgDIAJgBQAJgBAHADQAHACAFAFQAFAEADAHQADAHAAAJIgBALIg8AAIAAACIAAACIAAACIABAGQABADACACQAFAFAJAAIAFgCIAFgCIADgEIADgEIAXAAIgHANQgEAFgFAEQgFADgHACQgGABgIAAQgJAAgGgCgAgDgYIgGAEIgFAGIgDAHIAlAAIAAgHIgDgGQgBgDgDgBQgDgBgFAAQgFAAgDABg");
	this.shape_4.setTransform(31.5,25.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0062AE").s().p("AASA5IgBgEIAAgDIABgMIAAgMIgBgGIgDgFIgFgCIgHAAIgXAAIgJAsIgZAAIAYhxIA1AAQAIAAAGABQAHACAEAEQAEADADAGQACAGAAAIQAAAGgCAFQgCAFgDAEIgIAGQgFADgGABIAGADQACACABADQADAFAAAHIgBAJIAAALIAAAHIACAGgAgRgEIAWAAIAKgBQAFgBADgDQAEgCACgDQACgEAAgEQAAgFgBgDQgCgDgCgBIgGgCIgHAAIgXAAg");
	this.shape_5.setTransform(21.1,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0062AE").s().p("AlECcIG5nmIDQKVg");
	this.shape_6.setTransform(11.7,42.5,0.273,0.273);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0062AE").s().p("AsRIAQhejAAAjXQABi9BJitQBGioCCiBQCAiBCohGQCuhKC8AAQEJAADhCLQDaCHB3DjQhvi0i6hpQjAhsjeAAQipAAiZBAQiWA9hyBxQhzBxg/CSQhCCXAAClQAACiA/CVQA9CQBvBwQgrAcgcArQgdAsgHA0QihiDhbi5g");
	this.shape_7.setTransform(24,22.6,0.273,0.273);

	this.instance = new lib.replayanimation();
	this.instance.parent = this;
	this.instance.setTransform(34.9,25.8,1,1,0,0,0,34.9,25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,204,0)").s().p("AmbE0IAApmIM3AAIAAJmg");
	this.shape_8.setTransform(30.9,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_8}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.7,51.6);


(lib.btncontinue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agyg7IBlA7IhlA8g");
	this.shape.setTransform(48.6,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgHQgDgIAAgJQAAgIADgHQADgIAFgFQAFgGAIgDQAHgDAIAAQAKAAAHAEIAHAEIAFAGQAFAHACAIQACAIgBAIIg3AAIACAJIAEAGQAEAFAIAAQAHAAAFgDQAEgEABgDIATAAQgCAHgEAFQgDAFgFADQgJAGgNAAQgIAAgIgDgAgHgWIgGAEIgDAGIgBAFIAiAAQgBgIgEgFIgFgDIgHgBQgEAAgDACg");
	this.shape_1.setTransform(33,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAlQgFgCgDgEQgEgEgBgGQgCgGABgHIAAgvIAVAAIAAArIAAAIIADAGQADAFAIAAQAHAAAEgFQAEgFAAgMIAAgoIAVAAIAABNIgUAAIAAgLIAAAAIgFAGIgGAEQgFADgHAAQgJAAgFgDg");
	this.shape_2.setTransform(24.3,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAoIAAgrIgBgIIgCgGQgCgDgCgBQgDgBgDAAQgJAAgDAFQgCADgBAEIgBAKIAAAoIgVAAIAAhNIAUAAIAAALIABAAQADgHAHgDQAGgDAGAAQAJAAAFACQAGADACAEQAEAEABAGQACAGAAAHIAAAvg");
	this.shape_3.setTransform(15.4,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA2IAAhNIAVAAIAABNgAgKgjIAAgSIAVAAIAAASg");
	this.shape_4.setTransform(9,9.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAzIgJgBQgDAAgEgCQgDgCgCgEQgCgDAAgGIAAgtIgNAAIAAgOIANAAIAAgYIAUAAIAAAYIAQAAIAAAOIgQAAIAAAlQAAAGACACQACABAFAAIAEAAIADAAIAAAQIgGABg");
	this.shape_5.setTransform(4.4,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPAoIAAgrIAAgIIgDgGQgBgDgDgBQgDgBgEAAQgHAAgEAFQgCADgBAEIgBAKIAAAoIgWAAIAAhNIAVAAIAAALIAAAAQAFgHAGgDQAGgDAGAAQAIAAAGACQAGADADAEQADAEABAGQACAGgBAHIAAAvg");
	this.shape_6.setTransform(-2.5,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAmQgHgDgFgFQgFgGgDgHQgDgIAAgJQAAgIADgIQADgHAFgGQAFgFAHgDQAIgDAIAAQAGAAALADQAHADAFAFQAGAGACAHQADALAAAFQgBAMgCAFQgCAHgGAGQgFAFgHADQgIADgJAAQgIAAgIgDgAgIgWQgEACgCAEIgDAIIgBAIIABAJIADAIQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQACgDABgFIABgJIgBgIQgBgFgCgDQgCgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_7.setTransform(-11.6,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA0IgKgGIgHgGQgHgIgDgKQgEgKAAgMQAAgKAEgLIAEgKIAGgIIAHgGIAKgGQAJgEAMAAQAJAAAIACQAIADAFAFQAHAFAEAHQAEAHABAKIgXAAQAAgEgDgEIgFgGIgHgEIgIgBQgHAAgGACQgFAEgEAFQgDAFgBAHQgCAGgBAGQABAHACAGQABAHADAFQAEAFAFADQAGADAHAAQAFAAAFgBQADgCAEgEQAGgGABgLIAXAAQgCANgDAFQgDAJgHAFQgGAGgIADQgIADgKAAQgMAAgJgEg");
	this.shape_8.setTransform(-21.7,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.instance = new lib.buttonupbg();
	this.instance.parent = this;
	this.instance.setTransform(12.8,10.5,1.082,1,0,0,0,43.5,10.5);
	this.instance.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 76.5, 127.5, 0)];
	this.instance.cache(-2,-2,91,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-1.9,94.2,22.9);


// stage content:
(lib.heart_Canvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{continue2:542,continue3:664,beginning:35});

	// timeline functions:
	this.frame_0 = function() {
		playSound("heart_p01_titlewav");
	}
	this.frame_1 = function() {
		/* 
		function keepGoing(e:MouseEvent):void {
			play();
		}
		
		function replay(e:MouseEvent):void {
			gotoAndPlay("beginning");
		}
		*/
		
		mainStage = this;
		heart = this.heart;
		
		heart.gotoAndStop(0);
	}
	this.frame_35 = function() {
		playSound("heart_p02_theHeartIswav");
	}
	this.frame_36 = function() {
		/* heart.gotoAndStop(1);*/
		
		heart.gotoAndStop(0);
	}
	this.frame_325 = function() {
		/* stop();
		
		continue1_btn.addEventListener(MouseEvent.CLICK, keepGoing);
		*/
		
		function keepGoing() {
			mainStage.play();
		}
		
		this.stop();
		
		this.continue1_btn.addEventListener("click", keepGoing.bind(this));
	}
	this.frame_339 = function() {
		playSound("heart_p03_heartContractswav");
	}
	this.frame_434 = function() {
		playSound("heart_p04_inFirstStagewav");
	}
	this.frame_437 = function() {
		heart.gotoAndPlay(2);
	}
	this.frame_521 = function() {
		this.stop();
		
		mainStage.continue2_btn.addEventListener('click', keepGoing2.bind(this));
		
		
		function keepGoing2() {
			mainStage.gotoAndPlay("continue2");
		}
	}
	this.frame_560 = function() {
		playSound("heart_p05_atriaPumpwav");
	}
	this.frame_563 = function() {
		heart.gotoAndPlay("toVentricles");
	}
	this.frame_633 = function() {
		this.stop();
		
		function keepGoing3() {
			mainStage.gotoAndPlay("continue3");
		}
		
		this.continue3_btn.addEventListener('click', keepGoing3.bind(this));
	}
	this.frame_675 = function() {
		playSound("heart_p06_inSecondStagewav");
	}
	this.frame_683 = function() {
		heart.gotoAndPlay("ventricleSqueeze");
	}
	this.frame_848 = function() {
		this.stop();
		
		function keepGoing() {
			mainStage.play();
		}
		
		this.continue4_btn.addEventListener('click', keepGoing.bind(this));
	}
	this.frame_860 = function() {
		playSound("heart_p07_afterOneCyclewav");
	}
	this.frame_865 = function() {
		heart.gotoAndPlay("relax");
	}
	this.frame_1017 = function() {
		this.stop();
		
		this.replay_btn.addEventListener('click', replay.bind(this));
		
		function replay() {
			mainStage.gotoAndPlay('beginning');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(34).call(this.frame_35).wait(1).call(this.frame_36).wait(289).call(this.frame_325).wait(14).call(this.frame_339).wait(95).call(this.frame_434).wait(3).call(this.frame_437).wait(84).call(this.frame_521).wait(39).call(this.frame_560).wait(3).call(this.frame_563).wait(70).call(this.frame_633).wait(42).call(this.frame_675).wait(8).call(this.frame_683).wait(165).call(this.frame_848).wait(12).call(this.frame_860).wait(5).call(this.frame_865).wait(152).call(this.frame_1017).wait(46));

	// btns
	this.continue1_btn = new lib.btncontinue();
	this.continue1_btn.parent = this;
	this.continue1_btn.setTransform(105.7,266.6);
	this.continue1_btn.shadow = new cjs.Shadow("#000000",2,2,5);
	new cjs.ButtonHelper(this.continue1_btn, 0, 1, 1);

	this.replay_btn = new lib.replay();
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(98.2,235.1);
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.replay(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.continue1_btn,p:{x:105.7,y:266.6}}]},325).to({state:[]},1).to({state:[{t:this.continue1_btn,p:{x:110.5,y:274.3}}]},194).to({state:[]},2).to({state:[{t:this.continue1_btn,p:{x:115.2,y:236}}]},110).to({state:[]},32).to({state:[{t:this.continue1_btn,p:{x:97,y:242}}]},183).to({state:[]},2).to({state:[{t:this.replay_btn}]},167).wait(47));

	// legend
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB778A").s().p("AhoBpIAAjRIDRAAIAADRg");
	this.shape.setTransform(24.2,375.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699CC").s().p("AhoBpIAAjRIDRAAIAADRg");
	this.shape_1.setTransform(24.2,347);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_2.setTransform(162.7,374.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFADAHQABAIAAAHQAAAJgBAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_3.setTransform(154.2,376.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHgBgJQABgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAIADAEAGQAFAFACAHQACAIAAAHQAAAJgCAHQgCAHgFAGQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgEACgFQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_4.setTransform(145.6,376.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_5.setTransform(139.7,374.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_6.setTransform(133.8,374.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAFIAAAsIgNAAIAAhrIANAAIAAAqQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_7.setTransform(120.9,374.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKIAEAKQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_8.setTransform(112.7,376.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_9.setTransform(107,374.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGgBAGIAAAjg");
	this.shape_10.setTransform(103.4,376.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAGIAAgLIArAAIAAALg");
	this.shape_11.setTransform(97.5,376);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_12.setTransform(90.5,376.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_13.setTransform(82.4,376.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgEgEAAgHIANAAQAAAEACADIAGADIAFADIAGAAQAGAAAFgCQAEgCADgEQADgEABgFQACgGAAgGIAAgFIgBAAQgDAHgHADQgHADgGAAQgIAAgHgDQgGgDgFgFQgFgFgCgHQgBgHgBgIIACgNQACgIAEgGQAFgGAGgDQAHgEAJAAQAIAAAGADQAGADAEAGIAAgKIAMAAIAABGQAAAJgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgIgpQgFACgDAFIgEAJIgBAKIABAKQABAFACAEQADAEAFADQAEADAFgBQAGABAEgDQAFgDADgEQACgEABgFIACgKIgCgKQAAgGgDgDQgDgFgEgCQgEgCgGAAQgGAAgDACg");
	this.shape_14.setTransform(73.8,377.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIADAAQAEAAADgCQADgCABgDIAFgNIgehMIAOAAIAWA+IAAAAIAWg+IAOAAIgiBXIgEAJIgFAHIgGADIgHABg");
	this.shape_15.setTransform(65.9,377.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgQAAIAdgoIgbglIARAAIASAbIASgbIAQAAIgbAkIAeApg");
	this.shape_16.setTransform(58.3,376.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWA0QgJgFgHgIIgFgJIgEgJQgCgHgBgOQAAgGADgOQADgKAGgIQAHgIAJgFQAFgCAGgBIALgBIAMABQAGABAEACQAKAFAHAIQAGAIADAKQAEAOgBAGQABALgEAKIgEAJIgFAJQgHAIgKAFQgKAEgMAAQgMAAgKgEgAgQgoIgGAFIgGAGQgEAGgCAIQgCAIAAAHQAAAIACAIQACAIAEAGIAGAGIAGAEQAHAEAJAAQAJAAAIgEQAHgEAFgGQAEgGACgIQACgIAAgIQAAgHgCgIQgCgIgEgGQgFgGgHgFQgIgDgJAAQgJAAgHADg");
	this.shape_17.setTransform(48.7,374.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_18.setTransform(169.1,346.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgDgHABgJQgBgHADgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFADAHQABAIAAAHQAAAJgBAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQAEgEABgFQACgFAAgIQAAgGgCgFQgBgFgEgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_19.setTransform(160.6,347.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHgBgJQABgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAKAAAGADQAIADAEAGQAFAFACAHQACAIABAHQgBAJgCAHQgCAHgFAGQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgEACgFQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_20.setTransform(152,347.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_21.setTransform(146.1,346.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_22.setTransform(140.2,346.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_23.setTransform(129.4,347.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_24.setTransform(122.2,347.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHgBgJQABgHACgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAFAGQAFAFACAHQACAIAAAHQAAAJgCAHQgCAHgFAGQgFAFgHADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgEACgFQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_25.setTransform(113.6,347.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgGIAGgDQAHgDAHAAIAJABIAHACQAGAEAFAFQAEAFADAIQACAHAAAIQAAAJgCAGQgDAHgEAGQgEAFgHADQgHADgJABIgFgBIgHgCIgGgDQgEgDgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAFIgBAKIABALQABAEADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgJIABgKQAAgGgBgFIgEgJQgDgFgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_26.setTransform(105.1,349.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAGIAAgLIArAAIAAALg");
	this.shape_27.setTransform(97.5,347.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_28.setTransform(90.5,347.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_29.setTransform(82.4,347.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgCgCgFQgEgEAAgHIANAAQAAAEACADIAGADIAFADIAGAAQAGAAAFgCQAEgCADgEQADgEABgFQACgGAAgGIAAgFIgBAAQgDAHgHADQgHADgGAAQgIAAgHgDQgGgDgFgFQgFgFgCgHQgBgHgBgIIACgNQACgIAEgGQAFgGAGgDQAHgEAJAAQAIAAAGADQAGADAEAGIAAgKIAMAAIAABGQAAAJgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgIgpQgFACgDAFIgEAJIgBAKIABAKQABAFACAEQADAEAFADQAEADAFgBQAGABAEgDQAFgDADgEQACgEABgFIACgKIgCgKQAAgGgDgDQgDgFgEgCQgEgCgGAAQgGAAgDACg");
	this.shape_30.setTransform(73.8,349.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIADAAQAEAAADgCQADgCABgDIAFgNIgehMIAOAAIAWA+IAAAAIAWg+IAOAAIgiBXIgEAJIgFAHIgGADIgHABg");
	this.shape_31.setTransform(65.9,349.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgQAAIAdgoIgbglIARAAIASAbIASgbIAQAAIgbAkIAeApg");
	this.shape_32.setTransform(58.3,347.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWA0QgJgFgHgIIgFgJIgEgJQgCgHgBgOQAAgGADgOQADgKAGgIQAHgIAJgFQAFgCAGgBIALgBIAMABQAGABAEACQAKAFAHAIQAGAIADAKQAEAOgBAGQABALgEAKIgEAJIgFAJQgHAIgKAFQgKAEgMAAQgMAAgKgEgAgQgoIgGAFIgGAGQgEAGgCAIQgCAIAAAHQAAAIACAIQACAIAEAGIAGAGIAGAEQAHAEAJAAQAJAAAIgEQAHgEAFgGQAEgGACgIQACgIAAgIQAAgHgCgIQgCgIgEgGQgFgGgHgFQgIgDgJAAQgJAAgHADg");
	this.shape_33.setTransform(48.7,346.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},437).wait(626));

	// text - labels
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQgBgDgBgCQgCgDgDgBIgHgBQgFAAgFACIgGAFQgDADgBAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAHAAQAGAAAFACQAFABADADQAEACACAFQACAEAAAGIAAA4g");
	this.shape_34.setTransform(535.8,179.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgDQAFgBADgDQACgDACgFQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_35.setTransform(525.3,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_36.setTransform(519.5,178.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFALAAIAAAOQgIAAgGACQgFACgDAEQgCAEgCAGQgCAGABAGIAAAjg");
	this.shape_37.setTransform(515.8,179.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_38.setTransform(510.4,178.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIABIgKgBQgFgBgDgEQgDgCgCgEQgCgEAAgGQAAgGACgFQACgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgCABgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgIADgFQADgEAEgDQAFgEAGgBQAGgCAGABIAKAAQAFABAEACQAFADACAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgCgCgAAKACIgJABIgIABIgIACQgDABgCAEQgCADAAAEIABAGIAEADIAEACIAGABQAGAAADgDQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDABg");
	this.shape_39.setTransform(504.3,179.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_40.setTransform(529.3,161.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_41.setTransform(525,160.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHgBIAJACIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAFAAAEIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_42.setTransform(518.7,162.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgjA2IAAhqIAPAAIAABdIA3AAIAAANg");
	this.shape_43.setTransform(511,161);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQgBgDgCgCQgBgDgDgBIgHgBQgGAAgDACIgHAFQgDADAAAEIgBAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABAEADQADACABAFQACAEAAAGIAAA4g");
	this.shape_44.setTransform(215.4,180.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgEQACgDACgEQABgFAAgFIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgCg");
	this.shape_45.setTransform(204.8,180.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_46.setTransform(199,179);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_47.setTransform(195.4,180.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_48.setTransform(189.9,179.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgDgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQABgCAAgEQAAgFgBgCIgEgEIgFgBIgGgBQgHAAgGADQgGADAAAIIgMAAQAAgHADgEQACgFAFgEQAEgDAGgBQAGgCAGAAIAJACQAGAAAEADQAEACADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgDgCgAAJABIgIACIgIABIgHADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDACgDIAAgGIAAgMQgCABgEAAg");
	this.shape_49.setTransform(183.9,180.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgBgBgEIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_50.setTransform(173,179.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDADQgDADgBAEQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_51.setTransform(166.7,179);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgDgEgBgHIANAAQAAAEACADIAGADIAFADIAGAAQAGAAAFgCQAEgCADgEQADgEABgFQACgGAAgGIAAgFIgBAAQgDAHgHAEQgGACgHAAQgJAAgGgCQgHgDgEgGQgFgFgCgHQgCgGAAgJIACgOQACgHAEgGQAFgGAGgDQAHgEAJgBQAIAAAGAEQAGADAEAHIAAgLIAMAAIAABGQAAAJgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgIgpQgFADgDAEIgEAJIgBAKIABAKQABAFACAEQADAEAFADQADADAGgBQAGABAEgDQAFgDADgEQACgEABgFQACgFAAgFQAAgGgCgEQgBgGgCgDQgDgFgEgBQgEgDgGAAQgGAAgDACg");
	this.shape_52.setTransform(158,181.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_53.setTransform(152.3,179);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAbA2QAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIgBgGIAAgIIgBgIIgCgIIgDgGQgCgCgDgBQgDgCgFAAIgiAAIAAAuIgPAAIAAhqIAyAAQAIAAAFABQAHACAEAEQAEADACAGQACAFAAAGIgBAKQAAAEgDAEQgEAHgKABIAAABIAHADIAGAFIACAHIABAHIAAAIIABAIIACAHQABAEADADgAgcgDIAcAAIAKgBIAIgDQAEgCACgEQACgDAAgHQgBgHgEgFIgGgFIgIgBIgjAAg");
	this.shape_54.setTransform(145.9,179);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("ALfhoIJWhGA00g2IKmDl");
	this.shape_55.setTransform(360.4,187.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_56.setTransform(532.3,379.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_57.setTransform(526.5,378.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgFgCgIQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALIAEAJQADAEAEACQAFACAFABQAJAAAGgGQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGABgHAAQgIABgHgDg");
	this.shape_58.setTransform(520.9,379.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_59.setTransform(515.2,378.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGgBAGIAAAjg");
	this.shape_60.setTransform(511.5,379.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_61.setTransform(506.1,378.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_62.setTransform(499.7,379.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_63.setTransform(491.6,379.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgFAnIgdhNIAOAAIAVBAIAAAAIAVhAIANAAIgcBNg");
	this.shape_64.setTransform(483.8,379.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAALg");
	this.shape_65.setTransform(516.3,361.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_66.setTransform(505.7,362.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgiA1IAAhqIAOAAIAABfIA4AAIAAALg");
	this.shape_67.setTransform(498,361);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgOAlQgHgDgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEAEgGABQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_68.setTransform(265.1,372.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_69.setTransform(259.3,371.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAFQADAEABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKIAEAKQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgJIANAAQgBAIgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_70.setTransform(253.7,372.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_71.setTransform(238.9,371.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_72.setTransform(232.5,372.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgOAlQgHgDgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEAEgGABQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_73.setTransform(224.4,372.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgFAnIgdhNIAOAAIAVBAIAAAAIAVhAIAOAAIgdBNg");
	this.shape_74.setTransform(216.6,372.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFAAgFABQgEACgDADQgDADgBAEQgBAEAAAFIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_75.setTransform(249.7,354);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgLA2QgFgBgEgDQgFgCgDgFQgDgEAAgGIAMAAQABADABACIAGAFIAGACIAFAAQAHAAAEgCQAFgCACgEQADgEABgGQABgEABgHIAAgFIgBAAQgDAHgHADQgHAEgGAAQgJAAgGgEQgGgDgFgFQgFgFgBgIQgDgFAAgJIACgNQACgIAEgGQAFgGAGgEQAHgDAJAAQAHAAAHADQAGADAEAGIAAgLIALAAIAABGQAAAKgCAHQgCAHgEAFQgJAJgSAAIgLgBgAgJgpQgEADgDADIgEAJIgBALIABAKQABAFACAEQADAEAEADQAEADAGAAQAGAAAEgDQAFgDACgEQADgEACgFIABgLIgBgKQgBgFgDgEQgCgDgFgDQgEgCgGAAQgFAAgFACg");
	this.shape_76.setTransform(241,356.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAbA1QAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAgBgBIAAgHIAAgHIgBgIIgCgIIgDgFQgBgDgEgCQgDgCgFAAIgiAAIAAAuIgPAAIAAhqIAyAAQAHAAAHADQAGABAEAEQAFADABAGQADAFAAAGIgBAJQgCAFgCADQgEAIgKABIAAABIAHADIAFAFIADAGIABAIIAAAIIACAIIABAIQABADACACgAgcgDIAcAAIAKgBIAIgDQAEgCACgEQABgEAAgFQAAgIgEgGIgGgDIgIgBIgjAAg");
	this.shape_77.setTransform(228.9,354);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AHOnrILRO/AyeHsIL9rT");
	this.shape_78.setTransform(387.8,303.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:195.4,y:180.3}},{t:this.shape_46,p:{x:199,y:179}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:525,y:160.9}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:510.4,y:178.8}},{t:this.shape_37},{t:this.shape_36,p:{x:519.5,y:178.5}},{t:this.shape_35},{t:this.shape_34}]},434).to({state:[]},108).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_36,p:{x:235.3,y:354}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_38,p:{x:256,y:354.3}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_47,p:{x:244.3,y:372.8}},{t:this.shape_46,p:{x:248,y:371.5}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_41,p:{x:512,y:360.9}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},21).to({state:[]},101).wait(399));

	// text - narration
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_79.setTransform(190.8,243);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_80.setTransform(184.8,239.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHAAQgIgBgFgCg");
	this.shape_81.setTransform(176.5,240);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACADQABAEADACIAHACIAHAAIAGAAIAGgCQADgBACgCQACgCAAgEQgBgFgDgDQgEgCgFgBIgMgEIgMgDQgFgCgEgEQgEgEAAgHQAAgGADgEQACgEAEgDQAEgDAFgBIALgBQAFAAAGABQAGABAEACQAEADADAFQACAFAAAHIgMAAIgCgGIgFgFIgFgBIgFgBIgGABIgGABIgDADQgCACABADQAAADABADIAHADIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFACQgFADgFABIgMACIgMgCg");
	this.shape_82.setTransform(168.6,239.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgDgGAAgGIANAAQAAADACADQACAEACACIAHACIAHAAIAGAAIAGgCQADgBABgCQADgCAAgEQAAgFgFgDQgDgCgGgBIgLgEIgMgDQgFgCgFgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAEgBIAKgBQAHAAAFABQAGABAEACQAEADACAFQADAFABAHIgNAAIgCgGIgEgFIgGgBIgFgBIgGABIgGABIgDADQgBACAAADQAAADACADIAFADIAIACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFACQgEADgGABIgMACIgMgCg");
	this.shape_83.setTransform(161.1,239.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_84.setTransform(155.7,238.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_85.setTransform(151.6,238.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_86.setTransform(141.3,239.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_87.setTransform(135.5,238.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_88.setTransform(129.9,239.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgDgGAAgGIANAAQAAADACADQABAEADACIAHACIAHAAIAGAAIAGgCQADgBACgCQACgCAAgEQAAgFgFgDQgDgCgGgBIgLgEIgMgDQgFgCgEgEQgEgEAAgHQAAgGACgEQADgEAEgDQAFgDAEgBIAKgBQAHAAAFABQAFABAFACQAEADADAFQACAFABAHIgNAAIgCgGIgEgFIgGgBIgFgBIgGABIgGABIgDADQgBACAAADQAAADACADIAGADIAHACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFACQgEADgGABIgMACIgMgCg");
	this.shape_89.setTransform(122.1,239.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHAAQgIgBgFgCg");
	this.shape_90.setTransform(114.2,240);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQgBgDgCgCQgBgDgDgBIgHgBQgFAAgEACIgHAFQgDADAAAEIgBAFIAAAwIgOAAIAAhNIAMAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACACAFQABAEAAAGIAAA4g");
	this.shape_91.setTransform(103.7,239.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_92.setTransform(89.1,239.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIAAIgKgCQgEgBgEgDQgDgCgCgEQgCgEAAgGQAAgGACgFQACgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHADgFQADgFAEgDQAFgDAGgBQAGgBAGAAIAKABQAFAAAEADQAFACACAEQACAEABAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgCgDgAAKABIgJACIgHABIgIADQgEABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_93.setTransform(81.2,239.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_94.setTransform(75.4,238.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_95.setTransform(69.1,238.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgCAEgCAGQgCAGABAGIAAAjg");
	this.shape_96.setTransform(63.1,239.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgCQgEgBgEgDQgEgCgCgEQgCgEAAgGQAAgGACgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgFgBQgJAAgFADQgGADAAAIIgNAAQAAgHAEgFQACgFAEgDQAFgDAGgBQAGgBAGAAIAJABQAGAAAEADQAEACADAEQADAEgBAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_97.setTransform(56.3,239.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgDAIAAQAHAAAGABIAKAFQAEAEADAEQADAGABAHIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFACAFAAQAJAAAGgEQAFgGABgJIANAAQgBAIgDAGQgCAFgFAEQgEADgGACQgGACgHABQgIAAgHgDg");
	this.shape_98.setTransform(48.1,239.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_99.setTransform(181.9,220.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgGgCgHQgCgHAAgIQAAgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAIADQAGADAFAFQAFAGADAIQACAHAAAIQAAAIgCAHQgDAHgFAGQgFAGgGADIgIACIgJAAgAgIgaQgFACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAFACQAEACAEAAQAFAAAFgCQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_100.setTransform(175.3,222.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgYA2IgEgBIAAgMIAEACIAEAAQAEAAACgCQADgCABgDIAGgNIgghMIAPAAIAVA+IABAAIAWg+IANAAIgiBXIgDAJIgFAHIgFADIgIABg");
	this.shape_101.setTransform(163.1,224);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_102.setTransform(157.7,221);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_103.setTransform(153.5,221.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgLAnQgGgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACADQACACACADIAHACIAGABIAHgBIAGgBQADgBACgDQABgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgGgCgDgDQgEgFAAgHQAAgGADgFQACgEAEgCQAEgDAGgBIAKgCQAFABAGABQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgBACAAADQgBADACACIAHAEIAIADIAIABIAJADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgFADQgFADgFAAIgMABIgLgBg");
	this.shape_104.setTransform(147.6,222.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgGgCgHQgDgHAAgIQAAgIADgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAKABAGADQAIADAEAFQAFAGACAIQADAHAAAIQAAAIgDAHQgCAHgFAGQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEQADgEADgFQABgGAAgGQAAgHgBgFQgDgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_105.setTransform(139.5,222.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQgBgDgCgCQgBgDgDgBIgHgBQgFAAgEACIgHAFQgDADAAAEIgBAFIAAAwIgOAAIAAhNIAMAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACABAFQACAEAAAGIAAA4g");
	this.shape_106.setTransform(128.9,222.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_107.setTransform(114.4,222.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_108.setTransform(105.6,221);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIgBIgKgBQgFAAgDgDQgEgDgBgEQgDgEAAgGQAAgHADgEQACgEADgCIAJgEIAJgCIAKgBIAIgCIAGgDQABgBAAgEQABgEgCgDIgEgEIgFgCIgGAAQgHAAgGADQgFADgBAIIgMAAQAAgHACgEQADgGAFgCQAEgDAGgCQAFgBAHgBIAJABQAGABAEADQAEACADAEQADAEAAAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAEgBIAAAKQgDABgGAAQgFABgCgDgAAJACIgIABIgHABIgIACQgEACgCADQgCADAAAEIABAFIADAEIAFACIAGABQAGAAAEgCQAEgCADgDQADgCABgDIABgGIAAgMQgCABgEABg");
	this.shape_109.setTransform(97.6,222.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQgBgDgCgCQgBgDgDgBIgHgBQgFAAgEACIgHAFQgDADAAAEIgBAFIAAAwIgOAAIAAhNIAMAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACACAFQABAEAAAGIAAA4g");
	this.shape_110.setTransform(87,222.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACADQACACADADIAGACIAGABIAHgBIAGgBQADgBABgDQACgDAAgDQAAgFgEgCQgDgDgGgCIgLgCIgMgEQgFgCgFgDQgDgFAAgHQAAgGACgFQADgEAEgCQAFgDAFgBIAJgCQAGABAGABQAFABAEADQAFADACAEQADAFABAHIgNAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgCACAAADQAAADADACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgEADQgFADgGAAIgMABIgLgBg");
	this.shape_111.setTransform(72.7,222.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_112.setTransform(67.3,221);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_113.setTransform(59,221.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgGA1IAAhpIANAAIAABpg");
	this.shape_114.setTransform(54.9,221);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_115.setTransform(206.4,208);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgQBGIAKgRIAGgRIACgSIABgSQAAgRgEgSQgEgQgLgSIAKAAIAJARIAHARQADAIACAJQACAJAAAJQAAASgGASQgDAJgFAIIgJARg");
	this.shape_116.setTransform(202,204.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQgBgDgCgCQgBgDgDgBIgHgBQgFAAgEACIgHAFQgDADAAAEIgBAFIAAAwIgOAAIAAhNIAMAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACABAFQACAEAAAGIAAA4g");
	this.shape_117.setTransform(194.1,204.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgRAlQgFgBgDgEQgEgEgBgFQgBgFAAgGIAAgyIANAAIAAAzIABAGIADAFQAEAEAHAAQAFAAAEgCQAFgBADgDQACgEACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgNIAAAAQgEAIgHADQgGAEgHAAQgIAAgFgDg");
	this.shape_118.setTransform(183.6,205);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_119.setTransform(175.3,204.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_120.setTransform(168.8,204.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_121.setTransform(161.9,204.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_122.setTransform(155.3,203.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgLAoQgGgCgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACAEQACADACABIAHADIAGAAIAHAAIAGgCQADAAACgDQABgDAAgDQAAgFgDgDQgEgCgFgBIgMgDIgMgEQgGgCgDgEQgEgEAAgIQAAgFADgEQACgEAEgDQAEgDAGgBIAKgBQAFAAAGABQAGABADACQAFADADAFQACAFAAAHIgMAAIgCgGIgFgFIgFgBIgFgBIgGABIgFABIgEADQgBACgBADQAAADACADIAHADIAIACIAIADIAJACIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFADQgFADgFACIgMABIgLgBg");
	this.shape_123.setTransform(149.4,204.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAHBGIgJgRIgHgRIgFgSQgCgJAAgJIACgSIAEgRQAGgSALgQIAKAAIgKARIgGARQgDARAAASIABASIACARQAFASALARg");
	this.shape_124.setTransform(144.1,204.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_125.setTransform(133.7,204.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_126.setTransform(125.4,204.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgDgHABgJQgBgHADgIQACgHAFgFQAFgGAHgDQAHgEAIABQAJgBAIAEQAGADAFAGQAFAFADAHQABAIAAAHQAAAJgBAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAGAEADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQAEgDABgGQACgFAAgIQAAgGgCgFQgBgFgEgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_127.setTransform(117,204.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_128.setTransform(108.5,203.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_129.setTransform(101.3,203.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgLAoQgGgCgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACAEQACADACABIAHADIAHAAIAGAAIAGgCQADAAACgDQABgDAAgDQAAgFgDgDQgEgCgFgBIgMgDIgMgEQgGgCgDgEQgEgEAAgIQAAgFADgEQACgEAEgDQAEgDAGgBIAKgBQAFAAAGABQAGABADACQAFADADAFQACAFAAAHIgMAAIgCgGIgFgFIgFgBIgFgBIgGABIgFABIgEADQgBACgBADQAAADACADIAHADIAIACIAIADIAJACIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFADQgFADgFACIgMABIgLgBg");
	this.shape_130.setTransform(95.4,204.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIAAIgKgBQgFgCgDgDQgDgCgCgEQgCgEgBgGQABgHACgEQACgEADgDIAJgCIAJgDIAKgCIAIgBIAFgDQACgCAAgDQABgEgCgDIgEgEIgGgBIgFgBQgHAAgGADQgFADgBAJIgMAAQAAgHACgGQADgEAFgEQAEgDAGgBQAFgBAHAAIAKABQAFAAAEACQAEADADAEQADAEAAAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEADgGAAQgFAAgCgDgAAKABIgJACIgHABIgIADQgEAAgCADQgCAEAAAEIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDABgEIABgFIAAgMQgCABgDAAg");
	this.shape_131.setTransform(87.8,204.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIAAAFgDIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIAAgHgEgAgIgbQgEACgDAEQgDACgBAEQgCAFAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_132.setTransform(79.6,204.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_133.setTransform(73.8,204.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgEA2IgHgCIgGgEQgEgCgCgEIAAALIgNAAIAAhqIANAAIAAAoIAEgGIAGgEQAHgDAHAAIAJABIAHADQAGADAFAGQAEAFADAIQACAGAAAIQAAAIgCAIQgDAHgEAGQgEAFgHADQgHADgJAAgAgLgMQgEADgDAEQgDAEgBAEIgBALIABALQABAFADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgKIABgLQAAgFgBgFIgEgJQgDgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_134.setTransform(66.6,203.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_135.setTransform(55.8,204.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgRAlQgFgBgDgEQgEgEgBgFQgBgFAAgGIAAgyIANAAIAAAzIABAGIADAFQAEAEAHAAQAFAAAEgCQAFgBADgDQACgEACgEQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgNIAAAAQgEAIgHADQgGAEgHAAQgIAAgFgDg");
	this.shape_136.setTransform(48.7,205);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgFQAFgGAHgDQAHgEAIABQAJgBAIAEQAGADAFAGQAFAFADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_137.setTransform(40.3,204.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIAEAAQADAAADgCQADgCABgDIAGgNIgghMIAPAAIAVA+IABAAIAWg+IANAAIghBXIgEAJIgEAHIgGADIgIABg");
	this.shape_138.setTransform(32.2,206.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgDAEgCAGQgBAGgBAGIAAAjg");
	this.shape_139.setTransform(204.3,187.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_140.setTransform(197.4,187.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_141.setTransform(188.6,186);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_142.setTransform(180.3,187.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgRAmQgFgDgDgDQgEgEgBgFQgBgFAAgHIAAgyIANAAIAAA0IABAGIADAGQAEADAHAAQAFAAAEgBQAFgCADgEQACgDACgEQABgEAAgGIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHgBQgIAAgFgBg");
	this.shape_143.setTransform(172,187.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_144.setTransform(161.2,186.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgLAnQgGgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQACAEACACIAHACIAHAAIAGAAIAGgBQADgBACgDQABgDAAgDQAAgFgDgCQgEgDgFgCIgMgDIgMgDQgGgCgDgDQgEgFAAgHQAAgGADgEQACgEAEgDQAEgDAGgBIAKgCQAFABAGABQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgCIgFgBIgGABIgFABIgEADQgBACgBADQABADABACIAHAEIAIADIAIABIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFAEQgFACgFABIgMABIgLgBg");
	this.shape_145.setTransform(155.2,187.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_146.setTransform(147.5,187.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgFIgFgDIgGAAQgFAAgFABQgEACgDAEQgDADgBADQgBAEAAAGIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_147.setTransform(139.3,186);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgHACgIQACgIAFgFQAEgGAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALIAEAJQADAEAEACQAFACAFAAQAJABAGgGQAFgEABgJIANAAQgBAHgDAFQgCAGgFAEQgEADgGADQgGABgHAAQgIABgHgDg");
	this.shape_148.setTransform(131.1,187.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGAAAGIAAAjg");
	this.shape_149.setTransform(120.9,187.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgRAmQgFgDgDgDQgEgEgBgFQgBgFAAgHIAAgyIANAAIAAA0IABAGIADAGQAEADAHAAQAFAAAEgBQAFgCADgEQACgDACgEQABgEAAgGIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGAEgHgBQgIAAgFgBg");
	this.shape_150.setTransform(113.8,187.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgDgHABgIQgBgIADgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAJABAIADQAGADAFAGQAFAFADAHQABAIAAAIQAAAIgBAHQgDAIgFAFQgFAGgGADIgIACIgJAAgAgIgaQgFACgDADQgEAEgBAGQgCAFAAAHQAAAGACAGQABAFAEAEQADAEAFACQAEABAEAAQAFAAAEgBQAFgCADgEQADgEADgFQABgGAAgGQAAgHgBgFQgDgGgDgEQgDgDgFgCQgEgCgFAAQgEAAgEACg");
	this.shape_151.setTransform(105.4,187.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIADAAQAFAAACgCQADgCABgDIAFgNIgehMIAOAAIAWA+IAAAAIAWg+IAOAAIgiBXIgEAJIgEAHIgHADIgHABg");
	this.shape_152.setTransform(97.3,189);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_153.setTransform(87.3,185.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgCgHgBgIQABgIACgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAJABAHADQAHADAFAGQAFAFACAHQACAIAAAIQAAAIgCAHQgCAIgFAFQgFAGgHADIgHACIgJAAgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgEACgFQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_154.setTransform(80.7,187.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_155.setTransform(68.1,187.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgCgHgBgIQABgIACgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAJABAHADQAIADAEAGQAFAFACAHQACAIAAAIQAAAIgCAHQgCAIgFAFQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgEAEgBAGQgCAFAAAHQAAAGACAGQABAFAEAEQADAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgEACgFQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_156.setTransform(59.7,187.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_157.setTransform(53.7,186);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgKA2QgGgBgFgDQgEgDgDgEQgEgEAAgHIANAAQABAEACADIAEADIAGACIAGABQAGAAAFgCQAEgCADgEQADgEABgGQABgFAAgGIAAgFIAAAAQgDAHgHAEQgHACgGAAQgIAAgHgCQgGgDgFgGQgFgFgCgIQgBgGAAgHQgBgIACgHQACgHAEgGQAFgFAGgEQAHgFAJAAQAHABAHADQAGADADAHIAAgMIANAAIAABGQAAAKgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgIgpQgFACgDAEIgEAJIgBALIABALQABAEADAEQACAFAFACQAEACAFABQAGgBAEgCQAFgCADgFQACgEABgEIACgLIgCgLQAAgEgDgFQgDgEgEgBQgEgDgGAAQgFAAgEACg");
	this.shape_158.setTransform(47.6,188.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_159.setTransform(39.5,187.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgBAGAAAGIAAAjg");
	this.shape_160.setTransform(33.7,187.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_161.setTransform(193.4,168.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_162.setTransform(189.1,168.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_163.setTransform(182.9,169.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_164.setTransform(177.1,168.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgVAGIAAgLIArAAIAAALg");
	this.shape_165.setTransform(172.6,169.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_166.setTransform(165.7,169.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgFA1IAAhqIALAAIAABqg");
	this.shape_167.setTransform(160,168.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_168.setTransform(153.7,168.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_169.setTransform(144.8,168.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_170.setTransform(139,168.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQAAgDgDgCQgBgDgDgBIgHgBQgGAAgEACIgGAFQgCADgBAEIgBAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIADAHQACgEADgCIAFgEQAHgEAIAAQAFAAAFACQAFABAEADQACACACAFQACAEABAGIAAA4g");
	this.shape_171.setTransform(131,169.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgOAlQgHgDgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgCAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAEADAEQADADAFACQAFACAFABQAIAAAFgEIAEgFQACgDABgDIAMAAQgCAMgJAHQgEAEgGABQgFABgHABQgIAAgHgEgAgIgbQgEADgDADQgDACgBAFQgCAEAAAEIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_172.setTransform(116.5,169.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFAAgFABQgEACgDADQgDAEgBADQgBAFAAAEIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAAzg");
	this.shape_173.setTransform(108.2,168.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_174.setTransform(101.6,168.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_175.setTransform(91.1,169.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_176.setTransform(85.3,168.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgJA2IgHgDQgGgDgFgGQgEgFgDgIQgCgHAAgIQAAgIACgHQACgHAFgGQAEgFAHgDQAHgEAJAAIAFABIAHACIAGAEIAGAGIAAgoIANAAIAABqIgNAAIAAgLQgEAHgGADQgHACgHAAgAgKgMQgFADgCAEIgEAJIgBALQAAAFABAFIAEAJQADAFAFACQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgLQgBgEgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_177.setTransform(74.8,168.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_178.setTransform(66.5,169.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgRAmQgFgDgDgDQgEgEgBgFQgBgFAAgGIAAgyIANAAIAAAzIABAHIADAEQAEAEAHABQAFgBAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgNIAAAAQgEAIgHADQgGADgHABQgIAAgFgCg");
	this.shape_179.setTransform(58.2,170);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgFgCgIQgCgHAAgJQAAgHACgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGADAIQACAHAAAHQAAAJgCAHQgDAIgFAFQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgDADgCAGQgCAFAAAGQAAAIACAFQACAGADADQADADAFACQAEACAEABQAFgBAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgGgDgDQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_180.setTransform(49.7,169.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgHA2IAAhBIgNAAIAAgLIANAAIAAgMIABgIQABgEADgCQACgDAEgBQAEgBAFAAIAEAAIAEABIAAALIgDgBIgEAAQgFAAgCACQgDACAAAFIAAALIAPAAIAAALIgPAAIAABBg");
	this.shape_181.setTransform(43.3,168.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AATAoIAAg0IgBgGIgDgFIgFgDIgGgBQgFAAgFABQgEACgDAEQgDADgBAEQgBAFAAAFIAAArIgNAAIAAhNIAMAAIAAAMIAAAAQAEgHAGgDQAHgEAHAAQAIAAAFACQAFADADADQAEAEABAFQABAFAAAHIAAAyg");
	this.shape_182.setTransform(204.4,152.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEAEgCIAIgDIAKgDIAJgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgMAAQAAgGACgFQADgFAEgEQAFgCAGgCQAGgCAGAAIAKABQAFABAEADQAFACACAEQACAEABAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgCgCgAAKACIgJABIgHABIgJADQgDABgCACQgCADAAAFIABAFIAEAEIAEACIAGAAQAGAAADgBQAFgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_183.setTransform(196.4,152.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgDgEgBgHIANAAQAAAEACADIAGADIAFACIAGABQAGAAAFgCQAEgCADgEQADgEABgFQACgGAAgGIAAgFIgBAAQgDAHgHAEQgGACgHAAQgJAAgGgCQgHgDgEgGQgFgFgCgHQgCgHAAgHIACgPQACgHAEgGQAFgFAGgEQAHgFAJAAQAIAAAGAEQAGADAEAHIAAgLIAMAAIAABFQgBAKgBAHQgDAHgEAFQgJAKgSAAIgKgCgAgIgpQgFADgDAEIgEAJIgBAKIABALQABAEACAEQADAFAFACQADACAGABQAGgBAEgCQAFgCACgFQADgEABgEQACgGAAgFQAAgGgCgEQgBgGgCgDQgDgFgEgBQgEgDgGAAQgGAAgDACg");
	this.shape_184.setTransform(187.7,153.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFALAAIAAAOQgIAAgFACQgGACgCAEQgEAEgBAGQgCAGABAGIAAAjg");
	this.shape_185.setTransform(182,152.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgIAoIgHgDQgHgCgFgGQgFgFgCgIQgCgHgBgIQABgIACgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAJAAAHAEQAHADAFAGQAFAFACAHQACAIAAAIQAAAIgCAHQgCAIgFAFQgFAGgHACIgHADIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAGADADQADAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgDACgGQABgGAAgGQAAgHgBgFQgCgFgEgFQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_186.setTransform(174.8,152.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAQAnIgQg9IgPA9IgNAAIgZhNIAOAAIARA/IABAAIAPg/IANAAIARA/IARg/IANAAIgYBNg");
	this.shape_187.setTransform(160.6,152.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgIAoIgHgDQgHgCgFgGQgFgFgCgIQgCgHgBgIQABgIACgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAKAAAGAEQAIADAEAGQAFAFACAHQACAIABAIQgBAIgCAHQgCAIgFAFQgEAGgIACIgHADIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAGADADQADAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgDACgGQABgGAAgGQAAgHgBgFQgCgFgEgFQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_188.setTransform(150.7,152.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_189.setTransform(144.7,151);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgFA2IAAhqIALAAIAABqg");
	this.shape_190.setTransform(141.4,151);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgHAoIgIgDQgHgCgFgGQgFgFgCgIQgDgHAAgIQAAgIADgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAKAAAGAEQAIADAEAGQAFAFACAHQADAIAAAIQAAAIgDAHQgCAIgFAFQgEAGgIACIgHADIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAGADADQADAEAEACQAFABAEAAQAFAAAFgBQAEgCADgEQADgDACgGQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_191.setTransform(135.5,152.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_192.setTransform(127,151);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAUAmQgDgDgBgGIgFAFIgHAEQgGACgIAAIgKgBQgFgBgDgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEADgCIAJgDIAJgDIAKgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgFgBQgHAAgGADQgFADgBAIIgMAAQAAgGACgFQADgFAFgEQAEgCAGgCQAGgCAGAAIAKABQAFABAEADQAFACACAEQACAEABAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgCgCgAAKACIgJABIgHABIgIADQgEABgCACQgCADAAAFIABAFIAEAEIAEACIAGAAQAGAAAEgBQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_193.setTransform(114.9,152.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQABADAEADIAGACIAGAAIAHAAIAGgBQADgCABgCQACgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgGgCgEgEQgDgEAAgHQAAgGADgEQACgEAEgDQAFgDAFgBIAKgCQAFAAAGACQAFABAEADQAFADACAEQADAFAAAHIgMAAIgCgHIgFgDIgFgCIgFgBIgGABIgFABIgEADQgBACgBADQAAADACACIAGAEIAIACIAJACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgGACgFABIgMABIgLgBg");
	this.shape_194.setTransform(102.8,152.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgPIALAAIAAAPg");
	this.shape_195.setTransform(97.4,151);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_196.setTransform(89.1,151.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_197.setTransform(84.9,152.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgCgEQgCgEAAgGQAAgGACgFQACgEAEgCIAIgDIAKgDIAJgCIAIgBIAFgCQACgCAAgEQAAgFgBgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgGADgFQADgFAEgEQAFgCAGgCQAGgCAGAAIAKABQAFABAEADQAFACACAEQACAEABAHIAAAmIAAAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgCgCgAAKACIgJABIgHABIgJADQgDABgCACQgCADAAAFIABAFIAEAEIAEACIAGAAQAGAAADgBQAFgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_198.setTransform(78.1,152.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgOAlQgHgDgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_199.setTransform(69.9,152.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_200.setTransform(61.7,151);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgOAlQgHgDgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFABgHAAQgIAAgHgDgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_201.setTransform(49.4,152.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_202.setTransform(41.2,151);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgGA2IAAhfIgkAAIAAgLIBVAAIAAALIgkAAIAABfg");
	this.shape_203.setTransform(32.7,151);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACAEQABACADACIAHADIAHABIAGgBIAGgCQADAAACgDQACgDAAgDQAAgFgFgDQgDgCgGgBIgLgDIgMgEQgFgBgEgEQgEgFAAgIQAAgFADgFQACgDAEgDQAEgDAFgBIAKgBQAHgBAFACQAGABAEACQAEAEADAEQACAFAAAHIgMAAIgCgGIgEgFIgGgCIgFAAIgGAAIgGACIgDADQgCACABADQAAADABADIAHADIAIACIAIADIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgEADgGACIgMABIgMgBg");
	this.shape_204.setTransform(184.7,196.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgLA2QgFgBgFgDQgEgCgEgFQgDgEAAgGIANAAQABADACACIAEAFIAHACIAFAAQAHAAAEgCQAFgCACgEQADgEABgGQACgEgBgHIAAgFIAAAAQgDAHgHADQgGAEgHAAQgJAAgGgEQgHgDgEgFQgEgFgCgIQgCgGAAgIIABgNQACgIAEgGQAEgFAIgFQAGgDAJAAQAIgBAGAEQAGADADAGIAAgKIANAAIAABGQgBAJgCAHQgCAHgEAFQgJAJgSAAQgFABgGgCgAgIgpQgFADgDADIgEAKIgBAKIABAKQABAFADAEQACAEAEADQAFACAFAAQAGAAAFgCQAEgDADgEQADgEABgFIABgLIgBgJQgCgFgCgFQgCgEgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_205.setTransform(168.4,198.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIABIgKgBQgEgCgEgDQgDgCgDgEQgCgEAAgGQAAgHACgEQADgEADgDIAJgDIAJgCIAKgBIAIgCIAGgDQABgCABgDQgBgFgBgCIgEgEIgFgCIgGAAQgHAAgGADQgGADAAAJIgMAAQAAgHADgGQACgEAFgEQAEgCAGgCQAGgCAGABIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAJABIgIACIgIABIgHADQgEAAgCADQgCADAAAFIABAGIADADIAFACIAGABQAGgBAEgCQAEgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_206.setTransform(160.5,196.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACAEQABACADACIAHADIAHABIAGgBIAGgCQADAAACgDQACgDAAgDQAAgFgFgDQgDgCgGgBIgLgDIgMgEQgFgBgEgEQgEgFAAgIQAAgFADgFQACgDAEgDQAEgDAFgBIAKgBQAHgBAFACQAGABAEACQAEAEADAEQACAFAAAHIgMAAIgCgGIgEgFIgGgCIgFAAIgGAAIgGACIgDADQgCACABADQAAADABADIAHADIAIACIAIADIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgEADgGACIgMABIgMgBg");
	this.shape_207.setTransform(147.8,196.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgCgHgBgJQABgHACgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgFAFgGADIgIADIgJABgAgJgaQgEACgDAEQgDADgCAGQgCAFAAAGQAAAIACAFQACAGADADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgGgEgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_208.setTransform(135.6,196.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgQBGIAKgRIAGgRIACgSIABgSQAAgSgEgRQgEgQgLgSIAKAAIAJARIAHARQADAIACAJQACAJAAAJQAAASgGASQgDAJgFAIIgJARg");
	this.shape_209.setTransform(93,196.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgDgGAAgGIANAAQAAADACAEQACACADACIAGADIAHABIAGgBIAGgCQADAAABgDQADgDAAgDQAAgFgFgDQgDgCgGgBIgLgDIgMgEQgFgBgFgEQgDgFAAgIQAAgFACgFQADgDAEgDQAFgDAEgBIAKgBQAHgBAFACQAGABAEACQAEAEACAEQADAFABAHIgNAAIgCgGIgEgFIgGgCIgFAAIgGAAIgGACIgDADQgBACAAADQAAADACADIAFADIAIACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgFADgGACIgMABIgMgBg");
	this.shape_210.setTransform(87.8,196.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_211.setTransform(81.5,195.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGACgIABIgKgBQgFgCgDgDQgDgCgCgEQgCgEAAgGQAAgHACgEQACgEAEgDIAIgDIAKgCIAJgBIAIgCIAFgDQACgCABgDQAAgFgCgCIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgHADgGQADgEAEgEQAFgCAGgCQAFgCAHABIAKABQAFAAAEACQAFADACAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEACgGAAQgFgBgCgCgAAKABIgJACIgIABIgIADQgDAAgCADQgCADAAAFIABAGIAEADIAEACIAGABQAGgBADgCQAFgBADgCQADgDABgEIACgFIAAgMQgDABgDAAg");
	this.shape_212.setTransform(75.5,196.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_213.setTransform(197.4,179.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgHAoIgIgDQgHgCgFgGQgFgFgCgIQgCgHAAgIQAAgIACgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAJAAAIAEQAGADAFAGQAFAFADAHQACAIAAAIQAAAIgCAHQgDAIgFAFQgFAGgGACIgIADIgJAAgAgIgaQgFACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAGADADQADAEAFACQAEABAEAAQAFAAAFgBQAEgCADgEQADgDACgGQACgGAAgGQAAgHgCgFQgCgFgDgFQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_214.setTransform(190.1,179.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAHBFIgJgQIgHgRIgFgRQgCgKAAgJIACgRIAEgSQAGgSALgQIAKAAIgKASIgGARQgDAQAAASIABASIACASQAFAQALARg");
	this.shape_215.setTransform(184.3,179.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACADADADIAGACIAGAAIAHAAIAGgBQADgCABgCQACgCABgEQgBgFgEgDQgDgCgGgBIgLgEIgMgDQgGgCgEgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAFgBIAJgCQAHAAAFACQAFABAFADQAEADACAEQADAFABAHIgNAAIgCgHIgEgDIgGgCIgFgBIgGABIgFABIgEADQgCACAAADQABADACACIAFAEIAIACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgFACgGABIgMABIgLgBg");
	this.shape_216.setTransform(174.1,179.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAEQADAFABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgJIANAAQgBAIgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_217.setTransform(161.6,179.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIAAIgKgBQgEgBgEgCQgDgDgDgEQgCgEAAgGQAAgGACgFQADgEADgCIAJgDIAJgDIAKgCIAIgBIAGgCQABgCABgEQgBgFgBgCIgEgEIgFgBIgGgBQgHAAgGADQgGADAAAIIgMAAQAAgGADgFQACgFAFgEQAEgCAGgCQAGgCAGAAIAJABQAGABAEADQAEACADAEQACAEAAAHIAAAmIABAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgDgCgAAJACIgIABIgIABIgHADQgEABgCACQgCADAAAFIABAFIADAEIAFACIAGAAQAGAAAEgBQAEgCADgDQADgCACgDIABgGIAAgMQgDABgEABg");
	this.shape_218.setTransform(153.7,179.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgIACgHQACgIAFgFQAEgGAHgDQAHgEAIAAQAHAAAGACIAKAFQAEAEADAEQADAFABAHIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKQACAGACAEQADAEAEACQAFADAFgBQAJAAAGgEQAFgGABgJIANAAQgBAIgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIAAgHgCg");
	this.shape_219.setTransform(119,179.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_220.setTransform(108.3,178.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIAAIgKgBQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgGACgFQADgEAEgCIAIgDIAKgDIAJgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgFgBQgJAAgFADQgGADAAAIIgNAAQAAgGAEgFQACgFAEgEQAFgCAGgCQAGgCAGAAIAJABQAGABAEADQAEACADAEQADAEgBAHIAAAmIABAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgFAAgDgCgAAJACIgIABIgIABIgIADQgDABgCACQgCADAAAFIABAFIAEAEIAEACIAGAAQAGAAADgBQAFgCADgDQADgCACgDIABgGIAAgMQgDABgEABg");
	this.shape_221.setTransform(97.3,179.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIAAIgKgCQgFgBgDgCQgEgDgBgEQgDgEAAgGQAAgGADgFQACgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQABgCAAgEQABgFgCgCIgEgEIgFgBIgGgBQgHAAgGADQgFADgBAIIgMAAQAAgHACgFQADgFAFgDQAEgDAGgBQAFgBAHAAIAJABQAGAAAEACQAFADACAEQADAEAAAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAJQgDACgGABQgFAAgCgDgAAJABIgIACIgHABIgIADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDABgDIABgGIAAgMQgCABgEAAg");
	this.shape_222.setTransform(163.7,250.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_223.setTransform(152.1,249.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgDgHAAgJQAAgHADgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAKAAAGADQAIADAEAGQAFAFACAHQADAIAAAHQAAAJgDAHQgCAHgFAGQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAEACQAFACAEAAQAFAAAFgCQAEgCADgDQADgEADgFQABgFAAgIQAAgGgBgFQgDgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_224.setTransform(137.3,250.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIAAIgKgCQgFgBgDgCQgEgDgBgEQgDgEAAgGQAAgGADgFQACgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQABgCAAgEQABgFgCgCIgEgEIgFgBIgGgBQgHAAgGADQgFADgBAIIgMAAQAAgHACgFQADgFAFgDQAEgDAGgBQAFgBAHAAIAJABQAGAAAEACQAFADACAEQADAEAAAHIAAAmIAAAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgCgDgAAJABIgIACIgHABIgIADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDABgDIABgGIAAgMQgCABgEAAg");
	this.shape_225.setTransform(116.9,250.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_226.setTransform(102,249.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgCQgEgBgEgCQgEgDgCgEQgCgEAAgGQAAgGACgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAGgCQACgCAAgEQgBgFgBgCIgEgEIgFgBIgFgBQgJAAgFADQgGADAAAIIgNAAQAAgHAEgFQACgFAEgDQAFgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQADAEgBAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgIADQgDABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAADgCQAFgBADgCQADgDACgDIABgGIAAgMQgDABgEAAg");
	this.shape_227.setTransform(95.9,250.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgDgHAAgJQAAgHADgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAKAAAGADQAIADAEAGQAFAFACAHQADAIAAAHQAAAJgDAHQgCAHgFAGQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAEACQAFACAEAAQAFAAAFgCQAEgCADgDQADgEADgFQABgFAAgIQAAgGgBgFQgDgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_228.setTransform(83.3,250.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_229.setTransform(65.1,249.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgDIAHgDIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_230.setTransform(179.9,231.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgHAMIAEgDIADgEIAAgEIABgDIgIAAIAAgQIAPAAIAAAPIgBAHIgDAGQgDAHgIACg");
	this.shape_231.setTransform(164.8,236.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_232.setTransform(158.8,232.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgKA2QgGgBgFgDQgEgDgDgEQgEgEAAgGIANAAQABADACADIAEAEIAGABIAGABQAGAAAFgCQAEgCADgEQADgEABgGQABgFAAgGIAAgFIAAAAQgDAHgHAEQgHACgGAAQgIAAgHgCQgGgEgFgFQgFgFgCgIQgBgGAAgHQgBgHACgIQACgHAEgGQAFgFAHgEQAGgFAJAAQAHABAHADQAGADADAHIAAgMIANAAIAABGQAAAKgCAHQgDAHgEAFQgJAKgSgBIgKgBgAgIgpQgFACgDAEIgEAJIgBALIABALQABAEADAEQACAFAFACQAEACAFABQAGgBAEgCQAFgCADgFQACgEABgEIACgMIgCgKQAAgEgDgFQgDgDgEgCQgEgDgGAAQgFAAgEACg");
	this.shape_233.setTransform(150.2,234.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGADgIgBIgKgBQgFAAgDgDQgDgDgCgEQgCgEgBgGQABgGACgFQACgEADgCIAJgEIAJgCIAKgBIAIgCIAGgDQABgBAAgEQABgEgCgDIgEgEIgGgCIgFAAQgHAAgGADQgFADgBAJIgMAAQAAgIACgEQADgGAFgCQAEgDAGgCQAFgBAHgBIAKABQAFABAEADQAEACADAEQADAEAAAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgCgDgAAKACIgJABIgHABIgIACQgEACgCADQgCADAAAEIABAFIADAEIAFACIAGABQAGAAAEgCQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_234.setTransform(142.2,232.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgLAnQgGgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQACADACADIAHACIAGABIAHgBIAGgBQADgBACgDQABgCAAgEQAAgFgDgCQgEgDgFgCIgMgDIgMgDQgGgCgDgDQgEgFAAgHQAAgGADgFQACgEAEgCQAEgDAGgBIAKgCQAFABAGABQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgBACAAADQAAADABACIAHAEIAIADIAIABIAJADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgFADQgFADgFAAIgMABIgLgBg");
	this.shape_235.setTransform(129.6,232.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_236.setTransform(119.2,231.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACADADADIAGACIAGABIAHgBIAGgBQADgBABgDQACgCAAgEQAAgFgEgCQgDgDgGgCIgLgDIgMgDQgFgCgFgDQgDgFAAgHQAAgGACgFQADgEAEgCQAFgDAFgBIAJgCQAGABAGABQAFABAEADQAFADACAEQADAFABAHIgNAAIgCgHIgFgDIgFgDIgFAAIgGAAIgFACIgEADQgCACAAADQAAADADACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAFgEADQgFADgGAAIgMABIgLgBg");
	this.shape_237.setTransform(113.2,232.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_238.setTransform(88.7,232.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgDIgGAAQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgDIAHgDIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_239.setTransform(80.5,231.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_240.setTransform(73.8,231.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACADQABAEADABIAHADIAHAAIAGAAIAGgCQADgBACgCQABgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgFgCgEgEQgEgEAAgIQAAgFADgEQACgEAEgDQAEgDAFgBIALgBQAFAAAGABQAGABADACQAFADADAFQACAFAAAHIgMAAIgCgGIgFgFIgFgBIgFgBIgGABIgGABIgDADQgCACABADQAAADABADIAHADIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFACQgFADgFABIgMACIgMgCg");
	this.shape_241.setTransform(162.3,207.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgaQgEABgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgFQgEgCgFAAQgEAAgEACg");
	this.shape_242.setTransform(154.6,207.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgCAGABAGIAAAjg");
	this.shape_243.setTransform(133.9,207);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_244.setTransform(128.4,205.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgaQgEABgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgFQgEgCgFAAQgEAAgEACg");
	this.shape_245.setTransform(114,207.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAUBAIABAAIAVhAIANAAIgcBNg");
	this.shape_246.setTransform(106.1,207.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgaQgEABgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgFQgEgCgFAAQgEAAgEACg");
	this.shape_247.setTransform(94.3,207.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAFIAAAsIgNAAIAAhqIANAAIAAApQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_248.setTransform(86,205.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AALAzIgJgBIgEgCQgDgDgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_249.setTransform(79.4,205.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgGgCgHQgCgHgBgIQABgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAHADQAIADAEAFQAFAGACAIQACAHAAAIQAAAIgCAHQgCAHgFAGQgEAGgIADIgHACIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAFADAEQADAEAEACQAFACAEAAQAFAAAEgCQAFgCADgEQAEgEACgFQABgGAAgGQAAgHgBgFQgCgFgEgFQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_250.setTransform(173.5,189.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgkA2IAAhqIANAAIAAALIAEgFIAGgFQAHgDAHAAIAJABIAHADQAGAEAFAFQAEAFADAIQACAHAAAJQAAAHgCAHQgDAHgEAGQgEAGgHADQgHACgJAAIgFAAIgHgCIgGgEQgEgCgCgDIAAAngAgLgnQgEACgDAEQgDAEgBAFIgBALIABALQABAFADAEQADADAFADQAEACAGABQAHgBAEgCQAFgDACgDIAEgJIABgLQAAgGgBgFIgEgKQgDgDgFgCQgFgDgFAAQgGAAgFADg");
	this.shape_251.setTransform(140.1,191);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgEACIgHAFQgCADgCAEIgBAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAGgDQAHgEAIAAQAHAAAGADIAEAEIADAHQACgEADgCIAGgEQAGgEAHAAQAGAAAFACQAFABADADQADACADAFQACAEAAAGIAAA4g");
	this.shape_252.setTransform(129.1,189.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgRAmQgFgCgDgEQgEgEgBgFQgBgFAAgGIAAgzIANAAIAAA0IABAHIADAEQAEAFAHAAQAFAAAEgCQAFgCADgEQACgDACgEQABgFAAgFIAAgrIANAAIAABNIgMAAIAAgMIAAAAQgEAHgHADQgGADgHAAQgIAAgFgBg");
	this.shape_253.setTransform(118.6,189.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgkA2IAAhqIANAAIAAALIAEgFIAGgFQAHgDAHAAIAJABIAHADQAGAEAFAFQAEAFADAIQACAHAAAJQAAAHgCAHQgDAHgEAGQgEAGgHADQgHACgJAAIgFAAIgHgCIgGgEQgEgCgCgDIAAAngAgLgnQgEACgDAEQgDAEgBAFIgBALIABALQABAFADAEQADADAFADQAEACAGABQAHgBAEgCQAFgDACgDIAEgJIABgLQAAgGgBgFIgEgKQgDgDgFgCQgFgDgFAAQgGAAgFADg");
	this.shape_254.setTransform(110.2,191);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgTAoIAAhNIAMAAIAAARIAAAAIAFgJIAFgFQAHgFAKAAIAAAOQgHAAgFACQgGACgCAEQgEAEgBAGQgBAGgBAGIAAAjg");
	this.shape_255.setTransform(88.1,189.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIgBIgKgBQgEAAgEgDQgEgDgCgEQgCgEABgGQgBgHACgEQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAGgDQACgBAAgEQgBgEgBgDIgEgEIgFgCIgFAAQgJAAgFADQgGADAAAIIgNAAQAAgHAEgEQACgGAEgCQAFgDAGgCQAGgBAGgBIAJABQAGABAEADQAEACADAEQADAEgBAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDABgGAAQgFABgDgDgAAJACIgIABIgIABIgIACQgDACgCADQgCADAAAEIABAFIADAEIAFACIAGABQAGAAADgCQAFgCADgDQADgCACgDIABgGIAAgMQgDABgEABg");
	this.shape_256.setTransform(76.6,189.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_257.setTransform(64.3,189.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_258.setTransform(56,188.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgGA1IAAhdIgkAAIAAgMIBVAAIAAAMIgkAAIAABdg");
	this.shape_259.setTransform(47.6,188.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgGAFIgHAEQgGADgIgBIgKgBQgEAAgEgDQgDgDgCgEQgCgEAAgGQAAgHACgEQACgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQACgBAAgEQAAgEgBgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAIIgNAAQAAgHADgEQADgGAEgCQAFgDAGgCQAGgBAGgBIAKABQAFABAEADQAFACACAEQACAEABAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAFgBIAAAKQgEABgGAAQgFABgCgDgAAKACIgJABIgHABIgIACQgEACgCADQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAAEgCQAEgCADgDQADgCABgDIABgGIAAgMQgCABgDABg");
	this.shape_260.setTransform(125.3,216.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_261.setTransform(96.7,216.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAGIAAArIgNAAIAAhpIANAAIAAAoQABgDADgDIAGgEIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_262.setTransform(88.4,215.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAGAEADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_263.setTransform(164.6,199.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_264.setTransform(138.8,199.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGADAHQACAIAAAHQAAAJgCAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAFACQAEACAEAAQAFAAAFgCQAEgCADgDQADgDACgGQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_265.setTransform(117.2,199.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgCgHgBgJQABgHACgIQACgHAFgGQAFgFAHgDQAHgEAIABQAJgBAIAEQAGADAFAFQAFAGACAHQACAIAAAHQAAAJgCAHQgCAHgFAGQgFAFgGADIgIADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAGADADQADADAEACQAFACAEAAQAFAAAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgFgEgEQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_266.setTransform(108.6,199.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgGIAGgDQAHgDAHAAIAJABIAHACQAGADAFAGQAEAFADAIQACAHAAAIQAAAJgCAGQgDAHgEAGQgEAFgHADQgHAEgJAAIgFgBIgHgCIgGgDQgEgDgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAFIgBAKIABALQABAEADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgJIABgLQAAgFgBgFIgEgJQgDgEgFgDQgFgCgFAAQgGAAgFACg");
	this.shape_267.setTransform(83.8,200.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AApAoIAAgyIAAgHIgCgFQgCgDgDgBQgDgBgFAAQgJAAgFAFQgGAFAAAJIAAAwIgLAAIAAgyIgBgHQgBgDgCgCQgBgDgDgBIgHgBQgGAAgDACIgHAFQgCADgBAEIgBAFIAAAwIgOAAIAAhNIANAAIAAAMIAAAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAIAAQAGAAAEACQAFABAEADQACACACAFQACAEAAAGIAAA4g");
	this.shape_268.setTransform(72.8,199);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgkA3IAAhqIANAAIAAAKIAEgGIAGgDQAHgDAHAAIAJABIAHACQAGADAFAGQAEAFADAIQACAHAAAIQAAAJgCAGQgDAHgEAGQgEAFgHADQgHAEgJAAIgFgBIgHgCIgGgDQgEgDgCgEIAAApgAgLgoQgEADgDAEQgDAFgBAFIgBAKIABALQABAEADAEQADAEAFADQAEACAGAAQAHAAAEgCQAFgDACgEIAEgJIABgLQAAgFgBgFIgEgJQgDgEgFgDQgFgCgFAAQgGAAgFACg");
	this.shape_269.setTransform(53.9,200.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgLAnQgGgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQACAEACACIAHACIAGAAIAHAAIAGgBQADgBACgDQABgDAAgDQAAgFgDgCQgEgDgFgCIgMgDIgMgDQgGgCgDgEQgEgEAAgHQAAgGADgEQACgEAEgDQAEgDAGgBIAKgCQAFABAGABQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgCIgFgBIgGABIgFABIgEADQgBACgBADQAAADACACIAHAEIAIADIAIABIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAEgFAEQgFADgFAAIgMABIgLgBg");
	this.shape_270.setTransform(185.4,181.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgOAmQgHgDgEgGQgFgEgCgIQgCgHAAgJQAAgHACgIQACgIAFgFQAEgGAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABAKIAEAKQADAEAEACQAFACAFAAQAJABAGgGQAFgEABgJIANAAQgBAHgDAFQgCAGgFAEQgEADgGACQgGACgHAAQgIABgHgDg");
	this.shape_271.setTransform(166.3,181.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgFAnIgdhNIAOAAIAVBAIAAAAIAVhAIANAAIgcBNg");
	this.shape_272.setTransform(129.2,181.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AATA2IAAg1IgBgFIgDgGIgFgDIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAEAAAGIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_273.setTransform(109.1,180.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_274.setTransform(80.5,181.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AATA2IAAg1IgBgFIgDgGIgFgDIgGgBQgFABgFABQgEACgDAEQgDADgBADQgBAEAAAGIAAAsIgNAAIAAhqIANAAIAAAoQABgDADgCIAGgFIAHgCIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAzg");
	this.shape_275.setTransform(72.2,180.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgIAEgFQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDADgBAEQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_276.setTransform(59.4,181.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgEgEAAgGIANAAQAAADACADIAGADIAFACIAGABQAGAAAFgCQAEgCADgEQADgEABgGQACgFAAgGIAAgFIgBAAQgDAHgHAEQgHACgGAAQgIAAgHgCQgGgDgFgGQgFgFgCgIQgBgGAAgHIABgPQACgHAEgGQAFgFAGgEQAHgFAJAAQAIABAGADQAGADAEAHIAAgMIAMAAIAABGQAAAKgCAHQgDAHgEAFQgJAKgSAAIgKgCgAgIgpQgFACgDAEIgEAJIgBALIABALQABAEACAEQADAFAFACQAEACAFABQAGgBAEgCQAFgCADgFQACgEABgEIACgLIgCgLQAAgEgDgFQgDgDgEgCQgEgDgGAAQgGAAgDACg");
	this.shape_277.setTransform(50.8,183.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgHAoIgIgCQgHgDgFgGQgFgFgCgIQgDgHAAgIQAAgIADgIQACgHAFgFQAFgGAHgDQAHgDAIgBQAKABAGADQAIADAEAGQAFAFADAHQACAIAAAIQAAAIgCAHQgDAIgFAFQgEAGgIADIgHACIgJAAgAgIgaQgFACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAFADAEQADAEAFACQAEABAEAAQAFAAAFgBQAEgCADgEQADgEACgFQACgGAAgGQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_278.setTransform(42.4,181.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgEAIABQAHgBAGACIAKAFQAEADADAFQADAFABAIIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFADAFAAQAJgBAGgFQAFgEABgKIANAAQgBAIgDAGQgCAFgFAEQgEADgGADQgGACgHAAQgIgBgHgCg");
	this.shape_279.setTransform(164.2,164.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGACgIABIgKgBQgEgCgEgDQgEgCgCgEQgCgEAAgGQAAgHACgEQADgEADgDIAJgCIAJgDIAKgBIAIgCIAGgDQACgCAAgDQgBgFgBgCIgEgEIgFgCIgGAAQgIAAgFADQgFADgBAJIgNAAQABgHADgGQACgEAFgEQAEgCAGgCQAGgCAGABIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAnIABAGQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDACgGAAQgFgBgDgCgAAJABIgIACIgIABIgIACQgDABgCADQgCADAAAFIABAGIADADIAFACIAGABQAGgBADgCQAFgBADgCQADgDACgEIABgFIAAgMQgDABgEAAg");
	this.shape_280.setTransform(156.3,164.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFALAAIAAAOQgIAAgGACQgFACgDAEQgDAEgBAGQgCAGAAAGIAAAjg");
	this.shape_281.setTransform(150.1,164);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgFgCgIQgCgHgBgJQABgHACgHQACgIAFgGQAFgFAHgDQAHgEAIABQAJgBAHAEQAIADAEAFQAFAGACAIQACAHAAAHQAAAJgCAHQgCAIgFAFQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgEADgBAGQgCAFAAAGQAAAIACAFQABAGAEADQADADAEACQAFACAEABQAFgBAEgCQAFgCADgDQAEgDACgGQABgFAAgIQAAgGgBgFQgCgGgEgDQgDgEgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_282.setTransform(129.9,164.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgEAIABQAHgBAGACIAKAFQAEADADAFQADAFABAIIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFADAFAAQAJgBAGgFQAFgEABgKIANAAQgBAIgDAGQgCAFgFAEQgEADgGADQgGACgHAAQgIgBgHgCg");
	this.shape_283.setTransform(121.6,164.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgLAoQgGgCgEgDQgFgDgDgFQgDgGAAgGIANAAQAAADACAEQACACADACIAGADIAGABIAHgBIAGgCQADAAABgDQACgDAAgDQAAgFgDgDQgEgCgFgCIgMgCIgMgEQgFgBgFgEQgDgFAAgIQAAgFACgFQADgDAEgDQAFgDAFgBIAJgBQAGgBAGACQAFABAEACQAFAEACAEQADAFABAHIgNAAIgCgGIgFgFIgFgCIgFAAIgGAAIgFACIgEADQgCACAAADQAAADADADIAFADIAIACIAIADIAKACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgEADQgFADgGACIgMABIgLgBg");
	this.shape_284.setTransform(109.6,164.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgHQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgEAIABQAHgBAGACIAKAFQAEADADAFQADAFABAIIgNAAIgDgHIgEgFIgFgDIgIgBQgGAAgEACQgFADgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFADAFAAQAJgBAGgFQAFgEABgKIANAAQgBAIgDAGQgCAFgFAEQgEADgGADQgGACgHAAQgIgBgHgCg");
	this.shape_285.setTransform(90.5,164.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgTAoIAAhNIALAAIAAARIABAAIAFgJIAGgFQAGgFAKAAIAAAOQgHAAgFACQgGACgDAEQgCAEgCAGQgCAGAAAGIAAAjg");
	this.shape_286.setTransform(81.2,164);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AALAyIgJAAIgEgCQgDgCgBgEIgBgJIAAgwIgNAAIAAgLIANAAIAAgXIAMAAIAAAXIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_287.setTransform(75.7,162.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgGAnIgchNIAOAAIAVBAIAAAAIAVhAIAOAAIgdBNg");
	this.shape_288.setTransform(53.4,164.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEAEgGABQgFABgHAAQgIAAgHgCgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_289.setTransform(188,146.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_290.setTransform(173.1,145.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEAEgGABQgFABgHAAQgIAAgHgCgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_291.setTransform(158.6,146.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgKA2QgGgBgEgDQgGgDgCgEQgDgEAAgHIAMAAQAAAEACADIAGADIAFACIAGABQAHAAAEgCQAEgCADgEQADgEABgFQABgGABgGIAAgFIgBAAQgDAHgHAEQgGACgHAAQgJAAgGgCQgHgDgEgGQgEgFgDgHQgCgHAAgHIACgPQACgHAEgGQAFgFAGgEQAHgFAJAAQAHAAAHAEQAGADAEAHIAAgLIALAAIAABFQAAAKgBAHQgDAHgEAFQgJAKgSAAIgKgCgAgJgpQgEADgDAEIgEAJIgBAKIABALQABAEACAEQADAFAEACQAEACAGAAQAGAAAEgCQAFgCACgFQADgEACgEIABgLIgBgKQgCgGgCgDQgDgFgEgBQgEgDgGAAQgGAAgEACg");
	this.shape_292.setTransform(150,148.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIAAIgKgBQgFgBgDgCQgDgDgDgEQgBgEAAgGQAAgGABgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCABgEQAAgFgCgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgGADgFQADgFAEgEQAFgCAGgCQAFgCAHAAIAKABQAFABAEADQAFACACAEQACAEAAAHIAAAmIABAIQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGAAQgFAAgDgCgAAKABIgJACIgHABIgJADQgDABgCACQgCADAAAFIABAFIAEAEIAEACIAGAAQAGAAADgBQAFgCADgDQADgCABgDIACgGIAAgMQgDABgDAAg");
	this.shape_293.setTransform(142.1,146.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_294.setTransform(135.4,145.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgLAnQgGgBgEgDQgFgDgDgFQgDgFAAgIIANAAQAAAFACACQACADADADIAGACIAGAAIAHAAIAGgBQADgCABgCQACgCAAgEQAAgFgEgDQgDgCgFgBIgMgEIgMgDQgFgCgFgEQgDgEAAgHQAAgGACgEQADgEAEgDQAFgDAFgBIAJgCQAGAAAGACQAFABAEADQAFADACAEQADAFABAHIgNAAIgCgHIgFgDIgFgCIgFgBIgGABIgFABIgEADQgCACAAADQAAADADACIAFAEIAIADIAIABIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgFACgGABIgMABIgLgBg");
	this.shape_295.setTransform(129.4,146.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgIAoIgHgCQgHgDgFgGQgFgFgCgIQgCgHgBgIQABgIACgIQACgHAFgFQAFgGAHgDQAHgEAIAAQAJAAAHAEQAHADAFAGQAFAFACAHQACAIAAAIQAAAIgCAHQgCAIgFAFQgFAGgHADIgHACIgJAAgAgJgaQgEACgDADQgDAFgCAFQgCAFAAAHQAAAGACAGQACAGADADQADAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgDACgGQABgGAAgGQAAgHgBgFQgCgFgEgFQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_296.setTransform(100.1,146.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEAEgGABQgFABgHAAQgIAAgHgCgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_297.setTransform(83.8,146.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAFACACQABADADADIAHACIAHAAIAGAAIAGgBQADgCACgCQACgCgBgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgFgCgEgEQgEgEAAgHQAAgGADgEQACgEAEgDQAEgDAFgBIALgCQAFAAAGACQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgCIgFgBIgGABIgGABIgDADQgCACABADQAAADABACIAHAEIAIADIAIABIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgFACgFABIgMABIgMgBg");
	this.shape_298.setTransform(75.9,146.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgOAmQgHgEgEgFQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgEAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAGADADQADAEAFACQAFABAFAAQAIAAAFgDIAEgFQACgDABgEIAMAAQgCAOgJAGQgEAEgGABQgFABgHAAQgIAAgHgCgAgIgaQgEABgDADQgDAEgBADQgCAEAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_299.setTransform(64.1,146.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AALAzIgJgBIgEgDQgDgCgBgDIgBgIIAAgxIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAwIAAADIACACIADABIAFAAIAGAAIAAAMg");
	this.shape_300.setTransform(49.2,145.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgGA2IAAhqIANAAIAABqg");
	this.shape_301.setTransform(32.6,145.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgFgBgDgEQgEgCgCgEQgBgEAAgGQAAgGABgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQADgCAAgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgIAEgEQACgGAEgCQAFgEAGgBQAFgBAHgBIAJABQAGABAEACQAEADADAEQADAEgBAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDABgGABQgFgBgDgCgAAJACIgIABIgIABIgIACQgDABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCACgEIABgFIAAgMQgDABgEABg");
	this.shape_302.setTransform(193.5,207);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgLA2QgFgBgEgDQgFgCgDgFQgDgEAAgGIAMAAQABADABACIAGAFIAGABIAFABQAGAAAFgCQAFgCACgEQADgEABgGQABgEABgHIAAgFIgBAAQgDAHgHAEQgHADgGAAQgJAAgGgDQgGgDgFgGQgFgFgBgIQgDgFAAgIIACgPQACgHAEgGQAFgFAGgFQAHgEAJAAQAHABAHADQAGADAEAGIAAgLIALAAIAABGQAAAKgCAHQgCAHgEAFQgJAJgSAAIgLgBgAgJgpQgEACgDAEIgEAJIgBALIABALQABAEACAEQADAEAEADQAEADAGAAQAGAAAEgDQAFgDACgEQADgEACgEIABgMIgBgKQgBgEgDgFQgCgDgFgCQgEgDgGAAQgFAAgFACg");
	this.shape_303.setTransform(184.8,208.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgFgBgDgEQgEgCgCgEQgBgEAAgGQAAgGABgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAFgDQADgCAAgDQAAgEgCgDIgEgEIgGgCIgEAAQgJAAgFADQgGADAAAJIgNAAQAAgIAEgEQACgGAEgCQAFgEAGgBQAFgBAHgBIAJABQAGABAEACQAEADADAEQADAEgBAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDABgGABQgFgBgDgCgAAJACIgIABIgIABIgIACQgDABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCACgEIABgFIAAgMQgDABgEABg");
	this.shape_304.setTransform(176.8,207);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AAUAmQgEgDAAgGIgFAFIgHAEQgGACgIABIgKgBQgFgBgDgEQgEgCgBgEQgDgEAAgGQAAgGADgFQACgEADgCIAJgEIAJgCIAKgBIAIgCIAGgDQABgCAAgDQABgEgCgDIgEgEIgFgCIgGAAQgHAAgGADQgFADgBAJIgMAAQAAgIADgEQACgGAFgCQAEgEAGgBQAFgBAHgBIAJABQAGABAEACQAEADADAEQADAEAAAHIAAAnIAAAHQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAEgBIAAAKQgDABgGABQgFgBgCgCgAAJACIgIABIgHABIgIACQgEABgCAEQgCADAAAEIABAFIADAEIAFACIAGABQAGAAAEgCQAEgCADgDQADgCACgEIAAgFIAAgMQgCABgEABg");
	this.shape_305.setTransform(164.6,207);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_306.setTransform(149.7,205.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGACgIABIgKgBQgEgBgEgEQgEgCgCgEQgBgEgBgGQABgGABgFQADgEAEgCIAIgEIAKgCIAJgBIAIgCIAGgDQACgCAAgDQgBgEgBgDIgEgEIgFgCIgFAAQgJAAgFADQgGADAAAJIgNAAQAAgIAEgEQACgGAEgCQAFgEAGgBQAGgBAGgBIAJABQAGABAEACQAEADADAEQADAEgBAHIAAAnIABAHQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAIADgBIAAAKQgDABgGABQgFgBgDgCgAAJACIgIABIgIABIgIACQgDABgCAEQgCADAAAEIABAFIAEAEIAEACIAGABQAGAAADgCQAFgCADgDQADgCACgEIABgFIAAgMQgDABgEABg");
	this.shape_307.setTransform(143.6,207);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgOAmQgHgEgEgEQgFgGgCgIQgDgHAAgJQAAgIADgHQADgHAEgGQAFgFAHgEQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAHABAHQACAIAAAGIg5AAIABAJQABAFADAEQADADAFADQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFABgHABQgIAAgHgDgAgIgbQgEADgDACQgDADgBAFQgCAEAAAEIArAAIgCgJIgEgHIgHgFQgEgBgFAAQgEAAgEABg");
	this.shape_308.setTransform(131.3,207);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AATA1IAAg0IgBgFIgDgGIgFgCIgGgBQgFgBgFACQgEACgDAEQgDADgBADQgBAEAAAFIAAAsIgNAAIAAhqIANAAIAAAqQABgEADgDIAGgDIAHgDIAGgBQAIAAAFACQAFADADADQAEAEABAFQABAFAAAGIAAAyg");
	this.shape_309.setTransform(123.1,205.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_310.setTransform(116.4,205.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgHAoIgIgCQgHgEgFgFQgFgGgCgHQgDgHAAgIQAAgIADgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAKABAGADQAIADAEAFQAFAGACAIQADAHAAAIQAAAIgDAHQgCAHgFAGQgEAFgIAEIgHACIgJABgAgJgaQgEACgDADQgDAEgCAGQgCAFAAAHQAAAGACAGQACAGADADQADADAEADQAFACAEAAQAFAAAFgCQAEgDADgDQADgDADgGQABgGAAgGQAAgHgBgFQgDgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_311.setTransform(105.8,207);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AALAyIgJAAIgEgDQgDgCgBgDIgBgJIAAgwIgNAAIAAgLIANAAIAAgYIAMAAIAAAYIAQAAIAAALIgQAAIAAAvIAAAEIACACIADABIAFAAIAGAAIAAALg");
	this.shape_312.setTransform(99,205.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgQIALAAIAAAQg");
	this.shape_313.setTransform(86.8,205.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgMAoQgFgCgFgDQgEgDgDgFQgCgFgBgIIANAAQAAAEACAEQABACADACIAHADIAHABIAGgBIAGgBQADgCACgCQABgDAAgDQAAgFgDgCQgEgDgFgCIgMgCIgMgEQgFgBgEgEQgEgFAAgIQAAgFADgFQACgEAEgCQAEgDAFgBIALgCQAFABAGABQAGABADADQAFADADAEQACAFAAAHIgMAAIgCgHIgFgDIgFgDIgFAAIgGAAIgGACIgDADQgCACABADQAAADABACIAHAEIAIADIAIACIAJACIAIADIAGAGQACAEAAAFQAAAIgDAEQgDAEgFADQgFAEgFABIgMABIgMgBg");
	this.shape_314.setTransform(77.3,207);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgIAoIgHgCQgHgEgFgFQgFgGgCgHQgCgHgBgIQABgIACgHQACgIAFgGQAFgFAHgDQAHgDAIgBQAJABAHADQAIADAEAFQAFAGACAIQACAHAAAIQAAAIgCAHQgCAHgFAGQgEAFgIAEIgHACIgJABgAgJgaQgEACgDADQgEAEgBAGQgCAFAAAHQAAAGACAGQABAGAEADQADADAEADQAFACAEAAQAFAAAEgCQAFgDADgDQAEgDACgGQABgGAAgGQAAgHgBgFQgCgGgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_315.setTransform(57.9,207);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgIAoIgHgDQgHgDgFgFQgFgGgCgHQgDgHABgJQgBgHADgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAJAAAIADQAGADAFAGQAFAFADAHQABAIAAAHQAAAJgBAHQgDAHgFAGQgFAFgGADIgIADIgJABgAgIgaQgFACgDAEQgEAEgBAFQgCAFAAAGQAAAIACAFQABAFAEAEQADADAFACQAEACAEAAQAFAAAEgCQAFgCADgDQADgEADgFQABgFAAgIQAAgGgBgFQgDgFgDgEQgDgEgFgCQgEgCgFAAQgEAAgEACg");
	this.shape_316.setTransform(221,189.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgHAoIgIgDQgHgDgFgFQgFgGgCgHQgDgHAAgJQAAgHADgIQACgHAFgFQAFgGAHgDQAHgDAIAAQAKAAAGADQAIADAEAGQAFAFACAHQADAIAAAHQAAAJgDAHQgCAHgFAGQgEAFgIADIgHADIgJABgAgJgaQgEACgDAEQgDAEgCAFQgCAFAAAGQAAAIACAFQACAFADAEQADADAEACQAFACAEAAQAFAAAFgCQAEgCADgDQADgEACgFQACgFAAgIQAAgGgCgFQgCgFgDgEQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_317.setTransform(212.4,189.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AATAmQgDgDAAgGIgGAFIgGAEQgGADgIAAIgKgCQgEgBgEgCQgDgDgDgEQgCgEAAgGQAAgGACgFQADgEADgDIAJgCIAJgDIAKgCIAIgBIAGgCQABgCAAgEQAAgFgBgCIgEgEIgFgBIgGgBQgHAAgGADQgGADAAAIIgMAAQAAgHADgFQACgFAFgDQAEgDAGgBQAGgBAGAAIAJABQAGAAAEACQAEADADAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGABQgFAAgDgDgAAJABIgIACIgIABIgHADQgEABgCACQgCADAAAFIABAGIADADIAFACIAGAAQAGAAAEgCQAEgBADgCQADgDACgDIAAgGIAAgMQgCABgEAAg");
	this.shape_318.setTransform(170.8,189.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgCgGgBgGIANAAQAAADACADQABAEADABIAHADIAHAAIAGAAIAGgCQADgBACgCQABgCAAgEQAAgFgDgDQgEgCgFgBIgMgEIgMgDQgFgCgEgEQgEgEAAgIQAAgFADgEQACgEAEgDQAEgDAFgBIALgBQAFAAAGABQAGABADACQAFADADAFQACAFAAAHIgMAAIgCgGIgEgFIgGgBIgFgBIgGABIgGABIgDADQgCACABADQAAADABADIAHADIAIACIAIACIAJADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgFADQgFACgFABIgMACIgMgCg");
	this.shape_319.setTransform(158.7,189.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_320.setTransform(151,189.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAVAnIgVggIgVAgIgPAAIAcgoIgbglIARAAIASAbIASgbIAQAAIgaAkIAdApg");
	this.shape_321.setTransform(143.1,189.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AATAmQgCgDAAgGIgHAFIgGAEQgGADgIAAIgKgCQgFgBgDgCQgDgDgDgEQgBgEAAgGQAAgGABgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCABgEQAAgFgCgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHADgFQADgFAEgDQAFgDAGgBQAFgBAHAAIAKABQAFAAAEACQAFADACAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgDgDgAAKABIgJACIgHABIgJADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgDIACgGIAAgMQgDABgDAAg");
	this.shape_322.setTransform(135.3,189.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_323.setTransform(129.5,188.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_324.setTransform(123.9,189.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFALAAIAAAOQgIAAgGACQgFACgDAEQgCAEgCAGQgCAGABAGIAAAjg");
	this.shape_325.setTransform(118,189.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_326.setTransform(107,189.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_327.setTransform(101.2,188.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgMAnQgFgBgFgDQgEgDgDgFQgDgGAAgGIANAAQAAADACADQACAEADABIAGADIAHAAIAGAAIAGgCQADgBABgCQADgCAAgEQAAgFgFgDQgDgCgGgBIgLgEIgMgDQgFgCgFgEQgDgEAAgIQAAgFACgEQADgEAEgDQAFgDAEgBIAKgBQAHAAAFABQAGABAEACQAEADACAFQADAFABAHIgNAAIgCgGIgEgFIgGgBIgFgBIgGABIgGABIgDADQgBACAAADQAAADACADIAFADIAIACIAIACIAKADIAIADIAGAGQACAEAAAGQAAAGgDAFQgDAFgEADQgFACgGABIgMACIgMgCg");
	this.shape_328.setTransform(87.8,189.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgRAlQgFgCgDgDQgEgEgBgFQgBgFAAgHIAAgxIANAAIAAAzIABAGIADAGQAEADAHAAQAFAAAEgCQAFgBADgDQACgDACgFQABgEAAgGIAAgqIANAAIAABMIgMAAIAAgNIAAAAQgEAIgHADQgGAEgHAAQgIgBgFgCg");
	this.shape_329.setTransform(79.9,189.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAqAoIAAgyIgBgHIgCgFQgCgDgDgBQgDgBgEAAQgKAAgGAFQgEAFAAAJIAAAwIgNAAIAAgyIAAgHQAAgDgCgCQgCgDgDgBIgHgBQgFAAgEACIgHAFQgCADgBAEIgCAFIAAAwIgMAAIAAhNIALAAIAAAMIABAAQAEgHAHgDQAFgEAJAAQAHAAAGADIAEAEIAEAHQABgEADgCIAGgEQAGgEAHAAQAHAAAEACQAFABADADQAEACACAFQABAEAAAGIAAA4g");
	this.shape_330.setTransform(69.4,189.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AAUAmQgDgDAAgGIgHAFIgGAEQgGADgIAAIgKgCQgFgBgDgCQgDgDgDgEQgBgEAAgGQAAgGABgFQADgEAEgDIAIgCIAKgDIAJgCIAIgBIAFgCQACgCABgEQAAgFgCgCIgEgEIgGgBIgEgBQgJAAgFADQgGADAAAIIgNAAQAAgHADgFQADgFAEgDQAFgDAGgBQAFgBAHAAIAKABQAFAAAEACQAFADACAEQACAEAAAHIAAAmIABAHQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFAAIAAAJQgEACgGABQgFAAgCgDgAAKABIgJACIgIABIgIADQgDABgCACQgCADAAAFIABAGIAEADIAEACIAGAAQAGAAADgCQAFgBADgCQADgDABgDIACgGIAAgMQgDABgDAAg");
	this.shape_331.setTransform(45.3,189.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgOAlQgHgCgEgGQgFgFgCgHQgDgIAAgJQAAgIADgHQADgHAEgGQAFgFAHgDQAHgDAHAAIAJABIAIADQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAKQABAFADADQADADAFACQAFACAFAAQAIABAFgEIAEgFQACgDABgDIAMAAQgCANgJAGQgEAEgGABQgFACgHAAQgIgBgHgDgAgIgbQgEACgDAEQgDADgBADQgCAEAAAFIArAAIgCgJIgEgGIgHgGQgEgBgFAAQgEAAgEABg");
	this.shape_332.setTransform(37.2,189.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AATA2IAAg1IgBgGIgDgEIgFgEIgGgBQgFAAgFACQgEACgDADQgDADgBAEQgBAFAAAEIAAAtIgNAAIAAhrIANAAIAAAqQABgEADgCIAGgFIAHgCIAGgBQAIAAAFACQAFACADAEQAEAEABAFQABAFAAAFIAAA0g");
	this.shape_333.setTransform(28.9,188.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgFgCgIQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFACAFABQAJAAAGgGQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGABgHAAQgIABgHgDg");
	this.shape_334.setTransform(149.5,172);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgXA2IgFgBIAAgMIAEACIADAAQAEAAADgCQADgCABgDIAGgNIgghMIAPAAIAVA+IABAAIAWg+IANAAIghBXIgEAJIgEAHIgHADIgHABg");
	this.shape_335.setTransform(141.7,173.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgFgCgIQgCgHAAgJQAAgHACgIQACgHAFgHQAEgFAHgDQAHgDAIgBQAHABAGABIAKAFQAEAEADAFQADAFABAGIgNAAIgDgGIgEgFIgFgDIgIgBQgGAAgEADQgFACgDAEIgEAKIgBAKIABALQACAFACAEQADAEAEACQAFACAFABQAJAAAGgGQAFgFABgIIANAAQgBAHgDAFQgCAGgFAEQgEAEgGACQgGABgHAAQgIABgHgDg");
	this.shape_336.setTransform(133.9,172);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgUAoIAAhNIANAAIAAARIAAAAIAFgJIAFgFQAHgFALAAIAAAOQgIAAgGACQgFACgDAEQgCAEgCAGQgCAGABAGIAAAjg");
	this.shape_337.setTransform(94.6,171.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgOAmQgHgDgEgFQgFgGgCgIQgDgHAAgJQAAgIADgHQADgIAEgFQAFgGAHgDQAHgDAHAAIAJABIAIAEQAHAEAEAHQAEAGABAIQACAIAAAGIg5AAIABAJQABAFADAEQADAEAFACQAFACAFAAQAIgBAFgDIAEgFQACgDABgEIAMAAQgCANgJAHQgEADgGACQgFACgHgBQgIAAgHgCgAgIgaQgEACgDACQgDAEgBAEQgCADAAAFIArAAIgCgJIgEgHIgHgEQgEgCgFAAQgEAAgEACg");
	this.shape_338.setTransform(87.7,172);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAiA1IgMgfIgsAAIgMAfIgPAAIAqhpIAPAAIAqBpgAgSAKIAkAAIgSgyg");
	this.shape_339.setTransform(69.7,170.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_203,p:{x:32.7,y:151}},{t:this.shape_202},{t:this.shape_201,p:{x:49.4,y:152.4}},{t:this.shape_200,p:{x:61.7,y:151}},{t:this.shape_199,p:{x:69.9,y:152.4}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196,p:{x:89.1,y:151.3}},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192,p:{x:127,y:151}},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189,p:{x:144.7,y:151}},{t:this.shape_188,p:{x:150.7,y:152.4}},{t:this.shape_187,p:{x:160.6,y:152.4}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176,p:{x:85.3,y:168.5}},{t:this.shape_175,p:{x:91.1,y:169.8}},{t:this.shape_174,p:{x:101.6,y:168.8}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170,p:{x:139,y:168.5}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167,p:{x:160,y:168.5}},{t:this.shape_166,p:{x:165.7,y:169.9}},{t:this.shape_165},{t:this.shape_164,p:{x:177.1,y:168.5}},{t:this.shape_163,p:{x:182.9,y:169.9}},{t:this.shape_162},{t:this.shape_161,p:{x:193.4,y:168.8}},{t:this.shape_160,p:{x:33.7,y:187.3}},{t:this.shape_159,p:{x:39.5,y:187.4}},{t:this.shape_158},{t:this.shape_157,p:{x:53.7,y:186}},{t:this.shape_156},{t:this.shape_155,p:{x:68.1,y:187.3}},{t:this.shape_154},{t:this.shape_153,p:{x:87.3,y:185.9}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149,p:{x:120.9,y:187.3}},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146,p:{x:147.5,y:187.4}},{t:this.shape_145},{t:this.shape_144,p:{x:161.2,y:186.3}},{t:this.shape_143},{t:this.shape_142,p:{x:180.3,y:187.3}},{t:this.shape_141},{t:this.shape_140,p:{x:197.4,y:187.4}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136,p:{x:48.7,y:205}},{t:this.shape_135,p:{x:55.8,y:204.8}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:108.5,y:203.5}},{t:this.shape_127},{t:this.shape_126,p:{x:125.4,y:204.8}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120,p:{x:168.8,y:204.8}},{t:this.shape_119,p:{x:175.3,y:204.8}},{t:this.shape_118,p:{x:183.6,y:205}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115,p:{x:206.4,y:208}},{t:this.shape_114,p:{x:54.9,y:221}},{t:this.shape_113,p:{x:59,y:221.3}},{t:this.shape_112,p:{x:67.3,y:221}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109,p:{y:222.4}},{t:this.shape_108,p:{x:105.6,y:221}},{t:this.shape_107,p:{x:114.4,y:222.4}},{t:this.shape_106},{t:this.shape_105,p:{x:139.5,y:222.4}},{t:this.shape_104},{t:this.shape_103,p:{x:153.5,y:221.3}},{t:this.shape_102,p:{x:157.7,y:221}},{t:this.shape_101},{t:this.shape_100,p:{x:175.3,y:222.4}},{t:this.shape_99,p:{x:181.9,y:220.9}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:63.1,y:239.8}},{t:this.shape_95,p:{x:69.1,y:238.5}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92,p:{x:89.1,y:239.9}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:129.9,y:239.9}},{t:this.shape_87,p:{x:135.5,y:238.5}},{t:this.shape_86},{t:this.shape_85,p:{x:151.6,y:238.8}},{t:this.shape_84,p:{x:155.7,y:238.5}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79,p:{x:190.8,y:243}}]},35).to({state:[]},291).to({state:[{t:this.shape_203,p:{x:51.9,y:178}},{t:this.shape_200,p:{x:60.4,y:178}},{t:this.shape_201,p:{x:68.6,y:179.4}},{t:this.shape_192,p:{x:80.9,y:178}},{t:this.shape_199,p:{x:89.1,y:179.4}},{t:this.shape_221},{t:this.shape_96,p:{x:104.1,y:179.3}},{t:this.shape_220,p:{x:108.3,y:178.3}},{t:this.shape_219},{t:this.shape_188,p:{x:127.3,y:179.4}},{t:this.shape_126,p:{x:135.7,y:179.3}},{t:this.shape_196,p:{x:142.1,y:178.3}},{t:this.shape_160,p:{x:147.5,y:179.3}},{t:this.shape_218},{t:this.shape_217,p:{x:161.6,y:179.4}},{t:this.shape_144,p:{x:167.8,y:178.3}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213,p:{x:197.4,y:179.3}},{t:this.shape_128,p:{x:59,y:195.5}},{t:this.shape_166,p:{x:67.3,y:196.9}},{t:this.shape_212},{t:this.shape_211,p:{x:81.5,y:195.8}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_170,p:{x:101.2,y:195.5}},{t:this.shape_119,p:{x:107,y:196.8}},{t:this.shape_174,p:{x:117.5,y:195.8}},{t:this.shape_187,p:{x:125.6,y:196.9}},{t:this.shape_208},{t:this.shape_207},{t:this.shape_161,p:{x:153.8,y:195.8}},{t:this.shape_206},{t:this.shape_205},{t:this.shape_163,p:{x:177,y:196.9}},{t:this.shape_204},{t:this.shape_79,p:{x:190.5,y:200}}]},13).to({state:[]},82).to({state:[{t:this.shape_114,p:{x:57.3,y:231.3}},{t:this.shape_126,p:{x:63.3,y:232.7}},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238,p:{x:88.7,y:232.8}},{t:this.shape_99,p:{x:99.1,y:231.2}},{t:this.shape_112,p:{x:102.9,y:231.3}},{t:this.shape_160,p:{x:107.5,y:232.7}},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_113,p:{x:135.5,y:231.6}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232,p:{x:158.8,y:232.8}},{t:this.shape_231,p:{x:164.8,y:236.9}},{t:this.shape_103,p:{x:173.2,y:231.6}},{t:this.shape_230,p:{x:179.9,y:231.3}},{t:this.shape_107,p:{x:188.1,y:232.8}},{t:this.shape_229},{t:this.shape_187,p:{x:73.3,y:250.3}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_149,p:{x:107.4,y:250.2}},{t:this.shape_84,p:{x:111.1,y:248.8}},{t:this.shape_225},{t:this.shape_92,p:{x:129,y:250.3}},{t:this.shape_224},{t:this.shape_119,p:{x:145.7,y:250.2}},{t:this.shape_223},{t:this.shape_135,p:{x:157.5,y:250.2}},{t:this.shape_222},{t:this.shape_88,p:{x:171.6,y:250.3}},{t:this.shape_85,p:{x:177.8,y:249.1}},{t:this.shape_79,p:{x:182.4,y:253.3}}]},13).to({state:[]},108).to({state:[{t:this.shape_259},{t:this.shape_258,p:{x:56,y:188.1}},{t:this.shape_257,p:{x:64.3,y:189.6}},{t:this.shape_256},{t:this.shape_113,p:{x:82.6,y:188.4}},{t:this.shape_255,p:{x:88.1,y:189.5}},{t:this.shape_112,p:{x:91.7,y:188.1}},{t:this.shape_109,p:{y:189.6}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_128,p:{x:153.1,y:188.2}},{t:this.shape_102,p:{x:159,y:188.1}},{t:this.shape_100,p:{x:164.9,y:189.6}},{t:this.shape_250},{t:this.shape_95,p:{x:182,y:188.2}},{t:this.shape_103,p:{x:193,y:188.4}},{t:this.shape_105,p:{x:199.8,y:189.6}},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_119,p:{x:122.1,y:207}},{t:this.shape_244},{t:this.shape_243},{t:this.shape_157,p:{x:137.5,y:205.6}},{t:this.shape_88,p:{x:143.2,y:207.1}},{t:this.shape_189,p:{x:148.9,y:205.6}},{t:this.shape_242},{t:this.shape_241},{t:this.shape_79,p:{x:168.1,y:210.1}}]},18).to({state:[]},104).to({state:[{t:this.shape_301},{t:this.shape_175,p:{x:38.7,y:146.5}},{t:this.shape_300},{t:this.shape_200,p:{x:55.8,y:145.1}},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_217,p:{x:91.8,y:146.6}},{t:this.shape_296},{t:this.shape_155,p:{x:108.5,y:146.5}},{t:this.shape_108,p:{x:116.9,y:145.2}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_231,p:{x:164.6,y:150.7}},{t:this.shape_290},{t:this.shape_192,p:{x:179.7,y:145.1}},{t:this.shape_289},{t:this.shape_288},{t:this.shape_166,p:{x:61.3,y:164.1}},{t:this.shape_142,p:{x:69.4,y:164}},{t:this.shape_287},{t:this.shape_286},{t:this.shape_170,p:{x:84.8,y:162.6}},{t:this.shape_285},{t:this.shape_167,p:{x:96.2,y:162.6}},{t:this.shape_163,p:{x:101.9,y:164.1}},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_126,p:{x:138.3,y:164}},{t:this.shape_211,p:{x:144.7,y:162.9}},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_174,p:{x:170.4,y:162.9}},{t:this.shape_220,p:{x:35.6,y:180.4}},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_196,p:{x:65.6,y:180.4}},{t:this.shape_275},{t:this.shape_274},{t:this.shape_120,p:{x:87.4,y:181.5}},{t:this.shape_115,p:{x:90.1,y:184.6}},{t:this.shape_203,p:{x:100.6,y:180.1}},{t:this.shape_273},{t:this.shape_159,p:{x:117.3,y:181.6}},{t:this.shape_272},{t:this.shape_146,p:{x:137,y:181.6}},{t:this.shape_119,p:{x:145.1,y:181.5}},{t:this.shape_144,p:{x:151.5,y:180.4}},{t:this.shape_255,p:{x:156.9,y:181.5}},{t:this.shape_157,p:{x:160.6,y:180.1}},{t:this.shape_271},{t:this.shape_189,p:{x:171.9,y:180.1}},{t:this.shape_140,p:{x:177.7,y:181.6}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_136,p:{x:62.3,y:199.2}},{t:this.shape_268},{t:this.shape_267},{t:this.shape_128,p:{x:96.8,y:197.7}},{t:this.shape_164,p:{x:102.7,y:197.6}},{t:this.shape_266},{t:this.shape_265},{t:this.shape_95,p:{x:125.7,y:197.7}},{t:this.shape_264},{t:this.shape_118,p:{x:147.3,y:199.2}},{t:this.shape_161,p:{x:153.6,y:197.9}},{t:this.shape_263},{t:this.shape_99,p:{x:171.2,y:197.5}},{t:this.shape_113,p:{x:81.8,y:215.4}},{t:this.shape_262},{t:this.shape_261},{t:this.shape_258,p:{x:108.9,y:215.1}},{t:this.shape_257,p:{x:117.2,y:216.6}},{t:this.shape_260},{t:this.shape_213,p:{x:132.1,y:216.5}},{t:this.shape_103,p:{x:136.3,y:215.4}},{t:this.shape_79,p:{x:140.9,y:219.6}}]},11).to({state:[]},174).to({state:[{t:this.shape_339},{t:this.shape_153,p:{x:76.8,y:170.5}},{t:this.shape_113,p:{x:81.1,y:170.9}},{t:this.shape_338},{t:this.shape_337},{t:this.shape_100,p:{x:105.1,y:172}},{t:this.shape_155,p:{x:113.5,y:171.9}},{t:this.shape_238,p:{x:121.8,y:172}},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_102,p:{x:155.1,y:170.6}},{t:this.shape_232,p:{x:160.9,y:172}},{t:this.shape_231,p:{x:166.9,y:176.2}},{t:this.shape_103,p:{x:175.3,y:170.9}},{t:this.shape_230,p:{x:182,y:170.6}},{t:this.shape_107,p:{x:190.2,y:172}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_160,p:{x:52.1,y:189.4}},{t:this.shape_85,p:{x:56.3,y:188.4}},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_88,p:{x:95.6,y:189.5}},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_142,p:{x:178.8,y:189.4}},{t:this.shape_108,p:{x:187.2,y:188.1}},{t:this.shape_128,p:{x:200.6,y:188.1}},{t:this.shape_87,p:{x:206.5,y:188.1}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_95,p:{x:229.5,y:188.1}},{t:this.shape_99,p:{x:48.2,y:205.5}},{t:this.shape_164,p:{x:51.9,y:205.6}},{t:this.shape_315},{t:this.shape_187,p:{x:67.8,y:207}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_126,p:{x:92.6,y:206.9}},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_255,p:{x:155.1,y:206.9}},{t:this.shape_176,p:{x:158.8,y:205.6}},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_170,p:{x:199,y:205.6}},{t:this.shape_119,p:{x:204.8,y:206.9}},{t:this.shape_79,p:{x:211,y:210.1}}]},11).wait(203));

	// title
	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AAIB4QgKgCgIgEQgIgEgFgKQgFgIAAgOIAAhtIgfAAIAAgiIAfAAIAAg4IAyAAIAAA4IAmAAIAAAiIgmAAIAABbQAAANAFAFQAEAEANAAIAIgBIAIAAIAAAnIgPABIgPABg");
	this.shape_340.setTransform(352.8,201.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("Ag7BgIAAi6IAwAAIAAAjIABAAQAEgJAGgHQAFgIAIgEQAIgGAJgDQAJgCAKAAIALABIAAAvIgJAAIgKgBQgNAAgLAEQgJAFgGAJQgFAHgCAMQgDAKAAALIAABVg");
	this.shape_341.setTransform(340.6,203.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgzBfQgMgEgIgGQgJgHgFgLQgFgKAAgPQAAgPAGgLQAFgKAJgGQAJgFALgDIAXgFIAXgDIATgDQAIgCAFgEQAFgEAAgJQAAgIgDgFQgCgFgFgCQgEgDgGgBIgNgBQgOAAgJAHQgIAGgCAPIgzAAQABgSAIgLQAIgMAMgIQAMgHAQgDQAPgDAPAAIAcACQAOACAMAGQAMAGAIAKQAHAKAAARIAABgIACAYQABALAEAGIg0AAIgCgJIgCgJQgMANgRAFQgPAFgRAAQgOAAgLgDgAAZAHIgKACIgMACIgLACIgMADIgJAFQgFADgCAEQgDAFAAAHQAAAHADAFQACAFAFACIAKAEIAMABQAOAAAIgFQAIgFAEgHQAEgHABgHIABgMIAAgTg");
	this.shape_342.setTransform(322.2,203.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgkBbQgSgHgMgNQgNgNgGgSQgHgSAAgWQAAgTAHgTQAHgSAMgNQANgNASgHQARgIAUAAQAYAAASAJQAIAFAIAGQAHAGAGAIQALAPAFAUQAFAUgBAVIiGAAQABAMADAJQADAJAGAGQALALAVAAQAPAAAMgIQALgIACgIIAtAAQgFAQgIAMQgJAMgLAIQgWAOggAAQgVAAgRgHgAgTg2QgIAEgFAGQgEAGgCAHIgDAMIBSAAQgDgTgJgKQgFgFgHgDQgHgCgJAAQgLAAgJAEg");
	this.shape_343.setTransform(301.6,203.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AA0CBIAAhwIhnAAIAABwIg5AAIAAkBIA5AAIAABjIBnAAIAAhjIA4AAIAAEBg");
	this.shape_344.setTransform(278,200.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgkBbQgSgHgMgNQgNgNgGgSQgHgSAAgWQAAgTAHgTQAHgSAMgNQANgNASgHQARgIAUAAQAYAAASAJQAIAFAIAGQAHAGAGAIQALAPAFAUQAFAUgBAVIiGAAQABAMADAJQADAJAGAGQALALAVAAQAPAAAMgIQALgIACgIIAtAAQgFAQgIAMQgJAMgLAIQgWAOggAAQgVAAgRgHgAgTg2QgIAEgFAGQgEAGgCAHIgDAMIBSAAQgDgTgJgKQgFgFgHgDQgHgCgJAAQgLAAgJAEg");
	this.shape_345.setTransform(244.3,203.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AAkCBIAAhqIgCgTQgBgJgEgFQgEgFgGgEQgGgDgKAAQgTABgKAMQgFAGgCAJQgCAKAAAPIAABiIgzAAIAAkBIAzAAIAABhIABAAQAKgQAPgIQAOgGAOAAQAVgBANAGQANAFAIALQAHAKADAOQADAOAAAQIAABzg");
	this.shape_346.setTransform(223.4,200.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgcCBIAAjRIhNAAIAAgwIDTAAIAAAwIhOAAIAADRg");
	this.shape_347.setTransform(201.8,200.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340}]}).to({state:[]},21).wait(1042));

	// heart
	this.heart = new lib.heart();
	this.heart.parent = this;
	this.heart.setTransform(338,184,0.25,0.25,0,0,0,768,928);
	this.heart._off = true;

	this.timeline.addTween(cjs.Tween.get(this.heart).wait(35).to({_off:false},0).wait(1028));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(463.7,376,172.7,46.9);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/heart_Canvas_atlas_.png?1483559785007", id:"heart_Canvas_atlas_"},
		{src:"sounds/heart_p01_titlewav.mp3?1483559786355", id:"heart_p01_titlewav"},
		{src:"sounds/heart_p02_theHeartIswav.mp3?1483559786355", id:"heart_p02_theHeartIswav"},
		{src:"sounds/heart_p03_heartContractswav.mp3?1483559786355", id:"heart_p03_heartContractswav"},
		{src:"sounds/heart_p04_inFirstStagewav.mp3?1483559786355", id:"heart_p04_inFirstStagewav"},
		{src:"sounds/heart_p05_atriaPumpwav.mp3?1483559786355", id:"heart_p05_atriaPumpwav"},
		{src:"sounds/heart_p06_inSecondStagewav.mp3?1483559786355", id:"heart_p06_inSecondStagewav"},
		{src:"sounds/heart_p07_afterOneCyclewav.mp3?1483559786355", id:"heart_p07_afterOneCyclewav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;