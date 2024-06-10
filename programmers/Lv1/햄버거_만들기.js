function solution(ingredient) {
  var answer = 0;

  let stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      const stack_length = stack.length;
      if (
        stack[stack_length - 4] === 1 &&
        stack[stack_length - 3] === 2 &&
        stack[stack_length - 2] === 3 &&
        stack[stack_length - 1] === 1
      ) {
        answer++;
        stack.splice(stack_length - 4, 4);
      }
    }
  }

  return answer;
}
