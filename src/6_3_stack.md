# {lang=EN}
## JSXGraph and STACK

### What is STACK?

STACK is an open-source computer aided assessment system for mathematics and related sciences. Although STACK includes multiple answer types its main focus is on student-provided mathematical expressions. This means that the student's answer to a question can for example be a polynomial or a matrix.

To evaluate mathematical expressions STACK uses the computer algebra system (CAS) [Maxima](https://maxima.sourceforge.io/documentation.html "Maxima Documentation").

The STACK system provides a new question type for [Moodle](https://moodle.org/ "Moodle Homepage") and [ILIAS](https://www.ilias.de/ "Ilias Homepage") learning environments. STACK can also be integrated to other learning environments via [LTI](https://github.com/maths/moodle-qtype_stack/blob/master/doc/en/Installation/LTI.md "LTI Documentation").

This is what a typical STACK question looks like:

<img src=".\images\STACK-screenshot1.png" alt="Image of a typical STACK question" title="An example of a typical STACK question" style="zoom:80%;" />

#### 🔗 About STACK

* [Official Documentation.](https://github.com/maths/moodle-qtype_stack/blob/master/doc/en/index.md "STACK Documentation")

* [Installation instructions.](https://github.com/maths/moodle-qtype_stack/blob/master/doc/en/Installation/index.md "STACK Installation")
* [Credits.](https://github.com/maths/moodle-qtype_stack/blob/master/doc/en/About/Credits.md "STACK Credits")

### STACK questions and JSXGraph

Firstly, we strongly recommend you do not use any HTML-aware (WYSIWYG) editor when working with questions including JSXGraph. Switch to the plain text editor instead to edit the raw HTML.

#### The key differences

Graphs that do not need to remember their states between page reloads are basically built just like you would do with the official JSXGraph  filter. Note however that STACK **does not require this filter** to be installed as STACK provides its own implementation with some key differences and additional features:

* STACK does not allow you to name the div-container element the graph is stored in. Instead STACK automatically generates an identifier that is then stored in a variable named `divid` (also `boardid` since STACK 4.3.3). Thus a JSXGraph Board in STACK is created like this:

  ```javascript
  var board = JXG.JSXGraph.initBoard(divid, { ... });
  ```

  This is done in order to avoid accidental identifier clashing in cases when there are multiple copies of the same question on the same page.

* Instead of traditional div-elements the JSXGraphs in STACK start and end with STACK style *question blocks* `[[jsxgraph]]` and `[[/jsxgraph]]` respectively. You can control the size of the JSXGraph container with the width and height options. For example,

  ```javascript
  [[jsxgraph width="450px" height="350px"]]
  ```

#### Input bindings

STACK provides a way to reference the [input](https://github.com/maths/moodle-qtype_stack/blob/master/doc/en/Authoring/Inputs.md "STACK Documentation: Inputs") fields of the question and also provides identifiers for these input elements if requested. For example, in order to create an identifier for an input field with the default name *ans1* we would refer to it within the question block like this:

```javascript
[[jsxgraph input-ref-ans1='ans1Ref']]
```

After doing so there are multiple ways we can work with the input . The most obvious way is to use some of the STACK specific input binding functions.

##### 1. Straightforward binding

With the straightforward binding function `stack_jxg.bind_point(ans1Ref, p1)` we can bind the coordinates of a JSXGraph point element with the value of the input field `ans1`.

Example code:

```javascript
[[jsxgraph input-ref-ans1='ans1Ref']]

var board = JXG.JSXGraph.initBoard(divid, { boundingbox : [-5, 5, 5, -5], axis : true });

var p1 = board.create('point', [-2, -2], { name : 'bound' });
var p2 = board.create('point', [2, 2], { name : 'free' });

stack_jxg.bind_point(ans1Ref, p1);

board.update();

[[/jsxgraph]]
```



##### 2. Dual binding

There are two different STACK specific functions for representing  vectors, lines, circles or anything that can be defined by two points.

The STACK specific function `stack_jxg.bind_point_dual(ans1Ref, p1, p2)` allows you to bind two points to an input returning their coordinates as a list of lists.

Example code:

```javascript
[[jsxgraph input-ref-ans1='ans1Ref']]

var board = JXG.JSXGraph.initBoard(divid, { boundingbox : [-5, 5, 5, -5], axis : true });

var p1 = board.create('point', [-2, -2], { name : 'p_1' });
var p2 = board.create('point', [2, 2], { name : 'p_2' });

board.create('segment', [p1, p2], { fixed : true, strokeWidth : 4, strokeOpacity : .6 });

stack_jxg.bind_point_dual(ans1Ref, p1, p2);

board.update();

[[/jsxgraph]]
```



##### 3. Relative binding

The STACK specific function `stack_jxg.bind_point_relative(ans1Ref, p1, p2)` works similarly to the aforementioned `bind_point_dual` function but returns the coordinates of the latter point relative to the initial point, i.e. `[p2.X()-p1.X(), p2.Y()-p1.Y()]`.

Example code:

```javascript
[[jsxgraph input-ref-ans1='ans1Ref']]

var board = JXG.JSXGraph.initBoard(divid, { keepaspectratio : true, axis : true });

var p1 = board.create('point', [0, 0], { name : 'p_1' });
var p2 = board.create('point', [2, 0], { name : 'p_2' });
var ci = board.create('circle', [p1, p2]);
stack_jxg.bind_point_relative(ans1Ref, p1, p2);

board.update();

[[/jsxgraph]]
```

<img src=".\images\STACK-screenshot2.png" alt="Relative binding" title="Relative binding" style="zoom:100%;" />

##### 4. Slider binding

It is also possible to bind the value of a slider element with user input using the STACK specific function `stack_jxg.bind_slider(ans1Ref, s1)`.

Example code:

```javascript
[[jsxgraph width='500px' height='500px' input-ref-ans1='ans1Ref']]

var board = JXG.JSXGraph.initBoard(divid, { boundingbox : [-10, 10, 10, -10], axis : true, shownavigation : false });

var p1 = board.create('point', [0, 0], { name : 'move me!', size : 4, strokeColor : 'black' });
var s1 = board.create('slider', [[3, 8], [8, 8], [1, 4, 7]], { label : 'radius' });

stack_jxg.bind_slider(ans1Ref, s1);

var c1 = board.create('circle', [p1, function() { return s1.Value(); }] , { fillColor : 'orange', fillOpacity : .5 });

board.update();

[[/jsxgraph]]
```



##### 5. Dynamic binding

As the subject of dynamic binding is rather technical and laborious we won't go into great lengths detailing it here as this is supposed to be a more or less quick introduction. To put it briefly, if your question must have a dynamic number of objects each bound to an input field it is easy to notice that the one-to-one  input-object-binding described in the previous examples will not  suffice. For more varied data (say you want to store the state of some JavaScript objects, lists, dictionaries etc.) what you can do is to convert the data to [JSON](https://www.json.org/json-en.html "Introducing JSON") strings, which can then be stored into [String type](https://github.com/maths/moodle-qtype_stack/blob/master/doc/en/Authoring/Inputs.md "STACK Documentation: Inputs") input fields. In order to parse this data STACK provides the function `stackjson_parse(state)`.

#### One way and two way binding

In all of the examples given above we used what is referred to as *one way binding*, that is to say, the binding transfers some data from the JSXGraph element over to the user input and then retrieves this stored value whenever the page is reloaded.

In addition to this, STACK also uses *two way binding* which means that we can continue to keep track of the input value even after the page has been loaded so that if its value is changed due to any action, this change is also conveyed into the graph.

As a useful consequence of this feature we can have multiple graphs with objects bound to the same input and have the objects move in sync when some action is performed on any one of them.



{/lang}
{lang=SI}JSXGraph and Stack{/lang}{lang=CZ}JSXGraph and Stack{/lang}
