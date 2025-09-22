import java.util.Arrays;
public class Array{
    public static void main(String[] args) {
        int[] marks1 = new int[4];           // new keyword is used for non-primitive data types like string and array
        marks1[0] = 77;
        marks1[1] = 64;
        marks1[2] = 82;
        marks1[3] = 72;

        int[] marks2 = {71,89,91,87};       //  also can be written like this(usually written when we know the elements in the array)
        System.out.println(Arrays.toString(marks1));    //  prints the whole array
        Arrays.sort(marks2);                            //  sorts the array
        System.out.println(Arrays.toString(marks2));
        System.out.println(marks2[1]);                  //prints the 2nd index element from array after sorting
    
        int[][] FinalMarks = {{77,64,82,72}, {71,89,91,87}};  //2D Array
        System.out.println(FinalMarks[1][2]);  // prints 91

    
    }
}