---
title: Connection pool
---
Cache of [[database-connections]] used to maintain long running database connections in memory to avoid context overhead of needing to create new connections since it's an expensive operation.
## Tradeoffs
- Larger pools have better availability at expense of resource consumption
- Need to be careful with stale connections
## Best practices
- Choose the correct pool type
- Configure pool size optimally
- Set correct recycling time to avoid stale connections

----
## Anki

TARGET DECK
software engineering

Q: What is a connection pool?
A: A technique used to maintain long running database connections in memory for efficient re-use. Don't need to worry about overhead of creating a database connection which can be expensive, but too many can cause performance degradation.
<!--ID: 1700931751960-->
