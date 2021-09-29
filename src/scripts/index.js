import 'regenerator-runtime';
import './styles/main.css';
import './styles/detail.css';
import './styles/hamburgers.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.nav_list'),
  list: document.querySelectorAll('ul li a'),
  content: document.querySelector('section#explore'),
});

const loader = document.querySelector('.loading');

window.addEventListener('hashchange', async () => {
  loader.style.display = 'flex';
  await app.renderPage();
  loader.style.display = 'none';
});

window.addEventListener('load', async () => {
  loader.style.display = 'block';
  await app.renderPage();
  loader.style.display = 'none';
  swRegister();
});
