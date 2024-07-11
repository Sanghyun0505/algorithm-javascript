function solution(new_id) {
  // 1단계, 2단계, 3단계
  var answer = new_id
    .toLowerCase()
    .replaceAll(/[~!@#$%^&*()=+\[\]{}:?<>,/]/g, "")
    .replaceAll(/\.{2,}/g, ".");

  // 4단계
  if (answer[0] === ".") {
    answer = answer.slice(1, answer.length);
  }

  if (answer[answer.length - 1] === ".") {
    answer = answer.slice(0, answer.length - 1);
  }

  // 5단계
  if (answer.length === 0) {
    answer = "a";
  }

  // 6단계
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);

    if (answer[answer.length - 1] === ".") {
      answer = answer.slice(0, answer.length - 1);
    }
  }

  // 7단계
  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }

  return answer;
}
