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

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});



