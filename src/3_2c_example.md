{lang=EN}
## Example

**Harmonic conjugate points.** Given three collinear points *A*, *B* and *C*; *C* being outside the line segment *AB*.
Determine the point *D* of the segment *AB* so that the ratio of its distances to *A* and *B*, respectively, is equal to the 
ration of distances of the point *C* to points *A* and *B*, respectively, i.e. *\|AD\|\/\|BD\|=\|AC\|\/\|BC\|*. 

This point *D* is called the *harmonic conjugate of C with respect to A and B* and points *A*, *B*, *C* and *D* together 
form the so called *harmonic quadruple*.
{/lang}

{lang=CZ}
## Example

**Harmonic conjugate points.** Given three collinear points *A*, *B* and *C*; *C* being outside the line segment *AB*.
Determine the point *D* of the segment *AB* so that the ratio of its distances to *A* and *B*, respectively, is equal to the 
ration of distances of the point *C* to points *A* and *B*, respectively, i.e. *\|AD\|\/\|BD\|=\|AC\|\/\|BC\|*. 

This point *D* is called the *harmonic conjugate of C with respect to A and B* and points *A*, *B*, *C* and *D* together 
form the so called *harmonic quadruple*.
{/lang}

{lang=SI}
## Example

**Harmonic conjugate points.** Given three collinear points *A*, *B* and *C*; *C* being outside the line segment *AB*.
Determine the point *D* of the segment *AB* so that the ratio of its distances to *A* and *B*, respectively, is equal to the 
ration of distances of the point *C* to points *A* and *B*, respectively, i.e. *\|AD\|\/\|BD\|=\|AC\|\/\|BC\|*. 

This point *D* is called the *harmonic conjugate of C with respect to A and B* and points *A*, *B*, *C* and *D* together 
form the so called *harmonic quadruple*.
{/lang}

{lang=EN}
*Result:*
To solve the task, we construct the so called [complete quadrangle](https://en.wikipedia.org/wiki/Complete_quadrangle),
as shown below.
{/lang}

{lang=CZ}
*Výsledek:*
To solve the task, we construct the so called [complete quadrangle](https://en.wikipedia.org/wiki/Complete_quadrangle),
as shown below.
{/lang}

{lang=SI}
*Result:*
To solve the task, we construct the so called [complete quadrangle](https://en.wikipedia.org/wiki/Complete_quadrangle),
as shown below.
{/lang}

<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
 var C = board.create('glider', [4, 0, p]);
 var E = board.create('point', [1,4], {name: 'E',size:2, color: 'blue'});
 var q = board.create('line',[A,E],{name: 'q',withLabel: true, color: 'green'});
 var r = board.create('line',[B,E],{name: 'r',withLabel: true, color: 'green'});
 var F = board.create('glider', [0,0,q], {name: 'F',size:2, color: 'blue'});
 var s = board.create('line',[C,F],{name: 's',withLabel: true, color: 'green'});
 var G = board.create('intersection', [s, r,0], {name: 'G',size:2, color: 'blue'});
 var t = board.create('line',[A,G],{color: 'grey'});
 var u = board.create('line',[B,F],{color: 'grey'});
 var H = board.create('intersection', [t, u], {name: 'H',size:2, color: 'blue'});
 var v = board.create('line', [E,H],{color: 'grey'});
 var D = board.create('intersection', [p, v, 0]);
</script>


{lang=EN}
*Solution:*

First, we define the bounding box and create two points *A* and *B* with the line *p* passing through them:
{/lang}

{lang=CZ}
*Solution:*

First, we define the bounding box and create two points *A* and *B* with the line *p* passing through them:
{/lang}

{lang=SI}
*Solution:*

First, we define the bounding box and create two points *A* and *B* with the line *p* passing through them:
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
</script> 
```

{lang=EN}
Then, we put the point *C* on *p* so that it can move along it:
{/lang}


{lang=CZ}
Then, we put the point *C* on *p* so that it can move along it:
{/lang}


{lang=SI}
Then, we put the point *C* on *p* so that it can move along it:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
 var C = board.create('glider', [4, 0, p]);
</script> 
```

{lang=EN}
Now, we put the fourth point *E* above the line *p* and connect it by the straight lines *q* and *r* to points
*A* and *B*, respectively:
{/lang}

{lang=CZ}
Now, we put the fourth point *E* above the line *p* and connect it by the straight lines *q* and *r* to points
*A* and *B*, respectively:
{/lang}

{lang=SI}
Now, we put the fourth point *E* above the line *p* and connect it by the straight lines *q* and *r* to points
*A* and *B*, respectively:
{/lang}

```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
 var C = board.create('glider', [4, 0, p]);
 var E = board.create('point', [1,4], {name: 'E',size:2, color: 'blue'});
 var q = board.create('line',[A,E],{name: 'q',withLabel: true, color: 'green'});
 var r = board.create('line',[B,E],{name: 'r',withLabel: true, color: 'green'});
</script> 
```
{lang=EN}
After this, we put the point *F* on *r*, somewhere between *A* and *E*, draw a line *s* passing through
points *C* and *F* and determine its intersection *G* with the line *r*:
{/lang}

{lang=CZ}
After this, we put the point *F* on *r*, somewhere between *A* and *E*, draw a line *s* passing through
points *C* and *F* and determine its intersection *G* with the line *r*:
{/lang}

{lang=SI}
After this, we put the point *F* on *r*, somewhere between *A* and *E*, draw a line *s* passing through
points *C* and *F* and determine its intersection *G* with the line *r*:
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
 var C = board.create('glider', [4, 0, p]);
 var E = board.create('point', [1,4], {name: 'E',size:2, color: 'blue'});
 var q = board.create('line',[A,E],{name: 'q',withLabel: true, color: 'green'});
 var r = board.create('line',[B,E],{name: 'r',withLabel: true, color: 'green'});
 var F = board.create('glider', [0,0,q], {name: 'F',size:2, color: 'blue'});
 var s = board.create('line',[C,F],{name: 's',withLabel: true, color: 'green'});
 var G = board.create('intersection', [s, r,0], {name: 'G',size:2, color: 'blue'});
<script> 
```

{lang=EN}
Finally, we draw lines *t=AG* and *u=BF*, denote *H* their point of intersection, construct
the line *v* passing points *H* and *E* and determine the desired point *D* as the intersection of lines *v* and *p*:
{/lang}

{lang=CZ}
Finally, we draw lines *t=AG* and *u=BF*, denote *H* their point of intersection, construct
the line *v* passing points *H* and *E* and determine the desired point *D* as the intersection of lines *v* and *p*:
{/lang}

{lang=SI}
Finally, we draw lines *t=AG* and *u=BF*, denote *H* their point of intersection, construct
the line *v* passing points *H* and *E* and determine the desired point *D* as the intersection of lines *v* and *p*:
{/lang}


```JS
<div id="jxgbox" class="jxgbox" style="width:500px; height:400px;"></div>
<script>
 var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -3]});
 var A = board.create('point',[-4,-2]);
 var B = board.create('point',[0,-2]);
 var p = board.create('line',[A,B],{name: 'p',withLabel: true, color: 'green'});
 var C = board.create('glider', [4, 0, p]);
 var E = board.create('point', [1,4], {name: 'E',size:2, color: 'blue'});
 var q = board.create('line',[A,E],{name: 'q',withLabel: true, color: 'green'});
 var r = board.create('line',[B,E],{name: 'r',withLabel: true, color: 'green'});
 var F = board.create('glider', [0,0,q], {name: 'F',size:2, color: 'blue'});
 var s = board.create('line',[C,F],{name: 's',withLabel: true, color: 'green'});
 var G = board.create('intersection', [s, r,0], {name: 'G',size:2, color: 'blue'});
 var t = board.create('line',[A,G],{color: 'grey'});
 var u = board.create('line',[B,F],{color: 'grey'});
 var H = board.create('intersection', [t, u], {name: 'H',size:2, color: 'blue'});
 var v = board.create('line', [E,H],{color: 'grey'});
 var D = board.create('intersection', [p, v, 0]);
</script>
```