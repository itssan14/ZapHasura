# HPDF T34NE1 | Zapier - New User Notification

We have implemented a project wherein it triggers a Zapier Zap. The aim is to create a user registration form and to create a zap for every new registration. We have created a Zap between Webhook + Google Spreadsheet + Gmail. This repository consists of both mobile app and web app built using Hasura.

## Frameworks Used

* **Frontend**
  * [ReactJS](https://github.com/itssan14/ZapHasura/blob/master/microservices/ui/app/README.md) _(for web app)_
  * [React-Native](https://github.com/itssan14/ZapHasura/blob/master/README-ReactNative.md) _(for mobile app)_
* **Backend**

  * [NodeJS-Express](https://github.com/itssan14/ZapHasura/blob/master/microservices/api/src/README.md)

## Functionalities

* A UI for users to sign up which captures details such as name, age, etc
* A custom sign-up service that uses the Hasura Auth API to sign-up a user and then triggers a Zapier Zap to update the newly signed up user’s details into a Google Spreadsheet
* Post sign-up notifying the user that they have been successfully signed up along with a link to the Google Spreadsheet where the details have been captured.

## Procedure followed

1. **Created Zapier Zap**

* Chose webhook(catch hook) as the trigger app and actions apps were google spreadsheets and gmail
* Find the documentation [here](https://zapier.com/help/zap-creation/#creating-a-zap)

![zap](https://github.com/itssan14/ZapHasura/blob/master/readme-assets/Zaps.png)

2. **Created the UI with the neccesary fields**

* [x] React-Native
* [x] React-JS

3. **Created backed endpoints**

* [x] NodeJS-Express

4. **Integrated frontend with backend**

* Collaborated on a common Hasura cluster _chowder46_
   - Tested the zap and performed integration testing.

![mail](https://github.com/itssan14/ZapHasura/blob/master/readme-assets/mail.png)

## Support

If you happen to stuck anywhere, feel free to raise an issue here.
