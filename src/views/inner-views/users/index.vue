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
            <template v-slot:[`item.action`]="{ item }">
                <v-btn plain color="primary" @click="editUser(item)">
                    <v-icon left>
                        mdi-pencil
                    </v-icon>
                    Edit
                </v-btn>
            </template>
        </v-data-table>
        <user-modal :dialog="dialog" :hide="closeUserModal" :user="selectedUser" />
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
    selectedUser = new User();
    pagination = {};
    headers = [
        { text: 'ID', align: 'start', value: 'id' },
        { text: 'Username', value: 'username' },
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' },
        { text: '', value: 'action', align: 'right' }
    ];

    async fetchData(): Promise<void> {
        this.loadingPage = true
        await this.$store.dispatch('users/FETCH_USERS');
        this.loadingPage = false;
    }

    @Watch('pagination', {deep: true})
    public updateOptions(): void {
        this.$store.commit('users/SET_PAGINATION', this.pagination);
        this.fetchData();
    }

    createUser(): void {
        this.selectedUser = new User();
        this.dialog = true;
    }

    editUser(user: User): void {
        this.selectedUser = new User(user);
        this.dialog = true;
    }

    closeUserModal(isUpdate: boolean): void {
        this.dialog = false;
        if (isUpdate) {
            this.fetchData();
        }
    }

    get users(): never[] {
        return UsersModule.usersData;
    }

    get total(): number {
        return UsersModule.totalCount;
    }
 
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>