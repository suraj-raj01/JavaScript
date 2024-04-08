
let obj = {
    naam : "SURAJ KUMAR",
    city : "BHOPAL",
    fun:function()
    {
        console.log(this.naam +" "+this.city)
    }
}
console.log(obj.fun());


// Print only key

let ob = {
    key1 : "value1",
    key2 : "value2",
}

let k = Object.keys(ob)  // Methods
// console.log(k[0]);
// console.log(k[1]);

for(let val in k)
{
    console.log(k[val]);
}

let x = Object.values(ob);
console.log(x);

for(let v in ob)
{
    console.log(v);
}