import "../components/Navbar.js"
import "../components/Hero.js"
import "../components/Card.js"
import "../components/Footer.js"
import { API_KEY, BASE_API } from "../utils/Constant.js"
import { ScrollToTop } from "../utils/ScrollToTop.js"

export default class Blog {
    constructor() {
    }

    async fetchData() {
        const getData = await fetch(`${BASE_API}/content/blogpost`, {
            method: "GET",
            headers: {
              "X-AUTH-TOKEN": API_KEY
            } 
        })
        const response = await getData.json()
        return response.data
    }

    async render() {
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
            <navbar-component active="Blog"></navbar-component>
            <div class="wrapper">
                <hero-component
                    name="Welcome to Blog"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quis animi nam harum architecto unde impedit veniam maxime odit sequi."
                ></hero-component>
            </div>
            <div class="wrapper">
                <div class="layout-card">
                    ${templateCard}
                </div>
            </div>
            <footer-component></footer-component>
        `
    }
}