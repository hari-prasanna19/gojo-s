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

//scroll button

var scrolltop = document.getElementById("scrollTopBtn")

const scrollTopBtn = document.getElementById("scrollTopBtn");

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
})
 
//subscription navigation

var subscribenav = document.getElementById("subscribenavigation")
var subsec = document.getElementById("subsec")

subscribenav.addEventListener("click", () => {
   subsec.scrollIntoView({
behavior: "smooth"
    })
})

//bestseller navigation

var bestseller = document.getElementById("bestseller")
var bestsec = document.getElementById("bestsec")

bestseller.addEventListener("click",() =>{
    bestsec.scrollIntoView({
        behavior:"smooth"
    })
})

//subscription verification

var subbtn = document.getElementById("subbtn")
var subscriptionemail = document.getElementById("subscriptionmail")

var subregex = /^[a-zA-Z0-9]+@gmail.com/

subbtn.addEventListener("click",() =>{
    if(subregex.test(subscriptionmail.value) == true)
    {
        alert("Subscribed Successfully")
    }else{
        alert("Enter valid mail")
    }
})