class AppBarTemplate extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="app-bar__brand">
          <a href="#index.html">
            <i class="fas fa-utensils"></i> 
            CekResto.
          </a>
        </div>
        <div id="container-btn">
          <button aria-label="list menu" id="hamburgerButton" class="fas fa-bars" tabindex="0"></button>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul class="nav-list">
            <li class="nav-item"> 
              <a href="#/home">Home</a>
            </li>
            <li class="nav-item"> 
              <a href="#/favorite">Favorite</a>
            </li>
            <li class="nav-item"> 
              <a href="https://www.linkedin.com/in/fadli-purnama/" target="_blank" rel="noopener">About</a>
            </li>
          </ul>
        </nav>`;
  }
}

customElements.define('app-bar', AppBarTemplate);
