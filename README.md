# Sanitize mail
A sanitize-html wrapper optimised for sanitising HTML for email clients

## Installation

NPM
```bash
    npm i --save sanitize-mail
```

Yarn
```bash
    yarn add sanitize-mail
```

## Usage
Node
```js
  const sanitizeMail = require('sanitize-mail');

  let html = '<h1>Hello world</h1><canvas></canvas>';
  let clean = sanitizeMail(html);

  console.log(clean); // Will output without canvas element
```
