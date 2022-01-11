class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  getters() {
    let fullInfo = this.id + this.name + this.balance;
    return fullInfo;
  }

  setters(name, balance) {
    name = this.name;
    balance = this.balance;
    return name + balance;
  }

  credit(amount) {
    this.balance += amount;
    return this.balance;
  }

  debit(amount) {
    if (amount < this.balance) {
      this.balance - amount;
      return this.balance;
    }
    return `Amount exceeded balance.`;
  }

  transferTo(anotherAccount, amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      anotherAccount.balance += amount;
      return this.balance;
    }
    return `Amount exceeded balance.`;
  }

  toString() {
    return `${this.name}'s account balance is $${this.balance}.`;
  }

  static identifyAccounts(firstAcc, secondAcc) {
    if (firstAcc.name === secondAcc.name && firstAcc.id === secondAcc.id) {
      return true;
    }
    return false;
  }
}

let savingAcc = new Account(101, 'Saving account', 2000);
let cardAcc = new Account(102, 'Card account', 1000);

console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance);

let anotherAcc = savingAcc;

console.log(Account.identifyAccounts(savingAcc, anotherAcc));
console.log(Account.identifyAccounts(savingAcc, cardAcc));
console.log(savingAcc.toString());
