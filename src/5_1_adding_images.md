{lang=EN}
## Adding images

So far we have learned to create many different objects in JSXGraph. In this section we will learn how to include images from the internet onto 
our drawing board. Transformations can also be used on images, similarly to points or polygons. Let us look at the example below.
{/lang}

{lang=SI}
## Dodajanje slik

Do sedaj smo ustravili veliko različnih objektov v JSXGraphu. V tem razdelku se bomo naučili, kako na risalno površino vključiti sliko iz interneta. Na slikah
lahko uporabljamo tudi transformacije, podobno kot pri točkah ali poligonih. Poglejmo primer.
{/lang}

{lang=CZ}Adding images{/lang}

{lang=DE}Bilder einbinden{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:500px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, -5, 5, 5],
     keepAspectRatio:true, showCopyright:false, showNavigation:false, axis: true });
  var p = board.create('point',[-1,-1], {size:4, opacity:0.5});
  var urlImg = "https://jsxgraph.org/distrib/images/uccellino.jpg";
  var im1 = board.create('image',[urlImg, [0,1], [2,2] ]);
  var im2 = board.create('image',[urlImg, [function(){return p.X();},function(){return p.Y();}], [2,2]], { opacity: 0.6, rotate: 30 });
</script>
```


<div id="jxgbox" class="jxgbox" style="width:500px; height:500px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, -5, 5, 5],
     keepAspectRatio:true, showCopyright:false, showNavigation:false, axis: true });
  var p = board.create('point',[-1,-1], {size:4, opacity:0.5});
  var urlImg = "https://jsxgraph.org/distrib/images/uccellino.jpg";
  var im1 = board.create('image',[urlImg, [0,1], [2,2] ]);
  var im2 = board.create('image',[urlImg, [function(){return p.X();},function(){return p.Y();}], [2,2]], { opacity: 0.6, rotate: 30 });
</script>


{lang=EN}
We created a board and bounding box, added the coordinate system and create a point `p`. With the next line `var urlImg = "https://jsxgraph.org/distrib/images/uccellino.jpg";`
we saved the URL of our image in the variable `urlImg` for easier use in the next line. 

To create the image, we use `var im1 = board.create('image',[urlImg, [0,1], [2,2] ]);`. We can see that it takes a list of three parameters. Those are:
- URL of the image (we used the variable, but another way is to write `"https://jsxgraph.org/distrib/images/uccellino.jpg"`),
- coordinates of the lower left point of the image (`[0,1]`),
- width and height of the image (`[2,2]`).

All three parameters can be expressed as functions. In the next line `var im2 = board.create('image',[urlImg, [function(){return p.X();},function(){return p.Y();}], [2,2]], { opacity: 0.6, rotate: 30 });`
we started the same way, but bound the image to the point `p` using functions `function(){return p.X();}`and `function(){return p.Y()};`. That way if we move the point, the image 
moves with it. 

We also added some attributes `{opacity: 0.6, rotate: 30}`, the interesting one being rotation. This is similar to a transformation, but this type of rotation 
only rotates around the lower left point. So if we want to rotate the image around another point, we have to use transformations. For more, see [here.](https://jsxgraph.org/wiki/index.php?title=Images.)
{/lang}

{lang=SI}
Ustvarili smo površino, _bounding box_ in koordinatni sistem s točko `p`. Z vrstico `var urlImg = "https://jsxgraph.org/distrib/images/uccellino.jpg";`
smo shranili URL naslov slike v spremenljivko, ki nam bo pomagala v nadaljevanju. 

Za konstrukcije slike zapišemo `var im1 = board.create('image',[urlImg, [0,1], [2,2] ]);`. Vidimo, da smo zapisali seznam s tremi paramteri. To so:
- URL naslov (tukaj smo uporabili spremeljivko, lahko bi tudi zapisali `"https://jsxgraph.org/distrib/images/uccellino.jpg"`),
- koordinate spodnje leve točke slike (`[0,1]`),
- širina in višina slike (`[2,2]`).

Vsi parametri so lahko zapisani tudi kot funkcije. V naslednji vrstici `var im2 = board.create('image',[urlImg, [function(){return p.X();},function(){return p.Y();}], [2,2]], { opacity: 0.6, rotate: 30 });`
smo začeli podobno, ampak smo vezali sliko na točko `p` z ukazoma `function(){return p.X();}`and `function(){return p.Y()};`. Na ta način lahko s premikanjem točke
premaknemo celotno sliko. 

Dodali smo še dva atributa, to sta `{opacity: 0.6, rotate: 30}`, pri tem je bolj zanimiva rotacija. Ima podoben učinek kot transformacija, vendar gre tukaj
vedno za rotacijo okoli spodnje leve točke slike. Torej če želimo rotirati okoli katere druge točke, uporabimo transformacije. Za več primerov, glejte [tukaj.](https://jsxgraph.org/wiki/index.php?title=Images.)
{/lang}



