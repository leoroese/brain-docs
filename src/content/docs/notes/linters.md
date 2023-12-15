---
title: Linters
---
Tool used to static analyze your code for problems

> linting: Process of running a program that will analyze your code for potential errors in style or syntax

Derived from `undesirable bits of fiber and fluff` from sheep's clothing

## How it works

1. Parses source code into tokens like keywords and operators
2. Builds [[abstract-syntax-trees-help-tools-understand-your-code]] from tokens
3. Crawls each node in AST and tests against set of rules
4. Reports any errors and offer suggestions

## What do linters check for
- Smelly code
- Security issues
- Syntax errors
- Coding standards mismatch

## Why lint?
- Catch errors early on before compilation and deployment.
- Help keep code readable, consistent, and of a high quality

Linters and formatters are different. Linters help in searching for potential issues in your code before they become a problem, while formatters help enforce a consistent code style making code more readable.

## Tradeoffs
Hella annoying to setup with neovim

---
## Attributions
- [Wikipedia](https://en.wikipedia.org/wiki/Lint_%28software%29): Wikipedia page on lint
- [What is a linter](https://testrigor.com/blog/what-is-a-linter/): Blog post on what a linter is
- [How a linter works](https://blog.codacy.com/what-is-a-linter): How a linter works

---

## Anki

TARGET DECK
software engineering

Q: What is a linter and why should you use one?
A: Tools that analyzes your code for potential issues, helping to catch problems before they exist. Also helps maintain high code quality, consistency, and readability.
<!--ID: 1701896791291-->


Q: How do linters work?
A: A linter will build out an AST representation of your code. It then crawls each node and tests them using a set of predefined rules. If any nodes fail a test, it then provides diagnostics as well as suggestions / fixing capabilities to improve your code.
<!--ID: 1701896791292-->

