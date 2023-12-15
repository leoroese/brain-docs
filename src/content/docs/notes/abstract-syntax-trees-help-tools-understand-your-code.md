---
title: abstract-syntax-trees-help-tools-understand-your-code
---
Abstract syntax trees (ASTs) play a crucial role in understanding the structure and relationships within your code.

Compilers, linters, browsers, and code generators follow these steps to construct an AST:
1. **Lexical analysis (tokenization)**: Identifies individual code elements such as types, function names, and punctuators.
2. **Syntax analysis (parsing)**: Converts tokens into a tree that represents the structure of your code.
3. **Code generation**: Facilitates manipulation and optimization.

### Linters
Linters use ASTs to validate and scrutinize your code against predefined rules. 

After constructing the AST, a crawler will visit each node and check for smelly code by running predefined rules against them. It can then use code generation to suggest and fix any parts of your potentially sus code.

### Browsers
Browsers parse out your html into the DOM, an AST representation of your website's nodes.  It then provides a set of useful tools to manipulate the DOM.

### Compilers
Compilers construct ASTs to identify and optimize similar code patterns across the application, improving performance.

---

## Attributions
- [What is an ast](https://blog.codacy.com/what-is-a-linter): Has a good definition of AST
- [Twilio](https://www.twilio.com/blog/abstract-syntax-trees): Twilio article about abstract syntax trees
- [ASTExplorer](https://astexplorer.net/): Great ast playground
- [How do linters work](https://rdambrosio016.github.io/rust/2020/09/18/pure-ast-based-linting-sucks.html#:~:text=Linters%20traditionally%20work%20by%20taking,JavaScript%2C%20and%20Clippy%20for%20rust.): Article explaining how linters work with AST

---

## Anki

TARGET DECK
software engineering

Q: What is an abstract syntax tree?
A: Abstract model of code structure built from tokens (keywords and operators) that highlight the connections between different parts of code and hierarchies among different elements.
<!--ID: 1701896791304-->

Q: What are the steps to constructing an ast?
A: 1. Lexical analysis (tokenization): Splits up your code into individual pieces called tokens, like function names, variable types, and punctuators like '('
2. Static analysis (parsing): Takes the tokens and builds a structure representation of your code, defining relationships between tokens
3. Code generation than allows for manipulating and improving of code, through direct manipulation of the ast, which is much safer.
<!--ID: 1702238798029-->


