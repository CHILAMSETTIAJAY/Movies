var menu_bx = document.getElementById("menu-bx");
var button = document.getElementById("navbar");
var menu_bx_1 =document.getElementById("menu-bx-1");
menu_bx.addEventListener("click", function() {
    if (button.style.display === "none" || button.style.display === "") {
        button.style.display = "flex";
        menu_bx.style.display="none";
        menu_bx_1.style.display="block";
    } else {
        button.style.display = "none";
        menu_bx.style.display="block";
        menu_bx_1.style.display="none";
    }
});

menu_bx_1.addEventListener("click", function() {
    if (button.style.display === "none" || button.style.display === "") {
        button.style.display = "flex";
        menu_bx.style.display="none";
        menu_bx_1.style.display="block";
    } else {
        button.style.display = "none";
        menu_bx.style.display="block";
        menu_bx_1.style.display="none";
    }
});

const userImg = document.getElementById("user-img");
const singup = document.getElementById("singup");

userImg.addEventListener("click", function() {
    if (singup.style.display === "none" || singup.style.display === "") {
        singup.style.display = "flex";
        document.body.style.overflow = "hidden";
    } else {
        singup.style.display = "none";
        document.body.style.overflow = "auto"; // Restore the default overflow property
    }
});


var closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", function() {
    if (singup.style.display === "none" || singup.style.display === "") {
        singup.style.display = "flex";
    } else {
        singup.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

   // JavaScript to show/hide the back-to-top button
   window.onscroll = function() {
    showBackToTopButton();
  };

  // JavaScript to scroll to the top when the button is clicked
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }