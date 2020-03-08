let quoteBtn = document.getElementById("new-quote");
let tweetBtn = document.getElementById("tweet-quote");
let text = document.getElementById("text");
let author = document.getElementById("author");

const quotes = [
  {
    quote:
      "You're going to go through tough times - that's life. But I say, 'Nothing happens to you, it happens for you.' See the positive in negative events",
    author: "Joel Osteen"
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",
    author: "Steve Jobs"
  },
  {
    quote:
      "What you are, you are by accident of birth; what I am, I am by myself. There are and will be a thousand princes; there is only one Beethoven.",
    author: "Beethoven"
  }
];
quoteBtn.addEventListener("click", () => {
  //generate random number from the quotes array
  let max = quotes.length - 1;
  let min = 0;
  let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  //set new text and author
  // text.removeAttribute("class");
  // setTimeout(() => {
  //   text.className = "animated fadeIn";
  //   text.innerHTML = quotes[randNum].quote;
  //   author.innerHTML = quotes[randNum].author;
  // }, 100);
  text.innerHTML = quotes[randNum].quote;
  author.innerHTML = quotes[randNum].author;
});
