export default function pageScript(page) {
  const searchHeroesInput = document.querySelector(".search-heroes");
  const searchList = document.querySelector(".search-list");
  const detailedMenu = document.querySelector(".detailed-list");
  const detailedInfo = document.querySelector(".detailed-info");
  // Загружаем данные о героях
  async function loadHeroes(searchHeroes) {
    const URL = `https://www.superheroapi.com/api.php/553827756740754/search/${searchHeroes}`;
    const response = await fetch(URL);
    const data = await response.json();

    // Если запрос успешен, отображаем список героев
    if (data.response == "success") {
      displayHeroesList(data.results);

    }
  }

  // Поиск героев
  function findHeroes() {
    let searchHeroes = searchHeroesInput.value.trim();

    // Если введено значение, отображаем список героев
    if (searchHeroes.length > 0) {
      searchList.classList.remove("hide-search-list");
      loadHeroes(searchHeroes);
    } else {
      // Если значение пустое, скрываем список героев
      searchList.classList.add("hide-search-list");
    }
  }

  // Показываем список героев
  function displayHeroesList(heroes) {
    searchList.innerHTML = "";

    // Создаем элементы списка для каждого героя и добавляем их в контейнер
    for (let i = 0; i < heroes.length; i++) {
      let heroesListItem = document.createElement("div");
      heroesListItem.dataset.id = heroes[i].id;
      heroesListItem.classList.add("search-list-item");

      heroesListItem.innerHTML = `
      <div class="search-item-thumbnail">
        <img src="${heroes[i].image.url}" alt="">
      </div>
      <div class="search-item-info">
        <h3>${heroes[i].name}</h3>
      </div>
    `;

      searchList.appendChild(heroesListItem);
    }
    loadHeroesDetails();
  }

  function loadHeroesDetails() {
    const searchListHeroes = searchList.querySelectorAll(".search-list-item");

    searchListHeroes.forEach((heroes) => {
      heroes.addEventListener("click", async () => {
        // console.log(heroes.dataset.id)
        searchList.classList.add("hide-search-list");
        searchHeroesInput.value = "";

        const result = await fetch(`https://www.superheroapi.com/api.php/553827756740754/${heroes.dataset.id}`)
        const heroDetails = await result.json()
        displayHeroesDetails(heroDetails)
        // console.log(heroDetails)
      });
    });
  }

  function displayHeroesDetails(details) {
    detailedInfo.innerHTML = `
    <img src="${details.image.url}" alt="" class="detailed__image">
    `

   detailedMenu.innerHTML = `
  <ul class="detailed-powerstats detailed-menu " data-tab-content="powerstats">
    <li class="detailed-menu-item"><b>intelligence: </b>${details.powerstats.intelligence}</li>
    <li class="detailed-menu-item"><b>strength: </b>40</li>
    <li class="detailed-menu-item"><b>speed: </b>29</li>
    <li class="detailed-menu-item"><b>durability: </b>55</li>
    <li class="detailed-menu-item"><b>power: </b>63</li>
    <li class="detailed-menu-item"><b>combat: </b>90</li>
  </ul>
  `
  }

  // function displayHeroesDetails () {
  //   detailedMenu.innerHTML = `
  // <ul class="detailed-powerstats detailed-menu " data-tab-content="powerstats">
  //   <li class="detailed-menu-item"><b>intelligence: </b>81</li>
  //   <li class="detailed-menu-item"><b>strength: </b>40</li>
  //   <li class="detailed-menu-item"><b>speed: </b>29</li>
  //   <li class="detailed-menu-item"><b>durability: </b>55</li>
  //   <li class="detailed-menu-item"><b>power: </b>63</li>
  //   <li class="detailed-menu-item"><b>combat: </b>90</li>
  // </ul>

  //   `
  // }
  // Слушаем события нажатия клавиш и клика в поле поиска
  searchHeroesInput.addEventListener("keyup", findHeroes);
  searchHeroesInput.addEventListener("click", findHeroes);

  // Если клик происходит вне инпута, скрываем список героев
  // window.addEventListener("click", (event) => {
  //   if (event.target.className != "search-heroes") {
  //     searchList.classList.add("hide-search-list");
  //   }
  // });

  // Получаем все вкладки и контенты
  // const tabs = document.querySelectorAll('.tab');
  // const tabContents = document.querySelectorAll('.detailed-menu');

  // // Добавляем обработчики событий на каждую вкладку
  // tabs.forEach((tab) => {
  //   tab.addEventListener('click', () => {

  //     const tabId = tab.dataset.tab

  //     tabContents.forEach((content) => {
  //       content.classList.add('hide-detailed-menu');
  //     });

  //     //Обращаемся к атрибуты, на который был произведен клик и делаем только его видимым
  //     const activeContent = document.querySelector(`[data-tab-content="${tabId}"]`);
  //     activeContent.classList.remove('hide-detailed-menu');

  //   });
  // });
}
