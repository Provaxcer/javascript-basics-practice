let form = {
    name: "Santanu",
    age: 0,
    college: "JIS",
    currentSem: null
};

validate("name", form.name);
validate("age", form.age);
validate("college", form.college);
validate("currentSem", form.currentSem);

function validate(fieldname, value) {
    if (value === null || value === undefined) {
        console.log(`${fieldname} is required`);
    }
}