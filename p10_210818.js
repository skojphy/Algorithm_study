
// 핸드폰 번호 가리기(Level 1)
// https://programmers.co.kr/learn/courses/30/lessons/12948

const solution = (p_n) => {
    const arr = new Array(p_n.length - 4).fill('*');
    arr.push(p_n.slice(p_n.length - 4));
    return arr.join('');
}

const phone_number = '01033334444';

// const phone_number = '027778888';

console.log(solution(phone_number));