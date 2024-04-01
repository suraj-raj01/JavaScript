// WAP to generate table of any number using function.

function table(a) {
    for (let i = 1; i <= 10; ++i) {
        document.write(a * i)
        console.log(i * a);
    }
}
let a = parseInt(prompt("Enter the number: "));
table(a);

// WAP to generate table of any number using recursion function


// function table(n,i)
// {
//     if(n>10)
//     {
//         return;
//     }
//     document.write(n*i);
//     table(n,i+1);
// }
// let n = parseInt(prompt("Enter the number: "));
// table(n,1);