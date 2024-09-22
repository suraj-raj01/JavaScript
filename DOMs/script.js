

const p = document.createElement("button");
function fun1() {
    const text = document.createTextNode("HELLO DOM");
    p.appendChild(text);
    document.body.appendChild(p);
    p.addEventListener("click", function () {
        alert("hello")
    })
    return false;
}
function fun2() {
    document.body.removeChild(p);
}