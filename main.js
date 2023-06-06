var menuicon = document.querySelector(".menuicon");
var navbar = document.querySelector(".navbar");
var closeicon = document.querySelector(".closeicon");
var background = document.querySelector(".background");

menuicon.addEventListener("click", () => {
if (navbar.style.display === "none") {
      navbar.style.display = "block";
      background.style.display = "block";
    } else {
      navbar.style.display = "none";
      background.style.display = "none";
    }
  });

  closeicon.addEventListener("click", () => {
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
        background.style.display = "none";
        } else {
          navbar.style.display = "block";
          background.style.display = "block";
        }
      });