function solution(phone_number) {
  var answer = [...phone_number];

  Array.from({ length: phone_number.length - 4 }).map((item, idx) => {
    answer[idx] = "*";
  });

  return answer.join("");
}

console.log(solution("027778888"));
