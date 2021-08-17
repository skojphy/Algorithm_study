const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on("close", () => {

    const n = Number(input[0]);
    const nums = input[1].split(' ').map(a => Number(a)).sort((a, b) => b - a);
    let sum = 0;

    for(let i = 1; i <= n; i++){
        sum += (nums[i - 1] * i);
    }
    console.log(sum);

    process.exit();
});