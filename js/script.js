// var btn =document.getElementById('btn')
// // console.log(btn)
// btn.addEventListener("click",function(){
//     btn.classList.toggle("buttonAdded")
// })
// function randomColor() {
//     var red = Math.ceil(Math.random() * 255)
//     var green = Math.ceil(Math.random() * 255)
//     var blue = Math.ceil(Math.random() * 255)
//     return (`rgb(${red},${green},${blue})`)
// }
var container = document.querySelector('.container')
// container.addEventListener("click", () => {
//     container.style.backgroundColor = randomColor()
// })
function showMenu(){
    ul.classList.toggle("bigMenu")   
}
var svg =document.querySelector('svg');
var ul = document.querySelector('ul')
svg.addEventListener("click",showMenu)


container.addEventListener("mouseenter",()=>{
    console.log("Mouse Entered")
})
container.addEventListener("mouseleave",()=>{
    console.log("Mouse left")
})
container.addEventListener("mousemove",(e)=>{
    console.log(e.clientX,e.clientY)
})
container.addEventListener("mouseup",()=>{
    console.log("UP")
})
container.addEventListener("mousedown",()=>{
    console.log("Down")
})
document.body.addEventListener('keyup',(e)=>{
    console.log("up",e.code)
})
document.body.addEventListener('keydown',(e)=>{
    console.log("down",e.code)
})