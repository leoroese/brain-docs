---
title: Using video games to navigate log levels
---
In software development, selecting the appropriate log level is like choosing the difficulty setting for your play-through.

It helps determine the amount of information received and which achievements are unlock-able.

Just as choosing a higher difficulty allows you to unlock lower difficulty achievements as well, setting a log level to "INFO" means capturing not only "INFO" level logs, but also "WARNING", "ERROR", "CRITICAL".

Although it seems reversed, in order for the analogy to work you can think of the mappings like:

| Level    | Difficult           |
| -------- | ------------------- |
| DEBUG    | Insane Hardest mode |
| INFO     | Expert              |
| WARNING  | HARD                |
| ERROR    | Medium              |
| CRITICAL | Easy                |

## What type of logs belong at which level

### Debug

Detailed information, usually only relevant in development or debugging. Help to trace the flow and understand the internal state of the application

`logger.debug("Entered text data: 'sup', begin saving process")`

### INFO
Logs that help confirm that things are working as expected.

`logger.info("User created successfully")`

### WARNING
Logs that indicate something unexpected happened, doesn't interrupt the application but might require attention.

`logger.warn("Memory usage exceeds 80%")`

### ERROR

Logs that represent significant problems where the application failed to do something it was trying to.

`logger.error("Failed to save to database, invalid NULL value for non nullable field")`

### Critical
Extremely serious issues where application might crash.

`logger.critical("Database connection failed. Unable to access user data. All transactions are halted.")`

## Modifying log levels

There are many different strategies for modifying the log levels, each with their own tradeoffs
- **Modify configuration**: You can change the log level in the app code directly.
- **Env var**: Can modify the log level using an ENV var, but will require a restart to take effect
- **Dynamic**: Can create an endpoint to dynamically modify the runtime logging level, this is useful for debugging without downtime but requires a bit more setup.

