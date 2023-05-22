export default function pageScript(page) {

    const searchHeroesInput = document.querySelector('.search-heroes')
    const searchList = document.querySelector('.search-list')
    const searchListItem = document.querySelector('search-list-item')

      async function loadHeroes(searchHeroes) {
      const URL = `https://www.superheroapi.com/api.php/553827756740754/search/${searchHeroes}`
      const response = await fetch(URL)
      const data = await response.json()
      if (data.response == 'success') displayHeroesList(data.results)
      console.log(data)
    }


    // Ищем героя
    function findHeroes() {
      let searchHeroes = (searchHeroesInput.value).trim()
      if (searchHeroes.length > 0) {
        searchList.classList.remove('hide-search-list')
        loadHeroes(searchHeroes)
      } else {
        searchList.classList.add('hide-search-list')
      }
    }

    // Показываем список героев
    function displayHeroesList(heroes) {
      searchList.innerHTML = ''
     for (let i = 0; i < heroes.length; i++) {
      let heroesListItem = document.createElement('div')
      heroesListItem.classList.add('search-list-item')


      heroesListItem.innerHTML = `
      <div class="search-item-thumbnail">
        <img src="${heroes[i].image.url}" alt="">
      </div>
      <div class="search-item-info">
        <h3>${heroes[i].name}</h3>
      </div>
      `
      searchList.appendChild(heroesListItem)
     }

    }

    searchHeroesInput.addEventListener('keyup', findHeroes)
    searchHeroesInput.addEventListener('click', findHeroes)

}
