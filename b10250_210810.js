const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on("close", () => {

    const t = Number(input[0]);
    for(let i = 1; i <= t; i++){
        const arr = input[i].split(' ');
        const h = Number(arr[0]);
        const w = Number(arr[1]);
        const n = Number(arr[2]);
        let X = '';
        let Y = '';
        if(n % h === 0){
            X += h.toString();
        } else{
            X += (n % h).toString();
        }
        if(Math.floor(n / h) < 10){
            Y += '0' + Math.ceil(n / h).toString();
        } else{
            Y += Math.ceil(n / h).toString();
        }
        console.log(X + Y);
    }

    process.exit();
});