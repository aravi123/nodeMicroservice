/**
 * Created by aravind on 20/9/17.
 */
const jsonpatch = require('json-patch');


let patch = (dat1,patch)=>{
	//console.log(JSON.parse('foo:1'));
	//console.log(body);
	//console.log(typeof (dat1));
	//console.log(JSON.parse(patch));
	let data = jsonpatch.apply(dat1,patch);
	return data;
};


module.exports = {patch:patch};