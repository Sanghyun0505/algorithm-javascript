function solution(k, m, score) {
  var answer = 0;

  let list = [];
  let box = [];

  score.sort((a, b) => b - a);

  let i = 0;
  while (i < score.length && score.length - i >= m) {
    let sum = [];

    sum.push(...score.slice(i, i + m));

    let price = Math.min(...sum) * sum.length;

    if (!list.includes(price)) {
      list.push(price);
      box[list.indexOf(price)] = 1;
    } else {
      box[list.indexOf(price)] += 1;
    }

    i += m;
  }

  answer = list.reduce((prev, cur, idx) => (prev += cur * box[idx]), 0);

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
