function makeGreeter(greeting) {
    return {
        greet: function (name) {
            console.log(`${greeting} ${name}`);
        }
    }
}

const greeter = makeGreeter("Hello");
greeter.greet("Santanu");