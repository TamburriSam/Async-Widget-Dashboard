export async function getQuote() {
  const quoteBox = document.querySelector("#quotebox");

  const response = await fetch("https://type.fit/api/quotes");
  const quoteData = await response.json();

  setInterval(() => {
    const random = quoteData[Math.floor(Math.random() * quoteData.length)];
    if (random.author === null) {
      quoteBox.innerHTML = `<div id="quote">"${random.text}"</div> <br> <div id="author">- Unknown Author</div>`;
    } else {
      quoteBox.innerHTML = `<div id="quote">"${random.text}"</div> <br> <div id="author">- ${random.author}</div>`;
    }
  }, 5000);
}
