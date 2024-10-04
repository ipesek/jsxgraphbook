{lang=EN}
## Drawing mathematical functions

In the constructions we often need to draw mathematical functions like sine or cosine, polynomials or other known functions.
JSXGraph provides a convenient method for drawing such functions. Let's look at the example.
{/lang}

{lang=SI}
## Risanje funkcij

V konstrukcijah pogosto želimo narisati grafe znanik funkcij kot na primer sinus ali kosinus, polinome, itd. JSXGraph ponuja priročno metodo za risanje grafov.
Poglejmo primer.
{/lang}

{lang=CZ}
## Zobrazení grafu funkce

JSXGraph poskytuje pohodlný způsob zobrazování grafů funkcí, např. sinu, kosinu, algebraických funkcí, ale i dalších známých funkcí.

{/lang}

{lang=DE}
## Funktionsgraphen

In vielen Konstruktionen benötigen wir Graphen von mathematische Funktionen, wie z.B. $\sin$, $\cos$, Polynome oder andere bekannte Funktionen.
JSXGraph stellt eine komfortable Möglichkeit bereit, derartige Funktionen zu zeichnen.
Wollen wir uns ein Beispiel ansehen:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:300px; height:300px; margin:auto"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 4, 4, -4], axis:true,  showCopyright:false, showNavigation:false });
 var graph1 = board.create('functiongraph', [function(x){return Math.sin(x);}, -Math.PI, Math.PI],{name:'sin(x)', withLabel:true});
 var graph2 = board.create('functiongraph', [function(x){return x*x-2;}, -3, 3],{name:'x^2 - 2', withLabel:true, strokeColor:'red'});
</script>
``` 

<div id="jxgbox" class="jxgbox" style="width:300px; height:300px; margin:auto"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 4, 4, -4], axis:true,  showCopyright:false, showNavigation:false });
 var graph1 = board.create('functiongraph', [function(x){return Math.sin(x);},-Math.PI,Math.PI],{name:'sin(x)', withLabel:true});
 var graph2 = board.create('functiongraph', [function(x){return x*x-2;},-3,3],{name:'x^2 - 2', withLabel:true, strokeColor:'red'});
</script>

{lang=EN}
In this example we first changed the properties of `div` and set the width and height to form a square area, because we wanted a
nicer looking construction (another possibility would be to use attribute _keepAspectRatio_ in `initBoard()`). Then we created
two functions.

To draw a $\sin (x)$ function we used _functiongraph_ as a type
`var graph1 = board.create('functiongraph', `.  
But what follows is something new.
Let us look closely at `[function(x){return Math.sin(x);},-Math.PI,Math.PI]`. With type _functiongraph_ we told JSXGraph that
we will be drawing a function on some interval, therefore we need to provide the function we want to draw.
`function(x){return Math.sin(x);}` does just that. Here we use anonymous function `function(x)` where we provide parameter `x`,
that is used by JSXGraph to provide `x` values from the interval we have set with the second and third element of the list. In our
case this is `-Math.PI, Math.PI`. Now we have to define a function that will return a value ($y-coordinate$) for the given $x$.
This was done by `{return Math.sin(x);}`. We have to use the reserved word `return` which is followed by a function, in our case
`Math.sin(x)`. We end this with `;}` which is used to end the statement and the function.

In the second _graph2_ we have drawn a quadratic function `{return x*x-2;}` on the interval `-3, 3`. We also used some attributes
which we already explained on previous pages.

Note: For the _sine_ function we used
[Javascript Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object.

Alternatively, we could input the function term as string in the form
`['sin(x)',-Math.PI,Math.PI]`. Then, the JSXGraph internal language *JessieCode* is used (see the JessieCode chapter)
which "understands" the usual math notation.
Another example would be `['x^3',-5,5]` as a variant to [function(x){return x*x*x;},-5,5]`.
{/lang}

{lang=SI}
Na začetku smo rahlo spremenili lastnosti `div` in nastavili višino in širino na isto vrednost, da bo naša risalna površina kvadrat. Potem smo ustvarili dva grafa.

Za risanje grafa funkcije $\sin (x)$ smo uporabili tip _functiongraph_ v vrstici 
`var graph1 = board.create('functiongraph', `.  
Kar sledi temu zapisu pa je nekaj novega. Oglejmo si najprej zapis `[function(x){return Math.sin(x);},-Math.PI,Math.PI]`. Ko smo navedli tip, smo JSXGraphu povedali,
da mora narisati neko funkcijo na intervalu. Zato je potrebno podati funkcijo in pa interval. Funkcijo zapišemo z  `function(x){return Math.sin(x);}`, interval pa 
kot `-Math.PI,Math.PI`. Uporabili smo anonimno funkcijo `function(x)` s parametrom `x`, kjer `x` zavzame vse vrednosti iz podanega intervala. Zdaj pa moramo definirati 
specifično funkcijo, ki bo vrnila vrednost (koordinato $y$) pri danem $x$-u. To storimo z `{return Math.sin(x);}`.

V drugem grafu je postopek podoben. Za konkretno funkcijo uporabimo `{return x*x-2;}`, kar je kvadratna funkcija, interval pa zapišemo kot `-3, 3`.

Opomba: za funkcijo _sinus_ smo uporabili objekt
[Javascript Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

Alternativno bi lahko zapisali funkcijo v obliki `['sin(x)',-Math.PI,Math.PI]`. Potem bi notranji jezik JSXGrapha imenovan *JessieCode* 
to razumel kot standardno matematično notacijo. 
Podoben primer bi bil zapis `['x^3',-5,5]` namesto oblike `[function(x){return x*x*x;},-5,5]`.
{/lang}

{lang=CZ}

V tomto příkladě jsme nejprve změnili vlastnosti bloku `div`, konkrétně jsme nastavili šířku (*width*) a výšku (*height*)
nákresny tak, aby měla čtvercový tvar (další možností by bylo použití atributu _keepAspectRatio_ ve funkci `initBoard()`,
viz kapitola *3.6 Kružnice*). Potom jsme zadali zobrazení grafů dvou funkcí. 

Pro zobrazení grafu funkce $\sin (x)$ jsme použili objekt typu _functiongraph_ známým způsobem `var graph1 = board.create('functiongraph', ...`, 
ale to, co následuje, je něco nového. 

Pojďme se detailně zaměřit na část kódu `[function(x){return Math.sin(x);},-Math.PI,Math.PI]`.
Uvedením typu _functiongraph_ jsme JSXGraph informovali o tom, že budeme zobrazovat graf funkce na nějakém intervalu.
Nejprve parametrem `function(x){return Math.sin(x);}` zadáme výraz $\sin (x)$ definující hodnotu funkce pro dané $x$.
Užitím anonymní funkce `function(x)` zavedeme parametr `x`, kterému JSXGraph přiřazuje hodnoty ($x-souřadnice$) z intervalu, jehož 
meze jsou dány druhým a třetím prvkem seznamu parametrů, tj. hodnotami `-Math.PI, Math.PI`. 
Argumentem `{return Math.sin(x);}` je pro JSXGraph definována funkce, která pro dané $x$ vrátí příslušnou 
funkční hodnotu ($y$-souřadnici). Museli jsme použít klíčové slovo `return` následované příslušnou funkcí,
v našem případě `Math.sin(x)`. Zadání funkce zakončíme znakem `;` a ukončíme závorku `}`.

Druhý graf _graph2_ přísluší kvadratické funkci `{return x*x-2;}` na intervalu `-3, 3`. Samozřejmě, k nastavení vzhledu 
grafů používáme i atributy, které byly představeny v předchozích kapitolách.

Poznámka: Pro funkci _sinus_ byla použita knihovna [Javascript Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math). 
{/lang}

{lang=DE}
In diesem Beispiel wurde zuerst die Größe des `div`-Elementes durch Setzen der Höhe und Breite so verändert, dass es quadratisch ist.
Denn wir wollen, dass die Funktionsgraphen im richtigen Verhältnis angezeigt werden
(eine andere Möglichkeit wäre,
_keepAspectRatio_ in `initBoard()` zu verwenden).

Danach werden zwei Funktionen gezeichnet:
Um $\sin (x)$ zu zeichnen, verwenden wir _functiongraph_ als Objekttyp
`var graph1 = board.create('functiongraph', `.  
Was danach folgt, ist neu.
Betrachten wir den Ausdruck `[function(x){return Math.sin(x);},-Math.PI,Math.PI]` genauer.
Mit dem Typ _functiongraph_ haben wir JSXGraph mitgeteilt,
dass wir eine Funktion in einem gewissen Intervall zeichnen wollen.
Deshalb müssen wir nun die Funktion angeben, die gezeichnet werden soll. Dies geschieht durch
`function(x){return Math.sin(x);}`.

Hier nützen wir das JavaScript-Konzept einer *anonymen Funktion* durch Angabe von `function(x)` mit einem Parameter `x`.
Dieser wird von JSXGraph verwendet, um `x`-Werte aus dem Intervall zu übergeben, das wir mit dem zweiten und dritten
Element der Liste spezifizieren.
In unserem Fall sind die Intervallgrenzen `-Math.PI, Math.PI`.
Nun haben wir noch die JavaScript-Funktion zu definieren, die jeweils zu einem
gegebenem $x$ einen Wert (die $y$-Koordinate) zurückgibt.
Dies geschieht durch `{return Math.sin(x);}`. Wir verwenden den reservierten Ausdruck `return` gefolgt durch einen Funktionsausdruck, in unserem Fall
`Math.sin(x)`. Der Ausdruck wird durch `;}` beendet.

Im zweiten Funktionsgraph _graph2_ zeichnen wir die quadratische Funktion `{return x*x-2;}` im Intervall `-3, 3`. Zudem
verwenden wir wieder Attribute, die wir aber bereits alle aus den vorhergehenden Kapiteln kennen.

Beachte: Für die _Sinus_-Funktion verwenden wir das JavaScript [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)-Objekt.

Da die Verwendung einer JavaScript-Funktion `Math.sin()`nicht besonders komfortabel ist,
gibt es die Alternative, den Funktionsterm als String in der Form
`['sin(x)',-Math.PI,Math.PI]` anzugeben. Dann wird die JSXGraph-eigene Sprache *JessieCode* verwendet (siehe das Kapitel zu JessieCode),
die die übliche Mathematik-Schreibweise "versteht". Ein anderes Beispiel wäre `['x^3',-5,5]` als Alternative zu
`[function(x){return x*x*x;},-5,5]`.
{/lang}
