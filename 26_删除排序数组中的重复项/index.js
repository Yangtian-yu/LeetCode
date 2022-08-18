var removeDuplicates = function (nums) {
  debugger;
  //双指针
  const len = nums.length;
  let slow = 0;
  for (let fast = 0; fast < len; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
};

const arr = [1, 1, 2, 2, 3, 3, 4, 5, 8, 8, 9, 9, 9, 9];
removeDuplicates(arr);
