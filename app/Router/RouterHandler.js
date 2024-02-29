export default class Router {
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    async init() {
        this.routes = await this.routes;
        window.addEventListener("click", e => {
            if (e.target.matches("[data-link]")) {
                e.preventDefault();
                const path = e.target.dataset.link;
                history.pushState(null, null, path);
                this.handleRoute();
            }
        });
        window.addEventListener("popstate", () => this.handleRoute());
        window.addEventListener("DOMContentLoaded", () => this.handleRoute());
    }

    async handleRoute() {
        let url = window.location.pathname; // Menggunakan pathname untuk mendapatkan jalur URL
        if (url === "/") {
            url = "/";
        }

        let path = this.routes[url];

        // Periksa apakah ada rute yang cocok
        if (!path) {
            // Jika tidak ada rute yang cocok, arahkan ke 404
            window.location.href = "/404/";
            return;
        }

        // Periksa rute dengan parameter dinamis
        let isMatched = false;
        Object.keys(this.routes).forEach(routePath => {
            const regex = new RegExp("^" + routePath.replace(/:\w+/g, "(.+)") + "$");
            const match = url.match(regex);
            if (match) {
                isMatched = true;
                const params = match.slice(1);
                const id = params[0];
                path = this.routes[routePath];
                path.id = id;
            }
        });

        // Render konten sesuai dengan rute yang ditemukan
        if (isMatched) {
            document.title = path.title ? path.title : "";
            document.getElementById("root").innerHTML = await new path.element(path.id).render();
        } else {
            // Jika tidak ada rute yang cocok, arahkan ke 404
            window.location.href = "/404/";
        }
    }
}
