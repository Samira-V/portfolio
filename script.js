// const panel = document.querySelector('.panel')
const accordion = document.querySelectorAll('.accordion')
const accordionFaq = document.querySelectorAll('.accordion-faq')
const arrow = document.querySelector('.arrow')
const accordionSvg = document.querySelector('.accordion-svg')
console.log(arrow)
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {

        this.classList.toggle("active");

        this.style.backgroundColor = "var(--black)";
        this.style.color = "var(--lightGray)";
        accordionSvg.style.backgroundColor = "var(--orenge)"
        accordionSvg.style.fill = "#fff"
        // this.style.padding = "10px";

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight === "500px") {
            panel.style.maxHeight = "0";
            this.style.backgroundColor = "var(--lightGray)";
            this.style.color = "var(--black)";


            // panel.style.backgroundColor = "var(--black)"
            // panel.style.color = "var(--lightGray)"

        } else {
            panel.style.maxHeight = "500px";

        }
    });
}
for (i = 0; i < accordionFaq.length; i++) {
    accordionFaq[i].addEventListener("click", function () {

        this.classList.toggle("active");

        this.style.backgroundColor = "var(--orenge)";
        this.style.color = "var(--lightGray)";
        this.style.borderRadius = " 20px 20px 0 0"
        this.style.border = "none"
        accordionSvg.style.backgroundColor = "var(--orenge)"
        accordionSvg.style.color = "#fff"
        // this.style.padding = "10px";

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight === "500px") {
            panel.style.maxHeight = "0";
            panel.style.backgroundColor = "var(--orenge)"
            this.style.backgroundColor = "var(--lightGray)";

            this.style.color = "var(--black)";


            // panel.style.backgroundColor = "var(--black)"
            // panel.style.color = "var(--lightGray)"

        } else {
            panel.style.maxHeight = "500px";

        }
    });
}
