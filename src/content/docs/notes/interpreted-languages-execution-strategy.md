---
title: interpreted-languages-execution-startegy
---
Interpreted languages translate and execute code at runtime, which allows for more flexibility and faster development, at the sacrifice of performance.

The typical execution strategy for an interpreted language is the following:
1. Interpreter validates syntax and correctness of the code
2. Parses the valid code into an abstract syntax tree
3. This tree is then compiled to [[bytecode]] -- a platform agnostic representation of the code
4. Virtual machine or other tool then executes the bytecode

---
## Anki

TARGET DECK
software engineering

Q: How do interpreted languages execute?
A: Code is translated at runtime for higher flexibility and faster development at the sacrifice of performance. It typically parses valid code into an AST via tokenization, which then gets converted into bytecode by the interpreter, which then gets executed
<!--ID: 1700559519279-->
