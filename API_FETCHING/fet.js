async function fet()
{
    let sh = document.getElementById("showData")
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let b = await a.json();
    let p = b.map((e)=>
    `
    <tr>
    <td> ${e.id} </td>
    <td> ${e.userId} </td>
    <td> ${e.title} </td>
    </tr>
    `).join(" ");
    sh.innerHTML = p;
}