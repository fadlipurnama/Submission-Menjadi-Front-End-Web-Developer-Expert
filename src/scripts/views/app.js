import DrawerInitiator from '../utils/initiators/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

import './templates/item-resto-creator';
import './templates/detail-info-resto-creator';
import './templates/detail-review-resto-creator';
import './templates/detail-menu-drink-creator';
import './templates/detail-menu-food-creator';
import './templates/component/appbar';
import './templates/hero-content-creator';
import './templates/component/footer-element';
import './templates/component/skip-link-element';
import './templates/favorite-button-creator';

class App {
  constructor({
    button, drawer, content, itemNavigate,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._itemNavigate = itemNavigate;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      itemNavigate: this._itemNavigate,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const pageRender = await page.render();

    this._content.innerHTML = pageRender;
    await page.afterRender();

    const skipLinkElemement = document.querySelector('.skip-link');
    skipLinkElemement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
