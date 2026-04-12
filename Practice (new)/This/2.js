const student = {
    name: "Santanu",
    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};

student.greet();


// this Inside a Method