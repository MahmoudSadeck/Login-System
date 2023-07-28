// Login Screen
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");


// ****************singnUp Screen************************
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var  userCredentials = [];
// get data from storage
if (localStorage.getItem('credentials') == null) {
    userCredentials = []
} else {
    userCredentials = JSON.parse(localStorage.getItem('credentials'))
}

// signup function
function signUp() {
    if(ValidateEmail(signupEmail) == true && isEmpty() == true && isEmailExist() == true){

        var userData = {
            name:signupName.value,
            mail:signupEmail.value,
            password : signupPassword.value
        };

        userCredentials.push(userData);
        console.log(userCredentials);
        localStorage.setItem("credentials",JSON.stringify(userCredentials)) ;
        alert("SignUp Process Success")
        resetSignForm()
    }

    

}

// check empty fileds

function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        alert("All Records are required!");
        return false;
        
    } else {
        return true
    }
}

// Validate Email function
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {

    return true;

    } else {

    alert("Invalid email address!");

    return false;

    }

}

function isEmailExist() {
    for (var i = 0; i < userCredentials.length; i++) 
    {
        if (userCredentials[i].mail.toLowerCase() == signupEmail.value.toLowerCase() ) 
        {
                alert("This Mail is Already Exist")
            return false;
        }
        else {return true;}
    }
}


function resetSignForm() {
    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";

}




//   ************************* Login Screen ***************************



function login() {
    if (isLoginEmpty() == true) {
    
    var password = signinPassword.value
    var mail = signinEmail.value
    for (var i = 0; i < userCredentials.length; i++) {
        if (userCredentials[i].mail.toLowerCase() == mail.toLowerCase() && userCredentials[i].password.toLowerCase() == password.toLowerCase()) 
        {
            alert("Success Login")
            localStorage.setItem('session', userCredentials[i].name)
            window.location.href="home.html";
        } 
        
        else {
            alert("incorrect email or password") 
            window.location.href="index.html";
        }
    }

}
}

function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        alert("All Records are required!")
        return false
    } else {
        return true
    }
}


// ********************** home Screen *************

var username = localStorage.getItem('session')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}

function logout() {
    localStorage.removeItem('session')
}