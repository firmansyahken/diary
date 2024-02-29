import "../components/Navbar.js"
import "../components/Hero.js"
import "../components/Card.js"
import "../components/Footer.js"
import { ScrollToTop } from "../utils/ScrollToTop.js"
import { API_KEY, BASE_API } from "../utils/Constant.js"

export default class Home {
    constructor() {
        this.banner = "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

    async fetchData() {
        const getData = await fetch(`${BASE_API}/content/blogpost?limit=4`, {
            method: "GET",
            headers: {
              "X-AUTH-TOKEN": API_KEY
            } 
        })
        const response = await getData.json()
        return response.data
    }

    async render() {
        try {
            const data = await this.fetchData()
            ScrollToTop()
            let templateCard = ""
    
            data.map(post => {
                templateCard += `
                    <card-component
                        uid="${post.id}"
                        name="${post.title}"
                        img="${post.thumbnail}"
                        time="${post.internal.createdAt}"
                    >
                    </card-component>
                `
            })
    
            return `
                <navbar-component active="Home"></navbar-component>
                <div class="wrapper">
                    <hero-component
                        name="Diary Life Sebagai Pelajar Informatika"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quia, numquam est architecto placeat sequi recusandae quibusdam aliquam tempore accusantium."
                    ></hero-component>
                </div>
                <img src="${this.banner}" class="banner"/>
                <div class="wrapper">
                    <div class="layout-card">
                        ${templateCard}
                    </div>
                </div>
                <footer-component></footer-component>
            `
        } catch (error) {
            return `
                <h1>Error</h1>
            `
        }
    }
}