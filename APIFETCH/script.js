async function fet()
{
    let url = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    let result = await url.json();
    let pl = document.getElementById('display_data');
    let p = result.map((e)=>
`
<tr>
<td>${e.id}</td>
<td>${e.albumId}</td>
<td>${e.title}</td>
<td><img src="${e.thumbnailUrl}"></td>
<td><button>Delete</button></td>
</tr>
`).join(" ");
pl.innerHTML = p;
// let res = re.map((e)=>`
//     <div>
//         <img src="${e.url}"></img>
//     </div>
// `)
// document.getElementById('result').innerHTML = res;
}
fet();