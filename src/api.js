export function fetchData() {
  const apiUrl = "https://www.superheroapi.com/api.php/553827756740754/1";
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("Ошибка при получение API в api.js", error));
}
