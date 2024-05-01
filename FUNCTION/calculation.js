let ans = document.getElementById('res');
function calculate() {
    let a = parseInt(prompt("enter the number: \n1 -> add\n2 -> sub\n3 ->mul\n4 ->div"));
    switch (a) {
        case 1:
            add();
            break;
        case 2:
            sub();
            break;
        case 3:
            mul();
            break;
        case 4:
            div();
            break;
        default:
            alert("please enter valid!!!");
            break;
    }

    function add() {
        let x = parseInt(prompt("Enter the first number: "));
        let y = parseInt(prompt("Enter the second number: "));
        console.log(x + y);
        document.write(x+y);
    }
    function sub() {
        let x = parseInt(prompt("Enter the first number: "));
        let y = parseInt(prompt("Enter the second number: "));
        console.log(x - y);
    }
    function mul() {
        let x = parseInt(prompt("Enter the first number: "));
        let y = parseInt(prompt("Enter the second number: "));
        console.log(x * y);
    }
    function div() {
        let x = parseInt(prompt("Enter the first number: "));
        let y = parseInt(prompt("Enter the second number: "));
        console.log(x / y);
    }
}
calculate();