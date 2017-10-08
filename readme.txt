npm install && npm start   ....for starting applications

All routing is in router.js

Microservice written in microservice folder.

to call Login functions

require('login.js').gettoken(data to be passed) for token generation

require('login.js').authenticate(token) for authenticating token returns data otherwise return error

require('patch.js').patch(json_data,patch object) return new json
patch object have to be seperately given

require('thumbnail.js').generatethumbnail(imglink) return thumbnail image name directory path

make thumbnail public if required
