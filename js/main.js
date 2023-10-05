const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".images");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
    btns.forEach((btn)=> {
        btn.classList.remove("active");
    })

    slides.forEach((slide)=> {
        slide.classList.remove("active");
    })

    contents.forEach((content)=> {
        content.classList.remove("active");
    })

    btns[manual].classList.toggle("active");
    slides[manual].classList.toggle("active");
    contents[manual].classList.toggle("active");
}

btns.forEach((btn,i)=> {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
})