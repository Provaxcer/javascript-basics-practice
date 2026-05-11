const url1 = "https://api.coinbase.com/v2/prices/BTC-USD/spot";
const url2 = "https://official-joke-api.appspot.com/jokes/programming/random";

const promise1 = fetch(url1).then(res => res.json());
const promise2 = fetch(url2).then(res => res.json());

Promise.all([promise1, promise2])
  .then(([data1, data2]) => {
    console.log(`Bitcoin Price: ${data1.data.amount}`); 
    console.log(data2[0].setup);
    console.log(data2[0].punchline);
    
  })
  .catch((err) => {
    console.log("Fetch failed");
  });