var menuToggle = document.querySelector(".main-menu__toggle");
var menuList = document.querySelector(".main-menu__list");

menuToggle.classList.remove("main-menu__toggle--opened");
menuToggle.classList.add("main-menu__toggle--closed");
menuList.classList.remove("main-menu__list--opened");
menuList.classList.add("main-menu__list--closed");

menuToggle.addEventListener("click", function (evt) {
  if (menuToggle.classList.contains("main-menu__toggle--opened")) {
    menuToggle.classList.remove("main-menu__toggle--opened");
    menuToggle.classList.add("main-menu__toggle--closed");
    menuList.classList.remove("main-menu__list--opened");
    menuList.classList.add("main-menu__list--closed");
  } else {
    menuToggle.classList.remove("main-menu__toggle--closed");
    menuToggle.classList.add("main-menu__toggle--opened");
    menuList.classList.remove("main-menu__list--closed");
    menuList.classList.add("main-menu__list--opened");
  }
});
