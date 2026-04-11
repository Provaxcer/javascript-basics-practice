function outer() {
    const sanu = 5;

    function first() {
        console.log(sanu);
    }
    return function second() {
        console.log(sanu * 2);
    }
    return function third() {
        console.log(sanu * 3);
    }
}


