let quoteBtn = document.getElementById("new-quote");
let tweetBtn = document.getElementById("tweet-quote");
let text = document.getElementById("text");
let author = document.getElementById("author");
let body = document.querySelector("body");

body.onload = () => {
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      let quotes = JSON.parse(this.responseText);
      let max = quotes.length - 1;
      let min = 0;
      let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
      text.innerHTML = quotes[randNum].quote;
      author.innerHTML = quotes[randNum].author;
    }
  });

  xhr.open(
    "GET",
    "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10"
  );
  xhr.setRequestHeader(
    "x-rapidapi-host",
    "andruxnet-random-famous-quotes.p.rapidapi.com"
  );
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "6a50c75a36msh94eb9c76ff5e30bp1448ecjsn1159c3eb53db"
  );

  xhr.send(data);
};

quoteBtn.addEventListener("click", () => {
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      let quotes = JSON.parse(this.responseText);
      let max = quotes.length - 1;
      let min = 0;
      let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
      text.innerHTML = quotes[randNum].quote;
      author.innerHTML = quotes[randNum].author;
    }
  });

  xhr.open(
    "GET",
    "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10"
  );
  xhr.setRequestHeader(
    "x-rapidapi-host",
    "andruxnet-random-famous-quotes.p.rapidapi.com"
  );
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "6a50c75a36msh94eb9c76ff5e30bp1448ecjsn1159c3eb53db"
  );

  xhr.send(data);
});
