
function valid(){
    let n = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('conf_pass').value;

    if(n=="")
    {
        alert("please enter your name");
        document.getElementById('name').focus();
        return false;
    }
    else if(contact.length<10 || contact.length>10)
    {
        alert("Please enter 10 digit");
        document.getElementById('contact').focus();
        return false;
    }
    else if(isNaN(contact))
    {
        alert("please enter your contact number");
        return false;
    }
    else if(pass=="")
    {
        alert("Please enter your password");
        document.getElementById('pass').focus();
        return false;
    }

    else if(!(pass.match(/[@#!$%]/)))
    {
        alert("your password is weak");
        document.getElementById('pass').focus();
        return false;
    }
    else if(cpass=="")
    {
        alert("Please enter your confPass password");
        document.getElementById('conf_pass').focus();
        return false;
    }
    else if(pass !=cpass)
    {
        alert("password not match!!");
        document.getElementById('conf_pass').focus();
        return false;
    }
}