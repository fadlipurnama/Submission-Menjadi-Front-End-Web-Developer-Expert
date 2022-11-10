class Navbar extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
        this.innerHTML = `
        <nav id="drawer" class="navbar">
          <ul class="nav-list">
            <li> 
              <a href="index.html">Home</a>
            </li>
            <li> 
              <a href="#">Favorite</a>
            </li>
            <li> 
              <a href="https://www.linkedin.com/in/fadli-purnama/" target="_blank" rel="noopener">About</a>
            </li>
          </ul>
        </nav>`
    }
}

    
customElements.define('nav-bar', Navbar);