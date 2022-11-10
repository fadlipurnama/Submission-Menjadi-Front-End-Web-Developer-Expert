class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <footer tabindex="0">
            <div class="footer" tabindex="0">
                <p>Copyright © 2022 - CekResto App</p>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('custom-footer', CustomFooter);
  


