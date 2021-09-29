<template>
    <v-app-bar app clipped-left color="blue-grey" dark>
        <v-app-bar-nav-icon @click.stop="toggleMenu()"></v-app-bar-nav-icon>
        <v-toolbar-title>Nest Vue</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="openProfile" class="ma-2" text icon>
            <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn @click="logOut()" icon>
            <v-icon>mdi-export</v-icon>
        </v-btn>
        <profile-modal :dialog="dialog" :close="closeProfile" />
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ProfileModal from './ProfileModal.vue';
import { logOut } from '../utils/auth';

@Component({components: {'profile-modal': ProfileModal}})
export default class MainHeader extends Vue {

    @Prop() toggleMenu!: () => void;

    dialog = false;
    logOut = logOut;

    closeProfile(): void {
        this.dialog = false;
    }

    openProfile(): void {
        this.dialog = true;
    }

}
</script>
