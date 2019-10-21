class Account {
  constructor() {
    this.balance = 0
    this.statement = new Statement();
  }

  credit() {
    console.log("Hello")
  }

  debit() {

  }

  addToStatement() {
    this.statement.create();
  }

}

