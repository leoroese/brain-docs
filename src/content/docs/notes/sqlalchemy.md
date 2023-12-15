---
title: sqlalchemy
---
SQLAlchemy is not just a powerful ORM and database connection toolkit for Python; it simplifies and streamlines the process of interacting with a variety of databases.
Follows a "commit as you go" mentality.

Shares similarities to tools like Zod and Drizzle.

## Engine
Starting point for any SQLAlchemy application
- Provides both factory and [[connection-pool]] to manage [[database-connections]]

Best practices
- Single global engine per database server
- Ensure correct configuration, excess logging might slow down

## Key objects
- **MetaData**: MetaData is essentially a catalog of Table definitions and other associated schema elements.
- **Table**:  Each Table object represents a database table and is usually mapped to a Python class in ORM
- **Column**: Columns represent fields in a table, with specific data types and constraints.

> The modern approach uses ORM helpers to manage the above key objects for you