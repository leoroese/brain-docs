---
title: Oauth grant code flow
---
Authentication process used by web apps to exchange short-lived, server side code for a token.

The code is typically stored server side, in a secure persistent storage.

Security is further enhanced in that the client must authenticate itself using client_credentials (client_id, secret) to exchange the code for tokens.

## How it works
1. **User Login Initiation**:
    - User clicks the login link on the client application.
2. **Authorization Request**:
    - The client sends a `/authorize` request with `response_type=code`.
3. **User Authentication and Consent**:
    - User is redirected to a login/authorization prompt, where they authenticate and give consent.
4. **Authorization Code Issuance**:
    - An authorization code is sent back to the web application.
5. **Token Exchange**:
    - The web app sends a request containing the code, `client_id`, and `client_secret` to `/oauth/token`.
6. **Token Receipt**:
    - Upon validation, the server responds with an `id_token` and an `access_token`.
7. **Accessing Resources**:
    - The client uses the access token to request resources.

---
## Attributions
- [Auth0 Docs](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow)

---
## Anki
TARGET DECK
authentication

Q: What is the code flow?
A: It's an authorization process for web apps where a login request to `/authorize` with `response_type=code` leads to user authentication. The web app then exchanges the returned authorization code for tokens at `/oauth/token`, which includes `client_id` and `client_secret` for validation.
<!--ID: 1700558287074-->


Q: What is a code in the code flow?
A: The 'code' is an opaque, server-side value that is short-lived, single-use, and stored persistently. It is used to validate the authentication request lifecycle fully.
<!--ID: 1700558287076-->
