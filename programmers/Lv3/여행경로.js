function generateGraph(tickets) {
  const graph = {};

  tickets.forEach((ticket) => {
    graph[ticket[0]] = graph[ticket[0]] || [];
    graph[ticket[0]].push(ticket[1]);
  });

  Object.values(graph).forEach((value) => value.sort());

  return graph;
}

function solution(tickets) {
  var answer = [];

  const graph = generateGraph(tickets);

  /** dfs구현 */
  const dfs = (graph, node) => {
    while (graph[node]?.length > 0) {
      dfs(graph, graph[node].shift());
    }

    // 특정 노드의 모든 연결노드를 방문했다면 back tracking(역추적)으로 상위노드로 올라갈 때 노드 삽입
    answer.push(node);
  };

  dfs(graph, "ICN");

  // 역추적으로 값들이 반대로 들어있기에 reverse로 올바르게 뒤집어줌
  return answer.reverse();
}

// 그래프
// {
//     EZE: [ 'ADL', 'ANU', 'HBA', 'TIA' ],
//     AXA: [ 'AUA', 'EZE', 'TIA' ],
//     ICN: [ 'AXA', 'AXA' ],
//     ANU: [ 'AUA', 'EZE', 'ICN' ],
//     ADL: [ 'ANU', 'EZE', 'EZE' ],
//     TIA: [ 'ADL', 'AUA' ],
//     AUA: [ 'ADL', 'ANU', 'AXA' ]
//  }
