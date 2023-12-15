---
title: web-rendering-techniques
---
In the development of web applications, choosing the appropriate rendering technique - server-side, client-side, or incremental - is crucial for optimizing performance, SEO, and user experience.

Essentially, where the application code runs.

## Client side rendering (CSR)
Anything that happens on the end-users device, whether web browser or mobile.

### Use cases
Interactive, dynamic websites where user experience after initial load is important. Although recent improvements, has struggled with SEO.
- SPAs where user experience and interactivity is a priority
- Apps that benefit from cached resources

**Pros**
- Navigating feels snappy
- No client server latency post initial load

 **Cons**
- Slower initial load
- Potentially worse SEO since crawlers can't index properly

## Server side rendering (SSR)

Everything that happens on a server
- In the past almost everything happened on the server including rendering webpages.

Problem is the every request has inherent latency due to each request needing to travel to the server.
- The reason why a lot more modern apps starting moving interactivity to the client.

### Use cases
Content driven sites where SEO is crucial

Server sends generated HTML from server to client, and browser displays it immediately without the need to parse it

### Use cases
- Static sites where content doesn't change often
- SEO benefited sites like e-commerce or news sites
- Initial load is critical

**Cons**
- Client server latency on each request
- Additional server resources needed

## Hybrid rendering
In practice, most modern web apps use a hybrid approach.

Hybrid rendering combines server-side rendering for the initial page load with client-side rendering for subsequent navigation, offering a balance between performance and user experience.

Approach is popularized by newer frameworks like Next and Nuxt.

**Pros**
- Best of both worlds
- Flexibility in choosing between dynamic, pre, and static rendering

**Cons**
- Sometimes too much power


## Static site generation (SSG)
Content is pre-built at build time

Improved speed, reliability, security, and scalability.

### Use cases
When content doesn't change often
- Blogs, documentation sites, landing pages

**Cons**
- Bad for dynamic sites that change often like real-time data or user content.
- Any content changes requires a rebuild and redeploy.

## Pre rendering 
Similar to SSG but can be part of a dynamic site where only some pages are pre-rendered.

### Use cases
Good for content that doesn't change frequently, but need more flexibility than static
- Mixed sites with static and dynamic elements. Can pre render critical pages.

## Incremental static regeneration (ISR)
Feature by some frameworks that allow static content to be incrementally updated after deploy, saving on the need to rebuild and redeploy for changes
- Bridges between SSG and dynamic content


## Edge side rendering
Render content on the edge
- Newer approach than SSG and SSR
### Use cases
- Global web apps
- CDN reliant websites
- Real time apps
- Global e-commerce
- Media and entertainment like streaming

**Pros**
- Reduced latency
- Scalable, global reach

**Cons**
- Complex
- Expensive
- Resource and cache management overhead

---
## Attributions
- [Cloudflare](https://www.cloudflare.com/learning/serverless/glossary/client-side-vs-server-side/)
- [Routing](https://stackoverflow.com/questions/23975199/when-to-use-client-side-routing-or-server-side-routing)
- [Acronyms](https://dev.to/whitep4nth3r/the-acronyms-of-rendering-on-the-web-2g8h)

----

TARGET DECK
web development

Q: What is client side rendering and its use cases?
A: Rendering technique that has a slower initial load, but then typically is snappier in interactions. Rendering work is done on the end users client. Useful for SPA's and websites where interactivity is a priority.
<!--ID: 1702556256667-->


Q: What is server side rendering and its use cases?
A: Rendering work is done on the server, and then sent to the client and immediately rendered. Faster initial load, but more complex and requires additional resources like a server. Useful for sites where SEO is important like blogs and e-commerce. Becoming more popular due to frameworks like Next
<!--ID: 1702556256672-->


Q: What is ssg?
A: SSG is static site generation, it essentially builds out your entire website at build time, so that no further work is needed. Useful for content sites that don't change often and don't require backend work like blogs, but leads to increased build time and needing to completely rebuild everything for a simple change.
<!--ID: 1702556256676-->


Q: What is pre rendering?
A: Rendering technique similar to SSG but allows you to pre-render only certain critical pages. Providing more flexibility than SSG.
<!--ID: 1702556256679-->


Q: What is incremental static regeneration?
A: Popular framework feature that allows you to periodically check for updates on static content, allowing it to be more dynamic and minimizing requirement to completely rebuild your site when changes are needed.
<!--ID: 1702556256681-->


Q: What is edge rendering?
A: Newer, more complex and expensive technique used to render content on the edge.
<!--ID: 1702556256682-->
