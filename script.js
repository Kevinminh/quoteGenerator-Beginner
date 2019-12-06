const quotes = [
  {
    name: "Khalifatul Masih III",
    quote: "Love For All, Hatred For None."
  },
  {
    name: "Amy Poehler",
    quote: "Change the world by being yourself."
  },
  {
    name: "T.S Eliot",
    quote: "Every moment is a fresh beginning."
  },
  {
    name: "Mark Twain",
    quote: "Never regret anything that made you smile."
  },
  {
    name: "Unknown",
    quote: "Die with memories, not dreams."
  },
  {
    name: "Unknown",
    quote: "Aspire to inspire before we expire."
  },
  {
    name: "Pablo Picasso",
    quote: "Everything you can imagine is real."
  }
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteTxt = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);

  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
