<template>
    <v-data-table   :headers="headers"
                    :items="users"
                    :server-items-length="total"
                    :loading="loadingPage"
                    :options.sync="pagination"
                    class="elevation-1">
                <!--@update:options="setPagination"
                    :items-per-page.sync="initProps.itemsPerPage"
                    :sort-by.sync="initProps.sortBy"
                    :sort-desc.sync="initProps.sortDesc" -->
    </v-data-table>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { UsersModule } from '@/store/modules/users';
import { DataOptions } from 'vuetify';

@Component
export default class Users extends Vue {

    loadingPage = false;
    // initProps = {
    //     itemsPerPage: 10,
    //     sortBy: UsersModule.pagination.sort.column,
    //     sortDesc: UsersModule.pagination.sort.direction === 'asc' ? false : true
    // };
    pagination = {};
    headers = [
        { text: 'ID', align: 'start', value: 'id' },
        { text: 'Username', value: 'username' },
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' }
    ];

    // setPagination(pagination: DataOptions) {
    //     this.$store.commit('users/SET_PAGINATION', pagination);
    //     this.fetchData();
    // }

    async fetchData() {
        this.loadingPage = true
        await this.$store.dispatch('users/FETCH_USERS');
        this.loadingPage = false;
    }

    @Watch('pagination', {deep: true})
    public updateOptions() {
        this.$store.commit('users/SET_PAGINATION', this.pagination);
        this.fetchData();
    }

    get users() {
        return UsersModule.usersData;
    }

    get total() {
        return UsersModule.totalCount;
    }
 
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>