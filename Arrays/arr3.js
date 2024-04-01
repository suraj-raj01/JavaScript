let arr= [];
let sum = 0;
for(let i=0; i<10; ++i)
{ 
    arr[i] = parseInt(prompt("Enter numbers: "));
}
for(let i=0; i<10; i++)
{
    if(arr[i]%2==0)
    {
        sum = sum+arr[i];
    }
}
console.log(sum);
