function solution(arr) {
  var answer = [];

  next = 1;
  for (let i = 0; i < arr.length; i += next) {
    answer.push(arr[i]);

    let count = 1;
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      } else {
        break;
      }
    }

    next = count;
  }

  return answer;
}
