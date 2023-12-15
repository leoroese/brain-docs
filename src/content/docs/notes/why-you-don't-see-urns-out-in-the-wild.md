Uniform Resource Names (URNs), a subtype of Uniform Resource Identifiers (URIs), is a permanent identifier for internet resources and employs the urn scheme. 

A URL becomes invalid if data is moved to a different location, this is not the case with URN, it remains constant when objects and resources are moved.

Perhaps I just haven't had to use resources where this persistence is beneficial, I almost never see URNs. Here are some reasons why:
1. **Dynamic web content**: The nature of the web is transient; most resources evolve or are replaced neglecting the need for a persistent identifier. URN content versioning depends on the specified namespace (ISBN, IETF, etc)
2. **Resolution complexity**: Unlike URLs, which resolve easily through browsers, URNs require an additional resolution process that is not universally supported or implemented.
3. **Lack of adoption**: Common tools and protocols, such as web browsers and HTTP, are not typically designed to accommodate URNs.

Urns are a lot more common in backend systems like AWS instead of browser based tools.

---
## Attributes
- [Whatis](https://www.techtarget.com/whatis/definition/URN-Uniform-Resource-Name): Explanation on what URNs are

----
## Anki

TARGET DECK
web development

Q: What are urns and why are they not more widely used?
A: Uniform resource names are permanent identifiers of a resource that belongs to a specific namespace like isbn. Typically not used due to dynamic nature of the web, lack of adoption in popular tools and protocols, and extra complexity when resolving fetch requests.
<!--ID: 1699898456754-->
