function solution(prices) {
  var answer = [];

  let cnt = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j <= prices.length; j++) {
      if (prices[i] > prices[j]) {
        cnt = j;
        break;
      }
    }

    if (cnt === 0) {
      answer.push(prices.length - (i + 1));
    } else {
      answer.push(cnt - i);
      cnt = 0;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
