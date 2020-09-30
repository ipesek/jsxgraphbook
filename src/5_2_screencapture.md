# {lang=EN}Capture the construction as image{/lang}{lang=SI}Capture the construction as image{/lang}{lang=CZ}Capture the construction as image{/lang}

{lang=EN}
JSXGraph offers several possibilities to take a snapshot of a construction.
This may be useful for a student who should be enabled to take a screenshot of a construction, 
but it may also be useful in an e-learning environment where students' solution of an exercise
should be stored on a web server in form of a screenshot.
{/lang}

## {lang=EN}Screenshot button{/lang}

{lang=EN}
The easiest way to enable screenshots is to add the *screenshot icon* &#x2318; in the
navigation bar of the construction by adding the attribute
`showScreenshot:true` (and `showNavigation:true`) to the board attributes.

When the user clicks on the &#x2318; icon, an image containing the construction will
appear over the JSXGraph board. By right clicking on this image the user can download
the image.
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {
     boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, 
     showCopyright:false,
     showNavigation:true,
     showScreenshot:true });

 var p = board.create('point', [-2,0], {name:"A"});
 var q = board.create('point', [-1,-1], {name:"B"});
 var r = board.create('point', [1,-0.5], {name:"C"});
 var s = board.create('point', [1,1], {name:"D"});
 var t = board.create('point', [-1,1.5], {name:"E"});

 var poly1 = board.create('polygon',[p,q,r,s,t],
                {name:"", withLabel:true});
});
</script>
```

<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
(function(){
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, showCopyright:false,
     showNavigation:true, showScreenshot: true });
 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B"});
 var r = board.create('point',[1,-0.5],{name:"C"});
 var s = board.create('point',[1,1],{name:"D"});
 var t = board.create('point',[-1,1.5],{name:"E"});
 var poly1 = board.create('polygon',[p,q,r,s,t],{name:"", withLabel:true});
})();
</script>

{lang=EN}
There are a few options available:

* `scale`: scaling factor (default=1)
* `type`: format of the screenshot image. Default: png
* `symbol`: Unicode symbol which is shown in the navigation bar. Default: '\u2318'
* `css`: CSS rules to format the div element containing the screen shot image
* `cssButton`: CSS rules to format the close button of the div element containing the screen shot image
{/lang}

```JS
<div id="jxgbox2" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox2', {
     boundingbox: [-5, 2, 5, -2],
     keepAspectRatio: true, 
     showCopyright: false,
     showNavigation: true, 
     showScreenshot: true,
     screenshot: {
            scale: 3,
            symbol: \u2318
        }
     });
 var p = board.create('point', [-2,0], {name:"A"});
 var q = board.create('point', [-1,-1], {name:"B"});
 var r = board.create('point', [1,-0.5], {name:"C"});
 var s = board.create('point', [1,1], {name:"D"});
 var t = board.create('point', [-1,1.5], {name:"E"});
 var poly1 = board.create('polygon', [p,q,r,s,t], {name:"", withLabel:true});
</script>
```

<div id="jxgbox2" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
(function(){
 var board = JXG.JSXGraph.initBoard('jxgbox2', {
     boundingbox: [-5, 2, 5, -2],
     keepAspectRatio: true, 
     showCopyright: false,
     showNavigation: true, 
     showScreenshot: true,
     screenshot: {
            scale: 3,
            symbol: '\u2318'
        }
     });
 var p = board.create('point', [-2,0], {name:"A"});
 var q = board.create('point', [-1,-1], {name:"B"});
 var r = board.create('point', [1,-0.5], {name:"C"});
 var s = board.create('point', [1,1], {name:"D"});
 var t = board.create('point', [-1,1.5], {name:"E"});
 var poly1 = board.create('polygon', [p,q,r,s,t], {name:"", withLabel:true});
})();
</script>

## {lang=EN}Save to canvas{/lang}

{lang=EN}
JSXGraph constructions can be displayed as static image in a canvas element supplied by developer.
The following HTML code contains a JSXGraph construction, a button and a canvas element.
{/lang}

```HTML
<div id="jxgbox3" class="jxgbox" 
    style="width:500px; height:200px;"></div>
<p>
<button id="start_save">Save to canvas</button>
<p>
<canvas id="canvas_out" 
    style="width:500px; height:200px; border: solid 2px blue; 
           border-radius:5px">
</canvas>
</p>
```

{lang=EN}
In addition to the JSXGraph construction, an event listener is added to the button with the ID `start_save`
which calls the method `board.renderer.dumpToCanvas()` with the ID of the canvas element, the width and height 
of the exported image and a boolean variable if the texts should be displayed, too.
{/lang}

```JS
 var board = JXG.JSXGraph.initBoard('jxgbox3', {
     boundingbox: [-5, 2, 5, -2],
     keepAspectRatio: true, 
     showCopyright: false,
     showNavigation: true, 
     });
 var p = board.create('point', [-2,0], {name:"A"});
 var q = board.create('point', [-1,-1], {name:"B"});
 var r = board.create('point', [1,-0.5], {name:"C"});
 var s = board.create('point', [1,1], {name:"D"});
 var t = board.create('point', [-1,1.5], {name:"E"});
 var poly1 = board.create('polygon', [p,q,r,s,t], {name:"", withLabel:true});
 document.getElementById('start_save').onclick = function() {
    var withTexts = true;
    board.renderer.dumpToCanvas('canvas_out', 500, 200, withTexts);
 };
```

<div id="jxgbox3" class="jxgbox" 
     style="width:500px; height:200px;"></div>
<p>
<button id="start_save">Save to canvas</button>
<p>
<canvas id="canvas_out" 
     style="width:500px; height:200px; border: solid 2px blue; border-radius:5px"></canvas>
</p>
<script>
(function(){
 var board = JXG.JSXGraph.initBoard('jxgbox3', {
     boundingbox: [-5, 2, 5, -2],
     keepAspectRatio: true, 
     showCopyright: false,
     showNavigation: true, 
     });
 var p = board.create('point', [-2,0], {name:"A"});
 var q = board.create('point', [-1,-1], {name:"B"});
 var r = board.create('point', [1,-0.5], {name:"C"});
 var s = board.create('point', [1,1], {name:"D"});
 var t = board.create('point', [-1,1.5], {name:"E"});
 var poly1 = board.create('polygon', [p,q,r,s,t], {name:"", withLabel:true});
 document.getElementById('start_save').onclick = function() {
    var withTexts = true;
    board.renderer.dumpToCanvas('canvas_out', 500, 200, withTexts);
 };
 })();
</script>

## Save as data URI

{lang=EN}
The next possibility is to store the construction as data URI. This is the method of choice 
if a screenshot of a construction should be stored on a web server in e.g. an e-learning environment.
The screenhost can be exported as string with the method

```JS
    var withTexts = true, txt;
    txt = board.renderer.dumpToDataURI(withTexts);
```

The data URI will contain the base64 encoded SVG code of the construction. Text elements which are displayed as HTML texts
above the construction will be packed into a SVH `foreignObject` element. Usually, 
only web browser are able to display the content of these `foreignObject` elements.
{/lang}

```JS
 var board = JXG.JSXGraph.initBoard('jxgbox4', {
     boundingbox: [-5, 2, 5, -2],
     keepAspectRatio: true, 
     showCopyright: false,
     showNavigation: true, 
     });
 var p = board.create('point', [-2,0], {name:"A"});
 var q = board.create('point', [-1,-1], {name:"B"});
 var r = board.create('point', [1,-0.5], {name:"C"});
 var s = board.create('point', [1,1], {name:"D"});
 var t = board.create('point', [-1,1.5], {name:"E"});
 var poly1 = board.create('polygon', [p,q,r,s,t], {name:"", withLabel:true});
 document.getElementById('dump_uri').onclick = function() {
    var withTexts = true, txt;
    txt = board.renderer.dumpToDataURI(withTexts);
    document.getElementById('text_out').value = txt;
 };
```

<div id="jxgbox4" class="jxgbox" 
     style="width:500px; height:200px;"></div>
<p>
<button id="dump_uri">Save to text</button>
<p>
<textarea id="text_out" rows="10" cols="50"></textarea>
</p>
<script>
(function(){
 var board = JXG.JSXGraph.initBoard('jxgbox4', {
     boundingbox: [-5, 2, 5, -2],
     keepAspectRatio: true, 
     showCopyright: false,
     showNavigation: true, 
     });
 var p = board.create('point', [-2,0], {name:"A"});
 var q = board.create('point', [-1,-1], {name:"B"});
 var r = board.create('point', [1,-0.5], {name:"C"});
 var s = board.create('point', [1,1], {name:"D"});
 var t = board.create('point', [-1,1.5], {name:"E"});
 var poly1 = board.create('polygon', [p,q,r,s,t], {name:"", withLabel:true});
 document.getElementById('dump_uri').onclick = function() {
    var withTexts = true, txt;
    txt = board.renderer.dumpToDataURI(withTexts);
    document.getElementById('text_out').value = txt;
 };
})();
</script>



