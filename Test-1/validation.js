
function valid()
{
    let names = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let pass = document.getElementById('pass').value;
    let conf_pass = document.getElementById('pass').value;

    if(names == "")
    {
        prompt("please enter name: ");
        return false;
    }
    else if(contact.lenhth<10 || contact.lenhth>10)
    {
        alert("please enter contact number in 10 digit");
        document.getElementById('contact').focus();
        return false;
    }
    else if(isNaN(contact)){
        alert = "please enter value";
        document.getElementById('contact').focus();
        return false;
    }
    else if(pass=="")
    {
        alert("enter the number ");
        pass.document.getElementById('pass').focus();
        return false;
    }
    else if(conf_pass=="")
    {
        alert("enter the number ");
        pass.document.getElementById('conf_pass').focus();
        return false;
    }
    else if(pass!=conf_pass)
    {
        alert("Password not matching")
    }
}