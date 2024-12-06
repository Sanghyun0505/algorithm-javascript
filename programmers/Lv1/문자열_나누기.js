function solution(s) {
  var answer = [];

  var array = s.split("");

  const compareChars = (char, sCount, dCount, i) => {
    if (sCount === dCount) {
      answer.push(array.splice(0, sCount + dCount));
      return;
    }

    char === array[i] ? sCount++ : dCount++;
    compareChars(char, sCount, dCount, ++i);
  };

  while (array.length > 0) {
    if (array.length === 1) {
      answer.push(array.shift());
      break;
    }

    let sCount = 1;
    let dCount = 0;
    let i = 1;

    const char = array[0];
    compareChars(char, sCount, dCount, i);
  }

  return answer.length;
}
