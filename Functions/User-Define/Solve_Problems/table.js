// WAP to generate table of any number using function.

function table(a) {
    for (let i = 1; i <= 10; ++i) {
        document.write(a * i)
        console.log(i * a);
    }
}
let a = parseInt(prompt("Enter the number: "));
table(a);