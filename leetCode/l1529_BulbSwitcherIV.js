// 1529. Bulb Switcher IV(Medium)
// https://leetcode.com/problems/bulb-switcher-iv/

const minFlips = target => {
  let flag = 0;
  let cnt = 0;
  [...target].forEach(el => {
    if (flag !== +el) {
      flag = flag ? 0 : 1;
      cnt++;
    }
  });
  return cnt;
};

const target = '10111';
console.log(minFlips(target));
