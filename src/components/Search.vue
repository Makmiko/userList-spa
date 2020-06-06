<template>
    <form action="#" class="searchUsers">
        <input v-on:input="updateSearchUser" type="text" class="searchUsers__searchInput">
        <h2 class="searchUsers__label">Поиск</h2>
    </form>
</template>

<script>
    export default {
        name: "search",
        methods: {
            updateSearchUser(event) {
                this.$store.dispatch('updateSearchUser', event);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/searchUser";
</style>