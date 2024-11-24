function solution(n, computers) {
  var answer = 0;

  const graph = {};
  const visited = {};

  computers.forEach((computer, idx) => {
    visited[idx] = false;

    computer.forEach((node, idx2) => {
      graph[idx] = graph[idx] || [];
      if (idx2 !== idx && node === 1) {
        graph[idx].push(idx2);
      }
    });
  });

  const dfs = (graph, node, visited) => {
    visited[node] = true;

    graph[node]?.forEach((neighbor) => {
      if (!visited[neighbor]) {
        dfs(graph, neighbor, visited);
      }
    });
  };

  while (Object.keys(graph).length > 0) {
    dfs(graph, Object.keys(graph)[0], visited);

    Object.keys(visited).forEach((key) => {
      if (visited[key]) {
        delete graph[key];
      }
    });

    answer++;
  }

  return answer;
}
