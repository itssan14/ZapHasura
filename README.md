# Zapier Integration for New User Notification

A quickstart that provides new user notification by creating a zap between **Webhook, Google Sheets** and **Gmail** Using [Zapier](https://zapier.com). 


Whenever a new user signs up for a service, the user data is automatically stored in Google Sheets in addition to sending a notification via mail to service provider. To achieve this, the most important factor is that the applications communicate within themselves which can be achieved using **Zap**. To know more about Zapier Zaps see [here](https://zapier.com/help/basics/).


We have created a signup service using [Hasura Auth API] (https://docs.hasura.io/0.15/manual/users/index.html) and integrated it with Zapier for getting a notification everytime a new user signs ups and store the user information in a spreasheet.


This quickstart consists of both a web app and mobile app which can be cloned and used in 3 simple steps! 


## Frameworks Used

* **Frontend**
  * ReactJS  _(for web app)_
  * React-Native _(for mobile app)_
* **Backend**
  * NodeJS-Express

## Functionalities

* A UI for users to sign up which captures details such as name, age, etc
* A custom sign-up service that uses the Hasura Auth API to sign-up a user and then triggers a Zapier Zap to update the newly signed up user’s details into a Google Spreadsheet
* Post sign-up notifying the user that they have been successfully signed up along with a link to the Google Spreadsheet where the details have been captured.
* Sending a mail for notifying a new user registration
 
# Clone and Deploy
```
$ hasura quickstart itssan14/zapier-sheet
$ cd zapier-sheet
$ git add . && git commit -m "First commit"
$ git push hasura master
```

# Step-by-Step Guide for creating a Zap
Here we will be making a **Multi-step Zap** which would comprise one trigger (here webhook) and two actions (here Google Sheets & Gmail ) steps. Our task is creating a new row in Sheets which would contain details of the new registered user and also sending a mail using Gmail notifying a new user registration. Once you have finished this procedure, replace the webhook url in this project with the ones you created.

1. Head to [Zapier](https://zapier.com/) and sign up.
2. Click on `Make a Zap`
3. Choose a trigger app
    1. We choose Webhook to trigger our Zap
    2. Then choose `Catch Hook` which will create a POST webhook that we can call with JSON data from our service.
     ![webhook.png](https://filestore.hasura.io/v1/file/4a66e02a-071b-464a-a734-c32807ee5e61)
    3. Next comes edit options, Pick off a child key. Leave it blank as it is and click Continue
    4. Testing Webhooks by Zapier : You will get a webhook url, save it and click Ok, I did this
    5. To test, we have send a POST request to webhook url, say
    ```
    		var body = {
		        "name": req.body.name,
		        "email": req.body.email,
		        "address": req.body.address,
		        "bday": req.body.bday,
		        "age": req.body.age,
		        "gender": req.body.gender
		};
    ```
     **Navigate to microservices\api\src\server.js to see the POST method.**
     ![success.png](https://filestore.hasura.io/v1/file/75b772b5-8088-4b7c-ab85-8576f0b81009)
4. Set up the Action step
    1. Choose Google Sheets
    2. Select 'Create Spreadsheet Row'
    3. Fill in details of your gmail account
    4. Make a sheet with first row containing names of the columns. (Here)The columns would be name, email, address, DOB, age, gender
    5. Fill in the details of the sheet and other fields
     ![sheet.png](https://filestore.hasura.io/v1/file/d717a304-c6e9-40e6-8a63-4fb49f667fdf)
    6. Test this step
5. Choose another Action step
    1. Select Gmail
    2. Choose 'Send Mail'
    3. Make a template of the mail
     ![template.png](https://filestore.hasura.io/v1/file/339f93be-5c88-4ff2-8acb-505562ecc4c9)
    4. Test the step
6. Turn on the Zap
7. Replace the webhook url in this project with the one with you created here and commit the changes and do a `git push hasura master` to see the Zap in action.

For this project we have created zap for web app and mobile app
 ![Zaps.png](https://filestore.hasura.io/v1/file/a52d5f24-0bed-4b70-ae71-354d14e66013)


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
  - Go to http://localhost:8080/ or http://127.0.0.1:8080/ and you will see **Hello World** displayed.
4. On the CLI press CTRl+C to close the app
   



**Step 3: Make changes**

Head to server.js and make changes as per your application.


# ReactJS

An app that integrates Zapier zap to capture the details of the registered user in google spreadsheets and notifies the same to user via email.

[**React**](https://reactjs.org) is a JavaScript library to create interactive user interfaces. The core library is focussed on the view layer. It is declarative and component based. This quickstart uses [**create-react-app**](https://github.com/facebook/create-react-app) to scaffold a react app with no build configuration.

## What does this come with?

* A custom data storing sevice integrated with Zapier Zap.
* Automatic reloading and bundling.
* **react-scripts** with inbuilt webpack bundling
* Deployed with the [**serve**](https://www.npmjs.com/package/serve) package
* All _create-react-app_ features are available.
* **Dockerfile** (automatically used by Hasura for deployment)


## Deployment instructions

### Basic deployment:

* Press the **Clone & Deploy** button and follow the instructions.
* The **`hasura quickstart`** command clones the project repository to your local computer, and also creates a **free Hasura cluster**, where the project will be hosted for free.
* A git remote (called hasura) is created and initialized with your project directory.
* Now get your cluster name using **`hasura cluster status`** and modify the package.json file inside **`microservices/ui/app/package.json`**. Assign your cluster name to **`REACT_APP_CLUSTER_NAME`** environment variable.
* Run **`git add .`**, **`git commit`**, and **`git push hasura master`**.
* Run the below command to open your shiny new deployed react app.

```shell
  $ hasura microservice open ui
```

### Making changes and deploying

* To make changes to the project, browse to **`/microservices/ui/app/src`** and edit the files according to your project.
* Stage all changes made or selectively stage changes with : **`git add .`** or **`git add <file-name.extension>`**
* Commit the changes made with : **`git commit -m "<your-commit-message>"`**
* Push the changes made by using :**`git push hasura master`** to deploy the changes.

  ## Local development

  To test and make changes to this app locally, follow the below instructions.

  * Open Terminal and **`cd <Folder-Name>/microservices/ui/app`**.
  * Run **`npm install`** to install all the project dependencies.
  * Run **`npm start`** or **`npm build`** in the terminal to build and run it.
  * Make changes to the app, and see the changes in the browser.

  ## View server logs

  You can view the logs emitted by the ‘serve’ package by running the below command:

  ```shell
  $ hasura microservice logs ui
  ```

  You can see the logs in your terminal, press `CTRL + C` to stop logging.

  ## Managing app dependencies

* System dependencies, like changing the web-server can be made in the Dockerfile
* Dependencies can be managed by editing **package.json**.
* If changes have been done to the dependencies, **`git commit`**, and perform **`git push hasura master`** to deploy the changes to the cluster.

  ## Migrating your existing React.js app

* If you have an existing react app which you would like to deploy, replace the code inside **`/microservices/ui/src/`** according to your app.
* You may need to modify the Dockerfile if your _`package.json`_ or the build directory location has changed. _It will not be required for most cases_.
* Commit, and run _`git push hasura master`_ to deploy your app.

  ## Adding backend features

  Hasura comes with BaaS APIs to make it easy to add backend features to your apps.

  ### Add a Auth API

  This project uses Hasura Auth API to authenticate the new users.

```
  var url1 = "https://auth.chowder46.hasura-app.io/v1/signup";
  var requestOptions = {      "method": "POST",      "headers":
    {
        "Content-Type": "application/json"
    }
  };
  var body = {
        "provider": "username",
        "data": {
            "username": req.body.name,
            "password": req.body.pass
        }
  };
  requestOptions.body = JSON.stringify(body);
  fetchAction(url1, requestOptions)  .
```

### Add a custom API

Hasura project is composed of a set of microservices. These include certain Hasura microservices like, postgres, nginx, data API, auth API and more but can also include your own microservices.This quickstart comes with one such custom service written in `nodejs` using the `express` framework. Check it out in action at `https://api.cluster-name.hasura-app.io` . Currently, it just returns a "Hello-React" at that endpoint.

* [Adding Microservice](https://docs.hasura.io/0.15/manual/custom-microservices/index.html)
  ### Add data APIs
  Hasura comes with set of Data APIs to access the Postgres database which comes bundled with every Hasura cluster.Detailed docs of data APIs can be found [here](https://docs.hasura.io/0.15/manual/data/index.html).

```
    var url = "https://data.chowder46.hasura-app.io/v1/query";
    var requestOptions = { method: "POST", headers: { "Content-Type": "application/json", Authorization: "*******************************************************" } };
    let body = { type: "insert", args: { table: "user", objects: [{ name: event.target.name.value, address: event.target.address.value, bday: event.target.date.value, age: event.target.age.value, gender: event.target.gender.value, email: event.target.email.value }] } };
    requestOptions.body = JSON.stringify(body);
    // AJAX REQUEST TO MICROSERVICE TO INSERT DATA
    Fetch(url, requestOptions)
    .then(function(response) {
    return response.json();
    })
    .then(function(result) {
    console.log(result);
    this.setState({ open: true });
    })
    .catch(function(error) {
    console.log("Request Failed:" + error);
 ![user_table.png](error) ![user_table.png](error)    });
```
 ![user_table.png](https://filestore.hasura.io/v1/file/c21e9405-acb8-47ab-9dde-f147ef4b1145)

## Zapier Zap in Action
### Google Sheets
 ![user_info_spreadsheet.png](https://filestore.hasura.io/v1/file/bcda8f58-023e-42c2-b4e0-d23d689070fc) 

### Gmail
 ![mail.png](https://filestore.hasura.io/v1/file/85f3b616-606d-4c04-a290-370849cf980d)

# React Native 
An app that integrates Zapier zap to capture the details of the registered user in google spreadsheets and notifies the same to user via gmail.

## What does this come with?
This is a fully working react-native app with a [Hasura](https://hasura.io) backend. You can clone it and modify as per your requirements. It has basic BaaS features implemented. Also, it uses [NativeBase](https://nativebase.io) for better UI.
- When you clone this project, there will be a **users** table in your postgres database of Hasura, in which the captured users details will be stored.
- There is a login screen in this app where the authentication is managed by the Hasura Auth APIs.- Then we make data API calls to psush the details of the users. When you click on submit, the Zap will be triggered and thus the captured user details will be stored in the google spreadsheets and accordingly a notification mail will be sent via gmail.
- The functions that make these calls are in the `react-native/src/hasuraApi.js` file. Modify it as you like and the changes will reflect in the app.

## How to get it running?
### Reqirements
In order to get this app running, you must have the following:1. [hasura CLI tool](https://docs.hasura.io/0.15/manual/install-hasura-cli.html) (hasura).
2. Expo client (XDE). Download from https://expo.io/tools
3. NodeJS
(For more such apps, check out https://hasura.io/hub)

### Pushing the project to the cluster
- To get cluster information, run `hasura cluster status`. Info will be of the following form.
```INFO Reading cluster status...INFO Status:Cluster Name:       athlete80Cluster Alias:      hasuraKube Context:       athlete80Platform Version:   v0.15.3Cluster State:      Synced```
- Set the cluster name in your project by modifying `react-native -> src -> hasuraApi.js`
```:javascriptconst clusterName = athlete80;```
- Install the required node modules. Run the following command from the project directory.
```$ cd react-native && npm install```
- Run the following commands from the project directory to push it to your Hasura cluster.```$ git add .$ git commit -m "Commit message"$ git push hasura master```**The app is now ready to use!!**
### Opening the app
- Open Expo XDE, do a login/signup and click on `Open existing project...`. Browse to the hello-react-native directory and open the react-native folder.- Once the project loads, click on Share.- Scan the QR code using the Expo app from your phone (Install from Playstore/Appstore)- Fully working app will open on your phone
```Note: You can open the app with any of your desired react-native simulators. We prefer Expo because of its simple onboarding for beginners.```
(*Shoutout to [NativeBase](https://nativebase.io) for their excellent UI components.*)
## How to include a database?
- Hasura provides instant data APIs over Postgres to make powerful data queries. For example, to create the users table
```
create table users(hasura_id integer,name text,age integer,profession text,PRIMARY KEY (hasura_id));
```
and to insert data into users table 
`https://data.<cluster-name>.hasura-app.io/v1/query/`
```
let requestOptions = {  "method": "POST",  "headers": {    "Content-Type":"application/json"  }};
let body = {  "type" : "insert",  "args" : {      "table"     : "users",      "objects"   : [        {
                      "age" :age,           "hasura_id":id,           "FirstName":n,           "Profession":pf                  }             ] }};
```
- This app uses the above query and inserts the details of users as shown below.
     ![users_table.png](https://filestore.hasura.io/v1/file/2baf4f60-05cd-481f-899a-e981091470a4)
- The Hasura API Console is a UI which makes managing the backend easier. To access your api-console, run
```$ hasura api-console```
- You can build queries easily using the query builder on API-Console.
![QueryBuilder](https://media.giphy.com/media/3oFzmaJy6xGNehrGUg/giphy.gif)
- Also, there are ready made code snippets generated for the query that you build with the query builder. You can instantly copy and paste them in your code.
![CodeGen](https://media.giphy.com/media/3o7524EoojncABE5Ve/giphy.gif)
## How to add authentication?
- Every app almost always requires some form of authentication. Hasura gives you a flexibility to implement almost every popular login mechanism (mobile, email, facebook, google etc) in your app.- In this application, we are using just the normal username password login. You can implement whichever login you need. The auth screen looks like this.
![List of articles](https://github.com/hasura/hello-react-native/raw/master/readme-assets/auth.png)
- You can try out all the auth APIs in the API console. Check out.
```$ hasura api-console```
## How to migrate from an existing project?
- Replace react-native directory with your pre-existing react-native project directory.- run `npm install` from this new directory- Make changes in your backend with API-Console- App is ready
## How to use a custom API/server?
- Sometimes you might need to add new microservices/APIs as per your requirements. In such cases, you can deploy your microservices with Hasura using git push or docker.- This quickstart comes with one such custom microservice written in nodejs using the express framework. Check it out in action at `https://api.<cluster-name>.hasura-app.io`. Currently, it just returns a "Hello-React" at that endpoint.- This microservice is in the microservices folder of the project directory. You can add your custom microservice there.- To generate your own custom microservice, run
```$ hasura microservice generate --help```

## Zapier Zap in Action
### Google Sheets
 ![user_details_spreadsheet_native.png](https://filestore.hasura.io/v1/file/e97e3731-9365-418d-b952-a52f4bddda53)
### Gmail
 ![mail.png](https://filestore.hasura.io/v1/file/85f3b616-606d-4c04-a290-370849cf980d)


# Support

If you happen to stuck anywhere, feel free to raise an issue [here](https://github.com/itssan14/ZapHasura).

# Contributors