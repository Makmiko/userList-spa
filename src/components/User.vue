<template>
    <div v-if="searchMatch()" class="user">
        <img class="user__userIcon" src="../assets/svg/user.svg" alt="userIcon">
        <div class="user__data">
            <div v-if="this.isUserActive" class="user_activeUser"></div>
            <span class="user__id">
                id: {{ user.id }}
            </span>
            <span class="user__username">
                Логин: {{ user.username }}
            </span>
            <span v-if="user.first_name && user.last_name">
                ФИО: {{user.first_name + " " + user.last_name }}
            </span>
            <span v-if="this.user.last_login" class="last-login">
                Был в сети: {{ this.lastLogin }}
            </span>
        </div>
    </div>
</template>

<script>
        import moment from "moment"
    export default {
        name: "User",
        props: ['user', 'searchUser'],
        computed: {
            lastLogin() {
                let date = moment(this.user.last_login).locale('ru');
                return date.format('L в LT');
            },
            isUserActive() {
                return !!this.user.is_active;
            },
        },
        methods: {
            searchMatch() {
                if (this.user.username.toLowerCase().match(this.searchUser.toLowerCase()) || !this.searchUser) return true;
                return false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/user";
</style>