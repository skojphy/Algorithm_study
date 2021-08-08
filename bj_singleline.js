const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = '';
rl.on('line', line => {
    input += line;   // 입력값 한 줄을 input 변수로 받아 옵니다.(문자열)
    rl.close();     // 이 부분이 멀티라인과의 차이입니다. 입력을 한 번만 받고 입력받기를 끝냅니다.
}).on("close", () => {

    const a = input.split(' ')[0] - 0;
    const b = input.split(' ')[1] - 0;
    // input 문자열에 담긴 값을 띄어쓰기를 기준으로 자르고 형변환하여 각각 변수에 담았습니다.
    // 편하신 방법으로 입력값을 자르거나 변수에 담아서 사용하세요!

    const sum = a + b;

    console.log(sum);    // 답 출력

    // 이 윗부분까지 코드를 넣고 마지막에 답을 console.log로 출력해 주면 됩니다.

    process.exit();
});