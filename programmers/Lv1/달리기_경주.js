function solution(players, callings) {
  var answer = [];

  let playerName = {};
  let playerNumber = {};

  players.map((player, idx) => (playerName[player] = idx)); // { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }
  players.map((player, idx) => (playerNumber[idx] = player)); // { '0': 'mumu', '1': 'soe', '2': 'poe', '3': 'kai', '4': 'mine' }

  callings.map((calling) => {
    let temp1 = playerNumber[playerName[calling]];
    playerNumber[playerName[calling]] = playerNumber[playerName[calling] - 1];
    playerNumber[playerName[calling] - 1] = temp1;

    let temp2 = playerName[calling];
    playerName[calling] -= 1;
    playerName[playerNumber[temp2]] += 1;
  });

  // values 값 기준 key 오름차순 정렬
  answer = Object.entries(playerName)
    .sort((a, b) => a[1] - b[1])
    .map((item) => item[0]);

  return answer;
}
