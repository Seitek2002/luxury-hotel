document.addEventListener('DOMContentLoaded', () => {
	const menuIcon = document.getElementById('menu-icon')
	const navLinks = document.querySelector('.nav-links')
	const closeButton = document.querySelector('.close-button')

	menuIcon.addEventListener('click', () => {
		navLinks.classList.toggle('open')
	})
	closeButton.addEventListener('click', function () {
		navLinks.classList.remove('open')
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
