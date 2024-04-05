
let a = setInterval(()=>{
   let time = new Date();
//    console.log(time.toTimeString());
   console.log(time.toLocaleTimeString());
},1000)

setTimeout(() => {
    clearInterval(a);
}, 5000);