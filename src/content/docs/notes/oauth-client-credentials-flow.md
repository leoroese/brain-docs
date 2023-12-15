---
title: Oauth client credentials flow
---
Client exchanges client_id and client_secret for access_token

Typically used for maching-to-maching (M2M) applications.
- Backend services
- CLI daemons

## How it works
1. Client sends client_id and secret to auth server /token
2. Auth server validates
3. Returns access token

---
## Anki
TARGET DECK
authentication

Q: What is the client credentials auth flow?
A: Auth flow useful for machine-to-machine authorization. Machine client can exchange client_id, client_secret for an access_token
<!--ID: 1700558287065-->
