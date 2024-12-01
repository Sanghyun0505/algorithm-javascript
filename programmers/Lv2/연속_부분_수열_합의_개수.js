function solution(elements) {
  var answer = [];

  answer.push(...new Set(elements));

  for (let i = 2; i <= elements.length; i++) {
    if (i === elements.length) {
      answer.push(elements.reduce((acc, cur) => (acc += cur), 0));
    } else {
      for (let j = 0; j < elements.length; j++) {
        let sum = 0;

        for (let k = j; k < j + i; k++) {
          if (k >= elements.length) {
            sum += elements[k - elements.length];
          } else {
            sum += elements[k];
          }
        }

        answer.push(sum);
      }
    }
  }

  return [...new Set(answer)].length;
}
