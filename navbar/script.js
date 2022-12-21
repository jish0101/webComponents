const primaryNav = document.querySelector('.primary-nav');
const toggle = document.querySelector('.nav-list-toggle');

toggle.addEventListener('click', () => {
    primaryNav.toggleAttribute("data-expanded");
})