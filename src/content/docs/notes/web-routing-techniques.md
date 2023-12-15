---
title: web-routing-techniques
---
## Client side routing
Navigation work happens client side with javascript without needing to request to server for new pages.

### How it works
1. Clicks on link
2. Routing side library catches the event, detects the url is an internal link, prevents browser from making HTTP request
3. Routing library then uses javascript to manually change the url displayed in browser (typically using history api)
4. Routing library than changes state of the app
5. App re renders with updated state

**Pros**
Smoother and faster after initial load

**Cons**
- Longer initial load
- Not SEO friendly

## Server side routing
Server-side routing ensures that each URL directly corresponds to a specific resource on the server, making it ideal for content-heavy and SEO-focused websites.

### How it works
1. Click on new link
2. Makes http GET request to server for resource
3. Server process and responds with HTML typically
4. Browser discards old webpage and displays newly downloaded one

**Pros**
Better for SEO since content changes less frequently and is on server

**Cons**
Slower page transitions, each new page is an entire server request

## File based routing
Routes of your web app are determined by file structure in your directory

**Pros**
- Simplicity
- Convention vs configuration, removes boilerplate
- Intuitive: Easy to understand

**Cons**
- Less flexible
- Dynamic patterns and parameters get complex

## Server centric routing
Server-centric routing provides a more dynamic approach, allowing for complex routing patterns and server-side logic, making it suitable for applications requiring advanced back-end interactions like Next.js app directory.

**Pros**
- Allows for more complex routing like patterns like parameterized routes, server-side functions, api routes, different HTTP method support

**Cons**
- Complex
- Overhead -- lots of moving pieces

Tools like Nuxt, Remix, and Next all utilize this style of routing to support complex features.

----
## Anki

TARGET DECK
web development

Q: What is client side routing, and how does it work?
A: Routing that happens on the client side typically done by some library. Whenever a link is clicked, that event is intercepted by the routing library and prevents the http request for the resource. The library than manually updates url and state of the app, then re-renders to show the updated state.
<!--ID: 1702557280829-->


Q: What is server side routing and how does it work?
A: Server side routing is more traditional approach where each url maps to a resource on the server. Each link click makes an http GET request to the server for the resource, which is then processed and sent back to the client. Browser then discards the old content and replaces it with the new one.
<!--ID: 1702557280833-->


Q: What is file based routing?
A: Routing mechanism that takes the structure of your files to represent the routes in your app. Replaces boilerplate with convention.
<!--ID: 1702557280838-->


Q: What is server-centric routing?
A: More complex server side routing that allows for complex dynamic routing patterns. Allowing for features such as dynamic parameters, server-side functions, api route handlers, and supporting different HTTP methods. Popular frameworks like Next and Nuxt utilize this type of routing to support its routing based features.
<!--ID: 1702557280841-->



