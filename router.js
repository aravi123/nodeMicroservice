/**
 * Created by aravind on 20/9/17.
 */

const express = require('express');
const app = express.Router();
const signin  = require('./microservice/login.js');
const patch = require('./microservice/patch');
const thumbnail = require('./microservice/thumbnail.js');

app.post('/gettoken',(req,res)=>{
	let token = signin.gettoken(req.body);
	res.send(token);
});

app.post('/authenticate',(req,res)=>{
	let data = signin.authenticate(req.body);
	res.send(data);
});

app.post('/patch',(req,res)=>{
	let verify = signin.authenticate(req.body);
	if (verify!='error'){
		let tpatch ={};
		tpatch.op = req.body.op;
		tpatch.path = req.body.path;
		tpatch.value = req.body.value;
		let jsondata = patch.patch({foo:'bar'},tpatch);
		res.send(jsondata);
	}
	else{
		res.send('Wrong token');
	}

});

app.post('/thumbnail',(req,res)=>{
	//console.log(req.body.token);
	let verify = signin.authenticate(req.body);
	//console.log(verify);
	if (verify!='error') {
		thumbnail.generatethumbnail(req.body.image).then((filename)=>{
			res.send(filename);
		}).catch((err)=>{
			//console.log(err);
			res.send('Error');
		});
	}
	else{
		res.send('Wrong token');
	}

});

module.exports = app;