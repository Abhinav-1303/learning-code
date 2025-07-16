var a =12
if(a<0)
{
    document.writeln("Number is Negative")
}
else if(a > 0)
{
    document.writeln("Positive Number")
}
else
{
    document.writeln("Zero")
}

document.writeln("<br><br>")

var b = "A"
switch(b)
{
    case "A":
        document.writeln("Apple")
        break
    case "B":
        document.writeln("Bat")
        break
    case "C":
        document.writeln("Cat")
        break
    default:
        document.writeln("Invalid")
}
document.writeln("<br><br>")

for(var i=1; i<=5; i++)
{
    document.writeln("Hello" + "<br>")
    document.writeln(i + "<br>")
}

document.writeln("<br><br>")
var a = 1
while(a <= 5)
{
    document.writeln("World" + "<br>")
    a++
}

document.writeln("<br>")
var k = 10
while(k >= 1)
{
    document.writeln(k + "<br>")
    k--
}

document.writeln("<br><br>")
var s = 1
do
{
    document.writeln("Heyy" + "<br>")
    s++
}
while(s<=8)