const arr1 = Array(5);
const arr2 = Array(5).fill();
const arr3 = Array(5).map(a => 1);
const arr4 = Array(5).fill().map(a => 1);
const arr5 = [ , , , , ];
const arr6 = [null, null, null, null, null];
const arr7 = [undefined, undefined, undefined, undefined, undefined];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
console.log(arr7);

// => https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
// Array 생성자에 제공한 유일한 매개변수가 0에서 2^32-1 이하의 정수인 경우, length 속성이 해당 값인 새로운 JavaScript 배열을 생성합니다.
// (참고: 이렇게 생성한 배열은 arrayLength 만큼의 빈 슬롯을 가지는 것으로, 실제 undefined를 채우는 것이 아닙니다.)