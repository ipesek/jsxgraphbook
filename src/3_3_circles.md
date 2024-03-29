{lang=EN}
## Circles

In JSXGraph we don't have only points and lines. In this section we will learn about circles. They can be constructed
with different [methods](https://jsxgraph.org/docs/symbols/JXG.Circle.html#method), here we will present how to
 create a circle with either two points, or a point and a radius.
Let us look at the example.
{/lang}

{lang=SI}
## Krogi

V JSXGraphu nimamo samo točk in premic. V tem poglavju se bomo naučili konstruirati krožnice in kroge. Uporabimo lahko različne 
[metode](https://jsxgraph.org/docs/symbols/JXG.Circle.html#method). Pokazali bomo, kako definirati krog bodisi z dvema točkama, bodisi s točko in polmerom.
{/lang}

{lang=CZ}
## Kružnice

V JSXGraphu nemáme k dispozici jenom body a přímky. Jsou zde definovány ještě další objekty, se kterými se postupně seznámíme.
Tato kapitola pojednává o kružnicích. Ty mohou být sestrojeny různými [metodami](https://jsxgraph.org/docs/symbols/JXG.Circle.html#method).
Zaměříme se na dvě z nich, konstrukci kružnice dané dvěma body a konstrukci kružnice dané bodem a poloměrem.
Podívejme se na následující příklad:
{/lang}

{lang=DE}
## Kreise

In JSXGraph haben wir nicht nur Punkte und Geraden zur Verfügung. In diesem Kapitel lernen wir Kreise kennen.
Sie können auf mehrere verschiedene [Weisen](https://jsxgraph.org/docs/symbols/JXG.Circle.html#method) konstruiert werden.
Hier zeigen wir die Konstruktionen durch zwei Punkte, sowie durch einen Punkt und einen Radius.
Betrachten wir ein Beispiel:
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true});

 var p = board.create('point',[-1,-1],{name:"A"});
 var q = board.create('point',[0,0],{name:"B"});

 var circle1 = board.create("circle",[p,q],{strokeColor:"red", strokeWidth:4});
 var circle2 = board.create("circle",["B",1.8],{method:"pointRadius", fillColor:"gray",
     fillOpacity:0.2});
</script>
```


<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true});
 var p = board.create('point',[-1,-1],{name:"A"});
 var q = board.create('point',[0,0],{name:"B"});
 var circle1 = board.create("circle",[p,q],{strokeColor:"red", strokeWidth:4});
 var circle2 = board.create("circle",["B",1.8],{method:"pointRadius", fillColor:"gray", fillOpacity:0.2});
</script>

{lang=EN}
The first thing what we notice is, that we initialized the board with a new argument `keepAspectRatio:true` which we use
to tell JSXGraph that we want our drawing board to keep the aspect ratio between the $x$ and $y$ axis. Setting this to
true is necessary if circles should look like circles and not like ellipses.

After creating both points we create two circles. _Circle1_ is created with `var circle1 = board.create("circle",[p,q],{strokecolor:"red", strokeWidth:4});`.
We can see that here we created circle with two points which is default method for creating the circles. We used
two additional attributes which we used to set the color and width of the stroke. Color here was not defined with
RGB system, but with the [color name](https://en.wikipedia.org/wiki/Web_colors).

_Circle2_ is more interesting `var circle2 = board.create("circle",["B",1.8],{method:"pointRadius", fillcolor:"gray", fillopacity:0.2});`
since we created it with the point and radius method. We explicitly set this as a attribute.
Also instead of using variable name for the point, we used name of the point `"B"`, which can be very useful when having
many objects in the construction (and generating objects dynamically). We also used two attributes for filling the area of circle,
namely _fillColor_ which defines the color of the fill and _fillOpacity_ sets the opacity of the area (ranging from $0$ to $1$, where $1$ means solid color with no opacity).
{/lang}

{lang=SI}
Najprej opazimo, da smo risalno desko opremili z novim atributom, to je `keepAspectRatio:true`, s katerim povemo, da želimo ohraniti
razmerje med osjo $x$ in $y$. Vrednost moramo nastaviti na true, če želimo, da naši krogi izgledajo kot krogi in ne kot elipse. 

Ko ustvarimo obe točki lahko definiramo kroga. _Circle1_ konstruiramo z `var circle1 = board.create("circle",[p,q],{strokecolor:"red", strokeWidth:4});`.
Narisali smo torej krog, ki gre skozi točki $p$ in $q$. Uporabili smo tudi dva atributa, s katerima smo določili barvo in debelino črte.
Pri tem nismo barve definirali z RGB sistemom, ampak z [imenom barve](https://en.wikipedia.org/wiki/Web_colors).

Drugi krog _Circle2_ je bolj zanimiv: `var circle2 = board.create("circle",["B",1.8],{method:"pointRadius", fillcolor:"gray", fillopacity:0.2});`, ker smo ga ustvarili
z metodo točke in polmera, kar moramo posebej sporočiti kot atribut `method:"pointRadius"`. 
Pri tem nismo uporabili imena spremenljivke točke, ampak njeno ime B, kar je tudi veljaven način za sklicevanje na že prej zapisane objekte. Zapisali smo tudi 
dva nova atributa za zapolnitev notranjosti kroga, torej _fillColor_ in _fillOpacity_, ki določita barvo in motnost notranjosti. 
{/lang}

{lang=CZ}
Především je třeba zmínit, že jsme v příkazu pro inicializaci nákresny použili nový atribut `keepAspectRatio:true`, kterým
dáváme JSXGraphu pokyn, aby byl zachován poměr stran nákresny odpovídající rozsahům hodnot na osách $x$ a $y$.
Nastavení hodnoty *true* je nezbytné pro to, aby kružnice vypadaly v nákresně skutečně jako kružnice a ne jako elipsy.

Nyní k vlastní konstrukci kružnice. Kružnice _Circle1_ je definována kódem `var circle1 = board.create("circle",[p,q],{strokecolor:"red", strokeWidth:4});`,
kde *p*, *q* jsou dva body, které jí určují, *p* je střed kružnice a *q* je bod, kterým kružnice prochází. V definici jsou užity dva
atributy pro barvu a tloušťku čáry. Barva přitom není definována systémem RGB, ale jménem [barvy](https://en.wikipedia.org/wiki/Web_colors).

Kružnice _Circle2_ je zajímavější, protože je dána středem a poloměrem. Definujeme ji kódem
`var circle2 = board.create("circle",["B",1.5],{method:"pointRadius", fillcolor:"gray", fillopacity:0.2});`
Tato metoda konstrukce kružnice musí být zadána explicitně formou atributu, na rozdíl od té předchozí, která je v JSXGraphu implicitní.
Také stojí za povšimnutí, že jsme v tomto kódu nepoužili jméno proměnné *q*, do které je bod uložen, ale přímo jméno "B" tohoto bodu.
Což může být velmi užitečné, když máme v konstrukci více objektů a když jsou objekty generovány dynamicky.

Použili jsme dva atributy pro vyplnění vnitřku kružnice (vytvoření kruhu), konkrétně _fillColor_, který definuje barvu
výplně a _fillOpacity_, kterým nastavíme neprůhlednost této plochy (kruhu)
(nabývá hodnot od $0$ do $1$, kde $1$ znamená jednobarevnou výplň bez průhlednosti).
{/lang}

{lang=DE}
Zuerst sehen wir, dass bei der Initialisierung der Zeichenfläche das neue Attribut `keepAspectRatio:true`
verwendet wurde, um JSXGraph mitzuteilen, dass wir das Verhältnis zwischen $x$- und $y$-Achse im HTML-Objekt gleich haben wollen.
Dies ist notwendig, damit Kreise wie Kreise aussehen und nicht wie Ellipsen, falls das Verhältnis von Breite zu Höhe des HTML-Objektes
nicht dem Verhältnis von Breite zu Höhe der *bounding box* entspricht.

Nach dem Anlegen zweier Punkte konstruieren wir zwei Kreise.
_circle1_ wird erzeugt durch `var circle1 = board.create("circle",[p,q],{strokecolor:"red", strokeWidth:4});`.
Wir sehen, dass hier ein Kreis durch Angabe zweier Punkte erzeugt wird. Dies ist wahrscheinlich die Standardmethode zur Kreiserzeugung.
Dabei verwenden wir zwei weitere Attribute mit denen wir die Farbe und Breite der Kreislinie setzen.
Die Farbe wird in diesem Fall nicht im RGB-System angegeben, sondern durch einen [Farbnamen](https://en.wikipedia.org/wiki/Web_colors).

_circle2_ ist noch interessanter:

`var circle2 = board.create("circle",["B",1.8],{method:"pointRadius", fillcolor:"gray", fillopacity:0.2});`

Dieser Kreis wird mit der Punkt-Radius-Methode erzeugt. Wir geben diese Methode explizit als Attribut an.
Das ist zwar nicht unbedingt nötig, aber sicher ist sicher.
Zudem - anstatt für den Mittelpunkt einen Variablennamen oder ein Koordinatenpaar anzugeben - verwenden wir den Namen des Punktes `"B"`,
was sehr nützlich sein kann, falls die Konstruktion sehr viele Objekte enthält (und Objekte dynamisch erzeugt werden).
Ausserdem verwenden wir zwei Attribute zur Färbung der Kreisfläche: _fillColor_ legt die Füllfarbe fest und _fillOpacity_
setzt die Durchsichtigkeit (Opacity) der Kreisfläche und nimmt Werte zwischen
$0$ und $1$ an, wobei $1$ undurchsichtig bedeutet.
{/lang}


