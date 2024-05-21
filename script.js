var over=document.querySelector(".over")
var box=document.querySelector(".box")
var add=document.getElementById("popup")

add.addEventListener("click", function(){
    over.style.display="block"
    box.style.display="block"

})

var can=document.getElementById("can")
can.addEventListener("click",function(event){
    event.preventDefault()
    over.style.display="none"
   box.style.display="none"
   
})
var ov=document.querySelector(".container")
var book=document.getElementById("addbook")
var in1=document.getElementById("input1")
var in2=document.getElementById("input2")
var in3=document.getElementById("input3")

book.addEventListener("click",function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${in1.value}</h2>
    <h5>${in2.value}</h5>
    <p>${in3.value}</p>
  <button id="b" onclick="deletebook(event)">Delete</button>`
    ov.append(div)
    over.style.display="none"
    box.style.display="none"
  
})

function deletebook(event){
   event.target.parentElement.remove()
}

