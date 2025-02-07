class Solution {
    int n;
    int m;
    
    int[][] dir = {{0,1}, {0,-1}, {1,0}, {-1,0}};
    public int orangesRotting(int[][] mat) {
        n = mat.length;
        m = mat[0].length;
        int fresh_oranges = 0;
        int time = 0;
        
        Queue<int[]> que = new LinkedList<>();
        
        for(int i=0; i<n ; i++){
            for (int j = 0; j<m; j++){
                if(mat[i][j] == 1) fresh_oranges++;
                else if(mat[i][j] == 2) {
                    que.offer(new int[] {i,j});
                }
            }
        }
        
        if(fresh_oranges == 0) return 0;
        
        while(!que.isEmpty()){
            int unit = que.size();
            boolean rotted = false;
            
            for(int k = 0; k < unit; k++){
            int[] cell = que.poll();
            int i = cell[0];
            int j = cell[1];
           
              for(int[] d: dir){
                  int ni = i + d[0];
                  int nj = j+ d[1];
                  
                  if(ni>=0 && ni < n && nj >= 0 && nj<m && mat[ni][nj] == 1){
                      mat[ni][nj] = 2;
                      fresh_oranges-- ;
                      que.offer(new int[] {ni, nj});
                      rotted = true;
                  }
               }
            }
            
            if(rotted) time++;
        }
        
        return fresh_oranges == 0 ? time : -1;
    }
}