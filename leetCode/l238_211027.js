// 238. Product of Array Except Self(Medium)
// https://leetcode.com/problems/product-of-array-except-self

const productExceptSelf = nums => {
  const zero = nums.filter(e => !e).length;
  const prod = nums.reduce((acc, curr) => (!curr ? acc : acc * curr), 1);
  return nums.map(el => (el ? (zero ? 0 : prod / el) : zero - 1 ? 0 : prod));
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
