// 최대공약수와 최소공배수(Level1)
// https://programmers.co.kr/learn/courses/30/lessons/12940

const solution = (n, m) => {
    const gcd = (n, m) => {
        let a = Math.max(n, m);
        let b = Math.min(n, m);
        let r;
        while (a % b !== 0) {
            r = a % b;
            a = b;
            b = r;
        }
        return b;
    }
    return [gcd(n, m), n * m / gcd(n, m)];
}

// const n = 3;
// const m = 12;

const n = 2;
const m = 5;

console.log(solution(n, m));