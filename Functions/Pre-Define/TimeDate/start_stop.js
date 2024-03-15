

function start()
{
    setInterval(()=>{
        let a = new Date();
        let b = a.toLocaleTimeString();
        console.log(b);
    },1000);
}