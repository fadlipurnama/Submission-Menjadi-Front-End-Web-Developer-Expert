class FooterElementTemplate extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>Copyright © 2022 - CekResto App</p>
      `;
  }
}

customElements.define('footer-element', FooterElementTemplate);
