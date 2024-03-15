let u = new Date();
console.log(u);

console.log(u.toLocaleTimeString());
console.log(u.toLocaleDateString());
console.log(u.getFullYear());
console.log(u.getMinutes());
console.log(u.getUTCDate());
console.log(u.getMilliseconds());
console.log(u.toTimeString());
console.log(u.toUTCString());
console.log(u.getUTCMonth());

setInterval(()=>{
    let a = new Date();
    let b = a.toLocaleTimeString();
    console.log(b);
},1000);

