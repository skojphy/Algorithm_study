const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);   // input 배열에 한 줄씩 문자열로 입력을 받습니다. 즉, 첫 번째 줄이 input[0]에, 두 번째 줄이 input[1]에... 담깁니다.
}).on("close", () => {

    const t = input[0] - 0; // 이건 input[0]이 문자열이라서 - 0을 이용해 숫자형으로 바꾸어 준 것입니다. 상황에 따라 알맞은 자료형으로 바꾸어 사용하면 됩니다.
    const k = input[1] - 0;
    const coins = [];
    for (let i = 2; i < input.length; i++) {
        coins.push(input[i].split(' '));
    }
    // input으로 받은 입력 문자열을 사용하기 좋게 변수에 담아 줍니다.
    // coins의 경우에는 input의 2번째 줄부터 마지막 줄까지 담기게 되므로 반복문으로 push해 주었습니다.

    let answer = 0;
    let dy = new Array(t + 1).fill(0);
    dy[0] = 1;

    for (let [p, n] of coins) {
        for (let j = t; j >= 1; j--) {
            for (let k = 1; k <= n; k++) {
                if (j - p * k < 0) {
                    break;
                }
                dy[j] += dy[j - p * k];
            }
        }
    }
    answer = dy[t];

    console.log(answer);    // 답 출력

    // 이 윗부분까지 코드를 넣고 마지막에 답을 console.log로 출력해 주면 됩니다.

    process.exit();
});