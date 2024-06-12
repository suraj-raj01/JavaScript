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
    <td><button onclick="mydelete(${e.id});">Delete</button></td>
    <td><button onclick="myedit(${e.id});">Edit</button></td>
    </tr>
    `).join(" ");
    sh.innerHTML = p;
}
fet();

function add()
{
    let formData = {
        "id":document.getElementById("id").value,
        "pr_name":document.getElementById("pr_name").value,
        "price":document.getElementById("price").value
    }
    fetch("http://localhost:3000/product",{
        method:"POST",
        headers:{
        'Content-type':'application/json'
        },
        body:JSON.stringify(formData)
    })

}

function mydelete(id)
{
    fetch(`http://localhost:3000/product/${id}`,{
        method:"DELETE"
    })
    .then( res=> alert("data deleted successfully"))
}

// Edit fucttions

let strid = 0;
function myedit(id)
{
    strid = id;
    document.getElementById("myfrm").style.display="block";
}

function editdata()
{
    let myfrmdata = {
        "id":document.getElementById("id").value,
        "pr_name":document.getElementById("pr_name").value,
        "price":document.getElementById("price").value
    }

    fetch(`http://localhost:3000/product/${strid}`,{
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(myfrmdata)
    })
    .then(res=>alert("data edited!!!"))
}