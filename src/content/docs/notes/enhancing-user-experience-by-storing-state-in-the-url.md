---
title: enhancing-user-experience-by-storing-state-in-the-url
---
In frontend programming, particularly with React, we can enhance the user experience significantly by storing non-sensitive application state in the URL. This approach facilitates easy sharing and recreation of specific application views.

Imagine a user trying to share their current application view, but they can't, as the state is hidden behind a multitude of steps instead of reflected in the URL.

By embedding the application's state in the URL, users can share their exact view with just a link.

While this method is incredibly useful, it's vital to ensure that sensitive data, like personal information or authentication tokens, is never included in the URL.

Ask yourself, does putting this state information into the URL simplify sharing without compromising security?

**Useful information in url state**:
- tabs
- accordion, modals, open states
- sorting / filtering information
- search queries
- page number
- scroll position