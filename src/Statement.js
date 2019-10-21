class Statement {
  constructor() {
    this.currentStatement = '';
  }

  addLineToStatement(amount, balance, currentDate, type) {
    if (this.isCredit(type)) {
      this.currentStatement = `\n${currentDate} || ${amount}.00 || || ${balance}.00` + this.currentStatement
    } else {
      this.currentStatement = `\n${currentDate} || || ${amount}.00 || ${balance}.00` + this.currentStatement
    }
  }

  isCredit(type) {
    return (type === 'credit') ? true : false
  }

  print() {
    console.log(`date || credit || debit || balance` + this.currentStatement)
    return (`date || credit || debit || balance` + this.currentStatement)

  }

}