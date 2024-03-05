
const a = parseInt(document.getElementById('n1').value);
const b = parseInt(document.getElementById('n2').value);
const ans = parseInt(document.getElementById('ans').value);

function add()
{
    const answer = a+b;
    ans.innerHTML = answer;
}