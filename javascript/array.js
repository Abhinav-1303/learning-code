animals = ["Lion", "Tiger", "Elephant", "Girrafe"]
document.writeln(animals + "<br>")
document.writeln(animals[2]+ "<br>")

animals[1] = "Fox"  //replaces tiger with fox
document.writeln(animals + "<br>")
var x = animals.length
document.writeln(x +"<br>")
document.writeln(animals.length + "<br>")

document.writeln("<br>")

for(var i=0; i<x; i++)
{
    document.writeln(animals[i] + "<br>")
}

animals[4] = "Cat" //add cat to 4 th index 
document.writeln(animals + "<br>")

animals.push("Dog","cheetah", "Monkey") //push last to the list
document.writeln(animals + "<br>")

animals.shift() //remove 1st element of list
document.writeln(animals + "<br>")
animals.pop() //remove last element
document.writeln(animals + "<br>")
animals.splice(1, 1) // remove index 1 element
document.writeln(animals + "<br>")
animals.splice(2, 4) // remove index 2 to 4 elements
document.writeln(animals + "<br>")

animals.push("Cat", "Dog", "Monkey")
animals.sort()
document.writeln(animals + "<br>")

animals.length = 0 // empty the array
document.writeln(animals + "<br>")