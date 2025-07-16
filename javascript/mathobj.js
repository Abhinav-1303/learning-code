document.writeln(Math.sqrt(16) + "<br>")
document.writeln(Math.abs(-12) + "<br>")
document.writeln(Math.min(16, 13, 22, 12, 9) + "<br>")
document.writeln(Math.max(16, 4, 22, 13, 24) + "<br>")
document.writeln(Math.pow(3, 4) + "<br>")

var a = [12.8, 14.7, 18.2, 6, 7, 4]
document.writeln(Math.min(...a) + "<br>") //for finding in list

document.writeln(Math.floor(2.8) + "<br>") 
document.writeln((a.map(Math.floor)) + "<br>") //a.map is used to apply function to each elemnt in list


document.writeln(Math.ceil(7.2) + "<br>")

var b = [13, 14.2, 17.3, 19.1, 12.5, 13.7, 5.8, 4.5]
document.writeln(b.map(Math.ceil) + "<br>")

document.writeln(Math.round(4.4) + "<br>")
document.writeln(b.map(Math.round) + "<br>")

document.writeln(Math.random() + "<br>")
var j = Math.random()
document.writeln(Math.round(j * 10) + "<br>") //print random number between 0 and 10
document.writeln(Math.round(j*100) + "<br>") // between 10 and 100
