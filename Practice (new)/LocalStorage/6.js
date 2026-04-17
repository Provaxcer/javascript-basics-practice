// Read existing count, or start at 0
let count = localStorage.getItem("count");
count = count ? parseInt(count) : 0;

count++;
localStorage.setItem("count", count);

console.log("Count:", count);