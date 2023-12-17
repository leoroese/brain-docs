---
title: Containers vs virtual machines
---
In the field of virtualization, containers and virtual machines (VMs) offer distinct approaches to system isolation and resource management.

## Containers
Containers focus on virtualizing the operating system instead of physical hardware. By remembering that containers are just a "group of isolated processes", see: [[understanding-the-linux-foundations-of-container-technology]], we can remember that each container shares the same OS kernel. 

Key aspects of containers include:
- **Lightweight**: Containers package only necessary components, often sizing in the MBs instead of GBs
- **Efficiency**: By sharing the host OS kernel, containers can avoid duplicating the OS
- **Adaptability**: Faster startup times, improved portability and scalability

## Virtual machines
VMs, on the other hand, emulate physical hardware through a hypervisor, essentially creating multiple virtual servers on a single physical machine. 

VMs package an entire copy of the OS, binaries, and everything else taking up into the GBs which slows down boot up speed.

---
## Attributions
- [What is a container?](https://www.docker.com/resources/what-container/?_gl=1*155u3vp*_ga*MTQ0MjE3MTA1NC4xNzAxMDAwMTc5*_ga_XJWPQMJYHQ*MTcwMjgwODgyNi4yLjEuMTcwMjgxMDQwNS40MS4wLjA.): Docker docs on explaining what a container is

----
## Anki

TARGET DECK
docker

Q: How do containers differ from virtual machines in terms of system virtualization? 
A: Containers virtualize the operating system, sharing the OS kernel across containers, leading to a more lightweight and efficient model. In contrast, VMs virtualize physical hardware, with each VM running a full OS stack, resulting in greater resource consumption and slower boot times.
<!--ID: 1702815295823-->
