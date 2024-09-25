const navBtn = document.querySelector('.menu-btn')
const navList = document.querySelector('.nav-list')

navBtn.addEventListener("click", function(){
    navList.classList.toggle("active");
});

window.onscroll =function() {myFunction()};
var navbar =document.getElementById("navbar");
var sticky =navbar.offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}