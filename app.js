// let apiRes = '{"fact":"In one stride, a cheetah can cover 23 to 26 feet (7 to 8 meters).","length":65}';

// const { response } = require("express");

// const { response } = require("express");

// const { response } = require("express");

// let formatted = JSON.parse(apiRes);
// console.log(formatted.fact);

// let obj = {
//     name : "Anmisha",
//     age : 20
// };
// let strObj =(JSON.stringify(obj))
// console.log(strObj)

//first api request
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     // console.log(response)
//     return response.json()
// })
// .then((data)=>{
//     console.log("data1:",data.fact)
//     return fetch(url)
// })
// .then((response)=>{
//     return response.json()
// })
// .then((data2)=>{
//     console.log("data2:",data2.fact)
// })
// .catch((error)=>{
//     console.log(error)
// })

//api calls using async & await
// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//     catch(e){
//         console.log(e);
//     }

// }

//axios
let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact =await getFacts();
    // console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})



let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        console.log(error);
        return "NO FACT FOUND"
    }
}

