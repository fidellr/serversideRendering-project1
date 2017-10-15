<template >
  <v-container grid-list-xs>
    <v-layout column align-center wrap>
      <v-flex xs10 offset-sm3>
        <v-card class="grey lighten-1">
          <v-card>
            <v-card-title class="title">Kategori</v-card-title>
          </v-card>
          <KategoriHome/>


          <v-card-actions>
            <v-spacer></v-spacer>
            <v-flex>
              <v-btn color="primary" class="grey darken-1" nuxt to="/kategori">Tampilkan Lebih</v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import KategoriHome from '~/components/home/KategoriHome.vue'
export default {
  async fetch({ store, params }) {
    if (store.state.kategoriHome !== null) {
      await store.state.kategoriHome
    } else if (store.state.kategoriHome === null) {
      let { data } = await axios.get('https://ade-project1-001.herokuapp.com/v1/categories')
      let dataKat = data.map(kat => {
        return {
          name: kat.name,
          icon: kat.icon
        }
      })
      store.commit('SET_LOADCATEGORIES', dataKat.slice(0, 4))
    }
  },
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