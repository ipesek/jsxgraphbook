{lang=EN}
## Moving objects

Sometimes we want to move points to explain or present some concept. We can use this to animate the point by moving to 
final point (using method moveTo()) or only visiting some point and returning back to the start.
We will use both methods in next example.
{/lang}
{lang=SI}
## Moving objects
{/lang}
{lang=CZ}
## Moving objects
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 4, 4, -4],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-1,0],{name:"A"});
 var q = board.create('point',[3,2],{name:"B"});
 var button1 = board.create('button',[2,3,'Start B', function(){q.visit([3,-2],1800,2)}]);
 var button2 = board.create('button',[-3,3,'Move A', function(){p.moveTo([Math.random()*8-4,Math.random()*8-4],500);}]);
</script>
```

<div id="jxgbox" class="jxgbox" style="width:300px; height:300px; margin:auto"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 4, 4, -4],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-1,0],{name:"A"});
 var q = board.create('point',[3,2],{name:"B"});
 var button1 = board.create('button',[2,3,'Start B', function(){q.visit([3,-2],1800,2)}]);
 var button2 = board.create('button',[-3,3,'Move A', function(){p.moveTo([Math.random()*8-4,Math.random()*8-4],500);}]);
</script>

First three lines are usual, but in the next line `var button1 = board.create('button',[2,3,'Start B', function(){q.visit([3,-2],1800,2)}]);` we use 
two new commands. 

Let us focus first on the second command: `q.visit([3, -2], 1800, 2)`. Until now we always 
used only one method _create()_ which we provided with parameters to create points, etc. on the board. Now we introduce 
a new method for the point which is called [_visit()_](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.CoordsElement.html#visit).
Its syntax is __visit(where, time, options)__ with three parameters,
 * _where_ coordinates of our destination e.g. `[3, -2]`,
 * _time_ how long should it take e.g. `1800`,
 * _options_ in our case how many repetitions of our visit e.g `2`. 
 
 First command creates a button on a board which click on it triggers some action. The parameters in the list are as follows
 __[x-coordinate, y-coordinate, title on the button, action]__. In our case the action was anonymous function with the 
 _visit_ method on point _q_.
 
 The second button is created in next line, but let us now look at the action more closely which is `p.moveTo([Math.random()*8-4,Math.random()*8-4],500);`.
 Here we use on the point _q_ new method _moveTo_ which takes only two parameters
* destination coordinates as a list of two elements e.g  `[Math.random()*8-4,Math.random()*8-4]`
* animation time in miliseconds, e.g `500`.

For the coordinates we use _Math.random_ method, which every time we click on the button creates new random number between 0 and 1 
which we multiply by $8$ and subtract by $4$, result then will be between $-4$ and $4$m which are also limits of our bounding box.
We do the same for both coordinates. As a result our point p (`"A"`) moves across the board randomly. 


 
