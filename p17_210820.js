// 이상한 문자 만들기(Level1)
// https://programmers.co.kr/learn/courses/30/lessons/12930

const solution = s => {
    const arr = s.split(' ');
    let ans = [];
    for(let x of arr){
        let str = '';
        for(let i = 0; i < x.length; i++){
            i % 2 === 0 ? str += x[i].toUpperCase() : str += x[i].toLowerCase();
        }
        ans.push(str);
    }
    return ans.join(' ');
}

const s = 'try hello world';

console.log(solution(s));