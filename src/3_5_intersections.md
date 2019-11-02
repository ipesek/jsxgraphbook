{lang=EN}
## Intersections

Sometimes we want to distinguish some intersections of our objects ( lines and circles). Usually we have to compute the
intersections, but JSXGraph has very convenient objects [_Intersection_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Intersection.html) 
which we can use, to do just that. In order to create an intersection, we need to use two lines, two circles or mix of them.
We cannot use other objects to create this object.
{lang=SI}
## Intersections
{/lang}
{lang=CZ}
## Intersections
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B", visible:false});
 var r = board.create('point',[0,0],{name:"C"});
 var circle1 = board.create('circle', [p,q]);
 var circle2 = board.create('circle', [r,p]);
 var inter1 = board.create('intersection',[circle1,circle2,0],{name:'I_1'});
 var inter2 = board.create('intersection',[circle1,circle2,1],{name:'I_2'});
 var line = board.create('line',[inter1,inter2]);
</script>
```

<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B", visible:false});
 var r = board.create('point',[0,0],{name:"C"});
 var circle1 = board.create('circle', [p,q]);
 var circle2 = board.create('circle', [r,p]);
 var inter1 = board.create('intersection',[circle1,circle2,0],{name:'I_1'});
 var inter2 = board.create('intersection',[circle1,circle2,1],{name:'I_2'});
 var line = board.create('line',[inter1,inter2]);
</script>

{lang=EN}
After we created points and two circles, we created two objects - _intersections_. 

In `var inter1 = board.create('intersection',[circle1,circle2,0],{name:'I_1'});` we used a third argument `0` which we use
in the case if there are two intersecting points and we decide which intersection we will use (with $0$ and $1$). 
Notice that in `{name:'I_2'})` we used underscore in the name. 
This is [$LATEX$](https://www.mathjax.org/) notation and can be used for the labels to typeset beautiful math. 

As last we created new line `var line = board.create('line',[inter1,inter2]);`
with the intersection objects. We can therefore use newly created objects as regular points in our constructions.
{/lang}
{lang=SI}

{/lang}
{lang=CZ}

{/lang}
