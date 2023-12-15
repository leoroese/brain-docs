---
title: oauth2.0
---
A widely adopted authorization framework that grants third-party applications access to protected resources.

This focuses on the authorization piece of the authentication and authorization flow.

OAuth typically operates through the provision of access tokens, which grant the client specific permissions (or 'scopes') to access protected resources.

## Grant types
- [[oauth-grant-code-flow]]: For web apps
- [[oauth-grant-code-pkce-flow]]: Native (mobile) and spas
- [[oauth-implicit-flow]]: Login only apps
- oauth resource owner: Direct handling of user passwords
- [[oauth-client-credentials-flow]]: Machine to machine communication
- [[oauth-device-flow]]: Useful for constrained devices like smart tvs
- [[oauth-hybrid-flow]]: A combination of code and implicit flows, suitable for apps that can securely store credentials

## Key Endpoints
### /authorize
Interacts with the end-user to gain authorization.

Request Parameters:
- `response_type`: Specifies the grant type (code, pkce, implicit, etc.).
- `client_id`: Identifier for the requesting client.
- `redirect_uri`: Destination for successful authentication.
- `scope`: List of permissions requested by the app.
- `state`: Security feature to maintain request integrity.
- `connection`: For specifying authentication types in passwordless scenarios.


### /oauth/token

Used by applications to obtain an `access_token` or `refresh_token`. 

Used by all flows except implicit.

---
## Attributions
- [Oauth spec](https://datatracker.ietf.org/doc/html/rfc6749)
- [Auth0 Oauth](https://auth0.com/docs/authenticate/protocols/oauth)
- [Auth0 Flows doc](https://auth0.com/docs/get-started/authentication-and-authorization-flow)

----
## Anki

TARGET DECK
authentication

Q: What are the different oauth grant flows?
A: OAuth 2.0 grant types include code, PKCE code, implicit, resource owner password credentials, client credentials, hybrid, and device flows, each serving specific application needs.
<!--ID: 1700558287063-->


Q: What are the most important request parameters for an oauth request?
A:  Important OAuth request parameters include `response_type` (grant type), `client_id` (requesting client), `redirect_uri` (success redirection), `state` (security and session management), and `scope` (requested permissions).
<!--ID: 1702391047780-->




