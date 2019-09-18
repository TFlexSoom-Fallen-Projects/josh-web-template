# Standard Website for Self-Marketting and Otherwise
After doing some web development work, I wanted to see how cool of a site I could make on my own. The goal of this project is to create a standardized website for any purpose. This is more than just having a bootstrap template, using class names to create sufficient styles. This should also include ways to change the content as well. Adding images and responsiveness, the site should handle ample information.

This will be a static site rather than a dynamic. Everything should be servable via Browserside javascript. I will also include a grunt build process as the best services come in simple node packages.

# How to Run the Site
With an internet browser navigate to index.html within the example directory ("template"). The browser should take care of the rest.

## Creating your own site
This should proceed in 2 steps.
1. `npm install` on root directory of this repository. [What does this mean?](#How%20To%20NPM)
2. Follow the `README.md` instructions within `template/` directory. Or simply proceed to step 3.
3. `npx grunt` for the base build. This will create a new directory called newTemplate which stores the entire site. You can also deem a new name for the directory by setting the "newTemplate" environment variable. I believe this is `newTemplate="SOME_NAME_HERE"` in bash.
4. `npx grunt` will not overwrite previously created templates. You must either, rename the directory or run `npx grunt clean` to remove the directory entirely, losing your work.

# Remains Editable after creation
Currently the scripts run each time the site is loaded. This means rather than precompiling (which would be better for users), you can make edits to your `content/` directory and they will still be served within your site.

# How to add to the project
I have a lot of ideas for the project, but even some features might elude me. Feel free to submit pull requests or otherwise. I have a few ideas within the `documentation/design/`
directory. Feel free to implement any of those considerations. You may also create an issue for clarity on a specific feature.
- Please Title your pull requests with simple, direct, and action-orientated sentences
- In the description please explain how to test the addition (Does not have to be an automated test)
- Also include the technologies used and how to use it within the template project

# Testing The Project
I will propose tools for automated testing after the initial project is complete. I have not experimented with DOM based test suites, but testing should not be an afterthought.

# Tools Used So Far
- Marked (Markdown Compiler)
- ReactJS
- Babel
- rimraf
- Grunt

# How To NPM
This project does require [NodeJS](https://nodejs.org/en/). It also requires N(ode) P(ackage) M(anager) which is provided with Node (as long as you did not deselect that option).
Once installed the command `npm` or `npm install` will work in your terminal or command prompt. If you are not well versed with these there are files which run the commands for you.
These are stored in their respective directory scripts. If you double click on them in a file explorer, then they will run.
- `npm_install.bat` is for Windows command prompt or other DOS style systems
- `npm_install.sh` is for terminal, but one could use it with bash, Windows Powershell, etc.
Run the command then wait for it to complete. If you do not use command prompt or terminal, I would really recommend trying it out. Otherwise, I do provide similar files for the other commands mentioned above. They will not provide information on errors, but they will work if you have followed the steps correctly.