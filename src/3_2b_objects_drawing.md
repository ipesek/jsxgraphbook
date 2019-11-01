{lang=EN}
## Adding attributes to the objects
Objects in JSXGraph have attributes, which describes them. Some of them are common (like color, name, etc.) and some are 
more specific. Points have properties for e.g. shape, where line has other attribute e.g. if (attribute straightLast) and 
how line ends at the second point (more [here](https://jsxgraph.uni-bayreuth.de/docs/symbols/Line.html)). 
We can always look at the [JSXGraph API documentation](https://jsxgraph.uni-bayreuth.de/docs/index.html), which describes 
all the objects and their attributes. 

Let us look now at the example. 
{/lang}

{lang=SI}
## Adding attributes to the objects
Objects in JSXGraph have attributes, which describes them. Some of them are common (like color, name, etc.) and some are 
more specific. Points have properties for e.g. shape, where line has other attribute e.g. if (attribute straightLast) and 
how line ends at the second point (more [here](https://jsxgraph.uni-bayreuth.de/docs/symbols/Line.html)). 
We can always look at the [JSXGraph API documentation](https://jsxgraph.uni-bayreuth.de/docs/index.html), which describes 
all the objects and their attributes. 

Let us look now at the example. 
{/lang}

{lang=CZ}
## Nastavení vlastností objektů
Objekty v JSXGraphu mají atributy, které je charakterizují. Některé z nich jsou společné všem 
(jako barva, jméno apod.), některé jsou typické pro objekty konkrétního druhu. 
Body mají například různé tvary, u přímky pak lze např. stanovit, zda bude končit v druhém ze svých určujících bodů
(atribut *straightLast*) a jak v něm bude končit (více [zde](https://jsxgraph.uni-bayreuth.de/docs/symbols/Line.html)). 

Popisy všech atributů objektů JSXGraphu jsou uvedeny v dokumentaci [JSXGraph Reference](https://jsxgraph.uni-bayreuth.de/docs/index.html). 
{/lang}


{lang=EN}
Let us look now at the example. 
{/lang}


{lang=SI}
Let us look now at the example. 
{/lang}

{lang=CZ}
Podívejme se na následující příklad: 
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});

 var p = board.create('point',[-2,-1],{name:"first", size:5, color:"FF0000"});
 var q = board.create('point',[3,1],{name:"last",fixed:true, face:"[]"});

 var line2 = board.create("line",[p,q],{straightLast:false, dash:"4" });
</script>
```

{lang=EN}
Result:
{/lang}


{lang=SI}
Result:
{/lang}

{lang=CZ}
Výsledek:
{/lang}


<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 var p = board.create('point',[-2,-1],{name:"first", size:5, color:"FF0000"});
 var q = board.create('point',[3,1],{name:"last",fixed:true, face:"[]"});
 var line2 = board.create("line",[p,q],{straightLast:false, dash:"4" });
</script>

{lang=EN}
In this example we added some attributes to the both points and to the line. 
In all three examples we defined attributes as a list written between `{ }`. For each attribute we must write its name
and a value. As we mentioned earlier, objects can have specific attributes and also more general borrowed (inherited) 
from other objects.  

In `var p = board.create('point',[-2,-1],{name:"first", size:5, color:"FF0000"});` first attribute is _name_ which is borrowed 
from [GeometryElement](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.GeometryElement.html#name), attribute _color_ is also 
borowed, where attribute [_size_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Point.html#size) is not borrowed but belongs to object Point.
We can read from the documentation: _Size of a point, either in pixel or user coordinates. Means radius resp. half the 
width of a point (depending on the face)._
 
Second point has some interesting attributes `var q = board.create('point',[3,1],{name:"last",fixed:true, face:"[]"});`
First is the attribute _fixed_ which defines whether objects can be moved (dragged) on the board. *Default* value for this
attribute is false, which means we can move all objects on the board if they are not explicitly fixed. Now we first mentioned
*default value*, which is used when do not explicitly set another value for some attribute. In the documentation for each 
attribute default value is also presented. The second new attribute is [_face_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Point.html#face)
where we used one of the possible shapes of a point. 
 
When we defined `var line2 = board.create("line",[p,q],{straightLast:false, dash:"4" });`, we used two attributes,
first defining how line will end at second point (_straightLast_) and second defining how the line will be drawn (_dash_).
Again, _dash_  can have different values, [documentation for dash attribute](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.GeometryElement.html#dash) 
tells us which are possible values.

All objects have attributes, also Board object has [them](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.Board.html). 
One of the attributes is _boundingbox_, which we used from first example, but didn't talk about it until now. 
E.g. if you don't like the navigation (bottom right), then you can add attribute _showNavigation_ and set it to false. Try it!

_*We can see that we can use attributes to fine tune on how our construction will behave and look.*_

__Documentation is a great resource for discovering attributes and also has some
examples of their usage.__
{/lang}

{lang=SI}
In this example we added some attributes to the both points and to the line. 
In all three examples we defined attributes as a list written between `{ }`. For each attribute we must write its name
and a value. As we mentioned earlier, objects can have specific attributes and also more general borrowed (inherited) 
from other objects.  

In `var p = board.create('point',[-2,-1],{name:"first", size:5, color:"FF0000"});` first attribute is _name_ which is borrowed 
from [GeometryElement](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.GeometryElement.html#name), attribute _color_ is also 
borowed, where attribute [_size_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Point.html#size) is not borrowed but belongs to object Point.
We can read from the documentation: _Size of a point, either in pixel or user coordinates. Means radius resp. half the 
width of a point (depending on the face)._
 
Second point has some interesting attributes `var q = board.create('point',[3,1],{name:"last",fixed:true, face:"[]"});`
First is the attribute _fixed_ which defines whether objects can be moved (dragged) on the board. *Default* value for this
attribute is false, which means we can move all objects on the board if they are not explicitly fixed. Now we first mentioned
*default value*, which is used when do not explicitly set another value for some attribute. In the documentation for each 
attribute default value is also presented. The second new attribute is [_face_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Point.html#face)
where we used one of the possible shapes of a point. 
 
When we defined `var line2 = board.create("line",[p,q],{straightLast:false, dash:"4" });`, we used two attributes,
first defining how line will end at second point (_straightLast_) and second defining how the line will be drawn (_dash_).
Again, _dash_  can have different values, [documentation for dash attribute](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.GeometryElement.html#dash) 
tells us which are possible values.

All objects have attributes, also Board object has [them](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.Board.html). 
One of the attributes is _boundingbox_, which we used from first example, but didn't talk about it until now. 
E.g. if you don't like the navigation (bottom right), then you can add attribute _showNavigation_ and set it to false. Try it!

_*We can see that we can use attributes to fine tune on how our construction will behave and look.*_

__Documentation is a great resource for discovering attributes and also has some
examples of their usage.__
{/lang}

{lang=CZ}
V tomto příkladu jsme přidali některé atributy jak k bodům, tak i k přímce.
Ve všech třech případech jsme definovali vlastnosti objektů pomocí seznamu atributů uvedených v závorkách `{ }`.
Pro každý atribut musíme napsat jeho jméno a hodnotu. Jak již bylo uvedeno dříve, objekty mohou mít jak specifické atributy,
tak i atributy obecné, sdílené s více objekty. 

V kódu `var p = board.create('point',[-2,-1],{name:"first", size:5, color:"FF0000"});` 
je prvním atributem jméno objektu _name_, které je společné třídě [GeometryElement](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.GeometryElement.html#name), 
atribut barvy _color_ je také společný, zatímco atribut velikosti [_size_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Point.html#size) 
není obecný, ale je typický pro objekt *Point* (bod).
V dokumentaci se dočteme: _Velikost bodu, buď v pixelech nebo v jednotkách určených uživatelem. Znamená poloměr nebo polovinu
šířky bodu (v závislosti na jeho vzhledu)._
 
Kód `var q = board.create('point',[3,1],{name:"last",fixed:true, face:"[]"});` definující druhý bod 
obsahuje další zajímavé atributy. První z nich je atribut _fixed_, který určuje, zda může být objekt přemisťován (tažen) 
po nákresně. *Nastavená* (*Default*) hodnota pro tento atribut je *false*, což znamená, že pokud objekty nejsou explicitně fixovány,
můžeme s nimi hýbat po nákresně. *Nastavená hodnota* (*default value*) je použita vždy, když není pro daný atribut explicitně zadána jiná hodnota. 
V dokumentaci jsou uvedeny nastavené hodnoty pro všechny atributy. Druhým novým atributem v uvedeném kódu je
[_face_](https://jsxgraph.uni-bayreuth.de/docs/symbols/Point.html#face), kterým nastavíme jeden z možných tvarů bodu. 
 
V kódu `var line2 = board.create("line",[p,q],{straightLast:false, dash:"4" });` definice přímky byly použity dva
atributy, první z nich _straightLast_ určuje, že přímka skončí ve druhém z určujících bodů, druhý _dash_ potom určuje, jak bude čára nakreslena.
Parametr _dash_ může nabývat různých hodnot, jejich přehled viz [documentation for dash attribute](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.GeometryElement.html#dash).

Tak jako v3echny objekty i nákresna (*Board*) má své [atributy](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.Board.html). 
Jedním z nich je _boundingbox_, který používáme již od první ukázky kódu nákresny, ale ještě jsme ho nekomentovali. 
Dalším atributem nákresny je _showNavigation_, který nám dovoluje skrýt navigační tlačítka v pravém dolním rohu nákresny,
pokud mu nastavíme hodnotu *false*. Vyzkoušejte to!

_*Vidíme, že pomocí nastavení hodnot atributů můžeme vyladit chování i vzhled naší konstrukce.*_

__Dokumentace je velkým zdrojem pro poznání všech atributů, které můžeme použít. Obsahuje také konkrétní příklady jejich použití.__
{/lang}
