let a = parseInt(prompt("Enter the number: "));
if(a>1 && a<=10)
{
    for(let i=1; i<=a; i++)
    {
        document.write(i);
    }
}
else if(a>10 && a<=20)
{
    for(let i=20; i>=1; i--)
    {
        document.write(i);
    }
}
else{
    document.write("Please enter valid number");
}
