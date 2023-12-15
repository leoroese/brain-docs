---
title: oauth-implicit-flow
---
The implicit flow is an Oauth protocol flow designed for scenarios where only user authentication is needed, no authorization.

Extremely simple, requiring no access tokens or backend api calls for authorization.

## How it works
1. The client makes a POST request to `/authorize` for user authentication.
2. The server returns an `id_token` upon successful authentication.

```ad-important
title: Login only focus
Should only ever use this flow for login only use cases. If you need access tokens for backend calls use code with pkce or hybrid

Focuses on apps that simply wants to log the user in, but not make any requests on their behalf
```

---
## Anki
TARGET DECK
authentication

Q: What is the OAuth Implicit Flow, and when should it be used?
A: The OAuth Implicit Flow is a simplified authorization process used for applications that require only user authentication. It involves making a POST request to `/authorize` and receiving an `id_token`. This flow is not recommended for cases where backend API access is needed and should be used only for login-only applications.
<!--ID: 1700558287067-->
