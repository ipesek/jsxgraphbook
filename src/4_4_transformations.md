{lang=EN}
## Transformations

In JSXGraph it is possible to apply a plane projective transformation to elements using a 3x3 matrix to define the specific transformation. To make life easier
JSXGraph has some standard trasformations predefined. Some of those are:
- Translation
- Rotation
- Scaling
- Reflection

Translation moves the selected object in the given direction. Scaling increases or decreases the size of our object and rotation rotates it. We will
demonstrate some of their uses by constructing a square that can rotate around one vertex. 

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:500px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 4, 4, -4],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var s = board.create('slider', [[-2,-2],[2,-2],[0,0,2*Math.PI]],{name:'angle'});
 var A = board.create('point', [-1,0], {name:'Drag me', style:5});
 var right = board.create('transform', [2,0], {type:'translate'});
 var up = board.create('transform', [0,2], {type:'translate'});
 var B = board.create('point', [A,right], {name: 'B', style:7});
 var C = board.create('point', [A,[right,up]], {name: 'C', style:7});
 var D = board.create('point', [A,up], {name: 'D', style:7});
 var sq = board.create('polygon', [A,B,C,D]);
 var rot = board.create('transform', [function(){return s.Value();},A], {type:'rotate'});
 rot.bindTo([B,C,D]);
</script>
```
<div id="jxgbox" class="jxgbox" style="width:500px; height:500px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 4, 4, -4],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var s = board.create('slider', [[-2,-2],[2,-2],[0,0,2*Math.PI]],{name:'angle'});
 var A = board.create('point', [-1,0], {name:'Drag me', style:5});
 var right = board.create('transform', [2,0], {type:'translate'});
 var up = board.create('transform', [0,2], {type:'translate'});
 var B = board.create('point', [A,right], {name: 'B', style:7});
 var C = board.create('point', [A,[right,up]], {name: 'C', style:7});
 var D = board.create('point', [A,up], {name: 'D', style:7});
 var sq = board.create('polygon', [A,B,C,D]);
 var rot = board.create('transform', [function(){return s.Value();},A], {type:'rotate'});
 rot.bindTo([B,C,D]);
 tScale.bindTo(sq);
</script>
{/lang}

{lang=SI}Functions drawing{/lang}
{lang=CZ}Functions drawing{/lang}


