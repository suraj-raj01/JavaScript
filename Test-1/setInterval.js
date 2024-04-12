
let a = setInterval(()=>{
   let time = new Date();
//    console.log(time.toTimeString());
   console.log(time.toLocaleTimeString());
   console.log(time.toUTCString())
},1000)

    setTimeout(() => {
    clearInterval(a);
}, 10000);
