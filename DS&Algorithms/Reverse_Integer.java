class Solution {
    public int reverse(int x) {
        int res = 0;
        boolean isNeg = x < 0;
        String strX = String.valueOf(Math.abs(x));
        StringBuilder sb = new StringBuilder(strX).reverse();

        res = Integer.parseInt(sb.toString());
        return isNeg ? -res : res;
    }
}