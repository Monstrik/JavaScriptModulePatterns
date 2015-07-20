Using function closures is a good way of clearly differentiating 
between what is the object internal state and the object public interface, 
simulating what other languages define as private properties and methods. 

The downside is that, using this technique, 
you are defining a new function scope that persists throughout the life 
of the object, and a set of functions on that scope for each object you are
creating, consuming memory and taking CPU time at initialisation. 

This may be fine if, like in this client example, 
you’re not defining many instances of each object. 

If you want to avoid this problem, then you will need 
to use the prototype-based modelling capabilities that JavaScript provides.