{lang=EN}
## Creating points
Points are one of the most basic objects in JSXGraph. We always create objects on the JSX board, therefore we must use same 
board variable for the construction of all objects that will be on board.
{/lang}

{lang=SI}
## Risanje točk
{/lang}

{lang=CZ}
# Creating points
Points are one of the most basic objects in JSXGraph. In this example we will draw two points on a drawing board. 
{/lang}
```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 board.create('point',[-2,1]);
 var q = board.create('point',[3,0]);
</script>
```
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 board.create('point',[-3,1]);
 var q = board.create('point',[3,0]);
</script>

{lang=EN}
Let us now observe `board.create('point',[-2,1]);`. Here we use variable board and call a method *create* which takes 
two arguments. First argument is the type of the object and second the coordinates where this object should be. If we
define coordinates outside of the bounding box, the object will exist but won't be visible because it is outside visible 
area of our drawing board. 

Next line `var q = board.create('point',[3,0]);` is very similar to the previous line, with only one diference. We start 
the line with `var q = ` which we use to store this object in variable *q*. This is good and necessary practice, because 
in the constructions we often reference different object and define their relationships, which will be more apparent in following pages.


{/lang}
