# {lang=EN}Capture the construction as image{/lang}{lang=SI}Capture the construction as image{/lang}{lang=CZ}Capture the construction as image{/lang}{lang=DE}Speichern einer Konstruktion als Bild{/lang}


JSXGraph provides several methods to capture the state of a construction in an image.
The easiest approach is to add the screenshot icon **&#x2318;** to the navigation bar by
setting `showScreenshot:true` in the attributes of the board.

```JS
<div id="jxgbox" class="jxgbox" style="width:250px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, showCopyright:false,
     showNavigation:true, showScreenshot:true});
 var p = board.create('point', [Math.PI/2,1], {name: 'A'});
 var f = board.create('functiongraph', ['A.Y() * sin(x)']);
</script>
```
<div id="jxgbox1" class="jxgbox" style="width:250px; height:200px;"></div>
<script>
(function() {
 var board = JXG.JSXGraph.initBoard('jxgbox1', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, showCopyright:false,
     showNavigation:true, showScreenshot:true });
 var p = board.create('point', [Math.PI/2,1], {name: 'A'});
 var f = board.create('functiongraph', ['A.Y() * sin(x)']);
})();
</script>

If the user clicks on that icon **&#x2318;**, an image containing a screenshot of the construction
will be displayed over the construction. By right-clicking on that image, the user can download the screenshot. The size of the image, the symbol and the display of the image can be changed
by setting the attribute [_screenshot_](https://jsxgraph.org/docs/symbols/JXG.Board.html#screenshot) of the board.

If JSXGraph is integrated into a learning management system, it might be
useful to store a screenshot of a user manipulated construction in the learning
management server server.
For this the method `board.renderer.dumpToDataURI()` comes in handy.
This method returns a string which contains an SVG image of the screenshot, encoded with base64.
This string then can be sent to the server. Usually, the string will have the form

```
data:image/svg+xml;base64,PHN2ZyBzdHlsZT0ib3Zlc...aWduT2JqZWN0Pjwvc3ZnPg==
```

If the string following the prefix `data:image/svg+xml;base64,` is stored in a file `xyz.txt`,
then the SVG code can be retrieved by the command

```SH
base64 -d xyz.txt
```

The command `base64` is available on all Linux and Mac systems and can be installed on Windows, too.
In JavaScript, the data URI in a variable `txt` can be converted back to SVG with the command
`atob(txt.split(',')[1]);`.


```JS
<div id="jxgbox" class="jxgbox" style="width:250px; height:200px;"></div>
<button onClick="do_screenshot_base64()">Screenshot to base64</button><br/>
<button onClick="do_screenshot()">Screenshot to SVG</button><br/>
<textarea id="jxg_output" rows="10" cols="50"></textarea>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, showCopyright:false});
 var p = board.create('point', [Math.PI/2,1], {name: 'A'});
 var f = board.create('functiongraph', ['A.Y() * sin(x)']);
 function do_screenshot_base64() {
     var txt = board.renderer.dumpToDataURI();
     document.getElementById('jxg_output').value = txt;
 }
 function do_screenshot() {
     var txt = board.renderer.dumpToDataURI();
     txt = atob(txt.split(',')[1]);
     document.getElementById('jxg_output').value = txt;
 }
</script>
```
<div id="jxgbox" class="jxgbox" style="width:250px; height:200px;"></div>
<button onClick="do_screenshot_base64()">Screenshot to base64</button><br/>
<button onClick="do_screenshot()">Screenshot to SVG</button><br/>
<textarea id="jxg_output" rows="10" cols="50"></textarea>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, showCopyright:false});
 var p = board.create('point', [Math.PI/2,1], {name: 'A'});
 var f = board.create('functiongraph', ['A.Y() * sin(x)']);
 function do_screenshot_base64() {
     var txt = board.renderer.dumpToDataURI();
     document.getElementById('jxg_output').value = txt;
 }
 function do_screenshot() {
     var txt = board.renderer.dumpToDataURI();
     txt = atob(txt.split(',')[1]);
     document.getElementById('jxg_output').value = txt;
 }
</script>

Beside the two methods to create screenshots described above, there is a
[third method](https://jsxgraph.org/docs/symbols/JXG.SVGRenderer.html#dumpToCanvas)
whose complexity is somewhat inbetween of these two methods: The method
the method `board.renderer.dumpToCanvas(canvasId)`, displays the screenshot of
construction in a canvas element on the web page.
