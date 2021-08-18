// 부족한 금액 계산하기(Level 1)
// https://programmers.co.kr/learn/courses/30/lessons/82612

const solution = (price, money, count) =>  Math.max(0, (count + 1) * count * price / 2 - money);

const price = 3;

const money = 20;

const count = 4;

console.log(solution(price, money, count));