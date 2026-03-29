const contactform = document.getElementById('contact-form')
const topBtn = document.getElementById('backtoTop');
const modal = document.getElementById("thank-you-modal");
const span = document.getElementsByClassName("close-btn")[0];
const modalCloseBtn = document.getElementById("modalCloseBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block"
    } else {
        topBtn.style.display = "none"
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0, behavior: "smooth"
    })
})

contactform.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');

    document.getElementById('username').textContent = name;
    document.getElementById('userEmail').textContent = email;

    modal.style.display = "block";

    this.reset();
});

[span, modalCloseBtn].forEach(btn => {
    btn.onclick = function () {
        modal.style.display = "none";
    }
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}