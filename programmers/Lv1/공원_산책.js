function solution(park, routes) {
  var answer = [];

  let parkList = [];
  let startPoint = [];

  park.map((item, idx) => {
    let stringToArray = item.split("");

    if (item.includes("S")) {
      startPoint = [idx, stringToArray.findIndex((value) => value === "S")];
    }

    return parkList.push(stringToArray);
  });

  answer = [...startPoint];

  let isBreak = false;

  for (let i = 0; i < routes.length; i++) {
    let route = routes[i].split(" ");

    // 동
    if (
      route[0] === "E" &&
      startPoint[1] + Number(route[1]) < parkList[0].length &&
      startPoint[1] + Number(route[1]) >= 0
    ) {
      if (
        parkList[startPoint[0]][startPoint[1] + Number(route[1])] !== undefined
      ) {
        for (let j = 1; j <= Number(route[1]); j++) {
          if (parkList[startPoint[0]][startPoint[1] + j] !== "X") {
            answer[1] = startPoint[1] + j;
          } else {
            isBreak = true;
            break;
          }
        }
      }
    }

    // 서
    if (
      route[0] === "W" &&
      startPoint[1] - Number(route[1]) < parkList[0].length &&
      startPoint[1] - Number(route[1]) >= 0
    ) {
      if (
        parkList[startPoint[0]][startPoint[1] - Number(route[1])] !== undefined
      ) {
        for (let j = 1; j <= Number(route[1]); j++) {
          if (parkList[startPoint[0]][startPoint[1] - j] !== "X") {
            answer[1] = startPoint[1] - j;
          } else {
            isBreak = true;
            break;
          }
        }
      }
    }

    // 남
    if (
      route[0] === "S" &&
      startPoint[0] + Number(route[1]) < parkList[0].length &&
      startPoint[0] + Number(route[1]) >= 0
    ) {
      if (
        parkList[startPoint[0] + Number(route[1])][startPoint[1]] !== undefined
      ) {
        for (let j = 1; j <= Number(route[1]); j++) {
          if (parkList[startPoint[0] + j][startPoint[1]] !== "X") {
            answer[0] = startPoint[0] + j;
          } else {
            isBreak = true;
            break;
          }
        }
      }
    }

    // 북
    if (
      route[0] === "N" &&
      startPoint[0] - Number(route[1]) < parkList[0].length &&
      startPoint[0] - Number(route[1]) >= 0
    ) {
      if (
        parkList[startPoint[0] - Number(route[1])][startPoint[1]] !== undefined
      ) {
        for (let j = 1; j <= Number(route[1]); j++) {
          if (parkList[startPoint[0] - j][startPoint[1]] !== "X") {
            answer[0] = startPoint[0] - j;
          } else {
            isBreak = true;
            break;
          }
        }
      }
    }

    if (!isBreak) {
      startPoint = [...answer];
    } else {
      answer = [...startPoint];
      isBreak = false;
    }
  }

  return answer;
}
