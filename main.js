// Centrally control the header for all pages

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div>Unit Converter</div>
            </header>
        `
    }
}

customElements.define("my-header", MyHeader);

// Centrally control the footer for all pages

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="copyright">Copyright &copy; 2022 zedchamaa</div>
            </footer>
        `
    }
}

customElements.define("my-footer", MyFooter)

// Centrally control the navigation for all pages

class MyNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Temperature</a></li>
                    <li><a href="volume.html">Volume</a></li>
                    <li><a href="#">Weight</a></li>
                    <li><a href="#">Time</a></li>
                </ul>
            </nav>
        `
    }
}

customElements.define("my-nav", MyNav)