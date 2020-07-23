{lang=EN}
## Example: Regular polygons

**A Hexagon-Triangle Hinge.** In the diagram below, *Q* is the center of a regular hexagon with a vertex *B* at which it touches
 an equilateral triangle with center *R*. Let *P* be the midpoint of *AG*. Show that *RPQ* is a right angle.
 
 (Source: *Konhauser, J. D. E., Velleman, D., Wagon, S. Which Way Did the Bicycle Go? … and Other Intriguing Mathematical Mysteries. 
 The Mathematical association of America, Dolciani Mathematical Expositions – No. 18. 1996.*)
{/lang}

{lang=CZ}
## Příklad: Pravidelné mnohoúhelníky

**Pravidelný šestiúhelník a rovnostranný trojúhelník se společným vrcholem.** Na obrázku níže je bod *Q* středem 
pravidelného šestiúhelníku, který svůj vrchol *B* sdílí s rovnostranným trojúhelníkem, jehož středem je bod *R*. 
Středem úsečky *AG* je bod *P*. Dokažte, že úhel *RPQ* je pravý.
 
 (Zdroj: *Konhauser, J. D. E., Velleman, D., Wagon, S. Which Way Did the Bicycle Go? … and Other Intriguing Mathematical Mysteries. 
 The Mathematical association of America, Dolciani Mathematical Expositions – No. 18. 1996.*)
{/lang}

{lang=SI}
## Example: Regular polygons

**A Hexagon-Triangle Hinge.** In the diagram below, *Q* is the center of a regular hexagon with a vertex *B* at which it touches
 an equilateral triangle with center *R*. Let *P* be the midpoint of *AG*. Show that *RPQ* is a right angle.
 
 (Source: *Konhauser, J. D. E., Velleman, D., Wagon, S. Which Way Did the Bicycle Go? … and Other Intriguing Mathematical Mysteries. 
 The Mathematical association of America, Dolciani Mathematical Expositions – No. 18. 1996.*)
{/lang}



<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
        board.options.label.autoPosition = true;
        board.options.point.size = 1;
	var A = board.create('point', [-1.2, -2], {color: 'orange', size: 4});
	var B = board.create('point', [0.25, -0.5], {color: 'orange', size: 4});
	var hexagon = board.create('regularpolygon', [A,B, 6]);
	var D = hexagon.vertices[3];
    var Q = board.create('circumcenter', [A, B, D], {name: 'Q'});
    var G = board.create('point', [3, -2], {name:'G', color: 'orange', size: 4});
    var rtr = board.create('regularpolygon', [B, G, 3]);
    var H = rtr.vertices[2];
    var R = board.create('circumcenter', [B, G, H], {name: 'R'});
    var tr = board.create('polygon', [A, G, B], {color: 'pink'});
    var P = board.create('midpoint', [A, G], {name: 'P'});
    var q = board.create('line', [P, Q], {name: 'q', withLabel: true});
    var r = board.create('line', [P, R], {name: 'r', withLabel: true});
    var angle = board.create('angle', [R, P, Q], {radius:0.4, color:'red', fillOpacity: 0, name:'&varphi;'});
    var text = board.create('text', [-3, -2.5,
                function () {return '&varphi; = ' + (angle.Value() * 180 / Math.PI).toFixed(2) + '&deg;';}
                    ]);
</script>
{lang=EN}
The solution to the example, i.e. proving the given statement, is left to the reader. 
Here we will deal only with the programming of the illustrative dynamic figure. 
{/lang}

{lang=CZ}
Řešení příkladu, tj. důkaz uvedeného tvrzení, přenecháváme čtenáři. 
Zde se budeme věnovat pouze programování dynamického obrázku ilustrujícího daný problém. 
{/lang}

{lang=SI}
The solution to the example, i.e. proving the given statement, is left to the reader. 
Here we will deal only with the programming of the illustrative dynamic figure. 
{/lang}


{lang=EN}
*Programming:*

First, we define the Bounding box as follows:
{/lang}

{lang=CZ}
*Programování:*

Nejprve musíme definovat parametry nákresny:
{/lang}

{lang=SI}
*Programming:*

First, we define the Bounding box as follows:
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
</script>
```

{lang=EN}
There will be eleven points in the diagram, namely vertices of polygons, their centers and a midpoint. 
To set their appearance we use two general options, as follows. First, to get the best possible positions 
of their labels, with as few overlaps with image lines as possible, we use the [`autoPosition = true`](https://jsxgraph.uni-bayreuth.de/docs/symbols/Label.html#autoPosition) option (it works in v1.1+):
{/lang}


{lang=CZ}
Obrázek obsahuje celkem jedenáct bodů spolu s jejich popisky, konkrétně se jedná o vrcholy mnohoúhelníků, jejich středy a střed úsečky *AG*.
Pro nastavení jejich zobrazení použijeme následující dvě obecné volby. Jednak, pro co nejlepší zobrazení popisků bodů, s minimem překryvů
s čarami obrázku, použijeme volbu [`autoPosition = true`](https://jsxgraph.uni-bayreuth.de/docs/symbols/Label.html#autoPosition) (dostupná ve verzi v1.1+):
{/lang}


{lang=SI}
There will be eleven points in the diagram, namely vertices of polygons, their centers and a midpoint. 
To set their appearance we use two general options, as follows. First, to get the best possible positions 
of their labels, with as few overlaps with image lines as possible, we use the [`autoPosition = true`](https://jsxgraph.uni-bayreuth.de/docs/symbols/Label.html#autoPosition) option (it works in v1.1+):
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
</script>
```

{lang=EN}
Then, we set the basic point size to 1:
{/lang}

{lang=CZ}
Jednak nastavíme základní velikost bodů na 1:
{/lang}

{lang=SI}
Then, we set the basic point size to 1:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
</script>
```
{lang=EN}
*Note:* In this way we can also set other common attributes of objects in the board, 
for example the appearance of points using the command `board.options.point.face = '[]';` etc.
{/lang}

{lang=CZ}
*Poznámka:* Tímto způsebem můžeme nastavit další společné atributy objektů v nákresně, 
např. podobu symbolu bodu použitím příkazu `board.options.point.face = '[]';` atd.
{/lang}

{lang=SI}
*Note:* In this way we can also set other common attributes of objects in the board, 
for example the appearance of points using the command `board.options.point.face = '[]';` etc.
{/lang}


{lang=EN}
To obtain the regular hexagon we first construct points *A* and *B*, its future two adjacent vertices, 
and then color them orange to highlight them as movers:  
{/lang}

{lang=CZ}
Pro konstrukci pravidelného šestiúhelníku nejprve sestrojíme body *A* a *B*, jeho budoucí sousedící vrcholy, 
a obarvíme je oranžově, pro zdůraznění toho, že se jedná o volné body: 
{/lang}

{lang=SI}
To obtain the regular hexagon we first construct points *A* and *B*, its future two adjacent vertices, 
and then color them orange to highlight them as movers: 
{/lang}





```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
</script>
```

{lang=EN}
Then, using these points as the input parameters to the [regularpolygon](https://jsxgraph.org/docs/symbols/RegularPolygon.html) object, 
we create the desired hexagon:  
{/lang}

{lang=CZ}
Poté použijeme tyto body jako vstupní parametry objektu [regularpolygon](https://jsxgraph.org/docs/symbols/RegularPolygon.html) pro vytvoření 
požadovaného šestiúhelníku:
{/lang}

{lang=SI}
Then, using these points as the input parameters to the [regularpolygon](https://jsxgraph.org/docs/symbols/RegularPolygon.html) object, 
we create the desired hexagon:
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
</script>
```

{lang=EN}
The center of the regular polygon is the center of its circumcircle, therefore we have to identify at least three vertices of the hexagon to determine its center. 
We chose *D*, the fourth vertex from *A* (index number is 3 because the software starts to count from 0)   
{/lang}

{lang=CZ}
Střed pravidelného šestiúhelníku je zároveň středem jemu opsané kružnice. Pro jeho určení proto potřebujeme
identifikovat alespoň tři vrcholy šestiúhelníku. 
K vrcholům *A* a *B* přidáme ještě bod *D*, v&nbsp;pořadí čtvrtý vrchol od *A* 
(protože program začíná indexovat od 0, je indexem tohoto vrcholu číslo 3)  
{/lang}

{lang=SI}
The center of the regular polygon is the center of its circumcircle, therefore we have to identify at least three vertices of the hexagon to determine its center. 
We chose *D*, the fourth vertex from *A* (index number is 3 because the software starts to count from 0)  
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
</script>
```

{lang=EN}
to determine the center *Q* of the regular hexagon as the center of the circumcircle to the triangle *ABD*:  
{/lang}

{lang=CZ}
pro určení středu pravidelného šestiúhelníku *Q* jako středu kružnice opsané trojúhelníku *ABD*:   
{/lang}

{lang=SI}
to determine the center *Q* of the regular hexagon as the center of the circumcircle to the triangle *ABD*: 
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
var Q = board.create('circumcenter',  [A, B, D], {name:'Q'});
</script>
```

{lang=EN}
In an analogous way, we then create an equilateral triangle *BGH* with center *N*:  
{/lang}

{lang=CZ}
Analogicky sestrojíme rovnostranný trojúhelník *BGH* se středem *N*:  
{/lang}

{lang=SI}
In an analogous way, we then create an equilateral triangle *BGH* with center *N*:  
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
var Q = board.create('circumcenter',  [A, B, D], {name:'Q'});
var G = board.create('point', [3,-2],  {name: 'G', color: 'orange' , size: 4 });
var rtr = board.create('regularpolygon',  [B, G, 3]);
var R = board.create('circumcenter',  [B, G, H], {name: 'R'});
</script>
```

{lang=EN}
Then, we add the triangle *AGB*, the midpoint *P* of its side *AB* and the lines *PQ* and *PR*, 
which we have to prove are always perpendicular:  
{/lang}

{lang=CZ}
Nakonec doplníme trojúhelník *AGB*, střed jeho strany *AB* bod *P* a přímky *PQ* a *PR*, 
jejichž kolmost je předmětem důkazu: 
{/lang}

{lang=SI}
Then, we add the triangle *AGB*, the midpoint *P* of its side *AB* and the lines *PQ* and *PR*, 
which we have to prove are always perpendicular:  
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
var Q = board.create('circumcenter',  [A, B, D], {name:'Q'});
var G = board.create('point', [3,-2],  {name: 'G', color: 'orange' , size: 4 });
var rtr = board.create('regularpolygon',  [B, G, 3]);
var R = board.create('circumcenter',  [B, G, H], {name: 'R'});
var tr = board.create('polygon',  [A, G, B], {color: 'pink'});
var P = board.create('midpoint', [A, G], {name: 'P'});
var H = rtr.vertices[2];
var q = board.create('line', [P, Q], {name: 'q', withLabel: true});
var r = board.create('line', [P, R], {name: 'r', withLabel: true});
</script>
```

{lang=EN}
Finally, we can identify the angle *RPQ*, the rightness of which we have to prove. 
JSXGraph recognizes it as a right angle, so it marks it accordingly, as can be seen in figure above:  
{/lang}

{lang=CZ}
Nakonec můžeme zobrazit předmětný úhel *RPQ*. JSXGraph ho identifikuje jako pravý úhel a proto ho příslušným způsobem označí,
jak vidíme na obrázku výše:  
{/lang}

{lang=SI}
Finally, we can identify the angle *RPQ*, the rightness of which we have to prove. 
JSXGraph recognizes it as a right angle, so it marks it accordingly, as can be seen in figure above:   
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
var Q = board.create('circumcenter',  [A, B, D], {name:'Q'});
var G = board.create('point', [3,-2],  {name: 'G', color: 'orange' , size: 4 });
var rtr = board.create('regularpolygon',  [B, G, 3]);
var R = board.create('circumcenter',  [B, G, H], {name: 'R'});
var tr = board.create('polygon',  [A, G, B], {color: 'pink'});
var P = board.create('midpoint', [A, G], {name: 'P'});
var H = rtr.vertices[2];
var q = board.create('line', [P, Q], {name: 'q', withLabel: true});
var r = board.create('line', [P, R], {name: 'r', withLabel: true});
var angle = board.create('angle', [R, P, Q], {radius: 0.4, color: 'red', fillOpacity: 0 , name:'&varphi;' });
</script>
```

{lang=EN}
If this symbolic expression of the right angle is not enough for us, 
we can enter the code to display the size of the respective angle: 
{/lang}

{lang=CZ}
Pokud nám takovéto symbolické vyznačení pravého úhlu nepostačuje, můžeme použít následující kód pro zobrazení
číselné hodnoty jeho velikosti:  
{/lang}

{lang=SI}
If this symbolic expression of the right angle is not enough for us, 
we can enter the code to display the size of the respective angle:  
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 3, 4, -3]});
			board.options.label.autoPosition = true;
			board.options.point.size = 1;
var A = board.create('point' , [-1.2,-2], {color:  'orange' , size: 4 });
var B = board.create('point',  [0.25,-0.5], {color:  'orange' , size: 4 });
var hexagon = board.create('regularpolygon', [A,B, 6]);
var D = hexagon.vertices[3];
var Q = board.create('circumcenter',  [A, B, D], {name:'Q'});
var G = board.create('point', [3,-2],  {name: 'G', color: 'orange' , size: 4 });
var rtr = board.create('regularpolygon',  [B, G, 3]);
var R = board.create('circumcenter',  [B, G, H], {name: 'R'});
var tr = board.create('polygon',  [A, G, B], {color: 'pink'});
var P = board.create('midpoint', [A, G], {name: 'P'});
var H = rtr.vertices[2];
var q = board.create('line', [P, Q], {name: 'q', withLabel: true});
var r = board.create('line', [P, R], {name: 'r', withLabel: true});
var angle = board.create('angle', [R, P, Q], {radius: 0.4, color: 'red', fillOpacity: 0 , name:'&varphi;' });
			board.create('text', [-3, -3, 
				function () {return '&theta;_1 = ' + (arc2.Value() * 180 /Math.PI).toFixed(1) + '&deg;';}
				]); 
</script>
```

{lang=EN}
The task solution code is now complete.
{/lang}

{lang=CZ}
Kód uvedeného dynamického obrázku je nyní kompletní.
{/lang}

{lang=SI}
The task solution code is now complete.
{/lang}