<template>
    <div id="app">
        <button v-if="isAuth" v-on:click="exit" class="exit">
            <img class="exit__logo" src="./assets/svg/logout.svg" alt="exit">
        </button>
        <router-view/>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'App',
        computed: mapGetters(['isAuth', 'user']),
        methods: {
            ...mapActions(['fetchUsers', 'updateUser']),
            exit() {
                localStorage.setItem('user', '');
                localStorage.setItem('isAuth', 'false');
                this.updateUser('');
                this.$router.push('/authentication');
            }
        },
        async mounted() {
            this.fetchUsers();
        }
    }
</script>

<style lang="scss">
    @import "assets/app.scss";
</style>
