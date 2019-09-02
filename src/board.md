# Drawing area

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
```HTML
<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>JSXGraph templatek</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <script type="text/javascript" charset="UTF-8" src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.7
/jsxgraphcore.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.7/jsxgraph.css
" />
    </head>
  <body>

     <div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>

     <script>
        var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
     </script>

  </body>
</html>
```

You can copy-paste to a file (name it `example1.html`) and open it your favorite browser. 