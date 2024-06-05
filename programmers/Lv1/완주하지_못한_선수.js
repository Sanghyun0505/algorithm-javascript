function solution(participant, completion) {
  var answer = "";

  const marathon_runners = {};
  const name_array = [];
  const personnel_array = [];

  participant.map((item) => {
    if (marathon_runners[item] === undefined) {
      Object.assign(marathon_runners, { [item]: 1 });
    } else {
      marathon_runners[item] += 1;
    }
  });

  completion.map((item) => {
    marathon_runners[item] -= 1;
  });

  [...new Set([...participant])].map((item) => {
    name_array.push(item);
    personnel_array.push(marathon_runners[item]);
  });

  let max = 0;
  personnel_array.map((item, idx) => {
    if (item > max) {
      max = item;
      answer = name_array[idx];
    }
  });

  return answer;
}

console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
