---
title: Guiding web robots effectively
---
The `robots.txt` file and `noindex` directive serve as crucial tools for instructing web robots, primarily those from search engines, on how to crawl and index a website."

These elements are a key part of the Robot Exclusion protocol, a set of web standards that govern the activities of web-crawling robots.

To implement `robots.txt`, place the file at the root of your website's directory

```ad-note
title: Robots caveats
- robots.txt doesn't prevent linked pages or files from getting indexed. If you want to prevent those, you need to use `noindex` meta tag or http header
- It is crucial to understand that `robots.txt` is a directive, meaning well-behaved robots typically respect it, but malicious ones might choose to ignore it.
```

````ad-tip
title: Example robots.txt
```
User-agent: *
Disallow: /private/
Disallow: /temp/
```
````

---

## Anki

TARGET DECK
web development

Q: How can you guide web robots in indexing or crawling your website?
A: Use a `robots.txt` file at your website's root directory to set rules for web robots. While `robots.txt` helps in directing robots, it doesn't prevent the indexing of linked pages or files; for this, use the `noindex` meta tag or HTTP headers. Remember, these are directives and depend on the robot's creator to respect them.

<!--ID: 1697479906521-->
