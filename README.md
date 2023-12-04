[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12685390&assignment_repo_type=AssignmentRepo)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code; you can base yours on test code from other
exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.



### Answer
The implementation has a worst-case complexity of O(V+E), where V is the number of vertices and E is the number of edges. 


1. Graph constructor and addEdge are time complexity of constant time count as O(1)

2. The isCyclicUtil function loops each row's siblings to judge if the edge visited or not. In the worst case, each edge is visited for once. So the worst time complexity is O(E), and E is the number of edges of the vertex. 

3. The isocyclic method traverses each vertex and calls isCyclicUtil to check if the vertex has been visited previously. The worst time complexity of O(V+E), and V is the number of vertices in the graph.

Therefore, the overall time complexity is O(V+E).
