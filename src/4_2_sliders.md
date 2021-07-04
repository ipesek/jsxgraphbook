{lang=EN}
## Sliders

Sliders can be used in various settings, where we want the users to tinker with the values of some variable. In our example
we will use a quadratic function.
{/lang}

{lang=SI}
## Drsniki

Drsniki so koristen dodatek, kadar želimo, da uporabnik sam spreminja vrednosti objektov na sliki. V našem primeru bomo uporabili drsnike na grafu kvadratne funkcije.
{/lang}

{lang=CZ}
## Posuvníky

Posuvník (_slider_) můžeme použít v různých situacích, ve kterých chceme, aby měl uživatel možnost bezprostředně měnit 
hodnotu nějaké proměnné. Pro ukázku použití posuvníků jsme zvolili náležitou úpravu dříve uvedeného příkladu s kvadratickou funkcí.
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:300px; height:300px; margin:auto"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-8, 8, 8, -8], axis:true,  showCopyright:false, showNavigation:false });
 var a = board.create('slider', [[-7.5, -3], [-4,-3], [-3, 1, 3]], {name:'a', snapWidth: 0.1});
 var c = board.create('slider', [[-7.5, -5], [-4,-5], [-1, 1, 4]], {name:'c',snapWidth: 1});
 var graph2 = board.create('functiongraph', [function(x){return a.Value()*x*x + c.Value();}, -3, 3]);
 var text = board.create('text',[-6,6,function(){return a.Value().toFixed(2)+'\\times x^2'+c.Value()}]);
</script>
```

<div id="jxgbox" class="jxgbox" style="width:300px; height:300px; margin:auto"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-8, 8, 8, -8], axis:true,  showCopyright:false, showNavigation:false });
 var a = board.create('slider', [[-7.5, -3], [-4,-3], [-3, 1, 3]], {name:'a', snapWidth: 0.1});
 var c = board.create('slider', [[-7.5, -5], [-4,-5], [-1, 1, 4]], {name:'c',snapWidth: 1});
 var graph2 = board.create('functiongraph', [function(x){return a.Value()*x*x + c.Value();}, -3, 3]);
</script>

{lang=EN}
We extended the example with two sliders which now control the quadratic function. But first let us look closer on how we
created first _slider_: `var a = board.create('slider', [[-7.5, -3], [-4,-3], [-3, 1, 3]], {name:'a', snapWidth: 0.1});`

To create a slider we need to provide following parameters:
* coordinates of the first point of the slider, e.g. `[-7.5, -3]`
* coordinates of the last point of the slider, e.g. `[-4,-3]`
* values of the slider as a list `[min, start, max]`, e.g. `[-3, 1, 3]`.

Here we also used atribute _snapWidth_ which tells JSXGraph how fine the steps of the slider should be. Second slider is generated 
in similar way, except we set the attribute _snapWidth_ to $1$ to generate only integer values.

In last line we now used the values from both sliders and extended our quadratic function with `return a.Value()*x*x + c.Value()`.
We can see, that to get the value of the slider we used the variable name and method _Value()_ e.g. `a.Value()`. 

Now the quadratic function is not fixed with the values but can be dynamically changed with the user interaction.

{/lang}

{lang=SI}

Ustvarili smo dva drsnika, ki nadzirata vrednosti v kvadratni funkciji. Poglejmo prvega: 
`var a = board.create('slider', [[-7.5, -3], [-4,-3], [-3, 1, 3]], {name:'a', snapWidth: 0.1});`

Zapisati smo morali naslednje parametre:
* koordinate začetka drsnika, torej `[-7.5, -3]`,
* koordinate konca drsnika, torej `[-4,-3]`,
* vrednosti na drsniku v seznamu oblike `[min, začetek, max]`, torej `[-3, 1, 3]`.

Uporabili smo še atribut _snapWidth_, ki pove JSXGraphu kako fini naj bodo premiki po drsniku. Drugi drsnik je konstruiran na podoben način, le 
da smo pri atributu _snapWidth_ uporabili vrednost $1$, kar pomeni, da se bo drsnik premikal samo po celih številih (bolj grobo). 

V zadnji vrstici smo povezali podatke iz drsnikov z grafom kvadratne funkcije s pomočjo metode _Value()_, ki vrne trenutno vrednost na drsniku. Funkcija potem
izgleda tako `function(x){return a.Value()*x*x + c.Value();`.

Zdaj funkcija ni fiksna, ampak se njene vrednosti spreminjajo glede na drsnika. 

{/lang}

{lang=CZ}
Obrázek jsme doplnili dvěma posuvníky, kterými ovládáme koeficienty $a$, $c$ dané kvadratické funkce.
Pojďme se podrobně podívat na to, jak jsme vytvořili první _posuvník_ (_slider_): `var a = board.create('slider', [[-7.5, -3], [-4,-3], [-3, 1, 3]], {name:'a', snapWidth: 0.1});`

Pro vytvoření posuvníku potřebujeme definovat následující parametry:
* souřadnice počátečního bodu posuvníku, např. `[-7.5, -3]`,
* souřadnice koncového bodu posuvníku, např. `[-4,-3]`,
* určující hodnoty posuvníku formou seznamu `[min, start, max]`, např. `[-3, 1, 3]`.

V příkladu jsme dále použili atribut _snapWidth_, který stanoví, jak jemný má být krok posuvníku. Druhý posuvník je vytvořen
podobným způsobem, kromě toho, že jsme atributu _snapWidth_ přiřadili hodnotu $1$, aby nabýval pouze celočíselných hodnot.

V posledním řádku kódu jsme použili hodnoty obou posuvníků v definici naší kvadratické funkce 
`return a.Value()*x*x + c.Value()`.
Vidíme zde, že pro získání okamžité hodnoty posuvníku použijeme spojení jména proměnné a metody _Value()_ takto `a.Value()`. 

Předpis kvadratické funkce tak už není neměnný, díky posuvníkům může být jeho podoba uživatelem dynamicky měněna.
{/lang}
