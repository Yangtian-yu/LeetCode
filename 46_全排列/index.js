function backtrack(list, temp, nums) {
  //终止条件
  if (temp.length == nums.length) {
    return list.push([...temp]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) continue;
    temp.push(nums[i]);
    backtrack(list, temp, nums);
    temp.pop();
  }
}
var permute = function (nums) {
  let list = [];
  backtrack(list, [], nums);
  return list;
};
