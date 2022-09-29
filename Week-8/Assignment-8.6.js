// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible
// paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i
// (i.e.,there is a directed edge from node i to node graph[i][j]).

var allPathsArray = [];
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjacencyList = [];
    this.initAdjList();
  }

  initAdjList() {
    this.adjacencyList = new Array(this.noOfVertices);
    for (let i = 0; i < this.noOfVertices; i++) {
      this.adjacencyList[i] = [];
    }
  }

  addVertex(v) {
    this.adjacencyList.set(v, []);
  }

  addEdge(v, w) {
    this.adjacencyList[v].push(w);
  }

  printGraph() {
    var get_keys = this.adjacencyList.keys();
    for (var i of get_keys) {
      var get_values = this.adjacencyList[i];
      var conc = "";
      for (var j of get_values) conc += j + " ";
      console.log(i + " -> " + conc);
    }
  }

  getAllPaths(s, d) {
    let v = this.noOfVertices;
    let isVisited = new Array(v);
    for (let i = 0; i < v; i++) {
      isVisited[i] = false;
    }
    let pathList = [];
    pathList.push(s);
    this.getAllPathsUtil(s, d, isVisited, pathList);
    console.log(allPathsArray);
  }

  getAllPathsUtil(u, d, isVisited, localPathList) {
    if (u == d) {
      allPathsArray.push([...localPathList]);
      return;
    }

    isVisited[u] = true;

    for (let i = 0; i < this.adjacencyList[u].length; i++) {
      if (!isVisited[this.adjacencyList[u][i]]) {
        localPathList.push(this.adjacencyList[u][i]);
        this.getAllPathsUtil(
          this.adjacencyList[u][i],
          d,
          isVisited,
          localPathList
        );
        localPathList.splice(
          localPathList.indexOf(this.adjacencyList[u][i]),
          1
        );
      }
    }

    isVisited[u] = false;
  }
}

var g = new Graph(5);

g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(0, 4);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 3);
g.addEdge(3, 4);

g.printGraph();

g.getAllPaths(0, 4);
