const foods = ['Pizza', 'Burger', 'Sushi'];

localStorage.setItem('foods', JSON.stringify(foods));

const storedFoods = localStorage.getItem('foods');

const parsedFoods = JSON.parse(storedFoods);

console.log(parsedFoods[1]);