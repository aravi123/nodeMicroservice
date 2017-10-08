/**
 * Created by aravind on 20/9/17.
 */
'use strict';
const jwt = require('jsonwebtoken');



let gettoken = (body) => {
	let token = jwt.sign({data: body}, 'secret');
	return token;};

let authenticate = (body) => {
	try {
		let decoded = jwt.verify(body.token,'secret');
		//console.log(decoded);
		return decoded;}
	catch(err) {
		//console.log(err);
		//console.log(err);
		return 'error';
	}
};

module.exports = {gettoken: gettoken, authenticate: authenticate};