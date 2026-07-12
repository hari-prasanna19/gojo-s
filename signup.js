//selecting topsec
var topsec = document.getElementById("topsec")
var topclo = document.getElementById("closetop")

topclo.addEventListener("click", function(){
    topsec.style.display = "none"
})
//selecting sideNav and menu icon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

//signup & login section

var signup = document.getElementById("signup")
var login = document.getElementById("login")
var signinsubmit = document.getElementById("signinsubmit")
var loginsubmit = document.getElementById("loginsubmit")
var logintext = document.getElementById("logintext")
var signintext = document.getElementById("signintext")

logintext.addEventListener("click",() =>{
    login.style.display="block"
    signup.style.display="none"
})

signintext.addEventListener("click",() =>{
    login.style.display="none"
    signup.style.display="block"
})

//signup authentication

var signinname = document.getElementById("signinname")
var signinmail = document.getElementById("signinmail")
var signinpass = document.getElementById("signinpass")
var signinsubmit = document.getElementById("signinsubmit")

var signinnameregex = /^[a-zA-Z]+$/
var signinmailregex = /^[a-zA-Z0-9]+@gmail\.com$/
var signinpassregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

signinsubmit.addEventListener("click", (e) => {
    e.preventDefault()

    if (signinnameregex.test(signinname.value) == false) {
        alert("Enter a valid name (letters only)")
        return
    }
    if (signinmailregex.test(signinmail.value) == false) {
        alert("Enter a valid Gmail address")
        return
    }
    if (signinpassregex.test(signinpass.value) == false) {
        alert("Password must be 8+ chars with uppercase, lowercase, number, and special character")
        return
    }

    alert("Signed up successfully!")
    window.location.href = "index.html"
})

//login authentication

var loginmail = document.getElementById("loginmail")
var loginpass = document.getElementById("loginpass")
var loginsubmit = document.getElementById("loginsubmit")

var loginmailregex = /^[a-zA-Z0-9]+@gmail\.com$/
var loginpassregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

loginsubmit.addEventListener("click", (e) =>{
    e.preventDefault()

    if(loginmailregex.test(loginmail.value)==false){
        alert("Enter valid mail")
        return
    }
    if(loginpassregex.test(loginpass.value)==false){
        alert("Enter valid password")
        return
    }
    alert("Login Successfully")
    window.location.href = "index.html"
})







