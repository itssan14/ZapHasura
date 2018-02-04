const clusterName = "disentanglement49";

const dataUrl = "https://data." + clusterName + ".hasura-app.io/v1/query";
const loginUrl = "https://auth." + clusterName + ".hasura-app.io/v1/login";
const signupUrl = "https://auth." + clusterName + ".hasura-app.io/v1/signup";

import { Alert } from 'react-native';

const networkErrorObj = {
  status: 503
}

export async function trySignup(username, password) {
  console.log('Making signup query');
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

  let body = {
    "provider":"username",
    "data": {
      "username": username,
      "password": password
    
    }
  };

  requestOptions["body"] = JSON.stringify(body);
  console.log("Auth Response ---------------------");
  
  try {
   //let app = await profile();
   //console.log(app);
    let resp = await fetch(signupUrl, requestOptions);
    console.log(resp);
    return resp; 
  }
  catch(e) {
    console.log("Request Failed: " + e);
    return networkErrorObj;
  }
}





export async function tryLogin(username, password) {
  console.log('Making login query');
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

  let body = {
    "provider":"username",
    "data": {
      "username": username,
      "password": password
    }
  };

  requestOptions["body"] = JSON.stringify(body);

  console.log("Auth Response ---------------------");
  
  try {
    let resp = await fetch(loginUrl, requestOptions);
    console.log(resp);
    return resp; 
  }
  catch(e) {
    console.log("Request Failed: " + e);
    return networkErrorObj;
  }
}

export async function getArticleList() {
	console.log('Making data query (get article list)');
  let requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"
      }
  };

  let body = {
      "type": "select",
      "args": {
          "table": "article",
          "columns": [
              "id",
              "title",
          ]
      }
  };

  requestOptions["body"] = JSON.stringify(body);
  console.log('Data Response ---------------------');
  try {
  	let resp = await fetch(dataUrl, requestOptions);
    console.log(resp);
  	return resp; 
  }
  catch(e) {
  	console.log("Request Failed: " + e);
    return networkErrorObj;
  }
}

export async function getArticle(id) {
  console.log('Making data query (get article)');
  let requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"
      }
  };

  let body = {
      "type": "select",
      "args": {
          "table": "article",
          "columns": [
              "content",
              "id",
              "title",
              {
                "name": "author",
                "columns":[
                  "name"
                ]
              }
          ],
          "where": {
              "id": {
                  "$eq": id
              }
          }
      }
  };

  requestOptions["body"] = JSON.stringify(body);
  console.log('Data Response ---------------------');
  try{
  	let resp = await fetch(dataUrl, requestOptions);
    console.log(resp);
  	return resp;
  }
  catch (e) {
  	console.log("Request failed: " + e);
    return networkErrorObj;
  }
};



export async function profile(age,n,pf,id) {
  console.log('Making insert query');

let requestOptions = {
  "method": "POST",
  "headers": {
    "Content-Type":"application/json"
  }
};

let body = {
  "type" : "insert",
  "args" : {
      "table"     : "users",
      "objects"   : [
        {

           
           "age" :age,
           "hasura_id":id,
           "FirstName":n,
           "Profession":pf
       
           }
             ]
 }
};

requestOptions["body"] = JSON.stringify(body);
console.log("profile Response ---------------------");
try{
  let resp = await fetch(dataUrl, requestOptions);
  console.log(resp);
  	return resp;
    }
catch (e) {
  console.log("Request failed: " + e);
  return networkErrorObj;
}

}  


/*
export async function profile(){
    var url = "https://data.disentanglement49.hasura-app.io/v1/query";
    console.log('Making insert query');
    var requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer 16b97d0c586efc2682aac36df0fc0bb3a15de7c609c24d3b"

        }
    };
    
    var body = {
        "type": "insert",
        "args": {
            "table": "users",
            "objects": [
                {
                    "age": "121",
                    "hasura_id": "6"
                }
            ]
        }
    };
    
    requestOptions.body= JSON.stringify(body);
    
    fetch(dataUrl, requestOptions)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log('Request Failed:' + error);
    });
}
*/

/*

export async function profilespreadsheet(age,n,pf,id) {
  console.log('Forwarding user details in google spreadsheet');
var webhookUrl = "https://hooks.zapier.com/hooks/catch/2931424/z67mpy/";
    var requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        }
    };
    var body = {
            "name": n,
            "age": age,
            "profession": pf
    };
requestOptions["body"] = JSON.stringify(body);
console.log("profile Response ---------------------");
try{
  let resp = await fetch(webhookUrl, requestOptions);
  console.log(resp);
    return resp;
    }
catch (e) {
  console.log("Request failed: " + e);
  return networkErrorObj;
}
};  
*/