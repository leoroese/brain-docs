---
title: Understanding data in web dev with Mr Mime types
---
MIME types identify the nature and format of resources on the web, typically using the format `type/subtype;parameter=value`, such as `text/plain;charset=UTF-8`.

Web browsers rely on MIME types, not file extensions, to determine how to process a URL. This is why the `Content-Type` header in HTTP requests is crucial.

## Types of mime types
### Discrete
Single files or media, such as text, music, images, and video

**Examples**:
- **application**: Binary data
- **image, video** : For specific media types

Images sometimes by also be represented in-line using `data:image/png;base64,<img string>`

### Multipart
Used for composite documents comprised of multiple components, each potentially having their own mime type.

**Use cases**:
- Email with multiple attachements
- Multi file upload in single request

**Examples**
- **message**: Encapsulates other messages
- **multipart**: Multiple components each with their own unique mime-type

### Mime-type detection
In cases where MIME types are missing or incorrect, browsers may perform MIME sniffing, attempting to guess the correct type based on the resource's bytes.

**Examples**:
- magic numbers: Specific byte sequences may represent a specific type like png, similar to credit cards
- **file suffixes**: Primarily in windows

---
## Attributions
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types

----
## Anki

TARGET DECK
web development

Q: What are mime-types?
A: Special format to identify nature and format of a document. Can either be discrete which represent a single file, or multipart which can represent a collection of different components each with their own unique file type.
<!--ID: 1702388574657-->


Q: When are multipart mime-types typically used?
A: Emails with multiple attachments and multi file uploads
<!--ID: 1702388574662-->


Q: What is another way images can be represented in line with mime types?
A: You can represent an image using data:image mime-type with a base64 encoded string representation of the image
<!--ID: 1702388574667-->



