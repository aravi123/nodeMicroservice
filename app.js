/**
 * Created by aravind on 20/9/17.
 */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = require('./router.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, () => {
	console.log('Server listening at port 3000');
});