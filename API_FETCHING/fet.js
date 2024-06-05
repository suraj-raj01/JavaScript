async function fet()
{
    let sh = document.getElementById("showData")
    let a = await fetch("http://localhost:3000/product");
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

function add()
{
    let formData = {
        id:document.getElementById("id").value,
        pr_name:document.getElementById("pr_name").value,
        price:document.getElementById("price").value
    }
    fetch("http://localhost:3000/product",{
        method:"POST",
        headers:{
        'Content-type':'application/json'
        },
        body:JSON.stringify(formData)
    })

}