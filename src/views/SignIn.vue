<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card>
                <v-card-title class="headline">Login</v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field label="Login"
                                  name="login"
                                  type="text"
                                  autocomplete="off"></v-text-field>
                    <v-text-field id="password"
                                  label="Password"
                                  name="password"
                                  type="password"
                                  autocomplete="off"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn block color="primary">Login</v-btn>
                </v-card-actions>
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

@Component
export default class SignIn extends Vue {
 
}
</script>
