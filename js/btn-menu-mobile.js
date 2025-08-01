let btnMenu = document.getElementById("btn__menu__mobile");
let line1 = document.querySelector(".line1__btn__mobile");
let line2 = document.querySelector(".line2__btn__mobile");

btnMenu.addEventListener("click", () => {
    line1.classList.toggle("activate__line1");
    line2.classList.toggle("activate__line2");
})
