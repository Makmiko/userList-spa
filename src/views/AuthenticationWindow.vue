<template>
    <div id="AuthenticationWindow">
        <Authentication :users="allUsers" />
    </div>
</template>

<script>
    import Authentication from '@/components/Authentication';

    export default {
        name: 'AuthenticationWindow',

        components: {
            Authentication
        },
        computed: {
            allUsers() {
                return this.$store.getters.allUsers;
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>