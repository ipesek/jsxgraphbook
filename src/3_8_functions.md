{lang=EN}
## Drawing mathematical functions

In the constructions we often need to draw mathematical functions, e.g. sine or cosine, polynomals or other known functions.
JSXGraph provide convenient method to draw such functions. Lets look at the example.
{/lang}
{lang=SI}
## Functions drawing
{/lang}
{lang=CZ}
## Functions drawing
{/lang}
```JS
<div id="jxgbox" class="jxgbox" style="width:300px; height:300px; margin:auto"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 4, 4, -4], axis:true,  showCopyright:false, showNavigation:false });
 var graph1 = board.create('functiongraph', [function(x){return Math.sin(x);}, -Math.PI, Math.PI],{name:'sin(x)', withLabel:true});
 var graph2 = board.create('functiongraph', [function(x){return x*x-2;}, -3, 3],{name:'x^2 - 2', withLabel:true, strokeColor:'red'});
</script>
``` 

<div id="jxgbox" class="jxgbox" style="width:300px; height:300px; margin:auto"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 4, 4, -4], axis:true,  showCopyright:false, showNavigation:false });
 var graph1 = board.create('functiongraph', [function(x){return Math.sin(x);},-Math.PI,Math.PI],{name:'sin(x)', withLabel:true});
 var graph2 = board.create('functiongraph', [function(x){return x*x-2;},-3,3],{name:'x^2 - 2', withLabel:true, strokeColor:'red'});
</script>

{lang=EN}
In this example we first changed properties of `div` and set the width and heigth to form a square area, because we wanted 
nicer looking construction (other posibility would be to use attribute _keepAspectRatio_ in initBoard()). Then we created
two functions. 

To draw a $\sin (x)$ function we used _functiongraph_ as a type 
`var graph1 = board.create('functiongraph', `.  
But what follows is something new.
Let us look closely to `[function(x){return Math.sin(x);},-Math.PI,Math.PI]`. With type _functiongraph_ we told JSXGraph that
we will be drawing a function on some interval, therefore we need to provide the function we want to draw. 
`function(x){return Math.sin(x);}` does just that. Here we use anonymous function `function(x)` where we provide parameter `x`,
that is used by JSXgraph to provide `x` values from the interval we have set with second and third element of the list. In our 
case this is `-Math.PI, Math.PI`. Now we have to define a function that will return a value ($y-coordinate$) for the given $x$.
This was done by `{return Math.sin(x);}`. We have to use reserved word `return` which is followed by a function, in our case
`Math.sin(x)`. We end this with `;}` which must use to end the statement and the function.

In the second _graph2_ we have drawn a quadratic function `{return x*x-2;}` on the interval `-3, 3`. We also used some attributes
which we already explained on previous pages.

Note: For the _sine_ function we used [Javascript Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) library. 
{/lang}

