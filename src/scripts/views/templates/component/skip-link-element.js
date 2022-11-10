class SkipLinkElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <a href="#" class="skip-link" tabindex="1">Menuju ke konten utama<span class="material-icons"
      aria-hidden="true">skip_next</span></a>
      `;
  }
}

customElements.define('skip-link-element', SkipLinkElement);
