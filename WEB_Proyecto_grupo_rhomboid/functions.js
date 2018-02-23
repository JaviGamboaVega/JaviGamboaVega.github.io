
document.onload = window.onscroll = function() {myFunction()};

var menu = document.getElementById("menu");
var fixOverflow = document.getElementById("fixParallax");
var fixOverflowoffSet = document.getElementById("fixParallax").offsetTop;
var showMenu = document.getElementById("fixParallax").offsetTop;

function myFunction() {
  if (window.pageYOffset >= fixOverflowoffSet) {
    menu.classList.add("navDisplay");
  	fixOverflow.style.overflowY = "hidden";
  } else {
    menu.classList.remove("navDisplay");
    fixOverflow.style.overflowY = "auto";
  }
  if(window.pageYOffset == 0){ 
    menu.classList.remove("navDisplay");
    fixOverflow.style.overflowY = "auto";
  }
}
