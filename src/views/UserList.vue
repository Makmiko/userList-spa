<template>
    <div id="userList">
        <div class="topMenu">
            <h2 class="title">Список пользователей</h2>
            <Search />
        </div>
        <div class="userContainer">
            <User v-for="(user, index) in allUsers" :key="index" :searchUser="searchUser" :user="user"/>
        </div>
    </div>
</template>


<script>
    import User from "@/components/User";
    import Search from "@/components/Search";

    export default {
        name: "UserList",
        computed: {
            allUsers() {
                let allUsers = this.$store.getters.allUsers;
                return allUsers.sort((user1, user2) => {
                    if(user1.id > user2.id) return 1;
                    if(user1.id === user2.id) return 0;
                    if(user1.id < user2.id) return -1;
                });
            },
            searchUser() {
                return this.$store.getters.searchUser;
            }
        },
        components: {
            User,
            Search
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/userList";
</style>