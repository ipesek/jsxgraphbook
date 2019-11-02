{lang=EN}
## Angles

When we need to emphasise some angle in our construction, we can do this with object [_Angle_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Angle.html). 
As an input we need to provide three points $p1, p2, p3$ and the angle is drawn counterclockwise from $p1$ to $p3$ around $p2$. 
Other combinations include two lines and a two direction (by +/- 1) or line and two coordinates.
{/lang}
{lang=SI}
## Angles
{/lang}
{lang=CZ}
## Angles
{/lang}
```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[1,1.5],{name:"B"});
 var r = board.create('point',[1,-1],{name:"C"});
 var line1 = board.create('line',[p,q]);
 var line2 = board.create('line',[p,r]);
 var angle1 = board.create('angle',["C", "A", "B"], {radius:2});
 var angle2 = board.create('angle',[line2,line1,-1,-1], {radius:1,color:'green'});
 var angle3 = board.create('angle',[line2,line1,1,1], {radius:1,color:'blue'});
</script>
```


<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-2,0],{name:"A", fixed:true});
 var q = board.create('point',[1,1.5],{name:"B"});
 var r = board.create('point',[1,-1],{name:"C"});
 var line1 = board.create('line',[p,q]);
 var line2 = board.create('line',[p,r]);
 var angle1 = board.create('angle',["C", "A", "B"], {radius:2});
 var angle2 = board.create('angle',[line2,line1,-1,-1], {radius:1,color:'green'});
 var angle3 = board.create('angle',[line2,line1,1,1], {radius:1,color:'blue'});
</script>
{lang=EN}

In this example we first created three points and then through them created two lines with common/intersection point $A$. 

Then we created first angle with `var angle = board.create('angle',[r, p, q], {radius:2});` using three points. Remember, 
when defining angle with three points we have to provide them in counterclockwise order, where the angle is centered by the second point. Additionaly, we set an attribute
_radius_ to $2$, which tells JSXGraph how big the arc of an angle should be. 

Then the second angle $\beta$ was created using two lines and two directions (+/- 1) with following line
`var angle2 = board.create('angle',[line2,line1,-1,-1], {radius:1,color:'green'});`. This line presents another possible 
method to input the parameters of an angle. We can combine them differently to get different angles at the intersection point $A$.

Last angle is only a variation of `angle2` which different directions and as a result we can see that `angle1` and `angle3` 
describe the same angle but with different input parameters.
{/lang}
{lang=SI}

{/lang}
{lang=CZ}

{/lang}
