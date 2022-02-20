const quotes = [
  {
    quote: `“Your time is limited, so don't waste it living someone else's life.”`,
    author: "Steve Jobs"
  },  {
    quote: `"Don't let the noise of others' opinions drown out your own inner voice."`,
    author: "Steve Jobs"
  },
  {
    quote: `"Don't compare yourself with other people; compare yourself with who you were yesterday."`,
    author: "Jordan Peterson"
  },
  {
    quote: `“Innovation distinguishes between a leader and a follower.”`,
    author: "Steve Jobs"
  },
  {
    quote: `"It is more difficult to rule yourself than to rule a city."`,
    author: "Jordan Peterson"
  },
  {
    quote: `"Don't be dependent. At all. Ever. Period."`,
    author: "Jordan Peterson"
  },
  {
    quote: "Courage is knowing what not to fear.",
    author: "Plato"
  },
  {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
  {
    quote: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffet"
  },
  {
    quote: "Time is the friend of the wonderful company, the enemy of the mediocre.",
    author: "Warren Buffet"
  },
];

const quote = document.querySelector('#quote li:first-child');
const author = document.querySelector('#quote li:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author}`;

