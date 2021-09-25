{lang=EN}
## Triggers

In JSXGraph we can add functions that happen when a user based event occurs. These events are:

- mouse drag,
- mouseclick,
- hover over,
- hover out,
- doubleclick...

The list of possible event is very large, for all events see [here.](https://www.w3schools.com/jsref/dom_obj_event.asp)
All events are defined with the method `object.on('event', function)`. Let us look at a few examples.
{/lang}

{lang=SI}
## Dogodki

V JSXGraph lahko dodamo funkcije, ki se izvedejo, ko uporabnik opravi določeno dejanje. Ta dejanja so:

- poteg z miško,
- klik z miško,
- premik z miško nad objekt,
- premik z miško stran od objekta,
- dvoklik...

Možnih uporabniških vnosov je veliko, za seznam vseh glej [tukaj.](https://www.w3schools.com/jsref/dom_obj_event.asp)
Vsi dogodki se definirajo z metodo `objekt.on('dogodek', funkcija)`. Poglejmo nekaj primerov.
{/lang}

{lang=CZ}Triggers{/lang}


```JS
<p id="output">Click in A or hover over B.</p>
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox');
 var A = board.create('point',[-2,1], {fixed: true});
 var B = board.create('point',[3,1]);
 A.on('down', function(){q.visit([3,-2],1000,1)});
 B.on('over', function(){document.getElementById('output').innerHTML = "This is point "+this.name;});
 B.on('out', function(){document.getElementById('output').innerHTML = 'Click in A or hover over B.' ;});
</script>
```

<p id="output">Click on A or hover over B</p>
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox');
 var A = board.create('point',[-2,1], {fixed: true});
 var B = board.create('point',[3,1]);
 A.on('down', function(){q.visit([3,-2],1000,1)});
 B.on('over', function(){document.getElementById('output').innerHTML = "This is point "+this.name;});
 B.on('out', function(){document.getElementById('output').innerHTML = 'Click on A or hover over B' ;});
</script>

{lang=SI}
Najprej opazimo, da smo na začetku dodali novo vrstico, to je `<p id="output">Click on A or hover over B</p>`. S tem smo samo pripravili prostor z 
besedilom, ki ga bomo v nadaljevanju spreminjali. Nato ustvarimo risalno površino in na njej točki `A` in `B`. V naslednji vrstici nad prvo točko uporabimo metodo 
`A.on('down', function(){q.visit([3,-2],1000,1)});`. Opazimo, da je ime dogodka 'down', kar pomeni klik miške. Torej ob kliku miške se izvede zraven zapisana
funkcija `visit`, ki smo jo že opisali v poglavju **4.1**. 

V zadnjih dveh vrsticah pa smo zapisali dva dogodka, ki sta oba vezana na točko `B`. Najprej uporabimo dogodek 'over', ki se zgodi, ko uporabnik premakne miško 
nad objekt, nato pa dogodek 'down', ki se zgodi, ko uporabnik miško odmakne od objekta. V obeh primerih je zapisana funkcija `document.getElementById('output').innerHTML`,
ki spemeni zapis dokumenta, ki smo za definirali v prvi vrstici kode. Ko smo z miško nad točko `B`, bo v njem pisalo *This is point B*, sicer pa bo pisalo 
*Click on A or hover over B*.
{/lang}

{lang=EN}
The first thng we notice, is that we added a line `<p id="output">Click on A or hover over B</p>` at the beginning. This is used to create a space with text,
which we will be able to change. Then we define our board and on it points `A` and `B`. In the next line we use the method 
`A.on('down', function(){q.visit([3,-2],1000,1)});`. Notice, that the event name is 'down', which represents a mouseclick. This means, that when the user
clicks on point `A`, the function `q.visit()` is executed. We have already explained what this function does in chapter **4.1**.

The final two lines contain two methods bound to point`B`. The first one uses event 'over', which happens when the user hovers over the point. Next is event 'down', 
which happens, when the user moves the mouse away from the point. Both cases contain the function `document.getElementById('output').innerHTML`. This is used
to change the text of our before defined element. The end result is a line of text over our board, which reads *This is point B*, when hovering over point `B`, and *Click on A or hover over B* otherwise.
{/lang}

