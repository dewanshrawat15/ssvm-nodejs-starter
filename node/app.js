// const { say } = require('../pkg/ssvm_nodejs_starter_lib.js');

// const http = require('http');
// const url = require('url');
// const hostname = '0.0.0.0';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   const queryObject = url.parse(req.url,true).query;
//   if (!queryObject['name']) {
//     res.end(`Please use command curl http://${hostname}:${port}/?name=MyName \n`);
//   } else {
//     res.end(say(queryObject['name']) + '\n');
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const { generate_key_pair, encrypt, decrypt } = require('../pkg/ssvm_nodejs_starter_lib.js');

var kp = JSON.parse(generate_key_pair(2048));
var public_key = kp['rsa_public_key'];
var private_key = kp['rsa_private_key'];

var msg = "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks";
var enc_data = encrypt(JSON.stringify(public_key), encoder.encode(msg));
var dec_data = decrypt(JSON.stringify(private_key), enc_data);
console.log(decoder.decode(dec_data));