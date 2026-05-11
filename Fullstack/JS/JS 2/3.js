const portfolio = {
    stock: "Tata",
    targetPrice: 400,
    currentPrice: 250,
    checkAlert: function() {
        setTimeout(() => {
            if (this.currentPrice >= this.targetPrice) {
                console.log("TATA hit target! Buy now.");
            }
            else {
                console.log("TATA not there yet.");
            }
        }, 2000);

    }
}
portfolio.checkAlert();