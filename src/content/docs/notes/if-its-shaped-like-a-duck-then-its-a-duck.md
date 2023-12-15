---
title: if-its-shaped-like-a-duck-then-its-a-duck
---
Duck typing is a concept where you are able to determine the type or "shape" of an object given the available properties and methods.

**If it looks like a duck, and quacks like a duck, then its a duck** 
> "Quack" - 🦆

````ad-note
title: Duck typing

```typescript
type Point = {
. x: number
  y: number
}

const duckPoint = { x: 12, y: 12} // knows its a Point type
```
````

---
## Anki

TARGET DECK
software engineering

Q: What is duck typing?
A: If it looks like a duck, quacks like a duck then its a duck. An objects type is able to be inferred due to its properties and methods
<!--ID: 1700560074774-->
