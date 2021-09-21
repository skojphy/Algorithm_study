// 멀쩡한 사각형(Level 2)
// https://programmers.co.kr/learn/courses/30/lessons/62048

const solution = (w, h) => {
  let g;
  if (w > h) {
    g = gcd(w, h);
  } else {
    g = gcd(h, w); //g는 w, h의 최대공약수
  }
  let answer = w * h - (w + h - g); //전체 사각형 - 흰색 사각형
  return answer;
};

const gcd = (a, b) => {
  let arr = [a, b];
  for (let i = 2; arr[i - 1] > 0; ++i) {
    if (arr[i - 2] % arr[i - 1] == 0) {
      break;
    }
    arr.push(arr[i - 2] % arr[i - 1]);
  }
  return arr[arr.length - 1];
};
