const innerTrack = document.getElementById('innerTrack')
const innerPrev = document.getElementById('innerPrev')
const innerNext = document.getElementById('innerNext')

let innerIndex = 0
const maxIndex = 1
let timeoutId
export function restartSlider() {
	innerIndex = 0
	innerPrev.classList.add('active')
	innerNext.classList.remove('active')
	restartTimeout()
	updateInnerSlider()
}
let scrolle = 33.333

const updateInnerSlider = () => {
	innerTrack.style.transform = `translateX(-${innerIndex * scrolle}%)`
}

function updateScrollValue() {
	const element = document.querySelector('.inner-slide')
	const flexValue = parseFloat(getComputedStyle(element).flexBasis)

	if (flexValue === 50) {
		scrolle = 100
	} else if (flexValue === 33.333) {
		scrolle = 33.333
	} else {
		// на всякий случай дефолт
		scrolle = 33.333
	}
	restartSlider()

}

// запуск при загрузке
updateScrollValue()

// запуск при изменении размера экрана
window.addEventListener('resize', updateScrollValue)

// если нужно при повороте экрана на мобилке
window.addEventListener('orientationchange', updateScrollValue)



function toggleActive() {
	innerPrev.classList.toggle('active')
	innerNext.classList.toggle('active')
}

innerNext.onclick = () => {
	innerIndex = 1
	updateInnerSlider()
	cancelTimeout()
	toggleActive()
}

innerPrev.onclick = () => {
	innerIndex = 0
	updateInnerSlider()
	restartTimeout()
	toggleActive()
}

function startTimeout() {
	timeoutId = setTimeout(() => {
		innerIndex = 1
		updateInnerSlider()
		toggleActive()
	}, 2500)
}

function cancelTimeout() {
	clearTimeout(timeoutId)
}

function restartTimeout() {
	clearTimeout(timeoutId)
	startTimeout()
}
startTimeout()
innerPrev.classList.add('active')
updateInnerSlider()
