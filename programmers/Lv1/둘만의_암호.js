function solution(s, skip, index) {
  var answer = [];
  const alphabet = [];

  Array.from({ length: 26 }).map((_, idx) => {
    let ascii = String.fromCharCode(idx + 97);
    !skip.includes(ascii) && alphabet.push(ascii);
  });

  [...s].map((item) => {
    alphabet.filter((item2, idx) => {
      item === item2 && answer.push(alphabet[(idx + index) % alphabet.length]);
    });
  });

  return answer.join("");
}
