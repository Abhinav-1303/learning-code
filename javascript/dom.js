var a = document.getElementById("ex");
a.innerHTML = "Hello";
a.style.color = "blue"

var b = document.getElementsByClassName("first")
b[0].innerHTML = "Good" // index is given because the one with same class name will be selected by order like 1st tag will have index value 0
b[1].innerHTML = "Morning"
b[2].innerHTML = "Sam"
b[2].style.color = "Red"

var c = document.getElementsByTagName("h3")
c[0].innerHTML = "Mike" 

var d = document.getElementsByName("greet")[0]
var e = document.getElementById("emp") // id for each tags should be unique not like getting elements like class


function greetings()
{
    e.innerHTML = "Hello " + d.value  //d.value willl be the text entered in the box while clicking
}

var f = document.querySelector("#ex") //css selector for modifying and accessing id elements
f.innerHTML = "Hello World"
f.style.color = "red"

var g = document.querySelectorAll(".first")
g[2].style.color = "Blue"
g[2].innerHTML = "Sam Changed To Luke"

var i = document.createElement("h6")

function create()
{
    i.innerHTML = ("Welcome to Game")
    document.body.appendChild(i)
}
function remove()
{
    i.remove()
}

btn.addEventListener("click", changecolor)
i.addEventListener("mouseover", changebgcolor)

function changecolor()
{
    i.style.color = "Red"
}
function changebgcolor()
{
    i.style.backgroundColor = "Black"
}