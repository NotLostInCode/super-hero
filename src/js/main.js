import '../style/style.css'
import md5 from 'js-md5'


const spoilerHeaders = document.querySelectorAll('.spoiler__header')

spoilerHeaders.forEach(spoilerHeader => {
	spoilerHeader.addEventListener('click', () => {
		const spoilerContent = spoilerHeader.closest('.character-description__spoiler').querySelector('.spoiler__content')
		spoilerContent.classList.toggle('visible')
	})
})

// search====================


	const searchingResultsShell = document.querySelector('.searching-results__shell')
	const searchInput = document.querySelector('.search__input')





	const publicKey = 'dcf493d56816d73d4ae6a5645dcbb219'
	const privateKey = 'a01ebb5323b7bcfb24739f70ee22f56726f7f0e4'
	const timestamp = new Date().getTime().toString()
	const hash = md5(timestamp + privateKey + publicKey)
	const apiUrl = `https://gateway.marvel.com/v1/public/characters?&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
	// const apiUrl = `https://gateway.marvel.com/v1/public/characters?name=${searchInput.value}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`

	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			console.log(data.data.results)




			data.data.results.forEach(hero => {
				// create shell search results
				const searchingResults = document.createElement('div')
				searchingResults.classList.add('searching__results')

				// create img hero
				const heroImg = document.createElement('img')
				heroImg.classList.add('searching-results__img')
				heroImg.src = `${hero.thumbnail.path}.${hero.thumbnail.extension}`

				// create name hero
				const heroName = document.createElement('p')
				heroName.classList.add('searching-results__name')
				heroName.textContent = hero.name

				searchingResults.append(heroImg, heroName)

				searchingResultsShell.append(searchingResults)
			})


		})



		// const searchHero = (hero) => {
		// 	searchInput.addEventListener('input', function () {
		// 		console.log(searchInput.value)
		// 	})
		// }

// /search====================