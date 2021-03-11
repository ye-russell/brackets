//check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
//check('[(])', [['(', ')'], ['[', ']']]) // -> false
module.exports = function check(str, bracketsConfig) {
  var newStr = str; //'([{}])'
  for (let i = 0; i < str.length / 2; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) { //[['(', ')'], ['[', ']'], ['{', '}']]
      let newBrackets = [];
      newBrackets[j] = bracketsConfig[j].join(''); //[['()'], ['[]'], ['{}']]
      newStr = newStr.replace(newBrackets[j], '') //'([{}])' => [['()'], ['[]'], ['{}']]
    }
  }
  return newStr == 0 ? true : false
}
