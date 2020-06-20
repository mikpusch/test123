
const local = false;
const express = require('express');

const app = express();

//app.use(express.static(__dirname + 'public'));

var dev = [
	{first: 'Alice', last: 'Bob'},
	{first: 'Bob', last: 'Alice'}
];

app.get('/rest/developer', (req, res) => res.json(dev));

var ip = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT;

if (local){
	ip = '127.0.0.1';
	port = 3000;
}

app.listen(port, ip);
console.log("listen to port ", port)