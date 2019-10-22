{lang=EN}
## Creating lines
Lines are the next type of the objects that we will learn. Line is defined by two points through which line is drawn.
Here is an example of a board with two lines.
{/lang}
{lang=SI}
Creating basic objects
{/lang}
{lang=CZ}Using basic objects{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 var line1 = board.create("line",[[-3,1],[3,-1]]);

 var p = board.create('point',[-2,-1]);
 var q = board.create('point',[3,1]);
 var line2 = board.create("line",[p,q]);
</script>
```

Result:

<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 var line1 = board.create("line",[[-3,1],[3,-1]]);
 var p = board.create('point',[-2,-1]);
 var q = board.create('point',[3,1]);
 var line2 = board.create("line",[p,q]);
</script>

{lang=EN}
Line of code `var line1 = board.create("line",[[-3,1],[3,-1]]);` creates $line1$ through two points `[-3,1]` and `[3,-1]`. 
For each point again we had to define $x$ and $y$ coordinate. Because for the line we need to provide a list of two points, 
we enclose both points in square brackets, therefore the list of two points is `[[-3,1],[3,-1]]`.

For the second $line2$ we first defined two points $p$ and $q$ and used them as `[p,q] when defining the $line2$. Here we already
see why ìt is useful to store objects in variables, because now we could define third line, that could also go though point $p$ or $q$ 
and we don't need to worry if coordinates are correct.

_Note: In Javascript lists are written in square brackets **[ ]**._ 
{/lang}