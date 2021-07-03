{lang=EN}
## Creating points
Points are one of the most basic objects in JSXGraph. We always create objects on the JSXGraph board, therefore we must use same
board variable for the construction of all objects that will be on board.
{/lang}

{lang=SI}
## Risanje točk
Točke so eni izmed najbolj osnovnih objektov v JSXGraphu. Objekte vedno ustvarimo na risalni površini. 
{/lang}

{lang=CZ}
## Vytváření bodů
Body jsou základními a nejjednoduššími objekty v JSXGraph. V tomto příkladu zakreslíme do nákresny dva body. 
{/lang}

{lang=DE}
## Punkte erzeugen

Punkte gehören zu den grundlegensten Objekten in JSXGraph.
Wir legen alle Objekte auf die Zeichenfläche (genannt "board"), deshalb verwenden wir für alle Objekte, die auf dieser Zeichenfläche
entstehen sollen, dieselbe Variable `board`.
{/lang}
```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 board.create('point',[-2,1]);
 var q = board.create('point',[3,0]);
</script>
```
<div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
 board.create('point',[-3,1]);
 var q = board.create('point',[3,0]);
</script>

{lang=EN}
Let us now observe `board.create('point',[-2,1]);`. Here we use variable `board` and call a method *create* which takes
two arguments. First argument is the type of the object and second the coordinates where this object should be. If we
define coordinates outside of the bounding box, the object will exist but won't be visible because it is outside visible
area of our drawing board.

Next line `var q = board.create('point',[3,0]);` is very similar to the previous line, with only one diference. We start
the line with `var q = ` which we use to store this object in variable *q*. This is good and necessary practice, because
in the constructions we often reference different object and define their relationships, which will be more apparent in following pages.


{/lang}

{lang=SI}


Opazujmo zapis `board.create('point',[-2,1]);`. Tukaj uporabimo spremenljivko `board` in kličemo metodo *create*, ki potrebuje dva argumenta.
Prvi je tip objekta, drugi pa položaj, kjer se naj ta objekt nahaja. Če definiramo položaj, ki je izven našega koordinatnega sistema, bo objekt sicer obstajal,
vendar ne bo viden na sliki. 

Naslednja vrstica `var q = board.create('point',[3,0]);` je podobna prejšnji, z eno razliko. Zapis smo začeli z `var q = `, kar pomeni,
da shranimo objekt v neko spremenljivko z imenom *q*. To je dobra praksa, saj se velikokrat v konstukcijah navezujemo na že prej definirane objekte, 
kar lahko storimo samo, če jih prej shranimo v spremenljivko. Primer te uporabe bo razložen v naslednjem poglavju. 


{/lang}

{lang=CZ}
Zaměřme se nyní na `board.create('point',[-2,1]);`. Zde využíváme proměnnou *board* a metodu *create*, která vyžaduje dva argumenty. Prvním argumentem určujeme, jaký typ objekt se má v nákresně vytvořit, což je v našem případě bod, *point*. Druhý argument určuje souřadnice, na kterých bude bod v nákresně sestrojen. Pokud použijeme souřadnice, které leží mimo námi nadefinovaný systém souřadnic, tak se bod stejně sestrojí. Vytvořený bod ale nebude na naší nákresně viditelný, neboť bude sestrojen mimo zobrazovanou plochu. Pohybem po nákresně pomocí zoomu a šipek v jejím pravém dolním rohu je však možné sestrojený bod objevit.

Další řádek `var q = board.create('point',[3,0]);` je velice podobný předchozí konstrukci pouze s jedním rozdílem. Naší konstrukci začínáme `var q = `. Toto přiřazení slouží obecně k ukládání objektů do proměnných. V naší ukázce sestrojený bod ukládáme do proměnné *q*.

Ukládání objektů do proměnných je dobrou a často nezbytnou praxí. V konstrukcích se budeme často odkazovat na existující objekty a definovat mezi nimi vztahy a to právě pomocí proměnných. Toto bude patrnější na následujících stránkách.
{/lang}
{lang=DE}
Sehen wir uns den Befehl `board.create('point',[-2,1]);` genauer an:
Wir verwenden die Variable `board` und rufen deren Methode *create* auf, die zwei Argumente hat.

Das erste Argument ist der Typ des Objekts, das wir anlegen wollen. Das zweite Argument legt fest wo das Objekt sein soll.
Wenn wir Koordinaten außerhalb der Zeichenfläche angeben, wird das Ojekt zwar existieren, aber nicht sichtbar sein.

Die nächste Programmzeile `var q = board.create('point',[3,0]);` ist der vorhergehenden sehr ähnlich - mit einem wesentlichen Unterschied.
Wir starten die Zeile mit `var q = `. Damit speichern wir dieses Objekt in der Variablen *q*.
Das ist bewährte und notwendige Praxis, denn in unseren Konstruktionen werden wir oft auf
bereits existierende Objekte
zurückgreifen und ihre gegenseitigen Abhängigkeiten festlegen.
Dies wird auf den folgenden Seiten klarer werden.
{/lang}