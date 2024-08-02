const dropdowns = document.querySelectorAll('.dropdown-menu');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.main-menu');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('#info-room');

    select.addEventListener('click', () => {
        select.classList.toggle('main-menu-clicked');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            select.classList.remove('main-menu-clicked');
            menu.classList.remove('menu-open');
            options.forEach(item => {
                item.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});
