/*

for(let i=0; i<=5; ++i)
{
   document.write("*");
}

*/

/*

for(let i = 1; i<=5; ++i)
{
    for(let j = 1; j<=i; ++j)
    {
        document.write("*");
        console.log("*");
    }
    document.write("<br>");
}

*/

for(let i = 1; i<=5; ++i)
{
    for(let j = 1; j<=5; ++j)
    {
        if(i==1 || j==1 || i==5 || j==5)
        {
            document.write("* ");
        }else{
            
            document.write("&nbsp &nbsp");
        }
    }
    document.write("<br>");
}