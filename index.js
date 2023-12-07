const burgerIcon = document.querySelector("#burger");
const navbarMenue = document.querySelector("#nav-links");

burgerIcon.addEventListener('click', () => {
    navbarMenue.classList.toggle('is-active');
});

//gotoTop

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("goToTop");
    // let progressValue = document.getElementById("inner");
    let pos = document.documentElement.scrollTop;
    // console.log(pos);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // console.log(calcHeight);
    let scrollValue = Math.round((pos * 100) / calcHeight);
    // console.log(scrollValue);
    if (pos > 100) {
        scrollProgress.style.display = "flex"
    } else {
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#7a6ad8 ${scrollValue}%,white ${scrollValue}%)`
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//
let navLi = document.querySelectorAll("nav .navbar-end a");
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});