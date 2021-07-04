{lang=EN}
## Example: Animation with slider

**Cycloids.** Rolling a circle along a straight line a point firmly connected to its rim draws a curve 
called a [cycloid](https://mathworld.wolfram.com/Cycloid.html). If the point is closer to the center a 
curve drawn by it is called a *curtate cycloid*. If the point is further from the center than the rim, 
the resulting curve is called a *prolate cycloid*, see figure below. Create a dynamic geometry model of the 
given situation, movement of the circle controlled by the slider.
{/lang}

{lang=SI}
## Primer: animacija z drsnikom

**Cikloida.** Če fiksiramo točko na krožnici in krog zakotalimo po ravni podlagi, nam fiksirana točka opiše krivuljo, ki se imenuje  
[cikloida](https://mathworld.wolfram.com/Cycloid.html). Če je točka znotraj kroga, rečemo krivulji skrčena cikloida, če pa je točka zunaj kroga, pa 
raztegnjena cikloida. Ustvarili bomo dinamično sliko, ki bo narisala cikloido od premikanju drsnika. 
{/lang}

{lang=CZ}
## Příklad: Animace užitím posuvníku

**Cykloidy.** Při odvalování kruhu podél přímky vykresluje bod pevně spojený s jeho okrajem křivku
zvanou [cykloida](https://mathworld.wolfram.com/Cycloid.html). Pokud je uvažovaný bod blíže ke středu kruhu, než je jeho okraj,
jeho trajektorií je křivka zvaná *zkrácená cykloida* (*curtate cycloid*). Pokud je předmětný bod 
dále od středu, než je okraj kruhu, jeho trajektorií je *prodloužená cykloida* (*prolate cycloid*). Vytvořte dynamický geometrický model popsaných situací u kterého je pohyb kružnice
ovládán posuvníkem, viz níže uvedený obrázek.
{/lang}

<div id="jxgbox" class="jxgbox" style="width:800px; height:300px;"></div>
     <script>
        var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-2, 5, 14, -1], axis:false, showClearTraces: true});
        // A straight line as  a path for the circle
        var M = board.create('point',[-1,0],{name:'M', face:'o', size:1, visible:false});
        var N = board.create('point',[7,0],{name:'N', face:'o', size:1, visible:false});
        var l1 = board.create('line', [M,N], {color:'black'});
        // Sliders to control the values of r (radius of the circle) and l (the amount of translation of the circle center)
        var r = board.create('slider', [[-1, -0.5], [1,-0.5], [0, 1, 3]], {name:'r', snapWidth: 0.1});
        var l = board.create('slider', [[5, -0.5], [10,-0.5], [-2.00, 0, 18.00]], {name:'l', snapWidth: 0.01});
        // Circle c with center C
        var C = board.create('point', [function(){return l.Value();},function(){return r.Value();}], {color:'blue', size:1, name:'C'});
        var c = board.create('circle', [C,function(){return r.Value();}], {color:'orange', fillOpacity: 0.1});
        // Three fixed points with different distances from the center to get curtate, normal and prolate cycloid, respectively
        var A0 = board.create('point', [function(){return C.X();}, function(){return 1.5*r.Value();}], {visible:false});
        var B0 = board.create('point', [function(){return C.X();}, function(){return 2*r.Value();}], {visible:false});
        var D0 = board.create('point', [function(){return C.X();}, function(){return 2.5*r.Value();}], {visible:false});
        // moving points as images of the respective fixed points
        var A = board.create('point',
                [function(){return ((A0.X()-C.X())*Math.cos(l.Value()/r.Value())+(A0.Y()-C.Y())*Math.sin(l.Value()/r.Value()))+C.X();},
                 function(){return (-(A0.X()-C.X())*Math.sin(l.Value()/r.Value())+(A0.Y()-C.Y())*Math.cos(l.Value()/r.Value()))+C.Y();}],
                {size:1, color:'red', trace:true});
        var B = board.create('point',
                [function(){return ((B0.X()-C.X())*Math.cos(l.Value()/r.Value())+(B0.Y()-C.Y())*Math.sin(l.Value()/r.Value()))+C.X();},
                 function(){return (-(B0.X()-C.X())*Math.sin(l.Value()/r.Value())+(B0.Y()-C.Y())*Math.cos(l.Value()/r.Value()))+C.Y();}],
                {size:1, color:'green', trace:true});
        var D = board.create('point',
                [function(){return ((D0.X()-C.X())*Math.cos(l.Value()/r.Value())+(D0.Y()-C.Y())*Math.sin(l.Value()/r.Value()))+C.X();},
                 function(){return (-(D0.X()-C.X())*Math.sin(l.Value()/r.Value())+(D0.Y()-C.Y())*Math.cos(l.Value()/r.Value()))+C.Y();}],
                {size:1, color:'blue', trace:true});
        </script>
		
{lang=EN}
*Programming:*

First, we define dimensions, width and height, of the drawing area setting the corresponding properties of the ``div`` element:
{/lang}

{lang=SI}
*Programiranje:*

Določimo dimenzije risalne površine:
{/lang}

{lang=CZ}
*Programování:*

Nejprve stanovíme rozměry, tj. šířku a výšku, nákresny přiřazením náležitých hodnot odpovídajícím atributům prvku ``div``: 
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:900px; height:300px;"></div>
```

{lang=EN}
Subsequently, at the beginning of the code bounded by the tags _\<script\>, \</script\>_, 
we determine the Bounding box as follows:
{/lang}

{lang=SI}
Nadalje določimo _bounding box_ na naslednji način:
{/lang}

{lang=CZ}
Následně, na začátku kódu vymezeného tagy _\<script\>, \</script\>_, 
definujeme rozsahy souřadnicových os zavedených v nákresně:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-2, 5, 16, -1], axis:false, showClearTraces: true});
</script>
```

{lang=EN}
Note the attribute ``showClearTraces`` used above. Setting its value to ``true`` displays the button for deleting 
the traces of points, see the circled *x* at the bottom of the bounding box.

As the first construction, we draw a straight line *MN*, a path for the circle:
{/lang}

{lang=SI}
Opazimo atribut ``showClearTraces``. Če nastavimo njegovo vrednost na ``true``, se ustvari gumb, ki izbriše sled točke (obkrožen $x$ spodaj desno).

Narišemo še premico *MN*, ki bo predstavljala pot kotaljenja kroga:
{/lang}

{lang=CZ}
Všimněme si atributu ``showClearTraces``, který je použit ve výše uvedeném příkazu pro iniciaci nákresny. 
Nastavení jeho hodnoty na ``true`` vede k zobrazení užitečného tlačítka pro mazání stop bodů, viz
symbol kruhu s křížkem uvnitř při dolním okraji nákresny ve výše uvedeném dynamickém obrázku.

Konstrukci řešení začneme sestrojením přímky *MN*, cesty pro odvalování kruhu:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-2, 5, 16, -1], axis:false, showClearTraces: true});
	var M = board.create('point',[-1,0],{name:'M', face:'o', size:1, visible:false});
    var N = board.create('point',[7,0],{name:'N', face:'o', size:1, visible:false});
    var l1 = board.create('line', [M,N], {color:'black'});
</script>
```



{lang=EN}
Before drawing the circle, we create two sliders to control the values of *r*, radius of the circle, and *l*, 
the amount of translation of the circle center, respectively:
{/lang}

{lang=SI}
Predno narišemo krog, ustvarimo dva drsnika, ki nadzirata vrednosti polmera *r* in premika *l* krožnice po premici . 
{/lang}

{lang=CZ}
Před sestrojením vlastního kruhu vytvoříme dva posuvníky pro ovládání hodnot
parametrů *r*, poloměru kruhu, a *l*, velikosti posunutí středu kruhu při jeho pohybu:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-2, 5, 16, -1], axis:false, showClearTraces: true});
	var M = board.create('point',[-1,0],{name:'M', face:'o', size:1, visible:false});
    var N = board.create('point',[7,0],{name:'N', face:'o', size:1, visible:false});
    var l1 = board.create('line', [M,N], {color:'black'});
	var r = board.create('slider', [[-1, -0.5], [1,-0.5], [0, 1, 3]], {name:'r', snapWidth: 0.1});
    var l = board.create('slider', [[5, -0.5], [10,-0.5], [-2.00, 0, 18.00]], {name:'l', snapWidth: 0.01});
</script>
```

{lang=EN}
Then we proceed to the construction of the circle *c* with center *C* and radius *r*:
{/lang}

{lang=SI}
Potem nadaljujemo s konstrukcijo kroga *c* s središčem v *C* in polmerom *r*:
{/lang}

{lang=CZ}
Pokračujeme sestrojením samotného kruhu *c* se středem *C* a poloměrem *r*:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-2, 5, 16, -1], axis:false, showClearTraces: true});
	var M = board.create('point',[-1,0],{name:'M', face:'o', size:1, visible:false});
    var N = board.create('point',[7,0],{name:'N', face:'o', size:1, visible:false});
    var l1 = board.create('line', [M,N], {color:'black'});
	var r = board.create('slider', [[-1, -0.5], [1,-0.5], [0, 1, 3]], {name:'r', snapWidth: 0.1});
    var l = board.create('slider', [[5, -0.5], [10,-0.5], [-2.00, 0, 18.00]], {name:'l', snapWidth: 0.01});
	var C = board.create('point', [function(){return l.Value();},function(){return r.Value();}], {color:'blue', size:1, name:'C'});
    var c = board.create('circle', [C,function(){return r.Value();}], {color:'orange', fillOpacity: 0.1});
</script>
```



{lang=EN}
By defining three fixed points *A0*, *B0*, *C0* with different distances from the circle’s center we contribute to obtaining 
the above mentioned cycloids; *curtate*, *normal* and *prolate cycloid*, respectively:
{/lang}

{lang=SI}
Definiramo tri fiksne točke *A_0, B_0, C_0*, na različnih oddaljenostih od središča kroga, ki nam bodo določale vse tri prej opisane cikloide:
{/lang}

{lang=CZ}
Definováním následujících tří pevných bodů *A0*, *B0*, *C0* s různými vzdálenostmi od 
středu kruhu si připravíme startovní pozice pro získání výše uvedených cykloid; 
*zkrácené*, *normální* a *prodloužené cykloidy*, v daném pořadí:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-2, 5, 16, -1], axis:false, showClearTraces: true});
	var M = board.create('point',[-1,0],{name:'M', face:'o', size:1, visible:false});
    var N = board.create('point',[7,0],{name:'N', face:'o', size:1, visible:false});
    var l1 = board.create('line', [M,N], {color:'black'});
	var r = board.create('slider', [[-1, -0.5], [1,-0.5], [0, 1, 3]], {name:'r', snapWidth: 0.1});
    var l = board.create('slider', [[5, -0.5], [10,-0.5], [-2.00, 0, 18.00]], {name:'l', snapWidth: 0.01});
	var C = board.create('point', [function(){return l.Value();},function(){return r.Value();}], {color:'blue', size:1, name:'C'});
    var c = board.create('circle', [C,function(){return r.Value();}], {color:'orange', fillOpacity: 0.1});
	var A0 = board.create('point', [function(){return C.X();}, function(){return 1.5*r.Value();}], {visible:false});
    var B0 = board.create('point', [function(){return C.X();}, function(){return 2*r.Value();}], {visible:false});
    var D0 = board.create('point', [function(){return C.X();}, function(){return 2.5*r.Value();}], {visible:false});
</script>
```

{lang=EN}
In fact, we will not directly move these points *A0*, *B0*, *C0*, but will create their instant images *A*, *B*, *C* dependent on values that variables 
controlled by sliders, especially *l*, can gain:
{/lang}

{lang=SI}
V resnici ne bomo premikali teh treh točk, ampak bomo ustvarjali njihove kopije glede na vrednosti spremenljivk, ki jih bomo nadzirali z drsnikoma, 
še posebej z drsnikom *l*:
{/lang}

{lang=CZ}
Je třeba říci, že při animaci nepohybujeme přímo s těmito body *A0*, *B0*, *C0*, ale vytváříme jejich 
okamžité obrazy *A*, *B*, *C* příslušející konkrétním hodnotám proměnných ovládaných posuvníky, především *l*:
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-2, 5, 16, -1], axis:false, showClearTraces: true});
	var M = board.create('point',[-1,0],{name:'M', face:'o', size:1, visible:false});
    var N = board.create('point',[7,0],{name:'N', face:'o', size:1, visible:false});
    var l1 = board.create('line', [M,N], {color:'black'});
	var r = board.create('slider', [[-1, -0.5], [1,-0.5], [0, 1, 3]], {name:'r', snapWidth: 0.1});
    var l = board.create('slider', [[5, -0.5], [10,-0.5], [-2.00, 0, 18.00]], {name:'l', snapWidth: 0.01});
	var C = board.create('point', [function(){return l.Value();},function(){return r.Value();}], {color:'blue', size:1, name:'C'});
    var c = board.create('circle', [C,function(){return r.Value();}], {color:'orange', fillOpacity: 0.1});
	var A0 = board.create('point', [function(){return C.X();}, function(){return 1.5*r.Value();}], {visible:false});
    var B0 = board.create('point', [function(){return C.X();}, function(){return 2*r.Value();}], {visible:false});
    var D0 = board.create('point', [function(){return C.X();}, function(){return 2.5*r.Value();}], {visible:false});
	var A = board.create('point',
            [function(){return ((A0.X()-C.X())*Math.cos(l.Value()/r.Value())+(A0.Y()-C.Y())*Math.sin(l.Value()/r.Value()))+C.X();},
             function(){return (-(A0.X()-C.X())*Math.sin(l.Value()/r.Value())+(A0.Y()-C.Y())*Math.cos(l.Value()/r.Value()))+C.Y();}],
            {size:1, color:'red', trace:true});

    var B = board.create('point',
            [function(){return ((B0.X()-C.X())*Math.cos(l.Value()/r.Value())+(B0.Y()-C.Y())*Math.sin(l.Value()/r.Value()))+C.X();},
             function(){return (-(B0.X()-C.X())*Math.sin(l.Value()/r.Value())+(B0.Y()-C.Y())*Math.cos(l.Value()/r.Value()))+C.Y();}],
            {size:1, color:'green', trace:true});

    var D = board.create('point',
            [function(){return ((D0.X()-C.X())*Math.cos(l.Value()/r.Value())+(D0.Y()-C.Y())*Math.sin(l.Value()/r.Value()))+C.X();},
             function(){return (-(D0.X()-C.X())*Math.sin(l.Value()/r.Value())+(D0.Y()-C.Y())*Math.cos(l.Value()/r.Value()))+C.Y();}],
            {size:1, color:'blue', trace:true});
</script>
```

{lang=EN}
The task solution code is now complete.
{/lang}

{lang=SI}
Koda rešitve je s tem končana.
{/lang}

{lang=CZ}
Kód řešení úlohy je nyní kompletní.
{/lang}
