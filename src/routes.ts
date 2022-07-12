import FootballIndex from "./modules/football/index.vue";
import Index from "./index.vue";
import * as VueRouter from "vue-router";

const routes = [
    { path: "/", name: "index", component: Index },
    // Football module
    { path: "/football", name: "football", component: FootballIndex },
];

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
});