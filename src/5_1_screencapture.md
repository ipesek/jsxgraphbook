# {lang=EN}Capture the construction as image{/lang}{lang=SI}Capture the construction as image{/lang}{lang=CZ}Capture the construction as image{/lang}{lang=DE}Speichern einer Konstruktion als Bild{/lang}

{lang=EN}
JSXGraph provides several methods to capture the state of a construction in an image.
The easiest approach is to show the screenshot icon **&#x2318;** in the navigation bar by
setting `showScreenshot:true` in the attributes of the board.
{/lang}

{lang=DE}JSXGraph bietet mehrere Möglichkeiten, eine Konstruktion als Bild abzuspeichern.
Am einfachsten ist es, das Screenshot-Icon **&#x2318;** in der Navigations-Leiste anzuzeigen.
Dies geschieht durch Setzen des board-Attributs `showScreenshot:true`.
{/lang}

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

{lang=EN}
If the user clicks on that icon **&#x2318;** an image containing a screenshot of the construction
will be displayed over the construction.
By right-clicking on that image the user can download the screenshot. The size of the image, the symbol and the display of the image can be changed
by setting the attribute [_screenshot_](https://jsxgraph.org/docs/symbols/JXG.Board.html#screenshot) of the board.

If JSXGraph is integrated into a learning management system it might be
useful to store a screenshot of a user manipulated construction in the learning
management server server. An example is to store the solution of an exercise as an image on the server.
For this, the method `board.renderer.dumpToDataURI()` comes in handy.
It returns a string which contains an SVG image of the screenshot, encoded with base64.
This string then can e.g. be sent to the server.
{/lang}

{lang=DE}
Beim Klicken auf das Icon **&#x2318;** wird ein HTML-Bild, das einen Screenshot der
JSXGraph-Konstruktion enthält, über die Konstruktion gelegt. Durch Rechts-Klick
auf dieses Bild kann es heruntergeladen werden.
Die Größe des Bildes, das Icon-Symbol und die Darstellung des Bildes kann mit Hilfe des board-Attributes
[_screenshot_](https://jsxgraph.org/docs/symbols/JXG.Board.html#screenshot)
angepasst werden.

Ist JSXGraph in Learning-Management-System integriert, so kann es hilfreich sein,
Screenshots der von den Nutzern veränderten Konstruktionen auf dem Server zu speichern.
Ein Anwendung könnte das Speichern von Lösungen einer Aufgabe sein.
Dazu ist die Methode `board.renderer.dumpToDataURI()` vorgesehen.
Sie gibt einen String zurück, der die Konstruktion als SVG-Bild, codiert im base64-Format,
enthält.
Dieser String kann dann zum Beispiel auf dem Server abgespeichert werden.
{/lang}

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

{lang=EN}
Beside the two methods to create screenshots described above, there is a
[third method](https://jsxgraph.org/docs/symbols/JXG.SVGRenderer.html#dumpToCanvas)
whose complexity is somewhat inbetween of these two methods: The method
`board.renderer.dumpToCanvas(canvasId)` displays the screenshot of
construction in a canvas element on the web page.
{/lang}

{lang=DE}Neben den beiden beschriebenen Methoden, Screenshots zu erzeugen,
gibt es eine [dritte Methode](https://jsxgraph.org/docs/symbols/JXG.SVGRenderer.html#dumpToCanvas),
deren Komplexität in etwa zwischen den beiden bisherigen Methoden liegt:
Die Methode `board.renderer.dumpToCanvas(canvasId)` zeigt den Screenshot
einer Konstruktion in einem Canvas-Element in der Webseite an.
{/lang}

### {lang=EN}Decoding a base64 string{/lang}{lang=SI}Decoding a base64 string{/lang}{lang=CZ}Decoding a base64 string{/lang}{lang=DE}Decdierung eines base64-Strings{/lang}

{lang=EN}
Sometimes it might be necessary to decode the string which has been generated by `board.renderer.dumpToDataURI()`.
Usually, the returned string will have the form
{/lang}

{lang=DE}
Unter Umständen kann es nötig sein, den von `board.renderer.dumpToDataURI()` erzeugten String zu entpacken.
Normalerweise hat dieser String die folgende Form:
{/lang}

```
data:image/svg+xml;base64,PHN2ZyBzdHlsZT0ib3Zlc...aWduT2JqZWN0Pjwvc3ZnPg==
```


{lang=EN}
If the string following the prefix `data:image/svg+xml;base64,` is stored in e.g. a file `xyz.txt`,
then the SVG code can be retrieved by the command
{/lang}

{lang=DE}Wird der auf `data:image/svg+xml;base64,` folgende String etwa in der Datei
`xyz.txt` gespeichert, so kann der SVG-Code mit folgendem Kommando ausgegeben werden:{/lang}

```SH
base64 -d xyz.txt
```

{lang=EN}
The command `base64` is available on all Linux and Mac systems and can be installed on Windows, too.

In JavaScript, the data URI from JSXGraph in a variable `txt` can be converted back to SVG with the command
`atob(txt.split(',')[1]);`, as can be see in the function `do_screenshot()` in the above example.
{/lang}

{lang=DE}Der Befehl `base64` steht auf allen Linux- und Mac-Systemen zur Verfügung, auf Windows kann
er nachinstalliert werden.

Mit JavaScript, kann die data-URI aus JSXGraph in einer Variablen `txt` mit dem Befehl
`atob(txt.split(',')[1]);` in SVG konvertiert werden, wie es auch in der Funktion
`do_screenshot()` im obigen Beispiel zu sehen ist.
{/lang}



