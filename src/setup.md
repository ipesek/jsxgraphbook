# How to setup

When we prepare JSX construction it is most convenient to prepare it locally. We don't need to upload it to some server, 
we just need to save it and refresh the page _(F5)_ in browser. 
Very simple template for building and testing is below

```HTML
<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>JSXGraph templatek</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <script type="text/javascript" charset="UTF-8" src="//cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.7/jsxgraphcore.js"></script>
        <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.7/jsxgraph.css" />
    </head>
  <body>

     HTML elements (div for canvas)

     <script>
     // JSXGraph code goes here.
     </script>

  </body>
</html>

```

If we want to use math symbols _(we have to write it in latex code)_ then we have add below line after the script line.
```
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
```
If you want to use $ $ for math symbols, then add following lines
```
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js' async></script>
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
   "HTML-CSS": {availableFonts: ["TeX"],scale: 90},
    tex2jax: {inlineMath: [["$","$"]],  displayMath: [["$$","$$"]],  processEscapes: true},
    config:["TeX-AMS_HTML.js"]});
</script>
```



_This scripts are all downloaded from the internet, therefore we need an constant internet connection._