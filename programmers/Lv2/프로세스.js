function solution(priorities, location) {
  var answer = 0;

  let alphabet = [];

  let processQueue = [];
  let alphabetQueue = [];

  priorities.map((_, idx) => alphabet.push(String.fromCharCode(65 + idx)));

  let processLocation = priorities[location];
  let alphabetLocation = alphabet[location];

  let maxProcess = Math.max(...priorities);

  while ([...new Set(priorities)].length > 1) {
    if (priorities[1] !== undefined) {
      if (maxProcess !== priorities[0]) {
        priorities.push(priorities[0]);
        priorities.shift();

        alphabet.push(alphabet[0]);
        alphabet.shift();
      }

      if (maxProcess === priorities[0]) {
        processQueue.push(maxProcess);
        priorities.shift();

        maxProcess = Math.max(...priorities);

        alphabetQueue.push(alphabet[0]);
        alphabet.shift();
      }
    }
  }

  const processArray = [...processQueue, ...priorities];
  const alphabetArray = [...alphabetQueue, ...alphabet];

  for (let i = 0; i < processArray.length; i++) {
    if (
      processArray[i] === processLocation &&
      alphabetArray[i] === alphabetLocation
    ) {
      answer = i;
      break;
    }
  }

  return answer + 1;
}
