import './styles.css';
import items from './menu.json';
import itemsTemplate from './items-template.hbs';

const refs = {
  bodyRef: document.querySelector('body'),
  themeSwitchToggle: document.querySelector('.theme-switch__toggle'),
  menu: document.querySelector('.js-menu'),
};

const markup = itemsTemplate(items);
refs.menu.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');

function darkThemeSetter() {
  if (savedTheme === Theme.DARK) {
    refs.themeSwitchToggle.checked = true;
  }
}

if (savedTheme) {
  refs.bodyRef.classList.add(savedTheme);
  darkThemeSetter();
}

refs.themeSwitchToggle.addEventListener('change', toggleSwitchHadler);

function toggleSwitchHadler() {
  if (this.checked) {
    refs.bodyRef.classList.remove(Theme.LIGHT);
    refs.bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.bodyRef.classList.remove(Theme.DARK);
    refs.bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
