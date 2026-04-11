function bankAccount() {
    let balance = 0;

    return {
        deposit: function(amount) {
            balance += amount;
            console.log("Balance: " + balance);
        },
        withdraw: function(amount) {
            balance -= amount;
            console.log("Balance: " + balance);
        }
    };
}

const myAccount = bankAccount();
myAccount.deposit(500);   // Balance: 500
myAccount.withdraw(200);  // Balance: 300