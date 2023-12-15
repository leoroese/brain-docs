---
title: Automating build test and deploy with ci cd
---
CI/CD is a tool that allows for automating build, testing, and deployment workflows.

I will be using Github actions in this piece, but I believe the teachings should translate to other tools.

The main components to CI/CD are:
- **Workflow**: An entire encompassing collection of jobs to run to accomplish some goal, such as build and test or deployment.
- **Jobs**: Unit of work in a workflow, typically run sequentially or in parallel.
- **Steps**: A statement within a job, either running a script (you define) or an action (reusable extension from github marketplace)
- **Event**: A specific activity that triggers a workflow
	- Opening a pr, pushing code, adding a tag
- **Runner**: Environment where your workflow is run

---
## Attributions
- [Github actions docs](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)

----
## Anki

TARGET DECK
software engineering

Q: What is CI/CD?
A: Tool for automating parts of your dev workflow such as building, linting, testing, and deployment workflows. 
<!--ID: 1702243470278-->
