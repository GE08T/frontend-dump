// Selector
let btnQuote  = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

// Quotes
const quotes = [
  {quote: `"The way to get started is to quit talking and begin doing."`, person:   "Walt Disney"},
  {quote: `"The future belongs to those who believe in the beauty of their dreams."`, person: "Eleanor Roosevelt"},
  {quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`, person: "Oprah Winfrey"},
  {quote: `"You must be the change you wish to see in the world."`, person: "Mahatma Gandhi"},
  {quote: `"Well done is better than well said."`, person: "Benjamin Franklin"},
  {quote: `"You will face many defeats in life, but never let yourself be defeated."`, person: "Maya Angelou"},
  {quote: `"Never let the fear of striking out keep you from playing the game."`, person: "Babe Ruth"},
  {quote: `"In the end, it's not the years in your life that count. It's the life in your years."`, person: "Abraham Lincoln"},
  {quote: `"The only impossible journey is the one you never begin."`, person: "Tony Robbins"},
  {quote: `"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."`, person: "John Lennon"},
]

btnQuote.addEventListener('click', () => {
  let randomQuote = Math.floor(Math.random() * quotes.length)
  quote.innerText = quotes[randomQuote].quote
  person.innerText = quotes[randomQuote].person
})
