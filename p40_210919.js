const solution = s => {
  let num = 0;
  let str = '';
  s.split('').forEach(e => {
    if (e - 0 < 10) {
      num = num * 10 + (e - 0);
    } else {
      str = str + e;
      switch (str) {
        case 'zero':
          num = num * 10;
          str = '';
          break;
        case 'one':
          num = num * 10 + 1;
          str = '';
          break;
        case 'two':
          num = num * 10 + 2;
          str = '';
          break;
        case 'three':
          num = num * 10 + 3;
          str = '';
          break;
        case 'four':
          num = num * 10 + 4;
          str = '';
          break;
        case 'five':
          num = num * 10 + 5;
          str = '';
          break;
        case 'six':
          num = num * 10 + 6;
          str = '';
          break;
        case 'seven':
          num = num * 10 + 7;
          str = '';
          break;
        case 'eight':
          num = num * 10 + 8;
          str = '';
          break;
        case 'nine':
          num = num * 10 + 9;
          str = '';
          break;
      }
    }
  });
  return num;
};

const s = 'one4seveneight';

console.log(solution(s));
