# Standard Website for Self-Marketting and Otherwise
After doing some web development work, I wanted to see how cool of a site I could make on my own. The goal of this project is to create a standardized website for any purpose. This is more than just having a bootstrap template, using class names to create sufficient styles. This should also include ways to change the content as well. Adding images and responsiveness, the site should handle ample information.

This will be a static site rather than a dynamic. Everything should be servable via Browserside javascript. I will also include a grunt build process as the best services come in simple node packages.

# How to Run the Site
With an internet browser navigate to index.html within the example directory ("template"). The browser should take care of the rest.

## Creating your own site
This should proceed in 2 steps.
1. npm install on root directory of this repository
2. npx grunt for the base build. This will create a new directory called newTemplate which stores the entire site. You can also deem a new name for the directory by setting the "newTemplate" environment variable. I believe this is `newTemplate="SOME_NAME_HERE"` in bash.

# How to add to the project
- Please Title your pull requests with direct action orientated sentences
- In the description please explain how to test the addition
- Also include the technologies used and how to use it within the template project

# Testing The Project
I will propose tools for testing after the initial project is complete. I have not experimented with DOM based test suites, but testing should not be an afterthought.

# Tools Used So Far
- Marked (Markdown Compiler)
- ReactJS
- Babel
- rimraf
- Grunt
- Node-Sass with scss