---
title: Prefer nouns over verbs in rest api routes
---
Use nouns instead of verbs in your api routes.

The HTTP method is already the verb, the endpoint should contain the noun of what the resource you're interacting with.

| Method | Job                          |
| ------ | ---------------------------- |
| GET    | Retrieve resources           |
| POST   | Submit new data              |
| PUT    | Idempotent operation on data |
| PATCH  | Update existing data         |
| DELETE | Remove data                  |

```ad-tip
title: Rest api urls

get: /articles/
post: /articles/
put: /articles/:id
patch: /articles/:id
delete: /articles/:id
```

---

## Anki

TARGET DECK
software engineering

Q: What is something to remember about put http method?
A: The put method should always be idempotent.

Q: What does idempotency mean?
A: Similar requests will result in same outcome.
