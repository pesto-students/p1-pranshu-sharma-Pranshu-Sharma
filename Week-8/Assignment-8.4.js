// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n -1 (inclusive).
// The edges in the graph are represented as a 2D integer array edges,
// where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi.
// Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid
// path from source to destination, or false otherwise.

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

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
    this.adjacencyList[w].push(v);
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

  isReachable(s, d) {
    if (s == d) {
      console.log(true);
      return true;
    }

    var visited = new Array(this.noOfVertices).fill(false);

    var queue = new Queue();

    visited[s] = true;
    queue.enqueue(s);

    while (!queue.isEmpty) {
      s = queue.dequeue();

      for (var i = 0; i < this.adjacencyList[s].length; i++) {
        if (this.adjacencyList[s][i] == d) {
          console.log(true);
          return true;
        }

        if (!visited[this.adjacencyList[s][i]]) {
          visited[this.adjacencyList[s][i]] = true;
          queue.enqueue(this.adjacencyList[s][i]);
        }
      }
    }

    console.log(false);
    return false;
  }

}

var g = new Graph(7);

// adding edges
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(3, 5);
g.addEdge(5, 4);
g.addEdge(4, 3);
g.addEdge(4, 6);
g.addEdge(5, 6);

g.printGraph();

g.isReachable(3, 6);
