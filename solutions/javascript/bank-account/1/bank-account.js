//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._balance = 0;
    this.open = false;
  }

  open() {
    this.open = true;
  }

  close() {
    this.open = false;
  }

  deposit(amount) {
    if (!this.open) throw new ValueError();
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this.open) throw new ValueError();
    if (amount > this.balance) throw new ValueError();
    this._balance -= amount;
  }

  get balance() {
    if (!this.open) throw new ValueError();
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
