const accordion = document.querySelectorAll('.accordion')
const accordionFaq = document.querySelectorAll('.accordion-faq')
const arrow = document.querySelector('.arrow')
const accordionSvg = document.querySelectorAll('.accordion-svg')
const images = document.querySelectorAll(".img")
const projects = document.querySelectorAll(".project")
console.log(arrow)
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.style.backgroundColor = "var(--black)";
        this.style.color = "var(--lightGray)";
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight === "500px") {
            panel.style.maxHeight = "0";
            this.style.backgroundColor = "var(--lightGray)";
            this.style.color = "var(--black)";

        } else {
            panel.style.maxHeight = "500px";

        }
    });
}
for (i = 0; i < accordionFaq.length; i++) {
    accordionFaq[i].addEventListener("click", function () {
        console.log(accordionFaq)
        this.classList.toggle("active");
        this.style.backgroundColor = "var(--orenge)";
        this.style.color = "var(--lightGray)";
        this.style.borderRadius = " 20px 20px 0 0"
        this.style.border = "none"
        // accordionSvg.style.backgroundColor = "var(--orenge)"
        // accordionSvg.style.color = "#fff"
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight === "500px") {
            panel.style.maxHeight = "0";
            panel.style.backgroundColor = "var(--orenge)"
            this.style.backgroundColor = "var(--lightGray)";
            this.style.color = "var(--black)";

        } else {
            panel.style.maxHeight = "500px";

        }
    });
}


const handelHover = (index) => {
    projects.forEach((project, i) => {
        if (index == i) {
            images[i].classList.add("img-active")

        } else {
            images[i].classList.remove("img-active")
        }
    })
}
const mobileMenu = document.querySelector(".mobile-menu-container")
const burger = document.querySelector(".burger")
burger.addEventListener("click", () => {
   
    mobileMenu.classList.toggle('openMenu')
})