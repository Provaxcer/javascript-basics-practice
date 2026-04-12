const student = {
    name: "Santanu",
    greet: function() {
        const inner = () => {
            console.log("Hello, I am " + this.name);
        };
        inner();
    }
};

student.greet(); // "Hello, I am Santanu"


// this Inside a Method with a Nested Arrow Function