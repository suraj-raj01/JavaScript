async function fet()
{
    let n = await fetch("https://jsonplaceholder.typicode.com/photos");
    let result = await n.json();
    console.log(result);
    console.log(result.map((e)=>e.id));
}

// JSON -> Java Script Object Notation