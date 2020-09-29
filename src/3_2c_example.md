{lang=EN}
## Example

**Harmonic conjugate points.** Given three collinear points *A*, *B* and *C*; *C* being outside the line segment *AB*.
Determine the point *D* of the segment *AB* so that the ratio of its distances to *A* and *B*, respectively, is equal to the
ratio of distances of the point *C* to points *A* and *B*, respectively, i.e. *\|AD\|\/\|BD\|=\|AC\|\/\|BC\|*.

This point *D* is called the *harmonic conjugate of C with respect to A and B* and points *A*, *B*, *C* and *D* together
form the so called *harmonic quadruple*.
{/lang}

{lang=CZ}
## Příklad

**Harmonická čtveřice bodů.** Jsou dány tři kolineární body *A*, *B* a *C*; *C* leží vně úsečky *AB*.
Určete bod *D* úsečky *AB* takový, že poměr jeho vzdáleností od bodů *A* a *B*, v daném pořadí, je roven poměru
vzdáleností bodu *C* od bodů *A* a *B*, tj. *\|AD\|\/\|BD\|=\|AC\|\/\|BC\|*.

Bod *D* potom nazýváme *harmonicky sdružený s bodem C vzhledem k bodům A a B*, takové body *A*, *B*, *C* a *D* potom společně
vytváří tzv. *harmonickou čtveřici*.
{/lang}

{lang=SI}
## Example

**Harmonic conjugate points.** Given three collinear points *A*, *B* and *C*; *C* being outside the line segment *AB*.
Determine the point *D* of the segment *AB* so that the ratio of its distances to *A* and *B*, respectively, is equal to the
ratio of distances of the point *C* to points *A* and *B*, respectively, i.e. *\|AD\|\/\|BD\|=\|AC\|\/\|BC\|*.

This point *D* is called the *harmonic conjugate of C with respect to A and B* and points *A*, *B*, *C* and *D* together
form the so called *harmonic quadruple*.
{/lang}

{lang=DE}
## Beispiel

**Harmonische Teilung.** Gegeben sind drei kollineare Punkte *A*, *B* und *C* (d.h. sie liegen auf einer Geraden),
wobei *C* ausserhalb der Strecke *AB* liege.
Bestimme einen Punkt *D* auf der Strecke *AB* so, dass das Verhältnis seiner Abstände zu den Punkten *A* und *B*
jeweils gleich dem Verhältnis der Abstände des Punktes *C* zu den Punkten *A* bzw. *B* ist, das heißt
*\|AD\|\/\|BD\|=\|AC\|\/\|BC\|*.

Diese Konstellation wird [harmonische Teilung](https://de.wikipedia.org/wiki/Harmonische_Teilung) genannt.
{/lang}

{lang=EN}
*Result:*
To solve the task, we construct the so called [complete quadrangle](https://en.wikipedia.org/wiki/Complete_quadrangle),
as shown below.
{/lang}

{lang=CZ}
*Výsledek:*
K řešení úlohy využijeme konstrukci tzv. [úplného čtyřrohu](https://en.wikipedia.org/wiki/Complete_quadrangle),
jak vidíme níže.
{/lang}

{lang=SI}
*Result:*
To solve the task, we construct the so called [complete quadrangle](https://en.wikipedia.org/wiki/Complete_quadrangle),
as shown below.
{/lang}

{lang=DE}
*Resultat:*
Zur Lösung der Aufgabe konstruieren wir das sogenannte [vollständige Viereck](https://de.wikipedia.org/wiki/Fano-Axiom#:~:text=Ein%20vollst%C3%A4ndiges%20Viereck%20in%20einer,liegen%20auf%20einer%20gemeinsamen%20Gerade.),
wie unten zu sehen ist.
{/lang}


<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
 var C = board.create('glider', [4, 0, p]);
 var E = board.create('point', [1,4], {name: 'E',size:2, color: 'blue'});
 var q = board.create('line',[A,E],{name: 'q',withLabel: true, color: 'green'});
 var r = board.create('line',[B,E],{name: 'r',withLabel: true, color: 'green'});
 var F = board.create('glider', [0,0,q], {name: 'F',size:2, color: 'blue'});
 var s = board.create('line',[C,F],{name: 's',withLabel: true, color: 'green'});
 var G = board.create('intersection', [s, r,0], {name: 'G',size:2, color: 'blue'});
 var t = board.create('line',[A,G],{color: 'grey', dash:"2"});
 var u = board.create('line',[B,F],{color: 'grey', dash:"2"});
 var H = board.create('intersection', [t, u], {name: 'H',size:2, color: 'blue'});
 var v = board.create('line', [E,H],{color: 'grey', dash:"2"});
 var D = board.create('intersection', [p, v, 0]);
</script>


{lang=EN}
*Programming:*

First, we define the bounding box and create two points *A* and *B* with the line *p* passing through them:
{/lang}

{lang=CZ}
*Programování:*

Nejprve definujeme parametry nákresny, tj. rozměry okna a rozsah souřadnic, a v ní sestrojíme body *A* a *B*
spolu s přímkou *p*, která jimi prochází:
{/lang}

{lang=SI}
*Programming:*

First, we define the bounding box and create two points *A* and *B* with the line *p* passing through them:
{/lang}

{lang=DE}
*Programmierung:*

Zuerst legen wir die *bounding box* fest und erzeigen zwei Punkte *A* und *B* sowie die Gerade *p* durch die beiden
Punkte:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
</script>
```

{lang=EN}
Then, we put the point *C* on *p* so that it can move along it:
{/lang}

{lang=CZ}
Potom na přímku *p* umístíme bod *C* tak, aby byl po ní volně pohyblivý:
{/lang}


{lang=SI}
Then, we put the point *C* on *p* so that it can move along it:
{/lang}

{lang=DE}
Dann legen wir den Punkt *C* auf die Gerade *p*, so dass wir ihn entlang der Geraden ziehen können.
$C$ wird *glider* genannt.
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
 var C = board.create('glider', [4, 0, p]);
</script>
```

{lang=EN}
Now, we put the fourth point *E* above the line *p* and connect it by the straight lines *q* and *r* to points
*A* and *B*, respectively:
{/lang}

{lang=CZ}
Nyní umístíme čtvrtý bod *E* nad přímku *p* a přímkami *q* a *r* ho spojíme v daném pořadí postupně s&nbsp;body
*A* a *B*:
{/lang}

{lang=SI}
Now, we put the fourth point *E* above the line *p* and connect it by the straight lines *q* and *r* to points
*A* and *B*, respectively:
{/lang}

{lang=DE}
Nun erzeugen wir einen vierten Punkt *E* oberhalb der Geraden *p* an und konstruieren zwei Geraden *q* und *r*
durch *A* bzw. *B*:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
 var C = board.create('glider', [4, 0, p]);
 var E = board.create('point', [1,4], {name: 'E',size:2, color: 'blue'});
 var q = board.create('line',[A,E],{name: 'q',withLabel: true, color: 'green'});
 var r = board.create('line',[B,E],{name: 'r',withLabel: true, color: 'green'});
</script>
```
{lang=EN}
After this, we put the point *F* on *q*, somewhere between *A* and *E*, draw a line *s* passing through
points *C* and *F* and determine its intersection *G* with the line *r*:
{/lang}

{lang=CZ}
Poté umístíme na přímku *q* bod *F*, někam mezi body *A* a *E*, sestrojíme přímku *s* procházející body *C* a *F*
a určíme její průsečík *G* s přímkou *r*:
{/lang}

{lang=SI}
After this, we put the point *F* on *q*, somewhere between *A* and *E*, draw a line *s* passing through
points *C* and *F* and determine its intersection *G* with the line *r*:
{/lang}

{lang=DE}
Danach legen wir einen Punkt *F* auf die Gerade *q* (d.h. einen *glider*) irgendwo zwischen *A* und *E*,
ziehen eine Gerade *s* durch *C* und *F* und bestimmen ihren den Schnittpunkt *G* mit der Geraden *r*:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
 var C = board.create('glider', [4, 0, p]);
 var E = board.create('point', [1,4], {name: 'E',size:2, color: 'blue'});
 var q = board.create('line',[A,E],{name: 'q',withLabel: true, color: 'green'});
 var r = board.create('line',[B,E],{name: 'r',withLabel: true, color: 'green'});
 var F = board.create('glider', [0,0,q], {name: 'F',size:2, color: 'blue'});
 var s = board.create('line',[C,F],{name: 's',withLabel: true, color: 'green'});
 var G = board.create('intersection', [s, r,0], {name: 'G',size:2, color: 'blue'});
</script>
```

{lang=EN}
Finally, we draw lines *t=AG* and *u=BF*, denote *H* their point of intersection, construct
the line *v* passing points *H* and *E* and determine the desired point *D* as the intersection of lines *v* and *p*:
{/lang}

{lang=CZ}
Nakonec sestrojíme přímky *t=AG* a *u=BF*, určíme a označíme *H* jejich průsečík, sestrojíme přímku *v*
procházející body *H* a *E* a určíme hledaný bod *D* jako průsečík přímek *v* a *p*:
{/lang}

{lang=SI}
Finally, we draw lines *t=AG* and *u=BF*, denote *H* their point of intersection, construct
the line *v* passing points *H* and *E* and determine the desired point *D* as the intersection of lines *v* and *p*:
{/lang}

{lang=DE}
Schließlich, erzeugen wir die Geraden *t=AG* und *u=BF*, bezeichnen mit *H* ihren Schnittpunkt, konstruieren
die Gerade *v* durch die Punkte *H* und *E* und bestimmen den gewünschten Punkt *D* als den Schnittpunkt
der Geraden *v* und *p*:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
 var C = board.create('glider', [4, 0, p]);
 var E = board.create('point', [1,4], {name: 'E',size:2, color: 'blue'});
 var q = board.create('line',[A,E],{name: 'q',withLabel: true, color: 'green'});
 var r = board.create('line',[B,E],{name: 'r',withLabel: true, color: 'green'});
 var F = board.create('glider', [0,0,q], {name: 'F',size:2, color: 'blue'});
 var s = board.create('line',[C,F],{name: 's',withLabel: true, color: 'green'});
 var G = board.create('intersection', [s, r,0], {name: 'G',size:2, color: 'blue'});
 var t = board.create('line',[A,G],{color: 'grey', dash:"2"});
 var u = board.create('line',[B,F],{color: 'grey', dash:"2"});
 var H = board.create('intersection', [t, u], {name: 'H',size:2, color: 'blue'});
 var v = board.create('line', [E,H],{color: 'grey', dash:"2"});
 var D = board.create('intersection', [p, v, 0]);
</script>
```