<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card>
                <v-form @submit.prevent="login">
                  <v-card-title class="headline">Login</v-card-title>
                  <v-card-text>
                    
                    <v-text-field label="Login"
                                  name="login"
                                  type="text"
                                  v-model="auth.username"
                                  autocomplete="off"></v-text-field>
                    <v-text-field id="password"
                                  label="Password"
                                  name="password"
                                  type="password"
                                  v-model="auth.password"
                                  autocomplete="off"></v-text-field>
                    
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  block
                            type="submit"
                            color="primary">Login</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '@/router';
import request from '@/utils/request';
import { setToken } from '@/utils/auth';

@Component
export default class SignIn extends Vue {

  auth: any = {
    username: null,
    password: null
  };
  loadingLogin = false;
  loginError: string | null = null;

  login() {
    this.loadingLogin = true;
    this.loginError = null;

    request({
      url: '/auth/login',
      method: 'post',
      data: this.auth
    }).then((res) => {
      const token = res.data['accessToken'];
      this.loadingLogin = false;
      if (token) {
        setToken(token);
        router.replace('/');
      }
    }).catch(() => {
      this.loadingLogin = false;
      this.loginError = 'Ошибка авторизации';
    });
    }
 
}
</script>
