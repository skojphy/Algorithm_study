const nums = [2, 0, 2, 1, 1, 0];

const sortColors = nums => {
  const arr = [];
  nums.forEach(el => {
    if (el === 0) {
      arr.push(0);
    }
  });
  nums.forEach(el => {
    if (el === 1) {
      arr.push(1);
    }
  });
  nums.forEach(el => {
    if (el === 2) {
      arr.push(2);
    }
  });
  arr.forEach((el, i) => {
    nums[i] = el;
    console.log(i, nums[i], el);
  });
};

sortColors(nums);

console.log(nums);
