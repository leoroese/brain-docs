---
title: Speed up pull requests using stacked diffs
---
In the traditional pull request model, developers often encounter delays and complexities due to lengthy reviews and difficulty in understanding large code changes.

Unlike the traditional model where a pull request can contain multiple commits, the stacked diffs approach simplifies this by adhering to a '1 PR = 1 commit' model.

Stacked diffs make code reviews more manageable by breaking down changes into smaller, more digestible units, allowing reviewers to provide focused and timely feedback.

 [Graphite](https://graphite.dev/docs/intro-to-graphite), the tool I've been using, streamlines the process of managing stacked diffs by simplifying complex git patterns and promoting trunk-based development, where all development happens on a shared branch

