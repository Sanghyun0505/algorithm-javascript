function solution(storey) {
  var answer = 0;

  let array = [0, ...storey.toString()];

  array.reverse().map((item, idx) => {
    if (Number(item) >= 5) {
      if (Number(array[idx + 1]) <= 4 && Number(item) === 5) {
        answer += Number(item);
      } else {
        array[idx + 1] = Number(array[idx + 1]) + 1;
        answer += 10 - Number(item);
        array[idx] = 0;
      }
    } else {
      answer += Number(item);
    }
  });

  return answer;
}
