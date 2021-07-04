{lang=EN}
## Transformations

In JSXGraph it is possible to apply a plane projective transformation to elements using a 3x3 matrix to define the specific transformation. To make life easier
JSXGraph has some standard trasformations predefined. Some of those are:
- Translation
- Rotation
- Scaling
- Reflection

Translation moves the selected object in the given direction. Scaling increases or decreases the size of our object and rotation rotates it. We will
demonstrate some of their uses by constructing a square that can rotate around one vertex. 
{/lang}

{lang=SI}
## Transformacije

V JSXGraphu je možno vpeljati transformacije ravnine na elemente z uporabo matrike velikosti 3x3. Da je postopek malo lažji, ima JSXGraph nekatere standardne 
transformacije že definirane. Nekatere izmed teh so:
- Translacija
- Rotacija
- Razteg
- Zrcaljenje

Translacija premakne objekt v podani smeri. Razteg poveča ali zmanjša objekt, rotacija pa ga zavrti okoli točke za nek kot. Prikazali bomo njihovo uporabo tako, 
da bomo konstruirali kvadrat, ki se lahko vrti okoli enega svojega oglišča. 
{/lang}
{lang=CZ}
Transformations
{/lang}



```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:500px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 4, 4, -4],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var s = board.create('slider', [[-2,-2],[2,-2],[0,0,2*Math.PI]],{name:'angle'});
 var A = board.create('point', [-1,0], {name:'Drag me', style:5});
 var right = board.create('transform', [2,0], {type:'translate'});
 var up = board.create('transform', [0,2], {type:'translate'});
 var B = board.create('point', [A,right], {name: 'B', style:7});
 var C = board.create('point', [A,[right,up]], {name: 'C', style:7});
 var D = board.create('point', [A,up], {name: 'D', style:7});
 var sq = board.create('polygon', [A,B,C,D]);
 var rot = board.create('transform', [function(){return s.Value();},A], {type:'rotate'});
 rot.bindTo([B,C,D]);
</script>
```
<div id="jxgbox" class="jxgbox" style="width:500px; height:500px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-4, 4, 4, -4],keepAspectRatio:true, showCopyright:false, showNavigation:false });
 var s = board.create('slider', [[-2,-2],[2,-2],[0,0,2*Math.PI]],{name:'angle'});
 var A = board.create('point', [-1,0], {name:'Drag me', style:5});
 var right = board.create('transform', [2,0], {type:'translate'});
 var up = board.create('transform', [0,2], {type:'translate'});
 var B = board.create('point', [A,right], {name: 'B', style:7});
 var C = board.create('point', [A,[right,up]], {name: 'C', style:7});
 var D = board.create('point', [A,up], {name: 'D', style:7});
 var sq = board.create('polygon', [A,B,C,D]);
 var rot = board.create('transform', [function(){return s.Value();},A], {type:'rotate'});
 rot.bindTo([B,C,D]);
</script>



{lang=EN}
Let's now look at the code. The first steps are standard, we create a board and a a slider named 'angle' with values from 0 to 2$\pi$, that we can later use to
rotate the square by 360°. Then we create a point called 'Drag me', from which we will construct the other three points of a square. 

The next two lines `var right = board.create('transform', [2,0], {type:'translate'});` and `var up = board.create('transform', [0,2], {type:'translate'});`
create our first transformations. The first parameter of any thansformation is the text `'transform'` and the last parameter is always `{type:''}`. The
second parameter is based on the type of our transformation. In the case of a translation, we need to input a vector `[x,y]` with either constants or functions as the 
input. We defined ours with directions `[0,2]`, meaning movement of a point 2 units to the right, and `[2,0]`; moving 2 units up. Now we can construct the
rest of our square:

`var B = board.create('point', [A,right], {name: 'B', style:7});`\
`var C = board.create('point', [A,[right,up]], {name: 'C', style:7});`\
`var D = board.create('point', [A,up], {name: 'D', style:7});`

We can see that all three points are constructed from the starting point `A` using the `up` and `right` translations. We do this with `[A, up]` or `[A, right]`.
So to create a new point, we have to input the starting position and then the desired transformation. If we use more that one transformation, we can do this 
with `[A,[right,up]]`. We have created 4 points that form a square with the side length 2. Now we just create a polygon `var sq` using those points. 

Next we need to create a rotation. We do this with `var rot = board.create('transform', [function(){return s.Value();},A], {type:'rotate'});`. 
We can see that the first and last parameters are similar to the translations, the only difference is of course the `type`. Since this is a rotation, we 
have to input the angle and center of the rotation. The input is always in the form of `[angle, point]`. We do this with `[function(){return s.Value();},A]`. 
Notice, that the first parameter is not a constant, but rather a function returning the value of our slider. This way we can influence the angle of the rotation, 
and the center of the rotation is point `A`. 

Lastly we have to connect our rotation to the square. This will ensure that all point of the square are moving at the same time and at the same angle. We do this 
with the command `rot.bindTo([B,C,D]);`. Our transformation is now bound to the points `B,C,D` (since `A` is the center of the rotation it does not move, so we 
dont need to bind it). 

For information on other transformations see [_here_](https://jsxgraph.org/docs/symbols/Transformation.html).
{/lang}

{lang=SI}
Poglejmo sedaj konstrukcijo. Prvi koraki so že standardni, ustvarimo risalni prostor in na njem drsnik z imenom 'angle' z vrednostmi od 0 do 2$\pi$, s katerim 
bomo izvajali rotacijo. Potem dodamo točko z imenom 'Drag me', iz katere bomo s pomočjo translacij konstruirali kvadrat.

Naslednji dve vrstici `var right = board.create('transform', [2,0], {type:'translate'});` in `var up = board.create('transform', [0,2], {type:'translate'});`
definirata naši prvi transformaciji. Prvi parameter katerekoli transformacije je tekst `'transform'`, zadnji pa je vedno `{type:''}`. TheDrugi parametri so
odvisni od tipa transformacije. V primeru translacije moramo podati vektor oblike `[x,y]`, ki lahko vsebuje konstantne vrednosti, lahko pa ima koordinate
izražene s funkcijami. Mi smo definirali smeri kot `[0,2]`, torej premik za dva v desno in `[2,0]`, torej za 2 gor. Zdaj konstruiramo preostanek kvadrata:

`var B = board.create('point', [A,right], {name: 'B', style:7});`\
`var C = board.create('point', [A,[right,up]], {name: 'C', style:7});`\
`var D = board.create('point', [A,up], {name: 'D', style:7});`

Vidimo, da so vse tri točke dobljene iz začetne točke `A` z uporabo `up` in `right` translacij. To naredimo z zapisom `[A, up]` ali`[A, right]`.
Torej moramo za konstrukcijo nove točke zapisati začetno točko in transformacijo. Če uporabimo več transformacij, jih zapišemo v seznam kot `[A,[right,up]]`. 
Ker smo dobili 4 točke, ki so oglišča kvadrata s stranico 2, lahko definiramo 4-kotnik `var sq`.

Nato moramo definirati rotacijo `var rot = board.create('transform', [function(){return s.Value();},A], {type:'rotate'});`. 
Prvi in zadnji parameter sta podobna kot prej, le da smo uporabili tip `'rotate'`. Pri rotaciji sta potrebna center vrtenja in kot vrtenja v obliki `[kot, točka]`. 
V našem primeru to pomeni `[function(){return s.Value();},A]`. 
Opazimo, da prvi parameter ni konstanta, ampak funkcija, ki vrne vrednost drsnika. Na ta način lahko uporabnik vpliva na vrtenje, središče rotacije pa je točka `A`.

Za konec moramo še povezati rotacijo s kvadratom. S tem bomo poskrbeli, da se vse točke kvadrata premikajo sočasno in za isti kot. To storimo z ukazom 
`rot.bindTo([B,C,D]);`. Transformacija je sedaj vezana na točke `B,C,D` (ker je `A` središče vrtenja, se ne premika in ga zato ni potrebno vezati na rotacijo). 

Za informacije o ostalih transformacijah glej [_tukaj_](https://jsxgraph.org/docs/symbols/Transformation.html).
{/lang}



