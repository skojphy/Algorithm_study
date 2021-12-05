// 395. Longest Substring with At Least K Repeating Characters(Medium)
// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

const longestSubstring = (s, k) => {
  let answer = 0;
  const hash = new Array(26).fill(0);

  [...s].forEach((char, i) => {
    hash[s.charCodeAt(i) - 97]++;
  });

  for (let lt = 0; lt <= s.length - k; lt++) {
    const copiedHash = [...hash];
    let rt = s.length - 1;
    while (rt >= lt) {
      if (copiedHash.every(el => !el || el >= k)) {
        answer = Math.max(answer, rt - lt + 1);
      }
      copiedHash[s.charCodeAt(rt) - 97]--;
      rt--;
    }

    hash[s.charCodeAt(lt) - 97]--;
  }
  return answer;
};

// const s = 'ababbc';
// const k = 2;

const s = 'a';
const k = 1;

console.log(longestSubstring(s, k));
