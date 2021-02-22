{lang=EN}
## Angles

When we need to emphasise some angle in our construction, we can do this with object [_Angle_](https://jsxgraph.org/docs/symbols/Angle.html).
As an input we need to provide three points $p1, p2, p3$ and the angle is drawn counterclockwise from $p1$ to $p3$ around $p2$.
Other combinations include two lines and two directions (by +/- 1) or line and two coordinates.
{/lang}

{lang=SI}
## Angles
{/lang}

{lang=CZ}
## Úhly

Pro zvýraznění konkrétních úhlů v konstrukci nabízí JSXGraph objekt [_Angle_](https://jsxgraph.org/docs/symbols/Angle.html) (*Úhel*).
Jako vstupní údaje je třeba zadat tři body $p1, p2, p3$, úhel je pak vykreslen v kladném smyslu (tj. proti směru pohybu hodinových ručiček)
od bodu $p1$ (bod na počátečním rameni) do bodu $p3$ (bod na koncovém rameni), kolem $p2$ (vrchol).

Dalšími možnostmi zadání vstupních údajů pro zobrazení úhlu jsou *dvě přímky a dva směry (ve tvaru +/- 1)* nebo *dvě přímky a dva body*
(kolmý průmět každého z těchto bodů na jemu příslušnou přímku, dle pořadí v zápisu, určuje polopřímku, která je ramenem úhlu).
{/lang}

{lang=DE}
## Winkel

Wenn Winkel in unserer Konstruktion gekennzeichnet werden sollen, kann dies mit dem Objekt
[_Angle_](https://jsxgraph.org/docs/symbols/Angle.html) bewerkstelligt werden.
Als Eingabe müssen wir drei Punkte $p1, p2, p3$ bereitstellen. Der Winkel wird dann gegen den Uhrzeigersinn
von $p1$ nach $p3$ um $p2$ markiert.

Andere Möglichkeiten zur Winkelauszeichnung sind, zwei Geraden und zwei Richtungen (mit +/-1) oder eine Gerade und zwei Koordinaten zu verwenden.
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-2,0],{name:"A"});
 var q = board.create('point',[1,1.5],{name:"B"});
 var r = board.create('point',[1,-1],{name:"C"});
 var line1 = board.create('line',[p,q]);
 var line2 = board.create('line',[p,r]);
 var angle1 = board.create('angle',["C", "A", "B"], {radius:2});
 var angle2 = board.create('angle',[line2,line1,-1,-1], {radius:1,color:'green'});
 var angle3 = board.create('angle',[line2,line1,1,1], {radius:1,color:'blue'});
</script>
```

<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var p = board.create('point',[-2,0],{name:"A", fixed:true});
 var q = board.create('point',[1,1.5],{name:"B"});
 var r = board.create('point',[1,-1],{name:"C"});
 var line1 = board.create('line',[p,q]);
 var line2 = board.create('line',[p,r]);
 var angle1 = board.create('angle',["C", "A", "B"], {radius:2});
 var angle2 = board.create('angle',[line2,line1,-1,-1], {radius:1,color:'green'});
 var angle3 = board.create('angle',[line2,line1,1,1], {radius:1,color:'blue'});
</script>

{lang=EN}

In this example we first created three points and then through them created two lines with common/intersection point $A$.

Then we created first angle with `var angle = board.create('angle',[r, p, q], {radius:2});` using three points. Remember,
when defining angle with three points we have to provide them in counterclockwise order, where the angle is centered by the second point. Additionaly, we set an attribute
_radius_ to $2$, which tells JSXGraph how big the arc of an angle should be.

Then the second angle $\beta$ was created using two lines and two directions (+/- 1) with following line
`var angle2 = board.create('angle',[line2,line1,-1,-1], {radius:1,color:'green'});`. This line presents another possible
method to input the parameters of an angle. We can combine them differently to get different angles at the intersection point $A$.

Last angle is only a variation of `angle2` which different directions and as a result we can see that `angle1` and `angle3`
describe the same angle but with different input parameters.
{/lang}

{lang=SI}
In this example we first created three points and then through them created two lines with common/intersection point $A$. 

Then we created first angle with `var angle = board.create('angle',[r, p, q], {radius:2});` using three points. Remember, 
when defining angle with three points we have to provide them in counterclockwise order, where the angle is centered by the second point. Additionaly, we set an attribute
_radius_ to $2$, which tells JSXGraph how big the arc of an angle should be. 

Then the second angle $\beta$ was created using two lines and two directions (+/- 1) with following line
`var angle2 = board.create('angle',[line2,line1,-1,-1], {radius:1,color:'green'});`. This line presents another possible 
method to input the parameters of an angle. We can combine them differently to get different angles at the intersection point $A$.

Last angle is only a variation of `angle2` which different directions and as a result we can see that `angle1` and `angle3` 
describe the same angle but with different input parameters.

{/lang}

{lang=CZ}
Nejprve jsme vytvořili tři body *A*, *B*, *C* a jimi určené dvě přímky se společným bodem $A$. 

První úhel (programem označený jako $\alpha$) jsme definovali pomocí těchto tří bodů. Zapsali jsme ho kódem  `var angle1 = board.create('angle',["C", "A", "B"], {radius:2});`
K pořadí uvedení bodů připomeňme, že úhel zadáváme třemi body ve směru proti pohybu hodinových ručiček, 
přitom jako prostřední uvádíme vrchol úhlu. Nakonec jsme uvedli atribut poloměru oblouku úhlu _radius_ s&nbsp;hodnotou $2$,
abychom JSXGraphu sdělili, jak velkým obloukem má úhel vykreslit. 

Kódem `var angle2 = board.create('angle',[line2,line1,-1,-1], {radius:1,color:'green'});` byl vytvořen druhý úhel $\beta$, 
užitím dvou přímek a stanovením směrů (+/- 1) jeho ramen, která na těchto přímkách leží. 
Jedná se o další možnost zadání úhlu. Různými kombinacemi hodnot (+/- 1) směrů můžeme vyjádřit všechny možné 
úhly s vrcholem v&nbsp;$A$.

Poslední úhel $\gamma$ je pouhou variací předchozího úhlu $\beta$ (též `angle2`) získanou právě změnou směrů ramen. Vidíme tak,
že proměnné `angle1` a `angle3` popisují stejný úhel, avšak s použitím různých vstupních údajů.

{/lang}

{lang=DE}
In diesem Beispiel werden zuerst drei Punkte angelegt, sowie zwei Geraden durch diese Punkte mit gemeinsamen Punkt $A$.

Der erste Winkel wird mittels
`var angle = board.create('angle',[r, p, q], {radius:2});` unter Verwendung der drei Punkte gezeichnet.
Wir erinnern uns, bei der Definition des Winkels durch drei Punkte werden diese gegen den Uhrzeigersinn angegeben, wobei der
Winkel um den zweiten Punkt verläuft.
Zusätzlich setzen wir das Attribut _radius_ auf $2$, was JSXGraph anweist, wie groß der Kreisbogen eines Winkels gezeichnet werden soll.

Der zweite Winkel $\beta$ wird durch Angabe zweier Geraden und zweier Richtungen (+/- 1) angelegt:
`var angle2 = board.create('angle',[line2,line1,-1,-1], {radius:1,color:'green'});`.
Durch die Kombinationen der Richtungen können wir die vier verschiedenen Winkel der beiden Geraden kennzeichnen.

Der dritte Winkel ist eine Variation von `angle2` mit anderen Richtungen mit dem Resultat, dass `angle1` und `angle3`
den gleichen Winkel kennzeichnen, aber unterschiedliche Eingabeparameter verwenden.
{/lang}
