// Находим кнопку
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn')

// Слушаем событие прокрутки страницы
window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		// Если прокрутили больше 300px
		scrollToTopBtn.style.display = 'block' // Показываем кнопку
	} else {
		scrollToTopBtn.style.display = 'none' // Скрываем кнопку
	}
})

// При клике на кнопку прокручиваем страницу наверх
scrollToTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth', // Плавная прокрутка
	})
})
