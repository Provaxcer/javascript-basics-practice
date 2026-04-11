function makeGreeting(name) {
    return function() {
        console.log("Hello, " + name);
    };
}

const greetSantanu = makeGreeting("Santanu");
const greetAlex = makeGreeting("Alex");

greetSantanu(); // Hello, Santanu
greetAlex();    // Hello, Alex