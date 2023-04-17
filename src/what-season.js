const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// function getSeason(date) {
//   if (!date) {
//     return 'Unable to determine the time of year!';
//   }
//   if (!(date instanceof Date) || isNaN(date)) {
//     throw new Error("Invalid date!");
//   }
//   const myMounth = date.getMonth();

//   switch (myMounth) {
//     case 1, 0, 11:
//       return 'winter';
//     case 2, 3, 4:
//       return 'spring';
//     case 7, 5, 6:
//       return 'summer';
//     case 10, 9, 8:
//       return 'autumn';
//   }
// }

module.exports = {
  getSeason
};
