class Graph{
	constructor({graph}){
		this.V = graph.length;
		this.graph = graph;
	}
		
	addEdge(v, w){
		this.graph[v].push(w);
		this.graph[w].push(v);	 
	}

	isCyclicUtil(v, visited, parent){
		visited[v] = true;
        if(this.graph[v]) {
            for(let i = 0; i < this.graph[v].length; i++){
                const siblings = this.graph[v][i];
                if(!visited[siblings]){
                    if(this.isCyclicUtil(siblings, visited, v)){
                        return true;
                    }
                }
                else if(parent != siblings){
                    return true;
                }
            }
        }
		return false;
	}

	isCyclic(){
		let visited = new Array(this.V).fill(false);
		for(let i = 0; i < this.V; i++){
			if(!visited[i] && this.graph[i].length > 0 && this.isCyclicUtil(i, visited, -1)){
                return true;
			}
		}
		return false;
	}
}
function hasCycle(graph) {
    const newGraph = new Graph(graph)
    return newGraph.isCyclic();
}

// get source from here: https://www.geeksforgeeks.org/detect-cycle-undirected-graph/

