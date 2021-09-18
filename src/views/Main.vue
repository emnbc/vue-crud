<template>
  <v-app id="inspire">

      <main-menu ref="menu" />

      <main-header :toggleMenu="toggleMenu" />

      <v-main>
        <v-container class="pa-4" fluid>

          <router-view />

        </v-container>
      </v-main>

      <v-footer color="blue-grey" app dark>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/MainMenu.vue'
import MainHeader from '@/components/MainHeader.vue'

@Component({
  components: {
    'main-menu': MainMenu,
    'main-header': MainHeader
  }
})
export default class Main extends Vue {

  created(): void {
    this.$vuetify.theme.dark = false;
  }

  toggleMenu(): void {
    (this.$refs.menu as MainMenu).toggleMenu();
  }

}
</script>
