describe("Account", function(){
    describe("Account balance", function(){
        it("to be 0", function(){
            let account = new Account
            expect(account.balance).toBe(0)
        })
    })

    describe("Deposit money", function(){
        it("desposit 100 pounds to the account", function(){
            let account = new Account
            account.deposit(100)
            expect(account.balance).toBe(100)
        })
    })
})