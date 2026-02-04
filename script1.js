// const para=document.querySelector('.para')
// para.innertext="this is updated paragraph"
// console.log(para)

// const container=document.querySelector(".container")
// container.innerhtml="<h1>this is a heading</h1>"
// console.log(container)


// const click=document.querySelector("#click");
// btn.classList.add("click")

// const btn=document.querySelector("#stop");
// btn.classList.add("stop")

// function print(){
//     console.log("Hello you have clicked the button")

// }
// click.addEventListener('click',print)
// stop.addeventlistener('click',()=>{
//     console.log("stop button clicked!!")

// click.removeEventListener('click',message)
// })
// click.addeventlistener('mouseover,print')
// click,addeventlistener('keydown',print)
// click.addeventlistener('keyup',print)

// const form=document.querySelector('form')
// form.addeventlistener('submit',(event)=>{
//     console.log("form submitted")
// })
// div.addeventlistener('click',()=>{console.log("clicked the div")},false)
// div2.addeventlistener('click',()=>{console.log("clicked the outer div")},true)
// btn.addeventlistener('click',())

// console.log(a)
// console.log(b)

// a=678
// b==879
// console.log(a)
// console.log(b)
// function print(){
//     let c=63
//     console.log(c)
//     console.log("inside function")
// }
// print()

// function first(){
//     second()
    
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()

// function infinite(){
//     infinite()
// }
// infinite()
// let total=100
// function calculate(){
//     console.log(total)

// }
// console.log("first element")

// settimeout(()=>{console.log}("line after 2sec"))
// console.log("login to dashboard")
// settimeout(()=>{
//     alert("after 3 sec")
// },3000)
// const timerid=setinterval(()=>{console.log("after 3 sec")
// }1000)


// settimeout(()=>{
//     clearInterval(timeid)
// },10*1000)

// settimeout(()=>{
//     clearInterval(timerid)

// })

// let count=1
// const timerid=setinterval(()=>{
//     if(count===10)clearInterval(timerid)
//         console.log(count)
//             count+=1
// },1000)

// const timerId=setInterval(()=>{
//     console.log("after 3 sec")
// },10)
// console.log(timerId)
// settimeout(()=>{
//     clearInterval(timerId)
// },10*1000);
    
// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const lst=document.querySelector(".lst")


// console.log("starting homework..")
// set timeout(()=>{
//     console.log("homework done!");
//     console.log("starting dinner");
// set timeout(()=>{
//     console.log("dinner done");
//     console.log("getting ready to go out");
// set timeout(()=>{
//     console.log("go to playground");
// },1000);    
// },1500);   
// }2000);

// function funishhomework(callback){
//     console.log("starting homework")
//     set timeout(()=>{
//         console.log("homework done!");
//         callback()
//     },2000);
// }
// function eatdinner(callback){
//     console.log("starting dinner..");
//     set timeout(()=>{
//         console.log("dinner done!");
//         callback();
//     },1500);
// }
// function goToPlayground(){
//     console.log("going to the playground")
// }
// finishhomework(()=>{
//     eatdinner(()=>{
//         goToPlayground();
//     });
// });

// const p=new promise((res,rej)=>{
//     let done=false
//     settimeout(()=>{
//         if (done){
//             res("work is done!!")
//         }else{
//             rej("work is not done")
//         }
//     },5000)
// })
// console.log(p)
// p.then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("finally")
// })
// console.log(p)

function dohomework(){
    const p=new Promise((res,rej)=>{
        settimeout(()=>{
            let done=true
            if(done){
                console.log("homework is done")
                res("homework complete")
            }else{
            
                rej("homework not complete")
            }
        },2000)
    
 
    })
    return p
}
    
function eatdinner(){
    const p=new Promise((res,rej)=>{
        settimeout(()=>{
            let done=true
            if(done){
                console.log("dinner is done")
                res("dinner complete")
            }else{
            
                rej("dinner not complete")
            }
        },2000)
        
    })
    return p
}

function gotoplayground(){
    const p=new Promise((res,rej)=>{
        settimeout(()=>{
            let done=true
            if(done){
                console.log("went to playground")
                res("playground time")
            }else{
            
                rej("not allowed")
            }
        },2000)
        
    })
    return p
}
dohomework().then((msg)=>{
    console.log(msg)
    return eatdinner()
}).then((msg)=>{
    console.log(msg)
    return gotoplayground()
}).then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("go to sleep")
})

