<template>
    <v-dialog v-model="dialog" @click:outside="close(false)" max-width="480">
      <v-card>
        <v-form @submit.prevent="submit" v-model="formValid" ref="formRef">

          <v-card-title class="text-h5">
            <span v-if="isUpdate">Edit User</span>
            <span v-if="!isUpdate">Create User</span>
          </v-card-title>

          <v-card-text>

                <v-text-field label="First Name"
                              name="firstName"
                              :rules="validation.firstName"
                              type="text"
                              v-model="user.firstName"
                              autocomplete="off"></v-text-field>

                <v-text-field label="Last Name"
                              :rules="validation.lastName"
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
                                  :rules="validation.birthDate"
                                  append-icon="mdi-calendar"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="user.birthDate" @input="datepicker = false"></v-date-picker>
                </v-menu>

                <v-text-field label="Email"
                              name="email"
                              :rules="validation.email"
                              type="text"
                              v-model="user.email"
                              autocomplete="off"></v-text-field>
                
                <v-text-field label="Username"
                              name="username"
                              :rules="validation.username"
                              type="text"
                              v-model="user.username"
                              :disabled="isUpdate"
                              autocomplete="off"></v-text-field>

                <v-text-field v-if="!isUpdate"
                              label="Password"
                              name="password"
                              :rules="validation.password"
                              type="password"
                              v-model="user.password"
                              autocomplete="off"></v-text-field>

          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="close(false)">
              Cancel
            </v-btn>

            <v-btn text type="submit">
              <span v-if="isUpdate">Edit</span>
              <span v-if="!isUpdate">Create</span>
            </v-btn>
          </v-card-actions>

        </v-form>
      </v-card>
    </v-dialog>

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { User } from '@/models/user';
import request from '@/utils/request';

@Component
export default class UserModal extends Vue {

  datepicker = false;
  formValid = false;

  validation = {
    firstName: [
      (v: string): boolean | string => !!v || 'First Name is required',
    ],
    lastName: [
      (v: string): boolean | string => !!v || 'Last Name is required',
    ],
    birthDate: [
      (v: string): boolean | string => !!v || 'Birth Date is required',
    ],
    email: [
      (v: string): boolean | string => !!v || 'E-mail is required',
      (v: string): boolean | string => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    username: [
      (v: string): boolean | string => !!v || 'Username is required',
    ],
    password: [
      (v: string): boolean | string => !!v || 'Password is required',
    ],
  };

  @Prop() dialog!: boolean;
  @Prop() user!: User;
  @Prop() hide!: (isRefrash: boolean) => void;

  submit(): void {
    if (this.formValid) {
      const { username, password, ...other } = this.user;
      request({
        url: this.isUpdate ? '/users/' + this.user.id : '/users',
        method: this.isUpdate ? 'put' : 'post',
        data: this.isUpdate ? other : this.user
      }).then(() => {
        this.close(true);
      });
    }
  }

  close(isRefrash: boolean) {
    (this.$refs.formRef as any).reset();
    this.hide(isRefrash);
  }

  get isUpdate(): boolean {
    return !!this.user.id;
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>