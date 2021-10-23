// 괄호 회전하기(Level 2)
// https://programmers.co.kr/learn/courses/30/lessons/76502

const isRightParenthesis = s => {
  const stack = [];
  [...s]
    .map(el =>
      el === '(' ? -1 : el === ')' ? 1 : el === '{' ? -2 : el === '}' ? 2 : el === '[' ? -3 : 3
    )
    .forEach(el =>
      !stack.length || stack[stack.length - 1] + el || stack[stack.length - 1] > el
        ? stack.push(el)
        : stack.pop()
    );
  return !stack.length;
};

const solution = s => {
  let cnt = 0;
  let str = s;
  for (let i = 0; i < s.length; i++) {
    if (isRightParenthesis(str)) cnt++;
    str = [...str.slice(1), str[0]].join('');
  }
  return cnt;
};

// const s = '[](){}';
const s = '({[}])';

console.log(solution(s));
// console.log(isRightParenthesis(s));
