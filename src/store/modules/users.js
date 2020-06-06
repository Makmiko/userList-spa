export default {
    state: {
        users: [],
        searchUser: ''
    },
    getters: {
        allUsers(state) {
            return state.users;
        },
        searchUser(state) {
            return state.searchUser;
        }
    },
    actions: {
        async fetchUsers(context) {
            try {
                const res = await fetch('http://emphasoft-test-assignment.herokuapp.com/api/v1/users/', {
                    method: 'GET',
                    headers: new Headers({
                        Authorization: 'Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e',
                        accept: 'application/json',
                        'X-CSRFToken': 'lNssgHhZOlg4drmPdZZ3bbfw9QLjsFxWZhB4B8Zaei43QdZkoHnRSsDC8m0j5Umk'
                    })
                });
                const users = await res.json();
                context.commit('updateUsers', users)
            } catch (e) {
                throw new URIError("Failed to connect to database");
            }
        },
        updateSearchUser(context, event) {
            context.commit('updateSearchUser', event.target.value);
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users;
        },
        updateSearchUser(state, searchUser) {
            state.searchUser = searchUser;
        }
    }
}