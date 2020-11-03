const { Account } = require('../src/Account')

describe('Account', function () {
  let account
  beforeEach(function () {
    account = new Account()
  })
  it('balance to be 0', function () {
    expect(account.getBalance()).toBe(0)
  })

  it('desposit 100 and balance to be 100', function () {
    account.deposit(100)
    expect(account.getBalance()).toBe(100)
  })

  it('deposit 100, withdraw 45 and balance to be 55 ', function () {
    account.deposit(100)
    account.withdraw(45)
    expect(account.getBalance()).toBe(55)
  })

  // describe("Print bank statement", function(){
  //     it("show the full statment of the user's transactions", function(){
  //         let account = new Account
  //         account.deposit(500)
  //         account.withdraw(100)
  //         expect(account.printStatment()).toEqual("date || credit || debit || balance\n02/11/2020 || || 500 || 500\n03/11/2020 || 100 || || 400\n")
  //     })
  // })

  // could not get the date to be be taken in by default and couldn't get it to be mocked when depositing or withdrawing
})
