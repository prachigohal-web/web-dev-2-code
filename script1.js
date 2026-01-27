const para=document.querySelector('.para')
para.innertext="this is updated paragraph"
console.log(para)

const container=document.querySelector(".container")
container.innerhtml="<h1>this is a heading</h1>"
console.log(container)


const click=document.querySelector("#click");
btn.classList.add("click")

const btn=document.querySelector("#stop");
btn.classList.add("stop")

function print(){
    console.log("Hello you have clicked the button")

}
click.addEventListener('click',print)
stop.addeventlistener('click',()=>{
    console.log("stop button clicked!!")

click.removeEventListener('click',message)
})
click.addeventlistener('mouseover,print')
click,addeventlistener('keydown',print)
click.addeventlistener('keyup',print)

const form=document.querySelector('form')
form.addeventlistener('submit',(event)=>{
    console.log("form submitted")
})
div.addeventlistener('click',()=>{console.log("clicked the div")},false)
div2.addeventlistener('click',()=>{console.log("clicked the outer div")},true)
btn.addeventlistener('click',())

console.log(a)
console.log(b)

a=678
b==879
console.log(a)
console.log(b)
function print(){
    let c=63
    console.log(c)
    console.log("inside function")
}
print()

function first(){
    second()
    
}
function second(){
    third()
}
function third(){
    console.trace()
}
first()

function infinite(){
    infinite()
}
infinite()
let total=100
function calculate(){
    console.log(total)

}
console.log("first element")
settimeout(()=>{console.log}("line after 2sec"))
console.log("login to dashboard")
