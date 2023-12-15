---
title: Jit the bridge between interpreted and compiled
---
Just in time compilation is a technique where an interpreted language employs a compilation step at runtime to speed up performance.

It does this by comparing the speed up gain vs the overhead of actually compiling the code in hotspots.
> Hotspots: Places of similar code that runs frequently

Requires additional overhead of an interpreter, compiling, and linking.

## How it works:
1. Analyzing runtime code to try and figure out hotspots 
2. Compile these hotspots independently
3. Continue to monitor for more hotspots, and also decompile code that should not have been compiled or are no longer hotspots

---
## Anki

TARGET DECK
software engineering

Q: What is JIT compilation?
A: Practice where you get to combine the interpreted and ahead of time compilation to improve performance. Interpreted languages are able to compile code at runtime that they identify can benefit and are hotspots.
<!--ID: 1700558287038-->
