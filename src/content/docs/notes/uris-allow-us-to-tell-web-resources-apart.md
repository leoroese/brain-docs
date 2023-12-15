---
title: URIs allow us to tell web resources apart
---
Whether it's a website, gaming article, or that 15th cat meme your grandma sent you, they all have some unique Uniform Resource Identifier to help you find them.

There are 2 main type of URI's that are used to fetch web resources:
1. **Uniform Resource Locator (URL)**: A web address. Helps your tool know where on the web to find the resource.
2. **Uniform Resource Name (URN)**: A persistent name identifier. Pointing to the same resource even if it moves around

To further simplify how URIs work, theres an intuitive syntax that acts like a blueprint for putting them together. I refer to this as [[decoding-url-syntax-the-internets-dining-experience]]

In practice, I almost exclusively use URLs. They are straightforward and universally supported by web browsers and web services. URNs, while theoretically beneficial for persistence, face challenges in adoption and complexity which is probably [[why-you-don't-see-urns-out-in-the-wild]]. 

---
## Attributions
- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/URI): MDN web docs page on URIs

---
## Anki

TARGET DECK
web development

Q: How does the web tell resources apart?
A: Uses URI's to fetch desired content. Typically in the form of URL's which includes the location, protocol, and other information needed to fetch and present the requested data.
<!--ID: 1699420590249-->
