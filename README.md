# JavaScript Module Patterns

The Node.js module system then allows for a module to export any value, be it a string, a number,
a single function, or a more complex object. 

Let’s see some common patterns that can emerge:
- One function
- Singleton object
- Closure-based class
- Prototype-based class
- Façade module

Even though JavaScript did not provide a module system, it’s possible to simulate one by using
function closures. It’s also possible to create a module system that makes dependencies explicit, and
where you use names to define and require modules.
Instead of modules returning the exported value, modules can support circular dependencies by
modifying an exported object.
The Node.js runtime implements a file-based module pattern that implements the CommonJS
standard. Using this pattern you can create several module patterns: Singletons, closure-based
classes, prototype-based classes, and façades.
