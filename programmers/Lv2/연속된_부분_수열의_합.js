function solution(sequence, k) {
  var answer = [];

  let start = 0;
  let end = 0;

  let sum = 0;
  let min = Infinity;

  // 투 포인터 알고리즘
  while (end < sequence.length) {
    sum += sequence[end];

    while (sum > k) {
      sum -= sequence[start];
      start++;
    }

    if (sum === k && end - start < min) {
      min = end - start;
      answer = [start, end];
    }

    end++;
  }

  return answer;
}
