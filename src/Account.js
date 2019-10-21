class Account {
  constructor() {
    this.balance = 0
    this.statement = new Statement();
  }

  credit(amount) {
    this.balance += amount
    this.addToStatement(amount, this.balance, 'credit')
  }

  debit(amount) {
    if (this.balance - amount < 0) {
      throw "You have run out of money - please credit your account"
    }
    this.balance -= amount
    this.addToStatement(amount, this.balance, 'debit')
  }

  addToStatement(amount, balance, type) {
    this.statement.addLineToStatement(amount, balance, type);
  }

  print() {
    this.statement.print()
  }

}

