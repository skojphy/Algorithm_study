// Word Ladder(Hard)
// https://leetcode.com/problems/word-ladder/

const differentLetters = (word, nextWord) =>
  word.split('').filter((char, idx) => char !== nextWord[idx]).length;

const ladderLength = (beginWord, endWord, wordList) => {
  const check = new Set(wordList);
  check.delete(beginWord);
  const queue = [beginWord];
  let L = 0;
  while (queue.length) {
    if (queue.includes(endWord)) return L + 1;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let currentWord = queue.shift();
      [...check]
        .filter(nextWord => check.has(nextWord) && differentLetters(currentWord, nextWord) === 1)
        .forEach(element => {
          check.delete(element);
          queue.push(element);
        });
    }
    L++;
  }
  return 0;
};

// const beginWord = 'hit';
// const endWord = 'cog';
// const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

const beginWord = 'hot';
const endWord = 'dog';
const wordList = ['hot', 'cog', 'dog', 'tot', 'hog', 'hop', 'pot', 'dot'];

console.log(ladderLength(beginWord, endWord, wordList));
