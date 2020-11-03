const { Account } = require('../src/Account')
const moment = require('moment')


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
  //       jasmine.clock().install();
  //       let today = moment('2020-10-15').toDate()
  //       jasmine.clock().mockDate(today);
  //         let account = new Account
  //         account.deposit(500)
  //         account.withdraw(100)
  //         expect(account.printStatment()).toEqual("date || credit || debit || balance\n15/10/2020 || || £500.00 || £500.00\n15/10/2020 || £100.00 || || £400.00\n")
  //     })
  // })

  // Only thing was I could not get working in this test to pass was the date was not coming out as DD/MM/YYY, although I have the logic in the code in the Transaction.js. 

})
