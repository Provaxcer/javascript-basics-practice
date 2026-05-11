let stockSymbol = ""      
let quantity = 0          
let price = 150.5         
let brokerToken = null 

if (!stockSymbol) {
    console.log(`stockSymbol is missing`);
}

else {
    console.log("stockSymbol exists");
}

if (price) {
    console.log("price exists");
}else {
    console.log("price missing");
}
if (!quantity) {
    console.log("quantity missing");
}else {
    console.log("quantity exists");
}
if (!brokerToken) {
    console.log("brokerToken missing");
}else {
    console.log("brokerToken exists");
}

if (stockSymbol && quantity && price && brokerToken) {
    console.log("Trade ready to execute");
}