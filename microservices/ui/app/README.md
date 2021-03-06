# React - Zapier App

An app that integrates Zapier zap to capture the details of the registered user in google spreadsheets and notifies the same to user via email.

[**React**](https://reactjs.org) is a JavaScript library to create interactive user interfaces. The core library is focussed on the view layer. It is declarative and component based. This quickstart uses [**create-react-app**](https://github.com/facebook/create-react-app) to scaffold a react app with no build configuration.

## What does this come with?

* A custom data storing sevice integrated with Zapier Zap.
* Automatic reloading and bundling.
* **react-scripts** with inbuilt webpack bundling
* Deployed with the [**serve**](https://www.npmjs.com/package/serve) package
* All _create-react-app_ features are available.
* **Dockerfile** (automatically used by Hasura for deployment)

![ui](https://github.com/itssan14/ZapHasura/blob/master/readme-assets/js_ui.png)

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
    });
```

![table](https://github.com/itssan14/ZapHasura/blob/master/readme-assets/user_table.png)

## Zapier Zap

* The spreadsheet gets updated with the details of the new registered users. Uses a Webhook(catch hook)
* Send a POST request to the webhook URL to trigger the webhook

```
  var urljs = "https://hooks.zapier.com/hooks/catch/2931424/ztu8sp/";
  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"
       }
  };
  var body = {
          "name": req.body.name,
          "email": req.body.email,
          "address": req.body.address,
          "bday": req.body.bday,
          "age": req.body.age,
          "gender": req.body.gender
  };
  requestOptions.body = JSON.stringify(body);
  fetchAction(urljs, requestOptions)
  .then(function(response) {
  return response.json();
  })
```

![sheet](https://github.com/itssan14/ZapHasura/blob/master/readme-assets/user_info_spreadsheet.png)
![mail](https://github.com/itssan14/ZapHasura/blob/master/readme-assets/mail.png)
