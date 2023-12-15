---
title: automated-memory-management-with-garbage-collection
---
Garbage collection is a solution developed by experts to prevent common memory management errors, making programming more forgiving and less error-prone.

Garbage collection comes at a cost, such as overhead and unpredictability of when garbage collection runs, potentially impacting performance.

Different programming languages employ varied garbage collection strategies, each with its own advantages and disadvantages.

This is a different approach from languages the require manual memory management like C and C++. This can lead to a lot of issues like forgetting to free-up unused allocated memory, but also gives the developer more control over how memory is managed.

Naive garbage collection can also have an impact on performance, if it is constantly running, can interrupt and take away resources from other computational tasks.

## Garbage collection algorithms
### Reference counting
Program stores number of in-references (references pointing to the object). When the reference count hits 0, it's marked for cleanup.

Downsides to reference counting:
- Excessively frequent updates: [[optimizing-performance-with-batching]]
- Circular references

### Tracing (most common)
Follow root objects (local vars, global vars, builtins) references to determine which are still reachable, non reachable are cleaned up.

> So common that typically when people mention garbage collection they are talking about this

### Mark and sweep
Trace through references and mark objects as unreachable. Most garbage collections implement some type of improved mark and sweep

### Copying collection
Divide memory into "from-space" and "to-space" then copy and swap between them.

Tradeoffs:
- Faster but requires much more memory
- Slower if more reachable memory

### Mark and compact
Copying collection that runs in single memory space by pushing all reachable items to the bottom of the heap

Tradeoffs
- Slow

### Generational
In generational collection, newer objects, often called 'younger generations,' are more frequently checked than older ones, based on the assumption that newer objects are more likely to be garbage.

Javascript
- Tracing and generational

Python
- Reference counting and generational


---
## Attributions
- [Infoworld](https://www.infoworld.com/article/3685493/what-is-garbage-collection-automated-memory-management-for-your-programs.html): Site full of ads that provides actually good content about garbage collection.
- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management): Docs on memory management, and mark and sweep

----
## Anki

TARGET DECK
software engineering

Q: What is garbage collection?
A: It's a set of algorithms and techniques designed to manage memory automatically, ensuring that unused memory is freed up efficiently and safely.
<!--ID: 1701287073503-->


Q: What is reference counting?
A: Algorithm that measures in-references of a variable to determine whether it should be cleaned up or not. Has issues with excessive updates and circular references
<!--ID: 1701287073508-->


Q: What is tracing garbage collection?
A: Algorithm that starts at root objects, and traces it's references to determine whether objects are reachable or not.
<!--ID: 1701287073512-->


Q: What is generational garbage collection?
A: Strategy where garbage collections split objects into "generations". Newer objects are checked more frequently for clean up, while objects that have survived longer aren't checked as much.
<!--ID: 1701287073516-->
