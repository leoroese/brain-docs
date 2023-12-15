---
title:
---
The Document Object Model (DOM) is an essential programming interface in web development. It represents web documents in a structured, object-oriented manner, enabling languages like JavaScript to interact with and manipulate a document's structure, style, and content programmatically.

The DOM provides several handy interfaces such as:
- `Document.querySelectorAll()`: Retrieves a list of elements matching specific selectors.
- `Document.getElementById()`: Get an element by it's ID.
- `Element.innerHTML`: Accesses or modifies the HTML content within an element.
- `EventTarget.addEventListener()`: Assigns a function to be executed when a specified event occurs.
- `Node.appendChild()`: Adds a node to a specified parent node's children.
- `window.onload`: Triggers when the entire page, including all dependent resources, is fully loaded.

Frameworks such as React, Vue, and svelte serve as abstractions over the DOM API, offering simplified and more manageable ways to manipulate the DOM. These tools are popular because direct DOM manipulation can be verbose and annoying in larger scle applications.

---
## Attributions
- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

---
## Anki

TARGET DECK
web development


Q: What is the DOM and why are tools like React, Vue, and Svelte so popular?
A: The DOM is a tree-like structure constructed by the browser, offering interfaces for node manipulation and layout. Direct DOM manipulation can be verbose and cumbersome, especially at scale. Frameworks like React, Vue, and Svelte simplify this process with their own abstractions and optimizations, making DOM manipulation more efficient and manageable.
<!--ID: 1697472671135-->

Q: What is something important to remember when working with frameworks?
A: They're all just abstractions over the DOM api. If there is something very specific that you need, and it doesn't seem trivial in the framework, you can leverage the DOM api to complete your task.
<!--ID: 1702387510062-->




---
## References


