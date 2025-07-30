let navBar = document.getElementById("header");

document.addEventListener("scroll", () => {
    let scrollVertical = window.scrollY;
    if(scrollVertical > 0){
        navBar.classList.add("scroll");
    }else{
        navBar.classList.remove("scroll");
    }
});