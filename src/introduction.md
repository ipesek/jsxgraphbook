<script type="text/javascript" src="files/jsxgraphcore.js"></script>

This is a manual about the [JSXGraph](https://jsxgraph.org/). 

JSXGraph is a cross-browser JavaScript library for interactive geometry, function plotting, charting, and data visualization in the web browser.

This book covers the basics, how to build simple constructions and also some advanced topics on how to include JSXGraph in Moodle. 

Below is an example of power of JSXGraph.   
*Hint: Move the dot and observe.* 

<div id="box16" class="jxgbox" style="width:500px; height:333px;margin-left:auto; margin-right:auto;"></div> 
<script type='text/javascript'>
    JXG.Options.board.showNavigation = false;
    var color1 = "crimson";
	var brd16 = JXG.JSXGraph.initBoard('box16', {boundingbox: [-10.4625,7.6,10.4625,-5]});
	brd16.options.point.visible = false;
	brd16.options.point.fixed = false;
	brd16.options.polygon.borders.visible = false;
	var kot16 = brd16.create('slider', [[-9.5,-4],[-0.5,-4],[90,90,-60]], {withlabel:false});	
	var B116 = brd16.create('point', [-1,-4], {name:'B116'});
	var Vues16 = brd16.create('point', [function(){return kot16.Value() > 0 ? -0.9217 : (kot16.Value() < -30 ? -Math.PI/2 : -0.9217+(-Math.PI/2+0.9217)/30*(-kot16.Value()))}, function(){return kot16.Value() > -30 ? -0.55088 : (kot16.Value() < -29 ? -0.55088+(-1+0.55088)/30*(-30-kot16.Value()) : -1)}], {name:'Vues16', color:color1});
	var zoom16 = 1.6;
	var x16 = function(){return -zoom16 * Math.cos(Vues16.X()) * Math.sin(Vues16.Y())};
	var X16 = brd16.create('point', [function(){return B116.X() + zoom16 * Math.sin(Vues16.X())}, function(){return B116.Y()+x16}], {name:'X'});
	var u16 = brd16.create('point', [function(){return zoom16*Math.sin(Vues16.X());},x16], {name:'u16'});
	var k16 = -1;
	var Z16 = brd16.create('point', [function(){return B116.X()}, function(){return B116.Y()+zoom16*Math.cos(Vues16.Y())}], {name:'Z16'});
	var w16 = brd16.create('point', [0,function(){return zoom16*Math.cos(Vues16.Y());}], {name:'w16'});
	var Y_16 = brd16.create('point', [function(){return B116.X()+zoom16*Math.cos(Vues16.X())}, function(){return B116.Y()+zoom16*Math.sin(Vues16.X())*Math.sin(Vues16.Y())}], {name:'Y'});
	var v16 = brd16.create('point', [function(){return zoom16*Math.cos(Vues16.X())},function(){return zoom16*Math.sin(Vues16.X())*Math.sin(Vues16.Y());}], {name:'v16'});
	var O16 = brd16.create('point', [1,2], {name:'O16'});
	var a16 = 1;
	var b16 = 1;
	var d16 = 2; 
	var vzorec16 = brd16.create('slider', [[18,5.5],[18,-2],[1,1,11]], {withlabel:false});
	var K16 = brd16.create('point', [function(){return O16.X() + a16 * u16.X() + b16 * v16.X()},function(){return O16.Y() + a16 * u16.Y() + b16 * v16.Y()}], {name:'K16'});
	var L16 = brd16.create('point', [function(){return O16.X() - a16 * u16.X() + b16 * v16.X()},function(){return O16.Y() - a16 * u16.Y() + b16 * v16.Y()}], {name:'L16'});
	var M16 = brd16.create('point', [function(){return O16.X() - a16 * u16.X() - b16 * v16.X()},function(){return O16.Y() - a16 * u16.Y() - b16 * v16.Y()}], {name:'M16'});
	var N16 = brd16.create('point', [function(){return O16.X() + a16 * u16.X() - b16 * v16.X()},function(){return O16.Y() + a16 * u16.Y() - b16 * v16.Y()}], {name:'N16'});
	brd16.create('polygon', [L16,K16,N16,M16], {fillopacity:0.05});
	brd16.create('segment', [L16,K16], {});
	brd16.create('segment', [K16,N16], {});
	brd16.create('segment', [N16,M16], {});
	brd16.create('segment', [M16,L16], {});
	var P16 = brd16.create('point', [function(){return O16.X() + a16 * u16.X() + b16 * v16.X() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.X() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X()},function(){return O16.Y() + a16 * u16.Y() + b16 * v16.Y() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.Y() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y()}], {name:'P16'});
	var Q16 = brd16.create('point', [function(){return O16.X() + a16 * u16.X() - b16 * v16.X() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.X() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X()},function(){return O16.Y() + a16 * u16.Y() - b16 * v16.Y() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.Y() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y()}], {name:'Q16'});
	var R16 = brd16.create('point', [function(){return O16.X() - a16 * u16.X() + b16 * v16.X() - d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.X() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X()},function(){return O16.Y() - a16 * u16.Y() + b16 * v16.Y() - d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.Y() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y()}], {name:'R16'});
	var S16 = brd16.create('point', [function(){return O16.X() - a16 * u16.X() - b16 * v16.X() - d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.X() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X()},function(){return O16.Y() - a16 * u16.Y() - b16 * v16.Y() - d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.Y() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y()}], {name:'S16'});
	brd16.create('polygon', [K16,P16,Q16,N16]);
	brd16.create('segment', [K16,P16], {});
	brd16.create('segment', [P16,Q16], {});
	brd16.create('segment', [Q16,N16], {});
	brd16.create('segment', [N16,K16], {});
	brd16.create('polygon', [L16,M16,S16,R16], {opacity:function(){return vzorec16.Value()==1||vzorec16.Value()==2||vzorec16.Value()==3||vzorec16.Value()==4||vzorec16.Value()==7||vzorec16.Value()==7||vzorec16.Value()==8||vzorec16.Value()==9||vzorec16.Value()==10?0.25:0;}});
	brd16.create('segment', [L16,M16], {});
	brd16.create('segment', [M16,S16], {opacity:function(){return vzorec16.Value()!=5&&vzorec16.Value()!=6&&vzorec16.Value()!=11?1:0}});
	brd16.create('segment', [S16,R16], {opacity:function(){return vzorec16.Value()!=5&&vzorec16.Value()!=6&&vzorec16.Value()!=11?1:0}});
	brd16.create('segment', [R16,L16], {opacity:function(){return vzorec16.Value()!=5&&vzorec16.Value()!=6&&vzorec16.Value()!=11?1:0}});
	var T16 = brd16.create('point', [function(){return O16.X() + a16 * u16.X() + b16 * v16.X() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * v16.X() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X()},function(){return O16.Y() + a16 * u16.Y() + b16 * v16.Y() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * v16.Y() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y()}], {name:'T16'});
	var U16 = brd16.create('point', [function(){return O16.X() - a16 * u16.X() + b16 * v16.X() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * v16.X() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X()},function(){return O16.Y() - a16 * u16.Y() + b16 * v16.Y() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * v16.Y() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y()}], {name:'U16'});
	var V16 = brd16.create('point', [function(){return O16.X() + a16 * u16.X() - b16 * v16.X() - d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * v16.X() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X()},function(){return O16.Y() + a16 * u16.Y() - b16 * v16.Y() - d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * v16.Y() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y()}], {name:'V16'});
	var W16 = brd16.create('point', [function(){return O16.X() - a16 * u16.X() - b16 * v16.X() - d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * v16.X() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X()},function(){return O16.Y() - a16 * u16.Y() - b16 * v16.Y() - d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * v16.Y() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y()}], {name:'W16'});
	brd16.create('polygon', [N16,V16,W16,M16], {opacity:function(){return vzorec16.Value()==1||vzorec16.Value()==5||vzorec16.Value()==6||vzorec16.Value()==10||vzorec16.Value()==11?0.25:0;}});
	brd16.create('segment', [N16,V16], {opacity:function(){return vzorec16.Value()==1||vzorec16.Value()==5||vzorec16.Value()==6||vzorec16.Value()==10||vzorec16.Value()==11?1:0}});
	brd16.create('segment', [V16,W16], {opacity:function(){return vzorec16.Value()==1||vzorec16.Value()==5||vzorec16.Value()==6||vzorec16.Value()==10||vzorec16.Value()==11?1:0}});
	brd16.create('segment', [W16,M16], {opacity:function(){return vzorec16.Value()==1||vzorec16.Value()==5||vzorec16.Value()==6||vzorec16.Value()==10||vzorec16.Value()==11?1:0}});
	brd16.create('segment', [M16,N16], {});
	brd16.create('polygon', [K16,T16,U16,L16], {opacity:function(){return vzorec16.Value()<7?0.25:0;}});
	brd16.create('segment', [K16,T16], {opacity:function(){return vzorec16.Value()<7?1:0}});
	brd16.create('segment', [T16,U16], {opacity:function(){return vzorec16.Value()<7?1:0}});
	brd16.create('segment', [U16,L16], {opacity:function(){return vzorec16.Value()!=7&&vzorec16.Value()!=8&&vzorec16.Value()!=9&&vzorec16.Value()!=10&&vzorec16.Value()!=11?1:0}});
	brd16.create('segment', [L16,K16], {opacity:function(){return vzorec16.Value()==5?1:0}});
	var A16 = brd16.create('point', [function(){return O16.X() + a16 * u16.X() + b16 * v16.X() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.X() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X() + 2 * a16 * Math.cos(2 * (kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.X() + b16 * Math.sin(2 * (kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X()},function(){return O16.Y() + a16 * u16.Y() + b16 * v16.Y() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.Y() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y() + 2 * a16 * Math.cos(2 * (kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.Y() + b16 * Math.sin(2 * (kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y()}], {name:'A16'});
	var B16 = brd16.create('point', [function(){return O16.X() + a16 * u16.X() - b16 * v16.X() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.X() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X() + 2 * a16 * Math.cos(2 * (kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.X() + b16 * Math.sin(2 * (kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.X()},function(){return O16.Y() + a16 * u16.Y() - b16 * v16.Y() + d16 * Math.cos((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.Y() + d16 * Math.sin((kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y() + 2 * a16 * Math.cos(2 * (kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * u16.Y() + b16 * Math.sin(2 * (kot16.Value() < 0 ? 0 : kot16.Value())*Math.PI/180) * w16.Y()}], {name:'B16'});
	brd16.create('polygon', [B16,Q16,P16,A16], {opacity:function(){return vzorec16.Value()<9&&vzorec16.Value()!=7?0.25:0;}});
	brd16.create('segment', [B16,Q16], {opacity:function(){return vzorec16.Value()!=7&&vzorec16.Value()!=9&&vzorec16.Value()!=10&&vzorec16.Value()!=11?1:0}});
	brd16.create('segment', [Q16,P16], {});
	brd16.create('segment', [P16,A16], {opacity:function(){return vzorec16.Value()!=7&&vzorec16.Value()!=9&&vzorec16.Value()!=10&&vzorec16.Value()!=11?1:0}});
	brd16.create('segment', [A16,B16], {opacity:function(){return vzorec16.Value()!=7&&vzorec16.Value()!=9&&vzorec16.Value()!=10&&vzorec16.Value()!=11?1:0}});
	brd16.options.text.anchory = 'top';
	brd16.options.text.fontsize = 16;
	var ploscina16 = brd16.create('slider', [[0.5,-4],[9.5,-4],[0,0,8]], {withlabel:false});
		ploscina16.setDisplayRendNode(false);
		ploscina16.highline.setDisplayRendNode(false);
		ploscina16.baseline.setDisplayRendNode(false);
	brd16.create('text', [function(){return V16.X() + 1.3},function(){return V16.Y()-0.3}, function(){return 'a'}], {opacity:function(){return ploscina16.Value() > 0 ? 1 : 0}});
	brd16.create('text', [function(){return W16.X() + 0.3},function(){return W16.Y()+1.375}, function(){return 'a'}], {opacity:function(){return ploscina16.Value() > 0 ? 1 : 0}});
	brd16.create('text', [function(){return V16.X() + 1.2},function(){return V16.Y() + 1.75}, function(){return 'a^2'}], {opacity:function(){return ploscina16.Value() > 1 ? 1 : 0}});
	brd16.create('text', [function(){return N16.X() + 1.2},function(){return N16.Y() + 1.75}, function(){return 'a^2'}], {opacity:function(){return ploscina16.Value() > 2 ? 1 : 0}});
	brd16.create('text', [function(){return M16.X() + 1.2},function(){return M16.Y() + 1.75}, function(){return 'a^2'}], {opacity:function(){return ploscina16.Value() > 3 ? 1 : 0}});
	brd16.create('text', [function(){return Q16.X() + 1.2},function(){return Q16.Y() + 1.75}, function(){return 'a^2'}], {opacity:function(){return ploscina16.Value() > 4 ? 1 : 0}});
	brd16.create('text', [function(){return B16.X() + 1.2},function(){return B16.Y() + 1.75}, function(){return 'a^2'}], {opacity:function(){return ploscina16.Value() > 5 ? 1 : 0}});
	brd16.create('text', [function(){return K16.X() + 1.2},function(){return K16.Y() + 1.75}, function(){return 'a^2'}], {opacity:function(){return ploscina16.Value() > 6 ? 1 : 0}});
	brd16.create('text', [function(){return L16.X() + 1.2},function(){return L16.Y() + 1.75}, function(){return 'P=?'}], {opacity:function(){return ploscina16.Value() > 7 ? 1 : 0}});
	kot16.on('drag', function(){
		if(kot16.Value() > -60){
			ploscina16.setDisplayRendNode(false);
			ploscina16.highline.setDisplayRendNode(false);
			ploscina16.baseline.setDisplayRendNode(false);
			ploscina16.moveTo([-9.5,-4]);
		} else {
			ploscina16.showElement();
			ploscina16.highline.showElement();
			ploscina16.baseline.showElement();
			ploscina16.moveTo([-9.75,-4]);
		}
	});
</script>
