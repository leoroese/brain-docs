---
title: rest-api-design
---
REST APIs form the backbone of many modern applications, facilitating seamless communication between different software systems.

REST means "representational state transfer", which refers to a set of principles and constraints for building APIs.

An API is pretty much a bridge that allows programs to communicate to each other, rest allows you to transfer the state between these programs whether that be creating a row in the database, or requesting some data, it usually starts at some type of API.

In addition to REST, there are other API paradigms, such as GraphQL and RPC, each with its unique use cases.

## Rest api design tips
- **Use Nouns instead of verbs**: [[prefer-nouns-over-verbs-in-rest-api-routes]] to simplify route creation.
- **Use logical nesting**: Use the url to reflect relationships between objects, but avoid going deeper than 3.
- **Handle errors gracefully**: Aggregate, log, report, and use the correct status codes and helpful messages.
- **Design for large databases**: Look to support filtering, sorting, and pagination through query params.
- **Use security best practices**: Setup SSL certs, use HTTPS, and authentication / authorize your requests where needed.
- **Version correctly**: Versioning is hard no matter what, look to version your api's from the beginning.



---
## Attributions
- [Rest best practices](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/): Document for best practices around rest api design.
- [Algolia](https://www.algolia.com/blog/product/what-is-a-rest-api/?utm_source=google&utm_medium=paid_search&utm_campaign=rl_emea_search_plg_nb_dynamic&utm_content=blog_product_dynamic&utm_term=&utm_region=emea&utm_model=nonbrand&utm_ag=rl&utm_persona=dev&_bt=571020055133&_bm=&_bn=g&utm_camp_parent=plg&gad_source=1&gclid=CjwKCAiA1MCrBhAoEiwAC2d64YjOCBane1zdGQvXYrCnKqUQfYlcrc4LUkfpyItVEi7OpiLN6PS6fhoCkqIQAvD_BwE): Explains what a rest api is.

----
## Anki

TARGET DECK
software engineering

Q: What are some best practices regarding rest api design?
A: - Use nouns instead of verbs
- Use the correct http method
- Use logical nesting if necessary
- Handle errors gracefully, log and report
- Design for large databases with filtering and pagination
- Follow security best practices around authentication, authorization, cors, https, and ssl certs
- Version from the beginning
<!--ID: 1701897366692-->
