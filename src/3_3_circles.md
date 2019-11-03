{lang=EN}
## Circles

In JSXGraph we don't have only points and lines. In this section we will learn about circles. They can be constructed 
with different [methods](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.Circle.html#method), here we will present how to
 create with two points and a point and a radius. 
Let us now look at the example.
{/lang}

{lang=SI}##Circles{/lang}

{lang=CZ}
## Kružnice

V JSXGraphu nemáme k dispozici jenom body a přímky. Jsou zde definovány ještě další objekty, se kterými se postupně seznámíme.
Tato kapitola pojednává o kružnicích. Ty mohou být sestrojeny různými [metodami](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.Circle.html#method). 
Zaměříme se na dvě z nich, konstrukci kružnice dané dvěma body a konstrukci kružnice dané bodem a poloměrem.
Podívejme se na následující příklad:
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
First what we notice is, that when we initialized the board with a new argument `keepAspectRatio:true` which we use
to tell JSXGraph that we want that html object and drawing board keep the aspect ratio between $x$ and $y$ axis. Setting this to
true is necessary if circles should look like circles and not like ellipses. 

After creating both points we create two circles. _Circle1_ is created with `var circle1 = board.create("circle",[p,q],{strokecolor:"red", strokeWidth:4});`.
We can see, that here we created circle with two points which is default method for creating the circles. We used 
two additional attributes which we used to set the color and width of the stroke. Color here was not defined with 
RGB system, but with the color name (REF needed). 

_Circle2_ is more interesting `var circle2 = board.create("circle",["B",1.5],{method:"pointRadius", fillcolor:"gray", fillopacity:0.2});`
since we created it with the point and radius method. We explicitly set this as a attribute.
Also instead of using variable name for the point, we used name of the point `"B"`, which can be very useful when having 
many objects in the construction (and generating objects dynamically). We also used two attributes for filling the area of circle,
namely _fillColor_ which defines the color of the fill and _fillOpacity_ sets the opacity of the area (ranging from $0$ to $1$, where $1$ means solid color with no opacity).
{/lang}

{lang=SI}
First what we notice is, that when we initialized the board with a new argument `keepAspectRatio:true` which we use
to tell JSXGraph that we want that html object and drawing board keep the aspect ratio between $x$ and $y$ axis. Setting this to
true is necessary if circles should look like circles and not like ellipses. 

After creating both points we create two circles. _Circle1_ is created with `var circle1 = board.create("circle",[p,q],{strokecolor:"red", strokeWidth:4});`.
We can see, that here we created circle with two points which is default method for creating the circles. We used 
two additional attributes which we used to set the color and width of the stroke. Color here was not defined with 
RGB system, but with the color name (REF needed). 

_Circle2_ is more interesting `var circle2 = board.create("circle",["B",1.5],{method:"pointRadius", fillcolor:"gray", fillopacity:0.2});`
since we created it with the point and radius method. We explicitly set this as a attribute.
Also instead of using variable name for the point, we used name of the point `"B"`, which can be very useful when having 
many objects in the construction (and generating objects dynamically). We also used two attributes for filling the area of circle,
namely _fillColor_ which defines the color of the fill and _fillOpacity_ sets the opacity of the area (ranging from $0$ to $1$, where $1$ means solid color with no opacity).
{/lang}

{lang=CZ}
Především je třeba zmínit, že jsme v příkazu pro inicializaci nákresny použili nový atribut `keepAspectRatio:true`, kterým
dáváme JSXGraphu pokyn, aby byl zachován poměr stran nákresny odpovídající rozsahům hodnot na osách $x$ a $y$.
Nastavení hodnoty *true* je nezbytné pro to, aby kružnice vypadaly v nákresně skutečně jako kružnice a ne jako elipsy. 

Nyní k vlastní konstrukci kružnice. Kružnice _Circle1_ je definována kódem `var circle1 = board.create("circle",[p,q],{strokecolor:"red", strokeWidth:4});`,
kde *p*, *q* jsou dva body, které jí určují, *p* je střed kružnice a *q* je bod, kterým kružnice prochází. V definici jsou užity dva 
atributy pro barvu a tloušťku čáry. Barva přitom není definována systémem RGB, ale jménem barvy (je potřeba REF). 

Kružnice _Circle2_ je zajímavější, protože je dána středem a poloměrem. Definujeme ji kódem
`var circle2 = board.create("circle",["B",1.5],{method:"pointRadius", fillcolor:"gray", fillopacity:0.2});`
Tato metoda konstrukce kružnice musí být zadána explicitně formou atributu, na rozdíl od té předchozí, která je v JSXGraphu implicitní.
Také stojí za povšimnutí, že jsme v tomto kódu nepoužili jméno proměnné *q*, do které je bod uložen, ale přímo jméno "B" tohoto bodu.
Což může být velmi užitečné, když máme v konstrukci více objektů a když jsou objekty generovány dynamicky. 

Použili jsme dva atributy pro vyplnění vnitřku kružnice (vytvoření kruhu), konkrétně _fillColor_, který definuje barvu
výplně a _fillOpacity_, kterým nastavíme neprůhlednost této plochy (kruhu) 
(nabývá hodnot od $0$ do $1$, kde $1$ znamená jednobarevnou výplň bez průhlednosti).
{/lang}



