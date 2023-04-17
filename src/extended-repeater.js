const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(/* str, options */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function repeater(str, options) {
  let result = ''
  const time = options.repeatTimes || 1
  const separator = options.separator || '+'
  const addition = options.addition !== undefined ? String(options.addition) : ''
  const additionRepeatTimes = options.additionRepeatTimes || 1
  const additionSeparator = options.additionSeparator || '|'


  for (let i = 0; i < time; i++) {
    result += String(str)
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition
      if (j < additionRepeatTimes - 1) {
        result += additionSeparator
      }
    }
    if (i < time - 1) {
      result += separator
    }
  }

  return result
}

module.exports = {
  repeater
};
