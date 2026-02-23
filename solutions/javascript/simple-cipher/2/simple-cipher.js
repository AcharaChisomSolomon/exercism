//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = undefined) {
    this._key = key ?? this.randomKey();
  }

  randomKey() {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    let key = "";
    for (let i = 0; i < 100; i++) {
      key += letters[Math.floor(Math.random() * letters.length)]  ;
    }

    return key;
  }

  encode(plainText) {
    let cipherText = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    let keyId = 0;
    for (let i = 0; i < plainText.length; i++) {
      const keyValue = letters.indexOf(this._key[keyId]);
      const plainTextValue = letters.indexOf(plainText[i]);

      if (keyId === this._key.length - 1) {
        keyId += 1;
      } else {
        keyId = 0;
      }

      cipherText += letters[(plainTextValue + keyValue) % letters.length];
    }

    return cipherText;
  }

  decode(cipherText) {
    let plainText = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    let keyId = 0;
    for (let i = 0; i < cipherText.length; i++) {
      const keyValue = letters.indexOf(this._key[keyId]);
      const cipherTextValue = letters.indexOf(cipherText[i]);

      if (keyId === this._key.length - 1) {
        keyId += 1;
      } else {
        keyId = 0;
      }

      const cipherId = (cipherTextValue - keyValue + letters.length) % letters.length;
      plainText += letters[cipherId];
    }

    return plainText;
  }

  get key() {
    return this._key;
  }
}
