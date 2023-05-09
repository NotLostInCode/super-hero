// импортируем CSS стили
import css from './css/style.css';

// импортируем стили для header и footer компонентов
import './components/header/header.style.css';
import './components/footer/footer.style.css';

// импортируем функции скриптов для header и footer
import headerScript from './components/header/header';
import footerScript from './components/footer/footer';

// находим элементы header и footer по атрибуту data-component
const header = document.querySelector('[data-component="header"]');
const footer = document.querySelector('[data-component="footer"]');

// если элемент header существует, вызываем функцию headerScript с элементом header в качестве аргумента
if (header) {
  headerScript(header);
}

// если элемент footer существует, вызываем функцию footerScript с элементом footer в качестве аргумента
if (footer) {
  footerScript(footer);
}
