# {lang=EN}Capture the construction as image{/lang}{lang=SI}Capture the construction as image{/lang}{lang=CZ}Capture the construction as image{/lang}

{lang=EN}
JSXGraph offers several possibilities to take a snapshot of a construction.
This may be useful for a user who wants to take a screenshot of a construction, but it
may also be useful for in an eLearning environment where students send a screenshot as
their solution of an exercise to a web server.
{/lang}

## {lang=EN}Screenshot button{/lang}

{lang=EN}
The easiest way to enable screenshots is to add the *screenshot icon* &#x2318; in the
navigation bar of the construction by adding the attribute
`showScreenshot:true` (and `showNavigation:true`) to the board attributes.

When the user clicks on the &#x2318; icon, an image containing the construction will
appear over the JSXgraph board. By right clicking on this image the user can download
the image.
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, showCopyright:false,
     showNavigation:true,
     showScreenshot:true });

 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B"});
 var r = board.create('point',[1,-0.5],{name:"C"});
 var s = board.create('point',[1,1],{name:"D"});
 var t = board.create('point',[-1,1.5],{name:"E"});

 var poly1 = board.create('polygon',[p,q,r,s,t],{name:"", withLabel:true});
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
 var board = JXG.JSXGraph.initBoard('jxgbox2', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, showCopyright:false,
     showNavigation:true,
     showScreenshot:true });

 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B"});
 var r = board.create('point',[1,-0.5],{name:"C"});
 var s = board.create('point',[1,1],{name:"D"});
 var t = board.create('point',[-1,1.5],{name:"E"});

 var poly1 = board.create('polygon',[p,q,r,s,t],{name:"", withLabel:true});
});
</script>
```

<div id="jxgbox2" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
(function(){
 var board = JXG.JSXGraph.initBoard('jxgbox2', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, showCopyright:false,
     showNavigation:true, showScreenshot: true,
     screenshot: {
            scale:1
        }
     });
 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B"});
 var r = board.create('point',[1,-0.5],{name:"C"});
 var s = board.create('point',[1,1],{name:"D"});
 var t = board.create('point',[-1,1.5],{name:"E"});
 var poly1 = board.create('polygon',[p,q,r,s,t],{name:"", withLabel:true});
})();
</script>
