Combination of [[oauth-grant-code-flow]] and [[oauth-implicit-flow]]. This is possible for apps that can securely store client credentials.

This method is often used for server-side rendered (SSR) frontend stacks like next.js and nuxt.

Includes multiple `response_type` values in a single authorization request. Including combinations of
- code
- id_token
- token


My initial intuition is that this is how SSR frontend stacks like Next authentication.

Can have multiple `response_type`
- code
- id_token
- token

---
## Attributions
- [Auth0 Docs](https://auth0.com/docs/get-started/authentication-and-authorization-flow/hybrid-flow)

----
## Anki
TARGET DECK
authentication

Q: What is the hybrid flow?
A: The OAuth Hybrid Flow is a combination of the code and implicit flows, suitable for clients that can securely store credentials. It's typically used in applications combining `response_type` values such as `code`, `id_token`, and `token`, offering a flexible and secure authentication solution.
<!--ID: 1700558287069-->
