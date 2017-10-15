<template>
    <v-app v-if="layGur">
        <v-navigation-drawer class="blue-grey lighten-2 " persistent clipped :mini-variant="miniVariant" v-model="drawer" enable-resize-watcher>
            <v-list class="blue-grey lighten-2">
                <!-- Home -->
                <v-list-tile nuxt to="/" exact>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Beranda
                    </v-list-tile-content>
                </v-list-tile>

                <!-- Home -->
                <!-- Kategori -->
                <v-list-tile nuxt to="/kategori">
                    <v-list-tile-action>
                        <v-icon>class</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Kategori
                    </v-list-tile-content>
                </v-list-tile>

                <!-- Kategori -->
                <!-- profile -->
                <v-list-tile nuxt :to="'/guru/'+dataUser.username+'/profile'">
                    <v-list-tile-action>
                        <v-icon>location_city</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Profile
                    </v-list-tile-content>
                </v-list-tile>

                <!-- profile -->
                <!-- Panduan -->
                <v-list-tile nuxt to="/">
                    <v-list-tile-action>
                        <v-icon>collections_bookmark</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Kelasku
                    </v-list-tile-content>
                </v-list-tile>

                <!-- Panduan -->
                <v-list-tile to="/panduan">
                    <v-list-tile-action>
                        <v-icon>collections_bookmark</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Jadwal Mengajar
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>

        </v-navigation-drawer>
        <!-- Toolbar -->
        <v-toolbar class="green accent-1" fixed>
            <v-toolbar-side-icon @click.stop="drawer = !drawer">
            </v-toolbar-side-icon>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-layout column align-center>
                <v-text-field solo label="Cari materi.." class="search-bar" append-icon="search"></v-text-field>
            </v-layout>
            <v-spacer></v-spacer>

            <div>
                <v-btn icon small>
                    <v-icon>add</v-icon>
                </v-btn>
            </div>

            <div>
                <v-btn icon small>
                    <v-icon>notifications</v-icon>
                </v-btn>
            </div>

            <div class="text-xs-center">
                <v-menu open-on-hover offset-y :close-on-content-click="false" :nudge-width="100">
                    <v-avatar slot="activator" class="grey lighten-4" size="32px">
                        <img src="~/static/v.png">
                    </v-avatar>

                    <v-card>

                        <v-list style="background-color:#eeeeee;">
                            <v-list-tile>
                                <v-list-tile-avatar>
                                    <v-avatar height="40" width="40">
                                        <img src="~/static/v.png" alt="">
                                    </v-avatar>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{dataUser.first_name}} {{dataUser.last_name}}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{dataUser.role}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>

                        <!-- <v-list>
                                                  <v-list-tile>
                                                    <v-avatar size="32px">
                                                      <img size="20px" src="~assets/img/rupiah.png">
                                                    </v-avatar>
                                                    <v-list-tile-content>
                                                      <v-list-tile-title>Saldo: Rp. {{user.saldoUser}},-</v-list-tile-title>
                                                    </v-list-tile-content>
                                                  </v-list-tile>
                                                </v-list> -->
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn outline small class="red--text" @click="logout">keluar</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </div>

        </v-toolbar>
        <!-- Toolbar -->
        <br/>
        <nuxt/>
    </v-app>
</template>

<script>
import Teacher from '~/components/teachers_page/index.vue'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
    middleware: 'authenticated',
    components: {
        Teacher
    },
    async created() {
        let first_name = this.dataUser.first_name = this.user.first_name
        let last_name = this.dataUser.last_name = this.user.last_name
        let role = this.dataUser.role = this.user.role
        let username = this.dataUser.username = this.user.username
        return {
            first_name,
            last_name,
            role,
            username
        }
    },
    data() {
        return {
            hover: false,
            drawer: true,
            miniVariant: false,
            title: 'brand.',
            dataUser: {
                first_name: '',
                last_name: '',
                role: '',
                username: ''
            }
        }
    },
    computed: {
        ...mapState(["user"]),
        // ...mapGetters(['GuruIsAuthenticated'])
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
                .then(() => this.$router.replace({ path: '/' }))
        }
    }
}
</script>
<style scoped>
>>>.list__tile--active {
    background-color: rgba(0, 0, 0, 0.2);
    color: black;
}

>>>.navigation-drawer>.list .list__tile--active>:first-child .icon {
    color: inherit !important;
}

>>>.input-group--focused .input-group__append-icon {
    color: inherit !important;
}


>>>.search-bar .input-group__details:after {
    display: none !important;
}

>>>.search-bar .input-group__details:before {
    display: none !important;
}
</style>
