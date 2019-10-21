describe("Account", function () {

  beforeEach(function () {
    statement = new Statement();
  });

  it("should initialize with a currentStatement of an empty string", function () {
    expect(statement.currentStatement).toEqual('')
  });

  describe("#addLineToStatement", function () {
    it("to add the transaction to the statement", function () {
      statement.addLineToStatement()
      expect(account.balance).toEqual(100)
    })

    it("expects the call the function 'addToStatement'", function () {
      spyOn(account, 'addToStatement')
      account.credit(100)
      expect(account.addToStatement).toHaveBeenCalledWith(100, 'credit', new Date().toLocaleDateString());
    })

  })

});