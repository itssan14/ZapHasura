# React Native - Zapier App
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
![table](https://github.com/itssan14/ZapHasura/blob/master/readme-assets/users_table.png)
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
## Zapier Zap
- The spreadsheet gets updated with the details of the new registered users. Uses a Webhook(catch hook)
- Send a POST request to the webhook URL to trigger the webhook
![sheet](https://github.com/itssan14/ZapHasura/blob/master/readme-assets/user_details_spreadsheet_native.png)
![mail](https://github.com/itssan14/ZapHasura/blob/master/readme-assets/mail.png)
