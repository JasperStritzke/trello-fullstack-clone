import {createStore} from "vuex";

const store = createStore({
    state() {
        return {}
    },
    getters: {
        isLoggedIn(): boolean {
            return true
        }
    }
})

export default store;
