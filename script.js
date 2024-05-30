const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const isOpen = navLinks.classList.contains("active");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

ScrollReveal().reveal('.content h1', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
});

ScrollReveal().reveal('.content p', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    delay: 500,
});

ScrollReveal().reveal('.socials', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    delay: 1000,
});
