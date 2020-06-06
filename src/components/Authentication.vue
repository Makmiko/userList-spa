<template>
    <form  class="authForm">
        <h4 class="authForm__title">Login</h4>
        <div>
            <label for="username">E-Mail Address</label>
            <input class="authForm__inp" id="username" type="text" v-model="username" pattern="^[\w.@+-]+$" required autofocus>
        </div>
        <div>
            <label for="password">Password</label>
            <input class="authForm__inp" id="password" type="password" v-model="password" pattern="^[\w.@+-]+$" required>
        </div>
        <div>
            <button class="authForm__button" type="submit" @click.prevent="authenticateUser">
                Login
            </button>
        </div>
    </form>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "Authentication",
        props: ['users'],
        data() {
            return {
                username: '',
                password: '',
            }
        },
        computed: mapGetters(['isAuth']),
        methods: {
            ...mapActions(['updateUser']),
            authenticateUser() {
                this.invalidElement('#username');
                this.invalidElement('#password');
                this.users.forEach((user) => {
                    if (user.username === this.username) {
                        this.validElement('#username');
                    }
                    if (user.password === this.password) {
                        this.validElement('#password');
                    }
                    if (user.username === this.username) {
                        localStorage.setItem('user', this.username);
                        localStorage.setItem('isAuth', "true");
                        this.updateUser(user.username);
                    }
                });
                if (this.isAuth) {
                        if (this.$route.params.nextUrl != null) {
                            this.$router.push(this.$route.params.nextUrl)
                        } else {
                            this.$router.push('/userList');
                        }
                }
            },
            isValidLogin() {
                if (this.username.match("^[\\w.@+-]+$")) {
                    return true;
                } else {
                    this.invalidElement("#username");
                    return false;
                }
            },
            isValidPassword() {
                if (this.password.match("a+")) {
                    this.validElement("#password");
                    return true;
                } else {

                    this.invalidElement("#password");
                    return false;
                }
            },
            validElement(selector) {
                const elem = document.querySelector(selector);
                elem.classList.remove("authForm__inp_invalid");
            },
            invalidElement(selector) {
                const elem = document.querySelector(selector);
                elem.classList.add("authForm__inp_invalid");
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/authentication";
</style>