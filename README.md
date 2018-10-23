# try-string-similarity

- https://www.npmjs.com/package/string-similarity

## Sample
~~~js
var stringSimilarity = require('string-similarity');

var matches = stringSimilarity.findBestMatch('healed', ['edward', 'sealed', 'theatre']);

console.log(matches);
~~~
~~~sh
❯ make run
node --experimental-modules index.js
(node:79509) ExperimentalWarning: The ESM module loader is experimental.
{ ratings:
   [ { target: 'edward', rating: 0.2 },
     { target: 'sealed', rating: 0.8 },
     { target: 'theatre', rating: 0.36363636363636365 } ],
  bestMatch: { target: 'sealed', rating: 0.8 } }
~~~

