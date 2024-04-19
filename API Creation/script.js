async function btn()
{
    let n = await fetch("http://localhost:3000/student");
    let result = await n.json();
    console.log(result,"\n");
    console.log(result.map((e) => e.name));
    console.log(result.map((e) => e.id));
}
