

public class DataTypes {
    public static void main(String[] args){

        // Primitive Data Types
        byte age = 12;// limit -128 - 127
        int Phone_No = 1234567890;
        long Id = 1234567891234L; // to store more numbers
        float CGPA = 7.5F;
        char letter = 'a';// Can store only one character and uses 2 bytes
        char letter2 = '@';
        boolean isAdult = false;

        // Non-Primitive Data Type (Has their own functions like .length())
        String Name = "Andrew"; // can store unlimited value unless memory runs out

        System.out.println("Name: " +Name);
        System.err.println("age: " +age);
        System.out.println("Number: " +Phone_No);
        System.out.println("Id:" +Id);
        System.out.println("CGPA: " +CGPA);
        System.out.println("Letter 1: " +letter);
        System.out.println("Letter 2: " +letter2);
        System.out.println("Is above 18: " +isAdult);
        System.err.println("Length of strings in name: " +Name.length());
    }
    
}
