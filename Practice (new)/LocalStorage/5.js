// Save
localStorage.setItem("username", "Santanu");

// Read
const name = localStorage.getItem("username");
console.log(name); // "Santanu"

// Delete
localStorage.removeItem("username");

// Now this returns null
console.log(localStorage.getItem("username")); // null