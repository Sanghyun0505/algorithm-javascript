/** 우박수열 구하기 */
function getHailSequence(k) {
  const array = [k];

  while (k !== 1) {
    if (k % 2 === 0) {
      k = k / 2;
    } else {
      k = 3 * k + 1;
    }

    array.push(k);
  }

  return array;
}

/** 정적분 구하기 */
function getDefiniteIntegral(ranges, size) {
  return ranges.map(([a, b]) => [a, size - 1 + b]);
}

/** 각 구역의 넓이들 구하기 */
function getSectionalAreas(hailSequence) {
  const array = [];

  for (let i = 0; i < hailSequence.length - 1; i++) {
    array.push((hailSequence[i] + hailSequence[i + 1]) / 2);
  }

  return array;
}

/** 구역의 넓이를 기반으로 정적분을 사용해 누적합 구하기  */
function getAccumulatedBetweenSections(definiteIntergral, secionalAreas) {
  return definiteIntergral.map(([a, b]) => {
    let sum = 0;

    if (a === b) {
      return 0.0;
    }

    if (a > b) {
      return -1.0;
    }

    for (let i = a; i < b; i++) {
      sum += secionalAreas[i];
    }

    return sum;
  });
}

function solution(k, ranges) {
  var answer = [];

  const hailSequence = getHailSequence(k);
  const definiteIntergral = getDefiniteIntegral(ranges, hailSequence.length);
  const secionalAreas = getSectionalAreas(hailSequence);
  answer = getAccumulatedBetweenSections(definiteIntergral, secionalAreas);

  return answer;
}
