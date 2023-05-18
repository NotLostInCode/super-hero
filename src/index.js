// импортируем CSS стили
import css from './css/style.css';

// Обнуляющие стили
import reset from './css/reset.css'

// Используем fetchData из api.js внутри компонента

// импортируем стили для header и footer компонентов
import './components/header/header.style.css';
import './components/footer/footer.style.css';
import './components/main/main.style.css'
import '../pages/myPages/myPage.style.css'

// импортируем функции скриптов для header и footer
import headerScript from './components/header/header';
import footerScript from './components/footer/footer';
import mainScript from './components/main/main'
import pageScript from '../pages/myPages/myPage'

// находим элементы header и footer по атрибуту data-component
const header = document.querySelector('[data-component="header"]');
const footer = document.querySelector('[data-component="footer"]');
const main = document.querySelector('[data-component="main"]');
const page = document.querySelector('[data-component="page"]');


// если элемент header существует, вызываем функцию headerScript с элементом header в качестве аргумента
if (header) {
  headerScript(header);
}

// если элемент footer существует, вызываем функцию footerScript с элементом footer в качестве аргумента
if (footer) {
  footerScript(footer);
}

if (main) {
  mainScript(main)
}

if (page) {
  pageScript(page)
}