// 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410

const solution = id => {
    id = id.toLowerCase();
    const arr = id.match(/[0-9a-z-_.]/g);
    const stack = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '.' && (stack.length === 0 || stack[stack.length - 1] === '.')){
            continue;
        }
        stack.push(arr[i]);
    }
    if(stack.length > 0 && stack[stack.length - 1] === '.'){
        stack.pop();
    }
    if(stack.length === 0){
        stack.push('a');
    }
    while(stack.length > 15){
        stack.pop();
    }
    if(stack.length > 0 && stack[stack.length - 1] === '.'){
        stack.pop();
    }
    while(stack.length < 3){
        stack.push(stack[stack.length - 1]);
    }

    return stack.join('');
}

// const id = '...!@BaT#*..y.abcdefghijklm';

// const id = 'z-+.^.';

// const id = '=.=';

// const id = '123_.def';

const id = 'abcdefghijklmn.p';

console.log(solution(id));