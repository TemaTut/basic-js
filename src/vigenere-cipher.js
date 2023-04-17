const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// class VigenereCipheringMachine {
//   encrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//   decrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message.charAt(i);
      if (char.match(/[A-Z]/)) {
        const keyCode = key.charCodeAt(keyIndex) - 65;
        const charCode = char.charCodeAt() - 65;
        const encryptedCode = (charCode + keyCode) % 26 + 65;
        result += String.fromCharCode(encryptedCode);
        keyIndex = (keyIndex + 1) % key.length;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage.charAt(i);
      if (char.match(/[A-Z]/)) {
        const keyCode = key.charCodeAt(keyIndex) - 65;
        const charCode = char.charCodeAt() - 65;
        const decryptedCode = (charCode - keyCode + 26) % 26 + 65;
        result += String.fromCharCode(decryptedCode);
        keyIndex = (keyIndex + 1) % key.length;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
