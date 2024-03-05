// WAP to display the sum of 3 digit number;

function sum(n)
{
    let f,m,l,t;
    f = parseInt(n%10);
    t = parseInt(n/10);
    l = parseInt(t%10);
    m = parseInt(t/10);
    document.write(f+l+m);
}
sum(384);