const { TransactionList } = require('../src/TransactionList')


describe("Transaction List", function(){
    describe("Get list of transactions back", function(){
        it("return transaction from transactions list", function(){
            let list = new TransactionList
            let transaction = {amount: 500, transactionType: 'deposit', date: '02/11/2020', updateBalance: 1000}
            list.addTransaction(transaction)
            expect(list.listOfTransactions.length).toEqual(1)
        })
    })
    describe("Return full statement back", function(){
        it("list of transactions returned in new line", function(){
            let list = new TransactionList
            let transaction = {amount: 500, transactionType: 'deposit', date: '02/11/2020', updatedBalance: 1000}
            let transaction2 = {amount: 100, transactionType: 'withdraw', date: '03/11/2020', updatedBalance: 900}
            list.addTransaction(transaction)
            list.addTransaction(transaction2)
            expect(list.printList()).toBe("date || credit || debit || balance\n02/11/2020 || || 500 || 1000\n03/11/2020 || 100 || || 900\n")
        })
    })
})
