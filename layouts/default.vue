<template>
  <v-app>
    <UnsignBar v-if="!GuruIsAuthenticated && !MuridIsAuthenticated" />
    <TeacherBar v-if="GuruIsAuthenticated" />
    <StudentBar v-if="MuridIsAuthenticated" />
    <main>
      <v-container>
        <nuxt />
      </v-container>
      <v-footer>
        <v-spacer></v-spacer>
        <span>&copy; Made with
          <v-icon>favorite</v-icon> in Bandung
        </span>
      </v-footer>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import UnsignBar from '~/components/home/UnsignBar.vue'
import TeacherBar from '~/components/home/TeacherBar.vue'
import StudentBar from '~/components/home/StudentBar.vue'
export default {
  components: {
    UnsignBar,
    TeacherBar,
    StudentBar
  },
  data() {
    return {
      // hover: false,
      // drawer: true,
      // miniVariant: false,
      // title: 'Brand'

    }
  },
  computed: {
    ...mapGetters(['GuruIsAuthenticated', 'MuridIsAuthenticated']),
    // guruAuth(){
    //  if (this.GuruIsAuthenticated) {
    //    return this.MuridIsAuthenticated = false
    //  }
    // },
    // muridAuth(){
    //   if (this.MuridIsAuthenticated) {
    //     return this.GuruIsAuthenticated = false
    //   }
    // }
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

>>>.input-group__append-icon {
  color: inherit !important;
  float: right;
}


>>>.search-bar .input-group__details:after {
  display: none !important;
}









/* >>>.input-group.input-group--solo {
  width: 305px;
  min-height: 12px;
  border-radius: 4vmin;
} */

>>>.search-bar .input-group__details:before {
  display: none !important;
}
</style>
