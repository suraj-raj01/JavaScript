async function fet()
{
    let n = await fetch("https://jsonplaceholder.typicode.com/posts");
    let result = await n.json();
    console.log(result,"\n");
    console.log(result.map((e) => e.title));
    console.log(result.map((e) => e.id));
}
fet();