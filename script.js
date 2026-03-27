const contactfrom = document.getElementById('contact-form')
const topBtn = document.getElementById('backtoTop');

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


contactfrom.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    console.log("New Message Received");
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Message:", message)

    alert(`Thanks for reaching out. ${name}! We'll Contact you at ${email}`);

    this.reset();
})