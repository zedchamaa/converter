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

customElements.define("my-footer", MyFooter);

// Centrally control the navigation for all pages

class MyNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Temperature</a></li>
                    <li><a href="volume.html">Volume</a></li>
                    <li><a href="weight.html">Weight</a></li>
                    <li><a href="time.html">Time</a></li>
                    <li><a href="currency.html">Currency</a></li>
                </ul>
            </nav>
        `
    }
}

customElements.define("my-nav", MyNav);

// Centrally control the clear all button for all pages

class ClearAll extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <button>Clear All</button>
        `
    }
}

customElements.define("clear-all", ClearAll);

// Clear input fields when "Clear All" button is clicked

let btnClear = document.querySelector("button");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", () => {
    inputs.forEach(input => input.value = "");
});
