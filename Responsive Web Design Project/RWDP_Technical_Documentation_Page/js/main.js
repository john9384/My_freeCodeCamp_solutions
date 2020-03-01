window.onscroll = function() {
  stickyFunction();
};

let navbar = document.getElementById("navbar");
let content = document.getElementById("main-doc");
let sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    content.classList.add("onContentScroll");
  } else {
    navbar.classList.remove("sticky");
    content.classList.remove("onContentScroll");
  }
}
