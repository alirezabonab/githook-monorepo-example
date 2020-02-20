# githook-monorepo-example

**Best practice setup for "Git-Hook" and "EsLint" for teams and also mono repositories**


If you are setting up a mono-repo consist of Javascript/Typescript projects and you want to work on it with your team then you need to setup es-lint in a proper way.
There are already tools like husky and  lint-staged that you can utilise to setup es-lint on git-hooks but when it comes to mono-repositories, those will not work properly in sub-directories.
This is a quick tutorial on how to setup Git-Hooks in a mono-repo and also in control of the team, because you want everyone in your team have the consistent experience with es-lint.
Things we are going to do in bullets:

- setup es-lint in each Typescript/Javascript project

- setup git-hook script

- create an init script which every developer for the first time will use

- make script files executable

- push everything to remote and happiness begins :)


## Setup es-lint in each Typescript/Javascript project
Here is a structure of our code base which consist of different Typescript/Javascript projects.
backend
frontend
shared-libraries, etc…

We create in each of these projects a .eslintrc.js file which includes our configuration for es-lint and in package.json we would have a script that runs es-lint against that project or sub-directory.

https://github.com/sunnystatue/githook-monorepo-example/blob/master/frontend/.eslintrc.js

https://github.com/sunnystatue/githook-monorepo-example/blob/master/frontend/package.jsonBy

adding that lint script in package.json we enable our git-hook pre commit script to run the es-lint with the local project specs and uses each project's node_modules independently.


## Setup git-hook pre-commit script
The purpose of the whole thing is when developers in team decided to add file to stage and then commit them, before commit process we run the es-lint to make sure everyone is committing good quality code.
There is a concept of hooks in git repositories if you open .git/hooks folder you would see list of different samples on different type of hooks.
.git/hooksWe create a separate folder and change the default hooks folder in our code base named git-hooks to keep the hooks in a way that we can share it with the team.
Then we create the pre-commit which will keep our logic on commits. Here is the backend section code which is pretty sam as frontend.

https://github.com/sunnystatue/githook-monorepo-example/blob/master/git-hooks/pre-commitWhat

**what we do:**
- list files that are in backend/src folder that are staged and they are one of the (js|jsx|tsx|ts)
- remove the backend/src prefix and fix the path strings
- run backend eslint against those files with --fix option
- try to stage them again for those which are fixed
- if eslint result is fail to fix all errors we exit the commit with out committing and print a message to tell developers they need to fix some stuff.
- It's pretty same for the frontend.

Then we need a init script which will act as a initial trigger to setup everything, this script file only contains one line:

```
git config core.hooksPath ./git-hooks
```

This tells the git to look for ./git-hooks for hooks.
That's it, Isn't it wonderful?! :D


## Make script files executable
Now the only thing is left is to make pre-commit and init files executable other wise it won't work. to do that we run below commands:
```
chmod +x git-hooks/pre-commit
chmod +x git-hooks/init
git add .
# make these files executable in git
update-index --chmod=+x git-hooks/pre-commit
update-index --chmod=+x git-hooks/init
git commit -m"make init and pre-commit executable"
```

## Push everything to remote
At this stage everything is setup and if you pull from another directory or machine the only thing to do is run ./git-hooks/init and then every time a developer make a change in (js|jsx|tsx|ts) files and tries to commit the eslint runs against that file.
To get the initial sample repository use this Github link.
