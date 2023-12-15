---
title: lexical-environment-helps-the-execution-context-remember
---
A lexical environment is typically a key value store where variables and functions live during the execution context

> lexical: Hierarchy
> lexical environment: Local memory + parent lexical env

2 Key pieces of the lexical environment:
- **environment record**: Object that stores current lexical env functions and variables
- **reference**: Reference to the outer environment

Typically an [[execution-context]] creates it's own lexical-environment, but also has access to it's parent or [[closure]]'s environment as well.

## Hierarchy 
1. Builtin -- the language builtins
2. global -- any global variable or function
3. module -- scoped to a particular module
4. enclosing -- in the enclosing or caller function
5. local -- in current executing function

---
## Attributions
- [Intervue](https://www.intervue.io/developer/short-note/what-is-a-lexical-environment-sandbox-5XTCDNYWG#:~:text=A%20lexical%20environment%20is%20a,hierarchy%20or%20in%20a%20sequence.): Quick synopsis of lexical envs in general
- [Frontend mag](https://www.frontendmag.com/tutorials/lexical-environment-in-javascript/): More of a deep dive of lexical env in JS

----
## Anki

TARGET DECK
software engineering

Q: What is a lexical environment?
A: Key value store that stores the current execution contexts variables and functions, and also a reference to it's parents environment as well.
<!--ID: 1700931157725-->
