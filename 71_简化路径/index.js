var simplifyPath = function (path) {
  const stack = [];
  let paths = path.split("/");
  for (let index = 0; index < paths.length; index++) {
    const element = paths[index];
    if (element === "..") {
      stack.pop();
    } else if (element && element !== ".") {
      stack.push(element);
    }
  }
  return "/" + stack.join("/");
};
