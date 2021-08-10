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

    let target = 0;
    let max = 0;
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            let cnt = 0;
            const d = nums[j] - nums[i];
            target = nums[j] + d;
            for(let k = j + 1; k < nums.length; k++){
                if(nums[k] === target){
                    target += d;
                    cnt++;
                }
            }
            max = Math.max(cnt, max);
        }
    }
    console.log(max + 2);


    process.exit();
});