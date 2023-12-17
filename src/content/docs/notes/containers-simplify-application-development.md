---
title: Containers simplify application development
---
A container is a sandboxed process running on a host machine that is loosely isolated from all other processes on your host machine.

Run with their own virtualized filesystem typically provided by images, see: [[optimizing-containers-with-docker-images]].

Alternatively, containers can be thought of as an isolated group of processes running on a single host, which fulfill a set of "common" features. Utilizing existing linux tools to achieve this isolation, see: [[understanding-the-linux-foundations-of-container-technology]].

They are independent by nature, containing all the tools necessary to run it's own software, binaries, configurations.

Containers are extremely portable, they can be run on your local machine, virtual machines, or deployed on the cloud.

Containers share a lot of resemblances to virtual machines, see: [[containers-vs-virtual-machines]].


---
## Attributions
- [Docker getting started](https://docs.docker.com/get-started/) : Getting started guide by docker

----
## Anki

TARGET DECK
docker

Q: What is a container?
A: An isolated group of processes that contain all the necessary information to run an application in a contained, secure, and portable environment.
<!--ID: 1702818043979-->
