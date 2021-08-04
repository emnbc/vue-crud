<template>
    <v-dialog v-model="dialog" @click:outside="hide(false)" max-width="480">
      <v-card>
        <v-form @submit.prevent="submit">

          <v-card-title class="text-h5">
            <span v-if="user.id">Edit User</span>
            <span v-if="!user.id">Create User</span>
          </v-card-title>

          <v-card-text>

                <v-text-field label="First Name"
                              name="firstName"
                              type="text"
                              v-model="user.firstName"
                              autocomplete="off"></v-text-field>

                <v-text-field label="Last Name"
                              name="lastName"
                              type="text"
                              v-model="user.lastName"
                              autocomplete="off"></v-text-field>
                
                <v-menu v-model="datepicker"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="user.birthDate"
                                  label="Birth Date"
                                  append-icon="mdi-calendar"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="user.birthDate" @input="datepicker = false"></v-date-picker>
                </v-menu>

                <v-text-field label="Email"
                              name="email"
                              type="text"
                              v-model="user.email"
                              autocomplete="off"></v-text-field>
                
                <v-text-field label="Username"
                              name="username"
                              type="text"
                              v-model="user.username"
                              autocomplete="off"></v-text-field>

                <v-text-field label="Password"
                              name="password"
                              type="password"
                              v-model="user.password"
                              autocomplete="off"></v-text-field>

          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="hide(false)">
              Cancel
            </v-btn>

            <v-btn text type="submit">
              <span v-if="user.id">Edit</span>
              <span v-if="!user.id">Create</span>
            </v-btn>
          </v-card-actions>

        </v-form>
      </v-card>
    </v-dialog>

</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { UsersModule } from '@/store/modules/users';
import { User } from '@/models/user';
import request from '@/utils/request';

@Component
export default class UserModal extends Vue {

  datepicker = false;

  @Prop() dialog!: boolean;
  @Prop() user!: User;
  @Prop() hide!: (isRefrash: boolean) => void;

  submit() {
    request({
      url: '/users',
      method: 'post',
      data: this.user
    }).then(() => {
      this.hide(true);
    });
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>