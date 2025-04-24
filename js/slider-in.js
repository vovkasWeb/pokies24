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

const updateInnerSlider = () => {
	innerTrack.style.transform = `translateX(-${innerIndex * 33.3333}%)`
}

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
