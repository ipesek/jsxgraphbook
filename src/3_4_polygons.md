{lang=EN}
## Polygons

Polygons are very useful objects which can be used to construct a closed area with arbitrary many points (minimum is three). 
Polygons can be convex or concave, depending on the input points. We can again define different [attributes](https://jsxgraph.uni-bayreuth.de/docs/symbols/Polygon.html)
to the object.

Example:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, showCopyright:false, showNavigation:false });

 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B"});
 var r = board.create('point',[1,-0.5],{name:"D"});
 var s = board.create('point',[1,1],{name:"E"});
 var t = board.create('point',[-1,1.5],{name:"F"});

 var poly1 = board.create('polygon',[p,q,r,s,t],{name:"Polygon 1",withLabel:true});

 var points = [[2,-1],[4,1],[1,1],[-1,-1]];
 var poly2 = board.create('polygon',points,{name:"Polygon 2",withLabel:true,
     hasInnerPoints:true, withLines:false, vertices:{visible:false}});
</script>
```

<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B"});
 var r = board.create('point',[1,-0.5],{name:"D"});
 var s = board.create('point',[1,1],{name:"E"});
 var t = board.create('point',[-1,1.5],{name:"F"});
 var poly1 = board.create('polygon',[p,q,r,s,t],{name:"Polygon 1",withLabel:true});
 var points = [[2,-1],[4,1],[1,1],[-1,-1]];
 var poly2 = board.create('polygon',points,{name:"Polygon 2",withLabel:true,hasInnerPoints:true, withLines:false, vertices:{visible:false}});
</script>

As we mentioned earlier we need at least three points to make a polygon. In our example we created five points which then used
to create a polygon. We used an attribute _withLabel_ which tells JSXGraph to show the name of the polygon. 

For the second polygon we created a list of points, which is another approach to create a polygon. Here we again few new 
attributes. Attribute _hasInnerPoints_ enables user to move entire polygon. For example, moving Polygon 1 is not possible,
only its points can be moved. Adding this attribute will enable moving the polygon. 
Next attribute, _withLines_ tells JSXgraph whether to draw borders of the polygon or not. The last attribute _vertices_ is
particullary interesting, because it does not have just a value, but a dictionary on the right side of `:`. The reason behind
is that we can control the vertices with more than one attribute.



{lang=SI}
## Polygons
{/lang}
{lang=CZ}
## Polygons
{/lang}
