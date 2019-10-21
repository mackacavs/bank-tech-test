class Account {
  constructor() {
    this.balance = 0
    this.statement = new Statement();
  }

  credit(amount) {
    this.balance += amount
    this.addToStatement(amount, this.balance, new Date().toLocaleDateString(), 'credit')
  }

  debit(amount) {
    if (this.balance - amount < 0) {
      throw "You have run out of money - please credit your account"
    }
    this.balance -= amount
    this.addToStatement(amount, this.balance, new Date().toLocaleDateString(), 'debit')
  }

  addToStatement(amount, balance, currentDate, type) {
    this.statement.addLineToStatement(amount, balance, currentDate, type);
  }

  print() {
    this.statement.print()
  }

}