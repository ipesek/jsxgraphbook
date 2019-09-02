<script type="text/javascript" src="files/jsxgraphcore.js"></script>
# Using basic objects

Points are one of the most basic objects in JSXGraph. In this example we will draw a point on a drawing board. 

```JS
var p = board.create('point',[-3,1]);
```

<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 var p = board.create('point',[-2,1]);
</script>
