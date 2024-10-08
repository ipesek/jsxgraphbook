{lang=EN}
## Polygons

Polygons are very useful objects which can be used to construct a closed area with arbitrarily many points (minimum is three).
Polygons can be convex or concave, depending on the input points. We can again define different [attributes](https://jsxgraph.org/docs/symbols/Polygon.html)
to the object.

Example:
{/lang}

{lang=SI}
## Poligoni

Poligoni ali n-kotniki so objekti, s katerimi rišemo zaprta območja omejena s poljubno mnogo točkami (najmanj tremi). Lahko so konveksni ali konkavni,
odvisno od podanih točk. Spet lahko definiramo različne [atribute](https://jsxgraph.org/docs/symbols/Polygon.html). Poglejmo primer:
{/lang}

{lang=CZ}
## Mnohoúhelníky

Mnohoúhelníky jsou v geometrii velmi frekventované objekty. Můžeme je chápat jako části roviny ohraničené uzavřenou
lomenou čarou s libovolným počtem vrcholů (minimum jsou tři). Mnohoúhelník může být *konvexní* nebo *konkávní* (říkáme též *nekonvexní*),
v závislosti na rozložení určujících bodů (vrcholů). Stejně jako jiným objektům i mnohoúhelníkům můžeme přiřadit různé
[atributy](https://jsxgraph.org/docs/symbols/Polygon.html).

Příklad:
{/lang}

{lang=DE}
## Polgyone

Polygone (Vielecke) sind sehr hilfreiche Objekte zur Konstruktion von abgeschlossenen
Flächen (*Vielecke*) mit beliebig vielen Eckpunkten (aber minimal drei).
Polygone können konvex sein, müssen es aber nicht. Dies ist abhängig von den definierenden Punkten.
Auch hier können wir mit verschiedenen [Attributen](https://jsxgraph.org/docs/symbols/Polygon.html)
das Aussehen und Verhalten ändern.

Beispiel:
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],
     keepAspectRatio:true, showCopyright:false, showNavigation:false });

 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B"});
 var r = board.create('point',[1,-0.5],{name:"C"});
 var s = board.create('point',[1,1],{name:"D"});
 var t = board.create('point',[-1,1.5],{name:"E"});

 var poly1 = board.create('polygon',[p,q,r,s,t],{name:"Polygon 1",withLabel:true});

 var points = [[2,-1],[4,1],[1,1],[-1,-1]];
 var poly2 = board.create('polygon',points,{name:"Polygon 2",withLabel:true,
     hasInnerPoints:true, withLines:false, vertices:{visible:false}});
</script>
```

<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B"});
 var r = board.create('point',[1,-0.5],{name:"C"});
 var s = board.create('point',[1,1],{name:"D"});
 var t = board.create('point',[-1,1.5],{name:"E"});
 var poly1 = board.create('polygon',[p,q,r,s,t],{name:"Polygon 1",withLabel:true});
 var points = [[2,-1],[4,1],[1,1],[-1,-1]];
 var poly2 = board.create('polygon',points,{name:"Polygon 2",withLabel:true,hasInnerPoints:true, withLines:false, vertices:{visible:false}});
</script>

{lang=EN}
As we mentioned earlier we need at least three points to make a polygon. In our example we created five points which were then used
to create a polygon. We used an attribute _withLabel_ which tells JSXGraph to show the name of the polygon.

For the second polygon we created a list of points, which is another approach to creating a polygon. Here we have a few new
attributes. Attribute _hasInnerPoints_ enables the user to move the entire polygon. For example, moving Polygon 1 is not possible,
only its points can be moved. Adding this attribute will enable moving the polygon.
Next attribute, _withLines_ tells JSXGraph whether to draw borders of the polygon or not. The last attribute _vertices_ is
particularly interesting, because it does not have just a value, but a dictionary on the right side of `:`. The reason behind it
is that we can control the vertices with more than one attribute.
{/lang}

{lang=SI}
Kot smo že omenili, potrebujemo za definicijo poligona vsaj tri točke. V našem primeru smo ustvarili 5 točk in nad njimi definirali poligon. Uporabili smo 
atribut _withLabel_, ki pove, da naj bo na sliki označeno ime poligona. 

V drugem primeru pa smo ustvarili seznam točk in s pomočjo seznama definirali 4-kotnik. Tukaj imamo ponovno nekaj novih atributov.
Atribut _hasInnerPoints_ omogoča uporabniku, da premika celoten objekt. Pri prvem poligonu to ni mogoče, lahko premikamo samo njegove robne točke. 
Naslednji atribut _withLines_ pove JSXGraphu, da naj nariše robove poligona. Zadnji atribut _vertices_ je posebej zanimiv, saj nima samo vrednosti,
ampak ima slovar na desni strani dvopičja. Razlog za to je v tem, da lahko oglišča nadzorujemo z več kot eno lastnostjo. 
{/lang}

{lang=CZ}
Jak je zřejmé z geometrické podstaty mnohoúhelníku, pro jeho vytvoření potřebujeme alespoň tři body.
V uvedeném příkladě jsme vytvořili pět bodů, které jsme pojmenovali *A*, *B*, *C*, *D*, *E* a použili jsme je
k určení prvního mnohoúhelníku, pětiúhelníku *ABCDE*. V jeho definici jsme použili atribut _withLabel_ s hodnotou _true_, kterým
jsme zajistili zobrazení jména pětiúhelníku *Polygon 1*.

K určení druhého mnohoúhelníku, tentokrát se jedná o čtyřúhelník, jsme použili předem vytvořenou posloupnost vrcholů, což je
další přístup k definování mnohoúhelníku v JSXGraphu. V definici jsme použili několik dalších nových atributů.

Atribut _hasInnerPoints_ přináší možnost pohybovat v nákresně s celým mnohoúhelníkem. Srovnejme s pětiúhelníkem *ABCDE* (*Polygon 1*),
který nemůžeme celý přemístit, můžeme pohybovat pouze s jeho jednotlivými vrcholy.

Další atribut, _withLines_ je zodpovědný za to, zda se bude (implicitní nastavení, při použití atributu _withLines_ hodnota *true*)
nebo nebude (atribut _withLines_ s hodnotou *false*) kreslit hranice mnohoúhelníku.

Poslední atribut _vertices_, který se týká vrcholů mnohoúhelníku, je zajímavý tím, že mu za dvojtečkou `:` není přiřazena
jedna hodnota, ale seznam dalších atributů s jejich hodnotami. Důvodem je skutečnost, že výskyt vrcholů může být ovládán více atributy.
{/lang}

{lang=DE}
Wie breits erwähnt, benötigen wir mindestens drei Punkte zur Konstruktion eines Polygons.
In unserem Beispiel haben wir zuerst fünf Punkte angelegt, die dann unser Polgon definieren werden.
Wir haben zusätzlich das Attribut _withLabel:true_ angegeben, um den Namen des Polygons anzuzeigen.

Zur Konstruktion des zweite Polygons verwenden wir eine Liste von Koordinatenpaaren, sowie einige neue Attribute.
Das Attribut _hasInnerPoints_ ermöglicht es dem Berachter, das gesamte Polygon zu verschieben.
Im Gegensatz dazu kann Polygon 1 nicht komplett verschoben werden, lediglich einzelne Punkte oder Kanten
können verzogen werden.
Das nächste Attribut _withLines_ teilt JSXGraph mit, ob die Kanten / Ränder des Polygons angezeigt werden sollen oder nicht.
Das letzte Attribut _vertices_ ist wieder besonders interessant, denn es besitzt keinen einfachen Wert.
Nach dem `:` folgt
ein eigenes Attribut-Objekt, das die Eigenschaften der Polygon-Ecken festlegt. Der Grund ist, dass wir oft mehr als ein Attribut der Ecken verändern wollen.
{/lang}
