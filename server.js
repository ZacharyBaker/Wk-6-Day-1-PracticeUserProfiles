var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');


var app = express();

app.use(bodyParser.json());

var corsOptions = {
	origin: 'http://localhost4001'
}
app.use(cors(corsOptions));

app.use(session({ secret: config.sessionSecret}));

app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.addFriendProfiles);







app.listen(4001, function(){
	console.log('listening on port 4001');
})