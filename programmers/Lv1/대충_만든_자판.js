function solution(keymap, targets) {
  var answer = [];

  targets.forEach((target) => {
    let sum = 0;

    target.split("").forEach((alphabet) => {
      const arr = [];

      keymap.forEach((key) => {
        const keyIndex = key.split("").indexOf(alphabet) + 1;

        if (keyIndex !== 0) {
          arr.push(keyIndex);
        }
      });

      arr.sort((a, b) => a - b);

      sum += arr[0];
    });

    answer.push(isNaN(sum) ? -1 : sum);
  });

  return answer;
}
