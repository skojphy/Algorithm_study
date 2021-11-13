// 739. Daily Temperatures(Medium)
// https://leetcode.com/problems/daily-temperatures/

const dailyTemperatures = temperatures => {
  const answer = [];
  temperatures.forEach((el, idx) => {
    let rt = idx + 1;
    while (rt < temperatures.length) {
      if (el < temperatures[rt]) {
        answer.push(rt - idx);
        break;
      }
      rt++;
    }
    if (rt === temperatures.length) answer.push(0);
  });
  return answer;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
