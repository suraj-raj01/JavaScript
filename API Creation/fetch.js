async function fet()
{
    let a = await fetch("http://localhost:3000/emp");
    let b = await a.json();
    let result = (b.map((e)=>{return e.age}));
    // console.table(result);
    document.getElementById('screen').innerHTML = result;
    document.write(b.map((f)=>`
    <div> ${f.age}</div>
    <div> ${f.id}</div>
    <div> ${f.name}</div>
    `).join(" "));
}
