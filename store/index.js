import Vuex from "vuex";
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
// import VuexPersistence from 'vuex-persist'
const store = () =>
  new Vuex.Store({
    state: {
      sidebar: false,
      kategoriHome: null,
      users: {},
      token: null,
      user: null,
      snackbarWrongRoleMurid: false,
      snackbarWrongRoleGuru: false,
     loading: false,
      fullKategori: [
        {
          title: "Teknik",
          subkategori: [
            {
              nama: "Arsitektur",
              to: ""
            },
            {
              nama: " Bioproses",
              to: ""
            },
            {
              nama: " Elektro",
              to: ""
            },
            {
              nama: " Industri",
              to: ""
            },
            {
              nama: "Informatika",
              to: ""
            },
            {
              nama: " Kimia",
              to: ""
            },
            {
              nama: " Lingkungan",
              to: ""
            },
            {
              nama: " Metalurgi & Material",
              to: ""
            },
            {
              nama: " Mesin",
              to: ""
            },
            {
              nama: " Lingkungan",
              to: ""
            }
          ]
        },
        {
          title: "Bisnis",
          subkategori: [
            {
              nama: "Kewirausahaan",
              to: ""
            },
            {
              nama: "Manajemen",
              to: ""
            }
          ]
        },
        {
          title: "Ekonomi",
          subkategori: [
            {
              nama: "Teori & Praktek Ekonomi",
              to: ""
            },
            {
              nama: "Akuntansi",
              to: ""
            },
            {
              nama: "Keuangan",
              to: ""
            },
            {
              nama: "Perpajakan",
              to: ""
            }
          ]
        },
        {
          title: "Desain & Seni",
          subkategori: [
            {
              nama: "Musik",
              to: ""
            },
            {
              nama: "Fine Art",
              to: ""
            },
            {
              nama: "Desain Grafis",
              to: ""
            }
          ]
        }
      ]
    },
    actions,
    mutations,
    getters,
    // plugins: [vuexCookie.plugin]
  });
export default store