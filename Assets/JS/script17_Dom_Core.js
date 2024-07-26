console.log("conectado ok!")

let likebtnUno =  document.querySelector("#likebtn1")
let num_like1 =  document.querySelector("#num_like1")

let likebtnDos =  document.querySelector("#likebtn2")
let num_like2 =  document.querySelector("#num_like2")

let likebtnTres =  document.querySelector("#likebtn3")
let num_like3 =  document.querySelector("#num_like3")


likebtn1.addEventListener("click", function(evento){
    num_like1.innerText = (parseInt(num_like1.innerText) +1) + "like(s)";
})

likebtn2.addEventListener("click", function(evento){
    num_like2.innerText = (parseInt(num_like2.innerText) +1) + "like(s)";
})

likebtn3.addEventListener("click", function(evento){
    num_like3.innerText = (parseInt(num_like3.innerText) +1) +"like(s)";
})