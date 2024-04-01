// WAP to print even number from the given user range.

function even(a, b) {
    for (let i = a; i <= b; ++i) {
        if (i % 2 == 0) {
            document.write(i);
            console.log(i);
        }
    }
}
let a = parseInt(prompt("Enter the start range number: "));
let b = parseInt(prompt("Enter the end range number: "));
even(a, b);