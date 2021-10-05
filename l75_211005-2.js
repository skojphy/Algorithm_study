const nums = [2, 1, 1, 2, 0, 2, 1, 2, 1, 2];

const sortColors = nums => {
  const arr = new Array(nums.length).fill(1);
  let lt = 0;
  let rt = nums.length - 1;
  nums.forEach(el => {
    if (el === 0) {
      arr[lt] = 0;
      lt++;
    } else if (el === 2) {
      arr[rt] = 2;
      rt--;
    }
  });

  arr.forEach((el, i) => {
    nums[i] = el;
  });
};

sortColors(nums);

console.log(nums);
