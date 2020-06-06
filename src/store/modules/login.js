export default {
    state: {
        user: localStorage.getItem('user') || '',
    },
    getters: {
        isAuth(state) {
            return !!state.user;
        },
        user(state) {
            return state.user;
        }
    },
    actions: {
        updateUser(context, user) {
            context.commit('updateUser', user);
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user;
        }
    }
}