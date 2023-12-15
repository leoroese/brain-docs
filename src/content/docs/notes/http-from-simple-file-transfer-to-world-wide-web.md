---
title: http-from-simple-file-transfer-to-world-wide-web
---
HTTP started as a method for transferring files in a lab environment, evolving alongside the World Wide Web.

### HTTP/0.9: The One-Line Protocol
- Simplest form, only the file itself in response.
- Example request: `GET /mypage.html`.

### HTTP/1.0 Extensibility
- Added versioning, status codes, HTTP headers, content-type

### HTTP/1.1 Standardization
- Reuse connections, pipelining, chunked responses, enhanced cache control, content negotiation, server collocation through host headers

### Next 15 years
- HTTPS, REST, server sent events, websockets, CORS

### HTTP/2 Performance boost
- Binary protocol, multiplexing, header compression (HPACK), server push
- Alt-svc for smarter CDN, client hints

### HTTP/3 Levaraging Quic
- Uses QUIC protocol over UDP for quicker setup and reduced latency
- Integrates TLS handshake into initial QUIC handshake, separates loss detection for each stream 

HTTP/2 multiplexing is multiplexed over a single tcp connection, packet loss and retransmissions can block all transactions. Quic avoids this by running over UDP and adding loss detection and retransmission per stream, only a single stream is affected instead of all

----
## Anki

TARGET DECK
software engineering

Q: What is the binary protocol?
A: HTTP/2 sends data in binary format, which is much more efficient and less error prone than text-based formats
<!--ID: 1702329065710-->


Q: What is multiplexing?
A: Allow for multiple request / response messages at the same time over a single tcp connection. Reduces latency and load times
<!--ID: 1702329065716-->


Q: What is header compression?
A: HPACK is able to compress headers that are sent with every request which is useful for slower connections and mobile. Uses huffman encoding and indexing for referencing
<!--ID: 1702329065720-->


Q: What is server push?
A: Server sends resources to client before client requests them.
<!--ID: 1702329065724-->


Q: What is Quic and why is it useful?
A: QUIC (Quick UDP Internet Connections) is a transport layer protocol used by HTTP/3. It accelerates connections by utilizing UDP and handling packet loss and retransmissions individually per stream, unlike HTTP/2's single-stream approach. This reduces delays caused by lost packets or retransmissions.
<!--ID: 1702329065725-->





