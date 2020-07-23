{lang=EN}
## Example: Regular polygons

**A Hexagon-Triangle Hinge.** In the diagram below, *Q* is the center of a regular hexagon with a vertex *B* at which it touches
 an equilateral triangle with center *R*. Let *P* be the midpoint of *AB*. Show that *RPQ* is a right angle.
 
 (Source: *Konhauser, J. D. E., Velleman, D., Wagon, S. Which Way Did the Bicycle Go? … and Other Intriguing Mathematical Mysteries. 
 The Mathematical association of America, Dolciani Mathematical Expositions – No. 18. 1996.*)
{/lang}

{lang=CZ}
## Příklad: Pravidelné mnohoúhelníky

**Pravidelný šestiúhelník a rovnostranný trojúhelník se společným vrcholem.** In the diagram below, *Q* is the center of a regular hexagon with a vertex *B* at which it touches
 an equilateral triangle with center *R*. Let *P* be the midpoint of *AB*. Show that *RPQ* is a right angle.
 
 (Source: *Konhauser, J. D. E., Velleman, D., Wagon, S. Which Way Did the Bicycle Go? … and Other Intriguing Mathematical Mysteries. 
 The Mathematical association of America, Dolciani Mathematical Expositions – No. 18. 1996.*)
{/lang}

{lang=SI}
## Example: Regular polygons

**A Hexagon-Triangle Hinge.** In the diagram below, *Q* is the center of a regular hexagon with a vertex *B* at which it touches
 an equilateral triangle with center *R*. Let *P* be the midpoint of *AB*. Show that *RPQ* is a right angle.
 
 (Source: *Konhauser, J. D. E., Velleman, D., Wagon, S. Which Way Did the Bicycle Go? … and Other Intriguing Mathematical Mysteries. 
 The Mathematical association of America, Dolciani Mathematical Expositions – No. 18. 1996.*)
{/lang}



<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
        board.options.label.autoPosition = true;
        board.options.point.size = 1;
	var A = board.create('point', [-1.2, -2], {color: 'orange', size: 4});
	var B = board.create('point', [0.25, -0.5], {color: 'orange', size: 4});
	var hexagon = board.create('regularpolygon', [A,B, 6]);
	var D = hexagon.vertices[3];
    var Q = board.create('circumcenter', [A, B, D], {name: 'Q'});
    var G = board.create('point', [3, -2], {name:'G', color: 'orange', size: 4});
    var rtr = board.create('regularpolygon', [B, G, 3]);
    var H = rtr.vertices[2];
    var R = board.create('circumcenter', [B, G, H], {name: 'R'});
    var tr = board.create('polygon', [A, G, B], {color: 'pink'});
    var P = board.create('midpoint', [A, G], {name: 'P'});
    var q = board.create('line', [P, Q], {name: 'q', withLabel: true});
    var r = board.create('line', [P, R], {name: 'r', withLabel: true});
    var angle = board.create('angle', [R, P, Q], {radius:0.4, color:'red', fillOpacity: 0, name:'&varphi;'});
    var text = board.create('text', [-3, -2.5,
                function () {return '&varphi; = ' + (angle.Value() * 180 / Math.PI).toFixed(2) + '&deg;';}
                    ]);
</script>
{lang=EN}
The solution to the example, i.e. proving the given statement, is left to the reader. 
Here we will deal only with the programming of the illustrative dynamic figure. 
{/lang}

{lang=CZ}
The solution to the example, i.e. proving the given statement, is left to the reader. 
Here we will deal only with the programming of the illustrative dynamic figure. 
{/lang}

{lang=SI}
The solution to the example, i.e. proving the given statement, is left to the reader. 
Here we will deal only with the programming of the illustrative dynamic figure. 
{/lang}


{lang=EN}
*Programming:*

First, we define the Bounding box as follows:
{/lang}

{lang=CZ}
*Programování:*

First, we define the Bounding box as follows:
{/lang}

{lang=SI}
*Programming:*

First, we define the Bounding box as follows:
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
</script>
```

{lang=EN}
There will be eleven points in the diagram, namely vertices of polygons, their centers and a midpoint. 
To set their appearance we use two general options, as follows. First, to get the best possible positions 
of their labels, with as few overlaps with image lines as possible, we use the autoPosition = true option (it works in v1.1+):
{/lang}


{lang=CZ}
There will be eleven points in the diagram, namely vertices of polygons, their centers and a midpoint. 
To set their appearance we use two general options, as follows. First, to get the best possible positions 
of their labels, with as few overlaps with image lines as possible, we use the autoPosition = true option (it works in v1.1+):
{/lang}


{lang=SI}
There will be eleven points in the diagram, namely vertices of polygons, their centers and a midpoint. 
To set their appearance we use two general options, as follows. First, to get the best possible positions 
of their labels, with as few overlaps with image lines as possible, we use the autoPosition = true option (it works in v1.1+):
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
</script>
```

{lang=EN}
Then, we set the basic point size to 1:
{/lang}

{lang=CZ}
Then, we set the basic point size to 1:
{/lang}

{lang=SI}
Then, we set the basic point size to 1:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
</script>
```
{lang=EN}
*Note:* In this way we can also set other common attributes of objects in the board, 
for example the appearance of points using the command `board.options.point.face = '[]';` etc.
{/lang}

{lang=CZ}
*Note:* In this way we can also set other common attributes of objects in the board, 
for example the appearance of points using the command `board.options.point.face = '[]';` etc.
{/lang}

{lang=SI}
*Note:* In this way we can also set other common attributes of objects in the board, 
for example the appearance of points using the command `board.options.point.face = '[]';` etc.
{/lang}


{lang=EN}
To obtain the regular hexagon we first construct points *A* and *B*, its future two adjacent vertices, 
and then color them orange to highlight them as movers:  
{/lang}

{lang=CZ}
To obtain the regular hexagon we first construct points *A* and *B*, its future two adjacent vertices, 
and then color them orange to highlight them as movers: 
{/lang}

{lang=SI}
To obtain the regular hexagon we first construct points *A* and *B*, its future two adjacent vertices, 
and then color them orange to highlight them as movers: 
{/lang}





```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
</script>
```

{lang=EN}
Then, using these points as the input parameters to the [regularpolygon](https://jsxgraph.org/docs/symbols/RegularPolygon.html) object, 
we create the desired hexagon:  
{/lang}

{lang=CZ}
Then, using these points as the input parameters to the [regularpolygon](https://jsxgraph.org/docs/symbols/RegularPolygon.html) object, 
we create the desired hexagon:
{/lang}

{lang=SI}
Then, using these points as the input parameters to the [regularpolygon](https://jsxgraph.org/docs/symbols/RegularPolygon.html) object, 
we create the desired hexagon:
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
</script>
```

{lang=EN}
The center of the regular polygon is the center of its circumcircle, therefore we have to identify at least three vertices of the hexagon to determine its center. 
We chose *D*, the fourth vertex from *A* (index number is 3 because the software starts to count from 0)   
{/lang}

{lang=CZ}
The center of the regular polygon is the center of its circumcircle, therefore we have to identify at least three vertices of the hexagon to determine its center. 
We chose *D*, the fourth vertex from *A* (index number is 3 because the software starts to count from 0)  
{/lang}

{lang=SI}
The center of the regular polygon is the center of its circumcircle, therefore we have to identify at least three vertices of the hexagon to determine its center. 
We chose *D*, the fourth vertex from *A* (index number is 3 because the software starts to count from 0)  
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
</script>
```

{lang=EN}
to determine the center *Q* of the regular hexagon as the center of the circumcircle to the triangle *ABD*:  
{/lang}

{lang=CZ}
to determine the center *Q* of the regular hexagon as the center of the circumcircle to the triangle *ABD*:   
{/lang}

{lang=SI}
to determine the center *Q* of the regular hexagon as the center of the circumcircle to the triangle *ABD*: 
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
var Q = board.create('circumcenter',  [A, B, D], {name:'Q'});
</script>
```

{lang=EN}
In an analogous way, we then create an equilateral triangle *BGH* with center *N*:  
{/lang}

{lang=CZ}
In an analogous way, we then create an equilateral triangle *BGH* with center *N*:  
{/lang}

{lang=SI}
In an analogous way, we then create an equilateral triangle *BGH* with center *N*:  
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
var Q = board.create('circumcenter',  [A, B, D], {name:'Q'});
var G = board.create('point', [3,-2],  {name: 'G', color: 'orange' , size: 4 });
var rtr = board.create('regularpolygon',  [B, G, 3]);
var R = board.create('circumcenter',  [B, G, H], {name: 'R'});
</script>
```

{lang=EN}
Then, we add the triangle *AGB*, the midpoint *P* of its side *AB* and the lines *PQ* and *PR*, 
which we have to prove are always perpendicular:  
{/lang}

{lang=CZ}
Then, we add the triangle *AGB*, the midpoint *P* of its side *AB* and the lines *PQ* and *PR*, 
which we have to prove are always perpendicular: 
{/lang}

{lang=SI}
Then, we add the triangle *AGB*, the midpoint *P* of its side *AB* and the lines *PQ* and *PR*, 
which we have to prove are always perpendicular:  
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
var Q = board.create('circumcenter',  [A, B, D], {name:'Q'});
var G = board.create('point', [3,-2],  {name: 'G', color: 'orange' , size: 4 });
var rtr = board.create('regularpolygon',  [B, G, 3]);
var R = board.create('circumcenter',  [B, G, H], {name: 'R'});
var tr = board.create('polygon',  [A, G, B], {color: 'pink'});
var P = board.create('midpoint', [A, G], {name: 'P'});
var H = rtr.vertices[2];
var q = board.create('line', [P, Q], {name: 'q', withLabel: true});
var r = board.create('line', [P, R], {name: 'r', withLabel: true});
</script>
```

{lang=EN}
Finally, we can identify the angle *RPQ*, the rightness of which we have to prove. 
JSXGraph recognizes it as a right angle, so it marks it accordingly, as can be seen in figure above:  
{/lang}

{lang=CZ}
Finally, we can identify the angle *RPQ*, the rightness of which we have to prove. 
JSXGraph recognizes it as a right angle, so it marks it accordingly, as can be seen in figure above:  
{/lang}

{lang=SI}
Finally, we can identify the angle *RPQ*, the rightness of which we have to prove. 
JSXGraph recognizes it as a right angle, so it marks it accordingly, as can be seen in figure above:   
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
var Q = board.create('circumcenter',  [A, B, D], {name:'Q'});
var G = board.create('point', [3,-2],  {name: 'G', color: 'orange' , size: 4 });
var rtr = board.create('regularpolygon',  [B, G, 3]);
var R = board.create('circumcenter',  [B, G, H], {name: 'R'});
var tr = board.create('polygon',  [A, G, B], {color: 'pink'});
var P = board.create('midpoint', [A, G], {name: 'P'});
var H = rtr.vertices[2];
var q = board.create('line', [P, Q], {name: 'q', withLabel: true});
var r = board.create('line', [P, R], {name: 'r', withLabel: true});
var angle = board.create('angle', [R, P, Q], {radius: 0.4, color: 'red', fillOpacity: 0 , name:'&varphi;' });
</script>
```

{lang=EN}
If this symbolic expression of the right angle is not enough for us, 
we can enter the code to display the size of the respective angle: 
{/lang}

{lang=CZ}
If this symbolic expression of the right angle is not enough for us, 
we can enter the code to display the size of the respective angle:  
{/lang}

{lang=SI}
If this symbolic expression of the right angle is not enough for us, 
we can enter the code to display the size of the respective angle:  
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
var Q = board.create('circumcenter',  [A, B, D], {name:'Q'});
var G = board.create('point', [3,-2],  {name: 'G', color: 'orange' , size: 4 });
var rtr = board.create('regularpolygon',  [B, G, 3]);
var R = board.create('circumcenter',  [B, G, H], {name: 'R'});
var tr = board.create('polygon',  [A, G, B], {color: 'pink'});
var P = board.create('midpoint', [A, G], {name: 'P'});
var H = rtr.vertices[2];
var q = board.create('line', [P, Q], {name: 'q', withLabel: true});
var r = board.create('line', [P, R], {name: 'r', withLabel: true});
var angle = board.create('angle', [R, P, Q], {radius: 0.4, color: 'red', fillOpacity: 0 , name:'&varphi;' });
			board.create('text', [-3, -3, 
				function () {return '&theta;_1 = ' + (arc2.Value() * 180 /Math.PI).toFixed(1) + '&deg;';}
				]); 
</script>
```

{lang=EN}
The task solution code is now complete.
{/lang}

{lang=CZ}
The task solution code is now complete.
{/lang}

{lang=SI}
The task solution code is now complete.
{/lang}