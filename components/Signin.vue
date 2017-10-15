<template>
  <div>
    <v-dialog width="340px" v-model="dialog" persistent>

      <v-btn class="blue darken-3 white--text" small slot="activator">masuk</v-btn>
      <v-tabs dark grow>
        <v-tabs-bar class="cyan">
          <v-tabs-item dark v-for="tab in tabs" :key="tab" :href="'#'+tab">{{tab}}</v-tabs-item>
          <v-tabs-slider class="yellow"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content v-for="tab in tabs" :key="tab" :id="tab">
            <!-- Login Murid -->
            <v-card v-if="tab === 'Murid'">
              <v-card-title>
                <span class="headline">Portal {{tab}}</span>
              </v-card-title>
              <v-card-text>
                <v-text-field v-model="signInMurid.username" label="Username" :rules="[rules.required]"></v-text-field>
                <v-text-field v-model="signInMurid.password" label="Password" type="password" :rules="[rules.required]" :append-icon="e3 ? 'visibility_off' : 'visibility'" :append-icon-cb="() => (e3 = !e3)" :type="e3 ? 'password' : 'text'" @keyup.enter="muridValidation"></v-text-field>
                <a class="blue--text" href="#">Lupa password?</a>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn class="blue--text darken-1" flat @click.native="muridValidation">Masuk</v-btn>
              </v-card-actions>
              <v-snackbar :timeout="timeout" top right v-if="snackbarLoginFailed" v-model="snackbarLoginFailed">Email/Password Anda salah! Mohon di cek kembali!
                <v-btn flat class="pink--text" @click.native="snackbarLoginFailed = false">Close</v-btn>
              </v-snackbar>
              <v-snackbar :timeout="timeout" top right v-model="snackbarWrongRoleMurid">hmm..sepertinya anda bukan murid
                <v-btn flat class="pink--text" @click.native="snackbarWrongRoleMurid = false">Close</v-btn>
              </v-snackbar>
            </v-card>
            <!-- EndOfLoginMurid -->

            <!-- Login Guru -->
            <v-card v-else-if="tab === 'Guru'">
              <v-card-title>
                <span class="headline">Portal {{tab}}</span>
              </v-card-title>
              <v-card-text>
                <v-text-field v-model="signInGuru.username" :rules="[rules.required]" label="Username" required></v-text-field>
                <v-text-field v-model="signInGuru.password" :rules="[rules.required]" label="Password" type="password" :append-icon="e4 ? 'visibility_off' : 'visibility'" :append-icon-cb="() => (e4 = !e4)" :type="e4 ? 'password' : 'text'" @keyup.enter="guruValidation" required></v-text-field>
                <a class="blue--text" href="#">Lupa password?</a>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn class="blue--text darken-1" flat @click.native="guruValidation">Masuk</v-btn>
              </v-card-actions>
              <v-snackbar :timeout="timeout" top right v-if="snackbarLoginFailed" v-model="snackbarLoginFailed">Email/Password Anda salah! Mohon di cek kembali!
                <v-btn flat class="pink--text" @click.native="snackbarLoginFailed = false">Close</v-btn>
              </v-snackbar>
              <v-snackbar :timeout="timeout" top right v-model="snackbarWrongRoleGuru">hmm..sepertinya Anda bukan Guru
                <v-btn flat class="pink--text" @click.native="snackbarWrongRoleGuru = false">Close</v-btn>
              </v-snackbar>
            </v-card>
            <!-- EndOfLoginGuru -->

            <!-- Pendaftaran -->
            <v-card v-else>
              <v-card-title>
                <span class="headline">{{tab}}</span>
              </v-card-title>
              <v-card-text>
                <v-text-field v-model="dataUser.first_name" hint="Masukan nama pertama Anda" :rules="[rules.required]" label="Nama awal" type="text" required>
                </v-text-field>
                <v-text-field v-model="dataUser.last_name" hint="Masukan nama akhir Anda" :rules="[rules.required]" label="Nama akhir" type="text" required>
                </v-text-field>
                <!-- date-picker -->
                <label>Tanggal lahir</label>
                <v-date-picker v-model="dataUser.date_of_birth" :date-format="date => new Date(date).toDateString()" :formatted-value.sync="formattedDate">
                </v-date-picker>
                <v-text-field :label="formattedDate || 'Tanggal lahir'" disabled>
                </v-text-field>
                <!-- EndOfDate-Picker -->

                <v-text-field v-model="dataUser.username" hint="Jumlah harus lebih dari 6 karakter" :rules="[rules.required,()=> dataUser.username.length >= 6 || 'kurang dari 6 karakter!']" label="Username" type="text" required>
                </v-text-field>
                <v-text-field v-model="dataUser.password" label="Password" :rules="[rules.required]" :append-icon="e2 ? 'visibility_off': 'visibility'" :append-icon-cb="()=> (e2 = !e2)" :type="e2 ? 'password':'text'" class="password-strength" :class="passwordClasses" :hint="strength" required>
                </v-text-field>
                <v-text-field v-model="conPass" :rules="[rules.required,()=> dataUser.password === conPass || 'Password anda tidak sama!']" label="Konfirmasi password" required :append-icon="e1 ? 'visibility_off' : 'visibility'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'">
                </v-text-field>

                <v-text-field :rules="[rules.required, rules.email]" type="email" label="Email" v-model="dataUser.email" required>
                </v-text-field>
                <v-select overflow v-model="dataUser.gender" label="Jenis kelamin" :rules="[rules.required]" :items="gender">
                </v-select>
                <v-select label="Sebagai" v-model="dataUser.role" :rules="[rules.required]" :items="role" overflow>
                </v-select>
                <v-snackbar :timeout="timeout" top right v-if="snackbarRegis" v-model="snackbarRegis">Pastikan data yang anda isi tidak ada yang kosong!
                  <v-btn flat class="pink--text" @click.native="snackbarRegis = false">Close</v-btn>
                </v-snackbar>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn class="blue--text darken-1" flat @click.native="dialog = false">
                  Tutup
                </v-btn>
                <v-btn type="submit" class="blue--text darken-1" @click.prevent="addUser" flat>
                  Daftar
                </v-btn>
              </v-card-actions>
            </v-card>
            <!-- EndOfPendaftaran -->

          </v-tabs-content>
        </v-tabs-items>

      </v-tabs>
    </v-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  // middleware: 'anonymous',
  data() {
    return {
      dialog: false,
      snackbarRegis: false,
      snackbarLoginFailed: false,
      e1: true,
      e2: true,
      e3: true,
      e4: true,
      timeout: 6000,
      tabs: ['Murid', 'Guru', 'Pendaftaran'],
      gender: ['Laki-laki', 'Perempuan'],
      role: ['Murid', 'Guru'],
      conPass: '',
      formattedDate: null,
      formError: null,
      dataUser: {
        first_name: "",
        last_name: "",
        username: "",
        date_of_birth: "",
        email: "",
        password: "",
        gender: "",
        role: ""
      },
      signInMurid: {
        username: '',
        password: ''
      },
      signInGuru: {
        username: '',
        password: ''
      },
      rules: {
        required: (value) => !!value || 'Wajib di isi!.',
        email: (value) => {
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Input harus berformat email!.'
        },
      }
    }
  },
  computed: {
    strength() {
      const length = this.dataUser.password.length
      const strength = {
        'Kuat': length >= 8,
        'Lumayan': length >= 5 && length <= 7,
        'Lemah': length < 4
      }
      return Object.keys(strength).find(key => strength[key])
    },
    passwordClasses() {
      return `password-strength-${this.strength}`
    },
    ...mapState(["snackbarWrongRoleMurid", "snackbarWrongRoleGuru","loading"])
  },
  methods: {
    addUser() {
      if (this.dataUser.first_name.length && this.dataUser.last_name.length && this.dataUser.username.length && this.dataUser.password.length && this.dataUser.email.length && this.dataUser.date_of_birth.length && this.dataUser.gender.length && this.dataUser.role.length > 0) {
        return this.$store.dispatch('addUser', {
          first_name: this.dataUser.first_name,
          last_name: this.dataUser.last_name,
          gender: this.dataUser.gender,
          date_of_birth: this.dataUser.date_of_birth,
          username: this.dataUser.username,
          password: this.dataUser.password,
          email: this.dataUser.email,
          role: this.dataUser.role
        })

      } else {
        return this.snackbarRegis = true
      }
    },
    async muridValidation() {
      if (this.signInMurid.username.length && this.signInMurid.password.length > 0) {
        try {
          await this.$store.dispatch('loginMurid', {
            username: this.signInMurid.username,
            password: this.signInMurid.password
          })
          this.GuruIsAuthenticated = false
           this.$router.push({ name: 'murid-username-profile', params: { username: this.$store.state.user.username } })
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.snackbarLoginFailed = true
          }
        }
      } else {
        return this.snackbarLoginFailed = true
      }
    },
    async guruValidation() {
      if (this.signInGuru.username.length && this.signInGuru.password.length > 0) {
        try {
          await this.$store.dispatch('loginGuru', {
            username: this.signInGuru.username,
            password: this.signInGuru.password
          })
        } catch (error) {
          console.log(error)
          if (error.response && error.response.status === 401) {
            this.snackbarLoginFailed = true
          }
        }
      } else {
        return this.snackbarLoginFailed = true
      }
    },
  }
}
</script>
<style scoped>
>>>.password-strength-Lemah .input-group__hint {
  color: #f00;
}

>>>.password-strength-Lumayan .input-group__hint {
  color: #ffa500;
}

>>>.password-strength-Kuat .input-group__hint {
  color: #008000;
}
</style>
