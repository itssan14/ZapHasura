# NodeJS-Express

We used NodeJS which is an open source, browserless, run-time environment that allows us to run JavaScript code on **server side**. NodeJS has a default package manager called **npm** (Node Package Manager). npm helps in installing, sharing and reusing code and it is used for managing dependencies/packages/modules in NodeJS.
*To know more about NodeJS see [here](https://nodejs.org/en/about/).*  


The server side framework that we would be using here is ExpressJS(or Express). It is very popular and widely used because of its minimalist, fast and flexible behavior and set of features, methods, middlewares and template engines it provides. *Read [more](http://expressjs.com/).*


## Pre-requisites
* [X] **NodeJS v8.9.3 LTS** :
   - Download [here](https://nodejs.org/en/download/)
   - [X] Includes **npm v5.5.1**
* [X] **Hasura CLI**   
   - Find the Installation Guide [here](https://docs.hasura.io/0.15/manual/install-hasura-cli.html)
* [X] **[Git](https://git-scm.com)**
   - *[Only for Windows]* **Git Bash** : A Linux Command Line Interface(CLI), that enables users of Windows OS to execute git commands.   
      - Download [here](https://git-scm.com/download/win)
      - Find the Installation Guide [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [X] **Text Editor** : Use a text editor of your choice. Some of the editors are listed below :
   - Vim
   - Sublime
   - Eclipse

## Getting started
**Key concepts**
* localhost - also known as loopback address describes the local computer(where our program runs) address and uses the IP address 127.0.0.1. So localhost and 127.0.0.1 can be used interchangeably.
* Port - It is a endpoint used for communication in the internet protocol. The port numbers range from 0 to 65535. Currently, we have used port 8080 in this project. 
* Modules - It is a library or file that can be imported into our file using `require()`. We have used the following modules:
   - express
   - path
   - fetch
   - morgan
   - router
   - bodyParser
* Routing - It determines how the app responds to requests made by user/client at a particular endpoint.
   - The function used to define routes is `app.METHOD(path,handler)`
* Methods used
   - app.use(path,callback,[,callback...])
   - app.get(path,callback,[,callback...])
   - app.post(path,callback,[,callback...])
   - app.listen(port,[hostname],[backlog],[callback])
 * Request object - represents HTTP request and has request query string properties.
   - Property used
    1. req.body
 * Reponse object - represents HTTP response that the app sends on getting a request.
   - Methods used
    1. res.send([body])
 * Cookies - a small piece of data in key-value format sent on client's host by server request for session management, tracking, etc.
 * Template engines - express provides template engines which transforms static template files into HTML files at run-time by replacing the variables in template file with the desired values. It thus eases the server code cluttering with HTML. Pug is the default template engine


## Directory Structure
```
-- api
 +-- src
 |  -- server.js
 |  -- package.json
 |  -- config.js
 |  -- hasuraExamples.js
 |  -- README.md
 -- Dockerfile
 -- k8s.yaml
```

## Step-by-Step Guide
After successfully installing all the prescribed softwares and having completed the quickstart & deployment procedure for this project ZapHasura follow the steps given below

**Step 1: Type the following commands on the CLI** *(Git Bash for windows)*
   1. `ZapHasura(master)$  hasura microservice open api`
    - http://api.(cluster-name).hasura-app.io/ gets opened in browser
    - You can see **T34 - Zapier Zap** text displayed.

**Step 2: To test locally**
   
   Navigate to microservices\apu\src and type
1. `ZapHasura\microservices\api\src$ npm install` :  installs all the required dependencies mentioned in package.json file. To know more about package.json click [here](https://docs.npmjs.com/files/package.json). *Creates **node_modules** folder in current dir.*
2. `HPDF (master)$  node server.js` : *Command used to run our app*. The following text logs on console :
  - Example app listening on port 8080!
3. Open the browser
  - Go to http://localhost:8080/ or http://127.0.0.1:8080/ and you will see **T34 - Zapier Zap** displayed.
4. On the CLI press CTRl+C to close the app
   



**Step 3: Make changes**

Head to server.js and make changes as per your application.

## References
1. Hasura Hub quickstart [hello-nodejs-express](https://hasura.io/hub/project/hasura/hello-nodejs-express)

## Credits
[Hasura](https://hasura.io/)
