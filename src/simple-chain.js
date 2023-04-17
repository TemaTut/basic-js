const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

// class chainMaker {
//   constructor() {
//     this.chain = [];
//   }

//   getLength() {
//     return this.chain.length;
//   }

//   addLink(value = '') {
//     this.chain.push(`( ${value} )`);
//     return this;
//   }

//   removeLink(position) {
//     if (typeof position !== 'number' || position < 1 || position > this.chain.length) {
//       this.chain = [];
//       throw new Error("You can't remove incorrect link!");
//     }
//     this.chain.splice(position - 1, 1);
//     return this;
//   }

//   reverseChain() {
//     this.chain.reverse();
//     return this;
//   }

//   finishChain() {
//     const result = this.chain.join('~~');
//     this.chain = [];
//     return result;
//   }
// }

module.exports = {
  chainMaker
};
