

function valid() {
  let n = document.getElementById('name').value;
  let contact = document.getElementById('contact').value;
  let pass = document.getElementById('pass').value;
  let conf_pass = document.getElementById('conf-pass').value;

  if (n == "") {
    alert("Please enter your name!");
    return false;
  }

  else if (contact.length < 10 || contact.length > 10) {
    alert("Please enter your contact number in 10 digits!");
    document.getElementById('contact').focus();
    return false;
  }
  else if(isNaN(contact))
  {
    alert("please enter number");
    return false;
  }
  else if (pass == "") {
    alert("Please enter your password!");
    document.getElementById('pass').focus();
    return false;
  }

  else if(!(pass.match(/[!@#-+]/)))
  {
    alert("your password is weak");
    document.getElementById('pass').focus();
    return false;
  }

  else if (conf_pass == "") {
    alert("Please enter your conform password!");
    document.getElementById('conf-pass').focus();
    return false;
  }
  else if(pass != conf_pass)
  {
    alert("incorrect pass");
    document.getElementById('conf-pass').focus();
    return false;
  }
}