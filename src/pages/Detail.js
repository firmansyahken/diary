import "../components/Navbar.js"
import "../components/Footer.js"
import "../components/Socials.js"
import { API_KEY, BASE_API } from "../utils/Constant.js"
import { ScrollToTop } from "../utils/ScrollToTop.js"

export default class Detail {
    constructor(id) {
        this.uid = id
        this.banner = "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

    async fetchData() {
        const getData = await fetch(BASE_API+`/content/blogpost/${this.uid}`, {
            method: "GET",
            headers: {
              "X-AUTH-TOKEN": API_KEY
            } 
        })
        const response = await getData.json()
        return response
    }

    async render(){        
        const data = await this.fetchData()
        ScrollToTop()

        return `
            <navbar-component></navbar-component>
                <div class="info-content">
                    <h1 class="title-content">${data.title}</h1>
                    <p>Wahyudi Firmansyah</p>
                </div>
                <img src="${data.thumbnail}" class="thumbnail"/>
                <div class="content-container">
                    <div class="blog-content">
                        ${marked.parse(data.blog)}
                    </div>
                    <social-component></social-component>
                </div>
            <footer-component></footer-component>
        `
    }
}
    