describe("Account", function () {

  beforeEach(function () {
    account = new Account();
  });

  it("should initialize with a balance of 0", function () {
    expect(account.balance).toEqual(0)
  });

  it("should initialize with a new instance of the statement class", function () {
    expect(account.statement).toEqual(new Statement())
  });

  describe("#credit", function () {
    it("expects the balance to increase by the argument provided entered every time it is called", function () {
      account.credit(100)
      expect(account.balance).toEqual(100)
    })

    it("expects the call the function 'addToStatement'", function () {
      spyOn(account, 'addToStatement')
      account.credit(100)
      expect(account.addToStatement).toHaveBeenCalledWith(100, 100, 'credit');
    })

  })

  describe("#debit", function () {

    beforeEach(function () {
      account.credit(100)
    });

    it("expects the balance to decrease by the argument provided entered every time it is called", function () {
      account.debit(50)
      expect(account.balance).toEqual(50)
    })

    it("expects the call the function 'addToStatement'", function () {
      spyOn(account, 'addToStatement')
      account.debit(50)
      expect(account.addToStatement).toHaveBeenCalledWith(50, 50, 'debit');
    })

    it("expects throw an error if the balance will be reduced to lower than 0 due to the amount debited", function () {
      expect(function () { account.debit(150) }).toThrow("You have run out of money - please credit your account")
    })
  })

  describe("#addToStatement", function () {
    it("expects the function to call the addLineToStatement function from the statement class", function () {
      statement = new Statement();
      spyOn(account.statement, 'addLineToStatement');
      account.addToStatement(100, 100, 'credit')
      expect(account.statement.addLineToStatement).toHaveBeenCalledWith(100, 100, 'credit');
    })
  })

  describe("#print", function () {
    it("expects the function to call the print function from the statement class", function () {
      statement = new Statement();
      spyOn(account.statement, 'print');
      account.print()
      expect(account.statement.print).toHaveBeenCalled();
    })
  })


});