// console.log("task 1")

// for(let i=0; i<1000; i++)
//     console.log("Many other tasks", i)

// console.log("Task 3")
// console.log("task 1")

// setTimeout(()=> {
//     console.log("Task 2")
// }, 2000)

// console.log("Task 3",)


// let counter = 0;

// function incrementCounter(){
//     counter++
//     console.log("Counter", counter)
// }

// setInterval(incrementCounter, 1000)

// const myPromise = new Promise((resolve, reject) => {
//     if(true){
//         resolve("Success!")
//     } else {
//         reject("Error!")
//     }
// })

// myPromise.then((result) => {
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// function getUserData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const userData = {name: "Mirko", surname: "Popovski", age: "32"}
//             resolve(userData)},3000)
//         })
//     }

//     async function fetchUser(){
//         try{
//             const user = await getUserData()
//             console.log(user)
//         }catch(error){
//             console.log("Something went wrong!", error)
//         }
//     }

//     fetchUser()

// try{
//    console.log("code in try block")
// }catch(error){
//     console.log("code to hande the exception")
// }finally{
//     console.log("The code will be executed regardless of exceptions")
// }


// function delayedGreeting(name){
    

// setTimeout(() => {
//     console.log(name)
// },2000);
// }

// delayedGreeting("Filip")

// function complexActions(message){
//     setTimeout(() => {
//         console.log(message)
//     },0);
//     setTimeout(() => {
//         console.log("Action 1")
//     },2000)
//     setTimeout(() => {
//         console.log("Action 2")
//     },4000)
//     setTimeout(() => {
//         console.log("All actions completed")
//     },6000)
// }

// complexActions("message")
let broj1 = 5
let broj2 = 4

function multiply(num1,num2){
    return num1 * num2
}


function add(num1,num2){
    return num1 + num2
}

 function performOperations(num1, num2, operation){
    return operation (num1, num2)
 }

    console.log(performOperations(broj1, broj2, multiply))
    console.log(performOperations(broj1, broj2, add))