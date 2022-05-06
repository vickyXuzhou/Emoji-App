let container = document.getElementById("emoji-container")
let myEmojis = ["👨‍💻", "⛷", "🍲"]
let firstButton = document.getElementById("first")
let uservalue = document.getElementById("text")
let secondbtn = document.getElementById("second")
let thirdbtn = document.getElementById("third")
let fourthbtn = document.getElementById("fourth")
function render(){
    container.innerHTML = ""
    console.log(container)
    let arraylist = []
    for(let i=0; i<myEmojis.length; i++){
        arraylist+=` <span> ${myEmojis[i]}</span>`
    }
    container.innerHTML = arraylist;
   
}
render()

firstButton.addEventListener("click", function(){
 if(uservalue.value){
    myEmojis.push(uservalue.value)
     render()
     uservalue.value = ""
 }
})
secondbtn.addEventListener("click", function(){
 if(uservalue.value){
    myEmojis.unshift(uservalue.value)
     render()
     uservalue.value = ""
 }
})
thirdbtn.addEventListener("click", function(){
       myEmojis.pop()
        render()
   })
fourthbtn.addEventListener("click", function(){
       myEmojis.shift()
        render()
   })