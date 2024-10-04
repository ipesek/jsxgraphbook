{lang=EN}
## Animating with sliders

One great use of a slider is animation. Instead of moving the slider by hand, JSXGraph has a function that can move the slider by itself. In this example
we will create a slider and two buttons that can start and stop the animation of an increasing and decreasing circle. 
{/lang}

{lang=SI}
## Animacija z drsniki

Odličen primer uporabe drsnikov je ustvarjanje animacij. JSXGraph ima funkcijo, ki omogoča samodejno premikanje drsnikov, torej jih ne rabimo premikati ročno.
V spodnjem primeru bomo ustvarili drsnik in gumbe, ki bodo začeli in ustavili animacijo naraščanja in krčenja kroga. 
{/lang}

{lang=CZ}Animating with sliders{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:500px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-3, 3, 3, -3],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var r = board.create('slider',[[-2,-2],[2,-2],[0,1,2]],{name:'r'});
 var A = board.create('point',[0,0.5], {visible:false});
 var button1 = board.create('button', [-2, -2.3, 'Start increasing',function(){r.startAnimation(1, 40, 30)}]);
 var button2 = board.create('button', [-2, -2.6, 'Start decreasing',function(){r.startAnimation(-1, 10, 100)}]);
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
 var button2 = board.create('button', [-2, -2.6, 'Start decreasing',function(){r.startAnimation(-1, 10, 100)}]);
 var button3 = board.create('button', [0.5, -2.5, 'Stop animation',function(){r.stopAnimation()}]);
 var c = board.create('circle',['A',function(){return r.Value();}]);
</script>




{lang=EN}
Once again we create a board, and add to it a slider named `'r'`. This will be the radius of our circle. Then we create point `A` for the centre. We have already 
shown how to create a button, we do this with `var button1 = board.create('button', [-2, -2.3, 'Start increasing',function(){s.startAnimation(1, 40, 30)}]);`. 
First are the coordinates for the button, then the text on it and lastly is the command. With `function(){s.startAnimation(1, 40, 30)}`, we start the animation
of the slider. This function has 3 parameters:
- direction 
- step count 
- delay (in milliseconds)

Direction is either +1 or -1, we used one for increasing and the other for decreasing the radius. Step count is in our case 40, this means that the slider
is separated into 40 subsections - the bigger the number, the smoother the animation. And lastly the delay is 30 milliseconds, that is how much time passes between moving to the next subsection of the slider. 
The smaller the number, the faster it moves.  

The second button is created in a similar way, the main difference is in the direction and we made the animation less smooth by reducing the step count. 
The third button is used to stop the animation of the slider, this is done with the function `r.stopAnimation()`, which doesn't need any parameters. 

Then we just have to create a circle with center `A` and the radius given by the slider.
{/lang}


{lang=SI}
Spet ustvarimo risalno površino in na njo dodamo drsnik z imenom `'r'`. Ta bo predstavljal polmer našega kroga. Potem ustvarimo nevidno točko `A`, ki bo središče
kroga. Naučili smo se že, kako ustvariti gumb, to naredimo z ukazom `var button1 = board.create('button', [-2, -2.3, 'Start increasing',function(){s.startAnimation(1, 40, 30)}]);`.
Tako kot prej moramo najprej zapisate koordinate gumba, napis na njem in ukaz ob kliku. Uporabimo funkcijo `function(){s.startAnimation(1, 40, 30)}`, ki začne 
animacijo drsnika. Potebuje tri parametre:
* smer,
* korak,
* zakasnitev (v milisekundah).

Smer je lahko +1 ali -1, eno bomo uporabili za večanje, drugo za manjšanje polmera. Korak je v našem primeru 40, kar pomeni, da je drsnik razdeljen na 40 delov,
več delov pomeni bolj tekočo animacijo. Zakasnitev je 30 milisekund, ki predstavlja čas med vsakim premikom na naslednji del drsnika. Manjša kot je številka, 
hitreje se premika.  

Drugi gumb je ustvarjen podobno kot prvi, glavna razlika je v smeri, ki je -1 in v številu korakov na drsniku (ker je korakov manj, je animacija bolj groba). 
Tretji gumb uporabimo za ustavitev animacije, to storimo s pomočjo funkcije `r.stopAnimation()`, ki ne potrebuje parametrov. 

Potem samo konstruiramo krog s središčem v `A` in polmerom, ki ga določa drsnik.
{/lang}


{lang=CZ}
{/lang}
