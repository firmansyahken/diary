import Router from "../app/Router/RouterHandler.js";
import Home from "./pages/Home.js";
import Detail from "./pages/Detail.js";
import Blog from "./pages/Blog.js";
import Contact from "./pages/Contact.js";

const routes = {
    "/": { title: "Wahyudi", element: Home },
    "detail/:id": { title: "Blog", element: Detail },
    "blog": { title: "Blog", element: Blog },
    "contact": { title: "Contact", element: Contact }
};

export const route = new Router(routes);
