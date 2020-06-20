
const local = false;
const express = require('express');

const app = express();

//app.use(express.static(__dirname + 'public'));

var dev = [
	{first: 'Alice', last: 'Bob'},
	{first: 'Bob', last: 'Alice'}
];

app.get('/', (req, res) => res.json(dev));

//var ip = process.env.OPENSHIFT_NODEJS_IP;
var ip = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var port = process.env.OPENSHIFT_NODEJS_PORT || 80;

if (local){
	ip = '127.0.0.1';
	port = 3000;
}

app.listen(port, ip);
console.log("listen to port ", port)