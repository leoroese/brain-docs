---
title: History of types in python
---
Python introduces type hints in version 3.5

This follows a similar emerging consensus that [[tradeoffs-of-using-types-in-programming]], where the benefits of a type system like better tooling outweighs the possible slowdown it might introduce.

## History
- 3.5: Introduction of the type hints system
- 3.7: Adds dataclasses which [[simplify-data-storage-classes-in-python-with-dataclasses]].
- 3.8: TypedDict -- Typed dictionaries where you know key-value pairs in advance

Most of my type work in python is through [[pydantic]]

## Useful libraries
- [Pydantic](https://docs.pydantic.dev/latest/): Most widely used python data validation library.