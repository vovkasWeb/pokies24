// Select modal elements
const listItem = document.querySelector('.game__list')
const listItemMini = document.querySelector('.game__list-mobile')
const modalOverlay = document.querySelector('.modal-overlay')
const closeModalBtn = document.querySelector('.close-modal-btn')

const openModal = event => {
	const target = event.target
	if (target.matches('.game__img-list')) {
		document.body.style.overflow = 'hidden'
		modalOverlay.classList.add('open')
		const imgModal = document.querySelector('.modal__img')
		imgModal.src = `./img/game/${target.alt}.png`
		imgModal.alt = target.alt
	}
}
listItem.addEventListener('click', openModal)
listItemMini.addEventListener('click', openModal)
const closedModal = () => {
	modalOverlay.classList.remove('open')
	document.body.style.overflow = ''
}

closeModalBtn.addEventListener('click', function () {
	closedModal()
})
modalOverlay.addEventListener('click', function (e) {
	if (e.target === modalOverlay) {
		closedModal()
	}
})
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		closedModal()
	}
})
