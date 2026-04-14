class BankAccount {
    constructor(ownerName) {
        this.ownerName = ownerName;
        this.balance = 0;
    }


    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("Balance: " + this.balance);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Give lesser amount");
        }
        this.balance = this.balance - amount;
        console.log("Balance: " + this.balance);
    }
}


const account = new BankAccount("Santanu");

try {
    account.deposit(500);
    account.withdraw(200);
    account.withdraw(400);
} catch (error) {
    console.log("Error: " + error.message);
}