const express = require('express');
const bodyParser = require('body-parser');
const { generate_key_pair, encrypt, decrypt } = require('../pkg/ssvm_nodejs_starter_lib.js');

const util = require('util');
const encoder = new util.TextEncoder();
const decoder = new util.TextDecoder();

const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/encrypt', function (req, res) {
    var msg = req.body["message"];
    var kp = JSON.parse(generate_key_pair(256));
    var public_key = kp['rsa_public_key'];
    var private_key = kp['rsa_private_key'];
    var enc_data = encrypt(JSON.stringify(public_key), encoder.encode(msg));

    var dec_data = decrypt(JSON.stringify(private_key), enc_data);
    data = {
        "message": enc_data,
        "public": public_key,
        "private": private_key
    };
    res.status(200).send(data);
})

app.get('/getMessage', (req, res) => res.redirect("/decrypt.html"));

app.post('/decrypt', function (req, res) {
    var msg = JSON.parse(req.body["message"]);
    var private_key = JSON.parse(req.body["private_key"]);

    var message = [];

    for(i in msg){
        message.push(msg[i]);
    }
    var messageCov = new Uint8Array(message);

    var dec_data = decrypt(JSON.stringify(private_key), messageCov);
    data = {
        "message": decoder.decode(dec_data)
    };
    res.status(200).send(data);
})
  
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))