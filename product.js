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

//selecting items and carticon
var items = document.getElementById("items")
var carticon = document.getElementById("carticon")

carticon.addEventListener("mouseenter",() => {
items.style.display="block"
})
carticon.addEventListener("mouseleave",() => {
    items.style.display="none"
})

//Search area

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", () => {
    var enteredValue = search.value.toUpperCase()
    for (i = 0; i < productlist.length; i++) {
        var productname = productlist[i].querySelector("p").textContent
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[i].style.display = "none"
        } else {
            productlist[i].style.display = "block"
        }
    }
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

