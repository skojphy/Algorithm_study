// 소수 찾기(Level 2)
// https://programmers.co.kr/learn/courses/30/lessons/42839

const isPrime = n => {
    if(n < 2){
        return 0;
    } else if(n < 4){
        return 1;
    } else{
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0){
                return 0;
            }
        }
    }
    return 1;
}

const solution = numbers => {
    const nums = numbers.split('').map(a => a - 0);
    const n = numbers.length;
    const check = Array(n).fill(0);
    let cnt = 0;
    let num = 0;
    let set = new Set();
    set.add(0);

    const DFS = L => {
        if(L < n){
            for(let i = 0; i < n; i++){
                if(check[i] === 0){
                    check[i] = 1;
                    cnt += isPrime(num);
                    num = num * 10 + nums[i];
                    set.add(num * isPrime(num));
                    DFS(L + 1);
                    num = (num - num % 10) / 10;
                    check[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return set.size - 1;
}

const numbers = "01179";

console.log(solution(numbers));
