import '../style/style.css'
import md5 from 'js-md5'

const spoilerHeaders = document.querySelectorAll('.spoiler__header')




//test header
const element = document.getElementById("animate");

if (element) {
	// reset the transition by...
	element.addEventListener("click", function(e) {
		e.preventDefault;

		console.log('element', element.classList);

		// removing the class
		element.classList.remove("run-animation");

		// triggering reflow
		void element.offsetWidth;

		// and re-adding the class
		element.classList.add("run-animation");
	}, false);
}

//  test header

spoilerHeaders.forEach((spoilerHeader) => {
	spoilerHeader.addEventListener('click', () => {
		const spoilerContent = spoilerHeader
			.closest('.character-description__spoiler')
			.querySelector('.spoiler__content')
		spoilerContent.classList.toggle('visible')
	})
})



// search====================

const searchingResultsShell = document.querySelector(
	'.searching-results__shell'
)
const searchInput = document.querySelector('.search__input')

const publicKey = 'dcf493d56816d73d4ae6a5645dcbb219'
const privateKey = 'a01ebb5323b7bcfb24739f70ee22f56726f7f0e4'
const timestamp = new Date().getTime().toString()
const hash = md5(timestamp + privateKey + publicKey)

const loadHeroes = async (searchHeroes) => {
	const apiUrl = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchHeroes}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
	try {
		const response = await fetch(apiUrl)
		const data = await response.json()
		displayHeroesList(data.data.results)
	} catch (error) {
		console.error('Ошибка при загрузке героев:', error)
	}
}

const displayHeroesList = (heroes) => {
	searchingResultsShell.innerHTML = ''

	heroes.forEach((hero) => {
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
}

const findHeroes = () => {
	let searchHeroes = searchInput.value.trim()
	if (searchHeroes.length > 0) {
		searchingResultsShell.classList.add('show__results')
		searchingResultsShell.classList.remove('hide__results')
		loadHeroes(searchHeroes)
	} else {
		searchingResultsShell.classList.add('hide__results')
		searchingResultsShell.classList.remove('show__results')
	}
}

searchInput.addEventListener('input', findHeroes)

// /search====================


