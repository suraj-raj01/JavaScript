let n = document.getElementById('name').value;
let contact = document.getElementById('contact').value;
let pass = document.getElementById('pass').value;
let conf_pass = document.getElementById('conf-pass').value;

function valid()
{
  if(n == "")
  {
    alert("Please enter your name!");
    return false;
  }   
  else if(contact == "")
  {
    alert("Please enter your contact number!");
    return false;
  }   
  else if(pass == "")
  {
    alert("Please enter your password!");
    return false;
  }   
  else if(conf-pass == "")
  {
    alert("Please enter your conform password!");
    return false;
  }   
}