{lang=EN}
## Animating with sliders

One great use of a slider is animation. Instead of moving the slider by hand, JSXGraph has a function that can move the slider by itself. In this example
we will create a slider and two buttons that can start and stop the animation of an increasing and decreasing circle. 

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:500px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-3, 3, 3, -3],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var r = board.create('slider',[[-2,-2],[2,-2],[0,1,2]],{name:'r'});
 var A = board.create('point',[0,0.5], {visible:false});
 var button1 = board.create('button', [-2, -2.3, 'Start increasing',function(){r.startAnimation(1, 40, 30)}]);
 var button2 = board.create('button', [-2, -2.6, 'Start decreasing',function(){r.startAnimation(-1, 40, 30)}]);
 var button3 = board.create('button', [0.5, -2.5, 'Stop animation',function(){r.stopAnimation()}]);
 var c = board.create('circle',['A',function(){return r.Value();}]);
</script>
```


<div id="jxgbox" class="jxgbox" style="width:500px; height:500px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-3, 3, 3, -3],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var r = board.create('slider',[[-2,-2],[2,-2],[0,1,2]],{name:'r'});
 var A = board.create('point',[0,0.5], {visible:false});
 var button1 = board.create('button', [-2, -2.3, 'Start increasing',function(){r.startAnimation(1, 40, 30)}]);
 var button2 = board.create('button', [-2, -2.6, 'Start decreasing',function(){r.startAnimation(-1, 40, 30)}]);
 var button3 = board.create('button', [0.5, -2.5, 'Stop animation',function(){r.stopAnimation()}]);
 var c = board.create('circle',['A',function(){return r.Value();}]);
</script>

{/lang}

{lang=SI}Animating with sliders{/lang}
{lang=CZ}Animating with sliders{/lang}


{lang=EN}
Once again we create a board, and add to it a slider named `'r'`. This will be the radius of our circle. Then we create point `A` for the centre. We have already 
shown how to create a button, we do this with `var button1 = board.create('button', [-2, -2.3, 'Start increasing',function(){s.startAnimation(1, 50, 30)}]);`. 
First are the coordinates for the button, then the text on it and lastly is the command. With `function(){s.startAnimation(1, 50, 30)}`, we start the animation
of the slider. This function has 3 parameters:
- direction 
- step count 
- delay (in miliseconds)

Direction is either +1 or -1, we used one for increasing and the other for decreasing the radius. Step count is in our case 40, this means that the slider
is separated into 40 subsections - the bigger the number, the smoother the animation. And lastly the delay is 30 miliseconds, that is how much time passes between moving to the next subsection of the slider. 
The smaller the number, the faster it moves. Then we just have to create a cirle with center `A` and the radius given by the slider. 
{/lang}
