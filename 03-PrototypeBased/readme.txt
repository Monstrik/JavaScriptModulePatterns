In a prototype-based solution, you assign the functions 
to the constructor prototype. 
When constructing a new object, the JavaScript runtime simply 
assigns the constructor prototype attribute
to the new object’s __proto__ attribute.

When a method on an object is to be used, 
the JavaScript runtime looks into the object itself for
an attribute with that name. 
If not found, it looks into the object’s __proto__ attribute for that attribute, 
and if found, that’s what it uses. 

This allows us to only declare the functions once inside the prototype, 
and to allow the method onto which the method was called — 
the this object, which carries all of the state — to vary.