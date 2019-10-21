class Account {
  constructor() {
    this.balance = 0
    this.statement = new Statement();
  }

  credit(amount) {
    this.balance += amount
    this.addToStatement(amount, 'credit', new Date().toLocaleDateString())
  }

  debit(amount) {
    if (this.balance - amount < 0) {
      throw "You have run out of money - please credit your account"
    }
    this.balance -= amount
    this.addToStatement(amount, 'debit', new Date().toLocaleDateString())
  }

  addToStatement(amount, date) {
    this.statement.addLineToStatement(amount, date);
  }

  print() {
    this.statement.print()
  }

}