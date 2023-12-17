---
title: Optimizing containers with docker images
---
An image is a standalone, isolated filesystem (system state) containing everything necessary to run an application.

It's a series of sequential commands, usually specified in a Dockerfile of similar configuration. 

## Layers
Each command within the configuration file creates a new layer, which is a cacheable snapshot of the system state at that point. 

These cached values can be reused by docker builds, to speed up rebuild time.

Layers offer extensibility features that enable you to extend an earlier image or image layer at any command step.

Changes to each layer are tracked, similar to version control tools like GIT. Placing commands that are likely to change towards the end of your Dockerfile can significantly speed up build times. This is because layers depend on one another, and changes in one layer may require subsequent layers to be rebuilt.

## Multi-stage
Multi-stage builds allow for parallel execution of building and enhanced organization.

**Image Building Best Practices**:
- **Instruction Order**: Proper command sequencing optimizes the use of cached layers, speeding up the build process.
- **Multi-Stage Builds**: These allow parallel execution of build steps and result in smaller final images by including only necessary components.

---
## Attributions
- [Docker overview](https://docs.docker.com/get-started/): General definition of images
- [Coderized video](https://www.youtube.com/watch?v=J0NuOlA2xDc): Video section explaining images and layers
- [Layers](https://docs.docker.com/build/guide/layers/): Docker docs on layers
- [Multi stage](https://docs.docker.com/build/guide/multi-stage/): Docker docs on multi stage builds

----
## Anki

TARGET DECK
docker

Q: What are multi-stage builds in Docker? 
A: Multi-stage builds are a technique that allows parallelizing and splitting the image building process, improving build speed and reducing the final image size.
<!--ID: 1702818043968-->


Q: How do Docker layers work? 
A: Docker layers represent cacheable states of an image at specific commands. They track changes from previous layers, similar to version control, enabling efficient updates and rebuilds.
<!--ID: 1702818043974-->


Q: What are some best practices for building Docker images?
A: Double check command ordering, moving changing commands to tail end of steps. Utilize multi-stage builds to enhance build speed and minimize final image size.
<!--ID: 1702818043977-->
