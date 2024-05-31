async function fet()
{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let b = await a.json();
    let p = b.map((e)=>{
        return e.id
    });
    console.log(p);
}