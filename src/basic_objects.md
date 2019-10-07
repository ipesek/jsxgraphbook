<script type="text/javascript" src="files/jsxgraphcore.js"></script>
# Using basic objects
{lang=EN}
Points are one of the most basic objects in JSXGraph. In this example we will draw a point on a drawing board. 
{/lang}

{lang=SI}
Points are one of the most basic objects in JSXGraph. In this example we will draw a point on a drawing board. 
{/lang}

{lang=CZ}
Points are one of the most basic objects in JSXGraph. In this example we will draw a point on a drawing board. 
{/lang}
```JS
var p = board.create('point',[-3,1]);
```

<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 var p = board.create('point',[-2,1]);
</script>
