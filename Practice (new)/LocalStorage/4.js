const user = { name: "Santanu", age: 21 };

// Save object
localStorage.setItem("user", JSON.stringify(user));

// Read object back
const data = localStorage.getItem("user");
const parsed = JSON.parse(data);

console.log(parsed.name); // "Santanu"