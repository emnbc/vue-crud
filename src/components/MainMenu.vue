<template>
    <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>

            <v-list-item :to="item.link" v-for="(item, i) in itemList" :key="i" link>
                <v-list-item-action>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{item.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
            <v-divider class="mt-2"></v-divider>
        <v-list dense>
            <v-subheader class="ml-2">Information</v-subheader>
            <v-list-item to="/about" link>
                <v-list-item-action>
                    <v-icon>mdi-information</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>About</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainMenu extends Vue {
    drawer: boolean | null = null;

    itemList = [
        { icon: 'mdi-home', text: 'Home', link: '/home'},
        { icon: 'mdi-view-dashboard', text: 'Users', link: '/users'},
    ];

    toggleMenu(): void {
        this.drawer = !this.drawer;
    }
}
</script>
