function solution(survey, choices) {
  var answer = "";

  const mbti = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const types = ["RT", "CF", "JM", "AN"];

  const score = [3, 2, 1, 0, 1, 2, 3];

  choices.forEach((choice, idx) => {
    const [a, b] = survey[idx].split("");
    mbti[choice > 4 ? b : a] += score[choice - 1];
  });

  answer = types.map(([a, b]) => (mbti[a] >= mbti[b] ? a : b)).join("");

  return answer;
}
