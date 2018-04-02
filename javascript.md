** Event delegation **

<kbd> _Explain event delegation and why it is useful._
</kbd>

Capturing and bubbling allow to implement one of most powerful event handling patterns called event delegation.

The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

In the handler we get `event.target`, see where the event actually happened and handle it.

** What’s Coercion? **


Coercion is the term that is used for unexpected type casting in JavaScript. Often when you are working with data you will need to transform it from one data type to another — something that every developer does on a daily basis. Coercion refers to those not-obvious type casts that happen as a side-effect of different operations.


** Combinations **

<kbd> Filter() and .includes()  </kdb>
