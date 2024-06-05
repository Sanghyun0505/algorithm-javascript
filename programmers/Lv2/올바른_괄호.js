function solution(s) {
  let sList = [...s];
  let stack = [];

  if (s.length % 2 == 1 && s[0] === ")") {
    return false;
  }

  let stackIndex = 1;
  for (let i = 0; i < sList.length; i++) {
    stack.push(sList[i]);

    if (stack.length >= 2) {
      if (stack[stackIndex - 1] === "(" && stack[stackIndex] === ")") {
        stack.splice(stackIndex - 1, 2);
      }

      stackIndex = stack.length - 1;
    }
  }

  return stack[0] === "(" && stack[1] === ")";
}
