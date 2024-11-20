function solution(numbers, target) {
  var answer = 0;

  const dfs = (number, calcCount) => {
    if (numbers.length === calcCount) {
      if (number === target) {
        answer++;
      }

      return;
    }

    dfs(number + numbers[calcCount], calcCount + 1);
    dfs(number - numbers[calcCount], calcCount + 1);
  };

  dfs(numbers[0], 1, target);
  dfs(-numbers[0], 1, target);

  return answer;
}
