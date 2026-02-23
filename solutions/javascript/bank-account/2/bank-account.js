//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._balance = 0;
    this.accountOpen = false;
  }

  open() {
    this.accountOpen = true;
  }

  close() {
    this.accountOpen = false;
  }

  deposit(amount) {
    if (!this.accountOpen) throw new ValueError();
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this.accountOpen) throw new ValueError();
    if (amount > this.balance) throw new ValueError();
    this._balance -= amount;
  }

  get balance() {
    if (!this.accountOpen) throw new ValueError();
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
