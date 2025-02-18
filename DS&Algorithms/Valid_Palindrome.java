class Solution {
    public boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        int i = 0;
        return check(i,s);
    }
    public boolean check(int i, String s){
        if (i >= s.length() / 2) return true;

        if (s.charAt(i) != s.charAt(s.length() - i - 1)) return false;

        return check(i+1, s);
    }
}