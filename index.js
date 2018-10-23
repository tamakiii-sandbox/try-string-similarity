var stringSimilarity = require('string-similarity');

var matches = stringSimilarity.findBestMatch('【TEST】テストオーダー', [
  'テストオーダー',
  '【iOS】Yahoo! JAPAN',
  '【And】マンガ島',
  '【iOS】マンガ島',
  '【iOS】ランブルクエスト',
  '【And】ランブルクエスト',
  'A-MODERN/シーロード',
  '【W】新春マグロ',
  'ECナビキャッシング',
  '【iOS】Games__games',
]);

console.log(matches);
