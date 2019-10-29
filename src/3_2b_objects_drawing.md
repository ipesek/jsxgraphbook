{lang=EN}
## Adding attributes to the objects
Objects in JSXGraph have attributes, which describes them. Some of them are common (like color, name, etc.) and some are 
more specific. Points have properties for e.g. shape, where line has other attribute e.g. if (attribute straightLast) and 
how line ends at the second point (more [here](https://jsxgraph.uni-bayreuth.de/docs/symbols/Line.html)). 
We can always look at the [JSXGraph API documentation](https://jsxgraph.uni-bayreuth.de/docs/index.html), which describes 
all the objects and their attributes. 

Let us look now at the example. 
```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});

 var p = board.create('point',[-2,-1],{name:"first", size:5, color:"FF0000"});
 var q = board.create('point',[3,1],{name:"last",fixed:true, face:"[]"});

 var line2 = board.create("line",[p,q],{straightLast:false, dash:"4" });
</script>
```

Result:
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 var p = board.create('point',[-2,-1],{name:"first", size:5, color:"FF0000"});
 var q = board.create('point',[3,1],{name:"last",fixed:true, face:"[]"});
 var line2 = board.create("line",[p,q],{straightLast:false, dash:"4" });
</script>
{/lang}

In this example we added some attributes to the both points and to the line. 
In all three examples we defined attributes as a list written between `{ }`. For each attribute we must write its name
and a value. As we mentioned earlier, objects can have specific attributes and also more general borrowed (inherited) 
from other objects.  

In `var p = board.create('point',[-2,-1],{name:"first", size:5, color:"FF0000"});` first attribute is _name_ which is borrowed 
from [GeometryElement](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.GeometryElement.html#name), attribute _color_ is also 
borowed, where attribute [_size_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Point.html#size) is not borrowed but belongs to object Point.
We can read from the documentation: _Size of a point, either in pixel or user coordinates. Means radius resp. half the 
width of a point (depending on the face)._
 
Second point has some interesting attributes `var q = board.create('point',[3,1],{name:"last",fixed:true, face:"[]"});`
First is the attribute _fixed_ which defines whether objects can be moved (dragged) on the board. *Default* value for this
attribute is false, which means we can move all objects on the board if they are not explicitly fixed. Now we first mentioned
*default value*, which is used when do not explicitly set another value for some attribute. In the documentation for each 
attribute default value is also presented. The second new attribute is [_face_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Point.html#face)
where we used one of the possible shapes of a point. 
 
When we defined `var line2 = board.create("line",[p,q],{straightLast:false, dash:"4" });`, we used two attributes,
first defining how line will end at second point (_straightLast_) and second defining how the line will be drawn (_dash_).
Again, _dash_  can have different values, [documentation for dash attribute](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.GeometryElement.html#dash) 
tells us which are possible values.

All objects have attributes, also Board object has [them](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.Board.html). 
One of the attributes is _boundingbox_, which we used from first example, but didn't talk about it until now. 
E.g. if you don't like the navigation (bottom right), then you can add attribute _showNavigation_ and set it to false. Try it!

_*We can see that we can use attributes to fine tune on how our construction will behave and look.*_

__Documentation is a great resource for discovering attributes and also has some
examples of their usage.__

{lang=SI}Adding properties to the objects{/lang}
{lang=CZ}Adding properties to the objects{/lang}
