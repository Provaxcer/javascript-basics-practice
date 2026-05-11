async function getData() {
  const url1 = "https://api.coinbase.com/v2/prices/BTC-USD/spot";
  const url2 = "https://official-joke-api.appspot.com/jokes/programming/random";
  try {
    const response1 = await fetch(url1);
    const response2 = await fetch(url2);

    if (!response1.ok) {
      throw new Error(`Response status: ${response1.status}`);
    }
    if (!response2.ok) {
      throw new Error(`Response status: ${response2.status}`);
    }

    const json1 = await response1.json();
    const json2 = await response2.json();
    console.log(json1.data.amount);
    console.log(json2[0].setup);
    console.log(json2[0].punchline);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

getData();
