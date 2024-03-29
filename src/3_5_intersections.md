{lang=EN}
## Intersections

Sometimes we want to distinguish some intersections of our objects (lines and circles). Usually we have to compute the
intersections, but JSXGraph has very convenient objects [_Intersection_](https://jsxgraph.org/docs/symbols/Intersection.html)
which we can use, to do just that. In order to create an intersection, we need to use two lines, two circles or mix of them.
We cannot use other objects to create this object.
{/lang}

{lang=SI}
## Presečišča

Včasih želimo izračunati ali narisati presečišča med objekti. To lahko rešimo računsko, lahko pa uporabimo objekt v JSXGraphu imenovan [_Intersection_](https://jsxgraph.org/docs/symbols/Intersection.html).
S pomočjo tega lahko določamo presečišča med dvema premicama, dvema krožnicama, ali pa med krožnico in premico. Med drugimi objekti to ni mogoče. 
{/lang}


{lang=CZ}
## Průsečíky

Pro určení průsečíků přímek a kružnic můžeme v JSXGraphu použít přímo objekt
[_Intersection_](https://jsxgraph.org/docs/symbols/Intersection.html) (*průsečík*), nemusíme tyto průsečíky počítat.
Pro jeho zadání potřebujeme dvě  přímky, dvě kružnice nebo jednu přímku a jednu kružnici. Jiné objekty pro určení jejich průsečíku
nelze použít.

{/lang}

{lang=DE}
## Schnittpunkte

Hin und wieder wollen wir einige Schnittpunkte unserer Objekte (Geraden und Kreise) anzeigen.
Normalerweise müssten wir die Schnittpunkte berechnen, aber JSXGraph stellt das recht komfortable Objekt
[_Intersection_](https://jsxgraph.org/docs/symbols/Intersection.html) dafür bereit.
Um einen Schnittpunkt zu erzeugen, benötigen wir zwei Geraden / oder Strecken, zwei Kreise oder eine Mischung der beiden.
Andere Objekte können dafür nicht verwendet werden.
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B", visible:false});
 var r = board.create('point',[0,0],{name:"C"});
 var circle1 = board.create('circle', [p,q]);
 var circle2 = board.create('circle', [r,p]);
 var inter1 = board.create('intersection',[circle1,circle2,0],{name:'I_1'});
 var inter2 = board.create('intersection',[circle1,circle2,1],{name:'I_2'});
 var line = board.create('line',[inter1,inter2]);
</script>
```

<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[-1,-1],{name:"B", visible:false});
 var r = board.create('point',[0,0],{name:"C"});
 var circle1 = board.create('circle', [p,q]);
 var circle2 = board.create('circle', [r,p]);
 var inter1 = board.create('intersection',[circle1,circle2,0],{name:'I_1'});
 var inter2 = board.create('intersection',[circle1,circle2,1],{name:'I_2'});
 var line = board.create('line',[inter1,inter2]);
</script>

{lang=EN}
After we created points and two circles, we created two objects - _intersections_.

In `var inter1 = board.create('intersection',[circle1,circle2,0],{name:'I_1'});` we used a third argument `0` which we use
in the case if there are two intersecting points and we decide which intersection we will use (with $0$ and $1$).
Notice that in `{name:'I_2'})` we used underscore in the name.
This is [$LATEX$](https://www.mathjax.org/) notation and can be used for the labels to typeset beautiful math.

As last we created new line `var line = board.create('line',[inter1,inter2]);`
with the intersection objects. We can therefore use newly created objects as regular points in our constructions.
{/lang}

{lang=SI}
Ko smo ustvarili točke in dva kroga, smo konstruirali dva objekta tipa _intersection_.

V vrstici `var inter1 = board.create('intersection',[circle1,circle2,0],{name:'I_1'});` določimo presečišče med dvema krogoma in dodamo še tretji parameter, 
ki ima vrednost `0`. To uporabimo takrat, ko je presečišč med objekti več in moramo določiti eno izmed njiju (če sta presečišči dve, imata vrednosti $0$ in $1$).
Za definicijo drugega presečišča smo zato zapisali vrednost `1`.
Opazimo lahko, da smo v imenu `{name:'I_2'})` uporabili zapis z podčrtajem. To je [$LATEX$](https://www.mathjax.org/) notacija in se uporablja za lep 
zapis matematičnih znakov in simbolov.

Na koncu ustvarimo še novo premico `var line = board.create('line',[inter1,inter2]);`, ki gre skozi presečišči. Torej presečišča so tudi točke, ki jih lahko
uporabljamo za nadaljevanje konstrukcije.


{/lang}

{lang=CZ}
Po vytvoření bodů a dvou kružnic jsme definovali dva objekty typu průsečík - _intersections_.

V kódu `var inter1 = board.create('intersection',[circle1,circle2,0],{name:'I_1'});` jsme použili za výčtem dvou kružnic třetí
argument, zde konkrétně s hodnotou `0`, který zadáváme v případě, že objekty mají dva průsečíky a my chceme ovlivnit, který
z nich použijeme (uvedením $0$ nebo $1$).
Za povšimnutí stojí, že jsme v atributu `{name:'I_2'})` použili ve jménu symbol podtržítka pro zápis dolního indexu.
Jedná se o syntaxi typografického systému [$LATEX$](https://www.mathjax.org/), která může být v JSXGraphu použita při zápisu
jmenovek pro dosažení lépe vypadajícího matematického zápisu.

Nakonec jsme definovali novou přímku `var line = board.create('line',[inter1,inter2]);`
procházející získanými průsečíky. Z toho je vidět, jak můžeme nově získané objekty hned použít jako určující body pro další konstrukci.

{/lang}

{lang=DE}
Nachdem wir zwei Punkte und zwei Kreise angelegt haben, können wir zwei _intersection_-Objekte erzeugen.

In `var inter1 = board.create('intersection',[circle1,circle2,0],{name:'I_1'});` haben wir als drittes
Argument `0` angegeben. Das ist von Bedeutung, wenn durch den Schnitt zweier Objekte zwei Schnittpunkte
existieren und wir festlegen wollen,
welchen der beiden wir verwenden (durch Angabe der Werte $0$ und $1$).

Beachte: in der Angabe `{name:'I_2'})` wurde ein Unterstrich verwendet.
Das ist [$LaTeX$](https://www.mathjax.org/)-Notation und kann bei Bezeichner eingesetzt werden um schöne Mathematik-Formelschreibweise zu erzeugen.
