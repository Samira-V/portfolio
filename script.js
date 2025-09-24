// const panel = document.querySelector('.panel')
const accordion = document.querySelectorAll('.accordion')
const arrow = document.querySelector('.arrow')
console.log(arrow)
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {

        this.classList.toggle("active");

        this.style.backgroundColor = "var(--black)"
        this.style.color = "var(--lightGray)"
        // this.style.padding = "10px";

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight === "500px") {
            panel.style.maxHeight = "0";

            panel.style.backgroundColor = "var(--black)"
            panel.style.color = "var(--lightGray)"

        } else {
            panel.style.maxHeight = "500px";

        }
    });
}