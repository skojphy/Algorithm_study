// 오픈채팅방(Level 2)
// https://programmers.co.kr/learn/courses/30/lessons/42888

const solution = record => {
    const user_num = new Map();
    const user_nick = new Map();
    const arr = [];
    const ans = [];
    let cnt = 0;
    for(let x of record){
        const [status, id, nickname] = x.split(' ');
        if(status === 'Enter'){
            if(user_num.has(id)){
                user_nick.set(user_num.get(id), nickname);
                arr.push(user_num.get(id));
            } else{
                user_num.set(id, ++cnt);
                user_nick.set(user_num.get(id), nickname);
                arr.push(user_num.get(id));
            }
        } else if(status === 'Leave'){
            arr.push(user_num.get(id) * -1);
        } else{
            user_nick.set(user_num.get(id), nickname);
        }
    }
    for(let x of arr){
        x > 0 ? ans.push(user_nick.get(x) + '님이 들어왔습니다.') : ans.push(user_nick.get(x * -1) + '님이 나갔습니다.');
    }
    return ans;
}

// const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan", "Leave uid4567"];


console.log(solution(record));