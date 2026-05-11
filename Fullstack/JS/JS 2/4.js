function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function multi(a, b) {
    return a * b;
}

function calculate(operation, a, b) {
    return operation(a, b)
}


console.log(calculate(sum, 40, 50))