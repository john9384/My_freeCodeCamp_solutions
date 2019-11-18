function findLongestWord(str) {
  let longestWord = str.split(" ").sort((a, b) => b.length - a.length);
  str = longestWord[0];
}
findLongestWord("The quick brown fox jumped over the lazy dog");
