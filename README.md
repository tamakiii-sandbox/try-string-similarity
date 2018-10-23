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

## Multi-byte sample
~~~sh
❯ make run
node --experimental-modules index.js
(node:53560) ExperimentalWarning: The ESM module loader is experimental.
{ ratings:
   [ { target: 'テストオーダー', rating: 0.6666666666666666 },
     { target: '【iOS】Yahoo! JAPAN', rating: 0 },
     { target: '【And】マンガ島', rating: 0 },
     { target: '【iOS】マンガ島', rating: 0 },
     { target: '【iOS】ランブルクエスト', rating: 0.08333333333333333 },
     { target: '【And】ランブルクエスト', rating: 0.08333333333333333 },
     { target: 'A-MODERN/シーロード', rating: 0 },
     { target: '【W】新春マグロ', rating: 0 },
     { target: 'ECナビキャッシング', rating: 0 },
     { target: '【iOS】Games__games', rating: 0.07142857142857142 } ],
  bestMatch: { target: 'テストオーダー', rating: 0.6666666666666666 } }
~~~
