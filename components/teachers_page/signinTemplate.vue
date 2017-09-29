<template>
  <div>
    <v-dialog width="340px" v-model="dialog" persistent>

      <v-btn class="blue darken-3 white--text" small slot="activator">masuk</v-btn>
      <!-- v-if="Authentication" -->
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
              <v-snackbar :timeout="timeout" top right v-if="snackbarWrongRoleMurid" v-model="snackbarWrongRoleMurid">hmm..sepertinya Anda bukan Murid
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
              <v-snackbar :timeout="timeout" top right v-if="snackbarWrongRoleGuru" v-model="snackbarWrongRoleGuru">hmm..sepertinya Anda bukan Guru
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