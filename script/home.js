let menu = window.document.querySelector(".menu");
let menuUl = window.document.querySelector(".menu-ul");
let section = window.document.querySelectorAll("section");
let mainOn = new Boolean(false);

menu.addEventListener("click", function showMain() {
  if (mainOn == false) {
    mainOn = true;
    menuUl.style.opacity = "1";
    menuUl.style.backgroundColor = "#333333";
    menuUl.style.width = "100%";
    menuUl.style.height = "100vh";
    menuUl.style.marginTop = "-35px";
    menuUl.style.paddingTop = "50px";
    section.forEach((element, index) => {
      section[index].style.height = "0px";
    });
  } else {
    mainOn = false;
    menuUl.style.opacity = "0";
    menuUl.style.width = "0";
    menuUl.style.height = "0";
    section.forEach((element, index) => {
      section[index].style.height = "250px";
    });
  }
});
