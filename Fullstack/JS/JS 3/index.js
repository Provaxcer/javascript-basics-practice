const title = document.querySelector("#title")
const PnLBox = document.querySelector("#PnLField")
const Btn = document.querySelector("button")
const list = document.querySelector("#list")

Btn.addEventListener('click', function gettingInput() {

    const titleName = title.value;
    const profitnLossvalue = PnLBox.value;

    let arr = JSON.parse(localStorage.getItem('userProfile')) || [];
    if (!Array.isArray(arr)) arr = [];

    arr.push({
        name: titleName,
        pnl: Number(profitnLossvalue)
    });

    localStorage.setItem('userProfile', JSON.stringify(arr));

    const item = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = titleName;

    const pnl = document.createElement("h3");
    pnl.textContent = `The Profit / Loss is: ${profitnLossvalue}`;

    item.appendChild(heading);
    item.appendChild(pnl);

    list.appendChild(item);

    let total = arr.reduce((sum, item) => sum + item.pnl, 0);

    const totalDiv = document.createElement("div");
    totalDiv.textContent = `Total Profit / Loss: ${total}`;

    list.appendChild(totalDiv);
});