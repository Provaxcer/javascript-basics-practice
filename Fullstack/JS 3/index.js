const title = document.querySelector("#title")
const PnLBox = document.querySelector("#PnLField")
const Btn = document.querySelector("button")

Btn.addEventListener('click', function gettingInput() {
    // taking value
    const titleName = title.value;
    const profitnLossvalue = PnLBox.value;
    // saving in object
    const userData = {
        name: titleName,
        pnl: profitnLossvalue
    };

    localStorage.setItem('userProfile', JSON.stringify(userData));

    const item = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = userData.name;

    const pnl = document.createElement("h3");
    pnl.textContent = `The Profit / Loss is: ${userData.pnl}`;

    item.appendChild(heading);
    item.appendChild(pnl);

    list.appendChild(item);

});


