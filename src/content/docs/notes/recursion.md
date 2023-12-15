---
title: recursion
---
## Parts of recursion

Recursion, a fundamental concept in programming, can be simplified into two main parts:
1. **Base case**: Condition in which recursion stops
2. **Recursion case**: The actual recursing part

The recursion case can further be broken down into 3 parts:
1. **Pre recursion**: You can do a bit of setup before recursing
2. **Recursion**: Have you seen recursion?
3. **Post recursion**: Do some more work on exit of recursion

## Recursive functions

For every function call it's also important to remember 3 key parts:
1. **Return address**: Where the finishing function should return it's return value to.
2. **Return value**: What value to return
3. **Args**: The args passed into the function

For instance, in a recursive factorial function, the return address is where the function returns control after execution, the return value is the factorial calculated, and the args are the number for which the factorial is to be calculated.

## Recursion tips
1. Determine the base case first
2. Sometimes the initial function isn't the best for recursion, move recursive work into another function
3. Incorporate all necessary checks into the base case to simplify the recursive logic.
4. Use a directions array for when you need to check directions
```typescript
const dirs = [
	[0, -1], //top
	[1, 1], // right
	[0, 1], //bottom
	[-1, 0] // left
]
```

## When to use recursion
- Trees, graphs, hierarchical data
- Whenever a branching factor is in play, like strings built at every letter or checking every direction from current on a graph

## Tail call optimization

Some programming languages support tail-call optimization, which helps prevent stack overflow errors by reusing stack frames when the recursive call is the last thing in the function.

## Converting recursive to looping
1. Create some type of accumulator and build towards the base case in your iterative loop. Use the base case to signal to end the loop
2. Convert recursive logic into the loop
3. Tidy up any post processing


----
## Attributions
- [Frontend Masters Primeagen](https://frontendmasters.com/courses/algorithms/recursion/): Free frontend masters course by the Primeagen, talking about recursion.

-----
## Anki

TARGET DECK
software engineering

Q: What are some simple steps to simplifying recursion?
A: 1. Understand and determine the base case.
2. Understand the pattern and determine the steps necessary for the recurse step.
3. Break the recurse step further into 3 parts, pre-process, recurse, post-process
<!--ID: 1702553651666-->


Q: What are 3 key parts to remember about every function call?
A: 1. The return address, where the function should return the result to after execution
2. The return value
3. The arguments passed into the function
<!--ID: 1702553651671-->


Q: What are some useful recursion tips?
A: - Identify the base case. 
- Sometimes the entry function isn't the best place to do the recursion, create a new recursive specific function
- Move your checking into the base case, don't check for null before recursing, do it in the base case
- Be careful about tail-call elimination and stack overflow
<!--ID: 1702553651675-->


Q: What is tail-call elimination?
A: Some programming languages are able to optimize their recursive calls so that stack overflow errors aren't as common. They do this by optimizing the tail-end call which happens if the recursive call is the last thing in the function.
<!--ID: 1702553651676-->
