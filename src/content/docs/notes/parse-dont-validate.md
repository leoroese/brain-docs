---
title: Parse dont validate
---
Parsing effectively leverages a type system for input handling, as opposed to mere validation.

By parsing input data up front, right at the boundary between your program and the outside world, you can contain the failure of the input data to the parsing step.

Parsing validates all the data in the beginning, ensuring it's safe for execution. Validation may miss some checks and potentially allow invalid data to be used.

Only validating runs the risk of accessing an invalid portion of the input, which may have passed validation but otherwise would have failed parsing.

These terms are sometimes used interchangeably. For example, Zod uses parsing, while pydantic uses validate, but they essentially mean the same thing.

## Useful libraries
- Zod, valibot: Typescript
- Pydantic: Python 

---
## Attributions
- [Alexis King](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/): An in-depth exploration of the advantages of parsing over validation in software design.

----
## Anki

TARGET DECK
software engineering

Q: Why should you prefer parsing over validating?
A: Parsing ensures that all input data is checked and validated at the program's boundary, guaranteeing that any successfully parsed data is safe and valid for further operations, eliminating the need for repeated checks.
<!--ID: 1701289179899-->
