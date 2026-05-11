const calculate = function calculateBrokerage (tradeValue , brokeragePercentage) {
    let result = (tradeValue * brokeragePercentage)/100;
    return result;
}

const value = calculate(10000, 0.5)

console.log(value);