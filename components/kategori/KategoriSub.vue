<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap v-for="fullKategori in fullKategori" :key="fullKategori.title" style="margin-bottom:50px;">
      <v-list-tile-title class="body-2">
        &nbsp;&nbsp;{{fullKategori.title}}
      </v-list-tile-title>
      <v-tabs class="grey lighten-3">
        <v-tabs-bar class="grey lighten-3" grow>
          <v-tabs-item v-for="namaDoang in fullKategori.subKategori.nama" :key="namaDoang" :href="'#'+namaDoang" >
            <v-btn small flat nuxt to="" :id="namaDoang">{{namaDoang}}</v-btn>
          </v-tabs-item>
          <v-tabs-slider class="grey darken-2"></v-tabs-slider>
        </v-tabs-bar>
      </v-tabs>

    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      fullKategori: 'ambilFullKategori'
    })
  },  
  data() {
    return {
    }
  }
}
</script>
<style scoped>

</style>
