// import { restartSlider } from './slider-in.js'

// const track = document.getElementById('track')
// const buttons = document.querySelectorAll('#buttons button')
// const total = buttons.length
// let current = 0,
// 	auto

// const goTo = i => {
// 	current = i % total
// 	track.style.transform = `translateX(-${current * 100}%)`
// 	buttons.forEach(b => b.classList.remove('active'))
// 	buttons[current].classList.add('active')
// 	if (current === 2) {
// 		restartSlider()
// 	}
// }

// buttons.forEach(
// 	btn =>
// 		(btn.onclick = () => {
// 			goTo(+btn.dataset.index)
// 			restart()
// 		})
// )

// let startX = 0
// track.addEventListener('touchstart', e => (startX = e.touches[0].clientX))
// track.addEventListener('touchend', e => {
// 	let dx = startX - e.changedTouches[0].clientX
// 	if (dx > 50) goTo((current + 1) % total)
// 	else if (dx < -50) goTo((current - 1 + total) % total)
// 	restart()
// })

// track.addEventListener('mousedown', e => (startX = e.clientX))
// track.addEventListener('mouseup', e => {
// 	let dx = startX - e.clientX
// 	if (dx > 50) goTo((current + 1) % total)
// 	else if (dx < -50) goTo((current - 1 + total) % total)
// 	restart()
// })

// const start = () =>
// 	(auto = setInterval(() => goTo((current + 1) % total), 5000))
// const restart = () => {
// 	clearInterval(auto)
// 	start()
// }

// goTo(0)
// start()
const menuBtns = document.querySelectorAll('.footer__menu-button')
menuBtns.forEach(menuBtn => {
	menuBtn.addEventListener('click', function () {
		const activeAccordion = document.querySelector('.footer__menu-button.open')
		if (activeAccordion && activeAccordion !== menuBtn) {
			activeAccordion.nextElementSibling.style.height = 0
			activeAccordion.nextElementSibling.style.padding = '0px 20px'
			activeAccordion.classList.remove('open')
			activeAccordion.querySelector('.icon-img-btn').style.transform = 'rotate(-180deg)';
		}
		menuBtn.classList.toggle('open')
		const icon = menuBtn.querySelector('.icon')
		const content = menuBtn.nextElementSibling
		if (menuBtn.classList.contains('open')) {
			content.style.height = content.scrollHeight + 10 + 'px'
			content.style.padding = '0px 0px 0px 0px'
			icon.querySelector('.icon-img-btn').style.transform = 'rotate(-180deg)'
		} else {
			content.style.height = 0
			content.style.padding = '0px 20px'
			icon.querySelector('.icon-img-btn').style.transform = 'rotate(0deg)'
		}
	})
})
