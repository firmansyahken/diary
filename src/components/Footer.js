class Footer extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="footer-about">
                    <h1>Tentangku</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quia, numquam est architecto placeat sequi recusandae.</p>
                </div>
                <div class="footer-media">
                    <div>
                        <h1>Halaman</h1>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1>Social Media</h1>
                        <ul>
                            <li><a>Instagram</a></li>
                            <li><a>Github</a></li>
                            <li><a>Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define("footer-component", Footer)