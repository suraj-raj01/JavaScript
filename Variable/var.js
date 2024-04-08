/*
var str = "SURAJ";
var str;
document.getElementById('demo').innerHTML = str;
*/

// This will be Wrong.
/*
let str = "SURAJ";
let str;
document.getElementById('demo').innerHTML = str;
*/

/*
Note:-
If you put a number in quotes, the rest of the numbers will be treated as strings, 
and concatenated.
*/

/*
document.getElementById('demo').innerHTML = 10+20+"$";  // 30$
document.getElementById('demo').innerHTML = "$"+10+20;  // $1020
*/

/*
let $ = 20;
let $$ = 30;
document.getElementById('demo').innerHTML = $+$$;
*/

/*
let _a = 40;
let _$ = 50;
document.getElementById('demo').innerHTML = _a+_$;
*/

/*
// var have global scope but let and const doesn't have global scope.
{
    var a = 20;
}
document.getElementById('demo').innerHTML = a;

// it gives error
{
    let x = 20;
}
document.getElementById('demo').innerHTML = x;
*/

/*
carname = "Volvo";
document.getElementById('demo').innerHTML = carname;
var carname;
*/