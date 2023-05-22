export default function pageScript(page) {
  const searchHeroesInput = document.querySelector(".search-heroes");
  const searchList = document.querySelector(".search-list");
  // Загружаем данные о героях
  async function loadHeroes(searchHeroes) {
    const URL = `https://www.superheroapi.com/api.php/553827756740754/search/${searchHeroes}`;
    const response = await fetch(URL);
    const data = await response.json();

    // Если запрос успешен, отображаем список героев
    if (data.response == "success") displayHeroesList(data.results);
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
  }

  // Слушаем события нажатия клавиш и клика в поле поиска
  searchHeroesInput.addEventListener("keyup", findHeroes);
  searchHeroesInput.addEventListener("click", findHeroes);

  // Если клик происходит вне инпута, скрываем список героев
  window.addEventListener("click", (event) => {
    if (event.target.className != "search-heroes") {
      searchList.classList.add("hide-search-list");
    }
  });
}
