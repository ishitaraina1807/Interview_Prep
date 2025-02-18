class Solution {
    boolean isPalindrome(String s) {
       int left = 0;
       int right = s.length()- 1;
       
       while(left<= right){
           if(s.charAt(left) != s.charAt(right)) return false;
           else{
               left ++;
               right --;
           }
       }
       return true;
    }
};