function valid() {
    let n = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;
    let pass = document.getElementById('pass').value;
    let conf_pass = document.getElementById('conf-pass').value;

    if (n == "") {
        alert("please enter your name");
        document.getElementById('name').focus();
        return false;
    }
    else if(!(isNaN(n)))
        {
            alert("number not allow!");
            document.getElementById('name').focus();
            return false;
        }
    else if (age == "") {
        alert("please enter your age");
        document.getElementById('age').focus();
        return false;
    }
    else if (isNaN(age)) {
        alert("only number accepted")
        document.getElementById('age');
        return false;
    }
    else if (email == "") {
        alert("please enter email");
        document.getElementById('email').focus();
        return false;
    }
    else if(!(email.include("@")))
        {
        alert("please enter email");
        document.getElementById('email').focus();
        return false;
        }
    else if (contact == "") {
        alert("please enter contact number");
        document.getElementById('contact').focus();
        return false;
    }

    else if (isNaN(contact)) {
        alert("only number accepted")
        document.getElementById('contact');
        return false;
    }
    else if (contact.length<10 || contact.length>10) {
        alert("please enter 10 digit number")
        document.getElementById('contact').focus();
        return false;
    }
    else if (pass == "") {
        alert("please enter password");
        document.getElementById('pass').focus();
        return false;
    }
    else if(!(pass.match(/[@,#,$,<>]/))){
        alert("Your password is Weak!!");
        document.getElementById('pass').focus();
        return false;
    }
    else if (conf_pass == "") {
        alert("Please enter conform password");
        document.getElementById("conf-pass").focus();
        return false;
    }
    else if (pass != conf_pass) {
        alert("Incorrect Password!!");
        document.getElementById('conf-pass').focus();
        return false;
    }
}