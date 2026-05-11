function calculateBrokerage (tradeValue , brokeragePercentage) {
    let result = (tradeValue * brokeragePercentage)/100;
    return result;
}

const value = calculateBrokerage(10000, 0.5)

console.log(value);