# JavaScriptModulePatterns
JavaScript Module Patterns

Even though JavaScript did not provide a module system, it’s possible to simulate one by using
function closures. It’s also possible to create a module system that makes dependencies explicit, and
where you use names to define and require modules.
Instead of modules returning the exported value, modules can support circular dependencies by
modifying an exported object.
The Node.js runtime implements a file-based module pattern that implements the CommonJS
standard. Using this pattern you can create several module patterns: Singletons, closure-based
classes, prototype-based classes, and façades.
