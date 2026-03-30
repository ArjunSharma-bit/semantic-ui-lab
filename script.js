const contactform = document.getElementById('contact-form');
const topBtn = document.getElementById('backToTop');
const modal = document.getElementById("thank-you-modal");
const span = document.querySelector(".close-btn");
const modalCloseBtn = document.getElementById("modalCloseBtn");

window.onscroll = function () {
    if (topBtn) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// FORM & MODAL LOGIC
contactform.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');

    const userNameSpan = document.getElementById('username');
    const userEmailStrong = document.getElementById('usernmail');

    if (userNameSpan) userNameSpan.textContent = name;
    if (userEmailStrong) userEmailStrong.textContent = email;

    modal.style.display = "block";

    this.reset();
});

const closeElements = [span, modalCloseBtn];
closeElements.forEach(btn => {
    if (btn) {
        btn.onclick = function () {
            modal.style.display = "none";
        };
    }
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};