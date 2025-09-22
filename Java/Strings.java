
//Strings are immutable we cannot change a string

public class Strings {
    public static void main(String[] args) {
        String name1 = "Jacob";
        String name2 = "David";
        System.out.println(name1 + name2);  // Concatenation
        System.out.println(name1 + " and " +name2);
        System.out.println(name1.charAt(1));  // gives a  of jacob
        System.out.println(name1.replace('a', 'b')); // prints jbcob
        System.out.println(name2.length());
        System.out.println((name2.substring(0,3)));  // prints dav
    }
    
}
