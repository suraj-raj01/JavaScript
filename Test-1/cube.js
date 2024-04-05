let arr = [];
for(let i=0; i<10; i++)
{
    arr[i] = parseInt(prompt("Enter the number: "));
}

for(let j=0; j<10; j++)
{
    if(arr[j]%2 != 0)
    {
        console.log(arr[j]*arr[j]*arr[j]);
    }
}


document.body.style.backgroundColor="teal";
document.body.style.color="white";