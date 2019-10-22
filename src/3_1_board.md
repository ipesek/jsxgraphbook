

{lang=EN}
## Drawing area
JSXGraph needs canvas as a place to put constructions on. Because we have HTML and Javascript we need an element in 
HTML which we will tell Javascript to use as canvas. First we create a place in HTML where we will our construction be. 
For this we use `div` element with some properties.
```HTML
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
```

If look at the line closely we see few properties. For us it is important `id="jxgbox"` which we use to connect with JSXGraph.
Next is `class="jxgbox"` where we can specify how our board will look like. This is more advanced topic and will be discussed later.
Last property is `style="width:500px; height:200px;" where we define size of our drawing board.  
_Important: here we do not define our coordinate system, but only the size of our canvas_

When we have defined our canvas, we have to connect them with JSXGraph. This is done with following line, which should be put inside

```JS
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
```

We can see we called function initBoard, which constructs our drawing board . This function needs at least one argument, 
which is the *id* of the element `div` we defined in our example ``jxgbox``. ``boundingbox: [-5, 2, 5, -2]`` tells
JSXGraph coordinate system of our construction.
 
Observing both lines we see, that we have two measures for size. With `div` we created canvas with the size in pixels. 
Then we declared also coordinate system with board where we defined our coordinate system, which we will use to place 
objects on the board. 
{/lang}
 
{lang=SI}
JSXGraph needs canvas as a place to put constructions on. Because we have HTML and Javascript we need an element in 
HTML which we will tell Javascript to use as canvas. This is done like this
```HTML
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
```

If look at the line closely we see few properties. For us it is important `id="jxgbox"` which we use to connect with JSXGraph.
Next is `class="jxgbox"` where we can specify how our board will look like. This is more advanced topic and will be discussed later.
Last property is `style="width:500px; height:200px;" where we define size of our drawing board.  
_Important: here we do not define our coordinate system, but only the size of our canvas_

When we have defined our canvas, we have to connect them with JSXGraph. This is done with following line, which should be put inside

```JS
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
```

We can see we called function initBoard, which constructs our drawing board . This function need at least one argument, 
which is the name of id we defined earlier for div in our example ``jxgbox``. ``boundingbox: [-5, 2, 5, -2]`` tells
 JSXGraph coordinate system of our construction.
 
 Code of whole example is then following:{/lang}
 
 {lang=CZ}
 JSXGraph needs canvas as a place to put constructions on. Because we have HTML and Javascript we need an element in 
 HTML which we will tell Javascript to use as canvas. This is done like this
 ```HTML
 <div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
 ```
 
 If look at the line closely we see few properties. For us it is important `id="jxgbox"` which we use to connect with JSXGraph.
 Next is `class="jxgbox"` where we can specify how our board will look like. This is more advanced topic and will be discussed later.
 Last property is `style="width:500px; height:200px;" where we define size of our drawing board.  
 _Important: here we do not define our coordinate system, but only the size of our canvas_
 
 When we have defined our canvas, we have to connect them with JSXGraph. This is done with following line, which should be put inside
 
 ```JS
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 ```
 
 We can see we called function initBoard, which constructs our drawing board . This function need at least one argument, 
 which is the name of id we defined earlier for div in our example ``jxgbox``. ``boundingbox: [-5, 2, 5, -2]`` tells
  JSXGraph coordinate system of our construction.
  
  Code of whole example is then following:
  {/lang}