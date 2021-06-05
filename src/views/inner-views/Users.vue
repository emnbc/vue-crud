<template>
    <v-data-table   :headers="headers"
                    :items="users"
                    :items-per-page="10"
                    :server-items-length="34"
                    :loading="loadingPage"
                    @update:options="setPagination"
                    class="elevation-1">
    </v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { UsersModule } from '@/store/modules/users';
import { DataOptions } from 'vuetify';

@Component
export default class Users extends Vue {

    loadingPage = false;
    headers = [
        { text: 'ID', align: 'start', sortable: false, value: 'id' },
        { text: 'Username', value: 'username' },
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' }
    ];

    mounted() {
        this.fetchData();
    }

    setPagination(pagination: DataOptions) {
        this.$store.commit('users/SET_PAGINATION', pagination);
        this.fetchData();
    }

    async fetchData() {
        this.loadingPage = true
        await this.$store.dispatch('users/FETCH_USERS');
        this.loadingPage = false;
    }

    get users() {
        return UsersModule.usersData;
    }
 
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>