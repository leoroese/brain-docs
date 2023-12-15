---
title: manipulating-local-dns-with-hosts-file
---
Operating system file that maps hostnames to ip addresses in plain text.

## Where to find in OS
- Unix: `/etc/hosts`
- Windows: `%SystemRoot%\System32\drivers\etc\hosts`

## History
ARPANET -- predecessor to the internet didn't have a distributed host name database, each node within the network had it's own local map of network nodes.

This didn't scale and thus our favorite (where did my configuration go wrong) DNS was created.

## How it works
1. Computer asks hosts file "do you know where google.com is?"
	1. If yes, responds with ip address mapped in the hosts file
	2. If no, forwards to DNS

## Format example
```text
127.0.0.1   localhost
192.168.1.1 myrouter.com
122.12.1.1  mycompany.com www.mycompany.com

# blocking a website
127.0.0.1   badwebsite www.badwebsite.com
```

## Use Cases 2023
- **Redirecting local domains**: Can map a domain to a local ip address
- **Internet resource blocking**: Block online ads or malicious servers
- **Software piracy and malicious**: Malicious software or piracy can modify the hosts file either redirecting maliciously or preventing contact to activation servers

## Caveats
- Careful with local DNS caches.


---
## Attributions
- https://en.wikipedia.org/wiki/Hosts_(file) -- history, locations, use cases
- https://pressidium.com/blog/the-hosts-file-a-powerful-tool-for-users-and-developers/ -- testing a website locally
- https://acquia.my.site.com/s/article/360004175973-Using-an-etc-hosts-file-for-custom-domains-during-development -- how to expose local domain

----
## Anki

TARGET DECK
software engineering

Q: What is the hosts file and how does it work?
A: Special file that existed before DNS. Essentially a map for ip address to domain names. First your computer will check the hosts file to see if ip address for a domain is known locally, if not, then it will request from DNS. It's useful for redirecting local domains, blocking internet resources, and can be used with malicious intent.
<!--ID: 1702244166779-->
