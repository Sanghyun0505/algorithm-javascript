/** graph 객체, 연결된 노드를 포함하고 있음 */
const graph = {
  A: ["B", "C", "D"],
  B: ["A", "E"],
  C: ["A"],
  D: ["A", "F"],
  E: ["B"],
  F: ["D"],
};

/** 노드를 방문기록을 담고 있는 visited 배열 */
const visited = {};
Object.keys(graph).map((key) => (visited[key] = false)); // { A: false, B: false, C: false, D: false, E: false, F: false }

/** dfs 구현: graph, 방문할 node, 방문기록 visited 객체가 필요함 */
function dfs(graph, node, visited) {
  /** dfs함수가 실행되면 방문한 node를 true로 설정 */
  visited[node] = true;

  /** 방문한 노드 출력 */
  console.log(node);

  /** 방문한 노드의 연결된 자식노드를 탐색 */
  graph[node].forEach((neighbor) => {
    /** 자식 노드를 방문한 적이 없다면 dfs 재귀 호출로 방문하여 그 다음 자식노드를 탐색 */
    if (!visited[neighbor]) {
      dfs(graph, neighbor, visited);
    }
  });
}

/** 루트 노드인 A부터 탐색 */
dfs(graph, "A", visited);
