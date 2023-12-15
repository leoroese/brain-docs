---
title: Programming reactivity
---

Reactivity is a programming paradigm that allows systems to adjust to changes in a declarative manner. For further context, see [[classifying-programming-languages-by-paradigms]].

A basic but illustrative example of reactivity can be seen in an Excel spreadsheet...

`A2 is defined by A0 + A1, so when you update one of them, it automagically updates A2`

## Reactivity in javascript

In vanilla JavaScript, direct reactivity like in the Excel example isn't possible. However, JavaScript can intercept the reading and writing of object properties to mimic this behavior.

When a value changes, the values dependent on that value must also change. It must notify all its subscribers (smash that notification bell) to re-compute with the new values.

JavaScript can implement reactivity through two primary mechanisms:

1. **Getter/Setters:**
   - **Get:** Binds an object property to a function that is invoked whenever the property is accessed. This allows the tracking of property reads.
   - **Set:** Associates an object property with a function that is triggered when the property is updated. This is crucial for detecting changes to the property.
2. **Proxies**
   - Proxies enable the creation of a wrapper for another object, allowing interception and redefinition of fundamental operations of that object, including getters and setters.
   - A proxy uses two main properties: `target`, the original object, and `handler`, an object that defines which operations will be intercepted and how to redefine them.

## Reactivity in different frameworks

### React

In React, the concept of reactivity centers around the state. Unlike the automatic dependency tracking seen in other frameworks, React's reactivity does not inherently monitor dependencies.

State changes trigger component re-renders, but this process is more explicit and controlled by the developer. To enhance React's reactivity, libraries like MobX can be integrated, offering more automated reactive features and efficient state management.

### Vue

Vue3 reactivity system utilizes a blend of getters/setters and proxies. The choice between these mechanisms depends on the type of reactive object being handled.

Vue's reactivity is more implicit and automatic compared to React, with the framework efficiently tracking dependencies and updates, thereby minimizing unnecessary re-renders and optimizing performance.

### Solid

SolidJS has advanced the conversation on fine-grained reactivity with its implementation of Signals.

Signals in SolidJS allow for a more granular level of reactivity control, leading to performance gains. This fine-grained approach ensures that only the components or parts of the application that are directly dependent on changed data are updated, which is a contrast to React's broader state-based reactivity.

---

## Attributions

- [Vue docs](https://vuejs.org/guide/extras/reactivity-in-depth.html#:~:text=Reactivity%20is%20a%20programming%20paradigm,changes%20in%20a%20declarative%20manner.): Vue docs on reactivity
- [Proxy docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy): Mozilla docs explaining proxy objects

---

## Anki

TARGET DECK
web development

Q: What is reactivity?
A: Programming paradigm that allows systems to react to changes. Whenever a value changes, all of its dependent values also change with the updated value. In frontend frameworks, this typically includes re-rendering the with updated values.

<!--ID: 1702550848453-->

Q: How does javascript normally implement reactivity?
A: getters/setters and proxy objects

<!--ID: 1702568925958-->
