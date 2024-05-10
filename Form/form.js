function valid()
{
    let val1 = parseInt(document.getElementById('val1').value);
    let val2 = parseInt(document.getElementById('val2').value);
    let res = document.getElementById('res')
   res.innerHTML = val1+val2;
}