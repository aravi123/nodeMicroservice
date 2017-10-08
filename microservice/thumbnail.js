/**
 * Created by aravind on 20/9/17.
 */
//const thumbnail = require('thumbnail');
const imagedownloader = require('image-downloader');
//const fs = require('fs');
const gm = require('gm').subClass({imageMagick:true});


let generatethumbnail = (img)=>{

	const options = {
		url:img,
		dest:'./images'
	};
	return new Promise((resolve,reject)=> {
		imagedownloader.image(options).then(({filename, image}) => {
			//console.log(filename.split('/')[1]);
			// thumbnail({
			// 	source: filename,
			// 	destination: 'thumbnail',
			// }, (files, err, stdout, stderr) => {
			// 	console.log(files);
			// 	resolve(files[0].dstPath);
			// })

			// thumb.ensureThumbnail(filename.split('/')[1],50,50,(err,file)=>{
			// 	console.log(file);
			// 	console.log(err);
			// 	resolve(file);
			// });

			gm(filename).resize(50,50).write(filename,(err)=>{
				resolve(filename);
			});
		}).catch(() => {
			//console.log(err);
			reject('error');
		});
	}).then((filename)=>{
		//console.log(filename);
		return filename;
	}).catch((err)=>{
		return err;
	});


};

module.exports = {generatethumbnail:generatethumbnail};