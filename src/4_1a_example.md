{lang=EN}
## Example: Proof without words

**Area of a parallelogram.** The area of a parallelogram equals its base multiplied by its height. Prove it!

To solve the example we will use a dynamic [proof without words](https://en.wikipedia.org/wiki/Proof_without_words), 
see figure below. By this means we will show that the area of a parallelogram equals the area of a rectangle whose 
base and height are the same as that of the parallelogram. 
{/lang}

{lang=SI}
## Primer: dokaz brez besed

**Površina paralelograma.** Površina paralelograma je enaka produktu dolžine osnovnice in njegove višine. Dokažite!

Za rešitev problema bomo uporabili metodo [dokaz brez besed](https://en.wikipedia.org/wiki/Proof_without_words).
To bomo storili tako, da bomo pokazali, da je površina paralelograma enaka površini pravokotnika, ki ima eno stranico enako osnovnici paralelograma, druga stranica
pa je enaka višini paralelograma.
{/lang}

{lang=CZ}
## Příklad: Důkaz beze slov

**Obsah rovnoběžníku.** Obsah rovnoběžníku je roven součinu velikostí jeho základny a výšky na tuto základnu. Dokažte!

Úkol vyřešíme předložením dynamického [důkazu beze slov](https://en.wikipedia.org/wiki/Proof_without_words), 
viz obrázek níže. Jeho prostřednictvím prokážeme, že obsah rovnoběžníku je stejný jako obsah obdélníku, jehož 
základna a výška jsou stejné jako u rovnoběžníku.
{/lang}

<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>

<script>
	var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1, 4, 7, -1]});
    // The fixed parallelogram ABCD
    var A = board.create('point', [0,0], {name:'A', fixed:true, size:1});
    var B = board.create('point', [4,0], {name:'B', fixed:true, size:1});
    var D = board.create('point', [2,3], {name:'D', fixed:true, size:1});
    var C = board.create('parallelpoint', [A, B, D], {name:'C', size:1});
    var par = board.create('polygon', [A, B, C, D], {color:'blue', fillOpacity: 0});
    // Point Q, the foot of the line passing through D perpendicular to AB
    var Q = board.create('point', [
                    function(){ return D.X(); },
                    function(){ return A.Y();
            }], {name:'Q', visible:false});
	// The trapezoid QBCD
    var tra = board.create('polygon', [Q, B,C,D], {color:'blue', withLines:false, fillOpacity: 0.3});		
    // Right triangle MNP, the moving object
    var M = board.create('point', [0,0], {name:'M', visible:false});
    var N = board.create('point', [function() {return M.X()+2;}, function(){return M.Y();}], {name:'N', visible:false})
    var P = board.create('point', [function() {return M.X()+2;}, function(){return M.Y()+3;}], {name:'P', visible:false})
    var tri = board.create('polygon', [M, N, P], {color:'blue', withLines:false, fillOpacity: 0.3});  
    // Buttons for moving the triangle MNP back and forth
    var button1 = board.create('button', [-0.5,3, 'Forth', function(){ M.moveTo([4,0], 1000); }]);
    var button2 = board.create('button', [-0.5,2.5, 'Back', function(){ M.moveTo([0,0], 1000); }]);
</script>

{lang=EN}
*Programming:*

First, we define dimensions, width and height, of the drawing area setting the corresponding properties of the ``div`` element:
{/lang}

{lang=SI}
*Programiranje:*

Najprej definiramo dimenzije risalne površine z nastavitvijo lastnosti ``div`` elementa:
{/lang}

{lang=CZ}
*Programování:*

Nejprve stanovíme rozměry, tj. šířku a výšku, nákresny přiřazením náležitých hodnot odpovídajícím atributům prvku ``div``: 
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div> 
```
{lang=EN}
Subsequently, at the beginning of the code bounded by the tags _\<script\>, \</script\>_, 
we determine the Bounding box as follows:
{/lang}

{lang=SI}
Nadalje določimo naš _bounding box_ tako:
{/lang}

{lang=CZ}
Následně, na začátku kódu vymezeného tagy _\<script\>, \</script\>_, 
definujeme rozsahy souřadnicových os zavedených v nákresně:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1, 4, 7, -1]});
</script>
```

{lang=EN}
As an initial sketch, the foundation of the dynamic figure, we draw the fixed parallelogram *ABCD* 
that is visible only by its boundary, having no filling:
{/lang}

{lang=SI}
Kot osnovo naše dinamične slike narišemo paralelogram *ABCD*, ki ima vidne robove, v notranjosti pa je prazen:
{/lang}

{lang=CZ}
Jako výchozí motiv, který se stane základem dynamického obrázku, sestrojíme pevný (tj. nepohyblivý) 
rovnoběžník *ABCD*, bez výplně, zobrazený pouze svými stranami:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1, 4, 7, -1]});
	var A = board.create('point', [0,0], {name:'A', fixed:true, size:1});
    var B = board.create('point', [4,0], {name:'B', fixed:true, size:1});
    var D = board.create('point', [2,3], {name:'D', fixed:true, size:1});
    var C = board.create('parallelpoint', [A, B, D], {name:'C', size:1});
    var par = board.create('polygon', [A, B, C, D], {color:'blue', fillOpacity: 0});
</script>
```

{lang=EN}
Then, we determine point *Q*, invisible in the figure, the foot of the line passing through *D* perpendicular to *AB*, 
and use it to define a trapezoid *QBCD* with blue filling, an invariable part of the intended dynamic figure:
{/lang}

{lang=SI}
Potem določimo točko *Q* (ki bo na sliki nevidna) kot nožišče pravokotnice na osnovnico skozi točko *D*. S tem lahko določimo trapez *QBCD* z modrim polnilom:
{/lang}

{lang=CZ}
Jako patu kolmice z vrcholu *D* na přímku *AB* určíme bod *Q*, který je v dynamickém obrázku skryt. 
Slouží jako čtvrtý vrchol potřebný pro sestrojení modře vybarveného lichoběžníku *QBCD*,
který je nehybnou částí vytvářeného dynamického vizuálního důkazu:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1, 4, 7, -1]});
	var A = board.create('point', [0,0], {name:'A', fixed:true, size:1});
    var B = board.create('point', [4,0], {name:'B', fixed:true, size:1});
    var D = board.create('point', [2,3], {name:'D', fixed:true, size:1});
    var C = board.create('parallelpoint', [A, B, D], {name:'C', size:1});
    var par = board.create('polygon', [A, B, C, D], {color:'blue', fillOpacity: 0});
	var Q = board.create('point', [
                    function(){ return D.X(); },
                    function(){ return A.Y();
            }], {name:'Q', visible:false});
	var tra = board.create('polygon', [Q, B,C,D], {color:'blue', withLines:false, fillOpacity: 0.3});
</script>
```
{lang=EN}
To complete the parallelogram, we create the right triangle *MNP*, again filled with blue, 
the moving part of the visual proof without words. To allow its movement the vertices *M*, *N*, *P* will 
be independent on the other objects of the figure:
{/lang}

{lang=SI}
Da dopolnimo trapez do paralelograma, ustvarimo še pravokotni trikotnik *MNP*, spet z modrim polnilom. To bo gibljivi del našega dokaza, zato morajo njegova
oglišča biti neodvisna od preostalih objektov na sliki. 
{/lang}

{lang=CZ}
Pro dokončení výplně rovnoběžníku vytvoříme pravoúhlý trojúhelník *MNP*, opět modře vybarvený, který bude 
pohyblivou částí vizuálního dynamického důkazu beze slov. Aby se mohl hýbat, vytvoříme jeho vrcholy *M*, *N*, *P*
jako body nezávislé na ostatních prvcích obrázku: 
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1, 4, 7, -1]});
	var A = board.create('point', [0,0], {name:'A', fixed:true, size:1});
    var B = board.create('point', [4,0], {name:'B', fixed:true, size:1});
    var D = board.create('point', [2,3], {name:'D', fixed:true, size:1});
    var C = board.create('parallelpoint', [A, B, D], {name:'C', size:1});
    var par = board.create('polygon', [A, B, C, D], {color:'blue', fillOpacity: 0});
	var Q = board.create('point', [
                    function(){ return D.X(); },
                    function(){ return A.Y();
            }], {name:'Q', visible:false});
	var tra = board.create('polygon', [Q, B,C,D], {color:'blue', withLines:false, fillOpacity: 0.3});
	var M = board.create('point', [0,0], {name:'M', visible:false});
    var N = board.create('point', [function() {return M.X()+2;}, function(){return M.Y();}], {name:'N', visible:false})
    var P = board.create('point', [function() {return M.X()+2;}, function(){return M.Y()+3;}], {name:'P', visible:false})
    var tri = board.create('polygon', [M, N, P], {color:'blue', withLines:false, fillOpacity: 0.3});
</script>
```

{lang=EN}
Finally, we define two buttons to control the movement of the triangle *MNP* back and forth:
{/lang}

{lang=SI}
Nato definiramo dva gumba, ki bosta premikala trikotnik *MNP* naprej ali nazaj:
{/lang}

{lang=CZ}
Nakonec vytvoříme dvě tlačítka pro ovládání pohybu pravoúhlého trojúhelníku *MNP* tam a zpět:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:250px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1, 4, 7, -1]});
	var A = board.create('point', [0,0], {name:'A', fixed:true, size:1});
    var B = board.create('point', [4,0], {name:'B', fixed:true, size:1});
    var D = board.create('point', [2,3], {name:'D', fixed:true, size:1});
    var C = board.create('parallelpoint', [A, B, D], {name:'C', size:1});
    var par = board.create('polygon', [A, B, C, D], {color:'blue', fillOpacity: 0});
	var Q = board.create('point', [
                    function(){ return D.X(); },
                    function(){ return A.Y();
            }], {name:'Q', visible:false});
	var tra = board.create('polygon', [Q, B,C,D], {color:'blue', withLines:false, fillOpacity: 0.3});
	var M = board.create('point', [0,0], {name:'M', visible:false});
    var N = board.create('point', [function() {return M.X()+2;}, function(){return M.Y();}], {name:'N', visible:false})
    var P = board.create('point', [function() {return M.X()+2;}, function(){return M.Y()+3;}], {name:'P', visible:false})
    var tri = board.create('polygon', [M, N, P], {color:'blue', withLines:false, fillOpacity: 0.3});
	var button1 = board.create('button', [-0.5,3, 'Forth', function(){ M.moveTo([4,0], 1000); }]);
    var button2 = board.create('button', [-0.5,2.5, 'Back', function(){ M.moveTo([0,0], 1000); }]);
</script>
```

{lang=EN}
The task solution code is now complete.
{/lang}

{lang=SI}
Koda dokaza je s tem končana.
{/lang}

{lang=CZ}
Kód řešení úlohy je nyní kompletní.
{/lang}
