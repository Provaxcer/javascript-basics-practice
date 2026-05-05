const title = document.querySelector("#title")
const PnLBox = document.querySelector("#PnLField")
const Btn = document.querySelector("button")

let arr = JSON.parse(localStorage.getItem('userProfile')) || [];

// Full data 1 time data
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
    const savedUser = JSON.parse(localStorage.getItem('userProfile'));

    const heading = document.querySelector("h1")
    heading.textContent = userData.name;
    const pnl = document.querySelector("h3")
    pnl.textContent = `The Profit / Loss is: ${userData.pnl}`

})

