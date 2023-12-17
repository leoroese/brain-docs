---
title: Understanding the Linux foundations of container technology
---
Containers are a lightweight form of virtualization, leveraging several Linux kernel features to create isolated environments

It does so by moving past the traditional `chroot` command -- a command that shifts the root directory of the current processes and children. Creating a "jail" like environment where the group of processes are unable to access resources outside of it's environment.

Modern container runtimes have evolved to use `pivot root(2)` from `chroot`, which enhances security by moving mounts in a separate directory, thereby making them invisible to malicious "break out" processes that escape isolation.

## Namespaces
Namespaces are a Linux kernel feature that encapsulates global system resources, presenting each process within a namespace with its own isolated version of these resources. This isolation is key to process separation and utility provision in container environments.

Essentially namespaces allow you isolate processes from one another, while providing useful utilities.

Key container namespaces:
- **API**: Tools like `clone`, `unshare`, `setns`, and `proc` for namespace management.
- **Mount (mnt)**: Builds secure environments akin to jails.
- **Unix Time-Sharing System (uts)**: Allows sharing of domain and hostname.
- **Interprocess Communication (ipc)**: Isolates shared resources among processes.
- **Process ID (pid)**: Assigns unique identifiers to processes.
- **Network (net)**: Virtualizes network interfaces.
- **User ID (user)**: Enables creation of user namespaces.
- **Control Group (cgroup)**: Manages resource limits, priorities, accounting, and control.

---
## Attributions
- [Sascha Grunet medium article](https://medium.com/@saschagrunert/demystifying-containers-part-i-kernel-space-2c53d6979504): Underlying container tech deep-dive
- [Nginx](https://www.nginx.com/blog/what-are-namespaces-cgroups-how-do-they-work/): Explaining namespaces

----
## Anki

TARGET DECK
docker

Q: What is the role of 'pivot root(2)' in containers, and how does it differ from 'chroot'? 
A: 'Pivot root(2)' is used in containers to enhance security by isolating mounts in separate directories, making them invisible to escaped ('broken out') processes. It's a more secure alternative to the older 'chroot' method.
<!--ID: 1702814520485-->


Q: What are namespaces in the context of Linux containers, and why are they important? 
A: In Linux containers, namespaces are key features that isolate processes by providing each with a unique set of resources. This isolation is crucial for the functionality and security of containers.
<!--ID: 1702814520491-->


Q: What is chroot jail?
A: Concept where by utilizing chroot, you create a "jail" in a sense. Where processes are unable to access resources outside of it's isolated environment.
<!--ID: 1702814520493-->