# HPDF T34NE1 | Zapier - New User Notification

We have implemented a project wherein it triggers a Zapier Zap. The aim is to create a user registration form and to create a zap for every new registration. We have created a Zap between Webhook + Google Spreadsheet + Gmail. This repository consists of both mobile app and web app built using Hasura.

## Frameworks Used
- **Frontend**
  - [React-Native](https://github.com/itssan14/ZapHasura/blob/master/README-ReactNative.md) (for mobile app)
  - [ReactJS](https://github.com/itssan14/ZapHasura/blob/master/README-ReactJS.md) (for web app)
- **Backend**
  - NodeJS-Express
  
## Functionalities
- A UI for users to sign up which captures details such as name, age, etc
- A custom sign-up service that uses the Hasura Auth API to sign-up a user and then triggers a Zapier Zap to update the newly signed up user’s details into a Google Spreadsheet
- Post sign-up notifying the user that they have been successfully signed up along with a link to the Google Spreadsheet where the details have been captured.

## Procedure followed
1. **Created Zapier Zap**
  - Chose webhook as the trigger app and actions apps were google spreadsheets and gmail
  - Find the documentation [here](https://zapier.com/help/zap-creation/#creating-a-zap)
 
 ![zap](https://github.com/itssan14/ZapHasura/blob/master/readme-assets/Zaps.png)

2. **Created the UI with the neccesary fields**
  - [X] React-Native
  - [X] React-JS

3. **Created backed endpoints**
  - [X] NodeJS-Express

4. **Integrated frontend with backend**
  - Collaborated on a common Hasura cluster *chowder46*
  - Tested the zap and performed integration testing.

## Organization of this Repository
  - README-ReactNative.md : Describes implemention of the mobile app 
  - README-ReactJS.md : Describes implemention of the web app

## Support
If you happen to stuck anywhere, feel free to raise an issue here.
