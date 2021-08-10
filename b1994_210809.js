const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on("close", () => {

    const nums = input.slice(1).map(a => a - 0);
    console.log(nums);

    const dist = Math.max(...nums) - Math.min(...nums);

    let dy = new Array(nums.length).fill(0).map(a => new Array(dist * 2 + 1).fill(1));

    for(let i = 0; i < nums.length; i++){
        for(let k = 0; k < i; k++){
            dy[i][nums[i] - nums[k] + dist] = dy[k][nums[i] - nums[k] + dist] + 1;
        }
    }

    let max = 0;
    for(let i = 0; i < nums.length; i++){
        max = dy.reduce((a, b) => Math.max(a, Math.max(...b)), 0);
    }
    console.log(max);


    process.exit();
});