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
