var maxArea = function (height) {
  if (!height || height <= 0) return 0;
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0; //存储我们的最大值
  while (left < right) {
    const area = Math.abs(right - left) * Math.min(height[left], height[right]);
    if (area > maxArea) {
      maxArea = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
