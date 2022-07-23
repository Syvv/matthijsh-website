import FootballIndex from "./components/football/index.vue";
import Index from "./index.vue";
import AboutMeIndex from "./components/about/index.vue";
import * as VueRouter from "vue-router";

const routes = [
    { path: "/", name: "index", component: Index },
    // Football module
    { path: "/football", name: "football", component: FootballIndex },
    // About me module
    { path: "/about-me", name: "aboutMe", component: AboutMeIndex }
];

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
});