const BASE_URL = 'index.html'

function redirect(URI){
    window.location.href = URI;
}

function formHandler(event, form) {
    event.preventDefault();
    validateForm(form);
}

function validateForm(form) {
    var email = form["email"].value;
    var username = form["username"].value;
    var psword = form["psword"].value;
    var confirm = form["confirm"].value;

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (username == "") {
        alert("Username must be filled out");
        return false;
    }
    if(!validateRegex()){
        return false;
    }
    if (psword == "") {
        alert("Password must be filled out");
        return false;
    }
    if (confirm != psword) {
        alert("Password tidak sama");
        return false;
    }
    alert("Welcome! "+ username +" Will be redirected to "+" Login Page " );

    // will be redirect in 3 seconds
    setTimeout(redirect, 2000, BASE_URL);
    progressBar(3);
}

function validateRegex(){
    // remove border when typed
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email");
    email2.addEventListener("keyup", function(){
        email2.style.border = "greenyellow 3px solid";
    });
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email)){
        return true;
    } 
    else {
        email2.style.border = "red solid 3px";
        alert("Email tidak valid");
        return false;
    } 
}
var progressBar = function(timeleft){
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(downloadTimer);
        }
        document.getElementById("progressBar").value = 3 - timeleft + 1;
        timeleft -= 1;
      }, 1000);
}