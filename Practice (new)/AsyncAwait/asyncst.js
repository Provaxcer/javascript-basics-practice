async function sanu() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await promise.json();
    console.log(data.title);
}

sanu();