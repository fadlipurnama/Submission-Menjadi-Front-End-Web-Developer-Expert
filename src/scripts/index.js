import 'regenerator-runtime';
import App from './views/app';
import swRegister from './utils/sw-register';
import { createLoadingSpinerTemplate } from './views/templates/loading-creator';
// import WebSocketInitiator from './utils/initiators/websocket-initiator';
// import CONFIG from './globals/config';
import '../styles/index.css';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main-content'),
  itemNavigate: document.querySelectorAll('.nav-item'),
});

window.addEventListener('hashchange', () => {
  const LoadingSpinerTemplate = createLoadingSpinerTemplate();
  const content = document.querySelector('#main-content');

  content.innerHTML = LoadingSpinerTemplate;
  setTimeout(() => {
    app.renderPage();
  }, 3500);
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
