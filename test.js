const sanitizeMail = require('./src/index');

let html = '<h1>Hello world</h1><canvas></canvas>';
let clean = sanitizeMail(html);
console.log(clean);
