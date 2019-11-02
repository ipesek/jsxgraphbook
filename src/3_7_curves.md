{lang=EN}
## Curves

[Curves](https://jsxgraph.uni-bayreuth.de/docs/symbols/Curve.html) in JSXgraph does not mean just curves from functions 
or polynomials, but also parametric curves, polar curves or data plots. In our example we will show how to use data 
for data plotting, for other uses please check API documentation.
{/lang}
{lang=SI}
## Curves
{/lang}
{lang=CZ}
## Curves
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1, 10, 11, -2], axis:true, showCopyright:false, showNavigation:false });
 var x = [1,2,3,4,5,6,7,8,9,10];
 var y = [8.4,1,0.1,9,3.3,3.3,4.5,8,9,4];
 var curve = board.create('curve',[x,y],{curveType:'plot'});
</script>
```

<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1, 10, 11, -2], axis:true, showCopyright:false, showNavigation:false });
 var x = [1,2,3,4,5,6,7,8,9,10];
 var y = [8.4,1,0.1,9,3.3,3.3,4.5,8,9,4];
 var curve = board.create('curve',[x,y],{curveType:'plot'});
</script>

{lang=EN}
In this example we had to change the bounding box of the board in order to accommodate the data. Otherwise not all points 
will be visible.  

To draw a data plot we need first two lists of data. In our case we used two lists `x` and `y` and filled them with numbers. 
But is not the only way how to obtain the data (e.g. see this [example](https://jsxgraph.uni-bayreuth.de/wiki/index.php/Data_plot)).
As last we had to set the type of curve using attribute [_curveType_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Curve.html#curveType).
{/lang}