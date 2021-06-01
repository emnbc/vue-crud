<template>
    <v-data-table :headers="headers"
                    :items="users"
                    :items-per-page="10"
                    class="elevation-1">
    </v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';
import { UsersModule } from '@/store/modules/users';

@Component
export default class Users extends Vue {

    headers = [
        { text: 'ID', align: 'start', sortable: false, value: 'id' },
        { text: 'Username', value: 'username' },
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' }
    ];

    mounted() {
        setTimeout(() => {
            // store.dispatch('CLEAR_USERS');
            store.dispatch('FETCH_USERS');
        }, 2000);
    }

    get users() {
        return UsersModule.users;
    }
 
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>