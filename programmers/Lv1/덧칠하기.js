function solution(n, m, section) {
  var answer = 0;

  const paintArea = {};

  Array.from({ length: n }).forEach(
    (_, idx) => (paintArea[idx + 1] = !section?.includes(idx + 1))
  );

  while (section.length > 0) {
    const area = section.shift();

    for (let i = area; i < area + m; i++) {
      if (!paintArea[i]) {
        paintArea[i] = true;
      }

      const findIndex = section.indexOf(i);
      if (findIndex !== -1) {
        section.splice(findIndex, 1);
      }
    }

    answer++;
  }

  return answer;
}
