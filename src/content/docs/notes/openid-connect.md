---
title: openid-connect
---
OpenID connect (OIDC) is an authentication layer built on top of [[oauth2.0]].

It allows third party applications to obtain identity and profile information about a user.

## How it works
1. The client sends a request to the OpenID provider (an authentication server, such as Google).
2. Auth server successfully authenticates the user.
3. OpenId provider prompts a consent form to the user, detailing what the third party application is requesting access to.
4. After approval, an id_token and access_token is provided to the user.
5. Client can then use access_token for authorizing requests.


---
## Attributions
- [Auth0](https://auth0.com/docs/authenticate/protocols/openid-connect-protocol):  Comprehensive guide and best practices on implementing OpenID Connect using Auth0.
- [OpenID](https://openid.net/developers/how-connect-works/) : OpenID docs on how it works
- [Spec](https://openid.net/specs/openid-connect-core-1_0.html): OpenID spec information


----
## Anki

TARGET DECK
authentication

Q: What is OpenID connect?
A: Authentication layer built on top of Oauth2.0
<!--ID: 1700558287058-->


Q: What is the openID typical flow?
A: 1. Client sends auth request to openId provider
2. Provider authenticates the user
3. Provider displays a consent form about permissions
4. Provide returns back jwts in form of id_token and access_token
5. Client can then use access_token to authorize access protected resources
<!--ID: 1700558287060-->






