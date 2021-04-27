{lang=EN}
## Creating lines
Lines are the next type of objects that we will learn. Line is defined by two points through which a line is drawn.
Here is an example of a board with two lines.
{/lang}
{lang=SI}
Creating basic objects
{/lang}
{lang=CZ}
## Kreslení přímek
Dalším objektem, s jehož konstrukcí se seznámíme, je přímka.
Ta je v JSXGraphu definována dvěma body, kterými prochází. 

Níže je uveden příklad kódu, kterým jsou v nákresně narýsovány dvě přímky. 
První z nich je zadána přímo souřadnicemi určujících bodů, druhá je potom definována pomocí proměnných, které jsou 
jejím určujícím bodům přiřazeny.

{/lang}

{lang=DE}
## Geraden erzeugen
*Geraden* sind der nächste Objekttyp, den wir kennenlernen.
Eine Gerade wird durch zwei Punkte festgelegt.
Hier ist ein Beispiel einer Zeichenfläche mit zwei Geraden:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 var line1 = board.create("line",[[-3,1],[3,-1]]);

 var p = board.create('point',[-2,-1]);
 var q = board.create('point',[3,1]);
 var line2 = board.create("line",[p,q]);
</script>
```
{lang=EN}
Result:
{/lang}

{lang=CZ}
Výsledek:
{/lang}

{lang=DE}
Resultat:
{/lang}


<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 var line1 = board.create("line",[[-3,1],[3,-1]]);
 var p = board.create('point',[-2,-1]);
 var q = board.create('point',[3,1]);
 var line2 = board.create("line",[p,q]);
</script>

{lang=EN}
Line of code `var line1 = board.create("line",[[-3,1],[3,-1]]);` creates $line1$ through two points `[-3,1]` and `[3,-1]`.
For each point again we had to define $x$ and $y$ coordinate. Because for the line we need to provide a list of two points,
we enclose both points in square brackets, therefore the list of two points is `[[-3,1],[3,-1]]`.

For the second $line2$ we first defined two points $p$ and $q$ and used them as `[p,q]` when defining the $line2$. Here we already
see why it is useful to store objects in variables, because now we could define another line, that could also go through point $p$ or $q$
and we don't need to worry if coordinates are correct.

_Note: In Javascript lists are written in square brackets **[ ]**._
{/lang}

{lang=CZ}
Řádek s kódem `var line1 = board.create("line",[[-3,1],[3,-1]]);` vytváří přímku $line1$, která prochází 
body `[-3,1]` a `[3,-1]`. 
Každý bod je definován uspořádanou dvojicí (seznamem) souřadnic $x$ a $y$. Uspořádaný seznam je uzavřen do hranatých
závorek \[...\]. Protože přímka je určena dvěma body, zapisujeme do její definice seznam těchto bodů`[[-3,1],[3,-1]]`.

V případě druhé přímky $line2$ jsme nejprve definovali dva body $p$ a $q$ a v definici přímky použili 
jejich proměnné `[p,q]`. Již na tomto jednoduchém příkladě vidíme, jak je užitečné
ukládat objekty do proměnných. Potom můžeme například klidně definovat třetí přímku, procházející 
některým z bodů $p$, $q$ a nemusíme se strachovat, zda jeho souřadnice opisujeme dobře.

_Poznámka: V Javascriptu je seznam uváděn v hranatých závorkách **[ ]**._ 
{/lang}

{lang=DE}
Durch die Programmzeile `var line1 = board.create("line",[[-3,1],[3,-1]]);` wird die Gerade `line1` durch die zwei Punkte `[-3,1]` and `[3,-1]` erzeugt.
Für jeden der beiden Punkte haben wir $x$- und $y$-Koordinate in der Form `[x, y]` angegeben.
Da wir für die Gerade eine Liste mit zwei Punkten benötigen, sind beide Koordinatenpaare wiederum in eckige Klammern eingeschlossen. Kurz gesagt,
die Liste der Koordinaten der beiden Punkte wird mit `[[-3,1],[3,-1]]` angegeben.

Für die zweite Gerade `line2` legen wir zuerst zwei Punkte $p$ und $q$ an und verwenden sie mittels `[p,q]` um die Gerade `line2` festzulegen.
Hier sehen wir bereits, warum es nützlich ist, Objekte in Variablen abzuspeichern. Wir könnten nun zum Beispiel eine dritte Gerade anlegen,
die ebenfalls durch $p$ und $q$ verläuft, ohne uns sorgen zu müssen, ob die Koordinaten korrekt sind.

_Beachte: In Javascript werden Listen mittel eckiger Klammern **[ ]** angegeben._
{/lang}