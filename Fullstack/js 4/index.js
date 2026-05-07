const titleInput = document.querySelector("#title");
const pnlInput = document.querySelector("#PnLField");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const totalBox = document.querySelector("#total");



// Trade Class
class Trade {

    constructor(title, pnl) {
        this.title = title;
        this.pnl = pnl;
    }

}



// Portfolio Class
class Portfolio {

    constructor() {
        this.trades =
            JSON.parse(localStorage.getItem("trades")) || [];
    }


    addTrade(trade) {

        this.trades.push(trade);

        localStorage.setItem(
            "trades",
            JSON.stringify(this.trades)
        );

    }


    calculateTotal() {

        return this.trades.reduce(
            (sum, trade) => sum + trade.pnl,
            0
        );

    }


    displayTrades() {

        list.innerHTML = "";

        this.trades.forEach((trade) => {

            const item = document.createElement("div");

            item.innerHTML = `
                <h2>${trade.title}</h2>
                <h4>Profit / Loss: ${trade.pnl}</h4>
            `;

            list.appendChild(item);

        });

        totalBox.textContent =
            `Total Profit / Loss: ${this.calculateTotal()}`;

    }

}



const myPortfolio = new Portfolio();

myPortfolio.displayTrades();



addBtn.addEventListener("click", () => {

    const title = titleInput.value;
    const pnl = Number(pnlInput.value);

    if (!title || pnlInput.value === "") {
        alert("Fill all fields");
        return;
    }

    const newTrade = new Trade(title, pnl);

    myPortfolio.addTrade(newTrade);

    myPortfolio.displayTrades();

    titleInput.value = "";
    pnlInput.value = "";

});