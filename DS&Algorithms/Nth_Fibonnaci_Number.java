class Solution {
    public int nthFibonacci(int n) {
        if (n == 0) return 0;
        if(n==1) return 1;
        int fib = nthFibonacci(n-1) + nthFibonacci(n-2);
        return fib;
    }
}