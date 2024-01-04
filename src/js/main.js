import '../style/style.css'

// import md5 from 'js-md5'

// const publicKey = 'dcf493d56816d73d4ae6a5645dcbb219'
// const privateKey = 'a01ebb5323b7bcfb24739f70ee22f56726f7f0e4'
// const timestamp = new Date().getTime().toString()
// const hash = md5(timestamp + privateKey + publicKey)
// const apiUrl = `https://gateway.marvel.com/v1/public/characters?limit=20&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`

// fetch(apiUrl)
// 	.then(response => {
// 		if (!response.ok) {
// 			throw new Error(`Could not fetch ${apiUrl}, status: ${response.status}`)
// 		}
// 		return response.json()
// 	})
// 	.then(data => console.log(data))
// 	.catch(error => console.error(error))

const spoilerHeaders = document.querySelectorAll('.spoiler__header')

spoilerHeaders.forEach(spoilerHeader => {

	spoilerHeader.addEventListener('click', (e)=> {
		if (e.target === spoilerHeader) {
            let spoilerContent = document.querySelector('.spoiler__content')
			spoilerContent.classList.toggle('visible')
		}
	})

})
