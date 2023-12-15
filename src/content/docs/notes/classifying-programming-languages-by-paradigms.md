---
title: Classifying programming languages by paradigms
---
Programming paradigms are a way of classifying a programming language based on their features.

Most languages can be multi-paradigm, meaning they support many different ways of programming with them.

## Imperative 
A paradigm where specific step-by-step instructions are provided for completing tasks.
- More verbose with limited abstractions

Giving directions from one place to another, where you outline every single step necessary to get there. Telling them exactly what to do

```typescript
let total = 0;
for (int i = 0; i < length; i++) {
   total += array[i];
}
```


## Declarative
A paradigm focused on describing the expected result.
- Easier to read, but sometimes more obscure and abstracted

It's like giving a friend your address and allowing them to find the best route.

> Focuses on the "what" not the "how"

```typescript
array.map((a) => a.id);
```

---
## Attributions
- [Programiz](https://programiz.pro/resources/imperative-vs-declarative-programming/#:~:text=For%20starters%2C%20imperative%20programming%20refers,re%20expecting%20from%20our%20code.)
- [LinkedIn  JS Yehuda article](https://www.linkedin.com/pulse/imperative-vs-declarative-programming-javascript-yehuda-margolis)

----
## Anki

TARGET DECK
software engineering

Q: What are the differences between imperative and declarative programming paradigms?
A: Imperative focuses on the how, giving explicit instructions at every turn. Declarative focuses on the what, providing the details about what you want and believing that it will work, typically by abstracting away the details.
<!--ID: 1702240924297-->
