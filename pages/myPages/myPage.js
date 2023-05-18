export default function pageScript(page) {
  const input = document.querySelector(".form__search");
  const buttonEl = document.querySelector(".form__btn");
  const form = document.querySelector(".form");
  const container = document.querySelector(".bla");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = input.value;

    const searchUrl = `https://www.superheroapi.com/api.php/553827756740754/search/${inputValue}`;

    return fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {


        function renderHeroes() {
          const div = document.createElement("div");
          const img = document.createElement("img");
          const result = data.results[0].image.url;
          img.src = result;
          container.appendChild(div);
          div.appendChild(img);
        }
        renderHeroes();

        // console.log(data.results[1])
      })
      .catch((error) =>
        console.log("Ошибка при получение API в myPage.js", error)
      );
  });
}