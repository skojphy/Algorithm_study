const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = '';
rl.on('line', line => {
    input += line;
    rl.close();
}).on("close", () => {

    for(let x of input){
        
    }

    const sum = a + b;

    console.log(sum);    // 답 출력

    // 이 윗부분까지 코드를 넣고 마지막에 답을 console.log로 출력해 주면 됩니다.

    process.exit();
});