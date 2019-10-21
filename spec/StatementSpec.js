describe("Statement", function () {

  beforeEach(function () {
    statement = new Statement();
  });

  it("should initialize with a currentStatement of an empty string", function () {
    expect(statement.currentStatement).toEqual('')
  });

  describe("#addLineToStatement", function () {
    it("adds the transaction to the statement if no other transactions are present", function () {
      statement.addLineToStatement(200, 200, new Date().toLocaleDateString(), 'credit');
      expect(statement.currentStatement).toEqual(`\n${new Date().toLocaleDateString()} || 200.00 || || 200.00`)
    })

    it("adds the most recent transaction to the top of statement if another transaction is present", function () {
      statement.addLineToStatement(200, 200, new Date().toLocaleDateString(), 'credit');
      statement.addLineToStatement(300, 500, new Date().toLocaleDateString(), 'credit');
      expect(statement.currentStatement).toEqual(`\n${new Date().toLocaleDateString()} || 300.00 || || 500.00\n${new Date().toLocaleDateString()} || 200.00 || || 200.00`)
    })

    it("moves the '||' if the amount is debited rather than credited", function () {
      statement.addLineToStatement(400, 400, new Date().toLocaleDateString(), 'credit');
      statement.addLineToStatement(300, 100, new Date().toLocaleDateString(), 'debit');
      expect(statement.currentStatement).toEqual(`\n${new Date().toLocaleDateString()} || || 300.00 || 100.00\n${new Date().toLocaleDateString()} || 400.00 || || 400.00`)
    })

  })

  describe("#isCredit", function () {
    it("returns true if 'credit' is given as the argument", function () {
      expect(statement.isCredit('credit')).toEqual(true)
    })

    it("returns false if 'debit' is given as the argument", function () {
      expect(statement.isCredit('debit')).toEqual(false)
    })
  })

  describe("#print", function () {
    it("returns the full statement with preceded by 'date || credit || debit || balance' when called", function () {
      statement.addLineToStatement(400, 400, new Date().toLocaleDateString(), 'credit');
      statement.addLineToStatement(300, 100, new Date().toLocaleDateString(), 'debit');

      expect(statement.print()).toEqual(`date || credit || debit || balance\n${new Date().toLocaleDateString()} || || 300.00 || 100.00\n${new Date().toLocaleDateString()} || 400.00 || || 400.00`)
    })

  })

});