class createHeroContentTemplate extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero" aria-label="Gambar hero">
            <div class="hero-inner">
                <h1 class="hero-title">CekResto.</h1>
                <p class="hero-description">Jika kamu mencari restoran favorite disinilah tempatnya.</p>
            </div>
        </div>
      `;
  }
}

customElements.define('hero-content', createHeroContentTemplate);
