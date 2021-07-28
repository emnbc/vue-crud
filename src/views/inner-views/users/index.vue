<template>
    <div>
        <div class="mb-4">
            <v-btn @click="createUser()" color="primary">
                Create
            </v-btn>
            <v-btn @click="fetchData()" class="ml-4">
                Refresh
            </v-btn>
        </div>
        <v-data-table   :headers="headers"
                        :items="users"
                        :server-items-length="total"
                        :loading="loadingPage"
                        :options.sync="pagination"
                        class="elevation-1">
        </v-data-table>
        <user-modal :dialog="dialog" :close="closeUserModal" :user="selectedUser" />
    </div>

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { UsersModule } from '@/store/modules/users';
import UserModal from './components/user-modal.vue'
import { User } from '@/models/user';

@Component({ components: {'user-modal': UserModal}})
export default class Users extends Vue {

    loadingPage = false;
    dialog = false;
    selectedUser = new User({});
    pagination = {};
    headers = [
        { text: 'ID', align: 'start', value: 'id' },
        { text: 'Username', value: 'username' },
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' }
    ];

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

    createUser() {
        this.selectedUser = new User({});
        this.dialog = true;
    }

    closeUserModal() {
        this.dialog = false;
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