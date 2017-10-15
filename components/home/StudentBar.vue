<template>
    <div>
        <v-navigation-drawer class="grey lighten-2 " persistent clipped :mini-variant="miniVariant" v-model="drawer" 
        style="margin-top:65px;"
        >
            <v-list class="grey lighten-2">
                <!-- Home -->
                <v-list-tile router to="/" exact>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Beranda
                    </v-list-tile-content>
                </v-list-tile>

                <!-- Home -->
                <!-- Kategori -->
                <v-list-tile router to="/kategori" exact>
                    <v-list-tile-action>
                        <v-icon>class</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Kategori
                    </v-list-tile-content>
                </v-list-tile>

                <!-- Kategori -->
                <!-- profile -->
                <v-list-tile router :to="'/murid/'+dataUser.username+'/profile'" exact>
                    <v-list-tile-action>
                        <v-icon>location_city</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Profile
                    </v-list-tile-content>
                </v-list-tile>

                <!-- profile -->
                <!-- Panduan -->
                <v-list-tile router to="/" exact>
                    <v-list-tile-action>
                        <v-icon>collections_bookmark</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Kelasku
                    </v-list-tile-content>
                </v-list-tile>

                <!-- Panduan -->
                <v-list-tile router to="/panduan" exact>
                    <v-list-tile-action>
                        <v-icon>collections_bookmark</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        Jadwal Belajar
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>

        </v-navigation-drawer>
        <!-- Toolbar -->
        <v-toolbar class="grey darken-3" fixed>
            <v-toolbar-side-icon class="white--text" @click="drawer = !drawer">
            </v-toolbar-side-icon>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon class="white--text" v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-toolbar-title class="white--text" v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
                <v-text-field column align-center solo label="Saya mau belajar.." class="search-bar" hide-details append-icon="search"></v-text-field>
            <v-spacer></v-spacer>

            <v-tooltip bottom>
                <v-btn icon small slot="activator">
                    <v-icon class="red--text">favorite</v-icon>
                </v-btn>
                <span>Menyukai</span>
            </v-tooltip>

            <v-tooltip bottom>
                <v-btn icon small slot="activator">
                    <v-icon class="white--text">notifications</v-icon>
                </v-btn>
                <span>Notifikasi</span>
            </v-tooltip>

            <div class="text-xs-center">
                <v-menu open-on-hover offset-y :close-on-content-click="false" :nudge-width="100">
                    <v-avatar slot="activator" class="grey lighten-4" size="32px">
                        <img src="../../static/v.png">
                    </v-avatar>

                    <v-card>

                        <v-list style="background-color:#eeeeee;">
                            <v-list-tile>
                                <v-list-tile-avatar>
                                    <v-avatar height="40" width="40">
                                        <img src="../../static/v.png" alt="">
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
    </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
    data() {
        return {
            hover: false,
            drawer: true,
            miniVariant: false,
            title: 'brand.',
            clipped: false,
            dataUser: {
                first_name: '',
                last_name: '',
                role: '',
                username: ''
            }
        }
    },
    middleware: 'authenticated',
    components: {
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
    computed: {
        ...mapState(["token", "user"])
    },
    methods: {
        logout() {
            this.$store.dispatch('logout').then((res) => {
                this.$router.replace('/')
            })
        }
    }
}
</script>
