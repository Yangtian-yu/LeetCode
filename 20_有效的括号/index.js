var isValid = function (s) {
  const arr = s.split("");
  if ([")", "}", "]"].includes(arr[0])) {
    return false;
  }
  const newArray = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    const q = element === "(" && newArray[0] === ")";
    const p = element === "[" && newArray[0] === "]";
    const z = element === "{" && newArray[0] === "}";
    if (q || p || z) {
      newArray.shift();
    } else {
      newArray.unshift(element);
    }
  }
  return !newArray.length;
};

var isValid1 = function (s) {
  const obj = { "(": ")", "[": "]", "{": "}" };
  const arr = [];
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element in obj) {
      arr.push(element);
    } else {
      if (element != obj[arr.pop()]) {
        return false;
      }
    }
  }
  return !arr.length;
};

let t = "{[]}";
console.log(isValid1(t));
