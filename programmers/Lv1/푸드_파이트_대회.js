function solution(food) {
  var answer = [];

  for (let i = 1; i < food.length; i++) {
    if (food[i] / 2 >= 1) {
      for (let j = 1; j <= food[i] / 2; j++) {
        answer.push(i);
      }
    }
  }

  answer.push(0);
  answer.push(...[...answer].sort((a, b) => b - a));
  answer.pop();

  return answer.join("");
}
