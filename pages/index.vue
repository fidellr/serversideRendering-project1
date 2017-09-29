<template >
  <v-container grid-list-xs>
    <br/>
    <br/>
    <br/>
    <v-layout column align-center wrap >
      <v-flex xs10 offset-xs3>
        <v-card class="green accent-1">
          <v-card>
            <v-card-title class="title">Kategori</v-card-title>
          </v-card>

          <KategoriHome/>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-flex>
              <v-btn primary class="green accent-3" nuxt to="/kategori">Tampilkan Lebih</v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import KategoriHome from '~/components/home/KategoriHome.vue'
export default {
  components: {
    KategoriHome
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>