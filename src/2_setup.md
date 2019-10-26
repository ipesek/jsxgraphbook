

{lang=EN}
## How to setup
When we prepare JSX construction it is most convenient to prepare it locally. For that we have to create some file (eg. 
example.htm), copy paste template provided below and we can start constructing. After we save the program, we can open it in our
favorite browser (Firefox, Chrome, etc). 
We can repeat following: edit the file, save it and refresh it (_(F5)_ in a browser) until we're not satisfied with result.

Basic template for building and testing is below
{/lang}
{lang=CZ}
When we prepare JSX construction it is most convenient to prepare it locally. We don't need to upload it to some server, 
we just need to save it and refresh the page _(F5)_ in browser. 
Very simple template for building and testing is below
{/lang}
{lang=SI}
When we prepare JSX construction it is most convenient to prepare it locally. We don't need to upload it to some server, 
we just need to save it and refresh the page _(F5)_ in browser. 
Very simple template for building and testing is below
{/lang}
```HTML
<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>JSXGraph templatek</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <script type="text/javascript" charset="UTF-8" src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.7
/jsxgraphcore.js"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js' async></script>
        <script type="text/x-mathjax-config">
          MathJax.Hub.Config({
              "HTML-CSS": {availableFonts: ["TeX"],scale: 90},
               tex2jax: {inlineMath: [["$","$"]],  displayMath: [["$$","$$"]],  processEscapes: true},
                config:["TeX-AMS_HTML.js"]});
        </script>   
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.7/jsxgraph.css
" />
    </head>
  <body>

     <div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>

     <script>
        var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 2, 5, -2]});
     </script>

  </body>
</html>

```
{lang=EN}
_This scripts are all downloaded from the internet, therefore we need an constant internet connection._
{/lang}
{lang=CZ}
_This scripts are all downloaded from the internet, therefore we need an constant internet connection._
{/lang}
{lang=SI}
_This scripts are all downloaded from the internet, therefore we need an constant internet connection._
{/lang}