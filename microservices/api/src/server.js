var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var morgan = require('morgan');
var bodyParser = require('body-parser');
require('request-debug')(request);
var fetchAction =  require('node-fetch');

var hasuraExamplesRouter = require('./hasuraExamples');

var server = require('http').Server(app);

router.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/',(req,res) => res.send('T34 - Zapier Zap'));

app.post('/hook', (req,res) => {

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
		.then(function(result) {
			//res.send(result);
			console.log(JSON.stringify(result));
		})
		.catch(function(error) {
			console.log('Request Failed:' + error);
		});


});

app.post('/register', (req,res) => {

		var url = "https://auth.chowder46.hasura-app.io/v1/signup";

		var requestOptions = {
		    "method": "POST",
		    "headers": {
		        "Content-Type": "application/json"
		    }
		};

		var body = {
		    "provider": "username",
		    "data": {
		        "username": req.body.uname,
		        "password": req.body.password
		    }
		};

		requestOptions.body = JSON.stringify(body);

		fetchAction(url, requestOptions)
		.then(function(response) {
			return response.json();
		})
		.then(function(result) {
			res.send(result);
			/*
			if(result.hasura_id){
				res.send(result.hasura_id);	
			}
			else
			res.send(result.message);
			*/
			console.log(JSON.stringify(result));
		})
		.catch(function(error) {
			console.log('Request Failed:' + error);
		});


});

app.post('/login', (req,res) => {

		var url = "https://auth.chowder46.hasura-app.io/v1/login";

		var requestOptions = {
		    "method": "POST",
		    "headers": {
		        "Content-Type": "application/json"
		    }
		};

		var body = {
		    "provider": "username",
		    "data": {
		        "username": req.body.uname,
		        "password": req.body.password		    }
		};

		requestOptions.body = JSON.stringify(body);

		fetchAction(url, requestOptions)
		.then(function(response) {
			return response.json();
		})
		.then(function(result) {
			res.send(result);
			/*
			if(result.hasura_id){
				res.send(result.hasura_id);	
			}
			else
			res.send(result.message);
			*/
			console.log(JSON.stringify(result));
		})
		.catch(function(error) {
			console.log('Request Failed:' + error);
		});


});







app.post('/signup', (req,res) => {

		var url1 = "https://auth.chowder46.hasura-app.io/v1/signup";

		var requestOptions = {
		    "method": "POST",
		    "headers": {
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

		fetchAction(url1, requestOptions)
		.then(function(response) {
			return response.json();
		})
		.then(function(result) {

				console.log(result.hasura_id);
				id=result.hasura_id;
				name=result.username;
				var requestOptions1 = {
				    "method": "POST",
				    "headers": {
				        "Content-Type": "application/json",
				        "Authorization": "Bearer 14f202995569f106242cb90ef8e3ab093f27a0351e467049"
				    }
				};
				var body1 = {
				    "type": "insert",
				    "args": {
				        "table": "user",
				        "objects": [
				            {
				                "name": name,
				                "email": req.body.email,
				                "address": req.body.address,
				                "bday": req.body.bday,
				                "age": req.body.age,
				                "gender": req.body.gender,
				                "id": id
				            }
				        ]
				    }
				};

				requestOptions1.body = JSON.stringify(body1);
				var urldb= "https://data.chowder46.hasura-app.io/v1/query"
				fetchAction(urldb, requestOptions1)
				.then(function(response1) {
					return response1.json();
				})
				.then(function(result1) {
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
						.then(function(result) {
							//res.send(result);
							console.log(JSON.stringify(result));
						})
						.catch(function(error) {
							console.log('Request Failed:' + error);
						});

						console.log(result1);
				})
				.catch(function(error1) {
					console.log('Request Failed:' + error1);
				});

				console.log(JSON.stringify(result));
		})
		.catch(function(error) {
			console.log('Request Failed:' + error);
		});


});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});



