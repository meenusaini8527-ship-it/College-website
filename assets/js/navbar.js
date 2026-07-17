const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const dropdownItems = document.querySelectorAll('.has-dropdown');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

dropdownItems.forEach((item) => {
    const toggle = item.querySelector('.dropdown-toggle');

    if (toggle) {
        toggle.addEventListener('click', (event) => {
            if (window.innerWidth <= 980) {
                event.preventDefault();
                item.classList.toggle('open');
            }
        });
    }
});
