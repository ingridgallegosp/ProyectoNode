//6 generamos private key y esa clave se guarda en /utils/key.js

const crypto = require('crypto');

const secret = crypto.randomBytes(32).toString('hex');

console.log(secret);