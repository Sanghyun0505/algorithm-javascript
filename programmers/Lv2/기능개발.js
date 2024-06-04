function solution(progresses, speeds) {
  var answer = [];
  let durationRequired = [];

  progresses.map((item, idx) => {
    endCount = 0;

    while (item < 100) {
      item += speeds[idx];
      endCount++;
    }

    durationRequired.push(endCount);
  });

  let next = 1;
  for (let i = 0; i < durationRequired.length; i += next) {
    let count = 1;

    for (let j = i + 1; j <= durationRequired.length; j++) {
      if (durationRequired[i] >= durationRequired[j]) {
        count++;
      } else {
        answer.push(count);
        next = count;
        count = 1;
        break;
      }
    }
  }

  return answer;
}
