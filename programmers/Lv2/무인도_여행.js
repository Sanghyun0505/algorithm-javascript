/** 입력값(지도)을 2차원 배열로 만들어줌 */
function translateMapsToTwoDimensionalArray(maps) {
  const map = [];
  maps.forEach((item) => map.push(item.split("")));
  return map;
}

/** 지도를 기반으로 내 위치(현재노드)의 상하좌우 값들이 X가 아닌 것들만 자식노드로 담아 그래프 생성  */
function generateGraph(map) {
  const graph = {};

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] !== "X") {
        let nodeKey = `${i}-${j}`;

        graph[nodeKey] = graph[nodeKey] || [];

        if (map[i][j - 1] !== "X" && map[i][j - 1] !== undefined) {
          graph[nodeKey].push(`${i}-${j - 1}`);
        }

        if (map[i][j + 1] !== "X" && map[i][j + 1] !== undefined) {
          graph[nodeKey].push(`${i}-${j + 1}`);
        }

        if (
          i + 1 < map.length &&
          map[i + 1][j] !== "X" &&
          map[i + 1][j] !== undefined
        ) {
          graph[nodeKey].push(`${i + 1}-${j}`);
        }

        if (
          i - 1 >= 0 &&
          map[i - 1][j] !== "X" &&
          map[i - 1][j] !== undefined
        ) {
          graph[nodeKey].push(`${i - 1}-${j}`);
        }
      }
    }
  }

  return graph;
}

/** 노드 방문기록을 담고 있는 객체를 생성 */
function generateVisitedObject(graph) {
  let visited = {};
  Object.keys(graph).forEach((node) => (visited[node] = false));
  return visited;
}

function solution(maps) {
  var answer = [];

  const map = translateMapsToTwoDimensionalArray(maps);
  const graph = generateGraph(map);
  const visited = generateVisitedObject(graph);

  // 합 변수
  let sum;

  /** dfs 구현: 그래프, 현재 노드, 방문기록을 받음 */
  const dfs = (graph, node, visited) => {
    // 해당 노드를 방문했음을 기록
    visited[node] = true;

    // 노드를 위치값으로 표현해서 담고 있기에 split으로 x, y 나눔
    const [x, y] = node.split("-");

    // 지도의 x, y값이 X가 아니거나 특정 node가 자식노드를 가지고 있지 않을 땐 sum으로 더해줌
    if (map[x][y] !== "X" || graph[node].length === 0) {
      sum += Number(map[x][y]);
    }

    // 자식노드를 가지고 있을 땐 재귀로 자식노드 방문
    if (graph[node].length > 0) {
      graph[node].forEach((neighbor) => {
        // 근데 방문한적이 없는 자식노드만 방문해야함
        if (!visited[neighbor]) {
          dfs(graph, neighbor, visited);
        }
      });
    }
  };

  // 반복문을 돌리는 이유는 2번 예시를 보면 영역이 여러개 있는데 해당 영역들을 모두 탐색해야하기 때문
  while (Object.keys(visited).length > 0 && Object.keys(graph).length > 0) {
    sum = 0;

    dfs(graph, Object.keys(graph)[0], visited);

    // 방문했던 노드들은 graph, vistied 객체에서 제거함. => 다음 탐색 시, graph에 남은 노드들만 방문해서 처리하기 위함
    Object.keys(visited).forEach((key) => {
      if (visited[key]) {
        delete graph[key];
        delete visited[key];
      }
    });

    answer.push(sum);
  }

  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

// "X591X"
// "X1X5X"
// "X231X"
// "1XXX1"
// [1, 1, 27]

// 그래프
// {
//     '11' <- 부모노드: [ '21', '01' ], <- 자식 노드
//     '13': [ '23', '03' ],
//     '21': [ '22', '11' ],
//     '22': [ '21', '23' ],
//     '23': [ '22', '13' ],
//     '30': [],
//     '34': [],
//     '01': [ '02', '11' ],
//     '02': [ '01', '03' ],
//     '03': [ '02', '13' ]
//  }

// 2번 예시
// "55555XXXXX"
// "55X55XXXXX"
// "XXXXX11111"
// "XXXXX11X11"
// [9, 45]
