# Getting started

[Fork this project](https://github.com/second-state/ssvm-nodejs-starter/fork) to create your own Rust functions in Node.js. [Learn more](https://www.secondstate.io/articles/getting-started-rust-nodejs-vscode/)

* The Rust functions are in the `src` directory. You can put high performance workload into Rust functions.
* The JavaScript functions are in the `node` directory and they can access the Rust functions.
* Use the `node node/server.js` command to run the application in Node.js.

## The idea
The idea is to make a platform where people can easily encrypt and decrypt messages. Currently an interface is provided where a user can encrypt a message, get an encrypted message, a public and a private key. The encrypted message and the private key can be shared to the right person, who can use them to decrypt the encrypted message.

## Building the server
- Setup the proper environment needed (ssvm, ssvmup, npm), refer [here](https://www.secondstate.io/articles/getting-started-with-rust-function/)
- Run ```ssvmup build``` to build the ```lib.rs``` file.
- Run ```node node/server.js``` to run the NodeJS server.
- On ```localhost:8081```, a page would appear with an input box. Enter a message you want to encrypt and then click Encrypt. The data, public key and private key would be made available to you.
- On ```localhost:8081/getMessage```, a page with an input box for encrypted message, and for a private key would appear. Enter the details correctly, and the decrypted message would be displayed.

## Read more:

* [The Case for WebAssembly on the Server-side](https://www.secondstate.io/articles/why-webassembly-server/)
* [Guide on how to Rust and WebAssembly for server-side apps](https://www.secondstate.io/articles/getting-started-with-rust-function/)

## Resources

* [The Second State VM (SSVM)](https://github.com/second-state/ssvm) is a high performance [WebAssembly virtual machine](https://www.secondstate.io/ssvm/) designed for server-side applications.
* [The SSVM NPM addon](https://github.com/second-state/ssvm-napi) provides access to the SSVM, and programs in it, through a Node.js host application.
* [The SSVM ready tool, ssvmup](https://github.com/second-state/ssvmup) is a [toolchain](https://www.secondstate.io/articles/ssvmup/) for compiling Rust programs into WebAssembly, and then make them accessible from JavaScripts via the SSVM.

Brought to you by the Open source dev team at [Second State](https://www.secondstate.io/). Follow us on [Twitter](https://twitter.com/secondstateinc), [Facebook](https://www.facebook.com/SecondState.io/), [LinkedIn](https://www.linkedin.com/company/second-state/), [YouTube](https://www.youtube.com/channel/UCePMT5duHcIbJlwJRSOPDMQ), or [Medium](https://medium.com/wasm)

