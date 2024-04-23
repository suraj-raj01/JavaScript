async function fet()
{
    let a = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    let re = await a.json();
    let ot = "";
    let pl = document.getElementById('display_data');
    let p = re.map((e)=>ot+=
`
<tr>
<td>${e.id}</td>
<td>${e.albumId}</td>
<td>${e.title}</td>
<td><img src="${e.url}"></td>
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