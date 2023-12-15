Nuxt is strongly opinionated and therefore comes with some nice things

## TLDR
- Alot of the nice from next.js pages directory, with remix route handlers
	- Match http method matching like login.post
- Alot of built-in helpers
- Very opionated
- useFetch for setup, $fetch for interaction
- useState for state
- Feels like a lot of the interesting parts of react is supported with Nuxt components like Suspense, ErrorBoundary
- 

## Main concepts
- Auto imports on certain directories
	- Can enhance with nuxt.config
- Nuxt composables within nuxt plugins, middleware, or vue setup function
- Nitro is its home built server tech
	- Cross platform, serverless support, automatic code splitting, hybrid mode api routes. Uses h3 (minimal http lib) internally
- Can add an api layer similar to next.js, or even like remix with server form actions
- Everything is a dev dependency
	- This sometimes doesn't play nicely with docker builds
	- .output contains standalone code to run app in any enviornment (like docker)
- Supports multiple rendering modes
- Supports custom nuxt modules, which are build time only 
- file based routing similar to next.js pages directory
- Lots of helper composables
	- useState -- ssr friendly ref
	- useFetch -- fetch data from api endpoint
	- useNuxtApp -- access runtime context of the app (things like db or auth)
	- useRoute -- get route params
- Lots of helper utils
	- $fetch -- client side method, otherwise useFetch
	- clearError -- 
- Can use layouts, route caching

## Quirks
- 

