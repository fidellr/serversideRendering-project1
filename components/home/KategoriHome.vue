<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex v-for="kategori in kategoriHome" :key="kategori.name" class="text-sm-center" grow>
        <v-spacer></v-spacer>
        <v-card style="width:200px;" hover>
          <v-card-media :src="'/assets/img/'+kategori.icon" height="200px" style=" filter:blur(2px);">
          </v-card-media>
          <v-card class="grey lighten-3">
            <v-btn class="text-xs-center" flat nuxt to="/kategori">{{kategori.name}}</v-btn>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
 
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      kategoriHome: 'kategoriHome'
    })
  },
  methods: {

  }
}
</script>


