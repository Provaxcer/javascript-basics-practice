const student = {
    name: "Santanu",
    greet: () => {
        console.log("Hello, I am " + this.name);
    }
};


student.greet();


// this in an Arrow Function