// 그래프
const graph = [[1, 2, 3], [0, 4], [0], [0, 5], [1], [3]];

// graph 배열길이만큼 visited 배열 생성
const visited = {};
graph.forEach((_, idx) => (visited[idx] = false));

// queue 배열에 루트 노드 추가
const queue = [0];
// graph에 방문했음을 기록
visited[queue[0]] = true;

while (queue.length > 0) {
  // queue 맨 앞 값 추출 및 삭제
  const node = queue.shift();
  console.log(node);

  // 그래프에서 해당 노드의 자식노드값 참조
  graph[node]?.map((neighbor) => {
    // 방문하지 않은 자식노드만 queue에 추가
    // 그리고 노드를 방문했음을 기록
    if (!visited[neighbor]) {
      queue.push(neighbor);
      visited[neighbor] = true;
    }
  });
}
