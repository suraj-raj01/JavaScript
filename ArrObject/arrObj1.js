let student = [
    {
        Sname: "Rajan",
        sroll: 101,
        sage: 20,
        location: "sitamarhi"
    },
    {
        Sname: "Suraj",
        sroll: 102,
        sage: 18,
        location: "Bihar"
    },
    {
        Sname: "Devansh",
        sroll: 103,
        sage: 30,
        location: "Chetak"
    },
    {
        Sname: "Nitin",
        sroll: 104,
        sage: 20,
        location: "Gurgaon"
    },
    {
        Sname: "Abhisheck",
        sroll: 105,
        sage: 31,
        location: "Bhopal"
    },
    {
        Sname: "Shushil",
        sroll: 106,
        sage: 32,
        location: "Patna"
    },
    {
        Sname: "Ahmad",
        sroll: 107,
        sage: 20,
        location: "Jabalpur",
    },
    {
        Sname: "Suraj",
        sroll: 108,
        sage: 25,
        location: "Jaipur",
    },
    {
        Sname: "Devansh",
        sroll: 109,
        sage: 28,
        location: "UP",
    },
    {
        Sname: "Shivam",
        sroll: 109,
        sage: 27,
        location: "Mumbai",
    }
]

let StudentName = document.getElementById('s_name');
let StudentAge = document.getElementById('s_age');

function fun()
{
    student.forEach((i)=> console.log(i.Sname));
}

function fun1()
{
    // student.forEach((i)=> console.log(i.sage));
    let fltr = student.filter((t)=>{return t.sage>20 && t.sage<30});
    console.log(fltr);
}