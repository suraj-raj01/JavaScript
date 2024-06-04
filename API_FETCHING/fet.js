async function fet()
{
    let sh = document.getElementById("showData")
    let a = await fetch("http://localhost:3000/student");
    let b = await a.json();
    let p = b.map((e)=>
    `
    <tr>
    <td> ${e.id} </td>
    <td> ${e.pr_name} </td>
    <td> ${e.price} </td>
    </tr>
    `).join(" ");
    sh.innerHTML = p;
}