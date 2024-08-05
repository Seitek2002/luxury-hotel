document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon')
  const navLinks = document.querySelector('.nav-links')

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open')
  })
})
const swiper = new Swiper('.swiper', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.button-next-swp',
		prevEl: '.button-prev-swp',
	},
})
