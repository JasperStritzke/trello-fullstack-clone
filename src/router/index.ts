import {createRouter, createWebHistory} from "vue-router";

import BoardsPage from "../views/boards/BoardsPage.vue"

const routes = [
    {
        path: "/", component: BoardsPage,
        meta: {
            backgroundClass: "bg-gray-100"
        }
    },
    {
        path: "/board/:id", component: () => import("../views/board/Board.vue"),
        meta: {}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
