{lang=EN}
##Circles

In JSXGraph we don't have only points and lines. In this section we will learn about circles. They can be constructed 
with different [methods](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.Circle.html#method), here we will present how to
 create with two points and a point and a radius. 
Let us now look at the example.
{/lang}
{lang=SI}##Circles{/lang}{lang=CZ}##Circles{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true});

 var p = board.create('point',[-1,-1],{name:"A"});
 var q = board.create('point',[0,0],{name:"B"});

 var circle1 = board.create("circle",[p,q],{strokeColor:"red", strokeWidth:4});
 var circle2 = board.create("circle",["B",1.8],{method:"pointRadius", fillColor:"gray", 
     fillOpacity:0.2});
</script>
```


<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true});
 var p = board.create('point',[-1,-1],{name:"A"});
 var q = board.create('point',[0,0],{name:"B"});
 var circle1 = board.create("circle",[p,q],{strokeColor:"red", strokeWidth:4});
 var circle2 = board.create("circle",["B",1.8],{method:"pointRadius", fillColor:"gray", fillOpacity:0.2});
</script>

First what we notice is, that when we initialized the board with a new argument `keepAspectRatio:true` which we use
to tell JSXGraph that we want that html object and drawing board keep the aspect ratio between $x$ and $y$ axis. Setting this to
true is necessary if circles should look like circles and not like ellipses. 

After creating both points we create two circles. _Circle1_ is created with `var circle1 = board.create("circle",[p,q],{strokecolor:"red", strokeWidth:4});`.
We can see, that here we created circle with two points which is default method for creating the circles. We used 
two additional attributes which we used to set the color and width of the stroke. Color here was not defined with 
RGB system, but with the color name (REF needed). 

_Circle2_ is more interesting `var circle2 = board.create("circle",["B",1.5],{method:"pointRadius", fillcolor:"gray", fillopacity:0.2});`
since we created it with the point and radius method. We explicitly set this as a attribute.
Also instead of using variable name for the point, we used name of the point `"B"`, which can be very useful when having 
many objects in the construction (and generating objects dynamically). We also used two attributes for filling the area of circle,
namely _fillColor_ which defines the color of the fill and _fillOpacity_ sets the opacity of the area (ranging from $0$ to $1$, where $1$ means solid color with no opacity).


{lang=EN}

{/lang}




