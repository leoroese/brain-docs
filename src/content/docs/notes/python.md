---
title: python
---
Python is a dynamically typed, high level interpreted programming language that focuses on readability, simplicity, and explicitnesssssssss.

Python loves its objects, objects are first class citizens in python.

More 🐍:
- **Interpreted by default**: [[interpreted-languages-are-dynamic-by-default]]
- **Evolving type system**: [[history-of-types-in-python]] 
- **Managing environments**: [[properly-managing-python-environments-to-avoid-environment-hell]]
- **Modular system**: [[splitting-up-your-code-with-module-system]]
- **Execution environment**: [[lexical-environment-helps-the-execution-context-remember]]
- **Garbage collected**: [[automated-memory-management-with-garbage-collection]]


---
## Attributions
- [Python docs](https://docs.python.org/3/): Python's official docs

---
## Anki

TARGET DECK
python

Q:  What does from __future__ import annotations do?
A: Alters how annotations (type hints) are handled. By default python evaluates annotations at function definition time, with this annotations are stored as string literals. This improves performance, avoids circular dependencies, and allows you to forward reference, which references classes that may not exist yet.
<!--ID: 1699902839833-->


Q: Why is it necessary to move things into an if type_checking block?
A: It's used to help resolve circular dependencies whenever type hints are needed. Useful when you have pydantic models all in different files. This code is ignored at runtime 
<!--ID: 1699902839835-->
